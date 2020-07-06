(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/RestaurantVisits/Create.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/RestaurantVisits/Create.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shared_Layouts_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Shared/Layouts/Layout */ "./resources/js/Shared/Layouts/Layout.vue");
/* harmony import */ var _Shared_Layouts_PageLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Shared/Layouts/PageLayout */ "./resources/js/Shared/Layouts/PageLayout.vue");
/* harmony import */ var _Shared_InertiaPagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Shared/InertiaPagination */ "./resources/js/Shared/InertiaPagination.vue");
/* harmony import */ var _Shared_LoadingButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Shared/LoadingButton */ "./resources/js/Shared/LoadingButton.vue");
/* harmony import */ var _Shared_ResponseMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Shared/ResponseMessage */ "./resources/js/Shared/ResponseMessage.vue");
/* harmony import */ var _Shared_Form_InputErrorMessages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Shared/Form/InputErrorMessages */ "./resources/js/Shared/Form/InputErrorMessages.vue");
/* harmony import */ var _Shared_Form_InputWithErrorMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Shared/Form/InputWithErrorMessage */ "./resources/js/Shared/Form/InputWithErrorMessage.vue");
/* harmony import */ var _Shared_Form_Autocompletes_AutocompleteModelSearch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Shared/Form/Autocompletes/AutocompleteModelSearch */ "./resources/js/Shared/Form/Autocompletes/AutocompleteModelSearch.vue");
/* harmony import */ var _Shared_Form_Autocompletes_AutocompleteModelMultiselect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Shared/Form/Autocompletes/AutocompleteModelMultiselect */ "./resources/js/Shared/Form/Autocompletes/AutocompleteModelMultiselect.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    restaurant: null
  },
  components: {
    AutocompleteModelMultiselect: _Shared_Form_Autocompletes_AutocompleteModelMultiselect__WEBPACK_IMPORTED_MODULE_8__["default"],
    AutocompleteModelSearch: _Shared_Form_Autocompletes_AutocompleteModelSearch__WEBPACK_IMPORTED_MODULE_7__["default"],
    PageLayout: _Shared_Layouts_PageLayout__WEBPACK_IMPORTED_MODULE_1__["default"],
    LoadingButton: _Shared_LoadingButton__WEBPACK_IMPORTED_MODULE_3__["default"],
    ResponseMessage: _Shared_ResponseMessage__WEBPACK_IMPORTED_MODULE_4__["default"],
    InputWithErrorMessage: _Shared_Form_InputWithErrorMessage__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  data: function data() {
    return {
      form: {
        data: {
          visit_date: this.$moment().format('YYYY-MM-DDTHH:mm'),
          meals: [],
          restaurant_id: this.restaurant ? this.restaurant.id : ''
        },
        isLoading: false
      }
    };
  },
  layout: _Shared_Layouts_Layout__WEBPACK_IMPORTED_MODULE_0__["default"],
  methods: {
    submit: function submit() {
      var _this = this;

      this.form.isLoading = true;
      this.$inertia.post('/visits', this.form.data).then(function () {
        _this.form.isLoading = false;
      });
    }
  },
  computed: {
    total: function total() {
      var total = _.sumBy(this.form.data.meals, function (item) {
        return Number(item.price);
      });

      return Math.round(total * 1000) / 1000;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/RestaurantVisits/Create.vue?vue&type=template&id=ac5100a6&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/RestaurantVisits/Create.vue?vue&type=template&id=ac5100a6&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("PageLayout", {
    attrs: { title: "Restaurantbesuch erstellen" },
    scopedSlots: _vm._u([
      {
        key: "body",
        fn: function() {
          return [
            _c("div", { staticClass: "col-md-12" }, [
              _c("div", { staticClass: "card" }, [
                _c(
                  "div",
                  { staticClass: "card-body" },
                  [
                    _c("ResponseMessage", { attrs: { "hide-errors": true } }),
                    _vm._v(" "),
                    _c(
                      "form",
                      {
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                            return _vm.submit($event)
                          }
                        }
                      },
                      [
                        !_vm.restaurant
                          ? _c("div", { staticClass: "form-group row" }, [
                              _c(
                                "label",
                                {
                                  staticClass: "col-md-3 control-label",
                                  attrs: { for: "restaurant_id" }
                                },
                                [_vm._v("Restaurant")]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "col-md-9" },
                                [
                                  _c("AutocompleteModelSearch", {
                                    attrs: {
                                      id: "restaurant_id",
                                      model: "restaurants",
                                      "primary-key": "id",
                                      resultValueCallback: function(res) {
                                        return (
                                          res.name +
                                          " - " +
                                          (res.address ? res.address.city : "")
                                        )
                                      }
                                    },
                                    model: {
                                      value: _vm.form.data.restaurant_id,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.form.data,
                                          "restaurant_id",
                                          $$v
                                        )
                                      },
                                      expression: "form.data.restaurant_id"
                                    }
                                  }),
                                  _vm._v(" "),
                                  !_vm.form.data.restaurant_id
                                    ? _c(
                                        "small",
                                        { staticClass: "form-text text-muted" },
                                        [
                                          _vm._v(
                                            "\n                                    Hast du noch kein Restaurant hinzugefügt?\n                                    "
                                          ),
                                          _c(
                                            "inertia-link",
                                            {
                                              attrs: {
                                                href: "/restaurant/create"
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "Dann trag sie hier ein!\n                                    "
                                              )
                                            ]
                                          )
                                        ],
                                        1
                                      )
                                    : _vm._e()
                                ],
                                1
                              )
                            ])
                          : _c("div", { staticClass: "form-group row" }, [
                              _c(
                                "label",
                                {
                                  staticClass: "col-md-3 control-label",
                                  attrs: { for: "restaurant_id" }
                                },
                                [_vm._v("Restaurant")]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-9" }, [
                                _c("input", {
                                  staticClass: "form-control",
                                  attrs: {
                                    id: "restaurant_id",
                                    type: "text",
                                    disabled: ""
                                  },
                                  domProps: { value: _vm.restaurant.name }
                                })
                              ])
                            ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group row" }, [
                          _c(
                            "label",
                            {
                              staticClass: "col-md-3 control-label",
                              attrs: { for: "meals" }
                            },
                            [_vm._v("Verzehrte Gerichte")]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-9" },
                            [
                              _c("AutocompleteModelMultiselect", {
                                attrs: {
                                  id: "meals",
                                  disabled: !_vm.form.data.restaurant_id,
                                  model:
                                    "restaurants/" +
                                    _vm.form.data.restaurant_id +
                                    "/meals",
                                  "primary-key": "id",
                                  "item-multiselect": true,
                                  resultValueCallback: function(res) {
                                    return (
                                      res.name + " für " + res.price_formated
                                    )
                                  }
                                },
                                scopedSlots: _vm._u(
                                  [
                                    _vm.total > 0
                                      ? {
                                          key: "table_end",
                                          fn: function() {
                                            return [
                                              _c("tr", [
                                                _c("td", [
                                                  _vm._v("Insgesamt:")
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm._f("money")(_vm.total)
                                                    )
                                                  )
                                                ])
                                              ])
                                            ]
                                          },
                                          proxy: true
                                        }
                                      : null
                                  ],
                                  null,
                                  true
                                ),
                                model: {
                                  value: _vm.form.data.meals,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form.data, "meals", $$v)
                                  },
                                  expression: "form.data.meals"
                                }
                              }),
                              _vm._v(" "),
                              _vm.form.data.restaurant_id && _vm.total <= 0
                                ? _c(
                                    "small",
                                    { staticClass: "form-text text-muted" },
                                    [
                                      _vm._v(
                                        "\n                                    Hast du noch keine Gerichte hinzugefügt?\n                                    "
                                      ),
                                      _c(
                                        "inertia-link",
                                        {
                                          attrs: {
                                            href:
                                              "/meals/create?restaurant=" +
                                              _vm.form.data.restaurant_id
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "Dann\n                                        trag sie hier ein!\n                                    "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e()
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group row" }, [
                          _c(
                            "label",
                            {
                              staticClass: "col-md-3 control-label",
                              attrs: { for: "input_visit_date" }
                            },
                            [_vm._v("Zeitpunkt")]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-9" },
                            [
                              _c("InputWithErrorMessage", {
                                attrs: {
                                  "model-data": _vm.form.data,
                                  "model-key": "visit_date",
                                  type: "datetime-local"
                                }
                              })
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "form-group form-submit text-center d-flex float-right"
                          },
                          [
                            _c(
                              "inertia-link",
                              {
                                staticClass: "btn btn-default",
                                attrs: { href: "/visits" }
                              },
                              [
                                _vm._v(
                                  "\n                                Abbrechen\n                            "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "LoadingButton",
                              {
                                attrs: {
                                  isLoading: _vm.form.isLoading,
                                  type: "submit",
                                  className: "btn btn-primary",
                                  text: "Hinzufügen"
                                }
                              },
                              [_c("i", { staticClass: "mdi mdi-plus" })]
                            )
                          ],
                          1
                        )
                      ]
                    )
                  ],
                  1
                )
              ])
            ])
          ]
        },
        proxy: true
      }
    ])
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/RestaurantVisits/Create.vue":
/*!********************************************************!*\
  !*** ./resources/js/Pages/RestaurantVisits/Create.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_vue_vue_type_template_id_ac5100a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=ac5100a6&scoped=true& */ "./resources/js/Pages/RestaurantVisits/Create.vue?vue&type=template&id=ac5100a6&scoped=true&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/Pages/RestaurantVisits/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_ac5100a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_vue_vue_type_template_id_ac5100a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ac5100a6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/RestaurantVisits/Create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/RestaurantVisits/Create.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/Pages/RestaurantVisits/Create.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/RestaurantVisits/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/RestaurantVisits/Create.vue?vue&type=template&id=ac5100a6&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/Pages/RestaurantVisits/Create.vue?vue&type=template&id=ac5100a6&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_ac5100a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=ac5100a6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/RestaurantVisits/Create.vue?vue&type=template&id=ac5100a6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_ac5100a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_ac5100a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);