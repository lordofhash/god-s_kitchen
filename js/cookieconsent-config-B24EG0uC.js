/*!
* CookieConsent 3.0.1
* https://github.com/orestbida/cookieconsent
* Author Orest Bida
* Released under the MIT License
*/
const tt = "opt-in",
    ke = "opt-out",
    ot = "show--consent",
    nt = "show--preferences",
    We = "disable--interaction",
    Te = "data-category",
    T = "div",
    X = "button",
    J = "aria-hidden",
    ve = "btn-group",
    N = "click",
    me = "data-role",
    ze = "consentModal",
    Ee = "preferencesModal";
class Lt {
    constructor()
    {
        this.t = {
            mode: tt,
            revision: 0,
            autoShow: !0,
            lazyHtmlGeneration: !0,
            autoClearCookies: !0,
            manageScriptTags: !0,
            hideFromBots: !0,
            cookie: {
                name: "cc_cookie",
                expiresAfterDays: 182,
                domain: "",
                path: "/",
                sameSite: "Lax"
            }
        },
        this.o = {
            i: {},
            l: "",
            _: {},
            u: {},
            p: {},
            m: [],
            v: !1,
            h: null,
            C: null,
            S: null,
            M: "",
            D: !0,
            T: !1,
            k: !1,
            A: !1,
            N: !1,
            H: [],
            V: !1,
            I: !0,
            L: [],
            j: !1,
            F: "",
            P: !1,
            O: [],
            R: [],
            B: [],
            G: [],
            J: !1,
            U: !1,
            $: !1,
            q: [],
            K: [],
            W: [],
            X: {},
            Y: {},
            Z: {},
            ee: {},
            te: {},
            oe: []
        },
        this.ne = {
            ae: {},
            se: {}
        },
        this.ce = {},
        this.re = {
            ie: "cc:onFirstConsent",
            le: "cc:onConsent",
            de: "cc:onChange",
            fe: "cc:onModalShow",
            _e: "cc:onModalHide",
            ue: "cc:onModalReady"
        }
    }
}
const a = new Lt,
    at = (t, n) => t.indexOf(n),
    j = (t, n) => at(t, n) !== -1,
    xe = t => Array.isArray(t),
    ge = t => typeof t == "string",
    Ae = t => !!t && typeof t == "object" && !xe(t),
    V = t => typeof t == "function",
    de = t => Object.keys(t),
    it = t => Array.from(new Set(t)),
    je = () => document.activeElement,
    he = t => t.preventDefault(),
    Ue = (t, n) => t.querySelectorAll(n),
    d = t => {
        const n = document.createElement(t);
        return t === X && (n.type = t), n
    },
    k = (t, n, o) => t.setAttribute(n, o),
    De = (t, n, o) => {
        t.removeAttribute(o ? "data-" + n : n)
    },
    Le = (t, n, o) => t.getAttribute(o ? "data-" + n : n),
    l = (t, n) => t.appendChild(n),
    M = (t, n) => t.classList.add(n),
    R = (t, n) => M(t, "cm__" + n),
    L = (t, n) => M(t, "pm__" + n),
    se = (t, n) => t.classList.remove(n),
    ie = t => {
        if (typeof t != "object")
            return t;
        if (t instanceof Date)
            return new Date(t.getTime());
        let n = Array.isArray(t) ? [] : {};
        for (let o in t) {
            let e = t[o];
            n[o] = ie(e)
        }
        return n
    },
    Xe = (t, n) => dispatchEvent(new CustomEvent(t, {
        detail: n
    })),
    D = (t, n, o, e) => {
        t.addEventListener(n, o),
        e && a.o.m.push({
            pe: t,
            me: n,
            ge: o
        })
    },
    St = () => {
        const t = a.t.cookie.expiresAfterDays;
        return V(t) ? t(a.o.F) : t
    },
    He = (t, n) => {
        const o = t || [],
            e = n || [];
        return o.filter(f => !j(e, f)).concat(e.filter(f => !j(o, f)))
    },
    st = t => {
        a.o.R = it(t),
        a.o.F = (() => {
            let n = "custom";
            const {R: o, O: e, B: f} = a.o,
                h = o.length;
            return h === e.length ? n = "all" : h === f.length && (n = "necessary"), n
        })()
    },
    rt = (t, n, o, e) => {
        const f = "accept-",
            {show: h, showPreferences: u, hide: i, hidePreferences: s, acceptCategory: m} = n,
            g = t || document,
            r = y => Ue(g, `[data-cc="${y}"]`),
            p = (y, v) => {
                he(y),
                m(v),
                s(),
                i()
            },
            b = r("show-preferencesModal"),
            c = r("show-consentModal"),
            w = r(f + "all"),
            C = r(f + "necessary"),
            _ = r(f + "custom"),
            S = a.t.lazyHtmlGeneration;
        for (const y of b)
            k(y, "aria-haspopup", "dialog"),
            D(y, N, v => {
                he(v),
                u()
            }),
            S && (D(y, "mouseenter", v => {
                he(v),
                a.o.N || o(n, e)
            }, !0), D(y, "focus", () => {
                a.o.N || o(n, e)
            }));
        for (let y of c)
            k(y, "aria-haspopup", "dialog"),
            D(y, N, v => {
                he(v),
                h(!0)
            }, !0);
        for (let y of w)
            D(y, N, v => {
                p(v, "all")
            }, !0);
        for (let y of _)
            D(y, N, v => {
                p(v)
            }, !0);
        for (let y of C)
            D(y, N, v => {
                p(v, [])
            }, !0)
    },
    $ = (t, n) => {
        t && (n && (t.tabIndex = -1), t.focus(), n && t.removeAttribute("tabindex"))
    },
    ct = (t, n) => {
        const o = e => {
            e.target.removeEventListener("transitionend", o),
            e.propertyName === "opacity" && getComputedStyle(t).opacity === "1" && $((f => f === 1 ? a.ne.be : a.ne.ve)(n))
        };
        D(t, "transitionend", o)
    };
let Je;
const lt = t => {
        clearTimeout(Je),
        t ? M(a.ne.ye, We) : Je = setTimeout(() => {
            se(a.ne.ye, We)
        }, 500)
    },
    Tt = ["M 19.5 4.5 L 4.5 19.5 M 4.5 4.501 L 19.5 19.5", "M 3.572 13.406 L 8.281 18.115 L 20.428 5.885", "M 21.999 6.94 L 11.639 17.18 L 2.001 6.82 "],
    Ce = (t=0, n=1.5) => `<svg viewBox="0 0 24 24" stroke-width="${n}"><path d="${Tt[t]}"/></svg>`,
    dt = t => {
        const n = a.ne,
            o = a.o;
        (e => {
            const f = e === n.he,
                h = o.i.disablePageInteraction ? n.ye : f ? n.Ce : n.ye;
            D(h, "keydown", u => {
                if (u.key !== "Tab" || !(f ? o.k && !o.A : o.A))
                    return;
                const i = je(),
                    s = f ? o.q : o.K;
                s.length !== 0 && (u.shiftKey ? i !== s[0] && e.contains(i) || (he(u), $(s[1])) : i !== s[1] && e.contains(i) || (he(u), $(s[0])))
            }, !0)
        })(t)
    },
    jt = ["[href]", X, "input", "details", "[tabindex]"].map(t => t + ':not([tabindex="-1"])').join(","),
    ut = t => {
        const {o: n, ne: o} = a,
            e = (f, h) => {
                const u = Ue(f, jt);
                h[0] = u[0],
                h[1] = u[u.length - 1]
            };
        t === 1 && n.T && e(o.he, n.q),
        t === 2 && n.N && e(o.we, n.K)
    },
    K = (t, n, o) => {
        const {de: e, le: f, ie: h, _e: u, ue: i, fe: s} = a.ce,
            m = a.re;
        if (n) {
            const r = {
                modalName: n
            };
            return t === m.fe ? V(s) && s(r) : t === m._e ? V(u) && u(r) : (r.modal = o, V(i) && i(r)), Xe(t, r)
        }
        const g = {
            cookie: a.o.p
        };
        t === m.ie ? V(h) && h(ie(g)) : t === m.le ? V(f) && f(ie(g)) : (g.changedCategories = a.o.L, g.changedServices = a.o.ee, V(e) && e(ie(g))),
        Xe(t, ie(g))
    },
    Me = (t, n) => {
        try {
            return t()
        } catch (o) {
            return !n && console.warn("CookieConsent:", o), !1
        }
    },
    Ne = t => {
        const {Y: n, ee: o, O: e, X: f, oe: h, p: u, L: i} = a.o;
        for (const r of e) {
            const p = o[r] || n[r] || [];
            for (const b of p) {
                const c = f[r][b];
                if (!c)
                    continue;
                const {onAccept: w, onReject: C} = c;
                !c.Se && j(n[r], b) ? (c.Se = !0, V(w) && w()) : c.Se && !j(n[r], b) && (c.Se = !1, V(C) && C())
            }
        }
        if (!a.t.manageScriptTags)
            return;
        const s = h,
            m = t || u.categories || [],
            g = (r, p) => {
                if (p >= r.length)
                    return;
                const b = h[p];
                if (b.xe)
                    return g(r, p + 1);
                const c = b.Me,
                    w = b.De,
                    C = b.Te,
                    _ = j(m, w),
                    S = !!C && j(n[w], C);
                if (!C && !b.ke && _ || !C && b.ke && !_ && j(i, w) || C && !b.ke && S || C && b.ke && !S && j(o[w] || [], C)) {
                    b.xe = !0;
                    const y = Le(c, "type", !0);
                    De(c, "type", !!y),
                    De(c, Te);
                    let v = Le(c, "src", !0);
                    v && De(c, "src", !0);
                    const B = d("script");
                    B.textContent = c.innerHTML;
                    for (const {nodeName: x} of c.attributes)
                        k(B, x, c[x] || Le(c, x));
                    y && (B.type = y),
                    v ? B.src = v : v = c.src;
                    const P = !!v && (!y || ["text/javascript", "module"].includes(y));
                    if (P && (B.onload = B.onerror = () => {
                        g(r, ++p)
                    }), c.replaceWith(B), P)
                        return
                }
                g(r, ++p)
            };
        g(s, 0)
    },
    Se = "bottom",
    Re = "left",
    pt = "center",
    Ye = "right",
    Pe = "inline",
    ft = "wide",
    ht = "pm--",
    Oe = ["middle", "top", Se],
    Ve = [Re, pt, Ye],
    Mt = {
        box: {
            Ee: [ft, Pe],
            Ae: Oe,
            Ne: Ve,
            He: Se,
            Ve: Ye
        },
        cloud: {
            Ee: [Pe],
            Ae: Oe,
            Ne: Ve,
            He: Se,
            Ve: pt
        },
        bar: {
            Ee: [Pe],
            Ae: Oe.slice(1),
            Ne: [],
            He: Se,
            Ve: ""
        }
    },
    xt = {
        box: {
            Ee: [],
            Ae: [],
            Ne: [],
            He: "",
            Ve: ""
        },
        bar: {
            Ee: [ft],
            Ae: [],
            Ne: [Re, Ye],
            He: "",
            Ve: Re
        }
    },
    mt = t => {
        const n = a.o.i.guiOptions,
            o = n && n.consentModal,
            e = n && n.preferencesModal;
        t === 0 && $e(a.ne.he, Mt, o, "cm--", "box", "cm"),
        t === 1 && $e(a.ne.we, xt, e, ht, "box", "pm")
    },
    $e = (t, n, o, e, f, h) => {
        t.className = h;
        const u = o && o.layout,
            i = o && o.position,
            s = o && o.flipButtons,
            m = !o || o.equalWeightButtons !== !1,
            g = u && u.split(" ") || [],
            r = g[0],
            p = g[1],
            b = r in n ? r : f,
            c = n[b],
            w = j(c.Ee, p) && p,
            C = i && i.split(" ") || [],
            _ = C[0],
            S = e === ht ? C[0] : C[1],
            y = j(c.Ae, _) ? _ : c.He,
            v = j(c.Ne, S) ? S : c.Ve,
            B = x => {
                x && M(t, e + x)
            };
        B(b),
        B(w),
        B(y),
        B(v),
        s && B("flip");
        const P = h + "__btn--secondary";
        if (h === "cm") {
            const {Ie: x, Le: z} = a.ne;
            x && (m ? se(x, P) : M(x, P)),
            z && (m ? se(z, P) : M(z, P))
        } else {
            const {je: x} = a.ne;
            x && (m ? se(x, P) : M(x, P))
        }
    },
    _e = (t, n) => {
        const o = a.o,
            e = a.ne,
            {hide: f, hidePreferences: h, acceptCategory: u} = t,
            i = v => {
                u(v),
                h(),
                f()
            },
            s = o.u && o.u.preferencesModal;
        if (!s)
            return;
        const m = s.title,
            g = s.closeIconLabel,
            r = s.acceptAllBtn,
            p = s.acceptNecessaryBtn,
            b = s.savePreferencesBtn,
            c = s.sections || [],
            w = r || p || b;
        if (e.Fe)
            e.Pe = d(T),
            L(e.Pe, "body");
        else {
            e.Fe = d(T),
            M(e.Fe, "pm-wrapper");
            const v = d("div");
            M(v, "pm-overlay"),
            l(e.Fe, v),
            D(v, N, h),
            e.we = d(T),
            M(e.we, "pm"),
            k(e.we, "role", "dialog"),
            k(e.we, J, !0),
            k(e.we, "aria-modal", !0),
            k(e.we, "aria-labelledby", "pm__title"),
            D(e.ye, "keydown", B => {
                B.keyCode === 27 && h()
            }, !0),
            e.Oe = d(T),
            L(e.Oe, "header"),
            e.Re = d("h2"),
            L(e.Re, "title"),
            e.Re.id = "pm__title",
            e.Be = d(X),
            L(e.Be, "close-btn"),
            k(e.Be, "aria-label", s.closeIconLabel || ""),
            D(e.Be, N, h),
            e.Ge = d("span"),
            e.Ge.innerHTML = Ce(),
            l(e.Be, e.Ge),
            e.Je = d(T),
            L(e.Je, "body"),
            e.Ue = d(T),
            L(e.Ue, "footer");
            var C = d(T);
            M(C, "btns");
            var _ = d(T),
                S = d(T);
            L(_, ve),
            L(S, ve),
            l(e.Ue, _),
            l(e.Ue, S),
            l(e.Oe, e.Re),
            l(e.Oe, e.Be),
            e.ve = d(T),
            k(e.ve, "tabIndex", -1),
            l(e.we, e.ve),
            l(e.we, e.Oe),
            l(e.we, e.Je),
            w && l(e.we, e.Ue),
            l(e.Fe, e.we)
        }
        let y;
        m && (e.Re.innerHTML = m, g && k(e.Be, "aria-label", g)),
        c.forEach((v, B) => {
            const P = v.title,
                x = v.description,
                z = v.linkedCategory,
                ue = z && o.P[z],
                re = v.cookieTable,
                G = re && re.body,
                ee = re && re.caption,
                q = G && G.length > 0,
                I = !!ue,
                E = I && o.X[z],
                te = Ae(E) && de(E) || [],
                O = I && (!!x || !!q || de(E).length > 0);
            var W = d(T);
            if (L(W, "section"), O || x) {
                var F = d(T);
                L(F, "section-desc-wrapper")
            }
            let oe = te.length;
            if (O && oe > 0) {
                const A = d(T);
                L(A, "section-services");
                for (const Z of te) {
                    const H = E[Z],
                        U = H && H.label || Z,
                        ce = d(T),
                        le = d(T),
                        be = d(T),
                        pe = d(T);
                    L(ce, "service"),
                    L(pe, "service-title"),
                    L(le, "service-header"),
                    L(be, "service-icon");
                    const Q = Ke(U, Z, ue, !0, z);
                    pe.innerHTML = U,
                    l(le, be),
                    l(le, pe),
                    l(ce, le),
                    l(ce, Q),
                    l(A, ce)
                }
                l(F, A)
            }
            if (P) {
                var ne = d(T),
                    Y = d(I ? X : T);
                if (L(ne, "section-title-wrapper"), L(Y, "section-title"), Y.innerHTML = P, l(ne, Y), I) {
                    const A = d("span");
                    A.innerHTML = Ce(2, 3.5),
                    L(A, "section-arrow"),
                    l(ne, A),
                    W.className += "--toggle";
                    const Z = Ke(P, z, ue);
                    let H = s.serviceCounterLabel;
                    if (oe > 0 && ge(H)) {
                        let U = d("span");
                        L(U, "badge"),
                        L(U, "service-counter"),
                        k(U, J, !0),
                        k(U, "data-servicecounter", oe),
                        H && (H = H.split("|"), H = H.length > 1 && oe > 1 ? H[1] : H[0], k(U, "data-counterlabel", H)),
                        U.innerHTML = oe + (H ? " " + H : ""),
                        l(Y, U)
                    }
                    if (O) {
                        L(W, "section--expandable");
                        var Ge = z + "-desc";
                        k(Y, "aria-expanded", !1),
                        k(Y, "aria-controls", Ge)
                    }
                    l(ne, Z)
                } else
                    k(Y, "role", "heading"),
                    k(Y, "aria-level", "3");
                l(W, ne)
            }
            if (x) {
                var Be = d("p");
                L(Be, "section-desc"),
                Be.innerHTML = x,
                l(F, Be)
            }
            if (O && (k(F, J, "true"), F.id = Ge, ((A, Z, H) => {
                D(Y, N, () => {
                    Z.classList.contains("is-expanded") ? (se(Z, "is-expanded"), k(H, "aria-expanded", "false"), k(A, J, "true")) : (M(Z, "is-expanded"), k(H, "aria-expanded", "true"), k(A, J, "false"))
                })
            })(F, W, Y), q)) {
                const A = d("table"),
                    Z = d("thead"),
                    H = d("tbody");
                if (ee) {
                    const Q = d("caption");
                    L(Q, "table-caption"),
                    Q.innerHTML = ee,
                    A.appendChild(Q)
                }
                L(A, "section-table"),
                L(Z, "table-head"),
                L(H, "table-body");
                const U = re.headers,
                    ce = de(U),
                    le = e.$e.createDocumentFragment(),
                    be = d("tr");
                for (const Q of ce) {
                    const fe = U[Q],
                        ae = d("th");
                    ae.id = "cc__row-" + fe + B,
                    k(ae, "scope", "col"),
                    L(ae, "table-th"),
                    ae.innerHTML = fe,
                    l(le, ae)
                }
                l(be, le),
                l(Z, be);
                const pe = e.$e.createDocumentFragment();
                for (const Q of G) {
                    const fe = d("tr");
                    L(fe, "table-tr");
                    for (const ae of ce) {
                        const qe = U[ae],
                            _t = Q[ae],
                            ye = d("td"),
                            Fe = d(T);
                        L(ye, "table-td"),
                        k(ye, "data-column", qe),
                        k(ye, "headers", "cc__row-" + qe + B),
                        Fe.insertAdjacentHTML("beforeend", _t),
                        l(ye, Fe),
                        l(fe, ye)
                    }
                    l(pe, fe)
                }
                l(H, pe),
                l(A, Z),
                l(A, H),
                l(F, A)
            }
            (O || x) && l(W, F);
            const Ct = e.Pe || e.Je;
            I ? (y || (y = d(T), L(y, "section-toggles")), y.appendChild(W)) : y = null,
            l(Ct, y || W)
        }),
        r && (e.ze || (e.ze = d(X), L(e.ze, "btn"), k(e.ze, me, "all"), l(_, e.ze), D(e.ze, N, () => i("all"))), e.ze.innerHTML = r),
        p && (e.je || (e.je = d(X), L(e.je, "btn"), k(e.je, me, "necessary"), l(_, e.je), D(e.je, N, () => i([]))), e.je.innerHTML = p),
        b && (e.qe || (e.qe = d(X), L(e.qe, "btn"), L(e.qe, "btn--secondary"), k(e.qe, me, "save"), l(S, e.qe), D(e.qe, N, () => i())), e.qe.innerHTML = b),
        e.Pe && (e.we.replaceChild(e.Pe, e.Je), e.Je = e.Pe),
        mt(1),
        o.N || (o.N = !0, K(a.re.ue, Ee, e.we), n(t), l(e.Ce, e.Fe), dt(e.we), setTimeout(() => M(e.Fe, "cc--anim"), 100)),
        ut(2)
    };
function Ke(t, n, o, e, f) {
    const h = a.o,
        u = a.ne,
        i = d("label"),
        s = d("input"),
        m = d("span"),
        g = d("span"),
        r = d("span"),
        p = d("span"),
        b = d("span");
    if (p.innerHTML = Ce(1, 3), b.innerHTML = Ce(0, 3), s.type = "checkbox", M(i, "section__toggle-wrapper"), M(s, "section__toggle"), M(p, "toggle__icon-on"), M(b, "toggle__icon-off"), M(m, "toggle__icon"), M(g, "toggle__icon-circle"), M(r, "toggle__label"), k(m, J, "true"), e ? (M(i, "toggle-service"), k(s, Te, f), u.se[f][n] = s) : u.ae[n] = s, e ? (c => {
        D(s, "change", () => {
            const w = u.se[c],
                C = u.ae[c];
            h.Z[c] = [];
            for (let _ in w) {
                const S = w[_];
                S.checked && h.Z[c].push(S.value)
            }
            C.checked = h.Z[c].length > 0
        })
    })(f) : (c => {
        D(s, N, () => {
            const w = u.se[c],
                C = s.checked;
            h.Z[c] = [];
            for (let _ in w)
                w[_].checked = C,
                C && h.Z[c].push(_)
        })
    })(n), s.value = n, r.textContent = t.replace(/<.*>.*<\/.*>/gm, ""), l(g, b), l(g, p), l(m, g), h.D)
        (o.readOnly || o.enabled) && (s.checked = !0);
    else if (e) {
        const c = h.Y[f];
        s.checked = o.readOnly || j(c, n)
    } else
        j(h.R, n) && (s.checked = !0);
    return o.readOnly && (s.disabled = !0), l(i, s), l(i, m), l(i, r), i
}
const Ie = () => {
        const t = d("span");
        return a.ne.Ke || (a.ne.Ke = t), t
    },
    gt = (t, n) => {
        const o = a.o,
            e = a.ne,
            {hide: f, showPreferences: h, acceptCategory: u} = t,
            i = o.u && o.u.consentModal;
        if (!i)
            return;
        const s = i.acceptAllBtn,
            m = i.acceptNecessaryBtn,
            g = i.showPreferencesBtn,
            r = i.closeIconLabel,
            p = i.footer,
            b = i.label,
            c = i.title,
            w = _ => {
                f(),
                u(_)
            };
        if (!e.Qe) {
            e.Qe = d(T),
            e.he = d(T),
            e.We = d(T),
            e.Xe = d(T),
            e.Ye = d(T),
            M(e.Qe, "cm-wrapper"),
            M(e.he, "cm"),
            R(e.We, "body"),
            R(e.Xe, "texts"),
            R(e.Ye, "btns"),
            k(e.he, "role", "dialog"),
            k(e.he, "aria-modal", "true"),
            k(e.he, J, "false"),
            k(e.he, "aria-describedby", "cm__desc"),
            b ? k(e.he, "aria-label", b) : c && k(e.he, "aria-labelledby", "cm__title");
            const _ = "box",
                S = o.i.guiOptions,
                y = S && S.consentModal,
                v = (y && y.layout || _).split(" ")[0] === _;
            c && r && v && (e.Le || (e.Le = d(X), e.Le.innerHTML = Ce(), R(e.Le, "btn"), R(e.Le, "btn--close"), D(e.Le, N, () => {
                w([])
            }), l(e.We, e.Le)), k(e.Le, "aria-label", r)),
            l(e.We, e.Xe),
            (s || m || g) && l(e.We, e.Ye),
            e.be = d(T),
            k(e.be, "tabIndex", -1),
            l(e.he, e.be),
            l(e.he, e.We),
            l(e.Qe, e.he)
        }
        c && (e.Ze || (e.Ze = d("h2"), e.Ze.className = e.Ze.id = "cm__title", l(e.Xe, e.Ze)), e.Ze.innerHTML = c);
        let C = i.description;
        if (C && (o.V && (C = C.replace("{{revisionMessage}}", o.I ? "" : i.revisionMessage || "")), e.et || (e.et = d("p"), e.et.className = e.et.id = "cm__desc", l(e.Xe, e.et)), e.et.innerHTML = C), s && (e.tt || (e.tt = d(X), l(e.tt, Ie()), R(e.tt, "btn"), k(e.tt, me, "all"), D(e.tt, N, () => {
            w("all")
        })), e.tt.firstElementChild.innerHTML = s), m && (e.Ie || (e.Ie = d(X), l(e.Ie, Ie()), R(e.Ie, "btn"), k(e.Ie, me, "necessary"), D(e.Ie, N, () => {
            w([])
        })), e.Ie.firstElementChild.innerHTML = m), g && (e.ot || (e.ot = d(X), l(e.ot, Ie()), R(e.ot, "btn"), R(e.ot, "btn--secondary"), k(e.ot, me, "show"), D(e.ot, "mouseenter", () => {
            o.N || _e(t, n)
        }), D(e.ot, N, h)), e.ot.firstElementChild.innerHTML = g), e.nt || (e.nt = d(T), R(e.nt, ve), s && l(e.nt, e.tt), m && l(e.nt, e.Ie), (s || m) && l(e.We, e.nt), l(e.Ye, e.nt)), e.ot && !e.st && (e.st = d(T), e.Ie && e.tt ? (R(e.st, ve), l(e.st, e.ot), l(e.Ye, e.st)) : (l(e.nt, e.ot), R(e.nt, ve + "--uneven"))), p) {
            if (!e.ct) {
                let _ = d(T),
                    S = d(T);
                e.ct = d(T),
                R(_, "footer"),
                R(S, "links"),
                R(e.ct, "link-group"),
                l(S, e.ct),
                l(_, S),
                l(e.he, _)
            }
            e.ct.innerHTML = p
        }
        mt(0),
        o.T || (o.T = !0, K(a.re.ue, ze, e.he), n(t), l(e.Ce, e.Qe), dt(e.he), setTimeout(() => M(e.Qe, "cc--anim"), 100)),
        ut(1),
        rt(e.We, t, _e, n)
    },
    bt = t => {
        if (!ge(t))
            return null;
        if (t in a.o._)
            return t;
        let n = t.slice(0, 2);
        return n in a.o._ ? n : null
    },
    yt = () => a.o.l || a.o.i.language.default,
    kt = t => {
        t && (a.o.l = t)
    },
    Bt = async t => {
        const n = a.o;
        let o = bt(t) ? t : yt(),
            e = n._[o];
        return ge(e) ? e = await (async f => {
            try {
                return await (await fetch(f)).json()
            } catch (h) {
                return console.error(h), !1
            }
        })(e) : V(e) && (e = await e()), !!e && (n.u = e, kt(o), !0)
    },
    Dt = () => {
        let t = a.o.i.language.rtl,
            n = a.ne.Ce;
        t && n && (xe(t) || (t = [t]), j(t, a.o.l) ? M(n, "cc--rtl") : se(n, "cc--rtl"))
    },
    we = () => {
        const t = a.ne;
        if (t.Ce)
            return;
        t.Ce = d(T),
        t.Ce.id = "cc-main",
        t.Ce.setAttribute("data-nosnippet", ""),
        Dt();
        let n = a.o.i.root;
        n && ge(n) && (n = document.querySelector(n)),
        (n || t.$e.body).appendChild(t.Ce)
    },
    Ht = t => Me(() => localStorage.removeItem(t)),
    Qe = (t, n) => {
        if (n instanceof RegExp)
            return t.filter(o => n.test(o));
        {
            const o = at(t, n);
            return o > -1 ? [t[o]] : []
        }
    },
    Pt = t => {
        const {hostname: n, protocol: o} = location,
            {name: e, path: f, domain: h, sameSite: u, useLocalStorage: i} = a.t.cookie,
            s = 864e5 * St(),
            m = new Date;
        m.setTime(m.getTime() + s),
        a.o.p.expirationTime = m.getTime();
        const g = JSON.stringify(a.o.p);
        let r = e + "=" + encodeURIComponent(g) + (s !== 0 ? "; expires=" + m.toUTCString() : "") + "; Path=" + f + "; SameSite=" + u;
        j(n, ".") && (r += "; Domain=" + h),
        o === "https:" && (r += "; Secure"),
        i ? ((p, b) => {
            Me(() => localStorage.setItem(p, b))
        })(e, g) : document.cookie = r,
        a.o.p
    },
    et = (t, n, o) => {
        if (t.length === 0)
            return;
        const e = o || a.t.cookie.domain,
            f = n || a.t.cookie.path,
            h = e.slice(0, 4) === "www.",
            u = h && e.substring(4),
            i = (s, m) => {
                document.cookie = s + "=; path=" + f + (m ? "; domain=." + m : "") + "; expires=Thu, 01 Jan 1970 00:00:01 GMT;"
            };
        for (const s of t)
            i(s),
            i(s, e),
            h && i(s, u)
    },
    Ot = t => {
        const n = a.t.cookie.name,
            o = a.t.cookie.useLocalStorage;
        return ((f, h) => {
            let u;
            return u = Me(() => JSON.parse(h ? f : decodeURIComponent(f)), !0) || {}, u
        })(o ? (e = n, Me(() => localStorage.getItem(e)) || "") : It(n), o);
        var e
    },
    It = (t, n) => {
        const o = document.cookie.match("(^|;)\\s*" + t + "\\s*=\\s*([^;]+)");
        return o ? o.pop() : ""
    },
    At = t => {
        const n = document.cookie.split(/;\s*/),
            o = [];
        for (const e of n) {
            let f = e.split("=")[0];
            o.push(f)
        }
        return o
    },
    Nt = (t, n=[]) => {
        ((o, e) => {
            const {O: f, R: h, B: u, N: i, Z: s, G: m, X: g} = a.o;
            let r = [];
            if (o) {
                xe(o) ? r.push(...o) : ge(o) && (r = o === "all" ? f : [o]);
                for (const p of f)
                    s[p] = j(r, p) ? de(g[p]) : []
            } else
                r = [...h, ...m],
                i && (r = (() => {
                    const p = a.ne.ae;
                    if (!p)
                        return [];
                    let b = [];
                    for (let c in p)
                        p[c].checked && b.push(c);
                    return b
                })());
            r = r.filter(p => !j(f, p) || !j(e, p)),
            r.push(...u),
            st(r)
        })(t, n),
        (o => {
            const e = a.o,
                {Z: f, B: h, Y: u, X: i, O: s} = e,
                m = s;
            e.te = ie(u);
            for (const g of m) {
                const r = i[g],
                    p = de(r),
                    b = f[g] && f[g].length > 0,
                    c = j(h, g);
                if (p.length !== 0) {
                    if (u[g] = [], c)
                        u[g].push(...p);
                    else if (b) {
                        const w = f[g];
                        u[g].push(...w)
                    } else
                        u[g] = e.Z[g];
                    u[g] = it(u[g])
                }
            }
        })(),
        (() => {
            const o = a.o;
            o.L = a.t.mode === ke && o.D ? He(o.G, o.R) : He(o.R, o.p.categories);
            let e = o.L.length > 0,
                f = !1;
            for (const s of o.O)
                o.ee[s] = He(o.Y[s], o.te[s]),
                o.ee[s].length > 0 && (f = !0);
            const h = a.ne.ae;
            for (const s in h)
                h[s].checked = j(o.R, s);
            for (const s of o.O) {
                const m = a.ne.se[s],
                    g = o.Y[s];
                for (const r in m)
                    m[r].checked = j(g, r)
            }
            o.C || (o.C = new Date),
            o.M || (o.M = ("10000000-1000-4000-8000" + -1e11).replace(/[018]/g, s => (s ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> s / 4).toString(16))),
            o.p = {
                categories: ie(o.R),
                revision: a.t.revision,
                data: o.h,
                consentTimestamp: o.C.toISOString(),
                consentId: o.M,
                services: ie(o.Y)
            };
            let u = !1;
            const i = e || f;
            (o.D || i) && (o.D && (o.D = !1, u = !0), o.S = o.S ? new Date : o.C, o.p.lastConsentTimestamp = o.S.toISOString(), Pt(), a.t.autoClearCookies && (u || i) && (s => {
                const m = a.o,
                    g = At(),
                    r = (p => {
                        const b = a.o;
                        return (p ? b.O : b.L).filter(c => {
                            const w = b.P[c];
                            return !!w && !w.readOnly && !!w.autoClear
                        })
                    })(s);
                for (const p in m.ee)
                    for (const b of m.ee[p]) {
                        const c = m.X[p][b].cookies;
                        if (!j(m.Y[p], b) && c)
                            for (const w of c) {
                                const C = Qe(g, w.name);
                                et(C, w.path, w.domain)
                            }
                    }
                for (const p of r) {
                    const b = m.P[p].autoClear,
                        c = b && b.cookies || [],
                        w = j(m.L, p),
                        C = !j(m.R, p),
                        _ = w && C;
                    if (s ? C : _) {
                        b.reloadPage && _ && (m.j = !0);
                        for (const S of c) {
                            const y = Qe(g, S.name);
                            et(y, S.path, S.domain)
                        }
                    }
                }
            })(u), Ne()),
            u && (K(a.re.ie), K(a.re.le), a.t.mode === tt) || (i && K(a.re.de), o.j && (o.j = !1, location.reload()))
        })()
    },
    Rt = t => {
        const n = a.o.D ? [] : a.o.R;
        return j(n, t)
    },
    zt = (t, n) => {
        const o = a.o.D ? [] : a.o.Y[n] || [];
        return j(o, t)
    },
    vt = t => {
        const {ne: n, o} = a;
        if (!o.k) {
            if (!o.T) {
                if (!t)
                    return;
                gt(Ze, we)
            }
            o.k = !0,
            o.U = je(),
            o.v && lt(!0),
            ct(n.he, 1),
            M(n.ye, ot),
            k(n.he, J, "false"),
            setTimeout(() => {
                $(a.ne.be)
            }, 100),
            K(a.re.fe, ze)
        }
    },
    Et = () => {
        const {ne: t, o: n, re: o} = a;
        n.k && (n.k = !1, n.v && lt(), $(t.Ke, !0), se(t.ye, ot), k(t.he, J, "true"), $(n.U), n.U = null, K(o._e, ze))
    },
    Ut = () => {
        const t = a.o;
        t.A || (t.N || _e(Ze, we), t.A = !0, t.k ? t.$ = je() : t.U = je(), ct(a.ne.we, 2), M(a.ne.ye, nt), k(a.ne.we, J, "false"), setTimeout(() => {
            $(a.ne.ve)
        }, 100), K(a.re.fe, Ee))
    },
    Yt = () => {
        const t = a.o;
        t.A && (t.A = !1, (() => {
            const n = wt(),
                o = a.o.P,
                e = a.ne.ae,
                f = a.ne.se,
                h = u => j(a.o.G, u);
            for (const u in e) {
                const i = !!o[u].readOnly;
                e[u].checked = i || (n ? Rt(u) : h(u));
                for (const s in f[u])
                    f[u][s].checked = i || (n ? zt(s, u) : h(u))
            }
        })(), $(a.ne.Ge, !0), se(a.ne.ye, nt), k(a.ne.we, J, "true"), t.k ? ($(t.$), t.$ = null) : ($(t.U), t.U = null), K(a.re._e, Ee))
    };
var Ze = {
    show: vt,
    hide: Et,
    showPreferences: Ut,
    hidePreferences: Yt,
    acceptCategory: Nt
};
const wt = () => !a.o.D,
    Zt = async t => {
        const {o: n, t: o, re: e} = a,
            f = window;
        if (!f._ccRun) {
            if (f._ccRun = !0, (i => {
                const {ne: s, t: m, o: g} = a,
                    r = m,
                    p = g,
                    {cookie: b} = r,
                    c = a.ce,
                    w = i.cookie,
                    C = i.categories,
                    _ = de(C) || [],
                    S = navigator,
                    y = document;
                s.$e = y,
                s.ye = y.documentElement,
                b.domain = location.hostname,
                p.i = i,
                p.P = C,
                p.O = _,
                p._ = i.language.translations,
                p.v = !!i.disablePageInteraction,
                c.ie = i.onFirstConsent,
                c.le = i.onConsent,
                c.de = i.onChange,
                c._e = i.onModalHide,
                c.fe = i.onModalShow,
                c.ue = i.onModalReady;
                const {mode: v, autoShow: B, lazyHtmlGeneration: P, autoClearCookies: x, revision: z, manageScriptTags: ue, hideFromBots: re} = i;
                v === ke && (r.mode = v),
                typeof x == "boolean" && (r.autoClearCookies = x),
                typeof ue == "boolean" && (r.manageScriptTags = ue),
                typeof z == "number" && z >= 0 && (r.revision = z, p.V = !0),
                typeof B == "boolean" && (r.autoShow = B),
                typeof P == "boolean" && (r.lazyHtmlGeneration = P),
                re === !1 && (r.hideFromBots = !1),
                r.hideFromBots === !0 && S && (p.J = S.userAgent && /bot|crawl|spider|slurp|teoma/i.test(S.userAgent) || S.webdriver),
                Ae(w) && (r.cookie = {
                    ...b,
                    ...w
                }),
                r.autoClearCookies,
                p.V,
                r.manageScriptTags,
                (G => {
                    const {P: ee, X: q, Y: I, Z: E, B: te} = a.o;
                    for (let O of G) {
                        const W = ee[O],
                            F = W.services || {},
                            oe = Ae(F) && de(F) || [];
                        q[O] = {},
                        I[O] = [],
                        E[O] = [],
                        W.readOnly && (te.push(O), I[O] = oe),
                        a.ne.se[O] = {};
                        for (let ne of oe) {
                            const Y = F[ne];
                            Y.Se = !1,
                            q[O][ne] = Y
                        }
                    }
                })(_),
                (() => {
                    if (!a.t.manageScriptTags)
                        return;
                    const G = a.o,
                        ee = Ue(document, "script[" + Te + "]");
                    for (const q of ee) {
                        let I = Le(q, Te),
                            E = q.dataset.service || "",
                            te = !1;
                        if (I && I.charAt(0) === "!" && (I = I.slice(1), te = !0), E.charAt(0) === "!" && (E = E.slice(1), te = !0), j(G.O, I) && (G.oe.push({
                            Me: q,
                            xe: !1,
                            ke: te,
                            De: I,
                            Te: E
                        }), E)) {
                            const O = G.X[I];
                            O[E] || (O[E] = {
                                Se: !1
                            })
                        }
                    }
                })(),
                kt((() => {
                    const G = a.o.i.language.autoDetect;
                    if (G) {
                        const ee = {
                                browser: navigator.language,
                                document: document.documentElement.lang
                            },
                            q = bt(ee[G]);
                        if (q)
                            return q
                    }
                    return yt()
                })())
            })(t), n.J)
                return;
            (() => {
                const i = a.o,
                    s = a.t,
                    m = Ot(),
                    {categories: g, services: r, consentId: p, consentTimestamp: b, lastConsentTimestamp: c, data: w, revision: C} = m,
                    _ = xe(g);
                i.p = m,
                i.M = p;
                const S = !!p && ge(p);
                i.C = b,
                i.C && (i.C = new Date(b)),
                i.S = c,
                i.S && (i.S = new Date(c)),
                i.h = w !== void 0 ? w : null,
                i.V && S && C !== s.revision && (i.I = !1),
                i.D = !(S && i.I && i.C && i.S && _),
                s.cookie.useLocalStorage && !i.D && (i.D = new Date().getTime() > (m.expirationTime || 0), i.D && Ht(s.cookie.name)),
                i.D,
                (() => {
                    const y = a.o;
                    for (const v of y.O) {
                        const B = y.P[v];
                        if (B.readOnly || B.enabled) {
                            y.G.push(v);
                            const P = y.X[v] || {};
                            for (let x in P)
                                y.Z[v].push(x),
                                y.i.mode === ke && y.Y[v].push(x)
                        }
                    }
                })(),
                i.D ? s.mode === ke && (i.R = [...i.G]) : (i.Z = {
                    ...i.Y
                }, i.Y = {
                    ...i.Y,
                    ...r
                }, st([...i.B, ...g]))
            })();
            const u = wt();
            if (!await Bt())
                return !1;
            if (rt(null, h = Ze, _e, we), a.o.D && gt(h, we), a.t.lazyHtmlGeneration || _e(h, we), o.autoShow && !u && vt(!0), u)
                return Ne(), K(e.le);
            o.mode === ke && Ne(n.G)
        }
        var h
    };
Zt({
    guiOptions: {
        consentModal: {
            layout: "box wide",
            position: "bottom right",
            equalWeightButtons: !0,
            flipButtons: !1
        },
        preferencesModal: {
            layout: "box",
            position: "right",
            equalWeightButtons: !1,
            flipButtons: !1
        }
    },
    categories: {
        necessary: {
            readOnly: !0
        },
        analytics: {}
    },
    language: {
        default: "en",
        translations: {
            en: {
                consentModal: {
                    description: "This website uses cookies.",
                    acceptAllBtn: "Allow",
                    showPreferencesBtn: "Manage"
                },
                preferencesModal: {
                    title: "Consent Preferences Center",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Reject all",
                    savePreferencesBtn: "Save preferences",
                    closeIconLabel: "Close modal",
                    sections: [{
                        title: "Cookie Usage",
                        description: "We use cookies to make using our website reliable and secure. Necessary cookies are always active in order for our website to function properly. With your permission, we use optional cookies to analyze your behavior on our website. By using our website, you agree to our <a href='/privacy/en'>Privacy Policy.</a>"
                    }, {
                        title: 'Strictly Necessary Cookies <span class="pm__badge">Always Enabled</span>',
                        description: "These cookies are necessary for the operation of the website and cannot be turned off. They are usually only stored in response to your actions that constitute a request for services, such as changing privacy settings, logging in or filling out forms. You can set your browser to block these cookies or notify you about them, but some parts of the website will not work because of this. No personal data is stored in these cookies.",
                        linkedCategory: "necessary"
                    }, {
                        title: "Analytics Cookies",
                        description: "By anonymously collecting and sending data, analytical cookies provide insight into the way visitors use our pages.",
                        linkedCategory: "analytics"
                    }]
                }
            },
            hr: {
                consentModal: {
                    title: "Ova web stranica koristi kolačiće.",
                    acceptAllBtn: "Dopusti",
                    showPreferencesBtn: "Prilagodi"
                },
                preferencesModal: {
                    title: "Postavke kolačića",
                    acceptAllBtn: "Prihvati sve",
                    acceptNecessaryBtn: "Prihvati nužne",
                    savePreferencesBtn: "Spremi postavke",
                    closeIconLabel: "Zatvori prozor",
                    sections: [{
                        title: "Korištenje kolačića",
                        description: "Koristimo kolačiće kako bi korištenje naše web stranice bilo pouzdano i sigurno. Neophodni kolačići uvijek su aktivni kako bi naša web stranica ispravno funkcionirala. Uz vaše dopuštenje, koristimo neobavezne kolačiće kako bismo analizirali vaše ponašanje na našoj web stranici. Korištenjem naše web stranice slažete se s našim <a href='/privacy'>pravilima privatnosti</a>"
                    }, {
                        title: 'Neophodni kolačići<span class="pm__badge">Uvijek aktivni</span>',
                        description: "Ti su kolačići nužni za rad internetske stranice i nije ih moguće isključiti. Oni se obično pohranjuju samo kao odgovor na vaše radnje koje predstavljaju zahtjev za uslugama, kao što su promjene postavki privatnosti, prijava ili ispunjavanje obrazaca. Možete postaviti svoj preglednik tako da blokira te kolačiće ili vas obavještava o njima, ali neki dijelovi internetske stranice zbog toga neće raditi. U tim se kolačićima ne pohranjuju osobni podaci.",
                        linkedCategory: "necessary"
                    }, {
                        title: "Analitički kolačići",
                        description: "Analitički kolačići anonimnim prikupljanjem i slanjem podataka pružaju uvid u način na koji posjetitelji koriste naše stranice.",
                        linkedCategory: "analytics"
                    }]
                }
            }
        },
        autoDetect: "document"
    }
});
