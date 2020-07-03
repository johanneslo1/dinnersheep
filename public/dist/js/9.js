(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Meals/Index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Meals/Index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shared_Layouts_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Shared/Layouts/Layout */ "./resources/js/Shared/Layouts/Layout.vue");
/* harmony import */ var _Shared_Layouts_PageLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Shared/Layouts/PageLayout */ "./resources/js/Shared/Layouts/PageLayout.vue");
/* harmony import */ var _Shared_InertiaPagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Shared/InertiaPagination */ "./resources/js/Shared/InertiaPagination.vue");
/* harmony import */ var _Shared_ResponseMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Shared/ResponseMessage */ "./resources/js/Shared/ResponseMessage.vue");
/* harmony import */ var _Shared_InertiaSearch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Shared/InertiaSearch */ "./resources/js/Shared/InertiaSearch.vue");
/* harmony import */ var _Shared_InertiaSortFilter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Shared/InertiaSortFilter */ "./resources/js/Shared/InertiaSortFilter.vue");
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
    mealsPagination: null
  },
  components: {
    PageLayout: _Shared_Layouts_PageLayout__WEBPACK_IMPORTED_MODULE_1__["default"],
    InertiaPagination: _Shared_InertiaPagination__WEBPACK_IMPORTED_MODULE_2__["default"],
    ResponseMessage: _Shared_ResponseMessage__WEBPACK_IMPORTED_MODULE_3__["default"],
    InertiaSearch: _Shared_InertiaSearch__WEBPACK_IMPORTED_MODULE_4__["default"],
    InertiaSortFilter: _Shared_InertiaSortFilter__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
    return {
      sortFilter: {
        filters: {
          name: '',
          restaurant: '',
          note: ''
        },
        sort: {
          attribute: 'id',
          direction: 'asc'
        }
      }
    };
  },
  layout: _Shared_Layouts_Layout__WEBPACK_IMPORTED_MODULE_0__["default"],
  methods: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Meals/Index.vue?vue&type=template&id=4b917e5a&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Meals/Index.vue?vue&type=template&id=4b917e5a& ***!
  \*********************************************************************************************************************************************************************************************************/
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
    attrs: { title: "Gerichte" },
    scopedSlots: _vm._u([
      {
        key: "action",
        fn: function() {
          return [
            _c(
              "div",
              { staticClass: "d-flex align-items-center" },
              [
                _c("InertiaSearch"),
                _vm._v(" "),
                _c(
                  "inertia-link",
                  {
                    staticClass: "btn btn-primary ml-3",
                    attrs: { href: "/meals/create" }
                  },
                  [
                    _c("i", { staticClass: "mdi mdi-plus" }),
                    _vm._v(" Gericht erstellen\n            ")
                  ]
                )
              ],
              1
            )
          ]
        },
        proxy: true
      },
      {
        key: "body",
        fn: function() {
          return [
            _c(
              "div",
              { staticClass: "col-md-12" },
              [
                _c("ResponseMessage"),
                _vm._v(" "),
                _c("div", { staticClass: "card" }, [
                  _c(
                    "div",
                    { staticClass: "card-body p-0" },
                    [
                      _c("table", { staticClass: "table border-top-0" }, [
                        _c("thead", [
                          _c("tr", [
                            _c(
                              "th",
                              [
                                _c("InertiaSortFilter", {
                                  attrs: {
                                    sortFilter: _vm.sortFilter,
                                    "sort-name": "name",
                                    "filter-name": "name",
                                    placeholder: "Name",
                                    "input-type": "text"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "th",
                              [
                                _c("InertiaSortFilter", {
                                  attrs: {
                                    sortFilter: _vm.sortFilter,
                                    "sort-name": "is_favorite",
                                    "filter-name": "is_favorite",
                                    placeholder: "Lieblingsgericht?",
                                    "input-type": "select"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "th",
                              [
                                _c("InertiaSortFilter", {
                                  attrs: {
                                    sortFilter: _vm.sortFilter,
                                    "sort-name": "note",
                                    "filter-name": "note",
                                    placeholder: "Notiz",
                                    "input-type": "text"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("th", [_vm._v("Aktionen")])
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          _vm._l(_vm.mealsPagination.data, function(meal) {
                            return _c("tr", [
                              _c("td", [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(meal.name) +
                                    "\n                            "
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(meal.is_favorite) +
                                    "\n                            "
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(meal.note) +
                                    "\n                            "
                                )
                              ]),
                              _vm._v(" "),
                              _c("td")
                            ])
                          }),
                          0
                        )
                      ]),
                      _vm._v(" "),
                      _c("InertiaPagination", {
                        attrs: { data: _vm.mealsPagination }
                      })
                    ],
                    1
                  )
                ])
              ],
              1
            )
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

/***/ "./resources/js/Pages/Meals/Index.vue":
/*!********************************************!*\
  !*** ./resources/js/Pages/Meals/Index.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_4b917e5a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=4b917e5a& */ "./resources/js/Pages/Meals/Index.vue?vue&type=template&id=4b917e5a&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Meals/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_4b917e5a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_4b917e5a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Meals/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Meals/Index.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/Pages/Meals/Index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Meals/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Meals/Index.vue?vue&type=template&id=4b917e5a&":
/*!***************************************************************************!*\
  !*** ./resources/js/Pages/Meals/Index.vue?vue&type=template&id=4b917e5a& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_4b917e5a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=4b917e5a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Meals/Index.vue?vue&type=template&id=4b917e5a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_4b917e5a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_4b917e5a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);