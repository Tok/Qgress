package util.data

import World
import config.Config
import config.Constants
import config.Dim
import util.HtmlUtil
import util.Util
import kotlin.math.abs
import kotlin.math.cos
import kotlin.math.sin
import kotlin.math.sqrt

data class Coords(val x: Double, val y: Double) {
    constructor(x: Int, y: Int) : this(x.toDouble(), y.toDouble())

    fun isOffGrid() = x < 0 || y < 0 || x >= World.shadowW() || y >= World.shadowH()
    fun isOffScreen() = x < 0 || y < 0 || x >= World.w() || y >= World.h()
    fun xDiff(other: Coords) = x - other.x
    fun yDiff(other: Coords) = y - other.y
    fun distanceTo(other: Coords): Double {
        val xPow = xDiff(other) * xDiff(other)
        val yPow = yDiff(other) * yDiff(other)
        return abs(sqrt(xPow + yPow))
    }

    fun toShadowPos() = Coords((x / res).toInt(), (y / res).toInt())
    fun fromShadow() = Coords((x * res).toInt(), (y * res).toInt())

    fun getSurrounding(w: Int, h: Int): List<Coords> = listOf(
        Coords(x - 1.0, y - 1.0),
        Coords(x, y - 1.0),
        Coords(x + 1.0, y - 1.0),
        Coords(x - 1.0, y),
        Coords(x + 1.0, y),
        Coords(x - 1.0, y + 1.0),
        Coords(x, y + 1.0),
        Coords(x + 1.0, y + 1.0)
    ).filter {
        it.x >= 0.0 && it.x <= (w - 1.0) && it.y >= 0.0 && it.y <= (h - 1.0)
    }

    fun randomNearPoint(radius: Int): Coords {
        val r = radius * Util.random()
        val t = Constants.tau * Util.random()
        return Coords(x + (r * cos(t)).toInt(), y + (r * sin(t)).toInt())
    }

    fun toGeo(): GeoCoords {
        val latitude = minLat + (x * pixelPartLat)
        val longitude = minLng - (y * pixelPartLng)
        return GeoCoords(longitude, latitude) //longitude = -Y, latitude = X
    }

    private fun isCloseForClick(location: Coords) = Line(location, this).calcLength() < Dim.portalRadius * 2
    private fun isClose(location: Coords) = Line(location, this).calcLength() < Dim.minDistanceBetweenPortals
    private fun findClosePortalsForClick() = World.allPortals.filter { isCloseForClick(it.location) }
    private fun findClosePortals() = World.allPortals.filter { isClose(it.location) }
    fun hasClosePortalForClick() = findClosePortalsForClick().isNotEmpty()
    fun hasClosePortal() = findClosePortals().isNotEmpty()
    fun isPassable() = World.grid.isNotEmpty() && World.grid[toShadowPos()]!!.isPassable
    fun findClosestPortal() = findClosePortals().first()
    fun isBuildable(): Boolean {
        val r = Dim.minDistancePortalToImpassable.toInt()
        return isPassable() && !hasClosePortal() &&
                World.grid[Coords(x - r, y).toShadowPos()]?.isPassable ?: false &&
                World.grid[Coords(x + r, y).toShadowPos()]?.isPassable ?: false &&
                World.grid[Coords(x, y - r).toShadowPos()]?.isPassable ?: false &&
                World.grid[Coords(x, y + r).toShadowPos()]?.isPassable ?: false
    }

    override fun toString() = "X$x:Y$y"
    override fun equals(other: Any?) = other is Coords && x == other.x && y == other.y
    override fun hashCode() = (x.hashCode() * 31) + y.hashCode()

    companion object {
        private const val defaultLat = 47.4220454 //X
        private const val defaultLng = 9.3733032 //-Y
        private const val latDist = 0.002
        private val lngDist = latDist * Dim.height / Dim.width
        private const val minLat = defaultLat - latDist
        private val minLng = defaultLng + lngDist
        private val pixelPartLat = latDist / Dim.width
        private val pixelPartLng = lngDist / Dim.height

        val res = Config.pathResolution

        private val xMax = Dim.maxDeploymentRange.toInt() * 2
        private fun createRandomNoOffset() = Coords(Util.randomInt(Dim.width), Util.randomInt(Dim.height))
        private fun createRandom(): Coords {
            val x = Dim.leftOffset + Util.randomInt((Dim.width - Dim.leftOffset - Dim.rightOffset).toInt())
            val y = Dim.topOffset + Util.randomInt((Dim.height - Dim.topOffset - Dim.botOffset).toInt())
            return Coords(x.toInt(), y.toInt())
        }

        fun createRandomForPortal(): Coords {
            if (HtmlUtil.isNotRunningInBrowser()) {
                return Coords(Util.randomInt(Dim.width), Util.randomInt(Dim.height))
            } else {
                val grid = World.passableInActionArea()
                    .filterNot { it.key.fromShadow().x < Dim.maxDeploymentRange }
                    .filterNot { it.key.fromShadow().x > World.w() - Dim.maxDeploymentRange }
                    .filterNot { it.key.fromShadow().hasClosePortal() }
                check(grid.isNotEmpty()) //map is blocked or there is no more space left.
                val randomCell = Util.shuffle(grid.toList()).first()
                val pos = randomCell.first.fromShadow()
                val offset = res / 2
                return Coords(pos.x + offset, pos.y + offset)
            }
        }

        fun createRandomPassable(grid: Map<Coords, Cell>) = createRandomPassable(grid, 10)
        private fun createRandomPassable(grid: Map<Coords, Cell>, retries: Int): Coords {
            if (HtmlUtil.isNotRunningInBrowser()) {
                return if (grid.isEmpty()) Coords(0, 0)
                    else Util.shuffle(grid.keys).first()
            }
            check(grid.isNotEmpty())
            val random = createRandomNoOffset()
            return if (grid[random.toShadowPos()]!!.isPassable) {
                random
            } else {
                if (retries > 0) {
                    createRandomPassable(grid, retries - 1)
                } else {
                    console.warn("Blocked Position: $random")
                    random //FIXME workaround..
                }
            }
        }
    }
}