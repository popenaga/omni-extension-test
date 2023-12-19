var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b2) => (typeof require !== "undefined" ? require : a)[b2]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});

// ../../../../../omni-sdk/lib/index.js
var us = Object.create;
var Xt = Object.defineProperty;
var cs = Object.getOwnPropertyDescriptor;
var hs = Object.getOwnPropertyNames;
var ps = Object.getPrototypeOf;
var fs = Object.prototype.hasOwnProperty;
var ds = (n6, e, t) => e in n6 ? Xt(n6, e, { enumerable: true, configurable: true, writable: true, value: t }) : n6[e] = t;
var _e = ((n6) => typeof __require < "u" ? __require : typeof Proxy < "u" ? new Proxy(n6, { get: (e, t) => (typeof __require < "u" ? __require : e)[t] }) : n6)(function(n6) {
  if (typeof __require < "u")
    return __require.apply(this, arguments);
  throw Error('Dynamic require of "' + n6 + '" is not supported');
});
var y = (n6, e) => () => (e || n6((e = { exports: {} }).exports, e), e.exports);
var gs = (n6, e, t, r) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let i of hs(e))
      !fs.call(n6, i) && i !== t && Xt(n6, i, { get: () => e[i], enumerable: !(r = cs(e, i)) || r.enumerable });
  return n6;
};
var ms = (n6, e, t) => (t = n6 != null ? us(ps(n6)) : {}, gs(e || !n6 || !n6.__esModule ? Xt(t, "default", { value: n6, enumerable: true }) : t, n6));
var S = (n6, e, t) => (ds(n6, typeof e != "symbol" ? e + "" : e, t), t);
var _s = (n6, e, t) => {
  if (!e.has(n6))
    throw TypeError("Cannot " + t);
};
var $t = (n6, e, t) => {
  if (e.has(n6))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(n6) : e.set(n6, t);
};
var Xe = (n6, e, t) => (_s(n6, e, "access private method"), t);
var A = y((T) => {
  "use strict";
  T.__esModule = true;
  T.extend = on;
  T.indexOf = ws;
  T.escapeExpression = xs;
  T.isEmpty = Cs;
  T.createFrame = Es;
  T.blockParams = Is;
  T.appendContextPath = Ps;
  var vs = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;", "=": "&#x3D;" }, ks = /[&<>"'`=]/g, Ss = /[&<>"'`=]/;
  function bs(n6) {
    return vs[n6];
  }
  function on(n6) {
    for (var e = 1; e < arguments.length; e++)
      for (var t in arguments[e])
        Object.prototype.hasOwnProperty.call(arguments[e], t) && (n6[t] = arguments[e][t]);
    return n6;
  }
  var sr = Object.prototype.toString;
  T.toString = sr;
  var ir = function(e) {
    return typeof e == "function";
  };
  ir(/x/) && (T.isFunction = ir = function(n6) {
    return typeof n6 == "function" && sr.call(n6) === "[object Function]";
  });
  T.isFunction = ir;
  var an = Array.isArray || function(n6) {
    return n6 && typeof n6 == "object" ? sr.call(n6) === "[object Array]" : false;
  };
  T.isArray = an;
  function ws(n6, e) {
    for (var t = 0, r = n6.length; t < r; t++)
      if (n6[t] === e)
        return t;
    return -1;
  }
  function xs(n6) {
    if (typeof n6 != "string") {
      if (n6 && n6.toHTML)
        return n6.toHTML();
      if (n6 == null)
        return "";
      if (!n6)
        return n6 + "";
      n6 = "" + n6;
    }
    return Ss.test(n6) ? n6.replace(ks, bs) : n6;
  }
  function Cs(n6) {
    return !n6 && n6 !== 0 ? true : !!(an(n6) && n6.length === 0);
  }
  function Es(n6) {
    var e = on({}, n6);
    return e._parent = n6, e;
  }
  function Is(n6, e) {
    return n6.path = e, n6;
  }
  function Ps(n6, e) {
    return (n6 ? n6 + "." : "") + e;
  }
});
var D = y((ut, ln) => {
  "use strict";
  ut.__esModule = true;
  var or = ["description", "fileName", "lineNumber", "endLineNumber", "message", "name", "number", "stack"];
  function ar(n6, e) {
    var t = e && e.loc, r = void 0, i = void 0, s = void 0, o = void 0;
    t && (r = t.start.line, i = t.end.line, s = t.start.column, o = t.end.column, n6 += " - " + r + ":" + s);
    for (var a = Error.prototype.constructor.call(this, n6), u = 0; u < or.length; u++)
      this[or[u]] = a[or[u]];
    Error.captureStackTrace && Error.captureStackTrace(this, ar);
    try {
      t && (this.lineNumber = r, this.endLineNumber = i, Object.defineProperty ? (Object.defineProperty(this, "column", { value: s, enumerable: true }), Object.defineProperty(this, "endColumn", { value: o, enumerable: true })) : (this.column = s, this.endColumn = o));
    } catch {
    }
  }
  ar.prototype = new Error();
  ut.default = ar;
  ln.exports = ut.default;
});
var cn = y((ct, un) => {
  "use strict";
  ct.__esModule = true;
  var lr = A();
  ct.default = function(n6) {
    n6.registerHelper("blockHelperMissing", function(e, t) {
      var r = t.inverse, i = t.fn;
      if (e === true)
        return i(this);
      if (e === false || e == null)
        return r(this);
      if (lr.isArray(e))
        return e.length > 0 ? (t.ids && (t.ids = [t.name]), n6.helpers.each(e, t)) : r(this);
      if (t.data && t.ids) {
        var s = lr.createFrame(t.data);
        s.contextPath = lr.appendContextPath(t.data.contextPath, t.name), t = { data: s };
      }
      return i(e, t);
    });
  };
  un.exports = ct.default;
});
var pn = y((ht, hn) => {
  "use strict";
  ht.__esModule = true;
  function Ms(n6) {
    return n6 && n6.__esModule ? n6 : { default: n6 };
  }
  var Re = A(), Os = D(), Ls = Ms(Os);
  ht.default = function(n6) {
    n6.registerHelper("each", function(e, t) {
      if (!t)
        throw new Ls.default("Must pass iterator to #each");
      var r = t.fn, i = t.inverse, s = 0, o = "", a = void 0, u = void 0;
      t.data && t.ids && (u = Re.appendContextPath(t.data.contextPath, t.ids[0]) + "."), Re.isFunction(e) && (e = e.call(this)), t.data && (a = Re.createFrame(t.data));
      function l(_, v, x) {
        a && (a.key = _, a.index = v, a.first = v === 0, a.last = !!x, u && (a.contextPath = u + _)), o = o + r(e[_], { data: a, blockParams: Re.blockParams([e[_], _], [u + _, null]) });
      }
      if (e && typeof e == "object")
        if (Re.isArray(e))
          for (var h = e.length; s < h; s++)
            s in e && l(s, s, s === e.length - 1);
        else if (typeof Symbol == "function" && e[Symbol.iterator]) {
          for (var c = [], p = e[Symbol.iterator](), f = p.next(); !f.done; f = p.next())
            c.push(f.value);
          e = c;
          for (var h = e.length; s < h; s++)
            l(s, s, s === e.length - 1);
        } else
          (function() {
            var _ = void 0;
            Object.keys(e).forEach(function(v) {
              _ !== void 0 && l(_, s - 1), _ = v, s++;
            }), _ !== void 0 && l(_, s - 1, true);
          })();
      return s === 0 && (o = i(this)), o;
    });
  };
  hn.exports = ht.default;
});
var dn = y((pt, fn) => {
  "use strict";
  pt.__esModule = true;
  function As(n6) {
    return n6 && n6.__esModule ? n6 : { default: n6 };
  }
  var Ts = D(), Rs = As(Ts);
  pt.default = function(n6) {
    n6.registerHelper("helperMissing", function() {
      if (arguments.length !== 1)
        throw new Rs.default('Missing helper: "' + arguments[arguments.length - 1].name + '"');
    });
  };
  fn.exports = pt.default;
});
var yn = y((ft, _n) => {
  "use strict";
  ft.__esModule = true;
  function Ns(n6) {
    return n6 && n6.__esModule ? n6 : { default: n6 };
  }
  var gn = A(), Ds = D(), mn = Ns(Ds);
  ft.default = function(n6) {
    n6.registerHelper("if", function(e, t) {
      if (arguments.length != 2)
        throw new mn.default("#if requires exactly one argument");
      return gn.isFunction(e) && (e = e.call(this)), !t.hash.includeZero && !e || gn.isEmpty(e) ? t.inverse(this) : t.fn(this);
    }), n6.registerHelper("unless", function(e, t) {
      if (arguments.length != 2)
        throw new mn.default("#unless requires exactly one argument");
      return n6.helpers.if.call(this, e, { fn: t.inverse, inverse: t.fn, hash: t.hash });
    });
  };
  _n.exports = ft.default;
});
var kn = y((dt, vn) => {
  "use strict";
  dt.__esModule = true;
  dt.default = function(n6) {
    n6.registerHelper("log", function() {
      for (var e = [void 0], t = arguments[arguments.length - 1], r = 0; r < arguments.length - 1; r++)
        e.push(arguments[r]);
      var i = 1;
      t.hash.level != null ? i = t.hash.level : t.data && t.data.level != null && (i = t.data.level), e[0] = i, n6.log.apply(n6, e);
    });
  };
  vn.exports = dt.default;
});
var bn = y((gt, Sn) => {
  "use strict";
  gt.__esModule = true;
  gt.default = function(n6) {
    n6.registerHelper("lookup", function(e, t, r) {
      return e && r.lookupProperty(e, t);
    });
  };
  Sn.exports = gt.default;
});
var xn = y((mt, wn) => {
  "use strict";
  mt.__esModule = true;
  function Bs(n6) {
    return n6 && n6.__esModule ? n6 : { default: n6 };
  }
  var Ne = A(), qs = D(), Hs = Bs(qs);
  mt.default = function(n6) {
    n6.registerHelper("with", function(e, t) {
      if (arguments.length != 2)
        throw new Hs.default("#with requires exactly one argument");
      Ne.isFunction(e) && (e = e.call(this));
      var r = t.fn;
      if (Ne.isEmpty(e))
        return t.inverse(this);
      var i = t.data;
      return t.data && t.ids && (i = Ne.createFrame(t.data), i.contextPath = Ne.appendContextPath(t.data.contextPath, t.ids[0])), r(e, { data: i, blockParams: Ne.blockParams([e], [i && i.contextPath]) });
    });
  };
  wn.exports = mt.default;
});
var ur = y((_t) => {
  "use strict";
  _t.__esModule = true;
  _t.registerDefaultHelpers = eo;
  _t.moveHelperToHooks = to;
  function ae(n6) {
    return n6 && n6.__esModule ? n6 : { default: n6 };
  }
  var zs = cn(), Fs = ae(zs), Ws = pn(), Gs = ae(Ws), Us = dn(), Vs = ae(Us), Ks = yn(), Zs = ae(Ks), js = kn(), Js = ae(js), Qs = bn(), Ys = ae(Qs), Xs = xn(), $s = ae(Xs);
  function eo(n6) {
    Fs.default(n6), Gs.default(n6), Vs.default(n6), Zs.default(n6), Js.default(n6), Ys.default(n6), $s.default(n6);
  }
  function to(n6, e, t) {
    n6.helpers[e] && (n6.hooks[e] = n6.helpers[e], t || delete n6.helpers[e]);
  }
});
var En = y((yt, Cn) => {
  "use strict";
  yt.__esModule = true;
  var ro = A();
  yt.default = function(n6) {
    n6.registerDecorator("inline", function(e, t, r, i) {
      var s = e;
      return t.partials || (t.partials = {}, s = function(o, a) {
        var u = r.partials;
        r.partials = ro.extend({}, u, t.partials);
        var l = e(o, a);
        return r.partials = u, l;
      }), t.partials[i.args[0]] = i.fn, s;
    });
  };
  Cn.exports = yt.default;
});
var In = y((cr) => {
  "use strict";
  cr.__esModule = true;
  cr.registerDefaultDecorators = oo;
  function no(n6) {
    return n6 && n6.__esModule ? n6 : { default: n6 };
  }
  var io = En(), so = no(io);
  function oo(n6) {
    so.default(n6);
  }
});
var hr = y((vt, Pn) => {
  "use strict";
  vt.__esModule = true;
  var ao = A(), Se = { methodMap: ["debug", "info", "warn", "error"], level: "info", lookupLevel: function(e) {
    if (typeof e == "string") {
      var t = ao.indexOf(Se.methodMap, e.toLowerCase());
      t >= 0 ? e = t : e = parseInt(e, 10);
    }
    return e;
  }, log: function(e) {
    if (e = Se.lookupLevel(e), typeof console < "u" && Se.lookupLevel(Se.level) <= e) {
      var t = Se.methodMap[e];
      console[t] || (t = "log");
      for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++)
        i[s - 1] = arguments[s];
      console[t].apply(console, i);
    }
  } };
  vt.default = Se;
  Pn.exports = vt.default;
});
var Mn = y((pr) => {
  "use strict";
  pr.__esModule = true;
  pr.createNewLookupObject = uo;
  var lo = A();
  function uo() {
    for (var n6 = arguments.length, e = Array(n6), t = 0; t < n6; t++)
      e[t] = arguments[t];
    return lo.extend.apply(void 0, [/* @__PURE__ */ Object.create(null)].concat(e));
  }
});
var fr = y((De) => {
  "use strict";
  De.__esModule = true;
  De.createProtoAccessControl = fo;
  De.resultIsAllowed = go;
  De.resetLoggedProperties = _o;
  function co(n6) {
    return n6 && n6.__esModule ? n6 : { default: n6 };
  }
  var On = Mn(), ho = hr(), po = co(ho), kt = /* @__PURE__ */ Object.create(null);
  function fo(n6) {
    var e = /* @__PURE__ */ Object.create(null);
    e.constructor = false, e.__defineGetter__ = false, e.__defineSetter__ = false, e.__lookupGetter__ = false;
    var t = /* @__PURE__ */ Object.create(null);
    return t.__proto__ = false, { properties: { whitelist: On.createNewLookupObject(t, n6.allowedProtoProperties), defaultValue: n6.allowProtoPropertiesByDefault }, methods: { whitelist: On.createNewLookupObject(e, n6.allowedProtoMethods), defaultValue: n6.allowProtoMethodsByDefault } };
  }
  function go(n6, e, t) {
    return Ln(typeof n6 == "function" ? e.methods : e.properties, t);
  }
  function Ln(n6, e) {
    return n6.whitelist[e] !== void 0 ? n6.whitelist[e] === true : n6.defaultValue !== void 0 ? n6.defaultValue : (mo(e), false);
  }
  function mo(n6) {
    kt[n6] !== true && (kt[n6] = true, po.default.log("error", 'Handlebars: Access has been denied to resolve the property "' + n6 + `" because it is not an "own property" of its parent.
You can add a runtime option to disable the check or this warning:
See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details`));
  }
  function _o() {
    Object.keys(kt).forEach(function(n6) {
      delete kt[n6];
    });
  }
});
var bt = y((G) => {
  "use strict";
  G.__esModule = true;
  G.HandlebarsEnvironment = mr;
  function An(n6) {
    return n6 && n6.__esModule ? n6 : { default: n6 };
  }
  var le = A(), yo = D(), dr = An(yo), vo = ur(), ko = In(), So = hr(), St = An(So), bo = fr(), wo = "4.7.8";
  G.VERSION = wo;
  var xo = 8;
  G.COMPILER_REVISION = xo;
  var Co = 7;
  G.LAST_COMPATIBLE_COMPILER_REVISION = Co;
  var Eo = { 1: "<= 1.0.rc.2", 2: "== 1.0.0-rc.3", 3: "== 1.0.0-rc.4", 4: "== 1.x.x", 5: "== 2.0.0-alpha.x", 6: ">= 2.0.0-beta.1", 7: ">= 4.0.0 <4.3.0", 8: ">= 4.3.0" };
  G.REVISION_CHANGES = Eo;
  var gr = "[object Object]";
  function mr(n6, e, t) {
    this.helpers = n6 || {}, this.partials = e || {}, this.decorators = t || {}, vo.registerDefaultHelpers(this), ko.registerDefaultDecorators(this);
  }
  mr.prototype = { constructor: mr, logger: St.default, log: St.default.log, registerHelper: function(e, t) {
    if (le.toString.call(e) === gr) {
      if (t)
        throw new dr.default("Arg not supported with multiple helpers");
      le.extend(this.helpers, e);
    } else
      this.helpers[e] = t;
  }, unregisterHelper: function(e) {
    delete this.helpers[e];
  }, registerPartial: function(e, t) {
    if (le.toString.call(e) === gr)
      le.extend(this.partials, e);
    else {
      if (typeof t > "u")
        throw new dr.default('Attempting to register a partial called "' + e + '" as undefined');
      this.partials[e] = t;
    }
  }, unregisterPartial: function(e) {
    delete this.partials[e];
  }, registerDecorator: function(e, t) {
    if (le.toString.call(e) === gr) {
      if (t)
        throw new dr.default("Arg not supported with multiple decorators");
      le.extend(this.decorators, e);
    } else
      this.decorators[e] = t;
  }, unregisterDecorator: function(e) {
    delete this.decorators[e];
  }, resetLoggedPropertyAccesses: function() {
    bo.resetLoggedProperties();
  } };
  var Io = St.default.log;
  G.log = Io;
  G.createFrame = le.createFrame;
  G.logger = St.default;
});
var Rn = y((wt, Tn) => {
  "use strict";
  wt.__esModule = true;
  function _r(n6) {
    this.string = n6;
  }
  _r.prototype.toString = _r.prototype.toHTML = function() {
    return "" + this.string;
  };
  wt.default = _r;
  Tn.exports = wt.default;
});
var Nn = y((yr) => {
  "use strict";
  yr.__esModule = true;
  yr.wrapHelper = Po;
  function Po(n6, e) {
    if (typeof n6 != "function")
      return n6;
    var t = function() {
      var i = arguments[arguments.length - 1];
      return arguments[arguments.length - 1] = e(i), n6.apply(this, arguments);
    };
    return t;
  }
});
var zn = y((re) => {
  "use strict";
  re.__esModule = true;
  re.checkRevision = Ro;
  re.template = No;
  re.wrapProgram = xt;
  re.resolvePartial = Do;
  re.invokePartial = Bo;
  re.noop = qn;
  function Mo(n6) {
    return n6 && n6.__esModule ? n6 : { default: n6 };
  }
  function Oo(n6) {
    if (n6 && n6.__esModule)
      return n6;
    var e = {};
    if (n6 != null)
      for (var t in n6)
        Object.prototype.hasOwnProperty.call(n6, t) && (e[t] = n6[t]);
    return e.default = n6, e;
  }
  var Lo = A(), Z = Oo(Lo), Ao = D(), j = Mo(Ao), J = bt(), Dn = ur(), To = Nn(), Bn = fr();
  function Ro(n6) {
    var e = n6 && n6[0] || 1, t = J.COMPILER_REVISION;
    if (!(e >= J.LAST_COMPATIBLE_COMPILER_REVISION && e <= J.COMPILER_REVISION))
      if (e < J.LAST_COMPATIBLE_COMPILER_REVISION) {
        var r = J.REVISION_CHANGES[t], i = J.REVISION_CHANGES[e];
        throw new j.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + r + ") or downgrade your runtime to an older version (" + i + ").");
      } else
        throw new j.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + n6[1] + ").");
  }
  function No(n6, e) {
    if (!e)
      throw new j.default("No environment passed to template");
    if (!n6 || !n6.main)
      throw new j.default("Unknown template object: " + typeof n6);
    n6.main.decorator = n6.main_d, e.VM.checkRevision(n6.compiler);
    var t = n6.compiler && n6.compiler[0] === 7;
    function r(o, a, u) {
      u.hash && (a = Z.extend({}, a, u.hash), u.ids && (u.ids[0] = true)), o = e.VM.resolvePartial.call(this, o, a, u);
      var l = Z.extend({}, u, { hooks: this.hooks, protoAccessControl: this.protoAccessControl }), h = e.VM.invokePartial.call(this, o, a, l);
      if (h == null && e.compile && (u.partials[u.name] = e.compile(o, n6.compilerOptions, e), h = u.partials[u.name](a, l)), h != null) {
        if (u.indent) {
          for (var c = h.split(`
`), p = 0, f = c.length; p < f && !(!c[p] && p + 1 === f); p++)
            c[p] = u.indent + c[p];
          h = c.join(`
`);
        }
        return h;
      } else
        throw new j.default("The partial " + u.name + " could not be compiled when running in runtime-only mode");
    }
    var i = { strict: function(a, u, l) {
      if (!a || !(u in a))
        throw new j.default('"' + u + '" not defined in ' + a, { loc: l });
      return i.lookupProperty(a, u);
    }, lookupProperty: function(a, u) {
      var l = a[u];
      if (l == null || Object.prototype.hasOwnProperty.call(a, u) || Bn.resultIsAllowed(l, i.protoAccessControl, u))
        return l;
    }, lookup: function(a, u) {
      for (var l = a.length, h = 0; h < l; h++) {
        var c = a[h] && i.lookupProperty(a[h], u);
        if (c != null)
          return a[h][u];
      }
    }, lambda: function(a, u) {
      return typeof a == "function" ? a.call(u) : a;
    }, escapeExpression: Z.escapeExpression, invokePartial: r, fn: function(a) {
      var u = n6[a];
      return u.decorator = n6[a + "_d"], u;
    }, programs: [], program: function(a, u, l, h, c) {
      var p = this.programs[a], f = this.fn(a);
      return u || c || h || l ? p = xt(this, a, f, u, l, h, c) : p || (p = this.programs[a] = xt(this, a, f)), p;
    }, data: function(a, u) {
      for (; a && u--; )
        a = a._parent;
      return a;
    }, mergeIfNeeded: function(a, u) {
      var l = a || u;
      return a && u && a !== u && (l = Z.extend({}, u, a)), l;
    }, nullContext: Object.seal({}), noop: e.VM.noop, compilerInfo: n6.compiler };
    function s(o) {
      var a = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], u = a.data;
      s._setup(a), !a.partial && n6.useData && (u = qo(o, u));
      var l = void 0, h = n6.useBlockParams ? [] : void 0;
      n6.useDepths && (a.depths ? l = o != a.depths[0] ? [o].concat(a.depths) : a.depths : l = [o]);
      function c(p) {
        return "" + n6.main(i, p, i.helpers, i.partials, u, h, l);
      }
      return c = Hn(n6.main, c, i, a.depths || [], u, h), c(o, a);
    }
    return s.isTop = true, s._setup = function(o) {
      if (o.partial)
        i.protoAccessControl = o.protoAccessControl, i.helpers = o.helpers, i.partials = o.partials, i.decorators = o.decorators, i.hooks = o.hooks;
      else {
        var a = Z.extend({}, e.helpers, o.helpers);
        Ho(a, i), i.helpers = a, n6.usePartial && (i.partials = i.mergeIfNeeded(o.partials, e.partials)), (n6.usePartial || n6.useDecorators) && (i.decorators = Z.extend({}, e.decorators, o.decorators)), i.hooks = {}, i.protoAccessControl = Bn.createProtoAccessControl(o);
        var u = o.allowCallsToHelperMissing || t;
        Dn.moveHelperToHooks(i, "helperMissing", u), Dn.moveHelperToHooks(i, "blockHelperMissing", u);
      }
    }, s._child = function(o, a, u, l) {
      if (n6.useBlockParams && !u)
        throw new j.default("must pass block params");
      if (n6.useDepths && !l)
        throw new j.default("must pass parent depths");
      return xt(i, o, n6[o], a, 0, u, l);
    }, s;
  }
  function xt(n6, e, t, r, i, s, o) {
    function a(u) {
      var l = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], h = o;
      return o && u != o[0] && !(u === n6.nullContext && o[0] === null) && (h = [u].concat(o)), t(n6, u, n6.helpers, n6.partials, l.data || r, s && [l.blockParams].concat(s), h);
    }
    return a = Hn(t, a, n6, o, r, s), a.program = e, a.depth = o ? o.length : 0, a.blockParams = i || 0, a;
  }
  function Do(n6, e, t) {
    return n6 ? !n6.call && !t.name && (t.name = n6, n6 = t.partials[n6]) : t.name === "@partial-block" ? n6 = t.data["partial-block"] : n6 = t.partials[t.name], n6;
  }
  function Bo(n6, e, t) {
    var r = t.data && t.data["partial-block"];
    t.partial = true, t.ids && (t.data.contextPath = t.ids[0] || t.data.contextPath);
    var i = void 0;
    if (t.fn && t.fn !== qn && function() {
      t.data = J.createFrame(t.data);
      var s = t.fn;
      i = t.data["partial-block"] = function(a) {
        var u = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1];
        return u.data = J.createFrame(u.data), u.data["partial-block"] = r, s(a, u);
      }, s.partials && (t.partials = Z.extend({}, t.partials, s.partials));
    }(), n6 === void 0 && i && (n6 = i), n6 === void 0)
      throw new j.default("The partial " + t.name + " could not be found");
    if (n6 instanceof Function)
      return n6(e, t);
  }
  function qn() {
    return "";
  }
  function qo(n6, e) {
    return (!e || !("root" in e)) && (e = e ? J.createFrame(e) : {}, e.root = n6), e;
  }
  function Hn(n6, e, t, r, i, s) {
    if (n6.decorator) {
      var o = {};
      e = n6.decorator(e, o, t, r && r[0], i, s, r), Z.extend(e, o);
    }
    return e;
  }
  function Ho(n6, e) {
    Object.keys(n6).forEach(function(t) {
      var r = n6[t];
      n6[t] = zo(r, e);
    });
  }
  function zo(n6, e) {
    var t = e.lookupProperty;
    return To.wrapHelper(n6, function(r) {
      return Z.extend({ lookupProperty: t }, r);
    });
  }
});
var vr = y((Ct, Fn) => {
  "use strict";
  Ct.__esModule = true;
  Ct.default = function(n6) {
    (function() {
      typeof globalThis != "object" && (Object.prototype.__defineGetter__("__magic__", function() {
        return this;
      }), __magic__.globalThis = __magic__, delete Object.prototype.__magic__);
    })();
    var e = globalThis.Handlebars;
    n6.noConflict = function() {
      return globalThis.Handlebars === n6 && (globalThis.Handlebars = e), n6;
    };
  };
  Fn.exports = Ct.default;
});
var Kn = y((Et, Vn) => {
  "use strict";
  Et.__esModule = true;
  function Sr(n6) {
    return n6 && n6.__esModule ? n6 : { default: n6 };
  }
  function br(n6) {
    if (n6 && n6.__esModule)
      return n6;
    var e = {};
    if (n6 != null)
      for (var t in n6)
        Object.prototype.hasOwnProperty.call(n6, t) && (e[t] = n6[t]);
    return e.default = n6, e;
  }
  var Fo = bt(), Wn = br(Fo), Wo = Rn(), Go = Sr(Wo), Uo = D(), Vo = Sr(Uo), Ko = A(), kr = br(Ko), Zo = zn(), Gn = br(Zo), jo = vr(), Jo = Sr(jo);
  function Un() {
    var n6 = new Wn.HandlebarsEnvironment();
    return kr.extend(n6, Wn), n6.SafeString = Go.default, n6.Exception = Vo.default, n6.Utils = kr, n6.escapeExpression = kr.escapeExpression, n6.VM = Gn, n6.template = function(e) {
      return Gn.template(e, n6);
    }, n6;
  }
  var Be = Un();
  Be.create = Un;
  Jo.default(Be);
  Be.default = Be;
  Et.default = Be;
  Vn.exports = Et.default;
});
var wr = y((It, jn) => {
  "use strict";
  It.__esModule = true;
  var Zn = { helpers: { helperExpression: function(e) {
    return e.type === "SubExpression" || (e.type === "MustacheStatement" || e.type === "BlockStatement") && !!(e.params && e.params.length || e.hash);
  }, scopedId: function(e) {
    return /^\.|this\b/.test(e.original);
  }, simpleId: function(e) {
    return e.parts.length === 1 && !Zn.helpers.scopedId(e) && !e.depth;
  } } };
  It.default = Zn;
  jn.exports = It.default;
});
var Qn = y((Pt, Jn) => {
  "use strict";
  Pt.__esModule = true;
  var Qo = function() {
    var n6 = { trace: function() {
    }, yy: {}, symbols_: { error: 2, root: 3, program: 4, EOF: 5, program_repetition0: 6, statement: 7, mustache: 8, block: 9, rawBlock: 10, partial: 11, partialBlock: 12, content: 13, COMMENT: 14, CONTENT: 15, openRawBlock: 16, rawBlock_repetition0: 17, END_RAW_BLOCK: 18, OPEN_RAW_BLOCK: 19, helperName: 20, openRawBlock_repetition0: 21, openRawBlock_option0: 22, CLOSE_RAW_BLOCK: 23, openBlock: 24, block_option0: 25, closeBlock: 26, openInverse: 27, block_option1: 28, OPEN_BLOCK: 29, openBlock_repetition0: 30, openBlock_option0: 31, openBlock_option1: 32, CLOSE: 33, OPEN_INVERSE: 34, openInverse_repetition0: 35, openInverse_option0: 36, openInverse_option1: 37, openInverseChain: 38, OPEN_INVERSE_CHAIN: 39, openInverseChain_repetition0: 40, openInverseChain_option0: 41, openInverseChain_option1: 42, inverseAndProgram: 43, INVERSE: 44, inverseChain: 45, inverseChain_option0: 46, OPEN_ENDBLOCK: 47, OPEN: 48, mustache_repetition0: 49, mustache_option0: 50, OPEN_UNESCAPED: 51, mustache_repetition1: 52, mustache_option1: 53, CLOSE_UNESCAPED: 54, OPEN_PARTIAL: 55, partialName: 56, partial_repetition0: 57, partial_option0: 58, openPartialBlock: 59, OPEN_PARTIAL_BLOCK: 60, openPartialBlock_repetition0: 61, openPartialBlock_option0: 62, param: 63, sexpr: 64, OPEN_SEXPR: 65, sexpr_repetition0: 66, sexpr_option0: 67, CLOSE_SEXPR: 68, hash: 69, hash_repetition_plus0: 70, hashSegment: 71, ID: 72, EQUALS: 73, blockParams: 74, OPEN_BLOCK_PARAMS: 75, blockParams_repetition_plus0: 76, CLOSE_BLOCK_PARAMS: 77, path: 78, dataName: 79, STRING: 80, NUMBER: 81, BOOLEAN: 82, UNDEFINED: 83, NULL: 84, DATA: 85, pathSegments: 86, SEP: 87, $accept: 0, $end: 1 }, terminals_: { 2: "error", 5: "EOF", 14: "COMMENT", 15: "CONTENT", 18: "END_RAW_BLOCK", 19: "OPEN_RAW_BLOCK", 23: "CLOSE_RAW_BLOCK", 29: "OPEN_BLOCK", 33: "CLOSE", 34: "OPEN_INVERSE", 39: "OPEN_INVERSE_CHAIN", 44: "INVERSE", 47: "OPEN_ENDBLOCK", 48: "OPEN", 51: "OPEN_UNESCAPED", 54: "CLOSE_UNESCAPED", 55: "OPEN_PARTIAL", 60: "OPEN_PARTIAL_BLOCK", 65: "OPEN_SEXPR", 68: "CLOSE_SEXPR", 72: "ID", 73: "EQUALS", 75: "OPEN_BLOCK_PARAMS", 77: "CLOSE_BLOCK_PARAMS", 80: "STRING", 81: "NUMBER", 82: "BOOLEAN", 83: "UNDEFINED", 84: "NULL", 85: "DATA", 87: "SEP" }, productions_: [0, [3, 2], [4, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [13, 1], [10, 3], [16, 5], [9, 4], [9, 4], [24, 6], [27, 6], [38, 6], [43, 2], [45, 3], [45, 1], [26, 3], [8, 5], [8, 5], [11, 5], [12, 3], [59, 5], [63, 1], [63, 1], [64, 5], [69, 1], [71, 3], [74, 3], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [56, 1], [56, 1], [79, 2], [78, 1], [86, 3], [86, 1], [6, 0], [6, 2], [17, 0], [17, 2], [21, 0], [21, 2], [22, 0], [22, 1], [25, 0], [25, 1], [28, 0], [28, 1], [30, 0], [30, 2], [31, 0], [31, 1], [32, 0], [32, 1], [35, 0], [35, 2], [36, 0], [36, 1], [37, 0], [37, 1], [40, 0], [40, 2], [41, 0], [41, 1], [42, 0], [42, 1], [46, 0], [46, 1], [49, 0], [49, 2], [50, 0], [50, 1], [52, 0], [52, 2], [53, 0], [53, 1], [57, 0], [57, 2], [58, 0], [58, 1], [61, 0], [61, 2], [62, 0], [62, 1], [66, 0], [66, 2], [67, 0], [67, 1], [70, 1], [70, 2], [76, 1], [76, 2]], performAction: function(i, s, o, a, u, l, h) {
      var c = l.length - 1;
      switch (u) {
        case 1:
          return l[c - 1];
        case 2:
          this.$ = a.prepareProgram(l[c]);
          break;
        case 3:
          this.$ = l[c];
          break;
        case 4:
          this.$ = l[c];
          break;
        case 5:
          this.$ = l[c];
          break;
        case 6:
          this.$ = l[c];
          break;
        case 7:
          this.$ = l[c];
          break;
        case 8:
          this.$ = l[c];
          break;
        case 9:
          this.$ = { type: "CommentStatement", value: a.stripComment(l[c]), strip: a.stripFlags(l[c], l[c]), loc: a.locInfo(this._$) };
          break;
        case 10:
          this.$ = { type: "ContentStatement", original: l[c], value: l[c], loc: a.locInfo(this._$) };
          break;
        case 11:
          this.$ = a.prepareRawBlock(l[c - 2], l[c - 1], l[c], this._$);
          break;
        case 12:
          this.$ = { path: l[c - 3], params: l[c - 2], hash: l[c - 1] };
          break;
        case 13:
          this.$ = a.prepareBlock(l[c - 3], l[c - 2], l[c - 1], l[c], false, this._$);
          break;
        case 14:
          this.$ = a.prepareBlock(l[c - 3], l[c - 2], l[c - 1], l[c], true, this._$);
          break;
        case 15:
          this.$ = { open: l[c - 5], path: l[c - 4], params: l[c - 3], hash: l[c - 2], blockParams: l[c - 1], strip: a.stripFlags(l[c - 5], l[c]) };
          break;
        case 16:
          this.$ = { path: l[c - 4], params: l[c - 3], hash: l[c - 2], blockParams: l[c - 1], strip: a.stripFlags(l[c - 5], l[c]) };
          break;
        case 17:
          this.$ = { path: l[c - 4], params: l[c - 3], hash: l[c - 2], blockParams: l[c - 1], strip: a.stripFlags(l[c - 5], l[c]) };
          break;
        case 18:
          this.$ = { strip: a.stripFlags(l[c - 1], l[c - 1]), program: l[c] };
          break;
        case 19:
          var p = a.prepareBlock(l[c - 2], l[c - 1], l[c], l[c], false, this._$), f = a.prepareProgram([p], l[c - 1].loc);
          f.chained = true, this.$ = { strip: l[c - 2].strip, program: f, chain: true };
          break;
        case 20:
          this.$ = l[c];
          break;
        case 21:
          this.$ = { path: l[c - 1], strip: a.stripFlags(l[c - 2], l[c]) };
          break;
        case 22:
          this.$ = a.prepareMustache(l[c - 3], l[c - 2], l[c - 1], l[c - 4], a.stripFlags(l[c - 4], l[c]), this._$);
          break;
        case 23:
          this.$ = a.prepareMustache(l[c - 3], l[c - 2], l[c - 1], l[c - 4], a.stripFlags(l[c - 4], l[c]), this._$);
          break;
        case 24:
          this.$ = { type: "PartialStatement", name: l[c - 3], params: l[c - 2], hash: l[c - 1], indent: "", strip: a.stripFlags(l[c - 4], l[c]), loc: a.locInfo(this._$) };
          break;
        case 25:
          this.$ = a.preparePartialBlock(l[c - 2], l[c - 1], l[c], this._$);
          break;
        case 26:
          this.$ = { path: l[c - 3], params: l[c - 2], hash: l[c - 1], strip: a.stripFlags(l[c - 4], l[c]) };
          break;
        case 27:
          this.$ = l[c];
          break;
        case 28:
          this.$ = l[c];
          break;
        case 29:
          this.$ = { type: "SubExpression", path: l[c - 3], params: l[c - 2], hash: l[c - 1], loc: a.locInfo(this._$) };
          break;
        case 30:
          this.$ = { type: "Hash", pairs: l[c], loc: a.locInfo(this._$) };
          break;
        case 31:
          this.$ = { type: "HashPair", key: a.id(l[c - 2]), value: l[c], loc: a.locInfo(this._$) };
          break;
        case 32:
          this.$ = a.id(l[c - 1]);
          break;
        case 33:
          this.$ = l[c];
          break;
        case 34:
          this.$ = l[c];
          break;
        case 35:
          this.$ = { type: "StringLiteral", value: l[c], original: l[c], loc: a.locInfo(this._$) };
          break;
        case 36:
          this.$ = { type: "NumberLiteral", value: Number(l[c]), original: Number(l[c]), loc: a.locInfo(this._$) };
          break;
        case 37:
          this.$ = { type: "BooleanLiteral", value: l[c] === "true", original: l[c] === "true", loc: a.locInfo(this._$) };
          break;
        case 38:
          this.$ = { type: "UndefinedLiteral", original: void 0, value: void 0, loc: a.locInfo(this._$) };
          break;
        case 39:
          this.$ = { type: "NullLiteral", original: null, value: null, loc: a.locInfo(this._$) };
          break;
        case 40:
          this.$ = l[c];
          break;
        case 41:
          this.$ = l[c];
          break;
        case 42:
          this.$ = a.preparePath(true, l[c], this._$);
          break;
        case 43:
          this.$ = a.preparePath(false, l[c], this._$);
          break;
        case 44:
          l[c - 2].push({ part: a.id(l[c]), original: l[c], separator: l[c - 1] }), this.$ = l[c - 2];
          break;
        case 45:
          this.$ = [{ part: a.id(l[c]), original: l[c] }];
          break;
        case 46:
          this.$ = [];
          break;
        case 47:
          l[c - 1].push(l[c]);
          break;
        case 48:
          this.$ = [];
          break;
        case 49:
          l[c - 1].push(l[c]);
          break;
        case 50:
          this.$ = [];
          break;
        case 51:
          l[c - 1].push(l[c]);
          break;
        case 58:
          this.$ = [];
          break;
        case 59:
          l[c - 1].push(l[c]);
          break;
        case 64:
          this.$ = [];
          break;
        case 65:
          l[c - 1].push(l[c]);
          break;
        case 70:
          this.$ = [];
          break;
        case 71:
          l[c - 1].push(l[c]);
          break;
        case 78:
          this.$ = [];
          break;
        case 79:
          l[c - 1].push(l[c]);
          break;
        case 82:
          this.$ = [];
          break;
        case 83:
          l[c - 1].push(l[c]);
          break;
        case 86:
          this.$ = [];
          break;
        case 87:
          l[c - 1].push(l[c]);
          break;
        case 90:
          this.$ = [];
          break;
        case 91:
          l[c - 1].push(l[c]);
          break;
        case 94:
          this.$ = [];
          break;
        case 95:
          l[c - 1].push(l[c]);
          break;
        case 98:
          this.$ = [l[c]];
          break;
        case 99:
          l[c - 1].push(l[c]);
          break;
        case 100:
          this.$ = [l[c]];
          break;
        case 101:
          l[c - 1].push(l[c]);
          break;
      }
    }, table: [{ 3: 1, 4: 2, 5: [2, 46], 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 1: [3] }, { 5: [1, 4] }, { 5: [2, 2], 7: 5, 8: 6, 9: 7, 10: 8, 11: 9, 12: 10, 13: 11, 14: [1, 12], 15: [1, 20], 16: 17, 19: [1, 23], 24: 15, 27: 16, 29: [1, 21], 34: [1, 22], 39: [2, 2], 44: [2, 2], 47: [2, 2], 48: [1, 13], 51: [1, 14], 55: [1, 18], 59: 19, 60: [1, 24] }, { 1: [2, 1] }, { 5: [2, 47], 14: [2, 47], 15: [2, 47], 19: [2, 47], 29: [2, 47], 34: [2, 47], 39: [2, 47], 44: [2, 47], 47: [2, 47], 48: [2, 47], 51: [2, 47], 55: [2, 47], 60: [2, 47] }, { 5: [2, 3], 14: [2, 3], 15: [2, 3], 19: [2, 3], 29: [2, 3], 34: [2, 3], 39: [2, 3], 44: [2, 3], 47: [2, 3], 48: [2, 3], 51: [2, 3], 55: [2, 3], 60: [2, 3] }, { 5: [2, 4], 14: [2, 4], 15: [2, 4], 19: [2, 4], 29: [2, 4], 34: [2, 4], 39: [2, 4], 44: [2, 4], 47: [2, 4], 48: [2, 4], 51: [2, 4], 55: [2, 4], 60: [2, 4] }, { 5: [2, 5], 14: [2, 5], 15: [2, 5], 19: [2, 5], 29: [2, 5], 34: [2, 5], 39: [2, 5], 44: [2, 5], 47: [2, 5], 48: [2, 5], 51: [2, 5], 55: [2, 5], 60: [2, 5] }, { 5: [2, 6], 14: [2, 6], 15: [2, 6], 19: [2, 6], 29: [2, 6], 34: [2, 6], 39: [2, 6], 44: [2, 6], 47: [2, 6], 48: [2, 6], 51: [2, 6], 55: [2, 6], 60: [2, 6] }, { 5: [2, 7], 14: [2, 7], 15: [2, 7], 19: [2, 7], 29: [2, 7], 34: [2, 7], 39: [2, 7], 44: [2, 7], 47: [2, 7], 48: [2, 7], 51: [2, 7], 55: [2, 7], 60: [2, 7] }, { 5: [2, 8], 14: [2, 8], 15: [2, 8], 19: [2, 8], 29: [2, 8], 34: [2, 8], 39: [2, 8], 44: [2, 8], 47: [2, 8], 48: [2, 8], 51: [2, 8], 55: [2, 8], 60: [2, 8] }, { 5: [2, 9], 14: [2, 9], 15: [2, 9], 19: [2, 9], 29: [2, 9], 34: [2, 9], 39: [2, 9], 44: [2, 9], 47: [2, 9], 48: [2, 9], 51: [2, 9], 55: [2, 9], 60: [2, 9] }, { 20: 25, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 36, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 37, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 4: 38, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 15: [2, 48], 17: 39, 18: [2, 48] }, { 20: 41, 56: 40, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 44, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 5: [2, 10], 14: [2, 10], 15: [2, 10], 18: [2, 10], 19: [2, 10], 29: [2, 10], 34: [2, 10], 39: [2, 10], 44: [2, 10], 47: [2, 10], 48: [2, 10], 51: [2, 10], 55: [2, 10], 60: [2, 10] }, { 20: 45, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 46, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 47, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 41, 56: 48, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [2, 78], 49: 49, 65: [2, 78], 72: [2, 78], 80: [2, 78], 81: [2, 78], 82: [2, 78], 83: [2, 78], 84: [2, 78], 85: [2, 78] }, { 23: [2, 33], 33: [2, 33], 54: [2, 33], 65: [2, 33], 68: [2, 33], 72: [2, 33], 75: [2, 33], 80: [2, 33], 81: [2, 33], 82: [2, 33], 83: [2, 33], 84: [2, 33], 85: [2, 33] }, { 23: [2, 34], 33: [2, 34], 54: [2, 34], 65: [2, 34], 68: [2, 34], 72: [2, 34], 75: [2, 34], 80: [2, 34], 81: [2, 34], 82: [2, 34], 83: [2, 34], 84: [2, 34], 85: [2, 34] }, { 23: [2, 35], 33: [2, 35], 54: [2, 35], 65: [2, 35], 68: [2, 35], 72: [2, 35], 75: [2, 35], 80: [2, 35], 81: [2, 35], 82: [2, 35], 83: [2, 35], 84: [2, 35], 85: [2, 35] }, { 23: [2, 36], 33: [2, 36], 54: [2, 36], 65: [2, 36], 68: [2, 36], 72: [2, 36], 75: [2, 36], 80: [2, 36], 81: [2, 36], 82: [2, 36], 83: [2, 36], 84: [2, 36], 85: [2, 36] }, { 23: [2, 37], 33: [2, 37], 54: [2, 37], 65: [2, 37], 68: [2, 37], 72: [2, 37], 75: [2, 37], 80: [2, 37], 81: [2, 37], 82: [2, 37], 83: [2, 37], 84: [2, 37], 85: [2, 37] }, { 23: [2, 38], 33: [2, 38], 54: [2, 38], 65: [2, 38], 68: [2, 38], 72: [2, 38], 75: [2, 38], 80: [2, 38], 81: [2, 38], 82: [2, 38], 83: [2, 38], 84: [2, 38], 85: [2, 38] }, { 23: [2, 39], 33: [2, 39], 54: [2, 39], 65: [2, 39], 68: [2, 39], 72: [2, 39], 75: [2, 39], 80: [2, 39], 81: [2, 39], 82: [2, 39], 83: [2, 39], 84: [2, 39], 85: [2, 39] }, { 23: [2, 43], 33: [2, 43], 54: [2, 43], 65: [2, 43], 68: [2, 43], 72: [2, 43], 75: [2, 43], 80: [2, 43], 81: [2, 43], 82: [2, 43], 83: [2, 43], 84: [2, 43], 85: [2, 43], 87: [1, 50] }, { 72: [1, 35], 86: 51 }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 52: 52, 54: [2, 82], 65: [2, 82], 72: [2, 82], 80: [2, 82], 81: [2, 82], 82: [2, 82], 83: [2, 82], 84: [2, 82], 85: [2, 82] }, { 25: 53, 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 54, 47: [2, 54] }, { 28: 59, 43: 60, 44: [1, 58], 47: [2, 56] }, { 13: 62, 15: [1, 20], 18: [1, 61] }, { 33: [2, 86], 57: 63, 65: [2, 86], 72: [2, 86], 80: [2, 86], 81: [2, 86], 82: [2, 86], 83: [2, 86], 84: [2, 86], 85: [2, 86] }, { 33: [2, 40], 65: [2, 40], 72: [2, 40], 80: [2, 40], 81: [2, 40], 82: [2, 40], 83: [2, 40], 84: [2, 40], 85: [2, 40] }, { 33: [2, 41], 65: [2, 41], 72: [2, 41], 80: [2, 41], 81: [2, 41], 82: [2, 41], 83: [2, 41], 84: [2, 41], 85: [2, 41] }, { 20: 64, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 65, 47: [1, 66] }, { 30: 67, 33: [2, 58], 65: [2, 58], 72: [2, 58], 75: [2, 58], 80: [2, 58], 81: [2, 58], 82: [2, 58], 83: [2, 58], 84: [2, 58], 85: [2, 58] }, { 33: [2, 64], 35: 68, 65: [2, 64], 72: [2, 64], 75: [2, 64], 80: [2, 64], 81: [2, 64], 82: [2, 64], 83: [2, 64], 84: [2, 64], 85: [2, 64] }, { 21: 69, 23: [2, 50], 65: [2, 50], 72: [2, 50], 80: [2, 50], 81: [2, 50], 82: [2, 50], 83: [2, 50], 84: [2, 50], 85: [2, 50] }, { 33: [2, 90], 61: 70, 65: [2, 90], 72: [2, 90], 80: [2, 90], 81: [2, 90], 82: [2, 90], 83: [2, 90], 84: [2, 90], 85: [2, 90] }, { 20: 74, 33: [2, 80], 50: 71, 63: 72, 64: 75, 65: [1, 43], 69: 73, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 72: [1, 79] }, { 23: [2, 42], 33: [2, 42], 54: [2, 42], 65: [2, 42], 68: [2, 42], 72: [2, 42], 75: [2, 42], 80: [2, 42], 81: [2, 42], 82: [2, 42], 83: [2, 42], 84: [2, 42], 85: [2, 42], 87: [1, 50] }, { 20: 74, 53: 80, 54: [2, 84], 63: 81, 64: 75, 65: [1, 43], 69: 82, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 83, 47: [1, 66] }, { 47: [2, 55] }, { 4: 84, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 47: [2, 20] }, { 20: 85, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 86, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 26: 87, 47: [1, 66] }, { 47: [2, 57] }, { 5: [2, 11], 14: [2, 11], 15: [2, 11], 19: [2, 11], 29: [2, 11], 34: [2, 11], 39: [2, 11], 44: [2, 11], 47: [2, 11], 48: [2, 11], 51: [2, 11], 55: [2, 11], 60: [2, 11] }, { 15: [2, 49], 18: [2, 49] }, { 20: 74, 33: [2, 88], 58: 88, 63: 89, 64: 75, 65: [1, 43], 69: 90, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 65: [2, 94], 66: 91, 68: [2, 94], 72: [2, 94], 80: [2, 94], 81: [2, 94], 82: [2, 94], 83: [2, 94], 84: [2, 94], 85: [2, 94] }, { 5: [2, 25], 14: [2, 25], 15: [2, 25], 19: [2, 25], 29: [2, 25], 34: [2, 25], 39: [2, 25], 44: [2, 25], 47: [2, 25], 48: [2, 25], 51: [2, 25], 55: [2, 25], 60: [2, 25] }, { 20: 92, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 31: 93, 33: [2, 60], 63: 94, 64: 75, 65: [1, 43], 69: 95, 70: 76, 71: 77, 72: [1, 78], 75: [2, 60], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 66], 36: 96, 63: 97, 64: 75, 65: [1, 43], 69: 98, 70: 76, 71: 77, 72: [1, 78], 75: [2, 66], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 22: 99, 23: [2, 52], 63: 100, 64: 75, 65: [1, 43], 69: 101, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 92], 62: 102, 63: 103, 64: 75, 65: [1, 43], 69: 104, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 105] }, { 33: [2, 79], 65: [2, 79], 72: [2, 79], 80: [2, 79], 81: [2, 79], 82: [2, 79], 83: [2, 79], 84: [2, 79], 85: [2, 79] }, { 33: [2, 81] }, { 23: [2, 27], 33: [2, 27], 54: [2, 27], 65: [2, 27], 68: [2, 27], 72: [2, 27], 75: [2, 27], 80: [2, 27], 81: [2, 27], 82: [2, 27], 83: [2, 27], 84: [2, 27], 85: [2, 27] }, { 23: [2, 28], 33: [2, 28], 54: [2, 28], 65: [2, 28], 68: [2, 28], 72: [2, 28], 75: [2, 28], 80: [2, 28], 81: [2, 28], 82: [2, 28], 83: [2, 28], 84: [2, 28], 85: [2, 28] }, { 23: [2, 30], 33: [2, 30], 54: [2, 30], 68: [2, 30], 71: 106, 72: [1, 107], 75: [2, 30] }, { 23: [2, 98], 33: [2, 98], 54: [2, 98], 68: [2, 98], 72: [2, 98], 75: [2, 98] }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 73: [1, 108], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 23: [2, 44], 33: [2, 44], 54: [2, 44], 65: [2, 44], 68: [2, 44], 72: [2, 44], 75: [2, 44], 80: [2, 44], 81: [2, 44], 82: [2, 44], 83: [2, 44], 84: [2, 44], 85: [2, 44], 87: [2, 44] }, { 54: [1, 109] }, { 54: [2, 83], 65: [2, 83], 72: [2, 83], 80: [2, 83], 81: [2, 83], 82: [2, 83], 83: [2, 83], 84: [2, 83], 85: [2, 83] }, { 54: [2, 85] }, { 5: [2, 13], 14: [2, 13], 15: [2, 13], 19: [2, 13], 29: [2, 13], 34: [2, 13], 39: [2, 13], 44: [2, 13], 47: [2, 13], 48: [2, 13], 51: [2, 13], 55: [2, 13], 60: [2, 13] }, { 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 111, 46: 110, 47: [2, 76] }, { 33: [2, 70], 40: 112, 65: [2, 70], 72: [2, 70], 75: [2, 70], 80: [2, 70], 81: [2, 70], 82: [2, 70], 83: [2, 70], 84: [2, 70], 85: [2, 70] }, { 47: [2, 18] }, { 5: [2, 14], 14: [2, 14], 15: [2, 14], 19: [2, 14], 29: [2, 14], 34: [2, 14], 39: [2, 14], 44: [2, 14], 47: [2, 14], 48: [2, 14], 51: [2, 14], 55: [2, 14], 60: [2, 14] }, { 33: [1, 113] }, { 33: [2, 87], 65: [2, 87], 72: [2, 87], 80: [2, 87], 81: [2, 87], 82: [2, 87], 83: [2, 87], 84: [2, 87], 85: [2, 87] }, { 33: [2, 89] }, { 20: 74, 63: 115, 64: 75, 65: [1, 43], 67: 114, 68: [2, 96], 69: 116, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 117] }, { 32: 118, 33: [2, 62], 74: 119, 75: [1, 120] }, { 33: [2, 59], 65: [2, 59], 72: [2, 59], 75: [2, 59], 80: [2, 59], 81: [2, 59], 82: [2, 59], 83: [2, 59], 84: [2, 59], 85: [2, 59] }, { 33: [2, 61], 75: [2, 61] }, { 33: [2, 68], 37: 121, 74: 122, 75: [1, 120] }, { 33: [2, 65], 65: [2, 65], 72: [2, 65], 75: [2, 65], 80: [2, 65], 81: [2, 65], 82: [2, 65], 83: [2, 65], 84: [2, 65], 85: [2, 65] }, { 33: [2, 67], 75: [2, 67] }, { 23: [1, 123] }, { 23: [2, 51], 65: [2, 51], 72: [2, 51], 80: [2, 51], 81: [2, 51], 82: [2, 51], 83: [2, 51], 84: [2, 51], 85: [2, 51] }, { 23: [2, 53] }, { 33: [1, 124] }, { 33: [2, 91], 65: [2, 91], 72: [2, 91], 80: [2, 91], 81: [2, 91], 82: [2, 91], 83: [2, 91], 84: [2, 91], 85: [2, 91] }, { 33: [2, 93] }, { 5: [2, 22], 14: [2, 22], 15: [2, 22], 19: [2, 22], 29: [2, 22], 34: [2, 22], 39: [2, 22], 44: [2, 22], 47: [2, 22], 48: [2, 22], 51: [2, 22], 55: [2, 22], 60: [2, 22] }, { 23: [2, 99], 33: [2, 99], 54: [2, 99], 68: [2, 99], 72: [2, 99], 75: [2, 99] }, { 73: [1, 108] }, { 20: 74, 63: 125, 64: 75, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 23], 14: [2, 23], 15: [2, 23], 19: [2, 23], 29: [2, 23], 34: [2, 23], 39: [2, 23], 44: [2, 23], 47: [2, 23], 48: [2, 23], 51: [2, 23], 55: [2, 23], 60: [2, 23] }, { 47: [2, 19] }, { 47: [2, 77] }, { 20: 74, 33: [2, 72], 41: 126, 63: 127, 64: 75, 65: [1, 43], 69: 128, 70: 76, 71: 77, 72: [1, 78], 75: [2, 72], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 24], 14: [2, 24], 15: [2, 24], 19: [2, 24], 29: [2, 24], 34: [2, 24], 39: [2, 24], 44: [2, 24], 47: [2, 24], 48: [2, 24], 51: [2, 24], 55: [2, 24], 60: [2, 24] }, { 68: [1, 129] }, { 65: [2, 95], 68: [2, 95], 72: [2, 95], 80: [2, 95], 81: [2, 95], 82: [2, 95], 83: [2, 95], 84: [2, 95], 85: [2, 95] }, { 68: [2, 97] }, { 5: [2, 21], 14: [2, 21], 15: [2, 21], 19: [2, 21], 29: [2, 21], 34: [2, 21], 39: [2, 21], 44: [2, 21], 47: [2, 21], 48: [2, 21], 51: [2, 21], 55: [2, 21], 60: [2, 21] }, { 33: [1, 130] }, { 33: [2, 63] }, { 72: [1, 132], 76: 131 }, { 33: [1, 133] }, { 33: [2, 69] }, { 15: [2, 12], 18: [2, 12] }, { 14: [2, 26], 15: [2, 26], 19: [2, 26], 29: [2, 26], 34: [2, 26], 47: [2, 26], 48: [2, 26], 51: [2, 26], 55: [2, 26], 60: [2, 26] }, { 23: [2, 31], 33: [2, 31], 54: [2, 31], 68: [2, 31], 72: [2, 31], 75: [2, 31] }, { 33: [2, 74], 42: 134, 74: 135, 75: [1, 120] }, { 33: [2, 71], 65: [2, 71], 72: [2, 71], 75: [2, 71], 80: [2, 71], 81: [2, 71], 82: [2, 71], 83: [2, 71], 84: [2, 71], 85: [2, 71] }, { 33: [2, 73], 75: [2, 73] }, { 23: [2, 29], 33: [2, 29], 54: [2, 29], 65: [2, 29], 68: [2, 29], 72: [2, 29], 75: [2, 29], 80: [2, 29], 81: [2, 29], 82: [2, 29], 83: [2, 29], 84: [2, 29], 85: [2, 29] }, { 14: [2, 15], 15: [2, 15], 19: [2, 15], 29: [2, 15], 34: [2, 15], 39: [2, 15], 44: [2, 15], 47: [2, 15], 48: [2, 15], 51: [2, 15], 55: [2, 15], 60: [2, 15] }, { 72: [1, 137], 77: [1, 136] }, { 72: [2, 100], 77: [2, 100] }, { 14: [2, 16], 15: [2, 16], 19: [2, 16], 29: [2, 16], 34: [2, 16], 44: [2, 16], 47: [2, 16], 48: [2, 16], 51: [2, 16], 55: [2, 16], 60: [2, 16] }, { 33: [1, 138] }, { 33: [2, 75] }, { 33: [2, 32] }, { 72: [2, 101], 77: [2, 101] }, { 14: [2, 17], 15: [2, 17], 19: [2, 17], 29: [2, 17], 34: [2, 17], 39: [2, 17], 44: [2, 17], 47: [2, 17], 48: [2, 17], 51: [2, 17], 55: [2, 17], 60: [2, 17] }], defaultActions: { 4: [2, 1], 54: [2, 55], 56: [2, 20], 60: [2, 57], 73: [2, 81], 82: [2, 85], 86: [2, 18], 90: [2, 89], 101: [2, 53], 104: [2, 93], 110: [2, 19], 111: [2, 77], 116: [2, 97], 119: [2, 63], 122: [2, 69], 135: [2, 75], 136: [2, 32] }, parseError: function(i, s) {
      throw new Error(i);
    }, parse: function(i) {
      var s = this, o = [0], a = [null], u = [], l = this.table, h = "", c = 0, p = 0, f = 0, _ = 2, v = 1;
      this.lexer.setInput(i), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, typeof this.lexer.yylloc > "u" && (this.lexer.yylloc = {});
      var x = this.lexer.yylloc;
      u.push(x);
      var C = this.lexer.options && this.lexer.options.ranges;
      typeof this.yy.parseError == "function" && (this.parseError = this.yy.parseError);
      function z(F) {
        o.length = o.length - 2 * F, a.length = a.length - F, u.length = u.length - F;
      }
      function ie() {
        var F;
        return F = s.lexer.lex() || 1, typeof F != "number" && (F = s.symbols_[F] || F), F;
      }
      for (var P, se, oe, N, El, Qt, me = {}, Qe, V, Xr, Ye; ; ) {
        if (oe = o[o.length - 1], this.defaultActions[oe] ? N = this.defaultActions[oe] : ((P === null || typeof P > "u") && (P = ie()), N = l[oe] && l[oe][P]), typeof N > "u" || !N.length || !N[0]) {
          var Yt = "";
          if (!f) {
            Ye = [];
            for (Qe in l[oe])
              this.terminals_[Qe] && Qe > 2 && Ye.push("'" + this.terminals_[Qe] + "'");
            this.lexer.showPosition ? Yt = "Parse error on line " + (c + 1) + `:
` + this.lexer.showPosition() + `
Expecting ` + Ye.join(", ") + ", got '" + (this.terminals_[P] || P) + "'" : Yt = "Parse error on line " + (c + 1) + ": Unexpected " + (P == 1 ? "end of input" : "'" + (this.terminals_[P] || P) + "'"), this.parseError(Yt, { text: this.lexer.match, token: this.terminals_[P] || P, line: this.lexer.yylineno, loc: x, expected: Ye });
          }
        }
        if (N[0] instanceof Array && N.length > 1)
          throw new Error("Parse Error: multiple actions possible at state: " + oe + ", token: " + P);
        switch (N[0]) {
          case 1:
            o.push(P), a.push(this.lexer.yytext), u.push(this.lexer.yylloc), o.push(N[1]), P = null, se ? (P = se, se = null) : (p = this.lexer.yyleng, h = this.lexer.yytext, c = this.lexer.yylineno, x = this.lexer.yylloc, f > 0 && f--);
            break;
          case 2:
            if (V = this.productions_[N[1]][1], me.$ = a[a.length - V], me._$ = { first_line: u[u.length - (V || 1)].first_line, last_line: u[u.length - 1].last_line, first_column: u[u.length - (V || 1)].first_column, last_column: u[u.length - 1].last_column }, C && (me._$.range = [u[u.length - (V || 1)].range[0], u[u.length - 1].range[1]]), Qt = this.performAction.call(me, h, p, c, this.yy, N[1], a, u), typeof Qt < "u")
              return Qt;
            V && (o = o.slice(0, -1 * V * 2), a = a.slice(0, -1 * V), u = u.slice(0, -1 * V)), o.push(this.productions_[N[1]][0]), a.push(me.$), u.push(me._$), Xr = l[o[o.length - 2]][o[o.length - 1]], o.push(Xr);
            break;
          case 3:
            return true;
        }
      }
      return true;
    } }, e = function() {
      var r = { EOF: 1, parseError: function(s, o) {
        if (this.yy.parser)
          this.yy.parser.parseError(s, o);
        else
          throw new Error(s);
      }, setInput: function(s) {
        return this._input = s, this._more = this._less = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
      }, input: function() {
        var s = this._input[0];
        this.yytext += s, this.yyleng++, this.offset++, this.match += s, this.matched += s;
        var o = s.match(/(?:\r\n?|\n).*/g);
        return o ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), s;
      }, unput: function(s) {
        var o = s.length, a = s.split(/(?:\r\n?|\n)/g);
        this._input = s + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - o - 1), this.offset -= o;
        var u = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), a.length - 1 && (this.yylineno -= a.length - 1);
        var l = this.yylloc.range;
        return this.yylloc = { first_line: this.yylloc.first_line, last_line: this.yylineno + 1, first_column: this.yylloc.first_column, last_column: a ? (a.length === u.length ? this.yylloc.first_column : 0) + u[u.length - a.length].length - a[0].length : this.yylloc.first_column - o }, this.options.ranges && (this.yylloc.range = [l[0], l[0] + this.yyleng - o]), this;
      }, more: function() {
        return this._more = true, this;
      }, less: function(s) {
        this.unput(this.match.slice(s));
      }, pastInput: function() {
        var s = this.matched.substr(0, this.matched.length - this.match.length);
        return (s.length > 20 ? "..." : "") + s.substr(-20).replace(/\n/g, "");
      }, upcomingInput: function() {
        var s = this.match;
        return s.length < 20 && (s += this._input.substr(0, 20 - s.length)), (s.substr(0, 20) + (s.length > 20 ? "..." : "")).replace(/\n/g, "");
      }, showPosition: function() {
        var s = this.pastInput(), o = new Array(s.length + 1).join("-");
        return s + this.upcomingInput() + `
` + o + "^";
      }, next: function() {
        if (this.done)
          return this.EOF;
        this._input || (this.done = true);
        var s, o, a, u, l, h;
        this._more || (this.yytext = "", this.match = "");
        for (var c = this._currentRules(), p = 0; p < c.length && (a = this._input.match(this.rules[c[p]]), !(a && (!o || a[0].length > o[0].length) && (o = a, u = p, !this.options.flex))); p++)
          ;
        return o ? (h = o[0].match(/(?:\r\n?|\n).*/g), h && (this.yylineno += h.length), this.yylloc = { first_line: this.yylloc.last_line, last_line: this.yylineno + 1, first_column: this.yylloc.last_column, last_column: h ? h[h.length - 1].length - h[h.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + o[0].length }, this.yytext += o[0], this.match += o[0], this.matches = o, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = false, this._input = this._input.slice(o[0].length), this.matched += o[0], s = this.performAction.call(this, this.yy, this, c[u], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false), s || void 0) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), { text: "", token: null, line: this.yylineno });
      }, lex: function() {
        var s = this.next();
        return typeof s < "u" ? s : this.lex();
      }, begin: function(s) {
        this.conditionStack.push(s);
      }, popState: function() {
        return this.conditionStack.pop();
      }, _currentRules: function() {
        return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
      }, topState: function() {
        return this.conditionStack[this.conditionStack.length - 2];
      }, pushState: function(s) {
        this.begin(s);
      } };
      return r.options = {}, r.performAction = function(s, o, a, u) {
        function l(c, p) {
          return o.yytext = o.yytext.substring(c, o.yyleng - p + c);
        }
        var h = u;
        switch (a) {
          case 0:
            if (o.yytext.slice(-2) === "\\\\" ? (l(0, 1), this.begin("mu")) : o.yytext.slice(-1) === "\\" ? (l(0, 1), this.begin("emu")) : this.begin("mu"), o.yytext)
              return 15;
            break;
          case 1:
            return 15;
          case 2:
            return this.popState(), 15;
            break;
          case 3:
            return this.begin("raw"), 15;
            break;
          case 4:
            return this.popState(), this.conditionStack[this.conditionStack.length - 1] === "raw" ? 15 : (l(5, 9), "END_RAW_BLOCK");
          case 5:
            return 15;
          case 6:
            return this.popState(), 14;
            break;
          case 7:
            return 65;
          case 8:
            return 68;
          case 9:
            return 19;
          case 10:
            return this.popState(), this.begin("raw"), 23;
            break;
          case 11:
            return 55;
          case 12:
            return 60;
          case 13:
            return 29;
          case 14:
            return 47;
          case 15:
            return this.popState(), 44;
            break;
          case 16:
            return this.popState(), 44;
            break;
          case 17:
            return 34;
          case 18:
            return 39;
          case 19:
            return 51;
          case 20:
            return 48;
          case 21:
            this.unput(o.yytext), this.popState(), this.begin("com");
            break;
          case 22:
            return this.popState(), 14;
            break;
          case 23:
            return 48;
          case 24:
            return 73;
          case 25:
            return 72;
          case 26:
            return 72;
          case 27:
            return 87;
          case 28:
            break;
          case 29:
            return this.popState(), 54;
            break;
          case 30:
            return this.popState(), 33;
            break;
          case 31:
            return o.yytext = l(1, 2).replace(/\\"/g, '"'), 80;
            break;
          case 32:
            return o.yytext = l(1, 2).replace(/\\'/g, "'"), 80;
            break;
          case 33:
            return 85;
          case 34:
            return 82;
          case 35:
            return 82;
          case 36:
            return 83;
          case 37:
            return 84;
          case 38:
            return 81;
          case 39:
            return 75;
          case 40:
            return 77;
          case 41:
            return 72;
          case 42:
            return o.yytext = o.yytext.replace(/\\([\\\]])/g, "$1"), 72;
            break;
          case 43:
            return "INVALID";
          case 44:
            return 5;
        }
      }, r.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{(?=[^/]))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]+?(?=(\{\{\{\{)))/, /^(?:[\s\S]*?--(~)?\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#>)/, /^(?:\{\{(~)?#\*?)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{(~)?!--)/, /^(?:\{\{(~)?![\s\S]*?\}\})/, /^(?:\{\{(~)?\*?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)|])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:undefined(?=([~}\s)])))/, /^(?:null(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:as\s+\|)/, /^(?:\|)/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/, /^(?:\[(\\\]|[^\]])*\])/, /^(?:.)/, /^(?:$)/], r.conditions = { mu: { rules: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44], inclusive: false }, emu: { rules: [2], inclusive: false }, com: { rules: [6], inclusive: false }, raw: { rules: [3, 4, 5], inclusive: false }, INITIAL: { rules: [0, 1, 44], inclusive: true } }, r;
    }();
    n6.lexer = e;
    function t() {
      this.yy = {};
    }
    return t.prototype = n6, n6.Parser = t, new t();
  }();
  Pt.default = Qo;
  Jn.exports = Pt.default;
});
var At = y((Lt, $n) => {
  "use strict";
  Lt.__esModule = true;
  function Yo(n6) {
    return n6 && n6.__esModule ? n6 : { default: n6 };
  }
  var Xo = D(), xr = Yo(Xo);
  function Mt() {
    this.parents = [];
  }
  Mt.prototype = { constructor: Mt, mutating: false, acceptKey: function(e, t) {
    var r = this.accept(e[t]);
    if (this.mutating) {
      if (r && !Mt.prototype[r.type])
        throw new xr.default('Unexpected node type "' + r.type + '" found when accepting ' + t + " on " + e.type);
      e[t] = r;
    }
  }, acceptRequired: function(e, t) {
    if (this.acceptKey(e, t), !e[t])
      throw new xr.default(e.type + " requires " + t);
  }, acceptArray: function(e) {
    for (var t = 0, r = e.length; t < r; t++)
      this.acceptKey(e, t), e[t] || (e.splice(t, 1), t--, r--);
  }, accept: function(e) {
    if (e) {
      if (!this[e.type])
        throw new xr.default("Unknown type: " + e.type, e);
      this.current && this.parents.unshift(this.current), this.current = e;
      var t = this[e.type](e);
      if (this.current = this.parents.shift(), !this.mutating || t)
        return t;
      if (t !== false)
        return e;
    }
  }, Program: function(e) {
    this.acceptArray(e.body);
  }, MustacheStatement: Ot, Decorator: Ot, BlockStatement: Yn, DecoratorBlock: Yn, PartialStatement: Xn, PartialBlockStatement: function(e) {
    Xn.call(this, e), this.acceptKey(e, "program");
  }, ContentStatement: function() {
  }, CommentStatement: function() {
  }, SubExpression: Ot, PathExpression: function() {
  }, StringLiteral: function() {
  }, NumberLiteral: function() {
  }, BooleanLiteral: function() {
  }, UndefinedLiteral: function() {
  }, NullLiteral: function() {
  }, Hash: function(e) {
    this.acceptArray(e.pairs);
  }, HashPair: function(e) {
    this.acceptRequired(e, "value");
  } };
  function Ot(n6) {
    this.acceptRequired(n6, "path"), this.acceptArray(n6.params), this.acceptKey(n6, "hash");
  }
  function Yn(n6) {
    Ot.call(this, n6), this.acceptKey(n6, "program"), this.acceptKey(n6, "inverse");
  }
  function Xn(n6) {
    this.acceptRequired(n6, "name"), this.acceptArray(n6.params), this.acceptKey(n6, "hash");
  }
  Lt.default = Mt;
  $n.exports = Lt.default;
});
var ti = y((Tt, ei) => {
  "use strict";
  Tt.__esModule = true;
  function $o(n6) {
    return n6 && n6.__esModule ? n6 : { default: n6 };
  }
  var ea = At(), ta = $o(ea);
  function U() {
    var n6 = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0];
    this.options = n6;
  }
  U.prototype = new ta.default();
  U.prototype.Program = function(n6) {
    var e = !this.options.ignoreStandalone, t = !this.isRootSeen;
    this.isRootSeen = true;
    for (var r = n6.body, i = 0, s = r.length; i < s; i++) {
      var o = r[i], a = this.accept(o);
      if (a) {
        var u = Cr(r, i, t), l = Er(r, i, t), h = a.openStandalone && u, c = a.closeStandalone && l, p = a.inlineStandalone && u && l;
        a.close && ue(r, i, true), a.open && ne(r, i, true), e && p && (ue(r, i), ne(r, i) && o.type === "PartialStatement" && (o.indent = /([ \t]+$)/.exec(r[i - 1].original)[1])), e && h && (ue((o.program || o.inverse).body), ne(r, i)), e && c && (ue(r, i), ne((o.inverse || o.program).body));
      }
    }
    return n6;
  };
  U.prototype.BlockStatement = U.prototype.DecoratorBlock = U.prototype.PartialBlockStatement = function(n6) {
    this.accept(n6.program), this.accept(n6.inverse);
    var e = n6.program || n6.inverse, t = n6.program && n6.inverse, r = t, i = t;
    if (t && t.chained)
      for (r = t.body[0].program; i.chained; )
        i = i.body[i.body.length - 1].program;
    var s = { open: n6.openStrip.open, close: n6.closeStrip.close, openStandalone: Er(e.body), closeStandalone: Cr((r || e).body) };
    if (n6.openStrip.close && ue(e.body, null, true), t) {
      var o = n6.inverseStrip;
      o.open && ne(e.body, null, true), o.close && ue(r.body, null, true), n6.closeStrip.open && ne(i.body, null, true), !this.options.ignoreStandalone && Cr(e.body) && Er(r.body) && (ne(e.body), ue(r.body));
    } else
      n6.closeStrip.open && ne(e.body, null, true);
    return s;
  };
  U.prototype.Decorator = U.prototype.MustacheStatement = function(n6) {
    return n6.strip;
  };
  U.prototype.PartialStatement = U.prototype.CommentStatement = function(n6) {
    var e = n6.strip || {};
    return { inlineStandalone: true, open: e.open, close: e.close };
  };
  function Cr(n6, e, t) {
    e === void 0 && (e = n6.length);
    var r = n6[e - 1], i = n6[e - 2];
    if (!r)
      return t;
    if (r.type === "ContentStatement")
      return (i || !t ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(r.original);
  }
  function Er(n6, e, t) {
    e === void 0 && (e = -1);
    var r = n6[e + 1], i = n6[e + 2];
    if (!r)
      return t;
    if (r.type === "ContentStatement")
      return (i || !t ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(r.original);
  }
  function ue(n6, e, t) {
    var r = n6[e == null ? 0 : e + 1];
    if (!(!r || r.type !== "ContentStatement" || !t && r.rightStripped)) {
      var i = r.value;
      r.value = r.value.replace(t ? /^\s+/ : /^[ \t]*\r?\n?/, ""), r.rightStripped = r.value !== i;
    }
  }
  function ne(n6, e, t) {
    var r = n6[e == null ? n6.length - 1 : e - 1];
    if (!(!r || r.type !== "ContentStatement" || !t && r.leftStripped)) {
      var i = r.value;
      return r.value = r.value.replace(t ? /\s+$/ : /[ \t]+$/, ""), r.leftStripped = r.value !== i, r.leftStripped;
    }
  }
  Tt.default = U;
  ei.exports = Tt.default;
});
var ri = y((B) => {
  "use strict";
  B.__esModule = true;
  B.SourceLocation = ia;
  B.id = sa;
  B.stripFlags = oa;
  B.stripComment = aa;
  B.preparePath = la;
  B.prepareMustache = ua;
  B.prepareRawBlock = ca;
  B.prepareBlock = ha;
  B.prepareProgram = pa;
  B.preparePartialBlock = fa;
  function ra(n6) {
    return n6 && n6.__esModule ? n6 : { default: n6 };
  }
  var na = D(), Ir = ra(na);
  function Pr(n6, e) {
    if (e = e.path ? e.path.original : e, n6.path.original !== e) {
      var t = { loc: n6.path.loc };
      throw new Ir.default(n6.path.original + " doesn't match " + e, t);
    }
  }
  function ia(n6, e) {
    this.source = n6, this.start = { line: e.first_line, column: e.first_column }, this.end = { line: e.last_line, column: e.last_column };
  }
  function sa(n6) {
    return /^\[.*\]$/.test(n6) ? n6.substring(1, n6.length - 1) : n6;
  }
  function oa(n6, e) {
    return { open: n6.charAt(2) === "~", close: e.charAt(e.length - 3) === "~" };
  }
  function aa(n6) {
    return n6.replace(/^\{\{~?!-?-?/, "").replace(/-?-?~?\}\}$/, "");
  }
  function la(n6, e, t) {
    t = this.locInfo(t);
    for (var r = n6 ? "@" : "", i = [], s = 0, o = 0, a = e.length; o < a; o++) {
      var u = e[o].part, l = e[o].original !== u;
      if (r += (e[o].separator || "") + u, !l && (u === ".." || u === "." || u === "this")) {
        if (i.length > 0)
          throw new Ir.default("Invalid path: " + r, { loc: t });
        u === ".." && s++;
      } else
        i.push(u);
    }
    return { type: "PathExpression", data: n6, depth: s, parts: i, original: r, loc: t };
  }
  function ua(n6, e, t, r, i, s) {
    var o = r.charAt(3) || r.charAt(2), a = o !== "{" && o !== "&", u = /\*/.test(r);
    return { type: u ? "Decorator" : "MustacheStatement", path: n6, params: e, hash: t, escaped: a, strip: i, loc: this.locInfo(s) };
  }
  function ca(n6, e, t, r) {
    Pr(n6, t), r = this.locInfo(r);
    var i = { type: "Program", body: e, strip: {}, loc: r };
    return { type: "BlockStatement", path: n6.path, params: n6.params, hash: n6.hash, program: i, openStrip: {}, inverseStrip: {}, closeStrip: {}, loc: r };
  }
  function ha(n6, e, t, r, i, s) {
    r && r.path && Pr(n6, r);
    var o = /\*/.test(n6.open);
    e.blockParams = n6.blockParams;
    var a = void 0, u = void 0;
    if (t) {
      if (o)
        throw new Ir.default("Unexpected inverse block on decorator", t);
      t.chain && (t.program.body[0].closeStrip = r.strip), u = t.strip, a = t.program;
    }
    return i && (i = a, a = e, e = i), { type: o ? "DecoratorBlock" : "BlockStatement", path: n6.path, params: n6.params, hash: n6.hash, program: e, inverse: a, openStrip: n6.strip, inverseStrip: u, closeStrip: r && r.strip, loc: this.locInfo(s) };
  }
  function pa(n6, e) {
    if (!e && n6.length) {
      var t = n6[0].loc, r = n6[n6.length - 1].loc;
      t && r && (e = { source: t.source, start: { line: t.start.line, column: t.start.column }, end: { line: r.end.line, column: r.end.column } });
    }
    return { type: "Program", body: n6, strip: {}, loc: e };
  }
  function fa(n6, e, t, r) {
    return Pr(n6, t), { type: "PartialBlockStatement", name: n6.path, params: n6.params, hash: n6.hash, program: e, openStrip: n6.strip, closeStrip: t && t.strip, loc: this.locInfo(r) };
  }
});
var si = y((qe) => {
  "use strict";
  qe.__esModule = true;
  qe.parseWithoutProcessing = ii;
  qe.parse = Sa;
  function da(n6) {
    if (n6 && n6.__esModule)
      return n6;
    var e = {};
    if (n6 != null)
      for (var t in n6)
        Object.prototype.hasOwnProperty.call(n6, t) && (e[t] = n6[t]);
    return e.default = n6, e;
  }
  function ni(n6) {
    return n6 && n6.__esModule ? n6 : { default: n6 };
  }
  var ga = Qn(), Mr = ni(ga), ma = ti(), _a = ni(ma), ya = ri(), va = da(ya), ka = A();
  qe.parser = Mr.default;
  var Rt = {};
  ka.extend(Rt, va);
  function ii(n6, e) {
    if (n6.type === "Program")
      return n6;
    Mr.default.yy = Rt, Rt.locInfo = function(r) {
      return new Rt.SourceLocation(e && e.srcName, r);
    };
    var t = Mr.default.parse(n6);
    return t;
  }
  function Sa(n6, e) {
    var t = ii(n6, e), r = new _a.default(e);
    return r.accept(t);
  }
});
var ui = y((We) => {
  "use strict";
  We.__esModule = true;
  We.Compiler = Or;
  We.precompile = Ca;
  We.compile = Ea;
  function ai(n6) {
    return n6 && n6.__esModule ? n6 : { default: n6 };
  }
  var ba = D(), ze = ai(ba), Fe = A(), wa = wr(), He = ai(wa), xa = [].slice;
  function Or() {
  }
  Or.prototype = { compiler: Or, equals: function(e) {
    var t = this.opcodes.length;
    if (e.opcodes.length !== t)
      return false;
    for (var r = 0; r < t; r++) {
      var i = this.opcodes[r], s = e.opcodes[r];
      if (i.opcode !== s.opcode || !li(i.args, s.args))
        return false;
    }
    t = this.children.length;
    for (var r = 0; r < t; r++)
      if (!this.children[r].equals(e.children[r]))
        return false;
    return true;
  }, guid: 0, compile: function(e, t) {
    return this.sourceNode = [], this.opcodes = [], this.children = [], this.options = t, this.stringParams = t.stringParams, this.trackIds = t.trackIds, t.blockParams = t.blockParams || [], t.knownHelpers = Fe.extend(/* @__PURE__ */ Object.create(null), { helperMissing: true, blockHelperMissing: true, each: true, if: true, unless: true, with: true, log: true, lookup: true }, t.knownHelpers), this.accept(e);
  }, compileProgram: function(e) {
    var t = new this.compiler(), r = t.compile(e, this.options), i = this.guid++;
    return this.usePartial = this.usePartial || r.usePartial, this.children[i] = r, this.useDepths = this.useDepths || r.useDepths, i;
  }, accept: function(e) {
    if (!this[e.type])
      throw new ze.default("Unknown type: " + e.type, e);
    this.sourceNode.unshift(e);
    var t = this[e.type](e);
    return this.sourceNode.shift(), t;
  }, Program: function(e) {
    this.options.blockParams.unshift(e.blockParams);
    for (var t = e.body, r = t.length, i = 0; i < r; i++)
      this.accept(t[i]);
    return this.options.blockParams.shift(), this.isSimple = r === 1, this.blockParams = e.blockParams ? e.blockParams.length : 0, this;
  }, BlockStatement: function(e) {
    oi(e);
    var t = e.program, r = e.inverse;
    t = t && this.compileProgram(t), r = r && this.compileProgram(r);
    var i = this.classifySexpr(e);
    i === "helper" ? this.helperSexpr(e, t, r) : i === "simple" ? (this.simpleSexpr(e), this.opcode("pushProgram", t), this.opcode("pushProgram", r), this.opcode("emptyHash"), this.opcode("blockValue", e.path.original)) : (this.ambiguousSexpr(e, t, r), this.opcode("pushProgram", t), this.opcode("pushProgram", r), this.opcode("emptyHash"), this.opcode("ambiguousBlockValue")), this.opcode("append");
  }, DecoratorBlock: function(e) {
    var t = e.program && this.compileProgram(e.program), r = this.setupFullMustacheParams(e, t, void 0), i = e.path;
    this.useDecorators = true, this.opcode("registerDecorator", r.length, i.original);
  }, PartialStatement: function(e) {
    this.usePartial = true;
    var t = e.program;
    t && (t = this.compileProgram(e.program));
    var r = e.params;
    if (r.length > 1)
      throw new ze.default("Unsupported number of partial arguments: " + r.length, e);
    r.length || (this.options.explicitPartialContext ? this.opcode("pushLiteral", "undefined") : r.push({ type: "PathExpression", parts: [], depth: 0 }));
    var i = e.name.original, s = e.name.type === "SubExpression";
    s && this.accept(e.name), this.setupFullMustacheParams(e, t, void 0, true);
    var o = e.indent || "";
    this.options.preventIndent && o && (this.opcode("appendContent", o), o = ""), this.opcode("invokePartial", s, i, o), this.opcode("append");
  }, PartialBlockStatement: function(e) {
    this.PartialStatement(e);
  }, MustacheStatement: function(e) {
    this.SubExpression(e), e.escaped && !this.options.noEscape ? this.opcode("appendEscaped") : this.opcode("append");
  }, Decorator: function(e) {
    this.DecoratorBlock(e);
  }, ContentStatement: function(e) {
    e.value && this.opcode("appendContent", e.value);
  }, CommentStatement: function() {
  }, SubExpression: function(e) {
    oi(e);
    var t = this.classifySexpr(e);
    t === "simple" ? this.simpleSexpr(e) : t === "helper" ? this.helperSexpr(e) : this.ambiguousSexpr(e);
  }, ambiguousSexpr: function(e, t, r) {
    var i = e.path, s = i.parts[0], o = t != null || r != null;
    this.opcode("getContext", i.depth), this.opcode("pushProgram", t), this.opcode("pushProgram", r), i.strict = true, this.accept(i), this.opcode("invokeAmbiguous", s, o);
  }, simpleSexpr: function(e) {
    var t = e.path;
    t.strict = true, this.accept(t), this.opcode("resolvePossibleLambda");
  }, helperSexpr: function(e, t, r) {
    var i = this.setupFullMustacheParams(e, t, r), s = e.path, o = s.parts[0];
    if (this.options.knownHelpers[o])
      this.opcode("invokeKnownHelper", i.length, o);
    else {
      if (this.options.knownHelpersOnly)
        throw new ze.default("You specified knownHelpersOnly, but used the unknown helper " + o, e);
      s.strict = true, s.falsy = true, this.accept(s), this.opcode("invokeHelper", i.length, s.original, He.default.helpers.simpleId(s));
    }
  }, PathExpression: function(e) {
    this.addDepth(e.depth), this.opcode("getContext", e.depth);
    var t = e.parts[0], r = He.default.helpers.scopedId(e), i = !e.depth && !r && this.blockParamIndex(t);
    i ? this.opcode("lookupBlockParam", i, e.parts) : t ? e.data ? (this.options.data = true, this.opcode("lookupData", e.depth, e.parts, e.strict)) : this.opcode("lookupOnContext", e.parts, e.falsy, e.strict, r) : this.opcode("pushContext");
  }, StringLiteral: function(e) {
    this.opcode("pushString", e.value);
  }, NumberLiteral: function(e) {
    this.opcode("pushLiteral", e.value);
  }, BooleanLiteral: function(e) {
    this.opcode("pushLiteral", e.value);
  }, UndefinedLiteral: function() {
    this.opcode("pushLiteral", "undefined");
  }, NullLiteral: function() {
    this.opcode("pushLiteral", "null");
  }, Hash: function(e) {
    var t = e.pairs, r = 0, i = t.length;
    for (this.opcode("pushHash"); r < i; r++)
      this.pushParam(t[r].value);
    for (; r--; )
      this.opcode("assignToHash", t[r].key);
    this.opcode("popHash");
  }, opcode: function(e) {
    this.opcodes.push({ opcode: e, args: xa.call(arguments, 1), loc: this.sourceNode[0].loc });
  }, addDepth: function(e) {
    e && (this.useDepths = true);
  }, classifySexpr: function(e) {
    var t = He.default.helpers.simpleId(e.path), r = t && !!this.blockParamIndex(e.path.parts[0]), i = !r && He.default.helpers.helperExpression(e), s = !r && (i || t);
    if (s && !i) {
      var o = e.path.parts[0], a = this.options;
      a.knownHelpers[o] ? i = true : a.knownHelpersOnly && (s = false);
    }
    return i ? "helper" : s ? "ambiguous" : "simple";
  }, pushParams: function(e) {
    for (var t = 0, r = e.length; t < r; t++)
      this.pushParam(e[t]);
  }, pushParam: function(e) {
    var t = e.value != null ? e.value : e.original || "";
    if (this.stringParams)
      t.replace && (t = t.replace(/^(\.?\.\/)*/g, "").replace(/\//g, ".")), e.depth && this.addDepth(e.depth), this.opcode("getContext", e.depth || 0), this.opcode("pushStringParam", t, e.type), e.type === "SubExpression" && this.accept(e);
    else {
      if (this.trackIds) {
        var r = void 0;
        if (e.parts && !He.default.helpers.scopedId(e) && !e.depth && (r = this.blockParamIndex(e.parts[0])), r) {
          var i = e.parts.slice(1).join(".");
          this.opcode("pushId", "BlockParam", r, i);
        } else
          t = e.original || t, t.replace && (t = t.replace(/^this(?:\.|$)/, "").replace(/^\.\//, "").replace(/^\.$/, "")), this.opcode("pushId", e.type, t);
      }
      this.accept(e);
    }
  }, setupFullMustacheParams: function(e, t, r, i) {
    var s = e.params;
    return this.pushParams(s), this.opcode("pushProgram", t), this.opcode("pushProgram", r), e.hash ? this.accept(e.hash) : this.opcode("emptyHash", i), s;
  }, blockParamIndex: function(e) {
    for (var t = 0, r = this.options.blockParams.length; t < r; t++) {
      var i = this.options.blockParams[t], s = i && Fe.indexOf(i, e);
      if (i && s >= 0)
        return [t, s];
    }
  } };
  function Ca(n6, e, t) {
    if (n6 == null || typeof n6 != "string" && n6.type !== "Program")
      throw new ze.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + n6);
    e = e || {}, "data" in e || (e.data = true), e.compat && (e.useDepths = true);
    var r = t.parse(n6, e), i = new t.Compiler().compile(r, e);
    return new t.JavaScriptCompiler().compile(i, e);
  }
  function Ea(n6, e, t) {
    if (e === void 0 && (e = {}), n6 == null || typeof n6 != "string" && n6.type !== "Program")
      throw new ze.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + n6);
    e = Fe.extend({}, e), "data" in e || (e.data = true), e.compat && (e.useDepths = true);
    var r = void 0;
    function i() {
      var o = t.parse(n6, e), a = new t.Compiler().compile(o, e), u = new t.JavaScriptCompiler().compile(a, e, void 0, true);
      return t.template(u);
    }
    function s(o, a) {
      return r || (r = i()), r.call(this, o, a);
    }
    return s._setup = function(o) {
      return r || (r = i()), r._setup(o);
    }, s._child = function(o, a, u, l) {
      return r || (r = i()), r._child(o, a, u, l);
    }, s;
  }
  function li(n6, e) {
    if (n6 === e)
      return true;
    if (Fe.isArray(n6) && Fe.isArray(e) && n6.length === e.length) {
      for (var t = 0; t < n6.length; t++)
        if (!li(n6[t], e[t]))
          return false;
      return true;
    }
  }
  function oi(n6) {
    if (!n6.path.parts) {
      var e = n6.path;
      n6.path = { type: "PathExpression", data: false, depth: 0, parts: [e.original + ""], original: e.original + "", loc: e.loc };
    }
  }
});
var hi = y((Lr) => {
  "use strict";
  var ci = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
  Lr.encode = function(n6) {
    if (0 <= n6 && n6 < ci.length)
      return ci[n6];
    throw new TypeError("Must be between 0 and 63: " + n6);
  };
  Lr.decode = function(n6) {
    var e = 65, t = 90, r = 97, i = 122, s = 48, o = 57, a = 43, u = 47, l = 26, h = 52;
    return e <= n6 && n6 <= t ? n6 - e : r <= n6 && n6 <= i ? n6 - r + l : s <= n6 && n6 <= o ? n6 - s + h : n6 == a ? 62 : n6 == u ? 63 : -1;
  };
});
var Rr = y((Tr) => {
  "use strict";
  var pi = hi(), Ar = 5, fi = 1 << Ar, di = fi - 1, gi = fi;
  function Ia(n6) {
    return n6 < 0 ? (-n6 << 1) + 1 : (n6 << 1) + 0;
  }
  function Pa(n6) {
    var e = (n6 & 1) === 1, t = n6 >> 1;
    return e ? -t : t;
  }
  Tr.encode = function(e) {
    var t = "", r, i = Ia(e);
    do
      r = i & di, i >>>= Ar, i > 0 && (r |= gi), t += pi.encode(r);
    while (i > 0);
    return t;
  };
  Tr.decode = function(e, t, r) {
    var i = e.length, s = 0, o = 0, a, u;
    do {
      if (t >= i)
        throw new Error("Expected more digits in base 64 VLQ value.");
      if (u = pi.decode(e.charCodeAt(t++)), u === -1)
        throw new Error("Invalid base64 digit: " + e.charAt(t - 1));
      a = !!(u & gi), u &= di, s = s + (u << o), o += Ar;
    } while (a);
    r.value = Pa(s), r.rest = t;
  };
});
var xe = y((O) => {
  "use strict";
  function Ma(n6, e, t) {
    if (e in n6)
      return n6[e];
    if (arguments.length === 3)
      return t;
    throw new Error('"' + e + '" is a required argument.');
  }
  O.getArg = Ma;
  var mi = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/, Oa = /^data:.+\,.+$/;
  function Ge(n6) {
    var e = n6.match(mi);
    return e ? { scheme: e[1], auth: e[2], host: e[3], port: e[4], path: e[5] } : null;
  }
  O.urlParse = Ge;
  function be(n6) {
    var e = "";
    return n6.scheme && (e += n6.scheme + ":"), e += "//", n6.auth && (e += n6.auth + "@"), n6.host && (e += n6.host), n6.port && (e += ":" + n6.port), n6.path && (e += n6.path), e;
  }
  O.urlGenerate = be;
  function Nr(n6) {
    var e = n6, t = Ge(n6);
    if (t) {
      if (!t.path)
        return n6;
      e = t.path;
    }
    for (var r = O.isAbsolute(e), i = e.split(/\/+/), s, o = 0, a = i.length - 1; a >= 0; a--)
      s = i[a], s === "." ? i.splice(a, 1) : s === ".." ? o++ : o > 0 && (s === "" ? (i.splice(a + 1, o), o = 0) : (i.splice(a, 2), o--));
    return e = i.join("/"), e === "" && (e = r ? "/" : "."), t ? (t.path = e, be(t)) : e;
  }
  O.normalize = Nr;
  function _i(n6, e) {
    n6 === "" && (n6 = "."), e === "" && (e = ".");
    var t = Ge(e), r = Ge(n6);
    if (r && (n6 = r.path || "/"), t && !t.scheme)
      return r && (t.scheme = r.scheme), be(t);
    if (t || e.match(Oa))
      return e;
    if (r && !r.host && !r.path)
      return r.host = e, be(r);
    var i = e.charAt(0) === "/" ? e : Nr(n6.replace(/\/+$/, "") + "/" + e);
    return r ? (r.path = i, be(r)) : i;
  }
  O.join = _i;
  O.isAbsolute = function(n6) {
    return n6.charAt(0) === "/" || mi.test(n6);
  };
  function La(n6, e) {
    n6 === "" && (n6 = "."), n6 = n6.replace(/\/$/, "");
    for (var t = 0; e.indexOf(n6 + "/") !== 0; ) {
      var r = n6.lastIndexOf("/");
      if (r < 0 || (n6 = n6.slice(0, r), n6.match(/^([^\/]+:\/)?\/*$/)))
        return e;
      ++t;
    }
    return Array(t + 1).join("../") + e.substr(n6.length + 1);
  }
  O.relative = La;
  var yi = function() {
    var n6 = /* @__PURE__ */ Object.create(null);
    return !("__proto__" in n6);
  }();
  function vi(n6) {
    return n6;
  }
  function Aa(n6) {
    return ki(n6) ? "$" + n6 : n6;
  }
  O.toSetString = yi ? vi : Aa;
  function Ta(n6) {
    return ki(n6) ? n6.slice(1) : n6;
  }
  O.fromSetString = yi ? vi : Ta;
  function ki(n6) {
    if (!n6)
      return false;
    var e = n6.length;
    if (e < 9 || n6.charCodeAt(e - 1) !== 95 || n6.charCodeAt(e - 2) !== 95 || n6.charCodeAt(e - 3) !== 111 || n6.charCodeAt(e - 4) !== 116 || n6.charCodeAt(e - 5) !== 111 || n6.charCodeAt(e - 6) !== 114 || n6.charCodeAt(e - 7) !== 112 || n6.charCodeAt(e - 8) !== 95 || n6.charCodeAt(e - 9) !== 95)
      return false;
    for (var t = e - 10; t >= 0; t--)
      if (n6.charCodeAt(t) !== 36)
        return false;
    return true;
  }
  function Ra(n6, e, t) {
    var r = we(n6.source, e.source);
    return r !== 0 || (r = n6.originalLine - e.originalLine, r !== 0) || (r = n6.originalColumn - e.originalColumn, r !== 0 || t) || (r = n6.generatedColumn - e.generatedColumn, r !== 0) || (r = n6.generatedLine - e.generatedLine, r !== 0) ? r : we(n6.name, e.name);
  }
  O.compareByOriginalPositions = Ra;
  function Na(n6, e, t) {
    var r = n6.generatedLine - e.generatedLine;
    return r !== 0 || (r = n6.generatedColumn - e.generatedColumn, r !== 0 || t) || (r = we(n6.source, e.source), r !== 0) || (r = n6.originalLine - e.originalLine, r !== 0) || (r = n6.originalColumn - e.originalColumn, r !== 0) ? r : we(n6.name, e.name);
  }
  O.compareByGeneratedPositionsDeflated = Na;
  function we(n6, e) {
    return n6 === e ? 0 : n6 === null ? 1 : e === null ? -1 : n6 > e ? 1 : -1;
  }
  function Da(n6, e) {
    var t = n6.generatedLine - e.generatedLine;
    return t !== 0 || (t = n6.generatedColumn - e.generatedColumn, t !== 0) || (t = we(n6.source, e.source), t !== 0) || (t = n6.originalLine - e.originalLine, t !== 0) || (t = n6.originalColumn - e.originalColumn, t !== 0) ? t : we(n6.name, e.name);
  }
  O.compareByGeneratedPositionsInflated = Da;
  function Ba(n6) {
    return JSON.parse(n6.replace(/^\)]}'[^\n]*\n/, ""));
  }
  O.parseSourceMapInput = Ba;
  function qa(n6, e, t) {
    if (e = e || "", n6 && (n6[n6.length - 1] !== "/" && e[0] !== "/" && (n6 += "/"), e = n6 + e), t) {
      var r = Ge(t);
      if (!r)
        throw new Error("sourceMapURL could not be parsed");
      if (r.path) {
        var i = r.path.lastIndexOf("/");
        i >= 0 && (r.path = r.path.substring(0, i + 1));
      }
      e = _i(be(r), e);
    }
    return Nr(e);
  }
  O.computeSourceURL = qa;
});
var qr = y((Si) => {
  "use strict";
  var Dr = xe(), Br = Object.prototype.hasOwnProperty, ce = typeof Map < "u";
  function Q() {
    this._array = [], this._set = ce ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null);
  }
  Q.fromArray = function(e, t) {
    for (var r = new Q(), i = 0, s = e.length; i < s; i++)
      r.add(e[i], t);
    return r;
  };
  Q.prototype.size = function() {
    return ce ? this._set.size : Object.getOwnPropertyNames(this._set).length;
  };
  Q.prototype.add = function(e, t) {
    var r = ce ? e : Dr.toSetString(e), i = ce ? this.has(e) : Br.call(this._set, r), s = this._array.length;
    (!i || t) && this._array.push(e), i || (ce ? this._set.set(e, s) : this._set[r] = s);
  };
  Q.prototype.has = function(e) {
    if (ce)
      return this._set.has(e);
    var t = Dr.toSetString(e);
    return Br.call(this._set, t);
  };
  Q.prototype.indexOf = function(e) {
    if (ce) {
      var t = this._set.get(e);
      if (t >= 0)
        return t;
    } else {
      var r = Dr.toSetString(e);
      if (Br.call(this._set, r))
        return this._set[r];
    }
    throw new Error('"' + e + '" is not in the set.');
  };
  Q.prototype.at = function(e) {
    if (e >= 0 && e < this._array.length)
      return this._array[e];
    throw new Error("No element indexed by " + e);
  };
  Q.prototype.toArray = function() {
    return this._array.slice();
  };
  Si.ArraySet = Q;
});
var xi = y((wi) => {
  "use strict";
  var bi = xe();
  function Ha(n6, e) {
    var t = n6.generatedLine, r = e.generatedLine, i = n6.generatedColumn, s = e.generatedColumn;
    return r > t || r == t && s >= i || bi.compareByGeneratedPositionsInflated(n6, e) <= 0;
  }
  function Nt() {
    this._array = [], this._sorted = true, this._last = { generatedLine: -1, generatedColumn: 0 };
  }
  Nt.prototype.unsortedForEach = function(e, t) {
    this._array.forEach(e, t);
  };
  Nt.prototype.add = function(e) {
    Ha(this._last, e) ? (this._last = e, this._array.push(e)) : (this._sorted = false, this._array.push(e));
  };
  Nt.prototype.toArray = function() {
    return this._sorted || (this._array.sort(bi.compareByGeneratedPositionsInflated), this._sorted = true), this._array;
  };
  wi.MappingList = Nt;
});
var Hr = y((Ci) => {
  "use strict";
  var Ue = Rr(), I = xe(), Dt = qr().ArraySet, za = xi().MappingList;
  function q(n6) {
    n6 || (n6 = {}), this._file = I.getArg(n6, "file", null), this._sourceRoot = I.getArg(n6, "sourceRoot", null), this._skipValidation = I.getArg(n6, "skipValidation", false), this._sources = new Dt(), this._names = new Dt(), this._mappings = new za(), this._sourcesContents = null;
  }
  q.prototype._version = 3;
  q.fromSourceMap = function(e) {
    var t = e.sourceRoot, r = new q({ file: e.file, sourceRoot: t });
    return e.eachMapping(function(i) {
      var s = { generated: { line: i.generatedLine, column: i.generatedColumn } };
      i.source != null && (s.source = i.source, t != null && (s.source = I.relative(t, s.source)), s.original = { line: i.originalLine, column: i.originalColumn }, i.name != null && (s.name = i.name)), r.addMapping(s);
    }), e.sources.forEach(function(i) {
      var s = i;
      t !== null && (s = I.relative(t, i)), r._sources.has(s) || r._sources.add(s);
      var o = e.sourceContentFor(i);
      o != null && r.setSourceContent(i, o);
    }), r;
  };
  q.prototype.addMapping = function(e) {
    var t = I.getArg(e, "generated"), r = I.getArg(e, "original", null), i = I.getArg(e, "source", null), s = I.getArg(e, "name", null);
    this._skipValidation || this._validateMapping(t, r, i, s), i != null && (i = String(i), this._sources.has(i) || this._sources.add(i)), s != null && (s = String(s), this._names.has(s) || this._names.add(s)), this._mappings.add({ generatedLine: t.line, generatedColumn: t.column, originalLine: r != null && r.line, originalColumn: r != null && r.column, source: i, name: s });
  };
  q.prototype.setSourceContent = function(e, t) {
    var r = e;
    this._sourceRoot != null && (r = I.relative(this._sourceRoot, r)), t != null ? (this._sourcesContents || (this._sourcesContents = /* @__PURE__ */ Object.create(null)), this._sourcesContents[I.toSetString(r)] = t) : this._sourcesContents && (delete this._sourcesContents[I.toSetString(r)], Object.keys(this._sourcesContents).length === 0 && (this._sourcesContents = null));
  };
  q.prototype.applySourceMap = function(e, t, r) {
    var i = t;
    if (t == null) {
      if (e.file == null)
        throw new Error(`SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`);
      i = e.file;
    }
    var s = this._sourceRoot;
    s != null && (i = I.relative(s, i));
    var o = new Dt(), a = new Dt();
    this._mappings.unsortedForEach(function(u) {
      if (u.source === i && u.originalLine != null) {
        var l = e.originalPositionFor({ line: u.originalLine, column: u.originalColumn });
        l.source != null && (u.source = l.source, r != null && (u.source = I.join(r, u.source)), s != null && (u.source = I.relative(s, u.source)), u.originalLine = l.line, u.originalColumn = l.column, l.name != null && (u.name = l.name));
      }
      var h = u.source;
      h != null && !o.has(h) && o.add(h);
      var c = u.name;
      c != null && !a.has(c) && a.add(c);
    }, this), this._sources = o, this._names = a, e.sources.forEach(function(u) {
      var l = e.sourceContentFor(u);
      l != null && (r != null && (u = I.join(r, u)), s != null && (u = I.relative(s, u)), this.setSourceContent(u, l));
    }, this);
  };
  q.prototype._validateMapping = function(e, t, r, i) {
    if (t && typeof t.line != "number" && typeof t.column != "number")
      throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");
    if (!(e && "line" in e && "column" in e && e.line > 0 && e.column >= 0 && !t && !r && !i)) {
      if (e && "line" in e && "column" in e && t && "line" in t && "column" in t && e.line > 0 && e.column >= 0 && t.line > 0 && t.column >= 0 && r)
        return;
      throw new Error("Invalid mapping: " + JSON.stringify({ generated: e, source: r, original: t, name: i }));
    }
  };
  q.prototype._serializeMappings = function() {
    for (var e = 0, t = 1, r = 0, i = 0, s = 0, o = 0, a = "", u, l, h, c, p = this._mappings.toArray(), f = 0, _ = p.length; f < _; f++) {
      if (l = p[f], u = "", l.generatedLine !== t)
        for (e = 0; l.generatedLine !== t; )
          u += ";", t++;
      else if (f > 0) {
        if (!I.compareByGeneratedPositionsInflated(l, p[f - 1]))
          continue;
        u += ",";
      }
      u += Ue.encode(l.generatedColumn - e), e = l.generatedColumn, l.source != null && (c = this._sources.indexOf(l.source), u += Ue.encode(c - o), o = c, u += Ue.encode(l.originalLine - 1 - i), i = l.originalLine - 1, u += Ue.encode(l.originalColumn - r), r = l.originalColumn, l.name != null && (h = this._names.indexOf(l.name), u += Ue.encode(h - s), s = h)), a += u;
    }
    return a;
  };
  q.prototype._generateSourcesContent = function(e, t) {
    return e.map(function(r) {
      if (!this._sourcesContents)
        return null;
      t != null && (r = I.relative(t, r));
      var i = I.toSetString(r);
      return Object.prototype.hasOwnProperty.call(this._sourcesContents, i) ? this._sourcesContents[i] : null;
    }, this);
  };
  q.prototype.toJSON = function() {
    var e = { version: this._version, sources: this._sources.toArray(), names: this._names.toArray(), mappings: this._serializeMappings() };
    return this._file != null && (e.file = this._file), this._sourceRoot != null && (e.sourceRoot = this._sourceRoot), this._sourcesContents && (e.sourcesContent = this._generateSourcesContent(e.sources, e.sourceRoot)), e;
  };
  q.prototype.toString = function() {
    return JSON.stringify(this.toJSON());
  };
  Ci.SourceMapGenerator = q;
});
var Ei = y((he) => {
  "use strict";
  he.GREATEST_LOWER_BOUND = 1;
  he.LEAST_UPPER_BOUND = 2;
  function zr(n6, e, t, r, i, s) {
    var o = Math.floor((e - n6) / 2) + n6, a = i(t, r[o], true);
    return a === 0 ? o : a > 0 ? e - o > 1 ? zr(o, e, t, r, i, s) : s == he.LEAST_UPPER_BOUND ? e < r.length ? e : -1 : o : o - n6 > 1 ? zr(n6, o, t, r, i, s) : s == he.LEAST_UPPER_BOUND ? o : n6 < 0 ? -1 : n6;
  }
  he.search = function(e, t, r, i) {
    if (t.length === 0)
      return -1;
    var s = zr(-1, t.length, e, t, r, i || he.GREATEST_LOWER_BOUND);
    if (s < 0)
      return -1;
    for (; s - 1 >= 0 && r(t[s], t[s - 1], true) === 0; )
      --s;
    return s;
  };
});
var Pi = y((Ii) => {
  "use strict";
  function Fr(n6, e, t) {
    var r = n6[e];
    n6[e] = n6[t], n6[t] = r;
  }
  function Fa(n6, e) {
    return Math.round(n6 + Math.random() * (e - n6));
  }
  function Wr(n6, e, t, r) {
    if (t < r) {
      var i = Fa(t, r), s = t - 1;
      Fr(n6, i, r);
      for (var o = n6[r], a = t; a < r; a++)
        e(n6[a], o) <= 0 && (s += 1, Fr(n6, s, a));
      Fr(n6, s + 1, a);
      var u = s + 1;
      Wr(n6, e, t, u - 1), Wr(n6, e, u + 1, r);
    }
  }
  Ii.quickSort = function(n6, e) {
    Wr(n6, e, 0, n6.length - 1);
  };
});
var Oi = y((Bt) => {
  "use strict";
  var g = xe(), Gr = Ei(), Ce = qr().ArraySet, Wa = Rr(), Ve = Pi().quickSort;
  function w(n6, e) {
    var t = n6;
    return typeof n6 == "string" && (t = g.parseSourceMapInput(n6)), t.sections != null ? new H(t, e) : new M(t, e);
  }
  w.fromSourceMap = function(n6, e) {
    return M.fromSourceMap(n6, e);
  };
  w.prototype._version = 3;
  w.prototype.__generatedMappings = null;
  Object.defineProperty(w.prototype, "_generatedMappings", { configurable: true, enumerable: true, get: function() {
    return this.__generatedMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__generatedMappings;
  } });
  w.prototype.__originalMappings = null;
  Object.defineProperty(w.prototype, "_originalMappings", { configurable: true, enumerable: true, get: function() {
    return this.__originalMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__originalMappings;
  } });
  w.prototype._charIsMappingSeparator = function(e, t) {
    var r = e.charAt(t);
    return r === ";" || r === ",";
  };
  w.prototype._parseMappings = function(e, t) {
    throw new Error("Subclasses must implement _parseMappings");
  };
  w.GENERATED_ORDER = 1;
  w.ORIGINAL_ORDER = 2;
  w.GREATEST_LOWER_BOUND = 1;
  w.LEAST_UPPER_BOUND = 2;
  w.prototype.eachMapping = function(e, t, r) {
    var i = t || null, s = r || w.GENERATED_ORDER, o;
    switch (s) {
      case w.GENERATED_ORDER:
        o = this._generatedMappings;
        break;
      case w.ORIGINAL_ORDER:
        o = this._originalMappings;
        break;
      default:
        throw new Error("Unknown order of iteration.");
    }
    var a = this.sourceRoot;
    o.map(function(u) {
      var l = u.source === null ? null : this._sources.at(u.source);
      return l = g.computeSourceURL(a, l, this._sourceMapURL), { source: l, generatedLine: u.generatedLine, generatedColumn: u.generatedColumn, originalLine: u.originalLine, originalColumn: u.originalColumn, name: u.name === null ? null : this._names.at(u.name) };
    }, this).forEach(e, i);
  };
  w.prototype.allGeneratedPositionsFor = function(e) {
    var t = g.getArg(e, "line"), r = { source: g.getArg(e, "source"), originalLine: t, originalColumn: g.getArg(e, "column", 0) };
    if (r.source = this._findSourceIndex(r.source), r.source < 0)
      return [];
    var i = [], s = this._findMapping(r, this._originalMappings, "originalLine", "originalColumn", g.compareByOriginalPositions, Gr.LEAST_UPPER_BOUND);
    if (s >= 0) {
      var o = this._originalMappings[s];
      if (e.column === void 0)
        for (var a = o.originalLine; o && o.originalLine === a; )
          i.push({ line: g.getArg(o, "generatedLine", null), column: g.getArg(o, "generatedColumn", null), lastColumn: g.getArg(o, "lastGeneratedColumn", null) }), o = this._originalMappings[++s];
      else
        for (var u = o.originalColumn; o && o.originalLine === t && o.originalColumn == u; )
          i.push({ line: g.getArg(o, "generatedLine", null), column: g.getArg(o, "generatedColumn", null), lastColumn: g.getArg(o, "lastGeneratedColumn", null) }), o = this._originalMappings[++s];
    }
    return i;
  };
  Bt.SourceMapConsumer = w;
  function M(n6, e) {
    var t = n6;
    typeof n6 == "string" && (t = g.parseSourceMapInput(n6));
    var r = g.getArg(t, "version"), i = g.getArg(t, "sources"), s = g.getArg(t, "names", []), o = g.getArg(t, "sourceRoot", null), a = g.getArg(t, "sourcesContent", null), u = g.getArg(t, "mappings"), l = g.getArg(t, "file", null);
    if (r != this._version)
      throw new Error("Unsupported version: " + r);
    o && (o = g.normalize(o)), i = i.map(String).map(g.normalize).map(function(h) {
      return o && g.isAbsolute(o) && g.isAbsolute(h) ? g.relative(o, h) : h;
    }), this._names = Ce.fromArray(s.map(String), true), this._sources = Ce.fromArray(i, true), this._absoluteSources = this._sources.toArray().map(function(h) {
      return g.computeSourceURL(o, h, e);
    }), this.sourceRoot = o, this.sourcesContent = a, this._mappings = u, this._sourceMapURL = e, this.file = l;
  }
  M.prototype = Object.create(w.prototype);
  M.prototype.consumer = w;
  M.prototype._findSourceIndex = function(n6) {
    var e = n6;
    if (this.sourceRoot != null && (e = g.relative(this.sourceRoot, e)), this._sources.has(e))
      return this._sources.indexOf(e);
    var t;
    for (t = 0; t < this._absoluteSources.length; ++t)
      if (this._absoluteSources[t] == n6)
        return t;
    return -1;
  };
  M.fromSourceMap = function(e, t) {
    var r = Object.create(M.prototype), i = r._names = Ce.fromArray(e._names.toArray(), true), s = r._sources = Ce.fromArray(e._sources.toArray(), true);
    r.sourceRoot = e._sourceRoot, r.sourcesContent = e._generateSourcesContent(r._sources.toArray(), r.sourceRoot), r.file = e._file, r._sourceMapURL = t, r._absoluteSources = r._sources.toArray().map(function(f) {
      return g.computeSourceURL(r.sourceRoot, f, t);
    });
    for (var o = e._mappings.toArray().slice(), a = r.__generatedMappings = [], u = r.__originalMappings = [], l = 0, h = o.length; l < h; l++) {
      var c = o[l], p = new Mi();
      p.generatedLine = c.generatedLine, p.generatedColumn = c.generatedColumn, c.source && (p.source = s.indexOf(c.source), p.originalLine = c.originalLine, p.originalColumn = c.originalColumn, c.name && (p.name = i.indexOf(c.name)), u.push(p)), a.push(p);
    }
    return Ve(r.__originalMappings, g.compareByOriginalPositions), r;
  };
  M.prototype._version = 3;
  Object.defineProperty(M.prototype, "sources", { get: function() {
    return this._absoluteSources.slice();
  } });
  function Mi() {
    this.generatedLine = 0, this.generatedColumn = 0, this.source = null, this.originalLine = null, this.originalColumn = null, this.name = null;
  }
  M.prototype._parseMappings = function(e, t) {
    for (var r = 1, i = 0, s = 0, o = 0, a = 0, u = 0, l = e.length, h = 0, c = {}, p = {}, f = [], _ = [], v, x, C, z, ie; h < l; )
      if (e.charAt(h) === ";")
        r++, h++, i = 0;
      else if (e.charAt(h) === ",")
        h++;
      else {
        for (v = new Mi(), v.generatedLine = r, z = h; z < l && !this._charIsMappingSeparator(e, z); z++)
          ;
        if (x = e.slice(h, z), C = c[x], C)
          h += x.length;
        else {
          for (C = []; h < z; )
            Wa.decode(e, h, p), ie = p.value, h = p.rest, C.push(ie);
          if (C.length === 2)
            throw new Error("Found a source, but no line and column");
          if (C.length === 3)
            throw new Error("Found a source and line, but no column");
          c[x] = C;
        }
        v.generatedColumn = i + C[0], i = v.generatedColumn, C.length > 1 && (v.source = a + C[1], a += C[1], v.originalLine = s + C[2], s = v.originalLine, v.originalLine += 1, v.originalColumn = o + C[3], o = v.originalColumn, C.length > 4 && (v.name = u + C[4], u += C[4])), _.push(v), typeof v.originalLine == "number" && f.push(v);
      }
    Ve(_, g.compareByGeneratedPositionsDeflated), this.__generatedMappings = _, Ve(f, g.compareByOriginalPositions), this.__originalMappings = f;
  };
  M.prototype._findMapping = function(e, t, r, i, s, o) {
    if (e[r] <= 0)
      throw new TypeError("Line must be greater than or equal to 1, got " + e[r]);
    if (e[i] < 0)
      throw new TypeError("Column must be greater than or equal to 0, got " + e[i]);
    return Gr.search(e, t, s, o);
  };
  M.prototype.computeColumnSpans = function() {
    for (var e = 0; e < this._generatedMappings.length; ++e) {
      var t = this._generatedMappings[e];
      if (e + 1 < this._generatedMappings.length) {
        var r = this._generatedMappings[e + 1];
        if (t.generatedLine === r.generatedLine) {
          t.lastGeneratedColumn = r.generatedColumn - 1;
          continue;
        }
      }
      t.lastGeneratedColumn = 1 / 0;
    }
  };
  M.prototype.originalPositionFor = function(e) {
    var t = { generatedLine: g.getArg(e, "line"), generatedColumn: g.getArg(e, "column") }, r = this._findMapping(t, this._generatedMappings, "generatedLine", "generatedColumn", g.compareByGeneratedPositionsDeflated, g.getArg(e, "bias", w.GREATEST_LOWER_BOUND));
    if (r >= 0) {
      var i = this._generatedMappings[r];
      if (i.generatedLine === t.generatedLine) {
        var s = g.getArg(i, "source", null);
        s !== null && (s = this._sources.at(s), s = g.computeSourceURL(this.sourceRoot, s, this._sourceMapURL));
        var o = g.getArg(i, "name", null);
        return o !== null && (o = this._names.at(o)), { source: s, line: g.getArg(i, "originalLine", null), column: g.getArg(i, "originalColumn", null), name: o };
      }
    }
    return { source: null, line: null, column: null, name: null };
  };
  M.prototype.hasContentsOfAllSources = function() {
    return this.sourcesContent ? this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(e) {
      return e == null;
    }) : false;
  };
  M.prototype.sourceContentFor = function(e, t) {
    if (!this.sourcesContent)
      return null;
    var r = this._findSourceIndex(e);
    if (r >= 0)
      return this.sourcesContent[r];
    var i = e;
    this.sourceRoot != null && (i = g.relative(this.sourceRoot, i));
    var s;
    if (this.sourceRoot != null && (s = g.urlParse(this.sourceRoot))) {
      var o = i.replace(/^file:\/\//, "");
      if (s.scheme == "file" && this._sources.has(o))
        return this.sourcesContent[this._sources.indexOf(o)];
      if ((!s.path || s.path == "/") && this._sources.has("/" + i))
        return this.sourcesContent[this._sources.indexOf("/" + i)];
    }
    if (t)
      return null;
    throw new Error('"' + i + '" is not in the SourceMap.');
  };
  M.prototype.generatedPositionFor = function(e) {
    var t = g.getArg(e, "source");
    if (t = this._findSourceIndex(t), t < 0)
      return { line: null, column: null, lastColumn: null };
    var r = { source: t, originalLine: g.getArg(e, "line"), originalColumn: g.getArg(e, "column") }, i = this._findMapping(r, this._originalMappings, "originalLine", "originalColumn", g.compareByOriginalPositions, g.getArg(e, "bias", w.GREATEST_LOWER_BOUND));
    if (i >= 0) {
      var s = this._originalMappings[i];
      if (s.source === r.source)
        return { line: g.getArg(s, "generatedLine", null), column: g.getArg(s, "generatedColumn", null), lastColumn: g.getArg(s, "lastGeneratedColumn", null) };
    }
    return { line: null, column: null, lastColumn: null };
  };
  Bt.BasicSourceMapConsumer = M;
  function H(n6, e) {
    var t = n6;
    typeof n6 == "string" && (t = g.parseSourceMapInput(n6));
    var r = g.getArg(t, "version"), i = g.getArg(t, "sections");
    if (r != this._version)
      throw new Error("Unsupported version: " + r);
    this._sources = new Ce(), this._names = new Ce();
    var s = { line: -1, column: 0 };
    this._sections = i.map(function(o) {
      if (o.url)
        throw new Error("Support for url field in sections not implemented.");
      var a = g.getArg(o, "offset"), u = g.getArg(a, "line"), l = g.getArg(a, "column");
      if (u < s.line || u === s.line && l < s.column)
        throw new Error("Section offsets must be ordered and non-overlapping.");
      return s = a, { generatedOffset: { generatedLine: u + 1, generatedColumn: l + 1 }, consumer: new w(g.getArg(o, "map"), e) };
    });
  }
  H.prototype = Object.create(w.prototype);
  H.prototype.constructor = w;
  H.prototype._version = 3;
  Object.defineProperty(H.prototype, "sources", { get: function() {
    for (var n6 = [], e = 0; e < this._sections.length; e++)
      for (var t = 0; t < this._sections[e].consumer.sources.length; t++)
        n6.push(this._sections[e].consumer.sources[t]);
    return n6;
  } });
  H.prototype.originalPositionFor = function(e) {
    var t = { generatedLine: g.getArg(e, "line"), generatedColumn: g.getArg(e, "column") }, r = Gr.search(t, this._sections, function(s, o) {
      var a = s.generatedLine - o.generatedOffset.generatedLine;
      return a || s.generatedColumn - o.generatedOffset.generatedColumn;
    }), i = this._sections[r];
    return i ? i.consumer.originalPositionFor({ line: t.generatedLine - (i.generatedOffset.generatedLine - 1), column: t.generatedColumn - (i.generatedOffset.generatedLine === t.generatedLine ? i.generatedOffset.generatedColumn - 1 : 0), bias: e.bias }) : { source: null, line: null, column: null, name: null };
  };
  H.prototype.hasContentsOfAllSources = function() {
    return this._sections.every(function(e) {
      return e.consumer.hasContentsOfAllSources();
    });
  };
  H.prototype.sourceContentFor = function(e, t) {
    for (var r = 0; r < this._sections.length; r++) {
      var i = this._sections[r], s = i.consumer.sourceContentFor(e, true);
      if (s)
        return s;
    }
    if (t)
      return null;
    throw new Error('"' + e + '" is not in the SourceMap.');
  };
  H.prototype.generatedPositionFor = function(e) {
    for (var t = 0; t < this._sections.length; t++) {
      var r = this._sections[t];
      if (r.consumer._findSourceIndex(g.getArg(e, "source")) !== -1) {
        var i = r.consumer.generatedPositionFor(e);
        if (i) {
          var s = { line: i.line + (r.generatedOffset.generatedLine - 1), column: i.column + (r.generatedOffset.generatedLine === i.line ? r.generatedOffset.generatedColumn - 1 : 0) };
          return s;
        }
      }
    }
    return { line: null, column: null };
  };
  H.prototype._parseMappings = function(e, t) {
    this.__generatedMappings = [], this.__originalMappings = [];
    for (var r = 0; r < this._sections.length; r++)
      for (var i = this._sections[r], s = i.consumer._generatedMappings, o = 0; o < s.length; o++) {
        var a = s[o], u = i.consumer._sources.at(a.source);
        u = g.computeSourceURL(i.consumer.sourceRoot, u, this._sourceMapURL), this._sources.add(u), u = this._sources.indexOf(u);
        var l = null;
        a.name && (l = i.consumer._names.at(a.name), this._names.add(l), l = this._names.indexOf(l));
        var h = { source: u, generatedLine: a.generatedLine + (i.generatedOffset.generatedLine - 1), generatedColumn: a.generatedColumn + (i.generatedOffset.generatedLine === a.generatedLine ? i.generatedOffset.generatedColumn - 1 : 0), originalLine: a.originalLine, originalColumn: a.originalColumn, name: l };
        this.__generatedMappings.push(h), typeof h.originalLine == "number" && this.__originalMappings.push(h);
      }
    Ve(this.__generatedMappings, g.compareByGeneratedPositionsDeflated), Ve(this.__originalMappings, g.compareByOriginalPositions);
  };
  Bt.IndexedSourceMapConsumer = H;
});
var Ai = y((Li) => {
  "use strict";
  var Ga = Hr().SourceMapGenerator, qt = xe(), Ua = /(\r?\n)/, Va = 10, Ee = "$$$isSourceNode$$$";
  function R(n6, e, t, r, i) {
    this.children = [], this.sourceContents = {}, this.line = n6 ?? null, this.column = e ?? null, this.source = t ?? null, this.name = i ?? null, this[Ee] = true, r != null && this.add(r);
  }
  R.fromStringWithSourceMap = function(e, t, r) {
    var i = new R(), s = e.split(Ua), o = 0, a = function() {
      var p = _(), f = _() || "";
      return p + f;
      function _() {
        return o < s.length ? s[o++] : void 0;
      }
    }, u = 1, l = 0, h = null;
    return t.eachMapping(function(p) {
      if (h !== null)
        if (u < p.generatedLine)
          c(h, a()), u++, l = 0;
        else {
          var f = s[o] || "", _ = f.substr(0, p.generatedColumn - l);
          s[o] = f.substr(p.generatedColumn - l), l = p.generatedColumn, c(h, _), h = p;
          return;
        }
      for (; u < p.generatedLine; )
        i.add(a()), u++;
      if (l < p.generatedColumn) {
        var f = s[o] || "";
        i.add(f.substr(0, p.generatedColumn)), s[o] = f.substr(p.generatedColumn), l = p.generatedColumn;
      }
      h = p;
    }, this), o < s.length && (h && c(h, a()), i.add(s.splice(o).join(""))), t.sources.forEach(function(p) {
      var f = t.sourceContentFor(p);
      f != null && (r != null && (p = qt.join(r, p)), i.setSourceContent(p, f));
    }), i;
    function c(p, f) {
      if (p === null || p.source === void 0)
        i.add(f);
      else {
        var _ = r ? qt.join(r, p.source) : p.source;
        i.add(new R(p.originalLine, p.originalColumn, _, f, p.name));
      }
    }
  };
  R.prototype.add = function(e) {
    if (Array.isArray(e))
      e.forEach(function(t) {
        this.add(t);
      }, this);
    else if (e[Ee] || typeof e == "string")
      e && this.children.push(e);
    else
      throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + e);
    return this;
  };
  R.prototype.prepend = function(e) {
    if (Array.isArray(e))
      for (var t = e.length - 1; t >= 0; t--)
        this.prepend(e[t]);
    else if (e[Ee] || typeof e == "string")
      this.children.unshift(e);
    else
      throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + e);
    return this;
  };
  R.prototype.walk = function(e) {
    for (var t, r = 0, i = this.children.length; r < i; r++)
      t = this.children[r], t[Ee] ? t.walk(e) : t !== "" && e(t, { source: this.source, line: this.line, column: this.column, name: this.name });
  };
  R.prototype.join = function(e) {
    var t, r, i = this.children.length;
    if (i > 0) {
      for (t = [], r = 0; r < i - 1; r++)
        t.push(this.children[r]), t.push(e);
      t.push(this.children[r]), this.children = t;
    }
    return this;
  };
  R.prototype.replaceRight = function(e, t) {
    var r = this.children[this.children.length - 1];
    return r[Ee] ? r.replaceRight(e, t) : typeof r == "string" ? this.children[this.children.length - 1] = r.replace(e, t) : this.children.push("".replace(e, t)), this;
  };
  R.prototype.setSourceContent = function(e, t) {
    this.sourceContents[qt.toSetString(e)] = t;
  };
  R.prototype.walkSourceContents = function(e) {
    for (var t = 0, r = this.children.length; t < r; t++)
      this.children[t][Ee] && this.children[t].walkSourceContents(e);
    for (var i = Object.keys(this.sourceContents), t = 0, r = i.length; t < r; t++)
      e(qt.fromSetString(i[t]), this.sourceContents[i[t]]);
  };
  R.prototype.toString = function() {
    var e = "";
    return this.walk(function(t) {
      e += t;
    }), e;
  };
  R.prototype.toStringWithSourceMap = function(e) {
    var t = { code: "", line: 1, column: 0 }, r = new Ga(e), i = false, s = null, o = null, a = null, u = null;
    return this.walk(function(l, h) {
      t.code += l, h.source !== null && h.line !== null && h.column !== null ? ((s !== h.source || o !== h.line || a !== h.column || u !== h.name) && r.addMapping({ source: h.source, original: { line: h.line, column: h.column }, generated: { line: t.line, column: t.column }, name: h.name }), s = h.source, o = h.line, a = h.column, u = h.name, i = true) : i && (r.addMapping({ generated: { line: t.line, column: t.column } }), s = null, i = false);
      for (var c = 0, p = l.length; c < p; c++)
        l.charCodeAt(c) === Va ? (t.line++, t.column = 0, c + 1 === p ? (s = null, i = false) : i && r.addMapping({ source: h.source, original: { line: h.line, column: h.column }, generated: { line: t.line, column: t.column }, name: h.name })) : t.column++;
    }), this.walkSourceContents(function(l, h) {
      r.setSourceContent(l, h);
    }), { code: t.code, map: r };
  };
  Li.SourceNode = R;
});
var Ti = y((Ht) => {
  "use strict";
  Ht.SourceMapGenerator = Hr().SourceMapGenerator;
  Ht.SourceMapConsumer = Oi().SourceMapConsumer;
  Ht.SourceNode = Ai().SourceNode;
});
var Bi = y((zt, Di) => {
  "use strict";
  zt.__esModule = true;
  var Vr = A(), pe = void 0;
  try {
    (typeof define != "function" || !define.amd) && (Ri = Ti(), pe = Ri.SourceNode);
  } catch {
  }
  var Ri;
  pe || (pe = function(n6, e, t, r) {
    this.src = "", r && this.add(r);
  }, pe.prototype = { add: function(e) {
    Vr.isArray(e) && (e = e.join("")), this.src += e;
  }, prepend: function(e) {
    Vr.isArray(e) && (e = e.join("")), this.src = e + this.src;
  }, toStringWithSourceMap: function() {
    return { code: this.toString() };
  }, toString: function() {
    return this.src;
  } });
  function Ur(n6, e, t) {
    if (Vr.isArray(n6)) {
      for (var r = [], i = 0, s = n6.length; i < s; i++)
        r.push(e.wrap(n6[i], t));
      return r;
    } else if (typeof n6 == "boolean" || typeof n6 == "number")
      return n6 + "";
    return n6;
  }
  function Ni(n6) {
    this.srcFile = n6, this.source = [];
  }
  Ni.prototype = { isEmpty: function() {
    return !this.source.length;
  }, prepend: function(e, t) {
    this.source.unshift(this.wrap(e, t));
  }, push: function(e, t) {
    this.source.push(this.wrap(e, t));
  }, merge: function() {
    var e = this.empty();
    return this.each(function(t) {
      e.add(["  ", t, `
`]);
    }), e;
  }, each: function(e) {
    for (var t = 0, r = this.source.length; t < r; t++)
      e(this.source[t]);
  }, empty: function() {
    var e = this.currentLocation || { start: {} };
    return new pe(e.start.line, e.start.column, this.srcFile);
  }, wrap: function(e) {
    var t = arguments.length <= 1 || arguments[1] === void 0 ? this.currentLocation || { start: {} } : arguments[1];
    return e instanceof pe ? e : (e = Ur(e, this, t), new pe(t.start.line, t.start.column, this.srcFile, e));
  }, functionCall: function(e, t, r) {
    return r = this.generateList(r), this.wrap([e, t ? "." + t + "(" : "(", r, ")"]);
  }, quotedString: function(e) {
    return '"' + (e + "").replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"';
  }, objectLiteral: function(e) {
    var t = this, r = [];
    Object.keys(e).forEach(function(s) {
      var o = Ur(e[s], t);
      o !== "undefined" && r.push([t.quotedString(s), ":", o]);
    });
    var i = this.generateList(r);
    return i.prepend("{"), i.add("}"), i;
  }, generateList: function(e) {
    for (var t = this.empty(), r = 0, i = e.length; r < i; r++)
      r && t.add(","), t.add(Ur(e[r], this));
    return t;
  }, generateArray: function(e) {
    var t = this.generateList(e);
    return t.prepend("["), t.add("]"), t;
  } };
  zt.default = Ni;
  Di.exports = zt.default;
});
var Wi = y((Ft, Fi) => {
  "use strict";
  Ft.__esModule = true;
  function zi(n6) {
    return n6 && n6.__esModule ? n6 : { default: n6 };
  }
  var qi = bt(), Ka = D(), Kr = zi(Ka), Za = A(), ja = Bi(), Hi = zi(ja);
  function Ie(n6) {
    this.value = n6;
  }
  function Pe() {
  }
  Pe.prototype = { nameLookup: function(e, t) {
    return this.internalNameLookup(e, t);
  }, depthedLookup: function(e) {
    return [this.aliasable("container.lookup"), "(depths, ", JSON.stringify(e), ")"];
  }, compilerInfo: function() {
    var e = qi.COMPILER_REVISION, t = qi.REVISION_CHANGES[e];
    return [e, t];
  }, appendToBuffer: function(e, t, r) {
    return Za.isArray(e) || (e = [e]), e = this.source.wrap(e, t), this.environment.isSimple ? ["return ", e, ";"] : r ? ["buffer += ", e, ";"] : (e.appendToBuffer = true, e);
  }, initializeBuffer: function() {
    return this.quotedString("");
  }, internalNameLookup: function(e, t) {
    return this.lookupPropertyFunctionIsUsed = true, ["lookupProperty(", e, ",", JSON.stringify(t), ")"];
  }, lookupPropertyFunctionIsUsed: false, compile: function(e, t, r, i) {
    this.environment = e, this.options = t, this.stringParams = this.options.stringParams, this.trackIds = this.options.trackIds, this.precompile = !i, this.name = this.environment.name, this.isChild = !!r, this.context = r || { decorators: [], programs: [], environments: [] }, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.aliases = {}, this.registers = { list: [] }, this.hashes = [], this.compileStack = [], this.inlineStack = [], this.blockParams = [], this.compileChildren(e, t), this.useDepths = this.useDepths || e.useDepths || e.useDecorators || this.options.compat, this.useBlockParams = this.useBlockParams || e.useBlockParams;
    var s = e.opcodes, o = void 0, a = void 0, u = void 0, l = void 0;
    for (u = 0, l = s.length; u < l; u++)
      o = s[u], this.source.currentLocation = o.loc, a = a || o.loc, this[o.opcode].apply(this, o.args);
    if (this.source.currentLocation = a, this.pushSource(""), this.stackSlot || this.inlineStack.length || this.compileStack.length)
      throw new Kr.default("Compile completed with content left on stack");
    this.decorators.isEmpty() ? this.decorators = void 0 : (this.useDecorators = true, this.decorators.prepend(["var decorators = container.decorators, ", this.lookupPropertyFunctionVarDeclaration(), `;
`]), this.decorators.push("return fn;"), i ? this.decorators = Function.apply(this, ["fn", "props", "container", "depth0", "data", "blockParams", "depths", this.decorators.merge()]) : (this.decorators.prepend(`function(fn, props, container, depth0, data, blockParams, depths) {
`), this.decorators.push(`}
`), this.decorators = this.decorators.merge()));
    var h = this.createFunctionContext(i);
    if (this.isChild)
      return h;
    var c = { compiler: this.compilerInfo(), main: h };
    this.decorators && (c.main_d = this.decorators, c.useDecorators = true);
    var p = this.context, f = p.programs, _ = p.decorators;
    for (u = 0, l = f.length; u < l; u++)
      f[u] && (c[u] = f[u], _[u] && (c[u + "_d"] = _[u], c.useDecorators = true));
    return this.environment.usePartial && (c.usePartial = true), this.options.data && (c.useData = true), this.useDepths && (c.useDepths = true), this.useBlockParams && (c.useBlockParams = true), this.options.compat && (c.compat = true), i ? c.compilerOptions = this.options : (c.compiler = JSON.stringify(c.compiler), this.source.currentLocation = { start: { line: 1, column: 0 } }, c = this.objectLiteral(c), t.srcName ? (c = c.toStringWithSourceMap({ file: t.destName }), c.map = c.map && c.map.toString()) : c = c.toString()), c;
  }, preamble: function() {
    this.lastContext = 0, this.source = new Hi.default(this.options.srcName), this.decorators = new Hi.default(this.options.srcName);
  }, createFunctionContext: function(e) {
    var t = this, r = "", i = this.stackVars.concat(this.registers.list);
    i.length > 0 && (r += ", " + i.join(", "));
    var s = 0;
    Object.keys(this.aliases).forEach(function(u) {
      var l = t.aliases[u];
      l.children && l.referenceCount > 1 && (r += ", alias" + ++s + "=" + u, l.children[0] = "alias" + s);
    }), this.lookupPropertyFunctionIsUsed && (r += ", " + this.lookupPropertyFunctionVarDeclaration());
    var o = ["container", "depth0", "helpers", "partials", "data"];
    (this.useBlockParams || this.useDepths) && o.push("blockParams"), this.useDepths && o.push("depths");
    var a = this.mergeSource(r);
    return e ? (o.push(a), Function.apply(this, o)) : this.source.wrap(["function(", o.join(","), `) {
  `, a, "}"]);
  }, mergeSource: function(e) {
    var t = this.environment.isSimple, r = !this.forceBuffer, i = void 0, s = void 0, o = void 0, a = void 0;
    return this.source.each(function(u) {
      u.appendToBuffer ? (o ? u.prepend("  + ") : o = u, a = u) : (o && (s ? o.prepend("buffer += ") : i = true, a.add(";"), o = a = void 0), s = true, t || (r = false));
    }), r ? o ? (o.prepend("return "), a.add(";")) : s || this.source.push('return "";') : (e += ", buffer = " + (i ? "" : this.initializeBuffer()), o ? (o.prepend("return buffer + "), a.add(";")) : this.source.push("return buffer;")), e && this.source.prepend("var " + e.substring(2) + (i ? "" : `;
`)), this.source.merge();
  }, lookupPropertyFunctionVarDeclaration: function() {
    return `
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    }
    `.trim();
  }, blockValue: function(e) {
    var t = this.aliasable("container.hooks.blockHelperMissing"), r = [this.contextName(0)];
    this.setupHelperArgs(e, 0, r);
    var i = this.popStack();
    r.splice(1, 0, i), this.push(this.source.functionCall(t, "call", r));
  }, ambiguousBlockValue: function() {
    var e = this.aliasable("container.hooks.blockHelperMissing"), t = [this.contextName(0)];
    this.setupHelperArgs("", 0, t, true), this.flushInline();
    var r = this.topStack();
    t.splice(1, 0, r), this.pushSource(["if (!", this.lastHelper, ") { ", r, " = ", this.source.functionCall(e, "call", t), "}"]);
  }, appendContent: function(e) {
    this.pendingContent ? e = this.pendingContent + e : this.pendingLocation = this.source.currentLocation, this.pendingContent = e;
  }, append: function() {
    if (this.isInline())
      this.replaceStack(function(t) {
        return [" != null ? ", t, ' : ""'];
      }), this.pushSource(this.appendToBuffer(this.popStack()));
    else {
      var e = this.popStack();
      this.pushSource(["if (", e, " != null) { ", this.appendToBuffer(e, void 0, true), " }"]), this.environment.isSimple && this.pushSource(["else { ", this.appendToBuffer("''", void 0, true), " }"]);
    }
  }, appendEscaped: function() {
    this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"), "(", this.popStack(), ")"]));
  }, getContext: function(e) {
    this.lastContext = e;
  }, pushContext: function() {
    this.pushStackLiteral(this.contextName(this.lastContext));
  }, lookupOnContext: function(e, t, r, i) {
    var s = 0;
    !i && this.options.compat && !this.lastContext ? this.push(this.depthedLookup(e[s++])) : this.pushContext(), this.resolvePath("context", e, s, t, r);
  }, lookupBlockParam: function(e, t) {
    this.useBlockParams = true, this.push(["blockParams[", e[0], "][", e[1], "]"]), this.resolvePath("context", t, 1);
  }, lookupData: function(e, t, r) {
    e ? this.pushStackLiteral("container.data(data, " + e + ")") : this.pushStackLiteral("data"), this.resolvePath("data", t, 0, true, r);
  }, resolvePath: function(e, t, r, i, s) {
    var o = this;
    if (this.options.strict || this.options.assumeObjects) {
      this.push(Ja(this.options.strict && s, this, t, r, e));
      return;
    }
    for (var a = t.length; r < a; r++)
      this.replaceStack(function(u) {
        var l = o.nameLookup(u, t[r], e);
        return i ? [" && ", l] : [" != null ? ", l, " : ", u];
      });
  }, resolvePossibleLambda: function() {
    this.push([this.aliasable("container.lambda"), "(", this.popStack(), ", ", this.contextName(0), ")"]);
  }, pushStringParam: function(e, t) {
    this.pushContext(), this.pushString(t), t !== "SubExpression" && (typeof e == "string" ? this.pushString(e) : this.pushStackLiteral(e));
  }, emptyHash: function(e) {
    this.trackIds && this.push("{}"), this.stringParams && (this.push("{}"), this.push("{}")), this.pushStackLiteral(e ? "undefined" : "{}");
  }, pushHash: function() {
    this.hash && this.hashes.push(this.hash), this.hash = { values: {}, types: [], contexts: [], ids: [] };
  }, popHash: function() {
    var e = this.hash;
    this.hash = this.hashes.pop(), this.trackIds && this.push(this.objectLiteral(e.ids)), this.stringParams && (this.push(this.objectLiteral(e.contexts)), this.push(this.objectLiteral(e.types))), this.push(this.objectLiteral(e.values));
  }, pushString: function(e) {
    this.pushStackLiteral(this.quotedString(e));
  }, pushLiteral: function(e) {
    this.pushStackLiteral(e);
  }, pushProgram: function(e) {
    e != null ? this.pushStackLiteral(this.programExpression(e)) : this.pushStackLiteral(null);
  }, registerDecorator: function(e, t) {
    var r = this.nameLookup("decorators", t, "decorator"), i = this.setupHelperArgs(t, e);
    this.decorators.push(["fn = ", this.decorators.functionCall(r, "", ["fn", "props", "container", i]), " || fn;"]);
  }, invokeHelper: function(e, t, r) {
    var i = this.popStack(), s = this.setupHelper(e, t), o = [];
    r && o.push(s.name), o.push(i), this.options.strict || o.push(this.aliasable("container.hooks.helperMissing"));
    var a = ["(", this.itemsSeparatedBy(o, "||"), ")"], u = this.source.functionCall(a, "call", s.callParams);
    this.push(u);
  }, itemsSeparatedBy: function(e, t) {
    var r = [];
    r.push(e[0]);
    for (var i = 1; i < e.length; i++)
      r.push(t, e[i]);
    return r;
  }, invokeKnownHelper: function(e, t) {
    var r = this.setupHelper(e, t);
    this.push(this.source.functionCall(r.name, "call", r.callParams));
  }, invokeAmbiguous: function(e, t) {
    this.useRegister("helper");
    var r = this.popStack();
    this.emptyHash();
    var i = this.setupHelper(0, e, t), s = this.lastHelper = this.nameLookup("helpers", e, "helper"), o = ["(", "(helper = ", s, " || ", r, ")"];
    this.options.strict || (o[0] = "(helper = ", o.push(" != null ? helper : ", this.aliasable("container.hooks.helperMissing"))), this.push(["(", o, i.paramsInit ? ["),(", i.paramsInit] : [], "),", "(typeof helper === ", this.aliasable('"function"'), " ? ", this.source.functionCall("helper", "call", i.callParams), " : helper))"]);
  }, invokePartial: function(e, t, r) {
    var i = [], s = this.setupParams(t, 1, i);
    e && (t = this.popStack(), delete s.name), r && (s.indent = JSON.stringify(r)), s.helpers = "helpers", s.partials = "partials", s.decorators = "container.decorators", e ? i.unshift(t) : i.unshift(this.nameLookup("partials", t, "partial")), this.options.compat && (s.depths = "depths"), s = this.objectLiteral(s), i.push(s), this.push(this.source.functionCall("container.invokePartial", "", i));
  }, assignToHash: function(e) {
    var t = this.popStack(), r = void 0, i = void 0, s = void 0;
    this.trackIds && (s = this.popStack()), this.stringParams && (i = this.popStack(), r = this.popStack());
    var o = this.hash;
    r && (o.contexts[e] = r), i && (o.types[e] = i), s && (o.ids[e] = s), o.values[e] = t;
  }, pushId: function(e, t, r) {
    e === "BlockParam" ? this.pushStackLiteral("blockParams[" + t[0] + "].path[" + t[1] + "]" + (r ? " + " + JSON.stringify("." + r) : "")) : e === "PathExpression" ? this.pushString(t) : e === "SubExpression" ? this.pushStackLiteral("true") : this.pushStackLiteral("null");
  }, compiler: Pe, compileChildren: function(e, t) {
    for (var r = e.children, i = void 0, s = void 0, o = 0, a = r.length; o < a; o++) {
      i = r[o], s = new this.compiler();
      var u = this.matchExistingProgram(i);
      if (u == null) {
        this.context.programs.push("");
        var l = this.context.programs.length;
        i.index = l, i.name = "program" + l, this.context.programs[l] = s.compile(i, t, this.context, !this.precompile), this.context.decorators[l] = s.decorators, this.context.environments[l] = i, this.useDepths = this.useDepths || s.useDepths, this.useBlockParams = this.useBlockParams || s.useBlockParams, i.useDepths = this.useDepths, i.useBlockParams = this.useBlockParams;
      } else
        i.index = u.index, i.name = "program" + u.index, this.useDepths = this.useDepths || u.useDepths, this.useBlockParams = this.useBlockParams || u.useBlockParams;
    }
  }, matchExistingProgram: function(e) {
    for (var t = 0, r = this.context.environments.length; t < r; t++) {
      var i = this.context.environments[t];
      if (i && i.equals(e))
        return i;
    }
  }, programExpression: function(e) {
    var t = this.environment.children[e], r = [t.index, "data", t.blockParams];
    return (this.useBlockParams || this.useDepths) && r.push("blockParams"), this.useDepths && r.push("depths"), "container.program(" + r.join(", ") + ")";
  }, useRegister: function(e) {
    this.registers[e] || (this.registers[e] = true, this.registers.list.push(e));
  }, push: function(e) {
    return e instanceof Ie || (e = this.source.wrap(e)), this.inlineStack.push(e), e;
  }, pushStackLiteral: function(e) {
    this.push(new Ie(e));
  }, pushSource: function(e) {
    this.pendingContent && (this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation)), this.pendingContent = void 0), e && this.source.push(e);
  }, replaceStack: function(e) {
    var t = ["("], r = void 0, i = void 0, s = void 0;
    if (!this.isInline())
      throw new Kr.default("replaceStack on non-inline");
    var o = this.popStack(true);
    if (o instanceof Ie)
      r = [o.value], t = ["(", r], s = true;
    else {
      i = true;
      var a = this.incrStack();
      t = ["((", this.push(a), " = ", o, ")"], r = this.topStack();
    }
    var u = e.call(this, r);
    s || this.popStack(), i && this.stackSlot--, this.push(t.concat(u, ")"));
  }, incrStack: function() {
    return this.stackSlot++, this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot), this.topStackName();
  }, topStackName: function() {
    return "stack" + this.stackSlot;
  }, flushInline: function() {
    var e = this.inlineStack;
    this.inlineStack = [];
    for (var t = 0, r = e.length; t < r; t++) {
      var i = e[t];
      if (i instanceof Ie)
        this.compileStack.push(i);
      else {
        var s = this.incrStack();
        this.pushSource([s, " = ", i, ";"]), this.compileStack.push(s);
      }
    }
  }, isInline: function() {
    return this.inlineStack.length;
  }, popStack: function(e) {
    var t = this.isInline(), r = (t ? this.inlineStack : this.compileStack).pop();
    if (!e && r instanceof Ie)
      return r.value;
    if (!t) {
      if (!this.stackSlot)
        throw new Kr.default("Invalid stack pop");
      this.stackSlot--;
    }
    return r;
  }, topStack: function() {
    var e = this.isInline() ? this.inlineStack : this.compileStack, t = e[e.length - 1];
    return t instanceof Ie ? t.value : t;
  }, contextName: function(e) {
    return this.useDepths && e ? "depths[" + e + "]" : "depth" + e;
  }, quotedString: function(e) {
    return this.source.quotedString(e);
  }, objectLiteral: function(e) {
    return this.source.objectLiteral(e);
  }, aliasable: function(e) {
    var t = this.aliases[e];
    return t ? (t.referenceCount++, t) : (t = this.aliases[e] = this.source.wrap(e), t.aliasable = true, t.referenceCount = 1, t);
  }, setupHelper: function(e, t, r) {
    var i = [], s = this.setupHelperArgs(t, e, i, r), o = this.nameLookup("helpers", t, "helper"), a = this.aliasable(this.contextName(0) + " != null ? " + this.contextName(0) + " : (container.nullContext || {})");
    return { params: i, paramsInit: s, name: o, callParams: [a].concat(i) };
  }, setupParams: function(e, t, r) {
    var i = {}, s = [], o = [], a = [], u = !r, l = void 0;
    u && (r = []), i.name = this.quotedString(e), i.hash = this.popStack(), this.trackIds && (i.hashIds = this.popStack()), this.stringParams && (i.hashTypes = this.popStack(), i.hashContexts = this.popStack());
    var h = this.popStack(), c = this.popStack();
    (c || h) && (i.fn = c || "container.noop", i.inverse = h || "container.noop");
    for (var p = t; p--; )
      l = this.popStack(), r[p] = l, this.trackIds && (a[p] = this.popStack()), this.stringParams && (o[p] = this.popStack(), s[p] = this.popStack());
    return u && (i.args = this.source.generateArray(r)), this.trackIds && (i.ids = this.source.generateArray(a)), this.stringParams && (i.types = this.source.generateArray(o), i.contexts = this.source.generateArray(s)), this.options.data && (i.data = "data"), this.useBlockParams && (i.blockParams = "blockParams"), i;
  }, setupHelperArgs: function(e, t, r, i) {
    var s = this.setupParams(e, t, r);
    return s.loc = JSON.stringify(this.source.currentLocation), s = this.objectLiteral(s), i ? (this.useRegister("options"), r.push("options"), ["options=", s]) : r ? (r.push(s), "") : s;
  } };
  (function() {
    for (var n6 = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "), e = Pe.RESERVED_WORDS = {}, t = 0, r = n6.length; t < r; t++)
      e[n6[t]] = true;
  })();
  Pe.isValidJavaScriptVariableName = function(n6) {
    return !Pe.RESERVED_WORDS[n6] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(n6);
  };
  function Ja(n6, e, t, r, i) {
    var s = e.popStack(), o = t.length;
    for (n6 && o--; r < o; r++)
      s = e.nameLookup(s, t[r], i);
    return n6 ? [e.aliasable("container.strict"), "(", s, ", ", e.quotedString(t[r]), ", ", JSON.stringify(e.source.currentLocation), " )"] : s;
  }
  Ft.default = Pe;
  Fi.exports = Ft.default;
});
var Vi = y((Wt, Ui) => {
  "use strict";
  Wt.__esModule = true;
  function Ke(n6) {
    return n6 && n6.__esModule ? n6 : { default: n6 };
  }
  var Qa = Kn(), Ya = Ke(Qa), Xa = wr(), $a = Ke(Xa), Zr = si(), jr = ui(), el = Wi(), tl = Ke(el), rl = At(), nl = Ke(rl), il = vr(), sl = Ke(il), ol = Ya.default.create;
  function Gi() {
    var n6 = ol();
    return n6.compile = function(e, t) {
      return jr.compile(e, t, n6);
    }, n6.precompile = function(e, t) {
      return jr.precompile(e, t, n6);
    }, n6.AST = $a.default, n6.Compiler = jr.Compiler, n6.JavaScriptCompiler = tl.default, n6.Parser = Zr.parser, n6.parse = Zr.parse, n6.parseWithoutProcessing = Zr.parseWithoutProcessing, n6;
  }
  var Me = Gi();
  Me.create = Gi;
  sl.default(Me);
  Me.Visitor = nl.default;
  Me.default = Me;
  Wt.default = Me;
  Ui.exports = Wt.default;
});
var Ki = y((Gt) => {
  "use strict";
  Gt.__esModule = true;
  Gt.print = cl;
  Gt.PrintVisitor = E;
  function al(n6) {
    return n6 && n6.__esModule ? n6 : { default: n6 };
  }
  var ll = At(), ul = al(ll);
  function cl(n6) {
    return new E().accept(n6);
  }
  function E() {
    this.padding = 0;
  }
  E.prototype = new ul.default();
  E.prototype.pad = function(n6) {
    for (var e = "", t = 0, r = this.padding; t < r; t++)
      e += "  ";
    return e += n6 + `
`, e;
  };
  E.prototype.Program = function(n6) {
    var e = "", t = n6.body, r = void 0, i = void 0;
    if (n6.blockParams) {
      var s = "BLOCK PARAMS: [";
      for (r = 0, i = n6.blockParams.length; r < i; r++)
        s += " " + n6.blockParams[r];
      s += " ]", e += this.pad(s);
    }
    for (r = 0, i = t.length; r < i; r++)
      e += this.accept(t[r]);
    return this.padding--, e;
  };
  E.prototype.MustacheStatement = function(n6) {
    return this.pad("{{ " + this.SubExpression(n6) + " }}");
  };
  E.prototype.Decorator = function(n6) {
    return this.pad("{{ DIRECTIVE " + this.SubExpression(n6) + " }}");
  };
  E.prototype.BlockStatement = E.prototype.DecoratorBlock = function(n6) {
    var e = "";
    return e += this.pad((n6.type === "DecoratorBlock" ? "DIRECTIVE " : "") + "BLOCK:"), this.padding++, e += this.pad(this.SubExpression(n6)), n6.program && (e += this.pad("PROGRAM:"), this.padding++, e += this.accept(n6.program), this.padding--), n6.inverse && (n6.program && this.padding++, e += this.pad("{{^}}"), this.padding++, e += this.accept(n6.inverse), this.padding--, n6.program && this.padding--), this.padding--, e;
  };
  E.prototype.PartialStatement = function(n6) {
    var e = "PARTIAL:" + n6.name.original;
    return n6.params[0] && (e += " " + this.accept(n6.params[0])), n6.hash && (e += " " + this.accept(n6.hash)), this.pad("{{> " + e + " }}");
  };
  E.prototype.PartialBlockStatement = function(n6) {
    var e = "PARTIAL BLOCK:" + n6.name.original;
    return n6.params[0] && (e += " " + this.accept(n6.params[0])), n6.hash && (e += " " + this.accept(n6.hash)), e += " " + this.pad("PROGRAM:"), this.padding++, e += this.accept(n6.program), this.padding--, this.pad("{{> " + e + " }}");
  };
  E.prototype.ContentStatement = function(n6) {
    return this.pad("CONTENT[ '" + n6.value + "' ]");
  };
  E.prototype.CommentStatement = function(n6) {
    return this.pad("{{! '" + n6.value + "' }}");
  };
  E.prototype.SubExpression = function(n6) {
    for (var e = n6.params, t = [], r = void 0, i = 0, s = e.length; i < s; i++)
      t.push(this.accept(e[i]));
    return e = "[" + t.join(", ") + "]", r = n6.hash ? " " + this.accept(n6.hash) : "", this.accept(n6.path) + " " + e + r;
  };
  E.prototype.PathExpression = function(n6) {
    var e = n6.parts.join("/");
    return (n6.data ? "@" : "") + "PATH:" + e;
  };
  E.prototype.StringLiteral = function(n6) {
    return '"' + n6.value + '"';
  };
  E.prototype.NumberLiteral = function(n6) {
    return "NUMBER{" + n6.value + "}";
  };
  E.prototype.BooleanLiteral = function(n6) {
    return "BOOLEAN{" + n6.value + "}";
  };
  E.prototype.UndefinedLiteral = function() {
    return "UNDEFINED";
  };
  E.prototype.NullLiteral = function() {
    return "NULL";
  };
  E.prototype.Hash = function(n6) {
    for (var e = n6.pairs, t = [], r = 0, i = e.length; r < i; r++)
      t.push(this.accept(e[r]));
    return "HASH{" + t.join(", ") + "}";
  };
  E.prototype.HashPair = function(n6) {
    return n6.key + "=" + this.accept(n6.value);
  };
});
var Qi = y((Ru, Ji) => {
  "use strict";
  var Ut = Vi().default, ji = Ki();
  Ut.PrintVisitor = ji.PrintVisitor;
  Ut.print = ji.print;
  Ji.exports = Ut;
  function Zi(n6, e) {
    var t = _e("fs"), r = t.readFileSync(e, "utf8");
    n6.exports = Ut.compile(r);
  }
  typeof _e < "u" && _e.extensions && (_e.extensions[".handlebars"] = Zi, _e.extensions[".hbs"] = Zi);
});
var Ae = class n {
  static isPlaceholder(e) {
    return e?.onclick != null;
  }
  static isAudio(e) {
    return e && !n.isPlaceholder(e) && e?.mimeType?.startsWith("audio/") || e.mimeType == "application/ogg";
  }
  static isImage(e) {
    return e && !n.isPlaceholder(e) && e?.mimeType?.startsWith("image/");
  }
  static isDocument(e) {
    return e && !n.isPlaceholder(e) && (e?.mimeType?.startsWith("text/") || e?.mimeType?.startsWith("application/pdf"));
  }
};
var er = ((a) => (a.REGISTRATION = "client_registration", a.DEREGISTRATION = "client_deregistration", a.SEND_CHAT_MESSAGE = "client_send_chat", a.RUN_CLIENT_SCRIPT = "client_run_cscript", a.SIGNAL_INTENT = "client_signal_intent", a.WINDOW_MESSAGE = "client_window_message", a.SHOW_TOAST = "client_show_toast", a))(er || {});
var tr = ((e) => (e.INTENT_MAP = "omni-intentMap", e))(tr || {});
var $r = ((e) => (e.DATA_UPDATED = "data_updated", e))($r || {});
var rr = ((i) => (i.ACKNOWLEDGE = "host_acknowledge", i.CLIENT_SCRIPT_RESPONSE = "host_cscript_response", i.SYNC_DATA = "host_sync_data", i.CHAT_COMMAND = "host_chat_command", i))(rr || {});
var en = ((s) => (s.image = "image", s.audio = "audio", s.document = "document", s.video = "video", s.file = "file", s))(en || {});
var $e = class n2 {
  constructor(e) {
    if (this.fid = e.fid || e.ticket?.fid, !this.fid)
      throw new Error("Invalid resource, fid missing");
    this.ticket = e.ticket, this.fileName = e.fileName, this.size = e.size, this.data = e.data, this.url = e.url, this.mimeType = e.mimeType, this.expires = e.expires, this.meta = e.meta || {}, this.meta.created = this.meta.created || Date.now();
    let t = this.fileName.split(".").pop();
    this.furl = `fid://${this.fid}.${t}`, this.fileType = n2.determineFileTypeFromMimeType(this.mimeType) || e.fileType || "file";
  }
  static determineFileTypeFromMimeType(e) {
    let t = ["audio", "document", "image", "video", "file"];
    if (e) {
      let r = e.split("/")[0];
      if (t.includes(r))
        return r;
      if (r.startsWith("text/"))
        return "document";
      if (r === "application/ogg")
        return "audio";
      if (r === "application/pdf")
        return "document";
      if (r === "video/")
        return "video";
    }
  }
  isAudio() {
    return this.fileType === "audio" ? true : this.mimeType ? this.mimeType?.startsWith("audio/") || this.mimeType?.startsWith("application/ogg") : false;
  }
  isVideo() {
    return this.fileType === "video" ? true : this.mimeType ? this.mimeType?.startsWith("video/") : false;
  }
  isImage() {
    return this.fileType === "image" ? true : this.mimeType ? this.mimeType?.startsWith("image/") : false;
  }
  isDocument() {
    return this.fileType === "document" ? true : this.mimeType ? this.mimeType?.startsWith("text/") || this.mimeType?.startsWith("application/pdf") : false;
  }
  asBase64(e) {
    if (this.data instanceof Buffer)
      return e ? `data:${this.mimeType};base64,${this.data.toString("base64")}` : this.data.toString("base64");
    if (typeof this.data == "string")
      return this.data;
  }
};
var et = class {
  constructor(e = (t, r) => window.fetch(t, r)) {
    this.fetch = e;
  }
  async executeRequest(e, t) {
    return await this.fetch(e, t);
  }
};
var K = /* @__PURE__ */ new WeakMap();
var $ = /* @__PURE__ */ new WeakMap();
var W = /* @__PURE__ */ new WeakMap();
var nt = Symbol("anyProducer");
var tn = Promise.resolve();
var it = Symbol("listenerAdded");
var st = Symbol("listenerRemoved");
var ot = false;
var nr = false;
function ye(n6) {
  if (typeof n6 != "string" && typeof n6 != "symbol" && typeof n6 != "number")
    throw new TypeError("`eventName` must be a string, symbol, or number");
}
function tt(n6) {
  if (typeof n6 != "function")
    throw new TypeError("listener must be a function");
}
function ve(n6, e) {
  let t = $.get(n6);
  if (t.has(e))
    return t.get(e);
}
function Te(n6, e) {
  let t = typeof e == "string" || typeof e == "symbol" || typeof e == "number" ? e : nt, r = W.get(n6);
  if (r.has(t))
    return r.get(t);
}
function ys(n6, e, t) {
  let r = W.get(n6);
  if (r.has(e))
    for (let i of r.get(e))
      i.enqueue(t);
  if (r.has(nt)) {
    let i = Promise.all([e, t]);
    for (let s of r.get(nt))
      s.enqueue(i);
  }
}
function rn(n6, e) {
  e = Array.isArray(e) ? e : [e];
  let t = false, r = () => {
  }, i = [], s = { enqueue(o) {
    i.push(o), r();
  }, finish() {
    t = true, r();
  } };
  for (let o of e) {
    let a = Te(n6, o);
    a || (a = /* @__PURE__ */ new Set(), W.get(n6).set(o, a)), a.add(s);
  }
  return { async next() {
    return i ? i.length === 0 ? t ? (i = void 0, this.next()) : (await new Promise((o) => {
      r = o;
    }), this.next()) : { done: false, value: await i.shift() } : { done: true };
  }, async return(o) {
    i = void 0;
    for (let a of e) {
      let u = Te(n6, a);
      u && (u.delete(s), u.size === 0 && W.get(n6).delete(a));
    }
    return r(), arguments.length > 0 ? { done: true, value: await o } : { done: true };
  }, [Symbol.asyncIterator]() {
    return this;
  } };
}
function nn(n6) {
  if (n6 === void 0)
    return sn;
  if (!Array.isArray(n6))
    throw new TypeError("`methodNames` must be an array of strings");
  for (let e of n6)
    if (!sn.includes(e))
      throw typeof e != "string" ? new TypeError("`methodNames` element must be a string") : new Error(`${e} is not Emittery method`);
  return n6;
}
var ke = (n6) => n6 === it || n6 === st;
function rt(n6, e, t) {
  if (ke(e))
    try {
      ot = true, n6.emit(e, t);
    } finally {
      ot = false;
    }
}
var ee = class n3 {
  static mixin(e, t) {
    return t = nn(t), (r) => {
      if (typeof r != "function")
        throw new TypeError("`target` must be function");
      for (let o of t)
        if (r.prototype[o] !== void 0)
          throw new Error(`The property \`${o}\` already exists on \`target\``);
      function i() {
        return Object.defineProperty(this, e, { enumerable: false, value: new n3() }), this[e];
      }
      Object.defineProperty(r.prototype, e, { enumerable: false, get: i });
      let s = (o) => function(...a) {
        return this[e][o](...a);
      };
      for (let o of t)
        Object.defineProperty(r.prototype, o, { enumerable: false, value: s(o) });
      return r;
    };
  }
  static get isDebugEnabled() {
    if (typeof globalThis.process?.env != "object")
      return nr;
    let { env: e } = globalThis.process ?? { env: {} };
    return e.DEBUG === "emittery" || e.DEBUG === "*" || nr;
  }
  static set isDebugEnabled(e) {
    nr = e;
  }
  constructor(e = {}) {
    K.set(this, /* @__PURE__ */ new Set()), $.set(this, /* @__PURE__ */ new Map()), W.set(this, /* @__PURE__ */ new Map()), W.get(this).set(nt, /* @__PURE__ */ new Set()), this.debug = e.debug ?? {}, this.debug.enabled === void 0 && (this.debug.enabled = false), this.debug.logger || (this.debug.logger = (t, r, i, s) => {
      try {
        s = JSON.stringify(s);
      } catch {
        s = `Object with the following keys failed to stringify: ${Object.keys(s).join(",")}`;
      }
      (typeof i == "symbol" || typeof i == "number") && (i = i.toString());
      let o = /* @__PURE__ */ new Date(), a = `${o.getHours()}:${o.getMinutes()}:${o.getSeconds()}.${o.getMilliseconds()}`;
      console.log(`[${a}][emittery:${t}][${r}] Event Name: ${i}
	data: ${s}`);
    });
  }
  logIfDebugEnabled(e, t, r) {
    (n3.isDebugEnabled || this.debug.enabled) && this.debug.logger(e, this.debug.name, t, r);
  }
  on(e, t) {
    tt(t), e = Array.isArray(e) ? e : [e];
    for (let r of e) {
      ye(r);
      let i = ve(this, r);
      i || (i = /* @__PURE__ */ new Set(), $.get(this).set(r, i)), i.add(t), this.logIfDebugEnabled("subscribe", r, void 0), ke(r) || rt(this, it, { eventName: r, listener: t });
    }
    return this.off.bind(this, e, t);
  }
  off(e, t) {
    tt(t), e = Array.isArray(e) ? e : [e];
    for (let r of e) {
      ye(r);
      let i = ve(this, r);
      i && (i.delete(t), i.size === 0 && $.get(this).delete(r)), this.logIfDebugEnabled("unsubscribe", r, void 0), ke(r) || rt(this, st, { eventName: r, listener: t });
    }
  }
  once(e) {
    let t, r = new Promise((i) => {
      t = this.on(e, (s) => {
        t(), i(s);
      });
    });
    return r.off = t, r;
  }
  events(e) {
    e = Array.isArray(e) ? e : [e];
    for (let t of e)
      ye(t);
    return rn(this, e);
  }
  async emit(e, t) {
    if (ye(e), ke(e) && !ot)
      throw new TypeError("`eventName` cannot be meta event `listenerAdded` or `listenerRemoved`");
    this.logIfDebugEnabled("emit", e, t), ys(this, e, t);
    let r = ve(this, e) ?? /* @__PURE__ */ new Set(), i = K.get(this), s = [...r], o = ke(e) ? [] : [...i];
    await tn, await Promise.all([...s.map(async (a) => {
      if (r.has(a))
        return a(t);
    }), ...o.map(async (a) => {
      if (i.has(a))
        return a(e, t);
    })]);
  }
  async emitSerial(e, t) {
    if (ye(e), ke(e) && !ot)
      throw new TypeError("`eventName` cannot be meta event `listenerAdded` or `listenerRemoved`");
    this.logIfDebugEnabled("emitSerial", e, t);
    let r = ve(this, e) ?? /* @__PURE__ */ new Set(), i = K.get(this), s = [...r], o = [...i];
    await tn;
    for (let a of s)
      r.has(a) && await a(t);
    for (let a of o)
      i.has(a) && await a(e, t);
  }
  onAny(e) {
    return tt(e), this.logIfDebugEnabled("subscribeAny", void 0, void 0), K.get(this).add(e), rt(this, it, { listener: e }), this.offAny.bind(this, e);
  }
  anyEvent() {
    return rn(this);
  }
  offAny(e) {
    tt(e), this.logIfDebugEnabled("unsubscribeAny", void 0, void 0), rt(this, st, { listener: e }), K.get(this).delete(e);
  }
  clearListeners(e) {
    e = Array.isArray(e) ? e : [e];
    for (let t of e)
      if (this.logIfDebugEnabled("clear", t, void 0), typeof t == "string" || typeof t == "symbol" || typeof t == "number") {
        let r = ve(this, t);
        r && r.clear();
        let i = Te(this, t);
        if (i) {
          for (let s of i)
            s.finish();
          i.clear();
        }
      } else {
        K.get(this).clear();
        for (let [r, i] of $.get(this).entries())
          i.clear(), $.get(this).delete(r);
        for (let [r, i] of W.get(this).entries()) {
          for (let s of i)
            s.finish();
          i.clear(), W.get(this).delete(r);
        }
      }
  }
  listenerCount(e) {
    e = Array.isArray(e) ? e : [e];
    let t = 0;
    for (let r of e) {
      if (typeof r == "string") {
        t += K.get(this).size + (ve(this, r)?.size ?? 0) + (Te(this, r)?.size ?? 0) + (Te(this)?.size ?? 0);
        continue;
      }
      typeof r < "u" && ye(r), t += K.get(this).size;
      for (let i of $.get(this).values())
        t += i.size;
      for (let i of W.get(this).values())
        t += i.size;
    }
    return t;
  }
  bindMethods(e, t) {
    if (typeof e != "object" || e === null)
      throw new TypeError("`target` must be an object");
    t = nn(t);
    for (let r of t) {
      if (e[r] !== void 0)
        throw new Error(`The property \`${r}\` already exists on \`target\``);
      Object.defineProperty(e, r, { enumerable: false, value: this[r].bind(this) });
    }
  }
};
var sn = Object.getOwnPropertyNames(ee.prototype).filter((n6) => n6 !== "constructor");
Object.defineProperty(ee, "listenerAdded", { value: it, writable: false, enumerable: true, configurable: false });
Object.defineProperty(ee, "listenerRemoved", { value: st, writable: false, enumerable: true, configurable: false });
var te = class {
  constructor() {
    this.messageHandlers = {};
    this._isClient = false;
    this.Resource = Ae;
    this.events = new ee();
    this.intentMap = /* @__PURE__ */ new Map();
    this._messageListenerHandler = (e) => {
      if (e.origin !== window.location.origin) {
        console.warn(`Dropping Message received from an unknown origin: ${e.origin}`);
        return;
      }
      try {
        let t = e.data, r = this.messageHandlers[t.type];
        r ? r.call(this, t, e.source) : console.warn(`No handler found for message type: ${t.type}`);
      } catch (t) {
        console.error("Error processing the message:", t);
      }
    };
    this._initMessageListener(), this._httpClient = new et();
  }
  unload() {
    window.removeEventListener("message", this._messageListenerHandler), console.log("Message listener removed.");
  }
  _initMessageListener() {
    window.addEventListener("message", this._messageListenerHandler, false), console.log("Message listener initialized.");
  }
  addMessageHandler(e, t) {
    this.messageHandlers[e] = t, console.log(`Message handler added for type: ${e}`);
  }
  send(e, t) {
    this._isClient ? (console.log("Sending message from client:", e), e.token = this.token, e = JSON.parse(JSON.stringify(e)), window.parent.postMessage(e, "*")) : console.log("Attempted to send a message from the host without specifying a target.");
  }
  async runServerScript(e, t) {
    return await (await this._httpClient.executeRequest("/api/v1/mercenaries/runscript/" + e, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) })).json();
  }
  canEditFile(e) {
    return e ? this.intentMap.has(`file:edit:${e.mimeType}`) : false;
  }
  canViewFile(e) {
    return e ? this.intentMap.has(`file:show:${e.mimeType}`) : false;
  }
  async getFileObject(e) {
    try {
      let r = await (await this._httpClient.executeRequest("/fid/" + e + "?obj=true", { method: "GET", headers: { "Content-Type": "application/json" } })).json();
      return r ? new $e(r) : (console.warn(`No valid file object found for fid ${e}`), null);
    } catch (t) {
      return console.error(t), null;
    }
  }
  async getFileBlob(e) {
    try {
      return await (await this._httpClient.executeRequest("/fid/" + e + "?download=true")).blob();
    } catch (t) {
      return console.error(t), null;
    }
  }
  async downloadFile(e, t) {
    let r = e.fid, i = t || e.fileName;
    fetch("/fid/" + r + "?download=true").then((s) => s.blob()).then((s) => {
      let o = URL.createObjectURL(s), a = document.createElement("a");
      a.href = o, a.download = i, document.body.appendChild(a), a.click(), document.body.removeChild(a);
    }).catch((s) => console.error(s));
  }
};
te.Resource = Ae;
var at = class extends te {
  constructor(t) {
    super();
    this._isClient = true, this._extensionId = t;
    let r = new URLSearchParams(location.search);
    this.options = JSON.parse(r.get("o") || "{}"), this.args = JSON.parse(r.get("q") || "{}"), r.has("omniHash") ? this.token = r.get("omniHash") : (console.warn("No omniHash found in the query string, this is not a window opened by OmniHost"), this.token = t + (/* @__PURE__ */ new Date()).getTime().toString());
  }
  get extensionId() {
    return this._extensionId;
  }
  init() {
    console.log("OmniSDKClient initialized for " + this.extensionId + ".");
    let t = window.localStorage.getItem("omni-intentMap");
    if (t) {
      let r = JSON.parse(t);
      r && r.length > 0 && (this.intentMap = new Map(r));
    }
    return this.addMessageHandler("host_cscript_response", this._handleClientScriptResponse), this.addMessageHandler("host_sync_data", this._handleSyncData), this.register(), this;
  }
  register() {
    this.token && this.send({ type: "client_registration", token: this.token });
  }
  deregister(t) {
    this.send({ type: "client_deregistration", token: t });
  }
  sendChatMessage(t, r = "text/markdown", i, s) {
    let o = { type: "client_send_chat", message: { content: t, type: r, attachments: i, flags: s } };
    this.send(o);
  }
  async runClientScript(t, r) {
    let i = { type: "client_run_cscript", script: t, args: r, invokeId: this.extensionId + (/* @__PURE__ */ new Date()).getTime().toString() };
    return new Promise((s, o) => {
      this.send(i), this.events.once("host_cscript_response:" + i.invokeId).then((a) => {
        s(a);
      });
    });
  }
  async _handleSyncData(t) {
    if (t.type !== "host_sync_data")
      return;
    let r = t;
    this.intentMap = new Map(r.frame), await this.events.emit("data_updated", [{ property: "intentMap" }]);
  }
  async _handleClientScriptResponse(t) {
    if (t.type !== "host_cscript_response")
      return;
    let r = t;
    await this.events.emit("host_cscript_response:" + r.invokeId, r.result);
  }
  hide() {
    let t = { type: "client_window_message", action: "hide", args: {} };
    this.send(t);
  }
  show() {
    let t = { type: "client_window_message", action: "show", args: {} };
    this.send(t);
  }
  close() {
    let t = { type: "client_window_message", action: "close", args: {} };
    this.send(t);
  }
  signalIntent(t, r, i, s = {}) {
    let o = { type: "client_signal_intent", intent: t, target: r, opts: s || {}, payload: i };
    this.send(o);
  }
  showToast(t, r) {
    let i = { type: "client_show_toast", message: t, options: r };
    this.send(i);
  }
  async runExtensionScript(t, r) {
    let i = await this._httpClient.executeRequest(`/api/v1/mercenaries/runscript/${this.extensionId}:` + t, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(r) });
    if (!i.ok)
      throw new Error("Server error: HTTP status " + i.status);
    return await i.json();
  }
};
var Jt = ms(Qi(), 1);
function Yr() {
  return { async: false, baseUrl: null, breaks: false, extensions: null, gfm: true, headerIds: false, headerPrefix: "", highlight: null, hooks: null, langPrefix: "language-", mangle: false, pedantic: false, renderer: null, sanitize: false, sanitizer: null, silent: false, smartypants: false, tokenizer: null, walkTokens: null, xhtml: false };
}
var ge = Yr();
function rs(n6) {
  ge = n6;
}
var ns = /[&<>"']/;
var hl = new RegExp(ns.source, "g");
var is = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/;
var pl = new RegExp(is.source, "g");
var fl = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
var Yi = (n6) => fl[n6];
function L(n6, e) {
  if (e) {
    if (ns.test(n6))
      return n6.replace(hl, Yi);
  } else if (is.test(n6))
    return n6.replace(pl, Yi);
  return n6;
}
var dl = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function ss(n6) {
  return n6.replace(dl, (e, t) => (t = t.toLowerCase(), t === "colon" ? ":" : t.charAt(0) === "#" ? t.charAt(1) === "x" ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : ""));
}
var gl = /(^|[^\[])\^/g;
function b(n6, e) {
  n6 = typeof n6 == "string" ? n6 : n6.source, e = e || "";
  let t = { replace: (r, i) => (i = typeof i == "object" && "source" in i ? i.source : i, i = i.replace(gl, "$1"), n6 = n6.replace(r, i), t), getRegex: () => new RegExp(n6, e) };
  return t;
}
var ml = /[^\w:]/g;
var _l = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
function Xi(n6, e, t) {
  if (n6) {
    let r;
    try {
      r = decodeURIComponent(ss(t)).replace(ml, "").toLowerCase();
    } catch {
      return null;
    }
    if (r.indexOf("javascript:") === 0 || r.indexOf("vbscript:") === 0 || r.indexOf("data:") === 0)
      return null;
  }
  e && !_l.test(t) && (t = Sl(e, t));
  try {
    t = encodeURI(t).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return t;
}
var Vt = {};
var yl = /^[^:]+:\/*[^/]*$/;
var vl = /^([^:]+:)[\s\S]*$/;
var kl = /^([^:]+:\/*[^/]*)[\s\S]*$/;
function Sl(n6, e) {
  Vt[" " + n6] || (yl.test(n6) ? Vt[" " + n6] = n6 + "/" : Vt[" " + n6] = Kt(n6, "/", true)), n6 = Vt[" " + n6];
  let t = n6.indexOf(":") === -1;
  return e.substring(0, 2) === "//" ? t ? e : n6.replace(vl, "$1") + e : e.charAt(0) === "/" ? t ? e : n6.replace(kl, "$1") + e : n6 + e;
}
var Zt = { exec: () => null };
function $i(n6, e) {
  let t = n6.replace(/\|/g, (s, o, a) => {
    let u = false, l = o;
    for (; --l >= 0 && a[l] === "\\"; )
      u = !u;
    return u ? "|" : " |";
  }), r = t.split(/ \|/), i = 0;
  if (r[0].trim() || r.shift(), r.length > 0 && !r[r.length - 1].trim() && r.pop(), e)
    if (r.length > e)
      r.splice(e);
    else
      for (; r.length < e; )
        r.push("");
  for (; i < r.length; i++)
    r[i] = r[i].trim().replace(/\\\|/g, "|");
  return r;
}
function Kt(n6, e, t) {
  let r = n6.length;
  if (r === 0)
    return "";
  let i = 0;
  for (; i < r; ) {
    let s = n6.charAt(r - i - 1);
    if (s === e && !t)
      i++;
    else if (s !== e && t)
      i++;
    else
      break;
  }
  return n6.slice(0, r - i);
}
function bl(n6, e) {
  if (n6.indexOf(e[1]) === -1)
    return -1;
  let t = 0;
  for (let r = 0; r < n6.length; r++)
    if (n6[r] === "\\")
      r++;
    else if (n6[r] === e[0])
      t++;
    else if (n6[r] === e[1] && (t--, t < 0))
      return r;
  return -1;
}
function wl(n6, e) {
  !n6 || n6.silent || (e && console.warn("marked(): callback is deprecated since version 5.0.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/using_pro#async"), (n6.sanitize || n6.sanitizer) && console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options"), (n6.highlight || n6.langPrefix !== "language-") && console.warn("marked(): highlight and langPrefix parameters are deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-highlight."), n6.mangle && console.warn("marked(): mangle parameter is enabled by default, but is deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install https://www.npmjs.com/package/marked-mangle, or disable by setting `{mangle: false}`."), n6.baseUrl && console.warn("marked(): baseUrl parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-base-url."), n6.smartypants && console.warn("marked(): smartypants parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-smartypants."), n6.xhtml && console.warn("marked(): xhtml parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-xhtml."), (n6.headerIds || n6.headerPrefix) && console.warn("marked(): headerIds and headerPrefix parameters enabled by default, but are deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install  https://www.npmjs.com/package/marked-gfm-heading-id, or disable by setting `{headerIds: false}`."));
}
function es(n6, e, t, r) {
  let i = e.href, s = e.title ? L(e.title) : null, o = n6[1].replace(/\\([\[\]])/g, "$1");
  if (n6[0].charAt(0) !== "!") {
    r.state.inLink = true;
    let a = { type: "link", raw: t, href: i, title: s, text: o, tokens: r.inlineTokens(o) };
    return r.state.inLink = false, a;
  }
  return { type: "image", raw: t, href: i, title: s, text: L(o) };
}
function xl(n6, e) {
  let t = n6.match(/^(\s+)(?:```)/);
  if (t === null)
    return e;
  let r = t[1];
  return e.split(`
`).map((i) => {
    let s = i.match(/^\s+/);
    if (s === null)
      return i;
    let [o] = s;
    return o.length >= r.length ? i.slice(r.length) : i;
  }).join(`
`);
}
var Oe = class {
  constructor(e) {
    S(this, "options");
    S(this, "rules");
    S(this, "lexer");
    this.options = e || ge;
  }
  space(e) {
    let t = this.rules.block.newline.exec(e);
    if (t && t[0].length > 0)
      return { type: "space", raw: t[0] };
  }
  code(e) {
    let t = this.rules.block.code.exec(e);
    if (t) {
      let r = t[0].replace(/^ {1,4}/gm, "");
      return { type: "code", raw: t[0], codeBlockStyle: "indented", text: this.options.pedantic ? r : Kt(r, `
`) };
    }
  }
  fences(e) {
    let t = this.rules.block.fences.exec(e);
    if (t) {
      let r = t[0], i = xl(r, t[3] || "");
      return { type: "code", raw: r, lang: t[2] ? t[2].trim().replace(this.rules.inline._escapes, "$1") : t[2], text: i };
    }
  }
  heading(e) {
    let t = this.rules.block.heading.exec(e);
    if (t) {
      let r = t[2].trim();
      if (/#$/.test(r)) {
        let i = Kt(r, "#");
        (this.options.pedantic || !i || / $/.test(i)) && (r = i.trim());
      }
      return { type: "heading", raw: t[0], depth: t[1].length, text: r, tokens: this.lexer.inline(r) };
    }
  }
  hr(e) {
    let t = this.rules.block.hr.exec(e);
    if (t)
      return { type: "hr", raw: t[0] };
  }
  blockquote(e) {
    let t = this.rules.block.blockquote.exec(e);
    if (t) {
      let r = t[0].replace(/^ *>[ \t]?/gm, ""), i = this.lexer.state.top;
      this.lexer.state.top = true;
      let s = this.lexer.blockTokens(r);
      return this.lexer.state.top = i, { type: "blockquote", raw: t[0], tokens: s, text: r };
    }
  }
  list(e) {
    let t = this.rules.block.list.exec(e);
    if (t) {
      let r = t[1].trim(), i = r.length > 1, s = { type: "list", raw: "", ordered: i, start: i ? +r.slice(0, -1) : "", loose: false, items: [] };
      r = i ? `\\d{1,9}\\${r.slice(-1)}` : `\\${r}`, this.options.pedantic && (r = i ? r : "[*+-]");
      let o = new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`), a = "", u = "", l = false;
      for (; e; ) {
        let h = false;
        if (!(t = o.exec(e)) || this.rules.block.hr.test(e))
          break;
        a = t[0], e = e.substring(a.length);
        let c = t[2].split(`
`, 1)[0].replace(/^\t+/, (C) => " ".repeat(3 * C.length)), p = e.split(`
`, 1)[0], f = 0;
        this.options.pedantic ? (f = 2, u = c.trimLeft()) : (f = t[2].search(/[^ ]/), f = f > 4 ? 1 : f, u = c.slice(f), f += t[1].length);
        let _ = false;
        if (!c && /^ *$/.test(p) && (a += p + `
`, e = e.substring(p.length + 1), h = true), !h) {
          let C = new RegExp(`^ {0,${Math.min(3, f - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), z = new RegExp(`^ {0,${Math.min(3, f - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), ie = new RegExp(`^ {0,${Math.min(3, f - 1)}}(?:\`\`\`|~~~)`), P = new RegExp(`^ {0,${Math.min(3, f - 1)}}#`);
          for (; e; ) {
            let se = e.split(`
`, 1)[0];
            if (p = se, this.options.pedantic && (p = p.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), ie.test(p) || P.test(p) || C.test(p) || z.test(e))
              break;
            if (p.search(/[^ ]/) >= f || !p.trim())
              u += `
` + p.slice(f);
            else {
              if (_ || c.search(/[^ ]/) >= 4 || ie.test(c) || P.test(c) || z.test(c))
                break;
              u += `
` + p;
            }
            !_ && !p.trim() && (_ = true), a += se + `
`, e = e.substring(se.length + 1), c = p.slice(f);
          }
        }
        s.loose || (l ? s.loose = true : /\n *\n *$/.test(a) && (l = true));
        let v = null, x;
        this.options.gfm && (v = /^\[[ xX]\] /.exec(u), v && (x = v[0] !== "[ ] ", u = u.replace(/^\[[ xX]\] +/, ""))), s.items.push({ type: "list_item", raw: a, task: !!v, checked: x, loose: false, text: u, tokens: [] }), s.raw += a;
      }
      s.items[s.items.length - 1].raw = a.trimRight(), s.items[s.items.length - 1].text = u.trimRight(), s.raw = s.raw.trimRight();
      for (let h = 0; h < s.items.length; h++)
        if (this.lexer.state.top = false, s.items[h].tokens = this.lexer.blockTokens(s.items[h].text, []), !s.loose) {
          let c = s.items[h].tokens.filter((f) => f.type === "space"), p = c.length > 0 && c.some((f) => /\n.*\n/.test(f.raw));
          s.loose = p;
        }
      if (s.loose)
        for (let h = 0; h < s.items.length; h++)
          s.items[h].loose = true;
      return s;
    }
  }
  html(e) {
    let t = this.rules.block.html.exec(e);
    if (t) {
      let r = { type: "html", block: true, raw: t[0], pre: !this.options.sanitizer && (t[1] === "pre" || t[1] === "script" || t[1] === "style"), text: t[0] };
      if (this.options.sanitize) {
        let i = this.options.sanitizer ? this.options.sanitizer(t[0]) : L(t[0]), s = r;
        s.type = "paragraph", s.text = i, s.tokens = this.lexer.inline(i);
      }
      return r;
    }
  }
  def(e) {
    let t = this.rules.block.def.exec(e);
    if (t) {
      let r = t[1].toLowerCase().replace(/\s+/g, " "), i = t[2] ? t[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline._escapes, "$1") : "", s = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline._escapes, "$1") : t[3];
      return { type: "def", tag: r, raw: t[0], href: i, title: s };
    }
  }
  table(e) {
    let t = this.rules.block.table.exec(e);
    if (t) {
      let r = { type: "table", raw: t[0], header: $i(t[1]).map((i) => ({ text: i, tokens: [] })), align: t[2].replace(/^ *|\| *$/g, "").split(/ *\| */), rows: t[3] && t[3].trim() ? t[3].replace(/\n[ \t]*$/, "").split(`
`) : [] };
      if (r.header.length === r.align.length) {
        let i = r.align.length, s, o, a, u;
        for (s = 0; s < i; s++) {
          let l = r.align[s];
          l && (/^ *-+: *$/.test(l) ? r.align[s] = "right" : /^ *:-+: *$/.test(l) ? r.align[s] = "center" : /^ *:-+ *$/.test(l) ? r.align[s] = "left" : r.align[s] = null);
        }
        for (i = r.rows.length, s = 0; s < i; s++)
          r.rows[s] = $i(r.rows[s], r.header.length).map((l) => ({ text: l, tokens: [] }));
        for (i = r.header.length, o = 0; o < i; o++)
          r.header[o].tokens = this.lexer.inline(r.header[o].text);
        for (i = r.rows.length, o = 0; o < i; o++)
          for (u = r.rows[o], a = 0; a < u.length; a++)
            u[a].tokens = this.lexer.inline(u[a].text);
        return r;
      }
    }
  }
  lheading(e) {
    let t = this.rules.block.lheading.exec(e);
    if (t)
      return { type: "heading", raw: t[0], depth: t[2].charAt(0) === "=" ? 1 : 2, text: t[1], tokens: this.lexer.inline(t[1]) };
  }
  paragraph(e) {
    let t = this.rules.block.paragraph.exec(e);
    if (t) {
      let r = t[1].charAt(t[1].length - 1) === `
` ? t[1].slice(0, -1) : t[1];
      return { type: "paragraph", raw: t[0], text: r, tokens: this.lexer.inline(r) };
    }
  }
  text(e) {
    let t = this.rules.block.text.exec(e);
    if (t)
      return { type: "text", raw: t[0], text: t[0], tokens: this.lexer.inline(t[0]) };
  }
  escape(e) {
    let t = this.rules.inline.escape.exec(e);
    if (t)
      return { type: "escape", raw: t[0], text: L(t[1]) };
  }
  tag(e) {
    let t = this.rules.inline.tag.exec(e);
    if (t)
      return !this.lexer.state.inLink && /^<a /i.test(t[0]) ? this.lexer.state.inLink = true : this.lexer.state.inLink && /^<\/a>/i.test(t[0]) && (this.lexer.state.inLink = false), !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(t[0]) ? this.lexer.state.inRawBlock = true : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0]) && (this.lexer.state.inRawBlock = false), { type: this.options.sanitize ? "text" : "html", raw: t[0], inLink: this.lexer.state.inLink, inRawBlock: this.lexer.state.inRawBlock, block: false, text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(t[0]) : L(t[0]) : t[0] };
  }
  link(e) {
    let t = this.rules.inline.link.exec(e);
    if (t) {
      let r = t[2].trim();
      if (!this.options.pedantic && /^</.test(r)) {
        if (!/>$/.test(r))
          return;
        let o = Kt(r.slice(0, -1), "\\");
        if ((r.length - o.length) % 2 === 0)
          return;
      } else {
        let o = bl(t[2], "()");
        if (o > -1) {
          let u = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + o;
          t[2] = t[2].substring(0, o), t[0] = t[0].substring(0, u).trim(), t[3] = "";
        }
      }
      let i = t[2], s = "";
      if (this.options.pedantic) {
        let o = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);
        o && (i = o[1], s = o[3]);
      } else
        s = t[3] ? t[3].slice(1, -1) : "";
      return i = i.trim(), /^</.test(i) && (this.options.pedantic && !/>$/.test(r) ? i = i.slice(1) : i = i.slice(1, -1)), es(t, { href: i && i.replace(this.rules.inline._escapes, "$1"), title: s && s.replace(this.rules.inline._escapes, "$1") }, t[0], this.lexer);
    }
  }
  reflink(e, t) {
    let r;
    if ((r = this.rules.inline.reflink.exec(e)) || (r = this.rules.inline.nolink.exec(e))) {
      let i = (r[2] || r[1]).replace(/\s+/g, " ");
      if (i = t[i.toLowerCase()], !i) {
        let s = r[0].charAt(0);
        return { type: "text", raw: s, text: s };
      }
      return es(r, i, r[0], this.lexer);
    }
  }
  emStrong(e, t, r = "") {
    let i = this.rules.inline.emStrong.lDelim.exec(e);
    if (!i || i[3] && r.match(/[\p{L}\p{N}]/u))
      return;
    if (!(i[1] || i[2] || "") || !r || this.rules.inline.punctuation.exec(r)) {
      let o = [...i[0]].length - 1, a, u, l = o, h = 0, c = i[0][0] === "*" ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
      for (c.lastIndex = 0, t = t.slice(-1 * e.length + o); (i = c.exec(t)) != null; ) {
        if (a = i[1] || i[2] || i[3] || i[4] || i[5] || i[6], !a)
          continue;
        if (u = [...a].length, i[3] || i[4]) {
          l += u;
          continue;
        } else if ((i[5] || i[6]) && o % 3 && !((o + u) % 3)) {
          h += u;
          continue;
        }
        if (l -= u, l > 0)
          continue;
        u = Math.min(u, u + l + h);
        let p = [...e].slice(0, o + i.index + u + 1).join("");
        if (Math.min(o, u) % 2) {
          let _ = p.slice(1, -1);
          return { type: "em", raw: p, text: _, tokens: this.lexer.inlineTokens(_) };
        }
        let f = p.slice(2, -2);
        return { type: "strong", raw: p, text: f, tokens: this.lexer.inlineTokens(f) };
      }
    }
  }
  codespan(e) {
    let t = this.rules.inline.code.exec(e);
    if (t) {
      let r = t[2].replace(/\n/g, " "), i = /[^ ]/.test(r), s = /^ /.test(r) && / $/.test(r);
      return i && s && (r = r.substring(1, r.length - 1)), r = L(r, true), { type: "codespan", raw: t[0], text: r };
    }
  }
  br(e) {
    let t = this.rules.inline.br.exec(e);
    if (t)
      return { type: "br", raw: t[0] };
  }
  del(e) {
    let t = this.rules.inline.del.exec(e);
    if (t)
      return { type: "del", raw: t[0], text: t[2], tokens: this.lexer.inlineTokens(t[2]) };
  }
  autolink(e, t) {
    let r = this.rules.inline.autolink.exec(e);
    if (r) {
      let i, s;
      return r[2] === "@" ? (i = L(this.options.mangle ? t(r[1]) : r[1]), s = "mailto:" + i) : (i = L(r[1]), s = i), { type: "link", raw: r[0], text: i, href: s, tokens: [{ type: "text", raw: i, text: i }] };
    }
  }
  url(e, t) {
    let r;
    if (r = this.rules.inline.url.exec(e)) {
      let i, s;
      if (r[2] === "@")
        i = L(this.options.mangle ? t(r[0]) : r[0]), s = "mailto:" + i;
      else {
        let o;
        do
          o = r[0], r[0] = this.rules.inline._backpedal.exec(r[0])[0];
        while (o !== r[0]);
        i = L(r[0]), r[1] === "www." ? s = "http://" + r[0] : s = r[0];
      }
      return { type: "link", raw: r[0], text: i, href: s, tokens: [{ type: "text", raw: i, text: i }] };
    }
  }
  inlineText(e, t) {
    let r = this.rules.inline.text.exec(e);
    if (r) {
      let i;
      return this.lexer.state.inRawBlock ? i = this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(r[0]) : L(r[0]) : r[0] : i = L(this.options.smartypants ? t(r[0]) : r[0]), { type: "text", raw: r[0], text: i };
    }
  }
};
var m = { newline: /^(?: *(?:\n|$))+/, code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/, fences: /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/, list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/, html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", def: /^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/, table: Zt, lheading: /^((?:(?!^bull ).|\n(?!\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, text: /^[^\n]+/ };
m._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
m._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
m.def = b(m.def).replace("label", m._label).replace("title", m._title).getRegex();
m.bullet = /(?:[*+-]|\d{1,9}[.)])/;
m.listItemStart = b(/^( *)(bull) */).replace("bull", m.bullet).getRegex();
m.list = b(m.list).replace(/bull/g, m.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + m.def.source + ")").getRegex();
m._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
m._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
m.html = b(m.html, "i").replace("comment", m._comment).replace("tag", m._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
m.lheading = b(m.lheading).replace(/bull/g, m.bullet).getRegex();
m.paragraph = b(m._paragraph).replace("hr", m.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", m._tag).getRegex();
m.blockquote = b(m.blockquote).replace("paragraph", m.paragraph).getRegex();
m.normal = { ...m };
m.gfm = { ...m.normal, table: "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)" };
m.gfm.table = b(m.gfm.table).replace("hr", m.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", m._tag).getRegex();
m.gfm.paragraph = b(m._paragraph).replace("hr", m.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("table", m.gfm.table).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", m._tag).getRegex();
m.pedantic = { ...m.normal, html: b(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", m._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: Zt, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: b(m.normal._paragraph).replace("hr", m.hr).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", m.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex() };
var d = { escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/, url: Zt, tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>", link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/, reflink: /^!?\[(label)\]\[(ref)\]/, nolink: /^!?\[(ref)\](?:\[\])?/, reflinkSearch: "reflink|nolink(?!\\()", emStrong: { lDelim: /^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, rDelimAst: /^[^_*]*?__[^_*]*?\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\*)[punct](\*+)(?=[\s]|$)|[^punct\s](\*+)(?!\*)(?=[punct\s]|$)|(?!\*)[punct\s](\*+)(?=[^punct\s])|[\s](\*+)(?!\*)(?=[punct])|(?!\*)[punct](\*+)(?!\*)(?=[punct])|[^punct\s](\*+)(?=[^punct\s])/, rDelimUnd: /^[^_*]*?\*\*[^_*]*?_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\s]|$)|[^punct\s](_+)(?!_)(?=[punct\s]|$)|(?!_)[punct\s](_+)(?=[^punct\s])|[\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])/ }, code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, br: /^( {2,}|\\)\n(?!\s*$)/, del: Zt, text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, punctuation: /^((?![*_])[\spunctuation])/ };
d._punctuation = "\\p{P}$+<=>`^|~";
d.punctuation = b(d.punctuation, "u").replace(/punctuation/g, d._punctuation).getRegex();
d.blockSkip = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g;
d.anyPunctuation = /\\[punct]/g;
d._escapes = /\\([punct])/g;
d._comment = b(m._comment).replace("(?:-->|$)", "-->").getRegex();
d.emStrong.lDelim = b(d.emStrong.lDelim, "u").replace(/punct/g, d._punctuation).getRegex();
d.emStrong.rDelimAst = b(d.emStrong.rDelimAst, "gu").replace(/punct/g, d._punctuation).getRegex();
d.emStrong.rDelimUnd = b(d.emStrong.rDelimUnd, "gu").replace(/punct/g, d._punctuation).getRegex();
d.anyPunctuation = b(d.anyPunctuation, "gu").replace(/punct/g, d._punctuation).getRegex();
d._escapes = b(d._escapes, "gu").replace(/punct/g, d._punctuation).getRegex();
d._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
d._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
d.autolink = b(d.autolink).replace("scheme", d._scheme).replace("email", d._email).getRegex();
d._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
d.tag = b(d.tag).replace("comment", d._comment).replace("attribute", d._attribute).getRegex();
d._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
d._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
d._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
d.link = b(d.link).replace("label", d._label).replace("href", d._href).replace("title", d._title).getRegex();
d.reflink = b(d.reflink).replace("label", d._label).replace("ref", m._label).getRegex();
d.nolink = b(d.nolink).replace("ref", m._label).getRegex();
d.reflinkSearch = b(d.reflinkSearch, "g").replace("reflink", d.reflink).replace("nolink", d.nolink).getRegex();
d.normal = { ...d };
d.pedantic = { ...d.normal, strong: { start: /^__|\*\*/, middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/, endAst: /\*\*(?!\*)/g, endUnd: /__(?!_)/g }, em: { start: /^_|\*/, middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/, endAst: /\*(?!\*)/g, endUnd: /_(?!_)/g }, link: b(/^!?\[(label)\]\((.*?)\)/).replace("label", d._label).getRegex(), reflink: b(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", d._label).getRegex() };
d.gfm = { ...d.normal, escape: b(d.escape).replace("])", "~|])").getRegex(), _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/, url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/, text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/ };
d.gfm.url = b(d.gfm.url, "i").replace("email", d.gfm._extended_email).getRegex();
d.breaks = { ...d.gfm, br: b(d.br).replace("{2,}", "*").getRegex(), text: b(d.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() };
function Cl(n6) {
  return n6.replace(/---/g, "\u2014").replace(/--/g, "\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018").replace(/'/g, "\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201C").replace(/"/g, "\u201D").replace(/\.{3}/g, "\u2026");
}
function ts(n6) {
  let e = "";
  for (let t = 0; t < n6.length; t++) {
    let r = Math.random() > 0.5 ? "x" + n6.charCodeAt(t).toString(16) : n6.charCodeAt(t).toString();
    e += "&#" + r + ";";
  }
  return e;
}
var Y = class n4 {
  constructor(e) {
    S(this, "tokens");
    S(this, "options");
    S(this, "state");
    S(this, "tokenizer");
    S(this, "inlineQueue");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || ge, this.options.tokenizer = this.options.tokenizer || new Oe(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: false, inRawBlock: false, top: true };
    let t = { block: m.normal, inline: d.normal };
    this.options.pedantic ? (t.block = m.pedantic, t.inline = d.pedantic) : this.options.gfm && (t.block = m.gfm, this.options.breaks ? t.inline = d.breaks : t.inline = d.gfm), this.tokenizer.rules = t;
  }
  static get rules() {
    return { block: m, inline: d };
  }
  static lex(e, t) {
    return new n4(t).lex(e);
  }
  static lexInline(e, t) {
    return new n4(t).inlineTokens(e);
  }
  lex(e) {
    e = e.replace(/\r\n|\r/g, `
`), this.blockTokens(e, this.tokens);
    let t;
    for (; t = this.inlineQueue.shift(); )
      this.inlineTokens(t.src, t.tokens);
    return this.tokens;
  }
  blockTokens(e, t = []) {
    this.options.pedantic ? e = e.replace(/\t/g, "    ").replace(/^ +$/gm, "") : e = e.replace(/^( *)(\t+)/gm, (a, u, l) => u + "    ".repeat(l.length));
    let r, i, s, o;
    for (; e; )
      if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((a) => (r = a.call({ lexer: this }, e, t)) ? (e = e.substring(r.raw.length), t.push(r), true) : false))) {
        if (r = this.tokenizer.space(e)) {
          e = e.substring(r.raw.length), r.raw.length === 1 && t.length > 0 ? t[t.length - 1].raw += `
` : t.push(r);
          continue;
        }
        if (r = this.tokenizer.code(e)) {
          e = e.substring(r.raw.length), i = t[t.length - 1], i && (i.type === "paragraph" || i.type === "text") ? (i.raw += `
` + r.raw, i.text += `
` + r.text, this.inlineQueue[this.inlineQueue.length - 1].src = i.text) : t.push(r);
          continue;
        }
        if (r = this.tokenizer.fences(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.heading(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.hr(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.blockquote(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.list(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.html(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.def(e)) {
          e = e.substring(r.raw.length), i = t[t.length - 1], i && (i.type === "paragraph" || i.type === "text") ? (i.raw += `
` + r.raw, i.text += `
` + r.raw, this.inlineQueue[this.inlineQueue.length - 1].src = i.text) : this.tokens.links[r.tag] || (this.tokens.links[r.tag] = { href: r.href, title: r.title });
          continue;
        }
        if (r = this.tokenizer.table(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.lheading(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (s = e, this.options.extensions && this.options.extensions.startBlock) {
          let a = 1 / 0, u = e.slice(1), l;
          this.options.extensions.startBlock.forEach((h) => {
            l = h.call({ lexer: this }, u), typeof l == "number" && l >= 0 && (a = Math.min(a, l));
          }), a < 1 / 0 && a >= 0 && (s = e.substring(0, a + 1));
        }
        if (this.state.top && (r = this.tokenizer.paragraph(s))) {
          i = t[t.length - 1], o && i.type === "paragraph" ? (i.raw += `
` + r.raw, i.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = i.text) : t.push(r), o = s.length !== e.length, e = e.substring(r.raw.length);
          continue;
        }
        if (r = this.tokenizer.text(e)) {
          e = e.substring(r.raw.length), i = t[t.length - 1], i && i.type === "text" ? (i.raw += `
` + r.raw, i.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = i.text) : t.push(r);
          continue;
        }
        if (e) {
          let a = "Infinite loop on byte: " + e.charCodeAt(0);
          if (this.options.silent) {
            console.error(a);
            break;
          } else
            throw new Error(a);
        }
      }
    return this.state.top = true, t;
  }
  inline(e, t = []) {
    return this.inlineQueue.push({ src: e, tokens: t }), t;
  }
  inlineTokens(e, t = []) {
    let r, i, s, o = e, a, u, l;
    if (this.tokens.links) {
      let h = Object.keys(this.tokens.links);
      if (h.length > 0)
        for (; (a = this.tokenizer.rules.inline.reflinkSearch.exec(o)) != null; )
          h.includes(a[0].slice(a[0].lastIndexOf("[") + 1, -1)) && (o = o.slice(0, a.index) + "[" + "a".repeat(a[0].length - 2) + "]" + o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (a = this.tokenizer.rules.inline.blockSkip.exec(o)) != null; )
      o = o.slice(0, a.index) + "[" + "a".repeat(a[0].length - 2) + "]" + o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (a = this.tokenizer.rules.inline.anyPunctuation.exec(o)) != null; )
      o = o.slice(0, a.index) + "++" + o.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; e; )
      if (u || (l = ""), u = false, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((h) => (r = h.call({ lexer: this }, e, t)) ? (e = e.substring(r.raw.length), t.push(r), true) : false))) {
        if (r = this.tokenizer.escape(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.tag(e)) {
          e = e.substring(r.raw.length), i = t[t.length - 1], i && r.type === "text" && i.type === "text" ? (i.raw += r.raw, i.text += r.text) : t.push(r);
          continue;
        }
        if (r = this.tokenizer.link(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.reflink(e, this.tokens.links)) {
          e = e.substring(r.raw.length), i = t[t.length - 1], i && r.type === "text" && i.type === "text" ? (i.raw += r.raw, i.text += r.text) : t.push(r);
          continue;
        }
        if (r = this.tokenizer.emStrong(e, o, l)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.codespan(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.br(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.del(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.autolink(e, ts)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (!this.state.inLink && (r = this.tokenizer.url(e, ts))) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (s = e, this.options.extensions && this.options.extensions.startInline) {
          let h = 1 / 0, c = e.slice(1), p;
          this.options.extensions.startInline.forEach((f) => {
            p = f.call({ lexer: this }, c), typeof p == "number" && p >= 0 && (h = Math.min(h, p));
          }), h < 1 / 0 && h >= 0 && (s = e.substring(0, h + 1));
        }
        if (r = this.tokenizer.inlineText(s, Cl)) {
          e = e.substring(r.raw.length), r.raw.slice(-1) !== "_" && (l = r.raw.slice(-1)), u = true, i = t[t.length - 1], i && i.type === "text" ? (i.raw += r.raw, i.text += r.text) : t.push(r);
          continue;
        }
        if (e) {
          let h = "Infinite loop on byte: " + e.charCodeAt(0);
          if (this.options.silent) {
            console.error(h);
            break;
          } else
            throw new Error(h);
        }
      }
    return t;
  }
};
var Le = class {
  constructor(e) {
    S(this, "options");
    this.options = e || ge;
  }
  code(e, t, r) {
    let i = (t || "").match(/^\S*/)?.[0];
    if (this.options.highlight) {
      let s = this.options.highlight(e, i);
      s != null && s !== e && (r = true, e = s);
    }
    return e = e.replace(/\n$/, "") + `
`, i ? '<pre><code class="' + this.options.langPrefix + L(i) + '">' + (r ? e : L(e, true)) + `</code></pre>
` : "<pre><code>" + (r ? e : L(e, true)) + `</code></pre>
`;
  }
  blockquote(e) {
    return `<blockquote>
${e}</blockquote>
`;
  }
  html(e, t) {
    return e;
  }
  heading(e, t, r, i) {
    if (this.options.headerIds) {
      let s = this.options.headerPrefix + i.slug(r);
      return `<h${t} id="${s}">${e}</h${t}>
`;
    }
    return `<h${t}>${e}</h${t}>
`;
  }
  hr() {
    return this.options.xhtml ? `<hr/>
` : `<hr>
`;
  }
  list(e, t, r) {
    let i = t ? "ol" : "ul", s = t && r !== 1 ? ' start="' + r + '"' : "";
    return "<" + i + s + `>
` + e + "</" + i + `>
`;
  }
  listitem(e, t, r) {
    return `<li>${e}</li>
`;
  }
  checkbox(e) {
    return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> ";
  }
  paragraph(e) {
    return `<p>${e}</p>
`;
  }
  table(e, t) {
    return t && (t = `<tbody>${t}</tbody>`), `<table>
<thead>
` + e + `</thead>
` + t + `</table>
`;
  }
  tablerow(e) {
    return `<tr>
${e}</tr>
`;
  }
  tablecell(e, t) {
    let r = t.header ? "th" : "td";
    return (t.align ? `<${r} align="${t.align}">` : `<${r}>`) + e + `</${r}>
`;
  }
  strong(e) {
    return `<strong>${e}</strong>`;
  }
  em(e) {
    return `<em>${e}</em>`;
  }
  codespan(e) {
    return `<code>${e}</code>`;
  }
  br() {
    return this.options.xhtml ? "<br/>" : "<br>";
  }
  del(e) {
    return `<del>${e}</del>`;
  }
  link(e, t, r) {
    let i = Xi(this.options.sanitize, this.options.baseUrl, e);
    if (i === null)
      return r;
    e = i;
    let s = '<a href="' + e + '"';
    return t && (s += ' title="' + t + '"'), s += ">" + r + "</a>", s;
  }
  image(e, t, r) {
    let i = Xi(this.options.sanitize, this.options.baseUrl, e);
    if (i === null)
      return r;
    e = i;
    let s = `<img src="${e}" alt="${r}"`;
    return t && (s += ` title="${t}"`), s += this.options.xhtml ? "/>" : ">", s;
  }
  text(e) {
    return e;
  }
};
var Ze = class {
  strong(e) {
    return e;
  }
  em(e) {
    return e;
  }
  codespan(e) {
    return e;
  }
  del(e) {
    return e;
  }
  html(e) {
    return e;
  }
  text(e) {
    return e;
  }
  link(e, t, r) {
    return "" + r;
  }
  image(e, t, r) {
    return "" + r;
  }
  br() {
    return "";
  }
};
var je = class {
  constructor() {
    S(this, "seen");
    this.seen = {};
  }
  serialize(e) {
    return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig, "").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-");
  }
  getNextSafeSlug(e, t) {
    let r = e, i = 0;
    if (this.seen.hasOwnProperty(r)) {
      i = this.seen[e];
      do
        i++, r = e + "-" + i;
      while (this.seen.hasOwnProperty(r));
    }
    return t || (this.seen[e] = i, this.seen[r] = 0), r;
  }
  slug(e, t = {}) {
    let r = this.serialize(e);
    return this.getNextSafeSlug(r, t.dryrun);
  }
};
var X = class n5 {
  constructor(e) {
    S(this, "options");
    S(this, "renderer");
    S(this, "textRenderer");
    S(this, "slugger");
    this.options = e || ge, this.options.renderer = this.options.renderer || new Le(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new Ze(), this.slugger = new je();
  }
  static parse(e, t) {
    return new n5(t).parse(e);
  }
  static parseInline(e, t) {
    return new n5(t).parseInline(e);
  }
  parse(e, t = true) {
    let r = "";
    for (let i = 0; i < e.length; i++) {
      let s = e[i];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[s.type]) {
        let o = s, a = this.options.extensions.renderers[o.type].call({ parser: this }, o);
        if (a !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(o.type)) {
          r += a || "";
          continue;
        }
      }
      switch (s.type) {
        case "space":
          continue;
        case "hr": {
          r += this.renderer.hr();
          continue;
        }
        case "heading": {
          let o = s;
          r += this.renderer.heading(this.parseInline(o.tokens), o.depth, ss(this.parseInline(o.tokens, this.textRenderer)), this.slugger);
          continue;
        }
        case "code": {
          let o = s;
          r += this.renderer.code(o.text, o.lang, !!o.escaped);
          continue;
        }
        case "table": {
          let o = s, a = "", u = "";
          for (let h = 0; h < o.header.length; h++)
            u += this.renderer.tablecell(this.parseInline(o.header[h].tokens), { header: true, align: o.align[h] });
          a += this.renderer.tablerow(u);
          let l = "";
          for (let h = 0; h < o.rows.length; h++) {
            let c = o.rows[h];
            u = "";
            for (let p = 0; p < c.length; p++)
              u += this.renderer.tablecell(this.parseInline(c[p].tokens), { header: false, align: o.align[p] });
            l += this.renderer.tablerow(u);
          }
          r += this.renderer.table(a, l);
          continue;
        }
        case "blockquote": {
          let o = s, a = this.parse(o.tokens);
          r += this.renderer.blockquote(a);
          continue;
        }
        case "list": {
          let o = s, a = o.ordered, u = o.start, l = o.loose, h = "";
          for (let c = 0; c < o.items.length; c++) {
            let p = o.items[c], f = p.checked, _ = p.task, v = "";
            if (p.task) {
              let x = this.renderer.checkbox(!!f);
              l ? p.tokens.length > 0 && p.tokens[0].type === "paragraph" ? (p.tokens[0].text = x + " " + p.tokens[0].text, p.tokens[0].tokens && p.tokens[0].tokens.length > 0 && p.tokens[0].tokens[0].type === "text" && (p.tokens[0].tokens[0].text = x + " " + p.tokens[0].tokens[0].text)) : p.tokens.unshift({ type: "text", text: x }) : v += x;
            }
            v += this.parse(p.tokens, l), h += this.renderer.listitem(v, _, !!f);
          }
          r += this.renderer.list(h, a, u);
          continue;
        }
        case "html": {
          let o = s;
          r += this.renderer.html(o.text, o.block);
          continue;
        }
        case "paragraph": {
          let o = s;
          r += this.renderer.paragraph(this.parseInline(o.tokens));
          continue;
        }
        case "text": {
          let o = s, a = o.tokens ? this.parseInline(o.tokens) : o.text;
          for (; i + 1 < e.length && e[i + 1].type === "text"; )
            o = e[++i], a += `
` + (o.tokens ? this.parseInline(o.tokens) : o.text);
          r += t ? this.renderer.paragraph(a) : a;
          continue;
        }
        default: {
          let o = 'Token with "' + s.type + '" type was not found.';
          if (this.options.silent)
            return console.error(o), "";
          throw new Error(o);
        }
      }
    }
    return r;
  }
  parseInline(e, t) {
    t = t || this.renderer;
    let r = "";
    for (let i = 0; i < e.length; i++) {
      let s = e[i];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[s.type]) {
        let o = this.options.extensions.renderers[s.type].call({ parser: this }, s);
        if (o !== false || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(s.type)) {
          r += o || "";
          continue;
        }
      }
      switch (s.type) {
        case "escape": {
          let o = s;
          r += t.text(o.text);
          break;
        }
        case "html": {
          let o = s;
          r += t.html(o.text);
          break;
        }
        case "link": {
          let o = s;
          r += t.link(o.href, o.title, this.parseInline(o.tokens, t));
          break;
        }
        case "image": {
          let o = s;
          r += t.image(o.href, o.title, o.text);
          break;
        }
        case "strong": {
          let o = s;
          r += t.strong(this.parseInline(o.tokens, t));
          break;
        }
        case "em": {
          let o = s;
          r += t.em(this.parseInline(o.tokens, t));
          break;
        }
        case "codespan": {
          let o = s;
          r += t.codespan(o.text);
          break;
        }
        case "br": {
          r += t.br();
          break;
        }
        case "del": {
          let o = s;
          r += t.del(this.parseInline(o.tokens, t));
          break;
        }
        case "text": {
          let o = s;
          r += t.text(o.text);
          break;
        }
        default: {
          let o = 'Token with "' + s.type + '" type was not found.';
          if (this.options.silent)
            return console.error(o), "";
          throw new Error(o);
        }
      }
    }
    return r;
  }
};
var fe = class {
  constructor(e) {
    S(this, "options");
    this.options = e || ge;
  }
  preprocess(e) {
    return e;
  }
  postprocess(e) {
    return e;
  }
};
S(fe, "passThroughHooks", /* @__PURE__ */ new Set(["preprocess", "postprocess"]));
var Je;
var Qr;
var jt;
var os;
var Jr = class {
  constructor(...e) {
    $t(this, Je);
    $t(this, jt);
    S(this, "defaults", Yr());
    S(this, "options", this.setOptions);
    S(this, "parse", Xe(this, Je, Qr).call(this, Y.lex, X.parse));
    S(this, "parseInline", Xe(this, Je, Qr).call(this, Y.lexInline, X.parseInline));
    S(this, "Parser", X);
    S(this, "parser", X.parse);
    S(this, "Renderer", Le);
    S(this, "TextRenderer", Ze);
    S(this, "Lexer", Y);
    S(this, "lexer", Y.lex);
    S(this, "Tokenizer", Oe);
    S(this, "Slugger", je);
    S(this, "Hooks", fe);
    this.use(...e);
  }
  walkTokens(e, t) {
    let r = [];
    for (let i of e)
      switch (r = r.concat(t.call(this, i)), i.type) {
        case "table": {
          let s = i;
          for (let o of s.header)
            r = r.concat(this.walkTokens(o.tokens, t));
          for (let o of s.rows)
            for (let a of o)
              r = r.concat(this.walkTokens(a.tokens, t));
          break;
        }
        case "list": {
          let s = i;
          r = r.concat(this.walkTokens(s.items, t));
          break;
        }
        default: {
          let s = i;
          this.defaults.extensions?.childTokens?.[s.type] ? this.defaults.extensions.childTokens[s.type].forEach((o) => {
            r = r.concat(this.walkTokens(s[o], t));
          }) : s.tokens && (r = r.concat(this.walkTokens(s.tokens, t)));
        }
      }
    return r;
  }
  use(...e) {
    let t = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return e.forEach((r) => {
      let i = { ...r };
      if (i.async = this.defaults.async || i.async || false, r.extensions && (r.extensions.forEach((s) => {
        if (!s.name)
          throw new Error("extension name required");
        if ("renderer" in s) {
          let o = t.renderers[s.name];
          o ? t.renderers[s.name] = function(...a) {
            let u = s.renderer.apply(this, a);
            return u === false && (u = o.apply(this, a)), u;
          } : t.renderers[s.name] = s.renderer;
        }
        if ("tokenizer" in s) {
          if (!s.level || s.level !== "block" && s.level !== "inline")
            throw new Error("extension level must be 'block' or 'inline'");
          let o = t[s.level];
          o ? o.unshift(s.tokenizer) : t[s.level] = [s.tokenizer], s.start && (s.level === "block" ? t.startBlock ? t.startBlock.push(s.start) : t.startBlock = [s.start] : s.level === "inline" && (t.startInline ? t.startInline.push(s.start) : t.startInline = [s.start]));
        }
        "childTokens" in s && s.childTokens && (t.childTokens[s.name] = s.childTokens);
      }), i.extensions = t), r.renderer) {
        let s = this.defaults.renderer || new Le(this.defaults);
        for (let o in r.renderer) {
          let a = r.renderer[o], u = o, l = s[u];
          s[u] = (...h) => {
            let c = a.apply(s, h);
            return c === false && (c = l.apply(s, h)), c || "";
          };
        }
        i.renderer = s;
      }
      if (r.tokenizer) {
        let s = this.defaults.tokenizer || new Oe(this.defaults);
        for (let o in r.tokenizer) {
          let a = r.tokenizer[o], u = o, l = s[u];
          s[u] = (...h) => {
            let c = a.apply(s, h);
            return c === false && (c = l.apply(s, h)), c;
          };
        }
        i.tokenizer = s;
      }
      if (r.hooks) {
        let s = this.defaults.hooks || new fe();
        for (let o in r.hooks) {
          let a = r.hooks[o], u = o, l = s[u];
          fe.passThroughHooks.has(o) ? s[u] = (h) => {
            if (this.defaults.async)
              return Promise.resolve(a.call(s, h)).then((p) => l.call(s, p));
            let c = a.call(s, h);
            return l.call(s, c);
          } : s[u] = (...h) => {
            let c = a.apply(s, h);
            return c === false && (c = l.apply(s, h)), c;
          };
        }
        i.hooks = s;
      }
      if (r.walkTokens) {
        let s = this.defaults.walkTokens, o = r.walkTokens;
        i.walkTokens = function(a) {
          let u = [];
          return u.push(o.call(this, a)), s && (u = u.concat(s.call(this, a))), u;
        };
      }
      this.defaults = { ...this.defaults, ...i };
    }), this;
  }
  setOptions(e) {
    return this.defaults = { ...this.defaults, ...e }, this;
  }
};
Je = /* @__PURE__ */ new WeakSet(), Qr = function(e, t) {
  return (r, i, s) => {
    typeof i == "function" && (s = i, i = null);
    let o = { ...i }, a = { ...this.defaults, ...o };
    this.defaults.async === true && o.async === false && (a.silent || console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."), a.async = true);
    let u = Xe(this, jt, os).call(this, !!a.silent, !!a.async, s);
    if (typeof r > "u" || r === null)
      return u(new Error("marked(): input parameter is undefined or null"));
    if (typeof r != "string")
      return u(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(r) + ", string expected"));
    if (wl(a, s), a.hooks && (a.hooks.options = a), s) {
      let l = s, h = a.highlight, c;
      try {
        a.hooks && (r = a.hooks.preprocess(r)), c = e(r, a);
      } catch (_) {
        return u(_);
      }
      let p = (_) => {
        let v;
        if (!_)
          try {
            a.walkTokens && this.walkTokens(c, a.walkTokens), v = t(c, a), a.hooks && (v = a.hooks.postprocess(v));
          } catch (x) {
            _ = x;
          }
        return a.highlight = h, _ ? u(_) : l(null, v);
      };
      if (!h || h.length < 3 || (delete a.highlight, !c.length))
        return p();
      let f = 0;
      this.walkTokens(c, (_) => {
        _.type === "code" && (f++, setTimeout(() => {
          h(_.text, _.lang, (v, x) => {
            if (v)
              return p(v);
            x != null && x !== _.text && (_.text = x, _.escaped = true), f--, f === 0 && p();
          });
        }, 0));
      }), f === 0 && p();
      return;
    }
    if (a.async)
      return Promise.resolve(a.hooks ? a.hooks.preprocess(r) : r).then((l) => e(l, a)).then((l) => a.walkTokens ? Promise.all(this.walkTokens(l, a.walkTokens)).then(() => l) : l).then((l) => t(l, a)).then((l) => a.hooks ? a.hooks.postprocess(l) : l).catch(u);
    try {
      a.hooks && (r = a.hooks.preprocess(r));
      let l = e(r, a);
      a.walkTokens && this.walkTokens(l, a.walkTokens);
      let h = t(l, a);
      return a.hooks && (h = a.hooks.postprocess(h)), h;
    } catch (l) {
      return u(l);
    }
  };
}, jt = /* @__PURE__ */ new WeakSet(), os = function(e, t, r) {
  return (i) => {
    if (i.message += `
Please report this to https://github.com/markedjs/marked.`, e) {
      let s = "<p>An error occurred:</p><pre>" + L(i.message + "", true) + "</pre>";
      if (t)
        return Promise.resolve(s);
      if (r) {
        r(null, s);
        return;
      }
      return s;
    }
    if (t)
      return Promise.reject(i);
    if (r) {
      r(i);
      return;
    }
    throw i;
  };
};
var de = new Jr();
function k(n6, e, t) {
  return de.parse(n6, e, t);
}
k.options = k.setOptions = function(n6) {
  return de.setOptions(n6), k.defaults = de.defaults, rs(k.defaults), k;
};
k.getDefaults = Yr;
k.defaults = ge;
k.use = function(...n6) {
  return de.use(...n6), k.defaults = de.defaults, rs(k.defaults), k;
};
k.walkTokens = function(n6, e) {
  return de.walkTokens(n6, e);
};
k.parseInline = de.parseInline;
k.Parser = X;
k.parser = X.parse;
k.Renderer = Le;
k.TextRenderer = Ze;
k.Lexer = Y;
k.lexer = Y.lex;
k.Tokenizer = Oe;
k.Slugger = je;
k.Hooks = fe;
k.parse = k;
var Du = k.options;
var Bu = k.setOptions;
var qu = k.use;
var Hu = k.walkTokens;
var zu = k.parseInline;
var Fu = X.parse;
var Wu = Y.lex;
var ls = new k.Renderer();
ls.link = function(n6, e, t) {
  return k.Renderer.prototype.link.apply(this, arguments).replace("<a", "<a target='_blank'");
};

// main.ts
var sdk = new at("<replace with your extension id>").init();
sdk.sendMessageToSession("Hello from Omni Extension!");
