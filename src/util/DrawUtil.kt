package util

import Canvas
import Ctx
import World
import agent.Faction
import agent.NonFaction
import agent.action.ActionItem
import config.*
import config.Dim
import config.Styles.VectorStyle.CIRCLE
import config.Styles.VectorStyle.SQUARE
import items.XmpBurster
import items.deployable.DeployableItem
import items.level.LevelColor
import items.level.PortalLevel
import items.level.XmpLevel
import items.types.ShieldType
import org.w3c.dom.*
import portal.Portal
import system.Com
import system.Cycle
import system.Queues
import util.data.*
import kotlin.browser.document
import kotlin.math.PI
import kotlin.math.max
import kotlin.math.round

object DrawUtil {
    const val CODA = "Coda"
    const val AMARILLO = "AmarilloUSAF"

    fun redraw() {
        clear()
        with(World) {
            allAgents.forEach { it.drawRadius(ctx()) }
            allPortals.forEach { it.drawResonators(ctx()) }
            allNonFaction.forEach { it.draw(ctx()) }
            allFields().forEach { it.draw(ctx()) }
            allLinks().forEach { it.draw(ctx()) }
            allPortals.forEach { it.drawCenter(ctx()) }
            allAgents.forEach { it.draw(ctx()) }
            DrawUtil.drawAttacks()
            if (Styles.isDrawPortalNames) {
                allPortals.forEach { it.drawName(ctx()) }
            }
        }
    }

    fun clear() = redraw(World.can, World.ctx())
    fun clearBackground() {
        val maybeImage: ImageData? = if (Styles.isDrawNoiseMap) World.noiseImage else null
        redraw(World.bgCan, World.bgCtx(), maybeImage)
    }
    private fun clearUserInterface() = redraw(World.uiCan, World.uiCtx())

    private fun redraw(canvas: Canvas, ctx: Ctx, image: ImageData? = null) {
        canvas.width = Dim.width
        canvas.height = Dim.height
        if (image != null) {
            ctx.putImageData(image, 0.0, 0.0)
        } else {
            ctx.clearRect(0.0, 0.0, canvas.width.toDouble(), canvas.height.toDouble())
        }
    }

    private fun clearUiLine(y: Double, h: Double) {
        World.uiCtx().clearRect(0.0, y, World.uiCan.width.toDouble(), h)
    }

    fun drawLoading() {
        with(Config) {
            val vecCount = World.countPortals() + NonFaction.offscreenCount()
            val vecY = 2.0 + 34.0 + (Dim.height / 2.0)
            val vecX = ((Dim.width / 2.0) - (Dim.loadingBarLength / 2.0)) - 13.0
            val vecTot = startPortals + NonFaction.offscreenTotal()
            val vecH = 21.0
            val npcY = vecY + vecH - 13.0
            val npcH = 8.0
            clearUiLine(vecY - vecH - 1, vecH + npcH + 2)
            drawVectorLoadingBar(vecX, vecY, vecH, vecCount, vecTot)
            drawNpcLoadingBar(vecX, npcY, npcH, World.countNonFaction(), startNonFaction)
        }
    }

    fun drawLoadingText(text: String) {
        val y = Dim.height / 2
        val x = ((Dim.width / 2.0) - (Dim.loadingBarLength / 2.0)).toInt()
        val lineWidth = 3.0
        val strokeStyle: String = Colors.black
        val h = Dim.loadingFontSize
        val hh = h / 2
        clearUiLine(y.toDouble() - hh - 1, h.toDouble() + 2)
        strokeText(World.uiCtx(), Coords(x, y), text, Colors.white, h, AMARILLO, lineWidth, strokeStyle)
    }

    private fun drawVectorLoadingBar(x: Double, y: Double, h: Double, value: Int, of: Int) {
        val w = Dim.loadingBarLength / of
        val strokeStyle = "#000000ff"
        val lineWidth = 1.0
        (0 until of).forEach {
            val xx = x + (it * w)
            val fillStyle = if (it <= value) "#ffffffbb" else "#ffffff44"
            drawExactRect(World.uiCtx(), xx, y, h, w, fillStyle, strokeStyle, lineWidth)
        }
    }

    private fun drawNpcLoadingBar(x: Double, y: Double, h: Double, value: Int, of: Int) {
        val lineWidth = 1.0
        val stroke = "#000000ff"
        val borderFill = "#ffffff44"
        drawExactRect(World.uiCtx(), x, y, h, Dim.loadingBarLength, borderFill, stroke, lineWidth)
        val fill = "#ffffffbb"
        val w = Dim.loadingBarLength * value / of
        drawExactRect(World.uiCtx(), x, y, h, w, fill, stroke, lineWidth)
    }

    fun drawNonFaction(nonFaction: NonFaction) = nonFaction.draw(World.ctx())
    fun drawAllNonFaction(ctx: Ctx) = World.allNonFaction.forEach { it.draw(ctx) }
    fun drawAllPortals(ctx: Ctx) = World.allPortals.forEach { it.drawCenter(ctx) }

    fun redrawUserInterface(tick: Int, enlMu: Int, resMu: Int) {
        clearUserInterface()
        drawMindUnits(enlMu, resMu)
        drawCycle()
        drawTick()
        drawStats()
        if (Styles.isDrawCom) {
            Com.draw(World.uiCtx())
        }
        if (Styles.isDrawTopAgents) {
            drawTopAgents()
        }
        if (World.mousePos != null) {
            highlightMouse(World.mousePos!!)
        }
        if (Config.isHighlighActionLimit) {
            drawActionLimits()
        }
    }

    private val topArea = Line.create(0, 0, Dim.width, HtmlUtil.topActionOffset())
    private val bottomArea = Line.create(0, Dim.height - Dim.botActionOffset.toInt(), Dim.width, Dim.height)
    private val leftSliderArea = Line.create(0, HtmlUtil.topActionOffset(), HtmlUtil.leftSliderWidth(), HtmlUtil.leftSliderHeight())
    private val rightSliderArea = Line.create(Dim.width - HtmlUtil.rightSliderWidth(), HtmlUtil.topActionOffset(), Dim.width, HtmlUtil.rightSliderHeight())

    fun drawActionLimits(isHighlightBottom: Boolean = true) {
        with(World.ctx()) {
            beginPath()
            fillStyle = "#00000077"
            fillRect(topArea.fromX, topArea.fromY, topArea.toX, topArea.toY)
            if (isHighlightBottom) {
                fillRect(bottomArea.fromX, bottomArea.fromY, bottomArea.toX, bottomArea.toY)
            }
            fillRect(leftSliderArea.fromX, leftSliderArea.fromY, leftSliderArea.toX, leftSliderArea.toY)
            fillRect(rightSliderArea.fromX, rightSliderArea.fromY, rightSliderArea.toX, rightSliderArea.toY)
            closePath()
        }
    }

    private fun highlightMouse(pos: Coords) {
        when {
            World.shadowStreetMap == null -> return
            topArea.isPointInArea(pos) -> return
            leftSliderArea.isPointInArea(pos) -> return
            rightSliderArea.isPointInArea(pos) -> return
        }
        val ctx = World.uiCtx()
        val r = Dim.maxDeploymentRange * Constants.phi
        val circle = Circle(pos, r)

        val tempCan = document.createElement("canvas") as Canvas
        val tempCtx = tempCan.getContext("2d") as Ctx
        tempCan.width = 2 * circle.radius.toInt()
        tempCan.height = 2 * circle.radius.toInt()
        val xOffset = -(circle.center.xx() - r)
        val yOffset = -(circle.center.yy() - r)
        tempCtx.putImageData(World.shadowStreetMap!!, xOffset, yOffset)

        ctx.beginPath()
        ctx.arc(circle.center.xx(), circle.center.yy(), circle.radius, 0.0, 2.0 * PI)
        ctx.clip()

        ctx.beginPath()
        ctx.drawImage(tempCan, pos.xx() - r, pos.yy() - r, 2 * r, 2 * r)

        ctx.globalAlpha = 0.5

        val color = when {
            pos.hasClosePortalForClick() -> Colors.orange
            pos.isBuildable() -> Colors.white
            else -> Colors.red
        }
        val image = Portal.renderPortalCenter(color, PortalLevel.ZERO)
        ctx.drawImage(image, pos.xx() - (image.width / 2), pos.yy() - (image.height / 2))
        ctx.globalAlpha = 1.0
    }

    private fun drawAttacks() {
        val attackQueue: MutableMap<Int, MutableMap<Coords, List<XmpBurster>>> = Queues.attackQueue
        attackQueue.forEach { tickEntry: Map.Entry<Int, MutableMap<Coords, List<XmpBurster>>> ->
            val futureTick = tickEntry.key
            val ticksInFuture = futureTick - World.tick
            val attackMap: MutableMap<Coords, List<XmpBurster>> = tickEntry.value
            attackMap.forEach { attackEntry: Map.Entry<Coords, List<XmpBurster>> ->
                val pos = attackEntry.key
                val bursters = attackEntry.value
                bursters.forEach { xmp ->
                    val image = damageCircleImages[xmp.level to ticksInFuture]
                    if (image != null) { //FIXME
                        World.ctx().drawImage(image, pos.xx() - (image.width / 2), pos.yy() - (image.height / 2))
                    }
                }
            }
        }

        val r = Dim.maxDeploymentRange.toInt()
        val damageQueue: MutableMap<Int, List<Damage>> = Queues.damageQueue
        damageQueue.forEach { damageEntry: Map.Entry<Int, List<Damage>> ->
            val futureTick = damageEntry.key
            val ticksInFuture = futureTick - World.tick
            val ratio = (Queues.damageDelayTicks - ticksInFuture) / Queues.damageDelayTicks
            val damageList: List<Damage> = damageEntry.value
            damageList.forEach { damage: Damage ->
                val pos = damage.pos
                val lineWidth = 3
                val newPos = pos.copy(y = pos.y - ratio - lineWidth, x = pos.x - r + lineWidth)
                val image = getImage(damage)
                World.ctx().drawImage(image, newPos.xx(), newPos.yy())
            }
        }
        Queues.endTick(World.tick)
    }

    private fun getImage(damage: Damage): Canvas {
        val damagePercent = kotlin.math.min(damage.value, 100)
        return if (damage.isCritical) {
            critDamageImages.getValue(damagePercent)
        } else {
            damageImages.getValue(damagePercent)
        }
    }

    private val damageImages: Map<Int, Canvas> = (0..100).map { it to createDamageImage(it, false) }.toMap()
    private val critDamageImages: Map<Int, Canvas> = (0..100).map { it to createDamageImage(it, true) }.toMap()

    private fun createDamageImage(damageValue: Int, isCritical: Boolean): Canvas {
        val fontSize = 11
        val lineWidth = 3.0
        val w = (fontSize * 5) + (2 * lineWidth)
        val h = fontSize + (2 * lineWidth)
        return HtmlUtil.preRender(w.toInt(), h.toInt(), fun(ctx: Ctx) {
            val coords = Coords(lineWidth.toInt() + (fontSize * 3 / 2), lineWidth.toInt() + (fontSize / 2))
            val clipped = max(damageValue, 1).toString()
            val color = if (isCritical) Colors.critDamage else Colors.damage
            val text = "-$clipped%"
            strokeText(ctx, coords, text, Colors.white, fontSize, CODA, lineWidth, color)
        })
    }

    private val damageCircleImages: Map<Pair<XmpLevel, Int>, Canvas> = XmpLevel.values().flatMap { xmpLevel ->
        (0..Queues.attackDelayTicks).map { ticksInFuture -> (xmpLevel to ticksInFuture) to createDamageCircleImage(xmpLevel, ticksInFuture) }
    }.toMap()

    private fun createDamageCircleImage(xmpLevel: XmpLevel, ticksInFuture: Int): Canvas {
        val strokeStyle = "#ff731533"
        val fillStyle = "#fece5a11"
        val lw = 8
        val ratio = (Queues.damageDelayTicks - ticksInFuture) / Queues.damageDelayTicks
        val r = (xmpLevel.rangeM * Dim.pixelToMFactor * ratio).toInt()
        val w = (r * 2) + (2 * lw)
        val h = w
        return HtmlUtil.preRender(w, h, fun(ctx: Ctx) {
            val attackCircle = Circle(Coords(r + lw, r + lw), r.toDouble())
            drawCircle(ctx, attackCircle, strokeStyle, lw.toDouble(), fillStyle)
        })
    }

    private fun drawStats() {
        val fontSize = Dim.statsFontSize
        val lineWidth = 3.0
        fun drawCell(pos: Coords, text: String, color: String) {
            strokeText(World.uiCtx(), pos, text, color, fontSize, CODA, lineWidth, Colors.black, CanvasTextAlign.END)
        }

        val yOff = Dim.statsTopOffset
        val yStep = fontSize * 3 / 2
        val xStep = 55
        fun drawRow(pos: Int, header: String, enl: Int, res: Int, total: Int) {
            drawCell(Coords(pos, yOff), header, Colors.white)
            drawCell(Coords(pos, yOff + yStep), enl.toString(), Faction.ENL.color)
            drawCell(Coords(pos, yOff + yStep * 2), res.toString(), Faction.RES.color)
            drawCell(Coords(pos, yOff + yStep * 3), total.toString(), Colors.white)
        }

        val xPos = Dim.width - Dim.statsRightOffset
        return with(World) {
            (1..4).forEach { step ->
                when (step) {
                    1 -> drawRow(xPos, "Agents", countAgents(Faction.ENL), countAgents(Faction.RES), countAgents())
                    2 -> drawRow(xPos + xStep, "Portals", countPortals(Faction.ENL), countPortals(Faction.RES), countPortals())
                    3 -> drawRow(xPos + (xStep * 2), "Links", countLinks(Faction.ENL), countLinks(Faction.RES), countLinks())
                    4 -> drawRow(xPos + (xStep * 3), "Fields", countFields(Faction.ENL), countFields(Faction.RES), countFields())
                }
            }
        }
    }

    private fun drawTick() {
        val pos = Coords(13, Dim.height - Dim.tickBottomOffset)
        val half = Dim.tickFontSize / 2
        World.uiCtx().fillStyle = "#00000077"
        World.uiCtx().fillRect(pos.xx() - 8, pos.yy() - half - 1, 164.0, Dim.tickFontSize + 2.0)
        World.uiCtx().fill()
        World.uiCtx().globalAlpha = 1.0
        val stamp = Time.ticksToTimestamp(World.tick)
        drawText(World.uiCtx(), pos, stamp, Colors.white, Dim.tickFontSize, CODA)
        val tick = " Tick: " + World.tick
        drawText(World.uiCtx(), pos.copy(x = pos.x + 55), tick, Colors.white, Dim.tickFontSize, CODA)
    }

    fun renderBarImage(color: String, health: Int, h: Int, w: Int, lineWidth: Int): Canvas {
        val pWidth = health * w / 100
        return HtmlUtil.preRender(w, h, fun(ctx: Ctx) {
            if (color != Colors.white) {
                val path = Path2D()
                path.moveTo(0.0, 0.0)
                path.lineTo(w.toDouble(), 0.0)
                path.lineTo(w.toDouble(), h.toDouble())
                path.lineTo(0.0, h.toDouble())
                path.lineTo(0.0, 0.0)
                path.closePath()
                DrawUtil.drawPath(ctx, path, Colors.black, lineWidth.toDouble())
                val fillPath = Path2D()
                fillPath.moveTo(0.0, 0.0)
                fillPath.lineTo(pWidth.toDouble(), 0.0)
                fillPath.lineTo(pWidth.toDouble(), h.toDouble())
                fillPath.lineTo(0.0, h.toDouble())
                fillPath.lineTo(0.0, 0.0)
                fillPath.closePath()
                DrawUtil.drawPath(ctx, fillPath, Colors.black, lineWidth.toDouble(), color)
            }
        })
    }

    private fun drawMindUnits(enlMu: Int, resMu: Int) {
        //TODO only redraw if updated.
        fun fillMuRect(from: Coords, width: Double, height: Double,
                       fillStyle: String, strokeStyle: String, lineWidth: Double) {
            with(World) {
                if (Styles.isFillMuDisplay) {
                    uiCtx().globalAlpha = 0.3
                    uiCtx().fillStyle = fillStyle
                    uiCtx().fillRect(from.x.toDouble(), from.y.toDouble(), width, height)
                }
                uiCtx().strokeStyle = strokeStyle
                uiCtx().globalAlpha = 1.0
                uiCtx().lineWidth = lineWidth
                uiCtx().beginPath()
                uiCtx().strokeRect(from.x.toDouble(), from.y.toDouble(), width, height)
                uiCtx().closePath()
                uiCtx().stroke()
            }
        }

        fun drawMuRect(pos: Coords, part: Int, faction: Faction, mu: Int) {
            val fromRect = Coords(pos.x, pos.y - Dim.muFontSize)
            val width = 1.5 * part
            val height = Dim.muFontSize.toDouble() * Constants.phi
            fillMuRect(fromRect, width, height, faction.color, faction.color, 3.0)
            val text = faction.abbr + " " + mu + "M"
            val textPos = Coords(pos.x + 21, pos.y - 3)
            strokeText(World.uiCtx(), textPos, text, faction.color, Dim.muFontSize, AMARILLO)
        }

        val totalMu = enlMu + resMu
        val enlPart: Int = round((100.0 * enlMu) / totalMu).toInt()
        val resPart: Int = round((100.0 * resMu) / totalMu).toInt()
        val xPos = Dim.muLeftOffset
        val yPos = Dim.height - Dim.muBottomOffset
        val enlPos = Coords(xPos, yPos - Dim.muFontSize * 2)
        val resPos = Coords(xPos, yPos)
        drawMuRect(enlPos, enlPart, Faction.ENL, enlMu)
        drawMuRect(resPos, resPart, Faction.RES, resMu)
    }

    private fun drawCycle() {
        if (Cycle.INSTANCE.image != null) {
            val xPos = Dim.width - Dim.cycleRightOffset
            val yPos = Dim.cycleTopOffset
            World.uiCtx().drawImage(Cycle.INSTANCE.image, xPos.toDouble(), yPos.toDouble())
        }
    }

    private fun drawTopAgents() {
        val fontSize = Dim.topAgentsInventoryFontSize
        val lineWidth = 2.0
        fun drawBars(ctx: Ctx, barWidth: Int, level: Int, color: String, pos: Coords, count: Int, maxCount: Int) {
            val xOffset = (barWidth * level) - barWidth
            val statPos = Coords(pos.x + xOffset, pos.y + (fontSize / 2))
            val h = fontSize.toDouble() * count / maxCount
            drawRect(ctx, statPos, h, barWidth.toDouble(), color, Colors.black, lineWidth)
        }

        fun drawCounts(ctx: Ctx, items: List<DeployableItem>?, col: Coords, offset: Int, isShields: Boolean = false) {
            val pos = Coords(col.x + offset, col.y)
            val barWidth = 6
            val totalWidth = 48
            val statPos = Coords(pos.x, pos.y + (fontSize / 2))
            drawRect(ctx, statPos, 0.0, totalWidth.toDouble(), Colors.black, Colors.black, lineWidth)
            if (items == null || items.isEmpty()) {
                strokeText(ctx, pos, "0", Colors.white, fontSize, CODA, lineWidth, Colors.black, CanvasTextAlign.RIGHT)
            } else {
                strokeText(ctx, pos, items.size.toString(), Colors.white, fontSize, CODA, lineWidth, Colors.black, CanvasTextAlign.RIGHT)
                val itemsByLevel: Map<Int, List<DeployableItem>> = items.groupBy { it.getLevel() }
                val countsByLevel: Map<Int, Int> = itemsByLevel.mapValues { it.value.count() }
                val maxCount = countsByLevel.map { it.value }.max() ?: 0
                if (isShields) {
                    (1..4).forEach { level ->
                        val count = countsByLevel[level] ?: 0
                        if (count > 0) {
                            val color = ShieldType.getColorForLevel(level)
                            drawBars(ctx, barWidth * 2, level, color, pos, count, maxCount)
                        }
                    }
                } else {
                    (1..8).forEach { level ->
                        val count = countsByLevel[level] ?: 0
                        if (count > 0) {
                            val color = LevelColor.map[level] ?: "#FFFFFF"
                            drawBars(ctx, barWidth, level, color, pos, count, maxCount)
                        }
                    }
                }
            }
        }

        val ctx = World.uiCtx()
        ctx.globalAlpha = 1.0
        val xPos = Dim.topAgentsLeftOffset
        val yOffset = Dim.topAgentsFontSize * 3 / 2
        val yFixOffset = Dim.height - Dim.topAgentsBottomOffset - (Config.topAgentsMessageLimit * yOffset)
        val headerPos = Coords(xPos, yFixOffset - yOffset)
        val top = World.allAgents.toList().sortedBy { -it.ap }.take(Config.topAgentsMessageLimit)
        top.forEachIndexed { index, agent ->
            val rank = (index + 1).toString()
            val name = agent.toString()
            val pos = Coords(xPos, yFixOffset + (yOffset * index))
            var offset = 0

            strokeTableText(pos, offset, rank, CanvasTextAlign.RIGHT)
            offset += 10

            strokeTableHeaderText(headerPos, offset, "XM")
            strokeTableText(pos, offset + 28, agent.xm.toString(), CanvasTextAlign.RIGHT)
            offset += 34

            strokeTableHeaderText(headerPos, offset, "AP")
            strokeTableText(pos, offset + 44, agent.ap.toString(), CanvasTextAlign.RIGHT)
            offset += 50

            strokeTableHeaderText(headerPos, offset, "Agent")
            strokeTableText(pos, offset, name, CanvasTextAlign.START, agent.faction.color)
            offset += 100

            strokeTableHeaderText(headerPos, offset, "XMPs")
            drawCounts(ctx, agent.inventory.findXmps(), pos, offset)
            offset += 70

            strokeTableHeaderText(headerPos, offset, "Resos")
            drawCounts(ctx, agent.inventory.findResonators(), pos, offset)
            offset += 70

            strokeTableHeaderText(headerPos, offset, "Cubes")
            drawCounts(ctx, agent.inventory.findPowerCubes(), pos, offset)
            offset += 70

            strokeTableHeaderText(headerPos, offset, "Shields")
            drawCounts(ctx, agent.inventory.findShields(), pos, offset, true)
            offset += 60

            val keyCount = agent.inventory.keyCount()
            strokeTableHeaderText(headerPos, offset, "Keys")
            strokeTableText(pos, offset + 24, keyCount.toString(), CanvasTextAlign.RIGHT)
            offset += 30

            strokeTableHeaderText(headerPos, offset, "Action")
            val iconRadius = Dim.agentRadius.toInt()
            val actionIconPos = Coords(pos.x + offset - iconRadius, pos.y - iconRadius)
            addIcon(actionIconPos, agent.action.item)
            strokeTableText(pos, offset + (iconRadius * 2) + 5, agent.action.toString())
            offset += 64

            strokeTableHeaderText(headerPos, offset, "Portal")
            strokeTableText(pos, offset, agent.actionPortal.name)
        }
    }

    private fun drawRect(ctx: Ctx, pos: Coords, h: Double, w: Double,
                         fillStyle: String, strokeStyle: String, lineWidth: Double) {
        drawExactRect(ctx, pos.xx(), pos.yy(), h, w, fillStyle, strokeStyle, lineWidth)
    }

    private fun drawExactRect(ctx: Ctx, x: Double, y: Double, h: Double, w: Double,
                              fillStyle: String, strokeStyle: String, lineWidth: Double) {
        ctx.fillStyle = fillStyle
        ctx.fillRect(x, y, w, -h)
        ctx.fill()
        ctx.strokeStyle = strokeStyle
        ctx.lineWidth = lineWidth
        ctx.beginPath()
        ctx.strokeRect(x, y, w, -h)
        ctx.closePath()
        ctx.stroke()
    }

    fun drawGrid() {
        with(World) {
            if (isReady) {
                grid.forEach {
                    val pos = PathUtil.shadowPosToPos(it.key)
                    val cell = it.value
                    bgCtx().fillStyle = cell.getColor()
                    bgCtx().fillRect(pos.xx() + 1, pos.yy() + 1, PathUtil.RESOLUTION.toDouble() - 1, PathUtil.RESOLUTION.toDouble() - 1)
                    bgCtx().fill()
                }
            }
        }
    }

    fun drawVectorField(portal: Portal) {
        drawVectorField(portal.vectorField)
        portal.drawCenter(World.bgCtx(), false)
    }

    fun drawVectorField(vectorField: Map<Coords, Complex>) {
        World.bgCtx().clearRect(0.0, 0.0, Dim.width.toDouble(), Dim.height.toDouble())
        val w = PathUtil.RESOLUTION - 1
        val h = PathUtil.RESOLUTION - 1
        vectorField.forEach {
            fun isWalkable() = World.grid[it.key]?.isPassable ?: false
            if (Styles.isDrawObstructedVectors || isWalkable()) {
                val vectorImageData = getOrCreateVectorImageData(w, h, it.value)
                val pos = PathUtil.shadowPosToPos(it.key)
                val isBlocked = HtmlUtil.isBlockedForVector(pos)
                if (!isBlocked) {
                    World.bgCtx().putImageData(vectorImageData, pos.xx(), pos.yy())
                }
            }
        }
    }

    private val VECTORS = mutableMapOf<Line, ImageData>()
    private fun getOrCreateVectorImageData(w: Int, h: Int, complex: Complex): ImageData {
        val center = PathUtil.RESOLUTION / 2
        val scaled = Complex.fromMagnitudeAndPhase(complex.magnitude * center, complex.phase)
        val line = Line(Coords(center, center), Coords(center + scaled.re.toInt(), center + scaled.im.toInt()))
        val maybeImage = VECTORS[line]
        return if (maybeImage != null) {
            maybeImage
        } else {
            val newImageCan = createVectorImage(w, h, complex, line)
            val newImageCtx = newImageCan.getContext("2d") as Ctx
            val imageData = newImageCtx.getImageData(0.toDouble(), 0.toDouble(), w.toDouble(), h.toDouble())
            VECTORS[line] = imageData
            imageData
        }
    }

    private fun createVectorImage(w: Int, h: Int, complex: Complex, line: Line): Canvas {
        return HtmlUtil.preRender(w, h, fun(ctx: Ctx) {
            ctx.fillStyle = "#ffffff44"
            when (Styles.vectorStyle) {
                CIRCLE -> {
                    val r = w / 2.0
                    val path = Path2D()
                    path.moveTo(r, r)
                    path.arc(r, r, r, 0.0, 2.0 * kotlin.math.PI)
                    ctx.fill(path)
                }
                SQUARE -> {
                    ctx.fillRect(1.0, 1.0, w.toDouble(), h.toDouble())
                    ctx.fill()
                }
            }
            val lineWidth = 2.0
            val strokeStyle = if (Styles.useBlackVectors) Colors.black else ColorUtil.getColor(complex)
            drawLine(ctx, line, strokeStyle + "AA", lineWidth)
        })
    }

    fun drawText(ctx: Ctx, coords: Coords, text: String, fillStyle: String, fontSize: Int, fontName: String) {
        ctx.textAlign = CanvasTextAlign.START
        ctx.font = fontSize.toString() + "px '$fontName'"
        ctx.fillStyle = fillStyle
        val xOff = (fontSize / 2) - 2
        val yOff = fontSize / 3
        ctx.fillText(text, coords.x.toDouble() - xOff, coords.y.toDouble() + yOff)
    }

    private fun addIcon(pos: Coords, item: ActionItem) {
        val image = ActionItem.getIcon(item)
        World.uiCtx().drawImage(image, pos.xx(), pos.yy())
    }

    private fun strokeTableHeaderText(headerPos: Coords, offset: Int, text: String) {
        val pos = Coords(headerPos.x + offset, headerPos.y)
        strokeText(World.uiCtx(), pos, text, Colors.white, Dim.topAgentsFontSize, CODA, 3.0)
    }

    private fun strokeTableText(headerPos: Coords, offset: Int, text: String,
                                textAlign: CanvasTextAlign = CanvasTextAlign.START, fillStyle: String = Colors.white) {
        val pos = Coords(headerPos.x + offset, headerPos.y)
        strokeText(World.uiCtx(), pos, text, fillStyle, Dim.topAgentsFontSize, CODA, 3.0, Colors.black, textAlign)
    }

    fun strokeText(ctx: Ctx, pos: Coords, text: String, fillStyle: String, fontSize: Int, fontName: String = CODA,
                   lineWidth: Double = 0.0, strokeStyle: String = Colors.black,
                   textAlign: CanvasTextAlign = CanvasTextAlign.START) {
        val xOff: Double = (fontSize / 2.0) - 2
        val yOff: Double = fontSize / 3.0
        ctx.beginPath()
        ctx.font = fontSize.toString() + "px '$fontName'"
        ctx.fillStyle = fillStyle
        ctx.lineCap = CanvasLineCap.ROUND
        ctx.lineJoin = CanvasLineJoin.ROUND
        ctx.textAlign = textAlign
        if (lineWidth > 0.0) {
            ctx.lineWidth = lineWidth
            ctx.strokeStyle = strokeStyle
            ctx.strokeText(text, pos.x - xOff, pos.y + yOff)
        }
        ctx.fillText(text, pos.x - xOff, pos.y + yOff)
        ctx.closePath()
        if (lineWidth > 0.0) {
            ctx.stroke()
        }
    }

    fun drawCircle(ctx: Ctx, circle: Circle, strokeStyle: String, lineWidth: Double, fillStyle: String? = null, alpha: Double = 1.0) {
        ctx.globalAlpha = alpha
        ctx.strokeStyle = strokeStyle
        ctx.lineWidth = lineWidth
        ctx.beginPath()
        ctx.arc(circle.center.xx(), circle.center.yy(), circle.radius, 0.0, 2.0 * PI)
        ctx.closePath()
        ctx.stroke()
        if (fillStyle != null) {
            ctx.fillStyle = fillStyle
            ctx.fill()
        }
        ctx.globalAlpha = 1.0
    }

    private fun drawPath(ctx: Ctx, path: Path2D, strokeStyle: String, lineWidth: Double, fillStyle: String? = null, alpha: Double = 1.0) {
        ctx.globalAlpha = alpha
        if (fillStyle != null) {
            ctx.fillStyle = fillStyle
            ctx.fill(path)
        }
        ctx.strokeStyle = strokeStyle
        ctx.lineWidth = lineWidth
        ctx.beginPath()
        ctx.stroke(path)
        ctx.closePath()
        ctx.stroke()
        ctx.globalAlpha = 1.0
    }

    fun drawLine(ctx: Ctx, line: Line, strokeStyle: String, lineWidth: Double, alpha: Double = 1.0) {
        ctx.globalAlpha = alpha
        ctx.strokeStyle = strokeStyle
        ctx.lineWidth = lineWidth
        ctx.beginPath()
        ctx.moveTo(line.from.xx(), line.from.yy())
        ctx.lineTo(line.to.xx(), line.to.yy())
        ctx.closePath()
        ctx.stroke()
        ctx.globalAlpha = 1.0
    }
}
