import { unref, withCtx, createTextVNode, createVNode, withModifiers, withDirectives, vModelText, openBlock, createBlock, toDisplayString, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./MainLayout-CKCLREI6.js";
import { useForm, Head, Link } from "@inertiajs/vue3";
const _sfc_main = {
  __name: "create",
  __ssrInlineRender: true,
  props: { errors: Object },
  setup(__props) {
    const form = useForm({
      name: "",
      price: ""
    });
    const saveProduct = () => {
      const res = form.post(route("products.store"));
      if (res) {
        form.reset();
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(unref(Head), { title: "Create Product" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mx-4 mt-4"${_scopeId}><div class="flex justify-between"${_scopeId}><h5 class="mb-2"${_scopeId}>Create Product</h5>`);
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
            _push2(`<button type="submit" class="px-5 py-2 mb-4 text-white bg-red-600 rounded"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}${_scopeId}>`);
            if (unref(form).processing) {
              _push2(`<span${_scopeId}>Save...</span>`);
            } else {
              _push2(`<span${_scopeId}>Save</span>`);
            }
            _push2(`</button></div></div></div></form></div>`);
          } else {
            return [
              createVNode("div", { class: "mx-4 mt-4" }, [
                createVNode("div", { class: "flex justify-between" }, [
                  createVNode("h5", { class: "mb-2" }, "Create Product"),
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
                  onSubmit: withModifiers(($event) => saveProduct(), ["prevent"])
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
                          class: "px-5 py-2 mb-4 text-white bg-red-600 rounded",
                          disabled: unref(form).processing
                        }, [
                          unref(form).processing ? (openBlock(), createBlock("span", { key: 0 }, "Save...")) : (openBlock(), createBlock("span", { key: 1 }, "Save"))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Main/Product/create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
