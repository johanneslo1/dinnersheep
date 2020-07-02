(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Home.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Home.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shared_Layouts_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Shared/Layouts/Layout */ "./resources/js/Shared/Layouts/Layout.vue");
/* harmony import */ var _Shared_AddRecordCards_AddRestaurantVisit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Shared/AddRecordCards/AddRestaurantVisit */ "./resources/js/Shared/AddRecordCards/AddRestaurantVisit.vue");
/* harmony import */ var _Shared_AddRecordCards_AddFavouriteMeal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Shared/AddRecordCards/AddFavouriteMeal */ "./resources/js/Shared/AddRecordCards/AddFavouriteMeal.vue");
/* harmony import */ var _Shared_AddRecordCards_AddVisitorGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Shared/AddRecordCards/AddVisitorGroup */ "./resources/js/Shared/AddRecordCards/AddVisitorGroup.vue");
/* harmony import */ var _Shared_Charts_AveragePerWeekday__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Shared/Charts/AveragePerWeekday */ "./resources/js/Shared/Charts/AveragePerWeekday.vue");
/* harmony import */ var _Shared_Layouts_PageLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Shared/Layouts/PageLayout */ "./resources/js/Shared/Layouts/PageLayout.vue");
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
  layout: _Shared_Layouts_Layout__WEBPACK_IMPORTED_MODULE_0__["default"],
  components: {
    AddRestaurantVisit: _Shared_AddRecordCards_AddRestaurantVisit__WEBPACK_IMPORTED_MODULE_1__["default"],
    AddFavouriteMeal: _Shared_AddRecordCards_AddFavouriteMeal__WEBPACK_IMPORTED_MODULE_2__["default"],
    AddVisitorGroup: _Shared_AddRecordCards_AddVisitorGroup__WEBPACK_IMPORTED_MODULE_3__["default"],
    AveragePerWeekday: _Shared_Charts_AveragePerWeekday__WEBPACK_IMPORTED_MODULE_4__["default"],
    PageLayout: _Shared_Layouts_PageLayout__WEBPACK_IMPORTED_MODULE_5__["default"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Home.vue?vue&type=template&id=6a63e488&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Home.vue?vue&type=template&id=6a63e488&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************/
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
    attrs: { title: "Dashboard" },
    scopedSlots: _vm._u([
      {
        key: "body",
        fn: function() {
          return [
            _c("div", { staticClass: "col-md-8" }, [
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header" }, [
                  _vm._v(
                    "\n                    Deine Statistik\n                "
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "card-body" },
                  [_c("AveragePerWeekday")],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card mt-3" }, [
                _c("div", { staticClass: "card-header" }, [
                  _vm._v(
                    "\n                    Dein Lieblingsrestaurant\n                "
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card-body" }, [
                  _c("p", [
                    _vm._v("Dein Lieblingsrestaurant ist derzeit Sultan.")
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card mt-3" }, [
                _c("div", { staticClass: "card-header" }, [
                  _vm._v(
                    "\n                    Dein Lieblingsgericht\n                "
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card-body" }, [
                  _c("p", [
                    _vm._v("Dein Lieblingsrestaurant ist derzeit Sultan.")
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card mt-3" }, [
                _c("div", { staticClass: "card-header" }, [
                  _vm._v(
                    "\n                    Dein Lieblingsgericht\n                "
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card-body" }, [
                  _c("p", [
                    _vm._v("Dein Lieblingsrestaurant ist derzeit Sultan.")
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-md-4" },
              [
                _c("AddRestaurantVisit"),
                _vm._v(" "),
                _c("AddFavouriteMeal", { staticClass: "mt-3" }),
                _vm._v(" "),
                _c("AddVisitorGroup", { staticClass: "mt-3" })
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

/***/ "./resources/js/Pages/Home.vue":
/*!*************************************!*\
  !*** ./resources/js/Pages/Home.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_6a63e488_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=6a63e488&scoped=true& */ "./resources/js/Pages/Home.vue?vue&type=template&id=6a63e488&scoped=true&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_6a63e488_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_6a63e488_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6a63e488",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Home.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/Pages/Home.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Home.vue?vue&type=template&id=6a63e488&scoped=true&":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/Home.vue?vue&type=template&id=6a63e488&scoped=true& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_6a63e488_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=6a63e488&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Home.vue?vue&type=template&id=6a63e488&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_6a63e488_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_6a63e488_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);