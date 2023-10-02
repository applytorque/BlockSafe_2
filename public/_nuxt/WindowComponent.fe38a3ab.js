import p from "./KitReadMore.4b5243bd.js";
import {
  a as k,
  D as f,
  f as C,
  o as a,
  m as c,
  P as t,
  R as h,
  S as x,
  M as y,
  u as n,
  W as d,
  c as b,
  V as w,
  a2 as u,
  a3 as m,
  l as B,
} from "./entry.6d072c04.js";
/* empty css                          */ /* empty css                          */ const M =
    { class: "developer-window" },
  g = { class: "menu" },
  D = ["onClick"],
  L = { class: "content" },
  N = { class: "content-title" },
  S = ["innerHTML"],
  V = { class: "nav-buttons" },
  $ = k({
    __name: "WindowComponent",
    props: { elements: { type: Array, required: !0 } },
    setup(l) {
      const _ = l,
        e = f(0),
        s = C(() => _.elements[e.value]);
      return (H, o) => {
        const v = p;
        return (
          a(),
          c("div", M, [
            t("div", g, [
              (a(!0),
              c(
                h,
                null,
                x(
                  l.elements,
                  (r, i) => (
                    a(),
                    c(
                      "div",
                      {
                        key: i,
                        class: y(["menu-link", { current: n(e) === i }]),
                        onClick: (I) => (e.value = i),
                      },
                      d(r.title),
                      11,
                      D
                    )
                  )
                ),
                128
              )),
            ]),
            t("div", L, [
              t("div", N, d(n(s).title), 1),
              t(
                "div",
                { class: "content-body", innerHTML: n(s).body },
                null,
                8,
                S
              ),
              n(s).link
                ? (a(),
                  b(
                    v,
                    {
                      key: 0,
                      link: n(s).link,
                      class: "read-more",
                      external: "",
                    },
                    null,
                    8,
                    ["link"]
                  ))
                : w("", !0),
              t("div", V, [
                u(
                  t(
                    "div",
                    {
                      class: "nav-btn",
                      onClick: o[0] || (o[0] = (r) => (e.value -= 1)),
                    },
                    "Previous",
                    512
                  ),
                  [[m, n(e) !== 0]]
                ),
                u(
                  t(
                    "div",
                    {
                      class: "nav-btn next-btn",
                      onClick: o[1] || (o[1] = (r) => (e.value += 1)),
                    },
                    "Next",
                    512
                  ),
                  [[m, n(e) !== l.elements.length - 1]]
                ),
              ]),
            ]),
          ])
        );
      };
    },
  }),
  q = B($, [["__scopeId", "data-v-a87fc970"]]);
export { q as default };
