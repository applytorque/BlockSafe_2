import {
  a as d,
  o as n,
  m as o,
  K as s,
  V as u,
  P as a,
  W as p,
  R as f,
  S as k,
  c as x,
  w as h,
  M as v,
  X as C,
  j as y,
  l as $,
} from "./entry.6d072c04.js";
import b from "./KitReadMore.4b5243bd.js";
/* empty css                          */ const g = { class: "item-component" },
  w = { key: 0, class: "icon" },
  B = { class: "description" },
  I = { class: "platforms-with-link" },
  N = { class: "platforms" },
  V = d({
    __name: "ItemComponent",
    props: { item: { type: Object, required: !0 } },
    setup(t) {
      const l = (c) => (c === "Twitter" ? "fill" : "stroke");
      return (c, E) => {
        const i = C,
          r = y,
          m = b;
        return (
          n(),
          o("div", g, [
            t.item.icon
              ? (n(),
                o("div", w, [
                  s(
                    i,
                    { name: `Ecosystem/${t.item.icon}`, fill: "" },
                    null,
                    8,
                    ["name"]
                  ),
                ]))
              : u("", !0),
            a("div", B, p(t.item.description), 1),
            a("div", I, [
              a("div", N, [
                (n(!0),
                o(
                  f,
                  null,
                  k(
                    t.item.platforms,
                    (e, _) => (
                      n(),
                      x(
                        r,
                        {
                          key: _,
                          class: v(["platform-item", l(e.icon)]),
                          to: e.link,
                          target: "_blank",
                          "aria-label": e.icon,
                        },
                        {
                          default: h(() => [
                            s(
                              i,
                              { name: `Platforms/${e.icon}`, fill: "" },
                              null,
                              8,
                              ["name"]
                            ),
                          ]),
                          _: 2,
                        },
                        1032,
                        ["class", "to", "aria-label"]
                      )
                    )
                  ),
                  128
                )),
              ]),
              s(
                m,
                {
                  link: t.item.link,
                  text: "Explore",
                  class: "read-more",
                  external: "",
                },
                null,
                8,
                ["link"]
              ),
            ]),
          ])
        );
      };
    },
  }),
  L = $(V, [["__scopeId", "data-v-a133c29c"]]);
export { L as default };
