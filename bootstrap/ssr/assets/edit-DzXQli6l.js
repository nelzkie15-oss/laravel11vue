import { unref, withCtx, createTextVNode, openBlock, createBlock, toDisplayString, createCommentVNode, createVNode, withModifiers, withDirectives, vModelText, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./MainLayout-CKCLREI6.js";
import { useForm, Head, Link } from "@inertiajs/vue3";
const _sfc_main = {
  __name: "edit",
  __ssrInlineRender: true,
  props: {
    errors: Object,
    product: Object
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      name: props.product.name,
      price: props.product.price
    });
    const updateProduct = () => {
      const res = form.put(route("products.update", props.product.id));
      if (res) {
        form.reset();
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(unref(Head), { title: "Edit Product" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.$page.props.flash.message) {
              _push2(`<div class="alert"${_scopeId}>${ssrInterpolate(_ctx.$page.props.flash.message)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="mx-4 mt-4"${_scopeId}><div class="flex justify-between"${_scopeId}><h5 class="mb-2"${_scopeId}>Edit Product</h5>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("products.index"),
              class: "p-2 mt-3 mb-4 text-white bg-red-500 rounded float-end"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Back`);
                } else {
                  return [
                    createTextVNode("Back")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><form${_scopeId}><div class="grid grid-cols-12 gap-4"${_scopeId}><div class="col-span-3"${_scopeId}><div class="mb-3"${_scopeId}><label for="Product Name"${_scopeId}>Product Name</label><input type="text"${ssrRenderAttr("value", unref(form).name)} class="w-full py-1"${_scopeId}>`);
            if (__props.errors.name) {
              _push2(`<div class="text-red-500"${_scopeId}>${ssrInterpolate(__props.errors.name)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="mb-3"${_scopeId}><label for="Product Price"${_scopeId}>Product Price</label><input type="text"${ssrRenderAttr("value", unref(form).price)} class="w-full py-1"${_scopeId}>`);
            if (__props.errors.price) {
              _push2(`<div class="text-red-500"${_scopeId}>${ssrInterpolate(__props.errors.price)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="mb-3"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("products.index"),
              class: "inline-block px-5 py-2 mb-4 mr-2 text-white bg-red-600 rounded"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Back`);
                } else {
                  return [
                    createTextVNode("Back")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<button type="submit"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="px-5 py-2 mb-4 text-white bg-red-600 rounded"${_scopeId}>`);
            if (unref(form).processing) {
              _push2(`<span${_scopeId}>Update...</span>`);
            } else {
              _push2(`<span${_scopeId}>Update</span>`);
            }
            _push2(`</button></div></div></div></form></div>`);
          } else {
            return [
              _ctx.$page.props.flash.message ? (openBlock(), createBlock("div", {
                key: 0,
                class: "alert"
              }, toDisplayString(_ctx.$page.props.flash.message), 1)) : createCommentVNode("", true),
              createVNode("div", { class: "mx-4 mt-4" }, [
                createVNode("div", { class: "flex justify-between" }, [
                  createVNode("h5", { class: "mb-2" }, "Edit Product"),
                  createVNode(unref(Link), {
                    href: _ctx.route("products.index"),
                    class: "p-2 mt-3 mb-4 text-white bg-red-500 rounded float-end"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Back")
                    ]),
                    _: 1
                  }, 8, ["href"])
                ]),
                createVNode("form", {
                  onSubmit: withModifiers(($event) => updateProduct(), ["prevent"])
                }, [
                  createVNode("div", { class: "grid grid-cols-12 gap-4" }, [
                    createVNode("div", { class: "col-span-3" }, [
                      createVNode("div", { class: "mb-3" }, [
                        createVNode("label", { for: "Product Name" }, "Product Name"),
                        withDirectives(createVNode("input", {
                          type: "text",
                          "onUpdate:modelValue": ($event) => unref(form).name = $event,
                          class: "w-full py-1"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, unref(form).name]
                        ]),
                        __props.errors.name ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "text-red-500"
                        }, toDisplayString(__props.errors.name), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "mb-3" }, [
                        createVNode("label", { for: "Product Price" }, "Product Price"),
                        withDirectives(createVNode("input", {
                          type: "text",
                          "onUpdate:modelValue": ($event) => unref(form).price = $event,
                          class: "w-full py-1"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, unref(form).price]
                        ]),
                        __props.errors.price ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "text-red-500"
                        }, toDisplayString(__props.errors.price), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "mb-3" }, [
                        createVNode(unref(Link), {
                          href: _ctx.route("products.index"),
                          class: "inline-block px-5 py-2 mb-4 mr-2 text-white bg-red-600 rounded"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Back")
                          ]),
                          _: 1
                        }, 8, ["href"]),
                        createVNode("button", {
                          type: "submit",
                          disabled: unref(form).processing,
                          class: "px-5 py-2 mb-4 text-white bg-red-600 rounded"
                        }, [
                          unref(form).processing ? (openBlock(), createBlock("span", { key: 0 }, "Update...")) : (openBlock(), createBlock("span", { key: 1 }, "Update"))
                        ], 8, ["disabled"])
                      ])
                    ])
                  ])
                ], 40, ["onSubmit"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Main/Product/edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
