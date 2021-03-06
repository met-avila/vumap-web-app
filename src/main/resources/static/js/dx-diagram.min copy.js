/*!
 * DevExpress Diagram (dx-diagram.min)
 * Version: 0.1.54
 * Build date: Tue Mar 10 2020
 * 
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExpress licensing here: https://www.devexpress.com/Support/EULAs
 */
! function(t, e) { "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.diagram = e() : (t.DevExpress = t.DevExpress || {}, t.DevExpress.diagram = e()) }(window, function() {
    return function(t) {
        var e = {};

        function n(o) { if (e[o]) return e[o].exports; var i = e[o] = { i: o, l: !1, exports: {} }; return t[o].call(i.exports, i, i.exports, n), i.l = !0, i.exports }
        return n.m = t, n.c = e, n.d = function(t, e, o) { n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: o }) }, n.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, n.t = function(t, e) {
            if (1 & e && (t = n(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var o = Object.create(null);
            if (n.r(o), Object.defineProperty(o, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
                for (var i in t) n.d(o, i, function(e) { return t[e] }.bind(null, i));
            return o
        }, n.n = function(t) { var e = t && t.__esModule ? function() { return t.default } : function() { return t }; return n.d(e, "a", e), e }, n.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, n.p = "", n(n.s = 8)
    }([function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = function() {
            function t(t, e) { this.width = t, this.height = e }
            return t.prototype.clone = function() { return new t(this.width, this.height) }, t.prototype.toString = function() { return JSON.stringify(this) }, t.prototype.offset = function(e, n) { return void 0 === e && (e = 0), void 0 === n && (n = 0), new t(Math.max(0, this.width + e), Math.max(0, this.height + n)) }, t.prototype.multiply = function(e, n) { return void 0 === e && (e = 1), void 0 === n && (n = e), new t(this.width * e, this.height * n) }, t.prototype.equals = function(t) { return t.width === this.width && t.height === this.height }, t.prototype.transform = function(e) { return new t(e(this.width), e(this.height)) }, t
        }();
        e.Size = o;
        var i = function() {
            function t(t, e) { this.x = t, this.y = e }
            return t.prototype.clone = function() { return new t(this.x, this.y) }, t.prototype.toString = function() { return JSON.stringify(this) }, t.prototype.offset = function(e, n) { return void 0 === e && (e = 0), void 0 === n && (n = 0), new t(this.x + e, this.y + n) }, t.prototype.multiply = function(e, n) { return void 0 === e && (e = 1), void 0 === n && (n = e), new t(this.x * e, this.y * n) }, t.prototype.equals = function(t) { return t.x === this.x && t.y === this.y }, t.prototype.transform = function(e) { return new t(e(this.x), e(this.y)) }, t.empty = function() { return new t(0, 0) }, t.plus = function(e, n) { return new t(e.x + n.x, e.y + n.y) }, t.minus = function(e, n) { return new t(e.x - n.x, e.y - n.y) }, t
        }();
        e.Point = i;
        var r = function() {
            function t(t, e, n, o) { this.left = t, this.top = e, this.right = n, this.bottom = o }
            return Object.defineProperty(t.prototype, "horizontal", { get: function() { return this.left + this.right }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "vertical", { get: function() { return this.top + this.bottom }, enumerable: !0, configurable: !0 }), t.prototype.clone = function() { return new t(this.left, this.top, this.right, this.bottom) }, t.prototype.transform = function(e) { return new t(e(this.left), e(this.top), e(this.right), e(this.bottom)) }, t.prototype.offset = function(t, e) { var n = this.clone(); return e ? (n.left += t.left, n.right += t.right, n.top += t.top, n.bottom += t.bottom) : (n.left -= t.left, n.right -= t.right, n.top -= t.top, n.bottom -= t.bottom), n }, t.prototype.multiply = function(e, n) { return void 0 === e && (e = 1), void 0 === n && (n = e), new t(this.left * e, this.top * n, this.right * e, this.bottom * n) }, t.prototype.isEmpty = function() { return 0 === this.left && 0 === this.right && 0 === this.top && 0 === this.bottom }, t.prototype.equals = function(t) { return this.left === t.left && this.top === t.top && this.right === t.right && this.bottom === t.bottom }, t.prototype.toString = function() { return "left: " + this.left + " top: " + this.top + " right: " + this.right + " bottom: " + this.bottom }, t.empty = function() { return new t(0, 0, 0, 0) }, t.fromNumber = function(e) { return new t(e, e, e, e) }, t.fromSide = function(e, n) { return new t(e, n, e, n) }, t
        }();
        e.Offset = r;
        var s = function() {
            function t(t, e) { this.position = t, this.size = e }
            return Object.defineProperty(t.prototype, "left", { get: function() { return this.position.x }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "top", { get: function() { return this.position.y }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "right", { get: function() { return this.position.x + this.size.width }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "bottom", { get: function() { return this.position.y + this.size.height }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "center", { get: function() { return new i(this.position.x + this.size.width / 2, this.position.y + this.size.height / 2) }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "width", { get: function() { return this.size.width }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "height", { get: function() { return this.size.height }, enumerable: !0, configurable: !0 }), t.prototype.clone = function() { return new t(this.position.clone(), this.size.clone()) }, t.prototype.toString = function() { return JSON.stringify(this) }, t.prototype.contains = function(t) { return this.left <= t.x && t.x <= this.right && this.top <= t.y && t.y <= this.bottom }, t.prototype.intersectX = function(t) { return !(this.left > t.right || t.left > this.right) }, t.prototype.intersectY = function(t) { return !(this.top > t.bottom || t.top > this.bottom) }, t.prototype.intersect = function(t) { return this.intersectX(t) && this.intersectY(t) }, t.prototype.inflate = function(e, n) { return n = void 0 === n ? e : n, new t(this.position.offset(-e, -n), this.size.offset(2 * e, 2 * n)) }, t.prototype.resize = function(e, n) { return new t(this.position, this.size.offset(e, n)) }, t.prototype.offset = function(e, n) { return new t(this.position.offset(e, n), this.size) }, t.prototype.multiply = function(e) { return new t(this.position.multiply(e), this.size.multiply(e)) }, t.prototype.equals = function(t) { return this.left === t.left && this.top === t.top && this.width === t.width && this.height === t.height }, t.prototype.transform = function(e) { return new t(this.position.transform(e), this.size.transform(e)) }, t.create = function(e, n, r, s) { return new t(new i(e, n), new o(r, s)) }, t.createByPoints = function(e, n) { return t.createByPositions(e.x, e.y, n.x, n.y) }, t.createByPositions = function(e, n, o, i) {
                var r = Math.min(e, o),
                    s = Math.min(n, i),
                    a = Math.abs(o - e),
                    c = Math.abs(i - n);
                return t.create(r, s, a, c)
            }, t
        }();
        e.Rectangle = s;
        var a = function() {
            function t(t, e) { this.startPoint = t, this.endPoint = e }
            return Object.defineProperty(t.prototype, "distance", { get: function() { return p.getDistance(this.startPoint, this.endPoint) }, enumerable: !0, configurable: !0 }), t.prototype.intersect = function(t) { return !!(this.startPoint.equals(t.startPoint) || this.endPoint.equals(t.startPoint) || this.startPoint.equals(t.endPoint) || this.endPoint.equals(t.endPoint)) || this.intersectCore(t) && t.intersectCore(this) }, t.prototype.intersectRect = function(e) {
                var n = e.position,
                    o = new i(e.left, e.bottom),
                    r = new i(e.right, e.top),
                    s = new i(e.right, e.bottom);
                return e.contains(this.startPoint) || e.contains(this.endPoint) || this.intersect(new t(n, o)) || this.intersect(new t(o, s)) || this.intersect(new t(s, r)) || this.intersect(new t(r, n))
            }, t.prototype.intersectCore = function(t) {
                if (this.startPoint.x === this.endPoint.x) { if (this.startPoint.x - t.endPoint.x != 0) return (this.startPoint.x - t.startPoint.x) / (this.startPoint.x - t.endPoint.x) <= 0; if (t.endPoint.y - this.endPoint.y != 0) return (t.endPoint.y - this.startPoint.y) / (t.endPoint.y - this.endPoint.y) <= 0 }
                if (this.startPoint.y === this.endPoint.y) { if (this.startPoint.y - t.endPoint.y != 0) return (this.startPoint.y - t.startPoint.y) / (this.startPoint.y - t.endPoint.y) <= 0; if (t.endPoint.x - this.endPoint.x != 0) return (t.endPoint.x - this.startPoint.x) / (t.endPoint.x - this.endPoint.x) <= 0 }
                var e = (this.endPoint.y - this.startPoint.y) / (this.endPoint.x - this.startPoint.x),
                    n = this.startPoint.y + (t.startPoint.x - this.startPoint.x) * e,
                    o = this.startPoint.y + (t.endPoint.x - this.startPoint.x) * e,
                    i = t.startPoint.y - n,
                    r = t.endPoint.y - o;
                return 0 === i && 0 === r ? (this.startPoint.y - n) / (this.endPoint.y - n) <= 0 || (this.startPoint.y - o) / (this.endPoint.y - o) <= 0 : 0 === i || 0 === r || i / r < 0
            }, t.create = function(e, n, o, r) { return new t(new i(e, n), new i(o, r)) }, t.createByPoints = function(e, n) { return t.create(e.x, e.y, n.x, n.y) }, t
        }();
        e.Segment = a;
        var c = function() {
            function t() { this.listeners = [] }
            return t.prototype.add = function(t) {
                if (!t) throw new Error("Not Implemented");
                this.hasEventListener(t) || this.listeners.push(t)
            }, t.prototype.remove = function(t) {
                for (var e, n = 0; e = this.listeners[n]; n++)
                    if (e === t) { this.listeners.splice(n, 1); break }
            }, t.prototype.raise = function(t) { for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n]; for (var o, i = 0; o = this.listeners[i]; i++) o[t].apply(o, e) }, t.prototype.raise1 = function(t) { for (var e, n = 0; e = this.listeners[n]; n++) t(e) }, t.prototype.hasEventListener = function(t) {
                for (var e = 0, n = this.listeners.length; e < n; e++)
                    if (this.listeners[e] === t) return !0;
                return !1
            }, t
        }();
        e.EventDispatcher = c;
        var u = function() {
            function t() {}
            return t.binaryIndexOf = function(t, e, n, o) {
                void 0 === n && (n = 0), void 0 === o && (o = -2);
                var i = 0 == n;
                for (-2 == o && (o = t.length - 1); n <= o;) {
                    var r = n + (o - n >> 1),
                        s = e(t[r]);
                    if (s < 0) n = r + 1;
                    else {
                        if (!(s > 0)) return r;
                        o = r - 1
                    }
                }
                return i ? ~n : -1
            }, t.normedBinaryIndexOf = function(e, n, o, i) { void 0 === o && (o = 0), void 0 === i && (i = -2); var r = t.binaryIndexOf(e, n, o, i); return t.binaryIndexNormalizator(r) }, t.binaryIndexNormalizator = function(t) { return t < 0 ? ~t - 1 : t }, t
        }();
        e.Utils = u;
        var p = function() {
            function t() {}
            return t.getCommonRectangle = function(t) {
                if (!t.length) return s.create(0, 0, 0, 0);
                var e = Number.MAX_VALUE,
                    n = -Number.MAX_VALUE,
                    o = Number.MAX_VALUE,
                    i = -Number.MAX_VALUE;
                return t.forEach(function(t) { e = Math.min(e, t.left), n = Math.max(n, t.right), o = Math.min(o, t.top), i = Math.max(i, t.bottom) }), s.create(e, o, n - e, i - o)
            }, t.findFreeSpace = function(t, e, n, o) {
                var r = [o ? o.left : 0],
                    s = [o ? o.top : 0];
                t.forEach(function(t) { r.push(t.left), r.push(t.right), s.push(t.top), s.push(t.bottom) }), r = r.sort(function(t, e) { return t - e }).reduce(function(t, e, n) { return r[n - 1] !== e && t.push(e) && t || t }, []);
                for (var a = (s = s.sort(function(t, e) { return t - e }).reduce(function(t, e, n) { return s[n - 1] !== e && t.push(e) && t || t }, [])).map(function(t) { return r.map(function(t, e) { return r[e + 1] - t }) }), c = function(t, e) {
                        for (var n = u.binaryIndexOf(r, function(t) { return t - e.left }), o = u.binaryIndexOf(r, function(t) { return t - e.right }), i = u.binaryIndexOf(s, function(t) { return t - e.top }), c = u.binaryIndexOf(s, function(t) { return t - e.bottom }), p = i; p < c; p++)
                            for (var h = n; h < o; h++) a[p][h] *= -1
                    }, p = 0, h = void 0; h = t[p]; p++) c(0, h);
                for (var l = 0; l < s.length; l++)
                    for (var d = 0; d < r.length - 1; d++) {
                        var f = this.checkRect(a, s, r, l, d, e, n);
                        if (f > 0) d = f;
                        else if (0 === f) return new i(r[d], s[l])
                    }
                return null
            }, t.checkRect = function(t, e, n, o, i, r, s) {
                for (var a = 0, c = 0, u = n.length - 2, p = o; p < e.length; p++) {
                    a = e[p + 1] - e[o];
                    for (var h = i; h <= u; h++) {
                        if (t[p][h] < 0) return 0 === h ? -1 : h;
                        if (c = n[h + 1] - n[i], r.width <= c || !s && h === n.length - 2 && r.width / 2 <= c) {
                            if (r.height <= a || !s && p === e.length - 2 && r.height / 2 <= a) return 0;
                            u = h
                        }
                    }
                }
            }, t.getArrowPoints = function(t, e, n, o) {
                if (t.x === e.x && t.y === e.y) return { point1: t.clone(), point2: t.clone() };
                var r = e.x - t.x,
                    s = e.y - t.y,
                    a = Math.sqrt(Math.pow(r, 2) + Math.pow(s, 2)),
                    c = r / a,
                    u = s / a,
                    p = t.x + n * c + o * u,
                    h = t.y + n * u - o * c,
                    l = t.x + n * c - o * u,
                    d = t.y + n * u + o * c;
                return { point1: new i(p, h), point2: new i(l, d) }
            }, t.removeUnnecessaryLinePoints = function(t, e, n) { void 0 === n && (n = function(t) { return void 0 !== t }), this.removeDuplicatedPoints(t, e, n), this.removeOneLinePoints(t, e, n), this.removeBackwardPoints(t, e, n) }, t.removeBackwardPoints = function(t, e, n) {
                void 0 === n && (n = function(t) { return void 0 !== t });
                for (var o, i = 0;
                    (o = t[i]) && !(t.length <= 2);) {
                    var r = this.getNextPoint(t, i, !0, n),
                        s = this.getNextPoint(t, i, !1, n);
                    if (s && r) { if (o.x == s.x && o.x == r.x && (o.y > s.y && o.y > r.y || o.y < s.y && o.y < r.y) && e(t[i], i)) continue; if (o.y == s.y && o.y == r.y && (o.x > s.x && o.x > r.x || o.x < s.x && o.x < r.x) && e(t[i], i)) continue }
                    i++
                }
            }, t.removeOneLinePoints = function(t, e, n) {
                void 0 === n && (n = function(t) { return void 0 !== t });
                for (var o, i = 0;
                    (o = t[i]) && !(t.length <= 2);) {
                    var r = this.getNextPoint(t, i, !0, n),
                        s = this.getNextPoint(t, i, !1, n);
                    if (s && r) { if ((o.x == s.x && o.x == r.x || o.y == s.y && o.y == r.y) && e(t[i], i)) continue; var a = (r.y - s.y) / (r.x - s.x); if (r.y - t[i].y == (r.x - t[i].x) * a && e(t[i], i)) continue }
                    i++
                }
            }, t.removeDuplicatedPoints = function(t, e, n) {
                void 0 === n && (n = function(t) { return void 0 !== t });
                for (var o, i = 0;
                    (o = t[i]) && !(t.length <= 2);) {
                    var r = this.getNextPoint(t, i, !0, n);
                    if (r && o.x == r.x && o.y == r.y) { var s = i + 1; if (s === t.length - 1 && s--, e(t[s], s)) continue }
                    i++
                }
            }, t.getNextPoint = function(t, e, n, o) {
                for (var i, r = e + (n ? 1 : -1); i = t[r];) {
                    if (o(i)) return i;
                    r += n ? 1 : -1
                }
            }, t.getDistance = function(t, e) { return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) }, t.getPathLength = function(e) {
                var n, o = 0;
                return e.forEach(function(e) {
                    if (void 0 !== n) {
                        var i = t.getDistance(e, n);
                        o += i
                    }
                    n = e
                }), o
            }, t.getPathPointByPosition = function(e, n) {
                if (!e.length) throw new Error("Invalid points");
                if (0 > n || n > 1) throw new Error("Invalid relative position");
                var o = this.getPathLength(e);
                if (e.length <= 2 && 0 === o) return e[0];
                for (var r = o * n, s = 0, a = 1; a < e.length; a++) {
                    var c = t.getDistance(e[a], e[a - 1]);
                    if (s + c >= r) {
                        var u = r - s,
                            p = (e[a].x - e[a - 1].x) / c,
                            h = (e[a].y - e[a - 1].y) / c;
                        return new i(e[a - 1].x + p * u, e[a - 1].y + h * u)
                    }
                    s += c
                }
                return e[e.length - 1]
            }, t.getLineAngle = function(t, e) { return Math.atan2(e.y - t.y, e.x - t.x) }, t.getTriangleBeginAngle = function(t, e, n) {
                var o = this.getLineAngle(t, e),
                    i = this.getLineAngle(t, n);
                return Math.abs(i - o)
            }, t.getTriangleEndAngle = function(t, e, n) {
                var o = this.getLineAngle(t, e),
                    i = this.getLineAngle(n, e);
                return Math.abs(o - i)
            }, t.getPathPointByPoint = function(e, n) {
                if (!e.length) throw new Error("Invalid points");
                if (1 === e.length) return e[0];
                for (var o, i = Number.MAX_VALUE, r = 1; r < e.length; r++) {
                    var s = e[r - 1],
                        a = e[r];
                    if (n.equals(s)) { o = s.clone(); break }
                    if (n.equals(a)) { o = a.clone(); break }
                    var c = this.getTriangleBeginAngle(s, a, n),
                        u = this.getTriangleEndAngle(s, a, n),
                        p = t.getDistance(n, s),
                        h = t.getDistance(n, a),
                        l = p * Math.sin(c),
                        d = void 0;
                    if ((d = Math.PI / 2 <= c && c <= 3 * Math.PI / 2 ? p : Math.PI / 2 <= u && u <= 3 * Math.PI / 2 ? h : Math.abs(l)) < i)
                        if (i = d, Math.PI / 2 <= c && c <= 3 * Math.PI / 2) o = s.clone();
                        else if (Math.PI / 2 <= u && u <= 3 * Math.PI / 2) o = a.clone();
                    else {
                        var f = Math.fround || Math.round,
                            y = this.getLineAngle(s, a),
                            m = f(Math.abs(l * Math.sin(y))),
                            g = f(Math.abs(l * Math.cos(y))),
                            v = n.y - s.y < f((n.x - s.x) * Math.tan(y));
                        0 <= y && y <= Math.PI / 2 ? (m *= v ? -1 : 1, g *= v ? 1 : -1) : Math.PI / 2 <= y && y <= Math.PI ? (m *= v ? 1 : -1, g *= v ? 1 : -1) : 0 >= y && y >= -Math.PI / 2 ? (m *= v ? 1 : -1, g *= v ? 1 : -1) : -Math.PI / 2 >= y && y >= -Math.PI && (m *= v ? -1 : 1, g *= v ? 1 : -1), o = n.offset(m, g)
                    }
                }
                return o
            }, t.getPathPositionByPoint = function(e, n, o) {
                void 0 === o && (o = 100), n = this.getPathPointByPoint(e, n);
                for (var i = this.getPathLength(e), r = 0, s = 1; s < e.length; s++) {
                    var a = e[s - 1],
                        c = e[s],
                        u = t.getDistance(c, a),
                        p = Math.atan((c.y - a.y) / (c.x - a.x)),
                        h = Math.fround || Math.round;
                    if (n.x === c.x && n.x === a.x || n.y === c.y && n.y === a.y || h(n.y - a.y) === h((n.x - a.x) * Math.tan(p))) return 0 !== Math.sin(p) ? r += Math.abs((n.y - a.y) / Math.sin(p)) : r += Math.abs(n.x - a.x), Math.round(r * o / i) / o;
                    r += u
                }
                return 1
            }, t.arePointsEqual = function(t, e) {
                var n = t.length;
                if (n != e.length) return !1;
                for (var o = 0; o < n; o++)
                    if (!t[o].equals(e[o])) return !1;
                return !0
            }, t
        }();
        e.GeometryUtils = p
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = function() {
            function t() {}
            return t.General = "general", t.Flowchart = "flowchart", t.OrgChart = "orgChart", t.Containers = "containers", t.Custom = "custom", t
        }();
        e.ShapeCategories = o;
        var i = function() {
            function t() {}
            return t.Text = "text", t.Rectangle = "rectangle", t.Ellipse = "ellipse", t.Cross = "cross", t.Triangle = "triangle", t.Diamond = "diamond", t.Heart = "heart", t.Pentagon = "pentagon", t.Hexagon = "hexagon", t.Octagon = "octagon", t.Star = "star", t.ArrowLeft = "arrowLeft", t.ArrowTop = "arrowTop", t.ArrowRight = "arrowRight", t.ArrowBottom = "arrowBottom", t.ArrowNorthSouth = "arrowNorthSouth", t.ArrowEastWest = "arrowEastWest", t.Process = "process", t.Decision = "decision", t.Terminator = "terminator", t.PredefinedProcess = "predefinedProcess", t.Document = "document", t.MultipleDocuments = "multipleDocuments", t.ManualInput = "manualInput", t.Preparation = "preparation", t.Data = "data", t.Database = "database", t.HardDisk = "hardDisk", t.InternalStorage = "internalStorage", t.PaperTape = "paperTape", t.ManualOperation = "manualOperation", t.Delay = "delay", t.StoredData = "storedData", t.Display = "display", t.Merge = "merge", t.Or = "or", t.SummingJunction = "summingJunction", t.VerticalContainer = "verticalContainer", t.HorizontalContainer = "horizontalContainer", t.CardWithImageOnLeft = "cardWithImageOnLeft", t.CardWithImageOnTop = "cardWithImageOnTop", t.CardWithImageOnRight = "cardWithImageOnRight", t
        }();
        e.ShapeTypes = i,
            function(t) { t[t.text = 0] = "text", t[t.rectangle = 1] = "rectangle", t[t.ellipse = 2] = "ellipse", t[t.cross = 3] = "cross", t[t.triangle = 4] = "triangle", t[t.diamond = 5] = "diamond", t[t.heart = 6] = "heart", t[t.pentagon = 7] = "pentagon", t[t.hexagon = 8] = "hexagon", t[t.octagon = 9] = "octagon", t[t.star = 10] = "star", t[t.arrowLeft = 11] = "arrowLeft", t[t.arrowTop = 12] = "arrowTop", t[t.arrowRight = 13] = "arrowRight", t[t.arrowBottom = 14] = "arrowBottom", t[t.arrowNorthSouth = 15] = "arrowNorthSouth", t[t.arrowEastWest = 16] = "arrowEastWest", t[t.process = 17] = "process", t[t.decision = 18] = "decision", t[t.terminator = 19] = "terminator", t[t.predefinedProcess = 20] = "predefinedProcess", t[t.document = 21] = "document", t[t.multipleDocuments = 22] = "multipleDocuments", t[t.manualInput = 23] = "manualInput", t[t.preparation = 24] = "preparation", t[t.data = 25] = "data", t[t.database = 26] = "database", t[t.hardDisk = 27] = "hardDisk", t[t.internalStorage = 28] = "internalStorage", t[t.paperTape = 29] = "paperTape", t[t.manualOperation = 30] = "manualOperation", t[t.delay = 31] = "delay", t[t.storedData = 32] = "storedData", t[t.display = 33] = "display", t[t.merge = 34] = "merge", t[t.or = 35] = "or", t[t.summingJunction = 36] = "summingJunction", t[t.verticalContainer = 37] = "verticalContainer", t[t.horizontalContainer = 38] = "horizontalContainer", t[t.cardWithImageOnLeft = 39] = "cardWithImageOnLeft", t[t.cardWithImageOnTop = 40] = "cardWithImageOnTop", t[t.cardWithImageOnRight = 41] = "cardWithImageOnRight" }(e.ShapeType || (e.ShapeType = {}))
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(13),
            s = n(12),
            a = function(t) {
                function e(e, n, o, i, r) { var s = t.call(this, n, o, i, r) || this; return s.commands = e, s }
                return i(e, t), e.prototype.createMainElement = function() { return document.createElementNS(s.svgNS, "path") }, e.prototype.applyElementProperties = function(e) { e.setAttribute("d", this.commands.map(function(t) { return t.toString() }).join(" ")), t.prototype.applyElementProperties.call(this, e) }, e
            }(n(18).SvgPrimitive);
        e.PathPrimitive = a;
        var c = function() {
            function t() {}
            return t.prototype.getUnitVaue = function(t) { return "number" == typeof t ? r.UnitConverter.twipsToPixels(t).toString() : t }, t
        }();
        e.PathPrimitiveCommand = c;
        var u = function(t) {
            function e(e, n) { var o = t.call(this) || this; return o.x = e, o.y = n, o }
            return i(e, t), e.prototype.toString = function() { return "M " + this.getUnitVaue(this.x) + " " + this.getUnitVaue(this.y) }, e
        }(c);
        e.PathPrimitiveMoveToCommand = u;
        var p = function(t) {
            function e(e, n) { var o = t.call(this) || this; return o.x = e, o.y = n, o }
            return i(e, t), e.prototype.toString = function() { return "L " + this.getUnitVaue(this.x) + " " + this.getUnitVaue(this.y) }, e
        }(c);
        e.PathPrimitiveLineToCommand = p;
        var h = function(t) {
            function e(e, n, o, i, r, s) { var a = t.call(this) || this; return a.x1 = e, a.y1 = n, a.x2 = o, a.y2 = i, a.x3 = r, a.y3 = s, a }
            return i(e, t), e.prototype.toString = function() { return "C " + this.getUnitVaue(this.x1) + " " + this.getUnitVaue(this.y1) + "," + this.getUnitVaue(this.x2) + " " + this.getUnitVaue(this.y2) + "," + this.getUnitVaue(this.x3) + " " + this.getUnitVaue(this.y3) }, e
        }(c);
        e.PathPrimitiveCubicCurveToCommand = h;
        var l = function(t) {
            function e(e, n, o, i) { var r = t.call(this) || this; return r.x1 = e, r.y1 = n, r.x2 = o, r.y2 = i, r }
            return i(e, t), e.prototype.toString = function() { return "Q " + this.getUnitVaue(this.x1) + " " + this.getUnitVaue(this.y1) + "," + this.getUnitVaue(this.x2) + " " + this.getUnitVaue(this.y2) }, e
        }(c);
        e.PathPrimitiveQuadraticCurveToCommand = l;
        var d = function(t) {
            function e(e, n, o, i, r, s, a) { var c = t.call(this) || this; return c.rx = e, c.ry = n, c.xAxisRotation = o, c.largeArcFlag = i, c.sweepFag = r, c.x = s, c.y = a, c }
            return i(e, t), e.prototype.toString = function() { return "A " + this.getUnitVaue(this.rx) + " " + this.getUnitVaue(this.ry) + " " + this.getUnitVaue(this.xAxisRotation) + " " + (this.largeArcFlag ? "1" : "0") + " " + (this.sweepFag ? "1" : "0") + this.getUnitVaue(this.x) + "," + this.getUnitVaue(this.y) }, e
        }(c);
        e.PathPrimitiveArcToCommand = d;
        var f = function(t) {
            function e() { return t.call(this) || this }
            return i(e, t), e.prototype.toString = function() { return "z" }, e
        }(c);
        e.PathPrimitiveClosePathCommand = f
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = function() {
            function t() { this.uniqueId = -1 }
            return t.prototype.changeModified = function() { return !0 }, t.prototype.getName = function() { return this.constructor.name }, t
        }();
        e.HistoryItem = r;
        var s = function(t) {
            function e() { var e = null !== t && t.apply(this, arguments) || this; return e.historyItems = [], e }
            return i(e, t), e.prototype.changeModified = function() {
                for (var t, e = 0; t = this.historyItems[e]; e++)
                    if (t.changeModified()) return !0;
                return !1
            }, e.prototype.redo = function(t) { for (var e, n = 0; e = this.historyItems[n]; n++) e.redo(t) }, e.prototype.undo = function(t) { for (var e, n = this.historyItems.length - 1; e = this.historyItems[n]; n--) e.undo(t) }, e.prototype.add = function(t) {
                if (null == t) throw new Error("cannot be null");
                this.historyItems.push(t)
            }, e
        }(r);
        e.CompositionHistoryItem = s
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o, i = n(0),
            r = n(27);
        ! function(t) { t[t.Undefined = -1] = "Undefined", t[t.North = 0] = "North", t[t.East = 1] = "East", t[t.South = 2] = "South", t[t.West = 3] = "West" }(o = e.ConnectionPointSide || (e.ConnectionPointSide = {})), e.DEFAULT_ZINDEX = 0;
        var s = function() {
            function t() { this.key = void 0, this.dataKey = void 0, this.attachedConnectors = [], this.zIndex = e.DEFAULT_ZINDEX, this.locked = !1, this.container = void 0, this.containerLocked = !1, this.style = new r.Style, this.styleText = new r.StyleText }
            return t.prototype.assign = function(t) { t.key = this.key, t.dataKey = this.dataKey, t.locked = this.locked, t.attachedConnectors = this.attachedConnectors.slice(), t.style = this.style.clone(), t.styleText = this.styleText.clone(), t.zIndex = this.zIndex, t.container = this.container, t.containerLocked = this.containerLocked }, t.prototype.invalidatePrimitives = function() { this.primitives && this.primitives.forEach(function(t) { t.dispose() }), delete this.primitives, delete this.selectorPrimitives }, t.prototype.getPrimitives = function() { return this.primitives || (this.primitives = this.createPrimitives()), this.primitives }, t.prototype.getSelectorPrimitives = function() { return this.selectorPrimitives || (this.selectorPrimitives = this.createSelectorPrimitives()), this.selectorPrimitives }, t.prototype.getConnectionPointPosition = function(t, e) { return this.getConnectionPoint(t, e).toPoint() }, t.prototype.getConnectionPoint = function(t, e) { t < 0 && e && (t = this.getNearestConnectionPoint(e)); var n = this.getConnectionPoints(); return n[t] || n[0] }, t.prototype.getNearestConnectionPoint = function(t) {
                var e, n = Number.MAX_VALUE;
                return this.getConnectionPoints().forEach(function(o, r) {
                    var s = i.GeometryUtils.getDistance(o, t);
                    s < n && (n = s, e = r)
                }), e
            }, t.prototype.getConnectionPointIndex = function(t) { var e = this.getConnectionPoints(); return e.reduce(function(n, i, r) { return t === o.North && i.y < e[n].y ? r : t === o.South && i.y > e[n].y ? r : t === o.West && i.x < e[n].x ? r : t === o.East && i.x > e[n].x ? r : n }, 0) }, t.prototype.getConnectionPointSideByIndex = function(t, e) { var n = this.getConnectionPoint(t, e); return this.getConnectionPointSide(n, e) }, t.prototype.getConnectionPointIndexForSide = function(t) { return t }, Object.defineProperty(t.prototype, "enableText", { get: function() { return !0 }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "allowEditText", { get: function() { return !0 }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "enableChildren", { get: function() { return !1 }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "isLocked", { get: function() { return this.locked || this.containerLocked }, enumerable: !0, configurable: !0 }), t.prototype.intersectedByRect = function(t) { return this.rectangle.intersect(t) }, t
        }();
        e.DiagramItem = s
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r, s = n(4),
            a = n(0),
            c = n(13),
            u = n(80),
            p = n(143),
            h = n(144),
            l = n(24),
            d = n(150),
            f = n(64),
            y = n(10),
            m = n(15),
            g = n(33),
            v = n(63);
        ! function(t) { t[t.Begin = 0] = "Begin", t[t.End = 1] = "End" }(r = e.ConnectorPosition || (e.ConnectorPosition = {})), e.CONNECTOR_DEFAULT_TEXT_POSITION = .5;
        var P = function(t) {
            function n(e) { var n = t.call(this) || this; if (n.beginConnectionPointIndex = -1, n.endConnectionPointIndex = -1, n.properties = new l.ConnectorProperties, n.points = e.map(function(t) { return t.clone() }), e.length < 2) throw Error("Points count should be greater than 1"); return n.texts = new d.ConnectorTexts, n }
            return i(n, t), n.prototype.assign = function(e) { t.prototype.assign.call(this, e), e.beginItem = this.beginItem, e.beginConnectionPointIndex = this.beginConnectionPointIndex, e.endItem = this.endItem, e.endConnectionPointIndex = this.endConnectionPointIndex, e.properties = this.properties.clone(), e.texts = this.texts.clone() }, n.prototype.clone = function() { var t = new n(this.points); return this.assign(t), t }, n.prototype.getRenderPoints = function(t) { return void 0 === t && (t = !1), void 0 === this.renderPoints && (this.renderPoints = this.getCalculator().getPoints(), this.renderPointsWithoutSkipped = this.renderPoints.filter(function(t) { return !t.skipped })), t ? this.renderPoints : this.renderPointsWithoutSkipped }, n.prototype.getText = function(t) { void 0 === t && (t = e.CONNECTOR_DEFAULT_TEXT_POSITION); var n = this.texts.get(t); return n ? n.value : "" }, n.prototype.setText = function(t, n) { void 0 === n && (n = e.CONNECTOR_DEFAULT_TEXT_POSITION), t && "" !== t ? this.texts.set(n, new d.ConnectorText(n, t)) : this.texts.remove(n) }, n.prototype.getTextPoint = function(t) { var e = this.getRenderPoints(); return a.GeometryUtils.getPathPointByPosition(e, t) }, n.prototype.getTextPositionByPoint = function(t) {
                var e = this.getRenderPoints(),
                    n = a.GeometryUtils.getPathLength(e),
                    o = a.GeometryUtils.getPathPositionByPoint(e, t),
                    i = c.UnitConverter.pointsToTwips(parseInt(this.styleText["font-size"]));
                return i > o * n ? i / n : i > n - o * n ? (n - i) / n : o
            }, n.prototype.getTextRectangle = function(t) { return new a.Rectangle(this.getTextPoint(t), new a.Size(0, 0)) }, n.prototype.getCalculator = function() { return this.properties.lineOption === l.ConnectorLineOption.Straight ? new p.ConnectorPointsCalculator(this) : new h.ConnectorPointsOrthogonalCalculator(this) }, n.prototype.invalidateRenderPoints = function() { delete this.renderPoints, delete this.renderPointsWithoutSkipped, this.invalidatePrimitives() }, n.prototype.createPrimitives = function() {
                var t = this,
                    e = [],
                    n = this.getRenderPoints();
                return n.forEach(function(o, i) { i > 0 && e.push(t.createSegmentPrimitive(n[i - 1], o, t.style, null)) }), n.length > 1 && (this.properties.startLineEnding !== l.ConnectorLineEnding.None && (e = e.concat(this.createLineEndingPrimitives(n[0], n[1]))), this.properties.endLineEnding !== l.ConnectorLineEnding.None && (e = e.concat(this.createLineEndingPrimitives(n[n.length - 1], n[n.length - 2])))), e.concat(this.createTextPrimitives())
            }, n.prototype.createSelectorPrimitives = function() {
                var t = this,
                    e = [],
                    n = this.getRenderPoints();
                return n.forEach(function(o, i) { i > 0 && e.push(t.createSegmentPrimitive(n[i - 1], o, null, "selector")) }), e
            }, n.prototype.createTextPrimitives = function() {
                var t = this;
                if (!this.enableText) return [];
                var e = [];
                return this.texts.forEach(function(n) {
                    var o = t.getText(n.position);
                    if (o && "" !== o) {
                        var i = t.getTextPoint(n.position);
                        e = e.concat([new f.TextPrimitive(i.x, i.y, o, void 0, t.styleText, !0, null, g.PAGE_BG_TEXTFLOOR_FILTER_ID, !1, function(e) { m.RenderUtils.setElementEventData(e, y.MouseEventElementType.ConnectorText, t.key, n.position) })])
                    }
                }), e
            }, n.prototype.createSegmentPrimitive = function(t, e, n, o) { return new u.LinePrimitive(t.x, t.y, e.x, e.y, n, o) }, n.prototype.createLineEndingPrimitives = function(t, e) {
                var o, i = n.arrowHeight;
                t.x === e.x && ((o = Math.abs(t.y - e.y)) < i && (i = o));
                t.y === e.y && ((o = Math.abs(t.x - e.x)) < i && (i = o));
                var r = a.GeometryUtils.getArrowPoints(t, e, i, n.arrowWidth);
                return [new u.LinePrimitive(r.point1.x, r.point1.y, t.x, t.y, this.style), new u.LinePrimitive(r.point2.x, r.point2.y, t.x, t.y, this.style)]
            }, n.prototype.getExtremeItem = function(t) { return t === r.Begin ? this.beginItem : t === r.End ? this.endItem : null }, n.prototype.getExtremeConnectionPointIndex = function(t) { return t === r.Begin ? this.beginConnectionPointIndex : t === r.End ? this.endConnectionPointIndex : -1 }, Object.defineProperty(n.prototype, "rectangle", {
                get: function() {
                    var t = this.getRenderPoints(),
                        e = t.map(function(t) { return t.x }),
                        n = t.map(function(t) { return t.y }),
                        o = e.reduce(function(t, e) { return Math.min(t, e) }, Number.MAX_VALUE),
                        i = e.reduce(function(t, e) { return Math.max(t, e) }, -Number.MAX_VALUE),
                        r = n.reduce(function(t, e) { return Math.min(t, e) }, Number.MAX_VALUE),
                        s = n.reduce(function(t, e) { return Math.max(t, e) }, -Number.MAX_VALUE);
                    return a.Rectangle.create(o, r, i - o, s - r)
                },
                enumerable: !0,
                configurable: !0
            }), n.prototype.getMinX = function() { return this.getRenderPoints().map(function(t) { return t.x }).reduce(function(t, e) { return Math.min(t, e) }, Number.MAX_VALUE) }, n.prototype.getMinY = function() { return this.getRenderPoints().map(function(t) { return t.y }).reduce(function(t, e) { return Math.min(t, e) }, Number.MAX_VALUE) }, n.prototype.getConnectionPoints = function() { return [] }, n.prototype.getConnectionPointsForSelection = function() { return [] }, n.prototype.getConnectionPointSide = function(t, e) { return s.ConnectionPointSide.Undefined }, n.prototype.getConnectionPointForSelectionSide = function(t) { return s.ConnectionPointSide.Undefined }, n.prototype.getSegments = function() {
                var t = this.getRenderPoints(),
                    e = [];
                return t.forEach(function(n, o) { o > 0 && e.push(a.Segment.createByPoints(t[o - 1], n)) }), e
            }, n.prototype.intersectedByRect = function(t) { var e = !1; return this.getSegments().forEach(function(n) { n.intersectRect(t) && (e = !0) }), e }, n.prototype.toNative = function() { var t = new v.NativeConnector(this.key, this.dataKey); return t.fromKey = this.beginItem && this.beginItem.dataKey, t.toKey = this.endItem && this.endItem.dataKey, t.texts = this.texts.map(function(t) { return t }).sort(function(t, e) { return t.position - e.position }).map(function(t) { return t.value }), t }, n.arrowHeight = c.UnitConverter.pixelsToTwips(8), n.arrowWidth = c.UnitConverter.pixelsToTwips(2), n.minOffset = c.UnitConverter.pixelsToTwips(18), n.minTextHeight = c.UnitConverter.pixelsToTwips(12), n
        }(s.DiagramItem);
        e.Connector = P
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = n(131),
            i = n(37),
            r = n(50),
            s = n(151),
            a = n(152),
            c = n(19),
            u = n(5),
            p = n(0),
            h = n(153),
            l = n(154),
            d = n(90),
            f = n(91),
            y = n(155),
            m = n(44),
            g = n(11),
            v = n(24),
            P = n(13),
            C = n(51),
            S = n(52),
            _ = n(53),
            w = n(17),
            b = n(192),
            x = n(193),
            I = n(102),
            O = n(46),
            E = n(36),
            M = n(54),
            T = n(55),
            A = n(104),
            D = n(194),
            L = n(195),
            z = n(31),
            N = function() {
                function t() {}
                return t.setShapePosition = function(t, e, n, i) { n.position.equals(i) || t.addAndRedo(new o.MoveShapeHistoryItem(n.key, i)) }, t.setShapeSize = function(t, e, n, o, i) { n.size.equals(i) && n.position.equals(o) || t.addAndRedo(new l.ResizeShapeHistoryItem(n.key, o, i)) }, t.setConnectorPoint = function(t, e, n, o, i) { n.points[o].equals(i) || t.addAndRedo(new r.MoveConnectorPointHistoryItem(n.key, o, i)) }, t.updateConnectorAttachedPoints = function(t, e, n) {
                    t.beginTransaction();
                    var o = n.beginItem && e.findItemCollapsedContainer(n.beginItem),
                        i = o && (!n.endItem || !e.isContainerItem(o, n.endItem)),
                        r = n.endItem && e.findItemCollapsedContainer(n.endItem),
                        s = r && (!n.beginItem || !e.isContainerItem(r, n.beginItem));
                    i ? this.updateConnectorBeginPoint(t, n, o, s && r || n.endItem, function(t) { return o.getConnectionPointIndexForItem(n.beginItem, t) }) : this.updateConnectorBeginPoint(t, n, n.beginItem, s && r || n.endItem), s ? this.updateConnectorEndPoint(t, n, r, function(t) { return r.getConnectionPointIndexForItem(n.beginItem, t) }) : this.updateConnectorEndPoint(t, n, n.endItem), t.endTransaction()
                }, t.updateConnectorBeginPoint = function(t, e, n, o, i) {
                    if (n) {
                        var s = void 0 !== i ? i(e.beginConnectionPointIndex) : e.beginConnectionPointIndex,
                            a = e.points[1];
                        o && 2 === e.points.length && (a = -1 !== e.endConnectionPointIndex ? o.getConnectionPointPosition(e.endConnectionPointIndex, p.Point.empty()) : o.rectangle.center);
                        var c = n.getConnectionPointPosition(s, a);
                        e.points[0].equals(c) || t.addAndRedo(new r.MoveConnectorPointHistoryItem(e.key, 0, c))
                    }
                }, t.updateConnectorEndPoint = function(t, e, n, o) {
                    if (n) {
                        var i = void 0 !== o ? o(e.endConnectionPointIndex) : e.endConnectionPointIndex,
                            s = n.getConnectionPointPosition(i, e.points[e.points.length - 2]);
                        e.points[e.points.length - 1].equals(s) || t.addAndRedo(new r.MoveConnectorPointHistoryItem(e.key, e.points.length - 1, s))
                    }
                }, t.updateContainerConnectorsAttachedPoints = function(t, e, n, o) {
                    var i = this;
                    void 0 === o && (o = n), t.beginTransaction(), e.getChildren(o).forEach(function(r) {
                        r instanceof g.Shape && (r.attachedConnectors.forEach(function(r) {
                            var s = r.beginItem && e.isContainerItem(o, r.beginItem),
                                a = r.endItem && e.isContainerItem(o, r.endItem);
                            if (s && !a) {
                                var c = e.findItemTopCollapsedContainer(r.beginItem),
                                    u = r.endItem && e.findItemTopCollapsedContainer(r.endItem);
                                c ? i.updateConnectorBeginPoint(t, r, c, u || r.endItem, function(t) { return n.getConnectionPointIndexForItem(r.beginItem, t) }) : i.updateConnectorBeginPoint(t, r, r.beginItem, u || r.endItem)
                            }
                            a && !s && ((c = e.findItemTopCollapsedContainer(r.endItem)) ? i.updateConnectorEndPoint(t, r, c, function(t) { return n.getConnectionPointIndexForItem(r.endItem, t) }) : i.updateConnectorEndPoint(t, r, r.endItem))
                        }), i.updateContainerConnectorsAttachedPoints(t, e, n, r))
                    }), t.endTransaction()
                }, t.getConnectorsWithoutBeginItemInfo = function(t) { return t.findConnectorsWithoutBeginItem().map(function(t) { return { connector: t, point: t.points[0].clone() } }) }, t.getConnectorsWithoutEndItemInfo = function(t) { return t.findConnectorsWithoutEndItem().map(function(t) { return { connector: t, point: t.points[t.points.length - 1].clone() } }) }, t.updateShapeAttachedConnectors = function(e, n, o) { o.attachedConnectors.forEach(function(o) { t.removeConnectorIntermediatePoints(e, o), t.updateConnectorAttachedPoints(e, n, o) }) }, t.updateMovingShapeConnections = function(t, e, n, o, s, a) {
                    var c = this;
                    s(), n.forEach(function(n) {
                        var o = c.getMovingShapeConnectionPointIndex(e, n.point);
                        e.rectangle.contains(n.point) || o > -1 ? (a(e, o), o !== n.connector.beginConnectionPointIndex && n.connector.beginItem && t.addAndRedo(new d.DeleteConnectionHistoryItem(n.connector, u.ConnectorPosition.Begin)), t.addAndRedo(new i.AddConnectionHistoryItem(n.connector, e, o, u.ConnectorPosition.Begin))) : n.connector.beginItem && (t.addAndRedo(new d.DeleteConnectionHistoryItem(n.connector, u.ConnectorPosition.Begin)), t.addAndRedo(new r.MoveConnectorPointHistoryItem(n.connector.key, 0, n.point)))
                    }), o.forEach(function(n) {
                        var o = c.getMovingShapeConnectionPointIndex(e, n.point);
                        e.rectangle.contains(n.point) || o > -1 ? (a(e, o), o !== n.connector.endConnectionPointIndex && n.connector.endItem && t.addAndRedo(new d.DeleteConnectionHistoryItem(n.connector, u.ConnectorPosition.End)), t.addAndRedo(new i.AddConnectionHistoryItem(n.connector, e, o, u.ConnectorPosition.End))) : n.connector.endItem && (t.addAndRedo(new d.DeleteConnectionHistoryItem(n.connector, u.ConnectorPosition.End)), t.addAndRedo(new r.MoveConnectorPointHistoryItem(n.connector.key, n.connector.points.length - 1, n.point)))
                    })
                }, t.getMovingShapeConnectionPointIndex = function(t, e) {
                    var n = this,
                        o = -1;
                    return t.getConnectionPoints().forEach(function(t, i) { p.GeometryUtils.getDistance(e, t) < n.connectionPointActionSize && (o = i) }), o
                }, t.removeUnnecessaryConnectorPoints = function(t, e, n, o) { t.beginTransaction(), p.GeometryUtils.removeUnnecessaryLinePoints(e.points, function(i, r) { var s = !0; if (n && n.forEach(function(t) { t && t.equals(i) && (s = !1) }), s) return t.addAndRedo(new h.DeleteConnectorPointHistoryItem(e.key, r)), void 0 !== o && o(r), !0 }), t.endTransaction() }, t.removeConnectorIntermediatePoints = function(t, e) {
                    if (!(e.properties.lineOption !== v.ConnectorLineOption.Orthogonal || e.points.length <= 2)) {
                        t.beginTransaction();
                        var n = !1;
                        if (this.isShapeIntersectConnectorPointsLine(e.beginItem, e) && (n = !0), this.isShapeIntersectConnectorPointsLine(e.endItem, e) && (n = !0), n)
                            for (; e.points.length > 2;) t.addAndRedo(new h.DeleteConnectorPointHistoryItem(e.key, 1));
                        t.endTransaction()
                    }
                }, t.isShapeIntersectConnectorPointsLine = function(t, e) {
                    if (!t) return !1;
                    for (var n, o = u.Connector.minOffset - P.UnitConverter.pixelsToTwips(1), i = t.rectangle.inflate(o, o), r = 1; r < e.points.length - 1; r++) {
                        if (void 0 !== n) { if (n.x === e.points[r].x && i.left <= n.x && n.x <= i.right) return !0; if (n.y === e.points[r].y && i.top <= n.y && n.y <= i.bottom) return !0 }
                        n = e.points[r]
                    }
                    return !1
                }, t.getSnappedPos = function(t, e, n, o) { var i = o ? t.snapStartPoint.x : t.snapStartPoint.y; return Math.round((n - i) / e) * e + i }, t.tryUpdateModelSize = function(t, e, n) {
                    var o = t.modelManipulator.getModelSizeUpdateOffset();
                    o.isEmpty() || (t.addAndRedo(new s.ModelResizeHistoryItem(o)), (o.left || o.top) && (t.addAndRedo(new a.UpdatePositionsOnPageResizeHistoryItem(o.left, o.top)), void 0 !== n && n(o.left, o.top)), t.modelManipulator.raiseModelRectangleChanged(e.getRectangle(!0)))
                }, t.deleteItems = function(t, e, n, o, i) { t.beginTransaction(), this.deleteItemsCore(t, e, o, i), this.tryUpdateModelSize(t, e), t.addAndRedo(new m.SetSelectionHistoryItem(n, [])), t.endTransaction() }, t.deleteItemsCore = function(t, e, n, o) {
                    var i = this;
                    n.forEach(function(n) {
                        if (n instanceof g.Shape) {
                            var r = e.getChildren(n);
                            r.length && (r.forEach(function(n) { t.addAndRedo(new x.RemoveFromContainerHistoryItem(n)), i.updateAttachedConnectorsContainer(t, e, n) }), i.deleteItemsCore(t, e, r.filter(function(t) { return !t.locked || o }), o)), e.findItem(n.key) && i.deleteShape(t, n)
                        }
                        n instanceof u.Connector && e.findItem(n.key) && i.deleteConnector(t, n)
                    })
                }, t.deleteShape = function(t, e) {
                    for (; e.attachedConnectors.length > 0;) {
                        var n = e.attachedConnectors[0];
                        t.addAndRedo(new d.DeleteConnectionHistoryItem(n, n.beginItem === e ? u.ConnectorPosition.Begin : u.ConnectorPosition.End))
                    }
                    t.addAndRedo(new f.DeleteShapeHistoryItem(e.key))
                }, t.deleteConnector = function(t, e) { e.beginItem && t.addAndRedo(new d.DeleteConnectionHistoryItem(e, u.ConnectorPosition.Begin)), e.endItem && t.addAndRedo(new d.DeleteConnectionHistoryItem(e, u.ConnectorPosition.End)), t.addAndRedo(new y.DeleteConnectorHistoryItem(e.key)) }, t.deleteAllItems = function(t, e, n) { this.deleteItems(t, e, n, e.items.slice(), !0) }, t.deleteSelection = function(t, e, n) { this.deleteItems(t, e, n, n.getSelectedItems()) }, t.changeChildrenContainerLocked = function(t, e, n, o) {
                    var i = this;
                    n instanceof g.Shape && e.getChildren(n).forEach(function(n) { t.addAndRedo(new D.ChangeContainerLockedHistoryItem(n, o)), i.changeChildrenContainerLocked(t, e, n, o) })
                }, t.changeSelectionLocked = function(t, e, n, o) {
                    var i = this;
                    t.beginTransaction(), n.getSelectedItems(!0).forEach(function(n) { t.addAndRedo(new A.ChangeLockedHistoryItem(n, o)), i.changeChildrenContainerLocked(t, e, n, o) }), t.addAndRedo(new m.SetSelectionHistoryItem(n, n.getKeys())), t.endTransaction()
                }, t.copyStylesToItem = function(t, e, n, o) {
                    var i = e.findItem(o);
                    n.styleText.forEach(function(e) { n.styleText[e] !== i.styleText[e] && t.addAndRedo(new E.ChangeStyleTextHistoryItem(o, e, n.styleText[e])) }), n.style.forEach(function(e) { n.style[e] !== i.style[e] && t.addAndRedo(new O.ChangeStyleHistoryItem(o, e, n.style[e])) })
                }, t.cloneShapeToOffset = function(t, e, n, o, i) {
                    t.beginTransaction();
                    var r = n.position.offset(o, i),
                        s = new C.AddShapeHistoryItem(n.description.key, r, n.text);
                    t.addAndRedo(s);
                    var a = s.shapeKey;
                    return t.addAndRedo(new l.ResizeShapeHistoryItem(a, r, n.size.clone())), t.addAndRedo(new I.ChangeShapeParametersHistoryItem(a, n.parameters.clone())), this.copyStylesToItem(t, e, n, a), t.endTransaction(), a
                }, t.cloneConnectorToOffset = function(t, e, n, o, r, s, a) {
                    t.beginTransaction();
                    var c = n.points.map(function(t) { return t.offset(s, a) }),
                        p = new S.AddConnectorHistoryItem(c);
                    t.addAndRedo(p);
                    var h = p.connectorKey,
                        l = e.findConnector(h);
                    if (n.properties.forEach(function(e) { n.properties[e] !== l.properties[e] && t.addAndRedo(new T.ChangeConnectorPropertyHistoryItem(h, e, n.properties[e])) }), o) {
                        var d = e.findShape(o);
                        t.addAndRedo(new i.AddConnectionHistoryItem(l, d, n.beginConnectionPointIndex, u.ConnectorPosition.Begin))
                    }
                    if (r) {
                        var f = e.findShape(r);
                        t.addAndRedo(new i.AddConnectionHistoryItem(l, f, n.endConnectionPointIndex, u.ConnectorPosition.End))
                    }
                    return n.texts.clone().forEach(function(e) { t.addAndRedo(new M.ChangeConnectorTextHistoryItem(l, e.position, e.value)) }), this.copyStylesToItem(t, e, n, h), t.endTransaction(), h
                }, t.cloneSelectionToOffset = function(e, n, o, i, r) {
                    var s = this;
                    e.beginTransaction();
                    var a = {},
                        c = [];
                    o.getSelectedShapes().forEach(function(t) {
                        var o = s.cloneShapeToOffset(e, n, t, i, r);
                        a[t.key] = o, c.push(o)
                    }), o.getSelectedConnectors().forEach(function(t) {
                        var o = t.beginItem ? a[t.beginItem.key] : null,
                            u = t.endItem ? a[t.endItem.key] : null,
                            p = s.cloneConnectorToOffset(e, n, t, o, u, i, r);
                        c.push(p)
                    }), e.addAndRedo(new m.SetSelectionHistoryItem(o, c)), t.tryUpdateModelSize(e, n), e.endTransaction()
                }, t.findContainerByEventKey = function(t, e, n) { var o = t.findContainer(n); if (o) return o; var i = t.findShape(n); return i && i.container && !e.hasKey(i.key) ? i.container : void 0 }, t.canInsertToContainer = function(t, e, n) { return e !== n && !(e instanceof g.Shape && t.findChild(e, n.key)) }, t.canInsertSelectionToContainer = function(t, e, n) { var o = !0; return e.getSelectedItems().forEach(function(e) { e !== n ? e instanceof g.Shape && t.findChild(e, n.key) && (o = !1) : o = !1 }), o }, t.insertToContainer = function(t, e, n, o) {
                    if (!o.enableChildren) throw Error("Inpossible to add children to non-container shape.");
                    if (this.canInsertToContainer(e, n, o)) {
                        var i = n.container;
                        i !== o && (t.beginTransaction(), i && t.addAndRedo(new x.RemoveFromContainerHistoryItem(n)), t.addAndRedo(new b.InsertToContainerHistoryItem(n, o)), this.updateAttachedConnectorsContainer(t, e, n), t.endTransaction())
                    }
                }, t.removeFromContainer = function(t, e, n) { n.container && (t.beginTransaction(), t.addAndRedo(new x.RemoveFromContainerHistoryItem(n)), this.updateAttachedConnectorsContainer(t, e, n), t.endTransaction()) }, t.insertSelectionToContainer = function(t, e, n, o) {
                    var i = this;
                    t.beginTransaction();
                    var r = n.getSelectedItems();
                    r.filter(function(t) { return !t.container || -1 === r.indexOf(t.container) }).forEach(function(n) { i.insertToContainer(t, e, n, o) }), t.endTransaction()
                }, t.removeSelectionFromContainer = function(t, e, n) {
                    var o = this;
                    t.beginTransaction(), n.getSelectedItems().forEach(function(i) { i.container && !n.hasKey(i.container.key) && (t.addAndRedo(new x.RemoveFromContainerHistoryItem(i)), o.updateAttachedConnectorsContainer(t, e, i)) }), t.endTransaction()
                }, t.getConnectorContainer = function(t) { if (t.beginItem && t.endItem && t.beginItem.container === t.endItem.container) return t.beginItem.container }, t.updateAttachedConnectorsContainer = function(t, e, n) {
                    var o = this;
                    t.beginTransaction(), n.attachedConnectors.forEach(function(n) { o.updateConnectorContainer(t, e, n) }), t.endTransaction()
                }, t.updateConnectorContainer = function(t, e, n) {
                    var o = this.getConnectorContainer(n);
                    o ? t.addAndRedo(new b.InsertToContainerHistoryItem(n, o)) : n.container && t.addAndRedo(new x.RemoveFromContainerHistoryItem(n))
                }, t.applyLayout = function(t, e, n, o, i, r, s, a, c) {
                    t.beginTransaction();
                    var u = this.getOccupiedRectangles(r, n);
                    i = this.offsetLayoutToFreeSpace(i, n && n.clientRectangle, u, s.columnSpacing), a && this.adjustLayoutToSnapGrid(e, i, c), n && this.resizeContainerOnLayout(t, e, i, n, s.columnSpacing), this.applyLayoutToNodes(t, e, i, o.edges.map(function(t) { return e.findConnector(t.key) })), this.applyLayoutToConnectors(t, e, i, o.edges.map(function(t) { return e.findConnector(t.key) })), t.endTransaction()
                }, t.getNonGraphItems = function(t, e, n, o, i) { return (e ? t.getChildren(e) : t.items.filter(function(t) { return !t.container })).filter(function(t) { return t instanceof u.Connector ? !(t.beginItem && n[t.beginItem.key] || t.endItem && n[t.endItem.key] || -1 !== i.indexOf(t)) : t instanceof g.Shape ? !n[t.key] && -1 === o.indexOf(t) : void 0 }) }, t.getOccupiedRectangles = function(t, e) {
                    var n = t.map(function(t) { return t.rectangle });
                    if (e && n.length) {
                        var o = e.clientRectangle;
                        n.push(p.Rectangle.create(o.right, o.top, 1, 1)), n.push(p.Rectangle.create(o.right, o.bottom, 1, 1))
                    }
                    return n
                }, t.offsetLayoutToFreeSpace = function(t, e, n, o) {
                    var i = t.getRectangle(!0),
                        r = p.GeometryUtils.findFreeSpace(n, i.size.offset(o, o), !1, e);
                    if (r) {
                        var s = r.x + o,
                            a = r.y + o;
                        return t.offsetNodes(s, a)
                    }
                    var c = n && n.length ? n.reduce(function(t, e) { return e.right > t ? e.right : t }, 0) : e ? e.left : 0,
                        u = e ? e.top : Math.max(0, i.top);
                    return t.offsetNodes(c + o, u + o)
                }, t.resizeContainerOnLayout = function(e, n, o, i, r) {
                    var s = o.getRectangle(!0),
                        a = i.rectangle.width;
                    i.rectangle.right < s.right + r && (a += s.right + r - i.rectangle.right);
                    var c = i.rectangle.height;
                    i.rectangle.bottom < s.bottom + r && (c += s.bottom + r - i.rectangle.bottom), t.setShapeSize(e, n, i, i.position, new p.Size(a, c))
                }, t.applyLayoutToNodes = function(t, e, n, o) {
                    var i = this,
                        r = o.reduce(function(t, e) { return t[e.key] = t }, {});
                    n.forEachNode(function(n, o) {
                        var s = e.findShape(o);
                        i.applyLayoutToNode(t, e, s, n.position, r)
                    })
                }, t.applyLayoutToNode = function(e, n, o, i, s) {
                    var a = this,
                        c = i.offset(-o.position.x, -o.position.y);
                    t.setShapePosition(e, n, o, i), 0 === c.x && 0 === c.y || (o.attachedConnectors.filter(function(t) { return !s[t.key] }).forEach(function(o) { t.updateConnectorAttachedPoints(e, n, o); for (var i = o.beginItem ? 1 : 0, s = o.endItem ? o.points.length - 2 : o.points.length - 1, a = i; a <= s; a++) e.addAndRedo(new r.MoveConnectorPointHistoryItem(o.key, a, o.points[a].offset(c.x, c.y))) }), n.getChildren(o).forEach(function(t) {
                        if (t instanceof g.Shape) {
                            var o = t.position.offset(c.x, c.y);
                            a.applyLayoutToNode(e, n, t, o, s)
                        }
                    }))
                }, t.applyLayoutToConnectors = function(t, e, n, o) {
                    var r = this;
                    o.filter(function(t) { return t.beginItem && t.endItem }).forEach(function(o) {
                        var s = n.edgeToPosition[o.key];
                        if (s) {
                            var a = o.beginItem.getConnectionPointIndexForSide(s.beginIndex);
                            a !== o.beginConnectionPointIndex && t.addAndRedo(new i.SetConnectionPointIndexHistoryItem(o, a, u.ConnectorPosition.Begin));
                            var c = o.endItem.getConnectionPointIndexForSide(s.endIndex);
                            c !== o.endConnectionPointIndex && t.addAndRedo(new i.SetConnectionPointIndexHistoryItem(o, c, u.ConnectorPosition.End))
                        }
                        if (r.updateConnectorAttachedPoints(t, e, o), s)
                            for (; o.points.length > 2;) t.addAndRedo(new h.DeleteConnectorPointHistoryItem(o.key, 1))
                    })
                }, t.adjustLayoutToSnapGrid = function(t, e, n) {
                    var o = this;
                    e.nodeKeys.forEach(function(i) { e.nodeToLayout[i].position.x = o.getSnappedPos(t, n, e.nodeToLayout[i].position.x, !0), e.nodeToLayout[i].position.y = o.getSnappedPos(t, n, e.nodeToLayout[i].position.y, !1) })
                }, t.getGraphInfoByItems = function(t, e, n, o) {
                    void 0 === o && (o = !1);
                    var i = {};
                    [].concat(e).concat(n).forEach(function(t) {
                        var e = t.container && t.container.key;
                        i[e] || (i[e] = []), i[e].push(t)
                    });
                    var r = [];
                    for (var s in i)
                        if (i.hasOwnProperty(s)) {
                            var a = s && t.findContainer(s);
                            if (!a || a.expanded) {
                                var c = a && a.key,
                                    u = this.getGraphByItems(t, i[s], c, o);
                                u.nodes.length > 1 && r.push(new L.GraphInfo(a, u))
                            }
                        }
                    return r
                }, t.getGraphByItems = function(t, e, n, o) {
                    var i = this,
                        r = new _.Graph([], []),
                        s = {};
                    return e.forEach(function(t) { i.extendByConnectedComponents(t, r, n, s, o) }), r.nodes = r.nodes.sort(function(e, n) { return t.getItemIndex(t.findShape(e)) - t.getItemIndex(t.findShape(n)) }), r
                }, t.extendByConnectedComponents = function(t, e, n, o, i) { var r = this;!t || i && t.locked || o[t.key] || (o[t.key] = !0, !(t instanceof u.Connector && (t.container && t.container.key) === n && t.beginItem) || t.beginItem.locked && i || !t.endItem || t.endItem.locked && i || t.beginItem === t.endItem ? t instanceof g.Shape && (t.container && t.container.key) === n && (e.addNode(t), t.attachedConnectors.forEach(function(t) { return r.extendByConnectedComponents(t, e, n, o, i) })) : (e.addEdge(new z.Edge(t.key, t.beginItem && t.beginItem.key, t.endItem && t.endItem.key)), this.extendByConnectedComponents(t.beginItem, e, n, o, i), this.extendByConnectedComponents(t.endItem, e, n, o, i))) }, t.getlUnitValue = function(t, e) {
                    switch (t) {
                        case c.DiagramUnit.Cm:
                            return P.UnitConverter.twipsToCentimeters(e);
                        case c.DiagramUnit.In:
                            return P.UnitConverter.twipsToInches(e);
                        case c.DiagramUnit.Px:
                            return P.UnitConverter.twipsToPixels(e)
                    }
                }, t.getUnitText = function(t, e, n, o, i) {
                    void 0 === i && (i = 2);
                    var r = e[t] ? " " + e[t] : "",
                        s = this.getlUnitValue(t, o);
                    switch (t) {
                        case c.DiagramUnit.Cm:
                        case c.DiagramUnit.In:
                            return n(+s.toFixed(i)) + r;
                        case c.DiagramUnit.Px:
                            return n(+s.toFixed(0)) + r
                    }
                }, t.getTwipsValue = function(t, e) {
                    switch (t) {
                        case c.DiagramUnit.Cm:
                            return P.UnitConverter.centimetersToTwips(e);
                        case c.DiagramUnit.In:
                            return P.UnitConverter.inchesToTwips(e);
                        case c.DiagramUnit.Px:
                            return P.UnitConverter.pixelsToTwips(e)
                    }
                }, t.getNextItemKey = function(t, e, n) { if (!t.length && void 0 === n) return "0"; for (var o = t.length - 1; o >= 0 && null == (n = n || t[o]); o--); for (var i = this.generateNextItemKey(n || "0"); !e(i);) i = this.generateNextItemKey(i); return i }, t.generateNextItemKey = function(t) {
                    for (var e = t.length - 1; e >= 0; e--) {
                        if (!this.isDigit(t[e])) { e === t.length - 1 && (t += "0"); break }
                        var n = t.charCodeAt(e),
                            o = String.fromCharCode(n + 1);
                        if (o > "9" && (o = "0", 0 !== e && this.isDigit(t[e - 1]) || (o = "1" + o)), t = t.substr(0, e) + o + t.substr(e + 1), "0" !== o && "10" !== o) break;
                        "10" === o && e--
                    }
                    return t
                }, t.isDigit = function(t) { return "0" <= t && t <= "9" }, t.getGuidItemKey = function() { return w.CreateGuid() }, t.connectionPointActionSize = P.UnitConverter.pixelsToTwips(8), t
            }();
        e.ModelUtils = N
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(197),
            s = n(198),
            a = n(6),
            c = function(t) {
                function e() { return null !== t && t.apply(this, arguments) || this }
                return i(e, t), e.prototype.getState = function() { return new s.SimpleCommandState(this.isEnabled(), this.getValue(), this.getDefaultValue(), this.getItems(), this.isVisible()) }, e.prototype.isVisible = function() { return !0 }, e.prototype.isEnabled = function() { return !this.control.settings.readOnly || this.isEnabledInReadOnlyMode() }, e.prototype.isEnabledInReadOnlyMode = function() { return !1 }, e.prototype.getValue = function() {}, e.prototype.getDefaultValue = function() {}, e.prototype.getItems = function() {}, e.prototype.getModelUnit = function(t) { return a.ModelUtils.getlUnitValue(this.control.model.units, t) }, e.prototype.getModelUnitText = function(t) { return a.ModelUtils.getUnitText(this.control.model.units, this.control.settings.unitItems, this.control.settings.formatUnit, t) }, e.prototype.getModelUnitTwipsValue = function(t) { return a.ModelUtils.getTwipsValue(this.control.model.units, t) }, e.prototype.getViewUnit = function(t) { return a.ModelUtils.getlUnitValue(this.control.settings.viewUnits, t) }, e.prototype.getViewUnitText = function(t) { return a.ModelUtils.getUnitText(this.control.settings.viewUnits, this.control.settings.unitItems, this.control.settings.formatUnit, t) }, e.prototype.getViewUnitTwipsValue = function(t) { return a.ModelUtils.getTwipsValue(this.control.settings.viewUnits, t) }, e
            }(r.CommandBase);
        e.SimpleCommandBase = c
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = n(48);
        e.DiagramCommand = o.DiagramCommand;
        var i = n(261);
        e.DiagramControl = i.DiagramControl;
        var r = n(0);
        e.EventDispatcher = r.EventDispatcher;
        var s = n(1);
        e.ShapeTypes = s.ShapeTypes, e.ShapeCategories = s.ShapeCategories, e.ShapeType = s.ShapeType;
        var a = n(13);
        e.UnitConverter = a.UnitConverter;
        var c = n(23);
        e.Browser = c.Browser;
        var u = n(35);
        e.AutoZoomMode = u.AutoZoomMode;
        var p = n(115);
        e.DataLayoutType = p.DataLayoutType;
        var h = n(22);
        e.DataLayoutOrientation = h.DataLayoutOrientation, n(305);
        var l = n(19);
        e.DiagramUnit = l.DiagramUnit, e.PageOrientation = l.PageOrientation;
        var d = n(24);
        e.ConnectorLineEnding = d.ConnectorLineEnding, e.ConnectorLineOption = d.ConnectorLineOption;
        var f = n(38);
        e.ColorHelper = f.ColorHelper;
        var y = n(63);
        e.NativeShape = y.NativeShape, e.NativeConnector = y.NativeConnector
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = n(0),
            i = n(64),
            r = n(41),
            s = n(20),
            a = n(4),
            c = n(13),
            u = n(15),
            p = n(34);
        e.ShapeDefaultDimension = 1440, e.ShapeDefaultSize = new o.Size(e.ShapeDefaultDimension, e.ShapeDefaultDimension);
        var h = function() {
            function t(t, n, o, i) { void 0 === o && (o = e.ShapeDefaultSize.clone()), this.title = t, this.defaultText = n, this.defaultSize = o, this.defaultImageUrl = i, this.connectionPoints = this.createConnectionPoints(), this.connectionPointsWhileSelected = this.createConnectionPointsForSelection() }
            return Object.defineProperty(t.prototype, "enableText", { get: function() { return !0 }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "allowEditText", { get: function() { return !0 }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "enableImage", { get: function() { return !1 }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "allowEditImage", { get: function() { return !0 }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "enableChildren", { get: function() { return !1 }, enumerable: !0, configurable: !0 }), t.prototype.getConnectionPoints = function() { return this.connectionPoints }, t.prototype.createConnectionPoints = function() { return [new p.ConnectionPoint(.5, 0, a.ConnectionPointSide.North), new p.ConnectionPoint(1, .5, a.ConnectionPointSide.East), new p.ConnectionPoint(.5, 1, a.ConnectionPointSide.South), new p.ConnectionPoint(0, .5, a.ConnectionPointSide.West)] }, t.prototype.getConnectionPointsForSelection = function() { return this.connectionPointsWhileSelected }, t.prototype.createConnectionPointsForSelection = function() { return [new p.ConnectionPoint(.5, 0, a.ConnectionPointSide.North), new p.ConnectionPoint(1, .5, a.ConnectionPointSide.East), new p.ConnectionPoint(.5, 1, a.ConnectionPointSide.South), new p.ConnectionPoint(0, .5, a.ConnectionPointSide.West)] }, t.prototype.processConnectionPoint = function(t, e) {}, t.prototype.getConnectionPointIndexForItem = function(t, e) { return e }, t.prototype.getConnectionPointIndexForSide = function(t) { return t }, t.prototype.createParameters = function(t) {}, t.prototype.normalizeParameters = function(t, e) {}, t.prototype.modifyParameters = function(t, e, n, o) { throw Error("Not implemented") }, t.prototype.changeParameterValue = function(t, e, n) {
                var o = t.get(e);
                o.value = n(o)
            }, t.prototype.getParameterPoints = function(t) { return [] }, t.prototype.getExpandedSize = function(t, e) { return t }, t.prototype.getCollapsedSize = function(t) { return t }, t.prototype.getToolboxHeightToWidthRatio = function(t, e) { return e / t }, t.prototype.allowResizeHorizontally = function(t) { return !0 }, t.prototype.allowResizeVertically = function(t) { return !0 }, t.prototype.createPrimitives = function(t, e) { var n = []; return n = n.concat(this.createShapePrimitives(t, e)), this.enableImage && (n = n.concat(this.createImagePrimitives(t, e))), this.enableText && (n = n.concat(this.createTextPrimitives(t, e))), n }, t.prototype.createImagePrimitives = function(t, e) { return [] }, t.prototype.createTextPrimitives = function(t, e) {
                if (void 0 === t.text || "" === t.text) return [];
                var n = this.getTextRectangle(t.rectangle, t.parameters),
                    o = !e && u.RenderUtils.generateSvgElementId("clipText"),
                    a = this.getTextPosition(n, t.styleText["text-anchor"]);
                return [].concat([new i.TextPrimitive(a.x, a.y, t.text, n.width, t.styleText, !1, o, void 0, this.getTextRotated()), new r.ClipPathPrimitive(o, [new s.RectanglePrimitive(n.left, n.top, n.width, n.height)])])
            }, t.prototype.getTextRotated = function() { return !1 }, t.prototype.getTextRectangle = function(t, e) { return t }, t.prototype.getClientRectangle = function(t) { return t }, t.prototype.getTextEditRectangle = function(t, e) { return this.getTextRectangle(t, e) }, t.prototype.createSelectorPrimitives = function(t) { return [new s.RectanglePrimitive(t.position.x, t.position.y, t.size.width, t.size.height, null, "selector")] }, t.prototype.getTextPosition = function(e, n) { var i = new o.Point(e.left, e.top + e.height / 2); return n && "middle" !== n ? "end" === n ? i.x = e.left + e.width - t.textSpacing : "start" === n && (i.x = e.left + t.textSpacing) : i.x = e.left + e.width / 2, i }, t.textSpacing = c.UnitConverter.pixelsToTwips(2), t
        }();
        e.ShapeDescription = h
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(16);
        ! function(t) { t[t.None = 0] = "None", t[t.Left = 1] = "Left", t[t.Right = 2] = "Right", t[t.Middle = 4] = "Middle" }(e.MouseButton || (e.MouseButton = {})),
        function(t) { t[t.Background = 0] = "Background", t[t.Document = 1] = "Document", t[t.Undefined = 2] = "Undefined", t[t.Connector = 3] = "Connector", t[t.ConnectorPoint = 4] = "ConnectorPoint", t[t.ConnectorSide = 5] = "ConnectorSide", t[t.ConnectorOrthogonalSide = 6] = "ConnectorOrthogonalSide", t[t.ConnectorText = 7] = "ConnectorText", t[t.Shape = 8] = "Shape", t[t.ShapeResizeBox = 9] = "ShapeResizeBox", t[t.ShapeParameterBox = 10] = "ShapeParameterBox", t[t.SelectionRect = 11] = "SelectionRect", t[t.ShapeConnectionPoint = 12] = "ShapeConnectionPoint", t[t.ShapeExpandButton = 13] = "ShapeExpandButton" }(e.MouseEventElementType || (e.MouseEventElementType = {}));
        var s = function() { return function(t, e, n) { this.type = t, this.key = e, this.value = n } }();
        e.MouseEventSource = s,
            function(t) { t[t.Undefined = 0] = "Undefined", t[t.ResizeBox_NW = 1] = "ResizeBox_NW", t[t.ResizeBox_NE = 2] = "ResizeBox_NE", t[t.ResizeBox_SE = 3] = "ResizeBox_SE", t[t.ResizeBox_SW = 4] = "ResizeBox_SW", t[t.ResizeBox_N = 5] = "ResizeBox_N", t[t.ResizeBox_E = 6] = "ResizeBox_E", t[t.ResizeBox_S = 7] = "ResizeBox_S", t[t.ResizeBox_W = 8] = "ResizeBox_W" }(e.ResizeEventSource || (e.ResizeEventSource = {}));
        var a = function() { return function(t) { this.modifiers = t } }();
        e.DiagramEvent = a;
        var c = function(t) {
            function e(e) { var n = t.call(this, r.ModifierKey.None) || this; return n.inputText = e, n }
            return i(e, t), e
        }(a);
        e.DiagramFocusEvent = c;
        var u = function() { return function(t, e) { this.offsetPoint = t, this.modelPoint = e } }();
        e.DiagramMouseEventTouch = u;
        var p = function(t) {
            function e(e, n, o, i) { var r = t.call(this, e) || this; return r.offsetPoint = n, r.modelPoint = o, r.source = i, r }
            return i(e, t), e
        }(a);
        e.DiagramMouseEventBase = p;
        var h = function(t) {
            function e(e, n, o, i, r, s) { void 0 === s && (s = []); var a = t.call(this, e, o, i, r) || this; return a.button = n, a.touches = s, a.scrollX = 0, a.scrollY = 0, a }
            return i(e, t), e
        }(p);
        e.DiagramMouseEvent = h;
        var l = function(t) {
            function e(e, n, o, i, r, s) { var a = t.call(this, e, i, r, s) || this; return a.deltaX = n, a.deltaY = o, a }
            return i(e, t), e
        }(p);
        e.DiagramWheelEvent = l;
        var d = function(t) {
            function e(e, n, o) { var i = t.call(this, e) || this; return i.eventPoint = n, i.modelPoint = o, i }
            return i(e, t), e
        }(a);
        e.DiagramContextMenuEvent = d;
        var f = function(t) {
            function e(e, n, o) { var i = t.call(this, e) || this; return i.keyCode = n, i.inputText = o, i }
            return i(e, t), e.prototype.getShortcutCode = function() { return this.modifiers | this.keyCode }, e
        }(a);
        e.DiagramKeyboardEvent = f;
        var y = function(t) {
            function e(e) { var n = t.call(this, r.ModifierKey.None) || this; return n.clipboardData = e, n }
            return i(e, t), e
        }(a);
        e.DiagramClipboardEvent = y
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(0),
            s = n(29),
            a = n(13),
            c = n(4),
            u = n(34),
            p = n(40),
            h = n(63),
            l = function(t) {
                function e(e, n) { var o = t.call(this) || this; if (o.description = e, o.childKeys = [], o.expanded = !0, o.expandedSize = void 0, !e) throw Error("Shape type is incorrect"); return o.position = n.clone(), o.size = e.defaultSize.clone(), o.text = e.defaultText, o.image = new p.ImageInfo(e.defaultImageUrl), o.parameters = new s.ShapeParameters, e.createParameters(o.parameters), o }
                return i(e, t), e.prototype.assign = function(e) { t.prototype.assign.call(this, e), e.size = this.size.clone(), e.text = this.text, e.image = this.image.clone(), e.parameters = this.parameters.clone(), e.childKeys = this.childKeys.slice(), e.expanded = this.expanded, this.expandedSize && (e.expandedSize = this.expandedSize.clone()) }, e.prototype.clone = function() { var t = new e(this.description, this.position.clone()); return this.assign(t), t }, Object.defineProperty(e.prototype, "enableText", { get: function() { return this.description.enableText }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "allowEditText", { get: function() { return this.description.allowEditText }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "enableChildren", { get: function() { return this.description.enableChildren }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "enableImage", { get: function() { return this.description.enableImage }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "allowEditImage", { get: function() { return this.description.allowEditImage }, enumerable: !0, configurable: !0 }), e.prototype.createPrimitives = function() { return this.description.createPrimitives(this) }, e.prototype.createSelectorPrimitives = function() { return this.description.createSelectorPrimitives(this) }, e.prototype.normalizeX = function(t) { return Math.max(this.position.x, Math.min(t, this.position.x + this.size.width)) }, e.prototype.normalizeY = function(t) { return Math.max(this.position.y, Math.min(t, this.position.y + this.size.height)) }, e.prototype.getConnectionPoints = function() { var t = this; return this.description.getConnectionPoints().map(function(e) { var n = new u.ConnectionPoint(t.position.x + e.x * t.size.width, t.position.y + e.y * t.size.height, e.side); return t.description.processConnectionPoint(t, n), n }) }, e.prototype.getConnectionPointsForSelection = function() { var t = this; return this.description.getConnectionPointsForSelection().map(function(e) { return new u.ConnectionPoint(t.position.x + e.x * t.size.width, t.position.y + e.y * t.size.height, e.side) }) }, e.prototype.getConnectionPointSide = function(t, e) { return t.side !== c.ConnectionPointSide.Undefined ? t.side : this.getConnectionPointSideByGeometry(t) }, e.prototype.getConnectionPointForSelectionSide = function(t) { return t.side !== c.ConnectionPointSide.Undefined ? t.side : this.getConnectionPointSideByGeometry(t) }, e.prototype.getConnectionPointSideByGeometry = function(t) { var e = t.offset(-this.position.x, -this.position.y).multiply(1 / this.size.width, 1 / this.size.height); return e.x >= e.y && (e.x > 0 || e.y > 0) ? e.x < .5 || 1 - e.x >= e.y ? c.ConnectionPointSide.North : c.ConnectionPointSide.East : e.x > .5 || 1 - e.x <= e.y ? c.ConnectionPointSide.South : c.ConnectionPointSide.West }, e.prototype.getConnectionPointIndexForItem = function(t, e) { return this.description.getConnectionPointIndexForItem(t, e) }, e.prototype.getConnectionPointIndexForSide = function(t) { return this.description.getConnectionPointIndexForSide(t) }, e.prototype.toggleExpandedSize = function() { this.expanded ? (this.size = this.getExpandedSize(), this.expandedSize = void 0) : (this.expandedSize = this.size.clone(), this.size = this.getCollapsedSize()) }, e.prototype.getExpandedSize = function() { return this.description.getExpandedSize(this.size, this.expandedSize) }, e.prototype.getCollapsedSize = function() { return this.description.getCollapsedSize(this.size) }, e.prototype.getToolboxHeightToWidthRatio = function() { return this.description.getToolboxHeightToWidthRatio(this.size.width, this.size.height) }, Object.defineProperty(e.prototype, "allowResizeHorizontally", { get: function() { return this.description.allowResizeHorizontally(this) }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "allowResizeVertically", { get: function() { return this.description.allowResizeVertically(this) }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "rectangle", { get: function() { return new r.Rectangle(this.position, this.size) }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "clientRectangle", { get: function() { return this.description.getClientRectangle(this.rectangle) }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "textRectangle", { get: function() { return this.description.getTextRectangle(this.rectangle, this.parameters) }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "textEditRectangle", { get: function() { return this.description.getTextEditRectangle(this.rectangle, this.parameters) }, enumerable: !0, configurable: !0 }), e.prototype.toNative = function() { var t = new h.NativeShape(this.key, this.dataKey); return t.type = this.description.key, t.text = this.text, t }, e.lineWidth = a.UnitConverter.pixelsToTwips(2), e
            }(c.DiagramItem);
        e.Shape = l
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = n(10),
            i = n(39),
            r = n(0),
            s = n(17),
            a = n(16),
            c = n(23),
            u = n(15),
            p = n(62),
            h = n(82),
            l = n(135),
            d = n(35),
            f = n(136),
            y = n(137),
            m = n(139),
            g = n(87),
            v = n(142);
        e.svgNS = "http://www.w3.org/2000/svg";
        e.LONG_TOUCH_TIMEOUT = 500, e.DBL_CLICK_TIMEOUT = 500;
        var P = function() {
            function t(e, n, o) {
                this.moveLocked = !1, this.normalizationRequired = !1, this.lastClickElement = void 0, this.longTouchTimer = void 0, this.dblTouchTimer = void 0;
                var i = t.createMainElement(e),
                    r = t.createSvgElement(i);
                this.scroll = o.scrollView || new l.NativeScrollView(i), this.scroll.onScroll.add(this), this.autoScroll = new v.AutoScrollController(this.scroll, i), this.view = new m.CanvasViewManager(this.scroll, r, o.modelSize, o.zoomLevel, o.autoZoom, o.simpleView, o.rectangle), this.input = new f.InputManager(e, i, this.view, n, o.zoomLevel), this.items = new h.CanvasItemsManager(this.view.canvasElement, o.zoomLevel), this.page = new y.CanvasPageManager(this.view.pageElement, o), this.selection = new g.CanvasSelectionManager(this.view.canvasElement, o.zoomLevel, o.readOnly), this.view.onViewChanged.add(this.page), this.view.onViewChanged.add(this.items), this.view.onViewChanged.add(this.selection), this.view.onViewChanged.add(this.input), this.attachEvents(r), this.mainElement = i, this.svgElement = r, this.events = n
            }
            return t.prototype.dispose = function() { this.detachEvents(this.svgElement), this.scroll.dispose(), this.input.dispose() }, t.prototype.replaceParent = function(t) { this.mainElement && this.mainElement.parentNode !== t && t.appendChild(this.mainElement), this.input.replaceParent(t) }, t.prototype.update = function(t) { this.view.update({ horizontal: !t, vertical: !t }), this.page.redraw() }, t.prototype.clear = function() { this.items.clear(), this.selection.clear() }, t.prototype.attachEvents = function(t) { this.onMouseDownHandler = this.onMouseDown.bind(this), this.onMouseEnterHandler = this.onMouseEnter.bind(this), this.onMouseLeaveHandler = this.onMouseLeave.bind(this), this.onMouseWheelHandler = this.onMouseWheel.bind(this), this.onMouseDblClickHandler = this.onMouseDblClick.bind(this), this.onContextMenuHandler = this.onContextMenu.bind(this), this.onMouseMoveHandler = this.onMouseMove.bind(this), this.onMouseUpHandler = this.onMouseUp.bind(this), this.onWindowResizelHandler = this.onWindowResize.bind(this), this.onMouseClickHandler = this.onMouseClick.bind(this), t.addEventListener(p.TouchUIHelper.touchMouseDownEventName, this.onMouseDownHandler), t.addEventListener("mouseenter", this.onMouseEnterHandler), t.addEventListener("mouseleave", this.onMouseLeaveHandler), t.addEventListener("wheel", this.onMouseWheelHandler), t.addEventListener("dblclick", this.onMouseDblClickHandler), t.addEventListener("click", this.onMouseClickHandler), t.addEventListener("contextmenu", this.onContextMenuHandler), document.addEventListener(p.TouchUIHelper.touchMouseMoveEventName, this.onMouseMoveHandler), document.addEventListener(p.TouchUIHelper.touchMouseUpEventName, this.onMouseUpHandler), window.addEventListener("resize", this.onWindowResizelHandler) }, t.prototype.detachEvents = function(t) { t.removeEventListener(p.TouchUIHelper.touchMouseDownEventName, this.onMouseDownHandler), t.removeEventListener("mouseenter", this.onMouseEnterHandler), t.removeEventListener("mouseleave", this.onMouseLeaveHandler), t.removeEventListener("wheel", this.onMouseWheelHandler), t.removeEventListener("dblclick", this.onMouseDblClickHandler), t.removeEventListener("contextmenu", this.onContextMenuHandler), t.removeEventListener("click", this.onMouseClickHandler), document.removeEventListener(p.TouchUIHelper.touchMouseMoveEventName, this.onMouseMoveHandler), document.removeEventListener(p.TouchUIHelper.touchMouseUpEventName, this.onMouseUpHandler), window.removeEventListener("resize", this.onWindowResizelHandler) }, t.prototype.onMouseDown = function(t) {
                var e = this;
                this.lockMouseMove(), this.input.lockFocus(), this.autoScroll.onMouseDown(t), u.raiseEvent(t, this.createDiagramMouseEvent(t), function(t) { return e.events.onMouseDown(t) }), this.input.captureFocus(), c.Browser.TouchUI && this.processTouchDown(t);
                var n = i.Evt.GetEventSource(t),
                    o = n && n.tagName;
                if (c.Browser.TouchUI || "img" === o.toLowerCase() || "image" === o.toLowerCase()) return i.Evt.PreventEventAndBubble(t)
            }, t.prototype.onMouseMove = function(t) { var e = this; if (!this.moveLocked) return this.tryFinishNormalization(t), this.autoScroll.onMouseMove(t, function() { return e.onMouseMoveCore(t) }), this.onMouseMoveCore(t), c.Browser.IE && this.lockMouseMove(), c.Browser.TouchUI ? (this.processTouchMove(t), i.Evt.PreventEventAndBubble(t)) : void 0 }, t.prototype.onMouseMoveCore = function(t) {
                var e = this;
                u.raiseEvent(t, this.createDiagramMouseEvent(t, c.Browser.TouchUI), function(t) { return e.events.onMouseMove(t) })
            }, t.prototype.onMouseUp = function(t) {
                var e = this;
                this.lockMouseMove(), this.tryFinishNormalization(t);
                var n = s.GetIsParent(this.mainElement, i.Evt.GetEventSource(t));
                u.raiseEvent(t, this.createDiagramMouseEvent(t), function(t) { return e.events.onMouseUp(t) }), this.autoScroll.onMouseUp(t), n && this.input.captureFocus(), c.Browser.TouchUI && this.processTouchUp(t)
            }, t.prototype.onMouseEnter = function(t) {
                var e = this;
                this.autoScroll.onMouseEnter(t), this.tryFinishNormalization(t), u.raiseEvent(t, this.createDiagramMouseEvent(t), function(t) { return e.events.onMouseEnter(t) })
            }, t.prototype.onMouseLeave = function(t) {
                var e = this;
                u.raiseEvent(t, this.createDiagramMouseEvent(t), function(t) { return e.events.onMouseLeave(t) })
            }, t.prototype.onMouseDblClick = function(t) {
                var e = this;
                u.raiseEvent(t, this.createDiagramMouseEvent(t), function(t) { return e.events.onDblClick(t) })
            }, t.prototype.onMouseClick = function(t) {
                var e = this;
                u.raiseEvent(t, this.createDiagramMouseEvent(t), function(t) { return e.events.onClick(t) })
            }, t.prototype.onContextMenu = function(t) { var e = this; return u.raiseEvent(t, this.createDiagramContextMenuEvent(t), function(t) { return e.events.onContextMenu(t) }), this.input.captureFocus(), i.Evt.PreventEventAndBubble(t) }, t.prototype.processTouchDown = function(t) {
                var n = this;
                this.resetLongTouch(), this.longTouchTimer = setTimeout(function() { u.raiseEvent(t, n.createDiagramMouseEvent(t), function(t) { return n.events.onLongTouch(t) }), n.resetLongTouch(), n.resetDblClick() }, e.LONG_TOUCH_TIMEOUT)
            }, t.prototype.processTouchMove = function(t) { this.resetLongTouch(), this.resetDblClick() }, t.prototype.processTouchUp = function(t) {
                var n = this;
                if (void 0 !== this.longTouchTimer) {
                    u.raiseEvent(t, this.createDiagramMouseEvent(t), function(t) { return n.events.onClick(t) });
                    var o = i.Evt.GetEventSource(t);
                    void 0 !== this.dblTouchTimer && this.lastClickElement === o ? (u.raiseEvent(t, this.createDiagramMouseEvent(t), function(t) { return n.events.onDblClick(t) }), this.resetDblClick()) : (this.resetDblClick(), this.dblTouchTimer = setTimeout(function() { return n.dblTouchTimer = void 0 }, e.DBL_CLICK_TIMEOUT)), this.lastClickElement = o
                }
                this.resetLongTouch()
            }, t.prototype.resetLongTouch = function() { void 0 !== this.longTouchTimer && clearTimeout(this.longTouchTimer), this.longTouchTimer = void 0 }, t.prototype.resetDblClick = function() { void 0 !== this.dblTouchTimer && clearTimeout(this.dblTouchTimer), this.dblTouchTimer = void 0 }, t.prototype.onWindowResize = function() {
                var t = { horizontal: !1, vertical: !1 };
                this.view.autoZoom !== d.AutoZoomMode.Disabled ? (t.horizontal = !0, t.vertical = !0) : t = this.view.checkFitToCanvas(), this.view.update(t)
            }, t.prototype.onMouseWheel = function(t) {
                var e = this;
                u.raiseEvent(t, this.createDiagramWheelEvent(t), function(t) { return e.events.onMouseWheel(t) })
            }, t.prototype.notifyModelSizeChanged = function(t, e) { this.view.notifyModelSizeChanged(t, e) }, t.prototype.notifyModelRectangleChanged = function(t) { this.view.notifyModelRectangleChanged(t) }, t.prototype.notifyReadOnlyChanged = function(t) { s.ToggleElementClassName(this.mainElement, "dxdi-read-only", t) }, t.prototype.notifyDragStart = function(t) {}, t.prototype.notifyDragEnd = function(t) {}, t.prototype.notifyDragScrollStart = function() { this.autoScroll.onDragScrollStart() }, t.prototype.notifyDragScrollEnd = function() { this.autoScroll.onDragScrollEnd() }, t.prototype.createDiagramMouseEvent = function(t, e) {
                var n = a.getKeyModifiers(t),
                    r = function(t) { return c.Browser.MSTouchUI ? 2 != t.button : i.Evt.IsLeftButtonPressed(t) }(t) ? o.MouseButton.Left : o.MouseButton.Right,
                    s = this.getOffsetPointByEvent(t),
                    u = this.getModelPoint(s),
                    p = this.getEventSource(t, e),
                    h = this.createDiagramMouseEventTouches(t);
                return new o.DiagramMouseEvent(n, r, s, u, p, h)
            }, t.prototype.createDiagramMouseEventTouches = function(t) {
                var e = [];
                if (t.touches)
                    for (var n = 0; n < t.touches.length; n++) {
                        var i = t.touches[n].clientX,
                            r = t.touches[n].clientY,
                            s = this.getOffsetPointByEventPoint(i, r),
                            a = this.getModelPoint(s);
                        e.push(new o.DiagramMouseEventTouch(s, a))
                    }
                return e
            }, t.prototype.createDiagramContextMenuEvent = function(t, e) {
                var n = a.getKeyModifiers(t),
                    i = new r.Point(t.pageX, t.pageY),
                    s = this.getOffsetPointByEvent(t),
                    c = this.getModelPoint(s);
                return new o.DiagramContextMenuEvent(n, i, c)
            }, t.prototype.createDiagramWheelEvent = function(t) {
                var e = a.getKeyModifiers(t),
                    n = this.getOffsetPointByEvent(t),
                    i = this.view.getModelPoint(n),
                    r = this.getEventSource(t);
                return new o.DiagramWheelEvent(e, t.deltaX, t.deltaY, n, i, r)
            }, t.prototype.getEventSource = function(t, e) {
                for (var n = i.Evt.GetEventSource(t, e); n && !this.isDocumentContainer(n);) {
                    var r = u.RenderUtils.getElementEventData(n);
                    if (void 0 !== r) return r;
                    n = n.parentNode
                }
                var s = new o.MouseEventSource;
                return n && this.isDocumentContainer(n) && (s.type = o.MouseEventElementType.Background), s
            }, t.prototype.isDocumentContainer = function(t) { return s.ElementHasCssClass(t, "dxdi-control") }, t.prototype.lockMouseMove = function() {
                var t = this;
                this.moveLocked = !0, setTimeout(function() { return t.moveLocked = !1 }, 10)
            }, t.prototype.getModelPoint = function(t) { return this.view.getModelPoint(t) }, t.prototype.getOffsetPointByEvent = function(t) {
                var e = i.Evt.GetEventX(t),
                    n = i.Evt.GetEventY(t);
                return this.getOffsetPointByEventPoint(e, n)
            }, t.prototype.getOffsetPointByEventPoint = function(t, e) {
                var n = s.GetAbsolutePositionX(this.mainElement),
                    o = s.GetAbsolutePositionY(this.mainElement);
                return new r.Point(t - n, e - o)
            }, t.prototype.getModelPointByEventPoint = function(t, e) { var n = this.getOffsetPointByEventPoint(t, e); return this.view.getModelPoint(n) }, t.prototype.getEventPointByModelPoint = function(t) { var e = this.view.getAbsolutePoint(t); return new r.Point(s.GetAbsolutePositionX(this.mainElement) + e.x, s.GetAbsolutePositionY(this.mainElement) + e.y) }, t.prototype.notifyScrollChanged = function() {
                var t = this;
                this.normalizationRequired || setTimeout(function() { t.normalizationRequired = !0 }, 500)
            }, t.prototype.tryFinishNormalization = function(t) { this.normalizationRequired && (i.Evt.IsLeftButtonPressed(t) || (this.normalizationRequired = !1)) }, t.createSvgElement = function(t, n) { void 0 === n && (n = !1); var o = document.createElementNS(e.svgNS, "svg"); return o.className.baseVal = "dxdi-canvas" + (n ? " export" : ""), t && t.appendChild(o), o }, t.createMainElement = function(t) { var e = document.createElement("div"); return e.setAttribute("class", "dxdi-control"), t.appendChild(e), e }, t
        }();
        e.RenderManager = P
    }, function(t, e, n) {
        "use strict";
        var o, i, r = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 }),
            function(t) { t[t.Centimeter = 0] = "Centimeter", t[t.Inch = 1] = "Inch" }(i = e.RichEditUnit || (e.RichEditUnit = {}));
        var s = function() {
            function t() {}
            return t.getConverter = function(t) {
                switch (t) {
                    case i.Centimeter:
                        return new a;
                    case i.Inch:
                        return new c;
                    default:
                        throw new Error
                }
            }, t.pixelsToTwips = function(e) { return Math.round(t.pixelsToTwipsF(e)) }, t.inchesToTwips = function(e) { return Math.round(t.inchesToTwipsF(e)) }, t.pointsToTwips = function(e) { return Math.round(t.pointsToTwipsF(e)) }, t.picasToTwips = function(e) { return Math.round(1440 * e / t.PICAS_PER_INCH) }, t.centimetersToTwips = function(e) { return Math.round(t.centimetersToTwipsF(e)) }, t.pixelsToTwipsF = function(e) { return 1440 * e / t.DPI }, t.inchesToTwipsF = function(t) { return 1440 * t }, t.pointsToTwipsF = function(t) { return 20 * t }, t.centimetersToTwipsF = function(e) { return 1440 * e / t.CENTIMETERS_PER_INCH }, t.modelUnitsToDegrees = function(t) { return t / 6e4 }, t.modelUnitsToRadians = function(t) { return t / 6e4 * Math.PI / 180 }, t.degreesToModelUnits = function(t) { return 6e4 * t }, t.radiansToModelUnits = function(t) { return 6e4 * t / Math.PI * 180 }, t.radiansToDegrees = function(t) { return t / Math.PI * 180 }, t.fdToModelUnits = function(t) { return Math.round(1875 * t / 2048) }, t.emuToTwips = function(t) { return t / 635 }, t.twipsToPixels = function(e) { return Math.round(t.twipsToPixelsF(e)) }, t.inchesToPixels = function(e) { return Math.round(t.DPI * e) }, t.centimeterToPixel = function(e) { return Math.round(e / (t.CENTIMETERS_PER_INCH / t.DPI)) }, t.pointsToPixels = function(e) { return Math.round(e * t.DPI / 72) }, t.pointsToPixelsF = function(e) { return e * t.DPI / 72 }, t.twipsToPixelsF = function(e) { return e * t.DPI / 1440 }, t.pixelsToPoints = function(e) { return Math.round(72 * e / t.DPI) }, t.twipsToPoints = function(t) { return Math.round(this.twipsToPointsF(t)) }, t.twipsToPointsF = function(t) { return t / 20 }, t.twipsToInches = function(t) { return t / 1440 }, t.pixelsToInches = function(e) { return e / t.DPI }, t.twipsToCentimeters = function(e) { return e * t.CENTIMETERS_PER_INCH / 1440 }, t.pixelToCentimeters = function(e) { return e * t.CENTIMETERS_PER_INCH / t.DPI }, t.hundredthsOfMillimeterToModelUnits = function(t) { return 15 * t / 127 }, t.twipsToEmu = function(t) { return 635 * t }, t.twipsToDegree = function(t) { return t / 6e4 }, t.DPI = 96, t.CENTIMETERS_PER_INCH = 2.54, t.PICAS_PER_INCH = 6, t
        }();
        e.UnitConverter = s;
        var a = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this }
            return r(e, t), e.prototype.getUnits = function() { return i.Centimeter }, e.prototype.twipsToUI = function(t) { return s.twipsToCentimeters(t) }, e.prototype.UIToTwips = function(t) { return s.centimetersToTwips(t) }, e
        }(s);
        e.UIUnitConverterCentimeter = a;
        var c = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this }
            return r(e, t), e.prototype.getUnits = function() { return i.Inch }, e.prototype.twipsToUI = function(t) { return s.twipsToInches(t) }, e.prototype.UIToTwips = function(t) { return s.inchesToTwips(t) }, e
        }(s);
        e.UIUnitConverterInch = c
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(9),
            s = n(0),
            a = n(20),
            c = n(1),
            u = function(t) {
                function e(e, n, o) { return void 0 === e && (e = "Rectangle"), void 0 === n && (n = ""), void 0 === o && (o = new s.Size(r.ShapeDefaultDimension, .75 * r.ShapeDefaultDimension)), t.call(this, e, n, o) || this }
                return i(e, t), Object.defineProperty(e.prototype, "key", { get: function() { return c.ShapeTypes.Rectangle }, enumerable: !0, configurable: !0 }), e.prototype.createShapePrimitives = function(t) {
                    var e = t.rectangle,
                        n = e.left,
                        o = e.top,
                        i = e.width,
                        r = e.height;
                    return [new a.RectanglePrimitive(n, o, i, r, t.style)]
                }, e
            }(r.ShapeDescription);
        e.RectangleShapeDescription = u
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = n(10),
            i = n(8),
            r = n(0),
            s = n(17),
            a = n(23),
            c = function() {
                function t() {}
                return t.updateSvgElementSize = function(t, e, n, o) { t.style.width = e + "px", t.style.height = n + "px", t.setAttribute("viewBox", "0 0 " + e + " " + n), o && (t.setAttribute("width", e.toString()), t.setAttribute("height", n.toString())) }, t.removeContent = function(t) { for (; t.firstChild;) t.removeChild(t.firstChild) }, t.setElementEventData = function(t, e, n, i) { e !== o.MouseEventElementType.Undefined && (t.setAttribute("data-type", e.toString()), void 0 !== n && t.setAttribute("data-key", n.toString()), void 0 !== i && t.setAttribute("data-value", i.toString())) }, t.getElementEventData = function(t) { if (t.getAttribute && t.getAttribute("data-type")) return new o.MouseEventSource(parseInt(t.getAttribute("data-type")), t.getAttribute("data-key"), t.getAttribute("data-value")); var e = t.getAttribute && t.getAttribute("class"); return "dxdi-page" === e || "dxdi-main" === e ? new o.MouseEventSource(o.MouseEventElementType.Document) : void 0 }, t.getHtmlElementStylePropertyName = function(t) {
                    switch (t) {
                        case "fill":
                            return "color";
                        case "text-anchor":
                            return "text-align"
                    }
                    return t
                }, t.getStylePropertyValue = function(t, e, n) { if (void 0 === n && (n = !1), "text-anchor" === t && n) { if ("start" === e) return "end"; if ("end" === e) return "start" } return e }, t.applyStyleToElement = function(t, e, n) {
                    var o = this;
                    void 0 === n && (n = !1);
                    var i = t.getDefaultInstance();
                    t.forEach(function(r) {
                        var s = t[r],
                            a = e instanceof HTMLElement ? o.getHtmlElementStylePropertyName(r) : r;
                        void 0 !== s && "" !== s && s !== i[r] ? e.style.setProperty(a, o.getStylePropertyValue(r, s, n)) : e.style.setProperty(a, "")
                    })
                }, t.generateSvgElementId = function(t) { return t + "_" + s.CreateGuid() }, t.getSvgTextRectangle = function(t, e) {
                    var n;
                    void 0 === e && (e = 0);
                    try { n = t.getBBox() } catch (t) {}
                    if (n) {
                        var o = i.UnitConverter.pixelsToTwips(Math.round(n.x)) - e,
                            s = i.UnitConverter.pixelsToTwips(Math.round(n.y)) - e,
                            a = i.UnitConverter.pixelsToTwips(Math.round(n.width)) + 2 * e,
                            c = i.UnitConverter.pixelsToTwips(Math.round(n.height)) + 2 * e;
                        return r.Rectangle.create(o, s, a, c)
                    }
                    return r.Rectangle.create(0, 0, 0, 0)
                }, t.getUrlPathById = function(t) { return a.Browser.Safari ? "url(" + location.protocol + "//" + location.host + location.pathname + "#" + t + ")" : "url(#" + t + ")" }, t
            }();
        e.RenderUtils = c, e.raiseEvent = function(t, e, n) { n(e), e.preventDefault && t.preventDefault() }
    }, function(t, e, n) {
        "use strict";
        var o;
        Object.defineProperty(e, "__esModule", { value: !0 }),
            function(t) { t[t.None = 0] = "None", t[t.Ctrl = 65536] = "Ctrl", t[t.Shift = 262144] = "Shift", t[t.Alt = 1048576] = "Alt", t[t.Meta = 16777216] = "Meta" }(o = e.ModifierKey || (e.ModifierKey = {})),
            function(t) { t[t.Backspace = 8] = "Backspace", t[t.Tab = 9] = "Tab", t[t.Enter = 13] = "Enter", t[t.Pause = 19] = "Pause", t[t.CapsLock = 20] = "CapsLock", t[t.Esc = 27] = "Esc", t[t.Space = 32] = "Space", t[t.PageUp = 33] = "PageUp", t[t.PageDown = 34] = "PageDown", t[t.End = 35] = "End", t[t.Home = 36] = "Home", t[t.Left = 37] = "Left", t[t.Up = 38] = "Up", t[t.Right = 39] = "Right", t[t.Down = 40] = "Down", t[t.Insert = 45] = "Insert", t[t.Delete = 46] = "Delete", t[t.Key_0 = 48] = "Key_0", t[t.Key_1 = 49] = "Key_1", t[t.Key_2 = 50] = "Key_2", t[t.Key_3 = 51] = "Key_3", t[t.Key_4 = 52] = "Key_4", t[t.Key_5 = 53] = "Key_5", t[t.Key_6 = 54] = "Key_6", t[t.Key_7 = 55] = "Key_7", t[t.Key_8 = 56] = "Key_8", t[t.Key_9 = 57] = "Key_9", t[t.Key_a = 65] = "Key_a", t[t.Key_b = 66] = "Key_b", t[t.Key_c = 67] = "Key_c", t[t.Key_d = 68] = "Key_d", t[t.Key_e = 69] = "Key_e", t[t.Key_f = 70] = "Key_f", t[t.Key_g = 71] = "Key_g", t[t.Key_h = 72] = "Key_h", t[t.Key_i = 73] = "Key_i", t[t.Key_j = 74] = "Key_j", t[t.Key_k = 75] = "Key_k", t[t.Key_l = 76] = "Key_l", t[t.Key_m = 77] = "Key_m", t[t.Key_n = 78] = "Key_n", t[t.Key_o = 79] = "Key_o", t[t.Key_p = 80] = "Key_p", t[t.Key_q = 81] = "Key_q", t[t.Key_r = 82] = "Key_r", t[t.Key_s = 83] = "Key_s", t[t.Key_t = 84] = "Key_t", t[t.Key_u = 85] = "Key_u", t[t.Key_v = 86] = "Key_v", t[t.Key_w = 87] = "Key_w", t[t.Key_x = 88] = "Key_x", t[t.Key_y = 89] = "Key_y", t[t.Key_z = 90] = "Key_z", t[t.Windows = 91] = "Windows", t[t.ContextMenu = 93] = "ContextMenu", t[t.Numpad_0 = 96] = "Numpad_0", t[t.Numpad_1 = 97] = "Numpad_1", t[t.Numpad_2 = 98] = "Numpad_2", t[t.Numpad_3 = 99] = "Numpad_3", t[t.Numpad_4 = 100] = "Numpad_4", t[t.Numpad_5 = 101] = "Numpad_5", t[t.Numpad_6 = 102] = "Numpad_6", t[t.Numpad_7 = 103] = "Numpad_7", t[t.Numpad_8 = 104] = "Numpad_8", t[t.Numpad_9 = 105] = "Numpad_9", t[t.Multiply = 106] = "Multiply", t[t.Add = 107] = "Add", t[t.Subtract = 109] = "Subtract", t[t.Decimal = 110] = "Decimal", t[t.Divide = 111] = "Divide", t[t.F1 = 112] = "F1", t[t.F2 = 113] = "F2", t[t.F3 = 114] = "F3", t[t.F4 = 115] = "F4", t[t.F5 = 116] = "F5", t[t.F6 = 117] = "F6", t[t.F7 = 118] = "F7", t[t.F8 = 119] = "F8", t[t.F9 = 120] = "F9", t[t.F10 = 121] = "F10", t[t.F11 = 122] = "F11", t[t.F12 = 123] = "F12", t[t.NumLock = 144] = "NumLock", t[t.ScrollLock = 145] = "ScrollLock", t[t.Semicolon = 186] = "Semicolon", t[t.Equals = 187] = "Equals", t[t.Comma = 188] = "Comma", t[t.Dash = 189] = "Dash", t[t.Period = 190] = "Period", t[t.ForwardSlash = 191] = "ForwardSlash", t[t.GraveAccent = 192] = "GraveAccent", t[t.OpenBracket = 219] = "OpenBracket", t[t.BackSlash = 220] = "BackSlash", t[t.CloseBracket = 221] = "CloseBracket", t[t.SingleQuote = 222] = "SingleQuote" }(e.KeyCode || (e.KeyCode = {})), e.getKeyModifiers = function(t) { var e = 0; return t.altKey && (e |= o.Alt), t.ctrlKey && (e |= o.Ctrl), t.shiftKey && (e |= o.Shift), t.metaKey && (e |= o.Meta), e }
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = n(23),
            i = n(81),
            r = n(133),
            s = n(134),
            a = n(16),
            c = n(39);

        function u(t) { return void 0 !== t && null != t }

        function p(t, e, n, o) { if (o) { var i = e.search("[A-Z]"); - 1 != i && (e = e.replace(e.charAt(i), "-" + e.charAt(i).toLowerCase())), t.style.setProperty ? t.style.setProperty(e, n, "important") : t.style.cssText += ";" + e + ":" + n + "!important" } else t.style[e] = n }

        function h() { var t = o.Browser.IE && "hidden" == d(document.body).overflow && document.body.scrollTop > 0; return o.Browser.WebKitFamily || o.Browser.Edge || t ? o.Browser.MacOSMobilePlatform ? window.pageYOffset : o.Browser.WebKitFamily && document.documentElement.scrollTop || document.body.scrollTop : document.documentElement.scrollTop }

        function l(t) { if ("object" != typeof t || null == t) return t; var e = {}; for (var n in t) e[n] = t[n]; return e }

        function d(t) {
            if (t.currentStyle) return t.currentStyle;
            if (document.defaultView && document.defaultView.getComputedStyle) {
                var e = document.defaultView.getComputedStyle(t, null);
                if (!e && o.Browser.Firefox && window.frameElement) {
                    for (var n = [], i = window.frameElement; !(e = document.defaultView.getComputedStyle(t, null));) n.push([i, i.style.display]), p(i, "display", "block", !0), i = "BODY" == i.tagName ? i.ownerDocument.defaultView.frameElement : i.parentNode;
                    e = l(e);
                    for (var r, s = 0; r = n[s]; s++) p(r[0], "display", r[1], !1);
                    document.body.offsetWidth
                }
                return e
            }
            return window.getComputedStyle(t, null)
        }

        function f() { var t = o.Browser.IE && "hidden" == d(document.body).overflow && document.body.scrollLeft > 0; return o.Browser.Edge || t ? document.body ? document.body.scrollLeft : document.documentElement.scrollLeft : o.Browser.WebKitFamily ? document.documentElement.scrollLeft || document.body.scrollLeft : document.documentElement.scrollLeft }

        function y() { try { return document.activeElement } catch (t) { return null } }

        function m(t, e) {
            try {
                if (t.focus(), o.Browser.IE && document.activeElement != t && t.focus(), e) {
                    var n = Selection.GetInfo(t);
                    if (n.startPos == n.endPos) switch (e) {
                        case "start":
                            Selection.SetCaretPosition(t, 0);
                            break;
                        case "all":
                            Selection.Set(t)
                    }
                }
            } catch (t) {}
        }

        function g(t, e) { try { return !!t.className && -1 != t.className.indexOf(e) } catch (t) { return !1 } }

        function v(t, e) { t && "string" == typeof e && (P(t, e = e.trim()) || "" === e || (t.className = "" === t.className ? e : t.className + " " + e)) }

        function P(t, e) {
            try {
                var n, o = t.classList;
                if (!o) {
                    if (!t.className) return !1;
                    n = t.className.split(" ")
                }
                for (var r = e.split(" "), s = r.length - 1; s >= 0; s--)
                    if (o) { if (!o.contains(r[s])) return !1 } else if (i.Data.ArrayIndexOf(n, r[s]) < 0) return !1;
                return !0
            } catch (t) { return !1 }
        }

        function C(t, e) {
            if (t) {
                var n = " " + t.className + " ",
                    o = n.replace(" " + e + " ", " ");
                n.length != o.length && (t.className = r.Str.Trim(o))
            }
        }

        function S(t) {
            return o.Browser.IE ? function(t) { return null == t || o.Browser.IE && null == t.parentNode ? 0 : t.getBoundingClientRect().top + h() }(t) : o.Browser.Firefox && o.Browser.Version >= 3 ? _(t) : o.Browser.Opera ? function(t) {
                var e = !0;
                t && "TR" == t.tagName && t.cells.length > 0 && (t = t.cells[0]);
                var n = w(t, !1);
                for (; null != t;) n += t.offsetTop, e || (n -= t.scrollTop), t = t.offsetParent, e = !1;
                return n += document.body.scrollTop
            }(t) : o.Browser.NetscapeFamily && (!o.Browser.Firefox || o.Browser.Version < 3) ? function(t) {
                var e = w(t, !1),
                    n = !0;
                for (; null != t;) {
                    if (e += t.offsetTop, n || null == t.offsetParent || (e -= t.scrollTop), !n && o.Browser.Firefox) { var i = d(t); "DIV" == t.tagName && "visible" != i.overflow && (e += b(i.borderTopWidth)) }
                    n = !1, t = t.offsetParent
                }
                return e
            }(t) : o.Browser.WebKitFamily || o.Browser.Edge ? _(t) : function(t) {
                var e = 0,
                    n = !0;
                for (; null != t;) e += t.offsetTop, n || null == t.offsetParent || (e -= t.scrollTop), n = !1, t = t.offsetParent;
                return e
            }(t)
        }

        function _(t) { if (null == t) return 0; var e = t.getBoundingClientRect().top + h(); return Math.round(e) }

        function w(t, e) {
            for (var n = 0, o = !0; null != t && "BODY" != t.tagName;) {
                var i = d(t);
                if ("absolute" == i.position) break;
                o || "DIV" != t.tagName || "" != i.position && "static" != i.position || (n -= e ? t.scrollLeft : t.scrollTop), t = t.parentNode, o = !1
            }
            return n
        }

        function b(t) { return I(t, parseInt) }

        function x(t) { return I(t, parseFloat) }

        function I(t, e) {
            var n = 0;
            if (null != t && "" != t) try {
                var o = t.indexOf("px");
                o > -1 && (n = e(t.substr(0, o)))
            } catch (t) {}
            return n
        }

        function O(t) {
            return o.Browser.IE ? function(t) { return null == t || o.Browser.IE && null == t.parentNode ? 0 : t.getBoundingClientRect().left + f() }(t) : o.Browser.Firefox && o.Browser.Version >= 3 ? E(t) : o.Browser.Opera ? function(t) {
                var e = !0,
                    n = w(t, !0);
                for (; null != t;) n += t.offsetLeft, e || (n -= t.scrollLeft), t = t.offsetParent, e = !1;
                return n += document.body.scrollLeft
            }(t) : o.Browser.NetscapeFamily && (!o.Browser.Firefox || o.Browser.Version < 3) ? function(t) {
                var e = w(t, !0),
                    n = !0;
                for (; null != t;) {
                    if (e += t.offsetLeft, n || null == t.offsetParent || (e -= t.scrollLeft), !n && o.Browser.Firefox) { var i = d(t); "DIV" == t.tagName && "visible" != i.overflow && (e += b(i.borderLeftWidth)) }
                    n = !1, t = t.offsetParent
                }
                return e
            }(t) : o.Browser.WebKitFamily || o.Browser.Edge ? E(t) : function(t) {
                var e = 0,
                    n = !0;
                for (; null != t;) e += t.offsetLeft, n || null == t.offsetParent || (e -= t.scrollLeft), n = !1, t = t.offsetParent;
                return e
            }(t)
        }

        function E(t) { if (null == t) return 0; var e = t.getBoundingClientRect().left + f(); return Math.round(e) }

        function M(t, e, n) {
            return t -= function(t, e) {
                var n = function(t) { var e = document.createElement("DIV"); return e.style.top = "0px", e.style.left = "0px", e.style.visibility = "hidden", e.style.position = d(t).position, e }(t);
                "static" == n.style.position && (n.style.position = "absolute");
                t.parentNode.appendChild(n);
                var o = e ? O(n) : S(n);
                return t.parentNode.removeChild(n), Math.round(o)
            }(e, n)
        }

        function T(t, e) { return D(t.childNodes, e) }

        function A(t, e) { return D(t.all || t.getElementsByTagName("*"), e) }

        function D(t, e) {
            for (var n = [], o = 0; o < t.length; o++) {
                var i = t[o];
                e && !e(i) || n.push(i)
            }
            return n
        }

        function L(t, e) { for (var n, o = [], i = 0; n = t[i]; i++) e && !e(n) || o.push(n); return o }
        e.IsExists = u, e.IsNumber = function(t) { return !isNaN(parseFloat(t)) && isFinite(t) }, e.SetStyles = function(t, e, n) {
            for (var i in u(e.cssText) && (t.style.cssText = e.cssText), u(e.className) && (t.className = e.className), e)
                if (e.hasOwnProperty(i)) {
                    var r = e[i];
                    switch (i) {
                        case "cssText":
                        case "className":
                            break;
                        case "float":
                            U(t, r);
                            break;
                        case "opacity":
                            B(t, r);
                            break;
                        case "zIndex":
                            p(t, i, r, n);
                            break;
                        case "fontWeight":
                            o.Browser.IE && o.Browser.Version < 9 && "number" == typeof e[i] && (r = e[i].toString());
                        default:
                            p(t, i, r + ("number" == typeof r ? "px" : ""), n)
                    }
                }
        }, e.SetStylesCore = p, e.GetDocumentScrollTop = h, e.CloneObject = l, e.GetCurrentStyle = d, e.GetDocumentScrollLeft = f, e.focusedElement = null, e.GetFocusedElement = function() { var t = y(); return t || e.focusedElement }, e.GetActiveElement = y, e.SetFocus = function(t, e) { o.Browser.MacOSMobilePlatform ? m(t, e) : window.setTimeout(function() { m(t, e) }, 100) }, e.GetIsParent = function(t, e) {
            if (!t || !e) return !1;
            for (; e;) {
                if (e === t) return !0;
                if ("BODY" === e.tagName) return !1;
                e = e.parentNode
            }
            return !1
        }, e.ElementContainsCssClass = g, e.AddClassNameToElement = v, e.ElementHasCssClass = P, e.RemoveClassNameFromElement = C, e.ToggleElementClassName = function(t, e, n) { t && (!1 === n || void 0 === n && P(t, e) ? C(t, e) : (!0 === n || void 0 === n && !P(t, e)) && v(t, e)) }, e.GetAbsolutePositionY = S, e.PxToInt = b, e.PxToFloat = x, e.GetAbsolutePositionX = O, e.SetAbsoluteX = function(t, e) { t.style.left = M(e, t, !0) + "px" }, e.SetAbsoluteY = function(t, e) { t.style.top = M(e, t, !1) + "px" }, e.IsPercentageSize = function(t) { return t && -1 != t.indexOf("%") }, e.GetChildNodes = T, e.GetNodes = A, e.RetrieveByPredicate = D, e.GetChildNodesByClassName = function(t, e) { return t ? t.querySelectorAll ? L(t.querySelectorAll("." + e), function(e) { return e.parentNode === t }) : T(t, function(t) { return t.className && P(t, e) }) : [] }, e.GetNodesByClassName = function(t, e) { return t.querySelectorAll ? L(t.querySelectorAll("." + e), null) : A(t, function(t) { return t.className && P(t, e) }) }, e.GetParentByClassName = function(t, e) {
            for (; null != t;) {
                if ("BODY" == t.tagName || "#document" == t.nodeName) return null;
                if (g(t, e)) return t;
                t = t.parentNode
            }
            return null
        }, e.GetParentByTagName = function(t, e) {
            for (e = e.toUpperCase(); t;) {
                if ("BODY" === t.tagName) return null;
                if (t.tagName === e) return t;
                t = t.parentNode
            }
            return null
        };
        var z, N = null;

        function j(t, e) { t.innerHTML = e }

        function R(t, e, n, o) {
            if (t)
                if ("string" == typeof e) t.style.display = e;
                else if (e) {
                if (t.style.display = "", n && "none" === d(t).display) {
                    var i = o ? "inline-" : "";
                    switch (t.tagName) {
                        case "TABLE":
                            t.style.display = i + "table";
                            break;
                        default:
                            t.style.display = i + "block"
                    }
                }
            } else t.style.display = "none"
        }

        function k(t, e) { u(e) || (e = o.Browser.IE && 9 != o.Browser.MajorVersion && window.getComputedStyle ? window.getComputedStyle(t) : d(t)); var n = 0; return "none" != e.borderTopStyle && (n += x(e.borderTopWidth)), "none" != e.borderBottomStyle && (n += x(e.borderBottomWidth)), n }

        function U(t, e) { u(t.style.cssFloat) ? t.style.cssFloat = e : u(t.style.styleFloat) ? t.style.styleFloat = e : s.Attr.SetAttribute(t.style, "float", e) }

        function B(t, e) {!o.Browser.IE || o.Browser.Version > 8 ? t.style.opacity = e : "object" == typeof t.filters && t.filters["DXImageTransform.Microsoft.Alpha"] ? t.filters.item("DXImageTransform.Microsoft.Alpha").Opacity = 100 * e : t.style.filter = "alpha(opacity=" + 100 * e + ")" }

        function H(t) { return t && K(t) }

        function K(t) {
            if (!t) return !1;
            if (!(o.Browser.Firefox && o.Browser.Version < 4) && t.ownerDocument && t.ownerDocument.body && t.ownerDocument.body.compareDocumentPosition) return t.ownerDocument.body.compareDocumentPosition(t) % 2 == 0;
            if (!o.Browser.Opera && !(o.Browser.IE && o.Browser.Version < 9) && t.offsetParent && t.parentNode.tagName) return !0;
            for (; null != t;) {
                if ("BODY" == t.tagName) return !0;
                t = t.parentNode
            }
            return !1
        }

        function V(t, e) {
            void 0 === e && (e = function() { return !1 });
            for (var n = t; n && 1 == n.nodeType;) {
                if (n == t || !e(n)) { var o = n.tagName.toUpperCase(); if ("BODY" == o) return !0; if (-1 !== ["INPUT", "BUTTON", "TEXTAREA", "SELECT", "OPTION"].indexOf(o) && n.disabled || !F(n, !1) || !W(n, !1)) return !1 }
                n = n.parentNode
            }
            return !0
        }

        function F(t, e) { return e ? "none" != d(t).display : "none" != t.style.display }

        function W(t, e) { return e ? "hidden" != d(t).visibility : "hidden" != t.style.visibility }

        function G(t, e) { return Z(t, e) + k(t, e) }

        function Z(t, e) { var n = e || d(t); return b(n.paddingTop) + b(n.paddingBottom) }

        function X(t) { u(t = r.Str.DecodeHtmlViaTextArea(t)) && "" !== t && alert(t) }

        function Y(t, e, n, o, i) { var r = t; return r |= e ? a.ModifierKey.Ctrl : 0, r |= n ? a.ModifierKey.Shift : 0, r |= o ? a.ModifierKey.Alt : 0, r |= i ? a.ModifierKey.Meta : 0 }
        e.setInnerHtmlInternal = j, e.SetElementDisplay = R, e.GetInnerText = function(t) {
            if (o.Browser.Safari && o.Browser.MajorVersion <= 5) {
                var e = (null == N && ((N = document.createElement("DIV")).style.width = "0", N.style.height = "0", N.style.overflow = "visible", R(N, !1, !1, !1), document.body.appendChild(N)), N);
                j(e, t.innerHTML), R(e, !0, !1, !1);
                var n = e.innerText;
                return R(e, !1, !1, !1), n
            }
            return o.Browser.NetscapeFamily || o.Browser.WebKitFamily || o.Browser.IE && o.Browser.Version >= 9 || o.Browser.Edge ? t.textContent : t.innerText
        }, e.GetVerticalScrollBarWidth = function() {
            if (void 0 === z) {
                var t = document.createElement("DIV");
                t.style.cssText = "position: absolute; top: 0px; left: 0px; visibility: hidden; width: 200px; height: 150px; overflow: hidden; box-sizing: content-box", document.body.appendChild(t);
                var e = document.createElement("P");
                t.appendChild(e), e.style.cssText = "width: 100%; height: 200px;";
                var n = e.offsetWidth;
                t.style.overflow = "scroll";
                var o = e.offsetWidth;
                n == o && (o = t.clientWidth), z = n - o, document.body.removeChild(t)
            }
            return z
        }, e.GetHorizontalBordersWidth = function(t, e) { u(e) || (e = o.Browser.IE && window.getComputedStyle ? window.getComputedStyle(t) : d(t)); var n = 0; return "none" != e.borderLeftStyle && (n += x(e.borderLeftWidth)), "none" != e.borderRightStyle && (n += x(e.borderRightWidth)), n }, e.GetVerticalBordersWidth = k, e.SetElementVisibility = function(t, e) { t && (t.style.visibility = "string" == typeof e ? e : e ? "visible" : "hidden") }, e.SetElementFloat = U, e.SetElementOpacity = B, e.CreateGuid = function() { return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) { var e = 16 * Math.random() | 0; return ("x" == t ? e : 3 & e | 8).toString(16) }) }, e.IsUrlContainsClientScript = function(t) { return -1 !== t.toLowerCase().indexOf("javascript:") }, e.IsExistsElement = H, e.IsValidElement = K, e.IsInteractiveControl = function(t) { return i.Data.ArrayIndexOf(["A", "INPUT", "SELECT", "OPTION", "TEXTAREA", "BUTTON", "IFRAME"], t.tagName) > -1 }, e.IsActionElement = function(t) {
            if (!H(t)) return !1;
            var e = parseInt(s.Attr.GetAttribute(t, s.Attr.GetTabIndexAttributeName())),
                n = !isNaN(e),
                o = n && e > -1,
                i = n && e < 0,
                r = t.tagName,
                a = V(t),
                c = -1 !== ["BUTTON", "SELECT", "TEXTAREA", "OPTION", "IFRAME"].indexOf(r),
                u = "A" === r && (!!t.href || o),
                p = "INPUT" === r && "hidden" !== t.type.toLowerCase(),
                h = "INPUT" !== r && o,
                l = "DIV" == r && "true" === t.contentEditable;
            return a && !i && (c || u || p || h || l)
        }, e.IsFocusable = V, e.GetElementDisplay = F, e.GetElementVisibility = W, e.GetClearClientHeight = function(t) { return t.offsetHeight - G(t) }, e.GetTopBottomBordersAndPaddingsSummaryValue = G, e.GetTopBottomPaddings = Z, e.ParseShortcutString = function(t) {
            if (!t) return 0;
            var e = !1,
                n = !1,
                o = !1,
                i = !1,
                s = null,
                c = t.toString().split("+");
            if (c.length > 0)
                for (var u = 0; u < c.length; u++) {
                    var p = r.Str.Trim(c[u].toUpperCase());
                    switch (p) {
                        case "CONTROL":
                        case "CONTROLKEY":
                        case "CTRL":
                            e = !0;
                            break;
                        case "SHIFT":
                        case "SHIFTKEY":
                            n = !0;
                            break;
                        case "ALT":
                            o = !0;
                            break;
                        case "CMD":
                            i = !0;
                            break;
                        case "F1":
                            s = a.KeyCode.F1;
                            break;
                        case "F2":
                            s = a.KeyCode.F2;
                            break;
                        case "F3":
                            s = a.KeyCode.F3;
                            break;
                        case "F4":
                            s = a.KeyCode.F4;
                            break;
                        case "F5":
                            s = a.KeyCode.F5;
                            break;
                        case "F6":
                            s = a.KeyCode.F6;
                            break;
                        case "F7":
                            s = a.KeyCode.F7;
                            break;
                        case "F8":
                            s = a.KeyCode.F8;
                            break;
                        case "F9":
                            s = a.KeyCode.F9;
                            break;
                        case "F10":
                            s = a.KeyCode.F10;
                            break;
                        case "F11":
                            s = a.KeyCode.F11;
                            break;
                        case "F12":
                            s = a.KeyCode.F12;
                            break;
                        case "RETURN":
                        case "ENTER":
                            s = a.KeyCode.Enter;
                            break;
                        case "HOME":
                            s = a.KeyCode.Home;
                            break;
                        case "END":
                            s = a.KeyCode.End;
                            break;
                        case "LEFT":
                            s = a.KeyCode.Left;
                            break;
                        case "RIGHT":
                            s = a.KeyCode.Right;
                            break;
                        case "UP":
                            s = a.KeyCode.Up;
                            break;
                        case "DOWN":
                            s = a.KeyCode.Down;
                            break;
                        case "PAGEUP":
                            s = a.KeyCode.PageUp;
                            break;
                        case "PAGEDOWN":
                            s = a.KeyCode.PageDown;
                            break;
                        case "SPACE":
                            s = a.KeyCode.Space;
                            break;
                        case "TAB":
                            s = a.KeyCode.Tab;
                            break;
                        case "BACKSPACE":
                        case "BACK":
                            s = a.KeyCode.Backspace;
                            break;
                        case "CONTEXT":
                            s = a.KeyCode.ContextMenu;
                            break;
                        case "ESCAPE":
                        case "ESC":
                            s = a.KeyCode.Esc;
                            break;
                        case "DELETE":
                        case "DEL":
                            s = a.KeyCode.Delete;
                            break;
                        case "INSERT":
                        case "INS":
                            s = a.KeyCode.Insert;
                            break;
                        case "PLUS":
                            s = "+".charCodeAt(0);
                            break;
                        default:
                            s = p.charCodeAt(0)
                    }
                } else X("Invalid shortcut");
            return Y(s, e, n, o, i)
        }, e.ShowErrorAlert = X, e.GetShortcutCode = Y, e.GetShortcutCodeByEvent = function(t) { return Y(c.Evt.GetKeyCode(t), t.ctrlKey, t.shiftKey, t.altKey, !!o.Browser.MacOSPlatform && t.metaKey) }
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = n(13),
            i = n(15),
            r = function() {
                function t(t, e, n, o) { this.style = t, this.className = e, this.clipPathId = n, this.onApplyProperties = o, this.children = [] }
                return t.prototype.createElement = function() { var t = this.createMainElement(); return this.createChildElements(t), t }, t.prototype.createChildElements = function(t) { for (var e = 0; e < this.children.length; e++) t.appendChild(this.children[e].createElement()) }, t.prototype.applyElementProperties = function(t) { this.applyElementStyleProperties(t), this.className && t.setAttribute("class", this.className), "string" == typeof this.clipPathId && (this.clipPathId ? t.setAttribute("clip-path", i.RenderUtils.getUrlPathById(this.clipPathId)) : t.removeAttribute("clip-path")), this.onApplyProperties && this.onApplyProperties(t), this.applyChildrenProperties(t) }, t.prototype.applyChildrenProperties = function(t) { for (var e = 0; e < this.children.length; e++) this.children[e].applyElementProperties(t.childNodes[e]) }, t.prototype.applyElementStyleProperties = function(t) { this.applyElementStylePropertiesCore(t) }, t.prototype.applyElementStylePropertiesCore = function(t, e) { void 0 === e && (e = !1), this.style && i.RenderUtils.applyStyleToElement(this.style, t, e) }, t.prototype.setUnitAttribute = function(t, e, n) {
                    if (null != n) {
                        var i = "number" == typeof n ? o.UnitConverter.twipsToPixels(n).toString() : n;
                        t.setAttribute(e, i)
                    }
                }, t.prototype.dispose = function() { this.children && this.children.forEach(function(t) { return t.dispose() }) }, t
            }();
        e.SvgPrimitive = r
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o, i = n(11),
            r = n(5),
            s = n(0),
            a = n(6),
            c = n(49),
            u = n(38);
        ! function(t) { t[t.In = 0] = "In", t[t.Cm = 1] = "Cm", t[t.Px = 2] = "Px" }(o = e.DiagramUnit || (e.DiagramUnit = {})),
        function(t) { t[t.Portrait = 0] = "Portrait", t[t.Landscape = 1] = "Landscape" }(e.PageOrientation || (e.PageOrientation = {}));
        var p = function() {
            function t(e) { void 0 === e && (e = new s.Size(8391, 11906)), this.items = [], this.itemIndexByKey = {}, this.pageSize = new s.Size(8391, 11906), this.pageLandscape = !1, this.pageColor = t.defaultPageColor, this.units = o.In, this.snapStartPoint = new s.Point(0, 0), this.pageSize = e, this.size = this.pageSize.clone(), this.rectangle = new s.Rectangle(new s.Point(0, 0), new s.Size(0, 0)) }
            return Object.defineProperty(t.prototype, "pageWidth", { get: function() { return this.pageLandscape ? this.pageSize.height : this.pageSize.width }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "pageHeight", { get: function() { return this.pageLandscape ? this.pageSize.width : this.pageSize.height }, enumerable: !0, configurable: !0 }), t.prototype.getRectangle = function(t) { return t && (this.rectangle = s.GeometryUtils.getCommonRectangle(this.items.map(function(t) { return t.rectangle }))), this.rectangle }, t.getRectangle = function(t) { return s.GeometryUtils.getCommonRectangle(t.map(function(t) { return t.rectangle })) }, t.prototype.pushItem = function(t) {
                var e = this.items.push(t);
                this.itemIndexByKey[t.key] = e - 1, t instanceof i.Shape && !t.image.isEmpty && this.cacheShapeImage(t)
            }, t.prototype.removeItem = function(t) {
                var e = this.getItemIndex(t);
                delete this.itemIndexByKey[t.key], this.items.splice(e, 1), this.updateIndicesHash(e)
            }, t.prototype.updateIndicesHash = function(t) { for (var e = t; e < this.items.length; e++) this.itemIndexByKey[this.items[e].key] = e }, t.prototype.getItemIndex = function(t) { return this.itemIndexByKey[t.key] }, t.prototype.findShape = function(t) { var e = this.findItem(t); return e instanceof i.Shape ? e : void 0 }, t.prototype.findShapesCore = function(t) { var e; return e = [], this.items.forEach(function(n) { n instanceof i.Shape && t(n) && e.push(n) }), e }, t.prototype.findShapeCore = function(t) { var e; return this.items.forEach(function(n) { n instanceof i.Shape && t(n) && (e = n) }), e }, t.prototype.findShapeAtPosition = function(t) { return this.findShapeCore(function(e) { return e.position.equals(t) }) }, t.prototype.findShapeByDataKey = function(t) { return this.findShapeCore(function(e) { return e.dataKey === t }) }, t.prototype.findShapesByImageUrl = function(t) { return this.findShapesCore(function(e) { return e.image.url === t }) }, t.prototype.cacheShapeImage = function(t) {
                var e = c.ImageCache.instance.createUnloadedInfoByShapeImageInfo(t.image);
                e.isLoaded && t.image.loadBase64Content(e.base64)
            }, t.prototype.loadAllImages = function(t) { c.ImageCache.instance.loadAllImages(t) }, t.prototype.findContainer = function(t) { var e = this.findShape(t); return e && e.enableChildren ? e : void 0 }, t.prototype.getChildren = function(t) { var e = this; return t.childKeys.map(function(t) { return e.findItem(t) }).filter(function(t) { return t }) }, t.prototype.findChild = function(t, e, n) {
                var o, r = this;
                return void 0 === n && (n = !0), t.childKeys.forEach(function(t) {
                    if (!o) {
                        var s = r.findItem(t);
                        t !== e ? n && s instanceof i.Shape && (o = r.findChild(s, e, n)) : o = s
                    }
                }), o
            }, t.prototype.findItemContainerCore = function(t, e) { for (var n = t.container; n && e && !e(n);) n = n.container; return n }, t.prototype.findItemContainer = function(t) { return this.findItemContainerCore(t) }, t.prototype.findItemCollapsedContainer = function(t) { return this.findItemContainerCore(t, function(t) { return !t.expanded }) }, t.prototype.findItemTopCollapsedContainer = function(t) { for (var e, n = t.container; n;) n.expanded || (e = n), n = n.container; return e }, t.prototype.isContainerItem = function(t, e) { return void 0 !== this.findItemContainerCore(e, function(e) { return e.key === t.key }) }, t.prototype.findConnector = function(t) { var e = this.findItem(t); return e instanceof r.Connector ? e : void 0 }, t.prototype.findConnectorCore = function(t) { var e; return this.items.forEach(function(n) { n instanceof r.Connector && t(n) && (e = n) }), e }, t.prototype.findConnectorAtPoints = function(t) { return this.findConnectorCore(function(e) { return s.GeometryUtils.arePointsEqual(e.points, t) }) }, t.prototype.findConnectorByDataKey = function(t) { return this.findConnectorCore(function(e) { return e.dataKey === t }) }, t.prototype.findConnectorsCore = function(t) { var e = []; return this.items.forEach(function(n) { n instanceof r.Connector && t(n) && e.push(n) }), e }, t.prototype.findConnectorsWithoutBeginItem = function() { return this.findConnectorsCore(function(t) { return !t.beginItem }) }, t.prototype.findConnectorsWithoutEndItem = function() { return this.findConnectorsCore(function(t) { return !t.endItem }) }, t.prototype.findItem = function(t) { return this.items[this.itemIndexByKey[t]] }, t.isIntersectedItems = function(t, e) { var n = !1; return t instanceof i.Shape ? n = e.intersectedByRect(t.rectangle) : t instanceof r.Connector && t.getSegments().forEach(function(t) { e instanceof i.Shape ? n = n || t.intersectRect(e.rectangle) : e instanceof r.Connector && e.getSegments().forEach(function(e) { n = n || t.intersect(e) }) }), n }, t.prototype.getIntersectItems = function(e) { var n = []; return this.items.forEach(function(o) { o.container === e.container && (e === o || o instanceof r.Connector && -1 !== e.attachedConnectors.indexOf(o) || !t.isIntersectedItems(o, e) || n.push(o)) }), n }, t.prototype.getIntersectItemsMinZIndex = function(t) { return this.getIntersectItems(t).map(function(t) { return t.zIndex }).reduce(function(t, e) { return Math.min(t, e) }, Number.MAX_VALUE) }, t.prototype.getIntersectItemsMaxZIndex = function(t) { return this.getIntersectItems(t).map(function(t) { return t.zIndex }).reduce(function(t, e) { return Math.max(t, e) }, -Number.MAX_VALUE) }, t.prototype.iterateItems = function(t) { this.items.forEach(t) }, t.prototype.invalidateItems = function() { this.iterateItems(function(t) { t.invalidatePrimitives(), t instanceof r.Connector && t.invalidateRenderPoints() }) }, t.prototype.getNextKey = function(t) { var e = this; return a.ModelUtils.getNextItemKey(this.items.map(function(t) { return t.key }), function(t) { return void 0 === e.itemIndexByKey[t] }, t) }, t.defaultPageColor = u.ColorHelper.LIGHT_COLOR, t
        }();
        e.DiagramModel = p
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(12),
            s = function(t) {
                function e(e, n, o, i, r, s, a, c) { var u = t.call(this, r, s, a, c) || this; return u.x = e, u.y = n, u.width = o, u.height = i, u }
                return i(e, t), e.prototype.createMainElement = function() { return document.createElementNS(r.svgNS, "rect") }, e.prototype.applyElementProperties = function(e) { this.setUnitAttribute(e, "x", this.x), this.setUnitAttribute(e, "y", this.y), this.setUnitAttribute(e, "width", this.width), this.setUnitAttribute(e, "height", this.height), t.prototype.applyElementProperties.call(this, e) }, e
            }(n(18).SvgPrimitive);
        e.RectanglePrimitive = s
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = function() { return function(t, e) { this.key = t, this.point = e } }();
        e.ShapeParameterPoint = o
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(5),
            s = function() { return function(t) { this.orientation = c.Vertical, this.direction = a.Forward, this.componentSpacing = t && 2 * t > 720 ? 2 * t : 720, this.columnSpacing = t && 2 * t > r.Connector.minOffset ? 2 * t : r.Connector.minOffset, this.layerSpacing = 2 * this.columnSpacing } }();
        e.LayoutSettings = s;
        var a, c, u, p = function(t) {
            function e(e) { var n = t.call(this, e) || this; return n.alignment = u.Center, n.subTreeColumnSpacing = n.componentSpacing / 2, n }
            return i(e, t), e
        }(s);
        e.TreeLayoutSettings = p,
            function(t) { t[t.Backward = 0] = "Backward", t[t.Forward = 1] = "Forward" }(a = e.LogicalDirectionKind || (e.LogicalDirectionKind = {})),
            function(t) { t[t.Horizontal = 0] = "Horizontal", t[t.Vertical = 1] = "Vertical" }(c = e.DataLayoutOrientation || (e.DataLayoutOrientation = {})),
            function(t) { t[t.Left = 0] = "Left", t[t.Center = 1] = "Center" }(u = e.Alignment || (e.Alignment = {}))
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = function() {
            function t() {}
            return t.IdentUserAgent = function(e, n) {
                void 0 === n && (n = !1);
                var o = ["Mozilla", "IE", "Firefox", "Netscape", "Safari", "Chrome", "Opera", "Opera10", "Edge"],
                    i = { Safari: 2, Chrome: .1, Mozilla: 1.9, Netscape: 8, Firefox: 2, Opera: 9, IE: 6, Edge: 12 };
                if (e && 0 != e.length) {
                    e = e.toLowerCase(), t.indentPlatformMajorVersion(e);
                    try {
                        for (var r, s = { Windows: "Win", Macintosh: "Mac", "Mac OS": "Mac", Mac_PowerPC: "Mac", "cpu os": "MacMobile", "cpu iphone os": "MacMobile", Android: "Android", "!Windows Phone": "WinPhone", "!WPDesktop": "WinPhone", "!ZuneWP": "WinPhone" }, a = "(?:(\\d+)(?:\\.((?:\\d+?[1-9])|\\d)0*?)?)?", c = { Safari: "applewebkit(?:.*?(?:version/(\\d+)(?:\\.((?:\\d+?[1-9])|\\d)0*?)?[\\.\\w\\d]*?(?:\\s+mobile/\\S*)?\\s+safari))?", Chrome: "(?:chrome|crios)(?!frame)(?:/|\\s*)?" + a, Mozilla: "mozilla(?:.*rv:" + a + ".*Gecko)?", Netscape: "(?:netscape|navigator)\\d*/?\\s*" + a, Firefox: "firefox(?:/|\\s*)?" + a, Opera: "(?:opera|sopr)(?:/|\\s*)?" + a, Opera10: "opera.*\\s*version(?:/|\\s*)?" + a, IE: "msie\\s*" + a, Edge: "edge(?:/|\\s*)?" + a }, u = -1, p = 0; p < o.length; p++) {
                            var h = o[p],
                                l = new RegExp(c[h], "i");
                            l.compile && l.compile(c[h], "i");
                            var d = l.exec(e);
                            if (d && d.index >= 0) {
                                if ("IE" == r && u >= 11 && "Safari" == h) continue;
                                "Opera10" == (r = h) && (r = "Opera");
                                u = t.GetBrowserVersion(e, d, "trident(?:/|\\s*)?(?:(\\d+)(?:\\.((?:\\d+?[1-9])|\\d)0*?)?)?", t.getIECompatibleVersionString()), "Mozilla" == r && u >= 11 && (r = "IE")
                            }
                        }
                        r || (r = "IE");
                        var f, y = -1 != u;
                        y || (u = i[r]);
                        var m = Number.MAX_VALUE;
                        for (var g in s)
                            if (s.hasOwnProperty(g)) {
                                var v = "!" == g.substr(0, 1),
                                    P = e.indexOf((v ? g.substr(1) : g).toLowerCase());
                                P >= 0 && (P < m || v) && (m = v ? 0 : P, f = s[g])
                            }
                        var C = e.toUpperCase().match("SM-[A-Z]"),
                            S = C && C.length > 0;
                        "WinPhone" == f && u < 9 && (u = Math.floor(t.getVersionFromTrident(e, "trident(?:/|\\s*)?" + a))), !n && "IE" == r && u > 7 && document.documentMode < u && (u = document.documentMode), "WinPhone" == f && (u = Math.max(9, u)), f || (f = "Win"), f != s["cpu os"] || y || (u = 4), t.fillUserAgentInfo(o, r, u, f, S)
                    } catch (e) { t.fillUserAgentInfo(o, "IE", i.IE, "Win") }
                } else t.fillUserAgentInfo(o, "IE", i.IE, "Win")
            }, t.GetBrowserVersion = function(e, n, o, i) { var r = t.getVersionFromMatches(n); if (i) { var s = t.getVersionFromTrident(e, o); if ("edge" === i || parseInt(i) === s) return s } return r }, t.getIECompatibleVersionString = function() {
                if (document.compatible)
                    for (var t = 0; t < document.compatible.length; t++)
                        if ("IE" === document.compatible[t].userAgent && document.compatible[t].version) return document.compatible[t].version.toLowerCase();
                return ""
            }, t.isTouchEnabled = function() { return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 }, t.fillUserAgentInfo = function(e, n, o, i, r) {
                void 0 === r && (r = !1);
                for (var s = 0; s < e.length; s++) {
                    var a = e[s];
                    t[a] = a == n
                }
                t.Version = Math.floor(10 * o) / 10, t.MajorVersion = Math.floor(t.Version), t.WindowsPlatform = "Win" == i || "WinPhone" == i, t.MacOSPlatform = "Mac" == i, t.MacOSMobilePlatform = "MacMobile" == i || "Mac" == i && t.isTouchEnabled(), t.AndroidMobilePlatform = "Android" == i, t.WindowsPhonePlatform = "WinPhone" == i, t.WebKitFamily = t.Safari || t.Chrome || t.Opera && t.MajorVersion >= 15, t.NetscapeFamily = t.Netscape || t.Mozilla || t.Firefox, t.HardwareAcceleration = t.IE && t.MajorVersion >= 9 || t.Firefox && t.MajorVersion >= 4 || t.AndroidMobilePlatform && t.Chrome || t.Chrome && t.MajorVersion >= 37 || t.Safari && !t.WindowsPlatform || t.Edge || t.Opera && t.MajorVersion >= 46, t.WebKitTouchUI = t.MacOSMobilePlatform || t.AndroidMobilePlatform;
                var c = t.IE && t.MajorVersion > 9 && t.WindowsPlatform && t.UserAgent.toLowerCase().indexOf("touch") >= 0;
                if (t.MSTouchUI = c || t.Edge && !!window.navigator.maxTouchPoints, t.TouchUI = t.WebKitTouchUI || t.MSTouchUI, t.MobileUI = t.WebKitTouchUI || t.WindowsPhonePlatform, t.AndroidDefaultBrowser = t.AndroidMobilePlatform && !t.Chrome, t.AndroidChromeBrowser = t.AndroidMobilePlatform && t.Chrome, r && (t.SamsungAndroidDevice = r), t.MSTouchUI) {
                    var u = t.UserAgent.toLowerCase().indexOf("arm;") > -1;
                    t.VirtualKeyboardSupported = u || t.WindowsPhonePlatform
                } else t.VirtualKeyboardSupported = t.WebKitTouchUI;
                t.fillDocumentElementBrowserTypeClassNames(e)
            }, t.indentPlatformMajorVersion = function(e) {
                var n = /(?:(?:windows nt|macintosh|mac os|cpu os|cpu iphone os|android|windows phone|linux) )(\d+)(?:[-0-9_.])*/.exec(e);
                n && (t.PlaformMajorVersion = n[1])
            }, t.prototype.GetBrowserVersion = function(e, n, o, i) { var r = t.getVersionFromMatches(n); if (i) { var s = t.getVersionFromTrident(e, o); if ("edge" === i || parseInt(i) === s) return s } return r }, t.getVersionFromMatches = function(t) {
                var e = -1,
                    n = "";
                return t[1] && (n += t[1], t[2] && (n += "." + t[2])), "" != n && (e = parseFloat(n), isNaN(e) && (e = -1)), e
            }, t.getVersionFromTrident = function(e, n) { var o = new RegExp(n, "i").exec(e); return t.getVersionFromMatches(o) + 4 }, t.fillDocumentElementBrowserTypeClassNames = function(e) {
                for (var n = "", o = e.concat(["WindowsPlatform", "MacOSPlatform", "MacOSMobilePlatform", "AndroidMobilePlatform", "WindowsPhonePlatform", "WebKitFamily", "WebKitTouchUI", "MSTouchUI", "TouchUI", "AndroidDefaultBrowser"]), i = 0; i < o.length; i++) {
                    var r = o[i];
                    t[r] && (n += "dx" + r + " ")
                }
                n += "dxBrowserVersion-" + t.MajorVersion, document && document.documentElement && ("" != document.documentElement.className && (n = " " + n), document.documentElement.className += n, t.Info = n)
            }, t.UserAgent = window.navigator.userAgent.toLowerCase(), t._foo = t.IdentUserAgent(t.UserAgent), t
        }();
        e.Browser = o
    }, function(t, e, n) {
        "use strict";
        var o, i;
        Object.defineProperty(e, "__esModule", { value: !0 }),
            function(t) { t[t.Straight = 0] = "Straight", t[t.Orthogonal = 1] = "Orthogonal" }(o = e.ConnectorLineOption || (e.ConnectorLineOption = {})),
            function(t) { t[t.None = 0] = "None", t[t.Arrow = 1] = "Arrow" }(i = e.ConnectorLineEnding || (e.ConnectorLineEnding = {})), e.DEFAULT_CONNECTOR_LINEOPTION = o.Orthogonal, e.DEFAULT_CONNECTOR_STARTLINEENDING = i.None, e.DEFAULT_CONNECTOR_ENDLINEENDING = i.Arrow;
        var r = function() {
            function t() { this.lineOption = e.DEFAULT_CONNECTOR_LINEOPTION, this.startLineEnding = e.DEFAULT_CONNECTOR_STARTLINEENDING, this.endLineEnding = e.DEFAULT_CONNECTOR_ENDLINEENDING }
            return t.prototype.clone = function() { var e = new t; return e.lineOption = this.lineOption, e.startLineEnding = this.startLineEnding, e.endLineEnding = this.endLineEnding, e }, t.prototype.forEach = function(t) { for (var e in this) this.hasOwnProperty(e) && t(e) }, t.prototype.toObject = function() {
                var t = {},
                    n = !1;
                return this.lineOption !== e.DEFAULT_CONNECTOR_LINEOPTION && (t.lineOption = this.lineOption, n = !0), this.startLineEnding !== e.DEFAULT_CONNECTOR_STARTLINEENDING && (t.startLineEnding = this.startLineEnding, n = !0), this.endLineEnding !== e.DEFAULT_CONNECTOR_ENDLINEENDING && (t.endLineEnding = this.endLineEnding, n = !0), n ? t : null
            }, t.prototype.fromObject = function(t) { "number" == typeof t.lineOption && (this.lineOption = t.lineOption), "number" == typeof t.startLineEnding && (this.startLineEnding = t.startLineEnding), "number" == typeof t.endLineEnding && (this.endLineEnding = t.endLineEnding) }, t
        }();
        e.ConnectorProperties = r
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = n(156),
            i = n(157),
            r = n(158),
            s = n(159),
            a = n(160),
            c = n(161),
            u = n(162),
            p = n(163),
            h = n(164),
            l = n(165),
            d = n(92),
            f = n(67),
            y = n(166),
            m = n(14),
            g = n(93),
            v = n(94),
            P = n(95),
            C = n(167),
            S = n(168),
            _ = n(169),
            w = n(170),
            b = n(171),
            x = n(96),
            I = n(97),
            O = n(172),
            E = n(173),
            M = n(174),
            T = n(175),
            A = n(176),
            D = n(177),
            L = n(178),
            z = n(179),
            N = n(180),
            j = n(181),
            R = n(182),
            k = n(183),
            U = n(184),
            B = n(185),
            H = n(186),
            K = n(187),
            V = n(188),
            F = n(190),
            W = n(191),
            G = n(1),
            Z = function() {
                function t() {}
                return t.get = function(t) { return this.descriptions[t] }, t.rectangle = function() { return this.descriptions[G.ShapeTypes.Rectangle] }, t.getTypesByCategory = function(t) { return this.descriptionTypes[t] }, t.getCategoryByType = function(t) { return this.descriptionCategories[t] }, t.getCategoryByDescription = function(e) { return t.getCategoryByType(e.key) }, t.register = function(t, e, n) {
                    if (void 0 === n && (n = t.key), void 0 !== this.descriptions[n]) throw Error("Description key is duplicated");
                    this.descriptions[n] = t, this.descriptionTypes[e] || (this.descriptionTypes[e] = []), this.descriptionTypes[e].push(n), this.descriptionCategories[n] = e
                }, t.registerCustomShape = function(t) {
                    if (void 0 === t.type) throw Error("Custom shape type is not defined");
                    if (void 0 !== this.descriptions[t.type]) throw Error("Custom shape type is duplicated");
                    var e = t.baseType && this.descriptions[t.baseType];
                    this.register(new B.CustomShapeDescription(t, e), t.category || G.ShapeCategories.Custom)
                }, t.unregisterCustomShape = function(t) {
                    if (this.descriptions[t] instanceof B.CustomShapeDescription) {
                        var e = this.descriptionCategories[t];
                        delete this.descriptions[t], delete this.descriptionCategories[t];
                        var n = this.descriptionTypes[e].indexOf(t);
                        this.descriptionTypes[e].splice(n, 1), 0 === this.descriptionTypes[e].length && delete this.descriptionTypes[e]
                    }
                }, t.descriptions = {}, t.descriptionTypes = {}, t.descriptionCategories = {}, t
            }();
        e.ShapeDescriptionManager = Z, Z.register(new g.TextShapeDescription, G.ShapeCategories.General), Z.register(new m.RectangleShapeDescription, G.ShapeCategories.General), Z.register(new f.EllipseShapeDescription, G.ShapeCategories.General), Z.register(new l.CrossShapeDescription, G.ShapeCategories.General), Z.register(new x.TriangleShapeDescription, G.ShapeCategories.General), Z.register(new d.DiamondShapeDescription, G.ShapeCategories.General), Z.register(new y.HeartShapeDescription, G.ShapeCategories.General), Z.register(new v.PentagonShapeDescription, G.ShapeCategories.General), Z.register(new P.HexagonShapeDescription, G.ShapeCategories.General), Z.register(new C.OctagonShapeDescription, G.ShapeCategories.General), Z.register(new S.StarShapeDescription, G.ShapeCategories.General), Z.register(new h.ArrowTopShapeDescription, G.ShapeCategories.General), Z.register(new _.ArrowBottomShapeDescription, G.ShapeCategories.General), Z.register(new b.ArrowLeftShapeDescription, G.ShapeCategories.General), Z.register(new p.ArrowRightShapeDescription, G.ShapeCategories.General), Z.register(new u.ArrowNorthSouthShapeDescription, G.ShapeCategories.General), Z.register(new w.ArrowEastWestShapeDescription, G.ShapeCategories.General), Z.register(new o.ProcessShapeDescription, G.ShapeCategories.Flowchart), Z.register(new i.DecisionShapeDescription, G.ShapeCategories.Flowchart), Z.register(new a.TerminatorShapeDescription, G.ShapeCategories.Flowchart), Z.register(new c.PredefinedProcessShapeDescription, G.ShapeCategories.Flowchart), Z.register(new I.DocumentShapeDescription, G.ShapeCategories.Flowchart), Z.register(new O.MultipleDocumentsShapeDescription, G.ShapeCategories.Flowchart), Z.register(new r.ManualInputShapeDescription, G.ShapeCategories.Flowchart), Z.register(new E.PreparationShapeDescription, G.ShapeCategories.Flowchart), Z.register(new s.DataShapeDescription, G.ShapeCategories.Flowchart), Z.register(new T.DatabaseShapeDescription, G.ShapeCategories.Flowchart), Z.register(new M.HardDiskShapeDescription, G.ShapeCategories.Flowchart), Z.register(new A.InternalStorageShapeDescription, G.ShapeCategories.Flowchart), Z.register(new D.PaperTapeShapeDescription, G.ShapeCategories.Flowchart), Z.register(new L.ManualOperationShapeDescription, G.ShapeCategories.Flowchart), Z.register(new z.DelayShapeDescription, G.ShapeCategories.Flowchart), Z.register(new N.StoredDataShapeDescription, G.ShapeCategories.Flowchart), Z.register(new R.DisplayShapeDescription, G.ShapeCategories.Flowchart), Z.register(new j.MergeShapeDescription, G.ShapeCategories.Flowchart), Z.register(new k.OrShapeDescription, G.ShapeCategories.Flowchart), Z.register(new U.SummingJunctionShapeDescription, G.ShapeCategories.Flowchart), Z.register(new V.CardWithImageOnLeftDescription, G.ShapeCategories.OrgChart), Z.register(new F.CardWithImageOnRightDescription, G.ShapeCategories.OrgChart), Z.register(new W.CardWithImageOnTopDescription, G.ShapeCategories.OrgChart), Z.register(new H.VerticalContainerDescription, G.ShapeCategories.Containers), Z.register(new K.HorizontalContainerDescription, G.ShapeCategories.Containers)
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(32),
            s = n(10),
            a = n(13),
            c = function(t) {
                function e(e, n) { var o = t.call(this, e) || this; return o.history = n, o }
                return i(e, t), e.prototype.onMouseDown = function(t) { this.mouseDownPoint = t.modelPoint.clone() }, e.prototype.onMouseMove = function(t) { t.button !== s.MouseButton.Left ? (this.cancelChanges(), this.handler.switchToDefaultState()) : (!this.mouseDownPoint || Math.abs(this.mouseDownPoint.x - t.modelPoint.x) > e.dragStartLimit || Math.abs(this.mouseDownPoint.y - t.modelPoint.y) > e.dragStartLimit) && (this.onApplyChanges(t), this.modified || this.handler.raiseDragStart(this.getDraggingElementKeys()), this.modified = !0, this.mouseDownPoint = void 0) }, e.prototype.cancelChanges = function() { this.history.undoTransaction(), this.modified && this.handler.raiseDragEnd(this.getDraggingElementKeys()), this.modified = !1 }, e.prototype.onMouseUp = function(t) { this.mouseDownPoint = void 0, this.handler.switchToDefaultState() }, e.prototype.start = function() { this.history.beginTransaction() }, e.prototype.finish = function() { this.modified ? (this.onFinishWithChanges(), this.modified = !1, this.history.endTransaction(), this.handler.raiseDragEnd(this.getDraggingElementKeys())) : this.history.endTransaction() }, e.prototype.onFinishWithChanges = function() {}, e.prototype.getSnappedPoint = function(t, e) { return this.handler.getSnappedPoint(t, e) }, e.dragStartLimit = a.UnitConverter.pixelsToTwips(4), e
            }(r.MouseHandlerCancellableState);
        e.MouseHandlerDraggingState = c
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(38),
            s = n(79),
            a = function() {
                function t() {}
                return t.prototype.clone = function() {
                    var t = this,
                        e = this.createInstance();
                    return this.forEach(function(n) { e[n] = t[n] }), e
                }, t.prototype.forEach = function(t) { for (var e in this) this.hasOwnProperty(e) && t(e) }, t.prototype.toObject = function() {
                    var t = this,
                        e = {},
                        n = !1,
                        o = this.getDefaultInstance();
                    return this.forEach(function(i) { t[i] !== o[i] && (e[i] = t[i], n = !0) }), n ? e : null
                }, t.prototype.fromObject = function(t) {
                    for (var e in t)
                        if (t.hasOwnProperty(e) && void 0 !== this[e]) {
                            var n = s.isColorProperty(e) ? r.ColorHelper.stringToHash(t[e]) : t[e];
                            this[e] = n
                        }
                }, t
            }();
        e.StyleBase = a;
        var c = function(t) {
            function e(e) { var n = t.call(this) || this; return e && Object.keys(e).forEach(function(t) { return n[t] = e[t] }), n }
            return i(e, t), e.prototype.createInstance = function() { return new e }, e.prototype.getDefaultInstance = function() { return u.defaultInstace }, e
        }(a);
        e.EmptyStyle = c;
        var u = function(t) {
            function e() { var e = t.call(this) || this; return e.fill = "#ffffff", e.stroke = "#000000", e }
            return i(e, t), e.prototype.createInstance = function() { return new e }, e.prototype.getDefaultInstance = function() { return e.defaultInstace }, e.defaultInstace = new e, e
        }(a);
        e.Style = u;
        var p = function(t) {
            function e() { var e = t.call(this) || this; return e.fill = "#000000", e["font-family"] = "Arial", e["font-size"] = "10pt", e["font-weight"] = "", e["font-style"] = "", e["text-decoration"] = "", e["text-anchor"] = "middle", e }
            return i(e, t), e.prototype.createInstance = function() { return new e }, e.prototype.getDefaultInstance = function() { return e.defaultInstace }, e.defaultInstace = new e, e
        }(a);
        e.StyleText = p
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(12),
            s = function(t) {
                function e(e, n, o, i, r, s) { var a = t.call(this, null, n, i, r) || this; return a.zIndex = o, a.onBeforeDispose = s, a.children = e, a }
                return i(e, t), e.prototype.createMainElement = function() { return document.createElementNS(r.svgNS, "g") }, e.prototype.applyElementProperties = function(e) {
                    (this.zIndex || 0 === this.zIndex) && e.style.setProperty("z-index", this.zIndex.toString()), t.prototype.applyElementProperties.call(this, e)
                }, e.prototype.dispose = function() { this.onBeforeDispose && this.onBeforeDispose(), t.prototype.dispose.call(this) }, e
            }(n(18).SvgPrimitive);
        e.GroupPrimitive = s
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = function() { return function(t, e) { this.key = t, this.value = e } }();
        e.ShapeParameter = o;
        var i = function() {
            function t() { this.items = {} }
            return t.prototype.add = function(t) { this.items[t.key] = t }, t.prototype.addRange = function(t) { for (var e = 0; e < t.length; e++) this.add(t[e]) }, t.prototype.get = function(t) { return this.items[t] }, t.prototype.forEach = function(t) { for (var e in this.items) this.items.hasOwnProperty(e) && t(this.items[e]) }, t.prototype.clone = function() { var e = new t; return this.forEach(function(t) { e.add(new o(t.key, t.value)) }), e }, t.prototype.toObject = function() {
                var t = {},
                    e = !1;
                return this.forEach(function(n) { t[n.key] = { value: n.value }, e = !0 }), e ? t : null
            }, t.prototype.fromObject = function(t) {
                this.forEach(function(e) {
                    var n = t[e.key];
                    n && "number" == typeof n.value && (e.value = n.value)
                })
            }, t
        }();
        e.ShapeParameters = i
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = function(t) {
            function e(e, n, o, i) { void 0 === o && (o = -1), void 0 === i && (i = !1); var r = t.call(this, e, n) || this; return r.pointIndex = o, r.skipped = i, r }
            return i(e, t), e.prototype.offset = function(t, n) { return void 0 === t && (t = 0), void 0 === n && (n = 0), new e(this.x + t, this.y + n) }, e.prototype.multiply = function(t, n) { return void 0 === t && (t = 1), void 0 === n && (n = t), new e(this.x * t, this.y * n) }, e.prototype.clone = function() { return new e(this.x, this.y, this.pointIndex) }, e
        }(n(0).Point);
        e.ConnectorRenderPoint = r
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = function() {
            function t(t, e, n, o) { void 0 === o && (o = 1), this.weight = o, this.key = t, this.from = e, this.to = n }
            return t.prototype.getHashKey = function() { return this.from + "_" + this.to }, t.prototype.reverse = function() { return new t(this.key, this.to, this.from, this.weight) }, t
        }();
        e.Edge = o;
        var i = function() { return function(t, e) { this.item = t, this.position = e } }();
        e.PositionInfo = i,
            function(t) { t[t.Outgoing = 1] = "Outgoing", t[t.Incoming = 2] = "Incoming", t[t.OutgoingAndIncoming = 3] = "OutgoingAndIncoming" }(e.ConnectionMode || (e.ConnectionMode = {}))
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(16),
            s = function() {
                function t(t) { this.handler = t }
                return t.prototype.start = function() {}, t.prototype.finish = function() {}, t.prototype.onMouseClick = function(t) {}, t.prototype.onMouseDblClick = function(t) { this.handler.switchToDefaultState() }, t.prototype.onMouseDown = function(t) {}, t.prototype.onMouseUp = function(t) {}, t.prototype.onMouseMove = function(t) {}, t.prototype.onMouseWheel = function(t) { return !1 }, t.prototype.onDragStart = function(t) {}, t.prototype.onDragEnd = function(t) {}, t.prototype.onShortcut = function(t) { return !1 }, t
            }();
        e.MouseHandlerStateBase = s;
        var a = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this }
            return i(e, t), e.prototype.onShortcut = function(t) { return t === r.KeyCode.Esc && (this.cancelChanges(), this.handler.switchToDefaultState(), !0) }, e
        }(s);
        e.MouseHandlerCancellableState = a
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = n(84),
            i = n(13);
        e.PAGE_BG_TEXTFLOOR_FILTER_ID = "page-text-flood";
        var r = function() {
            function t(t) { this.elements = {}, this.actualZoom = t }
            return t.prototype.createAndChangePrimitivesElements = function(t, e) {
                var n = this;
                t.forEach(function(t) { n.createAndChangePrimitiveElement(t, e) })
            }, t.prototype.changePrimitivesElements = function(t, e) {
                var n = this;
                t.forEach(function(t, o) {
                    var i = e.childNodes[o];
                    n.changePrimitiveElement(t, i)
                })
            }, t.prototype.createPrimitiveElement = function(t, e, n) { var o = t.createElement(); return null != e && (void 0 !== n ? e.insertBefore(o, n) : e.appendChild(o)), o }, t.prototype.createAndChangePrimitiveElement = function(t, e, n) { var o = this.createPrimitiveElement(t, e, n); return this.changePrimitiveElement(t, o), o }, t.prototype.changePrimitiveElement = function(t, e) { t.applyElementProperties(e) }, t.prototype.getOrCreateElement = function(t, e, n, o) { var i = t && this.elements[t] || (this.elements[t] = this.createPrimitiveElement(e, n, o)); return this.changePrimitiveElement(e, i), i }, t.prototype.createTextFloodFilter = function(t, n, i) { this.getOrCreateElement(t, new o.TextFloodFilterPrimitive(e.PAGE_BG_TEXTFLOOR_FILTER_ID, i), n) }, t.prototype.getAbsoluteSize = function(t) { return t.transform(i.UnitConverter.twipsToPixelsF).multiply(this.actualZoom) }, t
        }();
        e.CanvasManagerBase = r
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(0),
            s = n(4),
            a = function(t) {
                function e(e, n, o) { void 0 === o && (o = s.ConnectionPointSide.Undefined); var i = t.call(this, e, n) || this; return i.side = o, i }
                return i(e, t), e.prototype.offset = function(t, n) { return void 0 === t && (t = 0), void 0 === n && (n = 0), new e(this.x + t, this.y + n) }, e.prototype.multiply = function(t, n) { return void 0 === t && (t = 1), void 0 === n && (n = t), new e(this.x * t, this.y * n) }, e.prototype.clone = function() { return new e(this.x, this.y, this.side) }, e.prototype.toPoint = function() { return new r.Point(this.x, this.y) }, e
            }(r.Point);
        e.ConnectionPoint = a
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o, i = n(8),
            r = n(19),
            s = n(0),
            a = function() {
                function t() { this.onZoomChanged = new i.EventDispatcher, this.onViewChanged = new i.EventDispatcher, this.onReadOnlyChanged = new i.EventDispatcher, this._zoomLevel = 1, this._zoomLevelItems = [.5, .75, 1, 1.25, 1.5, 2, 3], this._simpleView = !1, this._fullscreen = !1, this._readOnly = !1, this._autoZoom = o.Disabled, this._snapToGrid = !0, this._showGrid = !0, this._gridSize = 180, this._gridSizeItems = [90, 180, 360, 720], this._pageSizeItems = [{ size: new s.Size(12240, 15840), text: "US-Letter ({width} x {height})" }, { size: new s.Size(12240, 20160), text: "US-Legal ({width} x {height})" }, { size: new s.Size(15817, 24491), text: "US-Tabloid ({width} x {height})" }, { size: new s.Size(47679, 67408), text: "A0 ({width} x {height})" }, { size: new s.Size(33676, 47679), text: "A1 ({width} x {height})" }, { size: new s.Size(23811, 33676), text: "A2 ({width} x {height})" }, { size: new s.Size(16838, 23811), text: "A3 ({width} x {height})" }, { size: new s.Size(11906, 16838), text: "A4 ({width} x {height})" }, { size: new s.Size(8391, 11906), text: "A5 ({width} x {height})" }, { size: new s.Size(5953, 8391), text: "A6 ({width} x {height})" }, { size: new s.Size(4195, 5953), text: "A7 ({width} x {height})" }], this._viewUnits = r.DiagramUnit.In, this.unitItems = {}, this.formatUnit = function(t) { return t.toString() }, this.unitItems[r.DiagramUnit.In] = "in", this.unitItems[r.DiagramUnit.Cm] = "cm", this.unitItems[r.DiagramUnit.Px] = "px" }
                return Object.defineProperty(t.prototype, "zoomLevel", {
                    get: function() { return this._zoomLevel },
                    set: function(e) {
                        var n = this;
                        (e = t.correctZoomLevel(e)) !== this._zoomLevel && (this._zoomLevel = e, this.onZoomChanged.raise1(function(t) { return t.notifyZoomChanged(e, n._autoZoom) }))
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "zoomLevelItems", {
                    get: function() { return this._zoomLevelItems },
                    set: function(e) {
                        (e = e.map(function(e) { return t.correctZoomLevel(e) })) !== this._zoomLevelItems && (this._zoomLevelItems = e)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "autoZoom", {
                    get: function() { return this._autoZoom },
                    set: function(t) {
                        var e = this;
                        t !== this._autoZoom && (this._autoZoom = t, this.onZoomChanged.raise1(function(n) { return n.notifyZoomChanged(e._zoomLevel, t) }))
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "simpleView", { get: function() { return this._simpleView }, set: function(t) { t !== this._simpleView && (this._simpleView = t, this.onViewChanged.raise1(function(e) { return e.notifyViewChanged(t) })) }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "readOnly", { get: function() { return this._readOnly }, set: function(t) { t !== this._readOnly && (this._readOnly = t, this.onReadOnlyChanged.raise1(function(e) { return e.notifyReadOnlyChanged(t) })) }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "fullscreen", { get: function() { return this._fullscreen }, set: function(t) { this._fullscreen = t }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "snapToGrid", { get: function() { return this._snapToGrid }, set: function(t) { this._snapToGrid = t }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "showGrid", {
                    get: function() { return this._showGrid },
                    set: function(t) {
                        var e = this;
                        t !== this._showGrid && (this._showGrid = t, this.onViewChanged.raise1(function(t) { return t.notifyGridChanged(e.showGrid, e.gridSize) }))
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "gridSize", {
                    get: function() { return this._gridSize },
                    set: function(t) {
                        var e = this;
                        t !== this._gridSize && (this._gridSize = t, this.onViewChanged.raise1(function(t) { return t.notifyGridChanged(e.showGrid, e.gridSize) }))
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "gridSizeItems", { get: function() { return this._gridSizeItems }, set: function(t) { t !== this._gridSizeItems && (this._gridSizeItems = t) }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "pageSizeItems", { get: function() { return this._pageSizeItems }, set: function(t) { t !== this._pageSizeItems && (this._pageSizeItems = t) }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "viewUnits", { get: function() { return this._viewUnits }, set: function(t) { this._viewUnits = t }, enumerable: !0, configurable: !0 }), t.correctZoomLevel = function(t) { return Math.min(10, Math.max(t, .01)) }, t
            }();
        e.DiagramSettings = a,
            function(t) { t[t.Disabled = 0] = "Disabled", t[t.FitContent = 1] = "FitContent", t[t.FitToWidth = 2] = "FitToWidth" }(o = e.AutoZoomMode || (e.AutoZoomMode = {}))
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = function(t) {
            function e(e, n, o) { return t.call(this, e, n, o) || this }
            return i(e, t), e.prototype.redo = function(t) {
                var e = t.model.findItem(this.itemKey);
                this.oldStyleValue = e.styleText[this.styleProperty], t.changeStyleText(e, this.styleProperty, this.styleValue)
            }, e.prototype.undo = function(t) {
                var e = t.model.findItem(this.itemKey);
                t.changeStyleText(e, this.styleProperty, this.oldStyleValue)
            }, e
        }(n(103).ChangeStyleHistoryItemBase);
        e.ChangeStyleTextHistoryItem = r
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(3),
            s = n(5),
            a = function(t) {
                function e(e, n, o, i) { var r = t.call(this) || this; return r.connectorKey = e.key, r.itemKey = n.key, r.connectionPointIndex = o, r.position = i, r }
                return i(e, t), e.prototype.redo = function(t) {
                    var e = t.model.findConnector(this.connectorKey),
                        n = t.model.findItem(this.itemKey);
                    t.addConnection(e, n, this.connectionPointIndex, this.position)
                }, e.prototype.undo = function(t) {
                    var e = t.model.findConnector(this.connectorKey);
                    t.deleteConnection(e, this.position)
                }, e
            }(r.HistoryItem);
        e.AddConnectionHistoryItem = a;
        var c = function(t) {
            function e(e, n, o) { var i = t.call(this) || this; return i.connectorKey = e.key, i.connectionPointIndex = n, i.position = o, i }
            return i(e, t), e.prototype.redo = function(t) {
                var e = t.model.findConnector(this.connectorKey);
                this.oldConnectionPointIndex = this.position === s.ConnectorPosition.Begin ? e.beginConnectionPointIndex : e.endConnectionPointIndex, t.setConnectionPointIndex(e, this.connectionPointIndex, this.position)
            }, e.prototype.undo = function(t) {
                var e = t.model.findConnector(this.connectorKey);
                t.setConnectionPointIndex(e, this.oldConnectionPointIndex, this.position)
            }, e
        }(r.HistoryItem);
        e.SetConnectionPointIndexHistoryItem = c
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = n(132),
            i = function() {
                function t() {}
                return t.constructFromArgbNumber = function(t, e, n, o) { return t << 24 | e << 16 | n << 8 | o }, t.getPredefinedColor = function(e) { return t.hashToColor(e, 0) }, t.isGray = function(e) { var n = t.getRed(e); return n == t.getGreen(e) && n == t.getBlue(e) }, t.getAlpha = function(t) { return t >> 24 & 255 }, t.getRed = function(t) { return t >> 16 & 255 }, t.getGreen = function(t) { return t >> 8 & 255 }, t.getBlue = function(t) { return 255 & t }, t.redPartToString = function(e) { var n = t.getRed(e).toString(16); return n.length > 1 ? n : "0" + n }, t.greenPartToString = function(e) { var n = t.getGreen(e).toString(16); return n.length > 1 ? n : "0" + n }, t.bluePartToString = function(e) { var n = t.getBlue(e).toString(16); return n.length > 1 ? n : "0" + n }, t.colorToHash = function(e) { return "#" + t.redPartToString(e) + t.greenPartToString(e) + t.bluePartToString(e) }, t.hashToColor = function(t, e) { return void 0 === e && (e = 255), 3 === (t = "#" == t.charAt(0) ? t.substr(1) : t).length && (t = o.StringUtils.repeat(t.charAt(0), 2) + o.StringUtils.repeat(t.charAt(1), 2) + o.StringUtils.repeat(t.charAt(2), 2)), parseInt(t, 16) | e << 24 }, t.getActualForeColor = function(e, n) { e == t.AUTOMATIC_COLOR && (e = n == t.AUTOMATIC_COLOR || n == t.NO_COLOR || t.calculateLumaY(n) >= t.DEFAULT_BOUNDARY_LUMA ? t.DARK_COLOR : t.LIGHT_COLOR); return t.getCssString(e, !0) }, t.getCssString = function(e, n) { return e == t.AUTOMATIC_COLOR ? t.colorToHash(n ? t.DARK_COLOR : t.LIGHT_COLOR) : t.getCssStringInternal(e) }, t.stringToHash = function(t) { return this.colorToHash(this.stringToColor(t)) }, t.stringToColor = function(e) {
                    var n = this.getRGBAByString(e),
                        o = "";
                    return n ? (255 & n[0]) << 16 | (255 & n[1]) << 8 | 255 & n[2] | (255 & (n.length > 3 ? n[3] : 255)) << 24 : (/^#([0-9a-f]{6})$/i.test(e) || /^#([0-9a-f]{3})$/i.test(e) ? o = e : /^[a-z]+$/i.test(e) && (o = t.colorNames[e.toLowerCase()]), o ? t.hashToColor(o) : null)
                }, t.getRGBAByString = function(t) {
                    var e = t.replace(/ +/g, "").match(/(rgba?)|(\d+(\.\d+)?%?)|(\.\d+)/g);
                    if (e && e.length > 3) {
                        for (var n, o = 0, i = []; o < e.length - 1;) {
                            if ((n = -1 != (n = e[++o]).indexOf("%") ? Math.round(2.55 * parseFloat(n)) : parseInt(n)) < 0 || n > 255) return null;
                            i.push(n)
                        }
                        if (0 === t.indexOf("rgba")) {
                            if (isNaN(i[3]) || i[3] < 0 || i[3] > 1) return null;
                            i[3] <= 1 && (i[3] = Math.round(255 * i[3]))
                        } else if (i[3]) return null;
                        return i
                    }
                    return null
                }, t.IsDarkColor = function(e) { return t.calculateLumaY(e) < t.DEFAULT_BOUNDARY_LUMA }, t.getCssStringInternal = function(e) {
                    var n = t.getAlpha(e);
                    switch (n) {
                        case 0:
                            return "transparent";
                        case 255:
                            return t.colorToHash(e);
                        default:
                            return "rgba(" + t.getRed(e) + "," + t.getGreen(e) + "," + t.getBlue(e) + "," + n / 255 + ")"
                    }
                }, t.isEmptyBgColor = function(t) { return t === this.AUTOMATIC_COLOR || t === this.NO_COLOR }, t.calculateLumaY = function(e) { return t.DEFAULT_BOUNDARY_LUMA_RED * t.getRed(e) + t.DEFAULT_BOUNDARY_LUMA_GREEN * t.getGreen(e) + t.DEFAULT_BOUNDARY_LUMA_BLUE * t.getBlue(e) }, t.colorNames = { aliceblue: "#f0f8ff", antiquewhite: "#faebd7", aqua: "#00ffff", aquamarine: "#7fffd4", azure: "#f0ffff", beige: "#f5f5dc", bisque: "#ffe4c4", black: "#000000", blanchedalmond: "#ffebcd", blue: "#0000ff", blueviolet: "#8a2be2", brown: "#a52a2a", burlywood: "#deb887", cadetblue: "#5f9ea0", chartreuse: "#7fff00", chocolate: "#d2691e", coral: "#ff7f50", cornflowerblue: "#6495ed", cornsilk: "#fff8dc", crimson: "#dc143c", cyan: "#00ffff", darkblue: "#00008b", darkcyan: "#008b8b", darkgoldenrod: "#b8860b", darkgray: "#a9a9a9", darkgreen: "#006400", darkkhaki: "#bdb76b", darkmagenta: "#8b008b", darkolivegreen: "#556b2f", darkorange: "#ff8c00", darkorchid: "#9932cc", darkred: "#8b0000", darksalmon: "#e9967a", darkseagreen: "#8fbc8f", darkslateblue: "#483d8b", darkslategray: "#2f4f4f", darkturquoise: "#00ced1", darkviolet: "#9400d3", deeppink: "#ff1493", deepskyblue: "#00bfff", dimgray: "#696969", dodgerblue: "#1e90ff", feldspar: "#d19275", firebrick: "#b22222", floralwhite: "#fffaf0", forestgreen: "#228b22", fuchsia: "#ff00ff", gainsboro: "#dcdcdc", ghostwhite: "#f8f8ff", gold: "#ffd700", goldenrod: "#daa520", gray: "#808080", green: "#00ff00", greenyellow: "#adff2f", honeydew: "#f0fff0", hotpink: "#ff69b4", indianred: "#cd5c5c", indigo: "#4b0082", ivory: "#fffff0", khaki: "#f0e68c", lavender: "#e6e6fa", lavenderblush: "#fff0f5", lawngreen: "#7cfc00", lemonchiffon: "#fffacd", lightblue: "#add8e6", lightcoral: "#f08080", lightcyan: "#e0ffff", lightgoldenrodyellow: "#fafad2", lightgray: "#d3d3d3", lightgreen: "#90ee90", lightpink: "#ffb6c1", lightsalmon: "#ffa07a", lightseagreen: "#20b2aa", lightskyblue: "#87cefa", lightslateblue: "#8470ff", lightslategray: "#778899", lightsteelblue: "#b0c4de", lightyellow: "#ffffe0", lime: "#00ff00", limegreen: "#32cd32", linen: "#faf0e6", magenta: "#ff00ff", maroon: "#800000", mediumaquamarine: "#66cdaa", mediumblue: "#0000cd", mediumorchid: "#ba55d3", mediumpurple: "#9370d8", mediumseagreen: "#3cb371", mediumslateblue: "#7b68ee", mediumspringgreen: "#00fa9a", mediumturquoise: "#48d1cc", mediumvioletred: "#c71585", midnightblue: "#191970", mintcream: "#f5fffa", mistyrose: "#ffe4e1", moccasin: "#ffe4b5", navajowhite: "#ffdead", navy: "#000080", oldlace: "#fdf5e6", olive: "#808000", olivedrab: "#6b8e23", orange: "#ffa500", orangered: "#ff4500", orchid: "#da70d6", palegoldenrod: "#eee8aa", palegreen: "#98fb98", paleturquoise: "#afeeee", palevioletred: "#d87093", papayawhip: "#ffefd5", peachpuff: "#ffdab9", peru: "#cd853f", pink: "#ffc0cb", plum: "#dda0dd", powderblue: "#b0e0e6", purple: "#800080", red: "#ff0000", rosybrown: "#bc8f8f", royalblue: "#4169e1", saddlebrown: "#8b4513", salmon: "#fa8072", sandybrown: "#f4a460", seagreen: "#2e8b57", seashell: "#fff5ee", sienna: "#a0522d", silver: "#c0c0c0", skyblue: "#87ceeb", slateblue: "#6a5acd", slategray: "#708090", snow: "#fffafa", springgreen: "#00ff7f", steelblue: "#4682b4", tan: "#d2b48c", teal: "#008080", thistle: "#d8bfd8", tomato: "#ff6347", turquoise: "#40e0d0", violet: "#ee82ee", violetred: "#d02090", wheat: "#f5deb3", white: "#ffffff", whitesmoke: "#f5f5f5", yellow: "#ffff00", yellowgreen: "#9acd32", windowtext: "#000000" }, t.DEFAULT_BOUNDARY_LUMA = 3982098.432, t.DEFAULT_BOUNDARY_LUMA_RED = 19595.264, t.DEFAULT_BOUNDARY_LUMA_BLUE = 7471.104, t.DEFAULT_BOUNDARY_LUMA_GREEN = 38469.632, t.DARK_COLOR = -16777216, t.LIGHT_COLOR = -1, t.BLACK_COLOR = -16777216, t.AUTOMATIC_COLOR = 0, t.NO_COLOR = 16777215, t
            }();
        e.ColorHelper = i
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = n(23),
            i = n(62),
            r = n(17),
            s = function() {
                function t() {}
                return t.GetEvent = function(t) { return "undefined" != typeof event && null != event && o.Browser.IE ? event : t }, t.AttachEventToElement = function(t, e, n, o) { void 0 === o && (o = !1), t.addEventListener ? t.addEventListener(e, n, !o) : t.attachEvent("on" + e, n) }, t.AttachEventToDocument = function(e, n) { i.TouchUIHelper.onEventAttachingToDocument(e, n) && t.AttachEventToElement(document, e, n) }, t.PreventEvent = function(t) { return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1 }, t.GetKeyCode = function(t) { return o.Browser.NetscapeFamily || o.Browser.Opera ? t.which : t.keyCode }, t.GetEventSource = function(e, n) { return r.IsExists(e) ? n && document.elementFromPoint && void 0 !== t.GetEventX(e) && void 0 !== t.GetEventY(e) ? document.elementFromPoint(t.GetEventX(e), t.GetEventY(e)) : e.srcElement ? e.srcElement : e.target : null }, t.GetMouseWheelEventName = function() { return o.Browser.Safari ? "mousewheel" : o.Browser.NetscapeFamily && o.Browser.MajorVersion < 17 ? "DOMMouseScroll" : "wheel" }, t.IsLeftButtonPressed = function(e) { return !!i.TouchUIHelper.isTouchEvent(e) || !!(e = t.GetEvent(e)) && (o.Browser.IE && o.Browser.Version < 11 ? !!o.Browser.MSTouchUI || e.button % 2 == 1 : o.Browser.WebKitFamily ? "pointermove" === e.type ? 1 === e.buttons : 1 == e.which : o.Browser.NetscapeFamily || o.Browser.Edge || o.Browser.IE && o.Browser.Version >= 11 ? e.type === i.TouchUIHelper.touchMouseMoveEventName ? 1 === e.buttons : 1 == e.which : !o.Browser.Opera || 0 == e.button) }, t.PreventEventAndBubble = function(e) { return t.PreventEvent(e), e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0, !1 }, t.clientEventRequiresDocScrollCorrection = function() {
                    var t = o.Browser.Safari && o.Browser.Version < 3,
                        e = o.Browser.MacOSMobilePlatform && o.Browser.Version < 5.1;
                    return o.Browser.AndroidDefaultBrowser || o.Browser.AndroidChromeBrowser || !(t || e)
                }, t.GetEventX = function(e) { return i.TouchUIHelper.isTouchEvent(e) ? i.TouchUIHelper.getEventX(e) : e.clientX + (t.clientEventRequiresDocScrollCorrection() ? r.GetDocumentScrollLeft() : 0) }, t.GetEventY = function(e) { return i.TouchUIHelper.isTouchEvent(e) ? i.TouchUIHelper.getEventY(e) : e.clientY + (t.clientEventRequiresDocScrollCorrection() ? r.GetDocumentScrollTop() : 0) }, t.CancelBubble = function(t) { return t.cancelBubble = !0, !1 }, t
            }();
        e.Evt = s
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = n(86),
            i = function() {
                function t(t) { this.url = void 0, this.base64 = void 0, t && (o.Base64Utils.checkPrependDataUrl(t) ? this.base64 = t : this.url = t), this.loadFailed = !1 }
                return t.prototype.clone = function() { var e = new t; return e.url = this.url, e.base64 = this.base64, e }, Object.defineProperty(t.prototype, "isEmpty", { get: function() { return void 0 === this.url && void 0 === this.base64 }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "unableToLoad", { get: function() { return this.loadFailed }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "renderUrl", { get: function() { return this.base64 || "" }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "exportUrl", { get: function() { return this.base64 ? this.base64 : this.url }, enumerable: !0, configurable: !0 }), Object.defineProperty(t, "transparentOnePixelImage", { get: function() { return this.transparentWhiteImage1_1 }, enumerable: !0, configurable: !0 }), t.prototype.loadBase64Content = function(t) { this.base64 = o.Base64Utils.normalize(t) }, t.prototype.setUnableToLoadFlag = function() { this.loadFailed = !0 }, t.transparentWhiteImage1_1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAANSURBVBhXY/j///9/AAn7A/0FQ0XKAAAAAElFTkSuQmCC", t
            }();
        e.ImageInfo = i
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(12),
            s = function(t) {
                function e(e, n) { var o = t.call(this) || this; return o.id = e, o.children = n, o }
                return i(e, t), e.prototype.createMainElement = function() { return document.createElementNS(r.svgNS, "clipPath") }, e.prototype.applyElementProperties = function(e) { this.id && e.setAttribute("id", this.id), t.prototype.applyElementProperties.call(this, e) }, e
            }(n(18).SvgPrimitive);
        e.ClipPathPrimitive = s
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(12),
            s = function(t) {
                function e(e, n, o, i, r, s) { var a = t.call(this, r, s) || this; return a.cx = e, a.cy = n, a.rx = o, a.ry = i, a }
                return i(e, t), e.prototype.createMainElement = function() { return document.createElementNS(r.svgNS, "ellipse") }, e.prototype.applyElementProperties = function(e) { this.setUnitAttribute(e, "cx", this.cx), this.setUnitAttribute(e, "cy", this.cy), this.setUnitAttribute(e, "rx", this.rx), this.setUnitAttribute(e, "ry", this.ry), t.prototype.applyElementProperties.call(this, e) }, e
            }(n(18).SvgPrimitive);
        e.EllipsePrimitive = s
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = n(4),
            i = n(5),
            r = function() {
                function t(t) { this.parent = t }
                return Object.defineProperty(t.prototype, "connector", { get: function() { return this.parent.connector }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "beginRect", { get: function() { return this.parent.beginRect }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "endRect", { get: function() { return this.parent.endRect }, enumerable: !0, configurable: !0 }), t.prototype.getBeginOffsetPoints = function(t, e, n, i) { if (e = this.getCorrectOriginPoint(e, i), t !== o.ConnectionPointSide.Undefined) { if (this.isBeginEndSame()) return this.getSameShapeOffsetPoints(t, e, n, i); if (this.isBeginEndOverlappedPoints(e, n)) return this.getOverlappedPointsOffsetPoints(t, e, n, i); if (this.isBeginEndOverlapped()) return this.getBeginOverlappedShapeOffsetPoints(t, e, n, i) } else if (this.isOriginRectContainsTargetPoint(i, n)) return this.getOverlappedPointsOffsetPoints(t, e, n, i); return this.isOnSidePoint(e, n) ? this.getBeginOnSideOffsetPoints(t, e, n, i) : this.getBeginOffSideOffsetPoints(t, e, n, i) }, t.prototype.getEndOffsetPoints = function(t, e, n, i) { if (e = this.getCorrectOriginPoint(e, i), t !== o.ConnectionPointSide.Undefined) { if (this.isBeginEndSame()) return this.getSameShapeOffsetPoints(t, e, n, i); if (this.isBeginEndOverlappedPoints(n, e)) return this.getOverlappedPointsOffsetPoints(t, e, n, i); if (this.isBeginEndOverlapped()) return this.getEndOverlappedShapeOffsetPoints(t, e, n, i) } else if (this.isOriginRectContainsTargetPoint(i, n)) return this.getOverlappedPointsOffsetPoints(t, e, n, i); return this.isOnSidePoint(e, n) ? this.getEndOnSideOffsetPoints(t, e, n, i) : this.getEndOffSideOffsetPoints(t, e, n, i) }, t.prototype.getSide = function(t, e) { return Math.abs(e.x - t.x) > Math.abs(e.y - t.y) ? e.x > t.x ? o.ConnectionPointSide.East : o.ConnectionPointSide.West : e.y > t.y ? o.ConnectionPointSide.South : o.ConnectionPointSide.North }, t.prototype.getSideCalculator = function(t, e) { return this.parent.getSideCalculator(this.getSide(t, e)) }, t.prototype.getMinOffset = function() { return i.Connector.minOffset }, t.prototype.isBeginEndSame = function() { return this.connector.beginItem === this.connector.endItem }, t.prototype.isBeginEndOverlapped = function() { return this.beginRect && this.endRect && this.beginRect.intersect(this.endRect) }, t.prototype.isBeginEndOverlappedX = function() { return this.beginRect && this.endRect && this.beginRect.intersectX(this.endRect) }, t.prototype.isBeginEndOverlappedY = function() { return this.beginRect && this.endRect && this.beginRect.intersectY(this.endRect) }, t.prototype.isBeginEndOverlappedPoints = function(t, e) { return this.beginRect && this.endRect && (this.beginRect.contains(e) || this.endRect.contains(t)) }, t.prototype.isOriginRectContainsTargetPoint = function(t, e) { return t && t.contains(e) }, t
            }();
        e.ConnectorPointsOrthogonalSideCalculatorBase = r
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = function(t) {
            function e(e, n) { var o = t.call(this) || this; return o.selectedKeys = n, o.selection = e, o }
            return i(e, t), e.prototype.redo = function() { this.oldSelection = this.selection.getKeys().slice(0), this.selection.set(this.selectedKeys) }, e.prototype.undo = function() { this.selection.set(this.oldSelection) }, e
        }(n(3).HistoryItem);
        e.SetSelectionHistoryItem = r
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(9),
            s = n(0),
            a = n(13),
            c = n(98),
            u = n(20),
            p = n(28),
            h = n(15),
            l = n(41),
            d = n(99);
        e.ShapeDefaultDimension = 1440, e.ShapeDefaultSize = new s.Size(e.ShapeDefaultDimension, e.ShapeDefaultDimension), e.SHAPE_IMAGE_CLASSNAMES = { IMAGE: "dxdi-image", IMAGE_PLACEHOLDER: "dxdi-image-placeholder", LOADING_INDICATOR: "dxdi-spinner", USER_PIC: "dxdi-user", WARNING_MARK: "dxdi-warning" };
        var f = function(t) {
            function n(n, o, i, r) { void 0 === i && (i = e.ShapeDefaultSize.clone()); var s = t.call(this, n, o, i, r) || this; return s.title = n, s.defaultText = o, s.defaultSize = i, s.defaultImageUrl = r, s.defaultIconSize = 480, s }
            return i(n, t), Object.defineProperty(n.prototype, "enableImage", { get: function() { return !0 }, enumerable: !0, configurable: !0 }), n.getImageMargins = function(t) { return a.UnitConverter.pixelsToTwips(3) }, n.prototype.createImagePrimitives = function(t, n) { if (!this.enableImage) return []; var o = this.getImagePlacementRectangle(t.rectangle, n); if (n) return this.createImagePlaceholder(o); var i = []; if (i = t.image.isEmpty || t.image.unableToLoad ? i.concat(this.createEmptyImagePrimitives(o, t.image.unableToLoad)) : "" === t.image.renderUrl ? i.concat(this.createLoadingImagePrimitives(o)) : i.concat(this.createLoadedImagePrimitives(o, t.image.renderUrl)), "" === t.image.renderUrl) { var r = h.RenderUtils.generateSvgElementId("clipImage"); return [].concat([new p.GroupPrimitive(i, e.SHAPE_IMAGE_CLASSNAMES.IMAGE, void 0, r), new l.ClipPathPrimitive(r, [new u.RectanglePrimitive(o.left, o.top, o.width, o.height)])]) } return i }, n.prototype.createImagePlaceholder = function(t) { return [] }, n.prototype.createLoadedImagePrimitives = function(t, o) { return [new c.ImagePrimitive(t.left, t.top, t.width, t.height, o, n.imageScalingRule, void 0, e.SHAPE_IMAGE_CLASSNAMES.IMAGE)] }, n.prototype.createLoadingImagePrimitives = function(t) { var n = this.getIconPlacementRectangle(t); return [d.ShapeImageIndicator.createLoadingIndicatorPrimitives(n.left, n.top, this.defaultIconSize, a.UnitConverter.pixelsToTwips(5), e.SHAPE_IMAGE_CLASSNAMES.LOADING_INDICATOR)] }, n.prototype.createEmptyImagePrimitives = function(t, e) {
                var n = this.getIconPlacementRectangle(t),
                    o = [];
                return o = o.concat(this.createEmptyImagePrimitive(n)), e && (o = o.concat(this.createWarningPrimitive(n))), o
            }, n.prototype.createEmptyImagePrimitive = function(t) { return new p.GroupPrimitive([]) }, n.prototype.createWarningPrimitive = function(t) { return new p.GroupPrimitive([]) }, n.prototype.getIconPlacementRectangle = function(t) { var e = new s.Rectangle(new s.Point(t.left, t.top), new s.Size(this.defaultIconSize, this.defaultIconSize)); return e.width < t.width && (e.position.x = t.left + (t.width - e.width) / 2), e.height < t.height && (e.position.y = t.top + (t.height - e.height) / 2), e }, n.prototype.getImagePlacementRectangle = function(t, e) {
                var o = this.getImageSize(t, e),
                    i = s.Rectangle.create(t.left, t.top, o.width, o.height),
                    r = this.getTextBlockOffset(t, e);
                return r.right > 0 ? i.position.x = t.right - r.right - n.getImageMargins(e) : r.left > 0 && (i.position.x += n.getImageMargins(e)), r.bottom > 0 ? i.position.y = t.bottom - r.bottom - n.getImageMargins(e) : i.position.y += n.getImageMargins(e), (r.top > 0 || r.bottom > 0) && (i.position.x = i.left + (t.width - i.width) / 2), i
            }, n.prototype.getImageSize = function(t, e) { var n = this.getRawImageSize(t, e); return this.correctImageSize(n) }, n.prototype.getRawImageSize = function(t, e) { return new s.Size(0, 0) }, n.prototype.correctImageSize = function(t) { return t.width = Math.max(t.width, 0), t.height = Math.max(t.height, 0), t }, n.prototype.getTextBlockOffset = function(t, e) { return s.Offset.empty() }, n.imageScalingRule = "xMidYMid meet", n
        }(r.ShapeDescription);
        e.ShapeWithImageDescription = f
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = function(t) {
            function e(e, n, o) { return t.call(this, e, n, o) || this }
            return i(e, t), e.prototype.redo = function(t) {
                var e = t.model.findItem(this.itemKey);
                this.oldStyleValue = e.style[this.styleProperty], t.changeStyle(e, this.styleProperty, this.styleValue)
            }, e.prototype.undo = function(t) {
                var e = t.model.findItem(this.itemKey);
                t.changeStyle(e, this.styleProperty, this.oldStyleValue)
            }, e
        }(n(103).ChangeStyleHistoryItemBase);
        e.ChangeStyleHistoryItem = r
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this }
            return i(e, t), e.prototype.isEnabledInReadOnlyMode = function() { return !0 }, e
        }(n(7).SimpleCommandBase);
        e.ExportImportCommandBase = r
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o, i = n(130),
            r = n(199),
            s = n(200),
            a = n(201),
            c = n(202),
            u = n(203),
            p = n(204),
            h = n(205),
            l = n(206),
            d = n(207),
            f = n(208),
            y = n(209),
            m = n(210),
            g = n(211),
            v = n(212),
            P = n(213),
            C = n(214),
            S = n(16),
            _ = n(215),
            w = n(217),
            b = n(218),
            x = n(219),
            I = n(221),
            O = n(223),
            E = n(225),
            M = n(226),
            T = n(227),
            A = n(228),
            D = n(229),
            L = n(232),
            z = n(234),
            N = n(235),
            j = n(236),
            R = n(237),
            k = n(238),
            U = n(239),
            B = n(241),
            H = n(242),
            K = n(243),
            V = n(244),
            F = n(245),
            W = n(246),
            G = n(247),
            Z = n(249),
            X = n(251),
            Y = n(252),
            q = n(253),
            J = n(254),
            Q = n(255),
            $ = n(256),
            tt = n(257),
            et = n(259),
            nt = n(260);
        ! function(t) { t[t.Undo = 0] = "Undo", t[t.Redo = 1] = "Redo", t[t.Cut = 2] = "Cut", t[t.Copy = 3] = "Copy", t[t.Paste = 4] = "Paste", t[t.PasteInPosition = 5] = "PasteInPosition", t[t.SelectAll = 6] = "SelectAll", t[t.Delete = 7] = "Delete", t[t.Import = 8] = "Import", t[t.ImportBPMN = 9] = "ImportBPMN", t[t.Export = 10] = "Export", t[t.ExportSvg = 11] = "ExportSvg", t[t.ExportPng = 12] = "ExportPng", t[t.ExportJpg = 13] = "ExportJpg", t[t.BindDocument = 14] = "BindDocument", t[t.UnbindDocument = 15] = "UnbindDocument", t[t.Bold = 16] = "Bold", t[t.Italic = 17] = "Italic", t[t.Underline = 18] = "Underline", t[t.FontName = 19] = "FontName", t[t.FontSize = 20] = "FontSize", t[t.FontColor = 21] = "FontColor", t[t.FillColor = 22] = "FillColor", t[t.StrokeColor = 23] = "StrokeColor", t[t.TextLeftAlign = 24] = "TextLeftAlign", t[t.TextCenterAlign = 25] = "TextCenterAlign", t[t.TextRightAlign = 26] = "TextRightAlign", t[t.ConnectorLineOption = 27] = "ConnectorLineOption", t[t.ConnectorStartLineEnding = 28] = "ConnectorStartLineEnding", t[t.ConnectorEndLineEnding = 29] = "ConnectorEndLineEnding", t[t.BringToFront = 30] = "BringToFront", t[t.SendToBack = 31] = "SendToBack", t[t.MoveLeft = 32] = "MoveLeft", t[t.MoveStepLeft = 33] = "MoveStepLeft", t[t.MoveRight = 34] = "MoveRight", t[t.MoveStepRight = 35] = "MoveStepRight", t[t.MoveUp = 36] = "MoveUp", t[t.MoveStepUp = 37] = "MoveStepUp", t[t.MoveDown = 38] = "MoveDown", t[t.MoveStepDown = 39] = "MoveStepDown", t[t.CloneLeft = 40] = "CloneLeft", t[t.CloneRight = 41] = "CloneRight", t[t.CloneUp = 42] = "CloneUp", t[t.CloneDown = 43] = "CloneDown", t[t.AutoLayoutTree = 44] = "AutoLayoutTree", t[t.AutoLayoutFlow = 45] = "AutoLayoutFlow", t[t.AutoLayoutTreeVertical = 46] = "AutoLayoutTreeVertical", t[t.AutoLayoutTreeHorizontal = 47] = "AutoLayoutTreeHorizontal", t[t.AutoLayoutLayeredVertical = 48] = "AutoLayoutLayeredVertical", t[t.AutoLayoutLayeredHorizontal = 49] = "AutoLayoutLayeredHorizontal", t[t.Lock = 50] = "Lock", t[t.Unlock = 51] = "Unlock", t[t.Units = 52] = "Units", t[t.ViewUnits = 53] = "ViewUnits", t[t.PageSize = 54] = "PageSize", t[t.PageLandscape = 55] = "PageLandscape", t[t.PageColor = 56] = "PageColor", t[t.GridSize = 57] = "GridSize", t[t.ShowGrid = 58] = "ShowGrid", t[t.SnapToGrid = 59] = "SnapToGrid", t[t.ZoomLevel = 60] = "ZoomLevel", t[t.Fullscreen = 61] = "Fullscreen", t[t.ToggleSimpleView = 62] = "ToggleSimpleView", t[t.ToggleReadOnly = 63] = "ToggleReadOnly", t[t.EditShapeImage = 64] = "EditShapeImage", t[t.FitToScreen = 65] = "FitToScreen", t[t.SwitchAutoZoom = 66] = "SwitchAutoZoom", t[t.ToggleAutoZoom = 67] = "ToggleAutoZoom", t[t.FitToWidth = 68] = "FitToWidth", t[t.ZoomLevelItems = 69] = "ZoomLevelItems", t[t.GridSizeItems = 70] = "GridSizeItems", t[t.PageSizeItems = 71] = "PageSizeItems", t[t.ImportXML = 72] = "ImportXML", t[t.InsertShapeImage = 73] = "InsertShapeImage", t[t.DeleteShapeImage = 74] = "DeleteShapeImage" }(o = e.DiagramCommand || (e.DiagramCommand = {}));
        var ot = function() {
            function t(t) { this.commands = {}, this.shortcutsToCommand = {}, this.lastCommandsChain = [], this.executingCommandsChain = [], this.executingCommandCounter = 0, this.isPublicApiCall = !1, this.createCommand(t, o.Undo, r.UndoCommand, S.ModifierKey.Ctrl | S.KeyCode.Key_z, S.ModifierKey.Meta | S.KeyCode.Key_z), this.createCommand(t, o.Redo, s.RedoCommand, S.ModifierKey.Ctrl | S.KeyCode.Key_y, S.ModifierKey.Ctrl | S.ModifierKey.Shift | S.KeyCode.Key_z, S.ModifierKey.Meta | S.ModifierKey.Shift | S.KeyCode.Key_z), this.createCommand(t, o.Cut, A.CutSelectionCommand, S.KeyCode.Key_x | S.ModifierKey.Ctrl, S.KeyCode.Key_x | S.ModifierKey.Meta), this.createCommand(t, o.Copy, T.CopySelectionCommand, S.KeyCode.Key_c | S.ModifierKey.Ctrl, S.KeyCode.Key_c | S.ModifierKey.Meta), this.createCommand(t, o.Paste, D.PasteSelectionCommand), this.createCommand(t, o.PasteInPosition, $.PasteSelectionInPositionCommand), this.createCommand(t, o.SelectAll, C.SelectAllCommand, S.KeyCode.Key_a | S.ModifierKey.Ctrl, S.KeyCode.Key_a | S.ModifierKey.Meta), this.createCommand(t, o.Delete, i.DeleteCommand, S.KeyCode.Delete, S.KeyCode.Backspace), this.createCommand(t, o.Import, a.ImportCommand), this.createCommand(t, o.ImportBPMN, L.ImportBPMNCommand), this.createCommand(t, o.ImportXML, tt.ImportXMLCommand), this.createCommand(t, o.Export, c.ExportCommand), this.createCommand(t, o.ExportSvg, E.ExportSvgCommand), this.createCommand(t, o.ExportPng, O.ExportPngCommand), this.createCommand(t, o.ExportJpg, M.ExportJpgCommand), this.createCommand(t, o.BindDocument, U.BindDocumentCommand), this.createCommand(t, o.UnbindDocument, B.UnbindDocumentCommand), this.createCommand(t, o.Bold, u.ToggleFontBoldCommand, S.ModifierKey.Ctrl | S.KeyCode.Key_b, S.ModifierKey.Meta | S.KeyCode.Key_b), this.createCommand(t, o.Italic, p.ToggleFontItalicCommand, S.ModifierKey.Ctrl | S.KeyCode.Key_i, S.ModifierKey.Meta | S.KeyCode.Key_i), this.createCommand(t, o.Underline, h.ToggleFontUnderlineCommand, S.ModifierKey.Ctrl | S.KeyCode.Key_u, S.ModifierKey.Meta | S.KeyCode.Key_u), this.createCommand(t, o.FontName, l.ChangeFontNameCommand), this.createCommand(t, o.FontSize, d.ChangeFontSizeCommand), this.createCommand(t, o.FontColor, f.ChangeFontColorCommand), this.createCommand(t, o.FillColor, y.ChangeFillColorCommand), this.createCommand(t, o.StrokeColor, m.ChangeStrokeColorCommand), this.createCommand(t, o.TextLeftAlign, g.TextLeftAlignCommand), this.createCommand(t, o.TextCenterAlign, g.TextCenterAlignCommand), this.createCommand(t, o.TextRightAlign, g.TextRightAlignCommand), this.createCommand(t, o.ConnectorLineOption, P.ChangeConnectorLineOptionCommand), this.createCommand(t, o.ConnectorStartLineEnding, v.ChangeConnectorStartLineEndingCommand), this.createCommand(t, o.ConnectorEndLineEnding, v.ChangeConnectorEndLineEndingCommand), this.createCommand(t, o.BringToFront, N.BringToFrontCommand), this.createCommand(t, o.SendToBack, z.SendToBackCommand), this.createCommand(t, o.MoveLeft, R.MoveLeftCommand, S.ModifierKey.Shift | S.KeyCode.Left), this.createCommand(t, o.MoveStepLeft, R.MoveStepLeftCommand, S.KeyCode.Left), this.createCommand(t, o.MoveRight, R.MoveRightCommand, S.ModifierKey.Shift | S.KeyCode.Right), this.createCommand(t, o.MoveStepRight, R.MoveStepRightCommand, S.KeyCode.Right), this.createCommand(t, o.MoveUp, R.MoveUpCommand, S.ModifierKey.Shift | S.KeyCode.Up), this.createCommand(t, o.MoveStepUp, R.MoveStepUpCommand, S.KeyCode.Up), this.createCommand(t, o.MoveDown, R.MoveDownCommand, S.ModifierKey.Shift | S.KeyCode.Down), this.createCommand(t, o.MoveStepDown, R.MoveStepDownCommand, S.KeyCode.Down), this.createCommand(t, o.CloneLeft, W.CloneLeftCommand, S.ModifierKey.Ctrl | S.ModifierKey.Shift | S.KeyCode.Left), this.createCommand(t, o.CloneRight, W.CloneRightCommand, S.ModifierKey.Ctrl | S.ModifierKey.Shift | S.KeyCode.Right), this.createCommand(t, o.CloneUp, W.CloneUpCommand, S.ModifierKey.Ctrl | S.ModifierKey.Shift | S.KeyCode.Up), this.createCommand(t, o.CloneDown, W.CloneDownCommand, S.ModifierKey.Ctrl | S.ModifierKey.Shift | S.KeyCode.Down), this.createCommand(t, o.Lock, V.LockCommand), this.createCommand(t, o.Unlock, F.UnLockCommand), this.createCommand(t, o.AutoLayoutTree, _.AutoLayoutTreeVerticalCommand), this.createCommand(t, o.AutoLayoutFlow, j.AutoLayoutLayeredHorizontalCommand), this.createCommand(t, o.Units, G.ChangeUnitsCommand), this.createCommand(t, o.ViewUnits, G.ChangeViewUnitsCommand), this.createCommand(t, o.PageSize, I.ChangePageSizeCommand), this.createCommand(t, o.PageLandscape, x.ChangePageLandscapeCommand), this.createCommand(t, o.PageColor, Z.ChangePageColorCommand), this.createCommand(t, o.GridSize, b.ChangeGridSizeCommand), this.createCommand(t, o.ShowGrid, X.ChangeShowGridCommand), this.createCommand(t, o.SnapToGrid, w.ChangeSnapToGridCommand), this.createCommand(t, o.ZoomLevel, k.ChangeZoomLevelCommand), this.createCommand(t, o.AutoLayoutTreeVertical, _.AutoLayoutTreeVerticalCommand), this.createCommand(t, o.AutoLayoutTreeHorizontal, H.AutoLayoutTreeHorizontalCommand), this.createCommand(t, o.AutoLayoutLayeredVertical, K.AutoLayoutLayeredVerticalCommand), this.createCommand(t, o.AutoLayoutLayeredHorizontal, j.AutoLayoutLayeredHorizontalCommand), this.createCommand(t, o.Fullscreen, Y.ToggleFullscreenCommand, S.KeyCode.F11), this.createCommand(t, o.ToggleSimpleView, q.ToggleSimpleViewCommand), this.createCommand(t, o.ToggleReadOnly, J.ToggleReadOnlyCommand), this.createCommand(t, o.InsertShapeImage, et.InsertShapeImageCommand), this.createCommand(t, o.EditShapeImage, Q.EditShapeImageCommand), this.createCommand(t, o.DeleteShapeImage, nt.DeleteShapeImageCommand), this.createCommand(t, o.FitToScreen, k.FitToScreenCommand), this.createCommand(t, o.FitToWidth, k.FitToWidthCommand), this.createCommand(t, o.SwitchAutoZoom, k.SwitchAutoZoomCommand), this.createCommand(t, o.ToggleAutoZoom, k.ToggleAutoZoomCommand), this.createCommand(t, o.ZoomLevelItems, k.ChangeZoomLevelItemsCommand), this.createCommand(t, o.GridSizeItems, b.ChangeGridSizeItemsCommand), this.createCommand(t, o.PageSizeItems, I.ChangePageSizeItemsCommand) }
            return t.prototype.getCommand = function(t) { return this.commands[t] }, t.prototype.beforeExecuting = function(t) { this.executingCommandsChain.push(t), this.executingCommandCounter++ }, t.prototype.afterExecuting = function() { this.executingCommandCounter--, 0 === this.executingCommandCounter && (this.lastCommandsChain = this.executingCommandsChain, this.executingCommandsChain = []) }, t.prototype.assertLastExecutedCommandsChain = function(t) {
                for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                if (t && this.lastCommandsChain.length !== e.length) return !1;
                for (var o, i = 0; o = e[i]; i++)
                    if (!(this.lastCommandsChain[i] && this.lastCommandsChain[i] instanceof o)) return !1;
                return !0
            }, t.prototype.processShortcut = function(t) { var e = this.shortcutsToCommand[t]; return !!e && e.execute() }, t.prototype.processPaste = function(t) { var e = this.getCommand(o.Paste); return e && e.isEnabled() && e.performPaste(t), !0 }, t.prototype.notifySelectionChanged = function(t) { this.lastCommandsChain = [] }, t.prototype.notifyScrollPositionChanged = function() {}, t.prototype.createCommand = function(t, e, n) {
                for (var o = [], i = 3; i < arguments.length; i++) o[i - 3] = arguments[i];
                this.commands[e] = new n(t);
                for (var r = 0; r < o.length; r++) { var s = o[r]; "number" == typeof s && (this.shortcutsToCommand[s] = this.commands[e]) }
            }, t
        }();
        e.CommandManager = ot
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = n(86),
            i = n(40),
            r = function() {
                function t(t, e, n, i, r) { this._base64 = void 0 !== t ? o.Base64Utils.normalize(t) : void 0, this.actualId = e, this._referenceInfo = i, this._isLoaded = void 0 !== r && r, this.imageUrl = n }
                return Object.defineProperty(t.prototype, "isLoaded", { get: function() { return this._referenceInfo ? this._referenceInfo._isLoaded : this._isLoaded }, set: function(t) { this._isLoaded = t }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "base64", { get: function() { return this._base64 }, set: function(t) { this._base64 = o.Base64Utils.normalize(t) }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "referenceInfo", { get: function() { return this._referenceInfo }, set: function(t) { this._referenceInfo = t, this._base64 = void 0, this._isLoaded = void 0 }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "isLoading", { get: function() { return this._referenceInfo ? this.referenceInfo._isLoading : this._isLoading }, enumerable: !0, configurable: !0 }), t.prototype.startLoading = function() { this._referenceInfo ? this._referenceInfo.startLoading() : this._isLoading = !0 }, t.prototype.finalizeLoading = function() { this._referenceInfo ? this._referenceInfo.finalizeLoading() : this._isLoading = !1 }, t
            }();
        e.CacheImageInfo = r;
        var s = function() {
            function t() { this.emptyImageId = 0, this.lastActualId = 0, this.cache = [], this.createUnloadedInfoByBase64(i.ImageInfo.transparentOnePixelImage).isLoaded = !0 }
            return t.prototype.reset = function() { this.cache.splice(1), this.lastActualId = 1 }, Object.defineProperty(t.prototype, "emptyImage", { get: function() { return this.cache[this.emptyImageId] }, enumerable: !0, configurable: !0 }), t.prototype.getImageData = function(t) { return this.cache[t] }, t.prototype.createUnloadedInfoByUrl = function(t) { var e = this.findInfoByUrl(t); return e || this.registerImageData(new r(void 0, this.getNextActualId(), t)) }, t.prototype.createUnloadedInfoByBase64 = function(t) { var e = this.findInfoByBase64(t); return e || this.registerImageData(new r(t, this.getNextActualId())) }, t.prototype.createUnloadedInfoByShapeImageInfo = function(t) { var e = t.exportUrl; return o.Base64Utils.checkPrependDataUrl(e) ? this.createUnloadedInfoByBase64(e) : this.createUnloadedInfoByUrl(e) }, t.prototype.registerImageData = function(t) { var e = this.cache[t.actualId]; return e || (e = t), void 0 !== t.actualId && (this.cache[t.actualId] = e), e }, t.prototype.loadAllImages = function(t) {
                var e = this;
                this.cache.forEach(function(n) { e.emptyImageId == n.actualId || n.isLoaded || n.isLoading || t.load(n) })
            }, t.prototype.finalizeLoading = function(t, e) {
                if (t.finalizeLoading(), t.isLoaded = !0, !t.referenceInfo && e.base64) {
                    var n = o.Base64Utils.normalize(e.base64);
                    this.cache.forEach(function(e) { var o = e.base64 == n && e !== t && e.isLoaded; return o && (t.referenceInfo = e.referenceInfo ? e.referenceInfo : e), o }), t.base64 = n
                }
            }, t.prototype.getNextActualId = function() { return this.lastActualId++ }, t.prototype.findInfoByBase64 = function(t) { return t = o.Base64Utils.normalize(t), this.findInfoCore(function(e) { return e.base64 === t }) }, t.prototype.findInfoByUrl = function(t) { return this.findInfoCore(function(e) { return e.imageUrl === t }) }, t.prototype.findInfoCore = function(t) { var e; return this.cache.forEach(function(n) { t(n) && (e = n) }), e }, t.instance = new t, t
        }();
        e.ImageCache = s
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = function(t) {
            function e(e, n, o) { var i = t.call(this) || this; return i.connectorKey = e, i.pointIndex = n, i.point = o, i }
            return i(e, t), e.prototype.redo = function(t) {
                var e = t.model.findConnector(this.connectorKey);
                this.oldPoint = e.points[this.pointIndex].clone(), t.moveConnectorPoint(e, this.pointIndex, this.point)
            }, e.prototype.undo = function(t) {
                var e = t.model.findConnector(this.connectorKey);
                t.moveConnectorPoint(e, this.pointIndex, this.oldPoint)
            }, e
        }(n(3).HistoryItem);
        e.MoveConnectorPointHistoryItem = r
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(3),
            s = n(25),
            a = n(11),
            c = function(t) {
                function e(e, n, o, i) { var r = t.call(this) || this; return r.shapeType = e, r.position = n, r.text = o, r.dataKey = i, r }
                return i(e, t), e.prototype.redo = function(t) { var e = new a.Shape(s.ShapeDescriptionManager.get(this.shapeType), this.position); "string" == typeof this.text && (e.text = this.text), void 0 !== this.dataKey && (e.dataKey = this.dataKey), t.addShape(e, this.shapeKey), this.shapeKey = e.key }, e.prototype.undo = function(t) { t.deleteShape(t.model.findShape(this.shapeKey)) }, e
            }(r.HistoryItem);
        e.AddShapeHistoryItem = c
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(3),
            s = n(5),
            a = function(t) {
                function e(e, n) { var o = t.call(this) || this; return o.points = e, o.dataKey = n, o }
                return i(e, t), e.prototype.redo = function(t) {
                    var e = new s.Connector(this.points);
                    void 0 !== this.dataKey && (e.dataKey = this.dataKey), t.addConnector(e, this.connectorKey), this.connectorKey = e.key
                }, e.prototype.undo = function(t) {
                    var e = t.model.findConnector(this.connectorKey);
                    t.deleteConnector(e)
                }, e
            }(r.HistoryItem);
        e.AddConnectorHistoryItem = a
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(31),
            s = n(11),
            a = n(0),
            c = n(70),
            u = function() {
                function t(t, e) { this.nodeMap = {}, this.edgeMap = {}, this.nodes = [], this.edges = [], this.onInit(), t.forEach(this.addNode.bind(this)), e.forEach(this.addEdge.bind(this)) }
                return Object.defineProperty(t.prototype, "items", { get: function() { return this.nodes.map(this.getNode.bind(this)) }, enumerable: !0, configurable: !0 }), t.prototype.onInit = function() {}, t.prototype.addEdge = function(t) { this.edgeMap[t.key] = t, this.edges.push(t) }, t.prototype.addNode = function(t) { this.nodeMap[t.key] = t, this.nodes.push(t.key) }, t.prototype.getNode = function(t) { return this.nodeMap[t] }, t.prototype.getEdge = function(t) { return this.edgeMap[t] }, t.prototype.isEmpty = function() { return !this.nodes.length && !this.edges.length }, t.prototype.getAdjacentEdges = function(t, e) { return void 0 === e && (e = r.ConnectionMode.OutgoingAndIncoming), this.edges.filter(function(n) { return e & r.ConnectionMode.Incoming && n.to === t || e & r.ConnectionMode.Outgoing && n.from === t }) }, t
            }(),
            p = function(t) {
                function e() { return null !== t && t.apply(this, arguments) || this }
                return i(e, t), e.prototype.cast = function(t, n) { var o = this; return new e(this.nodes.map(function(e) { return t(o.getNode(e)) }), this.edges.map(function(t) { return n ? n(t) : t })) }, e.prototype.getConnectedComponents = function() {
                    var t = this.createIterator(r.ConnectionMode.OutgoingAndIncoming);
                    t.visitEachEdgeOnce = !0;
                    for (var n = [], o = function(o) {
                            var r = [],
                                s = [];
                            t.onNode = function(t) { return r.push(t) }, t.onEdge = function(t) { return s.push(t) }, t.iterate(i.nodes[o]), r.length && n.push(new e(r, s))
                        }, i = this, s = 0; s < this.nodes.length; s++) o(s);
                    return n
                }, e.prototype.createIterator = function(t) { var e = new l(this, t); return e.comparer = function(t, e) { return t.weight - e.weight }, e }, e.prototype.getSpanningGraph = function(t, n, o) {
                    var i = this;
                    if (void 0 === o && (o = void 0), !this.nodes.length) return new e([], []);
                    o || (o = function(t) { return t.weight });
                    var r = [],
                        s = new c.HashSet,
                        a = new c.HashSet([], function(t) { return t.getHashKey() });
                    for (this.addNodeToSpanningGraph(t, n, r, s, a, o); r.length && s.length !== this.nodes.length;) {
                        var u = r.shift();
                        a.tryPush(u);
                        var p = s.contains(u.from) ? u.to : u.from;
                        this.addNodeToSpanningGraph(p, n, r, s, a, o), r = r.filter(function(t) { return !s.contains(t.from) || !s.contains(t.to) })
                    }
                    return new e(s.list().map(function(t) { return i.getNode(t) }), a.list())
                }, e.prototype.addNodeToSpanningGraph = function(t, e, n, o, i, s) {
                    o.tryPush(t), this.getAdjacentEdges(t, e).filter(function(t) { return !i.contains(t) }).forEach(function(t) {
                        var e = s(t),
                            o = a.Utils.binaryIndexOf(n, function(t) { return t.weight - e });
                        for (o = o < 0 ? ~o : o; o < n.length && s(n[o]) === e;) o++;
                        n.splice(o, 0, new r.Edge(t.key, t.from, t.to, e))
                    })
                }, e.create = function(t, n) { return new e(t, n.filter(function(t) { return t.beginItem && t.endItem instanceof s.Shape && t.endItem && t.endItem instanceof s.Shape && t.beginItem !== t.endItem }).map(function(t) { return new r.Edge(t.key, t.beginItem && t.beginItem.key, t.endItem && t.endItem.key) })) }, e
            }(u);
        e.Graph = p;
        var h = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this }
            return i(e, t), e.prototype.onInit = function() { this.parentToChildren = {}, this.childToParents = {} }, e.prototype.addEdge = function(e) { t.prototype.addEdge.call(this, e), (this.parentToChildren[e.from] || (this.parentToChildren[e.from] = [])).push(e.to), (this.childToParents[e.to] || (this.childToParents[e.to] = [])).push(e.from) }, e.prototype.getChildren = function(t) { return this.parentToChildren[t] || [] }, e.prototype.getParents = function(t) { return this.childToParents[t] || [] }, e.prototype.createIterator = function(t) { return new l(this, t) }, e
        }(u);
        e.FastGraph = h;
        var l = function() {
            function t(t, e) { void 0 === e && (e = r.ConnectionMode.OutgoingAndIncoming), this.graph = t, this.connectionMode = e, this.visitEachEdgeOnce = !0, this.visitEachNodeOnce = !0, this.visitedNodes = {}, this.visitedEdges = {} }
            return t.prototype.iterate = function(t) {
                if (!this.visitEachNodeOnce && !this.visitEachEdgeOnce && !this.skipNode) throw "skipNode or visitEachNodeOnce or visitEachEdgeOnce must be set to avoid SOF";
                this.iterateCore(t)
            }, t.prototype.iterateCore = function(t) {
                var e = this,
                    n = this.graph.getNode(t);
                if (!(!n || this.skipNode && this.skipNode(n) || this.visitEachNodeOnce && this.isNodeVisited(t))) {
                    this.visitedNodes[t] = !0, this.onNode && this.onNode(n);
                    var o = this.graph.getAdjacentEdges(t, this.connectionMode);
                    if (this.skipEdge && (o = o.filter(function(t) { return !e.skipEdge(t) })), this.connectionMode & r.ConnectionMode.Outgoing) {
                        var i = o.filter(function(e) { return e.from === t });
                        this.comparer && i.sort(this.comparer), i.forEach(function(t) { e.visitEachEdgeOnce && e.visitedEdges[t.key] || (e.visitedEdges[t.key] = !0, e.onEdge && e.onEdge(t, !0), e.iterateCore(t.to), e.onAfterEdge && e.onAfterEdge(t, !0)) })
                    }
                    if (this.onAllEdges && this.onAllEdges(n, !0), this.connectionMode & r.ConnectionMode.Incoming) {
                        var s = o.filter(function(e) { return e.to === t });
                        this.comparer && s.sort(this.comparer), s.forEach(function(t) { e.visitEachEdgeOnce && e.visitedEdges[t.key] || (e.visitedEdges[t.key] = !0, e.onEdge && e.onEdge(t, !1), e.iterateCore(t.from), e.onAfterEdge && e.onAfterEdge(t, !1)) })
                    }
                    this.onAllEdges && this.onAllEdges(n, !1)
                }
            }, t.prototype.isNodeVisited = function(t) { return !!this.visitedNodes[t] }, t.prototype.isEdgeVisited = function(t) { return !!this.visitedEdges[t] }, t
        }();
        e.GraphIterator = l
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = function(t) {
            function e(e, n, o) { var i = t.call(this) || this; return i.connectorKey = e.key, i.text = o, i.position = n, i }
            return i(e, t), e.prototype.redo = function(t) {
                var e = t.model.findConnector(this.connectorKey);
                this.oldText = e.getText(this.position), t.changeConnectorText(e, this.text, this.position)
            }, e.prototype.undo = function(t) {
                var e = t.model.findConnector(this.connectorKey);
                t.changeConnectorText(e, this.oldText, this.position)
            }, e
        }(n(3).HistoryItem);
        e.ChangeConnectorTextHistoryItem = r
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = function(t) {
            function e(e, n, o) { var i = t.call(this) || this; return i.connectorKey = e, i.propertyName = n, i.value = o, i }
            return i(e, t), e.prototype.redo = function(t) {
                var e = t.model.findConnector(this.connectorKey);
                this.oldValue = e.properties[this.propertyName], t.changeConnectorProperty(e, this.propertyName, this.value)
            }, e.prototype.undo = function(t) {
                var e = t.model.findConnector(this.connectorKey);
                t.changeConnectorProperty(e, this.propertyName, this.oldValue)
            }, e
        }(n(3).HistoryItem);
        e.ChangeConnectorPropertyHistoryItem = r
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = n(0),
            i = function() { return function(t, e, n, o) { void 0 === o && (o = []), this.key = t, this.margin = e, this.size = n, this.connectionPoints = o } }();
        e.NodeInfo = i;
        var r = function() {
            function t(t, e) { this.info = t, this.position = e }
            return Object.defineProperty(t.prototype, "key", { get: function() { return this.info.key }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "rectangle", { get: function() { return new o.Rectangle(this.position, this.info.size) }, enumerable: !0, configurable: !0 }), t
        }();
        e.NodeLayout = r;
        var s = function() { return function(t, e, n) { this.key = t, this.beginIndex = e, this.endIndex = n } }();
        e.EdgeLayout = s;
        var a = function() {
            function t(t, e, n, o) { void 0 === e && (e = t), void 0 === n && (n = t), void 0 === o && (o = t), this.top = t, this.right = e, this.bottom = n, this.left = o }
            return t.empty = function() { return new t(0) }, t
        }();
        e.Margin = a
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = n(11),
            i = n(5),
            r = function() {
                function t() {}
                return t.prototype.export = function(t) { var e = { page: {}, connectors: [], shapes: [] }; return e.page = { width: t.size.width, height: t.size.height, pageColor: t.pageColor, pageWidth: t.pageSize.width, pageHeight: t.pageSize.height, pageLandscape: t.pageLandscape, units: t.units }, this.exportItemsCore(t.items, e), JSON.stringify(e) }, t.prototype.exportItems = function(t) { var e = { connectors: [], shapes: [] }; return this.exportItemsCore(t, e), JSON.stringify(e) }, t.prototype.exportItemsCore = function(t, e) {
                    var n = this;
                    t.forEach(function(t) {
                        if (t instanceof o.Shape) e.shapes.push(n.exportShape(t));
                        else if (t instanceof i.Connector) {
                            var r = n.exportConnector(t);
                            t.beginItem && (r.beginItemKey = t.beginItem.key, r.beginConnectionPointIndex = t.beginConnectionPointIndex), t.endItem && (r.endItemKey = t.endItem.key, r.endConnectionPointIndex = t.endConnectionPointIndex), e.connectors.push(r)
                        }
                    })
                }, t.prototype.exportItem = function(t) { return { key: t.key, dataKey: t.dataKey, locked: t.locked, zIndex: t.zIndex } }, t.prototype.exportShape = function(t) {
                    var e = this.exportItem(t);
                    e.type = t.description.key, e.text = t.text, t.image.isEmpty || (e.imageUrl = t.image.exportUrl), e.x = t.position.x, e.y = t.position.y, e.width = t.size.width, e.height = t.size.height;
                    var n = t.parameters.toObject();
                    n && (e.parameters = n);
                    var o = t.style.toObject();
                    o && (e.style = o);
                    var i = t.styleText.toObject();
                    return i && (e.styleText = i), t.childKeys.length && (e.childKeys = t.childKeys.slice()), t.expanded || (e.expanded = !1), t.expandedSize && (e.expandedWidth = t.expandedSize.width, e.expandedHeight = t.expandedSize.height), e
                }, t.prototype.exportConnector = function(t) {
                    var e = this.exportItem(t);
                    e.points = t.points.map(function(t) { return { x: t.x, y: t.y } });
                    var n = t.texts.toObject();
                    n && (e.texts = n);
                    var o = t.properties.toObject();
                    o && (e.properties = o);
                    var i = t.style.toObject();
                    i && (e.style = i);
                    var r = t.styleText.toObject();
                    return r && (e.styleText = r), e
                }, t.prototype.exportSvg = function(t, e, n, o) { n.exportSvgImage(t, e, o) }, t.prototype.exportPng = function(t, e, n, o) { n.exportPngImage(t, e, o) }, t.prototype.exportJpg = function(t, e, n, o) { n.exportJpgImage(t, e, o) }, t
            }();
        e.Exporter = r
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(107),
            s = n(36),
            a = n(27),
            c = function(t) {
                function e() { return null !== t && t.apply(this, arguments) || this }
                return i(e, t), e.prototype.getValue = function() { return this.control.selection.inputPosition.getStyleTextPropertyValue(this.getStyleProperty()) === this.getStylePropertyValue() }, e.prototype.executeCore = function(t) {
                    var e = this;
                    this.control.history.beginTransaction();
                    var n = this.getStyleProperty(),
                        o = t.value ? a.StyleText.defaultInstace[n] : this.getStylePropertyValue();
                    return this.control.selection.getSelectedItems().forEach(function(t) { e.control.history.addAndRedo(new s.ChangeStyleTextHistoryItem(t.key, n, o)) }), this.control.selection.inputPosition.setStyleTextPropertyValue(this.getStyleProperty(), o), this.control.history.endTransaction(), !0
                }, e.prototype.getStyleObj = function(t) { return t.styleText }, e.prototype.getDefaultStyleObj = function() { return new a.StyleText }, e
            }(r.StylePropertyCommandBase);
        e.ToggleStyleTextPropertyCommand = c
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(6),
            s = function(t) {
                function e() { return null !== t && t.apply(this, arguments) || this }
                return i(e, t), e.prototype.isEnabled = function() { return t.prototype.isEnabled.call(this) && !this.control.selection.isEmpty() }, e.prototype.executeCore = function(t, e) {
                    var n = this;
                    this.control.history.beginTransaction();
                    var o = this.control.selection.getSelectedShapes(!1, !0),
                        i = this.control.selection.getSelectedConnectors(!1, !0),
                        s = r.ModelUtils.getGraphInfoByItems(this.control.model, o, i, !0),
                        a = this.createLayoutSettings();
                    return s.forEach(function(t) {
                        var e = n.createLayout(a, t.graph),
                            s = r.ModelUtils.getNonGraphItems(n.control.model, t.container, e.nodeToLayout, o, i);
                        r.ModelUtils.applyLayout(n.control.history, n.control.model, t.container, t.graph, e, s, a, n.control.settings.snapToGrid, n.control.settings.gridSize)
                    }), r.ModelUtils.tryUpdateModelSize(this.control.history, this.control.model), this.control.history.endTransaction(), !0
                }, e
            }(n(7).SimpleCommandBase);
        e.AutoLayoutCommandBase = s
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(6),
            s = function(t) {
                function e() { return null !== t && t.apply(this, arguments) || this }
                return i(e, t), e.prototype.executeCore = function(t, e) { var n = this; return this.control.history.beginTransaction(), this.createHistoryItems(e).forEach(function(t) { n.control.history.addAndRedo(t) }), r.ModelUtils.tryUpdateModelSize(this.control.history, this.control.model), this.control.history.endTransaction(), !0 }, e.prototype.getItems = function() { return null }, e
            }(n(7).SimpleCommandBase);
        e.ChangePagePropertyCommand = s
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(112),
            s = n(53),
            a = n(56),
            c = n(31),
            u = n(70),
            p = n(0),
            h = n(22),
            l = n(111),
            d = n(5),
            f = n(113),
            y = function(t) {
                function e() { return null !== t && t.apply(this, arguments) || this }
                return i(e, t), e.prototype.build = function() {
                    var t = this,
                        e = 0,
                        n = new l.GraphLayout,
                        o = new g;
                    return this.graph.getConnectedComponents().forEach(function(i) {
                        var r = f.CycleRemover.removeCycles(i),
                            s = m.getLayers(r.graph),
                            a = o.orderNodes(r.graph, s),
                            c = Object.keys(r.removedEdges).map(function(t) { return i.getEdge(t) }),
                            u = o.assignAbsCoordinates(a),
                            p = t.createInfoGraphLayout(u, r.reversedEdges, c);
                        n.extend(t.setComponentOffset(p, e)), e += t.getComponentOffset(p)
                    }), n
                }, e.prototype.createInfoGraphLayout = function(t, e, n) {
                    for (var o = this, i = new p.Point(0, 0), r = t.items, s = new u.HashSet(r.map(function(t) { return t.layer }).sort()), a = this.getAbsOffsetInfo(t.items), c = {}, d = 0, f = Number.MAX_SAFE_INTEGER || Number.MAX_VALUE, y = Number.MIN_SAFE_INTEGER || Number.MAX_VALUE, m = function(t) {
                            var e = s.item(t),
                                n = 0;
                            r.filter(function(t) { return t.layer === e }).sort(function(t, e) { return t.position - e.position }).forEach(function(t) {
                                var e = o.getDepthNodeSize(t),
                                    r = o.chooseDirectionValue(0, e),
                                    s = o.getAbsPosition(t.position, o.getBreadthNodeSize(t), a);
                                i = o.setBreadth(i, s);
                                var u = o.setDepthOffset(i, -r);
                                if (c[t.key] = u, !t.isDummy) {
                                    var p = o.settings.orientation === h.DataLayoutOrientation.Horizontal ? u.y : u.x;
                                    f = Math.min(f, p), y = Math.max(y, p + o.getBreadthNodeSize(t)), n = Math.max(n, o.getDepthNodeSize(t))
                                }
                            }), d += n, i = g.setBreadth(i, 0), i = g.setDepthOffset(i, g.getDirectionValue(n + g.settings.layerSpacing))
                        }, g = this, v = 0; v < s.length; v++) m(v);
                    d += (s.length - 1) * this.settings.layerSpacing;
                    var P = new l.GraphLayout;
                    return this.createNodesLayout(t, P, f, d, c), this.createEdgesLayout(t, P, e, n), P
                }, e.prototype.createNodesLayout = function(t, e, n, o, i) {
                    var r = this,
                        s = this.settings.orientation === h.DataLayoutOrientation.Vertical ? new p.Point(-n, this.chooseDirectionValue(0, o)) : new p.Point(this.chooseDirectionValue(0, o), -n);
                    t.items.forEach(function(t) {
                        if (!t.isDummy) {
                            var n = r.graph.getNode(t.key);
                            e.addNode(new a.NodeLayout(n, i[t.key].offset(s.x, s.y)))
                        }
                    })
                }, e.prototype.createEdgesLayout = function(t, e, n, o) {
                    var i = this.getDirectEdgeLayout(),
                        r = this.getDiffLevelEdgeLayout(!0),
                        s = this.getDiffLevelEdgeLayout(!1),
                        c = this.getSameLevelEdgeLayout(!0),
                        u = this.getSameLevelEdgeLayout(!1),
                        p = {};
                    t.edges.filter(function(t) { return !t.isDummy }).concat(o.map(function(t) { return new C(t.key, !1, t.from, t.to) })).sort(function(e, n) { return t.getNode(e.originFrom).layer - t.getNode(n.originFrom).layer || t.getNode(e.to).layer - t.getNode(n.to).layer }).forEach(function(o) {
                        var h = n[o.key],
                            l = t.getNode(h ? o.to : o.originFrom),
                            f = t.getNode(h ? o.originFrom : o.to);
                        if (f.layer - l.layer == 1) e.addEdge(new a.EdgeLayout(o.key, i.from, i.to));
                        else {
                            var y = [];
                            if (f.position - l.position >= 1) y.push(r), y.push({ from: i.from, to: r.to }), y.push({ from: r.from, to: i.to });
                            else if (f.position - l.position <= -1) y.push(s), y.push({ from: i.from, to: s.to }), y.push({ from: s.from, to: i.to });
                            else {
                                var m = l.position === f.position && 0 === f.position ? [c, u] : [u, c];
                                m.forEach(function(t) { return y.push(t) }), m.forEach(function(t) { y.push({ from: t.from, to: i.to }), y.push({ from: i.from, to: t.to }) })
                            }
                            y.push(i);
                            for (var g = 0, v = void 0; v = y[g]; g++) {
                                var P = l.key + "_" + v.from,
                                    C = f.key + "_" + v.to;
                                if (p[P] !== d.ConnectorPosition.End && p[C] !== d.ConnectorPosition.Begin) { e.addEdge(new a.EdgeLayout(o.key, v.from, v.to)), p[P] = d.ConnectorPosition.Begin, p[C] = d.ConnectorPosition.End; break }
                            }
                        }
                    })
                }, e.prototype.getDirectEdgeLayout = function() { return this.settings.orientation === h.DataLayoutOrientation.Horizontal ? this.settings.direction === h.LogicalDirectionKind.Forward ? { from: 1, to: 3 } : { from: 3, to: 1 } : this.settings.direction === h.LogicalDirectionKind.Forward ? { from: 2, to: 0 } : { from: 0, to: 2 } }, e.prototype.getDiffLevelEdgeLayout = function(t) { return this.settings.orientation === h.DataLayoutOrientation.Horizontal ? t ? { from: 2, to: 0 } : { from: 0, to: 2 } : t ? { from: 3, to: 1 } : { from: 1, to: 3 } }, e.prototype.getSameLevelEdgeLayout = function(t) { return this.settings.orientation === h.DataLayoutOrientation.Horizontal ? t ? { from: 0, to: 0 } : { from: 2, to: 2 } : t ? { from: 3, to: 3 } : { from: 1, to: 1 } }, e.prototype.getAbsOffsetInfo = function(t) {
                    var e = this,
                        n = {},
                        o = function(t, o) { void 0 === n[o] && (n[o] = e.getBreadthNodeSize(t)), n[o] = Math.max(n[o], e.getBreadthNodeSize(t)) };
                    t.forEach(function(t) {
                        var e = S(t.position);
                        o(t, e), n[e] % 1 != 0 && o(t, e + 1)
                    });
                    var i = {},
                        r = 0;
                    return Object.keys(n).sort().forEach(function(t) { i[t] = { leftOffset: r, width: n[t] }, r += n[t] + e.settings.columnSpacing }), i
                }, e.prototype.setBreadth = function(t, e) { return this.settings.orientation === h.DataLayoutOrientation.Vertical ? new p.Point(e, t.y) : new p.Point(t.x, e) }, e.prototype.setDepthOffset = function(t, e) { return this.settings.orientation === h.DataLayoutOrientation.Horizontal ? new p.Point(t.x + e, t.y) : new p.Point(t.x, t.y + e) }, e.prototype.getAbsPosition = function(t, e, n) {
                    var o = S(t),
                        i = n[o].leftOffset,
                        r = n[o].width;
                    return t % 1 == 0 ? i + (r - e) / 2 : i + r - (e - this.settings.columnSpacing) / 2
                }, e.prototype.getBreadthNodeSize = function(t) { return t.isDummy ? 0 : this.getBreadthNodeSizeCore(this.graph.getNode(t.key)) }, e.prototype.getDepthNodeSize = function(t) { return t.isDummy ? 0 : this.getDepthNodeSizeCore(this.graph.getNode(t.key)) }, e
            }(r.LayoutBuilder);
        e.SugiyamaLayoutBuilder = y;
        var m = function() {
            function t() {}
            return t.getLayers = function(t) { var e = this.getFeasibleTree(t); return this.calcNodesLayers(e) }, t.getFeasibleTree = function(t) { var e = this.initLayerAssignment(t); return t.getSpanningGraph(t.nodes[0], c.ConnectionMode.OutgoingAndIncoming, function(t) { return e[t.to] - e[t.from] }) }, t.initLayerAssignment = function(t) {
                for (var e = {}, n = 0, o = {}, i = t.nodes.filter(function(e) { return !t.getAdjacentEdges(e, c.ConnectionMode.Incoming).length }), r = function() {
                        i.forEach(function(t) { e[t] = n, o[t] = !0 }), Object.keys(o).forEach(function(n) { 0 === t.getAdjacentEdges(n, c.ConnectionMode.Outgoing).filter(function(t) { return void 0 === e[t.to] }).length && delete o[n] });
                        var r = {};
                        Object.keys(o).forEach(function(n) { t.getAdjacentEdges(n, c.ConnectionMode.Outgoing).map(function(t) { return t.to }).filter(function(n) { return void 0 === e[n] && t.getAdjacentEdges(n, c.ConnectionMode.Incoming).reduce(function(t, n) { return t && void 0 !== e[n.from] }, !0) }).forEach(function(t) { return r[t] = !0 }) }), i = Object.keys(r), n++
                    }; i.length;) r();
                return e
            }, t.calcNodesLayers = function(t) {
                var e = {},
                    n = Number.MAX_SAFE_INTEGER || Number.MAX_VALUE,
                    o = 0,
                    i = t.createIterator(c.ConnectionMode.OutgoingAndIncoming);
                for (var r in i.visitEachEdgeOnce = !1, i.onNode = function(t) { e[t.key] = o, n = Math.min(n, o) }, i.skipNode = function(t) { return void 0 !== e[t.key] }, i.skipEdge = function(t) { return void 0 !== e[t.from] && void 0 !== e[t.to] }, i.onEdge = function(t, n) { o = n ? e[t.from] + 1 : e[t.to] - 1 }, i.iterate(t.nodes[0]), e) e.hasOwnProperty(r) && (e[r] -= n);
                return e
            }, t
        }();
        e.SugiyamaLayerDistributor = m;
        var g = function() {
            function t() { this.idCounter = -1e4 }
            return t.prototype.orderNodes = function(t, e) {
                for (var n = 1, o = this.initGraphInfo(t, e), i = o.items, r = this.initOrder(i), s = this.getNodeToPositionMap(i), a = this.getCrossCount(r, o), c = !0; n < 14 && 0 != a;) {
                    r = this.getNodesOrder(r, o, c);
                    var u = this.getCrossCount(r, o);
                    u < a && (s = this.getNodeToPositionMap(o.items), a = u), c = !c, n++
                }
                return o.items.forEach(function(t) { return t.position = s[t.key] }), o
            }, t.prototype.getNodesOrder = function(t, e, n) {
                var o = this,
                    i = {},
                    r = function(r) {
                        if (!t.hasOwnProperty(r)) return "continue";
                        var a = {};
                        t[r].forEach(function(t) {
                            var i = (n ? e.getChildren(t.key) : e.getParents(t.key)).map(function(t) { return e.getNode(t).position });
                            a[t.key] = o.getNodePosition(i)
                        }), i[r] = s.sortNodes(a, e)
                    },
                    s = this;
                for (var a in t) r(a);
                return i
            }, t.prototype.sortNodes = function(t, e) { return Object.keys(t).sort(function(e, n) { return t[e] - t[n] }).map(function(t, n) { var o = e.getNode(t); return o.position = n, o }) }, t.prototype.getNodePosition = function(t) {
                if (!(t = t.sort()).length) return 0;
                var e = Math.floor(t.length / 2);
                if (2 === t.length || t.length % 2 == 1) return t[e];
                var n = t[e - 1] - t[0],
                    o = t[t.length - 1] - t[e];
                return Math.floor((t[e - 1] * o + t[e] * n) / (n + o))
            }, t.prototype.initOrder = function(t) { var e = {}; return t.forEach(function(t) { return (e[t.layer] || (e[t.layer] = [])).push(t) }), e }, t.prototype.getCrossCount = function(t, e) {
                var n = 0,
                    o = function(o) {
                        if (!t.hasOwnProperty(o)) return "continue";
                        var i = [];
                        t[o].forEach(function(t) {
                            var o = e.getChildren(t.key).map(function(t) { return e.getNode(t).position });
                            o.forEach(function(t) { n += i.filter(function(e) { return t < e }).length }), i.push.apply(i, o)
                        })
                    };
                for (var i in t) o(i);
                return n
            }, t.prototype.initGraphInfo = function(t, e) {
                var n = this,
                    o = {},
                    i = {},
                    r = [],
                    a = [];
                return t.nodes.forEach(function(t) {
                    var n = e[t];
                    void 0 === o[n] && (o[n] = 0);
                    var s = new v(t, !1, n, o[n]++);
                    i[t] = s, r.push(s)
                }), t.edges.forEach(function(t) {
                    var s = e[t.to] - e[t.from];
                    if (s > 1) {
                        for (var c = i[t.from], u = 1; u < s; u++) {
                            var p = new v(n.createDummyID(), !0, e[t.from] + u, o[e[t.from] + u]++);
                            a.push(new C(n.createDummyID(), !0, c.key, p.key)), r.push(p), c = p
                        }
                        a.push(new C(t.key, !1, c.key, i[t.to].key, i[t.from].key))
                    } else a.push(new C(t.key, !1, i[t.from].key, i[t.to].key))
                }), new s.FastGraph(r, a)
            }, t.prototype.createDummyID = function() { return "dummy_" + --this.idCounter }, t.prototype.getNodeToPositionMap = function(t) { return t.reduce(function(t, e) { return t[e.key] = e.position, t }, {}) }, t.prototype.assignAbsCoordinates = function(t) { var e = this.getAbsCoodinate(t); return new s.FastGraph(t.items.map(function(t) { return new v(t.key, t.isDummy, t.layer, e[t.key]) }), t.edges.slice(0)) }, t.prototype.getAbsCoodinate = function(t) {
                var e = this,
                    n = t.items.reduce(function(t, e) { t[e.layer] = t[e.layer] || []; var n = p.Utils.binaryIndexOf(t[e.layer], function(t) { return t.position - e.position }); return t[e.layer].splice(n < 0 ? ~n : n, 0, e), t }, {}),
                    o = [P.TopLeft, P.TopRight, P.BottomLeft, P.BottomRight].map(function(o) { return e.getPositionByMedian(t, o, n) }),
                    i = {};
                return t.items.forEach(function(t) {
                    var e = o.map(function(e) { return e[t.key] }).sort();
                    i[t.key] = (e[1] + e[2]) / 2
                }), i
            }, t.prototype.getPositionByMedian = function(t, e, n) {
                var o = t.items,
                    i = this.getNodeToPositionMap(o),
                    r = this.getMedians(t, o, e);
                return r = this.resolveMedianConflicts(t, n, r, e), this.getSortedBlocks(t, o, r, e).forEach(function(t) {
                    var e = t.reduce(function(t, e) { return i[e.key] > t ? i[e.key] : t }, -2);
                    t.forEach(function(t) {
                        var o = e - i[t.key];
                        o > 0 && n[t.layer].filter(function(e) { return e.position > t.position }).forEach(function(t) { return i[t.key] += o }), i[t.key] = e
                    })
                }), i
            }, t.prototype.getSortedBlocks = function(t, e, n, o) {
                for (var i = [], r = o === P.BottomLeft || o === P.BottomRight, s = new u.HashSet(e.slice(0).sort(function(t, e) { return r ? t.layer - e.layer : e.layer - t.layer }), function(t) { return t.key }); s.length;) {
                    var a = s.item(0),
                        c = this.getBlock(t, a, n, o);
                    i.push(c), c.forEach(function(t) { return s.remove(t) })
                }
                return i.sort(function(t, e) {
                    var n = t.reduce(function(t, e) { return e.position < t.position ? e : t }, t[0]),
                        o = e.filter(function(t) { return t.layer == n.layer })[0];
                    if (o) return n.position - o.position;
                    var i = e.reduce(function(t, e) { return e.position < t.position ? e : t }, e[0]),
                        r = t.filter(function(t) { return t.layer == i.layer })[0];
                    return r ? r.position - i.position : n.layer - i.layer
                }), i
            }, t.prototype.getBlock = function(t, e, n, o) {
                var i = [],
                    r = null;
                do { r && (e = o === P.TopLeft || o === P.TopRight ? t.getNode(r.from) : t.getNode(r.to)), i.push(e), r = n[e.key] } while (r);
                return i
            }, t.prototype.resolveMedianConflicts = function(t, e, n, o) {
                var i = this,
                    r = {},
                    s = function(s) {
                        var a = void 0,
                            c = void 0;
                        if (!e.hasOwnProperty(s)) return "continue";
                        var u = e[s];
                        o !== P.TopRight && o !== P.BottomRight || (u = u.slice(0).sort(function(t, e) { return e.position - t.position })), u.forEach(function(e) {
                            var s = n[e.key];
                            if (s) {
                                var u = o === P.TopLeft || o === P.TopRight ? s.from : s.to,
                                    p = t.getNode(u).position;
                                i.checkMedianConfict(a, c, p, o) ? r[e.key] = null : (a = void 0 === a ? p : Math.min(a, p), c = void 0 === c ? p : Math.max(c, p), r[e.key] = s)
                            } else r[e.key] = null
                        })
                    };
                for (var a in e) s(a);
                return r
            }, t.prototype.checkMedianConfict = function(t, e, n, o) { return void 0 !== t && void 0 !== e && (o === P.TopLeft || o === P.BottomLeft ? e >= n : t <= n) }, t.prototype.getMedians = function(t, e, n) {
                var o = this,
                    i = {};
                return e.forEach(function(e) {
                    var r = o.getActualAdjacentEdges(t, e, n),
                        s = o.getMedianPosition(r.length, n);
                    i[e.key] = r[s]
                }), i
            }, t.prototype.getMedianPosition = function(t, e) { if (0 === t) return -1; if (t % 2 != 0) return Math.floor(t / 2); if (e === P.TopLeft || e === P.BottomLeft) return Math.floor(t / 2) - 1; if (e === P.TopRight || e === P.BottomRight) return Math.floor(t / 2); throw new Error("Invalid Operation") }, t.prototype.getActualAdjacentEdges = function(t, e, n) { return n === P.TopLeft || n === P.TopRight ? t.getAdjacentEdges(e.key, c.ConnectionMode.Incoming).sort(function(e, n) { return t.getNode(e.from).position - t.getNode(n.from).position }) : t.getAdjacentEdges(e.key, c.ConnectionMode.Outgoing).sort(function(e, n) { return t.getNode(e.to).position - t.getNode(n.to).position }) }, t
        }();
        e.SugiyamaNodesOrderer = g;
        var v = function() {
            function t(t, e, n, o) { this.key = t, this.isDummy = e, this.layer = n, this.position = o }
            return t.prototype.getHashCode = function() { return this.key.toString() }, t
        }();
        e.NodeOnLayer = v;
        var P, C = function() {
            function t(t, e, n, o, i) { this.key = t, this.isDummy = e, this.from = n, this.to = o, this._originFrom = i }
            return t.prototype.getHashCode = function() { return this.from + "-" + this.to }, Object.defineProperty(t.prototype, "originFrom", { get: function() { return void 0 !== this._originFrom ? this._originFrom : this.from }, enumerable: !0, configurable: !0 }), t
        }();

        function S(t) { return Math.trunc ? Math.trunc(t) : isFinite(t) ? t - t % 1 || (t < 0 ? -0 : 0 === t ? t : 0) : t }
        e.EdgeOnLayer = C,
            function(t) { t[t.TopLeft = 0] = "TopLeft", t[t.TopRight = 1] = "TopRight", t[t.BottomLeft = 2] = "BottomLeft", t[t.BottomRight = 3] = "BottomRight" }(P || (P = {}))
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = n(23),
            i = n(17),
            r = function() {
                function t() {}
                return t.onEventAttachingToDocument = function(e, n) { return !o.Browser.MacOSMobilePlatform || !t.isTouchEventName(e) || (t.documentTouchHandlers[e] || (t.documentTouchHandlers[e] = []), t.documentTouchHandlers[e].push(n), t.documentEventAttachingAllowed) }, t.isTouchEventName = function(t) { return o.Browser.WebKitTouchUI && (t.indexOf("touch") > -1 || t.indexOf("gesture") > -1) }, t.isTouchEvent = function(t) { return !!t && (o.Browser.WebKitTouchUI && i.IsExists(t.changedTouches)) }, t.getEventX = function(t) { return o.Browser.IE ? t.pageX : t.changedTouches[0].pageX }, t.getEventY = function(t) { return o.Browser.IE ? t.pageY : t.changedTouches[0].pageY }, t.touchMouseDownEventName = o.Browser.WebKitTouchUI ? "touchstart" : o.Browser.Edge && o.Browser.MSTouchUI && window.PointerEvent ? "pointerdown" : "mousedown", t.touchMouseUpEventName = o.Browser.WebKitTouchUI ? "touchend" : o.Browser.Edge && o.Browser.MSTouchUI && window.PointerEvent ? "pointerup" : "mouseup", t.touchMouseMoveEventName = o.Browser.WebKitTouchUI ? "touchmove" : o.Browser.Edge && o.Browser.MSTouchUI && window.PointerEvent ? "pointermove" : "mousemove", t.msTouchDraggableClassName = "dxMSTouchDraggable", t.documentTouchHandlers = {}, t.documentEventAttachingAllowed = !0, t
            }();
        e.TouchUIHelper = r
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = function() { return function(t, e) { this.id = t, this.key = e } }();
        e.NativeItem = r;
        var s = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this }
            return i(e, t), e
        }(r);
        e.NativeShape = s;
        var a = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this }
            return i(e, t), e
        }(r);
        e.NativeConnector = a
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(13),
            s = n(12),
            a = n(18),
            c = n(15),
            u = function(t) {
                function e(e, n, o, i, r, s, a, c, u, p) { var h = t.call(this, r, "", a, p) || this; return h.x = e, h.y = n, h.text = o, h.width = i, h.reverseTextAhchor = s, h.rotated = u, h.filterId = c, h.textSegmens = h.text.split("\n").filter(function(t) { return t }), h }
                return i(e, t), e.prototype.createMainElement = function() { return document.createElementNS(s.svgNS, "text") }, e.prototype.applyElementProperties = function(e) { this.setUnitAttribute(e, "x", this.x), this.setUnitAttribute(e, "y", this.y), this.filterId && e.setAttribute("filter", c.RenderUtils.getUrlPathById(this.filterId)), t.prototype.applyElementProperties.call(this, e), e.getAttribute("appliedText") !== this.text || e.getAttribute("appliedWidth") !== (this.width && this.width.toString()) ? (this.createTSpanElements(e), e.setAttribute("appliedText", this.text), e.setAttribute("appliedWidth", this.width && this.width.toString())) : this.prepareTSpanElements(e), this.rotated && (e.setAttribute("class", "rotated"), e.style.setProperty("transform-origin", ("number" == typeof this.x ? r.UnitConverter.twipsToPixels(this.x) + "px" : this.x) + " " + ("number" == typeof this.y ? r.UnitConverter.twipsToPixels(this.y) + "px" : this.y))) }, e.prototype.createTSpanElements = function(t) {
                    var e = this;
                    c.RenderUtils.removeContent(t), this.textSegmens.forEach(function(n, o) {
                        var i = e.createTSpanElement(t);
                        if (e.width)
                            for (var r = n.split(" "), s = "", a = "", u = 0; u < r.length; u++) { s += (s.length ? " " : "") + r[u], i.textContent = s, c.RenderUtils.getSvgTextRectangle(t).width >= e.width && "" !== a ? (i.textContent = a, a = s = r[u], (i = e.createTSpanElement(t)).textContent = s) : a = s } else i.textContent = n
                    });
                    var n = t.firstChild;
                    n && this.prepareFirstTSpanElement(n, t.childNodes.length)
                }, e.prototype.createTSpanElement = function(t) { var e = document.createElementNS(s.svgNS, "tspan"); return t.appendChild(e), this.prepareTSpanElement(e), e }, e.prototype.prepareTSpanElements = function(t) {
                    for (var e = 0; e < t.childNodes.length; e++) {
                        var n = t.childNodes[e];
                        this.prepareTSpanElement(n)
                    }
                    var o = t.firstChild;
                    o && this.prepareFirstTSpanElement(o, t.childNodes.length)
                }, e.prototype.prepareTSpanElement = function(t) { this.setUnitAttribute(t, "x", this.x), t.setAttribute("dy", "1.05em") }, e.prototype.prepareFirstTSpanElement = function(t, n) {
                    var o = -(n - 1) / 2 + e.baselineCorrection;
                    t.setAttribute("dy", o.toFixed(2) + "em")
                }, e.prototype.applyElementStyleProperties = function(t) { this.applyElementStylePropertiesCore(t, this.reverseTextAhchor) }, e.baselineCorrection = .35, e
            }(a.SvgPrimitive);
        e.TextPrimitive = u
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(9),
            s = n(0),
            a = n(29),
            c = n(4);
        e.ArrowVerticalTriangleHeightParameterName = "th", e.ArrowVerticalLineWidthParameterName = "lw";
        var u = function(t) {
            function n(e) { return t.call(this, e, "", new s.Size(.375 * r.ShapeDefaultDimension, r.ShapeDefaultDimension)) || this }
            return i(n, t), n.prototype.createParameters = function(t) { t.addRange([new a.ShapeParameter(e.ArrowVerticalTriangleHeightParameterName, Math.sqrt(Math.pow(this.defaultSize.width, 2) - Math.pow(this.defaultSize.width / 2, 2))), new a.ShapeParameter(e.ArrowVerticalLineWidthParameterName, this.defaultSize.width / 3)]) }, n.prototype.normalizeParameters = function(t, n) { this.changeParameterValue(n, e.ArrowVerticalTriangleHeightParameterName, function(e) { return Math.max(0, Math.min(t.size.height, e.value)) }), this.changeParameterValue(n, e.ArrowVerticalLineWidthParameterName, function(e) { return Math.max(0, Math.min(t.size.width, e.value)) }) }, n.prototype.processConnectionPoint = function(t, n) {
                var o = (t.size.width - t.parameters.get(e.ArrowVerticalLineWidthParameterName).value) / 2,
                    i = t.getConnectionPointSide(n);
                i === c.ConnectionPointSide.East ? n.x -= o : i === c.ConnectionPointSide.West && (n.x += o)
            }, n
        }(r.ShapeDescription);
        e.ArrowVerticalShapeDescription = u
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(9),
            s = n(0),
            a = n(29),
            c = n(4);
        e.ArrowVerticalTriangleWidthParameterName = "tw", e.ArrowVerticalLineHeightParameterName = "lh";
        var u = function(t) {
            function n(e) { return t.call(this, e, "", new s.Size(r.ShapeDefaultDimension, .375 * r.ShapeDefaultDimension)) || this }
            return i(n, t), n.prototype.createParameters = function(t) { t.addRange([new a.ShapeParameter(e.ArrowVerticalTriangleWidthParameterName, Math.sqrt(Math.pow(this.defaultSize.height, 2) - Math.pow(this.defaultSize.height / 2, 2))), new a.ShapeParameter(e.ArrowVerticalLineHeightParameterName, this.defaultSize.height / 3)]) }, n.prototype.normalizeParameters = function(t, n) { this.changeParameterValue(n, e.ArrowVerticalTriangleWidthParameterName, function(e) { return Math.max(0, Math.min(t.size.width, e.value)) }), this.changeParameterValue(n, e.ArrowVerticalLineHeightParameterName, function(e) { return Math.max(0, Math.min(t.size.height, e.value)) }) }, n.prototype.processConnectionPoint = function(t, n) {
                var o = (t.size.height - t.parameters.get(e.ArrowVerticalLineHeightParameterName).value) / 2,
                    i = t.getConnectionPointSide(n);
                i === c.ConnectionPointSide.North ? n.y += o : i === c.ConnectionPointSide.South && (n.y -= o)
            }, n
        }(r.ShapeDescription);
        e.ArrowHorizontalShapeDescription = u
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(9),
            s = n(0),
            a = n(42),
            c = n(1),
            u = function(t) {
                function e(e, n) { return void 0 === e && (e = "Ellipse"), void 0 === n && (n = ""), t.call(this, e, n, new s.Size(r.ShapeDefaultDimension, .75 * r.ShapeDefaultDimension)) || this }
                return i(e, t), Object.defineProperty(e.prototype, "key", { get: function() { return c.ShapeTypes.Ellipse }, enumerable: !0, configurable: !0 }), e.prototype.createShapePrimitives = function(t) {
                    var e = t.rectangle,
                        n = e.width,
                        o = e.height,
                        i = e.center,
                        r = i.x,
                        s = i.y;
                    return [new a.EllipsePrimitive(r, s, n / 2, o / 2, t.style)]
                }, e
            }(r.ShapeDescription);
        e.EllipseShapeDescription = u
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(9),
            s = function(t) {
                function e(e, n) { var o = t.call(this, e, n) || this; return o.defaultSize.height = o.calculateHeight(r.ShapeDefaultDimension), o }
                return i(e, t), Object.defineProperty(e.prototype, "angle", { get: function() { return Math.PI * (this.angleCount - 2) / this.angleCount }, enumerable: !0, configurable: !0 }), e
            }(r.ShapeDescription);
        e.PolygonShapeDescription = s
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(9),
            s = n(0),
            a = n(45),
            c = n(189),
            u = n(8),
            p = n(2),
            h = n(28),
            l = n(99),
            d = function(t) {
                function e(e, n, o) { return void 0 === e && (e = "Card Base"), void 0 === n && (n = ""), void 0 === o && (o = new s.Size(r.ShapeDefaultDimension, 26 / 46 * r.ShapeDefaultDimension)), t.call(this, e, n, o) || this }
                return i(e, t), e.getTextMargins = function() { return a.ShapeWithImageDescription.getImageMargins() }, e.prototype.createShapePrimitives = function(t, e) {
                    var n = t.rectangle,
                        o = n.left,
                        i = n.top,
                        r = n.width,
                        s = n.height;
                    return [new c.RoundedRectanglePrimitive(o, i, r, s, e ? 30 : 60, e ? 30 : 60, t.style)]
                }, e.prototype.createImagePlaceholder = function(t) { return [new c.RoundedRectanglePrimitive(t.left, t.top, t.width, t.height, u.UnitConverter.pixelsToTwips(2), u.UnitConverter.pixelsToTwips(2), void 0, a.SHAPE_IMAGE_CLASSNAMES.IMAGE_PLACEHOLDER)] }, e.prototype.createEmptyImagePrimitive = function(t) { return l.ShapeImageIndicator.createUserIconPrimitives(t.left, t.top, this.defaultIconSize, u.UnitConverter.pixelsToTwips(1), a.SHAPE_IMAGE_CLASSNAMES.USER_PIC) }, e.prototype.createWarningPrimitive = function(t) { return l.ShapeImageIndicator.createWarningIconPrimitives(t.left + this.defaultIconSize / 2, t.top + this.defaultIconSize / 2, this.defaultIconSize / 2, a.SHAPE_IMAGE_CLASSNAMES.WARNING_MARK) }, e.prototype.getTextRectangle = function(t, n) {
                    var o = t.clone(),
                        i = this.getTextBlockOffset(t);
                    return i.left > 0 && (o.position.x = o.left + i.left + e.getTextMargins()), i.top > 0 && (o.position.y = o.top + i.top + e.getTextMargins()), o.size.width = o.width - i.right - i.left - 2 * e.getTextMargins(), o.size.height = o.height - i.bottom - i.top - 2 * e.getTextMargins(), o.position.x += e.getTextMargins(), o.position.y += e.getTextMargins(), (i.left > 0 || i.right > 0) && (o.size.width = Math.max(o.width - e.getTextMargins(), 0)), (i.top > 0 || i.bottom > 0) && (o.size.height = Math.max(o.height - e.getTextMargins(), 0)), o
                }, e.prototype.createTextPrimitives = function(e, n) { return n ? this.createGraphicalTextRepresentation(e.rectangle) : t.prototype.createTextPrimitives.call(this, e, n) }, e.prototype.createGraphicalTextRepresentation = function(t) {
                    var e = s.Rectangle.create(0, 0, 0, 0),
                        n = this.getTextBlockOffset(t, !0);
                    if (n.left > 0 || n.right > 0) {
                        var o = n.left > 0 ? t.width / 2 : 0;
                        e.position.x = t.left + o + 1.5 * a.ShapeWithImageDescription.getImageMargins(!0), e.position.y = t.top + 2.5 * a.ShapeWithImageDescription.getImageMargins(!0), e.size.width = (n.left || n.right) - 2 * a.ShapeWithImageDescription.getImageMargins(!0), e.size.height = t.height - 4 * a.ShapeWithImageDescription.getImageMargins(!0)
                    } else {
                        var i = n.top > 0 ? t.height / 2 : 0;
                        e.position.x = t.left + t.width / 2 - (t.width / 2 + 1) / 2, e.position.y = t.top + i + 1.5 * a.ShapeWithImageDescription.getImageMargins(!0), e.size.width = t.width / 2 + 1, e.size.height = (n.top || n.bottom) - 2 * a.ShapeWithImageDescription.getImageMargins(!0)
                    }
                    return this.createTextRepresentationPrimitives(e)
                }, e.prototype.createTextRepresentationPrimitives = function(t) { var e = u.UnitConverter.pixelsToTwips(u.UnitConverter.twipsToPixels(t.height / 3)); return [new h.GroupPrimitive([new p.PathPrimitive([new p.PathPrimitiveMoveToCommand(t.left, t.top), new p.PathPrimitiveLineToCommand(t.left + t.width, t.top)]), new p.PathPrimitive([new p.PathPrimitiveMoveToCommand(t.left, t.top + e), new p.PathPrimitiveLineToCommand(t.left + t.width, t.top + e)]), new p.PathPrimitive([new p.PathPrimitiveMoveToCommand(t.left, t.top + 2 * e), new p.PathPrimitiveLineToCommand(t.left + .66 * t.width, t.top + 2 * e)])], "dxdi-shape-text")] }, e
            }(a.ShapeWithImageDescription);
        e.CardBaseDescription = d
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = function() {
            function t(t, e) {
                void 0 === t && (t = []), void 0 === e && (e = function(t) { return t.toString() });
                var n = this;
                this.items = [], this.map = {}, this.getHashCode = e, t.forEach(function(t) { return n.tryPush(t) })
            }
            return t.prototype.tryPush = function(t) { var e = this.getHashCode(t); return void 0 === this.map[e] && (this.map[e] = this.items.push(t) - 1, !0) }, t.prototype.contains = function(t) { return void 0 !== this.map[this.getHashCode(t)] }, t.prototype.forEach = function(t) { this.items.forEach(t) }, t.prototype.filter = function(t) { return this.items.filter(t) }, t.prototype.list = function() { return this.items.slice(0) }, t.prototype.item = function(t) { return this.items[t] }, t.prototype.first = function() { return this.items[0] }, t.prototype.remove = function(t) {
                var e = this.getHashCode(t),
                    n = this.map[e];
                if ("number" != typeof n) throw "Item not found";
                delete this.map[e], this.items.splice(n, 1);
                for (var o = n; o < this.items.length; o++) this.map[this.getHashCode(this.items[o])]--
            }, Object.defineProperty(t.prototype, "length", { get: function() { return this.items.length }, enumerable: !0, configurable: !0 }), t
        }();
        e.HashSet = o
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = function() {
            function t() {}
            return t.parseJSON = function(t) { if (!t || "" === t) return {}; try { return JSON.parse(t) } catch (t) { return {} } }, t.createDocument = function(t) { return (new DOMParser).parseFromString(t, "application/xml") }, t
        }();
        e.ImportUtils = o
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(108),
            s = n(36),
            a = n(27),
            c = function(t) {
                function e() { return null !== t && t.apply(this, arguments) || this }
                return i(e, t), e.prototype.getValue = function() { return this.control.selection.inputPosition.getStyleTextPropertyValue(this.getStyleProperty()) }, e.prototype.getStyleObj = function(t) { return t.styleText }, e.prototype.getDefaultStyleObj = function() { return new a.StyleText }, e.prototype.createHistoryItem = function(t, e, n) { return new s.ChangeStyleTextHistoryItem(t.key, e, n) }, e.prototype.updateInputPosition = function(t) { this.control.selection.inputPosition.setStyleTextPropertyValue(this.getStyleProperty(), t) }, e
            }(r.ChangeStylePropertyCommandBase);
        e.ChangeStyleTextPropertyCommand = c
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(111),
            s = n(216),
            a = n(56),
            c = n(0),
            u = n(112),
            p = n(31),
            h = n(4),
            l = n(22),
            d = n(113),
            f = function(t) {
                function e() { return null !== t && t.apply(this, arguments) || this }
                return i(e, t), e.prototype.build = function() {
                    var t = this,
                        e = new r.GraphLayout,
                        n = 0;
                    return this.graph.getConnectedComponents().forEach(function(o) {
                        var i = d.CycleRemover.removeCycles(o),
                            r = s.Tree.createSpanningTree(i.graph),
                            c = Object.keys(i.removedEdges).map(function(t) { return o.getEdge(t) }),
                            u = t.processTree(r, i.reversedEdges, c);
                        i.graph.edges.filter(function(t) { return !(t.key in u.edgeToPosition) }).concat(c).forEach(function(n) {
                            var o = t.isVertical() ? h.ConnectionPointSide.East : h.ConnectionPointSide.South,
                                i = t.isVertical() ? h.ConnectionPointSide.West : h.ConnectionPointSide.North;
                            e.addEdge(new a.EdgeLayout(n.key, o, i))
                        }), e.extend(t.setComponentOffset(u, n)), n += t.getComponentOffset(u)
                    }), e
                }, e.prototype.processTree = function(t, e, n) {
                    var o = new r.GraphLayout,
                        i = new a.NodeLayout(t.root, new c.Point(t.root.margin.left, t.root.margin.top));
                    return o.addNode(i), this.processChildren(i, t, o, 0, e, n), this.settings.alignment === l.Alignment.Center && this.processParents(o, i, t), o
                }, e.prototype.processChildren = function(t, e, n, o, i, r) {
                    for (var s, u = this, l = e.getChildren(t.info), d = this.graph.getAdjacentEdges(t.key, p.ConnectionMode.Outgoing), f = o, y = function(o, p) {
                            var l = m.isVertical() ? o.margin.left : o.margin.top;
                            if (s) {
                                var y = m.getChangingCoordinateForLayer(s.position) + m.getSizeMeasurement(s.info.size),
                                    g = f - y;
                                l = Math.max(0, l - g), l += m.settings.columnSpacing
                            }
                            var v = m.isVertical() ? Math.max(t.info.margin.bottom, o.margin.top) : Math.max(t.info.margin.right, o.margin.left),
                                P = m.isVertical() ? new c.Point(f + l, t.position.y + t.info.size.height + v + m.settings.layerSpacing) : new c.Point(t.position.x + t.info.size.width + v + m.settings.layerSpacing, f + l),
                                C = new a.NodeLayout(o, P),
                                S = m.getChangingCoordinateForLayer(C.position) + m.getSizeMeasurement(C.info.size),
                                _ = m.processChildren(C, e, n, f, i, r);
                            f = Math.max(S, _), n.addNode(C), d.filter(function(t) { return t.to === o.key }).forEach(function(t) {
                                var e = u.isVertical() ? h.ConnectionPointSide.South : h.ConnectionPointSide.East,
                                    o = u.isVertical() ? h.ConnectionPointSide.North : h.ConnectionPointSide.West;
                                i[t.key] ? n.addEdge(new a.EdgeLayout(t.key, o, e)) : n.addEdge(new a.EdgeLayout(t.key, e, o))
                            }), s = C
                        }, m = this, g = void 0, v = 0; g = l[v]; v++) y(g);
                    return f + this.settings.subTreeColumnSpacing
                }, e.prototype.processParents = function(t, e, n, o) {
                    for (var i = n.getChildren(e.info), r = void 0, s = i.length - 1; r = i[s]; s--) this.processParents(t, t.nodeToLayout[r.key], n, i[s + 1]);
                    if (i.length) {
                        var a = this.getChangingCoordinateForLayer(t.nodeToLayout[i[0].key].position),
                            c = a + (this.getRectangleDistantEdge(t.nodeToLayout[i[i.length - 1].key].rectangle) - a) / 2 - this.getSizeMeasurement(e.info.size) / 2;
                        c = Math.max(this.getChangingCoordinateForLayer(e.position), this.correctByMargin(c, e, o && t.nodeToLayout[o.key])), this.isVertical() ? e.position.x = c : e.position.y = c
                    }
                }, e.prototype.getChangingCoordinateForLayer = function(t) { return this.isVertical() ? t.x : t.y }, e.prototype.getRectangleDistantEdge = function(t) { return this.isVertical() ? t.right : t.bottom }, e.prototype.getSizeMeasurement = function(t) { return this.isVertical() ? t.width : t.height }, e.prototype.correctByMargin = function(t, e, n) {
                    if (n) {
                        var o = this.isVertical() ? Math.max(n.info.margin.left, e.info.margin.right) : Math.max(n.info.margin.top, e.info.margin.bottom);
                        t = Math.min(t, this.getChangingCoordinateForLayer(n.position) - o - this.getSizeMeasurement(e.info.size))
                    }
                    return t
                }, e.prototype.isVertical = function() { return this.settings.orientation === l.DataLayoutOrientation.Vertical }, e
            }(u.LayoutBuilder);
        e.TreeLayoutBuilder = f
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(82),
            s = n(12),
            a = n(224),
            c = n(47),
            u = n(57),
            p = function(t) {
                function e(e) { var n = t.call(this, e) || this; return n.exporter = new u.Exporter, n }
                return i(e, t), e.prototype.executeCore = function(t, e) {
                    var n = this;
                    try {
                        var o = this.getExportManager();
                        this.getExportFunc()(this.control.model.size.clone(), this.control.model.pageColor, o, function(t) { e(t, n.getExtension()), n.tryDispose() })
                    } catch (t) { throw this.tryDispose(), t }
                    return !0
                }, e.prototype.getExportManager = function() { var t = this.control.render && this.control.render.items || this.createItemsManager(); return this.exportManager || (this.exportManager = new a.CanvasExportManager(t.itemsContainer)) }, e.prototype.createItemsManager = function() { this.svgElement = s.RenderManager.createSvgElement(document.body, !0); var t = new r.CanvasItemsManager(this.svgElement, 1); return this.control.modelManipulator.onModelChanged.add(t), this.control.modelManipulator.onLoad(), t }, e.prototype.tryDispose = function() { this.svgElement && (document.body.removeChild(this.svgElement), delete this.svgElement, this.exportManager = void 0) }, e
            }(c.ExportImportCommandBase);
        e.ExportImageCommand = p
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this }
            return i(e, t), e.prototype.setClipboardData = function(t) { this.control.render && this.control.render.input.setClipboardData(t), e.clipboardData = t }, e.prototype.getClipboardData = function(t) { this.control.render && this.isPasteSupportedByBrowser() ? this.control.render.input.getClipboardData(t) : t(e.clipboardData) }, e.prototype.isPasteSupportedByBrowser = function() { return this.control.render && this.control.render.input.isPasteSupportedByBrowser() }, e
        }(n(7).SimpleCommandBase);
        e.ClipboardCommand = r
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = function(t) {
            function e(e, n) { var o = t.call(this) || this; return o.itemKey = e.key, o.zIndex = n, o }
            return i(e, t), e.prototype.redo = function(t) {
                var e = t.model.findItem(this.itemKey);
                this.oldZIndex = e.zIndex, t.changeZIndex(e, this.zIndex)
            }, e.prototype.undo = function(t) {
                var e = t.model.findItem(this.itemKey);
                t.changeZIndex(e, this.oldZIndex)
            }, e
        }(n(3).HistoryItem);
        e.ChangeZindexHistoryItem = r
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(117),
            s = function(t) {
                function e() { return null !== t && t.apply(this, arguments) || this }
                return i(e, t), e.prototype.isEnabled = function() { var e = this.getSelectedShape(); return t.prototype.isEnabled.call(this) && e && !e.locked && e.enableImage && e.allowEditImage }, e.prototype.getValue = function() { var t = this.getSelectedShape(); return t ? t.image.exportUrl : void 0 }, e.prototype.getSelectedShape = function() { var t = this.control.selection.getSelectedShapes(!0); return 1 === t.length ? t[0] : void 0 }, e.prototype.executeCore = function(t, e) { this.control.history.beginTransaction(); var n = this.control.selection.getSelectedShapes(!1); return this.control.history.addAndRedo(new r.ChangeShapeImageHistoryItem(n[0], e)), this.control.history.endTransaction(), !0 }, e
            }(n(7).SimpleCommandBase);
        e.EditShapeImageCommandBase = s
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(6),
            s = n(121),
            a = n(16),
            c = function(t) {
                function e(e, n, o, i, r, s) { var a = t.call(this, e, n, o, i, r) || this; return a.moveStartPoint = s, a }
                return i(e, t), e.prototype.onMouseDown = function(e) {
                    var n = this.moveStartPoint ? e.modelPoint.x - this.moveStartPoint.x : 0,
                        o = this.moveStartPoint ? e.modelPoint.y - this.moveStartPoint.y : 0;
                    r.ModelUtils.cloneSelectionToOffset(this.history, this.model, this.selection, n, o), t.prototype.onMouseDown.call(this, e)
                }, e.isMoveClonedShapeEvent = function(t) { return t.modifiers & a.ModifierKey.Ctrl && t.modifiers & a.ModifierKey.Shift }, e
            }(s.MouseHandlerMoveShapeStateBase);
        e.MouseHandlerMoveClonedShapeState = c
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = { stroke: !0, fill: !0 };
        e.isColorProperty = function(t) { return o[t] }
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(12),
            s = function(t) {
                function e(e, n, o, i, r, s, a, c) { var u = t.call(this, r, s, a, c) || this; return u.x1 = e, u.y1 = n, u.x2 = o, u.y2 = i, u }
                return i(e, t), e.prototype.createMainElement = function() { return document.createElementNS(r.svgNS, "line") }, e.prototype.applyElementProperties = function(e) { this.setUnitAttribute(e, "x1", this.x1), this.setUnitAttribute(e, "y1", this.y1), this.setUnitAttribute(e, "x2", this.x2), this.setUnitAttribute(e, "y2", this.y2), t.prototype.applyElementProperties.call(this, e) }, e
            }(n(18).SvgPrimitive);
        e.LinePrimitive = s
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = n(17),
            i = function() {
                function t() {}
                return t.ArrayInsert = function(t, e, n) {
                    if (0 <= n && n < t.length) {
                        for (var o = t.length; o > n; o--) t[o] = t[o - 1];
                        t[n] = e
                    } else t.push(e)
                }, t.ArrayRemove = function(e, n) {
                    var o = t.ArrayIndexOf(e, n);
                    o > -1 && t.ArrayRemoveAt(e, o)
                }, t.ArrayRemoveAt = function(t, e) {
                    if (e >= 0 && e < t.length) {
                        for (var n = e; n < t.length - 1; n++) t[n] = t[n + 1];
                        t.pop()
                    }
                }, t.ArrayClear = function(t) { for (; t.length > 0;) t.pop() }, t.ArrayIndexOf = function(t, e, n) {
                    if (n) {
                        for (o = 0; o < t.length; o++)
                            if (n(t[o], e)) return o
                    } else
                        for (var o = 0; o < t.length; o++)
                            if (t[o] == e) return o; return -1
                }, t.ArrayContains = function(e, n) { return t.ArrayIndexOf(e, n) >= 0 }, t.ArrayEqual = function(t, e) {
                    var n = t.length;
                    if (n != e.length) return !1;
                    for (var o = 0; o < n; o++)
                        if (t[o] != e[o]) return !1;
                    return !0
                }, t.ArraySame = function(e, n) { return e.length === n.length && e.every(function(e) { return t.ArrayContains(n, e) }) }, t.ArrayGetIntegerEdgeValues = function(e) { var n = t.CollectionToArray(e); return t.ArrayIntegerAscendingSort(n), { start: n[0], end: n[n.length - 1] } }, t.ArrayIntegerAscendingSort = function(e) { t.ArrayIntegerSort(e, !1) }, t.ArrayIntegerSort = function(t, e) { t.sort(function(t, n) { var o = 0; return t > n ? o = 1 : t < n && (o = -1), e && (o *= -1), o }) }, t.CollectionsUnionToArray = function(t, e) { for (var n = [], o = t.length, i = e.length, r = 0; r < o + i; r++) r < o ? n.push(t[r]) : n.push(e[r - o]); return n }, t.CollectionToArray = function(t) { for (var e = [], n = 0; n < t.length; n++) e.push(t[n]); return e }, t.CreateHashTableFromArray = function(t) { for (var e = [], n = 0; n < t.length; n++) e[t[n]] = 1; return e }, t.CreateIndexHashTableFromArray = function(t) { for (var e = [], n = 0; n < t.length; n++) e[t[n]] = n; return e }, t.ArrayToHash = function(t, e, n) {
                    return t instanceof Array ? t.reduce(function(t, o, i) {
                        var r = e(o, i),
                            s = n(o, i);
                        return t[r] = s, t
                    }, {}) : {}
                }, t.Sum = function(t, e) { return t instanceof Array ? t.reduce(function(t, n) { var i = e ? e(n) : n; return o.IsNumber(i) || (i = 0), t + i }, 0) : 0 }, t.Min = function(e, n) { return t.CalculateArrayMinMax(e, n, !1) }, t.Max = function(e, n) { return t.CalculateArrayMinMax(e, n, !0) }, t.NearestLeftBinarySearchComparer = function(t, e, n) {
                    var o = t[e],
                        i = o < n;
                    return i && e == t.length - 1 || i && t[e + 1] >= n ? 0 : o < n ? -1 : 1
                }, t.ArrayBinarySearch = function(e, n, i, r, s) {
                    i || (i = t.defaultBinarySearchComparer), o.IsExists(r) || (r = 0), o.IsExists(s) || (s = e.length - r);
                    for (var a = r + s - 1; r <= a;) {
                        var c = r + (a - r >> 1),
                            u = i(e, c, n);
                        if (0 == u) return c;
                        u < 0 ? r = c + 1 : a = c - 1
                    }
                    return -(r + 1)
                }, t.ArrayFlatten = function(t) { return [].concat.apply([], t) }, t.GetDistinctArray = function(e) { for (var n = [], o = 0; o < e.length; o++) { var i = e[o]; - 1 == t.ArrayIndexOf(n, i) && n.push(i) } return n }, t.ForEach = function(t, e) {
                    if (Array.prototype.forEach) Array.prototype.forEach.call(t, e);
                    else
                        for (var n = 0, o = t.length; n < o; n++) e(t[n], n, t)
                }, t.MergeHashTables = function(t, e) { if (!e || "string" == typeof e) return t; for (var n in t || (t = {}), e) !n || n in t || (t[n] = e[n]); return t }, t.Range = function(t, e) { return (t = parseInt(t) || 0) < 0 && (t = 0), (e = parseInt(e) || 0) < 0 && (e = 0), Array.apply(null, Array(t)).map(function(t, n) { return e + n }) }, t.CalculateArrayMinMax = function(t, e, n) { if (!(t instanceof Array)) return 0; var i = n ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY; return t.reduce(function(t, r) { var s = e ? e(r) : r; return o.IsNumber(s) || (s = i), (n ? Math.max : Math.min)(s, t) }, i) }, t.defaultBinarySearchComparer = function(t, e, n) { var o = t[e]; return o == n ? 0 : o < n ? -1 : 1 }, t
            }();
        e.Data = i
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(83),
            s = n(10),
            a = n(28),
            c = n(15),
            u = n(33),
            p = n(11),
            h = n(5),
            l = function(t) {
                function e(e, n) { var o = t.call(this, n) || this; return o.itemSelectorGroupContainers = {}, o.itemSelectorElements = {}, o.itemGroupContainers = {}, o.itemElements = {}, o.itemChildElements = {}, o.pendingChanges = {}, o.updatesLock = 0, o.initializeContainerElements(e), o }
                return i(e, t), e.prototype.initializeContainerElements = function(t) { this.itemSelectorsContainer = this.createAndChangePrimitiveElement(new a.GroupPrimitive([], null), t), this.itemsContainer = this.createAndChangePrimitiveElement(new a.GroupPrimitive([], null), t) }, e.prototype.clear = function() { c.RenderUtils.removeContent(this.itemSelectorsContainer), c.RenderUtils.removeContent(this.itemsContainer), this.itemSelectorGroupContainers = {}, this.itemSelectorElements = {}, this.itemGroupContainers = {}, this.itemElements = {}, this.itemChildElements = {} }, e.prototype.beginUpdate = function() { this.updatesLock++ }, e.prototype.endUpdate = function() { this.updatesLock--, 0 === this.updatesLock && this.applyPendingChanges() }, e.prototype.getPendingChanges = function() { var t = this; return Object.keys(this.pendingChanges).map(function(e) { return t.pendingChanges[e] }) }, e.prototype.applyPendingChanges = function() {
                    for (var t = this.getPendingChanges(); t.length;) { var e = t.length; if (this.applyPendingChangesCore(t), e === (t = this.getPendingChanges()).length) break }
                    this.pendingChanges = {}
                }, e.prototype.applyPendingChangesCore = function(t) {
                    var e = this;
                    t.forEach(function(t) { e.applyChange(t) && delete e.pendingChanges[t.item.key] })
                }, e.prototype.applyChange = function(t) { var e = t.item; return !!this.getItemParent(e.zIndex, e.container && e.container.key) && (e instanceof p.Shape ? this.applyShapeChange(e, t.type) : e instanceof h.Connector && this.applyConnectorChange(e, t.type), !0) }, e.prototype.postponeChanges = function(t) {
                    var e = this;
                    t.forEach(function(t) { e.pendingChanges[t.key] ? t.type === r.ItemChangeType.Create || t.type === r.ItemChangeType.Remove ? e.pendingChanges[t.key] = t : t.type === r.ItemChangeType.UpdateStructure && e.pendingChanges[t.key].type === r.ItemChangeType.Update && (e.pendingChanges[t.key] = t) : e.pendingChanges[t.key] = t })
                }, e.prototype.notifyModelChanged = function(t) {
                    var e = this;
                    0 === this.updatesLock ? t.forEach(function(t) { e.applyChange(t) }) : this.postponeChanges(t)
                }, e.prototype.notifyPageColorChanged = function(t) {}, e.prototype.notifyPageSizeChanged = function(t, e) {}, e.prototype.notifyDragStart = function(t) {
                    var e = this;
                    t.forEach(function(t) { e.itemElements[t] && (e.itemElements[t].style.pointerEvents = "none"), e.itemChildElements[t] && (e.itemChildElements[t].style.pointerEvents = "none"), e.itemSelectorElements[t] && (e.itemSelectorElements[t].style.display = "none") })
                }, e.prototype.notifyDragEnd = function(t) {
                    var e = this;
                    t.forEach(function(t) { e.itemElements[t] && (e.itemElements[t].style.pointerEvents = ""), e.itemChildElements[t] && (e.itemChildElements[t].style.pointerEvents = ""), e.itemSelectorElements[t] && (e.itemSelectorElements[t].style.display = "") })
                }, e.prototype.notifyDragScrollStart = function() {}, e.prototype.notifyDragScrollEnd = function() {}, e.prototype.notifyTextInputStart = function(t, e, n, o) {
                    var i = this.itemElements[t.key],
                        r = i.getAttribute("class");
                    i.setAttribute("class", r + " text-input")
                }, e.prototype.notifyTextInputEnd = function(t) {
                    var e = this.itemElements[t.key],
                        n = e.getAttribute("class");
                    e.setAttribute("class", n.replace(" text-input", ""))
                }, e.prototype.notifyActualZoomChanged = function(t) {
                    var e = "scale(" + t + ")";
                    this.itemsContainer.setAttribute("transform", e), this.itemSelectorsContainer.setAttribute("transform", e), this.actualZoom = t
                }, e.prototype.notifyViewAdjusted = function(t) {}, e.prototype.applyShapeChange = function(t, e) {
                    var n = t.key,
                        o = t.container && t.container.key,
                        i = this.getItemSelectorGroupContainer(t.zIndex, o),
                        a = this.getItemGroupContainer(t.zIndex, o),
                        c = "shape";
                    switch (t.enableChildren && (c += " container"), e) {
                        case r.ItemChangeType.Create:
                            this.itemSelectorElements[n] = this.createItemElements(n, t.getSelectorPrimitives(), i, c, s.MouseEventElementType.Shape), this.itemElements[n] = this.createItemElements(n, t.getPrimitives(), a, c, s.MouseEventElementType.Shape), t.enableChildren && (this.itemChildElements[n] = this.createItemElements(n, [], a, "container-children", s.MouseEventElementType.Undefined), this.changeItemChildrenVisibility(this.itemChildElements[n], t.expanded));
                            break;
                        case r.ItemChangeType.Remove:
                            this.removeItemElements(this.itemSelectorElements[n]), delete this.itemSelectorElements[n], this.removeItemElements(this.itemElements[n]), delete this.itemElements[n], this.itemChildElements[n] && (this.removeItemElements(this.itemChildElements[n]), delete this.itemChildElements[n], delete this.itemGroupContainers[n], delete this.itemSelectorGroupContainers[n]);
                            break;
                        case r.ItemChangeType.UpdateStructure:
                        case r.ItemChangeType.Update:
                            this.changeItemElements(t.getSelectorPrimitives(), this.itemSelectorElements[n], e === r.ItemChangeType.UpdateStructure), this.changeItemElements(t.getPrimitives(), this.itemElements[n], e === r.ItemChangeType.UpdateStructure), this.itemChildElements[n] && this.changeItemChildrenVisibility(this.itemChildElements[n], t.expanded), i !== (this.itemSelectorElements[n] && this.itemSelectorElements[n].parentNode) && this.moveItemElements(i, this.itemSelectorElements[n]), a !== (this.itemElements[n] && this.itemElements[n].parentNode) && this.moveItemElements(a, this.itemElements[n]), this.itemChildElements[n] && a !== this.itemChildElements[n].parentNode && this.moveItemElements(a, this.itemChildElements[n])
                    }
                }, e.prototype.applyConnectorChange = function(t, e) {
                    var n = t.key,
                        o = t.container && t.container.key,
                        i = this.getItemSelectorGroupContainer(t.zIndex, o),
                        a = this.getItemGroupContainer(t.zIndex, o);
                    switch (e) {
                        case r.ItemChangeType.Create:
                            this.itemSelectorElements[n] = this.createItemElements(n, t.getSelectorPrimitives(), i, "connector", s.MouseEventElementType.Connector), this.itemElements[n] = this.createItemElements(n, t.getPrimitives(), a, "connector", s.MouseEventElementType.Connector);
                            break;
                        case r.ItemChangeType.Remove:
                            this.removeItemElements(this.itemSelectorElements[n]), delete this.itemSelectorElements[n], this.removeItemElements(this.itemElements[n]), delete this.itemElements[n];
                            break;
                        case r.ItemChangeType.UpdateStructure:
                        case r.ItemChangeType.Update:
                            this.changeItemElements(t.getSelectorPrimitives(), this.itemSelectorElements[n], e === r.ItemChangeType.UpdateStructure), this.changeItemElements(t.getPrimitives(), this.itemElements[n], e === r.ItemChangeType.UpdateStructure), i !== (this.itemSelectorElements[n] && this.itemSelectorElements[n].parentNode) && this.moveItemElements(i, this.itemSelectorElements[n]), a !== (this.itemElements[n] && this.itemElements[n].parentNode) && this.moveItemElements(a, this.itemElements[n])
                    }
                }, e.prototype.createItemElements = function(t, e, n, o, i) { var r = this.createAndChangePrimitiveElement(new a.GroupPrimitive([], o), n); return c.RenderUtils.setElementEventData(r, i, t), this.createAndChangePrimitivesElements(e, r), r }, e.prototype.changeItemElements = function(t, e, n) { void 0 === n && (n = !1), n ? (c.RenderUtils.removeContent(e), this.createAndChangePrimitivesElements(t, e)) : this.changePrimitivesElements(t, e) }, e.prototype.removeItemElements = function(t) { t && t.parentNode && t.parentNode.removeChild(t) }, e.prototype.moveItemElements = function(t, e, n) { e && t && (n ? t.insertBefore(e, n) : t.appendChild(e)) }, e.prototype.changeItemChildrenVisibility = function(t, e) { t.style.display = e ? "" : "none" }, e.prototype.getItemGroupContainerKey = function(t, e) { return void 0 !== e ? t + "_" + e : t.toString() }, e.prototype.getItemGroupContainer = function(t, e) {
                    var n = void 0 !== e ? this.getItemParent(t, e) : this.itemsContainer,
                        o = e || "Main";
                    return void 0 !== this.itemGroupContainers[o] && void 0 !== this.itemGroupContainers[o][t] || (void 0 === this.itemGroupContainers[o] && (this.itemGroupContainers[o] = []), this.itemGroupContainers[o][t] = this.createAndChangePrimitiveElement(new a.GroupPrimitive([], null, t), n, this.itemGroupContainers[o][t + 1])), this.itemGroupContainers[o][t]
                }, e.prototype.getItemSelectorGroupContainer = function(t, e) {
                    var n = void 0 !== e ? this.getItemSelectorParent(t, e) : this.itemSelectorsContainer,
                        o = e || "Main";
                    return void 0 !== this.itemSelectorGroupContainers[o] && void 0 !== this.itemSelectorGroupContainers[o][t] || (void 0 === this.itemSelectorGroupContainers[o] && (this.itemSelectorGroupContainers[o] = []), this.itemSelectorGroupContainers[o][t] = this.createAndChangePrimitiveElement(new a.GroupPrimitive([], null, t), n, this.itemSelectorGroupContainers[o][t + 1])), this.itemSelectorGroupContainers[o][t]
                }, e.prototype.getItemParent = function(t, e) { return void 0 !== e ? this.itemChildElements[e] : this.getItemGroupContainer(t) }, e.prototype.getItemSelectorParent = function(t, e) { return void 0 !== e ? this.itemChildElements[e] : this.getItemSelectorGroupContainer(t) }, e
            }(u.CanvasManagerBase);
        e.CanvasItemsManager = l
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
            function(t) { t[t.Create = 0] = "Create", t[t.Update = 1] = "Update", t[t.UpdateStructure = 2] = "UpdateStructure", t[t.Remove = 3] = "Remove" }(e.ItemChangeType || (e.ItemChangeType = {}));
        var o = function() {
            function t(t, e) { this.item = t, this.type = e }
            return Object.defineProperty(t.prototype, "key", { get: function() { return this.item.key }, enumerable: !0, configurable: !0 }), t
        }();
        e.ItemChange = o
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(12),
            s = n(85),
            a = n(19),
            c = n(8),
            u = function(t) {
                function e(e, n, o, i, r) { void 0 === n && (n = "-0.05"), void 0 === o && (o = "-0.05"), void 0 === i && (i = "1.1"), void 0 === r && (r = "1.1"); var s = t.call(this, e, n, o, i, r) || this; return s.id = e, s.x = n, s.y = o, s.width = i, s.height = r, s }
                return i(e, t), e.prototype.createChildElements = function(t) {
                    var e = document.createElementNS(r.svgNS, "feFlood");
                    t.appendChild(e);
                    var n = document.createElementNS(r.svgNS, "feComposite");
                    n.setAttribute("in", "SourceGraphic"), n.setAttribute("operator", "atop"), t.appendChild(n)
                }, e
            }(s.FilterPrimitive);
        e.TextFilterPrimitive = u;
        var p = function(t) {
            function e(e, n, o, i, r, s) { void 0 === o && (o = "-0.05"), void 0 === i && (i = "-0.05"), void 0 === r && (r = "1.1"), void 0 === s && (s = "1.1"); var a = t.call(this, e, o, i, r, s) || this; return a.id = e, a.floodColor = n, a.x = o, a.y = i, a.width = r, a.height = s, a }
            return i(e, t), e.prototype.applyChildrenProperties = function(t) {
                for (var e = void 0, n = 0; e = t.childNodes[n]; n++)
                    if (e.nodeName && "FEFLOOD" === e.nodeName.toUpperCase()) { this.prepareFEFloodNode(e); break }
            }, e.prototype.prepareFEFloodNode = function(t) {
                var e = c.ColorHelper.colorToHash(this.floodColor);
                t.setAttribute("flood-color", e), t.setAttribute("class", "text-filter-flood"), this.floodColor !== a.DiagramModel.defaultPageColor && t.style.setProperty("flood-color", e)
            }, e
        }(u);
        e.TextFloodFilterPrimitive = p
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(12),
            s = function(t) {
                function e(e, n, o, i, r) { var s = t.call(this) || this; return s.id = e, s.x = n, s.y = o, s.width = i, s.height = r, s }
                return i(e, t), e.prototype.createMainElement = function() { return document.createElementNS(r.svgNS, "filter") }, e.prototype.applyElementProperties = function(e) { this.id && e.setAttribute("id", this.id), this.setUnitAttribute(e, "x", this.x), this.setUnitAttribute(e, "y", this.y), this.setUnitAttribute(e, "width", this.width), this.setUnitAttribute(e, "height", this.height), t.prototype.applyElementProperties.call(this, e) }, e
            }(n(18).SvgPrimitive);
        e.FilterPrimitive = s
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = function() {
            function t() {}
            return t.normalize = function(e, n) { return void 0 === n && (n = "image/png"), t.checkPrependDataUrl(e) || (e = t.prepend(e, n)), e }, t.prepend = function(t, e) { return void 0 === e && (e = "image/png"), "data:" + e + ";base64," + t }, t.checkPrependDataUrl = function(e) { return t.dataUrl.test(e) }, t.dataUrl = /data:(.*)(;(.*))?(;base64)?,/, t
        }();
        e.Base64Utils = o
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(33),
            s = n(28),
            a = n(15),
            c = n(10),
            u = n(4),
            p = n(0),
            h = n(88),
            l = n(11),
            d = n(5),
            f = n(24),
            y = n(20),
            m = n(2),
            g = n(64),
            v = n(141),
            P = n(84),
            C = n(42),
            S = n(80),
            _ = n(8),
            w = n(13);
        e.SELECTION_ELEMENT_CLASSNAMES = { SELECTION_RECTANGLE: "selection-rect", CONNECTION_POINT: "connection-point", ACTIVE: "active", CONTAINER_TARGET: "container-target", CONNECTION_TARGET: "connection-target", EXTENSION_LINE: "extension-line", CONNECTION_MARK: "connection-mark", SELECTION_MARK: "selection-mark", LOCKED_SELECTION_MARK: "locked-selection-mark", ITEMS_SELECTION_RECT: "items-selection-rect", CONNECTOR_MULTI_SELECTION: "connector-multi-selection", CONNECTOR_SELECTION: "connector-selection", CONNECTOR_POINT_MARK: "connector-point-mark", CONNECTOR_SELECTION_MASK: "connector-selection-mask", CONNECTOR_SIDE_MARK: "connector-side-mark", ITEM_SELECTION_RECT: "item-selection-rect", ITEM_MULTI_SELECTION: "item-multi-selection-rect" };
        var b = function(t) {
            function n(e, n, o) { var i = t.call(this, n) || this; return i.readOnly = o, i.connectionPointElements = [], i.extensionLineElements = [], i.selectionMap = {}, i.initializeContainerElements(e), i }
            return i(n, t), n.prototype.initializeContainerElements = function(t) { this.itemSelectionContainer = this.createAndChangePrimitiveElement(new s.GroupPrimitive([], null), t), this.visualizersContainer = this.createAndChangePrimitiveElement(new s.GroupPrimitive([], null), t), this.selectionMarksContainer = this.createAndChangePrimitiveElement(new s.GroupPrimitive([], null), t) }, n.prototype.clear = function() { a.RenderUtils.removeContent(this.itemSelectionContainer), a.RenderUtils.removeContent(this.selectionMarksContainer), a.RenderUtils.removeContent(this.visualizersContainer), this.selectionRectElement = void 0, this.resizeInfoElement = void 0, this.connectionPointElements = [], this.connectionTargetElement = void 0, this.containerTargetElement = void 0, this.extensionLineElements = [], this.selectionMap = {} }, n.prototype.showSelectionRect = function(t) {
                var n = new y.RectanglePrimitive(t.left, t.top, t.size.width, t.size.height, null, e.SELECTION_ELEMENT_CLASSNAMES.SELECTION_RECTANGLE),
                    o = this.getSelectionRectElement(n);
                this.changePrimitiveElement(n, o)
            }, n.prototype.hideSelectionRect = function() { void 0 !== this.selectionRectElement && (this.selectionRectElement.style.display = "none") }, n.prototype.getSelectionRectElement = function(t) { return void 0 !== this.selectionRectElement ? this.selectionRectElement.style.display = "" : this.selectionRectElement = this.createPrimitiveElement(t, this.visualizersContainer), this.selectionRectElement }, n.prototype.showResizeInfo = function(t, e) {
                var o = new y.RectanglePrimitive(t.x, t.y, 0, 0),
                    i = new s.GroupPrimitive([o, new g.TextPrimitive(t.x, t.y, e)], "resize-info"),
                    r = this.getResizeInfoElement(i);
                this.changePrimitiveElement(i, r);
                var c = a.RenderUtils.getSvgTextRectangle(r.childNodes[1], n.resizeInfoLineWidth).inflate(n.resizeInfoTextOffset, n.resizeInfoTextOffset);
                o.x = c.left, o.y = c.top, o.width = c.width, o.height = c.height, this.changePrimitiveElement(i, r)
            }, n.prototype.hideResizeInfo = function() { void 0 !== this.resizeInfoElement && (this.resizeInfoElement.style.display = "none") }, n.prototype.getResizeInfoElement = function(t) { return void 0 !== this.resizeInfoElement ? this.resizeInfoElement.style.display = "" : this.resizeInfoElement = this.createPrimitiveElement(t, this.visualizersContainer), this.resizeInfoElement }, n.prototype.showConnectionPoint = function(t, o, i, r, s, a) { this.showConnectionPointCore(2 * t, o.x, o.y, n.connectionPointLargeSize, n.connectionPointLargeSize, c.MouseEventElementType.ShapeConnectionPoint, r, s, e.SELECTION_ELEMENT_CLASSNAMES.CONNECTION_POINT + " selector"), this.showConnectionPointCore(2 * t + 1, o.x, o.y, n.connectionPointSmallSize, n.connectionPointSmallSize, c.MouseEventElementType.ShapeConnectionPoint, r, s, e.SELECTION_ELEMENT_CLASSNAMES.CONNECTION_POINT + (a ? " " + e.SELECTION_ELEMENT_CLASSNAMES.ACTIVE : "")) }, n.prototype.showConnectionPointCore = function(t, e, n, o, i, r, s, c, u) {
                var p = new C.EllipsePrimitive(e, n, o, i, null, u),
                    h = this.getConnectionPointElement(p, t);
                this.changePrimitiveElement(p, h), a.RenderUtils.setElementEventData(h, r, s, c)
            }, n.prototype.hideConnectionPoints = function() { for (var t = 0; t < this.connectionPointElements.length; t++) this.connectionPointElements[t].style.display = "none" }, n.prototype.getConnectionPointElement = function(t, e) { var n = this.connectionPointElements[e]; return void 0 !== n ? n.style.display = "" : (n = this.createPrimitiveElement(t, this.visualizersContainer), this.connectionPointElements[e] = n), n }, n.prototype.showContainerTarget = function(t, n) {
                var o = new y.RectanglePrimitive(n.left, n.top, n.width, n.height, null, e.SELECTION_ELEMENT_CLASSNAMES.CONTAINER_TARGET),
                    i = this.getContainerTargetElement(o, t);
                this.changePrimitiveElement(o, i)
            }, n.prototype.hideContainerTarget = function() { this.containerTargetElement && (this.containerTargetElement.style.display = "none") }, n.prototype.getContainerTargetElement = function(t, e) { return void 0 !== this.containerTargetElement ? this.containerTargetElement.style.display = "" : this.containerTargetElement = this.createPrimitiveElement(t, this.itemSelectionContainer), this.containerTargetElement }, n.prototype.showConnectionTarget = function(t, n) {
                var o = new y.RectanglePrimitive(n.left, n.top, n.width, n.height, null, e.SELECTION_ELEMENT_CLASSNAMES.CONNECTION_TARGET),
                    i = this.getConnectionTargetElement(o, t);
                this.changePrimitiveElement(o, i)
            }, n.prototype.hideConnectionTarget = function() { this.connectionTargetElement && (this.connectionTargetElement.style.display = "none") }, n.prototype.getConnectionTargetElement = function(t, e) { return void 0 !== this.connectionTargetElement ? this.connectionTargetElement.style.display = "" : this.connectionTargetElement = this.createPrimitiveElement(t, this.itemSelectionContainer), this.connectionTargetElement }, n.prototype.showExtensionLine = function(t, o, i, a, c) {
                var u = e.SELECTION_ELEMENT_CLASSNAMES.EXTENSION_LINE;
                o !== h.ExtensionLineType.VerticalCenterAfter && o !== h.ExtensionLineType.VerticalCenterBefore && o !== h.ExtensionLineType.HorizontalCenterAbove && o !== h.ExtensionLineType.HorizontalCenterBelow || (u += " center"), o !== h.ExtensionLineType.VerticalCenterToPageCenter && o !== h.ExtensionLineType.HorizontalCenterToPageCenter && o !== h.ExtensionLineType.LeftToPageCenter && o !== h.ExtensionLineType.RightToPageCenter && o !== h.ExtensionLineType.TopToPageCenter && o !== h.ExtensionLineType.BottomToPageCenter || (u += " page");
                var p = 0,
                    l = 0,
                    d = 0,
                    f = 0,
                    y = 0,
                    m = 0,
                    v = 0,
                    P = 0;
                i.y === a.y ? (p = i.x, l = i.y - n.extensionLineEndingSize, d = i.x, f = i.y + n.extensionLineEndingSize, y = a.x, m = i.y - n.extensionLineEndingSize, v = a.x, P = i.y + n.extensionLineEndingSize) : i.x === a.x && (p = i.x - n.extensionLineEndingSize, l = i.y, d = i.x + n.extensionLineEndingSize, f = i.y, y = i.x - n.extensionLineEndingSize, m = a.y, v = i.x + n.extensionLineEndingSize, P = a.y);
                var C = [new S.LinePrimitive(i.x, i.y, a.x, a.y), new S.LinePrimitive(p, l, d, f), new S.LinePrimitive(y, m, v, P), new g.TextPrimitive((a.x + i.x) / 2, (a.y + i.y) / 2, c, void 0, null, !1, null, r.PAGE_BG_TEXTFLOOR_FILTER_ID, !1, function(t) { t.style.display = c && "" !== c ? "inherit" : "none" })],
                    _ = new s.GroupPrimitive(C, u),
                    w = this.getExtensionLineElement(_, t);
                this.changePrimitiveElement(_, w)
            }, n.prototype.hideExtensionLines = function() { for (var t = 0; t < this.extensionLineElements.length; t++) this.extensionLineElements[t] && (this.extensionLineElements[t].style.display = "none") }, n.prototype.getExtensionLineElement = function(t, e) { var n = this.extensionLineElements[e]; return void 0 !== n ? n.style.display = "" : (n = this.createPrimitiveElement(t, this.visualizersContainer), this.extensionLineElements[e] = n), n }, n.prototype.getOrCreateShapeSelection = function(t, e) { var n = this.selectionMap[t.key]; return n || (n = new E(this.itemSelectionContainer, this.selectionMarksContainer, this.actualZoom, this.readOnly, t.key, t.isLocked, t.rectangle, t.allowResizeHorizontally, t.allowResizeVertically, t.description.getParameterPoints(t)), this.selectionMap[t.key] = n), e && (e[t.key] = !0), n }, n.prototype.getOrCreateConnectorSelection = function(t, e) { var n = this.selectionMap[t.key]; return n || (n = new M(this.itemSelectionContainer, this.selectionMarksContainer, this.actualZoom, this.readOnly, t.key, t.isLocked, t.rectangle, t.getRenderPoints(), t.styleText, t.enableText, t.texts.map(function(e) { return { text: t.getText(e.position), point: t.getTextPoint(e.position) } }), t.points, t.properties.lineOption), this.selectionMap[t.key] = n), e && (e[t.key] = !0), n }, n.prototype.getOrCreateMultipleSelection = function(t) { var e = this.selectionMap[-1]; return e || (e = new O(this.itemSelectionContainer, this.selectionMarksContainer, this.actualZoom, this.readOnly), this.selectionMap[-1] = e), t[-1] = !0, e }, n.prototype.getMultipleSelection = function() { return this.selectionMap[-1] }, n.prototype.updateShapeSelection = function(t, e) {
                if (t.key in this.selectionMap) {
                    var n = t.rectangle;
                    this.getOrCreateShapeSelection(t).onModelChanged(t.isLocked, n, t.allowResizeHorizontally, t.allowResizeVertically, t.description.getParameterPoints(t)), e && e.onModelItemChanged(t.key, n)
                }
            }, n.prototype.updateConnectorSelection = function(t, e) {
                if (t.key in this.selectionMap) {
                    var n = t.rectangle;
                    this.getOrCreateConnectorSelection(t).onModelChanged(t.isLocked, n, t.getRenderPoints(), t.styleText, t.enableText, t.texts.map(function(e) { return { text: t.getText(e.position), point: t.getTextPoint(e.position) } }), t.points, t.properties.lineOption), e && e.onModelItemChanged(t.key, n)
                }
            }, n.prototype.hideOutdatedSelection = function(t) {
                var e = this;
                Object.keys(this.selectionMap).filter(function(e) { return !t[e] }).forEach(function(t) { e.selectionMap[t].destroy(), delete e.selectionMap[t] })
            }, n.prototype.notifySelectionChanged = function(t) {
                var e = this,
                    n = t.getSelectedItems(!0),
                    o = {},
                    i = n.length > 1,
                    r = t.getSelectedShapes(!0),
                    s = t.getSelectedConnectors(!0);
                r.forEach(function(t) { return e.getOrCreateShapeSelection(t, o).onSelectionChanged(i) }), s.forEach(function(t) { return e.getOrCreateConnectorSelection(t, o).onSelectionChanged(i) }), i && this.getOrCreateMultipleSelection(o).onSelectionChanged(!!r.length, n), this.hideOutdatedSelection(o)
            }, n.prototype.notifyModelChanged = function(t) {
                var e = this,
                    n = this.getMultipleSelection();
                t.forEach(function(t) { t.item instanceof l.Shape ? e.updateShapeSelection(t.item, n) : t.item instanceof d.Connector && e.updateConnectorSelection(t.item, n) }), n && n.onModelChanged()
            }, n.prototype.notifyPageColorChanged = function(t) {}, n.prototype.notifyPageSizeChanged = function(t, e) {}, n.prototype.notifyActualZoomChanged = function(t) {
                var e = this;
                Object.keys(this.selectionMap).forEach(function(n) { return e.selectionMap[n].notifyZoomChanged(t) }), this.actualZoom = t
            }, n.prototype.notifyViewAdjusted = function(t) {}, n.prototype.notifyReadOnlyChanged = function(t) {
                var e = this;
                this.readOnly = t, Object.keys(this.selectionMap).forEach(function(n) { return e.selectionMap[n].notifyReadOnlyChanged(t) })
            }, n.prototype.notifySelectionRectShow = function(t) { this.showSelectionRect(t.multiply(this.actualZoom)) }, n.prototype.notifySelectionRectHide = function() { this.hideSelectionRect() }, n.prototype.notifyResizeInfoShow = function(t, e) { this.showResizeInfo(t.multiply(this.actualZoom), e) }, n.prototype.notifyResizeInfoHide = function() { this.hideResizeInfo() }, n.prototype.notifyConnectionPointsShow = function(t, e, o, i) {
                var r = this;
                this.hideConnectionPoints(), e.forEach(function(e, s) {
                    var a = e.point.multiply(r.actualZoom);
                    if (i) switch (e.side) {
                        case u.ConnectionPointSide.North:
                            a.y -= n.connectionPointShift;
                            break;
                        case u.ConnectionPointSide.South:
                            a.y += n.connectionPointShift;
                            break;
                        case u.ConnectionPointSide.East:
                            a.x += n.connectionPointShift;
                            break;
                        case u.ConnectionPointSide.West:
                            a.x -= n.connectionPointShift
                    }
                    r.showConnectionPoint(s, a, e.side, t, s, s === o)
                })
            }, n.prototype.notifyConnectionPointsHide = function() { this.hideConnectionPoints() }, n.prototype.notifyConnectionTargetShow = function(t, e) {
                var o = n.correctShapeSelectionRect(e.multiply(this.actualZoom), n.connectionTargetBorderWidth, this.actualZoom);
                this.showConnectionTarget(0, o)
            }, n.prototype.notifyConnectionTargetHide = function() { this.hideConnectionTarget() }, n.prototype.notifyContainerTargetShow = function(t, e) {
                var o = n.correctShapeSelectionRect(e.multiply(this.actualZoom), n.connectionTargetBorderWidth, this.actualZoom);
                this.showContainerTarget(0, o)
            }, n.prototype.notifyContainerTargetHide = function() { this.hideContainerTarget() }, n.prototype.notifyExtensionLinesShow = function(t) {
                var e = this;
                this.hideExtensionLines(), t.forEach(function(t, n) { e.showExtensionLine(n, t.type, t.segment.startPoint.multiply(e.actualZoom), t.segment.endPoint.multiply(e.actualZoom), t.text) })
            }, n.prototype.notifyExtensionLinesHide = function() { this.hideExtensionLines() }, n.prototype.notifyDragStart = function(t) { this.selectionMarksContainer.style.display = "none" }, n.prototype.notifyDragEnd = function(t) { this.selectionMarksContainer.style.display = "" }, n.prototype.notifyDragScrollStart = function() {}, n.prototype.notifyDragScrollEnd = function() {}, n.prototype.notifyTextInputStart = function(t, e, n, o) { this.visualizersContainer.style.display = "none" }, n.prototype.notifyTextInputEnd = function(t) { this.visualizersContainer.style.display = "" }, n.correctShapeSelectionRect = function(t, e, n) {
                var o = Math.ceil(l.Shape.lineWidth / 2 * n);
                t = t.inflate(o, o);
                var i = Math.floor(e / 2);
                return t.position.x -= i, t.position.y -= i, t.size.width += e, t.size.height += e, t
            }, n.selectionMarkSize = w.UnitConverter.pixelsToTwips(10), n.lockedSelectionMarkSize = w.UnitConverter.pixelsToTwips(8), n.selectionRectLineWidth = w.UnitConverter.pixelsToTwips(1), n.multiSelectionRectLineWidth = w.UnitConverter.pixelsToTwips(1), n.connectionPointSmallSize = w.UnitConverter.pixelsToTwips(5), n.connectionPointLargeSize = w.UnitConverter.pixelsToTwips(12), n.connectionPointShift = w.UnitConverter.pixelsToTwips(16), n.connectionTargetBorderWidth = w.UnitConverter.pixelsToTwips(2), n.connectorSelectionLineWidth = w.UnitConverter.pixelsToTwips(1), n.connectorSelectionWidth = w.UnitConverter.pixelsToTwips(6), n.geomertyMarkSize = w.UnitConverter.pixelsToTwips(8), n.connectorPointMarkSize = w.UnitConverter.pixelsToTwips(6), n.connectorSideMarkSize = w.UnitConverter.pixelsToTwips(6), n.extensionLineWidth = w.UnitConverter.pixelsToTwips(1), n.extensionLineOffset = w.UnitConverter.pixelsToTwips(1), n.extensionLineEndingSize = w.UnitConverter.pixelsToTwips(6), n.resizeInfoOffset = w.UnitConverter.pixelsToTwips(16), n.resizeInfoTextOffset = w.UnitConverter.pixelsToTwips(2), n.resizeInfoLineWidth = w.UnitConverter.pixelsToTwips(1), n
        }(r.CanvasManagerBase);
        e.CanvasSelectionManager = b;
        var x = function() {
                function t(t, e, n, o, i) { this.rectsContainer = t, this.marksContainer = e, this.key = n, this.zoomLevel = o, this.readOnly = i, this.elements = {}, this.updatedElements = {} }
                return t.prototype.notifyZoomChanged = function(t) { this.zoomLevel !== t && (this.zoomLevel = t, this.redraw()) }, t.prototype.notifyReadOnlyChanged = function(t) { this.readOnly = t, this.redraw() }, t.prototype.destroy = function() {
                    var t = this;
                    Object.keys(this.elements).forEach(function(e) { t.elements[e].parentNode.removeChild(t.elements[e]), delete t.elements[e] })
                }, t.prototype.redraw = function() {
                    var t = this;
                    this.updatedElements = {}, this.redrawCore(), Object.keys(this.elements).filter(function(e) { return !t.updatedElements[e] }).forEach(function(e) { t.elements[e].parentNode.removeChild(t.elements[e]), delete t.elements[e] }), this.updatedElements = {}
                }, t.prototype.drawSelectionMarks = function(t, n, o) {
                    if (!this.readOnly) {
                        var i = n && t.height > 3 * b.selectionMarkSize,
                            r = o && t.width > 3 * b.selectionMarkSize,
                            s = n || o;
                        s && this.drawSelectionMark(0, new p.Point(t.left, t.top), b.selectionMarkSize, c.MouseEventElementType.ShapeResizeBox, c.ResizeEventSource.ResizeBox_NW, e.SELECTION_ELEMENT_CLASSNAMES.SELECTION_MARK), r && !_.Browser.TouchUI && this.drawSelectionMark(1, new p.Point(t.left + t.size.width / 2, t.top), b.selectionMarkSize, c.MouseEventElementType.ShapeResizeBox, c.ResizeEventSource.ResizeBox_N, e.SELECTION_ELEMENT_CLASSNAMES.SELECTION_MARK), s && this.drawSelectionMark(2, new p.Point(t.right, t.top), b.selectionMarkSize, c.MouseEventElementType.ShapeResizeBox, c.ResizeEventSource.ResizeBox_NE, e.SELECTION_ELEMENT_CLASSNAMES.SELECTION_MARK), i && !_.Browser.TouchUI && this.drawSelectionMark(3, new p.Point(t.right, t.top + t.size.height / 2), b.selectionMarkSize, c.MouseEventElementType.ShapeResizeBox, c.ResizeEventSource.ResizeBox_E, e.SELECTION_ELEMENT_CLASSNAMES.SELECTION_MARK), s && this.drawSelectionMark(4, new p.Point(t.right, t.bottom), b.selectionMarkSize, c.MouseEventElementType.ShapeResizeBox, c.ResizeEventSource.ResizeBox_SE, e.SELECTION_ELEMENT_CLASSNAMES.SELECTION_MARK), r && !_.Browser.TouchUI && this.drawSelectionMark(5, new p.Point(t.left + t.size.width / 2, t.bottom), b.selectionMarkSize, c.MouseEventElementType.ShapeResizeBox, c.ResizeEventSource.ResizeBox_S, e.SELECTION_ELEMENT_CLASSNAMES.SELECTION_MARK), s && this.drawSelectionMark(6, new p.Point(t.left, t.bottom), b.selectionMarkSize, c.MouseEventElementType.ShapeResizeBox, c.ResizeEventSource.ResizeBox_SW, e.SELECTION_ELEMENT_CLASSNAMES.SELECTION_MARK), i && !_.Browser.TouchUI && this.drawSelectionMark(7, new p.Point(t.left, t.top + t.size.height / 2), b.selectionMarkSize, c.MouseEventElementType.ShapeResizeBox, c.ResizeEventSource.ResizeBox_W, e.SELECTION_ELEMENT_CLASSNAMES.SELECTION_MARK)
                    }
                }, t.prototype.drawSelectionMark = function(t, e, n, o, i, r) {
                    var s = this;
                    this.getOrCreateElement("SM" + t, new y.RectanglePrimitive(e.x - n / 2, e.y - n / 2, n, n, null, r, void 0, function(t) { a.RenderUtils.setElementEventData(t, o, s.key, i) }), this.marksContainer)
                }, t.prototype.drawSelectionRect = function(t, e, n) {
                    var o = new y.RectanglePrimitive(t.left, t.top, t.width, t.height, null, n, void 0, function(t) { a.RenderUtils.setElementEventData(t, e, "-1", -1) });
                    this.getOrCreateElement("shapeSelection", o, this.rectsContainer)
                }, t.prototype.getOrCreateElement = function(t, e, n) { var o = this.elements[t]; return o || (o = e.createElement(), this.elements[t] = o, n.appendChild(o)), this.updatedElements[t] = !0, e.applyElementProperties(o), o }, t
            }(),
            I = function(t) {
                function n(e, n, o, i, r, s, a) { var c = t.call(this, e, n, o, i, r) || this; return c.isLocked = s, c.rectangle = a, c }
                return i(n, t), n.prototype.onSelectionChanged = function(t) { this.isMultipleSelection !== t && (this.isMultipleSelection = t, this.redraw()) }, n.prototype.redrawCore = function() {
                    var t = this.rectangle.multiply(this.zoomLevel);
                    this.isLockedRender() ? this.drawLockedSelection(t) : this.drawUnlockedSelection(t)
                }, n.prototype.isLockedRender = function() { return this.isLocked && !this.readOnly }, n.prototype.drawLockedSelection = function(t) { this.drawLockedSelectionMark(0, new p.Point(t.left, t.top), b.lockedSelectionMarkSize, e.SELECTION_ELEMENT_CLASSNAMES.LOCKED_SELECTION_MARK), this.drawLockedSelectionMark(1, new p.Point(t.right, t.top), b.lockedSelectionMarkSize, e.SELECTION_ELEMENT_CLASSNAMES.LOCKED_SELECTION_MARK), this.drawLockedSelectionMark(2, new p.Point(t.right, t.bottom), b.lockedSelectionMarkSize, e.SELECTION_ELEMENT_CLASSNAMES.LOCKED_SELECTION_MARK), this.drawLockedSelectionMark(3, new p.Point(t.left, t.bottom), b.lockedSelectionMarkSize, e.SELECTION_ELEMENT_CLASSNAMES.LOCKED_SELECTION_MARK) }, n.prototype.drawLockedSelectionMark = function(t, e, n, o) {
                    var i = new m.PathPrimitive([new m.PathPrimitiveMoveToCommand(e.x - n / 2, e.y - n / 2), new m.PathPrimitiveLineToCommand(e.x + n / 2, e.y + n / 2), new m.PathPrimitiveMoveToCommand(e.x + n / 2, e.y - n / 2), new m.PathPrimitiveLineToCommand(e.x - n / 2, e.y + n / 2)], null, o);
                    this.getOrCreateElement("LSM" + t, i, this.marksContainer)
                }, n
            }(x),
            O = function(t) {
                function n(e, n, o, i) { var r = t.call(this, e, n, "-1", o, i) || this; return r.items = {}, r }
                return i(n, t), n.prototype.onModelItemChanged = function(t, e) { t in this.items && (this.items[t] = e) }, n.prototype.onModelChanged = function() { this.redraw() }, n.prototype.onSelectionChanged = function(t, e) {
                    var n = this;
                    this.containsShapes = t, this.items = {}, e.forEach(function(t) { return n.items[t.key] = t.rectangle }), this.redraw()
                }, n.prototype.redrawCore = function() {
                    var t = this,
                        n = p.GeometryUtils.getCommonRectangle(Object.keys(this.items).map(function(e) { return t.items[e] })),
                        o = b.correctShapeSelectionRect(n.multiply(this.zoomLevel), b.selectionRectLineWidth, this.zoomLevel);
                    this.drawSelectionRect(o, c.MouseEventElementType.SelectionRect, e.SELECTION_ELEMENT_CLASSNAMES.ITEMS_SELECTION_RECT), this.containsShapes && this.drawSelectionMarks(o, !0, !0)
                }, n
            }(x),
            E = function(t) {
                function n(e, n, o, i, r, s, a, c, u, p) { var h = t.call(this, e, n, r, o, i, s, a) || this; return h.allowResizeHorizontally = c, h.allowResizeVertically = u, h.shapeParameterPoints = p, h }
                return i(n, t), n.prototype.onModelChanged = function(t, e, n, o, i) { this.isLocked = t, this.rectangle = e, this.allowResizeHorizontally = n, this.allowResizeVertically = o, this.shapeParameterPoints = i, this.redraw() }, n.prototype.drawUnlockedSelection = function(t) {
                    var n = b.correctShapeSelectionRect(t, b.selectionRectLineWidth, this.zoomLevel);
                    this.drawSelectionRect(n, c.MouseEventElementType.SelectionRect, this.isMultipleSelection ? e.SELECTION_ELEMENT_CLASSNAMES.ITEM_MULTI_SELECTION : e.SELECTION_ELEMENT_CLASSNAMES.ITEM_SELECTION_RECT), this.isMultipleSelection || this.drawSelectionMarks(t, this.allowResizeHorizontally, this.allowResizeVertically), this.drawShapeParameterPoints()
                }, n.prototype.drawShapeParameterPoints = function() {
                    var t = this;
                    this.readOnly || this.shapeParameterPoints.forEach(function(e, n) {
                        var o = e.point.multiply(t.zoomLevel);
                        t.drawShapeParameterPoint(o, n, e.key)
                    })
                }, n.prototype.drawShapeParameterPoint = function(t, e, n) {
                    var o = this,
                        i = b.geomertyMarkSize,
                        r = new y.RectanglePrimitive(t.x - i / 2, t.y - i / 2, i, i, null, "geometry-mark", void 0, function(t) { a.RenderUtils.setElementEventData(t, c.MouseEventElementType.ShapeParameterBox, o.key, n) });
                    this.getOrCreateElement("pp" + e.toString(), r, this.marksContainer)
                }, n
            }(I),
            M = function(t) {
                function n(e, n, o, i, r, s, a, c, u, p, h, l, d) { var f = t.call(this, e, n, r, o, i, s, a) || this; return f.renderPoints = c, f.styleText = u, f.enableText = p, f.texts = h, f.points = l, f.lineType = d, f }
                return i(n, t), n.prototype.onModelChanged = function(t, e, n, o, i, r, s, a) { this.isLocked = t, this.rectangle = e, this.renderPoints = n, this.styleText = o, this.enableText = i, this.texts = r, this.points = s, this.lineType = a, this.redraw() }, n.prototype.drawUnlockedSelection = function(t) { this.drawConnectorSelection(this.isMultipleSelection ? e.SELECTION_ELEMENT_CLASSNAMES.CONNECTOR_MULTI_SELECTION : e.SELECTION_ELEMENT_CLASSNAMES.CONNECTOR_SELECTION), this.isMultipleSelection || this.readOnly || this.drawConnectorSelectionMarks() }, n.prototype.drawConnectorSelection = function(t) {
                    var n, o, i, r = this,
                        c = this.renderPoints,
                        u = [],
                        p = 0,
                        h = 0;
                    if (c.forEach(function(t) { t = t.multiply(r.zoomLevel), void 0 === n ? (o = t, u.push(new m.PathPrimitiveMoveToCommand(t.x, t.y))) : (u.push(new m.PathPrimitiveLineToCommand(t.x, t.y)), p = Math.max(p, Math.abs(n.x - t.x)), h = Math.max(h, Math.abs(n.y - t.y))), n = t }), i = n, p < b.connectorSelectionLineWidth || h < b.connectorSelectionLineWidth) {
                        var l = p < b.connectorSelectionLineWidth ? b.connectorSelectionLineWidth : 0,
                            d = h < b.connectorSelectionLineWidth ? b.connectorSelectionLineWidth : 0;
                        u.push(new m.PathPrimitiveLineToCommand(i.x - l, i.y - d))
                    }
                    var f = a.RenderUtils.generateSvgElementId("maskSel"),
                        g = a.RenderUtils.generateSvgElementId("clipSel"),
                        P = new s.GroupPrimitive([new m.PathPrimitive(u, null, t, g, function(t) { t.setAttribute("mask", a.RenderUtils.getUrlPathById(f)) }), new v.MaskPrimitive(f, [new y.RectanglePrimitive("0", "0", "100%", "100%", null, "background"), new m.PathPrimitive(u), new y.RectanglePrimitive(o.x - b.connectorSelectionWidth / 2, o.y - b.connectorSelectionWidth / 2, b.connectorSelectionWidth, b.connectorSelectionWidth), new y.RectanglePrimitive(i.x - b.connectorSelectionWidth / 2, i.y - b.connectorSelectionWidth / 2, b.connectorSelectionWidth, b.connectorSelectionWidth), new s.GroupPrimitive([])], e.SELECTION_ELEMENT_CLASSNAMES.CONNECTOR_SELECTION_MASK, "-1000%", "-1000%", "2100%", "2100%")]),
                        C = this.getOrCreateElement("CS", P, this.rectsContainer);
                    this.drawConnectorTextsSelection(C, C.querySelector("g"), t, f)
                }, n.prototype.drawConnectorTextsSelection = function(t, e, n, o) {
                    var i = this,
                        r = [];
                    e && this.enableText && this.texts.forEach(function(t, n) {
                        if (t.text) {
                            var o = a.RenderUtils.generateSvgElementId("filterSel"),
                                c = new s.GroupPrimitive([new g.TextPrimitive(t.point.x, t.point.y, t.text, void 0, i.styleText, !0, null, o), new P.TextFilterPrimitive(o)]),
                                u = i.getOrCreateElement("FSE" + n, c, e).querySelector("text"),
                                p = a.RenderUtils.getSvgTextRectangle(u, b.connectorSelectionLineWidth);
                            p && r.push(p.multiply(i.zoomLevel))
                        }
                    });
                    for (var c = 0; c < r.length; c++) {
                        var u = new y.RectanglePrimitive(r[c].left, r[c].top, r[c].width, r[c].height, null, n + " text", null);
                        this.getOrCreateElement("TR" + c, u, t)
                    }
                }, n.prototype.drawConnectorSelectionMarks = function() {
                    var t = this,
                        n = this.points.length - 1;
                    this.points.forEach(function(o, i) {
                        var r = 0 === i || i === n,
                            s = r ? e.SELECTION_ELEMENT_CLASSNAMES.SELECTION_MARK : e.SELECTION_ELEMENT_CLASSNAMES.CONNECTOR_POINT_MARK,
                            a = r ? b.selectionMarkSize : b.connectorPointMarkSize;
                        r || t.lineType === f.ConnectorLineOption.Straight ? t.drawSelectionMark(i, o.multiply(t.zoomLevel), a, c.MouseEventElementType.ConnectorPoint, i, s) : t.drawSelectionMark(i, o.multiply(t.zoomLevel), a, c.MouseEventElementType.Undefined, -1, s + " disabled")
                    }), this.drawConnectorSideMarks()
                }, n.prototype.drawConnectorSideMarks = function() {
                    var t, n, o = this,
                        i = this.lineType === f.ConnectorLineOption.Straight ? c.MouseEventElementType.ConnectorSide : c.MouseEventElementType.ConnectorOrthogonalSide;
                    this.renderPoints.filter(function(t) { return !t.skipped }).forEach(function(r, s) {
                        if (!r.skipped) {
                            if (void 0 !== t && o.canDrawConnectorSideMark(r, t)) {
                                var a = o.lineType === f.ConnectorLineOption.Orthogonal ? r.x - t.x == 0 ? "vertical" : "horizontal" : "";
                                o.drawSelectionMark(o.points.length + s - 1, new p.Point(t.x + (r.x - t.x) / 2, t.y + (r.y - t.y) / 2).multiply(o.zoomLevel), b.connectorSideMarkSize, i, n + "_" + s, e.SELECTION_ELEMENT_CLASSNAMES.CONNECTOR_SIDE_MARK + " " + a)
                            }
                            t = r, n = s
                        }
                    })
                }, n.prototype.canDrawConnectorSideMark = function(t, e) { if (this.lineType === f.ConnectorLineOption.Straight) { var n = b.selectionMarkSize + b.connectorSideMarkSize; return p.GeometryUtils.getDistance(t, e) > n } return this.lineType === f.ConnectorLineOption.Orthogonal && ((t.x - e.x == 0 || Math.abs(t.x - e.x) > d.Connector.minOffset) && (t.y - e.y == 0 || Math.abs(t.y - e.y) > d.Connector.minOffset)) }, n
            }(I)
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
            function(t) { t[t.LeftToLeftAbove = 0] = "LeftToLeftAbove", t[t.LeftToLeftBelow = 1] = "LeftToLeftBelow", t[t.RightToRightAbove = 2] = "RightToRightAbove", t[t.RightToRightBelow = 3] = "RightToRightBelow", t[t.LeftToRightAbove = 4] = "LeftToRightAbove", t[t.LeftToRightBelow = 5] = "LeftToRightBelow", t[t.RightToLeftAbove = 6] = "RightToLeftAbove", t[t.RightToLeftBelow = 7] = "RightToLeftBelow", t[t.TopToTopBefore = 8] = "TopToTopBefore", t[t.TopToTopAfter = 9] = "TopToTopAfter", t[t.BottomToBottomBefore = 10] = "BottomToBottomBefore", t[t.BottomToBottomAfter = 11] = "BottomToBottomAfter", t[t.TopToBottomBefore = 12] = "TopToBottomBefore", t[t.TopToBottomAfter = 13] = "TopToBottomAfter", t[t.BottomToTopBefore = 14] = "BottomToTopBefore", t[t.BottomToTopAfter = 15] = "BottomToTopAfter", t[t.HorizontalCenterAbove = 16] = "HorizontalCenterAbove", t[t.HorizontalCenterBelow = 17] = "HorizontalCenterBelow", t[t.VerticalCenterBefore = 18] = "VerticalCenterBefore", t[t.VerticalCenterAfter = 19] = "VerticalCenterAfter", t[t.VerticalCenterToPageCenter = 20] = "VerticalCenterToPageCenter", t[t.HorizontalCenterToPageCenter = 21] = "HorizontalCenterToPageCenter", t[t.LeftToPageCenter = 22] = "LeftToPageCenter", t[t.RightToPageCenter = 23] = "RightToPageCenter", t[t.TopToPageCenter = 24] = "TopToPageCenter", t[t.BottomToPageCenter = 25] = "BottomToPageCenter" }(e.ExtensionLineType || (e.ExtensionLineType = {}));
        var o = function() { return function(t, e, n) { this.type = t, this.segment = e, this.text = n } }();
        e.ExtensionLine = o;
        var i = function() {
            function t(t) { this.dispatcher = t, this.lines = [], this.lineIndexByType = {} }
            return t.prototype.addSegment = function(t, e, n) {
                var i = this.lineIndexByType[t];
                if (void 0 === i) {
                    var r = new o(t, e, n),
                        s = this.lines.push(r);
                    this.lineIndexByType[r.type] = s - 1, this.raiseShow()
                } else if (e.distance < this.lines[i].segment.distance) {
                    r = new o(t, e, n);
                    this.lines.splice(i, 1, r), this.raiseShow()
                }
            }, t.prototype.update = function() { this.raiseShow() }, t.prototype.reset = function() { this.lines.length && (this.lines = [], this.lineIndexByType = {}, this.raiseHide()) }, t.prototype.raiseShow = function() {
                var t = this;
                this.dispatcher.raise1(function(e) { return e.notifyExtensionLinesShow(t.lines) })
            }, t.prototype.raiseHide = function() { this.dispatcher.raise1(function(t) { return t.notifyExtensionLinesHide() }) }, t
        }();
        e.ExtensionLinesVisualizer = i
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = function() { return function(t) { this.connector = t } }();
        e.ConnectorPointsCalculatorBase = o
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(3),
            s = n(5),
            a = function(t) {
                function e(e, n) { var o = t.call(this) || this; return o.connectorKey = e.key, o.position = n, o.itemKey = e.getExtremeItem(o.position).key, o }
                return i(e, t), e.prototype.redo = function(t) {
                    var e = t.model.findConnector(this.connectorKey);
                    this.oldConnectionPointIndex = this.position === s.ConnectorPosition.Begin ? e.beginConnectionPointIndex : e.endConnectionPointIndex, t.deleteConnection(e, this.position)
                }, e.prototype.undo = function(t) {
                    var e = t.model.findConnector(this.connectorKey),
                        n = t.model.findItem(this.itemKey);
                    t.addConnection(e, n, this.oldConnectionPointIndex, this.position)
                }, e
            }(r.HistoryItem);
        e.DeleteConnectionHistoryItem = a
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = function(t) {
            function e(e) { var n = t.call(this) || this; return n.shapeKey = e, n }
            return i(e, t), e.prototype.redo = function(t) {
                var e = t.model.findShape(this.shapeKey);
                this.shape = e.clone(), t.deleteShape(e)
            }, e.prototype.undo = function(t) { t.addShape(this.shape, this.shape.key) }, e
        }(n(3).HistoryItem);
        e.DeleteShapeHistoryItem = r
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(9),
            s = n(2),
            a = n(1),
            c = function(t) {
                function e(e, n, o) { return void 0 === e && (e = "Diamond"), void 0 === n && (n = ""), void 0 === o && (o = r.ShapeDefaultSize.clone()), t.call(this, e, n, o) || this }
                return i(e, t), Object.defineProperty(e.prototype, "key", { get: function() { return a.ShapeTypes.Diamond }, enumerable: !0, configurable: !0 }), e.prototype.createShapePrimitives = function(t) {
                    var e = t.rectangle,
                        n = e.left,
                        o = e.top,
                        i = e.right,
                        r = e.bottom,
                        a = e.center,
                        c = a.x,
                        u = a.y;
                    return [new s.PathPrimitive([new s.PathPrimitiveMoveToCommand(c, o), new s.PathPrimitiveLineToCommand(i, u), new s.PathPrimitiveLineToCommand(c, r), new s.PathPrimitiveLineToCommand(n, u), new s.PathPrimitiveClosePathCommand], t.style)]
                }, e
            }(r.ShapeDescription);
        e.DiamondShapeDescription = c
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(9),
            s = n(0),
            a = n(1),
            c = function(t) {
                function e() { return t.call(this, "Text", "Text", new s.Size(r.ShapeDefaultDimension, .5 * r.ShapeDefaultDimension)) || this }
                return i(e, t), Object.defineProperty(e.prototype, "key", { get: function() { return a.ShapeTypes.Text }, enumerable: !0, configurable: !0 }), e.prototype.createShapePrimitives = function(t, e) { return [] }, e
            }(r.ShapeDescription);
        e.TextShapeDescription = c
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(2),
            s = n(1),
            a = n(68),
            c = n(4),
            u = function(t) {
                function e(e, n) { void 0 === e && (e = "Pentagon"), void 0 === n && (n = ""); var o = t.call(this, e, n) || this; return o.defaultRatio = o.defaultSize.height / o.defaultSize.width, o }
                return i(e, t), Object.defineProperty(e.prototype, "key", { get: function() { return s.ShapeTypes.Pentagon }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "angleCount", { get: function() { return 5 }, enumerable: !0, configurable: !0 }), e.prototype.createShapePrimitives = function(t) {
                    var e = t.rectangle,
                        n = e.left,
                        o = e.top,
                        i = e.right,
                        s = e.bottom,
                        a = e.width,
                        c = e.height,
                        u = e.center.x,
                        p = c / a / this.defaultRatio,
                        h = Math.PI - this.angle,
                        l = a / 2 * Math.tan(h / 2) * p,
                        d = o + l,
                        f = (c - l) / Math.tan(h) / p,
                        y = n + f,
                        m = i - f;
                    return [new r.PathPrimitive([new r.PathPrimitiveMoveToCommand(u, o), new r.PathPrimitiveLineToCommand(i, d), new r.PathPrimitiveLineToCommand(m, s), new r.PathPrimitiveLineToCommand(y, s), new r.PathPrimitiveLineToCommand(n, d), new r.PathPrimitiveClosePathCommand], t.style)]
                }, e.prototype.processConnectionPoint = function(t, e) {
                    var n = t.getConnectionPointSide(e);
                    if (n === c.ConnectionPointSide.East || n === c.ConnectionPointSide.West) {
                        var o = t.rectangle,
                            i = o.top,
                            r = o.width,
                            s = o.height / r / this.defaultRatio,
                            a = Math.PI - this.angle,
                            u = i + r / 2 * Math.tan(a / 2) * s;
                        n === c.ConnectionPointSide.East ? e.y = u : n === c.ConnectionPointSide.West && (e.y = u)
                    }
                }, e.prototype.calculateHeight = function(t) { var e = Math.PI - this.angle; return t / 2 * Math.tan(e / 2) + t / 2 / Math.cos(e / 2) * Math.sin(e) }, e
            }(a.PolygonShapeDescription);
        e.PentagonShapeDescription = u
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(2),
            s = n(1),
            a = function(t) {
                function e(e, n) { return void 0 === e && (e = "Hexagon"), void 0 === n && (n = ""), t.call(this, e, n) || this }
                return i(e, t), Object.defineProperty(e.prototype, "key", { get: function() { return s.ShapeTypes.Hexagon }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "angleCount", { get: function() { return 6 }, enumerable: !0, configurable: !0 }), e.prototype.createShapePrimitives = function(t) {
                    var e = t.rectangle,
                        n = e.left,
                        o = e.top,
                        i = e.right,
                        s = e.bottom,
                        a = e.width,
                        c = (e.height, e.center.y),
                        u = Math.PI - this.angle,
                        p = a / (1 + 2 * Math.cos(u)),
                        h = n + (a - p) / 2,
                        l = h + p;
                    return [new r.PathPrimitive([new r.PathPrimitiveMoveToCommand(h, o), new r.PathPrimitiveLineToCommand(l, o), new r.PathPrimitiveLineToCommand(i, c), new r.PathPrimitiveLineToCommand(l, s), new r.PathPrimitiveLineToCommand(h, s), new r.PathPrimitiveLineToCommand(n, c), new r.PathPrimitiveClosePathCommand], t.style)]
                }, e.prototype.calculateHeight = function(t) { var e = Math.PI - this.angle; return 2 * (t / (1 + 2 * Math.cos(e))) * Math.sin(e) }, e
            }(n(68).PolygonShapeDescription);
        e.HexagonShapeDescription = a
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(9),
            s = n(2),
            a = n(1),
            c = n(34),
            u = n(4),
            p = function(t) {
                function e(e, n) { void 0 === e && (e = "Triangle"), void 0 === n && (n = ""); var o = t.call(this, e, n) || this; return o.defaultSize.height = o.calculateHeight(r.ShapeDefaultDimension), o }
                return i(e, t), Object.defineProperty(e.prototype, "key", { get: function() { return a.ShapeTypes.Triangle }, enumerable: !0, configurable: !0 }), e.prototype.createConnectionPoints = function() { return [new c.ConnectionPoint(.5, 0, u.ConnectionPointSide.North), new c.ConnectionPoint(.75, .5, u.ConnectionPointSide.East), new c.ConnectionPoint(.5, 1, u.ConnectionPointSide.South), new c.ConnectionPoint(.25, .5, u.ConnectionPointSide.West)] }, e.prototype.createShapePrimitives = function(t) {
                    var e = t.rectangle,
                        n = e.left,
                        o = e.top,
                        i = e.right,
                        r = e.bottom;
                    return [new s.PathPrimitive([new s.PathPrimitiveMoveToCommand(e.center.x, o), new s.PathPrimitiveLineToCommand(i, r), new s.PathPrimitiveLineToCommand(n, r), new s.PathPrimitiveClosePathCommand], t.style)]
                }, e.prototype.calculateHeight = function(t) { return Math.sqrt(Math.pow(t, 2) - Math.pow(t / 2, 2)) }, e.prototype.getTextRectangle = function(t, e) { return t.resize(0, .25 * -t.width).offset(0, .25 * t.width) }, e
            }(r.ShapeDescription);
        e.TriangleShapeDescription = p
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(14),
            s = n(1),
            a = n(2),
            c = n(4),
            u = function(t) {
                function e(e, n) { return void 0 === e && (e = "Document"), void 0 === n && (n = "Document"), t.call(this, e, n) || this }
                return i(e, t), Object.defineProperty(e.prototype, "key", { get: function() { return s.ShapeTypes.Document }, enumerable: !0, configurable: !0 }), e.prototype.createShapePrimitives = function(t) { return this.createDocumentPrimitives(t.rectangle, t.style) }, e.prototype.createDocumentPrimitives = function(t, n) {
                    var o = t.left,
                        i = t.top,
                        r = t.right,
                        s = t.bottom,
                        c = t.width,
                        u = t.height,
                        p = t.center.x,
                        h = u * e.curveOffsetRatio;
                    return [].concat([new a.PathPrimitive([new a.PathPrimitiveMoveToCommand(o, i), new a.PathPrimitiveLineToCommand(r, i), new a.PathPrimitiveLineToCommand(r, s), new a.PathPrimitiveQuadraticCurveToCommand(r - .25 * c, s - 2 * h, p, s - h), new a.PathPrimitiveQuadraticCurveToCommand(o + .25 * c, s + h, o, s - h), new a.PathPrimitiveClosePathCommand], n)])
                }, e.prototype.processConnectionPoint = function(t, n) { t.getConnectionPointSide(n) === c.ConnectionPointSide.South && (n.y -= t.size.height * e.curveOffsetRatio) }, e.prototype.getTextRectangle = function(t, n) { return t.resize(0, -t.height * e.curveOffsetRatio) }, e.curveOffsetRatio = .1, e
            }(r.RectangleShapeDescription);
        e.DocumentShapeDescription = u
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(12),
            s = function(t) {
                function e(e, n, o, i, r, s, a, c) { void 0 === s && (s = "none"); var u = t.call(this, a, c) || this; return u.x = e, u.y = n, u.width = o, u.height = i, u.url = r, u.preserveAspectRatio = s, u }
                return i(e, t), e.prototype.createMainElement = function() { return document.createElementNS(r.svgNS, "image") }, e.prototype.applyElementProperties = function(e) { this.setUnitAttribute(e, "x", this.x), this.setUnitAttribute(e, "y", this.y), this.setUnitAttribute(e, "width", this.width), this.setUnitAttribute(e, "height", this.height), this.setUnitAttribute(e, "href", this.url), this.setUnitAttribute(e, "preserveAspectRatio", this.preserveAspectRatio), t.prototype.applyElementProperties.call(this, e) }, e
            }(n(18).SvgPrimitive);
        e.ImagePrimitive = s
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = n(42),
            i = n(2),
            r = n(8),
            s = n(28),
            a = n(23),
            c = n(20),
            u = function() {
                function t(t, e, n, o, i) { this.x = t, this.y = e, this.size = n, this.borderThickness = o, this.className = i, this.animationStarted = !1 }
                return t.createLoadingIndicatorPrimitives = function(e, n, o, i, r) { return new t(e, n, o, i, r).createLoadingIndicatorPrimitive() }, t.createUserIconPrimitives = function(e, n, o, i, r) { return new t(e, n, o, i, r).createUserIconPrimitive() }, t.createWarningIconPrimitives = function(e, n, o, i) { return new t(e, n, o, void 0, i).createWarningIconPrimitive() }, t.prototype.rotate = function(t, e, n, o) {
                    if (this.animationStarted) {
                        var i = "rotate(" + Math.round(o) % 1080 / 3 + " " + e + " " + n + ")";
                        t.setAttribute("transform", i), this.animationRequestId = requestAnimationFrame(function(o) { this.rotate(t, e, n, o) }.bind(this))
                    }
                }, t.prototype.onApplyLoadingIndicatorElementProperties = function(t) {
                    var e = [r.UnitConverter.twipsToPixelsF(this.x + this.size / 2), r.UnitConverter.twipsToPixelsF(this.y + this.size / 2)],
                        n = e[0],
                        o = e[1];
                    a.Browser.IE ? (this.animationRequestId = requestAnimationFrame(function(e) { this.rotate(t, n, o, e) }.bind(this)), this.animationStarted = !0) : t.style.setProperty("transform-origin", n + "px " + o + "px")
                }, t.prototype.center = function() { return [r.UnitConverter.twipsToPixelsF(this.x + this.size / 2), r.UnitConverter.twipsToPixelsF(this.y + this.size / 2)] }, t.prototype.createLoadingIndicatorPrimitive = function() {
                    var t = this.center(),
                        e = t[0],
                        n = t[1],
                        a = r.UnitConverter.twipsToPixelsF(this.size / 2 - this.borderThickness / 2);
                    return new s.GroupPrimitive([new o.EllipsePrimitive(e + "", n + "", a + "", a + ""), new i.PathPrimitive([new i.PathPrimitiveMoveToCommand(e + a + "", n + ""), new i.PathPrimitiveArcToCommand(a + "", a + "", 0, !1, !1, e + "", n - a + "")])], this.className, void 0, void 0, this.onApplyLoadingIndicatorElementProperties.bind(this), this.onBeforeDispose.bind(this))
                }, t.prototype.createUserIconPrimitive = function() {
                    var t = this.center(),
                        e = t[0],
                        n = t[1],
                        a = r.UnitConverter.twipsToPixelsF(this.size / 2 - this.borderThickness / 2),
                        c = r.UnitConverter.twipsToPixelsF(this.size);
                    return new s.GroupPrimitive([new o.EllipsePrimitive(e + "", n + "", a + "", a + "", void 0, "dxdi-background"), new o.EllipsePrimitive(e + "", n - c / 8 + "", c / 8 + "", c / 8 + ""), new i.PathPrimitive([new i.PathPrimitiveMoveToCommand(e + "", n + c / 16 + ""), new i.PathPrimitiveCubicCurveToCommand(e + .1375 * c + "", n + c / 16 + "", e + c / 4 + "", n + .11875 * c + "", e + c / 4 + "", n + .1875 * c + ""), new i.PathPrimitiveLineToCommand(e + c / 4 + "", n + c / 4 + ""), new i.PathPrimitiveLineToCommand(e - c / 4 + "", n + c / 4 + ""), new i.PathPrimitiveLineToCommand(e - c / 4 + "", n + .1875 * c + ""), new i.PathPrimitiveCubicCurveToCommand(e - c / 4 + "", n + .11875 * c + "", e - .1375 * c + "", n + c / 16 + "", e + "", n + c / 16 + ""), new i.PathPrimitiveClosePathCommand])], this.className)
                }, t.prototype.createWarningIconPrimitive = function() {
                    var t = this.center(),
                        e = t[0],
                        n = t[1],
                        i = r.UnitConverter.twipsToPixelsF(this.size / 2) - 1,
                        a = r.UnitConverter.twipsToPixelsF(this.size / 8);
                    return new s.GroupPrimitive([new o.EllipsePrimitive(e + "", n + "", i + "", i + ""), new c.RectanglePrimitive(e - a / 2 + .5 + "", n + i - r.UnitConverter.twipsToPixelsF(this.size / 4) + "", a + "", a + ""), new c.RectanglePrimitive(e - a / 2 + .5 + "", n - i + r.UnitConverter.twipsToPixelsF(this.size / 4) - a + "", a + "", i + "")], this.className)
                }, t.prototype.onBeforeDispose = function() { this.animationRequestId && cancelAnimationFrame(this.animationRequestId), this.animationStarted = !1 }, t
            }();
        e.ShapeImageIndicator = u
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = n(49),
            i = function() {
                function t(t) { this.loadedCallback = t }
                return t.prototype.load = function(t) { t.isLoaded ? this.loadedCallback(t) : t.isLoading || this.loadInner(t) }, t.prototype.loadInner = function(t) { var e = this; return t.imageUrl ? this.loadPictureByUrl(t, function() { return e.finalizeLoading(t, t) }) : t.base64 && this.loadPictureByBase64(t, function() { return e.finalizeLoading(t, t) }), t }, t.prototype.finalizeLoading = function(t, e) { e || (e = o.ImageCache.instance.getImageData(t.actualId)), e.isLoaded || o.ImageCache.instance.finalizeLoading(e, t), this.loadedCallback(e) }, t.prototype.loadPictureByBase64 = function(t, e) {
                    var n = new Image;
                    n.onload = function() { e(t) }, n.src = t.base64
                }, t.prototype.loadPictureByUrl = function(t, e) {
                    var n = this,
                        o = new XMLHttpRequest;
                    try {
                        o.onload = function() {
                            var i = new FileReader;
                            i.onloadend = function() { t.base64 = i.result, n.loadPictureByBase64(t, function(t) { return e(t) }) }, i.readAsDataURL(o.response)
                        }, o.onerror = function() { return e(t) }, o.onloadend = function() { 404 === o.status && e(t) }, o.open("GET", t.imageUrl, !0), o.responseType = "blob", t.startLoading(), o.send()
                    } catch (t) {}
                }, t
            }();
        e.ImageLoader = i
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(9),
            s = n(0),
            a = n(20),
            c = n(2),
            u = n(15),
            p = n(10),
            h = n(28),
            l = n(34),
            d = n(4),
            f = function(t) {
                function e(e, n, o) { return void 0 === e && (e = "Container"), void 0 === n && (n = ""), void 0 === o && (o = new s.Size(2 * r.ShapeDefaultDimension, 1.5 * r.ShapeDefaultDimension)), t.call(this, e, n, o) || this }
                return i(e, t), Object.defineProperty(e.prototype, "enableChildren", { get: function() { return !0 }, enumerable: !0, configurable: !0 }), e.prototype.createConnectionPoints = function() { return [new l.ConnectionPoint(.25, 0, d.ConnectionPointSide.North), new l.ConnectionPoint(.5, 0, d.ConnectionPointSide.North), new l.ConnectionPoint(.75, 0, d.ConnectionPointSide.North), new l.ConnectionPoint(1, .25, d.ConnectionPointSide.East), new l.ConnectionPoint(1, .5, d.ConnectionPointSide.East), new l.ConnectionPoint(1, .75, d.ConnectionPointSide.East), new l.ConnectionPoint(.75, 1, d.ConnectionPointSide.South), new l.ConnectionPoint(.5, 1, d.ConnectionPointSide.South), new l.ConnectionPoint(.25, 1, d.ConnectionPointSide.South), new l.ConnectionPoint(0, .75, d.ConnectionPointSide.West), new l.ConnectionPoint(0, .5, d.ConnectionPointSide.West), new l.ConnectionPoint(0, .25, d.ConnectionPointSide.West)] }, e.prototype.getConnectionPointIndexForItem = function(t, e) { return 4 === t.getConnectionPoints().length ? 3 * e + 1 : e }, e.prototype.getConnectionPointIndexForSide = function(t) { return 3 * t + 1 }, e.prototype.createShapePrimitives = function(t, e) {
                    var n = t.rectangle,
                        o = n.left,
                        i = n.top,
                        r = n.width,
                        s = n.height,
                        c = [];
                    return t.expanded && (c = c.concat([new a.RectanglePrimitive(o, i, r, s, t.style)])), c.concat(this.createHeaderPrimitives(t, e))
                }, e.prototype.createExpandButtonPrimitives = function(t, n) {
                    var o = [new c.PathPrimitiveMoveToCommand(n.left + n.width * ((1 - e.expandButtonSignRatio) / 2), n.center.y), new c.PathPrimitiveLineToCommand(n.left + n.width * ((1 - e.expandButtonSignRatio) / 2 + e.expandButtonSignRatio), n.center.y)];
                    t.expanded || (o = o.concat([new c.PathPrimitiveMoveToCommand(n.center.x, n.top + n.height * ((1 - e.expandButtonSignRatio) / 2)), new c.PathPrimitiveLineToCommand(n.center.x, n.top + n.height * ((1 - e.expandButtonSignRatio) / 2 + e.expandButtonSignRatio))]));
                    var i = n.inflate(-n.width * (1 - e.expandButtonRectRatio) / 2, -n.height * (1 - e.expandButtonRectRatio) / 2);
                    return [new h.GroupPrimitive([new a.RectanglePrimitive(i.left, i.top, i.width, i.height, t.style), new c.PathPrimitive(o, t.style)], "shape-expand-btn", null, null, function(e) { u.RenderUtils.setElementEventData(e, p.MouseEventElementType.ShapeExpandButton, t.key) })]
                }, e.headerSize = 360, e.headerToolboxSizeRatio = .2, e.expandButtonRectRatio = .5, e.expandButtonSignRatio = .3, e
            }(r.ShapeDescription);
        e.ContainerDescription = f
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = function(t) {
            function e(e, n) { var o = t.call(this) || this; return o.shapeKey = e, o.parameters = n, o }
            return i(e, t), e.prototype.redo = function(t) {
                var e = t.model.findShape(this.shapeKey);
                this.oldParameters = e.parameters.clone(), t.changeShapeParameters(e, this.parameters)
            }, e.prototype.undo = function(t) {
                var e = t.model.findShape(this.shapeKey);
                t.changeShapeParameters(e, this.oldParameters)
            }, e
        }(n(3).HistoryItem);
        e.ChangeShapeParametersHistoryItem = r
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = function(t) {
            function e(e, n, o) { var i = t.call(this) || this; return i.itemKey = e, i.styleProperty = n, i.styleValue = o, i }
            return i(e, t), e.prototype.redo = function(t) {
                var e = t.model.findItem(this.itemKey);
                this.oldStyleValue = e.style[this.styleProperty], t.changeStyle(e, this.styleProperty, this.styleValue)
            }, e.prototype.undo = function(t) {
                var e = t.model.findItem(this.itemKey);
                t.changeStyle(e, this.styleProperty, this.oldStyleValue)
            }, e
        }(n(3).HistoryItem);
        e.ChangeStyleHistoryItemBase = r
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = function(t) {
            function e(e, n) { var o = t.call(this) || this; return o.itemKey = e.key, o.locked = n, o }
            return i(e, t), e.prototype.redo = function(t) {
                var e = t.model.findItem(this.itemKey);
                this.oldLocked = e.locked, t.changeLocked(e, this.locked)
            }, e.prototype.undo = function(t) {
                var e = t.model.findItem(this.itemKey);
                t.changeLocked(e, this.oldLocked)
            }, e
        }(n(3).HistoryItem);
        e.ChangeLockedHistoryItem = r
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(11),
            s = n(0),
            a = n(25),
            c = n(5),
            u = n(1),
            p = n(40),
            h = n(106),
            l = n(71),
            d = n(8),
            f = function(t) {
                function e(e) { var n = t.call(this) || this; return n.obj = l.ImportUtils.parseJSON(e), n }
                return i(e, t), e.prototype.getObject = function() { return this.obj }, e.prototype.getPageObject = function(t) { return t.page }, e.prototype.getShapeObjects = function(t) { return t.shapes }, e.prototype.getConnectorObjects = function(t) { return t.connectors }, e.prototype.importPageSettings = function(t, e) { e && (this.assert(e.width, "number"), this.assert(e.height, "number"), "number" == typeof e.width && (t.size.width = e.width), "number" == typeof e.height && (t.size.height = e.height), "number" == typeof e.pageColor ? t.pageColor = e.pageColor : "string" == typeof e.pageColor && (t.pageColor = d.ColorHelper.stringToColor(e.pageColor)), "number" == typeof e.pageWidth && (t.pageSize.width = e.pageWidth), "number" == typeof e.pageHeight && (t.pageSize.height = e.pageHeight), "boolean" == typeof e.pageLandscape && (t.pageLandscape = e.pageLandscape), "number" == typeof e.units && (t.units = e.units)) }, e.prototype.importShape = function(t) {
                    this.assert(t.key, "string"), this.assert(t.x, "number"), this.assert(t.y, "number"), this.assert(t.type, "string");
                    var e = t.type,
                        n = a.ShapeDescriptionManager.get(e),
                        o = new s.Point(t.x, t.y),
                        i = new r.Shape(n || a.ShapeDescriptionManager.get(u.ShapeTypes.Rectangle), o);
                    return i.key = t.key, "string" != typeof t.dataKey && "number" != typeof t.dataKey || (i.dataKey = t.dataKey), "boolean" == typeof t.locked && (i.locked = t.locked), "number" == typeof t.width && (i.size.width = t.width), "number" == typeof t.height && (i.size.height = t.height), "string" == typeof t.text && (i.text = t.text), "string" == typeof t.imageUrl && (i.image = new p.ImageInfo(t.imageUrl)), t.parameters && (i.parameters.fromObject(t.parameters), i.description.normalizeParameters(i, i.parameters)), t.style && i.style.fromObject(t.style), t.styleText && i.styleText.fromObject(t.styleText), "number" == typeof t.zIndex && (i.zIndex = t.zIndex), Array.isArray(t.childKeys) && (i.childKeys = t.childKeys.slice()), "boolean" == typeof t.expanded && (i.expanded = t.expanded), "number" == typeof t.expandedWidth && "number" == typeof t.expandedHeight && (i.expandedSize = new s.Size(t.expandedWidth, t.expandedHeight)), i
                }, e.prototype.importShapeChildren = function(t, e) { return [] }, e.prototype.importConnector = function(t) {
                    var e = this;
                    if (this.assert(t.key, "string"), !Array.isArray(t.points)) throw Error("Invalid Format");
                    var n = t.points.map(function(t) { return e.assert(t.x, "number"), e.assert(t.y, "number"), new s.Point(t.x, t.y) }),
                        o = new c.Connector(n);
                    return o.key = t.key, "string" != typeof t.dataKey && "number" != typeof t.dataKey || (o.dataKey = t.dataKey), "boolean" == typeof t.locked && (o.locked = t.locked), o.endConnectionPointIndex = "number" == typeof t.endConnectionPointIndex ? t.endConnectionPointIndex : -1, o.beginConnectionPointIndex = "number" == typeof t.beginConnectionPointIndex ? t.beginConnectionPointIndex : -1, void 0 !== t.endItemKey && this.assert(t.endItemKey, "string"), void 0 !== t.beginItemKey && this.assert(t.beginItemKey, "string"), o.endItemKey = t.endItemKey, o.beginItemKey = t.beginItemKey, t.texts && o.texts.fromObject(t.texts), t.properties && o.properties.fromObject(t.properties), t.style && o.style.fromObject(t.style), t.styleText && o.styleText.fromObject(t.styleText), "number" == typeof t.zIndex && (o.zIndex = t.zIndex), o
                }, e
            }(h.ImporterBase);
        e.Importer = f
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = n(19),
            i = n(11),
            r = function() {
                function t() {}
                return t.prototype.import = function() {
                    var t = new o.DiagramModel,
                        e = this.getObject();
                    this.importPageSettings(t, this.getPageObject(e));
                    for (var n = this.importShapes(this.getShapeObjects(e)), r = 0; r < n.length; r++) {
                        var s = n[r];
                        if (t.findItem(s.key)) throw Error("Item key is duplicated");
                        t.pushItem(s)
                    }
                    var a = this.importConnectors(this.getConnectorObjects(e));
                    for (r = 0; r < a.length; r++) {
                        var c = a[r];
                        if (c.endItem = t.findItem(c.endItemKey) || void 0, delete c.endItemKey, c.beginItem = t.findItem(c.beginItemKey) || void 0, delete c.beginItemKey, t.findItem(c.key)) throw Error("Item key is duplicated");
                        t.pushItem(c), this.updateConnections(c)
                    }
                    return t.items.forEach(function(e) {
                        e instanceof i.Shape && e.childKeys.forEach(function(n) {
                            var o = t.findItem(n);
                            o && (o.container = e, o.containerLocked = e.locked)
                        })
                    }), t
                }, t.prototype.importItems = function(t) {
                    for (var e, n = [], o = this.getObject(), r = {}, s = this.importShapes(this.getShapeObjects(o)), a = 0; a < s.length; a++) {
                        var c = s[a],
                            u = c.key;
                        e = t.getNextKey(e), c.key = e, r[u] = c, n.push(c)
                    }
                    var p = this.importConnectors(this.getConnectorObjects(o));
                    for (a = 0; a < p.length; a++) {
                        var h = p[a];
                        u = h.key;
                        e = t.getNextKey(e), h.key = e, r[u] = h;
                        var l = h.endItemKey;
                        h.endItem = r[l], delete h.endItemKey;
                        var d = h.beginItemKey;
                        h.beginItem = r[d], delete h.beginItemKey, n.push(h), this.updateConnections(h)
                    }
                    return n.forEach(function(t) {
                        t instanceof i.Shape && (t.childKeys.forEach(function(e) {
                            var n = r[e];
                            n && (n.container = t, n.containerLocked = t.locked)
                        }), t.childKeys = t.childKeys.map(function(t) { return r[t] && r[t].key }).filter(function(t) { return t }))
                    }), n
                }, t.prototype.importItemsData = function(t) {
                    for (var e = this.getObject(), n = this.importShapes(this.getShapeObjects(e)), o = 0; o < n.length; o++) {
                        var i = n[o],
                            r = void 0;
                        void 0 !== i.dataKey && (r = t.findShapeByDataKey(i.dataKey)), r || (r = t.findShape(i.key)), r && (r.dataKey = i.dataKey, r.locked = i.locked, r.position = i.position.clone(), r.expanded = i.expanded, i.expandedSize && (r.expandedSize = i.expandedSize.clone()), r.size = i.size.clone(), r.parameters = i.parameters.clone(), r.style = i.style.clone(), r.styleText = i.styleText.clone(), r.zIndex = i.zIndex, r.text = i.text, r.description = i.description, r.image = i.image.clone())
                    }
                    var s = this.importConnectors(this.getConnectorObjects(e));
                    for (o = 0; o < s.length; o++) {
                        var a = s[o],
                            c = void 0;
                        void 0 !== a.dataKey && (c = t.findConnectorByDataKey(a.dataKey)), c || (c = t.findConnector(a.key)), c && (c.dataKey = a.dataKey, c.locked = a.locked, c.points = a.points.slice(), c.properties = a.properties.clone(), c.style = a.style.clone(), c.endConnectionPointIndex = a.endConnectionPointIndex, c.beginConnectionPointIndex = a.beginConnectionPointIndex, c.texts = a.texts.clone(), c.styleText = a.styleText.clone(), c.zIndex = a.zIndex)
                    }
                }, t.prototype.importShapes = function(t) {
                    var e = [];
                    if (!t) return e;
                    if (!Array.isArray(t)) throw Error("Invalid Format");
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n],
                            i = this.importShape(o);
                        e.push(i), e = e.concat(this.importShapeChildren(o, i))
                    }
                    return e
                }, t.prototype.importConnectors = function(t) {
                    var e = [];
                    if (!t) return e;
                    if (!Array.isArray(t)) throw Error("Invalid Format");
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        e.push(this.importConnector(o))
                    }
                    return e
                }, t.prototype.updateConnections = function(t) { t.endItem && (t.endItem instanceof i.Shape ? (t.endItem.attachedConnectors.push(t), t.points[t.points.length - 1] = t.endItem.getConnectionPointPosition(t.endConnectionPointIndex, t.points[t.points.length - 2])) : (t.endItem = void 0, t.endConnectionPointIndex = -1)), t.beginItem && (t.beginItem instanceof i.Shape ? (t.beginItem.attachedConnectors.push(t), t.points[0] = t.beginItem.getConnectionPointPosition(t.beginConnectionPointIndex, t.points[1])) : (t.beginItem = void 0, t.beginConnectionPointIndex = -1)) }, t.prototype.assert = function(t, e) { if (void 0 === t) throw Error("Invalid Format"); if (void 0 !== e && typeof t !== e) throw Error("Invalid Format") }, t
            }();
        e.ImporterBase = r
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this }
            return i(e, t), e
        }(n(7).SimpleCommandBase);
        e.StylePropertyCommandBase = r
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this }
            return i(e, t), e.prototype.executeCore = function(t, e) {
                var n = this;
                this.control.history.beginTransaction();
                var o = this.control.selection.getSelectedItems();
                return e = this.processParameter(e), o.forEach(function(t) {
                    var o = n.getStyleProperty();
                    n.control.history.addAndRedo(n.createHistoryItem(t, o, e))
                }), this.updateInputPosition(e), this.control.history.endTransaction(), !0
            }, e.prototype.getDefaultValue = function() { return this.getDefaultStyleObj()[this.getStyleProperty()] }, e.prototype.processParameter = function(t) { return t }, e
        }(n(107).StylePropertyCommandBase);
        e.ChangeStylePropertyCommandBase = r
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(108),
            s = n(46),
            a = n(27),
            c = function(t) {
                function e() { return null !== t && t.apply(this, arguments) || this }
                return i(e, t), e.prototype.getValue = function() { return this.control.selection.inputPosition.getStylePropertyValue(this.getStyleProperty()) }, e.prototype.getStyleObj = function(t) { return t.style }, e.prototype.getDefaultStyleObj = function() { return new a.Style }, e.prototype.createHistoryItem = function(t, e, n) { return new s.ChangeStyleHistoryItem(t.key, e, n) }, e.prototype.updateInputPosition = function(t) { this.control.selection.inputPosition.setStylePropertyValue(this.getStyleProperty(), t) }, e
            }(r.ChangeStylePropertyCommandBase);
        e.ChangeStylePropertyCommand = c
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(55),
            s = function(t) {
                function e() { return null !== t && t.apply(this, arguments) || this }
                return i(e, t), e.prototype.getValue = function() { return this.control.selection.inputPosition.getConnectorPropertyValue(this.getPropertyName()) }, e.prototype.getDefaultValue = function() { return this.getPropertyDefaultValue() }, e.prototype.executeCore = function(t, e) {
                    var n = this;
                    return this.control.history.beginTransaction(), this.control.selection.getSelectedConnectors().forEach(function(t) {
                        var o = n.getPropertyName();
                        n.control.history.addAndRedo(new r.ChangeConnectorPropertyHistoryItem(t.key, o, e))
                    }), this.control.selection.inputPosition.setConnectorPropertyValue(this.getPropertyName(), e), this.control.history.endTransaction(), !0
                }, e
            }(n(7).SimpleCommandBase);
        e.ChangeConnectorPropertyCommand = s
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = n(0),
            i = n(56),
            r = function() {
                function t() { this.nodeKeys = [], this.nodeToLayout = {}, this.edgeToPosition = {} }
                return t.prototype.forEachNode = function(t) {
                    var e = this;
                    this.nodeKeys.forEach(function(n) { return t(e.nodeToLayout[n], n) })
                }, t.prototype.addNode = function(t) {
                    if (this.nodeToLayout[t.key]) throw Error("Node layout is already registered");
                    this.nodeKeys.push(t.key), this.nodeToLayout[t.key] = t
                }, t.prototype.addEdge = function(t) {
                    if (this.edgeToPosition[t.key]) throw Error("Edge layout is already registered");
                    this.edgeToPosition[t.key] = t
                }, t.prototype.getRectangle = function(t) { var e = this; return o.GeometryUtils.getCommonRectangle(this.nodeKeys.map(function(t) { return e.nodeToLayout[t].rectangle })) }, t.prototype.offsetNodes = function(e, n) {
                    var o = this;
                    void 0 === e && (e = 0), void 0 === n && (n = 0);
                    var r = new t;
                    return this.nodeKeys.forEach(function(t) {
                        var s = o.nodeToLayout[t];
                        r.addNode(new i.NodeLayout(s.info, s.position.offset(e, n)))
                    }), r.copyEdges(this), r
                }, t.prototype.extend = function(t) {
                    var e = this;
                    t.forEachNode(function(t) { return e.addNode(t) }), this.copyEdges(t)
                }, t.prototype.copyEdges = function(t) {
                    var e = this;
                    Object.keys(t.edgeToPosition).forEach(function(n) {
                        var o = t.edgeToPosition[n];
                        e.addEdge(new i.EdgeLayout(o.key, o.beginIndex, o.endIndex))
                    })
                }, t
            }();
        e.GraphLayout = r
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = n(22),
            i = function() {
                function t(t, e) { this.settings = t, this.graph = e }
                return t.prototype.getBreadthNodeSizeCore = function(t) { return this.settings.orientation === o.DataLayoutOrientation.Vertical ? t.size.width + t.margin.left + t.margin.right : t.size.height + t.margin.top + t.margin.bottom }, t.prototype.getDepthNodeSizeCore = function(t) { return this.settings.orientation === o.DataLayoutOrientation.Horizontal ? t.size.width + t.margin.left + t.margin.right : t.size.height + t.margin.top + t.margin.bottom }, t.prototype.chooseDirectionValue = function(t, e) { return this.settings.direction === o.LogicalDirectionKind.Forward ? t : e }, t.prototype.getDirectionValue = function(t) { return this.settings.direction === o.LogicalDirectionKind.Forward ? t : -t }, t.prototype.getComponentOffset = function(t) { var e = t.getRectangle(!0); return (this.settings.orientation === o.DataLayoutOrientation.Vertical ? e.width : e.height) + this.settings.componentSpacing }, t.prototype.setComponentOffset = function(t, e) { return this.settings.orientation === o.DataLayoutOrientation.Vertical ? t.offsetNodes(e) : t.offsetNodes(0, e) }, t
            }();
        e.LayoutBuilder = i
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = n(53),
            i = n(31),
            r = n(70),
            s = function() {
                function t() {}
                return t.removeCycles = function(t) { var e = this.getFeedbackSet(t); return this.reverseEdges(t, e) }, t.getFeedbackSet = function(t) {
                    for (var e = this, n = {}, o = this.getNonTrivialStronglyConnectedComponents(t); o.length;) o.forEach(function(t) {
                        var o = e.getMaxCyclicEdges(t);
                        o.forEach(function(t) { return delete n[t.reverse().getHashKey()] }), o.forEach(function(t) { return n[t.getHashKey()] = !0 })
                    }), o = this.getNonTrivialStronglyConnectedComponents(this.reverseEdges(t, n).graph);
                    return n
                }, t.getMaxCyclicEdges = function(t) {
                    var e = {},
                        n = {},
                        o = {},
                        s = [],
                        a = [],
                        c = t.createIterator(i.ConnectionMode.Outgoing);
                    c.visitEachEdgeOnce = !1, c.onNode = function(t) { n[t.key] = !0 }, c.skipNode = function(t) {
                        if (n[t.key]) {
                            for (var i = [], r = 0; r < s.length; r++) { var c = s[r]; if (void 0 === o[c.key] && (o[c.key] = 0), o[c.key]++, i.push(c), c.from === t.key) break }
                            a.push(i)
                        }
                        return n[t.key] || e[t.key]
                    }, c.skipEdge = function(t) { return !1 }, c.onEdge = function(t) { s.splice(0, 0, t) }, c.onAfterEdge = function(t) { s.splice(0, 1) }, c.onAllEdges = function(t) { e[t.key] = !0, n[t.key] = !1 }, c.iterate(t.nodes[0]);
                    var u = new r.HashSet([], function(t) { return t.key });
                    return a.forEach(function(t) { u.tryPush(t.reduce(function(t, e) { return o[e.key] > o[t.key] ? e : t }, t[0])) }), u.list()
                }, t.reverseEdges = function(t, e) {
                    var n = new r.HashSet([], function(t) { return t.getHashKey() }),
                        i = {},
                        s = {};
                    return t.edges.forEach(function(t) { e[t.getHashKey()] && (t = t.reverse(), i[t.key] = !0), n.tryPush(t) || (s[t.key] = !0, delete i[t.key]) }), { graph: new o.Graph(t.nodes.map(function(e) { return t.getNode(e) }), n.list()), reversedEdges: i, removedEdges: s }
                }, t.getNonTrivialStronglyConnectedComponents = function(t) { return this.getStronglyConnectedComponents(t).filter(function(t) { return t.edges.length }) }, t.getStronglyConnectedComponents = function(t) {
                    for (var e = this, n = [], o = 0, r = {}, s = {}, a = {}, c = [], u = {}, p = 0; p < t.nodes.length; p++) {
                        var h = t.nodes[p],
                            l = t.createIterator(i.ConnectionMode.Outgoing);
                        l.visitEachEdgeOnce = !1, l.visitEachNodeOnce = !1, l.onNode = function(t) { u[t.key] = !0, n.push(t), a[t.key] = !0, s[t.key] = o, r[t.key] = o, o++ }, l.skipNode = function(t) { return u[t.key] }, l.skipEdge = function(t) { var e = u[t.to]; return e && a[t.to] && (s[t.from] = Math.min(s[t.from], r[t.to])), e }, l.onAfterEdge = function(t) { s[t.from] = Math.min(s[t.from], s[t.to]) }, l.onAllEdges = function(o, i) { i && s[o.key] === r[o.key] && c.push(e.getStronglyConnectedComponent(t, o, n, a)) }, l.iterate(h)
                    }
                    return c
                }, t.getStronglyConnectedComponent = function(t, e, n, r) {
                    var s, a = {},
                        c = [],
                        u = [];
                    do { s = n.pop(), a[s.key] || c.push(s), a[s.key] = !0, r[s.key] = !1 } while (s !== e);
                    return c.forEach(function(e) {
                        var n = t.getAdjacentEdges(e.key, i.ConnectionMode.Outgoing);
                        u.push.apply(u, n.filter(function(t) { return !a[t.key] && a[t.to] })), n.forEach(function(t) { return a[t.key] = !0 })
                    }), new o.Graph(c, u)
                }, t
            }();
        e.CycleRemover = s
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(75),
            s = n(105),
            a = n(11),
            c = n(230),
            u = n(5),
            p = n(231),
            h = n(6),
            l = n(44),
            d = n(13),
            f = function(t) {
                function e() { return null !== t && t.apply(this, arguments) || this }
                return i(e, t), e.prototype.isEnabled = function() { return t.prototype.isEnabled.call(this) && (this.isPasteSupportedByBrowser() || void 0 !== r.ClipboardCommand.clipboardData) }, e.prototype.isVisible = function() { return this.isPasteSupportedByBrowser() || void 0 !== r.ClipboardCommand.clipboardData }, e.prototype.executeCore = function(t, e) { var n = this; return this.getClipboardData(function(t) { n.performPaste(t, e) }), !0 }, e.prototype.performPaste = function(t, e) {
                    this.control.beginUpdate(!0), this.control.history.beginTransaction();
                    var n = [],
                        o = new s.Importer(t).importItems(this.control.model);
                    this.calculateSelectionOffset(o, e);
                    for (var i = 0; i < o.length; i++) {
                        var r = o[i];
                        r instanceof a.Shape ? (r.position = this.getShapeNewPosition(r.position), this.control.history.addAndRedo(new c.ImportShapeHistoryItem(r))) : r instanceof u.Connector && (this.changeConnectorPoints(r), this.control.history.addAndRedo(new p.ImportConnectorHistoryItem(r)));
                        var d = r.container && r.container.key;
                        d && -1 !== n.indexOf(d) || n.push(r.key)
                    }
                    h.ModelUtils.tryUpdateModelSize(this.control.history, this.control.model), this.control.history.addAndRedo(new l.SetSelectionHistoryItem(this.control.selection, n)), this.control.history.endTransaction(), this.control.endUpdate(!0)
                }, e.prototype.calculateSelectionOffset = function(t, e) {}, e.getShapeNewPosition = function(t, n) { for (; t.findShapeAtPosition(n);) n = n.offset(e.positionOffset, e.positionOffset); return n }, e.changeConnectorPoints = function(t, n) { for (; t.findConnectorAtPoints(n.points);) n.points.forEach(function(t) { t.x += e.positionOffset, t.y += e.positionOffset }) }, e.positionOffset = d.UnitConverter.pixelsToTwips(10), e
            }(r.ClipboardCommand);
        e.PasteSelectionCommandBase = f
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o, i = n(22),
            r = n(73),
            s = n(61);
        ! function(t) { t[t.Tree = 0] = "Tree", t[t.Sugiyama = 1] = "Sugiyama" }(o = e.DataLayoutType || (e.DataLayoutType = {}));
        var a = function() {
            function t(t) { this.layoutType = void 0 !== t && t.type || o.Tree, this.layoutSettings = this.layoutType === o.Sugiyama ? new i.LayoutSettings : new i.TreeLayoutSettings, void 0 !== t && void 0 !== t.orientation && (this.layoutSettings.orientation = t.orientation) }
            return t.prototype.getLayoutBuilder = function(t) { return this.layoutType === o.Tree ? new r.TreeLayoutBuilder(this.layoutSettings, t) : new s.SugiyamaLayoutBuilder(this.layoutSettings, t) }, t
        }();
        e.DataLayoutParameters = a
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(6),
            s = function(t) {
                function e() { return null !== t && t.apply(this, arguments) || this }
                return i(e, t), e.prototype.isEnabled = function() {
                    var e = this,
                        n = this.control.selection.getSelectedItems(!0),
                        o = !1;
                    return n.forEach(function(t) { t.locked !== e.getLockState() && (o = !0) }), t.prototype.isEnabled.call(this) && o
                }, e.prototype.executeCore = function(t, e) { return r.ModelUtils.changeSelectionLocked(this.control.history, this.control.model, this.control.selection, this.getLockState()), !0 }, e
            }(n(7).SimpleCommandBase);
        e.ChangeLockedCommand = s
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(3),
            s = n(40),
            a = function(t) {
                function e(e, n) { var o = t.call(this) || this; return o.shapeKey = e.key, o.imageUrl = n, o }
                return i(e, t), e.prototype.redo = function(t) {
                    var e = t.model.findShape(this.shapeKey);
                    this.oldImage = e.image, t.changeShapeImage(e, new s.ImageInfo(this.imageUrl))
                }, e.prototype.undo = function(t) {
                    var e = t.model.findShape(this.shapeKey);
                    t.changeShapeImage(e, this.oldImage)
                }, e
            }(r.HistoryItem);
        e.ChangeShapeImageHistoryItem = a
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(10),
            s = n(265),
            a = n(266),
            c = n(267),
            u = n(268),
            p = n(269),
            h = n(270),
            l = n(271),
            d = n(272),
            f = n(78),
            y = n(122),
            m = n(278),
            g = function(t) {
                function e() { return null !== t && t.apply(this, arguments) || this }
                return i(e, t), e.prototype.finish = function() { this.visualizerManager.resetConnectionPoints(), t.prototype.finish.call(this) }, e.prototype.onMouseDownCore = function(e) {
                    if (e.source.type === r.MouseEventElementType.ConnectorText) {
                        var n = e.source.key;
                        this.modifySelection(e, n), this.handler.switchState(new d.MouseHandlerMoveConnectorTextState(this.handler, this.history, this.model))
                    } else e.source.type === r.MouseEventElementType.ShapeResizeBox ? this.handler.switchState(new a.MouseHandlerResizeShapeState(this.handler, this.history, this.model, this.selection, this.visualizerManager)) : e.source.type === r.MouseEventElementType.ShapeParameterBox ? this.handler.switchState(new u.MouseHandlerDragParameterPointState(this.handler, this.history, this.model)) : e.source.type === r.MouseEventElementType.ConnectorPoint ? this.handler.switchState(new s.MouseHandlerMoveConnectorPointState(this.handler, this.history, this.model, this.visualizerManager)) : e.source.type === r.MouseEventElementType.ConnectorSide ? this.handler.switchState(new c.MouseHandlerMoveConnectorSideState(this.handler, this.history, this.model)) : e.source.type === r.MouseEventElementType.ConnectorOrthogonalSide ? this.handler.switchState(new h.MouseHandlerMoveConnectorOrthogonalSideState(this.handler, this.history, this.model)) : e.source.type === r.MouseEventElementType.ShapeConnectionPoint ? this.handler.switchState(new p.MouseHandlerCreateConnectorState(this.handler, this.history, this.model, this.visualizerManager, this.selection)) : t.prototype.onMouseDownCore.call(this, e)
                }, e.prototype.onShapeMouseDown = function(t) {
                    var e = t.source.key;
                    f.MouseHandlerMoveClonedShapeState.isMoveClonedShapeEvent(t) ? (this.selection.add(e), this.handler.switchToMoveClonedShapeState()) : (this.modifySelection(t, e), this.handler.switchState(new m.MouseHandlerMoveShapeState(this.handler, this.history, this.model, this.selection, this.visualizerManager))), this.handler.state.onMouseDown(t)
                }, e.prototype.onDragStart = function(t) { this.handler.switchState(new l.MouseHandlerBeforeToolboxDraggingState(this.handler, this.history, this.model, this.selection, this.visualizerManager)), this.handler.state.onDragStart(t) }, e.prototype.onMouseMoveCore = function(e) { this.updateConnectionsOnMouseMove(e), t.prototype.onMouseMoveCore.call(this, e) }, e.prototype.updateConnectionsOnMouseMove = function(t) {
                    var e = this.model.findItem(t.source.key);
                    this.visualizerManager.updateConnections(e, t.source.type, t.source.value)
                }, e.prototype.canDragObjectOnMouseDown = function(t) { return !0 }, e.prototype.canClearSelectionOnMouseDown = function() { return !1 }, e.prototype.processOnMouseMoveAfterLimit = function(t) { this.startSelection(t) }, e.prototype.canSelectOnMouseUp = function(t) { return !0 }, e.prototype.canClearSelectionOnMouseUp = function() { return !0 }, e
            }(y.MouseHandlerDefaultStateBase);
        e.MouseHandlerDefaultState = g
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(5),
            s = n(10),
            a = n(26),
            c = n(90),
            u = n(37),
            p = n(50),
            h = n(6),
            l = function(t) {
                function e(e, n, o, i) { var r = t.call(this, e, n) || this; return r.model = o, r.visualizerManager = i, r }
                return i(e, t), e.prototype.finish = function() { this.visualizerManager.resetConnectionTarget(), this.visualizerManager.resetConnectionPoints(), t.prototype.finish.call(this) }, e.prototype.onMouseMove = function(e) {
                    if (t.prototype.onMouseMove.call(this, e), this.connector) {
                        var n = this.connector.getExtremeItem(this.pointPosition);
                        this.visualizerManager.setConnectionTarget(n, e.source.type);
                        var o = this.connector.getExtremeConnectionPointIndex(this.pointPosition);
                        n || -1 === this.oppositeConnectionPointIndex || (n = this.model.findItem(e.source.key)), this.visualizerManager.setConnectionPoints(n, e.source.type, o, !0)
                    }
                }, e.prototype.onApplyChanges = function(t) {
                    var e = this.getSnappedPoint(t, t.modelPoint);
                    if (void 0 !== this.pointPosition) {
                        void 0 === this.oppositePointPosition && (this.oppositePointPosition = this.getOppositePointPosition(), this.oppositeItem = this.connector.getExtremeItem(this.oppositePointPosition), this.oppositeConnectionPointIndex = this.connector.getExtremeConnectionPointIndex(this.oppositePointPosition));
                        var n = this.model.findItem(t.source.key),
                            o = -1;
                        t.source.type === s.MouseEventElementType.ShapeConnectionPoint && (o = parseInt(t.source.value)), !n || n.isLocked || t.source.type !== s.MouseEventElementType.Shape && t.source.type !== s.MouseEventElementType.ShapeConnectionPoint || this.connector.getExtremeItem(this.oppositePointPosition) === n && (-1 === o || -1 === this.oppositeConnectionPointIndex || o === this.oppositeConnectionPointIndex) ? this.connector.getExtremeItem(this.pointPosition) && (this.history.addAndRedo(new c.DeleteConnectionHistoryItem(this.connector, this.pointPosition)), this.oppositeItem && this.updateOppositeItemConnectionPointIndex(this.oppositeConnectionPointIndex)) : (this.connector.getExtremeItem(this.pointPosition) === n && this.connector.getExtremeConnectionPointIndex(this.pointPosition) === o || (this.connector.getExtremeItem(this.pointPosition) && this.history.addAndRedo(new c.DeleteConnectionHistoryItem(this.connector, this.pointPosition)), this.history.addAndRedo(new u.AddConnectionHistoryItem(this.connector, n, o, this.pointPosition)), this.oppositeItem && this.updateOppositeItemConnectionPointIndex(o)), e = n.getConnectionPointPosition(o, this.connector.points[this.pointIndex + (this.pointPosition === r.ConnectorPosition.End ? -1 : 1)]), this.visualizerManager.setConnectionPointIndex(o))
                    }
                    this.history.addAndRedo(new p.MoveConnectorPointHistoryItem(this.connector.key, this.pointIndex, e)), h.ModelUtils.updateConnectorAttachedPoints(this.history, this.model, this.connector), this.handler.tryUpdateModelSize()
                }, e.prototype.updateOppositeItemConnectionPointIndex = function(t) { this.history.addAndRedo(new c.DeleteConnectionHistoryItem(this.connector, this.oppositePointPosition)), this.history.addAndRedo(new u.AddConnectionHistoryItem(this.connector, this.oppositeItem, -1 === t ? -1 : this.oppositeConnectionPointIndex, this.oppositePointPosition)) }, e.prototype.onFinishWithChanges = function() { h.ModelUtils.updateConnectorContainer(this.history, this.model, this.connector), h.ModelUtils.removeUnnecessaryConnectorPoints(this.history, this.connector) }, e.prototype.getDraggingElementKeys = function() { return this.connector ? [this.connector.key] : [] }, e.prototype.getOppositePointPosition = function() { return this.pointPosition === r.ConnectorPosition.Begin ? r.ConnectorPosition.End : r.ConnectorPosition.Begin }, e
            }(a.MouseHandlerDraggingState);
        e.MouseHandlerMoveConnectorPointStateBase = l
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = function(t) {
            function e(e, n, o) { var i = t.call(this) || this; return i.connectorKey = e, i.pointIndex = n, i.point = o, i }
            return i(e, t), e.prototype.redo = function(t) {
                var e = t.model.findConnector(this.connectorKey);
                t.addConnectorPoint(e, this.pointIndex, this.point.clone())
            }, e.prototype.undo = function(t) {
                var e = t.model.findConnector(this.connectorKey);
                t.deleteConnectorPoint(e, this.pointIndex)
            }, e
        }(n(3).HistoryItem);
        e.AddConnectorPointHistoryItem = r
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(0),
            s = n(10),
            a = n(26),
            c = n(6),
            u = function(t) {
                function e(e, n, o, i, r) { var s = t.call(this, e, n) || this; return s.model = o, s.selection = i, s.visualizerManager = r, s.startScrollLeft = 0, s.startScrollTop = 0, s }
                return i(e, t), e.prototype.finish = function() { this.visualizerManager.resetExtensionLines(), this.visualizerManager.resetContainerTarget(), this.visualizerManager.resetConnectionTarget(), this.visualizerManager.resetConnectionPoints(), t.prototype.finish.call(this) }, e.prototype.onMouseDown = function(e) { this.startPoint = e.modelPoint, this.shapes = this.selection.getSelectedShapes(!1, !0), this.connectors = this.selection.getSelectedConnectors(!1, !0), 0 !== this.shapes.length ? (this.startShapePositions = this.shapes.map(function(t) { return t.position.clone() }), this.startConnectorPoints = this.connectors.map(function(t) { return t.points.map(function(t) { return t.clone() }) }), this.connectorsWithoutBeginItemInfo = c.ModelUtils.getConnectorsWithoutBeginItemInfo(this.model), this.connectorsWithoutEndItemInfo = c.ModelUtils.getConnectorsWithoutEndItemInfo(this.model), t.prototype.onMouseDown.call(this, e)) : this.handler.switchToDefaultState() }, e.prototype.onMouseMove = function(e) {
                    t.prototype.onMouseMove.call(this, e), this.visualizerManager.setExtensionLines(this.selection.getSelectedShapes(!1, !0));
                    var n = c.ModelUtils.findContainerByEventKey(this.model, this.selection, e.source.key);
                    n && c.ModelUtils.canInsertSelectionToContainer(this.model, this.selection, n) ? this.visualizerManager.setContainerTarget(n, e.source.type) : this.visualizerManager.resetContainerTarget()
                }, e.prototype.onApplyChanges = function(t) {
                    var e = this;
                    this.shapes.forEach(function(n, o) {
                        var i = e.getPosition(t, e.startShapePositions[o]);
                        c.ModelUtils.setShapePosition(e.history, e.model, n, i), c.ModelUtils.updateMovingShapeConnections(e.history, n, e.connectorsWithoutBeginItemInfo, e.connectorsWithoutEndItemInfo, function() { e.visualizerManager.resetConnectionTarget(), e.visualizerManager.resetConnectionPoints() }, function(t, n) { e.visualizerManager.setConnectionTarget(t, s.MouseEventElementType.Shape), e.visualizerManager.setConnectionPoints(t, s.MouseEventElementType.Shape, n, !0) }), c.ModelUtils.updateShapeAttachedConnectors(e.history, e.model, n)
                    }), this.connectors.forEach(function(t, n) {
                        var o = e.startShapePositions[0].offset(-e.shapes[0].position.x, -e.shapes[0].position.y);
                        if (0 !== o.x || 0 !== o.y)
                            for (var i = t.beginItem ? 1 : 0, r = t.endItem ? t.points.length - 2 : t.points.length - 1, s = i; s <= r; s++) c.ModelUtils.setConnectorPoint(e.history, e.model, t, s, e.startConnectorPoints[n][s].offset(-o.x, -o.y))
                    });
                    var n = c.ModelUtils.findContainerByEventKey(this.model, this.selection, t.source.key);
                    n && c.ModelUtils.canInsertSelectionToContainer(this.model, this.selection, n) ? c.ModelUtils.insertSelectionToContainer(this.history, this.model, this.selection, n) : c.ModelUtils.removeSelectionFromContainer(this.history, this.model, this.selection), this.handler.tryUpdateModelSize(function(t, n) { e.connectorsWithoutBeginItemInfo.forEach(function(e) { e.point.x += t, e.point.y += n }), e.connectorsWithoutEndItemInfo.forEach(function(e) { e.point.x += t, e.point.y += n }) })
                }, e.prototype.getDraggingElementKeys = function() { return this.shapes.map(function(t) { return t.key }) }, e.prototype.getXPosition = function(t, e) { return e + t.modelPoint.x - this.startPoint.x }, e.prototype.getYPosition = function(t, e) { return e + t.modelPoint.y - this.startPoint.y }, e.prototype.getPosition = function(t, e) { return new r.Point(this.handler.getSnappedPos(t, this.getXPosition(t, e.x), !0), this.handler.getSnappedPos(t, this.getYPosition(t, e.y), !1)) }, e
            }(a.MouseHandlerDraggingState);
        e.MouseHandlerMoveShapeStateBase = u
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(32),
            s = n(10),
            a = n(16),
            c = n(274),
            u = n(276),
            p = n(277),
            h = n(123),
            l = n(13),
            d = function(t) {
                function e(e, n, o, i, r, s, a, c) { var u = t.call(this, e) || this; return u.history = n, u.selection = o, u.model = i, u.view = r, u.visualizerManager = s, u.settings = a, u.bars = c, u }
                return i(e, t), e.prototype.onMouseDown = function(t) { this.onMouseDownCore(t), this.handler.state !== this && this.handler.state.onMouseDown(t) }, e.prototype.onMouseDownCore = function(t) { t.modifiers === a.ModifierKey.Ctrl ? this.startScrolling(t) : t.source.type === s.MouseEventElementType.Shape && this.canDragObjectOnMouseDown(t.source.key) ? this.onShapeMouseDown(t) : t.source.type === s.MouseEventElementType.Connector && this.canDragObjectOnMouseDown(t.source.key) ? this.onConnectorMouseDown(t) : t.source.type === s.MouseEventElementType.ShapeExpandButton ? this.onShapeExpandBtnMouseDown(t) : (t.source.type !== s.MouseEventElementType.Shape && t.source.type !== s.MouseEventElementType.Connector && this.canClearSelectionOnMouseDown() && this.clearSelection(), this.startPoint = t.modelPoint) }, e.prototype.onMouseMove = function(t) { this.onMouseMoveCore(t), this.handler.state !== this && (this.handler.state.onMouseDown(this.handler.mouseDownEvent), this.handler.state.onMouseMove(t)) }, e.prototype.onMouseMoveCore = function(t) { this.startPoint && (Math.abs(this.startPoint.x - t.modelPoint.x) > e.startLimit || Math.abs(this.startPoint.y - t.modelPoint.y) > e.startLimit) && (this.processOnMouseMoveAfterLimit(t), this.startPoint = void 0) }, e.prototype.onMouseUp = function(t) { this.onMouseUpCore(t), this.handler.state !== this && this.handler.state.onMouseUp(t) }, e.prototype.onMouseUpCore = function(t) { t.source.type === s.MouseEventElementType.Shape && this.canSelectOnMouseUp(t.source.key) ? this.modifySelection(t, t.source.key) : t.source.type === s.MouseEventElementType.Connector && this.canSelectOnMouseUp(t.source.key) ? this.modifySelection(t, t.source.key) : t.source.type === s.MouseEventElementType.ShapeExpandButton && this.canSelectOnMouseUp(t.source.key) ? this.modifySelection(t, t.source.key) : this.startPoint && this.canClearSelectionOnMouseUp() && this.clearSelection(), this.startPoint = void 0 }, e.prototype.onMouseWheel = function(t) { return !!(t.modifiers & a.ModifierKey.Ctrl) && (this.handler.switchState(new p.MouseHandlerZoomOnWheelState(this.handler, this.settings, this.view, this.bars)), this.handler.state.onMouseWheel(t), !0) }, e.prototype.onLongTouch = function(t) { this.modifySelection(t, t.source.key, !0) }, e.prototype.onConnectorMouseDown = function(t) { this.modifySelection(t, t.source.key) }, e.prototype.onShapeMouseDown = function(t) { this.modifySelection(t, t.source.key) }, e.prototype.onShapeExpandBtnMouseDown = function(t) { this.modifySelection(t, t.source.key), this.handler.switchState(new c.MouseHandlerToggleShapeExpandedState(this.handler, this.history, this.model)) }, e.prototype.finish = function() { this.startPoint = void 0 }, e.prototype.startSelection = function(t) { this.handler.switchState(new u.MouseHandlerSelectionState(this.handler, this.selection, this.visualizerManager)) }, e.prototype.startScrolling = function(t) { this.handler.switchState(new h.MouseHandlerScrollingState(this.handler, this.view, this.selection)) }, e.prototype.modifySelection = function(t, e, n) { this.isMultipleSelectionModifier(t) || n ? this.selection.hasKey(e) ? this.selection.remove(e) : this.selection.add(e) : this.selection.hasKey(e) || this.selection.set([e]) }, e.prototype.clearSelection = function() { this.selection.set([]) }, e.prototype.inSelection = function(t) { return this.selection.hasKey(t) }, e.prototype.isMultipleSelectionModifier = function(t) { return t.modifiers & a.ModifierKey.Ctrl || t.modifiers & a.ModifierKey.Shift }, e.startLimit = l.UnitConverter.pixelsToTwips(1), e
            }(r.MouseHandlerStateBase);
        e.MouseHandlerDefaultStateBase = d
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(32),
            s = n(10),
            a = n(0),
            c = function(t) {
                function e(e, n, o) { var i = t.call(this, e) || this; return i.view = n, i.selection = o, i.lastOffset = new a.Point(0, 0), i }
                return i(e, t), e.prototype.onMouseDown = function(t) { t.preventDefault = !0, this.startPoint = this.getPointByEvent(t) }, e.prototype.onMouseMove = function(t) {
                    if (t.button === s.MouseButton.Left) {
                        var e = this.currentPoint || this.startPoint;
                        t.preventDefault = !0;
                        var n = this.getPointByEvent(t),
                            o = this.view.scrollBy(new a.Point(n.x - e.x, n.y - e.y));
                        this.lastOffset = this.lastOffset.offset(o.x, o.y), this.currentPoint = n
                    } else this.handler.switchToDefaultState()
                }, e.prototype.onMouseUp = function(t) { this.handler.switchToDefaultState() }, e.prototype.cancelChanges = function() { this.currentPoint && this.view.scrollBy(this.lastOffset.multiply(-1)) }, e.prototype.start = function() { this.handler.raiseDragScrollStart(), t.prototype.start.call(this) }, e.prototype.finish = function() { this.handler.raiseDragScrollEnd(), this.currentPoint && this.startPoint && !this.currentPoint.equals(this.startPoint) || this.selection.set([]), t.prototype.finish.call(this) }, e.prototype.getPointByEvent = function(t) { return t.offsetPoint }, e
            }(r.MouseHandlerCancellableState);
        e.MouseHandlerScrollingState = c
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this }
            return i(e, t), e.prototype.canDragObjectOnMouseDown = function(t) { return !1 }, e.prototype.canClearSelectionOnMouseDown = function() { return !1 }, e.prototype.processOnMouseMoveAfterLimit = function(t) { this.startSelection(t) }, e.prototype.canSelectOnMouseUp = function(t) { return !0 }, e.prototype.canClearSelectionOnMouseUp = function() { return !0 }, e
        }(n(122).MouseHandlerDefaultStateBase);
        e.MouseHandlerDefaultReadOnlyState = r
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = n(8),
            i = function() {
                function t() { this.contextMenuVisible = !1, this.onVisibilityChanged = new o.EventDispatcher }
                return t.prototype.onMouseDown = function(t) {}, t.prototype.onMouseUp = function(t) { this.hideContextMenu() }, t.prototype.onContextMenu = function(t) { this.showContextMenu(t.eventPoint, t.modelPoint) }, t.prototype.onFocus = function(t) {}, t.prototype.onBlur = function(t) {}, t.prototype.onTextInputFocus = function(t) {}, t.prototype.onTextInputBlur = function(t) {}, t.prototype.onLongTouch = function(t) {}, t.prototype.showContextMenu = function(t, e) { this.onVisibilityChanged.raise1(function(n) { return n.notifyShowContextMenu(t, e) }), this.contextMenuVisible = !0 }, t.prototype.hideContextMenu = function() { this.contextMenuVisible && (this.onVisibilityChanged.raise1(function(t) { return t.notifyHideContextMenu() }), this.contextMenuVisible = !1) }, t.prototype.notifyDragStart = function(t) {}, t.prototype.notifyDragEnd = function(t) {}, t.prototype.notifyDragScrollStart = function() {}, t.prototype.notifyDragScrollEnd = function() {}, t
            }();
        e.ContextMenuHandler = i
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = n(286),
            i = n(287),
            r = n(88),
            s = n(8),
            a = n(19),
            c = n(10),
            u = n(288),
            p = n(11),
            h = n(0),
            l = n(87),
            d = n(6),
            f = n(289),
            y = n(290),
            m = function() {
                function t(t, e, n, a, c) { void 0 === c && (c = a.readOnly), this.selection = t, this.model = e, this.eventManager = n, this.settings = a, this.readOnly = c, this.onVisualizersUpdate = new s.EventDispatcher, this.connectionPointsVisualizer = new u.ConnectionPointsVisualizer(this.onVisualizersUpdate), this.connectionPointsVisualizer = new u.ConnectionPointsVisualizer(this.onVisualizersUpdate), this.connectionTargetVisualizer = new o.ConnectionTargetVisualizer(this.onVisualizersUpdate), this.containerTargetVisualizer = new i.ContainerTargetVisualizer(this.onVisualizersUpdate), this.extensionLinesVisualizer = new r.ExtensionLinesVisualizer(this.onVisualizersUpdate), this.resizeInfoVisualizer = new f.ResizeInfoVisualizer(this.onVisualizersUpdate), this.selectionRectangleVisualizer = new y.SelectionRectVisualizer(this.onVisualizersUpdate) }
                return t.prototype.initialize = function(t) { this.model = t }, t.prototype.onMouseDown = function(t) {}, t.prototype.onMouseUp = function(t) {}, t.prototype.onMouseEnter = function(t) {}, t.prototype.onMouseLeave = function(t) { this.resetConnectionPoints(), this.resetConnectionTarget(), this.resetExtensionLines(), this.resetContainerTarget(), this.resetResizeInfo(), this.resetSelectionRectangle() }, t.prototype.onBlur = function(t) {}, t.prototype.onFocus = function(t) {}, t.prototype.updateConnections = function(t, e, n) {
                    var o = -1;
                    n && e === c.MouseEventElementType.ShapeConnectionPoint && (o = parseInt(n)), this.setConnectionPoints(t, e, o)
                }, t.prototype.setConnectionPoints = function(t, e, n, o) {
                    if (this.eventManager.isFocused())
                        if (!t || t.isLocked || e !== c.MouseEventElementType.Shape && e !== c.MouseEventElementType.ShapeResizeBox && e !== c.MouseEventElementType.ShapeConnectionPoint || void 0 === t) this.connectionPointsVisualizer.reset();
                        else {
                            var i = t.key,
                                r = this.selection.hasKey(i),
                                s = r ? t.getConnectionPointsForSelection() : t.getConnectionPoints();
                            this.connectionPointsVisualizer.setPoints(i, s.map(function(e) { return new u.ConnectionPointInfo(e, r ? t.getConnectionPointForSelectionSide(e) : t.getConnectionPointSide(e)) }), n, r && !o)
                        }
                }, t.prototype.setConnectionPointIndex = function(t) { this.connectionPointsVisualizer.setPointIndex(t) }, t.prototype.updateConnectionPoints = function() { void 0 !== this.model.findItem(this.connectionPointsVisualizer.getKey()) ? this.connectionPointsVisualizer.update() : this.connectionPointsVisualizer.reset() }, t.prototype.resetConnectionPoints = function() { this.connectionPointsVisualizer.reset() }, t.prototype.setConnectionTarget = function(t, e) {!t || t.isLocked || e !== c.MouseEventElementType.Shape && e !== c.MouseEventElementType.ShapeConnectionPoint ? this.connectionTargetVisualizer.reset() : this.connectionTargetVisualizer.setTargetRect(t.key, t.rectangle) }, t.prototype.resetConnectionTarget = function() { this.connectionTargetVisualizer.reset() }, t.prototype.setContainerTarget = function(t, e) { t && !t.isLocked && e === c.MouseEventElementType.Shape && t.enableChildren ? this.containerTargetVisualizer.setTargetRect(t.key, t.rectangle) : this.containerTargetVisualizer.reset() }, t.prototype.resetContainerTarget = function() { this.containerTargetVisualizer.reset() }, t.prototype.setExtensionLines = function(t) {
                    var e = this;
                    if (this.eventManager.isFocused()) {
                        this.extensionLinesVisualizer.reset();
                        var n = a.DiagramModel.getRectangle(t.filter(function(t) { return t }));
                        this.addPageExtensionLines(n), this.model.items.forEach(function(o) { t.indexOf(o) > -1 || o instanceof p.Shape && e.addShapeExtensionLines(o, n) })
                    }
                }, t.prototype.addPageExtensionLines = function(t) {
                    for (var e = Math.round(this.model.size.width / this.model.pageWidth), n = Math.round(this.model.size.height / this.model.pageHeight), o = 0; o < e; o++)
                        for (var i = 0; i < n; i++) {
                            var s = new h.Point(o * this.model.pageWidth + this.model.pageWidth / 2, i * this.model.pageHeight + this.model.pageHeight / 2);
                            if (Math.abs(t.center.x - s.x) < this.settings.gridSize / 2) {
                                var a = new h.Segment(new h.Point(t.center.x, 0), new h.Point(t.center.x, this.model.size.height));
                                this.extensionLinesVisualizer.addSegment(r.ExtensionLineType.HorizontalCenterToPageCenter, a, "")
                            }
                            if (Math.abs(t.center.y - s.y) < this.settings.gridSize / 2) {
                                a = new h.Segment(new h.Point(0, t.center.y), new h.Point(this.model.size.width, t.center.y));
                                this.extensionLinesVisualizer.addSegment(r.ExtensionLineType.VerticalCenterToPageCenter, a, "")
                            }
                            if (Math.abs(t.left - s.x) < this.settings.gridSize / 2) {
                                a = new h.Segment(new h.Point(t.left, 0), new h.Point(t.left, this.model.size.height));
                                this.extensionLinesVisualizer.addSegment(r.ExtensionLineType.LeftToPageCenter, a, "")
                            }
                            if (Math.abs(t.top - s.y) < this.settings.gridSize / 2) {
                                a = new h.Segment(new h.Point(0, t.top), new h.Point(this.model.size.width, t.top));
                                this.extensionLinesVisualizer.addSegment(r.ExtensionLineType.TopToPageCenter, a, "")
                            }
                            if (Math.abs(t.right - s.x) < this.settings.gridSize / 2) {
                                a = new h.Segment(new h.Point(t.right, 0), new h.Point(t.right, this.model.size.height));
                                this.extensionLinesVisualizer.addSegment(r.ExtensionLineType.RightToPageCenter, a, "")
                            }
                            if (Math.abs(t.bottom - s.y) < this.settings.gridSize / 2) {
                                a = new h.Segment(new h.Point(0, t.bottom), new h.Point(this.model.size.width, t.bottom));
                                this.extensionLinesVisualizer.addSegment(r.ExtensionLineType.BottomToPageCenter, a, "")
                            }
                        }
                }, t.prototype.addShapeExtensionLines = function(t, e) {
                    var n, o, i, s, a = t.rectangle,
                        c = p.Shape.lineWidth - l.CanvasSelectionManager.extensionLineWidth,
                        u = !0;
                    if (e.right < a.left ? (n = e.right + c + l.CanvasSelectionManager.extensionLineOffset, i = a.left - l.CanvasSelectionManager.extensionLineOffset) : e.left > a.right && (n = e.left - l.CanvasSelectionManager.extensionLineOffset, i = a.right + c + l.CanvasSelectionManager.extensionLineOffset), e.bottom < a.top ? (o = e.bottom + c + l.CanvasSelectionManager.extensionLineOffset, s = a.top - l.CanvasSelectionManager.extensionLineOffset) : e.top > a.bottom && (o = e.top - l.CanvasSelectionManager.extensionLineOffset, s = a.bottom + c + l.CanvasSelectionManager.extensionLineOffset), null != n && void 0 !== i) {
                        if (e.center.y === a.center.y) {
                            var d = new h.Segment(new h.Point(n, e.center.y), new h.Point(i, a.center.y));
                            this.extensionLinesVisualizer.addSegment(n > i ? r.ExtensionLineType.VerticalCenterAfter : r.ExtensionLineType.VerticalCenterBefore, d, u ? this.getViewUnitText(d.distance) : ""), u = !1
                        }
                        if (e.top === a.top) {
                            d = new h.Segment(new h.Point(n, e.top), new h.Point(i, a.top));
                            this.extensionLinesVisualizer.addSegment(n > i ? r.ExtensionLineType.TopToTopAfter : r.ExtensionLineType.TopToTopBefore, d, u ? this.getViewUnitText(d.distance) : "")
                        }
                        if (e.bottom === a.bottom) {
                            d = new h.Segment(new h.Point(n, e.bottom + c), new h.Point(i, a.bottom + c));
                            this.extensionLinesVisualizer.addSegment(n > i ? r.ExtensionLineType.BottomToBottomAfter : r.ExtensionLineType.BottomToBottomBefore, d, u ? this.getViewUnitText(d.distance) : "")
                        }
                        if (e.top === a.bottom) {
                            d = new h.Segment(new h.Point(n, e.top), new h.Point(i, a.bottom + c));
                            this.extensionLinesVisualizer.addSegment(n > i ? r.ExtensionLineType.TopToBottomAfter : r.ExtensionLineType.TopToBottomBefore, d, u ? this.getViewUnitText(d.distance) : "")
                        }
                        if (e.bottom === a.top) {
                            d = new h.Segment(new h.Point(n, e.bottom + c), new h.Point(i, a.top));
                            this.extensionLinesVisualizer.addSegment(n > i ? r.ExtensionLineType.BottomToTopAfter : r.ExtensionLineType.BottomToTopBefore, d, u ? this.getViewUnitText(d.distance) : "")
                        }
                    }
                    if (null != o && void 0 !== s) {
                        if (e.center.x === a.center.x) {
                            d = new h.Segment(new h.Point(e.center.x, o), new h.Point(a.center.x, s));
                            this.extensionLinesVisualizer.addSegment(o > s ? r.ExtensionLineType.HorizontalCenterBelow : r.ExtensionLineType.HorizontalCenterAbove, d, u ? this.getViewUnitText(d.distance) : ""), u = !1
                        }
                        if (e.left === a.left) {
                            d = new h.Segment(new h.Point(e.left, o), new h.Point(a.left, s));
                            this.extensionLinesVisualizer.addSegment(o > s ? r.ExtensionLineType.LeftToLeftBelow : r.ExtensionLineType.LeftToLeftAbove, d, u ? this.getViewUnitText(d.distance) : "")
                        }
                        if (e.right === a.right) {
                            d = new h.Segment(new h.Point(e.right + c, o), new h.Point(a.right + c, s));
                            this.extensionLinesVisualizer.addSegment(o > s ? r.ExtensionLineType.RightToRightBelow : r.ExtensionLineType.RightToRightAbove, d, u ? this.getViewUnitText(d.distance) : "")
                        }
                        if (e.left === a.right) {
                            d = new h.Segment(new h.Point(e.left, o), new h.Point(a.right + c, s));
                            this.extensionLinesVisualizer.addSegment(o > s ? r.ExtensionLineType.LeftToRightBelow : r.ExtensionLineType.LeftToRightAbove, d, u ? this.getViewUnitText(d.distance) : "")
                        }
                        if (e.right === a.left) {
                            d = new h.Segment(new h.Point(e.right + c, o), new h.Point(a.left, s));
                            this.extensionLinesVisualizer.addSegment(o > s ? r.ExtensionLineType.RightToLeftBelow : r.ExtensionLineType.RightToLeftAbove, d, u ? this.getViewUnitText(d.distance) : "")
                        }
                    }
                }, t.prototype.resetExtensionLines = function() { this.extensionLinesVisualizer.reset() }, t.prototype.setResizeInfo = function(t) {
                    var e = a.DiagramModel.getRectangle(t),
                        n = new h.Point(e.center.x, e.bottom + l.CanvasSelectionManager.resizeInfoOffset),
                        o = this.getViewUnitText(e.width) + " x " + this.getViewUnitText(e.height);
                    this.resizeInfoVisualizer.set(n, o)
                }, t.prototype.resetResizeInfo = function() { this.resizeInfoVisualizer.reset() }, t.prototype.setSelectionRectangle = function(t) { this.selectionRectangleVisualizer.setRectangle(t) }, t.prototype.resetSelectionRectangle = function() { this.selectionRectangleVisualizer.reset() }, t.prototype.getViewUnitText = function(t) { return d.ModelUtils.getUnitText(this.settings.viewUnits, this.settings.unitItems, this.settings.formatUnit, t) }, t.prototype.notifyReadOnlyChanged = function(t) { this.readOnly = t }, t.prototype.notifyDragStart = function(t) {}, t.prototype.notifyDragEnd = function(t) {}, t.prototype.notifyDragScrollStart = function() {}, t.prototype.notifyDragScrollEnd = function() {}, t
            }();
        e.VisualizerManager = m
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = function() {
            function t(t) { this.dispatcher = t }
            return t.prototype.getKey = function() { return this.key }, t.prototype.setTargetRect = function(t, e) { this.key !== t && (this.key = t, this.targetRect = e, this.raiseShow()) }, t.prototype.reset = function() { "-1" !== this.key && (this.key = "-1", this.targetRect = void 0, this.raiseHide()) }, t
        }();
        e.TargetVisualizerBase = o
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = function() {
            function t() { this.suspendUpdateCount = 0, this.occurredEvents = 0 }
            return t.prototype.beginUpdate = function() { 0 === this.suspendUpdateCount && this.onUpdateLocked(), this.suspendUpdateCount < 0 ? this.suspendUpdateCount-- : this.suspendUpdateCount++ }, t.prototype.endUpdate = function() {
                if (this.suspendUpdateCount < 0 ? this.suspendUpdateCount++ : this.suspendUpdateCount > 0 && this.suspendUpdateCount--, !this.isUpdateLocked()) {
                    var t = this.occurredEvents;
                    this.occurredEvents = 0, this.onUpdateUnlocked(t)
                }
            }, t.prototype.suspendUpdate = function() {
                if (this.suspendUpdateCount > 0) {
                    this.suspendUpdateCount *= -1;
                    var t = this.occurredEvents;
                    this.occurredEvents = 0, this.onUpdateUnlocked(t)
                }
            }, t.prototype.continueUpdate = function() { this.suspendUpdateCount < 0 && (this.suspendUpdateCount *= -1) }, t.prototype.isUpdateLocked = function() { return this.suspendUpdateCount > 0 }, t.prototype.onUpdateLocked = function() {}, t.prototype.registerOccurredEvent = function(t) { this.occurredEvents |= t }, t
        }();
        e.BatchUpdatableObject = o
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = n(0),
            i = n(39),
            r = n(17),
            s = n(62),
            a = n(8),
            c = function() {
                function t(t, e, n) { this.readonly = e, this.options = n, this.onDragOperation = new o.EventDispatcher, t && (this.mainElement = this.createMainElement(t), this.attachHandlers(this.mainElement)) }
                return t.prototype.dispose = function() { this.detachHandlers(this.mainElement) }, t.prototype.createMainElement = function(t) { var e = document.createElement("div"); return e.setAttribute("class", "dxdi-toolbox"), t.appendChild(e), e }, t.prototype.attachHandlers = function(t) { this.onMouseDownHandler = this.onMouseDown.bind(this), this.onMouseMoveHandler = this.onMouseMove.bind(this), this.onMouseUpHandler = this.onMouseUp.bind(this), t.addEventListener(s.TouchUIHelper.touchMouseDownEventName, this.onMouseDownHandler), document.addEventListener(s.TouchUIHelper.touchMouseMoveEventName, this.onMouseMoveHandler), document.addEventListener(s.TouchUIHelper.touchMouseUpEventName, this.onMouseUpHandler) }, t.prototype.detachHandlers = function(t) { t.removeEventListener(s.TouchUIHelper.touchMouseDownEventName, this.onMouseDownHandler), document.removeEventListener(s.TouchUIHelper.touchMouseMoveEventName, this.onMouseMoveHandler), document.removeEventListener(s.TouchUIHelper.touchMouseUpEventName, this.onMouseUpHandler) }, t.prototype.render = function(t) { this.mainElement.childNodes && (this.mainElement.innerHTML = ""); var e = t ? this.options.shapeTypes.filter(t) : this.options.shapeTypes; return e.length && this.createElements(this.mainElement, e), !!e.length }, t.prototype.createDraggingObject = function(t) { var e = this.getDragShapeType(t); if (void 0 !== e) { var n = new p; return n.data = e, new u(n) } }, t.prototype.getDragShapeType = function(t) {
                    for (; t && !r.ElementHasCssClass(t, "dxdi-toolbox");) {
                        if (t.getAttribute("data-tb-type")) return t.getAttribute("data-tb-type");
                        t = t.parentNode
                    }
                }, t.prototype.onMouseDown = function(t) {
                    if (!this.readonly) {
                        this.mouseDownPoint = new o.Point(i.Evt.GetEventX(t), i.Evt.GetEventY(t)), this.draggingObject = this.createDraggingObject(t.target), this.draggingObject && (this.draggingObject.evt.onFinishDragging = this.finishDragging.bind(this), this.draggingObject.evt.onCaptured = this.capture.bind(this), this.onDragStart());
                        var e = i.Evt.GetEventSource(t),
                            n = e && e.tagName;
                        return a.Browser.TouchUI || "img" === n.toLowerCase() || "image" === n.toLowerCase() ? i.Evt.PreventEventAndBubble(t) : void 0
                    }
                }, t.prototype.onMouseMove = function(t) { if (i.Evt.IsLeftButtonPressed(t) ? this.draggingObject && (!this.draggingObject.element && (Math.abs(i.Evt.GetEventX(t) - this.mouseDownPoint.x) > 4 || Math.abs(i.Evt.GetEventY(t) - this.mouseDownPoint.y) > 4) && (this.draggingObject.element = this.createDraggingElement(this.draggingObject), void 0 !== this.draggingObject.captured && this.capture(this.draggingObject.captured, !0)), this.draggingObject.element && this.updateDraggingElementPosition(t)) : this.finishDragging(), a.Browser.TouchUI) return i.Evt.PreventEventAndBubble(t) }, t.prototype.onMouseUp = function(t) { this.finishDragging() }, t.prototype.updateDraggingElementPosition = function(t) {
                    var e = this.draggingObject.element,
                        n = i.Evt.GetEventX(t) - e.offsetWidth / 2,
                        o = i.Evt.GetEventY(t) - e.offsetHeight / 2;
                    r.SetAbsoluteX(e, n), r.SetAbsoluteY(e, o)
                }, t.prototype.finishDragging = function() {
                    if (this.draggingObject) {
                        this.onDragEnd();
                        var t = this.draggingObject.element;
                        t && t.parentNode.removeChild(t), delete this.draggingObject
                    }
                }, t.prototype.capture = function(t, e) { this.draggingObject && (this.draggingObject.captured !== t || e) && (this.draggingObject.captured = t, this.draggingObject.element && r.ToggleElementClassName(this.draggingObject.element, "dxdi-tb-drag-captured", t)) }, t.prototype.onDragEnd = function() { this.onDragOperation.raise("notifyToolboxDragEnd") }, t.prototype.onDragStart = function() { this.onDragOperation.raise("notifyToolboxDragStart") }, t.prototype.notifyReadOnlyChanged = function(t) { this.readonly = t }, t
            }();
        e.Toolbox = c;
        var u = function() { return function(t) { this.evt = t } }();
        e.ToolboxDraggingObject = u;
        var p = function() { return function() {} }();
        e.DiagramDraggingEvent = p
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(6),
            s = function(t) {
                function e() { return null !== t && t.apply(this, arguments) || this }
                return i(e, t), e.prototype.isEnabled = function() { return t.prototype.isEnabled.call(this) && !this.control.selection.isEmpty() }, e.prototype.executeCore = function(t) { return r.ModelUtils.deleteSelection(this.control.history, this.control.model, this.control.selection), !0 }, e
            }(n(7).SimpleCommandBase);
        e.DeleteCommand = s
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = function(t) {
            function e(e, n) { var o = t.call(this) || this; return o.shapeKey = e, o.position = n, o }
            return i(e, t), e.prototype.redo = function(t) {
                var e = t.model.findShape(this.shapeKey);
                this.oldPosition = e.position.clone(), t.moveShape(e, this.position)
            }, e.prototype.undo = function(t) {
                var e = t.model.findShape(this.shapeKey);
                t.moveShape(e, this.oldPosition)
            }, e
        }(n(3).HistoryItem);
        e.MoveShapeHistoryItem = r
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = function() {
            function t() {}
            return t.stringCompare = function(t, e) { return t == e ? 0 : t > e ? 1 : -1 }, t.stringHashCode = function(t) { var e = 0; if (0 === t.length) return e; for (var n = t.length, o = 0; o < n; o++) e = (e << 5) - e + t.charCodeAt(o), e |= 0; return e }, t.endsAt = function(t, e) {
                var n = t.length - 1,
                    o = e.length - 1,
                    i = n - o;
                if (i < 0) return !1;
                for (; n >= i; n--, o--)
                    if (t[n] != e[o]) return !1;
                return !0
            }, t.startsAt = function(t, e) { return t.substr(0, e.length) == e }, t.stringInLowerCase = function(t) { return t.toLowerCase() == t }, t.stringInUpperCase = function(t) { return t.toUpperCase() == t }, t.inStringAtLeastOneSymbolInUpperCase = function(e) {
                for (var n, o = 0; n = e[o]; o++)
                    if (t.stringInUpperCase(n) && !t.stringInLowerCase(n)) return !0;
                return !1
            }, t.getSymbolFromEnd = function(t, e) { return t[t.length - e] }, t.stringTrim = function(t, e) { void 0 === e && (e = ["\\s"]); var n = e.join(""); return t.replace(new RegExp("(^[" + n + "]*)|([" + n + "]*$)", "g"), "") }, t.stringTrimStart = function(t) { return t.replace(/(^\s*)/g, "") }, t.stringTrimEnd = function(t, e) { return void 0 === e && (e = "\\s"), t.replace(new RegExp(e + "*$"), "") }, t.stringCustomTrim = function(t, e) {
                for (var n = 0, o = e; n < o.length; n++) {
                    var i = o[n];
                    t = t.replace(new RegExp("(^" + i + "*)|(" + i + "*)$", "g"), "")
                }
                return t
            }, t.mergeStringNTimes = function(t, e) { return new Array(e <= 0 ? 0 : e + 1).join(t) }, t.getDecimalSeparator = function() { return 1.1.toLocaleString().substr(1, 1) }, t.strCompare = function(t, e, n) { return void 0 === n && (n = !1), n && (t = t.toLowerCase(), e = e.toLowerCase()), t == e ? 0 : t > e ? 1 : -1 }, t.repeat = function(t, e) { for (var n = "", o = 1; o <= e; o++) n += t; return n }, t.isNullOrEmpty = function(t) { return !t || !t.length }, t.padLeft = function(e, n, o) { return t.mergeStringNTimes(o, Math.max(0, n - e.length)) + e }, t
        }();
        e.StringUtils = o
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = n(17),
            i = function() {
                function t() {}
                return t.TrimStart = function(e) { return t.trimInternal(e, !0, !1) }, t.TrimEnd = function(e) { return t.trimInternal(e, !1, !0) }, t.Trim = function(e) { return t.trimInternal(e, !0, !0) }, t.EncodeHtml = function(e) {
                    return t.ApplyReplacement(e, [
                        [/&amp;/g, "&ampx;"],
                        [/&/g, "&amp;"],
                        [/&quot;/g, "&quotx;"],
                        [/"/g, "&quot;"],
                        [/&lt;/g, "&ltx;"],
                        [/</g, "&lt;"],
                        [/&gt;/g, "&gtx;"],
                        [/>/g, "&gt;"]
                    ])
                }, t.trimInternal = function(e, n, o) {
                    var i = e.length;
                    if (!i) return e;
                    if (i < 764833) { var r = e; return n && (r = r.replace(/^\s+/, "")), o && (r = r.replace(/\s+$/, "")), r }
                    var s = 0;
                    if (o)
                        for (; i > 0 && t.whiteSpaces[e.charCodeAt(i - 1)];) i--;
                    if (n && i > 0)
                        for (; s < i && t.whiteSpaces[e.charCodeAt(s)];) s++;
                    return e.substring(s, i)
                }, t.ApplyReplacement = function(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var o = e[n];
                        t = t.replace(o[0], o[1])
                    }
                    return t
                }, t.DecodeHtmlViaTextArea = function(t) { var e = document.createElement("TEXTAREA"); return o.setInnerHtmlInternal(e, t), e.value }, t.whiteSpaces = { 9: 1, 10: 1, 11: 1, 12: 1, 13: 1, 32: 1, 133: 1, 160: 1, 5760: 1, 6158: 1, 8192: 1, 8193: 1, 8194: 1, 8195: 1, 8196: 1, 8197: 1, 8198: 1, 8199: 1, 8200: 1, 8201: 1, 8202: 1, 8203: 1, 8232: 1, 8233: 1, 8239: 1, 8287: 1, 12288: 1 }, t
            }();
        e.Str = i
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = n(23),
            i = function() {
                function t() {}
                return t.SetAttribute = function(e, n, o) { e.setAttribute ? (t.isSourceResetRequired() && "src" === n.toLowerCase() && e.setAttribute(n, ""), e.setAttribute(n, o)) : e.setProperty && e.setProperty(n, o, "") }, t.GetAttribute = function(t, e) {
                    if (t.getAttribute) return t.getAttribute(e);
                    if (t.getPropertyValue) {
                        if (o.Browser.Firefox) try { return t.getPropertyValue(e) } catch (n) { return t[e] }
                        return t.getPropertyValue(e)
                    }
                    return null
                }, t.GetTabIndexAttributeName = function() { return o.Browser.IE ? "tabIndex" : "tabindex" }, t.ChangeStyleAttribute = function(e, n, o) { t.ChangeAttributeExtended(e.style, n, e, "saved" + n, o) }, t.ChangeAttributeExtended = function(e, n, o, i, r) { t.SaveAttribute(e, n, o, i), t.SetAttribute(e, n, r) }, t.SaveAttribute = function(e, n, o, i) {
                    if (!t.IsExistsAttribute(o, i)) {
                        var r = t.IsExistsAttribute(e, n) ? t.GetAttribute(e, n) : t.EmptyObject;
                        t.SetAttribute(o, i, r)
                    }
                }, t.RestoreAttributeExtended = function(e, n, o, i) { if (t.IsExistsAttribute(o, i)) { var r = t.GetAttribute(o, i); return r != t.EmptyObject ? t.SetAttribute(e, n, r) : t.RemoveAttribute(e, n), t.RemoveAttribute(o, i), !0 } return !1 }, t.RemoveAttribute = function(t, e) { t.removeAttribute ? t.removeAttribute(e) : t.removeProperty && t.removeProperty(e) }, t.IsExistsAttribute = function(e, n) { var o = t.GetAttribute(e, n); return null != o && "" !== o }, t.isSourceResetRequired = function() { return o.Browser.IE && o.Browser.MajorVersion >= 11 }, t.EmptyObject = {}, t.RestoreStyleAttribute = function(e, n) { return t.RestoreAttributeExtended(e.style, n, e, "saved" + n) }, t
            }();
        e.Attr = i
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = n(0),
            i = n(17),
            r = function() {
                function t(t) { this.onScroll = new o.EventDispatcher, this.scrollBarWidth = i.GetVerticalScrollBarWidth(), this.mainElement = t, this.attachEvents() }
                return t.prototype.dispose = function() { this.detachEvents() }, t.prototype.attachEvents = function() {
                    var t = this;
                    this.onScrollHandler = function() { return t.onScroll.raise1(function(t) { return t.notifyScrollChanged() }) }, this.mainElement.addEventListener("scroll", this.onScrollHandler)
                }, t.prototype.detachEvents = function() { this.mainElement.removeEventListener("scroll", this.onScrollHandler) }, t.prototype.setScroll = function(t, e) { this.mainElement.style.overflow = "scroll", this.mainElement.scrollLeft = t, this.mainElement.scrollTop = e, this.mainElement.style.overflow = "" }, t.prototype.offsetScroll = function(t, e) { t && (this.mainElement.scrollLeft += t), e && (this.mainElement.scrollTop += e) }, t.prototype.getScroll = function() { return new o.Point(this.mainElement.scrollLeft, this.mainElement.scrollTop) }, t.prototype.getSize = function() { var t = this.mainElement.getBoundingClientRect(); return new o.Size(Math.floor(t.width), Math.floor(t.height)) }, t.prototype.getScrollBarWidth = function() { return this.scrollBarWidth }, t.prototype.getScrollSize = function() { return new o.Size(this.mainElement.scrollWidth, this.mainElement.scrollHeight) }, t
            }();
        e.NativeScrollView = r
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = n(17),
            i = n(8),
            r = n(15),
            s = n(10),
            a = n(11),
            c = n(5),
            u = n(39),
            p = n(16),
            h = function() {
                function t(t, e, n, o, i) { this.mainElement = e, this.layoutPointResolver = n, this.eventManager = o, this.actualZoom = i, this.focused = !1, this.focusLocked = !1, this.createInputElements(t) }
                return t.prototype.dispose = function() { this.detachInputElementEvents(), this.detachTextInputElementEvents() }, t.prototype.isFocused = function() { return this.focused }, t.prototype.captureFocus = function(t, e) {
                    var n = t || this.inputElement;
                    n.focus({ preventScroll: !0 }), e && window.setTimeout(function() {
                        if (window.getSelection) {
                            var t = window.getSelection(),
                                e = document.createRange();
                            e.selectNodeContents(n), t.removeAllRanges(), t.addRange(e)
                        }
                    }, 100)
                }, t.prototype.setClipboardData = function(t) { this.clipboardInputElement.value = t, this.clipboardInputElement.focus({ preventScroll: !0 }), this.clipboardInputElement.select(), document.execCommand("copy"), this.captureFocus() }, t.prototype.getClipboardData = function(t) {
                    var e = this;
                    navigator && navigator.clipboard ? navigator.clipboard.readText().then(function(n) { t(n), e.captureFocus() }).catch(function() { t(""), e.captureFocus() }) : i.Browser.IE && (this.clipboardInputElement.value = "", this.clipboardInputElement.focus({ preventScroll: !0 }), this.clipboardInputElement.select(), document.execCommand("Paste"), t(this.clipboardInputElement.value), this.captureFocus())
                }, t.prototype.isPasteSupportedByBrowser = function() { return i.Browser.IE || i.Browser.WebKitFamily && navigator && void 0 !== navigator.clipboard }, t.prototype.createInputElements = function(t) { this.createInputElement(t), this.createTextInputElement(t), this.createClipboardInputElement(t) }, t.prototype.setInputElementFocusHandlerMode = function() { this.textInputElementContainer.setAttribute("class", "dxdi-text-input-container"), this.captureFocus() }, t.prototype.setInputElementTextInputMode = function(t, e, n, o, r) { this.textInputElementContainer.setAttribute("class", "dxdi-text-input-container " + r), this.textInputElement.innerText = t, !i.Browser.Firefox || t && "" !== t || (this.textInputElement.innerHTML = "&nbsp;"), this.setTextInputElementBounds(e, n), this.setTextInputElementStyle(o), this.captureFocus(this.textInputElement, !0) }, t.prototype.setTextInputElementBounds = function(t, e) {
                    var n = this.layoutPointResolver.getAbsolutePoint(t);
                    e = e && e.transform(i.UnitConverter.twipsToPixels), o.SetAbsoluteX(this.textInputElementContainer, o.GetAbsolutePositionX(this.mainElement) + n.x), o.SetAbsoluteY(this.textInputElementContainer, o.GetAbsolutePositionY(this.mainElement) + n.y), this.textInputElementContainer.style.width = void 0 !== e ? e.width + "px" : "0px", this.textInputElementContainer.style.height = void 0 !== e ? e.height + "px" : "0px", this.textInputElementContainer.style.transform = "scale(" + this.actualZoom + ")", this.textInputElement.style.width = void 0 !== e ? e.width + "px" : "", this.textInputElement.style.height = void 0 !== e ? e.height + "px" : "auto"
                }, t.prototype.setTextInputElementStyle = function(t) { r.RenderUtils.applyStyleToElement(t, this.textInputElement) }, t.prototype.createInputElement = function(t) { this.inputElement = document.createElement("textarea"), this.inputElement.readOnly = !0, this.inputElement.setAttribute("class", "dxdi-focus-input"), this.attachInputElementEvents(), t.appendChild(this.inputElement) }, t.prototype.attachInputElementEvents = function() { this.onInputBlurHandler = this.onInputBlur.bind(this), this.onInputFocusHandler = this.onInputFocus.bind(this), this.onInputKeyDownHandler = this.onInputKeyDown.bind(this), this.onPasteHandler = this.onPaste.bind(this), this.inputElement.addEventListener("blur", this.onInputBlurHandler), this.inputElement.addEventListener("focus", this.onInputFocusHandler), this.inputElement.addEventListener("keydown", this.onInputKeyDownHandler), this.inputElement.addEventListener("paste", this.onPasteHandler) }, t.prototype.detachInputElementEvents = function() { this.inputElement.removeEventListener("blur", this.onInputBlurHandler), this.inputElement.removeEventListener("focus", this.onInputFocusHandler), this.inputElement.removeEventListener("keydown", this.onInputKeyDownHandler), this.inputElement.removeEventListener("paste", this.onPasteHandler) }, t.prototype.createTextInputElement = function(t) { this.textInputElementContainer = document.createElement("div"), this.textInputElementContainer.setAttribute("class", "dxdi-text-input-container"), t.appendChild(this.textInputElementContainer), this.textInputElement = document.createElement("div"), this.textInputElement.setAttribute("class", "dxdi-text-input"), this.textInputElement.setAttribute("contenteditable", "true"), this.attachTextInputElementEvents(), this.textInputElementContainer.appendChild(this.textInputElement) }, t.prototype.attachTextInputElementEvents = function() { this.onTextInputBlurHandler = this.onTextInputBlur.bind(this), this.onTextInputFocusHandler = this.onTextInputFocus.bind(this), this.onTextInputKeyDownHandler = this.onTextInputKeyDown.bind(this), this.textInputElement.addEventListener("blur", this.onTextInputBlurHandler), this.textInputElement.addEventListener("focus", this.onTextInputFocusHandler), this.textInputElement.addEventListener("keydown", this.onTextInputKeyDownHandler) }, t.prototype.detachTextInputElementEvents = function() { this.textInputElement.removeEventListener("blur", this.onTextInputBlurHandler), this.textInputElement.removeEventListener("focus", this.onTextInputFocusHandler), this.textInputElement.removeEventListener("keydown", this.onTextInputKeyDownHandler) }, t.prototype.createClipboardInputElement = function(t) { this.clipboardInputElement = document.createElement("textarea"), this.clipboardInputElement.setAttribute("class", "dxdi-clipboard-input"), t.appendChild(this.clipboardInputElement) }, t.prototype.blurControl = function() { this.focusLocked || (this.focused = !1, o.RemoveClassNameFromElement(this.mainElement, "focused")) }, t.prototype.focusControl = function() { this.focused = !0, this.focusLocked = !1, o.AddClassNameToElement(this.mainElement, "focused") }, t.prototype.onInputBlur = function(t) {
                    var e = this;
                    this.blurControl(), r.raiseEvent(t, this.getDiagramFocusEvent(t), function(t) { return e.eventManager.onBlur(t) })
                }, t.prototype.onInputFocus = function(t) {
                    var e = this;
                    this.focusControl(), r.raiseEvent(t, this.getDiagramFocusEvent(t), function(t) { return e.eventManager.onFocus(t) })
                }, t.prototype.onInputKeyDown = function(t) {
                    var e = this;
                    r.raiseEvent(t, this.getDiagramKeyboardEvent(t), function(t) { return e.eventManager.onKeyDown(t) })
                }, t.prototype.onTextInputBlur = function(t) {
                    var e = this;
                    this.blurControl(), r.raiseEvent(t, this.getDiagramFocusEvent(t), function(t) { return e.eventManager.onTextInputBlur(t) })
                }, t.prototype.onTextInputFocus = function(t) {
                    var e = this;
                    this.focusControl(), r.raiseEvent(t, this.getDiagramFocusEvent(t), function(t) { return e.eventManager.onTextInputFocus(t) })
                }, t.prototype.onTextInputKeyDown = function(t) {
                    var e = this;
                    r.raiseEvent(t, this.getDiagramKeyboardEvent(t), function(t) { return e.eventManager.onTextInputKeyDown(t) })
                }, t.prototype.getDiagramKeyboardEvent = function(t) { return new s.DiagramKeyboardEvent(p.getKeyModifiers(t), u.Evt.GetKeyCode(t), u.Evt.GetEventSource(t).innerText) }, t.prototype.lockFocus = function() {
                    var t = this;
                    this.focusLocked = !0, setTimeout(function() { return t.focusLocked = !1 }, 10)
                }, t.prototype.replaceParent = function(t) { this.inputElement && this.inputElement.parentNode !== t && t.appendChild(this.inputElement), this.textInputElementContainer && this.textInputElementContainer.parentNode !== t && t.appendChild(this.textInputElementContainer), this.clipboardInputElement && this.clipboardInputElement.parentNode !== t && t.appendChild(this.clipboardInputElement) }, t.prototype.getDiagramFocusEvent = function(t) { return new s.DiagramFocusEvent(t.target.innerText) }, t.prototype.onPaste = function(t) {
                    var e = this;
                    r.raiseEvent(t, this.getDiagramClipboardEvent(t), function(t) { return e.eventManager.onPaste(t) })
                }, t.prototype.getDiagramClipboardEvent = function(t) { var e; return e = void 0 !== t.clipboardData ? t.clipboardData.getData("text/plain") : window.clipboardData.getData("Text"), new s.DiagramClipboardEvent(e) }, t.prototype.notifyViewAdjusted = function(t) {}, t.prototype.notifyActualZoomChanged = function(t) { this.actualZoom = t }, t.prototype.notifyTextInputStart = function(t, e, n, o) {
                    var i = "";
                    t instanceof a.Shape ? i = "shape-text" : t instanceof c.Connector && (i = "connector-text"), this.setInputElementTextInputMode(e, n, o, t.styleText, i)
                }, t.prototype.notifyTextInputEnd = function(t) { this.setInputElementFocusHandlerMode() }, t
            }();
        e.InputManager = h
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(8),
            s = n(27),
            a = n(20),
            c = n(2),
            u = n(138),
            p = n(41),
            h = n(33),
            l = n(0),
            d = n(15),
            f = function(t) {
                function e(e, n) { var o = t.call(this, n.zoomLevel) || this; return o.snapPoint = new l.Point(0, 0), o.gridPatternId = d.RenderUtils.generateSvgElementId("gridPattern"), o.pagesGridPatternId = d.RenderUtils.generateSvgElementId("pagesGridPattern"), o.pagesGridClipId = d.RenderUtils.generateSvgElementId("pagesGridClip"), o.pageColor = n.pageColor, o.modelSize = n.modelSize, o.simpleView = n.simpleView, o.gridSize = n.gridSize, o.gridVisible = n.gridVisible, o.pageSize = n.pageLandscape ? new l.Size(n.pageSize.height, n.pageSize.width) : n.pageSize, o.canvasViewOffset = new l.Point(0, 0), o.initContainers(e), o }
                return i(e, t), e.prototype.initContainers = function(t) { this.backgroundContainer = t }, e.prototype.redraw = function() { this.redrawPage(this.pageColor), this.redrawGrid() }, e.prototype.redrawPage = function(t) {
                    var e = new s.Style;
                    e.fill = r.ColorHelper.colorToHash(t), this.getOrCreateElement("page-bg", new a.RectanglePrimitive(0, 0, "100%", "100%", e, "page"), this.backgroundContainer), this.createTextFloodFilter("page-bg-textflood-filter", this.backgroundContainer, t)
                }, e.prototype.redrawGrid = function() { this.updateGridElements(this.gridVisible, r.UnitConverter.twipsToPixelsF(this.gridSize) * this.actualZoom), this.updatePagesGridElements(this.simpleView, this.getAbsoluteSize(this.pageSize)) }, e.prototype.getGridRectElement = function(t) { return void 0 === this.gridRectElement && (this.gridRectElement = this.createPrimitiveElement(t, this.backgroundContainer)), this.gridRectElement }, e.prototype.getGridPatternElement = function(t) { return void 0 === this.gridPatternElement && (this.gridPatternElement = this.createPrimitiveElement(t, this.backgroundContainer)), this.gridPatternElement }, e.prototype.updateGridElements = function(t, e) {
                    var n = this,
                        o = new a.RectanglePrimitive("0", "0", "100%", "100%", null, "grid", null, function(t) { t.style.setProperty("fill", d.RenderUtils.getUrlPathById(n.gridPatternId)) }),
                        i = this.getGridRectElement(o);
                    if (t) {
                        i.style.display = "", this.changePrimitiveElement(o, i);
                        for (var r = [0, 1, 2, 3, 4].map(function(t) { return Math.round(e * t) }), s = [new c.PathPrimitiveMoveToCommand(r[4].toString(), "0"), new c.PathPrimitiveLineToCommand(r[4].toString(), r[4].toString()), new c.PathPrimitiveLineToCommand("0", r[4].toString())], p = [], h = 1; h <= 3; h++) p.push(new c.PathPrimitiveMoveToCommand(r[h].toString(), "0")), p.push(new c.PathPrimitiveLineToCommand(r[h].toString(), r[4].toString()));
                        for (h = 1; h <= 3; h++) p.push(new c.PathPrimitiveMoveToCommand("0", r[h].toString())), p.push(new c.PathPrimitiveLineToCommand(r[4].toString(), r[h].toString()));
                        var f = 4 * e,
                            y = this.simpleView ? this.canvasViewOffset : l.Point.empty(),
                            m = new u.PatternPrimitive(this.gridPatternId, [new c.PathPrimitive(s, null, "grid-outer-line"), new c.PathPrimitive(p, null, "grid-inner-line")], (((y.x + this.snapPoint.x) % f - f) % f).toString(), (((y.y + this.snapPoint.y) % f - f) % f).toString(), f.toString(), f.toString());
                        this.changePrimitiveElement(m, this.getGridPatternElement(m))
                    } else i.style.display = "none"
                }, e.prototype.getPagesGridRectElement = function(t) { return this.getOrCreateElement("grid-pages-rect", t, this.backgroundContainer) }, e.prototype.getPagesGridClipPathElement = function(t) { return void 0 === this.pagesGridClipPathElement && (this.pagesGridClipPathElement = this.createPrimitiveElement(t, this.backgroundContainer)), this.pagesGridClipPathElement }, e.prototype.getPagesGridPatternElement = function(t) { return void 0 === this.pagesGridPatternElement && (this.pagesGridPatternElement = this.createPrimitiveElement(t, this.backgroundContainer)), this.pagesGridPatternElement }, e.prototype.updatePagesGridElements = function(t, e) {
                    var n = this,
                        o = new a.RectanglePrimitive("0", "0", "100%", "100%", null, "grid-page", this.pagesGridClipId, function(e) { e.style.setProperty("fill", d.RenderUtils.getUrlPathById(n.pagesGridPatternId)), e.style.setProperty("display", t ? "none" : "") });
                    if (this.getPagesGridRectElement(o), !t) {
                        var i = this.modelSize.multiply(this.actualZoom),
                            s = [new c.PathPrimitiveMoveToCommand((e.width - 1).toString(), "0"), new c.PathPrimitiveLineToCommand((e.width - 1).toString(), (e.height - 1).toString()), new c.PathPrimitiveLineToCommand("0", (e.height - 1).toString())],
                            h = new u.PatternPrimitive(this.pagesGridPatternId, [new c.PathPrimitive(s, null, "pages-grid-line")], 0, 0, e.width.toString(), e.height.toString());
                        this.changePrimitiveElement(h, this.getPagesGridPatternElement(h));
                        var l = new p.ClipPathPrimitive(this.pagesGridClipId, [new a.RectanglePrimitive(0, 0, (r.UnitConverter.twipsToPixelsF(i.width) - 4).toString(), (r.UnitConverter.twipsToPixelsF(i.height) - 4).toString())]);
                        this.changePrimitiveElement(l, this.getPagesGridClipPathElement(l))
                    }
                }, e.prototype.notifyModelSizeChanged = function(t, e) { this.modelSize = t.clone(), this.redraw() }, e.prototype.notifyModelRectangleChanged = function(t) {}, e.prototype.notifySnapPointPositionChanged = function(t) { this.snapPoint = t.transform(r.UnitConverter.twipsToPixelsF), this.redrawGrid() }, e.prototype.notifyPageColorChanged = function(t) { this.pageColor = t, this.redrawPage(this.pageColor) }, e.prototype.notifyModelChanged = function(t) {}, e.prototype.notifyPageSizeChanged = function(t, e) { this.pageSize = e ? new l.Size(t.height, t.width) : t.clone(), this.redraw() }, e.prototype.notifyActualZoomChanged = function(t) { this.actualZoom = t, this.redraw() }, e.prototype.notifyViewAdjusted = function(t) { this.canvasViewOffset.equals(t) || (this.canvasViewOffset = t, this.simpleView && this.redraw()) }, e.prototype.notifyViewChanged = function(t) { this.simpleView = t, this.redraw() }, e.prototype.notifyGridChanged = function(t, e) { this.gridVisible = t, this.gridSize = e, this.redraw() }, e
            }(h.CanvasManagerBase);
        e.CanvasPageManager = f
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(12),
            s = function(t) {
                function e(e, n, o, i, r, s) { var a = t.call(this) || this; return a.id = e, a.x = o, a.y = i, a.width = r, a.height = s, a.children = n, a }
                return i(e, t), e.prototype.createMainElement = function() { return document.createElementNS(r.svgNS, "pattern") }, e.prototype.applyElementProperties = function(e) { this.id && e.setAttribute("id", this.id), e.setAttribute("patternUnits", "userSpaceOnUse"), this.setUnitAttribute(e, "x", this.x), this.setUnitAttribute(e, "y", this.y), this.setUnitAttribute(e, "width", this.width), this.setUnitAttribute(e, "height", this.height), t.prototype.applyElementProperties.call(this, e) }, e
            }(n(18).SvgPrimitive);
        e.PatternPrimitive = s
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(33),
            s = n(35),
            a = n(0),
            c = n(8),
            u = n(28),
            p = n(41),
            h = n(20),
            l = n(15),
            d = n(140),
            f = n(27);
        e.CANVAS_MIN_PADDING = 12, e.CROP_OFFSET = 40;
        var y = function(t) {
            function n(e, n, o, i, r, s, u) { var p = t.call(this, i) || this; return p.scroll = e, p.svgElement = n, p.paddings = new a.Offset(0, 0, 0, 0), p.crop = a.Offset.empty(), p.lockAutoZoom = !1, p.pageClipPathId = l.RenderUtils.generateSvgElementId("page-clip"), p.pageShadowId = l.RenderUtils.generateSvgElementId("page-shadow"), p.onViewChanged = new c.EventDispatcher, o = o.transform(c.UnitConverter.twipsToPixelsF), p.modelSize = o, p.simpleView = s, p.fixedZoomLevel = i, p.autoZoom = r, p.crop = p.rectangleToCrop(u, o), p.updateElements(o.multiply(i), a.Point.empty(), s), p.getOrCreateElement("shadow", new d.ShadowFilterPrimitive(p.pageShadowId), p.svgElement), p }
            return i(n, t), n.prototype.update = function(t) { t ? this.reset(t.horizontal, t.vertical) : this.adjust(this.modelSize, this.fixedZoomLevel, this.autoZoom, this.simpleView, this.crop, a.Offset.empty()) }, n.prototype.reset = function(t, e) { void 0 === t && (t = !0), void 0 === e && (e = !0), this.adjust(this.modelSize, this.fixedZoomLevel, this.autoZoom, this.simpleView, this.crop, void 0, { horizontal: t, vertical: e }) }, n.prototype.notifyModelSizeChanged = function(t, e) { t = t.transform(c.UnitConverter.twipsToPixelsF), this.adjust(t, this.fixedZoomLevel, this.autoZoom, this.simpleView, this.crop, e && e.transform(c.UnitConverter.twipsToPixelsF)), this.modelSize = t }, n.prototype.notifyModelRectangleChanged = function(t) {
                var e = this.rectangleToCrop(t, this.modelSize, this.crop);
                this.crop && this.crop.equals(e) || (this.simpleView && this.adjust(this.modelSize, this.fixedZoomLevel, this.autoZoom, this.simpleView, e, a.Offset.empty()), this.crop = e)
            }, n.prototype.notifySnapPointPositionChanged = function(t) {}, n.prototype.notifyZoomChanged = function(t, e) { this.adjust(this.modelSize, t, e, this.simpleView, this.crop, void 0, { horizontal: !1, vertical: !1 }), this.fixedZoomLevel = t, this.autoZoom = e }, n.prototype.notifyViewChanged = function(t) { this.adjust(this.modelSize, this.fixedZoomLevel, this.autoZoom, t, this.crop), this.simpleView = t }, n.prototype.notifyGridChanged = function(t, e) {}, n.prototype.notifyDragStart = function(t) {
                this.lockAutoZoom = !0;
                var e = this.svgElement.getAttribute("class") + " dxdi-drag-item";
                this.svgElement.setAttribute("class", e)
            }, n.prototype.notifyDragEnd = function(t) {
                this.lockAutoZoom = !1;
                var e = this.svgElement.getAttribute("class").replace(" dxdi-drag-item", "");
                this.svgElement.setAttribute("class", e), this.autoZoom && this.update({ horizontal: !0, vertical: !0 })
            }, n.prototype.notifyDragScrollStart = function() {
                var t = this.svgElement.getAttribute("class") + " dxdi-drag-scroll";
                this.svgElement.setAttribute("class", t)
            }, n.prototype.notifyDragScrollEnd = function() {
                var t = this.svgElement.getAttribute("class").replace(" dxdi-drag-scroll", "");
                this.svgElement.setAttribute("class", t)
            }, n.prototype.checkFitToCanvas = function() {
                var t = this.scroll.getScrollBarWidth(),
                    n = this.scroll.getSize().offset(2 * -e.CANVAS_MIN_PADDING, 2 * -e.CANVAS_MIN_PADDING),
                    o = this.getActualModelSizeWithoutZoom(this.modelSize, this.simpleView, this.crop).multiply(this.actualZoom),
                    i = this.checkScrollBars(n, t, o, a.Offset.empty());
                return { vertical: (n = n.offset(i.vertical ? -t : 0, i.horizontal ? -t : 0)).height >= o.height, horizontal: n.width >= o.width }
            }, n.prototype.rectangleToCrop = function(t, e, n) { var o = t.transform(c.UnitConverter.twipsToPixelsF); return new a.Offset(this.correctCrop(o.left), this.correctCrop(o.top), this.correctCrop(e.width - o.right), this.correctCrop(e.height - o.bottom)) }, n.prototype.correctCrop = function(t) { return e.CROP_OFFSET * Math.floor(t / e.CROP_OFFSET) }, n.prototype.setActualZoom = function(t) { this.actualZoom !== t && (this.actualZoom = t, this.onViewChanged.raise1(function(e) { return e.notifyActualZoomChanged(t) })) }, n.prototype.getActualAutoZoomLevel = function(t) {
                if (t === s.AutoZoomMode.Disabled) return this.actualZoom;
                var e = this.scroll.getSize(),
                    n = this.scroll.getScrollBarWidth(),
                    o = this.getActualModelSizeWithoutZoom(this.modelSize, this.simpleView, this.crop);
                return this.getActualAutoZoom(e, n, o, t)
            }, n.prototype.getActualZoom = function(t, e, n, o, i) { return this.lockAutoZoom ? this.actualZoom : i === s.AutoZoomMode.Disabled ? o : this.getActualAutoZoom(t, e, n, i) }, n.prototype.getActualAutoZoom = function(t, n, o, i) { return i === s.AutoZoomMode.FitContent ? Math.min((t.width - 2 * e.CANVAS_MIN_PADDING) / o.width, (t.height - 2 * e.CANVAS_MIN_PADDING) / o.height, 1) : Math.min((t.width - 2 * e.CANVAS_MIN_PADDING - n) / o.width, 1) }, n.prototype.tryNormalizePaddings = function() {
                var t = this.scroll.getScroll(),
                    e = this.scroll.getSize(),
                    n = this.scroll.getScrollBarWidth(),
                    o = this.getActualModelSizeWithoutZoom(this.modelSize, this.simpleView, this.crop).multiply(this.actualZoom),
                    i = new a.Point(this.paddings.left, this.paddings.top),
                    r = new a.Size(this.paddings.right, this.paddings.bottom),
                    s = this.getTailSpace(i, t, o, e, n);
                s.equals(r) || this.applyChanges(new a.Offset(i.x, i.y, s.width, s.height), o, this.simpleView, this.crop)
            }, n.prototype.scrollBy = function(t) {
                var e, n, o, i = this.scroll.getScroll(),
                    r = this.scroll.getSize(),
                    s = this.scroll.getScrollBarWidth(),
                    c = this.getActualModelSizeWithoutZoom(this.modelSize, this.simpleView, this.crop).multiply(this.actualZoom),
                    u = this.checkScrollBars(r, s, c, this.paddings),
                    p = new a.Point(this.paddings.left, this.paddings.top),
                    h = new a.Size(this.paddings.right, this.paddings.bottom);
                return i = (e = this.changeScrollByOffset(p, i, h, c, t, r, u)).scroll, t = e.offset, p = (n = this.changeTranslateByOffset(p, h, t, u)).translate, t = n.offset, p = (o = this.cropHiddenHead(p, i)).translate, i = o.scroll, h = this.getTailSpace(p, i, c, r, s), this.applyChanges(new a.Offset(p.x, p.y, h.width, h.height), c, this.simpleView, this.crop, i), t
            }, n.prototype.changeScrollByOffset = function(t, e, n, o, i, r, s) {
                var a = e.clone(),
                    c = i.clone();
                return i.x && s.horizontal && (a.x -= c.x = -this.getScrollDeltaByOffset(i.x, e.x, t.x + o.width + n.width, r.width, s.vertical)), i.y && s.vertical && (a.y -= c.y = -this.getScrollDeltaByOffset(i.y, e.y, t.y + o.height + n.height, r.height, s.horizontal)), { scroll: a, offset: c }
            }, n.prototype.changeTranslateByOffset = function(t, e, n, o) {
                var i = t.clone(),
                    r = n.clone();
                return n.x && !o.horizontal && (i.x += r.x = this.getTranslateDeltaByOffset(n.x, i.x, e.width)), n.y && !o.vertical && (i.y += r.y = this.getTranslateDeltaByOffset(n.y, i.y, e.height)), { translate: i, offset: r }
            }, n.prototype.getScrollDeltaByOffset = function(t, e, n, o, i) { if (t > 0) return -Math.min(e, t); var r = n - (o - (i ? this.scroll.getScrollBarWidth() : 0)); return Math.min(r - e, -t) }, n.prototype.getTranslateDeltaByOffset = function(t, n, o) { return t ? t < 0 ? -Math.min(n - e.CANVAS_MIN_PADDING, -t) : Math.min(o - e.CANVAS_MIN_PADDING, t) : 0 }, n.prototype.getActualModelSizeWithoutZoom = function(t, e, n) { return e && n ? t.offset(-n.horizontal, -n.vertical) : t }, n.prototype.setScrollTo = function(t, n) {
                var o = this.scroll.getSize(),
                    i = this.getVisibileAreaAbsShift(),
                    r = t.transform(c.UnitConverter.twipsToPixelsF).multiply(this.actualZoom).offset(i.x, i.y),
                    s = this.scroll.getScroll();
                n ? (s.x += r.x - n.x, s.y += r.y - n.y) : (r.x < 0 && (s.x += r.x - e.CANVAS_MIN_PADDING), r.y < 0 && (s.y += r.y - e.CANVAS_MIN_PADDING), r.x > o.width && (s.x += r.x - o.width + e.CANVAS_MIN_PADDING), r.y > o.height && (s.y += r.y - o.height + e.CANVAS_MIN_PADDING));
                var a = this.modelSize.multiply(this.actualZoom);
                s.x = Math.max(0, Math.min(s.x, a.width + this.paddings.horizontal - o.width)), s.y = Math.max(0, Math.min(s.y, a.height + this.paddings.vertical - o.height)), this.scroll.setScroll(s.x, s.y)
            }, n.prototype.updateElements = function(t, e, n) { this.updatePageElement(t, e, n), this.updateCanvasElement(e) }, n.prototype.updateCanvasElement = function(t) { this.canvasElement = this.getOrCreateElement("dxdi-main", new u.GroupPrimitive([], "dxdi-main", null, null, function(e) { e.setAttribute("transform", "translate(" + Math.round(t.x) + ", " + Math.round(t.y) + ")") }), this.svgElement) }, n.prototype.updatePageElement = function(t, e, n) { n || this.getOrCreateElement("pageShadowRect", new h.RectanglePrimitive(e.x.toString(), e.y.toString(), t.width.toString(), t.height.toString(), new f.EmptyStyle({ filter: l.RenderUtils.getUrlPathById(this.pageShadowId) }), "dxdi-page-shadow"), this.svgElement), this.pageElement = this.getOrCreateElement("page", new u.GroupPrimitive([], "dxdi-page", null, n ? "" : this.pageClipPathId, function(t) { t.setAttribute("transform", "translate(" + (n ? 0 : Math.round(e.x)) + ", " + (n ? 0 : Math.round(e.y)) + ")") }), this.svgElement), this.getOrCreateElement("pageClip", this.createPageClipPathPrimitive(t), this.svgElement) }, n.prototype.createPageClipPathPrimitive = function(t) { var e = []; return e.push(new h.RectanglePrimitive(0, 0, t.width.toString(), t.height.toString())), new p.ClipPathPrimitive(this.pageClipPathId, e) }, n.prototype.adjust = function(t, e, n, o, i, r, s) {
                var c = this.scroll.getSize(),
                    u = this.getActualModelSizeWithoutZoom(t, o, i);
                if (this.lockAutoZoom || !n && r && this.modelSize) this.resizeView(u, this.actualZoom, c, o, i, r);
                else {
                    var p = this.scroll.getScrollBarWidth(),
                        h = this.getActualZoom(c, p, u, e, n);
                    n && h === this.actualZoom ? this.resizeView(u, h, c, o, i, r || a.Offset.empty()) : (this.resetView(u, h, c, o, i, s), this.setActualZoom(h))
                }
            }, n.prototype.resetView = function(t, n, o, i, r, s) {
                var c = t.multiply(n),
                    u = a.Offset.fromNumber(e.CANVAS_MIN_PADDING);
                !(s = s || { horizontal: !0, vertical: !0 }).horizontal && this.paddings && (u.left = this.paddings.left, u.right = this.paddings.right), !s.vertical && this.paddings && (u.top = this.paddings.top, u.bottom = this.paddings.bottom);
                var p = this.checkScrollBars(o, this.scroll.getScrollBarWidth(), c, u),
                    h = this.scroll.getScrollBarWidth(),
                    l = s.horizontal || s.vertical ? this.scroll.getScroll() : void 0;
                if (s.horizontal) {
                    var d = Math.max((o.width - (p.vertical ? h : 0) - c.width) / 2, e.CANVAS_MIN_PADDING);
                    u.left = d, u.right = d, l.x = 0
                }
                if (s.vertical) {
                    var f = Math.max((o.height - (p.horizontal ? h : 0) - c.height) / 2, e.CANVAS_MIN_PADDING);
                    u.top = f, u.bottom = f, l.y = 0
                }
                this.applyChanges(u, c, i, r.multiply(n), l)
            }, n.prototype.resizeView = function(t, e, n, o, i, r) {
                var s, c, u = this.actualZoom,
                    p = this.simpleView && this.crop ? this.crop.multiply(u) : a.Offset.empty(),
                    h = t.multiply(e);
                r = r.multiply(e);
                var l = o && i ? i.multiply(e) : a.Offset.empty(),
                    d = new a.Point(this.paddings.left, this.paddings.top),
                    f = this.scroll.getScroll();
                d = (s = this.applyOffset(d, f, p, l, r)).translate, f = s.scroll, d = (c = this.cropHiddenHead(d, f)).translate, f = c.scroll;
                var y = this.getTailSpace(d, f, h, n, this.scroll.getScrollBarWidth()),
                    m = new a.Offset(d.x, d.y, y.width, y.height);
                this.applyChanges(m, h, o, l, f)
            }, n.prototype.applyChanges = function(t, e, n, o, i) {
                var r = new a.Point(t.left, t.top);
                n && o && (r = r.offset(-o.left, -o.top)), this.updateElements(e, r, n), this.setSvgSize(e.width + t.horizontal, e.height + t.vertical), this.onViewChanged.raise1(function(t) { return t.notifyViewAdjusted(new a.Point(r.x, r.y)) }), i && this.scroll.setScroll(i.x, i.y), this.paddings = t
            }, n.prototype.applyOffset = function(t, n, o, i, r) {
                var s = t.clone(),
                    a = n.clone(),
                    c = this.getActualOffset(o, i, r);
                return c.left && (s.x = Math.max(e.CANVAS_MIN_PADDING, s.x - c.left), a.x += c.left - (t.x - s.x)), c.top && (s.y = Math.max(e.CANVAS_MIN_PADDING, s.y - c.top), a.y += c.top - (t.y - s.y)), { translate: s, scroll: a }
            }, n.prototype.cropHiddenHead = function(t, n) {
                var o = n.clone(),
                    i = t.clone();
                if (o.x && i.x > e.CANVAS_MIN_PADDING) {
                    var r = i.x - Math.max(e.CANVAS_MIN_PADDING, i.x - o.x);
                    i.x -= r, o.x -= r
                }
                if (o.y && i.y > e.CANVAS_MIN_PADDING) {
                    r = i.y - Math.max(e.CANVAS_MIN_PADDING, i.y - o.y);
                    i.y -= r, o.y -= r
                }
                return { translate: i, scroll: o }
            }, n.prototype.getTailSpace = function(t, n, o, i, r) {
                var s = t.clone(),
                    c = n.clone(),
                    u = Math.max(i.width + c.x - (s.x + o.width), e.CANVAS_MIN_PADDING),
                    p = Math.max(i.height + c.y - (s.y + o.height), e.CANVAS_MIN_PADDING),
                    h = this.checkScrollBars(i, r, o, new a.Offset(s.x, s.y, u, p));
                return h.vertical && (u = Math.max(e.CANVAS_MIN_PADDING, u - r)), h.horizontal && (p = Math.max(e.CANVAS_MIN_PADDING, p - r)), new a.Size(u, p)
            }, n.prototype.getActualOffset = function(t, e, n) { return new a.Offset(-(e.left - t.left) + n.left, -(e.top - t.top) + n.top, -(e.right - t.right) + n.right, -(e.bottom - t.bottom) + n.bottom) }, n.prototype.checkScrollBars = function(t, e, n, o) {
                var i = t.width < n.width + o.horizontal,
                    r = t.height < n.height + o.vertical;
                return i && !r && (r = t.height - e < n.height + o.vertical), r && !i && (i = t.width - e < n.width + o.horizontal), { horizontal: i, vertical: r }
            }, n.prototype.setSvgSize = function(t, e) { l.RenderUtils.updateSvgElementSize(this.svgElement, t, e) }, n.prototype.getVisibileAreaAbsShift = function() {
                var t = this.scroll.getScroll(),
                    e = this.paddings.clone(),
                    n = this.simpleView,
                    o = n && this.crop ? this.crop.left * this.actualZoom : 0,
                    i = n && this.crop ? this.crop.top * this.actualZoom : 0;
                return new a.Point(e.left - o - t.x, e.top - i - t.y)
            }, n.prototype.getModelPoint = function(t, e) {
                var n = this.getVisibileAreaAbsShift(),
                    o = t.offset(-n.x, -n.y).multiply(1 / this.actualZoom);
                if (e) { var i = this.scroll.getSize(); if (t.x < 0 || t.y < 0 || t.x > i.width || t.y > i.height) return null; if (o.x < 0 || o.y < 0) return null; if (o.x > this.modelSize.width || o.y > this.modelSize.height) return null }
                return o.transform(c.UnitConverter.pixelsToTwips)
            }, n.prototype.getAbsolutePoint = function(t, e) {
                var n = this.getVisibileAreaAbsShift(),
                    o = t.transform(c.UnitConverter.twipsToPixelsF).multiply(this.actualZoom).offset(n.x, n.y);
                if (e) { if (o.x < 0 || o.y < 0) return null; var i = this.scroll.getSize(); if (o.x > i.width || o.y > i.height) return null }
                return o
            }, n
        }(r.CanvasManagerBase);
        e.CanvasViewManager = y
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(85),
            s = n(12),
            a = function(t) {
                function e() { return null !== t && t.apply(this, arguments) || this }
                return i(e, t), e.prototype.createChildElements = function(t) {
                    var e = document.createElementNS(s.svgNS, "feGaussianBlur");
                    e.setAttribute("in", "SourceGraphic"), e.setAttribute("stdDeviation", "4.6"), t.appendChild(e);
                    var n = document.createElementNS(s.svgNS, "feOffset");
                    n.setAttribute("dx", "0"), n.setAttribute("dy", "0"), t.appendChild(n);
                    var o = document.createElementNS(s.svgNS, "feMerge");
                    t.appendChild(o);
                    var i = document.createElementNS(s.svgNS, "feMergeNode");
                    o.appendChild(i);
                    var r = document.createElementNS(s.svgNS, "feMergeNode");
                    r.setAttribute("in", "SourceGraphic"), o.appendChild(r)
                }, e
            }(r.FilterPrimitive);
        e.ShadowFilterPrimitive = a
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(12),
            s = function(t) {
                function e(e, n, o, i, r, s, a) { var c = t.call(this, null, o) || this; return c.id = e, c.x = i, c.y = r, c.width = s, c.height = a, c.children = n, c }
                return i(e, t), e.prototype.createMainElement = function() { return document.createElementNS(r.svgNS, "mask") }, e.prototype.applyElementProperties = function(e) { this.id && e.setAttribute("id", this.id), this.setUnitAttribute(e, "x", this.x), this.setUnitAttribute(e, "y", this.y), this.setUnitAttribute(e, "width", this.width), this.setUnitAttribute(e, "height", this.height), t.prototype.applyElementProperties.call(this, e) }, e
            }(n(18).SvgPrimitive);
        e.MaskPrimitive = s
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = n(39),
            i = n(17),
            r = n(12),
            s = function() {
                function t(t, e) { this.scroll = t, this.mainElement = e, this.leftButtonPressed = !1, this.scrollDragging = !1, this.scrollTimer = -1, this.scrollBarWidth = i.GetVerticalScrollBarWidth() }
                return t.prototype.onMouseMove = function(t, e) { this.clearScrollTimer(), o.Evt.IsLeftButtonPressed(t) || (this.leftButtonPressed = !1), this.canAutoScroll() && this.changeScrollPosition(t, e, !1) }, t.prototype.onMouseDown = function(t) { this.leftButtonPressed = !!o.Evt.IsLeftButtonPressed(t) }, t.prototype.onMouseUp = function(t) { this.clearScrollTimer(), this.leftButtonPressed = !1 }, t.prototype.onMouseEnter = function(t) {
                    var e = this;
                    o.Evt.IsLeftButtonPressed(t) && setTimeout(function() { e.leftButtonPressed = !0 }, 500)
                }, t.prototype.onDragScrollStart = function() { this.scrollDragging = !0 }, t.prototype.onDragScrollEnd = function() { this.scrollDragging = !1 }, t.prototype.canAutoScroll = function() { return this.leftButtonPressed && !this.scrollDragging }, t.prototype.changeScrollPosition = function(t, e, n) {
                    var o = this,
                        r = t.pageX - i.GetAbsolutePositionX(this.mainElement),
                        s = t.pageY - i.GetAbsolutePositionY(this.mainElement),
                        a = this.scroll.getSize(),
                        c = this.scroll.getScrollSize(),
                        u = a.width;
                    a.width < c.width && (u -= this.scrollBarWidth);
                    var p = a.height;
                    a.height < c.height && (p -= this.scrollBarWidth);
                    var h = !1;
                    r <= 40 ? (this.scroll.offsetScroll(-this.getScrollingOffset(r), 0), h = !0) : u - 40 <= r && (this.scroll.offsetScroll(this.getScrollingOffset(u - r), 0), h = !0), s <= 40 ? (this.scroll.offsetScroll(0, -this.getScrollingOffset(s)), h = !0) : p - 40 <= s && (this.scroll.offsetScroll(0, this.getScrollingOffset(p - s)), h = !0), h && (this.scrollTimer = window.setTimeout(function() { return o.changeScrollPosition(t, e, !0) }, 50)), n && e()
                }, t.prototype.clearScrollTimer = function() { this.scrollTimer > -1 && (window.clearTimeout(this.scrollTimer), this.scrollTimer = -1) }, t.prototype.getScrollingOffset = function(t) { var e = Math.pow((40 - t) / 5, 2); return Math.min(e, 5) }, t.createMainElement = function(t) { var e = document.createElement("div"); return e.setAttribute("class", "dxdi-control"), t.appendChild(e), e }, t.createSvgElement = function(t, e) { void 0 === e && (e = !1); var n = document.createElementNS(r.svgNS, "svg"); return n.className.baseVal = "dxdi-canvas" + (e ? " export" : ""), t.appendChild(n), n }, t
            }();
        e.AutoScrollController = s
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(89),
            s = n(30),
            a = function(t) {
                function e() { return null !== t && t.apply(this, arguments) || this }
                return i(e, t), e.prototype.getPoints = function() { return this.connector.points.map(function(t, e) { return new s.ConnectorRenderPoint(t.x, t.y, e) }) }, e
            }(r.ConnectorPointsCalculatorBase);
        e.ConnectorPointsCalculator = a
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(0),
            s = n(4),
            a = n(89),
            c = n(145),
            u = n(146),
            p = n(147),
            h = n(148),
            l = n(149),
            d = n(30),
            f = function(t) {
                function e(e) { var n = t.call(this, e) || this; return n.sideCalculators = {}, n.sideCalculators[s.ConnectionPointSide.Undefined] = new c.ConnectorPointsOrthogonalUndefinedSideCalculator(n), n.sideCalculators[s.ConnectionPointSide.South] = new u.ConnectorPointsOrthogonalSouthSideCalculator(n), n.sideCalculators[s.ConnectionPointSide.North] = new p.ConnectorPointsOrthogonalNorthSideCalculator(n), n.sideCalculators[s.ConnectionPointSide.East] = new h.ConnectorPointsOrthogonalEastSideCalculator(n), n.sideCalculators[s.ConnectionPointSide.West] = new l.ConnectorPointsOrthogonalWestSideCalculator(n), n }
                return i(e, t), Object.defineProperty(e.prototype, "beginRect", { get: function() { return this.connector.beginItem ? this.connector.beginItem.rectangle : void 0 }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "endRect", { get: function() { return this.connector.endItem ? this.connector.endItem.rectangle : void 0 }, enumerable: !0, configurable: !0 }), e.prototype.getPoints = function() {
                    var t = this.connector.points.map(function(t, e) { return new d.ConnectorRenderPoint(t.x, t.y, e) });
                    this.removeUnnecessaryLinePoints(t);
                    var e = 0,
                        n = t.length - 1,
                        o = this.getPointSide(t, 0),
                        i = this.getPointSide(t, 1),
                        r = this.getPointSide(t, t.length - 1),
                        s = this.getPointSide(t, t.length - 1 - 1),
                        a = this.getSideCalculator(o),
                        c = this.getSideCalculator(r),
                        u = this.beginRect,
                        p = a.getCorrectOriginPoint(t[e], u),
                        h = t[e + 1];
                    if (2 === t.length && a.isOnSidePoint(p, h) && a.isDirectConnectionAllowed(i, p, h)) { a.getDirectConnectionPoints(p, h).forEach(function(o) { t.splice(e + 1, 0, o), e++, n++ }) } else {
                        var l = a.getBeginOffsetPoints(i, t[e], t[e + 1], this.beginRect);
                        l.forEach(function(n) { t.splice(e + 1, 0, n) }), e += l.length, n += l.length, c.getEndOffsetPoints(s, t[n], t[n - 1], this.endRect).forEach(function(e, o) { t.splice(n + o, 0, e) });
                        for (var f = e; f < n; f++) {
                            var y = f + 1,
                                m = this.getMiddlePoint(t[f], t[f - 1], f - 1 == 0, t[y], t[y + 1], y + 1 === t.length - 1);
                            void 0 !== m && (t.splice(f + 1, 0, m), f++, n++)
                        }
                    }
                    return this.removeUnnecessaryLinePoints(t), t
                }, e.prototype.getSideCalculator = function(t) { return this.sideCalculators[t] }, e.prototype.getPointSide = function(t, e) { if (0 === e && this.connector.beginItem) { var n = this.connector.beginConnectionPointIndex; return this.connector.beginItem.getConnectionPointSideByIndex(n, t[1]) } if (e === t.length - 1 && this.connector.endItem) { n = this.connector.endConnectionPointIndex; return this.connector.endItem.getConnectionPointSideByIndex(n, t[t.length - 2]) } return s.ConnectionPointSide.Undefined }, e.prototype.getMiddlePoints = function(t, e) { return t.x === e.x || t.y === e.y ? [] : [new d.ConnectorRenderPoint(t.x, e.y), new d.ConnectorRenderPoint(e.x, t.y)] }, e.prototype.getMiddlePoint = function(t, e, n, o, i, r) {
                    var s, a = this,
                        c = this.getMiddlePoints(t, o);
                    return c.forEach(function(n) {
                        var r = a.createPointsRect(t, n),
                            c = a.createPointsRect(n, o),
                            u = a.connector.beginItem ? a.connector.beginItem.rectangle : void 0,
                            p = a.connector.endItem ? a.connector.endItem.rectangle : void 0;
                        u && (u.intersect(r) || u.intersect(c)) || p && (p.intersect(r) || p.intersect(c)) || a.isReturnPoint(n, t, e) && !a.isIntermediatePoints(t, e) || a.isReturnPoint(n, o, i) && !a.isIntermediatePoints(o, i) || (void 0 === s ? s = n : a.isPriorMiddlePoint(n, t, e, o, i) && (s = n))
                    }), void 0 === s && c.length > 0 && (s = c[0]), s
                }, e.prototype.createPointsRect = function(t, e) { var n = r.Rectangle.createByPoints(t, e); return n.width > 0 && (n = n.inflate(-1, 0)), n.height > 0 && (n = n.inflate(0, -1)), n }, e.prototype.isPriorMiddlePoint = function(t, e, n, o, i) { return !(!n || t.x !== n.x && t.y !== n.y) || !(!i || t.x !== i.x && t.y !== i.y) }, e.prototype.isReturnPoint = function(t, e, n) { if (void 0 !== e && void 0 !== n) { if (t.x === n.x && (e.y < t.y && t.y < n.y || e.y > t.y && t.y > n.y)) return !0; if (t.y === n.y && (e.x < t.x && t.x < n.x || e.x > t.x && t.x > n.x)) return !0 } return !1 }, e.prototype.isIntermediatePoints = function(t, e) { return 0 < t.pointIndex && t.pointIndex < this.connector.points.length - 1 && 0 < e.pointIndex && e.pointIndex < this.connector.points.length - 1 }, e.prototype.removeUnnecessaryLinePoints = function(t) { r.GeometryUtils.removeUnnecessaryLinePoints(t, function(e, n) { return -1 === e.pointIndex ? (t.splice(n, 1), !0) : (e.skipped = !0, !1) }, function(t) { return void 0 !== t && !t.skipped }) }, e
            }(a.ConnectorPointsCalculatorBase);
        e.ConnectorPointsOrthogonalCalculator = f
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(43),
            s = n(30),
            a = function(t) {
                function e(e) { return t.call(this, e) || this }
                return i(e, t), e.prototype.getCorrectOriginPoint = function(t, e) { return t }, e.prototype.getSameShapeOffsetPoints = function(t, e, n, o) { return [] }, e.prototype.getOverlappedPointsOffsetPoints = function(t, e, n, o) { return [] }, e.prototype.getBeginOverlappedShapeOffsetPoints = function(t, e, n, o) { return [] }, e.prototype.getEndOverlappedShapeOffsetPoints = function(t, e, n, o) { return [] }, e.prototype.getBeginOnSideOffsetPoints = function(t, e, n, o) { return [] }, e.prototype.getEndOnSideOffsetPoints = function(t, e, n, o) { return [] }, e.prototype.getBeginOffSideOffsetPoints = function(t, e, n, o) { return [] }, e.prototype.getEndOffSideOffsetPoints = function(t, e, n, o) { return [] }, e.prototype.isOnSidePoint = function(t, e) { return !0 }, e.prototype.isDirectConnectionAllowed = function(t, e, n) { var o = this.getSideCalculator(e, n); return void 0 === o || o.isDirectConnectionAllowed(t, e, n) }, e.prototype.getDirectConnectionPoints = function(t, e) {
                    var n = Math.abs(e.x - t.x),
                        o = Math.abs(e.y - t.y);
                    if (n > o) { var i = Math.min(t.x, e.x) + n / 2; return [new s.ConnectorRenderPoint(i, t.y), new s.ConnectorRenderPoint(i, e.y)] }
                    var r = Math.min(t.y, e.y) + o / 2;
                    return [new s.ConnectorRenderPoint(t.x, r), new s.ConnectorRenderPoint(e.x, r)]
                }, e
            }(r.ConnectorPointsOrthogonalSideCalculatorBase);
        e.ConnectorPointsOrthogonalUndefinedSideCalculator = a
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(4),
            s = n(43),
            a = n(30),
            c = function(t) {
                function e(e) { return t.call(this, e) || this }
                return i(e, t), e.prototype.getCorrectOriginPoint = function(t, e) { return t.y < e.bottom && (t = t.offset(0, e.bottom - t.y)), t }, e.prototype.getSameShapeOffsetPoints = function(t, e, n, o) {
                    switch (t) {
                        case r.ConnectionPointSide.East:
                        case r.ConnectionPointSide.West:
                        case r.ConnectionPointSide.South:
                            return [e.offset(0, this.getMinOffset())];
                        case r.ConnectionPointSide.North:
                            return this.getAsideOffsetPoints(e, n, o, this.getMinOffset(), this.getMinOffset())
                    }
                }, e.prototype.getOverlappedPointsOffsetPoints = function(t, e, n, o) {
                    switch (t) {
                        case r.ConnectionPointSide.South:
                            return [e.offset(0, this.getMinOffset())];
                        case r.ConnectionPointSide.North:
                            return [e.offset(0, -this.getMinOffset())]
                    }
                    return []
                }, e.prototype.getBeginOverlappedShapeOffsetPoints = function(t, e, n, o) {
                    switch (t) {
                        case r.ConnectionPointSide.East:
                            return e.y < n.y ? e.x > n.x ? [] : [e.offset(0, this.getMinOffset())] : e.y > this.endRect.bottom ? this.getAsideOffsetPoints(e, n, o, this.getMinOffset(), this.getMinOffset(), !1) : [e.offset(0, this.getMinOffset())];
                        case r.ConnectionPointSide.West:
                            return e.y < n.y ? e.x < n.x ? [] : [e.offset(0, this.getMinOffset())] : e.y > this.endRect.bottom ? this.getAsideOffsetPoints(e, n, o, this.getMinOffset(), this.getMinOffset(), !0) : [e.offset(0, this.getMinOffset())];
                        case r.ConnectionPointSide.South:
                            return [e.offset(0, this.getMinOffset())];
                        case r.ConnectionPointSide.North:
                            return this.getAsideOffsetPoints(e, n, o, this.getMinOffset(), this.getMinOffset(), e.x < n.x)
                    }
                }, e.prototype.getEndOverlappedShapeOffsetPoints = function(t, e, n, o) {
                    switch (t) {
                        case r.ConnectionPointSide.East:
                            return n.y < e.y ? this.getAsideOffsetPoints(e, n, o, this.getMinOffset(), this.getMinOffset(), !1) : e.x < n.x ? [e.offset(0, this.getMinOffset())] : [];
                        case r.ConnectionPointSide.West:
                            return n.y < e.y ? this.getAsideOffsetPoints(e, n, o, this.getMinOffset(), this.getMinOffset(), !0) : e.x > n.x ? [e.offset(0, this.getMinOffset())] : [];
                        case r.ConnectionPointSide.South:
                            return [e.offset(0, this.getMinOffset())];
                        case r.ConnectionPointSide.North:
                            var i = this.getMinOffset();
                            return this.beginRect.bottom > e.y && (i += this.beginRect.bottom - e.y), [e.offset(0, i)]
                    }
                }, e.prototype.getBeginOnSideOffsetPoints = function(t, e, n, o) { return [e.offset(0, this.getScaleableOffsetY(e, n, !1))] }, e.prototype.getEndOnSideOffsetPoints = function(t, e, n, o) { return [e.offset(0, this.getScaleableOffsetY(e, n, !0))] }, e.prototype.getBeginOffSideOffsetPoints = function(t, e, n, o) {
                    switch (t) {
                        case r.ConnectionPointSide.East:
                            if (this.isBeginEndOverlappedX()) return this.getScaleableAsideOffsetPoints(e, n, o, !1, !1);
                            break;
                        case r.ConnectionPointSide.West:
                            if (this.isBeginEndOverlappedX()) return this.getScaleableAsideOffsetPoints(e, n, o, !1, !0);
                            break;
                        case r.ConnectionPointSide.South:
                            if (this.isBeginEndOverlappedX()) return this.getScaleableAsideOffsetPoints(e, n, o, !1);
                            break;
                        case r.ConnectionPointSide.Undefined:
                        case r.ConnectionPointSide.North:
                            return this.getScaleableAsideOffsetPoints(e, n, o, !1)
                    }
                    return [e.offset(0, this.getScaleableOffsetY(e, n, !1))]
                }, e.prototype.getEndOffSideOffsetPoints = function(t, e, n, o) { if (t === r.ConnectionPointSide.Undefined) return this.getScaleableAsideOffsetPoints(e, n, o, !0); if (this.isBeginEndOverlappedX()) { var i = this.beginRect.center.x > this.endRect.center.x; return this.getScaleableAsideOffsetPoints(e, n, o, !0, i) } return [e.offset(0, this.getScaleableOffsetY(e, n, !0))] }, e.prototype.getAsideOffsetPoints = function(t, e, n, o, i, r) { var s = []; return void 0 !== n && (void 0 === r && (r = e.x < t.x), r ? s.push(t.offset(-(t.x - n.left + i), o)) : s.push(t.offset(n.right - t.x + i, o))), s.push(t.offset(0, o)), s }, e.prototype.getScaleableAsideOffsetPoints = function(t, e, n, o, i) {
                    var r = this.getScaleableOffsetY(t, e, o),
                        s = this.getScaleableOffsetX(t, e, o);
                    return this.getAsideOffsetPoints(t, e, n, r, s, i)
                }, e.prototype.getScaleableOffsetX = function(t, e, n) { if (this.beginRect && this.endRect && !n && !this.isBeginEndOverlappedX()) { var o = void 0; if ((o = e.x < t.x ? this.beginRect.left - this.endRect.right : this.endRect.left - this.beginRect.right) < 2 * this.getMinOffset()) return o / 2 } return this.getMinOffset() }, e.prototype.getScaleableOffsetY = function(t, e, n) { if (this.beginRect && this.endRect) { var o = n ? this.beginRect.top - t.y : this.endRect.top - t.y; if (o > 0 && o < 2 * this.getMinOffset()) return o / 2 } return this.getMinOffset() }, e.prototype.isOnSidePoint = function(t, e) { return e.y > t.y }, e.prototype.isDirectConnectionAllowed = function(t, e, n) { return t === r.ConnectionPointSide.North || t === r.ConnectionPointSide.Undefined }, e.prototype.getDirectConnectionPoints = function(t, e) { var n = t.y + (e.y - t.y) / 2; return [new a.ConnectorRenderPoint(t.x, n), new a.ConnectorRenderPoint(e.x, n)] }, e
            }(s.ConnectorPointsOrthogonalSideCalculatorBase);
        e.ConnectorPointsOrthogonalSouthSideCalculator = c
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(4),
            s = n(43),
            a = n(30),
            c = function(t) {
                function e(e) { return t.call(this, e) || this }
                return i(e, t), e.prototype.getCorrectOriginPoint = function(t, e) { return t.y > e.top && (t = t.offset(0, e.top - t.y)), t }, e.prototype.getSameShapeOffsetPoints = function(t, e, n, o) {
                    switch (t) {
                        case r.ConnectionPointSide.East:
                        case r.ConnectionPointSide.West:
                        case r.ConnectionPointSide.North:
                            return [e.offset(0, -this.getMinOffset())];
                        case r.ConnectionPointSide.South:
                            return this.getAsideOffsetPoints(e, n, o, this.getMinOffset(), this.getMinOffset())
                    }
                }, e.prototype.getOverlappedPointsOffsetPoints = function(t, e, n, o) {
                    switch (t) {
                        case r.ConnectionPointSide.South:
                            return [e.offset(0, this.getMinOffset())];
                        case r.ConnectionPointSide.North:
                            return [e.offset(0, -this.getMinOffset())]
                    }
                    return []
                }, e.prototype.getBeginOverlappedShapeOffsetPoints = function(t, e, n, o) {
                    switch (t) {
                        case r.ConnectionPointSide.East:
                            return e.y > n.y ? e.x > n.x ? [] : [e.offset(0, -this.getMinOffset())] : e.y < this.endRect.top ? this.getAsideOffsetPoints(e, n, o, this.getMinOffset(), this.getMinOffset(), !1) : [e.offset(0, -this.getMinOffset())];
                        case r.ConnectionPointSide.West:
                            return e.y > n.y ? e.x < n.x ? [] : [e.offset(0, -this.getMinOffset())] : e.y < this.endRect.top ? this.getAsideOffsetPoints(e, n, o, this.getMinOffset(), this.getMinOffset(), !0) : [e.offset(0, -this.getMinOffset())];
                        case r.ConnectionPointSide.North:
                            return [e.offset(0, -this.getMinOffset())];
                        case r.ConnectionPointSide.South:
                            return this.getAsideOffsetPoints(e, n, o, this.getMinOffset(), this.getMinOffset(), e.x < n.x)
                    }
                }, e.prototype.getEndOverlappedShapeOffsetPoints = function(t, e, n, o) {
                    switch (t) {
                        case r.ConnectionPointSide.East:
                            return n.y > e.y ? this.getAsideOffsetPoints(e, n, o, this.getMinOffset(), this.getMinOffset(), !1) : e.x < n.x ? [e.offset(0, -this.getMinOffset())] : [];
                        case r.ConnectionPointSide.West:
                            return n.y > e.y ? this.getAsideOffsetPoints(e, n, o, this.getMinOffset(), this.getMinOffset(), !0) : e.x > n.x ? [e.offset(0, -this.getMinOffset())] : [];
                        case r.ConnectionPointSide.North:
                            return [e.offset(0, -this.getMinOffset())];
                        case r.ConnectionPointSide.South:
                            var i = -this.getMinOffset();
                            return this.beginRect.top < e.y && (i -= e.y - this.beginRect.top), [e.offset(0, i)]
                    }
                }, e.prototype.getBeginOnSideOffsetPoints = function(t, e, n, o) { return [e.offset(0, -this.getScaleableOffsetY(e, n, !1))] }, e.prototype.getEndOnSideOffsetPoints = function(t, e, n, o) { return [e.offset(0, -this.getScaleableOffsetY(e, n, !0))] }, e.prototype.getBeginOffSideOffsetPoints = function(t, e, n, o) {
                    switch (t) {
                        case r.ConnectionPointSide.East:
                            if (this.isBeginEndOverlappedX()) return this.getScaleableAsideOffsetPoints(e, n, o, !1, !1);
                            break;
                        case r.ConnectionPointSide.West:
                            if (this.isBeginEndOverlappedX()) return this.getScaleableAsideOffsetPoints(e, n, o, !1, !0);
                            break;
                        case r.ConnectionPointSide.North:
                            if (this.isBeginEndOverlappedX()) return this.getScaleableAsideOffsetPoints(e, n, o, !1);
                            break;
                        case r.ConnectionPointSide.Undefined:
                        case r.ConnectionPointSide.South:
                            return this.getScaleableAsideOffsetPoints(e, n, o, !1)
                    }
                    return [e.offset(0, -this.getScaleableOffsetY(e, n, !1))]
                }, e.prototype.getEndOffSideOffsetPoints = function(t, e, n, o) { if (t === r.ConnectionPointSide.Undefined) return this.getScaleableAsideOffsetPoints(e, n, o, !0); if (this.isBeginEndOverlappedX()) { var i = this.beginRect.center.x > this.endRect.center.x; return this.getScaleableAsideOffsetPoints(e, n, o, !0, i) } return [e.offset(0, -this.getScaleableOffsetY(e, n, !0))] }, e.prototype.getAsideOffsetPoints = function(t, e, n, o, i, r) { var s = []; return void 0 !== n && (void 0 === r && (r = e.x < t.x), r ? s.push(t.offset(-(t.x - n.left + i), -o)) : s.push(t.offset(n.right - t.x + i, -o))), s.push(t.offset(0, -o)), s }, e.prototype.getScaleableAsideOffsetPoints = function(t, e, n, o, i) {
                    var r = this.getScaleableOffsetY(t, e, o),
                        s = this.getScaleableOffsetX(t, e, o);
                    return this.getAsideOffsetPoints(t, e, n, r, s, i)
                }, e.prototype.getScaleableOffsetX = function(t, e, n) { if (this.beginRect && this.endRect && !n && !this.isBeginEndOverlappedX()) { var o = void 0; if ((o = e.x < t.x ? this.beginRect.left - this.endRect.right : this.endRect.left - this.beginRect.right) < 2 * this.getMinOffset()) return o / 2 } return this.getMinOffset() }, e.prototype.getScaleableOffsetY = function(t, e, n) { if (this.beginRect && this.endRect) { var o = n ? t.y - this.beginRect.bottom : t.y - this.endRect.bottom; if (o > 0 && o < 2 * this.getMinOffset()) return o / 2 } return this.getMinOffset() }, e.prototype.isOnSidePoint = function(t, e) { return e.y < t.y }, e.prototype.isDirectConnectionAllowed = function(t, e, n) { return t === r.ConnectionPointSide.South || t === r.ConnectionPointSide.Undefined }, e.prototype.getDirectConnectionPoints = function(t, e) { var n = e.y + (t.y - e.y) / 2; return [new a.ConnectorRenderPoint(t.x, n), new a.ConnectorRenderPoint(e.x, n)] }, e
            }(s.ConnectorPointsOrthogonalSideCalculatorBase);
        e.ConnectorPointsOrthogonalNorthSideCalculator = c
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(4),
            s = n(43),
            a = n(30),
            c = function(t) {
                function e(e) { return t.call(this, e) || this }
                return i(e, t), e.prototype.getCorrectOriginPoint = function(t, e) { return t.x < e.right && (t = t.offset(e.right - t.x, 0)), t }, e.prototype.getSameShapeOffsetPoints = function(t, e, n, o) {
                    switch (t) {
                        case r.ConnectionPointSide.North:
                        case r.ConnectionPointSide.South:
                        case r.ConnectionPointSide.East:
                            return [e.offset(this.getMinOffset(), 0)];
                        case r.ConnectionPointSide.West:
                            return this.getAsideOffsetPoints(e, n, o, this.getMinOffset(), this.getMinOffset())
                    }
                }, e.prototype.getOverlappedPointsOffsetPoints = function(t, e, n, o) {
                    switch (t) {
                        case r.ConnectionPointSide.East:
                            return [e.offset(this.getMinOffset(), 0)];
                        case r.ConnectionPointSide.West:
                            return [e.offset(-this.getMinOffset(), 0)]
                    }
                    return []
                }, e.prototype.getBeginOverlappedShapeOffsetPoints = function(t, e, n, o) {
                    switch (t) {
                        case r.ConnectionPointSide.North:
                            return e.x < n.x ? e.y < n.y ? [] : [e.offset(this.getMinOffset(), 0)] : e.x > this.endRect.right ? this.getAsideOffsetPoints(e, n, o, this.getMinOffset(), this.getMinOffset(), !0) : [e.offset(this.getMinOffset(), 0)];
                        case r.ConnectionPointSide.South:
                            return e.x < n.x ? e.y > n.y ? [] : [e.offset(this.getMinOffset(), 0)] : e.x > this.endRect.right ? this.getAsideOffsetPoints(e, n, o, this.getMinOffset(), this.getMinOffset(), !1) : [e.offset(this.getMinOffset(), 0)];
                        case r.ConnectionPointSide.East:
                            return [e.offset(this.getMinOffset(), 0)];
                        case r.ConnectionPointSide.West:
                            return this.getAsideOffsetPoints(e, n, o, this.getMinOffset(), this.getMinOffset(), e.y < n.y)
                    }
                }, e.prototype.getEndOverlappedShapeOffsetPoints = function(t, e, n, o) {
                    switch (t) {
                        case r.ConnectionPointSide.East:
                            return [e.offset(this.getMinOffset(), 0)];
                        case r.ConnectionPointSide.West:
                            var i = this.getMinOffset();
                            return this.beginRect.right > e.x && (i += this.beginRect.right - e.x), [e.offset(i, 0)];
                        case r.ConnectionPointSide.North:
                            return n.x < e.x ? this.getAsideOffsetPoints(e, n, o, this.getMinOffset(), this.getMinOffset(), !0) : e.y > n.y ? [e.offset(this.getMinOffset(), 0)] : [];
                        case r.ConnectionPointSide.South:
                            return n.x < e.x ? this.getAsideOffsetPoints(e, n, o, this.getMinOffset(), this.getMinOffset(), !1) : e.y < n.y ? [e.offset(this.getMinOffset(), 0)] : []
                    }
                }, e.prototype.getBeginOnSideOffsetPoints = function(t, e, n, o) { return [e.offset(this.getScaleableOffsetX(e, n, !1), 0)] }, e.prototype.getEndOnSideOffsetPoints = function(t, e, n, o) { return [e.offset(this.getScaleableOffsetX(e, n, !0), 0)] }, e.prototype.getBeginOffSideOffsetPoints = function(t, e, n, o) {
                    switch (t) {
                        case r.ConnectionPointSide.South:
                            if (this.isBeginEndOverlappedY()) return this.getScaleableAsideOffsetPoints(e, n, o, !1, !1);
                            break;
                        case r.ConnectionPointSide.North:
                            if (this.isBeginEndOverlappedY()) return this.getScaleableAsideOffsetPoints(e, n, o, !1, !0);
                            break;
                        case r.ConnectionPointSide.East:
                            if (this.isBeginEndOverlappedY()) return this.getScaleableAsideOffsetPoints(e, n, o, !1);
                            break;
                        case r.ConnectionPointSide.Undefined:
                        case r.ConnectionPointSide.West:
                            return this.getScaleableAsideOffsetPoints(e, n, o, !1)
                    }
                    return [e.offset(this.getScaleableOffsetX(e, n, !1), 0)]
                }, e.prototype.getEndOffSideOffsetPoints = function(t, e, n, o) { if (t === r.ConnectionPointSide.Undefined) return this.getScaleableAsideOffsetPoints(e, n, o, !0); if (this.isBeginEndOverlappedY()) { var i = this.beginRect.center.y > this.endRect.center.y; return this.getScaleableAsideOffsetPoints(e, n, o, !0, i) } return [e.offset(this.getScaleableOffsetX(e, n, !0), 0)] }, e.prototype.getAsideOffsetPoints = function(t, e, n, o, i, r) { var s = []; return void 0 !== n && (void 0 === r && (r = e.y < t.y), r ? s.push(t.offset(o, -(t.y - n.top + i))) : s.push(t.offset(o, n.bottom - t.y + i))), s.push(t.offset(o, 0)), s }, e.prototype.getScaleableAsideOffsetPoints = function(t, e, n, o, i) {
                    var r = this.getScaleableOffsetX(t, e, o),
                        s = this.getScaleableOffsetY(t, e, o);
                    return this.getAsideOffsetPoints(t, e, n, r, s, i)
                }, e.prototype.getScaleableOffsetX = function(t, e, n) { if (this.beginRect && this.endRect) { var o = n ? this.beginRect.left - t.x : this.endRect.left - t.x; if (o > 0 && o < 2 * this.getMinOffset()) return o / 2 } return this.getMinOffset() }, e.prototype.getScaleableOffsetY = function(t, e, n) { if (this.beginRect && this.endRect && !n && !this.isBeginEndOverlappedY()) { var o = void 0; if ((o = e.y < t.y ? this.beginRect.top - this.endRect.bottom : this.endRect.top - this.beginRect.bottom) < 2 * this.getMinOffset()) return o / 2 } return this.getMinOffset() }, e.prototype.isOnSidePoint = function(t, e) { return e.x > t.x }, e.prototype.isDirectConnectionAllowed = function(t, e, n) { return t === r.ConnectionPointSide.West || t === r.ConnectionPointSide.Undefined }, e.prototype.getDirectConnectionPoints = function(t, e) { var n = t.x + (e.x - t.x) / 2; return [new a.ConnectorRenderPoint(n, t.y), new a.ConnectorRenderPoint(n, e.y)] }, e
            }(s.ConnectorPointsOrthogonalSideCalculatorBase);
        e.ConnectorPointsOrthogonalEastSideCalculator = c
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(4),
            s = n(43),
            a = n(30),
            c = function(t) {
                function e(e) { return t.call(this, e) || this }
                return i(e, t), e.prototype.getCorrectOriginPoint = function(t, e) { return t.x > e.left && (t = t.offset(e.left - t.x, 0)), t }, e.prototype.getSameShapeOffsetPoints = function(t, e, n, o) {
                    switch (t) {
                        case r.ConnectionPointSide.North:
                        case r.ConnectionPointSide.South:
                        case r.ConnectionPointSide.West:
                            return [e.offset(-this.getMinOffset(), 0)];
                        case r.ConnectionPointSide.East:
                            return this.getAsideOffsetPoints(e, n, o, this.getMinOffset(), this.getMinOffset())
                    }
                }, e.prototype.getOverlappedPointsOffsetPoints = function(t, e, n, o) {
                    switch (t) {
                        case r.ConnectionPointSide.East:
                            return [e.offset(this.getMinOffset(), 0)];
                        case r.ConnectionPointSide.West:
                            return [e.offset(-this.getMinOffset(), 0)]
                    }
                    return []
                }, e.prototype.getBeginOverlappedShapeOffsetPoints = function(t, e, n, o) {
                    switch (t) {
                        case r.ConnectionPointSide.North:
                            return e.x > n.x ? e.y < n.y ? [] : [e.offset(-this.getMinOffset(), 0)] : e.x < this.endRect.left ? this.getAsideOffsetPoints(e, n, o, this.getMinOffset(), this.getMinOffset(), !0) : [e.offset(-this.getMinOffset(), 0)];
                        case r.ConnectionPointSide.South:
                            return e.x > n.x ? e.y > n.y ? [] : [e.offset(-this.getMinOffset(), 0)] : e.x < this.endRect.left ? this.getAsideOffsetPoints(e, n, o, this.getMinOffset(), this.getMinOffset(), !1) : [e.offset(-this.getMinOffset(), 0)];
                        case r.ConnectionPointSide.West:
                            return [e.offset(-this.getMinOffset(), 0)];
                        case r.ConnectionPointSide.East:
                            return this.getAsideOffsetPoints(e, n, o, this.getMinOffset(), this.getMinOffset(), e.y < n.y)
                    }
                }, e.prototype.getEndOverlappedShapeOffsetPoints = function(t, e, n, o) {
                    switch (t) {
                        case r.ConnectionPointSide.East:
                            var i = -this.getMinOffset();
                            return this.beginRect.left < e.x && (i -= e.x - this.beginRect.left), [e.offset(i, 0)];
                        case r.ConnectionPointSide.West:
                            return [e.offset(-this.getMinOffset(), 0)];
                        case r.ConnectionPointSide.North:
                            return n.x > e.x ? this.getAsideOffsetPoints(e, n, o, this.getMinOffset(), this.getMinOffset(), !0) : e.y > n.y ? [e.offset(-this.getMinOffset(), 0)] : [];
                        case r.ConnectionPointSide.South:
                            return n.x > e.x ? this.getAsideOffsetPoints(e, n, o, this.getMinOffset(), this.getMinOffset(), !1) : e.y < n.y ? [e.offset(-this.getMinOffset(), 0)] : []
                    }
                }, e.prototype.getBeginOnSideOffsetPoints = function(t, e, n, o) { return [e.offset(-this.getScaleableOffsetX(e, n, !1), 0)] }, e.prototype.getEndOnSideOffsetPoints = function(t, e, n, o) { return [e.offset(-this.getScaleableOffsetX(e, n, !0), 0)] }, e.prototype.getBeginOffSideOffsetPoints = function(t, e, n, o) {
                    switch (t) {
                        case r.ConnectionPointSide.South:
                            if (this.isBeginEndOverlappedY()) return this.getScaleableAsideOffsetPoints(e, n, o, !1, !1);
                            break;
                        case r.ConnectionPointSide.North:
                            if (this.isBeginEndOverlappedY()) return this.getScaleableAsideOffsetPoints(e, n, o, !1, !0);
                            break;
                        case r.ConnectionPointSide.West:
                            if (this.isBeginEndOverlappedY()) return this.getScaleableAsideOffsetPoints(e, n, o, !1);
                            break;
                        case r.ConnectionPointSide.Undefined:
                        case r.ConnectionPointSide.East:
                            return this.getScaleableAsideOffsetPoints(e, n, o, !1)
                    }
                    return [e.offset(-this.getScaleableOffsetX(e, n, !1), 0)]
                }, e.prototype.getEndOffSideOffsetPoints = function(t, e, n, o) { if (t === r.ConnectionPointSide.Undefined) return this.getScaleableAsideOffsetPoints(e, n, o, !0); if (this.isBeginEndOverlappedY()) { var i = this.beginRect.center.y > this.endRect.center.y; return this.getScaleableAsideOffsetPoints(e, n, o, !0, i) } return [e.offset(-this.getScaleableOffsetX(e, n, !0), 0)] }, e.prototype.getAsideOffsetPoints = function(t, e, n, o, i, r) { var s = []; return void 0 !== n && (void 0 === r && (r = e.y < t.y), r ? s.push(t.offset(-o, -(t.y - n.top + i))) : s.push(t.offset(-o, n.bottom - t.y + i))), s.push(t.offset(-o, 0)), s }, e.prototype.getScaleableAsideOffsetPoints = function(t, e, n, o, i) {
                    var r = this.getScaleableOffsetX(t, e, o),
                        s = this.getScaleableOffsetY(t, e, o);
                    return this.getAsideOffsetPoints(t, e, n, r, s, i)
                }, e.prototype.getScaleableOffsetX = function(t, e, n) { if (this.beginRect && this.endRect) { var o = n ? t.x - this.beginRect.right : t.x - this.endRect.right; if (o > 0 && o < 2 * this.getMinOffset()) return o / 2 } return this.getMinOffset() }, e.prototype.getScaleableOffsetY = function(t, e, n) { if (this.beginRect && this.endRect && !n && !this.isBeginEndOverlappedY()) { var o = void 0; if ((o = e.y < t.y ? this.beginRect.top - this.endRect.bottom : this.endRect.top - this.beginRect.bottom) < 2 * this.getMinOffset()) return o / 2 } return this.getMinOffset() }, e.prototype.isOnSidePoint = function(t, e) { return e.x < t.x }, e.prototype.isDirectConnectionAllowed = function(t, e, n) { return t === r.ConnectionPointSide.East || t === r.ConnectionPointSide.Undefined }, e.prototype.getDirectConnectionPoints = function(t, e) { var n = e.x + (t.x - e.x) / 2; return [new a.ConnectorRenderPoint(n, t.y), new a.ConnectorRenderPoint(n, e.y)] }, e
            }(s.ConnectorPointsOrthogonalSideCalculatorBase);
        e.ConnectorPointsOrthogonalWestSideCalculator = c
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = function() { return function(t, e) { this.position = t, this.value = e } }();
        e.ConnectorText = o;
        var i = function() {
            function t() { this.items = {} }
            return t.prototype.get = function(t) { return this.items[t] }, t.prototype.set = function(t, e) { this.items[t] = e }, t.prototype.remove = function(t) { delete this.items[t] }, t.prototype.map = function(t) { var e = []; return this.forEach(function(n) { return e.push(t(n)) }), e }, t.prototype.forEach = function(t) { for (var e in this.items) this.items.hasOwnProperty(e) && t(this.items[e]) }, t.prototype.clone = function() { var e = new t; return this.forEach(function(t) { e.set(t.position, new o(t.position, t.value)) }), e }, t.prototype.toObject = function() {
                var t = {},
                    e = !1;
                return this.forEach(function(n) { t[n.position] = n.value, e = !0 }), e ? t : null
            }, t.prototype.fromObject = function(t) {
                for (var e in t)
                    if (t.hasOwnProperty(e)) {
                        var n = parseFloat(e);
                        isNaN(n) || "string" != typeof t[e] || this.set(n, new o(n, t[e]))
                    }
            }, t
        }();
        e.ConnectorTexts = i
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(3),
            s = n(0),
            a = function(t) {
                function e(e) { var n = t.call(this) || this; return n.offset = e, n }
                return i(e, t), e.prototype.redo = function(t) {
                    this.oldSize = t.model.size.clone(), this.backOffset = new s.Offset(-this.offset.left, -this.offset.top, -this.offset.right, -this.offset.bottom);
                    var e = Math.max(this.oldSize.width + this.offset.left + this.offset.right, t.model.pageWidth),
                        n = Math.max(this.oldSize.height + this.offset.top + this.offset.bottom, t.model.pageHeight);
                    t.changeModelSize(new s.Size(e, n), this.offset)
                }, e.prototype.undo = function(t) { t.changeModelSize(this.oldSize, this.backOffset) }, e
            }(r.HistoryItem);
        e.ModelResizeHistoryItem = a
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(3),
            s = n(11),
            a = n(5),
            c = function(t) {
                function e(e, n) { var o = t.call(this) || this; return o.offsetX = e, o.offsetY = n, o }
                return i(e, t), e.prototype.redo = function(t) {
                    var e = this;
                    t.model.iterateItems(function(n) { n instanceof s.Shape && t.moveShape(n, n.position.offset(e.offsetX, e.offsetY)), n instanceof a.Connector && n.points.forEach(function(o, i) { return t.moveConnectorPoint(n, i, o.offset(e.offsetX, e.offsetY)) }) })
                }, e.prototype.undo = function(t) {
                    var e = this;
                    t.model.iterateItems(function(n) { n instanceof s.Shape && t.moveShape(n, n.position.offset(-e.offsetX, -e.offsetY)), n instanceof a.Connector && n.points.forEach(function(o, i) { return t.moveConnectorPoint(n, i, o.offset(-e.offsetX, -e.offsetY)) }) })
                }, e
            }(r.HistoryItem);
        e.UpdatePositionsOnPageResizeHistoryItem = c
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = function(t) {
            function e(e, n) { var o = t.call(this) || this; return o.connectorKey = e, o.pointIndex = n, o }
            return i(e, t), e.prototype.redo = function(t) {
                var e = t.model.findConnector(this.connectorKey);
                this.point = e.points[this.pointIndex].clone(), t.deleteConnectorPoint(e, this.pointIndex)
            }, e.prototype.undo = function(t) {
                var e = t.model.findConnector(this.connectorKey);
                t.addConnectorPoint(e, this.pointIndex, this.point)
            }, e
        }(n(3).HistoryItem);
        e.DeleteConnectorPointHistoryItem = r
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = function(t) {
            function e(e, n, o) { var i = t.call(this) || this; return i.shapeKey = e, i.position = n, i.size = o, i }
            return i(e, t), e.prototype.redo = function(t) {
                var e = t.model.findShape(this.shapeKey);
                this.oldPosition = e.position.clone(), this.oldSize = e.size.clone(), t.resizeShape(e, this.position, this.size)
            }, e.prototype.undo = function(t) {
                var e = t.model.findShape(this.shapeKey);
                t.resizeShape(e, this.oldPosition, this.oldSize)
            }, e
        }(n(3).HistoryItem);
        e.ResizeShapeHistoryItem = r
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = function(t) {
            function e(e) { var n = t.call(this) || this; return n.connectorKey = e, n }
            return i(e, t), e.prototype.redo = function(t) {
                var e = t.model.findConnector(this.connectorKey);
                this.connector = e.clone(), t.deleteConnector(e)
            }, e.prototype.undo = function(t) { t.addConnector(this.connector, this.connector.key) }, e
        }(n(3).HistoryItem);
        e.DeleteConnectorHistoryItem = r
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(14),
            s = n(1),
            a = function(t) {
                function e() { return t.call(this, "Process", "Process") || this }
                return i(e, t), Object.defineProperty(e.prototype, "key", { get: function() { return s.ShapeTypes.Process }, enumerable: !0, configurable: !0 }), e
            }(r.RectangleShapeDescription);
        e.ProcessShapeDescription = a
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(92),
            s = n(1),
            a = n(0),
            c = n(9),
            u = function(t) {
                function e() { return t.call(this, "Decision", "Decision", new a.Size(c.ShapeDefaultDimension, .75 * c.ShapeDefaultDimension)) || this }
                return i(e, t), Object.defineProperty(e.prototype, "key", { get: function() { return s.ShapeTypes.Decision }, enumerable: !0, configurable: !0 }), e
            }(r.DiamondShapeDescription);
        e.DecisionShapeDescription = u
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(14),
            s = n(1),
            a = n(2),
            c = n(4),
            u = function(t) {
                function e() { return t.call(this, "Manual Input", "Manual Input") || this }
                return i(e, t), Object.defineProperty(e.prototype, "key", { get: function() { return s.ShapeTypes.ManualInput }, enumerable: !0, configurable: !0 }), e.prototype.createShapePrimitives = function(t) {
                    var n = t.rectangle,
                        o = n.left,
                        i = n.top,
                        r = n.right,
                        s = n.bottom,
                        c = (n.width, i + n.height * e.slopeHeightRatio);
                    return [new a.PathPrimitive([new a.PathPrimitiveMoveToCommand(o, c), new a.PathPrimitiveLineToCommand(r, i), new a.PathPrimitiveLineToCommand(r, s), new a.PathPrimitiveLineToCommand(o, s), new a.PathPrimitiveClosePathCommand], t.style)]
                }, e.prototype.processConnectionPoint = function(t, n) { t.getConnectionPointSide(n) === c.ConnectionPointSide.North && (n.y += e.slopeHeightRatio / 2 * t.size.height) }, e.slopeHeightRatio = .1, e
            }(r.RectangleShapeDescription);
        e.ManualInputShapeDescription = u
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(14),
            s = n(1),
            a = n(2),
            c = n(4),
            u = function(t) {
                function e() { return t.call(this, "Data", "Data") || this }
                return i(e, t), Object.defineProperty(e.prototype, "key", { get: function() { return s.ShapeTypes.Data }, enumerable: !0, configurable: !0 }), e.prototype.createShapePrimitives = function(t) {
                    var n = t.rectangle,
                        o = n.left,
                        i = n.top,
                        r = n.right,
                        s = n.bottom,
                        c = n.width,
                        u = n.height,
                        p = Math.min(Math.max(0, u / Math.tan(e.slopeAngle)), c),
                        h = o + p,
                        l = r - p;
                    return [new a.PathPrimitive([new a.PathPrimitiveMoveToCommand(h, i), new a.PathPrimitiveLineToCommand(r, i), new a.PathPrimitiveLineToCommand(l, s), new a.PathPrimitiveLineToCommand(o, s), new a.PathPrimitiveClosePathCommand], t.style)]
                }, e.prototype.processConnectionPoint = function(t, n) {
                    var o = t.size.height / Math.tan(e.slopeAngle),
                        i = t.getConnectionPointSide(n);
                    i === c.ConnectionPointSide.East ? n.x -= o / 2 : i === c.ConnectionPointSide.West && (n.x += o / 2)
                }, e.slopeAngle = 81 * Math.PI / 180, e
            }(r.RectangleShapeDescription);
        e.DataShapeDescription = u
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(14),
            s = n(1),
            a = n(2),
            c = n(0),
            u = n(9),
            p = function(t) {
                function e() { return t.call(this, "Terminator", "Terminator", new c.Size(u.ShapeDefaultDimension, .5 * u.ShapeDefaultDimension)) || this }
                return i(e, t), Object.defineProperty(e.prototype, "key", { get: function() { return s.ShapeTypes.Terminator }, enumerable: !0, configurable: !0 }), e.prototype.createShapePrimitives = function(t) {
                    var n = t.rectangle,
                        o = n.left,
                        i = n.top,
                        r = n.right,
                        s = n.bottom,
                        c = n.width,
                        u = (n.height, n.center.y),
                        p = o + c * e.curveWidthRatio,
                        h = o + c * (1 - e.curveWidthRatio);
                    return [new a.PathPrimitive([new a.PathPrimitiveMoveToCommand(p, i), new a.PathPrimitiveLineToCommand(h, i), new a.PathPrimitiveQuadraticCurveToCommand(r, i, r, u), new a.PathPrimitiveQuadraticCurveToCommand(r, s, h, s), new a.PathPrimitiveLineToCommand(p, s), new a.PathPrimitiveQuadraticCurveToCommand(o, s, o, u), new a.PathPrimitiveQuadraticCurveToCommand(o, i, p, i), new a.PathPrimitiveClosePathCommand], t.style)]
                }, e.curveWidthRatio = .3, e
            }(r.RectangleShapeDescription);
        e.TerminatorShapeDescription = p
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(14),
            s = n(1),
            a = n(29),
            c = n(21),
            u = n(0),
            p = n(2);
        e.PredefinedProcessEdgeParameterName = "e";
        var h = function(t) {
            function n() { return t.call(this, "Predefined Process", "Predefined\nProcess") || this }
            return i(n, t), Object.defineProperty(n.prototype, "key", { get: function() { return s.ShapeTypes.PredefinedProcess }, enumerable: !0, configurable: !0 }), n.prototype.createShapePrimitives = function(n) {
                var o = n.rectangle,
                    i = o.left,
                    r = o.top,
                    s = o.right,
                    a = o.bottom,
                    c = (o.width, o.height, i + n.parameters.get(e.PredefinedProcessEdgeParameterName).value),
                    u = s - n.parameters.get(e.PredefinedProcessEdgeParameterName).value;
                return t.prototype.createShapePrimitives.call(this, n).concat([new p.PathPrimitive([new p.PathPrimitiveMoveToCommand(c, r), new p.PathPrimitiveLineToCommand(c, a), new p.PathPrimitiveMoveToCommand(u, r), new p.PathPrimitiveLineToCommand(u, a)], n.style)])
            }, n.prototype.createParameters = function(t) { t.add(new a.ShapeParameter(e.PredefinedProcessEdgeParameterName, .1 * this.defaultSize.width)) }, n.prototype.normalizeParameters = function(t, o) { this.changeParameterValue(o, e.PredefinedProcessEdgeParameterName, function(e) { return Math.max(n.minEdge, Math.min(.3 * t.size.width, e.value)) }) }, n.prototype.modifyParameters = function(t, n, o, i) { this.changeParameterValue(n, e.PredefinedProcessEdgeParameterName, function(t) { return t.value + o }), this.normalizeParameters(t, n) }, n.prototype.getParameterPoints = function(t) { return [new c.ShapeParameterPoint("c", new u.Point(t.normalizeX(t.position.x + t.parameters.get(e.PredefinedProcessEdgeParameterName).value), t.position.y))] }, n.prototype.getTextRectangle = function(t, n) { var o = n.get(e.PredefinedProcessEdgeParameterName).value; return t.resize(-2 * o, 0).offset(o, 0) }, n.minEdge = 72, n
        }(r.RectangleShapeDescription);
        e.PredefinedProcessShapeDescription = h
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(11),
            s = n(2),
            a = n(21),
            c = n(0),
            u = n(65),
            p = n(1),
            h = function(t) {
                function e() { return t.call(this, "North-South Arrow") || this }
                return i(e, t), Object.defineProperty(e.prototype, "key", { get: function() { return p.ShapeTypes.ArrowNorthSouth }, enumerable: !0, configurable: !0 }), e.prototype.createShapePrimitives = function(t) {
                    var e = t.rectangle,
                        n = e.left,
                        o = e.top,
                        i = e.right,
                        r = e.bottom,
                        a = e.width,
                        c = (e.height, e.center.x),
                        p = (a - t.parameters.get(u.ArrowVerticalLineWidthParameterName).value) / 2,
                        h = t.parameters.get(u.ArrowVerticalTriangleHeightParameterName).value,
                        l = t.normalizeX(n + p),
                        d = t.normalizeY(o + h),
                        f = t.normalizeX(i - p),
                        y = t.normalizeY(r - h);
                    return [new s.PathPrimitive([new s.PathPrimitiveMoveToCommand(c, o), new s.PathPrimitiveLineToCommand(i, d), new s.PathPrimitiveLineToCommand(f, d), new s.PathPrimitiveLineToCommand(f, y), new s.PathPrimitiveLineToCommand(i, y), new s.PathPrimitiveLineToCommand(c, r), new s.PathPrimitiveLineToCommand(n, y), new s.PathPrimitiveLineToCommand(l, y), new s.PathPrimitiveLineToCommand(l, d), new s.PathPrimitiveLineToCommand(n, d), new s.PathPrimitiveClosePathCommand], t.style)]
                }, e.prototype.normalizeParameters = function(t, e) { this.changeParameterValue(e, u.ArrowVerticalTriangleHeightParameterName, function(e) { return Math.max(0, Math.min(t.size.height / 2 - 2 * r.Shape.lineWidth, e.value)) }), this.changeParameterValue(e, u.ArrowVerticalLineWidthParameterName, function(e) { return Math.max(0, Math.min(t.size.width, e.value)) }) }, e.prototype.modifyParameters = function(t, e, n, o) { this.changeParameterValue(e, u.ArrowVerticalTriangleHeightParameterName, function(t) { return t.value + o }), this.changeParameterValue(e, u.ArrowVerticalLineWidthParameterName, function(t) { return t.value - 2 * n }), this.normalizeParameters(t, e) }, e.prototype.getParameterPoints = function(t) { return [new a.ShapeParameterPoint("c", new c.Point(t.normalizeX(t.position.x + (t.size.width - t.parameters.get(u.ArrowVerticalLineWidthParameterName).value) / 2), t.normalizeY(t.position.y + t.parameters.get(u.ArrowVerticalTriangleHeightParameterName).value)))] }, e
            }(u.ArrowVerticalShapeDescription);
        e.ArrowNorthSouthShapeDescription = h
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(2),
            s = n(66),
            a = n(21),
            c = n(0),
            u = n(1),
            p = n(4),
            h = function(t) {
                function e() { return t.call(this, "Right Arrow") || this }
                return i(e, t), Object.defineProperty(e.prototype, "key", { get: function() { return u.ShapeTypes.ArrowRight }, enumerable: !0, configurable: !0 }), e.prototype.createShapePrimitives = function(t) {
                    var e = t.rectangle,
                        n = e.left,
                        o = e.top,
                        i = e.right,
                        a = e.bottom,
                        c = e.width,
                        u = e.height,
                        p = e.center.y,
                        h = c - t.parameters.get(s.ArrowVerticalTriangleWidthParameterName).value,
                        l = (u - t.parameters.get(s.ArrowVerticalLineHeightParameterName).value) / 2,
                        d = t.normalizeX(n + h),
                        f = t.normalizeY(o + l),
                        y = t.normalizeY(a - l);
                    return [new r.PathPrimitive([new r.PathPrimitiveMoveToCommand(n, f), new r.PathPrimitiveLineToCommand(d, f), new r.PathPrimitiveLineToCommand(d, o), new r.PathPrimitiveLineToCommand(i, p), new r.PathPrimitiveLineToCommand(d, a), new r.PathPrimitiveLineToCommand(d, y), new r.PathPrimitiveLineToCommand(n, y), new r.PathPrimitiveClosePathCommand], t.style)]
                }, e.prototype.modifyParameters = function(t, e, n, o) { this.changeParameterValue(e, s.ArrowVerticalTriangleWidthParameterName, function(t) { return t.value - n }), this.changeParameterValue(e, s.ArrowVerticalLineHeightParameterName, function(t) { return t.value - 2 * o }), this.normalizeParameters(t, e) }, e.prototype.getParameterPoints = function(t) { return [new a.ShapeParameterPoint("c", new c.Point(t.normalizeX(t.position.x + t.size.width - t.parameters.get(s.ArrowVerticalTriangleWidthParameterName).value), t.normalizeY(t.position.y + (t.size.height - t.parameters.get(s.ArrowVerticalLineHeightParameterName).value) / 2)))] }, e.prototype.processConnectionPoint = function(e, n) {
                    var o = e.parameters.get(s.ArrowVerticalTriangleWidthParameterName).value;
                    if (n.x > e.position.x + e.size.width - o) {
                        var i = e.size.height / 2 / o,
                            r = (n.x - (e.position.x + e.size.width - o)) * i,
                            a = e.getConnectionPointSide(n);
                        a === p.ConnectionPointSide.North ? n.y += r : a === p.ConnectionPointSide.South && (n.y -= r)
                    } else t.prototype.processConnectionPoint.call(this, e, n)
                }, e
            }(s.ArrowHorizontalShapeDescription);
        e.ArrowRightShapeDescription = h
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(2),
            s = n(21),
            a = n(0),
            c = n(65),
            u = n(1),
            p = n(4),
            h = function(t) {
                function e() { return t.call(this, "Top Arrow") || this }
                return i(e, t), Object.defineProperty(e.prototype, "key", { get: function() { return u.ShapeTypes.ArrowTop }, enumerable: !0, configurable: !0 }), e.prototype.createShapePrimitives = function(t) {
                    var e = t.rectangle,
                        n = e.left,
                        o = e.top,
                        i = e.right,
                        s = e.bottom,
                        a = e.width,
                        u = (e.height, e.center.x),
                        p = (a - t.parameters.get(c.ArrowVerticalLineWidthParameterName).value) / 2,
                        h = t.parameters.get(c.ArrowVerticalTriangleHeightParameterName).value,
                        l = t.normalizeX(n + p),
                        d = t.normalizeY(o + h),
                        f = t.normalizeX(i - p);
                    return [new r.PathPrimitive([new r.PathPrimitiveMoveToCommand(u, o), new r.PathPrimitiveLineToCommand(i, d), new r.PathPrimitiveLineToCommand(f, d), new r.PathPrimitiveLineToCommand(f, s), new r.PathPrimitiveLineToCommand(l, s), new r.PathPrimitiveLineToCommand(l, d), new r.PathPrimitiveLineToCommand(n, d), new r.PathPrimitiveClosePathCommand], t.style)]
                }, e.prototype.modifyParameters = function(t, e, n, o) { this.changeParameterValue(e, c.ArrowVerticalTriangleHeightParameterName, function(t) { return t.value + o }), this.changeParameterValue(e, c.ArrowVerticalLineWidthParameterName, function(t) { return t.value - 2 * n }), this.normalizeParameters(t, e) }, e.prototype.getParameterPoints = function(t) { return [new s.ShapeParameterPoint("c", new a.Point(t.normalizeX(t.position.x + (t.size.width - t.parameters.get(c.ArrowVerticalLineWidthParameterName).value) / 2), t.normalizeY(t.position.y + t.parameters.get(c.ArrowVerticalTriangleHeightParameterName).value)))] }, e.prototype.processConnectionPoint = function(e, n) {
                    var o = e.parameters.get(c.ArrowVerticalTriangleHeightParameterName).value;
                    if (n.y < e.position.y + o) {
                        var i = e.size.width / 2 / o,
                            r = (e.position.y + o - n.y) * i,
                            s = e.getConnectionPointSide(n);
                        s === p.ConnectionPointSide.East ? n.x -= r : s === p.ConnectionPointSide.West && (n.x += r)
                    } else t.prototype.processConnectionPoint.call(this, e, n)
                }, e
            }(c.ArrowVerticalShapeDescription);
        e.ArrowTopShapeDescription = h
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(9),
            s = n(0),
            a = n(29),
            c = n(21),
            u = n(2),
            p = n(1);
        e.CrossHorizontalWidthParameterName = "chw", e.CrossVerticalWidthParameterName = "cvw";
        var h = function(t) {
            function n() { return t.call(this, "Cross", "") || this }
            return i(n, t), Object.defineProperty(n.prototype, "key", { get: function() { return p.ShapeTypes.Cross }, enumerable: !0, configurable: !0 }), n.prototype.createShapePrimitives = function(t) {
                var n = t.rectangle,
                    o = n.left,
                    i = n.top,
                    r = n.right,
                    s = n.bottom,
                    a = n.width,
                    c = n.height,
                    p = (a - t.parameters.get(e.CrossHorizontalWidthParameterName).value) / 2,
                    h = (c - t.parameters.get(e.CrossVerticalWidthParameterName).value) / 2,
                    l = t.normalizeX(o + p),
                    d = t.normalizeY(i + h),
                    f = t.normalizeX(r - p),
                    y = t.normalizeY(s - h);
                return [new u.PathPrimitive([new u.PathPrimitiveMoveToCommand(o, d), new u.PathPrimitiveLineToCommand(l, d), new u.PathPrimitiveLineToCommand(l, i), new u.PathPrimitiveLineToCommand(f, i), new u.PathPrimitiveLineToCommand(f, d), new u.PathPrimitiveLineToCommand(r, d), new u.PathPrimitiveLineToCommand(r, y), new u.PathPrimitiveLineToCommand(f, y), new u.PathPrimitiveLineToCommand(f, s), new u.PathPrimitiveLineToCommand(l, s), new u.PathPrimitiveLineToCommand(l, y), new u.PathPrimitiveLineToCommand(o, y), new u.PathPrimitiveClosePathCommand], t.style)]
            }, n.prototype.createParameters = function(t) { t.addRange([new a.ShapeParameter(e.CrossHorizontalWidthParameterName, .2 * this.defaultSize.width), new a.ShapeParameter(e.CrossVerticalWidthParameterName, .2 * this.defaultSize.height)]) }, n.prototype.normalizeParameters = function(t, n) { this.changeParameterValue(n, e.CrossHorizontalWidthParameterName, function(e) { return Math.max(0, Math.min(t.size.width, e.value)) }), this.changeParameterValue(n, e.CrossVerticalWidthParameterName, function(e) { return Math.max(0, Math.min(t.size.height, e.value)) }) }, n.prototype.modifyParameters = function(t, n, o, i) { this.changeParameterValue(n, e.CrossHorizontalWidthParameterName, function(t) { return t.value - 2 * o }), this.changeParameterValue(n, e.CrossVerticalWidthParameterName, function(t) { return t.value - 2 * i }), this.normalizeParameters(t, n) }, n.prototype.getParameterPoints = function(t) { return [new c.ShapeParameterPoint("c", new s.Point(t.normalizeX(t.position.x + (t.size.width - t.parameters.get(e.CrossHorizontalWidthParameterName).value) / 2), t.normalizeY(t.position.y + (t.size.height - t.parameters.get(e.CrossVerticalWidthParameterName).value) / 2)))] }, n
        }(r.ShapeDescription);
        e.CrossShapeDescription = h
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(9),
            s = n(2),
            a = n(1),
            c = n(34),
            u = n(4),
            p = function(t) {
                function e() { return t.call(this, "Heart", "") || this }
                return i(e, t), Object.defineProperty(e.prototype, "key", { get: function() { return a.ShapeTypes.Heart }, enumerable: !0, configurable: !0 }), e.prototype.createConnectionPoints = function() { return [new c.ConnectionPoint(.5, .15, u.ConnectionPointSide.North), new c.ConnectionPoint(1, .25, u.ConnectionPointSide.East), new c.ConnectionPoint(.5, 1, u.ConnectionPointSide.South), new c.ConnectionPoint(0, .25, u.ConnectionPointSide.West)] }, e.prototype.createShapePrimitives = function(t) {
                    var e = t.rectangle,
                        n = e.left,
                        o = e.top,
                        i = e.right,
                        r = e.bottom,
                        a = e.width,
                        c = e.height;
                    return [new s.PathPrimitive([new s.PathPrimitiveMoveToCommand(i - .25 * a, o), new s.PathPrimitiveCubicCurveToCommand(i - .15 * a, o, i, o + .1 * c, i, o + .25 * c), new s.PathPrimitiveCubicCurveToCommand(i, o + .3 * c, i - .02 * a, o + .35 * c, i - .05 * a, o + .4 * c), new s.PathPrimitiveLineToCommand(e.center.x, r), new s.PathPrimitiveLineToCommand(n + .05 * a, o + .4 * c), new s.PathPrimitiveCubicCurveToCommand(n + .02 * a, o + .35 * c, n, o + .3 * c, n, o + .25 * c), new s.PathPrimitiveCubicCurveToCommand(n, o + .1 * c, n + .15 * a, o, n + .25 * a, o), new s.PathPrimitiveCubicCurveToCommand(n + .3 * a, o, n + .45 * a, o + .03 * c, n + .5 * a, o + .15 * c), new s.PathPrimitiveCubicCurveToCommand(i - .45 * a, o + .03 * c, i - .3 * a, o, i - .25 * a, o), new s.PathPrimitiveClosePathCommand], t.style)]
                }, e
            }(r.ShapeDescription);
        e.HeartShapeDescription = p
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(2),
            s = n(1),
            a = function(t) {
                function e() { return t.call(this, "Octagon", "") || this }
                return i(e, t), Object.defineProperty(e.prototype, "key", { get: function() { return s.ShapeTypes.Octagon }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "angleCount", { get: function() { return 8 }, enumerable: !0, configurable: !0 }), e.prototype.createShapePrimitives = function(t) {
                    var e = t.rectangle,
                        n = e.left,
                        o = e.top,
                        i = e.right,
                        s = e.bottom,
                        a = e.width,
                        c = e.height,
                        u = Math.PI - this.angle,
                        p = a / (1 + 2 * Math.cos(u)),
                        h = c / (1 + 2 * Math.cos(u)),
                        l = n + (a - p) / 2,
                        d = l + p,
                        f = o + (c - h) / 2,
                        y = f + h;
                    return [new r.PathPrimitive([new r.PathPrimitiveMoveToCommand(l, o), new r.PathPrimitiveLineToCommand(d, o), new r.PathPrimitiveLineToCommand(i, f), new r.PathPrimitiveLineToCommand(i, y), new r.PathPrimitiveLineToCommand(d, s), new r.PathPrimitiveLineToCommand(l, s), new r.PathPrimitiveLineToCommand(n, y), new r.PathPrimitiveLineToCommand(n, f), new r.PathPrimitiveClosePathCommand], t.style)]
                }, e.prototype.calculateHeight = function(t) { return t }, e
            }(n(68).PolygonShapeDescription);
        e.OctagonShapeDescription = a
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(2),
            s = n(1),
            a = n(94),
            c = n(29),
            u = n(21),
            p = n(0),
            h = n(4);
        e.StarConvexParameterName = "sc";
        var l = function(t) {
            function n() { return t.call(this, "Star", "") || this }
            return i(n, t), Object.defineProperty(n.prototype, "key", { get: function() { return s.ShapeTypes.Star }, enumerable: !0, configurable: !0 }), n.prototype.createShapePrimitives = function(t) {
                var n = t.rectangle,
                    o = n.left,
                    i = n.top,
                    s = n.right,
                    a = n.bottom,
                    c = n.width,
                    u = n.height;
                a = this.getActualBottom(i, a, c, u);
                var p = n.center.x,
                    h = i + (a - i) / 2,
                    l = u / c,
                    d = Math.PI - this.angle,
                    f = c / 2 * Math.tan(d / 2) * l,
                    y = i + f,
                    m = (u - f) / Math.tan(d) / l,
                    g = o + m,
                    v = s - m,
                    P = t.parameters.get(e.StarConvexParameterName).value,
                    C = this.getInnerPointDistance(p, p, s, h, i, y);
                return [new r.PathPrimitive([new r.PathPrimitiveMoveToCommand(p, i), new r.PathPrimitiveLineToCommand(this.getInnerPointPos(p, p, s, P, C), this.getInnerPointPos(h, i, y, P, C)), new r.PathPrimitiveLineToCommand(s, y), new r.PathPrimitiveLineToCommand(this.getInnerPointPos(p, s, v, P, C), this.getInnerPointPos(h, y, a, P, C)), new r.PathPrimitiveLineToCommand(v, a), new r.PathPrimitiveLineToCommand(this.getInnerPointPos(p, v, g, P, C), this.getInnerPointPos(h, a, a, P, C)), new r.PathPrimitiveLineToCommand(g, a), new r.PathPrimitiveLineToCommand(this.getInnerPointPos(p, g, o, P, C), this.getInnerPointPos(h, a, y, P, C)), new r.PathPrimitiveLineToCommand(o, y), new r.PathPrimitiveLineToCommand(this.getInnerPointPos(p, o, p, P, C), this.getInnerPointPos(h, y, i, P, C)), new r.PathPrimitiveClosePathCommand], t.style)]
            }, n.prototype.createParameters = function(t) { t.addRange([new c.ShapeParameter(e.StarConvexParameterName, 300)]) }, n.prototype.normalizeParameters = function(t, n) {
                var o = t.rectangle,
                    i = o.top,
                    r = o.right,
                    s = o.bottom,
                    a = o.width,
                    c = o.height;
                s = this.getActualBottom(i, s, a, c);
                var u = o.center.x,
                    p = i + (s - i) / 2,
                    h = c / a,
                    l = Math.PI - this.angle,
                    d = i + a / 2 * Math.tan(l / 2) * h,
                    f = this.getInnerPointDistance(u, u, r, p, i, d);
                this.changeParameterValue(n, e.StarConvexParameterName, function(t) { return Math.max(0, Math.min(f, t.value)) })
            }, n.prototype.modifyParameters = function(t, n, o, i) {
                var r = Math.sqrt(Math.pow(o, 2) + Math.pow(i, 2));
                (o < 0 || i > 0) && (r = -r), this.changeParameterValue(n, e.StarConvexParameterName, function(t) { return t.value + r }), this.normalizeParameters(t, n)
            }, n.prototype.getParameterPoints = function(t) {
                var n = t.rectangle,
                    o = n.top,
                    i = n.right,
                    r = n.bottom,
                    s = n.width,
                    a = n.height;
                r = this.getActualBottom(o, r, s, a);
                var c = n.center.x,
                    h = o + (r - o) / 2,
                    l = a / s,
                    d = Math.PI - this.angle,
                    f = o + s / 2 * Math.tan(d / 2) * l,
                    y = t.parameters.get(e.StarConvexParameterName).value,
                    m = this.getInnerPointDistance(c, c, i, h, o, f),
                    g = this.getInnerPointPos(c, c, i, y, m),
                    v = this.getInnerPointPos(h, o, f, y, m);
                return [new u.ShapeParameterPoint("c", new p.Point(g, v))]
            }, n.prototype.processConnectionPoint = function(n, o) {
                if (t.prototype.processConnectionPoint.call(this, n, o), n.getConnectionPointSide(o) === h.ConnectionPointSide.South) {
                    var i = n.rectangle,
                        r = i.top,
                        s = i.right,
                        a = i.bottom,
                        c = i.width,
                        u = i.height;
                    a = this.getActualBottom(r, a, c, u);
                    var p = i.center.x,
                        l = r + (a - r) / 2,
                        d = u / c,
                        f = Math.PI - this.angle,
                        y = r + c / 2 * Math.tan(f / 2) * d,
                        m = n.parameters.get(e.StarConvexParameterName).value,
                        g = this.getInnerPointDistance(p, p, s, l, r, y);
                    o.y = this.getInnerPointPos(l, a, a, m, g)
                }
            }, n.prototype.getInnerPointDistanceByAxis = function(t, e, n) { return Math.min(e, n) + Math.abs(e - n) / 2 - t }, n.prototype.getInnerPointPos = function(t, e, n, o, i) { var r = Math.min(1, o / i); return t + this.getInnerPointDistanceByAxis(t, e, n) * r }, n.prototype.getInnerPointDistance = function(t, e, n, o, i, r) {
                var s = this.getInnerPointDistanceByAxis(t, e, n),
                    a = this.getInnerPointDistanceByAxis(o, i, r);
                return Math.sqrt(Math.pow(s, 2) + Math.pow(a, 2))
            }, n.prototype.getActualBottom = function(e, n, o, i) { var r = e + t.prototype.calculateHeight.call(this, o) * i / o; return r < n ? r : n }, n.prototype.calculateHeight = function(t) { return t }, n
        }(a.PentagonShapeDescription);
        e.StarShapeDescription = l
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(2),
            s = n(21),
            a = n(0),
            c = n(65),
            u = n(1),
            p = n(4),
            h = function(t) {
                function e() { return t.call(this, "Bottom Arrow") || this }
                return i(e, t), Object.defineProperty(e.prototype, "key", { get: function() { return u.ShapeTypes.ArrowBottom }, enumerable: !0, configurable: !0 }), e.prototype.createShapePrimitives = function(t) {
                    var e = t.rectangle,
                        n = e.left,
                        o = e.top,
                        i = e.right,
                        s = e.bottom,
                        a = e.width,
                        u = e.height,
                        p = e.center.x,
                        h = (a - t.parameters.get(c.ArrowVerticalLineWidthParameterName).value) / 2,
                        l = u - t.parameters.get(c.ArrowVerticalTriangleHeightParameterName).value,
                        d = t.normalizeX(n + h),
                        f = t.normalizeY(o + l),
                        y = t.normalizeX(i - h);
                    return [new r.PathPrimitive([new r.PathPrimitiveMoveToCommand(d, o), new r.PathPrimitiveLineToCommand(y, o), new r.PathPrimitiveLineToCommand(y, f), new r.PathPrimitiveLineToCommand(i, f), new r.PathPrimitiveLineToCommand(p, s), new r.PathPrimitiveLineToCommand(n, f), new r.PathPrimitiveLineToCommand(d, f), new r.PathPrimitiveClosePathCommand], t.style)]
                }, e.prototype.modifyParameters = function(t, e, n, o) { this.changeParameterValue(e, c.ArrowVerticalTriangleHeightParameterName, function(t) { return t.value - o }), this.changeParameterValue(e, c.ArrowVerticalLineWidthParameterName, function(t) { return t.value - 2 * n }), this.normalizeParameters(t, e) }, e.prototype.getParameterPoints = function(t) { return [new s.ShapeParameterPoint("c", new a.Point(t.normalizeX(t.position.x + (t.size.width - t.parameters.get(c.ArrowVerticalLineWidthParameterName).value) / 2), t.normalizeY(t.position.y + t.size.height - t.parameters.get(c.ArrowVerticalTriangleHeightParameterName).value)))] }, e.prototype.processConnectionPoint = function(e, n) {
                    var o = e.parameters.get(c.ArrowVerticalTriangleHeightParameterName).value;
                    if (n.y > e.position.y + e.size.height - o) {
                        var i = e.size.width / 2 / o,
                            r = (n.y - (e.position.y + e.size.height - o)) * i,
                            s = e.getConnectionPointSide(n);
                        s === p.ConnectionPointSide.East ? n.x -= r : s === p.ConnectionPointSide.West && (n.x += r)
                    } else t.prototype.processConnectionPoint.call(this, e, n)
                }, e
            }(c.ArrowVerticalShapeDescription);
        e.ArrowBottomShapeDescription = h
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(11),
            s = n(2),
            a = n(66),
            c = n(21),
            u = n(0),
            p = n(1),
            h = function(t) {
                function e() { return t.call(this, "East-West Arrow") || this }
                return i(e, t), Object.defineProperty(e.prototype, "key", { get: function() { return p.ShapeTypes.ArrowEastWest }, enumerable: !0, configurable: !0 }), e.prototype.createShapePrimitives = function(t) {
                    var e = t.rectangle,
                        n = e.left,
                        o = e.top,
                        i = e.right,
                        r = e.bottom,
                        c = (e.width, e.height),
                        u = e.center.y,
                        p = t.parameters.get(a.ArrowVerticalTriangleWidthParameterName).value,
                        h = (c - t.parameters.get(a.ArrowVerticalLineHeightParameterName).value) / 2,
                        l = t.normalizeX(n + p),
                        d = t.normalizeY(o + h),
                        f = t.normalizeX(i - p),
                        y = t.normalizeY(r - h);
                    return [new s.PathPrimitive([new s.PathPrimitiveMoveToCommand(n, u), new s.PathPrimitiveLineToCommand(l, o), new s.PathPrimitiveLineToCommand(l, d), new s.PathPrimitiveLineToCommand(f, d), new s.PathPrimitiveLineToCommand(f, o), new s.PathPrimitiveLineToCommand(i, u), new s.PathPrimitiveLineToCommand(f, r), new s.PathPrimitiveLineToCommand(f, y), new s.PathPrimitiveLineToCommand(l, y), new s.PathPrimitiveLineToCommand(l, r), new s.PathPrimitiveClosePathCommand], t.style)]
                }, e.prototype.normalizeParameters = function(t, e) { this.changeParameterValue(e, a.ArrowVerticalTriangleWidthParameterName, function(e) { return Math.max(0, Math.min(t.size.width / 2 - 2 * r.Shape.lineWidth, e.value)) }), this.changeParameterValue(e, a.ArrowVerticalLineHeightParameterName, function(e) { return Math.max(0, Math.min(t.size.height, e.value)) }) }, e.prototype.modifyParameters = function(t, e, n, o) { this.changeParameterValue(e, a.ArrowVerticalTriangleWidthParameterName, function(t) { return t.value + n }), this.changeParameterValue(e, a.ArrowVerticalLineHeightParameterName, function(t) { return t.value - 2 * o }), this.normalizeParameters(t, e) }, e.prototype.getParameterPoints = function(t) { return [new c.ShapeParameterPoint("c", new u.Point(t.normalizeX(t.position.x + t.parameters.get(a.ArrowVerticalTriangleWidthParameterName).value), t.normalizeY(t.position.y + (t.size.height - t.parameters.get(a.ArrowVerticalLineHeightParameterName).value) / 2)))] }, e
            }(a.ArrowHorizontalShapeDescription);
        e.ArrowEastWestShapeDescription = h
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(2),
            s = n(66),
            a = n(21),
            c = n(0),
            u = n(1),
            p = n(4),
            h = function(t) {
                function e() { return t.call(this, "Left Arrow") || this }
                return i(e, t), Object.defineProperty(e.prototype, "key", { get: function() { return u.ShapeTypes.ArrowLeft }, enumerable: !0, configurable: !0 }), e.prototype.createShapePrimitives = function(t) {
                    var e = t.rectangle,
                        n = e.left,
                        o = e.top,
                        i = e.right,
                        a = e.bottom,
                        c = (e.width, e.height),
                        u = e.center.y,
                        p = t.parameters.get(s.ArrowVerticalTriangleWidthParameterName).value,
                        h = (c - t.parameters.get(s.ArrowVerticalLineHeightParameterName).value) / 2,
                        l = t.normalizeX(n + p),
                        d = t.normalizeY(o + h),
                        f = t.normalizeY(a - h);
                    return [new r.PathPrimitive([new r.PathPrimitiveMoveToCommand(n, u), new r.PathPrimitiveLineToCommand(l, o), new r.PathPrimitiveLineToCommand(l, d), new r.PathPrimitiveLineToCommand(i, d), new r.PathPrimitiveLineToCommand(i, f), new r.PathPrimitiveLineToCommand(l, f), new r.PathPrimitiveLineToCommand(l, a), new r.PathPrimitiveClosePathCommand], t.style)]
                }, e.prototype.modifyParameters = function(t, e, n, o) { this.changeParameterValue(e, s.ArrowVerticalTriangleWidthParameterName, function(t) { return t.value + n }), this.changeParameterValue(e, s.ArrowVerticalLineHeightParameterName, function(t) { return t.value - 2 * o }), this.normalizeParameters(t, e) }, e.prototype.getParameterPoints = function(t) { return [new a.ShapeParameterPoint("c", new c.Point(t.normalizeX(t.position.x + t.parameters.get(s.ArrowVerticalTriangleWidthParameterName).value), t.normalizeY(t.position.y + (t.size.height - t.parameters.get(s.ArrowVerticalLineHeightParameterName).value) / 2)))] }, e.prototype.processConnectionPoint = function(e, n) {
                    var o = e.parameters.get(s.ArrowVerticalTriangleWidthParameterName).value;
                    if (n.x < e.position.x + o) {
                        var i = e.size.height / 2 / o,
                            r = (e.position.x + o - n.x) * i,
                            a = e.getConnectionPointSide(n);
                        a === p.ConnectionPointSide.North ? n.y += r : a === p.ConnectionPointSide.South && (n.y -= r)
                    } else t.prototype.processConnectionPoint.call(this, e, n)
                }, e
            }(s.ArrowHorizontalShapeDescription);
        e.ArrowLeftShapeDescription = h
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(1),
            s = n(11),
            a = n(2),
            c = n(97),
            u = n(41),
            p = n(15),
            h = function(t) {
                function e() { return t.call(this, "Multiple Documents", "Multiple\nDocuments") || this }
                return i(e, t), Object.defineProperty(e.prototype, "key", { get: function() { return r.ShapeTypes.MultipleDocuments }, enumerable: !0, configurable: !0 }), e.prototype.createShapePrimitives = function(t) {
                    var n = t.rectangle,
                        o = t.rectangle,
                        i = (o.left, o.top, o.right, o.bottom, o.width),
                        r = o.height,
                        s = i * e.documentsOffsetRatio,
                        a = r * e.documentsOffsetRatio,
                        c = (n = n.inflate(-s, -a).offset(-s, -a)).offset(s, a),
                        u = n.offset(2 * s, 2 * a),
                        h = p.RenderUtils.generateSvgElementId("clipRect");
                    return [].concat(this.createDocumentPrimitives(n, t.style, h + "1", c)).concat(this.createDocumentPrimitives(c, t.style, h + "2", u)).concat(this.createDocumentPrimitives(u, t.style))
                }, e.prototype.createDocumentPrimitives = function(t, e, n, o) {
                    var i = t.left,
                        r = t.top,
                        p = t.right,
                        h = t.bottom,
                        l = t.width,
                        d = t.height,
                        f = t.center.x,
                        y = d * c.DocumentShapeDescription.curveOffsetRatio,
                        m = [];
                    return m = m.concat([new a.PathPrimitive([new a.PathPrimitiveMoveToCommand(i, r), new a.PathPrimitiveLineToCommand(p, r), new a.PathPrimitiveLineToCommand(p, h), new a.PathPrimitiveQuadraticCurveToCommand(p - .25 * l, h - 2 * y, f, h - y), new a.PathPrimitiveQuadraticCurveToCommand(i + .25 * l, h + y, i, h - y), new a.PathPrimitiveClosePathCommand], e, void 0, o && n)]), o && n && (m = m.concat([new u.ClipPathPrimitive(n, [new a.PathPrimitive([new a.PathPrimitiveMoveToCommand(i - s.Shape.lineWidth, r - s.Shape.lineWidth), new a.PathPrimitiveLineToCommand(p + s.Shape.lineWidth, r - s.Shape.lineWidth), new a.PathPrimitiveLineToCommand(p + s.Shape.lineWidth, o.top), new a.PathPrimitiveLineToCommand(o.left, o.top), new a.PathPrimitiveLineToCommand(o.left, h + s.Shape.lineWidth), new a.PathPrimitiveLineToCommand(i - s.Shape.lineWidth, h + s.Shape.lineWidth), new a.PathPrimitiveClosePathCommand])])])), m
                }, e.prototype.getTextRectangle = function(t, n) {
                    var o = t.width * e.documentsOffsetRatio,
                        i = t.height * e.documentsOffsetRatio;
                    return (t = t.inflate(-o, -i).offset(-o, -i)).offset(2 * o, 2 * i).resize(0, -t.height * c.DocumentShapeDescription.curveOffsetRatio)
                }, e.documentsOffsetRatio = .1, e
            }(c.DocumentShapeDescription);
        e.MultipleDocumentsShapeDescription = h
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(1),
            s = n(0),
            a = n(9),
            c = function(t) {
                function e() { var e = t.call(this, "Preparation", "Preparation") || this; return e.defaultSize = new s.Size(a.ShapeDefaultDimension, .75 * a.ShapeDefaultDimension), e }
                return i(e, t), Object.defineProperty(e.prototype, "key", { get: function() { return r.ShapeTypes.Preparation }, enumerable: !0, configurable: !0 }), e
            }(n(95).HexagonShapeDescription);
        e.PreparationShapeDescription = c
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(14),
            s = n(1),
            a = n(2),
            c = n(42),
            u = function(t) {
                function e() { return t.call(this, "Hard Disk", "Hard Disk") || this }
                return i(e, t), Object.defineProperty(e.prototype, "key", { get: function() { return s.ShapeTypes.HardDisk }, enumerable: !0, configurable: !0 }), e.prototype.createShapePrimitives = function(t) {
                    var n = t.rectangle,
                        o = n.left,
                        i = n.top,
                        r = n.right,
                        s = n.bottom,
                        u = n.width,
                        p = (n.height, n.center.y),
                        h = u * e.arcWidthRatio;
                    return [new a.PathPrimitive([new a.PathPrimitiveMoveToCommand(r - h / 2, i), new a.PathPrimitiveLineToCommand(o + h / 2, i), new a.PathPrimitiveArcToCommand(h / 2, (s - i) / 2, 0, !1, !1, o + h / 2, s), new a.PathPrimitiveLineToCommand(r - h / 2, s)], t.style), new c.EllipsePrimitive(r - h / 2, p, h / 2, (s - i) / 2, t.style)]
                }, e.prototype.getTextRectangle = function(t, n) { var o = t.width * e.arcWidthRatio; return t.resize(-o, 0) }, e.arcWidthRatio = .2, e
            }(r.RectangleShapeDescription);
        e.HardDiskShapeDescription = u
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(14),
            s = n(1),
            a = n(2),
            c = n(42),
            u = function(t) {
                function e() { var e = t.call(this, "Database", "Database") || this; return e.defaultSize.width = e.defaultSize.height, e }
                return i(e, t), Object.defineProperty(e.prototype, "key", { get: function() { return s.ShapeTypes.Database }, enumerable: !0, configurable: !0 }), e.prototype.createShapePrimitives = function(t) {
                    var n = t.rectangle,
                        o = n.left,
                        i = n.top,
                        r = n.right,
                        s = n.bottom,
                        u = (n.width, n.height),
                        p = n.center.x,
                        h = u * e.arcWidthRatio;
                    return [new a.PathPrimitive([new a.PathPrimitiveMoveToCommand(r, i + h / 2), new a.PathPrimitiveLineToCommand(r, s - h / 2), new a.PathPrimitiveArcToCommand((r - o) / 2, h / 2, 0, !1, !0, o, s - h / 2), new a.PathPrimitiveLineToCommand(o, i + h / 2)], t.style), new c.EllipsePrimitive(p, i + h / 2, (r - o) / 2, h / 2, t.style)]
                }, e.prototype.getTextRectangle = function(t, n) { var o = t.height * e.arcWidthRatio; return t.resize(0, -o).offset(0, o) }, e.arcWidthRatio = .2, e
            }(r.RectangleShapeDescription);
        e.DatabaseShapeDescription = u
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(14),
            s = n(1),
            a = n(29),
            c = n(21),
            u = n(0),
            p = n(2);
        e.InternalStorageHorizontalEdgeParameterName = "he", e.InternalStorageVerticalEdgeParameterName = "ve";
        var h = function(t) {
            function n() { return t.call(this, "Internal Storage", "Internal\nStorage") || this }
            return i(n, t), Object.defineProperty(n.prototype, "key", { get: function() { return s.ShapeTypes.InternalStorage }, enumerable: !0, configurable: !0 }), n.prototype.createShapePrimitives = function(n) {
                var o = n.rectangle,
                    i = o.left,
                    r = o.top,
                    s = o.right,
                    a = o.bottom,
                    c = (o.width, o.height, i + n.parameters.get(e.InternalStorageHorizontalEdgeParameterName).value),
                    u = r + n.parameters.get(e.InternalStorageVerticalEdgeParameterName).value;
                return t.prototype.createShapePrimitives.call(this, n).concat([new p.PathPrimitive([new p.PathPrimitiveMoveToCommand(c, r), new p.PathPrimitiveLineToCommand(c, a), new p.PathPrimitiveMoveToCommand(i, u), new p.PathPrimitiveLineToCommand(s, u)], n.style)])
            }, n.prototype.createParameters = function(t) { t.addRange([new a.ShapeParameter(e.InternalStorageHorizontalEdgeParameterName, .1 * this.defaultSize.width), new a.ShapeParameter(e.InternalStorageVerticalEdgeParameterName, .1 * this.defaultSize.width)]) }, n.prototype.normalizeParameters = function(t, o) { this.changeParameterValue(o, e.InternalStorageHorizontalEdgeParameterName, function(e) { return Math.max(n.minEdge, Math.min(.3 * t.size.width, e.value)) }), this.changeParameterValue(o, e.InternalStorageVerticalEdgeParameterName, function(e) { return Math.max(n.minEdge, Math.min(.3 * t.size.height, e.value)) }) }, n.prototype.modifyParameters = function(t, n, o, i) { this.changeParameterValue(n, e.InternalStorageHorizontalEdgeParameterName, function(t) { return t.value + o }), this.changeParameterValue(n, e.InternalStorageVerticalEdgeParameterName, function(t) { return t.value + i }), this.normalizeParameters(t, n) }, n.prototype.getParameterPoints = function(t) { return [new c.ShapeParameterPoint("c", new u.Point(t.normalizeX(t.position.x + t.parameters.get(e.InternalStorageHorizontalEdgeParameterName).value), t.normalizeY(t.position.y + t.parameters.get(e.InternalStorageVerticalEdgeParameterName).value)))] }, n.minEdge = 72, n
        }(r.RectangleShapeDescription);
        e.InternalStorageShapeDescription = h
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(14),
            s = n(1),
            a = n(2),
            c = n(4),
            u = function(t) {
                function e(e, n) { return void 0 === e && (e = "Paper Tape"), void 0 === n && (n = "Paper Tape"), t.call(this, e, n) || this }
                return i(e, t), Object.defineProperty(e.prototype, "key", { get: function() { return s.ShapeTypes.PaperTape }, enumerable: !0, configurable: !0 }), e.prototype.createShapePrimitives = function(t) { return this.createDocumentPrimitives(t.rectangle, t.style) }, e.prototype.createDocumentPrimitives = function(t, n) {
                    var o = t.left,
                        i = t.top,
                        r = t.right,
                        s = t.bottom,
                        c = t.width,
                        u = t.height,
                        p = t.center.x,
                        h = u * e.curveOffsetRatio;
                    return [].concat([new a.PathPrimitive([new a.PathPrimitiveMoveToCommand(o, i), new a.PathPrimitiveQuadraticCurveToCommand(o + .25 * c, i + 2 * h, p, i + h), new a.PathPrimitiveQuadraticCurveToCommand(r - .25 * c, i - h, r, i + h), new a.PathPrimitiveLineToCommand(r, s), new a.PathPrimitiveQuadraticCurveToCommand(r - .25 * c, s - 2 * h, p, s - h), new a.PathPrimitiveQuadraticCurveToCommand(o + .25 * c, s + h, o, s - h), new a.PathPrimitiveClosePathCommand], n)])
                }, e.prototype.processConnectionPoint = function(t, n) {
                    var o = t.getConnectionPointSide(n);
                    o === c.ConnectionPointSide.North && (n.y += t.size.height * e.curveOffsetRatio), o === c.ConnectionPointSide.South && (n.y -= t.size.height * e.curveOffsetRatio)
                }, e.prototype.getTextRectangle = function(t, n) { return t.inflate(0, -t.height * e.curveOffsetRatio) }, e.curveOffsetRatio = .1, e
            }(r.RectangleShapeDescription);
        e.PaperTapeShapeDescription = u
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(14),
            s = n(1),
            a = n(2),
            c = n(4),
            u = function(t) {
                function e() { return t.call(this, "Manual Operation", "Manual\nOperation") || this }
                return i(e, t), Object.defineProperty(e.prototype, "key", { get: function() { return s.ShapeTypes.ManualOperation }, enumerable: !0, configurable: !0 }), e.prototype.createShapePrimitives = function(t) {
                    var n = t.rectangle,
                        o = t.rectangle,
                        i = o.left,
                        r = o.top,
                        s = o.right,
                        c = o.bottom,
                        u = o.width,
                        p = o.height,
                        h = Math.min(Math.max(0, p / Math.tan(e.slopeAngle)), u),
                        l = n.center.x,
                        d = Math.min(i + h, l),
                        f = Math.max(s - h, l);
                    return [new a.PathPrimitive([new a.PathPrimitiveMoveToCommand(i, r), new a.PathPrimitiveLineToCommand(s, r), new a.PathPrimitiveLineToCommand(f, c), new a.PathPrimitiveLineToCommand(d, c), new a.PathPrimitiveClosePathCommand], t.style)]
                }, e.prototype.processConnectionPoint = function(t, n) {
                    var o = t.size.height / Math.tan(e.slopeAngle),
                        i = t.getConnectionPointSide(n);
                    i === c.ConnectionPointSide.East ? n.x -= o / 2 : i === c.ConnectionPointSide.West && (n.x += o / 2)
                }, e.slopeAngle = 81 * Math.PI / 180, e
            }(r.RectangleShapeDescription);
        e.ManualOperationShapeDescription = u
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(14),
            s = n(1),
            a = n(2),
            c = function(t) {
                function e() { var e = t.call(this, "Delay", "Delay") || this; return e.defaultSize.width = e.defaultSize.height, e }
                return i(e, t), Object.defineProperty(e.prototype, "key", { get: function() { return s.ShapeTypes.Delay }, enumerable: !0, configurable: !0 }), e.prototype.createShapePrimitives = function(t) {
                    var e = t.rectangle,
                        n = e.left,
                        o = e.top,
                        i = e.right,
                        r = e.bottom,
                        s = e.center.x;
                    return [new a.PathPrimitive([new a.PathPrimitiveMoveToCommand(n, o), new a.PathPrimitiveLineToCommand(s, o), new a.PathPrimitiveArcToCommand((i - n) / 2, (r - o) / 2, 0, !1, !0, s, r), new a.PathPrimitiveLineToCommand(n, r), new a.PathPrimitiveClosePathCommand], t.style)]
                }, e.arcWidthRatio = .2, e
            }(r.RectangleShapeDescription);
        e.DelayShapeDescription = c
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(14),
            s = n(1),
            a = n(2),
            c = function(t) {
                function e() { return t.call(this, "Stored Data", "Stored Data") || this }
                return i(e, t), Object.defineProperty(e.prototype, "key", { get: function() { return s.ShapeTypes.StoredData }, enumerable: !0, configurable: !0 }), e.prototype.createShapePrimitives = function(t) {
                    var n = t.rectangle,
                        o = n.left,
                        i = n.top,
                        r = n.right,
                        s = n.bottom,
                        c = n.width,
                        u = (n.height, n.center.y, c * e.arcWidthRatio);
                    return [new a.PathPrimitive([new a.PathPrimitiveMoveToCommand(r, i), new a.PathPrimitiveLineToCommand(o + u / 2, i), new a.PathPrimitiveArcToCommand(u / 2, (s - i) / 2, 0, !1, !1, o + u / 2, s), new a.PathPrimitiveLineToCommand(r, s), new a.PathPrimitiveArcToCommand(u / 2, (s - i) / 2, 0, !1, !0, r, i)], t.style)]
                }, e.prototype.getTextRectangle = function(t, n) { var o = t.width * e.arcWidthRatio; return t.resize(-o, 0) }, e.arcWidthRatio = .2, e
            }(r.RectangleShapeDescription);
        e.StoredDataShapeDescription = c
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(1),
            s = n(96),
            a = n(2),
            c = function(t) {
                function e() { return t.call(this, "Merge", "Merge") || this }
                return i(e, t), Object.defineProperty(e.prototype, "key", { get: function() { return r.ShapeTypes.Merge }, enumerable: !0, configurable: !0 }), e.prototype.createShapePrimitives = function(t) {
                    var e = t.rectangle,
                        n = e.left,
                        o = e.top,
                        i = e.right,
                        r = e.bottom;
                    e.width;
                    return [new a.PathPrimitive([new a.PathPrimitiveMoveToCommand(n, o), new a.PathPrimitiveLineToCommand(i, o), new a.PathPrimitiveLineToCommand(e.center.x, r), new a.PathPrimitiveClosePathCommand], t.style)]
                }, e.prototype.calculateHeight = function(t) { return .75 * t }, e.prototype.getTextRectangle = function(t, e) { return t.resize(0, .25 * -t.width) }, e
            }(s.TriangleShapeDescription);
        e.MergeShapeDescription = c
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(14),
            s = n(1),
            a = n(2),
            c = function(t) {
                function e() { return t.call(this, "Display", "Display") || this }
                return i(e, t), Object.defineProperty(e.prototype, "key", { get: function() { return s.ShapeTypes.Display }, enumerable: !0, configurable: !0 }), e.prototype.createShapePrimitives = function(t) {
                    var n = t.rectangle,
                        o = n.left,
                        i = n.top,
                        r = n.right,
                        s = n.bottom,
                        c = n.width,
                        u = (n.height, n.center.y),
                        p = c * e.arcWidthRatio;
                    return [new a.PathPrimitive([new a.PathPrimitiveMoveToCommand(r - p / 2, i), new a.PathPrimitiveLineToCommand(o + p / 2, i), new a.PathPrimitiveLineToCommand(o, u), new a.PathPrimitiveLineToCommand(o + p / 2, s), new a.PathPrimitiveLineToCommand(r - p / 2, s), new a.PathPrimitiveArcToCommand(p / 2, (s - i) / 2, 0, !1, !1, r - p / 2, i)], t.style)]
                }, e.arcWidthRatio = .2, e
            }(r.RectangleShapeDescription);
        e.DisplayShapeDescription = c
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(1),
            s = n(0),
            a = n(9),
            c = n(67),
            u = n(2),
            p = function(t) {
                function e() { var e = t.call(this, "Or", "") || this; return e.defaultSize = new s.Size(.5 * a.ShapeDefaultDimension, .5 * a.ShapeDefaultDimension), e }
                return i(e, t), Object.defineProperty(e.prototype, "key", { get: function() { return r.ShapeTypes.Or }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "enableText", { get: function() { return !1 }, enumerable: !0, configurable: !0 }), e.prototype.createShapePrimitives = function(e) {
                    var n = e.rectangle,
                        o = n.left,
                        i = n.top,
                        r = n.right,
                        s = n.bottom,
                        a = n.center,
                        c = a.x,
                        p = a.y;
                    return [].concat(t.prototype.createShapePrimitives.call(this, e)).concat([new u.PathPrimitive([new u.PathPrimitiveMoveToCommand(c, i), new u.PathPrimitiveLineToCommand(c, s), new u.PathPrimitiveMoveToCommand(o, p), new u.PathPrimitiveLineToCommand(r, p)], e.style)])
                }, e
            }(c.EllipseShapeDescription);
        e.OrShapeDescription = p
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(1),
            s = n(0),
            a = n(9),
            c = n(67),
            u = n(2),
            p = function(t) {
                function e() { var e = t.call(this, "Summing Junction", "") || this; return e.defaultSize = new s.Size(.5 * a.ShapeDefaultDimension, .5 * a.ShapeDefaultDimension), e }
                return i(e, t), Object.defineProperty(e.prototype, "key", { get: function() { return r.ShapeTypes.SummingJunction }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "enableText", { get: function() { return !1 }, enumerable: !0, configurable: !0 }), e.prototype.createShapePrimitives = function(e) {
                    var n = e.rectangle,
                        o = (n.left, n.top, n.right, n.bottom, n.width),
                        i = n.height,
                        r = n.center,
                        s = r.x,
                        a = r.y,
                        c = o / 2,
                        p = i / 2,
                        h = Math.atan(p / c),
                        l = 1 / Math.sqrt(1 / Math.pow(c, 2) + Math.pow(Math.tan(h), 2) / Math.pow(p, 2)),
                        d = l * Math.tan(h);
                    return [].concat(t.prototype.createShapePrimitives.call(this, e)).concat([new u.PathPrimitive([new u.PathPrimitiveMoveToCommand(s - l, a - d), new u.PathPrimitiveLineToCommand(s + l, a + d), new u.PathPrimitiveMoveToCommand(s - l, a + d), new u.PathPrimitiveLineToCommand(s + l, a - d)], e.style)])
                }, e
            }(c.EllipseShapeDescription);
        e.SummingJunctionShapeDescription = p
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(98),
            s = n(0),
            a = n(34),
            c = n(4),
            u = n(45),
            p = n(40),
            h = n(49),
            l = n(100),
            d = function(t) {
                function e(e, n) {
                    var o = t.call(this, e.title || n && n.title, e.defaultText || n && n.defaultText, new s.Size(e.defaultWidth || n && n.defaultSize.width || 1440, e.defaultHeight || n && n.defaultSize.height || 1440), e.defaultImageUrl || n && n.defaultImageUrl) || this;
                    o.properties = e, o.baseDescription = n, o.imageLoader = new l.ImageLoader(o.updateSvgImage.bind(o)), o.connectionPoints = o.createConnectionPoints(), o.svgImage = new p.ImageInfo(e.svgUrl);
                    var i = h.ImageCache.instance.createUnloadedInfoByShapeImageInfo(o.svgImage);
                    return o.imageLoader.load(i), o
                }
                return i(e, t), Object.defineProperty(e.prototype, "key", { get: function() { return this.properties.type }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "allowEditText", { get: function() { return !1 !== this.properties.allowEditText }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "allowEditImage", { get: function() { return !0 === this.properties.allowEditImage }, enumerable: !0, configurable: !0 }), e.prototype.createConnectionPoints = function() { return this.properties && this.properties.connectionPoints && this.properties.connectionPoints.length ? this.properties.connectionPoints.map(function(t) { if (t && "number" == typeof t.x && "number" == typeof t.y) { var e = "number" == typeof t.side ? t.side : c.ConnectionPointSide.Undefined; return new a.ConnectionPoint(t.x, t.y, e) } }).filter(function(t) { return t }) : t.prototype.createConnectionPoints.call(this) }, e.prototype.createImagePrimitives = function(e, n) { return this.baseDescription ? this.baseDescription.createImagePrimitives(e, n) : t.prototype.createImagePrimitives.call(this, e, n) }, e.prototype.createShapePrimitives = function(t, e) {
                    if (this.baseDescription) return this.baseDescription.createShapePrimitives(t, e);
                    var n = t.rectangle,
                        o = n.left,
                        i = n.top,
                        s = n.width,
                        a = n.height;
                    return [new r.ImagePrimitive(o + (this.properties.svgLeft && !e ? this.properties.svgLeft * s : 0), i + (this.properties.svgTop && !e ? this.properties.svgTop * a : 0), this.properties.svgWidth && !e ? this.properties.svgWidth * s : s, this.properties.svgHeight && !e ? this.properties.svgHeight * a : a, this.svgImage.exportUrl)]
                }, e.prototype.createParameters = function(e) { return this.baseDescription ? this.baseDescription.createParameters(e) : t.prototype.createParameters.call(this, e) }, e.prototype.normalizeParameters = function(e, n) { this.baseDescription ? this.baseDescription.normalizeParameters(e, n) : t.prototype.normalizeParameters.call(this, e, n) }, e.prototype.modifyParameters = function(e, n, o, i) { this.baseDescription ? this.baseDescription.modifyParameters(e, n, o, i) : t.prototype.modifyParameters.call(this, e, n, o, i) }, e.prototype.getParameterPoints = function(e) { return this.baseDescription ? this.baseDescription.getParameterPoints(e) : t.prototype.getParameterPoints.call(this, e) }, e.prototype.getTextRectangle = function(t, e) {
                    var n = t.left,
                        o = t.top,
                        i = t.width,
                        r = t.height;
                    return s.Rectangle.create(n + (this.properties.textLeft ? this.properties.textLeft * i : 0), o + (this.properties.textTop ? this.properties.textTop * r : 0), this.properties.textWidth ? this.properties.textWidth * i : i, this.properties.textHeight ? this.properties.textHeight * r : r)
                }, e.prototype.getRawImageSize = function(t) {
                    t.left, t.top;
                    var e = t.width,
                        n = t.height;
                    return new s.Size(this.properties.imageWidth ? this.properties.imageWidth * e : e, this.properties.imageHeight ? this.properties.imageHeight * n : n)
                }, e.prototype.getImagePlacementRectangle = function(t, e) {
                    var n = t.left,
                        o = t.top,
                        i = t.width,
                        r = t.height;
                    return s.Rectangle.create(n + (this.properties.imageLeft && !e ? this.properties.imageLeft * i : 0), o + (this.properties.imageTop && !e ? this.properties.imageTop * r : 0), this.properties.imageWidth && !e ? this.properties.imageWidth * i : 0, this.properties.imageHeight && !e ? this.properties.imageHeight * r : 0)
                }, e.prototype.updateSvgImage = function(t) { t.base64 ? this.svgImage.loadBase64Content(t.base64) : this.svgImage.setUnableToLoadFlag() }, e
            }(u.ShapeWithImageDescription);
        e.CustomShapeDescription = d
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(9),
            s = n(0),
            a = n(1),
            c = n(101),
            u = n(20),
            p = function(t) {
                function e(e, n, o) { return void 0 === e && (e = "Vertical Container"), void 0 === n && (n = "Container"), void 0 === o && (o = new s.Size(2 * r.ShapeDefaultDimension, 1.5 * r.ShapeDefaultDimension)), t.call(this, e, n, o) || this }
                return i(e, t), Object.defineProperty(e.prototype, "key", { get: function() { return a.ShapeTypes.VerticalContainer }, enumerable: !0, configurable: !0 }), e.prototype.getExpandedSize = function(t, e) { return new s.Size(t.width, e.height) }, e.prototype.getCollapsedSize = function(t) { return new s.Size(t.width, c.ContainerDescription.headerSize) }, e.prototype.allowResizeVertically = function(t) { return t.expanded }, e.prototype.createHeaderPrimitives = function(t, e) {
                    var n = t.rectangle,
                        o = n.left,
                        i = n.top,
                        r = n.width,
                        a = this.getHeaderSize(n, e),
                        c = [];
                    return c = c.concat([new u.RectanglePrimitive(o, i, r, a, t.style)]), e || (c = c.concat(this.createExpandButtonPrimitives(t, s.Rectangle.create(o, i, a, a)))), c
                }, e.prototype.getClientRectangle = function(t) { var e = this.getHeaderSize(t); return new s.Rectangle(new s.Point(t.left, t.top + e), new s.Size(t.width, t.height - e)) }, e.prototype.getTextRectangle = function(t, e) { var n = this.getHeaderSize(t); return new s.Rectangle(new s.Point(t.left + n, t.top), new s.Size(t.width - n, n)) }, e.prototype.getHeaderSize = function(t, e) { return e ? t.height * c.ContainerDescription.headerToolboxSizeRatio : c.ContainerDescription.headerSize }, e
            }(c.ContainerDescription);
        e.VerticalContainerDescription = p
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(9),
            s = n(0),
            a = n(1),
            c = n(101),
            u = n(20),
            p = function(t) {
                function e(e, n, o) { return void 0 === e && (e = "Horizontal Container"), void 0 === n && (n = "Container"), void 0 === o && (o = new s.Size(2 * r.ShapeDefaultDimension, 1.5 * r.ShapeDefaultDimension)), t.call(this, e, n, o) || this }
                return i(e, t), Object.defineProperty(e.prototype, "key", { get: function() { return a.ShapeTypes.HorizontalContainer }, enumerable: !0, configurable: !0 }), e.prototype.getExpandedSize = function(t, e) { return new s.Size(e.width, t.height) }, e.prototype.getCollapsedSize = function(t) { return new s.Size(c.ContainerDescription.headerSize, t.height) }, e.prototype.allowResizeHorizontally = function(t) { return t.expanded }, e.prototype.createHeaderPrimitives = function(t, e) {
                    var n = t.rectangle,
                        o = n.left,
                        i = n.top,
                        r = n.height,
                        a = this.getHeaderSize(n, e),
                        c = [];
                    return c = c.concat([new u.RectanglePrimitive(o, i, a, r, t.style)]), e || (c = c.concat(this.createExpandButtonPrimitives(t, s.Rectangle.create(o, i, a, a)))), c
                }, e.prototype.getClientRectangle = function(t) { var e = this.getHeaderSize(t); return new s.Rectangle(new s.Point(t.left + e, t.top), new s.Size(t.width - e, t.height)) }, e.prototype.getTextRectangle = function(t, e) { var n = this.getHeaderSize(t); return new s.Rectangle(new s.Point(t.left, t.top + n), new s.Size(n, t.height - n)) }, e.prototype.getTextEditRectangle = function(t) { return new s.Rectangle(t.position, new s.Size(t.width, this.getHeaderSize(t))) }, e.prototype.getTextRotated = function() { return !0 }, e.prototype.getHeaderSize = function(t, e) { return e ? t.height * c.ContainerDescription.headerToolboxSizeRatio : c.ContainerDescription.headerSize }, e
            }(c.ContainerDescription);
        e.HorizontalContainerDescription = p
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(9),
            s = n(0),
            a = n(1),
            c = n(69),
            u = n(45),
            p = function(t) {
                function e(e, n, o) { return void 0 === e && (e = "Card with Image on the Left"), void 0 === n && (n = ""), void 0 === o && (o = new s.Size(1.5 * r.ShapeDefaultDimension, .5 * r.ShapeDefaultDimension)), t.call(this, e, n, o) || this }
                return i(e, t), Object.defineProperty(e.prototype, "key", { get: function() { return a.ShapeTypes.CardWithImageOnLeft }, enumerable: !0, configurable: !0 }), e.prototype.getToolboxHeightToWidthRatio = function(t, e) { return 26 / 46 }, e.prototype.getRawImageSize = function(t, e) { var n = Math.min(t.height, t.width) - 2 * u.ShapeWithImageDescription.getImageMargins(e); return new s.Size(n, n) }, e.prototype.getTextBlockOffset = function(t, e) { return new s.Offset(this.getImageSize(t, e).width, 0, 0, 0) }, e
            }(c.CardBaseDescription);
        e.CardWithImageOnLeftDescription = p
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(12),
            s = function(t) {
                function e(e, n, o, i, r, s, a, c, u, p) { void 0 === r && (r = 0), void 0 === s && (s = 0); var h = t.call(this, e, n, o, i, a, c, u, p) || this; return h.x = e, h.y = n, h.width = o, h.height = i, h.rx = r, h.ry = s, h }
                return i(e, t), e.prototype.createMainElement = function() { return document.createElementNS(r.svgNS, "rect") }, e.prototype.applyElementProperties = function(e) { this.setUnitAttribute(e, "rx", this.rx), this.setUnitAttribute(e, "ry", this.ry), t.prototype.applyElementProperties.call(this, e) }, e
            }(n(20).RectanglePrimitive);
        e.RoundedRectanglePrimitive = s
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(9),
            s = n(0),
            a = n(1),
            c = n(69),
            u = n(45),
            p = function(t) {
                function e(e, n, o) { return void 0 === e && (e = "Card with Image on the Right"), void 0 === n && (n = ""), void 0 === o && (o = new s.Size(1.5 * r.ShapeDefaultDimension, .5 * r.ShapeDefaultDimension)), t.call(this, e, n, o) || this }
                return i(e, t), Object.defineProperty(e.prototype, "key", { get: function() { return a.ShapeTypes.CardWithImageOnRight }, enumerable: !0, configurable: !0 }), e.prototype.getToolboxHeightToWidthRatio = function(t, e) { return 26 / 46 }, e.prototype.getRawImageSize = function(t, e) { var n = Math.min(t.height, t.width) - 2 * u.ShapeWithImageDescription.getImageMargins(e); return new s.Size(n, n) }, e.prototype.getTextBlockOffset = function(t, e) { return new s.Offset(0, 0, this.getImageSize(t, e).width, 0) }, e
            }(c.CardBaseDescription);
        e.CardWithImageOnRightDescription = p
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(9),
            s = n(0),
            a = n(1),
            c = n(69),
            u = n(45),
            p = function(t) {
                function e(e, n, o) { return void 0 === e && (e = "Card with Image on the Top"), void 0 === n && (n = ""), void 0 === o && (o = new s.Size(.8 * r.ShapeDefaultDimension, r.ShapeDefaultDimension)), t.call(this, e, n, o) || this }
                return i(e, t), Object.defineProperty(e.prototype, "key", { get: function() { return a.ShapeTypes.CardWithImageOnTop }, enumerable: !0, configurable: !0 }), e.prototype.getRawImageSize = function(t, e) { var n = Math.min(t.width / 2 + 1, t.height - 2 * u.ShapeWithImageDescription.getImageMargins(e)); return new s.Size(n, n) }, e.prototype.getTextBlockOffset = function(t, e) { return new s.Offset(0, this.getImageSize(t).height + u.ShapeWithImageDescription.getImageMargins(e), 0, 0) }, e
            }(c.CardBaseDescription);
        e.CardWithImageOnTopDescription = p
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = function(t) {
            function e(e, n) { var o = t.call(this) || this; return o.containerKey = n.key, o.itemKey = e.key, o }
            return i(e, t), e.prototype.redo = function(t) {
                var e = t.model.findItem(this.itemKey),
                    n = t.model.findShape(this.containerKey);
                t.insertToContainer(e, n)
            }, e.prototype.undo = function(t) {
                var e = t.model.findItem(this.itemKey);
                t.removeFromContainer(e)
            }, e
        }(n(3).HistoryItem);
        e.InsertToContainerHistoryItem = r
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = function(t) {
            function e(e) { var n = t.call(this) || this; return n.itemKey = e.key, n }
            return i(e, t), e.prototype.redo = function(t) {
                var e = t.model.findItem(this.itemKey);
                this.containerKey = e.container && e.container.key, t.removeFromContainer(e)
            }, e.prototype.undo = function(t) {
                var e = t.model.findContainer(this.containerKey),
                    n = t.model.findItem(this.itemKey);
                t.insertToContainer(n, e)
            }, e
        }(n(3).HistoryItem);
        e.RemoveFromContainerHistoryItem = r
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = function(t) {
            function e(e, n) { var o = t.call(this) || this; return o.itemKey = e.key, o.containerLocked = n, o }
            return i(e, t), e.prototype.redo = function(t) {
                var e = t.model.findItem(this.itemKey);
                this.oldContainerLocked = e.containerLocked, t.changeContainerLocked(e, this.containerLocked)
            }, e.prototype.undo = function(t) {
                var e = t.model.findItem(this.itemKey);
                t.changeContainerLocked(e, this.oldContainerLocked)
            }, e
        }(n(3).HistoryItem);
        e.ChangeContainerLockedHistoryItem = r
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = n(196),
            i = function() {
                function t(t, e) { this.container = t, this.sourceGraph = e }
                return Object.defineProperty(t.prototype, "graph", { get: function() { return this._graph || (this._graph = this.getNodeInfoGraph()) }, enumerable: !0, configurable: !0 }), t.prototype.getNodeInfoGraph = function() { return this.sourceGraph.cast(o.LayoutUtils.shapeToLayout) }, t
            }();
        e.GraphInfo = i
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = n(5),
            i = n(56),
            r = function() {
                function t() {}
                return t.shapeToLayout = function(t) {
                    var e = new i.Margin(0),
                        n = t.rectangle;
                    t.attachedConnectors.filter(function(t) { return !t.beginItem || !t.endItem }).forEach(function(t) {
                        var i = t.rectangle;
                        e.left = Math.max(e.left, n.left - i.left + o.Connector.minOffset), e.right = Math.max(e.right, i.right - n.right + o.Connector.minOffset), e.top = Math.max(e.top, n.top - i.top + o.Connector.minOffset), e.bottom = Math.max(e.bottom, i.bottom - n.bottom + o.Connector.minOffset)
                    });
                    var r = new i.NodeInfo(t.key, e, t.size.clone());
                    return r.connectionPoints = t.description.getConnectionPoints(), r
                }, t
            }();
        e.LayoutUtils = r
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = function() {
            function t(t) { this.control = t }
            return t.prototype.execute = function(t) {
                var e = this.getState();
                if (!e.enabled) return !1;
                this.control.beginUpdate();
                var n = this.executeCore(e, t);
                return this.control.endUpdate(), n
            }, t.prototype.updateControlState = function() { this.lockUIUpdating() || this.control.barManager.updateItemsState() }, t.prototype.lockUIUpdating = function() { return !1 }, t
        }();
        e.CommandBase = o
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = function() { return function(t, e, n, o, i) { this.visible = !0, this.denyUpdateValue = !1, this.enabled = t, this.value = e, this.items = o, this.visible = i, this.defaultValue = n } }();
        e.SimpleCommandState = o
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this }
            return i(e, t), e.prototype.executeCore = function(t) { return this.control.beginUpdate(!0), this.control.history.undo(), this.control.endUpdate(!0), !0 }, e.prototype.isEnabled = function() { return t.prototype.isEnabled.call(this) && this.control.history.canUndo() }, e
        }(n(7).SimpleCommandBase);
        e.UndoCommand = r
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this }
            return i(e, t), e.prototype.executeCore = function(t) { return this.control.beginUpdate(!0), this.control.history.redo(), this.control.endUpdate(!0), !0 }, e.prototype.isEnabled = function() { return t.prototype.isEnabled.call(this) && this.control.history.canRedo() }, e
        }(n(7).SimpleCommandBase);
        e.RedoCommand = r
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(105),
            s = function(t) {
                function e() { return null !== t && t.apply(this, arguments) || this }
                return i(e, t), e.prototype.executeCore = function(t, e) {
                    var n = e.data ? e.data : e,
                        o = new r.Importer(n);
                    if (!0 === e.keepExistingItems) o.importItemsData(this.control.model), this.control.importItemsData();
                    else {
                        var i = o.import();
                        this.control.importModel(i)
                    }
                    return !0
                }, e
            }(n(47).ExportImportCommandBase);
        e.ImportCommand = s
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(57),
            s = function(t) {
                function e() { return null !== t && t.apply(this, arguments) || this }
                return i(e, t), e.prototype.executeCore = function(t, e) { return e((new r.Exporter).export(this.control.model)), !0 }, e
            }(n(47).ExportImportCommandBase);
        e.ExportCommand = s
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this }
            return i(e, t), e.prototype.getStyleProperty = function() { return "font-weight" }, e.prototype.getStylePropertyValue = function() { return "bold" }, e
        }(n(58).ToggleStyleTextPropertyCommand);
        e.ToggleFontBoldCommand = r
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this }
            return i(e, t), e.prototype.getStyleProperty = function() { return "font-style" }, e.prototype.getStylePropertyValue = function() { return "italic" }, e
        }(n(58).ToggleStyleTextPropertyCommand);
        e.ToggleFontItalicCommand = r
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this }
            return i(e, t), e.prototype.getStyleProperty = function() { return "text-decoration" }, e.prototype.getStylePropertyValue = function() { return "underline" }, e
        }(n(58).ToggleStyleTextPropertyCommand);
        e.ToggleFontUnderlineCommand = r
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this }
            return i(e, t), e.prototype.getStyleProperty = function() { return "font-family" }, e
        }(n(72).ChangeStyleTextPropertyCommand);
        e.ChangeFontNameCommand = r
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this }
            return i(e, t), e.prototype.getStyleProperty = function() { return "font-size" }, e
        }(n(72).ChangeStyleTextPropertyCommand);
        e.ChangeFontSizeCommand = r
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(72),
            s = n(8),
            a = function(t) {
                function e() { return null !== t && t.apply(this, arguments) || this }
                return i(e, t), e.prototype.processParameter = function(t) { return s.ColorHelper.stringToHash(t) }, e.prototype.getStyleProperty = function() { return "fill" }, e
            }(r.ChangeStyleTextPropertyCommand);
        e.ChangeFontColorCommand = a
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(109),
            s = n(8),
            a = function(t) {
                function e() { return null !== t && t.apply(this, arguments) || this }
                return i(e, t), e.prototype.processParameter = function(t) { return s.ColorHelper.stringToHash(t) }, e.prototype.getStyleProperty = function() { return "fill" }, e
            }(r.ChangeStylePropertyCommand);
        e.ChangeFillColorCommand = a
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(109),
            s = n(8),
            a = function(t) {
                function e() { return null !== t && t.apply(this, arguments) || this }
                return i(e, t), e.prototype.processParameter = function(t) { return s.ColorHelper.stringToHash(t) }, e.prototype.getStyleProperty = function() { return "stroke" }, e
            }(r.ChangeStylePropertyCommand);
        e.ChangeStrokeColorCommand = a
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this }
            return i(e, t), e.prototype.getStyleProperty = function() { return "text-anchor" }, e
        }(n(58).ToggleStyleTextPropertyCommand);
        e.ChangeTextAlignCommand = r;
        var s = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this }
            return i(e, t), e.prototype.getStylePropertyValue = function() { return "start" }, e
        }(r);
        e.TextLeftAlignCommand = s;
        var a = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this }
            return i(e, t), e.prototype.getStylePropertyValue = function() { return "middle" }, e
        }(r);
        e.TextCenterAlignCommand = a;
        var c = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this }
            return i(e, t), e.prototype.getStylePropertyValue = function() { return "end" }, e
        }(r);
        e.TextRightAlignCommand = c
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(110),
            s = n(24),
            a = function(t) {
                function e() { return null !== t && t.apply(this, arguments) || this }
                return i(e, t), e.prototype.getPropertyName = function() { return "startLineEnding" }, e.prototype.getPropertyDefaultValue = function() { return s.ConnectorLineEnding.None }, e
            }(r.ChangeConnectorPropertyCommand);
        e.ChangeConnectorStartLineEndingCommand = a;
        var c = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this }
            return i(e, t), e.prototype.getPropertyName = function() { return "endLineEnding" }, e.prototype.getPropertyDefaultValue = function() { return s.ConnectorLineEnding.Arrow }, e
        }(r.ChangeConnectorPropertyCommand);
        e.ChangeConnectorEndLineEndingCommand = c
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(110),
            s = n(24),
            a = function(t) {
                function e() { return null !== t && t.apply(this, arguments) || this }
                return i(e, t), e.prototype.getPropertyName = function() { return "lineOption" }, e.prototype.getPropertyDefaultValue = function() { return s.ConnectorLineOption.Straight }, e
            }(r.ChangeConnectorPropertyCommand);
        e.ChangeConnectorLineOptionCommand = a
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this }
            return i(e, t), e.prototype.isEnabledInReadOnlyMode = function() { return !0 }, e.prototype.executeCore = function(t, e) { var n = []; return this.control.model.iterateItems(function(t) { return n.push(t.key) }), this.control.selection.set(n), !0 }, e
        }(n(7).SimpleCommandBase);
        e.SelectAllCommand = r
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(59),
            s = n(73),
            a = n(22),
            c = function(t) {
                function e() { return null !== t && t.apply(this, arguments) || this }
                return i(e, t), e.prototype.createLayoutSettings = function() {
                    var t = this.control.settings.snapToGrid ? this.control.settings.gridSize : void 0,
                        e = new a.TreeLayoutSettings(t);
                    return e.orientation = a.DataLayoutOrientation.Vertical, e
                }, e.prototype.createLayout = function(t, e) { return new s.TreeLayoutBuilder(t, e).build() }, e
            }(r.AutoLayoutCommandBase);
        e.AutoLayoutTreeVerticalCommand = c
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = n(31),
            i = function() {
                function t(t, e) {
                    var n = this;
                    this.childToParent = {}, this.root = t, this.parentToChildren = e;
                    var o = function(t) {
                        if (!e.hasOwnProperty(t)) return "continue";
                        e[t].forEach(function(e) { return n.childToParent[e.key] = t })
                    };
                    for (var i in e) o(i)
                }
                return t.prototype.getChildren = function(t) { return t && this.parentToChildren[t.key] ? this.parentToChildren[t.key] : [] }, t.prototype.hasChildren = function(t) { return this.parentToChildren[t.key] && this.parentToChildren[t.key].length > 0 }, t.prototype.iterate = function(t) { this.iterateCore(this.root, 0, t) }, t.createSpanningTree = function(e) {
                    var n = t.findRoot(e),
                        i = e.createIterator(o.ConnectionMode.Outgoing),
                        r = {};
                    return i.skipEdge = function(t) { return void 0 === t.to || i.isNodeVisited(t.to) }, i.onNode = function(t) { return r[t.key] = [] }, i.onEdge = function(t) {
                        var n = e.getNode(t.to);
                        n && r[t.from].push(n)
                    }, i.iterate(n), new t(e.getNode(n), r)
                }, t.prototype.iterateCore = function(t, e, n) {
                    var o = this;
                    n(t, e), this.getChildren(t).forEach(function(t) { return o.iterateCore(t, e + 1, n) })
                }, t.findRoot = function(t) {
                    return t.nodes.reduce(function(e, n) {
                        var o = t.getAdjacentEdges(n),
                            i = o.filter(function(t) { return t.to === n }).length,
                            r = o.filter(function(t) { return t.from === n }).length;
                        return (void 0 === e.candidate || 0 === i && e.inc > 0 || 0 !== e.inc && e.out - e.inc < r - i) && (e.candidate = n, e.inc = i, e.out = r), e
                    }, { inc: -1, out: -1, candidate: void 0 }).candidate
                }, t
            }();
        e.Tree = i
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this }
            return i(e, t), e.prototype.executeCore = function(t, e) { var n = void 0 === e ? !this.control.settings.snapToGrid : !!e; return this.control.settings.snapToGrid !== n && (this.control.settings.snapToGrid = n, !0) }, e.prototype.getValue = function() { return this.control.settings.snapToGrid }, e
        }(n(7).SimpleCommandBase);
        e.ChangeSnapToGridCommand = r
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(7),
            s = function(t) {
                function e() { return null !== t && t.apply(this, arguments) || this }
                return i(e, t), e.prototype.isEnabledInReadOnlyMode = function() { return !0 }, e.prototype.getValue = function() { return this.getModelUnit(this.control.settings.gridSize) }, e.prototype.executeCore = function(t, e) { return this.control.settings.gridSize = this.getModelUnitTwipsValue(e), !0 }, e.prototype.getItems = function() { var t = this; return this.control.settings.gridSizeItems.map(function(e) { return { value: t.getModelUnit(e), text: t.getViewUnitText(e) } }) }, e
            }(r.SimpleCommandBase);
        e.ChangeGridSizeCommand = s;
        var a = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this }
            return i(e, t), e.prototype.isEnabledInReadOnlyMode = function() { return !0 }, e.prototype.getValue = function() { var t = this; return this.control.settings.gridSizeItems.map(function(e) { return t.getModelUnit(e) }) }, e.prototype.executeCore = function(t, e) { var n = this; return this.control.settings.gridSizeItems = e.map(function(t) { return n.getModelUnitTwipsValue(t) }), !0 }, e
        }(r.SimpleCommandBase);
        e.ChangeGridSizeItemsCommand = a
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(60),
            s = n(220),
            a = function(t) {
                function e() { return null !== t && t.apply(this, arguments) || this }
                return i(e, t), e.prototype.getValue = function() { return this.control.model.pageLandscape }, e.prototype.createHistoryItems = function(t) { return [new s.ChangePageLandscapeHistoryItem(t)] }, e
            }(r.ChangePagePropertyCommand);
        e.ChangePageLandscapeCommand = a
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = function(t) {
            function e(e) { var n = t.call(this) || this; return n.value = e, n }
            return i(e, t), e.prototype.redo = function(t) { this.oldValue = t.model.pageLandscape, t.changePageLandscape(this.value) }, e.prototype.undo = function(t) { t.changePageLandscape(this.oldValue) }, e
        }(n(3).HistoryItem);
        e.ChangePageLandscapeHistoryItem = r
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(60),
            s = n(0),
            a = n(222),
            c = n(7),
            u = function(t) {
                function e() { return null !== t && t.apply(this, arguments) || this }
                return i(e, t), e.prototype.getValue = function() { return this.getModelUnitSize(this.control.model.pageSize) }, e.prototype.createHistoryItems = function(t) { return [new a.ChangePageSizeHistoryItem(new s.Size(this.getModelUnitTwipsValue(t.width), this.getModelUnitTwipsValue(t.height)))] }, e.prototype.getItems = function() { var t = this; return this.control.settings.pageSizeItems.map(function(e) { return { value: t.getModelUnitSize(e.size), text: e.text.replace("{width}", t.getViewUnitText(e.size.width)).replace("{height}", t.getViewUnitText(e.size.height)) } }) }, e.prototype.getModelUnitSize = function(t) { return new s.Size(this.getModelUnit(t.width), this.getModelUnit(t.height)) }, e
            }(r.ChangePagePropertyCommand);
        e.ChangePageSizeCommand = u;
        var p = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this }
            return i(e, t), e.prototype.isEnabled = function() { return !0 }, e.prototype.getValue = function() { var t = this; return this.control.settings.pageSizeItems.map(function(e) { return { size: new s.Size(t.getModelUnit(e.width), t.getModelUnit(e.height)), text: e.text } }) }, e.prototype.executeCore = function(t, e) { var n = this; return this.control.settings.pageSizeItems = e.map(function(t) { return { size: new s.Size(n.getModelUnitTwipsValue(t.width), n.getModelUnitTwipsValue(t.height)), text: t.text } }), !0 }, e
        }(c.SimpleCommandBase);
        e.ChangePageSizeItemsCommand = p
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = function(t) {
            function e(e) { var n = t.call(this) || this; return n.size = e, n }
            return i(e, t), e.prototype.redo = function(t) { this.oldSize = t.model.pageSize, t.changePageSize(this.size) }, e.prototype.undo = function(t) { t.changePageSize(this.oldSize) }, e
        }(n(3).HistoryItem);
        e.ChangePageSizeHistoryItem = r
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this }
            return i(e, t), e.prototype.getExtension = function() { return "png" }, e.prototype.getExportFunc = function() { return this.exporter.exportPng }, e
        }(n(74).ExportImageCommand);
        e.ExportPngCommand = r
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(13),
            s = n(12),
            a = n(23),
            c = n(15),
            u = n(33),
            p = n(8),
            h = function(t) {
                function e(e) { var n = t.call(this, 1) || this; return n.itemsContainer = e, n }
                return i(e, t), e.prototype.getSvgImage = function(t, e) {
                    var n = s.RenderManager.createSvgElement(null, !0),
                        o = t.transform(r.UnitConverter.twipsToPixelsF);
                    c.RenderUtils.updateSvgElementSize(n, o.width, o.height, !0), n.style.backgroundColor = p.ColorHelper.colorToHash(e), this.createTextFloodFilter(void 0, n, e);
                    var i = this.getExportCssRules(),
                        u = i && !a.Browser.IE;
                    if (u) {
                        var h = document.createElementNS(s.svgNS, "style");
                        h.innerHTML = i, n.appendChild(h)
                    }
                    for (var l = 0; l < this.itemsContainer.childNodes.length; l++) {
                        var d = this.itemsContainer.childNodes[l].cloneNode(!0);
                        u || this.inlineStyle(d, this.itemsContainer.childNodes[l]), n.appendChild(d)
                    }
                    return n
                }, e.prototype.getSvgImageUrl = function(t, e) { var n = this.getSvgImage(t, e); return this.getSvgBase64String(n) }, e.prototype.getSvgString = function(t) { return (new XMLSerializer).serializeToString(t) }, e.prototype.getSvgBase64String = function(t) { var n = this.getSvgString(t); return e.base64Start + this.getBase64EncodeUnicode(n) }, e.prototype.getBase64EncodeUnicode = function(t) { return btoa(encodeURIComponent(t).replace(/%([0-9A-F]{2})/g, function(t, e) { return String.fromCharCode(parseInt("0x" + e, 16)) })) }, e.prototype.getExportCssRules = function() {
                    for (var t = 0; t < document.styleSheets.length; t++) {
                        var e = this.getRules(document.styleSheets[t]);
                        if (e) {
                            for (var n = "", o = 0; o < e.length; o++) {
                                var i = e[o],
                                    r = this.isCSSStyleRule(i) ? i.selectorText : null;
                                r && this.checkSelector(r) && (n += i.cssText + "\n")
                            }
                            if (n.length > 0) return "\n" + n
                        }
                    }
                }, e.prototype.checkSelector = function(t) {
                    for (var n = 0; n < e.exportStyleRules.length; n++)
                        if (0 === t.indexOf(e.exportStyleRules[n])) return !0;
                    return !1
                }, e.prototype.getRules = function(t) { try { return this.isCSSStyleSheet(t) ? t.rules || t.cssRules : null } catch (t) {} }, e.prototype.isCSSStyleSheet = function(t) { return void 0 !== t.rules }, e.prototype.isCSSStyleRule = function(t) { return void 0 !== t.selectorText }, e.prototype.inlineStyle = function(t, n) {
                    for (var o = 0; o < t.childNodes.length; o++) {
                        var i = t.childNodes[o];
                        if (i.tagName)
                            if ("g" === i.tagName) this.inlineStyle(i, n.childNodes[o]);
                            else if (i.style) {
                            var r = window.getComputedStyle(n.childNodes[o]);
                            if (void 0 !== r)
                                for (var s = 0; s < e.exportStyleAttributes.length; s++) {
                                    var a = e.exportStyleAttributes[s];
                                    i.style.setProperty(a, r.getPropertyValue(a))
                                }
                        }
                    }
                }, e.prototype.exportSvgImage = function(t, e, n) { n(this.getSvgImageUrl(t, e)) }, e.prototype.exportBinaryImage = function(t, e, n, o) {
                    var i = this.getAbsoluteSize(t),
                        r = document.createElement("canvas");
                    r.width = i.width, r.height = i.height;
                    var s = r.getContext("2d");
                    if (s.fillStyle = p.ColorHelper.colorToHash(e), s.fillRect(0, 0, i.width, i.height), a.Browser.IE && "function" == typeof window.canvg) {
                        var c = this.getSvgImage(t, e),
                            u = this.getSvgString(c);
                        s.drawSvg(u, 0, 0, null, null, { renderCallback: function() { o(r.toDataURL(n, 1)) } })
                    } else {
                        var h = new Image;
                        h.width = i.width, h.height = i.height, h.setAttribute("crossOrigin", "anonymous"), h.onload = function() { s.drawImage(h, 0, 0), o(r.toDataURL(n, 1)) }, h.src = this.getSvgImageUrl(t, e)
                    }
                }, e.prototype.exportPngImage = function(t, e, n) { this.exportBinaryImage(t, e, "image/png", n) }, e.prototype.exportJpgImage = function(t, e, n) { this.exportBinaryImage(t, e, "image/jpeg", n) }, e.prototype.notifyModelChanged = function(t) {}, e.prototype.notifyPageColorChanged = function(t) {}, e.prototype.notifyPageSizeChanged = function(t, e) {}, e.base64Start = "data:image/svg+xml;base64,", e.exportStyleRules = [".dxdi-canvas .shape ", ".dxdi-canvas .connector ", ".dxdi-canvas text", ".dxdi-canvas.export"], e.exportStyleAttributes = ["fill", "stroke", "stroke-width", "shape-rendering", "font-family", "font-size", "font-weight", "font-style", "text-decoration", "text-anchor"], e
            }(u.CanvasManagerBase);
        e.CanvasExportManager = h
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this }
            return i(e, t), e.prototype.getExtension = function() { return "svg" }, e.prototype.getExportFunc = function() { return this.exporter.exportSvg }, e
        }(n(74).ExportImageCommand);
        e.ExportSvgCommand = r
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this }
            return i(e, t), e.prototype.getExtension = function() { return "jpg" }, e.prototype.getExportFunc = function() { return this.exporter.exportJpg }, e
        }(n(74).ExportImageCommand);
        e.ExportJpgCommand = r
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(57),
            s = function(t) {
                function e() { return null !== t && t.apply(this, arguments) || this }
                return i(e, t), e.prototype.isEnabled = function() { return t.prototype.isEnabled.call(this) && !this.control.selection.isEmpty(!0) }, e.prototype.isEnabledInReadOnlyMode = function() { return !0 }, e.prototype.executeCore = function(t) { var e = (new r.Exporter).exportItems(this.control.selection.getSelectedItems(!0, !0)); return this.setClipboardData(e), !0 }, e
            }(n(75).ClipboardCommand);
        e.CopySelectionCommand = s
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(57),
            s = n(6),
            a = function(t) {
                function e() { return null !== t && t.apply(this, arguments) || this }
                return i(e, t), e.prototype.isEnabled = function() { return t.prototype.isEnabled.call(this) && !this.control.selection.isEmpty() }, e.prototype.executeCore = function(t) { var e = (new r.Exporter).exportItems(this.control.selection.getSelectedItems(!0, !0)); return this.setClipboardData(e), s.ModelUtils.deleteSelection(this.control.history, this.control.model, this.control.selection), !0 }, e
            }(n(75).ClipboardCommand);
        e.CutSelectionCommand = a
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(114),
            s = function(t) {
                function e() { return null !== t && t.apply(this, arguments) || this }
                return i(e, t), e.prototype.getShapeNewPosition = function(t) { return r.PasteSelectionCommandBase.getShapeNewPosition(this.control.model, t) }, e.prototype.changeConnectorPoints = function(t) { r.PasteSelectionCommandBase.changeConnectorPoints(this.control.model, t) }, e
            }(r.PasteSelectionCommandBase);
        e.PasteSelectionCommand = s
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = function(t) {
            function e(e) { var n = t.call(this) || this; return n.shape = e, n }
            return i(e, t), e.prototype.redo = function(t) { this.shapeKey = this.shape.key, t.insertShape(this.shape) }, e.prototype.undo = function(t) { t.removeShape(t.model.findShape(this.shapeKey)) }, e
        }(n(3).HistoryItem);
        e.ImportShapeHistoryItem = r
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = function(t) {
            function e(e) { var n = t.call(this) || this; return n.connector = e, n }
            return i(e, t), e.prototype.redo = function(t) { this.connectorKey = this.connector.key, t.insertConnector(this.connector) }, e.prototype.undo = function(t) {
                var e = t.model.findConnector(this.connectorKey);
                t.removeConnector(e)
            }, e
        }(n(3).HistoryItem);
        e.ImportConnectorHistoryItem = r
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(233),
            s = n(6),
            a = n(51),
            c = n(0),
            u = n(5),
            p = n(52),
            h = n(37),
            l = n(61),
            d = n(22),
            f = function(t) {
                function e() { return null !== t && t.apply(this, arguments) || this }
                return i(e, t), e.prototype.executeCore = function(t, e) { var n = new r.BPMNImporter(e).import(); return this.updateModel(n), !0 }, e.prototype.updateModel = function(t) {
                    var e = this,
                        n = {},
                        o = [],
                        i = [];
                    this.control.history.beginTransaction(), t.items.forEach(function(t) {
                        var i = new a.AddShapeHistoryItem(t.type, new c.Point(0, 0), t.text, t.key);
                        e.control.history.addAndRedo(i), n[t.key] = i.shapeKey;
                        var r = e.control.model.findShape(i.shapeKey);
                        o.push(r)
                    }), t.edges.forEach(function(t) {
                        var o = e.control.model.findShape(n[t.from]),
                            r = e.control.model.findShape(n[t.to]),
                            s = new p.AddConnectorHistoryItem([o.getConnectionPointPosition(0), r.getConnectionPointPosition(0)]);
                        e.control.history.addAndRedo(s);
                        var a = e.control.model.findConnector(s.connectorKey);
                        e.control.history.addAndRedo(new h.AddConnectionHistoryItem(a, o, 0, u.ConnectorPosition.Begin)), e.control.history.addAndRedo(new h.AddConnectionHistoryItem(a, r, 0, u.ConnectorPosition.End)), i.push(a)
                    });
                    var r = new d.LayoutSettings;
                    s.ModelUtils.getGraphInfoByItems(this.control.model, o, i).forEach(function(t) {
                        var n = new l.SugiyamaLayoutBuilder(r, t.graph).build(),
                            a = s.ModelUtils.getNonGraphItems(e.control.model, t.container, n.nodeToLayout, o, i);
                        s.ModelUtils.applyLayout(e.control.history, e.control.model, void 0, t.graph, n, a, r, e.control.settings.snapToGrid, e.control.settings.gridSize)
                    }), s.ModelUtils.tryUpdateModelSize(this.control.history, this.control.model), this.control.history.endTransaction()
                }, e
            }(n(47).ExportImportCommandBase);
        e.ImportBPMNCommand = f
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(53),
            s = n(1),
            a = n(31),
            c = n(71),
            u = function() {
                function t(t) { this.doc = c.ImportUtils.createDocument(t), this.graph = new r.Graph([], []) }
                return t.prototype.import = function() { for (var t = void 0, e = 0; t = this.doc.children[e]; e++) "DEFINITIONS" === t.nodeName.toUpperCase() && this.onDefinitionsElement(t); return this.validate(), this.graph }, t.prototype.validate = function() {
                    var t = {};
                    this.graph.nodes.forEach(function(e) { return t[e] = !0 });
                    for (var e = 0, n = void 0; n = this.graph.edges[e]; e++) t[n.from] && t[n.to] || (this.graph.edges.splice(e, 1), e--)
                }, t.prototype.onDefinitionsElement = function(t) { this.dataSourceKey = t.getAttribute("id"); for (var e = void 0, n = 0; e = t.children[n]; n++) "PROCESS" === e.nodeName.toUpperCase() && this.onProcessElement(e) }, t.prototype.onProcessElement = function(t) {
                    for (var e = void 0, n = 0; e = t.children[n]; n++) switch (e.nodeName.toUpperCase()) {
                        case "STARTEVENT":
                            this.onStartEventElement(e);
                            break;
                        case "SEQUENCEFLOW":
                            this.onSequenceFlowElement(e);
                            break;
                        case "SCRIPTTASK":
                            this.onScriptTaskElement(e);
                            break;
                        case "USERTASK":
                            this.onUserTaskElement(e);
                            break;
                        case "SERVICETASK":
                            this.onServiceTaskElement(e);
                            break;
                        case "SENDTASK":
                            this.onSendTaskElement(e);
                            break;
                        case "EXCLUSIVEGATEWAY":
                            this.onExclusiveGateway(e);
                            break;
                        case "ENDEVENT":
                            this.onEndEventGateway(e)
                    }
                }, t.prototype.onStartEventElement = function(t) {
                    var e = this.createNode(t);
                    e.type = s.ShapeTypes.Ellipse, e.text = t.getAttribute("name"), this.graph.addNode(e)
                }, t.prototype.onSequenceFlowElement = function(t) {
                    var e = t.getAttribute("sourceRef"),
                        n = t.getAttribute("targetRef"),
                        o = this.createEdge(t, e, n);
                    t.hasAttribute("name") && (o.text = t.getAttribute("name")), this.graph.addEdge(o)
                }, t.prototype.onScriptTaskElement = function(t) {
                    var e = this.createNode(t);
                    e.text = t.getAttribute("name"), this.graph.addNode(e)
                }, t.prototype.onUserTaskElement = function(t) {
                    var e = this.createNode(t);
                    e.text = t.getAttribute("name"), this.graph.addNode(e)
                }, t.prototype.onServiceTaskElement = function(t) {
                    var e = this.createNode(t);
                    e.text = t.getAttribute("name"), this.graph.addNode(e)
                }, t.prototype.onSendTaskElement = function(t) {
                    var e = this.createNode(t);
                    e.text = t.getAttribute("name"), this.graph.addNode(e)
                }, t.prototype.onExclusiveGateway = function(t) {
                    var e = this.createNode(t);
                    e.text = t.getAttribute("name"), e.type = s.ShapeTypes.Decision, this.graph.addNode(e)
                }, t.prototype.onEndEventGateway = function(t) {
                    var e = this.createNode(t);
                    e.text = t.getAttribute("name"), e.type = s.ShapeTypes.Ellipse, this.graph.addNode(e)
                }, t.prototype.createNode = function(t) { return new p(this.dataSourceKey, t.getAttribute("id")) }, t.prototype.createEdge = function(t, e, n) { return new h(this.dataSourceKey, t.getAttribute("id"), e, n) }, t
            }();
        e.BPMNImporter = u;
        var p = function() { return function(t, e) { this.sourceKey = t, this.key = e, this.type = s.ShapeTypes.Rectangle } }();
        e.BPMNNode = p;
        var h = function(t) {
            function e(e, n, o, i) { var r = t.call(this, n, o, i) || this; return r.sourceKey = e, r }
            return i(e, t), e
        }(a.Edge)
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(76),
            s = function(t) {
                function e() { return null !== t && t.apply(this, arguments) || this }
                return i(e, t), e.prototype.isEnabled = function() { var e = this.control.selection.getSelectedItems(); return t.prototype.isEnabled.call(this) && e.length > 0 && this.needSendToBack(e) }, e.prototype.executeCore = function(t, e) {
                    var n = this;
                    return this.control.history.beginTransaction(), this.control.selection.getSelectedItems().forEach(function(t) {
                        var e = n.control.model.getIntersectItemsMinZIndex(t) - 1;
                        n.control.history.addAndRedo(new r.ChangeZindexHistoryItem(t, e))
                    }), this.control.history.endTransaction(), !0
                }, e.prototype.needSendToBack = function(t) { for (var e = this, n = function(n) { var i = o.control.model.getIntersectItemsMinZIndex(t[n]); if (i < t[n].zIndex) return { value: !0 }; if (i === t[n].zIndex) { var r = !1; return o.control.model.getIntersectItems(t[n]).filter(function(e) { return e.zIndex === t[n].zIndex }).forEach(function(o) { e.control.model.getItemIndex(o) < e.control.model.getItemIndex(t[n]) && (r = !0) }), { value: r } } }, o = this, i = 0; i < t.length; i++) { var r = n(i); if ("object" == typeof r) return r.value } return !1 }, e
            }(n(7).SimpleCommandBase);
        e.SendToBackCommand = s
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(76),
            s = function(t) {
                function e() { return null !== t && t.apply(this, arguments) || this }
                return i(e, t), e.prototype.isEnabled = function() { var e = this.control.selection.getSelectedItems(); return t.prototype.isEnabled.call(this) && e.length > 0 && this.needBringToFront(e) }, e.prototype.executeCore = function(t, e) {
                    var n = this;
                    return this.control.history.beginTransaction(), this.control.selection.getSelectedItems().forEach(function(t) {
                        var e = n.control.model.getIntersectItemsMaxZIndex(t) + 1;
                        n.control.history.addAndRedo(new r.ChangeZindexHistoryItem(t, e))
                    }), this.control.history.endTransaction(), !0
                }, e.prototype.needBringToFront = function(t) { for (var e = this, n = function(n) { var i = o.control.model.getIntersectItemsMaxZIndex(t[n]); if (i > t[n].zIndex) return { value: !0 }; if (i === t[n].zIndex) { var r = !1; return o.control.model.getIntersectItems(t[n]).filter(function(e) { return e.zIndex === t[n].zIndex }).forEach(function(o) { e.control.model.getItemIndex(o) > e.control.model.getItemIndex(t[n]) && (r = !0) }), { value: r } } }, o = this, i = 0; i < t.length; i++) { var r = n(i); if ("object" == typeof r) return r.value } return !1 }, e
            }(n(7).SimpleCommandBase);
        e.BringToFrontCommand = s
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(59),
            s = n(61),
            a = n(22),
            c = function(t) {
                function e() { return null !== t && t.apply(this, arguments) || this }
                return i(e, t), e.prototype.createLayoutSettings = function() { var t = new a.LayoutSettings; return t.orientation = a.DataLayoutOrientation.Horizontal, t }, e.prototype.createLayout = function(t, e) { return new s.SugiyamaLayoutBuilder(t, e).build() }, e
            }(r.AutoLayoutCommandBase);
        e.AutoLayoutLayeredHorizontalCommand = c
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(0),
            s = n(6),
            a = n(13),
            c = function(t) {
                function e() { return null !== t && t.apply(this, arguments) || this }
                return i(e, t), e.prototype.isEnabled = function() { return t.prototype.isEnabled.call(this) && !this.control.selection.isEmpty() }, e.prototype.executeCore = function(t, e) {
                    var n = this;
                    return this.control.history.beginTransaction(), this.control.selection.getSelectedShapes().forEach(function(t, e) {
                        var o = n.getPosition(t.position);
                        s.ModelUtils.setShapePosition(n.control.history, n.control.model, t, o), s.ModelUtils.updateShapeAttachedConnectors(n.control.history, n.control.model, t)
                    }), this.control.selection.getSelectedConnectors().forEach(function(t, e) {
                        for (var o = t.beginItem ? 1 : 0, i = t.endItem ? t.points.length - 2 : t.points.length - 1, r = o; r <= i; r++) {
                            var a = n.getPosition(t.points[r]);
                            s.ModelUtils.setConnectorPoint(n.control.history, n.control.model, t, r, a)
                        }
                    }), s.ModelUtils.tryUpdateModelSize(this.control.history, this.control.model), this.control.history.endTransaction(), !0
                }, e
            }(n(7).SimpleCommandBase);
        e.MoveCommand = c;
        var u = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this }
            return i(e, t), e.prototype.getPosition = function(t) { return t.offset(-a.UnitConverter.pixelsToTwips(1), 0) }, e
        }(c);
        e.MoveLeftCommand = u;
        var p = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this }
            return i(e, t), e.prototype.getPosition = function(t) { return this.control.settings.snapToGrid ? new r.Point(s.ModelUtils.getSnappedPos(this.control.model, this.control.settings.gridSize, t.x - (this.control.settings.gridSize / 2 + 2), !0), t.y) : t.offset(-this.control.settings.gridSize, 0) }, e
        }(c);
        e.MoveStepLeftCommand = p;
        var h = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this }
            return i(e, t), e.prototype.getPosition = function(t) { return t.offset(a.UnitConverter.pixelsToTwips(1), 0) }, e
        }(c);
        e.MoveRightCommand = h;
        var l = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this }
            return i(e, t), e.prototype.getPosition = function(t) { return this.control.settings.snapToGrid ? new r.Point(s.ModelUtils.getSnappedPos(this.control.model, this.control.settings.gridSize, t.x + (this.control.settings.gridSize / 2 + 2), !0), t.y) : t.offset(this.control.settings.gridSize, 0) }, e
        }(c);
        e.MoveStepRightCommand = l;
        var d = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this }
            return i(e, t), e.prototype.getPosition = function(t) { return t.offset(0, -a.UnitConverter.pixelsToTwips(1)) }, e
        }(c);
        e.MoveUpCommand = d;
        var f = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this }
            return i(e, t), e.prototype.getPosition = function(t) { return this.control.settings.snapToGrid ? new r.Point(t.x, s.ModelUtils.getSnappedPos(this.control.model, this.control.settings.gridSize, t.y - (this.control.settings.gridSize / 2 + 2), !1)) : t.offset(0, -this.control.settings.gridSize) }, e
        }(c);
        e.MoveStepUpCommand = f;
        var y = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this }
            return i(e, t), e.prototype.getPosition = function(t) { return t.offset(0, a.UnitConverter.pixelsToTwips(1)) }, e
        }(c);
        e.MoveDownCommand = y;
        var m = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this }
            return i(e, t), e.prototype.getPosition = function(t) { return this.control.settings.snapToGrid ? new r.Point(t.x, s.ModelUtils.getSnappedPos(this.control.model, this.control.settings.gridSize, t.y + (this.control.settings.gridSize / 2 + 2), !1)) : t.offset(0, this.control.settings.gridSize) }, e
        }(c);
        e.MoveStepDownCommand = m
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(7),
            s = n(35),
            a = function(t) {
                function e() { return null !== t && t.apply(this, arguments) || this }
                return i(e, t), e.prototype.isEnabledInReadOnlyMode = function() { return !0 }, e.prototype.getValue = function() { return this.control.view.getZoom() }, e.prototype.executeCore = function(t, e) { return this.control.settings.zoomLevel = e, this.control.settings.autoZoom = s.AutoZoomMode.Disabled, this.control.updateLayout(!0), !0 }, e.prototype.getItems = function() { return this.control.settings.zoomLevelItems.map(function(t) { return { value: t, text: 100 * t + "%" } }) }, e
            }(r.SimpleCommandBase);
        e.ChangeZoomLevelCommand = a;
        var c = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this }
            return i(e, t), e.prototype.isEnabledInReadOnlyMode = function() { return !0 }, e.prototype.getValue = function() { return this.control.settings.zoomLevelItems }, e.prototype.executeCore = function(t, e) { return this.control.settings.zoomLevelItems = e, !0 }, e
        }(r.SimpleCommandBase);
        e.ChangeZoomLevelItemsCommand = c;
        var u = function(t) {
                function e() { return null !== t && t.apply(this, arguments) || this }
                return i(e, t), e.prototype.isEnabled = function() { return t.prototype.isEnabled.call(this) && !!this.control.render }, e.prototype.isEnabledInReadOnlyMode = function() { return !0 }, e.prototype.executeCore = function(t) { var e = this.getZoomLevel(); return this.control.settings.zoomLevel = e, this.control.settings.autoZoom = s.AutoZoomMode.Disabled, !0 }, e
            }(r.SimpleCommandBase),
            p = function(t) {
                function e() { return null !== t && t.apply(this, arguments) || this }
                return i(e, t), e.prototype.getZoomLevel = function() { return this.control.render.view.getActualAutoZoomLevel(s.AutoZoomMode.FitContent) }, e
            }(u);
        e.FitToScreenCommand = p;
        var h = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this }
            return i(e, t), e.prototype.getZoomLevel = function() { return this.control.render.view.getActualAutoZoomLevel(s.AutoZoomMode.FitToWidth) }, e
        }(u);
        e.FitToWidthCommand = h;
        var l = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this }
            return i(e, t), e.prototype.isEnabled = function() { return t.prototype.isEnabled.call(this) && !!this.control.render }, e.prototype.isEnabledInReadOnlyMode = function() { return !0 }, e.prototype.getValue = function() { return this.control.settings.autoZoom }, e.prototype.executeCore = function(t, e) { return e = parseInt(e), this.control.settings.autoZoom !== e && (e === s.AutoZoomMode.Disabled && (this.control.settings.zoomLevel = this.control.view.getZoom()), this.control.settings.autoZoom = e, !0) }, e
        }(r.SimpleCommandBase);
        e.SwitchAutoZoomCommand = l;
        var d = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this }
            return i(e, t), e.prototype.isEnabled = function() { return t.prototype.isEnabled.call(this) && !!this.control.render }, e.prototype.isEnabledInReadOnlyMode = function() { return !0 }, e.prototype.getValue = function() { return this.control.settings.autoZoom }, e.prototype.executeCore = function(t, e) { var n; return n = void 0 === e ? this.control.settings.autoZoom === s.AutoZoomMode.Disabled ? s.AutoZoomMode.FitContent : s.AutoZoomMode.Disabled : e ? s.AutoZoomMode.FitContent : s.AutoZoomMode.Disabled, this.control.settings.autoZoom !== n && (n || (this.control.settings.zoomLevel = this.control.view.getZoom()), this.control.settings.autoZoom = n, !0) }, e
        }(r.SimpleCommandBase);
        e.ToggleAutoZoomCommand = d
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(6),
            s = n(240),
            a = n(115),
            c = function(t) {
                function e() { return null !== t && t.apply(this, arguments) || this }
                return i(e, t), e.prototype.isEnabledInReadOnlyMode = function() { return !0 }, e.prototype.performImportData = function(t) {
                    var e = this.control.createDocumentDataSource(t.nodeDataSource, t.edgeDataSource, t.nodeDataImporter, t.edgeDataImporter),
                        n = t.layoutParameters ? new a.DataLayoutParameters(t.layoutParameters) : void 0;
                    this.control.history.beginTransaction(), r.ModelUtils.deleteAllItems(this.control.history, this.control.model, this.control.selection), this.createItems(e, n), this.control.history.endTransaction(), this.control.history.clear()
                }, e
            }(s.ImportDataCommandBase);
        e.BindDocumentCommand = c
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this }
            return i(e, t), e.prototype.executeCore = function(t, e) { if (!e || !Array.isArray(e.nodeDataSource)) throw Error("Format exception"); return this.performImportData(e), this.control.updateLayout(!0), !0 }, e.prototype.createItems = function(t, e) { t.createModelItems(this.control.history, this.control.model, this.control.selection, e, this.control.settings.snapToGrid, this.control.settings.gridSize) }, e
        }(n(7).SimpleCommandBase);
        e.ImportDataCommandBase = r
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(6),
            s = function(t) {
                function e() { return null !== t && t.apply(this, arguments) || this }
                return i(e, t), e.prototype.isEnabledInReadOnlyMode = function() { return !0 }, e.prototype.executeCore = function(t) { return this.control.deleteDocumentDataSource(), r.ModelUtils.deleteAllItems(this.control.history, this.control.model, this.control.selection), this.control.history.clear(), !0 }, e
            }(n(7).SimpleCommandBase);
        e.UnbindDocumentCommand = s
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(59),
            s = n(73),
            a = n(22),
            c = function(t) {
                function e() { return null !== t && t.apply(this, arguments) || this }
                return i(e, t), e.prototype.createLayoutSettings = function() {
                    var t = this.control.settings.snapToGrid ? this.control.settings.gridSize : void 0,
                        e = new a.TreeLayoutSettings(t);
                    return e.orientation = a.DataLayoutOrientation.Horizontal, e
                }, e.prototype.createLayout = function(t, e) { return new s.TreeLayoutBuilder(t, e).build() }, e
            }(r.AutoLayoutCommandBase);
        e.AutoLayoutTreeHorizontalCommand = c
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(59),
            s = n(61),
            a = n(22),
            c = function(t) {
                function e() { return null !== t && t.apply(this, arguments) || this }
                return i(e, t), e.prototype.createLayoutSettings = function() { var t = new a.LayoutSettings; return t.orientation = a.DataLayoutOrientation.Vertical, t }, e.prototype.createLayout = function(t, e) { return new s.SugiyamaLayoutBuilder(t, e).build() }, e
            }(r.AutoLayoutCommandBase);
        e.AutoLayoutLayeredVerticalCommand = c
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this }
            return i(e, t), e.prototype.getLockState = function() { return !0 }, e
        }(n(116).ChangeLockedCommand);
        e.LockCommand = r
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this }
            return i(e, t), e.prototype.getLockState = function() { return !1 }, e
        }(n(116).ChangeLockedCommand);
        e.UnLockCommand = r
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(19),
            s = n(6),
            a = function(t) {
                function e() { return null !== t && t.apply(this, arguments) || this }
                return i(e, t), e.prototype.isEnabled = function() { return t.prototype.isEnabled.call(this) && !this.control.selection.isEmpty() }, e.prototype.executeCore = function(t, e) { var n = r.DiagramModel.getRectangle(this.control.selection.getSelectedItems()); return s.ModelUtils.cloneSelectionToOffset(this.control.history, this.control.model, this.control.selection, this.getOffsetX(n), this.getOffsetY(n)), !0 }, e.prototype.getOffsetX = function(t) { return 0 }, e.prototype.getOffsetY = function(t) { return 0 }, e
            }(n(7).SimpleCommandBase);
        e.CloneCommand = a;
        var c = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this }
            return i(e, t), e.prototype.getOffsetX = function(t) { return -t.width }, e
        }(a);
        e.CloneLeftCommand = c;
        var u = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this }
            return i(e, t), e.prototype.getOffsetX = function(t) { return t.width }, e
        }(a);
        e.CloneRightCommand = u;
        var p = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this }
            return i(e, t), e.prototype.getOffsetY = function(t) { return -t.height }, e
        }(a);
        e.CloneUpCommand = p;
        var h = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this }
            return i(e, t), e.prototype.getOffsetY = function(t) { return t.height }, e
        }(a);
        e.CloneDownCommand = h
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(60),
            s = n(248),
            a = n(7),
            c = function(t) {
                function e() { return null !== t && t.apply(this, arguments) || this }
                return i(e, t), e.prototype.isEnabledInReadOnlyMode = function() { return !0 }, e.prototype.getValue = function() { return this.control.model.units }, e.prototype.createHistoryItems = function(t) { return [new s.ChangeUnitsHistoryItem(t)] }, e.prototype.getItems = function() { var t = this; return Object.keys(this.control.settings.unitItems).map(function(e) { return { value: parseInt(e), text: t.control.settings.unitItems[e] } }) }, e
            }(r.ChangePagePropertyCommand);
        e.ChangeUnitsCommand = c;
        var u = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this }
            return i(e, t), e.prototype.isEnabledInReadOnlyMode = function() { return !0 }, e.prototype.getValue = function() { return this.control.settings.viewUnits }, e.prototype.executeCore = function(t, e) { return this.control.settings.viewUnits = e, !0 }, e.prototype.getItems = function() { var t = this; return Object.keys(this.control.settings.unitItems).map(function(e) { return { value: parseInt(e), text: t.control.settings.unitItems[e] } }) }, e
        }(a.SimpleCommandBase);
        e.ChangeViewUnitsCommand = u
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = function(t) {
            function e() { var e = null !== t && t.apply(this, arguments) || this; return e.setValue = function(t, e) { return t.units = e }, e.getValue = function(t) { return t.units }, e }
            return i(e, t), e
        }(function(t) {
            function e(e) { var n = t.call(this) || this; return n.value = e, n }
            return i(e, t), e.prototype.redo = function(t) {
                var e = this;
                this.oldValue = this.getValue(t.model), t.changePageProperty(function(t) { return e.setValue(t, e.value) })
            }, e.prototype.undo = function(t) {
                var e = this;
                t.changePageProperty(function(t) { return e.setValue(t, e.oldValue) })
            }, e
        }(n(3).HistoryItem));
        e.ChangeUnitsHistoryItem = r
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(60),
            s = n(250),
            a = n(8),
            c = n(19),
            u = function(t) {
                function e() { return null !== t && t.apply(this, arguments) || this }
                return i(e, t), e.prototype.getValue = function() { return a.ColorHelper.colorToHash(this.control.model.pageColor) }, e.prototype.getDefaultValue = function() { return a.ColorHelper.colorToHash(c.DiagramModel.defaultPageColor) }, e.prototype.createHistoryItems = function(t) { return [new s.ChangePageColorHistoryItem(a.ColorHelper.stringToColor(t))] }, e
            }(r.ChangePagePropertyCommand);
        e.ChangePageColorCommand = u
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = function(t) {
            function e(e) { var n = t.call(this) || this; return n.value = e, n }
            return i(e, t), e.prototype.redo = function(t) { this.oldValue = t.model.pageColor, t.changePageColor(this.value) }, e.prototype.undo = function(t) { t.changePageColor(this.oldValue) }, e
        }(n(3).HistoryItem);
        e.ChangePageColorHistoryItem = r
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this }
            return i(e, t), e.prototype.isEnabledInReadOnlyMode = function() { return !0 }, e.prototype.executeCore = function(t, e) { var n = void 0 === e ? !this.control.settings.showGrid : !!e; return this.control.settings.showGrid !== n && (this.control.settings.showGrid = n, !0) }, e.prototype.getValue = function() { return this.control.settings.showGrid }, e
        }(n(7).SimpleCommandBase);
        e.ChangeShowGridCommand = r
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this }
            return i(e, t), e.prototype.isEnabledInReadOnlyMode = function() { return !0 }, e.prototype.getValue = function() { return this.control.settings.fullscreen }, e.prototype.executeCore = function(t, e) { var n = "boolean" == typeof e ? e : !t.value; return this.control.settings.fullscreen !== n && (this.control.settings.fullscreen = !t.value, this.control.notifyToggleFullscreen(this.control.settings.fullscreen)), !0 }, e
        }(n(7).SimpleCommandBase);
        e.ToggleFullscreenCommand = r
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this }
            return i(e, t), e.prototype.isEnabledInReadOnlyMode = function() { return !0 }, e.prototype.getValue = function() { return this.control.settings.simpleView }, e.prototype.executeCore = function(t, e) { return "boolean" == typeof e ? this.control.settings.simpleView = e : void 0 === e && (this.control.settings.simpleView = !t.value), this.control.updateLayout(!0), !0 }, e
        }(n(7).SimpleCommandBase);
        e.ToggleSimpleViewCommand = r
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this }
            return i(e, t), e.prototype.isEnabledInReadOnlyMode = function() { return !0 }, e.prototype.getValue = function() { return this.control.settings.readOnly }, e.prototype.executeCore = function(t, e) { return "boolean" == typeof e ? this.control.settings.readOnly = e : void 0 === e && (this.control.settings.readOnly = !t.value), !0 }, e
        }(n(7).SimpleCommandBase);
        e.ToggleReadOnlyCommand = r
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this }
            return i(e, t), e.prototype.isEnabled = function() { var e = this.getSelectedShape(); return t.prototype.isEnabled.call(this) && !e.image.isEmpty }, e
        }(n(77).EditShapeImageCommandBase);
        e.EditShapeImageCommand = r
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(114),
            s = n(11),
            a = n(5),
            c = function(t) {
                function e() { return null !== t && t.apply(this, arguments) || this }
                return i(e, t), e.prototype.calculateSelectionOffset = function(t, e) {
                    var n = t.reduce(function(t, e) { return { x: Math.min(t.x, e instanceof s.Shape ? e.position.x : e instanceof a.Connector ? e.getMinX() : Number.MAX_VALUE), y: Math.min(t.y, e instanceof s.Shape ? e.position.y : e instanceof a.Connector ? e.getMinY() : Number.MAX_VALUE) } }, { x: Number.MAX_VALUE, y: Number.MAX_VALUE }),
                        o = this.control.render.getModelPointByEventPoint(e.x, e.y);
                    this.offsetX = o.x - n.x, this.offsetY = o.y - n.y
                }, e.prototype.getShapeNewPosition = function(t) { var e = t.offset(this.offsetX, this.offsetY); return r.PasteSelectionCommandBase.getShapeNewPosition(this.control.model, e) }, e.prototype.changeConnectorPoints = function(t) {
                    var e = this;
                    t.points.forEach(function(t) { t.x += e.offsetX, t.y += e.offsetY }), r.PasteSelectionCommandBase.changeConnectorPoints(this.control.model, t)
                }, e
            }(r.PasteSelectionCommandBase);
        e.PasteSelectionInPositionCommand = c
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(258),
            s = function(t) {
                function e() { return null !== t && t.apply(this, arguments) || this }
                return i(e, t), e.prototype.executeCore = function(t, e) { var n = new r.XmlImporter(e).import(); return this.control.importModel(n), !0 }, e
            }(n(47).ExportImportCommandBase);
        e.ImportXMLCommand = s
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(5),
            s = n(11),
            a = n(106),
            c = n(8),
            u = n(1),
            p = n(25),
            h = n(0),
            l = n(71),
            d = n(38),
            f = function(t) {
                function e(e) { var n = t.call(this) || this; return n.doc = l.ImportUtils.createDocument(e), n }
                return i(e, t), e.prototype.getObject = function() { return this.doc }, e.prototype.getPageObject = function(t) { var e = this.doc.querySelectorAll("[ItemKind='DiagramRoot']"); return e && e[0] }, e.prototype.getShapeObjects = function(t) { var e = []; return this.doc.querySelectorAll("[ItemKind='DiagramRoot'] > Children > [ItemKind='DiagramShape']").forEach(function(t) { e.push(t) }), this.doc.querySelectorAll("[ItemKind='DiagramRoot'] > Children > [ItemKind='DiagramContainer']").forEach(function(t) { e.push(t) }), e }, e.prototype.getConnectorObjects = function(t) { var e = []; return this.doc.querySelectorAll("[ItemKind='DiagramRoot'] > Children > [ItemKind='DiagramConnector']").forEach(function(t) { e.push(t) }), e }, e.prototype.importPageSettings = function(t, e) {
                    if (e) {
                        var n = e.getAttribute("PageSize"),
                            o = this.getSize(n);
                        o && (t.size = o.clone(), t.pageSize = o.clone())
                    }
                }, e.prototype.importShape = function(t) {
                    var e = t.getAttribute("Position"),
                        n = this.getPoint(e),
                        o = t.getAttribute("Shape"),
                        i = this.getShapeType(o),
                        r = p.ShapeDescriptionManager.get(i),
                        a = new s.Shape(r || p.ShapeDescriptionManager.get(u.ShapeTypes.Rectangle), n);
                    a.key = this.getItemKey(t);
                    var c = t.getAttribute("Size"),
                        h = this.getSize(c);
                    h && (a.size = h);
                    var l = t.getAttribute("Content");
                    if ("string" == typeof l) a.text = l;
                    else { var d = t.getAttribute("Header"); "string" == typeof d && (a.text = d) }
                    return this.importStyle(t, a), a
                }, e.prototype.importShapeChildren = function(t, e) {
                    var n = [];
                    t.setAttribute("dxDiagram", ""), this.doc.querySelectorAll("[dxDiagram] > Children > [ItemKind='DiagramShape']").forEach(function(t) { n.push(t) }), this.doc.querySelectorAll("[dxDiagram] > Children > [ItemKind='DiagramContainer']").forEach(function(t) { n.push(t) }), t.removeAttribute("dxDiagram");
                    var o = [];
                    if (!n) return o;
                    for (var i = 0; i < n.length; i++) {
                        var r = n[i],
                            s = this.importShape(r);
                        s.key = e.key + "," + s.key;
                        var a = e.clientRectangle;
                        s.position = s.position.offset(a.left, a.top), e.childKeys.push(s.key), o.push(s), o = o.concat(this.importShapeChildren(r, s))
                    }
                    return o
                }, e.prototype.importConnector = function(t) {
                    var e = this,
                        n = [],
                        o = t.getAttribute("BeginPoint"),
                        i = this.getPoint(o);
                    i && n.push(i), t.getAttribute("Points").split(" ").forEach(function(t) {
                        var o = e.getPoint(t);
                        o && n.push(o)
                    });
                    var s = t.getAttribute("EndPoint"),
                        a = this.getPoint(s);
                    a && n.push(a);
                    var c = new r.Connector(n);
                    c.key = this.getItemKey(t);
                    var u = t.getAttribute("EndItemPointIndex"),
                        p = parseInt(u);
                    c.endConnectionPointIndex = isNaN(p) ? -1 : p;
                    var h = t.getAttribute("BeginItemPointIndex"),
                        l = parseInt(h);
                    c.beginConnectionPointIndex = isNaN(l) ? -1 : l;
                    var d = t.getAttribute("EndItem");
                    void 0 !== d && this.assert(d, "string");
                    var f = t.getAttribute("BeginItem");
                    void 0 !== f && this.assert(f, "string"), c.endItemKey = d, c.beginItemKey = f;
                    var y = t.getAttribute("Content");
                    return "string" == typeof y && c.setText(y), this.importStyle(t, c), c
                }, e.prototype.importStyle = function(t, e) { var n = t.getAttribute("Background"); "string" == typeof n && (e.style.fill = this.getColor(n)); var o = t.getAttribute("Stroke"); "string" == typeof o && (e.style.stroke = this.getColor(o)); var i = t.getAttribute("Foreground"); "string" == typeof i && (e.styleText.fill = this.getColor(i)); var r = t.getAttribute("FontFamily"); "string" == typeof r && (e.styleText["font-family"] = r); var s = t.getAttribute("FontSize"); "string" == typeof s && (e.styleText["font-size"] = s), "Bold" === t.getAttribute("FontWeight") && (e.styleText["font-weight"] = "bold"), "Italic" === t.getAttribute("FontStyle") && (e.styleText["font-style"] = "italic"), "Underline" === t.getAttribute("TextDecorations") && (e.styleText["text-decoration"] = "underline"); var a = t.getAttribute("TextAlignment"); "Left" === a ? e.styleText["text-anchor"] = "start" : "Right" === a ? e.styleText["text-anchor"] = "end" : "Right" === a && (e.styleText["text-anchor"] = "middle") }, e.prototype.getShapeType = function(t) { return e.shapeTypes[t] ? e.shapeTypes[t] : t && t.toLowerCase().indexOf("container") > -1 ? u.ShapeTypes.VerticalContainer : u.ShapeTypes.Rectangle }, e.prototype.getItemKey = function(t) { return (parseInt(t.tagName.replace("Item", "")) - 1).toString() }, e.prototype.getNumbers = function(t) { var e = t.split(","); return e && e.length ? e.map(function(t) { return +t }) : [] }, e.prototype.getSize = function(t) { if (t) { var e = this.getNumbers(t); if (e.length >= 2) return this.assert(e[0], "number"), this.assert(e[1], "number"), new h.Size(c.UnitConverter.pixelsToTwips(e[0]), c.UnitConverter.pixelsToTwips(e[1])) } }, e.prototype.getPoint = function(t) { if (t) { var e = this.getNumbers(t); if (e.length >= 2) return this.assert(e[0], "number"), this.assert(e[1], "number"), new h.Point(c.UnitConverter.pixelsToTwips(e[0]), c.UnitConverter.pixelsToTwips(e[1])) } }, e.prototype.getColor = function(t) { t = "#" == t.charAt(0) ? t.substr(1) : t; var e = parseInt(t, 16); return isNaN(e) ? void 0 : d.ColorHelper.colorToHash(e) }, e.shapeTypes = { "BasicShapes.Rectangle": u.ShapeTypes.Rectangle, "BasicShapes.Ellipse": u.ShapeTypes.Ellipse, "BasicShapes.Triangle": u.ShapeTypes.Triangle, "BasicShapes.Pentagon": u.ShapeTypes.Pentagon, "BasicShapes.Hexagon": u.ShapeTypes.Hexagon, "BasicShapes.Octagon": u.ShapeTypes.Octagon, "BasicShapes.Diamond": u.ShapeTypes.Diamond, "BasicShapes.Cross": u.ShapeTypes.Cross, "BasicShapes.Star5": u.ShapeTypes.Star, "BasicFlowchartShapes.StartEnd": u.ShapeTypes.Terminator, "BasicFlowchartShapes.Data": u.ShapeTypes.Data, "BasicFlowchartShapes.Database": u.ShapeTypes.Database, "BasicFlowchartShapes.ExternalData": u.ShapeTypes.StoredData, "BasicFlowchartShapes.Process": u.ShapeTypes.Process, "BasicFlowchartShapes.Decision": u.ShapeTypes.Decision, "BasicFlowchartShapes.Subprocess": u.ShapeTypes.PredefinedProcess, "BasicFlowchartShapes.Document": u.ShapeTypes.Document, "BasicFlowchartShapes.Custom1": u.ShapeTypes.ManualInput, "BasicFlowchartShapes.Custom2": u.ShapeTypes.ManualOperation, "ArrowShapes.SimpleArrow": u.ShapeTypes.ArrowLeft, "ArrowShapes.SimpleDoubleArrow": u.ShapeTypes.ArrowEastWest }, e
            }(a.ImporterBase);
        e.XmlImporter = f
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this }
            return i(e, t), e.prototype.isEnabled = function() { var e = this.getSelectedShape(); return t.prototype.isEnabled.call(this) && e.image.isEmpty }, e
        }(n(77).EditShapeImageCommandBase);
        e.InsertShapeImageCommand = r
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this }
            return i(e, t), e.prototype.isEnabled = function() { var e = this.getSelectedShape(); return t.prototype.isEnabled.call(this) && !e.image.isEmpty }, e.prototype.executeCore = function(e, n) { return t.prototype.executeCore.call(this, e, void 0) }, e
        }(n(77).EditShapeImageCommandBase);
        e.DeleteShapeImageCommand = r
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = n(262),
            i = n(48),
            r = n(263),
            s = n(19),
            a = n(292),
            c = n(294),
            u = n(295),
            p = n(12),
            h = n(25),
            l = n(296),
            d = n(35),
            f = n(300),
            y = n(6),
            m = n(301),
            g = n(8),
            v = n(304),
            P = function() {
                function t() { this.processDataChangesNeeded = !1, this.settings = new d.DiagramSettings, this.model = new s.DiagramModel, this.selection = new a.Selection(this.model), this.modelManipulator = new o.ModelManipulator(this.model), this.history = new c.History(this.modelManipulator), this.onNativeAction = new g.EventDispatcher, this.view = new f.ViewController(this.settings), this.commandManager = new i.CommandManager(this), this.barManager = new u.BarManager(this), this.eventManager = new r.EventManager(this), this.selection.onChanged.add(this.barManager), this.selection.onChanged.add(this), this.modelManipulator.onLoad(), this.history.onChanged.add(this), this.toolboxManager = new m.ToolboxManager(this.settings.readOnly), this.settings.onReadOnlyChanged.add(this.toolboxManager), this.apiController = new v.ApiController(this.onNativeAction, this.selection, this.model) }
                return t.prototype.dispose = function() { this.toolboxManager.dispose(), this.render && this.render.dispose() }, t.prototype.createDocument = function(t) { this.render ? this.render.replaceParent(t) : (this.render = new p.RenderManager(t, this.eventManager, { pageColor: this.model.pageColor, modelSize: this.model.size, pageLandscape: this.model.pageLandscape, pageSize: this.model.pageSize, simpleView: this.settings.simpleView, readOnly: this.settings.readOnly, gridSize: this.settings.gridSize, gridVisible: this.settings.showGrid, zoomLevel: this.settings.zoomLevel, autoZoom: this.settings.autoZoom, rectangle: this.model.getRectangle(!0) }), this.settings.onZoomChanged.add(this.render.view), this.settings.onViewChanged.add(this.render.page), this.settings.onViewChanged.add(this.render.view), this.settings.onReadOnlyChanged.add(this.eventManager.mouseHandler), this.settings.onReadOnlyChanged.add(this.eventManager.visualizersManager), this.settings.onReadOnlyChanged.add(this.render), this.settings.onReadOnlyChanged.add(this.render.selection), this.eventManager.onTextInputOperation.add(this.render.input), this.eventManager.onTextInputOperation.add(this.render.items), this.eventManager.onTextInputOperation.add(this.render.selection), this.eventManager.onMouseOperation.add(this.render.items), this.eventManager.onMouseOperation.add(this.render.selection), this.eventManager.onMouseOperation.add(this.render.view), this.eventManager.onMouseOperation.add(this.render), this.eventManager.onVisualizersUpdate.add(this.render.selection), this.modelManipulator.onModelSizeChanged.add(this.render.view), this.modelManipulator.onModelSizeChanged.add(this.render.page), this.modelManipulator.onModelChanged.add(this.render.items), this.modelManipulator.onModelChanged.add(this.render.page), this.modelManipulator.onModelChanged.add(this.render.selection), this.selection.onChanged.add(this.render.selection), this.render.update(!1), this.modelManipulator.onLoad(), this.view.initialize(this.render.view), this.selection.onLoad()) }, t.prototype.createToolbox = function(t, e, n, o, i, r) {
                    var s = this.toolboxManager.create(t, e, n, o, i, r);
                    this.settings.onReadOnlyChanged.add(s), s.onDragOperation.add(this), this.eventManager.registerToolbox(s)
                }, t.prototype.applyToolboxFilter = function(t, e) { return this.toolboxManager.applyFilter(t, e) }, t.prototype.updateLayout = function(t) { void 0 === t && (t = !1), this.render && this.render.update(!t) }, t.prototype.captureFocus = function() { this.render && this.render.input.captureFocus() }, t.prototype.isFocused = function() { return !this.render || this.render.input.isFocused() }, t.prototype.addCustomShapes = function(t) {
                    var e = this;
                    t.forEach(function(t) { t.defaultWidth && (t.defaultWidth = y.ModelUtils.getTwipsValue(e.model.units, t.defaultWidth)), t.defaultHeight && (t.defaultHeight = y.ModelUtils.getTwipsValue(e.model.units, t.defaultHeight)), h.ShapeDescriptionManager.registerCustomShape(t) })
                }, t.prototype.removeCustomShapes = function(t) { t.forEach(function(t) { h.ShapeDescriptionManager.unregisterCustomShape(t) }) }, t.prototype.importModel = function(t) { this.model = t, this.apiController.model = t, this.importData() }, t.prototype.importItemsData = function() { this.model.invalidateItems(), this.importData() }, t.prototype.importData = function() { this.render && this.render.clear(), this.selection.initialize(this.model), this.modelManipulator.load(this.model), this.history.clear(), this.eventManager.initialize(), this.modelManipulator.onLoad() }, t.prototype.createDocumentDataSource = function(t, e, n, o) { return this.documentDataSource = new l.DocumentDataSource(this, t, e, n, o), this.documentDataSource }, t.prototype.deleteDocumentDataSource = function() { delete this.documentDataSource }, t.prototype.beginUpdate = function(t) { this.barManager.beginUpdate(), t && this.render && this.render.items.beginUpdate(), this.apiController.beginUpdate() }, t.prototype.endUpdate = function(t) { t && this.render && this.render.items.endUpdate(), this.barManager.endUpdate(), this.apiController.endUpdate() }, t.prototype.notifyEdgeInserted = function(t, e, n) { this.onEdgeInserted && this.onEdgeInserted(t, e, n) }, t.prototype.notifyEdgeUpdated = function(t, e, n, o) { this.onEdgeUpdated && this.onEdgeUpdated(t, e, n, o) }, t.prototype.notifyEdgeRemoved = function(t, e, n, o) { this.onEdgeUpdated && this.onEdgeRemoved(t, e, n, o) }, t.prototype.notifyNodeInserted = function(t, e, n) { this.onNodeInserted && this.onNodeInserted(t, e, n) }, t.prototype.notifyNodeUpdated = function(t, e, n, o) { this.onNodeUpdated && this.onNodeUpdated(t, e, n, o) }, t.prototype.notifyNodeRemoved = function(t, e, n, o) { this.onNodeRemoved && this.onNodeRemoved(t, e, n, o) }, t.prototype.notifySelectionChanged = function(t) { this.apiController.onSelectionChanged() }, t.prototype.checkProcessDataChanges = function() { this.documentDataSource.isUpdateLocked() ? this.processDataChangesNeeded = !0 : this.processDataChanges() }, t.prototype.processDataChanges = function(t) { void 0 === t && (t = !0), (t || this.processDataChangesNeeded) && (this.documentDataSource.updateItemsByModel(this.model), this.processDataChangesNeeded = !1), this.documentDataSource.isUpdateLocked() || this.raiseOnChanged() }, t.prototype.notifyHistoryChanged = function() { this.settings.readOnly || (this.documentDataSource ? this.checkProcessDataChanges() : this.raiseOnChanged()) }, t.prototype.raiseOnChanged = function() { this.onChanged && this.onChanged() }, t.prototype.notifyToolboxDragStart = function() { this.onToolboxDragStart && this.onToolboxDragStart() }, t.prototype.notifyToolboxDragEnd = function() { this.onToolboxDragEnd && this.onToolboxDragEnd() }, t.prototype.notifyToggleFullscreen = function(t) { this.onToggleFullscreen && this.onToggleFullscreen(t) }, t.prototype.notifyShowContextMenu = function(t, e) {
                    if (this.onShowContextMenu && this.render) {
                        var n = void 0;
                        if (this.selection.getSelectedItems(!0).length > 0) {
                            var o = s.DiagramModel.getRectangle(this.selection.getSelectedItems(!0)),
                                i = this.render.getEventPointByModelPoint(o.position),
                                r = this.render.view.getAbsoluteSize(o.size);
                            n = { x: i.x, y: i.y, width: r.width, height: r.height }
                        }
                        if (t) this.onShowContextMenu(t.x, t.y, n);
                        else if (e) {
                            var a = this.render.getEventPointByModelPoint(e);
                            this.onShowContextMenu(a.x, a.y, n)
                        }
                    }
                }, t.prototype.notifyHideContextMenu = function() { this.onHideContextMenu && this.render && this.onHideContextMenu() }, t
            }();
        e.DiagramControl = P
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = n(83),
            i = n(0),
            r = n(5),
            s = n(49),
            a = n(100),
            c = function() {
                function t(t) { this.onModelChanged = new i.EventDispatcher, this.onModelSizeChanged = new i.EventDispatcher, this.model = t, this.imageLoader = new a.ImageLoader(this.updateShapeImage.bind(this)) }
                return t.prototype.load = function(t) { this.model = t, this.model.loadAllImages(this.imageLoader), this.updateModelSize(), this.raisePageSizeChanged(t.pageSize.clone(), t.pageLandscape), this.raiseModelSizeChanged(t.size.clone()), this.raisePageColorChanged(t.pageColor), this.raiseModelRectangleChanged(i.GeometryUtils.getCommonRectangle(t.items.map(function(t) { return t.rectangle }))) }, t.prototype.onLoad = function() {
                    var t = [];
                    this.model.iterateItems(function(e) { t.push(new o.ItemChange(e, o.ItemChangeType.Create)) }), this.raiseModelChanged(t)
                }, t.prototype.insertToContainer = function(t, e) {
                    if (t.container && e && t.container.key !== e.key) throw Error("To insert an item to a container it's necessary to remove it from the current container.");
                    e && (e.childKeys.push(t.key), t.container = e, this.raiseModelChanged([new o.ItemChange(t, o.ItemChangeType.Update)]))
                }, t.prototype.removeFromContainer = function(t) {
                    if (t.container) {
                        var e = t.container.childKeys.indexOf(t.key);
                        t.container.childKeys.splice(e, 1), t.container = void 0, this.raiseModelChanged([new o.ItemChange(t, o.ItemChangeType.Update)])
                    }
                }, t.prototype.changeStyle = function(t, e, n) { this.changeStyleCore(t, t.style, e, n) }, t.prototype.changeStyleText = function(t, e, n) { this.changeStyleCore(t, t.styleText, e, n) }, t.prototype.changeStyleCore = function(t, e, n, i) { void 0 !== i ? e[n] = i : delete e[n], t.invalidatePrimitives(), this.raiseModelChanged([new o.ItemChange(t, o.ItemChangeType.Update)]) }, t.prototype.changeZIndex = function(t, e) { t.zIndex = e, this.raiseModelChanged([new o.ItemChange(t, o.ItemChangeType.Update)]) }, t.prototype.changeLocked = function(t, e) { t.locked = e, this.raiseModelChanged([new o.ItemChange(t, o.ItemChangeType.Update)]) }, t.prototype.changeContainerLocked = function(t, e) { t.containerLocked = e, this.raiseModelChanged([new o.ItemChange(t, o.ItemChangeType.Update)]) }, t.prototype.addShape = function(t, e) { if (t.attachedConnectors.length) throw Error("A creating shape should not contain existing connectors."); return t.key = void 0 !== e ? e : this.model.getNextKey(), this.insertShape(t) }, t.prototype.insertShape = function(t) { return this.model.pushItem(t), this.raiseModelChanged([new o.ItemChange(t, o.ItemChangeType.Create)]), this.model.loadAllImages(this.imageLoader), t }, t.prototype.resizeShape = function(t, e, n) { t.position = e, t.size = n, t.invalidatePrimitives(), this.raiseModelChanged([new o.ItemChange(t, o.ItemChangeType.Update)]) }, t.prototype.moveShape = function(t, e) { t.position = e, t.invalidatePrimitives(), this.raiseModelChanged([new o.ItemChange(t, o.ItemChangeType.Update)]) }, t.prototype.changeShapeParameters = function(t, e) {
                    t.parameters.forEach(function(t) {
                        var n = e.get(t.key);
                        n && (t.value = n.value)
                    }), t.invalidatePrimitives(), this.raiseModelChanged([new o.ItemChange(t, o.ItemChangeType.Update)])
                }, t.prototype.changeShapeText = function(t, e) { t.text = e, t.invalidatePrimitives(), this.raiseModelChanged([new o.ItemChange(t, o.ItemChangeType.UpdateStructure)]) }, t.prototype.changeShapeImage = function(t, e) {
                    t.image = e;
                    var n = s.ImageCache.instance.createUnloadedInfoByShapeImageInfo(e);
                    this.imageLoader.load(n), t.invalidatePrimitives(), this.raiseModelChanged([new o.ItemChange(t, o.ItemChangeType.UpdateStructure)])
                }, t.prototype.changeShapeExpanded = function(t, e) { t.expanded = e, t.toggleExpandedSize(), t.invalidatePrimitives(), this.raiseModelChanged([new o.ItemChange(t, o.ItemChangeType.UpdateStructure)]) }, t.prototype.deleteShape = function(t) {
                    if (t.attachedConnectors.length) throw Error("A removing shape should not contain existing connectors.");
                    this.removeShape(t)
                }, t.prototype.removeShape = function(t) { this.model.removeItem(t), this.raiseModelChanged([new o.ItemChange(t, o.ItemChangeType.Remove)]) }, t.prototype.updateShapeImage = function(t) {
                    if (t.imageUrl) {
                        var e = this.model.findShapesByImageUrl(t.imageUrl),
                            n = [];
                        e.forEach(function(e) { t.base64 ? e.image.loadBase64Content(t.base64) : e.image.setUnableToLoadFlag(), e.invalidatePrimitives(), n.push(new o.ItemChange(e, o.ItemChangeType.UpdateStructure)) }), n.length > 0 && this.raiseModelChanged(n)
                    }
                }, t.prototype.addConnector = function(t, e) { if (t.beginItem || t.endItem) throw Error("Creating connector should not contain begin/end items"); return t.key = void 0 !== e ? e : this.model.getNextKey(), this.insertConnector(t) }, t.prototype.insertConnector = function(t) { return this.model.pushItem(t), t.invalidateRenderPoints(), this.raiseModelChanged([new o.ItemChange(t, o.ItemChangeType.Create)]), t }, t.prototype.deleteConnector = function(t) {
                    if (t.beginItem || t.endItem) throw Error("Creating connector should not contain begin/end items");
                    this.removeConnector(t)
                }, t.prototype.removeConnector = function(t) { this.model.removeItem(t), this.raiseModelChanged([new o.ItemChange(t, o.ItemChangeType.Remove)]) }, t.prototype.moveConnectorPoint = function(t, e, n) { t.points[e] = n, t.invalidateRenderPoints(), this.raiseModelChanged([new o.ItemChange(t, o.ItemChangeType.UpdateStructure)]) }, t.prototype.addConnectorPoint = function(t, e, n) { t.points.splice(e, 0, n), t.invalidateRenderPoints(), this.raiseModelChanged([new o.ItemChange(t, o.ItemChangeType.UpdateStructure)]) }, t.prototype.deleteConnectorPoint = function(t, e) { t.points.splice(e, 1), t.invalidateRenderPoints(), this.raiseModelChanged([new o.ItemChange(t, o.ItemChangeType.UpdateStructure)]) }, t.prototype.addConnection = function(t, e, n, i) {
                    var s = t.getExtremeItem(i),
                        a = t.getExtremeConnectionPointIndex(i);
                    if (s !== e || a !== n) {
                        if (s) throw Error("Connector is already connected");
                        e.attachedConnectors.push(t), i === r.ConnectorPosition.Begin ? (t.beginItem = e, t.beginConnectionPointIndex = n) : (t.endItem = e, t.endConnectionPointIndex = n), t.invalidateRenderPoints(), this.raiseModelChanged([new o.ItemChange(t, o.ItemChangeType.UpdateStructure)])
                    }
                }, t.prototype.setConnectionPointIndex = function(t, e, n) {
                    if (!t.getExtremeItem(n)) throw Error("Connection should be connected");
                    n === r.ConnectorPosition.Begin ? t.beginConnectionPointIndex = e : t.endConnectionPointIndex = e, t.invalidateRenderPoints(), this.raiseModelChanged([new o.ItemChange(t, o.ItemChangeType.UpdateStructure)])
                }, t.prototype.deleteConnection = function(t, e) {
                    var n = t.getExtremeItem(e);
                    n && (n.attachedConnectors.splice(n.attachedConnectors.indexOf(t), 1), e === r.ConnectorPosition.Begin ? (t.beginItem = null, t.beginConnectionPointIndex = -1) : (t.endItem = null, t.endConnectionPointIndex = -1), t.invalidateRenderPoints(), this.raiseModelChanged([new o.ItemChange(t, o.ItemChangeType.UpdateStructure)]))
                }, t.prototype.changeConnectorProperty = function(t, e, n) { t.properties[e] = n, t.invalidateRenderPoints(), this.raiseModelChanged([new o.ItemChange(t, o.ItemChangeType.UpdateStructure)]) }, t.prototype.changeConnectorText = function(t, e, n) { t.setText(e, n), t.invalidatePrimitives(), this.raiseModelChanged([new o.ItemChange(t, o.ItemChangeType.UpdateStructure)]) }, t.prototype.changeConnectorTextPosition = function(t, e, n) {
                    var i = t.getText(e);
                    t.setText(null, e), t.setText(i, n), t.invalidatePrimitives(), this.raiseModelChanged([new o.ItemChange(t, o.ItemChangeType.Update)])
                }, t.prototype.changeModelSize = function(t, e) { this.model.size.width = t.width, this.model.size.height = t.height, this.raiseModelSizeChanged(this.model.size.clone(), e), (e.left || e.top) && (this.model.snapStartPoint = this.model.snapStartPoint.offset(e.left, e.top), this.raiseSnapPointChange(this.model.snapStartPoint)) }, t.prototype.changePageSize = function(t) { this.model.pageSize.equals(t) || (this.model.pageSize = t, this.model.size = new i.Size(this.model.pageWidth, this.model.pageHeight), this.raiseModelSizeChanged(this.model.size.clone()), this.raisePageSizeChanged(this.model.pageSize, this.model.pageLandscape)) }, t.prototype.changePageLandscape = function(t) { this.model.pageLandscape !== t && (this.model.pageLandscape = t, this.model.pageSize.width !== this.model.pageSize.height && (this.model.size = new i.Size(this.model.pageWidth, this.model.pageHeight), this.raiseModelSizeChanged(this.model.size.clone()), this.raisePageSizeChanged(this.model.pageSize, this.model.pageLandscape))) }, t.prototype.changePageColor = function(t) { this.model.pageColor !== t && (this.model.pageColor = t, this.raisePageColorChanged(t)) }, t.prototype.changePageProperty = function(t) { t(this.model) }, t.prototype.getModelSizeUpdateOffset = function() {
                    var t = this.model.getRectangle(!1),
                        e = this.model.getRectangle(!0);
                    e.equals(t) || this.raiseModelRectangleChanged(e);
                    var n = -Math.floor(e.left / this.model.pageWidth),
                        o = -Math.floor(e.top / this.model.pageHeight),
                        r = -Math.floor((this.model.size.width - e.right) / this.model.pageWidth),
                        s = -Math.floor((this.model.size.height - e.bottom) / this.model.pageHeight);
                    return new i.Offset(n * this.model.pageWidth, o * this.model.pageHeight, r * this.model.pageWidth, s * this.model.pageHeight)
                }, t.prototype.updateModelSize = function() {
                    var t = this.getModelSizeUpdateOffset();
                    if (!t.isEmpty()) {
                        var e = Math.max(this.model.size.width + t.left + t.right, this.model.pageWidth),
                            n = Math.max(this.model.size.height + t.top + t.bottom, this.model.pageHeight);
                        this.model.size = new i.Size(e, n)
                    }
                }, t.prototype.raiseModelChanged = function(t) { this.onModelChanged.raise1(function(e) { return e.notifyModelChanged(t) }) }, t.prototype.raisePageColorChanged = function(t) { this.onModelChanged.raise1(function(e) { return e.notifyPageColorChanged(t) }) }, t.prototype.raisePageSizeChanged = function(t, e) { this.onModelChanged.raise1(function(n) { return n.notifyPageSizeChanged(t, e) }) }, t.prototype.raiseModelSizeChanged = function(t, e) { this.onModelSizeChanged.raise1(function(n) { return n.notifyModelSizeChanged(t, e) }) }, t.prototype.raiseModelRectangleChanged = function(t) { this.onModelSizeChanged.raise1(function(e) { return e.notifyModelRectangleChanged(t) }) }, t.prototype.raiseSnapPointChange = function(t) { this.onModelSizeChanged.raise1(function(e) { return e.notifySnapPointPositionChanged(t) }) }, t
            }();
        e.ModelManipulator = c
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = n(264),
            i = n(0),
            r = n(283),
            s = n(125),
            a = n(8),
            c = n(285),
            u = n(126),
            p = n(291),
            h = function() {
                function t(t) { this.onMouseOperation = new i.EventDispatcher, this.onTextInputOperation = new i.EventDispatcher, this.toolboxes = [], this.control = t, this.visualizersManager = a.Browser.TouchUI ? new p.VisualizerTouchManager(t.selection, t.model, this, t.settings) : new u.VisualizerManager(t.selection, t.model, this, t.settings), this.onMouseOperation.add(this.visualizersManager), this.mouseHandler = new o.MouseHandler(t.history, t.selection, t.model, this, t.settings.readOnly, t.view, this.visualizersManager, t.settings, t.barManager, t.onNativeAction), this.textInputHandler = new r.TextInputHandler(t), this.contextMenuHandler = a.Browser.TouchUI ? new c.ContextMenuTouchHandler(t.selection) : new s.ContextMenuHandler, this.contextMenuHandler.onVisibilityChanged.add(t), this.onMouseOperation.add(this.contextMenuHandler) }
                return Object.defineProperty(t.prototype, "onVisualizersUpdate", { get: function() { return this.visualizersManager.onVisualizersUpdate }, enumerable: !0, configurable: !0 }), t.prototype.registerToolbox = function(t) { this.toolboxes.push(t) }, t.prototype.initialize = function() { this.visualizersManager.initialize(this.control.model), this.mouseHandler.initialize(this.control.model) }, t.prototype.onMouseDown = function(t) { this.mouseHandler.onMouseDown(t), this.contextMenuHandler.onMouseDown(t), this.visualizersManager.onMouseDown(t) }, t.prototype.onMouseMove = function(t) { this.processDragging(t), this.mouseHandler.onMouseMove(t) }, t.prototype.onMouseUp = function(t) { this.mouseHandler.onMouseUp(t), this.contextMenuHandler.onMouseUp(t), this.visualizersManager.onMouseUp(t), this.processDragging(t) }, t.prototype.onMouseEnter = function(t) { this.visualizersManager.onMouseEnter(t) }, t.prototype.onMouseLeave = function(t) { this.visualizersManager.onMouseLeave(t) }, t.prototype.onDblClick = function(t) { this.mouseHandler.onMouseDblClick(t), this.textInputHandler.onDblClick(t) }, t.prototype.onClick = function(t) { this.mouseHandler.onMouseClick(t) }, t.prototype.onContextMenu = function(t) { this.contextMenuHandler.onContextMenu(t) }, t.prototype.onLongTouch = function(t) { this.mouseHandler.onLongTouch(t), this.contextMenuHandler.onLongTouch(t) }, t.prototype.onBlur = function(t) { this.contextMenuHandler.onBlur(t), this.visualizersManager.onBlur(t) }, t.prototype.onFocus = function(t) { this.contextMenuHandler.onFocus(t), this.visualizersManager.onFocus(t) }, t.prototype.onKeyDown = function(t) {
                    var e = t.getShortcutCode();
                    this.onShortcut(e) && (this.visualizersManager.updateConnectionPoints(), t.preventDefault = !0)
                }, t.prototype.onTextInputBlur = function(t) { this.textInputHandler.onBlur(t), this.contextMenuHandler.onTextInputBlur(t) }, t.prototype.onTextInputFocus = function(t) { this.textInputHandler.onFocus(t), this.contextMenuHandler.onTextInputFocus(t) }, t.prototype.onTextInputKeyDown = function(t) { this.textInputHandler.onKeyDown(t) }, t.prototype.onShortcut = function(t) { return !!this.control.commandManager.processShortcut(t) || (!!this.mouseHandler.onShortcut(t) || void 0) }, t.prototype.onPaste = function(t) {!this.textInputHandler.isTextInputActive() && this.control.commandManager.processPaste(t.clipboardData) && (this.visualizersManager.updateConnectionPoints(), t.preventDefault = !0) }, t.prototype.onMouseWheel = function(t) { this.mouseHandler.onWheel(t) && (t.preventDefault = !0) }, t.prototype.isFocused = function() { return this.control.isFocused() }, t.prototype.processDragging = function(t) {
                    var e = this.getDraggingEvent();
                    e && !this.draggingEvent ? (this.draggingEvent = e, this.mouseHandler.onDragStart(this.draggingEvent), this.control.captureFocus()) : !e && this.draggingEvent && (delete this.draggingEvent, this.mouseHandler.onDragEnd(t))
                }, t.prototype.getDraggingEvent = function() { return this.toolboxes.filter(function(t) { return t.draggingObject }).map(function(t) { return t.draggingObject.evt })[0] }, t.prototype.onDocumentDragStart = function(t) { this.control.beginUpdate(), this.control.captureFocus(), this.onMouseOperation.raise("notifyDragStart", t) }, t.prototype.onDocumentDragEnd = function(t) { this.onMouseOperation.raise("notifyDragEnd", t), this.control.endUpdate() }, t.prototype.onDocumentDragScrollStart = function() { this.onMouseOperation.raise1(function(t) { return t.notifyDragScrollStart() }) }, t.prototype.onDocumentDragScrollEnd = function() { this.onMouseOperation.raise1(function(t) { return t.notifyDragScrollEnd() }) }, t.prototype.onDocumentClick = function(t) { this.control.beginUpdate(), this.control.endUpdate() }, t.prototype.raiseTextInputStart = function(t, e, n, o) { this.onTextInputOperation.raise("notifyTextInputStart", t, e, n, o) }, t.prototype.raiseTextInputEnd = function(t) { this.onTextInputOperation.raise("notifyTextInputEnd", t) }, t
            }();
        e.EventManager = h
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = n(118),
            i = n(10),
            r = n(0),
            s = n(16),
            a = n(6),
            c = n(78),
            u = n(8),
            p = n(280),
            h = n(124),
            l = n(281),
            d = function() {
                function t(t, e, n, o, i, r, s, a, c, u) { this.history = t, this.selection = e, this.model = n, this.eventManager = o, this.readOnly = i, this.view = r, this.visualizerManager = s, this.settings = a, this.bars = c, this.nativeActions = u, this.initialize(n) }
                return t.prototype.initialize = function(t) { this.model = t, this.initializeDefaultState() }, t.prototype.initializeDefaultState = function() { this.defaultState = this.readOnly ? u.Browser.TouchUI ? new p.MouseHandlerDefaultReadOnlyTouchState(this, this.history, this.selection, this.model, this.view, this.visualizerManager, this.settings, this.bars) : new h.MouseHandlerDefaultReadOnlyState(this, this.history, this.selection, this.model, this.view, this.visualizerManager, this.settings, this.bars) : u.Browser.TouchUI ? new l.MouseHandlerDefaultTouchState(this, this.history, this.selection, this.model, this.view, this.visualizerManager, this.settings, this.bars) : new o.MouseHandlerDefaultState(this, this.history, this.selection, this.model, this.view, this.visualizerManager, this.settings, this.bars), this.switchToDefaultState() }, t.prototype.onMouseDown = function(t) { this.mouseDownEvent = t, this.state.onMouseDown(t) }, t.prototype.onMouseMove = function(t) { this.state.onMouseMove(t) }, t.prototype.onMouseUp = function(t) { this.state.onMouseUp(t) }, t.prototype.onMouseDblClick = function(t) { this.state.onMouseDblClick(t), this.tryRaiseUserAction(t, function(t, e) { return t.notifyItemDblClick(e) }) }, t.prototype.onMouseClick = function(t) { this.state.onMouseClick(t), this.tryRaiseUserAction(t, function(t, e) { return t.notifyItemClick(e) }) }, t.prototype.onLongTouch = function(t) {
                    if (t.touches && !(t.touches.length > 1)) {
                        var e = t.source.key;
                        void 0 === e ? this.selection.clear() : this.selection.hasKey(e) ? this.selection.remove(e) : this.selection.add(e)
                    }
                }, t.prototype.onShortcut = function(t) { return this.state.onShortcut(t) }, t.prototype.onWheel = function(t) { return this.state.onMouseWheel(t) }, t.prototype.onDragStart = function(t) { this.state.onDragStart(t) }, t.prototype.onDragEnd = function(t) { this.state.onDragEnd(t) }, t.prototype.getSnappedPos = function(t, e, n) { return !this.settings.snapToGrid || t.modifiers & s.ModifierKey.Ctrl ? e : a.ModelUtils.getSnappedPos(this.model, this.settings.gridSize, e, n) }, t.prototype.getSnappedPoint = function(t, e, n) {
                    var o = this.getSnappedPos(t, e.x, !0),
                        i = this.getSnappedPos(t, e.y, !1);
                    return void 0 === n ? new r.Point(o, i) : Math.pow(e.x - o, 2) + Math.pow(e.y - i, 2) < Math.pow(e.x - n.x, 2) + Math.pow(e.y - n.y, 2) ? new r.Point(o, i) : n
                }, t.prototype.tryUpdateModelSize = function(t) { a.ModelUtils.tryUpdateModelSize(this.history, this.model, t) }, t.prototype.raiseDragStart = function(t) { this.eventManager.onDocumentDragStart(t) }, t.prototype.raiseDragEnd = function(t) { this.eventManager.onDocumentDragEnd(t) }, t.prototype.raiseDragScrollStart = function() { this.eventManager.onDocumentDragScrollStart() }, t.prototype.raiseDragScrollEnd = function() { this.eventManager.onDocumentDragScrollEnd() }, t.prototype.raiseClick = function(t) { this.eventManager.onDocumentClick(t) }, t.prototype.tryRaiseUserAction = function(t, e) {
                    if (this.isUserAction(t)) {
                        var n = this.model.findItem(t.source.key);
                        n && this.nativeActions.raise1(function(t) { return e(t, n.toNative()) })
                    }
                }, t.prototype.isUserAction = function(t) { return t.source && (t.source.type === i.MouseEventElementType.Shape || t.source.type === i.MouseEventElementType.Connector) }, t.prototype.switchToDefaultState = function() { this.switchState(this.defaultState) }, t.prototype.switchToMoveClonedShapeState = function(t) { this.switchState(new c.MouseHandlerMoveClonedShapeState(this, this.history, this.model, this.selection, this.visualizerManager, t)) }, t.prototype.switchState = function(t) { this.state && this.state.finish(), this.state = t, this.state.start() }, t.prototype.notifyReadOnlyChanged = function(t) { this.readOnly = t, this.initializeDefaultState() }, t
            }();
        e.MouseHandler = d
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(119),
            s = n(5),
            a = n(6),
            c = n(0),
            u = n(24),
            p = function(t) {
                function e() { return null !== t && t.apply(this, arguments) || this }
                return i(e, t), e.prototype.onMouseDown = function(e) { this.connector = this.model.findConnector(e.source.key), this.pointIndex = parseInt(e.source.value), 0 === this.pointIndex ? this.pointPosition = s.ConnectorPosition.Begin : this.pointIndex === this.connector.points.length - 1 && (this.pointPosition = s.ConnectorPosition.End), t.prototype.onMouseDown.call(this, e) }, e.prototype.onApplyChanges = function(e) { this.connector.properties.lineOption === u.ConnectorLineOption.Orthogonal && 0 !== this.pointIndex && this.pointIndex !== this.connector.points.length - 1 || t.prototype.onApplyChanges.call(this, e) }, e.prototype.onFinishWithChanges = function() { t.prototype.onFinishWithChanges.call(this), a.ModelUtils.removeUnnecessaryConnectorPoints(this.history, this.connector) }, e.prototype.getSnappedPoint = function(t, e) {
                    var n = this.connector.points,
                        o = this.pointIndex;
                    if (0 < o && o < n.length - 1) {
                        var i = (n[o + 1].y - n[o - 1].y) / (n[o + 1].x - n[o - 1].x),
                            r = e.x,
                            s = n[o + 1].y - (n[o + 1].x - r) * i;
                        return this.handler.getSnappedPoint(t, e, new c.Point(r, s))
                    }
                    return this.handler.getSnappedPoint(t, e)
                }, e
            }(r.MouseHandlerMoveConnectorPointStateBase);
        e.MouseHandlerMoveConnectorPointState = p
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(0),
            s = n(10),
            a = n(16),
            c = n(26),
            u = n(19),
            p = n(6),
            h = function(t) {
                function e(e, n, o, i, r) { var s = t.call(this, e, n) || this; return s.model = o, s.selection = i, s.visualizerManager = r, s.startScrollLeft = 0, s.startScrollTop = 0, s.rotation = 0, s }
                return i(e, t), e.prototype.start = function() { t.prototype.start.call(this) }, e.prototype.finish = function() { this.visualizerManager.resetResizeInfo(), this.visualizerManager.resetExtensionLines(), t.prototype.finish.call(this) }, e.prototype.onMouseDown = function(e) {
                    var n = parseInt(e.source.value);
                    this.resizeEventSource = n, this.startPoint = e.modelPoint, this.lockH = n == s.ResizeEventSource.ResizeBox_S || n == s.ResizeEventSource.ResizeBox_N, this.lockV = n == s.ResizeEventSource.ResizeBox_E || n == s.ResizeEventSource.ResizeBox_W, this.sideH = n == s.ResizeEventSource.ResizeBox_E || n == s.ResizeEventSource.ResizeBox_NE || n == s.ResizeEventSource.ResizeBox_SE, this.sideV = n == s.ResizeEventSource.ResizeBox_SE || n == s.ResizeEventSource.ResizeBox_S || n == s.ResizeEventSource.ResizeBox_SW, this.shapes = this.selection.getSelectedShapes(), 0 !== this.shapes.length ? (this.connectors = this.selection.getSelectedConnectors(), this.startRectangle = u.DiagramModel.getRectangle(this.shapes), this.startShapeSizes = this.shapes.map(function(t) { return t.size.clone() }), this.startShapePositions = this.shapes.map(function(t) { return t.position.clone() }), this.startConnectorPoints = this.connectors.map(function(t) { return t.points.map(function(t) { return t.clone() }) }), this.lockAspectRatio = !!(e.modifiers & a.ModifierKey.Shift), t.prototype.onMouseDown.call(this, e)) : this.handler.switchToDefaultState()
                }, e.prototype.onMouseMove = function(e) {
                    t.prototype.onMouseMove.call(this, e);
                    var n = this.selection.getSelectedShapes();
                    this.visualizerManager.setExtensionLines(n)
                }, e.prototype.onApplyChanges = function(t) {
                    var e = this,
                        n = u.DiagramModel.getRectangle(this.shapes),
                        o = this.getSize(t, n.position, this.startRectangle.size),
                        i = this.getPosition(t, o, this.startRectangle.size, this.startRectangle.position),
                        s = o.width / this.startRectangle.width,
                        a = o.height / this.startRectangle.height;
                    this.shapes.forEach(function(t, n) {
                        var o = new r.Size(e.startShapeSizes[n].width * (t.allowResizeHorizontally ? s : 1), e.startShapeSizes[n].height * (t.allowResizeVertically ? a : 1)),
                            c = new r.Point(t.allowResizeHorizontally ? i.x + (e.startShapePositions[n].x - e.startRectangle.left) * s : e.startShapePositions[n].x, t.allowResizeVertically ? i.y + (e.startShapePositions[n].y - e.startRectangle.top) * a : e.startShapePositions[n].y);
                        p.ModelUtils.setShapeSize(e.history, e.model, t, c, o)
                    }), this.connectors.forEach(function(t, n) {
                        for (var o = t.beginItem ? 1 : 0, c = t.endItem ? t.points.length - 2 : t.points.length - 1, u = o; u <= c; u++) {
                            var h = new r.Point(i.x + (e.startConnectorPoints[n][u].x - e.startRectangle.left) * s, i.y + (e.startConnectorPoints[n][u].y - e.startRectangle.top) * a);
                            p.ModelUtils.setConnectorPoint(e.history, e.model, t, u, h)
                        }
                    }), this.selection.getSelectedShapes(!1, !0).forEach(function(t) { p.ModelUtils.updateShapeAttachedConnectors(e.history, e.model, t) }), this.tryUpdateModelSize(), this.visualizerManager.setResizeInfo(this.shapes)
                }, e.prototype.tryUpdateModelSize = function() {
                    var t = this;
                    this.handler.tryUpdateModelSize(function(e, n) { t.startShapePositions.forEach(function(t) { t.x += e, t.y += n }), t.startConnectorPoints.forEach(function(t) { t.forEach(function(t) { t.x += e, t.y += n }) }), t.startRectangle.position.x += e, t.startRectangle.position.y += n, t.startPoint.x += e, t.startPoint.y += n })
                }, e.prototype.getDraggingElementKeys = function() { return this.shapes.map(function(t) { return t.key }) }, e.prototype.getSize = function(t, n, o) {
                    var i, s, a = t.modelPoint.x - (this.startScrollLeft - t.scrollX) - this.startPoint.x,
                        c = t.modelPoint.y - (this.startScrollTop - t.scrollY) - this.startPoint.y,
                        u = a * Math.cos(this.rotation) - -c * Math.sin(this.rotation),
                        p = -(a * Math.sin(this.rotation) + -c * Math.cos(this.rotation));
                    return p = !this.sideV && p > 0 ? Math.min(o.height + 1, p) : p, u = !this.sideH && u > 0 ? Math.min(o.width + 1, u) : u, this.lockH || this.lockV || !this.lockAspectRatio ? (u = this.lockH ? 0 : u, p = this.lockV ? 0 : p, i = Math.max(e.minSize, this.sideH ? o.width + u : o.width - u), s = Math.max(e.minSize, this.sideV ? o.height + p : o.height - p)) : Math.abs(u) > Math.abs(p) ? (i = this.sideH ? Math.max(e.minSize, o.width + u) : o.width - u, s = o.height * (i / o.width)) : (s = this.sideV ? Math.max(e.minSize, o.height + p) : o.height - p, i = o.width * (s / o.height)), this.lockH || (i = this.handler.getSnappedPos(t, n.x + i, !0) - n.x), this.lockV || (s = this.handler.getSnappedPos(t, n.y + s, !1) - n.y), new r.Size(i, s)
                }, e.prototype.getPosition = function(t, e, n, o) {
                    var i = o.x,
                        a = o.y;
                    if (this.resizeEventSource === s.ResizeEventSource.ResizeBox_N || this.resizeEventSource === s.ResizeEventSource.ResizeBox_NE || this.resizeEventSource === s.ResizeEventSource.ResizeBox_NW) {
                        a += n.height - e.height;
                        var c = this.handler.getSnappedPos(t, a, !1);
                        e.height += a - c, a = c
                    }
                    if (this.resizeEventSource === s.ResizeEventSource.ResizeBox_W || this.resizeEventSource === s.ResizeEventSource.ResizeBox_NW || this.resizeEventSource === s.ResizeEventSource.ResizeBox_SW) {
                        i += n.width - e.width;
                        var u = this.handler.getSnappedPos(t, i, !0);
                        e.width += i - u, i = u
                    }
                    return new r.Point(i, a)
                }, e.minSize = 360, e
            }(c.MouseHandlerDraggingState);
        e.MouseHandlerResizeShapeState = h
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(26),
            s = n(120),
            a = n(50),
            c = n(6),
            u = function(t) {
                function e(e, n, o) { var i = t.call(this, e, n) || this; return i.model = o, i }
                return i(e, t), e.prototype.onMouseDown = function(e) { this.startPoint = e.modelPoint, this.connectorKey = e.source.key, this.pointIndex = parseInt(e.source.value) + 1, t.prototype.onMouseDown.call(this, e) }, e.prototype.onApplyChanges = function(t) {
                    var e = this.getSnappedPoint(t, t.modelPoint);
                    this.pointCreated ? this.history.addAndRedo(new a.MoveConnectorPointHistoryItem(this.connectorKey, this.pointIndex, e)) : (this.history.addAndRedo(new s.AddConnectorPointHistoryItem(this.connectorKey, this.pointIndex, e)), this.pointCreated = !0), this.handler.tryUpdateModelSize()
                }, e.prototype.onFinishWithChanges = function() { c.ModelUtils.removeUnnecessaryConnectorPoints(this.history, this.model.findConnector(this.connectorKey)) }, e.prototype.getDraggingElementKeys = function() { return [this.connectorKey] }, e
            }(r.MouseHandlerDraggingState);
        e.MouseHandlerMoveConnectorSideState = u
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(26),
            s = n(102),
            a = function(t) {
                function e(e, n, o) { var i = t.call(this, e, n) || this; return i.model = o, i.startScrollLeft = 0, i.startScrollTop = 0, i }
                return i(e, t), e.prototype.onMouseDown = function(e) { this.startPoint = e.modelPoint, this.shape = this.model.findShape(e.source.key), this.parameterPointKey = e.source.value, this.startParameters = this.shape.parameters.clone(), t.prototype.onMouseDown.call(this, e) }, e.prototype.onApplyChanges = function(t) {
                    var e = this.handler.getSnappedPos(t, t.modelPoint.x - this.startPoint.x, !0),
                        n = this.handler.getSnappedPos(t, t.modelPoint.y - this.startPoint.y, !1),
                        o = this.startParameters.clone();
                    this.shape.description.modifyParameters(this.shape, o, e, n), this.history.addAndRedo(new s.ChangeShapeParametersHistoryItem(this.shape.key, o))
                }, e.prototype.getDraggingElementKeys = function() { return [this.shape.key] }, e
            }(r.MouseHandlerDraggingState);
        e.MouseHandlerDragParameterPointState = a
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(5),
            s = n(37),
            a = n(52),
            c = n(119),
            u = n(44),
            p = n(55),
            h = n(46),
            l = n(36),
            d = function(t) {
                function e(e, n, o, i, r, s) { var a = t.call(this, e, n, o, i) || this; return a.selection = r, a.connectionPointIndex = s, a }
                return i(e, t), e.prototype.onMouseDown = function(e) { void 0 === this.connectionPointIndex && (this.connectionPointIndex = parseInt(e.source.value)), this.connectedItem = this.model.findItem(e.source.key), this.pointIndex = 1, this.pointPosition = r.ConnectorPosition.End, t.prototype.onMouseDown.call(this, e) }, e.prototype.onApplyChanges = function(e) {
                    var n = this,
                        o = this.getSnappedPoint(e, e.modelPoint);
                    if (this.connector) t.prototype.onApplyChanges.call(this, e);
                    else {
                        var i = new a.AddConnectorHistoryItem([this.connectedItem.getConnectionPointPosition(this.connectionPointIndex, o), o]);
                        this.history.addAndRedo(i), this.connector = this.model.findConnector(i.connectorKey), this.connector.properties.forEach(function(t) { n.history.addAndRedo(new p.ChangeConnectorPropertyHistoryItem(n.connector.key, t, n.selection.inputPosition.getConnectorPropertyDefaultValue(t))) }), this.connector.style.forEach(function(t) { n.history.addAndRedo(new h.ChangeStyleHistoryItem(n.connector.key, t, n.selection.inputPosition.getStylePropertyDefaultValue(t))) }), this.connector.styleText.forEach(function(t) { n.history.addAndRedo(new l.ChangeStyleTextHistoryItem(n.connector.key, t, n.selection.inputPosition.getStyleTextPropertyDefaultValue(t))) }), this.history.addAndRedo(new s.AddConnectionHistoryItem(this.connector, this.connectedItem, this.connectionPointIndex, r.ConnectorPosition.Begin))
                    }
                }, e.prototype.onFinishWithChanges = function() { t.prototype.onFinishWithChanges.call(this), this.history.addAndRedo(new u.SetSelectionHistoryItem(this.selection, [this.connector.key])) }, e
            }(c.MouseHandlerMoveConnectorPointStateBase);
        e.MouseHandlerCreateConnectorState = d
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(0),
            s = n(5),
            a = n(26),
            c = n(120),
            u = n(50),
            p = n(6),
            h = n(4),
            l = function(t) {
                function e(e, n, o) { var i = t.call(this, e, n) || this; return i.model = o, i }
                return i(e, t), e.prototype.onMouseDown = function(e) {
                    this.startPoint = e.modelPoint, this.connector = this.model.findConnector(e.source.key);
                    var n = e.source.value.split("_"),
                        o = parseInt(n[0]),
                        i = parseInt(n[1]),
                        r = this.connector.getRenderPoints(!0);
                    this.renderPoint1 = r[o].clone(), this.renderPoint2 = r[i].clone(), this.isVerticalOrientation = this.renderPoint1.x === this.renderPoint2.x, -1 !== this.renderPoint1.pointIndex ? (this.pointIndex1 = this.renderPoint1.pointIndex, 0 === this.pointIndex1 ? (this.pointIndex1++, this.correctEdgePoint(this.renderPoint1, this.renderPoint2, this.connector.beginItem, this.connector.beginConnectionPointIndex)) : this.point1 = this.connector.points[this.pointIndex1]) : this.pointIndex1 = this.findPointIndex(r, o, !1) + 1, -1 !== this.renderPoint2.pointIndex ? (this.pointIndex2 = this.renderPoint2.pointIndex, this.pointIndex2 === this.connector.points.length - 1 ? this.correctEdgePoint(this.renderPoint2, this.renderPoint1, this.connector.endItem, this.connector.endConnectionPointIndex) : this.point2 = this.connector.points[this.pointIndex2]) : this.pointIndex2 = this.findPointIndex(r, i, !0), t.prototype.onMouseDown.call(this, e)
                }, e.prototype.onApplyChanges = function(t) {
                    var e = this;
                    if (!this.pointCreated) {
                        var n = void 0,
                            o = void 0;
                        void 0 === this.point1 && (this.point1 = new r.Point(this.renderPoint1.x, this.renderPoint1.y), this.history.addAndRedo(new c.AddConnectorPointHistoryItem(this.connector.key, this.pointIndex1, this.point1)), n = this.point1, this.pointIndex2++), void 0 === this.point2 && (this.point2 = new r.Point(this.renderPoint2.x, this.renderPoint2.y), this.history.addAndRedo(new c.AddConnectorPointHistoryItem(this.connector.key, this.pointIndex2, this.point2)), o = this.point2), p.ModelUtils.removeUnnecessaryConnectorPoints(this.history, this.connector, [n, o], function(t) { t < e.pointIndex1 && e.pointIndex1--, t < e.pointIndex2 && e.pointIndex2-- }), this.pointCreated = !0
                    }
                    var i = this.getSnappedPoint(t, t.modelPoint);
                    this.isVerticalOrientation ? (this.point1.x = i.x, this.point2.x = i.x) : (this.point1.y = i.y, this.point2.y = i.y), this.history.addAndRedo(new u.MoveConnectorPointHistoryItem(this.connector.key, this.pointIndex1, this.point1)), this.history.addAndRedo(new u.MoveConnectorPointHistoryItem(this.connector.key, this.pointIndex2, this.point2)), this.handler.tryUpdateModelSize()
                }, e.prototype.onFinishWithChanges = function() { p.ModelUtils.removeUnnecessaryConnectorPoints(this.history, this.connector) }, e.prototype.findPointIndex = function(t, e, n) {
                    for (var o; o = t[e];) {
                        if (-1 !== o.pointIndex) return o.pointIndex;
                        e += n ? 1 : -1
                    }
                }, e.prototype.correctEdgePoint = function(t, e, n, o) {
                    var i = 0;
                    if (void 0 !== n) {
                        var r = n.getConnectionPointSideByIndex(o),
                            a = n.rectangle;
                        switch (i = s.Connector.minOffset, r) {
                            case h.ConnectionPointSide.South:
                                i += a.bottom - t.y;
                                break;
                            case h.ConnectionPointSide.North:
                                i += t.y - a.top;
                                break;
                            case h.ConnectionPointSide.East:
                                i += a.right - t.x;
                                break;
                            case h.ConnectionPointSide.West:
                                i += t.x - a.left
                        }
                    }
                    this.isVerticalOrientation ? t.y > e.y ? t.y -= Math.min(i, t.y - e.y) : t.y += Math.min(i, e.y - t.y) : t.x > e.x ? t.x -= Math.min(i, t.x - e.x) : t.x += Math.min(i, e.x - t.x)
                }, e.prototype.getDraggingElementKeys = function() { return [this.connector.key] }, e
            }(a.MouseHandlerDraggingState);
        e.MouseHandlerMoveConnectorOrthogonalSideState = l
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(10),
            s = n(25),
            a = n(0),
            c = n(51),
            u = n(44),
            p = n(46),
            h = n(36),
            l = n(26),
            d = n(91),
            f = n(6),
            y = n(32),
            m = 300,
            g = function(t) {
                function e(e, n, o, i, r) { var s = t.call(this, e) || this; return s.history = n, s.model = o, s.selection = i, s.visualizerManager = r, s.isModelEmpty = 0 === o.items.length, s }
                return i(e, t), e.prototype.cancelChanges = function() { this.tryRemoveTimer() }, e.prototype.onDragStart = function(t) { this.dragging = t }, e.prototype.onDragEnd = function(t) { this.cancelChanges(), this.handler.switchToDefaultState() }, e.prototype.onMouseMove = function(t) {
                    var e = this;
                    t.source.type > r.MouseEventElementType.Background ? (this.tryRemoveTimer(), this.switchToDraggingState(t, !1)) : t.source.type !== r.MouseEventElementType.Background || this.isModelEmpty ? void 0 !== this.nonPageAreaTimer && this.tryRemoveTimer() : (this.savedEvt = t, void 0 === this.nonPageAreaTimer && (this.nonPageAreaTimer = setTimeout(function() { return e.switchToDraggingState(e.savedEvt, !0) }, 500)))
                }, e.prototype.switchToDraggingState = function(t, e) { this.handler.switchState(new v(this.handler, this.history, this.model, this.selection, this.visualizerManager, e)), this.handler.state.onDragStart(this.dragging), this.handler.state.onMouseMove(t) }, e.prototype.tryRemoveTimer = function() { void 0 !== this.nonPageAreaTimer && (clearTimeout(this.nonPageAreaTimer), delete this.nonPageAreaTimer) }, e.prototype.finish = function() { this.tryRemoveTimer() }, e
            }(y.MouseHandlerCancellableState);
        e.MouseHandlerBeforeToolboxDraggingState = g;
        var v = function(t) {
            function e(e, n, o, i, r, s) { var a = t.call(this, e, n) || this; return a.model = o, a.selection = i, a.visualizerManager = r, s || (a.updatePageSizeTimer = setTimeout(function() { a.handler.tryUpdateModelSize(), delete a.updatePageSizeTimer }, m)), a }
            return i(e, t), e.prototype.onMouseMove = function(e) {
                t.prototype.onMouseMove.call(this, e);
                var n = this.model.findShape(this.shapeKey);
                if (n) {
                    this.visualizerManager.setExtensionLines([n]);
                    var o = f.ModelUtils.findContainerByEventKey(this.model, this.selection, e.source.key);
                    o && f.ModelUtils.canInsertToContainer(this.model, n, o) ? this.visualizerManager.setContainerTarget(o, e.source.type) : this.visualizerManager.resetContainerTarget()
                }
            }, e.prototype.getDraggingElementKeys = function() { return void 0 === this.shapeKey ? [] : [this.shapeKey] }, e.prototype.onApplyChanges = function(t) {
                var e = this;
                if (void 0 === t.source.type) return this.dragging.onCaptured(!1), void(void 0 === this.shapeKey || this.deleteHistoryItem || (this.deleteHistoryItem = new d.DeleteShapeHistoryItem(this.shapeKey), this.history.addAndRedo(this.deleteHistoryItem)));
                this.dragging.onCaptured(!0), void 0 === this.shapeKey && (this.startPoint = t.modelPoint, this.shapeKey = this.insertToolboxItem(t)), this.deleteHistoryItem && (this.history.undoTransactionTo(this.deleteHistoryItem), delete this.deleteHistoryItem);
                var n = this.getPosition(t, this.startShapePosition),
                    o = this.model.findShape(this.shapeKey);
                f.ModelUtils.setShapePosition(this.history, this.model, o, n), f.ModelUtils.updateMovingShapeConnections(this.history, o, this.connectorsWithoutBeginItemInfo, this.connectorsWithoutEndItemInfo, function() { e.visualizerManager.resetConnectionTarget(), e.visualizerManager.resetConnectionPoints() }, function(t, n) { e.visualizerManager.setConnectionTarget(t, r.MouseEventElementType.Shape), e.visualizerManager.setConnectionPoints(t, r.MouseEventElementType.Shape, n, !0) }), f.ModelUtils.updateShapeAttachedConnectors(this.history, this.model, o);
                var i = f.ModelUtils.findContainerByEventKey(this.model, this.selection, t.source.key);
                o && i && f.ModelUtils.canInsertToContainer(this.model, o, i) ? f.ModelUtils.insertToContainer(this.history, this.model, o, i) : f.ModelUtils.removeFromContainer(this.history, this.model, o), void 0 === this.updatePageSizeTimer && this.handler.tryUpdateModelSize(function(t, n) { e.connectorsWithoutBeginItemInfo.forEach(function(e) { e.point.x += t, e.point.y += n }), e.connectorsWithoutEndItemInfo.forEach(function(e) { e.point.x += t, e.point.y += n }) })
            }, e.prototype.onFinishWithChanges = function() { this.history.addAndRedo(new u.SetSelectionHistoryItem(this.selection, [this.shapeKey])) }, e.prototype.onDragStart = function(t) { this.dragging = t, this.connectorsWithoutBeginItemInfo = f.ModelUtils.getConnectorsWithoutBeginItemInfo(this.model), this.connectorsWithoutEndItemInfo = f.ModelUtils.getConnectorsWithoutEndItemInfo(this.model) }, e.prototype.onDragEnd = function(t) { void 0 !== this.shapeKey && void 0 === t.source.type && this.cancelChanges(), this.handler.switchToDefaultState() }, e.prototype.finish = function() { this.visualizerManager.resetExtensionLines(), this.visualizerManager.resetContainerTarget(), this.visualizerManager.resetConnectionTarget(), this.visualizerManager.resetConnectionPoints(), this.dragging.onFinishDragging(), t.prototype.finish.call(this) }, e.prototype.updateShapeProperties = function(t) {
                var e = this;
                this.selection.inputPosition.stylePropertiesDefault.forEach(function(n) { e.history.addAndRedo(new p.ChangeStyleHistoryItem(t, n, e.selection.inputPosition.getStylePropertyDefaultValue(n))) }), this.selection.inputPosition.styleTextPropertiesDefault.forEach(function(n) { e.history.addAndRedo(new h.ChangeStyleTextHistoryItem(t, n, e.selection.inputPosition.getStyleTextPropertyValue(n))) })
            }, e.prototype.insertToolboxItem = function(t) {
                var e = s.ShapeDescriptionManager.get(this.dragging.data);
                this.startShapePosition = this.getSnappedPoint(t, new a.Point(t.modelPoint.x - e.defaultSize.width / 2, t.modelPoint.y - e.defaultSize.height / 2));
                var n = new c.AddShapeHistoryItem(this.dragging.data, this.startShapePosition);
                return this.history.addAndRedo(n), this.updateShapeProperties(n.shapeKey), n.shapeKey
            }, e.prototype.getPosition = function(t, e) { return this.getSnappedPoint(t, new a.Point(e.x + t.modelPoint.x - this.startPoint.x, e.y + t.modelPoint.y - this.startPoint.y)) }, e
        }(l.MouseHandlerDraggingState);
        e.MouseHandlerToolboxDraggingState = v
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(26),
            s = n(273),
            a = n(54),
            c = function(t) {
                function e(e, n, o) { var i = t.call(this, e, n) || this; return i.model = o, i }
                return i(e, t), e.prototype.onMouseDown = function(e) { this.connector = this.model.findConnector(e.source.key), this.position = parseFloat(e.source.value), this.text = this.connector.getText(this.position), this.savedText = "", t.prototype.onMouseDown.call(this, e) }, e.prototype.onApplyChanges = function(t) { var e = this.connector.getTextPositionByPoint(t.modelPoint); if (e != this.position) { var n = this.connector.getText(e); "" !== n && n !== this.text && (this.history.addAndRedo(new a.ChangeConnectorTextHistoryItem(this.connector, e, "")), this.savedText = n), this.history.addAndRedo(new s.ChangeConnectorTextPositionHistoryItem(this.connector, this.position, e)), "" !== this.savedText && this.savedText !== n && (this.history.addAndRedo(new a.ChangeConnectorTextHistoryItem(this.connector, this.position, this.savedText)), this.savedText = ""), this.position = e } }, e.prototype.getDraggingElementKeys = function() { return [this.connector.key] }, e
            }(r.MouseHandlerDraggingState);
        e.MouseHandlerMoveConnectorTextState = c
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = function(t) {
            function e(e, n, o) { var i = t.call(this) || this; return i.connectorKey = e.key, i.position = n, i.newPosition = o, i }
            return i(e, t), e.prototype.redo = function(t) {
                var e = t.model.findConnector(this.connectorKey);
                t.changeConnectorTextPosition(e, this.position, this.newPosition)
            }, e.prototype.undo = function(t) {
                var e = t.model.findConnector(this.connectorKey);
                t.changeConnectorTextPosition(e, this.newPosition, this.position)
            }, e
        }(n(3).HistoryItem);
        e.ChangeConnectorTextPositionHistoryItem = r
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(32),
            s = n(275),
            a = n(6),
            c = function(t) {
                function e(e, n, o) { var i = t.call(this, e) || this; return i.history = n, i.model = o, i }
                return i(e, t), e.prototype.onMouseUp = function(t) {
                    var e = this.model.findShape(t.source.key);
                    e && (this.history.beginTransaction(), this.history.addAndRedo(new s.ToggleShapeExpandedHistoryItem(e)), a.ModelUtils.updateShapeAttachedConnectors(this.history, this.model, e), a.ModelUtils.updateContainerConnectorsAttachedPoints(this.history, this.model, e), this.handler.tryUpdateModelSize(), this.history.endTransaction(), this.handler.raiseClick([e.key])), this.handler.switchToDefaultState()
                }, e
            }(r.MouseHandlerStateBase);
        e.MouseHandlerToggleShapeExpandedState = c
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = function(t) {
            function e(e) { var n = t.call(this) || this; return n.shapeKey = e.key, n.expanded = e.expanded, n }
            return i(e, t), e.prototype.redo = function(t) {
                var e = t.model.findShape(this.shapeKey);
                t.changeShapeExpanded(e, !this.expanded)
            }, e.prototype.undo = function(t) {
                var e = t.model.findShape(this.shapeKey);
                t.changeShapeExpanded(e, this.expanded)
            }, e
        }(n(3).HistoryItem);
        e.ToggleShapeExpandedHistoryItem = r
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(10),
            s = n(0),
            a = function(t) {
                function e(e, n, o) { var i = t.call(this, e) || this; return i.selection = n, i.visualizerManager = o, i }
                return i(e, t), e.prototype.finish = function() { this.handler.raiseDragEnd([]), this.visualizerManager.resetSelectionRectangle(), t.prototype.finish.call(this) }, e.prototype.cancelChanges = function() {}, e.prototype.onMouseDown = function(t) { this.startPoint = t.modelPoint, this.handler.raiseDragStart([]) }, e.prototype.onMouseMove = function(t) { t.button !== r.MouseButton.Left ? this.handler.switchToDefaultState() : (this.rectangle = s.Rectangle.createByPoints(this.startPoint, t.modelPoint), this.visualizerManager.setSelectionRectangle(this.rectangle)) }, e.prototype.onMouseUp = function(t) { void 0 !== this.rectangle ? this.selection.selectRect(this.rectangle) : this.selection.set([]), this.rectangle = void 0, this.handler.switchToDefaultState() }, e
            }(n(32).MouseHandlerCancellableState);
        e.MouseHandlerSelectionState = a
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(32),
            s = n(10),
            a = n(16),
            c = n(8),
            u = n(48),
            p = function(t) {
                function e(e, n, o, i) { var r = t.call(this, e) || this; return r.settings = n, r.view = o, r.bars = i, r }
                return i(e, t), e.prototype.onMouseWheel = function(t) { return this.trySwitchToDefault(t) ? this.handler.state.onMouseWheel(t) : (this.settings.zoomLevel = this.view.getNextStepZoom(t.deltaY < 0), this.bars.updateItemsState([u.DiagramCommand.ZoomLevel]), t.source.type === s.MouseEventElementType.Background ? this.view.resetScroll() : (this.view.scrollTo(t.modelPoint, t.offsetPoint), this.view.normalize()), t.preventDefault = !0, !0) }, e.prototype.onMouseUp = function(t) { this.handler.switchToDefaultState(), this.handler.state.onMouseUp(t) }, e.prototype.onMouseDown = function(t) { this.handler.switchToDefaultState(), this.handler.state.onMouseDown(t) }, e.prototype.onMouseMove = function(t) { this.trySwitchToDefault(t) && this.handler.state.onMouseMove(t) }, e.prototype.trySwitchToDefault = function(t) { if (!(t.modifiers & a.ModifierKey.Ctrl)) return this.handler.switchToDefaultState(), !0 }, e.prototype.start = function() { t.prototype.start.call(this), this.settings.zoomLevel = this.view.getZoom(), this.settings.autoZoom !== c.AutoZoomMode.Disabled && (this.settings.autoZoom = c.AutoZoomMode.Disabled, this.bars.updateItemsState([u.DiagramCommand.SwitchAutoZoom, u.DiagramCommand.ToggleAutoZoom])) }, e
            }(r.MouseHandlerStateBase);
        e.MouseHandlerZoomOnWheelState = p
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(78),
            s = function(t) {
                function e() { return null !== t && t.apply(this, arguments) || this }
                return i(e, t), e.prototype.onMouseMove = function(e) { t.prototype.onMouseMove.call(this, e), this.switchToMoveClonedShapeState(e) }, e.prototype.switchToMoveClonedShapeState = function(t) { r.MouseHandlerMoveClonedShapeState.isMoveClonedShapeEvent(t) && (this.cancelChanges(), this.handler.switchToMoveClonedShapeState(this.startPoint), this.handler.onMouseDown(t)) }, e
            }(n(279).MouseHandlerMoveShapeOrthogonallyState);
        e.MouseHandlerMoveShapeState = s
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(16),
            s = function(t) {
                function e() { return null !== t && t.apply(this, arguments) || this }
                return i(e, t), e.prototype.onApplyChanges = function(e) { this.calculateFixedPosition(e), t.prototype.onApplyChanges.call(this, e) }, e.prototype.getXPosition = function(e, n) { return this.fixedX ? n : t.prototype.getXPosition.call(this, e, n) }, e.prototype.getYPosition = function(e, n) { return this.fixedY ? n : t.prototype.getYPosition.call(this, e, n) }, e.prototype.calculateFixedPosition = function(t) {
                    (this.fixedX = !1, this.fixedY = !1, t.modifiers & r.ModifierKey.Shift) && (Math.abs(this.startPoint.x - t.modelPoint.x) < Math.abs(this.startPoint.y - t.modelPoint.y) ? this.fixedX = !0 : this.fixedY = !0)
                }, e
            }(n(121).MouseHandlerMoveShapeStateBase);
        e.MouseHandlerMoveShapeOrthogonallyState = s
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this }
            return i(e, t), e.prototype.canDragObjectOnMouseDown = function(t) { return !1 }, e.prototype.canClearSelectionOnMouseDown = function() { return !0 }, e.prototype.processOnMouseMoveAfterLimit = function(t) { this.startScrolling(t) }, e.prototype.canSelectOnMouseUp = function(t) { return !this.inSelection(t) }, e.prototype.canClearSelectionOnMouseUp = function() { return !1 }, e
        }(n(124).MouseHandlerDefaultReadOnlyState);
        e.MouseHandlerDefaultReadOnlyTouchState = r
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(118),
            s = n(282),
            a = function(t) {
                function e() { return null !== t && t.apply(this, arguments) || this }
                return i(e, t), e.prototype.updateConnectionsOnMouseMove = function(t) {}, e.prototype.canDragObjectOnMouseDown = function(t) { return this.inSelection(t) }, e.prototype.canClearSelectionOnMouseDown = function() { return !0 }, e.prototype.processOnMouseMoveAfterLimit = function(t) { t.touches.length > 1 ? this.startZooming(t) : this.startScrolling(t) }, e.prototype.startZooming = function(t) { this.handler.switchState(new s.MouseHandlerZoomOnPinchState(this.handler, this.selection, this.settings, this.view, this.bars)) }, e.prototype.canSelectOnMouseUp = function(t) { return !this.inSelection(t) }, e.prototype.canClearSelectionOnMouseUp = function() { return !1 }, e
            }(r.MouseHandlerDefaultState);
        e.MouseHandlerDefaultTouchState = a
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(35),
            s = n(48),
            a = n(0),
            c = n(123),
            u = function(t) {
                function e(e, n, o, i, r) { var s = t.call(this, e, i, n) || this; return s.selection = n, s.settings = o, s.view = i, s.bars = r, s }
                return i(e, t), e.prototype.onMouseDown = function(e) { t.prototype.onMouseDown.call(this, e), e.touches.length > 1 && (this.startDistance = this.getTouchDistance(e), this.startZoomLevel = this.settings.zoomLevel, this.prevDistance = this.startDistance) }, e.prototype.onMouseMove = function(e) {
                    if (e.touches.length > 1) {
                        var n = this.getTouchDistance(e);
                        Math.abs(this.prevDistance - n) > 1 && (this.settings.zoomLevel = this.startZoomLevel * (n / this.startDistance), this.bars.updateItemsState([s.DiagramCommand.ZoomLevel]), this.view.scrollTo(this.getMiddleLayoutPoint(e), this.getMiddleAbsPoint(e)), this.view.normalize(), this.prevDistance = n)
                    }
                    t.prototype.onMouseMove.call(this, e)
                }, e.prototype.onMouseUp = function(t) { 0 === t.touches.length && setTimeout(function() { this.handler.switchToDefaultState() }.bind(this), 1) }, e.prototype.start = function() { t.prototype.start.call(this), this.settings.zoomLevel = this.view.getZoom(), this.settings.autoZoom !== r.AutoZoomMode.Disabled && (this.settings.autoZoom = r.AutoZoomMode.Disabled, this.bars.updateItemsState([s.DiagramCommand.SwitchAutoZoom, s.DiagramCommand.ToggleAutoZoom])) }, e.prototype.getTouchDistance = function(t) {
                    var e = new a.Point(t.touches[0].offsetPoint.x, t.touches[0].offsetPoint.y),
                        n = new a.Point(t.touches[1].offsetPoint.x, t.touches[1].offsetPoint.y);
                    return a.GeometryUtils.getDistance(e, n)
                }, e.prototype.getPointByEvent = function(t) { return this.getMiddleAbsPoint(t) }, e.prototype.getMiddleAbsPoint = function(t) { return t.touches.length > 1 ? e.getMiddlePointByEvent(t, function(t) { return t.offsetPoint }) : t.offsetPoint }, e.prototype.getMiddleLayoutPoint = function(t) { return t.touches.length > 1 ? e.getMiddlePointByEvent(t, function(t) { return t.modelPoint }) : t.modelPoint }, e.getMiddlePointByEvent = function(t, e) { if (t.touches.length > 1) return new a.Point((e(t.touches[0]).x + e(t.touches[1]).x) / 2, (e(t.touches[0]).y + e(t.touches[1]).y) / 2) }, e
            }(c.MouseHandlerScrollingState);
        e.MouseHandlerZoomOnPinchState = u
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = n(284),
            i = n(10),
            r = n(16),
            s = n(11),
            a = n(5),
            c = n(54),
            u = function() {
                function t(t) { this.control = t }
                return t.prototype.startTextInput = function(t, e) {
                    if (!t.isLocked && t.enableText && t.allowEditText && !this.control.settings.readOnly) {
                        if (this.control.beginUpdate(), this.textInputItem = t, this.textInputItem instanceof s.Shape) {
                            var n = this.textInputItem.textEditRectangle;
                            this.control.eventManager.raiseTextInputStart(this.textInputItem, this.textInputItem.text, n.position, n.size)
                        }
                        this.textInputItem instanceof a.Connector && (this.textInputPosition = e, this.control.eventManager.raiseTextInputStart(this.textInputItem, this.textInputItem.getText(this.textInputPosition), this.textInputItem.getTextPoint(this.textInputPosition)))
                    }
                }, t.prototype.endTextInput = function() {
                    var t = this.textInputItem;
                    delete this.textInputItem, this.control.eventManager.raiseTextInputEnd(t), this.control.endUpdate()
                }, t.prototype.applyTextInput = function(t) {
                    var e = this.textInputItem,
                        n = this.textInputPosition;
                    this.endTextInput(), e instanceof s.Shape ? e.text !== t && this.control.history.addAndRedo(new o.ChangeShapeTextHistoryItem(e, t)) : e instanceof a.Connector && e.getText(n) !== t && this.control.history.addAndRedo(new c.ChangeConnectorTextHistoryItem(e, n, t))
                }, t.prototype.cancelTextInput = function() { this.endTextInput() }, t.prototype.isTextInputActive = function() { return void 0 !== this.textInputItem }, t.prototype.processDblClick = function(t) {
                    if (t.source.type === i.MouseEventElementType.Shape) {
                        var e = this.control.model.findShape(t.source.key);
                        this.startTextInput(e)
                    } else if (t.source.type === i.MouseEventElementType.Connector) {
                        var n = (o = this.control.model.findConnector(t.source.key)).getTextPositionByPoint(t.modelPoint);
                        this.startTextInput(o, n)
                    } else if (t.source.type === i.MouseEventElementType.ConnectorText) {
                        var o = this.control.model.findConnector(t.source.key);
                        n = parseFloat(t.source.value);
                        this.startTextInput(o, n)
                    }
                }, t.prototype.onDblClick = function(t) { this.processDblClick(t) }, t.prototype.onKeyDown = function(t) { this.isTextInputActive() && (13 === t.keyCode && t.modifiers & r.ModifierKey.Ctrl && (t.preventDefault = !0, this.applyTextInput(t.inputText)), 27 === t.keyCode && this.cancelTextInput()) }, t.prototype.onBlur = function(t) { this.isTextInputActive() && this.applyTextInput(t.inputText) }, t.prototype.onFocus = function(t) {}, t
            }();
        e.TextInputHandler = u
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = function(t) {
            function e(e, n) { var o = t.call(this) || this; return o.shapeKey = e.key, o.text = n, o }
            return i(e, t), e.prototype.redo = function(t) {
                var e = t.model.findShape(this.shapeKey);
                this.oldText = e.text, t.changeShapeText(e, this.text)
            }, e.prototype.undo = function(t) {
                var e = t.model.findShape(this.shapeKey);
                t.changeShapeText(e, this.oldText)
            }, e
        }(n(3).HistoryItem);
        e.ChangeShapeTextHistoryItem = r
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(10),
            s = n(19),
            a = function(t) {
                function e(e) { var n = t.call(this) || this; return n.selection = e, n.selection.onChanged.add(n), n }
                return i(e, t), e.prototype.onMouseDown = function(t) {}, e.prototype.onMouseUp = function(t) {}, e.prototype.onFocus = function(t) { setTimeout(function() { this.showContextMenuAtSelection() }.bind(this), 1) }, e.prototype.onBlur = function(t) { setTimeout(function() { this.isLongTouch || this.hideContextMenu() }.bind(this), 1) }, e.prototype.onTextInputFocus = function(t) { setTimeout(function() { this.hideContextMenu() }.bind(this), 1) }, e.prototype.onTextInputBlur = function(t) { setTimeout(function() { this.showContextMenuAtSelection() }.bind(this), 1) }, e.prototype.onLongTouch = function(t) { t.source.type === r.MouseEventElementType.Document && this.showContextMenuAtEmptySelection(t.modelPoint) }, e.prototype.getSelectedItems = function() { return this.selection.getSelectedItems(!0) }, e.prototype.showContextMenuAtSelection = function() {
                    var t = this.getSelectedItems();
                    0 !== t.length && this.showContextMenu(void 0, s.DiagramModel.getRectangle(t).position)
                }, e.prototype.showContextMenuAtEmptySelection = function(t) { 0 === this.getSelectedItems().length && this.showContextMenu(void 0, t) }, e.prototype.notifySelectionChanged = function(t) { 0 !== this.getSelectedItems().length ? this.showContextMenuAtSelection() : this.hideContextMenu() }, e.prototype.notifyDragStart = function(t) { this.hideContextMenu() }, e.prototype.notifyDragEnd = function(t) { this.showContextMenuAtSelection() }, e
            }(n(125).ContextMenuHandler);
        e.ContextMenuTouchHandler = a
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = function(t) {
            function e(e) { return t.call(this, e) || this }
            return i(e, t), e.prototype.raiseShow = function() {
                var t = this;
                this.dispatcher.raise1(function(e) { return e.notifyConnectionTargetShow(t.key, t.targetRect) })
            }, e.prototype.raiseHide = function() { this.dispatcher.raise1(function(t) { return t.notifyConnectionTargetHide() }) }, e
        }(n(127).TargetVisualizerBase);
        e.ConnectionTargetVisualizer = r
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = function(t) {
            function e(e) { return t.call(this, e) || this }
            return i(e, t), e.prototype.raiseShow = function() {
                var t = this;
                this.dispatcher.raise1(function(e) { return e.notifyContainerTargetShow(t.key, t.targetRect) })
            }, e.prototype.raiseHide = function() { this.dispatcher.raise1(function(t) { return t.notifyContainerTargetHide() }) }, e
        }(n(127).TargetVisualizerBase);
        e.ContainerTargetVisualizer = r
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = function() { return function(t, e) { this.point = t, this.side = e } }();
        e.ConnectionPointInfo = o;
        var i = function() {
            function t(t) { this.dispatcher = t }
            return t.prototype.getKey = function() { return this.key }, t.prototype.setPoints = function(t, e, n, o) { this.key === t && this.pointIndex === n || (this.key = t, this.isSelected = o, this.points = e, this.pointIndex = n, this.raiseShow()) }, t.prototype.setPointIndex = function(t) { 0 <= t && t < this.points.length && this.pointIndex !== t && (this.pointIndex = t, this.raiseShow()) }, t.prototype.update = function() { this.raiseShow() }, t.prototype.reset = function() { "-1" !== this.key && (this.key = "-1", this.isSelected = !1, this.points = [], this.pointIndex = -1, this.raiseHide()) }, t.prototype.raiseShow = function() {
                var t = this;
                this.dispatcher.raise1(function(e) { return e.notifyConnectionPointsShow(t.key, t.points, t.pointIndex, t.isSelected) })
            }, t.prototype.raiseHide = function() { this.dispatcher.raise1(function(t) { return t.notifyConnectionPointsHide() }) }, t
        }();
        e.ConnectionPointsVisualizer = i
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = function() {
            function t(t) { this.dispatcher = t }
            return t.prototype.set = function(t, e) { this.point = t, this.text = e, this.raiseShow() }, t.prototype.reset = function() { void 0 !== this.point && (this.point = void 0, this.text = void 0, this.raiseHide()) }, t.prototype.raiseShow = function() {
                var t = this;
                this.dispatcher.raise1(function(e) { return e.notifyResizeInfoShow(t.point, t.text) })
            }, t.prototype.raiseHide = function() { this.dispatcher.raise1(function(t) { return t.notifyResizeInfoHide() }) }, t
        }();
        e.ResizeInfoVisualizer = o
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = function() {
            function t(t) { this.dispatcher = t }
            return t.prototype.setRectangle = function(t) { this.rect = t, this.raiseShow() }, t.prototype.reset = function() { this.rect = void 0, this.raiseHide() }, t.prototype.raiseShow = function() {
                var t = this;
                this.dispatcher.raise1(function(e) { return e.notifySelectionRectShow(t.rect) })
            }, t.prototype.raiseHide = function() { this.dispatcher.raise1(function(t) { return t.notifySelectionRectHide() }) }, t
        }();
        e.SelectionRectVisualizer = o
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(126),
            s = n(10),
            a = function(t) {
                function e(e, n, o, i, r) { void 0 === r && (r = i.readOnly); var s = t.call(this, e, n, o, i, r) || this; return e.onChanged.add(s), s }
                return i(e, t), e.prototype.onBlur = function(t) { setTimeout(function() { this.hideConnections() }.bind(this), 1) }, e.prototype.onFocus = function(t) { setTimeout(function() { this.showConnections() }.bind(this), 1) }, e.prototype.hideConnections = function() { this.readOnly || this.resetConnectionPoints() }, e.prototype.showConnections = function() {
                    if (!this.readOnly && this.needShowConnections()) {
                        var t = this.selection.getSelectedShapes();
                        this.setConnectionPoints(t[0], s.MouseEventElementType.ShapeConnectionPoint, -1)
                    }
                }, e.prototype.needShowConnections = function() {
                    var t = this.selection.getSelectedItems(),
                        e = this.selection.getSelectedShapes();
                    return 1 === t.length && 1 === e.length
                }, e.prototype.notifySelectionChanged = function(t) { this.needShowConnections() ? this.showConnections() : this.hideConnections() }, e.prototype.notifyDragStart = function(t) { this.hideConnections() }, e.prototype.notifyDragEnd = function(t) { this.showConnections() }, e
            }(r.VisualizerManager);
        e.VisualizerTouchManager = a
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = n(0),
            i = n(293),
            r = n(11),
            s = n(5),
            a = function() {
                function t(t) { this.onChanged = new o.EventDispatcher, this.inputPosition = new i.InputPosition(this), this.onChanged.add(this.inputPosition), this.initialize(t) }
                return t.prototype.initialize = function(t) { this.model = t, this.keys = [], this.inputPosition.initialize() }, t.prototype.add = function(t) { this.keys.indexOf(t) < 0 && (this.keys.push(t), this.raiseSelectionChanged()) }, t.prototype.remove = function(t) { this.keys.indexOf(t) >= 0 && (this.keys.splice(this.keys.indexOf(t), 1), this.raiseSelectionChanged()) }, t.prototype.clear = function() { this.keys = [], this.raiseSelectionChanged() }, t.prototype.set = function(t) { this.keys = t, this.raiseSelectionChanged() }, t.prototype.getKeys = function() { return this.keys }, t.prototype.getKey = function(t) { return this.keys[t] }, t.prototype.getSelectedItemsInsideContainers = function(t) {
                    var e = this,
                        n = t.slice();
                    return t.forEach(function(t) { t instanceof r.Shape && e.getSelectedItemsInsideContainers(e.model.getChildren(t)).forEach(function(t) {-1 !== n.indexOf(t) || e.hasKey(t.key) || n.push(t) }) }), n
                }, t.prototype.getSelectedItemsCore = function(t) { var e = this; return this.keys.map(function(t) { return e.model.findItem(t) }).filter(function(e) { return e && (t || !e.isLocked) }) }, t.prototype.getSelectedItems = function(t, e) { return e ? this.getSelectedItemsInsideContainers(this.getSelectedItemsCore(t)) : this.getSelectedItemsCore(t) }, t.prototype.getSelectedShapes = function(t, e) { var n = this; if (e) { var o = this.getSelectedItemsCore(t); return this.getSelectedItemsInsideContainers(o).map(function(t) { return t instanceof r.Shape ? t : void 0 }).filter(function(t) { return t }) } return this.keys.map(function(t) { return n.model.findShape(t) }).filter(function(e) { return e && (t || !e.isLocked) }) }, t.prototype.getSelectedConnectors = function(t, e) { var n = this; if (e) { var o = this.keys.map(function(t) { return n.model.findItem(t) }); return this.getSelectedItemsInsideContainers(o).map(function(t) { return t instanceof s.Connector ? t : void 0 }).filter(function(t) { return t }) } return this.keys.map(function(t) { return n.model.findConnector(t) }).filter(function(e) { return e && (t || !e.isLocked) }) }, t.prototype.hasKey = function(t) { return this.keys.indexOf(t) >= 0 }, t.prototype.isEmpty = function(t) { return !this.getSelectedItems(t).length }, t.prototype.selectRect = function(t) {
                    var e = [];
                    this.model.iterateItems(function(n) { n.intersectedByRect(t) && e.push(n.key) }), this.set(e), this.raiseSelectionChanged()
                }, t.prototype.onLoad = function() { this.raiseSelectionChanged() }, t.prototype.raiseSelectionChanged = function() { this.onChanged.raise("notifySelectionChanged", this) }, t
            }();
        e.Selection = a
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = n(24),
            i = n(27),
            r = function() {
                function t(t) { this.selection = t, this.initialize() }
                return t.prototype.initialize = function() { this.reset(), this.connectorPropertiesDefault = new o.ConnectorProperties, this.stylePropertiesDefault = new i.Style, this.styleTextPropertiesDefault = new i.StyleText }, t.prototype.reset = function() { this.connectorPropertiesCurrent = null, this.stylePropertiesCurrent = null, this.styleTextPropertiesCurrent = null }, t.prototype.getConnectorProperties = function() { return this.connectorPropertiesCurrent || (this.connectorPropertiesCurrent = this.connectorPropertiesDefault.clone(), this.updateConnectorProperties(this.connectorPropertiesCurrent)), this.connectorPropertiesCurrent }, t.prototype.getConnectorPropertyValue = function(t) { return this.getConnectorProperties()[t] }, t.prototype.getConnectorPropertyDefaultValue = function(t) { return this.connectorPropertiesDefault[t] }, t.prototype.setConnectorPropertyValue = function(t, e) { this.getConnectorProperties()[t] = e, this.connectorPropertiesDefault[t] = e }, t.prototype.updateConnectorProperties = function(t) {
                    var e = this,
                        n = this.selection.getSelectedConnectors();
                    t.forEach(function(o) { e.updatePropertyValue(t, n, function(t) { return t.properties }, o) })
                }, t.prototype.getStyleProperties = function() { return this.stylePropertiesCurrent || (this.stylePropertiesCurrent = this.stylePropertiesDefault.clone(), this.updateStyleProperties(this.stylePropertiesCurrent, "style")), this.stylePropertiesCurrent }, t.prototype.getStyleTextProperties = function() { return this.styleTextPropertiesCurrent || (this.styleTextPropertiesCurrent = this.styleTextPropertiesDefault.clone(), this.updateStyleProperties(this.styleTextPropertiesCurrent, "styleText")), this.styleTextPropertiesCurrent }, t.prototype.getStylePropertyValue = function(t) { return this.getStyleProperties()[t] }, t.prototype.getStylePropertyDefaultValue = function(t) { return this.stylePropertiesDefault[t] }, t.prototype.getStyleTextPropertyValue = function(t) { return this.getStyleTextProperties()[t] }, t.prototype.getStyleTextPropertyDefaultValue = function(t) { return this.styleTextPropertiesDefault[t] }, t.prototype.setStylePropertyValue = function(t, e) { this.getStyleProperties()[t] = e, this.stylePropertiesDefault[t] = e }, t.prototype.setStyleTextPropertyValue = function(t, e) { this.getStyleTextProperties()[t] = e, this.styleTextPropertiesDefault[t] = e }, t.prototype.updateStyleProperties = function(t, e) {
                    var n = this,
                        o = this.selection.getSelectedItems();
                    t.forEach(function(i) { n.updatePropertyValue(t, o, function(t) { return t[e] }, i) })
                }, t.prototype.updatePropertyValue = function(t, e, n, o) {
                    var i = void 0,
                        r = !1;
                    e.forEach(function(t) {
                        var e = n(t)[o];
                        if (void 0 === i && null != e) i = e, r = !0;
                        else if (r && i !== e) return void(i = void 0)
                    }), r && (t[o] = i)
                }, t.prototype.notifySelectionChanged = function(t) { this.reset() }, t
            }();
        e.InputPosition = r
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = n(3),
            i = n(8),
            r = function() {
                function t(t) { this.historyItems = [], this.currentIndex = -1, this.incrementalId = -1, this.transactionLevel = -1, this.unmodifiedIndex = -1, this.currTransactionId = 0, this.onChanged = new i.EventDispatcher, this.modelManipulator = t }
                return t.prototype.isModified = function() {
                    if (this.unmodifiedIndex == this.currentIndex) return !1;
                    for (var t = Math.min(this.unmodifiedIndex, this.currentIndex), e = Math.max(this.unmodifiedIndex, this.currentIndex), n = t + 1; n <= e; n++)
                        if (this.historyItems[n].changeModified()) return !0;
                    return !1
                }, t.prototype.undo = function() { this.canUndo() && (this.historyItems[this.currentIndex].undo(this.modelManipulator), this.currentIndex--, this.raiseChanged()) }, t.prototype.redo = function() { this.canRedo() && (this.currentIndex++, this.historyItems[this.currentIndex].redo(this.modelManipulator), this.raiseChanged()) }, t.prototype.canUndo = function() { return this.currentIndex >= 0 }, t.prototype.canRedo = function() { return this.currentIndex < this.historyItems.length - 1 }, t.prototype.beginTransaction = function() { return this.transactionLevel++, 0 == this.transactionLevel && (this.transaction = new o.CompositionHistoryItem), this.currTransactionId++ }, t.prototype.endTransaction = function() {
                    if (!(--this.transactionLevel >= 0)) {
                        if (this.transaction && this.transaction.historyItems) {
                            var t = this.transaction.historyItems.length;
                            t > 1 ? this.addInternal(this.transaction) : 1 == t && this.addInternal(this.transaction.historyItems.pop()), t > 0 && this.raiseChanged(), delete this.transaction
                        }
                    }
                }, t.prototype.addAndRedo = function(t) { this.add(t), t.redo(this.modelManipulator), this.raiseChanged() }, t.prototype.add = function(t) { this.transactionLevel >= 0 ? this.transaction.add(t) : this.addInternal(t) }, t.prototype.addInternal = function(t) { this.currentIndex < this.historyItems.length - 1 && (this.historyItems.splice(this.currentIndex + 1), this.unmodifiedIndex = Math.min(this.unmodifiedIndex, this.currentIndex)), this.historyItems.push(t), this.currentIndex++, this.deleteOldItems() }, t.prototype.deleteOldItems = function() {
                    var e = this.historyItems.length - t.MAX_HISTORY_ITEM_COUNT;
                    e > 0 && this.currentIndex > e && (this.historyItems.splice(0, e), this.currentIndex -= e)
                }, t.prototype.getNextId = function() { return this.incrementalId++, this.incrementalId }, t.prototype.clear = function() { this.currentIndex = -1, this.unmodifiedIndex = -1, this.incrementalId = -1, this.historyItems = [], delete this.transaction, this.transactionLevel = -1 }, t.prototype.resetModified = function() { this.unmodifiedIndex = this.currentIndex }, t.prototype.getCurrentItemId = function() { if (-1 == this.currentIndex) return -1; var t = this.historyItems[this.currentIndex]; return -1 == t.uniqueId && (t.uniqueId = this.getNextId()), t.uniqueId }, t.prototype.undoTransaction = function() {
                    if (this.transaction && this.transaction.historyItems) {
                        for (var t = this.transaction.historyItems; t.length;) t.pop().undo(this.modelManipulator);
                        this.raiseChanged()
                    }
                }, t.prototype.undoTransactionTo = function(t) {
                    for (var e = this.transaction.historyItems; e.length;) { var n = e.pop(); if (n.undo(this.modelManipulator), n === t) return }
                    this.raiseChanged()
                }, t.prototype.raiseChanged = function() {-1 === this.transactionLevel && this.onChanged.raise("notifyHistoryChanged") }, t.MAX_HISTORY_ITEM_COUNT = 100, t
            }();
        e.History = r
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = function(t) {
            function e(e) { var n = t.call(this) || this; return n.bars = [], n.control = e, n }
            return i(e, t), e.prototype.registerBar = function(t) { this.bars.push(t), t.onChanged.add(this), this.updateBarItemsState(t) }, e.prototype.updateItemsState = function(t) {
                if (!this.isUpdateLocked())
                    for (var e, n = 0; e = this.bars[n]; n++) this.updateBarItemsState(e, t)
            }, e.prototype.updateBarItemsState = function(t, e) {
                if (!this.isUpdateLocked() && t.isVisible()) {
                    var n = void 0;
                    if (e) {
                        var o = t.getCommandKeys().reduce(function(t, e) { return t[e] = !0, t }, {});
                        n = e.filter(function(t) { return o[t] })
                    } else n = t.getCommandKeys();
                    for (var i = n.length, r = 0; r < i; r++) this.updateBarItem(t, n[r])
                }
            }, e.prototype.updateBarItem = function(t, e) {
                var n = this.control.commandManager.getCommand(e);
                if (n) {
                    var o = n.getState();
                    if (t.setItemVisible(e, o.visible), o.visible && (t.setItemEnabled(e, o.enabled), !o.denyUpdateValue)) {
                        var i = this.getItemValue(o.value);
                        o.items && t.setItemSubItems(e, o.items), t.setItemValue(e, i, this.getDefaultItemValue(o.defaultValue))
                    }
                }
            }, e.prototype.setEnabled = function(t) { for (var e, n = 0; e = this.bars[n]; n++) e.setEnabled(t) }, e.prototype.notifyBarCommandExecuted = function(t, e) { this.control.commandManager.getCommand(t).execute(e) || this.updateItemsState([t]) }, e.prototype.notifyBarUpdateRequested = function() { this.updateItemsState() }, e.prototype.notifySelectionChanged = function(t) { this.updateItemsState() }, e.prototype.onUpdateUnlocked = function(t) { this.updateItemsState() }, e.prototype.getItemValue = function(t) { return t }, e.prototype.getDefaultItemValue = function(t) { return t }, e
        }(n(128).BatchUpdatableObject);
        e.BarManager = r
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(1),
            s = n(11),
            a = n(5),
            c = n(297),
            u = n(6),
            p = n(81),
            h = function(t) {
                function e(e, n, o, i, r) { var s = t.call(this, "Document", n, o, i, r) || this; return s.changesListener = e, s.updateLockCount = 0, s }
                return i(e, t), e.prototype.createModelItems = function(t, e, n, o, i, r) { c.DataSource.createModelItems(t, e, n, this, o, !0, !1, i, r) }, e.prototype.updateItemsByModel = function(t) {
                    var e = this;
                    this.deleteNodes(t), this.deleteEdges(t), t.items.forEach(function(n) { n instanceof s.Shape && e.updateNode(t, n), n instanceof a.Connector && e.updateEdge(t, n) })
                }, e.prototype.isItemObjectModified = function(t, e, n) {
                    var o = n.setLocked && e.locked !== t.locked || n.setZIndex && e.zIndex !== t.zIndex;
                    if (!o && n.setStyle) {
                        var i = t.style.getDefaultInstance();
                        t.style.forEach(function(n) { t.style[n] !== i[n] && t.style[n] !== e.style[n] && (o = !0) })
                    }
                    if (!o && n.setStyleText) {
                        var r = t.styleText.getDefaultInstance();
                        t.styleText.forEach(function(n) { t.styleText[n] !== r[n] && t.styleText[n] !== e.styleText[n] && (o = !0) })
                    }
                    return o
                }, e.prototype.updateItemObjectProperties = function(t, e, n) {
                    if (n.setLocked && (t.locked = e.locked, t.dataObj && void 0 !== t.locked && n.setLocked(t.dataObj, e.locked)), n.setStyle) {
                        var o = e.style.toObject();
                        t.style = o, t.dataObj && void 0 !== t.style && n.setStyle(t.dataObj, o)
                    }
                    if (n.setStyleText) {
                        var i = e.styleText.toObject();
                        t.styleText = i, t.dataObj && void 0 !== t.styleText && n.setStyleText(t.dataObj, i)
                    }
                    n.setZIndex && (t.zIndex = e.zIndex, t.dataObj && void 0 !== t.zIndex && n.setZIndex(t.dataObj, e.zIndex))
                }, e.prototype.deleteItems = function(t, e, n, o) {
                    t.slice().forEach(function(t) {
                        if (t.key && !e(t.key)) {
                            var i = n(t),
                                r = i.indexOf(t.dataObj);
                            i.splice(r, 1), o(t, r > -1)
                        }
                    })
                }, e.prototype.updateNode = function(t, e) {
                    var n = this,
                        o = this.findNode(e.dataKey);
                    if (o) this.isNodeObjectModified(e, o, t.units) ? (this.updateNodeObjectProperties(e, o, t.units), this.updateNodeObjectConnectedProperties(e, o), this.beginChangesNotification(), this.changesListener.notifyNodeUpdated.call(this.changesListener, this.nodeDataImporter.getKey(o.dataObj || o.key), o.dataObj, function(t, e) { n.endChangesNotification() }, function(t) { n.endChangesNotification() })) : this.updateNodeObjectConnectedProperties(e, o, this.changesListener);
                    else {
                        var i = {};
                        o = this.addNodeInternal(i, e.description.key, e.text), this.nodeDataSource.push(o.dataObj), this.nodeDataImporter.setKey(i, o.key), this.updateNodeObjectProperties(e, o, t.units), this.updateNodeObjectConnectedProperties(e, o), this.updateNodeObjectKey(e, o, o.dataObj), this.beginChangesNotification(), this.changesListener.notifyNodeInserted.call(this.changesListener, o.dataObj, function(t) { n.updateNodeObjectKey(e, o, t), n.endChangesNotification() }, function(t) { n.endChangesNotification() })
                    }
                }, e.prototype.isNodeObjectModified = function(t, e, n) { return this.isItemObjectModified(t, e, this.nodeDataImporter) || e.type !== t.description.key && !(void 0 === e.type && t.description.key === r.ShapeTypes.Rectangle) || !this.compareStrings(e.text, t.text) || this.nodeDataImporter.setImage && e.image !== t.image.url || this.nodeDataImporter.setLeft && e.left !== u.ModelUtils.getlUnitValue(n, t.position.x) || this.nodeDataImporter.setTop && e.top !== u.ModelUtils.getlUnitValue(n, t.position.y) || this.nodeDataImporter.setWidth && e.width !== u.ModelUtils.getlUnitValue(n, t.size.width) || this.nodeDataImporter.setHeight && e.height !== u.ModelUtils.getlUnitValue(n, t.size.height) }, e.prototype.updateNodeObjectProperties = function(t, e, n) {
                    if (this.updateItemObjectProperties(e, t, this.nodeDataImporter), this.nodeDataImporter.setType && (e.type = t.description.key, this.nodeDataImporter.setType(e.dataObj, t.description.key)), this.nodeDataImporter.setText && (e.text = t.text, this.nodeDataImporter.setText(e.dataObj, t.text)), this.nodeDataImporter.setImage && (e.image = t.image.url, this.nodeDataImporter.setImage(e.dataObj, t.image.url)), this.nodeDataImporter.setLeft) {
                        var o = u.ModelUtils.getlUnitValue(n, t.position.x);
                        e.left = o, this.nodeDataImporter.setLeft(e.dataObj, o)
                    }
                    if (this.nodeDataImporter.setTop) {
                        var i = u.ModelUtils.getlUnitValue(n, t.position.y);
                        e.top = i, this.nodeDataImporter.setTop(e.dataObj, i)
                    }
                    if (this.nodeDataImporter.setWidth) {
                        var r = u.ModelUtils.getlUnitValue(n, t.size.width);
                        e.width = r, this.nodeDataImporter.setWidth(e.dataObj, r)
                    }
                    if (this.nodeDataImporter.setHeight) {
                        var s = u.ModelUtils.getlUnitValue(n, t.size.height);
                        e.height = s, this.nodeDataImporter.setHeight(e.dataObj, s)
                    }
                }, e.prototype.updateNodeObjectConnectedProperties = function(t, e, n) {
                    if (this.useNodeParentId && void 0 !== this.nodeDataImporter.setParentKey) {
                        var o = this.getParentShapeKey(t),
                            i = this.findNode(o);
                        this.updateNodeObjectParentKey(e, i, n)
                    }
                    if (this.useNodeContainerId && void 0 !== this.nodeDataImporter.setContainerKey) {
                        var r = this.getContainerShapeKey(t),
                            s = this.findNode(r);
                        this.updateNodeObjectContainerKey(e, s, n)
                    }
                    if (this.useNodeItems && void 0 !== this.nodeDataImporter.setItems) {
                        o = this.getParentShapeKey(t), i = this.findNode(o);
                        this.updateNodeObjectItems(e, i, n)
                    }
                    if (this.useNodeChildren && void 0 !== this.nodeDataImporter.setChildren) {
                        r = this.getContainerShapeKey(t), s = this.findNode(r);
                        this.updateNodeObjectChildren(e, s, n)
                    }
                }, e.prototype.updateNodeObjectParentKey = function(t, e, n) {
                    var o = this,
                        i = this.nodeDataImporter.getParentKey(t.dataObj),
                        r = e ? this.nodeDataImporter.getKey(e.dataObj) : void 0;
                    i === r || this.isRootParentKey(i) && this.isRootParentKey(r) || (this.nodeDataImporter.setParentKey(t.dataObj, r), n && (this.beginChangesNotification(), n.notifyNodeUpdated.call(n, this.nodeDataImporter.getKey(t.dataObj) || t.key, t.dataObj, function(t, e) { o.endChangesNotification() }, function(t) { o.endChangesNotification() })))
                }, e.prototype.updateNodeObjectContainerKey = function(t, e, n) {
                    var o = this,
                        i = this.nodeDataImporter.getContainerKey(t.dataObj),
                        r = e ? this.nodeDataImporter.getKey(e.dataObj) : void 0;
                    i === r || this.isRootParentKey(i) && this.isRootParentKey(r) || (this.nodeDataImporter.setContainerKey(t.dataObj, r), n && (this.beginChangesNotification(), n.notifyNodeUpdated.call(n, this.nodeDataImporter.getKey(t.dataObj) || t.key, t.dataObj, function(t, e) { o.endChangesNotification() }, function(t) { o.endChangesNotification() })))
                }, e.prototype.isRootParentKey = function(t) { return null == t || !this.findNode(t) }, e.prototype.updateNodeObjectItems = function(t, e, n) {
                    var o = this;
                    if ((e && t.parentDataObj !== e.dataObj || !e && t.parentDataObj) && (!e || !this.checkNodeCyrcleItems(t.dataObj, e.dataObj))) {
                        var i = t.parentDataObj ? this.nodeDataImporter.getItems(t.parentDataObj) : this.nodeDataSource,
                            r = i.indexOf(t.dataObj);
                        i.splice(r, 1);
                        var s = e ? this.nodeDataImporter.getItems(e.dataObj) : this.nodeDataSource;
                        s ? s.push(t.dataObj) : this.nodeDataImporter.setItems(e.dataObj, [t.dataObj]), t.parentDataObj = e && e.dataObj, n && (this.beginChangesNotification(), n.notifyNodeUpdated.call(n, this.nodeDataImporter.getKey(t.dataObj) || t.key, t.dataObj, function(t, e) { o.endChangesNotification() }, function(t) { o.endChangesNotification() }))
                    }
                }, e.prototype.updateNodeObjectChildren = function(t, e, n) {
                    var o = this;
                    if (e && t.containerDataObj !== e.dataObj || !e && t.containerDataObj) {
                        var i = t.containerDataObj ? this.nodeDataImporter.getChildren(t.containerDataObj) : this.nodeDataSource,
                            r = i.indexOf(t.dataObj);
                        i.splice(r, 1);
                        var s = e ? this.nodeDataImporter.getChildren(e.dataObj) : this.nodeDataSource;
                        s ? s.push(t.dataObj) : this.nodeDataImporter.setChildren(e.dataObj, [t.dataObj]), t.containerDataObj = e && e.dataObj, n && (this.beginChangesNotification(), n.notifyNodeUpdated.call(n, this.nodeDataImporter.getKey(t.dataObj) || t.key, t.dataObj, function(t, e) { o.endChangesNotification() }, function(t) { o.endChangesNotification() }))
                    }
                }, e.prototype.checkNodeCyrcleItems = function(t, e) {
                    var n = this,
                        o = !1,
                        i = this.nodeDataImporter.getItems(t);
                    return i && i.forEach(function(t) { o = o || t === e || n.checkNodeCyrcleItems(t, e) }), o
                }, e.prototype.updateNodeObjectKey = function(t, e, n) {
                    var o = this.nodeDataImporter.getKey(n);
                    if (null != o && o !== e.key && (e.key = o, delete this.nodeKeyMap[e.key], this.nodeKeyMap[o] = e.key), t.dataKey = e.key, e.dataObj !== n) {
                        var i = this.getNodeArray(e),
                            r = i.indexOf(e.dataObj);
                        i.splice(r, 1, n), e.dataObj = n
                    }
                }, e.prototype.deleteNodes = function(t) {
                    var e = this;
                    this.deleteItems(this.nodes, function(e) { return t.findShapeByDataKey(e) }, function(t) { return e.getNodeArray(t) }, function(t, n) {
                        var o = t.dataObj && e.nodeDataImporter.getKey(t.dataObj) || t.key,
                            i = e.nodeKeyMap[o];
                        i && delete e.nodeKeyMap[o];
                        var r = e.findNode(i);
                        r && e.nodes.splice(e.nodes.indexOf(r), 1), n && (e.beginChangesNotification(), e.changesListener.notifyNodeRemoved.call(e.changesListener, o, t.dataObj, function(t, n) { e.endChangesNotification() }, function(t) { e.endChangesNotification() }))
                    })
                }, e.prototype.getParentShapeKey = function(t) {
                    for (var e, n = 0; n < t.attachedConnectors.length; n++)
                        if (t.attachedConnectors[n].endItem === t) {
                            var o = t.attachedConnectors[n].beginItem;
                            e = o && o.dataKey;
                            break
                        }
                    return e
                }, e.prototype.getNodeArray = function(t) { var e; return this.useNodeItems && t.parentDataObj ? e = this.nodeDataImporter.getItems(t.parentDataObj) : t.containerDataObj && (e = this.nodeDataImporter.getChildren(t.containerDataObj)), e || this.nodeDataSource }, e.prototype.getContainerShapeKey = function(t) { return t.container && t.container.dataKey }, e.prototype.updateEdge = function(t, e) {
                    var n = this,
                        o = e.beginItem ? e.beginItem.dataKey : void 0,
                        i = e.endItem ? e.endItem.dataKey : void 0,
                        r = this.findEdge(e.dataKey);
                    if (r) this.isEdgeObjectModified(e, r, t.units) && (this.updateEdgeObjectProperties(e, r, t.units), r.dataObj && (this.beginChangesNotification(), this.changesListener.notifyEdgeUpdated.call(this.changesListener, this.edgeDataImporter.getKey(r.dataObj) || r.key, r.dataObj, function(t, e) { n.endChangesNotification() }, function(t) { n.endChangesNotification() })));
                    else {
                        var s = this.useEdgesArray() ? {} : void 0;
                        r = this.addEdgeInternal(s, o, i), s && (this.edgeDataImporter.setKey(s, r.key), this.edgeDataSource.push(r.dataObj)), this.updateEdgeObjectProperties(e, r, t.units), this.updateEdgeObjectKey(e, r, r.dataObj), s && (this.beginChangesNotification(), this.changesListener.notifyEdgeInserted.call(this.changesListener, r.dataObj, function(t) { n.updateEdgeObjectKey(e, r, t), n.endChangesNotification() }, function(t) { n.endChangesNotification() }))
                    }
                }, e.prototype.isEdgeObjectModified = function(t, e, n) { return this.isItemObjectModified(t, e, this.edgeDataImporter) || e.from !== (t.beginItem ? t.beginItem.dataKey : void 0) || e.to !== (t.endItem ? t.endItem.dataKey : void 0) || this.edgeDataImporter.setFromPointIndex && e.fromPointIndex !== t.beginConnectionPointIndex || this.edgeDataImporter.setToPointIndex && e.toPointIndex !== t.endConnectionPointIndex || this.edgeDataImporter.setPoints && (!e.points || !p.Data.ArrayEqual(e.points.map(function(t) { return t.x }), t.points.map(function(t) { return u.ModelUtils.getlUnitValue(n, t.x) })) || !p.Data.ArrayEqual(e.points.map(function(t) { return t.y }), t.points.map(function(t) { return u.ModelUtils.getlUnitValue(n, t.y) }))) || this.edgeDataImporter.setText && !this.compareStrings(e.text, t.getText()) || this.edgeDataImporter.setLineOption && e.lineOption !== t.properties.lineOption || this.edgeDataImporter.setStartLineEnding && e.startLineEnding !== t.properties.startLineEnding || this.edgeDataImporter.setEndLineEnding && e.endLineEnding !== t.properties.endLineEnding }, e.prototype.updateEdgeObjectProperties = function(t, e, n) {
                    if (this.updateItemObjectProperties(e, t, this.edgeDataImporter), this.edgeDataImporter.setFrom) {
                        var o = this.findNode(t.beginItem && t.beginItem.dataKey);
                        e.from = o && o.key, e.dataObj && this.edgeDataImporter.setFrom(e.dataObj, o && o.dataObj && this.nodeDataImporter.getKey(o.dataObj))
                    }
                    if (this.edgeDataImporter.setTo) {
                        var i = this.findNode(t.endItem && t.endItem.dataKey);
                        e.to = i && i.key, e.dataObj && this.edgeDataImporter.setTo(e.dataObj, i && i.dataObj && this.nodeDataImporter.getKey(i.dataObj))
                    }
                    if (this.edgeDataImporter.setFromPointIndex && (e.fromPointIndex = t.beginConnectionPointIndex, e.dataObj && this.edgeDataImporter.setFromPointIndex(e.dataObj, t.beginConnectionPointIndex)), this.edgeDataImporter.setToPointIndex && (e.toPointIndex = t.endConnectionPointIndex, e.dataObj && this.edgeDataImporter.setToPointIndex(e.dataObj, t.endConnectionPointIndex)), this.edgeDataImporter.setPoints) {
                        var r = t.points.map(function(t) { return { x: u.ModelUtils.getlUnitValue(n, t.x), y: u.ModelUtils.getlUnitValue(n, t.y) } });
                        e.points = r, e.dataObj && this.edgeDataImporter.setPoints(e.dataObj, r)
                    }
                    if (this.edgeDataImporter.setText) {
                        var s = t.getText();
                        e.text = s, e.dataObj && this.edgeDataImporter.setText(e.dataObj, s)
                    }
                    this.edgeDataImporter.setLineOption && (e.lineOption = t.properties.lineOption, e.dataObj && this.edgeDataImporter.setLineOption(e.dataObj, t.properties.lineOption)), this.edgeDataImporter.setStartLineEnding && (e.startLineEnding = t.properties.startLineEnding, e.dataObj && this.edgeDataImporter.setStartLineEnding(e.dataObj, t.properties.startLineEnding)), this.edgeDataImporter.setEndLineEnding && (e.endLineEnding = t.properties.endLineEnding, e.dataObj && this.edgeDataImporter.setEndLineEnding(e.dataObj, t.properties.endLineEnding))
                }, e.prototype.updateEdgeObjectKey = function(t, e, n) {
                    var o = n && this.edgeDataImporter.getKey(n);
                    if (null != o && o !== e.key && (e.key = o, delete this.edgeKeyMap[e.key], this.edgeKeyMap[o] = e.key), t.dataKey = e.key, e.dataObj !== n) {
                        var i = this.edgeDataSource,
                            r = i.indexOf(e.dataObj);
                        i.splice(r, 1, n), e.dataObj = n
                    }
                }, e.prototype.deleteEdges = function(t) {
                    var e = this;
                    this.deleteItems(this.edges, function(e) { return t.findConnectorByDataKey(e) }, function(t) { return e.edgeDataSource }, function(t, n) {
                        var o = t.dataObj && e.edgeDataImporter.getKey(t.dataObj) || t.key,
                            i = e.edgeKeyMap[o];
                        i && delete e.edgeKeyMap[o];
                        var r = e.findEdge(i);
                        r && e.edges.splice(e.edges.indexOf(r), 1), n && (e.beginChangesNotification(), e.changesListener.notifyEdgeRemoved.call(e.changesListener, o, t.dataObj, function(t, n) { e.endChangesNotification() }, function(t) { e.endChangesNotification() }))
                    })
                }, e.prototype.compareStrings = function(t, e) { return "string" == typeof t && "string" == typeof e ? t === e : this.isEmptyString(t) && this.isEmptyString(e) }, e.prototype.isEmptyString = function(t) { return "" === t || null == t }, e.prototype.beginChangesNotification = function() { this.updateLockCount++ }, e.prototype.endChangesNotification = function() { this.updateLockCount--, this.isUpdateLocked() || setTimeout(function() { this.changesListener.processDataChanges.call(this.changesListener, !1) }.bind(this), 0) }, e.prototype.isUpdateLocked = function() { return this.updateLockCount > 0 }, e
            }(c.DataSource);
        e.DocumentDataSource = h
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = n(1),
            i = n(6),
            r = n(298),
            s = n(299),
            a = n(5),
            c = n(0),
            u = n(51),
            p = n(52),
            h = n(37),
            l = n(44),
            d = n(117),
            f = n(76),
            y = n(46),
            m = n(36),
            g = n(55),
            v = n(54),
            P = n(104),
            C = n(38),
            S = n(79),
            _ = function() {
                function t(t, e, n, o, i) {
                    if (this.key = t, this.nodes = [], this.edges = [], this.nodeKeyMap = {}, this.edgeKeyMap = {}, this.useNodeParentId = !1, this.useNodeContainerId = !1, this.useNodeChildren = !1, this.useNodeItems = !1, this.containers = null, null == t) throw new Error("DataSource key must be specified");
                    this.key = t.toString(), this.nodeDataImporter = this.createNodeDataImporter(o), this.edgeDataImporter = this.createEdgeDataImporter(i), this.nodeDataSource = e || [], this.edgeDataSource = n || [], this.fetchData()
                }
                return t.prototype.createNodeDataImporter = function(t) { var e = new r.DataSourceNodeDataImporter; return t && this.assignNodeDataImporterProperties(t, e), e }, t.prototype.createEdgeDataImporter = function(t) { var e = new r.DataSourceEdgeDataImporter; return t && this.assignEdgeDataImporterProperties(t, e), e }, t.prototype.assignItemDataImporterProperties = function(t, e) { t.getKey && (e.getKey = t.getKey), t.setKey && (e.setKey = t.setKey), t.getLocked && (e.getLocked = t.getLocked), t.setLocked && (e.setLocked = t.setLocked), t.getStyle && (e.getStyle = t.getStyle), t.setStyle && (e.setStyle = t.setStyle), t.getStyleText && (e.getStyleText = t.getStyleText), t.setStyleText && (e.setStyleText = t.setStyleText), t.getZIndex && (e.getZIndex = t.getZIndex), t.setZIndex && (e.setZIndex = t.setZIndex) }, t.prototype.assignNodeDataImporterProperties = function(t, e) { this.assignItemDataImporterProperties(t, e), t.getType && (e.getType = t.getType), t.setType && (e.setType = t.setType), t.getImage && (e.getImage = t.getImage), t.setImage && (e.setImage = t.setImage), t.getText && (e.getText = t.getText), t.setText && (e.setText = t.setText), t.getLeft && (e.getLeft = t.getLeft), t.setLeft && (e.setLeft = t.setLeft), t.getTop && (e.getTop = t.getTop), t.setTop && (e.setTop = t.setTop), t.getWidth && (e.getWidth = t.getWidth), t.setWidth && (e.setWidth = t.setWidth), t.getHeight && (e.getHeight = t.getHeight), t.setHeight && (e.setHeight = t.setHeight), t.getChildren && (e.getChildren = t.getChildren), t.setChildren && (e.setChildren = t.setChildren), t.getParentKey && (e.getParentKey = t.getParentKey), t.setParentKey && (e.setParentKey = t.setParentKey), t.getItems && (e.getItems = t.getItems), t.setItems && (e.setItems = t.setItems), t.getContainerKey && (e.getContainerKey = t.getContainerKey), t.setContainerKey && (e.setContainerKey = t.setContainerKey) }, t.prototype.assignEdgeDataImporterProperties = function(t, e) { this.assignItemDataImporterProperties(t, e), t.getFrom && (e.getFrom = t.getFrom), t.setFrom && (e.setFrom = t.setFrom), t.getFromPointIndex && (e.getFromPointIndex = t.getFromPointIndex), t.setFromPointIndex && (e.setFromPointIndex = t.setFromPointIndex), t.getTo && (e.getTo = t.getTo), t.setTo && (e.setTo = t.setTo), t.getToPointIndex && (e.getToPointIndex = t.getToPointIndex), t.setToPointIndex && (e.setToPointIndex = t.setToPointIndex), t.getPoints && (e.getPoints = t.getPoints), t.setPoints && (e.setPoints = t.setPoints), t.getText && (e.getText = t.getText), t.setText && (e.setText = t.setText), t.getLineOption && (e.getLineOption = t.getLineOption), t.setLineOption && (e.setLineOption = t.setLineOption), t.getStartLineEnding && (e.getStartLineEnding = t.getStartLineEnding), t.setStartLineEnding && (e.setStartLineEnding = t.setStartLineEnding), t.getEndLineEnding && (e.getEndLineEnding = t.getEndLineEnding), t.setEndLineEnding && (e.setEndLineEnding = t.setEndLineEnding) }, t.prototype.fetchData = function() {
                    var t = this;
                    if (this.useNodeParentId = void 0 !== this.nodeDataImporter.getParentKey, this.useNodeContainerId = void 0 !== this.nodeDataImporter.getContainerKey, this.useNodeItems = void 0 !== this.nodeDataImporter.getItems, this.useNodeChildren = void 0 !== this.nodeDataImporter.getChildren, this.useEdgesArray() && this.useNodeParentId) throw new Error("You cannot use edges array and parentKey simultaneously.");
                    if (this.useEdgesArray() && this.useNodeItems) throw new Error("You cannot use edges array and items array simultaneously.");
                    if (this.useNodeParentId && this.useNodeItems) throw new Error("You cannot use parentKey and items array simultaneously.");
                    if (this.useNodeContainerId && this.useNodeChildren) throw new Error("You cannot use containerKey and children array simultaneously.");
                    this.nodeDataSource.forEach(function(e) { t.addNode(e) }), this.useEdgesArray() ? this.edgeDataSource.forEach(function(e) { t.addEdge(e) }) : this.nodes.forEach(function(e) { t.addNodeEdgesByParentId(e) })
                }, t.prototype.isContainer = function(t) { var e = this; return !this.containers && this.useNodeContainerId && (this.containers = this.nodeDataSource.map(function(t) { return e.nodeDataImporter.getContainerKey(t) }).filter(function(t) { return null != t }).reduce(function(t, e) { return t[e] = !0, t }, {})), this.containers && this.containers[t] }, t.prototype.useEdgesArray = function() { return Array.isArray(this.edgeDataSource) && (this.edgeDataSource.length || !(this.useNodeParentId || this.useNodeItems)) }, t.prototype.addNode = function(t, e, n, i) {
                    var r = this,
                        s = this.nodeDataImporter.getChildren && this.nodeDataImporter.getChildren(t),
                        a = s && Array.isArray(s) && s.length,
                        c = a || this.isContainer(this.nodeDataImporter.getKey(t)),
                        u = this.nodeDataImporter.getType && this.nodeDataImporter.getType(t) || c && o.ShapeTypes.VerticalContainer || o.ShapeTypes.Rectangle,
                        p = this.nodeDataImporter.getText && (this.nodeDataImporter.getText(t) || ""),
                        h = this.addNodeInternal(t, u, p, e, n, i);
                    if (this.assignNodeProperties(h, t), a && s.forEach(function(e) { r.addNode(e, void 0, h.key, t) }), this.useNodeItems) {
                        var l = this.nodeDataImporter.getItems(t);
                        Array.isArray(l) && l.length && l.forEach(function(e) {
                            var o = r.addNode(e, t, n, i);
                            r.addEdgeInternal(void 0, h.key, o.key)
                        })
                    }
                    return h
                }, t.prototype.addNodeEdgesByParentId = function(t) {
                    if (this.useNodeParentId) {
                        var e = this.nodeDataImporter.getParentKey(t.dataObj);
                        null != e && this.addEdgeInternal(void 0, this.getNodeKey(t.dataObj, this.nodeDataImporter.getParentKey), this.getNodeKey(t.dataObj, this.nodeDataImporter.getKey))
                    }
                }, t.prototype.addNodeInternal = function(t, e, n, o, r, a) {
                    var c = this.nodeDataImporter.getKey(t),
                        u = null != c ? c : i.ModelUtils.getGuidItemKey(),
                        p = new s.DataSourceNodeItem(this.key, u, t, e, n, o, r, a);
                    return this.nodes.push(p), null == c && (c = u, this.nodeDataImporter.setKey(t, u)), null != c && (this.nodeKeyMap[c] = u), p
                }, t.prototype.addEdge = function(t) { var e = this.addEdgeInternal(t, this.getNodeKey(t, this.edgeDataImporter.getFrom), this.getNodeKey(t, this.edgeDataImporter.getTo)); return this.assignEdgeProperties(e, t), e }, t.prototype.addEdgeInternal = function(t, e, n) {
                    var o = t && this.edgeDataImporter.getKey(t),
                        r = null != o ? o : i.ModelUtils.getGuidItemKey(),
                        a = new s.DataSourceEdgeItem(this.key, r, t, e, n);
                    return this.edges.push(a), null == o && (o = r, t && this.edgeDataImporter.setKey(t, r)), null != o && (this.edgeKeyMap[o] = r), a
                }, t.prototype.assignItemProperties = function(t, e, n) { n.getLocked && (t.locked = n.getLocked(e)), n.getStyle && (t.style = n.getStyle(e)), n.getStyleText && (t.styleText = n.getStyleText(e)), n.getZIndex && (t.zIndex = n.getZIndex(e)) }, t.prototype.assignNodeProperties = function(t, e) { this.assignItemProperties(t, e, this.nodeDataImporter), this.nodeDataImporter.getImage && (t.image = this.nodeDataImporter.getImage(e)), this.nodeDataImporter.getLeft && (t.left = this.nodeDataImporter.getLeft(e)), this.nodeDataImporter.getTop && (t.top = this.nodeDataImporter.getTop(e)), this.nodeDataImporter.getWidth && (t.width = this.nodeDataImporter.getWidth(e)), this.nodeDataImporter.getHeight && (t.height = this.nodeDataImporter.getHeight(e)), this.nodeDataImporter.getContainerKey && (t.containerKey = this.nodeDataImporter.getContainerKey(e)) }, t.prototype.assignEdgeProperties = function(t, e) { this.assignItemProperties(t, e, this.edgeDataImporter), this.edgeDataImporter.getFromPointIndex && (t.fromPointIndex = this.edgeDataImporter.getFromPointIndex(e)), this.edgeDataImporter.getToPointIndex && (t.toPointIndex = this.edgeDataImporter.getToPointIndex(e)), this.edgeDataImporter.getPoints && (t.points = this.edgeDataImporter.getPoints(e)), this.edgeDataImporter.getText && (t.text = this.edgeDataImporter.getText(e)), this.edgeDataImporter.getLineOption && (t.lineOption = this.edgeDataImporter.getLineOption(e)), this.edgeDataImporter.getStartLineEnding && (t.startLineEnding = this.edgeDataImporter.getStartLineEnding(e)), this.edgeDataImporter.getEndLineEnding && (t.endLineEnding = this.edgeDataImporter.getEndLineEnding(e)) }, t.prototype.findNode = function(t) { return this.nodes.filter(function(e) { return void 0 !== t && e.key === t })[0] }, t.prototype.findEdge = function(t) { return this.edges.filter(function(e) { return void 0 !== t && e.key === t })[0] }, t.prototype.getNodeKey = function(t, e) { return this.nodeKeyMap[e(t)] }, t.prototype.createModelItems = function(e, n, o, i, r, s) { t.createModelItems(e, n, o, this, i, !1, !0, r, s) }, t.createModelItems = function(e, n, o, r, s, a, u, p, h) {
                    var d = 0,
                        f = 0,
                        y = {},
                        m = [],
                        g = [];
                    (e.beginTransaction(), r.nodes.forEach(function(o) {
                        var i = new c.Point(2e3 * f++, 2e3 * d),
                            r = t.createShapeByNode(e, n, o, i, a);
                        void 0 !== o.key && (y[o.key] = r.key), f > 4 && (f = 0, d++), m.push(r)
                    }), r.nodes.forEach(function(t) {
                        if (void 0 !== t.containerKey && null !== t.containerKey) {
                            var o = y[t.key],
                                r = n.findShape(o),
                                s = y[t.containerKey],
                                a = n.findShape(s);
                            a && i.ModelUtils.insertToContainer(e, n, r, a)
                        }
                    }), r.edges.forEach(function(o) {
                        var r = n.findShape(y[o.to]),
                            s = n.findShape(y[o.from]);
                        if (r && void 0 !== s) {
                            var c = t.createConnectorByEdge(e, n, o, r, s, a);
                            g.push(c), i.ModelUtils.updateConnectorContainer(e, n, c)
                        }
                    }), void 0 !== s) && i.ModelUtils.getGraphInfoByItems(n, m, g).forEach(function(t) {
                        var o = s.getLayoutBuilder(t.graph).build(),
                            r = i.ModelUtils.getNonGraphItems(n, t.container, o.nodeToLayout, m, g);
                        i.ModelUtils.applyLayout(e, n, t.container, t.graph, o, r, s.layoutSettings, p, h)
                    });
                    if (u) {
                        var v = g.map(function(t) { return t.key }).concat(m.map(function(t) { return t.key }));
                        e.addAndRedo(new l.SetSelectionHistoryItem(o, v))
                    }
                    i.ModelUtils.tryUpdateModelSize(e, n), e.endTransaction()
                }, t.createShapeByNode = function(t, e, n, o, r) {
                    var s = r ? n.key : void 0;
                    void 0 !== n.left && (o.x = i.ModelUtils.getTwipsValue(e.units, n.left)), void 0 !== n.top && (o.y = i.ModelUtils.getTwipsValue(e.units, n.top));
                    var a = new u.AddShapeHistoryItem(n.type, o, n.text, s);
                    t.addAndRedo(a);
                    var c = e.findShape(a.shapeKey),
                        p = c.size.clone();
                    return void 0 !== n.width && (p.width = i.ModelUtils.getTwipsValue(e.units, n.width)), void 0 !== n.height && (p.height = i.ModelUtils.getTwipsValue(e.units, n.height)), i.ModelUtils.setShapeSize(t, e, c, o, p), void 0 !== n.image && t.addAndRedo(new d.ChangeShapeImageHistoryItem(c, n.image)), this.changeItemByDataItem(t, c, n), c
                }, t.createConnectorByEdge = function(t, e, n, o, r, s) {
                    var u = s ? n.key : void 0,
                        l = Array.isArray(n.points) && n.points.length > 1 ? n.points.map(function(t) { if (void 0 !== t.x && void 0 !== t.y) return new c.Point(i.ModelUtils.getTwipsValue(e.units, t.x), i.ModelUtils.getTwipsValue(e.units, t.y)) }).filter(function(t) { return t }) : [r.position.clone(), o.position.clone()],
                        d = new p.AddConnectorHistoryItem(l, u);
                    t.addAndRedo(d);
                    var f = e.findConnector(d.connectorKey),
                        y = void 0 !== n.fromPointIndex ? n.fromPointIndex : -1;
                    t.addAndRedo(new h.AddConnectionHistoryItem(f, r, y, a.ConnectorPosition.Begin));
                    var m = void 0 !== n.toPointIndex ? n.toPointIndex : -1;
                    return t.addAndRedo(new h.AddConnectionHistoryItem(f, o, m, a.ConnectorPosition.End)), i.ModelUtils.updateConnectorAttachedPoints(t, e, f), void 0 !== n.text && t.addAndRedo(new v.ChangeConnectorTextHistoryItem(f, a.CONNECTOR_DEFAULT_TEXT_POSITION, n.text)), void 0 !== n.lineOption && t.addAndRedo(new g.ChangeConnectorPropertyHistoryItem(f.key, "lineOption", n.lineOption)), void 0 !== n.startLineEnding && t.addAndRedo(new g.ChangeConnectorPropertyHistoryItem(f.key, "startLineEnding", n.startLineEnding)), void 0 !== n.endLineEnding && t.addAndRedo(new g.ChangeConnectorPropertyHistoryItem(f.key, "endLineEnding", n.endLineEnding)), this.changeItemByDataItem(t, f, n), f
                }, t.changeItemByDataItem = function(t, e, n) {
                    if (void 0 !== n.zIndex && t.addAndRedo(new f.ChangeZindexHistoryItem(e, n.zIndex)), void 0 !== n.style)
                        for (var o in n.style)
                            if (n.style.hasOwnProperty(o)) {
                                var i = S.isColorProperty(o) ? C.ColorHelper.stringToHash(n.style[o]) : n.style[o];
                                t.addAndRedo(new y.ChangeStyleHistoryItem(e.key, o, i))
                            }
                    if (void 0 !== n.styleText)
                        for (var o in n.styleText)
                            if (n.styleText.hasOwnProperty(o)) {
                                i = S.isColorProperty(o) ? C.ColorHelper.stringToHash(n.styleText[o]) : n.styleText[o];
                                t.addAndRedo(new m.ChangeStyleTextHistoryItem(e.key, o, i))
                            }
                    void 0 !== n.locked && t.addAndRedo(new P.ChangeLockedHistoryItem(e, n.locked))
                }, t
            }();
        e.DataSource = _
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = function() { return function() { this.getKey = function(t) { return t.id }, this.setKey = function(t, e) { t.id = e }, this.getLocked = void 0, this.setLocked = void 0, this.getStyle = void 0, this.setStyle = void 0, this.getStyleText = void 0, this.setStyleText = void 0, this.getZIndex = void 0, this.setZIndex = void 0 } }();
        e.DataSourceItemDataImporter = r;
        var s = function(t) {
            function e() { var e = null !== t && t.apply(this, arguments) || this; return e.getType = void 0, e.setType = void 0, e.getText = void 0, e.setText = void 0, e.getImage = void 0, e.setImage = void 0, e.getLeft = void 0, e.setLeft = void 0, e.getTop = void 0, e.setTop = void 0, e.getWidth = void 0, e.setWidth = void 0, e.getHeight = void 0, e.setHeight = void 0, e.getChildren = void 0, e.setChildren = void 0, e.getParentKey = void 0, e.setParentKey = void 0, e.getItems = void 0, e.setItems = void 0, e.getContainerKey = void 0, e.setContainerKey = void 0, e }
            return i(e, t), e
        }(r);
        e.DataSourceNodeDataImporter = s;
        var a = function(t) {
            function e() { var e = null !== t && t.apply(this, arguments) || this; return e.getFrom = function(t) { return t.from }, e.setFrom = function(t, e) { t.from = e }, e.getFromPointIndex = void 0, e.setFromPointIndex = void 0, e.getTo = function(t) { return t.to }, e.setTo = function(t, e) { t.to = e }, e.getToPointIndex = void 0, e.setToPointIndex = void 0, e.getPoints = void 0, e.setPoints = void 0, e.getText = void 0, e.setText = void 0, e.getLineOption = void 0, e.setLineOption = void 0, e.getStartLineEnding = void 0, e.setStartLineEnding = void 0, e.getEndLineEnding = void 0, e.setEndLineEnding = void 0, e }
            return i(e, t), e
        }(r);
        e.DataSourceEdgeDataImporter = a
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = function() { return function(t, e, n) { this.sourceKey = t, this.key = e, this.dataObj = n } }();
        e.DataSourceItem = r;
        var s = function(t) {
            function e(e, n, o, i, r, s, a, c) { var u = t.call(this, e, n, o) || this; return u.type = i, u.text = r, u.parentDataObj = s, u.containerKey = a, u.containerDataObj = c, u }
            return i(e, t), e
        }(r);
        e.DataSourceNodeItem = s;
        var a = function(t) {
            function e(e, n, o, i, r) { var s = t.call(this, e, n, o) || this; return s.sourceKey = e, s.from = i, s.to = r, s }
            return i(e, t), e
        }(r);
        e.DataSourceEdgeItem = a
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = Math.log(.05),
            i = Math.log(3),
            r = 40,
            s = c(1),
            a = function() {
                function t(t) { this.settings = t }
                return t.prototype.initialize = function(t) { this.view = t }, t.prototype.scrollTo = function(t, e) { this.view && this.view.setScrollTo(t, e) }, t.prototype.scrollBy = function(t) { return !this.view || 0 === t.x && 0 === t.y ? t : this.view.scrollBy(t) }, t.prototype.normalize = function() { this.view.tryNormalizePaddings() }, t.prototype.getNextStepZoom = function(t) {
                    var e = this.getNearestCurrentZoomStep(),
                        n = t ? 1 : -1,
                        a = Math.min(r - 1, Math.max(0, e + n));
                    if (a !== s) { var c = o + (i - o) * a / (r - 1); return Math.exp(c) }
                    return 1
                }, t.prototype.getNearestCurrentZoomStep = function() { return c(this.getZoom()) }, t.prototype.getZoom = function() { return this.view ? this.view.actualZoom : this.settings.zoomLevel }, t.prototype.resetScroll = function() { this.view.update({ horizontal: !0, vertical: !0 }) }, t
            }();

        function c(t) { var e = Math.log(t); return Math.round((e - o) * (r - 1) / (i - o)) }
        e.ViewController = a
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = n(302),
            i = n(303),
            r = n(25),
            s = function() {
                function t(t) { this.toolboxes = [], this.readonly = t }
                return t.prototype.create = function(t, e, n, s, a, c) {
                    var u = Array.isArray(a) ? a : r.ShapeDescriptionManager.getTypesByCategory(a),
                        p = c ? new o.TextToolbox(t, this.readonly, { shapeTypes: u }) : new i.IconToolbox(t, this.readonly, { shapeIconSize: e, shapeIconSpacing: n, shapeIconAttributes: s, shapeTypes: u });
                    return p.render(), this.toolboxes.push(p), p
                }, t.prototype.dispose = function() { for (var t = 0; t < this.toolboxes.length; t++) this.toolboxes[t].dispose() }, t.prototype.applyFilter = function(t, e) { var n = this; return this.toolboxes.reduce(function(o, i, r) { return ("number" != typeof e || r === e) && i.render(function(e) { return n.searchFilter(e, t, r) }) && o.push(r), o }, []) }, t.prototype.searchFilter = function(t, e, n, o) { return !(e && (!o || -1 !== o.indexOf(n))) || t.indexOf(e) > -1 }, t.prototype.notifyReadOnlyChanged = function(t) { this.readonly = t }, t
            }();
        e.ToolboxManager = s
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(129),
            s = n(25),
            a = function(t) {
                function e() { return null !== t && t.apply(this, arguments) || this }
                return i(e, t), e.prototype.createElements = function(t, e) {
                    e.forEach(function(e) {
                        var n = s.ShapeDescriptionManager.get(e),
                            o = document.createElement("div");
                        o.setAttribute("class", "toolbox-text-item"), o.setAttribute("data-tb-type", e), o.innerHTML = n.defaultText, t.appendChild(o)
                    })
                }, e.prototype.createDraggingElement = function(t) {
                    var e = document.createElement("DIV");
                    e.setAttribute("class", "dxdi-toolbox-drag-text-item");
                    var n = s.ShapeDescriptionManager.get(t.evt.data);
                    return e.innerHTML = n.defaultText, document.body.appendChild(e), e
                }, e
            }(r.Toolbox);
        e.TextToolbox = a
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(129),
            s = n(25),
            a = n(12),
            c = n(11),
            u = n(13),
            p = n(0),
            h = n(93),
            l = function(t) {
                function e() { return null !== t && t.apply(this, arguments) || this }
                return i(e, t), e.prototype.createElements = function(t, e) {
                    var n = document.createElementNS(a.svgNS, "svg");
                    n.className.baseVal = "dxdi-canvas", t.appendChild(n), this.drawShapeIcons(n, e, n.getBoundingClientRect().width)
                }, e.prototype.drawShapeIcons = function(t, e, n) {
                    var o = this,
                        i = u.UnitConverter.twipsToPixels(c.Shape.lineWidth);
                    n -= 2 * i;
                    for (var r = 1, a = this.options.shapeIconSize; a < n;)(a += this.options.shapeIconSpacing + this.options.shapeIconSize) < n && r++;
                    var p = r > 1 ? (n - this.options.shapeIconSize * r) / (r - 1) : 0,
                        h = i,
                        l = i;
                    e.forEach(function(e, n) {
                        n > 0 && n % r == 0 && (h = i, l += o.options.shapeIconSize + p);
                        var a = s.ShapeDescriptionManager.get(e),
                            c = o.createShape(a, h, l);
                        o.updateShapeIconBounds(c), o.drawShape(t, c), h += o.options.shapeIconSize + p
                    }), t.style.height = l + this.options.shapeIconSize + i + "px"
                }, e.prototype.drawShape = function(t, e) {
                    var n = e.description.createPrimitives(e, !0),
                        o = document.createElementNS(a.svgNS, "g");
                    for (var i in o.setAttribute("data-tb-type", e.description.key.toString()), o.setAttribute("class", "toolbox-item"), o.setAttribute("title", e.description.title), this.options.shapeIconAttributes) this.options.shapeIconAttributes.hasOwnProperty(i) && o.setAttribute(i, this.options.shapeIconAttributes[i]);
                    t.appendChild(o), n.forEach(function(t) {
                        var e = t.createElement();
                        o.appendChild(e), t.applyElementProperties(e)
                    })
                }, e.prototype.createShape = function(t, e, n) {
                    var o = u.UnitConverter.pixelsToTwips(e),
                        i = u.UnitConverter.pixelsToTwips(n),
                        r = new c.Shape(t, new p.Point(o, i));
                    return t instanceof h.TextShapeDescription || (r.text = ""), r
                }, e.prototype.updateShapeIconBounds = function(t) {
                    var e = u.UnitConverter.pixelsToTwips(this.options.shapeIconSize);
                    if (t.size.height = t.size.width * t.getToolboxHeightToWidthRatio(), t.size.width > t.size.height) {
                        var n = t.size.height / t.size.width;
                        t.size.width = e, t.size.height = e * n, t.position.y = t.position.y + (e - t.size.height) / 2, t.parameters.forEach(function(n) { n.value = n.value * e / t.description.defaultSize.width })
                    } else if (t.size.width < t.size.height) {
                        n = t.size.width / t.size.height;
                        t.size.height = e, t.size.width = e * n, t.position.x = t.position.x + (e - t.size.width) / 2, t.parameters.forEach(function(n) { n.value = n.value * e / t.description.defaultSize.height })
                    } else t.size.width = e, t.size.height = e, t.parameters.forEach(function(n) { n.value = n.value * e / t.description.defaultSize.width })
                }, e.prototype.createDraggingElement = function(t) {
                    var e = document.createElement("DIV");
                    e.setAttribute("class", "dxdi-toolbox-drag-item"), document.body.appendChild(e);
                    var n = document.createElementNS(a.svgNS, "svg");
                    n.className.baseVal = "dxdi-canvas", e.appendChild(n);
                    var o = s.ShapeDescriptionManager.get(t.evt.data),
                        i = this.createShape(o, u.UnitConverter.twipsToPixels(c.Shape.lineWidth), u.UnitConverter.twipsToPixels(c.Shape.lineWidth));
                    return this.drawShape(n, i), e.style.width = u.UnitConverter.twipsToPixels(i.size.width + 2 * c.Shape.lineWidth) + "px", e.style.height = u.UnitConverter.twipsToPixels(i.size.height + 2 * c.Shape.lineWidth) + "px", e
                }, e
            }(r.Toolbox);
        e.IconToolbox = l
    }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        }, function(t, e) {
            function n() { this.constructor = t }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r, s = function(t) {
            function e(e, n, o) { var i = t.call(this) || this; return i.events = e, i.model = o, i.selection = n, i }
            return i(e, t), e.prototype.onSelectionChanged = function() { this.isUpdateLocked() ? this.registerOccurredEvent(r.SelectionChanged) : this.raiseSelectionChanged() }, e.prototype.onUpdateUnlocked = function(t) { t & r.SelectionChanged && this.raiseSelectionChanged() }, e.prototype.raiseSelectionChanged = function() {
                var t = this,
                    e = this.selection.getKeys().map(function(e) { return t.model.findItem(e).toNative() });
                this.events.raise1(function(t) { return t.notifySelectionChanged(e) })
            }, e
        }(n(128).BatchUpdatableObject);
        e.ApiController = s,
            function(t) { t[t.SelectionChanged = 1] = "SelectionChanged" }(r || (r = {}))
    }, function(t, e, n) {}])
});