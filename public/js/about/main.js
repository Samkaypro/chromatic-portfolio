Ie = ({
    reverseOrder: g,
    position: _ = "top-center",
    toastOptions: b,
    gutter: F,
    children: U,
    containerStyle: Y,
    containerClassName: Q
}) => {
    let {
        toasts: er,
        handlers: ei
    } = D(b);
    return em.createElement("div", {
        style: {
            position: "fixed",
            zIndex: 9999,
            top: 16,
            left: 16,
            right: 16,
            bottom: 16,
            pointerEvents: "none",
            ...Y
        },
        className: Q,
        onMouseEnter: ei.startPause,
        onMouseLeave: ei.endPause
    }, er.map(b => {
        let Y = b.position || _,
            Q = Re(Y, ei.calculateOffset(b, {
                reverseOrder: g,
                gutter: F,
                defaultPosition: _
            }));
        return em.createElement(Ee, {
            id: b.id,
            key: b.id,
            onHeightUpdate: ei.updateHeight,
            className: b.visible ? nl : "",
            style: Q
        }, "custom" === b.type ? T(b.message, b) : U ? U(b) : em.createElement(ns, {
            toast: b,
            position: Y
        }))
    }))
}, nu = b(86144);

function ToastContainer() {
    return (0, er.jsx)(Ie, {
        position: "bottom-right",
        containerStyle: {
            top: 32,
            right: 32,
            left: 32,
            bottom: 32
        },
        toastOptions: {
            className: "py-8 px-12 color-body",
            style: {
                boxShadow: "0 8px 64px rgb(0 0 0 / 18%)"
            },
            success: {
                icon: (0, er.jsx)(nu.ZP.Badge, {})
            },
            error: {
                icon: (0, er.jsx)(nu.ZP.BadgeError, {})
            }
        }
    })
}
b(82187);
var hooks_useUTMCookie = function() {
    let [g, _] = (0, em.useState)(!1);
    (0, em.useEffect)(() => {
        if (!g) {
            let g = new URL(window.location.href),
                b = new URLSearchParams(g.search),
                F = parseReferrer(document.referrer),
                U = "";
            b.forEach((g, _) => {
                "utm_" === _.substring(0, 4) && (U += "".concat(_, "=").concat(g, "&"))
            }), 0 == U.length && (U += "utm_source=direct&utm_medium=direct&utm_campaign=direct&utm_term=direct&utm_content=direct"), F && (U += "&referrer=".concat(F.hostname + F.pathname)), encodeAndSetCookie(U), _(!0)
        }
    });
    let encodeAndSetCookie = g => {
            let _ = btoa(g);
            ef.Z.set("evervault_utm", _, {
                expires: 14,
                domain: ".evervault.com",
                sameSite: "lax",
                secure: !0
            })
        },
        parseReferrer = g => {
            try {
                return new URL(g)
            } catch (g) {
                return
            }
        }
};
let nc = eh()(() => b.e(3413).then(b.bind(b, 87443)), {
        loadableGenerated: {
            webpack: () => [87443]
        },
        ssr: !1
    }),
    nd = '\n  :root {\n    --system-fonts: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue";\n    --font-family-base: '.concat(eo().style.fontFamily, ", var(--system-fonts);\n    --font-family-headings: ").concat(es().style.fontFamily, ", var(--system-fonts);\n    --font-family-monospace: ").concat(eu().style.fontFamily, ", monospace;\n  }\n");

function MyApp(g) {
    let {
        Component: _,
        pageProps: b
    } = g, {
        events: F,
        query: U
    } = (0, ex.useRouter)();
    hooks_useUTMCookie();
    let [Y, Q] = (0, em.useState)(ef.Z.get("cookie-directive"));
    return (0, er.jsx)(PlausibleProvider, {
        domain: "evervault.com",
        trackOutboundLinks: !0,
        enabled: !Y || "accepted" === Y,
        children: (0, er.jsxs)(IntercomProvider, {
            autoBoot: !0,
            appId: "dgsq17jc",
            shouldInitialize: !Y || "accepted" === Y,
            children: [(0, er.jsx)(ed(), {
                id: nd.__hash,
                children: nd
            }), (0, er.jsx)(ew.Zf, {
                hidden: !(null == U ? void 0 : U.debug)
            }), (0, er.jsxs)(tx.Z, {
                children: [(0, er.jsx)(ToastContainer, {}), (0, er.jsx)(Header, {
                    lightTheme: "light" === b.header
                }), (0, er.jsx)(eR.Z, {
                    enabled: !Y || "accepted" === Y
                }), (0, er.jsx)(_, { ...b,
                    className: b && null != b.className && b.className || ""
                }), (0, er.jsx)(nc, {
                    cookieDirective: Y,
                    setCookieDirective: Q
                }), (0, er.jsx)(Footer, {})]
            })]
        })
    })
}
}, 76731: function() {}, 73863: function() {}, 7299: function() {}, 16467: function(g) {
        g.exports = {
            style: {
                fontFamily: "'__Inter_aaf875', '__Inter_Fallback_aaf875'",
                fontStyle: "normal"
            },
            className: "__className_aaf875"
        }
    }, 97871: function(g) {
        g.exports = {
            style: {
                fontFamily: "'__Roboto_Mono_c9cbed', '__Roboto_Mono_Fallback_c9cbed'",
                fontStyle: "normal"
            },
            className: "__className_c9cbed"
        }
    }, 23638: function(g) {
        g.exports = {
            style: {
                fontFamily: "'__roobert_30c87b', '__roobert_Fallback_30c87b'"
            },
            className: "__className_30c87b"
        }
    }, 19357: function(g) {
        g.exports = {
            container: "Button_container__i_Vit",
            pulse: "Button_pulse__XxOVu"
        }
    }, 52855: function(g) {
        g.exports = {
            footer: "Footer_footer__o4_Ec",
            container: "Footer_container__Mn8SS container",
            navigation: "Footer_navigation__Yj_7L",
            list: "Footer_list__FsWR4",
            logo: "Footer_logo__ZNv_V",
            copyright: "Footer_copyright__sqw0C",
            copyrightContent: "Footer_copyrightContent__aDxfB container",
            status: "Footer_status__X2ZDd",
            copyrightBreak: "Footer_copyrightBreak__yeGun",
            complianceLink: "Footer_complianceLink__QDmX8"
        }
    }, 26718: function(g) {
        g.exports = {
            header: "Header_header__pXml_",
            logo: "Header_logo__sUWiP",
            hamburger: "Header_hamburger__X_hhy",
            logoMobile: "Header_logoMobile__MEikt",
            group: "Header_group__Kgpdq",
            animatedLink: "Header_animatedLink__Jb4dS",
            pill: "Header_pill__gpeGd"
        }
    }, 25219: function(g) {
        g.exports = {
            navigation: "Navigation_navigation__SaCR1",
            island: "Navigation_island__hx7CL",
            navbar: "Navigation_navbar__drXfa",
            item: "Navigation_item__hApMP",
            link: "Navigation_link__p_0Vi",
            trigger: "Navigation_trigger__w4v0H",
            dropdownLinks: "Navigation_dropdownLinks__kvtQ6",
            dropdownLink: "Navigation_dropdownLink__QeIWf",
            dropdownLinkIcon: "Navigation_dropdownLinkIcon__mfQHc",
            dropdownLinkArrow: "Navigation_dropdownLinkArrow__5heV6",
            dropdownLinkLabels: "Navigation_dropdownLinkLabels__y3Lqa",
            getStarted: "Navigation_getStarted__oTfVF",
            getStartedInner: "Navigation_getStartedInner__UDW_u",
            indicator: "Navigation_indicator__Ob8wz",
            fadeIn: "Navigation_fadeIn__5QaHZ",
            slideUp: "Navigation_slideUp__N348C",
            fadeOut: "Navigation_fadeOut__j_QRy",
            slideDown: "Navigation_slideDown__YJLBl",
            arrow: "Navigation_arrow__U08Kx",
            viewportPosition: "Navigation_viewportPosition__zEjBF",
            viewport: "Navigation_viewport__H3qwm",
            scaleIn: "Navigation_scaleIn__4neZY",
            scaleOut: "Navigation_scaleOut___jlp_",
            content: "Navigation_content__raRlm",
            enterFromLeft: "Navigation_enterFromLeft__Z5U4F",
            enterFromRight: "Navigation_enterFromRight__YaDeo",
            exitToLeft: "Navigation_exitToLeft__m_zSP",
            exitToRight: "Navigation_exitToRight__JodW_",
            navigationMobile: "Navigation_navigationMobile__SOXkZ",
            navigationItemMobile: "Navigation_navigationItemMobile__NwoRk",
            mobileDropdown: "Navigation_mobileDropdown__xMTIT",
            pill: "Navigation_pill__VH1um",
            useCasesMenuMobile: "Navigation_useCasesMenuMobile__3c1eV"
        }
    }, 52505: function(g) {
        g.exports = {
            container: "Input_container__FmRsd",
            input: "Input_input__MPP3N"
        }
    }, 78005: function(g) {
        g.exports = {
            container: "SalesForm_container__nWFvZ Text_light__lmRM0",
            overlay: "SalesForm_overlay__PzQ3I",
            panel: "SalesForm_panel__u87e3",
            closeButton: "SalesForm_closeButton__t_2rh",
            isLoadingOverlay: "SalesForm_isLoadingOverlay__laWHS",
            isFinishedOverlay: "SalesForm_isFinishedOverlay__6Xe66"
        }
    }, 91380: function(g) {
        g.exports = {
            container: "Select_container__Pe9g7",
            inputContainer: "Select_inputContainer__SO4Cv",
            selected: "Select_selected__2Tdrk",
            dropdown: "Select_dropdown__9JnWh",
            option: "Select_option__SgkOW",
            input: "Select_input__AJ7K2",
            carat: "Select_carat__mu09V",
            countryCodePlaceholder: "Select_countryCodePlaceholder__nwgSn"
        }
    }, 36941: function(g) {
        g.exports = {
            container: "TextInput_container__OsOWL",
            input: "TextInput_input__2ayV_"
        }
    }, 51449: function(g, _, b) {
        g.exports = b(42982)
    }, 47920: function(g, _, b) {
        g.exports = b(58149)
    }, 75410: function(g, _, b) {
        g.exports = b(68169)
    }, 47048: function(g, _, b) {
        g.exports = b(89273)
    }, 14224: function(g) {
        var _, b, F, U = g.exports = {};

        function defaultSetTimout() {
            throw Error("setTimeout has not been defined")
        }

        function defaultClearTimeout() {
            throw Error("clearTimeout has not been defined")
        }

        function runTimeout(g) {
            if (_ === setTimeout) return setTimeout(g, 0);
            if ((_ === defaultSetTimout || !_) && setTimeout) return _ = setTimeout, setTimeout(g, 0);
            try {
                return _(g, 0)
            } catch (b) {
                try {
                    return _.call(null, g, 0)
                } catch (b) {
                    return _.call(this, g, 0)
                }
            }
        }! function() {
            try {
                _ = "function" == typeof setTimeout ? setTimeout : defaultSetTimout
            } catch (g) {
                _ = defaultSetTimout
            }
            try {
                b = "function" == typeof clearTimeout ? clearTimeout : defaultClearTimeout
            } catch (g) {
                b = defaultClearTimeout
            }
        }();
        var Y = [],
            Q = !1,
            er = -1;

        function cleanUpNextTick() {
            Q && F && (Q = !1, F.length ? Y = F.concat(Y) : er = -1, Y.length && drainQueue())
        }

        function drainQueue() {
            if (!Q) {
                var g = runTimeout(cleanUpNextTick);
                Q = !0;
                for (var _ = Y.length; _;) {
                    for (F = Y, Y = []; ++er < _;) F && F[er].run();
                    er = -1, _ = Y.length
                }
                F = null, Q = !1,
                    function(g) {
                        if (b === clearTimeout) return clearTimeout(g);
                        if ((b === defaultClearTimeout || !b) && clearTimeout) return b = clearTimeout, clearTimeout(g);
                        try {
                            b(g)
                        } catch (_) {
                            try {
                                return b.call(null, g)
                            } catch (_) {
                                return b.call(this, g)
                            }
                        }
                    }(g)
            }
        }

        function Item(g, _) {
            this.fun = g, this.array = _
        }

        function noop() {}
        U.nextTick = function(g) {
            var _ = Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var b = 1; b < arguments.length; b++) _[b - 1] = arguments[b];
            Y.push(new Item(g, _)), 1 !== Y.length || Q || runTimeout(drainQueue)
        }, Item.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, U.title = "browser", U.browser = !0, U.env = {}, U.argv = [], U.version = "", U.versions = {}, U.on = noop, U.addListener = noop, U.once = noop, U.off = noop, U.removeListener = noop, U.removeAllListeners = noop, U.emit = noop, U.prependListener = noop, U.prependOnceListener = noop, U.listeners = function(g) {
            return []
        }, U.binding = function(g) {
            throw Error("process.binding is not supported")
        }, U.cwd = function() {
            return "/"
        }, U.chdir = function(g) {
            throw Error("process.chdir is not supported")
        }, U.umask = function() {
            return 0
        }
    }, 74049: function(g, _, b) {
        "use strict";
        var F = b(36257);

        function emptyFunction() {}

        function emptyFunctionWithReset() {}
        emptyFunctionWithReset.resetWarningCache = emptyFunction, g.exports = function() {
            function shim(g, _, b, U, Y, Q) {
                if (Q !== F) {
                    var er = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                    throw er.name = "Invariant Violation", er
                }
            }

            function getShim() {
                return shim
            }
            shim.isRequired = shim;
            var g = {
                array: shim,
                bigint: shim,
                bool: shim,
                func: shim,
                number: shim,
                object: shim,
                string: shim,
                symbol: shim,
                any: shim,
                arrayOf: getShim,
                element: shim,
                elementType: shim,
                instanceOf: getShim,
                node: shim,
                objectOf: getShim,
                oneOf: getShim,
                oneOfType: getShim,
                shape: getShim,
                exact: getShim,
                checkPropTypes: emptyFunctionWithReset,
                resetWarningCache: emptyFunction
            };
            return g.PropTypes = g, g
        }
    }, 40507: function(g, _, b) {
        g.exports = b(74049)()
    }, 36257: function(g) {
        "use strict";
        g.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    }, 78930: function(g, _, b) {
        "use strict";
        /*!
         * set-value <https://github.com/jonschlinkert/set-value>
























        let eZ = "NavigationMenu",
    [eX, eJ, eQ] = (0, eU.B)(eZ),
    [e0, e1, e2] = (0, eU.B)(eZ),
    [e3, e5] = (0, eI.b)(eZ, [eQ, e2]),
    [e6, e8] = e3(eZ),
    [e4, e9] = e3(eZ),
    e7 = (0, em.forwardRef)((g, _) => {
        let {
            __scopeNavigationMenu: b,
            value: F,
            onValueChange: U,
            defaultValue: Y,
            delayDuration: Q = 200,
            skipDelayDuration: er = 300,
            orientation: ei = "horizontal",
            dir: eo,
            ...ea
        } = g, [es, el] = (0, em.useState)(null), eu = (0, eN.e)(_, g => el(g)), ec = (0, eM.gm)(eo), ed = (0, em.useRef)(0), ef = (0, em.useRef)(0), ep = (0, em.useRef)(0), [eh, eg] = (0, em.useState)(!0), [e_ = "", ev] = (0, eL.T)({
            prop: F,
            onChange: g => {
                let _ = "" !== g,
                    b = er > 0;
                _ ? (window.clearTimeout(ep.current), b && eg(!1)) : (window.clearTimeout(ep.current), ep.current = window.setTimeout(() => eg(!0), er)), null == U || U(g)
            },
            defaultProp: Y
        }), ey = (0, em.useCallback)(() => {
            window.clearTimeout(ef.current), ef.current = window.setTimeout(() => ev(""), 150)
        }, [ev]), eb = (0, em.useCallback)(g => {
            window.clearTimeout(ef.current), ev(g)
        }, [ev]), ex = (0, em.useCallback)(g => {
            let _ = e_ === g;
            _ ? window.clearTimeout(ef.current) : ed.current = window.setTimeout(() => {
                window.clearTimeout(ef.current), ev(g)
            }, Q)
        }, [e_, ev, Q]);
        return (0, em.useEffect)(() => () => {
            window.clearTimeout(ed.current), window.clearTimeout(ef.current), window.clearTimeout(ep.current)
        }, []), (0, em.createElement)($322c88a641701f3b$var$NavigationMenuProvider, {
            scope: b,
            isRootMenu: !0,
            value: e_,
            dir: ec,
            orientation: ei,
            rootNavigationMenu: es,
            onTriggerEnter: g => {
                window.clearTimeout(ed.current), eh ? ex(g) : eb(g)
            },
            onTriggerLeave: () => {
                window.clearTimeout(ed.current), ey()
            },
            onContentEnter: () => window.clearTimeout(ef.current),
            onContentLeave: ey,
            onItemSelect: g => {
                ev(_ => _ === g ? "" : g)
            },
            onItemDismiss: () => ev("")
        }, (0, em.createElement)(eB.WV.nav, (0, eD.Z)({
            "aria-label": "Main",
            "data-orientation": ei,
            dir: ec
        }, ea, {
            ref: eu
        })))
    }),
    $322c88a641701f3b$var$NavigationMenuProvider = g => {
        let {
            scope: _,
            isRootMenu: b,
            rootNavigationMenu: F,
            dir: U,
            orientation: Y,
            children: Q,
            value: er,
            onItemSelect: ei,
            onItemDismiss: eo,
            onTriggerEnter: ea,
            onTriggerLeave: es,
            onContentEnter: el,
            onContentLeave: eu
        } = g, [ec, ed] = (0, em.useState)(null), [ef, ep] = (0, em.useState)(new Map), [eh, eg] = (0, em.useState)(null);
        return (0, em.createElement)(e6, {
            scope: _,
            isRootMenu: b,
            rootNavigationMenu: F,
            value: er,
            previousValue: function(g) {
                let _ = (0, em.useRef)({
                    value: g,
                    previous: g
                });
                return (0, em.useMemo)(() => (_.current.value !== g && (_.current.previous = _.current.value, _.current.value = g), _.current.previous), [g])
            }(er),
            baseId: (0, eV.M)(),
            dir: U,
            orientation: Y,
            viewport: ec,
            onViewportChange: ed,
            indicatorTrack: eh,
            onIndicatorTrackChange: eg,
            onTriggerEnter: (0, ez.W)(ea),
            onTriggerLeave: (0, ez.W)(es),
            onContentEnter: (0, ez.W)(el),
            onContentLeave: (0, ez.W)(eu),
            onItemSelect: (0, ez.W)(ei),
            onItemDismiss: (0, ez.W)(eo),
            onViewportContentChange: (0, em.useCallback)((g, _) => {
                ep(b => (b.set(g, _), new Map(b)))
            }, []),
            onViewportContentRemove: (0, em.useCallback)(g => {
                ep(_ => _.has(g) ? (_.delete(g), new Map(_)) : _)
            }, [])
        }, (0, em.createElement)(eX.Provider, {
            scope: _
        }, (0, em.createElement)(e4, {
            scope: _,
            items: ef
        }, Q)))
    },
    te = (0, em.forwardRef)((g, _) => {
        let {
            __scopeNavigationMenu: b,
            ...F
        } = g, U = e8("NavigationMenuList", b), Y = (0, em.createElement)(eB.WV.ul, (0, eD.Z)({
            "data-orientation": U.orientation
        }, F, {
            ref: _
        }));
        return (0, em.createElement)(eB.WV.div, {
            style: {
                position: "relative"
            },
            ref: U.onIndicatorTrackChange
        }, (0, em.createElement)(eX.Slot, {
            scope: b
        }, U.isRootMenu ? (0, em.createElement)(tv, {
            asChild: !0
        }, Y) : Y))
    }),
    [tt, ti] = e3("NavigationMenuItem"),
    to = (0, em.forwardRef)((g, _) => {
        let {
            __scopeNavigationMenu: b,
            value: F,
            ...U
        } = g, Y = (0, eV.M)(), Q = (0, em.useRef)(null), er = (0, em.useRef)(null), ei = (0, em.useRef)(null), eo = (0, em.useRef)(() => {}), ea = (0, em.useRef)(!1), es = (0, em.useCallback)((g = "start") => {
            if (Q.current) {
                eo.current();
                let _ = $322c88a641701f3b$var$getTabbableCandidates(Q.current);
                _.length && $322c88a641701f3b$var$focusFirst("start" === g ? _ : _.reverse())
            }
        }, []), el = (0, em.useCallback)(() => {
            if (Q.current) {
                let g = $322c88a641701f3b$var$getTabbableCandidates(Q.current);
                g.length && (eo.current = (g.forEach(g => {
                    g.dataset.tabindex = g.getAttribute("tabindex") || "", g.setAttribute("tabindex", "-1")
                }), () => {
                    g.forEach(g => {
                        let _ = g.dataset.tabindex;
                        g.setAttribute("tabindex", _)
                    })
                }))
            }
        }, []);
        return (0, em.createElement)(tt, {
            scope: b,
            value: F || Y || "LEGACY_REACT_AUTO_VALUE",
            triggerRef: er,
            contentRef: Q,
            focusProxyRef: ei,
            wasEscapeCloseRef: ea,
            onEntryKeyDown: es,
            onFocusProxyEnter: es,
            onRootContentClose: el,
            onContentFocusOutside: el
        }, (0, em.createElement)(eB.WV.li, (0, eD.Z)({}, U, {
            ref: _
        })))
    }),
    ta = "NavigationMenuTrigger",
    ts = (0, em.forwardRef)((g, _) => {
        let {
            __scopeNavigationMenu: b,
            disabled: F,
            ...U
        } = g, Y = e8(ta, g.__scopeNavigationMenu), Q = ti(ta, g.__scopeNavigationMenu), er = (0, em.useRef)(null), ei = (0, eN.e)(er, Q.triggerRef, _), eo = $322c88a641701f3b$var$makeTriggerId(Y.baseId, Q.value), ea = $322c88a641701f3b$var$makeContentId(Y.baseId, Q.value), es = (0, em.useRef)(!1), el = (0, em.useRef)(!1), eu = Q.value === Y.value;
        return (0, em.createElement)(em.Fragment, null, (0, em.createElement)(eX.ItemSlot, {
            scope: b,
            value: Q.value
        }, (0, em.createElement)(tb, {
            asChild: !0
        }, (0, em.createElement)(eB.WV.button, (0, eD.Z)({
            id: eo,
            disabled: F,
            "data-disabled": F ? "" : void 0,
            "data-state": $322c88a641701f3b$var$getOpenState(eu),
            "aria-expanded": eu,
            "aria-controls": ea
        }, U, {
            ref: ei,
            onPointerEnter: (0, e$.M)(g.onPointerEnter, () => {
                el.current = !1, Q.wasEscapeCloseRef.current = !1
            }),
            onPointerMove: (0, e$.M)(g.onPointerMove, $322c88a641701f3b$var$whenMouse(() => {
                F || el.current || Q.wasEscapeCloseRef.current || es.current || (Y.onTriggerEnter(Q.value), es.current = !0)
            })),
            onPointerLeave: (0, e$.M)(g.onPointerLeave, $322c88a641701f3b$var$whenMouse(() => {
                F || (Y.onTriggerLeave(), es.current = !1)
            })),
            onClick: (0, e$.M)(g.onClick, () => {
                Y.onItemSelect(Q.value), el.current = eu
            }),
            onKeyDown: (0, e$.M)(g.onKeyDown, g => {
                let _ = "rtl" === Y.dir ? "ArrowLeft" : "ArrowRight",
                    b = {
                        horizontal: "ArrowDown",
                        vertical: _
                    }[Y.orientation];
                eu && g.key === b && (Q.onEntryKeyDown(), g.preventDefault())
            })
        })))), eu && (0, em.createElement)(em.Fragment, null, (0, em.createElement)(eK.f, {
            "aria-hidden": !0,
            tabIndex: 0,
            ref: Q.focusProxyRef,
            onFocus: g => {
                let _ = Q.contentRef.current,
                    b = g.relatedTarget,
                    F = b === er.current,
                    U = null == _ ? void 0 : _.contains(b);
                (F || !U) && Q.onFocusProxyEnter(F ? "start" : "end")
            }
        }), Y.viewport && (0, em.createElement)("span", {
            "aria-owns": ea
        })))
    }),
    tl = "navigationMenu.linkSelect",
    tu = (0, em.forwardRef)((g, _) => {
        let {
            __scopeNavigationMenu: b,
            active: F,
            onSelect: U,
            ...Y
        } = g;
        return (0, em.createElement)(tb, {
            asChild: !0
        }, (0, em.createElement)(eB.WV.a, (0, eD.Z)({
            "data-active": F ? "" : void 0,
            "aria-current": F ? "page" : void 0
        }, Y, {
            ref: _,
            onClick: (0, e$.M)(g.onClick, g => {
                let _ = g.target,
                    b = new CustomEvent(tl, {
                        bubbles: !0,
                        cancelable: !0
                    });
                if (_.addEventListener(tl, g => null == U ? void 0 : U(g), {
                        once: !0
                    }), (0, eB.jH)(_, b), !b.defaultPrevented && !g.metaKey) {
                    let g = new CustomEvent(tp, {
                        bubbles: !0,
                        cancelable: !0
                    });
                    (0, eB.jH)(_, g)
                }
            }, {
                checkForDefaultPrevented: !1
            })
        })))
    }),
    tc = ((g, _) => {
        let {
            __scopeNavigationMenu: b,
            ...F
        } = g, U = e8("NavigationMenuIndicator", b), Y = eJ(b), [Q, er] = (0, em.useState)(null), [ei, eo] = (0, em.useState)(null), ea = "horizontal" === U.orientation, es = !!U.value;
        (0, em.useEffect)(() => {
            var g;
            let _ = Y(),
                b = null === (g = _.find(g => g.value === U.value)) || void 0 === g ? void 0 : g.ref.current;
            b && er(b)
        }, [Y, U.value]);
        let handlePositionChange = () => {
            Q && eo({
                size: ea ? Q.offsetWidth : Q.offsetHeight,
                offset: ea ? Q.offsetLeft : Q.offsetTop
            })
        };
        return $322c88a641701f3b$var$useResizeObserver(Q, handlePositionChange), $322c88a641701f3b$var$useResizeObserver(U.indicatorTrack, handlePositionChange), ei ? (0, em.createElement)(eB.WV.div, (0, eD.Z)({
            "aria-hidden": !0,
            "data-state": es ? "visible" : "hidden",
            "data-orientation": U.orientation
        }, F, {
            ref: _,
            style: {
                position: "absolute",
                ...ea ? {
                    left: 0,
                    width: ei.size + "px",
                    transform: `translateX(${ei.offset}px)`
                } : {
                    top: 0,
                    height: ei.size + "px",
                    transform: `translateY(${ei.offset}px)`
                },
                ...F.style
            }
        })) : null
    }, "NavigationMenuContent"),
    td = (0, em.forwardRef)((g, _) => {
        let {
            forceMount: b,
            ...F
        } = g, U = e8(tc, g.__scopeNavigationMenu), Y = ti(tc, g.__scopeNavigationMenu), Q = (0, eN.e)(Y.contentRef, _), er = Y.value === U.value, ei = {
            value: Y.value,
            triggerRef: Y.triggerRef,
            focusProxyRef: Y.focusProxyRef,
            wasEscapeCloseRef: Y.wasEscapeCloseRef,
            onContentFocusOutside: Y.onContentFocusOutside,
            onRootContentClose: Y.onRootContentClose,
            ...F
        };
        return U.viewport ? (0, em.createElement)(tf, (0, eD.Z)({
            forceMount: b
        }, ei, {
            ref: Q
        })) : (0, em.createElement)(eF.z, {
            present: b || er
        }, (0, em.createElement)(th, (0, eD.Z)({
            "data-state": $322c88a641701f3b$var$getOpenState(er)
        }, ei, {
            ref: Q,
            onPointerEnter: (0, e$.M)(g.onPointerEnter, U.onContentEnter),
            onPointerLeave: (0, e$.M)(g.onPointerLeave, $322c88a641701f3b$var$whenMouse(U.onContentLeave)),
            style: {
                pointerEvents: !er && U.isRootMenu ? "none" : void 0,
                ...ei.style
            }
        })))
    }),
    tf = (0, em.forwardRef)((g, _) => {
        let b = e8(tc, g.__scopeNavigationMenu),
            {
                onViewportContentChange: F,
                onViewportContentRemove: U
            } = b;
        return (0, eq.b)(() => {
            F(g.value, {
                ref: _,
                ...g
            })
        }, [g, _, F]), (0, eq.b)(() => () => U(g.value), [g.value, U]), null
    }),
    tp = "navigationMenu.rootContentDismiss",
    th = (0, em.forwardRef)((g, _) => {
        let {
            __scopeNavigationMenu: b,
            value: F,
            triggerRef: U,
            focusProxyRef: Y,
            wasEscapeCloseRef: Q,
            onRootContentClose: er,
            onContentFocusOutside: ei,
            ...eo
        } = g, ea = e8(tc, b), es = (0, em.useRef)(null), el = (0, eN.e)(es, _), eu = $322c88a641701f3b$var$makeTriggerId(ea.baseId, F), ec = $322c88a641701f3b$var$makeContentId(ea.baseId, F), ed = eJ(b), ef = (0, em.useRef)(null), {
            onItemDismiss: ep
        } = ea;
        (0, em.useEffect)(() => {
            let g = es.current;
            if (ea.isRootMenu && g) {
                let handleClose = () => {
                    var _;
                    ep(), er(), g.contains(document.activeElement) && (null === (_ = U.current) || void 0 === _ || _.focus())
                };
                return g.addEventListener(tp, handleClose), () => g.removeEventListener(tp, handleClose)
            }
        }, [ea.isRootMenu, g.value, U, ep, er]);
        let eh = (0, em.useMemo)(() => {
            let g = ed(),
                _ = g.map(g => g.value);
            "rtl" === ea.dir && _.reverse();
            let b = _.indexOf(ea.value),
                U = _.indexOf(ea.previousValue),
                Y = F === ea.value,
                Q = U === _.indexOf(F);
            if (!Y && !Q) return ef.current;
            let er = (() => {
                if (b !== U) {
                    if (Y && -1 !== U) return b > U ? "from-end" : "from-start";
                    if (Q && -1 !== b) return b > U ? "to-start" : "to-end"
                }
                return null
            })();
            return ef.current = er, er
        }, [ea.previousValue, ea.value, ea.dir, ed, F]);
        return (0, em.createElement)(tv, {
            asChild: !0
        }, (0, em.createElement)(eY, (0, eD.Z)({
            id: ec,
            "aria-labelledby": eu,
            "data-motion": eh,
            "data-orientation": ea.orientation
        }, eo, {
            ref: el,
            onDismiss: () => {
                var g;
                let _ = new Event(tp, {
                    bubbles: !0,
                    cancelable: !0
                });
                null === (g = es.current) || void 0 === g || g.dispatchEvent(_)
            },
            onFocusOutside: (0, e$.M)(g.onFocusOutside, g => {
                var _;
                ei();
                let b = g.target;
                null !== (_ = ea.rootNavigationMenu) && void 0 !== _ && _.contains(b) && g.preventDefault()
            }),
            onPointerDownOutside: (0, e$.M)(g.onPointerDownOutside, g => {
                var _;
                let b = g.target,
                    F = ed().some(g => {
                        var _;
                        return null === (_ = g.ref.current) || void 0 === _ ? void 0 : _.contains(b)
                    }),
                    U = ea.isRootMenu && (null === (_ = ea.viewport) || void 0 === _ ? void 0 : _.contains(b));
                (F || U || !ea.isRootMenu) && g.preventDefault()
            }),
            onKeyDown: (0, e$.M)(g.onKeyDown, g => {
                let _ = g.altKey || g.ctrlKey || g.metaKey,
                    b = "Tab" === g.key && !_;
                if (b) {
                    let _ = $322c88a641701f3b$var$getTabbableCandidates(g.currentTarget),
                        b = document.activeElement,
                        U = _.findIndex(g => g === b),
                        Q = g.shiftKey,
                        er = Q ? _.slice(0, U).reverse() : _.slice(U + 1, _.length);
                    if ($322c88a641701f3b$var$focusFirst(er)) g.preventDefault();
                    else {
                        var F;
                        null === (F = Y.current) || void 0 === F || F.focus()
                    }
                }
            }),
            onEscapeKeyDown: (0, e$.M)(g.onEscapeKeyDown, g => {
                Q.current = !0
            })
        })))
    }),
    tm = "NavigationMenuViewport",
    tg = (0, em.forwardRef)((g, _) => {
        let {
            forceMount: b,
            ...F
        } = g, U = e8(tm, g.__scopeNavigationMenu), Y = !!U.value;
        return (0, em.createElement)(eF.z, {
            present: b || Y
        }, (0, em.createElement)(t_, (0, eD.Z)({}, F, {
            ref: _
        })))
    }),
    t_ = (0, em.forwardRef)((g, _) => {
        let {
            __scopeNavigationMenu: b,
            children: F,
            ...U
        } = g, Y = e8(tm, b), Q = (0, eN.e)(_, Y.onViewportChange), er = e9(tc, g.__scopeNavigationMenu), [ei, eo] = (0, em.useState)(null), [ea, es] = (0, em.useState)(null), el = ei ? (null == ei ? void 0 : ei.width) + "px" : void 0, eu = ei ? (null == ei ? void 0 : ei.height) + "px" : void 0, ec = !!Y.value, ed = ec ? Y.value : Y.previousValue;
        return $322c88a641701f3b$var$useResizeObserver(ea, () => {
            ea && eo({
                width: ea.offsetWidth,
                height: ea.offsetHeight
            })
        }), (0, em.createElement)(eB.WV.div, (0, eD.Z)({
            "data-state": $322c88a641701f3b$var$getOpenState(ec),
            "data-orientation": Y.orientation
        }, U, {
            ref: Q,
            style: {
                pointerEvents: !ec && Y.isRootMenu ? "none" : void 0,
                "--radix-navigation-menu-viewport-width": el,
                "--radix-navigation-menu-viewport-height": eu,
                ...U.style
            },
            onPointerEnter: (0, e$.M)(g.onPointerEnter, Y.onContentEnter),
            onPointerLeave: (0, e$.M)(g.onPointerLeave, $322c88a641701f3b$var$whenMouse(Y.onContentLeave))
        }), Array.from(er.items).map(([g, {
            ref: _,
            forceMount: b,
            ...F
        }]) => {
            let U = ed === g;
            return (0, em.createElement)(eF.z, {
                key: g,
                present: b || U
            }, (0, em.createElement)(th, (0, eD.Z)({}, F, {
                ref: (0, eN.F)(_, g => {
                    U && g && es(g)
                })
            })))
        }))
    }),
    tv = (0, em.forwardRef)((g, _) => {
        let {
            __scopeNavigationMenu: b,
            ...F
        } = g, U = e8("FocusGroup", b);
        return (0, em.createElement)(e0.Provider, {
            scope: b
        }, (0, em.createElement)(e0.Slot, {
            scope: b
        }, (0, em.createElement)(eB.WV.div, (0, eD.Z)({
            dir: U.dir
        }, F, {
            ref: _
        }))))
    }),
    ty = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"],
    tb = (0, em.forwardRef)((g, _) => {
        let {
            __scopeNavigationMenu: b,
            ...F
        } = g, U = e1(b), Y = e8("FocusGroupItem", b);
        return (0, em.createElement)(e0.ItemSlot, {
            scope: b
        }, (0, em.createElement)(eB.WV.button, (0, eD.Z)({}, F, {
            ref: _,
            onKeyDown: (0, e$.M)(g.onKeyDown, g => {
                let _ = ["Home", "End", ...ty].includes(g.key);
                if (_) {
                    let _ = U().map(g => g.ref.current),
                        b = "rtl" === Y.dir ? "ArrowRight" : "ArrowLeft";
                    if ([b, "ArrowUp", "End"].includes(g.key) && _.reverse(), ty.includes(g.key)) {
                        let b = _.indexOf(g.currentTarget);
                        _ = _.slice(b + 1)
                    }
                    setTimeout(() => $322c88a641701f3b$var$focusFirst(_)), g.preventDefault()
                }
            })
        })))
    });

function $322c88a641701f3b$var$getTabbableCandidates(g) {
    let _ = [],
        b = document.createTreeWalker(g, NodeFilter.SHOW_ELEMENT, {
            acceptNode: g => {
                let _ = "INPUT" === g.tagName && "hidden" === g.type;
                return g.disabled || g.hidden || _ ? NodeFilter.FILTER_SKIP : g.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
        });
    for (; b.nextNode();) _.push(b.currentNode);
    return _
}

function $322c88a641701f3b$var$focusFirst(g) {
    let _ = document.activeElement;
    return g.some(g => g === _ || (g.focus(), document.activeElement !== _))
}

function $322c88a641701f3b$var$useResizeObserver(g, _) {
    let b = (0, ez.W)(_);
    (0, eq.b)(() => {
        let _ = 0;
        if (g) {
            let F = new ResizeObserver(() => {
                cancelAnimationFrame(_), _ = window.requestAnimationFrame(b)
            });
            return F.observe(g), () => {
                window.cancelAnimationFrame(_), F.unobserve(g)
            }
        }
    }, [g, b])
}

function $322c88a641701f3b$var$getOpenState(g) {
    return g ? "open" : "closed"
}

function $322c88a641701f3b$var$makeTriggerId(g, _) {
    return `${g}-trigger-${_}`
}

function $322c88a641701f3b$var$makeContentId(g, _) {
    return `${g}-content-${_}`
}

function $322c88a641701f3b$var$whenMouse(g) {
    return _ => "mouse" === _.pointerType ? g(_) : void 0
}
var tx = b(47886),
    tw = b(37817),
    tE = b(14747),
    tS = b(81742),
    tC = b(74507),
    tT = b(95175),
    tR = b(90901),
    tk = b(24191),
    tP = b(70219),
    tj = b(31869),
    tO = b(8789),
    tA = b(64254);

function DesktopNavigation() {
    let g = (0, ex.useRouter)(),
        [_, b] = (0, em.useState)(!1),
        {
            openSalesForm: F
        } = (0, em.useContext)(tx.G);
    return (0, em.useEffect)(() => {
        let handleScroll = () => {
            window.scrollY > tB && !_ && b(!0), window.scrollY < tB && _ && b(!1)
        };
        return window.addEventListener("scroll", handleScroll), () => window.removeEventListener("scroll", handleScroll)
    }, [_]), (0, er.jsxs)(e7, {
        className: ej().navigation,
        delayDuration: 0,
        children: [(0, er.jsxs)(eO.E.div, {
            className: ej().island,
            layout: !0,
            children: [(0, er.jsxs)(te, {
                className: ej().navbar,
                children: [(0, er.jsx)(tD, {
                    children: (0, er.jsx)(tI, {
                        href: "/",
                        children: "Home"
                    })
                }), (0, er.jsx)(NavigationDropdown, {
                    title: "Primitives",
                    children: (0, er.jsxs)(DropdownLinks, {
                        children: [(0, er.jsx)(t$, {
                            icon: (0, er.jsx)(tw.Z, {}),
                            href: "/primitives/relay",
                            title: "Relay",
                            children: "A proxy for encrypting sensitive data"
                        }), (0, er.jsx)(t$, {
                            icon: (0, er.jsx)(tE.Z, {}),
                            href: "/primitives/functions",
                            title: "Functions",
                            children: "Serverless functions for processing sensitive data"
                        }), (0, er.jsx)(t$, {
                            icon: (0, er.jsx)(tS.Z, {}),
                            href: "/primitives/ui-components",
                            title: "UI Components",
                            children: "Components for collecting and displaying card data compliantly"
                        }), (0, er.jsx)(t$, {
                            icon: (0, er.jsx)(tC.Z, {}),
                            href: "/primitives/enclaves",
                            title: "Enclaves",
                            children: "A service for building, deploying and scaling secure enclaves"
                        })]
                    })
                }), (0, er.jsx)(NavigationDropdown, {
                    title: "Solutions",
                    children: (0, er.jsxs)(DropdownLinks, {
                        children: [(0, er.jsx)(t$, {
                            icon: (0, er.jsx)(tT.Z, {}),
                            href: "/solutions/pci",
                            title: "PCI Compliance",
                            children: "Become PCI DSS compliant in days, not months"
                        }), (0, er.jsx)(t$, {
                            icon: (0, er.jsx)(tR.Z, {}),
                            href: "/solutions/encryption-as-a-service",
                            title: "Encryption as a Service",
                            children: "Secure building blocks to encrypt, process and share sensitive data"
                        }), (0, er.jsx)(t$, {
                            icon: (0, er.jsx)(tk.Z, {}),
                            href: "/solutions/confidential-computing",
                            title: "Confidential Computing",
                            children: "Enterprise-grade security for your most sensitive workloads"
                        })]
                    })
                }), (0, er.jsx)(tD, {
                    children: (0, er.jsx)(tI, {
                        href: "/customers",
                        children: "Customers"
                    })
                }), (0, er.jsx)(tD, {
                    children: (0, er.jsx)(tI, {
                        href: "/pricing",
                        children: "Pricing"
                    })
                }), (0, er.jsx)(NavigationDropdown, {
                    title: "Resources",
                    children: (0, er.jsxs)(DropdownLinks, {
                        children: [(0, er.jsx)(t$, {
                            icon: (0, er.jsx)(tP.Z, {}),
                            title: "Blog",
                            href: "/blog",
                            children: "Read our latest news and updates"
                        }), (0, er.jsx)(t$, {
                            icon: (0, er.jsx)(tj.Z, {}),
                            title: "Papers",
                            href: "/papers",
                            children: "Our collection of Cryptography papers"
                        }), (0, er.jsx)(t$, {
                            icon: (0, er.jsx)(tO.Z, {}),
                            title: "Guides",
                            href: "https://docs.evervault.com/guides",
                            children: "Get started with our Developer Guides"
                        })]
                    })
                }), (0, er.jsx)(tD, {
                    children: (0, er.jsx)(tI, {
                        href: "https://docs.evervault.com",
                        children: "Docs"
                    })
                })]
            }), (0, er.jsx)(eA.M, {
                children: _ && (0, er.jsx)(GetStartedButton, {})
            })]
        }, g.asPath), (0, er.jsx)("div", {
            className: ej().viewportPosition,
            children: (0, er.jsx)(tg, {
                className: ej().viewport
            })
        })]
    })
}
let tD = (0, em.forwardRef)(function(g, _) {
        let {
            className: b,
            ...F
        } = g, U = [ej().item, b].filter(Boolean).join(" ");
        return (0, er.jsx)(to, {
            asChild: !0,
            children: (0, er.jsx)(eO.E.li, {
                ref: _,
                className: U,
                layout: !0,
                ...F
            })
        })
    }),
    tI = (0, em.forwardRef)(function(g, _) {
        let {
            className: b,
            ...F
        } = g, U = [ej().link, b].filter(Boolean).join(" ");
        return (0, er.jsx)(tu, {
            ref: _,
            className: U,
            asChild: !0,
            children: (0, er.jsx)(eS(), { ...F
            })
        })
    });

function NavigationDropdown(g) {
    let {
        title: _,
        children: b
    } = g;
    return (0, er.jsxs)(tD, {
        children: [(0, er.jsx)(ts, {
            onClick: g => {
                g.preventDefault()
            },
            className: ej().trigger,
            children: _
        }), (0, er.jsx)(td, {
            className: ej().content,
            children: b
        })]
    })
}
let t$ = (0, em.forwardRef)(function(g, _) {
    let {
        href: b,
        icon: F,
        title: U,
        children: Y,
        ...Q
    } = g;
    return (0, er.jsx)(tu, {
        className: ej().dropdownLink,
        asChild: !0,
        children: (0, er.jsxs)(eS(), {
            ref: _,
            href: b,
            ...Q,
            children: [(0, er.jsx)("div", {
                className: ej().dropdownLinkIcon,
                children: F
            }), (0, er.jsxs)("div", {
                className: ej().dropdownLinkLabels,
                children: [(0, er.jsx)("h6", {
                    children: U
                }), (0, er.jsx)("p", {
                    children: Y
                })]
            }), (0, er.jsx)("div", {
                className: ej().dropdownLinkArrow,
                children: (0, er.jsx)(tA.Z, {})
            })]
        })
    })
});

function DropdownLinks(g) {
    let {
        children: _
    } = g;
    return (0, er.jsx)("div", {
        className: ej().dropdownLinks,
        children: _
    })
}
let tB = 70;

function GetStartedButton() {
    let {
        openSalesForm: g
    } = (0, em.useContext)(tx.G);
    return (0, er.jsx)(tD, {
        children: (0, er.jsx)(tu, {
            asChild: !0,
            children: (0, er.jsx)(eO.E.button, {
                initial: {
                    x: 20
                },
                animate: {
                    x: 0
                },
                exit: {
                    x: 20,
                    width: 0
                },
                className: ej().getStarted,
                onClick: () => g({
                    context: "Nav — CTA"
                }),
                children: (0, er.jsx)("span", {
                    className: ej().getStartedInner,
                    children: "Request a demo"
                })
            })
        })
    })
}
var tL = b(88902);

function MobileNavigation(g) {
    let {
        isOpen: _
    } = g, {
        openSalesForm: b
    } = (0, em.useContext)(tx.G);
    return (0, er.jsx)(er.Fragment, {
        children: (0, er.jsx)(eA.M, {
            children: _ && (0, er.jsxs)(eO.E.div, {
                className: ej().navigationMobile,
                initial: {
                    opacity: 0,
                    y: -10
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                exit: {
                    opacity: 0,
                    y: -10
                },
                transition: {
                    duration: .3
                },
                children: [(0, er.jsx)(eS(), {
                    href: "/",
                    legacyBehavior: !0,
                    children: (0, er.jsx)("div", {
                        className: ej().navigationItemMobile,
                        children: (0, er.jsx)("a", {
                            children: "Home"
                        })
                    })
                }), (0, er.jsxs)(MobileDropdownMenu, {
                    title: "Primitives",
                    children: [(0, er.jsx)(MobileDropdownMenuLink, {
                        icon: (0, er.jsx)(tw.Z, {}),
                        title: "Relay",
                        href: "/primitives/relay"
                    }), (0, er.jsx)(MobileDropdownMenuLink, {
                        icon: (0, er.jsx)(tE.Z, {}),
                        title: "Functions",
                        href: "/primitives/functions"
                    }), (0, er.jsx)(MobileDropdownMenuLink, {
                        icon: (0, er.jsx)(tS.Z, {}),
                        title: "UI Components",
                        href: "/primitives/ui-components"
                    }), (0, er.jsx)(MobileDropdownMenuLink, {
                        icon: (0, er.jsx)(tC.Z, {}),
                        title: "Enclaves",
                        href: "/primitives/enclaves"
                    })]
                }), (0, er.jsxs)(MobileDropdownMenu, {
                    title: "Solutions",
                    children: [(0, er.jsx)(MobileDropdownMenuLink, {
                        icon: (0, er.jsx)(tT.Z, {}),
                        title: "PCI Compliance",
                        href: "/solutions/pci"
                    }), (0, er.jsx)(MobileDropdownMenuLink, {
                        icon: (0, er.jsx)(tR.Z, {}),
                        title: "Encryption as a Service",
                        href: "/solutions/encryption-as-a-service"
                    }), (0, er.jsx)(MobileDropdownMenuLink, {
                        icon: (0, er.jsx)(tk.Z, {}),
                        title: "Confidential Computing",
                        href: "/solutions/confidential-computing"
                    })]
                }), (0, er.jsx)(eS(), {
                    href: "/customers",
                    legacyBehavior: !0,
                    children: (0, er.jsx)("div", {
                        className: ej().navigationItemMobile,
                        children: (0, er.jsx)("a", {
                            children: "Customers"
                        })
                    })
                }), (0, er.jsx)(eS(), {
                    href: "/pricing",
                    legacyBehavior: !0,
                    children: (0, er.jsx)("div", {
                        className: ej().navigationItemMobile,
                        children: (0, er.jsx)("a", {
                            children: "Pricing"
                        })
                    })
                }), (0, er.jsxs)(MobileDropdownMenu, {
                    title: "Resources",
                    children: [(0, er.jsx)(MobileDropdownMenuLink, {
                        icon: (0, er.jsx)(tP.Z, {}),
                        title: "Blog",
                        href: "/blog"
                    }), (0, er.jsx)(MobileDropdownMenuLink, {
                        icon: (0, er.jsx)(tj.Z, {}),
                        title: "Papers",
                        href: "/papers"
                    }), (0, er.jsx)(MobileDropdownMenuLink, {
                        icon: (0, er.jsx)(tO.Z, {}),
                        title: "Guides",
                        href: "https://docs.evervault.com/guides"
                    })]
                }), (0, er.jsx)(eS(), {
                    href: "/blog",
                    legacyBehavior: !0,
                    children: (0, er.jsx)("div", {
                        className: ej().navigationItemMobile,
                        children: (0, er.jsx)("a", {
                            children: "Blog"
                        })
                    })
                }), (0, er.jsx)("a", {
                    href: "https://docs.evervault.com",
                    target: "_blank",
                    children: (0, er.jsx)("div", {
                        className: ej().navigationItemMobile,
                        children: "Docs"
                    })
                })]
            })
        })
    })
}

function MobileDropdownMenu(g) {
    let {
        title: _,
        children: b
    } = g, [F, U] = (0, em.useState)(!1);
    return (0, er.jsxs)(er.Fragment, {
        children: [(0, er.jsxs)("div", {
            className: ej().navigationItemMobile,
            onClick: () => U(!F),
            children: [(0, er.jsx)("div", {
                className: ej().mobileDropdown,
                children: _
            }), (0, er.jsx)(eO.E.div, {
                animate: {
                    rotate: F ? 180 : 0
                },
                children: (0, er.jsx)(tL.Z, {})
            })]
        }), (0, er.jsx)(eO.E.div, {
            className: ej().useCasesMenuMobile,
            initial: {
                height: 0
            },
            animate: {
                height: F ? "auto" : 0,
                opacity: F ? 1 : 0
            },
            style: {
                pointerEvents: F ? "auto" : "none"
            },
            transition: {
                duration: .4
            },
            children: b
        })]
    })
}

function MobileDropdownMenuLink(g) {
    let {
        title: _,
        icon: b,
        pill: F,
        ...U
    } = g;
    return (0, er.jsxs)(eS(), { ...U,
        className: ej().navigationItemMobile,
        children: [b && (0, er.jsx)("div", {
            className: ej().mobileIcon,
            children: b
        }), (0, er.jsx)("span", {
            children: _
        }), F && (0, er.jsx)("div", {
            className: ej().pill,
            children: F
        })]
    })
}
var tN = b(26718),
    tM = b.n(tN);

function Header(g) {
    let {
        lightTheme: _
    } = g, {
        openSalesForm: b
    } = (0, em.useContext)(tx.G), [F, U] = (0, em.useState)(!1), {
        events: Y
    } = (0, ex.useRouter)();
    return (0, em.useEffect)(() => {
        Y.on("routeChangeComplete", () => {
            U(!1)
        })
    }, [Y]), (0, er.jsxs)(er.Fragment, {
        children: [(0, er.jsx)(MobileNavigation, {
            isOpen: F
        }), (0, er.jsxs)("header", {
            className: tM().header,
            "data-light-theme": _,
            children: [(0, er.jsx)(eS(), {
                href: "/",
                legacyBehavior: !0,
                children: (0, er.jsx)("img", {
                    src: _ ? "/images/logo-color.svg" : "/images/logo-white.svg",
                    className: tM().logo
                })
            }), (0, er.jsx)(eS(), {
                href: "/",
                legacyBehavior: !0,
                children: (0, er.jsx)("img", {
                    src: _ ? "/images/icon-color.svg" : "/images/icon-white.svg",
                    className: tM().logoMobile
                })
            }), (0, er.jsx)(DesktopNavigation, {}), (0, er.jsxs)("div", {
                className: tM().group,
                children: [(0, er.jsx)(ek.Z, {
                    type: "transparent",
                    href: "https://app.evervault.com/login",
                    children: "Log in"
                }), (0, er.jsx)(ek.Z, {
                    onClick: () => b({
                        context: "Nav — CTA"
                    }),
                    children: "Request a demo"
                }), (0, er.jsx)("button", {
                    className: tM().hamburger,
                    onClick: () => U(g => !g),
                    children: (0, er.jsxs)("svg", {
                        width: "14",
                        height: "12",
                        viewBox: "0 0 14 12",
                        fill: "none",
                        children: [(0, er.jsx)("path", {
                            d: "M0 1H14",
                            stroke: "white"
                        }), (0, er.jsx)("path", {
                            d: "M0 6H14",
                            stroke: "white"
                        }), (0, er.jsx)("path", {
                            d: "M0 11H14",
                            stroke: "white"
                        })]
                    })
                })]
            })]
        })]
    })
}
b(7299), b(73863);
let tF = {
        data: ""
    },
    t = g => "object" == typeof window ? ((g ? g.querySelector("#_goober") : window._goober) || Object.assign((g || document.head).appendChild(document.createElement("style")), {
        innerHTML: " ",
        id: "_goober"
    })).firstChild : g || tF,
    tV = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
    tU = /\/\*[^]*?\*\/|  +/g,
    tz = /\n+/g,
    o = (g, _) => {
        let b = "",
            F = "",
            U = "";
        for (let Y in g) {
            let Q = g[Y];
            "@" == Y[0] ? "i" == Y[1] ? b = Y + " " + Q + ";" : F += "f" == Y[1] ? o(Q, Y) : Y + "{" + o(Q, "k" == Y[1] ? "" : _) + "}" : "object" == typeof Q ? F += o(Q, _ ? _.replace(/([^,])+/g, g => Y.replace(/(^:.*)|([^,])+/g, _ => /&/.test(_) ? _.replace(/&/g, g) : g ? g + " " + _ : _)) : Y) : null != Q && (Y = /^--/.test(Y) ? Y : Y.replace(/[A-Z]/g, "-$&").toLowerCase(), U += o.p ? o.p(Y, Q) : Y + ":" + Q + ";")
        }
        return b + (_ && U ? _ + "{" + U + "}" : U) + F
    },
    tH = {},
    s = g => {
        if ("object" == typeof g) {
            let _ = "";
            for (let b in g) _ += b + s(g[b]);
            return _
        }
        return g
    },
    i = (g, _, b, F, U) => {
        var Y;
        let Q = s(g),
            er = tH[Q] || (tH[Q] = (g => {
                let _ = 0,
                    b = 11;
                for (; _ < g.length;) b = 101 * b + g.charCodeAt(_++) >>> 0;
                return "go" + b
            })(Q));
        if (!tH[er]) {
            let _ = Q !== g ? g : (g => {
                let _, b, F = [{}];
                for (; _ = tV.exec(g.replace(tU, ""));) _[4] ? F.shift() : _[3] ? (b = _[3].replace(tz, " ").trim(), F.unshift(F[0][b] = F[0][b] || {})) : F[0][_[1]] = _[2].replace(tz, " ").trim();
                return F[0]
            })(g);
            tH[er] = o(U ? {
                ["@keyframes " + er]: _
            } : _, b ? "" : "." + er)
        }
        let ei = b && tH.g ? tH.g : null;
        return b && (tH.g = tH[er]), Y = tH[er], ei ? _.data = _.data.replace(ei, Y) : -1 === _.data.indexOf(Y) && (_.data = F ? Y + _.data : _.data + Y), er
    },
    p = (g, _, b) => g.reduce((g, F, U) => {
        let Y = _[U];
        if (Y && Y.call) {
            let g = Y(b),
                _ = g && g.props && g.props.className || /^go/.test(g) && g;
            Y = _ ? "." + _ : g && "object" == typeof g ? g.props ? "" : o(g, "") : !1 === g ? "" : g
        }
        return g + F + (null == Y ? "" : Y)
    }, "");

function u(g) {
    let _ = this || {},
        b = g.call ? g(_.p) : g;
    return i(b.unshift ? b.raw ? p(b, [].slice.call(arguments, 1), _.p) : b.reduce((g, b) => Object.assign(g, b && b.call ? b(_.p) : b), {}) : b, t(_.target), _.g, _.o, _.k)
}
u.bind({
    g: 1
});
let tW, tG, tY, tq = u.bind({
    k: 1
});

function j(g, _) {
    let b = this || {};
    return function() {
        let F = arguments;

        function a(U, Y) {
            let Q = Object.assign({}, U),
                er = Q.className || a.className;
            b.p = Object.assign({
                theme: tG && tG()
            }, Q), b.o = / *go\d+/.test(er), Q.className = u.apply(b, F) + (er ? " " + er : ""), _ && (Q.ref = Y);
            let ei = g;
            return g[0] && (ei = Q.as || g, delete Q.as), tY && ei[0] && tY(Q), tW(ei, Q)
        }
        return _ ? _(a) : a
    }
}
var W = g => "function" == typeof g,
    T = (g, _) => W(g) ? g(_) : g,
    tK = (U = 0, () => (++U).toString()),
    dist_b = () => {
        if (void 0 === Y && "u" > typeof window) {
            let g = matchMedia("(prefers-reduced-motion: reduce)");
            Y = !g || g.matches
        }
        return Y
    },
    tZ = new Map,
    $ = g => {
        if (tZ.has(g)) return;
        let _ = setTimeout(() => {
            tZ.delete(g), dist_u({
                type: 4,
                toastId: g
            })
        }, 1e3);
        tZ.set(g, _)
    },
    J = g => {
        let _ = tZ.get(g);
        _ && clearTimeout(_)
    },
    v = (g, _) => {
        switch (_.type) {
            case 0:
                return { ...g,
                    toasts: [_.toast, ...g.toasts].slice(0, 20)
                };
            case 1:
                return _.toast.id && J(_.toast.id), { ...g,
                    toasts: g.toasts.map(g => g.id === _.toast.id ? { ...g,
                        ..._.toast
                    } : g)
                };
            case 2:
                let {
                    toast: b
                } = _;
                return g.toasts.find(g => g.id === b.id) ? v(g, {
                    type: 1,
                    toast: b
                }) : v(g, {
                    type: 0,
                    toast: b
                });
            case 3:
                let {
                    toastId: F
                } = _;
                return F ? $(F) : g.toasts.forEach(g => {
                    $(g.id)
                }), { ...g,
                    toasts: g.toasts.map(g => g.id === F || void 0 === F ? { ...g,
                        visible: !1
                    } : g)
                };
            case 4:
                return void 0 === _.toastId ? { ...g,
                    toasts: []
                } : { ...g,
                    toasts: g.toasts.filter(g => g.id !== _.toastId)
                };
            case 5:
                return { ...g,
                    pausedAt: _.time
                };
            case 6:
                let U = _.time - (g.pausedAt || 0);
                return { ...g,
                    pausedAt: void 0,
                    toasts: g.toasts.map(g => ({ ...g,
                        pauseDuration: g.pauseDuration + U
                    }))
                }
        }
    },
    tX = [],
    tJ = {
        toasts: [],
        pausedAt: void 0
    },
    dist_u = g => {
        tJ = v(tJ, g), tX.forEach(g => {
            g(tJ)
        })
    },
    tQ = {
        blank: 4e3,
        error: 4e3,
        success: 2e3,
        loading: 1 / 0,
        custom: 4e3
    },
    I = (g = {}) => {
        let [_, b] = (0, em.useState)(tJ);
        (0, em.useEffect)(() => (tX.push(b), () => {
            let g = tX.indexOf(b);
            g > -1 && tX.splice(g, 1)
        }), [_]);
        let F = _.toasts.map(_ => {
            var b, F;
            return { ...g,
                ...g[_.type],
                ..._,
                duration: _.duration || (null == (b = g[_.type]) ? void 0 : b.duration) || (null == g ? void 0 : g.duration) || tQ[_.type],
                style: { ...g.style,
                    ...null == (F = g[_.type]) ? void 0 : F.style,
                    ..._.style
                }
            }
        });
        return { ..._,
            toasts: F
        }
    },
    G = (g, _ = "blank", b) => ({
        createdAt: Date.now(),
        visible: !0,
        type: _,
        ariaProps: {
            role: "status",
            "aria-live": "polite"
        },
        message: g,
        pauseDuration: 0,
        ...b,
        id: (null == b ? void 0 : b.id) || tK()
    }),
    dist_h = g => (_, b) => {
        let F = G(_, g, b);
        return dist_u({
            type: 2,
            toast: F
        }), F.id
    },
    dist_n = (g, _) => dist_h("blank")(g, _);
dist_n.error = dist_h("error"), dist_n.success = dist_h("success"), dist_n.loading = dist_h("loading"), dist_n.custom = dist_h("custom"), dist_n.dismiss = g => {
    dist_u({
        type: 3,
        toastId: g
    })
}, dist_n.remove = g => dist_u({
    type: 4,
    toastId: g
}), dist_n.promise = (g, _, b) => {
    let F = dist_n.loading(_.loading, { ...b,
        ...null == b ? void 0 : b.loading
    });
    return g.then(g => (dist_n.success(T(_.success, g), {
        id: F,
        ...b,
        ...null == b ? void 0 : b.success
    }), g)).catch(g => {
        dist_n.error(T(_.error, g), {
            id: F,
            ...b,
            ...null == b ? void 0 : b.error
        })
    }), g
};
var Z = (g, _) => {
        dist_u({
            type: 1,
            toast: {
                id: g,
                height: _
            }
        })
    },
    ee = () => {
        dist_u({
            type: 5,
            time: Date.now()
        })
    },
    D = g => {
        let {
            toasts: _,
            pausedAt: b
        } = I(g);
        (0, em.useEffect)(() => {
            if (b) return;
            let g = Date.now(),
                F = _.map(_ => {
                    if (_.duration === 1 / 0) return;
                    let b = (_.duration || 0) + _.pauseDuration - (g - _.createdAt);
                    if (b < 0) {
                        _.visible && dist_n.dismiss(_.id);
                        return
                    }
                    return setTimeout(() => dist_n.dismiss(_.id), b)
                });
            return () => {
                F.forEach(g => g && clearTimeout(g))
            }
        }, [_, b]);
        let F = (0, em.useCallback)(() => {
                b && dist_u({
                    type: 6,
                    time: Date.now()
                })
            }, [b]),
            U = (0, em.useCallback)((g, b) => {
                let {
                    reverseOrder: F = !1,
                    gutter: U = 8,
                    defaultPosition: Y
                } = b || {}, Q = _.filter(_ => (_.position || Y) === (g.position || Y) && _.height), er = Q.findIndex(_ => _.id === g.id), ei = Q.filter((g, _) => _ < er && g.visible).length;
                return Q.filter(g => g.visible).slice(...F ? [ei + 1] : [0, ei]).reduce((g, _) => g + (_.height || 0) + U, 0)
            }, [_]);
        return {
            toasts: _,
            handlers: {
                updateHeight: Z,
                startPause: ee,
                endPause: F,
                calculateOffset: U
            }
        }
    },
    t0 = tq `
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,
    t1 = tq `
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
    t2 = tq `
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,
    t3 = j("div")
`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${g=>g.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${t0} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${t1} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${g=>g.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${t2} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`, t5 = tq `
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`, t6 = j("div")
`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${g=>g.secondary||"#e0e0e0"};
  border-right-color: ${g=>g.primary||"#616161"};
  animation: ${t5} 1s linear infinite;
`, t8 = tq `
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`, t4 = tq `
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`, t9 = j("div")
`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${g=>g.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${t8} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${t4} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${g=>g.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`, t7 = j("div")
`
  position: absolute;
`, nt = j("div")
`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`, nn = tq `
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`, ni = j("div")
`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${nn} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`, M = ({
    toast: g
}) => {
    let {
        icon: _,
        type: b,
        iconTheme: F
    } = g;
    return void 0 !== _ ? "string" == typeof _ ? em.createElement(ni, null, _) : _ : "blank" === b ? null : em.createElement(nt, null, em.createElement(t6, { ...F
    }), "loading" !== b && em.createElement(t7, null, "error" === b ? em.createElement(t3, { ...F
    }) : em.createElement(t9, { ...F
    })))
}, ye = g => `
0% {transform: translate3d(0,${-200*g}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`, ge = g => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*g}%,-1px) scale(.6); opacity:0;}
`, no = j("div")
`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`, na = j("div")
`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`, Ae = (g, _) => {
    let b = g.includes("top") ? 1 : -1,
        [F, U] = dist_b() ? ["0%{opacity:0;} 100%{opacity:1;}", "0%{opacity:1;} 100%{opacity:0;}"] : [ye(b), ge(b)];
    return {
        animation: _ ? `${tq(F)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards` : `${tq(U)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`
    }
}, ns = em.memo(({
    toast: g,
    position: _,
    style: b,
    children: F
}) => {
    let U = g.height ? Ae(g.position || _ || "top-center", g.visible) : {
            opacity: 0
        },
        Y = em.createElement(M, {
            toast: g
        }),
        Q = em.createElement(na, { ...g.ariaProps
        }, T(g.message, g));
    return em.createElement(no, {
        className: g.className,
        style: { ...U,
            ...b,
            ...g.style
        }
    }, "function" == typeof F ? F({
        icon: Y,
        message: Q
    }) : em.createElement(em.Fragment, null, Y, Q))
});
Q = em.createElement, o.p = void 0, tW = Q, tG = void 0, tY = void 0;
var Ee = ({
        id: g,
        className: _,
        style: b,
        onHeightUpdate: F,
        children: U
    }) => {
        let Y = em.useCallback(_ => {
            if (_) {
                let i = () => {
                    F(g, _.getBoundingClientRect().height)
                };
                i(), new MutationObserver(i).observe(_, {
                    subtree: !0,
                    childList: !0,
                    characterData: !0
                })
            }
        }, [g, F]);
        return em.createElement("div", {
            ref: Y,
            className: _,
            style: b
        }, U)
    },
    Re = (g, _) => {
        let b = g.includes("top"),
            F = g.includes("center") ? {
                justifyContent: "center"
            } : g.includes("right") ? {
                justifyContent: "flex-end"
            } : {};
        return {
            left: 0,
            right: 0,
            display: "flex",
            position: "absolute",
            transition: dist_b() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)",
            transform: `translateY(${_*(b?1:-1)}px)`,
            ...b ? {
                top: 0
            } : {
                bottom: 0
            },
            ...F
        }
    },
    nl = u `
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,
    Ie = ({
        reverseOrder: g,
        position: _ = "top-center",
        toastOptions: b,
        gutter: F,
        children: U,
        containerStyle: Y,
        containerClassName: Q
    }) => {
        let {
            toasts: er,
            handlers: ei
        } = D(b);
        return em.createElement("div", {
            style: {
                position: "fixed",
                zIndex: 9999,
                top: 16,
                left: 16,
                right: 16,
                bottom: 16,
                pointerEvents: "none",
                ...Y
            },
            className: Q,
            onMouseEnter: ei.startPause,
            onMouseLeave: ei.endPause
        }, er.map(b => {
            let Y = b.position || _,
                Q = Re(Y, ei.calculateOffset(b, {
                    reverseOrder: g,
                    gutter: F,
                    defaultPosition: _
                }));
            return em.createElement(Ee, {
                id: b.id,
                key: b.id,
                onHeightUpdate: ei.updateHeight,
                className: b.visible ? nl : "",
                style: Q
            }, "custom" === b.type ? T(b.message, b) : U ? U(b) : em.createElement(ns, {
                toast: b,
                position: Y
            }))
        }))
    },
    nu = b(86144);

function ToastContainer() {
    return (0, er.jsx)(Ie, {
        position: "bottom-right",
        containerStyle: {
            top: 32,
            right: 32,
            left: 32,
            bottom: 32
        },
        toastOptions: {
            className: "py-8 px-12 color-body",
            style: {
                boxShadow: "0 8px 64px rgb(0 0 0 / 18%)"
            },
            success: {
                icon: (0, er.jsx)(nu.ZP.Badge, {})
            },
            error: {
                icon: (0, er.jsx)(nu.ZP.BadgeError, {})
            }
        }
    })
}
b(82187);
var hooks_useUTMCookie = function() {
    let [g, _] = (0, em.useState)(!1);
    (0, em.useEffect)(() => {
        if (!g) {
            let g = new URL(window.location.href),
                b = new URLSearchParams(g.search),
                F = parseReferrer(document.referrer),
                U = "";
            b.forEach((g, _) => {
                "utm_" === _.substring(0, 4) && (U += "".concat(_, "=").concat(g, "&"))
            }), 0 == U.length && (U += "utm_source=direct&utm_medium=direct&utm_campaign=direct&utm_term=direct&utm_content=direct"), F && (U += "&referrer=".concat(F.hostname + F.pathname)), encodeAndSetCookie(U), _(!0)
        }
    });
    let encodeAndSetCookie = g => {
            let _ = btoa(g);
            ef.Z.set("evervault_utm", _, {
                expires: 14,
                domain: ".evervault.com",
                sameSite: "lax",
                secure: !0
            })
        },
        parseReferrer = g => {
            try {
                return new URL(g)
            } catch (g) {
                return
            }
        }
};
let nc = eh()(() => b.e(3413).then(b.bind(b, 87443)), {
        loadableGenerated: {
            webpack: () => [87443]
        },
        ssr: !1
    }),
    nd = '\n  :root {\n    --system-fonts: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue";\n    --font-family-base: '.concat(eo().style.fontFamily, ", var(--system-fonts);\n    --font-family-headings: ").concat(es().style.fontFamily, ", var(--system-fonts);\n    --font-family-monospace: ").concat(eu().style.fontFamily, ", monospace;\n  }\n");

function MyApp(g) {
    let {
        Component: _,
        pageProps: b
    } = g, {
        events: F,
        query: U
    } = (0, ex.useRouter)();
    hooks_useUTMCookie();
    let [Y, Q] = (0, em.useState)(ef.Z.get("cookie-directive"));
    return (0, er.jsx)(PlausibleProvider, {
        domain: "evervault.com",
        trackOutboundLinks: !0,
        enabled: !Y || "accepted" === Y,
        children: (0, er.jsxs)(IntercomProvider, {
            autoBoot: !0,
            appId: "dgsq17jc",
            shouldInitialize: !Y || "accepted" === Y,
            children: [(0, er.jsx)(ed(), {
                id: nd.__hash,
                children: nd
            }), (0, er.jsx)(ew.Zf, {
                hidden: !(null == U ? void 0 : U.debug)
            }), (0, er.jsxs)(tx.Z, {
                children: [(0, er.jsx)(ToastContainer, {}), (0, er.jsx)(Header, {
                    lightTheme: "light" === b.header
                }), (0, er.jsx)(eR.Z, {
                    enabled: !Y || "accepted" === Y
                }), (0, er.jsx)(_, { ...b,
                    className: b && null != b.className && b.className || ""
                }), (0, er.jsx)(nc, {
                    cookieDirective: Y,
                    setCookieDirective: Q
                }), (0, er.jsx)(Footer, {})]
            })]
        })
    })
}
}, 76731: function() {}, 73863: function() {}, 7299: function() {}, 16467: function(g) {
        g.exports = {
            style: {
                fontFamily: "'__Inter_aaf875', '__Inter_Fallback_aaf875'",
                fontStyle: "normal"
            },
            className: "__className_aaf875"
        }
    }, 97871: function(g) {
        g.exports = {
            style: {
                fontFamily: "'__Roboto_Mono_c9cbed', '__Roboto_Mono_Fallback_c9cbed'",
                fontStyle: "normal"
            },
            className: "__className_c9cbed"
        }
    }, 23638: function(g) {
        g.exports = {
            style: {
                fontFamily: "'__roobert_30c87b', '__roobert_Fallback_30c87b'"
            },
            className: "__className_30c87b"
        }
    }, 19357: function(g) {
        g.exports = {
            container: "Button_container__i_Vit",
            pulse: "Button_pulse__XxOVu"
        }
    }, 52855: function(g) {
        g.exports = {
            footer: "Footer_footer__o4_Ec",
            container: "Footer_container__Mn8SS container",
            navigation: "Footer_navigation__Yj_7L",
            list: "Footer_list__FsWR4",
            logo: "Footer_logo__ZNv_V",
            copyright: "Footer_copyright__sqw0C",
            copyrightContent: "Footer_copyrightContent__aDxfB container",
            status: "Footer_status__X2ZDd",
            copyrightBreak: "Footer_copyrightBreak__yeGun",
            complianceLink: "Footer_complianceLink__QDmX8"
        }
    }, 26718: function(g) {
        g.exports = {
            header: "Header_header__pXml_",
            logo: "Header_logo__sUWiP",
            hamburger: "Header_hamburger__X_hhy",
            logoMobile: "Header_logoMobile__MEikt",
            group: "Header_group__Kgpdq",
            animatedLink: "Header_animatedLink__Jb4dS",
            pill: "Header_pill__gpeGd"
        }
    }, 25219: function(g) {
        g.exports = {
            navigation: "Navigation_navigation__SaCR1",
            island: "Navigation_island__hx7CL",
            navbar: "Navigation_navbar__drXfa",
            item: "Navigation_item__hApMP",
            link: "Navigation_link__p_0Vi",
            trigger: "Navigation_trigger__w4v0H",
            dropdownLinks: "Navigation_dropdownLinks__kvtQ6",
            dropdownLink: "Navigation_dropdownLink__QeIWf",
            dropdownLinkIcon: "Navigation_dropdownLinkIcon__mfQHc",
            dropdownLinkArrow: "Navigation_dropdownLinkArrow__5heV6",
            dropdownLinkLabels: "Navigation_dropdownLinkLabels__y3Lqa",
            getStarted: "Navigation_getStarted__oTfVF",
            getStartedInner: "Navigation_getStartedInner__UDW_u",
            indicator: "Navigation_indicator__Ob8wz",
            fadeIn: "Navigation_fadeIn__5QaHZ",
            slideUp: "Navigation_slideUp__N348C",
            fadeOut: "Navigation_fadeOut__j_QRy",
            slideDown: "Navigation_slideDown__YJLBl",
            arrow: "Navigation_arrow__U08Kx",
            viewportPosition: "Navigation_viewportPosition__zEjBF",
            viewport: "Navigation_viewport__H3qwm",
            scaleIn: "Navigation_scaleIn__4neZY",
            scaleOut: "Navigation_scaleOut___jlp_",
            content: "Navigation_content__raRlm",
            enterFromLeft: "Navigation_enterFromLeft__Z5U4F",
            enterFromRight: "Navigation_enterFromRight__YaDeo",
            exitToLeft: "Navigation_exitToLeft__m_zSP",
            exitToRight: "Navigation_exitToRight__JodW_",
            navigationMobile: "Navigation_navigationMobile__SOXkZ",
            navigationItemMobile: "Navigation_navigationItemMobile__NwoRk",
            mobileDropdown: "Navigation_mobileDropdown__xMTIT",
            pill: "Navigation_pill__VH1um",
            useCasesMenuMobile: "Navigation_useCasesMenuMobile__3c1eV"
        }
    }, 52505: function(g) {
        g.exports = {
            container: "Input_container__FmRsd",
            input: "Input_input__MPP3N"
        }
    }, 78005: function(g) {
        g.exports = {
            container: "SalesForm_container__nWFvZ Text_light__lmRM0",
            overlay: "SalesForm_overlay__PzQ3I",
            panel: "SalesForm_panel__u87e3",
            closeButton: "SalesForm_closeButton__t_2rh",
            isLoadingOverlay: "SalesForm_isLoadingOverlay__laWHS",
            isFinishedOverlay: "SalesForm_isFinishedOverlay__6Xe66"
        }
    }, 91380: function(g) {
        g.exports = {
            container: "Select_container__Pe9g7",
            inputContainer: "Select_inputContainer__SO4Cv",
            selected: "Select_selected__2Tdrk",
            dropdown: "Select_dropdown__9JnWh",
            option: "Select_option__SgkOW",
            input: "Select_input__AJ7K2",
            carat: "Select_carat__mu09V",
            countryCodePlaceholder: "Select_countryCodePlaceholder__nwgSn"
        }
    }, 36941: function(g) {
        g.exports = {
            container: "TextInput_container__OsOWL",
            input: "TextInput_input__2ayV_"
        }
    }, 51449: function(g, _, b) {
        g.exports = b(42982)
    }, 47920: function(g, _, b) {
        g.exports = b(58149)
    }, 75410: function(g, _, b) {
        g.exports = b(68169)
    }, 47048: function(g, _, b) {
        g.exports = b(89273)
    }, 14224: function(g) {
        var _, b, F, U = g.exports = {};

        function defaultSetTimout() {
            throw Error("setTimeout has not been defined")
        }

        function defaultClearTimeout() {
            throw Error("clearTimeout has not been defined")
        }

        function runTimeout(g) {
            if (_ === setTimeout) return setTimeout(g, 0);
            if ((_ === defaultSetTimout || !_) && setTimeout) return _ = setTimeout, setTimeout(g, 0);
            try {
                return _(g, 0)
            } catch (b) {
                try {
                    return _.call(null, g, 0)
                } catch (b) {
                    return _.call(this, g, 0)
                }
            }
        }! function() {
            try {
                _ = "function" == typeof setTimeout ? setTimeout : defaultSetTimout
            } catch (g) {
                _ = defaultSetTimout
            }
            try {
                b = "function" == typeof clearTimeout ? clearTimeout : defaultClearTimeout
            } catch (g) {
                b = defaultClearTimeout
            }
        }();
        var Y = [],
            Q = !1,
            er = -1;

        function cleanUpNextTick() {
            Q && F && (Q = !1, F.length ? Y = F.concat(Y) : er = -1, Y.length && drainQueue())
        }

        function drainQueue() {
            if (!Q) {
                var g = runTimeout(cleanUpNextTick);
                Q = !0;
                for (var _ = Y.length; _;) {
                    for (F = Y, Y = []; ++er < _;) F && F[er].run();
                    er = -1, _ = Y.length
                }
                F = null, Q = !1,
                    function(g) {
                        if (b === clearTimeout) return clearTimeout(g);
                        if ((b === defaultClearTimeout || !b) && clearTimeout) return b = clearTimeout, clearTimeout(g);
                        try {
                            b(g)
                        } catch (_) {
                            try {
                                return b.call(null, g)
                            } catch (_) {
                                return b.call(this, g)
                            }
                        }
                    }(g)
            }
        }

        function Item(g, _) {
            this.fun = g, this.array = _
        }

        function noop() {}
        U.nextTick = function(g) {
            var _ = Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var b = 1; b < arguments.length; b++) _[b - 1] = arguments[b];
            Y.push(new Item(g, _)), 1 !== Y.length || Q || runTimeout(drainQueue)
        }, Item.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, U.title = "browser", U.browser = !0, U.env = {}, U.argv = [], U.version = "", U.versions = {}, U.on = noop, U.addListener = noop, U.once = noop, U.off = noop, U.removeListener = noop, U.removeAllListeners = noop, U.emit = noop, U.prependListener = noop, U.prependOnceListener = noop, U.listeners = function(g) {
            return []
        }, U.binding = function(g) {
            throw Error("process.binding is not supported")
        }, U.cwd = function() {
            return "/"
        }, U.chdir = function(g) {
            throw Error("process.chdir is not supported")
        }, U.umask = function() {
            return 0
        }
    }, 74049: function(g, _, b) {
        "use strict";
        var F = b(36257);

        function emptyFunction() {}

        function emptyFunctionWithReset() {}
        emptyFunctionWithReset.resetWarningCache = emptyFunction, g.exports = function() {
            function shim(g, _, b, U, Y, Q) {
                if (Q !== F) {
                    var er = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                    throw er.name = "Invariant Violation", er
                }
            }

            function getShim() {
                return shim
            }
            shim.isRequired = shim;
            var g = {
                array: shim,
                bigint: shim,
                bool: shim,
                func: shim,
                number: shim,
                object: shim,
                string: shim,
                symbol: shim,
                any: shim,
                arrayOf: getShim,
                element: shim,
                elementType: shim,
                instanceOf: getShim,
                node: shim,
                objectOf: getShim,
                oneOf: getShim,
                oneOfType: getShim,
                shape: getShim,
                exact: getShim,
                checkPropTypes: emptyFunctionWithReset,
                resetWarningCache: emptyFunction
            };
            return g.PropTypes = g, g
        }
    }, 40507: function(g, _, b) {
        g.exports = b(74049)()
    }, 36257: function(g) {
        "use strict";
        g.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    }, 78930: function(g, _, b) {
        "use strict";
        /*!
         * set-value <https://github.com/jonschlinkert/set-value>
         *
         * Copyright (c) 2014-2015, 2017, Jon Schlinkert.
         * Released under the MIT License.
         */
        var F = b(69593),
            U = b(48396),
            Y = b(76805),
            Q = b(63566);

        function isValidKey(g) {
            return "__proto__" !== g && "constructor" !== g && "prototype" !== g
        }
        g.exports = function(g, _, b) {
            if (!Q(g) || (Array.isArray(_) && (_ = [].concat.apply([], _).join(".")), "string" != typeof _)) return g;
            for (var er = F(_, {
                    sep: ".",
                    brackets: !0
                }).filter(isValidKey), ei = er.length, eo = -1, ea = g; ++eo < ei;) {
                var es = er[eo];
                if (eo !== ei - 1) {
                    Q(ea[es]) || (ea[es] = {}), ea = ea[es];
                    continue
                }
                Y(ea[es]) && Y(b) ? ea[es] = U({}, ea[es], b) : ea[es] = b
            }
            return g
        }
    }, 69593: function(g, _, b) {
        "use strict";
        /*!
         * split-string <https://github.com/jonschlinkert/split-string>
         *
         * Copyright (c) 2015-2017, Jon Schlinkert.
         * Released under the MIT License.
         */
        var F = b(85582);

        function getClosingQuote(g, _, b, F) {
            var U = g.indexOf(_, b);
            return "\\" === g.charAt(U - 1) ? getClosingQuote(g, _, U + 1) : U
        }
        g.exports = function(g, _, b) {
            if ("string" != typeof g) throw TypeError("expected a string");
            "function" == typeof _ && (b = _, _ = null), "string" == typeof _ && (_ = {
                sep: _
            });
            var U, Y, Q = F({
                    sep: "."
                }, _),
                er = Q.quotes || ['"', "'", "`"];
            !0 === Q.brackets ? U = {
                "<": ">",
                "(": ")",
                "[": "]",
                "{": "}"
            } : Q.brackets && (U = Q.brackets);
            var ei = [],
                eo = [],
                ea = [""],
                es = Q.sep,
                el = g.length,
                eu = -1;

            function expected() {
                if (U && eo.length) return U[eo[eo.length - 1]]
            }
            for (; ++eu < el;) {
                var ec, ed, ef = g[eu],
                    ep = g[eu + 1],
                    eh = {
                        val: ef,
                        idx: eu,
                        arr: ea,
                        str: g
                    };
                if (ei.push(eh), "\\" === ef) {
                    eh.val = !0 === (ec = eu, "function" == typeof Q.keepEscaping ? Q.keepEscaping(g, ec) : !0 === Q.keepEscaping || "\\" === g[ec + 1]) ? ef + ep : ep, eh.escaped = !0, "function" == typeof b && b(eh), ea[ea.length - 1] += eh.val, eu++;
                    continue
                }
                if (U && U[ef]) {
                    eo.push(ef);
                    var em = expected(),
                        eg = eu + 1;
                    if (-1 !== g.indexOf(em, eg + 1))
                        for (; eo.length && eg < el;) {
                            var e_ = g[++eg];
                            if ("\\" === e_) {
                                e_++;
                                continue
                            }
                            if (-1 !== er.indexOf(e_)) {
                                eg = getClosingQuote(g, e_, eg + 1);
                                continue
                            }
                            if (em = expected(), eo.length && -1 === g.indexOf(em, eg + 1)) break;
                            if (U[e_]) {
                                eo.push(e_);
                                continue
                            }
                            em === e_ && eo.pop()
                        }
                    if (-1 === (Y = eg)) {
                        ea[ea.length - 1] += ef;
                        continue
                    }
                    ef = g.slice(eu, Y + 1), eh.val = ef, eh.idx = eu = Y
                }
                if (-1 !== er.indexOf(ef)) {
                    if (-1 === (Y = getClosingQuote(g, ef, eu + 1))) {
                        ea[ea.length - 1] += ef;
                        continue
                    }
                    ef = !0 === (ed = ef, !0 === Q.keepDoubleQuotes && '"' === ed || !0 === Q.keepSingleQuotes && "'" === ed || Q.keepQuotes) ? g.slice(eu, Y + 1) : g.slice(eu + 1, Y), eh.val = ef, eh.idx = eu = Y
                }
                if ("function" == typeof b && (b(eh, ei), ef = eh.val, eu = eh.idx), eh.val === es && !1 !== eh.split) {
                    ea.push("");
                    continue
                }
                ea[ea.length - 1] += eh.val
            }
            return ea
        }
    }, 34254: function(g, _, b) {
        "use strict";
        b.d(_, {
            Jh: function() {
                return __generator
            },
            _T: function() {
                return __rest
            },
            ev: function() {
                return __spreadArray
            },
            fl: function() {
                return __spread
            },
            mG: function() {
                return __awaiter
            },
            pi: function() {
                return __assign
            }
        });
        var __assign = function() {
            return (__assign = Object.assign || function(g) {
                for (var _, b = 1, F = arguments.length; b < F; b++)
                    for (var U in _ = arguments[b]) Object.prototype.hasOwnProperty.call(_, U) && (g[U] = _[U]);
                return g
            }).apply(this, arguments)
        };

        function __rest(g, _) {
            var b = {};
            for (var F in g) Object.prototype.hasOwnProperty.call(g, F) && 0 > _.indexOf(F) && (b[F] = g[F]);
            if (null != g && "function" == typeof Object.getOwnPropertySymbols)
                for (var U = 0, F = Object.getOwnPropertySymbols(g); U < F.length; U++) 0 > _.indexOf(F[U]) && Object.prototype.propertyIsEnumerable.call(g, F[U]) && (b[F[U]] = g[F[U]]);
            return b
        }

        function __awaiter(g, _, b, F) {
            return new(b || (b = Promise))(function(U, Y) {
                function fulfilled(g) {
                    try {
                        step(F.next(g))
                    } catch (g) {
                        Y(g)
                    }
                }

                function rejected(g) {
                    try {
                        step(F.throw(g))
                    } catch (g) {
                        Y(g)
                    }
                }

                function step(g) {
                    var _;
                    g.done ? U(g.value) : ((_ = g.value) instanceof b ? _ : new b(function(g) {
                        g(_)
                    })).then(fulfilled, rejected)
                }
                step((F = F.apply(g, _ || [])).next())
            })
        }

        function __generator(g, _) {
            var b, F, U, Y, Q = {
                label: 0,
                sent: function() {
                    if (1 & U[0]) throw U[1];
                    return U[1]
                },
                trys: [],
                ops: []
            };
            return Y = {
                next: verb(0),
                throw: verb(1),
                return: verb(2)
            }, "function" == typeof Symbol && (Y[Symbol.iterator] = function() {
                return this
            }), Y;

            function verb(Y) {
                return function(er) {
                    return function(Y) {
                        if (b) throw TypeError("Generator is already executing.");
                        for (; Q;) try {
                            if (b = 1, F && (U = 2 & Y[0] ? F.return : Y[0] ? F.throw || ((U = F.return) && U.call(F), 0) : F.next) && !(U = U.call(F, Y[1])).done) return U;
                            switch (F = 0, U && (Y = [2 & Y[0], U.value]), Y[0]) {
                                case 0:
                                case 1:
                                    U = Y;
                                    break;
                                case 4:
                                    return Q.label++, {
                                        value: Y[1],
                                        done: !1
                                    };
                                case 5:
                                    Q.label++, F = Y[1], Y = [0];
                                    continue;
                                case 7:
                                    Y = Q.ops.pop(), Q.trys.pop();
                                    continue;
                                default:
                                    if (!(U = (U = Q.trys).length > 0 && U[U.length - 1]) && (6 === Y[0] || 2 === Y[0])) {
                                        Q = 0;
                                        continue
                                    }
                                    if (3 === Y[0] && (!U || Y[1] > U[0] && Y[1] < U[3])) {
                                        Q.label = Y[1];
                                        break
                                    }
                                    if (6 === Y[0] && Q.label < U[1]) {
                                        Q.label = U[1], U = Y;
                                        break
                                    }
                                    if (U && Q.label < U[2]) {
                                        Q.label = U[2], Q.ops.push(Y);
                                        break
                                    }
                                    U[2] && Q.ops.pop(), Q.trys.pop();
                                    continue
                            }
                            Y = _.call(g, Q)
                        } catch (g) {
                            Y = [6, g], F = 0
                        } finally {
                            b = U = 0
                        }
                        if (5 & Y[0]) throw Y[1];
                        return {
                            value: Y[0] ? Y[1] : void 0,
                            done: !0
                        }
                    }([Y, er])
                }
            }
        }

        function __spread() {
            for (var g = [], _ = 0; _ < arguments.length; _++) g = g.concat(function(g, _) {
                var b = "function" == typeof Symbol && g[Symbol.iterator];
                if (!b) return g;
                var F, U, Y = b.call(g),
                    Q = [];
                try {
                    for (;
                        (void 0 === _ || _-- > 0) && !(F = Y.next()).done;) Q.push(F.value)
                } catch (g) {
                    U = {
                        error: g
                    }
                } finally {
                    try {
                        F && !F.done && (b = Y.return) && b.call(Y)
                    } finally {
                        if (U) throw U.error
                    }
                }
                return Q
            }(arguments[_]));
            return g
        }

        function __spreadArray(g, _, b) {
            if (b || 2 == arguments.length)
                for (var F, U = 0, Y = _.length; U < Y; U++) !F && U in _ || (F || (F = Array.prototype.slice.call(_, 0, U)), F[U] = _[U]);
            return g.concat(F || Array.prototype.slice.call(_))
        }
    }, 31171: function(g, _, b) {
        "use strict";
        b.d(_, {
            Z: function() {
                return create
            }
        });
        var F = b(50959);
        let U = "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
            Y = U ? F.useEffect : F.useLayoutEffect;

        function create(g) {
            let _ = "function" == typeof g ? function(g) {
                    let _;
                    let b = new Set,
                        setState = (g, F) => {
                            let U = "function" == typeof g ? g(_) : g;
                            if (U !== _) {
                                let g = _;
                                _ = F ? U : Object.assign({}, _, U), b.forEach(b => b(_, g))
                            }
                        },
                        getState = () => _,
                        subscribeWithSelector = (g, F = getState, U = Object.is) => {
                            console.warn("[DEPRECATED] Please use `subscribeWithSelector` middleware");
                            let Y = F(_);

                            function listenerToAdd() {
                                let b = F(_);
                                if (!U(Y, b)) {
                                    let _ = Y;
                                    g(Y = b, _)
                                }
                            }
                            return b.add(listenerToAdd), () => b.delete(listenerToAdd)
                        },
                        F = {
                            setState,
                            getState,
                            subscribe: (g, _, F) => _ || F ? subscribeWithSelector(g, _, F) : (b.add(g), () => b.delete(g)),
                            destroy: () => b.clear()
                        };
                    return _ = g(setState, getState, F), F
                }(g) : g,
                useStore = (g = _.getState, b = Object.is) => {
                    let U;
                    let [, Q] = (0, F.useReducer)(g => g + 1, 0), er = _.getState(), ei = (0, F.useRef)(er), eo = (0, F.useRef)(g), ea = (0, F.useRef)(b), es = (0, F.useRef)(!1), el = (0, F.useRef)();
                    void 0 === el.current && (el.current = g(er));
                    let eu = !1;
                    (ei.current !== er || eo.current !== g || ea.current !== b || es.current) && (U = g(er), eu = !b(el.current, U)), Y(() => {
                        eu && (el.current = U), ei.current = er, eo.current = g, ea.current = b, es.current = !1
                    });
                    let ec = (0, F.useRef)(er);
                    Y(() => {
                        let listener = () => {
                                try {
                                    let g = _.getState(),
                                        b = eo.current(g);
                                    ea.current(el.current, b) || (ei.current = g, el.current = b, Q())
                                } catch (g) {
                                    es.current = !0, Q()
                                }
                            },
                            g = _.subscribe(listener);
                        return _.getState() !== ec.current && listener(), g
                    }, []);
                    let ed = eu ? U : el.current;
                    return (0, F.useDebugValue)(ed), ed
                };
            return Object.assign(useStore, _), useStore[Symbol.iterator] = function() {
                console.warn("[useStore, api] = create() is deprecated and will be removed in v4");
                let g = [useStore, _];
                return {
                    next() {
                        let _ = g.length <= 0;
                        return {
                            value: g.shift(),
                            done: _
                        }
                    }
                }
            }, useStore
        }
    }, 82187: function(g, _) {
        var b;
        /*!
        	Copyright (c) 2018 Jed Watson.
        	Licensed under the MIT License (MIT), see