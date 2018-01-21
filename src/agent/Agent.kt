package agent

import Canvas
import Ctx
import World
import agent.action.Action
import agent.action.ActionItem
import config.*
import items.QgressItem
import items.deployable.Resonator
import items.level.ResonatorLevel
import items.level.XmpLevel
import org.w3c.dom.Path2D
import portal.Link
import portal.Portal
import portal.PortalKey
import system.Queues
import util.*
import util.data.*
import kotlin.math.max
import kotlin.math.min

data class Agent(val faction: Faction, val name: String, val pos: Coords, val skills: Skills,
                 val inventory: Inventory, var action: Action, var actionPortal: Portal, var destination: Coords,
                 var ap: Int = 0, var xm: Int = 0, var velocity: Complex = Complex.ZERO) {
    fun key() = toString()
    fun distanceToDestination(): Double = pos.distanceTo(destination)
    fun distanceToPortal(portal: Portal): Double = pos.distanceTo(portal.location)
    fun isAtActionPortal(): Boolean = distanceToPortal(actionPortal) < Dimensions.maxDeploymentRange
    fun isInAttackRange(range: Int): Boolean {
        val strongest = actionPortal.findStrongestResoPos()
        return strongest != null && pos.distanceTo(strongest) < range
    }

    fun isBusy(tick: Int): Boolean = tick <= action.untilTick
    fun lineToPortal(portal: Portal) = Line(pos, portal.location)
    fun lineToDestination() = Line(pos, destination)

    fun getLevel(): Int = 8 //FIXME
    /*
    fun getLevel(): Int = when (ap) {
        in 0..10000 -> 1
        in 3000..10000 -> 2
        in 3000..10000 -> 3
        in 3000..10000 -> 4
        in 3000..10000 -> 5
        in 3000..10000 -> 6
        in 3000..10000 -> 7
        else -> 8 //TODO
    }
    */

    fun getXmCapacity(): Int = when (getLevel()) {
        1 -> 3000
        2 -> 4000
        3 -> 5000
        4 -> 6000
        5 -> 7000
        6 -> 8000
        7 -> 9000
        8 -> 10000
        else -> 10000 //TODO
    }

    fun act(): Agent {
        //println("DEBUG: ${World.tick} $action")

        xm += 10 //FIXME

        val useLocationFix = false
        if (isBusy(World.tick)) {
            if (useLocationFix && Util.random() < 0.005) {
                return goDoSomethingElse()
            }
            return this
        }
        when (action.item) {
            ActionItem.MOVE -> return moveCloserToDestinationPortal()
            ActionItem.ATTACK -> return attackPortal()
            ActionItem.DEPLOY -> return deployPortal()
        }
        return doSomething()
    }

    fun doSomething(): Agent {
        if (!isAtActionPortal()) {
            return goDoSomethingElse()
        }
        return when (actionPortal.owner?.faction) {
            null -> doNeutralPortalAction()
            this.faction -> doFriendlyPortalAction()
            else -> doEnemyPortalAction()
        }
    }

    private fun isHackPossible() = actionPortal.canHack(this)
    private fun isDeploymentPossible() = !actionPortal.isEnemyOf(this)
            && actionPortal.findAllowedResoLevels(this).map { it.value }.sum() > 0

    fun doNeutralPortalAction(): Agent {
        val hackQ = if (isHackPossible()) 0.5 else -1.0
        val deployQ = if (isDeploymentPossible()) 0.5 else -1.0
        val qValues = listOf(
                //(1.0 - skills.reliability) to { doNothing() },
                hackQ to { hackActionPortal() },
                deployQ to { deployPortal() },
                0.10 to { goDoSomethingElse() }
        )
        return Util.select(qValues).invoke()
    }

    fun doFriendlyPortalAction(): Agent {
        val hackQ = if (isHackPossible()) 0.5 else -1.0
        val deployQ = if (isDeploymentPossible()) 0.5 else -1.0
        val linkQ = if (isLinkPossible()) 0.5 else -1.0
        val qValues = listOf(
                //(1.0 - skills.reliability) to { doNothing() },
                hackQ to { hackActionPortal() },
                deployQ to { deployPortal() },
                linkQ to { createLink() },
                0.10 to { goDoSomethingElse() }
        )
        return Util.select(qValues).invoke()
    }

    fun doEnemyPortalAction(): Agent {
        val hackQ = if (isHackPossible()) 0.5 else -1.0
        val attackQ = if (isAttackPossible()) 0.5 else -1.0
        val qValues = listOf(
                //(1.0 - skills.reliability) to { doNothing() },
                hackQ to { hackActionPortal() },
                attackQ to { attackPortal() },
                0.10 to { goDoSomethingElse() }
        )
        return Util.select(qValues).invoke()
    }

    fun goDoSomethingElse(): Agent {
        val captureQ = if (MovementUtil.hasUncapturedPortals()) 0.5 else -1.0
        val attackClosestQ = if (MovementUtil.hasEnemyPortals(this) && isAttackPossible()) 0.5 else -1.0
        val attackMostLinkedQ = if (MovementUtil.hasEnemyPortals(this) && isAttackPossible()) 0.5 else -1.0
        val attackMostVulnerableQ = if (MovementUtil.hasEnemyPortals(this) && isAttackPossible()) 0.5 else -1.0
        val moveToFriendlyQ = if (MovementUtil.hasFriendlyPortals(this)) 0.5 else -1.0
        val qValues = listOf(
                attackClosestQ to { MovementUtil.moveToCloseEnemyPortal(this) },
                attackMostLinkedQ to { MovementUtil.moveToMostLinkedEnemyPortal(this) },
                attackMostVulnerableQ to { MovementUtil.moveToMostVulnerableEnemyPortal(this) },
                captureQ to { MovementUtil.moveToUncapturedPortal(this) },
                moveToFriendlyQ to { MovementUtil.moveToFriendlyHighLevelPortal(this) },
                0.50 to { MovementUtil.moveToNearestPortal(this) },
                0.50 to { MovementUtil.moveToRandomPortal(this) }
        )
        return Util.select(qValues).invoke()
    }

    private fun moveCloserToDestinationPortal(): Agent {
        if (!World.isReady) {
            println("WARN: moveCloserToDestination: World is not ready.")
            return doNothing()
        }
        if (isAtActionPortal()) {
            return doNothing()
        }
        val shadowPos = PathUtil.posToShadowPos(pos)
        val force = actionPortal.vectorField.get(shadowPos) ?: this.velocity
        val mag = skills.speed * (World.speed / 100)
        val relativeForce = Complex.fromMagnitudeAndPhase(mag, force.phase)
        val oldWeight = 0.5F * 100 / World.speed
        val oldVector = Complex.fromMagnitudeAndPhase(this.velocity.magnitude * oldWeight, this.velocity.phase)
        val newVector = Complex.fromMagnitudeAndPhase(relativeForce.magnitude * (1F - oldWeight), relativeForce.phase)
        val velo = oldVector + newVector
        return this.copy(velocity = velo, pos = Coords((pos.x + velo.re).toInt(), (pos.y + velo.im).toInt()))
    }

    private fun isAttackPossible() = inventory.findXmps()?.isNotEmpty() ?: false

    private fun actualSpeed() = skills.speed * Time.globalSpeedFactor * World.speed / 100
    private fun inRangeSpeed() = actualSpeed() / Constants.phi
    private fun isArrived() = distanceToDestination() <= inRangeSpeed()
    fun moveCloserInRange(): Agent {
        val part = inRangeSpeed() / distanceToDestination()
        val rawDiffX = (pos.xDiff(destination) * part).toInt()
        val rawDiffY = (pos.yDiff(destination) * part).toInt()
        val rawNextX = pos.x - rawDiffX
        val rawNextY = pos.y - rawDiffY
        return this.copy(pos = Coords(rawNextX, rawNextY))
    }

    fun attackPortal(): Agent {
        fun findExactDestination(): Coords {
            if (actionPortal.calcHealth() > 0.5) {
                return actionPortal.location
            }
            val maybeDestination = actionPortal.findStrongestResoPos()
            if (maybeDestination != null && maybeDestination.isPassable()) {
                return maybeDestination
            } else { //send to portal center
                return actionPortal.location
            }
        }

        fun doAttack(): Agent {
            val maxXmps = 10
            val allXmps = inventory.findXmps()
            val selectedXmps = allXmps?.sortedBy { it.level }?.take(min(maxXmps, allXmps.size))
            if (selectedXmps == null || selectedXmps.isEmpty()) {
                return goDoSomethingElse()
            }
            Queues.registerAttack(this, selectedXmps)
            inventory.consumeXmps(selectedXmps)
            return doSomething()
        }

        if (action.item != ActionItem.ATTACK) {
            this.copy(action = Action.start(ActionItem.ATTACK, World.tick), destination = findExactDestination())
        }
        if (!isArrived()) {
            return moveCloserInRange()
        }
        return doAttack()
    }

    fun deployPortal(): Agent {
        fun findExactDestination(): Coords {
            val distance = skills.deployPrecision * Dimensions.maxDeploymentRange
            return actionPortal.findRandomPointNearPortal(distance.toInt())
        }

        fun doDeploy(): Agent {
            if (actionPortal.isEnemyOf(this)) {
                return goDoSomethingElse()
            }
            val allowedResoLevels: Map<ResonatorLevel, Int> = actionPortal.findAllowedResoLevels(this)
            val areMoreResosAllowed = allowedResoLevels.map { it.value }.sum() > 0
            if (areMoreResosAllowed) {
                val ownedInPortal = actionPortal.resoSlots.filter { it.value.isOwnedBy(this) }.toList()
                val inventoryResos = inventory.items.filter { it is Resonator }.map { it as Resonator }.sortedBy { it.level }
                val deployLowFirstSet = inventoryResos.toSet()

                //in one move, deployActionPortal as many resonators as possible of one selected level
                deployLowFirstSet.forEach { reso ->
                    val owned = ownedInPortal.filter { slot -> slot.second.resonator?.level?.level ?: 0 >= reso.level.level }.count()
                    val maxDeployable: Int = max(reso.level.deployablePerPlayer - owned, 0)
                    val levelResos = inventoryResos.filter { it.level.level == reso.level.level && it.level.level <= this.getLevel() }
                    if (levelResos.isNotEmpty()) {
                        val resos = levelResos.take(min(maxDeployable, levelResos.size - 1))
                        if (resos.isNotEmpty()) {
                            val deployable = actionPortal.resoSlots.filter { it.value.resonator?.level?.level ?: 0 < reso.level.level }.toList()
                            if (!deployable.isEmpty()) {
                                val deployMap = Util.shuffle(deployable).zip(resos).map { it.first.first to it.second }.toMap()
                                val distance = distanceToPortal(actionPortal)
                                actionPortal.deploy(this, deployMap, distance.toInt())
                                SoundUtil.playDeploySound(actionPortal.location, distance.toInt())
                                return this.copy(action = Action.start(ActionItem.DEPLOY, World.tick))
                            }
                        }
                    }
                }
            }
            return doSomething()
        }

        if (action.item != ActionItem.DEPLOY) {
            this.copy(action = Action.start(ActionItem.DEPLOY, World.tick), destination = findExactDestination())
        }
        if (!isArrived()) {
            return moveCloserInRange()
        }
        return doDeploy()
    }

    fun doNothing(): Agent = this.copy(action = Action.start(ActionItem.WAIT, World.tick))

    fun isLinkPossible(): Boolean {
        if (!actionPortal.canLinkOut(this)) {
            return false
        }
        val keyset: List<PortalKey>? = inventory.findUniqueKeys()
        val hasKeys = keyset != null && keyset.isNotEmpty()
        if (hasKeys) {
            val linkOptions: List<Portal>? = actionPortal.findLinkableForKeys(keyset!!, this)?.filter {
                it != actionPortal && it.owner != null && !it.isDeprecated()
            }?.distinct()
            if (linkOptions != null && linkOptions.isNotEmpty()) {
                val linkLinks: List<Link> = linkOptions.map { Link.create(actionPortal, it, this) }.filterNotNull()
                val nonCrossing = linkLinks.filter { link ->
                    World.allLines().filter {
                        it.doesIntersect(link.getLine())
                    }.isEmpty()
                }
                val hasLinkOptions = nonCrossing.isNotEmpty()
                return hasLinkOptions
            }
        }
        return false
    }

    fun createLink(): Agent {
        if (!actionPortal.canLinkOut(this)) {
            return doNothing()
        }
        val keyset: List<PortalKey>? = inventory.findUniqueKeys()
        val hasKeys = keyset != null && keyset.isNotEmpty()
        if (hasKeys) {
            val linkOptions: List<Portal>? = actionPortal.findLinkableForKeys(keyset!!, this)?.filter {
                it != actionPortal && it.owner != null && !it.isDeprecated()
            }?.distinct()
            if (linkOptions != null && linkOptions.isNotEmpty()) {
                val linkLinks: List<Link> = linkOptions.map { Link.create(actionPortal, it, this) }.filterNotNull()
                val nonCrossing = linkLinks.filter { link ->
                    World.allLines().filter {
                        it.doesIntersect(link.getLine())
                    }.isEmpty()
                }
                val hasLinkOptions = nonCrossing.isNotEmpty()
                if (hasLinkOptions) {
                    val randomTarget: Link = Util.shuffle(nonCrossing).first()
                    actionPortal.createLink(this, randomTarget.destination)
                }
            }
        }
        return this.copy(action = Action.start(ActionItem.LINK, World.tick))
    }

    fun hackActionPortal(): Agent {
        if (isAtActionPortal() && actionPortal.canHack(this)) {
            val hackResult = actionPortal.tryHack(this)
            SoundUtil.playHackingSound(actionPortal.location)
            val isSuccess = hackResult.items != null
            if (isSuccess) {
                val newStuff: List<QgressItem> = hackResult.items!!
                inventory.items.addAll(newStuff)
            }
        }
        return this.copy(action = Action.start(ActionItem.HACK, World.tick))
    }

    private fun findPortalsInAttackRange(level: XmpLevel): List<Portal> {
        val attackDistance = (level.rangeM * 0.5) + Dimensions.portalRadius
        val enemyPortals = World.allPortals.filter { it.owner?.faction != this.faction }
        return enemyPortals.filter { it.location.distanceTo(this.pos) <= attackDistance }.sortedBy { it.location.distanceTo(this.pos) }
    }

    fun findResosInAttackRange(level: XmpLevel): List<Resonator> {
        val attackDistance = level.rangeM * 0.5
        val portals = findPortalsInAttackRange(level)
        val slots = portals.flatMap { it.resoSlots.map { it.value } }
        val resosInRange = slots.filter { it.resonator != null && it.resonator.coords?.distanceTo(this.pos)!! <= attackDistance }
        return resosInRange.map { it.resonator }.filterNotNull()
    }

    private fun shadowPos() = PathUtil.posToShadowPos(pos)

    fun draw(ctx: Ctx) {
        val image = getAgentImage(faction, action.item)
        ctx.drawImage(image, pos.xx(), pos.yy())
        val xmPercent: Int = min(getXmCapacity() , max(0 , xm)) * 100 / getXmCapacity()
        val xmBar = getXmBarImage(faction, xmPercent)
        ctx.drawImage(xmBar, pos.xx(), pos.yy() - 5)
    }

    fun drawRadius(ctx: Ctx) {
        if (Styles.isDrawDestination) {
            DrawUtil.drawLine(ctx, lineToPortal(actionPortal), Colors.nextPortal, 1.0)
            DrawUtil.drawLine(ctx, lineToDestination(), Colors.destination, 1.0)
        }
        if (Styles.isDrawAgentRange) {
            val deployCircle = Circle(pos, Dimensions.maxDeploymentRange)
            DrawUtil.drawCircle(ctx, deployCircle, Colors.agentDeployCircle, Dimensions.agentDeployCircleLineWidth)
        }
    }

    override fun toString() = faction.abbr + "-" + name
    override fun equals(other: Any?) = other is Agent && this.key() == other.key()
    override fun hashCode() = this.key().hashCode() * 31

    companion object {
        private val enlImages = ActionItem.values().map { it to drawAgentTemplate(Faction.ENL, it) }.toMap()
        private val resImages = ActionItem.values().map { it to drawAgentTemplate(Faction.RES, it) }.toMap()
        private fun xmKey(faction: Faction, percent: Int) = faction.abbr + ":" + percent
        private val xmBarImages = Faction.values().flatMap { fac -> (0..100).map { xmKey(fac, it) to drawXmBarTemplate(fac, it) } }.toMap()
        private fun getAgentImage(faction: Faction, actionItem: ActionItem): Canvas {
            return when (faction) {
                Faction.ENL -> enlImages.getValue(actionItem)
                Faction.RES -> resImages.getValue(actionItem)
                else -> throw IllegalStateException("Illegal faction: $faction")
            }
        }
        private fun getXmBarImage(faction: Faction, percent: Int): Canvas {
            check(percent >= 0 && percent <= 100)
            return xmBarImages.getValue(xmKey(faction, percent))
        }

        private fun drawAgentTemplate(faction: Faction, actionItem: ActionItem): Canvas {
            val lineWidth = 2
            val r = Dimensions.agentRadius.toInt()
            val w = r * 2 + (2 * lineWidth)
            val h = w
            return HtmlUtil.prerender(w, h, fun(ctx: Ctx) {
                val pos = Coords(r + lineWidth, r + lineWidth)
                val strokeStyle = Colors.black
                val circle = Circle(pos, r.toDouble())
                DrawUtil.drawCircle(ctx, circle, strokeStyle, 2.0, faction.color)
                DrawUtil.drawText(ctx, pos.copy(x = pos.x + 1), actionItem.letter, strokeStyle, 13, DrawUtil.CODA)
            })
        }

        private fun drawXmBarTemplate(faction: Faction, percent: Int): Canvas {
            val lineWidth = 2
            val r = Dimensions.agentRadius.toInt()
            val w = r * 2 + (2 * lineWidth)
            val pWidth = percent * w / 100
            val h = 5
            return HtmlUtil.prerender(w, h, fun(ctx: Ctx) {
                val path = Path2D()
                path.moveTo(0.0, 0.0)
                path.lineTo(w.toDouble(), 0.0)
                path.lineTo(w.toDouble(), h.toDouble())
                path.lineTo(0.0, h.toDouble())
                path.lineTo(0.0, 0.0)
                path.closePath()
                DrawUtil.drawPath(ctx, path, Colors.black, 1.0)
                val fillPath = Path2D()
                fillPath.moveTo(0.0, 0.0)
                fillPath.lineTo(pWidth.toDouble(), 0.0)
                fillPath.lineTo(pWidth.toDouble(), h.toDouble())
                fillPath.lineTo(0.0, h.toDouble())
                fillPath.lineTo(0.0, 0.0)
                fillPath.closePath()
                DrawUtil.drawPath(ctx, fillPath, Colors.black, 1.0, faction.color)
            })
        }

        fun createFrog(grid: Map<Coords, Cell>) = create(grid, Faction.ENL)
        fun createSmurf(grid: Map<Coords, Cell>) = create(grid, Faction.RES)
        private fun create(grid: Map<Coords, Cell>, faction: Faction): Agent {
            val coords = Coords.createRandomPassable(grid)
            val actionPortal = Util.findNearestPortal(coords) ?: World.allPortals.get(0) //FIXME
            return Agent(faction, Util.generateAgentName(), coords, Skills.createRandom(),
                    Inventory(), Action(ActionItem.MOVE, 0), actionPortal, actionPortal.location, 0, 0)
        }
    }
}
