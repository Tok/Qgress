package config

object Dimensions {
    val maxWidth = 1400
    val portalRadius = 8.0
    val portalLineWidth = 2
    val minDistanceBetweenPortals = (2 * portalRadius) * 3
    val minDistancePortalToImpassable = portalRadius
    val resoRadius = 2.0
    val maxDeploymentRange = 34.0
    val agentRadius = 5.0
    val agentLineWidth = 1
    val agentDeployCircleLineWidth = 1.0
    val gridLineWidthMain = 0.2
    val gridLineWidth = 0.1
    val gridSizeMain = 100
    val gridSize = 20
    val linkLineWidth = 3.0

    val topActionOffset = 102.0
    val botActionOffset = 158.0

    val leftOffset = maxDeploymentRange.toInt() * Constants.phi //no portals will be placed here
    val rightOffset = maxDeploymentRange.toInt() * Constants.phi
    val topOffset = maxDeploymentRange.toInt() * Constants.phi
    val botOffset = maxDeploymentRange.toInt() * Constants.phi

    val comBottomOffset = 34
    val comRightOffset = 377 + 50
    val comFontSize = 11

    val muFontSize = 21
    val muLeftOffset = 13
    val muBottomOffset = 89

    val pixelToMFactor = 0.5

    val topAgentsBottomOffset = 0
    val topAgentsLeftOffset = 210
    val topAgentsFontSize = 13
    val topAgentsInventoryFontSize = 11

    val tickBottomOffset = 55
    val tickFontSize = 12

    val portalNameFontSize = 12
    val statsFontSize = 13
}
