package system.display

import World
import config.Colors
import config.Dim
import config.Time
import util.DrawUtil
import util.data.Pos

object TickDisplay : Display {
    override fun draw() {
        val pos = Pos(13, Dim.height - Dim.tickBottomOffset)
        val half = Dim.tickFontSize / 2
        with(World.uiCtx()) {
            fillStyle = "#00000077"
            fillRect(pos.x - 8, pos.y - half - 1, 164.0, Dim.tickFontSize + 2.0)
            fill()
            globalAlpha = 1.0
        }
        val stamp = Time.ticksToTimestamp(World.tick)
        DrawUtil.drawText(World.uiCtx(), pos, stamp, Colors.white, Dim.tickFontSize, DrawUtil.CODA)
        val tick = " Tick: " + World.tick
        DrawUtil.drawText(World.uiCtx(), pos.copy(x = pos.x + 55), tick, Colors.white, Dim.tickFontSize, DrawUtil.CODA)
    }
}
