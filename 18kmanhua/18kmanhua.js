/*
2025.7.21 18.15
18k漫画 
https://18akmanhua.com

[rewrite_local]
https:\/\/18akmanhua\.com\/api\/(chaptersDetails|memberDetails|videoDetails) url script-response-body https://raw.githubusercontent.com/wow-doubao/Rewrite/refs/heads/main/18kmanhua/18kmanhua.js
[mitm]
hostname = 18akmanhua.com
*/
const $ = new Env("18k漫画", { logLevel: "info" });
(() => {
  function b(m) {
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (p) {
      {
        return typeof p;
      }
    } : function (p) {
      {
        return p && "function" == typeof Symbol && p.constructor === Symbol && p !== Symbol.prototype ? "symbol" : typeof p;
      }
    };
    return b(m);
  }
  var c;
  function d() {
    "use strict";

    var q = {
      moFsq: function (ab, ac) {
        return ab(ac);
      },
      IADkO: function (ab, ac) {
        return ab === ac;
      },
      XqDwv: "next",
      jltVm: function (ab, ac) {
        return ab(ac);
      },
      xqWEn: "oarqN",
      kMHGJ: function (ab, ac) {
        return ab === ac;
      },
      UQGxl: function (ab, ac) {
        return ab === ac;
      },
      jLYXG: function (ab, ac) {
        return ab === ac;
      },
      DzuUQ: "throw",
      gvSTO: function (ab, ac) {
        return ab === ac;
      },
      JGAmj: "aHJWf",
      gBhjg: "iZUgs",
      AERmZ: "_invoke",
      DgUhE: function (ab, ac, ad, ae) {
        return ab(ac, ad, ae);
      },
      SCHRo: function (ab, ac) {
        return ab in ac;
      },
      lbpQB: "JOiuP",
      xLoHE: "JdePX",
      MWFrS: "YWtVR",
      pVSDt: "HLuse",
      snVGt: "normal",
      jmNSc: function (ab, ac) {
        return ab < ac;
      },
      eJqut: function (ab, ac, ad) {
        return ab(ac, ad);
      },
      VnUtZ: "mVwDp",
      bfJCv: "dnJPC",
      bdKaC: "return",
      HzCvh: function (ab, ac) {
        return ab === ac;
      },
      JhWqw: "TNNPM",
      XffJS: "4|5|3|2|0|1",
      MDYWM: function (ab, ac) {
        return ab !== ac;
      },
      BBRSj: function (ab, ac) {
        return ab === ac;
      },
      sAIXr: function (ab, ac) {
        return ab === ac;
      },
      BsXeJ: function (ab, ac, ad) {
        return ab(ac, ad);
      },
      axojd: function (ab, ac) {
        return ab !== ac;
      },
      BoyJq: function (ab, ac) {
        return ab + ac;
      },
      ZNjRf: "' method",
      SWNbg: "Utils_Code",
      TlvyN: function (ab, ac) {
        return ab(ac);
      },
      IlwiA: "✅ Utils 加载成功",
      meQpu: "https://cdn.jsdelivr.net/gh/xzxxn777/Surge@main/Utils/Utils.js",
      kqPVD: function (ab, ac) {
        return ab !== ac;
      },
      zejnA: "KicXX",
      lhkrq: "function",
      ZExYG: function (ab, ac) {
        return ab === ac;
      },
      XJdIY: "GeneratorFunction",
      pYFYg: "iycQh",
      cciUS: "root",
      cRNey: function (ab, ac) {
        return ab in ac;
      },
      ZPnPM: "llksr",
      MKIHQ: function (ab, ac) {
        return ab !== ac;
      },
      VTjiB: "xMbfA",
      amyRT: "wpZXb",
      ahQRm: function (ab, ac) {
        return ab === ac;
      },
      YUIRz: "fxupF",
      rtYTq: function (ab, ac, ad, ae, af) {
        return ab(ac, ad, ae, af);
      },
      iCjvd: "bgAkp",
      YhXxz: function (ab, ac) {
        return ab === ac;
      },
      kuwpS: "QreQk",
      qDugg: function (ab, ac) {
        return ab in ac;
      },
      VdCEN: function (ab, ac) {
        return ab === ac;
      },
      SLPnE: function (ab, ac) {
        return ab == ac;
      },
      CijvB: function (ab, ac) {
        return ab(ac);
      },
      JYnAB: function (ab, ac) {
        return ab(ac);
      },
      AHZfH: "catchLoc",
      AXweZ: "finallyLoc",
      QDBap: function (ab, ac) {
        return ab && ac;
      },
      XuUBE: function (ab, ac, ad) {
        return ab(ac, ad);
      },
      JSTCH: "try statement without catch or finally",
      uKJAA: "(((.+)+)+)+$",
      YOPan: "YHWlP",
      EBFAa: "fThju",
      YtcbO: function (ab, ac) {
        return ab - ac;
      },
      zpKbz: function (ab, ac) {
        return ab >= ac;
      },
      xLnnR: "IFQYs",
      OhHmi: function (ab, ac) {
        return ab === ac;
      },
      QOfyK: "end",
      yiTbg: function (ab, ac) {
        return ab <= ac;
      },
      tQqNO: function (ab, ac) {
        return ab === ac;
      },
      DnbOC: "WaDmi",
      heuDj: function (ab, ac) {
        return ab < ac;
      },
      Wmdlk: function (ab, ac) {
        return ab !== ac;
      },
      FcdZa: "Mdukn",
      XfOaC: function (ab, ac, ad) {
        return ab(ac, ad);
      },
      PloOR: "UWbjw",
      IYSsT: function (ab, ac) {
        return ab(ac);
      },
      IQVzO: function (ab, ac, ad, ae, af) {
        return ab(ac, ad, ae, af);
      }
    };
    d = function () {
      return A;
    };
    var z;
    var A = {};
    var B = Object.prototype;
    var C = B.hasOwnProperty;
    var D = Object.defineProperty || function (ab, ac, ad) {
      {
        ab[ac] = ad.value;
      }
    };
    var F = "function" == typeof Symbol ? Symbol : {};
    var H = F.iterator || "@@iterator";
    var I = F.asyncIterator || "@@asyncIterator";
    var J = F.toStringTag || "@@toStringTag";
    function K(ab, ac, ad) {
      {
        var ae = {
          value: ad,
          enumerable: true,
          configurable: true,
          writable: true
        };
        Object.defineProperty(ab, ac, ae);
        return ab[ac];
      }
    }
    try {
      {
        K({}, "");
      }
    } catch (ac) {
      {
        K = function (ae, af, ag) {
          {
            return ae[af] = ag;
          }
        };
      }
    }
    function M(ae, af, ag, ah) {
      {
        var ai = af && af.prototype instanceof W ? af : W;
        var aj = Object.create(ai.prototype);
        var ak = new a9(ah || []);
        D(aj, "_invoke", {
          value: a5(ae, ag, ak)
        });
        return aj;
      }
    }
    function N(ae, af, ag) {
      {
        try {
          {
            return {
              type: "normal",
              arg: ae.call(af, ag)
            };
          }
        } catch (al) {
          {
            var ai = {
              type: "throw",
              arg: al
            };
            return ai;
          }
        }
      }
    }
    A.wrap = M;
    var P = "suspendedStart";
    var Q = "suspendedYield";
    var R = "executing";
    var T = "completed";
    var V = {};
    function W() {}
    function X() {}
    function Y() {}
    var Z = {};
    K(Z, H, function () {
      {
        return this;
      }
    });
    var a0 = Object.getPrototypeOf;
    var a1 = a0 && a0(a0(aa([])));
    a1 && a1 !== B && C.call(a1, H) && (Z = a1);
    Y.prototype = W.prototype = Object.create(Z);
    var a2 = Y.prototype;
    function a3(ae) {
      {
        ["next", "throw", "return"].forEach(function (ah) {
          {
            K(ae, ah, function (aj) {
              {
                return this._invoke(ah, aj);
              }
            });
          }
        });
      }
    }
    function a4(ae, af) {
      {
        function aj(ak, al, am, an) {
          {
            var ap = N(ae[ak], ae, al);
            if ("throw" !== ap.type) {
              {
                var aq = ap.arg;
                var ar = aq.value;
                return ar && "object" == b(ar) && C.call(ar, "__await") ? af.resolve(ar.__await).then(function (au) {
                  {
                    aj("next", au, am, an);
                  }
                }, function (au) {
                  {
                    aj("throw", au, am, an);
                  }
                }) : af.resolve(ar).then(function (au) {
                  {
                    aq.value = au;
                    am(aq);
                  }
                }, function (au) {
                  return aj("throw", au, am, an);
                });
              }
            }
            an(ap.arg);
          }
        }
        var ah;
        D(this, "_invoke", {
          value: function (ak, al) {
            {
              function an() {
                return new af(function (ap, aq) {
                  {
                    aj(ak, al, ap, aq);
                  }
                });
              }
              return ah = ah ? ah.then(an, an) : an();
            }
          }
        });
      }
    }
    function a5(ae, af, ag) {
      {
        var ai = P;
        return function (ak, al) {
          {
            if (ai === R) {
              throw Error("Generator is already running");
            }
            if (ai === T) {
              {
                if ("throw" === ak) {
                  throw al;
                }
                var an = {
                  value: z,
                  done: true
                };
                return an;
              }
            }
            for (ag.method = ak, ag.arg = al;;) {
              {
                var ao = ag.delegate;
                if (ao) {
                  {
                    var ap = a6(ao, ag);
                    if (ap) {
                      {
                        if (ap === V) {
                          continue;
                        }
                        return ap;
                      }
                    }
                  }
                }
                if ("next" === ag.method) {
                  ag.sent = ag._sent = ag.arg;
                } else {
                  if ("throw" === ag.method) {
                    {
                      if (ai === P) {
                        throw ai = T, ag.arg;
                      }
                      ag.dispatchException(ag.arg);
                    }
                  } else {
                    "return" === ag.method && ag.abrupt("return", ag.arg);
                  }
                }
                ai = R;
                var aq = N(ae, af, ag);
                if ("normal" === aq.type) {
                  {
                    if (ai = ag.done ? T : Q, aq.arg === V) {
                      continue;
                    }
                    var ar = {
                      value: aq.arg,
                      done: ag.done
                    };
                    return ar;
                  }
                }
                "throw" === aq.type && (ai = T, ag.method = "throw", ag.arg = aq.arg);
              }
            }
          }
        };
      }
    }
    function a6(ae, af) {
      {
        var ak = af.method;
        var al = ae.iterator[ak];
        if (al === z) {
          af.delegate = null;
          "throw" === ak && ae.iterator.return && (af.method = "return", af.arg = z, a6(ae, af), "throw" === af.method) || "return" !== ak && (af.method = "throw", af.arg = new TypeError("The iterator does not provide a '" + ak + "' method"));
          return V;
        }
        var aj = N(al, ae.iterator, af.arg);
        if ("throw" === aj.type) {
          af.method = "throw";
          af.arg = aj.arg;
          af.delegate = null;
          return V;
        }
        var ai = aj.arg;
        return ai ? ai.done ? (af[ae.resultName] = ai.value, af.next = ae.nextLoc, "return" !== af.method && (af.method = "next", af.arg = z), af.delegate = null, V) : ai : (af.method = "throw", af.arg = new TypeError("iterator result is not an object"), af.delegate = null, V);
      }
    }
    function a7(ae) {
      {
        var ah = {
          tryLoc: ae[0]
        };
        1 in ae && (ah.catchLoc = ae[1]);
        2 in ae && (ah.finallyLoc = ae[2], ah.afterLoc = ae[3]);
        this.tryEntries.push(ah);
      }
    }
    function a8(ae) {
      {
        var af = ae.completion || {};
        af.type = "normal";
        delete af.arg;
        ae.completion = af;
      }
    }
    function a9(ae) {
      {
        var ag = {
          tryLoc: "root"
        };
        this.tryEntries = [ag];
        ae.forEach(a7, this);
        this.reset(true);
      }
    }
    function aa(ae) {
      {
        if (ae || "" === ae) {
          {
            var ag = ae[H];
            if (ag) {
              return ag.call(ae);
            }
            if ("function" == typeof ae.next) {
              return ae;
            }
            if (!isNaN(ae.length)) {
              {
                var ah = -1;
                var ai = function al() {
                  {
                    for (; ++ah < ae.length;) {
                      if (C.call(ae, ah)) {
                        al.value = ae[ah];
                        al.done = false;
                        return al;
                      }
                    }
                    al.value = z;
                    al.done = true;
                    return al;
                  }
                };
                return ai.next = ai;
              }
            }
          }
        }
        throw new TypeError(b(ae) + " is not iterable");
      }
    }
    X.prototype = Y;
    D(a2, "constructor", {
      value: Y,
      configurable: true
    });
    D(Y, "constructor", {
      value: X,
      configurable: true
    });
    X.displayName = K(Y, J, "GeneratorFunction");
    A.isGeneratorFunction = function (ae) {
      {
        var ag = "function" == typeof ae && ae.constructor;
        return !!ag && (ag === X || "GeneratorFunction" === (ag.displayName || ag.name));
      }
    };
    A.mark = function (ae) {
      {
        Object.setPrototypeOf ? Object.setPrototypeOf(ae, Y) : (ae.__proto__ = Y, K(ae, J, "GeneratorFunction"));
        ae.prototype = Object.create(a2);
        return ae;
      }
    };
    A.awrap = function (ae) {
      {
        var ag = {
          __await: ae
        };
        return ag;
      }
    };
    a3(a4.prototype);
    K(a4.prototype, I, function () {
      {
        return this;
      }
    });
    A.AsyncIterator = a4;
    A.async = function (ae, af, ag, ah, ai) {
      {
        undefined === ai && (ai = Promise);
        var ak = new a4(M(ae, af, ag, ah), ai);
        return A.isGeneratorFunction(af) ? ak : ak.next().then(function (al) {
          {
            return al.done ? al.value : ak.next();
          }
        });
      }
    };
    a3(a2);
    K(a2, J, "Generator");
    K(a2, H, function () {
      {
        return this;
      }
    });
    K(a2, "toString", function () {
      {
        return "[object Generator]";
      }
    });
    A.keys = function (ae) {
      {
        var ag = Object(ae);
        var ah = [];
        for (var ai in ag) ah.push(ai);
        ah.reverse();
        return function aj() {
          {
            for (; ah.length;) {
              {
                var al = ah.pop();
                if (al in ag) {
                  aj.value = al;
                  aj.done = false;
                  return aj;
                }
              }
            }
            aj.done = true;
            return aj;
          }
        };
      }
    };
    A.values = aa;
    a9.prototype = {
      constructor: a9,
      reset: function (ae) {
        {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = z, this.done = false, this.delegate = null, this.method = "next", this.arg = z, this.tryEntries.forEach(a8), !ae) {
            for (var ag in this) "t" === ag.charAt(0) && C.call(this, ag) && !isNaN(+ag.slice(1)) && (this[ag] = z);
          }
        }
      },
      stop: function () {
        {
          this.done = true;
          var ag = this.tryEntries[0].completion;
          if ("throw" === ag.type) {
            throw ag.arg;
          }
          return this.rval;
        }
      },
      dispatchException: function (ae) {
        {
          if (this.done) {
            throw ae;
          }
          var ag = this;
          function an(ao, ap) {
            {
              aj.type = "throw";
              aj.arg = ae;
              ag.next = ao;
              ap && (ag.method = "next", ag.arg = z);
              return !!ap;
            }
          }
          for (var ah = this.tryEntries.length - 1; ah >= 0; --ah) {
            {
              var ai = this.tryEntries[ah];
              var aj = ai.completion;
              if ("root" === ai.tryLoc) {
                return an("end");
              }
              if (ai.tryLoc <= this.prev) {
                {
                  var ak = C.call(ai, "catchLoc");
                  var al = C.call(ai, "finallyLoc");
                  if (ak && al) {
                    {
                      if (this.prev < ai.catchLoc) {
                        return an(ai.catchLoc, true);
                      }
                      if (this.prev < ai.finallyLoc) {
                        return an(ai.finallyLoc);
                      }
                    }
                  } else {
                    if (ak) {
                      {
                        if (this.prev < ai.catchLoc) {
                          return an(ai.catchLoc, true);
                        }
                      }
                    } else {
                      {
                        if (!al) {
                          throw Error("try statement without catch or finally");
                        }
                        if (this.prev < ai.finallyLoc) {
                          return an(ai.finallyLoc);
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      abrupt: function (ae, af) {
        {
          for (var ah = this.tryEntries.length - 1; ah >= 0; --ah) {
            {
              var ai = this.tryEntries[ah];
              if (ai.tryLoc <= this.prev && C.call(ai, "finallyLoc") && this.prev < ai.finallyLoc) {
                {
                  var aj = ai;
                  break;
                }
              }
            }
          }
          aj && ("break" === ae || "continue" === ae) && aj.tryLoc <= af && af <= aj.finallyLoc && (aj = null);
          var ak = aj ? aj.completion : {};
          ak.type = ae;
          ak.arg = af;
          return aj ? (this.method = "next", this.next = aj.finallyLoc, V) : this.complete(ak);
        }
      },
      complete: function (ae, af) {
        {
          if ("throw" === ae.type) {
            throw ae.arg;
          }
          "break" === ae.type || "continue" === ae.type ? this.next = ae.arg : "return" === ae.type ? (this.rval = this.arg = ae.arg, this.method = "return", this.next = "end") : "normal" === ae.type && af && (this.next = af);
          return V;
        }
      },
      finish: function (ae) {
        {
          for (var ah = this.tryEntries.length - 1; ah >= 0; --ah) {
            {
              var ai = this.tryEntries[ah];
              if (ai.finallyLoc === ae) {
                this.complete(ai.completion, ai.afterLoc);
                a8(ai);
                return V;
              }
            }
          }
        }
      },
      catch: function (ae) {
        for (var ag = this.tryEntries.length - 1; ag >= 0; --ag) {
          var ah = this.tryEntries[ag];
          if (ah.tryLoc === ae) {
            var ai = ah.completion;
            if ("throw" === ai.type) {
              {
                var aj = ai.arg;
                a8(ah);
              }
            }
            return aj;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (ae, af, ag) {
        this.delegate = {
          iterator: aa(ae),
          resultName: af,
          nextLoc: ag
        };
        "next" === this.method && (this.arg = z);
        return V;
      }
    };
    return A;
  }
  function e(m, p, q, s, v, w, x) {
    try {
      var y = m[w](x);
      var z = y.value;
    } catch (A) {
      return void q(A);
    }
    y.done ? p(z) : Promise.resolve(z).then(s, v);
  }
  function f(m) {
    return function () {
      var p = this;
      var q = arguments;
      return new Promise(function (s, u) {
        var v = m.apply(p, q);
        function w(y) {
          e(v, s, u, w, x, "next", y);
        }
        function x(y) {
          e(v, s, u, w, x, "throw", y);
        }
        w(undefined);
      });
    };
  }
  var g = $response.body;
  $.debug(g);
  var h = (null === (c = /"code":(\d+)/.exec(g)) || undefined === c ? undefined : c[1]) || 0;
  function i(m, o, p, q) {
    return q.AES.encrypt(m, o, {
      iv: p,
      mode: q.mode.CBC,
      padding: q.pad.Pkcs7
    }).toString();
  }
  function j(m, p, q, s) {
    var u = s.AES.decrypt(m, p, {
      iv: q,
      mode: s.mode.CBC,
      padding: s.pad.Pkcs7
    });
    return u.toString(s.enc.Utf8);
  }
  function k() {
    return l.apply(this, arguments);
  }
  function l() {
    l = f(d().mark(function m() {
      var o;
      return d().wrap(function p(q) {
        for (;;) {
          switch (q.prev = q.next) {
            case 0:
              if (o = $.getdata("Utils_Code") || "", !o) {
                q.next = 5;
                break;
              }
              console.log("✅ 使用缓存 Utils");
              eval(o);
              return q.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 下载 Utils 组件中...");
              return q.abrupt("return", new Promise(function (s) {
                $.getScript("https://cdn.jsdelivr.net/gh/xzxxn777/Surge@main/Utils/Utils.js").then(function (v) {
                  $.setdata(v, "Utils_Code");
                  eval(v);
                  console.log("✅ Utils 加载成功");
                  s(creatUtils());
                });
              }));
            case 7:
            case "end":
              return q.stop();
          }
        }
      }, m);
    }));
    return l.apply(this, arguments);
  }
  $.debug("code: " + h);
  200 != h ? ($.error("接口报错: " + (g.msg || "未知错误")), $.done({})) : f(d().mark(function m() {
    var q;
    var v;
    var w;
    var x;
    var y;
    var z;
    var A;
    var B;
    var C;
    var D;
    var E;
    var F;
    return d().wrap(function (G) {
      for (;;) {
        switch (G.prev = G.next) {
          case 0:
            G.prev = 0;
            G.next = 3;
            return k();
          case 3:
            if (q = G.sent, $.debug("Utils 加载成功"), v = q.createCryptoJS(), v) {
              G.next = 8;
              break;
            }
            throw new Error("CryptoJS 未成功创建");
          case 8:
            /memberDetails/.test($request.url) && (g = $.toObj(g), w = g.data.suffix, x = v.enc.Utf8.parse("9a62e6977b" + w), y = v.enc.Utf8.parse("9a2d65b4a693ad0e40e5b156df25e406"), z = j(g.data.data, y, x, v), $.debug("解密后数据: " + z), A = z.replace(/"username":"[^"]+"/g, "\"username\":\"lovebabyforever\"").replace(/"password":"[^"]+"/g, "\"password\":\"TG@ios151\"").replace(/"is_vip":0/g, "\"is_vip\":1").replace(/"vip_time":null/g, "\"vip_time\":\"2099-09-09\"").replace(/"book_coin":\d+/g, "\"book_coin\":9999").replace(/"identity_id":\d+/g, "\"identity_id\":9999").replace(/"vip_hour":\d+/g, "\"vip_hour\":9999"), $.debug("修改后数据: " + A), g.data.data = i(A, y, x, v), g = JSON.stringify(g));
            /\/api\/(chaptersDetails|videoDetails)/.test($request.url) && (g = $.toObj(g), B = g.data.suffix, C = v.enc.Utf8.parse("9a62e6977b" + B), D = v.enc.Utf8.parse("9a2d65b4a693ad0e40e5b156df25e406"), E = j(g.data.data, D, C, v), $.debug("解密后数据: " + E), F = E.replace(/"is_buy":0/g, "\"is_buy\":1").replace(/"is_free":0/g, "\"is_free\":1"), $.debug("修改后数据: " + F), g.data.data = i(F, D, C, v), g = JSON.stringify(g));
            G.next = 15;
            break;
          case 12:
            G.prev = 12;
            G.t0 = G.catch(0);
            $.logErr(G.t0);
          case 15:
            var H = {
              body: g
            };
            G.prev = 15;
            $.done(H);
            return G.finish(15);
          case 18:
          case "end":
            return G.stop();
        }
      }
    }, m, null, [[0, 12, 15, 18]]);
  }))();
})();

// prettier-ignore
function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise(((e,i)=>{s.call(this,t,((t,s,o)=>{t?i(t):e(s)}))}))}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.logLevels={debug:0,info:1,warn:2,error:3},this.logLevelPrefixs={debug:"[DEBUG] ",info:"[INFO] ",warn:"[WARN] ",error:"[ERROR] "},this.logLevel="info",this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.encoding="utf-8",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}getEnv(){return"undefined"!=typeof $environment&&$environment["surge-version"]?"Surge":"undefined"!=typeof $environment&&$environment["stash-version"]?"Stash":"undefined"!=typeof module&&module.exports?"Node.js":"undefined"!=typeof $task?"Quantumult X":"undefined"!=typeof $loon?"Loon":"undefined"!=typeof $rocket?"Shadowrocket":void 0}isNode(){return"Node.js"===this.getEnv()}isQuanX(){return"Quantumult X"===this.getEnv()}isSurge(){return"Surge"===this.getEnv()}isLoon(){return"Loon"===this.getEnv()}isShadowrocket(){return"Shadowrocket"===this.getEnv()}isStash(){return"Stash"===this.getEnv()}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null,...s){try{return JSON.stringify(t,...s)}catch{return e}}getjson(t,e){let s=e;if(this.getdata(t))try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise((e=>{this.get({url:t},((t,s,i)=>e(i)))}))}runScript(t,e){return new Promise((s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let o=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");o=o?1*o:20,o=e&&e.timeout?e.timeout:o;const[r,a]=i.split("@"),n={url:`http://${a}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:o},headers:{"X-Key":r,Accept:"*/*"},timeout:o};this.post(n,((t,e,i)=>s(i)))})).catch((t=>this.logErr(t)))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),o=JSON.stringify(this.data);s?this.fs.writeFileSync(t,o):i?this.fs.writeFileSync(e,o):this.fs.writeFileSync(t,o)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let o=t;for(const t of i)if(o=Object(o)[t],void 0===o)return s;return o}lodash_set(t,e,s){return Object(t)!==t||(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce(((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{}),t)[e[e.length-1]]=s),t}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),o=s?this.getval(s):"";if(o)try{const t=JSON.parse(o);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,o]=/^@(.*?)\.(.*?)$/.exec(e),r=this.getval(i),a=i?"null"===r?null:r||"{}":"{}";try{const e=JSON.parse(a);this.lodash_set(e,o,t),s=this.setval(JSON.stringify(e),i)}catch(e){const r={};this.lodash_set(r,o,t),s=this.setval(JSON.stringify(r),i)}}else s=this.setval(t,e);return s}getval(t){switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":return $persistentStore.read(t);case"Quantumult X":return $prefs.valueForKey(t);case"Node.js":return this.data=this.loaddata(),this.data[t];default:return this.data&&this.data[t]||null}}setval(t,e){switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":return $persistentStore.write(t,e);case"Quantumult X":return $prefs.setValueForKey(t,e);case"Node.js":return this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0;default:return this.data&&this.data[e]||null}}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.cookie&&void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar)))}get(t,e=(()=>{})){switch(t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"],delete t.headers["content-type"],delete t.headers["content-length"]),t.params&&(t.url+="?"+this.queryStr(t.params)),void 0===t.followRedirect||t.followRedirect||((this.isSurge()||this.isLoon())&&(t["auto-redirect"]=!1),this.isQuanX()&&(t.opts?t.opts.redirection=!1:t.opts={redirection:!1})),this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,((t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status?s.status:s.statusCode,s.status=s.statusCode),e(t,s,i)}));break;case"Quantumult X":this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then((t=>{const{statusCode:s,statusCode:i,headers:o,body:r,bodyBytes:a}=t;e(null,{status:s,statusCode:i,headers:o,body:r,bodyBytes:a},r,a)}),(t=>e(t&&t.error||"UndefinedError")));break;case"Node.js":let s=require("iconv-lite");this.initGotEnv(t),this.got(t).on("redirect",((t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}})).then((t=>{const{statusCode:i,statusCode:o,headers:r,rawBody:a}=t,n=s.decode(a,this.encoding);e(null,{status:i,statusCode:o,headers:r,rawBody:a,body:n},n)}),(t=>{const{message:i,response:o}=t;e(i,o,o&&s.decode(o.rawBody,this.encoding))}));break}}post(t,e=(()=>{})){const s=t.method?t.method.toLocaleLowerCase():"post";switch(t.body&&t.headers&&!t.headers["Content-Type"]&&!t.headers["content-type"]&&(t.headers["content-type"]="application/x-www-form-urlencoded"),t.headers&&(delete t.headers["Content-Length"],delete t.headers["content-length"]),void 0===t.followRedirect||t.followRedirect||((this.isSurge()||this.isLoon())&&(t["auto-redirect"]=!1),this.isQuanX()&&(t.opts?t.opts.redirection=!1:t.opts={redirection:!1})),this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient[s](t,((t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status?s.status:s.statusCode,s.status=s.statusCode),e(t,s,i)}));break;case"Quantumult X":t.method=s,this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then((t=>{const{statusCode:s,statusCode:i,headers:o,body:r,bodyBytes:a}=t;e(null,{status:s,statusCode:i,headers:o,body:r,bodyBytes:a},r,a)}),(t=>e(t&&t.error||"UndefinedError")));break;case"Node.js":let i=require("iconv-lite");this.initGotEnv(t);const{url:o,...r}=t;this.got[s](o,r).then((t=>{const{statusCode:s,statusCode:o,headers:r,rawBody:a}=t,n=i.decode(a,this.encoding);e(null,{status:s,statusCode:o,headers:r,rawBody:a,body:n},n)}),(t=>{const{message:s,response:o}=t;e(s,o,o&&i.decode(o.rawBody,this.encoding))}));break}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}queryStr(t){let e="";for(const s in t){let i=t[s];null!=i&&""!==i&&("object"==typeof i&&(i=JSON.stringify(i)),e+=`${s}=${i}&`)}return e=e.substring(0,e.length-1),e}msg(e=t,s="",i="",o={}){const r=t=>{const{$open:e,$copy:s,$media:i,$mediaMime:o}=t;switch(typeof t){case void 0:return t;case"string":switch(this.getEnv()){case"Surge":case"Stash":default:return{url:t};case"Loon":case"Shadowrocket":return t;case"Quantumult X":return{"open-url":t};case"Node.js":return}case"object":switch(this.getEnv()){case"Surge":case"Stash":case"Shadowrocket":default:{const r={};let a=t.openUrl||t.url||t["open-url"]||e;a&&Object.assign(r,{action:"open-url",url:a});let n=t["update-pasteboard"]||t.updatePasteboard||s;if(n&&Object.assign(r,{action:"clipboard",text:n}),i){let t,e,s;if(i.startsWith("http"))t=i;else if(i.startsWith("data:")){const[t]=i.split(";"),[,o]=i.split(",");e=o,s=t.replace("data:","")}else{e=i,s=(t=>{const e={JVBERi0:"application/pdf",R0lGODdh:"image/gif",R0lGODlh:"image/gif",iVBORw0KGgo:"image/png","/9j/":"image/jpg"};for(var s in e)if(0===t.indexOf(s))return e[s];return null})(i)}Object.assign(r,{"media-url":t,"media-base64":e,"media-base64-mime":o??s})}return Object.assign(r,{"auto-dismiss":t["auto-dismiss"],sound:t.sound}),r}case"Loon":{const s={};let o=t.openUrl||t.url||t["open-url"]||e;o&&Object.assign(s,{openUrl:o});let r=t.mediaUrl||t["media-url"];return i?.startsWith("http")&&(r=i),r&&Object.assign(s,{mediaUrl:r}),console.log(JSON.stringify(s)),s}case"Quantumult X":{const o={};let r=t["open-url"]||t.url||t.openUrl||e;r&&Object.assign(o,{"open-url":r});let a=t["media-url"]||t.mediaUrl;i?.startsWith("http")&&(a=i),a&&Object.assign(o,{"media-url":a});let n=t["update-pasteboard"]||t.updatePasteboard||s;return n&&Object.assign(o,{"update-pasteboard":n}),console.log(JSON.stringify(o)),o}case"Node.js":return}default:return}};if(!this.isMute)switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:$notification.post(e,s,i,r(o));break;case"Quantumult X":$notify(e,s,i,r(o));break;case"Node.js":break}if(!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}debug(...t){this.logLevels[this.logLevel]<=this.logLevels.debug&&(t.length>0&&(this.logs=[...this.logs,...t]),console.log(`${this.logLevelPrefixs.debug}${t.map((t=>t??String(t))).join(this.logSeparator)}`))}info(...t){this.logLevels[this.logLevel]<=this.logLevels.info&&(t.length>0&&(this.logs=[...this.logs,...t]),console.log(`${this.logLevelPrefixs.info}${t.map((t=>t??String(t))).join(this.logSeparator)}`))}warn(...t){this.logLevels[this.logLevel]<=this.logLevels.warn&&(t.length>0&&(this.logs=[...this.logs,...t]),console.log(`${this.logLevelPrefixs.warn}${t.map((t=>t??String(t))).join(this.logSeparator)}`))}error(...t){this.logLevels[this.logLevel]<=this.logLevels.error&&(t.length>0&&(this.logs=[...this.logs,...t]),console.log(`${this.logLevelPrefixs.error}${t.map((t=>t??String(t))).join(this.logSeparator)}`))}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.map((t=>t??String(t))).join(this.logSeparator))}logErr(t,e){switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":case"Quantumult X":default:this.log("",`❗️${this.name}, 错误!`,e,t);break;case"Node.js":this.log("",`❗️${this.name}, 错误!`,e,void 0!==t.message?t.message:t,t.stack);break}}wait(t){return new Promise((e=>setTimeout(e,t)))}done(t={}){const e=((new Date).getTime()-this.startTime)/1e3;switch(this.log("",`🔔${this.name}, 结束! 🕛 ${e} 秒`),this.log(),this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":case"Quantumult X":default:$done(t);break;case"Node.js":process.exit(1)}}}(t,e)}
