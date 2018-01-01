if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'QGress'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'QGress'.");
}
var QGress = function (_, Kotlin) {
  'use strict';
  var throwCCE = Kotlin.throwCCE;
  var addClass = Kotlin.kotlin.dom.addClass_hhb33f$;
  var Unit = Kotlin.kotlin.Unit;
  var numberToInt = Kotlin.numberToInt;
  var take = Kotlin.kotlin.collections.take_ba2ldo$;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var toSet = Kotlin.kotlin.collections.toSet_7wnvza$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var removeClass = Kotlin.kotlin.dom.removeClass_hhb33f$;
  var throwUPAE = Kotlin.throwUPAE;
  var equals = Kotlin.equals;
  var sum = Kotlin.kotlin.collections.sum_plj8ka$;
  var toByte = Kotlin.toByte;
  var kotlin_js_internal_ByteCompanionObject = Kotlin.kotlin.js.internal.ByteCompanionObject;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var distinct = Kotlin.kotlin.collections.distinct_7wnvza$;
  var filterNotNull = Kotlin.kotlin.collections.filterNotNull_m3lr2h$;
  var toList = Kotlin.kotlin.collections.toList_abgq59$;
  var zip = Kotlin.kotlin.collections.zip_45mdf7$;
  var toMap = Kotlin.kotlin.collections.toMap_6hr0sd$;
  var hashCode = Kotlin.hashCode;
  var getValue = Kotlin.kotlin.collections.getValue_t9ocha$;
  var IllegalStateException = Kotlin.kotlin.IllegalStateException;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var eachCount = Kotlin.kotlin.collections.eachCount_kji7v9$;
  var toString = Kotlin.toString;
  var math = Kotlin.kotlin.math;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var toList_0 = Kotlin.kotlin.collections.toList_7wnvza$;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var linkedSetOf = Kotlin.kotlin.collections.linkedSetOf_i5x0yv$;
  var unboxChar = Kotlin.unboxChar;
  var round = Kotlin.kotlin.math.round_14dthe$;
  var plus = Kotlin.kotlin.collections.plus_mydzjv$;
  var toMutableList = Kotlin.kotlin.collections.toMutableList_4c7yge$;
  var sort = Kotlin.kotlin.collections.sort_4wi501$;
  var mutableListOf = Kotlin.kotlin.collections.mutableListOf_i5x0yv$;
  var toMutableMap = Kotlin.kotlin.collections.toMutableMap_abgq59$;
  var reversed = Kotlin.kotlin.collections.reversed_7wnvza$;
  var toBoxedChar = Kotlin.toBoxedChar;
  var Triple = Kotlin.kotlin.Triple;
  var IllegalArgumentException = Kotlin.kotlin.IllegalArgumentException;
  var max = Kotlin.kotlin.collections.max_exjks8$;
  var toMap_0 = Kotlin.kotlin.collections.toMap_abgq59$;
  var listOfNotNull = Kotlin.kotlin.collections.listOfNotNull_jurz7g$;
  var first_0 = Kotlin.kotlin.collections.first_7wnvza$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var endsWith = Kotlin.kotlin.text.endsWith_sgbm27$;
  var dropLast = Kotlin.kotlin.text.dropLast_6ic1pp$;
  var padStart = Kotlin.kotlin.text.padStart_vrc1nu$;
  Faction.prototype = Object.create(Enum.prototype);
  Faction.prototype.constructor = Faction;
  Styles$VectorStyle.prototype = Object.create(Enum.prototype);
  Styles$VectorStyle.prototype.constructor = Styles$VectorStyle;
  PortalLevel.prototype = Object.create(Enum.prototype);
  PortalLevel.prototype.constructor = PortalLevel;
  PowerCubeLevel.prototype = Object.create(Enum.prototype);
  PowerCubeLevel.prototype.constructor = PowerCubeLevel;
  ResonatorLevel.prototype = Object.create(Enum.prototype);
  ResonatorLevel.prototype.constructor = ResonatorLevel;
  UltraStrikeLevel.prototype = Object.create(Enum.prototype);
  UltraStrikeLevel.prototype.constructor = UltraStrikeLevel;
  XmpLevel.prototype = Object.create(Enum.prototype);
  XmpLevel.prototype.constructor = XmpLevel;
  LinkAmpType.prototype = Object.create(Enum.prototype);
  LinkAmpType.prototype.constructor = LinkAmpType;
  ModType.prototype = Object.create(Enum.prototype);
  ModType.prototype.constructor = ModType;
  MultihackType.prototype = Object.create(Enum.prototype);
  MultihackType.prototype.constructor = MultihackType;
  ShieldType.prototype = Object.create(Enum.prototype);
  ShieldType.prototype.constructor = ShieldType;
  VirusType.prototype = Object.create(Enum.prototype);
  VirusType.prototype.constructor = VirusType;
  Cooldown.prototype = Object.create(Enum.prototype);
  Cooldown.prototype.constructor = Cooldown;
  ModSlot.prototype = Object.create(Enum.prototype);
  ModSlot.prototype.constructor = ModSlot;
  Octant.prototype = Object.create(Enum.prototype);
  Octant.prototype.constructor = Octant;
  Quality.prototype = Object.create(Enum.prototype);
  Quality.prototype.constructor = Quality;
  function main$lambda(event) {
    handleMouseClick(event);
    return Unit;
  }
  function main$speedSetting(closure$SPEED_ID) {
    return function () {
      var tmp$;
      return numberToInt((Kotlin.isType(tmp$ = document.getElementById(closure$SPEED_ID), HTMLInputElement) ? tmp$ : throwCCE()).valueAsNumber);
    };
  }
  function main$frogCount(closure$FROG_COUNT_ID) {
    return function () {
      var tmp$;
      return numberToInt((Kotlin.isType(tmp$ = document.getElementById(closure$FROG_COUNT_ID), HTMLInputElement) ? tmp$ : throwCCE()).valueAsNumber);
    };
  }
  function main$smurfCount(closure$SMURF_COUNT_ID) {
    return function () {
      var tmp$;
      return numberToInt((Kotlin.isType(tmp$ = document.getElementById(closure$SMURF_COUNT_ID), HTMLInputElement) ? tmp$ : throwCCE()).valueAsNumber);
    };
  }
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  function main$updateAgents(agents, faction, nextAgents) {
    agents.clear();
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = nextAgents.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.faction === faction)
        destination.add_11rb$(element);
    }
    agents.addAll_brywnq$(destination);
  }
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  function main$updateAgentCount(agents, newCount, creationFuncion) {
    if (newCount < agents.size) {
      World_getInstance().allAgents.addAll_brywnq$(take(agents, newCount));
    }
     else {
      World_getInstance().allAgents.addAll_brywnq$(agents);
      if (newCount > agents.size) {
        var diff = newCount - agents.size | 0;
        var tmp$ = World_getInstance().allAgents;
        var $receiver = new IntRange(1, diff);
        var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
        var tmp$_0;
        tmp$_0 = $receiver.iterator();
        while (tmp$_0.hasNext()) {
          var item = tmp$_0.next();
          destination.add_11rb$(creationFuncion(item));
        }
        tmp$.addAll_brywnq$(toSet(destination));
      }
    }
  }
  function main$tick$lambda(f) {
    return Agent$Companion_getInstance().createFrog_5edep5$(World_getInstance().grid);
  }
  function main$tick$lambda_0(f) {
    return Agent$Companion_getInstance().createSmurf_5edep5$(World_getInstance().grid);
  }
  function main$tick$lambda_1(it) {
    return Util_getInstance().random();
  }
  function main$tick$lambda_2(it) {
    DrawUtil_getInstance().redraw();
    DrawUtil_getInstance().redrawUserInterface();
    return Unit;
  }
  var sortedWith = Kotlin.kotlin.collections.sortedWith_eknfly$;
  var wrapFunction = Kotlin.wrapFunction;
  var compareBy$lambda = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  var Comparator = Kotlin.kotlin.Comparator;
  function Comparator$ObjectLiteral(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  function main$tick(closure$frogs, closure$frogCount, closure$updateAgentCount, closure$smurfs, closure$smurfCount, closure$updateAgents) {
    return function () {
      if (!World_getInstance().isReady) {
        return;
      }
      World_getInstance().allAgents.clear();
      closure$updateAgentCount(closure$frogs, closure$frogCount(), main$tick$lambda);
      closure$updateAgentCount(closure$smurfs, closure$smurfCount(), main$tick$lambda_0);
      sortedWith(World_getInstance().allAgents, new Comparator$ObjectLiteral(compareBy$lambda(main$tick$lambda_1)));
      var $receiver = World_getInstance().allAgents;
      var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        destination.add_11rb$(item.act());
      }
      var nextAgents = toSet(destination);
      closure$updateAgents(closure$frogs, Faction$ENL_getInstance(), nextAgents);
      closure$updateAgents(closure$smurfs, Faction$RES_getInstance(), nextAgents);
      var tmp$_0;
      tmp$_0 = World_getInstance().allNonFaction.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        element.act();
      }
      window.requestAnimationFrame(main$tick$lambda_2);
      var tmp$_1;
      tmp$_1 = World_getInstance();
      tmp$_1.tick = tmp$_1.tick + 1 | 0;
    };
  }
  function main$createPortals$createPortal$lambda(closure$count, closure$callback, closure$createPortal) {
    return function () {
      if (closure$count > 0) {
        var total = Config_getInstance().startPortals;
        var realCount = total - closure$count + 1 | 0;
        var newPortal = Portal$Companion_getInstance().createRandom();
        DrawUtil_getInstance().drawLoadingText_61zpoe$('Creating Portal (' + realCount + '/' + total + ')');
        DrawUtil_getInstance().drawVectorField_hv9zn6$(newPortal);
        World_getInstance().allPortals.add_11rb$(newPortal);
        closure$createPortal(closure$callback, closure$count - 1 | 0);
      }
       else {
        closure$callback();
      }
    };
  }
  function main$createPortals$createPortal(callback, count) {
    var tmp$;
    (tmp$ = document.defaultView) != null ? tmp$.setTimeout(main$createPortals$createPortal$lambda(count, callback, main$createPortals$createPortal), 0) : null;
  }
  function main$createPortals(callback) {
    var createPortal = main$createPortals$createPortal;
    createPortal(callback, Config_getInstance().startPortals);
  }
  var Math_0 = Math;
  function main$createAgents$createNonFaction$lambda(closure$count, closure$batchSize, closure$callback, closure$createNonFaction) {
    return function () {
      if (closure$count > 0) {
        var a = closure$batchSize;
        var b = closure$count;
        var realSize = Math_0.min(a, b);
        var total = Config_getInstance().startNonFaction;
        var realCount = total - closure$count + realSize | 0;
        DrawUtil_getInstance().drawLoadingText_61zpoe$('Creating Non-Faction (' + realCount + '/' + total + ')');
        var tmp$;
        tmp$ = (new IntRange(0, realSize)).iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          var newNonFaction = NonFaction$Companion_getInstance().create_5edep5$(World_getInstance().grid);
          World_getInstance().allNonFaction.add_11rb$(newNonFaction);
        }
        closure$createNonFaction(closure$callback, closure$count - realSize | 0);
      }
       else {
        closure$callback();
      }
    };
  }
  function main$createAgents$createNonFaction(closure$batchSize) {
    return function closure$createNonFaction(callback, count) {
      var tmp$;
      (tmp$ = document.defaultView) != null ? tmp$.setTimeout(main$createAgents$createNonFaction$lambda(count, closure$batchSize, callback, closure$createNonFaction), 0) : null;
    };
  }
  function main$createAgents(callback) {
    var batchSize = 1;
    var createNonFaction = main$createAgents$createNonFaction(batchSize);
    DrawUtil_getInstance().clearBackground();
    createNonFaction(callback, Config_getInstance().startNonFaction);
  }
  function main$createAgentsAndPortals$lambda(closure$callback, closure$createAgents) {
    return function () {
      closure$createAgents(closure$callback);
    };
  }
  function main$createAgentsAndPortals(closure$createAgents, closure$createPortals) {
    return function (callback) {
      closure$createPortals(main$createAgentsAndPortals$lambda(callback, closure$createAgents));
    };
  }
  function main$lambda_0(closure$tick) {
    return function () {
      closure$tick();
      return Unit;
    };
  }
  function main$lambda$lambda(closure$speedSetting) {
    return function (it) {
      World_getInstance().speed = closure$speedSetting();
      return Unit;
    };
  }
  function main$lambda$lambda$lambda(closure$tick) {
    return function () {
      closure$tick();
      return Unit;
    };
  }
  function main$lambda$lambda_0(closure$intervalID, closure$tick) {
    return function (it) {
      closure$intervalID.v = HtmlUtil_getInstance().pauseHandler_n53o35$(closure$intervalID.v, main$lambda$lambda$lambda(closure$tick));
      return Unit;
    };
  }
  function main$lambda_1(event) {
    handleMouseMove(event);
    return Unit;
  }
  function main$lambda_2(event) {
    handleMouseMove(event);
    return Unit;
  }
  function main$lambda$lambda_1() {
    DrawUtil_getInstance().drawLoadingText_61zpoe$('Ready.');
    World_getInstance().isReady = true;
    return Unit;
  }
  function main$lambda_3(closure$createAgentsAndPortals) {
    return function (grid) {
      World_getInstance().grid = grid;
      if (World_getInstance().grid.isEmpty()) {
        println('ERROR: Grid is empty!');
      }
      DrawUtil_getInstance().drawGrid();
      closure$createAgentsAndPortals(main$lambda$lambda_1);
    };
  }
  function main$lambda_4(it) {
    var tmp$;
    (tmp$ = document.location) != null ? (tmp$.reload(), Unit) : null;
    return Unit;
  }
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  function main(args) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var FROG_COUNT_ID = 'numberOfFrogs';
    var SMURF_COUNT_ID = 'numberOfSmurfs';
    var SPEED_ID = 'speed';
    var rootDiv = Kotlin.isType(tmp$ = document.getElementById('root'), HTMLDivElement) ? tmp$ : throwCCE();
    addClass(rootDiv, ['container']);
    World_getInstance().can = HtmlUtil_getInstance().createCanvas_61zpoe$('mainCanvas');
    World_getInstance().bgCan = HtmlUtil_getInstance().createCanvas_61zpoe$('backgroundCanvas');
    World_getInstance().uiCan = HtmlUtil_getInstance().createCanvas_61zpoe$('uiCanvas');
    World_getInstance().uiCan.addEventListener('click', main$lambda, false);
    var canvasDiv = Kotlin.isType(tmp$_0 = document.createElement('div'), HTMLDivElement) ? tmp$_0 : throwCCE();
    canvasDiv.append(World_getInstance().uiCan);
    canvasDiv.append(World_getInstance().bgCan);
    canvasDiv.append(World_getInstance().can);
    var w = World_getInstance().can.width;
    var h = World_getInstance().can.height;
    var noiseAlpha = 0.8;
    World_getInstance().noiseMap = ImprovedNoise_getInstance().generateEdgeMap_224j3y$(w, h);
    World_getInstance().noiseImage = World_getInstance().createNoiseImage_bd1o91$(World_getInstance().noiseMap, w, h, noiseAlpha);
    var frogs = LinkedHashSet_init();
    var smurfs = LinkedHashSet_init();
    var speedSetting = main$speedSetting(SPEED_ID);
    var frogCount = main$frogCount(FROG_COUNT_ID);
    var smurfCount = main$smurfCount(SMURF_COUNT_ID);
    var updateAgents = main$updateAgents;
    var updateAgentCount = main$updateAgentCount;
    var tick = main$tick(frogs, frogCount, updateAgentCount, smurfs, smurfCount, updateAgents);
    var createPortals = main$createPortals;
    var createAgents = main$createAgents;
    var createAgentsAndPortals = main$createAgentsAndPortals(createAgents, createPortals);
    rootDiv.append(canvasDiv);
    var controlDiv = Kotlin.isType(tmp$_1 = document.createElement('div'), HTMLDivElement) ? tmp$_1 : throwCCE();
    addClass(controlDiv, ['controls']);
    if (Config_getInstance().isAutostart) {
      tmp$_4 = (tmp$_3 = (tmp$_2 = document.defaultView) != null ? tmp$_2.setInterval(main$lambda_0(tick), Time_getInstance().minTickInterval) : null) != null ? tmp$_3 : 0;
    }
     else
      tmp$_4 = 0;
    var intervalID = {v: tmp$_4};
    var $receiver = Config_getInstance();
    var maxSpeed = 500;
    var speedSlider = HtmlUtil_getInstance().createSliderDiv_k2bhec$('speedSlider', 100, maxSpeed, SPEED_ID, '% Speed', 100);
    speedSlider.oninput = main$lambda$lambda(speedSetting);
    controlDiv.append(speedSlider);
    controlDiv.append(HtmlUtil_getInstance().createSliderDiv_k2bhec$('frogSlider', $receiver.startFrogs, $receiver.maxFrogs, FROG_COUNT_ID, ' Frogs', 0));
    controlDiv.append(HtmlUtil_getInstance().createSliderDiv_k2bhec$('smurfSlider', $receiver.startSmurfs, $receiver.maxSmurfs, SMURF_COUNT_ID, ' Smurfs', 0));
    controlDiv.append(HtmlUtil_getInstance().createButtonDiv_yasyo8$('button', 'Pause', main$lambda$lambda_0(intervalID, tick)));
    rootDiv.append(controlDiv);
    controlDiv.addEventListener('mousemove', main$lambda_1, false);
    rootDiv.addEventListener('mousemove', main$lambda_2, false);
    MapUtil_getInstance().loadMap_vekcfi$(main$lambda_3(createAgentsAndPortals));
    window.addEventListener('resize', main$lambda_4, false);
  }
  function isNotHandledByCanvas(pos) {
    return isInPositionArea(pos) || isInMapboxArea(pos) || isInOsmArea(pos);
  }
  function isInPositionArea(pos) {
    var w = World_getInstance().can.width;
    var size = 52;
    var area = new Line(new Coords(w - size | 0, 0), new Coords(w, size));
    return pos.x > area.from.x && pos.x <= area.to.x && pos.y > area.from.y && pos.y <= area.to.y;
  }
  function isInMapboxArea(pos) {
    var area = new Line(new Coords(0, World_getInstance().can.height - 21 | 0), new Coords(233, World_getInstance().can.height));
    return pos.x > area.from.x && pos.x <= area.to.x && pos.y > area.from.y && pos.y <= area.to.y;
  }
  function isInOsmArea(pos) {
    var w = World_getInstance().can.width;
    var area = new Line(new Coords(w - 377 | 0, World_getInstance().can.height - 34 | 0), new Coords(w, World_getInstance().can.height));
    return pos.x > area.from.x && pos.x <= area.to.x && pos.y > area.from.y && pos.y <= area.to.y;
  }
  function handleMouseClick(event) {
    var tmp$, tmp$_0;
    if (Kotlin.isType(event, MouseEvent)) {
      var pos = findMousePosition(World_getInstance().uiCan, event);
      if (pos.hasClosePortal()) {
        SoundUtil_getInstance().playPortalRemovalSound_lfj9be$(pos);
        (tmp$ = document.defaultView) != null ? tmp$.setTimeout(pos.findClosestPortal().destroy_za3lpa$(World_getInstance().tick), 0) : null;
      }
       else if (pos.isBuildable()) {
        SoundUtil_getInstance().playPortalCreationSound_lfj9be$(pos);
        (tmp$_0 = document.defaultView) != null ? tmp$_0.setTimeout(World_getInstance().allPortals.add_11rb$(Portal$Companion_getInstance().create_lfj9be$(pos)), 0) : null;
      }
    }
     else {
      println('WARN: Unhandled event: ' + event + '.');
    }
  }
  function handleMouseMove(event) {
    var tmp$;
    var pos = findMousePosition(World_getInstance().uiCan, Kotlin.isType(tmp$ = event, MouseEvent) ? tmp$ : throwCCE());
    var isNotHandledByCanvas_0 = isNotHandledByCanvas(pos);
    if (isNotHandledByCanvas_0) {
      World_getInstance().mousePos = null;
      addClass(World_getInstance().uiCan, ['unclickable']);
    }
     else {
      World_getInstance().mousePos = pos;
      removeClass(World_getInstance().uiCan, ['unclickable']);
    }
  }
  function findMousePosition(canvas, mouseEvent) {
    var rect = canvas.getBoundingClientRect();
    var scaleX = canvas.width / rect.width;
    var scaleY = canvas.height / rect.height;
    var x = (mouseEvent.clientX - rect.left) * scaleX;
    var y = (mouseEvent.clientY - rect.top) * scaleY;
    return new Coords(numberToInt(x), numberToInt(y));
  }
  function World() {
    World_instance = this;
    this.tick = 0;
    this.isReady = false;
    this.can_v8ttwa$_0 = this.can_v8ttwa$_0;
    this.bgCan_izup8r$_0 = this.bgCan_izup8r$_0;
    this.uiCan_s0t3x6$_0 = this.uiCan_s0t3x6$_0;
    this.mousePos = null;
    this.speed = 100;
    this.noiseMap_ft1fdo$_0 = this.noiseMap_ft1fdo$_0;
    this.noiseImage_c4tqbn$_0 = this.noiseImage_c4tqbn$_0;
    this.shadowStreetMap_jwpvb7$_0 = this.shadowStreetMap_jwpvb7$_0;
    this.grid_pwdzco$_0 = this.grid_pwdzco$_0;
    this.allAgents = LinkedHashSet_init();
    this.allNonFaction = LinkedHashSet_init();
    this.allPortals = ArrayList_init();
  }
  Object.defineProperty(World.prototype, 'can', {
    get: function () {
      if (this.can_v8ttwa$_0 == null)
        return throwUPAE('can');
      return this.can_v8ttwa$_0;
    },
    set: function (can) {
      this.can_v8ttwa$_0 = can;
    }
  });
  World.prototype.ctx = function () {
    return HtmlUtil_getInstance().getContext2D_ap7jt0$(this.can);
  };
  Object.defineProperty(World.prototype, 'bgCan', {
    get: function () {
      if (this.bgCan_izup8r$_0 == null)
        return throwUPAE('bgCan');
      return this.bgCan_izup8r$_0;
    },
    set: function (bgCan) {
      this.bgCan_izup8r$_0 = bgCan;
    }
  });
  World.prototype.bgCtx = function () {
    return HtmlUtil_getInstance().getContext2D_ap7jt0$(this.bgCan);
  };
  Object.defineProperty(World.prototype, 'uiCan', {
    get: function () {
      if (this.uiCan_s0t3x6$_0 == null)
        return throwUPAE('uiCan');
      return this.uiCan_s0t3x6$_0;
    },
    set: function (uiCan) {
      this.uiCan_s0t3x6$_0 = uiCan;
    }
  });
  World.prototype.uiCtx = function () {
    return HtmlUtil_getInstance().getContext2D_ap7jt0$(this.uiCan);
  };
  World.prototype.w = function () {
    return this.can.width;
  };
  World.prototype.shadowW = function () {
    return this.w() / PathUtil_getInstance().RESOLUTION | 0;
  };
  World.prototype.h = function () {
    return this.can.height;
  };
  World.prototype.shadowH = function () {
    return this.h() / PathUtil_getInstance().RESOLUTION | 0;
  };
  World.prototype.diagonalLength = function () {
    var x = Kotlin.imul(this.can.width, this.can.width) + Kotlin.imul(this.can.height, this.can.height);
    return numberToInt(Math_0.sqrt(x));
  };
  World.prototype.totalArea = function () {
    return Kotlin.imul(this.can.width, this.can.height);
  };
  Object.defineProperty(World.prototype, 'noiseMap', {
    get: function () {
      if (this.noiseMap_ft1fdo$_0 == null)
        return throwUPAE('noiseMap');
      return this.noiseMap_ft1fdo$_0;
    },
    set: function (noiseMap) {
      this.noiseMap_ft1fdo$_0 = noiseMap;
    }
  });
  Object.defineProperty(World.prototype, 'noiseImage', {
    get: function () {
      if (this.noiseImage_c4tqbn$_0 == null)
        return throwUPAE('noiseImage');
      return this.noiseImage_c4tqbn$_0;
    },
    set: function (noiseImage) {
      this.noiseImage_c4tqbn$_0 = noiseImage;
    }
  });
  Object.defineProperty(World.prototype, 'shadowStreetMap', {
    get: function () {
      if (this.shadowStreetMap_jwpvb7$_0 == null)
        return throwUPAE('shadowStreetMap');
      return this.shadowStreetMap_jwpvb7$_0;
    },
    set: function (shadowStreetMap) {
      this.shadowStreetMap_jwpvb7$_0 = shadowStreetMap;
    }
  });
  Object.defineProperty(World.prototype, 'grid', {
    get: function () {
      if (this.grid_pwdzco$_0 == null)
        return throwUPAE('grid');
      return this.grid_pwdzco$_0;
    },
    set: function (grid) {
      this.grid_pwdzco$_0 = grid;
    }
  });
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  World.prototype.passableCells = function () {
    var $receiver = this.grid;
    var destination = LinkedHashMap_init();
    var tmp$;
    tmp$ = $receiver.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.value.isPassable) {
        destination.put_xwzc9p$(element.key, element.value);
      }
    }
    return destination;
  };
  World.prototype.wellPassableCells = function () {
    var $receiver = this.grid;
    var destination = LinkedHashMap_init();
    var tmp$;
    tmp$ = $receiver.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.value.isPassableInAllDirections()) {
        destination.put_xwzc9p$(element.key, element.value);
      }
    }
    return destination;
  };
  World.prototype.passableOnScreen_0 = function () {
    var $receiver = this.wellPassableCells();
    var destination = LinkedHashMap_init();
    var tmp$;
    tmp$ = $receiver.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (!element.key.isOffGrid()) {
        destination.put_xwzc9p$(element.key, element.value);
      }
    }
    return destination;
  };
  World.prototype.passableInActionArea = function () {
    var $receiver = this.passableOnScreen_0();
    var destination = LinkedHashMap_init();
    var tmp$;
    tmp$ = $receiver.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (!(Kotlin.imul(element.key.y, PathUtil_getInstance().RESOLUTION) < Dimensions_getInstance().topActionOffset)) {
        destination.put_xwzc9p$(element.key, element.value);
      }
    }
    var destination_0 = LinkedHashMap_init();
    var tmp$_0;
    tmp$_0 = destination.entries.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      if (!(Kotlin.imul(element_0.key.y, PathUtil_getInstance().RESOLUTION) > window.innerHeight - Dimensions_getInstance().botActionOffset)) {
        destination_0.put_xwzc9p$(element_0.key, element_0.value);
      }
    }
    return destination_0;
  };
  World.prototype.countAgents = function () {
    return this.allAgents.size;
  };
  var Collection = Kotlin.kotlin.collections.Collection;
  World.prototype.countAgents_bip15f$ = function (fact) {
    var $receiver = this.allAgents;
    var count$result;
    count$break: do {
      var tmp$;
      if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
        count$result = 0;
        break count$break;
      }
      var count = 0;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (element.faction.equals(fact)) {
          count = count + 1 | 0;
        }
      }
      count$result = count;
    }
     while (false);
    return count$result;
  };
  World.prototype.countNonFaction = function () {
    return this.allNonFaction.size;
  };
  World.prototype.enlPortals = function () {
    var $receiver = this.allPortals;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      if (equals((tmp$_0 = element.owner) != null ? tmp$_0.faction : null, Faction$ENL_getInstance()))
        destination.add_11rb$(element);
    }
    return destination;
  };
  World.prototype.resPortals = function () {
    var $receiver = this.allPortals;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      if (equals((tmp$_0 = element.owner) != null ? tmp$_0.faction : null, Faction$RES_getInstance()))
        destination.add_11rb$(element);
    }
    return destination;
  };
  World.prototype.unclaimedPortals = function () {
    var $receiver = this.allPortals;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.owner == null)
        destination.add_11rb$(element);
    }
    return destination;
  };
  World.prototype.factionPortals_bip15f$ = function (fact) {
    var $receiver = this.allPortals;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      if (equals((tmp$_0 = element.owner) != null ? tmp$_0.faction : null, fact))
        destination.add_11rb$(element);
    }
    return destination;
  };
  World.prototype.countPortals = function () {
    return this.allPortals.size;
  };
  World.prototype.countPortals_bip15f$ = function (fact) {
    return this.factionPortals_bip15f$(fact).size;
  };
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  World.prototype.allLinks = function () {
    var $receiver = this.allPortals;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var list = element.links;
      addAll(destination, list);
    }
    return destination;
  };
  World.prototype.countLinks = function () {
    return this.allLinks().size;
  };
  World.prototype.countLinks_bip15f$ = function (fact) {
    var $receiver = this.allLinks();
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.owner.faction === fact)
        destination.add_11rb$(element);
    }
    return destination.size;
  };
  World.prototype.allFields = function () {
    var $receiver = this.allPortals;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var list = element.fields;
      addAll(destination, list);
    }
    return destination;
  };
  World.prototype.countFields = function () {
    return this.allFields().size;
  };
  World.prototype.countFields_bip15f$ = function (fact) {
    var $receiver = this.allFields();
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.owner.faction === fact)
        destination.add_11rb$(element);
    }
    return destination.size;
  };
  World.prototype.allLines = function () {
    var $receiver = this.allLinks();
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(item.getLine());
    }
    return destination;
  };
  World.prototype.calcTotalMu_bip15f$ = function (fact) {
    var $receiver = this.allFields();
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.owner.faction === fact)
        destination.add_11rb$(element);
    }
    var destination_0 = ArrayList_init(collectionSizeOrDefault(destination, 10));
    var tmp$_0;
    tmp$_0 = destination.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination_0.add_11rb$(item.calculateMu());
    }
    return sum(destination_0);
  };
  World.prototype.imageDataIndex_qt1dr2$ = function (x, y, w) {
    return (x + Kotlin.imul(y, w) | 0) * 4 | 0;
  };
  function World$createNoiseImage$setPixel(this$World, closure$alpha) {
    return function (imageData, x, y, r, g, b) {
      var index = this$World.imageDataIndex_qt1dr2$(x, y, imageData.width);
      imageData.data.set([toByte(r), toByte(b), toByte(g), toByte(numberToInt(kotlin_js_internal_ByteCompanionObject.MAX_VALUE * closure$alpha))], index);
    };
  }
  World.prototype.createNoiseImage_bd1o91$ = function (noiseMap, w, h, alpha) {
    if (alpha === void 0)
      alpha = 1.0;
    var setPixel = World$createNoiseImage$setPixel(this, alpha);
    var imageData = World_getInstance().bgCtx().createImageData(w, h);
    for (var x = 0; x < w; x++) {
      for (var y = 0; y < h; y++) {
        var rawNoise = noiseMap[x][y];
        var noisepoint = numberToInt((1 + -1 * rawNoise) * 0.5 * kotlin_js_internal_ByteCompanionObject.MAX_VALUE);
        setPixel(imageData, x, y, noisepoint, noisepoint, noisepoint);
      }
    }
    return imageData;
  };
  World.prototype.createStreetImage_n3vf4$ = function (streetMap, w, h) {
    var $receiver = World_getInstance();
    var imageData = $receiver.bgCtx().createImageData(w, h);
    for (var x = 0; x < w; x++) {
      for (var y = 0; y < h; y++) {
        var rawNoise = streetMap[$receiver.imageDataIndex_qt1dr2$(x, y, imageData.width)];
        var index = $receiver.imageDataIndex_qt1dr2$(x, h - 1 - y | 0, imageData.width);
        imageData.data.set([rawNoise, rawNoise, rawNoise, toByte(numberToInt(kotlin_js_internal_ByteCompanionObject.MAX_VALUE * 1.0))], index);
      }
    }
    return imageData;
  };
  World.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'World',
    interfaces: []
  };
  var World_instance = null;
  function World_getInstance() {
    if (World_instance === null) {
      new World();
    }
    return World_instance;
  }
  function Agent(faction, name, pos, skills, inventory, action, actionPortal, destination, ap, xm, velocity) {
    Agent$Companion_getInstance();
    if (velocity === void 0)
      velocity = Complex$Companion_getInstance().ZERO;
    this.faction = faction;
    this.name = name;
    this.pos = pos;
    this.skills = skills;
    this.inventory = inventory;
    this.action = action;
    this.actionPortal = actionPortal;
    this.destination = destination;
    this.ap = ap;
    this.xm = xm;
    this.velocity = velocity;
  }
  Agent.prototype.key = function () {
    return this.toString();
  };
  Agent.prototype.distanceToDestination = function () {
    return this.pos.distanceTo_lfj9be$(this.destination);
  };
  Agent.prototype.distanceToPortal_hv9zn6$ = function (portal) {
    return this.pos.distanceTo_lfj9be$(portal.location);
  };
  Agent.prototype.isAtActionPortal = function () {
    return this.distanceToPortal_hv9zn6$(this.actionPortal) < Dimensions_getInstance().maxDeploymentRange;
  };
  Agent.prototype.isInAttackRange_za3lpa$ = function (range) {
    var strongest = this.actionPortal.findStrongestResoPos();
    return strongest != null && this.pos.distanceTo_lfj9be$(strongest) < range;
  };
  Agent.prototype.isBusy_za3lpa$ = function (tick) {
    return tick <= this.action.untilTick;
  };
  Agent.prototype.lineToPortal_hv9zn6$ = function (portal) {
    return new Line(this.pos, portal.location);
  };
  Agent.prototype.lineToDestination = function () {
    return new Line(this.pos, this.destination);
  };
  Agent.prototype.getLevel = function () {
    return 8;
  };
  Agent.prototype.gatXmCapacity = function () {
    var tmp$;
    tmp$ = this.getLevel();
    if (tmp$ === 1)
      return 3000;
    else if (tmp$ === 2)
      return 4000;
    else if (tmp$ === 3)
      return 5000;
    else if (tmp$ === 4)
      return 6000;
    else if (tmp$ === 5)
      return 7000;
    else if (tmp$ === 6)
      return 8000;
    else if (tmp$ === 7)
      return 9000;
    else if (tmp$ === 8)
      return 10000;
    else
      return 10000;
  };
  Agent.prototype.act = function () {
    var tmp$;
    if (this.isBusy_za3lpa$(World_getInstance().tick)) {
      if (Util_getInstance().random() < 0.005) {
        var randomPortal = World_getInstance().allPortals.get_za3lpa$(numberToInt(Util_getInstance().random() * (World_getInstance().allPortals.size - 1 | 0)));
        return this.copy_lmq102$(void 0, void 0, randomPortal.location, void 0, void 0, Action$Companion_getInstance().start_34yqkq$(ActionItem$Companion_getInstance().WAIT, World_getInstance().tick), randomPortal);
      }
    }
    tmp$ = this.action.item;
    if (equals(tmp$, ActionItem$Companion_getInstance().MOVE))
      return this.moveCloserToDestination_0();
    else if (equals(tmp$, ActionItem$Companion_getInstance().ATTACK))
      return this.attack();
    return this.goDoSomethingElse();
  };
  function Agent$goDoSomethingElse$lambda(this$Agent) {
    return function () {
      return this$Agent.moveToRandomPortal();
    };
  }
  function Agent$goDoSomethingElse$lambda_0(this$Agent) {
    return function () {
      return this$Agent.createLink();
    };
  }
  function Agent$goDoSomethingElse$lambda_1(this$Agent) {
    return function () {
      return this$Agent.deployActionPortal();
    };
  }
  function Agent$goDoSomethingElse$lambda_2(this$Agent) {
    return function () {
      return this$Agent.hackActionPortal();
    };
  }
  function Agent$goDoSomethingElse$lambda_3(this$Agent) {
    return function () {
      return this$Agent.goAttackRandomPortal();
    };
  }
  function Agent$goDoSomethingElse$lambda_4(this$Agent) {
    return function () {
      return this$Agent.moveToUncapturedPortal();
    };
  }
  function Agent$goDoSomethingElse$lambda_5(this$Agent) {
    return function () {
      return this$Agent.moveToNearbyPortal();
    };
  }
  function Agent$goDoSomethingElse$lambda_6(this$Agent) {
    return function () {
      return this$Agent.doNothing();
    };
  }
  Agent.prototype.goDoSomethingElse = function () {
    var qValues = listOf([to(0.02, Agent$goDoSomethingElse$lambda(this)), to(0.5, Agent$goDoSomethingElse$lambda_0(this)), to(0.8, Agent$goDoSomethingElse$lambda_1(this)), to(0.8, Agent$goDoSomethingElse$lambda_2(this)), to(0.2, Agent$goDoSomethingElse$lambda_3(this)), to(0.3, Agent$goDoSomethingElse$lambda_4(this)), to(0.05, Agent$goDoSomethingElse$lambda_5(this)), to(1.0 - this.skills.reliability, Agent$goDoSomethingElse$lambda_6(this))]);
    return Util_getInstance().select_flnx62$(qValues)();
  };
  Agent.prototype.moveCloserToDestination_0 = function () {
    var tmp$, tmp$_0;
    if (!World_getInstance().isReady) {
      println('WARN: moveCloserToDestination: World is not ready.');
      return this.copy_lmq102$(void 0, void 0, void 0, void 0, void 0, Action$Companion_getInstance().start_34yqkq$(ActionItem$Companion_getInstance().WAIT, World_getInstance().tick));
    }
    var isAtPortal = this.isAtActionPortal();
    if (isAtPortal) {
      if ((tmp$ = this.pos) != null ? tmp$.equals(this.destination) : null) {
        return this.copy_lmq102$(void 0, void 0, void 0, void 0, void 0, Action$Companion_getInstance().start_34yqkq$(ActionItem$Companion_getInstance().WAIT, World_getInstance().tick));
      }
       else {
        var dist = this.distanceToDestination();
        var actualSpeed = this.skills.speed * Time_getInstance().globalSpeedFactor * World_getInstance().speed / 100;
        var inRangeSpeed = actualSpeed * 0.5;
        var isArrived = dist <= actualSpeed;
        if (isArrived) {
          return this.copy_lmq102$(void 0, void 0, this.destination, void 0, void 0, Action$Companion_getInstance().start_34yqkq$(ActionItem$Companion_getInstance().WAIT, World_getInstance().tick));
        }
        var part = inRangeSpeed / this.distanceToDestination();
        var rawDiffX = numberToInt(this.pos.xDiff_lfj9be$(this.destination) * part);
        var rawDiffY = numberToInt(this.pos.yDiff_lfj9be$(this.destination) * part);
        var rawNextX = this.pos.x - rawDiffX | 0;
        var rawNextY = this.pos.y - rawDiffY | 0;
        return this.copy_lmq102$(void 0, void 0, new Coords(rawNextX, rawNextY));
      }
    }
     else {
      var shadowPos = PathUtil_getInstance().posToShadowPos_lfj9be$(this.pos);
      var force = (tmp$_0 = this.actionPortal.vectorField.get_11rb$(shadowPos)) != null ? tmp$_0 : this.velocity;
      var mag = this.skills.speed * (World_getInstance().speed / 100 | 0);
      var relativeForce = Complex$Companion_getInstance().fromMagnitudeAndPhase_5nl2e7$(mag, force.phase);
      var oldWeight = 0.5 * 100 / World_getInstance().speed;
      var oldVector = Complex$Companion_getInstance().fromMagnitudeAndPhase_5nl2e7$(this.velocity.magnitude * oldWeight, this.velocity.phase);
      var newVector = Complex$Companion_getInstance().fromMagnitudeAndPhase_5nl2e7$(relativeForce.magnitude * (1.0 - oldWeight), relativeForce.phase);
      var velo = oldVector.plus_p4p8i0$(newVector);
      return this.copy_lmq102$(void 0, void 0, new Coords(numberToInt(this.pos.x + velo.re), numberToInt(this.pos.y + velo.im)), void 0, void 0, void 0, void 0, void 0, void 0, void 0, velo);
    }
  };
  function Agent$attack$lambda(it) {
    return it.level;
  }
  var compareBy$lambda_0 = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function Comparator$ObjectLiteral_0(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral_0.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral_0.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  Agent.prototype.attack = function () {
    var tmp$, tmp$_0;
    var isPortalStillEnemy = this.actionPortal.owner != null && !equals((tmp$ = this.actionPortal.owner) != null ? tmp$.faction : null, this.faction);
    if (!isPortalStillEnemy) {
      return this.goAttackRandomPortal();
    }
    var maxXmps = 10;
    var allXmps = this.inventory.findXmps();
    var tmp$_1;
    if ((tmp$_0 = allXmps != null ? sortedWith(allXmps, new Comparator$ObjectLiteral_0(compareBy$lambda_0(Agent$attack$lambda))) : null) != null) {
      var b = allXmps.size;
      tmp$_1 = take(tmp$_0, Math_0.min(maxXmps, b));
    }
     else
      tmp$_1 = null;
    var selected = tmp$_1;
    if (selected == null || selected.isEmpty()) {
      return this.goDoSomethingElse();
    }
    var isInRange = this.isInAttackRange_za3lpa$(first(selected).level.rangeM / 8 | 0);
    if (!isInRange) {
      var maybeDestination = this.actionPortal.findStrongestResoPos();
      if (maybeDestination != null) {
        return this.moveCloserToDestination_0();
      }
       else {
        return this.goDoSomethingElse();
      }
    }
     else {
      Queues_getInstance().registerAttack_wr4det$(this, selected);
      this.inventory.consumeXmps_ss5kb$(selected);
      return this.copy_lmq102$(void 0, void 0, void 0, void 0, void 0, Action$Companion_getInstance().start_34yqkq$(ActionItem$Companion_getInstance().WAIT, World_getInstance().tick + Queues_getInstance().attackDelayTicks | 0));
    }
  };
  Agent.prototype.doNothing = function () {
    return this.copy_lmq102$(void 0, void 0, void 0, void 0, void 0, Action$Companion_getInstance().start_34yqkq$(ActionItem$Companion_getInstance().WAIT, World_getInstance().tick));
  };
  Agent.prototype.createLink = function () {
    var tmp$, tmp$_0;
    if (!this.actionPortal.canLinkOut_912u9o$(this)) {
      return this;
    }
    var keyset = this.inventory.findUniqueKeys();
    var tmp$_1 = keyset != null;
    if (tmp$_1) {
      tmp$_1 = !keyset.isEmpty();
    }
    var hasKeys = tmp$_1;
    if (hasKeys) {
      var tmp$_2;
      if ((tmp$ = this.actionPortal.findLinkableForKeys_ep8wwm$(ensureNotNull(keyset), this)) != null) {
        var destination = ArrayList_init();
        var tmp$_3;
        tmp$_3 = tmp$.iterator();
        while (tmp$_3.hasNext()) {
          var element = tmp$_3.next();
          if (!(element != null ? element.equals(this.actionPortal) : null) && element.owner != null && !element.isDeprecated())
            destination.add_11rb$(element);
        }
        tmp$_2 = destination;
      }
       else
        tmp$_2 = null;
      var linkOptions = (tmp$_0 = tmp$_2) != null ? distinct(tmp$_0) : null;
      var tmp$_4 = linkOptions != null;
      if (tmp$_4) {
        tmp$_4 = !linkOptions.isEmpty();
      }
      if (tmp$_4) {
        var destination_0 = ArrayList_init(collectionSizeOrDefault(linkOptions, 10));
        var tmp$_5;
        tmp$_5 = linkOptions.iterator();
        while (tmp$_5.hasNext()) {
          var item = tmp$_5.next();
          destination_0.add_11rb$(Link$Companion_getInstance().create_6ezwqo$(this.actionPortal, item, this));
        }
        var linkLinks = filterNotNull(destination_0);
        var destination_1 = ArrayList_init();
        var tmp$_6;
        tmp$_6 = linkLinks.iterator();
        while (tmp$_6.hasNext()) {
          var element_0 = tmp$_6.next();
          var $receiver = World_getInstance().allLines();
          var destination_2 = ArrayList_init();
          var tmp$_7;
          tmp$_7 = $receiver.iterator();
          while (tmp$_7.hasNext()) {
            var element_1 = tmp$_7.next();
            if (element_1.doesIntersect_589y3w$(element_0.getLine()))
              destination_2.add_11rb$(element_1);
          }
          if (destination_2.isEmpty())
            destination_1.add_11rb$(element_0);
        }
        var nonCrossing = destination_1;
        var hasLinkOptions = !nonCrossing.isEmpty();
        if (hasLinkOptions) {
          var randomTarget = first(Util_getInstance().shuffle_bemo1h$(nonCrossing));
          this.actionPortal.createLink_g4r5ni$(this, randomTarget.destination);
        }
      }
    }
    return this;
  };
  function Agent$goAttackRandomPortal$lambda(this$Agent) {
    return function (it) {
      return this$Agent.distanceToPortal_hv9zn6$(it);
    };
  }
  var compareBy$lambda_1 = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function Comparator$ObjectLiteral_1(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral_1.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral_1.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  Agent.prototype.goAttackRandomPortal = function () {
    var $receiver = World_getInstance().allPortals;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.owner != null && ensureNotNull(element.owner).faction !== this.faction)
        destination.add_11rb$(element);
    }
    var enemyPortals = sortedWith(destination, new Comparator$ObjectLiteral_1(compareBy$lambda_1(Agent$goAttackRandomPortal$lambda(this))));
    var tmp$_0;
    tmp$_0 = enemyPortals.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      if (Util_getInstance().random() < this.skills.reliability) {
        return this.goToDestination_0(element_0).copy_lmq102$(void 0, void 0, void 0, void 0, void 0, Action$Companion_getInstance().start_34yqkq$(ActionItem$Companion_getInstance().ATTACK, World_getInstance().tick));
      }
    }
    return this.copy_lmq102$(void 0, void 0, void 0, void 0, void 0, Action$Companion_getInstance().start_34yqkq$(ActionItem$Companion_getInstance().WAIT, World_getInstance().tick));
  };
  function Agent$moveToNearbyPortal$lambda(this$Agent) {
    return function (it) {
      return this$Agent.distanceToPortal_hv9zn6$(it);
    };
  }
  var compareBy$lambda_2 = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function Comparator$ObjectLiteral_2(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral_2.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral_2.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  Agent.prototype.moveToNearbyPortal = function () {
    var randomNearPortals = sortedWith(World_getInstance().allPortals, new Comparator$ObjectLiteral_2(compareBy$lambda_2(Agent$moveToNearbyPortal$lambda(this))));
    var tmp$;
    tmp$ = randomNearPortals.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (Util_getInstance().random() < this.skills.reliability) {
        return this.goToDestination_0(element);
      }
    }
    return this.goToDestination_0.call(this, randomNearPortals.get_za3lpa$(1));
  };
  Agent.prototype.moveToRandomPortal = function () {
    var randomTarget = World_getInstance().allPortals.get_za3lpa$(numberToInt(Util_getInstance().random() * (World_getInstance().allPortals.size - 1 | 0)));
    return this.goToDestination_0(randomTarget);
  };
  function Agent$moveToUncapturedPortal$lambda(this$Agent) {
    return function (it) {
      return this$Agent.distanceToPortal_hv9zn6$(it);
    };
  }
  var compareBy$lambda_3 = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function Comparator$ObjectLiteral_3(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral_3.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral_3.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  Agent.prototype.moveToUncapturedPortal = function () {
    var $receiver = World_getInstance().allPortals;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.isUncaptured())
        destination.add_11rb$(element);
    }
    var uncaptured = sortedWith(destination, new Comparator$ObjectLiteral_3(compareBy$lambda_3(Agent$moveToUncapturedPortal$lambda(this))));
    var tmp$_0;
    tmp$_0 = uncaptured.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      if (Util_getInstance().random() < this.skills.reliability) {
        return this.goToDestination_0(element_0);
      }
    }
    return this;
  };
  function Agent$deployActionPortal$lambda(it) {
    return it.level;
  }
  var compareBy$lambda_4 = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function Comparator$ObjectLiteral_4(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral_4.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral_4.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  Agent.prototype.deployActionPortal = function () {
    if (this.isAtActionPortal()) {
      var allowedResoLevels = this.actionPortal.findAllowedResoLevels_912u9o$(this);
      var destination = ArrayList_init(allowedResoLevels.size);
      var tmp$;
      tmp$ = allowedResoLevels.entries.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        destination.add_11rb$(item.value);
      }
      var areMoreResosAllowed = sum(destination) > 0;
      if (areMoreResosAllowed) {
        var $receiver = this.actionPortal.resoSlots;
        var destination_0 = LinkedHashMap_init();
        var tmp$_0;
        tmp$_0 = $receiver.entries.iterator();
        while (tmp$_0.hasNext()) {
          var element = tmp$_0.next();
          if (element.value.isOwnedBy_912u9o$(this)) {
            destination_0.put_xwzc9p$(element.key, element.value);
          }
        }
        var ownedInPortal = toList(destination_0);
        var $receiver_0 = this.inventory.items;
        var destination_1 = ArrayList_init();
        var tmp$_1;
        tmp$_1 = $receiver_0.iterator();
        while (tmp$_1.hasNext()) {
          var element_0 = tmp$_1.next();
          if (Kotlin.isType(element_0, Resonator))
            destination_1.add_11rb$(element_0);
        }
        var destination_2 = ArrayList_init(collectionSizeOrDefault(destination_1, 10));
        var tmp$_2;
        tmp$_2 = destination_1.iterator();
        while (tmp$_2.hasNext()) {
          var item_0 = tmp$_2.next();
          var tmp$_3;
          destination_2.add_11rb$(Kotlin.isType(tmp$_3 = item_0, Resonator) ? tmp$_3 : throwCCE());
        }
        var inventoryResos = sortedWith(destination_2, new Comparator$ObjectLiteral_4(compareBy$lambda_4(Agent$deployActionPortal$lambda)));
        var deployLowFirstSet = toSet(inventoryResos);
        var tmp$_4;
        tmp$_4 = deployLowFirstSet.iterator();
        while (tmp$_4.hasNext()) {
          var element_1 = tmp$_4.next();
          var destination_3 = ArrayList_init();
          var tmp$_5;
          tmp$_5 = ownedInPortal.iterator();
          while (tmp$_5.hasNext()) {
            var element_2 = tmp$_5.next();
            var tmp$_6, tmp$_7, tmp$_8;
            if (((tmp$_8 = (tmp$_7 = (tmp$_6 = element_2.second.resonator) != null ? tmp$_6.level : null) != null ? tmp$_7.level : null) != null ? tmp$_8 : 0) >= element_1.level.level)
              destination_3.add_11rb$(element_2);
          }
          var owned = destination_3.size;
          var a = element_1.level.deployablePerPlayer - owned | 0;
          var maxDeployable = Math_0.max(a, 0);
          var destination_4 = ArrayList_init();
          var tmp$_9;
          tmp$_9 = inventoryResos.iterator();
          while (tmp$_9.hasNext()) {
            var element_3 = tmp$_9.next();
            if (element_3.level.level === element_1.level.level && element_3.level.level <= this.getLevel())
              destination_4.add_11rb$(element_3);
          }
          var levelResos = destination_4;
          if (!levelResos.isEmpty()) {
            var b = levelResos.size - 1 | 0;
            var resos = take(levelResos, Math_0.min(maxDeployable, b));
            if (!resos.isEmpty()) {
              var $receiver_1 = this.actionPortal.resoSlots;
              var destination_5 = LinkedHashMap_init();
              var tmp$_10;
              tmp$_10 = $receiver_1.entries.iterator();
              while (tmp$_10.hasNext()) {
                var element_4 = tmp$_10.next();
                var tmp$_11, tmp$_12, tmp$_13;
                if (((tmp$_13 = (tmp$_12 = (tmp$_11 = element_4.value.resonator) != null ? tmp$_11.level : null) != null ? tmp$_12.level : null) != null ? tmp$_13 : 0) < element_1.level.level) {
                  destination_5.put_xwzc9p$(element_4.key, element_4.value);
                }
              }
              var deployable = toList(destination_5);
              if (!deployable.isEmpty()) {
                var $receiver_2 = zip(Util_getInstance().shuffle_bemo1h$(deployable), resos);
                var destination_6 = ArrayList_init(collectionSizeOrDefault($receiver_2, 10));
                var tmp$_14;
                tmp$_14 = $receiver_2.iterator();
                while (tmp$_14.hasNext()) {
                  var item_1 = tmp$_14.next();
                  destination_6.add_11rb$(to(item_1.first.first, item_1.second));
                }
                var deployMap = toMap(destination_6);
                var distance = this.distanceToPortal_hv9zn6$(this.actionPortal);
                this.actionPortal.deploy_en6fu0$(this, deployMap, numberToInt(distance));
                SoundUtil_getInstance().playDeploySound_s1df0o$(this.actionPortal.location, numberToInt(distance));
                return this.copy_lmq102$(void 0, void 0, void 0, void 0, void 0, Action$Companion_getInstance().start_34yqkq$(ActionItem$Companion_getInstance().DEPLOY, World_getInstance().tick));
              }
            }
          }
        }
      }
    }
    return this.copy_lmq102$(void 0, void 0, void 0, void 0, void 0, Action$Companion_getInstance().start_34yqkq$(ActionItem$Companion_getInstance().DEPLOY, World_getInstance().tick));
  };
  Agent.prototype.hackActionPortal = function () {
    if (this.isAtActionPortal() && this.actionPortal.canHack_912u9o$(this)) {
      var hackResult = this.actionPortal.tryHack_912u9o$(this);
      SoundUtil_getInstance().playHackingSound_lfj9be$(this.actionPortal.location);
      var isSuccess = hackResult.items != null;
      if (isSuccess) {
        var newStuff = ensureNotNull(hackResult.items);
        this.inventory.items.addAll_brywnq$(newStuff);
      }
    }
    return this.copy_lmq102$(void 0, void 0, void 0, void 0, void 0, Action$Companion_getInstance().start_34yqkq$(ActionItem$Companion_getInstance().HACK, World_getInstance().tick));
  };
  function Agent$findPortalsInAttackRange$lambda(this$Agent) {
    return function (it) {
      return it.location.distanceTo_lfj9be$(this$Agent.pos);
    };
  }
  var compareBy$lambda_5 = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function Comparator$ObjectLiteral_5(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral_5.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral_5.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  Agent.prototype.findPortalsInAttackRange_0 = function (level) {
    var attackDistance = level.rangeM * 0.5 + Dimensions_getInstance().portalRadius;
    var $receiver = World_getInstance().allPortals;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      if (!equals((tmp$_0 = element.owner) != null ? tmp$_0.faction : null, this.faction))
        destination.add_11rb$(element);
    }
    var enemyPortals = destination;
    var destination_0 = ArrayList_init();
    var tmp$_1;
    tmp$_1 = enemyPortals.iterator();
    while (tmp$_1.hasNext()) {
      var element_0 = tmp$_1.next();
      if (element_0.location.distanceTo_lfj9be$(this.pos) <= attackDistance)
        destination_0.add_11rb$(element_0);
    }
    return sortedWith(destination_0, new Comparator$ObjectLiteral_5(compareBy$lambda_5(Agent$findPortalsInAttackRange$lambda(this))));
  };
  Agent.prototype.goToDestination_0 = function (destination) {
    var distance = this.skills.deployPrecision * Dimensions_getInstance().maxDeploymentRange;
    var nextDest = destination.findRandomPointNearPortal_za3lpa$(numberToInt(distance));
    return this.copy_lmq102$(void 0, void 0, void 0, void 0, void 0, Action$Companion_getInstance().start_34yqkq$(ActionItem$Companion_getInstance().MOVE, World_getInstance().tick), destination, nextDest);
  };
  Agent.prototype.findResosInAttackRange_3vxbq7$ = function (level) {
    var attackDistance = level.rangeM * 0.5;
    var portals = this.findPortalsInAttackRange_0(level);
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = portals.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var $receiver = element.resoSlots;
      var destination_0 = ArrayList_init($receiver.size);
      var tmp$_0;
      tmp$_0 = $receiver.entries.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        destination_0.add_11rb$(item.value);
      }
      var list = destination_0;
      addAll(destination, list);
    }
    var slots = destination;
    var destination_1 = ArrayList_init();
    var tmp$_1;
    tmp$_1 = slots.iterator();
    while (tmp$_1.hasNext()) {
      var element_0 = tmp$_1.next();
      var tmp$_2;
      if (element_0.resonator != null && ensureNotNull((tmp$_2 = element_0.resonator.coords) != null ? tmp$_2.distanceTo_lfj9be$(this.pos) : null) <= attackDistance)
        destination_1.add_11rb$(element_0);
    }
    var resosInRange = destination_1;
    var destination_2 = ArrayList_init(collectionSizeOrDefault(resosInRange, 10));
    var tmp$_3;
    tmp$_3 = resosInRange.iterator();
    while (tmp$_3.hasNext()) {
      var item_0 = tmp$_3.next();
      destination_2.add_11rb$(item_0.resonator);
    }
    return filterNotNull(destination_2);
  };
  Agent.prototype.shadowPos_0 = function () {
    return PathUtil_getInstance().posToShadowPos_lfj9be$(this.pos);
  };
  Agent.prototype.draw_f69bme$ = function (ctx) {
    var image = Agent$Companion_getInstance().getImage_0(this.faction, this.action.item);
    ctx.drawImage(image, this.pos.xx(), this.pos.yy());
  };
  Agent.prototype.drawRadius_f69bme$ = function (ctx) {
    if (Styles_getInstance().isDrawDestination) {
      DrawUtil_getInstance().drawLine_1fs0nm$(ctx, this.lineToPortal_hv9zn6$(this.actionPortal), Colors_getInstance().nextPortal, 1.0);
      DrawUtil_getInstance().drawLine_1fs0nm$(ctx, this.lineToDestination(), Colors_getInstance().destination, 1.0);
    }
    if (Styles_getInstance().isDrawAgentRange) {
      var deployCircle = new Circle(this.pos, Dimensions_getInstance().maxDeploymentRange);
      DrawUtil_getInstance().drawCircle_3kie0f$(ctx, deployCircle, Colors_getInstance().agentDeployCircle, Dimensions_getInstance().agentDeployCircleLineWidth);
    }
  };
  Agent.prototype.toString = function () {
    return this.faction.abbr + '-' + this.name;
  };
  Agent.prototype.equals = function (other) {
    return Kotlin.isType(other, Agent) && equals(this.key(), other.key());
  };
  Agent.prototype.hashCode = function () {
    return hashCode(this.key()) * 31 | 0;
  };
  function Agent$Companion() {
    Agent$Companion_instance = this;
    var $receiver = ActionItem$Companion_getInstance().values();
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(to(item, this.drawTemplate_0(Faction$ENL_getInstance(), item)));
    }
    this.enlImages_0 = toMap(destination);
    var $receiver_0 = ActionItem$Companion_getInstance().values();
    var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_0;
    tmp$_0 = $receiver_0.iterator();
    while (tmp$_0.hasNext()) {
      var item_0 = tmp$_0.next();
      destination_0.add_11rb$(to(item_0, this.drawTemplate_0(Faction$RES_getInstance(), item_0)));
    }
    this.resImages_0 = toMap(destination_0);
  }
  Agent$Companion.prototype.getImage_0 = function (faction, actionItem) {
    var tmp$;
    if (equals(faction, Faction$ENL_getInstance()))
      tmp$ = getValue(this.enlImages_0, actionItem);
    else if (equals(faction, Faction$RES_getInstance()))
      tmp$ = getValue(this.resImages_0, actionItem);
    else
      throw new IllegalStateException('Illegal faction: ' + faction);
    return tmp$;
  };
  function Agent$Companion$drawTemplate$lambda(closure$r, closure$lineWidth, closure$faction, closure$actionItem) {
    return function (ctx) {
      var pos = new Coords(closure$r + closure$lineWidth | 0, closure$r + closure$lineWidth | 0);
      var strokeStyle = Colors_getInstance().black;
      var circle = new Circle(pos, closure$r);
      DrawUtil_getInstance().drawCircle_3kie0f$(ctx, circle, strokeStyle, 2.0, closure$faction.color);
      DrawUtil_getInstance().drawText_omkwws$(ctx, pos.copy_vux9f0$(pos.x + 1 | 0), closure$actionItem.letter, strokeStyle, 13, DrawUtil_getInstance().CODA);
    };
  }
  Agent$Companion.prototype.drawTemplate_0 = function (faction, actionItem) {
    var lineWidth = 2;
    var r = numberToInt(Dimensions_getInstance().agentRadius);
    var w = (r * 2 | 0) + (2 * lineWidth | 0) | 0;
    var h = w;
    return HtmlUtil_getInstance().prerender_yb5akz$(w, h, Agent$Companion$drawTemplate$lambda(r, lineWidth, faction, actionItem));
  };
  Agent$Companion.prototype.createFrog_5edep5$ = function (grid) {
    return this.create_0(grid, Faction$ENL_getInstance());
  };
  Agent$Companion.prototype.createSmurf_5edep5$ = function (grid) {
    return this.create_0(grid, Faction$RES_getInstance());
  };
  Agent$Companion.prototype.create_0 = function (grid, faction) {
    var tmp$;
    var coords = Coords$Companion_getInstance().createRandomPassable_5edep5$(grid);
    var actionPortal = (tmp$ = Util_getInstance().findNearestPortal_lfj9be$(coords)) != null ? tmp$ : World_getInstance().allPortals.get_za3lpa$(0);
    return new Agent(faction, Util_getInstance().generateAgentName(), coords, Skills$Companion_getInstance().createRandom(), new Inventory(), new Action(ActionItem$Companion_getInstance().MOVE, 0), actionPortal, actionPortal.location, 0, 0);
  };
  Agent$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Agent$Companion_instance = null;
  function Agent$Companion_getInstance() {
    if (Agent$Companion_instance === null) {
      new Agent$Companion();
    }
    return Agent$Companion_instance;
  }
  Agent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Agent',
    interfaces: []
  };
  Agent.prototype.component1 = function () {
    return this.faction;
  };
  Agent.prototype.component2 = function () {
    return this.name;
  };
  Agent.prototype.component3 = function () {
    return this.pos;
  };
  Agent.prototype.component4 = function () {
    return this.skills;
  };
  Agent.prototype.component5 = function () {
    return this.inventory;
  };
  Agent.prototype.component6 = function () {
    return this.action;
  };
  Agent.prototype.component7 = function () {
    return this.actionPortal;
  };
  Agent.prototype.component8 = function () {
    return this.destination;
  };
  Agent.prototype.component9 = function () {
    return this.ap;
  };
  Agent.prototype.component10 = function () {
    return this.xm;
  };
  Agent.prototype.component11 = function () {
    return this.velocity;
  };
  Agent.prototype.copy_lmq102$ = function (faction, name, pos, skills, inventory, action, actionPortal, destination, ap, xm, velocity) {
    return new Agent(faction === void 0 ? this.faction : faction, name === void 0 ? this.name : name, pos === void 0 ? this.pos : pos, skills === void 0 ? this.skills : skills, inventory === void 0 ? this.inventory : inventory, action === void 0 ? this.action : action, actionPortal === void 0 ? this.actionPortal : actionPortal, destination === void 0 ? this.destination : destination, ap === void 0 ? this.ap : ap, xm === void 0 ? this.xm : xm, velocity === void 0 ? this.velocity : velocity);
  };
  function Faction(name, ordinal, abbr, nickName, color, fieldStyle) {
    Enum.call(this);
    this.abbr = abbr;
    this.nickName = nickName;
    this.color = color;
    this.fieldStyle = fieldStyle;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Faction_initFields() {
    Faction_initFields = function () {
    };
    Faction$NONE_instance = new Faction('NONE', 0, 'NONE', 'None', '#FFFFFF', 'rgba(255, 255, 255, ');
    Faction$ENL_instance = new Faction('ENL', 1, 'ENL', 'Frog', '#03DC03', 'rgba(3, 220, 3, ');
    Faction$RES_instance = new Faction('RES', 2, 'RES', 'Smurf', '#0088FF', 'rgba(0, 136, 255, ');
    Faction$Companion_getInstance();
  }
  var Faction$NONE_instance;
  function Faction$NONE_getInstance() {
    Faction_initFields();
    return Faction$NONE_instance;
  }
  var Faction$ENL_instance;
  function Faction$ENL_getInstance() {
    Faction_initFields();
    return Faction$ENL_instance;
  }
  var Faction$RES_instance;
  function Faction$RES_getInstance() {
    Faction_initFields();
    return Faction$RES_instance;
  }
  function Faction$Companion() {
    Faction$Companion_instance = this;
  }
  Faction$Companion.prototype.createRandom = function () {
    return Util_getInstance().random() < 0.5 ? Faction$ENL_getInstance() : Faction$RES_getInstance();
  };
  Faction$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Faction$Companion_instance = null;
  function Faction$Companion_getInstance() {
    Faction_initFields();
    if (Faction$Companion_instance === null) {
      new Faction$Companion();
    }
    return Faction$Companion_instance;
  }
  Faction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Faction',
    interfaces: [Enum]
  };
  function Faction$values() {
    return [Faction$NONE_getInstance(), Faction$ENL_getInstance(), Faction$RES_getInstance()];
  }
  Faction.values = Faction$values;
  function Faction$valueOf(name) {
    switch (name) {
      case 'NONE':
        return Faction$NONE_getInstance();
      case 'ENL':
        return Faction$ENL_getInstance();
      case 'RES':
        return Faction$RES_getInstance();
      default:throwISE('No enum constant agent.Faction.' + name);
    }
  }
  Faction.valueOf_61zpoe$ = Faction$valueOf;
  function Inventory(items) {
    if (items === void 0) {
      items = ArrayList_init();
    }
    this.items = items;
  }
  Inventory.prototype.findKeys = function () {
    var $receiver = this.items;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (Kotlin.isType(element, PortalKey))
        destination.add_11rb$(element);
    }
    var destination_0 = ArrayList_init(collectionSizeOrDefault(destination, 10));
    var tmp$_0;
    tmp$_0 = destination.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      var tmp$_1;
      destination_0.add_11rb$(Kotlin.isType(tmp$_1 = item, PortalKey) ? tmp$_1 : throwCCE());
    }
    return destination_0;
  };
  Inventory.prototype.findXmps = function () {
    var $receiver = this.items;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (Kotlin.isType(element, XmpBurster))
        destination.add_11rb$(element);
    }
    var destination_0 = ArrayList_init(collectionSizeOrDefault(destination, 10));
    var tmp$_0;
    tmp$_0 = destination.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      var tmp$_1;
      destination_0.add_11rb$(Kotlin.isType(tmp$_1 = item, XmpBurster) ? tmp$_1 : throwCCE());
    }
    return destination_0;
  };
  Inventory.prototype.findResonators = function () {
    var $receiver = this.items;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (Kotlin.isType(element, Resonator))
        destination.add_11rb$(element);
    }
    var destination_0 = ArrayList_init(collectionSizeOrDefault(destination, 10));
    var tmp$_0;
    tmp$_0 = destination.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      var tmp$_1;
      destination_0.add_11rb$(Kotlin.isType(tmp$_1 = item, Resonator) ? tmp$_1 : throwCCE());
    }
    return destination_0;
  };
  Inventory.prototype.findPowerCubes = function () {
    var $receiver = this.items;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (Kotlin.isType(element, PowerCube))
        destination.add_11rb$(element);
    }
    var destination_0 = ArrayList_init(collectionSizeOrDefault(destination, 10));
    var tmp$_0;
    tmp$_0 = destination.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      var tmp$_1;
      destination_0.add_11rb$(Kotlin.isType(tmp$_1 = item, PowerCube) ? tmp$_1 : throwCCE());
    }
    return destination_0;
  };
  Inventory.prototype.findUniqueKeys = function () {
    var tmp$;
    return (tmp$ = this.findKeys()) != null ? distinct(tmp$) : null;
  };
  Inventory.prototype.consumeKeyToPortal_hv9zn6$ = function (portal) {
    var tmp$;
    var $receiver = ensureNotNull(this.findUniqueKeys());
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_0;
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        var tmp$_1;
        if ((tmp$_1 = element.portal) != null ? tmp$_1.equals(portal) : null) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    tmp$ = firstOrNull$result;
    if (tmp$ == null) {
      throw new IllegalStateException('Key should exist.');
    }
    var key = tmp$;
    this.items.remove_11rb$(key);
  };
  Inventory.prototype.consumeXmps_ss5kb$ = function (xmps) {
    return this.items.removeAll_brywnq$(xmps);
  };
  Inventory.prototype.consumeResos_tvxik5$ = function (resos) {
    return this.items.removeAll_brywnq$(resos);
  };
  Inventory.prototype.keyCount = function () {
    var $receiver = this.items;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (Kotlin.isType(element, PortalKey))
        destination.add_11rb$(element);
    }
    return destination.size;
  };
  Inventory.prototype.xmpCount = function () {
    var $receiver = this.items;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (Kotlin.isType(element, XmpBurster))
        destination.add_11rb$(element);
    }
    return destination.size;
  };
  Inventory.prototype.usCount = function () {
    var $receiver = this.items;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (Kotlin.isType(element, UltraStrike))
        destination.add_11rb$(element);
    }
    return destination.size;
  };
  Inventory.prototype.weaponCount = function () {
    return this.xmpCount() + this.usCount() | 0;
  };
  Inventory.prototype.resoCount = function () {
    var $receiver = this.items;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (Kotlin.isType(element, Resonator))
        destination.add_11rb$(element);
    }
    return destination.size;
  };
  Inventory.prototype.shieldCount = function () {
    var $receiver = this.items;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (Kotlin.isType(element, Shield))
        destination.add_11rb$(element);
    }
    return destination.size;
  };
  Inventory.prototype.powerCubeCount = function () {
    var $receiver = this.items;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (Kotlin.isType(element, PowerCube))
        destination.add_11rb$(element);
    }
    return destination.size;
  };
  function Inventory$toString$lambda(it) {
    return it;
  }
  var Grouping = Kotlin.kotlin.collections.Grouping;
  function groupingBy$ObjectLiteral(this$groupingBy, closure$keySelector) {
    this.this$groupingBy = this$groupingBy;
    this.closure$keySelector = closure$keySelector;
  }
  groupingBy$ObjectLiteral.prototype.sourceIterator = function () {
    return this.this$groupingBy.iterator();
  };
  groupingBy$ObjectLiteral.prototype.keyOf_11rb$ = function (element) {
    return this.closure$keySelector(element);
  };
  groupingBy$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Grouping]};
  Inventory.prototype.toString = function () {
    var $receiver = this.items;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (!(Kotlin.isType(element, PortalKey) || Kotlin.isType(element, XmpBurster) || Kotlin.isType(element, Resonator)))
        destination.add_11rb$(element);
    }
    var filtered = destination;
    var $receiver_0 = eachCount(new groupingBy$ObjectLiteral(filtered, Inventory$toString$lambda));
    var destination_0 = ArrayList_init($receiver_0.size);
    var tmp$_0;
    tmp$_0 = $receiver_0.entries.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      var tmp$_1 = destination_0.add_11rb$;
      var transform$result;
      var count = item.value;
      if (count === 1) {
        transform$result = item.key.toString();
      }
       else {
        transform$result = count.toString() + 'x' + toString(item.key);
      }
      tmp$_1.call(destination_0, transform$result);
    }
    var items = destination_0.toString();
    return this.keyCount().toString() + ' keys ' + items;
  };
  Inventory.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Inventory',
    interfaces: []
  };
  Inventory.prototype.component1 = function () {
    return this.items;
  };
  Inventory.prototype.copy_m1e5jq$ = function (items) {
    return new Inventory(items === void 0 ? this.items : items);
  };
  Inventory.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.items) | 0;
    return result;
  };
  Inventory.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.items, other.items))));
  };
  function NonFaction(pos, speed, destination, vectorField, busyUntil) {
    NonFaction$Companion_getInstance();
    this.pos = pos;
    this.speed = speed;
    this.destination = destination;
    this.vectorField = vectorField;
    this.busyUntil = busyUntil;
    this.isDrunk = Util_getInstance().random() <= 0.02;
    this.velocity = Complex$Companion_getInstance().ZERO;
  }
  NonFaction.prototype.distanceToDestination = function () {
    return this.pos.distanceTo_lfj9be$(this.destination);
  };
  NonFaction.prototype.distanceToPortal_hv9zn6$ = function (portal) {
    return this.pos.distanceTo_lfj9be$(portal.location);
  };
  NonFaction.prototype.isAtDestination = function () {
    return this.distanceToDestination() < Dimensions_getInstance().maxDeploymentRange;
  };
  NonFaction.prototype.isBusy_za3lpa$ = function (tick) {
    return tick <= this.busyUntil;
  };
  NonFaction.prototype.act = function () {
    var tmp$;
    if (this.isBusy_za3lpa$(World_getInstance().tick)) {
      if (Util_getInstance().random() < 0.001) {
        this.busyUntil = World_getInstance().tick;
        this.moveElsewhere();
      }
      return;
    }
    if (Util_getInstance().random() < 0.005) {
      this.wait();
    }
    if (Util_getInstance().random() < 0.02) {
      this.moveElsewhere();
    }
    if (this.isAtDestination()) {
      this.wait();
    }
     else {
      var shadowPos = PathUtil_getInstance().posToShadowPos_lfj9be$(this.pos);
      var force = (tmp$ = this.vectorField.get_11rb$(shadowPos)) != null ? tmp$ : this.velocity;
      var mag = this.speed * Time_getInstance().globalSpeedFactor * World_getInstance().speed / 100;
      var relativeForce = Complex$Companion_getInstance().fromMagnitudeAndPhase_5nl2e7$(mag, force.phase);
      var oldWeight = Constants_getInstance().historyFactor * 100 / World_getInstance().speed;
      var oldVector = Complex$Companion_getInstance().valueOf_5nl2e7$(this.velocity.magnitude * oldWeight, this.velocity.phase);
      var newVector = Complex$Companion_getInstance().valueOf_5nl2e7$(relativeForce.magnitude * (1.0 - oldWeight), relativeForce.phase);
      var velo = oldVector.plus_p4p8i0$(newVector);
      this.velocity = velo;
      this.pos = new Coords(numberToInt(this.pos.x + this.velocity.re), numberToInt(this.pos.y + this.velocity.im));
    }
  };
  NonFaction.prototype.isOffScreen = function () {
    return this.pos.x < 0 || this.pos.y < 0 || this.pos.x >= World_getInstance().w() || this.pos.y >= World_getInstance().h();
  };
  NonFaction.prototype.wait = function () {
    this.velocity = Complex$Companion_getInstance().ZERO;
    this.busyUntil = World_getInstance().tick + NonFaction$Companion_getInstance().creatWaitTime_0() | 0;
  };
  NonFaction.prototype.moveElsewhere = function () {
    if (!this.isOffScreen() && Util_getInstance().random() < 0.8) {
      return this.moveToRandomOffscreenDestination();
    }
    if (Util_getInstance().random() < 0.5) {
      return this.moveToFarPortal();
    }
    return this.moveToRandomPortal();
  };
  NonFaction.prototype.moveToRandomOffscreenDestination = function () {
    var destination = first(Util_getInstance().shuffle_bemo1h$(NonFaction$Companion_getInstance().DESTINATIONS));
    this.vectorField = NonFaction$Companion_getInstance().getOrCreateVectorField_lfj9be$(destination);
    this.destination = destination;
  };
  NonFaction.prototype.moveToFarPortal = function () {
    var portal = NonFaction$Companion_getInstance().findFarPortal_0(this.pos);
    this.vectorField = portal.vectorField;
    this.destination = portal.location;
  };
  NonFaction.prototype.moveToRandomPortal = function () {
    var randomTarget = World_getInstance().allPortals.get_za3lpa$(numberToInt(Util_getInstance().random() * (World_getInstance().allPortals.size - 1 | 0)));
    this.vectorField = randomTarget.vectorField;
    this.destination = randomTarget.location;
  };
  NonFaction.prototype.draw_f69bme$ = function (ctx) {
    ctx.drawImage(NonFaction$Companion_getInstance().image_0, this.pos.xx(), this.pos.yy());
  };
  function NonFaction$Companion() {
    NonFaction$Companion_instance = this;
    this.OFFSCREEN_DISTANCE_0 = Kotlin.imul(PathUtil_getInstance().RESOLUTION, MapUtil_getInstance().OFFSCREEN_CELL_ROWS / 2 | 0);
    this.DESTINATIONS = listOf([new Coords(-60, -60), new Coords(World_getInstance().w() + this.OFFSCREEN_DISTANCE_0 | 0, -60), new Coords(-60, World_getInstance().h() + this.OFFSCREEN_DISTANCE_0 | 0), new Coords(World_getInstance().w() + this.OFFSCREEN_DISTANCE_0 | 0, World_getInstance().h() + this.OFFSCREEN_DISTANCE_0 | 0), new Coords(World_getInstance().w() / 3 | 0, -60), new Coords((World_getInstance().w() * 2 | 0) / 3 | 0, -60), new Coords(-60, World_getInstance().h() / 3 | 0), new Coords(-60, (World_getInstance().h() * 2 | 0) / 3 | 0), new Coords(World_getInstance().w() + this.OFFSCREEN_DISTANCE_0 | 0, World_getInstance().h() / 3 | 0), new Coords(World_getInstance().w() + this.OFFSCREEN_DISTANCE_0 | 0, (World_getInstance().h() * 2 | 0) / 3 | 0), new Coords(World_getInstance().w() / 3 | 0, World_getInstance().h() + this.OFFSCREEN_DISTANCE_0 | 0), new Coords((World_getInstance().w() * 2 | 0) / 3 | 0, World_getInstance().h() + this.OFFSCREEN_DISTANCE_0 | 0)]);
    this.fields = LinkedHashMap_init();
    this.MIN_WAIT_0 = Util_getInstance().secondsToTicks_za3lpa$(5);
    this.MAX_WAIT_0 = Util_getInstance().secondsToTicks_za3lpa$(45);
    this.image_0 = this.drawTemplate_0();
    this.maxSpeed = 5.0;
    this.minSpeed = 3.0;
  }
  NonFaction$Companion.prototype.getOrCreateVectorField_lfj9be$ = function (destination) {
    var maybeField = this.fields.get_11rb$(destination);
    var tmp$ = maybeField != null;
    if (tmp$) {
      tmp$ = !maybeField.isEmpty();
    }
    if (tmp$) {
      return maybeField;
    }
     else {
      var newField = PathUtil_getInstance().calculateVectorField_8eqwnz$(PathUtil_getInstance().generateHeatMap_lfj9be$(destination));
      this.fields.put_xwzc9p$(destination, newField);
      return newField;
    }
  };
  function NonFaction$Companion$findFarPortal$lambda(closure$pos) {
    return function (it) {
      return closure$pos.distanceTo_lfj9be$(it.location);
    };
  }
  var compareByDescending$lambda = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(b), selector(a));
      };
    };
  });
  function Comparator$ObjectLiteral_6(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral_6.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral_6.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  NonFaction$Companion.prototype.findFarPortal_0 = function (pos) {
    var randomFarPortals = sortedWith(World_getInstance().allPortals, new Comparator$ObjectLiteral_6(compareByDescending$lambda(NonFaction$Companion$findFarPortal$lambda(pos))));
    var tmp$;
    tmp$ = randomFarPortals.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (Util_getInstance().random() < 0.4) {
        return element;
      }
    }
    return randomFarPortals.get_za3lpa$(0);
  };
  NonFaction$Companion.prototype.creatWaitTime_0 = function () {
    return Util_getInstance().randomInt_vux9f0$(this.MIN_WAIT_0, this.MAX_WAIT_0);
  };
  function NonFaction$Companion$drawTemplate$lambda(closure$r, closure$lineWidth) {
    return function (ctx) {
      var fillStyle = '#ffffff';
      var strokeStyle = Colors_getInstance().black;
      var circle = new Circle(new Coords(closure$r + closure$lineWidth | 0, closure$r + closure$lineWidth | 0), closure$r);
      DrawUtil_getInstance().drawCircle_3kie0f$(ctx, circle, strokeStyle, closure$lineWidth, fillStyle);
    };
  }
  NonFaction$Companion.prototype.drawTemplate_0 = function () {
    var lineWidth = 2;
    var r = numberToInt(Dimensions_getInstance().agentRadius);
    var w = (r * 2 | 0) + (2 * lineWidth | 0) | 0;
    var h = w;
    return HtmlUtil_getInstance().prerender_yb5akz$(w, h, NonFaction$Companion$drawTemplate$lambda(r, lineWidth));
  };
  NonFaction$Companion.prototype.create_5edep5$ = function (grid) {
    var tmp$;
    var position = Coords$Companion_getInstance().createRandomPassable_5edep5$(grid);
    var speed = this.minSpeed + Util_getInstance().random() * (this.maxSpeed - this.minSpeed);
    if (Util_getInstance().random() < 0.1) {
      var destination = first(Util_getInstance().shuffle_bemo1h$(this.DESTINATIONS));
      var vectorField = this.getOrCreateVectorField_lfj9be$(destination);
      tmp$ = new NonFaction(position, speed, destination, vectorField, World_getInstance().tick);
    }
     else {
      var portal = World_getInstance().allPortals.get_za3lpa$(numberToInt(Util_getInstance().random() * (World_getInstance().allPortals.size - 1 | 0)));
      tmp$ = new NonFaction(position, speed, portal.location, portal.vectorField, World_getInstance().tick);
    }
    var newNonFaction = tmp$;
    DrawUtil_getInstance().drawNonFaction_3mzr9k$(newNonFaction);
    return newNonFaction;
  };
  NonFaction$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var NonFaction$Companion_instance = null;
  function NonFaction$Companion_getInstance() {
    if (NonFaction$Companion_instance === null) {
      new NonFaction$Companion();
    }
    return NonFaction$Companion_instance;
  }
  NonFaction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NonFaction',
    interfaces: []
  };
  NonFaction.prototype.component1 = function () {
    return this.pos;
  };
  NonFaction.prototype.component2 = function () {
    return this.speed;
  };
  NonFaction.prototype.component3 = function () {
    return this.destination;
  };
  NonFaction.prototype.component4 = function () {
    return this.vectorField;
  };
  NonFaction.prototype.component5 = function () {
    return this.busyUntil;
  };
  NonFaction.prototype.copy_b92bfo$ = function (pos, speed, destination, vectorField, busyUntil) {
    return new NonFaction(pos === void 0 ? this.pos : pos, speed === void 0 ? this.speed : speed, destination === void 0 ? this.destination : destination, vectorField === void 0 ? this.vectorField : vectorField, busyUntil === void 0 ? this.busyUntil : busyUntil);
  };
  NonFaction.prototype.toString = function () {
    return 'NonFaction(pos=' + Kotlin.toString(this.pos) + (', speed=' + Kotlin.toString(this.speed)) + (', destination=' + Kotlin.toString(this.destination)) + (', vectorField=' + Kotlin.toString(this.vectorField)) + (', busyUntil=' + Kotlin.toString(this.busyUntil)) + ')';
  };
  NonFaction.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.pos) | 0;
    result = result * 31 + Kotlin.hashCode(this.speed) | 0;
    result = result * 31 + Kotlin.hashCode(this.destination) | 0;
    result = result * 31 + Kotlin.hashCode(this.vectorField) | 0;
    result = result * 31 + Kotlin.hashCode(this.busyUntil) | 0;
    return result;
  };
  NonFaction.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.pos, other.pos) && Kotlin.equals(this.speed, other.speed) && Kotlin.equals(this.destination, other.destination) && Kotlin.equals(this.vectorField, other.vectorField) && Kotlin.equals(this.busyUntil, other.busyUntil)))));
  };
  function Skills(speed, deployPrecision, glyphSkill, reliability) {
    Skills$Companion_getInstance();
    if (glyphSkill === void 0)
      glyphSkill = 0.8;
    this.speed = speed;
    this.deployPrecision = deployPrecision;
    this.glyphSkill = glyphSkill;
    this.reliability = reliability;
  }
  function Skills$Companion() {
    Skills$Companion_instance = this;
    this.maxSpeed = 8.0;
    this.minSpeed = 5.0;
  }
  Skills$Companion.prototype.createRandom = function () {
    return new Skills(this.randomSpeed_0(), this.deployPrecision_0(), this.randomGlyphSkill_0(), this.randomReliability_0());
  };
  Skills$Companion.prototype.randomSpeed_0 = function () {
    return Util_getInstance().random() * (this.maxSpeed - this.minSpeed) + this.minSpeed;
  };
  Skills$Companion.prototype.deployPrecision_0 = function () {
    return 0.2 + Util_getInstance().random() * 0.8;
  };
  Skills$Companion.prototype.randomGlyphSkill_0 = function () {
    return Util_getInstance().random();
  };
  Skills$Companion.prototype.randomReliability_0 = function () {
    return 0.5 + Util_getInstance().random() / 2;
  };
  Skills$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Skills$Companion_instance = null;
  function Skills$Companion_getInstance() {
    if (Skills$Companion_instance === null) {
      new Skills$Companion();
    }
    return Skills$Companion_instance;
  }
  Skills.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Skills',
    interfaces: []
  };
  Skills.prototype.component1 = function () {
    return this.speed;
  };
  Skills.prototype.component2 = function () {
    return this.deployPrecision;
  };
  Skills.prototype.component3 = function () {
    return this.glyphSkill;
  };
  Skills.prototype.component4 = function () {
    return this.reliability;
  };
  Skills.prototype.copy_olhf3v$ = function (speed, deployPrecision, glyphSkill, reliability) {
    return new Skills(speed === void 0 ? this.speed : speed, deployPrecision === void 0 ? this.deployPrecision : deployPrecision, glyphSkill === void 0 ? this.glyphSkill : glyphSkill, reliability === void 0 ? this.reliability : reliability);
  };
  Skills.prototype.toString = function () {
    return 'Skills(speed=' + Kotlin.toString(this.speed) + (', deployPrecision=' + Kotlin.toString(this.deployPrecision)) + (', glyphSkill=' + Kotlin.toString(this.glyphSkill)) + (', reliability=' + Kotlin.toString(this.reliability)) + ')';
  };
  Skills.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.speed) | 0;
    result = result * 31 + Kotlin.hashCode(this.deployPrecision) | 0;
    result = result * 31 + Kotlin.hashCode(this.glyphSkill) | 0;
    result = result * 31 + Kotlin.hashCode(this.reliability) | 0;
    return result;
  };
  Skills.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.speed, other.speed) && Kotlin.equals(this.deployPrecision, other.deployPrecision) && Kotlin.equals(this.glyphSkill, other.glyphSkill) && Kotlin.equals(this.reliability, other.reliability)))));
  };
  function Action(item, untilTick) {
    Action$Companion_getInstance();
    this.item = item;
    this.untilTick = untilTick;
  }
  Action.prototype.toString = function () {
    return this.item.text;
  };
  function Action$Companion() {
    Action$Companion_instance = this;
  }
  Action$Companion.prototype.start_34yqkq$ = function (item, tick) {
    return new Action(item, tick + item.durationSeconds | 0);
  };
  Action$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Action$Companion_instance = null;
  function Action$Companion_getInstance() {
    if (Action$Companion_instance === null) {
      new Action$Companion();
    }
    return Action$Companion_instance;
  }
  Action.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Action',
    interfaces: []
  };
  Action.prototype.component1 = function () {
    return this.item;
  };
  Action.prototype.component2 = function () {
    return this.untilTick;
  };
  Action.prototype.copy_34yqkq$ = function (item, untilTick) {
    return new Action(item === void 0 ? this.item : item, untilTick === void 0 ? this.untilTick : untilTick);
  };
  Action.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.item) | 0;
    result = result * 31 + Kotlin.hashCode(this.untilTick) | 0;
    return result;
  };
  Action.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.item, other.item) && Kotlin.equals(this.untilTick, other.untilTick)))));
  };
  function ActionItem(text, letter, durationSeconds) {
    ActionItem$Companion_getInstance();
    this.text = text;
    this.letter = letter;
    this.durationSeconds = durationSeconds;
  }
  function ActionItem$Companion() {
    ActionItem$Companion_instance = this;
    this.MOVE = new ActionItem('moving', ' ', 1);
    this.WAIT = new ActionItem('waiting', 'o', 1);
    this.HACK = new ActionItem('hacking', ' !', 5);
    this.GLYPH = new ActionItem('glyphing', '?', 40);
    this.ATTACK = new ActionItem('attacking', '-', 5);
    this.DEPLOY = new ActionItem('deploying', '+', 10);
    this.LINK = new ActionItem('linking', ' |', 10);
  }
  ActionItem$Companion.prototype.values = function () {
    return listOf([this.MOVE, this.WAIT, this.HACK, this.GLYPH, this.ATTACK, this.DEPLOY, this.LINK]);
  };
  ActionItem$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ActionItem$Companion_instance = null;
  function ActionItem$Companion_getInstance() {
    if (ActionItem$Companion_instance === null) {
      new ActionItem$Companion();
    }
    return ActionItem$Companion_instance;
  }
  ActionItem.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionItem',
    interfaces: []
  };
  ActionItem.prototype.component1 = function () {
    return this.text;
  };
  ActionItem.prototype.component2 = function () {
    return this.letter;
  };
  ActionItem.prototype.component3 = function () {
    return this.durationSeconds;
  };
  ActionItem.prototype.copy_rjan26$ = function (text, letter, durationSeconds) {
    return new ActionItem(text === void 0 ? this.text : text, letter === void 0 ? this.letter : letter, durationSeconds === void 0 ? this.durationSeconds : durationSeconds);
  };
  ActionItem.prototype.toString = function () {
    return 'ActionItem(text=' + Kotlin.toString(this.text) + (', letter=' + Kotlin.toString(this.letter)) + (', durationSeconds=' + Kotlin.toString(this.durationSeconds)) + ')';
  };
  ActionItem.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.text) | 0;
    result = result * 31 + Kotlin.hashCode(this.letter) | 0;
    result = result * 31 + Kotlin.hashCode(this.durationSeconds) | 0;
    return result;
  };
  ActionItem.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.text, other.text) && Kotlin.equals(this.letter, other.letter) && Kotlin.equals(this.durationSeconds, other.durationSeconds)))));
  };
  function Colors() {
    Colors_instance = this;
    this.background = '000000';
    this.nextPortal = '#aaaaaa';
    this.destination = '#333333';
    this.agentDeployCircle = '#aaaaaa';
    this.grid = '#111111';
    this.enl = '#03DC03';
    this.res = '#0088FF';
    this.black = '#000000';
    this.white = '#ffffffff';
    this.red = '#ff0000';
    this.orange = '#ff7315';
    this.damage = '#ff7315';
    this.critDamage = '#e40000';
  }
  Colors.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Colors',
    interfaces: []
  };
  var Colors_instance = null;
  function Colors_getInstance() {
    if (Colors_instance === null) {
      new Colors();
    }
    return Colors_instance;
  }
  function Config() {
    Config_instance = this;
    this.seed = 111;
    this.startPortals = 10;
    this.startFrogs = 1;
    this.startSmurfs = 1;
    this.maxFrogs = 500;
    this.maxSmurfs = 500;
    this.startNonFaction = 500;
    this.isAutostart = true;
    this.vectorSmoothCount = 5;
    this.shadowBlurCount = 3;
    this.comMessageLimit = 8;
    this.topAgentsMessageLimit = 5;
  }
  Config.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Config',
    interfaces: []
  };
  var Config_instance = null;
  function Config_getInstance() {
    if (Config_instance === null) {
      new Config();
    }
    return Config_instance;
  }
  function Constants() {
    Constants_instance = this;
    this.phi = 1.618033988749895;
    this.tau = 2.0 * math.PI;
    this.hexChars = '0123456789ABCDEF';
    this.historyFactor = 1.0 - 1.0 / math.E;
  }
  Constants.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Constants',
    interfaces: []
  };
  var Constants_instance = null;
  function Constants_getInstance() {
    if (Constants_instance === null) {
      new Constants();
    }
    return Constants_instance;
  }
  function Dimensions() {
    Dimensions_instance = this;
    this.maxWidth = 1400;
    this.portalRadius = 8.0;
    this.minDistanceBetweenPortals = 2 * this.portalRadius * 2;
    this.minDistancePortalToImpassable = this.portalRadius;
    this.resoRadius = 2.0;
    this.maxDeploymentRange = 34.0;
    this.agentRadius = 5.0;
    this.agentDeployCircleLineWidth = 1.0;
    this.gridLineWidthMain = 0.2;
    this.gridLineWidth = 0.1;
    this.gridSizeMain = 100;
    this.gridSize = 20;
    this.linkLineWidth = 3.0;
    this.topActionOffset = 102.0;
    this.botActionOffset = 158.0;
    this.leftOffset = numberToInt(this.maxDeploymentRange) * Constants_getInstance().phi;
    this.rightOffset = numberToInt(this.maxDeploymentRange) * Constants_getInstance().phi;
    this.topOffset = numberToInt(this.maxDeploymentRange) * Constants_getInstance().phi;
    this.botOffset = numberToInt(this.maxDeploymentRange) * Constants_getInstance().phi;
    this.comBottomOffset = 34;
    this.comRightOffset = 377 + 50 | 0;
    this.comFontSize = 11;
    this.muFontSize = 21;
    this.muLeftOffset = 13;
    this.muBottomOffset = 89;
    this.topAgentsBottomOffset = 0;
    this.topAgentsLeftOffset = 210;
    this.topAgentsFontSize = 13;
    this.topAgentsInventoryFontSize = 11;
    this.tickBottomOffset = 55;
    this.tickFontSize = 12;
    this.portalNameFontSize = 12;
    this.statsFontSize = 13;
  }
  Dimensions.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Dimensions',
    interfaces: []
  };
  var Dimensions_instance = null;
  function Dimensions_getInstance() {
    if (Dimensions_instance === null) {
      new Dimensions();
    }
    return Dimensions_instance;
  }
  function OscillatorType() {
    OscillatorType_instance = this;
    this.SINE = 'sine';
    this.SQUARE = 'square';
    this.SAW = 'sawtooth';
    this.TRIANGLE = 'triangle';
    this.CUSTOM = 'custom';
  }
  OscillatorType.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'OscillatorType',
    interfaces: []
  };
  var OscillatorType_instance = null;
  function OscillatorType_getInstance() {
    if (OscillatorType_instance === null) {
      new OscillatorType();
    }
    return OscillatorType_instance;
  }
  function Probabilities() {
    Probabilities_instance = this;
    this.keyChance = 0.8;
    this.hackChance = 0.75;
    this.unclaimedHackChance = 0.85;
    this.glyphChance = 0.5;
    this.unclaimedGlyphChance = 0.6;
  }
  Probabilities.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Probabilities',
    interfaces: []
  };
  var Probabilities_instance = null;
  function Probabilities_getInstance() {
    if (Probabilities_instance === null) {
      new Probabilities();
    }
    return Probabilities_instance;
  }
  function Styles() {
    Styles_instance = this;
    this.fieldTransparency = 0.4;
    this.isDrawAgentRange = false;
    this.isDrawDestination = false;
    this.isDrawNoiseMap = false;
    this.isDrawPortalNames = true;
    this.isDrawCom = true;
    this.isDrawResoLevels = false;
    this.isDrawTopAgents = true;
    this.useSatteliteMap = false;
    this.use3DBuildings = true;
    this.vectorStyle = Styles$VectorStyle$CIRCLE_getInstance();
    this.isDrawObstructedVectors = true;
    this.isDrawResoLineGradient = true;
    this.isFillMuDisplay = true;
  }
  function Styles$VectorStyle(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Styles$VectorStyle_initFields() {
    Styles$VectorStyle_initFields = function () {
    };
    Styles$VectorStyle$CIRCLE_instance = new Styles$VectorStyle('CIRCLE', 0);
    Styles$VectorStyle$SQUARE_instance = new Styles$VectorStyle('SQUARE', 1);
  }
  var Styles$VectorStyle$CIRCLE_instance;
  function Styles$VectorStyle$CIRCLE_getInstance() {
    Styles$VectorStyle_initFields();
    return Styles$VectorStyle$CIRCLE_instance;
  }
  var Styles$VectorStyle$SQUARE_instance;
  function Styles$VectorStyle$SQUARE_getInstance() {
    Styles$VectorStyle_initFields();
    return Styles$VectorStyle$SQUARE_instance;
  }
  Styles$VectorStyle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VectorStyle',
    interfaces: [Enum]
  };
  function Styles$VectorStyle$values() {
    return [Styles$VectorStyle$CIRCLE_getInstance(), Styles$VectorStyle$SQUARE_getInstance()];
  }
  Styles$VectorStyle.values = Styles$VectorStyle$values;
  function Styles$VectorStyle$valueOf(name) {
    switch (name) {
      case 'CIRCLE':
        return Styles$VectorStyle$CIRCLE_getInstance();
      case 'SQUARE':
        return Styles$VectorStyle$SQUARE_getInstance();
      default:throwISE('No enum constant config.Styles.VectorStyle.' + name);
    }
  }
  Styles$VectorStyle.valueOf_61zpoe$ = Styles$VectorStyle$valueOf;
  Styles.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Styles',
    interfaces: []
  };
  var Styles_instance = null;
  function Styles_getInstance() {
    if (Styles_instance === null) {
      new Styles();
    }
    return Styles_instance;
  }
  function Time() {
    Time_instance = this;
    this.minTickInterval = 20;
    this.secondsPerTick = 1;
    this.globalSpeedFactor = 0.5;
  }
  Time.prototype.ticksPerFrame = function () {
    return this.globalSpeedFactor * 100.0 / World_getInstance().speed;
  };
  Time.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Time',
    interfaces: []
  };
  var Time_instance = null;
  function Time_getInstance() {
    if (Time_instance === null) {
      new Time();
    }
    return Time_instance;
  }
  function PowerCube(level, owner) {
    PowerCube$Companion_getInstance();
    this.level = level;
    this.owner = owner;
  }
  PowerCube.prototype.toString = function () {
    return 'PC' + toString(this.level.level);
  };
  PowerCube.prototype.getOwnerId = function () {
    return this.owner.key();
  };
  function PowerCube$Companion() {
    PowerCube$Companion_instance = this;
  }
  PowerCube$Companion.prototype.create_34vsha$ = function (level, agent) {
    return new PowerCube(level, agent);
  };
  PowerCube$Companion.prototype.create_ugk1o2$ = function (level, agent) {
    return this.create_34vsha$(PowerCubeLevel$Companion_getInstance().valueOf_za3lpa$(level), agent);
  };
  PowerCube$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PowerCube$Companion_instance = null;
  function PowerCube$Companion_getInstance() {
    if (PowerCube$Companion_instance === null) {
      new PowerCube$Companion();
    }
    return PowerCube$Companion_instance;
  }
  PowerCube.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PowerCube',
    interfaces: [DeployableItem]
  };
  PowerCube.prototype.component1 = function () {
    return this.level;
  };
  PowerCube.prototype.component2 = function () {
    return this.owner;
  };
  PowerCube.prototype.copy_34vsha$ = function (level, owner) {
    return new PowerCube(level === void 0 ? this.level : level, owner === void 0 ? this.owner : owner);
  };
  PowerCube.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.level) | 0;
    result = result * 31 + Kotlin.hashCode(this.owner) | 0;
    return result;
  };
  PowerCube.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.level, other.level) && Kotlin.equals(this.owner, other.owner)))));
  };
  function QgressItem() {
  }
  QgressItem.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'QgressItem',
    interfaces: []
  };
  function UltraStrike(level, owner) {
    this.level = level;
    this.owner = owner;
  }
  UltraStrike.prototype.toString = function () {
    return 'US' + toString(this.level.level);
  };
  UltraStrike.prototype.getOwnerId = function () {
    return this.owner.key();
  };
  UltraStrike.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UltraStrike',
    interfaces: [DeployableItem]
  };
  UltraStrike.prototype.component1 = function () {
    return this.level;
  };
  UltraStrike.prototype.component2 = function () {
    return this.owner;
  };
  UltraStrike.prototype.copy_wgohym$ = function (level, owner) {
    return new UltraStrike(level === void 0 ? this.level : level, owner === void 0 ? this.owner : owner);
  };
  UltraStrike.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.level) | 0;
    result = result * 31 + Kotlin.hashCode(this.owner) | 0;
    return result;
  };
  UltraStrike.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.level, other.level) && Kotlin.equals(this.owner, other.owner)))));
  };
  function XmpBurster(level, owner) {
    XmpBurster$Companion_getInstance();
    this.level = level;
    this.owner = owner;
  }
  XmpBurster.prototype.calcBaseDamage_0 = function (isCritical) {
    return isCritical ? Kotlin.imul(this.level.damage, XmpBurster$Companion_getInstance().CRIT_DAMAGE_MULTIPLIER) : this.level.damage;
  };
  XmpBurster.prototype.dealDamage_912u9o$ = function (agent) {
    var resosInRange = agent.findResosInAttackRange_3vxbq7$(this.level);
    var destination = ArrayList_init(collectionSizeOrDefault(resosInRange, 10));
    var tmp$;
    tmp$ = resosInRange.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var tmp$_1;
      var distanceToAgent = ensureNotNull((tmp$_1 = item.coords) != null ? tmp$_1.distanceTo_lfj9be$(agent.pos) : null);
      var distanceRatio = 1.0 - distanceToAgent / this.level.rangeM;
      var isCloseEnough = distanceRatio < Constants_getInstance().phi - 1;
      var isCritical = isCloseEnough && Util_getInstance().random() <= XmpBurster$Companion_getInstance().CRIT_RATE;
      var damageValue = numberToInt(this.calcBaseDamage_0(isCritical) * distanceRatio * XmpBurster$Companion_getInstance().GLOBAL_DAMAGE_MULTIPLIER);
      item.takeDamage_za3lpa$(damageValue);
      tmp$_0.call(destination, new Damage(damageValue, ensureNotNull(item.coords), isCritical));
    }
    return destination;
  };
  XmpBurster.prototype.toString = function () {
    return 'XMP' + toString(this.level.level);
  };
  XmpBurster.prototype.getOwnerId = function () {
    return this.owner.key();
  };
  function XmpBurster$Companion() {
    XmpBurster$Companion_instance = this;
    this.GLOBAL_DAMAGE_MULTIPLIER = 0.03;
    this.CRIT_DAMAGE_MULTIPLIER = 3;
    this.CRIT_RATE = 0.2;
  }
  XmpBurster$Companion.prototype.create_fllszz$ = function (level, agent) {
    return new XmpBurster(level, agent);
  };
  XmpBurster$Companion.prototype.create_ugk1o2$ = function (level, agent) {
    return this.create_fllszz$(XmpLevel$Companion_getInstance().valueOf_za3lpa$(level), agent);
  };
  XmpBurster$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var XmpBurster$Companion_instance = null;
  function XmpBurster$Companion_getInstance() {
    if (XmpBurster$Companion_instance === null) {
      new XmpBurster$Companion();
    }
    return XmpBurster$Companion_instance;
  }
  XmpBurster.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'XmpBurster',
    interfaces: [DeployableItem]
  };
  XmpBurster.prototype.component1 = function () {
    return this.level;
  };
  XmpBurster.prototype.component2 = function () {
    return this.owner;
  };
  XmpBurster.prototype.copy_fllszz$ = function (level, owner) {
    return new XmpBurster(level === void 0 ? this.level : level, owner === void 0 ? this.owner : owner);
  };
  XmpBurster.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.level) | 0;
    result = result * 31 + Kotlin.hashCode(this.owner) | 0;
    return result;
  };
  XmpBurster.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.level, other.level) && Kotlin.equals(this.owner, other.owner)))));
  };
  function DeployableItem() {
  }
  DeployableItem.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'DeployableItem',
    interfaces: [QgressItem]
  };
  function LinkAmp(type, slot, owner) {
    LinkAmp$Companion_getInstance();
    this.type = type;
    this.slot = slot;
    this.owner = owner;
  }
  LinkAmp.prototype.isDeployed = function () {
    return this.slot != null;
  };
  LinkAmp.prototype.deploy_hv9zn6$ = function (portal) {
    println('Deploying ' + this + ' to portal ' + portal);
  };
  LinkAmp.prototype.toString = function () {
    return this.type.abbr;
  };
  LinkAmp.prototype.getOwnerId = function () {
    return this.owner.key();
  };
  function LinkAmp$Companion() {
    LinkAmp$Companion_instance = this;
  }
  LinkAmp$Companion.prototype.calculateImprovedRange_awbt68$ = function (allModsInPortal, range) {
    var tmp$, tmp$_0;
    var destination = ArrayList_init();
    var tmp$_1;
    tmp$_1 = allModsInPortal.iterator();
    while (tmp$_1.hasNext()) {
      var element = tmp$_1.next();
      if (Kotlin.isType(element, LinkAmp))
        destination.add_11rb$(element);
    }
    var linkamps = destination;
    tmp$ = linkamps.size;
    if (tmp$ === 1)
      tmp$_0 = range * 2;
    else if (tmp$ === 2)
      tmp$_0 = range * 2.5;
    else if (tmp$ === 3)
      tmp$_0 = range * 2.75;
    else if (tmp$ === 4)
      tmp$_0 = range * 5;
    else
      tmp$_0 = range;
    return tmp$_0;
  };
  LinkAmp$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var LinkAmp$Companion_instance = null;
  function LinkAmp$Companion_getInstance() {
    if (LinkAmp$Companion_instance === null) {
      new LinkAmp$Companion();
    }
    return LinkAmp$Companion_instance;
  }
  LinkAmp.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LinkAmp',
    interfaces: [DeployableItem]
  };
  LinkAmp.prototype.component1 = function () {
    return this.type;
  };
  LinkAmp.prototype.component2 = function () {
    return this.slot;
  };
  LinkAmp.prototype.component3 = function () {
    return this.owner;
  };
  LinkAmp.prototype.copy_e02dju$ = function (type, slot, owner) {
    return new LinkAmp(type === void 0 ? this.type : type, slot === void 0 ? this.slot : slot, owner === void 0 ? this.owner : owner);
  };
  LinkAmp.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.slot) | 0;
    result = result * 31 + Kotlin.hashCode(this.owner) | 0;
    return result;
  };
  LinkAmp.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.type, other.type) && Kotlin.equals(this.slot, other.slot) && Kotlin.equals(this.owner, other.owner)))));
  };
  function Multihack(type, slot, owner) {
    Multihack$Companion_getInstance();
    this.type = type;
    this.slot = slot;
    this.owner = owner;
  }
  Multihack.prototype.isDeployed = function () {
    return this.slot != null;
  };
  Multihack.prototype.deploy_hv9zn6$ = function (portal) {
    println('Deploying ' + this + ' to portal ' + portal);
  };
  Multihack.prototype.toString = function () {
    return this.type.abbr;
  };
  Multihack.prototype.getOwnerId = function () {
    return this.owner.key();
  };
  function Multihack$Companion() {
    Multihack$Companion_instance = this;
  }
  function Multihack$Companion$calculateImprovedBurnout$lambda(it) {
    return it.type.order;
  }
  var compareBy$lambda_6 = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function Comparator$ObjectLiteral_7(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral_7.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral_7.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  Multihack$Companion.prototype.calculateImprovedBurnout_6l8466$ = function (allModsInPortal) {
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = allModsInPortal.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (Kotlin.isType(element, Multihack))
        destination.add_11rb$(element);
    }
    var destination_0 = ArrayList_init(collectionSizeOrDefault(destination, 10));
    var tmp$_0;
    tmp$_0 = destination.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      var tmp$_1;
      destination_0.add_11rb$(Kotlin.isType(tmp$_1 = item, Multihack) ? tmp$_1 : throwCCE());
    }
    var multihacks = sortedWith(destination_0, new Comparator$ObjectLiteral_7(compareBy$lambda_6(Multihack$Companion$calculateImprovedBurnout$lambda)));
    var first_0 = first(multihacks).type.additionalHacks;
    var second = multihacks.get_za3lpa$(1).type.additionalHacks * 0.5;
    var third = multihacks.get_za3lpa$(2).type.additionalHacks * 0.5;
    var fourth = multihacks.get_za3lpa$(3).type.additionalHacks * 0.5;
    return first_0 + second + third + fourth;
  };
  Multihack$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Multihack$Companion_instance = null;
  function Multihack$Companion_getInstance() {
    if (Multihack$Companion_instance === null) {
      new Multihack$Companion();
    }
    return Multihack$Companion_instance;
  }
  Multihack.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Multihack',
    interfaces: [DeployableItem]
  };
  Multihack.prototype.component1 = function () {
    return this.type;
  };
  Multihack.prototype.component2 = function () {
    return this.slot;
  };
  Multihack.prototype.component3 = function () {
    return this.owner;
  };
  Multihack.prototype.copy_ldg7oq$ = function (type, slot, owner) {
    return new Multihack(type === void 0 ? this.type : type, slot === void 0 ? this.slot : slot, owner === void 0 ? this.owner : owner);
  };
  Multihack.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.slot) | 0;
    result = result * 31 + Kotlin.hashCode(this.owner) | 0;
    return result;
  };
  Multihack.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.type, other.type) && Kotlin.equals(this.slot, other.slot) && Kotlin.equals(this.owner, other.owner)))));
  };
  function Resonator(level, owner, health, portal, octant, coords) {
    Resonator$Companion_getInstance();
    if (health === void 0)
      health = Resonator$Companion_getInstance().MAX_HEALTH;
    if (portal === void 0)
      portal = null;
    if (octant === void 0)
      octant = null;
    if (coords === void 0)
      coords = null;
    this.level = level;
    this.owner = owner;
    this.health = health;
    this.portal = portal;
    this.octant = octant;
    this.coords = coords;
  }
  Resonator.prototype.isAtCriticalLevel = function () {
    return this.health < 20;
  };
  Resonator.prototype.recharge_za3lpa$ = function (xm) {
    this.health = this.health + xm | 0;
  };
  Resonator.prototype.decay = function () {
    var tmp$;
    this.health = this.health - numberToInt(this.health * Resonator$Companion_getInstance().DECAY_RATIO) | 0;
    if (this.health <= 0) {
      (tmp$ = this.portal) != null ? (tmp$.removeReso_iiw8yf$(ensureNotNull(this.octant)), Unit) : null;
    }
  };
  Resonator.prototype.takeDamage_za3lpa$ = function (damage) {
    var tmp$;
    this.health = this.health - damage | 0;
    if (this.health <= 0) {
      (tmp$ = this.portal) != null ? (tmp$.removeReso_iiw8yf$(ensureNotNull(this.octant)), Unit) : null;
    }
  };
  Resonator.prototype.deploy_njiqqf$ = function (portal, octant, coords) {
    this.portal = portal;
    this.octant = octant;
    this.coords = coords;
  };
  Resonator.prototype.toString = function () {
    return 'R' + toString(this.level.level);
  };
  Resonator.prototype.getOwnerId = function () {
    return this.owner.key();
  };
  function Resonator$Companion() {
    Resonator$Companion_instance = this;
    this.MAX_HEALTH = 100;
    this.DECAY_RATIO = 0.15;
  }
  Resonator$Companion.prototype.create_ny5r0p$ = function (level, agent) {
    return new Resonator(level, agent);
  };
  Resonator$Companion.prototype.create_ugk1o2$ = function (level, agent) {
    return this.create_ny5r0p$(ResonatorLevel$Companion_getInstance().valueOf_za3lpa$(level), agent);
  };
  Resonator$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Resonator$Companion_instance = null;
  function Resonator$Companion_getInstance() {
    if (Resonator$Companion_instance === null) {
      new Resonator$Companion();
    }
    return Resonator$Companion_instance;
  }
  Resonator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Resonator',
    interfaces: [DeployableItem]
  };
  Resonator.prototype.component1 = function () {
    return this.level;
  };
  Resonator.prototype.component2 = function () {
    return this.owner;
  };
  Resonator.prototype.component3 = function () {
    return this.health;
  };
  Resonator.prototype.component4 = function () {
    return this.portal;
  };
  Resonator.prototype.component5 = function () {
    return this.octant;
  };
  Resonator.prototype.component6 = function () {
    return this.coords;
  };
  Resonator.prototype.copy_lvehd3$ = function (level, owner, health, portal, octant, coords) {
    return new Resonator(level === void 0 ? this.level : level, owner === void 0 ? this.owner : owner, health === void 0 ? this.health : health, portal === void 0 ? this.portal : portal, octant === void 0 ? this.octant : octant, coords === void 0 ? this.coords : coords);
  };
  Resonator.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.level) | 0;
    result = result * 31 + Kotlin.hashCode(this.owner) | 0;
    result = result * 31 + Kotlin.hashCode(this.health) | 0;
    result = result * 31 + Kotlin.hashCode(this.portal) | 0;
    result = result * 31 + Kotlin.hashCode(this.octant) | 0;
    result = result * 31 + Kotlin.hashCode(this.coords) | 0;
    return result;
  };
  Resonator.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.level, other.level) && Kotlin.equals(this.owner, other.owner) && Kotlin.equals(this.health, other.health) && Kotlin.equals(this.portal, other.portal) && Kotlin.equals(this.octant, other.octant) && Kotlin.equals(this.coords, other.coords)))));
  };
  function Shield(type, owner) {
    this.type = type;
    this.owner = owner;
  }
  Shield.prototype.toString = function () {
    return this.type.abbr;
  };
  Shield.prototype.getOwnerId = function () {
    return this.owner.key();
  };
  Shield.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Shield',
    interfaces: [DeployableItem]
  };
  Shield.prototype.component1 = function () {
    return this.type;
  };
  Shield.prototype.component2 = function () {
    return this.owner;
  };
  Shield.prototype.copy_nl3jau$ = function (type, owner) {
    return new Shield(type === void 0 ? this.type : type, owner === void 0 ? this.owner : owner);
  };
  Shield.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.owner) | 0;
    return result;
  };
  Shield.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.type, other.type) && Kotlin.equals(this.owner, other.owner)))));
  };
  function Virus(type, owner) {
    this.type = type;
    this.owner = owner;
  }
  Virus.prototype.toString = function () {
    return this.type.abbr;
  };
  Virus.prototype.getOwnerId = function () {
    return this.owner.key();
  };
  Virus.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Virus',
    interfaces: [DeployableItem]
  };
  Virus.prototype.component1 = function () {
    return this.type;
  };
  Virus.prototype.component2 = function () {
    return this.owner;
  };
  Virus.prototype.copy_38flno$ = function (type, owner) {
    return new Virus(type === void 0 ? this.type : type, owner === void 0 ? this.owner : owner);
  };
  Virus.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.owner) | 0;
    return result;
  };
  Virus.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.type, other.type) && Kotlin.equals(this.owner, other.owner)))));
  };
  function PortalLevel(name, ordinal, value, display, color) {
    Enum.call(this);
    this.value = value;
    this.display = display;
    this.color = color;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function PortalLevel_initFields() {
    PortalLevel_initFields = function () {
    };
    PortalLevel$ZERO_instance = new PortalLevel('ZERO', 0, 0, ' ', '#000000');
    PortalLevel$ONE_instance = new PortalLevel('ONE', 1, 1, '1', '#FECE5A');
    PortalLevel$TWO_instance = new PortalLevel('TWO', 2, 2, '2', '#FFA630');
    PortalLevel$THREE_instance = new PortalLevel('THREE', 3, 3, '3', '#FF7315');
    PortalLevel$FOUR_instance = new PortalLevel('FOUR', 4, 4, '4', '#E40000');
    PortalLevel$FIVE_instance = new PortalLevel('FIVE', 5, 5, '5', '#FD2992');
    PortalLevel$SIX_instance = new PortalLevel('SIX', 6, 6, '6', '#EB26CD');
    PortalLevel$SEVEN_instance = new PortalLevel('SEVEN', 7, 7, '7', '#C124E0');
    PortalLevel$EIGHT_instance = new PortalLevel('EIGHT', 8, 8, '8', '#9627F4');
    PortalLevel$Companion_getInstance();
  }
  var PortalLevel$ZERO_instance;
  function PortalLevel$ZERO_getInstance() {
    PortalLevel_initFields();
    return PortalLevel$ZERO_instance;
  }
  var PortalLevel$ONE_instance;
  function PortalLevel$ONE_getInstance() {
    PortalLevel_initFields();
    return PortalLevel$ONE_instance;
  }
  var PortalLevel$TWO_instance;
  function PortalLevel$TWO_getInstance() {
    PortalLevel_initFields();
    return PortalLevel$TWO_instance;
  }
  var PortalLevel$THREE_instance;
  function PortalLevel$THREE_getInstance() {
    PortalLevel_initFields();
    return PortalLevel$THREE_instance;
  }
  var PortalLevel$FOUR_instance;
  function PortalLevel$FOUR_getInstance() {
    PortalLevel_initFields();
    return PortalLevel$FOUR_instance;
  }
  var PortalLevel$FIVE_instance;
  function PortalLevel$FIVE_getInstance() {
    PortalLevel_initFields();
    return PortalLevel$FIVE_instance;
  }
  var PortalLevel$SIX_instance;
  function PortalLevel$SIX_getInstance() {
    PortalLevel_initFields();
    return PortalLevel$SIX_instance;
  }
  var PortalLevel$SEVEN_instance;
  function PortalLevel$SEVEN_getInstance() {
    PortalLevel_initFields();
    return PortalLevel$SEVEN_instance;
  }
  var PortalLevel$EIGHT_instance;
  function PortalLevel$EIGHT_getInstance() {
    PortalLevel_initFields();
    return PortalLevel$EIGHT_instance;
  }
  PortalLevel.prototype.toString = function () {
    return this.display;
  };
  function PortalLevel$Companion() {
    PortalLevel$Companion_instance = this;
  }
  PortalLevel$Companion.prototype.findByValue_za3lpa$ = function (value) {
    var $receiver = PortalLevel$values();
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element = $receiver[tmp$];
        if (element.value === value) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    return ensureNotNull(firstOrNull$result);
  };
  PortalLevel$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PortalLevel$Companion_instance = null;
  function PortalLevel$Companion_getInstance() {
    PortalLevel_initFields();
    if (PortalLevel$Companion_instance === null) {
      new PortalLevel$Companion();
    }
    return PortalLevel$Companion_instance;
  }
  PortalLevel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PortalLevel',
    interfaces: [Enum]
  };
  function PortalLevel$values() {
    return [PortalLevel$ZERO_getInstance(), PortalLevel$ONE_getInstance(), PortalLevel$TWO_getInstance(), PortalLevel$THREE_getInstance(), PortalLevel$FOUR_getInstance(), PortalLevel$FIVE_getInstance(), PortalLevel$SIX_getInstance(), PortalLevel$SEVEN_getInstance(), PortalLevel$EIGHT_getInstance()];
  }
  PortalLevel.values = PortalLevel$values;
  function PortalLevel$valueOf(name) {
    switch (name) {
      case 'ZERO':
        return PortalLevel$ZERO_getInstance();
      case 'ONE':
        return PortalLevel$ONE_getInstance();
      case 'TWO':
        return PortalLevel$TWO_getInstance();
      case 'THREE':
        return PortalLevel$THREE_getInstance();
      case 'FOUR':
        return PortalLevel$FOUR_getInstance();
      case 'FIVE':
        return PortalLevel$FIVE_getInstance();
      case 'SIX':
        return PortalLevel$SIX_getInstance();
      case 'SEVEN':
        return PortalLevel$SEVEN_getInstance();
      case 'EIGHT':
        return PortalLevel$EIGHT_getInstance();
      default:throwISE('No enum constant items.level.PortalLevel.' + name);
    }
  }
  PortalLevel.valueOf_61zpoe$ = PortalLevel$valueOf;
  function PowerCubeLevel(name, ordinal, level, color, xmValue) {
    Enum.call(this);
    this.level = level;
    this.color = color;
    this.xmValue = xmValue;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function PowerCubeLevel_initFields() {
    PowerCubeLevel_initFields = function () {
    };
    PowerCubeLevel$ONE_instance = new PowerCubeLevel('ONE', 0, 1, '#FECE5A', 1000);
    PowerCubeLevel$TWO_instance = new PowerCubeLevel('TWO', 1, 2, '#FFA630', 2000);
    PowerCubeLevel$THREE_instance = new PowerCubeLevel('THREE', 2, 3, '#FF7315', 3000);
    PowerCubeLevel$FOUR_instance = new PowerCubeLevel('FOUR', 3, 4, '#E40000', 4000);
    PowerCubeLevel$FIVE_instance = new PowerCubeLevel('FIVE', 4, 5, '#FD2992', 5000);
    PowerCubeLevel$SIX_instance = new PowerCubeLevel('SIX', 5, 6, '#EB26CD', 6000);
    PowerCubeLevel$SEVEN_instance = new PowerCubeLevel('SEVEN', 6, 7, '#C124E0', 7000);
    PowerCubeLevel$EIGHT_instance = new PowerCubeLevel('EIGHT', 7, 8, '#9627F4', 8000);
    PowerCubeLevel$Companion_getInstance();
  }
  var PowerCubeLevel$ONE_instance;
  function PowerCubeLevel$ONE_getInstance() {
    PowerCubeLevel_initFields();
    return PowerCubeLevel$ONE_instance;
  }
  var PowerCubeLevel$TWO_instance;
  function PowerCubeLevel$TWO_getInstance() {
    PowerCubeLevel_initFields();
    return PowerCubeLevel$TWO_instance;
  }
  var PowerCubeLevel$THREE_instance;
  function PowerCubeLevel$THREE_getInstance() {
    PowerCubeLevel_initFields();
    return PowerCubeLevel$THREE_instance;
  }
  var PowerCubeLevel$FOUR_instance;
  function PowerCubeLevel$FOUR_getInstance() {
    PowerCubeLevel_initFields();
    return PowerCubeLevel$FOUR_instance;
  }
  var PowerCubeLevel$FIVE_instance;
  function PowerCubeLevel$FIVE_getInstance() {
    PowerCubeLevel_initFields();
    return PowerCubeLevel$FIVE_instance;
  }
  var PowerCubeLevel$SIX_instance;
  function PowerCubeLevel$SIX_getInstance() {
    PowerCubeLevel_initFields();
    return PowerCubeLevel$SIX_instance;
  }
  var PowerCubeLevel$SEVEN_instance;
  function PowerCubeLevel$SEVEN_getInstance() {
    PowerCubeLevel_initFields();
    return PowerCubeLevel$SEVEN_instance;
  }
  var PowerCubeLevel$EIGHT_instance;
  function PowerCubeLevel$EIGHT_getInstance() {
    PowerCubeLevel_initFields();
    return PowerCubeLevel$EIGHT_instance;
  }
  PowerCubeLevel.prototype.calculateRecycleXm = function () {
    return this.xmValue;
  };
  function PowerCubeLevel$Companion() {
    PowerCubeLevel$Companion_instance = this;
  }
  PowerCubeLevel$Companion.prototype.find_p76lt3$ = function (level, quality) {
    return this.valueOf_za3lpa$(this.clipLevel_0(level + quality.addLevels | 0));
  };
  PowerCubeLevel$Companion.prototype.valueOf_za3lpa$ = function (level) {
    var $receiver = PowerCubeLevel$values();
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element = $receiver[tmp$];
        if (element.level === this.clipLevel_0(level)) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    return ensureNotNull(firstOrNull$result);
  };
  PowerCubeLevel$Companion.prototype.clipLevel_0 = function (level) {
    var b = Math_0.min(level, 8);
    return Math_0.max(1, b);
  };
  PowerCubeLevel$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PowerCubeLevel$Companion_instance = null;
  function PowerCubeLevel$Companion_getInstance() {
    PowerCubeLevel_initFields();
    if (PowerCubeLevel$Companion_instance === null) {
      new PowerCubeLevel$Companion();
    }
    return PowerCubeLevel$Companion_instance;
  }
  PowerCubeLevel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PowerCubeLevel',
    interfaces: [Enum]
  };
  function PowerCubeLevel$values() {
    return [PowerCubeLevel$ONE_getInstance(), PowerCubeLevel$TWO_getInstance(), PowerCubeLevel$THREE_getInstance(), PowerCubeLevel$FOUR_getInstance(), PowerCubeLevel$FIVE_getInstance(), PowerCubeLevel$SIX_getInstance(), PowerCubeLevel$SEVEN_getInstance(), PowerCubeLevel$EIGHT_getInstance()];
  }
  PowerCubeLevel.values = PowerCubeLevel$values;
  function PowerCubeLevel$valueOf(name) {
    switch (name) {
      case 'ONE':
        return PowerCubeLevel$ONE_getInstance();
      case 'TWO':
        return PowerCubeLevel$TWO_getInstance();
      case 'THREE':
        return PowerCubeLevel$THREE_getInstance();
      case 'FOUR':
        return PowerCubeLevel$FOUR_getInstance();
      case 'FIVE':
        return PowerCubeLevel$FIVE_getInstance();
      case 'SIX':
        return PowerCubeLevel$SIX_getInstance();
      case 'SEVEN':
        return PowerCubeLevel$SEVEN_getInstance();
      case 'EIGHT':
        return PowerCubeLevel$EIGHT_getInstance();
      default:throwISE('No enum constant items.level.PowerCubeLevel.' + name);
    }
  }
  PowerCubeLevel.valueOf_61zpoe$ = PowerCubeLevel$valueOf;
  function ResonatorLevel(name, ordinal, level, deployablePerPlayer, color, xmToPortal) {
    Enum.call(this);
    this.level = level;
    this.deployablePerPlayer = deployablePerPlayer;
    this.color = color;
    this.xmToPortal = xmToPortal;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ResonatorLevel_initFields() {
    ResonatorLevel_initFields = function () {
    };
    ResonatorLevel$ONE_instance = new ResonatorLevel('ONE', 0, 1, 8, '#FECE5A', 1000);
    ResonatorLevel$TWO_instance = new ResonatorLevel('TWO', 1, 2, 4, '#FFA630', 1500);
    ResonatorLevel$THREE_instance = new ResonatorLevel('THREE', 2, 3, 4, '#FF7315', 2000);
    ResonatorLevel$FOUR_instance = new ResonatorLevel('FOUR', 3, 4, 4, '#E40000', 2500);
    ResonatorLevel$FIVE_instance = new ResonatorLevel('FIVE', 4, 5, 2, '#FD2992', 3000);
    ResonatorLevel$SIX_instance = new ResonatorLevel('SIX', 5, 6, 2, '#EB26CD', 4000);
    ResonatorLevel$SEVEN_instance = new ResonatorLevel('SEVEN', 6, 7, 1, '#C124E0', 5000);
    ResonatorLevel$EIGHT_instance = new ResonatorLevel('EIGHT', 7, 8, 1, '#9627F4', 6000);
    ResonatorLevel$Companion_getInstance();
  }
  var ResonatorLevel$ONE_instance;
  function ResonatorLevel$ONE_getInstance() {
    ResonatorLevel_initFields();
    return ResonatorLevel$ONE_instance;
  }
  var ResonatorLevel$TWO_instance;
  function ResonatorLevel$TWO_getInstance() {
    ResonatorLevel_initFields();
    return ResonatorLevel$TWO_instance;
  }
  var ResonatorLevel$THREE_instance;
  function ResonatorLevel$THREE_getInstance() {
    ResonatorLevel_initFields();
    return ResonatorLevel$THREE_instance;
  }
  var ResonatorLevel$FOUR_instance;
  function ResonatorLevel$FOUR_getInstance() {
    ResonatorLevel_initFields();
    return ResonatorLevel$FOUR_instance;
  }
  var ResonatorLevel$FIVE_instance;
  function ResonatorLevel$FIVE_getInstance() {
    ResonatorLevel_initFields();
    return ResonatorLevel$FIVE_instance;
  }
  var ResonatorLevel$SIX_instance;
  function ResonatorLevel$SIX_getInstance() {
    ResonatorLevel_initFields();
    return ResonatorLevel$SIX_instance;
  }
  var ResonatorLevel$SEVEN_instance;
  function ResonatorLevel$SEVEN_getInstance() {
    ResonatorLevel_initFields();
    return ResonatorLevel$SEVEN_instance;
  }
  var ResonatorLevel$EIGHT_instance;
  function ResonatorLevel$EIGHT_getInstance() {
    ResonatorLevel_initFields();
    return ResonatorLevel$EIGHT_instance;
  }
  ResonatorLevel.prototype.calculateRecycleXm = function () {
    return this.level * 20 | 0;
  };
  function ResonatorLevel$Companion() {
    ResonatorLevel$Companion_instance = this;
  }
  ResonatorLevel$Companion.prototype.valueOf_za3lpa$ = function (level) {
    var $receiver = ResonatorLevel$values();
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element = $receiver[tmp$];
        if (element.level === this.clipLevel_0(level)) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    return ensureNotNull(firstOrNull$result);
  };
  ResonatorLevel$Companion.prototype.find_p76lt3$ = function (level, quality) {
    return this.valueOf_za3lpa$(this.clipLevel_0(level + quality.addLevels | 0));
  };
  ResonatorLevel$Companion.prototype.clipLevel_0 = function (level) {
    var b = Math_0.min(level, 8);
    return Math_0.max(1, b);
  };
  ResonatorLevel$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ResonatorLevel$Companion_instance = null;
  function ResonatorLevel$Companion_getInstance() {
    ResonatorLevel_initFields();
    if (ResonatorLevel$Companion_instance === null) {
      new ResonatorLevel$Companion();
    }
    return ResonatorLevel$Companion_instance;
  }
  ResonatorLevel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ResonatorLevel',
    interfaces: [Enum]
  };
  function ResonatorLevel$values() {
    return [ResonatorLevel$ONE_getInstance(), ResonatorLevel$TWO_getInstance(), ResonatorLevel$THREE_getInstance(), ResonatorLevel$FOUR_getInstance(), ResonatorLevel$FIVE_getInstance(), ResonatorLevel$SIX_getInstance(), ResonatorLevel$SEVEN_getInstance(), ResonatorLevel$EIGHT_getInstance()];
  }
  ResonatorLevel.values = ResonatorLevel$values;
  function ResonatorLevel$valueOf(name) {
    switch (name) {
      case 'ONE':
        return ResonatorLevel$ONE_getInstance();
      case 'TWO':
        return ResonatorLevel$TWO_getInstance();
      case 'THREE':
        return ResonatorLevel$THREE_getInstance();
      case 'FOUR':
        return ResonatorLevel$FOUR_getInstance();
      case 'FIVE':
        return ResonatorLevel$FIVE_getInstance();
      case 'SIX':
        return ResonatorLevel$SIX_getInstance();
      case 'SEVEN':
        return ResonatorLevel$SEVEN_getInstance();
      case 'EIGHT':
        return ResonatorLevel$EIGHT_getInstance();
      default:throwISE('No enum constant items.level.ResonatorLevel.' + name);
    }
  }
  ResonatorLevel.valueOf_61zpoe$ = ResonatorLevel$valueOf;
  function UltraStrikeLevel(name, ordinal, level, color, damage, rangeM, xmCost) {
    Enum.call(this);
    this.level = level;
    this.color = color;
    this.damage = damage;
    this.rangeM = rangeM;
    this.xmCost = xmCost;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function UltraStrikeLevel_initFields() {
    UltraStrikeLevel_initFields = function () {
    };
    UltraStrikeLevel$ONE_instance = new UltraStrikeLevel('ONE', 0, 1, '#FECE5A', 150, 10, 50);
    UltraStrikeLevel$TWO_instance = new UltraStrikeLevel('TWO', 1, 2, '#FFA630', 300, 13, 100);
    UltraStrikeLevel$THREE_instance = new UltraStrikeLevel('THREE', 2, 3, '#FF7315', 500, 16, 150);
    UltraStrikeLevel$FOUR_instance = new UltraStrikeLevel('FOUR', 3, 4, '#E40000', 900, 18, 200);
    UltraStrikeLevel$FIVE_instance = new UltraStrikeLevel('FIVE', 4, 5, '#FD2992', 1200, 21, 250);
    UltraStrikeLevel$SIX_instance = new UltraStrikeLevel('SIX', 5, 6, '#EB26CD', 1500, 24, 360);
    UltraStrikeLevel$SEVEN_instance = new UltraStrikeLevel('SEVEN', 6, 7, '#C124E0', 1800, 27, 490);
    UltraStrikeLevel$EIGHT_instance = new UltraStrikeLevel('EIGHT', 7, 8, '#9627F4', 2700, 30, 640);
    UltraStrikeLevel$Companion_getInstance();
  }
  var UltraStrikeLevel$ONE_instance;
  function UltraStrikeLevel$ONE_getInstance() {
    UltraStrikeLevel_initFields();
    return UltraStrikeLevel$ONE_instance;
  }
  var UltraStrikeLevel$TWO_instance;
  function UltraStrikeLevel$TWO_getInstance() {
    UltraStrikeLevel_initFields();
    return UltraStrikeLevel$TWO_instance;
  }
  var UltraStrikeLevel$THREE_instance;
  function UltraStrikeLevel$THREE_getInstance() {
    UltraStrikeLevel_initFields();
    return UltraStrikeLevel$THREE_instance;
  }
  var UltraStrikeLevel$FOUR_instance;
  function UltraStrikeLevel$FOUR_getInstance() {
    UltraStrikeLevel_initFields();
    return UltraStrikeLevel$FOUR_instance;
  }
  var UltraStrikeLevel$FIVE_instance;
  function UltraStrikeLevel$FIVE_getInstance() {
    UltraStrikeLevel_initFields();
    return UltraStrikeLevel$FIVE_instance;
  }
  var UltraStrikeLevel$SIX_instance;
  function UltraStrikeLevel$SIX_getInstance() {
    UltraStrikeLevel_initFields();
    return UltraStrikeLevel$SIX_instance;
  }
  var UltraStrikeLevel$SEVEN_instance;
  function UltraStrikeLevel$SEVEN_getInstance() {
    UltraStrikeLevel_initFields();
    return UltraStrikeLevel$SEVEN_instance;
  }
  var UltraStrikeLevel$EIGHT_instance;
  function UltraStrikeLevel$EIGHT_getInstance() {
    UltraStrikeLevel_initFields();
    return UltraStrikeLevel$EIGHT_instance;
  }
  UltraStrikeLevel.prototype.calculateRecycleXm = function () {
    return this.level * 20 | 0;
  };
  UltraStrikeLevel.prototype.critRate = function () {
    return 0.05;
  };
  UltraStrikeLevel.prototype.critDamage = function () {
    return this.damage * 3 | 0;
  };
  function UltraStrikeLevel$Companion() {
    UltraStrikeLevel$Companion_instance = this;
  }
  UltraStrikeLevel$Companion.prototype.find_p76lt3$ = function (level, quality) {
    return this.valueOf_za3lpa$(this.clipLevel_0(level + quality.addLevels | 0));
  };
  UltraStrikeLevel$Companion.prototype.valueOf_za3lpa$ = function (level) {
    var $receiver = UltraStrikeLevel$values();
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element = $receiver[tmp$];
        if (element.level === this.clipLevel_0(level)) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    return ensureNotNull(firstOrNull$result);
  };
  UltraStrikeLevel$Companion.prototype.clipLevel_0 = function (level) {
    var b = Math_0.min(level, 8);
    return Math_0.max(1, b);
  };
  UltraStrikeLevel$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var UltraStrikeLevel$Companion_instance = null;
  function UltraStrikeLevel$Companion_getInstance() {
    UltraStrikeLevel_initFields();
    if (UltraStrikeLevel$Companion_instance === null) {
      new UltraStrikeLevel$Companion();
    }
    return UltraStrikeLevel$Companion_instance;
  }
  UltraStrikeLevel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UltraStrikeLevel',
    interfaces: [Enum]
  };
  function UltraStrikeLevel$values() {
    return [UltraStrikeLevel$ONE_getInstance(), UltraStrikeLevel$TWO_getInstance(), UltraStrikeLevel$THREE_getInstance(), UltraStrikeLevel$FOUR_getInstance(), UltraStrikeLevel$FIVE_getInstance(), UltraStrikeLevel$SIX_getInstance(), UltraStrikeLevel$SEVEN_getInstance(), UltraStrikeLevel$EIGHT_getInstance()];
  }
  UltraStrikeLevel.values = UltraStrikeLevel$values;
  function UltraStrikeLevel$valueOf(name) {
    switch (name) {
      case 'ONE':
        return UltraStrikeLevel$ONE_getInstance();
      case 'TWO':
        return UltraStrikeLevel$TWO_getInstance();
      case 'THREE':
        return UltraStrikeLevel$THREE_getInstance();
      case 'FOUR':
        return UltraStrikeLevel$FOUR_getInstance();
      case 'FIVE':
        return UltraStrikeLevel$FIVE_getInstance();
      case 'SIX':
        return UltraStrikeLevel$SIX_getInstance();
      case 'SEVEN':
        return UltraStrikeLevel$SEVEN_getInstance();
      case 'EIGHT':
        return UltraStrikeLevel$EIGHT_getInstance();
      default:throwISE('No enum constant items.level.UltraStrikeLevel.' + name);
    }
  }
  UltraStrikeLevel.valueOf_61zpoe$ = UltraStrikeLevel$valueOf;
  function XmpLevel(name, ordinal, level, color, damage, rangeM, xmCost) {
    Enum.call(this);
    this.level = level;
    this.color = color;
    this.damage = damage;
    this.rangeM = rangeM;
    this.xmCost = xmCost;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function XmpLevel_initFields() {
    XmpLevel_initFields = function () {
    };
    XmpLevel$ONE_instance = new XmpLevel('ONE', 0, 1, '#FECE5A', 150, 42, 50);
    XmpLevel$TWO_instance = new XmpLevel('TWO', 1, 2, '#FFA630', 300, 48, 100);
    XmpLevel$THREE_instance = new XmpLevel('THREE', 2, 3, '#FF7315', 500, 58, 150);
    XmpLevel$FOUR_instance = new XmpLevel('FOUR', 3, 4, '#E40000', 900, 72, 200);
    XmpLevel$FIVE_instance = new XmpLevel('FIVE', 4, 5, '#FD2992', 1200, 90, 250);
    XmpLevel$SIX_instance = new XmpLevel('SIX', 5, 6, '#EB26CD', 1500, 112, 360);
    XmpLevel$SEVEN_instance = new XmpLevel('SEVEN', 6, 7, '#C124E0', 1800, 138, 490);
    XmpLevel$EIGHT_instance = new XmpLevel('EIGHT', 7, 8, '#9627F4', 2700, 168, 640);
    XmpLevel$Companion_getInstance();
  }
  var XmpLevel$ONE_instance;
  function XmpLevel$ONE_getInstance() {
    XmpLevel_initFields();
    return XmpLevel$ONE_instance;
  }
  var XmpLevel$TWO_instance;
  function XmpLevel$TWO_getInstance() {
    XmpLevel_initFields();
    return XmpLevel$TWO_instance;
  }
  var XmpLevel$THREE_instance;
  function XmpLevel$THREE_getInstance() {
    XmpLevel_initFields();
    return XmpLevel$THREE_instance;
  }
  var XmpLevel$FOUR_instance;
  function XmpLevel$FOUR_getInstance() {
    XmpLevel_initFields();
    return XmpLevel$FOUR_instance;
  }
  var XmpLevel$FIVE_instance;
  function XmpLevel$FIVE_getInstance() {
    XmpLevel_initFields();
    return XmpLevel$FIVE_instance;
  }
  var XmpLevel$SIX_instance;
  function XmpLevel$SIX_getInstance() {
    XmpLevel_initFields();
    return XmpLevel$SIX_instance;
  }
  var XmpLevel$SEVEN_instance;
  function XmpLevel$SEVEN_getInstance() {
    XmpLevel_initFields();
    return XmpLevel$SEVEN_instance;
  }
  var XmpLevel$EIGHT_instance;
  function XmpLevel$EIGHT_getInstance() {
    XmpLevel_initFields();
    return XmpLevel$EIGHT_instance;
  }
  XmpLevel.prototype.calculateRecycleXm = function () {
    return this.level * 20 | 0;
  };
  function XmpLevel$Companion() {
    XmpLevel$Companion_instance = this;
  }
  XmpLevel$Companion.prototype.find_p76lt3$ = function (level, quality) {
    return this.valueOf_za3lpa$(XmpLevel$Companion_getInstance().clipLevel_0(level + quality.addLevels | 0));
  };
  XmpLevel$Companion.prototype.valueOf_za3lpa$ = function (level) {
    var $receiver = XmpLevel$values();
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element = $receiver[tmp$];
        if (element.level === this.clipLevel_0(level)) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    return ensureNotNull(firstOrNull$result);
  };
  XmpLevel$Companion.prototype.clipLevel_0 = function (level) {
    var b = Math_0.min(level, 8);
    return Math_0.max(1, b);
  };
  XmpLevel$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var XmpLevel$Companion_instance = null;
  function XmpLevel$Companion_getInstance() {
    XmpLevel_initFields();
    if (XmpLevel$Companion_instance === null) {
      new XmpLevel$Companion();
    }
    return XmpLevel$Companion_instance;
  }
  XmpLevel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'XmpLevel',
    interfaces: [Enum]
  };
  function XmpLevel$values() {
    return [XmpLevel$ONE_getInstance(), XmpLevel$TWO_getInstance(), XmpLevel$THREE_getInstance(), XmpLevel$FOUR_getInstance(), XmpLevel$FIVE_getInstance(), XmpLevel$SIX_getInstance(), XmpLevel$SEVEN_getInstance(), XmpLevel$EIGHT_getInstance()];
  }
  XmpLevel.values = XmpLevel$values;
  function XmpLevel$valueOf(name) {
    switch (name) {
      case 'ONE':
        return XmpLevel$ONE_getInstance();
      case 'TWO':
        return XmpLevel$TWO_getInstance();
      case 'THREE':
        return XmpLevel$THREE_getInstance();
      case 'FOUR':
        return XmpLevel$FOUR_getInstance();
      case 'FIVE':
        return XmpLevel$FIVE_getInstance();
      case 'SIX':
        return XmpLevel$SIX_getInstance();
      case 'SEVEN':
        return XmpLevel$SEVEN_getInstance();
      case 'EIGHT':
        return XmpLevel$EIGHT_getInstance();
      default:throwISE('No enum constant items.level.XmpLevel.' + name);
    }
  }
  XmpLevel.valueOf_61zpoe$ = XmpLevel$valueOf;
  function LinkAmpType(name, ordinal, abbr, color) {
    Enum.call(this);
    this.abbr = abbr;
    this.color = color;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function LinkAmpType_initFields() {
    LinkAmpType_initFields = function () {
    };
    LinkAmpType$RARE_instance = new LinkAmpType('RARE', 0, 'LA', '8cffbf');
    LinkAmpType$VERY_RARE_instance = new LinkAmpType('VERY_RARE', 1, 'VRLA', 'b08cff');
  }
  var LinkAmpType$RARE_instance;
  function LinkAmpType$RARE_getInstance() {
    LinkAmpType_initFields();
    return LinkAmpType$RARE_instance;
  }
  var LinkAmpType$VERY_RARE_instance;
  function LinkAmpType$VERY_RARE_getInstance() {
    LinkAmpType_initFields();
    return LinkAmpType$VERY_RARE_instance;
  }
  LinkAmpType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LinkAmpType',
    interfaces: [Enum]
  };
  function LinkAmpType$values() {
    return [LinkAmpType$RARE_getInstance(), LinkAmpType$VERY_RARE_getInstance()];
  }
  LinkAmpType.values = LinkAmpType$values;
  function LinkAmpType$valueOf(name) {
    switch (name) {
      case 'RARE':
        return LinkAmpType$RARE_getInstance();
      case 'VERY_RARE':
        return LinkAmpType$VERY_RARE_getInstance();
      default:throwISE('No enum constant items.types.LinkAmpType.' + name);
    }
  }
  LinkAmpType.valueOf_61zpoe$ = LinkAmpType$valueOf;
  function ModType(name, ordinal, label) {
    Enum.call(this);
    this.label = label;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ModType_initFields() {
    ModType_initFields = function () {
    };
    ModType$RES_SHIELD_instance = new ModType('RES_SHIELD', 0, 'Shield');
    ModType$MULTIHACK_instance = new ModType('MULTIHACK', 1, 'Multi-hack');
    ModType$FORCE_AMP_instance = new ModType('FORCE_AMP', 2, 'Force Amp');
    ModType$HEATSINK_instance = new ModType('HEATSINK', 3, 'Heat Sink');
    ModType$TURRET_instance = new ModType('TURRET', 4, 'Turret');
    ModType$LINK_AMPLIFIER_instance = new ModType('LINK_AMPLIFIER', 5, 'Link Amp');
  }
  var ModType$RES_SHIELD_instance;
  function ModType$RES_SHIELD_getInstance() {
    ModType_initFields();
    return ModType$RES_SHIELD_instance;
  }
  var ModType$MULTIHACK_instance;
  function ModType$MULTIHACK_getInstance() {
    ModType_initFields();
    return ModType$MULTIHACK_instance;
  }
  var ModType$FORCE_AMP_instance;
  function ModType$FORCE_AMP_getInstance() {
    ModType_initFields();
    return ModType$FORCE_AMP_instance;
  }
  var ModType$HEATSINK_instance;
  function ModType$HEATSINK_getInstance() {
    ModType_initFields();
    return ModType$HEATSINK_instance;
  }
  var ModType$TURRET_instance;
  function ModType$TURRET_getInstance() {
    ModType_initFields();
    return ModType$TURRET_instance;
  }
  var ModType$LINK_AMPLIFIER_instance;
  function ModType$LINK_AMPLIFIER_getInstance() {
    ModType_initFields();
    return ModType$LINK_AMPLIFIER_instance;
  }
  ModType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ModType',
    interfaces: [Enum]
  };
  function ModType$values() {
    return [ModType$RES_SHIELD_getInstance(), ModType$MULTIHACK_getInstance(), ModType$FORCE_AMP_getInstance(), ModType$HEATSINK_getInstance(), ModType$TURRET_getInstance(), ModType$LINK_AMPLIFIER_getInstance()];
  }
  ModType.values = ModType$values;
  function ModType$valueOf(name) {
    switch (name) {
      case 'RES_SHIELD':
        return ModType$RES_SHIELD_getInstance();
      case 'MULTIHACK':
        return ModType$MULTIHACK_getInstance();
      case 'FORCE_AMP':
        return ModType$FORCE_AMP_getInstance();
      case 'HEATSINK':
        return ModType$HEATSINK_getInstance();
      case 'TURRET':
        return ModType$TURRET_getInstance();
      case 'LINK_AMPLIFIER':
        return ModType$LINK_AMPLIFIER_getInstance();
      default:throwISE('No enum constant items.types.ModType.' + name);
    }
  }
  ModType.valueOf_61zpoe$ = ModType$valueOf;
  function MultihackType(name, ordinal, abbr, color, order, additionalHacks, xmCost, recyclingXm) {
    Enum.call(this);
    this.abbr = abbr;
    this.color = color;
    this.order = order;
    this.additionalHacks = additionalHacks;
    this.xmCost = xmCost;
    this.recyclingXm = recyclingXm;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MultihackType_initFields() {
    MultihackType_initFields = function () {
    };
    MultihackType$COMMON_instance = new MultihackType('COMMON', 0, 'MH', '8cffbf', 2, 4, 400, 40);
    MultihackType$RARE_instance = new MultihackType('RARE', 1, 'RMH', '73a8ff', 1, 8, 800, 80);
    MultihackType$VERY_RARE_instance = new MultihackType('VERY_RARE', 2, 'VRMH', 'b08cff', 0, 12, 1000, 100);
  }
  var MultihackType$COMMON_instance;
  function MultihackType$COMMON_getInstance() {
    MultihackType_initFields();
    return MultihackType$COMMON_instance;
  }
  var MultihackType$RARE_instance;
  function MultihackType$RARE_getInstance() {
    MultihackType_initFields();
    return MultihackType$RARE_instance;
  }
  var MultihackType$VERY_RARE_instance;
  function MultihackType$VERY_RARE_getInstance() {
    MultihackType_initFields();
    return MultihackType$VERY_RARE_instance;
  }
  MultihackType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MultihackType',
    interfaces: [Enum]
  };
  function MultihackType$values() {
    return [MultihackType$COMMON_getInstance(), MultihackType$RARE_getInstance(), MultihackType$VERY_RARE_getInstance()];
  }
  MultihackType.values = MultihackType$values;
  function MultihackType$valueOf(name) {
    switch (name) {
      case 'COMMON':
        return MultihackType$COMMON_getInstance();
      case 'RARE':
        return MultihackType$RARE_getInstance();
      case 'VERY_RARE':
        return MultihackType$VERY_RARE_getInstance();
      default:throwISE('No enum constant items.types.MultihackType.' + name);
    }
  }
  MultihackType.valueOf_61zpoe$ = MultihackType$valueOf;
  function ShieldType(name, ordinal, abbr, color, mitigation, stickiness, deployCostXm, roll) {
    Enum.call(this);
    this.abbr = abbr;
    this.color = color;
    this.mitigation = mitigation;
    this.stickiness = stickiness;
    this.deployCostXm = deployCostXm;
    this.roll = roll;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ShieldType_initFields() {
    ShieldType_initFields = function () {
    };
    ShieldType$COMMON_instance = new ShieldType('COMMON', 0, 'CS', '8cffbf', 30, 0, 250, 50);
    ShieldType$RARE_instance = new ShieldType('RARE', 1, 'RS', '73a8ff', 40, 15, 500, 500);
    ShieldType$VERY_RARE_instance = new ShieldType('VERY_RARE', 2, 'VRS', 'b08cff', 60, 45, 1000, 1500);
    ShieldType$AXA_instance = new ShieldType('AXA', 3, 'AXA', 'b08cff', 70, 80, 1000, 1500);
  }
  var ShieldType$COMMON_instance;
  function ShieldType$COMMON_getInstance() {
    ShieldType_initFields();
    return ShieldType$COMMON_instance;
  }
  var ShieldType$RARE_instance;
  function ShieldType$RARE_getInstance() {
    ShieldType_initFields();
    return ShieldType$RARE_instance;
  }
  var ShieldType$VERY_RARE_instance;
  function ShieldType$VERY_RARE_getInstance() {
    ShieldType_initFields();
    return ShieldType$VERY_RARE_instance;
  }
  var ShieldType$AXA_instance;
  function ShieldType$AXA_getInstance() {
    ShieldType_initFields();
    return ShieldType$AXA_instance;
  }
  ShieldType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ShieldType',
    interfaces: [Enum]
  };
  function ShieldType$values() {
    return [ShieldType$COMMON_getInstance(), ShieldType$RARE_getInstance(), ShieldType$VERY_RARE_getInstance(), ShieldType$AXA_getInstance()];
  }
  ShieldType.values = ShieldType$values;
  function ShieldType$valueOf(name) {
    switch (name) {
      case 'COMMON':
        return ShieldType$COMMON_getInstance();
      case 'RARE':
        return ShieldType$RARE_getInstance();
      case 'VERY_RARE':
        return ShieldType$VERY_RARE_getInstance();
      case 'AXA':
        return ShieldType$AXA_getInstance();
      default:throwISE('No enum constant items.types.ShieldType.' + name);
    }
  }
  ShieldType.valueOf_61zpoe$ = ShieldType$valueOf;
  function VirusType(name, ordinal, abbr, color, roll) {
    Enum.call(this);
    this.abbr = abbr;
    this.color = color;
    this.roll = roll;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function VirusType_initFields() {
    VirusType_initFields = function () {
    };
    VirusType$JARVIS_VIRUS_instance = new VirusType('JARVIS_VIRUS', 0, 'JARVIS', '#03DC03', 2500);
    VirusType$ADA_REFACTOR_instance = new VirusType('ADA_REFACTOR', 1, 'ADA', '#0088FF', 2500);
  }
  var VirusType$JARVIS_VIRUS_instance;
  function VirusType$JARVIS_VIRUS_getInstance() {
    VirusType_initFields();
    return VirusType$JARVIS_VIRUS_instance;
  }
  var VirusType$ADA_REFACTOR_instance;
  function VirusType$ADA_REFACTOR_getInstance() {
    VirusType_initFields();
    return VirusType$ADA_REFACTOR_instance;
  }
  VirusType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VirusType',
    interfaces: [Enum]
  };
  function VirusType$values() {
    return [VirusType$JARVIS_VIRUS_getInstance(), VirusType$ADA_REFACTOR_getInstance()];
  }
  VirusType.values = VirusType$values;
  function VirusType$valueOf(name) {
    switch (name) {
      case 'JARVIS_VIRUS':
        return VirusType$JARVIS_VIRUS_getInstance();
      case 'ADA_REFACTOR':
        return VirusType$ADA_REFACTOR_getInstance();
      default:throwISE('No enum constant items.types.VirusType.' + name);
    }
  }
  VirusType.valueOf_61zpoe$ = VirusType$valueOf;
  function Cooldown(name, ordinal, seconds) {
    Enum.call(this);
    this.seconds = seconds;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Cooldown_initFields() {
    Cooldown_initFields = function () {
    };
    Cooldown$BURNOUT_instance = new Cooldown('BURNOUT', 0, 14400);
    Cooldown$FIVE_instance = new Cooldown('FIVE', 1, 300);
    Cooldown$THREE_instance = new Cooldown('THREE', 2, 240);
    Cooldown$TWO_instance = new Cooldown('TWO', 3, 120);
    Cooldown$ONE_instance = new Cooldown('ONE', 4, 60);
    Cooldown$HALF_instance = new Cooldown('HALF', 5, 30);
    Cooldown$MIN_instance = new Cooldown('MIN', 6, 10);
    Cooldown$NONE_instance = new Cooldown('NONE', 7, 0);
    Cooldown$Companion_getInstance();
  }
  var Cooldown$BURNOUT_instance;
  function Cooldown$BURNOUT_getInstance() {
    Cooldown_initFields();
    return Cooldown$BURNOUT_instance;
  }
  var Cooldown$FIVE_instance;
  function Cooldown$FIVE_getInstance() {
    Cooldown_initFields();
    return Cooldown$FIVE_instance;
  }
  var Cooldown$THREE_instance;
  function Cooldown$THREE_getInstance() {
    Cooldown_initFields();
    return Cooldown$THREE_instance;
  }
  var Cooldown$TWO_instance;
  function Cooldown$TWO_getInstance() {
    Cooldown_initFields();
    return Cooldown$TWO_instance;
  }
  var Cooldown$ONE_instance;
  function Cooldown$ONE_getInstance() {
    Cooldown_initFields();
    return Cooldown$ONE_instance;
  }
  var Cooldown$HALF_instance;
  function Cooldown$HALF_getInstance() {
    Cooldown_initFields();
    return Cooldown$HALF_instance;
  }
  var Cooldown$MIN_instance;
  function Cooldown$MIN_getInstance() {
    Cooldown_initFields();
    return Cooldown$MIN_instance;
  }
  var Cooldown$NONE_instance;
  function Cooldown$NONE_getInstance() {
    Cooldown_initFields();
    return Cooldown$NONE_instance;
  }
  Cooldown.prototype.isHackable = function () {
    return this === Cooldown$NONE_getInstance();
  };
  function Cooldown$Companion() {
    Cooldown$Companion_instance = this;
  }
  var get_indices = Kotlin.kotlin.collections.get_indices_m7z4lg$;
  Cooldown$Companion.prototype.valueOf_za3lpa$ = function (seconds) {
    var tmp$;
    var $receiver = Cooldown$values();
    var lastOrNull$result;
    lastOrNull$break: do {
      var tmp$_0;
      tmp$_0 = reversed(get_indices($receiver)).iterator();
      while (tmp$_0.hasNext()) {
        var index = tmp$_0.next();
        var element = $receiver[index];
        if (element.seconds >= seconds) {
          lastOrNull$result = element;
          break lastOrNull$break;
        }
      }
      lastOrNull$result = null;
    }
     while (false);
    return (tmp$ = lastOrNull$result) != null ? tmp$ : Cooldown$NONE_getInstance();
  };
  Cooldown$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Cooldown$Companion_instance = null;
  function Cooldown$Companion_getInstance() {
    Cooldown_initFields();
    if (Cooldown$Companion_instance === null) {
      new Cooldown$Companion();
    }
    return Cooldown$Companion_instance;
  }
  Cooldown.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Cooldown',
    interfaces: [Enum]
  };
  function Cooldown$values() {
    return [Cooldown$BURNOUT_getInstance(), Cooldown$FIVE_getInstance(), Cooldown$THREE_getInstance(), Cooldown$TWO_getInstance(), Cooldown$ONE_getInstance(), Cooldown$HALF_getInstance(), Cooldown$MIN_getInstance(), Cooldown$NONE_getInstance()];
  }
  Cooldown.values = Cooldown$values;
  function Cooldown$valueOf(name) {
    switch (name) {
      case 'BURNOUT':
        return Cooldown$BURNOUT_getInstance();
      case 'FIVE':
        return Cooldown$FIVE_getInstance();
      case 'THREE':
        return Cooldown$THREE_getInstance();
      case 'TWO':
        return Cooldown$TWO_getInstance();
      case 'ONE':
        return Cooldown$ONE_getInstance();
      case 'HALF':
        return Cooldown$HALF_getInstance();
      case 'MIN':
        return Cooldown$MIN_getInstance();
      case 'NONE':
        return Cooldown$NONE_getInstance();
      default:throwISE('No enum constant portal.Cooldown.' + name);
    }
  }
  Cooldown.valueOf_61zpoe$ = Cooldown$valueOf;
  function Field(origin, primaryAnchor, secondaryAnchor, owner) {
    Field$Companion_getInstance();
    this.origin = origin;
    this.primaryAnchor = primaryAnchor;
    this.secondaryAnchor = secondaryAnchor;
    this.owner = owner;
    this.idSet = linkedSetOf([this.origin, this.primaryAnchor, this.secondaryAnchor]);
  }
  function Field$weakestPortal$lambda(it) {
    return it.calcHealth();
  }
  var compareBy$lambda_7 = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function Comparator$ObjectLiteral_8(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral_8.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral_8.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  Field.prototype.weakestPortal = function () {
    return last(sortedWith(toList_0(this.idSet), new Comparator$ObjectLiteral_8(compareBy$lambda_7(Field$weakestPortal$lambda))));
  };
  function Field$strongestAnchors$lambda(it) {
    return it.calcHealth();
  }
  var compareBy$lambda_8 = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function Comparator$ObjectLiteral_9(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral_9.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral_9.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  Field.prototype.strongestAnchors = function () {
    return take(sortedWith(toList_0(this.idSet), new Comparator$ObjectLiteral_9(compareBy$lambda_8(Field$strongestAnchors$lambda))), 2);
  };
  function Field$findFurthestFrom$lambda(closure$portal) {
    return function (it) {
      return (new Line(closure$portal.location, it.location)).calcLength();
    };
  }
  var compareBy$lambda_9 = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function Comparator$ObjectLiteral_10(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral_10.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral_10.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  Field.prototype.findFurthestFrom_hv9zn6$ = function (portal) {
    return first(sortedWith(toList_0(this.idSet), new Comparator$ObjectLiteral_10(compareBy$lambda_9(Field$findFurthestFrom$lambda(portal)))));
  };
  Field.prototype.calculateMu = function () {
    return this.calculateArea();
  };
  Field.prototype.isCoveringPortal_hv9zn6$ = function (portal) {
    var isPortalPart = this.idSet.contains_11rb$(portal);
    if (isPortalPart) {
      return false;
    }
    var dXtoSecondary = portal.x() - this.secondaryAnchor.x();
    var dYtoSecondary = portal.y() - this.secondaryAnchor.y();
    var dXSecondaryToPrimary = this.secondaryAnchor.x() - this.primaryAnchor.x();
    var dYPrimaryToSecondary = this.primaryAnchor.y() - this.secondaryAnchor.y();
    var d = dYPrimaryToSecondary * (this.origin.x() - this.secondaryAnchor.x()) + dXSecondaryToPrimary * (this.origin.y() - this.secondaryAnchor.y());
    var s = dYPrimaryToSecondary * dXtoSecondary + dXSecondaryToPrimary * dYtoSecondary;
    var t = (this.secondaryAnchor.y() - this.origin.y()) * dXtoSecondary + (this.origin.x() - this.secondaryAnchor.x()) * dYtoSecondary;
    if (d < 0)
      return s < 0 && t < 0 && s + t > d;
    return s > 0 && t > 0 && s + t < d;
  };
  Field.prototype.calculateArea = function () {
    var a = (new Line(this.origin.location, this.primaryAnchor.location)).calcLength();
    var b = (new Line(this.origin.location, this.secondaryAnchor.location)).calcLength();
    var c = (new Line(this.primaryAnchor.location, this.secondaryAnchor.location)).calcLength();
    var s = (a + b + c) / 2;
    var x = s * (s - a) * (s - b) * (s - c);
    var area = numberToInt(Math_0.sqrt(x));
    var b_0 = area / 100 | 0;
    return Math_0.max(1, b_0);
  };
  function Field$draw$drawCenter(closure$ctx, closure$fullStyle) {
    return function (one, two, three) {
      var receiver = closure$ctx;
      receiver.fillStyle = closure$fullStyle;
      receiver.beginPath();
      receiver.moveTo(one.xx(), one.yy());
      receiver.lineTo(two.xx(), two.yy());
      receiver.lineTo(three.xx(), three.yy());
      receiver.fill();
      receiver.closePath();
    };
  }
  function Field$draw$drawRadial$calcStyle(this$Field) {
    return function (health) {
      return this$Field.owner.faction.fieldStyle + toString(Styles_getInstance().fieldTransparency * health / Resonator$Companion_getInstance().MAX_HEALTH) + ')';
    };
  }
  function Field$draw$drawRadial(this$Field, closure$ctx, closure$fullStyle) {
    return function (portal, first, second) {
      var calcStyle = Field$draw$drawRadial$calcStyle(this$Field);
      var originHp = calcStyle(portal.calcHealth());
      var receiver = closure$ctx;
      var closure$fullStyle_0 = closure$fullStyle;
      var r = (new Line(portal.location, (new Line(first, second)).findClosestPointTo_lfj9be$(portal.location))).calcLength();
      var gradient = World_getInstance().ctx().createRadialGradient(portal.x(), portal.y(), r * (Constants_getInstance().phi - 1), portal.x(), portal.y(), r);
      gradient.addColorStop(0.0, originHp);
      gradient.addColorStop(1.0, closure$fullStyle_0);
      receiver.fillStyle = gradient;
      receiver.beginPath();
      receiver.moveTo(portal.x(), portal.y());
      receiver.lineTo(first.xx(), first.yy());
      receiver.lineTo(second.xx(), second.yy());
      receiver.fill();
      receiver.closePath();
    };
  }
  Field.prototype.draw_f69bme$ = function (ctx) {
    var fullStyle = this.owner.faction.fieldStyle + toString(Styles_getInstance().fieldTransparency) + ')';
    var drawCenter = Field$draw$drawCenter(ctx, fullStyle);
    var drawRadial = Field$draw$drawRadial(this, ctx, fullStyle);
    var originAndPrimary = (new Line(this.origin.location, this.primaryAnchor.location)).center();
    var primaryAndSecondary = (new Line(this.primaryAnchor.location, this.secondaryAnchor.location)).center();
    var secondaryAndOrigin = (new Line(this.secondaryAnchor.location, this.origin.location)).center();
    drawCenter(originAndPrimary, primaryAndSecondary, secondaryAndOrigin);
    drawRadial(this.origin, originAndPrimary, secondaryAndOrigin);
    drawRadial(this.primaryAnchor, originAndPrimary, primaryAndSecondary);
    drawRadial(this.secondaryAnchor, secondaryAndOrigin, primaryAndSecondary);
  };
  Field.prototype.equals = function (other) {
    return Kotlin.isType(other, Field) && this.idSet.containsAll_brywnq$(other.idSet);
  };
  Field.prototype.toString = function () {
    return this.calculateArea().toString() + 'MU';
  };
  function Field$Companion() {
    Field$Companion_instance = this;
  }
  Field$Companion.prototype.isPossible_rsiz9u$ = function (origin, primaryAnchor, secondaryAnchor) {
    var $receiver = World_getInstance().allPortals;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var list = element.fields;
      addAll(destination, list);
    }
    var destination_0 = ArrayList_init();
    var tmp$_0;
    tmp$_0 = destination.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      var tmp$_1;
      if ((tmp$_1 = element_0.idSet) != null ? tmp$_1.equals(linkedSetOf([origin, primaryAnchor, secondaryAnchor])) : null)
        destination_0.add_11rb$(element_0);
    }
    return destination_0.isEmpty();
  };
  Field$Companion.prototype.create_veg84i$ = function (origin, primaryAnchor, secondaryAnchor, owner) {
    if (this.isPossible_rsiz9u$(origin, primaryAnchor, secondaryAnchor)) {
      return new Field(origin, primaryAnchor, secondaryAnchor, owner);
    }
    return null;
  };
  Field$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Field$Companion_instance = null;
  function Field$Companion_getInstance() {
    if (Field$Companion_instance === null) {
      new Field$Companion();
    }
    return Field$Companion_instance;
  }
  Field.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Field',
    interfaces: []
  };
  Field.prototype.component1 = function () {
    return this.origin;
  };
  Field.prototype.component2 = function () {
    return this.primaryAnchor;
  };
  Field.prototype.component3 = function () {
    return this.secondaryAnchor;
  };
  Field.prototype.component4 = function () {
    return this.owner;
  };
  Field.prototype.copy_veg84i$ = function (origin, primaryAnchor, secondaryAnchor, owner) {
    return new Field(origin === void 0 ? this.origin : origin, primaryAnchor === void 0 ? this.primaryAnchor : primaryAnchor, secondaryAnchor === void 0 ? this.secondaryAnchor : secondaryAnchor, owner === void 0 ? this.owner : owner);
  };
  Field.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.origin) | 0;
    result = result * 31 + Kotlin.hashCode(this.primaryAnchor) | 0;
    result = result * 31 + Kotlin.hashCode(this.secondaryAnchor) | 0;
    result = result * 31 + Kotlin.hashCode(this.owner) | 0;
    return result;
  };
  function HackResult(items, cooldown) {
    this.items = items;
    this.cooldown = cooldown;
  }
  HackResult.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HackResult',
    interfaces: []
  };
  HackResult.prototype.component1 = function () {
    return this.items;
  };
  HackResult.prototype.component2 = function () {
    return this.cooldown;
  };
  HackResult.prototype.copy_idffk$ = function (items, cooldown) {
    return new HackResult(items === void 0 ? this.items : items, cooldown === void 0 ? this.cooldown : cooldown);
  };
  HackResult.prototype.toString = function () {
    return 'HackResult(items=' + Kotlin.toString(this.items) + (', cooldown=' + Kotlin.toString(this.cooldown)) + ')';
  };
  HackResult.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.items) | 0;
    result = result * 31 + Kotlin.hashCode(this.cooldown) | 0;
    return result;
  };
  HackResult.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.items, other.items) && Kotlin.equals(this.cooldown, other.cooldown)))));
  };
  function Link(origin, destination, owner) {
    Link$Companion_getInstance();
    this.origin = origin;
    this.destination = destination;
    this.owner = owner;
  }
  Link.prototype.getLine = function () {
    return new Line(this.origin.location, this.destination.location);
  };
  Link.prototype.getReverseLine_0 = function () {
    return new Line(this.destination.location, this.origin.location);
  };
  function Link$draw$lambda(it) {
    return it.calcHealth();
  }
  var compareBy$lambda_10 = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function Comparator$ObjectLiteral_11(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral_11.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral_11.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  Link.prototype.draw_f69bme$ = function (ctx) {
    var byHealth = sortedWith(listOf([this.origin, this.destination]), new Comparator$ObjectLiteral_11(compareBy$lambda_10(Link$draw$lambda)));
    var lowHpTransparency = 1.0 * last(byHealth).calcHealth() / Resonator$Companion_getInstance().MAX_HEALTH;
    var highHpTransparency = 1.0 * first(byHealth).calcHealth() / Resonator$Companion_getInstance().MAX_HEALTH;
    var gradient = ctx.createLinearGradient(this.origin.x(), this.origin.y(), this.destination.x(), this.destination.y());
    if (this.origin.calcHealth() < this.destination.calcHealth()) {
      gradient.addColorStop(0.0, this.owner.faction.fieldStyle + toString(highHpTransparency) + ')');
      gradient.addColorStop(1.0, this.owner.faction.fieldStyle + toString(lowHpTransparency) + ')');
    }
     else {
      gradient.addColorStop(0.0, this.owner.faction.fieldStyle + toString(lowHpTransparency) + ')');
      gradient.addColorStop(1.0, this.owner.faction.fieldStyle + toString(highHpTransparency) + ')');
    }
    ctx.strokeStyle = gradient;
    ctx.lineWidth = Dimensions_getInstance().linkLineWidth;
    ctx.beginPath();
    ctx.moveTo(this.getLine().from.x, this.getLine().from.y);
    ctx.lineTo(this.getLine().to.x, this.getLine().to.y);
    ctx.closePath();
    ctx.stroke();
  };
  Link.prototype.equals = function (other) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    return Kotlin.isType(other, Link) && (((tmp$ = this.origin) != null ? tmp$.equals(other.origin) : null) && ((tmp$_0 = this.destination) != null ? tmp$_0.equals(other.destination) : null) || (((tmp$_1 = this.origin) != null ? tmp$_1.equals(other.destination) : null) && ((tmp$_2 = this.destination) != null ? tmp$_2.equals(other.origin) : null)));
  };
  Link.prototype.toString = function () {
    return this.origin.toString() + ' --> ' + this.destination.toString();
  };
  function Link$Companion() {
    Link$Companion_instance = this;
  }
  Link$Companion.prototype.isPossible_4tp95w$ = function (link) {
    var $receiver = World_getInstance().allLinks();
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0, tmp$_1, tmp$_2, tmp$_3;
      if (((tmp$_0 = element.origin.location) != null ? tmp$_0.equals(link.origin.location) : null) && ((tmp$_1 = element.destination.location) != null ? tmp$_1.equals(link.destination.location) : null) || (((tmp$_2 = element.origin.location) != null ? tmp$_2.equals(link.destination.location) : null) && ((tmp$_3 = element.destination.location) != null ? tmp$_3.equals(link.origin.location) : null)))
        destination.add_11rb$(element);
    }
    return destination.isEmpty();
  };
  Link$Companion.prototype.create_6ezwqo$ = function (origin, destination, owner) {
    var newLink = new Link(origin, destination, owner);
    if (this.isPossible_4tp95w$(newLink)) {
      return newLink;
    }
    return null;
  };
  Link$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Link$Companion_instance = null;
  function Link$Companion_getInstance() {
    if (Link$Companion_instance === null) {
      new Link$Companion();
    }
    return Link$Companion_instance;
  }
  Link.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Link',
    interfaces: []
  };
  Link.prototype.component1 = function () {
    return this.origin;
  };
  Link.prototype.component2 = function () {
    return this.destination;
  };
  Link.prototype.component3 = function () {
    return this.owner;
  };
  Link.prototype.copy_6ezwqo$ = function (origin, destination, owner) {
    return new Link(origin === void 0 ? this.origin : origin, destination === void 0 ? this.destination : destination, owner === void 0 ? this.owner : owner);
  };
  Link.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.origin) | 0;
    result = result * 31 + Kotlin.hashCode(this.destination) | 0;
    result = result * 31 + Kotlin.hashCode(this.owner) | 0;
    return result;
  };
  function LinkResult(link, maybeFields) {
    this.link = link;
    this.maybeFields = maybeFields;
  }
  LinkResult.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LinkResult',
    interfaces: []
  };
  LinkResult.prototype.component1 = function () {
    return this.link;
  };
  LinkResult.prototype.component2 = function () {
    return this.maybeFields;
  };
  LinkResult.prototype.copy_vvflfg$ = function (link, maybeFields) {
    return new LinkResult(link === void 0 ? this.link : link, maybeFields === void 0 ? this.maybeFields : maybeFields);
  };
  LinkResult.prototype.toString = function () {
    return 'LinkResult(link=' + Kotlin.toString(this.link) + (', maybeFields=' + Kotlin.toString(this.maybeFields)) + ')';
  };
  LinkResult.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.link) | 0;
    result = result * 31 + Kotlin.hashCode(this.maybeFields) | 0;
    return result;
  };
  LinkResult.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.link, other.link) && Kotlin.equals(this.maybeFields, other.maybeFields)))));
  };
  function ModSlot(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ModSlot_initFields() {
    ModSlot_initFields = function () {
    };
    ModSlot$FIRST_instance = new ModSlot('FIRST', 0);
    ModSlot$SECOND_instance = new ModSlot('SECOND', 1);
    ModSlot$THIRD_instance = new ModSlot('THIRD', 2);
    ModSlot$FOUTH_instance = new ModSlot('FOUTH', 3);
  }
  var ModSlot$FIRST_instance;
  function ModSlot$FIRST_getInstance() {
    ModSlot_initFields();
    return ModSlot$FIRST_instance;
  }
  var ModSlot$SECOND_instance;
  function ModSlot$SECOND_getInstance() {
    ModSlot_initFields();
    return ModSlot$SECOND_instance;
  }
  var ModSlot$THIRD_instance;
  function ModSlot$THIRD_getInstance() {
    ModSlot_initFields();
    return ModSlot$THIRD_instance;
  }
  var ModSlot$FOUTH_instance;
  function ModSlot$FOUTH_getInstance() {
    ModSlot_initFields();
    return ModSlot$FOUTH_instance;
  }
  ModSlot.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ModSlot',
    interfaces: [Enum]
  };
  function ModSlot$values() {
    return [ModSlot$FIRST_getInstance(), ModSlot$SECOND_getInstance(), ModSlot$THIRD_getInstance(), ModSlot$FOUTH_getInstance()];
  }
  ModSlot.values = ModSlot$values;
  function ModSlot$valueOf(name) {
    switch (name) {
      case 'FIRST':
        return ModSlot$FIRST_getInstance();
      case 'SECOND':
        return ModSlot$SECOND_getInstance();
      case 'THIRD':
        return ModSlot$THIRD_getInstance();
      case 'FOUTH':
        return ModSlot$FOUTH_getInstance();
      default:throwISE('No enum constant portal.ModSlot.' + name);
    }
  }
  ModSlot.valueOf_61zpoe$ = ModSlot$valueOf;
  function Octant(name, ordinal, arrow, angle) {
    Enum.call(this);
    this.arrow = arrow;
    this.angle_90b5ws$_0 = angle;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Octant_initFields() {
    Octant_initFields = function () {
    };
    Octant$E_instance = new Octant('E', 0, 8594, 0 * math.PI / 180);
    Octant$SE_instance = new Octant('SE', 1, 8600, 45 * math.PI / 180);
    Octant$S_instance = new Octant('S', 2, 8595, 90 * math.PI / 180);
    Octant$SW_instance = new Octant('SW', 3, 8601, 135 * math.PI / 180);
    Octant$W_instance = new Octant('W', 4, 8592, 180 * math.PI / 180);
    Octant$NW_instance = new Octant('NW', 5, 8598, 225 * math.PI / 180);
    Octant$N_instance = new Octant('N', 6, 8593, 270 * math.PI / 180);
    Octant$NE_instance = new Octant('NE', 7, 8599, 315 * math.PI / 180);
  }
  var Octant$E_instance;
  function Octant$E_getInstance() {
    Octant_initFields();
    return Octant$E_instance;
  }
  var Octant$SE_instance;
  function Octant$SE_getInstance() {
    Octant_initFields();
    return Octant$SE_instance;
  }
  var Octant$S_instance;
  function Octant$S_getInstance() {
    Octant_initFields();
    return Octant$S_instance;
  }
  var Octant$SW_instance;
  function Octant$SW_getInstance() {
    Octant_initFields();
    return Octant$SW_instance;
  }
  var Octant$W_instance;
  function Octant$W_getInstance() {
    Octant_initFields();
    return Octant$W_instance;
  }
  var Octant$NW_instance;
  function Octant$NW_getInstance() {
    Octant_initFields();
    return Octant$NW_instance;
  }
  var Octant$N_instance;
  function Octant$N_getInstance() {
    Octant_initFields();
    return Octant$N_instance;
  }
  var Octant$NE_instance;
  function Octant$NE_getInstance() {
    Octant_initFields();
    return Octant$NE_instance;
  }
  Octant.prototype.calcXOffset_za3lpa$ = function (radius) {
    var x = this.angle_90b5ws$_0;
    return numberToInt(radius * Math_0.cos(x));
  };
  Octant.prototype.calcYOffset_za3lpa$ = function (radius) {
    var x = this.angle_90b5ws$_0;
    return numberToInt(radius * Math_0.sin(x));
  };
  Octant.prototype.toString = function () {
    return String.fromCharCode(unboxChar(this.arrow));
  };
  Octant.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Octant',
    interfaces: [Enum]
  };
  function Octant$values() {
    return [Octant$E_getInstance(), Octant$SE_getInstance(), Octant$S_getInstance(), Octant$SW_getInstance(), Octant$W_getInstance(), Octant$NW_getInstance(), Octant$N_getInstance(), Octant$NE_getInstance()];
  }
  Octant.values = Octant$values;
  function Octant$valueOf(name) {
    switch (name) {
      case 'E':
        return Octant$E_getInstance();
      case 'SE':
        return Octant$SE_getInstance();
      case 'S':
        return Octant$S_getInstance();
      case 'SW':
        return Octant$SW_getInstance();
      case 'W':
        return Octant$W_getInstance();
      case 'NW':
        return Octant$NW_getInstance();
      case 'N':
        return Octant$N_getInstance();
      case 'NE':
        return Octant$NE_getInstance();
      default:throwISE('No enum constant portal.Octant.' + name);
    }
  }
  Octant.valueOf_61zpoe$ = Octant$valueOf;
  function Portal(name, location, heatMap, vectorField, resoSlots, links, fields, owner) {
    Portal$Companion_getInstance();
    this.name = name;
    this.location = location;
    this.heatMap = heatMap;
    this.vectorField = vectorField;
    this.resoSlots = resoSlots;
    this.links = links;
    this.fields = fields;
    this.owner = owner;
    this.lastHacks = LinkedHashMap_init();
    this.id = 'P-' + toString(this.location.x) + ':' + toString(this.location.y) + '-' + this.name;
    this.nameImage = this.createNameImage_0();
  }
  Portal.prototype.isDeprecated = function () {
    return this.resoSlots.isEmpty();
  };
  Portal.prototype.isUncaptured = function () {
    return this.owner == null;
  };
  Portal.prototype.isCoveredByField = function () {
    var $receiver = World_getInstance().allFields();
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.isCoveringPortal_hv9zn6$(this))
        destination.add_11rb$(element);
    }
    return !destination.isEmpty();
  };
  Portal.prototype.isLinkable_912u9o$ = function (agent) {
    var tmp$;
    return equals((tmp$ = this.owner) != null ? tmp$.faction : null, agent.faction) && this.isFullyDeployed_0();
  };
  Portal.prototype.isInside = function () {
    var $receiver = this.findConnectedPortals();
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var $receiver_0 = element.fields;
      var destination_0 = ArrayList_init();
      var tmp$_0;
      tmp$_0 = $receiver_0.iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        if (element_0.idSet.contains_11rb$(this))
          destination_0.add_11rb$(element_0);
      }
      if (destination_0.size > 1)
        destination.add_11rb$(element);
    }
    return destination.isEmpty();
  };
  Portal.prototype.canHack_912u9o$ = function (agent) {
    return this.handleCooldown_0(agent, true) === Cooldown$NONE_getInstance();
  };
  Portal.prototype.canLinkOut_912u9o$ = function (agent) {
    var tmp$ = this.isLinkable_912u9o$(agent);
    if (tmp$) {
      var tmp$_0 = this.links.isEmpty();
      if (!tmp$_0) {
        tmp$_0 = this.links.size < 8;
      }
      tmp$ = tmp$_0;
    }
    return tmp$ && !this.isCoveredByField() && this.isInside();
  };
  Portal.prototype.calculateLevel = function () {
    var tmp$;
    if (this.owner == null)
      tmp$ = 0;
    else {
      var tmp$_0 = Portal$Companion_getInstance();
      var $receiver = this.resoSlots.values;
      var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
      var tmp$_1;
      tmp$_1 = $receiver.iterator();
      while (tmp$_1.hasNext()) {
        var item = tmp$_1.next();
        var tmp$_2, tmp$_3, tmp$_4;
        destination.add_11rb$((tmp$_4 = (tmp$_3 = (tmp$_2 = item.resonator) != null ? tmp$_2.level : null) != null ? tmp$_3.level : null) != null ? tmp$_4 : 0);
      }
      tmp$ = tmp$_0.clipLevel_0(sum(destination) / 8 | 0);
    }
    return tmp$;
  };
  Portal.prototype.getLevel = function () {
    return PortalLevel$Companion_getInstance().findByValue_za3lpa$(this.calculateLevel());
  };
  Portal.prototype.x = function () {
    return this.location.x;
  };
  Portal.prototype.y = function () {
    return this.location.y;
  };
  Portal.prototype.getAllResos_0 = function () {
    var $receiver = this.resoSlots;
    var destination = ArrayList_init($receiver.size);
    var tmp$;
    tmp$ = $receiver.entries.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(item.value.resonator);
    }
    return filterNotNull(destination);
  };
  Portal.prototype.isFullyDeployed_0 = function () {
    var $receiver = this.resoSlots;
    var destination = ArrayList_init($receiver.size);
    var tmp$;
    tmp$ = $receiver.entries.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(item.value.resonator);
    }
    return filterNotNull(destination).size === 8;
  };
  Portal.prototype.averageResoLevel_0 = function () {
    var resos = this.getAllResos_0();
    var destination = ArrayList_init(collectionSizeOrDefault(resos, 10));
    var tmp$;
    tmp$ = resos.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(item.level.level);
    }
    return sum(destination) / resos.size;
  };
  Portal.prototype.calculateLinkMitigation_0 = function () {
    var maxMitigation = 95;
    var incoming = this.findIncomingFrom();
    var totalLinkCount = incoming.size + this.links.size | 0;
    var tmp$ = 400.0 / 9.0;
    var x = totalLinkCount / math.E;
    var b = numberToInt(round(tmp$ * Math_0.atan(x)));
    return Math_0.min(maxMitigation, b);
  };
  Portal.prototype.findResos = function () {
    var $receiver = this.resoSlots;
    var destination = ArrayList_init($receiver.size);
    var tmp$;
    tmp$ = $receiver.entries.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(item.value.resonator);
    }
    return filterNotNull(destination);
  };
  function Portal$findStrongestReso$lambda(it) {
    return Kotlin.imul(it.health, it.level.level);
  }
  var compareBy$lambda_11 = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function Comparator$ObjectLiteral_12(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral_12.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral_12.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  Portal.prototype.findStrongestReso_0 = function () {
    return first(sortedWith(this.findResos(), new Comparator$ObjectLiteral_12(compareBy$lambda_11(Portal$findStrongestReso$lambda))));
  };
  Portal.prototype.findStrongestResoPos = function () {
    return this.findStrongestReso_0().coords;
  };
  Portal.prototype.calcHealth = function () {
    var $receiver = this.findResos();
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(item.health);
    }
    return sum(destination) / this.findResos().size | 0;
  };
  Portal.prototype.calcTotalXm = function () {
    var $receiver = this.getAllResos_0();
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(Kotlin.imul(item.health, item.level.xmToPortal));
    }
    return sum(destination);
  };
  function Portal$calculateLinkingRangeInMeters$lambda(this$Portal) {
    return function () {
      var x = this$Portal.averageResoLevel_0();
      return this$Portal.isFullyDeployed_0() ? 160 * x * x * x * x : 0.0;
    };
  }
  Portal.prototype.calculateLinkingRangeInMeters = function () {
    return Portal$calculateLinkingRangeInMeters$lambda(this);
  };
  Portal.prototype.findOutgoingTo = function () {
    var $receiver = this.links;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(item.destination);
    }
    return destination;
  };
  Portal.prototype.findIncomingFrom = function () {
    var $receiver = World_getInstance().allLinks();
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      if ((tmp$_0 = element.destination) != null ? tmp$_0.equals(this) : null)
        destination.add_11rb$(element);
    }
    var destination_0 = ArrayList_init(collectionSizeOrDefault(destination, 10));
    var tmp$_1;
    tmp$_1 = destination.iterator();
    while (tmp$_1.hasNext()) {
      var item = tmp$_1.next();
      destination_0.add_11rb$(item.origin);
    }
    return destination_0;
  };
  Portal.prototype.findRandomPointNearPortal_za3lpa$ = function (distance) {
    var tmp$, tmp$_0;
    var angle = Util_getInstance().random() * math.PI;
    var xOffset = numberToInt(distance * Math_0.cos(angle));
    var yOffset = numberToInt(distance * Math_0.sin(angle));
    var point = this.location.copy_vux9f0$(this.location.x + xOffset | 0, this.location.y + yOffset | 0);
    if ((tmp$_0 = (tmp$ = World_getInstance().grid.get_11rb$(PathUtil_getInstance().posToShadowPos_lfj9be$(point))) != null ? tmp$.isPassable : null) != null ? tmp$_0 : false) {
      return point;
    }
     else {
      return this.findRandomPointNearPortal_za3lpa$(distance);
    }
  };
  Portal.prototype.findConnectedPortals = function () {
    return plus(this.findOutgoingTo(), this.findIncomingFrom());
  };
  Portal.prototype.findLinkableForKeys_ep8wwm$ = function (keyset, agent) {
    var $receiver = World_getInstance().allPortals;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var list = element.links;
      addAll(destination, list);
    }
    var destination_0 = ArrayList_init();
    var tmp$_0;
    tmp$_0 = destination.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      if (Link$Companion_getInstance().isPossible_4tp95w$(element_0))
        destination_0.add_11rb$(element_0);
    }
    var allLinks = toSet(destination_0);
    var destination_1 = ArrayList_init(collectionSizeOrDefault(keyset, 10));
    var tmp$_1;
    tmp$_1 = keyset.iterator();
    while (tmp$_1.hasNext()) {
      var item = tmp$_1.next();
      destination_1.add_11rb$(item.portal);
    }
    var destination_2 = ArrayList_init();
    var tmp$_2;
    tmp$_2 = destination_1.iterator();
    while (tmp$_2.hasNext()) {
      var element_1 = tmp$_2.next();
      var line = new Line(this.location, element_1.location);
      var destination_3 = ArrayList_init();
      var tmp$_3;
      tmp$_3 = allLinks.iterator();
      while (tmp$_3.hasNext()) {
        var element_2 = tmp$_3.next();
        if (element_2.getLine().doesIntersect_589y3w$(line))
          destination_3.add_11rb$(element_2);
      }
      if (destination_3.isEmpty())
        destination_2.add_11rb$(element_1);
    }
    var nonIntersecting = destination_2;
    var destination_4 = ArrayList_init();
    var tmp$_4;
    tmp$_4 = nonIntersecting.iterator();
    while (tmp$_4.hasNext()) {
      var element_3 = tmp$_4.next();
      if (element_3.isLinkable_912u9o$(agent))
        destination_4.add_11rb$(element_3);
    }
    return destination_4;
  };
  Portal.prototype.createLink_g4r5ni$ = function (agent, target) {
    var newLink = Link$Companion_getInstance().create_6ezwqo$(this, target, agent);
    if (newLink != null) {
      this.links.add_11rb$(newLink);
      agent.inventory.consumeKeyToPortal_hv9zn6$(target);
      Com_getInstance().addMessage_61zpoe$(agent.toString() + ' created a link from ' + this + ' to ' + target);
      SoundUtil_getInstance().playLinkingSound_4tp95w$(newLink);
      agent.ap = agent.ap + 187 | 0;
      agent.xm = agent.xm - 250 | 0;
      var connectedToTarget = target.findConnectedPortals();
      var connectedToHere = this.findConnectedPortals();
      var destination = ArrayList_init();
      var tmp$;
      tmp$ = connectedToTarget.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (connectedToHere.contains_11rb$(element))
          destination.add_11rb$(element);
      }
      var anchors = destination;
      var tmp$_0;
      tmp$_0 = anchors.iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        if (Field$Companion_getInstance().isPossible_rsiz9u$(this, target, element_0)) {
          var newField = Field$Companion_getInstance().create_veg84i$(this, target, element_0, agent);
          if (newField != null) {
            Com_getInstance().addMessage_61zpoe$(agent.toString() + ' created a field at ' + this + ' between ' + target + ' and ' + element_0 + '. +' + toString(newField));
            SoundUtil_getInstance().playFieldingSound_7ltq94$(newField);
            this.fields.add_11rb$(newField);
            agent.ap = agent.ap + 1250 | 0;
          }
        }
      }
    }
  };
  Portal.prototype.tryHack_912u9o$ = function (agent) {
    var cooldown = this.handleCooldown_0(agent, false);
    if (cooldown === Cooldown$NONE_getInstance()) {
      var stuff = this.hack_0(agent);
      return new HackResult(stuff, null);
    }
    return new HackResult(null, cooldown);
  };
  Portal.prototype.hack_0 = function (agent) {
    var tmp$;
    var a = this.calculateLevel();
    var b = agent.getLevel();
    var level = Math_0.min(a, b);
    var newStuff = ArrayList_init();
    newStuff.addAll_brywnq$(this.obtainResos_0(level, agent));
    newStuff.addAll_brywnq$(this.obtainXmps_0(level, agent));
    newStuff.addAll_brywnq$(this.obtainShields_0(agent));
    newStuff.addAll_brywnq$(this.obtainVirus_0(agent));
    newStuff.addAll_brywnq$(this.obtainPowerCubes_0(level, agent));
    newStuff.add_11rb$(PortalKey$Companion_getInstance().tryHack_gju65e$(this, agent));
    agent.xm = agent.xm - (50 * this.calculateLevel() | 0) | 0;
    if (this.owner != null && !equals(agent.faction, (tmp$ = this.owner) != null ? tmp$.faction : null)) {
      agent.ap = agent.ap + 100 | 0;
    }
    return toMutableList(filterNotNull(newStuff));
  };
  Portal.prototype.obtainResos_0 = function (level, agent) {
    var stuff = ArrayList_init();
    var $receiver = Quality$values();
    var destination = ArrayList_init($receiver.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var item = $receiver[tmp$];
      var tmp$_0 = destination.add_11rb$;
      var tmp$_1;
      var selectedLevel = ResonatorLevel$Companion_getInstance().find_p76lt3$(level, item).level;
      while (Util_getInstance().random() < item.chance) {
        stuff.add_11rb$(Kotlin.isType(tmp$_1 = Resonator$Companion_getInstance().create_ugk1o2$(selectedLevel, agent), QgressItem) ? tmp$_1 : throwCCE());
      }
      tmp$_0.call(destination, Unit);
    }
    return stuff;
  };
  Portal.prototype.obtainXmps_0 = function (level, agent) {
    var stuff = ArrayList_init();
    var $receiver = Quality$values();
    var destination = ArrayList_init($receiver.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var item = $receiver[tmp$];
      var tmp$_0 = destination.add_11rb$;
      var tmp$_1;
      var selectedLevel = XmpLevel$Companion_getInstance().find_p76lt3$(level, item).level;
      while (Util_getInstance().random() < item.chance) {
        stuff.add_11rb$(Kotlin.isType(tmp$_1 = XmpBurster$Companion_getInstance().create_ugk1o2$(selectedLevel, agent), QgressItem) ? tmp$_1 : throwCCE());
      }
      tmp$_0.call(destination, Unit);
    }
    return stuff;
  };
  Portal.prototype.obtainShields_0 = function (agent) {
    var stuff = ArrayList_init();
    var $receiver = ShieldType$values();
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      while (Util_getInstance().random() < (1 / element.roll | 0)) {
        stuff.add_11rb$(new Shield(element, agent));
      }
    }
    return stuff;
  };
  Portal.prototype.obtainPowerCubes_0 = function (level, agent) {
    var stuff = ArrayList_init();
    var $receiver = Quality$values();
    var destination = ArrayList_init($receiver.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var item = $receiver[tmp$];
      var tmp$_0 = destination.add_11rb$;
      var tmp$_1;
      var selectedLevel = PowerCubeLevel$Companion_getInstance().find_p76lt3$(level, item).level;
      while (Util_getInstance().random() < item.chance * 0.3) {
        stuff.add_11rb$(Kotlin.isType(tmp$_1 = PowerCube$Companion_getInstance().create_ugk1o2$(selectedLevel, agent), QgressItem) ? tmp$_1 : throwCCE());
      }
      tmp$_0.call(destination, Unit);
    }
    return stuff;
  };
  Portal.prototype.obtainVirus_0 = function (agent) {
    var stuff = ArrayList_init();
    var $receiver = VirusType$values();
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      while (Util_getInstance().random() < (1 / element.roll | 0)) {
        stuff.add_11rb$(new Virus(element, agent));
      }
    }
    return stuff;
  };
  function Portal$handleCooldown$cool(closure$readOnly, this$Portal, closure$key) {
    return function (agentsLastHacks, tickNr) {
      sort(agentsLastHacks);
      var lastHack = last(agentsLastHacks);
      var ticksSinceLastHack = tickNr - lastHack | 0;
      var timeDiff = Util_getInstance().secondsToTicks_za3lpa$(Cooldown$FIVE_getInstance().seconds) - ticksSinceLastHack | 0;
      var cooldown = Cooldown$Companion_getInstance().valueOf_za3lpa$(Util_getInstance().ticksToSeconds_za3lpa$(timeDiff));
      if (cooldown === Cooldown$NONE_getInstance() && !closure$readOnly) {
        agentsLastHacks.add_11rb$(tickNr);
        this$Portal.lastHacks.put_xwzc9p$(closure$key, mutableListOf([tickNr]));
      }
      return cooldown;
    };
  }
  function Portal$handleCooldown$burn(closure$readOnly, this$Portal, closure$key) {
    return function (agentsLastHacks, tickNr) {
      var maxBurnoutTicks = Util_getInstance().secondsToTicks_za3lpa$(Cooldown$BURNOUT_getInstance().seconds);
      var maxTickDifference = tickNr - maxBurnoutTicks | 0;
      var $receiver = toList_0(agentsLastHacks);
      var destination = ArrayList_init();
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (element < maxTickDifference)
          destination.add_11rb$(element);
      }
      var isBurnout = destination.size <= 0;
      if (isBurnout) {
        return Cooldown$BURNOUT_getInstance();
      }
       else {
        if (!closure$readOnly) {
          agentsLastHacks.add_11rb$(tickNr);
          this$Portal.lastHacks.put_xwzc9p$(closure$key, mutableListOf([tickNr]));
        }
        return Cooldown$NONE_getInstance();
      }
    };
  }
  Portal.prototype.handleCooldown_0 = function (agent, readOnly) {
    var key = agent.key();
    var cool = Portal$handleCooldown$cool(readOnly, this, key);
    var burn = Portal$handleCooldown$burn(readOnly, this, key);
    var isFirstHack = !this.lastHacks.containsKey_11rb$(key);
    if (isFirstHack) {
      if (!readOnly) {
        this.lastHacks.put_xwzc9p$(key, mutableListOf([World_getInstance().tick]));
      }
      return Cooldown$NONE_getInstance();
    }
     else {
      var agentsLastHacks = ensureNotNull(this.lastHacks.get_11rb$(key));
      if (agentsLastHacks.size < Portal$Companion_getInstance().MAX_HACKS) {
        return cool(agentsLastHacks, World_getInstance().tick);
      }
       else {
        return burn(agentsLastHacks, World_getInstance().tick);
      }
    }
  };
  Portal.prototype.deploy_en6fu0$ = function (agent, resos, distance) {
    if (this.owner == null) {
      this.owner = agent;
      Com_getInstance().addMessage_61zpoe$(agent.toString() + ' captured ' + this + '.');
      agent.ap = agent.ap + 500 | 0;
    }
    var tmp$;
    tmp$ = resos.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var octant = element.key;
      var resonator = element.value;
      var tmp$_0, tmp$_1;
      var oldDistance = (tmp$_0 = this.resoSlots.get_11rb$(octant)) != null ? tmp$_0.distance : null;
      var newDistance = (tmp$_1 = oldDistance === 0 ? distance : oldDistance) != null ? tmp$_1 : distance;
      var slot = new ResonatorSlot(agent.key(), resonator, newDistance);
      this.resoSlots.put_xwzc9p$(octant, slot);
      var xx = this.location.x + octant.calcXOffset_za3lpa$(slot.distance) | 0;
      var yy = this.location.y + octant.calcYOffset_za3lpa$(slot.distance) | 0;
      resonator.deploy_njiqqf$(this, octant, new Coords(xx, yy));
    }
    var tmp$_2 = agent.inventory;
    var destination = ArrayList_init(resos.size);
    var tmp$_3;
    tmp$_3 = resos.entries.iterator();
    while (tmp$_3.hasNext()) {
      var item = tmp$_3.next();
      destination.add_11rb$(item.value);
    }
    tmp$_2.consumeResos_tvxik5$(destination);
  };
  Portal.prototype.destroy_za3lpa$ = function (tick) {
    this.resoSlots.clear();
    this.links.clear();
    this.fields.clear();
    this.owner = null;
    var tmp$;
    tmp$ = this.findIncomingFrom().iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      tmp$_0 = element.links.iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        var tmp$_1, tmp$_2;
        if (((tmp$_1 = element_0.destination) != null ? tmp$_1.equals(this) : null) || ((tmp$_2 = element_0.origin) != null ? tmp$_2.equals(this) : null)) {
          element.links.remove_11rb$(element_0);
        }
      }
      var tmp$_3;
      tmp$_3 = element.fields.iterator();
      while (tmp$_3.hasNext()) {
        var element_1 = tmp$_3.next();
        if (element_1.idSet.contains_11rb$(this)) {
          element.fields.remove_11rb$(element_1);
        }
      }
    }
    var tmp$_4;
    tmp$_4 = World_getInstance().allAgents.iterator();
    while (tmp$_4.hasNext()) {
      var element_2 = tmp$_4.next();
      var tmp$_5, tmp$_6, tmp$_7;
      var tmp$_8;
      if ((tmp$_5 = element_2.inventory.findKeys()) != null) {
        var destination = ArrayList_init();
        var tmp$_9;
        tmp$_9 = tmp$_5.iterator();
        while (tmp$_9.hasNext()) {
          var element_3 = tmp$_9.next();
          if (element_3.portal.equals(this))
            destination.add_11rb$(element_3);
        }
        tmp$_8 = destination;
      }
       else
        tmp$_8 = null;
      var portalKeys = (tmp$_6 = tmp$_8) != null ? toList_0(tmp$_6) : null;
      if (portalKeys != null) {
        element_2.inventory.items.removeAll_brywnq$(portalKeys);
      }
      if ((tmp$_7 = element_2.actionPortal) != null ? tmp$_7.equals(this) : null) {
        element_2.actionPortal = first(World_getInstance().allPortals);
        element_2.action = Action$Companion_getInstance().start_34yqkq$(ActionItem$Companion_getInstance().WAIT, tick);
      }
    }
    World_getInstance().allPortals.remove_11rb$(this);
  };
  Portal.prototype.removeReso_iiw8yf$ = function (octant) {
    this.resoSlots.put_xwzc9p$(octant, new ResonatorSlot(null, null, 0));
    var $receiver = this.resoSlots;
    var destination = LinkedHashMap_init();
    var tmp$;
    tmp$ = $receiver.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.value.resonator != null) {
        destination.put_xwzc9p$(element.key, element.value);
      }
    }
    var numberOfResosLeft = destination.size;
    if (numberOfResosLeft < 2) {
      var tmp$_0;
      tmp$_0 = this.findConnectedPortals().iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        var tmp$_1;
        tmp$_1 = element_0.links.iterator();
        while (tmp$_1.hasNext()) {
          var element_1 = tmp$_1.next();
          var tmp$_2;
          if ((tmp$_2 = element_1.destination) != null ? tmp$_2.equals(this) : null) {
            element_0.links.remove_11rb$(element_1);
          }
        }
        var tmp$_3;
        tmp$_3 = element_0.fields.iterator();
        while (tmp$_3.hasNext()) {
          var element_2 = tmp$_3.next();
          var tmp$_4, tmp$_5;
          if (((tmp$_4 = element_2.primaryAnchor) != null ? tmp$_4.equals(this) : null) || ((tmp$_5 = element_2.secondaryAnchor) != null ? tmp$_5.equals(this) : null)) {
            element_0.fields.remove_11rb$(element_2);
          }
        }
      }
      this.links.clear();
      this.fields.clear();
    }
    if (numberOfResosLeft <= 0) {
      this.owner = null;
    }
  };
  var emptyMap = Kotlin.kotlin.collections.emptyMap_q3lmfv$;
  Portal.prototype.findAllowedResoLevels_912u9o$ = function (agent) {
    var tmp$;
    if (this.owner == null || equals((tmp$ = this.owner) != null ? tmp$.faction : null, agent.faction)) {
      var $receiver = ResonatorLevel$values();
      var destination = ArrayList_init($receiver.length);
      var tmp$_0;
      for (tmp$_0 = 0; tmp$_0 !== $receiver.length; ++tmp$_0) {
        var item = $receiver[tmp$_0];
        var tmp$_1 = destination.add_11rb$;
        var tmp$_2 = item.deployablePerPlayer;
        var $receiver_0 = this.resoSlots;
        var destination_0 = LinkedHashMap_init();
        var tmp$_3;
        tmp$_3 = $receiver_0.entries.iterator();
        while (tmp$_3.hasNext()) {
          var element = tmp$_3.next();
          var tmp$_4, tmp$_5;
          if (element.value.isOwnedBy_912u9o$(agent) && ((tmp$_5 = (tmp$_4 = element.value.resonator) != null ? tmp$_4.level : null) != null ? tmp$_5.level : null) === item.level) {
            destination_0.put_xwzc9p$(element.key, element.value);
          }
        }
        tmp$_1.call(destination, to(item, tmp$_2 - destination_0.size | 0));
      }
      return toMap(destination);
    }
     else {
      return emptyMap();
    }
  };
  Portal.prototype.leakXm = function () {
    return numberToInt(this.calcTotalXm() * Portal$Companion_getInstance().XM_LEAK);
  };
  Portal.prototype.decayResonators = function () {
    var tmp$;
    tmp$ = this.getAllResos_0().iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.decay();
    }
  };
  function Portal$drawResonators$drawResoLine(closure$ctx) {
    return function (line, levelColor, factionColor, lineWidth, alpha) {
      if (alpha === void 0)
        alpha = 1.0;
      closure$ctx.globalAlpha = alpha;
      closure$ctx.strokeStyle = Colors_getInstance().black;
      closure$ctx.lineWidth = lineWidth + 1.5;
      closure$ctx.beginPath();
      closure$ctx.moveTo(line.from.xx(), line.from.yy());
      closure$ctx.lineTo(line.to.xx(), line.to.yy());
      closure$ctx.closePath();
      closure$ctx.stroke();
      closure$ctx.lineWidth = lineWidth;
      if (Styles_getInstance().isDrawResoLineGradient) {
        var gradient = closure$ctx.createLinearGradient(line.from.xx(), line.from.yy(), line.to.xx(), line.to.yy());
        gradient.addColorStop(0.2, levelColor);
        gradient.addColorStop(0.7, factionColor);
        closure$ctx.strokeStyle = gradient;
      }
       else {
        closure$ctx.strokeStyle = levelColor;
      }
      closure$ctx.beginPath();
      closure$ctx.moveTo(line.from.xx(), line.from.yy());
      closure$ctx.lineTo(line.to.xx(), line.to.yy());
      closure$ctx.closePath();
      closure$ctx.stroke();
      closure$ctx.globalAlpha = 1.0;
    };
  }
  Portal.prototype.drawResonators_f69bme$ = function (ctx) {
    var drawResoLine = Portal$drawResonators$drawResoLine(ctx);
    var $receiver = this.resoSlots;
    var destination = LinkedHashMap_init();
    var tmp$;
    tmp$ = $receiver.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.value.owner != null && element.value.resonator != null) {
        destination.put_xwzc9p$(element.key, element.value);
      }
    }
    var destination_0 = ArrayList_init(destination.size);
    var tmp$_0;
    tmp$_0 = destination.entries.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination_0.add_11rb$(to(item.key, item.value));
    }
    var octantSlots = toList_0(destination_0);
    var destination_1 = ArrayList_init(collectionSizeOrDefault(octantSlots, 10));
    var tmp$_1;
    tmp$_1 = octantSlots.iterator();
    while (tmp$_1.hasNext()) {
      var item_0 = tmp$_1.next();
      var tmp$_2 = destination_1.add_11rb$;
      var tmp$_3, tmp$_4, tmp$_5;
      var octant = item_0.first;
      var slot = item_0.second;
      var reso = ensureNotNull(slot.resonator);
      var resoLevel = reso.level;
      var x = this.location.x + octant.calcXOffset_za3lpa$(slot.distance) | 0;
      var y = this.location.y + octant.calcYOffset_za3lpa$(slot.distance) | 0;
      var lineToPortal = new Line(new Coords(x, y), this.location);
      var alpha = reso.health / 100.0;
      drawResoLine(lineToPortal, resoLevel.color, (tmp$_5 = (tmp$_4 = (tmp$_3 = this.owner) != null ? tmp$_3.faction : null) != null ? tmp$_4.color : null) != null ? tmp$_5 : Faction$NONE_getInstance().color, 1.0, alpha);
      var resoCircle = new Circle(new Coords(x, y), Dimensions_getInstance().resoRadius);
      DrawUtil_getInstance().drawCircle_3kie0f$(ctx, resoCircle, Colors_getInstance().black, 2.0, resoLevel.color, alpha);
      if (Styles_getInstance().isDrawResoLevels) {
        DrawUtil_getInstance().drawText_omkwws$(ctx, new Coords(x, y), reso.level.level.toString(), Colors_getInstance().black, 8, DrawUtil_getInstance().CODA);
      }
      tmp$_2.call(destination_1, Unit);
    }
  };
  Portal.prototype.drawCenter_f69bme$ = function (ctx) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    tmp$_1 = (tmp$_0 = (tmp$ = this.owner) != null ? tmp$.faction : null) != null ? tmp$_0 : Faction$NONE_getInstance();
    tmp$_2 = this.getLevel();
    var image = Portal$Companion_getInstance().getCenterImage_0(tmp$_1, tmp$_2);
    ctx.drawImage(image, this.location.xx() - (image.width / 2 | 0), this.location.yy() - (image.height / 2 | 0));
  };
  Portal.prototype.drawName_f69bme$ = function (ctx) {
    var xOffset = 34;
    var yOffset = 18;
    ctx.drawImage(this.nameImage, this.location.xx() - xOffset, this.location.yy() + yOffset);
  };
  Portal.prototype.equals = function (other) {
    return Kotlin.isType(other, Portal) && equals(this.id, other.id);
  };
  Portal.prototype.hashCode = function () {
    return hashCode(this.id) * 31 | 0;
  };
  Portal.prototype.toString = function () {
    return this.name;
  };
  function Portal$createNameImage$lambda(closure$x, closure$y, this$Portal, closure$lineWidth) {
    return function (ctx) {
      var coords = new Coords(numberToInt(closure$x), numberToInt(closure$y));
      DrawUtil_getInstance().strokeText_lowmm9$(ctx, coords, this$Portal.name, Colors_getInstance().white, Dimensions_getInstance().portalNameFontSize, DrawUtil_getInstance().CODA, closure$lineWidth, Colors_getInstance().black);
    };
  }
  Portal.prototype.createNameImage_0 = function () {
    var fontSize = Dimensions_getInstance().portalNameFontSize;
    var lineWidth = 2.0;
    var w = 100;
    var h = fontSize + 2 * lineWidth;
    var x = lineWidth + (fontSize / 2 | 0);
    var y = lineWidth + ((fontSize * 2 | 0) / 3 | 0);
    return HtmlUtil_getInstance().prerender_yb5akz$(w, numberToInt(h), Portal$createNameImage$lambda(x, y, this, lineWidth));
  };
  function Portal$Companion() {
    Portal$Companion_instance = this;
    var $receiver = PortalLevel$values();
    var destination = ArrayList_init();
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      var $receiver_0 = Faction$values();
      var destination_0 = ArrayList_init($receiver_0.length);
      var tmp$_0;
      for (tmp$_0 = 0; tmp$_0 !== $receiver_0.length; ++tmp$_0) {
        var item = $receiver_0[tmp$_0];
        destination_0.add_11rb$(to(to(item, element), this.renderPortalCenter_qrpx09$(item, element)));
      }
      var list = destination_0;
      addAll(destination, list);
    }
    this.centerImages_0 = toMap(destination);
    this.XM_LEAK = 0.2;
    this.XM_LEAK_FREQ_MIN = 20;
    this.XM_LEAK_RADIUS_M = 40;
    this.DECAY_FREQ_H = 24;
    this.MAX_HACKS = 4;
  }
  Portal$Companion.prototype.getCenterImage_0 = function (faction, level) {
    return ensureNotNull(this.centerImages_0.get_11rb$(to(faction, level)));
  };
  Portal$Companion.prototype.renderPortalCenter_qrpx09$ = function (faction, level) {
    return this.renderPortalCenter_wc00gi$(faction.color, level);
  };
  function Portal$Companion$renderPortalCenter$lambda(closure$r, closure$lineWidth, closure$color, closure$level) {
    return function (ctx) {
      var portalCircle = new Circle(new Coords(closure$r + closure$lineWidth | 0, closure$r + closure$lineWidth | 0), closure$r);
      DrawUtil_getInstance().drawCircle_3kie0f$(ctx, portalCircle, Colors_getInstance().black, 2.0, closure$color);
      var pos = new Coords(closure$r + closure$lineWidth + (closure$level.value > 1 ? 0 : 1) | 0, closure$r + closure$lineWidth | 0);
      DrawUtil_getInstance().drawText_omkwws$(ctx, pos, closure$level.toString(), Colors_getInstance().black, 13, DrawUtil_getInstance().CODA);
    };
  }
  Portal$Companion.prototype.renderPortalCenter_wc00gi$ = function (color, level) {
    var lineWidth = 2;
    var r = numberToInt(Dimensions_getInstance().portalRadius);
    var w = (r * 2 | 0) + (2 * lineWidth | 0) | 0;
    var h = w;
    return HtmlUtil_getInstance().prerender_yb5akz$(w, h, Portal$Companion$renderPortalCenter$lambda(r, lineWidth, color, level));
  };
  Portal$Companion.prototype.clipLevel_0 = function (level) {
    var b = Math_0.min(level, 8);
    return Math_0.max(1, b);
  };
  Portal$Companion.prototype.create_lfj9be$ = function (location) {
    var emptySlot = new ResonatorSlot(null, null, 0);
    var $receiver = Octant$values();
    var destination = ArrayList_init($receiver.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var item = $receiver[tmp$];
      destination.add_11rb$(to(item, emptySlot));
    }
    var slots = toMutableMap(toMap(destination));
    var heatMap = PathUtil_getInstance().generateHeatMap_lfj9be$(location);
    var vectorField = PathUtil_getInstance().calculateVectorField_8eqwnz$(heatMap);
    return new Portal(Util_getInstance().generatePortalName(), location, heatMap, vectorField, slots, LinkedHashSet_init(), LinkedHashSet_init(), null);
  };
  Portal$Companion.prototype.createRandom = function () {
    var location = Coords$Companion_getInstance().createRandomForPortal();
    return this.create_lfj9be$(location);
  };
  Portal$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Portal$Companion_instance = null;
  function Portal$Companion_getInstance() {
    if (Portal$Companion_instance === null) {
      new Portal$Companion();
    }
    return Portal$Companion_instance;
  }
  Portal.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Portal',
    interfaces: []
  };
  Portal.prototype.component1 = function () {
    return this.name;
  };
  Portal.prototype.component2 = function () {
    return this.location;
  };
  Portal.prototype.component3 = function () {
    return this.heatMap;
  };
  Portal.prototype.component4 = function () {
    return this.vectorField;
  };
  Portal.prototype.component5 = function () {
    return this.resoSlots;
  };
  Portal.prototype.component6 = function () {
    return this.links;
  };
  Portal.prototype.component7 = function () {
    return this.fields;
  };
  Portal.prototype.component8 = function () {
    return this.owner;
  };
  Portal.prototype.copy_yps5z1$ = function (name, location, heatMap, vectorField, resoSlots, links, fields, owner) {
    return new Portal(name === void 0 ? this.name : name, location === void 0 ? this.location : location, heatMap === void 0 ? this.heatMap : heatMap, vectorField === void 0 ? this.vectorField : vectorField, resoSlots === void 0 ? this.resoSlots : resoSlots, links === void 0 ? this.links : links, fields === void 0 ? this.fields : fields, owner === void 0 ? this.owner : owner);
  };
  function PortalKey(portal, owner) {
    PortalKey$Companion_getInstance();
    this.portal = portal;
    this.owner = owner;
  }
  PortalKey.prototype.toString = function () {
    return 'Key-' + this.portal;
  };
  PortalKey.prototype.getOwnerId = function () {
    return this.owner.key();
  };
  function PortalKey$Companion() {
    PortalKey$Companion_instance = this;
  }
  PortalKey$Companion.prototype.tryHack_gju65e$ = function (portal, agent) {
    if (Util_getInstance().random() < Probabilities_getInstance().keyChance) {
      return new PortalKey(portal, agent);
    }
     else {
      return null;
    }
  };
  PortalKey$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PortalKey$Companion_instance = null;
  function PortalKey$Companion_getInstance() {
    if (PortalKey$Companion_instance === null) {
      new PortalKey$Companion();
    }
    return PortalKey$Companion_instance;
  }
  PortalKey.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PortalKey',
    interfaces: [DeployableItem]
  };
  function Quality(name, ordinal, chance, addLevels) {
    Enum.call(this);
    this.chance = chance;
    this.addLevels = addLevels;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Quality_initFields() {
    Quality_initFields = function () {
    };
    Quality$BEST_instance = new Quality('BEST', 0, 0.62, 1);
    Quality$GOOD_instance = new Quality('GOOD', 1, 0.5, 0);
    Quality$MORE_instance = new Quality('MORE', 2, 0.38, -1);
  }
  var Quality$BEST_instance;
  function Quality$BEST_getInstance() {
    Quality_initFields();
    return Quality$BEST_instance;
  }
  var Quality$GOOD_instance;
  function Quality$GOOD_getInstance() {
    Quality_initFields();
    return Quality$GOOD_instance;
  }
  var Quality$MORE_instance;
  function Quality$MORE_getInstance() {
    Quality_initFields();
    return Quality$MORE_instance;
  }
  Quality.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Quality',
    interfaces: [Enum]
  };
  function Quality$values() {
    return [Quality$BEST_getInstance(), Quality$GOOD_getInstance(), Quality$MORE_getInstance()];
  }
  Quality.values = Quality$values;
  function Quality$valueOf(name) {
    switch (name) {
      case 'BEST':
        return Quality$BEST_getInstance();
      case 'GOOD':
        return Quality$GOOD_getInstance();
      case 'MORE':
        return Quality$MORE_getInstance();
      default:throwISE('No enum constant portal.Quality.' + name);
    }
  }
  Quality.valueOf_61zpoe$ = Quality$valueOf;
  function ResonatorSlot(owner, resonator, distance) {
    this.owner = owner;
    this.resonator = resonator;
    this.distance = distance;
  }
  ResonatorSlot.prototype.isEmpty = function () {
    return this.resonator == null;
  };
  ResonatorSlot.prototype.isOwnedBy_912u9o$ = function (agent) {
    return equals(this.owner, agent.key());
  };
  ResonatorSlot.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ResonatorSlot',
    interfaces: []
  };
  ResonatorSlot.prototype.component1 = function () {
    return this.owner;
  };
  ResonatorSlot.prototype.component2 = function () {
    return this.resonator;
  };
  ResonatorSlot.prototype.component3 = function () {
    return this.distance;
  };
  ResonatorSlot.prototype.copy_liuh68$ = function (owner, resonator, distance) {
    return new ResonatorSlot(owner === void 0 ? this.owner : owner, resonator === void 0 ? this.resonator : resonator, distance === void 0 ? this.distance : distance);
  };
  ResonatorSlot.prototype.toString = function () {
    return 'ResonatorSlot(owner=' + Kotlin.toString(this.owner) + (', resonator=' + Kotlin.toString(this.resonator)) + (', distance=' + Kotlin.toString(this.distance)) + ')';
  };
  ResonatorSlot.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.owner) | 0;
    result = result * 31 + Kotlin.hashCode(this.resonator) | 0;
    result = result * 31 + Kotlin.hashCode(this.distance) | 0;
    return result;
  };
  ResonatorSlot.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.owner, other.owner) && Kotlin.equals(this.resonator, other.resonator) && Kotlin.equals(this.distance, other.distance)))));
  };
  function Checkpoint() {
    Checkpoint_instance = this;
    this.durationH = 5;
  }
  Checkpoint.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Checkpoint',
    interfaces: []
  };
  var Checkpoint_instance = null;
  function Checkpoint_getInstance() {
    if (Checkpoint_instance === null) {
      new Checkpoint();
    }
    return Checkpoint_instance;
  }
  function Com() {
    Com_instance = this;
    this.messages = ArrayList_init();
  }
  Com.prototype.addMessage_61zpoe$ = function (message) {
    this.messages.add_11rb$(message);
    if (this.messages.size > Config_getInstance().comMessageLimit) {
      this.messages.removeAt_za3lpa$(0);
    }
  };
  Com.prototype.draw_f69bme$ = function (ctx) {
    var messages = toList_0(this.messages);
    var xPos = World_getInstance().can.width - Dimensions_getInstance().comRightOffset | 0;
    var yFixOffset = World_getInstance().can.height - Dimensions_getInstance().comBottomOffset | 0;
    var yOffset = (Dimensions_getInstance().comFontSize * 3 | 0) / 2 | 0;
    var reversed_0 = reversed(messages);
    var tmp$, tmp$_0;
    var index = 0;
    tmp$ = reversed_0.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var index_0 = (tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0);
      DrawUtil_getInstance().drawText_omkwws$(ctx, new Coords(xPos, yFixOffset - Kotlin.imul(yOffset, index_0) | 0), item, Colors_getInstance().white, Dimensions_getInstance().comFontSize, DrawUtil_getInstance().CODA);
    }
  };
  Com.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Com',
    interfaces: []
  };
  var Com_instance = null;
  function Com_getInstance() {
    if (Com_instance === null) {
      new Com();
    }
    return Com_instance;
  }
  function Cycle() {
    Cycle_instance = this;
    this.durationH = 175;
    this.numberOfCheckpoints = 35;
    this.checkpoints = ArrayList_init();
  }
  Cycle.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Cycle',
    interfaces: []
  };
  var Cycle_instance = null;
  function Cycle_getInstance() {
    if (Cycle_instance === null) {
      new Cycle();
    }
    return Cycle_instance;
  }
  function Queues() {
    Queues_instance = this;
    this.attackQueue = LinkedHashMap_init();
    this.damageQueue = LinkedHashMap_init();
    this.attackDelayTicks = Util_getInstance().secondsToTicks_za3lpa$(10);
    this.damageDelayTicks = Util_getInstance().secondsToTicks_za3lpa$(10);
  }
  Queues.prototype.registerAttack_wr4det$ = function (agent, xmps) {
    var attackFutureTick = World_getInstance().tick + this.attackDelayTicks | 0;
    var attackMap = this.attackQueue.get_11rb$(attackFutureTick);
    if (attackMap == null) {
      attackMap = LinkedHashMap_init();
    }
    attackMap.put_xwzc9p$(agent.pos, xmps);
    this.attackQueue.put_xwzc9p$(attackFutureTick, attackMap);
    var damageFutureTick = World_getInstance().tick + this.damageDelayTicks | 0;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = xmps.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var list = element.dealDamage_912u9o$(agent);
      addAll(destination, list);
    }
    var damageList = destination;
    var soundLimit = 4;
    var tmp$_0;
    tmp$_0 = take(xmps, soundLimit).iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      SoundUtil_getInstance().playXmpSound_zbn281$(element_0.level, agent.pos);
    }
    this.damageQueue.put_xwzc9p$(damageFutureTick, damageList);
  };
  Queues.prototype.endTick_za3lpa$ = function (tick) {
    var $receiver = this.attackQueue;
    var destination = LinkedHashMap_init();
    var tmp$;
    tmp$ = $receiver.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.key > tick) {
        destination.put_xwzc9p$(element.key, element.value);
      }
    }
    var futureAttacks = destination;
    this.attackQueue.clear();
    this.attackQueue.putAll_a2k3zr$(futureAttacks);
    var $receiver_0 = this.damageQueue;
    var destination_0 = LinkedHashMap_init();
    var tmp$_0;
    tmp$_0 = $receiver_0.entries.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      if (element_0.key > tick) {
        destination_0.put_xwzc9p$(element_0.key, element_0.value);
      }
    }
    var futureDamages = destination_0;
    this.damageQueue.clear();
    this.damageQueue.putAll_a2k3zr$(futureDamages);
  };
  Queues.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Queues',
    interfaces: []
  };
  var Queues_instance = null;
  function Queues_getInstance() {
    if (Queues_instance === null) {
      new Queues();
    }
    return Queues_instance;
  }
  function ColorUtil() {
    ColorUtil_instance = this;
    this.MAX_RGB = 255;
  }
  ColorUtil.prototype.getColor_p4p8i0$ = function (c) {
    return this.getColorFromMagnitudeAndPhase_0(c.magnitude, c.phase);
  };
  ColorUtil.prototype.getColorFromMagnitudeAndPhase_0 = function (magnitude, phase) {
    if (magnitude <= 1.0 / this.MAX_RGB) {
      return Colors_getInstance().black;
    }
    var mag = Math_0.min(1.0, magnitude);
    var clippedPhase = phase < 0.0 ? phase + Constants_getInstance().tau : phase;
    var p = clippedPhase * 6.0 / Constants_getInstance().tau;
    var b = Math_0.max(0.0, p);
    var range = numberToInt(Math_0.min(5.0, b));
    var fraction = p - range;
    var rgbValues = this.getFullSpectrum_0(range, fraction);
    var maxMag = mag * this.MAX_RGB;
    var red = numberToInt(rgbValues.first * maxMag);
    var green = numberToInt(rgbValues.second * maxMag);
    var blue = numberToInt(rgbValues.third * maxMag);
    return '#' + this.toHexString_0(red) + this.toHexString_0(green) + this.toHexString_0(blue);
  };
  ColorUtil.prototype.toHexString_0 = function (int) {
    var $receiver = toByte(int);
    var other = kotlin_js_internal_ByteCompanionObject.MAX_VALUE;
    var v = Kotlin.toByte($receiver & other);
    return String.fromCharCode(Constants_getInstance().hexChars.charCodeAt(v >>> 4)) + String.fromCharCode(toBoxedChar(Constants_getInstance().hexChars.charCodeAt(v & 15)));
  };
  ColorUtil.prototype.getFullSpectrum_0 = function (range, fraction) {
    if (range === 0)
      return new Triple(1.0, fraction, 0.0);
    else if (range === 1)
      return new Triple(1.0 - fraction, 1.0, 0.0);
    else if (range === 2)
      return new Triple(0.0, 1.0, fraction);
    else if (range === 3)
      return new Triple(0.0, 1.0 - fraction, 1.0);
    else if (range === 4)
      return new Triple(fraction, 0.0, 1.0);
    else if (range === 5)
      return new Triple(1.0, 0.0, 1.0 - fraction);
    else
      throw new IllegalArgumentException('Out of range: ' + toString(range));
  };
  ColorUtil.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ColorUtil',
    interfaces: []
  };
  var ColorUtil_instance = null;
  function ColorUtil_getInstance() {
    if (ColorUtil_instance === null) {
      new ColorUtil();
    }
    return ColorUtil_instance;
  }
  function DrawUtil() {
    DrawUtil_instance = this;
    this.CODA = 'Coda';
    this.AMARILLO = 'AmarilloUSAF';
    var $receiver = new IntRange(0, 100);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(to(item, this.createDamageImage_0(item, false)));
    }
    this.damageImages_0 = toMap(destination);
    var $receiver_0 = new IntRange(0, 100);
    var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_0;
    tmp$_0 = $receiver_0.iterator();
    while (tmp$_0.hasNext()) {
      var item_0 = tmp$_0.next();
      destination_0.add_11rb$(to(item_0, this.createDamageImage_0(item_0, true)));
    }
    this.critDamageImages_0 = toMap(destination_0);
    var $receiver_1 = XmpLevel$values();
    var destination_1 = ArrayList_init();
    var tmp$_1;
    for (tmp$_1 = 0; tmp$_1 !== $receiver_1.length; ++tmp$_1) {
      var element = $receiver_1[tmp$_1];
      var $receiver_2 = new IntRange(0, Queues_getInstance().attackDelayTicks);
      var destination_2 = ArrayList_init(collectionSizeOrDefault($receiver_2, 10));
      var tmp$_2;
      tmp$_2 = $receiver_2.iterator();
      while (tmp$_2.hasNext()) {
        var item_1 = tmp$_2.next();
        destination_2.add_11rb$(to(to(element, item_1), this.createDamageCircleImage_0(element, item_1)));
      }
      var list = destination_2;
      addAll(destination_1, list);
    }
    this.damageCircleImages_0 = toMap(destination_1);
    this.VECTORS_0 = LinkedHashMap_init();
  }
  DrawUtil.prototype.redraw = function () {
    var $receiver = World_getInstance();
    this.redraw_0($receiver.can, $receiver.ctx());
    var tmp$;
    tmp$ = $receiver.allAgents.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.drawRadius_f69bme$($receiver.ctx());
    }
    var tmp$_0;
    tmp$_0 = $receiver.allPortals.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      element_0.drawResonators_f69bme$($receiver.ctx());
    }
    var tmp$_1;
    tmp$_1 = $receiver.allNonFaction.iterator();
    while (tmp$_1.hasNext()) {
      var element_1 = tmp$_1.next();
      element_1.draw_f69bme$($receiver.ctx());
    }
    var tmp$_2;
    tmp$_2 = $receiver.allFields().iterator();
    while (tmp$_2.hasNext()) {
      var element_2 = tmp$_2.next();
      element_2.draw_f69bme$($receiver.ctx());
    }
    var tmp$_3;
    tmp$_3 = $receiver.allLinks().iterator();
    while (tmp$_3.hasNext()) {
      var element_3 = tmp$_3.next();
      element_3.draw_f69bme$($receiver.ctx());
    }
    var tmp$_4;
    tmp$_4 = $receiver.allPortals.iterator();
    while (tmp$_4.hasNext()) {
      var element_4 = tmp$_4.next();
      element_4.drawCenter_f69bme$($receiver.ctx());
    }
    var tmp$_5;
    tmp$_5 = $receiver.allAgents.iterator();
    while (tmp$_5.hasNext()) {
      var element_5 = tmp$_5.next();
      element_5.draw_f69bme$($receiver.ctx());
    }
    DrawUtil_getInstance().drawAttacks();
    if (Styles_getInstance().isDrawPortalNames) {
      var tmp$_6;
      tmp$_6 = $receiver.allPortals.iterator();
      while (tmp$_6.hasNext()) {
        var element_6 = tmp$_6.next();
        element_6.drawName_f69bme$($receiver.ctx());
      }
    }
  };
  DrawUtil.prototype.clearBackground = function () {
    this.redraw_0(World_getInstance().bgCan, World_getInstance().bgCtx(), Styles_getInstance().isDrawNoiseMap ? World_getInstance().noiseImage : null);
  };
  DrawUtil.prototype.clearUserInterface = function () {
    this.redraw_0(World_getInstance().uiCan, World_getInstance().uiCtx());
  };
  DrawUtil.prototype.clear = function () {
    this.redraw_0(World_getInstance().can, World_getInstance().ctx());
  };
  DrawUtil.prototype.redraw_0 = function (canvas, ctx, image) {
    if (image === void 0)
      image = null;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    if (image != null) {
      ctx.putImageData(image, 0.0, 0.0);
    }
     else {
      ctx.clearRect(0.0, 0.0, canvas.width, canvas.height);
    }
  };
  DrawUtil.prototype.drawLoadingText_61zpoe$ = function (text) {
    this.clearUserInterface();
    var fontSize = 21;
    var y = World_getInstance().uiCan.height / 2 | 0;
    var x = (World_getInstance().uiCan.width - (Kotlin.imul(text.length, fontSize) / 2 | 0) | 0) / 2 | 0;
    var lineWidth = 3.0;
    var strokeStyle = Colors_getInstance().black;
    this.strokeText_lowmm9$(World_getInstance().uiCtx(), new Coords(x, y), text, Colors_getInstance().white, fontSize, this.AMARILLO, lineWidth, strokeStyle);
  };
  DrawUtil.prototype.drawNonFaction_3mzr9k$ = function (nonFaction) {
    nonFaction.draw_f69bme$(World_getInstance().ctx());
  };
  DrawUtil.prototype.drawAllNonFaction_f69bme$ = function (ctx) {
    var tmp$;
    tmp$ = World_getInstance().allNonFaction.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.draw_f69bme$(ctx);
    }
  };
  DrawUtil.prototype.drawAllPortals_f69bme$ = function (ctx) {
    var tmp$;
    tmp$ = World_getInstance().allPortals.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.drawCenter_f69bme$(ctx);
    }
  };
  DrawUtil.prototype.redrawUserInterface = function () {
    this.clearUserInterface();
    this.drawTick();
    this.drawMindUnits();
    this.drawStats();
    if (Styles_getInstance().isDrawCom) {
      Com_getInstance().draw_f69bme$(World_getInstance().uiCtx());
    }
    if (Styles_getInstance().isDrawTopAgents) {
      this.drawTopAgents();
    }
    if (World_getInstance().mousePos != null) {
      this.highlightMouse_0(ensureNotNull(World_getInstance().mousePos));
    }
  };
  DrawUtil.prototype.highlightMouse_0 = function (pos) {
    var tmp$, tmp$_0, tmp$_1;
    var ctx = World_getInstance().uiCtx();
    var topOffset = Dimensions_getInstance().topActionOffset;
    var botOffset = window.innerHeight - Dimensions_getInstance().botActionOffset;
    var w = World_getInstance().can.width;
    var h = World_getInstance().can.height;
    World_getInstance().ctx().beginPath();
    World_getInstance().ctx().fillStyle = '#00000077';
    World_getInstance().ctx().fillRect(0.0, 0.0, w, topOffset);
    World_getInstance().ctx().fillRect(0.0, botOffset, w, h);
    World_getInstance().ctx().closePath();
    var r = Dimensions_getInstance().maxDeploymentRange * Constants_getInstance().phi;
    var circle = new Circle(pos, r);
    var tempCan = Kotlin.isType(tmp$ = document.createElement('canvas'), HTMLCanvasElement) ? tmp$ : throwCCE();
    var tempCtx = Kotlin.isType(tmp$_0 = tempCan.getContext('2d'), CanvasRenderingContext2D) ? tmp$_0 : throwCCE();
    tempCan.width = 2 * numberToInt(circle.radius) | 0;
    tempCan.height = 2 * numberToInt(circle.radius) | 0;
    var xOffset = -(circle.center.xx() - r);
    var yOffset = -(circle.center.yy() - r);
    tempCtx.putImageData(World_getInstance().shadowStreetMap, xOffset, yOffset);
    ctx.beginPath();
    ctx.arc(circle.center.xx(), circle.center.yy(), circle.radius, 0.0, 2.0 * math.PI);
    ctx.clip();
    ctx.beginPath();
    ctx.drawImage(tempCan, pos.xx() - r, pos.yy() - r, 2 * r, 2 * r);
    ctx.globalAlpha = 0.5;
    if (pos.hasClosePortal()) {
      tmp$_1 = Colors_getInstance().orange;
    }
     else if (pos.isBuildable()) {
      tmp$_1 = Colors_getInstance().white;
    }
     else {
      tmp$_1 = Colors_getInstance().red;
    }
    var color = tmp$_1;
    var image = Portal$Companion_getInstance().renderPortalCenter_wc00gi$(color, PortalLevel$ZERO_getInstance());
    ctx.drawImage(image, pos.xx() - (image.width / 2 | 0), pos.yy() - (image.height / 2 | 0));
  };
  DrawUtil.prototype.drawAttacks = function () {
    var attackQueue = Queues_getInstance().attackQueue;
    var tmp$;
    tmp$ = attackQueue.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var futureTick = element.key;
      var ticksInFuture = futureTick - World_getInstance().tick | 0;
      var attackMap = element.value;
      var tmp$_0;
      tmp$_0 = attackMap.entries.iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        var pos = element_0.key;
        var bursters = element_0.value;
        var tmp$_1;
        tmp$_1 = bursters.iterator();
        while (tmp$_1.hasNext()) {
          var element_1 = tmp$_1.next();
          var image = this.damageCircleImages_0.get_11rb$(to(element_1.level, ticksInFuture));
          if (image != null) {
            World_getInstance().ctx().drawImage(image, pos.xx() - (image.width / 2 | 0), pos.yy() - (image.height / 2 | 0));
          }
        }
      }
    }
    var r = numberToInt(Dimensions_getInstance().maxDeploymentRange);
    var damageQueue = Queues_getInstance().damageQueue;
    var tmp$_2;
    tmp$_2 = damageQueue.entries.iterator();
    while (tmp$_2.hasNext()) {
      var element_2 = tmp$_2.next();
      var futureTick_0 = element_2.key;
      var ticksInFuture_0 = futureTick_0 - World_getInstance().tick | 0;
      var ratio = (Queues_getInstance().damageDelayTicks - ticksInFuture_0 | 0) / Queues_getInstance().damageDelayTicks | 0;
      var damageList = element_2.value;
      var tmp$_3;
      tmp$_3 = damageList.iterator();
      while (tmp$_3.hasNext()) {
        var element_3 = tmp$_3.next();
        var pos_0 = element_3.pos;
        var lineWidth = 3;
        var newPos = pos_0.copy_vux9f0$(pos_0.x - r + lineWidth | 0, pos_0.y - ratio - lineWidth | 0);
        var image_0 = this.getImage_0(element_3);
        World_getInstance().ctx().drawImage(image_0, newPos.xx(), newPos.yy());
      }
    }
    Queues_getInstance().endTick_za3lpa$(World_getInstance().tick);
  };
  DrawUtil.prototype.getImage_0 = function (damage) {
    var tmp$;
    var a = damage.value;
    var damagePercent = Math_0.min(a, 100);
    if (damage.isCritical) {
      tmp$ = getValue(this.critDamageImages_0, damagePercent);
    }
     else {
      tmp$ = getValue(this.damageImages_0, damagePercent);
    }
    return tmp$;
  };
  function DrawUtil$createDamageImage$lambda(closure$lineWidth, closure$fontSize, closure$damageValue, closure$isCritical, this$DrawUtil) {
    return function (ctx) {
      var coords = new Coords(numberToInt(closure$lineWidth) + ((closure$fontSize * 3 | 0) / 2 | 0) | 0, numberToInt(closure$lineWidth) + (closure$fontSize / 2 | 0) | 0);
      var a = closure$damageValue;
      var clipped = Math_0.max(a, 1).toString();
      var color = closure$isCritical ? Colors_getInstance().critDamage : Colors_getInstance().damage;
      var text = '-' + clipped + '%';
      this$DrawUtil.strokeText_lowmm9$(ctx, coords, text, Colors_getInstance().white, closure$fontSize, this$DrawUtil.CODA, closure$lineWidth, color);
    };
  }
  DrawUtil.prototype.createDamageImage_0 = function (damageValue, isCritical) {
    var fontSize = 11;
    var lineWidth = 3.0;
    var w = (fontSize * 5 | 0) + 2 * lineWidth;
    var h = fontSize + 2 * lineWidth;
    return HtmlUtil_getInstance().prerender_yb5akz$(numberToInt(w), numberToInt(h), DrawUtil$createDamageImage$lambda(lineWidth, fontSize, damageValue, isCritical, this));
  };
  function DrawUtil$createDamageCircleImage$lambda(closure$r, closure$lineWidth, closure$strokeStyle, closure$fillStyle, this$DrawUtil) {
    return function (ctx) {
      var attackCircle = new Circle(new Coords(closure$r + closure$lineWidth | 0, closure$r + closure$lineWidth | 0), closure$r);
      this$DrawUtil.drawCircle_3kie0f$(ctx, attackCircle, closure$strokeStyle, closure$lineWidth, closure$fillStyle);
    };
  }
  DrawUtil.prototype.createDamageCircleImage_0 = function (xmpLevel, ticksInFuture) {
    var strokeStyle = '#ff731533';
    var fillStyle = '#fece5a11';
    var lineWidth = 8;
    var ratio = (Queues_getInstance().damageDelayTicks - ticksInFuture | 0) / Queues_getInstance().damageDelayTicks | 0;
    var r = Kotlin.imul(xmpLevel.rangeM, ratio) / 2 | 0;
    var w = (r * 2 | 0) + (2 * lineWidth | 0) | 0;
    var h = w;
    return HtmlUtil_getInstance().prerender_yb5akz$(w, h, DrawUtil$createDamageCircleImage$lambda(r, lineWidth, strokeStyle, fillStyle, this));
  };
  function DrawUtil$drawStats$drawCell(closure$fontSize, this$DrawUtil, closure$lineWidth) {
    return function (pos, text, color) {
      this$DrawUtil.strokeText_lowmm9$(World_getInstance().uiCtx(), pos, text, color, closure$fontSize, this$DrawUtil.CODA, closure$lineWidth, Colors_getInstance().black, 'end');
    };
  }
  function DrawUtil$drawStats$drawRow(closure$yStep, closure$drawCell) {
    return function (pos, header, enl, res, total) {
      closure$drawCell(new Coords(pos, closure$yStep), header, Colors_getInstance().white);
      closure$drawCell(new Coords(pos, closure$yStep * 2 | 0), enl.toString(), Faction$ENL_getInstance().color);
      closure$drawCell(new Coords(pos, closure$yStep * 3 | 0), res.toString(), Faction$RES_getInstance().color);
      closure$drawCell(new Coords(pos, closure$yStep * 4 | 0), total.toString(), Colors_getInstance().white);
    };
  }
  DrawUtil.prototype.drawStats = function () {
    var fontSize = Dimensions_getInstance().statsFontSize;
    var lineWidth = 3.0;
    var drawCell = DrawUtil$drawStats$drawCell(fontSize, this, lineWidth);
    var rightXOffset = 300;
    var yStep = (fontSize * 3 | 0) / 2 | 0;
    var xStep = 55;
    var drawRow = DrawUtil$drawStats$drawRow(yStep, drawCell);
    var xPos = World_getInstance().can.width - rightXOffset | 0;
    var $receiver = World_getInstance();
    var tmp$;
    tmp$ = (new IntRange(1, 4)).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element === 1)
        drawRow(xPos, 'Agents', $receiver.countAgents_bip15f$(Faction$ENL_getInstance()), $receiver.countAgents_bip15f$(Faction$RES_getInstance()), $receiver.countAgents());
      else if (element === 2)
        drawRow(xPos + xStep | 0, 'Portals', $receiver.countPortals_bip15f$(Faction$ENL_getInstance()), $receiver.countPortals_bip15f$(Faction$RES_getInstance()), $receiver.countPortals());
      else if (element === 3)
        drawRow(xPos + (xStep * 2 | 0) | 0, 'Links', $receiver.countLinks_bip15f$(Faction$ENL_getInstance()), $receiver.countLinks_bip15f$(Faction$RES_getInstance()), $receiver.countLinks());
      else if (element === 4)
        drawRow(xPos + (xStep * 3 | 0) | 0, 'Fields', $receiver.countFields_bip15f$(Faction$ENL_getInstance()), $receiver.countFields_bip15f$(Faction$RES_getInstance()), $receiver.countFields());
    }
    return Unit;
  };
  DrawUtil.prototype.drawTick = function () {
    var pos = new Coords(13, World_getInstance().uiCan.height - Dimensions_getInstance().tickBottomOffset | 0);
    var half = Dimensions_getInstance().tickFontSize / 2 | 0;
    World_getInstance().uiCtx().fillStyle = '#00000077';
    World_getInstance().uiCtx().fillRect(pos.xx() - 8, pos.yy() - half - 1, 164.0, Dimensions_getInstance().tickFontSize + 2.0);
    World_getInstance().uiCtx().fill();
    World_getInstance().uiCtx().globalAlpha = 3.0;
    var stamp = Util_getInstance().ticksToTimestamp_za3lpa$(World_getInstance().tick);
    this.drawText_omkwws$(World_getInstance().uiCtx(), pos, stamp, Colors_getInstance().white, Dimensions_getInstance().tickFontSize, this.CODA);
    var tick = ' Tick: ' + toString(World_getInstance().tick);
    this.drawText_omkwws$(World_getInstance().uiCtx(), pos.copy_vux9f0$(pos.x + 55 | 0), tick, Colors_getInstance().white, Dimensions_getInstance().tickFontSize, this.CODA);
  };
  function DrawUtil$drawMindUnits$fillMuRect(from, width, height, fillStyle, strokeStyle, lineWidth) {
    var $receiver = World_getInstance();
    if (Styles_getInstance().isFillMuDisplay) {
      $receiver.uiCtx().globalAlpha = 0.3;
      $receiver.uiCtx().fillStyle = fillStyle;
      $receiver.uiCtx().fillRect(from.x, from.y, width, height);
    }
    $receiver.uiCtx().strokeStyle = strokeStyle;
    $receiver.uiCtx().globalAlpha = 1.0;
    $receiver.uiCtx().lineWidth = lineWidth;
    $receiver.uiCtx().beginPath();
    $receiver.uiCtx().strokeRect(from.x, from.y, width, height);
    $receiver.uiCtx().closePath();
    $receiver.uiCtx().stroke();
  }
  function DrawUtil$drawMindUnits$drawMuRect(closure$fillMuRect, this$DrawUtil) {
    return function (pos, part, faction, mu) {
      var fromRect = new Coords(pos.x, pos.y - Dimensions_getInstance().muFontSize | 0);
      var width = 1.5 * part;
      var height = Dimensions_getInstance().muFontSize * Constants_getInstance().phi;
      closure$fillMuRect(fromRect, width, height, faction.color, faction.color, 3.0);
      var text = faction.abbr + ' ' + toString(mu) + 'M';
      var textPos = new Coords(pos.x + 21 | 0, pos.y - 3 | 0);
      this$DrawUtil.strokeText_lowmm9$(World_getInstance().uiCtx(), textPos, text, faction.color, Dimensions_getInstance().muFontSize, this$DrawUtil.AMARILLO);
    };
  }
  DrawUtil.prototype.drawMindUnits = function () {
    var fillMuRect = DrawUtil$drawMindUnits$fillMuRect;
    var drawMuRect = DrawUtil$drawMindUnits$drawMuRect(fillMuRect, this);
    var enlMu = World_getInstance().calcTotalMu_bip15f$(Faction$ENL_getInstance());
    var resMu = World_getInstance().calcTotalMu_bip15f$(Faction$RES_getInstance());
    var totalMu = enlMu + resMu | 0;
    var enlPart = numberToInt(round(100.0 * enlMu / totalMu));
    var resPart = numberToInt(round(100.0 * resMu / totalMu));
    var xPos = Dimensions_getInstance().muLeftOffset;
    var yPos = World_getInstance().can.height - Dimensions_getInstance().muBottomOffset | 0;
    var enlPos = new Coords(xPos, yPos - (Dimensions_getInstance().muFontSize * 2 | 0) | 0);
    var resPos = new Coords(xPos, yPos);
    drawMuRect(enlPos, enlPart, Faction$ENL_getInstance(), enlMu);
    drawMuRect(resPos, resPart, Faction$RES_getInstance(), resMu);
  };
  function DrawUtil$drawTopAgents$lambda(it) {
    return -it.ap;
  }
  var mapCapacity = Kotlin.kotlin.collections.mapCapacity_za3lpa$;
  var LinkedHashMap_init_0 = Kotlin.kotlin.collections.LinkedHashMap_init_xf5xz2$;
  var compareBy$lambda_12 = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function Comparator$ObjectLiteral_13(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral_13.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral_13.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  DrawUtil.prototype.drawTopAgents = function () {
    var ctx = World_getInstance().uiCtx();
    var xPos = Dimensions_getInstance().topAgentsLeftOffset;
    var yOffset = (Dimensions_getInstance().topAgentsFontSize * 3 | 0) / 2 | 0;
    var xOffset = numberToInt(Dimensions_getInstance().topAgentsInventoryFontSize * Constants_getInstance().phi);
    var yFixOffset = World_getInstance().can.height - Dimensions_getInstance().topAgentsBottomOffset - Kotlin.imul(Config_getInstance().topAgentsMessageLimit, yOffset) | 0;
    var headerPos = new Coords(xPos, yFixOffset - yOffset | 0);
    var top = take(sortedWith(toList_0(World_getInstance().allAgents), new Comparator$ObjectLiteral_13(compareBy$lambda_12(DrawUtil$drawTopAgents$lambda))), Config_getInstance().topAgentsMessageLimit);
    var headerText = 'Agent AP                                               ' + 'XMPs                                                             ' + 'Resos                                                            ' + 'Keys';
    this.strokeText_lowmm9$(ctx, headerPos, headerText, Colors_getInstance().white, Dimensions_getInstance().topAgentsInventoryFontSize, this.CODA, 2.0, Colors_getInstance().black);
    var invFontSize = Dimensions_getInstance().topAgentsInventoryFontSize;
    var tmp$, tmp$_0;
    var index = 0;
    tmp$ = top.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var index_0 = (tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0);
      var tmp$_1, tmp$_2, tmp$_3;
      var rank = (index_0 + 1 | 0).toString();
      var name = item.toString();
      var ap = item.ap;
      var text = rank + ': ' + ap + ' ' + name;
      var pos = new Coords(xPos, yFixOffset + Kotlin.imul(yOffset, index_0) | 0);
      this.strokeText_lowmm9$(ctx, pos, text, item.faction.color, Dimensions_getInstance().topAgentsFontSize, this.CODA, 3.0, Colors_getInstance().black);
      var columnOff = 160;
      var tmp$_4;
      if ((tmp$_1 = item.inventory.findXmps()) != null) {
        var destination = LinkedHashMap_init();
        var tmp$_5;
        tmp$_5 = tmp$_1.iterator();
        while (tmp$_5.hasNext()) {
          var element = tmp$_5.next();
          var key = element.level;
          var tmp$_0_0;
          var value = destination.get_11rb$(key);
          if (value == null) {
            var answer = ArrayList_init();
            destination.put_xwzc9p$(key, answer);
            tmp$_0_0 = answer;
          }
           else {
            tmp$_0_0 = value;
          }
          var list = tmp$_0_0;
          list.add_11rb$(element);
        }
        tmp$_4 = destination;
      }
       else
        tmp$_4 = null;
      var xmpGroups = tmp$_4;
      var tmp$_6;
      if (xmpGroups != null) {
        var destination_0 = LinkedHashMap_init_0(mapCapacity(xmpGroups.size));
        var tmp$_7;
        tmp$_7 = xmpGroups.entries.iterator();
        while (tmp$_7.hasNext()) {
          var element_0 = tmp$_7.next();
          destination_0.put_xwzc9p$(element_0.key, element_0.value.size);
        }
        tmp$_6 = destination_0;
      }
       else
        tmp$_6 = null;
      var xmpLevels = tmp$_6;
      var $receiver = XmpLevel$values();
      var tmp$_8, tmp$_0_1;
      var index_1 = 0;
      for (tmp$_8 = 0; tmp$_8 !== $receiver.length; ++tmp$_8) {
        var item_0 = $receiver[tmp$_8];
        var tmp$_9, tmp$_10;
        var xmpPos = new Coords(xPos + columnOff + Kotlin.imul(xOffset, (tmp$_0_1 = index_1, index_1 = tmp$_0_1 + 1 | 0, tmp$_0_1)) | 0, yFixOffset + Kotlin.imul(yOffset, index_0) | 0);
        var a = (tmp$_9 = xmpLevels != null ? xmpLevels.get_11rb$(item_0) : null) != null ? tmp$_9 : 0;
        var clipped = Math_0.min(a, 100);
        if (clipped <= 99) {
          tmp$_10 = clipped.toString();
        }
         else
          tmp$_10 = '##';
        var xmpText = tmp$_10;
        this.strokeText_lowmm9$(ctx, xmpPos, xmpText, item_0.color, invFontSize, this.CODA, 2.0, Colors_getInstance().black, 'end');
      }
      var tmp$_11;
      if ((tmp$_2 = item.inventory.findResonators()) != null) {
        var destination_1 = LinkedHashMap_init();
        var tmp$_12;
        tmp$_12 = tmp$_2.iterator();
        while (tmp$_12.hasNext()) {
          var element_1 = tmp$_12.next();
          var key_0 = element_1.level;
          var tmp$_0_2;
          var value_0 = destination_1.get_11rb$(key_0);
          if (value_0 == null) {
            var answer_0 = ArrayList_init();
            destination_1.put_xwzc9p$(key_0, answer_0);
            tmp$_0_2 = answer_0;
          }
           else {
            tmp$_0_2 = value_0;
          }
          var list_0 = tmp$_0_2;
          list_0.add_11rb$(element_1);
        }
        tmp$_11 = destination_1;
      }
       else
        tmp$_11 = null;
      var resoGroups = tmp$_11;
      var tmp$_13;
      if (resoGroups != null) {
        var destination_2 = LinkedHashMap_init_0(mapCapacity(resoGroups.size));
        var tmp$_14;
        tmp$_14 = resoGroups.entries.iterator();
        while (tmp$_14.hasNext()) {
          var element_2 = tmp$_14.next();
          destination_2.put_xwzc9p$(element_2.key, element_2.value.size);
        }
        tmp$_13 = destination_2;
      }
       else
        tmp$_13 = null;
      var resoLevels = tmp$_13;
      var $receiver_0 = ResonatorLevel$values();
      var tmp$_15, tmp$_0_3;
      var index_2 = 0;
      for (tmp$_15 = 0; tmp$_15 !== $receiver_0.length; ++tmp$_15) {
        var item_1 = $receiver_0[tmp$_15];
        var tmp$_16, tmp$_17;
        var resoPos = new Coords(xPos + (2 * columnOff | 0) + Kotlin.imul(xOffset, (tmp$_0_3 = index_2, index_2 = tmp$_0_3 + 1 | 0, tmp$_0_3)) | 0, yFixOffset + Kotlin.imul(yOffset, index_0) | 0);
        var a_0 = (tmp$_16 = resoLevels != null ? resoLevels.get_11rb$(item_1) : null) != null ? tmp$_16 : 0;
        var clipped_0 = Math_0.min(a_0, 100);
        if (clipped_0 <= 99) {
          tmp$_17 = clipped_0.toString();
        }
         else
          tmp$_17 = '##';
        var resoText = tmp$_17;
        this.strokeText_lowmm9$(ctx, resoPos, resoText, item_1.color, invFontSize, this.CODA, 2.0, Colors_getInstance().black, 'end');
      }
      var a_1 = item.inventory.keyCount();
      var clipped_1 = Math_0.min(a_1, 100);
      if (clipped_1 <= 99) {
        tmp$_3 = clipped_1.toString();
      }
       else
        tmp$_3 = '##';
      var keyText = tmp$_3;
      var keyPos = new Coords(xPos + (3 * columnOff | 0) | 0, yFixOffset + Kotlin.imul(yOffset, index_0) | 0);
      this.strokeText_lowmm9$(ctx, keyPos, keyText, Colors_getInstance().white, invFontSize, this.CODA, 2.0, Colors_getInstance().black, 'end');
    }
  };
  DrawUtil.prototype.drawGrid = function () {
    this.clearBackground();
    var $receiver = World_getInstance();
    if ($receiver.isReady) {
      var tmp$;
      tmp$ = $receiver.grid.entries.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var pos = PathUtil_getInstance().shadowPosToPos_lfj9be$(element.key);
        var cell = element.value;
        $receiver.bgCtx().fillStyle = cell.getColor();
        $receiver.bgCtx().fillRect(pos.xx() + 1, pos.yy() + 1, PathUtil_getInstance().RESOLUTION - 1, PathUtil_getInstance().RESOLUTION - 1);
        $receiver.bgCtx().fill();
      }
    }
  };
  DrawUtil.prototype.drawVectorField_hv9zn6$ = function (portal) {
    this.drawVectorField_v4iyov$(portal.vectorField);
    portal.drawCenter_f69bme$(World_getInstance().bgCtx());
  };
  function DrawUtil$drawVectorField$lambda$lambda$isWalkable(closure$it) {
    return function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = World_getInstance().grid.get_11rb$(closure$it.key)) != null ? tmp$.isPassable : null) != null ? tmp$_0 : false;
    };
  }
  DrawUtil.prototype.drawVectorField_v4iyov$ = function (vectorField) {
    World_getInstance().bgCtx().clearRect(0.0, 0.0, World_getInstance().can.width, World_getInstance().can.height);
    var w = PathUtil_getInstance().RESOLUTION - 1 | 0;
    var h = PathUtil_getInstance().RESOLUTION - 1 | 0;
    World_getInstance();
    var tmp$;
    tmp$ = vectorField.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var isWalkable = DrawUtil$drawVectorField$lambda$lambda$isWalkable(element);
      if (Styles_getInstance().isDrawObstructedVectors || isWalkable()) {
        var vectorImageData = this.getOrCreateVectorImageData_0(w, h, element.value);
        var pos = PathUtil_getInstance().shadowPosToPos_lfj9be$(element.key);
        World_getInstance().bgCtx().putImageData(vectorImageData, pos.xx(), pos.yy());
      }
    }
  };
  DrawUtil.prototype.getOrCreateVectorImageData_0 = function (w, h, complex) {
    var tmp$;
    var center = PathUtil_getInstance().RESOLUTION / 2 | 0;
    var scale = center;
    var scaled = Complex$Companion_getInstance().fromMagnitudeAndPhase_5nl2e7$(complex.magnitude * scale, complex.phase);
    var line = new Line(new Coords(center, center), new Coords(center + numberToInt(scaled.re) | 0, center + numberToInt(scaled.im) | 0));
    var maybeImage = this.VECTORS_0.get_11rb$(line);
    if (maybeImage != null) {
      return maybeImage;
    }
     else {
      var newImageCan = this.createVectorImage_0(w, h, complex, line);
      var newImageCtx = Kotlin.isType(tmp$ = newImageCan.getContext('2d'), CanvasRenderingContext2D) ? tmp$ : throwCCE();
      var imageData = newImageCtx.getImageData(0, 0, w, h);
      this.VECTORS_0.put_xwzc9p$(line, imageData);
      return imageData;
    }
  };
  function DrawUtil$createVectorImage$lambda(closure$w, closure$h, closure$complex, closure$line, this$DrawUtil) {
    return function (ctx) {
      var tmp$;
      ctx.fillStyle = '#ffffff22';
      tmp$ = Styles_getInstance().vectorStyle;
      if (equals(tmp$, Styles$VectorStyle$CIRCLE_getInstance())) {
        var r = closure$w / 2.0;
        var path = new Path2D();
        path.moveTo(r, r);
        path.arc(r, r, r, 0.0, 2.0 * math.PI);
        ctx.fill(path);
      }
       else if (equals(tmp$, Styles$VectorStyle$SQUARE_getInstance())) {
        ctx.fillRect(1.0, 1.0, closure$w, closure$h);
        ctx.fill();
      }
      var lineWidth = 2.0;
      var strokeStyle = ColorUtil_getInstance().getColor_p4p8i0$(closure$complex) + 'AA';
      this$DrawUtil.drawLine_1fs0nm$(ctx, closure$line, strokeStyle, lineWidth);
    };
  }
  DrawUtil.prototype.createVectorImage_0 = function (w, h, complex, line) {
    return HtmlUtil_getInstance().prerender_yb5akz$(w, h, DrawUtil$createVectorImage$lambda(w, h, complex, line, this));
  };
  DrawUtil.prototype.drawText_omkwws$ = function (ctx, coords, text, fillStyle, fontSize, fontName) {
    World_getInstance();
    ctx.textAlign = 'start';
    ctx.font = fontSize.toString() + ("px '" + fontName + "'");
    ctx.fillStyle = fillStyle;
    var xOff = (fontSize / 2 | 0) - 2 | 0;
    var yOff = fontSize / 3 | 0;
    ctx.fillText(text, coords.x - xOff, coords.y + yOff);
  };
  DrawUtil.prototype.strokeText_lowmm9$ = function (ctx, coords, text, fillStyle, fontSize, fontName, lineWidth, strokeStyle, textAlign) {
    if (fontName === void 0)
      fontName = this.CODA;
    if (lineWidth === void 0)
      lineWidth = 0.0;
    if (strokeStyle === void 0)
      strokeStyle = Colors_getInstance().black;
    if (textAlign === void 0) {
      textAlign = 'start';
    }
    var xOff = fontSize / 2.0 - 2;
    var yOff = fontSize / 3.0;
    World_getInstance();
    ctx.beginPath();
    ctx.font = fontSize.toString() + ("px '" + fontName + "'");
    ctx.fillStyle = fillStyle;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.textAlign = textAlign;
    if (lineWidth > 0.0) {
      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = strokeStyle;
      ctx.strokeText(text, coords.x - xOff, coords.y + yOff);
    }
    ctx.fillText(text, coords.x - xOff, coords.y + yOff);
    ctx.closePath();
    if (lineWidth > 0.0) {
      ctx.stroke();
    }
  };
  DrawUtil.prototype.drawCircle_3kie0f$ = function (ctx, circle, strokeStyle, lineWidth, fillStyle, alpha) {
    if (fillStyle === void 0)
      fillStyle = null;
    if (alpha === void 0)
      alpha = 1.0;
    World_getInstance();
    ctx.globalAlpha = alpha;
    ctx.strokeStyle = strokeStyle;
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.arc(circle.center.xx(), circle.center.yy(), circle.radius, 0.0, 2.0 * math.PI);
    ctx.closePath();
    ctx.stroke();
    if (fillStyle != null) {
      ctx.fillStyle = fillStyle;
      ctx.fill();
    }
    ctx.globalAlpha = 1.0;
  };
  DrawUtil.prototype.drawLine_1fs0nm$ = function (ctx, line, strokeStyle, lineWidth) {
    ctx.strokeStyle = strokeStyle;
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.moveTo(line.from.xx(), line.from.yy());
    ctx.lineTo(line.to.xx(), line.to.yy());
    ctx.closePath();
    ctx.stroke();
  };
  DrawUtil.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DrawUtil',
    interfaces: []
  };
  var DrawUtil_instance = null;
  function DrawUtil_getInstance() {
    if (DrawUtil_instance === null) {
      new DrawUtil();
    }
    return DrawUtil_instance;
  }
  function HtmlUtil() {
    HtmlUtil_instance = this;
  }
  function HtmlUtil$createSliderDiv$lambda(closure$slider, closure$suffix, closure$sliderValue) {
    return function (f) {
      closure$sliderValue.innerHTML = closure$slider.value + closure$suffix;
      return null;
    };
  }
  HtmlUtil.prototype.createSliderDiv_k2bhec$ = function (className, value, max, id, suffix, min) {
    if (min === void 0)
      min = 0;
    var tmp$, tmp$_0, tmp$_1;
    var div = Kotlin.isType(tmp$ = document.createElement('div'), HTMLDivElement) ? tmp$ : throwCCE();
    var slider = Kotlin.isType(tmp$_0 = document.createElement('INPUT'), HTMLInputElement) ? tmp$_0 : throwCCE();
    slider.id = id;
    slider.type = 'range';
    slider.min = min.toString();
    slider.max = max.toString();
    slider.value = value.toString();
    addClass(slider, ['slider', className]);
    var sliderValue = Kotlin.isType(tmp$_1 = document.createElement('span'), HTMLSpanElement) ? tmp$_1 : throwCCE();
    addClass(sliderValue, ['sliderLabel']);
    slider.oninput = HtmlUtil$createSliderDiv$lambda(slider, suffix, sliderValue);
    div.appendChild(slider);
    div.appendChild(sliderValue);
    sliderValue.innerHTML = slider.value + suffix;
    return div;
  };
  HtmlUtil.prototype.createButtonDiv_yasyo8$ = function (className, text, callback) {
    var tmp$, tmp$_0;
    var div = Kotlin.isType(tmp$ = document.createElement('div'), HTMLDivElement) ? tmp$ : throwCCE();
    var button = Kotlin.isType(tmp$_0 = document.createElement('BUTTON'), HTMLButtonElement) ? tmp$_0 : throwCCE();
    addClass(button, [className]);
    button.onclick = callback;
    button.innerText = text;
    div.appendChild(button);
    return div;
  };
  HtmlUtil.prototype.createCanvas_61zpoe$ = function (className) {
    var tmp$;
    var canvas = Kotlin.isType(tmp$ = document.createElement('canvas'), HTMLCanvasElement) ? tmp$ : throwCCE();
    addClass(canvas, ['canvas', className]);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    return canvas;
  };
  HtmlUtil.prototype.createOffscreenCanvas_vux9f0$ = function (w, h) {
    var tmp$;
    var canvas = Kotlin.isType(tmp$ = document.createElement('canvas'), HTMLCanvasElement) ? tmp$ : throwCCE();
    canvas.width = w;
    canvas.height = h;
    return canvas;
  };
  HtmlUtil.prototype.prerender_yb5akz$ = function (w, h, drawFun) {
    var offscreen = HtmlUtil_getInstance().createOffscreenCanvas_vux9f0$(w, h);
    var offscreenCtx = HtmlUtil_getInstance().getContext2D_ap7jt0$(offscreen);
    drawFun(offscreenCtx);
    return offscreen;
  };
  HtmlUtil.prototype.getContext2D_ap7jt0$ = function (canvas) {
    var tmp$;
    return Kotlin.isType(tmp$ = canvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$ : throwCCE();
  };
  function HtmlUtil$pauseHandler$lambda(closure$tickFunction) {
    return function () {
      closure$tickFunction();
      return Unit;
    };
  }
  HtmlUtil.prototype.pauseHandler_n53o35$ = function (intervalID, tickFunction) {
    var tmp$, tmp$_0, tmp$_1;
    if (intervalID !== -1) {
      (tmp$ = document.defaultView) != null ? (tmp$.clearInterval(intervalID), Unit) : null;
      return -1;
    }
     else {
      return (tmp$_1 = (tmp$_0 = document.defaultView) != null ? tmp$_0.setInterval(HtmlUtil$pauseHandler$lambda(tickFunction), Time_getInstance().minTickInterval) : null) != null ? tmp$_1 : 0;
    }
  };
  HtmlUtil.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'HtmlUtil',
    interfaces: []
  };
  var HtmlUtil_instance = null;
  function HtmlUtil_getInstance() {
    if (HtmlUtil_instance === null) {
      new HtmlUtil();
    }
    return HtmlUtil_instance;
  }
  function ImprovedNoise() {
    ImprovedNoise_instance = this;
    this.p = new Int32Array(512);
    this.permutation = new Int32Array([151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180]);
    var $receiver = new IntRange(0, 255);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      this.p[item] = this.permutation[item];
      this.p[256 + item | 0] = this.p[item];
      tmp$_0.call(destination, Unit);
    }
  }
  ImprovedNoise.prototype.noiseColorInt_lu1900$ = function (x, y) {
    return 255 * ((this.noise_yvo9jy$(x, y) + 1) / 2);
  };
  function ImprovedNoise$noise$fade(t) {
    return t * t * t * (t * (t * 6 - 15) + 10);
  }
  function ImprovedNoise$noise$lerp(t, a, b) {
    return a + t * (b - a);
  }
  function ImprovedNoise$noise$grad(hash, x, y, z) {
    var h = hash & 15;
    var u = h < 8 ? x : y;
    var v = h < 4 ? y : h === 12 || h === 14 ? x : z;
    return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
  }
  ImprovedNoise.prototype.noise_yvo9jy$ = function (x, y, z) {
    if (z === void 0)
      z = 0.0;
    var fade = ImprovedNoise$noise$fade;
    var lerp = ImprovedNoise$noise$lerp;
    var grad = ImprovedNoise$noise$grad;
    var xx = x;
    var yy = y;
    var zz = z;
    var xxx = numberToInt(Math_0.floor(xx)) + 255 | 0;
    var yyy = numberToInt(Math_0.floor(yy)) + 255 | 0;
    var zzz = numberToInt(Math_0.floor(zz)) + 255 | 0;
    xx -= Math_0.floor(xx);
    yy -= Math_0.floor(yy);
    zz -= Math_0.floor(zz);
    var u = fade(xx);
    var v = fade(yy);
    var w = fade(zz);
    var A = this.p[xxx] + yyy | 0;
    var AA = this.p[A] + zzz | 0;
    var AB = this.p[A + 1 | 0] + zzz | 0;
    var B = this.p[xxx + 1 | 0] + yyy | 0;
    var BA = this.p[B] + zzz | 0;
    var BB = this.p[B + 1 | 0] + zzz | 0;
    return lerp(w, lerp(v, lerp(u, grad(this.p[AA], xx, yy, zz), grad(this.p[BA], xx - 1, yy, zz)), lerp(u, grad(this.p[AB], xx, yy - 1, zz), grad(this.p[BB], xx - 1, yy - 1, zz))), lerp(v, lerp(u, grad(this.p[AA + 1 | 0], xx, yy, zz - 1), grad(this.p[BA + 1 | 0], xx - 1, yy, zz - 1)), lerp(u, grad(this.p[AB + 1 | 0], xx, yy - 1, zz - 1), grad(this.p[BB + 1 | 0], xx - 1, yy - 1, zz - 1))));
  };
  var Array_0 = Array;
  ImprovedNoise.prototype.generateRawMap_224j3y$ = function (width, height, wavelength) {
    if (wavelength === void 0)
      wavelength = 5 + Util_getInstance().random() * 5;
    var frequency = wavelength / width;
    var array = Array_0(width);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = new Float64Array(height);
    }
    var noise = array;
    var z = Util_getInstance().random() * 1000;
    for (var x = 0; x < width; x++) {
      for (var y = 0; y < height; y++) {
        noise[x][y] = ImprovedNoise_getInstance().noise_yvo9jy$(x * frequency, y * frequency, z * frequency);
      }
    }
    return noise;
  };
  ImprovedNoise.prototype.generateEdgeMap_224j3y$ = function (width, height, wavelength) {
    if (wavelength === void 0)
      wavelength = 10.0;
    World_getInstance();
    var frequency = wavelength / width;
    var array = Array_0(width);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = new Float64Array(height);
    }
    var noise = array;
    var z = Util_getInstance().random() * 1000;
    var steps = 5.0;
    for (var x = 0; x < width; x++) {
      for (var y = 0; y < height; y++) {
        var raw = ImprovedNoise_getInstance().noise_yvo9jy$(x * frequency, y * frequency, z * frequency);
        var tmp$_0 = noise[x];
        var x_0 = (raw + 0.5) * steps;
        tmp$_0[y] = Math_0.floor(x_0) / steps;
      }
    }
    return noise;
  };
  ImprovedNoise.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ImprovedNoise',
    interfaces: []
  };
  var ImprovedNoise_instance = null;
  function ImprovedNoise_getInstance() {
    if (ImprovedNoise_instance === null) {
      new ImprovedNoise();
    }
    return ImprovedNoise_instance;
  }
  function MapUtil() {
    MapUtil_instance = this;
    this.redSquare = JSON.parse('[9.373274, 47.422139]');
    this.badRagaz = JSON.parse('[9.500324, 47.0024734]');
    this.gollums = JSON.parse('[8.5952000, 47.3620000]');
    this.escherWyss = JSON.parse('[8.5220562, 47.3907937]');
    this.primeTower = JSON.parse('[8.5183064, 47.3867261]');
    this.chlosterPlatz = JSON.parse('[9.3770000, 47.4240000]');
    this.gizaPlateau = JSON.parse('[31.1320000, 29.9780000]');
    this.eiffel = JSON.parse('[2.2948595, 48.858243]');
    this.groundZero = JSON.parse('[-74.0123000, 40.7125000]');
    this.MAP_CENTER = this.redSquare;
    this.INIT_MAP_QGRESS = "new mapboxgl.Map({'container':'map','style':'mapbox://styles/zirteq/cjazhkywuppf42rnx453i73z5'});";
    this.INIT_MAP_SATELITE = "new mapboxgl.Map({'container':'map','style':'mapbox://styles/zirteq/cjb19u1dy02a82slyklj33o6g'});";
    this.INIT_SHADOW_MAP_LITERAL = "new mapboxgl.Map({'container':'shadowMap','style':'mapbox://styles/zirteq/cjaq7lw9e2y7u2rn7u6xskobn'});";
    this.GEO_CTRL_LITERAL = "new mapboxgl.GeolocateControl({'positionOptions':{'enableHighAccuracy':true,'zoom':18},'trackUserLocation':false})";
    this.ZOOM = 18;
    this.MIN_ZOOM = 18;
    this.MAX_ZOOM = 18;
    this.OFFSCREEN_CELL_ROWS = 10;
  }
  MapUtil.prototype.initMapbox = function () {
    return Styles_getInstance().useSatteliteMap ? new mapboxgl.Map({container: 'map', style: 'mapbox://styles/zirteq/cjb19u1dy02a82slyklj33o6g'}) : new mapboxgl.Map({container: 'map', style: 'mapbox://styles/zirteq/cjazhkywuppf42rnx453i73z5'});
  };
  function MapUtil$loadMap$lambda$lambda(this$MapUtil, closure$callback) {
    return function () {
      var tmp$, tmp$_0;
      var shadowMapCan = document.getElementsByClassName('mapboxgl-canvas')[1];
      var gl = shadowMapCan.getContext('webgl');
      var width = gl.canvas.width;
      var height = gl.canvas.height;
      var rawBuf = new Uint8Array(typeof (tmp$ = width * height * 4) === 'number' ? tmp$ : throwCCE());
      gl.readPixels(0, 0, width, height, gl.RGBA, gl.UNSIGNED_BYTE, rawBuf);
      var imageData = World_getInstance().createStreetImage_n3vf4$(rawBuf, gl.canvas.width, gl.canvas.height);
      World_getInstance().shadowStreetMap = imageData;
      (tmp$_0 = document.getElementById('shadowMap')) != null ? (tmp$_0.remove(), Unit) : null;
      var grid = this$MapUtil.createGrid_bxn848$(imageData, width, height);
      closure$callback(grid);
    };
  }
  function MapUtil$loadMap$lambda(closure$map, this$MapUtil, closure$callback) {
    return function () {
      DrawUtil_getInstance().drawLoadingText_61zpoe$('Creating grid..');
      if (Styles_getInstance().use3DBuildings) {
        closure$map.addLayer(this$MapUtil.buildingLayerConfig_0());
      }
      var shadowMap = new mapboxgl.Map({container: 'shadowMap', style: 'mapbox://styles/zirteq/cjaq7lw9e2y7u2rn7u6xskobn'});
      shadowMap.setMinZoom(this$MapUtil.MIN_ZOOM);
      shadowMap.setMaxZoom(this$MapUtil.MAX_ZOOM);
      shadowMap.setZoom(this$MapUtil.ZOOM);
      shadowMap.setCenter(this$MapUtil.MAP_CENTER);
      shadowMap.on('load', MapUtil$loadMap$lambda$lambda(this$MapUtil, closure$callback));
    };
  }
  MapUtil.prototype.loadMap_vekcfi$ = function (callback) {
    var map = this.initMapbox();
    map.setMinZoom(this.MIN_ZOOM);
    map.setMaxZoom(this.MAX_ZOOM);
    map.setZoom(this.ZOOM);
    map.setCenter(this.MAP_CENTER);
    map.addControl(new mapboxgl.GeolocateControl({positionOptions: {enableHighAccuracy: true, zoom: 18}, trackUserLocation: false}));
    DrawUtil_getInstance().drawLoadingText_61zpoe$('Loading map..');
    map.on('load', MapUtil$loadMap$lambda(map, this, callback));
  };
  MapUtil.prototype.buildingLayerConfig_0 = function () {
    return JSON.parse('{\n            "id": "3d-buildings",\n            "source": "composite",\n            "source-layer": "building",\n            "filter": ["==", "extrude", "true"],\n            "type": "fill-extrusion",\n            "minzoom": 15,\n            "paint": {\n                "fill-extrusion-color": "#333333",\n                "fill-extrusion-height": ["interpolate", ["linear"], ["zoom"], 15, 0, 15.05, ["get", "height"]],\n                "fill-extrusion-base": ["interpolate", ["linear"], ["zoom"], 15, 0, 15.05, ["get", "min_height"]],\n                "fill-extrusion-opacity": 0.9\n            }\n        }');
  };
  function MapUtil$createGrid$isOffScreen(closure$w, closure$h) {
    return function (pos) {
      return pos.x < 0 || pos.y < 0 || pos.x >= closure$w || pos.y >= closure$h;
    };
  }
  function MapUtil$createGrid$nextRow(this$MapUtil, closure$isOffScreen) {
    return function (tempCtx, h, x) {
      var $receiver = new IntRange(-10, h + this$MapUtil.OFFSCREEN_CELL_ROWS - 1 | 0);
      var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        var tmp$_0 = destination.add_11rb$;
        var closure$isOffScreen_0 = closure$isOffScreen;
        var transform$result;
        var pos = new Coords(x, item);
        if (closure$isOffScreen_0(pos)) {
          var isPassable = true;
          var penalty = 80;
          transform$result = to(pos, new Cell(pos, isPassable, penalty));
        }
         else {
          var scaledPixel = tempCtx.getImageData(x, item, 1.0, 1.0).data[0];
          var passabilityOffset = 32;
          var isPassable_0 = scaledPixel > passabilityOffset;
          var penalty_0 = PathUtil_getInstance().MIN_HEAT + (Kotlin.imul(255 - scaledPixel, PathUtil_getInstance().MAX_HEAT - PathUtil_getInstance().MIN_HEAT | 0) / 255 | 0) | 0;
          transform$result = to(pos, new Cell(pos, isPassable_0, penalty_0));
        }
        tmp$_0.call(destination, transform$result);
      }
      return destination;
    };
  }
  MapUtil.prototype.createGrid_bxn848$ = function (imageData, width, height) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var w = width / PathUtil_getInstance().RESOLUTION | 0;
    var h = height / PathUtil_getInstance().RESOLUTION | 0;
    var isOffScreen = MapUtil$createGrid$isOffScreen(w, h);
    var nextRow = MapUtil$createGrid$nextRow(this, isOffScreen);
    var unscaledCan = Kotlin.isType(tmp$ = document.createElement('canvas'), HTMLCanvasElement) ? tmp$ : throwCCE();
    var unscaledCtx = Kotlin.isType(tmp$_0 = unscaledCan.getContext('2d'), CanvasRenderingContext2D) ? tmp$_0 : throwCCE();
    unscaledCan.width = width;
    unscaledCan.height = height;
    unscaledCtx.putImageData(imageData, 0.0, 0.0);
    var tempCan = Kotlin.isType(tmp$_1 = document.createElement('canvas'), HTMLCanvasElement) ? tmp$_1 : throwCCE();
    var tempCtx = Kotlin.isType(tmp$_2 = tempCan.getContext('2d'), CanvasRenderingContext2D) ? tmp$_2 : throwCCE();
    tempCan.width = w;
    tempCan.height = h;
    var tmp$_3;
    tmp$_3 = (new IntRange(0, Config_getInstance().shadowBlurCount)).iterator();
    while (tmp$_3.hasNext()) {
      var element = tmp$_3.next();
      tempCan.blur();
    }
    tempCtx.drawImage(unscaledCan, 0.0, 0.0, w, h);
    var $receiver = new IntRange(-10, w + this.OFFSCREEN_CELL_ROWS - 1 | 0);
    var destination = ArrayList_init();
    var tmp$_4;
    tmp$_4 = $receiver.iterator();
    while (tmp$_4.hasNext()) {
      var element_0 = tmp$_4.next();
      var list = nextRow(tempCtx, h, element_0);
      addAll(destination, list);
    }
    var rawGrid = toMap(destination);
    return rawGrid;
  };
  MapUtil.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'MapUtil',
    interfaces: []
  };
  var MapUtil_instance = null;
  function MapUtil_getInstance() {
    if (MapUtil_instance === null) {
      new MapUtil();
    }
    return MapUtil_instance;
  }
  function PathUtil() {
    PathUtil_instance = this;
    this.MIN_HEAT = 35;
    this.MAX_HEAT = 100;
    this.RESOLUTION = 12;
  }
  PathUtil.prototype.w = function () {
    return World_getInstance().bgCan.width / this.RESOLUTION | 0;
  };
  PathUtil.prototype.h = function () {
    return World_getInstance().bgCan.height / this.RESOLUTION | 0;
  };
  PathUtil.prototype.posToShadowPos_lfj9be$ = function (pos) {
    return new Coords(pos.x / this.RESOLUTION | 0, pos.y / this.RESOLUTION | 0);
  };
  PathUtil.prototype.shadowPosToPos_lfj9be$ = function (pos) {
    return new Coords(Kotlin.imul(pos.x, this.RESOLUTION), Kotlin.imul(pos.y, this.RESOLUTION));
  };
  function PathUtil$generateHeatMap$createWaveFront(closure$heatMap, closure$passable, this$PathUtil) {
    return function (heat) {
      var tmp$;
      var $receiver = closure$heatMap;
      var destination = LinkedHashMap_init();
      var tmp$_0;
      tmp$_0 = $receiver.entries.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        if (element.value === heat) {
          destination.put_xwzc9p$(element.key, element.value);
        }
      }
      var sameHeat = destination;
      var hasMaybeMore = {v: false};
      var tmp$_1;
      tmp$_1 = sameHeat.entries.iterator();
      while (tmp$_1.hasNext()) {
        var element_0 = tmp$_1.next();
        var closure$passable_0 = closure$passable;
        var closure$heatMap_0 = closure$heatMap;
        var this$PathUtil_0 = this$PathUtil;
        var succs = this$PathUtil_0.findUnmarkedSurrounding_0(element_0.key, closure$passable_0, closure$heatMap_0);
        var tmp$_2;
        tmp$_2 = succs.iterator();
        while (tmp$_2.hasNext()) {
          var element_1 = tmp$_2.next();
          var tmp$_3;
          var cell = World_getInstance().grid.get_11rb$(element_1);
          var cost = (tmp$_3 = cell != null ? cell.movementPenalty : null) != null ? tmp$_3 : this$PathUtil_0.MAX_HEAT;
          closure$heatMap_0.put_xwzc9p$(element_1, heat + cost | 0);
          hasMaybeMore.v = true;
        }
      }
      var $receiver_0 = closure$heatMap;
      var destination_0 = ArrayList_init($receiver_0.size);
      var tmp$_4;
      tmp$_4 = $receiver_0.entries.iterator();
      while (tmp$_4.hasNext()) {
        var item = tmp$_4.next();
        destination_0.add_11rb$(item.value);
      }
      var overcount = heat - ((tmp$ = max(destination_0)) != null ? tmp$ : 0) | 0;
      return hasMaybeMore.v || overcount < this$PathUtil.MAX_HEAT;
    };
  }
  function PathUtil$generateHeatMap$nextLayer(this$PathUtil) {
    return function (map) {
      var layer = LinkedHashMap_init();
      var tmp$;
      tmp$ = map.entries.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var this$PathUtil_0 = this$PathUtil;
        var tmp$_0;
        tmp$_0 = element.key.getSurrounding_vux9f0$(this$PathUtil_0.w(), this$PathUtil_0.h()).iterator();
        while (tmp$_0.hasNext()) {
          var element_0 = tmp$_0.next();
          if (!map.containsKey_11rb$(element_0)) {
            layer.put_xwzc9p$(element_0, element.value + this$PathUtil_0.MAX_HEAT | 0);
          }
        }
      }
      return toMap_0(layer);
    };
  }
  PathUtil.prototype.generateHeatMap_lfj9be$ = function (goal) {
    var tmp$;
    var passable = World_getInstance().passableCells();
    var heatMap = LinkedHashMap_init();
    var createWaveFront = PathUtil$generateHeatMap$createWaveFront(heatMap, passable, this);
    var heat = 0;
    heatMap.put_xwzc9p$(this.posToShadowPos_lfj9be$(goal), heat);
    while (createWaveFront((tmp$ = heat, heat = tmp$ + 1 | 0, tmp$))) {
    }
    var nextLayer = PathUtil$generateHeatMap$nextLayer(this);
    heatMap.putAll_a2k3zr$(nextLayer(heatMap));
    heatMap.putAll_a2k3zr$(nextLayer(heatMap));
    heatMap.putAll_a2k3zr$(nextLayer(heatMap));
    return heatMap;
  };
  PathUtil.prototype.calculateVectorField_8eqwnz$ = function (heatMap) {
    var maxHeat = ensureNotNull(max(heatMap.values));
    var $receiver = World_getInstance().grid;
    var destination = ArrayList_init($receiver.size);
    var tmp$;
    tmp$ = $receiver.entries.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var tmp$_1, tmp$_2, tmp$_3, tmp$_4;
      var leftPos = new Coords(item.key.x - 1 | 0, item.key.y);
      var rightPos = new Coords(item.key.x + 1 | 0, item.key.y);
      var upPos = new Coords(item.key.x, item.key.y - 1 | 0);
      var downPos = new Coords(item.key.x, item.key.y + 1 | 0);
      var left = (tmp$_1 = heatMap.get_11rb$(leftPos)) != null ? tmp$_1 : maxHeat;
      var right = (tmp$_2 = heatMap.get_11rb$(rightPos)) != null ? tmp$_2 : maxHeat;
      var up = (tmp$_3 = heatMap.get_11rb$(upPos)) != null ? tmp$_3 : maxHeat;
      var down = (tmp$_4 = heatMap.get_11rb$(downPos)) != null ? tmp$_4 : maxHeat;
      var rawer = Complex_init(left - right | 0, up - down | 0);
      var raw = Complex$Companion_getInstance().fromMagnitudeAndPhase_5nl2e7$(1.0, rawer.phase);
      tmp$_0.call(destination, to(item.key, raw));
    }
    var fields = toMap(destination);
    return toMap_0(this.smooth_0(fields, Config_getInstance().vectorSmoothCount));
  };
  PathUtil.prototype.smooth_0 = function (map, count) {
    if (count > 0) {
      return this.smooth_0(this.smoothVectorMap_0(map), count - 1 | 0);
    }
     else {
      return map;
    }
  };
  PathUtil.prototype.smoothVectorMap_0 = function (map) {
    var destination = ArrayList_init(map.size);
    var tmp$;
    tmp$ = map.entries.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var tmp$_1, tmp$_2, tmp$_3, tmp$_4;
      var pos = item.key;
      var up = (tmp$_1 = map.get_11rb$(new Coords(pos.x, pos.y - 1 | 0))) != null ? tmp$_1 : Complex$Companion_getInstance().ZERO;
      var down = (tmp$_2 = map.get_11rb$(new Coords(pos.x, pos.y + 1 | 0))) != null ? tmp$_2 : Complex$Companion_getInstance().ZERO;
      var left = (tmp$_3 = map.get_11rb$(new Coords(pos.x - 1 | 0, pos.y))) != null ? tmp$_3 : Complex$Companion_getInstance().ZERO;
      var right = (tmp$_4 = map.get_11rb$(new Coords(pos.x + 1 | 0, pos.y))) != null ? tmp$_4 : Complex$Companion_getInstance().ZERO;
      var sum = up.plus_p4p8i0$(down).plus_p4p8i0$(left).plus_p4p8i0$(right);
      tmp$_0.call(destination, to(item.key, Complex$Companion_getInstance().fromMagnitudeAndPhase_5nl2e7$(1.0, sum.phase)));
    }
    return toMap(destination);
  };
  PathUtil.prototype.findUnmarkedSurrounding_0 = function (node, passable, heatMap) {
    var $receiver = this.findAllSurrounding_0(node);
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (!heatMap.containsKey_11rb$(element))
        destination.add_11rb$(element);
    }
    var destination_0 = ArrayList_init();
    var tmp$_0;
    tmp$_0 = destination.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      if (passable.containsKey_11rb$(element_0))
        destination_0.add_11rb$(element_0);
    }
    return destination_0;
  };
  PathUtil.prototype.findAllSurrounding_0 = function (node) {
    return listOfNotNull([new Coords(node.x - 1 | 0, node.y - 1 | 0), new Coords(node.x - 1 | 0, node.y), new Coords(node.x - 1 | 0, node.y + 1 | 0), new Coords(node.x, node.y - 1 | 0), new Coords(node.x, node.y + 1 | 0), new Coords(node.x + 1 | 0, node.y - 1 | 0), new Coords(node.x + 1 | 0, node.y), new Coords(node.x + 1 | 0, node.y + 1 | 0)]);
  };
  PathUtil.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'PathUtil',
    interfaces: []
  };
  var PathUtil_instance = null;
  function PathUtil_getInstance() {
    if (PathUtil_instance === null) {
      new PathUtil();
    }
    return PathUtil_instance;
  }
  function SoundUtil() {
    SoundUtil_instance = this;
    this.audioCtx = new AudioContext();
  }
  SoundUtil.prototype.playPortalCreationSound_lfj9be$ = function (pos) {
    var duration = 0.5;
    var pan = pos.x / World_getInstance().can.width;
    var oscNode = this.createLinearRampOscillator_0(OscillatorType_getInstance().SINE, 120.0, 0.0, duration);
    var panNode = this.createStaticPan_0(pan);
    this.playSound_0(oscNode, panNode, 0.5, duration);
  };
  SoundUtil.prototype.playPortalRemovalSound_lfj9be$ = function (pos) {
    var duration = 0.5;
    var pan = pos.x / World_getInstance().can.width;
    var oscNode = this.createLinearRampOscillator_0(OscillatorType_getInstance().SINE, 60.0, 120.0, duration);
    var panNode = this.createStaticPan_0(pan);
    this.playSound_0(oscNode, panNode, 0.5, duration);
  };
  SoundUtil.prototype.playHackingSound_lfj9be$ = function (pos) {
    var freq = 500.0;
    var osc = this.createStaticOscillator_0(OscillatorType_getInstance().SINE, freq);
    var pan = pos.xx() / World_getInstance().can.width;
    var panNode = this.createStaticPan_0(pan);
    var gain = 0.02;
    var duration = 0.02;
    this.playSound_0(osc, panNode, gain, duration);
  };
  SoundUtil.prototype.playXmpSound_zbn281$ = function (level, pos) {
    var freq = 160.0 - (level.level * 5 | 0);
    var osc = this.createStaticOscillator_0(OscillatorType_getInstance().SQUARE, freq);
    var pan = pos.xx() / World_getInstance().can.width;
    var panNode = this.createStaticPan_0(pan);
    var gain = 0.02 + level.level * 0.003;
    var duration = 0.005 + 0.001 * level.level;
    this.playSound_0(osc, panNode, gain, duration);
  };
  SoundUtil.prototype.playDeploySound_s1df0o$ = function (pos, distanceToPortal) {
    var ratio = distanceToPortal / Dimensions_getInstance().maxDeploymentRange;
    var gain = 0.05;
    var duration = 0.2;
    var minFreq = 250.0;
    var baseFreq = -250.0;
    var startFreq = minFreq + baseFreq * ratio;
    var endFreq = minFreq + baseFreq * ratio * 2;
    var pan = pos.x / World_getInstance().can.width;
    var oscNode = this.createLinearRampOscillator_0(OscillatorType_getInstance().SINE, startFreq, endFreq, duration);
    var panNode = this.createStaticPan_0(pan);
    this.playSound_0(oscNode, panNode, gain, duration);
  };
  SoundUtil.prototype.playLinkingSound_4tp95w$ = function (link) {
    var ratio = link.getLine().calcLength() / World_getInstance().diagonalLength();
    var gain = 0.15;
    var duration = 0.04 + 0.16 * ratio;
    var minFreq = 500.0 * ratio;
    var baseFreq = 500.0;
    var startFreq = minFreq + baseFreq * ratio;
    var endFreq = minFreq + baseFreq * ratio * 2;
    var startPan = link.getLine().from.x / World_getInstance().can.width;
    var endPan = link.getLine().to.x / World_getInstance().can.width;
    var oscNode = this.createLinearRampOscillator_0(OscillatorType_getInstance().SINE, startFreq, endFreq, duration);
    var panNode = this.createLinearRampPan_0(startPan, endPan, duration);
    this.playSound_0(oscNode, panNode, gain, duration);
  };
  SoundUtil.prototype.playFieldingSound_7ltq94$ = function (field) {
    var areaRatio = field.calculateArea() / World_getInstance().totalArea() | 0;
    var gain = 0.2;
    var minDuration = 1.0 / Constants_getInstance().phi;
    var maxDuration = 1.0;
    var diff = maxDuration - minDuration;
    var additionalDuration = diff * areaRatio;
    var duration = minDuration + additionalDuration;
    var minFreq = 70.0;
    var baseFreq = 20.0;
    var startFreq = minFreq + baseFreq * areaRatio;
    var endFreq = startFreq * 2.0;
    var startPan = field.origin.x() / World_getInstance().can.width;
    var endPan = 0.5 * (field.primaryAnchor.x() + field.secondaryAnchor.x()) / World_getInstance().can.width;
    var oscNode = this.createExponentialRampOscillator_0(OscillatorType_getInstance().TRIANGLE, startFreq, endFreq, duration);
    var panNode = this.createLinearRampPan_0(startPan, endPan, duration);
    this.playSound_0(oscNode, panNode, gain, duration);
  };
  SoundUtil.prototype.playSound_0 = function (oscNode, panNode, gain, duration) {
    var gainNode = this.createStaticGain_0(gain);
    oscNode.connect(panNode);
    panNode.connect(gainNode);
    gainNode.connect(this.audioCtx.destination);
    oscNode.start();
    oscNode.stop(this.now_0() + duration);
  };
  SoundUtil.prototype.now_0 = function () {
    return this.audioCtx.currentTime;
  };
  SoundUtil.prototype.createStaticOscillator_0 = function (type, freq) {
    var node = this.audioCtx.createOscillator();
    node.type = type;
    node.frequency.setTargetAtTime(freq, this.now_0(), 0.0);
    return node;
  };
  SoundUtil.prototype.createLinearRampOscillator_0 = function (type, startFreq, endFreq, duration) {
    var node = this.createStaticOscillator_0(type, startFreq);
    node.frequency.linearRampToValueAtTime(endFreq, this.now_0() + duration);
    return node;
  };
  SoundUtil.prototype.createExponentialRampOscillator_0 = function (type, startFreq, endFreq, duration) {
    var node = this.createStaticOscillator_0(type, startFreq);
    node.frequency.exponentialRampToValueAtTime(endFreq, this.now_0() + duration);
    return node;
  };
  SoundUtil.prototype.createStaticPan_0 = function (pan) {
    var node = this.audioCtx.createStereoPanner();
    node.pan.setTargetAtTime(pan, this.now_0(), 0.0);
    return node;
  };
  SoundUtil.prototype.createLinearRampPan_0 = function (startPan, endPan, duration) {
    var node = this.createStaticPan_0(startPan);
    node.pan.linearRampToValueAtTime(endPan, this.now_0() + duration);
    return node;
  };
  SoundUtil.prototype.createStaticGain_0 = function (gain) {
    var node = this.audioCtx.createGain();
    node.gain.setTargetAtTime(gain, this.now_0(), 0.0);
    return node;
  };
  SoundUtil.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'SoundUtil',
    interfaces: []
  };
  var SoundUtil_instance = null;
  function SoundUtil_getInstance() {
    if (SoundUtil_instance === null) {
      new SoundUtil();
    }
    return SoundUtil_instance;
  }
  function Util() {
    Util_instance = this;
  }
  function Util$findNearestPortals$lambda(it) {
    return it.first;
  }
  var compareBy$lambda_13 = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function Comparator$ObjectLiteral_14(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral_14.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral_14.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  Util.prototype.findNearestPortals_lfj9be$ = function (coords) {
    var $receiver = World_getInstance().allPortals;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(to(item.location.distanceTo_lfj9be$(coords), item));
    }
    return toSet(sortedWith(destination, new Comparator$ObjectLiteral_14(compareBy$lambda_13(Util$findNearestPortals$lambda))));
  };
  Util.prototype.findNearestPortal_lfj9be$ = function (coords) {
    var tmp$;
    var nearest = this.findNearestPortals_lfj9be$(coords);
    if (!nearest.isEmpty()) {
      tmp$ = first_0(nearest).second;
    }
     else {
      tmp$ = null;
    }
    return tmp$;
  };
  Util.prototype.random = function () {
    return Math.random();
  };
  Util.prototype.randomDouble_14dthe$ = function (max) {
    return this.random() * max;
  };
  Util.prototype.randomInt_za3lpa$ = function (max) {
    return this.randomInt_vux9f0$(0, max);
  };
  Util.prototype.randomInt_vux9f0$ = function (min, max) {
    var list = toList_0(new IntRange(min, max));
    return list.get_za3lpa$(numberToInt(this.random() * list.size));
  };
  Util.prototype.shuffle_bemo1h$ = function (items) {
    var tmp$;
    var result = ArrayList_init();
    result.addAll_brywnq$(items);
    tmp$ = result.size - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      var pos = this.randomInt_za3lpa$(result.size - 1 | 0);
      var temp = result.get_za3lpa$(i);
      result.set_wxm5ur$(i, result.get_za3lpa$(pos));
      result.set_wxm5ur$(pos, temp);
    }
    return toList_0(result);
  };
  function Util$select$lambda(it) {
    return it.first;
  }
  var compareBy$lambda_14 = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function Comparator$ObjectLiteral_15(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral_15.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral_15.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  Util.prototype.select_flnx62$ = function (probabilityList) {
    var tmp$;
    var sum = 0.0;
    tmp$ = probabilityList.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      sum += element.first;
    }
    var total = sum;
    var rand = this.randomDouble_14dthe$(total);
    var accu = {v: 0.0};
    var tmp$_0;
    tmp$_0 = sortedWith(probabilityList, new Comparator$ObjectLiteral_15(compareBy$lambda_14(Util$select$lambda))).iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      accu.v += element_0.first;
      if (!(element_0.first > 0.0)) {
        var message = 'Check failed.';
        throw new IllegalStateException(message.toString());
      }
      if (accu.v >= rand) {
        return element_0.second;
      }
    }
    throw new IllegalStateException('');
  };
  Util.prototype.generatePortalName = function () {
    var separator = this.random() < 0.3 ? '-' : ' ';
    var name = this.generateName_0(3, 5);
    var values = listOf([to(1.0, ''), to(0.15, separator + 'Portal'), to(0.05, separator + 'Square'), to(0.1, separator + 'Street'), to(0.07, separator + 'Fountain'), to(0.08, separator + 'Park'), to(0.03, separator + 'Station'), to(0.02, separator + 'House'), to(0.01, separator + 'Memorial'), to(0.01, separator + 'Museum')]);
    return name + Util_getInstance().select_flnx62$(values);
  };
  Util.prototype.generateAgentName = function () {
    var name = this.generateName_0(3, 6);
    if (name.length <= 4 && this.random() < 0.5) {
      return name + toString(this.random().toString().substring(2, 4));
    }
    if (this.random() < 0.2) {
      return name + toString(this.random().toString().substring(2, 3));
    }
    return name;
  };
  Util.prototype.generateName_0 = function (minLength, maxLength) {
    var length = minLength + this.randomInt_za3lpa$(maxLength - minLength | 0) | 0;
    var firstLetter = unboxChar(this.select_flnx62$(this.generateFirstSelection_0()));
    var $receiver = new IntRange(1, length);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(this.select_flnx62$(this.generateSelection_0()));
    }
    var other = joinToString(destination, '');
    var name = String.fromCharCode(firstLetter) + other;
    var temp = name.substring(0, 1).toUpperCase() + name.substring(1).toLowerCase();
    return endsWith(temp, 45) ? dropLast(temp, 1) : temp;
  };
  Util.prototype.moreChars_0 = function (count, c) {
    var $receiver = new IntRange(0, count / 10 | 0);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(toBoxedChar(c));
    }
    return toList_0(destination);
  };
  Util.prototype.generateSelection_0 = function () {
    return listOf([to(12.702, toBoxedChar(69)), to(9.056, toBoxedChar(84)), to(8.167, toBoxedChar(65)), to(7.507, toBoxedChar(79)), to(6.966, toBoxedChar(73)), to(6.749, toBoxedChar(78)), to(6.327, toBoxedChar(83)), to(6.094, toBoxedChar(72)), to(5.987, toBoxedChar(82)), to(4.253, toBoxedChar(68)), to(4.025, toBoxedChar(76)), to(2.782, toBoxedChar(67)), to(2.758, toBoxedChar(85)), to(2.406, toBoxedChar(77)), to(2.36, toBoxedChar(87)), to(2.228, toBoxedChar(70)), to(2.015, toBoxedChar(71)), to(1.974, toBoxedChar(89)), to(1.929, toBoxedChar(80)), to(1.492, toBoxedChar(66)), to(0.978, toBoxedChar(86)), to(0.772, toBoxedChar(75)), to(0.153, toBoxedChar(74)), to(0.15, toBoxedChar(88)), to(0.095, toBoxedChar(81)), to(0.074, toBoxedChar(90))]);
  };
  Util.prototype.generateFirstSelection_0 = function () {
    return listOf([to(15.978, toBoxedChar(84)), to(11.682, toBoxedChar(65)), to(7.631, toBoxedChar(79)), to(7.294, toBoxedChar(73)), to(6.686, toBoxedChar(83)), to(5.497, toBoxedChar(87)), to(5.238, toBoxedChar(67)), to(4.434, toBoxedChar(66)), to(4.319, toBoxedChar(80)), to(4.2, toBoxedChar(72)), to(4.027, toBoxedChar(70)), to(3.826, toBoxedChar(77)), to(3.174, toBoxedChar(68)), to(2.826, toBoxedChar(82)), to(2.799, toBoxedChar(69)), to(2.415, toBoxedChar(76)), to(2.284, toBoxedChar(78)), to(1.642, toBoxedChar(71)), to(1.183, toBoxedChar(85)), to(0.824, toBoxedChar(86)), to(0.763, toBoxedChar(89)), to(0.511, toBoxedChar(74)), to(0.456, toBoxedChar(75)), to(0.222, toBoxedChar(81)), to(0.045, toBoxedChar(88)), to(0.045, toBoxedChar(90))]);
  };
  Util.prototype.degToRad_14dthe$ = function (degrees) {
    return degrees * math.PI / 180;
  };
  Util.prototype.radToDeg_14dthe$ = function (radians) {
    return radians * 180 / math.PI;
  };
  Util.prototype.ticksToSeconds_za3lpa$ = function (ticks) {
    return Kotlin.imul(ticks, Time_getInstance().secondsPerTick);
  };
  Util.prototype.secondsToTicks_za3lpa$ = function (seconds) {
    return seconds / Time_getInstance().secondsPerTick | 0;
  };
  Util.prototype.ticksToTimestamp_za3lpa$ = function (ticks) {
    return Util_getInstance().formatSeconds_za3lpa$(this.ticksToSeconds_za3lpa$(ticks));
  };
  Util.prototype.fixTime_0 = function (v) {
    return v.toString().length <= 1 ? padStart(v.toString(), 2, 48) : v.toString();
  };
  Util.prototype.formatSeconds_za3lpa$ = function (absSeconds) {
    var seconds = absSeconds % 60;
    var x = absSeconds / 60.0;
    var minutes = numberToInt(Math_0.floor(x)) % 60;
    var x_0 = absSeconds / 3600.0;
    var hours = numberToInt(Math_0.floor(x_0));
    var hhMMss = this.fixTime_0(hours) + ':' + this.fixTime_0(minutes) + ':' + this.fixTime_0(seconds);
    return hhMMss;
  };
  Util.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Util',
    interfaces: []
  };
  var Util_instance = null;
  function Util_getInstance() {
    if (Util_instance === null) {
      new Util();
    }
    return Util_instance;
  }
  function Cell(position, isPassable, movementPenalty) {
    this.position = position;
    this.isPassable = isPassable;
    this.movementPenalty = movementPenalty;
  }
  Cell.prototype.getColor = function () {
    return this.isPassableInAllDirections() ? '#ffffff33' : this.isPassable ? '#00000011' : '#00000033';
  };
  function Cell$isPassableInAllDirections$isLeftPassable(this$Cell) {
    return function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = World_getInstance().grid.get_11rb$(new Coords(this$Cell.position.x - 1 | 0, this$Cell.position.y))) != null ? tmp$.isPassable : null) != null ? tmp$_0 : false;
    };
  }
  function Cell$isPassableInAllDirections$isRightPassable(this$Cell) {
    return function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = World_getInstance().grid.get_11rb$(new Coords(this$Cell.position.x + 1 | 0, this$Cell.position.y))) != null ? tmp$.isPassable : null) != null ? tmp$_0 : false;
    };
  }
  function Cell$isPassableInAllDirections$isUpPassable(this$Cell) {
    return function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = World_getInstance().grid.get_11rb$(new Coords(this$Cell.position.x, this$Cell.position.y - 1 | 0))) != null ? tmp$.isPassable : null) != null ? tmp$_0 : false;
    };
  }
  function Cell$isPassableInAllDirections$isDownPassable(this$Cell) {
    return function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = World_getInstance().grid.get_11rb$(new Coords(this$Cell.position.x, this$Cell.position.y + 1 | 0))) != null ? tmp$.isPassable : null) != null ? tmp$_0 : false;
    };
  }
  function Cell$isPassableInAllDirections$isUpLeftPassable(this$Cell) {
    return function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = World_getInstance().grid.get_11rb$(new Coords(this$Cell.position.x - 1 | 0, this$Cell.position.y - 1 | 0))) != null ? tmp$.isPassable : null) != null ? tmp$_0 : false;
    };
  }
  function Cell$isPassableInAllDirections$isUpRightPassable(this$Cell) {
    return function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = World_getInstance().grid.get_11rb$(new Coords(this$Cell.position.x + 1 | 0, this$Cell.position.y - 1 | 0))) != null ? tmp$.isPassable : null) != null ? tmp$_0 : false;
    };
  }
  function Cell$isPassableInAllDirections$isDownLeftPassable(this$Cell) {
    return function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = World_getInstance().grid.get_11rb$(new Coords(this$Cell.position.x - 1 | 0, this$Cell.position.y + 1 | 0))) != null ? tmp$.isPassable : null) != null ? tmp$_0 : false;
    };
  }
  function Cell$isPassableInAllDirections$isDownRightPassable(this$Cell) {
    return function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = World_getInstance().grid.get_11rb$(new Coords(this$Cell.position.x + 1 | 0, this$Cell.position.y + 1 | 0))) != null ? tmp$.isPassable : null) != null ? tmp$_0 : false;
    };
  }
  Cell.prototype.isPassableInAllDirections = function () {
    var isLeftPassable = Cell$isPassableInAllDirections$isLeftPassable(this);
    var isRightPassable = Cell$isPassableInAllDirections$isRightPassable(this);
    var isUpPassable = Cell$isPassableInAllDirections$isUpPassable(this);
    var isDownPassable = Cell$isPassableInAllDirections$isDownPassable(this);
    var isUpLeftPassable = Cell$isPassableInAllDirections$isUpLeftPassable(this);
    var isUpRightPassable = Cell$isPassableInAllDirections$isUpRightPassable(this);
    var isDownLeftPassable = Cell$isPassableInAllDirections$isDownLeftPassable(this);
    var isDownRightPassable = Cell$isPassableInAllDirections$isDownRightPassable(this);
    return this.isPassable && isLeftPassable() && isRightPassable() && isUpPassable() && isDownPassable() && isUpLeftPassable() && isUpRightPassable() && isDownLeftPassable() && isDownRightPassable();
  };
  Cell.prototype.toString = function () {
    return this.position.x.toString() + ':' + this.position.y.toString();
  };
  Cell.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Cell',
    interfaces: []
  };
  Cell.prototype.component1 = function () {
    return this.position;
  };
  Cell.prototype.component2 = function () {
    return this.isPassable;
  };
  Cell.prototype.component3 = function () {
    return this.movementPenalty;
  };
  Cell.prototype.copy_w9x9j7$ = function (position, isPassable, movementPenalty) {
    return new Cell(position === void 0 ? this.position : position, isPassable === void 0 ? this.isPassable : isPassable, movementPenalty === void 0 ? this.movementPenalty : movementPenalty);
  };
  Cell.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.position) | 0;
    result = result * 31 + Kotlin.hashCode(this.isPassable) | 0;
    result = result * 31 + Kotlin.hashCode(this.movementPenalty) | 0;
    return result;
  };
  Cell.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.position, other.position) && Kotlin.equals(this.isPassable, other.isPassable) && Kotlin.equals(this.movementPenalty, other.movementPenalty)))));
  };
  function Circle(center, radius) {
    this.center = center;
    this.radius = radius;
  }
  Circle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Circle',
    interfaces: []
  };
  Circle.prototype.component1 = function () {
    return this.center;
  };
  Circle.prototype.component2 = function () {
    return this.radius;
  };
  Circle.prototype.copy_xv7m3c$ = function (center, radius) {
    return new Circle(center === void 0 ? this.center : center, radius === void 0 ? this.radius : radius);
  };
  Circle.prototype.toString = function () {
    return 'Circle(center=' + Kotlin.toString(this.center) + (', radius=' + Kotlin.toString(this.radius)) + ')';
  };
  Circle.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.center) | 0;
    result = result * 31 + Kotlin.hashCode(this.radius) | 0;
    return result;
  };
  Circle.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.center, other.center) && Kotlin.equals(this.radius, other.radius)))));
  };
  function Complex(re, im) {
    Complex$Companion_getInstance();
    if (im === void 0)
      im = 0.0;
    this.re = re;
    this.im = im;
    var x = this.addSquares_0(this.re, this.im);
    this.magnitude = Math_0.sqrt(x);
    this.magnitude2 = this.addSquares_0(this.re, this.im);
    var y = this.im;
    var x_0 = this.re;
    this.phase = Math_0.atan2(y, x_0);
    this.modulus = this.magnitude;
  }
  Complex.prototype.copyWithNewMagnitude_mx4ult$ = function (mag) {
    return Complex$Companion_getInstance().fromMagnitudeAndPhase_5nl2e7$(mag, this.phase);
  };
  Complex.prototype.negate = function () {
    return new Complex(-this.re, -this.im);
  };
  Complex.prototype.conjugate = function () {
    return new Complex(this.re, -this.im);
  };
  Complex.prototype.reverse = function () {
    return new Complex(-this.re, this.im);
  };
  Complex.prototype.not = function () {
    return this.negate();
  };
  Complex.prototype.plus_p4p8i0$ = function (c) {
    return new Complex(this.re + c.re, this.im + c.im);
  };
  Complex.prototype.plus_mx4ult$ = function (d) {
    return new Complex(this.re + d, this.im);
  };
  Complex.prototype.minus_p4p8i0$ = function (c) {
    return new Complex(this.re - c.re, this.im - c.im);
  };
  Complex.prototype.minus_mx4ult$ = function (d) {
    return new Complex(this.re - d, this.im);
  };
  Complex.prototype.times_p4p8i0$ = function (c) {
    return new Complex(this.re * c.re - this.im * c.im, this.re * c.im + this.im * c.re);
  };
  Complex.prototype.div_p4p8i0$ = function (c) {
    if (c.re === 0.0)
      throw new IllegalArgumentException('Real part is 0.');
    if (c.im === 0.0)
      throw new IllegalArgumentException('Imaginary part is 0.');
    var d = this.addSquares_0(c.re, c.im);
    return new Complex((this.re * c.re + this.im * c.im) / d, (this.im * c.re - this.re * c.im) / d);
  };
  Complex.prototype.addSquares_0 = function (re, im) {
    return re * re + im * im;
  };
  Complex.prototype.toString = function () {
    var tmp$;
    if (equals(this, Complex$Companion_getInstance().I))
      tmp$ = 'i';
    else if (equals(this, new Complex(this.re)))
      tmp$ = this.re.toString();
    else if (equals(this, new Complex(this.im)))
      tmp$ = this.im.toString() + '*i';
    else {
      var imString = this.im < 0.0 ? '-' + toString(-this.im) : '+' + toString(this.im);
      return this.re.toString() + imString + '*i';
    }
    return tmp$;
  };
  function Complex$Companion() {
    Complex$Companion_instance = this;
    this.I = new Complex(0.0, 1.0);
    this.ZERO = new Complex(0.0, 0.0);
    this.ONE = new Complex(1.0, 0.0);
  }
  Complex$Companion.prototype.fromImaginary_mx4ult$ = function (imaginary) {
    return new Complex(0.0, imaginary);
  };
  Complex$Companion.prototype.fromImaginaryInt_za3lpa$ = function (imaginary) {
    return new Complex(0.0, imaginary);
  };
  Complex$Companion.prototype.valueOf_5nl2e7$ = function (magnitude, phase) {
    return this.fromMagnitudeAndPhase_5nl2e7$(magnitude, phase);
  };
  Complex$Companion.prototype.fromMagnitudeAndPhase_5nl2e7$ = function (magnitude, phase) {
    return new Complex(magnitude * Math_0.cos(phase), magnitude * Math_0.sin(phase));
  };
  Complex$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Complex$Companion_instance = null;
  function Complex$Companion_getInstance() {
    if (Complex$Companion_instance === null) {
      new Complex$Companion();
    }
    return Complex$Companion_instance;
  }
  Complex.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Complex',
    interfaces: []
  };
  function Complex_init(real, imaginary, $this) {
    if (imaginary === void 0)
      imaginary = 0;
    $this = $this || Object.create(Complex.prototype);
    Complex.call($this, real, imaginary);
    return $this;
  }
  Complex.prototype.component1 = function () {
    return this.re;
  };
  Complex.prototype.component2 = function () {
    return this.im;
  };
  Complex.prototype.copy_dleff0$ = function (re, im) {
    return new Complex(re === void 0 ? this.re : re, im === void 0 ? this.im : im);
  };
  Complex.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.re) | 0;
    result = result * 31 + Kotlin.hashCode(this.im) | 0;
    return result;
  };
  Complex.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.re, other.re) && Kotlin.equals(this.im, other.im)))));
  };
  function Coords(x, y) {
    Coords$Companion_getInstance();
    this.x = x;
    this.y = y;
  }
  Coords.prototype.xx = function () {
    return this.x;
  };
  Coords.prototype.yy = function () {
    return this.y;
  };
  Coords.prototype.isOffGrid = function () {
    return this.x < 0 || this.y < 0 || this.x >= World_getInstance().shadowW() || this.y >= World_getInstance().shadowH();
  };
  Coords.prototype.xDiff_lfj9be$ = function (other) {
    return this.x - other.x | 0;
  };
  Coords.prototype.yDiff_lfj9be$ = function (other) {
    return this.y - other.y | 0;
  };
  Coords.prototype.distanceTo_lfj9be$ = function (other) {
    var xPow = Kotlin.imul(this.xDiff_lfj9be$(other), this.xDiff_lfj9be$(other));
    var yPow = Kotlin.imul(this.yDiff_lfj9be$(other), this.yDiff_lfj9be$(other));
    var x = xPow + yPow;
    var x_0 = Math_0.sqrt(x);
    return Math_0.abs(x_0);
  };
  Coords.prototype.getSurrounding_vux9f0$ = function (w, h) {
    var $receiver = listOf([new Coords(this.x - 1 | 0, this.y - 1 | 0), new Coords(this.x, this.y - 1 | 0), new Coords(this.x + 1 | 0, this.y - 1 | 0), new Coords(this.x - 1 | 0, this.y), new Coords(this.x + 1 | 0, this.y), new Coords(this.x - 1 | 0, this.y + 1 | 0), new Coords(this.x, this.y + 1 | 0), new Coords(this.x + 1 | 0, this.y + 1 | 0)]);
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.x >= 0 && element.x < w && element.y >= 0 && element.y < h)
        destination.add_11rb$(element);
    }
    return destination;
  };
  Coords.prototype.toGeo = function () {
    var latitude = Coords$Companion_getInstance().minLat_0 + this.x * Coords$Companion_getInstance().pixelPartLat_0;
    var longitude = Coords$Companion_getInstance().minLng_0 - this.y * Coords$Companion_getInstance().pixelPartLng_0;
    return new GeoCoords(longitude, latitude);
  };
  Coords.prototype.isClose_0 = function (location) {
    return (new Line(location, this)).calcLength() < Dimensions_getInstance().portalRadius * 2;
  };
  Coords.prototype.findClosePortals_0 = function () {
    var $receiver = World_getInstance().allPortals;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (this.isClose_0(element.location))
        destination.add_11rb$(element);
    }
    return destination;
  };
  Coords.prototype.toShadowPos = function () {
    return PathUtil_getInstance().posToShadowPos_lfj9be$(this);
  };
  Coords.prototype.isPassable = function () {
    return !World_getInstance().grid.isEmpty() && ensureNotNull(World_getInstance().grid.get_11rb$(this.toShadowPos())).isPassable;
  };
  Coords.prototype.hasClosePortal = function () {
    return !this.findClosePortals_0().isEmpty();
  };
  Coords.prototype.findClosestPortal = function () {
    return first(this.findClosePortals_0());
  };
  Coords.prototype.isBuildable = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6;
    var r = numberToInt(Dimensions_getInstance().minDistancePortalToImpassable);
    return this.isPassable() && !this.hasClosePortal() && ((tmp$_0 = (tmp$ = World_getInstance().grid.get_11rb$((new Coords(this.x - r | 0, this.y)).toShadowPos())) != null ? tmp$.isPassable : null) != null ? tmp$_0 : false) && ((tmp$_2 = (tmp$_1 = World_getInstance().grid.get_11rb$((new Coords(this.x + r | 0, this.y)).toShadowPos())) != null ? tmp$_1.isPassable : null) != null ? tmp$_2 : false) && ((tmp$_4 = (tmp$_3 = World_getInstance().grid.get_11rb$((new Coords(this.x, this.y - r | 0)).toShadowPos())) != null ? tmp$_3.isPassable : null) != null ? tmp$_4 : false) && ((tmp$_6 = (tmp$_5 = World_getInstance().grid.get_11rb$((new Coords(this.x, this.y + r | 0)).toShadowPos())) != null ? tmp$_5.isPassable : null) != null ? tmp$_6 : false);
  };
  Coords.prototype.toString = function () {
    return 'X' + this.x + ':Y' + this.y;
  };
  Coords.prototype.hashCode = function () {
    return hashCode(this.toString()) * 1337 | 0;
  };
  function Coords$Companion() {
    Coords$Companion_instance = this;
    this.defaultLat_0 = 47.4220454;
    this.defaultLng_0 = 9.3733032;
    this.latDist_0 = 0.002;
    this.lngDist_0 = this.latDist_0 * World_getInstance().can.height / World_getInstance().can.width;
    this.minLat_0 = this.defaultLat_0 - this.latDist_0;
    this.minLng_0 = this.defaultLng_0 + this.lngDist_0;
    this.pixelPartLat_0 = this.latDist_0 / World_getInstance().can.width;
    this.pixelPartLng_0 = this.lngDist_0 / World_getInstance().can.height;
    this.xMax_0 = numberToInt(Dimensions_getInstance().maxDeploymentRange) * 2 | 0;
  }
  Coords$Companion.prototype.createRandomNoOffset_0 = function () {
    return new Coords(Util_getInstance().randomInt_za3lpa$(World_getInstance().can.width), Util_getInstance().randomInt_za3lpa$(World_getInstance().can.height));
  };
  Coords$Companion.prototype.createRandom_0 = function () {
    var x = Dimensions_getInstance().leftOffset + Util_getInstance().randomInt_za3lpa$(numberToInt(World_getInstance().can.width - Dimensions_getInstance().leftOffset - Dimensions_getInstance().rightOffset));
    var y = Dimensions_getInstance().topOffset + Util_getInstance().randomInt_za3lpa$(numberToInt(World_getInstance().can.height - Dimensions_getInstance().topOffset - Dimensions_getInstance().botOffset));
    return new Coords(numberToInt(x), numberToInt(y));
  };
  Coords$Companion.prototype.createRandomForPortal = function () {
    var grid = World_getInstance().passableInActionArea();
    if (!!grid.isEmpty()) {
      var message = 'Check failed.';
      throw new IllegalStateException(message.toString());
    }
    var randomCell = first(Util_getInstance().shuffle_bemo1h$(toList(grid)));
    var pos = PathUtil_getInstance().shadowPosToPos_lfj9be$(randomCell.first);
    var offset = PathUtil_getInstance().RESOLUTION / 2 | 0;
    return new Coords(pos.x + offset | 0, pos.y + offset | 0);
  };
  Coords$Companion.prototype.createRandomPassable_5edep5$ = function (grid) {
    return this.createRandomPassable_0(grid, 10);
  };
  Coords$Companion.prototype.createRandomPassable_0 = function (grid, retries) {
    var tmp$;
    if (!!grid.isEmpty()) {
      var message = 'Check failed.';
      throw new IllegalStateException(message.toString());
    }
    var random = this.createRandomNoOffset_0();
    if (ensureNotNull(grid.get_11rb$(PathUtil_getInstance().posToShadowPos_lfj9be$(random))).isPassable) {
      return random;
    }
     else {
      if (retries > 0) {
        tmp$ = this.createRandomPassable_0(grid, retries - 1 | 0);
      }
       else {
        println('WARN: using blocked position: ' + toString(random));
        tmp$ = random;
      }
      return tmp$;
    }
  };
  Coords$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Coords$Companion_instance = null;
  function Coords$Companion_getInstance() {
    if (Coords$Companion_instance === null) {
      new Coords$Companion();
    }
    return Coords$Companion_instance;
  }
  Coords.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Coords',
    interfaces: []
  };
  Coords.prototype.component1 = function () {
    return this.x;
  };
  Coords.prototype.component2 = function () {
    return this.y;
  };
  Coords.prototype.copy_vux9f0$ = function (x, y) {
    return new Coords(x === void 0 ? this.x : x, y === void 0 ? this.y : y);
  };
  Coords.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y)))));
  };
  function Damage(value, pos, isCritical) {
    this.value = value;
    this.pos = pos;
    this.isCritical = isCritical;
  }
  Damage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Damage',
    interfaces: []
  };
  Damage.prototype.component1 = function () {
    return this.value;
  };
  Damage.prototype.component2 = function () {
    return this.pos;
  };
  Damage.prototype.component3 = function () {
    return this.isCritical;
  };
  Damage.prototype.copy_tlalnr$ = function (value, pos, isCritical) {
    return new Damage(value === void 0 ? this.value : value, pos === void 0 ? this.pos : pos, isCritical === void 0 ? this.isCritical : isCritical);
  };
  Damage.prototype.toString = function () {
    return 'Damage(value=' + Kotlin.toString(this.value) + (', pos=' + Kotlin.toString(this.pos)) + (', isCritical=' + Kotlin.toString(this.isCritical)) + ')';
  };
  Damage.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    result = result * 31 + Kotlin.hashCode(this.pos) | 0;
    result = result * 31 + Kotlin.hashCode(this.isCritical) | 0;
    return result;
  };
  Damage.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.value, other.value) && Kotlin.equals(this.pos, other.pos) && Kotlin.equals(this.isCritical, other.isCritical)))));
  };
  function Dim(width, height) {
    this.width = width;
    this.height = height;
  }
  Dim.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Dim',
    interfaces: []
  };
  Dim.prototype.component1 = function () {
    return this.width;
  };
  Dim.prototype.component2 = function () {
    return this.height;
  };
  Dim.prototype.copy_vux9f0$ = function (width, height) {
    return new Dim(width === void 0 ? this.width : width, height === void 0 ? this.height : height);
  };
  Dim.prototype.toString = function () {
    return 'Dim(width=' + Kotlin.toString(this.width) + (', height=' + Kotlin.toString(this.height)) + ')';
  };
  Dim.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.width) | 0;
    result = result * 31 + Kotlin.hashCode(this.height) | 0;
    return result;
  };
  Dim.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.width, other.width) && Kotlin.equals(this.height, other.height)))));
  };
  function GeoCircle(center, radius) {
    this.center = center;
    this.radius = radius;
  }
  GeoCircle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GeoCircle',
    interfaces: []
  };
  GeoCircle.prototype.component1 = function () {
    return this.center;
  };
  GeoCircle.prototype.component2 = function () {
    return this.radius;
  };
  GeoCircle.prototype.copy_as11nb$ = function (center, radius) {
    return new GeoCircle(center === void 0 ? this.center : center, radius === void 0 ? this.radius : radius);
  };
  GeoCircle.prototype.toString = function () {
    return 'GeoCircle(center=' + Kotlin.toString(this.center) + (', radius=' + Kotlin.toString(this.radius)) + ')';
  };
  GeoCircle.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.center) | 0;
    result = result * 31 + Kotlin.hashCode(this.radius) | 0;
    return result;
  };
  GeoCircle.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.center, other.center) && Kotlin.equals(this.radius, other.radius)))));
  };
  function GeoCoords(lng, lat) {
    this.lng = lng;
    this.lat = lat;
  }
  GeoCoords.prototype.lngDiff_qi7jkn$ = function (other) {
    return this.lng - other.lng;
  };
  GeoCoords.prototype.latDiff_qi7jkn$ = function (other) {
    return this.lat - other.lat;
  };
  GeoCoords.prototype.distanceTo_qi7jkn$ = function (other) {
    var lngPow = this.lngDiff_qi7jkn$(other) * this.lngDiff_qi7jkn$(other);
    var latPow = this.latDiff_qi7jkn$(other) * this.latDiff_qi7jkn$(other);
    var x = lngPow + latPow;
    var x_0 = Math_0.sqrt(x);
    return Math_0.abs(x_0);
  };
  GeoCoords.prototype.toString = function () {
    return 'Geo-' + this.lng + ':' + this.lat;
  };
  GeoCoords.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GeoCoords',
    interfaces: []
  };
  GeoCoords.prototype.component1 = function () {
    return this.lng;
  };
  GeoCoords.prototype.component2 = function () {
    return this.lat;
  };
  GeoCoords.prototype.copy_lu1900$ = function (lng, lat) {
    return new GeoCoords(lng === void 0 ? this.lng : lng, lat === void 0 ? this.lat : lat);
  };
  GeoCoords.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.lng) | 0;
    result = result * 31 + Kotlin.hashCode(this.lat) | 0;
    return result;
  };
  GeoCoords.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.lng, other.lng) && Kotlin.equals(this.lat, other.lat)))));
  };
  function GeoLine(from, to) {
    this.from = from;
    this.to = to;
  }
  GeoLine.prototype.calcXdiff = function () {
    var x = this.from.lng - this.to.lng;
    return Math_0.abs(x);
  };
  GeoLine.prototype.calcYdiff = function () {
    var x = this.from.lat - this.to.lat;
    return Math_0.abs(x);
  };
  GeoLine.prototype.calcLength = function () {
    var x = this.calcXdiff() * this.calcXdiff() + this.calcYdiff() * this.calcYdiff();
    return Math_0.sqrt(x);
  };
  GeoLine.prototype.doesIntersect_suw831$ = function (other) {
    var yFromDist = this.from.lat - other.from.lat;
    var xFromDist = this.from.lng - other.from.lng;
    var xDist = this.to.lng - this.from.lng;
    var yDist = this.to.lat - this.from.lat;
    var otherXDist = other.to.lng - other.from.lng;
    var otherYDist = other.to.lat - other.from.lat;
    var denominator = otherYDist * xDist - otherXDist * yDist;
    if (numberToInt(denominator) === 0) {
      return false;
    }
    var thisResult = (xDist * yFromDist - yDist * xFromDist) / denominator;
    var otherResult = (otherXDist * yFromDist - otherYDist * xFromDist) / denominator;
    var isOnThis = otherResult > 0 && otherResult < 1;
    var isOnOther = thisResult > 0 && thisResult < 1;
    return isOnThis && isOnOther;
  };
  GeoLine.prototype.findClosestPointTo_qi7jkn$ = function (geoPoint) {
    var tmp$;
    var xDiff = this.to.lng - this.from.lng;
    var yDiff = this.to.lat - this.from.lat;
    if (!(xDiff !== 0.0 || yDiff !== 0.0)) {
      var message = 'Check failed.';
      throw new IllegalStateException(message.toString());
    }
    var u = ((geoPoint.lng - this.from.lng) * xDiff + (geoPoint.lat - this.from.lat) * yDiff) / (xDiff * xDiff + yDiff * yDiff);
    if (u < 0)
      tmp$ = new GeoCoords(this.from.lng, this.from.lat);
    else if (u > 1)
      tmp$ = new GeoCoords(this.to.lng, this.to.lat);
    else
      tmp$ = new GeoCoords(round(this.from.lng + u * xDiff), round(this.from.lat + u * yDiff));
    return tmp$;
  };
  GeoLine.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GeoLine',
    interfaces: []
  };
  GeoLine.prototype.component1 = function () {
    return this.from;
  };
  GeoLine.prototype.component2 = function () {
    return this.to;
  };
  GeoLine.prototype.copy_motmke$ = function (from, to) {
    return new GeoLine(from === void 0 ? this.from : from, to === void 0 ? this.to : to);
  };
  GeoLine.prototype.toString = function () {
    return 'GeoLine(from=' + Kotlin.toString(this.from) + (', to=' + Kotlin.toString(this.to)) + ')';
  };
  GeoLine.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.from) | 0;
    result = result * 31 + Kotlin.hashCode(this.to) | 0;
    return result;
  };
  GeoLine.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.from, other.from) && Kotlin.equals(this.to, other.to)))));
  };
  function InfoWidget(div, callback) {
    InfoWidget$Companion_getInstance();
    this.div = div;
    this.callback = callback;
  }
  function InfoWidget$Companion() {
    InfoWidget$Companion_instance = this;
    this.COL = 'p-2';
    this.FLEX = 'd-flex';
    this.ROW = 'flex-row';
  }
  function InfoWidget$Companion$create$lambda(closure$content) {
    return function (text) {
      closure$content.innerText = text;
    };
  }
  InfoWidget$Companion.prototype.create_61zpoe$ = function (labelText) {
    var tmp$, tmp$_0, tmp$_1;
    var label = Kotlin.isType(tmp$ = document.createElement('div'), HTMLDivElement) ? tmp$ : throwCCE();
    addClass(label, [this.COL]);
    label.innerText = labelText;
    var content = Kotlin.isType(tmp$_0 = document.createElement('div'), HTMLDivElement) ? tmp$_0 : throwCCE();
    addClass(content, [this.COL]);
    var timeRow = Kotlin.isType(tmp$_1 = document.createElement('div'), HTMLDivElement) ? tmp$_1 : throwCCE();
    addClass(timeRow, [this.FLEX, this.ROW]);
    timeRow.append(label);
    timeRow.append(content);
    var callback = InfoWidget$Companion$create$lambda(content);
    return new InfoWidget(timeRow, callback);
  };
  InfoWidget$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var InfoWidget$Companion_instance = null;
  function InfoWidget$Companion_getInstance() {
    if (InfoWidget$Companion_instance === null) {
      new InfoWidget$Companion();
    }
    return InfoWidget$Companion_instance;
  }
  InfoWidget.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InfoWidget',
    interfaces: []
  };
  function Line(from, to) {
    this.from = from;
    this.to = to;
  }
  Line.prototype.key = function () {
    return this.from.toString() + '<--->' + this.to.toString();
  };
  Line.prototype.calcXdiff = function () {
    var x = this.from.x - this.to.x;
    return Math_0.abs(x);
  };
  Line.prototype.calcYdiff = function () {
    var x = this.from.y - this.to.y;
    return Math_0.abs(x);
  };
  Line.prototype.calcLength = function () {
    var x = this.calcXdiff() * this.calcXdiff() + this.calcYdiff() * this.calcYdiff();
    return Math_0.sqrt(x);
  };
  Line.prototype.calcTaxiLength = function () {
    return numberToInt(this.calcXdiff() + this.calcYdiff());
  };
  Line.prototype.center = function () {
    return new Coords((this.from.x + this.to.x | 0) / 2 | 0, (this.from.y + this.to.y | 0) / 2 | 0);
  };
  Line.prototype.doesIntersect_589y3w$ = function (other) {
    var yFromDist = this.from.y - other.from.y | 0;
    var xFromDist = this.from.x - other.from.x | 0;
    var xDist = this.to.x - this.from.x | 0;
    var yDist = this.to.y - this.from.y | 0;
    var otherXDist = other.to.x - other.from.x;
    var otherYDist = other.to.y - other.from.y;
    var denominator = otherYDist * xDist - otherXDist * yDist;
    if (numberToInt(denominator) === 0) {
      return false;
    }
    var thisResult = (Kotlin.imul(xDist, yFromDist) - Kotlin.imul(yDist, xFromDist) | 0) / denominator;
    var otherResult = (otherXDist * yFromDist - otherYDist * xFromDist) / denominator;
    var isOnThis = otherResult > 0 && otherResult < 1;
    var isOnOther = thisResult > 0 && thisResult < 1;
    return isOnThis && isOnOther;
  };
  Line.prototype.findClosestPointTo_lfj9be$ = function (point) {
    var tmp$;
    var xDiff = this.to.x - this.from.x | 0;
    var yDiff = this.to.y - this.from.y | 0;
    if (!(xDiff !== 0.0 || yDiff !== 0.0)) {
      var message = 'Check failed.';
      throw new IllegalStateException(message.toString());
    }
    var u = ((point.x - this.from.x | 0) * xDiff + (point.y - this.from.y | 0) * yDiff) / (xDiff * xDiff + yDiff * yDiff);
    if (u < 0)
      tmp$ = new Coords(this.from.x, this.from.y);
    else if (u > 1)
      tmp$ = new Coords(this.to.x, this.to.y);
    else
      tmp$ = new Coords(numberToInt(round(this.from.x + u * xDiff)), numberToInt(round(this.from.y + u * yDiff)));
    return tmp$;
  };
  Line.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Line',
    interfaces: []
  };
  Line.prototype.component1 = function () {
    return this.from;
  };
  Line.prototype.component2 = function () {
    return this.to;
  };
  Line.prototype.copy_4fg3xo$ = function (from, to) {
    return new Line(from === void 0 ? this.from : from, to === void 0 ? this.to : to);
  };
  Line.prototype.toString = function () {
    return 'Line(from=' + Kotlin.toString(this.from) + (', to=' + Kotlin.toString(this.to)) + ')';
  };
  Line.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.from) | 0;
    result = result * 31 + Kotlin.hashCode(this.to) | 0;
    return result;
  };
  Line.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.from, other.from) && Kotlin.equals(this.to, other.to)))));
  };
  function AgentsTableWidget(div) {
    AgentsTableWidget$Companion_getInstance();
    this.div = div;
  }
  AgentsTableWidget.prototype.update_dr8g31$ = function (agents) {
    var tmp$;
    tmp$ = agents.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      var row = Kotlin.isType(tmp$_0 = document.createElement('div'), HTMLDivElement) ? tmp$_0 : throwCCE();
      addClass(row, ['row']);
      var nameCol = AgentsTableWidget$Companion_getInstance().createColumn_0(element.name);
      row.append(nameCol);
      var actionCol = AgentsTableWidget$Companion_getInstance().createColumn_0(element.action.toString());
      row.append(actionCol);
      var inventoryCol = AgentsTableWidget$Companion_getInstance().createColumn_0(element.inventory.toString());
      row.append(inventoryCol);
      this.div.appendChild(row);
    }
  };
  function AgentsTableWidget$Companion() {
    AgentsTableWidget$Companion_instance = this;
  }
  AgentsTableWidget$Companion.prototype.create = function () {
    var tmp$, tmp$_0;
    var table = Kotlin.isType(tmp$ = document.createElement('div'), HTMLDivElement) ? tmp$ : throwCCE();
    var header = Kotlin.isType(tmp$_0 = document.createElement('div'), HTMLDivElement) ? tmp$_0 : throwCCE();
    addClass(header, ['row']);
    header.append(this.createColumn_0('Name'));
    header.append(this.createColumn_0('Status'));
    header.append(this.createColumn_0('Inventory'));
    table.appendChild(header);
    return new AgentsTableWidget(table);
  };
  AgentsTableWidget$Companion.prototype.createColumn_0 = function (text) {
    var tmp$;
    var column = Kotlin.isType(tmp$ = document.createElement('div'), HTMLDivElement) ? tmp$ : throwCCE();
    addClass(column, ['col-md-3', 'col-xs-3']);
    column.innerText = text;
    return column;
  };
  AgentsTableWidget$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var AgentsTableWidget$Companion_instance = null;
  function AgentsTableWidget$Companion_getInstance() {
    if (AgentsTableWidget$Companion_instance === null) {
      new AgentsTableWidget$Companion();
    }
    return AgentsTableWidget$Companion_instance;
  }
  AgentsTableWidget.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AgentsTableWidget',
    interfaces: []
  };
  _.main_kand9s$ = main;
  _.isNotHandledByCanvas_lfj9be$ = isNotHandledByCanvas;
  _.handleMouseClick_9ojx7i$ = handleMouseClick;
  _.handleMouseMove_9ojx7i$ = handleMouseMove;
  _.findMousePosition_ferqyr$ = findMousePosition;
  Object.defineProperty(_, 'World', {
    get: World_getInstance
  });
  Object.defineProperty(Agent, 'Companion', {
    get: Agent$Companion_getInstance
  });
  var package$agent = _.agent || (_.agent = {});
  package$agent.Agent = Agent;
  Object.defineProperty(Faction, 'NONE', {
    get: Faction$NONE_getInstance
  });
  Object.defineProperty(Faction, 'ENL', {
    get: Faction$ENL_getInstance
  });
  Object.defineProperty(Faction, 'RES', {
    get: Faction$RES_getInstance
  });
  Object.defineProperty(Faction, 'Companion', {
    get: Faction$Companion_getInstance
  });
  package$agent.Faction = Faction;
  package$agent.Inventory = Inventory;
  Object.defineProperty(NonFaction, 'Companion', {
    get: NonFaction$Companion_getInstance
  });
  package$agent.NonFaction = NonFaction;
  Object.defineProperty(Skills, 'Companion', {
    get: Skills$Companion_getInstance
  });
  package$agent.Skills = Skills;
  Object.defineProperty(Action, 'Companion', {
    get: Action$Companion_getInstance
  });
  var package$action = package$agent.action || (package$agent.action = {});
  package$action.Action = Action;
  Object.defineProperty(ActionItem, 'Companion', {
    get: ActionItem$Companion_getInstance
  });
  package$action.ActionItem = ActionItem;
  var package$config = _.config || (_.config = {});
  Object.defineProperty(package$config, 'Colors', {
    get: Colors_getInstance
  });
  Object.defineProperty(package$config, 'Config', {
    get: Config_getInstance
  });
  Object.defineProperty(package$config, 'Constants', {
    get: Constants_getInstance
  });
  Object.defineProperty(package$config, 'Dimensions', {
    get: Dimensions_getInstance
  });
  Object.defineProperty(package$config, 'OscillatorType', {
    get: OscillatorType_getInstance
  });
  Object.defineProperty(package$config, 'Probabilities', {
    get: Probabilities_getInstance
  });
  Object.defineProperty(Styles$VectorStyle, 'CIRCLE', {
    get: Styles$VectorStyle$CIRCLE_getInstance
  });
  Object.defineProperty(Styles$VectorStyle, 'SQUARE', {
    get: Styles$VectorStyle$SQUARE_getInstance
  });
  Styles.prototype.VectorStyle = Styles$VectorStyle;
  Object.defineProperty(package$config, 'Styles', {
    get: Styles_getInstance
  });
  Object.defineProperty(package$config, 'Time', {
    get: Time_getInstance
  });
  Object.defineProperty(PowerCube, 'Companion', {
    get: PowerCube$Companion_getInstance
  });
  var package$items = _.items || (_.items = {});
  package$items.PowerCube = PowerCube;
  package$items.QgressItem = QgressItem;
  package$items.UltraStrike = UltraStrike;
  Object.defineProperty(XmpBurster, 'Companion', {
    get: XmpBurster$Companion_getInstance
  });
  package$items.XmpBurster = XmpBurster;
  var package$deployable = package$items.deployable || (package$items.deployable = {});
  package$deployable.DeployableItem = DeployableItem;
  Object.defineProperty(LinkAmp, 'Companion', {
    get: LinkAmp$Companion_getInstance
  });
  package$deployable.LinkAmp = LinkAmp;
  Object.defineProperty(Multihack, 'Companion', {
    get: Multihack$Companion_getInstance
  });
  package$deployable.Multihack = Multihack;
  Object.defineProperty(Resonator, 'Companion', {
    get: Resonator$Companion_getInstance
  });
  package$deployable.Resonator = Resonator;
  package$deployable.Shield = Shield;
  package$deployable.Virus = Virus;
  Object.defineProperty(PortalLevel, 'ZERO', {
    get: PortalLevel$ZERO_getInstance
  });
  Object.defineProperty(PortalLevel, 'ONE', {
    get: PortalLevel$ONE_getInstance
  });
  Object.defineProperty(PortalLevel, 'TWO', {
    get: PortalLevel$TWO_getInstance
  });
  Object.defineProperty(PortalLevel, 'THREE', {
    get: PortalLevel$THREE_getInstance
  });
  Object.defineProperty(PortalLevel, 'FOUR', {
    get: PortalLevel$FOUR_getInstance
  });
  Object.defineProperty(PortalLevel, 'FIVE', {
    get: PortalLevel$FIVE_getInstance
  });
  Object.defineProperty(PortalLevel, 'SIX', {
    get: PortalLevel$SIX_getInstance
  });
  Object.defineProperty(PortalLevel, 'SEVEN', {
    get: PortalLevel$SEVEN_getInstance
  });
  Object.defineProperty(PortalLevel, 'EIGHT', {
    get: PortalLevel$EIGHT_getInstance
  });
  Object.defineProperty(PortalLevel, 'Companion', {
    get: PortalLevel$Companion_getInstance
  });
  var package$level = package$items.level || (package$items.level = {});
  package$level.PortalLevel = PortalLevel;
  Object.defineProperty(PowerCubeLevel, 'ONE', {
    get: PowerCubeLevel$ONE_getInstance
  });
  Object.defineProperty(PowerCubeLevel, 'TWO', {
    get: PowerCubeLevel$TWO_getInstance
  });
  Object.defineProperty(PowerCubeLevel, 'THREE', {
    get: PowerCubeLevel$THREE_getInstance
  });
  Object.defineProperty(PowerCubeLevel, 'FOUR', {
    get: PowerCubeLevel$FOUR_getInstance
  });
  Object.defineProperty(PowerCubeLevel, 'FIVE', {
    get: PowerCubeLevel$FIVE_getInstance
  });
  Object.defineProperty(PowerCubeLevel, 'SIX', {
    get: PowerCubeLevel$SIX_getInstance
  });
  Object.defineProperty(PowerCubeLevel, 'SEVEN', {
    get: PowerCubeLevel$SEVEN_getInstance
  });
  Object.defineProperty(PowerCubeLevel, 'EIGHT', {
    get: PowerCubeLevel$EIGHT_getInstance
  });
  Object.defineProperty(PowerCubeLevel, 'Companion', {
    get: PowerCubeLevel$Companion_getInstance
  });
  package$level.PowerCubeLevel = PowerCubeLevel;
  Object.defineProperty(ResonatorLevel, 'ONE', {
    get: ResonatorLevel$ONE_getInstance
  });
  Object.defineProperty(ResonatorLevel, 'TWO', {
    get: ResonatorLevel$TWO_getInstance
  });
  Object.defineProperty(ResonatorLevel, 'THREE', {
    get: ResonatorLevel$THREE_getInstance
  });
  Object.defineProperty(ResonatorLevel, 'FOUR', {
    get: ResonatorLevel$FOUR_getInstance
  });
  Object.defineProperty(ResonatorLevel, 'FIVE', {
    get: ResonatorLevel$FIVE_getInstance
  });
  Object.defineProperty(ResonatorLevel, 'SIX', {
    get: ResonatorLevel$SIX_getInstance
  });
  Object.defineProperty(ResonatorLevel, 'SEVEN', {
    get: ResonatorLevel$SEVEN_getInstance
  });
  Object.defineProperty(ResonatorLevel, 'EIGHT', {
    get: ResonatorLevel$EIGHT_getInstance
  });
  Object.defineProperty(ResonatorLevel, 'Companion', {
    get: ResonatorLevel$Companion_getInstance
  });
  package$level.ResonatorLevel = ResonatorLevel;
  Object.defineProperty(UltraStrikeLevel, 'ONE', {
    get: UltraStrikeLevel$ONE_getInstance
  });
  Object.defineProperty(UltraStrikeLevel, 'TWO', {
    get: UltraStrikeLevel$TWO_getInstance
  });
  Object.defineProperty(UltraStrikeLevel, 'THREE', {
    get: UltraStrikeLevel$THREE_getInstance
  });
  Object.defineProperty(UltraStrikeLevel, 'FOUR', {
    get: UltraStrikeLevel$FOUR_getInstance
  });
  Object.defineProperty(UltraStrikeLevel, 'FIVE', {
    get: UltraStrikeLevel$FIVE_getInstance
  });
  Object.defineProperty(UltraStrikeLevel, 'SIX', {
    get: UltraStrikeLevel$SIX_getInstance
  });
  Object.defineProperty(UltraStrikeLevel, 'SEVEN', {
    get: UltraStrikeLevel$SEVEN_getInstance
  });
  Object.defineProperty(UltraStrikeLevel, 'EIGHT', {
    get: UltraStrikeLevel$EIGHT_getInstance
  });
  Object.defineProperty(UltraStrikeLevel, 'Companion', {
    get: UltraStrikeLevel$Companion_getInstance
  });
  package$level.UltraStrikeLevel = UltraStrikeLevel;
  Object.defineProperty(XmpLevel, 'ONE', {
    get: XmpLevel$ONE_getInstance
  });
  Object.defineProperty(XmpLevel, 'TWO', {
    get: XmpLevel$TWO_getInstance
  });
  Object.defineProperty(XmpLevel, 'THREE', {
    get: XmpLevel$THREE_getInstance
  });
  Object.defineProperty(XmpLevel, 'FOUR', {
    get: XmpLevel$FOUR_getInstance
  });
  Object.defineProperty(XmpLevel, 'FIVE', {
    get: XmpLevel$FIVE_getInstance
  });
  Object.defineProperty(XmpLevel, 'SIX', {
    get: XmpLevel$SIX_getInstance
  });
  Object.defineProperty(XmpLevel, 'SEVEN', {
    get: XmpLevel$SEVEN_getInstance
  });
  Object.defineProperty(XmpLevel, 'EIGHT', {
    get: XmpLevel$EIGHT_getInstance
  });
  Object.defineProperty(XmpLevel, 'Companion', {
    get: XmpLevel$Companion_getInstance
  });
  package$level.XmpLevel = XmpLevel;
  Object.defineProperty(LinkAmpType, 'RARE', {
    get: LinkAmpType$RARE_getInstance
  });
  Object.defineProperty(LinkAmpType, 'VERY_RARE', {
    get: LinkAmpType$VERY_RARE_getInstance
  });
  var package$types = package$items.types || (package$items.types = {});
  package$types.LinkAmpType = LinkAmpType;
  Object.defineProperty(ModType, 'RES_SHIELD', {
    get: ModType$RES_SHIELD_getInstance
  });
  Object.defineProperty(ModType, 'MULTIHACK', {
    get: ModType$MULTIHACK_getInstance
  });
  Object.defineProperty(ModType, 'FORCE_AMP', {
    get: ModType$FORCE_AMP_getInstance
  });
  Object.defineProperty(ModType, 'HEATSINK', {
    get: ModType$HEATSINK_getInstance
  });
  Object.defineProperty(ModType, 'TURRET', {
    get: ModType$TURRET_getInstance
  });
  Object.defineProperty(ModType, 'LINK_AMPLIFIER', {
    get: ModType$LINK_AMPLIFIER_getInstance
  });
  package$types.ModType = ModType;
  Object.defineProperty(MultihackType, 'COMMON', {
    get: MultihackType$COMMON_getInstance
  });
  Object.defineProperty(MultihackType, 'RARE', {
    get: MultihackType$RARE_getInstance
  });
  Object.defineProperty(MultihackType, 'VERY_RARE', {
    get: MultihackType$VERY_RARE_getInstance
  });
  package$types.MultihackType = MultihackType;
  Object.defineProperty(ShieldType, 'COMMON', {
    get: ShieldType$COMMON_getInstance
  });
  Object.defineProperty(ShieldType, 'RARE', {
    get: ShieldType$RARE_getInstance
  });
  Object.defineProperty(ShieldType, 'VERY_RARE', {
    get: ShieldType$VERY_RARE_getInstance
  });
  Object.defineProperty(ShieldType, 'AXA', {
    get: ShieldType$AXA_getInstance
  });
  package$types.ShieldType = ShieldType;
  Object.defineProperty(VirusType, 'JARVIS_VIRUS', {
    get: VirusType$JARVIS_VIRUS_getInstance
  });
  Object.defineProperty(VirusType, 'ADA_REFACTOR', {
    get: VirusType$ADA_REFACTOR_getInstance
  });
  package$types.VirusType = VirusType;
  Object.defineProperty(Cooldown, 'BURNOUT', {
    get: Cooldown$BURNOUT_getInstance
  });
  Object.defineProperty(Cooldown, 'FIVE', {
    get: Cooldown$FIVE_getInstance
  });
  Object.defineProperty(Cooldown, 'THREE', {
    get: Cooldown$THREE_getInstance
  });
  Object.defineProperty(Cooldown, 'TWO', {
    get: Cooldown$TWO_getInstance
  });
  Object.defineProperty(Cooldown, 'ONE', {
    get: Cooldown$ONE_getInstance
  });
  Object.defineProperty(Cooldown, 'HALF', {
    get: Cooldown$HALF_getInstance
  });
  Object.defineProperty(Cooldown, 'MIN', {
    get: Cooldown$MIN_getInstance
  });
  Object.defineProperty(Cooldown, 'NONE', {
    get: Cooldown$NONE_getInstance
  });
  Object.defineProperty(Cooldown, 'Companion', {
    get: Cooldown$Companion_getInstance
  });
  var package$portal = _.portal || (_.portal = {});
  package$portal.Cooldown = Cooldown;
  Object.defineProperty(Field, 'Companion', {
    get: Field$Companion_getInstance
  });
  package$portal.Field = Field;
  package$portal.HackResult = HackResult;
  Object.defineProperty(Link, 'Companion', {
    get: Link$Companion_getInstance
  });
  package$portal.Link = Link;
  package$portal.LinkResult = LinkResult;
  Object.defineProperty(ModSlot, 'FIRST', {
    get: ModSlot$FIRST_getInstance
  });
  Object.defineProperty(ModSlot, 'SECOND', {
    get: ModSlot$SECOND_getInstance
  });
  Object.defineProperty(ModSlot, 'THIRD', {
    get: ModSlot$THIRD_getInstance
  });
  Object.defineProperty(ModSlot, 'FOUTH', {
    get: ModSlot$FOUTH_getInstance
  });
  package$portal.ModSlot = ModSlot;
  Object.defineProperty(Octant, 'E', {
    get: Octant$E_getInstance
  });
  Object.defineProperty(Octant, 'SE', {
    get: Octant$SE_getInstance
  });
  Object.defineProperty(Octant, 'S', {
    get: Octant$S_getInstance
  });
  Object.defineProperty(Octant, 'SW', {
    get: Octant$SW_getInstance
  });
  Object.defineProperty(Octant, 'W', {
    get: Octant$W_getInstance
  });
  Object.defineProperty(Octant, 'NW', {
    get: Octant$NW_getInstance
  });
  Object.defineProperty(Octant, 'N', {
    get: Octant$N_getInstance
  });
  Object.defineProperty(Octant, 'NE', {
    get: Octant$NE_getInstance
  });
  package$portal.Octant = Octant;
  Object.defineProperty(Portal, 'Companion', {
    get: Portal$Companion_getInstance
  });
  package$portal.Portal = Portal;
  Object.defineProperty(PortalKey, 'Companion', {
    get: PortalKey$Companion_getInstance
  });
  package$portal.PortalKey = PortalKey;
  Object.defineProperty(Quality, 'BEST', {
    get: Quality$BEST_getInstance
  });
  Object.defineProperty(Quality, 'GOOD', {
    get: Quality$GOOD_getInstance
  });
  Object.defineProperty(Quality, 'MORE', {
    get: Quality$MORE_getInstance
  });
  package$portal.Quality = Quality;
  package$portal.ResonatorSlot = ResonatorSlot;
  var package$system = _.system || (_.system = {});
  Object.defineProperty(package$system, 'Checkpoint', {
    get: Checkpoint_getInstance
  });
  Object.defineProperty(package$system, 'Com', {
    get: Com_getInstance
  });
  Object.defineProperty(package$system, 'Cycle', {
    get: Cycle_getInstance
  });
  Object.defineProperty(package$system, 'Queues', {
    get: Queues_getInstance
  });
  var package$util = _.util || (_.util = {});
  Object.defineProperty(package$util, 'ColorUtil', {
    get: ColorUtil_getInstance
  });
  Object.defineProperty(package$util, 'DrawUtil', {
    get: DrawUtil_getInstance
  });
  Object.defineProperty(package$util, 'HtmlUtil', {
    get: HtmlUtil_getInstance
  });
  Object.defineProperty(_, 'ImprovedNoise', {
    get: ImprovedNoise_getInstance
  });
  Object.defineProperty(package$util, 'MapUtil', {
    get: MapUtil_getInstance
  });
  Object.defineProperty(package$util, 'PathUtil', {
    get: PathUtil_getInstance
  });
  Object.defineProperty(package$util, 'SoundUtil', {
    get: SoundUtil_getInstance
  });
  Object.defineProperty(package$util, 'Util', {
    get: Util_getInstance
  });
  var package$data = package$util.data || (package$util.data = {});
  package$data.Cell = Cell;
  package$data.Circle = Circle;
  Object.defineProperty(Complex, 'Companion', {
    get: Complex$Companion_getInstance
  });
  package$data.Complex_init_vux9f0$ = Complex_init;
  package$data.Complex = Complex;
  Object.defineProperty(Coords, 'Companion', {
    get: Coords$Companion_getInstance
  });
  package$data.Coords = Coords;
  package$data.Damage = Damage;
  package$data.Dim = Dim;
  package$data.GeoCircle = GeoCircle;
  package$data.GeoCoords = GeoCoords;
  package$data.GeoLine = GeoLine;
  Object.defineProperty(InfoWidget, 'Companion', {
    get: InfoWidget$Companion_getInstance
  });
  package$data.InfoWidget = InfoWidget;
  package$data.Line = Line;
  Object.defineProperty(AgentsTableWidget, 'Companion', {
    get: AgentsTableWidget$Companion_getInstance
  });
  var package$html = package$data.html || (package$data.html = {});
  package$html.AgentsTableWidget = AgentsTableWidget;
  main([]);
  Kotlin.defineModule('QGress', _);
  return _;
}(typeof QGress === 'undefined' ? {} : QGress, kotlin);