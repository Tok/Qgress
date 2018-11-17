import agent.Agent
import agent.Faction
import agent.NonFaction
import config.Config
import config.Dim
import org.khronos.webgl.Uint8Array
import org.khronos.webgl.get
import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.HTMLCanvasElement
import org.w3c.dom.ImageData
import portal.Portal
import util.DrawUtil
import util.HtmlUtil
import util.PathUtil
import util.data.Cell
import util.data.Coords
import kotlin.browser.document
import kotlin.browser.window
import kotlin.dom.clear
import kotlin.math.sqrt

typealias Ctx = CanvasRenderingContext2D
typealias Canvas = HTMLCanvasElement

object World {
    var tick: Int = 0
    var isReady = false

    lateinit var can: Canvas
    fun ctx() = HtmlUtil.getContext2D(can)

    lateinit var bgCan: Canvas
    fun bgCtx() = HtmlUtil.getContext2D(bgCan)

    lateinit var uiCan: Canvas
    fun uiCtx() = HtmlUtil.getContext2D(uiCan)

    fun resetAllCanvas() {
        can.clear()
        ctx().clearRect(0.0, 0.0, can.width.toDouble(), can.height.toDouble())
        bgCan.clear()
        bgCtx().clearRect(0.0, 0.0, bgCan.width.toDouble(), bgCan.height.toDouble())
        uiCan.clear()
        uiCtx().clearRect(0.0, 0.0, uiCan.width.toDouble(), uiCan.height.toDouble())
    }

    //var center: JSON = MapUtil.INITIAL_MAP_CENTER
    var mousePos: Coords? = null

    fun w() = can.width
    fun shadowW() = w() / PathUtil.RESOLUTION
    fun h() = can.height
    fun shadowH() = h() / PathUtil.RESOLUTION
    fun diagonalLength() = sqrt((can.width * can.width).toDouble() + (can.height * can.height)).toInt()
    fun totalArea() = can.width * can.height

    lateinit var noiseMap: Array<DoubleArray>
    lateinit var noiseImage: ImageData
    var shadowStreetMap: ImageData? = null
    lateinit var grid: Map<Coords, Cell>

    fun passableCells(): Map<Coords, Cell> = grid.filter { it.value.isPassable }
    private fun wellPassableCells(): Map<Coords, Cell> = grid.filter { it.value.isPassableInAllDirections() }
    private fun passableOnScreen(): Map<Coords, Cell> = wellPassableCells().filterNot { it.key.isOffGrid() }
    fun passableInActionArea(): Map<Coords, Cell> = passableOnScreen()
            .filterNot { it.key.y * PathUtil.RESOLUTION < HtmlUtil.topActionOffset() }
            .filterNot { it.key.y * PathUtil.RESOLUTION > (window.innerHeight - Dim.botActionOffset) }

    val frogs: MutableSet<Agent> = mutableSetOf()
    val smurfs: MutableSet<Agent> = mutableSetOf()
    val allAgents: MutableSet<Agent> = mutableSetOf()
    fun countAgents() = allAgents.count()
    fun countAgents(fact: Faction) = allAgents.count { it.faction == fact }

    val allNonFaction: MutableSet<NonFaction> = mutableSetOf()
    fun countNonFaction() = allNonFaction.count()

    val allPortals: MutableList<Portal> = mutableListOf()
    fun enlPortals() = allPortals.filter { it.owner?.faction == Faction.ENL }
    fun resPortals() = allPortals.filter { it.owner?.faction == Faction.RES }
    fun unclaimedPortals() = allPortals.filter { it.owner == null }
    fun factionPortals(fact: Faction) = allPortals.filter { it.owner?.faction == fact }
    fun countPortals() = allPortals.count()
    fun countPortals(fact: Faction) = factionPortals(fact).count()

    fun allLinks() = allPortals.flatMap { it.links }
    fun countLinks() = allLinks().count()
    fun countLinks(fact: Faction) = allLinks().filter { it.owner.faction == fact }.count()

    fun allFields() = allPortals.flatMap { it.fields }
    fun countFields() = allFields().count()
    fun countFields(fact: Faction) = allFields().filter { it.owner.faction == fact }.count()

    fun allLines() = allLinks().map { it.getLine() }

    fun calcTotalMu(fact: Faction) = allFields().filter { it.owner.faction == fact }.map { it.calculateMu() }.sum()

    private fun imageDataIndex(x: Int, y: Int, w: Int) = (x + (y * w)) * 4
    fun createNoiseImage(noiseMap: Array<DoubleArray>, w: Int, h: Int, alpha: Double = 1.0): ImageData {
        fun setPixel(imageData: ImageData, x: Int, y: Int, r: Int, g: Int, b: Int) {
            val index = imageDataIndex(x, y, imageData.width)
            imageData.data.set(arrayOf(r.toByte(), b.toByte(), g.toByte(), (Byte.MAX_VALUE * alpha).toByte()), index)
        }
        with(World) {
            val imageData: ImageData = bgCtx().createImageData(w.toDouble(), h.toDouble())
            for (x in 0 until w) {
                for (y in 0 until h) {
                    val rawNoise = noiseMap[x][y]
                    val noisePoint = ((1 + (-1 * rawNoise)) * 0.5 * Byte.MAX_VALUE.toInt()).toInt() //- 96
                    setPixel(imageData, x, y, noisePoint, noisePoint, noisePoint)
                }
            }
            return imageData
        }
    }

    fun createStreetImage(streetMap: Uint8Array, w: Int, h: Int): ImageData {
        with(World) {
            val imageData: ImageData = bgCtx().createImageData(w.toDouble(), h.toDouble())
            for (x in 0 until w) {
                for (y in 0 until h) {
                    val rawNoise = streetMap[imageDataIndex(x, y, imageData.width)]
                    val index = imageDataIndex(x, h - 1 - y, imageData.width)
                    imageData.data.set(arrayOf(rawNoise, rawNoise, rawNoise, (Byte.MAX_VALUE * 1.0).toByte()), index)
                }
            }
            return imageData
        }
    }

    fun createNonFaction(callback: () -> Unit, count: Int) {
        val batchSize = 1
        document.defaultView?.setTimeout(fun() {
            if (count > 0) {
                val realSize = kotlin.math.min(batchSize, count)
                val total = Config.startNonFaction
                val realCount = total - count + realSize
                DrawUtil.drawLoadingText("Creating Non-Faction ($realCount/$total)")
                (0..realSize).forEach { _ ->
                    val newNonFaction = NonFaction.create(World.grid)
                    World.allNonFaction.add(newNonFaction)
                }
                createNonFaction(callback, count - realSize)
            } else {
                callback()
            }
        }, 0)
    }
}
