package system

import World
import agent.Agent
import config.Time
import items.XmpBurster
import util.SoundUtil
import util.data.Coords
import util.data.Damage


object Queues {
    val attackQueue: MutableMap<Int, MutableMap<Coords, List<XmpBurster>>> = mutableMapOf()
    val damageQueue: MutableMap<Int, List<Damage>> = mutableMapOf()
    val attackDelayTicks: Int = Time.secondsToTicks(10)
    val damageDelayTicks: Int = Time.secondsToTicks(10)

    fun registerAttack(agent: Agent, xmps: List<XmpBurster>) {
        val attackFutureTick = World.tick + attackDelayTicks
        var attackMap = attackQueue[attackFutureTick]
        if (attackMap == null) {
            attackMap = mutableMapOf()
        }
        attackMap[agent.pos] = xmps
        attackQueue[attackFutureTick] = attackMap

        val damageFutureTick = World.tick + damageDelayTicks
        val damageList: List<Damage> = xmps.flatMap { xmp -> xmp.dealDamage(agent) }

        val soundLimit = 4
        xmps.take(soundLimit).forEach { SoundUtil.playXmpSound(it.level, agent.pos) }
        damageQueue[damageFutureTick] = damageList
    }

    fun endTick(tick: Int) {
        val futureAttacks = attackQueue.filter { it.key > tick }
        attackQueue.clear()
        attackQueue.putAll(futureAttacks)

        val futureDamages = damageQueue.filter { it.key > tick }
        damageQueue.clear()
        damageQueue.putAll(futureDamages)
    }
}
