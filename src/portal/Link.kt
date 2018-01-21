package portal

import Ctx
import agent.Agent
import config.Dimensions
import items.deployable.Resonator
import util.data.Line

data class Link(val origin: Portal, val destination: Portal, val owner: Agent) {
    fun getLine() = Line(origin.location, destination.location)
    private fun getReverseLine() = Line(destination.location, origin.location)

    fun draw(ctx: Ctx) {
        val byHealth = listOf<Portal>(origin, destination).sortedBy { it.calcHealth() }
        val lowHpTransparency = 1.0 * byHealth.last().calcHealth() / 100
        val highHpTransparency = 1.0 * byHealth.first().calcHealth() / 100
        val gradient = ctx.createLinearGradient(origin.x(), origin.y(), destination.x(), destination.y())
        if (origin.calcHealth() < destination.calcHealth()) {
            gradient.addColorStop(0.0, owner.faction.fieldStyle + highHpTransparency + ")")
            gradient.addColorStop(1.0, owner.faction.fieldStyle + lowHpTransparency + ")")
        } else {
            gradient.addColorStop(0.0, owner.faction.fieldStyle + lowHpTransparency + ")")
            gradient.addColorStop(1.0, owner.faction.fieldStyle + highHpTransparency + ")")
        }
        with(ctx) {
            strokeStyle = gradient
            lineWidth = Dimensions.linkLineWidth
            beginPath()
            moveTo(getLine().from.x.toDouble(), getLine().from.y.toDouble())
            lineTo(getLine().to.x.toDouble(), getLine().to.y.toDouble())
            closePath()
            stroke()
        }
    }

    override fun equals(other: Any?) = other is Link &&
            (origin == other.origin && destination == other.destination ||
                    origin == other.destination && destination == other.origin)

    override fun toString() = origin.toString() + " --> " + destination.toString()

    companion object {
        fun isPossible(link: Link): Boolean = World.allLinks().filter {
            (it.origin.location == link.origin.location && it.destination.location == link.destination.location)
                    || (it.origin.location == link.destination.location && it.destination.location == link.origin.location)
        }.isEmpty()

        fun create(origin: Portal, destination: Portal, owner: Agent): Link? {
            val newLink = Link(origin, destination, owner)
            if (isPossible(newLink)) {
                return newLink
            }
            return null
        }
    }
}
