"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Books_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Books.vue?vue&type=script&setup=true&lang=js":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Books.vue?vue&type=script&setup=true&lang=js ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! animejs */ "./node_modules/animejs/lib/anime.es.js");
/* harmony import */ var _components_BottomBorder_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/BottomBorder.vue */ "./resources/js/components/BottomBorder.vue");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm-bundler.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_flash_Flash_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/flash/Flash.vue */ "./resources/js/components/flash/Flash.vue");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var flash = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)(false);
    var flashMessage = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)("");
    var books = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)([]);

    var cancelOrder = function cancelOrder(id) {
      axios__WEBPACK_IMPORTED_MODULE_3___default().post("/api/books/cancel", {
        id: id
      }).then(function (res) {
        flash.value = true;
        setTimeout(function () {
          flash.value = false;
        }, 5000);
        flashMessage.value = res.data.message;
        console.log(res.data);
      })["catch"](function (err) {
        console.log(err);
      });
    };

    (0,vue__WEBPACK_IMPORTED_MODULE_2__.onMounted)(function () {
      axios__WEBPACK_IMPORTED_MODULE_3___default().get("/api/books").then(function (res) {
        books.value = res.data;
        books.value.forEach(function (item, index) {
          switch (item.keterangan) {
            case "Belum Bayar":
              books.value[index].buttons = ["Bayar", "Batal"];
              break;

            case "Ulasan":
              books.value[index].buttons = ["Beri Ulasan"];
              break;

            default:
              books.value[index].buttons = [];
              break;
          }
        });
        console.log(books.value);
      });
    });

    var animateContainer = function animateContainer(id, start, end, delay) {
      (0,animejs__WEBPACK_IMPORTED_MODULE_0__["default"])({
        targets: id,
        translateX: [start, end],
        easing: "easeInOutQuart",
        duration: 800,
        delay: delay
      });
    };

    var onPageEnter = function onPageEnter() {
      animateContainer(".title", "100vw", "0", 0);
      animateContainer(".book", "100vw", "0", 200);
    };

    (0,vue_router__WEBPACK_IMPORTED_MODULE_5__.onBeforeRouteLeave)(function (to, from, next) {
      animateContainer(".title", "0", "-100vw", 0);
      animateContainer(".book", "0", "-100vw", 200);
      setTimeout(function () {
        next();
      }, 1500);
    });
    var __returned__ = {
      flash: flash,
      flashMessage: flashMessage,
      books: books,
      cancelOrder: cancelOrder,
      animateContainer: animateContainer,
      onPageEnter: onPageEnter,
      anime: animejs__WEBPACK_IMPORTED_MODULE_0__["default"],
      BottomBorder: _components_BottomBorder_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
      onBeforeRouteLeave: vue_router__WEBPACK_IMPORTED_MODULE_5__.onBeforeRouteLeave,
      ref: vue__WEBPACK_IMPORTED_MODULE_2__.ref,
      onMounted: vue__WEBPACK_IMPORTED_MODULE_2__.onMounted,
      axios: (axios__WEBPACK_IMPORTED_MODULE_3___default()),
      Flash: _components_flash_Flash_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Books.vue?vue&type=template&id=1ba085f1":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Books.vue?vue&type=template&id=1ba085f1 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0,
  "class": "overflow-hidden"
};
var _hoisted_2 = {
  "class": "faq relative m-auto mt-14 flex flex-col place-content-center place-items-center lg:w-[92vw]"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  id: "title",
  "class": "title my-12 font-Yantramanav text-5xl font-black text-primary"
}, " Your Books ", -1
/* HOISTED */
);

var _hoisted_4 = {
  "class": "book flex flex-col gap-y-6"
};
var _hoisted_5 = {
  "class": "top flex place-content-between text-secondary"
};
var _hoisted_6 = {
  "class": "tanggal"
};
var _hoisted_7 = {
  "class": "status"
};
var _hoisted_8 = {
  "class": "car flex place-content-between gap-x-4"
};
var _hoisted_9 = {
  "class": "flex flex-row gap-x-4"
};
var _hoisted_10 = ["src"];
var _hoisted_11 = {
  "class": "flex flex-col place-content-between py-6"
};
var _hoisted_12 = {
  "class": "text-lg font-medium text-primary"
};
var _hoisted_13 = {
  "class": "text-secondary"
};
var _hoisted_14 = {
  "class": "flex place-items-center gap-x-8 pr-6"
};

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "block h-16 w-[1px] bg-secondary opacity-50"
}, null, -1
/* HOISTED */
);

var _hoisted_16 = {
  "class": "flex flex-col place-content-center"
};

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "text-secondary"
}, "Harga Sewa", -1
/* HOISTED */
);

var _hoisted_18 = {
  "class": "font-medium text-primary"
};
var _hoisted_19 = {
  "class": "flex place-content-end gap-x-4"
};
var _hoisted_20 = {
  key: 0,
  "class": "w-32 rounded-xl border border-secondary border-opacity-60 bg-darkencream py-2 px-4 text-base opacity-70 hover:border-blue hover:opacity-100"
};
var _hoisted_21 = ["onClick"];
var _hoisted_22 = {
  key: 2,
  "class": "w-32 rounded-xl border border-secondary border-opacity-60 bg-darkencream py-2 px-4 text-base opacity-70 hover:border-blue hover:opacity-100"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    name: "page",
    onEnter: $setup.onPageEnter,
    appear: ""
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [$setup.books.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("main", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Flash"], {
        open: $setup.flash,
        message: $setup.flashMessage,
        onClose: _cache[0] || (_cache[0] = function ($event) {
          return $setup.flash = false;
        })
      }, null, 8
      /* PROPS */
      , ["open", "message"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.books, function (item, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
          key: index,
          "class": "flex h-56 w-[60vw] flex-col place-content-between rounded-xl border-2 border-secondary border-opacity-50 px-6 pt-3 pb-6"
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.tanggal_transaksi), 1
        /* TEXT */
        ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.keterangan), 1
        /* TEXT */
        )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
          src: item.image_link,
          "class": "h-24 w-36 rounded-xl border border-secondary border-opacity-20",
          alt: "car"
        }, null, 8
        /* PROPS */
        , _hoisted_10), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.model), 1
        /* TEXT */
        ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.type), 1
        /* TEXT */
        )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [_hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [_hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, " Rp" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.harga_sewa), 1
        /* TEXT */
        )])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(item.buttons, function (button, index) {
          return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
            key: index,
            onClick: _cache[1] || (_cache[1] = function () {
              return _ctx.updateProfile && _ctx.updateProfile.apply(_ctx, arguments);
            })
          }, [button === 'Bayar' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", _hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(button), 1
          /* TEXT */
          )) : button === 'Batal' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
            key: 1,
            onClick: function onClick($event) {
              return $setup.cancelOrder(item.booking_id);
            },
            "class": "w-32 rounded-xl border border-secondary border-opacity-60 bg-darkencream py-2 px-4 text-base opacity-70 hover:border-blue hover:opacity-100"
          }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(button), 9
          /* TEXT, PROPS */
          , _hoisted_21)) : button === 'Beri Ulasan' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", _hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(button), 1
          /* TEXT */
          )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
        }), 128
        /* KEYED_FRAGMENT */
        ))])]);
      }), 128
      /* KEYED_FRAGMENT */
      ))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["BottomBorder"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
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

/***/ "./resources/js/pages/Books.vue":
/*!**************************************!*\
  !*** ./resources/js/pages/Books.vue ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Books_vue_vue_type_template_id_1ba085f1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Books.vue?vue&type=template&id=1ba085f1 */ "./resources/js/pages/Books.vue?vue&type=template&id=1ba085f1");
/* harmony import */ var _Books_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Books.vue?vue&type=script&setup=true&lang=js */ "./resources/js/pages/Books.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _home_drith_Repository_rental_mobil_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_drith_Repository_rental_mobil_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Books_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Books_vue_vue_type_template_id_1ba085f1__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/pages/Books.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/pages/Books.vue?vue&type=script&setup=true&lang=js":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/Books.vue?vue&type=script&setup=true&lang=js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Books_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Books_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Books.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Books.vue?vue&type=script&setup=true&lang=js");
 

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

/***/ "./resources/js/pages/Books.vue?vue&type=template&id=1ba085f1":
/*!********************************************************************!*\
  !*** ./resources/js/pages/Books.vue?vue&type=template&id=1ba085f1 ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Books_vue_vue_type_template_id_1ba085f1__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Books_vue_vue_type_template_id_1ba085f1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Books.vue?vue&type=template&id=1ba085f1 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Books.vue?vue&type=template&id=1ba085f1");


/***/ })

}]);