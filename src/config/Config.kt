package config

import agent.Faction
import util.HtmlUtil
import kotlin.math.max

object Config {
    const val minPortals = 3
    const val maxPortals = 89
    const val minFrogs = 2
    const val maxFrogs = 21
    const val minSmurfs = 2
    const val maxSmurfs = 21
    const val frogQuitRate = 0.05
    const val smurfQuitRate = 0.05
    const val factionChangeRate = 0.01
    const val portalRemovalRate = 0.05

    const val startPortals = 5
    fun startFrogs() = if (HtmlUtil.isQuickstart()) 4 else minFrogs
    fun startSmurfs() = if (HtmlUtil.isQuickstart()) 4 else minSmurfs
    fun initialAp() = if (HtmlUtil.isQuickstart()) 2000000 else 0

    val maxNonFaction = max(100, maxFrogs + maxSmurfs)
    fun maxFor(faction: Faction) = when (faction) {
        Faction.ENL -> maxFrogs
        Faction.RES -> maxSmurfs
        else -> maxNonFaction
    }

    const val apMultiplier = 10

    const val isNpcSwarming = true
    const val npcXmSpawnRatio = 0.05

    const val isSoundOn = true
    const val isPlayInitialSound = false
    const val isSatOn = false

    const val isHighlighActionLimit = true
    const val vectorSmoothCount = 8
    const val shadowBlurCount = 3

    const val comMessageLimit = 8
    const val topAgentsMessageLimit = 8

    val ticksPerCheckpoint = Time.secondsToTicks(300)
    val ticksPerCycle = Time.secondsToTicks(1800)

    const val pathResolution = 10
    const val useOffscreenEdgeDestinations = false
}
