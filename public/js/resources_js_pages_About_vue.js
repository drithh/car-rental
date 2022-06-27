"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_About_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/About.vue?vue&type=script&setup=true&lang=js":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/About.vue?vue&type=script&setup=true&lang=js ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! animejs */ "./node_modules/animejs/lib/anime.es.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm-bundler.js");
/* harmony import */ var _components_BottomBorder_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/BottomBorder.vue */ "./resources/js/components/BottomBorder.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();

    var animateHorizontal = function animateHorizontal(id, start, end, delay) {
      (0,animejs__WEBPACK_IMPORTED_MODULE_0__["default"])({
        targets: id,
        translateX: [start, end],
        easing: "easeInOutQuart",
        duration: 800,
        delay: delay
      }).finished;
    };

    var animateVertical = function animateVertical(id, start, end, delay) {
      (0,animejs__WEBPACK_IMPORTED_MODULE_0__["default"])({
        targets: id,
        translateY: [start, end],
        easing: "easeInOutQuart",
        duration: 800,
        delay: delay
      }).finished;
    };

    var onPageEnter = function onPageEnter() {
      animateHorizontal("#title", "100vw", "0", 0);
      animateHorizontal("#sejarah", "100vw", "0", 100);
      animateHorizontal("#misi", "100vw", "0", 200);
    };

    (0,vue_router__WEBPACK_IMPORTED_MODULE_2__.onBeforeRouteLeave)(function (to, from, next) {
      animateHorizontal("#title", "0", "-100vw", 0);
      animateHorizontal("#sejarah", "0", "-100vw", 100);
      animateHorizontal("#misi", "0", "-100vw", 200);
      setTimeout(function () {
        next();
      }, 800);
    });
    var __returned__ = {
      animateHorizontal: animateHorizontal,
      animateVertical: animateVertical,
      onPageEnter: onPageEnter,
      anime: animejs__WEBPACK_IMPORTED_MODULE_0__["default"],
      onBeforeRouteLeave: vue_router__WEBPACK_IMPORTED_MODULE_2__.onBeforeRouteLeave,
      BottomBorder: _components_BottomBorder_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/BottomBorder.vue?vue&type=template&id=74ba22bc":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/BottomBorder.vue?vue&type=template&id=74ba22bc ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "bottom-border m-auto h-32 border-b border-b-secondary border-opacity-50 lg:w-[92vw]"
};
function render(_ctx, _cache) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", _hoisted_1);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/About.vue?vue&type=template&id=520b5d54":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/About.vue?vue&type=template&id=520b5d54 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "overflow-hidden"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", {
  "class": "faq relative m-auto my-14 flex flex-col place-content-center place-items-center gap-y-16 lg:w-[60vw]"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  id: "title",
  "class": "my-6 font-Yantramanav text-[3rem] font-black text-primary opacity-90"
}, " Tentang Kami "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  id: "sejarah",
  "class": "wrapper flex flex-col place-content-start gap-y-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "font-Yantramanav text-4xl font-bold text-primary opacity-90"
}, " Sejarah "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "text-justify font-Yantramanav text-2xl text-primary opacity-70"
}, " Sejak didirikan pada tahun 2022, RENTAL telah berkembang dengan sangat pesat dalam waktu dekat. Dengan harga yang terjangkau serta lokasi yang strategis, RENTAL telah menjadi pilihan andalan bagi banyak orang, senantiasa melayani kebutuhan anda di manapun dan kapanpun. ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  id: "misi",
  "class": "wrapper flex flex-col place-content-start gap-y-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "font-Yantramanav text-4xl font-bold text-primary opacity-90"
}, " Misi "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "text-justify font-Yantramanav text-2xl text-primary opacity-70"
}, " Kami berdedikasi dalam memberikan anda pelayanan yang terbaik, menyesuaikan dengan keinginan dan keperluan anda. Variasi armada yang kami miliki mencakup berbagai macam jenis kendaraan, mulai dari mobil listrik ramah lingkungan hingga mobil berkapasitas penumpang tinggi, kepuasan anda pasti terjamin. ")])], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    name: "page",
    onEnter: $setup.onPageEnter,
    appear: ""
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["BottomBorder"])])];
    }),
    _: 1
    /* STABLE */

  });
}

/***/ }),

/***/ "./resources/js/components/BottomBorder.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/BottomBorder.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BottomBorder_vue_vue_type_template_id_74ba22bc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BottomBorder.vue?vue&type=template&id=74ba22bc */ "./resources/js/components/BottomBorder.vue?vue&type=template&id=74ba22bc");
/* harmony import */ var _home_drith_Repository_rental_mobil_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");

const script = {}

;
const __exports__ = /*#__PURE__*/(0,_home_drith_Repository_rental_mobil_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__["default"])(script, [['render',_BottomBorder_vue_vue_type_template_id_74ba22bc__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/BottomBorder.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/pages/About.vue":
/*!**************************************!*\
  !*** ./resources/js/pages/About.vue ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _About_vue_vue_type_template_id_520b5d54__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./About.vue?vue&type=template&id=520b5d54 */ "./resources/js/pages/About.vue?vue&type=template&id=520b5d54");
/* harmony import */ var _About_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./About.vue?vue&type=script&setup=true&lang=js */ "./resources/js/pages/About.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _home_drith_Repository_rental_mobil_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_drith_Repository_rental_mobil_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_About_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_About_vue_vue_type_template_id_520b5d54__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/pages/About.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/pages/About.vue?vue&type=script&setup=true&lang=js":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/About.vue?vue&type=script&setup=true&lang=js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_About_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_About_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./About.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/About.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/components/BottomBorder.vue?vue&type=template&id=74ba22bc":
/*!********************************************************************************!*\
  !*** ./resources/js/components/BottomBorder.vue?vue&type=template&id=74ba22bc ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BottomBorder_vue_vue_type_template_id_74ba22bc__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BottomBorder_vue_vue_type_template_id_74ba22bc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BottomBorder.vue?vue&type=template&id=74ba22bc */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/BottomBorder.vue?vue&type=template&id=74ba22bc");


/***/ }),

/***/ "./resources/js/pages/About.vue?vue&type=template&id=520b5d54":
/*!********************************************************************!*\
  !*** ./resources/js/pages/About.vue?vue&type=template&id=520b5d54 ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_About_vue_vue_type_template_id_520b5d54__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_About_vue_vue_type_template_id_520b5d54__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./About.vue?vue&type=template&id=520b5d54 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/About.vue?vue&type=template&id=520b5d54");


/***/ })

}]);