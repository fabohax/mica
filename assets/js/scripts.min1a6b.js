!(function (e) {
    var t,
        i,
        s,
        r,
        n,
        c,
        a,
        u = navigator.userAgent;
    e.HTMLPictureElement &&
        /ecko/.test(u) &&
        u.match(/rv\:(\d+)/) &&
        RegExp.$1 < 45 &&
        addEventListener(
            "resize",
            ((i = document.createElement("source")),
            (s = function (e) {
                var t,
                    s,
                    r = e.parentNode;
                "PICTURE" === r.nodeName.toUpperCase()
                    ? ((t = i.cloneNode()),
                      r.insertBefore(t, r.firstElementChild),
                      setTimeout(function () {
                          r.removeChild(t);
                      }))
                    : (!e._pfLastSize || e.offsetWidth > e._pfLastSize) &&
                      ((e._pfLastSize = e.offsetWidth),
                      (s = e.sizes),
                      (e.sizes += ",100vw"),
                      setTimeout(function () {
                          e.sizes = s;
                      }));
            }),
            (r = function () {
                var e,
                    t = document.querySelectorAll("picture > img, img[srcset][sizes]");
                for (e = 0; e < t.length; e++) s(t[e]);
            }),
            (n = function () {
                clearTimeout(t), (t = setTimeout(r, 99));
            }),
            (c = e.matchMedia && matchMedia("(orientation: landscape)")),
            (a = function () {
                n(), c && c.addListener && c.addListener(n);
            }),
            (i.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),
            /^[c|i]|d$/.test(document.readyState || "") ? a() : document.addEventListener("DOMContentLoaded", a),
            n)
        );
})(window),
    (function (e, n, o) {
        "use strict";
        var i, l, u;
        n.createElement("picture");
        var E = {},
            c = !1,
            t = function () {},
            s = n.createElement("img"),
            f = s.getAttribute,
            d = s.setAttribute,
            p = s.removeAttribute,
            a = n.documentElement,
            r = {},
            z = { algorithm: "" },
            A = "data-pfsrc",
            m = A + "set",
            h = navigator.userAgent,
            b = /rident/.test(h) || (/ecko/.test(h) && h.match(/rv\:(\d+)/) && 35 < RegExp.$1),
            T = "currentSrc",
            g = /\s+\+?\d+(e\d+)?w/,
            v = /(\([^)]+\))?\s*(.+)/,
            w = e.picturefillCFG,
            S = "font-size:100%!important;",
            x = !0,
            y = {},
            C = {},
            R = e.devicePixelRatio,
            L = { px: 1, in: 96 },
            M = n.createElement("a"),
            P = !1,
            D = /^[ \t\n\r\u000c]+/,
            B = /^[, \t\n\r\u000c]+/,
            I = /^[^ \t\n\r\u000c]+/,
            U = /[,]+$/,
            $ = /^\d+$/,
            k = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,
            W = function (e, t, s, r) {
                e.addEventListener ? e.addEventListener(t, s, r || !1) : e.attachEvent && e.attachEvent("on" + t, s);
            },
            Q = function (t) {
                var s = {};
                return function (e) {
                    return e in s || (s[e] = t(e)), s[e];
                };
            };
        function G(e) {
            return " " === e || "\t" === e || "\n" === e || "\f" === e || "\r" === e;
        }
        var H,
            F,
            N,
            O,
            q,
            j,
            V,
            _,
            K,
            J,
            X,
            Y,
            Z,
            ee,
            te,
            se,
            re,
            ie =
                ((H = /^([\d\.]+)(em|vw|px)$/),
                (F = Q(function (e) {
                    return (
                        "return " +
                        (function () {
                            for (var e = arguments, t = 0, s = e[0]; ++t in e; ) s = s.replace(e[t], e[++t]);
                            return s;
                        })(
                            (e || "").toLowerCase(),
                            /\band\b/g,
                            "&&",
                            /,/g,
                            "||",
                            /min-([a-z-\s]+):/g,
                            "e.$1>=",
                            /max-([a-z-\s]+):/g,
                            "e.$1<=",
                            /calc([^)]+)/g,
                            "($1)",
                            /(\d+[\.]*[\d]*)([a-z]+)/g,
                            "($1 * e.$2)",
                            /^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,
                            ""
                        ) +
                        ";"
                    );
                })),
                function (e, t) {
                    var s;
                    if (!(e in y))
                        if (((y[e] = !1), t && (s = e.match(H)))) y[e] = s[1] * L[s[2]];
                        else
                            try {
                                y[e] = new Function("e", F(e))(L);
                            } catch (e) {}
                    return y[e];
                }),
            ne = function (e, t) {
                return e.w ? ((e.cWidth = E.calcListLength(t || "100vw")), (e.res = e.w / e.cWidth)) : (e.res = e.d), e;
            },
            ce = function (e) {
                if (c) {
                    var t,
                        s,
                        r,
                        i = e || {};
                    if (
                        (i.elements && 1 === i.elements.nodeType && ("IMG" === i.elements.nodeName.toUpperCase() ? (i.elements = [i.elements]) : ((i.context = i.elements), (i.elements = null))),
                        (r = (t = i.elements || E.qsa(i.context || n, i.reevaluate || i.reselect ? E.sel : E.selShort)).length))
                    ) {
                        for (E.setupRun(i), P = !0, s = 0; s < r; s++) E.fillImg(t[s], i);
                        E.teardownRun(i);
                    }
                }
            };
        function ae(e, t) {
            return e.res - t.res;
        }
        function ue(e, t) {
            var s, r, i;
            if (e && t)
                for (i = E.parseSet(t), e = E.makeUrl(e), s = 0; s < i.length; s++)
                    if (e === E.makeUrl(i[s].url)) {
                        r = i[s];
                        break;
                    }
            return r;
        }
        e.console && console.warn,
            T in s || (T = "src"),
            (r["image/jpeg"] = !0),
            (r["image/gif"] = !0),
            (r["image/png"] = !0),
            (r["image/svg+xml"] = n.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")),
            (E.ns = ("pf" + new Date().getTime()).substr(0, 9)),
            (E.supSrcset = "srcset" in s),
            (E.supSizes = "sizes" in s),
            (E.supPicture = !!e.HTMLPictureElement),
            E.supSrcset && E.supPicture && !E.supSizes && ((N = n.createElement("img")), (s.srcset = "data:,a"), (N.src = "data:,a"), (E.supSrcset = s.complete === N.complete), (E.supPicture = E.supSrcset && E.supPicture)),
            E.supSrcset && !E.supSizes
                ? ((O = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),
                  (j = function () {
                      2 === q.width && (E.supSizes = !0), (l = E.supSrcset && !E.supSizes), (c = !0), setTimeout(ce);
                  }),
                  ((q = n.createElement("img")).onload = j),
                  (q.onerror = j),
                  q.setAttribute("sizes", "9px"),
                  (q.srcset = O + " 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w"),
                  (q.src = O))
                : (c = !0),
            (E.selShort = "picture>img,img[srcset]"),
            (E.sel = E.selShort),
            (E.cfg = z),
            (E.DPR = R || 1),
            (E.u = L),
            (E.types = r),
            (E.setSize = t),
            (E.makeUrl = Q(function (e) {
                return (M.href = e), M.href;
            })),
            (E.qsa = function (e, t) {
                return "querySelector" in e ? e.querySelectorAll(t) : [];
            }),
            (E.matchesMedia = function () {
                return (
                    e.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches
                        ? (E.matchesMedia = function (e) {
                              return !e || matchMedia(e).matches;
                          })
                        : (E.matchesMedia = E.mMQ),
                    E.matchesMedia.apply(this, arguments)
                );
            }),
            (E.mMQ = function (e) {
                return !e || ie(e);
            }),
            (E.calcLength = function (e) {
                var t = ie(e, !0) || !1;
                return t < 0 && (t = !1), t;
            }),
            (E.supportsType = function (e) {
                return !e || r[e];
            }),
            (E.parseSize = Q(function (e) {
                var t = (e || "").match(v);
                return { media: t && t[1], length: t && t[2] };
            })),
            (E.parseSet = function (e) {
                return (
                    e.cands ||
                        (e.cands = (function (r, f) {
                            function e(e) {
                                var t,
                                    s = e.exec(r.substring(c));
                                if (s) return (t = s[0]), (c += t.length), t;
                            }
                            var d,
                                p,
                                t,
                                s,
                                i,
                                n = r.length,
                                c = 0,
                                A = [];
                            function a() {
                                var e,
                                    t,
                                    s,
                                    r,
                                    i,
                                    n,
                                    c,
                                    a,
                                    u,
                                    o = !1,
                                    l = {};
                                for (r = 0; r < p.length; r++)
                                    (n = (i = p[r])[i.length - 1]),
                                        (c = i.substring(0, i.length - 1)),
                                        (a = parseInt(c, 10)),
                                        (u = parseFloat(c)),
                                        $.test(c) && "w" === n
                                            ? ((e || t) && (o = !0), 0 === a ? (o = !0) : (e = a))
                                            : k.test(c) && "x" === n
                                            ? ((e || t || s) && (o = !0), u < 0 ? (o = !0) : (t = u))
                                            : $.test(c) && "h" === n
                                            ? ((s || t) && (o = !0), 0 === a ? (o = !0) : (s = a))
                                            : (o = !0);
                                o || ((l.url = d), e && (l.w = e), t && (l.d = t), s && (l.h = s), s || t || e || (l.d = 1), 1 === l.d && (f.has1x = !0), (l.set = f), A.push(l));
                            }
                            function u() {
                                for (e(D), t = "", s = "in descriptor"; ; ) {
                                    if (((i = r.charAt(c)), "in descriptor" === s))
                                        if (G(i)) t && (p.push(t), (t = ""), (s = "after descriptor"));
                                        else {
                                            if ("," === i) return (c += 1), t && p.push(t), void a();
                                            if ("(" === i) (t += i), (s = "in parens");
                                            else {
                                                if ("" === i) return t && p.push(t), void a();
                                                t += i;
                                            }
                                        }
                                    else if ("in parens" === s)
                                        if (")" === i) (t += i), (s = "in descriptor");
                                        else {
                                            if ("" === i) return p.push(t), void a();
                                            t += i;
                                        }
                                    else if ("after descriptor" === s)
                                        if (G(i));
                                        else {
                                            if ("" === i) return void a();
                                            (s = "in descriptor"), (c -= 1);
                                        }
                                    c += 1;
                                }
                            }
                            for (;;) {
                                if ((e(B), n <= c)) return A;
                                (d = e(I)), (p = []), "," === d.slice(-1) ? ((d = d.replace(U, "")), a()) : u();
                            }
                        })(e.srcset, e)),
                    e.cands
                );
            }),
            (E.getEmValue = function () {
                var e;
                if (!i && (e = n.body)) {
                    var t = n.createElement("div"),
                        s = a.style.cssText,
                        r = e.style.cssText;
                    (t.style.cssText = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)"),
                        (a.style.cssText = S),
                        (e.style.cssText = S),
                        e.appendChild(t),
                        (i = t.offsetWidth),
                        e.removeChild(t),
                        (i = parseFloat(i, 10)),
                        (a.style.cssText = s),
                        (e.style.cssText = r);
                }
                return i || 16;
            }),
            (E.calcListLength = function (l) {
                if (!(l in C) || z.uT) {
                    var e = E.calcLength(
                        (function (e) {
                            var t,
                                s,
                                r,
                                i,
                                n,
                                c,
                                a,
                                u = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,
                                o = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;
                            for (
                                r = (s = (function (e) {
                                    var t,
                                        s = "",
                                        r = [],
                                        i = [],
                                        n = 0,
                                        c = 0,
                                        a = !1;
                                    function u() {
                                        s && (r.push(s), (s = ""));
                                    }
                                    function o() {
                                        r[0] && (i.push(r), (r = []));
                                    }
                                    for (;;) {
                                        if ("" === (t = e.charAt(c))) return u(), o(), i;
                                        if (a) {
                                            if ("*" === t && "/" === e[c + 1]) {
                                                (a = !1), (c += 2), u();
                                                continue;
                                            }
                                            c += 1;
                                        } else {
                                            if (G(t)) {
                                                if ((e.charAt(c - 1) && G(e.charAt(c - 1))) || !s) {
                                                    c += 1;
                                                    continue;
                                                }
                                                if (0 === n) {
                                                    u(), (c += 1);
                                                    continue;
                                                }
                                                t = " ";
                                            } else if ("(" === t) n += 1;
                                            else if (")" === t) n -= 1;
                                            else {
                                                if ("," === t) {
                                                    u(), o(), (c += 1);
                                                    continue;
                                                }
                                                if ("/" === t && "*" === e.charAt(c + 1)) {
                                                    (a = !0), (c += 2);
                                                    continue;
                                                }
                                            }
                                            (s += t), (c += 1);
                                        }
                                    }
                                })(l)).length,
                                    t = 0;
                                t < r;
                                t++
                            )
                                if (((a = n = (i = s[t])[i.length - 1]), (u.test(a) && 0 <= parseFloat(a)) || o.test(a) || "0" === a || "-0" === a || "+0" === a)) {
                                    if (((c = n), i.pop(), 0 === i.length)) return c;
                                    if (((i = i.join(" ")), E.matchesMedia(i))) return c;
                                }
                            return "100vw";
                        })()
                    );
                    C[l] = e || L.width;
                }
                return C[l];
            }),
            (E.setRes = function (e) {
                var t;
                if (e) for (var s = 0, r = (t = E.parseSet(e)).length; s < r; s++) ne(t[s], e.sizes);
                return t;
            }),
            (E.setRes.res = ne),
            (E.applySetCandidate = function (e, t) {
                if (e.length) {
                    var s,
                        r,
                        i,
                        n,
                        c,
                        a,
                        u,
                        o,
                        l,
                        f,
                        d,
                        p,
                        A,
                        m,
                        h,
                        g,
                        v,
                        w,
                        S,
                        x = t[E.ns],
                        y = E.DPR;
                    if (
                        ((a = x.curSrc || t[T]),
                        (u =
                            x.curCan ||
                            ((f = t), (d = a), !(p = e[0].set) && d && (p = (p = f[E.ns].sets) && p[p.length - 1]), (A = ue(d, p)) && ((d = E.makeUrl(d)), (f[E.ns].curSrc = d), (f[E.ns].curCan = A).res || ne(A, A.set.sizes)), A)) &&
                            u.set === e[0].set &&
                            ((l = b && !t.complete && u.res - 0.1 > y) || ((u.cached = !0), u.res >= y && (c = u))),
                        !c)
                    )
                        for (e.sort(ae), c = e[(n = e.length) - 1], r = 0; r < n; r++)
                            if ((s = e[r]).res >= y) {
                                c =
                                    e[(i = r - 1)] &&
                                    (l || a !== E.makeUrl(s.url)) &&
                                    ((m = e[i].res),
                                    (h = s.res),
                                    (g = y),
                                    (v = e[i].cached),
                                    (S = w = void 0),
                                    g < ("saveData" === z.algorithm ? (2.7 < m ? g + 1 : ((S = (h - g) * (w = Math.pow(m - 0.6, 1.5))), v && (S += 0.1 * w), m + S)) : 1 < g ? Math.sqrt(m * h) : m))
                                        ? e[i]
                                        : s;
                                break;
                            }
                    c && ((o = E.makeUrl(c.url)), (x.curSrc = o), (x.curCan = c), o !== a && E.setSrc(t, c), E.setSize(t));
                }
            }),
            (E.setSrc = function (e, t) {
                var s;
                (e.src = t.url), "image/svg+xml" === t.set.type && ((s = e.style.width), (e.style.width = e.offsetWidth + 1 + "px"), e.offsetWidth + 1 && (e.style.width = s));
            }),
            (E.getSet = function (e) {
                var t,
                    s,
                    r,
                    i = !1,
                    n = e[E.ns].sets;
                for (t = 0; t < n.length && !i; t++)
                    if ((s = n[t]).srcset && E.matchesMedia(s.media) && (r = E.supportsType(s.type))) {
                        "pending" === r && (s = r), (i = s);
                        break;
                    }
                return i;
            }),
            (E.parseSets = function (e, t, s) {
                var r,
                    i,
                    n,
                    c,
                    a = t && "PICTURE" === t.nodeName.toUpperCase(),
                    u = e[E.ns];
                (u.src === o || s.src) && ((u.src = f.call(e, "src")), u.src ? d.call(e, A, u.src) : p.call(e, A)),
                    (u.srcset === o || s.srcset || !E.supSrcset || e.srcset) && ((r = f.call(e, "srcset")), (u.srcset = r), (c = !0)),
                    (u.sets = []),
                    a &&
                        ((u.pic = !0),
                        (function (e, t) {
                            var s,
                                r,
                                i,
                                n,
                                c = e.getElementsByTagName("source");
                            for (s = 0, r = c.length; s < r; s++)
                                ((i = c[s])[E.ns] = !0), (n = i.getAttribute("srcset")) && t.push({ srcset: n, media: i.getAttribute("media"), type: i.getAttribute("type"), sizes: i.getAttribute("sizes") });
                        })(t, u.sets)),
                    u.srcset
                        ? ((i = { srcset: u.srcset, sizes: f.call(e, "sizes") }),
                          u.sets.push(i),
                          (n = (l || u.src) && g.test(u.srcset || "")) || !u.src || ue(u.src, i) || i.has1x || ((i.srcset += ", " + u.src), i.cands.push({ url: u.src, d: 1, set: i })))
                        : u.src && u.sets.push({ srcset: u.src, sizes: null }),
                    (u.curCan = null),
                    (u.curSrc = o),
                    (u.supported = !(a || (i && !E.supSrcset) || (n && !E.supSizes))),
                    c && E.supSrcset && !u.supported && (r ? (d.call(e, m, r), (e.srcset = "")) : p.call(e, m)),
                    u.supported && !u.srcset && ((!u.src && e.src) || e.src !== E.makeUrl(u.src)) && (null === u.src ? e.removeAttribute("src") : (e.src = u.src)),
                    (u.parsed = !0);
            }),
            (E.fillImg = function (e, t) {
                var s,
                    r,
                    i,
                    n,
                    c,
                    a = t.reselect || t.reevaluate;
                e[E.ns] || (e[E.ns] = {}),
                    (s = e[E.ns]),
                    (a || s.evaled !== u) &&
                        ((s.parsed && !t.reevaluate) || E.parseSets(e, e.parentNode, t),
                        s.supported ? (s.evaled = u) : ((r = e), (c = !1), "pending" !== (n = E.getSet(r)) && ((c = u), n && ((i = E.setRes(n)), E.applySetCandidate(i, r))), (r[E.ns].evaled = c)));
            }),
            (E.setupRun = function () {
                (P && !x && R === e.devicePixelRatio) ||
                    ((x = !1),
                    (R = e.devicePixelRatio),
                    (y = {}),
                    (C = {}),
                    (E.DPR = R || 1),
                    (L.width = Math.max(e.innerWidth || 0, a.clientWidth)),
                    (L.height = Math.max(e.innerHeight || 0, a.clientHeight)),
                    (L.vw = L.width / 100),
                    (L.vh = L.height / 100),
                    (u = [L.height, L.width, R].join("-")),
                    (L.em = E.getEmValue()),
                    (L.rem = L.em));
            }),
            E.supPicture
                ? ((ce = t), (E.fillImg = t))
                : ((Y = e.attachEvent ? /d$|^c/ : /d$|^c|^i/),
                  (Z = function () {
                      var e = n.readyState || "";
                      (ee = setTimeout(Z, "loading" === e ? 200 : 999)), n.body && (E.fillImgs(), (V = V || Y.test(e)) && clearTimeout(ee));
                  }),
                  (ee = setTimeout(Z, n.body ? 9 : 99)),
                  (te = a.clientHeight),
                  W(
                      e,
                      "resize",
                      ((_ = function () {
                          (x = Math.max(e.innerWidth || 0, a.clientWidth) !== L.width || a.clientHeight !== te), (te = a.clientHeight), x && E.fillImgs();
                      }),
                      (X = function () {
                          var e = new Date() - J;
                          e < 99 ? (K = setTimeout(X, 99 - e)) : ((K = null), _());
                      }),
                      function () {
                          (J = new Date()), K || (K = setTimeout(X, 99));
                      })
                  ),
                  W(n, "readystatechange", Z)),
            (E.picturefill = ce),
            (E.fillImgs = ce),
            (E.teardownRun = t),
            (ce._ = E),
            (e.picturefillCFG = {
                pf: E,
                push: function (e) {
                    var t = e.shift();
                    "function" == typeof E[t] ? E[t].apply(E, e) : ((z[t] = e[0]), P && E.fillImgs({ reselect: !0 }));
                },
            });
        for (; w && w.length; ) e.picturefillCFG.push(w.shift());
        (e.picturefill = ce),
            "object" == typeof module && "object" == typeof module.exports
                ? (module.exports = ce)
                : "function" == typeof define &&
                  define.amd &&
                  define("picturefill", function () {
                      return ce;
                  }),
            E.supPicture ||
                (r["image/webp"] =
                    ((se = "image/webp"),
                    ((re = new e.Image()).onerror = function () {
                        (r[se] = !1), ce();
                    }),
                    (re.onload = function () {
                        (r[se] = 1 === re.width), ce();
                    }),
                    (re.src = "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="),
                    "pending"));
    })(window, document);
(function () {
    function n(a) {
        return function (n, r, t, e) {
            r = b(r, e, 4);
            var u = !k(n) && m.keys(n),
                i = (u || n).length,
                o = 0 < a ? 0 : i - 1;
            return (
                arguments.length < 3 && ((t = n[u ? u[o] : o]), (o += a)),
                (function (n, r, t, e, u, i) {
                    for (; 0 <= u && u < i; u += a) {
                        var o = e ? e[u] : u;
                        t = r(t, n[o], o, n);
                    }
                    return t;
                })(n, r, t, u, o, i)
            );
        };
    }
    function r(i) {
        return function (n, r, t) {
            r = x(r, t);
            for (var e = O(n), u = 0 < i ? 0 : e - 1; 0 <= u && u < e; u += i) if (r(n[u], u, n)) return u;
            return -1;
        };
    }
    function t(i, o, a) {
        return function (n, r, t) {
            var e = 0,
                u = O(n);
            if ("number" == typeof t) 0 < i ? (e = 0 <= t ? t : Math.max(t + u, e)) : (u = 0 <= t ? Math.min(t + 1, u) : t + u + 1);
            else if (a && t && u) return n[(t = a(n, r))] === r ? t : -1;
            if (r != r) return 0 <= (t = o(l.call(n, e, u), m.isNaN)) ? t + e : -1;
            for (t = 0 < i ? e : u - 1; 0 <= t && t < u; t += i) if (n[t] === r) return t;
            return -1;
        };
    }
    function e(n, r) {
        var t = I.length,
            e = n.constructor,
            u = (m.isFunction(e) && e.prototype) || a,
            i = "constructor";
        for (m.has(n, i) && !m.contains(r, i) && r.push(i); t--; ) (i = I[t]) in n && n[i] !== u[i] && !m.contains(r, i) && r.push(i);
    }
    var u = this,
        i = u._,
        o = Array.prototype,
        a = Object.prototype,
        c = Function.prototype,
        f = o.push,
        l = o.slice,
        s = a.toString,
        p = a.hasOwnProperty,
        h = Array.isArray,
        v = Object.keys,
        y = c.bind,
        d = Object.create,
        g = function () {},
        m = function (n) {
            return n instanceof m ? n : this instanceof m ? void (this._wrapped = n) : new m(n);
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = m), (exports._ = m)) : (u._ = m), (m.VERSION = "1.8.3");
    var b = function (u, i, n) {
            if (void 0 === i) return u;
            switch (null == n ? 3 : n) {
                case 1:
                    return function (n) {
                        return u.call(i, n);
                    };
                case 2:
                    return function (n, r) {
                        return u.call(i, n, r);
                    };
                case 3:
                    return function (n, r, t) {
                        return u.call(i, n, r, t);
                    };
                case 4:
                    return function (n, r, t, e) {
                        return u.call(i, n, r, t, e);
                    };
            }
            return function () {
                return u.apply(i, arguments);
            };
        },
        x = function (n, r, t) {
            return null == n ? m.identity : m.isFunction(n) ? b(n, r, t) : m.isObject(n) ? m.matcher(n) : m.property(n);
        };
    m.iteratee = function (n, r) {
        return x(n, r, 1 / 0);
    };
    var _ = function (c, f) {
            return function (n) {
                var r = arguments.length;
                if (r < 2 || null == n) return n;
                for (var t = 1; t < r; t++)
                    for (var e = arguments[t], u = c(e), i = u.length, o = 0; o < i; o++) {
                        var a = u[o];
                        (f && void 0 !== n[a]) || (n[a] = e[a]);
                    }
                return n;
            };
        },
        j = function (n) {
            if (!m.isObject(n)) return {};
            if (d) return d(n);
            g.prototype = n;
            var r = new g();
            return (g.prototype = null), r;
        },
        w = function (r) {
            return function (n) {
                return null == n ? void 0 : n[r];
            };
        },
        A = Math.pow(2, 53) - 1,
        O = w("length"),
        k = function (n) {
            var r = O(n);
            return "number" == typeof r && 0 <= r && r <= A;
        };
    (m.each = m.forEach = function (n, r, t) {
        var e, u;
        if (((r = b(r, t)), k(n))) for (e = 0, u = n.length; e < u; e++) r(n[e], e, n);
        else {
            var i = m.keys(n);
            for (e = 0, u = i.length; e < u; e++) r(n[i[e]], i[e], n);
        }
        return n;
    }),
        (m.map = m.collect = function (n, r, t) {
            r = x(r, t);
            for (var e = !k(n) && m.keys(n), u = (e || n).length, i = Array(u), o = 0; o < u; o++) {
                var a = e ? e[o] : o;
                i[o] = r(n[a], a, n);
            }
            return i;
        }),
        (m.reduce = m.foldl = m.inject = n(1)),
        (m.reduceRight = m.foldr = n(-1)),
        (m.find = m.detect = function (n, r, t) {
            var e;
            return void 0 !== (e = k(n) ? m.findIndex(n, r, t) : m.findKey(n, r, t)) && -1 !== e ? n[e] : void 0;
        }),
        (m.filter = m.select = function (n, e, r) {
            var u = [];
            return (
                (e = x(e, r)),
                m.each(n, function (n, r, t) {
                    e(n, r, t) && u.push(n);
                }),
                u
            );
        }),
        (m.reject = function (n, r, t) {
            return m.filter(n, m.negate(x(r)), t);
        }),
        (m.every = m.all = function (n, r, t) {
            r = x(r, t);
            for (var e = !k(n) && m.keys(n), u = (e || n).length, i = 0; i < u; i++) {
                var o = e ? e[i] : i;
                if (!r(n[o], o, n)) return !1;
            }
            return !0;
        }),
        (m.some = m.any = function (n, r, t) {
            r = x(r, t);
            for (var e = !k(n) && m.keys(n), u = (e || n).length, i = 0; i < u; i++) {
                var o = e ? e[i] : i;
                if (r(n[o], o, n)) return !0;
            }
            return !1;
        }),
        (m.contains = m.includes = m.include = function (n, r, t, e) {
            return k(n) || (n = m.values(n)), ("number" != typeof t || e) && (t = 0), 0 <= m.indexOf(n, r, t);
        }),
        (m.invoke = function (n, t) {
            var e = l.call(arguments, 2),
                u = m.isFunction(t);
            return m.map(n, function (n) {
                var r = u ? t : n[t];
                return null == r ? r : r.apply(n, e);
            });
        }),
        (m.pluck = function (n, r) {
            return m.map(n, m.property(r));
        }),
        (m.where = function (n, r) {
            return m.filter(n, m.matcher(r));
        }),
        (m.findWhere = function (n, r) {
            return m.find(n, m.matcher(r));
        }),
        (m.max = function (n, e, r) {
            var t,
                u,
                i = -1 / 0,
                o = -1 / 0;
            if (null == e && null != n) for (var a = 0, c = (n = k(n) ? n : m.values(n)).length; a < c; a++) (t = n[a]), i < t && (i = t);
            else
                (e = x(e, r)),
                    m.each(n, function (n, r, t) {
                        (u = e(n, r, t)), (o < u || (u === -1 / 0 && i === -1 / 0)) && ((i = n), (o = u));
                    });
            return i;
        }),
        (m.min = function (n, e, r) {
            var t,
                u,
                i = 1 / 0,
                o = 1 / 0;
            if (null == e && null != n) for (var a = 0, c = (n = k(n) ? n : m.values(n)).length; a < c; a++) (t = n[a]) < i && (i = t);
            else
                (e = x(e, r)),
                    m.each(n, function (n, r, t) {
                        ((u = e(n, r, t)) < o || (1 / 0 === u && 1 / 0 === i)) && ((i = n), (o = u));
                    });
            return i;
        }),
        (m.shuffle = function (n) {
            for (var r, t = k(n) ? n : m.values(n), e = t.length, u = Array(e), i = 0; i < e; i++) (r = m.random(0, i)) !== i && (u[i] = u[r]), (u[r] = t[i]);
            return u;
        }),
        (m.sample = function (n, r, t) {
            return null == r || t ? (k(n) || (n = m.values(n)), n[m.random(n.length - 1)]) : m.shuffle(n).slice(0, Math.max(0, r));
        }),
        (m.sortBy = function (n, e, r) {
            return (
                (e = x(e, r)),
                m.pluck(
                    m
                        .map(n, function (n, r, t) {
                            return { value: n, index: r, criteria: e(n, r, t) };
                        })
                        .sort(function (n, r) {
                            var t = n.criteria,
                                e = r.criteria;
                            if (t !== e) {
                                if (e < t || void 0 === t) return 1;
                                if (t < e || void 0 === e) return -1;
                            }
                            return n.index - r.index;
                        }),
                    "value"
                )
            );
        });
    var F = function (o) {
        return function (e, u, n) {
            var i = {};
            return (
                (u = x(u, n)),
                m.each(e, function (n, r) {
                    var t = u(n, r, e);
                    o(i, n, t);
                }),
                i
            );
        };
    };
    (m.groupBy = F(function (n, r, t) {
        m.has(n, t) ? n[t].push(r) : (n[t] = [r]);
    })),
        (m.indexBy = F(function (n, r, t) {
            n[t] = r;
        })),
        (m.countBy = F(function (n, r, t) {
            m.has(n, t) ? n[t]++ : (n[t] = 1);
        })),
        (m.toArray = function (n) {
            return n ? (m.isArray(n) ? l.call(n) : k(n) ? m.map(n, m.identity) : m.values(n)) : [];
        }),
        (m.size = function (n) {
            return null == n ? 0 : k(n) ? n.length : m.keys(n).length;
        }),
        (m.partition = function (n, e, r) {
            e = x(e, r);
            var u = [],
                i = [];
            return (
                m.each(n, function (n, r, t) {
                    (e(n, r, t) ? u : i).push(n);
                }),
                [u, i]
            );
        }),
        (m.first = m.head = m.take = function (n, r, t) {
            return null == n ? void 0 : null == r || t ? n[0] : m.initial(n, n.length - r);
        }),
        (m.initial = function (n, r, t) {
            return l.call(n, 0, Math.max(0, n.length - (null == r || t ? 1 : r)));
        }),
        (m.last = function (n, r, t) {
            return null == n ? void 0 : null == r || t ? n[n.length - 1] : m.rest(n, Math.max(0, n.length - r));
        }),
        (m.rest = m.tail = m.drop = function (n, r, t) {
            return l.call(n, null == r || t ? 1 : r);
        }),
        (m.compact = function (n) {
            return m.filter(n, m.identity);
        });
    var S = function (n, r, t, e) {
        for (var u = [], i = 0, o = e || 0, a = O(n); o < a; o++) {
            var c = n[o];
            if (k(c) && (m.isArray(c) || m.isArguments(c))) {
                r || (c = S(c, r, t));
                var f = 0,
                    l = c.length;
                for (u.length += l; f < l; ) u[i++] = c[f++];
            } else t || (u[i++] = c);
        }
        return u;
    };
    (m.flatten = function (n, r) {
        return S(n, r, !1);
    }),
        (m.without = function (n) {
            return m.difference(n, l.call(arguments, 1));
        }),
        (m.uniq = m.unique = function (n, r, t, e) {
            m.isBoolean(r) || ((e = t), (t = r), (r = !1)), null != t && (t = x(t, e));
            for (var u = [], i = [], o = 0, a = O(n); o < a; o++) {
                var c = n[o],
                    f = t ? t(c, o, n) : c;
                r ? ((o && i === f) || u.push(c), (i = f)) : t ? m.contains(i, f) || (i.push(f), u.push(c)) : m.contains(u, c) || u.push(c);
            }
            return u;
        }),
        (m.union = function () {
            return m.uniq(S(arguments, !0, !0));
        }),
        (m.intersection = function (n) {
            for (var r = [], t = arguments.length, e = 0, u = O(n); e < u; e++) {
                var i = n[e];
                if (!m.contains(r, i)) {
                    for (var o = 1; o < t && m.contains(arguments[o], i); o++);
                    o === t && r.push(i);
                }
            }
            return r;
        }),
        (m.difference = function (n) {
            var r = S(arguments, !0, !0, 1);
            return m.filter(n, function (n) {
                return !m.contains(r, n);
            });
        }),
        (m.zip = function () {
            return m.unzip(arguments);
        }),
        (m.unzip = function (n) {
            for (var r = (n && m.max(n, O).length) || 0, t = Array(r), e = 0; e < r; e++) t[e] = m.pluck(n, e);
            return t;
        }),
        (m.object = function (n, r) {
            for (var t = {}, e = 0, u = O(n); e < u; e++) r ? (t[n[e]] = r[e]) : (t[n[e][0]] = n[e][1]);
            return t;
        }),
        (m.findIndex = r(1)),
        (m.findLastIndex = r(-1)),
        (m.sortedIndex = function (n, r, t, e) {
            for (var u = (t = x(t, e, 1))(r), i = 0, o = O(n); i < o; ) {
                var a = Math.floor((i + o) / 2);
                t(n[a]) < u ? (i = a + 1) : (o = a);
            }
            return i;
        }),
        (m.indexOf = t(1, m.findIndex, m.sortedIndex)),
        (m.lastIndexOf = t(-1, m.findLastIndex)),
        (m.range = function (n, r, t) {
            null == r && ((r = n || 0), (n = 0)), (t = t || 1);
            for (var e = Math.max(Math.ceil((r - n) / t), 0), u = Array(e), i = 0; i < e; i++, n += t) u[i] = n;
            return u;
        });
    var E = function (n, r, t, e, u) {
        if (!(e instanceof r)) return n.apply(t, u);
        var i = j(n.prototype),
            o = n.apply(i, u);
        return m.isObject(o) ? o : i;
    };
    (m.bind = function (n, r) {
        if (y && n.bind === y) return y.apply(n, l.call(arguments, 1));
        if (!m.isFunction(n)) throw new TypeError("Bind must be called on a function");
        var t = l.call(arguments, 2),
            e = function () {
                return E(n, e, r, this, t.concat(l.call(arguments)));
            };
        return e;
    }),
        (m.partial = function (u) {
            var i = l.call(arguments, 1),
                o = function () {
                    for (var n = 0, r = i.length, t = Array(r), e = 0; e < r; e++) t[e] = i[e] === m ? arguments[n++] : i[e];
                    for (; n < arguments.length; ) t.push(arguments[n++]);
                    return E(u, o, this, this, t);
                };
            return o;
        }),
        (m.bindAll = function (n) {
            var r,
                t,
                e = arguments.length;
            if (e <= 1) throw new Error("bindAll must be passed function names");
            for (r = 1; r < e; r++) n[(t = arguments[r])] = m.bind(n[t], n);
            return n;
        }),
        (m.memoize = function (e, u) {
            var i = function (n) {
                var r = i.cache,
                    t = "" + (u ? u.apply(this, arguments) : n);
                return m.has(r, t) || (r[t] = e.apply(this, arguments)), r[t];
            };
            return (i.cache = {}), i;
        }),
        (m.delay = function (n, r) {
            var t = l.call(arguments, 2);
            return setTimeout(function () {
                return n.apply(null, t);
            }, r);
        }),
        (m.defer = m.partial(m.delay, m, 1)),
        (m.throttle = function (t, e, u) {
            var i,
                o,
                a,
                c = null,
                f = 0;
            u || (u = {});
            var l = function () {
                (f = !1 === u.leading ? 0 : m.now()), (c = null), (a = t.apply(i, o)), c || (i = o = null);
            };
            return function () {
                var n = m.now();
                f || !1 !== u.leading || (f = n);
                var r = e - (n - f);
                return (i = this), (o = arguments), r <= 0 || e < r ? (c && (clearTimeout(c), (c = null)), (f = n), (a = t.apply(i, o)), c || (i = o = null)) : c || !1 === u.trailing || (c = setTimeout(l, r)), a;
            };
        }),
        (m.debounce = function (r, t, e) {
            var u,
                i,
                o,
                a,
                c,
                f = function () {
                    var n = m.now() - a;
                    n < t && 0 <= n ? (u = setTimeout(f, t - n)) : ((u = null), e || ((c = r.apply(o, i)), u || (o = i = null)));
                };
            return function () {
                (o = this), (i = arguments), (a = m.now());
                var n = e && !u;
                return u || (u = setTimeout(f, t)), n && ((c = r.apply(o, i)), (o = i = null)), c;
            };
        }),
        (m.wrap = function (n, r) {
            return m.partial(r, n);
        }),
        (m.negate = function (n) {
            return function () {
                return !n.apply(this, arguments);
            };
        }),
        (m.compose = function () {
            var t = arguments,
                e = t.length - 1;
            return function () {
                for (var n = e, r = t[e].apply(this, arguments); n--; ) r = t[n].call(this, r);
                return r;
            };
        }),
        (m.after = function (n, r) {
            return function () {
                return --n < 1 ? r.apply(this, arguments) : void 0;
            };
        }),
        (m.before = function (n, r) {
            var t;
            return function () {
                return 0 < --n && (t = r.apply(this, arguments)), n <= 1 && (r = null), t;
            };
        }),
        (m.once = m.partial(m.before, 2));
    var M = !{ toString: null }.propertyIsEnumerable("toString"),
        I = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
    (m.keys = function (n) {
        if (!m.isObject(n)) return [];
        if (v) return v(n);
        var r = [];
        for (var t in n) m.has(n, t) && r.push(t);
        return M && e(n, r), r;
    }),
        (m.allKeys = function (n) {
            if (!m.isObject(n)) return [];
            var r = [];
            for (var t in n) r.push(t);
            return M && e(n, r), r;
        }),
        (m.values = function (n) {
            for (var r = m.keys(n), t = r.length, e = Array(t), u = 0; u < t; u++) e[u] = n[r[u]];
            return e;
        }),
        (m.mapObject = function (n, r, t) {
            r = x(r, t);
            for (var e, u = m.keys(n), i = u.length, o = {}, a = 0; a < i; a++) o[(e = u[a])] = r(n[e], e, n);
            return o;
        }),
        (m.pairs = function (n) {
            for (var r = m.keys(n), t = r.length, e = Array(t), u = 0; u < t; u++) e[u] = [r[u], n[r[u]]];
            return e;
        }),
        (m.invert = function (n) {
            for (var r = {}, t = m.keys(n), e = 0, u = t.length; e < u; e++) r[n[t[e]]] = t[e];
            return r;
        }),
        (m.functions = m.methods = function (n) {
            var r = [];
            for (var t in n) m.isFunction(n[t]) && r.push(t);
            return r.sort();
        }),
        (m.extend = _(m.allKeys)),
        (m.extendOwn = m.assign = _(m.keys)),
        (m.findKey = function (n, r, t) {
            r = x(r, t);
            for (var e, u = m.keys(n), i = 0, o = u.length; i < o; i++) if (r(n[(e = u[i])], e, n)) return e;
        }),
        (m.pick = function (n, r, t) {
            var e,
                u,
                i = {},
                o = n;
            if (null == o) return i;
            m.isFunction(r)
                ? ((u = m.allKeys(o)), (e = b(r, t)))
                : ((u = S(arguments, !1, !1, 1)),
                  (e = function (n, r, t) {
                      return r in t;
                  }),
                  (o = Object(o)));
            for (var a = 0, c = u.length; a < c; a++) {
                var f = u[a],
                    l = o[f];
                e(l, f, o) && (i[f] = l);
            }
            return i;
        }),
        (m.omit = function (n, r, t) {
            if (m.isFunction(r)) r = m.negate(r);
            else {
                var e = m.map(S(arguments, !1, !1, 1), String);
                r = function (n, r) {
                    return !m.contains(e, r);
                };
            }
            return m.pick(n, r, t);
        }),
        (m.defaults = _(m.allKeys, !0)),
        (m.create = function (n, r) {
            var t = j(n);
            return r && m.extendOwn(t, r), t;
        }),
        (m.clone = function (n) {
            return m.isObject(n) ? (m.isArray(n) ? n.slice() : m.extend({}, n)) : n;
        }),
        (m.tap = function (n, r) {
            return r(n), n;
        }),
        (m.isMatch = function (n, r) {
            var t = m.keys(r),
                e = t.length;
            if (null == n) return !e;
            for (var u = Object(n), i = 0; i < e; i++) {
                var o = t[i];
                if (r[o] !== u[o] || !(o in u)) return !1;
            }
            return !0;
        });
    var N = function (n, r, t, e) {
        if (n === r) return 0 !== n || 1 / n == 1 / r;
        if (null == n || null == r) return n === r;
        n instanceof m && (n = n._wrapped), r instanceof m && (r = r._wrapped);
        var u = s.call(n);
        if (u !== s.call(r)) return !1;
        switch (u) {
            case "[object RegExp]":
            case "[object String]":
                return "" + n == "" + r;
            case "[object Number]":
                return +n != +n ? +r != +r : 0 == +n ? 1 / +n == 1 / r : +n == +r;
            case "[object Date]":
            case "[object Boolean]":
                return +n == +r;
        }
        var i = "[object Array]" === u;
        if (!i) {
            if ("object" != typeof n || "object" != typeof r) return !1;
            var o = n.constructor,
                a = r.constructor;
            if (o !== a && !(m.isFunction(o) && o instanceof o && m.isFunction(a) && a instanceof a) && "constructor" in n && "constructor" in r) return !1;
        }
        e = e || [];
        for (var c = (t = t || []).length; c--; ) if (t[c] === n) return e[c] === r;
        if ((t.push(n), e.push(r), i)) {
            if ((c = n.length) !== r.length) return !1;
            for (; c--; ) if (!N(n[c], r[c], t, e)) return !1;
        } else {
            var f,
                l = m.keys(n);
            if (((c = l.length), m.keys(r).length !== c)) return !1;
            for (; c--; ) if (((f = l[c]), !m.has(r, f) || !N(n[f], r[f], t, e))) return !1;
        }
        return t.pop(), e.pop(), !0;
    };
    (m.isEqual = function (n, r) {
        return N(n, r);
    }),
        (m.isEmpty = function (n) {
            return null == n || (k(n) && (m.isArray(n) || m.isString(n) || m.isArguments(n)) ? 0 === n.length : 0 === m.keys(n).length);
        }),
        (m.isElement = function (n) {
            return !(!n || 1 !== n.nodeType);
        }),
        (m.isArray =
            h ||
            function (n) {
                return "[object Array]" === s.call(n);
            }),
        (m.isObject = function (n) {
            var r = typeof n;
            return "function" === r || ("object" === r && !!n);
        }),
        m.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function (r) {
            m["is" + r] = function (n) {
                return s.call(n) === "[object " + r + "]";
            };
        }),
        m.isArguments(arguments) ||
            (m.isArguments = function (n) {
                return m.has(n, "callee");
            }),
        "function" != typeof /./ &&
            "object" != typeof Int8Array &&
            (m.isFunction = function (n) {
                return "function" == typeof n || !1;
            }),
        (m.isFinite = function (n) {
            return isFinite(n) && !isNaN(parseFloat(n));
        }),
        (m.isNaN = function (n) {
            return m.isNumber(n) && n !== +n;
        }),
        (m.isBoolean = function (n) {
            return !0 === n || !1 === n || "[object Boolean]" === s.call(n);
        }),
        (m.isNull = function (n) {
            return null === n;
        }),
        (m.isUndefined = function (n) {
            return void 0 === n;
        }),
        (m.has = function (n, r) {
            return null != n && p.call(n, r);
        }),
        (m.noConflict = function () {
            return (u._ = i), this;
        }),
        (m.identity = function (n) {
            return n;
        }),
        (m.constant = function (n) {
            return function () {
                return n;
            };
        }),
        (m.noop = function () {}),
        (m.property = w),
        (m.propertyOf = function (r) {
            return null == r
                ? function () {}
                : function (n) {
                      return r[n];
                  };
        }),
        (m.matcher = m.matches = function (r) {
            return (
                (r = m.extendOwn({}, r)),
                function (n) {
                    return m.isMatch(n, r);
                }
            );
        }),
        (m.times = function (n, r, t) {
            var e = Array(Math.max(0, n));
            r = b(r, t, 1);
            for (var u = 0; u < n; u++) e[u] = r(u);
            return e;
        }),
        (m.random = function (n, r) {
            return null == r && ((r = n), (n = 0)), n + Math.floor(Math.random() * (r - n + 1));
        }),
        (m.now =
            Date.now ||
            function () {
                return new Date().getTime();
            });
    var B = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" },
        T = m.invert(B),
        R = function (r) {
            var t = function (n) {
                    return r[n];
                },
                n = "(?:" + m.keys(r).join("|") + ")",
                e = RegExp(n),
                u = RegExp(n, "g");
            return function (n) {
                return (n = null == n ? "" : "" + n), e.test(n) ? n.replace(u, t) : n;
            };
        };
    (m.escape = R(B)),
        (m.unescape = R(T)),
        (m.result = function (n, r, t) {
            var e = null == n ? void 0 : n[r];
            return void 0 === e && (e = t), m.isFunction(e) ? e.call(n) : e;
        });
    var q = 0;
    (m.uniqueId = function (n) {
        var r = ++q + "";
        return n ? n + r : r;
    }),
        (m.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g });
    var K = /(.)^/,
        z = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029" },
        D = /\\|'|\r|\n|\u2028|\u2029/g,
        L = function (n) {
            return "\\" + z[n];
        };
    (m.template = function (i, n, r) {
        !n && r && (n = r), (n = m.defaults({}, n, m.templateSettings));
        var t = RegExp([(n.escape || K).source, (n.interpolate || K).source, (n.evaluate || K).source].join("|") + "|$", "g"),
            o = 0,
            a = "__p+='";
        i.replace(t, function (n, r, t, e, u) {
            return (a += i.slice(o, u).replace(D, L)), (o = u + n.length), r ? (a += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'") : t ? (a += "'+\n((__t=(" + t + "))==null?'':__t)+\n'") : e && (a += "';\n" + e + "\n__p+='"), n;
        }),
            (a += "';\n"),
            n.variable || (a = "with(obj||{}){\n" + a + "}\n"),
            (a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n");
        try {
            var e = new Function(n.variable || "obj", "_", a);
        } catch (n) {
            throw ((n.source = a), n);
        }
        var u = function (n) {
                return e.call(this, n, m);
            },
            c = n.variable || "obj";
        return (u.source = "function(" + c + "){\n" + a + "}"), u;
    }),
        (m.chain = function (n) {
            var r = m(n);
            return (r._chain = !0), r;
        });
    var P = function (n, r) {
        return n._chain ? m(r).chain() : r;
    };
    (m.mixin = function (t) {
        m.each(m.functions(t), function (n) {
            var r = (m[n] = t[n]);
            m.prototype[n] = function () {
                var n = [this._wrapped];
                return f.apply(n, arguments), P(this, r.apply(m, n));
            };
        });
    }),
        m.mixin(m),
        m.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (r) {
            var t = o[r];
            m.prototype[r] = function () {
                var n = this._wrapped;
                return t.apply(n, arguments), ("shift" !== r && "splice" !== r) || 0 !== n.length || delete n[0], P(this, n);
            };
        }),
        m.each(["concat", "join", "slice"], function (n) {
            var r = o[n];
            m.prototype[n] = function () {
                return P(this, r.apply(this._wrapped, arguments));
            };
        }),
        (m.prototype.value = function () {
            return this._wrapped;
        }),
        (m.prototype.valueOf = m.prototype.toJSON = m.prototype.value),
        (m.prototype.toString = function () {
            return "" + this._wrapped;
        }),
        "function" == typeof define &&
            define.amd &&
            define("underscore", [], function () {
                return m;
            });
}.call(this));
!(function (n) {
    var s = ("object" == typeof self && self.self === self && self) || ("object" == typeof global && global.global === global && global);
    if ("function" == typeof define && define.amd)
        define(["underscore", "jquery", "exports"], function (t, e, i) {
            s.Backbone = n(s, i, t, e);
        });
    else if ("undefined" != typeof exports) {
        var t,
            e = require("underscore");
        try {
            t = require("jquery");
        } catch (t) {}
        n(s, exports, e, t);
    } else s.Backbone = n(s, {}, s._, s.jQuery || s.Zepto || s.ender || s.$);
})(function (t, h, x, e) {
    var i = t.Backbone,
        r = Array.prototype.slice;
    (h.VERSION = "1.3.3"),
        (h.$ = e),
        (h.noConflict = function () {
            return (t.Backbone = i), this;
        }),
        (h.emulateHTTP = !1),
        (h.emulateJSON = !1);
    var n = function (i, t, n) {
            x.each(t, function (e, t) {
                x[t] &&
                    (i.prototype[t] = (function (t, n, s) {
                        switch (e) {
                            case 1:
                                return function () {
                                    return x[n](this[s]);
                                };
                            case 2:
                                return function (t) {
                                    return x[n](this[s], t);
                                };
                            case 3:
                                return function (t, e) {
                                    return x[n](this[s], a(t, this), e);
                                };
                            case 4:
                                return function (t, e, i) {
                                    return x[n](this[s], a(t, this), e, i);
                                };
                            default:
                                return function () {
                                    var t = r.call(arguments);
                                    return t.unshift(this[s]), x[n].apply(x, t);
                                };
                        }
                    })(0, t, n));
            });
        },
        a = function (e, t) {
            return x.isFunction(e)
                ? e
                : x.isObject(e) && !t._isModel(e)
                ? s(e)
                : x.isString(e)
                ? function (t) {
                      return t.get(e);
                  }
                : e;
        },
        s = function (t) {
            var e = x.matches(t);
            return function (t) {
                return e(t.attributes);
            };
        },
        o = (h.Events = {}),
        u = /\s+/,
        c = function (t, e, i, n, s) {
            var r,
                a = 0;
            if (i && "object" == typeof i) {
                void 0 !== n && "context" in s && void 0 === s.context && (s.context = n);
                for (r = x.keys(i); a < r.length; a++) e = c(t, e, r[a], i[r[a]], s);
            } else if (i && u.test(i)) for (r = i.split(u); a < r.length; a++) e = t(e, r[a], n, s);
            else e = t(e, i, n, s);
            return e;
        };
    o.on = function (t, e, i) {
        return l(this, t, e, i);
    };
    var l = function (t, e, i, n, s) {
        return (t._events = c(d, t._events || {}, e, i, { context: n, ctx: t, listening: s })), s && ((t._listeners || (t._listeners = {}))[s.id] = s), t;
    };
    o.listenTo = function (t, e, i) {
        if (!t) return this;
        var n = t._listenId || (t._listenId = x.uniqueId("l")),
            s = this._listeningTo || (this._listeningTo = {}),
            r = s[n];
        if (!r) {
            var a = this._listenId || (this._listenId = x.uniqueId("l"));
            r = s[n] = { obj: t, objId: n, id: a, listeningTo: s, count: 0 };
        }
        return l(t, e, i, this, r), this;
    };
    var d = function (t, e, i, n) {
        if (i) {
            var s = t[e] || (t[e] = []),
                r = n.context,
                a = n.ctx,
                o = n.listening;
            o && o.count++, s.push({ callback: i, context: r, ctx: r || a, listening: o });
        }
        return t;
    };
    (o.off = function (t, e, i) {
        return this._events && (this._events = c(f, this._events, t, e, { context: i, listeners: this._listeners })), this;
    }),
        (o.stopListening = function (t, e, i) {
            var n = this._listeningTo;
            if (!n) return this;
            for (var s = t ? [t._listenId] : x.keys(n), r = 0; r < s.length; r++) {
                var a = n[s[r]];
                if (!a) break;
                a.obj.off(e, i, this);
            }
            return this;
        });
    var f = function (t, e, i, n) {
        if (t) {
            var s,
                r = 0,
                a = n.context,
                o = n.listeners;
            if (e || i || a) {
                for (var h = e ? [e] : x.keys(t); r < h.length; r++) {
                    var u = t[(e = h[r])];
                    if (!u) break;
                    for (var c = [], l = 0; l < u.length; l++) {
                        var d = u[l];
                        (i && i !== d.callback && i !== d.callback._callback) || (a && a !== d.context) ? c.push(d) : (s = d.listening) && 0 == --s.count && (delete o[s.id], delete s.listeningTo[s.objId]);
                    }
                    c.length ? (t[e] = c) : delete t[e];
                }
                return t;
            }
            for (var f = x.keys(o); r < f.length; r++) delete o[(s = o[f[r]]).id], delete s.listeningTo[s.objId];
        }
    };
    (o.once = function (t, e, i) {
        var n = c(g, {}, t, e, x.bind(this.off, this));
        return "string" == typeof t && null == i && (e = void 0), this.on(n, e, i);
    }),
        (o.listenToOnce = function (t, e, i) {
            var n = c(g, {}, e, i, x.bind(this.stopListening, this, t));
            return this.listenTo(t, n);
        });
    var g = function (t, e, i, n) {
        if (i) {
            var s = (t[e] = x.once(function () {
                n(e, s), i.apply(this, arguments);
            }));
            s._callback = i;
        }
        return t;
    };
    o.trigger = function (t) {
        if (!this._events) return this;
        for (var e = Math.max(0, arguments.length - 1), i = Array(e), n = 0; n < e; n++) i[n] = arguments[n + 1];
        return c(p, this._events, t, void 0, i), this;
    };
    var p = function (t, e, i, n) {
            if (t) {
                var s = t[e],
                    r = t.all;
                s && r && (r = r.slice()), s && v(s, n), r && v(r, [e].concat(n));
            }
            return t;
        },
        v = function (t, e) {
            var i,
                n = -1,
                s = t.length,
                r = e[0],
                a = e[1],
                o = e[2];
            switch (e.length) {
                case 0:
                    for (; ++n < s; ) (i = t[n]).callback.call(i.ctx);
                    return;
                case 1:
                    for (; ++n < s; ) (i = t[n]).callback.call(i.ctx, r);
                    return;
                case 2:
                    for (; ++n < s; ) (i = t[n]).callback.call(i.ctx, r, a);
                    return;
                case 3:
                    for (; ++n < s; ) (i = t[n]).callback.call(i.ctx, r, a, o);
                    return;
                default:
                    for (; ++n < s; ) (i = t[n]).callback.apply(i.ctx, e);
                    return;
            }
        };
    (o.bind = o.on), (o.unbind = o.off), x.extend(h, o);
    var m = (h.Model = function (t, e) {
        var i = t || {};
        e || (e = {}), (this.cid = x.uniqueId(this.cidPrefix)), (this.attributes = {}), e.collection && (this.collection = e.collection), e.parse && (i = this.parse(i, e) || {});
        var n = x.result(this, "defaults");
        (i = x.defaults(x.extend({}, n, i), n)), this.set(i, e), (this.changed = {}), this.initialize.apply(this, arguments);
    });
    x.extend(m.prototype, o, {
        changed: null,
        validationError: null,
        idAttribute: "id",
        cidPrefix: "c",
        initialize: function () {},
        toJSON: function (t) {
            return x.clone(this.attributes);
        },
        sync: function () {
            return h.sync.apply(this, arguments);
        },
        get: function (t) {
            return this.attributes[t];
        },
        escape: function (t) {
            return x.escape(this.get(t));
        },
        has: function (t) {
            return null != this.get(t);
        },
        matches: function (t) {
            return !!x.iteratee(t, this)(this.attributes);
        },
        set: function (t, e, i) {
            if (null == t) return this;
            var n;
            if (("object" == typeof t ? ((n = t), (i = e)) : ((n = {})[t] = e), i || (i = {}), !this._validate(n, i))) return !1;
            var s = i.unset,
                r = i.silent,
                a = [],
                o = this._changing;
            (this._changing = !0), o || ((this._previousAttributes = x.clone(this.attributes)), (this.changed = {}));
            var h = this.attributes,
                u = this.changed,
                c = this._previousAttributes;
            for (var l in n) (e = n[l]), x.isEqual(h[l], e) || a.push(l), x.isEqual(c[l], e) ? delete u[l] : (u[l] = e), s ? delete h[l] : (h[l] = e);
            if ((this.idAttribute in n && (this.id = this.get(this.idAttribute)), !r)) {
                a.length && (this._pending = i);
                for (var d = 0; d < a.length; d++) this.trigger("change:" + a[d], this, h[a[d]], i);
            }
            if (o) return this;
            if (!r) for (; this._pending; ) (i = this._pending), (this._pending = !1), this.trigger("change", this, i);
            return (this._pending = !1), (this._changing = !1), this;
        },
        unset: function (t, e) {
            return this.set(t, void 0, x.extend({}, e, { unset: !0 }));
        },
        clear: function (t) {
            var e = {};
            for (var i in this.attributes) e[i] = void 0;
            return this.set(e, x.extend({}, t, { unset: !0 }));
        },
        hasChanged: function (t) {
            return null == t ? !x.isEmpty(this.changed) : x.has(this.changed, t);
        },
        changedAttributes: function (t) {
            if (!t) return !!this.hasChanged() && x.clone(this.changed);
            var e = this._changing ? this._previousAttributes : this.attributes,
                i = {};
            for (var n in t) {
                var s = t[n];
                x.isEqual(e[n], s) || (i[n] = s);
            }
            return !!x.size(i) && i;
        },
        previous: function (t) {
            return null != t && this._previousAttributes ? this._previousAttributes[t] : null;
        },
        previousAttributes: function () {
            return x.clone(this._previousAttributes);
        },
        fetch: function (i) {
            i = x.extend({ parse: !0 }, i);
            var n = this,
                s = i.success;
            return (
                (i.success = function (t) {
                    var e = i.parse ? n.parse(t, i) : t;
                    if (!n.set(e, i)) return !1;
                    s && s.call(i.context, n, t, i), n.trigger("sync", n, t, i);
                }),
                O(this, i),
                this.sync("read", this, i)
            );
        },
        save: function (t, e, i) {
            var n;
            null == t || "object" == typeof t ? ((n = t), (i = e)) : ((n = {})[t] = e);
            var s = (i = x.extend({ validate: !0, parse: !0 }, i)).wait;
            if (n && !s) {
                if (!this.set(n, i)) return !1;
            } else if (!this._validate(n, i)) return !1;
            var r = this,
                a = i.success,
                o = this.attributes;
            (i.success = function (t) {
                r.attributes = o;
                var e = i.parse ? r.parse(t, i) : t;
                if ((s && (e = x.extend({}, n, e)), e && !r.set(e, i))) return !1;
                a && a.call(i.context, r, t, i), r.trigger("sync", r, t, i);
            }),
                O(this, i),
                n && s && (this.attributes = x.extend({}, o, n));
            var h = this.isNew() ? "create" : i.patch ? "patch" : "update";
            "patch" !== h || i.attrs || (i.attrs = n);
            var u = this.sync(h, this, i);
            return (this.attributes = o), u;
        },
        destroy: function (e) {
            e = e ? x.clone(e) : {};
            var i = this,
                n = e.success,
                s = e.wait,
                r = function () {
                    i.stopListening(), i.trigger("destroy", i, i.collection, e);
                },
                t = !(e.success = function (t) {
                    s && r(), n && n.call(e.context, i, t, e), i.isNew() || i.trigger("sync", i, t, e);
                });
            return this.isNew() ? x.defer(e.success) : (O(this, e), (t = this.sync("delete", this, e))), s || r(), t;
        },
        url: function () {
            var t = x.result(this, "urlRoot") || x.result(this.collection, "url") || M();
            if (this.isNew()) return t;
            var e = this.get(this.idAttribute);
            return t.replace(/[^\/]$/, "$&/") + encodeURIComponent(e);
        },
        parse: function (t, e) {
            return t;
        },
        clone: function () {
            return new this.constructor(this.attributes);
        },
        isNew: function () {
            return !this.has(this.idAttribute);
        },
        isValid: function (t) {
            return this._validate({}, x.extend({}, t, { validate: !0 }));
        },
        _validate: function (t, e) {
            if (!e.validate || !this.validate) return !0;
            t = x.extend({}, this.attributes, t);
            var i = (this.validationError = this.validate(t, e) || null);
            return !i || (this.trigger("invalid", this, i, x.extend(e, { validationError: i })), !1);
        },
    }),
        n(m, { keys: 1, values: 1, pairs: 1, invert: 1, pick: 0, omit: 0, chain: 1, isEmpty: 1 }, "attributes");
    var _ = (h.Collection = function (t, e) {
            e || (e = {}), e.model && (this.model = e.model), void 0 !== e.comparator && (this.comparator = e.comparator), this._reset(), this.initialize.apply(this, arguments), t && this.reset(t, x.extend({ silent: !0 }, e));
        }),
        w = { add: !0, remove: !0, merge: !0 },
        y = { add: !0, remove: !1 },
        E = function (t, e, i) {
            i = Math.min(Math.max(i, 0), t.length);
            var n,
                s = Array(t.length - i),
                r = e.length;
            for (n = 0; n < s.length; n++) s[n] = t[n + i];
            for (n = 0; n < r; n++) t[n + i] = e[n];
            for (n = 0; n < s.length; n++) t[n + r + i] = s[n];
        };
    x.extend(_.prototype, o, {
        model: m,
        initialize: function () {},
        toJSON: function (e) {
            return this.map(function (t) {
                return t.toJSON(e);
            });
        },
        sync: function () {
            return h.sync.apply(this, arguments);
        },
        add: function (t, e) {
            return this.set(t, x.extend({ merge: !1 }, e, y));
        },
        remove: function (t, e) {
            e = x.extend({}, e);
            var i = !x.isArray(t);
            t = i ? [t] : t.slice();
            var n = this._removeModels(t, e);
            return !e.silent && n.length && ((e.changes = { added: [], merged: [], removed: n }), this.trigger("update", this, e)), i ? n[0] : n;
        },
        set: function (t, e) {
            if (null != t) {
                (e = x.extend({}, w, e)).parse && !this._isModel(t) && (t = this.parse(t, e) || []);
                var i = !x.isArray(t);
                t = i ? [t] : t.slice();
                var n = e.at;
                null != n && (n = +n), n > this.length && (n = this.length), n < 0 && (n += this.length + 1);
                var s,
                    r,
                    a = [],
                    o = [],
                    h = [],
                    u = [],
                    c = {},
                    l = e.add,
                    d = e.merge,
                    f = e.remove,
                    g = !1,
                    p = this.comparator && null == n && !1 !== e.sort,
                    v = x.isString(this.comparator) ? this.comparator : null;
                for (r = 0; r < t.length; r++) {
                    s = t[r];
                    var m = this.get(s);
                    if (m) {
                        if (d && s !== m) {
                            var _ = this._isModel(s) ? s.attributes : s;
                            e.parse && (_ = m.parse(_, e)), m.set(_, e), h.push(m), p && !g && (g = m.hasChanged(v));
                        }
                        c[m.cid] || ((c[m.cid] = !0), a.push(m)), (t[r] = m);
                    } else l && (s = t[r] = this._prepareModel(s, e)) && (o.push(s), this._addReference(s, e), (c[s.cid] = !0), a.push(s));
                }
                if (f) {
                    for (r = 0; r < this.length; r++) c[(s = this.models[r]).cid] || u.push(s);
                    u.length && this._removeModels(u, e);
                }
                var y = !1,
                    b = !p && l && f;
                if (
                    (a.length && b
                        ? ((y =
                              this.length !== a.length ||
                              x.some(this.models, function (t, e) {
                                  return t !== a[e];
                              })),
                          (this.models.length = 0),
                          E(this.models, a, 0),
                          (this.length = this.models.length))
                        : o.length && (p && (g = !0), E(this.models, o, null == n ? this.length : n), (this.length = this.models.length)),
                    g && this.sort({ silent: !0 }),
                    !e.silent)
                ) {
                    for (r = 0; r < o.length; r++) null != n && (e.index = n + r), (s = o[r]).trigger("add", s, this, e);
                    (g || y) && this.trigger("sort", this, e), (o.length || u.length || h.length) && ((e.changes = { added: o, removed: u, merged: h }), this.trigger("update", this, e));
                }
                return i ? t[0] : t;
            }
        },
        reset: function (t, e) {
            e = e ? x.clone(e) : {};
            for (var i = 0; i < this.models.length; i++) this._removeReference(this.models[i], e);
            return (e.previousModels = this.models), this._reset(), (t = this.add(t, x.extend({ silent: !0 }, e))), e.silent || this.trigger("reset", this, e), t;
        },
        push: function (t, e) {
            return this.add(t, x.extend({ at: this.length }, e));
        },
        pop: function (t) {
            var e = this.at(this.length - 1);
            return this.remove(e, t);
        },
        unshift: function (t, e) {
            return this.add(t, x.extend({ at: 0 }, e));
        },
        shift: function (t) {
            var e = this.at(0);
            return this.remove(e, t);
        },
        slice: function () {
            return r.apply(this.models, arguments);
        },
        get: function (t) {
            if (null != t) return this._byId[t] || this._byId[this.modelId(t.attributes || t)] || (t.cid && this._byId[t.cid]);
        },
        has: function (t) {
            return null != this.get(t);
        },
        at: function (t) {
            return t < 0 && (t += this.length), this.models[t];
        },
        where: function (t, e) {
            return this[e ? "find" : "filter"](t);
        },
        findWhere: function (t) {
            return this.where(t, !0);
        },
        sort: function (t) {
            var e = this.comparator;
            if (!e) throw new Error("Cannot sort a set without a comparator");
            t || (t = {});
            var i = e.length;
            return x.isFunction(e) && (e = x.bind(e, this)), 1 === i || x.isString(e) ? (this.models = this.sortBy(e)) : this.models.sort(e), t.silent || this.trigger("sort", this, t), this;
        },
        pluck: function (t) {
            return this.map(t + "");
        },
        fetch: function (i) {
            var n = (i = x.extend({ parse: !0 }, i)).success,
                s = this;
            return (
                (i.success = function (t) {
                    var e = i.reset ? "reset" : "set";
                    s[e](t, i), n && n.call(i.context, s, t, i), s.trigger("sync", s, t, i);
                }),
                O(this, i),
                this.sync("read", this, i)
            );
        },
        create: function (t, e) {
            var n = (e = e ? x.clone(e) : {}).wait;
            if (!(t = this._prepareModel(t, e))) return !1;
            n || this.add(t, e);
            var s = this,
                r = e.success;
            return (
                (e.success = function (t, e, i) {
                    n && s.add(t, i), r && r.call(i.context, t, e, i);
                }),
                t.save(null, e),
                t
            );
        },
        parse: function (t, e) {
            return t;
        },
        clone: function () {
            return new this.constructor(this.models, { model: this.model, comparator: this.comparator });
        },
        modelId: function (t) {
            return t[this.model.prototype.idAttribute || "id"];
        },
        _reset: function () {
            (this.length = 0), (this.models = []), (this._byId = {});
        },
        _prepareModel: function (t, e) {
            if (this._isModel(t)) return t.collection || (t.collection = this), t;
            var i = new ((e = e ? x.clone(e) : {}).collection = this).model(t, e);
            return i.validationError ? (this.trigger("invalid", this, i.validationError, e), !1) : i;
        },
        _removeModels: function (t, e) {
            for (var i = [], n = 0; n < t.length; n++) {
                var s = this.get(t[n]);
                if (s) {
                    var r = this.indexOf(s);
                    this.models.splice(r, 1), this.length--, delete this._byId[s.cid];
                    var a = this.modelId(s.attributes);
                    null != a && delete this._byId[a], e.silent || ((e.index = r), s.trigger("remove", s, this, e)), i.push(s), this._removeReference(s, e);
                }
            }
            return i;
        },
        _isModel: function (t) {
            return t instanceof m;
        },
        _addReference: function (t, e) {
            this._byId[t.cid] = t;
            var i = this.modelId(t.attributes);
            null != i && (this._byId[i] = t), t.on("all", this._onModelEvent, this);
        },
        _removeReference: function (t, e) {
            delete this._byId[t.cid];
            var i = this.modelId(t.attributes);
            null != i && delete this._byId[i], this === t.collection && delete t.collection, t.off("all", this._onModelEvent, this);
        },
        _onModelEvent: function (t, e, i, n) {
            if (e) {
                if (("add" === t || "remove" === t) && i !== this) return;
                if (("destroy" === t && this.remove(e, n), "change" === t)) {
                    var s = this.modelId(e.previousAttributes()),
                        r = this.modelId(e.attributes);
                    s !== r && (null != s && delete this._byId[s], null != r && (this._byId[r] = e));
                }
            }
            this.trigger.apply(this, arguments);
        },
    }),
        n(
            _,
            {
                forEach: 3,
                each: 3,
                map: 3,
                collect: 3,
                reduce: 0,
                foldl: 0,
                inject: 0,
                reduceRight: 0,
                foldr: 0,
                find: 3,
                detect: 3,
                filter: 3,
                select: 3,
                reject: 3,
                every: 3,
                all: 3,
                some: 3,
                any: 3,
                include: 3,
                includes: 3,
                contains: 3,
                invoke: 0,
                max: 3,
                min: 3,
                toArray: 1,
                size: 1,
                first: 3,
                head: 3,
                take: 3,
                initial: 3,
                rest: 3,
                tail: 3,
                drop: 3,
                last: 3,
                without: 0,
                difference: 0,
                indexOf: 3,
                shuffle: 1,
                lastIndexOf: 3,
                isEmpty: 1,
                chain: 1,
                sample: 3,
                partition: 3,
                groupBy: 3,
                countBy: 3,
                sortBy: 3,
                indexBy: 3,
                findIndex: 3,
                findLastIndex: 3,
            },
            "models"
        );
    var b = (h.View = function (t) {
            (this.cid = x.uniqueId("view")), x.extend(this, x.pick(t, S)), this._ensureElement(), this.initialize.apply(this, arguments);
        }),
        I = /^(\S+)\s*(.*)$/,
        S = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
    x.extend(b.prototype, o, {
        tagName: "div",
        $: function (t) {
            return this.$el.find(t);
        },
        initialize: function () {},
        render: function () {
            return this;
        },
        remove: function () {
            return this._removeElement(), this.stopListening(), this;
        },
        _removeElement: function () {
            this.$el.remove();
        },
        setElement: function (t) {
            return this.undelegateEvents(), this._setElement(t), this.delegateEvents(), this;
        },
        _setElement: function (t) {
            (this.$el = t instanceof h.$ ? t : h.$(t)), (this.el = this.$el[0]);
        },
        delegateEvents: function (t) {
            if ((t || (t = x.result(this, "events")), !t)) return this;
            for (var e in (this.undelegateEvents(), t)) {
                var i = t[e];
                if ((x.isFunction(i) || (i = this[i]), i)) {
                    var n = e.match(I);
                    this.delegate(n[1], n[2], x.bind(i, this));
                }
            }
            return this;
        },
        delegate: function (t, e, i) {
            return this.$el.on(t + ".delegateEvents" + this.cid, e, i), this;
        },
        undelegateEvents: function () {
            return this.$el && this.$el.off(".delegateEvents" + this.cid), this;
        },
        undelegate: function (t, e, i) {
            return this.$el.off(t + ".delegateEvents" + this.cid, e, i), this;
        },
        _createElement: function (t) {
            return document.createElement(t);
        },
        _ensureElement: function () {
            if (this.el) this.setElement(x.result(this, "el"));
            else {
                var t = x.extend({}, x.result(this, "attributes"));
                this.id && (t.id = x.result(this, "id")), this.className && (t.class = x.result(this, "className")), this.setElement(this._createElement(x.result(this, "tagName"))), this._setAttributes(t);
            }
        },
        _setAttributes: function (t) {
            this.$el.attr(t);
        },
    }),
        (h.sync = function (t, e, n) {
            var i = k[t];
            x.defaults(n || (n = {}), { emulateHTTP: h.emulateHTTP, emulateJSON: h.emulateJSON });
            var s = { type: i, dataType: "json" };
            if (
                (n.url || (s.url = x.result(e, "url") || M()),
                null != n.data || !e || ("create" !== t && "update" !== t && "patch" !== t) || ((s.contentType = "application/json"), (s.data = JSON.stringify(n.attrs || e.toJSON(n)))),
                n.emulateJSON && ((s.contentType = "application/x-www-form-urlencoded"), (s.data = s.data ? { model: s.data } : {})),
                n.emulateHTTP && ("PUT" === i || "DELETE" === i || "PATCH" === i))
            ) {
                (s.type = "POST"), n.emulateJSON && (s.data._method = i);
                var r = n.beforeSend;
                n.beforeSend = function (t) {
                    if ((t.setRequestHeader("X-HTTP-Method-Override", i), r)) return r.apply(this, arguments);
                };
            }
            "GET" === s.type || n.emulateJSON || (s.processData = !1);
            var a = n.error;
            n.error = function (t, e, i) {
                (n.textStatus = e), (n.errorThrown = i), a && a.call(n.context, t, e, i);
            };
            var o = (n.xhr = h.ajax(x.extend(s, n)));
            return e.trigger("request", e, o, n), o;
        });
    var k = { create: "POST", update: "PUT", patch: "PATCH", delete: "DELETE", read: "GET" };
    h.ajax = function () {
        return h.$.ajax.apply(h.$, arguments);
    };
    var T = (h.Router = function (t) {
            t || (t = {}), t.routes && (this.routes = t.routes), this._bindRoutes(), this.initialize.apply(this, arguments);
        }),
        P = /\((.*?)\)/g,
        H = /(\(\?)?:\w+/g,
        $ = /\*\w+/g,
        A = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    x.extend(T.prototype, o, {
        initialize: function () {},
        route: function (i, n, s) {
            x.isRegExp(i) || (i = this._routeToRegExp(i)), x.isFunction(n) && ((s = n), (n = "")), s || (s = this[n]);
            var r = this;
            return (
                h.history.route(i, function (t) {
                    var e = r._extractParameters(i, t);
                    !1 !== r.execute(s, e, n) && (r.trigger.apply(r, ["route:" + n].concat(e)), r.trigger("route", n, e), h.history.trigger("route", r, n, e));
                }),
                this
            );
        },
        execute: function (t, e, i) {
            t && t.apply(this, e);
        },
        navigate: function (t, e) {
            return h.history.navigate(t, e), this;
        },
        _bindRoutes: function () {
            if (this.routes) {
                this.routes = x.result(this, "routes");
                for (var t, e = x.keys(this.routes); null != (t = e.pop()); ) this.route(t, this.routes[t]);
            }
        },
        _routeToRegExp: function (t) {
            return (
                (t = t
                    .replace(A, "\\$&")
                    .replace(P, "(?:$1)?")
                    .replace(H, function (t, e) {
                        return e ? t : "([^/?]+)";
                    })
                    .replace($, "([^?]*?)")),
                new RegExp("^" + t + "(?:\\?([\\s\\S]*))?$")
            );
        },
        _extractParameters: function (t, e) {
            var i = t.exec(e).slice(1);
            return x.map(i, function (t, e) {
                return e === i.length - 1 ? t || null : t ? decodeURIComponent(t) : null;
            });
        },
    });
    var C = (h.History = function () {
            (this.handlers = []), (this.checkUrl = x.bind(this.checkUrl, this)), "undefined" != typeof window && ((this.location = window.location), (this.history = window.history));
        }),
        R = /^[#\/]|\s+$/g,
        j = /^\/+|\/+$/g,
        N = /#.*$/;
    (C.started = !1),
        x.extend(C.prototype, o, {
            interval: 50,
            atRoot: function () {
                return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root && !this.getSearch();
            },
            matchRoot: function () {
                return this.decodeFragment(this.location.pathname).slice(0, this.root.length - 1) + "/" === this.root;
            },
            decodeFragment: function (t) {
                return decodeURI(t.replace(/%25/g, "%2525"));
            },
            getSearch: function () {
                var t = this.location.href.replace(/#.*/, "").match(/\?.+/);
                return t ? t[0] : "";
            },
            getHash: function (t) {
                var e = (t || this).location.href.match(/#(.*)$/);
                return e ? e[1] : "";
            },
            getPath: function () {
                var t = this.decodeFragment(this.location.pathname + this.getSearch()).slice(this.root.length - 1);
                return "/" === t.charAt(0) ? t.slice(1) : t;
            },
            getFragment: function (t) {
                return null == t && (t = this._usePushState || !this._wantsHashChange ? this.getPath() : this.getHash()), t.replace(R, "");
            },
            start: function (t) {
                if (C.started) throw new Error("Backbone.history has already been started");
                if (
                    ((C.started = !0),
                    (this.options = x.extend({ root: "/" }, this.options, t)),
                    (this.root = this.options.root),
                    (this._wantsHashChange = !1 !== this.options.hashChange),
                    (this._hasHashChange = "onhashchange" in window && (void 0 === document.documentMode || 7 < document.documentMode)),
                    (this._useHashChange = this._wantsHashChange && this._hasHashChange),
                    (this._wantsPushState = !!this.options.pushState),
                    (this._hasPushState = !(!this.history || !this.history.pushState)),
                    (this._usePushState = this._wantsPushState && this._hasPushState),
                    (this.fragment = this.getFragment()),
                    (this.root = ("/" + this.root + "/").replace(j, "/")),
                    this._wantsHashChange && this._wantsPushState)
                ) {
                    if (!this._hasPushState && !this.atRoot()) {
                        var e = this.root.slice(0, -1) || "/";
                        return this.location.replace(e + "#" + this.getPath()), !0;
                    }
                    this._hasPushState && this.atRoot() && this.navigate(this.getHash(), { replace: !0 });
                }
                if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
                    (this.iframe = document.createElement("iframe")), (this.iframe.src = "javascript:0"), (this.iframe.style.display = "none"), (this.iframe.tabIndex = -1);
                    var i = document.body,
                        n = i.insertBefore(this.iframe, i.firstChild).contentWindow;
                    n.document.open(), n.document.close(), (n.location.hash = "#" + this.fragment);
                }
                var s =
                    window.addEventListener ||
                    function (t, e) {
                        return attachEvent("on" + t, e);
                    };
                if (
                    (this._usePushState
                        ? s("popstate", this.checkUrl, !1)
                        : this._useHashChange && !this.iframe
                        ? s("hashchange", this.checkUrl, !1)
                        : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)),
                    !this.options.silent)
                )
                    return this.loadUrl();
            },
            stop: function () {
                var t =
                    window.removeEventListener ||
                    function (t, e) {
                        return detachEvent("on" + t, e);
                    };
                this._usePushState ? t("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe && t("hashchange", this.checkUrl, !1),
                    this.iframe && (document.body.removeChild(this.iframe), (this.iframe = null)),
                    this._checkUrlInterval && clearInterval(this._checkUrlInterval),
                    (C.started = !1);
            },
            route: function (t, e) {
                this.handlers.unshift({ route: t, callback: e });
            },
            checkUrl: function (t) {
                var e = this.getFragment();
                if ((e === this.fragment && this.iframe && (e = this.getHash(this.iframe.contentWindow)), e === this.fragment)) return !1;
                this.iframe && this.navigate(e), this.loadUrl();
            },
            loadUrl: function (e) {
                return (
                    !!this.matchRoot() &&
                    ((e = this.fragment = this.getFragment(e)),
                    x.some(this.handlers, function (t) {
                        if (t.route.test(e)) return t.callback(e), !0;
                    }))
                );
            },
            navigate: function (t, e) {
                if (!C.started) return !1;
                (e && !0 !== e) || (e = { trigger: !!e }), (t = this.getFragment(t || ""));
                var i = this.root;
                ("" !== t && "?" !== t.charAt(0)) || (i = i.slice(0, -1) || "/");
                var n = i + t;
                if (((t = this.decodeFragment(t.replace(N, ""))), this.fragment !== t)) {
                    if (((this.fragment = t), this._usePushState)) this.history[e.replace ? "replaceState" : "pushState"]({}, document.title, n);
                    else {
                        if (!this._wantsHashChange) return this.location.assign(n);
                        if ((this._updateHash(this.location, t, e.replace), this.iframe && t !== this.getHash(this.iframe.contentWindow))) {
                            var s = this.iframe.contentWindow;
                            e.replace || (s.document.open(), s.document.close()), this._updateHash(s.location, t, e.replace);
                        }
                    }
                    return e.trigger ? this.loadUrl(t) : void 0;
                }
            },
            _updateHash: function (t, e, i) {
                if (i) {
                    var n = t.href.replace(/(javascript:|#).*$/, "");
                    t.replace(n + "#" + e);
                } else t.hash = "#" + e;
            },
        }),
        (h.history = new C()),
        (m.extend = _.extend = T.extend = b.extend = C.extend = function (t, e) {
            var i,
                n = this;
            return (
                (i =
                    t && x.has(t, "constructor")
                        ? t.constructor
                        : function () {
                              return n.apply(this, arguments);
                          }),
                x.extend(i, n, e),
                (i.prototype = x.create(n.prototype, t)),
                ((i.prototype.constructor = i).__super__ = n.prototype),
                i
            );
        });
    var M = function () {
            throw new Error('A "url" property or function must be specified');
        },
        O = function (e, i) {
            var n = i.error;
            i.error = function (t) {
                n && n.call(i.context, e, t, i), e.trigger("error", e, t, i);
            };
        };
    return h;
});
var EventDispatcher, relax;
"classList" in document.documentElement ||
    !Object.defineProperty ||
    "undefined" == typeof HTMLElement ||
    Object.defineProperty(HTMLElement.prototype, "classList", {
        get: function () {
            function t(o) {
                return function (t) {
                    var e = n.className.split(/\s+/),
                        r = e.indexOf(t);
                    o(e, r, t), (n.className = e.join(" "));
                };
            }
            var n = this,
                e = {
                    add: t(function (t, e, r) {
                        ~e || t.push(r);
                    }),
                    remove: t(function (t, e) {
                        ~e && t.splice(e, 1);
                    }),
                    toggle: t(function (t, e, r) {
                        ~e ? t.splice(e, 1) : t.push(r);
                    }),
                    contains: function (t) {
                        return !!~n.className.split(/\s+/).indexOf(t);
                    },
                    item: function (t) {
                        return n.className.split(/\s+/)[t] || null;
                    },
                };
            return (
                Object.defineProperty(e, "length", {
                    get: function () {
                        return n.className.split(/\s+/).length;
                    },
                }),
                e
            );
        },
    }),
    (function () {
        var i = !1,
            a = /xyz/.test(function () {}) ? /\b_super\b/ : /.*/;
        (this.Class = function () {}),
            (Class.extend = function (t) {
                function e() {
                    !i && this.init && this.init.apply(this, arguments);
                }
                var n = this.prototype;
                i = !0;
                var r = new this();
                for (var o in ((i = !1), t))
                    r[o] =
                        "function" == typeof t[o] && "function" == typeof n[o] && a.test(t[o])
                            ? (function (r, o) {
                                  return function () {
                                      var t = this._super;
                                      this._super = n[r];
                                      var e = o.apply(this, arguments);
                                      return (this._super = t), e;
                                  };
                              })(o, t[o])
                            : t[o];
                return (((e.prototype = r).constructor = e).extend = arguments.callee), e;
            }),
            "function" == typeof define &&
                define.amd &&
                define("Class", function () {
                    return Class;
                });
    })(),
    window.location.origin || (window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "")),
    Object.keys ||
        (Object.keys = (function () {
            "use strict";
            var n = Object.prototype.hasOwnProperty,
                i = !{ toString: null }.propertyIsEnumerable("toString"),
                a = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                s = a.length;
            return function (t) {
                if ("object" != typeof t && ("function" != typeof t || null === t)) throw new TypeError("Object.keys called on non-object");
                var e,
                    r,
                    o = [];
                for (e in t) n.call(t, e) && o.push(e);
                if (i) for (r = 0; r < s; r++) n.call(t, a[r]) && o.push(a[r]);
                return o;
            };
        })()),
    Array.prototype.indexOf ||
        (Array.prototype.indexOf = function (t) {
            var e = this.length >>> 0,
                r = Number(arguments[1]) || 0;
            for ((r = r < 0 ? Math.ceil(r) : Math.floor(r)) < 0 && (r += e); r < e; r++) if (r in this && this[r] === t) return r;
            return -1;
        }),
    ((relax = { animation: {}, browser: {}, math: {}, geom: {}, color: {}, performance: {}, layout: {}, caniuse: {}, dom: {}, tools: {}, displayObject: {} }).geom.lineDistance = function (t, e) {
        var r = 0,
            o = 0;
        return (r = e.x - t.x), (r *= r), (o = e.y - t.y), (o *= o), Math.sqrt(r + o);
    }),
    (relax.geom.degToRad = function (t) {
        return (t / 180) * Math.PI;
    }),
    (relax.geom.radToDeg = function (t) {
        return (180 * t) / Math.PI;
    }),
    (relax.geom.getXYFromMouseTouchEvent = function (t) {
        var e = null;
        return t.originalEvent ? (e = t.originalEvent.touches || t.originalEvent.changedTouches) : t.changedTouches && (e = t.changedTouches), e ? { x: e[0].pageX, y: e[0].pageY, touches: e[0] } : { x: t.pageX, y: t.pageY, touches: null };
    }),
    (relax.geom.getDistanceFromLatLonInKm = function (t, e, r, o) {
        var n = relax.geom.degToRad(r - t),
            i = relax.geom.degToRad(o - e),
            a = Math.sin(n / 2) * Math.sin(n / 2) + Math.cos(relax.geom.degToRad(t)) * Math.cos(relax.geom.degToRad(r)) * Math.sin(i / 2) * Math.sin(i / 2);
        return 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)) * 6371;
    }),
    (relax.dom.bindSelect = function (t, e, r) {
        var o = relax.browser.getInternetExplorerVersion() <= 8 && -1 !== relax.browser.getInternetExplorerVersion(),
            n = r;
        o
            ? $(t).bind("propertychange", function (t) {
                  "propertychange" == t.type && "value" == event.propertyName.toLowerCase() && ((t.target.selectedIndex = this.selectedIndex), n(t));
              })
            : $(t).change(relax.dom.bind(e, n));
    }),
    (relax.dom.bind = function (t, e) {
        return function () {
            e.apply(t, arguments);
        };
    }),
    (relax.tools.checkInterface = function (t, e) {
        for (var r in e) if (typeof t[r] != typeof e[r]) return log("object failed to implement interface member " + r), !1;
        return !0;
    }),
    (relax.setLog = function (t) {
        t
            ? (window.log = function () {})
            : -1 === relax.browser.getInternetExplorerVersion()
            ? (Function.prototype.bind &&
                  ("object" == typeof console || "function" == typeof console) &&
                  "object" == typeof console.log &&
                  ["log", "info", "warn", "error", "assert", "dir", "clear", "profile", "profileEnd"].forEach(function (t) {
                      console[t] = this.call(console[t], console);
                  }, Function.prototype.bind),
              window.log ||
                  (window.log = function () {
                      var t,
                          e,
                          r,
                          o,
                          n = arguments,
                          i = !1;
                      if (
                          ((log.history = log.history || []),
                          log.history.push(arguments),
                          log.detailPrint && log.needDetailPrint && ((t = navigator.userAgent), (e = /Windows\sNT\s(\d+\.\d+)/), console && console.log && /MSIE\s(\d+)/.test(t) && e.test(t) && 6.1 <= parseFloat(e.exec(t)[1]) && (i = !0)),
                          i || ("undefined" != typeof console && "function" == typeof console.log))
                      )
                          if (log.detailPrint && log.needDetailPrint && log.needDetailPrint()) for (console.log("-----------------"), n = log.detailPrint(n), o = 0; o < n.length; ) console.log(n[o]), o++;
                          else 1 === Array.prototype.slice.call(n).length && "string" == typeof Array.prototype.slice.call(n)[0] ? console.log(Array.prototype.slice.call(n).toString()) : console.log(Array.prototype.slice.call(n));
                      else if (Function.prototype.bind || "undefined" == typeof console || "object" != typeof console.log)
                          document.getElementById("firebug-lite")
                              ? setTimeout(function () {
                                    window.log.apply(window, n);
                                }, 500)
                              : (((r = document.createElement("script")).type = "text/javascript"),
                                (r.id = "firebug-lite"),
                                (r.src = "https://getfirebug.com/firebug-lite.js"),
                                document.getElementsByTagName("HEAD")[0].appendChild(r),
                                setTimeout(function () {
                                    window.log.apply(window, n);
                                }, 2e3));
                      else if (log.detailPrint)
                          for (Function.prototype.call.call(console.log, console, Array.prototype.slice.call(["-----------------"])), n = log.detailPrint(n), o = 0; o < n.length; )
                              Function.prototype.call.call(console.log, console, Array.prototype.slice.call([n[o]])), o++;
                      else Function.prototype.call.call(console.log, console, Array.prototype.slice.call(n));
                  }))
            : (window.log = function () {
                  if (((log.history = log.history || []), log.history.push(arguments), this.console)) {
                      var t,
                          e = arguments;
                      (e.callee = e.callee.caller), (t = [].slice.call(e)), "object" == typeof console.log ? log.apply.call(console.log, console, t) : console.log.apply(console, t);
                  }
              });
    }),
    (function (t) {
        "use strict";
        var r,
            o = t.document,
            n = /^(#?[\w-]+|\.[\w-.]+)$/,
            i = /\./g,
            a = [].slice;
        t.query = function (t, e) {
            if (((e = e || o), n.test(t)))
                switch (t.charAt(0)) {
                    case "#":
                        return [e.getElementById(t.substr(1))];
                    case ".":
                        return (r = t.substr(1).replace(i, " ")), a.call(e.getElementsByClassName(r));
                    default:
                        return a.call(e.getElementsByTagName(t));
                }
            return a.call(e.querySelectorAll(t));
        };
    })(this),
    (function () {
        for (var n = 0, t = ["ms", "moz", "webkit", "o"], e = 0; e < t.length && !window.requestAnimationFrame; ++e)
            (window.requestAnimationFrame = window[t[e] + "RequestAnimationFrame"]), (window.cancelRequestAnimationFrame = window[t[e] + "CancelRequestAnimationFrame"]);
        window.requestAnimationFrame ||
            (window.requestAnimationFrame = function (t) {
                var e = new Date().getTime(),
                    r = Math.max(0, 16 - (e - n)),
                    o = window.setTimeout(function () {
                        t(e + r);
                    }, r);
                return (n = e + r), o;
            }),
            window.cancelAnimationFrame ||
                (window.cancelAnimationFrame = function (t) {
                    clearTimeout(t);
                });
    })(),
    (relax = relax || {}).array || (relax.array = {}),
    (relax.date = {}),
    (relax.array.equals = function (t, e) {
        if (!e) return !1;
        if (t.length != e.length) return !1;
        for (var r = 0, o = z.length; r < o; r++)
            if (t[r] instanceof Array && e[r] instanceof Array) {
                if (!relax.array.equals(t[r], e[r])) return !1;
            } else if (t[r] != e[r]) return !1;
        return !0;
    }),
    (relax.array.equalInPercent = function (t, e) {
        if (!e) return 0;
        for (var r = (100 / t.length) * 0.01, o = 0, n = 0, i = t.length; n < i; n++) t[n] == e[n] && n < e.length && (o += r);
        return o;
    }),
    (relax.date.getWeek = function (t) {
        t = "int" == typeof t ? t : 1;
        var e = new Date(this.getFullYear(), 0, 1),
            r = e.getDay() - t;
        r = 0 <= r ? r : r + 7;
        var o,
            n = Math.floor((this.getTime() - e.getTime() - 6e4 * (this.getTimezoneOffset() - e.getTimezoneOffset())) / 864e5) + 1;
        return (
            r < 4
                ? 52 < (o = Math.floor((n + r - 1) / 7) + 1) && ((nYear = new Date(this.getFullYear() + 1, 0, 1)), (nday = nYear.getDay() - t), (nday = 0 <= nday ? nday : nday + 7), (o = nday < 4 ? 1 : 53))
                : (o = Math.floor((n + r - 1) / 7)),
            o
        );
    }),
    HTMLElement.prototype.index ||
        (HTMLElement.prototype.index = function () {
            for (var t = this, e = t.parentNode, r = 0; t.previousElementSibling; ) r++, (t = t.previousElementSibling);
            return this === e.children[r] ? r : -1;
        }),
    (relax = relax || {}).browser || (relax.browser = {}),
    (relax.browser.isIOS = function () {
        return !!(navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i));
    }),
    (relax.browser.isMacintosh = function () {
        return -1 < navigator.platform.indexOf("Mac");
    }),
    (relax.browser.isWindows = function () {
        return -1 < navigator.platform.indexOf("Win");
    }),
    (relax.browser.isFirefox = function () {
        return 0 < navigator.userAgent.lastIndexOf("Firefox/") && Number(navigator.userAgent.match(/Firefox\/([1]{1}[7-9]{1}|[2-9]{1}[0-9]{1})/)[1]);
    }),
    (relax.browser.getIOSVersion = function () {
        if (!relax.browser.isIOS()) return -1;
        var t = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
            e = [parseInt(t[1], 10), parseInt(t[2], 10), parseInt(t[3] || 0, 10)];
        return parseFloat(e.join("."));
    }),
    (relax.browser.getAndroidVersion = function () {
        var t = navigator.userAgent.toLowerCase().match(/android\s([0-9\.]*)/);
        return parseFloat(t ? t[1] : -1);
    }),
    (relax.browser.isTouch = function () {
        return !!("ontouchstart" in window) || !!("msmaxtouchpoints" in window.navigator);
    }),
    (relax.browser.isAndroid = function () {
        return !!navigator.userAgent.match(/Android/i);
    }),
    (relax.browser.isWindowsPhone = function () {
        return !(!navigator.userAgent.match(/Windows Phone/i) && !navigator.userAgent.match(/IEMobile/i));
    }),
    (relax.browser.isTablet = function () {
        var t = relax.browser.isAndroid() && !navigator.userAgent.match(/Mobile/i) && !navigator.userAgent.match(/mobile/i);
        return !(!navigator.userAgent.match(/iPad/i) && !t);
    }),
    (relax.browser.isMobile = function () {
        var t = !relax.browser.isTablet() && (navigator.userAgent.match(/Mobile/i) || navigator.userAgent.match(/mobile/i)),
            e = !relax.browser.isTablet() && relax.browser.isIOS(),
            r = relax.browser.isWindowsPhone();
        return !!(t || e || r);
    }),
    (relax.browser.isWebKit = function () {
        return "WebkitAppearance" in document.documentElement.style;
    }),
    (relax.browser.getInternetExplorerVersion = function () {
        var t = -1;
        if ("Microsoft Internet Explorer" == navigator.appName) {
            var e = navigator.userAgent;
            null != new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})").exec(e) && (t = parseFloat(RegExp.$1));
        } else "Netscape" == navigator.appName && ((e = navigator.userAgent), null != new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})").exec(e) && (t = parseFloat(RegExp.$1)));
        return t;
    }),
    (relax.browser.getMouseEvent = function (t) {
        var e = [];
        return (
            (e.mousedown = "ontouchstart" in window && relax.browser.isTouch() ? "touchstart" : "mousedown"),
            (e.mouseup = "ontouchstart" in window && relax.browser.isTouch() ? "touchend" : "mouseup"),
            (e.mousemove = "ontouchstart" in window && relax.browser.isTouch() ? "touchmove" : "mousemove"),
            e[t]
        );
    }),
    (relax.browser.serverReachable = function (t, e) {
        (null == e || null == e) && (e = !1);
        var r,
            o = new (window.ActiveXObject || XMLHttpRequest)("Microsoft.XMLHTTP");
        o.open("HEAD", "//" + window.location.hostname + "/?rand=" + Math.random(), e);
        try {
            o.send();
            var n = !((200 <= (r = o.status) && r < 300) || 304 === r);
            return t && t(n), n;
        } catch (e) {
            return t && t(!0), !0;
        }
    }),
    ((relax = relax || {}).caniuse = relax.caniuse || {}),
    (relax.caniuse.pushstate = function () {
        return !(!window.history || !history.pushState);
    }),
    (relax.caniuse.serviceWorker = function () {
        return "serviceWorker" in navigator;
    }),
    (relax.caniuse.canvas = function () {
        if (null == this._canvasSupported || null == this._canvasSupported) {
            var t = document.createElement("canvas");
            this._canvasSupported = !(!t.getContext || !t.getContext("2d"));
        }
        return this._canvasSupported;
    }),
    (relax.caniuse.localstorage = function () {
        try {
            return localStorage.setItem("rwatgg_hello_storage", "mod"), localStorage.removeItem("rwatgg_hello_storage"), !0;
        } catch (t) {
            return !1;
        }
    }),
    (relax.caniuse.cssBlendmodes = function () {
        try {
            if ("CSS" in window && "supports" in window.CSS) return window.CSS.supports("mix-blend-mode", "soft-light");
        } catch (t) {
            return !1;
        }
        return !1;
    }),
    (relax.caniuse.mp4 = function () {
        return "boolean" == typeof this._mp4Supported || (this._mp4Supported = !!document.createElement("video").canPlayType("video/mp4; codecs=avc1.42E01E,mp4a.40.2")), this._mp4Supported;
    }),
    (relax.caniuse.cssgradients = function () {
        if ("boolean" == typeof this.cssGradientSupported) return this.cssGradientSupported;
        var t = "background-image:",
            e = " -webkit- -moz- -o- -ms- ".split(" "),
            r = (t + "-webkit- ".split(" ").join("gradient(linear,left top,right bottom,from(#9f9),to(white));" + t) + e.join("linear-gradient(left top,#9f9, white);" + t)).slice(0, -t.length),
            o = document.createElement("div").style;
        return (o.cssText = r), (this.cssGradientSupported = -1 < ("" + o.backgroundImage).indexOf("gradient")), this.cssGradientSupported;
    }),
    (relax.caniuse.WebGL = function () {
        if ("boolean" == typeof this._webglSupported) return this._webglSupported;
        var t = document.createElement("canvas");
        return (this._webglSupported = !(!window.WebGLRenderingContext || (!t.getContext("webgl") && !t.getContext("experimental-webgl")))), this._webglSupported;
    }),
    (relax.caniuse.AudioContext = function () {
        return (window.AudioContext = window.AudioContext || window.webkitAudioContext), !!window.AudioContext;
    }),
    (relax.caniuse.FileReader = function () {
        return !!(window.FileReader && window.File && window.FileList && window.Blob);
    }),
    (relax.caniuse.flexbox = function () {
        var t = !1,
            e = "flex",
            r = "-webkit-" + e,
            o = document.createElement("b");
        try {
            (o.style.display = r), (o.style.display = e), (o.style.display == e || o.style.display == r) && (t = !0);
        } catch (o) {
            t = !1;
        }
        return t;
    }),
    (relax.caniuse.passiveEvents = function () {
        var t = !1;
        try {
            var e = Object.defineProperty({}, "passive", {
                get: function () {
                    t = !0;
                },
            });
            window.addEventListener("test", null, e);
        } catch (t) {}
        return t;
    }),
    (relax = relax || {}).color || (relax.color = {}),
    (relax.color.rgb2hex = function (t, e, r, o, n) {
        function i(t) {
            var e = t.toString(16);
            return 1 == e.length ? "0" + e : e;
        }
        return o || (o = 255), n ? (o << 24) | (t << 16) | (e << 8) | r : (o <= 1 && (o = Math.round(255 * o)), "#" + i(t) + i(e) + i(r));
    }),
    (relax.color.hex2rgb = function (t) {
        var e = {};
        return (e.red = (t >> 16) & 255), (e.green = (t >> 8) & 255), (e.blue = 255 & t), e;
    }),
    (relax.color.hex2css = function (t) {
        return "#" + t.toString(16);
    }),
    (relax.color.getBetweenColourByPercent = function (t, e, r) {
        var o = e >> 16,
            n = (e >> 8) & 255,
            i = 255 & e,
            a = ((o += ((r >> 16) - o) * t) << 16) | ((n += (((r >> 8) & 255) - n) * t) << 8) | (i += ((255 & r) - i) * t);
        return relax.color.hex2css(a);
    }),
    (relax.color.similar = function (t, e, r) {
        r || (r = 0.01);
        var o = relax.color.hex2rgb(t),
            n = relax.color.hex2rgb(e);
        r = (195075 * r) << 0;
        var i = 0;
        return (i += Math.pow(o.red - n.red, 2)), (i += Math.pow(o.green - n.green, 2)), (i += Math.pow(o.blue - n.blue, 2)) <= r;
    }),
    (relax.color.different = function (t, e, r) {
        r || (r = 0.01);
        for (var o = 0; o < e.length; o++) if (relax.color.similar(t, e[o], r)) return !1;
        return !0;
    }),
    (relax.color.uniqueColours = function (t, e, r) {
        r || (r = 0.01);
        for (var o = [], n = 0; n < t.length && o.length < e; n++) relax.color.different(t[n], o, r) && o.push(t[n]);
        return o;
    }),
    (relax.color.indexColours = function (t, e) {
        e || (e = !0);
        for (var r, o = t.getContext("2d").getImageData(0, 0, t.width, t.height).data, n = [], i = 0, a = o.length; i < a; i += 4) (r = relax.color.rgb2hex(o[i], o[i + 1], o[i + 2])), n.push({ colour: r, count: n.length });
        return e
            ? n.sort(function (t, e) {
                  return t.count > e.count ? 1 : t.count < e.count ? -1 : 0;
              })
            : n;
    }),
    (relax.color.averageColour = function (t) {
        for (var e = 0, r = 0, o = 0, n = 0, i = t.getContext("2d").getImageData(0, 0, t.width, t.height).data, a = 0, s = i.length; a < s; a += 4) (e += i[a]), (r += i[a + 1]), (o += i[a + 2]), n++;
        return (e = ~~(e / n)), (r = ~~(r / n)), (o = ~~(o / n)), relax.color.rgb2hex(e, r, o, 1, !1);
    }),
    (relax.color.averageColours = function (t, e) {
        for (var r, o, n, i = new Array(), a = Math.round(Math.sqrt(e)), s = t.getContext("2d"), l = 0, c = 0, u = 0, h = 0, d = Math.round(t.width / a), p = Math.round(t.height / a), g = 0; g < e; g++)
            (o = (r = document.createElement("canvas")).getContext("2d")), (n = s.getImageData(u, h, d, p)), o.putImageData(n, 10, 70), i.push(relax.color.averageColour(r)), (u = d * (c = g % a)), (h = p * l), c == a - 1 && l++;
        return i;
    }),
    (relax.color.shadeColor = function (t, e) {
        var r = parseInt(t.slice(1), 16),
            o = e < 0 ? 0 : 255,
            n = e < 0 ? -1 * e : e,
            i = r >> 16,
            a = (r >> 8) & 255,
            s = 255 & r;
        return "#" + (16777216 + 65536 * (Math.round((o - i) * n) + i) + 256 * (Math.round((o - a) * n) + a) + (Math.round((o - s) * n) + s)).toString(16).slice(1);
    }),
    (relax.color.blendColors = function (t, e, r) {
        var o = parseInt(t.slice(1), 16),
            n = parseInt(e.slice(1), 16),
            i = o >> 16,
            a = (o >> 8) & 255,
            s = 255 & o,
            l = n >> 16,
            c = (n >> 8) & 255,
            u = 255 & n;
        return "#" + (16777216 + 65536 * (Math.round((l - i) * r) + i) + 256 * (Math.round((c - a) * r) + a) + (Math.round((u - s) * r) + s)).toString(16).slice(1);
    }),
    (relax = relax || {}).displayObject || (relax.displayObject = {}),
    (relax.displayObject.statsWrapper = {
        stats: null,
        init: function () {
            (this.stats = new Stats()),
                (this.stats.getDomElement().style.position = "fixed"),
                (this.stats.getDomElement().style.left = "0px"),
                (this.stats.getDomElement().style.top = "0px"),
                document.body.appendChild(this.stats.getDomElement()),
                RenderQue.add(this);
        },
        renderQueCall: function () {
            this.stats.update();
        },
    }),
    (relax.displayObject.Image = Class.extend({
        _callbacks: null,
        progress: 0,
        _convertToBase64: !1,
        _allowProgress: !1,
        src: null,
        data: null,
        loading: !1,
        loaded: !1,
        naturalWidth: 0,
        naturalHeight: 0,
        init: function (t) {
            t && t.src && (this.src = t.src), t && !0 === t.convertToBase64 && (this._convertToBase64 = !0), t && !0 === t.progress && (this._allowProgress = !0);
        },
        load: function (t, e, r) {
            (this.progress = 0), (this.loading = !0), "string" == typeof t ? ((this.src = t), (this._allowProgress = !0 !== r)) : ((e = t.callback), t.src && (this.src = t.src)), this.addCallback(e);
            var o = 0 < relax.browser.getInternetExplorerVersion() && relax.browser.getInternetExplorerVersion() < 10;
            !this._allowProgress || o
                ? ((this.data = new Image()), (this.data.onload = relax.dom.bind(this, this.onImageLoaded)), (this.data.src = this.src))
                : ((this.request = new XMLHttpRequest()),
                  (this.request.onprogress = relax.dom.bind(this, this.onLoadProgress)),
                  (this.request.onload = relax.dom.bind(this, this.onRequestLoaded)),
                  this.request.open("GET", this.src, !0),
                  this.request.overrideMimeType("text/plain; charset=x-user-defined"),
                  this.request.send(null));
        },
        addCallback: function (t) {
            this._callbacks || (this._callbacks = []), -1 == this._callbacks.indexOf(t) && this._callbacks.push(t);
        },
        onRequestLoaded: function () {
            -(this.progress = 1) === this.src.indexOf(".gif") && this._convertToBase64 && this._allowProgress
                ? ((this.data = new Image()), (this.data.onload = relax.dom.bind(this, this.onImageLoaded)), (this.data.src = "data:image/jpeg;base64," + this.base64Encode(this.request.responseText)))
                : this.data
                ? this.onImageLoaded()
                : ((this.data = new Image()), (this.data.onload = relax.dom.bind(this, this.onImageLoaded)), (this.data.src = this.src));
        },
        onLoadProgress: function (t) {
            t.lengthComputable && !this.loaded && (this.progress = t.loaded / t.total);
        },
        stop: function () {
            (this.loading = !1), this.data && !this.loaded && (this.data.src = ""), this.request && ((this.request.onprogress = null), (this.request.onload = null), this.request.abort());
        },
        getProgress: function () {
            return this._progress;
        },
        dealoc: function () {
            this.stop(), this.data && ((this.data.onload = void 0), (this.data = null)), (this._callbacks = null), (this.request = null);
        },
        onImageLoaded: function () {
            (this.loading = !1), (this.progress = 1), (this.naturalWidth = this.data.naturalWidth), (this.naturalHeight = this.data.naturalHeight), (this.loaded = !0);
            for (var t = 0; t < this._callbacks.length; t++) this._callbacks[t](this);
        },
        base64Encode: function (t) {
            for (var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", r = "", o = 0; o < t.length; ) {
                var n,
                    i,
                    a = 255 & t.charCodeAt(o++),
                    s = 255 & t.charCodeAt(o++),
                    l = 255 & t.charCodeAt(o++),
                    c = a >> 2,
                    u = ((3 & a) << 4) | (s >> 4);
                isNaN(s) ? (n = i = 64) : ((n = ((15 & s) << 2) | (l >> 6)), (i = isNaN(l) ? 64 : 63 & l)), (r += e.charAt(c) + e.charAt(u) + e.charAt(n) + e.charAt(i));
            }
            return r;
        },
    })),
    (relax = relax || {}).layout || (relax.layout = {}),
    (relax.layout.DeviceOrientChange = function (t) {
        var e = 90 === Math.abs(window.orientation) ? "landscape" : "portrait";
        t(e, window.orientation),
            (window.onorientationchange = function () {
                (e = 90 === Math.abs(window.orientation) ? "landscape" : "portrait"), t(e, window.orientation);
            });
    }),
    (relax.layout.scaleToRect = function (t, e) {
        (e.style.width = t.w + "px"), (e.style.height = t.h + "px"), (e.style.marginLeft = t.x + "px"), (e.style.marginTop = t.y + "px");
    }),
    (relax.layout.getScaleRect = function (t, e, r, o, n, i) {
        var a = r,
            s = (a / t) * e;
        ((s < o && !i) || "width" === i || "only-width" === i) && (a = ((s = o) / e) * t);
        var l = 0.5 * r - 0.5 * a,
            c = 0.5 * o - 0.5 * s;
        return (
            n ||
                (n = function (t) {
                    return t;
                }),
            { w: n(a), h: n(s), x: n(l), y: n(c), overflowx: n(l), overflowy: n(c) }
        );
    }),
    (relax = relax || {}).math || (relax.math = {}),
    (relax.math.norm = function (t, e, r) {
        return (t - e) / (r - e);
    }),
    (relax.math.lerp = function (t, e, r) {
        return (r - e) * t + e;
    }),
    (relax.math.map = function (t, e, r, o, n) {
        return relax.math.lerp(relax.math.norm(t, e, r), o, n);
    }),
    (relax.math.clamp = function (t, e, r) {
        return Math.min(Math.max(t, e), r);
    }),
    (relax.math.convertToRange = function (t, e, r) {
        if (t < e[0]) return r[0];
        if (t > e[1]) return r[1];
        var o = e[1] - e[0],
            n = r[1] - r[0];
        return ((t - e[0]) * n) / o + r[0];
    }),
    (relax = relax || {}).draw || (relax.draw = {}),
    (relax.draw.imageIntoCanvas = function (t, e) {
        var r, o, n;
        if ((null == e && (e = !0), !t || void 0 === t.ctx || void 0 === t.image || void 0 === t.imageWidth || void 0 === t.imageHeight || void 0 === t.viewportWidth || void 0 === t.viewportHeight))
            throw new Error("imageIntoCanvas Error: all options are mandatory.");
        if (
            (void 0 === t.offsetX && (t.offsetX = 0),
            void 0 === t.offsetY && (t.offsetY = 0),
            (r = t.viewportWidth / t.imageWidth),
            t.imageHeight * r < t.viewportHeight && (r = t.viewportHeight / t.imageHeight),
            (o = 0.5 * t.viewportWidth - t.imageWidth * r * 0.5),
            (n = 0.5 * t.viewportHeight - t.imageHeight * r * 0.5),
            (o += t.offsetX),
            (n += t.offsetY),
            e && t.ctx.save(),
            t.ctx.translate(Math.round(o), Math.round(n)),
            t.ctx.scale(r, r),
            t.ctx.drawImage(t.image, 0, 0),
            e)
        )
            return t.ctx.restore();
    }),
    ((relax = relax || {}).string = relax.string || {}),
    (relax.string.wrapWords = function (t, e, r) {
        for (var o, n = /([^<]*)(<(?:\"[^\"]*\"|'[^']*'|[^>'\"]*)*>)([^<]*)/g, i = [], a = 0; (o = n.exec(t)); ) {
            for (var s = o[1].split(/\s+/), l = s.length, c = o[3].split(/\s+/), u = c.length, h = 0; h < l; h++) 0 < s[h].length && (i[a++] = e + s[h] + r);
            for (i[a++] = o[2], h = 0; h < u; h++) 0 < c[h].length && (i[a++] = e + c[h] + r);
        }
        return i.join(" ");
    }),
    (relax.string.getHumanReadableSize = function (t) {
        var e = Math.floor(Math.log(t) / Math.log(1024)),
            r = ["b", "kb", "mb", "gb", "tb"];
        return (e = Math.min(r.length - 1, e)), 1 * Number((t / Math.pow(1024, e)).toFixed(2)) + " " + r[e];
    }),
    (relax = relax || {}).numbers || (relax.numbers = {}),
    (relax.numbers.splitInThousands = function (t, e) {
        return null == e && (e = ","), t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, e);
    }),
    (relax = relax || {}).tools || (relax.tools = {}),
    (relax.tools.shuffle = function (t) {
        for (var e, r, o = t.length; 0 !== o; ) (r = Math.floor(Math.random() * o)), (e = t[(o -= 1)]), (t[o] = t[r]), (t[r] = e);
        return t;
    }),
    (relax.tools.cookie = {
        get: function (t) {
            var e,
                r,
                o,
                n = document.cookie.split(";");
            for (e = 0; e < n.length; e++) if (((r = n[e].substr(0, n[e].indexOf("="))), (o = n[e].substr(n[e].indexOf("=") + 1)), (r = r.replace(/^\s+|\s+$/g, "")) == t)) return unescape(o);
        },
        set: function (t, e, r) {
            var o = new Date();
            o.setDate(o.getDate() + r);
            var n = escape(e) + (null === r ? "" : "; expires=" + o.toUTCString());
            document.cookie = t + "=" + n;
        },
        clear: function (t) {
            document.cookie = t + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
        },
        check: function (t) {
            var e = this.get(t);
            return !(!e || "" === e || null == e || "undefined" === e);
        },
    }),
    (relax.tools.throttle = function (e, r, o) {
        var n = null;
        return (
            o || (o = this),
            function () {
                var t = arguments;
                clearTimeout(n),
                    (n = setTimeout(function () {
                        o && e.apply(o, t);
                    }, r));
            }
        );
    }),
    (relax.tools.validateEmail = function (t) {
        return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t);
    }),
    (relax.tools.validatePassword = function (t) {
        return /^[A-Za-z0-9!@#$%^&*()_]{1,50}$/.test(t);
    }),
    (relax.tools.stripHTMLFromString = function (t) {
        var e = document.createElement("DIV");
        return (e.innerHTML = t), e.textContent || e.innerText;
    }),
    (relax.tools.popupwindow = function (t, e, r, o) {
        var n = screen.width / 2 - r / 2,
            i = screen.height / 2 - o / 2;
        return window.open(t, e, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + r + ", height=" + o + ", top=" + i + ", left=" + n);
    }),
    (relax.tools.DragAndSwipe = Class.extend({
        _el: null,
        _touchEventsAdded: !1,
        _pinchCallback: null,
        _swipeCallback: null,
        _dragCallback: null,
        _swipeThreshold: 100,
        _forceDirection: "xy",
        _startY: 0,
        _dragY: 0,
        _dragYTarget: 0,
        _startX: 0,
        _dragX: 0,
        _dragXTarget: 0,
        _mouseObj: null,
        startDragY: 0,
        startDragX: 0,
        _iid: null,
        _maxMinBoundries: null,
        _preventMoveDefault: !0,
        init: function (t, e) {
            null == relax.tools.DragAndSwipe.iid && (relax.tools.DragAndSwipe.iid = 0),
                relax.tools.DragAndSwipe.iid++,
                (this._iid = "relax" + relax.tools.DragAndSwipe.iid),
                e && this.setPreventModeDefault(e.preventMoveDefault),
                (this._el = t);
        },
        setPreventModeDefault: function (t) {
            this._preventMoveDefault = Boolean(t);
        },
        setBoundries: function (t) {
            this._maxMinBoundries = t;
        },
        _onTouchStart: function (t) {
            (this._mouseObj = relax.geom.getXYFromMouseTouchEvent(t)), (this._startY = this._mouseObj.y), (this._startX = this._mouseObj.x), (this.startDragY = this._dragYTarget), (this.startDragX = this._dragXTarget), this._onDragging();
        },
        _onTouchEnd: function () {
            if (((this._dragY = this._dragYTarget), (this._dragX = this._dragXTarget), this._swipeCallback && this._mouseObj)) {
                var t = this._mouseObj.x > this._startX ? "left" : "right",
                    e = this._mouseObj.y > this._startY ? "up" : "down",
                    r = Math.abs(this._mouseObj.x - this._startX) > this._swipeThreshold,
                    o = Math.abs(this._mouseObj.y - this._startY) > this._swipeThreshold,
                    n = !1;
                "xy" === this._forceDirection ? (r || o) && (n = !0) : "x" === this._forceDirection && r ? (n = !0) : "y" === this._forceDirection && o && (n = !0), n && this._swipeCallback({ xDirection: t, yDirection: e });
            }
            this._onDragging();
        },
        _onTouchMove: function (t) {
            this._preventMoveDefault && t.preventDefault(), (this._mouseObj = relax.geom.getXYFromMouseTouchEvent(t));
            var e = this._mouseObj.y - this._startY,
                r = this._mouseObj.x - this._startX,
                o = this._dragX + r,
                n = this._dragY + e,
                i = o < this._dragXTarget ? "left" : "right",
                a = n < this._dragYTarget ? "up" : "down";
            (this._dragXTarget = o), (this._dragYTarget = n), this._onDragging(i, a);
        },
        _onDragging: function (t, e) {
            this._maxMinBoundries &&
                (this._maxMinBoundries.minSwipeX && ((this._dragXTarget = Math.max(this._maxMinBoundries.minSwipeX, this._dragXTarget)), (this._dragX = Math.max(this._maxMinBoundries.minSwipeX, this._dragX))),
                this._maxMinBoundries.minSwipeY && ((this._dragYTarget = Math.max(this._maxMinBoundries.minSwipeY, this._dragYTarget)), (this._dragY = Math.max(this._maxMinBoundries.minSwipeY, this._dragY))),
                this._maxMinBoundries.maxSwipeX && ((this._dragXTarget = Math.min(this._maxMinBoundries.maxSwipeX, this._dragXTarget)), (this._dragX = Math.min(this._maxMinBoundries.maxSwipeX, this._dragX))),
                this._maxMinBoundries.maxSwipeY && ((this._dragYTarget = Math.min(this._maxMinBoundries.maxSwipeY, this._dragYTarget)), (this._dragY = Math.min(this._maxMinBoundries.maxSwipeY, this._dragY)))),
                this._dragCallback && this._dragCallback({ xDirection: t, yDirection: e, x: this._dragXTarget, y: this._dragYTarget });
        },
        addEvents: function () {
            this._touchEventsAdded ||
                ((this._touchEventsAdded = !0),
                $(this._el).bind("touchstart." + this._iid, relax.dom.bind(this, this._onTouchStart)),
                $(this._el).bind("touchmove." + this._iid, relax.dom.bind(this, this._onTouchMove)),
                $(this._el).bind("touchend." + this._iid, relax.dom.bind(this, this._onTouchEnd)));
        },
        removeEvents: function () {
            (this._touchEventsAdded = !1), $(this._el).unbind("touchstart." + this._iid + " touchmove." + this._iid + " touchend." + this._iid);
        },
        addSwipe: function (t, e, r) {
            r && (this._forceDirection = r), e && (this._swipeThreshold = e), (this._swipeCallback = t), this.addEvents();
        },
        addDrag: function (t) {
            (this._dragCallback = t), this.addEvents();
        },
        dealoc: function () {
            (this._binded = !1), this.removeEvents(), (this._el = null), (this._callback = null);
        },
    })),
    (relax.tools.PinchGestureWrapper = Class.extend({
        _el: null,
        _callback: null,
        _startScale: 0,
        _currentScale: 0,
        init: function (t, e) {
            (this._el = t),
                (this._callback = e),
                (this._startScale = 0),
                (this._currentScale = 0),
                (this._onGestureStart = function (t) {
                    t.preventDefault(), (this._startScale = t.originalEvent.scale);
                }),
                (this._onGestureEnd = function (t) {
                    t.preventDefault(), this._callback(this._startScale > this._currentScale);
                }),
                (this._onGestureChange = function (t) {
                    t.preventDefault(), (this._currentScale = t.originalEvent.scale), this._callback(this._currentScale);
                }),
                $(this._el).bind("gesturestart.pinch", relax.dom.bind(this, this._onGestureStart)),
                $(this._el).bind("gesturechange.pinch", relax.dom.bind(this, this._onGestureChange)),
                $(this._el).bind("gestureend.pinch", relax.dom.bind(this, this._onGestureEnd));
        },
        dealoc: function () {
            $(this._el).unbind("gesturestart.pinch gesturechange.pinch gestureend.pinch"), (this._el = null), (this._callback = null);
        },
    })),
    (relax.tools.renderQue = {
        items: [],
        running: !1,
        rAF: null,
        render: function () {
            if (!this.items || 0 === this.items.length || !this.running) return (this.running = !1), void cancelAnimationFrame(this.rAF);
            for (var t = 0; t < this.items.length; t++) this.items[t].renderQueCall();
            if (this.running) {
                var e = this;
                this.rAF = window.requestAnimationFrame(function () {
                    e.render();
                });
            }
        },
        has: function (t) {
            return -1 != this.items.indexOf(t);
        },
        add: function (t) {
            if (t && this.items) {
                if (void 0 === t.renderQueCall) throw new Error("RenderQue requires objects to have a renderQueCall method for callback.");
                -1 === this.items.indexOf(t) && this.items.push(t);
            }
            if (!this.running) {
                this.running = !0;
                var e = this;
                this.rAF = window.requestAnimationFrame(function () {
                    e.render();
                });
            }
        },
        remove: function (t) {
            this.items && t && -1 !== this.items.indexOf(t) && this.items.splice(this.items.indexOf(t), 1), 0 === this.items.length && (this.running = !1);
        },
    }),
    (relax.tools.clone = function (t) {
        if (!t || "object" != typeof t || "[object Function]" === Object.prototype.toString.call(t)) return t;
        if (t.nodeType && "cloneNode" in t) return t.cloneNode(!0);
        if (t instanceof Date) return new Date(t.getTime());
        if (t instanceof RegExp) return new RegExp(t);
        var e, r, o;
        if (t instanceof Array) for (e = [], r = 0, o = t.length; r < o; ++r) r in t && e.push(clone(t[r]));
        else e = t.constructor ? new t.constructor() : {};
        return (function (t, e, r) {
            var o,
                n,
                i = {};
            for (o in e) (n = e[o]), (o in t && (t[o] === n || (o in i && i[o] === n))) || (t[o] = r ? r(n) : n);
            return t;
        })(e, t, clone);
    }),
    (relax = relax || {}).screen || (relax.screen = {}),
    (relax.screen.isRetina = function () {
        return 1 < window.devicePixelRatio;
    }),
    (relax = relax || {}).animation || (relax.animation = {}),
    (relax.animation.getTransitionEndEvent = function () {
        if (this.endValue) return this.endValue;
        var t,
            e = document.createElement("fakeelement"),
            r = { transition: "transitionend", OTransition: "oTransitionEnd", MozTransition: "transitionend", WebkitTransition: "webkitTransitionEnd" };
        for (t in r) void 0 !== e.style[t] && (this.endValue = r[t]);
        return this.endValue;
    }),
    (relax.transitionEndString = relax.animation.getTransitionEndEvent()),
    (relax.EventDispatcher = EventDispatcher = (function () {
        function t() {
            (this.eventChannel = {}), _.extend(this.eventChannel, Backbone.Events);
        }
        return (
            (t.prototype.eventChannel = null),
            (t.prototype.trigger = function (t, e) {
                return null == e && (e = null), null !== e ? this.eventChannel.trigger(t, e) : this.eventChannel.trigger(t);
            }),
            (t.prototype.bind = function (t, e, r, o) {
                if ((null == o && (o = !1), !t || !e || !r)) throw new Error("All parameters are mandatory");
                if ((this.eventChannel.on(t, e, r), o))
                    return setTimeout(
                        ((n = this),
                        function () {
                            return e.apply(r, [n]);
                        }),
                        0
                    );
                var n;
            }),
            (t.prototype.unbindAll = function (t) {
                if (!t) throw new Error("All parameters are mandatory");
                return this.eventChannel.off(null, null, t);
            }),
            (t.prototype.unbind = function (t, e, r) {
                if (!t || !e || !r) throw new Error("All parameters are mandatory");
                return this.eventChannel.off(t, e, r);
            }),
            (t.prototype.dealoc = function () {
                return this.eventChannel.unbind(), (this.eventChannel = null);
            }),
            t
        );
    })()),
    ((relax = relax || {}).Vector2d = function (t, e) {
        (this.x = t || 0), (this.y = e || 0);
    }),
    (relax.Vector2d.prototype = {
        reset: function (t, e) {
            return (this.x = t), (this.y = e), this;
        },
        toString: function (t) {
            t = t || 3;
            var e = Math.pow(10, t);
            return "[" + Math.round(this.x * e) / e + ", " + Math.round(this.y * e) / e + "]";
        },
        clone: function () {
            return new relax.Vector2d(this.x, this.y);
        },
        copyTo: function (t) {
            (t.x = this.x), (t.y = this.y);
        },
        copyFrom: function (t) {
            (this.x = t.x), (this.y = t.y);
        },
        magnitude: function () {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        },
        magnitudeSquared: function () {
            return this.x * this.x + this.y * this.y;
        },
        normalise: function () {
            var t = this.magnitude();
            return (this.x = this.x / t), (this.y = this.y / t), this;
        },
        reverse: function () {
            return (this.x = -this.x), (this.y = -this.y), this;
        },
        plusEq: function (t) {
            return (this.x += t.x), (this.y += t.y), this;
        },
        plusNew: function (t) {
            return new relax.Vector2d(this.x + t.x, this.y + t.y);
        },
        minusEq: function (t) {
            return (this.x -= t.x), (this.y -= t.y), this;
        },
        minusNew: function (t) {
            return new relax.Vector2d(this.x - t.x, this.y - t.y);
        },
        multiplyEq: function (t) {
            return (this.x *= t), (this.y *= t), this;
        },
        multiplyNew: function (t) {
            return this.clone().multiplyEq(t);
        },
        divideEq: function (t) {
            return (this.x /= t), (this.y /= t), this;
        },
        divideNew: function (t) {
            return this.clone().divideEq(t);
        },
        dot: function (t) {
            return this.x * t.x + this.y * t.y;
        },
        angle: function (t) {
            return Math.atan2(this.y, this.x) * (t ? 1 : relax.Vector2dConst.TO_DEGREES);
        },
        rotate: function (t, e) {
            var r = Math.cos(t * (e ? 1 : relax.Vector2dConst.TO_RADIANS)),
                o = Math.sin(t * (e ? 1 : relax.Vector2dConst.TO_RADIANS));
            return relax.Vector2dConst.temp.copyFrom(this), (this.x = relax.Vector2dConst.temp.x * r - relax.Vector2dConst.temp.y * o), (this.y = relax.Vector2dConst.temp.x * o + relax.Vector2dConst.temp.y * r), this;
        },
        equals: function (t) {
            return this.x == t.x && this.y == t.x;
        },
        isCloseTo: function (t, e) {
            return !!this.equals(t) || (relax.Vector2dConst.temp.copyFrom(this), relax.Vector2dConst.temp.minusEq(t), relax.Vector2dConst.temp.magnitudeSquared() < e * e);
        },
        rotateAroundPoint: function (t, e, r) {
            relax.Vector2dConst.temp.copyFrom(this), relax.Vector2dConst.temp.minusEq(t), relax.Vector2dConst.temp.rotate(e, r), relax.Vector2dConst.temp.plusEq(t), this.copyFrom(relax.Vector2dConst.temp);
        },
        isMagLessThan: function (t) {
            return this.magnitudeSquared() < t * t;
        },
        isMagGreaterThan: function (t) {
            return this.magnitudeSquared() > t * t;
        },
    }),
    (relax.Vector2dConst = { TO_DEGREES: 180 / Math.PI, TO_RADIANS: Math.PI / 180, temp: new relax.Vector2d() });
var BasicRelaxService,
    UserLocation,
    SocialFeed,
    GATracking,
    SocialSharer,
    ImageLoader,
    StageModel,
    extend = function (t, e) {
        for (var r in e) hasProp.call(e, r) && (t[r] = e[r]);
        function o() {
            this.constructor = t;
        }
        return (o.prototype = e.prototype), (t.prototype = new o()), (t.__super__ = e.prototype), t;
    },
    hasProp = {}.hasOwnProperty;
try {
    relax.BasicRelaxService = BasicRelaxService = (function (t) {
        function e() {
            return e.__super__.constructor.apply(this, arguments);
        }
        return (
            extend(e, t),
            (e.prototype.initialize = function (t) {
                return (this.url = "//services.rwatgg.com/" + t.client + "/" + t.service + "/");
            }),
            (e.prototype.fetch = function (t) {
                return null == t && (t = new Object()), t.success || ((t.success = relax.dom.bind(this, this.onSuccess)), (t.error = relax.dom.bind(this, this.onError))), e.__super__.fetch.call(this, t);
            }),
            (e.prototype.onSuccess = function (t, e) {
                if (console) return console.log("%c RWATGG > UserLocation Success", "background: green; color: white;");
            }),
            (e.prototype.onError = function (t, e) {
                try {
                    rwatgs.error.bot.report("BasicRelaxService error:", e.status);
                } catch (t) {}
                if ((console && console.log("%c RWATGG > UserLocation Error: status:", "background: red; color: white;", e.status), console))
                    return console.log("%c RWATGG > UserLocation Error: statusText:", "background: red; color: white;", e.statusText);
            }),
            e
        );
    })(Backbone.Model);
} catch (t) {}
(extend = function (t, e) {
    for (var r in e) hasProp.call(e, r) && (t[r] = e[r]);
    function o() {
        this.constructor = t;
    }
    return (o.prototype = e.prototype), (t.prototype = new o()), (t.__super__ = e.prototype), t;
}),
    (hasProp = {}.hasOwnProperty);
try {
    relax.UserLocation = UserLocation = (function (t) {
        function n() {
            return n.__super__.constructor.apply(this, arguments);
        }
        return (
            extend(n, t),
            (n.prototype.initialize = function (t) {
                return (this.url = "//services.rwatgg.com/" + t.client + "/location/");
            }),
            (n.prototype.fetch = function (t) {
                var e, r, o;
                if (
                    (null == t && (t = new Object()),
                    (e = !0),
                    relax.caniuse.localstorage() &&
                        sessionStorage.getItem("rwatgg_location") &&
                        0 < (o = (r = JSON.parse(sessionStorage.getItem("rwatgg_location"))).timestamp - new Date().getTime()) &&
                        1 < new Date(o).getHours() &&
                        ((e = !1), this.set(r)),
                    e)
                )
                    return t.success || ((t.success = relax.dom.bind(this, this.onSuccess)), (t.error = relax.dom.bind(this, this.onError))), n.__super__.fetch.call(this, t);
            }),
            (n.prototype.onSuccess = function (t, e) {
                if ((relax.caniuse.localstorage() && (this.set("timestamp", new Date().getTime(), { silent: !0 }), sessionStorage.setItem("rwatgg_location", JSON.stringify(this.toJSON()))), console))
                    return console.log("%c RWATGG > UserLocation Success", "background: green; color: white;");
            }),
            (n.prototype.onError = function (t, e) {
                try {
                    rwatgs.error.bot.report("services error:", e.status);
                } catch (t) {}
                if ((console && console.log("%c RWATGG > UserLocation Error: status:", "background: red; color: white;", e.status), console))
                    return console.log("%c RWATGG > UserLocation Error: statusText:", "background: red; color: white;", e.statusText);
            }),
            n
        );
    })(Backbone.Model);
} catch (t) {}
(extend = function (t, e) {
    for (var r in e) hasProp.call(e, r) && (t[r] = e[r]);
    function o() {
        this.constructor = t;
    }
    return (o.prototype = e.prototype), (t.prototype = new o()), (t.__super__ = e.prototype), t;
}),
    (hasProp = {}.hasOwnProperty);
try {
    relax.SocialFeed = SocialFeed = (function (t) {
        function e() {
            return e.__super__.constructor.apply(this, arguments);
        }
        return (
            extend(e, t),
            (e.prototype.initialize = function (t) {
                var e;
                if (!t.client) throw new Error("client needs to be defined.");
                if (!t.feed) throw new Error("feed needs to be defined.");
                return (e = t.useProxy ? "/handlers/proxy.ashx?url=" : "//"), (this.url = e + "services.rwatgg.com/" + t.client + "/" + t.feed + "/");
            }),
            (e.prototype.fetch = function (t) {
                return null == t && (t = new Object()), t.success || ((t.success = relax.dom.bind(this, this.onSuccess)), (t.error = relax.dom.bind(this, this.onError))), e.__super__.fetch.call(this, t);
            }),
            (e.prototype.parse = function (t) {
                return { data: t };
            }),
            (e.prototype.onSuccess = function (t, e) {
                if (console) return console.log("%c RWATGG > " + this.get("feed") + " Success", "background: green; color: white;");
            }),
            (e.prototype.onError = function (t, e) {
                try {
                    rwatgs.error.bot.report("services error:", this.url);
                } catch (t) {}
                if ((console && console.log("%c RWATGG > " + this.get("feed") + " Error: status:", "background: red; color: white;", e.status), console))
                    return console.log("%c RWATGG > " + this.get("feed") + " Error: statusText:", "background: red; color: white;", e.statusText);
            }),
            e
        );
    })(Backbone.Model);
} catch (t) {}
(extend = function (t, e) {
    for (var r in e) hasProp.call(e, r) && (t[r] = e[r]);
    function o() {
        this.constructor = t;
    }
    return (o.prototype = e.prototype), (t.prototype = new o()), (t.__super__ = e.prototype), t;
}),
    (hasProp = {}.hasOwnProperty),
    (relax.Counter = (function (t) {
        function e(t) {
            e.__super__.constructor.call(this),
                t.startStep && (this._currentStep = !isNaN(t.startStep)),
                t.direction && (this._direction = t.direction),
                t.maxSteps && (this._maxSteps = t.maxSteps),
                !1 === t.runThrough && (this._runThrough = t.runThrough),
                (this._time = isNaN(t.time) ? relax.Counter.DEFAULT_TIME : t.time),
                (this._currentStep = this._step = isNaN(t.step) ? relax.Counter.DEFAULT_STEP : t.step),
                t.doLoop && (this._loop = !0),
                !0 === t.stopOnEnd && (this._stopOnEnd = !0),
                t.autoStart && this.resume();
        }
        return (
            extend(e, t),
            (e.ON_STEP_EVENT = "counter-step"),
            (e.ON_STEP_STOP_EVENT = "counter-stop"),
            (e.ON_STEP_START_EVENT = "counter-start"),
            (e.DEFAULT_TIME = 4e3),
            (e.DEFAULT_STEP = 1),
            (e.prototype._time = 0),
            (e.prototype._step = 0),
            (e.prototype._loop = !1),
            (e.prototype._timeout = 0),
            (e.prototype._stopOnEnd = !1),
            (e.prototype._maxSteps = -1),
            (e.prototype._isRunning = !1),
            (e.prototype._runThrough = !0),
            (e.prototype._direction = 1),
            (e.prototype._currentStep = 0),
            (e.prototype.resume = function () {
                return this.trigger(relax.Counter.ON_STEP_START_EVENT, this), this.start();
            }),
            (e.prototype.start = function () {
                return (
                    (this._isRunning = !0),
                    clearTimeout(this._timeout),
                    (this._timeout = setTimeout(
                        ((t = this),
                        function () {
                            return t.onStep();
                        }),
                        this._time
                    ))
                );
                var t;
            }),
            (e.prototype.pause = function () {
                return (this._isRunning = !1), clearTimeout(this._timeout), this.trigger(relax.Counter.ON_STEP_STOP_EVENT, this);
            }),
            (e.prototype.isRunning = function () {
                return this._isRunning;
            }),
            (e.prototype.setStep = function (t) {
                return (this._currentStep = t), this.validateStep();
            }),
            (e.prototype.getCurrentStep = function () {
                return this._currentStep;
            }),
            (e.prototype.next = function () {
                return this.setStep(this._currentStep + 1);
            }),
            (e.prototype.prev = function () {
                return this.setStep(this._currentStep - 1);
            }),
            (e.prototype.changeDirecion = function (t) {
                return null == t && (t = null), null !== t ? (this._direction = t) : (this._direction *= -1);
            }),
            (e.prototype.resetTimer = function () {
                return this.start();
            }),
            (e.prototype.dealoc = function () {
                return (this._isRunning = !1), clearTimeout(this._timeout), e.__super__.dealoc.call(this);
            }),
            (e.prototype.getStep = function () {
                return this._currentStep;
            }),
            (e.prototype.onStep = function () {
                return (this._currentStep += this._step * this._direction), this.validateStep();
            }),
            (e.prototype.validateStep = function () {
                var t;
                if (
                    ((t = !this._isRunning),
                    this._stopOnEnd && this._currentStep >= this._maxSteps - 1
                        ? ((t = !0), (this._currentStep = this._maxSteps - 1))
                        : this._loop && -1 !== this._maxSteps
                        ? (this._currentStep %= this._maxSteps)
                        : !this._loop && -1 !== this._maxSteps && (this._currentStep <= 0 || this._currentStep >= this._maxSteps - 1) && (this._direction *= -1),
                    this._runThrough || (t = !0),
                    this._currentStep < 0
                        ? this._loop
                            ? (this._currentStep = this._maxSteps + this._currentStep)
                            : (this._currentStep = 0)
                        : this._currentStep > this._maxSteps - 1 && -1 !== this._maxSteps && (this._currentStep = this._maxSteps),
                    this.trigger(relax.Counter.ON_STEP_EVENT, this),
                    !t && this._isRunning)
                )
                    return this.start();
            }),
            e
        );
    })(relax.EventDispatcher)),
    (relax.GATracking = GATracking = (function () {
        function t() {}
        return (
            (t.prototype.page = function (t) {
                log("tracking page:", t);
                try {
                    return "undefined" != typeof _gaq ? _gaq.push(["_trackPageview", t]) : ga("send", "pageview", t);
                } catch (t) {
                    return log("tracking error:", t);
                }
            }),
            (t.prototype.event = function (t, e, r, o) {
                log("tracking event:", t, e, r, o);
                try {
                    return r && o
                        ? "undefined" != typeof _gaq
                            ? _gaq.push(["_trackEvent", t, e, r, o])
                            : ga("send", "event", t, e, r, o)
                        : r
                        ? "undefined" != typeof _gaq
                            ? _gaq.push(["_trackEvent", t, e, r])
                            : ga("send", "event", t, e, r)
                        : "undefined" != typeof _gaq
                        ? _gaq.push(["_trackEvent", t, e])
                        : ga("send", "event", t, e);
                } catch (t) {
                    return log("tracking error:", t);
                }
            }),
            t
        );
    })()),
    (relax.SocialSharer = SocialSharer = (function () {
        function t() {}
        return (
            (t.prototype._facebookIsInitialized = !1),
            (t.prototype.loadFacebook = function (t) {
                var e, r, o, n;
                if (!t.appId) throw new Error("Add facebook app id");
                return (
                    (n = this),
                    (e = function () {
                        return (n._facebookIsInitialized = !0), FB.init({ appId: t.appId, status: !0, cookie: !0, xfbml: !0, version: "v2.1" });
                    }),
                    window.FB
                        ? e()
                        : ((o = void 0),
                          (r = "facebook-jssdk"),
                          document.getElementsByTagName("script")[0],
                          document.getElementById(r) ? void 0 : (((o = document.createElement("script")).id = r), (o.async = !0), (o.src = "//connect.facebook.net/en_US/sdk.js"), $("body").append(o), (window.fbAsyncInit = e)))
                );
            }),
            (t.prototype.shareFacebook = function (e) {
                var t, r, o, n, i, a;
                (o = e.name), (r = e.description), (t = e.caption || ""), (n = e.picture || ""), (i = e.url || "http://" + window.location.host);
                try {
                    return (
                        (a = { method: "stream.publish", name: o, link: i, caption: t, description: r, picture: n }),
                        FB.ui(a, function (t) {
                            if (t && t.post_id) {
                                if ((e.callback && e.callback(t), console && console.log)) return console.log("Post was published.");
                            } else if ((e.callback && e.callback(t), console && console.log)) return console.log("Post was NOT published.");
                        })
                    );
                } catch (t) {
                    return this.shareFacebookBasic(e);
                }
            }),
            (t.prototype.shareFacebookBasic = function (t) {
                return window.open("http://www.facebook.com/sharer.php?u=" + t.url);
            }),
            (t.prototype.shareEmail = function (t) {
                return (document.location.href = "mailto:?subject=" + t.subject + "&body=" + t.body);
            }),
            (t.prototype.shareTwitter = function (t) {
                var e, r, o, n, i, a, s, l, c;
                return (
                    (r = encodeURIComponent(t.text)),
                    (o = t.width || 700),
                    (e = t.height || 400),
                    (n = "https://twitter.com/intent/tweet?url=" + (encodeURIComponent(t.url) || encodeURIComponent("http://" + window.location.host)) + "&text=" + r),
                    (l = o),
                    (c = e),
                    (a = screen.availWidth / 2 - l),
                    (s = screen.availHeight / 2 - c),
                    (i = "width={width},height={height},toolbar=0,menubar=0,location=0,status=0,scrollbars=0,resizable=0,left={left},top={top}".replace("{width}", l).replace("{height}", c).replace("{left}", a).replace("{top}", s)),
                    window.open(n, "twitterShareWindow", i),
                    !0
                );
            }),
            (t.prototype.googlePlus = function (t) {
                var e;
                return (e = "https://plus.google.com/share?url=" + (encodeURIComponent(t.url) || encodeURIComponent("http://" + window.location.host))), window.open(e, "googlePlusShareWindow");
            }),
            (t.prototype.sharePinterest = function (t) {
                var e, r, o;
                if (void 0 === t.image || "" === t.image) throw new Error("Pinterest: image param is missing");
                return (
                    (r = encodeURIComponent(t.url) || encodeURIComponent("http://" + window.location.host)),
                    (e = encodeURIComponent(t.text)),
                    (o = "http://pinterest.com/pin/create/button/?url=" + r + "&media=" + t.image + "&description=" + e),
                    window.open(o, "pinterestShareWindow")
                );
            }),
            t
        );
    })()),
    (extend = function (t, e) {
        for (var r in e) hasProp.call(e, r) && (t[r] = e[r]);
        function o() {
            this.constructor = t;
        }
        return (o.prototype = e.prototype), (t.prototype = new o()), (t.__super__ = e.prototype), t;
    }),
    (hasProp = {}.hasOwnProperty),
    (window.relax.ImageLoader = ImageLoader = (function (t) {
        function A(t) {
            var e, r, o, n, i, a, s, l, c, u, h, d, p, g, f, m, x, _, w, y, v, b, S, E, T;
            if ((A.__super__.constructor.call(this), !0 === t.allowProgress && (this._allowProgress = t.allowProgress), !t.sources)) throw new Error("ImageLoader: sources needs to be defined.");
            for (t.loadOrder && (this._loadOrder = t.loadOrder), this._loadCue = [], this._data = [], i = 0, l = (y = t.sources).length; i < l; i++)
                (E = y[i]), this._data.push(new relax.displayObject.Image({ src: E, progress: !0 === t.allowProgress })), (this._data[E] = this._data.length - 1);
            if (this._loadOrder === relax.ImageLoader.ORDER_DIVIDE_AND_CONQUER) {
                for (p = [], a = 0, c = (v = t.sources).length; a < c; a++) v[a], p.push(p.length);
                for (m = 0, (_ = []).push(p.splice(0, 1)[0]), _.push(p.splice(p.length - 1, 1)[0]); 0 < p.length; )
                    for (g = 0, u = p.length; g < u; g++) {
                        for (
                            p[g], e = 0, r = f = 1, b = s = ++m + 1;
                            f < b && ((e += r % 2 == 0 ? Math.round((s - r) * (p.length / s)) : Math.round(r * (p.length / s))), (T = null), 0 < p.length && (T = p.splice(e, 1)[0]), T && _.push(T), 0 !== p.length);
                            r = f += 1
                        );
                        if (0 === p.length) break;
                    }
                for (x = 0, h = _.length; x < h; x++) (n = _[x]), this._loadCue.push(this._data[n]);
            } else for (w = 0, d = (S = this._data).length; w < d; w++) (o = S[w]), this._loadCue.push(o);
            (this.length = this._data.length), t.autoload && this.load(!0);
        }
        return (
            extend(A, t),
            (A.ORDER_LINEAR = "linear"),
            (A.ORDER_DIVIDE_AND_CONQUER = "divide-and-conquer"),
            (A.IMAGE_LOADED = "image-loaded"),
            (A.LOADED = "loaded"),
            (A.LOADING = "loading"),
            (A.prototype._data = null),
            (A.prototype._toLoad = null),
            (A.prototype._paused = !1),
            (A.prototype._loadCue = null),
            (A.prototype._loadOrder = A.ORDER_LINEAR),
            (A.prototype._allowProgress = !1),
            (A.prototype._leftToBeLoaded = -1),
            (A.prototype._loadAllAtSameTime = !1),
            (A.prototype.loaded = !1),
            (A.prototype.length = 0),
            (A.prototype.pause = function (t) {
                var e, r, o, n, i;
                if ((null == t && (t = !1), (this._paused = !0), t)) {
                    for (i = [], r = 0, o = (n = this._loadCue).length; r < o; r++) (e = n[r]).loaded ? i.push(void 0) : i.push(e.stop());
                    return i;
                }
            }),
            (A.prototype.resume = function () {
                if (((this._paused = !1), !this.loaded)) return this.load(this._loadAllAtSameTime);
            }),
            (A.prototype.load = function (t) {
                var e, r, o, n, i;
                if ((null == t && (t = !1), !this._paused)) {
                    if (((this._loadAllAtSameTime = t), !this.loaded))
                        if (((this._leftToBeLoaded = this._loadCue.length), this._loadAllAtSameTime)) {
                            if (this._loadAllAtSameTime) for (r = 0, o = (i = this._loadCue).length; r < o; r++) (e = i[r]).loaded || e.load({ callback: relax.dom.bind(this, this.onImageLoaded) });
                        } else null != (n = this.getNextImageToLoad()) && n.load({ callback: relax.dom.bind(this, this.onImageLoaded) });
                    return this._allowProgress && !relax.tools.renderQue.has(this) ? relax.tools.renderQue.add(this) : void 0;
                }
            }),
            (A.prototype.renderQueCall = function () {
                var t, e, r, o;
                for (t = r = 0, e = (o = this._data).length; t < e; t++) r += o[t].progress / this._data.length;
                if (r !== this._loadProgress) return (this._loadProgress = r), this.trigger(window.relax.ImageLoader.LOADING, this._loadProgress);
            }),
            (A.prototype.getNextImageToLoad = function () {
                var t, e, r, o;
                for (e = 0, r = (o = this._loadCue).length; e < r; e++) if (!(t = o[e]).loading) return t;
            }),
            (A.prototype.onImageLoaded = function (t) {
                if ((this.trigger(relax.ImageLoader.IMAGE_LOADED, t), 0 == --this._leftToBeLoaded))
                    return (this.loaded = !0), relax.tools.renderQue.has(this) && relax.tools.renderQue.remove(this), this.trigger(relax.ImageLoader.LOADED, this);
            }),
            (A.prototype.getImage = function (t, e) {
                var r, o, n, i, a, s;
                if ((null == e && (e = !1), this._loadOrder === relax.ImageLoader.ORDER_DIVIDE_AND_CONQUER && (e = !0), (n = null), isNaN(t))) {
                    for (i = 0, a = (s = this._data).length; i < a; i++)
                        if ((n = s[i]).src === t) {
                            if (!n.loaded) throw new Error("Trying to get image that is not loaded");
                            return n;
                        }
                } else if (!(n = this._data[t]).loaded && !e) throw new Error("Trying to get image that is not loaded");
                if (e && !n.loaded)
                    for (r = this._data.indexOf(n) + 1, o = this._data.indexOf(n) - 1; !n.loaded && (0 <= o || r < this._data.length); )
                        r < this._data.length && this._data[r].loaded ? (n = this._data[r]) : 0 <= o && this._data[o].loaded ? (n = this._data[o]) : ((r += 1), (o -= 1));
                return n;
            }),
            (A.prototype.dealoc = function () {
                var t, e, r;
                for (relax.tools.renderQue.has(this) && relax.tools.renderQue.remove(this), this._loadCue = null, t = 0, e = (r = this._data).length; t < e; t++) r[t].dealoc();
                return A.__super__.dealoc.call(this);
            }),
            A
        );
    })(relax.EventDispatcher)),
    (extend = function (t, e) {
        for (var r in e) hasProp.call(e, r) && (t[r] = e[r]);
        function o() {
            this.constructor = t;
        }
        return (o.prototype = e.prototype), (t.prototype = new o()), (t.__super__ = e.prototype), t;
    }),
    (hasProp = {}.hasOwnProperty),
    (relax.StageModel = StageModel = (function (t) {
        function a(t) {
            var e, r, o, n, i;
            if ((a.__super__.constructor.call(this), t && t.mediaqueries))
                for (
                    this._mediaQueries = t.mediaqueries,
                        this._mediaQueries.sort(function (t, e) {
                            return t.horizontalBreakPoint < e.horizontalBreakPoint ? -1 : t.horizontalBreakPoint > e.horizontalBreakPoint ? 1 : 0;
                        }),
                        e = 0,
                        r = (n = this._mediaQueries).length;
                    e < r;
                    e++
                )
                    if (!n[e].eventName) throw new Error("Stagemodel: eventName needs to be defined");
            (this.scrollContext = t && t.scrollContext ? t.scrollContext : window),
                (i = t && t.resizeContext ? t.resizeContext : window),
                (o = t && t.orientationContext ? t.orientationContext : window),
                i.addEventListener("resize", relax.dom.bind(this, this.resize), !1),
                o.addEventListener("orientationchange", relax.dom.bind(this, this.resize), !1),
                this.scrollContext.addEventListener("scroll", relax.dom.bind(this, this.scroll), !!relax.caniuse.passiveEvents && { passive: !0 }),
                this.updateScrollY(),
                this.resize(),
                relax.tools.renderQue.add(this);
        }
        return (
            extend(a, t),
            (a.SCROLL = "stage:scroll"),
            (a.RESIZE = "stage:resize"),
            (a.RESPONSIVE_CHANGE = "stage:responsive"),
            (a.ORIENTATION_PORTRAIT = "portrait"),
            (a.ORIENTATION_LANDSCAPE = "landscape"),
            (a.prototype.w = 0),
            (a.prototype.h = 0),
            (a.prototype.halfh = 0),
            (a.prototype.halfw = 0),
            (a.prototype.scrollDirection = ""),
            (a.prototype.scrolling = !1),
            (a.prototype._tempScrollY = 0),
            (a.prototype._mediaQueries = null),
            (a.prototype.currentMQ = ""),
            (a.prototype.performanceTimer = 0),
            (a.prototype.orientationMode = ""),
            Object.defineProperties(a.prototype, {
                scrollTop: {
                    get: function () {
                        return this._windowScrollY;
                    },
                },
                scrolltop: {
                    get: function () {
                        return this._windowScrollY;
                    },
                },
            }),
            (a.prototype.toString = function () {
                var t;
                return (
                    (t = { w: this.w, h: this.h, halfw: this.halfw, halfh: this.halfh, scrollTop: this.scrollTop, scrollDirection: this.scrollDirection, scrolling: this.scrolling, orientationMode: this.orientationMode }),
                    JSON.stringify(t, null, 2)
                );
            }),
            (a.prototype.axisAndPercentages = []),
            (a.prototype.getPercentOf = function (t, e) {}),
            (a.prototype.renderQueCall = function () {
                if (this.scrolling) return (this.scrolling = !1), this.updateScrollY();
            }),
            (a.prototype.scroll = function (t) {
                return (this.scrolling = !0);
            }),
            (a.prototype.updateScrollY = function () {
                return (
                    this.scrollContext !== window
                        ? (this._tempScrollY = this.scrollContext.scrollTop)
                        : 0 === document.documentElement.scrollTop
                        ? (this._tempScrollY = document.body.scrollTop)
                        : (this._tempScrollY = document.documentElement.scrollTop),
                    this.handleScroll()
                );
            }),
            (a.prototype.handleScroll = function () {
                return (
                    (this.scrollDirection = this._tempScrollY < this.scrollTop ? -1 : this._tempScrollY > this.scrollTop ? 1 : 0),
                    (this._windowScrollY = this._tempScrollY),
                    (this.scrolltop = this.scrollTop),
                    this.trigger(relax.StageModel.SCROLL, this)
                );
            }),
            (a.prototype.resize = function (t) {
                if (
                    (this.updateScrollY(),
                    (this.w = document.documentElement.clientWidth || window.innerWidth),
                    (this.h = document.documentElement.clientHeight || window.innerHeight),
                    (this.halfw = 0.5 * this.w),
                    (this.halfh = 0.5 * this.h),
                    (this.orientationMode = this.w / this.h <= 0.87 ? relax.StageModel.ORIENTATION_PORTRAIT : relax.StageModel.ORIENTATION_LANDSCAPE),
                    this.trigger(a.RESIZE, this),
                    this._mediaQueries)
                )
                    return this.checkMediaQueries();
            }),
            (a.prototype.checkMediaQueries = function (t) {
                var e, r, o, n, i;
                for (null == t && (t = !1), i = [], e = 0, r = (n = this._mediaQueries).length; e < r; e++) {
                    if ((o = n[e]).horizontalBreakPoint && o.horizontalBreakPoint > this.w) {
                        (this.currentMQ !== o.eventName || t) && ((this.currentMQ = o.eventName), this.trigger(relax.StageModel.RESPONSIVE_CHANGE, this));
                        break;
                    }
                    i.push(void 0);
                }
                return i;
            }),
            (a.prototype.bind = function (t, e, r, o) {
                return null == o && (o = !0), a.__super__.bind.call(this, t, e, r, o);
            }),
            (a.prototype.dealoc = function () {
                throw new Error("Wow wow wow! You don't wanna do this!");
            }),
            a
        );
    })(relax.EventDispatcher)),
    "object" == typeof module && module.exports && (module.exports = relax);
var VirtualScroll = (function (e) {
    var n,
        o,
        a,
        t,
        l = {},
        i = [],
        r = !1,
        d = 2,
        s = 15,
        u = 120,
        c = 1,
        v = "onwheel" in e,
        h = "onmousewheel" in e,
        w = "ontouchstart" in e,
        m = navigator.msMaxTouchPoints && 1 < navigator.msMaxTouchPoints,
        f = !!window.navigator.msPointerEnabled,
        g = "onkeydown" in e,
        E = -1 < navigator.userAgent.indexOf("Firefox"),
        X = { y: 0, x: 0, deltaX: 0, deltaY: 0, originalEvent: null };
    (l.on = function (e) {
        r || T(), i.push(e), (n = i.length);
    }),
        (l.options = function (e) {
            (u = e.keyStep || 120), (s = e.firefoxMult || 15), (d = e.touchMult || 2), (c = e.mouseMult || 1);
        }),
        (l.off = function (e) {
            i.splice(e, 1), (n = i.length) <= 0 && k();
        });
    var Y = function (e) {
            (X.x += X.deltaX), (X.y += X.deltaY), (X.originalEvent = e);
            for (var t = 0; t < n; t++) i[t](X);
        },
        L = function (e) {
            (X.deltaX = e.wheelDeltaX || -1 * e.deltaX), (X.deltaY = e.wheelDeltaY || -1 * e.deltaY), E && 1 == e.deltaMode && ((X.deltaX *= s), (X.deltaY *= s)), (X.deltaX *= c), (X.deltaY *= c), Y(e);
        },
        y = function (e) {
            (X.deltaX = e.wheelDeltaX ? e.wheelDeltaX : 0), (X.deltaY = e.wheelDeltaY ? e.wheelDeltaY : e.wheelDelta), Y(e);
        },
        M = function (e) {
            var t = e.targetTouches ? e.targetTouches[0] : e;
            (o = t.pageX), (a = t.pageY);
        },
        p = function (e) {
            var t = e.targetTouches ? e.targetTouches[0] : e;
            (X.deltaX = (t.pageX - o) * d), (X.deltaY = (t.pageY - a) * d), (o = t.pageX), (a = t.pageY), Y(e);
        },
        D = function (e) {
            switch (((X.deltaX = X.deltaY = 0), e.keyCode)) {
                case 37:
                    X.deltaX = -u;
                    break;
                case 39:
                    X.deltaX = u;
                    break;
                case 38:
                    X.deltaY = u;
                    break;
                case 40:
                    X.deltaY = -u;
            }
            Y(e);
        },
        T = function () {
            v && e.addEventListener("wheel", L),
                h && e.addEventListener("mousewheel", y),
                w && (e.addEventListener("touchstart", M), e.addEventListener("touchmove", p)),
                f && m && ((t = e.body.style.msTouchAction), (e.body.style.msTouchAction = "none"), e.addEventListener("MSPointerDown", M, !0), e.addEventListener("MSPointerMove", p, !0)),
                g && e.addEventListener("keydown", D),
                (r = !0);
        },
        k = function () {
            v && e.removeEventListener("wheel", L),
                h && e.removeEventListener("mousewheel", y),
                w && (e.removeEventListener("touchstart", M), e.removeEventListener("touchmove", p)),
                f && m && ((e.body.style.msTouchAction = t), e.removeEventListener("MSPointerDown", M, !0), e.removeEventListener("MSPointerMove", p, !0)),
                g && e.removeEventListener("keydown", D),
                (r = !1);
        };
    return l;
})(document);
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
    "use strict";
    _gsScope._gsDefine(
        "easing.Back",
        ["easing.Ease"],
        function (w) {
            var e,
                n,
                t,
                i = _gsScope.GreenSockGlobals || _gsScope,
                o = i.com.greensock,
                s = 2 * Math.PI,
                r = Math.PI / 2,
                u = o._class,
                p = function (t, n) {
                    var e = u("easing." + t, function () {}, !0),
                        i = (e.prototype = new w());
                    return (i.constructor = e), (i.getRatio = n), e;
                },
                c = w.register || function () {},
                a = function (t, n, e, i, o) {
                    var s = u("easing." + t, { easeOut: new n(), easeIn: new e(), easeInOut: new i() }, !0);
                    return c(s, t), s;
                },
                M = function (t, n, e) {
                    (this.t = t), (this.v = n), e && ((((this.next = e).prev = this).c = e.v - n), (this.gap = e.t - t));
                },
                h = function (t, n) {
                    var e = u(
                            "easing." + t,
                            function (t) {
                                (this._p1 = t || 0 === t ? t : 1.70158), (this._p2 = 1.525 * this._p1);
                            },
                            !0
                        ),
                        i = (e.prototype = new w());
                    return (
                        (i.constructor = e),
                        (i.getRatio = n),
                        (i.config = function (t) {
                            return new e(t);
                        }),
                        e
                    );
                },
                _ = a(
                    "Back",
                    h("BackOut", function (t) {
                        return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1;
                    }),
                    h("BackIn", function (t) {
                        return t * t * ((this._p1 + 1) * t - this._p1);
                    }),
                    h("BackInOut", function (t) {
                        return (t *= 2) < 1 ? 0.5 * t * t * ((this._p2 + 1) * t - this._p2) : 0.5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2);
                    })
                ),
                f = u(
                    "easing.SlowMo",
                    function (t, n, e) {
                        (n = n || 0 === n ? n : 0.7), null == t ? (t = 0.7) : 1 < t && (t = 1), (this._p = 1 !== t ? n : 0), (this._p1 = (1 - t) / 2), (this._p2 = t), (this._p3 = this._p1 + this._p2), (this._calcEnd = !0 === e);
                    },
                    !0
                ),
                g = (f.prototype = new w());
            return (
                (g.constructor = f),
                (g.getRatio = function (t) {
                    var n = t + (0.5 - t) * this._p;
                    return t < this._p1
                        ? this._calcEnd
                            ? 1 - (t = 1 - t / this._p1) * t
                            : n - (t = 1 - t / this._p1) * t * t * t * n
                        : t > this._p3
                        ? this._calcEnd
                            ? 1 === t
                                ? 0
                                : 1 - (t = (t - this._p3) / this._p1) * t
                            : n + (t - n) * (t = (t - this._p3) / this._p1) * t * t * t
                        : this._calcEnd
                        ? 1
                        : n;
                }),
                (f.ease = new f(0.7, 0.7)),
                (g.config = f.config = function (t, n, e) {
                    return new f(t, n, e);
                }),
                ((g = (e = u(
                    "easing.SteppedEase",
                    function (t, n) {
                        (t = t || 1), (this._p1 = 1 / t), (this._p2 = t + (n ? 0 : 1)), (this._p3 = n ? 1 : 0);
                    },
                    !0
                )).prototype = new w()).constructor = e),
                (g.getRatio = function (t) {
                    return t < 0 ? (t = 0) : 1 <= t && (t = 0.999999999), (((this._p2 * t) | 0) + this._p3) * this._p1;
                }),
                (g.config = e.config = function (t, n) {
                    return new e(t, n);
                }),
                ((g = (n = u(
                    "easing.RoughEase",
                    function (t) {
                        for (
                            var n,
                                e,
                                i,
                                o,
                                s,
                                r,
                                u = (t = t || {}).taper || "none",
                                p = [],
                                c = 0,
                                a = 0 | (t.points || 20),
                                h = a,
                                _ = !1 !== t.randomize,
                                f = !0 === t.clamp,
                                g = t.template instanceof w ? t.template : null,
                                l = "number" == typeof t.strength ? 0.4 * t.strength : 0.4;
                            -1 < --h;

                        )
                            (n = _ ? Math.random() : (1 / a) * h),
                                (e = g ? g.getRatio(n) : n),
                                (i = "none" === u ? l : "out" === u ? (o = 1 - n) * o * l : "in" === u ? n * n * l : n < 0.5 ? (o = 2 * n) * o * 0.5 * l : (o = 2 * (1 - n)) * o * 0.5 * l),
                                _ ? (e += Math.random() * i - 0.5 * i) : h % 2 ? (e += 0.5 * i) : (e -= 0.5 * i),
                                f && (1 < e ? (e = 1) : e < 0 && (e = 0)),
                                (p[c++] = { x: n, y: e });
                        for (
                            p.sort(function (t, n) {
                                return t.x - n.x;
                            }),
                                r = new M(1, 1, null),
                                h = a;
                            -1 < --h;

                        )
                            (s = p[h]), (r = new M(s.x, s.y, r));
                        this._prev = new M(0, 0, 0 !== r.t ? r : r.next);
                    },
                    !0
                )).prototype = new w()).constructor = n),
                (g.getRatio = function (t) {
                    var n = this._prev;
                    if (t > n.t) {
                        for (; n.next && t >= n.t; ) n = n.next;
                        n = n.prev;
                    } else for (; n.prev && t <= n.t; ) n = n.prev;
                    return (this._prev = n).v + ((t - n.t) / n.gap) * n.c;
                }),
                (g.config = function (t) {
                    return new n(t);
                }),
                (n.ease = new n()),
                a(
                    "Bounce",
                    p("BounceOut", function (t) {
                        return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375 : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
                    }),
                    p("BounceIn", function (t) {
                        return (t = 1 - t) < 1 / 2.75
                            ? 1 - 7.5625 * t * t
                            : t < 2 / 2.75
                            ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + 0.75)
                            : t < 2.5 / 2.75
                            ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375)
                            : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375);
                    }),
                    p("BounceInOut", function (t) {
                        var n = t < 0.5;
                        return (
                            (t = n ? 1 - 2 * t : 2 * t - 1) < 1 / 2.75
                                ? (t *= 7.5625 * t)
                                : (t = t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375 : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375),
                            n ? 0.5 * (1 - t) : 0.5 * t + 0.5
                        );
                    })
                ),
                a(
                    "Circ",
                    p("CircOut", function (t) {
                        return Math.sqrt(1 - (t -= 1) * t);
                    }),
                    p("CircIn", function (t) {
                        return -(Math.sqrt(1 - t * t) - 1);
                    }),
                    p("CircInOut", function (t) {
                        return (t *= 2) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
                    })
                ),
                a(
                    "Elastic",
                    (t = function (t, n, e) {
                        var i = u(
                                "easing." + t,
                                function (t, n) {
                                    (this._p1 = 1 <= t ? t : 1), (this._p2 = (n || e) / (t < 1 ? t : 1)), (this._p3 = (this._p2 / s) * (Math.asin(1 / this._p1) || 0)), (this._p2 = s / this._p2);
                                },
                                !0
                            ),
                            o = (i.prototype = new w());
                        return (
                            (o.constructor = i),
                            (o.getRatio = n),
                            (o.config = function (t, n) {
                                return new i(t, n);
                            }),
                            i
                        );
                    })(
                        "ElasticOut",
                        function (t) {
                            return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1;
                        },
                        0.3
                    ),
                    t(
                        "ElasticIn",
                        function (t) {
                            return -this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2);
                        },
                        0.3
                    ),
                    t(
                        "ElasticInOut",
                        function (t) {
                            return (t *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * -0.5 : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * 0.5 + 1;
                        },
                        0.45
                    )
                ),
                a(
                    "Expo",
                    p("ExpoOut", function (t) {
                        return 1 - Math.pow(2, -10 * t);
                    }),
                    p("ExpoIn", function (t) {
                        return Math.pow(2, 10 * (t - 1)) - 0.001;
                    }),
                    p("ExpoInOut", function (t) {
                        return (t *= 2) < 1 ? 0.5 * Math.pow(2, 10 * (t - 1)) : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
                    })
                ),
                a(
                    "Sine",
                    p("SineOut", function (t) {
                        return Math.sin(t * r);
                    }),
                    p("SineIn", function (t) {
                        return 1 - Math.cos(t * r);
                    }),
                    p("SineInOut", function (t) {
                        return -0.5 * (Math.cos(Math.PI * t) - 1);
                    })
                ),
                u(
                    "easing.EaseLookup",
                    {
                        find: function (t) {
                            return w.map[t];
                        },
                    },
                    !0
                ),
                c(i.SlowMo, "SlowMo", "ease,"),
                c(n, "RoughEase", "ease,"),
                c(e, "SteppedEase", "ease,"),
                _
            );
        },
        !0
    );
}),
    _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    (function () {
        "use strict";
        var t = function () {
            return _gsScope.GreenSockGlobals || _gsScope;
        };
        "undefined" != typeof module && module.exports ? (require("../TweenLite.js"), (module.exports = t())) : "function" == typeof define && define.amd && define(["TweenLite"], t);
    })();
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
    "use strict";
    _gsScope._gsDefine(
        "plugins.CSSPlugin",
        ["plugins.TweenPlugin", "TweenLite"],
        function (n, L) {
            var x,
                P,
                M,
                d,
                I = function () {
                    n.call(this, "css"), (this._overwriteProps.length = 0), (this.setRatio = I.prototype.setRatio);
                },
                f = _gsScope._gsDefine.globals,
                g = {},
                t = (I.prototype = new n("css"));
            ((t.constructor = I).version = "1.20.3"),
                (I.API = 2),
                (I.defaultTransformPerspective = 0),
                (I.defaultSkewType = "compensated"),
                (I.defaultSmoothOrigin = !0),
                (t = "px"),
                (I.suffixMap = { top: t, right: t, bottom: t, left: t, width: t, height: t, fontSize: t, padding: t, margin: t, perspective: t, lineHeight: "" });
            var S,
                y,
                m,
                D,
                _,
                T,
                X,
                k,
                e,
                r,
                A = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                F = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                p = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                R = /(?:\d|\-|\+|=|#|\.)*/g,
                C = /opacity *= *([^)]*)/i,
                b = /opacity:([^;]*)/i,
                a = /alpha\(opacity *=.+?\)/i,
                O = /^(rgb|hsl)/,
                o = /([A-Z])/g,
                l = /-([a-z])/gi,
                w = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                h = function (t, e) {
                    return e.toUpperCase();
                },
                u = /(?:Left|Right|Width)/i,
                c = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                Y = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                z = /,(?=[^\)]*(?:\(|$))/gi,
                N = /[\s,\(]/i,
                W = Math.PI / 180,
                E = 180 / Math.PI,
                B = {},
                i = { style: {} },
                j = _gsScope.document || {
                    createElement: function () {
                        return i;
                    },
                },
                V = function (t, e) {
                    return j.createElementNS ? j.createElementNS(e || "http://www.w3.org/1999/xhtml", t) : j.createElement(t);
                },
                Z = V("div"),
                H = V("img"),
                s = (I._internals = { _specialProps: g }),
                q = (_gsScope.navigator || {}).userAgent || "",
                G =
                    ((e = q.indexOf("Android")),
                    (r = V("a")),
                    (m = -1 !== q.indexOf("Safari") && -1 === q.indexOf("Chrome") && (-1 === e || 3 < parseFloat(q.substr(e + 8, 2)))),
                    (_ = m && parseFloat(q.substr(q.indexOf("Version/") + 8, 2)) < 6),
                    (D = -1 !== q.indexOf("Firefox")),
                    (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(q) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(q)) && (T = parseFloat(RegExp.$1)),
                    !!r && ((r.style.cssText = "top:1px;opacity:.55;"), /^0.55/.test(r.style.opacity))),
                $ = function (t) {
                    return C.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1;
                },
                U = function (t) {
                    _gsScope.console && console.log(t);
                },
                Q = "",
                J = "",
                K = function (t, e) {
                    var r,
                        i,
                        s = (e = e || Z).style;
                    if (void 0 !== s[t]) return t;
                    for (t = t.charAt(0).toUpperCase() + t.substr(1), r = ["O", "Moz", "ms", "Ms", "Webkit"], i = 5; -1 < --i && void 0 === s[r[i] + t]; );
                    return 0 <= i ? ((Q = "-" + (J = 3 === i ? "ms" : r[i]).toLowerCase() + "-"), J + t) : null;
                },
                tt = j.defaultView ? j.defaultView.getComputedStyle : function () {},
                et = (I.getStyle = function (t, e, r, i, s) {
                    var n;
                    return G || "opacity" !== e
                        ? (!i && t.style[e] ? (n = t.style[e]) : (r = r || tt(t)) ? (n = r[e] || r.getPropertyValue(e) || r.getPropertyValue(e.replace(o, "-$1").toLowerCase())) : t.currentStyle && (n = t.currentStyle[e]),
                          null == s || (n && "none" !== n && "auto" !== n && "auto auto" !== n) ? n : s)
                        : $(t);
                }),
                rt = (s.convertToPixels = function (t, e, r, i, s) {
                    if ("px" === i || (!i && "lineHeight" !== e)) return r;
                    if ("auto" === i || !r) return 0;
                    var n,
                        a,
                        o,
                        l = u.test(e),
                        f = t,
                        p = Z.style,
                        h = r < 0,
                        c = 1 === r;
                    if ((h && (r = -r), c && (r *= 100), "lineHeight" !== e || i))
                        if ("%" === i && -1 !== e.indexOf("border")) n = (r / 100) * (l ? t.clientWidth : t.clientHeight);
                        else {
                            if (((p.cssText = "border:0 solid red;position:" + et(t, "position") + ";line-height:0;"), "%" !== i && f.appendChild && "v" !== i.charAt(0) && "rem" !== i)) p[l ? "borderLeftWidth" : "borderTopWidth"] = r + i;
                            else {
                                if (((f = t.parentNode || j.body), -1 !== et(f, "display").indexOf("flex") && (p.position = "absolute"), (a = f._gsCache), (o = L.ticker.frame), a && l && a.time === o)) return (a.width * r) / 100;
                                p[l ? "width" : "height"] = r + i;
                            }
                            f.appendChild(Z),
                                (n = parseFloat(Z[l ? "offsetWidth" : "offsetHeight"])),
                                f.removeChild(Z),
                                l && "%" === i && !1 !== I.cacheWidths && (((a = f._gsCache = f._gsCache || {}).time = o), (a.width = (n / r) * 100)),
                                0 !== n || s || (n = rt(t, e, r, i, !0));
                        }
                    else (a = tt(t).lineHeight), (t.style.lineHeight = r), (n = parseFloat(tt(t).lineHeight)), (t.style.lineHeight = a);
                    return c && (n /= 100), h ? -n : n;
                }),
                it = (s.calculateOffset = function (t, e, r) {
                    if ("absolute" !== et(t, "position", r)) return 0;
                    var i = "left" === e ? "Left" : "Top",
                        s = et(t, "margin" + i, r);
                    return t["offset" + i] - (rt(t, e, parseFloat(s), s.replace(R, "")) || 0);
                }),
                st = function (t, e) {
                    var r,
                        i,
                        s,
                        n = {};
                    if ((e = e || tt(t, null)))
                        if ((r = e.length)) for (; -1 < --r; ) (-1 !== (s = e[r]).indexOf("-transform") && zt !== s) || (n[s.replace(l, h)] = e.getPropertyValue(s));
                        else for (r in e) (-1 !== r.indexOf("Transform") && Yt !== r) || (n[r] = e[r]);
                    else if ((e = t.currentStyle || t.style)) for (r in e) "string" == typeof r && void 0 === n[r] && (n[r.replace(l, h)] = e[r]);
                    return (
                        G || (n.opacity = $(t)),
                        (i = Gt(t, e, !1)),
                        (n.rotation = i.rotation),
                        (n.skewX = i.skewX),
                        (n.scaleX = i.scaleX),
                        (n.scaleY = i.scaleY),
                        (n.x = i.x),
                        (n.y = i.y),
                        Bt && ((n.z = i.z), (n.rotationX = i.rotationX), (n.rotationY = i.rotationY), (n.scaleZ = i.scaleZ)),
                        n.filters && delete n.filters,
                        n
                    );
                },
                nt = function (t, e, r, i, s) {
                    var n,
                        a,
                        o,
                        l = {},
                        f = t.style;
                    for (a in r)
                        "cssText" !== a &&
                            "length" !== a &&
                            isNaN(a) &&
                            (e[a] !== (n = r[a]) || (s && s[a])) &&
                            -1 === a.indexOf("Origin") &&
                            (("number" != typeof n && "string" != typeof n) ||
                                ((l[a] = "auto" !== n || ("left" !== a && "top" !== a) ? (("" !== n && "auto" !== n && "none" !== n) || "string" != typeof e[a] || "" === e[a].replace(p, "") ? n : 0) : it(t, a)),
                                void 0 !== f[a] && (o = new vt(f, a, f[a], o))));
                    if (i) for (a in i) "className" !== a && (l[a] = i[a]);
                    return { difs: l, firstMPT: o };
                },
                at = { width: ["Left", "Right"], height: ["Top", "Bottom"] },
                ot = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                lt = function (t, e, r) {
                    if ("svg" === (t.nodeName + "").toLowerCase()) return (r || tt(t))[e] || 0;
                    if (t.getCTM && Zt(t)) return t.getBBox()[e] || 0;
                    var i = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                        s = at[e],
                        n = s.length;
                    for (r = r || tt(t, null); -1 < --n; ) (i -= parseFloat(et(t, "padding" + s[n], r, !0)) || 0), (i -= parseFloat(et(t, "border" + s[n] + "Width", r, !0)) || 0);
                    return i;
                },
                ft = function (t, e) {
                    if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                    (null != t && "" !== t) || (t = "0 0");
                    var r,
                        i = t.split(" "),
                        s = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
                        n = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
                    if (3 < i.length && !e) {
                        for (i = t.split(", ").join(",").split(","), t = [], r = 0; r < i.length; r++) t.push(ft(i[r]));
                        return t.join(",");
                    }
                    return (
                        null == n ? (n = "center" === s ? "50%" : "0") : "center" === n && (n = "50%"),
                        ("center" === s || (isNaN(parseFloat(s)) && -1 === (s + "").indexOf("="))) && (s = "50%"),
                        (t = s + " " + n + (2 < i.length ? " " + i[2] : "")),
                        e &&
                            ((e.oxp = -1 !== s.indexOf("%")),
                            (e.oyp = -1 !== n.indexOf("%")),
                            (e.oxr = "=" === s.charAt(1)),
                            (e.oyr = "=" === n.charAt(1)),
                            (e.ox = parseFloat(s.replace(p, ""))),
                            (e.oy = parseFloat(n.replace(p, ""))),
                            (e.v = t)),
                        e || t
                    );
                },
                pt = function (t, e) {
                    return "function" == typeof t && (t = t(k, X)), "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0;
                },
                ht = function (t, e) {
                    return "function" == typeof t && (t = t(k, X)), null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0;
                },
                ct = function (t, e, r, i) {
                    var s, n, a, o, l;
                    return (
                        "function" == typeof t && (t = t(k, X)),
                        (o =
                            null == t
                                ? e
                                : "number" == typeof t
                                ? t
                                : ((s = 360),
                                  (n = t.split("_")),
                                  (a = ((l = "=" === t.charAt(1)) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(n[0].substr(2)) : parseFloat(n[0])) * (-1 === t.indexOf("rad") ? 1 : E) - (l ? 0 : e)),
                                  n.length &&
                                      (i && (i[r] = e + a),
                                      -1 !== t.indexOf("short") && (a %= s) != a % 180 && (a = a < 0 ? a + s : a - s),
                                      -1 !== t.indexOf("_cw") && a < 0 ? (a = ((a + 3599999999640) % s) - ((a / s) | 0) * s) : -1 !== t.indexOf("ccw") && 0 < a && (a = ((a - 3599999999640) % s) - ((a / s) | 0) * s)),
                                  e + a)) < 1e-6 &&
                            -1e-6 < o &&
                            (o = 0),
                        o
                    );
                },
                ut = {
                    aqua: [0, 255, 255],
                    lime: [0, 255, 0],
                    silver: [192, 192, 192],
                    black: [0, 0, 0],
                    maroon: [128, 0, 0],
                    teal: [0, 128, 128],
                    blue: [0, 0, 255],
                    navy: [0, 0, 128],
                    white: [255, 255, 255],
                    fuchsia: [255, 0, 255],
                    olive: [128, 128, 0],
                    yellow: [255, 255, 0],
                    orange: [255, 165, 0],
                    gray: [128, 128, 128],
                    purple: [128, 0, 128],
                    green: [0, 128, 0],
                    red: [255, 0, 0],
                    pink: [255, 192, 203],
                    cyan: [0, 255, 255],
                    transparent: [255, 255, 255, 0],
                },
                xt = function (t, e, r) {
                    return (255 * (6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1 ? e + (r - e) * t * 6 : t < 0.5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) + 0.5) | 0;
                },
                dt = (I.parseColor = function (t, e) {
                    var r, i, s, n, a, o, l, f, p, h, c;
                    if (t)
                        if ("number" == typeof t) r = [t >> 16, (t >> 8) & 255, 255 & t];
                        else {
                            if (("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ut[t])) r = ut[t];
                            else if ("#" === t.charAt(0)) 4 === t.length && (t = "#" + (i = t.charAt(1)) + i + (s = t.charAt(2)) + s + (n = t.charAt(3)) + n), (r = [(t = parseInt(t.substr(1), 16)) >> 16, (t >> 8) & 255, 255 & t]);
                            else if ("hsl" === t.substr(0, 3))
                                if (((r = c = t.match(A)), e)) {
                                    if (-1 !== t.indexOf("=")) return t.match(F);
                                } else
                                    (a = (Number(r[0]) % 360) / 360),
                                        (o = Number(r[1]) / 100),
                                        (i = 2 * (l = Number(r[2]) / 100) - (s = l <= 0.5 ? l * (o + 1) : l + o - l * o)),
                                        3 < r.length && (r[3] = Number(r[3])),
                                        (r[0] = xt(a + 1 / 3, i, s)),
                                        (r[1] = xt(a, i, s)),
                                        (r[2] = xt(a - 1 / 3, i, s));
                            else r = t.match(A) || ut.transparent;
                            (r[0] = Number(r[0])), (r[1] = Number(r[1])), (r[2] = Number(r[2])), 3 < r.length && (r[3] = Number(r[3]));
                        }
                    else r = ut.black;
                    return (
                        e &&
                            !c &&
                            ((i = r[0] / 255),
                            (s = r[1] / 255),
                            (n = r[2] / 255),
                            (l = ((f = Math.max(i, s, n)) + (p = Math.min(i, s, n))) / 2),
                            f === p ? (a = o = 0) : ((h = f - p), (o = 0.5 < l ? h / (2 - f - p) : h / (f + p)), (a = f === i ? (s - n) / h + (s < n ? 6 : 0) : f === s ? (n - i) / h + 2 : (i - s) / h + 4), (a *= 60)),
                            (r[0] = (a + 0.5) | 0),
                            (r[1] = (100 * o + 0.5) | 0),
                            (r[2] = (100 * l + 0.5) | 0)),
                        r
                    );
                }),
                gt = function (t, e) {
                    var r,
                        i,
                        s,
                        n = t.match(yt) || [],
                        a = 0,
                        o = "";
                    if (!n.length) return t;
                    for (r = 0; r < n.length; r++)
                        (i = n[r]),
                            (a += (s = t.substr(a, t.indexOf(i, a) - a)).length + i.length),
                            3 === (i = dt(i, e)).length && i.push(1),
                            (o += s + (e ? "hsla(" + i[0] + "," + i[1] + "%," + i[2] + "%," + i[3] : "rgba(" + i.join(",")) + ")");
                    return o + t.substr(a);
                },
                yt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
            for (t in ut) yt += "|" + t + "\\b";
            (yt = new RegExp(yt + ")", "gi")),
                (I.colorStringFilter = function (t) {
                    var e,
                        r = t[0] + " " + t[1];
                    yt.test(r) && ((e = -1 !== r.indexOf("hsl(") || -1 !== r.indexOf("hsla(")), (t[0] = gt(t[0], e)), (t[1] = gt(t[1], e))), (yt.lastIndex = 0);
                }),
                L.defaultStringFilter || (L.defaultStringFilter = I.colorStringFilter);
            var mt = function (t, e, n, a) {
                    if (null == t)
                        return function (t) {
                            return t;
                        };
                    var o,
                        l = e ? (t.match(yt) || [""])[0] : "",
                        f = t.split(l).join("").match(v) || [],
                        p = t.substr(0, t.indexOf(f[0])),
                        h = ")" === t.charAt(t.length - 1) ? ")" : "",
                        c = -1 !== t.indexOf(" ") ? " " : ",",
                        u = f.length,
                        x = 0 < u ? f[0].replace(A, "") : "";
                    return u
                        ? (o = e
                              ? function (t) {
                                    var e, r, i, s;
                                    if ("number" == typeof t) t += x;
                                    else if (a && z.test(t)) {
                                        for (s = t.replace(z, "|").split("|"), i = 0; i < s.length; i++) s[i] = o(s[i]);
                                        return s.join(",");
                                    }
                                    if (((e = (t.match(yt) || [l])[0]), (i = (r = t.split(e).join("").match(v) || []).length), u > i--)) for (; ++i < u; ) r[i] = n ? r[((i - 1) / 2) | 0] : f[i];
                                    return p + r.join(c) + c + e + h + (-1 !== t.indexOf("inset") ? " inset" : "");
                                }
                              : function (t) {
                                    var e, r, i;
                                    if ("number" == typeof t) t += x;
                                    else if (a && z.test(t)) {
                                        for (r = t.replace(z, "|").split("|"), i = 0; i < r.length; i++) r[i] = o(r[i]);
                                        return r.join(",");
                                    }
                                    if (((i = (e = t.match(v) || []).length), u > i--)) for (; ++i < u; ) e[i] = n ? e[((i - 1) / 2) | 0] : f[i];
                                    return p + e.join(c) + h;
                                })
                        : function (t) {
                              return t;
                          };
                },
                _t = function (f) {
                    return (
                        (f = f.split(",")),
                        function (t, e, r, i, s, n, a) {
                            var o,
                                l = (e + "").split(" ");
                            for (a = {}, o = 0; o < 4; o++) a[f[o]] = l[o] = l[o] || l[((o - 1) / 2) >> 0];
                            return i.parse(t, a, s, n);
                        }
                    );
                },
                vt =
                    ((s._setPluginRatio = function (t) {
                        this.plugin.setRatio(t);
                        for (var e, r, i, s, n, a = this.data, o = a.proxy, l = a.firstMPT; l; ) (e = o[l.v]), l.r ? (e = Math.round(e)) : e < 1e-6 && -1e-6 < e && (e = 0), (l.t[l.p] = e), (l = l._next);
                        if ((a.autoRotate && (a.autoRotate.rotation = a.mod ? a.mod(o.rotation, this.t) : o.rotation), 1 === t || 0 === t))
                            for (l = a.firstMPT, n = 1 === t ? "e" : "b"; l; ) {
                                if ((r = l.t).type) {
                                    if (1 === r.type) {
                                        for (s = r.xs0 + r.s + r.xs1, i = 1; i < r.l; i++) s += r["xn" + i] + r["xs" + (i + 1)];
                                        r[n] = s;
                                    }
                                } else r[n] = r.s + r.xs0;
                                l = l._next;
                            }
                    }),
                    function (t, e, r, i, s) {
                        (this.t = t), (this.p = e), (this.v = r), (this.r = s), i && ((i._prev = this)._next = i);
                    }),
                bt =
                    ((s._parseToProxy = function (t, e, r, i, s, n) {
                        var a,
                            o,
                            l,
                            f,
                            p,
                            h = i,
                            c = {},
                            u = {},
                            x = r._transform,
                            d = B;
                        for (r._transform = null, B = e, i = p = r.parse(t, e, i, s), B = d, n && ((r._transform = x), h && ((h._prev = null), h._prev && (h._prev._next = null))); i && i !== h; ) {
                            if (i.type <= 1 && ((u[(o = i.p)] = i.s + i.c), (c[o] = i.s), n || ((f = new vt(i, "s", o, f, i.r)), (i.c = 0)), 1 === i.type))
                                for (a = i.l; 0 < --a; ) (l = "xn" + a), (u[(o = i.p + "_" + l)] = i.data[l]), (c[o] = i[l]), n || (f = new vt(i, l, o, f, i.rxp[l]));
                            i = i._next;
                        }
                        return { proxy: c, end: u, firstMPT: f, pt: p };
                    }),
                    (s.CSSPropTween = function (t, e, r, i, s, n, a, o, l, f, p) {
                        (this.t = t),
                            (this.p = e),
                            (this.s = r),
                            (this.c = i),
                            (this.n = a || e),
                            t instanceof bt || d.push(this.n),
                            (this.r = o),
                            (this.type = n || 0),
                            l && ((this.pr = l), (x = !0)),
                            (this.b = void 0 === f ? r : f),
                            (this.e = void 0 === p ? r + i : p),
                            s && ((this._next = s)._prev = this);
                    })),
                Ot = function (t, e, r, i, s, n) {
                    var a = new bt(t, e, r, i - r, s, -1, n);
                    return (a.b = r), (a.e = a.xs0 = i), a;
                },
                wt = (I.parseComplex = function (t, e, r, i, s, n, a, o, l, f) {
                    (r = r || n || ""), "function" == typeof i && (i = i(k, X)), (a = new bt(t, e, 0, 0, a, f ? 2 : 1, null, !1, o, r, i)), (i += ""), s && yt.test(i + r) && ((i = [r, i]), I.colorStringFilter(i), (r = i[0]), (i = i[1]));
                    var p,
                        h,
                        c,
                        u,
                        x,
                        d,
                        g,
                        y,
                        m,
                        _,
                        v,
                        b,
                        O,
                        w = r.split(", ").join(",").split(" "),
                        P = i.split(", ").join(",").split(" "),
                        T = w.length,
                        M = !1 !== S;
                    for (
                        (-1 === i.indexOf(",") && -1 === r.indexOf(",")) ||
                            ((P =
                                -1 !== (i + r).indexOf("rgb") || -1 !== (i + r).indexOf("hsl")
                                    ? ((w = w.join(" ").replace(z, ", ").split(" ")), P.join(" ").replace(z, ", ").split(" "))
                                    : ((w = w.join(" ").split(",").join(", ").split(" ")), P.join(" ").split(",").join(", ").split(" "))),
                            (T = w.length)),
                            T !== P.length && (T = (w = (n || "").split(" ")).length),
                            a.plugin = l,
                            a.setRatio = f,
                            p = yt.lastIndex = 0;
                        p < T;
                        p++
                    )
                        if (((u = w[p]), (x = P[p]), (y = parseFloat(u)) || 0 === y)) a.appendXtra("", y, pt(x, y), x.replace(F, ""), M && -1 !== x.indexOf("px"), !0);
                        else if (s && yt.test(u))
                            (b = ")" + ((b = x.indexOf(")") + 1) ? x.substr(b) : "")),
                                (O = -1 !== x.indexOf("hsl") && G),
                                (_ = x),
                                (u = dt(u, O)),
                                (x = dt(x, O)),
                                (m = 6 < u.length + x.length) && !G && 0 === x[3]
                                    ? ((a["xs" + a.l] += a.l ? " transparent" : "transparent"), (a.e = a.e.split(P[p]).join("transparent")))
                                    : (G || (m = !1),
                                      O
                                          ? a
                                                .appendXtra(_.substr(0, _.indexOf("hsl")) + (m ? "hsla(" : "hsl("), u[0], pt(x[0], u[0]), ",", !1, !0)
                                                .appendXtra("", u[1], pt(x[1], u[1]), "%,", !1)
                                                .appendXtra("", u[2], pt(x[2], u[2]), m ? "%," : "%" + b, !1)
                                          : a
                                                .appendXtra(_.substr(0, _.indexOf("rgb")) + (m ? "rgba(" : "rgb("), u[0], x[0] - u[0], ",", !0, !0)
                                                .appendXtra("", u[1], x[1] - u[1], ",", !0)
                                                .appendXtra("", u[2], x[2] - u[2], m ? "," : b, !0),
                                      m && ((u = u.length < 4 ? 1 : u[3]), a.appendXtra("", u, (x.length < 4 ? 1 : x[3]) - u, b, !1))),
                                (yt.lastIndex = 0);
                        else if ((d = u.match(A))) {
                            if (!(g = x.match(F)) || g.length !== d.length) return a;
                            for (h = c = 0; h < d.length; h++) (v = d[h]), (_ = u.indexOf(v, c)), a.appendXtra(u.substr(c, _ - c), Number(v), pt(g[h], v), "", M && "px" === u.substr(_ + v.length, 2), 0 === h), (c = _ + v.length);
                            a["xs" + a.l] += u.substr(c);
                        } else a["xs" + a.l] += a.l || a["xs" + a.l] ? " " + x : x;
                    if (-1 !== i.indexOf("=") && a.data) {
                        for (b = a.xs0 + a.data.s, p = 1; p < a.l; p++) b += a["xs" + p] + a.data["xn" + p];
                        a.e = b + a["xs" + p];
                    }
                    return a.l || ((a.type = -1), (a.xs0 = a.e)), a.xfirst || a;
                }),
                Pt = 9;
            for ((t = bt.prototype).l = t.pr = 0; 0 < --Pt; ) (t["xn" + Pt] = 0), (t["xs" + Pt] = "");
            (t.xs0 = ""),
                (t._next = t._prev = t.xfirst = t.data = t.plugin = t.setRatio = t.rxp = null),
                (t.appendXtra = function (t, e, r, i, s, n) {
                    var a = this,
                        o = a.l;
                    return (
                        (a["xs" + o] += n && (o || a["xs" + o]) ? " " + t : t || ""),
                        r || 0 === o || a.plugin
                            ? (a.l++,
                              (a.type = a.setRatio ? 2 : 1),
                              (a["xs" + a.l] = i || ""),
                              0 < o
                                  ? ((a.data["xn" + o] = e + r), (a.rxp["xn" + o] = s), (a["xn" + o] = e), a.plugin || ((a.xfirst = new bt(a, "xn" + o, e, r, a.xfirst || a, 0, a.n, s, a.pr)), (a.xfirst.xs0 = 0)))
                                  : ((a.data = { s: e + r }), (a.rxp = {}), (a.s = e), (a.c = r), (a.r = s)))
                            : (a["xs" + o] += e + (i || "")),
                        a
                    );
                });
            var Tt = function (t, e) {
                    (e = e || {}),
                        (this.p = (e.prefix && K(t)) || t),
                        (g[t] = g[this.p] = this),
                        (this.format = e.formatter || mt(e.defaultValue, e.color, e.collapsible, e.multi)),
                        e.parser && (this.parse = e.parser),
                        (this.clrs = e.color),
                        (this.multi = e.multi),
                        (this.keyword = e.keyword),
                        (this.dflt = e.defaultValue),
                        (this.pr = e.priority || 0);
                },
                Mt = (s._registerComplexSpecialProp = function (t, e, r) {
                    "object" != typeof e && (e = { parser: r });
                    var i,
                        s = t.split(","),
                        n = e.defaultValue;
                    for (r = r || [n], i = 0; i < s.length; i++) (e.prefix = 0 === i && e.prefix), (e.defaultValue = r[i] || n), new Tt(s[i], e);
                }),
                St = (s._registerPluginProp = function (t) {
                    if (!g[t]) {
                        var l = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                        Mt(t, {
                            parser: function (t, e, r, i, s, n, a) {
                                var o = f.com.greensock.plugins[l];
                                return o ? (o._cssRegister(), g[r].parse(t, e, r, i, s, n, a)) : (U("Error: " + l + " js file not loaded."), s);
                            },
                        });
                    }
                });
            ((t = Tt.prototype).parseComplex = function (t, e, r, i, s, n) {
                var a,
                    o,
                    l,
                    f,
                    p,
                    h,
                    c = this.keyword;
                if ((this.multi && (z.test(r) || z.test(e) ? ((o = e.replace(z, "|").split("|")), (l = r.replace(z, "|").split("|"))) : c && ((o = [e]), (l = [r]))), l)) {
                    for (f = l.length > o.length ? l.length : o.length, a = 0; a < f; a++)
                        (e = o[a] = o[a] || this.dflt), (r = l[a] = l[a] || this.dflt), c && (p = e.indexOf(c)) !== (h = r.indexOf(c)) && (-1 === h ? (o[a] = o[a].split(c).join("")) : -1 === p && (o[a] += " " + c));
                    (e = o.join(", ")), (r = l.join(", "));
                }
                return wt(t, this.p, e, r, this.clrs, this.dflt, i, this.pr, s, n);
            }),
                (t.parse = function (t, e, r, i, s, n, a) {
                    return this.parseComplex(t.style, this.format(et(t, this.p, M, !1, this.dflt)), this.format(e), s, n);
                }),
                (I.registerSpecialProp = function (t, l, f) {
                    Mt(t, {
                        parser: function (t, e, r, i, s, n, a) {
                            var o = new bt(t, r, 0, 0, s, 2, r, !1, f);
                            return (o.plugin = n), (o.setRatio = l(t, e, i._tween, r)), o;
                        },
                        priority: f,
                    });
                }),
                (I.useSVGTransformAttr = !0);
            var Xt,
                kt,
                At,
                Ft,
                Rt,
                Ct = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                Yt = K("transform"),
                zt = Q + "transform",
                Nt = K("transformOrigin"),
                Bt = null !== K("perspective"),
                jt = (s.Transform = function () {
                    (this.perspective = parseFloat(I.defaultTransformPerspective) || 0), (this.force3D = !(!1 === I.defaultForce3D || !Bt) && (I.defaultForce3D || "auto"));
                }),
                Vt = _gsScope.SVGElement,
                Lt = function (t, e, r) {
                    var i,
                        s = j.createElementNS("http://www.w3.org/2000/svg", t),
                        n = /([a-z])([A-Z])/g;
                    for (i in r) s.setAttributeNS(null, i.replace(n, "$1-$2").toLowerCase(), r[i]);
                    return e.appendChild(s), s;
                },
                It = j.documentElement || {},
                Dt =
                    ((Rt = T || (/Android/i.test(q) && !_gsScope.chrome)),
                    j.createElementNS &&
                        !Rt &&
                        ((Ft = (At = Lt("rect", (kt = Lt("svg", It)), { width: 100, height: 50, x: 100 })).getBoundingClientRect().width),
                        (At.style[Nt] = "50% 50%"),
                        (At.style[Yt] = "scaleX(0.5)"),
                        (Rt = Ft === At.getBoundingClientRect().width && !(D && Bt)),
                        It.removeChild(kt)),
                    Rt),
                Wt = function (t, e, r, i, s, n) {
                    var a,
                        o,
                        l,
                        f,
                        p,
                        h,
                        c,
                        u,
                        x,
                        d,
                        g,
                        y,
                        m,
                        _,
                        v = t._gsTransform,
                        b = qt(t, !0);
                    v && ((m = v.xOrigin), (_ = v.yOrigin)),
                        (!i || (a = i.split(" ")).length < 2) &&
                            (0 === (c = t.getBBox()).x &&
                                0 === c.y &&
                                c.width + c.height === 0 &&
                                (c = {
                                    x: parseFloat(t.hasAttribute("x") ? t.getAttribute("x") : t.hasAttribute("cx") ? t.getAttribute("cx") : 0) || 0,
                                    y: parseFloat(t.hasAttribute("y") ? t.getAttribute("y") : t.hasAttribute("cy") ? t.getAttribute("cy") : 0) || 0,
                                    width: 0,
                                    height: 0,
                                }),
                            (a = [(-1 !== (e = ft(e).split(" "))[0].indexOf("%") ? (parseFloat(e[0]) / 100) * c.width : parseFloat(e[0])) + c.x, (-1 !== e[1].indexOf("%") ? (parseFloat(e[1]) / 100) * c.height : parseFloat(e[1])) + c.y])),
                        (r.xOrigin = f = parseFloat(a[0])),
                        (r.yOrigin = p = parseFloat(a[1])),
                        i &&
                            b !== Ht &&
                            ((h = b[0]),
                            (c = b[1]),
                            (u = b[2]),
                            (x = b[3]),
                            (d = b[4]),
                            (g = b[5]),
                            (y = h * x - c * u) && ((o = f * (x / y) + p * (-u / y) + (u * g - x * d) / y), (l = f * (-c / y) + p * (h / y) - (h * g - c * d) / y), (f = r.xOrigin = a[0] = o), (p = r.yOrigin = a[1] = l))),
                        v &&
                            (n && ((r.xOffset = v.xOffset), (r.yOffset = v.yOffset), (v = r)),
                            s || (!1 !== s && !1 !== I.defaultSmoothOrigin) ? ((o = f - m), (l = p - _), (v.xOffset += o * b[0] + l * b[2] - o), (v.yOffset += o * b[1] + l * b[3] - l)) : (v.xOffset = v.yOffset = 0)),
                        n || t.setAttribute("data-svg-origin", a.join(" "));
                },
                Et = function (t) {
                    var e,
                        r = V("svg", (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"),
                        i = this.parentNode,
                        s = this.nextSibling,
                        n = this.style.cssText;
                    if ((It.appendChild(r), r.appendChild(this), (this.style.display = "block"), t))
                        try {
                            (e = this.getBBox()), (this._originalGetBBox = this.getBBox), (this.getBBox = Et);
                        } catch (t) {}
                    else this._originalGetBBox && (e = this._originalGetBBox());
                    return s ? i.insertBefore(this, s) : i.appendChild(this), It.removeChild(r), (this.style.cssText = n), e;
                },
                Zt = function (t) {
                    return !(
                        !Vt ||
                        !t.getCTM ||
                        (t.parentNode && !t.ownerSVGElement) ||
                        !(function (e) {
                            try {
                                return e.getBBox();
                            } catch (t) {
                                return Et.call(e, !0);
                            }
                        })(t)
                    );
                },
                Ht = [1, 0, 0, 1, 0, 0],
                qt = function (t, e) {
                    var r,
                        i,
                        s,
                        n,
                        a,
                        o,
                        l = t._gsTransform || new jt(),
                        f = t.style;
                    if (
                        (Yt
                            ? (i = et(t, zt, null, !0))
                            : t.currentStyle && (i = (i = t.currentStyle.filter.match(c)) && 4 === i.length ? [i[0].substr(4), Number(i[2].substr(4)), Number(i[1].substr(4)), i[3].substr(4), l.x || 0, l.y || 0].join(",") : ""),
                        (r = !i || "none" === i || "matrix(1, 0, 0, 1, 0, 0)" === i),
                        !Yt ||
                            (!(o = !tt(t) || "none" === tt(t).display) && t.parentNode) ||
                            (o && ((n = f.display), (f.display = "block")),
                            t.parentNode || ((a = 1), It.appendChild(t)),
                            (r = !(i = et(t, zt, null, !0)) || "none" === i || "matrix(1, 0, 0, 1, 0, 0)" === i),
                            n ? (f.display = n) : o && Jt(f, "display"),
                            a && It.removeChild(t)),
                        (l.svg || (t.getCTM && Zt(t))) &&
                            (r && -1 !== (f[Yt] + "").indexOf("matrix") && ((i = f[Yt]), (r = 0)),
                            (s = t.getAttribute("transform")),
                            r && s && (-1 !== s.indexOf("matrix") ? ((i = s), (r = 0)) : -1 !== s.indexOf("translate") && ((i = "matrix(1,0,0,1," + s.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")"), (r = 0)))),
                        r)
                    )
                        return Ht;
                    for (s = (i || "").match(A) || [], Pt = s.length; -1 < --Pt; ) (n = Number(s[Pt])), (s[Pt] = (a = n - (n |= 0)) ? ((1e5 * a + (a < 0 ? -0.5 : 0.5)) | 0) / 1e5 + n : n);
                    return e && 6 < s.length ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s;
                },
                Gt = (s.getTransform = function (t, e, r, i) {
                    if (t._gsTransform && r && !i) return t._gsTransform;
                    var s,
                        n,
                        a,
                        o,
                        l,
                        f,
                        p = (r && t._gsTransform) || new jt(),
                        h = p.scaleX < 0,
                        c = (Bt && (parseFloat(et(t, Nt, e, !1, "0 0 0").split(" ")[2]) || p.zOrigin)) || 0,
                        u = parseFloat(I.defaultTransformPerspective) || 0;
                    if (((p.svg = !(!t.getCTM || !Zt(t))), p.svg && (Wt(t, et(t, Nt, e, !1, "50% 50%") + "", p, t.getAttribute("data-svg-origin")), (Xt = I.useSVGTransformAttr || Dt)), (s = qt(t)) !== Ht)) {
                        if (16 === s.length) {
                            var x,
                                d,
                                g,
                                y,
                                m,
                                _ = s[0],
                                v = s[1],
                                b = s[2],
                                O = s[3],
                                w = s[4],
                                P = s[5],
                                T = s[6],
                                M = s[7],
                                S = s[8],
                                X = s[9],
                                k = s[10],
                                A = s[12],
                                F = s[13],
                                R = s[14],
                                C = s[11],
                                Y = Math.atan2(T, k);
                            p.zOrigin && ((A = S * (R = -p.zOrigin) - s[12]), (F = X * R - s[13]), (R = k * R + p.zOrigin - s[14])),
                                (p.rotationX = Y * E),
                                Y &&
                                    ((x = w * (y = Math.cos(-Y)) + S * (m = Math.sin(-Y))),
                                    (d = P * y + X * m),
                                    (g = T * y + k * m),
                                    (S = w * -m + S * y),
                                    (X = P * -m + X * y),
                                    (k = T * -m + k * y),
                                    (C = M * -m + C * y),
                                    (w = x),
                                    (P = d),
                                    (T = g)),
                                (Y = Math.atan2(-b, k)),
                                (p.rotationY = Y * E),
                                Y && ((d = v * (y = Math.cos(-Y)) - X * (m = Math.sin(-Y))), (g = b * y - k * m), (X = v * m + X * y), (k = b * m + k * y), (C = O * m + C * y), (_ = x = _ * y - S * m), (v = d), (b = g)),
                                (Y = Math.atan2(v, _)),
                                (p.rotation = Y * E),
                                Y && ((x = _ * (y = Math.cos(Y)) + v * (m = Math.sin(Y))), (d = w * y + P * m), (g = S * y + X * m), (v = v * y - _ * m), (P = P * y - w * m), (X = X * y - S * m), (_ = x), (w = d), (S = g)),
                                p.rotationX && 359.9 < Math.abs(p.rotationX) + Math.abs(p.rotation) && ((p.rotationX = p.rotation = 0), (p.rotationY = 180 - p.rotationY)),
                                (Y = Math.atan2(w, P)),
                                (p.scaleX = ((1e5 * Math.sqrt(_ * _ + v * v + b * b) + 0.5) | 0) / 1e5),
                                (p.scaleY = ((1e5 * Math.sqrt(P * P + T * T) + 0.5) | 0) / 1e5),
                                (p.scaleZ = ((1e5 * Math.sqrt(S * S + X * X + k * k) + 0.5) | 0) / 1e5),
                                (_ /= p.scaleX),
                                (w /= p.scaleY),
                                (v /= p.scaleX),
                                (P /= p.scaleY),
                                2e-5 < Math.abs(Y) ? ((p.skewX = Y * E), (w = 0), "simple" !== p.skewType && (p.scaleY *= 1 / Math.cos(Y))) : (p.skewX = 0),
                                (p.perspective = C ? 1 / (C < 0 ? -C : C) : 0),
                                (p.x = A),
                                (p.y = F),
                                (p.z = R),
                                p.svg && ((p.x -= p.xOrigin - (p.xOrigin * _ - p.yOrigin * w)), (p.y -= p.yOrigin - (p.yOrigin * v - p.xOrigin * P)));
                        } else if (!Bt || i || !s.length || p.x !== s[4] || p.y !== s[5] || (!p.rotationX && !p.rotationY)) {
                            var z = 6 <= s.length,
                                N = z ? s[0] : 1,
                                B = s[1] || 0,
                                j = s[2] || 0,
                                V = z ? s[3] : 1;
                            (p.x = s[4] || 0),
                                (p.y = s[5] || 0),
                                (a = Math.sqrt(N * N + B * B)),
                                (o = Math.sqrt(V * V + j * j)),
                                (l = N || B ? Math.atan2(B, N) * E : p.rotation || 0),
                                (f = j || V ? Math.atan2(j, V) * E + l : p.skewX || 0),
                                (p.scaleX = a),
                                (p.scaleY = o),
                                (p.rotation = l),
                                (p.skewX = f),
                                Bt && ((p.rotationX = p.rotationY = p.z = 0), (p.perspective = u), (p.scaleZ = 1)),
                                p.svg && ((p.x -= p.xOrigin - (p.xOrigin * N + p.yOrigin * j)), (p.y -= p.yOrigin - (p.xOrigin * B + p.yOrigin * V)));
                        }
                        for (n in (90 < Math.abs(p.skewX) &&
                            Math.abs(p.skewX) < 270 &&
                            (h ? ((p.scaleX *= -1), (p.skewX += p.rotation <= 0 ? 180 : -180), (p.rotation += p.rotation <= 0 ? 180 : -180)) : ((p.scaleY *= -1), (p.skewX += p.skewX <= 0 ? 180 : -180))),
                        (p.zOrigin = c),
                        p))
                            p[n] < 2e-5 && -2e-5 < p[n] && (p[n] = 0);
                    }
                    return (
                        r &&
                            (t._gsTransform = p).svg &&
                            (Xt && t.style[Yt]
                                ? L.delayedCall(0.001, function () {
                                      Jt(t.style, Yt);
                                  })
                                : !Xt &&
                                  t.getAttribute("transform") &&
                                  L.delayedCall(0.001, function () {
                                      t.removeAttribute("transform");
                                  })),
                        p
                    );
                }),
                $t = function (t) {
                    var e,
                        r,
                        i = this.data,
                        s = -i.rotation * W,
                        n = s + i.skewX * W,
                        a = 1e5,
                        o = ((Math.cos(s) * i.scaleX * a) | 0) / a,
                        l = ((Math.sin(s) * i.scaleX * a) | 0) / a,
                        f = ((Math.sin(n) * -i.scaleY * a) | 0) / a,
                        p = ((Math.cos(n) * i.scaleY * a) | 0) / a,
                        h = this.t.style,
                        c = this.t.currentStyle;
                    if (c) {
                        (r = l), (l = -f), (f = -r), (e = c.filter), (h.filter = "");
                        var u,
                            x,
                            d = this.t.offsetWidth,
                            g = this.t.offsetHeight,
                            y = "absolute" !== c.position,
                            m = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + l + ", M21=" + f + ", M22=" + p,
                            _ = i.x + (d * i.xPercent) / 100,
                            v = i.y + (g * i.yPercent) / 100;
                        if (
                            (null != i.ox && ((_ += (u = (i.oxp ? d * i.ox * 0.01 : i.ox) - d / 2) - (u * o + (x = (i.oyp ? g * i.oy * 0.01 : i.oy) - g / 2) * l)), (v += x - (u * f + x * p))),
                            (m += y ? ", Dx=" + ((u = d / 2) - (u * o + (x = g / 2) * l) + _) + ", Dy=" + (x - (u * f + x * p) + v) + ")" : ", sizingMethod='auto expand')"),
                            -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? (h.filter = e.replace(Y, m)) : (h.filter = m + " " + e),
                            (0 !== t && 1 !== t) ||
                                (1 === o && 0 === l && 0 === f && 1 === p && ((y && -1 === m.indexOf("Dx=0, Dy=0")) || (C.test(e) && 100 !== parseFloat(RegExp.$1)) || (-1 === e.indexOf(e.indexOf("Alpha")) && h.removeAttribute("filter")))),
                            !y)
                        ) {
                            var b,
                                O,
                                w,
                                P = T < 8 ? 1 : -1;
                            for (
                                u = i.ieOffsetX || 0,
                                    x = i.ieOffsetY || 0,
                                    i.ieOffsetX = Math.round((d - ((o < 0 ? -o : o) * d + (l < 0 ? -l : l) * g)) / 2 + _),
                                    i.ieOffsetY = Math.round((g - ((p < 0 ? -p : p) * g + (f < 0 ? -f : f) * d)) / 2 + v),
                                    Pt = 0;
                                Pt < 4;
                                Pt++
                            )
                                (w =
                                    (r = -1 !== (b = c[(O = ot[Pt])]).indexOf("px") ? parseFloat(b) : rt(this.t, O, parseFloat(b), b.replace(R, "")) || 0) !== i[O]
                                        ? Pt < 2
                                            ? -i.ieOffsetX
                                            : -i.ieOffsetY
                                        : Pt < 2
                                        ? u - i.ieOffsetX
                                        : x - i.ieOffsetY),
                                    (h[O] = (i[O] = Math.round(r - w * (0 === Pt || 2 === Pt ? 1 : P))) + "px");
                        }
                    }
                },
                Ut = (s.set3DTransformRatio = s.setTransformRatio = function (t) {
                    var e,
                        r,
                        i,
                        s,
                        n,
                        a,
                        o,
                        l,
                        f,
                        p,
                        h,
                        c,
                        u,
                        x,
                        d,
                        g,
                        y,
                        m,
                        _,
                        v,
                        b,
                        O,
                        w,
                        P = this.data,
                        T = this.t.style,
                        M = P.rotation,
                        S = P.rotationX,
                        X = P.rotationY,
                        k = P.scaleX,
                        A = P.scaleY,
                        F = P.scaleZ,
                        R = P.x,
                        C = P.y,
                        Y = P.z,
                        z = P.svg,
                        N = P.perspective,
                        B = P.force3D,
                        j = P.skewY,
                        V = P.skewX;
                    if ((j && ((V += j), (M += j)), !((((1 !== t && 0 !== t) || "auto" !== B || (this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime)) && B) || Y || N || X || S || 1 !== F) || (Xt && z) || !Bt))
                        M || V || z
                            ? ((M *= W),
                              (O = V * W),
                              (w = 1e5),
                              (r = Math.cos(M) * k),
                              (n = Math.sin(M) * k),
                              (i = Math.sin(M - O) * -A),
                              (a = Math.cos(M - O) * A),
                              O && "simple" === P.skewType && ((e = Math.tan(O - j * W)), (i *= e = Math.sqrt(1 + e * e)), (a *= e), j && ((e = Math.tan(j * W)), (r *= e = Math.sqrt(1 + e * e)), (n *= e))),
                              z &&
                                  ((R += P.xOrigin - (P.xOrigin * r + P.yOrigin * i) + P.xOffset),
                                  (C += P.yOrigin - (P.xOrigin * n + P.yOrigin * a) + P.yOffset),
                                  Xt && (P.xPercent || P.yPercent) && ((d = this.t.getBBox()), (R += 0.01 * P.xPercent * d.width), (C += 0.01 * P.yPercent * d.height)),
                                  R < (d = 1e-6) && -d < R && (R = 0),
                                  C < d && -d < C && (C = 0)),
                              (_ = ((r * w) | 0) / w + "," + ((n * w) | 0) / w + "," + ((i * w) | 0) / w + "," + ((a * w) | 0) / w + "," + R + "," + C + ")"),
                              z && Xt ? this.t.setAttribute("transform", "matrix(" + _) : (T[Yt] = (P.xPercent || P.yPercent ? "translate(" + P.xPercent + "%," + P.yPercent + "%) matrix(" : "matrix(") + _))
                            : (T[Yt] = (P.xPercent || P.yPercent ? "translate(" + P.xPercent + "%," + P.yPercent + "%) matrix(" : "matrix(") + k + ",0,0," + A + "," + R + "," + C + ")");
                    else {
                        if ((D && (k < (d = 1e-4) && -d < k && (k = F = 2e-5), A < d && -d < A && (A = F = 2e-5), !N || P.z || P.rotationX || P.rotationY || (N = 0)), M || V))
                            (M *= W),
                                (g = r = Math.cos(M)),
                                (y = n = Math.sin(M)),
                                V &&
                                    ((M -= V * W),
                                    (g = Math.cos(M)),
                                    (y = Math.sin(M)),
                                    "simple" === P.skewType && ((e = Math.tan((V - j) * W)), (g *= e = Math.sqrt(1 + e * e)), (y *= e), P.skewY && ((e = Math.tan(j * W)), (r *= e = Math.sqrt(1 + e * e)), (n *= e)))),
                                (i = -y),
                                (a = g);
                        else {
                            if (!(X || S || 1 !== F || N || z))
                                return void (T[Yt] =
                                    (P.xPercent || P.yPercent ? "translate(" + P.xPercent + "%," + P.yPercent + "%) translate3d(" : "translate3d(") +
                                    R +
                                    "px," +
                                    C +
                                    "px," +
                                    Y +
                                    "px)" +
                                    (1 !== k || 1 !== A ? " scale(" + k + "," + A + ")" : ""));
                            (r = a = 1), (i = n = 0);
                        }
                        (p = 1),
                            (s = o = l = f = h = c = 0),
                            (u = N ? -1 / N : 0),
                            (x = P.zOrigin),
                            (d = 1e-6),
                            (v = ","),
                            (b = "0"),
                            (M = X * W) && ((g = Math.cos(M)), (h = u * (l = -(y = Math.sin(M)))), (s = r * y), (o = n * y), (u *= p = g), (r *= g), (n *= g)),
                            (M = S * W) && ((e = i * (g = Math.cos(M)) + s * (y = Math.sin(M))), (m = a * g + o * y), (f = p * y), (c = u * y), (s = i * -y + s * g), (o = a * -y + o * g), (p *= g), (u *= g), (i = e), (a = m)),
                            1 !== F && ((s *= F), (o *= F), (p *= F), (u *= F)),
                            1 !== A && ((i *= A), (a *= A), (f *= A), (c *= A)),
                            1 !== k && ((r *= k), (n *= k), (l *= k), (h *= k)),
                            (x || z) &&
                                (x && ((R += s * -x), (C += o * -x), (Y += p * -x + x)),
                                z && ((R += P.xOrigin - (P.xOrigin * r + P.yOrigin * i) + P.xOffset), (C += P.yOrigin - (P.xOrigin * n + P.yOrigin * a) + P.yOffset)),
                                R < d && -d < R && (R = b),
                                C < d && -d < C && (C = b),
                                Y < d && -d < Y && (Y = 0)),
                            (_ = P.xPercent || P.yPercent ? "translate(" + P.xPercent + "%," + P.yPercent + "%) matrix3d(" : "matrix3d("),
                            (_ += (r < d && -d < r ? b : r) + v + (n < d && -d < n ? b : n) + v + (l < d && -d < l ? b : l)),
                            (_ += v + (h < d && -d < h ? b : h) + v + (i < d && -d < i ? b : i) + v + (a < d && -d < a ? b : a)),
                            S || X || 1 !== F
                                ? ((_ += v + (f < d && -d < f ? b : f) + v + (c < d && -d < c ? b : c) + v + (s < d && -d < s ? b : s)),
                                  (_ += v + (o < d && -d < o ? b : o) + v + (p < d && -d < p ? b : p) + v + (u < d && -d < u ? b : u) + v))
                                : (_ += ",0,0,0,0,1,0,"),
                            (_ += R + v + C + v + Y + v + (N ? 1 + -Y / N : 1) + ")"),
                            (T[Yt] = _);
                    }
                });
            ((t = jt.prototype).x = t.y = t.z = t.skewX = t.skewY = t.rotation = t.rotationX = t.rotationY = t.zOrigin = t.xPercent = t.yPercent = t.xOffset = t.yOffset = 0),
                (t.scaleX = t.scaleY = t.scaleZ = 1),
                Mt(
                    "transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",
                    {
                        parser: function (t, e, r, i, s, n, a) {
                            if (i._lastParsedTransform === a) return s;
                            var o,
                                l = (i._lastParsedTransform = a).scale && "function" == typeof a.scale ? a.scale : 0;
                            "function" == typeof a[r] && ((o = a[r]), (a[r] = e)), l && (a.scale = l(k, t));
                            var f,
                                p,
                                h,
                                c,
                                u,
                                x,
                                d,
                                g,
                                y,
                                m = t._gsTransform,
                                _ = t.style,
                                v = Ct.length,
                                b = a,
                                O = {},
                                w = "transformOrigin",
                                P = Gt(t, M, !0, b.parseTransform),
                                T = b.transform && ("function" == typeof b.transform ? b.transform(k, X) : b.transform);
                            if (((P.skewType = b.skewType || P.skewType || I.defaultSkewType), (i._transform = P), T && "string" == typeof T && Yt))
                                ((p = Z.style)[Yt] = T),
                                    (p.display = "block"),
                                    (p.position = "absolute"),
                                    j.body.appendChild(Z),
                                    (f = Gt(Z, null, !1)),
                                    "simple" === P.skewType && (f.scaleY *= Math.cos(f.skewX * W)),
                                    P.svg &&
                                        ((x = P.xOrigin),
                                        (d = P.yOrigin),
                                        (f.x -= P.xOffset),
                                        (f.y -= P.yOffset),
                                        (b.transformOrigin || b.svgOrigin) &&
                                            ((T = {}), Wt(t, ft(b.transformOrigin), T, b.svgOrigin, b.smoothOrigin, !0), (x = T.xOrigin), (d = T.yOrigin), (f.x -= T.xOffset - P.xOffset), (f.y -= T.yOffset - P.yOffset)),
                                        (x || d) && ((g = qt(Z, !0)), (f.x -= x - (x * g[0] + d * g[2])), (f.y -= d - (x * g[1] + d * g[3])))),
                                    j.body.removeChild(Z),
                                    f.perspective || (f.perspective = P.perspective),
                                    null != b.xPercent && (f.xPercent = ht(b.xPercent, P.xPercent)),
                                    null != b.yPercent && (f.yPercent = ht(b.yPercent, P.yPercent));
                            else if ("object" == typeof b) {
                                if (
                                    ((f = {
                                        scaleX: ht(null != b.scaleX ? b.scaleX : b.scale, P.scaleX),
                                        scaleY: ht(null != b.scaleY ? b.scaleY : b.scale, P.scaleY),
                                        scaleZ: ht(b.scaleZ, P.scaleZ),
                                        x: ht(b.x, P.x),
                                        y: ht(b.y, P.y),
                                        z: ht(b.z, P.z),
                                        xPercent: ht(b.xPercent, P.xPercent),
                                        yPercent: ht(b.yPercent, P.yPercent),
                                        perspective: ht(b.transformPerspective, P.perspective),
                                    }),
                                    null != (u = b.directionalRotation))
                                )
                                    if ("object" == typeof u) for (p in u) b[p] = u[p];
                                    else b.rotation = u;
                                "string" == typeof b.x && -1 !== b.x.indexOf("%") && ((f.x = 0), (f.xPercent = ht(b.x, P.xPercent))),
                                    "string" == typeof b.y && -1 !== b.y.indexOf("%") && ((f.y = 0), (f.yPercent = ht(b.y, P.yPercent))),
                                    (f.rotation = ct("rotation" in b ? b.rotation : "shortRotation" in b ? b.shortRotation + "_short" : "rotationZ" in b ? b.rotationZ : P.rotation, P.rotation, "rotation", O)),
                                    Bt &&
                                        ((f.rotationX = ct("rotationX" in b ? b.rotationX : "shortRotationX" in b ? b.shortRotationX + "_short" : P.rotationX || 0, P.rotationX, "rotationX", O)),
                                        (f.rotationY = ct("rotationY" in b ? b.rotationY : "shortRotationY" in b ? b.shortRotationY + "_short" : P.rotationY || 0, P.rotationY, "rotationY", O))),
                                    (f.skewX = ct(b.skewX, P.skewX)),
                                    (f.skewY = ct(b.skewY, P.skewY));
                            }
                            for (
                                Bt && null != b.force3D && ((P.force3D = b.force3D), (c = !0)), (h = P.force3D || P.z || P.rotationX || P.rotationY || f.z || f.rotationX || f.rotationY || f.perspective) || null == b.scale || (f.scaleZ = 1);
                                -1 < --v;

                            )
                                (1e-6 < (T = f[(y = Ct[v])] - P[y]) || T < -1e-6 || null != b[y] || null != B[y]) &&
                                    ((c = !0), (s = new bt(P, y, P[y], T, s)), y in O && (s.e = O[y]), (s.xs0 = 0), (s.plugin = n), i._overwriteProps.push(s.n));
                            return (
                                (T = b.transformOrigin),
                                P.svg &&
                                    (T || b.svgOrigin) &&
                                    ((x = P.xOffset),
                                    (d = P.yOffset),
                                    Wt(t, ft(T), f, b.svgOrigin, b.smoothOrigin),
                                    (s = Ot(P, "xOrigin", (m ? P : f).xOrigin, f.xOrigin, s, w)),
                                    (s = Ot(P, "yOrigin", (m ? P : f).yOrigin, f.yOrigin, s, w)),
                                    (x === P.xOffset && d === P.yOffset) || ((s = Ot(P, "xOffset", m ? x : P.xOffset, P.xOffset, s, w)), (s = Ot(P, "yOffset", m ? d : P.yOffset, P.yOffset, s, w))),
                                    (T = "0px 0px")),
                                (T || (Bt && h && P.zOrigin)) &&
                                    (Yt
                                        ? ((c = !0),
                                          (y = Nt),
                                          (T = (T || et(t, y, M, !1, "50% 50%")) + ""),
                                          ((s = new bt(_, y, 0, 0, s, -1, w)).b = _[y]),
                                          (s.plugin = n),
                                          (s.xs0 = s.e = Bt
                                              ? ((p = P.zOrigin),
                                                (T = T.split(" ")),
                                                (P.zOrigin = (2 < T.length && (0 === p || "0px" !== T[2]) ? parseFloat(T[2]) : p) || 0),
                                                (s.xs0 = s.e = T[0] + " " + (T[1] || "50%") + " 0px"),
                                                ((s = new bt(P, "zOrigin", 0, 0, s, -1, s.n)).b = p),
                                                P.zOrigin)
                                              : T))
                                        : ft(T + "", P)),
                                c && (i._transformType = (P.svg && Xt) || (!h && 3 !== this._transformType) ? 2 : 3),
                                o && (a[r] = o),
                                l && (a.scale = l),
                                s
                            );
                        },
                        prefix: !0,
                    }
                ),
                Mt("boxShadow", { defaultValue: "0px 0px 0px 0px #999", prefix: !0, color: !0, multi: !0, keyword: "inset" }),
                Mt("borderRadius", {
                    defaultValue: "0px",
                    parser: function (t, e, r, i, s, n) {
                        e = this.format(e);
                        var a,
                            o,
                            l,
                            f,
                            p,
                            h,
                            c,
                            u,
                            x,
                            d,
                            g,
                            y,
                            m,
                            _,
                            v,
                            b,
                            O = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            w = t.style;
                        for (x = parseFloat(t.offsetWidth), d = parseFloat(t.offsetHeight), a = e.split(" "), o = 0; o < O.length; o++)
                            this.p.indexOf("border") && (O[o] = K(O[o])),
                                -1 !== (p = f = et(t, O[o], M, !1, "0px")).indexOf(" ") && ((p = (f = p.split(" "))[0]), (f = f[1])),
                                (h = l = a[o]),
                                (c = parseFloat(p)),
                                (y = p.substr((c + "").length)),
                                "" ===
                                    (g = (m = "=" === h.charAt(1))
                                        ? ((u = parseInt(h.charAt(0) + "1", 10)), (h = h.substr(2)), (u *= parseFloat(h)), h.substr((u + "").length - (u < 0 ? 1 : 0)) || "")
                                        : ((u = parseFloat(h)), h.substr((u + "").length))) && (g = P[r] || y),
                                g !== y &&
                                    ((_ = rt(t, "borderLeft", c, y)),
                                    (v = rt(t, "borderTop", c, y)),
                                    (f = "%" === g ? ((p = (_ / x) * 100 + "%"), (v / d) * 100 + "%") : "em" === g ? ((p = _ / (b = rt(t, "borderLeft", 1, "em")) + "em"), v / b + "em") : ((p = _ + "px"), v + "px")),
                                    m && ((h = parseFloat(p) + u + g), (l = parseFloat(f) + u + g))),
                                (s = wt(w, O[o], p + " " + f, h + " " + l, !1, "0px", s));
                        return s;
                    },
                    prefix: !0,
                    formatter: mt("0px 0px 0px 0px", !1, !0),
                }),
                Mt("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                    defaultValue: "0px",
                    parser: function (t, e, r, i, s, n) {
                        return wt(t.style, r, this.format(et(t, r, M, !1, "0px 0px")), this.format(e), !1, "0px", s);
                    },
                    prefix: !0,
                    formatter: mt("0px 0px", !1, !0),
                }),
                Mt("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function (t, e, r, i, s, n) {
                        var a,
                            o,
                            l,
                            f,
                            p,
                            h,
                            c = "background-position",
                            u = M || tt(t, null),
                            x = this.format((u ? (T ? u.getPropertyValue(c + "-x") + " " + u.getPropertyValue(c + "-y") : u.getPropertyValue(c)) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                            d = this.format(e);
                        if ((-1 !== x.indexOf("%")) != (-1 !== d.indexOf("%")) && d.split(",").length < 2 && (h = et(t, "backgroundImage").replace(w, "")) && "none" !== h) {
                            for (a = x.split(" "), o = d.split(" "), H.setAttribute("src", h), l = 2; -1 < --l; )
                                (f = -1 !== (x = a[l]).indexOf("%")) != (-1 !== o[l].indexOf("%")) &&
                                    ((p = 0 === l ? t.offsetWidth - H.width : t.offsetHeight - H.height), (a[l] = f ? (parseFloat(x) / 100) * p + "px" : (parseFloat(x) / p) * 100 + "%"));
                            x = a.join(" ");
                        }
                        return this.parseComplex(t.style, x, d, s, n);
                    },
                    formatter: ft,
                }),
                Mt("backgroundSize", {
                    defaultValue: "0 0",
                    formatter: function (t) {
                        return ft(-1 === (t += "").indexOf(" ") ? t + " " + t : t);
                    },
                }),
                Mt("perspective", { defaultValue: "0px", prefix: !0 }),
                Mt("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 }),
                Mt("transformStyle", { prefix: !0 }),
                Mt("backfaceVisibility", { prefix: !0 }),
                Mt("userSelect", { prefix: !0 }),
                Mt("margin", { parser: _t("marginTop,marginRight,marginBottom,marginLeft") }),
                Mt("padding", { parser: _t("paddingTop,paddingRight,paddingBottom,paddingLeft") }),
                Mt("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function (t, e, r, i, s, n) {
                        var a, o, l;
                        return (
                            (e =
                                T < 9
                                    ? ((o = t.currentStyle), (l = T < 8 ? " " : ","), (a = "rect(" + o.clipTop + l + o.clipRight + l + o.clipBottom + l + o.clipLeft + ")"), this.format(e).split(",").join(l))
                                    : ((a = this.format(et(t, this.p, M, !1, this.dflt))), this.format(e))),
                            this.parseComplex(t.style, a, e, s, n)
                        );
                    },
                }),
                Mt("textShadow", { defaultValue: "0px 0px 0px #999", color: !0, multi: !0 }),
                Mt("autoRound,strictUnits", {
                    parser: function (t, e, r, i, s) {
                        return s;
                    },
                }),
                Mt("border", {
                    defaultValue: "0px solid #000",
                    parser: function (t, e, r, i, s, n) {
                        var a = et(t, "borderTopWidth", M, !1, "0px"),
                            o = this.format(e).split(" "),
                            l = o[0].replace(R, "");
                        return (
                            "px" !== l && (a = parseFloat(a) / rt(t, "borderTopWidth", 1, l) + l),
                            this.parseComplex(t.style, this.format(a + " " + et(t, "borderTopStyle", M, !1, "solid") + " " + et(t, "borderTopColor", M, !1, "#000")), o.join(" "), s, n)
                        );
                    },
                    color: !0,
                    formatter: function (t) {
                        var e = t.split(" ");
                        return e[0] + " " + (e[1] || "solid") + " " + (t.match(yt) || ["#000"])[0];
                    },
                }),
                Mt("borderWidth", { parser: _t("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth") }),
                Mt("float,cssFloat,styleFloat", {
                    parser: function (t, e, r, i, s, n) {
                        var a = t.style,
                            o = "cssFloat" in a ? "cssFloat" : "styleFloat";
                        return new bt(a, o, 0, 0, s, -1, r, !1, 0, a[o], e);
                    },
                });
            var Qt = function (t) {
                var e,
                    r = this.t,
                    i = r.filter || et(this.data, "filter") || "",
                    s = (this.s + this.c * t) | 0;
                100 === s && (e = -1 === i.indexOf("atrix(") && -1 === i.indexOf("radient(") && -1 === i.indexOf("oader(") ? (r.removeAttribute("filter"), !et(this.data, "filter")) : ((r.filter = i.replace(a, "")), !0)),
                    e || (this.xn1 && (r.filter = i = i || "alpha(opacity=" + s + ")"), -1 === i.indexOf("pacity") ? (0 === s && this.xn1) || (r.filter = i + " alpha(opacity=" + s + ")") : (r.filter = i.replace(C, "opacity=" + s)));
            };
            Mt("opacity,alpha,autoAlpha", {
                defaultValue: "1",
                parser: function (t, e, r, i, s, n) {
                    var a = parseFloat(et(t, "opacity", M, !1, "1")),
                        o = t.style,
                        l = "autoAlpha" === r;
                    return (
                        "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a),
                        l && 1 === a && "hidden" === et(t, "visibility", M) && 0 !== e && (a = 0),
                        G
                            ? (s = new bt(o, "opacity", a, e - a, s))
                            : (((s = new bt(o, "opacity", 100 * a, 100 * (e - a), s)).xn1 = l ? 1 : 0),
                              (o.zoom = 1),
                              (s.type = 2),
                              (s.b = "alpha(opacity=" + s.s + ")"),
                              (s.e = "alpha(opacity=" + (s.s + s.c) + ")"),
                              (s.data = t),
                              (s.plugin = n),
                              (s.setRatio = Qt)),
                        l && (((s = new bt(o, "visibility", 0, 0, s, -1, null, !1, 0, 0 !== a ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit")).xs0 = "inherit"), i._overwriteProps.push(s.n), i._overwriteProps.push(r)),
                        s
                    );
                },
            });
            var Jt = function (t, e) {
                    e && (t.removeProperty ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) || (e = "-" + e), t.removeProperty(e.replace(o, "-$1").toLowerCase())) : t.removeAttribute(e));
                },
                Kt = function (t) {
                    if (((this.t._gsClassPT = this), 1 === t || 0 === t)) {
                        this.t.setAttribute("class", 0 === t ? this.b : this.e);
                        for (var e = this.data, r = this.t.style; e; ) e.v ? (r[e.p] = e.v) : Jt(r, e.p), (e = e._next);
                        1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null);
                    } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e);
                };
            Mt("className", {
                parser: function (t, e, r, i, s, n, a) {
                    var o,
                        l,
                        f,
                        p,
                        h,
                        c = t.getAttribute("class") || "",
                        u = t.style.cssText;
                    if ((((s = i._classNamePT = new bt(t, r, 0, 0, s, 2)).setRatio = Kt), (s.pr = -11), (x = !0), (s.b = c), (l = st(t, M)), (f = t._gsClassPT))) {
                        for (p = {}, h = f.data; h; ) (p[h.p] = 1), (h = h._next);
                        f.setRatio(1);
                    }
                    return (
                        ((t._gsClassPT = s).e = "=" !== e.charAt(1) ? e : c.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : "")),
                        t.setAttribute("class", s.e),
                        (o = nt(t, l, st(t), a, p)),
                        t.setAttribute("class", c),
                        (s.data = o.firstMPT),
                        (t.style.cssText = u),
                        (s.xfirst = i.parse(t, o.difs, s, n))
                    );
                },
            });
            var te = function (t) {
                if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                    var e,
                        r,
                        i,
                        s,
                        n,
                        a = this.t.style,
                        o = g.transform.parse;
                    if ("all" === this.e) s = !(a.cssText = "");
                    else for (i = (e = this.e.split(" ").join("").split(",")).length; -1 < --i; ) (r = e[i]), g[r] && (g[r].parse === o ? (s = !0) : (r = "transformOrigin" === r ? Nt : g[r].p)), Jt(a, r);
                    s && (Jt(a, Yt), (n = this.t._gsTransform) && (n.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform));
                }
            };
            for (
                Mt("clearProps", {
                    parser: function (t, e, r, i, s) {
                        return ((s = new bt(t, r, 0, 0, s, 2)).setRatio = te), (s.e = e), (s.pr = -10), (s.data = i._tween), (x = !0), s;
                    },
                }),
                    t = "bezier,throwProps,physicsProps,physics2D".split(","),
                    Pt = t.length;
                Pt--;

            )
                St(t[Pt]);
            ((t = I.prototype)._firstPT = t._lastParsedTransform = t._transform = null),
                (t._onInitTween = function (t, e, r, i) {
                    if (!t.nodeType) return !1;
                    (this._target = X = t), (this._tween = r), (this._vars = e), (k = i), (S = e.autoRound), (x = !1), (P = e.suffixMap || I.suffixMap), (M = tt(t, "")), (d = this._overwriteProps);
                    var s,
                        n,
                        a,
                        o,
                        l,
                        f,
                        p,
                        h,
                        c,
                        u = t.style;
                    if (
                        (y && "" === u.zIndex && (("auto" !== (s = et(t, "zIndex", M)) && "" !== s) || this._addLazySet(u, "zIndex", 0)),
                        "string" == typeof e && ((o = u.cssText), (s = st(t, M)), (u.cssText = o + ";" + e), (s = nt(t, s, st(t)).difs), !G && b.test(e) && (s.opacity = parseFloat(RegExp.$1)), (e = s), (u.cssText = o)),
                        e.className ? (this._firstPT = n = g.className.parse(t, e.className, "className", this, null, null, e)) : (this._firstPT = n = this.parse(t, e, null)),
                        this._transformType)
                    ) {
                        for (
                            c = 3 === this._transformType,
                                Yt
                                    ? m &&
                                      ((y = !0),
                                      "" === u.zIndex && (("auto" !== (p = et(t, "zIndex", M)) && "" !== p) || this._addLazySet(u, "zIndex", 0)),
                                      _ && this._addLazySet(u, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (c ? "visible" : "hidden")))
                                    : (u.zoom = 1),
                                a = n;
                            a && a._next;

                        )
                            a = a._next;
                        (h = new bt(t, "transform", 0, 0, null, 2)), this._linkCSSP(h, null, a), (h.setRatio = Yt ? Ut : $t), (h.data = this._transform || Gt(t, M, !0)), (h.tween = r), (h.pr = -1), d.pop();
                    }
                    if (x) {
                        for (; n; ) {
                            for (f = n._next, a = o; a && a.pr > n.pr; ) a = a._next;
                            (n._prev = a ? a._prev : l) ? (n._prev._next = n) : (o = n), (n._next = a) ? (a._prev = n) : (l = n), (n = f);
                        }
                        this._firstPT = o;
                    }
                    return !0;
                }),
                (t.parse = function (t, e, r, i) {
                    var s,
                        n,
                        a,
                        o,
                        l,
                        f,
                        p,
                        h,
                        c,
                        u,
                        x = t.style;
                    for (s in e) {
                        if (("function" == typeof (f = e[s]) && (f = f(k, X)), (n = g[s]))) r = n.parse(t, f, s, this, r, i, e);
                        else {
                            if ("--" === s.substr(0, 2)) {
                                this._tween._propLookup[s] = this._addTween.call(this._tween, t.style, "setProperty", tt(t).getPropertyValue(s) + "", f + "", s, !1, s);
                                continue;
                            }
                            (l = et(t, s, M) + ""),
                                (c = "string" == typeof f),
                                "color" === s || "fill" === s || "stroke" === s || -1 !== s.indexOf("Color") || (c && O.test(f))
                                    ? (c || (f = (3 < (f = dt(f)).length ? "rgba(" : "rgb(") + f.join(",") + ")"), (r = wt(x, s, l, f, !0, "transparent", r, 0, i)))
                                    : c && N.test(f)
                                    ? (r = wt(x, s, l, f, !0, null, r, 0, i))
                                    : ((p = (a = parseFloat(l)) || 0 === a ? l.substr((a + "").length) : ""),
                                      ("" !== l && "auto" !== l) || (p = "width" === s || "height" === s ? ((a = lt(t, s, M)), "px") : "left" === s || "top" === s ? ((a = it(t, s, M)), "px") : ((a = "opacity" !== s ? 0 : 1), "")),
                                      "" === (h = (u = c && "=" === f.charAt(1)) ? ((o = parseInt(f.charAt(0) + "1", 10)), (f = f.substr(2)), (o *= parseFloat(f)), f.replace(R, "")) : ((o = parseFloat(f)), c ? f.replace(R, "") : "")) &&
                                          (h = s in P ? P[s] : p),
                                      (f = o || 0 === o ? (u ? o + a : o) + h : e[s]),
                                      p !== h &&
                                          (("" === h && "lineHeight" !== s) ||
                                              ((o || 0 === o) &&
                                                  a &&
                                                  ((a = rt(t, s, a, p)),
                                                  "%" === h
                                                      ? ((a /= rt(t, s, 100, "%") / 100), !0 !== e.strictUnits && (l = a + "%"))
                                                      : "em" === h || "rem" === h || "vw" === h || "vh" === h
                                                      ? (a /= rt(t, s, 1, h))
                                                      : "px" !== h && ((o = rt(t, s, o, h)), (h = "px")),
                                                  u && (o || 0 === o) && (f = o + a + h)))),
                                      u && (o += a),
                                      (!a && 0 !== a) || (!o && 0 !== o)
                                          ? void 0 !== x[s] && (f || (f + "" != "NaN" && null != f))
                                              ? ((r = new bt(x, s, o || a || 0, 0, r, -1, s, !1, 0, l, f)).xs0 = "none" !== f || ("display" !== s && -1 === s.indexOf("Style")) ? f : l)
                                              : U("invalid " + s + " tween value: " + e[s])
                                          : ((r = new bt(x, s, a, o - a, r, 0, s, !1 !== S && ("px" === h || "zIndex" === s), 0, l, f)).xs0 = h));
                        }
                        i && r && !r.plugin && (r.plugin = i);
                    }
                    return r;
                }),
                (t.setRatio = function (t) {
                    var e,
                        r,
                        i,
                        s = this._firstPT;
                    if (1 !== t || (this._tween._time !== this._tween._duration && 0 !== this._tween._time))
                        if (t || (this._tween._time !== this._tween._duration && 0 !== this._tween._time) || -1e-6 === this._tween._rawPrevTime)
                            for (; s; ) {
                                if (((e = s.c * t + s.s), s.r ? (e = Math.round(e)) : e < 1e-6 && -1e-6 < e && (e = 0), s.type))
                                    if (1 === s.type)
                                        if (2 === (i = s.l)) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2;
                                        else if (3 === i) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3;
                                        else if (4 === i) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4;
                                        else if (5 === i) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4 + s.xn4 + s.xs5;
                                        else {
                                            for (r = s.xs0 + e + s.xs1, i = 1; i < s.l; i++) r += s["xn" + i] + s["xs" + (i + 1)];
                                            s.t[s.p] = r;
                                        }
                                    else -1 === s.type ? (s.t[s.p] = s.xs0) : s.setRatio && s.setRatio(t);
                                else s.t[s.p] = e + s.xs0;
                                s = s._next;
                            }
                        else for (; s; ) 2 !== s.type ? (s.t[s.p] = s.b) : s.setRatio(t), (s = s._next);
                    else
                        for (; s; ) {
                            if (2 !== s.type)
                                if (s.r && -1 !== s.type)
                                    if (((e = Math.round(s.s + s.c)), s.type)) {
                                        if (1 === s.type) {
                                            for (i = s.l, r = s.xs0 + e + s.xs1, i = 1; i < s.l; i++) r += s["xn" + i] + s["xs" + (i + 1)];
                                            s.t[s.p] = r;
                                        }
                                    } else s.t[s.p] = e + s.xs0;
                                else s.t[s.p] = s.e;
                            else s.setRatio(t);
                            s = s._next;
                        }
                }),
                (t._enableTransforms = function (t) {
                    (this._transform = this._transform || Gt(this._target, M, !0)), (this._transformType = (this._transform.svg && Xt) || (!t && 3 !== this._transformType) ? 2 : 3);
                });
            var ee = function (t) {
                (this.t[this.p] = this.e), this.data._linkCSSP(this, this._next, null, !0);
            };
            (t._addLazySet = function (t, e, r) {
                var i = (this._firstPT = new bt(t, e, 0, 0, this._firstPT, 2));
                (i.e = r), (i.setRatio = ee), (i.data = this);
            }),
                (t._linkCSSP = function (t, e, r, i) {
                    return (
                        t &&
                            (e && (e._prev = t),
                            t._next && (t._next._prev = t._prev),
                            t._prev ? (t._prev._next = t._next) : this._firstPT === t && ((this._firstPT = t._next), (i = !0)),
                            r ? (r._next = t) : i || null !== this._firstPT || (this._firstPT = t),
                            (t._next = e),
                            (t._prev = r)),
                        t
                    );
                }),
                (t._mod = function (t) {
                    for (var e = this._firstPT; e; ) "function" == typeof t[e.p] && t[e.p] === Math.round && (e.r = 1), (e = e._next);
                }),
                (t._kill = function (t) {
                    var e,
                        r,
                        i,
                        s = t;
                    if (t.autoAlpha || t.alpha) {
                        for (r in ((s = {}), t)) s[r] = t[r];
                        (s.opacity = 1), s.autoAlpha && (s.visibility = 1);
                    }
                    for (
                        t.className &&
                            (e = this._classNamePT) &&
                            ((i = e.xfirst) && i._prev ? this._linkCSSP(i._prev, e._next, i._prev._prev) : i === this._firstPT && (this._firstPT = e._next),
                            e._next && this._linkCSSP(e._next, e._next._next, i._prev),
                            (this._classNamePT = null)),
                            e = this._firstPT;
                        e;

                    )
                        e.plugin && e.plugin !== r && e.plugin._kill && (e.plugin._kill(t), (r = e.plugin)), (e = e._next);
                    return n.prototype._kill.call(this, s);
                });
            var re = function (t, e, r) {
                var i, s, n, a;
                if (t.slice) for (s = t.length; -1 < --s; ) re(t[s], e, r);
                else for (s = (i = t.childNodes).length; -1 < --s; ) (a = (n = i[s]).type), n.style && (e.push(st(n)), r && r.push(n)), (1 !== a && 9 !== a && 11 !== a) || !n.childNodes.length || re(n, e, r);
            };
            return (
                (I.cascadeTo = function (t, e, r) {
                    var i,
                        s,
                        n,
                        a,
                        o = L.to(t, e, r),
                        l = [o],
                        f = [],
                        p = [],
                        h = [],
                        c = L._internals.reservedProps;
                    for (t = o._targets || o.target, re(t, f, h), o.render(e, !0, !0), re(t, p), o.render(0, !0, !0), o._enabled(!0), i = h.length; -1 < --i; )
                        if ((s = nt(h[i], f[i], p[i])).firstMPT) {
                            for (n in ((s = s.difs), r)) c[n] && (s[n] = r[n]);
                            for (n in ((a = {}), s)) a[n] = f[i][n];
                            l.push(L.fromTo(h[i], e, a, s));
                        }
                    return l;
                }),
                n.activate([I]),
                I
            );
        },
        !0
    );
}),
    _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    (function (t) {
        "use strict";
        var e = function () {
            return (_gsScope.GreenSockGlobals || _gsScope).CSSPlugin;
        };
        "undefined" != typeof module && module.exports ? (require("../TweenLite.js"), (module.exports = e())) : "function" == typeof define && define.amd && define(["TweenLite"], e);
    })();
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
    "use strict";
    var h = (_gsScope.document || {}).documentElement,
        r = _gsScope,
        n = function (t, e) {
            var s = "x" === e ? "Width" : "Height",
                i = "scroll" + s,
                o = "client" + s,
                l = document.body;
            return t === r || t === h || t === l ? Math.max(h[i], l[i]) - (r["inner" + s] || h[o] || l[o]) : t[i] - t["offset" + s];
        },
        u = function (t, e) {
            var s = "scroll" + ("x" === e ? "Left" : "Top");
            return (
                t === r && (null != t.pageXOffset ? (s = "page" + e.toUpperCase() + "Offset") : (t = null != h[s] ? h : document.body)),
                function () {
                    return t[s];
                }
            );
        },
        o = function (t, e) {
            var s,
                i = ((s = t), "string" == typeof s && (s = TweenLite.selector(s)), s.length && s !== r && s[0] && s[0].style && !s.nodeType && (s = s[0]), s === r || (s.nodeType && s.style) ? s : null).getBoundingClientRect(),
                o = !e || e === r || e === document.body,
                l = (o ? h : e).getBoundingClientRect(),
                n = { x: i.left - l.left, y: i.top - l.top };
            return !o && e && ((n.x += u(e, "x")()), (n.y += u(e, "y")())), n;
        },
        i = function (t, e, s) {
            var i = typeof t;
            return isNaN(t) ? ("number" === i || ("string" === i && "=" === t.charAt(1)) ? t : "max" === t ? n(e, s) : Math.min(n(e, s), o(t, e)[s])) : parseFloat(t);
        },
        p = _gsScope._gsDefine.plugin({
            propName: "scrollTo",
            API: 2,
            global: !0,
            version: "1.9.0",
            init: function (t, e, s) {
                return (
                    (this._wdw = t === r),
                    (this._target = t),
                    (this._tween = s),
                    "object" != typeof e ? "string" == typeof (e = { y: e }).y && "max" !== e.y && "=" !== e.y.charAt(1) && (e.x = e.y) : e.nodeType && (e = { y: e, x: e }),
                    (this.vars = e),
                    (this._autoKill = !1 !== e.autoKill),
                    (this.getX = u(t, "x")),
                    (this.getY = u(t, "y")),
                    (this.x = this.xPrev = this.getX()),
                    (this.y = this.yPrev = this.getY()),
                    null != e.x ? (this._addTween(this, "x", this.x, i(e.x, t, "x") - (e.offsetX || 0), "scrollTo_x", !0), this._overwriteProps.push("scrollTo_x")) : (this.skipX = !0),
                    null != e.y ? (this._addTween(this, "y", this.y, i(e.y, t, "y") - (e.offsetY || 0), "scrollTo_y", !0), this._overwriteProps.push("scrollTo_y")) : (this.skipY = !0),
                    !0
                );
            },
            set: function (t) {
                this._super.setRatio.call(this, t);
                var e = this._wdw || !this.skipX ? this.getX() : this.xPrev,
                    s = this._wdw || !this.skipY ? this.getY() : this.yPrev,
                    i = s - this.yPrev,
                    o = e - this.xPrev,
                    l = p.autoKillThreshold;
                this.x < 0 && (this.x = 0),
                    this.y < 0 && (this.y = 0),
                    this._autoKill &&
                        (!this.skipX && (l < o || o < -l) && e < n(this._target, "x") && (this.skipX = !0),
                        !this.skipY && (l < i || i < -l) && s < n(this._target, "y") && (this.skipY = !0),
                        this.skipX && this.skipY && (this._tween.kill(), this.vars.onAutoKill && this.vars.onAutoKill.apply(this.vars.onAutoKillScope || this._tween, this.vars.onAutoKillParams || []))),
                    this._wdw ? r.scrollTo(this.skipX ? e : this.x, this.skipY ? s : this.y) : (this.skipY || (this._target.scrollTop = this.y), this.skipX || (this._target.scrollLeft = this.x)),
                    (this.xPrev = this.x),
                    (this.yPrev = this.y);
            },
        }),
        t = p.prototype;
    (p.max = n),
        (p.getOffset = o),
        (p.buildGetter = u),
        (p.autoKillThreshold = 7),
        (t._kill = function (t) {
            return t.scrollTo_x && (this.skipX = !0), t.scrollTo_y && (this.skipY = !0), this._super._kill.call(this, t);
        });
}),
    _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    (function (t) {
        "use strict";
        var e = function () {
            return (_gsScope.GreenSockGlobals || _gsScope).ScrollToPlugin;
        };
        "undefined" != typeof module && module.exports ? (require("../TweenLite.js"), (module.exports = e())) : "function" == typeof define && define.amd && define(["TweenLite"], e);
    })();
!(function (f, c) {
    "use strict";
    var p = {},
        s = f.document,
        m = (f.GreenSockGlobals = f.GreenSockGlobals || f);
    if (!m.TweenLite) {
        var t,
            e,
            i,
            d,
            v,
            n,
            r,
            g = function (t) {
                var e,
                    i = t.split("."),
                    s = m;
                for (e = 0; e < i.length; e++) s[i[e]] = s = s[i[e]] || {};
                return s;
            },
            u = g("com.greensock"),
            T = 1e-10,
            l = function (t) {
                var e,
                    i = [],
                    s = t.length;
                for (e = 0; e !== s; i.push(t[e++]));
                return i;
            },
            y = function () {},
            w =
                ((n = Object.prototype.toString),
                (r = n.call([])),
                function (t) {
                    return null != t && (t instanceof Array || ("object" == typeof t && !!t.push && n.call(t) === r));
                }),
            P = {},
            b = function (o, l, h, _) {
                (this.sc = P[o] ? P[o].sc : []), ((P[o] = this).gsClass = null), (this.func = h);
                var u = [];
                (this.check = function (t) {
                    for (var e, i, s, n, r = l.length, a = r; -1 < --r; ) (e = P[l[r]] || new b(l[r], [])).gsClass ? ((u[r] = e.gsClass), a--) : t && e.sc.push(this);
                    if (0 === a && h) {
                        if (((s = (i = ("com.greensock." + o).split(".")).pop()), (n = g(i.join("."))[s] = this.gsClass = h.apply(h, u)), _))
                            if (((m[s] = p[s] = n), "undefined" != typeof module && module.exports))
                                if (o === c) for (r in ((module.exports = p[c] = n), p)) n[r] = p[r];
                                else p[c] && (p[c][s] = n);
                            else
                                "function" == typeof define &&
                                    define.amd &&
                                    define((f.GreenSockAMDPath ? f.GreenSockAMDPath + "/" : "") + o.split(".").pop(), [], function () {
                                        return n;
                                    });
                        for (r = 0; r < this.sc.length; r++) this.sc[r].check();
                    }
                }),
                    this.check(!0);
            },
            a = (f._gsDefine = function (t, e, i, s) {
                return new b(t, e, i, s);
            }),
            k = (u._class = function (t, e, i) {
                return (
                    (e = e || function () {}),
                    a(
                        t,
                        [],
                        function () {
                            return e;
                        },
                        i
                    ),
                    e
                );
            });
        a.globals = m;
        var o = [0, 0, 1, 1],
            S = k(
                "easing.Ease",
                function (t, e, i, s) {
                    (this._func = t), (this._type = i || 0), (this._power = s || 0), (this._params = e ? o.concat(e) : o);
                },
                !0
            ),
            A = (S.map = {}),
            h = (S.register = function (t, e, i, s) {
                for (var n, r, a, o, l = e.split(","), h = l.length, _ = (i || "easeIn,easeOut,easeInOut").split(","); -1 < --h; )
                    for (r = l[h], n = s ? k("easing." + r, null, !0) : u.easing[r] || {}, a = _.length; -1 < --a; ) (o = _[a]), (A[r + "." + o] = A[o + r] = n[o] = t.getRatio ? t : t[o] || new t());
            });
        for (
            (i = S.prototype)._calcEnd = !1,
                i.getRatio = function (t) {
                    if (this._func) return (this._params[0] = t), this._func.apply(null, this._params);
                    var e = this._type,
                        i = this._power,
                        s = 1 === e ? 1 - t : 2 === e ? t : t < 0.5 ? 2 * t : 2 * (1 - t);
                    return 1 === i ? (s *= s) : 2 === i ? (s *= s * s) : 3 === i ? (s *= s * s * s) : 4 === i && (s *= s * s * s * s), 1 === e ? 1 - s : 2 === e ? s : t < 0.5 ? s / 2 : 1 - s / 2;
                },
                e = (t = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length;
            -1 < --e;

        )
            (i = t[e] + ",Power" + e), h(new S(null, null, 1, e), i, "easeOut", !0), h(new S(null, null, 2, e), i, "easeIn" + (0 === e ? ",easeNone" : "")), h(new S(null, null, 3, e), i, "easeInOut");
        (A.linear = u.easing.Linear.easeIn), (A.swing = u.easing.Quad.easeInOut);
        var x = k("events.EventDispatcher", function (t) {
            (this._listeners = {}), (this._eventTarget = t || this);
        });
        ((i = x.prototype).addEventListener = function (t, e, i, s, n) {
            n = n || 0;
            var r,
                a,
                o = this._listeners[t],
                l = 0;
            for (this !== d || v || d.wake(), null == o && (this._listeners[t] = o = []), a = o.length; -1 < --a; ) (r = o[a]).c === e && r.s === i ? o.splice(a, 1) : 0 === l && r.pr < n && (l = a + 1);
            o.splice(l, 0, { c: e, s: i, up: s, pr: n });
        }),
            (i.removeEventListener = function (t, e) {
                var i,
                    s = this._listeners[t];
                if (s) for (i = s.length; -1 < --i; ) if (s[i].c === e) return void s.splice(i, 1);
            }),
            (i.dispatchEvent = function (t) {
                var e,
                    i,
                    s,
                    n = this._listeners[t];
                if (n) for (1 < (e = n.length) && (n = n.slice(0)), i = this._eventTarget; -1 < --e; ) (s = n[e]) && (s.up ? s.c.call(s.s || i, { type: t, target: i }) : s.c.call(s.s || i));
            });
        var R = f.requestAnimationFrame,
            C = f.cancelAnimationFrame,
            D =
                Date.now ||
                function () {
                    return new Date().getTime();
                },
            I = D();
        for (e = (t = ["ms", "moz", "webkit", "o"]).length; -1 < --e && !R; ) (R = f[t[e] + "RequestAnimationFrame"]), (C = f[t[e] + "CancelAnimationFrame"] || f[t[e] + "CancelRequestAnimationFrame"]);
        k("Ticker", function (t, e) {
            var n,
                r,
                a,
                o,
                l,
                h = this,
                _ = D(),
                i = !(!1 === e || !R) && "auto",
                u = 500,
                f = 33,
                c = function (t) {
                    var e,
                        i,
                        s = D() - I;
                    u < s && (_ += s - f), (I += s), (h.time = (I - _) / 1e3), (e = h.time - l), (!n || 0 < e || !0 === t) && (h.frame++, (l += e + (o <= e ? 0.004 : o - e)), (i = !0)), !0 !== t && (a = r(c)), i && h.dispatchEvent("tick");
                };
            x.call(h),
                (h.time = h.frame = 0),
                (h.tick = function () {
                    c(!0);
                }),
                (h.lagSmoothing = function (t, e) {
                    if (!arguments.length) return u < 1 / T;
                    (u = t || 1 / T), (f = Math.min(e, u, 0));
                }),
                (h.sleep = function () {
                    null != a && (i && C ? C(a) : clearTimeout(a), (r = y), (a = null), h === d && (v = !1));
                }),
                (h.wake = function (t) {
                    null !== a ? h.sleep() : t ? (_ += -I + (I = D())) : 10 < h.frame && (I = D() - u + 5),
                        (r =
                            0 === n
                                ? y
                                : i && R
                                ? R
                                : function (t) {
                                      return setTimeout(t, (1e3 * (l - h.time) + 1) | 0);
                                  }),
                        h === d && (v = !0),
                        c(2);
                }),
                (h.fps = function (t) {
                    if (!arguments.length) return n;
                    (o = 1 / ((n = t) || 60)), (l = this.time + o), h.wake();
                }),
                (h.useRAF = function (t) {
                    if (!arguments.length) return i;
                    h.sleep(), (i = t), h.fps(n);
                }),
                h.fps(t),
                setTimeout(function () {
                    "auto" === i && h.frame < 5 && "hidden" !== s.visibilityState && h.useRAF(!1);
                }, 1500);
        }),
            ((i = u.Ticker.prototype = new u.events.EventDispatcher()).constructor = u.Ticker);
        var _ = k("core.Animation", function (t, e) {
            if (
                ((this.vars = e = e || {}),
                (this._duration = this._totalDuration = t || 0),
                (this._delay = Number(e.delay) || 0),
                (this._timeScale = 1),
                (this._active = !0 === e.immediateRender),
                (this.data = e.data),
                (this._reversed = !0 === e.reversed),
                W)
            ) {
                v || d.wake();
                var i = this.vars.useFrames ? V : W;
                i.add(this, i._time), this.vars.paused && this.paused(!0);
            }
        });
        (d = _.ticker = new u.Ticker()),
            ((i = _.prototype)._dirty = i._gc = i._initted = i._paused = !1),
            (i._totalTime = i._time = 0),
            (i._rawPrevTime = -1),
            (i._next = i._last = i._onUpdate = i._timeline = i.timeline = null),
            (i._paused = !1);
        var E = function () {
            v && 2e3 < D() - I && ("hidden" !== s.visibilityState || !d.lagSmoothing()) && d.wake();
            var t = setTimeout(E, 2e3);
            t.unref && t.unref();
        };
        E(),
            (i.play = function (t, e) {
                return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
            }),
            (i.pause = function (t, e) {
                return null != t && this.seek(t, e), this.paused(!0);
            }),
            (i.resume = function (t, e) {
                return null != t && this.seek(t, e), this.paused(!1);
            }),
            (i.seek = function (t, e) {
                return this.totalTime(Number(t), !1 !== e);
            }),
            (i.restart = function (t, e) {
                return this.reversed(!1)
                    .paused(!1)
                    .totalTime(t ? -this._delay : 0, !1 !== e, !0);
            }),
            (i.reverse = function (t, e) {
                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1);
            }),
            (i.render = function (t, e, i) {}),
            (i.invalidate = function () {
                return (this._time = this._totalTime = 0), (this._initted = this._gc = !1), (this._rawPrevTime = -1), (!this._gc && this.timeline) || this._enabled(!0), this;
            }),
            (i.isActive = function () {
                var t,
                    e = this._timeline,
                    i = this._startTime;
                return !e || (!this._gc && !this._paused && e.isActive() && (t = e.rawTime(!0)) >= i && t < i + this.totalDuration() / this._timeScale - 1e-7);
            }),
            (i._enabled = function (t, e) {
                return (
                    v || d.wake(), (this._gc = !t), (this._active = this.isActive()), !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
                );
            }),
            (i._kill = function (t, e) {
                return this._enabled(!1, !1);
            }),
            (i.kill = function (t, e) {
                return this._kill(t, e), this;
            }),
            (i._uncache = function (t) {
                for (var e = t ? this : this.timeline; e; ) (e._dirty = !0), (e = e.timeline);
                return this;
            }),
            (i._swapSelfInParams = function (t) {
                for (var e = t.length, i = t.concat(); -1 < --e; ) "{self}" === t[e] && (i[e] = this);
                return i;
            }),
            (i._callback = function (t) {
                var e = this.vars,
                    i = e[t],
                    s = e[t + "Params"],
                    n = e[t + "Scope"] || e.callbackScope || this;
                switch (s ? s.length : 0) {
                    case 0:
                        i.call(n);
                        break;
                    case 1:
                        i.call(n, s[0]);
                        break;
                    case 2:
                        i.call(n, s[0], s[1]);
                        break;
                    default:
                        i.apply(n, s);
                }
            }),
            (i.eventCallback = function (t, e, i, s) {
                if ("on" === (t || "").substr(0, 2)) {
                    var n = this.vars;
                    if (1 === arguments.length) return n[t];
                    null == e ? delete n[t] : ((n[t] = e), (n[t + "Params"] = w(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i), (n[t + "Scope"] = s)), "onUpdate" === t && (this._onUpdate = e);
                }
                return this;
            }),
            (i.delay = function (t) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), (this._delay = t), this) : this._delay;
            }),
            (i.duration = function (t) {
                return arguments.length
                    ? ((this._duration = this._totalDuration = t),
                      this._uncache(!0),
                      this._timeline.smoothChildTiming && 0 < this._time && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0),
                      this)
                    : ((this._dirty = !1), this._duration);
            }),
            (i.totalDuration = function (t) {
                return (this._dirty = !1), arguments.length ? this.duration(t) : this._totalDuration;
            }),
            (i.time = function (t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time;
            }),
            (i.totalTime = function (t, e, i) {
                if ((v || d.wake(), !arguments.length)) return this._totalTime;
                if (this._timeline) {
                    if ((t < 0 && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming)) {
                        this._dirty && this.totalDuration();
                        var s = this._totalDuration,
                            n = this._timeline;
                        if ((s < t && !i && (t = s), (this._startTime = (this._paused ? this._pauseTime : n._time) - (this._reversed ? s - t : t) / this._timeScale), n._dirty || this._uncache(!1), n._timeline))
                            for (; n._timeline; ) n._timeline._time !== (n._startTime + n._totalTime) / n._timeScale && n.totalTime(n._totalTime, !0), (n = n._timeline);
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime === t && 0 !== this._duration) || (U.length && Y(), this.render(t, e, !1), U.length && Y());
                }
                return this;
            }),
            (i.progress = i.totalProgress = function (t, e) {
                var i = this.duration();
                return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio;
            }),
            (i.startTime = function (t) {
                return arguments.length ? (t !== this._startTime && ((this._startTime = t), this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime;
            }),
            (i.endTime = function (t) {
                return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale;
            }),
            (i.timeScale = function (t) {
                if (!arguments.length) return this._timeScale;
                var e, i;
                for (
                    t = t || T,
                        this._timeline && this._timeline.smoothChildTiming && ((i = (e = this._pauseTime) || 0 === e ? e : this._timeline.totalTime()), (this._startTime = i - ((i - this._startTime) * this._timeScale) / t)),
                        this._timeScale = t,
                        i = this.timeline;
                    i && i.timeline;

                )
                    (i._dirty = !0), i.totalDuration(), (i = i.timeline);
                return this;
            }),
            (i.reversed = function (t) {
                return arguments.length
                    ? (t != this._reversed && ((this._reversed = t), this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this)
                    : this._reversed;
            }),
            (i.paused = function (t) {
                if (!arguments.length) return this._paused;
                var e,
                    i,
                    s = this._timeline;
                return (
                    t != this._paused &&
                        s &&
                        (v || t || d.wake(),
                        (i = (e = s.rawTime()) - this._pauseTime),
                        !t && s.smoothChildTiming && ((this._startTime += i), this._uncache(!1)),
                        (this._pauseTime = t ? e : null),
                        (this._paused = t),
                        (this._active = this.isActive()),
                        !t && 0 !== i && this._initted && this.duration() && ((e = s.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale), this.render(e, e === this._totalTime, !0))),
                    this._gc && !t && this._enabled(!0, !1),
                    this
                );
            });
        var O = k("core.SimpleTimeline", function (t) {
            _.call(this, 0, t), (this.autoRemoveChildren = this.smoothChildTiming = !0);
        });
        ((i = O.prototype = new _()).constructor = O),
            (i.kill()._gc = !1),
            (i._first = i._last = i._recent = null),
            (i._sortChildren = !1),
            (i.add = i.insert = function (t, e, i, s) {
                var n, r;
                if (
                    ((t._startTime = Number(e || 0) + t._delay),
                    t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale),
                    t.timeline && t.timeline._remove(t, !0),
                    (t.timeline = t._timeline = this),
                    t._gc && t._enabled(!0, !0),
                    (n = this._last),
                    this._sortChildren)
                )
                    for (r = t._startTime; n && n._startTime > r; ) n = n._prev;
                return n ? ((t._next = n._next), (n._next = t)) : ((t._next = this._first), (this._first = t)), t._next ? (t._next._prev = t) : (this._last = t), (t._prev = n), (this._recent = t), this._timeline && this._uncache(!0), this;
            }),
            (i._remove = function (t, e) {
                return (
                    t.timeline === this &&
                        (e || t._enabled(!1, !0),
                        t._prev ? (t._prev._next = t._next) : this._first === t && (this._first = t._next),
                        t._next ? (t._next._prev = t._prev) : this._last === t && (this._last = t._prev),
                        (t._next = t._prev = t.timeline = null),
                        t === this._recent && (this._recent = this._last),
                        this._timeline && this._uncache(!0)),
                    this
                );
            }),
            (i.render = function (t, e, i) {
                var s,
                    n = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = t; n; )
                    (s = n._next),
                        (n._active || (t >= n._startTime && !n._paused && !n._gc)) &&
                            (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)),
                        (n = s);
            }),
            (i.rawTime = function () {
                return v || d.wake(), this._totalTime;
            });
        var z = k(
                "TweenLite",
                function (t, e, i) {
                    if ((_.call(this, e, i), (this.render = z.prototype.render), null == t)) throw "Cannot tween a null target.";
                    this.target = t = "string" != typeof t ? t : z.selector(t) || t;
                    var s,
                        n,
                        r,
                        a = t.jquery || (t.length && t !== f && t[0] && (t[0] === f || (t[0].nodeType && t[0].style && !t.nodeType))),
                        o = this.vars.overwrite;
                    if (((this._overwrite = o = null == o ? J[z.defaultOverwrite] : "number" == typeof o ? o >> 0 : J[o]), (a || t instanceof Array || (t.push && w(t))) && "number" != typeof t[0]))
                        for (this._targets = r = l(t), this._propLookup = [], this._siblings = [], s = 0; s < r.length; s++)
                            (n = r[s])
                                ? "string" != typeof n
                                    ? n.length && n !== f && n[0] && (n[0] === f || (n[0].nodeType && n[0].style && !n.nodeType))
                                        ? (r.splice(s--, 1), (this._targets = r = r.concat(l(n))))
                                        : ((this._siblings[s] = Z(n, this, !1)), 1 === o && 1 < this._siblings[s].length && et(n, this, null, 1, this._siblings[s]))
                                    : "string" == typeof (n = r[s--] = z.selector(n)) && r.splice(s + 1, 1)
                                : r.splice(s--, 1);
                    else (this._propLookup = {}), (this._siblings = Z(t, this, !1)), 1 === o && 1 < this._siblings.length && et(t, this, null, 1, this._siblings);
                    (this.vars.immediateRender || (0 === e && 0 === this._delay && !1 !== this.vars.immediateRender)) && ((this._time = -T), this.render(Math.min(0, -this._delay)));
                },
                !0
            ),
            F = function (t) {
                return t && t.length && t !== f && t[0] && (t[0] === f || (t[0].nodeType && t[0].style && !t.nodeType));
            };
        ((i = z.prototype = new _()).constructor = z),
            (i.kill()._gc = !1),
            (i.ratio = 0),
            (i._firstPT = i._targets = i._overwrittenProps = i._startAt = null),
            (i._notifyPluginsOfEnabled = i._lazy = !1),
            (z.version = "1.20.3"),
            (z.defaultEase = i._ease = new S(null, null, 1, 1)),
            (z.defaultOverwrite = "auto"),
            (z.ticker = d),
            (z.autoSleep = 120),
            (z.lagSmoothing = function (t, e) {
                d.lagSmoothing(t, e);
            }),
            (z.selector =
                f.$ ||
                f.jQuery ||
                function (t) {
                    var e = f.$ || f.jQuery;
                    return e ? (z.selector = e)(t) : void 0 === s ? t : s.querySelectorAll ? s.querySelectorAll(t) : s.getElementById("#" === t.charAt(0) ? t.substr(1) : t);
                });
        var U = [],
            L = {},
            N = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
            j = /[\+-]=-?[\.\d]/,
            G = function (t) {
                for (var e, i = this._firstPT; i; )
                    (e = i.blob ? (1 === t && null != this.end ? this.end : t ? this.join("") : this.start) : i.c * t + i.s),
                        i.m ? (e = i.m(e, this._target || i.t)) : e < 1e-6 && -1e-6 < e && !i.blob && (e = 0),
                        i.f ? (i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e)) : (i.t[i.p] = e),
                        (i = i._next);
            },
            M = function (t, e, i, s) {
                var n,
                    r,
                    a,
                    o,
                    l,
                    h,
                    _,
                    u = [],
                    f = 0,
                    c = "",
                    p = 0;
                for (
                    u.start = t,
                        u.end = e,
                        t = u[0] = t + "",
                        e = u[1] = e + "",
                        i && (i(u), (t = u[0]), (e = u[1])),
                        u.length = 0,
                        n = t.match(N) || [],
                        r = e.match(N) || [],
                        s && ((s._next = null), (s.blob = 1), (u._firstPT = u._applyPT = s)),
                        l = r.length,
                        o = 0;
                    o < l;
                    o++
                )
                    (_ = r[o]),
                        (c += (h = e.substr(f, e.indexOf(_, f) - f)) || !o ? h : ","),
                        (f += h.length),
                        p ? (p = (p + 1) % 5) : "rgba(" === h.substr(-5) && (p = 1),
                        _ === n[o] || n.length <= o
                            ? (c += _)
                            : (c && (u.push(c), (c = "")),
                              (a = parseFloat(n[o])),
                              u.push(a),
                              (u._firstPT = {
                                  _next: u._firstPT,
                                  t: u,
                                  p: u.length - 1,
                                  s: a,
                                  c: ("=" === _.charAt(1) ? parseInt(_.charAt(0) + "1", 10) * parseFloat(_.substr(2)) : parseFloat(_) - a) || 0,
                                  f: 0,
                                  m: p && p < 4 ? Math.round : 0,
                              })),
                        (f += _.length);
                return (c += e.substr(f)) && u.push(c), (u.setRatio = G), j.test(e) && (u.end = null), u;
            },
            Q = function (t, e, i, s, n, r, a, o, l) {
                "function" == typeof s && (s = s(l || 0, t));
                var h = typeof t[e],
                    _ = "function" !== h ? "" : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3),
                    u = "get" !== i ? i : _ ? (a ? t[_](a) : t[_]()) : t[e],
                    f = "string" == typeof s && "=" === s.charAt(1),
                    c = { t: t, p: e, s: u, f: "function" === h, pg: 0, n: n || e, m: r ? ("function" == typeof r ? r : Math.round) : 0, pr: 0, c: f ? parseInt(s.charAt(0) + "1", 10) * parseFloat(s.substr(2)) : parseFloat(s) - u || 0 };
                if (
                    (("number" != typeof u || ("number" != typeof s && !f)) &&
                        (a || isNaN(u) || (!f && isNaN(s)) || "boolean" == typeof u || "boolean" == typeof s
                            ? ((c.fp = a), (c = { t: M(u, f ? parseFloat(c.s) + c.c : s, o || z.defaultStringFilter, c), p: "setRatio", s: 0, c: 1, f: 2, pg: 0, n: n || e, pr: 0, m: 0 }))
                            : ((c.s = parseFloat(u)), f || (c.c = parseFloat(s) - c.s || 0))),
                    c.c)
                )
                    return (c._next = this._firstPT) && (c._next._prev = c), (this._firstPT = c);
            },
            q = (z._internals = { isArray: w, isSelector: F, lazyTweens: U, blobDif: M }),
            B = (z._plugins = {}),
            $ = (q.tweenLookup = {}),
            K = 0,
            H = (q.reservedProps = {
                ease: 1,
                delay: 1,
                overwrite: 1,
                onComplete: 1,
                onCompleteParams: 1,
                onCompleteScope: 1,
                useFrames: 1,
                runBackwards: 1,
                startAt: 1,
                onUpdate: 1,
                onUpdateParams: 1,
                onUpdateScope: 1,
                onStart: 1,
                onStartParams: 1,
                onStartScope: 1,
                onReverseComplete: 1,
                onReverseCompleteParams: 1,
                onReverseCompleteScope: 1,
                onRepeat: 1,
                onRepeatParams: 1,
                onRepeatScope: 1,
                easeParams: 1,
                yoyo: 1,
                immediateRender: 1,
                repeat: 1,
                repeatDelay: 1,
                data: 1,
                paused: 1,
                reversed: 1,
                autoCSS: 1,
                lazy: 1,
                onOverwrite: 1,
                callbackScope: 1,
                stringFilter: 1,
                id: 1,
                yoyoEase: 1,
            }),
            J = { none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, true: 1, false: 0 },
            V = (_._rootFramesTimeline = new O()),
            W = (_._rootTimeline = new O()),
            X = 30,
            Y = (q.lazyRender = function () {
                var t,
                    e = U.length;
                for (L = {}; -1 < --e; ) (t = U[e]) && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0), (t._lazy = !1));
                U.length = 0;
            });
        (W._startTime = d.time),
            (V._startTime = d.frame),
            (W._active = V._active = !0),
            setTimeout(Y, 1),
            (_._updateRoot = z.render = function () {
                var t, e, i;
                if ((U.length && Y(), W.render((d.time - W._startTime) * W._timeScale, !1, !1), V.render((d.frame - V._startTime) * V._timeScale, !1, !1), U.length && Y(), d.frame >= X)) {
                    for (i in ((X = d.frame + (parseInt(z.autoSleep, 10) || 120)), $)) {
                        for (t = (e = $[i].tweens).length; -1 < --t; ) e[t]._gc && e.splice(t, 1);
                        0 === e.length && delete $[i];
                    }
                    if ((!(i = W._first) || i._paused) && z.autoSleep && !V._first && 1 === d._listeners.tick.length) {
                        for (; i && i._paused; ) i = i._next;
                        i || d.sleep();
                    }
                }
            }),
            d.addEventListener("tick", _._updateRoot);
        var Z = function (t, e, i) {
                var s,
                    n,
                    r = t._gsTweenID;
                if (($[r || (t._gsTweenID = r = "t" + K++)] || ($[r] = { target: t, tweens: [] }), e && (((s = $[r].tweens)[(n = s.length)] = e), i))) for (; -1 < --n; ) s[n] === e && s.splice(n, 1);
                return $[r].tweens;
            },
            tt = function (t, e, i, s) {
                var n,
                    r,
                    a = t.vars.onOverwrite;
                return a && (n = a(t, e, i, s)), (a = z.onOverwrite) && (r = a(t, e, i, s)), !1 !== n && !1 !== r;
            },
            et = function (t, e, i, s, n) {
                var r, a, o, l;
                if (1 === s || 4 <= s) {
                    for (l = n.length, r = 0; r < l; r++)
                        if ((o = n[r]) !== e) o._gc || (o._kill(null, t, e) && (a = !0));
                        else if (5 === s) break;
                    return a;
                }
                var h,
                    _ = e._startTime + T,
                    u = [],
                    f = 0,
                    c = 0 === e._duration;
                for (r = n.length; -1 < --r; )
                    (o = n[r]) === e ||
                        o._gc ||
                        o._paused ||
                        (o._timeline !== e._timeline
                            ? ((h = h || it(e, 0, c)), 0 === it(o, h, c) && (u[f++] = o))
                            : o._startTime <= _ && o._startTime + o.totalDuration() / o._timeScale > _ && (((c || !o._initted) && _ - o._startTime <= 2e-10) || (u[f++] = o)));
                for (r = f; -1 < --r; )
                    if (((o = u[r]), 2 === s && o._kill(i, t, e) && (a = !0), 2 !== s || (!o._firstPT && o._initted))) {
                        if (2 !== s && !tt(o, e)) continue;
                        o._enabled(!1, !1) && (a = !0);
                    }
                return a;
            },
            it = function (t, e, i) {
                for (var s = t._timeline, n = s._timeScale, r = t._startTime; s._timeline; ) {
                    if (((r += s._startTime), (n *= s._timeScale), s._paused)) return -100;
                    s = s._timeline;
                }
                return e < (r /= n) ? r - e : (i && r === e) || (!t._initted && r - e < 2 * T) ? T : (r += t.totalDuration() / t._timeScale / n) > e + T ? 0 : r - e - T;
            };
        (i._init = function () {
            var t,
                e,
                i,
                s,
                n,
                r,
                a = this.vars,
                o = this._overwrittenProps,
                l = this._duration,
                h = !!a.immediateRender,
                _ = a.ease;
            if (a.startAt) {
                for (s in (this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), (n = {}), a.startAt)) n[s] = a.startAt[s];
                if (
                    ((n.data = "isStart"),
                    (n.overwrite = !1),
                    (n.immediateRender = !0),
                    (n.lazy = h && !1 !== a.lazy),
                    (n.startAt = n.delay = null),
                    (n.onUpdate = a.onUpdate),
                    (n.onUpdateParams = a.onUpdateParams),
                    (n.onUpdateScope = a.onUpdateScope || a.callbackScope || this),
                    (this._startAt = z.to(this.target, 0, n)),
                    h)
                )
                    if (0 < this._time) this._startAt = null;
                    else if (0 !== l) return;
            } else if (a.runBackwards && 0 !== l)
                if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), (this._startAt = null);
                else {
                    for (s in (0 !== this._time && (h = !1), (i = {}), a)) (H[s] && "autoCSS" !== s) || (i[s] = a[s]);
                    if (((i.overwrite = 0), (i.data = "isFromStart"), (i.lazy = h && !1 !== a.lazy), (i.immediateRender = h), (this._startAt = z.to(this.target, 0, i)), h)) {
                        if (0 === this._time) return;
                    } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null);
                }
            if (
                ((this._ease = _ = _ ? (_ instanceof S ? _ : "function" == typeof _ ? new S(_, a.easeParams) : A[_] || z.defaultEase) : z.defaultEase),
                a.easeParams instanceof Array && _.config && (this._ease = _.config.apply(_, a.easeParams)),
                (this._easeType = this._ease._type),
                (this._easePower = this._ease._power),
                (this._firstPT = null),
                this._targets)
            )
                for (r = this._targets.length, t = 0; t < r; t++) this._initProps(this._targets[t], (this._propLookup[t] = {}), this._siblings[t], o ? o[t] : null, t) && (e = !0);
            else e = this._initProps(this.target, this._propLookup, this._siblings, o, 0);
            if ((e && z._onPluginEvent("_onInitAllProps", this), o && (this._firstPT || ("function" != typeof this.target && this._enabled(!1, !1))), a.runBackwards)) for (i = this._firstPT; i; ) (i.s += i.c), (i.c = -i.c), (i = i._next);
            (this._onUpdate = a.onUpdate), (this._initted = !0);
        }),
            (i._initProps = function (t, e, i, s, n) {
                var r, a, o, l, h, _;
                if (null == t) return !1;
                for (r in (L[t._gsTweenID] && Y(),
                this.vars.css ||
                    (t.style &&
                        t !== f &&
                        t.nodeType &&
                        B.css &&
                        !1 !== this.vars.autoCSS &&
                        (function (t, e) {
                            var i,
                                s = {};
                            for (i in t)
                                H[i] ||
                                    (i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i) ||
                                    !(!B[i] || (B[i] && B[i]._autoCSS)) ||
                                    ((s[i] = t[i]), delete t[i]);
                            t.css = s;
                        })(this.vars, t)),
                this.vars))
                    if (((_ = this.vars[r]), H[r])) _ && (_ instanceof Array || (_.push && w(_))) && -1 !== _.join("").indexOf("{self}") && (this.vars[r] = _ = this._swapSelfInParams(_, this));
                    else if (B[r] && (l = new B[r]())._onInitTween(t, this.vars[r], this, n)) {
                        for (this._firstPT = h = { _next: this._firstPT, t: l, p: "setRatio", s: 0, c: 1, f: 1, n: r, pg: 1, pr: l._priority, m: 0 }, a = l._overwriteProps.length; -1 < --a; ) e[l._overwriteProps[a]] = this._firstPT;
                        (l._priority || l._onInitAllProps) && (o = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0), h._next && (h._next._prev = h);
                    } else e[r] = Q.call(this, t, r, "get", _, r, 0, null, this.vars.stringFilter, n);
                return s && this._kill(s, t)
                    ? this._initProps(t, e, i, s, n)
                    : 1 < this._overwrite && this._firstPT && 1 < i.length && et(t, this, e, this._overwrite, i)
                    ? (this._kill(e, t), this._initProps(t, e, i, s, n))
                    : (this._firstPT && ((!1 !== this.vars.lazy && this._duration) || (this.vars.lazy && !this._duration)) && (L[t._gsTweenID] = !0), o);
            }),
            (i.render = function (t, e, i) {
                var s,
                    n,
                    r,
                    a,
                    o = this._time,
                    l = this._duration,
                    h = this._rawPrevTime;
                if (l - 1e-7 <= t && 0 <= t)
                    (this._totalTime = this._time = l),
                        (this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1),
                        this._reversed || ((s = !0), (n = "onComplete"), (i = i || this._timeline.autoRemoveChildren)),
                        0 === l &&
                            (this._initted || !this.vars.lazy || i) &&
                            (this._startTime === this._timeline._duration && (t = 0),
                            (h < 0 || (t <= 0 && -1e-7 <= t) || (h === T && "isPause" !== this.data)) && h !== t && ((i = !0), T < h && (n = "onReverseComplete")),
                            (this._rawPrevTime = a = !e || t || h === t ? t : T));
                else if (t < 1e-7)
                    (this._totalTime = this._time = 0),
                        (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0),
                        (0 !== o || (0 === l && 0 < h)) && ((n = "onReverseComplete"), (s = this._reversed)),
                        t < 0 && ((this._active = !1), 0 === l && (this._initted || !this.vars.lazy || i) && (0 <= h && (h !== T || "isPause" !== this.data) && (i = !0), (this._rawPrevTime = a = !e || t || h === t ? t : T))),
                        (!this._initted || (this._startAt && this._startAt.progress())) && (i = !0);
                else if (((this._totalTime = this._time = t), this._easeType)) {
                    var _ = t / l,
                        u = this._easeType,
                        f = this._easePower;
                    (1 === u || (3 === u && 0.5 <= _)) && (_ = 1 - _),
                        3 === u && (_ *= 2),
                        1 === f ? (_ *= _) : 2 === f ? (_ *= _ * _) : 3 === f ? (_ *= _ * _ * _) : 4 === f && (_ *= _ * _ * _ * _),
                        (this.ratio = 1 === u ? 1 - _ : 2 === u ? _ : t / l < 0.5 ? _ / 2 : 1 - _ / 2);
                } else this.ratio = this._ease.getRatio(t / l);
                if (this._time !== o || i) {
                    if (!this._initted) {
                        if ((this._init(), !this._initted || this._gc)) return;
                        if (!i && this._firstPT && ((!1 !== this.vars.lazy && this._duration) || (this.vars.lazy && !this._duration)))
                            return (this._time = this._totalTime = o), (this._rawPrevTime = h), U.push(this), void (this._lazy = [t, e]);
                        this._time && !s ? (this.ratio = this._ease.getRatio(this._time / l)) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
                    }
                    for (
                        !1 !== this._lazy && (this._lazy = !1),
                            this._active || (!this._paused && this._time !== o && 0 <= t && (this._active = !0)),
                            0 === o && (this._startAt && (0 <= t ? this._startAt.render(t, !0, i) : n || (n = "_dummyGS")), this.vars.onStart && ((0 === this._time && 0 !== l) || e || this._callback("onStart"))),
                            r = this._firstPT;
                        r;

                    )
                        r.f ? r.t[r.p](r.c * this.ratio + r.s) : (r.t[r.p] = r.c * this.ratio + r.s), (r = r._next);
                    this._onUpdate && (t < 0 && this._startAt && -1e-4 !== t && this._startAt.render(t, !0, i), e || ((this._time !== o || s || i) && this._callback("onUpdate"))),
                        n &&
                            ((this._gc && !i) ||
                                (t < 0 && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, !0, i),
                                s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), (this._active = !1)),
                                !e && this.vars[n] && this._callback(n),
                                0 === l && this._rawPrevTime === T && a !== T && (this._rawPrevTime = 0)));
                }
            }),
            (i._kill = function (t, e, i) {
                if (("all" === t && (t = null), null == t && (null == e || e === this.target))) return (this._lazy = !1), this._enabled(!1, !1);
                e = "string" != typeof e ? e || this._targets || this.target : z.selector(e) || e;
                var s,
                    n,
                    r,
                    a,
                    o,
                    l,
                    h,
                    _,
                    u,
                    f = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
                if ((w(e) || F(e)) && "number" != typeof e[0]) for (s = e.length; -1 < --s; ) this._kill(t, e[s], i) && (l = !0);
                else {
                    if (this._targets) {
                        for (s = this._targets.length; -1 < --s; )
                            if (e === this._targets[s]) {
                                (o = this._propLookup[s] || {}), (this._overwrittenProps = this._overwrittenProps || []), (n = this._overwrittenProps[s] = t ? this._overwrittenProps[s] || {} : "all");
                                break;
                            }
                    } else {
                        if (e !== this.target) return !1;
                        (o = this._propLookup), (n = this._overwrittenProps = t ? this._overwrittenProps || {} : "all");
                    }
                    if (o) {
                        if (((h = t || o), (_ = t !== n && "all" !== n && t !== o && ("object" != typeof t || !t._tempKill)), i && (z.onOverwrite || this.vars.onOverwrite))) {
                            for (r in h) o[r] && (u || (u = []), u.push(r));
                            if ((u || !t) && !tt(this, i, e, u)) return !1;
                        }
                        for (r in h)
                            (a = o[r]) &&
                                (f && (a.f ? a.t[a.p](a.s) : (a.t[a.p] = a.s), (l = !0)),
                                a.pg && a.t._kill(h) && (l = !0),
                                (a.pg && 0 !== a.t._overwriteProps.length) || (a._prev ? (a._prev._next = a._next) : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), (a._next = a._prev = null)),
                                delete o[r]),
                                _ && (n[r] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1);
                    }
                }
                return l;
            }),
            (i.invalidate = function () {
                return (
                    this._notifyPluginsOfEnabled && z._onPluginEvent("_onDisable", this),
                    (this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null),
                    (this._notifyPluginsOfEnabled = this._active = this._lazy = !1),
                    (this._propLookup = this._targets ? {} : []),
                    _.prototype.invalidate.call(this),
                    this.vars.immediateRender && ((this._time = -T), this.render(Math.min(0, -this._delay))),
                    this
                );
            }),
            (i._enabled = function (t, e) {
                if ((v || d.wake(), t && this._gc)) {
                    var i,
                        s = this._targets;
                    if (s) for (i = s.length; -1 < --i; ) this._siblings[i] = Z(s[i], this, !0);
                    else this._siblings = Z(this.target, this, !0);
                }
                return _.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && z._onPluginEvent(t ? "_onEnable" : "_onDisable", this);
            }),
            (z.to = function (t, e, i) {
                return new z(t, e, i);
            }),
            (z.from = function (t, e, i) {
                return (i.runBackwards = !0), (i.immediateRender = 0 != i.immediateRender), new z(t, e, i);
            }),
            (z.fromTo = function (t, e, i, s) {
                return (s.startAt = i), (s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender), new z(t, e, s);
            }),
            (z.delayedCall = function (t, e, i, s, n) {
                return new z(e, 0, { delay: t, onComplete: e, onCompleteParams: i, callbackScope: s, onReverseComplete: e, onReverseCompleteParams: i, immediateRender: !1, lazy: !1, useFrames: n, overwrite: 0 });
            }),
            (z.set = function (t, e) {
                return new z(t, 0, e);
            }),
            (z.getTweensOf = function (t, e) {
                if (null == t) return [];
                var i, s, n, r;
                if (((t = "string" != typeof t ? t : z.selector(t) || t), (w(t) || F(t)) && "number" != typeof t[0])) {
                    for (i = t.length, s = []; -1 < --i; ) s = s.concat(z.getTweensOf(t[i], e));
                    for (i = s.length; -1 < --i; ) for (r = s[i], n = i; -1 < --n; ) r === s[n] && s.splice(i, 1);
                } else if (t._gsTweenID) for (i = (s = Z(t).concat()).length; -1 < --i; ) (s[i]._gc || (e && !s[i].isActive())) && s.splice(i, 1);
                return s || [];
            }),
            (z.killTweensOf = z.killDelayedCallsTo = function (t, e, i) {
                "object" == typeof e && ((i = e), (e = !1));
                for (var s = z.getTweensOf(t, e), n = s.length; -1 < --n; ) s[n]._kill(i, t);
            });
        var st = k(
            "plugins.TweenPlugin",
            function (t, e) {
                (this._overwriteProps = (t || "").split(",")), (this._propName = this._overwriteProps[0]), (this._priority = e || 0), (this._super = st.prototype);
            },
            !0
        );
        if (
            ((i = st.prototype),
            (st.version = "1.19.0"),
            (st.API = 2),
            (i._firstPT = null),
            (i._addTween = Q),
            (i.setRatio = G),
            (i._kill = function (t) {
                var e,
                    i = this._overwriteProps,
                    s = this._firstPT;
                if (null != t[this._propName]) this._overwriteProps = [];
                else for (e = i.length; -1 < --e; ) null != t[i[e]] && i.splice(e, 1);
                for (; s; ) null != t[s.n] && (s._next && (s._next._prev = s._prev), s._prev ? ((s._prev._next = s._next), (s._prev = null)) : this._firstPT === s && (this._firstPT = s._next)), (s = s._next);
                return !1;
            }),
            (i._mod = i._roundProps = function (t) {
                for (var e, i = this._firstPT; i; ) (e = t[this._propName] || (null != i.n && t[i.n.split(this._propName + "_").join("")])) && "function" == typeof e && (2 === i.f ? (i.t._applyPT.m = e) : (i.m = e)), (i = i._next);
            }),
            (z._onPluginEvent = function (t, e) {
                var i,
                    s,
                    n,
                    r,
                    a,
                    o = e._firstPT;
                if ("_onInitAllProps" === t) {
                    for (; o; ) {
                        for (a = o._next, s = n; s && s.pr > o.pr; ) s = s._next;
                        (o._prev = s ? s._prev : r) ? (o._prev._next = o) : (n = o), (o._next = s) ? (s._prev = o) : (r = o), (o = a);
                    }
                    o = e._firstPT = n;
                }
                for (; o; ) o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), (o = o._next);
                return i;
            }),
            (st.activate = function (t) {
                for (var e = t.length; -1 < --e; ) t[e].API === st.API && (B[new t[e]()._propName] = t[e]);
                return !0;
            }),
            (a.plugin = function (t) {
                if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                var e,
                    i = t.propName,
                    s = t.priority || 0,
                    n = t.overwriteProps,
                    r = { init: "_onInitTween", set: "setRatio", kill: "_kill", round: "_mod", mod: "_mod", initAll: "_onInitAllProps" },
                    a = k(
                        "plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin",
                        function () {
                            st.call(this, i, s), (this._overwriteProps = n || []);
                        },
                        !0 === t.global
                    ),
                    o = (a.prototype = new st(i));
                for (e in (((o.constructor = a).API = t.API), r)) "function" == typeof t[e] && (o[r[e]] = t[e]);
                return (a.version = t.version), st.activate([a]), a;
            }),
            (t = f._gsQueue))
        ) {
            for (e = 0; e < t.length; e++) t[e]();
            for (i in P) P[i].func || f.console.log("GSAP encountered missing dependency: " + i);
        }
        v = !1;
    }
})("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenLite");
!(function (e, n) {
    "function" == typeof define && define.amd ? define(n) : "object" == typeof exports ? (module.exports = n()) : (e.NProgress = n());
})(this, function () {
    var n,
        t,
        l = { version: "0.2.0" },
        d = (l.settings = {
            minimum: 0.08,
            easing: "ease",
            positionUsing: "",
            speed: 200,
            trickle: !0,
            trickleRate: 0.02,
            trickleSpeed: 800,
            showSpinner: !0,
            barSelector: '[role="bar"]',
            spinnerSelector: '[role="spinner"]',
            parent: "body",
            template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>',
        });
    function r(e, n, t) {
        return e < n ? n : t < e ? t : e;
    }
    function f(e) {
        return 100 * (-1 + e);
    }
    (l.configure = function (e) {
        var n, t;
        for (n in e) void 0 !== (t = e[n]) && e.hasOwnProperty(n) && (d[n] = t);
        return this;
    }),
        (l.status = null),
        (l.set = function (s) {
            var e = l.isStarted();
            (s = r(s, d.minimum, 1)), (l.status = 1 === s ? null : s);
            var o = l.render(!e),
                a = o.querySelector(d.barSelector),
                u = d.speed,
                c = d.easing;
            return (
                o.offsetWidth,
                i(function (e) {
                    var n, t, r, i;
                    "" === d.positionUsing && (d.positionUsing = l.getPositioningCSS()),
                        m(
                            a,
                            ((n = s),
                            (t = u),
                            (r = c),
                            ((i =
                                "translate3d" === d.positionUsing
                                    ? { transform: "translate3d(" + f(n) + "%,0,0)" }
                                    : "translate" === d.positionUsing
                                    ? { transform: "translate(" + f(n) + "%,0)" }
                                    : { "margin-left": f(n) + "%" }).transition = "all " + t + "ms " + r),
                            i)
                        ),
                        1 === s
                            ? (m(o, { transition: "none", opacity: 1 }),
                              o.offsetWidth,
                              setTimeout(function () {
                                  m(o, { transition: "all " + u + "ms linear", opacity: 0 }),
                                      setTimeout(function () {
                                          l.remove(), e();
                                      }, u);
                              }, u))
                            : setTimeout(e, u);
                }),
                this
            );
        }),
        (l.isStarted = function () {
            return "number" == typeof l.status;
        }),
        (l.start = function () {
            l.status || l.set(0);
            var e = function () {
                setTimeout(function () {
                    l.status && (l.trickle(), e());
                }, d.trickleSpeed);
            };
            return d.trickle && e(), this;
        }),
        (l.done = function (e) {
            return e || l.status ? l.inc(0.3 + 0.5 * Math.random()).set(1) : this;
        }),
        (l.inc = function (e) {
            var n = l.status;
            return n ? ("number" != typeof e && (e = (1 - n) * r(Math.random() * n, 0.1, 0.95)), (n = r(n + e, 0, 0.994)), l.set(n)) : l.start();
        }),
        (l.trickle = function () {
            return l.inc(Math.random() * d.trickleRate);
        }),
        (t = n = 0),
        (l.promise = function (e) {
            return (
                e &&
                    "resolved" !== e.state() &&
                    (0 === t && l.start(),
                    n++,
                    t++,
                    e.always(function () {
                        0 == --t ? ((n = 0), l.done()) : l.set((n - t) / n);
                    })),
                this
            );
        }),
        (l.render = function (e) {
            if (l.isRendered()) return document.getElementById("nprogress");
            o(document.documentElement, "nprogress-busy");
            var n = document.createElement("div");
            (n.id = "nprogress"), (n.innerHTML = d.template);
            var t,
                r = n.querySelector(d.barSelector),
                i = e ? "-100" : f(l.status || 0),
                s = document.querySelector(d.parent);
            return (
                m(r, { transition: "all 0 linear", transform: "translate3d(" + i + "%,0,0)" }), d.showSpinner || ((t = n.querySelector(d.spinnerSelector)) && c(t)), s != document.body && o(s, "nprogress-custom-parent"), s.appendChild(n), n
            );
        }),
        (l.remove = function () {
            a(document.documentElement, "nprogress-busy"), a(document.querySelector(d.parent), "nprogress-custom-parent");
            var e = document.getElementById("nprogress");
            e && c(e);
        }),
        (l.isRendered = function () {
            return !!document.getElementById("nprogress");
        }),
        (l.getPositioningCSS = function () {
            var e = document.body.style,
                n = "WebkitTransform" in e ? "Webkit" : "MozTransform" in e ? "Moz" : "msTransform" in e ? "ms" : "OTransform" in e ? "O" : "";
            return n + "Perspective" in e ? "translate3d" : n + "Transform" in e ? "translate" : "margin";
        });
    var i = (function () {
            var n = [];
            function t() {
                var e = n.shift();
                e && e(t);
            }
            return function (e) {
                n.push(e), 1 == n.length && t();
            };
        })(),
        m = (function () {
            var s = ["Webkit", "O", "Moz", "ms"],
                i = {};
            function o(e, n, t) {
                var r;
                (r = (r = n).replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function (e, n) {
                    return n.toUpperCase();
                })),
                    (n =
                        i[r] ||
                        (i[r] = (function (e) {
                            var n = document.body.style;
                            if (e in n) return e;
                            for (var t, r = s.length, i = e.charAt(0).toUpperCase() + e.slice(1); r--; ) if ((t = s[r] + i) in n) return t;
                            return e;
                        })(r))),
                    (e.style[n] = t);
            }
            return function (e, n) {
                var t,
                    r,
                    i = arguments;
                if (2 == i.length) for (t in n) void 0 !== (r = n[t]) && n.hasOwnProperty(t) && o(e, t, r);
                else o(e, i[1], i[2]);
            };
        })();
    function s(e, n) {
        return 0 <= ("string" == typeof e ? e : u(e)).indexOf(" " + n + " ");
    }
    function o(e, n) {
        var t = u(e),
            r = t + n;
        s(t, n) || (e.className = r.substring(1));
    }
    function a(e, n) {
        var t,
            r = u(e);
        s(e, n) && ((t = r.replace(" " + n + " ", " ")), (e.className = t.substring(1, t.length - 1)));
    }
    function u(e) {
        return (" " + (e.className || "") + " ").replace(/\s+/gi, " ");
    }
    function c(e) {
        e && e.parentNode && e.parentNode.removeChild(e);
    }
    return l;
});
var Variables = {
    animTime: 1.3,
    animTime2: 1.3 * 0.7,
    animTime3: 0.52,
    animEaseOut: null,
    animEaseIn: null,
    animEaseInOut: null,
    isMobile: relax.browser.isMobile && window.innerWidth <= 620,
    isLocalhost: -1 !== window.location.href.indexOf("localhost") || "8888" == window.location.port,
    init: function () {
        (Variables.animEaseOut = window.Quart.easeOut), (Variables.animEaseIn = window.Quart.easeIn), (Variables.animEaseInOut = window.Quart.easeInOut);
    },
    getPaddingRatio: function () {
        return window.innerWidth < 768 ? 0.85 : 0.64;
    },
    getLowerEndPaddingRatio: function () {
        return window.innerWidth < 768 ? 1 - 0.85 : 0.36;
    },
    getWindowInnerHeight: function () {
        var n = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream ? document.documentElement.clientHeight : window.innerHeight,
            e = document.documentElement;
        return e.style.setProperty("--app-height", n + "px"), e.style.setProperty("--app-half-height", 0.5 * n + "px"), 1 * n;
    },
};
var Helper = (function () {
    function c() {}
    return (
        (c.runLoadBlockDisolver = function (e) {
            var n = !1,
                r = e.querySelectorAll("template[prevent-load-block]");
            if (r) {
                0 < r.length && (n = !0);
                for (var l = 0; l < r.length; l++) {
                    var t = r[l].parentNode,
                        c = r[l].innerHTML,
                        o = r[l],
                        a = document.createElement("div");
                    (a.innerHTML = c), t.replaceChild(a.children[0].cloneNode(!0), o);
                }
            }
            return !n;
        }),
        (c.shuffle = function (e) {
            var n, r, l;
            for (l = e.length - 1; 0 < l; l--) (n = Math.floor(Math.random() * (l + 1))), (r = e[l]), (e[l] = e[n]), (e[n] = r);
            return e;
        }),
        (c.getParameterByName = function (e, n) {
            void 0 === n && (n = null), n || (n = window.location.href), (e = e.replace(/[\[\]]/g, "\\$&"));
            var r = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)").exec(n);
            return r ? (r[2] ? decodeURIComponent(r[2].replace(/\+/g, " ")) : "") : null;
        }),
        (c.checkAppHREF = function (e) {
            return -1 != e.indexOf(window.location.origin) && (e = e.split(window.location.origin)[1]), "/" != e.substr(0, 1) && (e = "/" + e), e;
        }),
        (c.HTMLAnchorClick = function (e) {
            e.preventDefault();
            var n = c.checkAppHREF(e.currentTarget.getAttribute("href"));
            n && Router.navigate(n);
        }),
        (c.bindSelfClicks = function (e, n) {
            for (var r = e.querySelectorAll("a[target=_self]"), l = 0; l < r.length; l++) {
                var t = r[l];
                (t.callback = n || c.HTMLAnchorClick.bind(t)), t.addEventListener("click", t.callback, !1);
            }
        }),
        (c.unbindSelfClicks = function (e) {
            for (var n = e.querySelectorAll("a[target=_self]"), r = 0; r < n.length; r++) {
                var l = n[r];
                l.removeEventListener("click", l.callback, !1), (l.callback = null);
            }
        }),
        c
    );
})();
var Router = {
    routes: [],
    mode: null,
    root: "/",
    config: function (t) {
        return (this.mode = t && t.mode && ("history-push" == t.mode || "history-replace" == t.mode) && history.pushState ? t.mode : "hash"), (this.root = t && t.root ? "/" + this.clearSlashes(t.root) + "/" : "/"), this;
    },
    getFragment: function () {
        var t = "";
        if ("history-push" === this.mode || "history-replace" === this.mode) (t = this.clearSlashes(decodeURI(location.pathname + location.search))), (t = "/" != this.root ? t.replace(this.root, "") : t);
        else {
            var e = window.location.href.match(/#(.*)$/);
            t = e ? e[1] : "";
        }
        return this.clearSlashes(t);
    },
    clearSlashes: function (t) {
        return t.toString().replace(/\/$/, "").replace(/^\//, "");
    },
    add: function (t, e) {
        return "function" == typeof t && ((e = t), (t = "")), this.routes.push({ re: t, handler: e }), this;
    },
    remove: function (t) {
        for (var e, r = 0; this.routes.length, (e = this.routes[r]); r++) if (e.handler === t || e.re.toString() === t.toString()) return this.routes.splice(r, 1), this;
        return this;
    },
    flush: function () {
        return (this.routes = []), (this.mode = null), (this.root = "/"), this;
    },
    check: function (t) {
        for (var e = t || this.getFragment(), r = 0; r < this.routes.length; r++) {
            var s = e.match(this.routes[r].re);
            if (s) return s.shift(), this.routes[r].handler.apply({}, s), this;
        }
        return this;
    },
    listen: function () {
        var t = this,
            e = t.getFragment();
        return (
            clearInterval(this.interval),
            (this.interval = setInterval(function () {
                e !== t.getFragment() && ((e = t.getFragment()), t.check(e));
            }, 50)),
            this
        );
    },
    navigate: function (t) {
        return (
            -1 === (t = t || "").indexOf("http") && "/" !== t.substr(0, 1) && (t = "/" + t),
            "history-push" === this.mode
                ? history.pushState(null, null, this.root + this.clearSlashes(t))
                : "history-replace" === this.mode
                ? history.replaceState(null, null, this.root + this.clearSlashes(t))
                : (window.location.href = window.location.href.replace(/#(.*)$/, "") + "#" + t),
            this
        );
    },
    hash: function (t) {
        window.location.hash = t;
    },
};
var PageTypes = { HOME: "home", CLIENTS: "clients", CONTACT: "contact", PROJECT: "project", EXPLORE: "explore", DEFAULT: "default", EXPLORE_RESULT: "explore-result" };
var RouterExtensionEvents = { FETCHED: "re-on-fetched", PRE_FETCH: "re-pre-fetch", ROUTE_CHANGE: "re-on-route-change", HASH_CHANGE: "re-on-hash-change" },
    RouterExtension = (function () {
        function n() {
            var e = this;
            (this.firstCheckDone = !1), (this.response = ""), (this.pageType = ""), (this.oldPageType = "");
            var t = window.rootFolder;
            Router.config({ mode: "history-push", root: t }),
                window.NProgress.configure({ showSpinner: !1 }),
                (this.response = document.getElementById("app-page").innerHTML),
                Router.add(function () {
                    e.handleRoute();
                })
                    .listen()
                    .check(),
                window.addEventListener("hashchange", this.onHashChange.bind(this), !1);
        }
        return (
            Object.defineProperty(n.prototype, "element", {
                get: function () {
                    return this._element;
                },
                enumerable: !0,
                configurable: !0,
            }),
            Object.defineProperty(n.prototype, "isInitialState", {
                get: function () {
                    return !this.xhr;
                },
                enumerable: !0,
                configurable: !0,
            }),
            (n.prototype.onHashChange = function (e) {
                document.dispatchEvent(new CustomEvent(RouterExtensionEvents.HASH_CHANGE, { detail: window.location.hash }));
            }),
            (n.prototype.handleRoute = function () {
                var e = this;
                if (
                    (n.ignorePageLoading || document.body.classList.add("page--loading"),
                    (n.ignorePageLoading = !1),
                    document.dispatchEvent(new CustomEvent(RouterExtensionEvents.PRE_FETCH, { detail: this })),
                    (this.oldPageType = this.pageType),
                    window.NProgress.start(),
                    this.firstCheckDone)
                ) {
                    document.dispatchEvent(new CustomEvent(RouterExtensionEvents.ROUTE_CHANGE, { detail: this })),
                        this.xhr ? this.xhr.abort() : ((this.xhr = new XMLHttpRequest()), this.xhr.addEventListener("load", this.onNewPageFetched.bind(this), !1));
                    var t = Router.getFragment();
                    this.xhr.open("GET", "/" !== t.substr(0, 1) ? "/" + t : t, !0), this.xhr.setRequestHeader("ajax", "true"), this.xhr.setRequestHeader("X-Requested-With", "xmlhttprequest"), this.xhr.send();
                } else
                    requestAnimationFrame(function () {
                        e.handleNewPage();
                    });
                this.firstCheckDone = !0;
            }),
            (n.prototype.onNewPageFetched = function (e) {
                200 == this.xhr.status ? ((this.response = this.xhr.response), this.handleNewPage()) : (window.location.href = window.location.origin);
            }),
            (n.prototype.handleNewPage = function () {
                if (this.isInitialState) this._element = document.getElementById("app-page").getElementsByTagName("main")[0];
                else {
                    var e = document.createDocumentFragment(),
                        t = document.createElement("div");
                    for (t.innerHTML = this.response; t.firstChild; ) e.appendChild(t.firstChild), t.firstChild && t.firstChild.id && "app-page" === t.firstChild.id && (this._element = t.firstChild.children[0]);
                }
                (this.pageType = this.element.getAttribute("page-type")),
                    this.isInitialState || this.pageType !== PageTypes.HOME || (this.pageType = PageTypes.CLIENTS),
                    this.oldPageType && document.body.classList.remove("page-type--" + this.oldPageType),
                    document.body.classList.remove("page--loading"),
                    document.body.classList.add("page-type--" + this.pageType),
                    document.dispatchEvent(new CustomEvent(RouterExtensionEvents.FETCHED, { detail: this })),
                    window.NProgress.done();
            }),
            (n.ignorePageLoading = !1),
            n
        );
    })();
var BasicAppView = (function () {
    function e(e) {
        e && e.el && this.setEl(e.el),
            (this.onResizeCallback = this.onResize.bind(this)),
            window.addEventListener("resize", this.onResizeCallback, !1),
            (this.onScrollCallback = this.onScroll.bind(this)),
            window.addEventListener("scroll", this.onScrollCallback, !1),
            (this.onHashChangeCallback = this.onHashChange.bind(this)),
            document.addEventListener(RouterExtensionEvents.HASH_CHANGE, this.onHashChangeCallback, !1),
            (this.onRouteContentFetchedCallback = this.onRouteContentFetched.bind(this)),
            document.addEventListener(RouterExtensionEvents.FETCHED, this.onRouteContentFetchedCallback, !1),
            (this.onRouteChangeCallback = this.onRouteChange.bind(this)),
            document.addEventListener(RouterExtensionEvents.ROUTE_CHANGE, this.onRouteChangeCallback, !1);
    }
    return (
        (e.prototype.setEl = function (e) {
            this.el && Helper.unbindSelfClicks(this.el), (this.el = e), Helper.bindSelfClicks(this.el);
        }),
        (e.prototype.onRouteContentFetched = function (e) {}),
        (e.prototype.onRouteChange = function (e) {}),
        (e.prototype.onHashChange = function (e) {}),
        (e.prototype.onResize = function (e) {}),
        (e.prototype.onScroll = function (e) {}),
        (e.prototype.dealloc = function () {
            Helper.unbindSelfClicks(this.el),
                window.removeEventListener("resize", this.onResizeCallback, !1),
                (this.onResizeCallback = null),
                window.removeEventListener("scroll", this.onScrollCallback, !1),
                (this.onScrollCallback = null),
                document.removeEventListener(RouterExtensionEvents.HASH_CHANGE, this.onHashChangeCallback, !1),
                (this.onHashChangeCallback = null),
                document.removeEventListener(RouterExtensionEvents.FETCHED, this.onRouteContentFetchedCallback, !1),
                (this.onRouteContentFetchedCallback = null),
                document.removeEventListener(RouterExtensionEvents.ROUTE_CHANGE, this.onRouteChangeCallback, !1),
                (this.onRouteChangeCallback = null);
        }),
        e
    );
})();
var BasicPage = (function () {
    function e(e) {
        var t = this;
        (this.preliminaryToLoad = 0),
            (this.animatingIn = !1),
            (this.animatedIn = !1),
            (this.wantsToAnimateIn = !1),
            (this.hasPreliminaryLoaded = !1),
            (this.el = e.el),
            (this.type = e.type),
            (this.onHashChangeCallback = this.onHashChange.bind(this)),
            document.addEventListener(RouterExtensionEvents.HASH_CHANGE, this.onHashChangeCallback, !1),
            (this.onResizeCallback = this.onResize.bind(this)),
            window.addEventListener("resize", this.onResizeCallback, !1),
            (this.ScrollCallback = this.onScroll.bind(this)),
            window.addEventListener("scroll", this.ScrollCallback, !1),
            (this.hasPreliminaryLoaded = Helper.runLoadBlockDisolver(this.el)),
            requestAnimationFrame(function () {
                picturefill({ elements: [t.el] }), t.animateIn();
            }),
            Helper.bindSelfClicks(this.el);
    }
    return (
        (e.prototype.pingResize = function () {
            setTimeout(function () {
                try {
                    window.dispatchEvent(new Event("resize"));
                } catch (e) {
                    var t = document.createEvent("UIEvents");
                    t.initUIEvent("resize", !0, !1, window, 0), window.dispatchEvent(t);
                }
            }, 0);
        }),
        (e.prototype.animateOut = function (e) {
            if (this.el) {
                this.el.classList.add("animate-out");
                for (var t = this.el.querySelectorAll("img[preliminary-load]"), i = 0; i < t.length; i++) t[i].removeEventListener("load", this.preliminaryLoadCallback, !1);
                (this.preliminaryLoadCallback = null),
                    window.removeEventListener("resize", this.onResizeCallback, !1),
                    (this.onResizeCallback = null),
                    window.removeEventListener("scroll", this.ScrollCallback, !1),
                    (this.ScrollCallback = null),
                    document.removeEventListener(RouterExtensionEvents.HASH_CHANGE, this.onHashChangeCallback, !1),
                    (this.onHashChangeCallback = null),
                    setTimeout(function () {
                        e && e();
                    }, 0);
            } else e();
        }),
        (e.prototype.animateIn = function () {
            (this.wantsToAnimateIn = !0), this.hasPreliminaryLoaded && (document.getElementById("app-page").classList.add("page-loaded"), this.el.classList.add("ready"), (this.animatingIn = !0));
        }),
        (e.prototype.onAnimatedIn = function () {
            this.animatedIn = !0;
        }),
        (e.prototype.dealloc = function () {
            Helper.unbindSelfClicks(this.el), this.el.parentNode.removeChild(this.el), (this.el = null);
        }),
        (e.prototype.onPreliminaryLoaded = function (e) {
            this.preliminaryToLoad--, (this.hasPreliminaryLoaded = this.preliminaryToLoad <= 0), this.hasPreliminaryLoaded && this.wantsToAnimateIn && !this.animatingIn && (this.pingResize(), this.animateIn());
        }),
        (e.prototype.onScrollButtonClick = function (e) {
            e.stopImmediatePropagation();
        }),
        (e.prototype.onHashChange = function (e) {
            this.findHashAndSet();
        }),
        (e.prototype.onResize = function (e) {}),
        (e.prototype.onScroll = function (e) {}),
        (e.prototype.findHashAndSet = function () {}),
        e
    );
})();
var __extends =
        (this && this.__extends) ||
        (function () {
            var n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                        e.__proto__ = t;
                    }) ||
                function (e, t) {
                    for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                };
            return function (e, t) {
                function o() {
                    this.constructor = e;
                }
                n(e, t), (e.prototype = null === t ? Object.create(t) : ((o.prototype = t.prototype), new o()));
            };
        })(),
    HeaderEvent = { HAMBURGER_CLICK: "HeaderEvent-HAMBURGER_CLICK", SCROLL_TO_EXPLORE_VISIBILITY_CHANGE: "HeaderEvent-SCROLL_TO_EXPLORE_VISIBILITY_CHANGE" },
    HeaderView = (function (o) {
        function e(e) {
            var t = o.call(this, e) || this;
            return (
                (t.onNewPageTimer = 0),
                (t.showScrollToExplore = !1),
                (t.canShowScrollToexplore = !0),
                (t.hamburgerLine = t.el.getElementsByTagName("hamburger-line")[0]),
                document.addEventListener(SliderElementEvents.ANIMATED_IN, t.onElementsBuild.bind(t), !1),
                document.addEventListener(SliderElementEvents.FIGURE_ANIMATED_IN, t.onElementsBuild.bind(t), !1),
                document.addEventListener(RouterExtensionEvents.PRE_FETCH, t.handlePreFetch.bind(t), !1),
                document.addEventListener(RouterExtensionEvents.FETCHED, t.handleNewPage.bind(t), !1),
                document.addEventListener(ScrollControllerEvents.SCROLLING, t.onScrolling.bind(t)),
                t
            );
        }
        return (
            __extends(e, o),
            (e.prototype.onElementsBuild = function (e) {
                var t = window.app.router.pageType,
                    o = -1 !== [PageTypes.HOME].indexOf(t);
                this.el.classList.toggle("show", o),
                    (this.canShowScrollToexplore = t === PageTypes.HOME || t === PageTypes.PROJECT),
                    t === PageTypes.PROJECT && window.innerWidth < 620 && (this.canShowScrollToexplore = !1),
                    this.toggleScrollToExplore(this.canShowScrollToexplore);
            }),
            (e.prototype.handlePreFetch = function (e) {
                this.toggleScrollToExplore(!1);
            }),
            (e.prototype.handleNewPage = function (e) {
                var n = Router.getFragment();
                "" === n && (n = "/"),
                    [].slice.call(this.el.querySelectorAll("nav[role='navigation'] li")).map(function (e, t) {
                        e.classList.remove("active"), e.classList.remove("active-semi");
                        var o = e.getElementsByTagName("a")[0].getAttribute("href");
                        "/" !== o && -1 !== n.indexOf(o) ? e.classList.add("active-semi") : "/" !== o || (n !== o && -1 === n.indexOf("editorial")) || e.classList.add("active-semi"),
                            e.getElementsByTagName("a")[0].getAttribute("href") === n && e.classList.add("active");
                    });
            }),
            (e.prototype.onScrolling = function (e) {
                var t = e.detail;
                t.position < ScrollController.maxMin - 10 && this.showScrollToExplore
                    ? this.toggleScrollToExplore(!1)
                    : t.position > ScrollController.maxMin - 10 && !this.showScrollToExplore && this.canShowScrollToexplore && this.toggleScrollToExplore(!0);
            }),
            (e.prototype.toggleScrollToExplore = function (e) {
                e
                    ? (document.body.classList.add("scroll-to-explore--show"), document.dispatchEvent(new CustomEvent(HeaderEvent.SCROLL_TO_EXPLORE_VISIBILITY_CHANGE, { detail: !0 })))
                    : (document.body.classList.remove("scroll-to-explore--show"), document.dispatchEvent(new CustomEvent(HeaderEvent.SCROLL_TO_EXPLORE_VISIBILITY_CHANGE, { detail: !1 }))),
                    e && this.canShowScrollToexplore ? this.hamburgerLine.classList.add("show") : this.hamburgerLine.classList.remove("show"),
                    (this.showScrollToExplore = e);
            }),
            e
        );
    })(BasicAppView);
var FaceView = (function () {
    function t(t) {
        var i = this;
        (this.el = t.el),
            (this.points = []),
            this.el
                .getAttribute("data-face")
                .split("[")
                .join("")
                .split("]")
                .join("")
                .split(",")
                .forEach(function (t) {
                    i.points.push(Number(t));
                }),
            (this.ctx = this.el.getContext("2d")),
            this.resize();
    }
    return (
        (t.prototype.resize = function () {
            this.el.parentElement;
            (this.el.width = this.el.offsetWidth), (this.el.height = this.el.offsetHeight), this.draw();
        }),
        (t.prototype.draw = function () {
            this.ctx.clearRect(0, 0, this.el.width, this.el.height);
            for (var t = 0; t < this.points.length; t += 2) {
                var i = this.points[t],
                    e = this.points[t + 1];
                this.ctx.arc(this.el.width * i, this.el.height * e, 10, 0, 0, !1), (this.ctx.fillStyle = "red"), this.ctx.fill();
            }
        }),
        (t.prototype.dealloc = function () {
            this.ctx = null;
        }),
        t
    );
})();
var __extends =
        (this && this.__extends) ||
        (function () {
            var o =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                        t.__proto__ = e;
                    }) ||
                function (t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                };
            return function (t, e) {
                function n() {
                    this.constructor = t;
                }
                o(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
            };
        })(),
    SliderContentPage = (function (n) {
        function t(t) {
            var e = n.call(this, t) || this;
            return (e.animOutTimer = 0), (e.closeButton = e.el.querySelector('button[type="close"]')), e.closeButton && ((e.closeCallback = e.onCloseClick.bind(e)), e.closeButton.addEventListener("click", e.closeCallback, !1)), e;
        }
        return (
            __extends(t, n),
            (t.prototype.onCloseClick = function (t) {
                var e = Helper.checkAppHREF(this.el.getAttribute("data-parent-url"));
                Router.navigate(e);
            }),
            (t.prototype.animateIn = function () {
                n.prototype.animateIn.call(this), this.closeButton && this.closeButton.classList.add("animate-in"), this.el.getElementsByClassName("slider-content")[0].classList.add("animate-in");
            }),
            (t.prototype.animateOut = function (t) {
                var e = this;
                clearInterval(this.animOutTimer),
                    this.closeButton && this.closeButton.classList.remove("animate-in"),
                    this.el.getElementsByClassName("slider-content")[0].classList.add("animate-out"),
                    (this.animOutTimer = setTimeout(function () {
                        return n.prototype.animateOut.call(e, t);
                    }, 1e3));
            }),
            (t.prototype.onResize = function (t) {}),
            (t.prototype.dealloc = function () {
                document.removeEventListener(ScrollControllerEvents.SCROLLING, this.onScrollingCallback, !1),
                    (this.onScrollingCallback = null),
                    this.closeButton && (this.closeButton.removeEventListener("click", this.closeCallback, !1), (this.closeButton = null), (this.closeCallback = null)),
                    n.prototype.dealloc.call(this);
            }),
            t
        );
    })(BasicPage);
var __extends =
        (this && this.__extends) ||
        (function () {
            var i =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                        t.__proto__ = e;
                    }) ||
                function (t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                };
            return function (t, e) {
                function n() {
                    this.constructor = t;
                }
                i(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
            };
        })(),
    ClientsPage = (function (n) {
        function t(t) {
            var e = n.call(this, t) || this;
            return (e.sliderUi = new SliderUI({ el: e.el.getElementsByClassName("slider-ui")[0] })), e;
        }
        return (
            __extends(t, n),
            (t.prototype.animateIn = function () {
                n.prototype.animateIn.call(this), this.sliderUi.animateIn();
            }),
            (t.prototype.animateOut = function (t) {
                var e = this;
                this.sliderUi.animateOut(function () {
                    n.prototype.animateOut.call(e, t);
                });
            }),
            (t.prototype.dealloc = function () {
                this.sliderUi.dealloc(), (this.sliderUi = null), n.prototype.dealloc.call(this);
            }),
            t
        );
    })(BasicPage);
var __extends =
        (this && this.__extends) ||
        (function () {
            var n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                        t.__proto__ = e;
                    }) ||
                function (t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                };
            return function (t, e) {
                function i() {
                    this.constructor = t;
                }
                n(t, e), (t.prototype = null === e ? Object.create(e) : ((i.prototype = e.prototype), new i()));
            };
        })(),
    ExplorePage = (function (l) {
        function t(t) {
            var e = l.call(this, t) || this;
            (e._scrolled = !1), (e.listAnimtingIn = !1), (e.onTypeButtonClickCallback = e.onTypeButtonClick.bind(e));
            for (var i = 0, n = [].slice.call(e.el.querySelectorAll("menu button")); i < n.length; i++) {
                n[i].addEventListener("click", e.onTypeButtonClickCallback, !1);
            }
            return (
                setTimeout(function () {
                    return (e.listType = e.el.querySelector(".lists").getAttribute("type"));
                }, 1e3),
                Helper.unbindSelfClicks(e.el),
                (e.onListItemClickCallback = e.onListItemClick.bind(e)),
                Helper.bindSelfClicks(e.el, e.onListItemClickCallback),
                e
            );
        }
        return (
            __extends(t, l),
            (t.prototype.onHeaderVisibilityToggle = function (t) {
                var e = t.detail;
                this.el.querySelector(".lists").classList.toggle("show-background", e);
            }),
            (t.prototype.onListItemClick = function (t) {
                t.preventDefault();
                var e = Helper.checkAppHREF(t.currentTarget.getAttribute("href")),
                    i = t.currentTarget;
                (this.elementToAnimateOutTo = i).parentNode.classList.add("selected"), this.activeList.classList.add("disabled"), Router.navigate(e);
            }),
            Object.defineProperty(t.prototype, "scrolled", {
                set: function (t) {
                    this._scrolled !== t && ((this._scrolled = t), this._scrolled ? this.el.classList.add("scrolled") : this.el.classList.remove("scrolled"));
                },
                enumerable: !0,
                configurable: !0,
            }),
            Object.defineProperty(t.prototype, "listType", {
                get: function () {
                    return this._listType;
                },
                set: function (t) {
                    var e = this;
                    (this._listType = t), (this.activeList = this.el.querySelector(".lists ul.list-" + this._listType));
                    var i = window.getComputedStyle(this.activeList, null),
                        n = parseInt(i.getPropertyValue("left"), 10),
                        o = this.activeList.offsetWidth + n - window.innerWidth;
                    window.innerWidth < 768 && (o += 33);
                    try {
                        document.cookie = "list-type=" + this._listType;
                    } catch (t) {}
                    gsap.TweenLite.set(this.activeList, { force3D: !0, x: window.innerWidth - n }),
                        gsap.TweenLite.to(this.activeList, 0.5 * Variables.animTime, {
                            ease: Variables.animEaseOut,
                            force3D: !0,
                            onStart: function () {
                                return (e.listAnimtingIn = !0);
                            },
                            onComplete: function () {
                                return (e.listAnimtingIn = !1);
                            },
                            x: 0,
                        }),
                        (this.scrolled = !1),
                        (ScrollController.minMin = -1 * o);
                },
                enumerable: !0,
                configurable: !0,
            }),
            (t.prototype.onCustomScrolling = function (t) {
                var e = t.detail;
                (this.scrolled = e.position < -10), this.listAnimtingIn || gsap.TweenLite.set(this.activeList, { force3D: !0, x: e.position });
            }),
            (t.prototype.onTypeButtonClick = function (t) {
                for (var e = this, i = 0; i < this.el.querySelectorAll("menu button").length; i++) {
                    this.el.querySelectorAll("menu button")[i].classList.remove("selected");
                }
                t.currentTarget.classList.add("selected");
                var n = window.getComputedStyle(this.activeList, null),
                    o = parseInt(n.getPropertyValue("left"), 10),
                    l = t.currentTarget.getAttribute("type");
                gsap.TweenLite.to(this.activeList, 0.5 * Variables.animTime, {
                    ease: Variables.animEaseIn,
                    force3D: !0,
                    x: window.innerWidth - o,
                    onComplete: function () {
                        return e.onOldTypeAnimatedOut(l);
                    },
                });
            }),
            (t.prototype.onOldTypeAnimatedOut = function (t) {
                window.app.scrollController.reset(), this.el.querySelector(".lists").setAttribute("type", t), (this.listType = t);
            }),
            (t.prototype.onResize = function (t) {}),
            (t.prototype.animateOut = function (t) {
                var e = this;
                if ((l.prototype.animateOut.call(this), this.elementToAnimateOutTo)) {
                    var i = window.app.scrollController,
                        n = Variables.getPaddingRatio() * window.innerWidth,
                        o = this.elementToAnimateOutTo.parentNode.offsetLeft;
                    gsap.TweenLite.to(this.elementToAnimateOutTo, 0.5 * Variables.animTime, {
                        ease: Variables.animEaseInOut,
                        x: -1 * (n + o + i.position),
                        opacity: 0,
                        force3D: !0,
                        onStart: function () {
                            return (e.listAnimtingIn = !0);
                        },
                        onComplete: function () {
                            t();
                        },
                    });
                } else
                    setTimeout(function () {
                        return t();
                    }, 0);
            }),
            (t.prototype.dealloc = function () {
                this.onListItemClickCallback = null;
                for (var t = 0, e = [].slice.call(this.el.querySelectorAll("menu button")); t < e.length; t++) {
                    e[t].removeEventListener("click", this.onTypeButtonClickCallback, !1);
                }
                (this.onTypeButtonClickCallback = null), l.prototype.dealloc.call(this);
            }),
            t
        );
    })(SliderContentPage);
var __extends =
        (this && this.__extends) ||
        (function () {
            var r =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                    function (o, t) {
                        o.__proto__ = t;
                    }) ||
                function (o, t) {
                    for (var e in t) t.hasOwnProperty(e) && (o[e] = t[e]);
                };
            return function (o, t) {
                function e() {
                    this.constructor = o;
                }
                r(o, t), (o.prototype = null === t ? Object.create(t) : ((e.prototype = t.prototype), new e()));
            };
        })(),
    ExploreResultPage = (function (e) {
        function o(o) {
            var t = e.call(this, o) || this;
            return (t.colorBox = t.el.getElementsByClassName("color-box")[0]), (t.colorBoxLeft = 0), t;
        }
        return (
            __extends(o, e),
            (o.prototype.onResize = function (o) {
                e.prototype.onResize.call(this, o), this.colorBox && (this.colorBoxLeft = this.colorBox.offsetLeft);
            }),
            (o.prototype.onCustomScrolling = function (o) {
                var t = o.detail;
                if (this.colorBox) {
                    var e = Math.abs(t.position) / 50;
                    0 === this.colorBoxLeft && this.onResize(null), gsap.TweenLite.set(this.colorBox, { force3D: !0, x: e * this.colorBoxLeft * -1 });
                }
            }),
            o
        );
    })(SliderContentPage);
var MouseFollow = (function () {
    function e() {
        var i = this;
        (this.bindTimer = 0),
            (this._bunkOver = !1),
            (this.canSet = !1),
            (this.onPreFetch = function () {
                (i.bunkOver = !1), clearTimeout(i.bindTimer), i.removeBunks();
            }),
            (this.onBunksChange = function () {
                var e = window.app.router.pageType;
                if (-1 !== [PageTypes.HOME, PageTypes.CLIENTS].indexOf(e)) {
                    (i.canSet = !0), i.removeBunks(), (i.bunkElements = document.getElementsByClassName("image"));
                    for (var n = 0; n < i.bunkElements.length; n++) {
                        var t = i.bunkElements[n];
                        t.addEventListener("mouseenter", i.onBunkElementEnter, !1), t.addEventListener("mouseover", i.onBunkElementEnter, !1), t.addEventListener("mouseleave", i.onBunkElementLeave, !1);
                    }
                    i.bunkOver = i.bunkOver;
                }
            }),
            (this.handleNewPage = function () {
                clearTimeout(i.bindTimer),
                    (i.bindTimer = setTimeout(function () {
                        i.onBunksChange();
                    }, 1500));
            }),
            (this.onBunkElementEnter = function (e) {
                i.bunkOver = !0;
            }),
            (this.onBunkElementLeave = function (e) {
                i.bunkOver = !1;
            }),
            (this.onMouseMove = function (e) {
                FigureElementForBunk.inScaleMode ? (i.bunkOver = !1) : ((i.vector = relax.geom.getXYFromMouseTouchEvent(e)), gsap.TweenLite.set(i.el, { force3D: !0, x: i.vector.x, y: i.vector.y }));
            }),
            document.addEventListener("mousemove", this.onMouseMove, !1),
            (this.el = document.createElement("div")),
            (this.el.id = "follow");
        var e = document.createElement("div");
        e.classList.add("inner"),
            this.el.appendChild(e),
            document.body.appendChild(this.el),
            document.addEventListener(ApplicationEvents.PAGE_APPENDED, this.handleNewPage, !1),
            document.addEventListener(RouterExtensionEvents.PRE_FETCH, this.onPreFetch, !1),
            document.addEventListener(SliderElementEvents.ORDER_CHANGED, this.onBunksChange, !1);
    }
    return (
        (e.prototype.removeBunks = function () {
            if (this.bunkElements)
                for (var e = 0; e < this.bunkElements.length; e++) {
                    var n = this.bunkElements[e];
                    n.removeEventListener("mouseenter", this.onBunkElementEnter, !1), n.removeEventListener("mouseover", this.onBunkElementEnter, !1), n.removeEventListener("mouseleave", this.onBunkElementLeave, !1);
                }
        }),
        Object.defineProperty(e.prototype, "bunkOver", {
            get: function () {
                return this._bunkOver;
            },
            set: function (e) {
                if (((!this.vector || (0 === this.vector.x && 0 === this.vector.y)) && (e = !1), (this._bunkOver = e), this.canSet)) {
                    var n = this.el.getElementsByClassName("inner")[0];
                    e
                        ? (gsap.TweenLite.to(n, 0.35 * Variables.animTime, { ease: Variables.animEaseOut, force3D: !0, scale: 1, y: 0 }), this.el.classList.add("bunk--zoomin"))
                        : (gsap.TweenLite.to(n, 0.35 * Variables.animTime, {
                              ease: Variables.animEaseOut,
                              force3D: !0,
                              scale: 0,
                              y: 0,
                              onComplete: function () {
                                  gsap.TweenLite.set(n, { force3D: !0, y: -40 });
                              },
                          }),
                          this.el.classList.remove("bunk--zoomin"));
                }
            },
            enumerable: !0,
            configurable: !0,
        }),
        e
    );
})();
var ScrollControllerEvents = { SCROLLED: "ScrollControllerEvents-SCROLLED", SCROLLING: "ScrollControllerEvents-SCROLLING" },
    ScrollController = (function () {
        function e() {
            (this.yPosition = 0), (this.xPosition = 0), (this._yTarget = 0), (this._xTarget = 0), (this.disabled = !1), (this.scrollingTo = !1), (this._hasInitScrolled = !1), (this.yAcceleration = 0), this.reset();
            var t = relax.browser.isTouch() && (relax.browser.isMobile() || relax.browser.isTablet()),
                i = relax.browser.isFirefox() ? 1.5 : 0.8;
            VirtualScroll.options({ keyStep: 200, firefoxMult: 10 * i, touchMult: i * (t ? 2.5 : 3), mouseMult: i }), VirtualScroll.on(this.onVirtualScroll.bind(this)), (e.customScrollEnabled = !0);
        }
        return (
            Object.defineProperty(e.prototype, "hasInitScrolled", {
                get: function () {
                    return this._hasInitScrolled;
                },
                set: function (t) {
                    (this._hasInitScrolled = t) && document.body.classList.add("init-scrolled");
                },
                enumerable: !0,
                configurable: !0,
            }),
            Object.defineProperty(e.prototype, "yTarget", {
                get: function () {
                    return this._yTarget;
                },
                set: function (t) {
                    (this._yTarget = Math.min(e.maxMin, t)), 0 !== e.minMin && (this._yTarget = Math.max(this._yTarget, e.minMin));
                },
                enumerable: !0,
                configurable: !0,
            }),
            Object.defineProperty(e.prototype, "xTarget", {
                get: function () {
                    return this._xTarget;
                },
                set: function (t) {
                    (this._xTarget = Math.min(e.maxMin, t)), 0 !== e.minMin && (this._xTarget = Math.max(this._xTarget, e.minMin));
                },
                enumerable: !0,
                configurable: !0,
            }),
            Object.defineProperty(e.prototype, "position", {
                get: function () {
                    return this.yPosition;
                },
                enumerable: !0,
                configurable: !0,
            }),
            (e.prototype.addToTarget = function (t, i) {
                void 0 === i && (i = !1), (this.yTarget += t), (this.scrollingTo = !i), this.render();
            }),
            (e.prototype.scrollTo = function (t, i) {
                void 0 === i && (i = !1);
                var e = this.yTarget + (-1 * t - this.yTarget);
                e !== this.yTarget && ((this.scrollingTo = !i), (this.yTarget = e), this.render());
            }),
            (e.prototype.reset = function () {
                (e.minMin = 0), (e.maxMin = 0), (this.yPosition = 0), (this.xPosition = 0), (this.yTarget = 0), (this.xTarget = 0);
            }),
            (e.prototype.handleNewPage = function () {
                window.app.router.oldPageType;
                var t = window.app.router.pageType;
                (this.sliderElements && this.sliderElements.ignorePageChange && t === PageTypes.PROJECT) || this.reset(), (this.disabled = t === PageTypes.CONTACT);
                var i = window.app.router;
                this.sliderElements || (this.sliderElements = new SliderElements({ infinite: -1 === [PageTypes.CONTACT, PageTypes.EXPLORE_RESULT].indexOf(t) })), this.sliderElements.update(i.response);
            }),
            (e.prototype.onVirtualScroll = function (t) {
                if (Application.introDone && !this.scrollingTo && !this.disabled) {
                    var i = this.yTarget + t.deltaY;
                    this.yTarget = i;
                    var e = this.xTarget + t.deltaX;
                    (this.xTarget = e), window.innerWidth <= 1024 && (this.yTarget = this.xTarget), this.rAf || this.render();
                }
            }),
            (e.prototype.render = function () {
                var t = this;
                this.rAf && cancelAnimationFrame(this.rAf),
                    (this.scrollYDirection = this.yTarget < this.yPosition ? 1 : this.yTarget > this.yPosition ? -1 : 0),
                    (this.scrollXDirection = this.xTarget < this.xPosition ? 1 : this.xTarget > this.xPosition ? -1 : 0),
                    (this.yPosition += 0.2 * (this.yTarget - this.yPosition)),
                    (this.xPosition += 0.2 * (this.xTarget - this.xPosition));
                var i = this.yPosition - this.yTarget;
                (this.yAcceleration += 0.2 * (i - this.yAcceleration)), this.sliderElements && this.sliderElements.setX(this.yPosition);
                var e = 0.05 < Math.abs(this.yAcceleration);
                e
                    ? (this.rAf = requestAnimationFrame(function () {
                          return t.render();
                      }))
                    : ((this.rAf = null), document.dispatchEvent(new CustomEvent(ScrollControllerEvents.SCROLLED))),
                    document.dispatchEvent(new CustomEvent(ScrollControllerEvents.SCROLLING, { detail: this })),
                    this.position < -100 && !this.hasInitScrolled && (this.hasInitScrolled = !0),
                    e || (this.scrollingTo = !1);
            }),
            (e.customScrollEnabled = !1),
            (e.maxMin = 0),
            (e.minMin = 0),
            e
        );
    })();
var __extends =
        (this && this.__extends) ||
        (function () {
            var i =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                        e.__proto__ = t;
                    }) ||
                function (e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                };
            return function (e, t) {
                function n() {
                    this.constructor = e;
                }
                i(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
            };
        })(),
    SliderUIEvents = { MENU_BUTTON_CLICK: "SliderUIEvents-MENU_BUTTON_CLICK" },
    SliderUI = (function (n) {
        function e(e) {
            var t = n.call(this, e) || this;
            return (
                (t.onElementsBuildCallback = t.onElementsBuild.bind(t)),
                (t.onFocusIndexUpdateCallback = t.onFocusIndexUpdate.bind(t)),
                document.addEventListener("keyup", t.onKeyUp.bind(t), !1),
                document.addEventListener(SliderElementsEvents.ELEMENTS_BUILD, t.onElementsBuildCallback, !1),
                document.addEventListener(SliderElementsEvents.FOCUS_INDEX_UPDATE, t.onFocusIndexUpdateCallback, !1),
                t
            );
        }
        return (
            __extends(e, n),
            (e.prototype.animateIn = function () {
                this.el.classList.add("animate-in");
            }),
            (e.prototype.animateOut = function (e) {
                this.el.classList.remove("animate-in"),
                    setTimeout(function () {
                        return e();
                    }, 300);
            }),
            (e.prototype.dealloc = function () {
                document.removeEventListener(SliderElementsEvents.ELEMENTS_BUILD, this.onElementsBuildCallback, !1),
                    document.removeEventListener(SliderElementsEvents.FOCUS_INDEX_UPDATE, this.onFocusIndexUpdateCallback, !1),
                    (this.onElementsBuildCallback = null),
                    (this.onFocusIndexUpdateCallback = null);
            }),
            (e.prototype.onElementsBuild = function (e) {
                var t = e.detail;
                (this.index = 0), (this.length = t.numElements);
            }),
            (e.prototype.onFocusIndexUpdate = function (e) {
                var t = e.detail.focusIndex;
                this.index = t;
            }),
            (e.prototype.onKeyUp = function (e) {
                39 === e.keyCode ? document.dispatchEvent(new CustomEvent(SliderUIEvents.MENU_BUTTON_CLICK, { detail: !0 })) : 37 === e.keyCode && document.dispatchEvent(new CustomEvent(SliderUIEvents.MENU_BUTTON_CLICK, { detail: !1 }));
            }),
            Object.defineProperty(e.prototype, "index", {
                set: function (e) {
                    var t,
                        n = 0;
                    this.indexSpan &&
                        ((n = 0.1),
                        (t = this.indexSpan),
                        gsap.TweenLite.to(t, 0.25 * Variables.animTime, {
                            force3D: !0,
                            ease: Variables.animEaseOut,
                            y: 10,
                            opacity: 0,
                            onComplete: function () {
                                try {
                                    for (; 1 < t.parentNode.children.length; ) t.parentNode.removeChild(t.parentNode.children[0]);
                                } catch (e) {}
                            },
                        })),
                        (e += 1);
                    var i = document.getElementById("slider-ui-index");
                    (this.indexSpan = document.createElement("span")),
                        (this.indexSpan.innerHTML = 1 == e.toString().length ? "0" + e.toString() : e.toString()),
                        this.indexSpan &&
                            i &&
                            (i.appendChild(this.indexSpan),
                            gsap.TweenLite.set(this.indexSpan, { force3D: !0, y: -10, opacity: 0 }),
                            gsap.TweenLite.to(this.indexSpan, 0.25 * Variables.animTime, { ease: Variables.animEaseOut, force3D: !0, delay: n, y: 0, opacity: 1 }));
                },
                enumerable: !0,
                configurable: !0,
            }),
            Object.defineProperty(e.prototype, "length", {
                set: function (e) {
                    var t = "<span>" + (1 == e.toString().length ? "0" + e.toString() : e.toString()) + "</span>",
                        n = document.getElementById("slider-ui-length");
                    n && (n.innerHTML = t);
                },
                enumerable: !0,
                configurable: !0,
            }),
            e
        );
    })(BasicAppView);
var __extends =
        (this && this.__extends) ||
        (function () {
            var a =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                        t.__proto__ = e;
                    }) ||
                function (t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                };
            return function (t, e) {
                function n() {
                    this.constructor = t;
                }
                a(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
            };
        })(),
    SliderInfo = (function (a) {
        function i(t) {
            var n = a.call(this, t) || this;
            (n.text = ""),
                (n.currentCategoryText = "Mica Linares"),
                (n.currentCategoryNumChildren = ""),
                (n.showingBranding = !0),
                (n.canShowLogoType = !1),
                (n.hasSetupForIntro = !1),
                (n.introWantsToAnimateInRequestd = !1),
                (n.isShowingIntroScreen = !1),
                (i.instance = n);
            var e = window.app.router.pageType;
            return (
                (n.canShowLogoType = e === PageTypes.HOME || e === PageTypes.CONTACT),
                document.addEventListener(ScrollControllerEvents.SCROLLING, n.onCustomScrolling.bind(n), !1),
                document.addEventListener(SliderElementsEvents.ELEMENTS_BUILD, function (t) {
                    var e = t.detail;
                    (n.currentCategoryText = e.getCurrentDataset().getAttribute("data-client")), n.showingBranding || n.updateData(n.currentCategoryText, !1);
                }),
                document.addEventListener(SliderElementsEvents.FOCUS_INDEX_UPDATE, function (t) {
                    var e = t.detail;
                    (n.currentCategoryText = e.getCurrentDataset().getAttribute("data-client")), n.showingBranding || n.updateData(n.currentCategoryText, !1);
                }),
                document.addEventListener(
                    ApplicationEvents.PAGE_APPENDED,
                    function (t) {
                        return n.onPageChange();
                    },
                    !1
                ),
                Application.introDone ? ((n.hasSetupForIntro = !0), n.onPageChange()) : n.animateInForIntro(),
                n
            );
        }
        return (
            __extends(i, a),
            (i.prototype.animateInForIntro = function () {
                var t = this;
                (this.showingBranding = !0),
                    this.updateData("Micaela Linares", !0, "Make Up Artist & Hairstylist", function () {
                        (t.hasSetupForIntro = !0), t.introWantsToAnimateInRequestd && t.slideIntrotToPlace();
                    }),
                    setTimeout(function () {
                        return t.animateIntroSpansIn1();
                    }, 0);
            }),
            (i.prototype.slideIntrotToPlace = function () {
                document.body.classList.add("show"), Application.onIntroStart(), (this.isShowingIntroScreen = !1), this.introBunkCallback();
                for (var t = 3, e = this.el.getElementsByClassName("left")[0], n = (e = e.children[e.children.length - 1]).getElementsByClassName("item"), a = 0; a < n.length; a++) {
                    var i = n[a];
                    gsap.TweenLite.to(i, 1.25 * Variables.animTime, {
                        ease: Variables.animEaseInOut,
                        delay: 0.04 * a,
                        force3D: !0,
                        x: 0,
                        onComplete: function () {
                            0 == --t && Application.onIntroDone();
                        },
                    });
                }
            }),
            (i.prototype.animateIntroSpansIn1 = function () {
                var t = this,
                    e = this.el.getElementsByClassName("left")[0];
                e = e.children[e.children.length - 1];
                for (var n = 0.034 * window.innerWidth, a = 0.5 * window.innerWidth - n, i = e.getElementsByClassName("item"), o = 0, r = [121, 204, 67], s = [90, 152, 55], l = 0; l < i.length; l++) {
                    var p = i[l];
                    gsap.TweenLite.set(p, { force3D: !0, opacity: 0, x: a + (p.classList.contains("subtitle") ? (768 < window.innerWidth ? -40 : -30) : -0.5 * (768 < window.innerWidth ? r[l] : s[l])), y: -30 }),
                        gsap.TweenLite.to(p, Variables.animTime, {
                            ease: Variables.animEaseOut,
                            delay: 1 + 0.04 * (i.length - l),
                            force3D: !0,
                            opacity: 1,
                            y: 0,
                            onComplete: function () {
                                (t.isShowingIntroScreen = !0), t.introBunkCallback && 0 == o++ && (t.introBunkCallback(), t.slideIntrotToPlace());
                            },
                        });
                }
            }),
            (i.prototype.introWantsToAnimateIn = function (t) {
                (this.introBunkCallback = t), (this.introWantsToAnimateInRequestd = !0), this.isShowingIntroScreen && this.slideIntrotToPlace();
            }),
            (i.prototype.onPageChange = function () {
                this.showingBranding = !1;
                var t = window.app.router.pageType;
                (this.canShowLogoType = !Application.introDone || t === PageTypes.HOME || t === PageTypes.CONTACT), this.canShowLogoType && this.updateData("Mica Linares", !0, "Make Up Artist & Hairstylist");
            }),
            (i.prototype.onCustomScrolling = function (t) {
                var e = t.detail;
                this.canShowLogoType &&
                    (e.position >= Math.round(ScrollController.maxMin) - 20
                        ? this.showingBranding || this.updateData("Mica Linares", !0, "Make Up Artist & Hairstylist")
                        : e.position < Math.round(ScrollController.maxMin) && this.showingBranding && this.updateData(this.currentCategoryText, !1));
            }),
            (i.prototype.updateData = function (t, e, n, a) {
                if (((this.showingBranding = e), t && this.text !== t)) {
                    var i = this.el.getElementsByClassName("left")[0];
                    this.animateSpansOut();
                    var o = document.createElement("div"),
                        r = '\n                <span class="item ' + (e && "branding") + '"> ' + t.split(" ").join('</span><span class="item ' + (e && "branding") + '">') + " </span>\n            ";
                    if ((n && (r += "<span class='item subtitle'>" + n + "</span>"), (o.innerHTML = r), i.appendChild(o), (this.text = t), !e)) {
                        var s = document.createElement("sup");
                        s.innerHTML = "" + this.currentCategoryNumChildren + "";
                        var l = o.getElementsByTagName("span");
                        0 < l.length && l[l.length - 1].appendChild(s);
                    }
                    this.animateSpansIn(a, e ? 0.5 : 0);
                }
            }),
            (i.prototype.animateSpansIn = function (t, e) {
                if ((void 0 === e && (e = 0), Application.introDone))
                    for (var n = this.el.getElementsByClassName("left")[0], a = (n = n.children[n.children.length - 1]).getElementsByClassName("item"), i = a.length, o = 0; o < a.length; o++) {
                        var r = a[o];
                        gsap.TweenLite.set(r, { force3D: !0, y: -30, opacity: 0 }),
                            gsap.TweenLite.to(r, 0.5 * Variables.animTime, {
                                ease: Variables.animEaseOut,
                                delay: e + (Application.introDone ? 0 : 1) + 0.04 * (a.length - o),
                                force3D: !0,
                                opacity: 1,
                                y: 0,
                                onComplete: function () {
                                    t && 0 == --i && t();
                                },
                            });
                    }
            }),
            (i.prototype.animateSpansOut = function () {
                var o,
                    r = this.el.getElementsByClassName("left")[0].children;
                if (0 < r.length)
                    for (var t = 0; t < r.length; t++)
                        (o = t),
                            (function () {
                                for (var t = r[o], e = t.getElementsByClassName("item"), n = e.length, a = 0; a < e.length; a++) {
                                    var i = e[a];
                                    gsap.TweenLite.killTweensOf(i),
                                        gsap.TweenLite.to(i, 0.25 * Variables.animTime, {
                                            ease: Variables.animEaseOut,
                                            delay: 0.02 * (e.length - a),
                                            force3D: !0,
                                            opacity: 0,
                                            y: 30,
                                            onComplete: function () {
                                                0 == --n && t.parentNode && t && t.parentNode.removeChild(t);
                                            },
                                        });
                                }
                            })();
            }),
            i
        );
    })(BasicAppView);
var SliderElementEvents = {
        LOADED: "SliderElementEvents-loaded",
        ANIMATED_OUT: "SliderElementEvents-animted-out",
        ANIMATED_IN: "SliderElementEvents-animted-in",
        ORDER_CHANGED: "SliderElementEvents-order-changed",
        FIGURE_ANIMATED_IN: "SliderElementEvents-figure-animated-in",
        FIGURE_ANIMATED_OUT: "SliderElementEvents-figure-animated-out",
    },
    SliderElement = (function () {
        function e(e) {
            (this.left = 0),
                (this.right = 0),
                (this.center = 0),
                (this.paddingLeft = 0),
                (this._elementWidth = 0),
                (this._inView = !1),
                (this.usePadding = !1),
                (this.maxPadding = 0),
                (this.scrollDirection = 0),
                (this.onElementImgLoaded = function (t) {
                    return function (e) {
                        t.classList.remove("lazyload"), t.parentNode.parentNode.getElementsByClassName("exoskelet")[0].classList.add("invisible");
                    };
                }),
                (this.el = e.el),
                (this.controller = e.controller),
                (this.contentIndex = e.index),
                (this.buildIndex = e.index),
                (this.usePadding = e.usePadding),
                (this.isFirstCreatedElement = e.isFirstCreatedElement),
                (this.limitPaddingToFirstChild = e.limitPaddingToFirstChild),
                (this.canAllScale = e.canAllScale),
                this.bindATags(),
                this.setWidth(),
                this.setupFigure(e.shuffle),
                setTimeout(function () {
                    document.dispatchEvent(new CustomEvent(SliderElementEvents.LOADED));
                }, 0);
        }
        return (
            Object.defineProperty(e.prototype, "elementWidth", {
                get: function () {
                    return this._elementWidth + this.paddingLeft;
                },
                enumerable: !0,
                configurable: !0,
            }),
            Object.defineProperty(e.prototype, "inView", {
                get: function () {
                    return this._inView;
                },
                set: function (e) {
                    e && !this.el.classList.contains("in-view") ? this.el.classList.add("in-view") : !e && this.el.classList.contains("in-view") && this.el.classList.remove("in-view"), (this._inView = e) || this.figureElement.hide();
                },
                enumerable: !0,
                configurable: !0,
            }),
            (e.prototype.setWidth = function () {
                if (this.figureElement) {
                    this.figureElement.onWindowResize();
                    var e = 0;
                    if (!!this.el.getElementsByClassName("case-elements")[0]) (e = this.figureElement.getWidth()), (this._elementWidth = e);
                    else {
                        for (var t = this.el.getElementsByClassName("bunk-element"), i = 0; i < t.length; i++) {
                            e += t[i].offsetWidth;
                        }
                        var n = 0.2 * window.innerWidth;
                        this._elementWidth = e + (this.isAbsolutlyFirstChildWithPadding() ? 0 : n);
                    }
                    (this._elementWidth = Math.max(700, this._elementWidth)), (this.el.style.minWidth = this._elementWidth + "px");
                }
            }),
            (e.prototype.updateX = function () {
                if (this.inView) {
                    var e = this.left + this.paddingLeft;
                    this.figureElement.setX(e);
                }
            }),
            (e.prototype.calcX = function (e) {
                (this.left = e),
                    this.usePadding && this.calcPaddingLeft(),
                    (this.right = this.left + this.elementWidth),
                    (this.center = this.left + 0.5 * this.elementWidth),
                    (this.centerFromScreenPercent = this.center / window.innerWidth),
                    (this.leftFromScreenPercent = (this.left + this.paddingLeft) / window.innerWidth),
                    this.figureElement &&
                        (this.isAbsolutlyFirstChildWithPadding()
                            ? this.figureElement.onXUpdate(this.leftFromScreenPercent, this.left + this.paddingLeft, this.maxPadding)
                            : this.figureElement.onXUpdate(this.centerFromScreenPercent, this.left + this.paddingLeft, this.maxPadding, this.canAllScale)),
                    (this.centerFromScreenPercent = Math.min(1, Math.max(0, this.centerFromScreenPercent))),
                    (this.leftFromScreenPercent = Math.min(1, Math.max(0, this.leftFromScreenPercent)));
            }),
            (e.prototype.isAbsolutlyFirstChildWithPadding = function () {
                return this.limitPaddingToFirstChild && this.isFirstCreatedElement;
            }),
            (e.prototype.calcPaddingLeft = function () {
                if (this.limitPaddingToFirstChild && !this.isFirstCreatedElement) this.paddingLeft = 0;
                else {
                    var e = 1.15 * this.maxPadding;
                    (this.paddingLeft = Math.min(1, Math.max(0, 1 - this.left / e))), (this.paddingLeft *= this.maxPadding);
                }
            }),
            (e.prototype.unbindATags = function () {
                if (this.anchorEls) {
                    for (var e = 0; e < this.anchorEls.length; e++) {
                        this.anchorEls[e].removeEventListener("click", this.clickCallback, !0);
                    }
                    this.clickCallback = null;
                }
            }),
            (e.prototype.bindATags = function () {
                if ((this.unbindATags(), (this.anchorEls = this.el.querySelectorAll("a[target=_self]")), this.anchorEls && 0 < this.anchorEls.length)) {
                    this.clickCallback = this.onClick.bind(this);
                    for (var e = 0; e < this.anchorEls.length; e++) {
                        this.anchorEls[e].addEventListener("click", this.clickCallback, !0);
                    }
                }
            }),
            (e.prototype.onClick = function (e) {
                e.stopPropagation(), e.preventDefault(), e.currentTarget.blur();
                var t = window.app.scrollController.yTarget - ScrollController.maxMin,
                    i = Math.abs(t) < 10;
                if (this.isAbsolutlyFirstChildWithPadding() && i) document.dispatchEvent(new CustomEvent(SliderUIEvents.MENU_BUTTON_CLICK, { detail: !0 }));
                else {
                    (FigureElementForBunk.esID = e.currentTarget.getAttribute("data-id")), this.controller.setElementInFocus(this);
                    var n = Helper.checkAppHREF(e.currentTarget.getAttribute("href"));
                    Router.navigate(n);
                }
            }),
            (e.prototype.setupFigure = function (e, t) {
                void 0 === e && (e = !1),
                    void 0 === t && (t = !1),
                    this.figureElement && (this.figureElement.dealloc(), (this.figureElement = null)),
                    0 < this.el.getElementsByClassName("bunk-element").length
                        ? (this.figureElement = new FigureElementForBunk({ el: this.el, canAnimatedIn: t, sliderElement: this, controller: this.controller, isFirstBunkWithPadding: this.isAbsolutlyFirstChildWithPadding() }))
                        : ((this.figureElement = new FigureElementForCase({ el: this.el, shuffle: e, sliderElement: this, controller: this.controller })),
                          -1 === [PageTypes.PROJECT, PageTypes.CLIENTS, PageTypes.HOME].indexOf(window.app.router.oldPageType) || -1 !== [PageTypes.CONTACT].indexOf(window.app.router.pageType)
                              ? this.animateIn()
                              : document.dispatchEvent(new CustomEvent(SliderElementEvents.ANIMATED_IN)));
            }),
            (e.prototype.animateIn = function () {
                var e = this,
                    t = (1 - Variables.getPaddingRatio()) * window.innerWidth;
                gsap.TweenLite.set(this.el, { force3D: !0, x: t });
                var i = window.app.router.pageType === PageTypes.CONTACT;
                Variables.isMobile && i
                    ? setTimeout(function () {
                          return function () {
                              0 === e.buildIndex && document.dispatchEvent(new CustomEvent(SliderElementEvents.ANIMATED_IN));
                          };
                      }, 0)
                    : gsap.TweenLite.to(this.el, Variables.animTime, {
                          force3D: !0,
                          ease: Variables.animEaseInOut,
                          delay: 0.5,
                          x: 0,
                          onComplete: function () {
                              0 === e.buildIndex && document.dispatchEvent(new CustomEvent(SliderElementEvents.ANIMATED_IN));
                          },
                      });
            }),
            (e.prototype.updateContent = function (e, t, i) {
                (this.contentIndex = t), (this.isFirstCreatedElement = i), this.el != e && this.el.parentNode && (this.el.parentNode.replaceChild(e, this.el), (this.el = e), this.setupFigure(!1, 0 !== this.left), this.bindATags());
                var n = this.el.classList.contains("bunk--type-aa") || this.el.classList.contains("bunk--type-a"),
                    s = window.app.router.pageType === PageTypes.CLIENTS;
                n && s && (this.el.classList.remove("bunk--type-aa"), this.el.classList.add("bunk--type-a")),
                    n &&
                        (this.isFirstCreatedElement && this.limitPaddingToFirstChild && -1 == this.scrollDirection && (this.el.classList.add("bunk--type-aa"), this.el.classList.remove("bunk--type-a")),
                        this.limitPaddingToFirstChild && 1 == this.scrollDirection && (this.el.classList.remove("bunk--type-aa"), this.el.classList.add("bunk--type-a"))),
                    this.setWidth(),
                    this.onWindowResize();
            }),
            (e.prototype.lazyLoadImages = function () {
                var l = this;
                setTimeout(function () {
                    for (var e = l.el.getElementsByClassName("lazyload"), t = 0; t < e.length; t++) {
                        var i = e[t],
                            n = i.getAttribute("data-src"),
                            s = i.getAttribute("data-srcset");
                        n && s
                            ? (i.setAttribute("src", n),
                              i.setAttribute("srcset", s),
                              i.removeAttribute("data-src"),
                              i.removeAttribute("data-srcset"),
                              i.addEventListener("load", l.onElementImgLoaded(i), !1),
                              i.complete && l.onElementImgLoaded(i))
                            : i.classList.remove("lazyload");
                    }
                }, 0);
            }),
            (e.prototype.animateOut = function (e) {
                var t = this;
                this.el.removeEventListener("click", this.clickCallback, !0),
                    this.figureElement.animateOut(e, function () {
                        document.dispatchEvent(new CustomEvent(SliderElementEvents.ANIMATED_OUT)), t.dealloc();
                    });
            }),
            (e.prototype.dealloc = function () {
                this.figureElement && (this.figureElement.dealloc(), (this.figureElement = null)), this.unbindATags(), (this.anchorEls = null), (this.el = null);
            }),
            (e.prototype.onWindowResize = function () {
                this.lazyLoadImages(), (this.el.style.height = window.innerHeight + "px"), this.setWidth(), this.figureElement && this.figureElement.onWindowResize();
                var e = Variables.getPaddingRatio();
                (this.maxPadding = window.innerWidth * e), this.usePadding && this.calcPaddingLeft();
            }),
            (e.prototype.orderChangedSoChangeContent = function (e) {
                this.onWindowResize(), (this.scrollDirection = e), document.dispatchEvent(new CustomEvent(SliderElementEvents.ORDER_CHANGED, { detail: this }));
            }),
            (e.MIN_WIDTH = 760),
            e
        );
    })();
var FigureElementForBunk = (function () {
    function b(e) {
        (this.headerVisible = !1),
            (this.hasCurrentLeftBeenSetSoWeCanAnimateIn = !1),
            (this.animatingIn = !1),
            (this.isFirstBunkWithPadding = !1),
            (this.mouseMove = 0),
            (this.canAnimatedIn = !0),
            (this.el = e.el),
            (this.sliderElement = e.sliderElement),
            (this.controller = e.controller),
            (this.isFirstBunkWithPadding = e.isFirstBunkWithPadding),
            (this.canAnimatedIn = !1 !== e.canAnimatedIn),
            (this.onFigureAnchorClickCallback = this.onAnchorClick.bind(this)),
            (this.onElAnimatedCallback = this.onElAnimated.bind(this)),
            this.el.addEventListener(relax.animation.getTransitionEndEvent(), this.onElAnimatedCallback, !1),
            (this.elementScales = []),
            (this.elementXs = []),
            (this.mouseMove = b.mouseMoveTarget),
            (this.figures = [].slice.call(this.el.getElementsByTagName("figure")));
        for (var t = 0; t < this.figures.length; t++) {
            var i = this.figures[t];
            parseInt(window.getComputedStyle(i).getPropertyValue("height")) > window.innerHeight && (i.style.height = window.innerHeight + "px"), i.addEventListener("click", this.onFigureAnchorClickCallback, !1);
            var n = window.getComputedStyle(i);
            parseInt(n.getPropertyValue("height"), 10) == window.innerHeight &&
                (i.classList.add("header-open-scale-item"), "auto" === n.getPropertyValue("right") ? i.classList.add("left-aligned") : "auto" === n.getPropertyValue("left") && i.classList.add("right-aligned")),
                (i.style.display = "block");
            var s = i.getElementsByClassName("bunk-element--inner")[0],
                a = s.getBoundingClientRect().height;
            s.setAttribute("ratio", ((a / Variables.getWindowInnerHeight()) * 1).toString());
        }
        ScrollController.customScrollEnabled && ((this.onMouseMoveCallback = this.onMouseMove.bind(this)), document.addEventListener("mousemove", this.onMouseMoveCallback, !1));
    }
    return (
        (b.prototype.onAnchorClick = function (e) {
            e.currentTarget.style.zIndex = "100";
        }),
        (b.setInScrollMode = function (e) {
            e !== b.inScaleMode && ((b.inScaleMode = e) ? document.getElementById("scroll-list").classList.add("disable") : document.getElementById("scroll-list").classList.remove("disable"));
        }),
        (b.prototype.reset = function () {
            (this.currentLeft = 0), (this.mouseMove = 0), (this.elementScales = []), (this.elementXs = []);
        }),
        (b.prototype.hide = function () {}),
        (b.prototype.setX = function (e) {
            gsap.TweenLite.set(this.el, { force3D: !0, x: e });
        }),
        (b.prototype.onMouseMove = function (e) {
            var t = this;
            if (e) {
                var i = window.relax.geom.getXYFromMouseTouchEvent(e);
                (b.mouseMoveTarget = i.x / window.innerWidth),
                    this.rAf ||
                        (this.rAf = requestAnimationFrame(function () {
                            return t.render();
                        }));
            }
        }),
        (b.prototype.render = function () {
            var e = this;
            if (!this.animatingOut) {
                this.rAf && cancelAnimationFrame(this.rAf);
                var t = this.headerVisible ? 0.5 : b.mouseMoveTarget;
                this.animatingOut || this.animatingIn || (this.mouseMove += 0.15 * (t - this.mouseMove));
                for (var i = 0, n = 0; n < this.elementScales.length; n++) {
                    var s = this.elementScales[n];
                    (s.scale += 0.3 * (s.scaleTarget - s.scale)), gsap.TweenLite.set(this.figures[n], { force3D: !0, scale: s.scale });
                }
                var a = !1;
                0 === this.elementXs.length && this.setxx();
                for (n = 0; n < this.elementXs.length; n++) {
                    var r = this.figures[n],
                        o = r.getElementsByClassName("bunk-element--inner")[0],
                        l = r.getElementsByClassName("image")[0],
                        h = this.elementXs[n];
                    h.x += (0 - h.x) * h.speed;
                    var m = Number(o.getAttribute("ratio")),
                        g = 0;
                    if (!Variables.isMobile && ((g = -100 * (this.mouseMove - 0.5) * m), this.elementScales[n] && this.isFirstBunkWithPadding && 0 === n)) {
                        var u = 1 - Math.min(1, (this.elementScales[n].scale - 1) / 0.8);
                        (g *= u), (a = u < 0.1), this.elementScales[n].scale - 1 < 0.02 ? r.classList.remove("scaling") : r.classList.add("scaling");
                    }
                    var d = h.x + g;
                    gsap.TweenLite.set(l, { force3D: !0, x: d }), (i += 0 - h.x);
                }
                this.isFirstBunkWithPadding && b.setInScrollMode(a),
                    Math.abs(i) < 0.02 && !this.animatingIn && Math.abs(this.mouseMove - t) <= 0.001
                        ? (this.rAf = null)
                        : (this.rAf = requestAnimationFrame(function () {
                              return e.render();
                          }));
            }
        }),
        (b.prototype.onElAnimated = function (e) {
            "height" === e.propertyName && this.el.classList.remove("animating");
        }),
        (b.prototype.setxx = function () {
            for (var e = window.app.scrollController, t = 0; t < this.figures.length; t++) {
                var i = this.figures[t].getElementsByClassName("bunk-element--inner")[0],
                    n = Number(i.getAttribute("ratio"));
                if (!this.elementXs[t]) {
                    var s = 8 * n * 0.1;
                    this.elementXs[t] = { x: e.yAcceleration, speed: s };
                }
                this.elementXs[t].x = e.yAcceleration;
            }
        }),
        (b.prototype.onXUpdate = function (e, t, i, n) {
            if ((void 0 === n && (n = !1), (this.currentLeft = t), !this.animatingOut && !this.animatingIn)) {
                window.app.scrollController;
                var s = Variables.getWindowInnerHeight();
                this.setxx();
                for (var a = 0; a < this.figures.length; a++) {
                    var r = this.figures[a].getElementsByClassName("bunk-element--inner")[0],
                        o = Number(r.getAttribute("ratio")) * s;
                    if (this.isFirstBunkWithPadding && 0 === a) {
                        var l = s / o,
                            h = (e / Variables.getPaddingRatio()) * l;
                        this.elementScales[a] || (this.elementScales[a] = { scale: Math.max(1, h), scaleTarget: Math.max(1, h) }), (this.elementScales[a].scaleTarget = Math.max(1, h));
                    }
                }
                this.hasCurrentLeftBeenSetSoWeCanAnimateIn || ((this.hasCurrentLeftBeenSetSoWeCanAnimateIn = !0), this.animateIn(this.canAnimatedIn)), this.rAf || this.render();
            }
        }),
        (b.prototype.animateIn = function (d) {
            var e = this;
            void 0 === d && (d = !1), (this.animatingIn = !0);
            var c = 0,
                f = function () {
                    --c <= 0 && ((e.animatingIn = !1), document.dispatchEvent(new Event(SliderElementEvents.FIGURE_ANIMATED_IN)));
                };
            this.setxx();
            for (
                var p = Application.checkForIntro(),
                    v = this.currentLeft,
                    t = function (e) {
                        var t = d ? 0 : 0.1 * e,
                            i = w.figures[e],
                            n = i.getElementsByClassName("bunk-element--inner")[0],
                            s = i.getBoundingClientRect().left;
                        if (((w.isInView = 0 <= v + s && v + s <= Math.max(window.innerWidth, 420)), n.classList.add("show"), w.isInView || (p && w.isFirstBunkWithPadding)))
                            if (w.isFirstBunkWithPadding) {
                                var a = n.getElementsByClassName("image--outer")[0],
                                    r = a.getElementsByTagName("img")[0];
                                if (p) {
                                    var o = !1,
                                        l = !1,
                                        h = 0,
                                        m = function () {
                                            if (o) {
                                                clearTimeout(h);
                                                SliderInfo.instance.introWantsToAnimateIn(function () {
                                                    gsap.TweenLite.to(a, 1.25 * Variables.animTime, {
                                                        ease: Variables.animEaseInOut,
                                                        force3D: !0,
                                                        delay: t,
                                                        x: 0,
                                                        onComplete: function () {
                                                            f();
                                                        },
                                                    });
                                                });
                                            } else l = !0;
                                        };
                                    (h = setTimeout(function () {
                                        (o = !0), l && m();
                                    }, 2e3)),
                                        0 === e &&
                                            (gsap.TweenLite.set(a, { force3D: !0, x: window.innerWidth * Variables.getLowerEndPaddingRatio() * 0.75 }),
                                            r.complete
                                                ? m()
                                                : (window.NProgress.start(),
                                                  r.addEventListener("load", function () {
                                                      m();
                                                  })));
                                } else
                                    gsap.TweenLite.set(a, { force3D: !0, x: window.innerWidth - window.innerWidth * Variables.getPaddingRatio() }),
                                        gsap.TweenLite.to(a, Variables.animTime, {
                                            ease: Variables.animEaseOut,
                                            force3D: !0,
                                            delay: t,
                                            x: 0,
                                            onComplete: function () {
                                                f();
                                            },
                                        });
                            } else {
                                c++, (s = window.innerWidth), gsap.TweenLite.set(n, { force3D: !0, x: s, opacity: 1 });
                                var g = Number(n.getAttribute("ratio")),
                                    u = window.innerWidth <= 768 ? 0 : -100 * (b.mouseMoveTarget - 0.5) * g;
                                gsap.TweenLite.to(n, d ? 0 : Variables.animTime, {
                                    ease: Variables.animEaseInOut,
                                    force3D: !0,
                                    x: u,
                                    delay: t,
                                    onComplete: function () {
                                        f();
                                    },
                                });
                            }
                    },
                    w = this,
                    i = 0;
                i < this.figures.length;
                i++
            )
                t(i);
            0 == c && (this.animatingIn = !1);
        }),
        (b.prototype.animateOut = function (e, t) {
            (this.animatingIn = !1), (this.animatingOut = !0);
            var i = window.app.router.pageType === PageTypes.PROJECT;
            if (e && i) this.animateOutByScalingToCasePosition(t);
            else {
                for (var n = this.currentLeft, s = !1, a = 0, r = 0; r < this.figures.length; r++) {
                    var o = this.figures[r],
                        l = o.getElementsByClassName("image--outer")[0],
                        h = l.offsetWidth,
                        m = (o.getElementsByClassName("bunk-element--inner")[0], o.offsetLeft),
                        g = o.getElementsByClassName("image")[0],
                        u = n + m + +window.getComputedStyle(o).transform.split(", ")[4],
                        d = (u += +window.getComputedStyle(g).transform.split(", ")[4]) + h;
                    if (0 < d && u < window.innerWidth) {
                        a++, (s = !0);
                        var c = window.innerWidth - u,
                            f = c,
                            p = (c / window.innerWidth) * 0.5;
                        gsap.TweenLite.to(l, Variables.animTime * p, {
                            ease: Variables.animEaseInOut,
                            force3D: !0,
                            x: f,
                            onComplete: function () {
                                0 === --a && t();
                            },
                        });
                    }
                }
                s || setTimeout(t, 0);
            }
        }),
        (b.prototype.animateOutByScalingToCasePosition = function (e) {
            var s = b.esID;
            s &&
                ((s = s.toLowerCase()),
                (this.figures = this.figures.sort(function (e, t) {
                    var i = e.getElementsByClassName("bunk-element--inner")[0],
                        n = t.getElementsByClassName("bunk-element--inner")[0];
                    return i.getAttribute("data-id").toLowerCase() === s ? -1 : n.getAttribute("data-id").toLowerCase() === s ? 1 : 0;
                })));
            for (var t = 0; t < this.figures.length; t++) {
                var i = this.figures[t],
                    n = t === this.figures.length - 1 ? e : null,
                    a = i.getElementsByClassName("bunk-element--inner")[0],
                    r = a.getElementsByClassName("exoskelet")[0],
                    o = a.getElementsByClassName("image")[0],
                    l = 0 === t ? window.innerWidth * Variables.getPaddingRatio() : window.innerWidth,
                    h = i.getBoundingClientRect().left,
                    m = Variables.getWindowInnerHeight() / r.getBoundingClientRect().height,
                    g = l - h;
                (g += 0.5 * window.innerWidth * t),
                    gsap.TweenLite.to(o, 0.75 * Variables.animTime, { ease: Variables.animEaseInOut, force3D: !0, x: 0 }),
                    gsap.TweenLite.to(a, 0.75 * Variables.animTime, { ease: Variables.animEaseInOut, force3D: !0, x: g, scale: m, onComplete: n });
            }
        }),
        (b.prototype.onWindowResize = function () {
            this.reset();
            for (var e = this.el.getElementsByClassName("bunk-element"), t = 0; t < e.length; t++) {
                var i = e[t],
                    n = i.offsetHeight,
                    s = i.getElementsByClassName("exoskelet")[0],
                    a = parseInt(s.getAttribute("data-width"), 10),
                    r = parseInt(s.getAttribute("data-height"), 10);
                (s.style.height = n + "px"), (s.style.width = (a / r) * n + "px");
            }
        }),
        (b.prototype.dealloc = function () {
            b.setInScrollMode(!1),
                this.el.removeEventListener(relax.animation.getTransitionEndEvent(), this.onElAnimatedCallback, !1),
                (this.onElAnimatedCallback = null),
                this.onMouseMoveCallback && (document.removeEventListener("mousemove", this.onMouseMoveCallback, !1), (this.onMouseMoveCallback = null)),
                this.rAf && cancelAnimationFrame(this.rAf);
            for (var e = 0; e < this.figures.length; e++) {
                this.figures[e].removeEventListener("click", this.onFigureAnchorClickCallback, !1);
            }
            (this.onFigureAnchorClickCallback = null), (this.rAf = null), (this.elementScales = null), (this.figures = null);
        }),
        (b.mouseMoveTarget = 0),
        (b.inScaleMode = !1),
        b
    );
})();
var FigureElementForCase = (function () {
    function e(e) {
        (this.currentLeft = 0), (this.el = e.el), (this.shuffleElements = e.shuffle), (FigureElementForBunk.esID = void 0);
    }
    return (
        (e.prototype.hide = function () {
            for (var e = 0; e < this.elementVectors.length; e++) {
                this.elementVectors[e];
                this.caseElements2[e].classList.remove("visible");
            }
        }),
        (e.prototype.getWidth = function () {
            return this.el.offsetWidth;
        }),
        (e.prototype.setX = function (e) {
            for (var t = 0; t < this.elementVectors.length; t++) {
                var s = this.elementVectors[t];
                0 < s.right + e && s.left + e < window.innerWidth
                    ? (this.caseElements2[t].classList.contains("visible") || this.caseElements2[t].classList.add("visible"), gsap.TweenLite.set(this.caseElements2[t], { force3D: !0, x: e }))
                    : this.caseElements2[t].classList.contains("visible") && this.caseElements2[t].classList.remove("visible");
            }
        }),
        (e.prototype.render = function () {
            var e = this;
            this.rAf && cancelAnimationFrame(this.rAf);
            for (var t = window.app.scrollController, s = 0, i = 0; i < this.elementScales.length; i++) {
                var n = this.elementScales[i];
                (n.scale += 0.3 * (n.target - n.scale)),
                    (s += n.target - n.scale),
                    gsap.TweenLite.set(this.caseElementsImages[i], { force3D: !0, scale: Math.min(1, Math.max(0.5, n.scale)) }),
                    !t.scrollingTo &&
                        t.position < 0 &&
                        (0.99 < Math.abs(n.scale)
                            ? this.caseElements[i].classList.contains("scaled-up") || this.caseElements[i].classList.add("scaled-up")
                            : this.caseElements[i].classList.contains("scaled-up") && this.caseElements[i].classList.remove("scaled-up"));
            }
            this.rAf =
                s < 0.05
                    ? null
                    : requestAnimationFrame(function () {
                          return e.render();
                      });
        }),
        (e.prototype.onXUpdate = function (e, t, s, i) {
            if ((void 0 === i && (i = !1), (this.currentLeft = t), !Variables.isMobile)) {
                for (var n = window.innerWidth, a = n * Variables.getLowerEndPaddingRatio(), l = n * Variables.getPaddingRatio(), r = n - l, o = 0; o < this.elementVectors.length; o++) {
                    this.caseElements[o];
                    var h = this.elementVectors[o],
                        c = h.left + t,
                        m = c + h.width,
                        f = 1;
                    if (l < c && (0 < o || i)) {
                        var u = 0,
                            d = n - c;
                        f = relax.math.lerp(d / r, u, 1);
                    } else if (m < a) {
                        u = 0.25;
                        f = relax.math.lerp(m / a, u, 1);
                    }
                    this.elementScales[o] || (this.elementScales[o] = { scale: f, target: f }), (this.elementScales[o].target = Math.max(0, Math.min(1, f)));
                }
                this.rAf || this.render();
            }
        }),
        (e.prototype.animateIn = function () {}),
        (e.prototype.animateOut = function (e, l) {
            for (var r = this, o = 0, t = 0; t < this.caseElements.length; t++) {
                this.caseElements[t].parentNode.classList.contains("visible") && o++;
            }
            var s = function (e) {
                    var t,
                        s,
                        i,
                        n,
                        a = h.caseElements[e];
                    (t = e + 1),
                        (s = r.elementVectors[e].left + r.currentLeft),
                        (i = window.innerWidth - s),
                        (n = i / window.innerWidth),
                        (n *= 0.2),
                        gsap.TweenLite.to(a, 0.5 * Variables.animTime, {
                            ease: Variables.animEaseInOut,
                            force3D: !0,
                            x: i,
                            delay: Math.abs(n),
                            onComplete: function () {
                                t === o && l();
                            },
                        });
                },
                h = this;
            for (t = 0; t < this.elementVectors.length; t++) s(t);
            0 === o &&
                setTimeout(function () {
                    return l();
                }, 0);
        }),
        (e.prototype.onWindowResize = function () {
            var e = window.innerHeight;
            (this.elementVectors = []), (this.elementScales = []), (this.caseElements = []), (this.caseElements2 = []), (this.caseElementsImages = []);
            var t = this.el.getElementsByClassName("case-element");
            if (((t = [].slice.call(t)), this.shuffleElements)) {
                var s = t[Math.floor(Math.random() * t.length)];
                t[0].parentNode.insertBefore(s, t[0]);
            }
            for (var i = 0; i < t.length; i++) {
                var n = t[i],
                    a = n.getElementsByClassName("exoskelet")[0],
                    l = parseInt(a.getAttribute("data-width"), 10),
                    r = parseInt(a.getAttribute("data-height"), 10);
                (n.style.height = e + "px"), (l = (l / r) * e), (n.style.width = l + "px");
                var o = l,
                    h = n.offsetLeft;
                this.elementVectors.push({ left: h, width: o, center: h + 0.5 * o, right: h + o }),
                    this.caseElements2.push(n),
                    this.caseElements.push(n.getElementsByClassName("case-element--inner")[0]),
                    this.caseElementsImages.push(n.getElementsByClassName("image--outer")[0]);
            }
            if (Variables.isMobile)
                for (i = 0; i < this.caseElements.length; i++) {
                    this.caseElements[i].setAttribute("visible", "visible");
                }
        }),
        (e.prototype.dealloc = function () {
            this.rAf && cancelAnimationFrame(this.rAf), (this.rAf = null), (this.elementScales = null), (this.elementVectors = null);
        }),
        e
    );
})();
var __extends =
        (this && this.__extends) ||
        (function () {
            var n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                        t.__proto__ = e;
                    }) ||
                function (t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                };
            return function (t, e) {
                function i() {
                    this.constructor = t;
                }
                n(t, e), (t.prototype = null === e ? Object.create(e) : ((i.prototype = e.prototype), new i()));
            };
        })(),
    SliderContentView = (function (i) {
        function t(t) {
            var e = i.call(this, t) || this;
            return (
                (e._visible = !1),
                setTimeout(
                    function () {
                        e.visible = !0;
                    },
                    t.type === PageTypes.EXPLORE ? 1e3 : 0
                ),
                e
            );
        }
        return (
            __extends(t, i),
            (t.prototype.clear = function () {
                this.el.parentElement.removeChild(this.el);
            }),
            Object.defineProperty(t.prototype, "visible", {
                get: function () {
                    return this._visible;
                },
                set: function (t) {
                    (this._visible = t), this._visible ? this.el.classList.add("animate-in") : this.el.classList.remove("animate-in");
                },
                enumerable: !0,
                configurable: !0,
            }),
            (t.prototype.animateOut = function () {
                this.visible = !1;
            }),
            (t.prototype.onResize = function (t) {}),
            (t.prototype.dealloc = function () {
                i.prototype.dealloc.call(this);
            }),
            t
        );
    })(BasicAppView);
var __extends =
        (this && this.__extends) ||
        (function () {
            var i =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                        e.__proto__ = t;
                    }) ||
                function (e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                };
            return function (e, t) {
                function n() {
                    this.constructor = e;
                }
                i(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
            };
        })(),
    SliderElementsEvents = { FOCUS_INDEX_UPDATE: "SliderElementsEvents-FOCUS_INDEX_UPDATE", DATASET_INDEX_UPDATE: "SliderElementsEvents-FOCUS_INDEX_UPDATE", ELEMENTS_BUILD: "SliderElementsEvents-ELEMENTS_BUILD" },
    SliderElements = (function (n) {
        function d(e) {
            var t = n.call(this, e) || this;
            return (
                (t._hasScrolled = !1),
                (t.visibleElements = 0),
                (t._focusIndex = 0),
                (t.datasetIndex = 0),
                (t.datasetMinIndex = 0),
                (t.datasetMaxIndex = 0),
                (t.bump = 0),
                (t.bumpIndex = 0),
                (t.totalSlideWidth = 0),
                (t.numberItemsToAnimateOut = 0),
                (t.ignorePageChange = !1),
                (t.viewportVector = { left: 0, right: 0, x: 0 }),
                new SliderInfo({ el: document.getElementById("slider-info") }),
                (t.infinite = e.infinite),
                (t.scrollListEl = document.getElementById("scroll-list")),
                document.addEventListener(SliderElementEvents.LOADED, function () {
                    t.onResize(null);
                }),
                document.addEventListener(RouterExtensionEvents.PRE_FETCH, t.onPreFetch.bind(t)),
                document.addEventListener(ScrollControllerEvents.SCROLLED, t.onScrolled.bind(t)),
                document.addEventListener(SliderElementEvents.ORDER_CHANGED, t.onElementOrderUpdate.bind(t)),
                document.addEventListener(SliderUIEvents.MENU_BUTTON_CLICK, t.onSliderUINavButtonClick.bind(t)),
                document.addEventListener(SliderElementEvents.ANIMATED_OUT, function () {
                    t.numberItemsToAnimateOut--;
                    window.app.router.pageType;
                    0 === t.numberItemsToAnimateOut && t.setupNewElements();
                }),
                t
            );
        }
        return (
            __extends(d, n),
            (d.prototype.onPreFetch = function (e) {
                var t = window.app.page.el.getAttribute("page-id");
                (this.previousPageId = t), window.app.router.pageType === PageTypes.CONTACT && this.removeElements();
            }),
            Object.defineProperty(d.prototype, "hasScrolled", {
                set: function (e) {
                    this._hasScrolled != e && ((this._hasScrolled = e), this._hasScrolled ? this.el.classList.add("scrolled") : this.el.classList.remove("scrolled"));
                },
                enumerable: !0,
                configurable: !0,
            }),
            Object.defineProperty(d.prototype, "numElements", {
                get: function () {
                    return this.dataset.length;
                },
                enumerable: !0,
                configurable: !0,
            }),
            Object.defineProperty(d.prototype, "focusIndex", {
                get: function () {
                    return this._focusIndex;
                },
                set: function (e) {
                    this._focusIndex == e || this.preventFocusIndexUpdate || ((this._focusIndex = e), this.onFocusIndexChanged());
                },
                enumerable: !0,
                configurable: !0,
            }),
            (d.prototype.setElementInFocus = function (e) {
                (this.preventFocusIndexUpdate = !0), (this.elementInFocus = e);
            }),
            (d.prototype.setX = function (e) {
                this.render(e);
            }),
            (d.prototype.update = function (e) {
                var t = window.app.router.pageType,
                    n = [PageTypes.HOME, PageTypes.CLIENTS, PageTypes.PROJECT, PageTypes.EXPLORE_RESULT, PageTypes.CONTACT];
                this.ignorePageChange && t !== PageTypes.PROJECT && (this.ignorePageChange = !1),
                    (this.infinite = t !== PageTypes.CONTACT && t !== PageTypes.EXPLORE_RESULT),
                    -1 != n.indexOf(t) ? ((this.numberItemsToAnimateOut = 0), this.removeElements(), 0 === this.numberItemsToAnimateOut && this.setupNewElements()) : this.removeElements();
            }),
            (d.prototype.getCurrentDataset = function () {
                return this.dataset[this.focusIndex];
            }),
            (d.prototype.reset = function () {
                if (
                    (this.elements &&
                        this.elements.sort(function (e, t) {
                            return e.buildIndex < t.buildIndex ? -1 : e.buildIndex > t.buildIndex ? 1 : 0;
                        }),
                    (this.ignorePageChange = !1),
                    (this._focusIndex = 0),
                    (this.datasetMinIndex = 0),
                    (this.datasetMaxIndex = Math.min(2, this.dataset.length)),
                    (this.datasetIndex = 0),
                    (this.bumpIndex = 0),
                    (this.bump = 0),
                    (this.totalSlideWidth = 0),
                    this.elements)
                )
                    for (var e = 0; e < this.elements.length; e++) {
                        var t = this.elements[e],
                            n = this.dataset[e];
                        t.updateContent(n, e, 0 === e && 0 === this.bumpIndex);
                    }
            }),
            (d.prototype.render = function (e) {
                if (!this.preventFocusIndexUpdate && this.elements && this.el) {
                    var t = window.innerWidth,
                        n = window.app.scrollController.scrollYDirection,
                        i = this.elements.slice(),
                        s = 0,
                        a = Variables.getPaddingRatio();
                    if (((this.pos = e), (this.hasScrolled = e < -2), this.infinite))
                        for (var l = 0; l < this.elements.length; l++) {
                            (u = this.elements[l]).left + u.elementWidth < 0 && 1 === n
                                ? ((this.bump += u.elementWidth), this.bumpIndex++, (ScrollController.maxMin = 0), i.push(i.shift()), u.orderChangedSoChangeContent(n))
                                : u.left + u.elementWidth > this.totalSlideWidth &&
                                  0 < this.totalSlideWidth &&
                                  -1 === n &&
                                  (this.elementInFocus.limitPaddingToFirstChild || (this.bump -= this.elementInFocus.paddingLeft),
                                  i.unshift(i.pop()),
                                  u.orderChangedSoChangeContent(n),
                                  (this.bump -= u.elementWidth),
                                  this.bumpIndex--,
                                  u.isAbsolutlyFirstChildWithPadding() && (this.bump -= t * a)),
                                (ScrollController.maxMin = 0 === this.bumpIndex ? -1 * this.bump : 0);
                        }
                    else
                        for (l = 0; l < this.elements.length; l++) {
                            s += (u = this.elements[l]).elementWidth;
                        }
                    (this.elements = i), (this.totalSlideWidth = 0), this.infinite || (ScrollController.minMin = -1 * (s - t));
                    var o,
                        r = e,
                        d = 0,
                        h = 0;
                    for (l = 0; l < this.elements.length; l++) {
                        var u = this.elements[l];
                        0 == l ? u.calcX(r + this.bump) : u.calcX(r + d + this.bump);
                        var p = 0 < u.right && u.left < t,
                            m = Math.min(t, u.right) - Math.max(0, u.left);
                        (u.inView = !!p && (h < m && ((o = u), (h = m)), !0)), (d += u.elementWidth), (this.totalSlideWidth = d);
                    }
                    if (!this.preventFocusIndexUpdate)
                        for (l = 0; l < this.elements.length; l++) {
                            (u = this.elements[l]) == o && ((this.elementInFocus = o), (this.focusIndex = u.contentIndex));
                        }
                    for (l = 0; l < this.elements.length; l++) {
                        (u = this.elements[l]).updateX();
                    }
                }
            }),
            (d.prototype.onScrolled = function (e) {}),
            (d.prototype.onSliderUINavButtonClick = function (e) {
                var t = window.app.scrollController,
                    n = e.detail ? this.viewportVector.x + 1 : this.viewportVector.x - 1,
                    i = window.innerHeight * Variables.getLowerEndPaddingRatio(),
                    s = 0;
                1 === n
                    ? (s =
                          0 === this.elementInFocus.contentIndex && this.elementInFocus.isAbsolutlyFirstChildWithPadding() && 1.1 * t.position > -1 * this.elementInFocus.paddingLeft
                              ? -1 * this.elementInFocus.paddingLeft
                              : -1 * this.elementInFocus.right)
                    : -1 === n && (s = -1 * (this.elementInFocus.left - window.innerWidth)),
                    (s += i),
                    t.addToTarget(s);
            }),
            (d.prototype.onFocusIndexChanged = function () {
                if (window.app.router.pageType === PageTypes.PROJECT) {
                    var e = Helper.checkAppHREF(this.elementInFocus.el.getElementsByClassName("slide-element--inner")[0].getAttribute("href"));
                    (this.ignorePageChange = !0), (RouterExtension.ignorePageLoading = !0), Router.navigate(e);
                }
                document.dispatchEvent(new CustomEvent(SliderElementsEvents.FOCUS_INDEX_UPDATE, { detail: this }));
            }),
            (d.prototype.setupNewElements = function () {
                var e = this;
                (this.preventFocusIndexUpdate = !1), !this.ignorePageChange && this.el && this.el.classList.remove("ready");
                var t = window.app.page.el.getElementsByClassName("slide-elements-list")[0];
                if (t && t.parentElement) {
                    var n = window.app.router.pageType;
                    if (!this.ignorePageChange) {
                        if (n === PageTypes.PROJECT && FigureElementForBunk.esID) {
                            var i = [].slice.call(t.getElementsByClassName("case-element")),
                                s = i[0].parentNode;
                            i.every(function (e, t) {
                                if (e.getAttribute("data-id").toLowerCase() !== FigureElementForBunk.esID.toLowerCase()) return !0;
                                var n = [].slice.call(e.getElementsByTagName("img"));
                                return (
                                    e.getElementsByClassName("exoskelet")[0].classList.add("hide"),
                                    n.forEach(function (e) {
                                        e.getAttribute("data-src") && (e.setAttribute("src", e.getAttribute("data-src")), e.setAttribute("srcset", e.getAttribute("data-srcset")));
                                    }),
                                    s && s.prepend(e),
                                    !1
                                );
                            });
                        }
                        t.setAttribute("page-type", n);
                        var a = this.el;
                        this.scrollListEl.appendChild(t),
                            this.setEl(this.evalElAndBuildDataset(t)),
                            this.buildElements(),
                            this.render(0),
                            setTimeout(function () {
                                a && e.scrollListEl.removeChild(a);
                            }, 0);
                    }
                }
            }),
            (d.prototype.evalElAndBuildDataset = function (n) {
                var i = this,
                    e = [].slice.call(n.getElementsByClassName("slide-element")),
                    s = 0;
                if (
                    this.previousPageId &&
                    (e.forEach(function (e, t) {
                        e.getAttribute("data-id") === i.previousPageId && (s = t);
                    }),
                    0 < s)
                ) {
                    var t = e.slice(s, e.length);
                    (e = e.slice(0, s)), (e = t.concat(e));
                }
                return (
                    (this.dataset = [].slice.call(e)),
                    (this.datasetMinIndex = 0),
                    (this.datasetMaxIndex = Math.min(2, this.dataset.length)),
                    e.forEach(function (e, t) {
                        (t < s || s + 2 < t) && n.removeChild(e);
                    }),
                    n
                );
            }),
            (d.prototype.onElementOrderUpdate = function (e) {
                if (!(this.preventFocusIndexUpdate || this.dataset.length <= d.MIN_NUMBER_OF_ITEMS)) {
                    var t = e.detail,
                        n = window.app.scrollController.scrollYDirection;
                    if (n) {
                        (this.datasetMinIndex += n),
                            (this.datasetMaxIndex += n),
                            this.datasetMaxIndex < 0 && (this.datasetMaxIndex = this.dataset.length - 1),
                            this.datasetMinIndex < 0 && (this.datasetMinIndex = this.dataset.length - 1),
                            (this.datasetMinIndex = Math.abs(this.datasetMinIndex % this.dataset.length)),
                            (this.datasetMaxIndex = Math.abs(this.datasetMaxIndex % this.dataset.length)),
                            (this.datasetIndex = 1 == n ? this.datasetMaxIndex : this.datasetMinIndex);
                        var i = this.dataset[this.datasetIndex];
                        t.updateContent(i, this.datasetIndex, 0 === this.datasetIndex && this.bumpIndex <= 1);
                    }
                }
            }),
            (d.prototype.buildElements = function () {
                this.elements = [];
                var e = window.app.router.pageType,
                    t = e == PageTypes.HOME || e == PageTypes.CONTACT,
                    n = e == PageTypes.EXPLORE_RESULT,
                    i = e == PageTypes.CONTACT,
                    s = e === PageTypes.PROJECT,
                    a = n || t,
                    l = [].slice.call(this.el.getElementsByClassName("slide-element"));
                this.visibleElements = Math.min(d.MIN_NUMBER_OF_ITEMS, l.length);
                for (var o = 0; o < l.length; o++) {
                    var r = l[o];
                    this.elements.push(new SliderElement({ el: r, controller: this, shuffle: i, index: o, canAllScale: n, isFirstCreatedElement: 0 === o, usePadding: (a && 0 === o) || s, limitPaddingToFirstChild: a }));
                }
                this.onResize(null), document.dispatchEvent(new CustomEvent(SliderElementsEvents.ELEMENTS_BUILD, { detail: this }));
            }),
            (d.prototype.removeElements = function () {
                if (this.elements && !this.ignorePageChange) {
                    this.numberItemsToAnimateOut = this.elements.length;
                    for (var e = 0; e < this.elements.length; e++) {
                        var t = this.elements[e];
                        t.animateOut(this.elementInFocus === t);
                    }
                    this.elements = null;
                }
            }),
            (d.prototype.onResize = function (e) {
                if (this.el) {
                    (this.centerVector = new relax.Vector2d(0.5 * window.innerWidth, 0)), this.reset();
                    for (var t = 0; t < this.elements.length; t++) {
                        this.elements[t].onWindowResize();
                    }
                    this.render(0), this.el.classList.add("ready");
                }
            }),
            (d.MIN_NUMBER_OF_ITEMS = 3),
            d
        );
    })(BasicAppView);
var _this = this,
    helper = {
        setTransform: function (e, t) {
            (e.style.webkitTransform = t), (e.style.MozTransform = t), (e.style.msTransform = t), (e.style.OTransform = t), (e.style.transform = t);
        },
    },
    ApplicationEvents = { INTRO_DONE: "ApplicationEvents-intro-done", PAGE_APPENDED: "ApplicationEvents-PAGE_APPENDED" },
    Application = (function () {
        function s() {
            var e = this;
            Variables.init(), (window.gsap = window._gsScope);
            Variables.isLocalhost, Variables.isMobile;
            -1 != relax.browser.getInternetExplorerVersion() && document.documentElement.classList.add("ie" + relax.browser.getInternetExplorerVersion()),
                relax.browser.isTouch() && (relax.browser.isMobile() || relax.browser.isTablet())
                    ? (document.documentElement.classList.add("touch"),
                      document.addEventListener("touchmove", function (e) {
                          e.preventDefault();
                      }))
                    : (document.documentElement.classList.add("no-touch"), new MouseFollow()),
                history && history.scrollRestoration && (history.scrollRestoration = "manual");
            var t = { scrollContext: window };
            (this.stageModel = new relax.StageModel(t)),
                (this.router = new RouterExtension()),
                document.addEventListener(RouterExtensionEvents.FETCHED, this.handleNewPage.bind(this), !1),
                this.setupUI(),
                this.setupGUI(),
                setTimeout(function () {
                    e.stageModel.bind(relax.StageModel.RESIZE, e.resize, e, !0);
                }, 0);
        }
        return (
            (s.checkForIntro = function () {
                var e = !1;
                return s.introChecked || (e = !0), (s.introChecked = !0), e;
            }),
            (s.onIntroStart = function () {
                document.body.classList.add("intro-started");
            }),
            (s.onIntroDone = function () {
                (s.introDone = !0), document.body.classList.add("intro-done"), document.dispatchEvent(new CustomEvent(ApplicationEvents.INTRO_DONE, {}));
            }),
            (s.prototype.handleNewPage = function (e) {
                var t,
                    n = this,
                    o = e.detail;
                s.introChecked || (o.pageType !== PageTypes.HOME && (s.checkForIntro(), s.onIntroStart(), s.onIntroDone()));
                try {
                    window.gtag("config", "UA-132451749-1", { page_title: o.pageType, page_path: window.location.pathname });
                } catch (e) {}
                var a = o.pageType === PageTypes.PROJECT && o.pageType === o.oldPageType;
                o.isInitialState ? (t = document.getElementById("app-page").getElementsByTagName("main")[0]) : ((t = o.element), a || document.getElementById("app-page").appendChild(t)),
                    t.setAttribute("page-type", o.pageType),
                    a ||
                        (this.page
                            ? this.page.animateOut(function () {
                                  n.page.dealloc(), n.buildNewPage(o.pageType, t);
                              })
                            : this.buildNewPage(o.pageType, t)),
                    document.dispatchEvent(new CustomEvent(ApplicationEvents.PAGE_APPENDED, {}));
            }),
            (s.prototype.buildNewPage = function (e, t) {
                (this.page && (this.page.type === PageTypes.PROJECT || this.page.type === PageTypes.HOME)) || (e !== PageTypes.PROJECT && PageTypes.HOME);
                switch (e) {
                    case PageTypes.PROJECT:
                    case PageTypes.CONTACT:
                    case PageTypes.DEFAULT:
                        this.page = new SliderContentPage({ el: t, type: PageTypes.PROJECT });
                        break;
                    case PageTypes.CLIENTS:
                        this.page = new ClientsPage({ el: t, type: PageTypes.CLIENTS });
                        break;
                    case PageTypes.EXPLORE_RESULT:
                        this.page = new ExploreResultPage({ el: t, type: PageTypes.EXPLORE });
                        break;
                    case PageTypes.EXPLORE:
                        this.page = new ExplorePage({ el: t, type: PageTypes.EXPLORE });
                        break;
                    case PageTypes.HOME:
                        this.page = new ClientsPage({ el: t, type: PageTypes.HOME });
                    default:
                        this.page = new BasicPage({ el: t, type: PageTypes.HOME });
                }
                this.scrollController.handleNewPage();
                for (var n = document.getElementById("app-page"); 1 < n.children.length; ) n.removeChild(n.children[0]);
            }),
            (s.prototype.setupUI = function () {
                this.scrollController = new ScrollController();
            }),
            (s.prototype.setupGUI = function () {
                new HeaderView({ el: document.getElementById("header") });
            }),
            (s.prototype.scroll = function (e) {}),
            (s.prototype.resize = function (e) {
                (document.body.style.height = Variables.getWindowInnerHeight() + "px"), (document.documentElement.style.height = Variables.getWindowInnerHeight() + "px");
            }),
            (s.introDone = !1),
            (s.introChecked = !1),
            s
        );
    })();
(window.startSingle = function () {
    _this.app || (_this.app = new Application());
}),
    setTimeout(function () {
        ("complete" != document.readyState && "interactive" != document.readyState) || window.startSingle();
    }, 0),
    document.addEventListener(
        "DOMContentLoaded",
        function (e) {
            window.startSingle();
        },
        !1
    );
