;(function () {
  const e = document.createElement('link').relList
  if (e && e.supports && e.supports('modulepreload')) return
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) i(s)
  new MutationObserver((s) => {
    for (const a of s) if (a.type === 'childList') for (const l of a.addedNodes) l.tagName === 'LINK' && l.rel === 'modulepreload' && i(l)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(s) {
    const a = {}
    return (
      s.integrity && (a.integrity = s.integrity),
      s.referrerPolicy && (a.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === 'use-credentials'
        ? (a.credentials = 'include')
        : s.crossOrigin === 'anonymous'
        ? (a.credentials = 'omit')
        : (a.credentials = 'same-origin'),
      a
    )
  }
  function i(s) {
    if (s.ep) return
    s.ep = !0
    const a = n(s)
    fetch(s.href, a)
  }
})()
var co = typeof globalThis < 'u' ? globalThis : typeof window < 'u' ? window : typeof global < 'u' ? global : typeof self < 'u' ? self : {},
  tu = { exports: {} }
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ tu.exports
;(function (u, e) {
  ;(function () {
    var n,
      i = '4.17.21',
      s = 200,
      a = 'Unsupported core-js use. Try https://npms.io/search?q=ponyfill.',
      l = 'Expected a function',
      f = 'Invalid `variable` option passed into `_.template`',
      h = '__lodash_hash_undefined__',
      p = 500,
      g = '__lodash_placeholder__',
      y = 1,
      x = 2,
      v = 4,
      T = 1,
      b = 2,
      E = 1,
      k = 2,
      z = 4,
      W = 8,
      P = 16,
      R = 32,
      I = 64,
      M = 128,
      H = 256,
      U = 512,
      $ = 30,
      J = '...',
      X = 800,
      at = 16,
      nt = 1,
      ht = 2,
      mt = 3,
      Q = 1 / 0,
      lt = 9007199254740991,
      Ft = 17976931348623157e292,
      O = 0 / 0,
      xt = 4294967295,
      Ie = xt - 1,
      Cn = xt >>> 1,
      Gt = [
        ['ary', M],
        ['bind', E],
        ['bindKey', k],
        ['curry', W],
        ['curryRight', P],
        ['flip', U],
        ['partial', R],
        ['partialRight', I],
        ['rearg', H],
      ],
      qt = '[object Arguments]',
      de = '[object Array]',
      ee = '[object AsyncFunction]',
      ae = '[object Boolean]',
      ne = '[object Date]',
      Cr = '[object DOMException]',
      pe = '[object Error]',
      Ve = '[object Function]',
      Tt = '[object GeneratorFunction]',
      Rt = '[object Map]',
      _e = '[object Number]',
      Ke = '[object Null]',
      D = '[object Object]',
      Ne = '[object Promise]',
      dr = '[object Proxy]',
      An = '[object RegExp]',
      Mt = '[object Set]',
      On = '[object String]',
      Gn = '[object Symbol]',
      Pi = '[object Undefined]',
      Ut = '[object WeakMap]',
      Kt = '[object WeakSet]',
      ke = '[object ArrayBuffer]',
      Ce = '[object DataView]',
      pr = '[object Float32Array]',
      En = '[object Float64Array]',
      cn = '[object Int8Array]',
      Ae = '[object Int16Array]',
      _r = '[object Int32Array]',
      Ar = '[object Uint8Array]',
      Or = '[object Uint8ClampedArray]',
      gr = '[object Uint16Array]',
      qn = '[object Uint32Array]',
      Er = /\b__p \+= '';/g,
      bt = /\b(__p \+=) '' \+/g,
      Nr = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
      hn = /&(?:amp|lt|gt|quot|#39);/g,
      dn = /[&<>"']/g,
      Pn = RegExp(hn.source),
      Ur = RegExp(dn.source),
      ii = /<%-([\s\S]+?)%>/g,
      mr = /<%([\s\S]+?)%>/g,
      st = /<%=([\s\S]+?)%>/g,
      j = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      Pt = /^\w*$/,
      re = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      q = /[\\^$.*+?()[\]{}|]/g,
      dt = RegExp(q.source),
      tt = /^\s+/,
      pt = /\s/,
      ge = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
      Ct = /\{\n\/\* \[wrapped with (.+)\] \*/,
      Zt = /,? & /,
      Fe = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
      me = /[()=,{}\[\]\/\s]/,
      Yt = /\\(\\)?/g,
      It = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
      pn = /\w*$/,
      Ht = /^[-+]0x[0-9a-f]+$/i,
      Ze = /^0b[01]+$/i,
      Vn = /^\[object .+?Constructor\]$/,
      Ue = /^0o[0-7]+$/i,
      xe = /^(?:0|[1-9]\d*)$/,
      Oe = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
      Kn = /($^)/,
      fs = /['\n\r\u2028\u2029\\]/g,
      ue = '\\ud800-\\udfff',
      le = '\\u0300-\\u036f',
      Zn = '\\ufe20-\\ufe2f',
      Vs = '\\u20d0-\\u20ff',
      Ks = le + Zn + Vs,
      si = '\\u2700-\\u27bf',
      Rn = 'a-z\\xdf-\\xf6\\xf8-\\xff',
      Ri = '\\xac\\xb1\\xd7\\xf7',
      cs = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
      Mi = '\\u2000-\\u206f',
      G_ =
        ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
      Jf = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
      Qf = '\\ufe0e\\ufe0f',
      jf = Ri + cs + Mi + G_,
      vu = "['’]",
      q_ = '[' + ue + ']',
      tc = '[' + jf + ']',
      Ho = '[' + Ks + ']',
      ec = '\\d+',
      V_ = '[' + si + ']',
      nc = '[' + Rn + ']',
      rc = '[^' + ue + jf + ec + si + Rn + Jf + ']',
      yu = '\\ud83c[\\udffb-\\udfff]',
      K_ = '(?:' + Ho + '|' + yu + ')',
      ic = '[^' + ue + ']',
      wu = '(?:\\ud83c[\\udde6-\\uddff]){2}',
      xu = '[\\ud800-\\udbff][\\udc00-\\udfff]',
      hs = '[' + Jf + ']',
      sc = '\\u200d',
      oc = '(?:' + nc + '|' + rc + ')',
      Z_ = '(?:' + hs + '|' + rc + ')',
      ac = '(?:' + vu + '(?:d|ll|m|re|s|t|ve))?',
      uc = '(?:' + vu + '(?:D|LL|M|RE|S|T|VE))?',
      lc = K_ + '?',
      fc = '[' + Qf + ']?',
      J_ = '(?:' + sc + '(?:' + [ic, wu, xu].join('|') + ')' + fc + lc + ')*',
      Q_ = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
      j_ = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
      cc = fc + lc + J_,
      tg = '(?:' + [V_, wu, xu].join('|') + ')' + cc,
      eg = '(?:' + [ic + Ho + '?', Ho, wu, xu, q_].join('|') + ')',
      ng = RegExp(vu, 'g'),
      rg = RegExp(Ho, 'g'),
      bu = RegExp(yu + '(?=' + yu + ')|' + eg + cc, 'g'),
      ig = RegExp(
        [
          hs + '?' + nc + '+' + ac + '(?=' + [tc, hs, '$'].join('|') + ')',
          Z_ + '+' + uc + '(?=' + [tc, hs + oc, '$'].join('|') + ')',
          hs + '?' + oc + '+' + ac,
          hs + '+' + uc,
          j_,
          Q_,
          ec,
          tg,
        ].join('|'),
        'g'
      ),
      sg = RegExp('[' + sc + ue + Ks + Qf + ']'),
      og = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
      ag = [
        'Array',
        'Buffer',
        'DataView',
        'Date',
        'Error',
        'Float32Array',
        'Float64Array',
        'Function',
        'Int8Array',
        'Int16Array',
        'Int32Array',
        'Map',
        'Math',
        'Object',
        'Promise',
        'RegExp',
        'Set',
        'String',
        'Symbol',
        'TypeError',
        'Uint8Array',
        'Uint8ClampedArray',
        'Uint16Array',
        'Uint32Array',
        'WeakMap',
        '_',
        'clearTimeout',
        'isFinite',
        'parseInt',
        'setTimeout',
      ],
      ug = -1,
      $t = {}
    ;($t[pr] = $t[En] = $t[cn] = $t[Ae] = $t[_r] = $t[Ar] = $t[Or] = $t[gr] = $t[qn] = !0),
      ($t[qt] = $t[de] = $t[ke] = $t[ae] = $t[Ce] = $t[ne] = $t[pe] = $t[Ve] = $t[Rt] = $t[_e] = $t[D] = $t[An] = $t[Mt] = $t[On] = $t[Ut] = !1)
    var Nt = {}
    ;(Nt[qt] =
      Nt[de] =
      Nt[ke] =
      Nt[Ce] =
      Nt[ae] =
      Nt[ne] =
      Nt[pr] =
      Nt[En] =
      Nt[cn] =
      Nt[Ae] =
      Nt[_r] =
      Nt[Rt] =
      Nt[_e] =
      Nt[D] =
      Nt[An] =
      Nt[Mt] =
      Nt[On] =
      Nt[Gn] =
      Nt[Ar] =
      Nt[Or] =
      Nt[gr] =
      Nt[qn] =
        !0),
      (Nt[pe] = Nt[Ve] = Nt[Ut] = !1)
    var lg = {
        À: 'A',
        Á: 'A',
        Â: 'A',
        Ã: 'A',
        Ä: 'A',
        Å: 'A',
        à: 'a',
        á: 'a',
        â: 'a',
        ã: 'a',
        ä: 'a',
        å: 'a',
        Ç: 'C',
        ç: 'c',
        Ð: 'D',
        ð: 'd',
        È: 'E',
        É: 'E',
        Ê: 'E',
        Ë: 'E',
        è: 'e',
        é: 'e',
        ê: 'e',
        ë: 'e',
        Ì: 'I',
        Í: 'I',
        Î: 'I',
        Ï: 'I',
        ì: 'i',
        í: 'i',
        î: 'i',
        ï: 'i',
        Ñ: 'N',
        ñ: 'n',
        Ò: 'O',
        Ó: 'O',
        Ô: 'O',
        Õ: 'O',
        Ö: 'O',
        Ø: 'O',
        ò: 'o',
        ó: 'o',
        ô: 'o',
        õ: 'o',
        ö: 'o',
        ø: 'o',
        Ù: 'U',
        Ú: 'U',
        Û: 'U',
        Ü: 'U',
        ù: 'u',
        ú: 'u',
        û: 'u',
        ü: 'u',
        Ý: 'Y',
        ý: 'y',
        ÿ: 'y',
        Æ: 'Ae',
        æ: 'ae',
        Þ: 'Th',
        þ: 'th',
        ß: 'ss',
        Ā: 'A',
        Ă: 'A',
        Ą: 'A',
        ā: 'a',
        ă: 'a',
        ą: 'a',
        Ć: 'C',
        Ĉ: 'C',
        Ċ: 'C',
        Č: 'C',
        ć: 'c',
        ĉ: 'c',
        ċ: 'c',
        č: 'c',
        Ď: 'D',
        Đ: 'D',
        ď: 'd',
        đ: 'd',
        Ē: 'E',
        Ĕ: 'E',
        Ė: 'E',
        Ę: 'E',
        Ě: 'E',
        ē: 'e',
        ĕ: 'e',
        ė: 'e',
        ę: 'e',
        ě: 'e',
        Ĝ: 'G',
        Ğ: 'G',
        Ġ: 'G',
        Ģ: 'G',
        ĝ: 'g',
        ğ: 'g',
        ġ: 'g',
        ģ: 'g',
        Ĥ: 'H',
        Ħ: 'H',
        ĥ: 'h',
        ħ: 'h',
        Ĩ: 'I',
        Ī: 'I',
        Ĭ: 'I',
        Į: 'I',
        İ: 'I',
        ĩ: 'i',
        ī: 'i',
        ĭ: 'i',
        į: 'i',
        ı: 'i',
        Ĵ: 'J',
        ĵ: 'j',
        Ķ: 'K',
        ķ: 'k',
        ĸ: 'k',
        Ĺ: 'L',
        Ļ: 'L',
        Ľ: 'L',
        Ŀ: 'L',
        Ł: 'L',
        ĺ: 'l',
        ļ: 'l',
        ľ: 'l',
        ŀ: 'l',
        ł: 'l',
        Ń: 'N',
        Ņ: 'N',
        Ň: 'N',
        Ŋ: 'N',
        ń: 'n',
        ņ: 'n',
        ň: 'n',
        ŋ: 'n',
        Ō: 'O',
        Ŏ: 'O',
        Ő: 'O',
        ō: 'o',
        ŏ: 'o',
        ő: 'o',
        Ŕ: 'R',
        Ŗ: 'R',
        Ř: 'R',
        ŕ: 'r',
        ŗ: 'r',
        ř: 'r',
        Ś: 'S',
        Ŝ: 'S',
        Ş: 'S',
        Š: 'S',
        ś: 's',
        ŝ: 's',
        ş: 's',
        š: 's',
        Ţ: 'T',
        Ť: 'T',
        Ŧ: 'T',
        ţ: 't',
        ť: 't',
        ŧ: 't',
        Ũ: 'U',
        Ū: 'U',
        Ŭ: 'U',
        Ů: 'U',
        Ű: 'U',
        Ų: 'U',
        ũ: 'u',
        ū: 'u',
        ŭ: 'u',
        ů: 'u',
        ű: 'u',
        ų: 'u',
        Ŵ: 'W',
        ŵ: 'w',
        Ŷ: 'Y',
        ŷ: 'y',
        Ÿ: 'Y',
        Ź: 'Z',
        Ż: 'Z',
        Ž: 'Z',
        ź: 'z',
        ż: 'z',
        ž: 'z',
        Ĳ: 'IJ',
        ĳ: 'ij',
        Œ: 'Oe',
        œ: 'oe',
        ŉ: "'n",
        ſ: 's',
      },
      fg = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' },
      cg = { '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#39;': "'" },
      hg = { '\\': '\\', "'": "'", '\n': 'n', '\r': 'r', '\u2028': 'u2028', '\u2029': 'u2029' },
      dg = parseFloat,
      pg = parseInt,
      hc = typeof co == 'object' && co && co.Object === Object && co,
      _g = typeof self == 'object' && self && self.Object === Object && self,
      ze = hc || _g || Function('return this')(),
      Su = e && !e.nodeType && e,
      Li = Su && !0 && u && !u.nodeType && u,
      dc = Li && Li.exports === Su,
      Tu = dc && hc.process,
      Jn = (function () {
        try {
          var C = Li && Li.require && Li.require('util').types
          return C || (Tu && Tu.binding && Tu.binding('util'))
        } catch {}
      })(),
      pc = Jn && Jn.isArrayBuffer,
      _c = Jn && Jn.isDate,
      gc = Jn && Jn.isMap,
      mc = Jn && Jn.isRegExp,
      vc = Jn && Jn.isSet,
      yc = Jn && Jn.isTypedArray
    function Mn(C, F, L) {
      switch (L.length) {
        case 0:
          return C.call(F)
        case 1:
          return C.call(F, L[0])
        case 2:
          return C.call(F, L[0], L[1])
        case 3:
          return C.call(F, L[0], L[1], L[2])
      }
      return C.apply(F, L)
    }
    function gg(C, F, L, V) {
      for (var ot = -1, Lt = C == null ? 0 : C.length; ++ot < Lt; ) {
        var be = C[ot]
        F(V, be, L(be), C)
      }
      return V
    }
    function Qn(C, F) {
      for (var L = -1, V = C == null ? 0 : C.length; ++L < V && F(C[L], L, C) !== !1; );
      return C
    }
    function mg(C, F) {
      for (var L = C == null ? 0 : C.length; L-- && F(C[L], L, C) !== !1; );
      return C
    }
    function wc(C, F) {
      for (var L = -1, V = C == null ? 0 : C.length; ++L < V; ) if (!F(C[L], L, C)) return !1
      return !0
    }
    function oi(C, F) {
      for (var L = -1, V = C == null ? 0 : C.length, ot = 0, Lt = []; ++L < V; ) {
        var be = C[L]
        F(be, L, C) && (Lt[ot++] = be)
      }
      return Lt
    }
    function $o(C, F) {
      var L = C == null ? 0 : C.length
      return !!L && ds(C, F, 0) > -1
    }
    function Cu(C, F, L) {
      for (var V = -1, ot = C == null ? 0 : C.length; ++V < ot; ) if (L(F, C[V])) return !0
      return !1
    }
    function Vt(C, F) {
      for (var L = -1, V = C == null ? 0 : C.length, ot = Array(V); ++L < V; ) ot[L] = F(C[L], L, C)
      return ot
    }
    function ai(C, F) {
      for (var L = -1, V = F.length, ot = C.length; ++L < V; ) C[ot + L] = F[L]
      return C
    }
    function Au(C, F, L, V) {
      var ot = -1,
        Lt = C == null ? 0 : C.length
      for (V && Lt && (L = C[++ot]); ++ot < Lt; ) L = F(L, C[ot], ot, C)
      return L
    }
    function vg(C, F, L, V) {
      var ot = C == null ? 0 : C.length
      for (V && ot && (L = C[--ot]); ot--; ) L = F(L, C[ot], ot, C)
      return L
    }
    function Ou(C, F) {
      for (var L = -1, V = C == null ? 0 : C.length; ++L < V; ) if (F(C[L], L, C)) return !0
      return !1
    }
    var yg = Eu('length')
    function wg(C) {
      return C.split('')
    }
    function xg(C) {
      return C.match(Fe) || []
    }
    function xc(C, F, L) {
      var V
      return (
        L(C, function (ot, Lt, be) {
          if (F(ot, Lt, be)) return (V = Lt), !1
        }),
        V
      )
    }
    function Xo(C, F, L, V) {
      for (var ot = C.length, Lt = L + (V ? 1 : -1); V ? Lt-- : ++Lt < ot; ) if (F(C[Lt], Lt, C)) return Lt
      return -1
    }
    function ds(C, F, L) {
      return F === F ? Dg(C, F, L) : Xo(C, bc, L)
    }
    function bg(C, F, L, V) {
      for (var ot = L - 1, Lt = C.length; ++ot < Lt; ) if (V(C[ot], F)) return ot
      return -1
    }
    function bc(C) {
      return C !== C
    }
    function Sc(C, F) {
      var L = C == null ? 0 : C.length
      return L ? Ru(C, F) / L : O
    }
    function Eu(C) {
      return function (F) {
        return F == null ? n : F[C]
      }
    }
    function Pu(C) {
      return function (F) {
        return C == null ? n : C[F]
      }
    }
    function Tc(C, F, L, V, ot) {
      return (
        ot(C, function (Lt, be, zt) {
          L = V ? ((V = !1), Lt) : F(L, Lt, be, zt)
        }),
        L
      )
    }
    function Sg(C, F) {
      var L = C.length
      for (C.sort(F); L--; ) C[L] = C[L].value
      return C
    }
    function Ru(C, F) {
      for (var L, V = -1, ot = C.length; ++V < ot; ) {
        var Lt = F(C[V])
        Lt !== n && (L = L === n ? Lt : L + Lt)
      }
      return L
    }
    function Mu(C, F) {
      for (var L = -1, V = Array(C); ++L < C; ) V[L] = F(L)
      return V
    }
    function Tg(C, F) {
      return Vt(F, function (L) {
        return [L, C[L]]
      })
    }
    function Cc(C) {
      return C && C.slice(0, Pc(C) + 1).replace(tt, '')
    }
    function Ln(C) {
      return function (F) {
        return C(F)
      }
    }
    function Lu(C, F) {
      return Vt(F, function (L) {
        return C[L]
      })
    }
    function Zs(C, F) {
      return C.has(F)
    }
    function Ac(C, F) {
      for (var L = -1, V = C.length; ++L < V && ds(F, C[L], 0) > -1; );
      return L
    }
    function Oc(C, F) {
      for (var L = C.length; L-- && ds(F, C[L], 0) > -1; );
      return L
    }
    function Cg(C, F) {
      for (var L = C.length, V = 0; L--; ) C[L] === F && ++V
      return V
    }
    var Ag = Pu(lg),
      Og = Pu(fg)
    function Eg(C) {
      return '\\' + hg[C]
    }
    function Pg(C, F) {
      return C == null ? n : C[F]
    }
    function ps(C) {
      return sg.test(C)
    }
    function Rg(C) {
      return og.test(C)
    }
    function Mg(C) {
      for (var F, L = []; !(F = C.next()).done; ) L.push(F.value)
      return L
    }
    function Du(C) {
      var F = -1,
        L = Array(C.size)
      return (
        C.forEach(function (V, ot) {
          L[++F] = [ot, V]
        }),
        L
      )
    }
    function Ec(C, F) {
      return function (L) {
        return C(F(L))
      }
    }
    function ui(C, F) {
      for (var L = -1, V = C.length, ot = 0, Lt = []; ++L < V; ) {
        var be = C[L]
        ;(be === F || be === g) && ((C[L] = g), (Lt[ot++] = L))
      }
      return Lt
    }
    function Go(C) {
      var F = -1,
        L = Array(C.size)
      return (
        C.forEach(function (V) {
          L[++F] = V
        }),
        L
      )
    }
    function Lg(C) {
      var F = -1,
        L = Array(C.size)
      return (
        C.forEach(function (V) {
          L[++F] = [V, V]
        }),
        L
      )
    }
    function Dg(C, F, L) {
      for (var V = L - 1, ot = C.length; ++V < ot; ) if (C[V] === F) return V
      return -1
    }
    function Ig(C, F, L) {
      for (var V = L + 1; V--; ) if (C[V] === F) return V
      return V
    }
    function _s(C) {
      return ps(C) ? Fg(C) : yg(C)
    }
    function vr(C) {
      return ps(C) ? zg(C) : wg(C)
    }
    function Pc(C) {
      for (var F = C.length; F-- && pt.test(C.charAt(F)); );
      return F
    }
    var kg = Pu(cg)
    function Fg(C) {
      for (var F = (bu.lastIndex = 0); bu.test(C); ) ++F
      return F
    }
    function zg(C) {
      return C.match(bu) || []
    }
    function Wg(C) {
      return C.match(ig) || []
    }
    var Bg = function C(F) {
        F = F == null ? ze : gs.defaults(ze.Object(), F, gs.pick(ze, ag))
        var L = F.Array,
          V = F.Date,
          ot = F.Error,
          Lt = F.Function,
          be = F.Math,
          zt = F.Object,
          Iu = F.RegExp,
          Ng = F.String,
          jn = F.TypeError,
          qo = L.prototype,
          Ug = Lt.prototype,
          ms = zt.prototype,
          Vo = F['__core-js_shared__'],
          Ko = Ug.toString,
          kt = ms.hasOwnProperty,
          Yg = 0,
          Rc = (function () {
            var t = /[^.]+$/.exec((Vo && Vo.keys && Vo.keys.IE_PROTO) || '')
            return t ? 'Symbol(src)_1.' + t : ''
          })(),
          Zo = ms.toString,
          Hg = Ko.call(zt),
          $g = ze._,
          Xg = Iu(
            '^' +
              Ko.call(kt)
                .replace(q, '\\$&')
                .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
              '$'
          ),
          Jo = dc ? F.Buffer : n,
          li = F.Symbol,
          Qo = F.Uint8Array,
          Mc = Jo ? Jo.allocUnsafe : n,
          jo = Ec(zt.getPrototypeOf, zt),
          Lc = zt.create,
          Dc = ms.propertyIsEnumerable,
          ta = qo.splice,
          Ic = li ? li.isConcatSpreadable : n,
          Js = li ? li.iterator : n,
          Di = li ? li.toStringTag : n,
          ea = (function () {
            try {
              var t = Wi(zt, 'defineProperty')
              return t({}, '', {}), t
            } catch {}
          })(),
          Gg = F.clearTimeout !== ze.clearTimeout && F.clearTimeout,
          qg = V && V.now !== ze.Date.now && V.now,
          Vg = F.setTimeout !== ze.setTimeout && F.setTimeout,
          na = be.ceil,
          ra = be.floor,
          ku = zt.getOwnPropertySymbols,
          Kg = Jo ? Jo.isBuffer : n,
          kc = F.isFinite,
          Zg = qo.join,
          Jg = Ec(zt.keys, zt),
          Se = be.max,
          Ye = be.min,
          Qg = V.now,
          jg = F.parseInt,
          Fc = be.random,
          t0 = qo.reverse,
          Fu = Wi(F, 'DataView'),
          Qs = Wi(F, 'Map'),
          zu = Wi(F, 'Promise'),
          vs = Wi(F, 'Set'),
          js = Wi(F, 'WeakMap'),
          to = Wi(zt, 'create'),
          ia = js && new js(),
          ys = {},
          e0 = Bi(Fu),
          n0 = Bi(Qs),
          r0 = Bi(zu),
          i0 = Bi(vs),
          s0 = Bi(js),
          sa = li ? li.prototype : n,
          eo = sa ? sa.valueOf : n,
          zc = sa ? sa.toString : n
        function _(t) {
          if (ie(t) && !ut(t) && !(t instanceof St)) {
            if (t instanceof tr) return t
            if (kt.call(t, '__wrapped__')) return Wh(t)
          }
          return new tr(t)
        }
        var ws = (function () {
          function t() {}
          return function (r) {
            if (!Jt(r)) return {}
            if (Lc) return Lc(r)
            t.prototype = r
            var o = new t()
            return (t.prototype = n), o
          }
        })()
        function oa() {}
        function tr(t, r) {
          ;(this.__wrapped__ = t), (this.__actions__ = []), (this.__chain__ = !!r), (this.__index__ = 0), (this.__values__ = n)
        }
        ;(_.templateSettings = { escape: ii, evaluate: mr, interpolate: st, variable: '', imports: { _ } }),
          (_.prototype = oa.prototype),
          (_.prototype.constructor = _),
          (tr.prototype = ws(oa.prototype)),
          (tr.prototype.constructor = tr)
        function St(t) {
          ;(this.__wrapped__ = t),
            (this.__actions__ = []),
            (this.__dir__ = 1),
            (this.__filtered__ = !1),
            (this.__iteratees__ = []),
            (this.__takeCount__ = xt),
            (this.__views__ = [])
        }
        function o0() {
          var t = new St(this.__wrapped__)
          return (
            (t.__actions__ = _n(this.__actions__)),
            (t.__dir__ = this.__dir__),
            (t.__filtered__ = this.__filtered__),
            (t.__iteratees__ = _n(this.__iteratees__)),
            (t.__takeCount__ = this.__takeCount__),
            (t.__views__ = _n(this.__views__)),
            t
          )
        }
        function a0() {
          if (this.__filtered__) {
            var t = new St(this)
            ;(t.__dir__ = -1), (t.__filtered__ = !0)
          } else (t = this.clone()), (t.__dir__ *= -1)
          return t
        }
        function u0() {
          var t = this.__wrapped__.value(),
            r = this.__dir__,
            o = ut(t),
            c = r < 0,
            d = o ? t.length : 0,
            m = wm(0, d, this.__views__),
            w = m.start,
            S = m.end,
            A = S - w,
            B = c ? S : w - 1,
            N = this.__iteratees__,
            Y = N.length,
            G = 0,
            Z = Ye(A, this.__takeCount__)
          if (!o || (!c && d == A && Z == A)) return ah(t, this.__actions__)
          var rt = []
          t: for (; A-- && G < Z; ) {
            B += r
            for (var ct = -1, it = t[B]; ++ct < Y; ) {
              var yt = N[ct],
                At = yt.iteratee,
                kn = yt.type,
                je = At(it)
              if (kn == ht) it = je
              else if (!je) {
                if (kn == nt) continue t
                break t
              }
            }
            rt[G++] = it
          }
          return rt
        }
        ;(St.prototype = ws(oa.prototype)), (St.prototype.constructor = St)
        function Ii(t) {
          var r = -1,
            o = t == null ? 0 : t.length
          for (this.clear(); ++r < o; ) {
            var c = t[r]
            this.set(c[0], c[1])
          }
        }
        function l0() {
          ;(this.__data__ = to ? to(null) : {}), (this.size = 0)
        }
        function f0(t) {
          var r = this.has(t) && delete this.__data__[t]
          return (this.size -= r ? 1 : 0), r
        }
        function c0(t) {
          var r = this.__data__
          if (to) {
            var o = r[t]
            return o === h ? n : o
          }
          return kt.call(r, t) ? r[t] : n
        }
        function h0(t) {
          var r = this.__data__
          return to ? r[t] !== n : kt.call(r, t)
        }
        function d0(t, r) {
          var o = this.__data__
          return (this.size += this.has(t) ? 0 : 1), (o[t] = to && r === n ? h : r), this
        }
        ;(Ii.prototype.clear = l0), (Ii.prototype.delete = f0), (Ii.prototype.get = c0), (Ii.prototype.has = h0), (Ii.prototype.set = d0)
        function Yr(t) {
          var r = -1,
            o = t == null ? 0 : t.length
          for (this.clear(); ++r < o; ) {
            var c = t[r]
            this.set(c[0], c[1])
          }
        }
        function p0() {
          ;(this.__data__ = []), (this.size = 0)
        }
        function _0(t) {
          var r = this.__data__,
            o = aa(r, t)
          if (o < 0) return !1
          var c = r.length - 1
          return o == c ? r.pop() : ta.call(r, o, 1), --this.size, !0
        }
        function g0(t) {
          var r = this.__data__,
            o = aa(r, t)
          return o < 0 ? n : r[o][1]
        }
        function m0(t) {
          return aa(this.__data__, t) > -1
        }
        function v0(t, r) {
          var o = this.__data__,
            c = aa(o, t)
          return c < 0 ? (++this.size, o.push([t, r])) : (o[c][1] = r), this
        }
        ;(Yr.prototype.clear = p0), (Yr.prototype.delete = _0), (Yr.prototype.get = g0), (Yr.prototype.has = m0), (Yr.prototype.set = v0)
        function Hr(t) {
          var r = -1,
            o = t == null ? 0 : t.length
          for (this.clear(); ++r < o; ) {
            var c = t[r]
            this.set(c[0], c[1])
          }
        }
        function y0() {
          ;(this.size = 0), (this.__data__ = { hash: new Ii(), map: new (Qs || Yr)(), string: new Ii() })
        }
        function w0(t) {
          var r = ya(this, t).delete(t)
          return (this.size -= r ? 1 : 0), r
        }
        function x0(t) {
          return ya(this, t).get(t)
        }
        function b0(t) {
          return ya(this, t).has(t)
        }
        function S0(t, r) {
          var o = ya(this, t),
            c = o.size
          return o.set(t, r), (this.size += o.size == c ? 0 : 1), this
        }
        ;(Hr.prototype.clear = y0), (Hr.prototype.delete = w0), (Hr.prototype.get = x0), (Hr.prototype.has = b0), (Hr.prototype.set = S0)
        function ki(t) {
          var r = -1,
            o = t == null ? 0 : t.length
          for (this.__data__ = new Hr(); ++r < o; ) this.add(t[r])
        }
        function T0(t) {
          return this.__data__.set(t, h), this
        }
        function C0(t) {
          return this.__data__.has(t)
        }
        ;(ki.prototype.add = ki.prototype.push = T0), (ki.prototype.has = C0)
        function yr(t) {
          var r = (this.__data__ = new Yr(t))
          this.size = r.size
        }
        function A0() {
          ;(this.__data__ = new Yr()), (this.size = 0)
        }
        function O0(t) {
          var r = this.__data__,
            o = r.delete(t)
          return (this.size = r.size), o
        }
        function E0(t) {
          return this.__data__.get(t)
        }
        function P0(t) {
          return this.__data__.has(t)
        }
        function R0(t, r) {
          var o = this.__data__
          if (o instanceof Yr) {
            var c = o.__data__
            if (!Qs || c.length < s - 1) return c.push([t, r]), (this.size = ++o.size), this
            o = this.__data__ = new Hr(c)
          }
          return o.set(t, r), (this.size = o.size), this
        }
        ;(yr.prototype.clear = A0), (yr.prototype.delete = O0), (yr.prototype.get = E0), (yr.prototype.has = P0), (yr.prototype.set = R0)
        function Wc(t, r) {
          var o = ut(t),
            c = !o && Ni(t),
            d = !o && !c && pi(t),
            m = !o && !c && !d && Ts(t),
            w = o || c || d || m,
            S = w ? Mu(t.length, Ng) : [],
            A = S.length
          for (var B in t)
            (r || kt.call(t, B)) &&
              !(
                w &&
                (B == 'length' ||
                  (d && (B == 'offset' || B == 'parent')) ||
                  (m && (B == 'buffer' || B == 'byteLength' || B == 'byteOffset')) ||
                  qr(B, A))
              ) &&
              S.push(B)
          return S
        }
        function Bc(t) {
          var r = t.length
          return r ? t[Vu(0, r - 1)] : n
        }
        function M0(t, r) {
          return wa(_n(t), Fi(r, 0, t.length))
        }
        function L0(t) {
          return wa(_n(t))
        }
        function Wu(t, r, o) {
          ;((o !== n && !wr(t[r], o)) || (o === n && !(r in t))) && $r(t, r, o)
        }
        function no(t, r, o) {
          var c = t[r]
          ;(!(kt.call(t, r) && wr(c, o)) || (o === n && !(r in t))) && $r(t, r, o)
        }
        function aa(t, r) {
          for (var o = t.length; o--; ) if (wr(t[o][0], r)) return o
          return -1
        }
        function D0(t, r, o, c) {
          return (
            fi(t, function (d, m, w) {
              r(c, d, o(d), w)
            }),
            c
          )
        }
        function Nc(t, r) {
          return t && Rr(r, Ee(r), t)
        }
        function I0(t, r) {
          return t && Rr(r, mn(r), t)
        }
        function $r(t, r, o) {
          r == '__proto__' && ea ? ea(t, r, { configurable: !0, enumerable: !0, value: o, writable: !0 }) : (t[r] = o)
        }
        function Bu(t, r) {
          for (var o = -1, c = r.length, d = L(c), m = t == null; ++o < c; ) d[o] = m ? n : yl(t, r[o])
          return d
        }
        function Fi(t, r, o) {
          return t === t && (o !== n && (t = t <= o ? t : o), r !== n && (t = t >= r ? t : r)), t
        }
        function er(t, r, o, c, d, m) {
          var w,
            S = r & y,
            A = r & x,
            B = r & v
          if ((o && (w = d ? o(t, c, d, m) : o(t)), w !== n)) return w
          if (!Jt(t)) return t
          var N = ut(t)
          if (N) {
            if (((w = bm(t)), !S)) return _n(t, w)
          } else {
            var Y = He(t),
              G = Y == Ve || Y == Tt
            if (pi(t)) return fh(t, S)
            if (Y == D || Y == qt || (G && !d)) {
              if (((w = A || G ? {} : Ph(t)), !S)) return A ? cm(t, I0(w, t)) : fm(t, Nc(w, t))
            } else {
              if (!Nt[Y]) return d ? t : {}
              w = Sm(t, Y, S)
            }
          }
          m || (m = new yr())
          var Z = m.get(t)
          if (Z) return Z
          m.set(t, w),
            id(t)
              ? t.forEach(function (it) {
                  w.add(er(it, r, o, it, t, m))
                })
              : nd(t) &&
                t.forEach(function (it, yt) {
                  w.set(yt, er(it, r, o, yt, t, m))
                })
          var rt = B ? (A ? sl : il) : A ? mn : Ee,
            ct = N ? n : rt(t)
          return (
            Qn(ct || t, function (it, yt) {
              ct && ((yt = it), (it = t[yt])), no(w, yt, er(it, r, o, yt, t, m))
            }),
            w
          )
        }
        function k0(t) {
          var r = Ee(t)
          return function (o) {
            return Uc(o, t, r)
          }
        }
        function Uc(t, r, o) {
          var c = o.length
          if (t == null) return !c
          for (t = zt(t); c--; ) {
            var d = o[c],
              m = r[d],
              w = t[d]
            if ((w === n && !(d in t)) || !m(w)) return !1
          }
          return !0
        }
        function Yc(t, r, o) {
          if (typeof t != 'function') throw new jn(l)
          return lo(function () {
            t.apply(n, o)
          }, r)
        }
        function ro(t, r, o, c) {
          var d = -1,
            m = $o,
            w = !0,
            S = t.length,
            A = [],
            B = r.length
          if (!S) return A
          o && (r = Vt(r, Ln(o))), c ? ((m = Cu), (w = !1)) : r.length >= s && ((m = Zs), (w = !1), (r = new ki(r)))
          t: for (; ++d < S; ) {
            var N = t[d],
              Y = o == null ? N : o(N)
            if (((N = c || N !== 0 ? N : 0), w && Y === Y)) {
              for (var G = B; G--; ) if (r[G] === Y) continue t
              A.push(N)
            } else m(r, Y, c) || A.push(N)
          }
          return A
        }
        var fi = _h(Pr),
          Hc = _h(Uu, !0)
        function F0(t, r) {
          var o = !0
          return (
            fi(t, function (c, d, m) {
              return (o = !!r(c, d, m)), o
            }),
            o
          )
        }
        function ua(t, r, o) {
          for (var c = -1, d = t.length; ++c < d; ) {
            var m = t[c],
              w = r(m)
            if (w != null && (S === n ? w === w && !In(w) : o(w, S)))
              var S = w,
                A = m
          }
          return A
        }
        function z0(t, r, o, c) {
          var d = t.length
          for (o = ft(o), o < 0 && (o = -o > d ? 0 : d + o), c = c === n || c > d ? d : ft(c), c < 0 && (c += d), c = o > c ? 0 : od(c); o < c; )
            t[o++] = r
          return t
        }
        function $c(t, r) {
          var o = []
          return (
            fi(t, function (c, d, m) {
              r(c, d, m) && o.push(c)
            }),
            o
          )
        }
        function We(t, r, o, c, d) {
          var m = -1,
            w = t.length
          for (o || (o = Cm), d || (d = []); ++m < w; ) {
            var S = t[m]
            r > 0 && o(S) ? (r > 1 ? We(S, r - 1, o, c, d) : ai(d, S)) : c || (d[d.length] = S)
          }
          return d
        }
        var Nu = gh(),
          Xc = gh(!0)
        function Pr(t, r) {
          return t && Nu(t, r, Ee)
        }
        function Uu(t, r) {
          return t && Xc(t, r, Ee)
        }
        function la(t, r) {
          return oi(r, function (o) {
            return Vr(t[o])
          })
        }
        function zi(t, r) {
          r = hi(r, t)
          for (var o = 0, c = r.length; t != null && o < c; ) t = t[Mr(r[o++])]
          return o && o == c ? t : n
        }
        function Gc(t, r, o) {
          var c = r(t)
          return ut(t) ? c : ai(c, o(t))
        }
        function Je(t) {
          return t == null ? (t === n ? Pi : Ke) : Di && Di in zt(t) ? ym(t) : Lm(t)
        }
        function Yu(t, r) {
          return t > r
        }
        function W0(t, r) {
          return t != null && kt.call(t, r)
        }
        function B0(t, r) {
          return t != null && r in zt(t)
        }
        function N0(t, r, o) {
          return t >= Ye(r, o) && t < Se(r, o)
        }
        function Hu(t, r, o) {
          for (var c = o ? Cu : $o, d = t[0].length, m = t.length, w = m, S = L(m), A = 1 / 0, B = []; w--; ) {
            var N = t[w]
            w && r && (N = Vt(N, Ln(r))), (A = Ye(N.length, A)), (S[w] = !o && (r || (d >= 120 && N.length >= 120)) ? new ki(w && N) : n)
          }
          N = t[0]
          var Y = -1,
            G = S[0]
          t: for (; ++Y < d && B.length < A; ) {
            var Z = N[Y],
              rt = r ? r(Z) : Z
            if (((Z = o || Z !== 0 ? Z : 0), !(G ? Zs(G, rt) : c(B, rt, o)))) {
              for (w = m; --w; ) {
                var ct = S[w]
                if (!(ct ? Zs(ct, rt) : c(t[w], rt, o))) continue t
              }
              G && G.push(rt), B.push(Z)
            }
          }
          return B
        }
        function U0(t, r, o, c) {
          return (
            Pr(t, function (d, m, w) {
              r(c, o(d), m, w)
            }),
            c
          )
        }
        function io(t, r, o) {
          ;(r = hi(r, t)), (t = Dh(t, r))
          var c = t == null ? t : t[Mr(rr(r))]
          return c == null ? n : Mn(c, t, o)
        }
        function qc(t) {
          return ie(t) && Je(t) == qt
        }
        function Y0(t) {
          return ie(t) && Je(t) == ke
        }
        function H0(t) {
          return ie(t) && Je(t) == ne
        }
        function so(t, r, o, c, d) {
          return t === r ? !0 : t == null || r == null || (!ie(t) && !ie(r)) ? t !== t && r !== r : $0(t, r, o, c, so, d)
        }
        function $0(t, r, o, c, d, m) {
          var w = ut(t),
            S = ut(r),
            A = w ? de : He(t),
            B = S ? de : He(r)
          ;(A = A == qt ? D : A), (B = B == qt ? D : B)
          var N = A == D,
            Y = B == D,
            G = A == B
          if (G && pi(t)) {
            if (!pi(r)) return !1
            ;(w = !0), (N = !1)
          }
          if (G && !N) return m || (m = new yr()), w || Ts(t) ? Ah(t, r, o, c, d, m) : mm(t, r, A, o, c, d, m)
          if (!(o & T)) {
            var Z = N && kt.call(t, '__wrapped__'),
              rt = Y && kt.call(r, '__wrapped__')
            if (Z || rt) {
              var ct = Z ? t.value() : t,
                it = rt ? r.value() : r
              return m || (m = new yr()), d(ct, it, o, c, m)
            }
          }
          return G ? (m || (m = new yr()), vm(t, r, o, c, d, m)) : !1
        }
        function X0(t) {
          return ie(t) && He(t) == Rt
        }
        function $u(t, r, o, c) {
          var d = o.length,
            m = d,
            w = !c
          if (t == null) return !m
          for (t = zt(t); d--; ) {
            var S = o[d]
            if (w && S[2] ? S[1] !== t[S[0]] : !(S[0] in t)) return !1
          }
          for (; ++d < m; ) {
            S = o[d]
            var A = S[0],
              B = t[A],
              N = S[1]
            if (w && S[2]) {
              if (B === n && !(A in t)) return !1
            } else {
              var Y = new yr()
              if (c) var G = c(B, N, A, t, r, Y)
              if (!(G === n ? so(N, B, T | b, c, Y) : G)) return !1
            }
          }
          return !0
        }
        function Vc(t) {
          if (!Jt(t) || Om(t)) return !1
          var r = Vr(t) ? Xg : Vn
          return r.test(Bi(t))
        }
        function G0(t) {
          return ie(t) && Je(t) == An
        }
        function q0(t) {
          return ie(t) && He(t) == Mt
        }
        function V0(t) {
          return ie(t) && Aa(t.length) && !!$t[Je(t)]
        }
        function Kc(t) {
          return typeof t == 'function' ? t : t == null ? vn : typeof t == 'object' ? (ut(t) ? Qc(t[0], t[1]) : Jc(t)) : md(t)
        }
        function Xu(t) {
          if (!uo(t)) return Jg(t)
          var r = []
          for (var o in zt(t)) kt.call(t, o) && o != 'constructor' && r.push(o)
          return r
        }
        function K0(t) {
          if (!Jt(t)) return Mm(t)
          var r = uo(t),
            o = []
          for (var c in t) (c == 'constructor' && (r || !kt.call(t, c))) || o.push(c)
          return o
        }
        function Gu(t, r) {
          return t < r
        }
        function Zc(t, r) {
          var o = -1,
            c = gn(t) ? L(t.length) : []
          return (
            fi(t, function (d, m, w) {
              c[++o] = r(d, m, w)
            }),
            c
          )
        }
        function Jc(t) {
          var r = al(t)
          return r.length == 1 && r[0][2]
            ? Mh(r[0][0], r[0][1])
            : function (o) {
                return o === t || $u(o, t, r)
              }
        }
        function Qc(t, r) {
          return ll(t) && Rh(r)
            ? Mh(Mr(t), r)
            : function (o) {
                var c = yl(o, t)
                return c === n && c === r ? wl(o, t) : so(r, c, T | b)
              }
        }
        function fa(t, r, o, c, d) {
          t !== r &&
            Nu(
              r,
              function (m, w) {
                if ((d || (d = new yr()), Jt(m))) Z0(t, r, w, o, fa, c, d)
                else {
                  var S = c ? c(cl(t, w), m, w + '', t, r, d) : n
                  S === n && (S = m), Wu(t, w, S)
                }
              },
              mn
            )
        }
        function Z0(t, r, o, c, d, m, w) {
          var S = cl(t, o),
            A = cl(r, o),
            B = w.get(A)
          if (B) {
            Wu(t, o, B)
            return
          }
          var N = m ? m(S, A, o + '', t, r, w) : n,
            Y = N === n
          if (Y) {
            var G = ut(A),
              Z = !G && pi(A),
              rt = !G && !Z && Ts(A)
            ;(N = A),
              G || Z || rt
                ? ut(S)
                  ? (N = S)
                  : fe(S)
                  ? (N = _n(S))
                  : Z
                  ? ((Y = !1), (N = fh(A, !0)))
                  : rt
                  ? ((Y = !1), (N = ch(A, !0)))
                  : (N = [])
                : fo(A) || Ni(A)
                ? ((N = S), Ni(S) ? (N = ad(S)) : (!Jt(S) || Vr(S)) && (N = Ph(A)))
                : (Y = !1)
          }
          Y && (w.set(A, N), d(N, A, c, m, w), w.delete(A)), Wu(t, o, N)
        }
        function jc(t, r) {
          var o = t.length
          if (o) return (r += r < 0 ? o : 0), qr(r, o) ? t[r] : n
        }
        function th(t, r, o) {
          r.length
            ? (r = Vt(r, function (m) {
                return ut(m)
                  ? function (w) {
                      return zi(w, m.length === 1 ? m[0] : m)
                    }
                  : m
              }))
            : (r = [vn])
          var c = -1
          r = Vt(r, Ln(et()))
          var d = Zc(t, function (m, w, S) {
            var A = Vt(r, function (B) {
              return B(m)
            })
            return { criteria: A, index: ++c, value: m }
          })
          return Sg(d, function (m, w) {
            return lm(m, w, o)
          })
        }
        function J0(t, r) {
          return eh(t, r, function (o, c) {
            return wl(t, c)
          })
        }
        function eh(t, r, o) {
          for (var c = -1, d = r.length, m = {}; ++c < d; ) {
            var w = r[c],
              S = zi(t, w)
            o(S, w) && oo(m, hi(w, t), S)
          }
          return m
        }
        function Q0(t) {
          return function (r) {
            return zi(r, t)
          }
        }
        function qu(t, r, o, c) {
          var d = c ? bg : ds,
            m = -1,
            w = r.length,
            S = t
          for (t === r && (r = _n(r)), o && (S = Vt(t, Ln(o))); ++m < w; )
            for (var A = 0, B = r[m], N = o ? o(B) : B; (A = d(S, N, A, c)) > -1; ) S !== t && ta.call(S, A, 1), ta.call(t, A, 1)
          return t
        }
        function nh(t, r) {
          for (var o = t ? r.length : 0, c = o - 1; o--; ) {
            var d = r[o]
            if (o == c || d !== m) {
              var m = d
              qr(d) ? ta.call(t, d, 1) : Ju(t, d)
            }
          }
          return t
        }
        function Vu(t, r) {
          return t + ra(Fc() * (r - t + 1))
        }
        function j0(t, r, o, c) {
          for (var d = -1, m = Se(na((r - t) / (o || 1)), 0), w = L(m); m--; ) (w[c ? m : ++d] = t), (t += o)
          return w
        }
        function Ku(t, r) {
          var o = ''
          if (!t || r < 1 || r > lt) return o
          do r % 2 && (o += t), (r = ra(r / 2)), r && (t += t)
          while (r)
          return o
        }
        function _t(t, r) {
          return hl(Lh(t, r, vn), t + '')
        }
        function tm(t) {
          return Bc(Cs(t))
        }
        function em(t, r) {
          var o = Cs(t)
          return wa(o, Fi(r, 0, o.length))
        }
        function oo(t, r, o, c) {
          if (!Jt(t)) return t
          r = hi(r, t)
          for (var d = -1, m = r.length, w = m - 1, S = t; S != null && ++d < m; ) {
            var A = Mr(r[d]),
              B = o
            if (A === '__proto__' || A === 'constructor' || A === 'prototype') return t
            if (d != w) {
              var N = S[A]
              ;(B = c ? c(N, A, S) : n), B === n && (B = Jt(N) ? N : qr(r[d + 1]) ? [] : {})
            }
            no(S, A, B), (S = S[A])
          }
          return t
        }
        var rh = ia
            ? function (t, r) {
                return ia.set(t, r), t
              }
            : vn,
          nm = ea
            ? function (t, r) {
                return ea(t, 'toString', { configurable: !0, enumerable: !1, value: bl(r), writable: !0 })
              }
            : vn
        function rm(t) {
          return wa(Cs(t))
        }
        function nr(t, r, o) {
          var c = -1,
            d = t.length
          r < 0 && (r = -r > d ? 0 : d + r), (o = o > d ? d : o), o < 0 && (o += d), (d = r > o ? 0 : (o - r) >>> 0), (r >>>= 0)
          for (var m = L(d); ++c < d; ) m[c] = t[c + r]
          return m
        }
        function im(t, r) {
          var o
          return (
            fi(t, function (c, d, m) {
              return (o = r(c, d, m)), !o
            }),
            !!o
          )
        }
        function ca(t, r, o) {
          var c = 0,
            d = t == null ? c : t.length
          if (typeof r == 'number' && r === r && d <= Cn) {
            for (; c < d; ) {
              var m = (c + d) >>> 1,
                w = t[m]
              w !== null && !In(w) && (o ? w <= r : w < r) ? (c = m + 1) : (d = m)
            }
            return d
          }
          return Zu(t, r, vn, o)
        }
        function Zu(t, r, o, c) {
          var d = 0,
            m = t == null ? 0 : t.length
          if (m === 0) return 0
          r = o(r)
          for (var w = r !== r, S = r === null, A = In(r), B = r === n; d < m; ) {
            var N = ra((d + m) / 2),
              Y = o(t[N]),
              G = Y !== n,
              Z = Y === null,
              rt = Y === Y,
              ct = In(Y)
            if (w) var it = c || rt
            else
              B
                ? (it = rt && (c || G))
                : S
                ? (it = rt && G && (c || !Z))
                : A
                ? (it = rt && G && !Z && (c || !ct))
                : Z || ct
                ? (it = !1)
                : (it = c ? Y <= r : Y < r)
            it ? (d = N + 1) : (m = N)
          }
          return Ye(m, Ie)
        }
        function ih(t, r) {
          for (var o = -1, c = t.length, d = 0, m = []; ++o < c; ) {
            var w = t[o],
              S = r ? r(w) : w
            if (!o || !wr(S, A)) {
              var A = S
              m[d++] = w === 0 ? 0 : w
            }
          }
          return m
        }
        function sh(t) {
          return typeof t == 'number' ? t : In(t) ? O : +t
        }
        function Dn(t) {
          if (typeof t == 'string') return t
          if (ut(t)) return Vt(t, Dn) + ''
          if (In(t)) return zc ? zc.call(t) : ''
          var r = t + ''
          return r == '0' && 1 / t == -Q ? '-0' : r
        }
        function ci(t, r, o) {
          var c = -1,
            d = $o,
            m = t.length,
            w = !0,
            S = [],
            A = S
          if (o) (w = !1), (d = Cu)
          else if (m >= s) {
            var B = r ? null : _m(t)
            if (B) return Go(B)
            ;(w = !1), (d = Zs), (A = new ki())
          } else A = r ? [] : S
          t: for (; ++c < m; ) {
            var N = t[c],
              Y = r ? r(N) : N
            if (((N = o || N !== 0 ? N : 0), w && Y === Y)) {
              for (var G = A.length; G--; ) if (A[G] === Y) continue t
              r && A.push(Y), S.push(N)
            } else d(A, Y, o) || (A !== S && A.push(Y), S.push(N))
          }
          return S
        }
        function Ju(t, r) {
          return (r = hi(r, t)), (t = Dh(t, r)), t == null || delete t[Mr(rr(r))]
        }
        function oh(t, r, o, c) {
          return oo(t, r, o(zi(t, r)), c)
        }
        function ha(t, r, o, c) {
          for (var d = t.length, m = c ? d : -1; (c ? m-- : ++m < d) && r(t[m], m, t); );
          return o ? nr(t, c ? 0 : m, c ? m + 1 : d) : nr(t, c ? m + 1 : 0, c ? d : m)
        }
        function ah(t, r) {
          var o = t
          return (
            o instanceof St && (o = o.value()),
            Au(
              r,
              function (c, d) {
                return d.func.apply(d.thisArg, ai([c], d.args))
              },
              o
            )
          )
        }
        function Qu(t, r, o) {
          var c = t.length
          if (c < 2) return c ? ci(t[0]) : []
          for (var d = -1, m = L(c); ++d < c; ) for (var w = t[d], S = -1; ++S < c; ) S != d && (m[d] = ro(m[d] || w, t[S], r, o))
          return ci(We(m, 1), r, o)
        }
        function uh(t, r, o) {
          for (var c = -1, d = t.length, m = r.length, w = {}; ++c < d; ) {
            var S = c < m ? r[c] : n
            o(w, t[c], S)
          }
          return w
        }
        function ju(t) {
          return fe(t) ? t : []
        }
        function tl(t) {
          return typeof t == 'function' ? t : vn
        }
        function hi(t, r) {
          return ut(t) ? t : ll(t, r) ? [t] : zh(Dt(t))
        }
        var sm = _t
        function di(t, r, o) {
          var c = t.length
          return (o = o === n ? c : o), !r && o >= c ? t : nr(t, r, o)
        }
        var lh =
          Gg ||
          function (t) {
            return ze.clearTimeout(t)
          }
        function fh(t, r) {
          if (r) return t.slice()
          var o = t.length,
            c = Mc ? Mc(o) : new t.constructor(o)
          return t.copy(c), c
        }
        function el(t) {
          var r = new t.constructor(t.byteLength)
          return new Qo(r).set(new Qo(t)), r
        }
        function om(t, r) {
          var o = r ? el(t.buffer) : t.buffer
          return new t.constructor(o, t.byteOffset, t.byteLength)
        }
        function am(t) {
          var r = new t.constructor(t.source, pn.exec(t))
          return (r.lastIndex = t.lastIndex), r
        }
        function um(t) {
          return eo ? zt(eo.call(t)) : {}
        }
        function ch(t, r) {
          var o = r ? el(t.buffer) : t.buffer
          return new t.constructor(o, t.byteOffset, t.length)
        }
        function hh(t, r) {
          if (t !== r) {
            var o = t !== n,
              c = t === null,
              d = t === t,
              m = In(t),
              w = r !== n,
              S = r === null,
              A = r === r,
              B = In(r)
            if ((!S && !B && !m && t > r) || (m && w && A && !S && !B) || (c && w && A) || (!o && A) || !d) return 1
            if ((!c && !m && !B && t < r) || (B && o && d && !c && !m) || (S && o && d) || (!w && d) || !A) return -1
          }
          return 0
        }
        function lm(t, r, o) {
          for (var c = -1, d = t.criteria, m = r.criteria, w = d.length, S = o.length; ++c < w; ) {
            var A = hh(d[c], m[c])
            if (A) {
              if (c >= S) return A
              var B = o[c]
              return A * (B == 'desc' ? -1 : 1)
            }
          }
          return t.index - r.index
        }
        function dh(t, r, o, c) {
          for (var d = -1, m = t.length, w = o.length, S = -1, A = r.length, B = Se(m - w, 0), N = L(A + B), Y = !c; ++S < A; ) N[S] = r[S]
          for (; ++d < w; ) (Y || d < m) && (N[o[d]] = t[d])
          for (; B--; ) N[S++] = t[d++]
          return N
        }
        function ph(t, r, o, c) {
          for (var d = -1, m = t.length, w = -1, S = o.length, A = -1, B = r.length, N = Se(m - S, 0), Y = L(N + B), G = !c; ++d < N; ) Y[d] = t[d]
          for (var Z = d; ++A < B; ) Y[Z + A] = r[A]
          for (; ++w < S; ) (G || d < m) && (Y[Z + o[w]] = t[d++])
          return Y
        }
        function _n(t, r) {
          var o = -1,
            c = t.length
          for (r || (r = L(c)); ++o < c; ) r[o] = t[o]
          return r
        }
        function Rr(t, r, o, c) {
          var d = !o
          o || (o = {})
          for (var m = -1, w = r.length; ++m < w; ) {
            var S = r[m],
              A = c ? c(o[S], t[S], S, o, t) : n
            A === n && (A = t[S]), d ? $r(o, S, A) : no(o, S, A)
          }
          return o
        }
        function fm(t, r) {
          return Rr(t, ul(t), r)
        }
        function cm(t, r) {
          return Rr(t, Oh(t), r)
        }
        function da(t, r) {
          return function (o, c) {
            var d = ut(o) ? gg : D0,
              m = r ? r() : {}
            return d(o, t, et(c, 2), m)
          }
        }
        function xs(t) {
          return _t(function (r, o) {
            var c = -1,
              d = o.length,
              m = d > 1 ? o[d - 1] : n,
              w = d > 2 ? o[2] : n
            for (
              m = t.length > 3 && typeof m == 'function' ? (d--, m) : n, w && Qe(o[0], o[1], w) && ((m = d < 3 ? n : m), (d = 1)), r = zt(r);
              ++c < d;

            ) {
              var S = o[c]
              S && t(r, S, c, m)
            }
            return r
          })
        }
        function _h(t, r) {
          return function (o, c) {
            if (o == null) return o
            if (!gn(o)) return t(o, c)
            for (var d = o.length, m = r ? d : -1, w = zt(o); (r ? m-- : ++m < d) && c(w[m], m, w) !== !1; );
            return o
          }
        }
        function gh(t) {
          return function (r, o, c) {
            for (var d = -1, m = zt(r), w = c(r), S = w.length; S--; ) {
              var A = w[t ? S : ++d]
              if (o(m[A], A, m) === !1) break
            }
            return r
          }
        }
        function hm(t, r, o) {
          var c = r & E,
            d = ao(t)
          function m() {
            var w = this && this !== ze && this instanceof m ? d : t
            return w.apply(c ? o : this, arguments)
          }
          return m
        }
        function mh(t) {
          return function (r) {
            r = Dt(r)
            var o = ps(r) ? vr(r) : n,
              c = o ? o[0] : r.charAt(0),
              d = o ? di(o, 1).join('') : r.slice(1)
            return c[t]() + d
          }
        }
        function bs(t) {
          return function (r) {
            return Au(_d(pd(r).replace(ng, '')), t, '')
          }
        }
        function ao(t) {
          return function () {
            var r = arguments
            switch (r.length) {
              case 0:
                return new t()
              case 1:
                return new t(r[0])
              case 2:
                return new t(r[0], r[1])
              case 3:
                return new t(r[0], r[1], r[2])
              case 4:
                return new t(r[0], r[1], r[2], r[3])
              case 5:
                return new t(r[0], r[1], r[2], r[3], r[4])
              case 6:
                return new t(r[0], r[1], r[2], r[3], r[4], r[5])
              case 7:
                return new t(r[0], r[1], r[2], r[3], r[4], r[5], r[6])
            }
            var o = ws(t.prototype),
              c = t.apply(o, r)
            return Jt(c) ? c : o
          }
        }
        function dm(t, r, o) {
          var c = ao(t)
          function d() {
            for (var m = arguments.length, w = L(m), S = m, A = Ss(d); S--; ) w[S] = arguments[S]
            var B = m < 3 && w[0] !== A && w[m - 1] !== A ? [] : ui(w, A)
            if (((m -= B.length), m < o)) return bh(t, r, pa, d.placeholder, n, w, B, n, n, o - m)
            var N = this && this !== ze && this instanceof d ? c : t
            return Mn(N, this, w)
          }
          return d
        }
        function vh(t) {
          return function (r, o, c) {
            var d = zt(r)
            if (!gn(r)) {
              var m = et(o, 3)
              ;(r = Ee(r)),
                (o = function (S) {
                  return m(d[S], S, d)
                })
            }
            var w = t(r, o, c)
            return w > -1 ? d[m ? r[w] : w] : n
          }
        }
        function yh(t) {
          return Gr(function (r) {
            var o = r.length,
              c = o,
              d = tr.prototype.thru
            for (t && r.reverse(); c--; ) {
              var m = r[c]
              if (typeof m != 'function') throw new jn(l)
              if (d && !w && va(m) == 'wrapper') var w = new tr([], !0)
            }
            for (c = w ? c : o; ++c < o; ) {
              m = r[c]
              var S = va(m),
                A = S == 'wrapper' ? ol(m) : n
              A && fl(A[0]) && A[1] == (M | W | R | H) && !A[4].length && A[9] == 1
                ? (w = w[va(A[0])].apply(w, A[3]))
                : (w = m.length == 1 && fl(m) ? w[S]() : w.thru(m))
            }
            return function () {
              var B = arguments,
                N = B[0]
              if (w && B.length == 1 && ut(N)) return w.plant(N).value()
              for (var Y = 0, G = o ? r[Y].apply(this, B) : N; ++Y < o; ) G = r[Y].call(this, G)
              return G
            }
          })
        }
        function pa(t, r, o, c, d, m, w, S, A, B) {
          var N = r & M,
            Y = r & E,
            G = r & k,
            Z = r & (W | P),
            rt = r & U,
            ct = G ? n : ao(t)
          function it() {
            for (var yt = arguments.length, At = L(yt), kn = yt; kn--; ) At[kn] = arguments[kn]
            if (Z)
              var je = Ss(it),
                Fn = Cg(At, je)
            if ((c && (At = dh(At, c, d, Z)), m && (At = ph(At, m, w, Z)), (yt -= Fn), Z && yt < B)) {
              var ce = ui(At, je)
              return bh(t, r, pa, it.placeholder, o, At, ce, S, A, B - yt)
            }
            var xr = Y ? o : this,
              Zr = G ? xr[t] : t
            return (
              (yt = At.length),
              S ? (At = Dm(At, S)) : rt && yt > 1 && At.reverse(),
              N && A < yt && (At.length = A),
              this && this !== ze && this instanceof it && (Zr = ct || ao(Zr)),
              Zr.apply(xr, At)
            )
          }
          return it
        }
        function wh(t, r) {
          return function (o, c) {
            return U0(o, t, r(c), {})
          }
        }
        function _a(t, r) {
          return function (o, c) {
            var d
            if (o === n && c === n) return r
            if ((o !== n && (d = o), c !== n)) {
              if (d === n) return c
              typeof o == 'string' || typeof c == 'string' ? ((o = Dn(o)), (c = Dn(c))) : ((o = sh(o)), (c = sh(c))), (d = t(o, c))
            }
            return d
          }
        }
        function nl(t) {
          return Gr(function (r) {
            return (
              (r = Vt(r, Ln(et()))),
              _t(function (o) {
                var c = this
                return t(r, function (d) {
                  return Mn(d, c, o)
                })
              })
            )
          })
        }
        function ga(t, r) {
          r = r === n ? ' ' : Dn(r)
          var o = r.length
          if (o < 2) return o ? Ku(r, t) : r
          var c = Ku(r, na(t / _s(r)))
          return ps(r) ? di(vr(c), 0, t).join('') : c.slice(0, t)
        }
        function pm(t, r, o, c) {
          var d = r & E,
            m = ao(t)
          function w() {
            for (
              var S = -1, A = arguments.length, B = -1, N = c.length, Y = L(N + A), G = this && this !== ze && this instanceof w ? m : t;
              ++B < N;

            )
              Y[B] = c[B]
            for (; A--; ) Y[B++] = arguments[++S]
            return Mn(G, d ? o : this, Y)
          }
          return w
        }
        function xh(t) {
          return function (r, o, c) {
            return (
              c && typeof c != 'number' && Qe(r, o, c) && (o = c = n),
              (r = Kr(r)),
              o === n ? ((o = r), (r = 0)) : (o = Kr(o)),
              (c = c === n ? (r < o ? 1 : -1) : Kr(c)),
              j0(r, o, c, t)
            )
          }
        }
        function ma(t) {
          return function (r, o) {
            return (typeof r == 'string' && typeof o == 'string') || ((r = ir(r)), (o = ir(o))), t(r, o)
          }
        }
        function bh(t, r, o, c, d, m, w, S, A, B) {
          var N = r & W,
            Y = N ? w : n,
            G = N ? n : w,
            Z = N ? m : n,
            rt = N ? n : m
          ;(r |= N ? R : I), (r &= ~(N ? I : R)), r & z || (r &= ~(E | k))
          var ct = [t, r, d, Z, Y, rt, G, S, A, B],
            it = o.apply(n, ct)
          return fl(t) && Ih(it, ct), (it.placeholder = c), kh(it, t, r)
        }
        function rl(t) {
          var r = be[t]
          return function (o, c) {
            if (((o = ir(o)), (c = c == null ? 0 : Ye(ft(c), 292)), c && kc(o))) {
              var d = (Dt(o) + 'e').split('e'),
                m = r(d[0] + 'e' + (+d[1] + c))
              return (d = (Dt(m) + 'e').split('e')), +(d[0] + 'e' + (+d[1] - c))
            }
            return r(o)
          }
        }
        var _m =
          vs && 1 / Go(new vs([, -0]))[1] == Q
            ? function (t) {
                return new vs(t)
              }
            : Cl
        function Sh(t) {
          return function (r) {
            var o = He(r)
            return o == Rt ? Du(r) : o == Mt ? Lg(r) : Tg(r, t(r))
          }
        }
        function Xr(t, r, o, c, d, m, w, S) {
          var A = r & k
          if (!A && typeof t != 'function') throw new jn(l)
          var B = c ? c.length : 0
          if ((B || ((r &= ~(R | I)), (c = d = n)), (w = w === n ? w : Se(ft(w), 0)), (S = S === n ? S : ft(S)), (B -= d ? d.length : 0), r & I)) {
            var N = c,
              Y = d
            c = d = n
          }
          var G = A ? n : ol(t),
            Z = [t, r, o, c, d, N, Y, m, w, S]
          if (
            (G && Rm(Z, G),
            (t = Z[0]),
            (r = Z[1]),
            (o = Z[2]),
            (c = Z[3]),
            (d = Z[4]),
            (S = Z[9] = Z[9] === n ? (A ? 0 : t.length) : Se(Z[9] - B, 0)),
            !S && r & (W | P) && (r &= ~(W | P)),
            !r || r == E)
          )
            var rt = hm(t, r, o)
          else r == W || r == P ? (rt = dm(t, r, S)) : (r == R || r == (E | R)) && !d.length ? (rt = pm(t, r, o, c)) : (rt = pa.apply(n, Z))
          var ct = G ? rh : Ih
          return kh(ct(rt, Z), t, r)
        }
        function Th(t, r, o, c) {
          return t === n || (wr(t, ms[o]) && !kt.call(c, o)) ? r : t
        }
        function Ch(t, r, o, c, d, m) {
          return Jt(t) && Jt(r) && (m.set(r, t), fa(t, r, n, Ch, m), m.delete(r)), t
        }
        function gm(t) {
          return fo(t) ? n : t
        }
        function Ah(t, r, o, c, d, m) {
          var w = o & T,
            S = t.length,
            A = r.length
          if (S != A && !(w && A > S)) return !1
          var B = m.get(t),
            N = m.get(r)
          if (B && N) return B == r && N == t
          var Y = -1,
            G = !0,
            Z = o & b ? new ki() : n
          for (m.set(t, r), m.set(r, t); ++Y < S; ) {
            var rt = t[Y],
              ct = r[Y]
            if (c) var it = w ? c(ct, rt, Y, r, t, m) : c(rt, ct, Y, t, r, m)
            if (it !== n) {
              if (it) continue
              G = !1
              break
            }
            if (Z) {
              if (
                !Ou(r, function (yt, At) {
                  if (!Zs(Z, At) && (rt === yt || d(rt, yt, o, c, m))) return Z.push(At)
                })
              ) {
                G = !1
                break
              }
            } else if (!(rt === ct || d(rt, ct, o, c, m))) {
              G = !1
              break
            }
          }
          return m.delete(t), m.delete(r), G
        }
        function mm(t, r, o, c, d, m, w) {
          switch (o) {
            case Ce:
              if (t.byteLength != r.byteLength || t.byteOffset != r.byteOffset) return !1
              ;(t = t.buffer), (r = r.buffer)
            case ke:
              return !(t.byteLength != r.byteLength || !m(new Qo(t), new Qo(r)))
            case ae:
            case ne:
            case _e:
              return wr(+t, +r)
            case pe:
              return t.name == r.name && t.message == r.message
            case An:
            case On:
              return t == r + ''
            case Rt:
              var S = Du
            case Mt:
              var A = c & T
              if ((S || (S = Go), t.size != r.size && !A)) return !1
              var B = w.get(t)
              if (B) return B == r
              ;(c |= b), w.set(t, r)
              var N = Ah(S(t), S(r), c, d, m, w)
              return w.delete(t), N
            case Gn:
              if (eo) return eo.call(t) == eo.call(r)
          }
          return !1
        }
        function vm(t, r, o, c, d, m) {
          var w = o & T,
            S = il(t),
            A = S.length,
            B = il(r),
            N = B.length
          if (A != N && !w) return !1
          for (var Y = A; Y--; ) {
            var G = S[Y]
            if (!(w ? G in r : kt.call(r, G))) return !1
          }
          var Z = m.get(t),
            rt = m.get(r)
          if (Z && rt) return Z == r && rt == t
          var ct = !0
          m.set(t, r), m.set(r, t)
          for (var it = w; ++Y < A; ) {
            G = S[Y]
            var yt = t[G],
              At = r[G]
            if (c) var kn = w ? c(At, yt, G, r, t, m) : c(yt, At, G, t, r, m)
            if (!(kn === n ? yt === At || d(yt, At, o, c, m) : kn)) {
              ct = !1
              break
            }
            it || (it = G == 'constructor')
          }
          if (ct && !it) {
            var je = t.constructor,
              Fn = r.constructor
            je != Fn &&
              'constructor' in t &&
              'constructor' in r &&
              !(typeof je == 'function' && je instanceof je && typeof Fn == 'function' && Fn instanceof Fn) &&
              (ct = !1)
          }
          return m.delete(t), m.delete(r), ct
        }
        function Gr(t) {
          return hl(Lh(t, n, Uh), t + '')
        }
        function il(t) {
          return Gc(t, Ee, ul)
        }
        function sl(t) {
          return Gc(t, mn, Oh)
        }
        var ol = ia
          ? function (t) {
              return ia.get(t)
            }
          : Cl
        function va(t) {
          for (var r = t.name + '', o = ys[r], c = kt.call(ys, r) ? o.length : 0; c--; ) {
            var d = o[c],
              m = d.func
            if (m == null || m == t) return d.name
          }
          return r
        }
        function Ss(t) {
          var r = kt.call(_, 'placeholder') ? _ : t
          return r.placeholder
        }
        function et() {
          var t = _.iteratee || Sl
          return (t = t === Sl ? Kc : t), arguments.length ? t(arguments[0], arguments[1]) : t
        }
        function ya(t, r) {
          var o = t.__data__
          return Am(r) ? o[typeof r == 'string' ? 'string' : 'hash'] : o.map
        }
        function al(t) {
          for (var r = Ee(t), o = r.length; o--; ) {
            var c = r[o],
              d = t[c]
            r[o] = [c, d, Rh(d)]
          }
          return r
        }
        function Wi(t, r) {
          var o = Pg(t, r)
          return Vc(o) ? o : n
        }
        function ym(t) {
          var r = kt.call(t, Di),
            o = t[Di]
          try {
            t[Di] = n
            var c = !0
          } catch {}
          var d = Zo.call(t)
          return c && (r ? (t[Di] = o) : delete t[Di]), d
        }
        var ul = ku
            ? function (t) {
                return t == null
                  ? []
                  : ((t = zt(t)),
                    oi(ku(t), function (r) {
                      return Dc.call(t, r)
                    }))
              }
            : Al,
          Oh = ku
            ? function (t) {
                for (var r = []; t; ) ai(r, ul(t)), (t = jo(t))
                return r
              }
            : Al,
          He = Je
        ;((Fu && He(new Fu(new ArrayBuffer(1))) != Ce) ||
          (Qs && He(new Qs()) != Rt) ||
          (zu && He(zu.resolve()) != Ne) ||
          (vs && He(new vs()) != Mt) ||
          (js && He(new js()) != Ut)) &&
          (He = function (t) {
            var r = Je(t),
              o = r == D ? t.constructor : n,
              c = o ? Bi(o) : ''
            if (c)
              switch (c) {
                case e0:
                  return Ce
                case n0:
                  return Rt
                case r0:
                  return Ne
                case i0:
                  return Mt
                case s0:
                  return Ut
              }
            return r
          })
        function wm(t, r, o) {
          for (var c = -1, d = o.length; ++c < d; ) {
            var m = o[c],
              w = m.size
            switch (m.type) {
              case 'drop':
                t += w
                break
              case 'dropRight':
                r -= w
                break
              case 'take':
                r = Ye(r, t + w)
                break
              case 'takeRight':
                t = Se(t, r - w)
                break
            }
          }
          return { start: t, end: r }
        }
        function xm(t) {
          var r = t.match(Ct)
          return r ? r[1].split(Zt) : []
        }
        function Eh(t, r, o) {
          r = hi(r, t)
          for (var c = -1, d = r.length, m = !1; ++c < d; ) {
            var w = Mr(r[c])
            if (!(m = t != null && o(t, w))) break
            t = t[w]
          }
          return m || ++c != d ? m : ((d = t == null ? 0 : t.length), !!d && Aa(d) && qr(w, d) && (ut(t) || Ni(t)))
        }
        function bm(t) {
          var r = t.length,
            o = new t.constructor(r)
          return r && typeof t[0] == 'string' && kt.call(t, 'index') && ((o.index = t.index), (o.input = t.input)), o
        }
        function Ph(t) {
          return typeof t.constructor == 'function' && !uo(t) ? ws(jo(t)) : {}
        }
        function Sm(t, r, o) {
          var c = t.constructor
          switch (r) {
            case ke:
              return el(t)
            case ae:
            case ne:
              return new c(+t)
            case Ce:
              return om(t, o)
            case pr:
            case En:
            case cn:
            case Ae:
            case _r:
            case Ar:
            case Or:
            case gr:
            case qn:
              return ch(t, o)
            case Rt:
              return new c()
            case _e:
            case On:
              return new c(t)
            case An:
              return am(t)
            case Mt:
              return new c()
            case Gn:
              return um(t)
          }
        }
        function Tm(t, r) {
          var o = r.length
          if (!o) return t
          var c = o - 1
          return (
            (r[c] = (o > 1 ? '& ' : '') + r[c]),
            (r = r.join(o > 2 ? ', ' : ' ')),
            t.replace(
              ge,
              `{
/* [wrapped with ` +
                r +
                `] */
`
            )
          )
        }
        function Cm(t) {
          return ut(t) || Ni(t) || !!(Ic && t && t[Ic])
        }
        function qr(t, r) {
          var o = typeof t
          return (r = r ?? lt), !!r && (o == 'number' || (o != 'symbol' && xe.test(t))) && t > -1 && t % 1 == 0 && t < r
        }
        function Qe(t, r, o) {
          if (!Jt(o)) return !1
          var c = typeof r
          return (c == 'number' ? gn(o) && qr(r, o.length) : c == 'string' && r in o) ? wr(o[r], t) : !1
        }
        function ll(t, r) {
          if (ut(t)) return !1
          var o = typeof t
          return o == 'number' || o == 'symbol' || o == 'boolean' || t == null || In(t) ? !0 : Pt.test(t) || !j.test(t) || (r != null && t in zt(r))
        }
        function Am(t) {
          var r = typeof t
          return r == 'string' || r == 'number' || r == 'symbol' || r == 'boolean' ? t !== '__proto__' : t === null
        }
        function fl(t) {
          var r = va(t),
            o = _[r]
          if (typeof o != 'function' || !(r in St.prototype)) return !1
          if (t === o) return !0
          var c = ol(o)
          return !!c && t === c[0]
        }
        function Om(t) {
          return !!Rc && Rc in t
        }
        var Em = Vo ? Vr : Ol
        function uo(t) {
          var r = t && t.constructor,
            o = (typeof r == 'function' && r.prototype) || ms
          return t === o
        }
        function Rh(t) {
          return t === t && !Jt(t)
        }
        function Mh(t, r) {
          return function (o) {
            return o == null ? !1 : o[t] === r && (r !== n || t in zt(o))
          }
        }
        function Pm(t) {
          var r = Ta(t, function (c) {
              return o.size === p && o.clear(), c
            }),
            o = r.cache
          return r
        }
        function Rm(t, r) {
          var o = t[1],
            c = r[1],
            d = o | c,
            m = d < (E | k | M),
            w = (c == M && o == W) || (c == M && o == H && t[7].length <= r[8]) || (c == (M | H) && r[7].length <= r[8] && o == W)
          if (!(m || w)) return t
          c & E && ((t[2] = r[2]), (d |= o & E ? 0 : z))
          var S = r[3]
          if (S) {
            var A = t[3]
            ;(t[3] = A ? dh(A, S, r[4]) : S), (t[4] = A ? ui(t[3], g) : r[4])
          }
          return (
            (S = r[5]),
            S && ((A = t[5]), (t[5] = A ? ph(A, S, r[6]) : S), (t[6] = A ? ui(t[5], g) : r[6])),
            (S = r[7]),
            S && (t[7] = S),
            c & M && (t[8] = t[8] == null ? r[8] : Ye(t[8], r[8])),
            t[9] == null && (t[9] = r[9]),
            (t[0] = r[0]),
            (t[1] = d),
            t
          )
        }
        function Mm(t) {
          var r = []
          if (t != null) for (var o in zt(t)) r.push(o)
          return r
        }
        function Lm(t) {
          return Zo.call(t)
        }
        function Lh(t, r, o) {
          return (
            (r = Se(r === n ? t.length - 1 : r, 0)),
            function () {
              for (var c = arguments, d = -1, m = Se(c.length - r, 0), w = L(m); ++d < m; ) w[d] = c[r + d]
              d = -1
              for (var S = L(r + 1); ++d < r; ) S[d] = c[d]
              return (S[r] = o(w)), Mn(t, this, S)
            }
          )
        }
        function Dh(t, r) {
          return r.length < 2 ? t : zi(t, nr(r, 0, -1))
        }
        function Dm(t, r) {
          for (var o = t.length, c = Ye(r.length, o), d = _n(t); c--; ) {
            var m = r[c]
            t[c] = qr(m, o) ? d[m] : n
          }
          return t
        }
        function cl(t, r) {
          if (!(r === 'constructor' && typeof t[r] == 'function') && r != '__proto__') return t[r]
        }
        var Ih = Fh(rh),
          lo =
            Vg ||
            function (t, r) {
              return ze.setTimeout(t, r)
            },
          hl = Fh(nm)
        function kh(t, r, o) {
          var c = r + ''
          return hl(t, Tm(c, Im(xm(c), o)))
        }
        function Fh(t) {
          var r = 0,
            o = 0
          return function () {
            var c = Qg(),
              d = at - (c - o)
            if (((o = c), d > 0)) {
              if (++r >= X) return arguments[0]
            } else r = 0
            return t.apply(n, arguments)
          }
        }
        function wa(t, r) {
          var o = -1,
            c = t.length,
            d = c - 1
          for (r = r === n ? c : r; ++o < r; ) {
            var m = Vu(o, d),
              w = t[m]
            ;(t[m] = t[o]), (t[o] = w)
          }
          return (t.length = r), t
        }
        var zh = Pm(function (t) {
          var r = []
          return (
            t.charCodeAt(0) === 46 && r.push(''),
            t.replace(re, function (o, c, d, m) {
              r.push(d ? m.replace(Yt, '$1') : c || o)
            }),
            r
          )
        })
        function Mr(t) {
          if (typeof t == 'string' || In(t)) return t
          var r = t + ''
          return r == '0' && 1 / t == -Q ? '-0' : r
        }
        function Bi(t) {
          if (t != null) {
            try {
              return Ko.call(t)
            } catch {}
            try {
              return t + ''
            } catch {}
          }
          return ''
        }
        function Im(t, r) {
          return (
            Qn(Gt, function (o) {
              var c = '_.' + o[0]
              r & o[1] && !$o(t, c) && t.push(c)
            }),
            t.sort()
          )
        }
        function Wh(t) {
          if (t instanceof St) return t.clone()
          var r = new tr(t.__wrapped__, t.__chain__)
          return (r.__actions__ = _n(t.__actions__)), (r.__index__ = t.__index__), (r.__values__ = t.__values__), r
        }
        function km(t, r, o) {
          ;(o ? Qe(t, r, o) : r === n) ? (r = 1) : (r = Se(ft(r), 0))
          var c = t == null ? 0 : t.length
          if (!c || r < 1) return []
          for (var d = 0, m = 0, w = L(na(c / r)); d < c; ) w[m++] = nr(t, d, (d += r))
          return w
        }
        function Fm(t) {
          for (var r = -1, o = t == null ? 0 : t.length, c = 0, d = []; ++r < o; ) {
            var m = t[r]
            m && (d[c++] = m)
          }
          return d
        }
        function zm() {
          var t = arguments.length
          if (!t) return []
          for (var r = L(t - 1), o = arguments[0], c = t; c--; ) r[c - 1] = arguments[c]
          return ai(ut(o) ? _n(o) : [o], We(r, 1))
        }
        var Wm = _t(function (t, r) {
            return fe(t) ? ro(t, We(r, 1, fe, !0)) : []
          }),
          Bm = _t(function (t, r) {
            var o = rr(r)
            return fe(o) && (o = n), fe(t) ? ro(t, We(r, 1, fe, !0), et(o, 2)) : []
          }),
          Nm = _t(function (t, r) {
            var o = rr(r)
            return fe(o) && (o = n), fe(t) ? ro(t, We(r, 1, fe, !0), n, o) : []
          })
        function Um(t, r, o) {
          var c = t == null ? 0 : t.length
          return c ? ((r = o || r === n ? 1 : ft(r)), nr(t, r < 0 ? 0 : r, c)) : []
        }
        function Ym(t, r, o) {
          var c = t == null ? 0 : t.length
          return c ? ((r = o || r === n ? 1 : ft(r)), (r = c - r), nr(t, 0, r < 0 ? 0 : r)) : []
        }
        function Hm(t, r) {
          return t && t.length ? ha(t, et(r, 3), !0, !0) : []
        }
        function $m(t, r) {
          return t && t.length ? ha(t, et(r, 3), !0) : []
        }
        function Xm(t, r, o, c) {
          var d = t == null ? 0 : t.length
          return d ? (o && typeof o != 'number' && Qe(t, r, o) && ((o = 0), (c = d)), z0(t, r, o, c)) : []
        }
        function Bh(t, r, o) {
          var c = t == null ? 0 : t.length
          if (!c) return -1
          var d = o == null ? 0 : ft(o)
          return d < 0 && (d = Se(c + d, 0)), Xo(t, et(r, 3), d)
        }
        function Nh(t, r, o) {
          var c = t == null ? 0 : t.length
          if (!c) return -1
          var d = c - 1
          return o !== n && ((d = ft(o)), (d = o < 0 ? Se(c + d, 0) : Ye(d, c - 1))), Xo(t, et(r, 3), d, !0)
        }
        function Uh(t) {
          var r = t == null ? 0 : t.length
          return r ? We(t, 1) : []
        }
        function Gm(t) {
          var r = t == null ? 0 : t.length
          return r ? We(t, Q) : []
        }
        function qm(t, r) {
          var o = t == null ? 0 : t.length
          return o ? ((r = r === n ? 1 : ft(r)), We(t, r)) : []
        }
        function Vm(t) {
          for (var r = -1, o = t == null ? 0 : t.length, c = {}; ++r < o; ) {
            var d = t[r]
            c[d[0]] = d[1]
          }
          return c
        }
        function Yh(t) {
          return t && t.length ? t[0] : n
        }
        function Km(t, r, o) {
          var c = t == null ? 0 : t.length
          if (!c) return -1
          var d = o == null ? 0 : ft(o)
          return d < 0 && (d = Se(c + d, 0)), ds(t, r, d)
        }
        function Zm(t) {
          var r = t == null ? 0 : t.length
          return r ? nr(t, 0, -1) : []
        }
        var Jm = _t(function (t) {
            var r = Vt(t, ju)
            return r.length && r[0] === t[0] ? Hu(r) : []
          }),
          Qm = _t(function (t) {
            var r = rr(t),
              o = Vt(t, ju)
            return r === rr(o) ? (r = n) : o.pop(), o.length && o[0] === t[0] ? Hu(o, et(r, 2)) : []
          }),
          jm = _t(function (t) {
            var r = rr(t),
              o = Vt(t, ju)
            return (r = typeof r == 'function' ? r : n), r && o.pop(), o.length && o[0] === t[0] ? Hu(o, n, r) : []
          })
        function t1(t, r) {
          return t == null ? '' : Zg.call(t, r)
        }
        function rr(t) {
          var r = t == null ? 0 : t.length
          return r ? t[r - 1] : n
        }
        function e1(t, r, o) {
          var c = t == null ? 0 : t.length
          if (!c) return -1
          var d = c
          return o !== n && ((d = ft(o)), (d = d < 0 ? Se(c + d, 0) : Ye(d, c - 1))), r === r ? Ig(t, r, d) : Xo(t, bc, d, !0)
        }
        function n1(t, r) {
          return t && t.length ? jc(t, ft(r)) : n
        }
        var r1 = _t(Hh)
        function Hh(t, r) {
          return t && t.length && r && r.length ? qu(t, r) : t
        }
        function i1(t, r, o) {
          return t && t.length && r && r.length ? qu(t, r, et(o, 2)) : t
        }
        function s1(t, r, o) {
          return t && t.length && r && r.length ? qu(t, r, n, o) : t
        }
        var o1 = Gr(function (t, r) {
          var o = t == null ? 0 : t.length,
            c = Bu(t, r)
          return (
            nh(
              t,
              Vt(r, function (d) {
                return qr(d, o) ? +d : d
              }).sort(hh)
            ),
            c
          )
        })
        function a1(t, r) {
          var o = []
          if (!(t && t.length)) return o
          var c = -1,
            d = [],
            m = t.length
          for (r = et(r, 3); ++c < m; ) {
            var w = t[c]
            r(w, c, t) && (o.push(w), d.push(c))
          }
          return nh(t, d), o
        }
        function dl(t) {
          return t == null ? t : t0.call(t)
        }
        function u1(t, r, o) {
          var c = t == null ? 0 : t.length
          return c
            ? (o && typeof o != 'number' && Qe(t, r, o) ? ((r = 0), (o = c)) : ((r = r == null ? 0 : ft(r)), (o = o === n ? c : ft(o))), nr(t, r, o))
            : []
        }
        function l1(t, r) {
          return ca(t, r)
        }
        function f1(t, r, o) {
          return Zu(t, r, et(o, 2))
        }
        function c1(t, r) {
          var o = t == null ? 0 : t.length
          if (o) {
            var c = ca(t, r)
            if (c < o && wr(t[c], r)) return c
          }
          return -1
        }
        function h1(t, r) {
          return ca(t, r, !0)
        }
        function d1(t, r, o) {
          return Zu(t, r, et(o, 2), !0)
        }
        function p1(t, r) {
          var o = t == null ? 0 : t.length
          if (o) {
            var c = ca(t, r, !0) - 1
            if (wr(t[c], r)) return c
          }
          return -1
        }
        function _1(t) {
          return t && t.length ? ih(t) : []
        }
        function g1(t, r) {
          return t && t.length ? ih(t, et(r, 2)) : []
        }
        function m1(t) {
          var r = t == null ? 0 : t.length
          return r ? nr(t, 1, r) : []
        }
        function v1(t, r, o) {
          return t && t.length ? ((r = o || r === n ? 1 : ft(r)), nr(t, 0, r < 0 ? 0 : r)) : []
        }
        function y1(t, r, o) {
          var c = t == null ? 0 : t.length
          return c ? ((r = o || r === n ? 1 : ft(r)), (r = c - r), nr(t, r < 0 ? 0 : r, c)) : []
        }
        function w1(t, r) {
          return t && t.length ? ha(t, et(r, 3), !1, !0) : []
        }
        function x1(t, r) {
          return t && t.length ? ha(t, et(r, 3)) : []
        }
        var b1 = _t(function (t) {
            return ci(We(t, 1, fe, !0))
          }),
          S1 = _t(function (t) {
            var r = rr(t)
            return fe(r) && (r = n), ci(We(t, 1, fe, !0), et(r, 2))
          }),
          T1 = _t(function (t) {
            var r = rr(t)
            return (r = typeof r == 'function' ? r : n), ci(We(t, 1, fe, !0), n, r)
          })
        function C1(t) {
          return t && t.length ? ci(t) : []
        }
        function A1(t, r) {
          return t && t.length ? ci(t, et(r, 2)) : []
        }
        function O1(t, r) {
          return (r = typeof r == 'function' ? r : n), t && t.length ? ci(t, n, r) : []
        }
        function pl(t) {
          if (!(t && t.length)) return []
          var r = 0
          return (
            (t = oi(t, function (o) {
              if (fe(o)) return (r = Se(o.length, r)), !0
            })),
            Mu(r, function (o) {
              return Vt(t, Eu(o))
            })
          )
        }
        function $h(t, r) {
          if (!(t && t.length)) return []
          var o = pl(t)
          return r == null
            ? o
            : Vt(o, function (c) {
                return Mn(r, n, c)
              })
        }
        var E1 = _t(function (t, r) {
            return fe(t) ? ro(t, r) : []
          }),
          P1 = _t(function (t) {
            return Qu(oi(t, fe))
          }),
          R1 = _t(function (t) {
            var r = rr(t)
            return fe(r) && (r = n), Qu(oi(t, fe), et(r, 2))
          }),
          M1 = _t(function (t) {
            var r = rr(t)
            return (r = typeof r == 'function' ? r : n), Qu(oi(t, fe), n, r)
          }),
          L1 = _t(pl)
        function D1(t, r) {
          return uh(t || [], r || [], no)
        }
        function I1(t, r) {
          return uh(t || [], r || [], oo)
        }
        var k1 = _t(function (t) {
          var r = t.length,
            o = r > 1 ? t[r - 1] : n
          return (o = typeof o == 'function' ? (t.pop(), o) : n), $h(t, o)
        })
        function Xh(t) {
          var r = _(t)
          return (r.__chain__ = !0), r
        }
        function F1(t, r) {
          return r(t), t
        }
        function xa(t, r) {
          return r(t)
        }
        var z1 = Gr(function (t) {
          var r = t.length,
            o = r ? t[0] : 0,
            c = this.__wrapped__,
            d = function (m) {
              return Bu(m, t)
            }
          return r > 1 || this.__actions__.length || !(c instanceof St) || !qr(o)
            ? this.thru(d)
            : ((c = c.slice(o, +o + (r ? 1 : 0))),
              c.__actions__.push({ func: xa, args: [d], thisArg: n }),
              new tr(c, this.__chain__).thru(function (m) {
                return r && !m.length && m.push(n), m
              }))
        })
        function W1() {
          return Xh(this)
        }
        function B1() {
          return new tr(this.value(), this.__chain__)
        }
        function N1() {
          this.__values__ === n && (this.__values__ = sd(this.value()))
          var t = this.__index__ >= this.__values__.length,
            r = t ? n : this.__values__[this.__index__++]
          return { done: t, value: r }
        }
        function U1() {
          return this
        }
        function Y1(t) {
          for (var r, o = this; o instanceof oa; ) {
            var c = Wh(o)
            ;(c.__index__ = 0), (c.__values__ = n), r ? (d.__wrapped__ = c) : (r = c)
            var d = c
            o = o.__wrapped__
          }
          return (d.__wrapped__ = t), r
        }
        function H1() {
          var t = this.__wrapped__
          if (t instanceof St) {
            var r = t
            return (
              this.__actions__.length && (r = new St(this)),
              (r = r.reverse()),
              r.__actions__.push({ func: xa, args: [dl], thisArg: n }),
              new tr(r, this.__chain__)
            )
          }
          return this.thru(dl)
        }
        function $1() {
          return ah(this.__wrapped__, this.__actions__)
        }
        var X1 = da(function (t, r, o) {
          kt.call(t, o) ? ++t[o] : $r(t, o, 1)
        })
        function G1(t, r, o) {
          var c = ut(t) ? wc : F0
          return o && Qe(t, r, o) && (r = n), c(t, et(r, 3))
        }
        function q1(t, r) {
          var o = ut(t) ? oi : $c
          return o(t, et(r, 3))
        }
        var V1 = vh(Bh),
          K1 = vh(Nh)
        function Z1(t, r) {
          return We(ba(t, r), 1)
        }
        function J1(t, r) {
          return We(ba(t, r), Q)
        }
        function Q1(t, r, o) {
          return (o = o === n ? 1 : ft(o)), We(ba(t, r), o)
        }
        function Gh(t, r) {
          var o = ut(t) ? Qn : fi
          return o(t, et(r, 3))
        }
        function qh(t, r) {
          var o = ut(t) ? mg : Hc
          return o(t, et(r, 3))
        }
        var j1 = da(function (t, r, o) {
          kt.call(t, o) ? t[o].push(r) : $r(t, o, [r])
        })
        function tv(t, r, o, c) {
          ;(t = gn(t) ? t : Cs(t)), (o = o && !c ? ft(o) : 0)
          var d = t.length
          return o < 0 && (o = Se(d + o, 0)), Oa(t) ? o <= d && t.indexOf(r, o) > -1 : !!d && ds(t, r, o) > -1
        }
        var ev = _t(function (t, r, o) {
            var c = -1,
              d = typeof r == 'function',
              m = gn(t) ? L(t.length) : []
            return (
              fi(t, function (w) {
                m[++c] = d ? Mn(r, w, o) : io(w, r, o)
              }),
              m
            )
          }),
          nv = da(function (t, r, o) {
            $r(t, o, r)
          })
        function ba(t, r) {
          var o = ut(t) ? Vt : Zc
          return o(t, et(r, 3))
        }
        function rv(t, r, o, c) {
          return t == null ? [] : (ut(r) || (r = r == null ? [] : [r]), (o = c ? n : o), ut(o) || (o = o == null ? [] : [o]), th(t, r, o))
        }
        var iv = da(
          function (t, r, o) {
            t[o ? 0 : 1].push(r)
          },
          function () {
            return [[], []]
          }
        )
        function sv(t, r, o) {
          var c = ut(t) ? Au : Tc,
            d = arguments.length < 3
          return c(t, et(r, 4), o, d, fi)
        }
        function ov(t, r, o) {
          var c = ut(t) ? vg : Tc,
            d = arguments.length < 3
          return c(t, et(r, 4), o, d, Hc)
        }
        function av(t, r) {
          var o = ut(t) ? oi : $c
          return o(t, Ca(et(r, 3)))
        }
        function uv(t) {
          var r = ut(t) ? Bc : tm
          return r(t)
        }
        function lv(t, r, o) {
          ;(o ? Qe(t, r, o) : r === n) ? (r = 1) : (r = ft(r))
          var c = ut(t) ? M0 : em
          return c(t, r)
        }
        function fv(t) {
          var r = ut(t) ? L0 : rm
          return r(t)
        }
        function cv(t) {
          if (t == null) return 0
          if (gn(t)) return Oa(t) ? _s(t) : t.length
          var r = He(t)
          return r == Rt || r == Mt ? t.size : Xu(t).length
        }
        function hv(t, r, o) {
          var c = ut(t) ? Ou : im
          return o && Qe(t, r, o) && (r = n), c(t, et(r, 3))
        }
        var dv = _t(function (t, r) {
            if (t == null) return []
            var o = r.length
            return o > 1 && Qe(t, r[0], r[1]) ? (r = []) : o > 2 && Qe(r[0], r[1], r[2]) && (r = [r[0]]), th(t, We(r, 1), [])
          }),
          Sa =
            qg ||
            function () {
              return ze.Date.now()
            }
        function pv(t, r) {
          if (typeof r != 'function') throw new jn(l)
          return (
            (t = ft(t)),
            function () {
              if (--t < 1) return r.apply(this, arguments)
            }
          )
        }
        function Vh(t, r, o) {
          return (r = o ? n : r), (r = t && r == null ? t.length : r), Xr(t, M, n, n, n, n, r)
        }
        function Kh(t, r) {
          var o
          if (typeof r != 'function') throw new jn(l)
          return (
            (t = ft(t)),
            function () {
              return --t > 0 && (o = r.apply(this, arguments)), t <= 1 && (r = n), o
            }
          )
        }
        var _l = _t(function (t, r, o) {
            var c = E
            if (o.length) {
              var d = ui(o, Ss(_l))
              c |= R
            }
            return Xr(t, c, r, o, d)
          }),
          Zh = _t(function (t, r, o) {
            var c = E | k
            if (o.length) {
              var d = ui(o, Ss(Zh))
              c |= R
            }
            return Xr(r, c, t, o, d)
          })
        function Jh(t, r, o) {
          r = o ? n : r
          var c = Xr(t, W, n, n, n, n, n, r)
          return (c.placeholder = Jh.placeholder), c
        }
        function Qh(t, r, o) {
          r = o ? n : r
          var c = Xr(t, P, n, n, n, n, n, r)
          return (c.placeholder = Qh.placeholder), c
        }
        function jh(t, r, o) {
          var c,
            d,
            m,
            w,
            S,
            A,
            B = 0,
            N = !1,
            Y = !1,
            G = !0
          if (typeof t != 'function') throw new jn(l)
          ;(r = ir(r) || 0),
            Jt(o) && ((N = !!o.leading), (Y = 'maxWait' in o), (m = Y ? Se(ir(o.maxWait) || 0, r) : m), (G = 'trailing' in o ? !!o.trailing : G))
          function Z(ce) {
            var xr = c,
              Zr = d
            return (c = d = n), (B = ce), (w = t.apply(Zr, xr)), w
          }
          function rt(ce) {
            return (B = ce), (S = lo(yt, r)), N ? Z(ce) : w
          }
          function ct(ce) {
            var xr = ce - A,
              Zr = ce - B,
              vd = r - xr
            return Y ? Ye(vd, m - Zr) : vd
          }
          function it(ce) {
            var xr = ce - A,
              Zr = ce - B
            return A === n || xr >= r || xr < 0 || (Y && Zr >= m)
          }
          function yt() {
            var ce = Sa()
            if (it(ce)) return At(ce)
            S = lo(yt, ct(ce))
          }
          function At(ce) {
            return (S = n), G && c ? Z(ce) : ((c = d = n), w)
          }
          function kn() {
            S !== n && lh(S), (B = 0), (c = A = d = S = n)
          }
          function je() {
            return S === n ? w : At(Sa())
          }
          function Fn() {
            var ce = Sa(),
              xr = it(ce)
            if (((c = arguments), (d = this), (A = ce), xr)) {
              if (S === n) return rt(A)
              if (Y) return lh(S), (S = lo(yt, r)), Z(A)
            }
            return S === n && (S = lo(yt, r)), w
          }
          return (Fn.cancel = kn), (Fn.flush = je), Fn
        }
        var _v = _t(function (t, r) {
            return Yc(t, 1, r)
          }),
          gv = _t(function (t, r, o) {
            return Yc(t, ir(r) || 0, o)
          })
        function mv(t) {
          return Xr(t, U)
        }
        function Ta(t, r) {
          if (typeof t != 'function' || (r != null && typeof r != 'function')) throw new jn(l)
          var o = function () {
            var c = arguments,
              d = r ? r.apply(this, c) : c[0],
              m = o.cache
            if (m.has(d)) return m.get(d)
            var w = t.apply(this, c)
            return (o.cache = m.set(d, w) || m), w
          }
          return (o.cache = new (Ta.Cache || Hr)()), o
        }
        Ta.Cache = Hr
        function Ca(t) {
          if (typeof t != 'function') throw new jn(l)
          return function () {
            var r = arguments
            switch (r.length) {
              case 0:
                return !t.call(this)
              case 1:
                return !t.call(this, r[0])
              case 2:
                return !t.call(this, r[0], r[1])
              case 3:
                return !t.call(this, r[0], r[1], r[2])
            }
            return !t.apply(this, r)
          }
        }
        function vv(t) {
          return Kh(2, t)
        }
        var yv = sm(function (t, r) {
            r = r.length == 1 && ut(r[0]) ? Vt(r[0], Ln(et())) : Vt(We(r, 1), Ln(et()))
            var o = r.length
            return _t(function (c) {
              for (var d = -1, m = Ye(c.length, o); ++d < m; ) c[d] = r[d].call(this, c[d])
              return Mn(t, this, c)
            })
          }),
          gl = _t(function (t, r) {
            var o = ui(r, Ss(gl))
            return Xr(t, R, n, r, o)
          }),
          td = _t(function (t, r) {
            var o = ui(r, Ss(td))
            return Xr(t, I, n, r, o)
          }),
          wv = Gr(function (t, r) {
            return Xr(t, H, n, n, n, r)
          })
        function xv(t, r) {
          if (typeof t != 'function') throw new jn(l)
          return (r = r === n ? r : ft(r)), _t(t, r)
        }
        function bv(t, r) {
          if (typeof t != 'function') throw new jn(l)
          return (
            (r = r == null ? 0 : Se(ft(r), 0)),
            _t(function (o) {
              var c = o[r],
                d = di(o, 0, r)
              return c && ai(d, c), Mn(t, this, d)
            })
          )
        }
        function Sv(t, r, o) {
          var c = !0,
            d = !0
          if (typeof t != 'function') throw new jn(l)
          return (
            Jt(o) && ((c = 'leading' in o ? !!o.leading : c), (d = 'trailing' in o ? !!o.trailing : d)),
            jh(t, r, { leading: c, maxWait: r, trailing: d })
          )
        }
        function Tv(t) {
          return Vh(t, 1)
        }
        function Cv(t, r) {
          return gl(tl(r), t)
        }
        function Av() {
          if (!arguments.length) return []
          var t = arguments[0]
          return ut(t) ? t : [t]
        }
        function Ov(t) {
          return er(t, v)
        }
        function Ev(t, r) {
          return (r = typeof r == 'function' ? r : n), er(t, v, r)
        }
        function Pv(t) {
          return er(t, y | v)
        }
        function Rv(t, r) {
          return (r = typeof r == 'function' ? r : n), er(t, y | v, r)
        }
        function Mv(t, r) {
          return r == null || Uc(t, r, Ee(r))
        }
        function wr(t, r) {
          return t === r || (t !== t && r !== r)
        }
        var Lv = ma(Yu),
          Dv = ma(function (t, r) {
            return t >= r
          }),
          Ni = qc(
            (function () {
              return arguments
            })()
          )
            ? qc
            : function (t) {
                return ie(t) && kt.call(t, 'callee') && !Dc.call(t, 'callee')
              },
          ut = L.isArray,
          Iv = pc ? Ln(pc) : Y0
        function gn(t) {
          return t != null && Aa(t.length) && !Vr(t)
        }
        function fe(t) {
          return ie(t) && gn(t)
        }
        function kv(t) {
          return t === !0 || t === !1 || (ie(t) && Je(t) == ae)
        }
        var pi = Kg || Ol,
          Fv = _c ? Ln(_c) : H0
        function zv(t) {
          return ie(t) && t.nodeType === 1 && !fo(t)
        }
        function Wv(t) {
          if (t == null) return !0
          if (gn(t) && (ut(t) || typeof t == 'string' || typeof t.splice == 'function' || pi(t) || Ts(t) || Ni(t))) return !t.length
          var r = He(t)
          if (r == Rt || r == Mt) return !t.size
          if (uo(t)) return !Xu(t).length
          for (var o in t) if (kt.call(t, o)) return !1
          return !0
        }
        function Bv(t, r) {
          return so(t, r)
        }
        function Nv(t, r, o) {
          o = typeof o == 'function' ? o : n
          var c = o ? o(t, r) : n
          return c === n ? so(t, r, n, o) : !!c
        }
        function ml(t) {
          if (!ie(t)) return !1
          var r = Je(t)
          return r == pe || r == Cr || (typeof t.message == 'string' && typeof t.name == 'string' && !fo(t))
        }
        function Uv(t) {
          return typeof t == 'number' && kc(t)
        }
        function Vr(t) {
          if (!Jt(t)) return !1
          var r = Je(t)
          return r == Ve || r == Tt || r == ee || r == dr
        }
        function ed(t) {
          return typeof t == 'number' && t == ft(t)
        }
        function Aa(t) {
          return typeof t == 'number' && t > -1 && t % 1 == 0 && t <= lt
        }
        function Jt(t) {
          var r = typeof t
          return t != null && (r == 'object' || r == 'function')
        }
        function ie(t) {
          return t != null && typeof t == 'object'
        }
        var nd = gc ? Ln(gc) : X0
        function Yv(t, r) {
          return t === r || $u(t, r, al(r))
        }
        function Hv(t, r, o) {
          return (o = typeof o == 'function' ? o : n), $u(t, r, al(r), o)
        }
        function $v(t) {
          return rd(t) && t != +t
        }
        function Xv(t) {
          if (Em(t)) throw new ot(a)
          return Vc(t)
        }
        function Gv(t) {
          return t === null
        }
        function qv(t) {
          return t == null
        }
        function rd(t) {
          return typeof t == 'number' || (ie(t) && Je(t) == _e)
        }
        function fo(t) {
          if (!ie(t) || Je(t) != D) return !1
          var r = jo(t)
          if (r === null) return !0
          var o = kt.call(r, 'constructor') && r.constructor
          return typeof o == 'function' && o instanceof o && Ko.call(o) == Hg
        }
        var vl = mc ? Ln(mc) : G0
        function Vv(t) {
          return ed(t) && t >= -lt && t <= lt
        }
        var id = vc ? Ln(vc) : q0
        function Oa(t) {
          return typeof t == 'string' || (!ut(t) && ie(t) && Je(t) == On)
        }
        function In(t) {
          return typeof t == 'symbol' || (ie(t) && Je(t) == Gn)
        }
        var Ts = yc ? Ln(yc) : V0
        function Kv(t) {
          return t === n
        }
        function Zv(t) {
          return ie(t) && He(t) == Ut
        }
        function Jv(t) {
          return ie(t) && Je(t) == Kt
        }
        var Qv = ma(Gu),
          jv = ma(function (t, r) {
            return t <= r
          })
        function sd(t) {
          if (!t) return []
          if (gn(t)) return Oa(t) ? vr(t) : _n(t)
          if (Js && t[Js]) return Mg(t[Js]())
          var r = He(t),
            o = r == Rt ? Du : r == Mt ? Go : Cs
          return o(t)
        }
        function Kr(t) {
          if (!t) return t === 0 ? t : 0
          if (((t = ir(t)), t === Q || t === -Q)) {
            var r = t < 0 ? -1 : 1
            return r * Ft
          }
          return t === t ? t : 0
        }
        function ft(t) {
          var r = Kr(t),
            o = r % 1
          return r === r ? (o ? r - o : r) : 0
        }
        function od(t) {
          return t ? Fi(ft(t), 0, xt) : 0
        }
        function ir(t) {
          if (typeof t == 'number') return t
          if (In(t)) return O
          if (Jt(t)) {
            var r = typeof t.valueOf == 'function' ? t.valueOf() : t
            t = Jt(r) ? r + '' : r
          }
          if (typeof t != 'string') return t === 0 ? t : +t
          t = Cc(t)
          var o = Ze.test(t)
          return o || Ue.test(t) ? pg(t.slice(2), o ? 2 : 8) : Ht.test(t) ? O : +t
        }
        function ad(t) {
          return Rr(t, mn(t))
        }
        function ty(t) {
          return t ? Fi(ft(t), -lt, lt) : t === 0 ? t : 0
        }
        function Dt(t) {
          return t == null ? '' : Dn(t)
        }
        var ey = xs(function (t, r) {
            if (uo(r) || gn(r)) {
              Rr(r, Ee(r), t)
              return
            }
            for (var o in r) kt.call(r, o) && no(t, o, r[o])
          }),
          ud = xs(function (t, r) {
            Rr(r, mn(r), t)
          }),
          Ea = xs(function (t, r, o, c) {
            Rr(r, mn(r), t, c)
          }),
          ny = xs(function (t, r, o, c) {
            Rr(r, Ee(r), t, c)
          }),
          ry = Gr(Bu)
        function iy(t, r) {
          var o = ws(t)
          return r == null ? o : Nc(o, r)
        }
        var sy = _t(function (t, r) {
            t = zt(t)
            var o = -1,
              c = r.length,
              d = c > 2 ? r[2] : n
            for (d && Qe(r[0], r[1], d) && (c = 1); ++o < c; )
              for (var m = r[o], w = mn(m), S = -1, A = w.length; ++S < A; ) {
                var B = w[S],
                  N = t[B]
                ;(N === n || (wr(N, ms[B]) && !kt.call(t, B))) && (t[B] = m[B])
              }
            return t
          }),
          oy = _t(function (t) {
            return t.push(n, Ch), Mn(ld, n, t)
          })
        function ay(t, r) {
          return xc(t, et(r, 3), Pr)
        }
        function uy(t, r) {
          return xc(t, et(r, 3), Uu)
        }
        function ly(t, r) {
          return t == null ? t : Nu(t, et(r, 3), mn)
        }
        function fy(t, r) {
          return t == null ? t : Xc(t, et(r, 3), mn)
        }
        function cy(t, r) {
          return t && Pr(t, et(r, 3))
        }
        function hy(t, r) {
          return t && Uu(t, et(r, 3))
        }
        function dy(t) {
          return t == null ? [] : la(t, Ee(t))
        }
        function py(t) {
          return t == null ? [] : la(t, mn(t))
        }
        function yl(t, r, o) {
          var c = t == null ? n : zi(t, r)
          return c === n ? o : c
        }
        function _y(t, r) {
          return t != null && Eh(t, r, W0)
        }
        function wl(t, r) {
          return t != null && Eh(t, r, B0)
        }
        var gy = wh(function (t, r, o) {
            r != null && typeof r.toString != 'function' && (r = Zo.call(r)), (t[r] = o)
          }, bl(vn)),
          my = wh(function (t, r, o) {
            r != null && typeof r.toString != 'function' && (r = Zo.call(r)), kt.call(t, r) ? t[r].push(o) : (t[r] = [o])
          }, et),
          vy = _t(io)
        function Ee(t) {
          return gn(t) ? Wc(t) : Xu(t)
        }
        function mn(t) {
          return gn(t) ? Wc(t, !0) : K0(t)
        }
        function yy(t, r) {
          var o = {}
          return (
            (r = et(r, 3)),
            Pr(t, function (c, d, m) {
              $r(o, r(c, d, m), c)
            }),
            o
          )
        }
        function wy(t, r) {
          var o = {}
          return (
            (r = et(r, 3)),
            Pr(t, function (c, d, m) {
              $r(o, d, r(c, d, m))
            }),
            o
          )
        }
        var xy = xs(function (t, r, o) {
            fa(t, r, o)
          }),
          ld = xs(function (t, r, o, c) {
            fa(t, r, o, c)
          }),
          by = Gr(function (t, r) {
            var o = {}
            if (t == null) return o
            var c = !1
            ;(r = Vt(r, function (m) {
              return (m = hi(m, t)), c || (c = m.length > 1), m
            })),
              Rr(t, sl(t), o),
              c && (o = er(o, y | x | v, gm))
            for (var d = r.length; d--; ) Ju(o, r[d])
            return o
          })
        function Sy(t, r) {
          return fd(t, Ca(et(r)))
        }
        var Ty = Gr(function (t, r) {
          return t == null ? {} : J0(t, r)
        })
        function fd(t, r) {
          if (t == null) return {}
          var o = Vt(sl(t), function (c) {
            return [c]
          })
          return (
            (r = et(r)),
            eh(t, o, function (c, d) {
              return r(c, d[0])
            })
          )
        }
        function Cy(t, r, o) {
          r = hi(r, t)
          var c = -1,
            d = r.length
          for (d || ((d = 1), (t = n)); ++c < d; ) {
            var m = t == null ? n : t[Mr(r[c])]
            m === n && ((c = d), (m = o)), (t = Vr(m) ? m.call(t) : m)
          }
          return t
        }
        function Ay(t, r, o) {
          return t == null ? t : oo(t, r, o)
        }
        function Oy(t, r, o, c) {
          return (c = typeof c == 'function' ? c : n), t == null ? t : oo(t, r, o, c)
        }
        var cd = Sh(Ee),
          hd = Sh(mn)
        function Ey(t, r, o) {
          var c = ut(t),
            d = c || pi(t) || Ts(t)
          if (((r = et(r, 4)), o == null)) {
            var m = t && t.constructor
            d ? (o = c ? new m() : []) : Jt(t) ? (o = Vr(m) ? ws(jo(t)) : {}) : (o = {})
          }
          return (
            (d ? Qn : Pr)(t, function (w, S, A) {
              return r(o, w, S, A)
            }),
            o
          )
        }
        function Py(t, r) {
          return t == null ? !0 : Ju(t, r)
        }
        function Ry(t, r, o) {
          return t == null ? t : oh(t, r, tl(o))
        }
        function My(t, r, o, c) {
          return (c = typeof c == 'function' ? c : n), t == null ? t : oh(t, r, tl(o), c)
        }
        function Cs(t) {
          return t == null ? [] : Lu(t, Ee(t))
        }
        function Ly(t) {
          return t == null ? [] : Lu(t, mn(t))
        }
        function Dy(t, r, o) {
          return (
            o === n && ((o = r), (r = n)),
            o !== n && ((o = ir(o)), (o = o === o ? o : 0)),
            r !== n && ((r = ir(r)), (r = r === r ? r : 0)),
            Fi(ir(t), r, o)
          )
        }
        function Iy(t, r, o) {
          return (r = Kr(r)), o === n ? ((o = r), (r = 0)) : (o = Kr(o)), (t = ir(t)), N0(t, r, o)
        }
        function ky(t, r, o) {
          if (
            (o && typeof o != 'boolean' && Qe(t, r, o) && (r = o = n),
            o === n && (typeof r == 'boolean' ? ((o = r), (r = n)) : typeof t == 'boolean' && ((o = t), (t = n))),
            t === n && r === n ? ((t = 0), (r = 1)) : ((t = Kr(t)), r === n ? ((r = t), (t = 0)) : (r = Kr(r))),
            t > r)
          ) {
            var c = t
            ;(t = r), (r = c)
          }
          if (o || t % 1 || r % 1) {
            var d = Fc()
            return Ye(t + d * (r - t + dg('1e-' + ((d + '').length - 1))), r)
          }
          return Vu(t, r)
        }
        var Fy = bs(function (t, r, o) {
          return (r = r.toLowerCase()), t + (o ? dd(r) : r)
        })
        function dd(t) {
          return xl(Dt(t).toLowerCase())
        }
        function pd(t) {
          return (t = Dt(t)), t && t.replace(Oe, Ag).replace(rg, '')
        }
        function zy(t, r, o) {
          ;(t = Dt(t)), (r = Dn(r))
          var c = t.length
          o = o === n ? c : Fi(ft(o), 0, c)
          var d = o
          return (o -= r.length), o >= 0 && t.slice(o, d) == r
        }
        function Wy(t) {
          return (t = Dt(t)), t && Ur.test(t) ? t.replace(dn, Og) : t
        }
        function By(t) {
          return (t = Dt(t)), t && dt.test(t) ? t.replace(q, '\\$&') : t
        }
        var Ny = bs(function (t, r, o) {
            return t + (o ? '-' : '') + r.toLowerCase()
          }),
          Uy = bs(function (t, r, o) {
            return t + (o ? ' ' : '') + r.toLowerCase()
          }),
          Yy = mh('toLowerCase')
        function Hy(t, r, o) {
          ;(t = Dt(t)), (r = ft(r))
          var c = r ? _s(t) : 0
          if (!r || c >= r) return t
          var d = (r - c) / 2
          return ga(ra(d), o) + t + ga(na(d), o)
        }
        function $y(t, r, o) {
          ;(t = Dt(t)), (r = ft(r))
          var c = r ? _s(t) : 0
          return r && c < r ? t + ga(r - c, o) : t
        }
        function Xy(t, r, o) {
          ;(t = Dt(t)), (r = ft(r))
          var c = r ? _s(t) : 0
          return r && c < r ? ga(r - c, o) + t : t
        }
        function Gy(t, r, o) {
          return o || r == null ? (r = 0) : r && (r = +r), jg(Dt(t).replace(tt, ''), r || 0)
        }
        function qy(t, r, o) {
          return (o ? Qe(t, r, o) : r === n) ? (r = 1) : (r = ft(r)), Ku(Dt(t), r)
        }
        function Vy() {
          var t = arguments,
            r = Dt(t[0])
          return t.length < 3 ? r : r.replace(t[1], t[2])
        }
        var Ky = bs(function (t, r, o) {
          return t + (o ? '_' : '') + r.toLowerCase()
        })
        function Zy(t, r, o) {
          return (
            o && typeof o != 'number' && Qe(t, r, o) && (r = o = n),
            (o = o === n ? xt : o >>> 0),
            o
              ? ((t = Dt(t)), t && (typeof r == 'string' || (r != null && !vl(r))) && ((r = Dn(r)), !r && ps(t)) ? di(vr(t), 0, o) : t.split(r, o))
              : []
          )
        }
        var Jy = bs(function (t, r, o) {
          return t + (o ? ' ' : '') + xl(r)
        })
        function Qy(t, r, o) {
          return (t = Dt(t)), (o = o == null ? 0 : Fi(ft(o), 0, t.length)), (r = Dn(r)), t.slice(o, o + r.length) == r
        }
        function jy(t, r, o) {
          var c = _.templateSettings
          o && Qe(t, r, o) && (r = n), (t = Dt(t)), (r = Ea({}, r, c, Th))
          var d = Ea({}, r.imports, c.imports, Th),
            m = Ee(d),
            w = Lu(d, m),
            S,
            A,
            B = 0,
            N = r.interpolate || Kn,
            Y = "__p += '",
            G = Iu((r.escape || Kn).source + '|' + N.source + '|' + (N === st ? It : Kn).source + '|' + (r.evaluate || Kn).source + '|$', 'g'),
            Z =
              '//# sourceURL=' +
              (kt.call(r, 'sourceURL') ? (r.sourceURL + '').replace(/\s/g, ' ') : 'lodash.templateSources[' + ++ug + ']') +
              `
`
          t.replace(G, function (it, yt, At, kn, je, Fn) {
            return (
              At || (At = kn),
              (Y += t.slice(B, Fn).replace(fs, Eg)),
              yt &&
                ((S = !0),
                (Y +=
                  `' +
__e(` +
                  yt +
                  `) +
'`)),
              je &&
                ((A = !0),
                (Y +=
                  `';
` +
                  je +
                  `;
__p += '`)),
              At &&
                (Y +=
                  `' +
((__t = (` +
                  At +
                  `)) == null ? '' : __t) +
'`),
              (B = Fn + it.length),
              it
            )
          }),
            (Y += `';
`)
          var rt = kt.call(r, 'variable') && r.variable
          if (!rt)
            Y =
              `with (obj) {
` +
              Y +
              `
}
`
          else if (me.test(rt)) throw new ot(f)
          ;(Y = (A ? Y.replace(Er, '') : Y).replace(bt, '$1').replace(Nr, '$1;')),
            (Y =
              'function(' +
              (rt || 'obj') +
              `) {
` +
              (rt
                ? ''
                : `obj || (obj = {});
`) +
              "var __t, __p = ''" +
              (S ? ', __e = _.escape' : '') +
              (A
                ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`
                : `;
`) +
              Y +
              `return __p
}`)
          var ct = gd(function () {
            return Lt(m, Z + 'return ' + Y).apply(n, w)
          })
          if (((ct.source = Y), ml(ct))) throw ct
          return ct
        }
        function tw(t) {
          return Dt(t).toLowerCase()
        }
        function ew(t) {
          return Dt(t).toUpperCase()
        }
        function nw(t, r, o) {
          if (((t = Dt(t)), t && (o || r === n))) return Cc(t)
          if (!t || !(r = Dn(r))) return t
          var c = vr(t),
            d = vr(r),
            m = Ac(c, d),
            w = Oc(c, d) + 1
          return di(c, m, w).join('')
        }
        function rw(t, r, o) {
          if (((t = Dt(t)), t && (o || r === n))) return t.slice(0, Pc(t) + 1)
          if (!t || !(r = Dn(r))) return t
          var c = vr(t),
            d = Oc(c, vr(r)) + 1
          return di(c, 0, d).join('')
        }
        function iw(t, r, o) {
          if (((t = Dt(t)), t && (o || r === n))) return t.replace(tt, '')
          if (!t || !(r = Dn(r))) return t
          var c = vr(t),
            d = Ac(c, vr(r))
          return di(c, d).join('')
        }
        function sw(t, r) {
          var o = $,
            c = J
          if (Jt(r)) {
            var d = 'separator' in r ? r.separator : d
            ;(o = 'length' in r ? ft(r.length) : o), (c = 'omission' in r ? Dn(r.omission) : c)
          }
          t = Dt(t)
          var m = t.length
          if (ps(t)) {
            var w = vr(t)
            m = w.length
          }
          if (o >= m) return t
          var S = o - _s(c)
          if (S < 1) return c
          var A = w ? di(w, 0, S).join('') : t.slice(0, S)
          if (d === n) return A + c
          if ((w && (S += A.length - S), vl(d))) {
            if (t.slice(S).search(d)) {
              var B,
                N = A
              for (d.global || (d = Iu(d.source, Dt(pn.exec(d)) + 'g')), d.lastIndex = 0; (B = d.exec(N)); ) var Y = B.index
              A = A.slice(0, Y === n ? S : Y)
            }
          } else if (t.indexOf(Dn(d), S) != S) {
            var G = A.lastIndexOf(d)
            G > -1 && (A = A.slice(0, G))
          }
          return A + c
        }
        function ow(t) {
          return (t = Dt(t)), t && Pn.test(t) ? t.replace(hn, kg) : t
        }
        var aw = bs(function (t, r, o) {
            return t + (o ? ' ' : '') + r.toUpperCase()
          }),
          xl = mh('toUpperCase')
        function _d(t, r, o) {
          return (t = Dt(t)), (r = o ? n : r), r === n ? (Rg(t) ? Wg(t) : xg(t)) : t.match(r) || []
        }
        var gd = _t(function (t, r) {
            try {
              return Mn(t, n, r)
            } catch (o) {
              return ml(o) ? o : new ot(o)
            }
          }),
          uw = Gr(function (t, r) {
            return (
              Qn(r, function (o) {
                ;(o = Mr(o)), $r(t, o, _l(t[o], t))
              }),
              t
            )
          })
        function lw(t) {
          var r = t == null ? 0 : t.length,
            o = et()
          return (
            (t = r
              ? Vt(t, function (c) {
                  if (typeof c[1] != 'function') throw new jn(l)
                  return [o(c[0]), c[1]]
                })
              : []),
            _t(function (c) {
              for (var d = -1; ++d < r; ) {
                var m = t[d]
                if (Mn(m[0], this, c)) return Mn(m[1], this, c)
              }
            })
          )
        }
        function fw(t) {
          return k0(er(t, y))
        }
        function bl(t) {
          return function () {
            return t
          }
        }
        function cw(t, r) {
          return t == null || t !== t ? r : t
        }
        var hw = yh(),
          dw = yh(!0)
        function vn(t) {
          return t
        }
        function Sl(t) {
          return Kc(typeof t == 'function' ? t : er(t, y))
        }
        function pw(t) {
          return Jc(er(t, y))
        }
        function _w(t, r) {
          return Qc(t, er(r, y))
        }
        var gw = _t(function (t, r) {
            return function (o) {
              return io(o, t, r)
            }
          }),
          mw = _t(function (t, r) {
            return function (o) {
              return io(t, o, r)
            }
          })
        function Tl(t, r, o) {
          var c = Ee(r),
            d = la(r, c)
          o == null && !(Jt(r) && (d.length || !c.length)) && ((o = r), (r = t), (t = this), (d = la(r, Ee(r))))
          var m = !(Jt(o) && 'chain' in o) || !!o.chain,
            w = Vr(t)
          return (
            Qn(d, function (S) {
              var A = r[S]
              ;(t[S] = A),
                w &&
                  (t.prototype[S] = function () {
                    var B = this.__chain__
                    if (m || B) {
                      var N = t(this.__wrapped__),
                        Y = (N.__actions__ = _n(this.__actions__))
                      return Y.push({ func: A, args: arguments, thisArg: t }), (N.__chain__ = B), N
                    }
                    return A.apply(t, ai([this.value()], arguments))
                  })
            }),
            t
          )
        }
        function vw() {
          return ze._ === this && (ze._ = $g), this
        }
        function Cl() {}
        function yw(t) {
          return (
            (t = ft(t)),
            _t(function (r) {
              return jc(r, t)
            })
          )
        }
        var ww = nl(Vt),
          xw = nl(wc),
          bw = nl(Ou)
        function md(t) {
          return ll(t) ? Eu(Mr(t)) : Q0(t)
        }
        function Sw(t) {
          return function (r) {
            return t == null ? n : zi(t, r)
          }
        }
        var Tw = xh(),
          Cw = xh(!0)
        function Al() {
          return []
        }
        function Ol() {
          return !1
        }
        function Aw() {
          return {}
        }
        function Ow() {
          return ''
        }
        function Ew() {
          return !0
        }
        function Pw(t, r) {
          if (((t = ft(t)), t < 1 || t > lt)) return []
          var o = xt,
            c = Ye(t, xt)
          ;(r = et(r)), (t -= xt)
          for (var d = Mu(c, r); ++o < t; ) r(o)
          return d
        }
        function Rw(t) {
          return ut(t) ? Vt(t, Mr) : In(t) ? [t] : _n(zh(Dt(t)))
        }
        function Mw(t) {
          var r = ++Yg
          return Dt(t) + r
        }
        var Lw = _a(function (t, r) {
            return t + r
          }, 0),
          Dw = rl('ceil'),
          Iw = _a(function (t, r) {
            return t / r
          }, 1),
          kw = rl('floor')
        function Fw(t) {
          return t && t.length ? ua(t, vn, Yu) : n
        }
        function zw(t, r) {
          return t && t.length ? ua(t, et(r, 2), Yu) : n
        }
        function Ww(t) {
          return Sc(t, vn)
        }
        function Bw(t, r) {
          return Sc(t, et(r, 2))
        }
        function Nw(t) {
          return t && t.length ? ua(t, vn, Gu) : n
        }
        function Uw(t, r) {
          return t && t.length ? ua(t, et(r, 2), Gu) : n
        }
        var Yw = _a(function (t, r) {
            return t * r
          }, 1),
          Hw = rl('round'),
          $w = _a(function (t, r) {
            return t - r
          }, 0)
        function Xw(t) {
          return t && t.length ? Ru(t, vn) : 0
        }
        function Gw(t, r) {
          return t && t.length ? Ru(t, et(r, 2)) : 0
        }
        return (
          (_.after = pv),
          (_.ary = Vh),
          (_.assign = ey),
          (_.assignIn = ud),
          (_.assignInWith = Ea),
          (_.assignWith = ny),
          (_.at = ry),
          (_.before = Kh),
          (_.bind = _l),
          (_.bindAll = uw),
          (_.bindKey = Zh),
          (_.castArray = Av),
          (_.chain = Xh),
          (_.chunk = km),
          (_.compact = Fm),
          (_.concat = zm),
          (_.cond = lw),
          (_.conforms = fw),
          (_.constant = bl),
          (_.countBy = X1),
          (_.create = iy),
          (_.curry = Jh),
          (_.curryRight = Qh),
          (_.debounce = jh),
          (_.defaults = sy),
          (_.defaultsDeep = oy),
          (_.defer = _v),
          (_.delay = gv),
          (_.difference = Wm),
          (_.differenceBy = Bm),
          (_.differenceWith = Nm),
          (_.drop = Um),
          (_.dropRight = Ym),
          (_.dropRightWhile = Hm),
          (_.dropWhile = $m),
          (_.fill = Xm),
          (_.filter = q1),
          (_.flatMap = Z1),
          (_.flatMapDeep = J1),
          (_.flatMapDepth = Q1),
          (_.flatten = Uh),
          (_.flattenDeep = Gm),
          (_.flattenDepth = qm),
          (_.flip = mv),
          (_.flow = hw),
          (_.flowRight = dw),
          (_.fromPairs = Vm),
          (_.functions = dy),
          (_.functionsIn = py),
          (_.groupBy = j1),
          (_.initial = Zm),
          (_.intersection = Jm),
          (_.intersectionBy = Qm),
          (_.intersectionWith = jm),
          (_.invert = gy),
          (_.invertBy = my),
          (_.invokeMap = ev),
          (_.iteratee = Sl),
          (_.keyBy = nv),
          (_.keys = Ee),
          (_.keysIn = mn),
          (_.map = ba),
          (_.mapKeys = yy),
          (_.mapValues = wy),
          (_.matches = pw),
          (_.matchesProperty = _w),
          (_.memoize = Ta),
          (_.merge = xy),
          (_.mergeWith = ld),
          (_.method = gw),
          (_.methodOf = mw),
          (_.mixin = Tl),
          (_.negate = Ca),
          (_.nthArg = yw),
          (_.omit = by),
          (_.omitBy = Sy),
          (_.once = vv),
          (_.orderBy = rv),
          (_.over = ww),
          (_.overArgs = yv),
          (_.overEvery = xw),
          (_.overSome = bw),
          (_.partial = gl),
          (_.partialRight = td),
          (_.partition = iv),
          (_.pick = Ty),
          (_.pickBy = fd),
          (_.property = md),
          (_.propertyOf = Sw),
          (_.pull = r1),
          (_.pullAll = Hh),
          (_.pullAllBy = i1),
          (_.pullAllWith = s1),
          (_.pullAt = o1),
          (_.range = Tw),
          (_.rangeRight = Cw),
          (_.rearg = wv),
          (_.reject = av),
          (_.remove = a1),
          (_.rest = xv),
          (_.reverse = dl),
          (_.sampleSize = lv),
          (_.set = Ay),
          (_.setWith = Oy),
          (_.shuffle = fv),
          (_.slice = u1),
          (_.sortBy = dv),
          (_.sortedUniq = _1),
          (_.sortedUniqBy = g1),
          (_.split = Zy),
          (_.spread = bv),
          (_.tail = m1),
          (_.take = v1),
          (_.takeRight = y1),
          (_.takeRightWhile = w1),
          (_.takeWhile = x1),
          (_.tap = F1),
          (_.throttle = Sv),
          (_.thru = xa),
          (_.toArray = sd),
          (_.toPairs = cd),
          (_.toPairsIn = hd),
          (_.toPath = Rw),
          (_.toPlainObject = ad),
          (_.transform = Ey),
          (_.unary = Tv),
          (_.union = b1),
          (_.unionBy = S1),
          (_.unionWith = T1),
          (_.uniq = C1),
          (_.uniqBy = A1),
          (_.uniqWith = O1),
          (_.unset = Py),
          (_.unzip = pl),
          (_.unzipWith = $h),
          (_.update = Ry),
          (_.updateWith = My),
          (_.values = Cs),
          (_.valuesIn = Ly),
          (_.without = E1),
          (_.words = _d),
          (_.wrap = Cv),
          (_.xor = P1),
          (_.xorBy = R1),
          (_.xorWith = M1),
          (_.zip = L1),
          (_.zipObject = D1),
          (_.zipObjectDeep = I1),
          (_.zipWith = k1),
          (_.entries = cd),
          (_.entriesIn = hd),
          (_.extend = ud),
          (_.extendWith = Ea),
          Tl(_, _),
          (_.add = Lw),
          (_.attempt = gd),
          (_.camelCase = Fy),
          (_.capitalize = dd),
          (_.ceil = Dw),
          (_.clamp = Dy),
          (_.clone = Ov),
          (_.cloneDeep = Pv),
          (_.cloneDeepWith = Rv),
          (_.cloneWith = Ev),
          (_.conformsTo = Mv),
          (_.deburr = pd),
          (_.defaultTo = cw),
          (_.divide = Iw),
          (_.endsWith = zy),
          (_.eq = wr),
          (_.escape = Wy),
          (_.escapeRegExp = By),
          (_.every = G1),
          (_.find = V1),
          (_.findIndex = Bh),
          (_.findKey = ay),
          (_.findLast = K1),
          (_.findLastIndex = Nh),
          (_.findLastKey = uy),
          (_.floor = kw),
          (_.forEach = Gh),
          (_.forEachRight = qh),
          (_.forIn = ly),
          (_.forInRight = fy),
          (_.forOwn = cy),
          (_.forOwnRight = hy),
          (_.get = yl),
          (_.gt = Lv),
          (_.gte = Dv),
          (_.has = _y),
          (_.hasIn = wl),
          (_.head = Yh),
          (_.identity = vn),
          (_.includes = tv),
          (_.indexOf = Km),
          (_.inRange = Iy),
          (_.invoke = vy),
          (_.isArguments = Ni),
          (_.isArray = ut),
          (_.isArrayBuffer = Iv),
          (_.isArrayLike = gn),
          (_.isArrayLikeObject = fe),
          (_.isBoolean = kv),
          (_.isBuffer = pi),
          (_.isDate = Fv),
          (_.isElement = zv),
          (_.isEmpty = Wv),
          (_.isEqual = Bv),
          (_.isEqualWith = Nv),
          (_.isError = ml),
          (_.isFinite = Uv),
          (_.isFunction = Vr),
          (_.isInteger = ed),
          (_.isLength = Aa),
          (_.isMap = nd),
          (_.isMatch = Yv),
          (_.isMatchWith = Hv),
          (_.isNaN = $v),
          (_.isNative = Xv),
          (_.isNil = qv),
          (_.isNull = Gv),
          (_.isNumber = rd),
          (_.isObject = Jt),
          (_.isObjectLike = ie),
          (_.isPlainObject = fo),
          (_.isRegExp = vl),
          (_.isSafeInteger = Vv),
          (_.isSet = id),
          (_.isString = Oa),
          (_.isSymbol = In),
          (_.isTypedArray = Ts),
          (_.isUndefined = Kv),
          (_.isWeakMap = Zv),
          (_.isWeakSet = Jv),
          (_.join = t1),
          (_.kebabCase = Ny),
          (_.last = rr),
          (_.lastIndexOf = e1),
          (_.lowerCase = Uy),
          (_.lowerFirst = Yy),
          (_.lt = Qv),
          (_.lte = jv),
          (_.max = Fw),
          (_.maxBy = zw),
          (_.mean = Ww),
          (_.meanBy = Bw),
          (_.min = Nw),
          (_.minBy = Uw),
          (_.stubArray = Al),
          (_.stubFalse = Ol),
          (_.stubObject = Aw),
          (_.stubString = Ow),
          (_.stubTrue = Ew),
          (_.multiply = Yw),
          (_.nth = n1),
          (_.noConflict = vw),
          (_.noop = Cl),
          (_.now = Sa),
          (_.pad = Hy),
          (_.padEnd = $y),
          (_.padStart = Xy),
          (_.parseInt = Gy),
          (_.random = ky),
          (_.reduce = sv),
          (_.reduceRight = ov),
          (_.repeat = qy),
          (_.replace = Vy),
          (_.result = Cy),
          (_.round = Hw),
          (_.runInContext = C),
          (_.sample = uv),
          (_.size = cv),
          (_.snakeCase = Ky),
          (_.some = hv),
          (_.sortedIndex = l1),
          (_.sortedIndexBy = f1),
          (_.sortedIndexOf = c1),
          (_.sortedLastIndex = h1),
          (_.sortedLastIndexBy = d1),
          (_.sortedLastIndexOf = p1),
          (_.startCase = Jy),
          (_.startsWith = Qy),
          (_.subtract = $w),
          (_.sum = Xw),
          (_.sumBy = Gw),
          (_.template = jy),
          (_.times = Pw),
          (_.toFinite = Kr),
          (_.toInteger = ft),
          (_.toLength = od),
          (_.toLower = tw),
          (_.toNumber = ir),
          (_.toSafeInteger = ty),
          (_.toString = Dt),
          (_.toUpper = ew),
          (_.trim = nw),
          (_.trimEnd = rw),
          (_.trimStart = iw),
          (_.truncate = sw),
          (_.unescape = ow),
          (_.uniqueId = Mw),
          (_.upperCase = aw),
          (_.upperFirst = xl),
          (_.each = Gh),
          (_.eachRight = qh),
          (_.first = Yh),
          Tl(
            _,
            (function () {
              var t = {}
              return (
                Pr(_, function (r, o) {
                  kt.call(_.prototype, o) || (t[o] = r)
                }),
                t
              )
            })(),
            { chain: !1 }
          ),
          (_.VERSION = i),
          Qn(['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], function (t) {
            _[t].placeholder = _
          }),
          Qn(['drop', 'take'], function (t, r) {
            ;(St.prototype[t] = function (o) {
              o = o === n ? 1 : Se(ft(o), 0)
              var c = this.__filtered__ && !r ? new St(this) : this.clone()
              return (
                c.__filtered__
                  ? (c.__takeCount__ = Ye(o, c.__takeCount__))
                  : c.__views__.push({ size: Ye(o, xt), type: t + (c.__dir__ < 0 ? 'Right' : '') }),
                c
              )
            }),
              (St.prototype[t + 'Right'] = function (o) {
                return this.reverse()[t](o).reverse()
              })
          }),
          Qn(['filter', 'map', 'takeWhile'], function (t, r) {
            var o = r + 1,
              c = o == nt || o == mt
            St.prototype[t] = function (d) {
              var m = this.clone()
              return m.__iteratees__.push({ iteratee: et(d, 3), type: o }), (m.__filtered__ = m.__filtered__ || c), m
            }
          }),
          Qn(['head', 'last'], function (t, r) {
            var o = 'take' + (r ? 'Right' : '')
            St.prototype[t] = function () {
              return this[o](1).value()[0]
            }
          }),
          Qn(['initial', 'tail'], function (t, r) {
            var o = 'drop' + (r ? '' : 'Right')
            St.prototype[t] = function () {
              return this.__filtered__ ? new St(this) : this[o](1)
            }
          }),
          (St.prototype.compact = function () {
            return this.filter(vn)
          }),
          (St.prototype.find = function (t) {
            return this.filter(t).head()
          }),
          (St.prototype.findLast = function (t) {
            return this.reverse().find(t)
          }),
          (St.prototype.invokeMap = _t(function (t, r) {
            return typeof t == 'function'
              ? new St(this)
              : this.map(function (o) {
                  return io(o, t, r)
                })
          })),
          (St.prototype.reject = function (t) {
            return this.filter(Ca(et(t)))
          }),
          (St.prototype.slice = function (t, r) {
            t = ft(t)
            var o = this
            return o.__filtered__ && (t > 0 || r < 0)
              ? new St(o)
              : (t < 0 ? (o = o.takeRight(-t)) : t && (o = o.drop(t)), r !== n && ((r = ft(r)), (o = r < 0 ? o.dropRight(-r) : o.take(r - t))), o)
          }),
          (St.prototype.takeRightWhile = function (t) {
            return this.reverse().takeWhile(t).reverse()
          }),
          (St.prototype.toArray = function () {
            return this.take(xt)
          }),
          Pr(St.prototype, function (t, r) {
            var o = /^(?:filter|find|map|reject)|While$/.test(r),
              c = /^(?:head|last)$/.test(r),
              d = _[c ? 'take' + (r == 'last' ? 'Right' : '') : r],
              m = c || /^find/.test(r)
            d &&
              (_.prototype[r] = function () {
                var w = this.__wrapped__,
                  S = c ? [1] : arguments,
                  A = w instanceof St,
                  B = S[0],
                  N = A || ut(w),
                  Y = function (yt) {
                    var At = d.apply(_, ai([yt], S))
                    return c && G ? At[0] : At
                  }
                N && o && typeof B == 'function' && B.length != 1 && (A = N = !1)
                var G = this.__chain__,
                  Z = !!this.__actions__.length,
                  rt = m && !G,
                  ct = A && !Z
                if (!m && N) {
                  w = ct ? w : new St(this)
                  var it = t.apply(w, S)
                  return it.__actions__.push({ func: xa, args: [Y], thisArg: n }), new tr(it, G)
                }
                return rt && ct ? t.apply(this, S) : ((it = this.thru(Y)), rt ? (c ? it.value()[0] : it.value()) : it)
              })
          }),
          Qn(['pop', 'push', 'shift', 'sort', 'splice', 'unshift'], function (t) {
            var r = qo[t],
              o = /^(?:push|sort|unshift)$/.test(t) ? 'tap' : 'thru',
              c = /^(?:pop|shift)$/.test(t)
            _.prototype[t] = function () {
              var d = arguments
              if (c && !this.__chain__) {
                var m = this.value()
                return r.apply(ut(m) ? m : [], d)
              }
              return this[o](function (w) {
                return r.apply(ut(w) ? w : [], d)
              })
            }
          }),
          Pr(St.prototype, function (t, r) {
            var o = _[r]
            if (o) {
              var c = o.name + ''
              kt.call(ys, c) || (ys[c] = []), ys[c].push({ name: r, func: o })
            }
          }),
          (ys[pa(n, k).name] = [{ name: 'wrapper', func: n }]),
          (St.prototype.clone = o0),
          (St.prototype.reverse = a0),
          (St.prototype.value = u0),
          (_.prototype.at = z1),
          (_.prototype.chain = W1),
          (_.prototype.commit = B1),
          (_.prototype.next = N1),
          (_.prototype.plant = Y1),
          (_.prototype.reverse = H1),
          (_.prototype.toJSON = _.prototype.valueOf = _.prototype.value = $1),
          (_.prototype.first = _.prototype.head),
          Js && (_.prototype[Js] = U1),
          _
        )
      },
      gs = Bg()
    Li ? (((Li.exports = gs)._ = gs), (Su._ = gs)) : (ze._ = gs)
  }).call(co)
})(tu, tu.exports)
var gi = tu.exports
let xf = class {
  constructor(e) {
    ;(this.element = e.element), this.createObserver(), this.addEventListener()
  }
  createObserver() {
    ;(this.observerOptions = {
      rootMargin: this.element.getAttribute('data-root-margin') || '0px 0px 0px 0px',
      threshold: this.element.getAttribute('dt') || 0,
    }),
      (this.observer = new IntersectionObserver((e) => {
        e.forEach((n) => {
          n.isIntersecting ? this.animateIn() : this.animateOut()
        })
      }, this.observerOptions)),
      this.observer.observe(this.element)
  }
  animateIn() {}
  animateOut() {}
  addEventListener() {
    window.addEventListener('resize', this.onResize.bind(this))
  }
}
;(function () {
  function u() {
    for (var i = arguments.length, s = 0; s < i; s++) {
      var a = s < 0 || arguments.length <= s ? void 0 : arguments[s]
      a.nodeType === 1 || a.nodeType === 11 ? this.appendChild(a) : this.appendChild(document.createTextNode(String(a)))
    }
  }
  function e() {
    for (; this.lastChild; ) this.removeChild(this.lastChild)
    arguments.length && this.append.apply(this, arguments)
  }
  function n() {
    for (var i = this.parentNode, s = arguments.length, a = new Array(s), l = 0; l < s; l++) a[l] = arguments[l]
    var f = a.length
    if (i)
      for (f || i.removeChild(this); f--; ) {
        var h = a[f]
        typeof h != 'object' ? (h = this.ownerDocument.createTextNode(h)) : h.parentNode && h.parentNode.removeChild(h),
          f ? i.insertBefore(this.previousSibling, h) : i.replaceChild(h, this)
      }
  }
  typeof Element < 'u' &&
    (Element.prototype.append || ((Element.prototype.append = u), (DocumentFragment.prototype.append = u)),
    Element.prototype.replaceChildren || ((Element.prototype.replaceChildren = e), (DocumentFragment.prototype.replaceChildren = e)),
    Element.prototype.replaceWith || ((Element.prototype.replaceWith = n), (DocumentFragment.prototype.replaceWith = n)))
})()
function qw(u, e) {
  if (!(u instanceof e)) throw new TypeError('Cannot call a class as a function')
}
function yd(u, e) {
  for (var n = 0; n < e.length; n++) {
    var i = e[n]
    ;(i.enumerable = i.enumerable || !1), (i.configurable = !0), 'value' in i && (i.writable = !0), Object.defineProperty(u, i.key, i)
  }
}
function wd(u, e, n) {
  return e && yd(u.prototype, e), n && yd(u, n), u
}
function Vw(u, e, n) {
  return e in u ? Object.defineProperty(u, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (u[e] = n), u
}
function xd(u, e) {
  var n = Object.keys(u)
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(u)
    e &&
      (i = i.filter(function (s) {
        return Object.getOwnPropertyDescriptor(u, s).enumerable
      })),
      n.push.apply(n, i)
  }
  return n
}
function bd(u) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {}
    e % 2
      ? xd(Object(n), !0).forEach(function (i) {
          Vw(u, i, n[i])
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(n))
      : xd(Object(n)).forEach(function (i) {
          Object.defineProperty(u, i, Object.getOwnPropertyDescriptor(n, i))
        })
  }
  return u
}
function sp(u, e) {
  return Zw(u) || Qw(u, e) || op(u, e) || tx()
}
function an(u) {
  return Kw(u) || Jw(u) || op(u) || jw()
}
function Kw(u) {
  if (Array.isArray(u)) return $l(u)
}
function Zw(u) {
  if (Array.isArray(u)) return u
}
function Jw(u) {
  if (typeof Symbol < 'u' && Symbol.iterator in Object(u)) return Array.from(u)
}
function Qw(u, e) {
  if (!(typeof Symbol > 'u' || !(Symbol.iterator in Object(u)))) {
    var n = [],
      i = !0,
      s = !1,
      a = void 0
    try {
      for (var l = u[Symbol.iterator](), f; !(i = (f = l.next()).done) && (n.push(f.value), !(e && n.length === e)); i = !0);
    } catch (h) {
      ;(s = !0), (a = h)
    } finally {
      try {
        !i && l.return != null && l.return()
      } finally {
        if (s) throw a
      }
    }
    return n
  }
}
function op(u, e) {
  if (u) {
    if (typeof u == 'string') return $l(u, e)
    var n = Object.prototype.toString.call(u).slice(8, -1)
    if ((n === 'Object' && u.constructor && (n = u.constructor.name), n === 'Map' || n === 'Set')) return Array.from(u)
    if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return $l(u, e)
  }
}
function $l(u, e) {
  ;(e == null || e > u.length) && (e = u.length)
  for (var n = 0, i = new Array(e); n < e; n++) i[n] = u[n]
  return i
}
function jw() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function tx() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function Gi(u, e) {
  return Object.getOwnPropertyNames(Object(u)).reduce(function (n, i) {
    var s = Object.getOwnPropertyDescriptor(Object(u), i),
      a = Object.getOwnPropertyDescriptor(Object(e), i)
    return Object.defineProperty(n, i, a || s)
  }, {})
}
function Uo(u) {
  return typeof u == 'string'
}
function bf(u) {
  return Array.isArray(u)
}
function Pa() {
  var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    e = Gi(u),
    n
  return (
    e.types !== void 0 ? (n = e.types) : e.split !== void 0 && (n = e.split),
    n !== void 0 &&
      (e.types = (Uo(n) || bf(n) ? String(n) : '')
        .split(',')
        .map(function (i) {
          return String(i).trim()
        })
        .filter(function (i) {
          return /((line)|(word)|(char))/i.test(i)
        })),
    (e.absolute || e.position) && (e.absolute = e.absolute || /absolute/.test(u.position)),
    e
  )
}
function Sf(u) {
  var e = Uo(u) || bf(u) ? String(u) : ''
  return { none: !e, lines: /line/i.test(e), words: /word/i.test(e), chars: /char/i.test(e) }
}
function du(u) {
  return u !== null && typeof u == 'object'
}
function ex(u) {
  return du(u) && /^(1|3|11)$/.test(u.nodeType)
}
function nx(u) {
  return typeof u == 'number' && u > -1 && u % 1 === 0
}
function rx(u) {
  return du(u) && nx(u.length)
}
function rs(u) {
  return bf(u) ? u : u == null ? [] : rx(u) ? Array.prototype.slice.call(u) : [u]
}
function Sd(u) {
  var e = u
  return (
    Uo(u) && (/^(#[a-z]\w+)$/.test(u.trim()) ? (e = document.getElementById(u.trim().slice(1))) : (e = document.querySelectorAll(u))),
    rs(e).reduce(function (n, i) {
      return [].concat(an(n), an(rs(i).filter(ex)))
    }, [])
  )
}
var ix = Object.entries,
  eu = '_splittype',
  Tr = {},
  sx = 0
function Ir(u, e, n) {
  if (!du(u)) return console.warn('[data.set] owner is not an object'), null
  var i = u[eu] || (u[eu] = ++sx),
    s = Tr[i] || (Tr[i] = {})
  return n === void 0 ? e && Object.getPrototypeOf(e) === Object.prototype && (Tr[i] = bd(bd({}, s), e)) : e !== void 0 && (s[e] = n), n
}
function qi(u, e) {
  var n = du(u) ? u[eu] : null,
    i = (n && Tr[n]) || {}
  return e === void 0 ? i : i[e]
}
function ap(u) {
  var e = u && u[eu]
  e && (delete u[e], delete Tr[e])
}
function ox() {
  Object.keys(Tr).forEach(function (u) {
    delete Tr[u]
  })
}
function ax() {
  ix(Tr).forEach(function (u) {
    var e = sp(u, 2),
      n = e[0],
      i = e[1],
      s = i.isRoot,
      a = i.isSplit
    ;(!s || !a) && ((Tr[n] = null), delete Tr[n])
  })
}
function ux(u) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ' ',
    n = u ? String(u) : ''
  return n.trim().replace(/\s+/g, ' ').split(e)
}
var Tf = '\\ud800-\\udfff',
  up = '\\u0300-\\u036f\\ufe20-\\ufe23',
  lp = '\\u20d0-\\u20f0',
  fp = '\\ufe0e\\ufe0f',
  lx = '['.concat(Tf, ']'),
  Xl = '['.concat(up).concat(lp, ']'),
  Gl = '\\ud83c[\\udffb-\\udfff]',
  fx = '(?:'.concat(Xl, '|').concat(Gl, ')'),
  cp = '[^'.concat(Tf, ']'),
  hp = '(?:\\ud83c[\\udde6-\\uddff]){2}',
  dp = '[\\ud800-\\udbff][\\udc00-\\udfff]',
  pp = '\\u200d',
  _p = ''.concat(fx, '?'),
  gp = '['.concat(fp, ']?'),
  cx = '(?:' + pp + '(?:' + [cp, hp, dp].join('|') + ')' + gp + _p + ')*',
  hx = gp + _p + cx,
  dx = '(?:'.concat(
    [''.concat(cp).concat(Xl, '?'), Xl, hp, dp, lx].join('|'),
    `
)`
  ),
  px = RegExp(''.concat(Gl, '(?=').concat(Gl, ')|').concat(dx).concat(hx), 'g'),
  _x = [pp, Tf, up, lp, fp],
  gx = RegExp('['.concat(_x.join(''), ']'))
function mx(u) {
  return u.split('')
}
function mp(u) {
  return gx.test(u)
}
function vx(u) {
  return u.match(px) || []
}
function yx(u) {
  return mp(u) ? vx(u) : mx(u)
}
function wx(u) {
  return u == null ? '' : String(u)
}
function xx(u) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ''
  return (u = wx(u)), u && Uo(u) && !e && mp(u) ? yx(u) : u.split(e)
}
function ql(u, e) {
  var n = document.createElement(u)
  return (
    e &&
      Object.keys(e).forEach(function (i) {
        var s = e[i],
          a = Uo(s) ? s.trim() : s
        a === null || a === '' || (i === 'children' ? n.append.apply(n, an(rs(a))) : n.setAttribute(i, a))
      }),
    n
  )
}
var Cf = { splitClass: '', lineClass: 'line', wordClass: 'word', charClass: 'char', types: ['lines', 'words', 'chars'], absolute: !1, tagName: 'div' }
function bx(u, e) {
  e = Gi(Cf, e)
  var n = Sf(e.types),
    i = e.tagName,
    s = u.nodeValue,
    a = document.createDocumentFragment(),
    l = [],
    f = []
  return (
    /^\s/.test(s) && a.append(' '),
    (l = ux(s).reduce(function (h, p, g, y) {
      var x, v
      return (
        n.chars &&
          (v = xx(p).map(function (T) {
            var b = ql(i, { class: ''.concat(e.splitClass, ' ').concat(e.charClass), style: 'display: inline-block;', children: T })
            return Ir(b, 'isChar', !0), (f = [].concat(an(f), [b])), b
          })),
        n.words || n.lines
          ? ((x = ql(i, {
              class: ''.concat(e.wordClass, ' ').concat(e.splitClass),
              style: 'display: inline-block; '.concat(n.words && e.absolute ? 'position: relative;' : ''),
              children: n.chars ? v : p,
            })),
            Ir(x, { isWord: !0, isWordStart: !0, isWordEnd: !0 }),
            a.appendChild(x))
          : v.forEach(function (T) {
              a.appendChild(T)
            }),
        g < y.length - 1 && a.append(' '),
        n.words ? h.concat(x) : h
      )
    }, [])),
    /\s$/.test(s) && a.append(' '),
    u.replaceWith(a),
    { words: l, chars: f }
  )
}
function vp(u, e) {
  var n = u.nodeType,
    i = { words: [], chars: [] }
  if (!/(1|3|11)/.test(n)) return i
  if (n === 3 && /\S/.test(u.nodeValue)) return bx(u, e)
  var s = rs(u.childNodes)
  if (s.length && (Ir(u, 'isSplit', !0), !qi(u).isRoot)) {
    ;(u.style.display = 'inline-block'), (u.style.position = 'relative')
    var a = u.nextSibling,
      l = u.previousSibling,
      f = u.textContent || '',
      h = a ? a.textContent : ' ',
      p = l ? l.textContent : ' '
    Ir(u, { isWordEnd: /\s$/.test(f) || /^\s/.test(h), isWordStart: /^\s/.test(f) || /\s$/.test(p) })
  }
  return s.reduce(function (g, y) {
    var x = vp(y, e),
      v = x.words,
      T = x.chars
    return { words: [].concat(an(g.words), an(v)), chars: [].concat(an(g.chars), an(T)) }
  }, i)
}
function Sx(u, e, n, i) {
  if (!n.absolute) return { top: e ? u.offsetTop : null }
  var s = u.offsetParent,
    a = sp(i, 2),
    l = a[0],
    f = a[1],
    h = 0,
    p = 0
  if (s && s !== document.body) {
    var g = s.getBoundingClientRect()
    ;(h = g.x + l), (p = g.y + f)
  }
  var y = u.getBoundingClientRect(),
    x = y.width,
    v = y.height,
    T = y.x,
    b = y.y,
    E = b + f - p,
    k = T + l - h
  return { width: x, height: v, top: E, left: k }
}
function yp(u) {
  qi(u).isWord
    ? (ap(u), u.replaceWith.apply(u, an(u.childNodes)))
    : rs(u.children).forEach(function (e) {
        return yp(e)
      })
}
var Tx = function () {
  return document.createDocumentFragment()
}
function Cx(u, e, n) {
  var i = Sf(e.types),
    s = e.tagName,
    a = u.getElementsByTagName('*'),
    l = [],
    f = [],
    h = null,
    p,
    g,
    y,
    x = [],
    v = u.parentElement,
    T = u.nextElementSibling,
    b = Tx(),
    E = window.getComputedStyle(u),
    k = E.textAlign,
    z = parseFloat(E.fontSize),
    W = z * 0.2
  return (
    e.absolute &&
      ((y = { left: u.offsetLeft, top: u.offsetTop, width: u.offsetWidth }),
      (g = u.offsetWidth),
      (p = u.offsetHeight),
      Ir(u, { cssWidth: u.style.width, cssHeight: u.style.height })),
    rs(a).forEach(function (P) {
      var R = P.parentElement === u,
        I = Sx(P, R, e, n),
        M = I.width,
        H = I.height,
        U = I.top,
        $ = I.left
      ;/^br$/i.test(P.nodeName) ||
        (i.lines && R && ((h === null || U - h >= W) && ((h = U), l.push((f = []))), f.push(P)),
        e.absolute && Ir(P, { top: U, left: $, width: M, height: H }))
    }),
    v && v.removeChild(u),
    i.lines &&
      ((x = l.map(function (P) {
        var R = ql(s, { class: ''.concat(e.splitClass, ' ').concat(e.lineClass), style: 'display: block; text-align: '.concat(k, '; width: 100%;') })
        Ir(R, 'isLine', !0)
        var I = { height: 0, top: 1e4 }
        return (
          b.appendChild(R),
          P.forEach(function (M, H, U) {
            var $ = qi(M),
              J = $.isWordEnd,
              X = $.top,
              at = $.height,
              nt = U[H + 1]
            ;(I.height = Math.max(I.height, at)), (I.top = Math.min(I.top, X)), R.appendChild(M), J && qi(nt).isWordStart && R.append(' ')
          }),
          e.absolute && Ir(R, { height: I.height, top: I.top }),
          R
        )
      })),
      i.words || yp(b),
      u.replaceChildren(b)),
    e.absolute &&
      ((u.style.width = ''.concat(u.style.width || g, 'px')),
      (u.style.height = ''.concat(p, 'px')),
      rs(a).forEach(function (P) {
        var R = qi(P),
          I = R.isLine,
          M = R.top,
          H = R.left,
          U = R.width,
          $ = R.height,
          J = qi(P.parentElement),
          X = !I && J.isLine
        ;(P.style.top = ''.concat(X ? M - J.top : M, 'px')),
          (P.style.left = I ? ''.concat(y.left, 'px') : ''.concat(H - (X ? y.left : 0), 'px')),
          (P.style.height = ''.concat($, 'px')),
          (P.style.width = I ? ''.concat(y.width, 'px') : ''.concat(U, 'px')),
          (P.style.position = 'absolute')
      })),
    v && (T ? v.insertBefore(u, T) : v.appendChild(u)),
    x
  )
}
var As = Gi(Cf, {}),
  Ax = (function () {
    wd(u, null, [
      {
        key: 'clearData',
        value: function () {
          ox()
        },
      },
      {
        key: 'setDefaults',
        value: function (n) {
          return (As = Gi(As, Pa(n))), Cf
        },
      },
      {
        key: 'revert',
        value: function (n) {
          Sd(n).forEach(function (i) {
            var s = qi(i),
              a = s.isSplit,
              l = s.html,
              f = s.cssWidth,
              h = s.cssHeight
            a && ((i.innerHTML = l), (i.style.width = f || ''), (i.style.height = h || ''), ap(i))
          })
        },
      },
      {
        key: 'create',
        value: function (n, i) {
          return new u(n, i)
        },
      },
      {
        key: 'data',
        get: function () {
          return Tr
        },
      },
      {
        key: 'defaults',
        get: function () {
          return As
        },
        set: function (n) {
          As = Gi(As, Pa(n))
        },
      },
    ])
    function u(e, n) {
      qw(this, u), (this.isSplit = !1), (this.settings = Gi(As, Pa(n))), (this.elements = Sd(e)), this.split()
    }
    return (
      wd(u, [
        {
          key: 'split',
          value: function (n) {
            var i = this
            this.revert(),
              this.elements.forEach(function (l) {
                Ir(l, 'html', l.innerHTML)
              }),
              (this.lines = []),
              (this.words = []),
              (this.chars = [])
            var s = [window.pageXOffset, window.pageYOffset]
            n !== void 0 && (this.settings = Gi(this.settings, Pa(n)))
            var a = Sf(this.settings.types)
            a.none ||
              (this.elements.forEach(function (l) {
                Ir(l, 'isRoot', !0)
                var f = vp(l, i.settings),
                  h = f.words,
                  p = f.chars
                ;(i.words = [].concat(an(i.words), an(h))), (i.chars = [].concat(an(i.chars), an(p)))
              }),
              this.elements.forEach(function (l) {
                if (a.lines || i.settings.absolute) {
                  var f = Cx(l, i.settings, s)
                  i.lines = [].concat(an(i.lines), an(f))
                }
              }),
              (this.isSplit = !0),
              window.scrollTo(s[0], s[1]),
              ax())
          },
        },
        {
          key: 'revert',
          value: function () {
            this.isSplit && ((this.lines = null), (this.words = null), (this.chars = null), (this.isSplit = !1)), u.revert(this.elements)
          },
        },
      ]),
      u
    )
  })()
function Jr(u) {
  if (u === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
  return u
}
function wp(u, e) {
  ;(u.prototype = Object.create(e.prototype)), (u.prototype.constructor = u), (u.__proto__ = e)
}
/*!
 * GSAP 3.12.3
 * https://gsap.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var Hn = { autoSleep: 120, force3D: 'auto', nullTargetWarn: 1, units: { lineHeight: '' } },
  Ys = { duration: 0.5, overwrite: !1, delay: 0 },
  Af,
  Ge,
  se,
  lr = 1e8,
  Bt = 1 / lr,
  Vl = Math.PI * 2,
  Ox = Vl / 4,
  Ex = 0,
  xp = Math.sqrt,
  Px = Math.cos,
  Rx = Math.sin,
  De = function (e) {
    return typeof e == 'string'
  },
  oe = function (e) {
    return typeof e == 'function'
  },
  ni = function (e) {
    return typeof e == 'number'
  },
  Of = function (e) {
    return typeof e > 'u'
  },
  Br = function (e) {
    return typeof e == 'object'
  },
  wn = function (e) {
    return e !== !1
  },
  Ef = function () {
    return typeof window < 'u'
  },
  Ra = function (e) {
    return oe(e) || De(e)
  },
  bp = (typeof ArrayBuffer == 'function' && ArrayBuffer.isView) || function () {},
  qe = Array.isArray,
  Kl = /(?:-?\.?\d|\.)+/gi,
  Sp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  Ls = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  El = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  Tp = /[+-]=-?[.\d]+/,
  Cp = /[^,'"\[\]\s]+/gi,
  Mx = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  jt,
  or,
  Zl,
  Pf,
  $n = {},
  nu = {},
  Ap,
  Op = function (e) {
    return (nu = is(e, $n)) && Tn
  },
  Rf = function (e, n) {
    return console.warn('Invalid property', e, 'set to', n, 'Missing plugin? gsap.registerPlugin()')
  },
  Lo = function (e, n) {
    return !n && console.warn(e)
  },
  Ep = function (e, n) {
    return (e && ($n[e] = n) && nu && (nu[e] = n)) || $n
  },
  Do = function () {
    return 0
  },
  Lx = { suppressEvents: !0, isStart: !0, kill: !1 },
  Ha = { suppressEvents: !0, kill: !1 },
  Dx = { suppressEvents: !0 },
  Mf = {},
  bi = [],
  Jl = {},
  Pp,
  Bn = {},
  Pl = {},
  Td = 30,
  $a = [],
  Lf = '',
  Df = function (e) {
    var n = e[0],
      i,
      s
    if ((Br(n) || oe(n) || (e = [e]), !(i = (n._gsap || {}).harness))) {
      for (s = $a.length; s-- && !$a[s].targetTest(n); );
      i = $a[s]
    }
    for (s = e.length; s--; ) (e[s] && (e[s]._gsap || (e[s]._gsap = new jp(e[s], i)))) || e.splice(s, 1)
    return e
  },
  Zi = function (e) {
    return e._gsap || Df(fr(e))[0]._gsap
  },
  Rp = function (e, n, i) {
    return (i = e[n]) && oe(i) ? e[n]() : (Of(i) && e.getAttribute && e.getAttribute(n)) || i
  },
  xn = function (e, n) {
    return (e = e.split(',')).forEach(n) || e
  },
  he = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0
  },
  Le = function (e) {
    return Math.round(e * 1e7) / 1e7 || 0
  },
  Fs = function (e, n) {
    var i = n.charAt(0),
      s = parseFloat(n.substr(2))
    return (e = parseFloat(e)), i === '+' ? e + s : i === '-' ? e - s : i === '*' ? e * s : e / s
  },
  Ix = function (e, n) {
    for (var i = n.length, s = 0; e.indexOf(n[s]) < 0 && ++s < i; );
    return s < i
  },
  ru = function () {
    var e = bi.length,
      n = bi.slice(0),
      i,
      s
    for (Jl = {}, bi.length = 0, i = 0; i < e; i++) (s = n[i]), s && s._lazy && (s.render(s._lazy[0], s._lazy[1], !0)._lazy = 0)
  },
  Mp = function (e, n, i, s) {
    bi.length && !Ge && ru(), e.render(n, i, s || (Ge && n < 0 && (e._initted || e._startAt))), bi.length && !Ge && ru()
  },
  Lp = function (e) {
    var n = parseFloat(e)
    return (n || n === 0) && (e + '').match(Cp).length < 2 ? n : De(e) ? e.trim() : e
  },
  Dp = function (e) {
    return e
  },
  hr = function (e, n) {
    for (var i in n) i in e || (e[i] = n[i])
    return e
  },
  kx = function (e) {
    return function (n, i) {
      for (var s in i) s in n || (s === 'duration' && e) || s === 'ease' || (n[s] = i[s])
    }
  },
  is = function (e, n) {
    for (var i in n) e[i] = n[i]
    return e
  },
  Cd = function u(e, n) {
    for (var i in n) i !== '__proto__' && i !== 'constructor' && i !== 'prototype' && (e[i] = Br(n[i]) ? u(e[i] || (e[i] = {}), n[i]) : n[i])
    return e
  },
  iu = function (e, n) {
    var i = {},
      s
    for (s in e) s in n || (i[s] = e[s])
    return i
  },
  xo = function (e) {
    var n = e.parent || jt,
      i = e.keyframes ? kx(qe(e.keyframes)) : hr
    if (wn(e.inherit)) for (; n; ) i(e, n.vars.defaults), (n = n.parent || n._dp)
    return e
  },
  Fx = function (e, n) {
    for (var i = e.length, s = i === n.length; s && i-- && e[i] === n[i]; );
    return i < 0
  },
  Ip = function (e, n, i, s, a) {
    i === void 0 && (i = '_first'), s === void 0 && (s = '_last')
    var l = e[s],
      f
    if (a) for (f = n[a]; l && l[a] > f; ) l = l._prev
    return (
      l ? ((n._next = l._next), (l._next = n)) : ((n._next = e[i]), (e[i] = n)),
      n._next ? (n._next._prev = n) : (e[s] = n),
      (n._prev = l),
      (n.parent = n._dp = e),
      n
    )
  },
  pu = function (e, n, i, s) {
    i === void 0 && (i = '_first'), s === void 0 && (s = '_last')
    var a = n._prev,
      l = n._next
    a ? (a._next = l) : e[i] === n && (e[i] = l), l ? (l._prev = a) : e[s] === n && (e[s] = a), (n._next = n._prev = n.parent = null)
  },
  Ci = function (e, n) {
    e.parent && (!n || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), (e._act = 0)
  },
  Ji = function (e, n) {
    if (e && (!n || n._end > e._dur || n._start < 0)) for (var i = e; i; ) (i._dirty = 1), (i = i.parent)
    return e
  },
  zx = function (e) {
    for (var n = e.parent; n && n.parent; ) (n._dirty = 1), n.totalDuration(), (n = n.parent)
    return e
  },
  Ql = function (e, n, i, s) {
    return e._startAt && (Ge ? e._startAt.revert(Ha) : (e.vars.immediateRender && !e.vars.autoRevert) || e._startAt.render(n, !0, s))
  },
  Wx = function u(e) {
    return !e || (e._ts && u(e.parent))
  },
  Ad = function (e) {
    return e._repeat ? Hs(e._tTime, (e = e.duration() + e._rDelay)) * e : 0
  },
  Hs = function (e, n) {
    var i = Math.floor((e /= n))
    return e && i === e ? i - 1 : i
  },
  su = function (e, n) {
    return (e - n._start) * n._ts + (n._ts >= 0 ? 0 : n._dirty ? n.totalDuration() : n._tDur)
  },
  _u = function (e) {
    return (e._end = Le(e._start + (e._tDur / Math.abs(e._ts || e._rts || Bt) || 0)))
  },
  gu = function (e, n) {
    var i = e._dp
    return (
      i &&
        i.smoothChildTiming &&
        e._ts &&
        ((e._start = Le(i._time - (e._ts > 0 ? n / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - n) / -e._ts))), _u(e), i._dirty || Ji(i, e)),
      e
    )
  },
  kp = function (e, n) {
    var i
    if (
      ((n._time || (!n._dur && n._initted) || (n._start < e._time && (n._dur || !n.add))) &&
        ((i = su(e.rawTime(), n)), (!n._dur || Yo(0, n.totalDuration(), i) - n._tTime > Bt) && n.render(i, !0)),
      Ji(e, n)._dp && e._initted && e._time >= e._dur && e._ts)
    ) {
      if (e._dur < e.duration()) for (i = e; i._dp; ) i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp)
      e._zTime = -Bt
    }
  },
  Dr = function (e, n, i, s) {
    return (
      n.parent && Ci(n),
      (n._start = Le((ni(i) ? i : i || e !== jt ? sr(e, i, n) : e._time) + n._delay)),
      (n._end = Le(n._start + (n.totalDuration() / Math.abs(n.timeScale()) || 0))),
      Ip(e, n, '_first', '_last', e._sort ? '_start' : 0),
      jl(n) || (e._recent = n),
      s || kp(e, n),
      e._ts < 0 && gu(e, e._tTime),
      e
    )
  },
  Fp = function (e, n) {
    return ($n.ScrollTrigger || Rf('scrollTrigger', n)) && $n.ScrollTrigger.create(n, e)
  },
  zp = function (e, n, i, s, a) {
    if ((kf(e, n, a), !e._initted)) return 1
    if (!i && e._pt && !Ge && ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) && Pp !== Nn.frame)
      return bi.push(e), (e._lazy = [a, s]), 1
  },
  Bx = function u(e) {
    var n = e.parent
    return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || u(n))
  },
  jl = function (e) {
    var n = e.data
    return n === 'isFromStart' || n === 'isStart'
  },
  Nx = function (e, n, i, s) {
    var a = e.ratio,
      l = n < 0 || (!n && ((!e._start && Bx(e) && !(!e._initted && jl(e))) || ((e._ts < 0 || e._dp._ts < 0) && !jl(e)))) ? 0 : 1,
      f = e._rDelay,
      h = 0,
      p,
      g,
      y
    if (
      (f &&
        e._repeat &&
        ((h = Yo(0, e._tDur, n)),
        (g = Hs(h, f)),
        e._yoyo && g & 1 && (l = 1 - l),
        g !== Hs(e._tTime, f) && ((a = 1 - l), e.vars.repeatRefresh && e._initted && e.invalidate())),
      l !== a || Ge || s || e._zTime === Bt || (!n && e._zTime))
    ) {
      if (!e._initted && zp(e, n, s, i, h)) return
      for (
        y = e._zTime, e._zTime = n || (i ? Bt : 0), i || (i = n && !y), e.ratio = l, e._from && (l = 1 - l), e._time = 0, e._tTime = h, p = e._pt;
        p;

      )
        p.r(l, p.d), (p = p._next)
      n < 0 && Ql(e, n, i, !0),
        e._onUpdate && !i && Yn(e, 'onUpdate'),
        h && e._repeat && !i && e.parent && Yn(e, 'onRepeat'),
        (n >= e._tDur || n < 0) &&
          e.ratio === l &&
          (l && Ci(e, 1), !i && !Ge && (Yn(e, l ? 'onComplete' : 'onReverseComplete', !0), e._prom && e._prom()))
    } else e._zTime || (e._zTime = n)
  },
  Ux = function (e, n, i) {
    var s
    if (i > n)
      for (s = e._first; s && s._start <= i; ) {
        if (s.data === 'isPause' && s._start > n) return s
        s = s._next
      }
    else
      for (s = e._last; s && s._start >= i; ) {
        if (s.data === 'isPause' && s._start < n) return s
        s = s._prev
      }
  },
  $s = function (e, n, i, s) {
    var a = e._repeat,
      l = Le(n) || 0,
      f = e._tTime / e._tDur
    return (
      f && !s && (e._time *= l / e._dur),
      (e._dur = l),
      (e._tDur = a ? (a < 0 ? 1e10 : Le(l * (a + 1) + e._rDelay * a)) : l),
      f > 0 && !s && gu(e, (e._tTime = e._tDur * f)),
      e.parent && _u(e),
      i || Ji(e.parent, e),
      e
    )
  },
  Od = function (e) {
    return e instanceof un ? Ji(e) : $s(e, e._dur)
  },
  Yx = { _start: 0, endTime: Do, totalDuration: Do },
  sr = function u(e, n, i) {
    var s = e.labels,
      a = e._recent || Yx,
      l = e.duration() >= lr ? a.endTime(!1) : e._dur,
      f,
      h,
      p
    return De(n) && (isNaN(n) || n in s)
      ? ((h = n.charAt(0)),
        (p = n.substr(-1) === '%'),
        (f = n.indexOf('=')),
        h === '<' || h === '>'
          ? (f >= 0 && (n = n.replace(/=/, '')),
            (h === '<' ? a._start : a.endTime(a._repeat >= 0)) + (parseFloat(n.substr(1)) || 0) * (p ? (f < 0 ? a : i).totalDuration() / 100 : 1))
          : f < 0
          ? (n in s || (s[n] = l), s[n])
          : ((h = parseFloat(n.charAt(f - 1) + n.substr(f + 1))),
            p && i && (h = (h / 100) * (qe(i) ? i[0] : i).totalDuration()),
            f > 1 ? u(e, n.substr(0, f - 1), i) + h : l + h))
      : n == null
      ? l
      : +n
  },
  bo = function (e, n, i) {
    var s = ni(n[1]),
      a = (s ? 2 : 1) + (e < 2 ? 0 : 1),
      l = n[a],
      f,
      h
    if ((s && (l.duration = n[1]), (l.parent = i), e)) {
      for (f = l, h = i; h && !('immediateRender' in f); ) (f = h.vars.defaults || {}), (h = wn(h.vars.inherit) && h.parent)
      ;(l.immediateRender = wn(f.immediateRender)), e < 2 ? (l.runBackwards = 1) : (l.startAt = n[a - 1])
    }
    return new ye(n[0], l, n[a + 1])
  },
  Ei = function (e, n) {
    return e || e === 0 ? n(e) : n
  },
  Yo = function (e, n, i) {
    return i < e ? e : i > n ? n : i
  },
  Xe = function (e, n) {
    return !De(e) || !(n = Mx.exec(e)) ? '' : n[1]
  },
  Hx = function (e, n, i) {
    return Ei(i, function (s) {
      return Yo(e, n, s)
    })
  },
  tf = [].slice,
  Wp = function (e, n) {
    return e && Br(e) && 'length' in e && ((!n && !e.length) || (e.length - 1 in e && Br(e[0]))) && !e.nodeType && e !== or
  },
  $x = function (e, n, i) {
    return (
      i === void 0 && (i = []),
      e.forEach(function (s) {
        var a
        return (De(s) && !n) || Wp(s, 1) ? (a = i).push.apply(a, fr(s)) : i.push(s)
      }) || i
    )
  },
  fr = function (e, n, i) {
    return se && !n && se.selector
      ? se.selector(e)
      : De(e) && !i && (Zl || !Xs())
      ? tf.call((n || Pf).querySelectorAll(e), 0)
      : qe(e)
      ? $x(e, i)
      : Wp(e)
      ? tf.call(e, 0)
      : e
      ? [e]
      : []
  },
  ef = function (e) {
    return (
      (e = fr(e)[0] || Lo('Invalid scope') || {}),
      function (n) {
        var i = e.current || e.nativeElement || e
        return fr(n, i.querySelectorAll ? i : i === e ? Lo('Invalid scope') || Pf.createElement('div') : e)
      }
    )
  },
  Bp = function (e) {
    return e.sort(function () {
      return 0.5 - Math.random()
    })
  },
  Np = function (e) {
    if (oe(e)) return e
    var n = Br(e) ? e : { each: e },
      i = Qi(n.ease),
      s = n.from || 0,
      a = parseFloat(n.base) || 0,
      l = {},
      f = s > 0 && s < 1,
      h = isNaN(s) || f,
      p = n.axis,
      g = s,
      y = s
    return (
      De(s) ? (g = y = { center: 0.5, edges: 0.5, end: 1 }[s] || 0) : !f && h && ((g = s[0]), (y = s[1])),
      function (x, v, T) {
        var b = (T || n).length,
          E = l[b],
          k,
          z,
          W,
          P,
          R,
          I,
          M,
          H,
          U
        if (!E) {
          if (((U = n.grid === 'auto' ? 0 : (n.grid || [1, lr])[1]), !U)) {
            for (M = -lr; M < (M = T[U++].getBoundingClientRect().left) && U < b; );
            U < b && U--
          }
          for (
            E = l[b] = [], k = h ? Math.min(U, b) * g - 0.5 : s % U, z = U === lr ? 0 : h ? (b * y) / U - 0.5 : (s / U) | 0, M = 0, H = lr, I = 0;
            I < b;
            I++
          )
            (W = (I % U) - k),
              (P = z - ((I / U) | 0)),
              (E[I] = R = p ? Math.abs(p === 'y' ? P : W) : xp(W * W + P * P)),
              R > M && (M = R),
              R < H && (H = R)
          s === 'random' && Bp(E),
            (E.max = M - H),
            (E.min = H),
            (E.v = b =
              (parseFloat(n.amount) || parseFloat(n.each) * (U > b ? b - 1 : p ? (p === 'y' ? b / U : U) : Math.max(U, b / U)) || 0) *
              (s === 'edges' ? -1 : 1)),
            (E.b = b < 0 ? a - b : a),
            (E.u = Xe(n.amount || n.each) || 0),
            (i = i && b < 0 ? Zp(i) : i)
        }
        return (b = (E[x] - E.min) / E.max || 0), Le(E.b + (i ? i(b) : b) * E.v) + E.u
      }
    )
  },
  nf = function (e) {
    var n = Math.pow(10, ((e + '').split('.')[1] || '').length)
    return function (i) {
      var s = Le(Math.round(parseFloat(i) / e) * e * n)
      return (s - (s % 1)) / n + (ni(i) ? 0 : Xe(i))
    }
  },
  Up = function (e, n) {
    var i = qe(e),
      s,
      a
    return (
      !i && Br(e) && ((s = i = e.radius || lr), e.values ? ((e = fr(e.values)), (a = !ni(e[0])) && (s *= s)) : (e = nf(e.increment))),
      Ei(
        n,
        i
          ? oe(e)
            ? function (l) {
                return (a = e(l)), Math.abs(a - l) <= s ? a : l
              }
            : function (l) {
                for (var f = parseFloat(a ? l.x : l), h = parseFloat(a ? l.y : 0), p = lr, g = 0, y = e.length, x, v; y--; )
                  a ? ((x = e[y].x - f), (v = e[y].y - h), (x = x * x + v * v)) : (x = Math.abs(e[y] - f)), x < p && ((p = x), (g = y))
                return (g = !s || p <= s ? e[g] : l), a || g === l || ni(l) ? g : g + Xe(l)
              }
          : nf(e)
      )
    )
  },
  Yp = function (e, n, i, s) {
    return Ei(qe(e) ? !n : i === !0 ? !!(i = 0) : !s, function () {
      return qe(e)
        ? e[~~(Math.random() * e.length)]
        : (i = i || 1e-5) &&
            (s = i < 1 ? Math.pow(10, (i + '').length - 2) : 1) &&
            Math.floor(Math.round((e - i / 2 + Math.random() * (n - e + i * 0.99)) / i) * i * s) / s
    })
  },
  Xx = function () {
    for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++) n[i] = arguments[i]
    return function (s) {
      return n.reduce(function (a, l) {
        return l(a)
      }, s)
    }
  },
  Gx = function (e, n) {
    return function (i) {
      return e(parseFloat(i)) + (n || Xe(i))
    }
  },
  qx = function (e, n, i) {
    return $p(e, n, 0, 1, i)
  },
  Hp = function (e, n, i) {
    return Ei(i, function (s) {
      return e[~~n(s)]
    })
  },
  Vx = function u(e, n, i) {
    var s = n - e
    return qe(e)
      ? Hp(e, u(0, e.length), n)
      : Ei(i, function (a) {
          return ((s + ((a - e) % s)) % s) + e
        })
  },
  Kx = function u(e, n, i) {
    var s = n - e,
      a = s * 2
    return qe(e)
      ? Hp(e, u(0, e.length - 1), n)
      : Ei(i, function (l) {
          return (l = (a + ((l - e) % a)) % a || 0), e + (l > s ? a - l : l)
        })
  },
  Io = function (e) {
    for (var n = 0, i = '', s, a, l, f; ~(s = e.indexOf('random(', n)); )
      (l = e.indexOf(')', s)),
        (f = e.charAt(s + 7) === '['),
        (a = e.substr(s + 7, l - s - 7).match(f ? Cp : Kl)),
        (i += e.substr(n, s - n) + Yp(f ? a : +a[0], f ? 0 : +a[1], +a[2] || 1e-5)),
        (n = l + 1)
    return i + e.substr(n, e.length - n)
  },
  $p = function (e, n, i, s, a) {
    var l = n - e,
      f = s - i
    return Ei(a, function (h) {
      return i + (((h - e) / l) * f || 0)
    })
  },
  Zx = function u(e, n, i, s) {
    var a = isNaN(e + n)
      ? 0
      : function (v) {
          return (1 - v) * e + v * n
        }
    if (!a) {
      var l = De(e),
        f = {},
        h,
        p,
        g,
        y,
        x
      if ((i === !0 && (s = 1) && (i = null), l)) (e = { p: e }), (n = { p: n })
      else if (qe(e) && !qe(n)) {
        for (g = [], y = e.length, x = y - 2, p = 1; p < y; p++) g.push(u(e[p - 1], e[p]))
        y--,
          (a = function (T) {
            T *= y
            var b = Math.min(x, ~~T)
            return g[b](T - b)
          }),
          (i = n)
      } else s || (e = is(qe(e) ? [] : {}, e))
      if (!g) {
        for (h in n) If.call(f, e, h, 'get', n[h])
        a = function (T) {
          return Wf(T, f) || (l ? e.p : e)
        }
      }
    }
    return Ei(i, a)
  },
  Ed = function (e, n, i) {
    var s = e.labels,
      a = lr,
      l,
      f,
      h
    for (l in s) (f = s[l] - n), f < 0 == !!i && f && a > (f = Math.abs(f)) && ((h = l), (a = f))
    return h
  },
  Yn = function (e, n, i) {
    var s = e.vars,
      a = s[n],
      l = se,
      f = e._ctx,
      h,
      p,
      g
    if (a)
      return (
        (h = s[n + 'Params']), (p = s.callbackScope || e), i && bi.length && ru(), f && (se = f), (g = h ? a.apply(p, h) : a.call(p)), (se = l), g
      )
  },
  go = function (e) {
    return Ci(e), e.scrollTrigger && e.scrollTrigger.kill(!!Ge), e.progress() < 1 && Yn(e, 'onInterrupt'), e
  },
  Ds,
  Xp = [],
  Gp = function (e) {
    if (Ef() && e) {
      e = (!e.name && e.default) || e
      var n = e.name,
        i = oe(e),
        s =
          n && !i && e.init
            ? function () {
                this._props = []
              }
            : e,
        a = { init: Do, render: Wf, add: If, kill: hb, modifier: cb, rawVars: 0 },
        l = { targetTest: 0, get: 0, getSetter: zf, aliases: {}, register: 0 }
      if ((Xs(), e !== s)) {
        if (Bn[n]) return
        hr(s, hr(iu(e, a), l)),
          is(s.prototype, is(a, iu(e, l))),
          (Bn[(s.prop = n)] = s),
          e.targetTest && ($a.push(s), (Mf[n] = 1)),
          (n = (n === 'css' ? 'CSS' : n.charAt(0).toUpperCase() + n.substr(1)) + 'Plugin')
      }
      Ep(n, s), e.register && e.register(Tn, s, bn)
    } else e && Xp.push(e)
  },
  Wt = 255,
  mo = {
    aqua: [0, Wt, Wt],
    lime: [0, Wt, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, Wt],
    navy: [0, 0, 128],
    white: [Wt, Wt, Wt],
    olive: [128, 128, 0],
    yellow: [Wt, Wt, 0],
    orange: [Wt, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [Wt, 0, 0],
    pink: [Wt, 192, 203],
    cyan: [0, Wt, Wt],
    transparent: [Wt, Wt, Wt, 0],
  },
  Rl = function (e, n, i) {
    return (
      (e += e < 0 ? 1 : e > 1 ? -1 : 0),
      ((e * 6 < 1 ? n + (i - n) * e * 6 : e < 0.5 ? i : e * 3 < 2 ? n + (i - n) * (2 / 3 - e) * 6 : n) * Wt + 0.5) | 0
    )
  },
  qp = function (e, n, i) {
    var s = e ? (ni(e) ? [e >> 16, (e >> 8) & Wt, e & Wt] : 0) : mo.black,
      a,
      l,
      f,
      h,
      p,
      g,
      y,
      x,
      v,
      T
    if (!s) {
      if ((e.substr(-1) === ',' && (e = e.substr(0, e.length - 1)), mo[e])) s = mo[e]
      else if (e.charAt(0) === '#') {
        if (
          (e.length < 6 &&
            ((a = e.charAt(1)),
            (l = e.charAt(2)),
            (f = e.charAt(3)),
            (e = '#' + a + a + l + l + f + f + (e.length === 5 ? e.charAt(4) + e.charAt(4) : ''))),
          e.length === 9)
        )
          return (s = parseInt(e.substr(1, 6), 16)), [s >> 16, (s >> 8) & Wt, s & Wt, parseInt(e.substr(7), 16) / 255]
        ;(e = parseInt(e.substr(1), 16)), (s = [e >> 16, (e >> 8) & Wt, e & Wt])
      } else if (e.substr(0, 3) === 'hsl') {
        if (((s = T = e.match(Kl)), !n))
          (h = (+s[0] % 360) / 360),
            (p = +s[1] / 100),
            (g = +s[2] / 100),
            (l = g <= 0.5 ? g * (p + 1) : g + p - g * p),
            (a = g * 2 - l),
            s.length > 3 && (s[3] *= 1),
            (s[0] = Rl(h + 1 / 3, a, l)),
            (s[1] = Rl(h, a, l)),
            (s[2] = Rl(h - 1 / 3, a, l))
        else if (~e.indexOf('=')) return (s = e.match(Sp)), i && s.length < 4 && (s[3] = 1), s
      } else s = e.match(Kl) || mo.transparent
      s = s.map(Number)
    }
    return (
      n &&
        !T &&
        ((a = s[0] / Wt),
        (l = s[1] / Wt),
        (f = s[2] / Wt),
        (y = Math.max(a, l, f)),
        (x = Math.min(a, l, f)),
        (g = (y + x) / 2),
        y === x
          ? (h = p = 0)
          : ((v = y - x),
            (p = g > 0.5 ? v / (2 - y - x) : v / (y + x)),
            (h = y === a ? (l - f) / v + (l < f ? 6 : 0) : y === l ? (f - a) / v + 2 : (a - l) / v + 4),
            (h *= 60)),
        (s[0] = ~~(h + 0.5)),
        (s[1] = ~~(p * 100 + 0.5)),
        (s[2] = ~~(g * 100 + 0.5))),
      i && s.length < 4 && (s[3] = 1),
      s
    )
  },
  Vp = function (e) {
    var n = [],
      i = [],
      s = -1
    return (
      e.split(Si).forEach(function (a) {
        var l = a.match(Ls) || []
        n.push.apply(n, l), i.push((s += l.length + 1))
      }),
      (n.c = i),
      n
    )
  },
  Pd = function (e, n, i) {
    var s = '',
      a = (e + s).match(Si),
      l = n ? 'hsla(' : 'rgba(',
      f = 0,
      h,
      p,
      g,
      y
    if (!a) return e
    if (
      ((a = a.map(function (x) {
        return (x = qp(x, n, 1)) && l + (n ? x[0] + ',' + x[1] + '%,' + x[2] + '%,' + x[3] : x.join(',')) + ')'
      })),
      i && ((g = Vp(e)), (h = i.c), h.join(s) !== g.c.join(s)))
    )
      for (p = e.replace(Si, '1').split(Ls), y = p.length - 1; f < y; f++)
        s += p[f] + (~h.indexOf(f) ? a.shift() || l + '0,0,0,0)' : (g.length ? g : a.length ? a : i).shift())
    if (!p) for (p = e.split(Si), y = p.length - 1; f < y; f++) s += p[f] + a[f]
    return s + p[y]
  },
  Si = (function () {
    var u = '(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b',
      e
    for (e in mo) u += '|' + e + '\\b'
    return new RegExp(u + ')', 'gi')
  })(),
  Jx = /hsl[a]?\(/,
  Kp = function (e) {
    var n = e.join(' '),
      i
    if (((Si.lastIndex = 0), Si.test(n))) return (i = Jx.test(n)), (e[1] = Pd(e[1], i)), (e[0] = Pd(e[0], i, Vp(e[1]))), !0
  },
  ko,
  Nn = (function () {
    var u = Date.now,
      e = 500,
      n = 33,
      i = u(),
      s = i,
      a = 1e3 / 240,
      l = a,
      f = [],
      h,
      p,
      g,
      y,
      x,
      v,
      T = function b(E) {
        var k = u() - s,
          z = E === !0,
          W,
          P,
          R,
          I
        if (
          (k > e && (i += k - n),
          (s += k),
          (R = s - i),
          (W = R - l),
          (W > 0 || z) && ((I = ++y.frame), (x = R - y.time * 1e3), (y.time = R = R / 1e3), (l += W + (W >= a ? 4 : a - W)), (P = 1)),
          z || (h = p(b)),
          P)
        )
          for (v = 0; v < f.length; v++) f[v](R, x, I, E)
      }
    return (
      (y = {
        time: 0,
        frame: 0,
        tick: function () {
          T(!0)
        },
        deltaRatio: function (E) {
          return x / (1e3 / (E || 60))
        },
        wake: function () {
          Ap &&
            (!Zl &&
              Ef() &&
              ((or = Zl = window),
              (Pf = or.document || {}),
              ($n.gsap = Tn),
              (or.gsapVersions || (or.gsapVersions = [])).push(Tn.version),
              Op(nu || or.GreenSockGlobals || (!or.gsap && or) || {}),
              (g = or.requestAnimationFrame),
              Xp.forEach(Gp)),
            h && y.sleep(),
            (p =
              g ||
              function (E) {
                return setTimeout(E, (l - y.time * 1e3 + 1) | 0)
              }),
            (ko = 1),
            T(2))
        },
        sleep: function () {
          ;(g ? or.cancelAnimationFrame : clearTimeout)(h), (ko = 0), (p = Do)
        },
        lagSmoothing: function (E, k) {
          ;(e = E || 1 / 0), (n = Math.min(k || 33, e))
        },
        fps: function (E) {
          ;(a = 1e3 / (E || 240)), (l = y.time * 1e3 + a)
        },
        add: function (E, k, z) {
          var W = k
            ? function (P, R, I, M) {
                E(P, R, I, M), y.remove(W)
              }
            : E
          return y.remove(E), f[z ? 'unshift' : 'push'](W), Xs(), W
        },
        remove: function (E, k) {
          ~(k = f.indexOf(E)) && f.splice(k, 1) && v >= k && v--
        },
        _listeners: f,
      }),
      y
    )
  })(),
  Xs = function () {
    return !ko && Nn.wake()
  },
  Et = {},
  Qx = /^[\d.\-M][\d.\-,\s]/,
  jx = /["']/g,
  tb = function (e) {
    for (var n = {}, i = e.substr(1, e.length - 3).split(':'), s = i[0], a = 1, l = i.length, f, h, p; a < l; a++)
      (h = i[a]),
        (f = a !== l - 1 ? h.lastIndexOf(',') : h.length),
        (p = h.substr(0, f)),
        (n[s] = isNaN(p) ? p.replace(jx, '').trim() : +p),
        (s = h.substr(f + 1).trim())
    return n
  },
  eb = function (e) {
    var n = e.indexOf('(') + 1,
      i = e.indexOf(')'),
      s = e.indexOf('(', n)
    return e.substring(n, ~s && s < i ? e.indexOf(')', i + 1) : i)
  },
  nb = function (e) {
    var n = (e + '').split('('),
      i = Et[n[0]]
    return i && n.length > 1 && i.config
      ? i.config.apply(null, ~e.indexOf('{') ? [tb(n[1])] : eb(e).split(',').map(Lp))
      : Et._CE && Qx.test(e)
      ? Et._CE('', e)
      : i
  },
  Zp = function (e) {
    return function (n) {
      return 1 - e(1 - n)
    }
  },
  Jp = function u(e, n) {
    for (var i = e._first, s; i; )
      i instanceof un
        ? u(i, n)
        : i.vars.yoyoEase &&
          (!i._yoyo || !i._repeat) &&
          i._yoyo !== n &&
          (i.timeline ? u(i.timeline, n) : ((s = i._ease), (i._ease = i._yEase), (i._yEase = s), (i._yoyo = n))),
        (i = i._next)
  },
  Qi = function (e, n) {
    return (e && (oe(e) ? e : Et[e] || nb(e))) || n
  },
  ls = function (e, n, i, s) {
    i === void 0 &&
      (i = function (h) {
        return 1 - n(1 - h)
      }),
      s === void 0 &&
        (s = function (h) {
          return h < 0.5 ? n(h * 2) / 2 : 1 - n((1 - h) * 2) / 2
        })
    var a = { easeIn: n, easeOut: i, easeInOut: s },
      l
    return (
      xn(e, function (f) {
        ;(Et[f] = $n[f] = a), (Et[(l = f.toLowerCase())] = i)
        for (var h in a) Et[l + (h === 'easeIn' ? '.in' : h === 'easeOut' ? '.out' : '.inOut')] = Et[f + '.' + h] = a[h]
      }),
      a
    )
  },
  Qp = function (e) {
    return function (n) {
      return n < 0.5 ? (1 - e(1 - n * 2)) / 2 : 0.5 + e((n - 0.5) * 2) / 2
    }
  },
  Ml = function u(e, n, i) {
    var s = n >= 1 ? n : 1,
      a = (i || (e ? 0.3 : 0.45)) / (n < 1 ? n : 1),
      l = (a / Vl) * (Math.asin(1 / s) || 0),
      f = function (g) {
        return g === 1 ? 1 : s * Math.pow(2, -10 * g) * Rx((g - l) * a) + 1
      },
      h =
        e === 'out'
          ? f
          : e === 'in'
          ? function (p) {
              return 1 - f(1 - p)
            }
          : Qp(f)
    return (
      (a = Vl / a),
      (h.config = function (p, g) {
        return u(e, p, g)
      }),
      h
    )
  },
  Ll = function u(e, n) {
    n === void 0 && (n = 1.70158)
    var i = function (l) {
        return l ? --l * l * ((n + 1) * l + n) + 1 : 0
      },
      s =
        e === 'out'
          ? i
          : e === 'in'
          ? function (a) {
              return 1 - i(1 - a)
            }
          : Qp(i)
    return (
      (s.config = function (a) {
        return u(e, a)
      }),
      s
    )
  }
xn('Linear,Quad,Cubic,Quart,Quint,Strong', function (u, e) {
  var n = e < 5 ? e + 1 : e
  ls(
    u + ',Power' + (n - 1),
    e
      ? function (i) {
          return Math.pow(i, n)
        }
      : function (i) {
          return i
        },
    function (i) {
      return 1 - Math.pow(1 - i, n)
    },
    function (i) {
      return i < 0.5 ? Math.pow(i * 2, n) / 2 : 1 - Math.pow((1 - i) * 2, n) / 2
    }
  )
})
Et.Linear.easeNone = Et.none = Et.Linear.easeIn
ls('Elastic', Ml('in'), Ml('out'), Ml())
;(function (u, e) {
  var n = 1 / e,
    i = 2 * n,
    s = 2.5 * n,
    a = function (f) {
      return f < n
        ? u * f * f
        : f < i
        ? u * Math.pow(f - 1.5 / e, 2) + 0.75
        : f < s
        ? u * (f -= 2.25 / e) * f + 0.9375
        : u * Math.pow(f - 2.625 / e, 2) + 0.984375
    }
  ls(
    'Bounce',
    function (l) {
      return 1 - a(1 - l)
    },
    a
  )
})(7.5625, 2.75)
ls('Expo', function (u) {
  return u ? Math.pow(2, 10 * (u - 1)) : 0
})
ls('Circ', function (u) {
  return -(xp(1 - u * u) - 1)
})
ls('Sine', function (u) {
  return u === 1 ? 1 : -Px(u * Ox) + 1
})
ls('Back', Ll('in'), Ll('out'), Ll())
Et.SteppedEase =
  Et.steps =
  $n.SteppedEase =
    {
      config: function (e, n) {
        e === void 0 && (e = 1)
        var i = 1 / e,
          s = e + (n ? 0 : 1),
          a = n ? 1 : 0,
          l = 1 - Bt
        return function (f) {
          return (((s * Yo(0, l, f)) | 0) + a) * i
        }
      },
    }
Ys.ease = Et['quad.out']
xn('onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt', function (u) {
  return (Lf += u + ',' + u + 'Params,')
})
var jp = function (e, n) {
    ;(this.id = Ex++), (e._gsap = this), (this.target = e), (this.harness = n), (this.get = n ? n.get : Rp), (this.set = n ? n.getSetter : zf)
  },
  Fo = (function () {
    function u(n) {
      ;(this.vars = n),
        (this._delay = +n.delay || 0),
        (this._repeat = n.repeat === 1 / 0 ? -2 : n.repeat || 0) && ((this._rDelay = n.repeatDelay || 0), (this._yoyo = !!n.yoyo || !!n.yoyoEase)),
        (this._ts = 1),
        $s(this, +n.duration, 1, 1),
        (this.data = n.data),
        se && ((this._ctx = se), se.data.push(this)),
        ko || Nn.wake()
    }
    var e = u.prototype
    return (
      (e.delay = function (i) {
        return i || i === 0
          ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + i - this._delay), (this._delay = i), this)
          : this._delay
      }),
      (e.duration = function (i) {
        return arguments.length ? this.totalDuration(this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i) : this.totalDuration() && this._dur
      }),
      (e.totalDuration = function (i) {
        return arguments.length
          ? ((this._dirty = 0), $s(this, this._repeat < 0 ? i : (i - this._repeat * this._rDelay) / (this._repeat + 1)))
          : this._tDur
      }),
      (e.totalTime = function (i, s) {
        if ((Xs(), !arguments.length)) return this._tTime
        var a = this._dp
        if (a && a.smoothChildTiming && this._ts) {
          for (gu(this, i), !a._dp || a.parent || kp(a, this); a && a.parent; )
            a.parent._time !== a._start + (a._ts >= 0 ? a._tTime / a._ts : (a.totalDuration() - a._tTime) / -a._ts) && a.totalTime(a._tTime, !0),
              (a = a.parent)
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && i < this._tDur) || (this._ts < 0 && i > 0) || (!this._tDur && !i)) &&
            Dr(this._dp, this, this._start - this._delay)
        }
        return (
          (this._tTime !== i ||
            (!this._dur && !s) ||
            (this._initted && Math.abs(this._zTime) === Bt) ||
            (!i && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = i), Mp(this, i, s)),
          this
        )
      }),
      (e.time = function (i, s) {
        return arguments.length
          ? this.totalTime(Math.min(this.totalDuration(), i + Ad(this)) % (this._dur + this._rDelay) || (i ? this._dur : 0), s)
          : this._time
      }),
      (e.totalProgress = function (i, s) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * i, s)
          : this.totalDuration()
          ? Math.min(1, this._tTime / this._tDur)
          : this.ratio
      }),
      (e.progress = function (i, s) {
        return arguments.length
          ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) + Ad(this), s)
          : this.duration()
          ? Math.min(1, this._time / this._dur)
          : this.ratio
      }),
      (e.iteration = function (i, s) {
        var a = this.duration() + this._rDelay
        return arguments.length ? this.totalTime(this._time + (i - 1) * a, s) : this._repeat ? Hs(this._tTime, a) + 1 : 1
      }),
      (e.timeScale = function (i, s) {
        if (!arguments.length) return this._rts === -Bt ? 0 : this._rts
        if (this._rts === i) return this
        var a = this.parent && this._ts ? su(this.parent._time, this) : this._tTime
        return (
          (this._rts = +i || 0),
          (this._ts = this._ps || i === -Bt ? 0 : this._rts),
          this.totalTime(Yo(-Math.abs(this._delay), this._tDur, a), s !== !1),
          _u(this),
          zx(this)
        )
      }),
      (e.paused = function (i) {
        return arguments.length
          ? (this._ps !== i &&
              ((this._ps = i),
              i
                ? ((this._pTime = this._tTime || Math.max(-this._delay, this.rawTime())), (this._ts = this._act = 0))
                : (Xs(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime,
                    this.progress() === 1 && Math.abs(this._zTime) !== Bt && (this._tTime -= Bt)
                  ))),
            this)
          : this._ps
      }),
      (e.startTime = function (i) {
        if (arguments.length) {
          this._start = i
          var s = this.parent || this._dp
          return s && (s._sort || !this.parent) && Dr(s, this, i - this._delay), this
        }
        return this._start
      }),
      (e.endTime = function (i) {
        return this._start + (wn(i) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
      }),
      (e.rawTime = function (i) {
        var s = this.parent || this._dp
        return s
          ? i && (!this._ts || (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
            ? su(s.rawTime(i), this)
            : this._tTime
          : this._tTime
      }),
      (e.revert = function (i) {
        i === void 0 && (i = Dx)
        var s = Ge
        return (
          (Ge = i),
          (this._initted || this._startAt) && (this.timeline && this.timeline.revert(i), this.totalTime(-0.01, i.suppressEvents)),
          this.data !== 'nested' && i.kill !== !1 && this.kill(),
          (Ge = s),
          this
        )
      }),
      (e.globalTime = function (i) {
        for (var s = this, a = arguments.length ? i : s.rawTime(); s; ) (a = s._start + a / (Math.abs(s._ts) || 1)), (s = s._dp)
        return !this.parent && this._sat ? this._sat.globalTime(i) : a
      }),
      (e.repeat = function (i) {
        return arguments.length ? ((this._repeat = i === 1 / 0 ? -2 : i), Od(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
      }),
      (e.repeatDelay = function (i) {
        if (arguments.length) {
          var s = this._time
          return (this._rDelay = i), Od(this), s ? this.time(s) : this
        }
        return this._rDelay
      }),
      (e.yoyo = function (i) {
        return arguments.length ? ((this._yoyo = i), this) : this._yoyo
      }),
      (e.seek = function (i, s) {
        return this.totalTime(sr(this, i), wn(s))
      }),
      (e.restart = function (i, s) {
        return this.play().totalTime(i ? -this._delay : 0, wn(s))
      }),
      (e.play = function (i, s) {
        return i != null && this.seek(i, s), this.reversed(!1).paused(!1)
      }),
      (e.reverse = function (i, s) {
        return i != null && this.seek(i || this.totalDuration(), s), this.reversed(!0).paused(!1)
      }),
      (e.pause = function (i, s) {
        return i != null && this.seek(i, s), this.paused(!0)
      }),
      (e.resume = function () {
        return this.paused(!1)
      }),
      (e.reversed = function (i) {
        return arguments.length ? (!!i !== this.reversed() && this.timeScale(-this._rts || (i ? -Bt : 0)), this) : this._rts < 0
      }),
      (e.invalidate = function () {
        return (this._initted = this._act = 0), (this._zTime = -Bt), this
      }),
      (e.isActive = function () {
        var i = this.parent || this._dp,
          s = this._start,
          a
        return !!(!i || (this._ts && this._initted && i.isActive() && (a = i.rawTime(!0)) >= s && a < this.endTime(!0) - Bt))
      }),
      (e.eventCallback = function (i, s, a) {
        var l = this.vars
        return arguments.length > 1
          ? (s ? ((l[i] = s), a && (l[i + 'Params'] = a), i === 'onUpdate' && (this._onUpdate = s)) : delete l[i], this)
          : l[i]
      }),
      (e.then = function (i) {
        var s = this
        return new Promise(function (a) {
          var l = oe(i) ? i : Dp,
            f = function () {
              var p = s.then
              ;(s.then = null), oe(l) && (l = l(s)) && (l.then || l === s) && (s.then = p), a(l), (s.then = p)
            }
          ;(s._initted && s.totalProgress() === 1 && s._ts >= 0) || (!s._tTime && s._ts < 0) ? f() : (s._prom = f)
        })
      }),
      (e.kill = function () {
        go(this)
      }),
      u
    )
  })()
hr(Fo.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -Bt,
  _prom: 0,
  _ps: !1,
  _rts: 1,
})
var un = (function (u) {
  wp(e, u)
  function e(i, s) {
    var a
    return (
      i === void 0 && (i = {}),
      (a = u.call(this, i) || this),
      (a.labels = {}),
      (a.smoothChildTiming = !!i.smoothChildTiming),
      (a.autoRemoveChildren = !!i.autoRemoveChildren),
      (a._sort = wn(i.sortChildren)),
      jt && Dr(i.parent || jt, Jr(a), s),
      i.reversed && a.reverse(),
      i.paused && a.paused(!0),
      i.scrollTrigger && Fp(Jr(a), i.scrollTrigger),
      a
    )
  }
  var n = e.prototype
  return (
    (n.to = function (s, a, l) {
      return bo(0, arguments, this), this
    }),
    (n.from = function (s, a, l) {
      return bo(1, arguments, this), this
    }),
    (n.fromTo = function (s, a, l, f) {
      return bo(2, arguments, this), this
    }),
    (n.set = function (s, a, l) {
      return (
        (a.duration = 0),
        (a.parent = this),
        xo(a).repeatDelay || (a.repeat = 0),
        (a.immediateRender = !!a.immediateRender),
        new ye(s, a, sr(this, l), 1),
        this
      )
    }),
    (n.call = function (s, a, l) {
      return Dr(this, ye.delayedCall(0, s, a), l)
    }),
    (n.staggerTo = function (s, a, l, f, h, p, g) {
      return (
        (l.duration = a),
        (l.stagger = l.stagger || f),
        (l.onComplete = p),
        (l.onCompleteParams = g),
        (l.parent = this),
        new ye(s, l, sr(this, h)),
        this
      )
    }),
    (n.staggerFrom = function (s, a, l, f, h, p, g) {
      return (l.runBackwards = 1), (xo(l).immediateRender = wn(l.immediateRender)), this.staggerTo(s, a, l, f, h, p, g)
    }),
    (n.staggerFromTo = function (s, a, l, f, h, p, g, y) {
      return (f.startAt = l), (xo(f).immediateRender = wn(f.immediateRender)), this.staggerTo(s, a, f, h, p, g, y)
    }),
    (n.render = function (s, a, l) {
      var f = this._time,
        h = this._dirty ? this.totalDuration() : this._tDur,
        p = this._dur,
        g = s <= 0 ? 0 : Le(s),
        y = this._zTime < 0 != s < 0 && (this._initted || !p),
        x,
        v,
        T,
        b,
        E,
        k,
        z,
        W,
        P,
        R,
        I,
        M
      if ((this !== jt && g > h && s >= 0 && (g = h), g !== this._tTime || l || y)) {
        if (
          (f !== this._time && p && ((g += this._time - f), (s += this._time - f)),
          (x = g),
          (P = this._start),
          (W = this._ts),
          (k = !W),
          y && (p || (f = this._zTime), (s || !a) && (this._zTime = s)),
          this._repeat)
        ) {
          if (((I = this._yoyo), (E = p + this._rDelay), this._repeat < -1 && s < 0)) return this.totalTime(E * 100 + s, a, l)
          if (
            ((x = Le(g % E)),
            g === h ? ((b = this._repeat), (x = p)) : ((b = ~~(g / E)), b && b === g / E && ((x = p), b--), x > p && (x = p)),
            (R = Hs(this._tTime, E)),
            !f && this._tTime && R !== b && this._tTime - R * E - this._dur <= 0 && (R = b),
            I && b & 1 && ((x = p - x), (M = 1)),
            b !== R && !this._lock)
          ) {
            var H = I && R & 1,
              U = H === (I && b & 1)
            if (
              (b < R && (H = !H),
              (f = H ? 0 : g % p ? p : g),
              (this._lock = 1),
              (this.render(f || (M ? 0 : Le(b * E)), a, !p)._lock = 0),
              (this._tTime = g),
              !a && this.parent && Yn(this, 'onRepeat'),
              this.vars.repeatRefresh && !M && (this.invalidate()._lock = 1),
              (f && f !== this._time) || k !== !this._ts || (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this
            if (
              ((p = this._dur),
              (h = this._tDur),
              U && ((this._lock = 2), (f = H ? p : -1e-4), this.render(f, !0), this.vars.repeatRefresh && !M && this.invalidate()),
              (this._lock = 0),
              !this._ts && !k)
            )
              return this
            Jp(this, M)
          }
        }
        if (
          (this._hasPause && !this._forcing && this._lock < 2 && ((z = Ux(this, Le(f), Le(x))), z && (g -= x - (x = z._start))),
          (this._tTime = g),
          (this._time = x),
          (this._act = !W),
          this._initted || ((this._onUpdate = this.vars.onUpdate), (this._initted = 1), (this._zTime = s), (f = 0)),
          !f && x && !a && !b && (Yn(this, 'onStart'), this._tTime !== g))
        )
          return this
        if (x >= f && s >= 0)
          for (v = this._first; v; ) {
            if (((T = v._next), (v._act || x >= v._start) && v._ts && z !== v)) {
              if (v.parent !== this) return this.render(s, a, l)
              if (
                (v.render(v._ts > 0 ? (x - v._start) * v._ts : (v._dirty ? v.totalDuration() : v._tDur) + (x - v._start) * v._ts, a, l),
                x !== this._time || (!this._ts && !k))
              ) {
                ;(z = 0), T && (g += this._zTime = -Bt)
                break
              }
            }
            v = T
          }
        else {
          v = this._last
          for (var $ = s < 0 ? s : x; v; ) {
            if (((T = v._prev), (v._act || $ <= v._end) && v._ts && z !== v)) {
              if (v.parent !== this) return this.render(s, a, l)
              if (
                (v.render(
                  v._ts > 0 ? ($ - v._start) * v._ts : (v._dirty ? v.totalDuration() : v._tDur) + ($ - v._start) * v._ts,
                  a,
                  l || (Ge && (v._initted || v._startAt))
                ),
                x !== this._time || (!this._ts && !k))
              ) {
                ;(z = 0), T && (g += this._zTime = $ ? -Bt : Bt)
                break
              }
            }
            v = T
          }
        }
        if (z && !a && (this.pause(), (z.render(x >= f ? 0 : -Bt)._zTime = x >= f ? 1 : -1), this._ts))
          return (this._start = P), _u(this), this.render(s, a, l)
        this._onUpdate && !a && Yn(this, 'onUpdate', !0),
          ((g === h && this._tTime >= this.totalDuration()) || (!g && f)) &&
            (P === this._start || Math.abs(W) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((s || !p) && ((g === h && this._ts > 0) || (!g && this._ts < 0)) && Ci(this, 1),
              !a &&
                !(s < 0 && !f) &&
                (g || f || !h) &&
                (Yn(this, g === h && s >= 0 ? 'onComplete' : 'onReverseComplete', !0),
                this._prom && !(g < h && this.timeScale() > 0) && this._prom())))
      }
      return this
    }),
    (n.add = function (s, a) {
      var l = this
      if ((ni(a) || (a = sr(this, a, s)), !(s instanceof Fo))) {
        if (qe(s))
          return (
            s.forEach(function (f) {
              return l.add(f, a)
            }),
            this
          )
        if (De(s)) return this.addLabel(s, a)
        if (oe(s)) s = ye.delayedCall(0, s)
        else return this
      }
      return this !== s ? Dr(this, s, a) : this
    }),
    (n.getChildren = function (s, a, l, f) {
      s === void 0 && (s = !0), a === void 0 && (a = !0), l === void 0 && (l = !0), f === void 0 && (f = -lr)
      for (var h = [], p = this._first; p; )
        p._start >= f && (p instanceof ye ? a && h.push(p) : (l && h.push(p), s && h.push.apply(h, p.getChildren(!0, a, l)))), (p = p._next)
      return h
    }),
    (n.getById = function (s) {
      for (var a = this.getChildren(1, 1, 1), l = a.length; l--; ) if (a[l].vars.id === s) return a[l]
    }),
    (n.remove = function (s) {
      return De(s) ? this.removeLabel(s) : oe(s) ? this.killTweensOf(s) : (pu(this, s), s === this._recent && (this._recent = this._last), Ji(this))
    }),
    (n.totalTime = function (s, a) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp && this._ts && (this._start = Le(Nn.time - (this._ts > 0 ? s / this._ts : (this.totalDuration() - s) / -this._ts))),
          u.prototype.totalTime.call(this, s, a),
          (this._forcing = 0),
          this)
        : this._tTime
    }),
    (n.addLabel = function (s, a) {
      return (this.labels[s] = sr(this, a)), this
    }),
    (n.removeLabel = function (s) {
      return delete this.labels[s], this
    }),
    (n.addPause = function (s, a, l) {
      var f = ye.delayedCall(0, a || Do, l)
      return (f.data = 'isPause'), (this._hasPause = 1), Dr(this, f, sr(this, s))
    }),
    (n.removePause = function (s) {
      var a = this._first
      for (s = sr(this, s); a; ) a._start === s && a.data === 'isPause' && Ci(a), (a = a._next)
    }),
    (n.killTweensOf = function (s, a, l) {
      for (var f = this.getTweensOf(s, l), h = f.length; h--; ) mi !== f[h] && f[h].kill(s, a)
      return this
    }),
    (n.getTweensOf = function (s, a) {
      for (var l = [], f = fr(s), h = this._first, p = ni(a), g; h; )
        h instanceof ye
          ? Ix(h._targets, f) &&
            (p ? (!mi || (h._initted && h._ts)) && h.globalTime(0) <= a && h.globalTime(h.totalDuration()) > a : !a || h.isActive()) &&
            l.push(h)
          : (g = h.getTweensOf(f, a)).length && l.push.apply(l, g),
          (h = h._next)
      return l
    }),
    (n.tweenTo = function (s, a) {
      a = a || {}
      var l = this,
        f = sr(l, s),
        h = a,
        p = h.startAt,
        g = h.onStart,
        y = h.onStartParams,
        x = h.immediateRender,
        v,
        T = ye.to(
          l,
          hr(
            {
              ease: a.ease || 'none',
              lazy: !1,
              immediateRender: !1,
              time: f,
              overwrite: 'auto',
              duration: a.duration || Math.abs((f - (p && 'time' in p ? p.time : l._time)) / l.timeScale()) || Bt,
              onStart: function () {
                if ((l.pause(), !v)) {
                  var E = a.duration || Math.abs((f - (p && 'time' in p ? p.time : l._time)) / l.timeScale())
                  T._dur !== E && $s(T, E, 0, 1).render(T._time, !0, !0), (v = 1)
                }
                g && g.apply(T, y || [])
              },
            },
            a
          )
        )
      return x ? T.render(0) : T
    }),
    (n.tweenFromTo = function (s, a, l) {
      return this.tweenTo(a, hr({ startAt: { time: sr(this, s) } }, l))
    }),
    (n.recent = function () {
      return this._recent
    }),
    (n.nextLabel = function (s) {
      return s === void 0 && (s = this._time), Ed(this, sr(this, s))
    }),
    (n.previousLabel = function (s) {
      return s === void 0 && (s = this._time), Ed(this, sr(this, s), 1)
    }),
    (n.currentLabel = function (s) {
      return arguments.length ? this.seek(s, !0) : this.previousLabel(this._time + Bt)
    }),
    (n.shiftChildren = function (s, a, l) {
      l === void 0 && (l = 0)
      for (var f = this._first, h = this.labels, p; f; ) f._start >= l && ((f._start += s), (f._end += s)), (f = f._next)
      if (a) for (p in h) h[p] >= l && (h[p] += s)
      return Ji(this)
    }),
    (n.invalidate = function (s) {
      var a = this._first
      for (this._lock = 0; a; ) a.invalidate(s), (a = a._next)
      return u.prototype.invalidate.call(this, s)
    }),
    (n.clear = function (s) {
      s === void 0 && (s = !0)
      for (var a = this._first, l; a; ) (l = a._next), this.remove(a), (a = l)
      return this._dp && (this._time = this._tTime = this._pTime = 0), s && (this.labels = {}), Ji(this)
    }),
    (n.totalDuration = function (s) {
      var a = 0,
        l = this,
        f = l._last,
        h = lr,
        p,
        g,
        y
      if (arguments.length) return l.timeScale((l._repeat < 0 ? l.duration() : l.totalDuration()) / (l.reversed() ? -s : s))
      if (l._dirty) {
        for (y = l.parent; f; )
          (p = f._prev),
            f._dirty && f.totalDuration(),
            (g = f._start),
            g > h && l._sort && f._ts && !l._lock ? ((l._lock = 1), (Dr(l, f, g - f._delay, 1)._lock = 0)) : (h = g),
            g < 0 &&
              f._ts &&
              ((a -= g),
              ((!y && !l._dp) || (y && y.smoothChildTiming)) && ((l._start += g / l._ts), (l._time -= g), (l._tTime -= g)),
              l.shiftChildren(-g, !1, -1 / 0),
              (h = 0)),
            f._end > a && f._ts && (a = f._end),
            (f = p)
        $s(l, l === jt && l._time > a ? l._time : a, 1, 1), (l._dirty = 0)
      }
      return l._tDur
    }),
    (e.updateRoot = function (s) {
      if ((jt._ts && (Mp(jt, su(s, jt)), (Pp = Nn.frame)), Nn.frame >= Td)) {
        Td += Hn.autoSleep || 120
        var a = jt._first
        if ((!a || !a._ts) && Hn.autoSleep && Nn._listeners.length < 2) {
          for (; a && !a._ts; ) a = a._next
          a || Nn.sleep()
        }
      }
    }),
    e
  )
})(Fo)
hr(un.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 })
var rb = function (e, n, i, s, a, l, f) {
    var h = new bn(this._pt, e, n, 0, 1, s_, null, a),
      p = 0,
      g = 0,
      y,
      x,
      v,
      T,
      b,
      E,
      k,
      z
    for (
      h.b = i,
        h.e = s,
        i += '',
        s += '',
        (k = ~s.indexOf('random(')) && (s = Io(s)),
        l && ((z = [i, s]), l(z, e, n), (i = z[0]), (s = z[1])),
        x = i.match(El) || [];
      (y = El.exec(s));

    )
      (T = y[0]),
        (b = s.substring(p, y.index)),
        v ? (v = (v + 1) % 5) : b.substr(-5) === 'rgba(' && (v = 1),
        T !== x[g++] &&
          ((E = parseFloat(x[g - 1]) || 0),
          (h._pt = {
            _next: h._pt,
            p: b || g === 1 ? b : ',',
            s: E,
            c: T.charAt(1) === '=' ? Fs(E, T) - E : parseFloat(T) - E,
            m: v && v < 4 ? Math.round : 0,
          }),
          (p = El.lastIndex))
    return (h.c = p < s.length ? s.substring(p, s.length) : ''), (h.fp = f), (Tp.test(s) || k) && (h.e = 0), (this._pt = h), h
  },
  If = function (e, n, i, s, a, l, f, h, p, g) {
    oe(s) && (s = s(a || 0, e, l))
    var y = e[n],
      x = i !== 'get' ? i : oe(y) ? (p ? e[n.indexOf('set') || !oe(e['get' + n.substr(3)]) ? n : 'get' + n.substr(3)](p) : e[n]()) : y,
      v = oe(y) ? (p ? ub : r_) : Ff,
      T
    if (
      (De(s) && (~s.indexOf('random(') && (s = Io(s)), s.charAt(1) === '=' && ((T = Fs(x, s) + (Xe(x) || 0)), (T || T === 0) && (s = T))),
      !g || x !== s || rf)
    )
      return !isNaN(x * s) && s !== ''
        ? ((T = new bn(this._pt, e, n, +x || 0, s - (x || 0), typeof y == 'boolean' ? fb : i_, 0, v)),
          p && (T.fp = p),
          f && T.modifier(f, this, e),
          (this._pt = T))
        : (!y && !(n in e) && Rf(n, s), rb.call(this, e, n, x, s, v, h || Hn.stringFilter, p))
  },
  ib = function (e, n, i, s, a) {
    if ((oe(e) && (e = So(e, a, n, i, s)), !Br(e) || (e.style && e.nodeType) || qe(e) || bp(e))) return De(e) ? So(e, a, n, i, s) : e
    var l = {},
      f
    for (f in e) l[f] = So(e[f], a, n, i, s)
    return l
  },
  t_ = function (e, n, i, s, a, l) {
    var f, h, p, g
    if (
      Bn[e] &&
      (f = new Bn[e]()).init(a, f.rawVars ? n[e] : ib(n[e], s, a, l, i), i, s, l) !== !1 &&
      ((i._pt = h = new bn(i._pt, a, e, 0, 1, f.render, f, 0, f.priority)), i !== Ds)
    )
      for (p = i._ptLookup[i._targets.indexOf(a)], g = f._props.length; g--; ) p[f._props[g]] = h
    return f
  },
  mi,
  rf,
  kf = function u(e, n, i) {
    var s = e.vars,
      a = s.ease,
      l = s.startAt,
      f = s.immediateRender,
      h = s.lazy,
      p = s.onUpdate,
      g = s.runBackwards,
      y = s.yoyoEase,
      x = s.keyframes,
      v = s.autoRevert,
      T = e._dur,
      b = e._startAt,
      E = e._targets,
      k = e.parent,
      z = k && k.data === 'nested' ? k.vars.targets : E,
      W = e._overwrite === 'auto' && !Af,
      P = e.timeline,
      R,
      I,
      M,
      H,
      U,
      $,
      J,
      X,
      at,
      nt,
      ht,
      mt,
      Q
    if (
      (P && (!x || !a) && (a = 'none'),
      (e._ease = Qi(a, Ys.ease)),
      (e._yEase = y ? Zp(Qi(y === !0 ? a : y, Ys.ease)) : 0),
      y && e._yoyo && !e._repeat && ((y = e._yEase), (e._yEase = e._ease), (e._ease = y)),
      (e._from = !P && !!s.runBackwards),
      !P || (x && !s.stagger))
    ) {
      if (
        ((X = E[0] ? Zi(E[0]).harness : 0),
        (mt = X && s[X.prop]),
        (R = iu(s, Mf)),
        b && (b._zTime < 0 && b.progress(1), n < 0 && g && f && !v ? b.render(-1, !0) : b.revert(g && T ? Ha : Lx), (b._lazy = 0)),
        l)
      ) {
        if (
          (Ci(
            (e._startAt = ye.set(
              E,
              hr(
                {
                  data: 'isStart',
                  overwrite: !1,
                  parent: k,
                  immediateRender: !0,
                  lazy: !b && wn(h),
                  startAt: null,
                  delay: 0,
                  onUpdate:
                    p &&
                    function () {
                      return Yn(e, 'onUpdate')
                    },
                  stagger: 0,
                },
                l
              )
            ))
          ),
          (e._startAt._dp = 0),
          (e._startAt._sat = e),
          n < 0 && (Ge || (!f && !v)) && e._startAt.revert(Ha),
          f && T && n <= 0 && i <= 0)
        ) {
          n && (e._zTime = n)
          return
        }
      } else if (g && T && !b) {
        if (
          (n && (f = !1),
          (M = hr({ overwrite: !1, data: 'isFromStart', lazy: f && !b && wn(h), immediateRender: f, stagger: 0, parent: k }, R)),
          mt && (M[X.prop] = mt),
          Ci((e._startAt = ye.set(E, M))),
          (e._startAt._dp = 0),
          (e._startAt._sat = e),
          n < 0 && (Ge ? e._startAt.revert(Ha) : e._startAt.render(-1, !0)),
          (e._zTime = n),
          !f)
        )
          u(e._startAt, Bt, Bt)
        else if (!n) return
      }
      for (e._pt = e._ptCache = 0, h = (T && wn(h)) || (h && !T), I = 0; I < E.length; I++) {
        if (
          ((U = E[I]),
          (J = U._gsap || Df(E)[I]._gsap),
          (e._ptLookup[I] = nt = {}),
          Jl[J.id] && bi.length && ru(),
          (ht = z === E ? I : z.indexOf(U)),
          X &&
            (at = new X()).init(U, mt || R, e, ht, z) !== !1 &&
            ((e._pt = H = new bn(e._pt, U, at.name, 0, 1, at.render, at, 0, at.priority)),
            at._props.forEach(function (lt) {
              nt[lt] = H
            }),
            at.priority && ($ = 1)),
          !X || mt)
        )
          for (M in R)
            Bn[M] && (at = t_(M, R, e, ht, U, z)) ? at.priority && ($ = 1) : (nt[M] = H = If.call(e, U, M, 'get', R[M], ht, z, 0, s.stringFilter))
        e._op && e._op[I] && e.kill(U, e._op[I]),
          W && e._pt && ((mi = e), jt.killTweensOf(U, nt, e.globalTime(n)), (Q = !e.parent), (mi = 0)),
          e._pt && h && (Jl[J.id] = 1)
      }
      $ && o_(e), e._onInit && e._onInit(e)
    }
    ;(e._onUpdate = p), (e._initted = (!e._op || e._pt) && !Q), x && n <= 0 && P.render(lr, !0, !0)
  },
  sb = function (e, n, i, s, a, l, f, h) {
    var p = ((e._pt && e._ptCache) || (e._ptCache = {}))[n],
      g,
      y,
      x,
      v
    if (!p)
      for (p = e._ptCache[n] = [], x = e._ptLookup, v = e._targets.length; v--; ) {
        if (((g = x[v][n]), g && g.d && g.d._pt)) for (g = g.d._pt; g && g.p !== n && g.fp !== n; ) g = g._next
        if (!g) return (rf = 1), (e.vars[n] = '+=0'), kf(e, f), (rf = 0), h ? Lo(n + ' not eligible for reset') : 1
        p.push(g)
      }
    for (v = p.length; v--; )
      (y = p[v]),
        (g = y._pt || y),
        (g.s = (s || s === 0) && !a ? s : g.s + (s || 0) + l * g.c),
        (g.c = i - g.s),
        y.e && (y.e = he(i) + Xe(y.e)),
        y.b && (y.b = g.s + Xe(y.b))
  },
  ob = function (e, n) {
    var i = e[0] ? Zi(e[0]).harness : 0,
      s = i && i.aliases,
      a,
      l,
      f,
      h
    if (!s) return n
    a = is({}, n)
    for (l in s) if (l in a) for (h = s[l].split(','), f = h.length; f--; ) a[h[f]] = a[l]
    return a
  },
  ab = function (e, n, i, s) {
    var a = n.ease || s || 'power1.inOut',
      l,
      f
    if (qe(n))
      (f = i[e] || (i[e] = [])),
        n.forEach(function (h, p) {
          return f.push({ t: (p / (n.length - 1)) * 100, v: h, e: a })
        })
    else for (l in n) (f = i[l] || (i[l] = [])), l === 'ease' || f.push({ t: parseFloat(e), v: n[l], e: a })
  },
  So = function (e, n, i, s, a) {
    return oe(e) ? e.call(n, i, s, a) : De(e) && ~e.indexOf('random(') ? Io(e) : e
  },
  e_ = Lf + 'repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert',
  n_ = {}
xn(e_ + ',id,stagger,delay,duration,paused,scrollTrigger', function (u) {
  return (n_[u] = 1)
})
var ye = (function (u) {
  wp(e, u)
  function e(i, s, a, l) {
    var f
    typeof s == 'number' && ((a.duration = s), (s = a), (a = null)), (f = u.call(this, l ? s : xo(s)) || this)
    var h = f.vars,
      p = h.duration,
      g = h.delay,
      y = h.immediateRender,
      x = h.stagger,
      v = h.overwrite,
      T = h.keyframes,
      b = h.defaults,
      E = h.scrollTrigger,
      k = h.yoyoEase,
      z = s.parent || jt,
      W = (qe(i) || bp(i) ? ni(i[0]) : 'length' in s) ? [i] : fr(i),
      P,
      R,
      I,
      M,
      H,
      U,
      $,
      J
    if (
      ((f._targets = W.length ? Df(W) : Lo('GSAP target ' + i + ' not found. https://gsap.com', !Hn.nullTargetWarn) || []),
      (f._ptLookup = []),
      (f._overwrite = v),
      T || x || Ra(p) || Ra(g))
    ) {
      if (
        ((s = f.vars),
        (P = f.timeline = new un({ data: 'nested', defaults: b || {}, targets: z && z.data === 'nested' ? z.vars.targets : W })),
        P.kill(),
        (P.parent = P._dp = Jr(f)),
        (P._start = 0),
        x || Ra(p) || Ra(g))
      ) {
        if (((M = W.length), ($ = x && Np(x)), Br(x))) for (H in x) ~e_.indexOf(H) && (J || (J = {}), (J[H] = x[H]))
        for (R = 0; R < M; R++)
          (I = iu(s, n_)),
            (I.stagger = 0),
            k && (I.yoyoEase = k),
            J && is(I, J),
            (U = W[R]),
            (I.duration = +So(p, Jr(f), R, U, W)),
            (I.delay = (+So(g, Jr(f), R, U, W) || 0) - f._delay),
            !x && M === 1 && I.delay && ((f._delay = g = I.delay), (f._start += g), (I.delay = 0)),
            P.to(U, I, $ ? $(R, U, W) : 0),
            (P._ease = Et.none)
        P.duration() ? (p = g = 0) : (f.timeline = 0)
      } else if (T) {
        xo(hr(P.vars.defaults, { ease: 'none' })), (P._ease = Qi(T.ease || s.ease || 'none'))
        var X = 0,
          at,
          nt,
          ht
        if (qe(T))
          T.forEach(function (mt) {
            return P.to(W, mt, '>')
          }),
            P.duration()
        else {
          I = {}
          for (H in T) H === 'ease' || H === 'easeEach' || ab(H, T[H], I, T.easeEach)
          for (H in I)
            for (
              at = I[H].sort(function (mt, Q) {
                return mt.t - Q.t
              }),
                X = 0,
                R = 0;
              R < at.length;
              R++
            )
              (nt = at[R]),
                (ht = { ease: nt.e, duration: ((nt.t - (R ? at[R - 1].t : 0)) / 100) * p }),
                (ht[H] = nt.v),
                P.to(W, ht, X),
                (X += ht.duration)
          P.duration() < p && P.to({}, { duration: p - P.duration() })
        }
      }
      p || f.duration((p = P.duration()))
    } else f.timeline = 0
    return (
      v === !0 && !Af && ((mi = Jr(f)), jt.killTweensOf(W), (mi = 0)),
      Dr(z, Jr(f), a),
      s.reversed && f.reverse(),
      s.paused && f.paused(!0),
      (y || (!p && !T && f._start === Le(z._time) && wn(y) && Wx(Jr(f)) && z.data !== 'nested')) &&
        ((f._tTime = -Bt), f.render(Math.max(0, -g) || 0)),
      E && Fp(Jr(f), E),
      f
    )
  }
  var n = e.prototype
  return (
    (n.render = function (s, a, l) {
      var f = this._time,
        h = this._tDur,
        p = this._dur,
        g = s < 0,
        y = s > h - Bt && !g ? h : s < Bt ? 0 : s,
        x,
        v,
        T,
        b,
        E,
        k,
        z,
        W,
        P
      if (!p) Nx(this, s, a, l)
      else if (y !== this._tTime || !s || l || (!this._initted && this._tTime) || (this._startAt && this._zTime < 0 !== g)) {
        if (((x = y), (W = this.timeline), this._repeat)) {
          if (((b = p + this._rDelay), this._repeat < -1 && g)) return this.totalTime(b * 100 + s, a, l)
          if (
            ((x = Le(y % b)),
            y === h ? ((T = this._repeat), (x = p)) : ((T = ~~(y / b)), T && T === Le(y / b) && ((x = p), T--), x > p && (x = p)),
            (k = this._yoyo && T & 1),
            k && ((P = this._yEase), (x = p - x)),
            (E = Hs(this._tTime, b)),
            x === f && !l && this._initted && T === E)
          )
            return (this._tTime = y), this
          T !== E &&
            (W && this._yEase && Jp(W, k),
            this.vars.repeatRefresh &&
              !k &&
              !this._lock &&
              this._time !== p &&
              this._initted &&
              ((this._lock = l = 1), (this.render(Le(b * T), !0).invalidate()._lock = 0)))
        }
        if (!this._initted) {
          if (zp(this, g ? s : x, l, a, y)) return (this._tTime = 0), this
          if (f !== this._time && !(l && this.vars.repeatRefresh && T !== E)) return this
          if (p !== this._dur) return this.render(s, a, l)
        }
        if (
          ((this._tTime = y),
          (this._time = x),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          (this.ratio = z = (P || this._ease)(x / p)),
          this._from && (this.ratio = z = 1 - z),
          x && !f && !a && !T && (Yn(this, 'onStart'), this._tTime !== y))
        )
          return this
        for (v = this._pt; v; ) v.r(z, v.d), (v = v._next)
        ;(W && W.render(s < 0 ? s : !x && k ? -Bt : W._dur * W._ease(x / this._dur), a, l)) || (this._startAt && (this._zTime = s)),
          this._onUpdate && !a && (g && Ql(this, s, a, l), Yn(this, 'onUpdate')),
          this._repeat && T !== E && this.vars.onRepeat && !a && this.parent && Yn(this, 'onRepeat'),
          (y === this._tDur || !y) &&
            this._tTime === y &&
            (g && !this._onUpdate && Ql(this, s, !0, !0),
            (s || !p) && ((y === this._tDur && this._ts > 0) || (!y && this._ts < 0)) && Ci(this, 1),
            !a &&
              !(g && !f) &&
              (y || f || k) &&
              (Yn(this, y === h ? 'onComplete' : 'onReverseComplete', !0), this._prom && !(y < h && this.timeScale() > 0) && this._prom()))
      }
      return this
    }),
    (n.targets = function () {
      return this._targets
    }),
    (n.invalidate = function (s) {
      return (
        (!s || !this.vars.runBackwards) && (this._startAt = 0),
        (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(s),
        u.prototype.invalidate.call(this, s)
      )
    }),
    (n.resetTo = function (s, a, l, f, h) {
      ko || Nn.wake(), this._ts || this.play()
      var p = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        g
      return (
        this._initted || kf(this, p),
        (g = this._ease(p / this._dur)),
        sb(this, s, a, l, f, g, p, h)
          ? this.resetTo(s, a, l, f, 1)
          : (gu(this, 0), this.parent || Ip(this._dp, this, '_first', '_last', this._dp._sort ? '_start' : 0), this.render(0))
      )
    }),
    (n.kill = function (s, a) {
      if ((a === void 0 && (a = 'all'), !s && (!a || a === 'all'))) return (this._lazy = this._pt = 0), this.parent ? go(this) : this
      if (this.timeline) {
        var l = this.timeline.totalDuration()
        return (
          this.timeline.killTweensOf(s, a, mi && mi.vars.overwrite !== !0)._first || go(this),
          this.parent && l !== this.timeline.totalDuration() && $s(this, (this._dur * this.timeline._tDur) / l, 0, 1),
          this
        )
      }
      var f = this._targets,
        h = s ? fr(s) : f,
        p = this._ptLookup,
        g = this._pt,
        y,
        x,
        v,
        T,
        b,
        E,
        k
      if ((!a || a === 'all') && Fx(f, h)) return a === 'all' && (this._pt = 0), go(this)
      for (
        y = this._op = this._op || [],
          a !== 'all' &&
            (De(a) &&
              ((b = {}),
              xn(a, function (z) {
                return (b[z] = 1)
              }),
              (a = b)),
            (a = ob(f, a))),
          k = f.length;
        k--;

      )
        if (~h.indexOf(f[k])) {
          ;(x = p[k]), a === 'all' ? ((y[k] = a), (T = x), (v = {})) : ((v = y[k] = y[k] || {}), (T = a))
          for (b in T) (E = x && x[b]), E && ((!('kill' in E.d) || E.d.kill(b) === !0) && pu(this, E, '_pt'), delete x[b]), v !== 'all' && (v[b] = 1)
        }
      return this._initted && !this._pt && g && go(this), this
    }),
    (e.to = function (s, a) {
      return new e(s, a, arguments[2])
    }),
    (e.from = function (s, a) {
      return bo(1, arguments)
    }),
    (e.delayedCall = function (s, a, l, f) {
      return new e(a, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: s,
        onComplete: a,
        onReverseComplete: a,
        onCompleteParams: l,
        onReverseCompleteParams: l,
        callbackScope: f,
      })
    }),
    (e.fromTo = function (s, a, l) {
      return bo(2, arguments)
    }),
    (e.set = function (s, a) {
      return (a.duration = 0), a.repeatDelay || (a.repeat = 0), new e(s, a)
    }),
    (e.killTweensOf = function (s, a, l) {
      return jt.killTweensOf(s, a, l)
    }),
    e
  )
})(Fo)
hr(ye.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 })
xn('staggerTo,staggerFrom,staggerFromTo', function (u) {
  ye[u] = function () {
    var e = new un(),
      n = tf.call(arguments, 0)
    return n.splice(u === 'staggerFromTo' ? 5 : 4, 0, 0), e[u].apply(e, n)
  }
})
var Ff = function (e, n, i) {
    return (e[n] = i)
  },
  r_ = function (e, n, i) {
    return e[n](i)
  },
  ub = function (e, n, i, s) {
    return e[n](s.fp, i)
  },
  lb = function (e, n, i) {
    return e.setAttribute(n, i)
  },
  zf = function (e, n) {
    return oe(e[n]) ? r_ : Of(e[n]) && e.setAttribute ? lb : Ff
  },
  i_ = function (e, n) {
    return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e6) / 1e6, n)
  },
  fb = function (e, n) {
    return n.set(n.t, n.p, !!(n.s + n.c * e), n)
  },
  s_ = function (e, n) {
    var i = n._pt,
      s = ''
    if (!e && n.b) s = n.b
    else if (e === 1 && n.e) s = n.e
    else {
      for (; i; ) (s = i.p + (i.m ? i.m(i.s + i.c * e) : Math.round((i.s + i.c * e) * 1e4) / 1e4) + s), (i = i._next)
      s += n.c
    }
    n.set(n.t, n.p, s, n)
  },
  Wf = function (e, n) {
    for (var i = n._pt; i; ) i.r(e, i.d), (i = i._next)
  },
  cb = function (e, n, i, s) {
    for (var a = this._pt, l; a; ) (l = a._next), a.p === s && a.modifier(e, n, i), (a = l)
  },
  hb = function (e) {
    for (var n = this._pt, i, s; n; ) (s = n._next), (n.p === e && !n.op) || n.op === e ? pu(this, n, '_pt') : n.dep || (i = 1), (n = s)
    return !i
  },
  db = function (e, n, i, s) {
    s.mSet(e, n, s.m.call(s.tween, i, s.mt), s)
  },
  o_ = function (e) {
    for (var n = e._pt, i, s, a, l; n; ) {
      for (i = n._next, s = a; s && s.pr > n.pr; ) s = s._next
      ;(n._prev = s ? s._prev : l) ? (n._prev._next = n) : (a = n), (n._next = s) ? (s._prev = n) : (l = n), (n = i)
    }
    e._pt = a
  },
  bn = (function () {
    function u(n, i, s, a, l, f, h, p, g) {
      ;(this.t = i),
        (this.s = a),
        (this.c = l),
        (this.p = s),
        (this.r = f || i_),
        (this.d = h || this),
        (this.set = p || Ff),
        (this.pr = g || 0),
        (this._next = n),
        n && (n._prev = this)
    }
    var e = u.prototype
    return (
      (e.modifier = function (i, s, a) {
        ;(this.mSet = this.mSet || this.set), (this.set = db), (this.m = i), (this.mt = a), (this.tween = s)
      }),
      u
    )
  })()
xn(
  Lf +
    'parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger',
  function (u) {
    return (Mf[u] = 1)
  }
)
$n.TweenMax = $n.TweenLite = ye
$n.TimelineLite = $n.TimelineMax = un
jt = new un({ sortChildren: !1, defaults: Ys, autoRemoveChildren: !0, id: 'root', smoothChildTiming: !0 })
Hn.stringFilter = Kp
var ji = [],
  Xa = {},
  pb = [],
  Rd = 0,
  _b = 0,
  Dl = function (e) {
    return (Xa[e] || pb).map(function (n) {
      return n()
    })
  },
  sf = function () {
    var e = Date.now(),
      n = []
    e - Rd > 2 &&
      (Dl('matchMediaInit'),
      ji.forEach(function (i) {
        var s = i.queries,
          a = i.conditions,
          l,
          f,
          h,
          p
        for (f in s) (l = or.matchMedia(s[f]).matches), l && (h = 1), l !== a[f] && ((a[f] = l), (p = 1))
        p && (i.revert(), h && n.push(i))
      }),
      Dl('matchMediaRevert'),
      n.forEach(function (i) {
        return i.onMatch(i, function (s) {
          return i.add(null, s)
        })
      }),
      (Rd = e),
      Dl('matchMedia'))
  },
  a_ = (function () {
    function u(n, i) {
      ;(this.selector = i && ef(i)), (this.data = []), (this._r = []), (this.isReverted = !1), (this.id = _b++), n && this.add(n)
    }
    var e = u.prototype
    return (
      (e.add = function (i, s, a) {
        oe(i) && ((a = s), (s = i), (i = oe))
        var l = this,
          f = function () {
            var p = se,
              g = l.selector,
              y
            return (
              p && p !== l && p.data.push(l),
              a && (l.selector = ef(a)),
              (se = l),
              (y = s.apply(l, arguments)),
              oe(y) && l._r.push(y),
              (se = p),
              (l.selector = g),
              (l.isReverted = !1),
              y
            )
          }
        return (
          (l.last = f),
          i === oe
            ? f(l, function (h) {
                return l.add(null, h)
              })
            : i
            ? (l[i] = f)
            : f
        )
      }),
      (e.ignore = function (i) {
        var s = se
        ;(se = null), i(this), (se = s)
      }),
      (e.getTweens = function () {
        var i = []
        return (
          this.data.forEach(function (s) {
            return s instanceof u ? i.push.apply(i, s.getTweens()) : s instanceof ye && !(s.parent && s.parent.data === 'nested') && i.push(s)
          }),
          i
        )
      }),
      (e.clear = function () {
        this._r.length = this.data.length = 0
      }),
      (e.kill = function (i, s) {
        var a = this
        if (
          (i
            ? (function () {
                for (var f = a.getTweens(), h = a.data.length, p; h--; )
                  (p = a.data[h]),
                    p.data === 'isFlip' &&
                      (p.revert(),
                      p.getChildren(!0, !0, !1).forEach(function (g) {
                        return f.splice(f.indexOf(g), 1)
                      }))
                for (
                  f
                    .map(function (g) {
                      return { g: g._dur || g._delay || (g._sat && !g._sat.vars.immediateRender) ? g.globalTime(0) : -1 / 0, t: g }
                    })
                    .sort(function (g, y) {
                      return y.g - g.g || -1 / 0
                    })
                    .forEach(function (g) {
                      return g.t.revert(i)
                    }),
                    h = a.data.length;
                  h--;

                )
                  (p = a.data[h]),
                    p instanceof un
                      ? p.data !== 'nested' && (p.scrollTrigger && p.scrollTrigger.revert(), p.kill())
                      : !(p instanceof ye) && p.revert && p.revert(i)
                a._r.forEach(function (g) {
                  return g(i, a)
                }),
                  (a.isReverted = !0)
              })()
            : this.data.forEach(function (f) {
                return f.kill && f.kill()
              }),
          this.clear(),
          s)
        )
          for (var l = ji.length; l--; ) ji[l].id === this.id && ji.splice(l, 1)
      }),
      (e.revert = function (i) {
        this.kill(i || {})
      }),
      u
    )
  })(),
  gb = (function () {
    function u(n) {
      ;(this.contexts = []), (this.scope = n)
    }
    var e = u.prototype
    return (
      (e.add = function (i, s, a) {
        Br(i) || (i = { matches: i })
        var l = new a_(0, a || this.scope),
          f = (l.conditions = {}),
          h,
          p,
          g
        se && !l.selector && (l.selector = se.selector), this.contexts.push(l), (s = l.add('onMatch', s)), (l.queries = i)
        for (p in i)
          p === 'all'
            ? (g = 1)
            : ((h = or.matchMedia(i[p])),
              h &&
                (ji.indexOf(l) < 0 && ji.push(l),
                (f[p] = h.matches) && (g = 1),
                h.addListener ? h.addListener(sf) : h.addEventListener('change', sf)))
        return (
          g &&
            s(l, function (y) {
              return l.add(null, y)
            }),
          this
        )
      }),
      (e.revert = function (i) {
        this.kill(i || {})
      }),
      (e.kill = function (i) {
        this.contexts.forEach(function (s) {
          return s.kill(i, !0)
        })
      }),
      u
    )
  })(),
  ou = {
    registerPlugin: function () {
      for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++) n[i] = arguments[i]
      n.forEach(function (s) {
        return Gp(s)
      })
    },
    timeline: function (e) {
      return new un(e)
    },
    getTweensOf: function (e, n) {
      return jt.getTweensOf(e, n)
    },
    getProperty: function (e, n, i, s) {
      De(e) && (e = fr(e)[0])
      var a = Zi(e || {}).get,
        l = i ? Dp : Lp
      return (
        i === 'native' && (i = ''),
        e &&
          (n
            ? l(((Bn[n] && Bn[n].get) || a)(e, n, i, s))
            : function (f, h, p) {
                return l(((Bn[f] && Bn[f].get) || a)(e, f, h, p))
              })
      )
    },
    quickSetter: function (e, n, i) {
      if (((e = fr(e)), e.length > 1)) {
        var s = e.map(function (g) {
            return Tn.quickSetter(g, n, i)
          }),
          a = s.length
        return function (g) {
          for (var y = a; y--; ) s[y](g)
        }
      }
      e = e[0] || {}
      var l = Bn[n],
        f = Zi(e),
        h = (f.harness && (f.harness.aliases || {})[n]) || n,
        p = l
          ? function (g) {
              var y = new l()
              ;(Ds._pt = 0), y.init(e, i ? g + i : g, Ds, 0, [e]), y.render(1, y), Ds._pt && Wf(1, Ds)
            }
          : f.set(e, h)
      return l
        ? p
        : function (g) {
            return p(e, h, i ? g + i : g, f, 1)
          }
    },
    quickTo: function (e, n, i) {
      var s,
        a = Tn.to(e, is(((s = {}), (s[n] = '+=0.1'), (s.paused = !0), s), i || {})),
        l = function (h, p, g) {
          return a.resetTo(n, h, p, g)
        }
      return (l.tween = a), l
    },
    isTweening: function (e) {
      return jt.getTweensOf(e, !0).length > 0
    },
    defaults: function (e) {
      return e && e.ease && (e.ease = Qi(e.ease, Ys.ease)), Cd(Ys, e || {})
    },
    config: function (e) {
      return Cd(Hn, e || {})
    },
    registerEffect: function (e) {
      var n = e.name,
        i = e.effect,
        s = e.plugins,
        a = e.defaults,
        l = e.extendTimeline
      ;(s || '').split(',').forEach(function (f) {
        return f && !Bn[f] && !$n[f] && Lo(n + ' effect requires ' + f + ' plugin.')
      }),
        (Pl[n] = function (f, h, p) {
          return i(fr(f), hr(h || {}, a), p)
        }),
        l &&
          (un.prototype[n] = function (f, h, p) {
            return this.add(Pl[n](f, Br(h) ? h : (p = h) && {}, this), p)
          })
    },
    registerEase: function (e, n) {
      Et[e] = Qi(n)
    },
    parseEase: function (e, n) {
      return arguments.length ? Qi(e, n) : Et
    },
    getById: function (e) {
      return jt.getById(e)
    },
    exportRoot: function (e, n) {
      e === void 0 && (e = {})
      var i = new un(e),
        s,
        a
      for (i.smoothChildTiming = wn(e.smoothChildTiming), jt.remove(i), i._dp = 0, i._time = i._tTime = jt._time, s = jt._first; s; )
        (a = s._next), (n || !(!s._dur && s instanceof ye && s.vars.onComplete === s._targets[0])) && Dr(i, s, s._start - s._delay), (s = a)
      return Dr(jt, i, 0), i
    },
    context: function (e, n) {
      return e ? new a_(e, n) : se
    },
    matchMedia: function (e) {
      return new gb(e)
    },
    matchMediaRefresh: function () {
      return (
        ji.forEach(function (e) {
          var n = e.conditions,
            i,
            s
          for (s in n) n[s] && ((n[s] = !1), (i = 1))
          i && e.revert()
        }) || sf()
      )
    },
    addEventListener: function (e, n) {
      var i = Xa[e] || (Xa[e] = [])
      ~i.indexOf(n) || i.push(n)
    },
    removeEventListener: function (e, n) {
      var i = Xa[e],
        s = i && i.indexOf(n)
      s >= 0 && i.splice(s, 1)
    },
    utils: {
      wrap: Vx,
      wrapYoyo: Kx,
      distribute: Np,
      random: Yp,
      snap: Up,
      normalize: qx,
      getUnit: Xe,
      clamp: Hx,
      splitColor: qp,
      toArray: fr,
      selector: ef,
      mapRange: $p,
      pipe: Xx,
      unitize: Gx,
      interpolate: Zx,
      shuffle: Bp,
    },
    install: Op,
    effects: Pl,
    ticker: Nn,
    updateRoot: un.updateRoot,
    plugins: Bn,
    globalTimeline: jt,
    core: {
      PropTween: bn,
      globals: Ep,
      Tween: ye,
      Timeline: un,
      Animation: Fo,
      getCache: Zi,
      _removeLinkedListItem: pu,
      reverting: function () {
        return Ge
      },
      context: function (e) {
        return e && se && (se.data.push(e), (e._ctx = se)), se
      },
      suppressOverwrites: function (e) {
        return (Af = e)
      },
    },
  }
xn('to,from,fromTo,delayedCall,set,killTweensOf', function (u) {
  return (ou[u] = ye[u])
})
Nn.add(un.updateRoot)
Ds = ou.to({}, { duration: 0 })
var mb = function (e, n) {
    for (var i = e._pt; i && i.p !== n && i.op !== n && i.fp !== n; ) i = i._next
    return i
  },
  vb = function (e, n) {
    var i = e._targets,
      s,
      a,
      l
    for (s in n)
      for (a = i.length; a--; ) (l = e._ptLookup[a][s]), l && (l = l.d) && (l._pt && (l = mb(l, s)), l && l.modifier && l.modifier(n[s], e, i[a], s))
  },
  Il = function (e, n) {
    return {
      name: e,
      rawVars: 1,
      init: function (s, a, l) {
        l._onInit = function (f) {
          var h, p
          if (
            (De(a) &&
              ((h = {}),
              xn(a, function (g) {
                return (h[g] = 1)
              }),
              (a = h)),
            n)
          ) {
            h = {}
            for (p in a) h[p] = n(a[p])
            a = h
          }
          vb(f, a)
        }
      },
    }
  },
  Tn =
    ou.registerPlugin(
      {
        name: 'attr',
        init: function (e, n, i, s, a) {
          var l, f, h
          this.tween = i
          for (l in n)
            (h = e.getAttribute(l) || ''),
              (f = this.add(e, 'setAttribute', (h || 0) + '', n[l], s, a, 0, 0, l)),
              (f.op = l),
              (f.b = h),
              this._props.push(l)
        },
        render: function (e, n) {
          for (var i = n._pt; i; ) Ge ? i.set(i.t, i.p, i.b, i) : i.r(e, i.d), (i = i._next)
        },
      },
      {
        name: 'endArray',
        init: function (e, n) {
          for (var i = n.length; i--; ) this.add(e, i, e[i] || 0, n[i], 0, 0, 0, 0, 0, 1)
        },
      },
      Il('roundProps', nf),
      Il('modifiers'),
      Il('snap', Up)
    ) || ou
ye.version = un.version = Tn.version = '3.12.3'
Ap = 1
Ef() && Xs()
Et.Power0
Et.Power1
Et.Power2
Et.Power3
Et.Power4
Et.Linear
Et.Quad
Et.Cubic
Et.Quart
Et.Quint
Et.Strong
Et.Elastic
Et.Back
Et.SteppedEase
Et.Bounce
Et.Sine
Et.Expo
Et.Circ
/*!
 * CSSPlugin 3.12.3
 * https://gsap.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var Md,
  vi,
  zs,
  Bf,
  Vi,
  Ld,
  Nf,
  yb = function () {
    return typeof window < 'u'
  },
  ri = {},
  Hi = 180 / Math.PI,
  Ws = Math.PI / 180,
  Os = Math.atan2,
  Dd = 1e8,
  Uf = /([A-Z])/g,
  wb = /(left|right|width|margin|padding|x)/i,
  xb = /[\s,\(]\S/,
  kr = { autoAlpha: 'opacity,visibility', scale: 'scaleX,scaleY', alpha: 'opacity' },
  of = function (e, n) {
    return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u, n)
  },
  bb = function (e, n) {
    return n.set(n.t, n.p, e === 1 ? n.e : Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u, n)
  },
  Sb = function (e, n) {
    return n.set(n.t, n.p, e ? Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u : n.b, n)
  },
  Tb = function (e, n) {
    var i = n.s + n.c * e
    n.set(n.t, n.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + n.u, n)
  },
  u_ = function (e, n) {
    return n.set(n.t, n.p, e ? n.e : n.b, n)
  },
  l_ = function (e, n) {
    return n.set(n.t, n.p, e !== 1 ? n.b : n.e, n)
  },
  Cb = function (e, n, i) {
    return (e.style[n] = i)
  },
  Ab = function (e, n, i) {
    return e.style.setProperty(n, i)
  },
  Ob = function (e, n, i) {
    return (e._gsap[n] = i)
  },
  Eb = function (e, n, i) {
    return (e._gsap.scaleX = e._gsap.scaleY = i)
  },
  Pb = function (e, n, i, s, a) {
    var l = e._gsap
    ;(l.scaleX = l.scaleY = i), l.renderTransform(a, l)
  },
  Rb = function (e, n, i, s, a) {
    var l = e._gsap
    ;(l[n] = i), l.renderTransform(a, l)
  },
  te = 'transform',
  Sn = te + 'Origin',
  Mb = function u(e, n) {
    var i = this,
      s = this.target,
      a = s.style,
      l = s._gsap
    if (e in ri && a) {
      if (((this.tfm = this.tfm || {}), e !== 'transform'))
        (e = kr[e] || e),
          ~e.indexOf(',')
            ? e.split(',').forEach(function (f) {
                return (i.tfm[f] = Qr(s, f))
              })
            : (this.tfm[e] = l.x ? l[e] : Qr(s, e)),
          e === Sn && (this.tfm.zOrigin = l.zOrigin)
      else
        return kr.transform.split(',').forEach(function (f) {
          return u.call(i, f, n)
        })
      if (this.props.indexOf(te) >= 0) return
      l.svg && ((this.svgo = s.getAttribute('data-svg-origin')), this.props.push(Sn, n, '')), (e = te)
    }
    ;(a || n) && this.props.push(e, n, a[e])
  },
  f_ = function (e) {
    e.translate && (e.removeProperty('translate'), e.removeProperty('scale'), e.removeProperty('rotate'))
  },
  Lb = function () {
    var e = this.props,
      n = this.target,
      i = n.style,
      s = n._gsap,
      a,
      l
    for (a = 0; a < e.length; a += 3)
      e[a + 1]
        ? (n[e[a]] = e[a + 2])
        : e[a + 2]
        ? (i[e[a]] = e[a + 2])
        : i.removeProperty(e[a].substr(0, 2) === '--' ? e[a] : e[a].replace(Uf, '-$1').toLowerCase())
    if (this.tfm) {
      for (l in this.tfm) s[l] = this.tfm[l]
      s.svg && (s.renderTransform(), n.setAttribute('data-svg-origin', this.svgo || '')),
        (a = Nf()),
        (!a || !a.isStart) &&
          !i[te] &&
          (f_(i), s.zOrigin && i[Sn] && ((i[Sn] += ' ' + s.zOrigin + 'px'), (s.zOrigin = 0), s.renderTransform()), (s.uncache = 1))
    }
  },
  c_ = function (e, n) {
    var i = { target: e, props: [], revert: Lb, save: Mb }
    return (
      e._gsap || Tn.core.getCache(e),
      n &&
        n.split(',').forEach(function (s) {
          return i.save(s)
        }),
      i
    )
  },
  h_,
  af = function (e, n) {
    var i = vi.createElementNS ? vi.createElementNS((n || 'http://www.w3.org/1999/xhtml').replace(/^https/, 'http'), e) : vi.createElement(e)
    return i && i.style ? i : vi.createElement(e)
  },
  zr = function u(e, n, i) {
    var s = getComputedStyle(e)
    return s[n] || s.getPropertyValue(n.replace(Uf, '-$1').toLowerCase()) || s.getPropertyValue(n) || (!i && u(e, Gs(n) || n, 1)) || ''
  },
  Id = 'O,Moz,ms,Ms,Webkit'.split(','),
  Gs = function (e, n, i) {
    var s = n || Vi,
      a = s.style,
      l = 5
    if (e in a && !i) return e
    for (e = e.charAt(0).toUpperCase() + e.substr(1); l-- && !(Id[l] + e in a); );
    return l < 0 ? null : (l === 3 ? 'ms' : l >= 0 ? Id[l] : '') + e
  },
  uf = function () {
    yb() &&
      window.document &&
      ((Md = window),
      (vi = Md.document),
      (zs = vi.documentElement),
      (Vi = af('div') || { style: {} }),
      af('div'),
      (te = Gs(te)),
      (Sn = te + 'Origin'),
      (Vi.style.cssText = 'border-width:0;line-height:0;position:absolute;padding:0'),
      (h_ = !!Gs('perspective')),
      (Nf = Tn.core.reverting),
      (Bf = 1))
  },
  kl = function u(e) {
    var n = af('svg', (this.ownerSVGElement && this.ownerSVGElement.getAttribute('xmlns')) || 'http://www.w3.org/2000/svg'),
      i = this.parentNode,
      s = this.nextSibling,
      a = this.style.cssText,
      l
    if ((zs.appendChild(n), n.appendChild(this), (this.style.display = 'block'), e))
      try {
        ;(l = this.getBBox()), (this._gsapBBox = this.getBBox), (this.getBBox = u)
      } catch {}
    else this._gsapBBox && (l = this._gsapBBox())
    return i && (s ? i.insertBefore(this, s) : i.appendChild(this)), zs.removeChild(n), (this.style.cssText = a), l
  },
  kd = function (e, n) {
    for (var i = n.length; i--; ) if (e.hasAttribute(n[i])) return e.getAttribute(n[i])
  },
  d_ = function (e) {
    var n
    try {
      n = e.getBBox()
    } catch {
      n = kl.call(e, !0)
    }
    return (
      (n && (n.width || n.height)) || e.getBBox === kl || (n = kl.call(e, !0)),
      n && !n.width && !n.x && !n.y ? { x: +kd(e, ['x', 'cx', 'x1']) || 0, y: +kd(e, ['y', 'cy', 'y1']) || 0, width: 0, height: 0 } : n
    )
  },
  p_ = function (e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && d_(e))
  },
  ss = function (e, n) {
    if (n) {
      var i = e.style,
        s
      n in ri && n !== Sn && (n = te),
        i.removeProperty
          ? ((s = n.substr(0, 2)),
            (s === 'ms' || n.substr(0, 6) === 'webkit') && (n = '-' + n),
            i.removeProperty(s === '--' ? n : n.replace(Uf, '-$1').toLowerCase()))
          : i.removeAttribute(n)
    }
  },
  yi = function (e, n, i, s, a, l) {
    var f = new bn(e._pt, n, i, 0, 1, l ? l_ : u_)
    return (e._pt = f), (f.b = s), (f.e = a), e._props.push(i), f
  },
  Fd = { deg: 1, rad: 1, turn: 1 },
  Db = { grid: 1, flex: 1 },
  Ai = function u(e, n, i, s) {
    var a = parseFloat(i) || 0,
      l = (i + '').trim().substr((a + '').length) || 'px',
      f = Vi.style,
      h = wb.test(n),
      p = e.tagName.toLowerCase() === 'svg',
      g = (p ? 'client' : 'offset') + (h ? 'Width' : 'Height'),
      y = 100,
      x = s === 'px',
      v = s === '%',
      T,
      b,
      E,
      k
    if (s === l || !a || Fd[s] || Fd[l]) return a
    if ((l !== 'px' && !x && (a = u(e, n, i, 'px')), (k = e.getCTM && p_(e)), (v || l === '%') && (ri[n] || ~n.indexOf('adius'))))
      return (T = k ? e.getBBox()[h ? 'width' : 'height'] : e[g]), he(v ? (a / T) * y : (a / 100) * T)
    if (
      ((f[h ? 'width' : 'height'] = y + (x ? l : s)),
      (b = ~n.indexOf('adius') || (s === 'em' && e.appendChild && !p) ? e : e.parentNode),
      k && (b = (e.ownerSVGElement || {}).parentNode),
      (!b || b === vi || !b.appendChild) && (b = vi.body),
      (E = b._gsap),
      E && v && E.width && h && E.time === Nn.time && !E.uncache)
    )
      return he((a / E.width) * y)
    if (v && (n === 'height' || n === 'width')) {
      var z = e.style[n]
      ;(e.style[n] = y + s), (T = e[g]), z ? (e.style[n] = z) : ss(e, n)
    } else
      (v || l === '%') && !Db[zr(b, 'display')] && (f.position = zr(e, 'position')),
        b === e && (f.position = 'static'),
        b.appendChild(Vi),
        (T = Vi[g]),
        b.removeChild(Vi),
        (f.position = 'absolute')
    return h && v && ((E = Zi(b)), (E.time = Nn.time), (E.width = b[g])), he(x ? (T * a) / y : T && a ? (y / T) * a : 0)
  },
  Qr = function (e, n, i, s) {
    var a
    return (
      Bf || uf(),
      n in kr && n !== 'transform' && ((n = kr[n]), ~n.indexOf(',') && (n = n.split(',')[0])),
      ri[n] && n !== 'transform'
        ? ((a = Wo(e, s)), (a = n !== 'transformOrigin' ? a[n] : a.svg ? a.origin : uu(zr(e, Sn)) + ' ' + a.zOrigin + 'px'))
        : ((a = e.style[n]),
          (!a || a === 'auto' || s || ~(a + '').indexOf('calc(')) &&
            (a = (au[n] && au[n](e, n, i)) || zr(e, n) || Rp(e, n) || (n === 'opacity' ? 1 : 0))),
      i && !~(a + '').trim().indexOf(' ') ? Ai(e, n, a, i) + i : a
    )
  },
  Ib = function (e, n, i, s) {
    if (!i || i === 'none') {
      var a = Gs(n, e, 1),
        l = a && zr(e, a, 1)
      l && l !== i ? ((n = a), (i = l)) : n === 'borderColor' && (i = zr(e, 'borderTopColor'))
    }
    var f = new bn(this._pt, e.style, n, 0, 1, s_),
      h = 0,
      p = 0,
      g,
      y,
      x,
      v,
      T,
      b,
      E,
      k,
      z,
      W,
      P,
      R
    if (
      ((f.b = i),
      (f.e = s),
      (i += ''),
      (s += ''),
      s === 'auto' && ((b = e.style[n]), (e.style[n] = s), (s = zr(e, n) || s), b ? (e.style[n] = b) : ss(e, n)),
      (g = [i, s]),
      Kp(g),
      (i = g[0]),
      (s = g[1]),
      (x = i.match(Ls) || []),
      (R = s.match(Ls) || []),
      R.length)
    ) {
      for (; (y = Ls.exec(s)); )
        (E = y[0]),
          (z = s.substring(h, y.index)),
          T ? (T = (T + 1) % 5) : (z.substr(-5) === 'rgba(' || z.substr(-5) === 'hsla(') && (T = 1),
          E !== (b = x[p++] || '') &&
            ((v = parseFloat(b) || 0),
            (P = b.substr((v + '').length)),
            E.charAt(1) === '=' && (E = Fs(v, E) + P),
            (k = parseFloat(E)),
            (W = E.substr((k + '').length)),
            (h = Ls.lastIndex - W.length),
            W || ((W = W || Hn.units[n] || P), h === s.length && ((s += W), (f.e += W))),
            P !== W && (v = Ai(e, n, b, W) || 0),
            (f._pt = { _next: f._pt, p: z || p === 1 ? z : ',', s: v, c: k - v, m: (T && T < 4) || n === 'zIndex' ? Math.round : 0 }))
      f.c = h < s.length ? s.substring(h, s.length) : ''
    } else f.r = n === 'display' && s === 'none' ? l_ : u_
    return Tp.test(s) && (f.e = 0), (this._pt = f), f
  },
  zd = { top: '0%', bottom: '100%', left: '0%', right: '100%', center: '50%' },
  kb = function (e) {
    var n = e.split(' '),
      i = n[0],
      s = n[1] || '50%'
    return (
      (i === 'top' || i === 'bottom' || s === 'left' || s === 'right') && ((e = i), (i = s), (s = e)),
      (n[0] = zd[i] || i),
      (n[1] = zd[s] || s),
      n.join(' ')
    )
  },
  Fb = function (e, n) {
    if (n.tween && n.tween._time === n.tween._dur) {
      var i = n.t,
        s = i.style,
        a = n.u,
        l = i._gsap,
        f,
        h,
        p
      if (a === 'all' || a === !0) (s.cssText = ''), (h = 1)
      else for (a = a.split(','), p = a.length; --p > -1; ) (f = a[p]), ri[f] && ((h = 1), (f = f === 'transformOrigin' ? Sn : te)), ss(i, f)
      h && (ss(i, te), l && (l.svg && i.removeAttribute('transform'), Wo(i, 1), (l.uncache = 1), f_(s)))
    }
  },
  au = {
    clearProps: function (e, n, i, s, a) {
      if (a.data !== 'isFromStart') {
        var l = (e._pt = new bn(e._pt, n, i, 0, 0, Fb))
        return (l.u = s), (l.pr = -10), (l.tween = a), e._props.push(i), 1
      }
    },
  },
  zo = [1, 0, 0, 1, 0, 0],
  __ = {},
  g_ = function (e) {
    return e === 'matrix(1, 0, 0, 1, 0, 0)' || e === 'none' || !e
  },
  Wd = function (e) {
    var n = zr(e, te)
    return g_(n) ? zo : n.substr(7).match(Sp).map(he)
  },
  Yf = function (e, n) {
    var i = e._gsap || Zi(e),
      s = e.style,
      a = Wd(e),
      l,
      f,
      h,
      p
    return i.svg && e.getAttribute('transform')
      ? ((h = e.transform.baseVal.consolidate().matrix), (a = [h.a, h.b, h.c, h.d, h.e, h.f]), a.join(',') === '1,0,0,1,0,0' ? zo : a)
      : (a === zo &&
          !e.offsetParent &&
          e !== zs &&
          !i.svg &&
          ((h = s.display),
          (s.display = 'block'),
          (l = e.parentNode),
          (!l || !e.offsetParent) && ((p = 1), (f = e.nextElementSibling), zs.appendChild(e)),
          (a = Wd(e)),
          h ? (s.display = h) : ss(e, 'display'),
          p && (f ? l.insertBefore(e, f) : l ? l.appendChild(e) : zs.removeChild(e))),
        n && a.length > 6 ? [a[0], a[1], a[4], a[5], a[12], a[13]] : a)
  },
  lf = function (e, n, i, s, a, l) {
    var f = e._gsap,
      h = a || Yf(e, !0),
      p = f.xOrigin || 0,
      g = f.yOrigin || 0,
      y = f.xOffset || 0,
      x = f.yOffset || 0,
      v = h[0],
      T = h[1],
      b = h[2],
      E = h[3],
      k = h[4],
      z = h[5],
      W = n.split(' '),
      P = parseFloat(W[0]) || 0,
      R = parseFloat(W[1]) || 0,
      I,
      M,
      H,
      U
    i
      ? h !== zo &&
        (M = v * E - T * b) &&
        ((H = P * (E / M) + R * (-b / M) + (b * z - E * k) / M), (U = P * (-T / M) + R * (v / M) - (v * z - T * k) / M), (P = H), (R = U))
      : ((I = d_(e)),
        (P = I.x + (~W[0].indexOf('%') ? (P / 100) * I.width : P)),
        (R = I.y + (~(W[1] || W[0]).indexOf('%') ? (R / 100) * I.height : R)),
        !('xOrigin' in f) && (P || R) && ((P -= I.x), (R -= I.y))),
      s || (s !== !1 && f.smooth)
        ? ((k = P - p), (z = R - g), (f.xOffset = y + (k * v + z * b) - k), (f.yOffset = x + (k * T + z * E) - z))
        : (f.xOffset = f.yOffset = 0),
      (f.xOrigin = P),
      (f.yOrigin = R),
      (f.smooth = !!s),
      (f.origin = n),
      (f.originIsAbsolute = !!i),
      (e.style[Sn] = '0px 0px'),
      l && (yi(l, f, 'xOrigin', p, P), yi(l, f, 'yOrigin', g, R), yi(l, f, 'xOffset', y, f.xOffset), yi(l, f, 'yOffset', x, f.yOffset)),
      e.setAttribute('data-svg-origin', P + ' ' + R)
  },
  Wo = function (e, n) {
    var i = e._gsap || new jp(e)
    if ('x' in i && !n && !i.uncache) return i
    var s = e.style,
      a = i.scaleX < 0,
      l = 'px',
      f = 'deg',
      h = getComputedStyle(e),
      p = zr(e, Sn) || '0',
      g,
      y,
      x,
      v,
      T,
      b,
      E,
      k,
      z,
      W,
      P,
      R,
      I,
      M,
      H,
      U,
      $,
      J,
      X,
      at,
      nt,
      ht,
      mt,
      Q,
      lt,
      Ft,
      O,
      xt,
      Ie,
      Cn,
      Gt,
      qt
    return (
      (g = y = x = b = E = k = z = W = P = 0),
      (v = T = 1),
      (i.svg = !!(e.getCTM && p_(e))),
      h.translate &&
        ((h.translate !== 'none' || h.scale !== 'none' || h.rotate !== 'none') &&
          (s[te] =
            (h.translate !== 'none' ? 'translate3d(' + (h.translate + ' 0 0').split(' ').slice(0, 3).join(', ') + ') ' : '') +
            (h.rotate !== 'none' ? 'rotate(' + h.rotate + ') ' : '') +
            (h.scale !== 'none' ? 'scale(' + h.scale.split(' ').join(',') + ') ' : '') +
            (h[te] !== 'none' ? h[te] : '')),
        (s.scale = s.rotate = s.translate = 'none')),
      (M = Yf(e, i.svg)),
      i.svg &&
        (i.uncache
          ? ((lt = e.getBBox()), (p = i.xOrigin - lt.x + 'px ' + (i.yOrigin - lt.y) + 'px'), (Q = ''))
          : (Q = !n && e.getAttribute('data-svg-origin')),
        lf(e, Q || p, !!Q || i.originIsAbsolute, i.smooth !== !1, M)),
      (R = i.xOrigin || 0),
      (I = i.yOrigin || 0),
      M !== zo &&
        ((J = M[0]),
        (X = M[1]),
        (at = M[2]),
        (nt = M[3]),
        (g = ht = M[4]),
        (y = mt = M[5]),
        M.length === 6
          ? ((v = Math.sqrt(J * J + X * X)),
            (T = Math.sqrt(nt * nt + at * at)),
            (b = J || X ? Os(X, J) * Hi : 0),
            (z = at || nt ? Os(at, nt) * Hi + b : 0),
            z && (T *= Math.abs(Math.cos(z * Ws))),
            i.svg && ((g -= R - (R * J + I * at)), (y -= I - (R * X + I * nt))))
          : ((qt = M[6]),
            (Cn = M[7]),
            (O = M[8]),
            (xt = M[9]),
            (Ie = M[10]),
            (Gt = M[11]),
            (g = M[12]),
            (y = M[13]),
            (x = M[14]),
            (H = Os(qt, Ie)),
            (E = H * Hi),
            H &&
              ((U = Math.cos(-H)),
              ($ = Math.sin(-H)),
              (Q = ht * U + O * $),
              (lt = mt * U + xt * $),
              (Ft = qt * U + Ie * $),
              (O = ht * -$ + O * U),
              (xt = mt * -$ + xt * U),
              (Ie = qt * -$ + Ie * U),
              (Gt = Cn * -$ + Gt * U),
              (ht = Q),
              (mt = lt),
              (qt = Ft)),
            (H = Os(-at, Ie)),
            (k = H * Hi),
            H &&
              ((U = Math.cos(-H)),
              ($ = Math.sin(-H)),
              (Q = J * U - O * $),
              (lt = X * U - xt * $),
              (Ft = at * U - Ie * $),
              (Gt = nt * $ + Gt * U),
              (J = Q),
              (X = lt),
              (at = Ft)),
            (H = Os(X, J)),
            (b = H * Hi),
            H &&
              ((U = Math.cos(H)),
              ($ = Math.sin(H)),
              (Q = J * U + X * $),
              (lt = ht * U + mt * $),
              (X = X * U - J * $),
              (mt = mt * U - ht * $),
              (J = Q),
              (ht = lt)),
            E && Math.abs(E) + Math.abs(b) > 359.9 && ((E = b = 0), (k = 180 - k)),
            (v = he(Math.sqrt(J * J + X * X + at * at))),
            (T = he(Math.sqrt(mt * mt + qt * qt))),
            (H = Os(ht, mt)),
            (z = Math.abs(H) > 2e-4 ? H * Hi : 0),
            (P = Gt ? 1 / (Gt < 0 ? -Gt : Gt) : 0)),
        i.svg &&
          ((Q = e.getAttribute('transform')), (i.forceCSS = e.setAttribute('transform', '') || !g_(zr(e, te))), Q && e.setAttribute('transform', Q))),
      Math.abs(z) > 90 &&
        Math.abs(z) < 270 &&
        (a ? ((v *= -1), (z += b <= 0 ? 180 : -180), (b += b <= 0 ? 180 : -180)) : ((T *= -1), (z += z <= 0 ? 180 : -180))),
      (n = n || i.uncache),
      (i.x =
        g -
        ((i.xPercent = g && ((!n && i.xPercent) || (Math.round(e.offsetWidth / 2) === Math.round(-g) ? -50 : 0)))
          ? (e.offsetWidth * i.xPercent) / 100
          : 0) +
        l),
      (i.y =
        y -
        ((i.yPercent = y && ((!n && i.yPercent) || (Math.round(e.offsetHeight / 2) === Math.round(-y) ? -50 : 0)))
          ? (e.offsetHeight * i.yPercent) / 100
          : 0) +
        l),
      (i.z = x + l),
      (i.scaleX = he(v)),
      (i.scaleY = he(T)),
      (i.rotation = he(b) + f),
      (i.rotationX = he(E) + f),
      (i.rotationY = he(k) + f),
      (i.skewX = z + f),
      (i.skewY = W + f),
      (i.transformPerspective = P + l),
      (i.zOrigin = parseFloat(p.split(' ')[2]) || (!n && i.zOrigin) || 0) && (s[Sn] = uu(p)),
      i.svg || (i.xOffset = i.yOffset = 0),
      (i.force3D = Hn.force3D),
      (i.renderTransform = i.svg ? Wb : h_ ? m_ : zb),
      (i.uncache = 0),
      i
    )
  },
  uu = function (e) {
    return (e = e.split(' '))[0] + ' ' + e[1]
  },
  Fl = function (e, n, i) {
    var s = Xe(n)
    return he(parseFloat(n) + parseFloat(Ai(e, 'x', i + 'px', s))) + s
  },
  zb = function (e, n) {
    ;(n.z = '0px'), (n.rotationY = n.rotationX = '0deg'), (n.force3D = 0), m_(e, n)
  },
  Ui = '0deg',
  ho = '0px',
  Yi = ') ',
  m_ = function (e, n) {
    var i = n || this,
      s = i.xPercent,
      a = i.yPercent,
      l = i.x,
      f = i.y,
      h = i.z,
      p = i.rotation,
      g = i.rotationY,
      y = i.rotationX,
      x = i.skewX,
      v = i.skewY,
      T = i.scaleX,
      b = i.scaleY,
      E = i.transformPerspective,
      k = i.force3D,
      z = i.target,
      W = i.zOrigin,
      P = '',
      R = (k === 'auto' && e && e !== 1) || k === !0
    if (W && (y !== Ui || g !== Ui)) {
      var I = parseFloat(g) * Ws,
        M = Math.sin(I),
        H = Math.cos(I),
        U
      ;(I = parseFloat(y) * Ws), (U = Math.cos(I)), (l = Fl(z, l, M * U * -W)), (f = Fl(z, f, -Math.sin(I) * -W)), (h = Fl(z, h, H * U * -W + W))
    }
    E !== ho && (P += 'perspective(' + E + Yi),
      (s || a) && (P += 'translate(' + s + '%, ' + a + '%) '),
      (R || l !== ho || f !== ho || h !== ho) &&
        (P += h !== ho || R ? 'translate3d(' + l + ', ' + f + ', ' + h + ') ' : 'translate(' + l + ', ' + f + Yi),
      p !== Ui && (P += 'rotate(' + p + Yi),
      g !== Ui && (P += 'rotateY(' + g + Yi),
      y !== Ui && (P += 'rotateX(' + y + Yi),
      (x !== Ui || v !== Ui) && (P += 'skew(' + x + ', ' + v + Yi),
      (T !== 1 || b !== 1) && (P += 'scale(' + T + ', ' + b + Yi),
      (z.style[te] = P || 'translate(0, 0)')
  },
  Wb = function (e, n) {
    var i = n || this,
      s = i.xPercent,
      a = i.yPercent,
      l = i.x,
      f = i.y,
      h = i.rotation,
      p = i.skewX,
      g = i.skewY,
      y = i.scaleX,
      x = i.scaleY,
      v = i.target,
      T = i.xOrigin,
      b = i.yOrigin,
      E = i.xOffset,
      k = i.yOffset,
      z = i.forceCSS,
      W = parseFloat(l),
      P = parseFloat(f),
      R,
      I,
      M,
      H,
      U
    ;(h = parseFloat(h)),
      (p = parseFloat(p)),
      (g = parseFloat(g)),
      g && ((g = parseFloat(g)), (p += g), (h += g)),
      h || p
        ? ((h *= Ws),
          (p *= Ws),
          (R = Math.cos(h) * y),
          (I = Math.sin(h) * y),
          (M = Math.sin(h - p) * -x),
          (H = Math.cos(h - p) * x),
          p &&
            ((g *= Ws),
            (U = Math.tan(p - g)),
            (U = Math.sqrt(1 + U * U)),
            (M *= U),
            (H *= U),
            g && ((U = Math.tan(g)), (U = Math.sqrt(1 + U * U)), (R *= U), (I *= U))),
          (R = he(R)),
          (I = he(I)),
          (M = he(M)),
          (H = he(H)))
        : ((R = y), (H = x), (I = M = 0)),
      ((W && !~(l + '').indexOf('px')) || (P && !~(f + '').indexOf('px'))) && ((W = Ai(v, 'x', l, 'px')), (P = Ai(v, 'y', f, 'px'))),
      (T || b || E || k) && ((W = he(W + T - (T * R + b * M) + E)), (P = he(P + b - (T * I + b * H) + k))),
      (s || a) && ((U = v.getBBox()), (W = he(W + (s / 100) * U.width)), (P = he(P + (a / 100) * U.height))),
      (U = 'matrix(' + R + ',' + I + ',' + M + ',' + H + ',' + W + ',' + P + ')'),
      v.setAttribute('transform', U),
      z && (v.style[te] = U)
  },
  Bb = function (e, n, i, s, a) {
    var l = 360,
      f = De(a),
      h = parseFloat(a) * (f && ~a.indexOf('rad') ? Hi : 1),
      p = h - s,
      g = s + p + 'deg',
      y,
      x
    return (
      f &&
        ((y = a.split('_')[1]),
        y === 'short' && ((p %= l), p !== p % (l / 2) && (p += p < 0 ? l : -l)),
        y === 'cw' && p < 0 ? (p = ((p + l * Dd) % l) - ~~(p / l) * l) : y === 'ccw' && p > 0 && (p = ((p - l * Dd) % l) - ~~(p / l) * l)),
      (e._pt = x = new bn(e._pt, n, i, s, p, bb)),
      (x.e = g),
      (x.u = 'deg'),
      e._props.push(i),
      x
    )
  },
  Bd = function (e, n) {
    for (var i in n) e[i] = n[i]
    return e
  },
  Nb = function (e, n, i) {
    var s = Bd({}, i._gsap),
      a = 'perspective,force3D,transformOrigin,svgOrigin',
      l = i.style,
      f,
      h,
      p,
      g,
      y,
      x,
      v,
      T
    s.svg
      ? ((p = i.getAttribute('transform')), i.setAttribute('transform', ''), (l[te] = n), (f = Wo(i, 1)), ss(i, te), i.setAttribute('transform', p))
      : ((p = getComputedStyle(i)[te]), (l[te] = n), (f = Wo(i, 1)), (l[te] = p))
    for (h in ri)
      (p = s[h]),
        (g = f[h]),
        p !== g &&
          a.indexOf(h) < 0 &&
          ((v = Xe(p)),
          (T = Xe(g)),
          (y = v !== T ? Ai(i, h, p, T) : parseFloat(p)),
          (x = parseFloat(g)),
          (e._pt = new bn(e._pt, f, h, y, x - y, of)),
          (e._pt.u = T || 0),
          e._props.push(h))
    Bd(f, s)
  }
xn('padding,margin,Width,Radius', function (u, e) {
  var n = 'Top',
    i = 'Right',
    s = 'Bottom',
    a = 'Left',
    l = (e < 3 ? [n, i, s, a] : [n + a, n + i, s + i, s + a]).map(function (f) {
      return e < 2 ? u + f : 'border' + f + u
    })
  au[e > 1 ? 'border' + u : u] = function (f, h, p, g, y) {
    var x, v
    if (arguments.length < 4)
      return (
        (x = l.map(function (T) {
          return Qr(f, T, p)
        })),
        (v = x.join(' ')),
        v.split(x[0]).length === 5 ? x[0] : v
      )
    ;(x = (g + '').split(' ')),
      (v = {}),
      l.forEach(function (T, b) {
        return (v[T] = x[b] = x[b] || x[((b - 1) / 2) | 0])
      }),
      f.init(h, v, y)
  }
})
var v_ = {
  name: 'css',
  register: uf,
  targetTest: function (e) {
    return e.style && e.nodeType
  },
  init: function (e, n, i, s, a) {
    var l = this._props,
      f = e.style,
      h = i.vars.startAt,
      p,
      g,
      y,
      x,
      v,
      T,
      b,
      E,
      k,
      z,
      W,
      P,
      R,
      I,
      M,
      H
    Bf || uf(), (this.styles = this.styles || c_(e)), (H = this.styles.props), (this.tween = i)
    for (b in n)
      if (b !== 'autoRound' && ((g = n[b]), !(Bn[b] && t_(b, n, i, s, e, a)))) {
        if (
          ((v = typeof g),
          (T = au[b]),
          v === 'function' && ((g = g.call(i, s, e, a)), (v = typeof g)),
          v === 'string' && ~g.indexOf('random(') && (g = Io(g)),
          T)
        )
          T(this, e, b, g, i) && (M = 1)
        else if (b.substr(0, 2) === '--')
          (p = (getComputedStyle(e).getPropertyValue(b) + '').trim()),
            (g += ''),
            (Si.lastIndex = 0),
            Si.test(p) || ((E = Xe(p)), (k = Xe(g))),
            k ? E !== k && (p = Ai(e, b, p, k) + k) : E && (g += E),
            this.add(f, 'setProperty', p, g, s, a, 0, 0, b),
            l.push(b),
            H.push(b, 0, f[b])
        else if (v !== 'undefined') {
          if (
            (h && b in h
              ? ((p = typeof h[b] == 'function' ? h[b].call(i, s, e, a) : h[b]),
                De(p) && ~p.indexOf('random(') && (p = Io(p)),
                Xe(p + '') || p === 'auto' || (p += Hn.units[b] || Xe(Qr(e, b)) || ''),
                (p + '').charAt(1) === '=' && (p = Qr(e, b)))
              : (p = Qr(e, b)),
            (x = parseFloat(p)),
            (z = v === 'string' && g.charAt(1) === '=' && g.substr(0, 2)),
            z && (g = g.substr(2)),
            (y = parseFloat(g)),
            b in kr &&
              (b === 'autoAlpha' &&
                (x === 1 && Qr(e, 'visibility') === 'hidden' && y && (x = 0),
                H.push('visibility', 0, f.visibility),
                yi(this, f, 'visibility', x ? 'inherit' : 'hidden', y ? 'inherit' : 'hidden', !y)),
              b !== 'scale' && b !== 'transform' && ((b = kr[b]), ~b.indexOf(',') && (b = b.split(',')[0]))),
            (W = b in ri),
            W)
          ) {
            if (
              (this.styles.save(b),
              P ||
                ((R = e._gsap),
                (R.renderTransform && !n.parseTransform) || Wo(e, n.parseTransform),
                (I = n.smoothOrigin !== !1 && R.smooth),
                (P = this._pt = new bn(this._pt, f, te, 0, 1, R.renderTransform, R, 0, -1)),
                (P.dep = 1)),
              b === 'scale')
            )
              (this._pt = new bn(this._pt, R, 'scaleY', R.scaleY, (z ? Fs(R.scaleY, z + y) : y) - R.scaleY || 0, of)),
                (this._pt.u = 0),
                l.push('scaleY', b),
                (b += 'X')
            else if (b === 'transformOrigin') {
              H.push(Sn, 0, f[Sn]),
                (g = kb(g)),
                R.svg
                  ? lf(e, g, 0, I, 0, this)
                  : ((k = parseFloat(g.split(' ')[2]) || 0), k !== R.zOrigin && yi(this, R, 'zOrigin', R.zOrigin, k), yi(this, f, b, uu(p), uu(g)))
              continue
            } else if (b === 'svgOrigin') {
              lf(e, g, 1, I, 0, this)
              continue
            } else if (b in __) {
              Bb(this, R, b, x, z ? Fs(x, z + g) : g)
              continue
            } else if (b === 'smoothOrigin') {
              yi(this, R, 'smooth', R.smooth, g)
              continue
            } else if (b === 'force3D') {
              R[b] = g
              continue
            } else if (b === 'transform') {
              Nb(this, g, e)
              continue
            }
          } else b in f || (b = Gs(b) || b)
          if (W || ((y || y === 0) && (x || x === 0) && !xb.test(g) && b in f))
            (E = (p + '').substr((x + '').length)),
              y || (y = 0),
              (k = Xe(g) || (b in Hn.units ? Hn.units[b] : E)),
              E !== k && (x = Ai(e, b, p, k)),
              (this._pt = new bn(
                this._pt,
                W ? R : f,
                b,
                x,
                (z ? Fs(x, z + y) : y) - x,
                !W && (k === 'px' || b === 'zIndex') && n.autoRound !== !1 ? Tb : of
              )),
              (this._pt.u = k || 0),
              E !== k && k !== '%' && ((this._pt.b = p), (this._pt.r = Sb))
          else if (b in f) Ib.call(this, e, b, p, z ? z + g : g)
          else if (b in e) this.add(e, b, p || e[b], z ? z + g : g, s, a)
          else if (b !== 'parseTransform') {
            Rf(b, g)
            continue
          }
          W || (b in f ? H.push(b, 0, f[b]) : H.push(b, 1, p || e[b])), l.push(b)
        }
      }
    M && o_(this)
  },
  render: function (e, n) {
    if (n.tween._time || !Nf()) for (var i = n._pt; i; ) i.r(e, i.d), (i = i._next)
    else n.styles.revert()
  },
  get: Qr,
  aliases: kr,
  getSetter: function (e, n, i) {
    var s = kr[n]
    return (
      s && s.indexOf(',') < 0 && (n = s),
      n in ri && n !== Sn && (e._gsap.x || Qr(e, 'x'))
        ? i && Ld === i
          ? n === 'scale'
            ? Eb
            : Ob
          : (Ld = i || {}) && (n === 'scale' ? Pb : Rb)
        : e.style && !Of(e.style[n])
        ? Cb
        : ~n.indexOf('-')
        ? Ab
        : zf(e, n)
    )
  },
  core: { _removeProperty: ss, _getMatrix: Yf },
}
Tn.utils.checkPrefix = Gs
Tn.core.getStyleSaver = c_
;(function (u, e, n, i) {
  var s = xn(u + ',' + e + ',' + n, function (a) {
    ri[a] = 1
  })
  xn(e, function (a) {
    ;(Hn.units[a] = 'deg'), (__[a] = 1)
  }),
    (kr[s[13]] = u + ',' + e),
    xn(i, function (a) {
      var l = a.split(':')
      kr[l[1]] = s[l[0]]
    })
})(
  'x,y,z,scale,scaleX,scaleY,xPercent,yPercent',
  'rotation,rotationX,rotationY,skewX,skewY',
  'transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective',
  '0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY'
)
xn('x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective', function (u) {
  Hn.units[u] = 'px'
})
Tn.registerPlugin(v_)
var Xn = Tn.registerPlugin(v_) || Tn
Xn.core.Tween
function Nd(u, e) {
  for (var n = 0; n < e.length; n++) {
    var i = e[n]
    ;(i.enumerable = i.enumerable || !1), (i.configurable = !0), 'value' in i && (i.writable = !0), Object.defineProperty(u, i.key, i)
  }
}
function Ub(u, e, n) {
  return e && Nd(u.prototype, e), n && Nd(u, n), u
}
/*!
 * Observer 3.12.3
 * https://gsap.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var Be,
  Ga,
  Un,
  wi,
  xi,
  Bs,
  y_,
  $i,
  To,
  w_,
  ti,
  br,
  x_,
  b_ = function () {
    return Be || (typeof window < 'u' && (Be = window.gsap) && Be.registerPlugin && Be)
  },
  S_ = 1,
  Is = [],
  wt = [],
  Wr = [],
  Co = Date.now,
  ff = function (e, n) {
    return n
  },
  Yb = function () {
    var e = To.core,
      n = e.bridge || {},
      i = e._scrollers,
      s = e._proxies
    i.push.apply(i, wt),
      s.push.apply(s, Wr),
      (wt = i),
      (Wr = s),
      (ff = function (l, f) {
        return n[l](f)
      })
  },
  Ti = function (e, n) {
    return ~Wr.indexOf(e) && Wr[Wr.indexOf(e) + 1][n]
  },
  Ao = function (e) {
    return !!~w_.indexOf(e)
  },
  en = function (e, n, i, s, a) {
    return e.addEventListener(n, i, { passive: !s, capture: !!a })
  },
  tn = function (e, n, i, s) {
    return e.removeEventListener(n, i, !!s)
  },
  Ma = 'scrollLeft',
  La = 'scrollTop',
  cf = function () {
    return (ti && ti.isPressed) || wt.cache++
  },
  lu = function (e, n) {
    var i = function s(a) {
      if (a || a === 0) {
        S_ && (Un.history.scrollRestoration = 'manual')
        var l = ti && ti.isPressed
        ;(a = s.v = Math.round(a) || (ti && ti.iOS ? 1 : 0)), e(a), (s.cacheID = wt.cache), l && ff('ss', a)
      } else (n || wt.cache !== s.cacheID || ff('ref')) && ((s.cacheID = wt.cache), (s.v = e()))
      return s.v + s.offset
    }
    return (i.offset = 0), e && i
  },
  ln = {
    s: Ma,
    p: 'left',
    p2: 'Left',
    os: 'right',
    os2: 'Right',
    d: 'width',
    d2: 'Width',
    a: 'x',
    sc: lu(function (u) {
      return arguments.length ? Un.scrollTo(u, Te.sc()) : Un.pageXOffset || wi[Ma] || xi[Ma] || Bs[Ma] || 0
    }),
  },
  Te = {
    s: La,
    p: 'top',
    p2: 'Top',
    os: 'bottom',
    os2: 'Bottom',
    d: 'height',
    d2: 'Height',
    a: 'y',
    op: ln,
    sc: lu(function (u) {
      return arguments.length ? Un.scrollTo(ln.sc(), u) : Un.pageYOffset || wi[La] || xi[La] || Bs[La] || 0
    }),
  },
  yn = function (e, n) {
    return (
      ((n && n._ctx && n._ctx.selector) || Be.utils.toArray)(e)[0] ||
      (typeof e == 'string' && Be.config().nullTargetWarn !== !1 ? console.warn('Element not found:', e) : null)
    )
  },
  Oi = function (e, n) {
    var i = n.s,
      s = n.sc
    Ao(e) && (e = wi.scrollingElement || xi)
    var a = wt.indexOf(e),
      l = s === Te.sc ? 1 : 2
    !~a && (a = wt.push(e) - 1), wt[a + l] || en(e, 'scroll', cf)
    var f = wt[a + l],
      h =
        f ||
        (wt[a + l] =
          lu(Ti(e, i), !0) ||
          (Ao(e)
            ? s
            : lu(function (p) {
                return arguments.length ? (e[i] = p) : e[i]
              })))
    return (h.target = e), f || (h.smooth = Be.getProperty(e, 'scrollBehavior') === 'smooth'), h
  },
  hf = function (e, n, i) {
    var s = e,
      a = e,
      l = Co(),
      f = l,
      h = n || 50,
      p = Math.max(500, h * 3),
      g = function (T, b) {
        var E = Co()
        b || E - l > h ? ((a = s), (s = T), (f = l), (l = E)) : i ? (s += T) : (s = a + ((T - a) / (E - f)) * (l - f))
      },
      y = function () {
        ;(a = s = i ? 0 : s), (f = l = 0)
      },
      x = function (T) {
        var b = f,
          E = a,
          k = Co()
        return (T || T === 0) && T !== s && g(T), l === f || k - f > p ? 0 : ((s + (i ? E : -E)) / ((i ? k : l) - b)) * 1e3
      }
    return { update: g, reset: y, getVelocity: x }
  },
  po = function (e, n) {
    return n && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e
  },
  Ud = function (e) {
    var n = Math.max.apply(Math, e),
      i = Math.min.apply(Math, e)
    return Math.abs(n) >= Math.abs(i) ? n : i
  },
  T_ = function () {
    ;(To = Be.core.globals().ScrollTrigger), To && To.core && Yb()
  },
  C_ = function (e) {
    return (
      (Be = e || b_()),
      !Ga &&
        Be &&
        typeof document < 'u' &&
        document.body &&
        ((Un = window),
        (wi = document),
        (xi = wi.documentElement),
        (Bs = wi.body),
        (w_ = [Un, wi, xi, Bs]),
        Be.utils.clamp,
        (x_ = Be.core.context || function () {}),
        ($i = 'onpointerenter' in Bs ? 'pointer' : 'mouse'),
        (y_ = we.isTouch =
          Un.matchMedia && Un.matchMedia('(hover: none), (pointer: coarse)').matches
            ? 1
            : 'ontouchstart' in Un || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
            ? 2
            : 0),
        (br = we.eventTypes =
          (
            'ontouchstart' in xi
              ? 'touchstart,touchmove,touchcancel,touchend'
              : 'onpointerdown' in xi
              ? 'pointerdown,pointermove,pointercancel,pointerup'
              : 'mousedown,mousemove,mouseup,mouseup'
          ).split(',')),
        setTimeout(function () {
          return (S_ = 0)
        }, 500),
        T_(),
        (Ga = 1)),
      Ga
    )
  }
ln.op = Te
wt.cache = 0
var we = (function () {
  function u(n) {
    this.init(n)
  }
  var e = u.prototype
  return (
    (e.init = function (i) {
      Ga || C_(Be) || console.warn('Please gsap.registerPlugin(Observer)'), To || T_()
      var s = i.tolerance,
        a = i.dragMinimum,
        l = i.type,
        f = i.target,
        h = i.lineHeight,
        p = i.debounce,
        g = i.preventDefault,
        y = i.onStop,
        x = i.onStopDelay,
        v = i.ignore,
        T = i.wheelSpeed,
        b = i.event,
        E = i.onDragStart,
        k = i.onDragEnd,
        z = i.onDrag,
        W = i.onPress,
        P = i.onRelease,
        R = i.onRight,
        I = i.onLeft,
        M = i.onUp,
        H = i.onDown,
        U = i.onChangeX,
        $ = i.onChangeY,
        J = i.onChange,
        X = i.onToggleX,
        at = i.onToggleY,
        nt = i.onHover,
        ht = i.onHoverEnd,
        mt = i.onMove,
        Q = i.ignoreCheck,
        lt = i.isNormalizer,
        Ft = i.onGestureStart,
        O = i.onGestureEnd,
        xt = i.onWheel,
        Ie = i.onEnable,
        Cn = i.onDisable,
        Gt = i.onClick,
        qt = i.scrollSpeed,
        de = i.capture,
        ee = i.allowClicks,
        ae = i.lockAxis,
        ne = i.onLockAxis
      ;(this.target = f = yn(f) || xi),
        (this.vars = i),
        v && (v = Be.utils.toArray(v)),
        (s = s || 1e-9),
        (a = a || 0),
        (T = T || 1),
        (qt = qt || 1),
        (l = l || 'wheel,touch,pointer'),
        (p = p !== !1),
        h || (h = parseFloat(Un.getComputedStyle(Bs).lineHeight) || 22)
      var Cr,
        pe,
        Ve,
        Tt,
        Rt,
        _e,
        Ke,
        D = this,
        Ne = 0,
        dr = 0,
        An = Oi(f, ln),
        Mt = Oi(f, Te),
        On = An(),
        Gn = Mt(),
        Pi = ~l.indexOf('touch') && !~l.indexOf('pointer') && br[0] === 'pointerdown',
        Ut = Ao(f),
        Kt = f.ownerDocument || wi,
        ke = [0, 0, 0],
        Ce = [0, 0, 0],
        pr = 0,
        En = function () {
          return (pr = Co())
        },
        cn = function (j, Pt) {
          return ((D.event = j) && v && ~v.indexOf(j.target)) || (Pt && Pi && j.pointerType !== 'touch') || (Q && Q(j, Pt))
        },
        Ae = function () {
          D._vx.reset(), D._vy.reset(), pe.pause(), y && y(D)
        },
        _r = function () {
          var j = (D.deltaX = Ud(ke)),
            Pt = (D.deltaY = Ud(Ce)),
            re = Math.abs(j) >= s,
            q = Math.abs(Pt) >= s
          J && (re || q) && J(D, j, Pt, ke, Ce),
            re &&
              (R && D.deltaX > 0 && R(D),
              I && D.deltaX < 0 && I(D),
              U && U(D),
              X && D.deltaX < 0 != Ne < 0 && X(D),
              (Ne = D.deltaX),
              (ke[0] = ke[1] = ke[2] = 0)),
            q &&
              (H && D.deltaY > 0 && H(D),
              M && D.deltaY < 0 && M(D),
              $ && $(D),
              at && D.deltaY < 0 != dr < 0 && at(D),
              (dr = D.deltaY),
              (Ce[0] = Ce[1] = Ce[2] = 0)),
            (Tt || Ve) && (mt && mt(D), Ve && (z(D), (Ve = !1)), (Tt = !1)),
            _e && !(_e = !1) && ne && ne(D),
            Rt && (xt(D), (Rt = !1)),
            (Cr = 0)
        },
        Ar = function (j, Pt, re) {
          ;(ke[re] += j), (Ce[re] += Pt), D._vx.update(j), D._vy.update(Pt), p ? Cr || (Cr = requestAnimationFrame(_r)) : _r()
        },
        Or = function (j, Pt) {
          ae && !Ke && ((D.axis = Ke = Math.abs(j) > Math.abs(Pt) ? 'x' : 'y'), (_e = !0)),
            Ke !== 'y' && ((ke[2] += j), D._vx.update(j, !0)),
            Ke !== 'x' && ((Ce[2] += Pt), D._vy.update(Pt, !0)),
            p ? Cr || (Cr = requestAnimationFrame(_r)) : _r()
        },
        gr = function (j) {
          if (!cn(j, 1)) {
            j = po(j, g)
            var Pt = j.clientX,
              re = j.clientY,
              q = Pt - D.x,
              dt = re - D.y,
              tt = D.isDragging
            ;(D.x = Pt),
              (D.y = re),
              (tt || Math.abs(D.startX - Pt) >= a || Math.abs(D.startY - re) >= a) &&
                (z && (Ve = !0), tt || (D.isDragging = !0), Or(q, dt), tt || (E && E(D)))
          }
        },
        qn = (D.onPress = function (st) {
          cn(st, 1) ||
            (st && st.button) ||
            ((D.axis = Ke = null),
            pe.pause(),
            (D.isPressed = !0),
            (st = po(st)),
            (Ne = dr = 0),
            (D.startX = D.x = st.clientX),
            (D.startY = D.y = st.clientY),
            D._vx.reset(),
            D._vy.reset(),
            en(lt ? f : Kt, br[1], gr, g, !0),
            (D.deltaX = D.deltaY = 0),
            W && W(D))
        }),
        Er = (D.onRelease = function (st) {
          if (!cn(st, 1)) {
            tn(lt ? f : Kt, br[1], gr, !0)
            var j = !isNaN(D.y - D.startY),
              Pt = D.isDragging,
              re = Pt && (Math.abs(D.x - D.startX) > 3 || Math.abs(D.y - D.startY) > 3),
              q = po(st)
            !re &&
              j &&
              (D._vx.reset(),
              D._vy.reset(),
              g &&
                ee &&
                Be.delayedCall(0.08, function () {
                  if (Co() - pr > 300 && !st.defaultPrevented) {
                    if (st.target.click) st.target.click()
                    else if (Kt.createEvent) {
                      var dt = Kt.createEvent('MouseEvents')
                      dt.initMouseEvent('click', !0, !0, Un, 1, q.screenX, q.screenY, q.clientX, q.clientY, !1, !1, !1, !1, 0, null),
                        st.target.dispatchEvent(dt)
                    }
                  }
                })),
              (D.isDragging = D.isGesturing = D.isPressed = !1),
              y && Pt && !lt && pe.restart(!0),
              k && Pt && k(D),
              P && P(D, re)
          }
        }),
        bt = function (j) {
          return j.touches && j.touches.length > 1 && (D.isGesturing = !0) && Ft(j, D.isDragging)
        },
        Nr = function () {
          return (D.isGesturing = !1) || O(D)
        },
        hn = function (j) {
          if (!cn(j)) {
            var Pt = An(),
              re = Mt()
            Ar((Pt - On) * qt, (re - Gn) * qt, 1), (On = Pt), (Gn = re), y && pe.restart(!0)
          }
        },
        dn = function (j) {
          if (!cn(j)) {
            ;(j = po(j, g)), xt && (Rt = !0)
            var Pt = (j.deltaMode === 1 ? h : j.deltaMode === 2 ? Un.innerHeight : 1) * T
            Ar(j.deltaX * Pt, j.deltaY * Pt, 0), y && !lt && pe.restart(!0)
          }
        },
        Pn = function (j) {
          if (!cn(j)) {
            var Pt = j.clientX,
              re = j.clientY,
              q = Pt - D.x,
              dt = re - D.y
            ;(D.x = Pt), (D.y = re), (Tt = !0), y && pe.restart(!0), (q || dt) && Or(q, dt)
          }
        },
        Ur = function (j) {
          ;(D.event = j), nt(D)
        },
        ii = function (j) {
          ;(D.event = j), ht(D)
        },
        mr = function (j) {
          return cn(j) || (po(j, g) && Gt(D))
        }
      ;(pe = D._dc = Be.delayedCall(x || 0.25, Ae).pause()),
        (D.deltaX = D.deltaY = 0),
        (D._vx = hf(0, 50, !0)),
        (D._vy = hf(0, 50, !0)),
        (D.scrollX = An),
        (D.scrollY = Mt),
        (D.isDragging = D.isGesturing = D.isPressed = !1),
        x_(this),
        (D.enable = function (st) {
          return (
            D.isEnabled ||
              (en(Ut ? Kt : f, 'scroll', cf),
              l.indexOf('scroll') >= 0 && en(Ut ? Kt : f, 'scroll', hn, g, de),
              l.indexOf('wheel') >= 0 && en(f, 'wheel', dn, g, de),
              ((l.indexOf('touch') >= 0 && y_) || l.indexOf('pointer') >= 0) &&
                (en(f, br[0], qn, g, de),
                en(Kt, br[2], Er),
                en(Kt, br[3], Er),
                ee && en(f, 'click', En, !1, !0),
                Gt && en(f, 'click', mr),
                Ft && en(Kt, 'gesturestart', bt),
                O && en(Kt, 'gestureend', Nr),
                nt && en(f, $i + 'enter', Ur),
                ht && en(f, $i + 'leave', ii),
                mt && en(f, $i + 'move', Pn)),
              (D.isEnabled = !0),
              st && st.type && qn(st),
              Ie && Ie(D)),
            D
          )
        }),
        (D.disable = function () {
          D.isEnabled &&
            (Is.filter(function (st) {
              return st !== D && Ao(st.target)
            }).length || tn(Ut ? Kt : f, 'scroll', cf),
            D.isPressed && (D._vx.reset(), D._vy.reset(), tn(lt ? f : Kt, br[1], gr, !0)),
            tn(Ut ? Kt : f, 'scroll', hn, de),
            tn(f, 'wheel', dn, de),
            tn(f, br[0], qn, de),
            tn(Kt, br[2], Er),
            tn(Kt, br[3], Er),
            tn(f, 'click', En, !0),
            tn(f, 'click', mr),
            tn(Kt, 'gesturestart', bt),
            tn(Kt, 'gestureend', Nr),
            tn(f, $i + 'enter', Ur),
            tn(f, $i + 'leave', ii),
            tn(f, $i + 'move', Pn),
            (D.isEnabled = D.isPressed = D.isDragging = !1),
            Cn && Cn(D))
        }),
        (D.kill = D.revert =
          function () {
            D.disable()
            var st = Is.indexOf(D)
            st >= 0 && Is.splice(st, 1), ti === D && (ti = 0)
          }),
        Is.push(D),
        lt && Ao(f) && (ti = D),
        D.enable(b)
    }),
    Ub(u, [
      {
        key: 'velocityX',
        get: function () {
          return this._vx.getVelocity()
        },
      },
      {
        key: 'velocityY',
        get: function () {
          return this._vy.getVelocity()
        },
      },
    ]),
    u
  )
})()
we.version = '3.12.3'
we.create = function (u) {
  return new we(u)
}
we.register = C_
we.getAll = function () {
  return Is.slice()
}
we.getById = function (u) {
  return Is.filter(function (e) {
    return e.vars.id === u
  })[0]
}
b_() && Be.registerPlugin(we)
/*!
 * ScrollTrigger 3.12.3
 * https://gsap.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var K,
  Rs,
  Ot,
  Qt,
  Sr,
  Xt,
  O_,
  fu,
  Bo,
  ks,
  qa,
  Da,
  $e,
  vu,
  pf,
  rn,
  Yd,
  Hd,
  Ms,
  E_,
  Wl,
  P_,
  nn,
  R_,
  M_,
  L_,
  gi,
  _f,
  Hf,
  Ns,
  $f,
  Xf,
  gf,
  Bl,
  Ia = 1,
  on = Date.now,
  Nl = on(),
  cr = 0,
  vo = 0,
  $d = function (e, n, i) {
    var s = Bn(e) && (e.substr(0, 6) === 'clamp(' || e.indexOf('max') > -1)
    return (i['_' + n + 'Clamp'] = s), s ? e.substr(6, e.length - 7) : e
  },
  Xd = function (e, n) {
    return n && (!Bn(e) || e.substr(0, 6) !== 'clamp(') ? 'clamp(' + e + ')' : e
  },
  $b = function u() {
    return vo && requestAnimationFrame(u)
  },
  Gd = function () {
    return (vu = 1)
  },
  qd = function () {
    return (vu = 0)
  },
  Lr = function (e) {
    return e
  },
  yo = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0
  },
  D_ = function () {
    return typeof window < 'u'
  },
  I_ = function () {
    return K || (D_() && (K = window.gsap) && K.registerPlugin && K)
  },
  os = function (e) {
    return !!~O_.indexOf(e)
  },
  k_ = function (e) {
    return (e === 'Height' ? $f : Ot['inner' + e]) || Sr['client' + e] || Xt['client' + e]
  },
  F_ = function (e) {
    return (
      Ti(e, 'getBoundingClientRect') ||
      (os(e)
        ? function () {
            return (ja.width = Ot.innerWidth), (ja.height = $f), ja
          }
        : function () {
            return ti(e)
          })
    )
  },
  Xb = function (e, n, i) {
    var s = i.d,
      a = i.d2,
      l = i.a
    return (l = Ti(e, 'getBoundingClientRect'))
      ? function () {
          return l()[s]
        }
      : function () {
          return (n ? k_(a) : e['client' + a]) || 0
        }
  },
  Gb = function (e, n) {
    return !n || ~Wr.indexOf(e)
      ? F_(e)
      : function () {
          return ja
        }
  },
  Fr = function (e, n) {
    var i = n.s,
      s = n.d2,
      a = n.d,
      l = n.a
    return Math.max(0, (i = 'scroll' + s) && (l = Ti(e, i)) ? l() - F_(e)()[a] : os(e) ? (Sr[i] || Xt[i]) - k_(s) : e[i] - e['offset' + s])
  },
  ka = function (e, n) {
    for (var i = 0; i < Ms.length; i += 3) (!n || ~n.indexOf(Ms[i + 1])) && e(Ms[i], Ms[i + 1], Ms[i + 2])
  },
  Bn = function (e) {
    return typeof e == 'string'
  },
  fn = function (e) {
    return typeof e == 'function'
  },
  Va = function (e) {
    return typeof e == 'number'
  },
  Xi = function (e) {
    return typeof e == 'object'
  },
  _o = function (e, n, i) {
    return e && e.progress(n ? 0 : 1) && i && e.pause()
  },
  Ul = function (e, n) {
    if (e.enabled) {
      var i = e._ctx
        ? e._ctx.add(function () {
            return n(e)
          })
        : n(e)
      i && i.totalTime && (e.callbackAnimation = i)
    }
  },
  Es = Math.abs,
  z_ = 'left',
  W_ = 'top',
  Gf = 'right',
  qf = 'bottom',
  ts = 'width',
  es = 'height',
  Oo = 'Right',
  Eo = 'Left',
  Po = 'Top',
  Ro = 'Bottom',
  ve = 'padding',
  ar = 'margin',
  qs = 'Width',
  Vf = 'Height',
  Pe = 'px',
  ur = function (e) {
    return Ot.getComputedStyle(e)
  },
  qb = function (e) {
    var n = ur(e).position
    e.style.position = n === 'absolute' || n === 'fixed' ? n : 'relative'
  },
  Vd = function (e, n) {
    for (var i in n) i in e || (e[i] = n[i])
    return e
  },
  ti = function (e, n) {
    var i =
        n &&
        ur(e)[pf] !== 'matrix(1, 0, 0, 1, 0, 0)' &&
        K.to(e, { x: 0, y: 0, xPercent: 0, yPercent: 0, rotation: 0, rotationX: 0, rotationY: 0, scale: 1, skewX: 0, skewY: 0 }).progress(1),
      s = e.getBoundingClientRect()
    return i && i.progress(0).kill(), s
  },
  mf = function (e, n) {
    var i = n.d2
    return e['offset' + i] || e['client' + i] || 0
  },
  B_ = function (e) {
    var n = [],
      i = e.labels,
      s = e.duration(),
      a
    for (a in i) n.push(i[a] / s)
    return n
  },
  Vb = function (e) {
    return function (n) {
      return K.utils.snap(B_(e), n)
    }
  },
  Kf = function (e) {
    var n = K.utils.snap(e),
      i =
        Array.isArray(e) &&
        e.slice(0).sort(function (s, a) {
          return s - a
        })
    return i
      ? function (s, a, l) {
          l === void 0 && (l = 0.001)
          var f
          if (!a) return n(s)
          if (a > 0) {
            for (s -= l, f = 0; f < i.length; f++) if (i[f] >= s) return i[f]
            return i[f - 1]
          } else for (f = i.length, s += l; f--; ) if (i[f] <= s) return i[f]
          return i[0]
        }
      : function (s, a, l) {
          l === void 0 && (l = 0.001)
          var f = n(s)
          return !a || Math.abs(f - s) < l || f - s < 0 == a < 0 ? f : n(a < 0 ? s - e : s + e)
        }
  },
  Kb = function (e) {
    return function (n, i) {
      return Kf(B_(e))(n, i.direction)
    }
  },
  Fa = function (e, n, i, s) {
    return i.split(',').forEach(function (a) {
      return e(n, a, s)
    })
  },
  Me = function (e, n, i, s, a) {
    return e.addEventListener(n, i, { passive: !s, capture: !!a })
  },
  Re = function (e, n, i, s) {
    return e.removeEventListener(n, i, !!s)
  },
  za = function (e, n, i) {
    ;(i = i && i.wheelHandler), i && (e(n, 'wheel', i), e(n, 'touchmove', i))
  },
  Kd = { startColor: 'green', endColor: 'red', indent: 0, fontSize: '16px', fontWeight: 'normal' },
  Wa = { toggleActions: 'play', anticipatePin: 0 },
  cu = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
  Ka = function (e, n) {
    if (Bn(e)) {
      var i = e.indexOf('='),
        s = ~i ? +(e.charAt(i - 1) + 1) * parseFloat(e.substr(i + 1)) : 0
      ~i && (e.indexOf('%') > i && (s *= n / 100), (e = e.substr(0, i - 1))),
        (e = s + (e in cu ? cu[e] * n : ~e.indexOf('%') ? (parseFloat(e) * n) / 100 : parseFloat(e) || 0))
    }
    return e
  },
  Ba = function (e, n, i, s, a, l, f, h) {
    var p = a.startColor,
      g = a.endColor,
      y = a.fontSize,
      x = a.indent,
      v = a.fontWeight,
      T = Qt.createElement('div'),
      b = os(i) || Ti(i, 'pinType') === 'fixed',
      E = e.indexOf('scroller') !== -1,
      k = b ? Xt : i,
      z = e.indexOf('start') !== -1,
      W = z ? p : g,
      P =
        'border-color:' +
        W +
        ';font-size:' +
        y +
        ';color:' +
        W +
        ';font-weight:' +
        v +
        ';pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;'
    return (
      (P += 'position:' + ((E || h) && b ? 'fixed;' : 'absolute;')),
      (E || h || !b) && (P += (s === Te ? Gf : qf) + ':' + (l + parseFloat(x)) + 'px;'),
      f && (P += 'box-sizing:border-box;text-align:left;width:' + f.offsetWidth + 'px;'),
      (T._isStart = z),
      T.setAttribute('class', 'gsap-marker-' + e + (n ? ' marker-' + n : '')),
      (T.style.cssText = P),
      (T.innerText = n || n === 0 ? e + '-' + n : e),
      k.children[0] ? k.insertBefore(T, k.children[0]) : k.appendChild(T),
      (T._offset = T['offset' + s.op.d2]),
      Za(T, 0, s, z),
      T
    )
  },
  Za = function (e, n, i, s) {
    var a = { display: 'block' },
      l = i[s ? 'os2' : 'p2'],
      f = i[s ? 'p2' : 'os2']
    ;(e._isFlipped = s),
      (a[i.a + 'Percent'] = s ? -100 : 0),
      (a[i.a] = s ? '1px' : 0),
      (a['border' + l + qs] = 1),
      (a['border' + f + qs] = 0),
      (a[i.p] = n + 'px'),
      K.set(e, a)
  },
  vt = [],
  vf = {},
  No,
  Zd = function () {
    return on() - cr > 34 && (No || (No = requestAnimationFrame(ni)))
  },
  Ps = function () {
    ;(!nn || !nn.isPressed || nn.startX > Xt.clientWidth) &&
      (wt.cache++, nn ? No || (No = requestAnimationFrame(ni)) : ni(), cr || us('scrollStart'), (cr = on()))
  },
  Yl = function () {
    ;(L_ = Ot.innerWidth), (M_ = Ot.innerHeight)
  },
  wo = function () {
    wt.cache++,
      !$e &&
        !P_ &&
        !Qt.fullscreenElement &&
        !Qt.webkitFullscreenElement &&
        (!R_ || L_ !== Ot.innerWidth || Math.abs(Ot.innerHeight - M_) > Ot.innerHeight * 0.25) &&
        fu.restart(!0)
  },
  as = {},
  Zb = [],
  N_ = function u() {
    return Re(gt, 'scrollEnd', u) || Ki(!0)
  },
  us = function (e) {
    return (
      (as[e] &&
        as[e].map(function (n) {
          return n()
        })) ||
      Zb
    )
  },
  Wn = [],
  U_ = function (e) {
    for (var n = 0; n < Wn.length; n += 5)
      (!e || (Wn[n + 4] && Wn[n + 4].query === e)) &&
        ((Wn[n].style.cssText = Wn[n + 1]), Wn[n].getBBox && Wn[n].setAttribute('transform', Wn[n + 2] || ''), (Wn[n + 3].uncache = 1))
  },
  Zf = function (e, n) {
    var i
    for (rn = 0; rn < vt.length; rn++) (i = vt[rn]), i && (!n || i._ctx === n) && (e ? i.kill(1) : i.revert(!0, !0))
    ;(Xf = !0), n && U_(n), n || us('revert')
  },
  Y_ = function (e, n) {
    wt.cache++,
      (n || !sn) &&
        wt.forEach(function (i) {
          return fn(i) && i.cacheID++ && (i.rec = 0)
        }),
      Bn(e) && (Ot.history.scrollRestoration = Hf = e)
  },
  sn,
  ns = 0,
  Jd,
  Jb = function () {
    if (Jd !== ns) {
      var e = (Jd = ns)
      requestAnimationFrame(function () {
        return e === ns && Ki(!0)
      })
    }
  },
  H_ = function () {
    Xt.appendChild(Ns), ($f = (!nn && Ns.offsetHeight) || Ot.innerHeight), Xt.removeChild(Ns)
  },
  Qd = function (e) {
    return Bo('.gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end').forEach(function (n) {
      return (n.style.display = e ? 'none' : 'block')
    })
  },
  Ki = function (e, n) {
    if (cr && !e) {
      Me(gt, 'scrollEnd', N_)
      return
    }
    H_(),
      (sn = gt.isRefreshing = !0),
      wt.forEach(function (s) {
        return fn(s) && ++s.cacheID && (s.rec = s())
      })
    var i = us('refreshInit')
    E_ && gt.sort(),
      n || Zf(),
      wt.forEach(function (s) {
        fn(s) && (s.smooth && (s.target.style.scrollBehavior = 'auto'), s(0))
      }),
      vt.slice(0).forEach(function (s) {
        return s.refresh()
      }),
      (Xf = !1),
      vt.forEach(function (s) {
        if (s._subPinOffset && s.pin) {
          var a = s.vars.horizontal ? 'offsetWidth' : 'offsetHeight',
            l = s.pin[a]
          s.revert(!0, 1), s.adjustPinSpacing(s.pin[a] - l), s.refresh()
        }
      }),
      (gf = 1),
      Qd(!0),
      vt.forEach(function (s) {
        var a = Fr(s.scroller, s._dir),
          l = s.vars.end === 'max' || (s._endClamp && s.end > a),
          f = s._startClamp && s.start >= a
        ;(l || f) && s.setPositions(f ? a - 1 : s.start, l ? Math.max(f ? a : s.start + 1, a) : s.end, !0)
      }),
      Qd(!1),
      (gf = 0),
      i.forEach(function (s) {
        return s && s.render && s.render(-1)
      }),
      wt.forEach(function (s) {
        fn(s) &&
          (s.smooth &&
            requestAnimationFrame(function () {
              return (s.target.style.scrollBehavior = 'smooth')
            }),
          s.rec && s(s.rec))
      }),
      Y_(Hf, 1),
      fu.pause(),
      ns++,
      (sn = 2),
      ni(2),
      vt.forEach(function (s) {
        return fn(s.vars.onRefresh) && s.vars.onRefresh(s)
      }),
      (sn = gt.isRefreshing = !1),
      us('refresh')
  },
  yf = 0,
  Ja = 1,
  Mo,
  ni = function (e) {
    if (e === 2 || (!sn && !Xf)) {
      ;(gt.isUpdating = !0), Mo && Mo.update(0)
      var n = vt.length,
        i = on(),
        s = i - Nl >= 50,
        a = n && vt[0].scroll()
      if (((Ja = yf > a ? -1 : 1), sn || (yf = a), s && (cr && !vu && i - cr > 200 && ((cr = 0), us('scrollEnd')), (qa = Nl), (Nl = i)), Ja < 0)) {
        for (rn = n; rn-- > 0; ) vt[rn] && vt[rn].update(0, s)
        Ja = 1
      } else for (rn = 0; rn < n; rn++) vt[rn] && vt[rn].update(0, s)
      gt.isUpdating = !1
    }
    No = 0
  },
  wf = [
    z_,
    W_,
    qf,
    Gf,
    ar + Ro,
    ar + Oo,
    ar + Po,
    ar + Eo,
    'display',
    'flexShrink',
    'float',
    'zIndex',
    'gridColumnStart',
    'gridColumnEnd',
    'gridRowStart',
    'gridRowEnd',
    'gridArea',
    'justifySelf',
    'alignSelf',
    'placeSelf',
    'order',
  ],
  Qa = wf.concat([ts, es, 'boxSizing', 'max' + qs, 'max' + Vf, 'position', ar, ve, ve + Po, ve + Oo, ve + Ro, ve + Eo]),
  Qb = function (e, n, i) {
    Us(i)
    var s = e._gsap
    if (s.spacerIsNative) Us(s.spacerState)
    else if (e._gsap.swappedIn) {
      var a = n.parentNode
      a && (a.insertBefore(e, n), a.removeChild(n))
    }
    e._gsap.swappedIn = !1
  },
  Hl = function (e, n, i, s) {
    if (!e._gsap.swappedIn) {
      for (var a = wf.length, l = n.style, f = e.style, h; a--; ) (h = wf[a]), (l[h] = i[h])
      ;(l.position = i.position === 'absolute' ? 'absolute' : 'relative'),
        i.display === 'inline' && (l.display = 'inline-block'),
        (f[qf] = f[Gf] = 'auto'),
        (l.flexBasis = i.flexBasis || 'auto'),
        (l.overflow = 'visible'),
        (l.boxSizing = 'border-box'),
        (l[ts] = mf(e, ln) + Pe),
        (l[es] = mf(e, Te) + Pe),
        (l[ve] = f[ar] = f[W_] = f[z_] = '0'),
        Us(s),
        (f[ts] = f['max' + qs] = i[ts]),
        (f[es] = f['max' + Vf] = i[es]),
        (f[ve] = i[ve]),
        e.parentNode !== n && (e.parentNode.insertBefore(n, e), n.appendChild(e)),
        (e._gsap.swappedIn = !0)
    }
  },
  jb = /([A-Z])/g,
  Us = function (e) {
    if (e) {
      var n = e.t.style,
        i = e.length,
        s = 0,
        a,
        l
      for ((e.t._gsap || K.core.getCache(e.t)).uncache = 1; s < i; s += 2)
        (l = e[s + 1]), (a = e[s]), l ? (n[a] = l) : n[a] && n.removeProperty(a.replace(jb, '-$1').toLowerCase())
    }
  },
  Na = function (e) {
    for (var n = Qa.length, i = e.style, s = [], a = 0; a < n; a++) s.push(Qa[a], i[Qa[a]])
    return (s.t = e), s
  },
  tS = function (e, n, i) {
    for (var s = [], a = e.length, l = i ? 8 : 0, f; l < a; l += 2) (f = e[l]), s.push(f, f in n ? n[f] : e[l + 1])
    return (s.t = e.t), s
  },
  ja = { left: 0, top: 0 },
  jd = function (e, n, i, s, a, l, f, h, p, g, y, x, v, T) {
    fn(e) && (e = e(h)), Bn(e) && e.substr(0, 3) === 'max' && (e = x + (e.charAt(4) === '=' ? Ka('0' + e.substr(3), i) : 0))
    var b = v ? v.time() : 0,
      E,
      k,
      z
    if ((v && v.seek(0), isNaN(e) || (e = +e), Va(e)))
      v && (e = K.utils.mapRange(v.scrollTrigger.start, v.scrollTrigger.end, 0, x, e)), f && Za(f, i, s, !0)
    else {
      fn(n) && (n = n(h))
      var W = (e || '0').split(' '),
        P,
        R,
        I,
        M
      ;(z = wn(n, h) || Xt),
        (P = ti(z) || {}),
        (!P || (!P.left && !P.top)) &&
          ur(z).display === 'none' &&
          ((M = z.style.display), (z.style.display = 'block'), (P = ti(z)), M ? (z.style.display = M) : z.style.removeProperty('display')),
        (R = Ka(W[0], P[s.d])),
        (I = Ka(W[1] || '0', i)),
        (e = P[s.p] - p[s.p] - g + R + a - I),
        f && Za(f, I, s, i - I < 20 || (f._isStart && I > 20)),
        (i -= i - I)
    }
    if ((T && ((h[T] = e || -0.001), e < 0 && (e = 0)), l)) {
      var H = e + i,
        U = l._isStart
      ;(E = 'scroll' + s.d2),
        Za(l, H, s, (U && H > 20) || (!U && (y ? Math.max(Xt[E], Sr[E]) : l.parentNode[E]) <= H + 1)),
        y && ((p = ti(f)), y && (l.style[s.op.p] = p[s.op.p] - s.op.m - l._offset + Pe))
    }
    return (
      v && z && ((E = ti(z)), v.seek(x), (k = ti(z)), (v._caScrollDist = E[s.p] - k[s.p]), (e = (e / v._caScrollDist) * x)),
      v && v.seek(b),
      v ? e : Math.round(e)
    )
  },
  eS = /(webkit|moz|length|cssText|inset)/i,
  tp = function (e, n, i, s) {
    if (e.parentNode !== n) {
      var a = e.style,
        l,
        f
      if (n === Xt) {
        ;(e._stOrig = a.cssText), (f = ur(e))
        for (l in f) !+l && !eS.test(l) && f[l] && typeof a[l] == 'string' && l !== '0' && (a[l] = f[l])
        ;(a.top = i), (a.left = s)
      } else a.cssText = e._stOrig
      ;(K.core.getCache(e).uncache = 1), n.appendChild(e)
    }
  },
  $_ = function (e, n, i) {
    var s = n,
      a = s
    return function (l) {
      var f = Math.round(e())
      return f !== s && f !== a && Math.abs(f - s) > 3 && Math.abs(f - a) > 3 && ((l = f), i && i()), (a = s), (s = l), l
    }
  },
  Ua = function (e, n, i) {
    var s = {}
    ;(s[n.p] = '+=' + i), K.set(e, s)
  },
  ep = function (e, n) {
    var i = Oi(e, n),
      s = '_scroll' + n.p2,
      a = function l(f, h, p, g, y) {
        var x = l.tween,
          v = h.onComplete,
          T = {}
        p = p || i()
        var b = $_(i, p, function () {
          x.kill(), (l.tween = 0)
        })
        return (
          (y = (g && y) || 0),
          (g = g || f - p),
          x && x.kill(),
          (h[s] = f),
          (h.modifiers = T),
          (T[s] = function () {
            return b(p + g * x.ratio + y * x.ratio * x.ratio)
          }),
          (h.onUpdate = function () {
            wt.cache++, l.tween && ni()
          }),
          (h.onComplete = function () {
            ;(l.tween = 0), v && v.call(x)
          }),
          (x = l.tween = K.to(e, h)),
          x
        )
      }
    return (
      (e[s] = i),
      (i.wheelHandler = function () {
        return a.tween && a.tween.kill() && (a.tween = 0)
      }),
      Me(e, 'wheel', i.wheelHandler),
      gt.isTouch && Me(e, 'touchmove', i.wheelHandler),
      a
    )
  },
  gt = (function () {
    function u(n, i) {
      Rs || u.register(K) || console.warn('Please gsap.registerPlugin(ScrollTrigger)'), _f(this), this.init(n, i)
    }
    var e = u.prototype
    return (
      (e.init = function (i, s) {
        if (((this.progress = this.start = 0), this.vars && this.kill(!0, !0), !vo)) {
          this.update = this.refresh = this.kill = Lr
          return
        }
        i = Vd(Bn(i) || Va(i) || i.nodeType ? { trigger: i } : i, Wa)
        var a = i,
          l = a.onUpdate,
          f = a.toggleClass,
          h = a.id,
          p = a.onToggle,
          g = a.onRefresh,
          y = a.scrub,
          x = a.trigger,
          v = a.pin,
          T = a.pinSpacing,
          b = a.invalidateOnRefresh,
          E = a.anticipatePin,
          k = a.onScrubComplete,
          z = a.onSnapComplete,
          W = a.once,
          P = a.snap,
          R = a.pinReparent,
          I = a.pinSpacer,
          M = a.containerAnimation,
          H = a.fastScrollEnd,
          U = a.preventOverlaps,
          $ = i.horizontal || (i.containerAnimation && i.horizontal !== !1) ? ln : Te,
          J = !y && y !== 0,
          X = wn(i.scroller || Ot),
          at = K.core.getCache(X),
          nt = os(X),
          ht = ('pinType' in i ? i.pinType : Ti(X, 'pinType') || (nt && 'fixed')) === 'fixed',
          mt = [i.onEnter, i.onLeave, i.onEnterBack, i.onLeaveBack],
          Q = J && i.toggleActions.split(' '),
          lt = 'markers' in i ? i.markers : Wa.markers,
          Ft = nt ? 0 : parseFloat(ur(X)['border' + $.p2 + qs]) || 0,
          O = this,
          xt =
            i.onRefreshInit &&
            function () {
              return i.onRefreshInit(O)
            },
          Ie = Xb(X, nt, $),
          An = Gb(X, nt),
          Gt = 0,
          qt = 0,
          de = 0,
          ee = Oi(X, $),
          ae,
          ne,
          Cr,
          pe,
          Ve,
          Tt,
          Rt,
          _e,
          Ke,
          D,
          Ne,
          dr,
          On,
          Mt,
          En,
          Gn,
          Pi,
          Ut,
          Kt,
          ke,
          Ce,
          pr,
          Pn,
          hn,
          Ae,
          _r,
          Ar,
          Or,
          gr,
          qn,
          Er,
          bt,
          Nr,
          dn,
          pn,
          Rn,
          Ur,
          si,
          mr
        if (
          ((O._startClamp = O._endClamp = !1),
          (O._dir = $),
          (E *= 45),
          (O.scroller = X),
          (O.scroll = M ? M.time.bind(M) : ee),
          (pe = ee()),
          (O.vars = i),
          (s = s || i.animation),
          'refreshPriority' in i && ((E_ = 1), i.refreshPriority === -9999 && (Mo = O)),
          (at.tweenScroll = at.tweenScroll || { top: ep(X, Te), left: ep(X, ln) }),
          (O.tweenTo = ae = at.tweenScroll[$.p]),
          (O.scrubDuration = function (q) {
            ;(Nr = Va(q) && q),
              Nr
                ? bt
                  ? bt.duration(q)
                  : (bt = K.to(s, {
                      ease: 'expo',
                      totalProgress: '+=0',
                      duration: Nr,
                      paused: !0,
                      onComplete: function () {
                        return k && k(O)
                      },
                    }))
                : (bt && bt.progress(1).kill(), (bt = 0))
          }),
          s &&
            ((s.vars.lazy = !1),
            (s._initted && !O.isReverted) || (s.vars.immediateRender !== !1 && i.immediateRender !== !1 && s.duration() && s.render(0, !0, !0)),
            (O.animation = s.pause()),
            (s.scrollTrigger = O),
            O.scrubDuration(y),
            (qn = 0),
            h || (h = s.vars.id)),
          P &&
            ((!Xi(P) || P.push) && (P = { snapTo: P }),
            'scrollBehavior' in Xt.style && K.set(nt ? [Xt, Sr] : X, { scrollBehavior: 'auto' }),
            wt.forEach(function (q) {
              return fn(q) && q.target === (nt ? Qt.scrollingElement || Sr : X) && (q.smooth = !1)
            }),
            (Cr = fn(P.snapTo)
              ? P.snapTo
              : P.snapTo === 'labels'
              ? Vb(s)
              : P.snapTo === 'labelsDirectional'
              ? Kb(s)
              : P.directional !== !1
              ? function (q, dt) {
                  return Kf(P.snapTo)(q, on() - qt < 500 ? 0 : dt.direction)
                }
              : K.utils.snap(P.snapTo)),
            (dn = P.duration || { min: 0.1, max: 2 }),
            (dn = Xi(dn) ? ks(dn.min, dn.max) : ks(dn, dn)),
            (pn = K.delayedCall(P.delay || Nr / 2 || 0.1, function () {
              var q = ee(),
                dt = on() - qt < 500,
                tt = ae.tween
              if ((dt || Math.abs(O.getVelocity()) < 10) && !tt && !vu && Gt !== q) {
                var pt = (q - Tt) / Mt,
                  ge = s && !J ? s.totalProgress() : pt,
                  Ct = dt ? 0 : ((ge - Er) / (on() - qa)) * 1e3 || 0,
                  Zt = K.utils.clamp(-pt, 1 - pt, (Es(Ct / 2) * Ct) / 0.185),
                  Fe = pt + (P.inertia === !1 ? 0 : Zt),
                  me = ks(0, 1, Cr(Fe, O)),
                  Yt = Math.round(Tt + me * Mt),
                  It = P,
                  _n = It.onStart,
                  Ht = It.onInterrupt,
                  Ze = It.onComplete
                if (q <= Rt && q >= Tt && Yt !== q) {
                  if (tt && !tt._initted && tt.data <= Es(Yt - q)) return
                  P.inertia === !1 && (Zt = me - pt),
                    ae(
                      Yt,
                      {
                        duration: dn(Es((Math.max(Es(Fe - ge), Es(me - ge)) * 0.185) / Ct / 0.05 || 0)),
                        ease: P.ease || 'power3',
                        data: Es(Yt - q),
                        onInterrupt: function () {
                          return pn.restart(!0) && Ht && Ht(O)
                        },
                        onComplete: function () {
                          O.update(),
                            (Gt = ee()),
                            bt && s && s.progress(me),
                            (qn = Er = s && !J ? s.totalProgress() : O.progress),
                            z && z(O),
                            Ze && Ze(O)
                        },
                      },
                      q,
                      Zt * Mt,
                      Yt - q - Zt * Mt
                    ),
                    _n && _n(O, ae.tween)
                }
              } else O.isActive && Gt !== q && pn.restart(!0)
            }).pause())),
          h && (vf[h] = O),
          (x = O.trigger = wn(x || (v !== !0 && v))),
          (mr = x && x._gsap && x._gsap.stRevert),
          mr && (mr = mr(O)),
          (v = v === !0 ? x : wn(v)),
          Bn(f) && (f = { targets: x, className: f }),
          v &&
            (T === !1 || T === ar || (T = !T && v.parentNode && v.parentNode.style && ur(v.parentNode).display === 'flex' ? !1 : ve),
            (O.pin = v),
            (ne = K.core.getCache(v)),
            ne.spacer
              ? (En = ne.pinState)
              : (I && ((I = wn(I)), I && !I.nodeType && (I = I.current || I.nativeElement), (ne.spacerIsNative = !!I), I && (ne.spacerState = Na(I))),
                (ne.spacer = Ut = I || Qt.createElement('div')),
                Ut.classList.add('pin-spacer'),
                h && Ut.classList.add('pin-spacer-' + h),
                (ne.pinState = En = Na(v))),
            i.force3D !== !1 && K.set(v, { force3D: !0 }),
            (O.spacer = Ut = ne.spacer),
            (gr = ur(v)),
            (hn = gr[T + $.os2]),
            (ke = K.getProperty(v)),
            (Ce = K.quickSetter(v, $.a, Pe)),
            Hl(v, Ut, gr),
            (Pi = Na(v))),
          lt)
        ) {
          ;(dr = Xi(lt) ? Vd(lt, Kd) : Kd),
            (D = Ba('scroller-start', h, X, $, dr, 0)),
            (Ne = Ba('scroller-end', h, X, $, dr, 0, D)),
            (Kt = D['offset' + $.op.d2])
          var st = wn(Ti(X, 'content') || X)
          ;(_e = this.markerStart = Ba('start', h, st, $, dr, Kt, 0, M)),
            (Ke = this.markerEnd = Ba('end', h, st, $, dr, Kt, 0, M)),
            M && (si = K.quickSetter([_e, Ke], $.a, Pe)),
            !ht &&
              !(Wr.length && Ti(X, 'fixedMarkers') === !0) &&
              (qb(nt ? Xt : X), K.set([D, Ne], { force3D: !0 }), (_r = K.quickSetter(D, $.a, Pe)), (Or = K.quickSetter(Ne, $.a, Pe)))
        }
        if (M) {
          var j = M.vars.onUpdate,
            Pt = M.vars.onUpdateParams
          M.eventCallback('onUpdate', function () {
            O.update(0, 0, 1), j && j.apply(M, Pt || [])
          })
        }
        if (
          ((O.previous = function () {
            return vt[vt.indexOf(O) - 1]
          }),
          (O.next = function () {
            return vt[vt.indexOf(O) + 1]
          }),
          (O.revert = function (q, dt) {
            if (!dt) return O.kill(!0)
            var tt = q !== !1 || !O.enabled,
              pt = $e
            tt !== O.isReverted &&
              (tt && ((Rn = Math.max(ee(), O.scroll.rec || 0)), (de = O.progress), (Ur = s && s.progress())),
              _e &&
                [_e, Ke, D, Ne].forEach(function (ge) {
                  return (ge.style.display = tt ? 'none' : 'block')
                }),
              tt && (($e = O), O.update(tt)),
              v && (!R || !O.isActive) && (tt ? Qb(v, Ut, En) : Hl(v, Ut, ur(v), Ae)),
              tt || O.update(tt),
              ($e = pt),
              (O.isReverted = tt))
          }),
          (O.refresh = function (q, dt, tt, pt) {
            if (!(($e || !O.enabled) && !dt)) {
              if (v && q && cr) {
                Me(u, 'scrollEnd', N_)
                return
              }
              !sn && xt && xt(O),
                ($e = O),
                ae.tween && !tt && (ae.tween.kill(), (ae.tween = 0)),
                bt && bt.pause(),
                b && s && s.revert({ kill: !1 }).invalidate(),
                O.isReverted || O.revert(!0, !0),
                (O._subPinOffset = !1)
              var ge = Ie(),
                Ct = An(),
                Zt = M ? M.duration() : Fr(X, $),
                Fe = Mt <= 0.01,
                me = 0,
                Yt = pt || 0,
                It = Xi(tt) ? tt.end : i.end,
                _n = i.endTrigger || x,
                Ht = Xi(tt) ? tt.start : i.start || (i.start === 0 || !x ? 0 : v ? '0 0' : '0 100%'),
                Ze = (O.pinnedContainer = i.pinnedContainer && wn(i.pinnedContainer, O)),
                Vn = (x && Math.max(0, vt.indexOf(O))) || 0,
                Ue = Vn,
                xe,
                Oe,
                Kn,
                fs,
                ue,
                le,
                Zn,
                Vs,
                Ks,
                oi,
                Mn,
                Ri,
                cs
              for (lt && Xi(tt) && ((Ri = K.getProperty(D, $.p)), (cs = K.getProperty(Ne, $.p))); Ue--; )
                (le = vt[Ue]),
                  le.end || le.refresh(0, 1) || ($e = O),
                  (Zn = le.pin),
                  Zn && (Zn === x || Zn === v || Zn === Ze) && !le.isReverted && (oi || (oi = []), oi.unshift(le), le.revert(!0, !0)),
                  le !== vt[Ue] && (Vn--, Ue--)
              for (
                fn(Ht) && (Ht = Ht(O)),
                  Ht = $d(Ht, 'start', O),
                  Tt = jd(Ht, x, ge, $, ee(), _e, D, O, Ct, Ft, ht, Zt, M, O._startClamp && '_startClamp') || (v ? -0.001 : 0),
                  fn(It) && (It = It(O)),
                  Bn(It) &&
                    !It.indexOf('+=') &&
                    (~It.indexOf(' ')
                      ? (It = (Bn(Ht) ? Ht.split(' ')[0] : '') + It)
                      : ((me = Ka(It.substr(2), ge)),
                        (It = Bn(Ht) ? Ht : (M ? K.utils.mapRange(0, M.duration(), M.scrollTrigger.start, M.scrollTrigger.end, Tt) : Tt) + me),
                        (_n = x))),
                  It = $d(It, 'end', O),
                  Rt =
                    Math.max(Tt, jd(It || (_n ? '100% 0' : Zt), _n, ge, $, ee() + me, Ke, Ne, O, Ct, Ft, ht, Zt, M, O._endClamp && '_endClamp')) ||
                    -0.001,
                  me = 0,
                  Ue = Vn;
                Ue--;

              )
                (le = vt[Ue]),
                  (Zn = le.pin),
                  Zn &&
                    le.start - le._pinPush <= Tt &&
                    !M &&
                    le.end > 0 &&
                    ((xe = le.end - (O._startClamp ? Math.max(0, le.start) : le.start)),
                    ((Zn === x && le.start - le._pinPush < Tt) || Zn === Ze) && isNaN(Ht) && (me += xe * (1 - le.progress)),
                    Zn === v && (Yt += xe))
              if (
                ((Tt += me),
                (Rt += me),
                O._startClamp && (O._startClamp += me),
                O._endClamp && !sn && ((O._endClamp = Rt || -0.001), (Rt = Math.min(Rt, Fr(X, $)))),
                (Mt = Rt - Tt || ((Tt -= 0.01) && 0.001)),
                Fe && (de = K.utils.clamp(0, 1, K.utils.normalize(Tt, Rt, Rn))),
                (O._pinPush = Yt),
                _e && me && ((xe = {}), (xe[$.a] = '+=' + me), Ze && (xe[$.p] = '-=' + ee()), K.set([_e, Ke], xe)),
                v && !(gf && O.end >= Fr(X, $)))
              )
                (xe = ur(v)),
                  (fs = $ === Te),
                  (Kn = ee()),
                  (pr = parseFloat(ke($.a)) + Yt),
                  !Zt &&
                    Rt > 1 &&
                    ((Mn = (nt ? Qt.scrollingElement || Sr : X).style),
                    (Mn = { style: Mn, value: Mn['overflow' + $.a.toUpperCase()] }),
                    nt && ur(Xt)['overflow' + $.a.toUpperCase()] !== 'scroll' && (Mn.style['overflow' + $.a.toUpperCase()] = 'scroll')),
                  Hl(v, Ut, xe),
                  (Pi = Na(v)),
                  (Oe = ti(v, !0)),
                  (Vs = ht && Oi(X, fs ? ln : Te)()),
                  T &&
                    ((Ae = [T + $.os2, Mt + Yt + Pe]),
                    (Ae.t = Ut),
                    (Ue = T === ve ? mf(v, $) + Mt + Yt : 0),
                    Ue && (Ae.push($.d, Ue + Pe), Ut.style.flexBasis !== 'auto' && (Ut.style.flexBasis = Ue + Pe)),
                    Us(Ae),
                    Ze &&
                      vt.forEach(function (Mi) {
                        Mi.pin === Ze && Mi.vars.pinSpacing !== !1 && (Mi._subPinOffset = !0)
                      }),
                    ht && ee(Rn)),
                  ht &&
                    ((ue = {
                      top: Oe.top + (fs ? Kn - Tt : Vs) + Pe,
                      left: Oe.left + (fs ? Vs : Kn - Tt) + Pe,
                      boxSizing: 'border-box',
                      position: 'fixed',
                    }),
                    (ue[ts] = ue['max' + qs] = Math.ceil(Oe.width) + Pe),
                    (ue[es] = ue['max' + Vf] = Math.ceil(Oe.height) + Pe),
                    (ue[ar] = ue[ar + Po] = ue[ar + Oo] = ue[ar + Ro] = ue[ar + Eo] = '0'),
                    (ue[ve] = xe[ve]),
                    (ue[ve + Po] = xe[ve + Po]),
                    (ue[ve + Oo] = xe[ve + Oo]),
                    (ue[ve + Ro] = xe[ve + Ro]),
                    (ue[ve + Eo] = xe[ve + Eo]),
                    (Gn = tS(En, ue, R)),
                    sn && ee(0)),
                  s
                    ? ((Ks = s._initted),
                      Wl(1),
                      s.render(s.duration(), !0, !0),
                      (Pn = ke($.a) - pr + Mt + Yt),
                      (Ar = Math.abs(Mt - Pn) > 1),
                      ht && Ar && Gn.splice(Gn.length - 2, 2),
                      s.render(0, !0, !0),
                      Ks || s.invalidate(!0),
                      s.parent || s.totalTime(s.totalTime()),
                      Wl(0))
                    : (Pn = Mt),
                  Mn && (Mn.value ? (Mn.style['overflow' + $.a.toUpperCase()] = Mn.value) : Mn.style.removeProperty('overflow-' + $.a))
              else if (x && ee() && !M)
                for (Oe = x.parentNode; Oe && Oe !== Xt; ) Oe._pinOffset && ((Tt -= Oe._pinOffset), (Rt -= Oe._pinOffset)), (Oe = Oe.parentNode)
              oi &&
                oi.forEach(function (Mi) {
                  return Mi.revert(!1, !0)
                }),
                (O.start = Tt),
                (O.end = Rt),
                (pe = Ve = sn ? Rn : ee()),
                !M && !sn && (pe < Rn && ee(Rn), (O.scroll.rec = 0)),
                O.revert(!1, !0),
                (qt = on()),
                pn && ((Gt = -1), pn.restart(!0)),
                ($e = 0),
                s && J && (s._initted || Ur) && s.progress() !== Ur && s.progress(Ur || 0, !0).render(s.time(), !0, !0),
                (Fe || de !== O.progress || M) &&
                  (s && !J && s.totalProgress(M && Tt < -0.001 && !de ? K.utils.normalize(Tt, Rt, 0) : de, !0),
                  (O.progress = Fe || (pe - Tt) / Mt === de ? 0 : de)),
                v && T && (Ut._pinOffset = Math.round(O.progress * Pn)),
                bt && bt.invalidate(),
                isNaN(Ri) ||
                  ((Ri -= K.getProperty(D, $.p)),
                  (cs -= K.getProperty(Ne, $.p)),
                  Ua(D, $, Ri),
                  Ua(_e, $, Ri - (pt || 0)),
                  Ua(Ne, $, cs),
                  Ua(Ke, $, cs - (pt || 0))),
                Fe && !sn && O.update(),
                g && !sn && !On && ((On = !0), g(O), (On = !1))
            }
          }),
          (O.getVelocity = function () {
            return ((ee() - Ve) / (on() - qa)) * 1e3 || 0
          }),
          (O.endAnimation = function () {
            _o(O.callbackAnimation), s && (bt ? bt.progress(1) : s.paused() ? J || _o(s, O.direction < 0, 1) : _o(s, s.reversed()))
          }),
          (O.labelToScroll = function (q) {
            return (s && s.labels && (Tt || O.refresh() || Tt) + (s.labels[q] / s.duration()) * Mt) || 0
          }),
          (O.getTrailing = function (q) {
            var dt = vt.indexOf(O),
              tt = O.direction > 0 ? vt.slice(0, dt).reverse() : vt.slice(dt + 1)
            return (
              Bn(q)
                ? tt.filter(function (pt) {
                    return pt.vars.preventOverlaps === q
                  })
                : tt
            ).filter(function (pt) {
              return O.direction > 0 ? pt.end <= Tt : pt.start >= Rt
            })
          }),
          (O.update = function (q, dt, tt) {
            if (!(M && !tt && !q)) {
              var pt = sn === !0 ? Rn : O.scroll(),
                ge = q ? 0 : (pt - Tt) / Mt,
                Ct = ge < 0 ? 0 : ge > 1 ? 1 : ge || 0,
                Zt = O.progress,
                Fe,
                me,
                Yt,
                It,
                _n,
                Ht,
                Ze,
                Vn
              if (
                (dt && ((Ve = pe), (pe = M ? ee() : pt), P && ((Er = qn), (qn = s && !J ? s.totalProgress() : Ct))),
                E && !Ct && v && !$e && !Ia && cr && Tt < pt + ((pt - Ve) / (on() - qa)) * E && (Ct = 1e-4),
                Ct !== Zt && O.enabled)
              ) {
                if (
                  ((Fe = O.isActive = !!Ct && Ct < 1),
                  (me = !!Zt && Zt < 1),
                  (Ht = Fe !== me),
                  (_n = Ht || !!Ct != !!Zt),
                  (O.direction = Ct > Zt ? 1 : -1),
                  (O.progress = Ct),
                  _n &&
                    !$e &&
                    ((Yt = Ct && !Zt ? 0 : Ct === 1 ? 1 : Zt === 1 ? 2 : 3),
                    J && ((It = (!Ht && Q[Yt + 1] !== 'none' && Q[Yt + 1]) || Q[Yt]), (Vn = s && (It === 'complete' || It === 'reset' || It in s)))),
                  U &&
                    (Ht || Vn) &&
                    (Vn || y || !s) &&
                    (fn(U)
                      ? U(O)
                      : O.getTrailing(U).forEach(function (Kn) {
                          return Kn.endAnimation()
                        })),
                  J ||
                    (bt && !$e && !Ia
                      ? (bt._dp._time - bt._start !== bt._time && bt.render(bt._dp._time - bt._start),
                        bt.resetTo ? bt.resetTo('totalProgress', Ct, s._tTime / s._tDur) : ((bt.vars.totalProgress = Ct), bt.invalidate().restart()))
                      : s && s.totalProgress(Ct, !!($e && (qt || q)))),
                  v)
                ) {
                  if ((q && T && (Ut.style[T + $.os2] = hn), !ht)) Ce(yo(pr + Pn * Ct))
                  else if (_n) {
                    if (((Ze = !q && Ct > Zt && Rt + 1 > pt && pt + 1 >= Fr(X, $)), R))
                      if (!q && (Fe || Ze)) {
                        var Ue = ti(v, !0),
                          xe = pt - Tt
                        tp(v, Xt, Ue.top + ($ === Te ? xe : 0) + Pe, Ue.left + ($ === Te ? 0 : xe) + Pe)
                      } else tp(v, Ut)
                    Us(Fe || Ze ? Gn : Pi), (Ar && Ct < 1 && Fe) || Ce(pr + (Ct === 1 && !Ze ? Pn : 0))
                  }
                }
                P && !ae.tween && !$e && !Ia && pn.restart(!0),
                  f &&
                    (Ht || (W && Ct && (Ct < 1 || !Bl))) &&
                    Bo(f.targets).forEach(function (Kn) {
                      return Kn.classList[Fe || W ? 'add' : 'remove'](f.className)
                    }),
                  l && !J && !q && l(O),
                  _n && !$e
                    ? (J &&
                        (Vn &&
                          (It === 'complete'
                            ? s.pause().totalProgress(1)
                            : It === 'reset'
                            ? s.restart(!0).pause()
                            : It === 'restart'
                            ? s.restart(!0)
                            : s[It]()),
                        l && l(O)),
                      (Ht || !Bl) &&
                        (p && Ht && Ul(O, p),
                        mt[Yt] && Ul(O, mt[Yt]),
                        W && (Ct === 1 ? O.kill(!1, 1) : (mt[Yt] = 0)),
                        Ht || ((Yt = Ct === 1 ? 1 : 3), mt[Yt] && Ul(O, mt[Yt]))),
                      H &&
                        !Fe &&
                        Math.abs(O.getVelocity()) > (Va(H) ? H : 2500) &&
                        (_o(O.callbackAnimation), bt ? bt.progress(1) : _o(s, It === 'reverse' ? 1 : !Ct, 1)))
                    : J && l && !$e && l(O)
              }
              if (Or) {
                var Oe = M ? (pt / M.duration()) * (M._caScrollDist || 0) : pt
                _r(Oe + (D._isFlipped ? 1 : 0)), Or(Oe)
              }
              si && si((-pt / M.duration()) * (M._caScrollDist || 0))
            }
          }),
          (O.enable = function (q, dt) {
            O.enabled ||
              ((O.enabled = !0),
              Me(X, 'resize', wo),
              nt || Me(X, 'scroll', Ps),
              xt && Me(u, 'refreshInit', xt),
              q !== !1 && ((O.progress = de = 0), (pe = Ve = Gt = ee())),
              dt !== !1 && O.refresh())
          }),
          (O.getTween = function (q) {
            return q && ae ? ae.tween : bt
          }),
          (O.setPositions = function (q, dt, tt, pt) {
            if (M) {
              var ge = M.scrollTrigger,
                Ct = M.duration(),
                Zt = ge.end - ge.start
              ;(q = ge.start + (Zt * q) / Ct), (dt = ge.start + (Zt * dt) / Ct)
            }
            O.refresh(!1, !1, { start: Xd(q, tt && !!O._startClamp), end: Xd(dt, tt && !!O._endClamp) }, pt), O.update()
          }),
          (O.adjustPinSpacing = function (q) {
            if (Ae && q) {
              var dt = Ae.indexOf($.d) + 1
              ;(Ae[dt] = parseFloat(Ae[dt]) + q + Pe), (Ae[1] = parseFloat(Ae[1]) + q + Pe), Us(Ae)
            }
          }),
          (O.disable = function (q, dt) {
            if (
              O.enabled &&
              (q !== !1 && O.revert(!0, !0),
              (O.enabled = O.isActive = !1),
              dt || (bt && bt.pause()),
              (Rn = 0),
              ne && (ne.uncache = 1),
              xt && Re(u, 'refreshInit', xt),
              pn && (pn.pause(), ae.tween && ae.tween.kill() && (ae.tween = 0)),
              !nt)
            ) {
              for (var tt = vt.length; tt--; ) if (vt[tt].scroller === X && vt[tt] !== O) return
              Re(X, 'resize', wo), nt || Re(X, 'scroll', Ps)
            }
          }),
          (O.kill = function (q, dt) {
            O.disable(q, dt), bt && !dt && bt.kill(), h && delete vf[h]
            var tt = vt.indexOf(O)
            tt >= 0 && vt.splice(tt, 1),
              tt === rn && Ja > 0 && rn--,
              (tt = 0),
              vt.forEach(function (pt) {
                return pt.scroller === O.scroller && (tt = 1)
              }),
              tt || sn || (O.scroll.rec = 0),
              s && ((s.scrollTrigger = null), q && s.revert({ kill: !1 }), dt || s.kill()),
              _e &&
                [_e, Ke, D, Ne].forEach(function (pt) {
                  return pt.parentNode && pt.parentNode.removeChild(pt)
                }),
              Mo === O && (Mo = 0),
              v &&
                (ne && (ne.uncache = 1),
                (tt = 0),
                vt.forEach(function (pt) {
                  return pt.pin === v && tt++
                }),
                tt || (ne.spacer = 0)),
              i.onKill && i.onKill(O)
          }),
          vt.push(O),
          O.enable(!1, !1),
          mr && mr(O),
          s && s.add && !Mt)
        ) {
          var re = O.update
          ;(O.update = function () {
            ;(O.update = re), Tt || Rt || O.refresh()
          }),
            K.delayedCall(0.01, O.update),
            (Mt = 0.01),
            (Tt = Rt = 0)
        } else O.refresh()
        v && Jb()
      }),
      (u.register = function (i) {
        return Rs || ((K = i || I_()), D_() && window.document && u.enable(), (Rs = vo)), Rs
      }),
      (u.defaults = function (i) {
        if (i) for (var s in i) Wa[s] = i[s]
        return Wa
      }),
      (u.disable = function (i, s) {
        ;(vo = 0),
          vt.forEach(function (l) {
            return l[s ? 'kill' : 'disable'](i)
          }),
          Re(Ot, 'wheel', Ps),
          Re(Qt, 'scroll', Ps),
          clearInterval(Da),
          Re(Qt, 'touchcancel', Lr),
          Re(Xt, 'touchstart', Lr),
          Fa(Re, Qt, 'pointerdown,touchstart,mousedown', Gd),
          Fa(Re, Qt, 'pointerup,touchend,mouseup', qd),
          fu.kill(),
          ka(Re)
        for (var a = 0; a < wt.length; a += 3) za(Re, wt[a], wt[a + 1]), za(Re, wt[a], wt[a + 2])
      }),
      (u.enable = function () {
        if (
          ((Ot = window),
          (Qt = document),
          (Sr = Qt.documentElement),
          (Xt = Qt.body),
          K &&
            ((Bo = K.utils.toArray),
            (ks = K.utils.clamp),
            (_f = K.core.context || Lr),
            (Wl = K.core.suppressOverwrites || Lr),
            (Hf = Ot.history.scrollRestoration || 'auto'),
            (yf = Ot.pageYOffset),
            K.core.globals('ScrollTrigger', u),
            Xt))
        ) {
          ;(vo = 1),
            (Ns = document.createElement('div')),
            (Ns.style.height = '100vh'),
            (Ns.style.position = 'absolute'),
            H_(),
            $b(),
            we.register(K),
            (u.isTouch = we.isTouch),
            (gi = we.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
            Me(Ot, 'wheel', Ps),
            (O_ = [Ot, Qt, Sr, Xt]),
            K.matchMedia
              ? ((u.matchMedia = function (h) {
                  var p = K.matchMedia(),
                    g
                  for (g in h) p.add(g, h[g])
                  return p
                }),
                K.addEventListener('matchMediaInit', function () {
                  return Zf()
                }),
                K.addEventListener('matchMediaRevert', function () {
                  return U_()
                }),
                K.addEventListener('matchMedia', function () {
                  Ki(0, 1), us('matchMedia')
                }),
                K.matchMedia('(orientation: portrait)', function () {
                  return Yl(), Yl
                }))
              : console.warn('Requires GSAP 3.11.0 or later'),
            Yl(),
            Me(Qt, 'scroll', Ps)
          var i = Xt.style,
            s = i.borderTopStyle,
            a = K.core.Animation.prototype,
            l,
            f
          for (
            a.revert ||
              Object.defineProperty(a, 'revert', {
                value: function () {
                  return this.time(-0.01, !0)
                },
              }),
              i.borderTopStyle = 'solid',
              l = ti(Xt),
              Te.m = Math.round(l.top + Te.sc()) || 0,
              ln.m = Math.round(l.left + ln.sc()) || 0,
              s ? (i.borderTopStyle = s) : i.removeProperty('border-top-style'),
              Da = setInterval(Zd, 250),
              K.delayedCall(0.5, function () {
                return (Ia = 0)
              }),
              Me(Qt, 'touchcancel', Lr),
              Me(Xt, 'touchstart', Lr),
              Fa(Me, Qt, 'pointerdown,touchstart,mousedown', Gd),
              Fa(Me, Qt, 'pointerup,touchend,mouseup', qd),
              pf = K.utils.checkPrefix('transform'),
              Qa.push(pf),
              Rs = on(),
              fu = K.delayedCall(0.2, Ki).pause(),
              Ms = [
                Qt,
                'visibilitychange',
                function () {
                  var h = Ot.innerWidth,
                    p = Ot.innerHeight
                  Qt.hidden ? ((Yd = h), (Hd = p)) : (Yd !== h || Hd !== p) && wo()
                },
                Qt,
                'DOMContentLoaded',
                Ki,
                Ot,
                'load',
                Ki,
                Ot,
                'resize',
                wo,
              ],
              ka(Me),
              vt.forEach(function (h) {
                return h.enable(0, 1)
              }),
              f = 0;
            f < wt.length;
            f += 3
          )
            za(Re, wt[f], wt[f + 1]), za(Re, wt[f], wt[f + 2])
        }
      }),
      (u.config = function (i) {
        'limitCallbacks' in i && (Bl = !!i.limitCallbacks)
        var s = i.syncInterval
        ;(s && clearInterval(Da)) || ((Da = s) && setInterval(Zd, s)),
          'ignoreMobileResize' in i && (R_ = u.isTouch === 1 && i.ignoreMobileResize),
          'autoRefreshEvents' in i && (ka(Re) || ka(Me, i.autoRefreshEvents || 'none'), (P_ = (i.autoRefreshEvents + '').indexOf('resize') === -1))
      }),
      (u.scrollerProxy = function (i, s) {
        var a = wn(i),
          l = wt.indexOf(a),
          f = os(a)
        ~l && wt.splice(l, f ? 6 : 2), s && (f ? Wr.unshift(Ot, s, Xt, s, Sr, s) : Wr.unshift(a, s))
      }),
      (u.clearMatchMedia = function (i) {
        vt.forEach(function (s) {
          return s._ctx && s._ctx.query === i && s._ctx.kill(!0, !0)
        })
      }),
      (u.isInViewport = function (i, s, a) {
        var l = (Bn(i) ? wn(i) : i).getBoundingClientRect(),
          f = l[a ? ts : es] * s || 0
        return a ? l.right - f > 0 && l.left + f < Ot.innerWidth : l.bottom - f > 0 && l.top + f < Ot.innerHeight
      }),
      (u.positionInViewport = function (i, s, a) {
        Bn(i) && (i = wn(i))
        var l = i.getBoundingClientRect(),
          f = l[a ? ts : es],
          h = s == null ? f / 2 : s in cu ? cu[s] * f : ~s.indexOf('%') ? (parseFloat(s) * f) / 100 : parseFloat(s) || 0
        return a ? (l.left + h) / Ot.innerWidth : (l.top + h) / Ot.innerHeight
      }),
      (u.killAll = function (i) {
        if (
          (vt.slice(0).forEach(function (a) {
            return a.vars.id !== 'ScrollSmoother' && a.kill()
          }),
          i !== !0)
        ) {
          var s = as.killAll || []
          ;(as = {}),
            s.forEach(function (a) {
              return a()
            })
        }
      }),
      u
    )
  })()
gt.version = '3.12.3'
gt.saveStyles = function (u) {
  return u
    ? Bo(u).forEach(function (e) {
        if (e && e.style) {
          var n = Wn.indexOf(e)
          n >= 0 && Wn.splice(n, 5), Wn.push(e, e.style.cssText, e.getBBox && e.getAttribute('transform'), K.core.getCache(e), _f())
        }
      })
    : Wn
}
gt.revert = function (u, e) {
  return Zf(!u, e)
}
gt.create = function (u, e) {
  return new gt(u, e)
}
gt.refresh = function (u) {
  return u ? wo() : (Rs || gt.register()) && Ki(!0)
}
gt.update = function (u) {
  return ++wt.cache && ni(u === !0 ? 2 : 0)
}
gt.clearScrollMemory = Y_
gt.maxScroll = function (u, e) {
  return Fr(u, e ? ln : Te)
}
gt.getScrollFunc = function (u, e) {
  return Oi(wn(u), e ? ln : Te)
}
gt.getById = function (u) {
  return vf[u]
}
gt.getAll = function () {
  return vt.filter(function (u) {
    return u.vars.id !== 'ScrollSmoother'
  })
}
gt.isScrolling = function () {
  return !!cr
}
gt.snapDirectional = Kf
gt.addEventListener = function (u, e) {
  var n = as[u] || (as[u] = [])
  ~n.indexOf(e) || n.push(e)
}
gt.removeEventListener = function (u, e) {
  var n = as[u],
    i = n && n.indexOf(e)
  i >= 0 && n.splice(i, 1)
}
gt.batch = function (u, e) {
  var n = [],
    i = {},
    s = e.interval || 0.016,
    a = e.batchMax || 1e9,
    l = function (p, g) {
      var y = [],
        x = [],
        v = K.delayedCall(s, function () {
          g(y, x), (y = []), (x = [])
        }).pause()
      return function (T) {
        y.length || v.restart(!0), y.push(T.trigger), x.push(T), a <= y.length && v.progress(1)
      }
    },
    f
  for (f in e) i[f] = f.substr(0, 2) === 'on' && fn(e[f]) && f !== 'onRefreshInit' ? l(f, e[f]) : e[f]
  return (
    fn(a) &&
      ((a = a()),
      Me(gt, 'refresh', function () {
        return (a = e.batchMax())
      })),
    Bo(u).forEach(function (h) {
      var p = {}
      for (f in i) p[f] = i[f]
      ;(p.trigger = h), n.push(gt.create(p))
    }),
    n
  )
}
var np = function (e, n, i, s) {
    return n > s ? e(s) : n < 0 && e(0), i > s ? (s - n) / (i - n) : i < 0 ? n / (n - i) : 1
  },
  $l = function u(e, n) {
    n === !0
      ? e.style.removeProperty('touch-action')
      : (e.style.touchAction = n === !0 ? 'auto' : n ? 'pan-' + n + (we.isTouch ? ' pinch-zoom' : '') : 'none'),
      e === Sr && u(Xt, n)
  },
  Ya = { auto: 1, scroll: 1 },
  nS = function (e) {
    var n = e.event,
      i = e.target,
      s = e.axis,
      a = (n.changedTouches ? n.changedTouches[0] : n).target,
      l = a._gsap || K.core.getCache(a),
      f = on(),
      h
    if (!l._isScrollT || f - l._isScrollT > 2e3) {
      for (
        ;
        a && a !== Xt && ((a.scrollHeight <= a.clientHeight && a.scrollWidth <= a.clientWidth) || !(Ya[(h = ur(a)).overflowY] || Ya[h.overflowX]));

      )
        a = a.parentNode
      ;(l._isScroll = a && a !== i && !os(a) && (Ya[(h = ur(a)).overflowY] || Ya[h.overflowX])), (l._isScrollT = f)
    }
    ;(l._isScroll || s === 'x') && (n.stopPropagation(), (n._gsapAllow = !0))
  },
  X_ = function (e, n, i, s) {
    return we.create({
      target: e,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: n,
      onWheel: (s = s && nS),
      onPress: s,
      onDrag: s,
      onScroll: s,
      onEnable: function () {
        return i && Me(Qt, we.eventTypes[0], ip, !1, !0)
      },
      onDisable: function () {
        return Re(Qt, we.eventTypes[0], ip, !0)
      },
    })
  },
  rS = /(input|label|select|textarea)/i,
  rp,
  ip = function (e) {
    var n = rS.test(e.target.tagName)
    ;(n || rp) && ((e._gsapAllow = !0), (rp = n))
  },
  iS = function (e) {
    Xi(e) || (e = {}),
      (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
      e.type || (e.type = 'wheel,touch'),
      (e.debounce = !!e.debounce),
      (e.id = e.id || 'normalizer')
    var n = e,
      i = n.normalizeScrollX,
      s = n.momentum,
      a = n.allowNestedScroll,
      l = n.onRelease,
      f,
      h,
      p = wn(e.target) || Sr,
      g = K.core.globals().ScrollSmoother,
      y = g && g.get(),
      x = gi && ((e.content && wn(e.content)) || (y && e.content !== !1 && !y.smooth() && y.content())),
      v = Oi(p, Te),
      T = Oi(p, ln),
      b = 1,
      E = (we.isTouch && Ot.visualViewport ? Ot.visualViewport.scale * Ot.visualViewport.width : Ot.outerWidth) / Ot.innerWidth,
      k = 0,
      z = fn(s)
        ? function () {
            return s(f)
          }
        : function () {
            return s || 2.8
          },
      W,
      P,
      R = X_(p, e.type, !0, a),
      I = function () {
        return (P = !1)
      },
      M = Lr,
      H = Lr,
      U = function () {
        ;(h = Fr(p, Te)), (H = ks(gi ? 1 : 0, h)), i && (M = ks(0, Fr(p, ln))), (W = ns)
      },
      $ = function () {
        ;(x._gsap.y = yo(parseFloat(x._gsap.y) + v.offset) + 'px'),
          (x.style.transform = 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ' + parseFloat(x._gsap.y) + ', 0, 1)'),
          (v.offset = v.cacheID = 0)
      },
      J = function () {
        if (P) {
          requestAnimationFrame(I)
          var lt = yo(f.deltaY / 2),
            Ft = H(v.v - lt)
          if (x && Ft !== v.v + v.offset) {
            v.offset = Ft - v.v
            var O = yo((parseFloat(x && x._gsap.y) || 0) - v.offset)
            ;(x.style.transform = 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ' + O + ', 0, 1)'),
              (x._gsap.y = O + 'px'),
              (v.cacheID = wt.cache),
              ni()
          }
          return !0
        }
        v.offset && $(), (P = !0)
      },
      X,
      at,
      nt,
      ht,
      mt = function () {
        U(), X.isActive() && X.vars.scrollY > h && (v() > h ? X.progress(1) && v(h) : X.resetTo('scrollY', h))
      }
    return (
      x && K.set(x, { y: '+=0' }),
      (e.ignoreCheck = function (Q) {
        return (gi && Q.type === 'touchmove' && J()) || (b > 1.05 && Q.type !== 'touchstart') || f.isGesturing || (Q.touches && Q.touches.length > 1)
      }),
      (e.onPress = function () {
        P = !1
        var Q = b
        ;(b = yo(((Ot.visualViewport && Ot.visualViewport.scale) || 1) / E)),
          X.pause(),
          Q !== b && $l(p, b > 1.01 ? !0 : i ? !1 : 'x'),
          (at = T()),
          (nt = v()),
          U(),
          (W = ns)
      }),
      (e.onRelease = e.onGestureStart =
        function (Q, lt) {
          if ((v.offset && $(), !lt)) ht.restart(!0)
          else {
            wt.cache++
            var Ft = z(),
              O,
              xt
            i && ((O = T()), (xt = O + (Ft * 0.05 * -Q.velocityX) / 0.227), (Ft *= np(T, O, xt, Fr(p, ln))), (X.vars.scrollX = M(xt))),
              (O = v()),
              (xt = O + (Ft * 0.05 * -Q.velocityY) / 0.227),
              (Ft *= np(v, O, xt, Fr(p, Te))),
              (X.vars.scrollY = H(xt)),
              X.invalidate().duration(Ft).play(0.01),
              ((gi && X.vars.scrollY >= h) || O >= h - 1) && K.to({}, { onUpdate: mt, duration: Ft })
          }
          l && l(Q)
        }),
      (e.onWheel = function () {
        X._ts && X.pause(), on() - k > 1e3 && ((W = 0), (k = on()))
      }),
      (e.onChange = function (Q, lt, Ft, O, xt) {
        if ((ns !== W && U(), lt && i && T(M(O[2] === lt ? at + (Q.startX - Q.x) : T() + lt - O[1])), Ft)) {
          v.offset && $()
          var Ie = xt[2] === Ft,
            An = Ie ? nt + Q.startY - Q.y : v() + Ft - xt[1],
            Gt = H(An)
          Ie && An !== Gt && (nt += Gt - An), v(Gt)
        }
        ;(Ft || lt) && ni()
      }),
      (e.onEnable = function () {
        $l(p, i ? !1 : 'x'),
          gt.addEventListener('refresh', mt),
          Me(Ot, 'resize', mt),
          v.smooth && ((v.target.style.scrollBehavior = 'auto'), (v.smooth = T.smooth = !1)),
          R.enable()
      }),
      (e.onDisable = function () {
        $l(p, !0), Re(Ot, 'resize', mt), gt.removeEventListener('refresh', mt), R.kill()
      }),
      (e.lockAxis = e.lockAxis !== !1),
      (f = new we(e)),
      (f.iOS = gi),
      gi && !v() && v(1),
      gi && K.ticker.add(Lr),
      (ht = f._dc),
      (X = K.to(f, {
        ease: 'power4',
        paused: !0,
        scrollX: i ? '+=0.1' : '+=0',
        scrollY: '+=0.1',
        modifiers: {
          scrollY: $_(v, v(), function () {
            return X.pause()
          }),
        },
        onUpdate: ni,
        onComplete: ht.vars.onComplete,
      })),
      f
    )
  }
gt.sort = function (u) {
  return vt.sort(
    u ||
      function (e, n) {
        return (e.vars.refreshPriority || 0) * -1e6 + e.start - (n.start + (n.vars.refreshPriority || 0) * -1e6)
      }
  )
}
gt.observe = function (u) {
  return new we(u)
}
gt.normalizeScroll = function (u) {
  if (typeof u > 'u') return nn
  if (u === !0 && nn) return nn.enable()
  if (u === !1) {
    nn && nn.kill(), (nn = u)
    return
  }
  var e = u instanceof we ? u : iS(u)
  return nn && nn.target === e.target && nn.kill(), os(e.target) && (nn = e), e
}
gt.core = {
  _getVelocityProp: df,
  _inputObserver: X_,
  _scrollers: wt,
  _proxies: Wr,
  bridge: {
    ss: function () {
      cr || us('scrollStart'), (cr = on())
    },
    ref: function () {
      return $e
    },
  },
}
I_() && K.registerPlugin(gt)
class sS extends du {
  constructor({ element: e }) {
    super({ element: e }),
      (this.element = e),
      (this.animationOptions = {
        delay: this.element.getAttribute('dd') || 0,
        stagger: this.element.getAttribute('data-stagger') || 0.1,
        ease: this.element.getAttribute('data-ease') || 'Power1.easeOut',
        duration: this.element.getAttribute('data-duration') || 0.8,
      }),
      this.create()
  }
  create() {
    ;(this.text = new wp(this.element)),
      this.text.lines.forEach((e) => {
        var n = e.parentNode,
          i = document.createElement('div')
        i.classList.add('line_wrapper'), n.replaceChild(i, e), i.appendChild(e)
      })
  }
  animateIn() {
    this.element.classList.contains('visible') ||
      (cn.registerPlugin(gt),
      (this.tl = cn.timeline({
        onComplete: () => {
          this.element.classList.add('visible')
        },
      })),
      this.tl.from(this.text.chars, {
        scrollTrigger: { trigger: this.element, start: 'top 80%', end: 'top 20%', scrub: 1 },
        opacity: 0.2,
        stagger: 0.1,
      }))
  }
  animateOut() {}
  onResize() {
    this.create()
  }
}
class oS extends du {
  constructor({ element: e }) {
    super({ element: e }),
      (this.element = e),
      (this.animationOptions = {
        delay: this.element.getAttribute('data-delay') || 0.3,
        stagger: this.element.getAttribute('data-stagger') || 0.2,
        ease: this.element.getAttribute('data-ease') || 'Power1.easeOut',
        duration: this.element.getAttribute('data-duration') || 1,
      }),
      this.create(),
      this.setProperties()
  }
  create() {
    this.text = this.element
  }
  setProperties() {
    cn.set(this.text, { autoAlpha: 0 })
  }
  animateIn() {
    this.element.classList.contains('visible') ||
      ((this.tl = cn.timeline({
        onComplete: () => {
          this.element.classList.add('visible')
        },
      })),
      this.tl.fromTo(
        this.text,
        { autoAlpha: 0 },
        { autoAlpha: 1, ease: this.animationOptions.ease, duration: this.animationOptions.duration, delay: this.animationOptions.delay }
      ))
  }
  animateOut() {}
  onResize() {}
}
class aS extends du {
  constructor({ element: e }) {
    super({ element: e }),
      (this.element = e),
      (this.animationOptions = {
        delay: this.element.getAttribute('dd') || 0,
        stagger: this.element.getAttribute('data-stagger') || 0.2,
        ease: this.element.getAttribute('data-ease') || 'Power1.easeOut',
        duration: this.element.getAttribute('data-duration') || 0.8,
      }),
      this.create(),
      this.setProperties()
  }
  create() {
    this.text = this.element
  }
  setProperties() {
    cn.set(this.text, { autoAlpha: 0, y: 20 })
  }
  animateIn() {
    this.element.classList.contains('visible') ||
      ((this.tl = cn.timeline({
        delay: this.animationOptions.delay,
        onComplete: () => {
          this.element.classList.add('visible')
        },
      })),
      this.tl.to(this.text, { autoAlpha: 1, y: 0, ease: this.animationOptions.ease, duration: this.animationOptions.duration }))
  }
  animateOut() {}
  onResize() {}
}
class uS {
  constructor(e) {
    ;(this.element = e.element), this.create(), this.setProperties()
  }
  create() {
    ;(this.accordionItems = this.element.querySelectorAll('[data-accordion="item"]')),
      (this.accordionItems = Qr.map(
        this.accordionItems,
        (e, n) => (
          (this.item = { header: e.querySelector('[data-accordion="header"]'), body: e.querySelector('[data-accordion="body"]'), status: !0 }),
          this.item
        )
      )),
      Qr.each(this.accordionItems, (e, n) => {
        this.handleClick(n)
      })
  }
  setProperties() {
    this.resetAccordion(), this.accordionOpen(this.accordionItems[0].body, 0)
  }
  handleClick(e) {
    const n = this.accordionItems[e].header,
      i = this.accordionItems[e].body
    n.addEventListener('click', () => {
      this.accordionItems[e].status === !0 ? this.accordionClose(i, e) : this.accordionOpen(i, e)
    })
  }
  accordionOpen(e, n) {
    ;(this.tl = cn.timeline({
      onStart: () => {
        this.resetAccordion(), (this.accordionItems[n].status = !0), this.accordionItems[n].header.setAttribute('aria-expanded', 'true')
      },
    })),
      this.tl.fromTo(e, { height: 0 }, { height: 'auto', duration: 0.3 })
  }
  accordionClose(e, n) {
    ;(this.tl = cn.timeline({
      onStart: () => ((this.accordionItems[n].status = !1), this.accordionItems[n].header.setAttribute('aria-expanded', 'false')),
    })),
      this.tl.to(e, { height: 0, duration: 0.3 })
  }
  resetAccordion() {
    Qr.each(this.accordionItems, (e, n) => {
      e.status === !0 && this.accordionClose(e.body, n)
    })
  }
  addEventListeners() {}
}
function xf() {
  return (
    (xf = Object.assign
      ? Object.assign.bind()
      : function (u) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e]
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (u[i] = n[i])
          }
          return u
        }),
    xf.apply(this, arguments)
  )
}
function hu(u, e, n) {
  return Math.max(u, Math.min(e, n))
}
class lS {
  advance(e) {
    var n
    if (!this.isRunning) return
    let i = !1
    if (this.lerp)
      (this.value = ((s = this.value), (a = this.to), (1 - (l = 1 - Math.exp(-60 * this.lerp * e))) * s + l * a)),
        Math.round(this.value) === this.to && ((this.value = this.to), (i = !0))
    else {
      this.currentTime += e
      const f = hu(0, this.currentTime / this.duration, 1)
      i = f >= 1
      const h = i ? 1 : this.easing(f)
      this.value = this.from + (this.to - this.from) * h
    }
    var s, a, l
    ;(n = this.onUpdate) == null || n.call(this, this.value, i), i && this.stop()
  }
  stop() {
    this.isRunning = !1
  }
  fromTo(e, n, { lerp: i = 0.1, duration: s = 1, easing: a = (h) => h, onStart: l, onUpdate: f }) {
    ;(this.from = this.value = e),
      (this.to = n),
      (this.lerp = i),
      (this.duration = s),
      (this.easing = a),
      (this.currentTime = 0),
      (this.isRunning = !0),
      l == null || l(),
      (this.onUpdate = f)
  }
}
class fS {
  constructor({ wrapper: e, content: n, autoResize: i = !0 } = {}) {
    if (
      ((this.resize = () => {
        this.onWrapperResize(), this.onContentResize()
      }),
      (this.onWrapperResize = () => {
        this.wrapper === window
          ? ((this.width = window.innerWidth), (this.height = window.innerHeight))
          : ((this.width = this.wrapper.clientWidth), (this.height = this.wrapper.clientHeight))
      }),
      (this.onContentResize = () => {
        ;(this.scrollHeight = this.content.scrollHeight), (this.scrollWidth = this.content.scrollWidth)
      }),
      (this.wrapper = e),
      (this.content = n),
      i)
    ) {
      const s = (function (a, l) {
        let f
        return function () {
          let h = arguments,
            p = this
          clearTimeout(f),
            (f = setTimeout(function () {
              a.apply(p, h)
            }, 250))
        }
      })(this.resize)
      this.wrapper !== window && ((this.wrapperResizeObserver = new ResizeObserver(s)), this.wrapperResizeObserver.observe(this.wrapper)),
        (this.contentResizeObserver = new ResizeObserver(s)),
        this.contentResizeObserver.observe(this.content)
    }
    this.resize()
  }
  destroy() {
    var e, n
    ;(e = this.wrapperResizeObserver) == null || e.disconnect(), (n = this.contentResizeObserver) == null || n.disconnect()
  }
  get limit() {
    return { x: this.scrollWidth - this.width, y: this.scrollHeight - this.height }
  }
}
class G_ {
  constructor() {
    this.events = {}
  }
  emit(e, ...n) {
    let i = this.events[e] || []
    for (let s = 0, a = i.length; s < a; s++) i[s](...n)
  }
  on(e, n) {
    var i
    return (
      ((i = this.events[e]) != null && i.push(n)) || (this.events[e] = [n]),
      () => {
        var s
        this.events[e] = (s = this.events[e]) == null ? void 0 : s.filter((a) => n !== a)
      }
    )
  }
  off(e, n) {
    var i
    this.events[e] = (i = this.events[e]) == null ? void 0 : i.filter((s) => n !== s)
  }
  destroy() {
    this.events = {}
  }
}
class cS {
  constructor(e, { wheelMultiplier: n = 1, touchMultiplier: i = 2, normalizeWheel: s = !1 }) {
    ;(this.onTouchStart = (a) => {
      const { clientX: l, clientY: f } = a.targetTouches ? a.targetTouches[0] : a
      ;(this.touchStart.x = l), (this.touchStart.y = f), (this.lastDelta = { x: 0, y: 0 })
    }),
      (this.onTouchMove = (a) => {
        const { clientX: l, clientY: f } = a.targetTouches ? a.targetTouches[0] : a,
          h = -(l - this.touchStart.x) * this.touchMultiplier,
          p = -(f - this.touchStart.y) * this.touchMultiplier
        ;(this.touchStart.x = l),
          (this.touchStart.y = f),
          (this.lastDelta = { x: h, y: p }),
          this.emitter.emit('scroll', { deltaX: h, deltaY: p, event: a })
      }),
      (this.onTouchEnd = (a) => {
        this.emitter.emit('scroll', { deltaX: this.lastDelta.x, deltaY: this.lastDelta.y, event: a })
      }),
      (this.onWheel = (a) => {
        let { deltaX: l, deltaY: f } = a
        this.normalizeWheel && ((l = hu(-100, l, 100)), (f = hu(-100, f, 100))),
          (l *= this.wheelMultiplier),
          (f *= this.wheelMultiplier),
          this.emitter.emit('scroll', { deltaX: l, deltaY: f, event: a })
      }),
      (this.element = e),
      (this.wheelMultiplier = n),
      (this.touchMultiplier = i),
      (this.normalizeWheel = s),
      (this.touchStart = { x: null, y: null }),
      (this.emitter = new G_()),
      this.element.addEventListener('wheel', this.onWheel, { passive: !1 }),
      this.element.addEventListener('touchstart', this.onTouchStart, { passive: !1 }),
      this.element.addEventListener('touchmove', this.onTouchMove, { passive: !1 }),
      this.element.addEventListener('touchend', this.onTouchEnd, { passive: !1 })
  }
  on(e, n) {
    return this.emitter.on(e, n)
  }
  destroy() {
    this.emitter.destroy(),
      this.element.removeEventListener('wheel', this.onWheel, { passive: !1 }),
      this.element.removeEventListener('touchstart', this.onTouchStart, { passive: !1 }),
      this.element.removeEventListener('touchmove', this.onTouchMove, { passive: !1 }),
      this.element.removeEventListener('touchend', this.onTouchEnd, { passive: !1 })
  }
}
class hS {
  constructor({
    wrapper: e = window,
    content: n = document.documentElement,
    wheelEventsTarget: i = e,
    eventsTarget: s = i,
    smoothWheel: a = !0,
    smoothTouch: l = !1,
    syncTouch: f = !1,
    syncTouchLerp: h = 0.1,
    __iosNoInertiaSyncTouchLerp: p = 0.4,
    touchInertiaMultiplier: g = 35,
    duration: y,
    easing: x = (R) => Math.min(1, 1.001 - Math.pow(2, -10 * R)),
    lerp: v = !y && 0.1,
    infinite: T = !1,
    orientation: b = 'vertical',
    gestureOrientation: E = 'vertical',
    touchMultiplier: k = 1,
    wheelMultiplier: z = 1,
    normalizeWheel: W = !1,
    autoResize: P = !0,
  } = {}) {
    ;(this.onVirtualScroll = ({ deltaX: R, deltaY: I, event: M }) => {
      if (M.ctrlKey) return
      const H = M.type.includes('touch'),
        U = M.type.includes('wheel')
      if (
        (this.options.gestureOrientation === 'both' && R === 0 && I === 0) ||
        (this.options.gestureOrientation === 'vertical' && I === 0) ||
        (this.options.gestureOrientation === 'horizontal' && R === 0) ||
        (H && this.options.gestureOrientation === 'vertical' && this.scroll === 0 && !this.options.infinite && I <= 0)
      )
        return
      let $ = M.composedPath()
      if (
        (($ = $.slice(0, $.indexOf(this.rootElement))),
        $.find((nt) => {
          var ht
          return (
            (nt.hasAttribute == null ? void 0 : nt.hasAttribute('data-lenis-prevent')) ||
            (H && (nt.hasAttribute == null ? void 0 : nt.hasAttribute('data-lenis-prevent-touch'))) ||
            (U && (nt.hasAttribute == null ? void 0 : nt.hasAttribute('data-lenis-prevent-wheel'))) ||
            ((ht = nt.classList) == null ? void 0 : ht.contains('lenis'))
          )
        }))
      )
        return
      if (this.isStopped || this.isLocked) return void M.preventDefault()
      if (((this.isSmooth = ((this.options.smoothTouch || this.options.syncTouch) && H) || (this.options.smoothWheel && U)), !this.isSmooth))
        return (this.isScrolling = !1), void this.animate.stop()
      M.preventDefault()
      let J = I
      this.options.gestureOrientation === 'both'
        ? (J = Math.abs(I) > Math.abs(R) ? I : R)
        : this.options.gestureOrientation === 'horizontal' && (J = R)
      const X = H && this.options.syncTouch,
        at = H && M.type === 'touchend' && Math.abs(J) > 1
      at && (J = this.velocity * this.options.touchInertiaMultiplier),
        this.scrollTo(
          this.targetScroll + J,
          xf({ programmatic: !1 }, X && { lerp: at ? this.syncTouchLerp : this.options.__iosNoInertiaSyncTouchLerp })
        )
    }),
      (this.onNativeScroll = () => {
        if (!this.__preventNextScrollEvent && !this.isScrolling) {
          const R = this.animatedScroll
          ;(this.animatedScroll = this.targetScroll = this.actualScroll),
            (this.velocity = 0),
            (this.direction = Math.sign(this.animatedScroll - R)),
            this.emit()
        }
      }),
      (window.lenisVersion = '1.0.29'),
      (e !== document.documentElement && e !== document.body) || (e = window),
      (this.options = {
        wrapper: e,
        content: n,
        wheelEventsTarget: i,
        eventsTarget: s,
        smoothWheel: a,
        smoothTouch: l,
        syncTouch: f,
        syncTouchLerp: h,
        __iosNoInertiaSyncTouchLerp: p,
        touchInertiaMultiplier: g,
        duration: y,
        easing: x,
        lerp: v,
        infinite: T,
        gestureOrientation: E,
        orientation: b,
        touchMultiplier: k,
        wheelMultiplier: z,
        normalizeWheel: W,
        autoResize: P,
      }),
      (this.animate = new lS()),
      (this.emitter = new G_()),
      (this.dimensions = new fS({ wrapper: e, content: n, autoResize: P })),
      this.toggleClass('lenis', !0),
      (this.velocity = 0),
      (this.isLocked = !1),
      (this.isStopped = !1),
      (this.isSmooth = f || a || l),
      (this.isScrolling = !1),
      (this.targetScroll = this.animatedScroll = this.actualScroll),
      this.options.wrapper.addEventListener('scroll', this.onNativeScroll, { passive: !1 }),
      (this.virtualScroll = new cS(s, { touchMultiplier: k, wheelMultiplier: z, normalizeWheel: W })),
      this.virtualScroll.on('scroll', this.onVirtualScroll)
  }
  destroy() {
    this.emitter.destroy(),
      this.options.wrapper.removeEventListener('scroll', this.onNativeScroll, { passive: !1 }),
      this.virtualScroll.destroy(),
      this.dimensions.destroy(),
      this.toggleClass('lenis', !1),
      this.toggleClass('lenis-smooth', !1),
      this.toggleClass('lenis-scrolling', !1),
      this.toggleClass('lenis-stopped', !1),
      this.toggleClass('lenis-locked', !1)
  }
  on(e, n) {
    return this.emitter.on(e, n)
  }
  off(e, n) {
    return this.emitter.off(e, n)
  }
  setScroll(e) {
    this.isHorizontal ? (this.rootElement.scrollLeft = e) : (this.rootElement.scrollTop = e)
  }
  resize() {
    this.dimensions.resize()
  }
  emit() {
    this.emitter.emit('scroll', this)
  }
  reset() {
    ;(this.isLocked = !1),
      (this.isScrolling = !1),
      (this.animatedScroll = this.targetScroll = this.actualScroll),
      (this.velocity = 0),
      this.animate.stop()
  }
  start() {
    ;(this.isStopped = !1), this.reset()
  }
  stop() {
    ;(this.isStopped = !0), this.animate.stop(), this.reset()
  }
  raf(e) {
    const n = e - (this.time || e)
    ;(this.time = e), this.animate.advance(0.001 * n)
  }
  scrollTo(
    e,
    {
      offset: n = 0,
      immediate: i = !1,
      lock: s = !1,
      duration: a = this.options.duration,
      easing: l = this.options.easing,
      lerp: f = !a && this.options.lerp,
      onComplete: h = null,
      force: p = !1,
      programmatic: g = !0,
    } = {}
  ) {
    if ((!this.isStopped && !this.isLocked) || p) {
      if (['top', 'left', 'start'].includes(e)) e = 0
      else if (['bottom', 'right', 'end'].includes(e)) e = this.limit
      else {
        var y
        let x
        if ((typeof e == 'string' ? (x = document.querySelector(e)) : (y = e) != null && y.nodeType && (x = e), x)) {
          if (this.options.wrapper !== window) {
            const T = this.options.wrapper.getBoundingClientRect()
            n -= this.isHorizontal ? T.left : T.top
          }
          const v = x.getBoundingClientRect()
          e = (this.isHorizontal ? v.left : v.top) + this.animatedScroll
        }
      }
      if (typeof e == 'number') {
        if (
          ((e += n),
          (e = Math.round(e)),
          this.options.infinite ? g && (this.targetScroll = this.animatedScroll = this.scroll) : (e = hu(0, e, this.limit)),
          i)
        )
          return (this.animatedScroll = this.targetScroll = e), this.setScroll(this.scroll), this.reset(), void (h == null || h(this))
        if (!g) {
          if (e === this.targetScroll) return
          this.targetScroll = e
        }
        this.animate.fromTo(this.animatedScroll, e, {
          duration: a,
          easing: l,
          lerp: f,
          onStart: () => {
            s && (this.isLocked = !0), (this.isScrolling = !0)
          },
          onUpdate: (x, v) => {
            ;(this.isScrolling = !0),
              (this.velocity = x - this.animatedScroll),
              (this.direction = Math.sign(this.velocity)),
              (this.animatedScroll = x),
              this.setScroll(this.scroll),
              g && (this.targetScroll = x),
              v || this.emit(),
              v &&
                (this.reset(),
                this.emit(),
                h == null || h(this),
                (this.__preventNextScrollEvent = !0),
                requestAnimationFrame(() => {
                  delete this.__preventNextScrollEvent
                }))
          },
        })
      }
    }
  }
  get rootElement() {
    return this.options.wrapper === window ? document.documentElement : this.options.wrapper
  }
  get limit() {
    return this.dimensions.limit[this.isHorizontal ? 'x' : 'y']
  }
  get isHorizontal() {
    return this.options.orientation === 'horizontal'
  }
  get actualScroll() {
    return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop
  }
  get scroll() {
    return this.options.infinite ? ((this.animatedScroll % (e = this.limit)) + e) % e : this.animatedScroll
    var e
  }
  get progress() {
    return this.limit === 0 ? 1 : this.scroll / this.limit
  }
  get isSmooth() {
    return this.__isSmooth
  }
  set isSmooth(e) {
    this.__isSmooth !== e && ((this.__isSmooth = e), this.toggleClass('lenis-smooth', e))
  }
  get isScrolling() {
    return this.__isScrolling
  }
  set isScrolling(e) {
    this.__isScrolling !== e && ((this.__isScrolling = e), this.toggleClass('lenis-scrolling', e))
  }
  get isStopped() {
    return this.__isStopped
  }
  set isStopped(e) {
    this.__isStopped !== e && ((this.__isStopped = e), this.toggleClass('lenis-stopped', e))
  }
  get isLocked() {
    return this.__isLocked
  }
  set isLocked(e) {
    this.__isLocked !== e && ((this.__isLocked = e), this.toggleClass('lenis-locked', e))
  }
  get className() {
    let e = 'lenis'
    return (
      this.isStopped && (e += ' lenis-stopped'),
      this.isLocked && (e += ' lenis-locked'),
      this.isScrolling && (e += ' lenis-scrolling'),
      this.isSmooth && (e += ' lenis-smooth'),
      e
    )
  }
  toggleClass(e, n) {
    this.rootElement.classList.toggle(e, n), this.emitter.emit('className change', this)
  }
}
class dS {
  constructor(e) {
    ;(this.element = e.element),
      (this.animationElement = {
        title: '[da = t]',
        description: '[da = d]',
        slideUp: '[da = s]',
        image: '[da = i]',
        accordion: '[data-accordion = wrapper]',
      }),
      window.innerWidth > 768 && ((this.scrollLerp = 0.075), this.createSmoothScroll())
  }
  create() {
    ;(this.elements = {}),
      Qr.each(this.animationElement, (e, n) => {
        e instanceof window.HTMLElement || e instanceof window.NodeList || Array.isArray(e)
          ? (this.elements[n] = e)
          : ((this.elements[n] = document.querySelectorAll(e)),
            this.elements[n].length === 0
              ? (this.elements[n] = null)
              : this.elements[n].length === 1 && (this.elements[n] = document.querySelectorAll(e)))
      }),
      this.createAnimations()
  }
  createSmoothScroll() {
    ;(this.lenis = new hS({ lerp: this.scrollLerp })), this.update()
  }
  update(e) {
    this.lenis.raf(e), requestAnimationFrame(this.update.bind(this))
  }
  createAnimations() {
    ;(this.animations = []),
      (this.animationTitles = Qr.map(this.elements.title, (e) => new Ub({ element: e }))),
      this.animations.push([...this.animationTitles]),
      (this.animationDescription = Qr.map(this.elements.description, (e) => new sS({ element: e }))),
      this.animations.push([...this.animationDescription]),
      (this.animationImage = Qr.map(this.elements.image, (e) => new oS({ element: e }))),
      this.animations.push([...this.animationImage]),
      (this.animationSlideup = Qr.map(this.elements.slideUp, (e) => new aS({ element: e }))),
      this.animations.push([...this.animationSlideup]),
      (this.animationAccordion = Qr.map(this.elements.accordion, (e) => new uS({ element: e }))),
      this.animations.push([...this.animationAccordion])
  }
  show(e) {
    return new Promise((n) => {
      e
        ? (this.animateIn = e)
        : ((this.animateIn = cn.timeline()),
          this.animateIn.fromTo(this.element, { autoAlpha: 0 }, { autoAlpha: 1, duration: 1.2, ease: 'Power1.easeIn' })),
        this.animateIn.call((i) => {
          this.addEventListeners(), n()
        })
    })
  }
  addEventListeners() {
    window.addEventListener('scroll', this.onScroll.bind(this))
  }
  onScroll() {
    const e = document.documentElement
    this.lenis &&
      (Math.round(this.lenis.progress * 100) > 0 && !e.classList.contains('scrolled')
        ? e.classList.add('scrolled')
        : Math.round(this.lenis.progress * 100) === 0 && e.classList.contains('scrolled') && e.classList.remove('scrolled'),
      this.lenis.direction === -1
        ? (e.classList.add('scroll-up'), e.classList.remove('scroll-down'))
        : this.lenis.direction === 1 && (e.classList.remove('scroll-up'), e.classList.add('scroll-down')))
  }
  onResize() {}
}
class pS {
  constructor(e) {
    ;(this.media = document.querySelector(e.media)), (this.content = document.querySelector(e.content)), this.create()
  }
  create() {
    cn.registerPlugin(gt),
      gt.create({
        trigger: this.media,
        start: 'top top',
        end: 'top 20%',
        onEnter: () => {
          this.media.classList.add('is--scrolled')
        },
        onUpdate: () => {
          this.media.classList.toggle('is--scrolled')
        },
      })
  }
}
class _S {
  constructor(e) {
    ;(this.media = document.querySelectorAll(e.media)), this.create()
  }
  create() {
    cn.registerPlugin(gt),
      (this.tl = cn.timeline({ scrollTrigger: { trigger: this.media, start: 'top 20%', end: 'center center', scrub: 1 } })),
      this.tl.fromTo(this.media, { autoAlpha: 0.4 }, { autoAlpha: 1, scrub: 1 })
  }
}
class gS {
  constructor(e) {
    ;(this.element = e.main), this.createPage(), this.addEventListeners()
  }
  async createPage() {
    ;(this.fontLoaded = await document.fonts.ready),
      document.documentElement.classList.add('loaded'),
      (this.page = new dS({ element: this.element })),
      window.location.pathname === '/about-us'
        ? (this.about = new pS({ media: '.about_hero_media', content: '.about_hero_media_content' }))
        : window.location.pathname.indexOf('products') && (this.about = new _S({ media: '.product_hero_media' })),
      this.page.create(),
      this.page.show()
  }
  addEventListeners() {
    window.addEventListener('resize', this.onResize.bind(this))
  }
  onResize() {
    this.page && this.page.onResize && this.page.onResize()
  }
}
new gS({ main: '.main' })
