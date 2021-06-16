/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/main.ts","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Engine/CPIndicator.ts":
/*!***********************************!*\
  !*** ./src/Engine/CPIndicator.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CPIndicator = void 0;
var GameObject_1 = __webpack_require__(/*! ./GameObject */ "./src/Engine/GameObject.ts");
var SceneManager_1 = __webpack_require__(/*! ./SceneManager */ "./src/Engine/SceneManager.ts");
var DrawFunctions_1 = __webpack_require__(/*! ../Utility/DrawFunctions */ "./src/Utility/DrawFunctions.ts");
var GameManager_1 = __webpack_require__(/*! ./GameManager */ "./src/Engine/GameManager.ts");
var CPIndicator = /** @class */ (function (_super) {
    __extends(CPIndicator, _super);
    function CPIndicator(time, transform, colour) {
        var _this = _super.call(this) || this;
        _this.lifeTime = time !== null && time !== void 0 ? time : 5;
        _this.triggered = false;
        _this.graphic = new PIXI.Graphics();
        SceneManager_1.SceneManager.getInstance().rbGraphics.push(_this.graphic);
        DrawFunctions_1.DrawFunction.drawPoint(GameManager_1.GameManager.getInstance().app, _this.graphic, colour, transform.x, transform.y, 5);
        return _this;
    }
    CPIndicator.prototype.Update = function (delta) {
        _super.prototype.Update.call(this, delta);
        this.updateLifeTime(delta);
    };
    CPIndicator.prototype.updateLifeTime = function (delta) {
        this.lifeTime -= delta;
        if (this.lifeTime <= 0) {
            GameManager_1.GameManager.getInstance().app.stage.removeChild(this.graphic);
            GameObject_1.GameObject.Destroy(this);
        }
    };
    return CPIndicator;
}(GameObject_1.GameObject));
exports.CPIndicator = CPIndicator;


/***/ }),

/***/ "./src/Engine/CatMullRomSpline.ts":
/*!****************************************!*\
  !*** ./src/Engine/CatMullRomSpline.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CatMullRomSpline = void 0;
var Vector2_1 = __webpack_require__(/*! ../Utility/Vector2 */ "./src/Utility/Vector2.ts");
var DrawFunctions_1 = __webpack_require__(/*! ../Utility/DrawFunctions */ "./src/Utility/DrawFunctions.ts");
var CatMullRomSpline = /** @class */ (function () {
    function CatMullRomSpline(parent) {
        this.lastPoint = 0;
        this.currentPoint = 1;
        this.splinePath = [];
        this.segmentLengths = [];
        this.totalSplineLength = 0;
        this.stepSize = 0.01;
        this.parent = parent !== null && parent !== void 0 ? parent : null;
    }
    CatMullRomSpline.prototype.GetSplinePoint = function (value) {
        var node, xCoord, yCoord;
        node = value - Math.floor(value);
        this.currentPoint = Math.floor(value) + 1;
        xCoord = this.CatmullRom(node, this.splinePath[this.currentPoint - 1].x, this.splinePath[this.currentPoint].x, this.splinePath[this.currentPoint + 1].x, this.splinePath[this.currentPoint + 2].x);
        yCoord = this.CatmullRom(node, this.splinePath[this.currentPoint - 1].y, this.splinePath[this.currentPoint].y, this.splinePath[this.currentPoint + 1].y, this.splinePath[this.currentPoint + 2].y);
        return new Vector2_1.Vector2(xCoord, yCoord);
    };
    CatMullRomSpline.prototype.GetNormalisedOffset = function (position) {
        var count = 0;
        while (position > this.segmentLengths[count]) {
            position -= this.segmentLengths[count];
            count++;
        }
        return count + (position / this.segmentLengths[count]);
    };
    CatMullRomSpline.prototype.CalculateSegmentLengths = function () {
        var old_point, new_point;
        for (var index = 0; index < this.splinePath.length - 3; index++) {
            var sLength = 0;
            old_point = this.GetSplinePoint(index);
            for (var scan = 0; scan <= 1.0; scan += this.stepSize) {
                new_point = this.GetSplinePoint(index + scan);
                var arcValue = Math.sqrt((new_point.x - old_point.x) * (new_point.x - old_point.x) + (new_point.y - old_point.y) * (new_point.y - old_point.y));
                sLength += arcValue;
                old_point = new_point;
            }
            this.segmentLengths.push(sLength);
            this.totalSplineLength += sLength;
        }
    };
    CatMullRomSpline.prototype.CatmullRom = function (t, p0, p1, p2, p3) {
        var t_pow2 = t * t;
        var t_pow3 = t * t * t;
        var f1 = (2 * p1) + (-p0 + p2) * t;
        var f2 = (2 * p0 - 5 * p1 + 4 * p2 - p3) * t_pow2;
        var f3 = (-p0 + 3 * p1 - 3 * p2 + p3) * t_pow3;
        return 0.5 * (f1 + f2 + f3);
    };
    CatMullRomSpline.prototype.DrawAllSplinePoints = function (app, color, graphicsArray) {
        this.splinePath.forEach(function (element) {
            var k = new PIXI.Graphics();
            graphicsArray.push(k);
            DrawFunctions_1.DrawFunction.drawPoint(app, k, color, element.x, element.y);
        });
    };
    CatMullRomSpline.prototype.CreateRandomControlPoints = function () {
        this.splinePath.push(new Vector2_1.Vector2(100, 210));
        this.splinePath.push(new Vector2_1.Vector2(120, 600));
        this.splinePath.push(new Vector2_1.Vector2(240, 210));
        this.splinePath.push(new Vector2_1.Vector2(340, 600));
        this.splinePath.push(new Vector2_1.Vector2(600, 620));
        this.splinePath.push(new Vector2_1.Vector2(700, 570));
        this.CalculateSegmentLengths();
        this.PrintList();
    };
    CatMullRomSpline.prototype.CreateSplineFromList = function (splinePoints) {
        this.splinePath = null;
        this.splinePath = splinePoints;
        this.lastPoint = splinePoints.length - 1;
        this.CalculateSegmentLengths();
    };
    CatMullRomSpline.prototype.PrintList = function () {
        this.segmentLengths.forEach(function (element) {
            console.log("Length: " + element);
        });
    };
    return CatMullRomSpline;
}());
exports.CatMullRomSpline = CatMullRomSpline;


/***/ }),

/***/ "./src/Engine/Collider.ts":
/*!********************************!*\
  !*** ./src/Engine/Collider.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Collider = void 0;
var Vector2_1 = __webpack_require__(/*! ../Utility/Vector2 */ "./src/Utility/Vector2.ts");
var pixi_js_1 = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/index.js");
var CollisionHelper_1 = __webpack_require__(/*! ./CollisionHelper */ "./src/Engine/CollisionHelper.ts");
var Collider = /** @class */ (function () {
    function Collider(parentGameObject) {
        this.vertices = [];
        this.normalsR = [];
        this.parentGameObject = parentGameObject;
    }
    ;
    Collider.prototype.setDimensions = function (width, height, transform) {
        this.colliderWidth = width;
        this.colliderHeight = height;
        this.colliderRotation = transform.rotation;
        this.colliderCenter = Vector2_1.Vector2.vectorFromPoint(transform.position);
        this.updateVertexPositions();
    };
    Collider.prototype.updateVertexPositions = function () {
        this.vertices[0] = new Vector2_1.Vector2(this.colliderWidth / 2, this.colliderHeight / 2).addVector(this.colliderCenter);
        this.vertices[1] = new Vector2_1.Vector2(-this.colliderWidth / 2, this.colliderHeight / 2).addVector(this.colliderCenter);
        this.vertices[2] = new Vector2_1.Vector2(-this.colliderWidth / 2, -this.colliderHeight / 2).addVector(this.colliderCenter);
        this.vertices[3] = new Vector2_1.Vector2(this.colliderWidth / 2, -this.colliderHeight / 2).addVector(this.colliderCenter);
        this.addVertexRotation(this.colliderRotation);
    };
    Collider.prototype.addVertexRotation = function (rotation) {
        for (var count = 0; count < this.vertices.length; count++) {
            var movePoint = new pixi_js_1.Point();
            movePoint.x = Math.cos(rotation) * (this.vertices[count].x - this.colliderCenter.x) - Math.sin(rotation) * (this.vertices[count].y - this.colliderCenter.y);
            movePoint.y = Math.sin(rotation) * (this.vertices[count].x - this.colliderCenter.x) + Math.cos(rotation) * (this.vertices[count].y - this.colliderCenter.y);
            this.vertices[count] = new Vector2_1.Vector2(movePoint.x, movePoint.y).addVector(this.colliderCenter);
        }
        this.updateEdgeNormals();
    };
    Collider.prototype.updateEdgeNormals = function () {
        for (var count = 0; count < this.vertices.length; count++) {
            var index = count + 1 < this.vertices.length ? count + 1 : 0;
            var edge = new Vector2_1.Vector2(this.vertices[count].x - this.vertices[index].x, this.vertices[count].y - this.vertices[index].y);
            this.normalsR[count] = edge.normalVectorL().normalizeVector();
        }
    };
    Collider.prototype.project = function (axis) {
        var min = axis.dot(this.vertices[0]);
        var max = min;
        for (var count = 1; count < this.vertices.length; count++) {
            var dotproduct = axis.dot(this.vertices[count]);
            if (dotproduct < min) {
                min = dotproduct;
            }
            else if (max < dotproduct) {
                max = dotproduct;
            }
        }
        return new CollisionHelper_1.Projection(min, max);
    };
    /*
         Derived from https://dyn4j.org/2010/01/sat/#sat-algo
     */
    Collider.prototype.checkForCollisions = function (c2) {
        var _this = this;
        if ((!this.isOn || !c2.isOn) || (this.parentGameObject.rigidbody.infiniteMass && c2.parentGameObject.rigidbody.infiniteMass)) {
            return new CollisionHelper_1.MTV(null, null, false);
        }
        var colliding = true;
        var mtv_axis = null;
        var minOverlapValue = 100000000;
        this.normalsR.forEach(function (element) {
            var proj1 = _this.project(element);
            var proj2 = c2.project(element);
            if (!proj1.checkForOverlap(proj2)) {
                colliding = false;
                return;
            }
            else {
                var overlap = Math.min(proj1.max, proj2.max) - Math.max(proj1.min, proj2.min);
                if (overlap < minOverlapValue) {
                    minOverlapValue = overlap;
                    mtv_axis = element;
                }
            }
        });
        c2.normalsR.forEach(function (element) {
            var proj1 = _this.project(element);
            var proj2 = c2.project(element);
            if (!proj1.checkForOverlap(proj2)) {
                colliding = false;
                return;
            }
            else {
                var overlap = Math.min(proj1.max, proj2.max) - Math.max(proj1.min, proj2.min);
                if (overlap < minOverlapValue) {
                    minOverlapValue = overlap;
                    mtv_axis = element;
                }
            }
        });
        if (colliding.valueOf() === false) {
            return new CollisionHelper_1.MTV(null, null, false);
        }
        mtv_axis = this.fixDirectionShapeAB(this, c2, mtv_axis);
        var mtv = new CollisionHelper_1.MTV(mtv_axis, minOverlapValue, colliding);
        mtv.edge1 = this.calculateBestEdge(mtv.axis);
        mtv.edge2 = c2.calculateBestEdge(mtv.axis.negate());
        var referenceEdge, incidentEdge;
        var flipped = false;
        if (Math.abs(mtv.edge1.edge.dot(mtv_axis)) <= Math.abs(mtv.edge2.edge.dot(mtv_axis))) {
            referenceEdge = mtv.edge1;
            incidentEdge = mtv.edge2;
        }
        else {
            referenceEdge = mtv.edge2;
            incidentEdge = mtv.edge1;
            flipped = true;
        }
        mtv.cp = this.calculateContactPoint(referenceEdge, incidentEdge, flipped, mtv);
        mtv.incidentObject = incidentEdge === mtv.edge1 ? this.parentGameObject : c2.parentGameObject;
        return mtv;
    };
    Collider.prototype.fixDirectionShapeAB = function (colliderA, colliderB, axis) {
        var cacb = Vector2_1.Vector2.subtractVector(colliderB.colliderCenter, colliderA.colliderCenter);
        return axis.dot(cacb) < 0 ? axis.negate() : axis;
    };
    /*
      Derived from https://dyn4j.org/2011/11/contact-points-using-clipping/#cpg-find CP Tutorial.
    */
    Collider.prototype.calculateContactPoint = function (ref, inc, flipped, mtv) {
        var edgeVector = ref.edge;
        edgeVector.normalizeVector();
        var o1 = edgeVector.dot(ref.pointOne);
        var clippedPoints = this.clipEdges(inc.pointOne, inc.pointTwo, edgeVector, o1);
        if (clippedPoints.length < 2)
            return;
        var o2 = edgeVector.dot(ref.pointTwo);
        var clippedPointsTwo = this.clipEdges(clippedPoints[0], clippedPoints[1], edgeVector.negate(), -o2);
        if (clippedPointsTwo.length < 2)
            return;
        var referenceNormal = ref.edge.normalVectorL();
        mtv.refNormal = referenceNormal.negate().normalizeVector();
        var max = referenceNormal.dot(ref.max);
        if (referenceNormal.dot(clippedPointsTwo[0]) - max < 0) {
            delete clippedPointsTwo[0];
        }
        if (referenceNormal.dot(clippedPointsTwo[1]) - max < 0) {
            delete clippedPointsTwo[1];
        }
        return clippedPointsTwo;
    };
    Collider.prototype.clipEdges = function (v1, v2, normal, offset) {
        var clippedPoints = [];
        var dist1 = normal.dot(v1) - offset;
        var dist2 = normal.dot(v2) - offset;
        if (dist1 >= 0) {
            clippedPoints.push(v1);
        }
        if (dist2 >= 0) {
            clippedPoints.push(v2);
        }
        if (dist1 * dist2 < 0) {
            var edgeVector = v2.subtractVector(v1);
            var factor = dist1 / (dist1 - dist2);
            clippedPoints.push(edgeVector.multScalar(factor).addVector(v1));
        }
        return clippedPoints;
    };
    Collider.prototype.calculateBestEdge = function (mtv_axis) {
        var max = -100000000;
        var fVIndex = 0;
        for (var index = 0; index < this.vertices.length; index++) {
            var proj = mtv_axis.dot(this.vertices[index]);
            if (proj > max) {
                max = proj;
                fVIndex = index;
            }
        }
        var fVc = this.vertices[fVIndex];
        var fVn = fVIndex + 1 < this.vertices.length ? this.vertices[fVIndex + 1] : this.vertices[0];
        var fVp = fVIndex - 1 >= 0 ? this.vertices[fVIndex - 1] : this.vertices[this.vertices.length - 1];
        var lefthandVec = fVc.subtractVector(fVn).normalizeVector();
        var righthandVec = fVc.subtractVector(fVp).normalizeVector();
        if (righthandVec.dot(mtv_axis) <= lefthandVec.dot(mtv_axis)) {
            return new CollisionHelper_1.Edge(fVc, fVp, fVc);
        }
        else {
            return new CollisionHelper_1.Edge(fVc, fVc, fVn);
        }
    };
    return Collider;
}());
exports.Collider = Collider;


/***/ }),

/***/ "./src/Engine/CollisionHelper.ts":
/*!***************************************!*\
  !*** ./src/Engine/CollisionHelper.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MTV = exports.Edge = exports.Projection = void 0;
var Vector2_1 = __webpack_require__(/*! ../Utility/Vector2 */ "./src/Utility/Vector2.ts");
var Projection = /** @class */ (function () {
    function Projection(min, max) {
        this.min = min;
        this.max = max;
    }
    Projection.prototype.checkForOverlap = function (prj2) {
        return !(this.min > prj2.max || prj2.min > this.max);
    };
    return Projection;
}());
exports.Projection = Projection;
var Edge = /** @class */ (function () {
    function Edge(origin, pointOne, pointTwo) {
        this.max = origin;
        this.pointOne = pointOne;
        this.pointTwo = pointTwo;
        this.edge = this.calcEdge();
    }
    Edge.prototype.calcEdge = function () {
        var x = Vector2_1.Vector2.subtractVector(this.pointTwo, this.pointOne);
        return x;
    };
    return Edge;
}());
exports.Edge = Edge;
var MTV = /** @class */ (function () {
    function MTV(axis, value, isColliding) {
        this.axis = axis;
        this.overlapValue = value;
        this.colliding = isColliding;
        this.cp = [];
        this.edge1 = null;
        this.edge2 = null;
    }
    return MTV;
}());
exports.MTV = MTV;


/***/ }),

/***/ "./src/Engine/GameManager.ts":
/*!***********************************!*\
  !*** ./src/Engine/GameManager.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GameManager = void 0;
var KeyboardInput_1 = __webpack_require__(/*! ./KeyboardInput */ "./src/Engine/KeyboardInput.ts");
var PIXI = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/index.js");
var GameManager = /** @class */ (function () {
    function GameManager() {
        this.isPaused = false;
        this.animationTickTime = 5;
        this.renderFPS = 60;
        this.aLoopDelta = 0;
        this.rLoopDelta = 0;
        this.loadFlag = false;
        this.score = 0;
        this.scoreText = new PIXI.Text('Score: 0', { fontFamily: 'Arial', fontSize: 26, fill: 0x2FAAFF, align: 'center' });
        this.scoreText.position = new PIXI.Point(1400, 100);
    }
    GameManager.getInstance = function () {
        if (!GameManager.instance) {
            GameManager.instance = new GameManager();
        }
        return GameManager.instance;
    };
    GameManager.prototype.init = function (app, gameState, gameLoop) {
        this.app = app;
        this.gameLoop = gameLoop;
        this.gameState = gameState;
    };
    GameManager.prototype.setPlayerInput = function (sceneManager, object) {
        this.playerInput = new KeyboardInput_1.KeyboardInput(object);
        this.playerInput.setupPlayerInput();
    };
    /*
        Setup of the animation and render loops
    */
    GameManager.prototype.setUpSimulationLoops = function () {
        this.updateAnimationLoop();
        this.updateSceneRenderer();
    };
    GameManager.prototype.updateAnimationLoop = function () {
        var _this = this;
        if (this.animationLoop != null) {
            clearInterval(this.animationLoop);
        }
        var lastRendering = Date.now();
        this.animationLoop = setInterval(function () {
            var now = Date.now();
            var deltaTime = now - lastRendering;
            lastRendering = now;
            _this.aLoopDelta = deltaTime;
            _this.gameLoop(deltaTime * 0.1);
        }, this.animationTickTime);
    };
    GameManager.prototype.updateSceneRenderer = function () {
        var _this = this;
        if (this.renderLoop != null) {
            clearInterval(this.renderLoop);
        }
        var lastRendering = Date.now();
        this.renderLoop = setInterval(function () {
            var now = Date.now();
            var deltaTime = now - lastRendering;
            lastRendering = now;
            _this.rLoopDelta = deltaTime;
            _this.app.renderer.render(_this.app.stage);
        }, (1000 / this.renderFPS));
    };
    GameManager.prototype.pauseRenderers = function () {
        if (this.animationLoop != null) {
            clearInterval(this.animationLoop);
        }
        if (this.renderLoop != null) {
            clearInterval(this.renderLoop);
        }
    };
    GameManager.prototype.resumeRenderers = function () {
        this.updateAnimationLoop();
        this.updateSceneRenderer();
    };
    return GameManager;
}());
exports.GameManager = GameManager;


/***/ }),

/***/ "./src/Engine/GameObject.ts":
/*!**********************************!*\
  !*** ./src/Engine/GameObject.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GameObject = void 0;
var pixi_js_1 = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/index.js");
var Collider_1 = __webpack_require__(/*! ./Collider */ "./src/Engine/Collider.ts");
var Vector2_1 = __webpack_require__(/*! ../Utility/Vector2 */ "./src/Utility/Vector2.ts");
var Rigidbody_1 = __webpack_require__(/*! ./Rigidbody */ "./src/Engine/Rigidbody.ts");
var SceneManager_1 = __webpack_require__(/*! ./SceneManager */ "./src/Engine/SceneManager.ts");
var GameObject = /** @class */ (function () {
    function GameObject(transform, sprite, collider, rigidbody) {
        if (transform === undefined || transform === null) {
            this.transform = new pixi_js_1.Transform();
            this.transform.position.set(0, 0);
            this.transform.scale.set(1, 1);
        }
        else {
            this.transform = transform;
        }
        if (sprite !== null && sprite !== undefined) {
            this.sprite = sprite;
            this.sprite.transform = this.transform;
            SceneManager_1.SceneManager.getInstance().addSpriteToCollection(this.sprite);
        }
        if (rigidbody !== null && rigidbody !== undefined) {
            this.rigidbody = rigidbody;
            SceneManager_1.SceneManager.getInstance().addRigidBodyToCollection(this.rigidbody);
        }
        if (collider !== null && collider !== undefined) {
            this.collider = collider;
            SceneManager_1.SceneManager.getInstance().addColliderToCollection(this.collider);
        }
        this.tag = "";
        this.drawVerticesArray = [];
        SceneManager_1.SceneManager.getInstance().addGameObjectToCollection(this);
    }
    GameObject.prototype.Update = function (delta) {
        if (this.rigidbody !== null && this.rigidbody !== undefined) {
            var oldPosition = this.transform.position.y;
            this.transform.position.x += this.rigidbody.velocity.x * delta;
            this.transform.position.y += this.rigidbody.velocity.y * delta;
            this.transform.rotation += this.rigidbody.angularVelocity * delta;
            if ((Math.abs(oldPosition - this.transform.position.y) <= 10.0) && this.rigidbody.effectedByGravity && this.rigidbody.isGravityOn) {
                this.rigidbody.isGravityOn = false;
                this.rigidbody.addForce(new Vector2_1.Vector2(0, -0.0981), Rigidbody_1.ForceMode.Continous);
            }
            else if ((Math.abs(oldPosition - this.transform.position.y) > 10) && this.rigidbody.effectedByGravity && !this.rigidbody.isGravityOn) {
                this.rigidbody.isGravityOn = true;
                this.rigidbody.addForce(new Vector2_1.Vector2(0, 0.0981), Rigidbody_1.ForceMode.Continous);
            }
        }
        if (this.sprite !== null && this.sprite !== undefined) {
            this.sprite.position = this.transform.position;
            this.sprite.rotation = this.transform.rotation;
        }
        if (this.collider !== null && this.collider !== undefined) {
            this.collider.colliderCenter.setXY(this.transform.position.x, this.transform.position.y);
            this.collider.colliderRotation = this.transform.rotation;
            this.collider.updateVertexPositions();
        }
    };
    GameObject.prototype.rotateGameObject = function (rotation) {
        this.transform.rotation = rotation * Math.PI / 180;
        this.sprite.rotation += this.transform.rotation;
        this.collider.colliderRotation = this.transform.rotation;
    };
    GameObject.prototype.addSprite = function (resource, spriteScale) {
        this.sprite = new pixi_js_1.Sprite(resource);
        var pivot = new pixi_js_1.Point(this.sprite.width / 2, this.sprite.height / 2);
        this.sprite.pivot.set(pivot.x, pivot.y);
        (spriteScale !== null && spriteScale !== undefined) ? this.sprite.scale.set(spriteScale.x, spriteScale.y) : this.sprite.scale.set(1, 1);
        this.sprite.position = this.transform.position;
        this.sprite.rotation = this.transform.rotation;
        SceneManager_1.SceneManager.getInstance().addSpriteToCollection(this.sprite);
    };
    GameObject.prototype.addCollider = function (fromSprite, colliderWidth, colliderHeight) {
        if (fromSprite === true && this.sprite !== null) {
            this.collider = new Collider_1.Collider(this);
            this.collider.setDimensions(this.sprite.width, this.sprite.height, this.transform);
            this.collider.isOn = true;
        }
        else if (fromSprite === false && colliderWidth !== null && colliderHeight !== null) {
            this.collider = new Collider_1.Collider(this);
            this.collider.setDimensions(colliderWidth, colliderHeight, this.transform);
            this.collider.isOn = true;
        }
        else {
            console.log("Something went wrong, hence no collider was created!");
        }
        SceneManager_1.SceneManager.getInstance().addColliderToCollection(this.collider);
    };
    GameObject.prototype.addRigidbody = function (parent, mass, infiniteMass, gravityOn, bouncyness) {
        this.rigidbody = new Rigidbody_1.RigidBody();
        this.rigidbody.parent = parent;
        this.rigidbody.velocity = new Vector2_1.Vector2(0, 0);
        this.rigidbody.acceleration = new Vector2_1.Vector2(0, 0);
        this.rigidbody.force = new Vector2_1.Vector2(0, 0);
        this.rigidbody.angularVelocity = 0;
        this.rigidbody.bouncyness = bouncyness !== null && bouncyness !== void 0 ? bouncyness : 0.1;
        this.rigidbody.mass = mass !== null && mass !== void 0 ? mass : 1;
        this.rigidbody.effectedByGravity = gravityOn !== null && gravityOn !== void 0 ? gravityOn : false;
        this.rigidbody.infiniteMass = infiniteMass !== null && infiniteMass !== void 0 ? infiniteMass : false;
        if (this.sprite !== null)
            this.rigidbody.calculateInteria();
        if (gravityOn) {
            this.rigidbody.addForce(new Vector2_1.Vector2(0, 0.0981), Rigidbody_1.ForceMode.Continous);
        }
        SceneManager_1.SceneManager.getInstance().addRigidBodyToCollection(this.rigidbody);
    };
    GameObject.Destroy = function (gameObject) {
        SceneManager_1.SceneManager.getInstance().removeObject(gameObject);
        //GameManager.getInstance().app.stage.removeChild(this.sprite);
        gameObject.collider = null;
        gameObject.sprite = null;
        gameObject.rigidbody = null;
        gameObject = null;
    };
    GameObject.prototype.onCollisionEnter = function (collider) {
    };
    return GameObject;
}());
exports.GameObject = GameObject;


/***/ }),

/***/ "./src/Engine/KeyboardInput.ts":
/*!*************************************!*\
  !*** ./src/Engine/KeyboardInput.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyboardInput = void 0;
var SceneManager_1 = __webpack_require__(/*! ./SceneManager */ "./src/Engine/SceneManager.ts");
var GameManager_1 = __webpack_require__(/*! ./GameManager */ "./src/Engine/GameManager.ts");
var DrawFunctions_1 = __webpack_require__(/*! ../Utility/DrawFunctions */ "./src/Utility/DrawFunctions.ts");
;
var KeyboardInput = /** @class */ (function () {
    function KeyboardInput(gameObject) {
        if (gameObject !== undefined) {
            this.attachedObject = gameObject;
        }
    }
    KeyboardInput.prototype.linkPlayerObject = function (gameObject) {
        this.attachedObject = gameObject;
    };
    KeyboardInput.prototype.keyboard = function (value) {
        var key = {
            keyCode: value,
            isPressed: false,
            isReleased: true,
            press: function () { },
            release: function () { },
            downHandler: function (event) {
                if (event.key === key.keyCode) {
                    if (key.isReleased && key.press) {
                        key.press();
                        key.isPressed = true;
                        key.isReleased = false;
                        event.preventDefault();
                    }
                }
            },
            upHandler: function (event) {
                if (event.key === key.keyCode) {
                    if (key.isPressed && key.release) {
                        key.release();
                        key.isPressed = false;
                        key.isReleased = true;
                        event.preventDefault();
                    }
                }
            },
            unsubscribe: function () {
                window.removeEventListener("keydown", pressListerener);
                window.removeEventListener("keyup", releaseListener);
            }
        };
        var releaseListener = key.upHandler.bind(key);
        var pressListerener = key.downHandler.bind(key);
        window.addEventListener("keydown", pressListerener, false);
        window.addEventListener("keyup", releaseListener, false);
        return key;
    };
    KeyboardInput.prototype.setupPlayerInput = function () {
        var _this = this;
        var up = this.keyboard('w');
        var down = this.keyboard('s');
        var reset = this.keyboard('r');
        var space = this.keyboard(' ');
        var increaseRenderSpeed = this.keyboard('1');
        var decreaseRenderSpeed = this.keyboard('2');
        var increaseAnimationSpeed = this.keyboard('3');
        var decreaseAnimationSpeed = this.keyboard('4');
        var decreaseSplineTraversalTime = this.keyboard('5');
        var increaseSplineTraversalTime = this.keyboard('6');
        var pauseGame = this.keyboard("p");
        var showSplines = this.keyboard('o');
        var showRigidBodyCPs = this.keyboard('i');
        var disableEasing = this.keyboard('u');
        up.press = function () {
            _this.attachedObject.rigidbody.angularVelocity -= 0.01;
        };
        up.release = function () {
            _this.attachedObject.rigidbody.angularVelocity = 0;
        };
        down.press = function () {
            _this.attachedObject.rigidbody.angularVelocity += 0.01;
        };
        down.release = function () {
            _this.attachedObject.rigidbody.angularVelocity = 0;
        };
        space.press = function () {
            _this.attachedObject.charging = true;
        };
        space.release = function () {
            _this.attachedObject.charging = false;
            _this.attachedObject.shoot = true;
            console.log("shoot released");
        };
        decreaseSplineTraversalTime.press = function () {
            SceneManager_1.SceneManager.getInstance().splineCollection.forEach(function (element) {
                if (element.parent !== null) {
                    element.parent.traversalTime = element.parent.traversalTime - 100 > 0 ? element.parent.traversalTime - 100 : 100;
                    element.parent.UpdateTraversalSegment();
                }
            });
        };
        increaseSplineTraversalTime.press = function () {
            SceneManager_1.SceneManager.getInstance().splineCollection.forEach(function (element) {
                if (element.parent !== null) {
                    element.parent.traversalTime += 100;
                    element.parent.UpdateTraversalSegment();
                }
            });
        };
        showSplines.press = function () {
            if (!SceneManager_1.SceneManager.getInstance().splinesDrawn) {
                SceneManager_1.SceneManager.getInstance().splineCollection.forEach(function (element) {
                    element.DrawAllSplinePoints(GameManager_1.GameManager.getInstance().app, DrawFunctions_1.DrawFunction.RandomHexNumber(), SceneManager_1.SceneManager.getInstance().splineGraphics);
                    DrawFunctions_1.DrawFunction.drawSpline(GameManager_1.GameManager.getInstance().app, DrawFunctions_1.DrawFunction.RandomHexNumber(), element, SceneManager_1.SceneManager.getInstance().splineGraphics);
                    SceneManager_1.SceneManager.getInstance().splinesDrawn = true;
                });
            }
            else {
                SceneManager_1.SceneManager.getInstance().removeAllSplineGraphics();
            }
        };
        disableEasing.press = function () {
            SceneManager_1.SceneManager.getInstance().enableEasing = !SceneManager_1.SceneManager.getInstance().enableEasing;
            console.log("EASING: " + SceneManager_1.SceneManager.getInstance().enableEasing);
        };
        showRigidBodyCPs.press = function () {
            if (!SceneManager_1.SceneManager.getInstance().drawRBProperties) {
                SceneManager_1.SceneManager.getInstance().drawRBProperties = true;
                //this.sceneManager.rigidBodyCollection.forEach(element => {
                //    element.ShowForceVectors();
                //})
            }
            else {
                SceneManager_1.SceneManager.getInstance().removeAllRBGraphics();
            }
        };
        reset.press = function () {
            SceneManager_1.SceneManager.getInstance().reset = true;
            console.log("right pressed");
        };
        reset.release = function () {
            console.log("right released");
        };
        increaseRenderSpeed.press = function () {
            GameManager_1.GameManager.getInstance().renderFPS += 5;
            GameManager_1.GameManager.getInstance().updateSceneRenderer();
            console.log("Render Interval: " + GameManager_1.GameManager.getInstance().renderFPS);
        };
        decreaseRenderSpeed.release = function () {
            GameManager_1.GameManager.getInstance().renderFPS -= 5;
            GameManager_1.GameManager.getInstance().updateSceneRenderer();
            console.log("Render Interval: " + GameManager_1.GameManager.getInstance().renderFPS);
        };
        increaseAnimationSpeed.press = function () {
            GameManager_1.GameManager.getInstance().animationTickTime += 1;
            GameManager_1.GameManager.getInstance().updateAnimationLoop();
            console.log("Animation Interval: " + GameManager_1.GameManager.getInstance().animationTickTime);
        };
        decreaseAnimationSpeed.release = function () {
            GameManager_1.GameManager.getInstance().animationTickTime -= 1;
            GameManager_1.GameManager.getInstance().updateAnimationLoop();
            console.log("Animation Interval: " + GameManager_1.GameManager.getInstance().animationTickTime);
        };
        pauseGame.press = function () {
            if (!GameManager_1.GameManager.getInstance().isPaused) {
                GameManager_1.GameManager.getInstance().pauseRenderers();
                GameManager_1.GameManager.getInstance().isPaused = true;
            }
            else if (GameManager_1.GameManager.getInstance().isPaused) {
                GameManager_1.GameManager.getInstance().resumeRenderers();
                GameManager_1.GameManager.getInstance().isPaused = false;
            }
        };
    };
    return KeyboardInput;
}());
exports.KeyboardInput = KeyboardInput;


/***/ }),

/***/ "./src/Engine/Rigidbody.ts":
/*!*********************************!*\
  !*** ./src/Engine/Rigidbody.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.RigidBody = exports.ForceMode = void 0;
var Vector2_1 = __webpack_require__(/*! ../Utility/Vector2 */ "./src/Utility/Vector2.ts");
var DrawFunctions_1 = __webpack_require__(/*! ../Utility/DrawFunctions */ "./src/Utility/DrawFunctions.ts");
var SceneManager_1 = __webpack_require__(/*! ./SceneManager */ "./src/Engine/SceneManager.ts");
var GameManager_1 = __webpack_require__(/*! ./GameManager */ "./src/Engine/GameManager.ts");
var ForceMode;
(function (ForceMode) {
    ForceMode[ForceMode["Impulse"] = 1] = "Impulse";
    ForceMode[ForceMode["Continous"] = 2] = "Continous";
    ForceMode[ForceMode["Impulse_massless"] = 3] = "Impulse_massless";
})(ForceMode = exports.ForceMode || (exports.ForceMode = {}));
var RigidBody = /** @class */ (function () {
    function RigidBody(parent, gravityOn, mass, bouncyness, infiniteMass) {
        this.torque = 0;
        this.angularVelocity = 0.0;
        this.angularAcceleration = 0;
        this.force = new Vector2_1.Vector2(0, 0);
        this.velocity = new Vector2_1.Vector2(0, 0);
        this.acceleration = new Vector2_1.Vector2(0, 0);
        this.bouncyness = bouncyness !== null && bouncyness !== void 0 ? bouncyness : 0.1;
        this.mass = mass !== null && mass !== void 0 ? mass : 1;
        this.effectedByGravity = gravityOn !== null && gravityOn !== void 0 ? gravityOn : false;
        this.infiniteMass = infiniteMass !== null && infiniteMass !== void 0 ? infiniteMass : false;
        this.isGravityOn = gravityOn !== null && gravityOn !== void 0 ? gravityOn : false;
        this.linearVisualization = new PIXI.Graphics();
        this.angularVisualization = new PIXI.Graphics();
        if (parent !== null && parent !== undefined) {
            this.parent = parent;
            if (parent.sprite !== null)
                this.calculateInteria();
        }
    }
    // Works only for boxes atm.!! See https://en.wikipedia.org/wiki/List_of_moments_of_inertia for more shapes
    RigidBody.prototype.calculateInteria = function () {
        if (this.parent.sprite === null || this.parent.sprite === undefined) {
            console.log("ERROR: Your rigid body has no dimension!");
        }
        else {
            this.momentOfInteria = this.mass * (Math.pow(this.parent.sprite.width, 2) + Math.pow(this.parent.sprite.height, 2)) / 12;
        }
    };
    RigidBody.prototype.ShowForceVectors = function () {
        if (!this.infiniteMass) {
            var pos = new Vector2_1.Vector2(this.parent.transform.position.x, this.parent.transform.position.y);
            DrawFunctions_1.DrawFunction.DrawArrow(GameManager_1.GameManager.getInstance().app, 0xAAFF00, pos, this.velocity, SceneManager_1.SceneManager.getInstance().rbGraphics, this.linearVisualization);
            SceneManager_1.SceneManager.getInstance().rbGraphics.push(this.linearVisualization);
            SceneManager_1.SceneManager.getInstance().rbGraphics.push(this.angularVisualization);
        }
    };
    RigidBody.prototype.addForce = function (force, forceMode) {
        switch (forceMode) {
            case ForceMode.Impulse:
                this.velocity.x += force.x / this.mass;
                this.velocity.y += force.y / this.mass;
                break;
            case ForceMode.Continous:
                this.force.x += force.x;
                this.force.y += force.y;
                this.acceleration = new Vector2_1.Vector2(this.force.x / this.mass, this.force.y / this.mass);
                break;
            case ForceMode.Impulse_massless:
                this.velocity.x += force.x;
                this.velocity.y += force.y;
                break;
        }
    };
    RigidBody.prototype.addTorque = function (force, forceMode) {
        switch (forceMode) {
            case ForceMode.Impulse:
                this.torque = force.x / this.momentOfInteria;
        }
    };
    RigidBody.prototype.UpdateRigidBody = function (delta) {
        this.velocity.x += this.acceleration.x * delta;
        this.velocity.y += this.acceleration.y * delta;
        this.angularVelocity += this.torque * delta;
    };
    RigidBody.prototype.getBodyWithInfiniteMass = function (bodyA, bodyB) {
        return bodyB.infiniteMass ? bodyB : bodyA.infiniteMass ? bodyA : null;
    };
    /* Collision resolving. This function determines wheter there are collisions between moveable or unmoveable objects.
    Further the post collision velocities and angular momentum are calculated here and applied accordingly using an impulse parameter.
    Formulas used from : https://www.myphysicslab.com/explain/physics-engine-en.html
     */
    RigidBody.prototype.resolveRigidbodyCollision = function (mtv, bodyB) {
        // TODO Collision RESOLVE WHEN ONLY ONE RB EXISTS
        if (this.infiniteMass && bodyB.infiniteMass) {
            return false;
        }
        var impulseParameter = 0;
        var contactPointIndex = mtv.cp[0] !== undefined ? 0 : mtv.cp[1] !== undefined ? 1 : undefined;
        if (contactPointIndex === undefined) {
            console.log("Error: No contact point for the collision was found.");
            return;
        }
        var inmoveable = this.getBodyWithInfiniteMass(this, bodyB);
        if (inmoveable !== null) {
            var moveable = this !== inmoveable ? this : bodyB;
            this.resolveRigidbodyOverlapUnmoveable(mtv, moveable);
            impulseParameter = this.resolveRigidbodyCollisionUnmoveable(mtv, moveable, contactPointIndex);
            var postVelocity = moveable.velocity.addVector((mtv.refNormal.multScalar(impulseParameter)).divScalar(moveable.mass));
            moveable.velocity = postVelocity;
        }
        else if (inmoveable === null) {
            this.resolveRigidbodyOverlapMoveable(mtv, bodyB.parent);
            impulseParameter = this.resolveRigidbodyCollisionMoveable(mtv, bodyB, contactPointIndex);
            var second = bodyB.resolveRigidbodyCollisionMoveable(mtv, this, contactPointIndex);
            var postVelocityA = this.velocity.addVector((mtv.refNormal.multScalar(impulseParameter)).divScalar(this.mass));
            var postVelocityB = bodyB.velocity.addVector((mtv.refNormal.multScalar(second)).divScalar(bodyB.mass));
            this.velocity = postVelocityA;
            bodyB.velocity = postVelocityB;
        }
    };
    RigidBody.prototype.resolveRigidbodyCollisionMoveable = function (mtv, bodyB, index) {
        var impulseParameter;
        var distanceAP = RigidBody.getDistancePointToPoint(this.parent.collider.colliderCenter, mtv.cp[index]);
        var distanceBP = RigidBody.getDistancePointToPoint(bodyB.parent.collider.colliderCenter, mtv.cp[index]);
        // console.log("MTV CP: " + mtv.cp[index].toString());
        var vap1 = this.velocity.addVector(Vector2_1.Vector2.crossVector(distanceAP, this.angularVelocity));
        var vbp2 = bodyB.velocity.addVector(Vector2_1.Vector2.crossVector(distanceBP, bodyB.angularVelocity));
        var vab1 = Vector2_1.Vector2.subtractVector(vap1, vbp2);
        impulseParameter = -(1 + this.bouncyness) * vab1.dot(mtv.refNormal) / (1 / this.mass + 1 / bodyB.mass + (Math.pow(Vector2_1.Vector2.cross(distanceAP, mtv.refNormal), 2) / this.momentOfInteria) +
            Math.pow(Vector2_1.Vector2.cross(distanceBP, mtv.refNormal), 2) / bodyB.momentOfInteria);
        this.angularVelocity += (Vector2_1.Vector2.cross(distanceAP, mtv.refNormal.multScalar(impulseParameter)) / this.momentOfInteria);
        bodyB.angularVelocity -= (Vector2_1.Vector2.cross(distanceBP, mtv.refNormal.multScalar(-impulseParameter)) / bodyB.momentOfInteria);
        return impulseParameter;
    };
    RigidBody.prototype.resolveRigidbodyCollisionUnmoveable = function (mtv, moveable, index) {
        var impulseU;
        var distanceAP = RigidBody.getDistancePointToPoint(moveable.parent.collider.colliderCenter, mtv.cp[index]);
        var vAP = moveable.velocity.addVector(Vector2_1.Vector2.crossVector(distanceAP, moveable.angularVelocity));
        impulseU = (-(1 + moveable.bouncyness) * vAP.dot(mtv.refNormal)) / ((1 / moveable.mass) + (Math.pow(Vector2_1.Vector2.cross(distanceAP, mtv.refNormal), 2) / moveable.momentOfInteria));
        moveable.angularVelocity -= (Vector2_1.Vector2.cross(distanceAP, mtv.refNormal.multScalar(-impulseU)) / moveable.momentOfInteria);
        return impulseU;
    };
    RigidBody.prototype.resolveRigidbodyOverlapMoveable = function (mtv, gameObjectTwo) {
        this.parent.transform.position.x += -mtv.axis.x * mtv.overlapValue / 2;
        this.parent.transform.position.y += -mtv.axis.y * mtv.overlapValue / 2;
        gameObjectTwo.transform.position.x += mtv.axis.x * mtv.overlapValue / 2;
        gameObjectTwo.transform.position.y += mtv.axis.y * mtv.overlapValue / 2;
    };
    RigidBody.prototype.resolveRigidbodyOverlapUnmoveable = function (mtv, moveable) {
        moveable.parent.transform.position.x -= mtv.axis.x * mtv.overlapValue;
        moveable.parent.transform.position.y -= mtv.axis.y * mtv.overlapValue;
    };
    RigidBody.getDistancePointToPoint = function (colliderCenter, contactPoint) {
        //Maybe switch
        return Vector2_1.Vector2.subtractVector(contactPoint, colliderCenter);
    };
    return RigidBody;
}());
exports.RigidBody = RigidBody;


/***/ }),

/***/ "./src/Engine/SceneManager.ts":
/*!************************************!*\
  !*** ./src/Engine/SceneManager.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneManager = void 0;
var GameObject_1 = __webpack_require__(/*! ./GameObject */ "./src/Engine/GameObject.ts");
var Vector2_1 = __webpack_require__(/*! ../Utility/Vector2 */ "./src/Utility/Vector2.ts");
var PIXI = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/index.js");
var GameManager_1 = __webpack_require__(/*! ./GameManager */ "./src/Engine/GameManager.ts");
var Goal_1 = __webpack_require__(/*! ../GameObjects/Goal */ "./src/GameObjects/Goal.ts");
var MovingObstacle_1 = __webpack_require__(/*! ../GameObjects/MovingObstacle */ "./src/GameObjects/MovingObstacle.ts");
var Destructible_1 = __webpack_require__(/*! ../GameObjects/Destructible */ "./src/GameObjects/Destructible.ts");
var SceneManager = /** @class */ (function () {
    function SceneManager() {
        this.loader = PIXI.loader;
        this.resources = PIXI.loader.resources;
        this.gameObjectCollection = [];
        this.colliderCollection = [];
        this.spriteCollection = [];
        this.rigidBodyCollection = [];
        this.splineCollection = [];
        this.splineGraphics = [];
        this.rbGraphics = [];
        this.loader = PIXI.loader;
        this.resources = PIXI.loader.resources;
        this.reset = false;
        this.assetsLoaded = false;
        this.currentLevel = 1;
        this.splinesDrawn = false;
        this.drawRBProperties = false;
        this.enableEasing = true;
        this.numberOfLevels = 4;
    }
    SceneManager.getInstance = function () {
        if (!SceneManager.Instance) {
            SceneManager.Instance = new SceneManager();
        }
        return SceneManager.Instance;
    };
    SceneManager.prototype.LoadScene = function (func, func2) {
        this.removeAllGameObjects(GameManager_1.GameManager.getInstance().app);
        this.loadResources(func, func2);
    };
    /*
    Free assets from https://www.gameart2d.com/free-platformer-game-tileset.html
    */
    SceneManager.prototype.loadResources = function (level, setup) {
        if (!this.assetsLoaded) {
            this.loader
                .add("background", "assets/Images/BG/BG.png")
                .add("background2", "assets/Images/BG/BG2.png")
                .add("canon", "assets/Images/Canon/Right/Canon_1.png")
                .add("canon_ball", "assets/Images/Canon/CannonBall.png")
                .add("tile_top_left", "assets/Images/Tiles/1.png")
                .add("tile_top_mid", "assets/Images/Tiles/2.png")
                .add("tile_top_right", "assets/Images/Tiles/3.png")
                .add("tile_mid_left", "assets/Images/Tiles/4.png")
                .add("tile_mid_mid", "assets/Images/Tiles/5.png")
                .add("tile_mid_right", "assets/Images/Tiles/6.png")
                .add("tile_trans_right", "assets/Images/Tiles/7.png")
                .add("tile_trans_left", "assets/Images/Tiles/11.png")
                .add("tile_corner_left", "assets/Images/Tiles/8.png")
                .add("tile_corner_right", "assets/Images/Tiles/10.png")
                .add("tile_bot_center", "assets/Images/Tiles/9.png")
                .add("tile_bot_left", "assets/Images/Tiles/12.png")
                .add("tile_bot_right", "assets/Images/Tiles/16.png")
                .add("tile_float_mid", "assets/Images/Tiles/float_c.png")
                .add("tile_float_left", "assets/Images/Tiles/float_l.png")
                .add("tile_float_right", "assets/Images/Tiles/float_r.png")
                .add("red_button", "assets/Images/UI/red_button05.png")
                .add("blue_button", "assets/Images/UI/blue_button05.png")
                .add("green_button", "assets/Images/UI/green_button07.png")
                .add("yellow_circle", "assets/Images/UI/yellow_circle.png")
                .add("grey_button", "assets/Images/UI/grey_button00.png")
                .add("crate", "assets/Images/Object/Crate.png")
                .add("shroom", "assets/Images/Object/Mushroom_1.png")
                .load(level);
            this.loader.onComplete.add(setup);
            this.assetsLoaded = true;
        }
        else {
            level();
        }
    };
    SceneManager.prototype.addGameObjectToCollection = function (gameObject) {
        this.gameObjectCollection.push(gameObject);
    };
    SceneManager.prototype.addColliderToCollection = function (collider) {
        this.colliderCollection.push(collider);
    };
    SceneManager.prototype.addSpriteToCollection = function (sprite) {
        this.spriteCollection.push(sprite);
    };
    SceneManager.prototype.addRigidBodyToCollection = function (rigidBody) {
        this.rigidBodyCollection.push(rigidBody);
    };
    SceneManager.prototype.addSplineToCollection = function (spline) {
        this.splineCollection.push(spline);
    };
    SceneManager.prototype.addAllSpritesToStage = function (stage) {
        this.spriteCollection.forEach(function (element) {
            stage.addChild(element);
        });
    };
    SceneManager.prototype.removeAllGameObjects = function (app) {
        for (var count = 0; count < this.spriteCollection.length; count++) {
            app.stage.removeChild(this.spriteCollection[count]);
            this.spriteCollection[count] = null;
        }
        for (var count = 0; count < this.rigidBodyCollection.length; count++) {
            this.rigidBodyCollection[count] = null;
        }
        for (var count = 0; count < this.colliderCollection.length; count++) {
            this.colliderCollection[count] = null;
        }
        for (var count = 0; count < this.gameObjectCollection.length; count++) {
            this.gameObjectCollection[count].collider = null;
            this.gameObjectCollection[count].sprite = null;
            this.gameObjectCollection[count].rigidbody = null;
            this.gameObjectCollection[count] = null;
        }
        this.rigidBodyCollection = [];
        this.spriteCollection = [];
        this.colliderCollection = [];
        this.gameObjectCollection = [];
        this.splineCollection = [];
    };
    SceneManager.prototype.createNewGameObject = function (transform, sprite, collider, rigidbody) {
        var gameObject = new GameObject_1.GameObject(transform, sprite, collider, rigidbody);
        return gameObject;
    };
    SceneManager.prototype.removeObject = function (gameObject) {
        if (gameObject !== null) {
            this.colliderCollection = this.colliderCollection.filter(function (obj) { return obj !== gameObject.collider; });
            this.rigidBodyCollection = this.rigidBodyCollection.filter(function (obj) { return obj !== gameObject.rigidbody; });
            this.spriteCollection = this.spriteCollection.filter(function (obj) { return obj !== gameObject.sprite; });
            if (typeof gameObject === typeof (MovingObstacle_1.MovingObstacle)) {
                this.splineCollection = this.splineCollection.filter(function (obj) { return obj !== gameObject.spline; });
            }
            this.gameObjectCollection = this.gameObjectCollection.filter(function (obj) { return obj !== gameObject; });
            GameManager_1.GameManager.getInstance().app.stage.removeChild(gameObject.sprite);
        }
    };
    SceneManager.prototype.removeAllSplineGraphics = function () {
        var _this = this;
        this.splineGraphics.forEach(function (element) {
            GameManager_1.GameManager.getInstance().app.stage.removeChild(element);
            _this.splinesDrawn = false;
        });
        this.splineGraphics = [];
    };
    SceneManager.prototype.removeAllRBGraphics = function () {
        var _this = this;
        this.rbGraphics.forEach(function (element) {
            GameManager_1.GameManager.getInstance().app.stage.removeChild(element);
            _this.drawRBProperties = false;
        });
        this.rbGraphics = [];
    };
    SceneManager.prototype.buildWalls = function () {
        var gameBorderBot = this.createNewGameObject();
        gameBorderBot.transform.position.set(800, 890);
        gameBorderBot.addSprite(this.resources["tile_top_mid"].texture, new Vector2_1.Vector2(12, 1));
        gameBorderBot.addCollider(true);
        gameBorderBot.addRigidbody(gameBorderBot, 5, true);
        var gameBorderRight = this.createNewGameObject();
        gameBorderRight.transform.position.set(1600, 400);
        gameBorderRight.addSprite(this.resources["tile_top_left"].texture, new Vector2_1.Vector2(1, 12));
        gameBorderRight.addCollider(true);
        gameBorderRight.addRigidbody(gameBorderRight, 1, true);
        var gameBorderLeft = this.createNewGameObject();
        gameBorderLeft.transform.position.set(1, 400);
        gameBorderLeft.addSprite(this.resources["tile_top_right"].texture, new Vector2_1.Vector2(1, 12));
        gameBorderLeft.addCollider(true);
        gameBorderLeft.addRigidbody(gameBorderLeft, 1, true);
        var gameBorderTop = this.createNewGameObject();
        gameBorderTop.transform.position.set(800, 0);
        gameBorderTop.addSprite(this.resources["tile_bot_center"].texture, new Vector2_1.Vector2(14, 0.8));
        gameBorderTop.addCollider(true);
        gameBorderTop.addRigidbody(gameBorderTop, 1, true);
    };
    SceneManager.prototype.addBackground = function (spriteName) {
        var Background = this.createNewGameObject();
        Background.transform.position.set(200, 470);
        Background.addSprite(this.resources[spriteName].texture, new Vector2_1.Vector2(1, 1.2));
        var Background2 = this.createNewGameObject();
        Background2.transform.position.set(1200, 470);
        Background2.addSprite(this.resources[spriteName].texture, new Vector2_1.Vector2(1, 1.2));
    };
    SceneManager.prototype.addObstacles = function (level) {
        switch (level) {
            case 1:
                this.LevelOne();
                break;
            case 2:
                this.LevelTwo();
                break;
            case 3:
                this.LevelThree();
                break;
            case 4:
                this.LevelFour();
                break;
            default:
                this.LevelOne();
                break;
        }
    };
    SceneManager.prototype.LevelOne = function () {
        var Obstacle1 = this.createNewGameObject();
        Obstacle1.transform.position.set(1200, 715);
        Obstacle1.addSprite(this.resources["tile_top_mid"].texture, new Vector2_1.Vector2(1.0, 2));
        Obstacle1.addCollider(true);
        Obstacle1.addRigidbody(Obstacle1, 10, true);
        Obstacle1.rotateGameObject(0);
        var Obstacle2 = this.createNewGameObject();
        Obstacle2.transform.position.set(800, 150);
        Obstacle2.addSprite(this.resources["green_button"].texture, new Vector2_1.Vector2(1, 1));
        Obstacle2.addCollider(true);
        Obstacle2.addRigidbody(Obstacle2, 5, true);
        var Obstacle3 = this.createNewGameObject();
        Obstacle3.transform.position.set(1085, 500);
        Obstacle3.addSprite(this.resources["tile_float_mid"].texture, new Vector2_1.Vector2(1.5, 0.8));
        Obstacle3.addCollider(true);
        Obstacle3.addRigidbody(Obstacle3, 20, true, false, 0.2);
        var Obstacle4 = this.createNewGameObject();
        Obstacle4.transform.position.set(1300, 350);
        Obstacle4.addSprite(this.resources["tile_float_mid"].texture, new Vector2_1.Vector2(2.2, 0.9));
        Obstacle4.addCollider(true);
        Obstacle4.addRigidbody(Obstacle4, 20, true, false, 0.2);
        Obstacle4.rotateGameObject(300);
        var Obstacle5 = this.createNewGameObject();
        Obstacle5.transform.position.set(900, 700);
        Obstacle5.addSprite(this.resources["green_button"].texture, new Vector2_1.Vector2(1.5, 2.5));
        Obstacle5.addCollider(true);
        Obstacle5.addRigidbody(Obstacle5, 5, true);
        Obstacle5.rotateGameObject(73);
        var Obstacle6 = this.createNewGameObject();
        Obstacle6.transform.position.set(720, 445);
        Obstacle6.addSprite(this.resources["red_button"].texture, new Vector2_1.Vector2(2.5, 2));
        Obstacle6.addCollider(true);
        Obstacle6.addRigidbody(Obstacle6, 10, true);
        Obstacle6.rotateGameObject(48);
        var Obstacle7 = this.createNewGameObject();
        Obstacle7.transform.position.set(1450, 400);
        Obstacle7.addSprite(this.resources["tile_float_mid"].texture, new Vector2_1.Vector2(2.2, 0.9));
        Obstacle7.addCollider(true);
        Obstacle7.addRigidbody(Obstacle7, 20, true, false, 0.2);
        Obstacle7.rotateGameObject(300);
        var Destructible1 = new Destructible_1.Destructible(500);
        Destructible1.transform.position.set(400, 400);
        Destructible1.addSprite(this.resources["crate"].texture, new Vector2_1.Vector2(0.7, 0.7));
        Destructible1.addCollider(true);
        Destructible1.addRigidbody(Destructible1, 5, false, true, 0.1);
        Destructible1.rotateGameObject(120);
        var Destructible2 = new Destructible_1.Destructible(500);
        Destructible2.transform.position.set(600, 400);
        Destructible2.addSprite(this.resources["crate"].texture, new Vector2_1.Vector2(0.7, 0.7));
        Destructible2.addCollider(true);
        Destructible2.addRigidbody(Destructible2, 5, false, true, 0.1);
        Destructible2.rotateGameObject(120);
        var Destructible3 = new Destructible_1.Destructible(500);
        Destructible3.transform.position.set(500, 400);
        Destructible3.addSprite(this.resources["crate"].texture, new Vector2_1.Vector2(0.7, 0.7));
        Destructible3.addCollider(true);
        Destructible3.addRigidbody(Destructible3, 5, false, true, 0.1);
        Destructible3.rotateGameObject(120);
        var goal = new Goal_1.Goal();
        goal.transform.position.set(1360, 650);
        goal.addSprite(this.resources["yellow_circle"].texture, new Vector2_1.Vector2(3, 3));
        goal.addCollider(true);
        goal.addRigidbody(goal, 10, true);
        var moving = new MovingObstacle_1.MovingObstacle(500, true);
        moving.transform.position.set(1200, 350);
        moving.addSprite(this.resources["red_button"].texture, new Vector2_1.Vector2(2, 2));
        moving.addCollider(true);
        moving.addRigidbody(moving, 10, true, false);
        this.addGameObjectToCollection(moving);
        moving.easing = true;
        moving.SetEasingStructs(new MovingObstacle_1.EasingStruct(1, 2, 3), new MovingObstacle_1.EasingStruct(1, 2.5, 3));
        var movingX = moving.transform.position.x;
        var movingY = moving.transform.position.y;
        moving.SetSplinePoints([
            new Vector2_1.Vector2(movingX + 0, movingY + 0),
            new Vector2_1.Vector2(movingX - 120, movingY - 50),
            new Vector2_1.Vector2(movingX - 240, movingY - 100),
            new Vector2_1.Vector2(movingX - 500, movingY + 310),
            new Vector2_1.Vector2(movingX - 700, movingY - 50),
            new Vector2_1.Vector2(movingX - 850, movingY - 150)
        ]);
        var moving2 = new MovingObstacle_1.MovingObstacle(500, true);
        moving2.transform.position.set(150, 250);
        moving2.addSprite(this.resources["red_button"].texture, new Vector2_1.Vector2(2, 2));
        moving2.addCollider(true);
        moving2.addRigidbody(moving2, 10, true, false);
        this.addGameObjectToCollection(moving2);
        moving2.easing = true;
        moving2.SetEasingStructs(new MovingObstacle_1.EasingStruct(1, 3, 1), new MovingObstacle_1.EasingStruct(1, 3, 1));
        var moving2X = moving2.transform.position.x;
        var moving2Y = moving2.transform.position.y;
        moving2.SetSplinePoints([
            new Vector2_1.Vector2(moving2X + 50, moving2Y + -50),
            new Vector2_1.Vector2(moving2X + 0, moving2Y + 0),
            new Vector2_1.Vector2(moving2X + 300, moving2Y - 50),
            new Vector2_1.Vector2(moving2X + 50, moving2Y + 110),
            new Vector2_1.Vector2(moving2X + 200, moving2Y + 80),
            new Vector2_1.Vector2(moving2X + 260, moving2Y + 180),
            new Vector2_1.Vector2(moving2X + 270, moving2Y + 250)
        ]);
    };
    SceneManager.prototype.LevelTwo = function () {
        GameManager_1.GameManager.getInstance().app.stage.removeChildren();
        var Obstacle1 = this.createNewGameObject();
        Obstacle1.transform.position.set(750, 460);
        Obstacle1.addSprite(this.resources["red_button"].texture, new Vector2_1.Vector2(2, 2));
        Obstacle1.addCollider(true);
        Obstacle1.addRigidbody(Obstacle1, 10, true);
        var Obstacle2 = this.createNewGameObject();
        Obstacle2.transform.position.set(450, 320);
        Obstacle2.addSprite(this.resources["green_button"].texture, new Vector2_1.Vector2(2, 2));
        Obstacle2.addCollider(true);
        Obstacle2.addRigidbody(Obstacle2, 5, true);
        var Obstacle3 = this.createNewGameObject();
        Obstacle3.transform.position.set(1100, 600);
        Obstacle3.addSprite(this.resources["blue_button"].texture, new Vector2_1.Vector2(1.2, 1.2));
        Obstacle3.addCollider(true);
        Obstacle3.addRigidbody(Obstacle3, 20, true, false, 0.2);
        var Obstacle4 = this.createNewGameObject();
        Obstacle4.transform.position.set(1240, 350);
        Obstacle4.addSprite(this.resources["blue_button"].texture, new Vector2_1.Vector2(1.2, 1.2));
        Obstacle4.addCollider(true);
        Obstacle4.addRigidbody(Obstacle4, 20, true, false, 0.2);
        Obstacle4.rotateGameObject(45);
        var Obstacle5 = this.createNewGameObject();
        Obstacle5.transform.position.set(1100, 800);
        Obstacle5.addSprite(this.resources["green_button"].texture, new Vector2_1.Vector2(2, 2));
        Obstacle5.addCollider(true);
        Obstacle5.addRigidbody(Obstacle5, 5, true);
        Obstacle5.rotateGameObject(73);
        var Obstacle6 = this.createNewGameObject();
        Obstacle6.transform.position.set(900, 460);
        Obstacle6.addSprite(this.resources["red_button"].texture, new Vector2_1.Vector2(2.5, 2));
        Obstacle6.addCollider(true);
        Obstacle6.addRigidbody(Obstacle6, 10, true);
        var Obstacle7 = this.createNewGameObject();
        Obstacle7.transform.position.set(1440, 350);
        Obstacle7.addSprite(this.resources["blue_button"].texture, new Vector2_1.Vector2(1.2, 1.2));
        Obstacle7.addCollider(true);
        Obstacle7.addRigidbody(Obstacle7, 20, true, false, 0.2);
        Obstacle7.rotateGameObject(0);
        var Destructible1 = new Destructible_1.Destructible(500);
        Destructible1.transform.position.set(1050, 560);
        Destructible1.addSprite(this.resources["crate"].texture, new Vector2_1.Vector2(0.7, 0.7));
        Destructible1.addCollider(true);
        Destructible1.addRigidbody(Destructible1, 5, false, true, 0.1);
        var Destructible2 = new Destructible_1.Destructible(500);
        Destructible2.transform.position.set(1110, 560);
        Destructible2.addSprite(this.resources["crate"].texture, new Vector2_1.Vector2(0.7, 0.7));
        Destructible2.addCollider(true);
        Destructible2.addRigidbody(Destructible2, 5, false, true, 0.1);
        var Destructible3 = new Destructible_1.Destructible(500);
        Destructible3.transform.position.set(1170, 560);
        Destructible3.addSprite(this.resources["crate"].texture, new Vector2_1.Vector2(0.7, 0.7));
        Destructible3.addCollider(true);
        Destructible3.addRigidbody(Destructible3, 5, false, true, 0.1);
        var Destructible4 = new Destructible_1.Destructible(500);
        Destructible4.transform.position.set(1110, 510);
        Destructible4.addSprite(this.resources["crate"].texture, new Vector2_1.Vector2(0.7, 0.7));
        Destructible4.addCollider(true);
        Destructible4.addRigidbody(Destructible4, 5, false, true, 0.1);
        var Destructible5 = new Destructible_1.Destructible(500);
        Destructible5.transform.position.set(1170, 510);
        Destructible5.addSprite(this.resources["crate"].texture, new Vector2_1.Vector2(0.7, 0.7));
        Destructible5.addCollider(true);
        Destructible5.addRigidbody(Destructible5, 5, false, true, 0.1);
        var Destructible6 = new Destructible_1.Destructible(500);
        Destructible6.transform.position.set(1110, 410);
        Destructible6.addSprite(this.resources["crate"].texture, new Vector2_1.Vector2(0.7, 0.7));
        Destructible6.addCollider(true);
        Destructible6.addRigidbody(Destructible6, 5, false, true, 0.1);
        var Destructible7 = new Destructible_1.Destructible(500);
        Destructible7.transform.position.set(1170, 400);
        Destructible7.addSprite(this.resources["crate"].texture, new Vector2_1.Vector2(0.7, 0.7));
        Destructible7.addCollider(true);
        Destructible7.addRigidbody(Destructible7, 5, false, true, 0.1);
        var goal = new Goal_1.Goal();
        goal.transform.position.set(1360, 650);
        goal.addSprite(this.resources["yellow_circle"].texture, new Vector2_1.Vector2(2, 2));
        goal.addCollider(true);
        goal.addRigidbody(goal, 10, true);
        var moving = new MovingObstacle_1.MovingObstacle(500, true);
        moving.transform.position.set(1200, 350);
        moving.addSprite(this.resources["red_button"].texture, new Vector2_1.Vector2(2, 2));
        moving.addCollider(true);
        moving.addRigidbody(moving, 10, true, false);
        this.addGameObjectToCollection(moving);
        moving.easing = true;
        moving.SetEasingStructs(new MovingObstacle_1.EasingStruct(1, 2, 3), new MovingObstacle_1.EasingStruct(1, 2.5, 3));
        var movingX = moving.transform.position.x;
        var movingY = moving.transform.position.y;
        moving.SetSplinePoints([
            new Vector2_1.Vector2(movingX + 0, movingY + 0),
            new Vector2_1.Vector2(movingX - 120, movingY - 50),
            new Vector2_1.Vector2(movingX - 240, movingY - 100),
            new Vector2_1.Vector2(movingX - 500, movingY + 310),
            new Vector2_1.Vector2(movingX - 700, movingY - 50),
            new Vector2_1.Vector2(movingX - 850, movingY - 150)
        ]);
        var moving2 = new MovingObstacle_1.MovingObstacle(500, true);
        moving2.transform.position.set(150, 250);
        moving2.addSprite(this.resources["red_button"].texture, new Vector2_1.Vector2(2, 2));
        moving2.addCollider(true);
        moving2.addRigidbody(moving2, 10, true, false);
        this.addGameObjectToCollection(moving2);
        moving2.easing = true;
        moving2.SetEasingStructs(new MovingObstacle_1.EasingStruct(1, 3, 1), new MovingObstacle_1.EasingStruct(1, 3, 1));
        var moving2X = moving2.transform.position.x;
        var moving2Y = moving2.transform.position.y;
        moving2.SetSplinePoints([
            new Vector2_1.Vector2(moving2X + 50, moving2Y + -50),
            new Vector2_1.Vector2(moving2X + 0, moving2Y + 0),
            new Vector2_1.Vector2(moving2X + 300, moving2Y - 50),
            new Vector2_1.Vector2(moving2X + 50, moving2Y + 110),
            new Vector2_1.Vector2(moving2X + 200, moving2Y + 80),
            new Vector2_1.Vector2(moving2X + 260, moving2Y + 180),
            new Vector2_1.Vector2(moving2X + 270, moving2Y + 250)
        ]);
    };
    SceneManager.prototype.LevelThree = function () {
        var Obstacle1 = this.createNewGameObject();
        Obstacle1.transform.position.set(1100, 755);
        Obstacle1.addSprite(this.resources["green_button"].texture, new Vector2_1.Vector2(4, 2));
        Obstacle1.addCollider(true);
        Obstacle1.addRigidbody(Obstacle1, 10, true);
        Obstacle1.rotateGameObject(0);
        var Obstacle2 = this.createNewGameObject();
        Obstacle2.transform.position.set(1370, 560);
        Obstacle2.addSprite(this.resources["blue_button"].texture, new Vector2_1.Vector2(1.8, 1.0));
        Obstacle2.addCollider(true);
        Obstacle2.addRigidbody(Obstacle2, 20, true, false, 0.2);
        Obstacle2.rotateGameObject(90);
        var Obstacle3 = this.createNewGameObject();
        Obstacle3.transform.position.set(1175, 500);
        Obstacle3.addSprite(this.resources["blue_button"].texture, new Vector2_1.Vector2(2.0, 1.0));
        Obstacle3.addCollider(true);
        Obstacle3.addRigidbody(Obstacle3, 20, true, false, 0.2);
        Obstacle3.rotateGameObject(90);
        var Obstacle4 = this.createNewGameObject();
        Obstacle4.transform.position.set(700, 370);
        Obstacle4.addSprite(this.resources["tile_float_mid"].texture, new Vector2_1.Vector2(2.0, 1.0));
        Obstacle4.addCollider(true);
        Obstacle4.addRigidbody(Obstacle4, 20, true, false, 0.2);
        Obstacle4.rotateGameObject(320);
        var Obstacle5 = this.createNewGameObject();
        Obstacle5.transform.position.set(460, 600);
        Obstacle5.addSprite(this.resources["green_button"].texture, new Vector2_1.Vector2(2, 2));
        Obstacle5.addCollider(true);
        Obstacle5.addRigidbody(Obstacle5, 10, true);
        Obstacle5.rotateGameObject(0);
        var Destructible1 = new Destructible_1.Destructible(500);
        Destructible1.transform.position.set(400, 400);
        Destructible1.addSprite(this.resources["crate"].texture, new Vector2_1.Vector2(0.7, 0.7));
        Destructible1.addCollider(true);
        Destructible1.addRigidbody(Destructible1, 5, false, true, 0.1);
        Destructible1.rotateGameObject(120);
        var Destructible2 = new Destructible_1.Destructible(500);
        Destructible2.transform.position.set(600, 400);
        Destructible2.addSprite(this.resources["crate"].texture, new Vector2_1.Vector2(0.7, 0.7));
        Destructible2.addCollider(true);
        Destructible2.addRigidbody(Destructible2, 5, false, true, 0.1);
        Destructible2.rotateGameObject(120);
        var Destructible3 = new Destructible_1.Destructible(500);
        Destructible3.transform.position.set(500, 400);
        Destructible3.addSprite(this.resources["crate"].texture, new Vector2_1.Vector2(0.7, 0.7));
        Destructible3.addCollider(true);
        Destructible3.addRigidbody(Destructible3, 5, false, true, 0.1);
        Destructible3.rotateGameObject(120);
        var goal = new Goal_1.Goal();
        goal.transform.position.set(1290, 720);
        goal.addSprite(this.resources["yellow_circle"].texture, new Vector2_1.Vector2(2, 2));
        goal.addCollider(true);
        goal.addRigidbody(goal, 10, true);
        var moving = new MovingObstacle_1.MovingObstacle(2500, false);
        moving.transform.position.set(1280, 320);
        moving.addSprite(this.resources["red_button"].texture, new Vector2_1.Vector2(2.7, 1));
        moving.addCollider(true);
        moving.addRigidbody(moving, 10, true, false);
        moving.rotateGameObject(-25);
        this.addGameObjectToCollection(moving);
        moving.SetEasingStructs(new MovingObstacle_1.EasingStruct(1, 2, 3), new MovingObstacle_1.EasingStruct(1, 2.5, 3));
        var movingX = moving.transform.position.x;
        var movingY = moving.transform.position.y;
        moving.SetSplinePoints([
            new Vector2_1.Vector2(movingX + 175, movingY + 0),
            new Vector2_1.Vector2(movingX + 175, movingY + 50),
            new Vector2_1.Vector2(movingX + 175, movingY + 190),
            new Vector2_1.Vector2(movingX + 175, movingY + 310),
            new Vector2_1.Vector2(movingX + 175, movingY + 410),
            new Vector2_1.Vector2(movingX + 155, movingY + 480),
            new Vector2_1.Vector2(movingX + 125, movingY + 480),
            new Vector2_1.Vector2(movingX + 0, movingY + 500),
            new Vector2_1.Vector2(movingX, movingY + 410),
            new Vector2_1.Vector2(movingX, movingY + 310),
            new Vector2_1.Vector2(movingX, movingY + 190),
            new Vector2_1.Vector2(movingX, movingY + 50),
            new Vector2_1.Vector2(movingX, movingY + 0)
        ]);
        var moving2 = new MovingObstacle_1.MovingObstacle(500, true);
        moving2.transform.position.set(150, 250);
        moving2.addSprite(this.resources["red_button"].texture, new Vector2_1.Vector2(2, 2));
        moving2.addCollider(true);
        moving2.addRigidbody(moving2, 10, true, false);
        this.addGameObjectToCollection(moving2);
        moving2.easing = true;
        moving2.SetEasingStructs(new MovingObstacle_1.EasingStruct(1, 1, 1), new MovingObstacle_1.EasingStruct(1, 3, 1));
        var moving2X = moving2.transform.position.x;
        var moving2Y = moving2.transform.position.y;
        moving2.SetSplinePoints([
            new Vector2_1.Vector2(moving2X + 50, moving2Y + -50),
            new Vector2_1.Vector2(moving2X + 0, moving2Y + 0),
            new Vector2_1.Vector2(moving2X + 300, moving2Y - 50),
            new Vector2_1.Vector2(moving2X + 50, moving2Y + 110),
            new Vector2_1.Vector2(moving2X + 200, moving2Y + 80),
            new Vector2_1.Vector2(moving2X + 260, moving2Y + 180),
            new Vector2_1.Vector2(moving2X + 270, moving2Y + 250)
        ]);
    };
    SceneManager.prototype.LevelFour = function () {
        var Obstacle1 = this.createNewGameObject();
        Obstacle1.transform.position.set(1100, 755);
        Obstacle1.addSprite(this.resources["green_button"].texture, new Vector2_1.Vector2(4, 2));
        Obstacle1.addCollider(true);
        Obstacle1.addRigidbody(Obstacle1, 10, false);
        Obstacle1.rotateGameObject(0);
        var Obstacle2 = this.createNewGameObject();
        Obstacle2.transform.position.set(1370, 560);
        Obstacle2.addSprite(this.resources["blue_button"].texture, new Vector2_1.Vector2(1.8, 1.0));
        Obstacle2.addCollider(true);
        Obstacle2.addRigidbody(Obstacle2, 20, false, false, 0.2);
        Obstacle2.rotateGameObject(90);
        var Obstacle3 = this.createNewGameObject();
        Obstacle3.transform.position.set(1175, 500);
        Obstacle3.addSprite(this.resources["blue_button"].texture, new Vector2_1.Vector2(2.0, 1.0));
        Obstacle3.addCollider(true);
        Obstacle3.addRigidbody(Obstacle3, 20, false, false, 0.2);
        Obstacle3.rotateGameObject(90);
        var Obstacle4 = this.createNewGameObject();
        Obstacle4.transform.position.set(700, 370);
        Obstacle4.addSprite(this.resources["tile_float_mid"].texture, new Vector2_1.Vector2(2.0, 1.0));
        Obstacle4.addCollider(true);
        Obstacle4.addRigidbody(Obstacle4, 20, false, false, 0.2);
        Obstacle4.rotateGameObject(320);
        var Obstacle5 = this.createNewGameObject();
        Obstacle5.transform.position.set(460, 600);
        Obstacle5.addSprite(this.resources["green_button"].texture, new Vector2_1.Vector2(2, 2));
        Obstacle5.addCollider(true);
        Obstacle5.addRigidbody(Obstacle5, 10, false, false);
        var Obstacle6 = this.createNewGameObject();
        Obstacle6.transform.position.set(900, 460);
        Obstacle6.addSprite(this.resources["red_button"].texture, new Vector2_1.Vector2(2.5, 2));
        Obstacle6.addCollider(true);
        Obstacle6.addRigidbody(Obstacle6, 10, true);
        var Obstacle7 = this.createNewGameObject();
        Obstacle7.transform.position.set(300, 250);
        Obstacle7.addSprite(this.resources["blue_button"].texture, new Vector2_1.Vector2(1.2, 1.2));
        Obstacle7.addCollider(true);
        Obstacle7.addRigidbody(Obstacle7, 20, true, false, 0.2);
        Obstacle7.rotateGameObject(0);
        var Obstacle8 = this.createNewGameObject();
        Obstacle8.transform.position.set(1300, 250);
        Obstacle8.addSprite(this.resources["blue_button"].texture, new Vector2_1.Vector2(1.2, 1.2));
        Obstacle8.addCollider(true);
        Obstacle8.addRigidbody(Obstacle8, 20, true, false, 0.2);
        Obstacle8.rotateGameObject(45);
        var Destructible1 = this.createNewGameObject();
        Destructible1.transform.position.set(400, 400);
        Destructible1.addSprite(this.resources["crate"].texture, new Vector2_1.Vector2(0.7, 0.7));
        Destructible1.addCollider(true);
        Destructible1.addRigidbody(Destructible1, 5, false, false, 0.1);
        Destructible1.rotateGameObject(120);
        var Destructible2 = this.createNewGameObject();
        Destructible2.transform.position.set(600, 400);
        Destructible2.addSprite(this.resources["crate"].texture, new Vector2_1.Vector2(0.7, 0.7));
        Destructible2.addCollider(true);
        Destructible2.addRigidbody(Destructible2, 5, false, false, 0.1);
        Destructible2.rotateGameObject(120);
        var Destructible3 = this.createNewGameObject();
        Destructible3.transform.position.set(500, 400);
        Destructible3.addSprite(this.resources["crate"].texture, new Vector2_1.Vector2(0.7, 0.7));
        Destructible3.addCollider(true);
        Destructible3.addRigidbody(Destructible3, 5, false, false, 0.1);
        Destructible3.rotateGameObject(120);
        var Destructible4 = this.createNewGameObject();
        Destructible4.transform.position.set(200, 400);
        Destructible4.addSprite(this.resources["crate"].texture, new Vector2_1.Vector2(0.7, 0.7));
        Destructible4.addCollider(true);
        Destructible4.addRigidbody(Destructible4, 5, false, false, 0.1);
        Destructible4.rotateGameObject(120);
        var Destructible5 = this.createNewGameObject();
        Destructible5.transform.position.set(900, 450);
        Destructible5.addSprite(this.resources["crate"].texture, new Vector2_1.Vector2(0.7, 0.7));
        Destructible5.addCollider(true);
        Destructible5.addRigidbody(Destructible5, 5, false, false, 0.1);
        Destructible5.rotateGameObject(120);
        var Destructible6 = this.createNewGameObject();
        Destructible6.transform.position.set(500, 600);
        Destructible6.addSprite(this.resources["crate"].texture, new Vector2_1.Vector2(0.7, 0.7));
        Destructible6.addCollider(true);
        Destructible6.addRigidbody(Destructible6, 5, false, false, 0.1);
        Destructible6.rotateGameObject(120);
        var Destructible7 = this.createNewGameObject();
        Destructible7.transform.position.set(950, 650);
        Destructible7.addSprite(this.resources["crate"].texture, new Vector2_1.Vector2(0.7, 0.7));
        Destructible7.addCollider(true);
        Destructible7.addRigidbody(Destructible7, 5, false, false, 0.1);
        Destructible7.rotateGameObject(120);
        var Destructible8 = this.createNewGameObject();
        Destructible8.transform.position.set(700, 100);
        Destructible8.addSprite(this.resources["crate"].texture, new Vector2_1.Vector2(0.7, 0.7));
        Destructible8.addCollider(true);
        Destructible8.addRigidbody(Destructible8, 5, false, false, 0.1);
        Destructible8.rotateGameObject(120);
        var goal = new Goal_1.Goal();
        goal.transform.position.set(1290, 720);
        goal.addSprite(this.resources["yellow_circle"].texture, new Vector2_1.Vector2(2, 2));
        goal.addCollider(true);
        goal.addRigidbody(goal, 10, true);
    };
    return SceneManager;
}());
exports.SceneManager = SceneManager;


/***/ }),

/***/ "./src/GameObjects/Cannon.ts":
/*!***********************************!*\
  !*** ./src/GameObjects/Cannon.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cannon = void 0;
var GameObject_1 = __webpack_require__(/*! ../Engine/GameObject */ "./src/Engine/GameObject.ts");
var Vector2_1 = __webpack_require__(/*! ../Utility/Vector2 */ "./src/Utility/Vector2.ts");
var Rigidbody_1 = __webpack_require__(/*! ../Engine/Rigidbody */ "./src/Engine/Rigidbody.ts");
var CannonBall_1 = __webpack_require__(/*! ./CannonBall */ "./src/GameObjects/CannonBall.ts");
var Cannon = /** @class */ (function (_super) {
    __extends(Cannon, _super);
    function Cannon() {
        var _this = _super.call(this) || this;
        _this.shoot = false;
        _this.chargeAttack = 0;
        _this.charging = false;
        _this.direction = new Vector2_1.Vector2(0, 0);
        _this.updateShootingAngle();
        _this.gravityOn = true;
        return _this;
    }
    Cannon.prototype.updateShootingAngle = function () {
        this.direction.x = Math.cos(this.transform.rotation);
        this.direction.y = Math.sin(this.transform.rotation);
        this.direction.normalizeVector();
    };
    Cannon.prototype.HandleCannonCharge = function (app, resource) {
        if (this.charging) {
            this.chargeAttack += 1;
        }
        else {
            if (this.shoot) {
                //TODO Some shoot charging feedback.
                var cannonBall = new CannonBall_1.CannonBall(700);
                cannonBall.addSprite(resource["canon_ball"].texture, new Vector2_1.Vector2(3, 3));
                var transform = Vector2_1.Vector2.vectorFromPoint(this.transform.position).addVector(new Vector2_1.Vector2(90, 0));
                cannonBall.transform.position.x = transform.x;
                cannonBall.transform.position.y = transform.y;
                cannonBall.addRigidbody(cannonBall, 2, false, this.gravityOn, 0.1);
                cannonBall.addCollider(true);
                cannonBall.rigidbody.addForce(this.direction.multScalar(Math.min(20, this.chargeAttack / 10)), Rigidbody_1.ForceMode.Impulse);
                cannonBall.rigidbody.addTorque(new Vector2_1.Vector2(0.05, 0.05), Rigidbody_1.ForceMode.Impulse);
                app.stage.addChild(cannonBall.sprite);
                this.shoot = false;
                this.chargeAttack = 0;
            }
        }
    };
    return Cannon;
}(GameObject_1.GameObject));
exports.Cannon = Cannon;


/***/ }),

/***/ "./src/GameObjects/CannonBall.ts":
/*!***************************************!*\
  !*** ./src/GameObjects/CannonBall.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CannonBall = void 0;
var GameObject_1 = __webpack_require__(/*! ../Engine/GameObject */ "./src/Engine/GameObject.ts");
var SceneManager_1 = __webpack_require__(/*! ../Engine/SceneManager */ "./src/Engine/SceneManager.ts");
var GameManager_1 = __webpack_require__(/*! ../Engine/GameManager */ "./src/Engine/GameManager.ts");
var CannonBall = /** @class */ (function (_super) {
    __extends(CannonBall, _super);
    function CannonBall(time) {
        var _this = _super.call(this) || this;
        _this.lifeTime = time;
        _this.tag = "cannonball";
        return _this;
    }
    CannonBall.prototype.Update = function (delta) {
        _super.prototype.Update.call(this, delta);
        this.updateLifeTime(delta);
    };
    CannonBall.prototype.updateLifeTime = function (delta) {
        var _this = this;
        this.lifeTime -= delta;
        if (this.lifeTime <= 0) {
            if (this.rigidbody !== null) {
                GameManager_1.GameManager.getInstance().app.stage.removeChild(this.rigidbody.linearVisualization);
                SceneManager_1.SceneManager.getInstance().rbGraphics.filter(function (obj) { return obj !== _this.rigidbody.linearVisualization; });
            }
            GameObject_1.GameObject.Destroy(this);
        }
    };
    return CannonBall;
}(GameObject_1.GameObject));
exports.CannonBall = CannonBall;


/***/ }),

/***/ "./src/GameObjects/Destructible.ts":
/*!*****************************************!*\
  !*** ./src/GameObjects/Destructible.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Destructible = void 0;
var GameObject_1 = __webpack_require__(/*! ../Engine/GameObject */ "./src/Engine/GameObject.ts");
var SceneManager_1 = __webpack_require__(/*! ../Engine/SceneManager */ "./src/Engine/SceneManager.ts");
var GameManager_1 = __webpack_require__(/*! ../Engine/GameManager */ "./src/Engine/GameManager.ts");
var Destructible = /** @class */ (function (_super) {
    __extends(Destructible, _super);
    function Destructible(time) {
        var _this = _super.call(this) || this;
        _this.lifeTime = time;
        _this.triggered = false;
        _this.tag = "destructible";
        return _this;
    }
    Destructible.prototype.Update = function (delta) {
        _super.prototype.Update.call(this, delta);
        if (this.triggered) {
            this.updateLifeTime(delta);
        }
    };
    Destructible.prototype.updateLifeTime = function (delta) {
        var _this = this;
        this.lifeTime -= delta;
        if (this.lifeTime <= 0) {
            if (this.rigidbody !== null) {
                GameManager_1.GameManager.getInstance().app.stage.removeChild(this.rigidbody.linearVisualization);
                SceneManager_1.SceneManager.getInstance().rbGraphics.filter(function (obj) { return obj !== _this.rigidbody.linearVisualization; });
            }
            GameObject_1.GameObject.Destroy(this);
        }
    };
    Destructible.prototype.onCollisionEnter = function (collider) {
        if (collider.parentGameObject.tag === "cannonball") {
            this.triggered = true;
            if (typeof (collider.parentGameObject) === typeof (Destructible)) {
                collider.parentGameObject.triggered = true;
            }
        }
    };
    return Destructible;
}(GameObject_1.GameObject));
exports.Destructible = Destructible;


/***/ }),

/***/ "./src/GameObjects/Goal.ts":
/*!*********************************!*\
  !*** ./src/GameObjects/Goal.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Goal = void 0;
var GameObject_1 = __webpack_require__(/*! ../Engine/GameObject */ "./src/Engine/GameObject.ts");
var GameManager_1 = __webpack_require__(/*! ../Engine/GameManager */ "./src/Engine/GameManager.ts");
var Goal = /** @class */ (function (_super) {
    __extends(Goal, _super);
    function Goal() {
        var _this = _super.call(this) || this;
        _this.isHit = false;
        _this.goalText = new PIXI.Text('', { fontFamily: 'Arial', fontSize: 22, fill: 0xFF50FF, align: 'center' });
        _this.goalText.position = new PIXI.Point(500, 120);
        return _this;
    }
    Goal.prototype.onCollisionEnter = function (collider) {
        if (collider.parentGameObject.tag === "cannonball") {
            GameManager_1.GameManager.getInstance().loadFlag = true;
            this.goalText.text = "YOU WON";
            GameManager_1.GameManager.getInstance().app.stage.addChild(this.goalText);
            this.isHit = true;
            GameManager_1.GameManager.getInstance().score += 10;
            console.log("score" + GameManager_1.GameManager.getInstance().score);
        }
    };
    return Goal;
}(GameObject_1.GameObject));
exports.Goal = Goal;


/***/ }),

/***/ "./src/GameObjects/MovingObstacle.ts":
/*!*******************************************!*\
  !*** ./src/GameObjects/MovingObstacle.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovingObstacle = exports.EasingStruct = void 0;
var GameObject_1 = __webpack_require__(/*! ../Engine/GameObject */ "./src/Engine/GameObject.ts");
var SceneManager_1 = __webpack_require__(/*! ../Engine/SceneManager */ "./src/Engine/SceneManager.ts");
var CatMullRomSpline_1 = __webpack_require__(/*! ../Engine/CatMullRomSpline */ "./src/Engine/CatMullRomSpline.ts");
var EasingStruct = /** @class */ (function () {
    function EasingStruct(accelerate, slowDown, factor) {
        this.accelerate = accelerate;
        this.slowDown = slowDown;
        this.factor = factor;
    }
    return EasingStruct;
}());
exports.EasingStruct = EasingStruct;
var MovingObstacle = /** @class */ (function (_super) {
    __extends(MovingObstacle, _super);
    function MovingObstacle(traversalTime, easing, slowDownstruct, accelerateStruct) {
        var _this = _super.call(this) || this;
        _this.spline = new CatMullRomSpline_1.CatMullRomSpline(_this);
        _this.pointOnCurve = 0;
        _this.traversalTime = traversalTime !== null && traversalTime !== void 0 ? traversalTime : 1000;
        _this.easing = easing !== null && easing !== void 0 ? easing : false;
        _this.direction = 2;
        _this.forwardStruct = accelerateStruct !== null && accelerateStruct !== void 0 ? accelerateStruct : new EasingStruct(1, 2, 2);
        _this.reverseStruct = slowDownstruct !== null && slowDownstruct !== void 0 ? slowDownstruct : new EasingStruct(2, 1, 2);
        SceneManager_1.SceneManager.getInstance().addSplineToCollection(_this.spline);
        return _this;
    }
    MovingObstacle.prototype.Update = function (delta) {
        _super.prototype.Update.call(this, delta);
        var traverse = this.traversalSegment * delta;
        var f_Struct = this.forwardStruct;
        var r_Struct = this.reverseStruct;
        if (this.direction === 1 && this.pointOnCurve - traverse < 0) {
            this.direction = this.spline.splinePath.length - 1;
            this.pointOnCurve = 0.1;
        }
        else if (this.direction !== 1 && this.pointOnCurve + traverse > this.spline.totalSplineLength) {
            this.direction = 1;
            this.pointOnCurve = this.spline.totalSplineLength - 0.1;
        }
        if (this.easing && SceneManager_1.SceneManager.getInstance().enableEasing) {
            this.pointOnCurve += this.direction !== 1 ?
                this.Ease(this.spline.GetNormalisedOffset(this.pointOnCurve), f_Struct.accelerate, f_Struct.slowDown, f_Struct.factor)
                : this.Ease(this.spline.GetNormalisedOffset(this.pointOnCurve), r_Struct.accelerate, r_Struct.slowDown, r_Struct.factor) * -1;
        }
        else {
            this.pointOnCurve += this.direction !== 1 ? traverse : (traverse * -1);
        }
        if (this.pointOnCurve > 0 && this.pointOnCurve < this.spline.totalSplineLength) {
            var offset = this.spline.GetNormalisedOffset(this.pointOnCurve);
            var pos = this.spline.GetSplinePoint(offset);
            this.transform.position.x = pos.x;
            this.transform.position.y = pos.y;
        }
    };
    MovingObstacle.prototype.Ease = function (delta, k1, k2, factor) {
        var f, s;
        f = k1 * 2 / Math.PI + k2 * k1 + (1 * k2) + 2 / Math.PI;
        if (delta < k1) {
            s = (k1 * (2 / Math.PI) * (Math.sin((delta / k1) * Math.PI / 2 * Math.PI / 2) + 1));
        }
        else if (delta < k2) {
            s = (2 * k1 / Math.PI + delta * k1) * factor;
        }
        else {
            s = (2 * k1 / Math.PI + k2 * k1 + ((1 - k2) * (2 / Math.PI)) * Math.sin(((delta * k2) / (1 * k2)) * Math.PI / 2));
        }
        return s / f;
    };
    MovingObstacle.prototype.SetEasingStructs = function (accelerate, slowdown) {
        this.forwardStruct = accelerate;
        this.reverseStruct = slowdown;
    };
    MovingObstacle.prototype.SetSplinePoints = function (splinePoints) {
        if (splinePoints !== null && splinePoints !== undefined) {
            this.spline.CreateSplineFromList(splinePoints);
        }
        else {
            this.spline.CreateRandomControlPoints();
        }
        this.UpdateTraversalSegment();
    };
    MovingObstacle.prototype.UpdateTraversalSegment = function () {
        this.traversalSegment = this.spline.totalSplineLength / this.traversalTime;
    };
    return MovingObstacle;
}(GameObject_1.GameObject));
exports.MovingObstacle = MovingObstacle;


/***/ }),

/***/ "./src/Utility/DrawFunctions.ts":
/*!**************************************!*\
  !*** ./src/Utility/DrawFunctions.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DrawFunction = void 0;
var PIXI = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/index.js");
var DrawFunction = /** @class */ (function () {
    function DrawFunction() {
    }
    DrawFunction.drawShapeVertices = function (app, color, vertices) {
        vertices.forEach(function (element) {
            var point = new PIXI.Graphics();
            point
                .lineStyle(2, color)
                .beginFill(color)
                .drawCircle(element.x, element.y, 5)
                .endFill();
            app.stage.addChild(point);
        });
    };
    DrawFunction.drawShapeCenter = function (app, color, collider) {
        var point = new PIXI.Graphics();
        point
            .lineStyle(2, color)
            .beginFill(color)
            .drawCircle(collider.colliderCenter.x, collider.colliderCenter.y, 5)
            .endFill();
        app.stage.addChild(point);
    };
    DrawFunction.drawPoint = function (app, object, color, pos_x, pos_y, radius) {
        var rad = radius !== null && radius !== void 0 ? radius : 15;
        object.clear()
            .lineStyle(2, color)
            .beginFill(color)
            .drawCircle(pos_x, pos_y, rad)
            .endFill();
        app.stage.addChild(object);
    };
    DrawFunction.drawSpline = function (app, color, spline, graphicsArray) {
        for (var t = 0.0; t < spline.splinePath.length - 3.0; t += 0.01) {
            var pos = spline.GetSplinePoint(t);
            var graphic = new PIXI.Graphics();
            graphicsArray.push(graphic);
            DrawFunction.drawPoint(app, graphic, color, pos.x, pos.y, 5);
        }
    };
    DrawFunction.DrawArrow = function (app, color, from, momentumVector, graphicsArray, obj) {
        obj.clear()
            .lineStyle(5, color)
            .moveTo(from.x, from.y)
            .lineTo(from.x + momentumVector.x * 20, from.y + momentumVector.y * 20)
            .lineStyle(15, color, 1, .5)
            .beginFill(color)
            .endFill();
        app.stage.addChild(obj);
    };
    DrawFunction.displayNewText = function (app, obj, text, fontFamily, fontSize, color, align, pos_x, pos_y) {
        obj = new PIXI.Text(text, { fontFamily: fontFamily, fontSize: fontSize, fill: color, align: align });
        obj.position = new PIXI.Point(pos_x, pos_y);
        app.stage.addChild(obj);
    };
    DrawFunction.ConvertComponentNumberToHex = function (value) {
        var hex = value.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    };
    DrawFunction.ConvertNumberToHex = function (red, green, blue) {
        return "0x" + this.ConvertComponentNumberToHex(red) + this.ConvertComponentNumberToHex(green) + this.ConvertComponentNumberToHex(blue);
    };
    DrawFunction.RandomHexNumber = function () {
        var red = Math.floor(Math.random() * (256 + 1));
        var green = Math.floor(Math.random() * (256 + 1));
        var blue = Math.floor(Math.random() * (256 + 1));
        return this.ConvertNumberToHex(red, green, blue);
    };
    return DrawFunction;
}());
exports.DrawFunction = DrawFunction;


/***/ }),

/***/ "./src/Utility/Vector2.ts":
/*!********************************!*\
  !*** ./src/Utility/Vector2.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector2 = void 0;
var Vector2 = /** @class */ (function () {
    function Vector2(x, y) {
        if (x !== undefined && x !== null && y !== undefined && y !== null) {
            this.x = x;
            this.y = y;
        }
        else {
            this.x = 0;
            this.y = 0;
        }
    }
    Vector2.addVector = function (vec1, vec2) {
        return new Vector2(vec1.x + vec2.x, vec1.y + vec2.y);
    };
    Vector2.subtractVector = function (vec1, vec2) {
        return new Vector2(vec1.x - vec2.x, vec1.y - vec2.y);
    };
    Vector2.vectorFromPoint = function (point) {
        return new Vector2(point.x, point.y);
    };
    Vector2.cross = function (vec1, vec2) {
        return vec1.x * vec2.y - vec2.x * vec1.y;
    };
    Vector2.crossVector = function (vec1, number) {
        return new Vector2(-vec1.y * number, vec1.x * number);
    };
    Vector2.prototype.setXY = function (x, y) {
        this.x = x;
        this.y = y;
    };
    Vector2.prototype.negate = function () {
        return new Vector2(-this.x, -this.y);
    };
    Vector2.prototype.addVector = function (vec) {
        return new Vector2(this.x + vec.x, this.y + vec.y);
    };
    Vector2.prototype.subtractVector = function (vec1) {
        return new Vector2(this.x - vec1.x, this.y - vec1.y);
    };
    Vector2.prototype.multScalar = function (scalar) {
        return new Vector2(this.x * scalar, this.y * scalar);
    };
    Vector2.prototype.divScalar = function (scalar) {
        return new Vector2(this.x / scalar, this.y / scalar);
    };
    Vector2.prototype.magnitude = function () {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    };
    Vector2.prototype.normalizeVector = function () {
        return this.divScalar(this.magnitude());
    };
    Vector2.prototype.dot = function (vec) {
        return (this.x * vec.x) + (this.y * vec.y);
    };
    Vector2.prototype.normalVectorR = function () {
        return new Vector2(this.y, -this.x);
    };
    Vector2.prototype.normalVectorL = function () {
        return new Vector2(-this.y, this.x);
    };
    Vector2.prototype.toString = function () {
        return "x: " + this.x + " / y: " + this.y;
    };
    return Vector2;
}());
exports.Vector2 = Vector2;


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
    Images from https://www.gameart2d.com/free-platformer-game-tileset.html
*/
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var PIXI = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/index.js");
var Vector2_1 = __webpack_require__(/*! ./Utility/Vector2 */ "./src/Utility/Vector2.ts");
var SceneManager_1 = __webpack_require__(/*! ./Engine/SceneManager */ "./src/Engine/SceneManager.ts");
var Cannon_1 = __webpack_require__(/*! ./GameObjects/Cannon */ "./src/GameObjects/Cannon.ts");
var GameManager_1 = __webpack_require__(/*! ./Engine/GameManager */ "./src/Engine/GameManager.ts");
var CPIndicator_1 = __webpack_require__(/*! ./Engine/CPIndicator */ "./src/Engine/CPIndicator.ts");
var appContainer = document.getElementById("app_container");
var app = new PIXI.Application({
    width: 1600,
    height: 900,
    antialias: true,
});
appContainer.appendChild(app.view);
(_a = app.ticker) === null || _a === void 0 ? void 0 : _a.stop();
(_b = app.ticker) === null || _b === void 0 ? void 0 : _b.destroy();
var cannon;
var displayTick = 1000;
var gameManager = GameManager_1.GameManager.getInstance();
gameManager.init(app, play, gameLoop);
var animationFRText = new PIXI.Text('', { fontFamily: 'Arial', fontSize: 22, fill: 0xFF50FF, align: 'center' });
animationFRText.position = new PIXI.Point(100, 100);
var rendererFRText = new PIXI.Text('', { fontFamily: 'Arial', fontSize: 22, fill: 0xFF50FF, align: 'center' });
rendererFRText.position = new PIXI.Point(100, 120);
var sceneManager = SceneManager_1.SceneManager.getInstance();
sceneManager.LoadScene(LoadLevel, setUpGame);
function setUpGame() {
    gameManager.setPlayerInput(sceneManager, cannon);
    gameManager.setUpSimulationLoops();
}
//Is called by the animation loop in the GameManager, currently there is only a play 
// game state, set earlier in the constructor. Later this state can change, allowing for 
// easier switches between levels etc. 
function gameLoop(delta) {
    if (gameManager.loadFlag !== true) {
        gameManager.gameState(delta);
    }
    else {
        gameManager.pauseRenderers();
        sceneManager.removeAllGameObjects(app);
        sceneManager.currentLevel = sceneManager.currentLevel + 1 <= sceneManager.numberOfLevels ? sceneManager.currentLevel + 1 : 1;
        sceneManager.LoadScene(LoadLevel, setUpGame);
        gameManager.playerInput.linkPlayerObject(cannon);
        gameManager.loadFlag = false;
        gameManager.resumeRenderers();
        gameManager.gameState(delta);
    }
}
function displayAnimationFrameRate() {
    animationFRText.text = "Animation Tick Interval: " + gameManager.animationTickTime + " ms";
    app.stage.addChild(animationFRText);
}
function displayRenderFrameRate() {
    var fps = Math.ceil(1000 / gameManager.rLoopDelta);
    rendererFRText.text = "Renderer FPS: " + fps;
    app.stage.addChild(rendererFRText);
}
/* GameState Play. In this function all the game objects and rigid bodies are updated, and
checked for collisions.
*/
function play(delta) {
    var _a, _b;
    //Refactor ugly code
    if (sceneManager.reset === true) {
        sceneManager.removeAllGameObjects(app);
        sceneManager.LoadScene(LoadLevel, setUpGame);
        gameManager.playerInput.linkPlayerObject(cannon);
        gameManager.animationTickTime = 5;
        gameManager.renderFPS = 60;
        sceneManager.removeAllRBGraphics();
        sceneManager.removeAllSplineGraphics();
        sceneManager.reset = false;
    }
    (_a = gameManager.playerInput.attachedObject) === null || _a === void 0 ? void 0 : _a.HandleCannonCharge(app, sceneManager.resources);
    (_b = gameManager.playerInput.attachedObject) === null || _b === void 0 ? void 0 : _b.updateShootingAngle();
    sceneManager.rigidBodyCollection.forEach(function (element) {
        element.UpdateRigidBody(delta);
        if (sceneManager.drawRBProperties) {
            sceneManager.rbGraphics.filter(function (obj) { return element.linearVisualization == obj; });
            sceneManager.rbGraphics.filter(function (obj) { return element.angularVisualization == obj; });
            element.ShowForceVectors();
        }
    });
    sceneManager.gameObjectCollection.forEach(function (element) {
        element.Update(delta);
    });
    //Non RB Collisions!!!
    sceneManager.colliderCollection.forEach(function (element) {
        sceneManager.colliderCollection.forEach(function (element2) {
            if ((element !== element2) && (element.parentGameObject.rigidbody.infiniteMass === false)) {
                var mtv = element.checkForCollisions(element2);
                if (mtv.colliding === true) {
                    try {
                        if ((mtv.cp[0] !== undefined && mtv.cp[0] !== null) || mtv.cp[1] !== undefined && mtv.cp[1] !== null)
                            element.parentGameObject.rigidbody.resolveRigidbodyCollision(mtv, element2.parentGameObject.rigidbody);
                        if (sceneManager.drawRBProperties) {
                            if (mtv.cp[0] !== undefined && mtv.cp[0] !== null) {
                                var cpPoint = new CPIndicator_1.CPIndicator(25, mtv.cp[0], 0x12FFAB);
                            }
                            if (mtv.cp[1] !== undefined && mtv.cp[1] !== null) {
                                var cpPoint = new CPIndicator_1.CPIndicator(25, mtv.cp[1], 0xFF12FF);
                            }
                        }
                        element.parentGameObject.onCollisionEnter(element2);
                        element2.parentGameObject.onCollisionEnter(element);
                    }
                    catch (error) {
                        alert("A collision error occured. Click Ok to reset scene.");
                        sceneManager.reset = true;
                        gameManager.animationTickTime = 5;
                        gameManager.renderFPS = 60;
                    }
                }
            }
        });
    });
    displayTick -= gameManager.aLoopDelta;
    if (displayTick <= 0) {
        displayAnimationFrameRate();
        displayRenderFrameRate();
        displayTick = 1000;
    }
}
/** The best way to handle different handles would be the usage of JSONs */
function LoadLevel(level) {
    var background = SceneManager_1.SceneManager.getInstance().currentLevel === 4 ? "background2" : "background";
    var gravity = SceneManager_1.SceneManager.getInstance().currentLevel === 4 ? false : true;
    sceneManager.addBackground(background);
    cannon = new Cannon_1.Cannon();
    cannon.transform.position.set(210, 600);
    cannon.addSprite(sceneManager.resources["canon"].texture, new Vector2_1.Vector2(3, 3));
    cannon.addCollider(true);
    cannon.addRigidbody(cannon, 1, true);
    cannon.rotateGameObject(-45);
    cannon.gravityOn = gravity;
    sceneManager.addObstacles(sceneManager.currentLevel);
    sceneManager.buildWalls();
    sceneManager.addAllSpritesToStage(app.stage);
    GameManager_1.GameManager.getInstance().scoreText.text = "Score: " + GameManager_1.GameManager.getInstance().score;
    GameManager_1.GameManager.getInstance().app.stage.addChild(GameManager_1.GameManager.getInstance().scoreText);
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0VuZ2luZS9DUEluZGljYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRW5naW5lL0NhdE11bGxSb21TcGxpbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0VuZ2luZS9Db2xsaWRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRW5naW5lL0NvbGxpc2lvbkhlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRW5naW5lL0dhbWVNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9FbmdpbmUvR2FtZU9iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRW5naW5lL0tleWJvYXJkSW5wdXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0VuZ2luZS9SaWdpZGJvZHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0VuZ2luZS9TY2VuZU1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWVPYmplY3RzL0Nhbm5vbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZU9iamVjdHMvQ2Fubm9uQmFsbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZU9iamVjdHMvRGVzdHJ1Y3RpYmxlLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lT2JqZWN0cy9Hb2FsLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lT2JqZWN0cy9Nb3ZpbmdPYnN0YWNsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVXRpbGl0eS9EcmF3RnVuY3Rpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9VdGlsaXR5L1ZlY3RvcjIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Q0FBQyxvREFBUztBQUNqQyx3QkFBd0IsbUJBQU8sQ0FBQywwREFBbUI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsOEJBQThCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsOEJBQThCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsOEJBQThCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUNwbkJhO0FBQ2I7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Q0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLHFFQUFxRTtBQUM5RztBQUNBLHdDQUF3QyxxRUFBcUU7QUFDN0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsMkNBQTJDLEVBQUU7QUFDeEcsMkRBQTJELDRDQUE0QyxFQUFFO0FBQ3pHO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvbWFpbi50c1wiLFwidmVuZG9yc35tYWluXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuQ1BJbmRpY2F0b3IgPSB2b2lkIDA7XHJcbnZhciBHYW1lT2JqZWN0XzEgPSByZXF1aXJlKFwiLi9HYW1lT2JqZWN0XCIpO1xyXG52YXIgU2NlbmVNYW5hZ2VyXzEgPSByZXF1aXJlKFwiLi9TY2VuZU1hbmFnZXJcIik7XHJcbnZhciBEcmF3RnVuY3Rpb25zXzEgPSByZXF1aXJlKFwiLi4vVXRpbGl0eS9EcmF3RnVuY3Rpb25zXCIpO1xyXG52YXIgR2FtZU1hbmFnZXJfMSA9IHJlcXVpcmUoXCIuL0dhbWVNYW5hZ2VyXCIpO1xyXG52YXIgQ1BJbmRpY2F0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoQ1BJbmRpY2F0b3IsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBDUEluZGljYXRvcih0aW1lLCB0cmFuc2Zvcm0sIGNvbG91cikge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMubGlmZVRpbWUgPSB0aW1lICE9PSBudWxsICYmIHRpbWUgIT09IHZvaWQgMCA/IHRpbWUgOiA1O1xyXG4gICAgICAgIF90aGlzLnRyaWdnZXJlZCA9IGZhbHNlO1xyXG4gICAgICAgIF90aGlzLmdyYXBoaWMgPSBuZXcgUElYSS5HcmFwaGljcygpO1xyXG4gICAgICAgIFNjZW5lTWFuYWdlcl8xLlNjZW5lTWFuYWdlci5nZXRJbnN0YW5jZSgpLnJiR3JhcGhpY3MucHVzaChfdGhpcy5ncmFwaGljKTtcclxuICAgICAgICBEcmF3RnVuY3Rpb25zXzEuRHJhd0Z1bmN0aW9uLmRyYXdQb2ludChHYW1lTWFuYWdlcl8xLkdhbWVNYW5hZ2VyLmdldEluc3RhbmNlKCkuYXBwLCBfdGhpcy5ncmFwaGljLCBjb2xvdXIsIHRyYW5zZm9ybS54LCB0cmFuc2Zvcm0ueSwgNSk7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgQ1BJbmRpY2F0b3IucHJvdG90eXBlLlVwZGF0ZSA9IGZ1bmN0aW9uIChkZWx0YSkge1xyXG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuVXBkYXRlLmNhbGwodGhpcywgZGVsdGEpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlTGlmZVRpbWUoZGVsdGEpO1xyXG4gICAgfTtcclxuICAgIENQSW5kaWNhdG9yLnByb3RvdHlwZS51cGRhdGVMaWZlVGltZSA9IGZ1bmN0aW9uIChkZWx0YSkge1xyXG4gICAgICAgIHRoaXMubGlmZVRpbWUgLT0gZGVsdGE7XHJcbiAgICAgICAgaWYgKHRoaXMubGlmZVRpbWUgPD0gMCkge1xyXG4gICAgICAgICAgICBHYW1lTWFuYWdlcl8xLkdhbWVNYW5hZ2VyLmdldEluc3RhbmNlKCkuYXBwLnN0YWdlLnJlbW92ZUNoaWxkKHRoaXMuZ3JhcGhpYyk7XHJcbiAgICAgICAgICAgIEdhbWVPYmplY3RfMS5HYW1lT2JqZWN0LkRlc3Ryb3kodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBDUEluZGljYXRvcjtcclxufShHYW1lT2JqZWN0XzEuR2FtZU9iamVjdCkpO1xyXG5leHBvcnRzLkNQSW5kaWNhdG9yID0gQ1BJbmRpY2F0b3I7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuQ2F0TXVsbFJvbVNwbGluZSA9IHZvaWQgMDtcclxudmFyIFZlY3RvcjJfMSA9IHJlcXVpcmUoXCIuLi9VdGlsaXR5L1ZlY3RvcjJcIik7XHJcbnZhciBEcmF3RnVuY3Rpb25zXzEgPSByZXF1aXJlKFwiLi4vVXRpbGl0eS9EcmF3RnVuY3Rpb25zXCIpO1xyXG52YXIgQ2F0TXVsbFJvbVNwbGluZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENhdE11bGxSb21TcGxpbmUocGFyZW50KSB7XHJcbiAgICAgICAgdGhpcy5sYXN0UG9pbnQgPSAwO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBvaW50ID0gMTtcclxuICAgICAgICB0aGlzLnNwbGluZVBhdGggPSBbXTtcclxuICAgICAgICB0aGlzLnNlZ21lbnRMZW5ndGhzID0gW107XHJcbiAgICAgICAgdGhpcy50b3RhbFNwbGluZUxlbmd0aCA9IDA7XHJcbiAgICAgICAgdGhpcy5zdGVwU2l6ZSA9IDAuMDE7XHJcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQgIT09IG51bGwgJiYgcGFyZW50ICE9PSB2b2lkIDAgPyBwYXJlbnQgOiBudWxsO1xyXG4gICAgfVxyXG4gICAgQ2F0TXVsbFJvbVNwbGluZS5wcm90b3R5cGUuR2V0U3BsaW5lUG9pbnQgPSBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICB2YXIgbm9kZSwgeENvb3JkLCB5Q29vcmQ7XHJcbiAgICAgICAgbm9kZSA9IHZhbHVlIC0gTWF0aC5mbG9vcih2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UG9pbnQgPSBNYXRoLmZsb29yKHZhbHVlKSArIDE7XHJcbiAgICAgICAgeENvb3JkID0gdGhpcy5DYXRtdWxsUm9tKG5vZGUsIHRoaXMuc3BsaW5lUGF0aFt0aGlzLmN1cnJlbnRQb2ludCAtIDFdLngsIHRoaXMuc3BsaW5lUGF0aFt0aGlzLmN1cnJlbnRQb2ludF0ueCwgdGhpcy5zcGxpbmVQYXRoW3RoaXMuY3VycmVudFBvaW50ICsgMV0ueCwgdGhpcy5zcGxpbmVQYXRoW3RoaXMuY3VycmVudFBvaW50ICsgMl0ueCk7XHJcbiAgICAgICAgeUNvb3JkID0gdGhpcy5DYXRtdWxsUm9tKG5vZGUsIHRoaXMuc3BsaW5lUGF0aFt0aGlzLmN1cnJlbnRQb2ludCAtIDFdLnksIHRoaXMuc3BsaW5lUGF0aFt0aGlzLmN1cnJlbnRQb2ludF0ueSwgdGhpcy5zcGxpbmVQYXRoW3RoaXMuY3VycmVudFBvaW50ICsgMV0ueSwgdGhpcy5zcGxpbmVQYXRoW3RoaXMuY3VycmVudFBvaW50ICsgMl0ueSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyXzEuVmVjdG9yMih4Q29vcmQsIHlDb29yZCk7XHJcbiAgICB9O1xyXG4gICAgQ2F0TXVsbFJvbVNwbGluZS5wcm90b3R5cGUuR2V0Tm9ybWFsaXNlZE9mZnNldCA9IGZ1bmN0aW9uIChwb3NpdGlvbikge1xyXG4gICAgICAgIHZhciBjb3VudCA9IDA7XHJcbiAgICAgICAgd2hpbGUgKHBvc2l0aW9uID4gdGhpcy5zZWdtZW50TGVuZ3Roc1tjb3VudF0pIHtcclxuICAgICAgICAgICAgcG9zaXRpb24gLT0gdGhpcy5zZWdtZW50TGVuZ3Roc1tjb3VudF07XHJcbiAgICAgICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjb3VudCArIChwb3NpdGlvbiAvIHRoaXMuc2VnbWVudExlbmd0aHNbY291bnRdKTtcclxuICAgIH07XHJcbiAgICBDYXRNdWxsUm9tU3BsaW5lLnByb3RvdHlwZS5DYWxjdWxhdGVTZWdtZW50TGVuZ3RocyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgb2xkX3BvaW50LCBuZXdfcG9pbnQ7XHJcbiAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuc3BsaW5lUGF0aC5sZW5ndGggLSAzOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIHZhciBzTGVuZ3RoID0gMDtcclxuICAgICAgICAgICAgb2xkX3BvaW50ID0gdGhpcy5HZXRTcGxpbmVQb2ludChpbmRleCk7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHNjYW4gPSAwOyBzY2FuIDw9IDEuMDsgc2NhbiArPSB0aGlzLnN0ZXBTaXplKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdfcG9pbnQgPSB0aGlzLkdldFNwbGluZVBvaW50KGluZGV4ICsgc2Nhbik7XHJcbiAgICAgICAgICAgICAgICB2YXIgYXJjVmFsdWUgPSBNYXRoLnNxcnQoKG5ld19wb2ludC54IC0gb2xkX3BvaW50LngpICogKG5ld19wb2ludC54IC0gb2xkX3BvaW50LngpICsgKG5ld19wb2ludC55IC0gb2xkX3BvaW50LnkpICogKG5ld19wb2ludC55IC0gb2xkX3BvaW50LnkpKTtcclxuICAgICAgICAgICAgICAgIHNMZW5ndGggKz0gYXJjVmFsdWU7XHJcbiAgICAgICAgICAgICAgICBvbGRfcG9pbnQgPSBuZXdfcG9pbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zZWdtZW50TGVuZ3Rocy5wdXNoKHNMZW5ndGgpO1xyXG4gICAgICAgICAgICB0aGlzLnRvdGFsU3BsaW5lTGVuZ3RoICs9IHNMZW5ndGg7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIENhdE11bGxSb21TcGxpbmUucHJvdG90eXBlLkNhdG11bGxSb20gPSBmdW5jdGlvbiAodCwgcDAsIHAxLCBwMiwgcDMpIHtcclxuICAgICAgICB2YXIgdF9wb3cyID0gdCAqIHQ7XHJcbiAgICAgICAgdmFyIHRfcG93MyA9IHQgKiB0ICogdDtcclxuICAgICAgICB2YXIgZjEgPSAoMiAqIHAxKSArICgtcDAgKyBwMikgKiB0O1xyXG4gICAgICAgIHZhciBmMiA9ICgyICogcDAgLSA1ICogcDEgKyA0ICogcDIgLSBwMykgKiB0X3BvdzI7XHJcbiAgICAgICAgdmFyIGYzID0gKC1wMCArIDMgKiBwMSAtIDMgKiBwMiArIHAzKSAqIHRfcG93MztcclxuICAgICAgICByZXR1cm4gMC41ICogKGYxICsgZjIgKyBmMyk7XHJcbiAgICB9O1xyXG4gICAgQ2F0TXVsbFJvbVNwbGluZS5wcm90b3R5cGUuRHJhd0FsbFNwbGluZVBvaW50cyA9IGZ1bmN0aW9uIChhcHAsIGNvbG9yLCBncmFwaGljc0FycmF5KSB7XHJcbiAgICAgICAgdGhpcy5zcGxpbmVQYXRoLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgdmFyIGsgPSBuZXcgUElYSS5HcmFwaGljcygpO1xyXG4gICAgICAgICAgICBncmFwaGljc0FycmF5LnB1c2goayk7XHJcbiAgICAgICAgICAgIERyYXdGdW5jdGlvbnNfMS5EcmF3RnVuY3Rpb24uZHJhd1BvaW50KGFwcCwgaywgY29sb3IsIGVsZW1lbnQueCwgZWxlbWVudC55KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBDYXRNdWxsUm9tU3BsaW5lLnByb3RvdHlwZS5DcmVhdGVSYW5kb21Db250cm9sUG9pbnRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc3BsaW5lUGF0aC5wdXNoKG5ldyBWZWN0b3IyXzEuVmVjdG9yMigxMDAsIDIxMCkpO1xyXG4gICAgICAgIHRoaXMuc3BsaW5lUGF0aC5wdXNoKG5ldyBWZWN0b3IyXzEuVmVjdG9yMigxMjAsIDYwMCkpO1xyXG4gICAgICAgIHRoaXMuc3BsaW5lUGF0aC5wdXNoKG5ldyBWZWN0b3IyXzEuVmVjdG9yMigyNDAsIDIxMCkpO1xyXG4gICAgICAgIHRoaXMuc3BsaW5lUGF0aC5wdXNoKG5ldyBWZWN0b3IyXzEuVmVjdG9yMigzNDAsIDYwMCkpO1xyXG4gICAgICAgIHRoaXMuc3BsaW5lUGF0aC5wdXNoKG5ldyBWZWN0b3IyXzEuVmVjdG9yMig2MDAsIDYyMCkpO1xyXG4gICAgICAgIHRoaXMuc3BsaW5lUGF0aC5wdXNoKG5ldyBWZWN0b3IyXzEuVmVjdG9yMig3MDAsIDU3MCkpO1xyXG4gICAgICAgIHRoaXMuQ2FsY3VsYXRlU2VnbWVudExlbmd0aHMoKTtcclxuICAgICAgICB0aGlzLlByaW50TGlzdCgpO1xyXG4gICAgfTtcclxuICAgIENhdE11bGxSb21TcGxpbmUucHJvdG90eXBlLkNyZWF0ZVNwbGluZUZyb21MaXN0ID0gZnVuY3Rpb24gKHNwbGluZVBvaW50cykge1xyXG4gICAgICAgIHRoaXMuc3BsaW5lUGF0aCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5zcGxpbmVQYXRoID0gc3BsaW5lUG9pbnRzO1xyXG4gICAgICAgIHRoaXMubGFzdFBvaW50ID0gc3BsaW5lUG9pbnRzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgdGhpcy5DYWxjdWxhdGVTZWdtZW50TGVuZ3RocygpO1xyXG4gICAgfTtcclxuICAgIENhdE11bGxSb21TcGxpbmUucHJvdG90eXBlLlByaW50TGlzdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnNlZ21lbnRMZW5ndGhzLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJMZW5ndGg6IFwiICsgZWxlbWVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIENhdE11bGxSb21TcGxpbmU7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQ2F0TXVsbFJvbVNwbGluZSA9IENhdE11bGxSb21TcGxpbmU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuQ29sbGlkZXIgPSB2b2lkIDA7XHJcbnZhciBWZWN0b3IyXzEgPSByZXF1aXJlKFwiLi4vVXRpbGl0eS9WZWN0b3IyXCIpO1xyXG52YXIgcGl4aV9qc18xID0gcmVxdWlyZShcInBpeGkuanNcIik7XHJcbnZhciBDb2xsaXNpb25IZWxwZXJfMSA9IHJlcXVpcmUoXCIuL0NvbGxpc2lvbkhlbHBlclwiKTtcclxudmFyIENvbGxpZGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ29sbGlkZXIocGFyZW50R2FtZU9iamVjdCkge1xyXG4gICAgICAgIHRoaXMudmVydGljZXMgPSBbXTtcclxuICAgICAgICB0aGlzLm5vcm1hbHNSID0gW107XHJcbiAgICAgICAgdGhpcy5wYXJlbnRHYW1lT2JqZWN0ID0gcGFyZW50R2FtZU9iamVjdDtcclxuICAgIH1cclxuICAgIDtcclxuICAgIENvbGxpZGVyLnByb3RvdHlwZS5zZXREaW1lbnNpb25zID0gZnVuY3Rpb24gKHdpZHRoLCBoZWlnaHQsIHRyYW5zZm9ybSkge1xyXG4gICAgICAgIHRoaXMuY29sbGlkZXJXaWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuY29sbGlkZXJIZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5jb2xsaWRlclJvdGF0aW9uID0gdHJhbnNmb3JtLnJvdGF0aW9uO1xyXG4gICAgICAgIHRoaXMuY29sbGlkZXJDZW50ZXIgPSBWZWN0b3IyXzEuVmVjdG9yMi52ZWN0b3JGcm9tUG9pbnQodHJhbnNmb3JtLnBvc2l0aW9uKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVZlcnRleFBvc2l0aW9ucygpO1xyXG4gICAgfTtcclxuICAgIENvbGxpZGVyLnByb3RvdHlwZS51cGRhdGVWZXJ0ZXhQb3NpdGlvbnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy52ZXJ0aWNlc1swXSA9IG5ldyBWZWN0b3IyXzEuVmVjdG9yMih0aGlzLmNvbGxpZGVyV2lkdGggLyAyLCB0aGlzLmNvbGxpZGVySGVpZ2h0IC8gMikuYWRkVmVjdG9yKHRoaXMuY29sbGlkZXJDZW50ZXIpO1xyXG4gICAgICAgIHRoaXMudmVydGljZXNbMV0gPSBuZXcgVmVjdG9yMl8xLlZlY3RvcjIoLXRoaXMuY29sbGlkZXJXaWR0aCAvIDIsIHRoaXMuY29sbGlkZXJIZWlnaHQgLyAyKS5hZGRWZWN0b3IodGhpcy5jb2xsaWRlckNlbnRlcik7XHJcbiAgICAgICAgdGhpcy52ZXJ0aWNlc1syXSA9IG5ldyBWZWN0b3IyXzEuVmVjdG9yMigtdGhpcy5jb2xsaWRlcldpZHRoIC8gMiwgLXRoaXMuY29sbGlkZXJIZWlnaHQgLyAyKS5hZGRWZWN0b3IodGhpcy5jb2xsaWRlckNlbnRlcik7XHJcbiAgICAgICAgdGhpcy52ZXJ0aWNlc1szXSA9IG5ldyBWZWN0b3IyXzEuVmVjdG9yMih0aGlzLmNvbGxpZGVyV2lkdGggLyAyLCAtdGhpcy5jb2xsaWRlckhlaWdodCAvIDIpLmFkZFZlY3Rvcih0aGlzLmNvbGxpZGVyQ2VudGVyKTtcclxuICAgICAgICB0aGlzLmFkZFZlcnRleFJvdGF0aW9uKHRoaXMuY29sbGlkZXJSb3RhdGlvbik7XHJcbiAgICB9O1xyXG4gICAgQ29sbGlkZXIucHJvdG90eXBlLmFkZFZlcnRleFJvdGF0aW9uID0gZnVuY3Rpb24gKHJvdGF0aW9uKSB7XHJcbiAgICAgICAgZm9yICh2YXIgY291bnQgPSAwOyBjb3VudCA8IHRoaXMudmVydGljZXMubGVuZ3RoOyBjb3VudCsrKSB7XHJcbiAgICAgICAgICAgIHZhciBtb3ZlUG9pbnQgPSBuZXcgcGl4aV9qc18xLlBvaW50KCk7XHJcbiAgICAgICAgICAgIG1vdmVQb2ludC54ID0gTWF0aC5jb3Mocm90YXRpb24pICogKHRoaXMudmVydGljZXNbY291bnRdLnggLSB0aGlzLmNvbGxpZGVyQ2VudGVyLngpIC0gTWF0aC5zaW4ocm90YXRpb24pICogKHRoaXMudmVydGljZXNbY291bnRdLnkgLSB0aGlzLmNvbGxpZGVyQ2VudGVyLnkpO1xyXG4gICAgICAgICAgICBtb3ZlUG9pbnQueSA9IE1hdGguc2luKHJvdGF0aW9uKSAqICh0aGlzLnZlcnRpY2VzW2NvdW50XS54IC0gdGhpcy5jb2xsaWRlckNlbnRlci54KSArIE1hdGguY29zKHJvdGF0aW9uKSAqICh0aGlzLnZlcnRpY2VzW2NvdW50XS55IC0gdGhpcy5jb2xsaWRlckNlbnRlci55KTtcclxuICAgICAgICAgICAgdGhpcy52ZXJ0aWNlc1tjb3VudF0gPSBuZXcgVmVjdG9yMl8xLlZlY3RvcjIobW92ZVBvaW50LngsIG1vdmVQb2ludC55KS5hZGRWZWN0b3IodGhpcy5jb2xsaWRlckNlbnRlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudXBkYXRlRWRnZU5vcm1hbHMoKTtcclxuICAgIH07XHJcbiAgICBDb2xsaWRlci5wcm90b3R5cGUudXBkYXRlRWRnZU5vcm1hbHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZm9yICh2YXIgY291bnQgPSAwOyBjb3VudCA8IHRoaXMudmVydGljZXMubGVuZ3RoOyBjb3VudCsrKSB7XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGNvdW50ICsgMSA8IHRoaXMudmVydGljZXMubGVuZ3RoID8gY291bnQgKyAxIDogMDtcclxuICAgICAgICAgICAgdmFyIGVkZ2UgPSBuZXcgVmVjdG9yMl8xLlZlY3RvcjIodGhpcy52ZXJ0aWNlc1tjb3VudF0ueCAtIHRoaXMudmVydGljZXNbaW5kZXhdLngsIHRoaXMudmVydGljZXNbY291bnRdLnkgLSB0aGlzLnZlcnRpY2VzW2luZGV4XS55KTtcclxuICAgICAgICAgICAgdGhpcy5ub3JtYWxzUltjb3VudF0gPSBlZGdlLm5vcm1hbFZlY3RvckwoKS5ub3JtYWxpemVWZWN0b3IoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgQ29sbGlkZXIucHJvdG90eXBlLnByb2plY3QgPSBmdW5jdGlvbiAoYXhpcykge1xyXG4gICAgICAgIHZhciBtaW4gPSBheGlzLmRvdCh0aGlzLnZlcnRpY2VzWzBdKTtcclxuICAgICAgICB2YXIgbWF4ID0gbWluO1xyXG4gICAgICAgIGZvciAodmFyIGNvdW50ID0gMTsgY291bnQgPCB0aGlzLnZlcnRpY2VzLmxlbmd0aDsgY291bnQrKykge1xyXG4gICAgICAgICAgICB2YXIgZG90cHJvZHVjdCA9IGF4aXMuZG90KHRoaXMudmVydGljZXNbY291bnRdKTtcclxuICAgICAgICAgICAgaWYgKGRvdHByb2R1Y3QgPCBtaW4pIHtcclxuICAgICAgICAgICAgICAgIG1pbiA9IGRvdHByb2R1Y3Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAobWF4IDwgZG90cHJvZHVjdCkge1xyXG4gICAgICAgICAgICAgICAgbWF4ID0gZG90cHJvZHVjdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IENvbGxpc2lvbkhlbHBlcl8xLlByb2plY3Rpb24obWluLCBtYXgpO1xyXG4gICAgfTtcclxuICAgIC8qXHJcbiAgICAgICAgIERlcml2ZWQgZnJvbSBodHRwczovL2R5bjRqLm9yZy8yMDEwLzAxL3NhdC8jc2F0LWFsZ29cclxuICAgICAqL1xyXG4gICAgQ29sbGlkZXIucHJvdG90eXBlLmNoZWNrRm9yQ29sbGlzaW9ucyA9IGZ1bmN0aW9uIChjMikge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKCghdGhpcy5pc09uIHx8ICFjMi5pc09uKSB8fCAodGhpcy5wYXJlbnRHYW1lT2JqZWN0LnJpZ2lkYm9keS5pbmZpbml0ZU1hc3MgJiYgYzIucGFyZW50R2FtZU9iamVjdC5yaWdpZGJvZHkuaW5maW5pdGVNYXNzKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IENvbGxpc2lvbkhlbHBlcl8xLk1UVihudWxsLCBudWxsLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjb2xsaWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIHZhciBtdHZfYXhpcyA9IG51bGw7XHJcbiAgICAgICAgdmFyIG1pbk92ZXJsYXBWYWx1ZSA9IDEwMDAwMDAwMDtcclxuICAgICAgICB0aGlzLm5vcm1hbHNSLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgdmFyIHByb2oxID0gX3RoaXMucHJvamVjdChlbGVtZW50KTtcclxuICAgICAgICAgICAgdmFyIHByb2oyID0gYzIucHJvamVjdChlbGVtZW50KTtcclxuICAgICAgICAgICAgaWYgKCFwcm9qMS5jaGVja0Zvck92ZXJsYXAocHJvajIpKSB7XHJcbiAgICAgICAgICAgICAgICBjb2xsaWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciBvdmVybGFwID0gTWF0aC5taW4ocHJvajEubWF4LCBwcm9qMi5tYXgpIC0gTWF0aC5tYXgocHJvajEubWluLCBwcm9qMi5taW4pO1xyXG4gICAgICAgICAgICAgICAgaWYgKG92ZXJsYXAgPCBtaW5PdmVybGFwVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBtaW5PdmVybGFwVmFsdWUgPSBvdmVybGFwO1xyXG4gICAgICAgICAgICAgICAgICAgIG10dl9heGlzID0gZWxlbWVudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGMyLm5vcm1hbHNSLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgdmFyIHByb2oxID0gX3RoaXMucHJvamVjdChlbGVtZW50KTtcclxuICAgICAgICAgICAgdmFyIHByb2oyID0gYzIucHJvamVjdChlbGVtZW50KTtcclxuICAgICAgICAgICAgaWYgKCFwcm9qMS5jaGVja0Zvck92ZXJsYXAocHJvajIpKSB7XHJcbiAgICAgICAgICAgICAgICBjb2xsaWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciBvdmVybGFwID0gTWF0aC5taW4ocHJvajEubWF4LCBwcm9qMi5tYXgpIC0gTWF0aC5tYXgocHJvajEubWluLCBwcm9qMi5taW4pO1xyXG4gICAgICAgICAgICAgICAgaWYgKG92ZXJsYXAgPCBtaW5PdmVybGFwVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBtaW5PdmVybGFwVmFsdWUgPSBvdmVybGFwO1xyXG4gICAgICAgICAgICAgICAgICAgIG10dl9heGlzID0gZWxlbWVudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChjb2xsaWRpbmcudmFsdWVPZigpID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IENvbGxpc2lvbkhlbHBlcl8xLk1UVihudWxsLCBudWxsLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG10dl9heGlzID0gdGhpcy5maXhEaXJlY3Rpb25TaGFwZUFCKHRoaXMsIGMyLCBtdHZfYXhpcyk7XHJcbiAgICAgICAgdmFyIG10diA9IG5ldyBDb2xsaXNpb25IZWxwZXJfMS5NVFYobXR2X2F4aXMsIG1pbk92ZXJsYXBWYWx1ZSwgY29sbGlkaW5nKTtcclxuICAgICAgICBtdHYuZWRnZTEgPSB0aGlzLmNhbGN1bGF0ZUJlc3RFZGdlKG10di5heGlzKTtcclxuICAgICAgICBtdHYuZWRnZTIgPSBjMi5jYWxjdWxhdGVCZXN0RWRnZShtdHYuYXhpcy5uZWdhdGUoKSk7XHJcbiAgICAgICAgdmFyIHJlZmVyZW5jZUVkZ2UsIGluY2lkZW50RWRnZTtcclxuICAgICAgICB2YXIgZmxpcHBlZCA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChNYXRoLmFicyhtdHYuZWRnZTEuZWRnZS5kb3QobXR2X2F4aXMpKSA8PSBNYXRoLmFicyhtdHYuZWRnZTIuZWRnZS5kb3QobXR2X2F4aXMpKSkge1xyXG4gICAgICAgICAgICByZWZlcmVuY2VFZGdlID0gbXR2LmVkZ2UxO1xyXG4gICAgICAgICAgICBpbmNpZGVudEVkZ2UgPSBtdHYuZWRnZTI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZWZlcmVuY2VFZGdlID0gbXR2LmVkZ2UyO1xyXG4gICAgICAgICAgICBpbmNpZGVudEVkZ2UgPSBtdHYuZWRnZTE7XHJcbiAgICAgICAgICAgIGZsaXBwZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtdHYuY3AgPSB0aGlzLmNhbGN1bGF0ZUNvbnRhY3RQb2ludChyZWZlcmVuY2VFZGdlLCBpbmNpZGVudEVkZ2UsIGZsaXBwZWQsIG10dik7XHJcbiAgICAgICAgbXR2LmluY2lkZW50T2JqZWN0ID0gaW5jaWRlbnRFZGdlID09PSBtdHYuZWRnZTEgPyB0aGlzLnBhcmVudEdhbWVPYmplY3QgOiBjMi5wYXJlbnRHYW1lT2JqZWN0O1xyXG4gICAgICAgIHJldHVybiBtdHY7XHJcbiAgICB9O1xyXG4gICAgQ29sbGlkZXIucHJvdG90eXBlLmZpeERpcmVjdGlvblNoYXBlQUIgPSBmdW5jdGlvbiAoY29sbGlkZXJBLCBjb2xsaWRlckIsIGF4aXMpIHtcclxuICAgICAgICB2YXIgY2FjYiA9IFZlY3RvcjJfMS5WZWN0b3IyLnN1YnRyYWN0VmVjdG9yKGNvbGxpZGVyQi5jb2xsaWRlckNlbnRlciwgY29sbGlkZXJBLmNvbGxpZGVyQ2VudGVyKTtcclxuICAgICAgICByZXR1cm4gYXhpcy5kb3QoY2FjYikgPCAwID8gYXhpcy5uZWdhdGUoKSA6IGF4aXM7XHJcbiAgICB9O1xyXG4gICAgLypcclxuICAgICAgRGVyaXZlZCBmcm9tIGh0dHBzOi8vZHluNGoub3JnLzIwMTEvMTEvY29udGFjdC1wb2ludHMtdXNpbmctY2xpcHBpbmcvI2NwZy1maW5kIENQIFR1dG9yaWFsLlxyXG4gICAgKi9cclxuICAgIENvbGxpZGVyLnByb3RvdHlwZS5jYWxjdWxhdGVDb250YWN0UG9pbnQgPSBmdW5jdGlvbiAocmVmLCBpbmMsIGZsaXBwZWQsIG10dikge1xyXG4gICAgICAgIHZhciBlZGdlVmVjdG9yID0gcmVmLmVkZ2U7XHJcbiAgICAgICAgZWRnZVZlY3Rvci5ub3JtYWxpemVWZWN0b3IoKTtcclxuICAgICAgICB2YXIgbzEgPSBlZGdlVmVjdG9yLmRvdChyZWYucG9pbnRPbmUpO1xyXG4gICAgICAgIHZhciBjbGlwcGVkUG9pbnRzID0gdGhpcy5jbGlwRWRnZXMoaW5jLnBvaW50T25lLCBpbmMucG9pbnRUd28sIGVkZ2VWZWN0b3IsIG8xKTtcclxuICAgICAgICBpZiAoY2xpcHBlZFBvaW50cy5sZW5ndGggPCAyKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgdmFyIG8yID0gZWRnZVZlY3Rvci5kb3QocmVmLnBvaW50VHdvKTtcclxuICAgICAgICB2YXIgY2xpcHBlZFBvaW50c1R3byA9IHRoaXMuY2xpcEVkZ2VzKGNsaXBwZWRQb2ludHNbMF0sIGNsaXBwZWRQb2ludHNbMV0sIGVkZ2VWZWN0b3IubmVnYXRlKCksIC1vMik7XHJcbiAgICAgICAgaWYgKGNsaXBwZWRQb2ludHNUd28ubGVuZ3RoIDwgMilcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHZhciByZWZlcmVuY2VOb3JtYWwgPSByZWYuZWRnZS5ub3JtYWxWZWN0b3JMKCk7XHJcbiAgICAgICAgbXR2LnJlZk5vcm1hbCA9IHJlZmVyZW5jZU5vcm1hbC5uZWdhdGUoKS5ub3JtYWxpemVWZWN0b3IoKTtcclxuICAgICAgICB2YXIgbWF4ID0gcmVmZXJlbmNlTm9ybWFsLmRvdChyZWYubWF4KTtcclxuICAgICAgICBpZiAocmVmZXJlbmNlTm9ybWFsLmRvdChjbGlwcGVkUG9pbnRzVHdvWzBdKSAtIG1heCA8IDApIHtcclxuICAgICAgICAgICAgZGVsZXRlIGNsaXBwZWRQb2ludHNUd29bMF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyZWZlcmVuY2VOb3JtYWwuZG90KGNsaXBwZWRQb2ludHNUd29bMV0pIC0gbWF4IDwgMCkge1xyXG4gICAgICAgICAgICBkZWxldGUgY2xpcHBlZFBvaW50c1R3b1sxXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNsaXBwZWRQb2ludHNUd287XHJcbiAgICB9O1xyXG4gICAgQ29sbGlkZXIucHJvdG90eXBlLmNsaXBFZGdlcyA9IGZ1bmN0aW9uICh2MSwgdjIsIG5vcm1hbCwgb2Zmc2V0KSB7XHJcbiAgICAgICAgdmFyIGNsaXBwZWRQb2ludHMgPSBbXTtcclxuICAgICAgICB2YXIgZGlzdDEgPSBub3JtYWwuZG90KHYxKSAtIG9mZnNldDtcclxuICAgICAgICB2YXIgZGlzdDIgPSBub3JtYWwuZG90KHYyKSAtIG9mZnNldDtcclxuICAgICAgICBpZiAoZGlzdDEgPj0gMCkge1xyXG4gICAgICAgICAgICBjbGlwcGVkUG9pbnRzLnB1c2godjEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZGlzdDIgPj0gMCkge1xyXG4gICAgICAgICAgICBjbGlwcGVkUG9pbnRzLnB1c2godjIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZGlzdDEgKiBkaXN0MiA8IDApIHtcclxuICAgICAgICAgICAgdmFyIGVkZ2VWZWN0b3IgPSB2Mi5zdWJ0cmFjdFZlY3Rvcih2MSk7XHJcbiAgICAgICAgICAgIHZhciBmYWN0b3IgPSBkaXN0MSAvIChkaXN0MSAtIGRpc3QyKTtcclxuICAgICAgICAgICAgY2xpcHBlZFBvaW50cy5wdXNoKGVkZ2VWZWN0b3IubXVsdFNjYWxhcihmYWN0b3IpLmFkZFZlY3Rvcih2MSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2xpcHBlZFBvaW50cztcclxuICAgIH07XHJcbiAgICBDb2xsaWRlci5wcm90b3R5cGUuY2FsY3VsYXRlQmVzdEVkZ2UgPSBmdW5jdGlvbiAobXR2X2F4aXMpIHtcclxuICAgICAgICB2YXIgbWF4ID0gLTEwMDAwMDAwMDtcclxuICAgICAgICB2YXIgZlZJbmRleCA9IDA7XHJcbiAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMudmVydGljZXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIHZhciBwcm9qID0gbXR2X2F4aXMuZG90KHRoaXMudmVydGljZXNbaW5kZXhdKTtcclxuICAgICAgICAgICAgaWYgKHByb2ogPiBtYXgpIHtcclxuICAgICAgICAgICAgICAgIG1heCA9IHByb2o7XHJcbiAgICAgICAgICAgICAgICBmVkluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGZWYyA9IHRoaXMudmVydGljZXNbZlZJbmRleF07XHJcbiAgICAgICAgdmFyIGZWbiA9IGZWSW5kZXggKyAxIDwgdGhpcy52ZXJ0aWNlcy5sZW5ndGggPyB0aGlzLnZlcnRpY2VzW2ZWSW5kZXggKyAxXSA6IHRoaXMudmVydGljZXNbMF07XHJcbiAgICAgICAgdmFyIGZWcCA9IGZWSW5kZXggLSAxID49IDAgPyB0aGlzLnZlcnRpY2VzW2ZWSW5kZXggLSAxXSA6IHRoaXMudmVydGljZXNbdGhpcy52ZXJ0aWNlcy5sZW5ndGggLSAxXTtcclxuICAgICAgICB2YXIgbGVmdGhhbmRWZWMgPSBmVmMuc3VidHJhY3RWZWN0b3IoZlZuKS5ub3JtYWxpemVWZWN0b3IoKTtcclxuICAgICAgICB2YXIgcmlnaHRoYW5kVmVjID0gZlZjLnN1YnRyYWN0VmVjdG9yKGZWcCkubm9ybWFsaXplVmVjdG9yKCk7XHJcbiAgICAgICAgaWYgKHJpZ2h0aGFuZFZlYy5kb3QobXR2X2F4aXMpIDw9IGxlZnRoYW5kVmVjLmRvdChtdHZfYXhpcykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xsaXNpb25IZWxwZXJfMS5FZGdlKGZWYywgZlZwLCBmVmMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xsaXNpb25IZWxwZXJfMS5FZGdlKGZWYywgZlZjLCBmVm4pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gQ29sbGlkZXI7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQ29sbGlkZXIgPSBDb2xsaWRlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5NVFYgPSBleHBvcnRzLkVkZ2UgPSBleHBvcnRzLlByb2plY3Rpb24gPSB2b2lkIDA7XHJcbnZhciBWZWN0b3IyXzEgPSByZXF1aXJlKFwiLi4vVXRpbGl0eS9WZWN0b3IyXCIpO1xyXG52YXIgUHJvamVjdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFByb2plY3Rpb24obWluLCBtYXgpIHtcclxuICAgICAgICB0aGlzLm1pbiA9IG1pbjtcclxuICAgICAgICB0aGlzLm1heCA9IG1heDtcclxuICAgIH1cclxuICAgIFByb2plY3Rpb24ucHJvdG90eXBlLmNoZWNrRm9yT3ZlcmxhcCA9IGZ1bmN0aW9uIChwcmoyKSB7XHJcbiAgICAgICAgcmV0dXJuICEodGhpcy5taW4gPiBwcmoyLm1heCB8fCBwcmoyLm1pbiA+IHRoaXMubWF4KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gUHJvamVjdGlvbjtcclxufSgpKTtcclxuZXhwb3J0cy5Qcm9qZWN0aW9uID0gUHJvamVjdGlvbjtcclxudmFyIEVkZ2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBFZGdlKG9yaWdpbiwgcG9pbnRPbmUsIHBvaW50VHdvKSB7XHJcbiAgICAgICAgdGhpcy5tYXggPSBvcmlnaW47XHJcbiAgICAgICAgdGhpcy5wb2ludE9uZSA9IHBvaW50T25lO1xyXG4gICAgICAgIHRoaXMucG9pbnRUd28gPSBwb2ludFR3bztcclxuICAgICAgICB0aGlzLmVkZ2UgPSB0aGlzLmNhbGNFZGdlKCk7XHJcbiAgICB9XHJcbiAgICBFZGdlLnByb3RvdHlwZS5jYWxjRWRnZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgeCA9IFZlY3RvcjJfMS5WZWN0b3IyLnN1YnRyYWN0VmVjdG9yKHRoaXMucG9pbnRUd28sIHRoaXMucG9pbnRPbmUpO1xyXG4gICAgICAgIHJldHVybiB4O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBFZGdlO1xyXG59KCkpO1xyXG5leHBvcnRzLkVkZ2UgPSBFZGdlO1xyXG52YXIgTVRWID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTVRWKGF4aXMsIHZhbHVlLCBpc0NvbGxpZGluZykge1xyXG4gICAgICAgIHRoaXMuYXhpcyA9IGF4aXM7XHJcbiAgICAgICAgdGhpcy5vdmVybGFwVmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmNvbGxpZGluZyA9IGlzQ29sbGlkaW5nO1xyXG4gICAgICAgIHRoaXMuY3AgPSBbXTtcclxuICAgICAgICB0aGlzLmVkZ2UxID0gbnVsbDtcclxuICAgICAgICB0aGlzLmVkZ2UyID0gbnVsbDtcclxuICAgIH1cclxuICAgIHJldHVybiBNVFY7XHJcbn0oKSk7XHJcbmV4cG9ydHMuTVRWID0gTVRWO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkdhbWVNYW5hZ2VyID0gdm9pZCAwO1xyXG52YXIgS2V5Ym9hcmRJbnB1dF8xID0gcmVxdWlyZShcIi4vS2V5Ym9hcmRJbnB1dFwiKTtcclxudmFyIFBJWEkgPSByZXF1aXJlKFwicGl4aS5qc1wiKTtcclxudmFyIEdhbWVNYW5hZ2VyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gR2FtZU1hbmFnZXIoKSB7XHJcbiAgICAgICAgdGhpcy5pc1BhdXNlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uVGlja1RpbWUgPSA1O1xyXG4gICAgICAgIHRoaXMucmVuZGVyRlBTID0gNjA7XHJcbiAgICAgICAgdGhpcy5hTG9vcERlbHRhID0gMDtcclxuICAgICAgICB0aGlzLnJMb29wRGVsdGEgPSAwO1xyXG4gICAgICAgIHRoaXMubG9hZEZsYWcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNjb3JlID0gMDtcclxuICAgICAgICB0aGlzLnNjb3JlVGV4dCA9IG5ldyBQSVhJLlRleHQoJ1Njb3JlOiAwJywgeyBmb250RmFtaWx5OiAnQXJpYWwnLCBmb250U2l6ZTogMjYsIGZpbGw6IDB4MkZBQUZGLCBhbGlnbjogJ2NlbnRlcicgfSk7XHJcbiAgICAgICAgdGhpcy5zY29yZVRleHQucG9zaXRpb24gPSBuZXcgUElYSS5Qb2ludCgxNDAwLCAxMDApO1xyXG4gICAgfVxyXG4gICAgR2FtZU1hbmFnZXIuZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCFHYW1lTWFuYWdlci5pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICBHYW1lTWFuYWdlci5pbnN0YW5jZSA9IG5ldyBHYW1lTWFuYWdlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gR2FtZU1hbmFnZXIuaW5zdGFuY2U7XHJcbiAgICB9O1xyXG4gICAgR2FtZU1hbmFnZXIucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoYXBwLCBnYW1lU3RhdGUsIGdhbWVMb29wKSB7XHJcbiAgICAgICAgdGhpcy5hcHAgPSBhcHA7XHJcbiAgICAgICAgdGhpcy5nYW1lTG9vcCA9IGdhbWVMb29wO1xyXG4gICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gZ2FtZVN0YXRlO1xyXG4gICAgfTtcclxuICAgIEdhbWVNYW5hZ2VyLnByb3RvdHlwZS5zZXRQbGF5ZXJJbnB1dCA9IGZ1bmN0aW9uIChzY2VuZU1hbmFnZXIsIG9iamVjdCkge1xyXG4gICAgICAgIHRoaXMucGxheWVySW5wdXQgPSBuZXcgS2V5Ym9hcmRJbnB1dF8xLktleWJvYXJkSW5wdXQob2JqZWN0KTtcclxuICAgICAgICB0aGlzLnBsYXllcklucHV0LnNldHVwUGxheWVySW5wdXQoKTtcclxuICAgIH07XHJcbiAgICAvKlxyXG4gICAgICAgIFNldHVwIG9mIHRoZSBhbmltYXRpb24gYW5kIHJlbmRlciBsb29wc1xyXG4gICAgKi9cclxuICAgIEdhbWVNYW5hZ2VyLnByb3RvdHlwZS5zZXRVcFNpbXVsYXRpb25Mb29wcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUFuaW1hdGlvbkxvb3AoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVNjZW5lUmVuZGVyZXIoKTtcclxuICAgIH07XHJcbiAgICBHYW1lTWFuYWdlci5wcm90b3R5cGUudXBkYXRlQW5pbWF0aW9uTG9vcCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGlmICh0aGlzLmFuaW1hdGlvbkxvb3AgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuYW5pbWF0aW9uTG9vcCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBsYXN0UmVuZGVyaW5nID0gRGF0ZS5ub3coKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkxvb3AgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBub3cgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICB2YXIgZGVsdGFUaW1lID0gbm93IC0gbGFzdFJlbmRlcmluZztcclxuICAgICAgICAgICAgbGFzdFJlbmRlcmluZyA9IG5vdztcclxuICAgICAgICAgICAgX3RoaXMuYUxvb3BEZWx0YSA9IGRlbHRhVGltZTtcclxuICAgICAgICAgICAgX3RoaXMuZ2FtZUxvb3AoZGVsdGFUaW1lICogMC4xKTtcclxuICAgICAgICB9LCB0aGlzLmFuaW1hdGlvblRpY2tUaW1lKTtcclxuICAgIH07XHJcbiAgICBHYW1lTWFuYWdlci5wcm90b3R5cGUudXBkYXRlU2NlbmVSZW5kZXJlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGlmICh0aGlzLnJlbmRlckxvb3AgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMucmVuZGVyTG9vcCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBsYXN0UmVuZGVyaW5nID0gRGF0ZS5ub3coKTtcclxuICAgICAgICB0aGlzLnJlbmRlckxvb3AgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBub3cgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICB2YXIgZGVsdGFUaW1lID0gbm93IC0gbGFzdFJlbmRlcmluZztcclxuICAgICAgICAgICAgbGFzdFJlbmRlcmluZyA9IG5vdztcclxuICAgICAgICAgICAgX3RoaXMuckxvb3BEZWx0YSA9IGRlbHRhVGltZTtcclxuICAgICAgICAgICAgX3RoaXMuYXBwLnJlbmRlcmVyLnJlbmRlcihfdGhpcy5hcHAuc3RhZ2UpO1xyXG4gICAgICAgIH0sICgxMDAwIC8gdGhpcy5yZW5kZXJGUFMpKTtcclxuICAgIH07XHJcbiAgICBHYW1lTWFuYWdlci5wcm90b3R5cGUucGF1c2VSZW5kZXJlcnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYW5pbWF0aW9uTG9vcCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5hbmltYXRpb25Mb29wKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucmVuZGVyTG9vcCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5yZW5kZXJMb29wKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgR2FtZU1hbmFnZXIucHJvdG90eXBlLnJlc3VtZVJlbmRlcmVycyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUFuaW1hdGlvbkxvb3AoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVNjZW5lUmVuZGVyZXIoKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gR2FtZU1hbmFnZXI7XHJcbn0oKSk7XHJcbmV4cG9ydHMuR2FtZU1hbmFnZXIgPSBHYW1lTWFuYWdlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5HYW1lT2JqZWN0ID0gdm9pZCAwO1xyXG52YXIgcGl4aV9qc18xID0gcmVxdWlyZShcInBpeGkuanNcIik7XHJcbnZhciBDb2xsaWRlcl8xID0gcmVxdWlyZShcIi4vQ29sbGlkZXJcIik7XHJcbnZhciBWZWN0b3IyXzEgPSByZXF1aXJlKFwiLi4vVXRpbGl0eS9WZWN0b3IyXCIpO1xyXG52YXIgUmlnaWRib2R5XzEgPSByZXF1aXJlKFwiLi9SaWdpZGJvZHlcIik7XHJcbnZhciBTY2VuZU1hbmFnZXJfMSA9IHJlcXVpcmUoXCIuL1NjZW5lTWFuYWdlclwiKTtcclxudmFyIEdhbWVPYmplY3QgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBHYW1lT2JqZWN0KHRyYW5zZm9ybSwgc3ByaXRlLCBjb2xsaWRlciwgcmlnaWRib2R5KSB7XHJcbiAgICAgICAgaWYgKHRyYW5zZm9ybSA9PT0gdW5kZWZpbmVkIHx8IHRyYW5zZm9ybSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybSA9IG5ldyBwaXhpX2pzXzEuVHJhbnNmb3JtKCk7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLnNldCgwLCAwKTtcclxuICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0uc2NhbGUuc2V0KDEsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzcHJpdGUgIT09IG51bGwgJiYgc3ByaXRlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zcHJpdGUgPSBzcHJpdGU7XHJcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlLnRyYW5zZm9ybSA9IHRoaXMudHJhbnNmb3JtO1xyXG4gICAgICAgICAgICBTY2VuZU1hbmFnZXJfMS5TY2VuZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5hZGRTcHJpdGVUb0NvbGxlY3Rpb24odGhpcy5zcHJpdGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmlnaWRib2R5ICE9PSBudWxsICYmIHJpZ2lkYm9keSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmlnaWRib2R5ID0gcmlnaWRib2R5O1xyXG4gICAgICAgICAgICBTY2VuZU1hbmFnZXJfMS5TY2VuZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5hZGRSaWdpZEJvZHlUb0NvbGxlY3Rpb24odGhpcy5yaWdpZGJvZHkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29sbGlkZXIgIT09IG51bGwgJiYgY29sbGlkZXIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbGxpZGVyID0gY29sbGlkZXI7XHJcbiAgICAgICAgICAgIFNjZW5lTWFuYWdlcl8xLlNjZW5lTWFuYWdlci5nZXRJbnN0YW5jZSgpLmFkZENvbGxpZGVyVG9Db2xsZWN0aW9uKHRoaXMuY29sbGlkZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRhZyA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5kcmF3VmVydGljZXNBcnJheSA9IFtdO1xyXG4gICAgICAgIFNjZW5lTWFuYWdlcl8xLlNjZW5lTWFuYWdlci5nZXRJbnN0YW5jZSgpLmFkZEdhbWVPYmplY3RUb0NvbGxlY3Rpb24odGhpcyk7XHJcbiAgICB9XHJcbiAgICBHYW1lT2JqZWN0LnByb3RvdHlwZS5VcGRhdGUgPSBmdW5jdGlvbiAoZGVsdGEpIHtcclxuICAgICAgICBpZiAodGhpcy5yaWdpZGJvZHkgIT09IG51bGwgJiYgdGhpcy5yaWdpZGJvZHkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB2YXIgb2xkUG9zaXRpb24gPSB0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbi55O1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbi54ICs9IHRoaXMucmlnaWRib2R5LnZlbG9jaXR5LnggKiBkZWx0YTtcclxuICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0ucG9zaXRpb24ueSArPSB0aGlzLnJpZ2lkYm9keS52ZWxvY2l0eS55ICogZGVsdGE7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLnJvdGF0aW9uICs9IHRoaXMucmlnaWRib2R5LmFuZ3VsYXJWZWxvY2l0eSAqIGRlbHRhO1xyXG4gICAgICAgICAgICBpZiAoKE1hdGguYWJzKG9sZFBvc2l0aW9uIC0gdGhpcy50cmFuc2Zvcm0ucG9zaXRpb24ueSkgPD0gMTAuMCkgJiYgdGhpcy5yaWdpZGJvZHkuZWZmZWN0ZWRCeUdyYXZpdHkgJiYgdGhpcy5yaWdpZGJvZHkuaXNHcmF2aXR5T24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmlnaWRib2R5LmlzR3Jhdml0eU9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJpZ2lkYm9keS5hZGRGb3JjZShuZXcgVmVjdG9yMl8xLlZlY3RvcjIoMCwgLTAuMDk4MSksIFJpZ2lkYm9keV8xLkZvcmNlTW9kZS5Db250aW5vdXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKChNYXRoLmFicyhvbGRQb3NpdGlvbiAtIHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLnkpID4gMTApICYmIHRoaXMucmlnaWRib2R5LmVmZmVjdGVkQnlHcmF2aXR5ICYmICF0aGlzLnJpZ2lkYm9keS5pc0dyYXZpdHlPbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yaWdpZGJvZHkuaXNHcmF2aXR5T24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yaWdpZGJvZHkuYWRkRm9yY2UobmV3IFZlY3RvcjJfMS5WZWN0b3IyKDAsIDAuMDk4MSksIFJpZ2lkYm9keV8xLkZvcmNlTW9kZS5Db250aW5vdXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnNwcml0ZSAhPT0gbnVsbCAmJiB0aGlzLnNwcml0ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlLnBvc2l0aW9uID0gdGhpcy50cmFuc2Zvcm0ucG9zaXRpb247XHJcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlLnJvdGF0aW9uID0gdGhpcy50cmFuc2Zvcm0ucm90YXRpb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmNvbGxpZGVyICE9PSBudWxsICYmIHRoaXMuY29sbGlkZXIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbGxpZGVyLmNvbGxpZGVyQ2VudGVyLnNldFhZKHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLngsIHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLnkpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbGxpZGVyLmNvbGxpZGVyUm90YXRpb24gPSB0aGlzLnRyYW5zZm9ybS5yb3RhdGlvbjtcclxuICAgICAgICAgICAgdGhpcy5jb2xsaWRlci51cGRhdGVWZXJ0ZXhQb3NpdGlvbnMoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgR2FtZU9iamVjdC5wcm90b3R5cGUucm90YXRlR2FtZU9iamVjdCA9IGZ1bmN0aW9uIChyb3RhdGlvbikge1xyXG4gICAgICAgIHRoaXMudHJhbnNmb3JtLnJvdGF0aW9uID0gcm90YXRpb24gKiBNYXRoLlBJIC8gMTgwO1xyXG4gICAgICAgIHRoaXMuc3ByaXRlLnJvdGF0aW9uICs9IHRoaXMudHJhbnNmb3JtLnJvdGF0aW9uO1xyXG4gICAgICAgIHRoaXMuY29sbGlkZXIuY29sbGlkZXJSb3RhdGlvbiA9IHRoaXMudHJhbnNmb3JtLnJvdGF0aW9uO1xyXG4gICAgfTtcclxuICAgIEdhbWVPYmplY3QucHJvdG90eXBlLmFkZFNwcml0ZSA9IGZ1bmN0aW9uIChyZXNvdXJjZSwgc3ByaXRlU2NhbGUpIHtcclxuICAgICAgICB0aGlzLnNwcml0ZSA9IG5ldyBwaXhpX2pzXzEuU3ByaXRlKHJlc291cmNlKTtcclxuICAgICAgICB2YXIgcGl2b3QgPSBuZXcgcGl4aV9qc18xLlBvaW50KHRoaXMuc3ByaXRlLndpZHRoIC8gMiwgdGhpcy5zcHJpdGUuaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgdGhpcy5zcHJpdGUucGl2b3Quc2V0KHBpdm90LngsIHBpdm90LnkpO1xyXG4gICAgICAgIChzcHJpdGVTY2FsZSAhPT0gbnVsbCAmJiBzcHJpdGVTY2FsZSAhPT0gdW5kZWZpbmVkKSA/IHRoaXMuc3ByaXRlLnNjYWxlLnNldChzcHJpdGVTY2FsZS54LCBzcHJpdGVTY2FsZS55KSA6IHRoaXMuc3ByaXRlLnNjYWxlLnNldCgxLCAxKTtcclxuICAgICAgICB0aGlzLnNwcml0ZS5wb3NpdGlvbiA9IHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uO1xyXG4gICAgICAgIHRoaXMuc3ByaXRlLnJvdGF0aW9uID0gdGhpcy50cmFuc2Zvcm0ucm90YXRpb247XHJcbiAgICAgICAgU2NlbmVNYW5hZ2VyXzEuU2NlbmVNYW5hZ2VyLmdldEluc3RhbmNlKCkuYWRkU3ByaXRlVG9Db2xsZWN0aW9uKHRoaXMuc3ByaXRlKTtcclxuICAgIH07XHJcbiAgICBHYW1lT2JqZWN0LnByb3RvdHlwZS5hZGRDb2xsaWRlciA9IGZ1bmN0aW9uIChmcm9tU3ByaXRlLCBjb2xsaWRlcldpZHRoLCBjb2xsaWRlckhlaWdodCkge1xyXG4gICAgICAgIGlmIChmcm9tU3ByaXRlID09PSB0cnVlICYmIHRoaXMuc3ByaXRlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29sbGlkZXIgPSBuZXcgQ29sbGlkZXJfMS5Db2xsaWRlcih0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5jb2xsaWRlci5zZXREaW1lbnNpb25zKHRoaXMuc3ByaXRlLndpZHRoLCB0aGlzLnNwcml0ZS5oZWlnaHQsIHRoaXMudHJhbnNmb3JtKTtcclxuICAgICAgICAgICAgdGhpcy5jb2xsaWRlci5pc09uID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZnJvbVNwcml0ZSA9PT0gZmFsc2UgJiYgY29sbGlkZXJXaWR0aCAhPT0gbnVsbCAmJiBjb2xsaWRlckhlaWdodCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbGxpZGVyID0gbmV3IENvbGxpZGVyXzEuQ29sbGlkZXIodGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMuY29sbGlkZXIuc2V0RGltZW5zaW9ucyhjb2xsaWRlcldpZHRoLCBjb2xsaWRlckhlaWdodCwgdGhpcy50cmFuc2Zvcm0pO1xyXG4gICAgICAgICAgICB0aGlzLmNvbGxpZGVyLmlzT24gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTb21ldGhpbmcgd2VudCB3cm9uZywgaGVuY2Ugbm8gY29sbGlkZXIgd2FzIGNyZWF0ZWQhXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBTY2VuZU1hbmFnZXJfMS5TY2VuZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5hZGRDb2xsaWRlclRvQ29sbGVjdGlvbih0aGlzLmNvbGxpZGVyKTtcclxuICAgIH07XHJcbiAgICBHYW1lT2JqZWN0LnByb3RvdHlwZS5hZGRSaWdpZGJvZHkgPSBmdW5jdGlvbiAocGFyZW50LCBtYXNzLCBpbmZpbml0ZU1hc3MsIGdyYXZpdHlPbiwgYm91bmN5bmVzcykge1xyXG4gICAgICAgIHRoaXMucmlnaWRib2R5ID0gbmV3IFJpZ2lkYm9keV8xLlJpZ2lkQm9keSgpO1xyXG4gICAgICAgIHRoaXMucmlnaWRib2R5LnBhcmVudCA9IHBhcmVudDtcclxuICAgICAgICB0aGlzLnJpZ2lkYm9keS52ZWxvY2l0eSA9IG5ldyBWZWN0b3IyXzEuVmVjdG9yMigwLCAwKTtcclxuICAgICAgICB0aGlzLnJpZ2lkYm9keS5hY2NlbGVyYXRpb24gPSBuZXcgVmVjdG9yMl8xLlZlY3RvcjIoMCwgMCk7XHJcbiAgICAgICAgdGhpcy5yaWdpZGJvZHkuZm9yY2UgPSBuZXcgVmVjdG9yMl8xLlZlY3RvcjIoMCwgMCk7XHJcbiAgICAgICAgdGhpcy5yaWdpZGJvZHkuYW5ndWxhclZlbG9jaXR5ID0gMDtcclxuICAgICAgICB0aGlzLnJpZ2lkYm9keS5ib3VuY3luZXNzID0gYm91bmN5bmVzcyAhPT0gbnVsbCAmJiBib3VuY3luZXNzICE9PSB2b2lkIDAgPyBib3VuY3luZXNzIDogMC4xO1xyXG4gICAgICAgIHRoaXMucmlnaWRib2R5Lm1hc3MgPSBtYXNzICE9PSBudWxsICYmIG1hc3MgIT09IHZvaWQgMCA/IG1hc3MgOiAxO1xyXG4gICAgICAgIHRoaXMucmlnaWRib2R5LmVmZmVjdGVkQnlHcmF2aXR5ID0gZ3Jhdml0eU9uICE9PSBudWxsICYmIGdyYXZpdHlPbiAhPT0gdm9pZCAwID8gZ3Jhdml0eU9uIDogZmFsc2U7XHJcbiAgICAgICAgdGhpcy5yaWdpZGJvZHkuaW5maW5pdGVNYXNzID0gaW5maW5pdGVNYXNzICE9PSBudWxsICYmIGluZmluaXRlTWFzcyAhPT0gdm9pZCAwID8gaW5maW5pdGVNYXNzIDogZmFsc2U7XHJcbiAgICAgICAgaWYgKHRoaXMuc3ByaXRlICE9PSBudWxsKVxyXG4gICAgICAgICAgICB0aGlzLnJpZ2lkYm9keS5jYWxjdWxhdGVJbnRlcmlhKCk7XHJcbiAgICAgICAgaWYgKGdyYXZpdHlPbikge1xyXG4gICAgICAgICAgICB0aGlzLnJpZ2lkYm9keS5hZGRGb3JjZShuZXcgVmVjdG9yMl8xLlZlY3RvcjIoMCwgMC4wOTgxKSwgUmlnaWRib2R5XzEuRm9yY2VNb2RlLkNvbnRpbm91cyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFNjZW5lTWFuYWdlcl8xLlNjZW5lTWFuYWdlci5nZXRJbnN0YW5jZSgpLmFkZFJpZ2lkQm9keVRvQ29sbGVjdGlvbih0aGlzLnJpZ2lkYm9keSk7XHJcbiAgICB9O1xyXG4gICAgR2FtZU9iamVjdC5EZXN0cm95ID0gZnVuY3Rpb24gKGdhbWVPYmplY3QpIHtcclxuICAgICAgICBTY2VuZU1hbmFnZXJfMS5TY2VuZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5yZW1vdmVPYmplY3QoZ2FtZU9iamVjdCk7XHJcbiAgICAgICAgLy9HYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpLmFwcC5zdGFnZS5yZW1vdmVDaGlsZCh0aGlzLnNwcml0ZSk7XHJcbiAgICAgICAgZ2FtZU9iamVjdC5jb2xsaWRlciA9IG51bGw7XHJcbiAgICAgICAgZ2FtZU9iamVjdC5zcHJpdGUgPSBudWxsO1xyXG4gICAgICAgIGdhbWVPYmplY3QucmlnaWRib2R5ID0gbnVsbDtcclxuICAgICAgICBnYW1lT2JqZWN0ID0gbnVsbDtcclxuICAgIH07XHJcbiAgICBHYW1lT2JqZWN0LnByb3RvdHlwZS5vbkNvbGxpc2lvbkVudGVyID0gZnVuY3Rpb24gKGNvbGxpZGVyKSB7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEdhbWVPYmplY3Q7XHJcbn0oKSk7XHJcbmV4cG9ydHMuR2FtZU9iamVjdCA9IEdhbWVPYmplY3Q7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuS2V5Ym9hcmRJbnB1dCA9IHZvaWQgMDtcclxudmFyIFNjZW5lTWFuYWdlcl8xID0gcmVxdWlyZShcIi4vU2NlbmVNYW5hZ2VyXCIpO1xyXG52YXIgR2FtZU1hbmFnZXJfMSA9IHJlcXVpcmUoXCIuL0dhbWVNYW5hZ2VyXCIpO1xyXG52YXIgRHJhd0Z1bmN0aW9uc18xID0gcmVxdWlyZShcIi4uL1V0aWxpdHkvRHJhd0Z1bmN0aW9uc1wiKTtcclxuO1xyXG52YXIgS2V5Ym9hcmRJbnB1dCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEtleWJvYXJkSW5wdXQoZ2FtZU9iamVjdCkge1xyXG4gICAgICAgIGlmIChnYW1lT2JqZWN0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5hdHRhY2hlZE9iamVjdCA9IGdhbWVPYmplY3Q7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgS2V5Ym9hcmRJbnB1dC5wcm90b3R5cGUubGlua1BsYXllck9iamVjdCA9IGZ1bmN0aW9uIChnYW1lT2JqZWN0KSB7XHJcbiAgICAgICAgdGhpcy5hdHRhY2hlZE9iamVjdCA9IGdhbWVPYmplY3Q7XHJcbiAgICB9O1xyXG4gICAgS2V5Ym9hcmRJbnB1dC5wcm90b3R5cGUua2V5Ym9hcmQgPSBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICB2YXIga2V5ID0ge1xyXG4gICAgICAgICAgICBrZXlDb2RlOiB2YWx1ZSxcclxuICAgICAgICAgICAgaXNQcmVzc2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgaXNSZWxlYXNlZDogdHJ1ZSxcclxuICAgICAgICAgICAgcHJlc3M6IGZ1bmN0aW9uICgpIHsgfSxcclxuICAgICAgICAgICAgcmVsZWFzZTogZnVuY3Rpb24gKCkgeyB9LFxyXG4gICAgICAgICAgICBkb3duSGFuZGxlcjogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBrZXkua2V5Q29kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXkuaXNSZWxlYXNlZCAmJiBrZXkucHJlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5LnByZXNzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleS5pc1ByZXNzZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXkuaXNSZWxlYXNlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdXBIYW5kbGVyOiBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09IGtleS5rZXlDb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleS5pc1ByZXNzZWQgJiYga2V5LnJlbGVhc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5LnJlbGVhc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5LmlzUHJlc3NlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXkuaXNSZWxlYXNlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB1bnN1YnNjcmliZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHByZXNzTGlzdGVyZW5lcik7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHJlbGVhc2VMaXN0ZW5lcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciByZWxlYXNlTGlzdGVuZXIgPSBrZXkudXBIYW5kbGVyLmJpbmQoa2V5KTtcclxuICAgICAgICB2YXIgcHJlc3NMaXN0ZXJlbmVyID0ga2V5LmRvd25IYW5kbGVyLmJpbmQoa2V5KTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgcHJlc3NMaXN0ZXJlbmVyLCBmYWxzZSk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCByZWxlYXNlTGlzdGVuZXIsIGZhbHNlKTtcclxuICAgICAgICByZXR1cm4ga2V5O1xyXG4gICAgfTtcclxuICAgIEtleWJvYXJkSW5wdXQucHJvdG90eXBlLnNldHVwUGxheWVySW5wdXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgdXAgPSB0aGlzLmtleWJvYXJkKCd3Jyk7XHJcbiAgICAgICAgdmFyIGRvd24gPSB0aGlzLmtleWJvYXJkKCdzJyk7XHJcbiAgICAgICAgdmFyIHJlc2V0ID0gdGhpcy5rZXlib2FyZCgncicpO1xyXG4gICAgICAgIHZhciBzcGFjZSA9IHRoaXMua2V5Ym9hcmQoJyAnKTtcclxuICAgICAgICB2YXIgaW5jcmVhc2VSZW5kZXJTcGVlZCA9IHRoaXMua2V5Ym9hcmQoJzEnKTtcclxuICAgICAgICB2YXIgZGVjcmVhc2VSZW5kZXJTcGVlZCA9IHRoaXMua2V5Ym9hcmQoJzInKTtcclxuICAgICAgICB2YXIgaW5jcmVhc2VBbmltYXRpb25TcGVlZCA9IHRoaXMua2V5Ym9hcmQoJzMnKTtcclxuICAgICAgICB2YXIgZGVjcmVhc2VBbmltYXRpb25TcGVlZCA9IHRoaXMua2V5Ym9hcmQoJzQnKTtcclxuICAgICAgICB2YXIgZGVjcmVhc2VTcGxpbmVUcmF2ZXJzYWxUaW1lID0gdGhpcy5rZXlib2FyZCgnNScpO1xyXG4gICAgICAgIHZhciBpbmNyZWFzZVNwbGluZVRyYXZlcnNhbFRpbWUgPSB0aGlzLmtleWJvYXJkKCc2Jyk7XHJcbiAgICAgICAgdmFyIHBhdXNlR2FtZSA9IHRoaXMua2V5Ym9hcmQoXCJwXCIpO1xyXG4gICAgICAgIHZhciBzaG93U3BsaW5lcyA9IHRoaXMua2V5Ym9hcmQoJ28nKTtcclxuICAgICAgICB2YXIgc2hvd1JpZ2lkQm9keUNQcyA9IHRoaXMua2V5Ym9hcmQoJ2knKTtcclxuICAgICAgICB2YXIgZGlzYWJsZUVhc2luZyA9IHRoaXMua2V5Ym9hcmQoJ3UnKTtcclxuICAgICAgICB1cC5wcmVzcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgX3RoaXMuYXR0YWNoZWRPYmplY3QucmlnaWRib2R5LmFuZ3VsYXJWZWxvY2l0eSAtPSAwLjAxO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdXAucmVsZWFzZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgX3RoaXMuYXR0YWNoZWRPYmplY3QucmlnaWRib2R5LmFuZ3VsYXJWZWxvY2l0eSA9IDA7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBkb3duLnByZXNzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBfdGhpcy5hdHRhY2hlZE9iamVjdC5yaWdpZGJvZHkuYW5ndWxhclZlbG9jaXR5ICs9IDAuMDE7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBkb3duLnJlbGVhc2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIF90aGlzLmF0dGFjaGVkT2JqZWN0LnJpZ2lkYm9keS5hbmd1bGFyVmVsb2NpdHkgPSAwO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgc3BhY2UucHJlc3MgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIF90aGlzLmF0dGFjaGVkT2JqZWN0LmNoYXJnaW5nID0gdHJ1ZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHNwYWNlLnJlbGVhc2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIF90aGlzLmF0dGFjaGVkT2JqZWN0LmNoYXJnaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIF90aGlzLmF0dGFjaGVkT2JqZWN0LnNob290ID0gdHJ1ZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzaG9vdCByZWxlYXNlZFwiKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGRlY3JlYXNlU3BsaW5lVHJhdmVyc2FsVGltZS5wcmVzcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgU2NlbmVNYW5hZ2VyXzEuU2NlbmVNYW5hZ2VyLmdldEluc3RhbmNlKCkuc3BsaW5lQ29sbGVjdGlvbi5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5wYXJlbnQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnBhcmVudC50cmF2ZXJzYWxUaW1lID0gZWxlbWVudC5wYXJlbnQudHJhdmVyc2FsVGltZSAtIDEwMCA+IDAgPyBlbGVtZW50LnBhcmVudC50cmF2ZXJzYWxUaW1lIC0gMTAwIDogMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucGFyZW50LlVwZGF0ZVRyYXZlcnNhbFNlZ21lbnQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpbmNyZWFzZVNwbGluZVRyYXZlcnNhbFRpbWUucHJlc3MgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIFNjZW5lTWFuYWdlcl8xLlNjZW5lTWFuYWdlci5nZXRJbnN0YW5jZSgpLnNwbGluZUNvbGxlY3Rpb24uZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQucGFyZW50ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5wYXJlbnQudHJhdmVyc2FsVGltZSArPSAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5wYXJlbnQuVXBkYXRlVHJhdmVyc2FsU2VnbWVudCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHNob3dTcGxpbmVzLnByZXNzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoIVNjZW5lTWFuYWdlcl8xLlNjZW5lTWFuYWdlci5nZXRJbnN0YW5jZSgpLnNwbGluZXNEcmF3bikge1xyXG4gICAgICAgICAgICAgICAgU2NlbmVNYW5hZ2VyXzEuU2NlbmVNYW5hZ2VyLmdldEluc3RhbmNlKCkuc3BsaW5lQ29sbGVjdGlvbi5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5EcmF3QWxsU3BsaW5lUG9pbnRzKEdhbWVNYW5hZ2VyXzEuR2FtZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5hcHAsIERyYXdGdW5jdGlvbnNfMS5EcmF3RnVuY3Rpb24uUmFuZG9tSGV4TnVtYmVyKCksIFNjZW5lTWFuYWdlcl8xLlNjZW5lTWFuYWdlci5nZXRJbnN0YW5jZSgpLnNwbGluZUdyYXBoaWNzKTtcclxuICAgICAgICAgICAgICAgICAgICBEcmF3RnVuY3Rpb25zXzEuRHJhd0Z1bmN0aW9uLmRyYXdTcGxpbmUoR2FtZU1hbmFnZXJfMS5HYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpLmFwcCwgRHJhd0Z1bmN0aW9uc18xLkRyYXdGdW5jdGlvbi5SYW5kb21IZXhOdW1iZXIoKSwgZWxlbWVudCwgU2NlbmVNYW5hZ2VyXzEuU2NlbmVNYW5hZ2VyLmdldEluc3RhbmNlKCkuc3BsaW5lR3JhcGhpY3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIFNjZW5lTWFuYWdlcl8xLlNjZW5lTWFuYWdlci5nZXRJbnN0YW5jZSgpLnNwbGluZXNEcmF3biA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIFNjZW5lTWFuYWdlcl8xLlNjZW5lTWFuYWdlci5nZXRJbnN0YW5jZSgpLnJlbW92ZUFsbFNwbGluZUdyYXBoaWNzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGRpc2FibGVFYXNpbmcucHJlc3MgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIFNjZW5lTWFuYWdlcl8xLlNjZW5lTWFuYWdlci5nZXRJbnN0YW5jZSgpLmVuYWJsZUVhc2luZyA9ICFTY2VuZU1hbmFnZXJfMS5TY2VuZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5lbmFibGVFYXNpbmc7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRUFTSU5HOiBcIiArIFNjZW5lTWFuYWdlcl8xLlNjZW5lTWFuYWdlci5nZXRJbnN0YW5jZSgpLmVuYWJsZUVhc2luZyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzaG93UmlnaWRCb2R5Q1BzLnByZXNzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoIVNjZW5lTWFuYWdlcl8xLlNjZW5lTWFuYWdlci5nZXRJbnN0YW5jZSgpLmRyYXdSQlByb3BlcnRpZXMpIHtcclxuICAgICAgICAgICAgICAgIFNjZW5lTWFuYWdlcl8xLlNjZW5lTWFuYWdlci5nZXRJbnN0YW5jZSgpLmRyYXdSQlByb3BlcnRpZXMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy90aGlzLnNjZW5lTWFuYWdlci5yaWdpZEJvZHlDb2xsZWN0aW9uLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICBlbGVtZW50LlNob3dGb3JjZVZlY3RvcnMoKTtcclxuICAgICAgICAgICAgICAgIC8vfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIFNjZW5lTWFuYWdlcl8xLlNjZW5lTWFuYWdlci5nZXRJbnN0YW5jZSgpLnJlbW92ZUFsbFJCR3JhcGhpY3MoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVzZXQucHJlc3MgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIFNjZW5lTWFuYWdlcl8xLlNjZW5lTWFuYWdlci5nZXRJbnN0YW5jZSgpLnJlc2V0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJyaWdodCBwcmVzc2VkXCIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVzZXQucmVsZWFzZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJyaWdodCByZWxlYXNlZFwiKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGluY3JlYXNlUmVuZGVyU3BlZWQucHJlc3MgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIEdhbWVNYW5hZ2VyXzEuR2FtZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5yZW5kZXJGUFMgKz0gNTtcclxuICAgICAgICAgICAgR2FtZU1hbmFnZXJfMS5HYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpLnVwZGF0ZVNjZW5lUmVuZGVyZXIoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZW5kZXIgSW50ZXJ2YWw6IFwiICsgR2FtZU1hbmFnZXJfMS5HYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpLnJlbmRlckZQUyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBkZWNyZWFzZVJlbmRlclNwZWVkLnJlbGVhc2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIEdhbWVNYW5hZ2VyXzEuR2FtZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5yZW5kZXJGUFMgLT0gNTtcclxuICAgICAgICAgICAgR2FtZU1hbmFnZXJfMS5HYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpLnVwZGF0ZVNjZW5lUmVuZGVyZXIoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZW5kZXIgSW50ZXJ2YWw6IFwiICsgR2FtZU1hbmFnZXJfMS5HYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpLnJlbmRlckZQUyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpbmNyZWFzZUFuaW1hdGlvblNwZWVkLnByZXNzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBHYW1lTWFuYWdlcl8xLkdhbWVNYW5hZ2VyLmdldEluc3RhbmNlKCkuYW5pbWF0aW9uVGlja1RpbWUgKz0gMTtcclxuICAgICAgICAgICAgR2FtZU1hbmFnZXJfMS5HYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpLnVwZGF0ZUFuaW1hdGlvbkxvb3AoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJBbmltYXRpb24gSW50ZXJ2YWw6IFwiICsgR2FtZU1hbmFnZXJfMS5HYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpLmFuaW1hdGlvblRpY2tUaW1lKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGRlY3JlYXNlQW5pbWF0aW9uU3BlZWQucmVsZWFzZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgR2FtZU1hbmFnZXJfMS5HYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpLmFuaW1hdGlvblRpY2tUaW1lIC09IDE7XHJcbiAgICAgICAgICAgIEdhbWVNYW5hZ2VyXzEuR2FtZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS51cGRhdGVBbmltYXRpb25Mb29wKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQW5pbWF0aW9uIEludGVydmFsOiBcIiArIEdhbWVNYW5hZ2VyXzEuR2FtZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5hbmltYXRpb25UaWNrVGltZSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBwYXVzZUdhbWUucHJlc3MgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICghR2FtZU1hbmFnZXJfMS5HYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpLmlzUGF1c2VkKSB7XHJcbiAgICAgICAgICAgICAgICBHYW1lTWFuYWdlcl8xLkdhbWVNYW5hZ2VyLmdldEluc3RhbmNlKCkucGF1c2VSZW5kZXJlcnMoKTtcclxuICAgICAgICAgICAgICAgIEdhbWVNYW5hZ2VyXzEuR2FtZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5pc1BhdXNlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoR2FtZU1hbmFnZXJfMS5HYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpLmlzUGF1c2VkKSB7XHJcbiAgICAgICAgICAgICAgICBHYW1lTWFuYWdlcl8xLkdhbWVNYW5hZ2VyLmdldEluc3RhbmNlKCkucmVzdW1lUmVuZGVyZXJzKCk7XHJcbiAgICAgICAgICAgICAgICBHYW1lTWFuYWdlcl8xLkdhbWVNYW5hZ2VyLmdldEluc3RhbmNlKCkuaXNQYXVzZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEtleWJvYXJkSW5wdXQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuS2V5Ym9hcmRJbnB1dCA9IEtleWJvYXJkSW5wdXQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUmlnaWRCb2R5ID0gZXhwb3J0cy5Gb3JjZU1vZGUgPSB2b2lkIDA7XHJcbnZhciBWZWN0b3IyXzEgPSByZXF1aXJlKFwiLi4vVXRpbGl0eS9WZWN0b3IyXCIpO1xyXG52YXIgRHJhd0Z1bmN0aW9uc18xID0gcmVxdWlyZShcIi4uL1V0aWxpdHkvRHJhd0Z1bmN0aW9uc1wiKTtcclxudmFyIFNjZW5lTWFuYWdlcl8xID0gcmVxdWlyZShcIi4vU2NlbmVNYW5hZ2VyXCIpO1xyXG52YXIgR2FtZU1hbmFnZXJfMSA9IHJlcXVpcmUoXCIuL0dhbWVNYW5hZ2VyXCIpO1xyXG52YXIgRm9yY2VNb2RlO1xyXG4oZnVuY3Rpb24gKEZvcmNlTW9kZSkge1xyXG4gICAgRm9yY2VNb2RlW0ZvcmNlTW9kZVtcIkltcHVsc2VcIl0gPSAxXSA9IFwiSW1wdWxzZVwiO1xyXG4gICAgRm9yY2VNb2RlW0ZvcmNlTW9kZVtcIkNvbnRpbm91c1wiXSA9IDJdID0gXCJDb250aW5vdXNcIjtcclxuICAgIEZvcmNlTW9kZVtGb3JjZU1vZGVbXCJJbXB1bHNlX21hc3NsZXNzXCJdID0gM10gPSBcIkltcHVsc2VfbWFzc2xlc3NcIjtcclxufSkoRm9yY2VNb2RlID0gZXhwb3J0cy5Gb3JjZU1vZGUgfHwgKGV4cG9ydHMuRm9yY2VNb2RlID0ge30pKTtcclxudmFyIFJpZ2lkQm9keSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFJpZ2lkQm9keShwYXJlbnQsIGdyYXZpdHlPbiwgbWFzcywgYm91bmN5bmVzcywgaW5maW5pdGVNYXNzKSB7XHJcbiAgICAgICAgdGhpcy50b3JxdWUgPSAwO1xyXG4gICAgICAgIHRoaXMuYW5ndWxhclZlbG9jaXR5ID0gMC4wO1xyXG4gICAgICAgIHRoaXMuYW5ndWxhckFjY2VsZXJhdGlvbiA9IDA7XHJcbiAgICAgICAgdGhpcy5mb3JjZSA9IG5ldyBWZWN0b3IyXzEuVmVjdG9yMigwLCAwKTtcclxuICAgICAgICB0aGlzLnZlbG9jaXR5ID0gbmV3IFZlY3RvcjJfMS5WZWN0b3IyKDAsIDApO1xyXG4gICAgICAgIHRoaXMuYWNjZWxlcmF0aW9uID0gbmV3IFZlY3RvcjJfMS5WZWN0b3IyKDAsIDApO1xyXG4gICAgICAgIHRoaXMuYm91bmN5bmVzcyA9IGJvdW5jeW5lc3MgIT09IG51bGwgJiYgYm91bmN5bmVzcyAhPT0gdm9pZCAwID8gYm91bmN5bmVzcyA6IDAuMTtcclxuICAgICAgICB0aGlzLm1hc3MgPSBtYXNzICE9PSBudWxsICYmIG1hc3MgIT09IHZvaWQgMCA/IG1hc3MgOiAxO1xyXG4gICAgICAgIHRoaXMuZWZmZWN0ZWRCeUdyYXZpdHkgPSBncmF2aXR5T24gIT09IG51bGwgJiYgZ3Jhdml0eU9uICE9PSB2b2lkIDAgPyBncmF2aXR5T24gOiBmYWxzZTtcclxuICAgICAgICB0aGlzLmluZmluaXRlTWFzcyA9IGluZmluaXRlTWFzcyAhPT0gbnVsbCAmJiBpbmZpbml0ZU1hc3MgIT09IHZvaWQgMCA/IGluZmluaXRlTWFzcyA6IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNHcmF2aXR5T24gPSBncmF2aXR5T24gIT09IG51bGwgJiYgZ3Jhdml0eU9uICE9PSB2b2lkIDAgPyBncmF2aXR5T24gOiBmYWxzZTtcclxuICAgICAgICB0aGlzLmxpbmVhclZpc3VhbGl6YXRpb24gPSBuZXcgUElYSS5HcmFwaGljcygpO1xyXG4gICAgICAgIHRoaXMuYW5ndWxhclZpc3VhbGl6YXRpb24gPSBuZXcgUElYSS5HcmFwaGljcygpO1xyXG4gICAgICAgIGlmIChwYXJlbnQgIT09IG51bGwgJiYgcGFyZW50ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgICAgICAgICAgIGlmIChwYXJlbnQuc3ByaXRlICE9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVJbnRlcmlhKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gV29ya3Mgb25seSBmb3IgYm94ZXMgYXRtLiEhIFNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9MaXN0X29mX21vbWVudHNfb2ZfaW5lcnRpYSBmb3IgbW9yZSBzaGFwZXNcclxuICAgIFJpZ2lkQm9keS5wcm90b3R5cGUuY2FsY3VsYXRlSW50ZXJpYSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5wYXJlbnQuc3ByaXRlID09PSBudWxsIHx8IHRoaXMucGFyZW50LnNwcml0ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRVJST1I6IFlvdXIgcmlnaWQgYm9keSBoYXMgbm8gZGltZW5zaW9uIVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9tZW50T2ZJbnRlcmlhID0gdGhpcy5tYXNzICogKE1hdGgucG93KHRoaXMucGFyZW50LnNwcml0ZS53aWR0aCwgMikgKyBNYXRoLnBvdyh0aGlzLnBhcmVudC5zcHJpdGUuaGVpZ2h0LCAyKSkgLyAxMjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgUmlnaWRCb2R5LnByb3RvdHlwZS5TaG93Rm9yY2VWZWN0b3JzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pbmZpbml0ZU1hc3MpIHtcclxuICAgICAgICAgICAgdmFyIHBvcyA9IG5ldyBWZWN0b3IyXzEuVmVjdG9yMih0aGlzLnBhcmVudC50cmFuc2Zvcm0ucG9zaXRpb24ueCwgdGhpcy5wYXJlbnQudHJhbnNmb3JtLnBvc2l0aW9uLnkpO1xyXG4gICAgICAgICAgICBEcmF3RnVuY3Rpb25zXzEuRHJhd0Z1bmN0aW9uLkRyYXdBcnJvdyhHYW1lTWFuYWdlcl8xLkdhbWVNYW5hZ2VyLmdldEluc3RhbmNlKCkuYXBwLCAweEFBRkYwMCwgcG9zLCB0aGlzLnZlbG9jaXR5LCBTY2VuZU1hbmFnZXJfMS5TY2VuZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5yYkdyYXBoaWNzLCB0aGlzLmxpbmVhclZpc3VhbGl6YXRpb24pO1xyXG4gICAgICAgICAgICBTY2VuZU1hbmFnZXJfMS5TY2VuZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5yYkdyYXBoaWNzLnB1c2godGhpcy5saW5lYXJWaXN1YWxpemF0aW9uKTtcclxuICAgICAgICAgICAgU2NlbmVNYW5hZ2VyXzEuU2NlbmVNYW5hZ2VyLmdldEluc3RhbmNlKCkucmJHcmFwaGljcy5wdXNoKHRoaXMuYW5ndWxhclZpc3VhbGl6YXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBSaWdpZEJvZHkucHJvdG90eXBlLmFkZEZvcmNlID0gZnVuY3Rpb24gKGZvcmNlLCBmb3JjZU1vZGUpIHtcclxuICAgICAgICBzd2l0Y2ggKGZvcmNlTW9kZSkge1xyXG4gICAgICAgICAgICBjYXNlIEZvcmNlTW9kZS5JbXB1bHNlOlxyXG4gICAgICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS54ICs9IGZvcmNlLnggLyB0aGlzLm1hc3M7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnkgKz0gZm9yY2UueSAvIHRoaXMubWFzcztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEZvcmNlTW9kZS5Db250aW5vdXM6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZvcmNlLnggKz0gZm9yY2UueDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZm9yY2UueSArPSBmb3JjZS55O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY2NlbGVyYXRpb24gPSBuZXcgVmVjdG9yMl8xLlZlY3RvcjIodGhpcy5mb3JjZS54IC8gdGhpcy5tYXNzLCB0aGlzLmZvcmNlLnkgLyB0aGlzLm1hc3MpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRm9yY2VNb2RlLkltcHVsc2VfbWFzc2xlc3M6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnggKz0gZm9yY2UueDtcclxuICAgICAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueSArPSBmb3JjZS55O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFJpZ2lkQm9keS5wcm90b3R5cGUuYWRkVG9ycXVlID0gZnVuY3Rpb24gKGZvcmNlLCBmb3JjZU1vZGUpIHtcclxuICAgICAgICBzd2l0Y2ggKGZvcmNlTW9kZSkge1xyXG4gICAgICAgICAgICBjYXNlIEZvcmNlTW9kZS5JbXB1bHNlOlxyXG4gICAgICAgICAgICAgICAgdGhpcy50b3JxdWUgPSBmb3JjZS54IC8gdGhpcy5tb21lbnRPZkludGVyaWE7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFJpZ2lkQm9keS5wcm90b3R5cGUuVXBkYXRlUmlnaWRCb2R5ID0gZnVuY3Rpb24gKGRlbHRhKSB7XHJcbiAgICAgICAgdGhpcy52ZWxvY2l0eS54ICs9IHRoaXMuYWNjZWxlcmF0aW9uLnggKiBkZWx0YTtcclxuICAgICAgICB0aGlzLnZlbG9jaXR5LnkgKz0gdGhpcy5hY2NlbGVyYXRpb24ueSAqIGRlbHRhO1xyXG4gICAgICAgIHRoaXMuYW5ndWxhclZlbG9jaXR5ICs9IHRoaXMudG9ycXVlICogZGVsdGE7XHJcbiAgICB9O1xyXG4gICAgUmlnaWRCb2R5LnByb3RvdHlwZS5nZXRCb2R5V2l0aEluZmluaXRlTWFzcyA9IGZ1bmN0aW9uIChib2R5QSwgYm9keUIpIHtcclxuICAgICAgICByZXR1cm4gYm9keUIuaW5maW5pdGVNYXNzID8gYm9keUIgOiBib2R5QS5pbmZpbml0ZU1hc3MgPyBib2R5QSA6IG51bGw7XHJcbiAgICB9O1xyXG4gICAgLyogQ29sbGlzaW9uIHJlc29sdmluZy4gVGhpcyBmdW5jdGlvbiBkZXRlcm1pbmVzIHdoZXRlciB0aGVyZSBhcmUgY29sbGlzaW9ucyBiZXR3ZWVuIG1vdmVhYmxlIG9yIHVubW92ZWFibGUgb2JqZWN0cy5cclxuICAgIEZ1cnRoZXIgdGhlIHBvc3QgY29sbGlzaW9uIHZlbG9jaXRpZXMgYW5kIGFuZ3VsYXIgbW9tZW50dW0gYXJlIGNhbGN1bGF0ZWQgaGVyZSBhbmQgYXBwbGllZCBhY2NvcmRpbmdseSB1c2luZyBhbiBpbXB1bHNlIHBhcmFtZXRlci5cclxuICAgIEZvcm11bGFzIHVzZWQgZnJvbSA6IGh0dHBzOi8vd3d3Lm15cGh5c2ljc2xhYi5jb20vZXhwbGFpbi9waHlzaWNzLWVuZ2luZS1lbi5odG1sXHJcbiAgICAgKi9cclxuICAgIFJpZ2lkQm9keS5wcm90b3R5cGUucmVzb2x2ZVJpZ2lkYm9keUNvbGxpc2lvbiA9IGZ1bmN0aW9uIChtdHYsIGJvZHlCKSB7XHJcbiAgICAgICAgLy8gVE9ETyBDb2xsaXNpb24gUkVTT0xWRSBXSEVOIE9OTFkgT05FIFJCIEVYSVNUU1xyXG4gICAgICAgIGlmICh0aGlzLmluZmluaXRlTWFzcyAmJiBib2R5Qi5pbmZpbml0ZU1hc3MpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaW1wdWxzZVBhcmFtZXRlciA9IDA7XHJcbiAgICAgICAgdmFyIGNvbnRhY3RQb2ludEluZGV4ID0gbXR2LmNwWzBdICE9PSB1bmRlZmluZWQgPyAwIDogbXR2LmNwWzFdICE9PSB1bmRlZmluZWQgPyAxIDogdW5kZWZpbmVkO1xyXG4gICAgICAgIGlmIChjb250YWN0UG9pbnRJbmRleCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IE5vIGNvbnRhY3QgcG9pbnQgZm9yIHRoZSBjb2xsaXNpb24gd2FzIGZvdW5kLlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaW5tb3ZlYWJsZSA9IHRoaXMuZ2V0Qm9keVdpdGhJbmZpbml0ZU1hc3ModGhpcywgYm9keUIpO1xyXG4gICAgICAgIGlmIChpbm1vdmVhYmxlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHZhciBtb3ZlYWJsZSA9IHRoaXMgIT09IGlubW92ZWFibGUgPyB0aGlzIDogYm9keUI7XHJcbiAgICAgICAgICAgIHRoaXMucmVzb2x2ZVJpZ2lkYm9keU92ZXJsYXBVbm1vdmVhYmxlKG10diwgbW92ZWFibGUpO1xyXG4gICAgICAgICAgICBpbXB1bHNlUGFyYW1ldGVyID0gdGhpcy5yZXNvbHZlUmlnaWRib2R5Q29sbGlzaW9uVW5tb3ZlYWJsZShtdHYsIG1vdmVhYmxlLCBjb250YWN0UG9pbnRJbmRleCk7XHJcbiAgICAgICAgICAgIHZhciBwb3N0VmVsb2NpdHkgPSBtb3ZlYWJsZS52ZWxvY2l0eS5hZGRWZWN0b3IoKG10di5yZWZOb3JtYWwubXVsdFNjYWxhcihpbXB1bHNlUGFyYW1ldGVyKSkuZGl2U2NhbGFyKG1vdmVhYmxlLm1hc3MpKTtcclxuICAgICAgICAgICAgbW92ZWFibGUudmVsb2NpdHkgPSBwb3N0VmVsb2NpdHk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGlubW92ZWFibGUgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXNvbHZlUmlnaWRib2R5T3ZlcmxhcE1vdmVhYmxlKG10diwgYm9keUIucGFyZW50KTtcclxuICAgICAgICAgICAgaW1wdWxzZVBhcmFtZXRlciA9IHRoaXMucmVzb2x2ZVJpZ2lkYm9keUNvbGxpc2lvbk1vdmVhYmxlKG10diwgYm9keUIsIGNvbnRhY3RQb2ludEluZGV4KTtcclxuICAgICAgICAgICAgdmFyIHNlY29uZCA9IGJvZHlCLnJlc29sdmVSaWdpZGJvZHlDb2xsaXNpb25Nb3ZlYWJsZShtdHYsIHRoaXMsIGNvbnRhY3RQb2ludEluZGV4KTtcclxuICAgICAgICAgICAgdmFyIHBvc3RWZWxvY2l0eUEgPSB0aGlzLnZlbG9jaXR5LmFkZFZlY3RvcigobXR2LnJlZk5vcm1hbC5tdWx0U2NhbGFyKGltcHVsc2VQYXJhbWV0ZXIpKS5kaXZTY2FsYXIodGhpcy5tYXNzKSk7XHJcbiAgICAgICAgICAgIHZhciBwb3N0VmVsb2NpdHlCID0gYm9keUIudmVsb2NpdHkuYWRkVmVjdG9yKChtdHYucmVmTm9ybWFsLm11bHRTY2FsYXIoc2Vjb25kKSkuZGl2U2NhbGFyKGJvZHlCLm1hc3MpKTtcclxuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eSA9IHBvc3RWZWxvY2l0eUE7XHJcbiAgICAgICAgICAgIGJvZHlCLnZlbG9jaXR5ID0gcG9zdFZlbG9jaXR5QjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgUmlnaWRCb2R5LnByb3RvdHlwZS5yZXNvbHZlUmlnaWRib2R5Q29sbGlzaW9uTW92ZWFibGUgPSBmdW5jdGlvbiAobXR2LCBib2R5QiwgaW5kZXgpIHtcclxuICAgICAgICB2YXIgaW1wdWxzZVBhcmFtZXRlcjtcclxuICAgICAgICB2YXIgZGlzdGFuY2VBUCA9IFJpZ2lkQm9keS5nZXREaXN0YW5jZVBvaW50VG9Qb2ludCh0aGlzLnBhcmVudC5jb2xsaWRlci5jb2xsaWRlckNlbnRlciwgbXR2LmNwW2luZGV4XSk7XHJcbiAgICAgICAgdmFyIGRpc3RhbmNlQlAgPSBSaWdpZEJvZHkuZ2V0RGlzdGFuY2VQb2ludFRvUG9pbnQoYm9keUIucGFyZW50LmNvbGxpZGVyLmNvbGxpZGVyQ2VudGVyLCBtdHYuY3BbaW5kZXhdKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIk1UViBDUDogXCIgKyBtdHYuY3BbaW5kZXhdLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIHZhciB2YXAxID0gdGhpcy52ZWxvY2l0eS5hZGRWZWN0b3IoVmVjdG9yMl8xLlZlY3RvcjIuY3Jvc3NWZWN0b3IoZGlzdGFuY2VBUCwgdGhpcy5hbmd1bGFyVmVsb2NpdHkpKTtcclxuICAgICAgICB2YXIgdmJwMiA9IGJvZHlCLnZlbG9jaXR5LmFkZFZlY3RvcihWZWN0b3IyXzEuVmVjdG9yMi5jcm9zc1ZlY3RvcihkaXN0YW5jZUJQLCBib2R5Qi5hbmd1bGFyVmVsb2NpdHkpKTtcclxuICAgICAgICB2YXIgdmFiMSA9IFZlY3RvcjJfMS5WZWN0b3IyLnN1YnRyYWN0VmVjdG9yKHZhcDEsIHZicDIpO1xyXG4gICAgICAgIGltcHVsc2VQYXJhbWV0ZXIgPSAtKDEgKyB0aGlzLmJvdW5jeW5lc3MpICogdmFiMS5kb3QobXR2LnJlZk5vcm1hbCkgLyAoMSAvIHRoaXMubWFzcyArIDEgLyBib2R5Qi5tYXNzICsgKE1hdGgucG93KFZlY3RvcjJfMS5WZWN0b3IyLmNyb3NzKGRpc3RhbmNlQVAsIG10di5yZWZOb3JtYWwpLCAyKSAvIHRoaXMubW9tZW50T2ZJbnRlcmlhKSArXHJcbiAgICAgICAgICAgIE1hdGgucG93KFZlY3RvcjJfMS5WZWN0b3IyLmNyb3NzKGRpc3RhbmNlQlAsIG10di5yZWZOb3JtYWwpLCAyKSAvIGJvZHlCLm1vbWVudE9mSW50ZXJpYSk7XHJcbiAgICAgICAgdGhpcy5hbmd1bGFyVmVsb2NpdHkgKz0gKFZlY3RvcjJfMS5WZWN0b3IyLmNyb3NzKGRpc3RhbmNlQVAsIG10di5yZWZOb3JtYWwubXVsdFNjYWxhcihpbXB1bHNlUGFyYW1ldGVyKSkgLyB0aGlzLm1vbWVudE9mSW50ZXJpYSk7XHJcbiAgICAgICAgYm9keUIuYW5ndWxhclZlbG9jaXR5IC09IChWZWN0b3IyXzEuVmVjdG9yMi5jcm9zcyhkaXN0YW5jZUJQLCBtdHYucmVmTm9ybWFsLm11bHRTY2FsYXIoLWltcHVsc2VQYXJhbWV0ZXIpKSAvIGJvZHlCLm1vbWVudE9mSW50ZXJpYSk7XHJcbiAgICAgICAgcmV0dXJuIGltcHVsc2VQYXJhbWV0ZXI7XHJcbiAgICB9O1xyXG4gICAgUmlnaWRCb2R5LnByb3RvdHlwZS5yZXNvbHZlUmlnaWRib2R5Q29sbGlzaW9uVW5tb3ZlYWJsZSA9IGZ1bmN0aW9uIChtdHYsIG1vdmVhYmxlLCBpbmRleCkge1xyXG4gICAgICAgIHZhciBpbXB1bHNlVTtcclxuICAgICAgICB2YXIgZGlzdGFuY2VBUCA9IFJpZ2lkQm9keS5nZXREaXN0YW5jZVBvaW50VG9Qb2ludChtb3ZlYWJsZS5wYXJlbnQuY29sbGlkZXIuY29sbGlkZXJDZW50ZXIsIG10di5jcFtpbmRleF0pO1xyXG4gICAgICAgIHZhciB2QVAgPSBtb3ZlYWJsZS52ZWxvY2l0eS5hZGRWZWN0b3IoVmVjdG9yMl8xLlZlY3RvcjIuY3Jvc3NWZWN0b3IoZGlzdGFuY2VBUCwgbW92ZWFibGUuYW5ndWxhclZlbG9jaXR5KSk7XHJcbiAgICAgICAgaW1wdWxzZVUgPSAoLSgxICsgbW92ZWFibGUuYm91bmN5bmVzcykgKiB2QVAuZG90KG10di5yZWZOb3JtYWwpKSAvICgoMSAvIG1vdmVhYmxlLm1hc3MpICsgKE1hdGgucG93KFZlY3RvcjJfMS5WZWN0b3IyLmNyb3NzKGRpc3RhbmNlQVAsIG10di5yZWZOb3JtYWwpLCAyKSAvIG1vdmVhYmxlLm1vbWVudE9mSW50ZXJpYSkpO1xyXG4gICAgICAgIG1vdmVhYmxlLmFuZ3VsYXJWZWxvY2l0eSAtPSAoVmVjdG9yMl8xLlZlY3RvcjIuY3Jvc3MoZGlzdGFuY2VBUCwgbXR2LnJlZk5vcm1hbC5tdWx0U2NhbGFyKC1pbXB1bHNlVSkpIC8gbW92ZWFibGUubW9tZW50T2ZJbnRlcmlhKTtcclxuICAgICAgICByZXR1cm4gaW1wdWxzZVU7XHJcbiAgICB9O1xyXG4gICAgUmlnaWRCb2R5LnByb3RvdHlwZS5yZXNvbHZlUmlnaWRib2R5T3ZlcmxhcE1vdmVhYmxlID0gZnVuY3Rpb24gKG10diwgZ2FtZU9iamVjdFR3bykge1xyXG4gICAgICAgIHRoaXMucGFyZW50LnRyYW5zZm9ybS5wb3NpdGlvbi54ICs9IC1tdHYuYXhpcy54ICogbXR2Lm92ZXJsYXBWYWx1ZSAvIDI7XHJcbiAgICAgICAgdGhpcy5wYXJlbnQudHJhbnNmb3JtLnBvc2l0aW9uLnkgKz0gLW10di5heGlzLnkgKiBtdHYub3ZlcmxhcFZhbHVlIC8gMjtcclxuICAgICAgICBnYW1lT2JqZWN0VHdvLnRyYW5zZm9ybS5wb3NpdGlvbi54ICs9IG10di5heGlzLnggKiBtdHYub3ZlcmxhcFZhbHVlIC8gMjtcclxuICAgICAgICBnYW1lT2JqZWN0VHdvLnRyYW5zZm9ybS5wb3NpdGlvbi55ICs9IG10di5heGlzLnkgKiBtdHYub3ZlcmxhcFZhbHVlIC8gMjtcclxuICAgIH07XHJcbiAgICBSaWdpZEJvZHkucHJvdG90eXBlLnJlc29sdmVSaWdpZGJvZHlPdmVybGFwVW5tb3ZlYWJsZSA9IGZ1bmN0aW9uIChtdHYsIG1vdmVhYmxlKSB7XHJcbiAgICAgICAgbW92ZWFibGUucGFyZW50LnRyYW5zZm9ybS5wb3NpdGlvbi54IC09IG10di5heGlzLnggKiBtdHYub3ZlcmxhcFZhbHVlO1xyXG4gICAgICAgIG1vdmVhYmxlLnBhcmVudC50cmFuc2Zvcm0ucG9zaXRpb24ueSAtPSBtdHYuYXhpcy55ICogbXR2Lm92ZXJsYXBWYWx1ZTtcclxuICAgIH07XHJcbiAgICBSaWdpZEJvZHkuZ2V0RGlzdGFuY2VQb2ludFRvUG9pbnQgPSBmdW5jdGlvbiAoY29sbGlkZXJDZW50ZXIsIGNvbnRhY3RQb2ludCkge1xyXG4gICAgICAgIC8vTWF5YmUgc3dpdGNoXHJcbiAgICAgICAgcmV0dXJuIFZlY3RvcjJfMS5WZWN0b3IyLnN1YnRyYWN0VmVjdG9yKGNvbnRhY3RQb2ludCwgY29sbGlkZXJDZW50ZXIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBSaWdpZEJvZHk7XHJcbn0oKSk7XHJcbmV4cG9ydHMuUmlnaWRCb2R5ID0gUmlnaWRCb2R5O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlNjZW5lTWFuYWdlciA9IHZvaWQgMDtcclxudmFyIEdhbWVPYmplY3RfMSA9IHJlcXVpcmUoXCIuL0dhbWVPYmplY3RcIik7XHJcbnZhciBWZWN0b3IyXzEgPSByZXF1aXJlKFwiLi4vVXRpbGl0eS9WZWN0b3IyXCIpO1xyXG52YXIgUElYSSA9IHJlcXVpcmUoXCJwaXhpLmpzXCIpO1xyXG52YXIgR2FtZU1hbmFnZXJfMSA9IHJlcXVpcmUoXCIuL0dhbWVNYW5hZ2VyXCIpO1xyXG52YXIgR29hbF8xID0gcmVxdWlyZShcIi4uL0dhbWVPYmplY3RzL0dvYWxcIik7XHJcbnZhciBNb3ZpbmdPYnN0YWNsZV8xID0gcmVxdWlyZShcIi4uL0dhbWVPYmplY3RzL01vdmluZ09ic3RhY2xlXCIpO1xyXG52YXIgRGVzdHJ1Y3RpYmxlXzEgPSByZXF1aXJlKFwiLi4vR2FtZU9iamVjdHMvRGVzdHJ1Y3RpYmxlXCIpO1xyXG52YXIgU2NlbmVNYW5hZ2VyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gU2NlbmVNYW5hZ2VyKCkge1xyXG4gICAgICAgIHRoaXMubG9hZGVyID0gUElYSS5sb2FkZXI7XHJcbiAgICAgICAgdGhpcy5yZXNvdXJjZXMgPSBQSVhJLmxvYWRlci5yZXNvdXJjZXM7XHJcbiAgICAgICAgdGhpcy5nYW1lT2JqZWN0Q29sbGVjdGlvbiA9IFtdO1xyXG4gICAgICAgIHRoaXMuY29sbGlkZXJDb2xsZWN0aW9uID0gW107XHJcbiAgICAgICAgdGhpcy5zcHJpdGVDb2xsZWN0aW9uID0gW107XHJcbiAgICAgICAgdGhpcy5yaWdpZEJvZHlDb2xsZWN0aW9uID0gW107XHJcbiAgICAgICAgdGhpcy5zcGxpbmVDb2xsZWN0aW9uID0gW107XHJcbiAgICAgICAgdGhpcy5zcGxpbmVHcmFwaGljcyA9IFtdO1xyXG4gICAgICAgIHRoaXMucmJHcmFwaGljcyA9IFtdO1xyXG4gICAgICAgIHRoaXMubG9hZGVyID0gUElYSS5sb2FkZXI7XHJcbiAgICAgICAgdGhpcy5yZXNvdXJjZXMgPSBQSVhJLmxvYWRlci5yZXNvdXJjZXM7XHJcbiAgICAgICAgdGhpcy5yZXNldCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYXNzZXRzTG9hZGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50TGV2ZWwgPSAxO1xyXG4gICAgICAgIHRoaXMuc3BsaW5lc0RyYXduID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5kcmF3UkJQcm9wZXJ0aWVzID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5lbmFibGVFYXNpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubnVtYmVyT2ZMZXZlbHMgPSA0O1xyXG4gICAgfVxyXG4gICAgU2NlbmVNYW5hZ2VyLmdldEluc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghU2NlbmVNYW5hZ2VyLkluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIFNjZW5lTWFuYWdlci5JbnN0YW5jZSA9IG5ldyBTY2VuZU1hbmFnZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFNjZW5lTWFuYWdlci5JbnN0YW5jZTtcclxuICAgIH07XHJcbiAgICBTY2VuZU1hbmFnZXIucHJvdG90eXBlLkxvYWRTY2VuZSA9IGZ1bmN0aW9uIChmdW5jLCBmdW5jMikge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlQWxsR2FtZU9iamVjdHMoR2FtZU1hbmFnZXJfMS5HYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpLmFwcCk7XHJcbiAgICAgICAgdGhpcy5sb2FkUmVzb3VyY2VzKGZ1bmMsIGZ1bmMyKTtcclxuICAgIH07XHJcbiAgICAvKlxyXG4gICAgRnJlZSBhc3NldHMgZnJvbSBodHRwczovL3d3dy5nYW1lYXJ0MmQuY29tL2ZyZWUtcGxhdGZvcm1lci1nYW1lLXRpbGVzZXQuaHRtbFxyXG4gICAgKi9cclxuICAgIFNjZW5lTWFuYWdlci5wcm90b3R5cGUubG9hZFJlc291cmNlcyA9IGZ1bmN0aW9uIChsZXZlbCwgc2V0dXApIHtcclxuICAgICAgICBpZiAoIXRoaXMuYXNzZXRzTG9hZGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZGVyXHJcbiAgICAgICAgICAgICAgICAuYWRkKFwiYmFja2dyb3VuZFwiLCBcImFzc2V0cy9JbWFnZXMvQkcvQkcucG5nXCIpXHJcbiAgICAgICAgICAgICAgICAuYWRkKFwiYmFja2dyb3VuZDJcIiwgXCJhc3NldHMvSW1hZ2VzL0JHL0JHMi5wbmdcIilcclxuICAgICAgICAgICAgICAgIC5hZGQoXCJjYW5vblwiLCBcImFzc2V0cy9JbWFnZXMvQ2Fub24vUmlnaHQvQ2Fub25fMS5wbmdcIilcclxuICAgICAgICAgICAgICAgIC5hZGQoXCJjYW5vbl9iYWxsXCIsIFwiYXNzZXRzL0ltYWdlcy9DYW5vbi9DYW5ub25CYWxsLnBuZ1wiKVxyXG4gICAgICAgICAgICAgICAgLmFkZChcInRpbGVfdG9wX2xlZnRcIiwgXCJhc3NldHMvSW1hZ2VzL1RpbGVzLzEucG5nXCIpXHJcbiAgICAgICAgICAgICAgICAuYWRkKFwidGlsZV90b3BfbWlkXCIsIFwiYXNzZXRzL0ltYWdlcy9UaWxlcy8yLnBuZ1wiKVxyXG4gICAgICAgICAgICAgICAgLmFkZChcInRpbGVfdG9wX3JpZ2h0XCIsIFwiYXNzZXRzL0ltYWdlcy9UaWxlcy8zLnBuZ1wiKVxyXG4gICAgICAgICAgICAgICAgLmFkZChcInRpbGVfbWlkX2xlZnRcIiwgXCJhc3NldHMvSW1hZ2VzL1RpbGVzLzQucG5nXCIpXHJcbiAgICAgICAgICAgICAgICAuYWRkKFwidGlsZV9taWRfbWlkXCIsIFwiYXNzZXRzL0ltYWdlcy9UaWxlcy81LnBuZ1wiKVxyXG4gICAgICAgICAgICAgICAgLmFkZChcInRpbGVfbWlkX3JpZ2h0XCIsIFwiYXNzZXRzL0ltYWdlcy9UaWxlcy82LnBuZ1wiKVxyXG4gICAgICAgICAgICAgICAgLmFkZChcInRpbGVfdHJhbnNfcmlnaHRcIiwgXCJhc3NldHMvSW1hZ2VzL1RpbGVzLzcucG5nXCIpXHJcbiAgICAgICAgICAgICAgICAuYWRkKFwidGlsZV90cmFuc19sZWZ0XCIsIFwiYXNzZXRzL0ltYWdlcy9UaWxlcy8xMS5wbmdcIilcclxuICAgICAgICAgICAgICAgIC5hZGQoXCJ0aWxlX2Nvcm5lcl9sZWZ0XCIsIFwiYXNzZXRzL0ltYWdlcy9UaWxlcy84LnBuZ1wiKVxyXG4gICAgICAgICAgICAgICAgLmFkZChcInRpbGVfY29ybmVyX3JpZ2h0XCIsIFwiYXNzZXRzL0ltYWdlcy9UaWxlcy8xMC5wbmdcIilcclxuICAgICAgICAgICAgICAgIC5hZGQoXCJ0aWxlX2JvdF9jZW50ZXJcIiwgXCJhc3NldHMvSW1hZ2VzL1RpbGVzLzkucG5nXCIpXHJcbiAgICAgICAgICAgICAgICAuYWRkKFwidGlsZV9ib3RfbGVmdFwiLCBcImFzc2V0cy9JbWFnZXMvVGlsZXMvMTIucG5nXCIpXHJcbiAgICAgICAgICAgICAgICAuYWRkKFwidGlsZV9ib3RfcmlnaHRcIiwgXCJhc3NldHMvSW1hZ2VzL1RpbGVzLzE2LnBuZ1wiKVxyXG4gICAgICAgICAgICAgICAgLmFkZChcInRpbGVfZmxvYXRfbWlkXCIsIFwiYXNzZXRzL0ltYWdlcy9UaWxlcy9mbG9hdF9jLnBuZ1wiKVxyXG4gICAgICAgICAgICAgICAgLmFkZChcInRpbGVfZmxvYXRfbGVmdFwiLCBcImFzc2V0cy9JbWFnZXMvVGlsZXMvZmxvYXRfbC5wbmdcIilcclxuICAgICAgICAgICAgICAgIC5hZGQoXCJ0aWxlX2Zsb2F0X3JpZ2h0XCIsIFwiYXNzZXRzL0ltYWdlcy9UaWxlcy9mbG9hdF9yLnBuZ1wiKVxyXG4gICAgICAgICAgICAgICAgLmFkZChcInJlZF9idXR0b25cIiwgXCJhc3NldHMvSW1hZ2VzL1VJL3JlZF9idXR0b24wNS5wbmdcIilcclxuICAgICAgICAgICAgICAgIC5hZGQoXCJibHVlX2J1dHRvblwiLCBcImFzc2V0cy9JbWFnZXMvVUkvYmx1ZV9idXR0b24wNS5wbmdcIilcclxuICAgICAgICAgICAgICAgIC5hZGQoXCJncmVlbl9idXR0b25cIiwgXCJhc3NldHMvSW1hZ2VzL1VJL2dyZWVuX2J1dHRvbjA3LnBuZ1wiKVxyXG4gICAgICAgICAgICAgICAgLmFkZChcInllbGxvd19jaXJjbGVcIiwgXCJhc3NldHMvSW1hZ2VzL1VJL3llbGxvd19jaXJjbGUucG5nXCIpXHJcbiAgICAgICAgICAgICAgICAuYWRkKFwiZ3JleV9idXR0b25cIiwgXCJhc3NldHMvSW1hZ2VzL1VJL2dyZXlfYnV0dG9uMDAucG5nXCIpXHJcbiAgICAgICAgICAgICAgICAuYWRkKFwiY3JhdGVcIiwgXCJhc3NldHMvSW1hZ2VzL09iamVjdC9DcmF0ZS5wbmdcIilcclxuICAgICAgICAgICAgICAgIC5hZGQoXCJzaHJvb21cIiwgXCJhc3NldHMvSW1hZ2VzL09iamVjdC9NdXNocm9vbV8xLnBuZ1wiKVxyXG4gICAgICAgICAgICAgICAgLmxvYWQobGV2ZWwpO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRlci5vbkNvbXBsZXRlLmFkZChzZXR1cCk7XHJcbiAgICAgICAgICAgIHRoaXMuYXNzZXRzTG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxldmVsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFNjZW5lTWFuYWdlci5wcm90b3R5cGUuYWRkR2FtZU9iamVjdFRvQ29sbGVjdGlvbiA9IGZ1bmN0aW9uIChnYW1lT2JqZWN0KSB7XHJcbiAgICAgICAgdGhpcy5nYW1lT2JqZWN0Q29sbGVjdGlvbi5wdXNoKGdhbWVPYmplY3QpO1xyXG4gICAgfTtcclxuICAgIFNjZW5lTWFuYWdlci5wcm90b3R5cGUuYWRkQ29sbGlkZXJUb0NvbGxlY3Rpb24gPSBmdW5jdGlvbiAoY29sbGlkZXIpIHtcclxuICAgICAgICB0aGlzLmNvbGxpZGVyQ29sbGVjdGlvbi5wdXNoKGNvbGxpZGVyKTtcclxuICAgIH07XHJcbiAgICBTY2VuZU1hbmFnZXIucHJvdG90eXBlLmFkZFNwcml0ZVRvQ29sbGVjdGlvbiA9IGZ1bmN0aW9uIChzcHJpdGUpIHtcclxuICAgICAgICB0aGlzLnNwcml0ZUNvbGxlY3Rpb24ucHVzaChzcHJpdGUpO1xyXG4gICAgfTtcclxuICAgIFNjZW5lTWFuYWdlci5wcm90b3R5cGUuYWRkUmlnaWRCb2R5VG9Db2xsZWN0aW9uID0gZnVuY3Rpb24gKHJpZ2lkQm9keSkge1xyXG4gICAgICAgIHRoaXMucmlnaWRCb2R5Q29sbGVjdGlvbi5wdXNoKHJpZ2lkQm9keSk7XHJcbiAgICB9O1xyXG4gICAgU2NlbmVNYW5hZ2VyLnByb3RvdHlwZS5hZGRTcGxpbmVUb0NvbGxlY3Rpb24gPSBmdW5jdGlvbiAoc3BsaW5lKSB7XHJcbiAgICAgICAgdGhpcy5zcGxpbmVDb2xsZWN0aW9uLnB1c2goc3BsaW5lKTtcclxuICAgIH07XHJcbiAgICBTY2VuZU1hbmFnZXIucHJvdG90eXBlLmFkZEFsbFNwcml0ZXNUb1N0YWdlID0gZnVuY3Rpb24gKHN0YWdlKSB7XHJcbiAgICAgICAgdGhpcy5zcHJpdGVDb2xsZWN0aW9uLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgc3RhZ2UuYWRkQ2hpbGQoZWxlbWVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgU2NlbmVNYW5hZ2VyLnByb3RvdHlwZS5yZW1vdmVBbGxHYW1lT2JqZWN0cyA9IGZ1bmN0aW9uIChhcHApIHtcclxuICAgICAgICBmb3IgKHZhciBjb3VudCA9IDA7IGNvdW50IDwgdGhpcy5zcHJpdGVDb2xsZWN0aW9uLmxlbmd0aDsgY291bnQrKykge1xyXG4gICAgICAgICAgICBhcHAuc3RhZ2UucmVtb3ZlQ2hpbGQodGhpcy5zcHJpdGVDb2xsZWN0aW9uW2NvdW50XSk7XHJcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlQ29sbGVjdGlvbltjb3VudF0gPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKHZhciBjb3VudCA9IDA7IGNvdW50IDwgdGhpcy5yaWdpZEJvZHlDb2xsZWN0aW9uLmxlbmd0aDsgY291bnQrKykge1xyXG4gICAgICAgICAgICB0aGlzLnJpZ2lkQm9keUNvbGxlY3Rpb25bY291bnRdID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICh2YXIgY291bnQgPSAwOyBjb3VudCA8IHRoaXMuY29sbGlkZXJDb2xsZWN0aW9uLmxlbmd0aDsgY291bnQrKykge1xyXG4gICAgICAgICAgICB0aGlzLmNvbGxpZGVyQ29sbGVjdGlvbltjb3VudF0gPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKHZhciBjb3VudCA9IDA7IGNvdW50IDwgdGhpcy5nYW1lT2JqZWN0Q29sbGVjdGlvbi5sZW5ndGg7IGNvdW50KyspIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lT2JqZWN0Q29sbGVjdGlvbltjb3VudF0uY29sbGlkZXIgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPYmplY3RDb2xsZWN0aW9uW2NvdW50XS5zcHJpdGUgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPYmplY3RDb2xsZWN0aW9uW2NvdW50XS5yaWdpZGJvZHkgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPYmplY3RDb2xsZWN0aW9uW2NvdW50XSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmlnaWRCb2R5Q29sbGVjdGlvbiA9IFtdO1xyXG4gICAgICAgIHRoaXMuc3ByaXRlQ29sbGVjdGlvbiA9IFtdO1xyXG4gICAgICAgIHRoaXMuY29sbGlkZXJDb2xsZWN0aW9uID0gW107XHJcbiAgICAgICAgdGhpcy5nYW1lT2JqZWN0Q29sbGVjdGlvbiA9IFtdO1xyXG4gICAgICAgIHRoaXMuc3BsaW5lQ29sbGVjdGlvbiA9IFtdO1xyXG4gICAgfTtcclxuICAgIFNjZW5lTWFuYWdlci5wcm90b3R5cGUuY3JlYXRlTmV3R2FtZU9iamVjdCA9IGZ1bmN0aW9uICh0cmFuc2Zvcm0sIHNwcml0ZSwgY29sbGlkZXIsIHJpZ2lkYm9keSkge1xyXG4gICAgICAgIHZhciBnYW1lT2JqZWN0ID0gbmV3IEdhbWVPYmplY3RfMS5HYW1lT2JqZWN0KHRyYW5zZm9ybSwgc3ByaXRlLCBjb2xsaWRlciwgcmlnaWRib2R5KTtcclxuICAgICAgICByZXR1cm4gZ2FtZU9iamVjdDtcclxuICAgIH07XHJcbiAgICBTY2VuZU1hbmFnZXIucHJvdG90eXBlLnJlbW92ZU9iamVjdCA9IGZ1bmN0aW9uIChnYW1lT2JqZWN0KSB7XHJcbiAgICAgICAgaWYgKGdhbWVPYmplY3QgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5jb2xsaWRlckNvbGxlY3Rpb24gPSB0aGlzLmNvbGxpZGVyQ29sbGVjdGlvbi5maWx0ZXIoZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICE9PSBnYW1lT2JqZWN0LmNvbGxpZGVyOyB9KTtcclxuICAgICAgICAgICAgdGhpcy5yaWdpZEJvZHlDb2xsZWN0aW9uID0gdGhpcy5yaWdpZEJvZHlDb2xsZWN0aW9uLmZpbHRlcihmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogIT09IGdhbWVPYmplY3QucmlnaWRib2R5OyB9KTtcclxuICAgICAgICAgICAgdGhpcy5zcHJpdGVDb2xsZWN0aW9uID0gdGhpcy5zcHJpdGVDb2xsZWN0aW9uLmZpbHRlcihmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogIT09IGdhbWVPYmplY3Quc3ByaXRlOyB9KTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBnYW1lT2JqZWN0ID09PSB0eXBlb2YgKE1vdmluZ09ic3RhY2xlXzEuTW92aW5nT2JzdGFjbGUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwbGluZUNvbGxlY3Rpb24gPSB0aGlzLnNwbGluZUNvbGxlY3Rpb24uZmlsdGVyKGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAhPT0gZ2FtZU9iamVjdC5zcGxpbmU7IH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZU9iamVjdENvbGxlY3Rpb24gPSB0aGlzLmdhbWVPYmplY3RDb2xsZWN0aW9uLmZpbHRlcihmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogIT09IGdhbWVPYmplY3Q7IH0pO1xyXG4gICAgICAgICAgICBHYW1lTWFuYWdlcl8xLkdhbWVNYW5hZ2VyLmdldEluc3RhbmNlKCkuYXBwLnN0YWdlLnJlbW92ZUNoaWxkKGdhbWVPYmplY3Quc3ByaXRlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgU2NlbmVNYW5hZ2VyLnByb3RvdHlwZS5yZW1vdmVBbGxTcGxpbmVHcmFwaGljcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuc3BsaW5lR3JhcGhpY3MuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gICAgICAgICAgICBHYW1lTWFuYWdlcl8xLkdhbWVNYW5hZ2VyLmdldEluc3RhbmNlKCkuYXBwLnN0YWdlLnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICBfdGhpcy5zcGxpbmVzRHJhd24gPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnNwbGluZUdyYXBoaWNzID0gW107XHJcbiAgICB9O1xyXG4gICAgU2NlbmVNYW5hZ2VyLnByb3RvdHlwZS5yZW1vdmVBbGxSQkdyYXBoaWNzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5yYkdyYXBoaWNzLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgR2FtZU1hbmFnZXJfMS5HYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpLmFwcC5zdGFnZS5yZW1vdmVDaGlsZChlbGVtZW50KTtcclxuICAgICAgICAgICAgX3RoaXMuZHJhd1JCUHJvcGVydGllcyA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucmJHcmFwaGljcyA9IFtdO1xyXG4gICAgfTtcclxuICAgIFNjZW5lTWFuYWdlci5wcm90b3R5cGUuYnVpbGRXYWxscyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZ2FtZUJvcmRlckJvdCA9IHRoaXMuY3JlYXRlTmV3R2FtZU9iamVjdCgpO1xyXG4gICAgICAgIGdhbWVCb3JkZXJCb3QudHJhbnNmb3JtLnBvc2l0aW9uLnNldCg4MDAsIDg5MCk7XHJcbiAgICAgICAgZ2FtZUJvcmRlckJvdC5hZGRTcHJpdGUodGhpcy5yZXNvdXJjZXNbXCJ0aWxlX3RvcF9taWRcIl0udGV4dHVyZSwgbmV3IFZlY3RvcjJfMS5WZWN0b3IyKDEyLCAxKSk7XHJcbiAgICAgICAgZ2FtZUJvcmRlckJvdC5hZGRDb2xsaWRlcih0cnVlKTtcclxuICAgICAgICBnYW1lQm9yZGVyQm90LmFkZFJpZ2lkYm9keShnYW1lQm9yZGVyQm90LCA1LCB0cnVlKTtcclxuICAgICAgICB2YXIgZ2FtZUJvcmRlclJpZ2h0ID0gdGhpcy5jcmVhdGVOZXdHYW1lT2JqZWN0KCk7XHJcbiAgICAgICAgZ2FtZUJvcmRlclJpZ2h0LnRyYW5zZm9ybS5wb3NpdGlvbi5zZXQoMTYwMCwgNDAwKTtcclxuICAgICAgICBnYW1lQm9yZGVyUmlnaHQuYWRkU3ByaXRlKHRoaXMucmVzb3VyY2VzW1widGlsZV90b3BfbGVmdFwiXS50ZXh0dXJlLCBuZXcgVmVjdG9yMl8xLlZlY3RvcjIoMSwgMTIpKTtcclxuICAgICAgICBnYW1lQm9yZGVyUmlnaHQuYWRkQ29sbGlkZXIodHJ1ZSk7XHJcbiAgICAgICAgZ2FtZUJvcmRlclJpZ2h0LmFkZFJpZ2lkYm9keShnYW1lQm9yZGVyUmlnaHQsIDEsIHRydWUpO1xyXG4gICAgICAgIHZhciBnYW1lQm9yZGVyTGVmdCA9IHRoaXMuY3JlYXRlTmV3R2FtZU9iamVjdCgpO1xyXG4gICAgICAgIGdhbWVCb3JkZXJMZWZ0LnRyYW5zZm9ybS5wb3NpdGlvbi5zZXQoMSwgNDAwKTtcclxuICAgICAgICBnYW1lQm9yZGVyTGVmdC5hZGRTcHJpdGUodGhpcy5yZXNvdXJjZXNbXCJ0aWxlX3RvcF9yaWdodFwiXS50ZXh0dXJlLCBuZXcgVmVjdG9yMl8xLlZlY3RvcjIoMSwgMTIpKTtcclxuICAgICAgICBnYW1lQm9yZGVyTGVmdC5hZGRDb2xsaWRlcih0cnVlKTtcclxuICAgICAgICBnYW1lQm9yZGVyTGVmdC5hZGRSaWdpZGJvZHkoZ2FtZUJvcmRlckxlZnQsIDEsIHRydWUpO1xyXG4gICAgICAgIHZhciBnYW1lQm9yZGVyVG9wID0gdGhpcy5jcmVhdGVOZXdHYW1lT2JqZWN0KCk7XHJcbiAgICAgICAgZ2FtZUJvcmRlclRvcC50cmFuc2Zvcm0ucG9zaXRpb24uc2V0KDgwMCwgMCk7XHJcbiAgICAgICAgZ2FtZUJvcmRlclRvcC5hZGRTcHJpdGUodGhpcy5yZXNvdXJjZXNbXCJ0aWxlX2JvdF9jZW50ZXJcIl0udGV4dHVyZSwgbmV3IFZlY3RvcjJfMS5WZWN0b3IyKDE0LCAwLjgpKTtcclxuICAgICAgICBnYW1lQm9yZGVyVG9wLmFkZENvbGxpZGVyKHRydWUpO1xyXG4gICAgICAgIGdhbWVCb3JkZXJUb3AuYWRkUmlnaWRib2R5KGdhbWVCb3JkZXJUb3AsIDEsIHRydWUpO1xyXG4gICAgfTtcclxuICAgIFNjZW5lTWFuYWdlci5wcm90b3R5cGUuYWRkQmFja2dyb3VuZCA9IGZ1bmN0aW9uIChzcHJpdGVOYW1lKSB7XHJcbiAgICAgICAgdmFyIEJhY2tncm91bmQgPSB0aGlzLmNyZWF0ZU5ld0dhbWVPYmplY3QoKTtcclxuICAgICAgICBCYWNrZ3JvdW5kLnRyYW5zZm9ybS5wb3NpdGlvbi5zZXQoMjAwLCA0NzApO1xyXG4gICAgICAgIEJhY2tncm91bmQuYWRkU3ByaXRlKHRoaXMucmVzb3VyY2VzW3Nwcml0ZU5hbWVdLnRleHR1cmUsIG5ldyBWZWN0b3IyXzEuVmVjdG9yMigxLCAxLjIpKTtcclxuICAgICAgICB2YXIgQmFja2dyb3VuZDIgPSB0aGlzLmNyZWF0ZU5ld0dhbWVPYmplY3QoKTtcclxuICAgICAgICBCYWNrZ3JvdW5kMi50cmFuc2Zvcm0ucG9zaXRpb24uc2V0KDEyMDAsIDQ3MCk7XHJcbiAgICAgICAgQmFja2dyb3VuZDIuYWRkU3ByaXRlKHRoaXMucmVzb3VyY2VzW3Nwcml0ZU5hbWVdLnRleHR1cmUsIG5ldyBWZWN0b3IyXzEuVmVjdG9yMigxLCAxLjIpKTtcclxuICAgIH07XHJcbiAgICBTY2VuZU1hbmFnZXIucHJvdG90eXBlLmFkZE9ic3RhY2xlcyA9IGZ1bmN0aW9uIChsZXZlbCkge1xyXG4gICAgICAgIHN3aXRjaCAobGV2ZWwpIHtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5MZXZlbE9uZSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHRoaXMuTGV2ZWxUd28oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICB0aGlzLkxldmVsVGhyZWUoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLkxldmVsRm91cigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLkxldmVsT25lKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgU2NlbmVNYW5hZ2VyLnByb3RvdHlwZS5MZXZlbE9uZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgT2JzdGFjbGUxID0gdGhpcy5jcmVhdGVOZXdHYW1lT2JqZWN0KCk7XHJcbiAgICAgICAgT2JzdGFjbGUxLnRyYW5zZm9ybS5wb3NpdGlvbi5zZXQoMTIwMCwgNzE1KTtcclxuICAgICAgICBPYnN0YWNsZTEuYWRkU3ByaXRlKHRoaXMucmVzb3VyY2VzW1widGlsZV90b3BfbWlkXCJdLnRleHR1cmUsIG5ldyBWZWN0b3IyXzEuVmVjdG9yMigxLjAsIDIpKTtcclxuICAgICAgICBPYnN0YWNsZTEuYWRkQ29sbGlkZXIodHJ1ZSk7XHJcbiAgICAgICAgT2JzdGFjbGUxLmFkZFJpZ2lkYm9keShPYnN0YWNsZTEsIDEwLCB0cnVlKTtcclxuICAgICAgICBPYnN0YWNsZTEucm90YXRlR2FtZU9iamVjdCgwKTtcclxuICAgICAgICB2YXIgT2JzdGFjbGUyID0gdGhpcy5jcmVhdGVOZXdHYW1lT2JqZWN0KCk7XHJcbiAgICAgICAgT2JzdGFjbGUyLnRyYW5zZm9ybS5wb3NpdGlvbi5zZXQoODAwLCAxNTApO1xyXG4gICAgICAgIE9ic3RhY2xlMi5hZGRTcHJpdGUodGhpcy5yZXNvdXJjZXNbXCJncmVlbl9idXR0b25cIl0udGV4dHVyZSwgbmV3IFZlY3RvcjJfMS5WZWN0b3IyKDEsIDEpKTtcclxuICAgICAgICBPYnN0YWNsZTIuYWRkQ29sbGlkZXIodHJ1ZSk7XHJcbiAgICAgICAgT2JzdGFjbGUyLmFkZFJpZ2lkYm9keShPYnN0YWNsZTIsIDUsIHRydWUpO1xyXG4gICAgICAgIHZhciBPYnN0YWNsZTMgPSB0aGlzLmNyZWF0ZU5ld0dhbWVPYmplY3QoKTtcclxuICAgICAgICBPYnN0YWNsZTMudHJhbnNmb3JtLnBvc2l0aW9uLnNldCgxMDg1LCA1MDApO1xyXG4gICAgICAgIE9ic3RhY2xlMy5hZGRTcHJpdGUodGhpcy5yZXNvdXJjZXNbXCJ0aWxlX2Zsb2F0X21pZFwiXS50ZXh0dXJlLCBuZXcgVmVjdG9yMl8xLlZlY3RvcjIoMS41LCAwLjgpKTtcclxuICAgICAgICBPYnN0YWNsZTMuYWRkQ29sbGlkZXIodHJ1ZSk7XHJcbiAgICAgICAgT2JzdGFjbGUzLmFkZFJpZ2lkYm9keShPYnN0YWNsZTMsIDIwLCB0cnVlLCBmYWxzZSwgMC4yKTtcclxuICAgICAgICB2YXIgT2JzdGFjbGU0ID0gdGhpcy5jcmVhdGVOZXdHYW1lT2JqZWN0KCk7XHJcbiAgICAgICAgT2JzdGFjbGU0LnRyYW5zZm9ybS5wb3NpdGlvbi5zZXQoMTMwMCwgMzUwKTtcclxuICAgICAgICBPYnN0YWNsZTQuYWRkU3ByaXRlKHRoaXMucmVzb3VyY2VzW1widGlsZV9mbG9hdF9taWRcIl0udGV4dHVyZSwgbmV3IFZlY3RvcjJfMS5WZWN0b3IyKDIuMiwgMC45KSk7XHJcbiAgICAgICAgT2JzdGFjbGU0LmFkZENvbGxpZGVyKHRydWUpO1xyXG4gICAgICAgIE9ic3RhY2xlNC5hZGRSaWdpZGJvZHkoT2JzdGFjbGU0LCAyMCwgdHJ1ZSwgZmFsc2UsIDAuMik7XHJcbiAgICAgICAgT2JzdGFjbGU0LnJvdGF0ZUdhbWVPYmplY3QoMzAwKTtcclxuICAgICAgICB2YXIgT2JzdGFjbGU1ID0gdGhpcy5jcmVhdGVOZXdHYW1lT2JqZWN0KCk7XHJcbiAgICAgICAgT2JzdGFjbGU1LnRyYW5zZm9ybS5wb3NpdGlvbi5zZXQoOTAwLCA3MDApO1xyXG4gICAgICAgIE9ic3RhY2xlNS5hZGRTcHJpdGUodGhpcy5yZXNvdXJjZXNbXCJncmVlbl9idXR0b25cIl0udGV4dHVyZSwgbmV3IFZlY3RvcjJfMS5WZWN0b3IyKDEuNSwgMi41KSk7XHJcbiAgICAgICAgT2JzdGFjbGU1LmFkZENvbGxpZGVyKHRydWUpO1xyXG4gICAgICAgIE9ic3RhY2xlNS5hZGRSaWdpZGJvZHkoT2JzdGFjbGU1LCA1LCB0cnVlKTtcclxuICAgICAgICBPYnN0YWNsZTUucm90YXRlR2FtZU9iamVjdCg3Myk7XHJcbiAgICAgICAgdmFyIE9ic3RhY2xlNiA9IHRoaXMuY3JlYXRlTmV3R2FtZU9iamVjdCgpO1xyXG4gICAgICAgIE9ic3RhY2xlNi50cmFuc2Zvcm0ucG9zaXRpb24uc2V0KDcyMCwgNDQ1KTtcclxuICAgICAgICBPYnN0YWNsZTYuYWRkU3ByaXRlKHRoaXMucmVzb3VyY2VzW1wicmVkX2J1dHRvblwiXS50ZXh0dXJlLCBuZXcgVmVjdG9yMl8xLlZlY3RvcjIoMi41LCAyKSk7XHJcbiAgICAgICAgT2JzdGFjbGU2LmFkZENvbGxpZGVyKHRydWUpO1xyXG4gICAgICAgIE9ic3RhY2xlNi5hZGRSaWdpZGJvZHkoT2JzdGFjbGU2LCAxMCwgdHJ1ZSk7XHJcbiAgICAgICAgT2JzdGFjbGU2LnJvdGF0ZUdhbWVPYmplY3QoNDgpO1xyXG4gICAgICAgIHZhciBPYnN0YWNsZTcgPSB0aGlzLmNyZWF0ZU5ld0dhbWVPYmplY3QoKTtcclxuICAgICAgICBPYnN0YWNsZTcudHJhbnNmb3JtLnBvc2l0aW9uLnNldCgxNDUwLCA0MDApO1xyXG4gICAgICAgIE9ic3RhY2xlNy5hZGRTcHJpdGUodGhpcy5yZXNvdXJjZXNbXCJ0aWxlX2Zsb2F0X21pZFwiXS50ZXh0dXJlLCBuZXcgVmVjdG9yMl8xLlZlY3RvcjIoMi4yLCAwLjkpKTtcclxuICAgICAgICBPYnN0YWNsZTcuYWRkQ29sbGlkZXIodHJ1ZSk7XHJcbiAgICAgICAgT2JzdGFjbGU3LmFkZFJpZ2lkYm9keShPYnN0YWNsZTcsIDIwLCB0cnVlLCBmYWxzZSwgMC4yKTtcclxuICAgICAgICBPYnN0YWNsZTcucm90YXRlR2FtZU9iamVjdCgzMDApO1xyXG4gICAgICAgIHZhciBEZXN0cnVjdGlibGUxID0gbmV3IERlc3RydWN0aWJsZV8xLkRlc3RydWN0aWJsZSg1MDApO1xyXG4gICAgICAgIERlc3RydWN0aWJsZTEudHJhbnNmb3JtLnBvc2l0aW9uLnNldCg0MDAsIDQwMCk7XHJcbiAgICAgICAgRGVzdHJ1Y3RpYmxlMS5hZGRTcHJpdGUodGhpcy5yZXNvdXJjZXNbXCJjcmF0ZVwiXS50ZXh0dXJlLCBuZXcgVmVjdG9yMl8xLlZlY3RvcjIoMC43LCAwLjcpKTtcclxuICAgICAgICBEZXN0cnVjdGlibGUxLmFkZENvbGxpZGVyKHRydWUpO1xyXG4gICAgICAgIERlc3RydWN0aWJsZTEuYWRkUmlnaWRib2R5KERlc3RydWN0aWJsZTEsIDUsIGZhbHNlLCB0cnVlLCAwLjEpO1xyXG4gICAgICAgIERlc3RydWN0aWJsZTEucm90YXRlR2FtZU9iamVjdCgxMjApO1xyXG4gICAgICAgIHZhciBEZXN0cnVjdGlibGUyID0gbmV3IERlc3RydWN0aWJsZV8xLkRlc3RydWN0aWJsZSg1MDApO1xyXG4gICAgICAgIERlc3RydWN0aWJsZTIudHJhbnNmb3JtLnBvc2l0aW9uLnNldCg2MDAsIDQwMCk7XHJcbiAgICAgICAgRGVzdHJ1Y3RpYmxlMi5hZGRTcHJpdGUodGhpcy5yZXNvdXJjZXNbXCJjcmF0ZVwiXS50ZXh0dXJlLCBuZXcgVmVjdG9yMl8xLlZlY3RvcjIoMC43LCAwLjcpKTtcclxuICAgICAgICBEZXN0cnVjdGlibGUyLmFkZENvbGxpZGVyKHRydWUpO1xyXG4gICAgICAgIERlc3RydWN0aWJsZTIuYWRkUmlnaWRib2R5KERlc3RydWN0aWJsZTIsIDUsIGZhbHNlLCB0cnVlLCAwLjEpO1xyXG4gICAgICAgIERlc3RydWN0aWJsZTIucm90YXRlR2FtZU9iamVjdCgxMjApO1xyXG4gICAgICAgIHZhciBEZXN0cnVjdGlibGUzID0gbmV3IERlc3RydWN0aWJsZV8xLkRlc3RydWN0aWJsZSg1MDApO1xyXG4gICAgICAgIERlc3RydWN0aWJsZTMudHJhbnNmb3JtLnBvc2l0aW9uLnNldCg1MDAsIDQwMCk7XHJcbiAgICAgICAgRGVzdHJ1Y3RpYmxlMy5hZGRTcHJpdGUodGhpcy5yZXNvdXJjZXNbXCJjcmF0ZVwiXS50ZXh0dXJlLCBuZXcgVmVjdG9yMl8xLlZlY3RvcjIoMC43LCAwLjcpKTtcclxuICAgICAgICBEZXN0cnVjdGlibGUzLmFkZENvbGxpZGVyKHRydWUpO1xyXG4gICAgICAgIERlc3RydWN0aWJsZTMuYWRkUmlnaWRib2R5KERlc3RydWN0aWJsZTMsIDUsIGZhbHNlLCB0cnVlLCAwLjEpO1xyXG4gICAgICAgIERlc3RydWN0aWJsZTMucm90YXRlR2FtZU9iamVjdCgxMjApO1xyXG4gICAgICAgIHZhciBnb2FsID0gbmV3IEdvYWxfMS5Hb2FsKCk7XHJcbiAgICAgICAgZ29hbC50cmFuc2Zvcm0ucG9zaXRpb24uc2V0KDEzNjAsIDY1MCk7XHJcbiAgICAgICAgZ29hbC5hZGRTcHJpdGUodGhpcy5yZXNvdXJjZXNbXCJ5ZWxsb3dfY2lyY2xlXCJdLnRleHR1cmUsIG5ldyBWZWN0b3IyXzEuVmVjdG9yMigzLCAzKSk7XHJcbiAgICAgICAgZ29hbC5hZGRDb2xsaWRlcih0cnVlKTtcclxuICAgICAgICBnb2FsLmFkZFJpZ2lkYm9keShnb2FsLCAxMCwgdHJ1ZSk7XHJcbiAgICAgICAgdmFyIG1vdmluZyA9IG5ldyBNb3ZpbmdPYnN0YWNsZV8xLk1vdmluZ09ic3RhY2xlKDUwMCwgdHJ1ZSk7XHJcbiAgICAgICAgbW92aW5nLnRyYW5zZm9ybS5wb3NpdGlvbi5zZXQoMTIwMCwgMzUwKTtcclxuICAgICAgICBtb3ZpbmcuYWRkU3ByaXRlKHRoaXMucmVzb3VyY2VzW1wicmVkX2J1dHRvblwiXS50ZXh0dXJlLCBuZXcgVmVjdG9yMl8xLlZlY3RvcjIoMiwgMikpO1xyXG4gICAgICAgIG1vdmluZy5hZGRDb2xsaWRlcih0cnVlKTtcclxuICAgICAgICBtb3ZpbmcuYWRkUmlnaWRib2R5KG1vdmluZywgMTAsIHRydWUsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLmFkZEdhbWVPYmplY3RUb0NvbGxlY3Rpb24obW92aW5nKTtcclxuICAgICAgICBtb3ZpbmcuZWFzaW5nID0gdHJ1ZTtcclxuICAgICAgICBtb3ZpbmcuU2V0RWFzaW5nU3RydWN0cyhuZXcgTW92aW5nT2JzdGFjbGVfMS5FYXNpbmdTdHJ1Y3QoMSwgMiwgMyksIG5ldyBNb3ZpbmdPYnN0YWNsZV8xLkVhc2luZ1N0cnVjdCgxLCAyLjUsIDMpKTtcclxuICAgICAgICB2YXIgbW92aW5nWCA9IG1vdmluZy50cmFuc2Zvcm0ucG9zaXRpb24ueDtcclxuICAgICAgICB2YXIgbW92aW5nWSA9IG1vdmluZy50cmFuc2Zvcm0ucG9zaXRpb24ueTtcclxuICAgICAgICBtb3ZpbmcuU2V0U3BsaW5lUG9pbnRzKFtcclxuICAgICAgICAgICAgbmV3IFZlY3RvcjJfMS5WZWN0b3IyKG1vdmluZ1ggKyAwLCBtb3ZpbmdZICsgMCksXHJcbiAgICAgICAgICAgIG5ldyBWZWN0b3IyXzEuVmVjdG9yMihtb3ZpbmdYIC0gMTIwLCBtb3ZpbmdZIC0gNTApLFxyXG4gICAgICAgICAgICBuZXcgVmVjdG9yMl8xLlZlY3RvcjIobW92aW5nWCAtIDI0MCwgbW92aW5nWSAtIDEwMCksXHJcbiAgICAgICAgICAgIG5ldyBWZWN0b3IyXzEuVmVjdG9yMihtb3ZpbmdYIC0gNTAwLCBtb3ZpbmdZICsgMzEwKSxcclxuICAgICAgICAgICAgbmV3IFZlY3RvcjJfMS5WZWN0b3IyKG1vdmluZ1ggLSA3MDAsIG1vdmluZ1kgLSA1MCksXHJcbiAgICAgICAgICAgIG5ldyBWZWN0b3IyXzEuVmVjdG9yMihtb3ZpbmdYIC0gODUwLCBtb3ZpbmdZIC0gMTUwKVxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIHZhciBtb3ZpbmcyID0gbmV3IE1vdmluZ09ic3RhY2xlXzEuTW92aW5nT2JzdGFjbGUoNTAwLCB0cnVlKTtcclxuICAgICAgICBtb3ZpbmcyLnRyYW5zZm9ybS5wb3NpdGlvbi5zZXQoMTUwLCAyNTApO1xyXG4gICAgICAgIG1vdmluZzIuYWRkU3ByaXRlKHRoaXMucmVzb3VyY2VzW1wicmVkX2J1dHRvblwiXS50ZXh0dXJlLCBuZXcgVmVjdG9yMl8xLlZlY3RvcjIoMiwgMikpO1xyXG4gICAgICAgIG1vdmluZzIuYWRkQ29sbGlkZXIodHJ1ZSk7XHJcbiAgICAgICAgbW92aW5nMi5hZGRSaWdpZGJvZHkobW92aW5nMiwgMTAsIHRydWUsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLmFkZEdhbWVPYmplY3RUb0NvbGxlY3Rpb24obW92aW5nMik7XHJcbiAgICAgICAgbW92aW5nMi5lYXNpbmcgPSB0cnVlO1xyXG4gICAgICAgIG1vdmluZzIuU2V0RWFzaW5nU3RydWN0cyhuZXcgTW92aW5nT2JzdGFjbGVfMS5FYXNpbmdTdHJ1Y3QoMSwgMywgMSksIG5ldyBNb3ZpbmdPYnN0YWNsZV8xLkVhc2luZ1N0cnVjdCgxLCAzLCAxKSk7XHJcbiAgICAgICAgdmFyIG1vdmluZzJYID0gbW92aW5nMi50cmFuc2Zvcm0ucG9zaXRpb24ueDtcclxuICAgICAgICB2YXIgbW92aW5nMlkgPSBtb3ZpbmcyLnRyYW5zZm9ybS5wb3NpdGlvbi55O1xyXG4gICAgICAgIG1vdmluZzIuU2V0U3BsaW5lUG9pbnRzKFtcclxuICAgICAgICAgICAgbmV3IFZlY3RvcjJfMS5WZWN0b3IyKG1vdmluZzJYICsgNTAsIG1vdmluZzJZICsgLTUwKSxcclxuICAgICAgICAgICAgbmV3IFZlY3RvcjJfMS5WZWN0b3IyKG1vdmluZzJYICsgMCwgbW92aW5nMlkgKyAwKSxcclxuICAgICAgICAgICAgbmV3IFZlY3RvcjJfMS5WZWN0b3IyKG1vdmluZzJYICsgMzAwLCBtb3ZpbmcyWSAtIDUwKSxcclxuICAgICAgICAgICAgbmV3IFZlY3RvcjJfMS5WZWN0b3IyKG1vdmluZzJYICsgNTAsIG1vdmluZzJZICsgMTEwKSxcclxuICAgICAgICAgICAgbmV3IFZlY3RvcjJfMS5WZWN0b3IyKG1vdmluZzJYICsgMjAwLCBtb3ZpbmcyWSArIDgwKSxcclxuICAgICAgICAgICAgbmV3IFZlY3RvcjJfMS5WZWN0b3IyKG1vdmluZzJYICsgMjYwLCBtb3ZpbmcyWSArIDE4MCksXHJcbiAgICAgICAgICAgIG5ldyBWZWN0b3IyXzEuVmVjdG9yMihtb3ZpbmcyWCArIDI3MCwgbW92aW5nMlkgKyAyNTApXHJcbiAgICAgICAgXSk7XHJcbiAgICB9O1xyXG4gICAgU2NlbmVNYW5hZ2VyLnByb3RvdHlwZS5MZXZlbFR3byA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBHYW1lTWFuYWdlcl8xLkdhbWVNYW5hZ2VyLmdldEluc3RhbmNlKCkuYXBwLnN0YWdlLnJlbW92ZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgdmFyIE9ic3RhY2xlMSA9IHRoaXMuY3JlYXRlTmV3R2FtZU9iamVjdCgpO1xyXG4gICAgICAgIE9ic3RhY2xlMS50cmFuc2Zvcm0ucG9zaXRpb24uc2V0KDc1MCwgNDYwKTtcclxuICAgICAgICBPYnN0YWNsZTEuYWRkU3ByaXRlKHRoaXMucmVzb3VyY2VzW1wicmVkX2J1dHRvblwiXS50ZXh0dXJlLCBuZXcgVmVjdG9yMl8xLlZlY3RvcjIoMiwgMikpO1xyXG4gICAgICAgIE9ic3RhY2xlMS5hZGRDb2xsaWRlcih0cnVlKTtcclxuICAgICAgICBPYnN0YWNsZTEuYWRkUmlnaWRib2R5KE9ic3RhY2xlMSwgMTAsIHRydWUpO1xyXG4gICAgICAgIHZhciBPYnN0YWNsZTIgPSB0aGlzLmNyZWF0ZU5ld0dhbWVPYmplY3QoKTtcclxuICAgICAgICBPYnN0YWNsZTIudHJhbnNmb3JtLnBvc2l0aW9uLnNldCg0NTAsIDMyMCk7XHJcbiAgICAgICAgT2JzdGFjbGUyLmFkZFNwcml0ZSh0aGlzLnJlc291cmNlc1tcImdyZWVuX2J1dHRvblwiXS50ZXh0dXJlLCBuZXcgVmVjdG9yMl8xLlZlY3RvcjIoMiwgMikpO1xyXG4gICAgICAgIE9ic3RhY2xlMi5hZGRDb2xsaWRlcih0cnVlKTtcclxuICAgICAgICBPYnN0YWNsZTIuYWRkUmlnaWRib2R5KE9ic3RhY2xlMiwgNSwgdHJ1ZSk7XHJcbiAgICAgICAgdmFyIE9ic3RhY2xlMyA9IHRoaXMuY3JlYXRlTmV3R2FtZU9iamVjdCgpO1xyXG4gICAgICAgIE9ic3RhY2xlMy50cmFuc2Zvcm0ucG9zaXRpb24uc2V0KDExMDAsIDYwMCk7XHJcbiAgICAgICAgT2JzdGFjbGUzLmFkZFNwcml0ZSh0aGlzLnJlc291cmNlc1tcImJsdWVfYnV0dG9uXCJdLnRleHR1cmUsIG5ldyBWZWN0b3IyXzEuVmVjdG9yMigxLjIsIDEuMikpO1xyXG4gICAgICAgIE9ic3RhY2xlMy5hZGRDb2xsaWRlcih0cnVlKTtcclxuICAgICAgICBPYnN0YWNsZTMuYWRkUmlnaWRib2R5KE9ic3RhY2xlMywgMjAsIHRydWUsIGZhbHNlLCAwLjIpO1xyXG4gICAgICAgIHZhciBPYnN0YWNsZTQgPSB0aGlzLmNyZWF0ZU5ld0dhbWVPYmplY3QoKTtcclxuICAgICAgICBPYnN0YWNsZTQudHJhbnNmb3JtLnBvc2l0aW9uLnNldCgxMjQwLCAzNTApO1xyXG4gICAgICAgIE9ic3RhY2xlNC5hZGRTcHJpdGUodGhpcy5yZXNvdXJjZXNbXCJibHVlX2J1dHRvblwiXS50ZXh0dXJlLCBuZXcgVmVjdG9yMl8xLlZlY3RvcjIoMS4yLCAxLjIpKTtcclxuICAgICAgICBPYnN0YWNsZTQuYWRkQ29sbGlkZXIodHJ1ZSk7XHJcbiAgICAgICAgT2JzdGFjbGU0LmFkZFJpZ2lkYm9keShPYnN0YWNsZTQsIDIwLCB0cnVlLCBmYWxzZSwgMC4yKTtcclxuICAgICAgICBPYnN0YWNsZTQucm90YXRlR2FtZU9iamVjdCg0NSk7XHJcbiAgICAgICAgdmFyIE9ic3RhY2xlNSA9IHRoaXMuY3JlYXRlTmV3R2FtZU9iamVjdCgpO1xyXG4gICAgICAgIE9ic3RhY2xlNS50cmFuc2Zvcm0ucG9zaXRpb24uc2V0KDExMDAsIDgwMCk7XHJcbiAgICAgICAgT2JzdGFjbGU1LmFkZFNwcml0ZSh0aGlzLnJlc291cmNlc1tcImdyZWVuX2J1dHRvblwiXS50ZXh0dXJlLCBuZXcgVmVjdG9yMl8xLlZlY3RvcjIoMiwgMikpO1xyXG4gICAgICAgIE9ic3RhY2xlNS5hZGRDb2xsaWRlcih0cnVlKTtcclxuICAgICAgICBPYnN0YWNsZTUuYWRkUmlnaWRib2R5KE9ic3RhY2xlNSwgNSwgdHJ1ZSk7XHJcbiAgICAgICAgT2JzdGFjbGU1LnJvdGF0ZUdhbWVPYmplY3QoNzMpO1xyXG4gICAgICAgIHZhciBPYnN0YWNsZTYgPSB0aGlzLmNyZWF0ZU5ld0dhbWVPYmplY3QoKTtcclxuICAgICAgICBPYnN0YWNsZTYudHJhbnNmb3JtLnBvc2l0aW9uLnNldCg5MDAsIDQ2MCk7XHJcbiAgICAgICAgT2JzdGFjbGU2LmFkZFNwcml0ZSh0aGlzLnJlc291cmNlc1tcInJlZF9idXR0b25cIl0udGV4dHVyZSwgbmV3IFZlY3RvcjJfMS5WZWN0b3IyKDIuNSwgMikpO1xyXG4gICAgICAgIE9ic3RhY2xlNi5hZGRDb2xsaWRlcih0cnVlKTtcclxuICAgICAgICBPYnN0YWNsZTYuYWRkUmlnaWRib2R5KE9ic3RhY2xlNiwgMTAsIHRydWUpO1xyXG4gICAgICAgIHZhciBPYnN0YWNsZTcgPSB0aGlzLmNyZWF0ZU5ld0dhbWVPYmplY3QoKTtcclxuICAgICAgICBPYnN0YWNsZTcudHJhbnNmb3JtLnBvc2l0aW9uLnNldCgxNDQwLCAzNTApO1xyXG4gICAgICAgIE9ic3RhY2xlNy5hZGRTcHJpdGUodGhpcy5yZXNvdXJjZXNbXCJibHVlX2J1dHRvblwiXS50ZXh0dXJlLCBuZXcgVmVjdG9yMl8xLlZlY3RvcjIoMS4yLCAxLjIpKTtcclxuICAgICAgICBPYnN0YWNsZTcuYWRkQ29sbGlkZXIodHJ1ZSk7XHJcbiAgICAgICAgT2JzdGFjbGU3LmFkZFJpZ2lkYm9keShPYnN0YWNsZTcsIDIwLCB0cnVlLCBmYWxzZSwgMC4yKTtcclxuICAgICAgICBPYnN0YWNsZTcucm90YXRlR2FtZU9iamVjdCgwKTtcclxuICAgICAgICB2YXIgRGVzdHJ1Y3RpYmxlMSA9IG5ldyBEZXN0cnVjdGlibGVfMS5EZXN0cnVjdGlibGUoNTAwKTtcclxuICAgICAgICBEZXN0cnVjdGlibGUxLnRyYW5zZm9ybS5wb3NpdGlvbi5zZXQoMTA1MCwgNTYwKTtcclxuICAgICAgICBEZXN0cnVjdGlibGUxLmFkZFNwcml0ZSh0aGlzLnJlc291cmNlc1tcImNyYXRlXCJdLnRleHR1cmUsIG5ldyBWZWN0b3IyXzEuVmVjdG9yMigwLjcsIDAuNykpO1xyXG4gICAgICAgIERlc3RydWN0aWJsZTEuYWRkQ29sbGlkZXIodHJ1ZSk7XHJcbiAgICAgICAgRGVzdHJ1Y3RpYmxlMS5hZGRSaWdpZGJvZHkoRGVzdHJ1Y3RpYmxlMSwgNSwgZmFsc2UsIHRydWUsIDAuMSk7XHJcbiAgICAgICAgdmFyIERlc3RydWN0aWJsZTIgPSBuZXcgRGVzdHJ1Y3RpYmxlXzEuRGVzdHJ1Y3RpYmxlKDUwMCk7XHJcbiAgICAgICAgRGVzdHJ1Y3RpYmxlMi50cmFuc2Zvcm0ucG9zaXRpb24uc2V0KDExMTAsIDU2MCk7XHJcbiAgICAgICAgRGVzdHJ1Y3RpYmxlMi5hZGRTcHJpdGUodGhpcy5yZXNvdXJjZXNbXCJjcmF0ZVwiXS50ZXh0dXJlLCBuZXcgVmVjdG9yMl8xLlZlY3RvcjIoMC43LCAwLjcpKTtcclxuICAgICAgICBEZXN0cnVjdGlibGUyLmFkZENvbGxpZGVyKHRydWUpO1xyXG4gICAgICAgIERlc3RydWN0aWJsZTIuYWRkUmlnaWRib2R5KERlc3RydWN0aWJsZTIsIDUsIGZhbHNlLCB0cnVlLCAwLjEpO1xyXG4gICAgICAgIHZhciBEZXN0cnVjdGlibGUzID0gbmV3IERlc3RydWN0aWJsZV8xLkRlc3RydWN0aWJsZSg1MDApO1xyXG4gICAgICAgIERlc3RydWN0aWJsZTMudHJhbnNmb3JtLnBvc2l0aW9uLnNldCgxMTcwLCA1NjApO1xyXG4gICAgICAgIERlc3RydWN0aWJsZTMuYWRkU3ByaXRlKHRoaXMucmVzb3VyY2VzW1wiY3JhdGVcIl0udGV4dHVyZSwgbmV3IFZlY3RvcjJfMS5WZWN0b3IyKDAuNywgMC43KSk7XHJcbiAgICAgICAgRGVzdHJ1Y3RpYmxlMy5hZGRDb2xsaWRlcih0cnVlKTtcclxuICAgICAgICBEZXN0cnVjdGlibGUzLmFkZFJpZ2lkYm9keShEZXN0cnVjdGlibGUzLCA1LCBmYWxzZSwgdHJ1ZSwgMC4xKTtcclxuICAgICAgICB2YXIgRGVzdHJ1Y3RpYmxlNCA9IG5ldyBEZXN0cnVjdGlibGVfMS5EZXN0cnVjdGlibGUoNTAwKTtcclxuICAgICAgICBEZXN0cnVjdGlibGU0LnRyYW5zZm9ybS5wb3NpdGlvbi5zZXQoMTExMCwgNTEwKTtcclxuICAgICAgICBEZXN0cnVjdGlibGU0LmFkZFNwcml0ZSh0aGlzLnJlc291cmNlc1tcImNyYXRlXCJdLnRleHR1cmUsIG5ldyBWZWN0b3IyXzEuVmVjdG9yMigwLjcsIDAuNykpO1xyXG4gICAgICAgIERlc3RydWN0aWJsZTQuYWRkQ29sbGlkZXIodHJ1ZSk7XHJcbiAgICAgICAgRGVzdHJ1Y3RpYmxlNC5hZGRSaWdpZGJvZHkoRGVzdHJ1Y3RpYmxlNCwgNSwgZmFsc2UsIHRydWUsIDAuMSk7XHJcbiAgICAgICAgdmFyIERlc3RydWN0aWJsZTUgPSBuZXcgRGVzdHJ1Y3RpYmxlXzEuRGVzdHJ1Y3RpYmxlKDUwMCk7XHJcbiAgICAgICAgRGVzdHJ1Y3RpYmxlNS50cmFuc2Zvcm0ucG9zaXRpb24uc2V0KDExNzAsIDUxMCk7XHJcbiAgICAgICAgRGVzdHJ1Y3RpYmxlNS5hZGRTcHJpdGUodGhpcy5yZXNvdXJjZXNbXCJjcmF0ZVwiXS50ZXh0dXJlLCBuZXcgVmVjdG9yMl8xLlZlY3RvcjIoMC43LCAwLjcpKTtcclxuICAgICAgICBEZXN0cnVjdGlibGU1LmFkZENvbGxpZGVyKHRydWUpO1xyXG4gICAgICAgIERlc3RydWN0aWJsZTUuYWRkUmlnaWRib2R5KERlc3RydWN0aWJsZTUsIDUsIGZhbHNlLCB0cnVlLCAwLjEpO1xyXG4gICAgICAgIHZhciBEZXN0cnVjdGlibGU2ID0gbmV3IERlc3RydWN0aWJsZV8xLkRlc3RydWN0aWJsZSg1MDApO1xyXG4gICAgICAgIERlc3RydWN0aWJsZTYudHJhbnNmb3JtLnBvc2l0aW9uLnNldCgxMTEwLCA0MTApO1xyXG4gICAgICAgIERlc3RydWN0aWJsZTYuYWRkU3ByaXRlKHRoaXMucmVzb3VyY2VzW1wiY3JhdGVcIl0udGV4dHVyZSwgbmV3IFZlY3RvcjJfMS5WZWN0b3IyKDAuNywgMC43KSk7XHJcbiAgICAgICAgRGVzdHJ1Y3RpYmxlNi5hZGRDb2xsaWRlcih0cnVlKTtcclxuICAgICAgICBEZXN0cnVjdGlibGU2LmFkZFJpZ2lkYm9keShEZXN0cnVjdGlibGU2LCA1LCBmYWxzZSwgdHJ1ZSwgMC4xKTtcclxuICAgICAgICB2YXIgRGVzdHJ1Y3RpYmxlNyA9IG5ldyBEZXN0cnVjdGlibGVfMS5EZXN0cnVjdGlibGUoNTAwKTtcclxuICAgICAgICBEZXN0cnVjdGlibGU3LnRyYW5zZm9ybS5wb3NpdGlvbi5zZXQoMTE3MCwgNDAwKTtcclxuICAgICAgICBEZXN0cnVjdGlibGU3LmFkZFNwcml0ZSh0aGlzLnJlc291cmNlc1tcImNyYXRlXCJdLnRleHR1cmUsIG5ldyBWZWN0b3IyXzEuVmVjdG9yMigwLjcsIDAuNykpO1xyXG4gICAgICAgIERlc3RydWN0aWJsZTcuYWRkQ29sbGlkZXIodHJ1ZSk7XHJcbiAgICAgICAgRGVzdHJ1Y3RpYmxlNy5hZGRSaWdpZGJvZHkoRGVzdHJ1Y3RpYmxlNywgNSwgZmFsc2UsIHRydWUsIDAuMSk7XHJcbiAgICAgICAgdmFyIGdvYWwgPSBuZXcgR29hbF8xLkdvYWwoKTtcclxuICAgICAgICBnb2FsLnRyYW5zZm9ybS5wb3NpdGlvbi5zZXQoMTM2MCwgNjUwKTtcclxuICAgICAgICBnb2FsLmFkZFNwcml0ZSh0aGlzLnJlc291cmNlc1tcInllbGxvd19jaXJjbGVcIl0udGV4dHVyZSwgbmV3IFZlY3RvcjJfMS5WZWN0b3IyKDIsIDIpKTtcclxuICAgICAgICBnb2FsLmFkZENvbGxpZGVyKHRydWUpO1xyXG4gICAgICAgIGdvYWwuYWRkUmlnaWRib2R5KGdvYWwsIDEwLCB0cnVlKTtcclxuICAgICAgICB2YXIgbW92aW5nID0gbmV3IE1vdmluZ09ic3RhY2xlXzEuTW92aW5nT2JzdGFjbGUoNTAwLCB0cnVlKTtcclxuICAgICAgICBtb3ZpbmcudHJhbnNmb3JtLnBvc2l0aW9uLnNldCgxMjAwLCAzNTApO1xyXG4gICAgICAgIG1vdmluZy5hZGRTcHJpdGUodGhpcy5yZXNvdXJjZXNbXCJyZWRfYnV0dG9uXCJdLnRleHR1cmUsIG5ldyBWZWN0b3IyXzEuVmVjdG9yMigyLCAyKSk7XHJcbiAgICAgICAgbW92aW5nLmFkZENvbGxpZGVyKHRydWUpO1xyXG4gICAgICAgIG1vdmluZy5hZGRSaWdpZGJvZHkobW92aW5nLCAxMCwgdHJ1ZSwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuYWRkR2FtZU9iamVjdFRvQ29sbGVjdGlvbihtb3ZpbmcpO1xyXG4gICAgICAgIG1vdmluZy5lYXNpbmcgPSB0cnVlO1xyXG4gICAgICAgIG1vdmluZy5TZXRFYXNpbmdTdHJ1Y3RzKG5ldyBNb3ZpbmdPYnN0YWNsZV8xLkVhc2luZ1N0cnVjdCgxLCAyLCAzKSwgbmV3IE1vdmluZ09ic3RhY2xlXzEuRWFzaW5nU3RydWN0KDEsIDIuNSwgMykpO1xyXG4gICAgICAgIHZhciBtb3ZpbmdYID0gbW92aW5nLnRyYW5zZm9ybS5wb3NpdGlvbi54O1xyXG4gICAgICAgIHZhciBtb3ZpbmdZID0gbW92aW5nLnRyYW5zZm9ybS5wb3NpdGlvbi55O1xyXG4gICAgICAgIG1vdmluZy5TZXRTcGxpbmVQb2ludHMoW1xyXG4gICAgICAgICAgICBuZXcgVmVjdG9yMl8xLlZlY3RvcjIobW92aW5nWCArIDAsIG1vdmluZ1kgKyAwKSxcclxuICAgICAgICAgICAgbmV3IFZlY3RvcjJfMS5WZWN0b3IyKG1vdmluZ1ggLSAxMjAsIG1vdmluZ1kgLSA1MCksXHJcbiAgICAgICAgICAgIG5ldyBWZWN0b3IyXzEuVmVjdG9yMihtb3ZpbmdYIC0gMjQwLCBtb3ZpbmdZIC0gMTAwKSxcclxuICAgICAgICAgICAgbmV3IFZlY3RvcjJfMS5WZWN0b3IyKG1vdmluZ1ggLSA1MDAsIG1vdmluZ1kgKyAzMTApLFxyXG4gICAgICAgICAgICBuZXcgVmVjdG9yMl8xLlZlY3RvcjIobW92aW5nWCAtIDcwMCwgbW92aW5nWSAtIDUwKSxcclxuICAgICAgICAgICAgbmV3IFZlY3RvcjJfMS5WZWN0b3IyKG1vdmluZ1ggLSA4NTAsIG1vdmluZ1kgLSAxNTApXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgdmFyIG1vdmluZzIgPSBuZXcgTW92aW5nT2JzdGFjbGVfMS5Nb3ZpbmdPYnN0YWNsZSg1MDAsIHRydWUpO1xyXG4gICAgICAgIG1vdmluZzIudHJhbnNmb3JtLnBvc2l0aW9uLnNldCgxNTAsIDI1MCk7XHJcbiAgICAgICAgbW92aW5nMi5hZGRTcHJpdGUodGhpcy5yZXNvdXJjZXNbXCJyZWRfYnV0dG9uXCJdLnRleHR1cmUsIG5ldyBWZWN0b3IyXzEuVmVjdG9yMigyLCAyKSk7XHJcbiAgICAgICAgbW92aW5nMi5hZGRDb2xsaWRlcih0cnVlKTtcclxuICAgICAgICBtb3ZpbmcyLmFkZFJpZ2lkYm9keShtb3ZpbmcyLCAxMCwgdHJ1ZSwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuYWRkR2FtZU9iamVjdFRvQ29sbGVjdGlvbihtb3ZpbmcyKTtcclxuICAgICAgICBtb3ZpbmcyLmVhc2luZyA9IHRydWU7XHJcbiAgICAgICAgbW92aW5nMi5TZXRFYXNpbmdTdHJ1Y3RzKG5ldyBNb3ZpbmdPYnN0YWNsZV8xLkVhc2luZ1N0cnVjdCgxLCAzLCAxKSwgbmV3IE1vdmluZ09ic3RhY2xlXzEuRWFzaW5nU3RydWN0KDEsIDMsIDEpKTtcclxuICAgICAgICB2YXIgbW92aW5nMlggPSBtb3ZpbmcyLnRyYW5zZm9ybS5wb3NpdGlvbi54O1xyXG4gICAgICAgIHZhciBtb3ZpbmcyWSA9IG1vdmluZzIudHJhbnNmb3JtLnBvc2l0aW9uLnk7XHJcbiAgICAgICAgbW92aW5nMi5TZXRTcGxpbmVQb2ludHMoW1xyXG4gICAgICAgICAgICBuZXcgVmVjdG9yMl8xLlZlY3RvcjIobW92aW5nMlggKyA1MCwgbW92aW5nMlkgKyAtNTApLFxyXG4gICAgICAgICAgICBuZXcgVmVjdG9yMl8xLlZlY3RvcjIobW92aW5nMlggKyAwLCBtb3ZpbmcyWSArIDApLFxyXG4gICAgICAgICAgICBuZXcgVmVjdG9yMl8xLlZlY3RvcjIobW92aW5nMlggKyAzMDAsIG1vdmluZzJZIC0gNTApLFxyXG4gICAgICAgICAgICBuZXcgVmVjdG9yMl8xLlZlY3RvcjIobW92aW5nMlggKyA1MCwgbW92aW5nMlkgKyAxMTApLFxyXG4gICAgICAgICAgICBuZXcgVmVjdG9yMl8xLlZlY3RvcjIobW92aW5nMlggKyAyMDAsIG1vdmluZzJZICsgODApLFxyXG4gICAgICAgICAgICBuZXcgVmVjdG9yMl8xLlZlY3RvcjIobW92aW5nMlggKyAyNjAsIG1vdmluZzJZICsgMTgwKSxcclxuICAgICAgICAgICAgbmV3IFZlY3RvcjJfMS5WZWN0b3IyKG1vdmluZzJYICsgMjcwLCBtb3ZpbmcyWSArIDI1MClcclxuICAgICAgICBdKTtcclxuICAgIH07XHJcbiAgICBTY2VuZU1hbmFnZXIucHJvdG90eXBlLkxldmVsVGhyZWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIE9ic3RhY2xlMSA9IHRoaXMuY3JlYXRlTmV3R2FtZU9iamVjdCgpO1xyXG4gICAgICAgIE9ic3RhY2xlMS50cmFuc2Zvcm0ucG9zaXRpb24uc2V0KDExMDAsIDc1NSk7XHJcbiAgICAgICAgT2JzdGFjbGUxLmFkZFNwcml0ZSh0aGlzLnJlc291cmNlc1tcImdyZWVuX2J1dHRvblwiXS50ZXh0dXJlLCBuZXcgVmVjdG9yMl8xLlZlY3RvcjIoNCwgMikpO1xyXG4gICAgICAgIE9ic3RhY2xlMS5hZGRDb2xsaWRlcih0cnVlKTtcclxuICAgICAgICBPYnN0YWNsZTEuYWRkUmlnaWRib2R5KE9ic3RhY2xlMSwgMTAsIHRydWUpO1xyXG4gICAgICAgIE9ic3RhY2xlMS5yb3RhdGVHYW1lT2JqZWN0KDApO1xyXG4gICAgICAgIHZhciBPYnN0YWNsZTIgPSB0aGlzLmNyZWF0ZU5ld0dhbWVPYmplY3QoKTtcclxuICAgICAgICBPYnN0YWNsZTIudHJhbnNmb3JtLnBvc2l0aW9uLnNldCgxMzcwLCA1NjApO1xyXG4gICAgICAgIE9ic3RhY2xlMi5hZGRTcHJpdGUodGhpcy5yZXNvdXJjZXNbXCJibHVlX2J1dHRvblwiXS50ZXh0dXJlLCBuZXcgVmVjdG9yMl8xLlZlY3RvcjIoMS44LCAxLjApKTtcclxuICAgICAgICBPYnN0YWNsZTIuYWRkQ29sbGlkZXIodHJ1ZSk7XHJcbiAgICAgICAgT2JzdGFjbGUyLmFkZFJpZ2lkYm9keShPYnN0YWNsZTIsIDIwLCB0cnVlLCBmYWxzZSwgMC4yKTtcclxuICAgICAgICBPYnN0YWNsZTIucm90YXRlR2FtZU9iamVjdCg5MCk7XHJcbiAgICAgICAgdmFyIE9ic3RhY2xlMyA9IHRoaXMuY3JlYXRlTmV3R2FtZU9iamVjdCgpO1xyXG4gICAgICAgIE9ic3RhY2xlMy50cmFuc2Zvcm0ucG9zaXRpb24uc2V0KDExNzUsIDUwMCk7XHJcbiAgICAgICAgT2JzdGFjbGUzLmFkZFNwcml0ZSh0aGlzLnJlc291cmNlc1tcImJsdWVfYnV0dG9uXCJdLnRleHR1cmUsIG5ldyBWZWN0b3IyXzEuVmVjdG9yMigyLjAsIDEuMCkpO1xyXG4gICAgICAgIE9ic3RhY2xlMy5hZGRDb2xsaWRlcih0cnVlKTtcclxuICAgICAgICBPYnN0YWNsZTMuYWRkUmlnaWRib2R5KE9ic3RhY2xlMywgMjAsIHRydWUsIGZhbHNlLCAwLjIpO1xyXG4gICAgICAgIE9ic3RhY2xlMy5yb3RhdGVHYW1lT2JqZWN0KDkwKTtcclxuICAgICAgICB2YXIgT2JzdGFjbGU0ID0gdGhpcy5jcmVhdGVOZXdHYW1lT2JqZWN0KCk7XHJcbiAgICAgICAgT2JzdGFjbGU0LnRyYW5zZm9ybS5wb3NpdGlvbi5zZXQoNzAwLCAzNzApO1xyXG4gICAgICAgIE9ic3RhY2xlNC5hZGRTcHJpdGUodGhpcy5yZXNvdXJjZXNbXCJ0aWxlX2Zsb2F0X21pZFwiXS50ZXh0dXJlLCBuZXcgVmVjdG9yMl8xLlZlY3RvcjIoMi4wLCAxLjApKTtcclxuICAgICAgICBPYnN0YWNsZTQuYWRkQ29sbGlkZXIodHJ1ZSk7XHJcbiAgICAgICAgT2JzdGFjbGU0LmFkZFJpZ2lkYm9keShPYnN0YWNsZTQsIDIwLCB0cnVlLCBmYWxzZSwgMC4yKTtcclxuICAgICAgICBPYnN0YWNsZTQucm90YXRlR2FtZU9iamVjdCgzMjApO1xyXG4gICAgICAgIHZhciBPYnN0YWNsZTUgPSB0aGlzLmNyZWF0ZU5ld0dhbWVPYmplY3QoKTtcclxuICAgICAgICBPYnN0YWNsZTUudHJhbnNmb3JtLnBvc2l0aW9uLnNldCg0NjAsIDYwMCk7XHJcbiAgICAgICAgT2JzdGFjbGU1LmFkZFNwcml0ZSh0aGlzLnJlc291cmNlc1tcImdyZWVuX2J1dHRvblwiXS50ZXh0dXJlLCBuZXcgVmVjdG9yMl8xLlZlY3RvcjIoMiwgMikpO1xyXG4gICAgICAgIE9ic3RhY2xlNS5hZGRDb2xsaWRlcih0cnVlKTtcclxuICAgICAgICBPYnN0YWNsZTUuYWRkUmlnaWRib2R5KE9ic3RhY2xlNSwgMTAsIHRydWUpO1xyXG4gICAgICAgIE9ic3RhY2xlNS5yb3RhdGVHYW1lT2JqZWN0KDApO1xyXG4gICAgICAgIHZhciBEZXN0cnVjdGlibGUxID0gbmV3IERlc3RydWN0aWJsZV8xLkRlc3RydWN0aWJsZSg1MDApO1xyXG4gICAgICAgIERlc3RydWN0aWJsZTEudHJhbnNmb3JtLnBvc2l0aW9uLnNldCg0MDAsIDQwMCk7XHJcbiAgICAgICAgRGVzdHJ1Y3RpYmxlMS5hZGRTcHJpdGUodGhpcy5yZXNvdXJjZXNbXCJjcmF0ZVwiXS50ZXh0dXJlLCBuZXcgVmVjdG9yMl8xLlZlY3RvcjIoMC43LCAwLjcpKTtcclxuICAgICAgICBEZXN0cnVjdGlibGUxLmFkZENvbGxpZGVyKHRydWUpO1xyXG4gICAgICAgIERlc3RydWN0aWJsZTEuYWRkUmlnaWRib2R5KERlc3RydWN0aWJsZTEsIDUsIGZhbHNlLCB0cnVlLCAwLjEpO1xyXG4gICAgICAgIERlc3RydWN0aWJsZTEucm90YXRlR2FtZU9iamVjdCgxMjApO1xyXG4gICAgICAgIHZhciBEZXN0cnVjdGlibGUyID0gbmV3IERlc3RydWN0aWJsZV8xLkRlc3RydWN0aWJsZSg1MDApO1xyXG4gICAgICAgIERlc3RydWN0aWJsZTIudHJhbnNmb3JtLnBvc2l0aW9uLnNldCg2MDAsIDQwMCk7XHJcbiAgICAgICAgRGVzdHJ1Y3RpYmxlMi5hZGRTcHJpdGUodGhpcy5yZXNvdXJjZXNbXCJjcmF0ZVwiXS50ZXh0dXJlLCBuZXcgVmVjdG9yMl8xLlZlY3RvcjIoMC43LCAwLjcpKTtcclxuICAgICAgICBEZXN0cnVjdGlibGUyLmFkZENvbGxpZGVyKHRydWUpO1xyXG4gICAgICAgIERlc3RydWN0aWJsZTIuYWRkUmlnaWRib2R5KERlc3RydWN0aWJsZTIsIDUsIGZhbHNlLCB0cnVlLCAwLjEpO1xyXG4gICAgICAgIERlc3RydWN0aWJsZTIucm90YXRlR2FtZU9iamVjdCgxMjApO1xyXG4gICAgICAgIHZhciBEZXN0cnVjdGlibGUzID0gbmV3IERlc3RydWN0aWJsZV8xLkRlc3RydWN0aWJsZSg1MDApO1xyXG4gICAgICAgIERlc3RydWN0aWJsZTMudHJhbnNmb3JtLnBvc2l0aW9uLnNldCg1MDAsIDQwMCk7XHJcbiAgICAgICAgRGVzdHJ1Y3RpYmxlMy5hZGRTcHJpdGUodGhpcy5yZXNvdXJjZXNbXCJjcmF0ZVwiXS50ZXh0dXJlLCBuZXcgVmVjdG9yMl8xLlZlY3RvcjIoMC43LCAwLjcpKTtcclxuICAgICAgICBEZXN0cnVjdGlibGUzLmFkZENvbGxpZGVyKHRydWUpO1xyXG4gICAgICAgIERlc3RydWN0aWJsZTMuYWRkUmlnaWRib2R5KERlc3RydWN0aWJsZTMsIDUsIGZhbHNlLCB0cnVlLCAwLjEpO1xyXG4gICAgICAgIERlc3RydWN0aWJsZTMucm90YXRlR2FtZU9iamVjdCgxMjApO1xyXG4gICAgICAgIHZhciBnb2FsID0gbmV3IEdvYWxfMS5Hb2FsKCk7XHJcbiAgICAgICAgZ29hbC50cmFuc2Zvcm0ucG9zaXRpb24uc2V0KDEyOTAsIDcyMCk7XHJcbiAgICAgICAgZ29hbC5hZGRTcHJpdGUodGhpcy5yZXNvdXJjZXNbXCJ5ZWxsb3dfY2lyY2xlXCJdLnRleHR1cmUsIG5ldyBWZWN0b3IyXzEuVmVjdG9yMigyLCAyKSk7XHJcbiAgICAgICAgZ29hbC5hZGRDb2xsaWRlcih0cnVlKTtcclxuICAgICAgICBnb2FsLmFkZFJpZ2lkYm9keShnb2FsLCAxMCwgdHJ1ZSk7XHJcbiAgICAgICAgdmFyIG1vdmluZyA9IG5ldyBNb3ZpbmdPYnN0YWNsZV8xLk1vdmluZ09ic3RhY2xlKDI1MDAsIGZhbHNlKTtcclxuICAgICAgICBtb3ZpbmcudHJhbnNmb3JtLnBvc2l0aW9uLnNldCgxMjgwLCAzMjApO1xyXG4gICAgICAgIG1vdmluZy5hZGRTcHJpdGUodGhpcy5yZXNvdXJjZXNbXCJyZWRfYnV0dG9uXCJdLnRleHR1cmUsIG5ldyBWZWN0b3IyXzEuVmVjdG9yMigyLjcsIDEpKTtcclxuICAgICAgICBtb3ZpbmcuYWRkQ29sbGlkZXIodHJ1ZSk7XHJcbiAgICAgICAgbW92aW5nLmFkZFJpZ2lkYm9keShtb3ZpbmcsIDEwLCB0cnVlLCBmYWxzZSk7XHJcbiAgICAgICAgbW92aW5nLnJvdGF0ZUdhbWVPYmplY3QoLTI1KTtcclxuICAgICAgICB0aGlzLmFkZEdhbWVPYmplY3RUb0NvbGxlY3Rpb24obW92aW5nKTtcclxuICAgICAgICBtb3ZpbmcuU2V0RWFzaW5nU3RydWN0cyhuZXcgTW92aW5nT2JzdGFjbGVfMS5FYXNpbmdTdHJ1Y3QoMSwgMiwgMyksIG5ldyBNb3ZpbmdPYnN0YWNsZV8xLkVhc2luZ1N0cnVjdCgxLCAyLjUsIDMpKTtcclxuICAgICAgICB2YXIgbW92aW5nWCA9IG1vdmluZy50cmFuc2Zvcm0ucG9zaXRpb24ueDtcclxuICAgICAgICB2YXIgbW92aW5nWSA9IG1vdmluZy50cmFuc2Zvcm0ucG9zaXRpb24ueTtcclxuICAgICAgICBtb3ZpbmcuU2V0U3BsaW5lUG9pbnRzKFtcclxuICAgICAgICAgICAgbmV3IFZlY3RvcjJfMS5WZWN0b3IyKG1vdmluZ1ggKyAxNzUsIG1vdmluZ1kgKyAwKSxcclxuICAgICAgICAgICAgbmV3IFZlY3RvcjJfMS5WZWN0b3IyKG1vdmluZ1ggKyAxNzUsIG1vdmluZ1kgKyA1MCksXHJcbiAgICAgICAgICAgIG5ldyBWZWN0b3IyXzEuVmVjdG9yMihtb3ZpbmdYICsgMTc1LCBtb3ZpbmdZICsgMTkwKSxcclxuICAgICAgICAgICAgbmV3IFZlY3RvcjJfMS5WZWN0b3IyKG1vdmluZ1ggKyAxNzUsIG1vdmluZ1kgKyAzMTApLFxyXG4gICAgICAgICAgICBuZXcgVmVjdG9yMl8xLlZlY3RvcjIobW92aW5nWCArIDE3NSwgbW92aW5nWSArIDQxMCksXHJcbiAgICAgICAgICAgIG5ldyBWZWN0b3IyXzEuVmVjdG9yMihtb3ZpbmdYICsgMTU1LCBtb3ZpbmdZICsgNDgwKSxcclxuICAgICAgICAgICAgbmV3IFZlY3RvcjJfMS5WZWN0b3IyKG1vdmluZ1ggKyAxMjUsIG1vdmluZ1kgKyA0ODApLFxyXG4gICAgICAgICAgICBuZXcgVmVjdG9yMl8xLlZlY3RvcjIobW92aW5nWCArIDAsIG1vdmluZ1kgKyA1MDApLFxyXG4gICAgICAgICAgICBuZXcgVmVjdG9yMl8xLlZlY3RvcjIobW92aW5nWCwgbW92aW5nWSArIDQxMCksXHJcbiAgICAgICAgICAgIG5ldyBWZWN0b3IyXzEuVmVjdG9yMihtb3ZpbmdYLCBtb3ZpbmdZICsgMzEwKSxcclxuICAgICAgICAgICAgbmV3IFZlY3RvcjJfMS5WZWN0b3IyKG1vdmluZ1gsIG1vdmluZ1kgKyAxOTApLFxyXG4gICAgICAgICAgICBuZXcgVmVjdG9yMl8xLlZlY3RvcjIobW92aW5nWCwgbW92aW5nWSArIDUwKSxcclxuICAgICAgICAgICAgbmV3IFZlY3RvcjJfMS5WZWN0b3IyKG1vdmluZ1gsIG1vdmluZ1kgKyAwKVxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIHZhciBtb3ZpbmcyID0gbmV3IE1vdmluZ09ic3RhY2xlXzEuTW92aW5nT2JzdGFjbGUoNTAwLCB0cnVlKTtcclxuICAgICAgICBtb3ZpbmcyLnRyYW5zZm9ybS5wb3NpdGlvbi5zZXQoMTUwLCAyNTApO1xyXG4gICAgICAgIG1vdmluZzIuYWRkU3ByaXRlKHRoaXMucmVzb3VyY2VzW1wicmVkX2J1dHRvblwiXS50ZXh0dXJlLCBuZXcgVmVjdG9yMl8xLlZlY3RvcjIoMiwgMikpO1xyXG4gICAgICAgIG1vdmluZzIuYWRkQ29sbGlkZXIodHJ1ZSk7XHJcbiAgICAgICAgbW92aW5nMi5hZGRSaWdpZGJvZHkobW92aW5nMiwgMTAsIHRydWUsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLmFkZEdhbWVPYmplY3RUb0NvbGxlY3Rpb24obW92aW5nMik7XHJcbiAgICAgICAgbW92aW5nMi5lYXNpbmcgPSB0cnVlO1xyXG4gICAgICAgIG1vdmluZzIuU2V0RWFzaW5nU3RydWN0cyhuZXcgTW92aW5nT2JzdGFjbGVfMS5FYXNpbmdTdHJ1Y3QoMSwgMSwgMSksIG5ldyBNb3ZpbmdPYnN0YWNsZV8xLkVhc2luZ1N0cnVjdCgxLCAzLCAxKSk7XHJcbiAgICAgICAgdmFyIG1vdmluZzJYID0gbW92aW5nMi50cmFuc2Zvcm0ucG9zaXRpb24ueDtcclxuICAgICAgICB2YXIgbW92aW5nMlkgPSBtb3ZpbmcyLnRyYW5zZm9ybS5wb3NpdGlvbi55O1xyXG4gICAgICAgIG1vdmluZzIuU2V0U3BsaW5lUG9pbnRzKFtcclxuICAgICAgICAgICAgbmV3IFZlY3RvcjJfMS5WZWN0b3IyKG1vdmluZzJYICsgNTAsIG1vdmluZzJZICsgLTUwKSxcclxuICAgICAgICAgICAgbmV3IFZlY3RvcjJfMS5WZWN0b3IyKG1vdmluZzJYICsgMCwgbW92aW5nMlkgKyAwKSxcclxuICAgICAgICAgICAgbmV3IFZlY3RvcjJfMS5WZWN0b3IyKG1vdmluZzJYICsgMzAwLCBtb3ZpbmcyWSAtIDUwKSxcclxuICAgICAgICAgICAgbmV3IFZlY3RvcjJfMS5WZWN0b3IyKG1vdmluZzJYICsgNTAsIG1vdmluZzJZICsgMTEwKSxcclxuICAgICAgICAgICAgbmV3IFZlY3RvcjJfMS5WZWN0b3IyKG1vdmluZzJYICsgMjAwLCBtb3ZpbmcyWSArIDgwKSxcclxuICAgICAgICAgICAgbmV3IFZlY3RvcjJfMS5WZWN0b3IyKG1vdmluZzJYICsgMjYwLCBtb3ZpbmcyWSArIDE4MCksXHJcbiAgICAgICAgICAgIG5ldyBWZWN0b3IyXzEuVmVjdG9yMihtb3ZpbmcyWCArIDI3MCwgbW92aW5nMlkgKyAyNTApXHJcbiAgICAgICAgXSk7XHJcbiAgICB9O1xyXG4gICAgU2NlbmVNYW5hZ2VyLnByb3RvdHlwZS5MZXZlbEZvdXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIE9ic3RhY2xlMSA9IHRoaXMuY3JlYXRlTmV3R2FtZU9iamVjdCgpO1xyXG4gICAgICAgIE9ic3RhY2xlMS50cmFuc2Zvcm0ucG9zaXRpb24uc2V0KDExMDAsIDc1NSk7XHJcbiAgICAgICAgT2JzdGFjbGUxLmFkZFNwcml0ZSh0aGlzLnJlc291cmNlc1tcImdyZWVuX2J1dHRvblwiXS50ZXh0dXJlLCBuZXcgVmVjdG9yMl8xLlZlY3RvcjIoNCwgMikpO1xyXG4gICAgICAgIE9ic3RhY2xlMS5hZGRDb2xsaWRlcih0cnVlKTtcclxuICAgICAgICBPYnN0YWNsZTEuYWRkUmlnaWRib2R5KE9ic3RhY2xlMSwgMTAsIGZhbHNlKTtcclxuICAgICAgICBPYnN0YWNsZTEucm90YXRlR2FtZU9iamVjdCgwKTtcclxuICAgICAgICB2YXIgT2JzdGFjbGUyID0gdGhpcy5jcmVhdGVOZXdHYW1lT2JqZWN0KCk7XHJcbiAgICAgICAgT2JzdGFjbGUyLnRyYW5zZm9ybS5wb3NpdGlvbi5zZXQoMTM3MCwgNTYwKTtcclxuICAgICAgICBPYnN0YWNsZTIuYWRkU3ByaXRlKHRoaXMucmVzb3VyY2VzW1wiYmx1ZV9idXR0b25cIl0udGV4dHVyZSwgbmV3IFZlY3RvcjJfMS5WZWN0b3IyKDEuOCwgMS4wKSk7XHJcbiAgICAgICAgT2JzdGFjbGUyLmFkZENvbGxpZGVyKHRydWUpO1xyXG4gICAgICAgIE9ic3RhY2xlMi5hZGRSaWdpZGJvZHkoT2JzdGFjbGUyLCAyMCwgZmFsc2UsIGZhbHNlLCAwLjIpO1xyXG4gICAgICAgIE9ic3RhY2xlMi5yb3RhdGVHYW1lT2JqZWN0KDkwKTtcclxuICAgICAgICB2YXIgT2JzdGFjbGUzID0gdGhpcy5jcmVhdGVOZXdHYW1lT2JqZWN0KCk7XHJcbiAgICAgICAgT2JzdGFjbGUzLnRyYW5zZm9ybS5wb3NpdGlvbi5zZXQoMTE3NSwgNTAwKTtcclxuICAgICAgICBPYnN0YWNsZTMuYWRkU3ByaXRlKHRoaXMucmVzb3VyY2VzW1wiYmx1ZV9idXR0b25cIl0udGV4dHVyZSwgbmV3IFZlY3RvcjJfMS5WZWN0b3IyKDIuMCwgMS4wKSk7XHJcbiAgICAgICAgT2JzdGFjbGUzLmFkZENvbGxpZGVyKHRydWUpO1xyXG4gICAgICAgIE9ic3RhY2xlMy5hZGRSaWdpZGJvZHkoT2JzdGFjbGUzLCAyMCwgZmFsc2UsIGZhbHNlLCAwLjIpO1xyXG4gICAgICAgIE9ic3RhY2xlMy5yb3RhdGVHYW1lT2JqZWN0KDkwKTtcclxuICAgICAgICB2YXIgT2JzdGFjbGU0ID0gdGhpcy5jcmVhdGVOZXdHYW1lT2JqZWN0KCk7XHJcbiAgICAgICAgT2JzdGFjbGU0LnRyYW5zZm9ybS5wb3NpdGlvbi5zZXQoNzAwLCAzNzApO1xyXG4gICAgICAgIE9ic3RhY2xlNC5hZGRTcHJpdGUodGhpcy5yZXNvdXJjZXNbXCJ0aWxlX2Zsb2F0X21pZFwiXS50ZXh0dXJlLCBuZXcgVmVjdG9yMl8xLlZlY3RvcjIoMi4wLCAxLjApKTtcclxuICAgICAgICBPYnN0YWNsZTQuYWRkQ29sbGlkZXIodHJ1ZSk7XHJcbiAgICAgICAgT2JzdGFjbGU0LmFkZFJpZ2lkYm9keShPYnN0YWNsZTQsIDIwLCBmYWxzZSwgZmFsc2UsIDAuMik7XHJcbiAgICAgICAgT2JzdGFjbGU0LnJvdGF0ZUdhbWVPYmplY3QoMzIwKTtcclxuICAgICAgICB2YXIgT2JzdGFjbGU1ID0gdGhpcy5jcmVhdGVOZXdHYW1lT2JqZWN0KCk7XHJcbiAgICAgICAgT2JzdGFjbGU1LnRyYW5zZm9ybS5wb3NpdGlvbi5zZXQoNDYwLCA2MDApO1xyXG4gICAgICAgIE9ic3RhY2xlNS5hZGRTcHJpdGUodGhpcy5yZXNvdXJjZXNbXCJncmVlbl9idXR0b25cIl0udGV4dHVyZSwgbmV3IFZlY3RvcjJfMS5WZWN0b3IyKDIsIDIpKTtcclxuICAgICAgICBPYnN0YWNsZTUuYWRkQ29sbGlkZXIodHJ1ZSk7XHJcbiAgICAgICAgT2JzdGFjbGU1LmFkZFJpZ2lkYm9keShPYnN0YWNsZTUsIDEwLCBmYWxzZSwgZmFsc2UpO1xyXG4gICAgICAgIHZhciBPYnN0YWNsZTYgPSB0aGlzLmNyZWF0ZU5ld0dhbWVPYmplY3QoKTtcclxuICAgICAgICBPYnN0YWNsZTYudHJhbnNmb3JtLnBvc2l0aW9uLnNldCg5MDAsIDQ2MCk7XHJcbiAgICAgICAgT2JzdGFjbGU2LmFkZFNwcml0ZSh0aGlzLnJlc291cmNlc1tcInJlZF9idXR0b25cIl0udGV4dHVyZSwgbmV3IFZlY3RvcjJfMS5WZWN0b3IyKDIuNSwgMikpO1xyXG4gICAgICAgIE9ic3RhY2xlNi5hZGRDb2xsaWRlcih0cnVlKTtcclxuICAgICAgICBPYnN0YWNsZTYuYWRkUmlnaWRib2R5KE9ic3RhY2xlNiwgMTAsIHRydWUpO1xyXG4gICAgICAgIHZhciBPYnN0YWNsZTcgPSB0aGlzLmNyZWF0ZU5ld0dhbWVPYmplY3QoKTtcclxuICAgICAgICBPYnN0YWNsZTcudHJhbnNmb3JtLnBvc2l0aW9uLnNldCgzMDAsIDI1MCk7XHJcbiAgICAgICAgT2JzdGFjbGU3LmFkZFNwcml0ZSh0aGlzLnJlc291cmNlc1tcImJsdWVfYnV0dG9uXCJdLnRleHR1cmUsIG5ldyBWZWN0b3IyXzEuVmVjdG9yMigxLjIsIDEuMikpO1xyXG4gICAgICAgIE9ic3RhY2xlNy5hZGRDb2xsaWRlcih0cnVlKTtcclxuICAgICAgICBPYnN0YWNsZTcuYWRkUmlnaWRib2R5KE9ic3RhY2xlNywgMjAsIHRydWUsIGZhbHNlLCAwLjIpO1xyXG4gICAgICAgIE9ic3RhY2xlNy5yb3RhdGVHYW1lT2JqZWN0KDApO1xyXG4gICAgICAgIHZhciBPYnN0YWNsZTggPSB0aGlzLmNyZWF0ZU5ld0dhbWVPYmplY3QoKTtcclxuICAgICAgICBPYnN0YWNsZTgudHJhbnNmb3JtLnBvc2l0aW9uLnNldCgxMzAwLCAyNTApO1xyXG4gICAgICAgIE9ic3RhY2xlOC5hZGRTcHJpdGUodGhpcy5yZXNvdXJjZXNbXCJibHVlX2J1dHRvblwiXS50ZXh0dXJlLCBuZXcgVmVjdG9yMl8xLlZlY3RvcjIoMS4yLCAxLjIpKTtcclxuICAgICAgICBPYnN0YWNsZTguYWRkQ29sbGlkZXIodHJ1ZSk7XHJcbiAgICAgICAgT2JzdGFjbGU4LmFkZFJpZ2lkYm9keShPYnN0YWNsZTgsIDIwLCB0cnVlLCBmYWxzZSwgMC4yKTtcclxuICAgICAgICBPYnN0YWNsZTgucm90YXRlR2FtZU9iamVjdCg0NSk7XHJcbiAgICAgICAgdmFyIERlc3RydWN0aWJsZTEgPSB0aGlzLmNyZWF0ZU5ld0dhbWVPYmplY3QoKTtcclxuICAgICAgICBEZXN0cnVjdGlibGUxLnRyYW5zZm9ybS5wb3NpdGlvbi5zZXQoNDAwLCA0MDApO1xyXG4gICAgICAgIERlc3RydWN0aWJsZTEuYWRkU3ByaXRlKHRoaXMucmVzb3VyY2VzW1wiY3JhdGVcIl0udGV4dHVyZSwgbmV3IFZlY3RvcjJfMS5WZWN0b3IyKDAuNywgMC43KSk7XHJcbiAgICAgICAgRGVzdHJ1Y3RpYmxlMS5hZGRDb2xsaWRlcih0cnVlKTtcclxuICAgICAgICBEZXN0cnVjdGlibGUxLmFkZFJpZ2lkYm9keShEZXN0cnVjdGlibGUxLCA1LCBmYWxzZSwgZmFsc2UsIDAuMSk7XHJcbiAgICAgICAgRGVzdHJ1Y3RpYmxlMS5yb3RhdGVHYW1lT2JqZWN0KDEyMCk7XHJcbiAgICAgICAgdmFyIERlc3RydWN0aWJsZTIgPSB0aGlzLmNyZWF0ZU5ld0dhbWVPYmplY3QoKTtcclxuICAgICAgICBEZXN0cnVjdGlibGUyLnRyYW5zZm9ybS5wb3NpdGlvbi5zZXQoNjAwLCA0MDApO1xyXG4gICAgICAgIERlc3RydWN0aWJsZTIuYWRkU3ByaXRlKHRoaXMucmVzb3VyY2VzW1wiY3JhdGVcIl0udGV4dHVyZSwgbmV3IFZlY3RvcjJfMS5WZWN0b3IyKDAuNywgMC43KSk7XHJcbiAgICAgICAgRGVzdHJ1Y3RpYmxlMi5hZGRDb2xsaWRlcih0cnVlKTtcclxuICAgICAgICBEZXN0cnVjdGlibGUyLmFkZFJpZ2lkYm9keShEZXN0cnVjdGlibGUyLCA1LCBmYWxzZSwgZmFsc2UsIDAuMSk7XHJcbiAgICAgICAgRGVzdHJ1Y3RpYmxlMi5yb3RhdGVHYW1lT2JqZWN0KDEyMCk7XHJcbiAgICAgICAgdmFyIERlc3RydWN0aWJsZTMgPSB0aGlzLmNyZWF0ZU5ld0dhbWVPYmplY3QoKTtcclxuICAgICAgICBEZXN0cnVjdGlibGUzLnRyYW5zZm9ybS5wb3NpdGlvbi5zZXQoNTAwLCA0MDApO1xyXG4gICAgICAgIERlc3RydWN0aWJsZTMuYWRkU3ByaXRlKHRoaXMucmVzb3VyY2VzW1wiY3JhdGVcIl0udGV4dHVyZSwgbmV3IFZlY3RvcjJfMS5WZWN0b3IyKDAuNywgMC43KSk7XHJcbiAgICAgICAgRGVzdHJ1Y3RpYmxlMy5hZGRDb2xsaWRlcih0cnVlKTtcclxuICAgICAgICBEZXN0cnVjdGlibGUzLmFkZFJpZ2lkYm9keShEZXN0cnVjdGlibGUzLCA1LCBmYWxzZSwgZmFsc2UsIDAuMSk7XHJcbiAgICAgICAgRGVzdHJ1Y3RpYmxlMy5yb3RhdGVHYW1lT2JqZWN0KDEyMCk7XHJcbiAgICAgICAgdmFyIERlc3RydWN0aWJsZTQgPSB0aGlzLmNyZWF0ZU5ld0dhbWVPYmplY3QoKTtcclxuICAgICAgICBEZXN0cnVjdGlibGU0LnRyYW5zZm9ybS5wb3NpdGlvbi5zZXQoMjAwLCA0MDApO1xyXG4gICAgICAgIERlc3RydWN0aWJsZTQuYWRkU3ByaXRlKHRoaXMucmVzb3VyY2VzW1wiY3JhdGVcIl0udGV4dHVyZSwgbmV3IFZlY3RvcjJfMS5WZWN0b3IyKDAuNywgMC43KSk7XHJcbiAgICAgICAgRGVzdHJ1Y3RpYmxlNC5hZGRDb2xsaWRlcih0cnVlKTtcclxuICAgICAgICBEZXN0cnVjdGlibGU0LmFkZFJpZ2lkYm9keShEZXN0cnVjdGlibGU0LCA1LCBmYWxzZSwgZmFsc2UsIDAuMSk7XHJcbiAgICAgICAgRGVzdHJ1Y3RpYmxlNC5yb3RhdGVHYW1lT2JqZWN0KDEyMCk7XHJcbiAgICAgICAgdmFyIERlc3RydWN0aWJsZTUgPSB0aGlzLmNyZWF0ZU5ld0dhbWVPYmplY3QoKTtcclxuICAgICAgICBEZXN0cnVjdGlibGU1LnRyYW5zZm9ybS5wb3NpdGlvbi5zZXQoOTAwLCA0NTApO1xyXG4gICAgICAgIERlc3RydWN0aWJsZTUuYWRkU3ByaXRlKHRoaXMucmVzb3VyY2VzW1wiY3JhdGVcIl0udGV4dHVyZSwgbmV3IFZlY3RvcjJfMS5WZWN0b3IyKDAuNywgMC43KSk7XHJcbiAgICAgICAgRGVzdHJ1Y3RpYmxlNS5hZGRDb2xsaWRlcih0cnVlKTtcclxuICAgICAgICBEZXN0cnVjdGlibGU1LmFkZFJpZ2lkYm9keShEZXN0cnVjdGlibGU1LCA1LCBmYWxzZSwgZmFsc2UsIDAuMSk7XHJcbiAgICAgICAgRGVzdHJ1Y3RpYmxlNS5yb3RhdGVHYW1lT2JqZWN0KDEyMCk7XHJcbiAgICAgICAgdmFyIERlc3RydWN0aWJsZTYgPSB0aGlzLmNyZWF0ZU5ld0dhbWVPYmplY3QoKTtcclxuICAgICAgICBEZXN0cnVjdGlibGU2LnRyYW5zZm9ybS5wb3NpdGlvbi5zZXQoNTAwLCA2MDApO1xyXG4gICAgICAgIERlc3RydWN0aWJsZTYuYWRkU3ByaXRlKHRoaXMucmVzb3VyY2VzW1wiY3JhdGVcIl0udGV4dHVyZSwgbmV3IFZlY3RvcjJfMS5WZWN0b3IyKDAuNywgMC43KSk7XHJcbiAgICAgICAgRGVzdHJ1Y3RpYmxlNi5hZGRDb2xsaWRlcih0cnVlKTtcclxuICAgICAgICBEZXN0cnVjdGlibGU2LmFkZFJpZ2lkYm9keShEZXN0cnVjdGlibGU2LCA1LCBmYWxzZSwgZmFsc2UsIDAuMSk7XHJcbiAgICAgICAgRGVzdHJ1Y3RpYmxlNi5yb3RhdGVHYW1lT2JqZWN0KDEyMCk7XHJcbiAgICAgICAgdmFyIERlc3RydWN0aWJsZTcgPSB0aGlzLmNyZWF0ZU5ld0dhbWVPYmplY3QoKTtcclxuICAgICAgICBEZXN0cnVjdGlibGU3LnRyYW5zZm9ybS5wb3NpdGlvbi5zZXQoOTUwLCA2NTApO1xyXG4gICAgICAgIERlc3RydWN0aWJsZTcuYWRkU3ByaXRlKHRoaXMucmVzb3VyY2VzW1wiY3JhdGVcIl0udGV4dHVyZSwgbmV3IFZlY3RvcjJfMS5WZWN0b3IyKDAuNywgMC43KSk7XHJcbiAgICAgICAgRGVzdHJ1Y3RpYmxlNy5hZGRDb2xsaWRlcih0cnVlKTtcclxuICAgICAgICBEZXN0cnVjdGlibGU3LmFkZFJpZ2lkYm9keShEZXN0cnVjdGlibGU3LCA1LCBmYWxzZSwgZmFsc2UsIDAuMSk7XHJcbiAgICAgICAgRGVzdHJ1Y3RpYmxlNy5yb3RhdGVHYW1lT2JqZWN0KDEyMCk7XHJcbiAgICAgICAgdmFyIERlc3RydWN0aWJsZTggPSB0aGlzLmNyZWF0ZU5ld0dhbWVPYmplY3QoKTtcclxuICAgICAgICBEZXN0cnVjdGlibGU4LnRyYW5zZm9ybS5wb3NpdGlvbi5zZXQoNzAwLCAxMDApO1xyXG4gICAgICAgIERlc3RydWN0aWJsZTguYWRkU3ByaXRlKHRoaXMucmVzb3VyY2VzW1wiY3JhdGVcIl0udGV4dHVyZSwgbmV3IFZlY3RvcjJfMS5WZWN0b3IyKDAuNywgMC43KSk7XHJcbiAgICAgICAgRGVzdHJ1Y3RpYmxlOC5hZGRDb2xsaWRlcih0cnVlKTtcclxuICAgICAgICBEZXN0cnVjdGlibGU4LmFkZFJpZ2lkYm9keShEZXN0cnVjdGlibGU4LCA1LCBmYWxzZSwgZmFsc2UsIDAuMSk7XHJcbiAgICAgICAgRGVzdHJ1Y3RpYmxlOC5yb3RhdGVHYW1lT2JqZWN0KDEyMCk7XHJcbiAgICAgICAgdmFyIGdvYWwgPSBuZXcgR29hbF8xLkdvYWwoKTtcclxuICAgICAgICBnb2FsLnRyYW5zZm9ybS5wb3NpdGlvbi5zZXQoMTI5MCwgNzIwKTtcclxuICAgICAgICBnb2FsLmFkZFNwcml0ZSh0aGlzLnJlc291cmNlc1tcInllbGxvd19jaXJjbGVcIl0udGV4dHVyZSwgbmV3IFZlY3RvcjJfMS5WZWN0b3IyKDIsIDIpKTtcclxuICAgICAgICBnb2FsLmFkZENvbGxpZGVyKHRydWUpO1xyXG4gICAgICAgIGdvYWwuYWRkUmlnaWRib2R5KGdvYWwsIDEwLCB0cnVlKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gU2NlbmVNYW5hZ2VyO1xyXG59KCkpO1xyXG5leHBvcnRzLlNjZW5lTWFuYWdlciA9IFNjZW5lTWFuYWdlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuQ2Fubm9uID0gdm9pZCAwO1xyXG52YXIgR2FtZU9iamVjdF8xID0gcmVxdWlyZShcIi4uL0VuZ2luZS9HYW1lT2JqZWN0XCIpO1xyXG52YXIgVmVjdG9yMl8xID0gcmVxdWlyZShcIi4uL1V0aWxpdHkvVmVjdG9yMlwiKTtcclxudmFyIFJpZ2lkYm9keV8xID0gcmVxdWlyZShcIi4uL0VuZ2luZS9SaWdpZGJvZHlcIik7XHJcbnZhciBDYW5ub25CYWxsXzEgPSByZXF1aXJlKFwiLi9DYW5ub25CYWxsXCIpO1xyXG52YXIgQ2Fubm9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKENhbm5vbiwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIENhbm5vbigpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLnNob290ID0gZmFsc2U7XHJcbiAgICAgICAgX3RoaXMuY2hhcmdlQXR0YWNrID0gMDtcclxuICAgICAgICBfdGhpcy5jaGFyZ2luZyA9IGZhbHNlO1xyXG4gICAgICAgIF90aGlzLmRpcmVjdGlvbiA9IG5ldyBWZWN0b3IyXzEuVmVjdG9yMigwLCAwKTtcclxuICAgICAgICBfdGhpcy51cGRhdGVTaG9vdGluZ0FuZ2xlKCk7XHJcbiAgICAgICAgX3RoaXMuZ3Jhdml0eU9uID0gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBDYW5ub24ucHJvdG90eXBlLnVwZGF0ZVNob290aW5nQW5nbGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24ueCA9IE1hdGguY29zKHRoaXMudHJhbnNmb3JtLnJvdGF0aW9uKTtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbi55ID0gTWF0aC5zaW4odGhpcy50cmFuc2Zvcm0ucm90YXRpb24pO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uLm5vcm1hbGl6ZVZlY3RvcigpO1xyXG4gICAgfTtcclxuICAgIENhbm5vbi5wcm90b3R5cGUuSGFuZGxlQ2Fubm9uQ2hhcmdlID0gZnVuY3Rpb24gKGFwcCwgcmVzb3VyY2UpIHtcclxuICAgICAgICBpZiAodGhpcy5jaGFyZ2luZykge1xyXG4gICAgICAgICAgICB0aGlzLmNoYXJnZUF0dGFjayArPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2hvb3QpIHtcclxuICAgICAgICAgICAgICAgIC8vVE9ETyBTb21lIHNob290IGNoYXJnaW5nIGZlZWRiYWNrLlxyXG4gICAgICAgICAgICAgICAgdmFyIGNhbm5vbkJhbGwgPSBuZXcgQ2Fubm9uQmFsbF8xLkNhbm5vbkJhbGwoNzAwKTtcclxuICAgICAgICAgICAgICAgIGNhbm5vbkJhbGwuYWRkU3ByaXRlKHJlc291cmNlW1wiY2Fub25fYmFsbFwiXS50ZXh0dXJlLCBuZXcgVmVjdG9yMl8xLlZlY3RvcjIoMywgMykpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRyYW5zZm9ybSA9IFZlY3RvcjJfMS5WZWN0b3IyLnZlY3RvckZyb21Qb2ludCh0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbikuYWRkVmVjdG9yKG5ldyBWZWN0b3IyXzEuVmVjdG9yMig5MCwgMCkpO1xyXG4gICAgICAgICAgICAgICAgY2Fubm9uQmFsbC50cmFuc2Zvcm0ucG9zaXRpb24ueCA9IHRyYW5zZm9ybS54O1xyXG4gICAgICAgICAgICAgICAgY2Fubm9uQmFsbC50cmFuc2Zvcm0ucG9zaXRpb24ueSA9IHRyYW5zZm9ybS55O1xyXG4gICAgICAgICAgICAgICAgY2Fubm9uQmFsbC5hZGRSaWdpZGJvZHkoY2Fubm9uQmFsbCwgMiwgZmFsc2UsIHRoaXMuZ3Jhdml0eU9uLCAwLjEpO1xyXG4gICAgICAgICAgICAgICAgY2Fubm9uQmFsbC5hZGRDb2xsaWRlcih0cnVlKTtcclxuICAgICAgICAgICAgICAgIGNhbm5vbkJhbGwucmlnaWRib2R5LmFkZEZvcmNlKHRoaXMuZGlyZWN0aW9uLm11bHRTY2FsYXIoTWF0aC5taW4oMjAsIHRoaXMuY2hhcmdlQXR0YWNrIC8gMTApKSwgUmlnaWRib2R5XzEuRm9yY2VNb2RlLkltcHVsc2UpO1xyXG4gICAgICAgICAgICAgICAgY2Fubm9uQmFsbC5yaWdpZGJvZHkuYWRkVG9ycXVlKG5ldyBWZWN0b3IyXzEuVmVjdG9yMigwLjA1LCAwLjA1KSwgUmlnaWRib2R5XzEuRm9yY2VNb2RlLkltcHVsc2UpO1xyXG4gICAgICAgICAgICAgICAgYXBwLnN0YWdlLmFkZENoaWxkKGNhbm5vbkJhbGwuc3ByaXRlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvb3QgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhcmdlQXR0YWNrID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gQ2Fubm9uO1xyXG59KEdhbWVPYmplY3RfMS5HYW1lT2JqZWN0KSk7XHJcbmV4cG9ydHMuQ2Fubm9uID0gQ2Fubm9uO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5DYW5ub25CYWxsID0gdm9pZCAwO1xyXG52YXIgR2FtZU9iamVjdF8xID0gcmVxdWlyZShcIi4uL0VuZ2luZS9HYW1lT2JqZWN0XCIpO1xyXG52YXIgU2NlbmVNYW5hZ2VyXzEgPSByZXF1aXJlKFwiLi4vRW5naW5lL1NjZW5lTWFuYWdlclwiKTtcclxudmFyIEdhbWVNYW5hZ2VyXzEgPSByZXF1aXJlKFwiLi4vRW5naW5lL0dhbWVNYW5hZ2VyXCIpO1xyXG52YXIgQ2Fubm9uQmFsbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhDYW5ub25CYWxsLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gQ2Fubm9uQmFsbCh0aW1lKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5saWZlVGltZSA9IHRpbWU7XHJcbiAgICAgICAgX3RoaXMudGFnID0gXCJjYW5ub25iYWxsXCI7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgQ2Fubm9uQmFsbC5wcm90b3R5cGUuVXBkYXRlID0gZnVuY3Rpb24gKGRlbHRhKSB7XHJcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5VcGRhdGUuY2FsbCh0aGlzLCBkZWx0YSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVMaWZlVGltZShkZWx0YSk7XHJcbiAgICB9O1xyXG4gICAgQ2Fubm9uQmFsbC5wcm90b3R5cGUudXBkYXRlTGlmZVRpbWUgPSBmdW5jdGlvbiAoZGVsdGEpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMubGlmZVRpbWUgLT0gZGVsdGE7XHJcbiAgICAgICAgaWYgKHRoaXMubGlmZVRpbWUgPD0gMCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5yaWdpZGJvZHkgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIEdhbWVNYW5hZ2VyXzEuR2FtZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5hcHAuc3RhZ2UucmVtb3ZlQ2hpbGQodGhpcy5yaWdpZGJvZHkubGluZWFyVmlzdWFsaXphdGlvbik7XHJcbiAgICAgICAgICAgICAgICBTY2VuZU1hbmFnZXJfMS5TY2VuZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5yYkdyYXBoaWNzLmZpbHRlcihmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogIT09IF90aGlzLnJpZ2lkYm9keS5saW5lYXJWaXN1YWxpemF0aW9uOyB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBHYW1lT2JqZWN0XzEuR2FtZU9iamVjdC5EZXN0cm95KHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gQ2Fubm9uQmFsbDtcclxufShHYW1lT2JqZWN0XzEuR2FtZU9iamVjdCkpO1xyXG5leHBvcnRzLkNhbm5vbkJhbGwgPSBDYW5ub25CYWxsO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5EZXN0cnVjdGlibGUgPSB2b2lkIDA7XHJcbnZhciBHYW1lT2JqZWN0XzEgPSByZXF1aXJlKFwiLi4vRW5naW5lL0dhbWVPYmplY3RcIik7XHJcbnZhciBTY2VuZU1hbmFnZXJfMSA9IHJlcXVpcmUoXCIuLi9FbmdpbmUvU2NlbmVNYW5hZ2VyXCIpO1xyXG52YXIgR2FtZU1hbmFnZXJfMSA9IHJlcXVpcmUoXCIuLi9FbmdpbmUvR2FtZU1hbmFnZXJcIik7XHJcbnZhciBEZXN0cnVjdGlibGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoRGVzdHJ1Y3RpYmxlLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gRGVzdHJ1Y3RpYmxlKHRpbWUpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLmxpZmVUaW1lID0gdGltZTtcclxuICAgICAgICBfdGhpcy50cmlnZ2VyZWQgPSBmYWxzZTtcclxuICAgICAgICBfdGhpcy50YWcgPSBcImRlc3RydWN0aWJsZVwiO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIERlc3RydWN0aWJsZS5wcm90b3R5cGUuVXBkYXRlID0gZnVuY3Rpb24gKGRlbHRhKSB7XHJcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5VcGRhdGUuY2FsbCh0aGlzLCBkZWx0YSk7XHJcbiAgICAgICAgaWYgKHRoaXMudHJpZ2dlcmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTGlmZVRpbWUoZGVsdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBEZXN0cnVjdGlibGUucHJvdG90eXBlLnVwZGF0ZUxpZmVUaW1lID0gZnVuY3Rpb24gKGRlbHRhKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLmxpZmVUaW1lIC09IGRlbHRhO1xyXG4gICAgICAgIGlmICh0aGlzLmxpZmVUaW1lIDw9IDApIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucmlnaWRib2R5ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBHYW1lTWFuYWdlcl8xLkdhbWVNYW5hZ2VyLmdldEluc3RhbmNlKCkuYXBwLnN0YWdlLnJlbW92ZUNoaWxkKHRoaXMucmlnaWRib2R5LmxpbmVhclZpc3VhbGl6YXRpb24pO1xyXG4gICAgICAgICAgICAgICAgU2NlbmVNYW5hZ2VyXzEuU2NlbmVNYW5hZ2VyLmdldEluc3RhbmNlKCkucmJHcmFwaGljcy5maWx0ZXIoZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICE9PSBfdGhpcy5yaWdpZGJvZHkubGluZWFyVmlzdWFsaXphdGlvbjsgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgR2FtZU9iamVjdF8xLkdhbWVPYmplY3QuRGVzdHJveSh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgRGVzdHJ1Y3RpYmxlLnByb3RvdHlwZS5vbkNvbGxpc2lvbkVudGVyID0gZnVuY3Rpb24gKGNvbGxpZGVyKSB7XHJcbiAgICAgICAgaWYgKGNvbGxpZGVyLnBhcmVudEdhbWVPYmplY3QudGFnID09PSBcImNhbm5vbmJhbGxcIikge1xyXG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgKGNvbGxpZGVyLnBhcmVudEdhbWVPYmplY3QpID09PSB0eXBlb2YgKERlc3RydWN0aWJsZSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbGxpZGVyLnBhcmVudEdhbWVPYmplY3QudHJpZ2dlcmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gRGVzdHJ1Y3RpYmxlO1xyXG59KEdhbWVPYmplY3RfMS5HYW1lT2JqZWN0KSk7XHJcbmV4cG9ydHMuRGVzdHJ1Y3RpYmxlID0gRGVzdHJ1Y3RpYmxlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5Hb2FsID0gdm9pZCAwO1xyXG52YXIgR2FtZU9iamVjdF8xID0gcmVxdWlyZShcIi4uL0VuZ2luZS9HYW1lT2JqZWN0XCIpO1xyXG52YXIgR2FtZU1hbmFnZXJfMSA9IHJlcXVpcmUoXCIuLi9FbmdpbmUvR2FtZU1hbmFnZXJcIik7XHJcbnZhciBHb2FsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEdvYWwsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBHb2FsKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuaXNIaXQgPSBmYWxzZTtcclxuICAgICAgICBfdGhpcy5nb2FsVGV4dCA9IG5ldyBQSVhJLlRleHQoJycsIHsgZm9udEZhbWlseTogJ0FyaWFsJywgZm9udFNpemU6IDIyLCBmaWxsOiAweEZGNTBGRiwgYWxpZ246ICdjZW50ZXInIH0pO1xyXG4gICAgICAgIF90aGlzLmdvYWxUZXh0LnBvc2l0aW9uID0gbmV3IFBJWEkuUG9pbnQoNTAwLCAxMjApO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIEdvYWwucHJvdG90eXBlLm9uQ29sbGlzaW9uRW50ZXIgPSBmdW5jdGlvbiAoY29sbGlkZXIpIHtcclxuICAgICAgICBpZiAoY29sbGlkZXIucGFyZW50R2FtZU9iamVjdC50YWcgPT09IFwiY2Fubm9uYmFsbFwiKSB7XHJcbiAgICAgICAgICAgIEdhbWVNYW5hZ2VyXzEuR2FtZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5sb2FkRmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZ29hbFRleHQudGV4dCA9IFwiWU9VIFdPTlwiO1xyXG4gICAgICAgICAgICBHYW1lTWFuYWdlcl8xLkdhbWVNYW5hZ2VyLmdldEluc3RhbmNlKCkuYXBwLnN0YWdlLmFkZENoaWxkKHRoaXMuZ29hbFRleHQpO1xyXG4gICAgICAgICAgICB0aGlzLmlzSGl0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgR2FtZU1hbmFnZXJfMS5HYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpLnNjb3JlICs9IDEwO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInNjb3JlXCIgKyBHYW1lTWFuYWdlcl8xLkdhbWVNYW5hZ2VyLmdldEluc3RhbmNlKCkuc2NvcmUpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gR29hbDtcclxufShHYW1lT2JqZWN0XzEuR2FtZU9iamVjdCkpO1xyXG5leHBvcnRzLkdvYWwgPSBHb2FsO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5Nb3ZpbmdPYnN0YWNsZSA9IGV4cG9ydHMuRWFzaW5nU3RydWN0ID0gdm9pZCAwO1xyXG52YXIgR2FtZU9iamVjdF8xID0gcmVxdWlyZShcIi4uL0VuZ2luZS9HYW1lT2JqZWN0XCIpO1xyXG52YXIgU2NlbmVNYW5hZ2VyXzEgPSByZXF1aXJlKFwiLi4vRW5naW5lL1NjZW5lTWFuYWdlclwiKTtcclxudmFyIENhdE11bGxSb21TcGxpbmVfMSA9IHJlcXVpcmUoXCIuLi9FbmdpbmUvQ2F0TXVsbFJvbVNwbGluZVwiKTtcclxudmFyIEVhc2luZ1N0cnVjdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEVhc2luZ1N0cnVjdChhY2NlbGVyYXRlLCBzbG93RG93biwgZmFjdG9yKSB7XHJcbiAgICAgICAgdGhpcy5hY2NlbGVyYXRlID0gYWNjZWxlcmF0ZTtcclxuICAgICAgICB0aGlzLnNsb3dEb3duID0gc2xvd0Rvd247XHJcbiAgICAgICAgdGhpcy5mYWN0b3IgPSBmYWN0b3I7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gRWFzaW5nU3RydWN0O1xyXG59KCkpO1xyXG5leHBvcnRzLkVhc2luZ1N0cnVjdCA9IEVhc2luZ1N0cnVjdDtcclxudmFyIE1vdmluZ09ic3RhY2xlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKE1vdmluZ09ic3RhY2xlLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gTW92aW5nT2JzdGFjbGUodHJhdmVyc2FsVGltZSwgZWFzaW5nLCBzbG93RG93bnN0cnVjdCwgYWNjZWxlcmF0ZVN0cnVjdCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuc3BsaW5lID0gbmV3IENhdE11bGxSb21TcGxpbmVfMS5DYXRNdWxsUm9tU3BsaW5lKF90aGlzKTtcclxuICAgICAgICBfdGhpcy5wb2ludE9uQ3VydmUgPSAwO1xyXG4gICAgICAgIF90aGlzLnRyYXZlcnNhbFRpbWUgPSB0cmF2ZXJzYWxUaW1lICE9PSBudWxsICYmIHRyYXZlcnNhbFRpbWUgIT09IHZvaWQgMCA/IHRyYXZlcnNhbFRpbWUgOiAxMDAwO1xyXG4gICAgICAgIF90aGlzLmVhc2luZyA9IGVhc2luZyAhPT0gbnVsbCAmJiBlYXNpbmcgIT09IHZvaWQgMCA/IGVhc2luZyA6IGZhbHNlO1xyXG4gICAgICAgIF90aGlzLmRpcmVjdGlvbiA9IDI7XHJcbiAgICAgICAgX3RoaXMuZm9yd2FyZFN0cnVjdCA9IGFjY2VsZXJhdGVTdHJ1Y3QgIT09IG51bGwgJiYgYWNjZWxlcmF0ZVN0cnVjdCAhPT0gdm9pZCAwID8gYWNjZWxlcmF0ZVN0cnVjdCA6IG5ldyBFYXNpbmdTdHJ1Y3QoMSwgMiwgMik7XHJcbiAgICAgICAgX3RoaXMucmV2ZXJzZVN0cnVjdCA9IHNsb3dEb3duc3RydWN0ICE9PSBudWxsICYmIHNsb3dEb3duc3RydWN0ICE9PSB2b2lkIDAgPyBzbG93RG93bnN0cnVjdCA6IG5ldyBFYXNpbmdTdHJ1Y3QoMiwgMSwgMik7XHJcbiAgICAgICAgU2NlbmVNYW5hZ2VyXzEuU2NlbmVNYW5hZ2VyLmdldEluc3RhbmNlKCkuYWRkU3BsaW5lVG9Db2xsZWN0aW9uKF90aGlzLnNwbGluZSk7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgTW92aW5nT2JzdGFjbGUucHJvdG90eXBlLlVwZGF0ZSA9IGZ1bmN0aW9uIChkZWx0YSkge1xyXG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuVXBkYXRlLmNhbGwodGhpcywgZGVsdGEpO1xyXG4gICAgICAgIHZhciB0cmF2ZXJzZSA9IHRoaXMudHJhdmVyc2FsU2VnbWVudCAqIGRlbHRhO1xyXG4gICAgICAgIHZhciBmX1N0cnVjdCA9IHRoaXMuZm9yd2FyZFN0cnVjdDtcclxuICAgICAgICB2YXIgcl9TdHJ1Y3QgPSB0aGlzLnJldmVyc2VTdHJ1Y3Q7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAxICYmIHRoaXMucG9pbnRPbkN1cnZlIC0gdHJhdmVyc2UgPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gdGhpcy5zcGxpbmUuc3BsaW5lUGF0aC5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICB0aGlzLnBvaW50T25DdXJ2ZSA9IDAuMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5kaXJlY3Rpb24gIT09IDEgJiYgdGhpcy5wb2ludE9uQ3VydmUgKyB0cmF2ZXJzZSA+IHRoaXMuc3BsaW5lLnRvdGFsU3BsaW5lTGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gMTtcclxuICAgICAgICAgICAgdGhpcy5wb2ludE9uQ3VydmUgPSB0aGlzLnNwbGluZS50b3RhbFNwbGluZUxlbmd0aCAtIDAuMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZWFzaW5nICYmIFNjZW5lTWFuYWdlcl8xLlNjZW5lTWFuYWdlci5nZXRJbnN0YW5jZSgpLmVuYWJsZUVhc2luZykge1xyXG4gICAgICAgICAgICB0aGlzLnBvaW50T25DdXJ2ZSArPSB0aGlzLmRpcmVjdGlvbiAhPT0gMSA/XHJcbiAgICAgICAgICAgICAgICB0aGlzLkVhc2UodGhpcy5zcGxpbmUuR2V0Tm9ybWFsaXNlZE9mZnNldCh0aGlzLnBvaW50T25DdXJ2ZSksIGZfU3RydWN0LmFjY2VsZXJhdGUsIGZfU3RydWN0LnNsb3dEb3duLCBmX1N0cnVjdC5mYWN0b3IpXHJcbiAgICAgICAgICAgICAgICA6IHRoaXMuRWFzZSh0aGlzLnNwbGluZS5HZXROb3JtYWxpc2VkT2Zmc2V0KHRoaXMucG9pbnRPbkN1cnZlKSwgcl9TdHJ1Y3QuYWNjZWxlcmF0ZSwgcl9TdHJ1Y3Quc2xvd0Rvd24sIHJfU3RydWN0LmZhY3RvcikgKiAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9pbnRPbkN1cnZlICs9IHRoaXMuZGlyZWN0aW9uICE9PSAxID8gdHJhdmVyc2UgOiAodHJhdmVyc2UgKiAtMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnBvaW50T25DdXJ2ZSA+IDAgJiYgdGhpcy5wb2ludE9uQ3VydmUgPCB0aGlzLnNwbGluZS50b3RhbFNwbGluZUxlbmd0aCkge1xyXG4gICAgICAgICAgICB2YXIgb2Zmc2V0ID0gdGhpcy5zcGxpbmUuR2V0Tm9ybWFsaXNlZE9mZnNldCh0aGlzLnBvaW50T25DdXJ2ZSk7XHJcbiAgICAgICAgICAgIHZhciBwb3MgPSB0aGlzLnNwbGluZS5HZXRTcGxpbmVQb2ludChvZmZzZXQpO1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbi54ID0gcG9zLng7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLnkgPSBwb3MueTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgTW92aW5nT2JzdGFjbGUucHJvdG90eXBlLkVhc2UgPSBmdW5jdGlvbiAoZGVsdGEsIGsxLCBrMiwgZmFjdG9yKSB7XHJcbiAgICAgICAgdmFyIGYsIHM7XHJcbiAgICAgICAgZiA9IGsxICogMiAvIE1hdGguUEkgKyBrMiAqIGsxICsgKDEgKiBrMikgKyAyIC8gTWF0aC5QSTtcclxuICAgICAgICBpZiAoZGVsdGEgPCBrMSkge1xyXG4gICAgICAgICAgICBzID0gKGsxICogKDIgLyBNYXRoLlBJKSAqIChNYXRoLnNpbigoZGVsdGEgLyBrMSkgKiBNYXRoLlBJIC8gMiAqIE1hdGguUEkgLyAyKSArIDEpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZGVsdGEgPCBrMikge1xyXG4gICAgICAgICAgICBzID0gKDIgKiBrMSAvIE1hdGguUEkgKyBkZWx0YSAqIGsxKSAqIGZhY3RvcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHMgPSAoMiAqIGsxIC8gTWF0aC5QSSArIGsyICogazEgKyAoKDEgLSBrMikgKiAoMiAvIE1hdGguUEkpKSAqIE1hdGguc2luKCgoZGVsdGEgKiBrMikgLyAoMSAqIGsyKSkgKiBNYXRoLlBJIC8gMikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcyAvIGY7XHJcbiAgICB9O1xyXG4gICAgTW92aW5nT2JzdGFjbGUucHJvdG90eXBlLlNldEVhc2luZ1N0cnVjdHMgPSBmdW5jdGlvbiAoYWNjZWxlcmF0ZSwgc2xvd2Rvd24pIHtcclxuICAgICAgICB0aGlzLmZvcndhcmRTdHJ1Y3QgPSBhY2NlbGVyYXRlO1xyXG4gICAgICAgIHRoaXMucmV2ZXJzZVN0cnVjdCA9IHNsb3dkb3duO1xyXG4gICAgfTtcclxuICAgIE1vdmluZ09ic3RhY2xlLnByb3RvdHlwZS5TZXRTcGxpbmVQb2ludHMgPSBmdW5jdGlvbiAoc3BsaW5lUG9pbnRzKSB7XHJcbiAgICAgICAgaWYgKHNwbGluZVBvaW50cyAhPT0gbnVsbCAmJiBzcGxpbmVQb2ludHMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNwbGluZS5DcmVhdGVTcGxpbmVGcm9tTGlzdChzcGxpbmVQb2ludHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zcGxpbmUuQ3JlYXRlUmFuZG9tQ29udHJvbFBvaW50cygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLlVwZGF0ZVRyYXZlcnNhbFNlZ21lbnQoKTtcclxuICAgIH07XHJcbiAgICBNb3ZpbmdPYnN0YWNsZS5wcm90b3R5cGUuVXBkYXRlVHJhdmVyc2FsU2VnbWVudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnRyYXZlcnNhbFNlZ21lbnQgPSB0aGlzLnNwbGluZS50b3RhbFNwbGluZUxlbmd0aCAvIHRoaXMudHJhdmVyc2FsVGltZTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gTW92aW5nT2JzdGFjbGU7XHJcbn0oR2FtZU9iamVjdF8xLkdhbWVPYmplY3QpKTtcclxuZXhwb3J0cy5Nb3ZpbmdPYnN0YWNsZSA9IE1vdmluZ09ic3RhY2xlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkRyYXdGdW5jdGlvbiA9IHZvaWQgMDtcclxudmFyIFBJWEkgPSByZXF1aXJlKFwicGl4aS5qc1wiKTtcclxudmFyIERyYXdGdW5jdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIERyYXdGdW5jdGlvbigpIHtcclxuICAgIH1cclxuICAgIERyYXdGdW5jdGlvbi5kcmF3U2hhcGVWZXJ0aWNlcyA9IGZ1bmN0aW9uIChhcHAsIGNvbG9yLCB2ZXJ0aWNlcykge1xyXG4gICAgICAgIHZlcnRpY2VzLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgdmFyIHBvaW50ID0gbmV3IFBJWEkuR3JhcGhpY3MoKTtcclxuICAgICAgICAgICAgcG9pbnRcclxuICAgICAgICAgICAgICAgIC5saW5lU3R5bGUoMiwgY29sb3IpXHJcbiAgICAgICAgICAgICAgICAuYmVnaW5GaWxsKGNvbG9yKVxyXG4gICAgICAgICAgICAgICAgLmRyYXdDaXJjbGUoZWxlbWVudC54LCBlbGVtZW50LnksIDUpXHJcbiAgICAgICAgICAgICAgICAuZW5kRmlsbCgpO1xyXG4gICAgICAgICAgICBhcHAuc3RhZ2UuYWRkQ2hpbGQocG9pbnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIERyYXdGdW5jdGlvbi5kcmF3U2hhcGVDZW50ZXIgPSBmdW5jdGlvbiAoYXBwLCBjb2xvciwgY29sbGlkZXIpIHtcclxuICAgICAgICB2YXIgcG9pbnQgPSBuZXcgUElYSS5HcmFwaGljcygpO1xyXG4gICAgICAgIHBvaW50XHJcbiAgICAgICAgICAgIC5saW5lU3R5bGUoMiwgY29sb3IpXHJcbiAgICAgICAgICAgIC5iZWdpbkZpbGwoY29sb3IpXHJcbiAgICAgICAgICAgIC5kcmF3Q2lyY2xlKGNvbGxpZGVyLmNvbGxpZGVyQ2VudGVyLngsIGNvbGxpZGVyLmNvbGxpZGVyQ2VudGVyLnksIDUpXHJcbiAgICAgICAgICAgIC5lbmRGaWxsKCk7XHJcbiAgICAgICAgYXBwLnN0YWdlLmFkZENoaWxkKHBvaW50KTtcclxuICAgIH07XHJcbiAgICBEcmF3RnVuY3Rpb24uZHJhd1BvaW50ID0gZnVuY3Rpb24gKGFwcCwgb2JqZWN0LCBjb2xvciwgcG9zX3gsIHBvc195LCByYWRpdXMpIHtcclxuICAgICAgICB2YXIgcmFkID0gcmFkaXVzICE9PSBudWxsICYmIHJhZGl1cyAhPT0gdm9pZCAwID8gcmFkaXVzIDogMTU7XHJcbiAgICAgICAgb2JqZWN0LmNsZWFyKClcclxuICAgICAgICAgICAgLmxpbmVTdHlsZSgyLCBjb2xvcilcclxuICAgICAgICAgICAgLmJlZ2luRmlsbChjb2xvcilcclxuICAgICAgICAgICAgLmRyYXdDaXJjbGUocG9zX3gsIHBvc195LCByYWQpXHJcbiAgICAgICAgICAgIC5lbmRGaWxsKCk7XHJcbiAgICAgICAgYXBwLnN0YWdlLmFkZENoaWxkKG9iamVjdCk7XHJcbiAgICB9O1xyXG4gICAgRHJhd0Z1bmN0aW9uLmRyYXdTcGxpbmUgPSBmdW5jdGlvbiAoYXBwLCBjb2xvciwgc3BsaW5lLCBncmFwaGljc0FycmF5KSB7XHJcbiAgICAgICAgZm9yICh2YXIgdCA9IDAuMDsgdCA8IHNwbGluZS5zcGxpbmVQYXRoLmxlbmd0aCAtIDMuMDsgdCArPSAwLjAxKSB7XHJcbiAgICAgICAgICAgIHZhciBwb3MgPSBzcGxpbmUuR2V0U3BsaW5lUG9pbnQodCk7XHJcbiAgICAgICAgICAgIHZhciBncmFwaGljID0gbmV3IFBJWEkuR3JhcGhpY3MoKTtcclxuICAgICAgICAgICAgZ3JhcGhpY3NBcnJheS5wdXNoKGdyYXBoaWMpO1xyXG4gICAgICAgICAgICBEcmF3RnVuY3Rpb24uZHJhd1BvaW50KGFwcCwgZ3JhcGhpYywgY29sb3IsIHBvcy54LCBwb3MueSwgNSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIERyYXdGdW5jdGlvbi5EcmF3QXJyb3cgPSBmdW5jdGlvbiAoYXBwLCBjb2xvciwgZnJvbSwgbW9tZW50dW1WZWN0b3IsIGdyYXBoaWNzQXJyYXksIG9iaikge1xyXG4gICAgICAgIG9iai5jbGVhcigpXHJcbiAgICAgICAgICAgIC5saW5lU3R5bGUoNSwgY29sb3IpXHJcbiAgICAgICAgICAgIC5tb3ZlVG8oZnJvbS54LCBmcm9tLnkpXHJcbiAgICAgICAgICAgIC5saW5lVG8oZnJvbS54ICsgbW9tZW50dW1WZWN0b3IueCAqIDIwLCBmcm9tLnkgKyBtb21lbnR1bVZlY3Rvci55ICogMjApXHJcbiAgICAgICAgICAgIC5saW5lU3R5bGUoMTUsIGNvbG9yLCAxLCAuNSlcclxuICAgICAgICAgICAgLmJlZ2luRmlsbChjb2xvcilcclxuICAgICAgICAgICAgLmVuZEZpbGwoKTtcclxuICAgICAgICBhcHAuc3RhZ2UuYWRkQ2hpbGQob2JqKTtcclxuICAgIH07XHJcbiAgICBEcmF3RnVuY3Rpb24uZGlzcGxheU5ld1RleHQgPSBmdW5jdGlvbiAoYXBwLCBvYmosIHRleHQsIGZvbnRGYW1pbHksIGZvbnRTaXplLCBjb2xvciwgYWxpZ24sIHBvc194LCBwb3NfeSkge1xyXG4gICAgICAgIG9iaiA9IG5ldyBQSVhJLlRleHQodGV4dCwgeyBmb250RmFtaWx5OiBmb250RmFtaWx5LCBmb250U2l6ZTogZm9udFNpemUsIGZpbGw6IGNvbG9yLCBhbGlnbjogYWxpZ24gfSk7XHJcbiAgICAgICAgb2JqLnBvc2l0aW9uID0gbmV3IFBJWEkuUG9pbnQocG9zX3gsIHBvc195KTtcclxuICAgICAgICBhcHAuc3RhZ2UuYWRkQ2hpbGQob2JqKTtcclxuICAgIH07XHJcbiAgICBEcmF3RnVuY3Rpb24uQ29udmVydENvbXBvbmVudE51bWJlclRvSGV4ID0gZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIGhleCA9IHZhbHVlLnRvU3RyaW5nKDE2KTtcclxuICAgICAgICByZXR1cm4gaGV4Lmxlbmd0aCA9PT0gMSA/IFwiMFwiICsgaGV4IDogaGV4O1xyXG4gICAgfTtcclxuICAgIERyYXdGdW5jdGlvbi5Db252ZXJ0TnVtYmVyVG9IZXggPSBmdW5jdGlvbiAocmVkLCBncmVlbiwgYmx1ZSkge1xyXG4gICAgICAgIHJldHVybiBcIjB4XCIgKyB0aGlzLkNvbnZlcnRDb21wb25lbnROdW1iZXJUb0hleChyZWQpICsgdGhpcy5Db252ZXJ0Q29tcG9uZW50TnVtYmVyVG9IZXgoZ3JlZW4pICsgdGhpcy5Db252ZXJ0Q29tcG9uZW50TnVtYmVyVG9IZXgoYmx1ZSk7XHJcbiAgICB9O1xyXG4gICAgRHJhd0Z1bmN0aW9uLlJhbmRvbUhleE51bWJlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcmVkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDI1NiArIDEpKTtcclxuICAgICAgICB2YXIgZ3JlZW4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMjU2ICsgMSkpO1xyXG4gICAgICAgIHZhciBibHVlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDI1NiArIDEpKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5Db252ZXJ0TnVtYmVyVG9IZXgocmVkLCBncmVlbiwgYmx1ZSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIERyYXdGdW5jdGlvbjtcclxufSgpKTtcclxuZXhwb3J0cy5EcmF3RnVuY3Rpb24gPSBEcmF3RnVuY3Rpb247XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuVmVjdG9yMiA9IHZvaWQgMDtcclxudmFyIFZlY3RvcjIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBWZWN0b3IyKHgsIHkpIHtcclxuICAgICAgICBpZiAoeCAhPT0gdW5kZWZpbmVkICYmIHggIT09IG51bGwgJiYgeSAhPT0gdW5kZWZpbmVkICYmIHkgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMueCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMueSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgVmVjdG9yMi5hZGRWZWN0b3IgPSBmdW5jdGlvbiAodmVjMSwgdmVjMikge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMih2ZWMxLnggKyB2ZWMyLngsIHZlYzEueSArIHZlYzIueSk7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMi5zdWJ0cmFjdFZlY3RvciA9IGZ1bmN0aW9uICh2ZWMxLCB2ZWMyKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKHZlYzEueCAtIHZlYzIueCwgdmVjMS55IC0gdmVjMi55KTtcclxuICAgIH07XHJcbiAgICBWZWN0b3IyLnZlY3RvckZyb21Qb2ludCA9IGZ1bmN0aW9uIChwb2ludCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMihwb2ludC54LCBwb2ludC55KTtcclxuICAgIH07XHJcbiAgICBWZWN0b3IyLmNyb3NzID0gZnVuY3Rpb24gKHZlYzEsIHZlYzIpIHtcclxuICAgICAgICByZXR1cm4gdmVjMS54ICogdmVjMi55IC0gdmVjMi54ICogdmVjMS55O1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjIuY3Jvc3NWZWN0b3IgPSBmdW5jdGlvbiAodmVjMSwgbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKC12ZWMxLnkgKiBudW1iZXIsIHZlYzEueCAqIG51bWJlcik7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMi5wcm90b3R5cGUuc2V0WFkgPSBmdW5jdGlvbiAoeCwgeSkge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgIH07XHJcbiAgICBWZWN0b3IyLnByb3RvdHlwZS5uZWdhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKC10aGlzLngsIC10aGlzLnkpO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjIucHJvdG90eXBlLmFkZFZlY3RvciA9IGZ1bmN0aW9uICh2ZWMpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIodGhpcy54ICsgdmVjLngsIHRoaXMueSArIHZlYy55KTtcclxuICAgIH07XHJcbiAgICBWZWN0b3IyLnByb3RvdHlwZS5zdWJ0cmFjdFZlY3RvciA9IGZ1bmN0aW9uICh2ZWMxKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKHRoaXMueCAtIHZlYzEueCwgdGhpcy55IC0gdmVjMS55KTtcclxuICAgIH07XHJcbiAgICBWZWN0b3IyLnByb3RvdHlwZS5tdWx0U2NhbGFyID0gZnVuY3Rpb24gKHNjYWxhcikge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMih0aGlzLnggKiBzY2FsYXIsIHRoaXMueSAqIHNjYWxhcik7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMi5wcm90b3R5cGUuZGl2U2NhbGFyID0gZnVuY3Rpb24gKHNjYWxhcikge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMih0aGlzLnggLyBzY2FsYXIsIHRoaXMueSAvIHNjYWxhcik7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMi5wcm90b3R5cGUubWFnbml0dWRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3codGhpcy54LCAyKSArIE1hdGgucG93KHRoaXMueSwgMikpO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjIucHJvdG90eXBlLm5vcm1hbGl6ZVZlY3RvciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kaXZTY2FsYXIodGhpcy5tYWduaXR1ZGUoKSk7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMi5wcm90b3R5cGUuZG90ID0gZnVuY3Rpb24gKHZlYykge1xyXG4gICAgICAgIHJldHVybiAodGhpcy54ICogdmVjLngpICsgKHRoaXMueSAqIHZlYy55KTtcclxuICAgIH07XHJcbiAgICBWZWN0b3IyLnByb3RvdHlwZS5ub3JtYWxWZWN0b3JSID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMih0aGlzLnksIC10aGlzLngpO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjIucHJvdG90eXBlLm5vcm1hbFZlY3RvckwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKC10aGlzLnksIHRoaXMueCk7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMi5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwieDogXCIgKyB0aGlzLnggKyBcIiAvIHk6IFwiICsgdGhpcy55O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBWZWN0b3IyO1xyXG59KCkpO1xyXG5leHBvcnRzLlZlY3RvcjIgPSBWZWN0b3IyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuLypcclxuICAgIEltYWdlcyBmcm9tIGh0dHBzOi8vd3d3LmdhbWVhcnQyZC5jb20vZnJlZS1wbGF0Zm9ybWVyLWdhbWUtdGlsZXNldC5odG1sXHJcbiovXHJcbnZhciBfYSwgX2I7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFBJWEkgPSByZXF1aXJlKFwicGl4aS5qc1wiKTtcclxudmFyIFZlY3RvcjJfMSA9IHJlcXVpcmUoXCIuL1V0aWxpdHkvVmVjdG9yMlwiKTtcclxudmFyIFNjZW5lTWFuYWdlcl8xID0gcmVxdWlyZShcIi4vRW5naW5lL1NjZW5lTWFuYWdlclwiKTtcclxudmFyIENhbm5vbl8xID0gcmVxdWlyZShcIi4vR2FtZU9iamVjdHMvQ2Fubm9uXCIpO1xyXG52YXIgR2FtZU1hbmFnZXJfMSA9IHJlcXVpcmUoXCIuL0VuZ2luZS9HYW1lTWFuYWdlclwiKTtcclxudmFyIENQSW5kaWNhdG9yXzEgPSByZXF1aXJlKFwiLi9FbmdpbmUvQ1BJbmRpY2F0b3JcIik7XHJcbnZhciBhcHBDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcF9jb250YWluZXJcIik7XHJcbnZhciBhcHAgPSBuZXcgUElYSS5BcHBsaWNhdGlvbih7XHJcbiAgICB3aWR0aDogMTYwMCxcclxuICAgIGhlaWdodDogOTAwLFxyXG4gICAgYW50aWFsaWFzOiB0cnVlLFxyXG59KTtcclxuYXBwQ29udGFpbmVyLmFwcGVuZENoaWxkKGFwcC52aWV3KTtcclxuKF9hID0gYXBwLnRpY2tlcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnN0b3AoKTtcclxuKF9iID0gYXBwLnRpY2tlcikgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmRlc3Ryb3koKTtcclxudmFyIGNhbm5vbjtcclxudmFyIGRpc3BsYXlUaWNrID0gMTAwMDtcclxudmFyIGdhbWVNYW5hZ2VyID0gR2FtZU1hbmFnZXJfMS5HYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpO1xyXG5nYW1lTWFuYWdlci5pbml0KGFwcCwgcGxheSwgZ2FtZUxvb3ApO1xyXG52YXIgYW5pbWF0aW9uRlJUZXh0ID0gbmV3IFBJWEkuVGV4dCgnJywgeyBmb250RmFtaWx5OiAnQXJpYWwnLCBmb250U2l6ZTogMjIsIGZpbGw6IDB4RkY1MEZGLCBhbGlnbjogJ2NlbnRlcicgfSk7XHJcbmFuaW1hdGlvbkZSVGV4dC5wb3NpdGlvbiA9IG5ldyBQSVhJLlBvaW50KDEwMCwgMTAwKTtcclxudmFyIHJlbmRlcmVyRlJUZXh0ID0gbmV3IFBJWEkuVGV4dCgnJywgeyBmb250RmFtaWx5OiAnQXJpYWwnLCBmb250U2l6ZTogMjIsIGZpbGw6IDB4RkY1MEZGLCBhbGlnbjogJ2NlbnRlcicgfSk7XHJcbnJlbmRlcmVyRlJUZXh0LnBvc2l0aW9uID0gbmV3IFBJWEkuUG9pbnQoMTAwLCAxMjApO1xyXG52YXIgc2NlbmVNYW5hZ2VyID0gU2NlbmVNYW5hZ2VyXzEuU2NlbmVNYW5hZ2VyLmdldEluc3RhbmNlKCk7XHJcbnNjZW5lTWFuYWdlci5Mb2FkU2NlbmUoTG9hZExldmVsLCBzZXRVcEdhbWUpO1xyXG5mdW5jdGlvbiBzZXRVcEdhbWUoKSB7XHJcbiAgICBnYW1lTWFuYWdlci5zZXRQbGF5ZXJJbnB1dChzY2VuZU1hbmFnZXIsIGNhbm5vbik7XHJcbiAgICBnYW1lTWFuYWdlci5zZXRVcFNpbXVsYXRpb25Mb29wcygpO1xyXG59XHJcbi8vSXMgY2FsbGVkIGJ5IHRoZSBhbmltYXRpb24gbG9vcCBpbiB0aGUgR2FtZU1hbmFnZXIsIGN1cnJlbnRseSB0aGVyZSBpcyBvbmx5IGEgcGxheSBcclxuLy8gZ2FtZSBzdGF0ZSwgc2V0IGVhcmxpZXIgaW4gdGhlIGNvbnN0cnVjdG9yLiBMYXRlciB0aGlzIHN0YXRlIGNhbiBjaGFuZ2UsIGFsbG93aW5nIGZvciBcclxuLy8gZWFzaWVyIHN3aXRjaGVzIGJldHdlZW4gbGV2ZWxzIGV0Yy4gXHJcbmZ1bmN0aW9uIGdhbWVMb29wKGRlbHRhKSB7XHJcbiAgICBpZiAoZ2FtZU1hbmFnZXIubG9hZEZsYWcgIT09IHRydWUpIHtcclxuICAgICAgICBnYW1lTWFuYWdlci5nYW1lU3RhdGUoZGVsdGEpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgZ2FtZU1hbmFnZXIucGF1c2VSZW5kZXJlcnMoKTtcclxuICAgICAgICBzY2VuZU1hbmFnZXIucmVtb3ZlQWxsR2FtZU9iamVjdHMoYXBwKTtcclxuICAgICAgICBzY2VuZU1hbmFnZXIuY3VycmVudExldmVsID0gc2NlbmVNYW5hZ2VyLmN1cnJlbnRMZXZlbCArIDEgPD0gc2NlbmVNYW5hZ2VyLm51bWJlck9mTGV2ZWxzID8gc2NlbmVNYW5hZ2VyLmN1cnJlbnRMZXZlbCArIDEgOiAxO1xyXG4gICAgICAgIHNjZW5lTWFuYWdlci5Mb2FkU2NlbmUoTG9hZExldmVsLCBzZXRVcEdhbWUpO1xyXG4gICAgICAgIGdhbWVNYW5hZ2VyLnBsYXllcklucHV0LmxpbmtQbGF5ZXJPYmplY3QoY2Fubm9uKTtcclxuICAgICAgICBnYW1lTWFuYWdlci5sb2FkRmxhZyA9IGZhbHNlO1xyXG4gICAgICAgIGdhbWVNYW5hZ2VyLnJlc3VtZVJlbmRlcmVycygpO1xyXG4gICAgICAgIGdhbWVNYW5hZ2VyLmdhbWVTdGF0ZShkZWx0YSk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gZGlzcGxheUFuaW1hdGlvbkZyYW1lUmF0ZSgpIHtcclxuICAgIGFuaW1hdGlvbkZSVGV4dC50ZXh0ID0gXCJBbmltYXRpb24gVGljayBJbnRlcnZhbDogXCIgKyBnYW1lTWFuYWdlci5hbmltYXRpb25UaWNrVGltZSArIFwiIG1zXCI7XHJcbiAgICBhcHAuc3RhZ2UuYWRkQ2hpbGQoYW5pbWF0aW9uRlJUZXh0KTtcclxufVxyXG5mdW5jdGlvbiBkaXNwbGF5UmVuZGVyRnJhbWVSYXRlKCkge1xyXG4gICAgdmFyIGZwcyA9IE1hdGguY2VpbCgxMDAwIC8gZ2FtZU1hbmFnZXIuckxvb3BEZWx0YSk7XHJcbiAgICByZW5kZXJlckZSVGV4dC50ZXh0ID0gXCJSZW5kZXJlciBGUFM6IFwiICsgZnBzO1xyXG4gICAgYXBwLnN0YWdlLmFkZENoaWxkKHJlbmRlcmVyRlJUZXh0KTtcclxufVxyXG4vKiBHYW1lU3RhdGUgUGxheS4gSW4gdGhpcyBmdW5jdGlvbiBhbGwgdGhlIGdhbWUgb2JqZWN0cyBhbmQgcmlnaWQgYm9kaWVzIGFyZSB1cGRhdGVkLCBhbmRcclxuY2hlY2tlZCBmb3IgY29sbGlzaW9ucy5cclxuKi9cclxuZnVuY3Rpb24gcGxheShkZWx0YSkge1xyXG4gICAgdmFyIF9hLCBfYjtcclxuICAgIC8vUmVmYWN0b3IgdWdseSBjb2RlXHJcbiAgICBpZiAoc2NlbmVNYW5hZ2VyLnJlc2V0ID09PSB0cnVlKSB7XHJcbiAgICAgICAgc2NlbmVNYW5hZ2VyLnJlbW92ZUFsbEdhbWVPYmplY3RzKGFwcCk7XHJcbiAgICAgICAgc2NlbmVNYW5hZ2VyLkxvYWRTY2VuZShMb2FkTGV2ZWwsIHNldFVwR2FtZSk7XHJcbiAgICAgICAgZ2FtZU1hbmFnZXIucGxheWVySW5wdXQubGlua1BsYXllck9iamVjdChjYW5ub24pO1xyXG4gICAgICAgIGdhbWVNYW5hZ2VyLmFuaW1hdGlvblRpY2tUaW1lID0gNTtcclxuICAgICAgICBnYW1lTWFuYWdlci5yZW5kZXJGUFMgPSA2MDtcclxuICAgICAgICBzY2VuZU1hbmFnZXIucmVtb3ZlQWxsUkJHcmFwaGljcygpO1xyXG4gICAgICAgIHNjZW5lTWFuYWdlci5yZW1vdmVBbGxTcGxpbmVHcmFwaGljcygpO1xyXG4gICAgICAgIHNjZW5lTWFuYWdlci5yZXNldCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgKF9hID0gZ2FtZU1hbmFnZXIucGxheWVySW5wdXQuYXR0YWNoZWRPYmplY3QpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5IYW5kbGVDYW5ub25DaGFyZ2UoYXBwLCBzY2VuZU1hbmFnZXIucmVzb3VyY2VzKTtcclxuICAgIChfYiA9IGdhbWVNYW5hZ2VyLnBsYXllcklucHV0LmF0dGFjaGVkT2JqZWN0KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IudXBkYXRlU2hvb3RpbmdBbmdsZSgpO1xyXG4gICAgc2NlbmVNYW5hZ2VyLnJpZ2lkQm9keUNvbGxlY3Rpb24uZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gICAgICAgIGVsZW1lbnQuVXBkYXRlUmlnaWRCb2R5KGRlbHRhKTtcclxuICAgICAgICBpZiAoc2NlbmVNYW5hZ2VyLmRyYXdSQlByb3BlcnRpZXMpIHtcclxuICAgICAgICAgICAgc2NlbmVNYW5hZ2VyLnJiR3JhcGhpY3MuZmlsdGVyKGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIGVsZW1lbnQubGluZWFyVmlzdWFsaXphdGlvbiA9PSBvYmo7IH0pO1xyXG4gICAgICAgICAgICBzY2VuZU1hbmFnZXIucmJHcmFwaGljcy5maWx0ZXIoZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gZWxlbWVudC5hbmd1bGFyVmlzdWFsaXphdGlvbiA9PSBvYmo7IH0pO1xyXG4gICAgICAgICAgICBlbGVtZW50LlNob3dGb3JjZVZlY3RvcnMoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHNjZW5lTWFuYWdlci5nYW1lT2JqZWN0Q29sbGVjdGlvbi5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgICAgICAgZWxlbWVudC5VcGRhdGUoZGVsdGEpO1xyXG4gICAgfSk7XHJcbiAgICAvL05vbiBSQiBDb2xsaXNpb25zISEhXHJcbiAgICBzY2VuZU1hbmFnZXIuY29sbGlkZXJDb2xsZWN0aW9uLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICAgICAgICBzY2VuZU1hbmFnZXIuY29sbGlkZXJDb2xsZWN0aW9uLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQyKSB7XHJcbiAgICAgICAgICAgIGlmICgoZWxlbWVudCAhPT0gZWxlbWVudDIpICYmIChlbGVtZW50LnBhcmVudEdhbWVPYmplY3QucmlnaWRib2R5LmluZmluaXRlTWFzcyA9PT0gZmFsc2UpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbXR2ID0gZWxlbWVudC5jaGVja0ZvckNvbGxpc2lvbnMoZWxlbWVudDIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG10di5jb2xsaWRpbmcgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKG10di5jcFswXSAhPT0gdW5kZWZpbmVkICYmIG10di5jcFswXSAhPT0gbnVsbCkgfHwgbXR2LmNwWzFdICE9PSB1bmRlZmluZWQgJiYgbXR2LmNwWzFdICE9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5wYXJlbnRHYW1lT2JqZWN0LnJpZ2lkYm9keS5yZXNvbHZlUmlnaWRib2R5Q29sbGlzaW9uKG10diwgZWxlbWVudDIucGFyZW50R2FtZU9iamVjdC5yaWdpZGJvZHkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2NlbmVNYW5hZ2VyLmRyYXdSQlByb3BlcnRpZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtdHYuY3BbMF0gIT09IHVuZGVmaW5lZCAmJiBtdHYuY3BbMF0gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3BQb2ludCA9IG5ldyBDUEluZGljYXRvcl8xLkNQSW5kaWNhdG9yKDI1LCBtdHYuY3BbMF0sIDB4MTJGRkFCKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtdHYuY3BbMV0gIT09IHVuZGVmaW5lZCAmJiBtdHYuY3BbMV0gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3BQb2ludCA9IG5ldyBDUEluZGljYXRvcl8xLkNQSW5kaWNhdG9yKDI1LCBtdHYuY3BbMV0sIDB4RkYxMkZGKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnBhcmVudEdhbWVPYmplY3Qub25Db2xsaXNpb25FbnRlcihlbGVtZW50Mik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQyLnBhcmVudEdhbWVPYmplY3Qub25Db2xsaXNpb25FbnRlcihlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiQSBjb2xsaXNpb24gZXJyb3Igb2NjdXJlZC4gQ2xpY2sgT2sgdG8gcmVzZXQgc2NlbmUuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2VuZU1hbmFnZXIucmVzZXQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lTWFuYWdlci5hbmltYXRpb25UaWNrVGltZSA9IDU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVNYW5hZ2VyLnJlbmRlckZQUyA9IDYwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBkaXNwbGF5VGljayAtPSBnYW1lTWFuYWdlci5hTG9vcERlbHRhO1xyXG4gICAgaWYgKGRpc3BsYXlUaWNrIDw9IDApIHtcclxuICAgICAgICBkaXNwbGF5QW5pbWF0aW9uRnJhbWVSYXRlKCk7XHJcbiAgICAgICAgZGlzcGxheVJlbmRlckZyYW1lUmF0ZSgpO1xyXG4gICAgICAgIGRpc3BsYXlUaWNrID0gMTAwMDtcclxuICAgIH1cclxufVxyXG4vKiogVGhlIGJlc3Qgd2F5IHRvIGhhbmRsZSBkaWZmZXJlbnQgaGFuZGxlcyB3b3VsZCBiZSB0aGUgdXNhZ2Ugb2YgSlNPTnMgKi9cclxuZnVuY3Rpb24gTG9hZExldmVsKGxldmVsKSB7XHJcbiAgICB2YXIgYmFja2dyb3VuZCA9IFNjZW5lTWFuYWdlcl8xLlNjZW5lTWFuYWdlci5nZXRJbnN0YW5jZSgpLmN1cnJlbnRMZXZlbCA9PT0gNCA/IFwiYmFja2dyb3VuZDJcIiA6IFwiYmFja2dyb3VuZFwiO1xyXG4gICAgdmFyIGdyYXZpdHkgPSBTY2VuZU1hbmFnZXJfMS5TY2VuZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5jdXJyZW50TGV2ZWwgPT09IDQgPyBmYWxzZSA6IHRydWU7XHJcbiAgICBzY2VuZU1hbmFnZXIuYWRkQmFja2dyb3VuZChiYWNrZ3JvdW5kKTtcclxuICAgIGNhbm5vbiA9IG5ldyBDYW5ub25fMS5DYW5ub24oKTtcclxuICAgIGNhbm5vbi50cmFuc2Zvcm0ucG9zaXRpb24uc2V0KDIxMCwgNjAwKTtcclxuICAgIGNhbm5vbi5hZGRTcHJpdGUoc2NlbmVNYW5hZ2VyLnJlc291cmNlc1tcImNhbm9uXCJdLnRleHR1cmUsIG5ldyBWZWN0b3IyXzEuVmVjdG9yMigzLCAzKSk7XHJcbiAgICBjYW5ub24uYWRkQ29sbGlkZXIodHJ1ZSk7XHJcbiAgICBjYW5ub24uYWRkUmlnaWRib2R5KGNhbm5vbiwgMSwgdHJ1ZSk7XHJcbiAgICBjYW5ub24ucm90YXRlR2FtZU9iamVjdCgtNDUpO1xyXG4gICAgY2Fubm9uLmdyYXZpdHlPbiA9IGdyYXZpdHk7XHJcbiAgICBzY2VuZU1hbmFnZXIuYWRkT2JzdGFjbGVzKHNjZW5lTWFuYWdlci5jdXJyZW50TGV2ZWwpO1xyXG4gICAgc2NlbmVNYW5hZ2VyLmJ1aWxkV2FsbHMoKTtcclxuICAgIHNjZW5lTWFuYWdlci5hZGRBbGxTcHJpdGVzVG9TdGFnZShhcHAuc3RhZ2UpO1xyXG4gICAgR2FtZU1hbmFnZXJfMS5HYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpLnNjb3JlVGV4dC50ZXh0ID0gXCJTY29yZTogXCIgKyBHYW1lTWFuYWdlcl8xLkdhbWVNYW5hZ2VyLmdldEluc3RhbmNlKCkuc2NvcmU7XHJcbiAgICBHYW1lTWFuYWdlcl8xLkdhbWVNYW5hZ2VyLmdldEluc3RhbmNlKCkuYXBwLnN0YWdlLmFkZENoaWxkKEdhbWVNYW5hZ2VyXzEuR2FtZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5zY29yZVRleHQpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=