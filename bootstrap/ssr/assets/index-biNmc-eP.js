import { unref, withCtx, createTextVNode, openBlock, createBlock, toDisplayString, createCommentVNode, createVNode, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./MainLayout-CKCLREI6.js";
import { useForm, Head, Link } from "@inertiajs/vue3";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    products: Array
  },
  setup(__props) {
    const form = useForm({});
    const deleteProduct = (productID) => {
      if (confirm("Are you sure you want to delete this product?")) {
        form.delete(route("products.destroy", productID));
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(unref(Head), { title: "Product" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.$page.props.flash.message) {
              _push2(`<div class="px-4 py-2 mx-5 mt-4 bg-green-200 alert"${_scopeId}>${ssrInterpolate(_ctx.$page.props.flash.message)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="mx-4 mt-4"${_scopeId}><h5 class="mb-2"${_scopeId}>Product Lists</h5>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("products.create"),
              class: "p-1 mt-3 mb-2 text-white bg-green-500 rounded float-end"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Add Product`);
                } else {
                  return [
                    createTextVNode("Add Product")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="mx-4 mt-4"${_scopeId}><table class="w-full bg-white border border-gray-200 shadow"${_scopeId}><thead${_scopeId}><tr${_scopeId}><td class="px-4 py-2 text-left border"${_scopeId}>ID</td><td class="px-4 py-2 text-left border"${_scopeId}>NAME</td><td class="px-4 py-2 text-left border"${_scopeId}>PRICE</td><td class="px-4 py-2 text-left border"${_scopeId}>ACTION</td></tr></thead><tbody${_scopeId}><!--[-->`);
            ssrRenderList(__props.products, (item, index) => {
              _push2(`<tr${_scopeId}><td class="px-4 py-2 border"${_scopeId}>${ssrInterpolate(item.id)}</td><td class="px-4 py-2 border"${_scopeId}>${ssrInterpolate(item.name)}</td><td class="px-4 py-2 border"${_scopeId}>${ssrInterpolate(item.price)}</td><td${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("products.show", item.id),
                class: "inline-block p-3 px-2 py-1 mt-3 mb-4 ml-2 text-white bg-blue-500 rounded me-2"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` show`);
                  } else {
                    return [
                      createTextVNode(" show")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("products.edit", item.id),
                class: "inline-block p-3 px-2 py-1 mt-3 mb-4 text-white bg-orange-500 rounded me-2"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` edit`);
                  } else {
                    return [
                      createTextVNode(" edit")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<button type="submit" class="inline-block p-3 px-2 py-1 mt-3 mb-4 ml-2 text-white bg-red-600 rounded"${_scopeId}> Delete </button></td></tr>`);
            });
            _push2(`<!--]--></tbody></table></div>`);
          } else {
            return [
              _ctx.$page.props.flash.message ? (openBlock(), createBlock("div", {
                key: 0,
                class: "px-4 py-2 mx-5 mt-4 bg-green-200 alert"
              }, toDisplayString(_ctx.$page.props.flash.message), 1)) : createCommentVNode("", true),
              createVNode("div", { class: "mx-4 mt-4" }, [
                createVNode("h5", { class: "mb-2" }, "Product Lists"),
                createVNode(unref(Link), {
                  href: _ctx.route("products.create"),
                  class: "p-1 mt-3 mb-2 text-white bg-green-500 rounded float-end"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Add Product")
                  ]),
                  _: 1
                }, 8, ["href"])
              ]),
              createVNode("div", { class: "mx-4 mt-4" }, [
                createVNode("table", { class: "w-full bg-white border border-gray-200 shadow" }, [
                  createVNode("thead", null, [
                    createVNode("tr", null, [
                      createVNode("td", { class: "px-4 py-2 text-left border" }, "ID"),
                      createVNode("td", { class: "px-4 py-2 text-left border" }, "NAME"),
                      createVNode("td", { class: "px-4 py-2 text-left border" }, "PRICE"),
                      createVNode("td", { class: "px-4 py-2 text-left border" }, "ACTION")
                    ])
                  ]),
                  createVNode("tbody", null, [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.products, (item, index) => {
                      return openBlock(), createBlock("tr", { key: index }, [
                        createVNode("td", { class: "px-4 py-2 border" }, toDisplayString(item.id), 1),
                        createVNode("td", { class: "px-4 py-2 border" }, toDisplayString(item.name), 1),
                        createVNode("td", { class: "px-4 py-2 border" }, toDisplayString(item.price), 1),
                        createVNode("td", null, [
                          createVNode(unref(Link), {
                            href: _ctx.route("products.show", item.id),
                            class: "inline-block p-3 px-2 py-1 mt-3 mb-4 ml-2 text-white bg-blue-500 rounded me-2"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" show")
                            ]),
                            _: 2
                          }, 1032, ["href"]),
                          createVNode(unref(Link), {
                            href: _ctx.route("products.edit", item.id),
                            class: "inline-block p-3 px-2 py-1 mt-3 mb-4 text-white bg-orange-500 rounded me-2"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" edit")
                            ]),
                            _: 2
                          }, 1032, ["href"]),
                          createVNode("button", {
                            type: "submit",
                            onClick: ($event) => deleteProduct(item.id),
                            class: "inline-block p-3 px-2 py-1 mt-3 mb-4 ml-2 text-white bg-red-600 rounded"
                          }, " Delete ", 8, ["onClick"])
                        ])
                      ]);
                    }), 128))
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Main/Product/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
