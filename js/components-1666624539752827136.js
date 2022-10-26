function u() {
}
function C(t) {
  return t();
}
function R() {
  return /* @__PURE__ */ Object.create(null);
}
function m(t) {
  t.forEach(C);
}
function x(t) {
  return typeof t == "function";
}
function I(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function P(t) {
  return Object.keys(t).length === 0;
}
function k(t, e) {
  t.appendChild(e);
}
function b(t, e, n) {
  t.insertBefore(e, n || null);
}
function L(t) {
  t.parentNode.removeChild(t);
}
function N(t) {
  return document.createElement(t);
}
function w(t) {
  return document.createTextNode(t);
}
function V(t, e, n, r) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
}
function q(t) {
  return Array.from(t.childNodes);
}
function O(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = e);
}
function A(t) {
  const e = {};
  for (const n of t)
    e[n.name] = n.value;
  return e;
}
let h;
function d(t) {
  h = t;
}
function B() {
  if (!h)
    throw new Error("Function called outside component initialization");
  return h;
}
function G(t) {
  B().$$.on_mount.push(t);
}
function J(t) {
  B().$$.on_destroy.push(t);
}
const f = [], z = [], p = [], D = [], K = Promise.resolve();
let v = !1;
function Q() {
  v || (v = !0, K.then($));
}
function E(t) {
  p.push(t);
}
const y = /* @__PURE__ */ new Set();
let g = 0;
function $() {
  const t = h;
  do {
    for (; g < f.length; ) {
      const e = f[g];
      g++, d(e), U(e.$$);
    }
    for (d(null), f.length = 0, g = 0; z.length; )
      z.pop()();
    for (let e = 0; e < p.length; e += 1) {
      const n = p[e];
      y.has(n) || (y.add(n), n());
    }
    p.length = 0;
  } while (f.length);
  for (; D.length; )
    D.pop()();
  v = !1, y.clear(), d(t);
}
function U(t) {
  if (t.fragment !== null) {
    t.update(), m(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(E);
  }
}
const W = /* @__PURE__ */ new Set();
function X(t, e) {
  t && t.i && (W.delete(t), t.i(e));
}
function Y(t, e, n, r) {
  const { fragment: o, after_update: c } = t.$$;
  o && o.m(e, n), r || E(() => {
    const s = t.$$.on_mount.map(C).filter(x);
    t.$$.on_destroy ? t.$$.on_destroy.push(...s) : m(s), t.$$.on_mount = [];
  }), c.forEach(E);
}
function Z(t, e) {
  const n = t.$$;
  n.fragment !== null && (m(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function tt(t, e) {
  t.$$.dirty[0] === -1 && (f.push(t), Q(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function F(t, e, n, r, o, c, s, l = [-1]) {
  const _ = h;
  d(t);
  const i = t.$$ = {
    fragment: null,
    ctx: [],
    props: c,
    update: u,
    not_equal: o,
    bound: R(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (_ ? _.$$.context : [])),
    callbacks: R(),
    dirty: l,
    skip_bound: !1,
    root: e.target || _.$$.root
  };
  s && s(i.root);
  let M = !1;
  if (i.ctx = n ? n(t, e.props || {}, (a, S, ...j) => {
    const H = j.length ? j[0] : S;
    return i.ctx && o(i.ctx[a], i.ctx[a] = H) && (!i.skip_bound && i.bound[a] && i.bound[a](H), M && tt(t, a)), S;
  }) : [], i.update(), M = !0, m(i.before_update), i.fragment = r ? r(i.ctx) : !1, e.target) {
    if (e.hydrate) {
      const a = q(e.target);
      i.fragment && i.fragment.l(a), a.forEach(L);
    } else
      i.fragment && i.fragment.c();
    e.intro && X(t.$$.fragment), Y(t, e.target, e.anchor, e.customElement), $();
  }
  d(_);
}
let T;
typeof HTMLElement == "function" && (T = class extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const { on_mount: t } = this.$$;
    this.$$.on_disconnect = t.map(C).filter(x);
    for (const e in this.$$.slotted)
      this.appendChild(this.$$.slotted[e]);
  }
  attributeChangedCallback(t, e, n) {
    this[t] = n;
  }
  disconnectedCallback() {
    m(this.$$.on_disconnect);
  }
  $destroy() {
    Z(this, 1), this.$destroy = u;
  }
  $on(t, e) {
    if (!x(e))
      return u;
    const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return n.push(e), () => {
      const r = n.indexOf(e);
      r !== -1 && n.splice(r, 1);
    };
  }
  $set(t) {
    this.$$set && !P(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
});
function et(t) {
  let e, n, r, o, c;
  return {
    c() {
      e = N("button"), n = w("count is "), r = w(t[0]), this.c = u;
    },
    m(s, l) {
      b(s, e, l), k(e, n), k(e, r), o || (c = V(e, "click", t[1]), o = !0);
    },
    p(s, [l]) {
      l & 1 && O(r, s[0]);
    },
    i: u,
    o: u,
    d(s) {
      s && L(e), o = !1, c();
    }
  };
}
function nt(t, e, n) {
  let { count: r = 0 } = e;
  const o = () => {
    n(0, r = parseInt(`${r}`) + 1);
  };
  return t.$$set = (c) => {
    "count" in c && n(0, r = c.count);
  }, [r, o];
}
class rt extends T {
  constructor(e) {
    super(), this.shadowRoot.innerHTML = "<style>button{font-family:inherit;font-size:inherit;padding:1em 2em;color:#ff3e00;background-color:rgba(255, 62, 0, 0.1);border-radius:2em;border:2px solid rgba(255, 62, 0, 0);outline:none;width:200px;font-variant-numeric:tabular-nums;cursor:pointer}button:focus{border:2px solid #ff3e00}button:active{background-color:rgba(255, 62, 0, 0.2)}</style>", F(
      this,
      {
        target: this.shadowRoot,
        props: A(this.attributes),
        customElement: !0
      },
      nt,
      et,
      I,
      { count: 0 },
      null
    ), e && (e.target && b(e.target, this, e.anchor), e.props && (this.$set(e.props), $()));
  }
  static get observedAttributes() {
    return ["count"];
  }
  get count() {
    return this.$$.ctx[0];
  }
  set count(e) {
    this.$$set({ count: e }), $();
  }
}
customElements.define("hop-counter", rt);
function ot(t) {
  let e, n = (t[0] || "") + "", r;
  return {
    c() {
      e = N("span"), r = w(n), this.c = u;
    },
    m(o, c) {
      b(o, e, c), k(e, r);
    },
    p(o, [c]) {
      c & 1 && n !== (n = (o[0] || "") + "") && O(r, n);
    },
    i: u,
    o: u,
    d(o) {
      o && L(e);
    }
  };
}
function it(t, e, n) {
  let r = new Date().toLocaleTimeString(), o;
  return G(() => {
    o = setInterval(
      () => {
        n(0, r = new Date().toLocaleTimeString());
      },
      1e3
    );
  }), J(() => {
    clearInterval(o);
  }), [r];
}
class ct extends T {
  constructor(e) {
    super(), this.shadowRoot.innerHTML = "<style>span{font-family:inherit;font-size:inherit;padding:1em 2em;color:#ff3e00;background-color:rgba(255, 62, 0, 0.1);border-radius:2em;border:2px solid rgba(255, 62, 0, 0);outline:none;width:200px;font-variant-numeric:tabular-nums;cursor:pointer}span:active{background-color:rgba(255, 62, 0, 0.2)}</style>", F(
      this,
      {
        target: this.shadowRoot,
        props: A(this.attributes),
        customElement: !0
      },
      it,
      ot,
      I,
      {},
      null
    ), e && e.target && b(e.target, this, e.anchor);
  }
}
customElements.define("hop-clock", ct);
