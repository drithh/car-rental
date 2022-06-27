(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Profile_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Profile.vue?vue&type=script&setup=true&lang=js":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Profile.vue?vue&type=script&setup=true&lang=js ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_contact_InputBox_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/contact/InputBox.vue */ "./resources/js/components/contact/InputBox.vue");
/* harmony import */ var _components_BottomBorder_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/BottomBorder.vue */ "./resources/js/components/BottomBorder.vue");
/* harmony import */ var v_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! v-calendar */ "./node_modules/v-calendar/dist/v-calendar.es.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! animejs */ "./node_modules/animejs/lib/anime.es.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm-bundler.js");
/* harmony import */ var _components_flash_Flash_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/flash/Flash.vue */ "./resources/js/components/flash/Flash.vue");
/* harmony import */ var _dicebear_avatars__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @dicebear/avatars */ "./node_modules/@dicebear/avatars/dist/index.umd.js");
/* harmony import */ var _dicebear_avatars__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_dicebear_avatars__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _dicebear_adventurer_neutral__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @dicebear/adventurer-neutral */ "./node_modules/@dicebear/adventurer-neutral/dist/index.umd.js");
/* harmony import */ var _dicebear_adventurer_neutral__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_dicebear_adventurer_neutral__WEBPACK_IMPORTED_MODULE_9__);











/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var date = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)();
    var inputValue = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)("");
    var inputEvents = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)("");

    var animateHorizontal = function animateHorizontal(id, start, end, delay) {
      (0,animejs__WEBPACK_IMPORTED_MODULE_6__["default"])({
        targets: id,
        translateX: [start, end],
        easing: "easeInOutQuart",
        duration: 800,
        delay: delay
      });
    };

    var onPageEnter = function onPageEnter() {
      animateHorizontal("#profile", "100vw", "0", 0);
      animateHorizontal("#update-profile", "100vw", "0", 100);
      animateHorizontal("#update-password", "100vw", "0", 200);
    };

    (0,vue_router__WEBPACK_IMPORTED_MODULE_10__.onBeforeRouteLeave)(function (to, from, next) {
      animateHorizontal("#profile", "0", "-100vw", 0);
      animateHorizontal("#update-profile", "0", "-100vw", 100);
      animateHorizontal("#update-password", "0", "-100vw", 200);
      setTimeout(function () {
        next();
      }, 800);
    });
    var gender = [{
      title: "Laki-Laki"
    }, {
      title: "Perempuan"
    }];
    var profile = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({
      name: "",
      email: "",
      jenisKelamin: "",
      tanggalLahir: "",
      nik: "",
      alamat: "",
      notelpon: "",
      nowa: ""
    });
    var username = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)("");
    var email = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)("");
    var lastLogin = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)();
    var formPassword = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({
      currentPassword: "",
      newPassword: ""
    });
    var verified = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var visibility = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)("password");
    var icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)("eye");

    var togglePasswordVisibility = function togglePasswordVisibility() {
      if (visibility.value === "password") {
        visibility.value = "text";
        icon.value = "eye-slash";
      } else {
        visibility.value = "password";
        icon.value = "eye";
      }
    };

    var svg = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)("");
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      axios__WEBPACK_IMPORTED_MODULE_1___default().get("/api/user").then(function (res) {
        username.value = res.data.name;
        email.value = res.data.email;
        var login = Math.ceil(Math.abs(new Date() - new Date(res.data.last_login_at)) / 1000 / 60);
        verified.value = res.data.email_verified_at ? true : false;
        lastLogin.value = "".concat(login, " ").concat(login == 1 ? "minute" : "minutes", " ago");
        svg.value = (0,_dicebear_avatars__WEBPACK_IMPORTED_MODULE_8__.createAvatar)(_dicebear_adventurer_neutral__WEBPACK_IMPORTED_MODULE_9__, {
          seed: username.value,
          dataUri: true,
          size: 352
        });
        profile.value = {
          name: res.data.name,
          email: res.data.email,
          jenisKelamin: res.data.jenis_kelamin,
          tanggalLahir: res.data.tanggal_lahir,
          nik: res.data.nik,
          alamat: res.data.alamat,
          notelpon: res.data.no_telp,
          nowa: res.data.no_wa
        };
        date.value = new Date(res.data.tanggal_lahir);
      })["catch"](function (err) {
        console.log(err);
      });
    });

    var resendEmail = function resendEmail() {
      flash.value = true;
      setTimeout(function () {
        flash.value = false;
      }, 5000);
      flashMessage.value = "Verikasi email telah dikirim ke email anda";
      axios__WEBPACK_IMPORTED_MODULE_1___default().get("/api/resend-email-verification").then(function (res) {})["catch"](function (err) {
        console.log(err);
      });
    };

    var flash = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var flashMessage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)("");

    var updateProfile = function updateProfile() {
      if (profile.value.jenisKelamin) {
        profile.value.jenisKelamin = profile.value.jenisKelamin.title;
      }

      axios__WEBPACK_IMPORTED_MODULE_1___default().put("/api/user", profile.value).then(function (res) {
        flash.value = true;
        setTimeout(function () {
          flash.value = false;
        }, 5000);
        flashMessage.value = res.data.message;
      })["catch"](function (err) {
        console.log(err);
      });
    };

    var __returned__ = {
      date: date,
      inputValue: inputValue,
      inputEvents: inputEvents,
      animateHorizontal: animateHorizontal,
      onPageEnter: onPageEnter,
      gender: gender,
      profile: profile,
      username: username,
      email: email,
      lastLogin: lastLogin,
      formPassword: formPassword,
      verified: verified,
      visibility: visibility,
      icon: icon,
      togglePasswordVisibility: togglePasswordVisibility,
      svg: svg,
      resendEmail: resendEmail,
      flash: flash,
      flashMessage: flashMessage,
      updateProfile: updateProfile,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      onMounted: vue__WEBPACK_IMPORTED_MODULE_0__.onMounted,
      axios: (axios__WEBPACK_IMPORTED_MODULE_1___default()),
      InputBox: _components_contact_InputBox_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
      BottomBorder: _components_BottomBorder_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
      Calendar: v_calendar__WEBPACK_IMPORTED_MODULE_4__.Calendar,
      DatePicker: v_calendar__WEBPACK_IMPORTED_MODULE_4__.DatePicker,
      vSelect: (vue_select__WEBPACK_IMPORTED_MODULE_5___default()),
      anime: animejs__WEBPACK_IMPORTED_MODULE_6__["default"],
      onBeforeRouteLeave: vue_router__WEBPACK_IMPORTED_MODULE_10__.onBeforeRouteLeave,
      Flash: _components_flash_Flash_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
      createAvatar: _dicebear_avatars__WEBPACK_IMPORTED_MODULE_8__.createAvatar,
      style: _dicebear_adventurer_neutral__WEBPACK_IMPORTED_MODULE_9__
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

"use strict";
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Profile.vue?vue&type=template&id=074da5b0":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Profile.vue?vue&type=template&id=074da5b0 ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  id: "profile",
  "class": "profile py-14xl my-8 flex h-[30rem] flex-row place-content-center place-items-center gap-[7%]"
};
var _hoisted_2 = ["src"];
var _hoisted_3 = {
  "class": "flex flex-col gap-y-2"
};
var _hoisted_4 = {
  "class": "flex text-4xl"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Howdy,  ");

var _hoisted_6 = {
  "class": "font-bold"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" ! ");

var _hoisted_8 = {
  "class": "flex text-2xl"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Last login  ");

var _hoisted_10 = {
  "class": "font-bold"
};
var _hoisted_11 = {
  "class": "flex text-2xl"
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Status  ");

var _hoisted_13 = {
  key: 0,
  "class": "font-bold text-lime-500"
};
var _hoisted_14 = {
  key: 1,
  "class": "font-bold text-red-500"
};
var _hoisted_15 = {
  "class": "form flex w-full place-content-center gap-16 px-6"
};
var _hoisted_16 = {
  id: "update-profile",
  "class": "input-container mt-10 flex w-2/5 flex-col gap-y-4"
};

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "my-2 pl-3 text-2xl font-semibold"
}, "Edit Profile", -1
/* HOISTED */
);

var _hoisted_18 = {
  "class": "px-3"
};

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "text-gray-700 mb-2 block font-Yantramanav text-lg font-medium tracking-wide opacity-70"
}, " Jenis Kelamin ", -1
/* HOISTED */
);

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "text-gray-700 mb-2 block font-Yantramanav text-lg font-medium tracking-wide opacity-70"
}, " Tanggal Lahir ", -1
/* HOISTED */
);

var _hoisted_21 = ["value"];
var _hoisted_22 = {
  id: "update-password",
  "class": "input-container mt-10 flex w-2/5 flex-col gap-y-4"
};

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "my-2 pl-3 text-2xl font-semibold"
}, "Change Password", -1
/* HOISTED */
);

var _hoisted_24 = {
  "class": "mt-4 mb-8 pl-3"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    name: "page",
    onEnter: $setup.onPageEnter,
    appear: ""
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Flash"], {
        open: $setup.flash,
        message: $setup.flashMessage,
        onClose: _cache[0] || (_cache[0] = function ($event) {
          return $setup.flash = false;
        })
      }, null, 8
      /* PROPS */
      , ["open", "message"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
        "class": "rounded-full border border-secondary hover:border-opacity-70",
        alt: "Avatar",
        src: $setup.svg
      }, null, 8
      /* PROPS */
      , _hoisted_2), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.username), 1
      /* TEXT */
      ), _hoisted_7]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.lastLogin), 1
      /* TEXT */
      )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [_hoisted_12, $setup.verified ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_13, "verified")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_14, "not verified"))]), !$setup.verified ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 0,
        onClick: $setup.resendEmail,
        "class": "flex text-base text-blue hover:underline"
      }, " resend email verification ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [_hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["InputBox"], {
        textvalue: $setup.profile.name,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = function (e) {
          $setup.profile.name = e;
        }),
        label: "Full Name",
        placeholder: "Jane Doe",
        type: "text"
      }, null, 8
      /* PROPS */
      , ["textvalue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["InputBox"], {
        textvalue: $setup.profile.email,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = function (e) {
          $setup.profile.email = e;
        }),
        label: "Email",
        placeholder: "your@email.com",
        type: "email"
      }, null, 8
      /* PROPS */
      , ["textvalue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [_hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["vSelect"], {
        "class": "gender",
        modelValue: $setup.profile.jenisKelamin,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
          return $setup.profile.jenisKelamin = $event;
        }),
        options: $setup.gender,
        label: "title"
      }, null, 8
      /* PROPS */
      , ["modelValue"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["DatePicker"], {
        modelValue: $setup.date,
        "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
          return $setup.date = $event;
        }),
        "class": "px-3"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref) {
          var inputValue = _ref.inputValue,
              inputEvents = _ref.inputEvents;
          return [_hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
            "class": "text-gray-700 mb-3 block w-full appearance-none rounded-xl border border-secondary border-opacity-60 bg-darkencream bg-opacity-100 py-3 px-4 leading-tight opacity-70 focus:border-blue focus:bg-white focus:outline-none",
            value: inputValue
          }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toHandlers)(inputEvents)), null, 16
          /* FULL_PROPS */
          , _hoisted_21)];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["InputBox"], {
        textvalue: $setup.profile.nik,
        "onUpdate:modelValue": _cache[5] || (_cache[5] = function (e) {
          return $setup.profile.nik = e;
        }),
        label: "NIK",
        placeholder: "5314196206960065",
        type: "text"
      }, null, 8
      /* PROPS */
      , ["textvalue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["InputBox"], {
        textvalue: $setup.profile.alamat,
        "onUpdate:modelValue": _cache[6] || (_cache[6] = function (e) {
          return $setup.profile.alamat = e;
        }),
        label: "Alamat",
        placeholder: "Jl Makan Nasi Goreng",
        type: "text"
      }, null, 8
      /* PROPS */
      , ["textvalue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["InputBox"], {
        textvalue: $setup.profile.notelpon,
        "onUpdate:modelValue": _cache[7] || (_cache[7] = function (e) {
          return $setup.profile.notelpon = e;
        }),
        label: "Nomor Telepon",
        placeholder: "0728 3894 127",
        type: "text"
      }, null, 8
      /* PROPS */
      , ["textvalue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["InputBox"], {
        textvalue: $setup.profile.nowa,
        "onUpdate:modelValue": _cache[8] || (_cache[8] = function (e) {
          return $setup.profile.nowa = e;
        }),
        label: "Nomor Whatsapp",
        placeholder: "0728 3894 127",
        type: "text"
      }, null, 8
      /* PROPS */
      , ["textvalue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        "class": "mt-4 mb-8 pl-3"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": "w-36 rounded-xl border border-secondary border-opacity-60 bg-darkencream py-2 px-6 opacity-70 hover:border-blue hover:opacity-100",
        onClick: $setup.updateProfile
      }, " Update ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [_hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["InputBox"], {
        label: "Current Password",
        placeholder: "password",
        type: "password",
        textvalue: $setup.formPassword.currentPassword,
        "onUpdate:modelValue": _cache[9] || (_cache[9] = function (e) {
          return $setup.formPassword.currentPassword = e;
        })
      }, null, 8
      /* PROPS */
      , ["textvalue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["InputBox"], {
        label: "Current Password",
        placeholder: "password",
        type: "password",
        textvalue: $setup.formPassword.newPassword,
        "onUpdate:modelValue": _cache[10] || (_cache[10] = function (e) {
          return $setup.formPassword.newPassword = e;
        })
      }, null, 8
      /* PROPS */
      , ["textvalue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": "w-36 rounded-xl border border-secondary border-opacity-60 bg-darkencream py-2 px-6 opacity-70 hover:border-blue hover:opacity-100",
        onClick: _cache[11] || (_cache[11] = function () {
          return _ctx.updatePassword && _ctx.updatePassword.apply(_ctx, arguments);
        })
      }, " Update ")])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["BottomBorder"])])];
    }),
    _: 1
    /* STABLE */

  });
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Profile.vue?vue&type=style&index=0&id=074da5b0&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Profile.vue?vue&type=style&index=0&id=074da5b0&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".vc-pane-container{width:100%;position:relative}.vc-pane-container.in-transition{overflow:hidden}.vc-pane-layout{display:grid}.vc-arrow{display:flex;justify-content:center;align-items:center;cursor:pointer;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;pointer-events:auto;color:var(--gray-600);border-width:2px;border-style:solid;border-radius:var(--rounded);border-color:transparent}.vc-arrow:hover{background:var(--gray-200)}.vc-arrow:focus{border-color:var(--gray-300)}.vc-arrow.is-disabled{opacity:.25;pointer-events:none;cursor:not-allowed}.vc-day-popover-container{color:var(--white);background-color:var(--gray-800);border:1px solid;border-color:var(--gray-700);border-radius:var(--rounded);font-size:var(--text-xs);font-weight:var(--font-medium);padding:4px 8px;box-shadow:var(--shadow)}.vc-day-popover-header{font-size:var(--text-xs);color:var(--gray-300);font-weight:var(--font-semibold);text-align:center}.vc-arrows-container{width:100%;position:absolute;top:0;display:flex;justify-content:space-between;padding:8px 10px;pointer-events:none}.vc-arrows-container.title-left{justify-content:flex-end}.vc-arrows-container.title-right{justify-content:flex-start}.vc-is-dark .vc-arrow{color:var(--white)}.vc-is-dark .vc-arrow:hover{background:var(--gray-800)}.vc-is-dark .vc-arrow:focus{border-color:var(--gray-700)}.vc-is-dark .vc-day-popover-container{color:var(--gray-800);background-color:var(--white);border-color:var(--gray-100)}.vc-is-dark .vc-day-popover-header{color:var(--gray-700)}.vc-day{position:relative;min-height:32px;z-index:1}.vc-day.is-not-in-month *{opacity:0;pointer-events:none}.vc-day-layer{position:absolute;left:0;right:0;top:0;bottom:0;pointer-events:none}.vc-day-box-center-center{display:flex;justify-content:center;align-items:center;transform-origin:50% 50%}.vc-day-box-left-center{display:flex;justify-content:flex-start;align-items:center;transform-origin:0% 50%}.vc-day-box-right-center{display:flex;justify-content:flex-end;align-items:center;transform-origin:100% 50%}.vc-day-box-center-bottom{display:flex;justify-content:center;align-items:flex-end}.vc-day-content{display:flex;justify-content:center;align-items:center;font-size:var(--text-sm);font-weight:var(--font-medium);width:28px;height:28px;line-height:28px;border-radius:var(--rounded-full);-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer}.vc-day-content:hover{background-color:#ccd6e04d}.vc-day-content:focus{font-weight:var(--font-bold);background-color:#ccd6e066}.vc-day-content.is-disabled{color:var(--gray-400)}.vc-is-dark .vc-day-content:hover{background-color:#7281974d}.vc-is-dark .vc-day-content:focus{background-color:#72819766}.vc-is-dark .vc-day-content.is-disabled{color:var(--gray-600)}.vc-highlights{overflow:hidden;pointer-events:none;z-index:-1}.vc-highlight{width:28px;height:28px}.vc-highlight.vc-highlight-base-start{width:50%!important;border-radius:0!important;border-right-width:0!important}.vc-highlight.vc-highlight-base-end{width:50%!important;border-radius:0!important;border-left-width:0!important}.vc-highlight.vc-highlight-base-middle{width:100%;border-radius:0!important;border-left-width:0!important;border-right-width:0!important;margin:0 -1px}.vc-dots{display:flex;justify-content:center;align-items:center}.vc-dot{width:5px;height:5px;border-radius:50%;transition:all var(--day-content-transition-time)}.vc-dot:not(:last-child){margin-right:3px}.vc-bars{display:flex;justify-content:flex-start;align-items:center;width:75%}.vc-bar{flex-grow:1;height:3px;transition:all var(--day-content-transition-time)}.vc-nav-header{display:flex;justify-content:space-between}.vc-nav-arrow{display:flex;justify-content:center;align-items:center;cursor:pointer;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;line-height:var(--leading-snug);border-width:2px;border-style:solid;border-color:transparent;border-radius:var(--rounded)}.vc-nav-arrow.is-left{margin-right:auto}.vc-nav-arrow.is-right{margin-left:auto}.vc-nav-arrow.is-disabled{opacity:.25;pointer-events:none;cursor:not-allowed}.vc-nav-arrow:hover{background-color:var(--gray-900)}.vc-nav-arrow:focus{border-color:var(--accent-600)}.vc-nav-title{color:var(--accent-100);font-weight:var(--font-bold);line-height:var(--leading-snug);padding:4px 8px;border-radius:var(--rounded);border-width:2px;border-style:solid;border-color:transparent;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none}.vc-nav-title:hover{background-color:var(--gray-900)}.vc-nav-title:focus{border-color:var(--accent-600)}.vc-nav-items{display:grid;grid-template-columns:repeat(3,1fr);grid-row-gap:2px;grid-column-gap:5px}.vc-nav-item{width:48px;text-align:center;line-height:var(--leading-snug);font-weight:var(--font-semibold);padding:4px 0;cursor:pointer;border-width:2px;border-style:solid;border-color:transparent;border-radius:var(--rounded);-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none}.vc-nav-item:hover{color:var(--white);background-color:var(--gray-900);box-shadow:var(--shadow-inner)}.vc-nav-item.is-active{color:var(--accent-900);background:var(--accent-100);font-weight:var(--font-bold);box-shadow:var(--shadow)}.vc-nav-item.is-current{color:var(--accent-100);font-weight:var(--bold);border-color:var(--accent-100)}.vc-nav-item:focus{border-color:var(--accent-600)}.vc-nav-item.is-disabled{opacity:.25;pointer-events:none}.vc-is-dark .vc-nav-title{color:var(--gray-900)}.vc-is-dark .vc-nav-title:hover{background-color:var(--gray-200)}.vc-is-dark .vc-nav-title:focus{border-color:var(--accent-400)}.vc-is-dark .vc-nav-arrow:hover{background-color:var(--gray-200)}.vc-is-dark .vc-nav-arrow:focus{border-color:var(--accent-400)}.vc-is-dark .vc-nav-item:hover{color:var(--gray-900);background-color:var(--gray-200);box-shadow:none}.vc-is-dark .vc-nav-item.is-active{color:var(--white);background:var(--accent-500)}.vc-is-dark .vc-nav-item.is-current{color:var(--accent-600);border-color:var(--accent-500)}.vc-is-dark .vc-nav-item:focus{border-color:var(--accent-400)}.vc-pane{min-width:250px}.vc-header{display:flex;justify-content:center;align-items:center;padding:10px 16px 0}.vc-header.align-left{justify-content:flex-start}.vc-header.align-right{justify-content:flex-end}.vc-title{font-size:var(--text-lg);color:var(--gray-800);font-weight:var(--font-semibold);line-height:28px;cursor:pointer;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;white-space:nowrap}.vc-title:hover{opacity:.75}.vc-weeknumber{display:flex;justify-content:center;align-items:center;position:relative}.vc-weeknumber-content{display:flex;justify-content:center;align-items:center;font-size:var(--text-xs);font-weight:var(--font-medium);font-style:italic;width:28px;height:28px;margin-top:2px;color:var(--gray-500);-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none}.vc-weeknumber-content.is-left-outside{position:absolute;left:var(--weeknumber-offset)}.vc-weeknumber-content.is-right-outside{position:absolute;right:var(--weeknumber-offset)}.vc-weeks{display:grid;grid-template-columns:repeat(7,1fr);position:relative;-webkit-overflow-scrolling:touch;padding:6px;min-width:250px}.vc-weeks.vc-show-weeknumbers{grid-template-columns:auto repeat(7,1fr)}.vc-weeks.vc-show-weeknumbers.is-right{grid-template-columns:repeat(7,1fr) auto}.vc-weekday{text-align:center;color:var(--gray-500);font-size:var(--text-sm);font-weight:var(--font-bold);line-height:14px;padding-top:4px;padding-bottom:8px;cursor:default;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none}.vc-weekdays{display:flex}.vc-nav-popover-container{color:var(--white);font-size:var(--text-sm);font-weight:var(--font-semibold);background-color:var(--gray-800);border:1px solid;border-color:var(--gray-700);border-radius:var(--rounded-lg);padding:4px;box-shadow:var(--shadow)}.vc-is-dark .vc-header{color:var(--gray-200)}.vc-is-dark .vc-title{color:var(--gray-100)}.vc-is-dark .vc-weekday{color:var(--accent-200)}.vc-is-dark .vc-nav-popover-container{color:var(--gray-800);background-color:var(--white);border-color:var(--gray-100)}.vc-none-enter-active,.vc-none-leave-active{transition-duration:0s}.vc-fade-enter-active,.vc-fade-leave-active,.vc-slide-left-enter-active,.vc-slide-left-leave-active,.vc-slide-right-enter-active,.vc-slide-right-leave-active,.vc-slide-up-enter-active,.vc-slide-up-leave-active,.vc-slide-down-enter-active,.vc-slide-down-leave-active,.vc-slide-fade-enter-active,.vc-slide-fade-leave-active{transition:transform var(--slide-duration) var(--slide-timing),opacity var(--slide-duration) var(--slide-timing);-webkit-backface-visibility:hidden;backface-visibility:hidden;pointer-events:none}.vc-none-leave-active,.vc-fade-leave-active,.vc-slide-left-leave-active,.vc-slide-right-leave-active,.vc-slide-up-leave-active,.vc-slide-down-leave-active{position:absolute!important;width:100%}.vc-none-enter-from,.vc-none-leave-to,.vc-fade-enter-from,.vc-fade-leave-to,.vc-slide-left-enter-from,.vc-slide-left-leave-to,.vc-slide-right-enter-from,.vc-slide-right-leave-to,.vc-slide-up-enter-from,.vc-slide-up-leave-to,.vc-slide-down-enter-from,.vc-slide-down-leave-to,.vc-slide-fade-enter-from,.vc-slide-fade-leave-to{opacity:0}.vc-slide-left-enter-from,.vc-slide-right-leave-to,.vc-slide-fade-enter-from.direction-left,.vc-slide-fade-leave-to.direction-left{transform:translate(var(--slide-translate))}.vc-slide-right-enter-from,.vc-slide-left-leave-to,.vc-slide-fade-enter-from.direction-right,.vc-slide-fade-leave-to.direction-right{transform:translate(calc(-1 * var(--slide-translate)))}.vc-slide-up-enter-from,.vc-slide-down-leave-to,.vc-slide-fade-enter-from.direction-top,.vc-slide-fade-leave-to.direction-top{transform:translateY(var(--slide-translate))}.vc-slide-down-enter-from,.vc-slide-up-leave-to,.vc-slide-fade-enter-from.direction-bottom,.vc-slide-fade-leave-to.direction-bottom{transform:translateY(calc(-1 * var(--slide-translate)))}.vc-popover-content-wrapper{--popover-horizontal-content-offset: 8px;--popover-vertical-content-offset: 10px;--popover-caret-horizontal-offset: 18px;--popover-caret-vertical-offset: 8px;position:absolute;display:block;outline:none;z-index:10}.vc-popover-content-wrapper:not(.is-interactive){pointer-events:none}.vc-popover-content{position:relative;outline:none;z-index:10;box-shadow:var(--shadow-lg)}.vc-popover-content.direction-bottom{margin-top:var(--popover-vertical-content-offset)}.vc-popover-content.direction-top{margin-bottom:var(--popover-vertical-content-offset)}.vc-popover-content.direction-left{margin-right:var(--popover-horizontal-content-offset)}.vc-popover-content.direction-right{margin-left:var(--popover-horizontal-content-offset)}.vc-popover-caret{content:\"\";position:absolute;display:block;width:12px;height:12px;border-top:inherit;border-left:inherit;background-color:inherit;z-index:-1}.vc-popover-caret.direction-bottom{top:0}.vc-popover-caret.direction-bottom.align-left{transform:translateY(-50%) rotate(45deg)}.vc-popover-caret.direction-bottom.align-center{transform:translate(-50%) translateY(-50%) rotate(45deg)}.vc-popover-caret.direction-bottom.align-right{transform:translateY(-50%) rotate(45deg)}.vc-popover-caret.direction-top{top:100%}.vc-popover-caret.direction-top.align-left{transform:translateY(-50%) rotate(-135deg)}.vc-popover-caret.direction-top.align-center{transform:translate(-50%) translateY(-50%) rotate(-135deg)}.vc-popover-caret.direction-top.align-right{transform:translateY(-50%) rotate(-135deg)}.vc-popover-caret.direction-left{left:100%}.vc-popover-caret.direction-left.align-top{transform:translate(-50%) rotate(135deg)}.vc-popover-caret.direction-left.align-middle{transform:translateY(-50%) translate(-50%) rotate(135deg)}.vc-popover-caret.direction-left.align-bottom{transform:translate(-50%) rotate(135deg)}.vc-popover-caret.direction-right{left:0}.vc-popover-caret.direction-right.align-top{transform:translate(-50%) rotate(-45deg)}.vc-popover-caret.direction-right.align-middle{transform:translateY(-50%) translate(-50%) rotate(-45deg)}.vc-popover-caret.direction-right.align-bottom{transform:translate(-50%) rotate(-45deg)}.vc-popover-caret.align-left{left:var(--popover-caret-horizontal-offset)}.vc-popover-caret.align-center{left:50%}.vc-popover-caret.align-right{right:var(--popover-caret-horizontal-offset)}.vc-popover-caret.align-top{top:var(--popover-caret-vertical-offset)}.vc-popover-caret.align-middle{top:50%}.vc-popover-caret.align-bottom{bottom:var(--popover-caret-vertical-offset)}.vc-day-popover-row{--day-content-transition-time: .13s ease-in;display:flex;align-items:center;transition:all var(--day-content-transition-time)}.vc-day-popover-row:not(:first-child){margin-top:3px}.vc-day-popover-row-indicator{display:flex;justify-content:center;align-items:center;flex-grow:0;width:15px;margin-right:3px}.vc-day-popover-row-indicator span{transition:all var(--day-content-transition-time)}.vc-day-popover-row-content{display:flex;align-items:center;flex-wrap:none;flex-grow:1;width:-webkit-max-content;width:-moz-max-content;width:max-content}.vc-svg-icon{display:inline-block;stroke:currentColor;stroke-width:0}.vc-svg-icon path{fill:currentColor}.vc-time-picker{display:flex;align-items:center;padding:8px}.vc-time-picker.vc-invalid{pointer-events:none;opacity:.5}.vc-time-picker.vc-bordered{border-top:1px solid var(--gray-400)}.vc-time-icon{width:16px;height:16px;color:var(--gray-600)}.vc-time-content{margin-left:8px}.vc-time-date{display:flex;align-items:center;font-size:var(--text-sm);font-weight:var(--font-semibold);text-transform:uppercase;padding:0 0 4px 4px;margin-top:-4px;line-height:21px}.vc-time-weekday{color:var(--gray-700);letter-spacing:var(--tracking-wide)}.vc-time-month{color:var(--accent-600);margin-left:8px}.vc-time-day{color:var(--accent-600);margin-left:4px}.vc-time-year{color:var(--gray-500);margin-left:8px}.vc-time-select{display:flex;align-items:center}.vc-am-pm{display:flex;align-items:center;background:var(--gray-200);color:var(--gray-800);margin-left:8px;padding:4px;border-radius:var(--rounded);height:30px}.vc-am-pm button{font-size:var(--text-sm);font-weight:var(--font-medium);padding:0 4px;background:transparent;border:2px solid transparent;border-radius:var(--rounded);line-height:var(--leading-snug)}.vc-am-pm button:hover{color:var(--gray-600)}.vc-am-pm button:focus{border-color:var(--accent-400)}.vc-am-pm button.active{background:var(--accent-600);color:var(--white)}.vc-am-pm button.active:hover{background:var(--accent-500)}.vc-am-pm button.active:focus{border-color:var(--accent-400)}.vc-is-dark .vc-time-picker{border-color:var(--gray-700)}.vc-is-dark .vc-time-icon,.vc-is-dark .vc-time-weekday{color:var(--gray-400)}.vc-is-dark .vc-time-month,.vc-is-dark .vc-time-day{color:var(--accent-400)}.vc-is-dark .vc-time-year{color:var(--gray-500)}.vc-is-dark .vc-am-pm{background:var(--gray-700)}.vc-is-dark .vc-am-pm:focus{border-color:var(--accent-500)}.vc-is-dark .vc-am-pm button{color:var(--gray-100)}.vc-is-dark .vc-am-pm button:hover{color:var(--gray-400)}.vc-is-dark .vc-am-pm button:focus{border-color:var(--accent-500)}.vc-is-dark .vc-am-pm button.active{background:var(--accent-500);color:var(--white)}.vc-is-dark .vc-am-pm button.active:hover{background:var(--accent-600)}.vc-is-dark .vc-am-pm button.active:focus{border-color:var(--accent-500)}.vc-select{position:relative}.vc-select select{flex-grow:1;display:block;-webkit-appearance:none;-moz-appearance:none;appearance:none;width:52px;height:30px;font-size:var(--text-base);font-weight:var(--font-medium);text-align:left;background-color:var(--gray-200);border:2px solid;border-color:var(--gray-200);color:var(--gray-900);padding:0 20px 0 8px;border-radius:var(--rounded);line-height:var(--leading-tight);text-indent:0px;cursor:pointer;-moz-padding-start:3px;background-image:none}.vc-select select:hover{color:var(--gray-600)}.vc-select select:focus{outline:0;border-color:var(--accent-400);background-color:var(--white)}.vc-select-arrow{display:flex;align-items:center;pointer-events:none;position:absolute;top:0;bottom:0;right:0;padding:0 4px 0 0;color:var(--gray-500)}.vc-select-arrow svg{width:16px;height:16px;fill:currentColor}.vc-is-dark select{background:var(--gray-700);color:var(--gray-100);border-color:var(--gray-700)}.vc-is-dark select:hover{color:var(--gray-400)}.vc-is-dark select:focus{border-color:var(--accent-500);background-color:var(--gray-800)}.vc-container{--white: #ffffff;--black: #000000;--gray-100: #f7fafc;--gray-200: #edf2f7;--gray-300: #e2e8f0;--gray-400: #cbd5e0;--gray-500: #a0aec0;--gray-600: #718096;--gray-700: #4a5568;--gray-800: #2d3748;--gray-900: #1a202c;--red-100: #fff5f5;--red-200: #fed7d7;--red-300: #feb2b2;--red-400: #fc8181;--red-500: #f56565;--red-600: #e53e3e;--red-700: #c53030;--red-800: #9b2c2c;--red-900: #742a2a;--orange-100: #fffaf0;--orange-200: #feebc8;--orange-300: #fbd38d;--orange-400: #f6ad55;--orange-500: #ed8936;--orange-600: #dd6b20;--orange-700: #c05621;--orange-800: #9c4221;--orange-900: #7b341e;--yellow-100: #fffff0;--yellow-200: #fefcbf;--yellow-300: #faf089;--yellow-400: #f6e05e;--yellow-500: #ecc94b;--yellow-600: #d69e2e;--yellow-700: #b7791f;--yellow-800: #975a16;--yellow-900: #744210;--green-100: #f0fff4;--green-200: #c6f6d5;--green-300: #9ae6b4;--green-400: #68d391;--green-500: #48bb78;--green-600: #38a169;--green-700: #2f855a;--green-800: #276749;--green-900: #22543d;--teal-100: #e6fffa;--teal-200: #b2f5ea;--teal-300: #81e6d9;--teal-400: #4fd1c5;--teal-500: #38b2ac;--teal-600: #319795;--teal-700: #2c7a7b;--teal-800: #285e61;--teal-900: #234e52;--blue-100: #ebf8ff;--blue-200: #bee3f8;--blue-300: #90cdf4;--blue-400: #63b3ed;--blue-500: #4299e1;--blue-600: #3182ce;--blue-700: #2b6cb0;--blue-800: #2c5282;--blue-900: #2a4365;--indigo-100: #ebf4ff;--indigo-200: #c3dafe;--indigo-300: #a3bffa;--indigo-400: #7f9cf5;--indigo-500: #667eea;--indigo-600: #5a67d8;--indigo-700: #4c51bf;--indigo-800: #434190;--indigo-900: #3c366b;--purple-100: #faf5ff;--purple-200: #e9d8fd;--purple-300: #d6bcfa;--purple-400: #b794f4;--purple-500: #9f7aea;--purple-600: #805ad5;--purple-700: #6b46c1;--purple-800: #553c9a;--purple-900: #44337a;--pink-100: #fff5f7;--pink-200: #fed7e2;--pink-300: #fbb6ce;--pink-400: #f687b3;--pink-500: #ed64a6;--pink-600: #d53f8c;--pink-700: #b83280;--pink-800: #97266d;--pink-900: #702459}.vc-container.vc-red{--accent-100: var(--red-100);--accent-200: var(--red-200);--accent-300: var(--red-300);--accent-400: var(--red-400);--accent-500: var(--red-500);--accent-600: var(--red-600);--accent-700: var(--red-700);--accent-800: var(--red-800);--accent-900: var(--red-900)}.vc-container.vc-orange{--accent-100: var(--orange-100);--accent-200: var(--orange-200);--accent-300: var(--orange-300);--accent-400: var(--orange-400);--accent-500: var(--orange-500);--accent-600: var(--orange-600);--accent-700: var(--orange-700);--accent-800: var(--orange-800);--accent-900: var(--orange-900)}.vc-container.vc-yellow{--accent-100: var(--yellow-100);--accent-200: var(--yellow-200);--accent-300: var(--yellow-300);--accent-400: var(--yellow-400);--accent-500: var(--yellow-500);--accent-600: var(--yellow-600);--accent-700: var(--yellow-700);--accent-800: var(--yellow-800);--accent-900: var(--yellow-900)}.vc-container.vc-green{--accent-100: var(--green-100);--accent-200: var(--green-200);--accent-300: var(--green-300);--accent-400: var(--green-400);--accent-500: var(--green-500);--accent-600: var(--green-600);--accent-700: var(--green-700);--accent-800: var(--green-800);--accent-900: var(--green-900)}.vc-container.vc-teal{--accent-100: var(--teal-100);--accent-200: var(--teal-200);--accent-300: var(--teal-300);--accent-400: var(--teal-400);--accent-500: var(--teal-500);--accent-600: var(--teal-600);--accent-700: var(--teal-700);--accent-800: var(--teal-800);--accent-900: var(--teal-900)}.vc-container.vc-blue{--accent-100: var(--blue-100);--accent-200: var(--blue-200);--accent-300: var(--blue-300);--accent-400: var(--blue-400);--accent-500: var(--blue-500);--accent-600: var(--blue-600);--accent-700: var(--blue-700);--accent-800: var(--blue-800);--accent-900: var(--blue-900)}.vc-container.vc-indigo{--accent-100: var(--indigo-100);--accent-200: var(--indigo-200);--accent-300: var(--indigo-300);--accent-400: var(--indigo-400);--accent-500: var(--indigo-500);--accent-600: var(--indigo-600);--accent-700: var(--indigo-700);--accent-800: var(--indigo-800);--accent-900: var(--indigo-900)}.vc-container.vc-purple{--accent-100: var(--purple-100);--accent-200: var(--purple-200);--accent-300: var(--purple-300);--accent-400: var(--purple-400);--accent-500: var(--purple-500);--accent-600: var(--purple-600);--accent-700: var(--purple-700);--accent-800: var(--purple-800);--accent-900: var(--purple-900)}.vc-container.vc-pink{--accent-100: var(--pink-100);--accent-200: var(--pink-200);--accent-300: var(--pink-300);--accent-400: var(--pink-400);--accent-500: var(--pink-500);--accent-600: var(--pink-600);--accent-700: var(--pink-700);--accent-800: var(--pink-800);--accent-900: var(--pink-900)}.vc-container{--font-normal: 400;--font-medium: 500;--font-semibold: 600;--font-bold: 700;--text-xs: 12px;--text-sm: 14px;--text-base: 16px;--text-lg: 18px;--leading-snug: 1.375;--rounded: .25rem;--rounded-lg: .5rem;--rounded-full: 9999px;--shadow: 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06);--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05);--shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, .06);--slide-translate: 22px;--slide-duration: .15s;--slide-timing: ease;--day-content-transition-time: .13s ease-in;--weeknumber-offset: -34px;position:relative;display:inline-flex;width:-webkit-max-content;width:-moz-max-content;width:max-content;height:-webkit-max-content;height:-moz-max-content;height:max-content;font-family:BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Helvetica,Arial,sans-serif;color:var(--gray-900);background-color:var(--white);border:1px solid;border-color:var(--gray-400);border-radius:var(--rounded-lg);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-tap-highlight-color:transparent}.vc-container,.vc-container *{box-sizing:border-box}.vc-container:focus,.vc-container *:focus{outline:none}.vc-container button,.vc-container [role=button]{cursor:pointer}.vc-container.vc-is-expanded{min-width:100%}.vc-container .vc-container{border:none}.vc-container.vc-is-dark{color:var(--gray-100);background-color:var(--gray-900);border-color:var(--gray-700)}:root{--vs-colors--lightest:rgba(60,60,60,0.26);--vs-colors--light:rgba(60,60,60,0.5);--vs-colors--dark:#333;--vs-colors--darkest:rgba(0,0,0,0.15);--vs-search-input-color:inherit;--vs-search-input-placeholder-color:inherit;--vs-font-size:1rem;--vs-line-height:1.4;--vs-state-disabled-bg:#f8f8f8;--vs-state-disabled-color:var(--vs-colors--light);--vs-state-disabled-controls-color:var(--vs-colors--light);--vs-state-disabled-cursor:not-allowed;--vs-border-color:var(--vs-colors--lightest);--vs-border-width:1px;--vs-border-style:solid;--vs-border-radius:4px;--vs-actions-padding:4px 6px 0 3px;--vs-controls-color:var(--vs-colors--light);--vs-controls-size:1;--vs-controls--deselect-text-shadow:0 1px 0 #fff;--vs-selected-bg:#f0f0f0;--vs-selected-color:var(--vs-colors--dark);--vs-selected-border-color:var(--vs-border-color);--vs-selected-border-style:var(--vs-border-style);--vs-selected-border-width:var(--vs-border-width);--vs-dropdown-bg:#fff;--vs-dropdown-color:inherit;--vs-dropdown-z-index:1000;--vs-dropdown-min-width:160px;--vs-dropdown-max-height:350px;--vs-dropdown-box-shadow:0px 3px 6px 0px var(--vs-colors--darkest);--vs-dropdown-option-bg:#000;--vs-dropdown-option-color:var(--vs-dropdown-color);--vs-dropdown-option-padding:3px 20px;--vs-dropdown-option--active-bg:#5897fb;--vs-dropdown-option--active-color:#fff;--vs-dropdown-option--deselect-bg:#fb5858;--vs-dropdown-option--deselect-color:#fff;--vs-transition-timing-function:cubic-bezier(1,-0.115,0.975,0.855);--vs-transition-duration:150ms}.v-select{font-family:inherit;position:relative}.v-select,.v-select *{box-sizing:border-box}:root{--vs-transition-timing-function:cubic-bezier(1,0.5,0.8,1);--vs-transition-duration:0.15s}@-webkit-keyframes vSelectSpinner{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes vSelectSpinner{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.vs__fade-enter-active,.vs__fade-leave-active{pointer-events:none;transition:opacity var(--vs-transition-duration) var(--vs-transition-timing-function)}.vs__fade-enter,.vs__fade-leave-to{opacity:0}:root{--vs-disabled-bg:var(--vs-state-disabled-bg);--vs-disabled-color:var(--vs-state-disabled-color);--vs-disabled-cursor:var(--vs-state-disabled-cursor)}.vs--disabled .vs__clear,.vs--disabled .vs__dropdown-toggle,.vs--disabled .vs__open-indicator,.vs--disabled .vs__search,.vs--disabled .vs__selected{background-color:var(--vs-disabled-bg);cursor:var(--vs-disabled-cursor)}.v-select[dir=rtl] .vs__actions{padding:0 3px 0 6px}.v-select[dir=rtl] .vs__clear{margin-left:6px;margin-right:0}.v-select[dir=rtl] .vs__deselect{margin-left:0;margin-right:2px}.v-select[dir=rtl] .vs__dropdown-menu{text-align:right}.vs__dropdown-toggle{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:var(--vs-border-width) var(--vs-border-style) var(--vs-border-color);border-radius:var(--vs-border-radius);display:flex;padding:0 0 4px;white-space:normal}.vs__selected-options{display:flex;flex-basis:100%;flex-grow:1;flex-wrap:wrap;padding:0 2px;position:relative}.vs__actions{align-items:center;display:flex;padding:var(--vs-actions-padding)}.vs--searchable .vs__dropdown-toggle{cursor:text}.vs--unsearchable .vs__dropdown-toggle{cursor:pointer}.vs--open .vs__dropdown-toggle{border-bottom-color:transparent;border-bottom-left-radius:0;border-bottom-right-radius:0}.vs__open-indicator{fill:var(--vs-controls-color);transform:scale(var(--vs-controls-size));transition:transform var(--vs-transition-duration) var(--vs-transition-timing-function);transition-timing-function:var(--vs-transition-timing-function)}.vs--open .vs__open-indicator{transform:rotate(180deg) scale(var(--vs-controls-size))}.vs--loading .vs__open-indicator{opacity:0}.vs__clear{fill:var(--vs-controls-color);background-color:transparent;border:0;cursor:pointer;margin-right:8px;padding:0}.vs__dropdown-menu{background:var(--vs-dropdown-bg);border:var(--vs-border-width) var(--vs-border-style) var(--vs-border-color);border-radius:0 0 var(--vs-border-radius) var(--vs-border-radius);border-top-style:none;box-shadow:var(--vs-dropdown-box-shadow);box-sizing:border-box;color:var(--vs-dropdown-color);display:block;left:0;list-style:none;margin:0;max-height:var(--vs-dropdown-max-height);min-width:var(--vs-dropdown-min-width);overflow-y:auto;padding:5px 0;position:absolute;text-align:left;top:calc(100% - var(--vs-border-width));width:100%;z-index:var(--vs-dropdown-z-index)}.vs__no-options{text-align:center}.vs__dropdown-option{clear:both;color:var(--vs-dropdown-option-color);cursor:pointer;display:block;line-height:1.42857143;padding:var(--vs-dropdown-option-padding);white-space:nowrap}.vs__dropdown-option--highlight{background:var(--vs-dropdown-option--active-bg);color:var(--vs-dropdown-option--active-color)}.vs__dropdown-option--deselect{background:var(--vs-dropdown-option--deselect-bg);color:var(--vs-dropdown-option--deselect-color)}.vs__dropdown-option--disabled{background:var(--vs-state-disabled-bg);color:var(--vs-state-disabled-color);cursor:var(--vs-state-disabled-cursor)}.vs__selected{align-items:center;background-color:var(--vs-selected-bg);border:var(--vs-selected-border-width) var(--vs-selected-border-style) var(--vs-selected-border-color);border-radius:var(--vs-border-radius);color:var(--vs-selected-color);display:flex;line-height:var(--vs-line-height);margin:4px 2px 0;padding:0 .25em;z-index:0}.vs__deselect{fill:var(--vs-controls-color);-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:0;cursor:pointer;display:inline-flex;margin-left:4px;padding:0;text-shadow:var(--vs-controls--deselect-text-shadow)}.vs--single .vs__selected{background-color:transparent;border-color:transparent}.vs--single.vs--loading .vs__selected,.vs--single.vs--open .vs__selected{opacity:.4;position:absolute}.vs--single.vs--searching .vs__selected{display:none}.vs__search::-webkit-search-cancel-button{display:none}.vs__search::-ms-clear,.vs__search::-webkit-search-decoration,.vs__search::-webkit-search-results-button,.vs__search::-webkit-search-results-decoration{display:none}.vs__search,.vs__search:focus{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:1px solid transparent;border-left:none;box-shadow:none;color:var(--vs-search-input-color);flex-grow:1;font-size:var(--vs-font-size);line-height:var(--vs-line-height);margin:4px 0 0;max-width:100%;outline:none;padding:0 7px;width:0;z-index:1}.vs__search::-moz-placeholder{color:var(--vs-search-input-placeholder-color)}.vs__search:-ms-input-placeholder{color:var(--vs-search-input-placeholder-color)}.vs__search::placeholder{color:var(--vs-search-input-placeholder-color)}.vs--unsearchable .vs__search{opacity:1}.vs--unsearchable:not(.vs--disabled) .vs__search{cursor:pointer}.vs--single.vs--searching:not(.vs--open):not(.vs--loading) .vs__search{opacity:.2}.vs__spinner{align-self:center;-webkit-animation:vSelectSpinner 1.1s linear infinite;animation:vSelectSpinner 1.1s linear infinite;border:.9em solid hsla(0,0%,39%,.1);border-left-color:rgba(60,60,60,.45);font-size:5px;opacity:0;overflow:hidden;text-indent:-9999em;transform:translateZ(0) scale(var(--vs-controls--spinner-size,var(--vs-controls-size)));transition:opacity .1s}.vs__spinner,.vs__spinner:after{border-radius:50%;height:5em;transform:scale(var(--vs-controls--spinner-size,var(--vs-controls-size)));width:5em}.vs--loading .vs__spinner{opacity:1}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-23.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Profile.vue?vue&type=style&index=1&id=074da5b0&lang=postcss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-23.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Profile.vue?vue&type=style&index=1&id=074da5b0&lang=postcss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.gender .vs__dropdown-toggle {\n    margin-bottom: 0.75rem;\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n    border-radius: 0.75rem;\n    border-width: 1px;\n    border-color: rgb(168 166 176 / var(--tw-border-opacity));\n    --tw-border-opacity: 0.6;\n    background-color: rgb(253 253 253 / var(--tw-bg-opacity));\n    --tw-bg-opacity: 1;\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n    padding-top: 5px;\n    padding-bottom: 9px\n}\n.gender .vs__dropdown-toggle:focus {\n    --tw-border-opacity: 1;\n    border-color: rgb(67 118 249 / var(--tw-border-opacity));\n    --tw-bg-opacity: 1;\n    background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n    outline: 2px solid transparent;\n    outline-offset: 2px\n}\n.gender .vs__selected {\n    opacity: 0.7\n}\n.gender .vs__dropdown-menu {\n    top: 3rem;\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n    border-radius: 0.75rem;\n    line-height: 1.25;\n    --tw-text-opacity: 0.7 !important\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Profile.vue?vue&type=style&index=0&id=074da5b0&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Profile.vue?vue&type=style&index=0&id=074da5b0&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Profile_vue_vue_type_style_index_0_id_074da5b0_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Profile.vue?vue&type=style&index=0&id=074da5b0&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Profile.vue?vue&type=style&index=0&id=074da5b0&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Profile_vue_vue_type_style_index_0_id_074da5b0_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Profile_vue_vue_type_style_index_0_id_074da5b0_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/v-calendar/dist/v-calendar.es.js":
/*!*******************************************************!*\
  !*** ./node_modules/v-calendar/dist/v-calendar.es.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Calendar": () => (/* binding */ _sfc_main$3),
/* harmony export */   "DatePicker": () => (/* binding */ _sfc_main),
/* harmony export */   "Popover": () => (/* binding */ _sfc_main$9),
/* harmony export */   "PopoverRow": () => (/* binding */ PopoverRow),
/* harmony export */   "Screens": () => (/* binding */ screensPlugin),
/* harmony export */   "SetupCalendar": () => (/* binding */ setup),
/* harmony export */   "default": () => (/* binding */ index)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _popperjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @popperjs/core */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/popper.js");
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};


function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number = Number(dirtyNumber);
  if (isNaN(number)) {
    return number;
  }
  return number < 0 ? Math.ceil(number) : Math.floor(number);
}
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + " argument" + (required > 1 ? "s" : "") + " required, but only " + args.length + " present");
  }
}
function toDate$1(argument) {
  requiredArgs(1, arguments);
  var argStr = Object.prototype.toString.call(argument);
  if (argument instanceof Date || typeof argument === "object" && argStr === "[object Date]") {
    return new Date(argument.getTime());
  } else if (typeof argument === "number" || argStr === "[object Number]") {
    return new Date(argument);
  } else {
    if ((typeof argument === "string" || argStr === "[object String]") && typeof console !== "undefined") {
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule");
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}
function addDays(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var date = toDate$1(dirtyDate);
  var amount = toInteger(dirtyAmount);
  if (isNaN(amount)) {
    return new Date(NaN);
  }
  if (!amount) {
    return date;
  }
  date.setDate(date.getDate() + amount);
  return date;
}
function addMonths(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var date = toDate$1(dirtyDate);
  var amount = toInteger(dirtyAmount);
  if (isNaN(amount)) {
    return new Date(NaN);
  }
  if (!amount) {
    return date;
  }
  var dayOfMonth = date.getDate();
  var endOfDesiredMonth = new Date(date.getTime());
  endOfDesiredMonth.setMonth(date.getMonth() + amount + 1, 0);
  var daysInMonth = endOfDesiredMonth.getDate();
  if (dayOfMonth >= daysInMonth) {
    return endOfDesiredMonth;
  } else {
    date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
    return date;
  }
}
function addYears(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addMonths(dirtyDate, amount * 12);
}
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : typeof self !== "undefined" ? self : {};
var freeGlobal$1 = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var _freeGlobal = freeGlobal$1;
var freeGlobal = _freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root$8 = freeGlobal || freeSelf || Function("return this")();
var _root = root$8;
var root$7 = _root;
var Symbol$7 = root$7.Symbol;
var _Symbol = Symbol$7;
var Symbol$6 = _Symbol;
var objectProto$h = Object.prototype;
var hasOwnProperty$e = objectProto$h.hasOwnProperty;
var nativeObjectToString$1 = objectProto$h.toString;
var symToStringTag$1 = Symbol$6 ? Symbol$6.toStringTag : void 0;
function getRawTag$1(value) {
  var isOwn = hasOwnProperty$e.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var _getRawTag = getRawTag$1;
var objectProto$g = Object.prototype;
var nativeObjectToString = objectProto$g.toString;
function objectToString$1(value) {
  return nativeObjectToString.call(value);
}
var _objectToString = objectToString$1;
var Symbol$5 = _Symbol, getRawTag = _getRawTag, objectToString = _objectToString;
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$5 ? Symbol$5.toStringTag : void 0;
function baseGetTag$a(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
var _baseGetTag = baseGetTag$a;
function isObjectLike$d(value) {
  return value != null && typeof value == "object";
}
var isObjectLike_1 = isObjectLike$d;
var baseGetTag$9 = _baseGetTag, isObjectLike$c = isObjectLike_1;
var boolTag$4 = "[object Boolean]";
function isBoolean(value) {
  return value === true || value === false || isObjectLike$c(value) && baseGetTag$9(value) == boolTag$4;
}
var isBoolean_1 = isBoolean;
var baseGetTag$8 = _baseGetTag, isObjectLike$b = isObjectLike_1;
var numberTag$4 = "[object Number]";
function isNumber(value) {
  return typeof value == "number" || isObjectLike$b(value) && baseGetTag$8(value) == numberTag$4;
}
var isNumber_1 = isNumber;
var isArray$e = Array.isArray;
var isArray_1 = isArray$e;
var baseGetTag$7 = _baseGetTag, isArray$d = isArray_1, isObjectLike$a = isObjectLike_1;
var stringTag$4 = "[object String]";
function isString(value) {
  return typeof value == "string" || !isArray$d(value) && isObjectLike$a(value) && baseGetTag$7(value) == stringTag$4;
}
var isString_1 = isString;
function isObject$d(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var isObject_1 = isObject$d;
var baseGetTag$6 = _baseGetTag, isObject$c = isObject_1;
var asyncTag = "[object AsyncFunction]", funcTag$2 = "[object Function]", genTag$1 = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction$3(value) {
  if (!isObject$c(value)) {
    return false;
  }
  var tag = baseGetTag$6(value);
  return tag == funcTag$2 || tag == genTag$1 || tag == asyncTag || tag == proxyTag;
}
var isFunction_1 = isFunction$3;
var MAX_SAFE_INTEGER$1 = 9007199254740991;
function isLength$3(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
}
var isLength_1 = isLength$3;
var isFunction$2 = isFunction_1, isLength$2 = isLength_1;
function isArrayLike$6(value) {
  return value != null && isLength$2(value.length) && !isFunction$2(value);
}
var isArrayLike_1 = isArrayLike$6;
var isArrayLike$5 = isArrayLike_1, isObjectLike$9 = isObjectLike_1;
function isArrayLikeObject$1(value) {
  return isObjectLike$9(value) && isArrayLike$5(value);
}
var isArrayLikeObject_1 = isArrayLikeObject$1;
function isUndefined(value) {
  return value === void 0;
}
var isUndefined_1 = isUndefined;
var baseGetTag$5 = _baseGetTag, isObjectLike$8 = isObjectLike_1;
var dateTag$4 = "[object Date]";
function baseIsDate$1(value) {
  return isObjectLike$8(value) && baseGetTag$5(value) == dateTag$4;
}
var _baseIsDate = baseIsDate$1;
function baseUnary$4(func) {
  return function(value) {
    return func(value);
  };
}
var _baseUnary = baseUnary$4;
var _nodeUtil = { exports: {} };
(function(module, exports) {
  var freeGlobal2 = _freeGlobal;
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var freeProcess = moduleExports && freeGlobal2.process;
  var nodeUtil2 = function() {
    try {
      var types = freeModule && freeModule.require && freeModule.require("util").types;
      if (types) {
        return types;
      }
      return freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e) {
    }
  }();
  module.exports = nodeUtil2;
})(_nodeUtil, _nodeUtil.exports);
var baseIsDate = _baseIsDate, baseUnary$3 = _baseUnary, nodeUtil$3 = _nodeUtil.exports;
var nodeIsDate = nodeUtil$3 && nodeUtil$3.isDate;
var isDate$1 = nodeIsDate ? baseUnary$3(nodeIsDate) : baseIsDate;
var isDate_1 = isDate$1;
function baseClamp$1(number, lower, upper) {
  if (number === number) {
    if (upper !== void 0) {
      number = number <= upper ? number : upper;
    }
    if (lower !== void 0) {
      number = number >= lower ? number : lower;
    }
  }
  return number;
}
var _baseClamp = baseClamp$1;
var baseGetTag$4 = _baseGetTag, isObjectLike$7 = isObjectLike_1;
var symbolTag$3 = "[object Symbol]";
function isSymbol$4(value) {
  return typeof value == "symbol" || isObjectLike$7(value) && baseGetTag$4(value) == symbolTag$3;
}
var isSymbol_1 = isSymbol$4;
var isObject$b = isObject_1, isSymbol$3 = isSymbol_1;
var NAN = 0 / 0;
var reTrim = /^\s+|\s+$/g;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber$1(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol$3(value)) {
    return NAN;
  }
  if (isObject$b(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject$b(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, "");
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
var toNumber_1 = toNumber$1;
var baseClamp = _baseClamp, toNumber = toNumber_1;
function clamp(number, lower, upper) {
  if (upper === void 0) {
    upper = lower;
    lower = void 0;
  }
  if (upper !== void 0) {
    upper = toNumber(upper);
    upper = upper === upper ? upper : 0;
  }
  if (lower !== void 0) {
    lower = toNumber(lower);
    lower = lower === lower ? lower : 0;
  }
  return baseClamp(toNumber(number), lower, upper);
}
var clamp_1 = clamp;
var isArray$c = isArray_1, isSymbol$2 = isSymbol_1;
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
function isKey$3(value, object) {
  if (isArray$c(value)) {
    return false;
  }
  var type = typeof value;
  if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol$2(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
var _isKey = isKey$3;
var root$6 = _root;
var coreJsData$1 = root$6["__core-js_shared__"];
var _coreJsData = coreJsData$1;
var coreJsData = _coreJsData;
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked$1(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var _isMasked = isMasked$1;
var funcProto$2 = Function.prototype;
var funcToString$2 = funcProto$2.toString;
function toSource$2(func) {
  if (func != null) {
    try {
      return funcToString$2.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var _toSource = toSource$2;
var isFunction$1 = isFunction_1, isMasked = _isMasked, isObject$a = isObject_1, toSource$1 = _toSource;
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto$1 = Function.prototype, objectProto$f = Object.prototype;
var funcToString$1 = funcProto$1.toString;
var hasOwnProperty$d = objectProto$f.hasOwnProperty;
var reIsNative = RegExp("^" + funcToString$1.call(hasOwnProperty$d).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function baseIsNative$1(value) {
  if (!isObject$a(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction$1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource$1(value));
}
var _baseIsNative = baseIsNative$1;
function getValue$1(object, key) {
  return object == null ? void 0 : object[key];
}
var _getValue = getValue$1;
var baseIsNative = _baseIsNative, getValue = _getValue;
function getNative$7(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : void 0;
}
var _getNative = getNative$7;
var getNative$6 = _getNative;
var nativeCreate$4 = getNative$6(Object, "create");
var _nativeCreate = nativeCreate$4;
var nativeCreate$3 = _nativeCreate;
function hashClear$1() {
  this.__data__ = nativeCreate$3 ? nativeCreate$3(null) : {};
  this.size = 0;
}
var _hashClear = hashClear$1;
function hashDelete$1(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var _hashDelete = hashDelete$1;
var nativeCreate$2 = _nativeCreate;
var HASH_UNDEFINED$2 = "__lodash_hash_undefined__";
var objectProto$e = Object.prototype;
var hasOwnProperty$c = objectProto$e.hasOwnProperty;
function hashGet$1(key) {
  var data2 = this.__data__;
  if (nativeCreate$2) {
    var result = data2[key];
    return result === HASH_UNDEFINED$2 ? void 0 : result;
  }
  return hasOwnProperty$c.call(data2, key) ? data2[key] : void 0;
}
var _hashGet = hashGet$1;
var nativeCreate$1 = _nativeCreate;
var objectProto$d = Object.prototype;
var hasOwnProperty$b = objectProto$d.hasOwnProperty;
function hashHas$1(key) {
  var data2 = this.__data__;
  return nativeCreate$1 ? data2[key] !== void 0 : hasOwnProperty$b.call(data2, key);
}
var _hashHas = hashHas$1;
var nativeCreate = _nativeCreate;
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
function hashSet$1(key, value) {
  var data2 = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data2[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED$1 : value;
  return this;
}
var _hashSet = hashSet$1;
var hashClear = _hashClear, hashDelete = _hashDelete, hashGet = _hashGet, hashHas = _hashHas, hashSet = _hashSet;
function Hash$1(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
Hash$1.prototype.clear = hashClear;
Hash$1.prototype["delete"] = hashDelete;
Hash$1.prototype.get = hashGet;
Hash$1.prototype.has = hashHas;
Hash$1.prototype.set = hashSet;
var _Hash = Hash$1;
function listCacheClear$1() {
  this.__data__ = [];
  this.size = 0;
}
var _listCacheClear = listCacheClear$1;
function eq$6(value, other) {
  return value === other || value !== value && other !== other;
}
var eq_1 = eq$6;
var eq$5 = eq_1;
function assocIndexOf$4(array, key) {
  var length = array.length;
  while (length--) {
    if (eq$5(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var _assocIndexOf = assocIndexOf$4;
var assocIndexOf$3 = _assocIndexOf;
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete$1(key) {
  var data2 = this.__data__, index2 = assocIndexOf$3(data2, key);
  if (index2 < 0) {
    return false;
  }
  var lastIndex = data2.length - 1;
  if (index2 == lastIndex) {
    data2.pop();
  } else {
    splice.call(data2, index2, 1);
  }
  --this.size;
  return true;
}
var _listCacheDelete = listCacheDelete$1;
var assocIndexOf$2 = _assocIndexOf;
function listCacheGet$1(key) {
  var data2 = this.__data__, index2 = assocIndexOf$2(data2, key);
  return index2 < 0 ? void 0 : data2[index2][1];
}
var _listCacheGet = listCacheGet$1;
var assocIndexOf$1 = _assocIndexOf;
function listCacheHas$1(key) {
  return assocIndexOf$1(this.__data__, key) > -1;
}
var _listCacheHas = listCacheHas$1;
var assocIndexOf = _assocIndexOf;
function listCacheSet$1(key, value) {
  var data2 = this.__data__, index2 = assocIndexOf(data2, key);
  if (index2 < 0) {
    ++this.size;
    data2.push([key, value]);
  } else {
    data2[index2][1] = value;
  }
  return this;
}
var _listCacheSet = listCacheSet$1;
var listCacheClear = _listCacheClear, listCacheDelete = _listCacheDelete, listCacheGet = _listCacheGet, listCacheHas = _listCacheHas, listCacheSet = _listCacheSet;
function ListCache$4(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
ListCache$4.prototype.clear = listCacheClear;
ListCache$4.prototype["delete"] = listCacheDelete;
ListCache$4.prototype.get = listCacheGet;
ListCache$4.prototype.has = listCacheHas;
ListCache$4.prototype.set = listCacheSet;
var _ListCache = ListCache$4;
var getNative$5 = _getNative, root$5 = _root;
var Map$3 = getNative$5(root$5, "Map");
var _Map = Map$3;
var Hash = _Hash, ListCache$3 = _ListCache, Map$2 = _Map;
function mapCacheClear$1() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash(),
    "map": new (Map$2 || ListCache$3)(),
    "string": new Hash()
  };
}
var _mapCacheClear = mapCacheClear$1;
function isKeyable$1(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
var _isKeyable = isKeyable$1;
var isKeyable = _isKeyable;
function getMapData$4(map2, key) {
  var data2 = map2.__data__;
  return isKeyable(key) ? data2[typeof key == "string" ? "string" : "hash"] : data2.map;
}
var _getMapData = getMapData$4;
var getMapData$3 = _getMapData;
function mapCacheDelete$1(key) {
  var result = getMapData$3(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
var _mapCacheDelete = mapCacheDelete$1;
var getMapData$2 = _getMapData;
function mapCacheGet$1(key) {
  return getMapData$2(this, key).get(key);
}
var _mapCacheGet = mapCacheGet$1;
var getMapData$1 = _getMapData;
function mapCacheHas$1(key) {
  return getMapData$1(this, key).has(key);
}
var _mapCacheHas = mapCacheHas$1;
var getMapData = _getMapData;
function mapCacheSet$1(key, value) {
  var data2 = getMapData(this, key), size = data2.size;
  data2.set(key, value);
  this.size += data2.size == size ? 0 : 1;
  return this;
}
var _mapCacheSet = mapCacheSet$1;
var mapCacheClear = _mapCacheClear, mapCacheDelete = _mapCacheDelete, mapCacheGet = _mapCacheGet, mapCacheHas = _mapCacheHas, mapCacheSet = _mapCacheSet;
function MapCache$3(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
MapCache$3.prototype.clear = mapCacheClear;
MapCache$3.prototype["delete"] = mapCacheDelete;
MapCache$3.prototype.get = mapCacheGet;
MapCache$3.prototype.has = mapCacheHas;
MapCache$3.prototype.set = mapCacheSet;
var _MapCache = MapCache$3;
var MapCache$2 = _MapCache;
var FUNC_ERROR_TEXT = "Expected a function";
function memoize$1(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize$1.Cache || MapCache$2)();
  return memoized;
}
memoize$1.Cache = MapCache$2;
var memoize_1 = memoize$1;
var memoize = memoize_1;
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped$1(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}
var _memoizeCapped = memoizeCapped$1;
var memoizeCapped = _memoizeCapped;
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath$1 = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46) {
    result.push("");
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
  });
  return result;
});
var _stringToPath = stringToPath$1;
function arrayMap$4(array, iteratee) {
  var index2 = -1, length = array == null ? 0 : array.length, result = Array(length);
  while (++index2 < length) {
    result[index2] = iteratee(array[index2], index2, array);
  }
  return result;
}
var _arrayMap = arrayMap$4;
var Symbol$4 = _Symbol, arrayMap$3 = _arrayMap, isArray$b = isArray_1, isSymbol$1 = isSymbol_1;
var INFINITY$1 = 1 / 0;
var symbolProto$2 = Symbol$4 ? Symbol$4.prototype : void 0, symbolToString = symbolProto$2 ? symbolProto$2.toString : void 0;
function baseToString$1(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray$b(value)) {
    return arrayMap$3(value, baseToString$1) + "";
  }
  if (isSymbol$1(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY$1 ? "-0" : result;
}
var _baseToString = baseToString$1;
var baseToString = _baseToString;
function toString$1(value) {
  return value == null ? "" : baseToString(value);
}
var toString_1 = toString$1;
var isArray$a = isArray_1, isKey$2 = _isKey, stringToPath = _stringToPath, toString = toString_1;
function castPath$6(value, object) {
  if (isArray$a(value)) {
    return value;
  }
  return isKey$2(value, object) ? [value] : stringToPath(toString(value));
}
var _castPath = castPath$6;
var isSymbol = isSymbol_1;
var INFINITY = 1 / 0;
function toKey$6(value) {
  if (typeof value == "string" || isSymbol(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
var _toKey = toKey$6;
var castPath$5 = _castPath, toKey$5 = _toKey;
function baseGet$4(object, path) {
  path = castPath$5(path, object);
  var index2 = 0, length = path.length;
  while (object != null && index2 < length) {
    object = object[toKey$5(path[index2++])];
  }
  return index2 && index2 == length ? object : void 0;
}
var _baseGet = baseGet$4;
var baseGet$3 = _baseGet;
function get$1(object, path, defaultValue) {
  var result = object == null ? void 0 : baseGet$3(object, path);
  return result === void 0 ? defaultValue : result;
}
var get_1 = get$1;
var getNative$4 = _getNative;
var defineProperty$2 = function() {
  try {
    var func = getNative$4(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e) {
  }
}();
var _defineProperty = defineProperty$2;
var defineProperty$1 = _defineProperty;
function baseAssignValue$4(object, key, value) {
  if (key == "__proto__" && defineProperty$1) {
    defineProperty$1(object, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object[key] = value;
  }
}
var _baseAssignValue = baseAssignValue$4;
var baseAssignValue$3 = _baseAssignValue, eq$4 = eq_1;
var objectProto$c = Object.prototype;
var hasOwnProperty$a = objectProto$c.hasOwnProperty;
function assignValue$3(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$a.call(object, key) && eq$4(objValue, value)) || value === void 0 && !(key in object)) {
    baseAssignValue$3(object, key, value);
  }
}
var _assignValue = assignValue$3;
var MAX_SAFE_INTEGER = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex$4(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
var _isIndex = isIndex$4;
var assignValue$2 = _assignValue, castPath$4 = _castPath, isIndex$3 = _isIndex, isObject$9 = isObject_1, toKey$4 = _toKey;
function baseSet$2(object, path, value, customizer) {
  if (!isObject$9(object)) {
    return object;
  }
  path = castPath$4(path, object);
  var index2 = -1, length = path.length, lastIndex = length - 1, nested = object;
  while (nested != null && ++index2 < length) {
    var key = toKey$4(path[index2]), newValue = value;
    if (key === "__proto__" || key === "constructor" || key === "prototype") {
      return object;
    }
    if (index2 != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : void 0;
      if (newValue === void 0) {
        newValue = isObject$9(objValue) ? objValue : isIndex$3(path[index2 + 1]) ? [] : {};
      }
    }
    assignValue$2(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}
var _baseSet = baseSet$2;
var baseSet$1 = _baseSet;
function set(object, path, value) {
  return object == null ? object : baseSet$1(object, path, value);
}
var set_1 = set;
function createBaseFor$1(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index2 = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
    while (length--) {
      var key = props[fromRight ? length : ++index2];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}
var _createBaseFor = createBaseFor$1;
var createBaseFor = _createBaseFor;
var baseFor$2 = createBaseFor();
var _baseFor = baseFor$2;
function baseTimes$1(n, iteratee) {
  var index2 = -1, result = Array(n);
  while (++index2 < n) {
    result[index2] = iteratee(index2);
  }
  return result;
}
var _baseTimes = baseTimes$1;
var baseGetTag$3 = _baseGetTag, isObjectLike$6 = isObjectLike_1;
var argsTag$3 = "[object Arguments]";
function baseIsArguments$1(value) {
  return isObjectLike$6(value) && baseGetTag$3(value) == argsTag$3;
}
var _baseIsArguments = baseIsArguments$1;
var baseIsArguments = _baseIsArguments, isObjectLike$5 = isObjectLike_1;
var objectProto$b = Object.prototype;
var hasOwnProperty$9 = objectProto$b.hasOwnProperty;
var propertyIsEnumerable$1 = objectProto$b.propertyIsEnumerable;
var isArguments$4 = baseIsArguments(function() {
  return arguments;
}()) ? baseIsArguments : function(value) {
  return isObjectLike$5(value) && hasOwnProperty$9.call(value, "callee") && !propertyIsEnumerable$1.call(value, "callee");
};
var isArguments_1 = isArguments$4;
var isBuffer$4 = { exports: {} };
function stubFalse() {
  return false;
}
var stubFalse_1 = stubFalse;
(function(module, exports) {
  var root2 = _root, stubFalse2 = stubFalse_1;
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var Buffer2 = moduleExports ? root2.Buffer : void 0;
  var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
  var isBuffer2 = nativeIsBuffer || stubFalse2;
  module.exports = isBuffer2;
})(isBuffer$4, isBuffer$4.exports);
var baseGetTag$2 = _baseGetTag, isLength$1 = isLength_1, isObjectLike$4 = isObjectLike_1;
var argsTag$2 = "[object Arguments]", arrayTag$2 = "[object Array]", boolTag$3 = "[object Boolean]", dateTag$3 = "[object Date]", errorTag$2 = "[object Error]", funcTag$1 = "[object Function]", mapTag$6 = "[object Map]", numberTag$3 = "[object Number]", objectTag$4 = "[object Object]", regexpTag$3 = "[object RegExp]", setTag$6 = "[object Set]", stringTag$3 = "[object String]", weakMapTag$2 = "[object WeakMap]";
var arrayBufferTag$3 = "[object ArrayBuffer]", dataViewTag$4 = "[object DataView]", float32Tag$2 = "[object Float32Array]", float64Tag$2 = "[object Float64Array]", int8Tag$2 = "[object Int8Array]", int16Tag$2 = "[object Int16Array]", int32Tag$2 = "[object Int32Array]", uint8Tag$2 = "[object Uint8Array]", uint8ClampedTag$2 = "[object Uint8ClampedArray]", uint16Tag$2 = "[object Uint16Array]", uint32Tag$2 = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag$2] = typedArrayTags[float64Tag$2] = typedArrayTags[int8Tag$2] = typedArrayTags[int16Tag$2] = typedArrayTags[int32Tag$2] = typedArrayTags[uint8Tag$2] = typedArrayTags[uint8ClampedTag$2] = typedArrayTags[uint16Tag$2] = typedArrayTags[uint32Tag$2] = true;
typedArrayTags[argsTag$2] = typedArrayTags[arrayTag$2] = typedArrayTags[arrayBufferTag$3] = typedArrayTags[boolTag$3] = typedArrayTags[dataViewTag$4] = typedArrayTags[dateTag$3] = typedArrayTags[errorTag$2] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag$6] = typedArrayTags[numberTag$3] = typedArrayTags[objectTag$4] = typedArrayTags[regexpTag$3] = typedArrayTags[setTag$6] = typedArrayTags[stringTag$3] = typedArrayTags[weakMapTag$2] = false;
function baseIsTypedArray$1(value) {
  return isObjectLike$4(value) && isLength$1(value.length) && !!typedArrayTags[baseGetTag$2(value)];
}
var _baseIsTypedArray = baseIsTypedArray$1;
var baseIsTypedArray = _baseIsTypedArray, baseUnary$2 = _baseUnary, nodeUtil$2 = _nodeUtil.exports;
var nodeIsTypedArray = nodeUtil$2 && nodeUtil$2.isTypedArray;
var isTypedArray$3 = nodeIsTypedArray ? baseUnary$2(nodeIsTypedArray) : baseIsTypedArray;
var isTypedArray_1 = isTypedArray$3;
var baseTimes = _baseTimes, isArguments$3 = isArguments_1, isArray$9 = isArray_1, isBuffer$3 = isBuffer$4.exports, isIndex$2 = _isIndex, isTypedArray$2 = isTypedArray_1;
var objectProto$a = Object.prototype;
var hasOwnProperty$8 = objectProto$a.hasOwnProperty;
function arrayLikeKeys$2(value, inherited) {
  var isArr = isArray$9(value), isArg = !isArr && isArguments$3(value), isBuff = !isArr && !isArg && isBuffer$3(value), isType = !isArr && !isArg && !isBuff && isTypedArray$2(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty$8.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex$2(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
var _arrayLikeKeys = arrayLikeKeys$2;
var objectProto$9 = Object.prototype;
function isPrototype$3(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$9;
  return value === proto;
}
var _isPrototype = isPrototype$3;
function overArg$2(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var _overArg = overArg$2;
var overArg$1 = _overArg;
var nativeKeys$1 = overArg$1(Object.keys, Object);
var _nativeKeys = nativeKeys$1;
var isPrototype$2 = _isPrototype, nativeKeys = _nativeKeys;
var objectProto$8 = Object.prototype;
var hasOwnProperty$7 = objectProto$8.hasOwnProperty;
function baseKeys$1(object) {
  if (!isPrototype$2(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$7.call(object, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
var _baseKeys = baseKeys$1;
var arrayLikeKeys$1 = _arrayLikeKeys, baseKeys = _baseKeys, isArrayLike$4 = isArrayLike_1;
function keys$6(object) {
  return isArrayLike$4(object) ? arrayLikeKeys$1(object) : baseKeys(object);
}
var keys_1 = keys$6;
var baseFor$1 = _baseFor, keys$5 = keys_1;
function baseForOwn$2(object, iteratee) {
  return object && baseFor$1(object, iteratee, keys$5);
}
var _baseForOwn = baseForOwn$2;
var ListCache$2 = _ListCache;
function stackClear$1() {
  this.__data__ = new ListCache$2();
  this.size = 0;
}
var _stackClear = stackClear$1;
function stackDelete$1(key) {
  var data2 = this.__data__, result = data2["delete"](key);
  this.size = data2.size;
  return result;
}
var _stackDelete = stackDelete$1;
function stackGet$1(key) {
  return this.__data__.get(key);
}
var _stackGet = stackGet$1;
function stackHas$1(key) {
  return this.__data__.has(key);
}
var _stackHas = stackHas$1;
var ListCache$1 = _ListCache, Map$1 = _Map, MapCache$1 = _MapCache;
var LARGE_ARRAY_SIZE = 200;
function stackSet$1(key, value) {
  var data2 = this.__data__;
  if (data2 instanceof ListCache$1) {
    var pairs = data2.__data__;
    if (!Map$1 || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data2.size;
      return this;
    }
    data2 = this.__data__ = new MapCache$1(pairs);
  }
  data2.set(key, value);
  this.size = data2.size;
  return this;
}
var _stackSet = stackSet$1;
var ListCache = _ListCache, stackClear = _stackClear, stackDelete = _stackDelete, stackGet = _stackGet, stackHas = _stackHas, stackSet = _stackSet;
function Stack$4(entries) {
  var data2 = this.__data__ = new ListCache(entries);
  this.size = data2.size;
}
Stack$4.prototype.clear = stackClear;
Stack$4.prototype["delete"] = stackDelete;
Stack$4.prototype.get = stackGet;
Stack$4.prototype.has = stackHas;
Stack$4.prototype.set = stackSet;
var _Stack = Stack$4;
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function setCacheAdd$1(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}
var _setCacheAdd = setCacheAdd$1;
function setCacheHas$1(value) {
  return this.__data__.has(value);
}
var _setCacheHas = setCacheHas$1;
var MapCache = _MapCache, setCacheAdd = _setCacheAdd, setCacheHas = _setCacheHas;
function SetCache$1(values) {
  var index2 = -1, length = values == null ? 0 : values.length;
  this.__data__ = new MapCache();
  while (++index2 < length) {
    this.add(values[index2]);
  }
}
SetCache$1.prototype.add = SetCache$1.prototype.push = setCacheAdd;
SetCache$1.prototype.has = setCacheHas;
var _SetCache = SetCache$1;
function arraySome$2(array, predicate) {
  var index2 = -1, length = array == null ? 0 : array.length;
  while (++index2 < length) {
    if (predicate(array[index2], index2, array)) {
      return true;
    }
  }
  return false;
}
var _arraySome = arraySome$2;
function cacheHas$1(cache, key) {
  return cache.has(key);
}
var _cacheHas = cacheHas$1;
var SetCache = _SetCache, arraySome$1 = _arraySome, cacheHas = _cacheHas;
var COMPARE_PARTIAL_FLAG$5 = 1, COMPARE_UNORDERED_FLAG$3 = 2;
function equalArrays$2(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$5, arrLength = array.length, othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index2 = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG$3 ? new SetCache() : void 0;
  stack.set(array, other);
  stack.set(other, array);
  while (++index2 < arrLength) {
    var arrValue = array[index2], othValue = other[index2];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index2, other, array, stack) : customizer(arrValue, othValue, index2, array, other, stack);
    }
    if (compared !== void 0) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    if (seen) {
      if (!arraySome$1(other, function(othValue2, othIndex) {
        if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack["delete"](array);
  stack["delete"](other);
  return result;
}
var _equalArrays = equalArrays$2;
var root$4 = _root;
var Uint8Array$2 = root$4.Uint8Array;
var _Uint8Array = Uint8Array$2;
function mapToArray$2(map2) {
  var index2 = -1, result = Array(map2.size);
  map2.forEach(function(value, key) {
    result[++index2] = [key, value];
  });
  return result;
}
var _mapToArray = mapToArray$2;
function setToArray$1(set2) {
  var index2 = -1, result = Array(set2.size);
  set2.forEach(function(value) {
    result[++index2] = value;
  });
  return result;
}
var _setToArray = setToArray$1;
var Symbol$3 = _Symbol, Uint8Array$1 = _Uint8Array, eq$3 = eq_1, equalArrays$1 = _equalArrays, mapToArray$1 = _mapToArray, setToArray = _setToArray;
var COMPARE_PARTIAL_FLAG$4 = 1, COMPARE_UNORDERED_FLAG$2 = 2;
var boolTag$2 = "[object Boolean]", dateTag$2 = "[object Date]", errorTag$1 = "[object Error]", mapTag$5 = "[object Map]", numberTag$2 = "[object Number]", regexpTag$2 = "[object RegExp]", setTag$5 = "[object Set]", stringTag$2 = "[object String]", symbolTag$2 = "[object Symbol]";
var arrayBufferTag$2 = "[object ArrayBuffer]", dataViewTag$3 = "[object DataView]";
var symbolProto$1 = Symbol$3 ? Symbol$3.prototype : void 0, symbolValueOf$1 = symbolProto$1 ? symbolProto$1.valueOf : void 0;
function equalByTag$1(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag$3:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;
    case arrayBufferTag$2:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array$1(object), new Uint8Array$1(other))) {
        return false;
      }
      return true;
    case boolTag$2:
    case dateTag$2:
    case numberTag$2:
      return eq$3(+object, +other);
    case errorTag$1:
      return object.name == other.name && object.message == other.message;
    case regexpTag$2:
    case stringTag$2:
      return object == other + "";
    case mapTag$5:
      var convert = mapToArray$1;
    case setTag$5:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$4;
      convert || (convert = setToArray);
      if (object.size != other.size && !isPartial) {
        return false;
      }
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG$2;
      stack.set(object, other);
      var result = equalArrays$1(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack["delete"](object);
      return result;
    case symbolTag$2:
      if (symbolValueOf$1) {
        return symbolValueOf$1.call(object) == symbolValueOf$1.call(other);
      }
  }
  return false;
}
var _equalByTag = equalByTag$1;
function arrayPush$3(array, values) {
  var index2 = -1, length = values.length, offset = array.length;
  while (++index2 < length) {
    array[offset + index2] = values[index2];
  }
  return array;
}
var _arrayPush = arrayPush$3;
var arrayPush$2 = _arrayPush, isArray$8 = isArray_1;
function baseGetAllKeys$2(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray$8(object) ? result : arrayPush$2(result, symbolsFunc(object));
}
var _baseGetAllKeys = baseGetAllKeys$2;
function arrayFilter$1(array, predicate) {
  var index2 = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
  while (++index2 < length) {
    var value = array[index2];
    if (predicate(value, index2, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
var _arrayFilter = arrayFilter$1;
function stubArray$2() {
  return [];
}
var stubArray_1 = stubArray$2;
var arrayFilter = _arrayFilter, stubArray$1 = stubArray_1;
var objectProto$7 = Object.prototype;
var propertyIsEnumerable = objectProto$7.propertyIsEnumerable;
var nativeGetSymbols$1 = Object.getOwnPropertySymbols;
var getSymbols$3 = !nativeGetSymbols$1 ? stubArray$1 : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols$1(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};
var _getSymbols = getSymbols$3;
var baseGetAllKeys$1 = _baseGetAllKeys, getSymbols$2 = _getSymbols, keys$4 = keys_1;
function getAllKeys$2(object) {
  return baseGetAllKeys$1(object, keys$4, getSymbols$2);
}
var _getAllKeys = getAllKeys$2;
var getAllKeys$1 = _getAllKeys;
var COMPARE_PARTIAL_FLAG$3 = 1;
var objectProto$6 = Object.prototype;
var hasOwnProperty$6 = objectProto$6.hasOwnProperty;
function equalObjects$1(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3, objProps = getAllKeys$1(object), objLength = objProps.length, othProps = getAllKeys$1(other), othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index2 = objLength;
  while (index2--) {
    var key = objProps[index2];
    if (!(isPartial ? key in other : hasOwnProperty$6.call(other, key))) {
      return false;
    }
  }
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;
  while (++index2 < objLength) {
    key = objProps[index2];
    var objValue = object[key], othValue = other[key];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    }
    if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == "constructor");
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor, othCtor = other.constructor;
    if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack["delete"](object);
  stack["delete"](other);
  return result;
}
var _equalObjects = equalObjects$1;
var getNative$3 = _getNative, root$3 = _root;
var DataView$1 = getNative$3(root$3, "DataView");
var _DataView = DataView$1;
var getNative$2 = _getNative, root$2 = _root;
var Promise$2 = getNative$2(root$2, "Promise");
var _Promise = Promise$2;
var getNative$1 = _getNative, root$1 = _root;
var Set$2 = getNative$1(root$1, "Set");
var _Set = Set$2;
var getNative = _getNative, root = _root;
var WeakMap$1 = getNative(root, "WeakMap");
var _WeakMap = WeakMap$1;
var DataView = _DataView, Map = _Map, Promise$1 = _Promise, Set$1 = _Set, WeakMap = _WeakMap, baseGetTag$1 = _baseGetTag, toSource = _toSource;
var mapTag$4 = "[object Map]", objectTag$3 = "[object Object]", promiseTag = "[object Promise]", setTag$4 = "[object Set]", weakMapTag$1 = "[object WeakMap]";
var dataViewTag$2 = "[object DataView]";
var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map), promiseCtorString = toSource(Promise$1), setCtorString = toSource(Set$1), weakMapCtorString = toSource(WeakMap);
var getTag$5 = baseGetTag$1;
if (DataView && getTag$5(new DataView(new ArrayBuffer(1))) != dataViewTag$2 || Map && getTag$5(new Map()) != mapTag$4 || Promise$1 && getTag$5(Promise$1.resolve()) != promiseTag || Set$1 && getTag$5(new Set$1()) != setTag$4 || WeakMap && getTag$5(new WeakMap()) != weakMapTag$1) {
  getTag$5 = function(value) {
    var result = baseGetTag$1(value), Ctor = result == objectTag$3 ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag$2;
        case mapCtorString:
          return mapTag$4;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag$4;
        case weakMapCtorString:
          return weakMapTag$1;
      }
    }
    return result;
  };
}
var _getTag = getTag$5;
var Stack$3 = _Stack, equalArrays = _equalArrays, equalByTag = _equalByTag, equalObjects = _equalObjects, getTag$4 = _getTag, isArray$7 = isArray_1, isBuffer$2 = isBuffer$4.exports, isTypedArray$1 = isTypedArray_1;
var COMPARE_PARTIAL_FLAG$2 = 1;
var argsTag$1 = "[object Arguments]", arrayTag$1 = "[object Array]", objectTag$2 = "[object Object]";
var objectProto$5 = Object.prototype;
var hasOwnProperty$5 = objectProto$5.hasOwnProperty;
function baseIsEqualDeep$1(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray$7(object), othIsArr = isArray$7(other), objTag = objIsArr ? arrayTag$1 : getTag$4(object), othTag = othIsArr ? arrayTag$1 : getTag$4(other);
  objTag = objTag == argsTag$1 ? objectTag$2 : objTag;
  othTag = othTag == argsTag$1 ? objectTag$2 : othTag;
  var objIsObj = objTag == objectTag$2, othIsObj = othTag == objectTag$2, isSameTag = objTag == othTag;
  if (isSameTag && isBuffer$2(object)) {
    if (!isBuffer$2(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack$3());
    return objIsArr || isTypedArray$1(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG$2)) {
    var objIsWrapped = objIsObj && hasOwnProperty$5.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty$5.call(other, "__wrapped__");
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack$3());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack$3());
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}
var _baseIsEqualDeep = baseIsEqualDeep$1;
var baseIsEqualDeep = _baseIsEqualDeep, isObjectLike$3 = isObjectLike_1;
function baseIsEqual$2(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike$3(value) && !isObjectLike$3(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual$2, stack);
}
var _baseIsEqual = baseIsEqual$2;
var Stack$2 = _Stack, baseIsEqual$1 = _baseIsEqual;
var COMPARE_PARTIAL_FLAG$1 = 1, COMPARE_UNORDERED_FLAG$1 = 2;
function baseIsMatch$1(object, source, matchData, customizer) {
  var index2 = matchData.length, length = index2, noCustomizer = !customizer;
  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index2--) {
    var data2 = matchData[index2];
    if (noCustomizer && data2[2] ? data2[1] !== object[data2[0]] : !(data2[0] in object)) {
      return false;
    }
  }
  while (++index2 < length) {
    data2 = matchData[index2];
    var key = data2[0], objValue = object[key], srcValue = data2[1];
    if (noCustomizer && data2[2]) {
      if (objValue === void 0 && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack$2();
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === void 0 ? baseIsEqual$1(srcValue, objValue, COMPARE_PARTIAL_FLAG$1 | COMPARE_UNORDERED_FLAG$1, customizer, stack) : result)) {
        return false;
      }
    }
  }
  return true;
}
var _baseIsMatch = baseIsMatch$1;
var isObject$8 = isObject_1;
function isStrictComparable$2(value) {
  return value === value && !isObject$8(value);
}
var _isStrictComparable = isStrictComparable$2;
var isStrictComparable$1 = _isStrictComparable, keys$3 = keys_1;
function getMatchData$1(object) {
  var result = keys$3(object), length = result.length;
  while (length--) {
    var key = result[length], value = object[key];
    result[length] = [key, value, isStrictComparable$1(value)];
  }
  return result;
}
var _getMatchData = getMatchData$1;
function matchesStrictComparable$2(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
  };
}
var _matchesStrictComparable = matchesStrictComparable$2;
var baseIsMatch = _baseIsMatch, getMatchData = _getMatchData, matchesStrictComparable$1 = _matchesStrictComparable;
function baseMatches$1(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable$1(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}
var _baseMatches = baseMatches$1;
function baseHasIn$1(object, key) {
  return object != null && key in Object(object);
}
var _baseHasIn = baseHasIn$1;
var castPath$3 = _castPath, isArguments$2 = isArguments_1, isArray$6 = isArray_1, isIndex$1 = _isIndex, isLength = isLength_1, toKey$3 = _toKey;
function hasPath$2(object, path, hasFunc) {
  path = castPath$3(path, object);
  var index2 = -1, length = path.length, result = false;
  while (++index2 < length) {
    var key = toKey$3(path[index2]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index2 != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex$1(key, length) && (isArray$6(object) || isArguments$2(object));
}
var _hasPath = hasPath$2;
var baseHasIn = _baseHasIn, hasPath$1 = _hasPath;
function hasIn$2(object, path) {
  return object != null && hasPath$1(object, path, baseHasIn);
}
var hasIn_1 = hasIn$2;
var baseIsEqual = _baseIsEqual, get = get_1, hasIn$1 = hasIn_1, isKey$1 = _isKey, isStrictComparable = _isStrictComparable, matchesStrictComparable = _matchesStrictComparable, toKey$2 = _toKey;
var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
function baseMatchesProperty$1(path, srcValue) {
  if (isKey$1(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey$2(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return objValue === void 0 && objValue === srcValue ? hasIn$1(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}
var _baseMatchesProperty = baseMatchesProperty$1;
function identity$3(value) {
  return value;
}
var identity_1 = identity$3;
function baseProperty$1(key) {
  return function(object) {
    return object == null ? void 0 : object[key];
  };
}
var _baseProperty = baseProperty$1;
var baseGet$2 = _baseGet;
function basePropertyDeep$1(path) {
  return function(object) {
    return baseGet$2(object, path);
  };
}
var _basePropertyDeep = basePropertyDeep$1;
var baseProperty = _baseProperty, basePropertyDeep = _basePropertyDeep, isKey = _isKey, toKey$1 = _toKey;
function property$1(path) {
  return isKey(path) ? baseProperty(toKey$1(path)) : basePropertyDeep(path);
}
var property_1 = property$1;
var baseMatches = _baseMatches, baseMatchesProperty = _baseMatchesProperty, identity$2 = identity_1, isArray$5 = isArray_1, property = property_1;
function baseIteratee$3(value) {
  if (typeof value == "function") {
    return value;
  }
  if (value == null) {
    return identity$2;
  }
  if (typeof value == "object") {
    return isArray$5(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
  }
  return property(value);
}
var _baseIteratee = baseIteratee$3;
var baseAssignValue$2 = _baseAssignValue, baseForOwn$1 = _baseForOwn, baseIteratee$2 = _baseIteratee;
function mapValues(object, iteratee) {
  var result = {};
  iteratee = baseIteratee$2(iteratee);
  baseForOwn$1(object, function(value, key, object2) {
    baseAssignValue$2(result, key, iteratee(value, key, object2));
  });
  return result;
}
var mapValues_1 = mapValues;
var arrayMap$2 = _arrayMap;
function baseToPairs$1(object, props) {
  return arrayMap$2(props, function(key) {
    return [key, object[key]];
  });
}
var _baseToPairs = baseToPairs$1;
function setToPairs$1(set2) {
  var index2 = -1, result = Array(set2.size);
  set2.forEach(function(value) {
    result[++index2] = [value, value];
  });
  return result;
}
var _setToPairs = setToPairs$1;
var baseToPairs = _baseToPairs, getTag$3 = _getTag, mapToArray = _mapToArray, setToPairs = _setToPairs;
var mapTag$3 = "[object Map]", setTag$3 = "[object Set]";
function createToPairs$1(keysFunc) {
  return function(object) {
    var tag = getTag$3(object);
    if (tag == mapTag$3) {
      return mapToArray(object);
    }
    if (tag == setTag$3) {
      return setToPairs(object);
    }
    return baseToPairs(object, keysFunc(object));
  };
}
var _createToPairs = createToPairs$1;
var createToPairs = _createToPairs, keys$2 = keys_1;
var toPairs = createToPairs(keys$2);
var toPairs_1 = toPairs;
function apply$2(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
var _apply = apply$2;
var apply$1 = _apply;
var nativeMax = Math.max;
function overRest$2(func, start, transform) {
  start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
  return function() {
    var args = arguments, index2 = -1, length = nativeMax(args.length - start, 0), array = Array(length);
    while (++index2 < length) {
      array[index2] = args[start + index2];
    }
    index2 = -1;
    var otherArgs = Array(start + 1);
    while (++index2 < start) {
      otherArgs[index2] = args[index2];
    }
    otherArgs[start] = transform(array);
    return apply$1(func, this, otherArgs);
  };
}
var _overRest = overRest$2;
function constant$1(value) {
  return function() {
    return value;
  };
}
var constant_1 = constant$1;
var constant = constant_1, defineProperty = _defineProperty, identity$1 = identity_1;
var baseSetToString$1 = !defineProperty ? identity$1 : function(func, string) {
  return defineProperty(func, "toString", {
    "configurable": true,
    "enumerable": false,
    "value": constant(string),
    "writable": true
  });
};
var _baseSetToString = baseSetToString$1;
var HOT_COUNT = 800, HOT_SPAN = 16;
var nativeNow = Date.now;
function shortOut$1(func) {
  var count = 0, lastCalled = 0;
  return function() {
    var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(void 0, arguments);
  };
}
var _shortOut = shortOut$1;
var baseSetToString = _baseSetToString, shortOut = _shortOut;
var setToString$2 = shortOut(baseSetToString);
var _setToString = setToString$2;
var identity = identity_1, overRest$1 = _overRest, setToString$1 = _setToString;
function baseRest$3(func, start) {
  return setToString$1(overRest$1(func, start, identity), func + "");
}
var _baseRest = baseRest$3;
var eq$2 = eq_1, isArrayLike$3 = isArrayLike_1, isIndex = _isIndex, isObject$7 = isObject_1;
function isIterateeCall$3(value, index2, object) {
  if (!isObject$7(object)) {
    return false;
  }
  var type = typeof index2;
  if (type == "number" ? isArrayLike$3(object) && isIndex(index2, object.length) : type == "string" && index2 in object) {
    return eq$2(object[index2], value);
  }
  return false;
}
var _isIterateeCall = isIterateeCall$3;
function nativeKeysIn$1(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
var _nativeKeysIn = nativeKeysIn$1;
var isObject$6 = isObject_1, isPrototype$1 = _isPrototype, nativeKeysIn = _nativeKeysIn;
var objectProto$4 = Object.prototype;
var hasOwnProperty$4 = objectProto$4.hasOwnProperty;
function baseKeysIn$1(object) {
  if (!isObject$6(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype$1(object), result = [];
  for (var key in object) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty$4.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}
var _baseKeysIn = baseKeysIn$1;
var arrayLikeKeys = _arrayLikeKeys, baseKeysIn = _baseKeysIn, isArrayLike$2 = isArrayLike_1;
function keysIn$6(object) {
  return isArrayLike$2(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}
var keysIn_1 = keysIn$6;
var baseRest$2 = _baseRest, eq$1 = eq_1, isIterateeCall$2 = _isIterateeCall, keysIn$5 = keysIn_1;
var objectProto$3 = Object.prototype;
var hasOwnProperty$3 = objectProto$3.hasOwnProperty;
var defaults = baseRest$2(function(object, sources) {
  object = Object(object);
  var index2 = -1;
  var length = sources.length;
  var guard = length > 2 ? sources[2] : void 0;
  if (guard && isIterateeCall$2(sources[0], sources[1], guard)) {
    length = 1;
  }
  while (++index2 < length) {
    var source = sources[index2];
    var props = keysIn$5(source);
    var propsIndex = -1;
    var propsLength = props.length;
    while (++propsIndex < propsLength) {
      var key = props[propsIndex];
      var value = object[key];
      if (value === void 0 || eq$1(value, objectProto$3[key]) && !hasOwnProperty$3.call(object, key)) {
        object[key] = source[key];
      }
    }
  }
  return object;
});
var defaults_1 = defaults;
var baseAssignValue$1 = _baseAssignValue, eq = eq_1;
function assignMergeValue$2(object, key, value) {
  if (value !== void 0 && !eq(object[key], value) || value === void 0 && !(key in object)) {
    baseAssignValue$1(object, key, value);
  }
}
var _assignMergeValue = assignMergeValue$2;
var _cloneBuffer = { exports: {} };
(function(module, exports) {
  var root2 = _root;
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var Buffer2 = moduleExports ? root2.Buffer : void 0, allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : void 0;
  function cloneBuffer2(buffer, isDeep) {
    if (isDeep) {
      return buffer.slice();
    }
    var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
    buffer.copy(result);
    return result;
  }
  module.exports = cloneBuffer2;
})(_cloneBuffer, _cloneBuffer.exports);
var Uint8Array2 = _Uint8Array;
function cloneArrayBuffer$3(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array2(result).set(new Uint8Array2(arrayBuffer));
  return result;
}
var _cloneArrayBuffer = cloneArrayBuffer$3;
var cloneArrayBuffer$2 = _cloneArrayBuffer;
function cloneTypedArray$2(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer$2(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var _cloneTypedArray = cloneTypedArray$2;
function copyArray$2(source, array) {
  var index2 = -1, length = source.length;
  array || (array = Array(length));
  while (++index2 < length) {
    array[index2] = source[index2];
  }
  return array;
}
var _copyArray = copyArray$2;
var isObject$5 = isObject_1;
var objectCreate = Object.create;
var baseCreate$1 = function() {
  function object() {
  }
  return function(proto) {
    if (!isObject$5(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object();
    object.prototype = void 0;
    return result;
  };
}();
var _baseCreate = baseCreate$1;
var overArg = _overArg;
var getPrototype$3 = overArg(Object.getPrototypeOf, Object);
var _getPrototype = getPrototype$3;
var baseCreate = _baseCreate, getPrototype$2 = _getPrototype, isPrototype = _isPrototype;
function initCloneObject$2(object) {
  return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype$2(object)) : {};
}
var _initCloneObject = initCloneObject$2;
var baseGetTag = _baseGetTag, getPrototype$1 = _getPrototype, isObjectLike$2 = isObjectLike_1;
var objectTag$1 = "[object Object]";
var funcProto = Function.prototype, objectProto$2 = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
var objectCtorString = funcToString.call(Object);
function isPlainObject$2(value) {
  if (!isObjectLike$2(value) || baseGetTag(value) != objectTag$1) {
    return false;
  }
  var proto = getPrototype$1(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty$2.call(proto, "constructor") && proto.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
var isPlainObject_1 = isPlainObject$2;
function safeGet$2(object, key) {
  if (key === "constructor" && typeof object[key] === "function") {
    return;
  }
  if (key == "__proto__") {
    return;
  }
  return object[key];
}
var _safeGet = safeGet$2;
var assignValue$1 = _assignValue, baseAssignValue = _baseAssignValue;
function copyObject$6(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index2 = -1, length = props.length;
  while (++index2 < length) {
    var key = props[index2];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
    if (newValue === void 0) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue$1(object, key, newValue);
    }
  }
  return object;
}
var _copyObject = copyObject$6;
var copyObject$5 = _copyObject, keysIn$4 = keysIn_1;
function toPlainObject$1(value) {
  return copyObject$5(value, keysIn$4(value));
}
var toPlainObject_1 = toPlainObject$1;
var assignMergeValue$1 = _assignMergeValue, cloneBuffer$1 = _cloneBuffer.exports, cloneTypedArray$1 = _cloneTypedArray, copyArray$1 = _copyArray, initCloneObject$1 = _initCloneObject, isArguments$1 = isArguments_1, isArray$4 = isArray_1, isArrayLikeObject = isArrayLikeObject_1, isBuffer$1 = isBuffer$4.exports, isFunction = isFunction_1, isObject$4 = isObject_1, isPlainObject$1 = isPlainObject_1, isTypedArray = isTypedArray_1, safeGet$1 = _safeGet, toPlainObject = toPlainObject_1;
function baseMergeDeep$1(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet$1(object, key), srcValue = safeGet$1(source, key), stacked = stack.get(srcValue);
  if (stacked) {
    assignMergeValue$1(object, key, stacked);
    return;
  }
  var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
  var isCommon = newValue === void 0;
  if (isCommon) {
    var isArr = isArray$4(srcValue), isBuff = !isArr && isBuffer$1(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray$4(objValue)) {
        newValue = objValue;
      } else if (isArrayLikeObject(objValue)) {
        newValue = copyArray$1(objValue);
      } else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer$1(srcValue, true);
      } else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray$1(srcValue, true);
      } else {
        newValue = [];
      }
    } else if (isPlainObject$1(srcValue) || isArguments$1(srcValue)) {
      newValue = objValue;
      if (isArguments$1(objValue)) {
        newValue = toPlainObject(objValue);
      } else if (!isObject$4(objValue) || isFunction(objValue)) {
        newValue = initCloneObject$1(srcValue);
      }
    } else {
      isCommon = false;
    }
  }
  if (isCommon) {
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack["delete"](srcValue);
  }
  assignMergeValue$1(object, key, newValue);
}
var _baseMergeDeep = baseMergeDeep$1;
var Stack$1 = _Stack, assignMergeValue = _assignMergeValue, baseFor = _baseFor, baseMergeDeep = _baseMergeDeep, isObject$3 = isObject_1, keysIn$3 = keysIn_1, safeGet = _safeGet;
function baseMerge$2(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    stack || (stack = new Stack$1());
    if (isObject$3(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge$2, customizer, stack);
    } else {
      var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : void 0;
      if (newValue === void 0) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn$3);
}
var _baseMerge = baseMerge$2;
var baseMerge$1 = _baseMerge, isObject$2 = isObject_1;
function customDefaultsMerge$1(objValue, srcValue, key, object, source, stack) {
  if (isObject$2(objValue) && isObject$2(srcValue)) {
    stack.set(srcValue, objValue);
    baseMerge$1(objValue, srcValue, void 0, customDefaultsMerge$1, stack);
    stack["delete"](srcValue);
  }
  return objValue;
}
var _customDefaultsMerge = customDefaultsMerge$1;
var baseRest$1 = _baseRest, isIterateeCall$1 = _isIterateeCall;
function createAssigner$1(assigner) {
  return baseRest$1(function(object, sources) {
    var index2 = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
    customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
    if (guard && isIterateeCall$1(sources[0], sources[1], guard)) {
      customizer = length < 3 ? void 0 : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index2 < length) {
      var source = sources[index2];
      if (source) {
        assigner(object, source, index2, customizer);
      }
    }
    return object;
  });
}
var _createAssigner = createAssigner$1;
var baseMerge = _baseMerge, createAssigner = _createAssigner;
var mergeWith$1 = createAssigner(function(object, source, srcIndex, customizer) {
  baseMerge(object, source, srcIndex, customizer);
});
var mergeWith_1 = mergeWith$1;
var apply = _apply, baseRest = _baseRest, customDefaultsMerge = _customDefaultsMerge, mergeWith = mergeWith_1;
var defaultsDeep = baseRest(function(args) {
  args.push(void 0, customDefaultsMerge);
  return apply(mergeWith, void 0, args);
});
var defaultsDeep_1 = defaultsDeep;
var baseGet$1 = _baseGet, baseSet = _baseSet, castPath$2 = _castPath;
function basePickBy$1(object, paths, predicate) {
  var index2 = -1, length = paths.length, result = {};
  while (++index2 < length) {
    var path = paths[index2], value = baseGet$1(object, path);
    if (predicate(value, path)) {
      baseSet(result, castPath$2(path, object), value);
    }
  }
  return result;
}
var _basePickBy = basePickBy$1;
var basePickBy = _basePickBy, hasIn = hasIn_1;
function basePick$1(object, paths) {
  return basePickBy(object, paths, function(value, path) {
    return hasIn(object, path);
  });
}
var _basePick = basePick$1;
var Symbol$2 = _Symbol, isArguments = isArguments_1, isArray$3 = isArray_1;
var spreadableSymbol = Symbol$2 ? Symbol$2.isConcatSpreadable : void 0;
function isFlattenable$1(value) {
  return isArray$3(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}
var _isFlattenable = isFlattenable$1;
var arrayPush$1 = _arrayPush, isFlattenable = _isFlattenable;
function baseFlatten$1(array, depth, predicate, isStrict, result) {
  var index2 = -1, length = array.length;
  predicate || (predicate = isFlattenable);
  result || (result = []);
  while (++index2 < length) {
    var value = array[index2];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        baseFlatten$1(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush$1(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}
var _baseFlatten = baseFlatten$1;
var baseFlatten = _baseFlatten;
function flatten$1(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}
var flatten_1 = flatten$1;
var flatten = flatten_1, overRest = _overRest, setToString = _setToString;
function flatRest$2(func) {
  return setToString(overRest(func, void 0, flatten), func + "");
}
var _flatRest = flatRest$2;
var basePick = _basePick, flatRest$1 = _flatRest;
var pick = flatRest$1(function(object, paths) {
  return object == null ? {} : basePick(object, paths);
});
var pick_1 = pick;
function arrayEach$1(array, iteratee) {
  var index2 = -1, length = array == null ? 0 : array.length;
  while (++index2 < length) {
    if (iteratee(array[index2], index2, array) === false) {
      break;
    }
  }
  return array;
}
var _arrayEach = arrayEach$1;
var copyObject$4 = _copyObject, keys$1 = keys_1;
function baseAssign$1(object, source) {
  return object && copyObject$4(source, keys$1(source), object);
}
var _baseAssign = baseAssign$1;
var copyObject$3 = _copyObject, keysIn$2 = keysIn_1;
function baseAssignIn$1(object, source) {
  return object && copyObject$3(source, keysIn$2(source), object);
}
var _baseAssignIn = baseAssignIn$1;
var copyObject$2 = _copyObject, getSymbols$1 = _getSymbols;
function copySymbols$1(source, object) {
  return copyObject$2(source, getSymbols$1(source), object);
}
var _copySymbols = copySymbols$1;
var arrayPush = _arrayPush, getPrototype = _getPrototype, getSymbols = _getSymbols, stubArray = stubArray_1;
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbolsIn$2 = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};
var _getSymbolsIn = getSymbolsIn$2;
var copyObject$1 = _copyObject, getSymbolsIn$1 = _getSymbolsIn;
function copySymbolsIn$1(source, object) {
  return copyObject$1(source, getSymbolsIn$1(source), object);
}
var _copySymbolsIn = copySymbolsIn$1;
var baseGetAllKeys = _baseGetAllKeys, getSymbolsIn = _getSymbolsIn, keysIn$1 = keysIn_1;
function getAllKeysIn$2(object) {
  return baseGetAllKeys(object, keysIn$1, getSymbolsIn);
}
var _getAllKeysIn = getAllKeysIn$2;
var objectProto$1 = Object.prototype;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function initCloneArray$1(array) {
  var length = array.length, result = new array.constructor(length);
  if (length && typeof array[0] == "string" && hasOwnProperty$1.call(array, "index")) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}
var _initCloneArray = initCloneArray$1;
var cloneArrayBuffer$1 = _cloneArrayBuffer;
function cloneDataView$1(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer$1(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
var _cloneDataView = cloneDataView$1;
var reFlags = /\w*$/;
function cloneRegExp$1(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}
var _cloneRegExp = cloneRegExp$1;
var Symbol$1 = _Symbol;
var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
function cloneSymbol$1(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}
var _cloneSymbol = cloneSymbol$1;
var cloneArrayBuffer = _cloneArrayBuffer, cloneDataView = _cloneDataView, cloneRegExp = _cloneRegExp, cloneSymbol = _cloneSymbol, cloneTypedArray = _cloneTypedArray;
var boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", mapTag$2 = "[object Map]", numberTag$1 = "[object Number]", regexpTag$1 = "[object RegExp]", setTag$2 = "[object Set]", stringTag$1 = "[object String]", symbolTag$1 = "[object Symbol]";
var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]", float32Tag$1 = "[object Float32Array]", float64Tag$1 = "[object Float64Array]", int8Tag$1 = "[object Int8Array]", int16Tag$1 = "[object Int16Array]", int32Tag$1 = "[object Int32Array]", uint8Tag$1 = "[object Uint8Array]", uint8ClampedTag$1 = "[object Uint8ClampedArray]", uint16Tag$1 = "[object Uint16Array]", uint32Tag$1 = "[object Uint32Array]";
function initCloneByTag$1(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag$1:
      return cloneArrayBuffer(object);
    case boolTag$1:
    case dateTag$1:
      return new Ctor(+object);
    case dataViewTag$1:
      return cloneDataView(object, isDeep);
    case float32Tag$1:
    case float64Tag$1:
    case int8Tag$1:
    case int16Tag$1:
    case int32Tag$1:
    case uint8Tag$1:
    case uint8ClampedTag$1:
    case uint16Tag$1:
    case uint32Tag$1:
      return cloneTypedArray(object, isDeep);
    case mapTag$2:
      return new Ctor();
    case numberTag$1:
    case stringTag$1:
      return new Ctor(object);
    case regexpTag$1:
      return cloneRegExp(object);
    case setTag$2:
      return new Ctor();
    case symbolTag$1:
      return cloneSymbol(object);
  }
}
var _initCloneByTag = initCloneByTag$1;
var getTag$2 = _getTag, isObjectLike$1 = isObjectLike_1;
var mapTag$1 = "[object Map]";
function baseIsMap$1(value) {
  return isObjectLike$1(value) && getTag$2(value) == mapTag$1;
}
var _baseIsMap = baseIsMap$1;
var baseIsMap = _baseIsMap, baseUnary$1 = _baseUnary, nodeUtil$1 = _nodeUtil.exports;
var nodeIsMap = nodeUtil$1 && nodeUtil$1.isMap;
var isMap$1 = nodeIsMap ? baseUnary$1(nodeIsMap) : baseIsMap;
var isMap_1 = isMap$1;
var getTag$1 = _getTag, isObjectLike = isObjectLike_1;
var setTag$1 = "[object Set]";
function baseIsSet$1(value) {
  return isObjectLike(value) && getTag$1(value) == setTag$1;
}
var _baseIsSet = baseIsSet$1;
var baseIsSet = _baseIsSet, baseUnary = _baseUnary, nodeUtil = _nodeUtil.exports;
var nodeIsSet = nodeUtil && nodeUtil.isSet;
var isSet$1 = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
var isSet_1 = isSet$1;
var Stack = _Stack, arrayEach = _arrayEach, assignValue = _assignValue, baseAssign = _baseAssign, baseAssignIn = _baseAssignIn, cloneBuffer = _cloneBuffer.exports, copyArray = _copyArray, copySymbols = _copySymbols, copySymbolsIn = _copySymbolsIn, getAllKeys = _getAllKeys, getAllKeysIn$1 = _getAllKeysIn, getTag = _getTag, initCloneArray = _initCloneArray, initCloneByTag = _initCloneByTag, initCloneObject = _initCloneObject, isArray$2 = isArray_1, isBuffer = isBuffer$4.exports, isMap = isMap_1, isObject$1 = isObject_1, isSet = isSet_1, keys = keys_1, keysIn = keysIn_1;
var CLONE_DEEP_FLAG$1 = 1, CLONE_FLAT_FLAG$1 = 2, CLONE_SYMBOLS_FLAG$1 = 4;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", objectTag = "[object Object]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", weakMapTag = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
function baseClone$1(value, bitmask, customizer, key, object, stack) {
  var result, isDeep = bitmask & CLONE_DEEP_FLAG$1, isFlat = bitmask & CLONE_FLAT_FLAG$1, isFull = bitmask & CLONE_SYMBOLS_FLAG$1;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== void 0) {
    return result;
  }
  if (!isObject$1(value)) {
    return value;
  }
  var isArr = isArray$2(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || isFunc && !object) {
      result = isFlat || isFunc ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  stack || (stack = new Stack());
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);
  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone$1(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function(subValue, key2) {
      result.set(key2, baseClone$1(subValue, bitmask, customizer, key2, value, stack));
    });
  }
  var keysFunc = isFull ? isFlat ? getAllKeysIn$1 : getAllKeys : isFlat ? keysIn : keys;
  var props = isArr ? void 0 : keysFunc(value);
  arrayEach(props || value, function(subValue, key2) {
    if (props) {
      key2 = subValue;
      subValue = value[key2];
    }
    assignValue(result, key2, baseClone$1(subValue, bitmask, customizer, key2, value, stack));
  });
  return result;
}
var _baseClone = baseClone$1;
function last$1(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : void 0;
}
var last_1 = last$1;
function baseSlice$1(array, start, end) {
  var index2 = -1, length = array.length;
  if (start < 0) {
    start = -start > length ? 0 : length + start;
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : end - start >>> 0;
  start >>>= 0;
  var result = Array(length);
  while (++index2 < length) {
    result[index2] = array[index2 + start];
  }
  return result;
}
var _baseSlice = baseSlice$1;
var baseGet = _baseGet, baseSlice = _baseSlice;
function parent$1(object, path) {
  return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
}
var _parent = parent$1;
var castPath$1 = _castPath, last = last_1, parent = _parent, toKey = _toKey;
function baseUnset$1(object, path) {
  path = castPath$1(path, object);
  object = parent(object, path);
  return object == null || delete object[toKey(last(path))];
}
var _baseUnset = baseUnset$1;
var isPlainObject = isPlainObject_1;
function customOmitClone$1(value) {
  return isPlainObject(value) ? void 0 : value;
}
var _customOmitClone = customOmitClone$1;
var arrayMap$1 = _arrayMap, baseClone = _baseClone, baseUnset = _baseUnset, castPath = _castPath, copyObject = _copyObject, customOmitClone = _customOmitClone, flatRest = _flatRest, getAllKeysIn = _getAllKeysIn;
var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
var omit = flatRest(function(object, paths) {
  var result = {};
  if (object == null) {
    return result;
  }
  var isDeep = false;
  paths = arrayMap$1(paths, function(path) {
    path = castPath(path, object);
    isDeep || (isDeep = path.length > 1);
    return path;
  });
  copyObject(object, getAllKeysIn(object), result);
  if (isDeep) {
    result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
  }
  var length = paths.length;
  while (length--) {
    baseUnset(result, paths[length]);
  }
  return result;
});
var omit_1 = omit;
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function baseHas$1(object, key) {
  return object != null && hasOwnProperty.call(object, key);
}
var _baseHas = baseHas$1;
var baseHas = _baseHas, hasPath = _hasPath;
function has$1(object, path) {
  return object != null && hasPath(object, path, baseHas);
}
var has_1 = has$1;
var isArrayLike$1 = isArrayLike_1;
function createBaseEach$1(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike$1(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length, index2 = fromRight ? length : -1, iterable = Object(collection);
    while (fromRight ? index2-- : ++index2 < length) {
      if (iteratee(iterable[index2], index2, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}
var _createBaseEach = createBaseEach$1;
var baseForOwn = _baseForOwn, createBaseEach = _createBaseEach;
var baseEach$2 = createBaseEach(baseForOwn);
var _baseEach = baseEach$2;
var baseEach$1 = _baseEach, isArrayLike = isArrayLike_1;
function baseMap$1(collection, iteratee) {
  var index2 = -1, result = isArrayLike(collection) ? Array(collection.length) : [];
  baseEach$1(collection, function(value, key, collection2) {
    result[++index2] = iteratee(value, key, collection2);
  });
  return result;
}
var _baseMap = baseMap$1;
var arrayMap = _arrayMap, baseIteratee$1 = _baseIteratee, baseMap = _baseMap, isArray$1 = isArray_1;
function map(collection, iteratee) {
  var func = isArray$1(collection) ? arrayMap : baseMap;
  return func(collection, baseIteratee$1(iteratee));
}
var map_1 = map;
function head(array) {
  return array && array.length ? array[0] : void 0;
}
var head_1 = head;
var baseEach = _baseEach;
function baseSome$1(collection, predicate) {
  var result;
  baseEach(collection, function(value, index2, collection2) {
    result = predicate(value, index2, collection2);
    return !result;
  });
  return !!result;
}
var _baseSome = baseSome$1;
var arraySome = _arraySome, baseIteratee = _baseIteratee, baseSome = _baseSome, isArray = isArray_1, isIterateeCall = _isIterateeCall;
function some$1(collection, predicate, guard) {
  var func = isArray(collection) ? arraySome : baseSome;
  if (guard && isIterateeCall(collection, predicate, guard)) {
    predicate = void 0;
  }
  return func(collection, baseIteratee(predicate));
}
var some_1 = some$1;
const getType = (value) => Object.prototype.toString.call(value).slice(8, -1);
const isDate = (value) => isDate_1(value) && !isNaN(value.getTime());
const isObject = (value) => getType(value) === "Object";
const has = has_1;
const hasAny = (obj, props) => some_1(props, (p) => has_1(obj, p));
const some = some_1;
const pad = (val, len, char = "0") => {
  val = val !== null && val !== void 0 ? String(val) : "";
  len = len || 2;
  while (val.length < len) {
    val = `${char}${val}`;
  }
  return val;
};
const mergeEvents = (...args) => {
  const result = {};
  args.forEach((e) => Object.entries(e).forEach(([key, value]) => {
    if (!result[key]) {
      result[key] = value;
    } else if (isArrayLikeObject_1(result[key])) {
      result[key].push(value);
    } else {
      result[key] = [result[key], value];
    }
  }));
  return result;
};
const pageIsValid = (page) => !!(page && page.month && page.year);
const pageIsBeforePage = (page, comparePage) => {
  if (!pageIsValid(page) || !pageIsValid(comparePage))
    return false;
  if (page.year === comparePage.year)
    return page.month < comparePage.month;
  return page.year < comparePage.year;
};
const pageIsAfterPage = (page, comparePage) => {
  if (!pageIsValid(page) || !pageIsValid(comparePage))
    return false;
  if (page.year === comparePage.year)
    return page.month > comparePage.month;
  return page.year > comparePage.year;
};
const pageIsBetweenPages = (page, fromPage, toPage) => (page || false) && !pageIsBeforePage(page, fromPage) && !pageIsAfterPage(page, toPage);
const pageIsEqualToPage = (aPage, bPage) => {
  if (!aPage && bPage)
    return false;
  if (aPage && !bPage)
    return false;
  if (!aPage && !bPage)
    return true;
  return aPage.month === bPage.month && aPage.year === bPage.year;
};
const addPages = ({ month, year }, count) => {
  const incr = count > 0 ? 1 : -1;
  for (let i = 0; i < Math.abs(count); i++) {
    month += incr;
    if (month > 12) {
      month = 1;
      year++;
    } else if (month < 1) {
      month = 12;
      year--;
    }
  }
  return {
    month,
    year
  };
};
const pageRangeToArray = (from, to) => {
  if (!pageIsValid(from) || !pageIsValid(to))
    return [];
  const result = [];
  while (!pageIsAfterPage(from, to)) {
    result.push(from);
    from = addPages(from, 1);
  }
  return result;
};
function datesAreEqual(a, b) {
  const aIsDate = isDate(a);
  const bIsDate = isDate(b);
  if (!aIsDate && !bIsDate)
    return true;
  if (aIsDate !== bIsDate)
    return false;
  return a.getTime() === b.getTime();
}
const arrayHasItems = (array) => isArrayLikeObject_1(array) && array.length > 0;
const mixinOptionalProps = (source, target, props) => {
  const assigned = [];
  props.forEach((p) => {
    const name = p.name || p.toString();
    const mixin = p.mixin;
    const validate = p.validate;
    if (Object.prototype.hasOwnProperty.call(source, name)) {
      const value = validate ? validate(source[name]) : source[name];
      target[name] = mixin && isObject(value) ? __spreadValues(__spreadValues({}, mixin), value) : value;
      assigned.push(name);
    }
  });
  return {
    target,
    assigned: assigned.length ? assigned : null
  };
};
const on = (element, event, handler, opts) => {
  if (element && event && handler) {
    element.addEventListener(event, handler, opts);
  }
};
const off = (element, event, handler, opts) => {
  if (element && event) {
    element.removeEventListener(event, handler, opts);
  }
};
const elementContains = (element, child) => !!element && !!child && (element === child || element.contains(child));
const onSpaceOrEnter = (event, handler) => {
  if (event.key === " " || event.key === "Enter") {
    handler(event);
    event.preventDefault();
  }
};
const createGuid = () => {
  function S4() {
    return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
  }
  return `${S4() + S4()}-${S4()}-${S4()}-${S4()}-${S4()}${S4()}${S4()}`;
};
function hash(str) {
  let hashcode = 0;
  let i = 0;
  let chr;
  if (str.length === 0)
    return hashcode;
  for (i = 0; i < str.length; i++) {
    chr = str.charCodeAt(i);
    hashcode = (hashcode << 5) - hashcode + chr;
    hashcode |= 0;
  }
  return hashcode;
}
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$a = {
  name: "CustomTransition",
  emits: [
    "before-enter",
    "before-transition",
    "after-enter",
    "after-transition"
  ],
  props: {
    name: String,
    appear: Boolean
  },
  computed: {
    name_() {
      return `vc-${this.name || "none"}`;
    }
  },
  methods: {
    beforeEnter(el) {
      this.$emit("before-enter", el);
      this.$emit("before-transition", el);
    },
    afterEnter(el) {
      this.$emit("after-enter", el);
      this.$emit("after-transition", el);
    }
  }
};
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    name: $options.name_,
    appear: $props.appear,
    onBeforeEnter: $options.beforeEnter,
    onAfterEnter: $options.afterEnter
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")
    ]),
    _: 3
  }, 8, ["name", "appear", "onBeforeEnter", "onAfterEnter"]);
}
var CustomTransition = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$5]]);
const _sfc_main$9 = {
  name: "Popover",
  emits: ["before-show", "after-show", "before-hide", "after-hide"],
  render() {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: [
        "vc-popover-content-wrapper",
        {
          "is-interactive": this.isInteractive
        }
      ],
      ref: "popover"
    }, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(CustomTransition, {
        name: this.transition,
        appear: true,
        "on-before-enter": this.beforeEnter,
        "on-after-enter": this.afterEnter,
        "on-before-leave": this.beforeLeave,
        "on-after-leave": this.afterLeave
      }, {
        default: () => this.isVisible ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
          tabindex: -1,
          class: [
            "vc-popover-content",
            `direction-${this.direction}`,
            this.contentClass
          ],
          style: this.contentStyle
        }, [
          this.content,
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("span", {
            class: [
              "vc-popover-caret",
              `direction-${this.direction}`,
              `align-${this.alignment}`
            ]
          })
        ]) : null
      })
    ]);
  },
  props: {
    id: { type: String, required: true },
    contentClass: String
  },
  data() {
    return {
      ref: null,
      opts: null,
      data: null,
      transition: "slide-fade",
      transitionTranslate: "15px",
      transitionDuration: "0.15s",
      placement: "bottom",
      positionFixed: false,
      modifiers: [],
      isInteractive: false,
      isHovered: false,
      isFocused: false,
      showDelay: 0,
      hideDelay: 110,
      autoHide: false,
      popperEl: null
    };
  },
  computed: {
    content() {
      return isFunction_1(this.$slots.default) && this.$slots.default({
        direction: this.direction,
        alignment: this.alignment,
        data: this.data,
        updateLayout: this.setupPopper,
        hide: (opts) => this.hide(opts)
      }) || this.$slots.default;
    },
    contentStyle() {
      return {
        "--slide-translate": this.transitionTranslate,
        "--slide-duration": this.transitionDuration
      };
    },
    popperOptions() {
      return {
        placement: this.placement,
        strategy: this.positionFixed ? "fixed" : "absolute",
        modifiers: [
          {
            name: "onUpdate",
            enabled: true,
            phase: "afterWrite",
            fn: this.onPopperUpdate
          },
          ...this.modifiers || []
        ],
        onFirstUpdate: this.onPopperUpdate
      };
    },
    isVisible() {
      return !!(this.ref && this.content);
    },
    direction() {
      return this.placement && this.placement.split("-")[0] || "bottom";
    },
    alignment() {
      const isLeftRight = this.direction === "left" || this.direction === "right";
      let alignment = this.placement.split("-");
      alignment = alignment.length > 1 ? alignment[1] : "";
      if (["start", "top", "left"].includes(alignment)) {
        return isLeftRight ? "top" : "left";
      }
      if (["end", "bottom", "right"].includes(alignment)) {
        return isLeftRight ? "bottom" : "right";
      }
      return isLeftRight ? "middle" : "center";
    }
  },
  watch: {
    opts(val, oldVal) {
      if (oldVal && oldVal.callback) {
        oldVal.callback(__spreadProps(__spreadValues({}, oldVal), {
          completed: !val,
          reason: val ? "Overridden by action" : null
        }));
      }
    }
  },
  mounted() {
    this.popoverEl = this.$refs.popover;
    this.addEvents();
  },
  beforeUnmount() {
    this.destroyPopper();
    this.removeEvents();
    this.popoverEl = null;
  },
  methods: {
    addEvents() {
      on(this.popoverEl, "click", this.onClick);
      on(this.popoverEl, "mouseover", this.onMouseOver);
      on(this.popoverEl, "mouseleave", this.onMouseLeave);
      on(this.popoverEl, "focusin", this.onFocusIn);
      on(this.popoverEl, "focusout", this.onFocusOut);
      on(document, "keydown", this.onDocumentKeydown);
      on(document, "click", this.onDocumentClick);
      on(document, "show-popover", this.onDocumentShowPopover);
      on(document, "hide-popover", this.onDocumentHidePopover);
      on(document, "toggle-popover", this.onDocumentTogglePopover);
      on(document, "update-popover", this.onDocumentUpdatePopover);
    },
    removeEvents() {
      off(this.popoverEl, "click", this.onClick);
      off(this.popoverEl, "mouseover", this.onMouseOver);
      off(this.popoverEl, "mouseleave", this.onMouseLeave);
      off(this.popoverEl, "focusin", this.onFocusIn);
      off(this.popoverEl, "focusout", this.onFocusOut);
      off(document, "keydown", this.onDocumentKeydown);
      off(document, "click", this.onDocumentClick);
      off(document, "show-popover", this.onDocumentShowPopover);
      off(document, "hide-popover", this.onDocumentHidePopover);
      off(document, "toggle-popover", this.onDocumentTogglePopover);
      off(document, "update-popover", this.onDocumentUpdatePopover);
    },
    onClick(e) {
      e.stopPropagation();
    },
    onMouseOver() {
      this.isHovered = true;
      if (this.isInteractive)
        this.show();
    },
    onMouseLeave() {
      this.isHovered = false;
      if (this.autoHide && !this.isFocused && (!this.ref || this.ref !== document.activeElement)) {
        this.hide();
      }
    },
    onFocusIn() {
      this.isFocused = true;
      if (this.isInteractive)
        this.show();
    },
    onFocusOut(e) {
      if (!e.relatedTarget || !elementContains(this.popoverEl, e.relatedTarget)) {
        this.isFocused = false;
        if (!this.isHovered && this.autoHide)
          this.hide();
      }
    },
    onDocumentClick(e) {
      if (!this.$refs.popover || !this.ref) {
        return;
      }
      if (elementContains(this.popoverEl, e.target) || elementContains(this.ref, e.target)) {
        return;
      }
      this.hide();
    },
    onDocumentKeydown(e) {
      if (e.key === "Esc" || e.key === "Escape") {
        this.hide();
      }
    },
    onDocumentShowPopover({ detail }) {
      if (!detail.id || detail.id !== this.id)
        return;
      this.show(detail);
    },
    onDocumentHidePopover({ detail }) {
      if (!detail.id || detail.id !== this.id)
        return;
      this.hide(detail);
    },
    onDocumentTogglePopover({ detail }) {
      if (!detail.id || detail.id !== this.id)
        return;
      this.toggle(detail);
    },
    onDocumentUpdatePopover({ detail }) {
      if (!detail.id || detail.id !== this.id)
        return;
      this.update(detail);
    },
    show(opts = {}) {
      opts.action = "show";
      const ref = opts.ref || this.ref;
      const delay = opts.showDelay >= 0 ? opts.showDelay : this.showDelay;
      if (!ref) {
        if (opts.callback) {
          opts.callback({
            completed: false,
            reason: "Invalid reference element provided"
          });
        }
        return;
      }
      clearTimeout(this.timeout);
      this.opts = opts;
      const fn = () => {
        Object.assign(this, omit_1(opts, ["id"]));
        this.setupPopper();
        this.opts = null;
      };
      if (delay > 0) {
        this.timeout = setTimeout(() => fn(), delay);
      } else {
        fn();
      }
    },
    hide(opts = {}) {
      opts.action = "hide";
      const ref = opts.ref || this.ref;
      const delay = opts.hideDelay >= 0 ? opts.hideDelay : this.hideDelay;
      if (!this.ref || ref !== this.ref) {
        if (opts.callback) {
          opts.callback(__spreadProps(__spreadValues({}, opts), {
            completed: false,
            reason: this.ref ? "Invalid reference element provided" : "Popover already hidden"
          }));
        }
        return;
      }
      const fn = () => {
        this.ref = null;
        this.opts = null;
      };
      clearTimeout(this.timeout);
      this.opts = opts;
      if (delay > 0) {
        this.timeout = setTimeout(fn, delay);
      } else {
        fn();
      }
    },
    toggle(opts = {}) {
      if (this.isVisible && opts.ref === this.ref) {
        this.hide(opts);
      } else {
        this.show(opts);
      }
    },
    update(opts = {}) {
      Object.assign(this, omit_1(opts, ["id"]));
      this.setupPopper();
    },
    setupPopper() {
      this.$nextTick(() => {
        if (!this.ref || !this.$refs.popover)
          return;
        if (this.popper && this.popper.reference !== this.ref) {
          this.destroyPopper();
        }
        if (!this.popper) {
          this.popper = (0,_popperjs_core__WEBPACK_IMPORTED_MODULE_1__.createPopper)(this.ref, this.popoverEl, this.popperOptions);
        } else {
          this.popper.update();
        }
      });
    },
    onPopperUpdate(args) {
      if (args.placement) {
        this.placement = args.placement;
      } else if (args.state) {
        this.placement = args.state.placement;
      }
    },
    beforeEnter(e) {
      this.$emit("before-show", e);
    },
    afterEnter(e) {
      this.$emit("after-show", e);
    },
    beforeLeave(e) {
      this.$emit("before-hide", e);
    },
    afterLeave(e) {
      this.destroyPopper();
      this.$emit("after-hide", e);
    },
    destroyPopper() {
      if (this.popper) {
        this.popper.destroy();
        this.popper = null;
      }
    }
  }
};
const childMixin$1 = {
  inject: ["sharedState"],
  computed: {
    masks() {
      return this.sharedState.masks;
    },
    theme() {
      return this.sharedState.theme;
    },
    locale() {
      return this.sharedState.locale;
    },
    dayPopoverId() {
      return this.sharedState.dayPopoverId;
    }
  },
  methods: {
    format(date, mask) {
      return this.locale.format(date, mask);
    },
    pageForDate(date) {
      return this.locale.getDateParts(this.locale.normalizeDate(date));
    }
  }
};
const targetProps = ["base", "start", "end", "startEnd"];
const displayProps = [
  "class",
  "contentClass",
  "style",
  "contentStyle",
  "color",
  "fillMode"
];
const defConfig = {
  color: "blue",
  isDark: false,
  highlight: {
    base: { fillMode: "light" },
    start: { fillMode: "solid" },
    end: { fillMode: "solid" }
  },
  dot: {
    base: { fillMode: "solid" },
    start: { fillMode: "solid" },
    end: { fillMode: "solid" }
  },
  bar: {
    base: { fillMode: "solid" },
    start: { fillMode: "solid" },
    end: { fillMode: "solid" }
  },
  content: {
    base: {},
    start: {},
    end: {}
  }
};
class Theme {
  constructor(config) {
    Object.assign(this, defConfig, config);
  }
  normalizeAttr({ config, type }) {
    let rootColor = this.color;
    let root2 = {};
    const normAttr = this[type];
    if (config === true || isString_1(config)) {
      rootColor = isString_1(config) ? config : rootColor;
      root2 = __spreadValues({}, normAttr);
    } else if (isObject(config)) {
      if (hasAny(config, targetProps)) {
        root2 = __spreadValues({}, config);
      } else {
        root2 = {
          base: __spreadValues({}, config),
          start: __spreadValues({}, config),
          end: __spreadValues({}, config)
        };
      }
    } else {
      return null;
    }
    defaults_1(root2, { start: root2.startEnd, end: root2.startEnd }, normAttr);
    toPairs_1(root2).forEach(([targetType, targetConfig]) => {
      let targetColor = rootColor;
      if (targetConfig === true || isString_1(targetConfig)) {
        targetColor = isString_1(targetConfig) ? targetConfig : targetColor;
        root2[targetType] = { color: targetColor };
      } else if (isObject(targetConfig)) {
        if (hasAny(targetConfig, displayProps)) {
          root2[targetType] = __spreadValues({}, targetConfig);
        } else {
          root2[targetType] = {};
        }
      }
      if (!has(root2, `${targetType}.color`)) {
        set_1(root2, `${targetType}.color`, targetColor);
      }
    });
    return root2;
  }
  normalizeHighlight(config) {
    const highlight = this.normalizeAttr({
      config,
      type: "highlight"
    });
    toPairs_1(highlight).forEach(([_, targetConfig]) => {
      const c = defaults_1(targetConfig, {
        isDark: this.isDark,
        color: this.color
      });
      targetConfig.style = __spreadValues(__spreadValues({}, this.getHighlightBgStyle(c)), targetConfig.style);
      targetConfig.contentStyle = __spreadValues(__spreadValues({}, this.getHighlightContentStyle(c)), targetConfig.contentStyle);
    });
    return highlight;
  }
  getHighlightBgStyle({ fillMode, color, isDark }) {
    switch (fillMode) {
      case "outline":
      case "none":
        return {
          backgroundColor: isDark ? "var(--gray-900)" : "var(--white)",
          border: "2px solid",
          borderColor: isDark ? `var(--${color}-200)` : `var(--${color}-700)`,
          borderRadius: "var(--rounded-full)"
        };
      case "light":
        return {
          backgroundColor: isDark ? `var(--${color}-800)` : `var(--${color}-200)`,
          opacity: isDark ? 0.75 : 1,
          borderRadius: "var(--rounded-full)"
        };
      case "solid":
        return {
          backgroundColor: isDark ? `var(--${color}-500)` : `var(--${color}-600)`,
          borderRadius: "var(--rounded-full)"
        };
      default:
        return {
          borderRadius: "var(--rounded-full)"
        };
    }
  }
  getHighlightContentStyle({ fillMode, color, isDark }) {
    switch (fillMode) {
      case "outline":
      case "none":
        return {
          fontWeight: "var(--font-bold)",
          color: isDark ? `var(--${color}-100)` : `var(--${color}-900)`
        };
      case "light":
        return {
          fontWeight: "var(--font-bold)",
          color: isDark ? `var(--${color}-100)` : `var(--${color}-900)`
        };
      case "solid":
        return {
          fontWeight: "var(--font-bold)",
          color: "var(--white)"
        };
      default:
        return "";
    }
  }
  bgAccentHigh({ color, isDark }) {
    return {
      backgroundColor: isDark ? `var(--${color}-500)` : `var(--${color}-600)`
    };
  }
  contentAccent({ color, isDark }) {
    if (!color)
      return null;
    return {
      fontWeight: "var(--font-bold)",
      color: isDark ? `var(--${color}-100)` : `var(--${color}-900)`
    };
  }
  normalizeDot(config) {
    return this.normalizeNonHighlight("dot", config, this.bgAccentHigh);
  }
  normalizeBar(config) {
    return this.normalizeNonHighlight("bar", config, this.bgAccentHigh);
  }
  normalizeContent(config) {
    return this.normalizeNonHighlight("content", config, this.contentAccent);
  }
  normalizeNonHighlight(type, config, styleFn) {
    const attr = this.normalizeAttr({ type, config });
    toPairs_1(attr).forEach(([_, targetConfig]) => {
      defaults_1(targetConfig, { isDark: this.isDark, color: this.color });
      targetConfig.style = __spreadValues(__spreadValues({}, styleFn(targetConfig)), targetConfig.style);
    });
    return attr;
  }
}
var MILLISECONDS_IN_MINUTE$2 = 6e4;
function getDateMillisecondsPart(date) {
  return date.getTime() % MILLISECONDS_IN_MINUTE$2;
}
function getTimezoneOffsetInMilliseconds(dirtyDate) {
  var date = new Date(dirtyDate.getTime());
  var baseTimezoneOffset = Math.ceil(date.getTimezoneOffset());
  date.setSeconds(0, 0);
  var hasNegativeUTCOffset = baseTimezoneOffset > 0;
  var millisecondsPartOfTimezoneOffset = hasNegativeUTCOffset ? (MILLISECONDS_IN_MINUTE$2 + getDateMillisecondsPart(date)) % MILLISECONDS_IN_MINUTE$2 : getDateMillisecondsPart(date);
  return baseTimezoneOffset * MILLISECONDS_IN_MINUTE$2 + millisecondsPartOfTimezoneOffset;
}
function tzTokenizeDate(date, timeZone) {
  var dtf = getDateTimeFormat(timeZone);
  return dtf.formatToParts ? partsOffset(dtf, date) : hackyOffset(dtf, date);
}
var typeToPos = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function partsOffset(dtf, date) {
  var formatted = dtf.formatToParts(date);
  var filled = [];
  for (var i = 0; i < formatted.length; i++) {
    var pos = typeToPos[formatted[i].type];
    if (pos >= 0) {
      filled[pos] = parseInt(formatted[i].value, 10);
    }
  }
  return filled;
}
function hackyOffset(dtf, date) {
  var formatted = dtf.format(date).replace(/\u200E/g, "");
  var parsed = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(formatted);
  return [parsed[3], parsed[1], parsed[2], parsed[4], parsed[5], parsed[6]];
}
var dtfCache = {};
function getDateTimeFormat(timeZone) {
  if (!dtfCache[timeZone]) {
    var testDateFormatted = new Intl.DateTimeFormat("en-US", {
      hour12: false,
      timeZone: "America/New_York",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }).format(new Date("2014-06-25T04:00:00.123Z"));
    var hourCycleSupported = testDateFormatted === "06/25/2014, 00:00:00" || testDateFormatted === "\u200E06\u200E/\u200E25\u200E/\u200E2014\u200E \u200E00\u200E:\u200E00\u200E:\u200E00";
    dtfCache[timeZone] = hourCycleSupported ? new Intl.DateTimeFormat("en-US", {
      hour12: false,
      timeZone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }) : new Intl.DateTimeFormat("en-US", {
      hourCycle: "h23",
      timeZone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }
  return dtfCache[timeZone];
}
var MILLISECONDS_IN_HOUR$1 = 36e5;
var MILLISECONDS_IN_MINUTE$1 = 6e4;
var patterns$1 = {
  timezone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-])(\d{2})$/,
  timezoneHHMM: /^([+-])(\d{2}):?(\d{2})$/,
  timezoneIANA: /(UTC|(?:[a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?))$/
};
function tzParseTimezone(timezoneString, date) {
  var token2;
  var absoluteOffset;
  token2 = patterns$1.timezoneZ.exec(timezoneString);
  if (token2) {
    return 0;
  }
  var hours;
  token2 = patterns$1.timezoneHH.exec(timezoneString);
  if (token2) {
    hours = parseInt(token2[2], 10);
    if (!validateTimezone()) {
      return NaN;
    }
    absoluteOffset = hours * MILLISECONDS_IN_HOUR$1;
    return token2[1] === "+" ? -absoluteOffset : absoluteOffset;
  }
  token2 = patterns$1.timezoneHHMM.exec(timezoneString);
  if (token2) {
    hours = parseInt(token2[2], 10);
    var minutes = parseInt(token2[3], 10);
    if (!validateTimezone(hours, minutes)) {
      return NaN;
    }
    absoluteOffset = hours * MILLISECONDS_IN_HOUR$1 + minutes * MILLISECONDS_IN_MINUTE$1;
    return token2[1] === "+" ? -absoluteOffset : absoluteOffset;
  }
  token2 = patterns$1.timezoneIANA.exec(timezoneString);
  if (token2) {
    var tokens = tzTokenizeDate(date, timezoneString);
    var asUTC = Date.UTC(tokens[0], tokens[1] - 1, tokens[2], tokens[3], tokens[4], tokens[5]);
    var timestampWithMsZeroed = date.getTime() - date.getTime() % 1e3;
    return -(asUTC - timestampWithMsZeroed);
  }
  return 0;
}
function validateTimezone(hours, minutes) {
  if (minutes != null && (minutes < 0 || minutes > 59)) {
    return false;
  }
  return true;
}
var MILLISECONDS_IN_HOUR = 36e5;
var MILLISECONDS_IN_MINUTE = 6e4;
var DEFAULT_ADDITIONAL_DIGITS = 2;
var patterns = {
  dateTimeDelimeter: /[T ]/,
  plainTime: /:/,
  timeZoneDelimeter: /[Z ]/i,
  YY: /^(\d{2})$/,
  YYY: [
    /^([+-]\d{2})$/,
    /^([+-]\d{3})$/,
    /^([+-]\d{4})$/
  ],
  YYYY: /^(\d{4})/,
  YYYYY: [
    /^([+-]\d{4})/,
    /^([+-]\d{5})/,
    /^([+-]\d{6})/
  ],
  MM: /^-(\d{2})$/,
  DDD: /^-?(\d{3})$/,
  MMDD: /^-?(\d{2})-?(\d{2})$/,
  Www: /^-?W(\d{2})$/,
  WwwD: /^-?W(\d{2})-?(\d{1})$/,
  HH: /^(\d{2}([.,]\d*)?)$/,
  HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
  timezone: /([Z+-].*| UTC|(?:[a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?))$/
};
function toDate(argument, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  }
  if (argument === null) {
    return new Date(NaN);
  }
  var options = dirtyOptions || {};
  var additionalDigits = options.additionalDigits == null ? DEFAULT_ADDITIONAL_DIGITS : toInteger(options.additionalDigits);
  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  }
  if (argument instanceof Date || typeof argument === "object" && Object.prototype.toString.call(argument) === "[object Date]") {
    return new Date(argument.getTime());
  } else if (typeof argument === "number" || Object.prototype.toString.call(argument) === "[object Number]") {
    return new Date(argument);
  } else if (!(typeof argument === "string" || Object.prototype.toString.call(argument) === "[object String]")) {
    return new Date(NaN);
  }
  var dateStrings = splitDateString(argument);
  var parseYearResult = parseYear(dateStrings.date, additionalDigits);
  var year = parseYearResult.year;
  var restDateString = parseYearResult.restDateString;
  var date = parseDate(restDateString, year);
  if (isNaN(date)) {
    return new Date(NaN);
  }
  if (date) {
    var timestamp = date.getTime();
    var time = 0;
    var offset;
    if (dateStrings.time) {
      time = parseTime(dateStrings.time);
      if (isNaN(time)) {
        return new Date(NaN);
      }
    }
    if (dateStrings.timezone || options.timeZone) {
      offset = tzParseTimezone(dateStrings.timezone || options.timeZone, new Date(timestamp + time));
      if (isNaN(offset)) {
        return new Date(NaN);
      }
      offset = tzParseTimezone(dateStrings.timezone || options.timeZone, new Date(timestamp + time + offset));
      if (isNaN(offset)) {
        return new Date(NaN);
      }
    } else {
      offset = getTimezoneOffsetInMilliseconds(new Date(timestamp + time));
      offset = getTimezoneOffsetInMilliseconds(new Date(timestamp + time + offset));
    }
    return new Date(timestamp + time + offset);
  } else {
    return new Date(NaN);
  }
}
function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimeter);
  var timeString;
  if (patterns.plainTime.test(array[0])) {
    dateStrings.date = null;
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];
    dateStrings.timezone = array[2];
    if (patterns.timeZoneDelimeter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimeter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }
  if (timeString) {
    var token2 = patterns.timezone.exec(timeString);
    if (token2) {
      dateStrings.time = timeString.replace(token2[1], "");
      dateStrings.timezone = token2[1];
    } else {
      dateStrings.time = timeString;
    }
  }
  return dateStrings;
}
function parseYear(dateString, additionalDigits) {
  var patternYYY = patterns.YYY[additionalDigits];
  var patternYYYYY = patterns.YYYYY[additionalDigits];
  var token2;
  token2 = patterns.YYYY.exec(dateString) || patternYYYYY.exec(dateString);
  if (token2) {
    var yearString = token2[1];
    return {
      year: parseInt(yearString, 10),
      restDateString: dateString.slice(yearString.length)
    };
  }
  token2 = patterns.YY.exec(dateString) || patternYYY.exec(dateString);
  if (token2) {
    var centuryString = token2[1];
    return {
      year: parseInt(centuryString, 10) * 100,
      restDateString: dateString.slice(centuryString.length)
    };
  }
  return {
    year: null
  };
}
function parseDate(dateString, year) {
  if (year === null) {
    return null;
  }
  var token2;
  var date;
  var month;
  var week;
  if (dateString.length === 0) {
    date = new Date(0);
    date.setUTCFullYear(year);
    return date;
  }
  token2 = patterns.MM.exec(dateString);
  if (token2) {
    date = new Date(0);
    month = parseInt(token2[1], 10) - 1;
    if (!validateDate(year, month)) {
      return new Date(NaN);
    }
    date.setUTCFullYear(year, month);
    return date;
  }
  token2 = patterns.DDD.exec(dateString);
  if (token2) {
    date = new Date(0);
    var dayOfYear = parseInt(token2[1], 10);
    if (!validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }
    date.setUTCFullYear(year, 0, dayOfYear);
    return date;
  }
  token2 = patterns.MMDD.exec(dateString);
  if (token2) {
    date = new Date(0);
    month = parseInt(token2[1], 10) - 1;
    var day = parseInt(token2[2], 10);
    if (!validateDate(year, month, day)) {
      return new Date(NaN);
    }
    date.setUTCFullYear(year, month, day);
    return date;
  }
  token2 = patterns.Www.exec(dateString);
  if (token2) {
    week = parseInt(token2[1], 10) - 1;
    if (!validateWeekDate(year, week)) {
      return new Date(NaN);
    }
    return dayOfISOWeekYear(year, week);
  }
  token2 = patterns.WwwD.exec(dateString);
  if (token2) {
    week = parseInt(token2[1], 10) - 1;
    var dayOfWeek = parseInt(token2[2], 10) - 1;
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }
    return dayOfISOWeekYear(year, week, dayOfWeek);
  }
  return null;
}
function parseTime(timeString) {
  var token2;
  var hours;
  var minutes;
  token2 = patterns.HH.exec(timeString);
  if (token2) {
    hours = parseFloat(token2[1].replace(",", "."));
    if (!validateTime(hours)) {
      return NaN;
    }
    return hours % 24 * MILLISECONDS_IN_HOUR;
  }
  token2 = patterns.HHMM.exec(timeString);
  if (token2) {
    hours = parseInt(token2[1], 10);
    minutes = parseFloat(token2[2].replace(",", "."));
    if (!validateTime(hours, minutes)) {
      return NaN;
    }
    return hours % 24 * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE;
  }
  token2 = patterns.HHMMSS.exec(timeString);
  if (token2) {
    hours = parseInt(token2[1], 10);
    minutes = parseInt(token2[2], 10);
    var seconds = parseFloat(token2[3].replace(",", "."));
    if (!validateTime(hours, minutes, seconds)) {
      return NaN;
    }
    return hours % 24 * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE + seconds * 1e3;
  }
  return null;
}
function dayOfISOWeekYear(isoWeekYear, week, day) {
  week = week || 0;
  day = day || 0;
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = week * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}
var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var DAYS_IN_MONTH_LEAP_YEAR = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
function validateDate(year, month, date) {
  if (month < 0 || month > 11) {
    return false;
  }
  if (date != null) {
    if (date < 1) {
      return false;
    }
    var isLeapYear = isLeapYearIndex(year);
    if (isLeapYear && date > DAYS_IN_MONTH_LEAP_YEAR[month]) {
      return false;
    }
    if (!isLeapYear && date > DAYS_IN_MONTH[month]) {
      return false;
    }
  }
  return true;
}
function validateDayOfYearDate(year, dayOfYear) {
  if (dayOfYear < 1) {
    return false;
  }
  var isLeapYear = isLeapYearIndex(year);
  if (isLeapYear && dayOfYear > 366) {
    return false;
  }
  if (!isLeapYear && dayOfYear > 365) {
    return false;
  }
  return true;
}
function validateWeekDate(year, week, day) {
  if (week < 0 || week > 52) {
    return false;
  }
  if (day != null && (day < 0 || day > 6)) {
    return false;
  }
  return true;
}
function validateTime(hours, minutes, seconds) {
  if (hours != null && (hours < 0 || hours >= 25)) {
    return false;
  }
  if (minutes != null && (minutes < 0 || minutes >= 60)) {
    return false;
  }
  if (seconds != null && (seconds < 0 || seconds >= 60)) {
    return false;
  }
  return true;
}
function startOfWeek(dirtyDate, dirtyOptions) {
  requiredArgs(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn);
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  }
  var date = toDate$1(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}
function startOfISOWeek(dirtyDate) {
  requiredArgs(1, arguments);
  return startOfWeek(dirtyDate, {
    weekStartsOn: 1
  });
}
function getISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate$1(dirtyDate);
  var year = date.getFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  var startOfNextYear = startOfISOWeek(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
  var startOfThisYear = startOfISOWeek(fourthOfJanuaryOfThisYear);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}
function startOfISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var year = getISOWeekYear(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setFullYear(year, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  var date = startOfISOWeek(fourthOfJanuary);
  return date;
}
var MILLISECONDS_IN_WEEK$2 = 6048e5;
function getISOWeek(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate$1(dirtyDate);
  var diff = startOfISOWeek(date).getTime() - startOfISOWeekYear(date).getTime();
  return Math.round(diff / MILLISECONDS_IN_WEEK$2) + 1;
}
function getWeekYear(dirtyDate, dirtyOptions) {
  requiredArgs(1, arguments);
  var date = toDate$1(dirtyDate);
  var year = date.getFullYear();
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate);
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  }
  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setHours(0, 0, 0, 0);
  var startOfNextYear = startOfWeek(firstWeekOfNextYear, dirtyOptions);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setHours(0, 0, 0, 0);
  var startOfThisYear = startOfWeek(firstWeekOfThisYear, dirtyOptions);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}
function startOfWeekYear(dirtyDate, dirtyOptions) {
  requiredArgs(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate);
  var year = getWeekYear(dirtyDate, dirtyOptions);
  var firstWeek = new Date(0);
  firstWeek.setFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  var date = startOfWeek(firstWeek, dirtyOptions);
  return date;
}
var MILLISECONDS_IN_WEEK$1 = 6048e5;
function getWeek(dirtyDate, options) {
  requiredArgs(1, arguments);
  var date = toDate$1(dirtyDate);
  var diff = startOfWeek(date, options).getTime() - startOfWeekYear(date, options).getTime();
  return Math.round(diff / MILLISECONDS_IN_WEEK$1) + 1;
}
var MILLISECONDS_IN_WEEK = 6048e5;
function differenceInCalendarWeeks(dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  requiredArgs(2, arguments);
  var startOfWeekLeft = startOfWeek(dirtyDateLeft, dirtyOptions);
  var startOfWeekRight = startOfWeek(dirtyDateRight, dirtyOptions);
  var timestampLeft = startOfWeekLeft.getTime() - getTimezoneOffsetInMilliseconds(startOfWeekLeft);
  var timestampRight = startOfWeekRight.getTime() - getTimezoneOffsetInMilliseconds(startOfWeekRight);
  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_WEEK);
}
function lastDayOfMonth(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate$1(dirtyDate);
  var month = date.getMonth();
  date.setFullYear(date.getFullYear(), month + 1, 0);
  date.setHours(0, 0, 0, 0);
  return date;
}
function startOfMonth(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate$1(dirtyDate);
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
  return date;
}
function getWeeksInMonth(date, options) {
  requiredArgs(1, arguments);
  return differenceInCalendarWeeks(lastDayOfMonth(date), startOfMonth(date), options) + 1;
}
const millisecondsPerDay = 24 * 60 * 60 * 1e3;
class DateInfo {
  constructor(config, { order = 0, locale, isFullDay } = {}) {
    this.isDateInfo = true;
    this.order = order;
    this.locale = locale instanceof Locale ? locale : new Locale(locale);
    this.firstDayOfWeek = this.locale.firstDayOfWeek;
    if (!isObject(config)) {
      const date = this.locale.normalizeDate(config);
      if (isFullDay) {
        config = {
          start: date,
          end: date
        };
      } else {
        config = {
          startOn: date,
          endOn: date
        };
      }
    }
    let start = null;
    let end = null;
    if (config.start) {
      start = this.locale.normalizeDate(config.start, __spreadProps(__spreadValues({}, this.opts), {
        time: "00:00:00"
      }));
    } else if (config.startOn) {
      start = this.locale.normalizeDate(config.startOn, this.opts);
    }
    if (config.end) {
      end = this.locale.normalizeDate(config.end, __spreadProps(__spreadValues({}, this.opts), {
        time: "23:59:59"
      }));
    } else if (config.endOn) {
      end = this.locale.normalizeDate(config.endOn, this.opts);
    }
    if (start && end && start > end) {
      const temp = start;
      start = end;
      end = temp;
    } else if (start && config.span >= 1) {
      end = addDays(start, config.span - 1);
    }
    this.start = start;
    this.startTime = start ? start.getTime() : NaN;
    this.end = end;
    this.endTime = end ? end.getTime() : NaN;
    this.isDate = this.startTime && this.startTime === this.endTime;
    this.isRange = !this.isDate;
    const andOpt = mixinOptionalProps(config, {}, DateInfo.patternProps);
    if (andOpt.assigned) {
      this.on = { and: andOpt.target };
    }
    if (config.on) {
      const or = (isArrayLikeObject_1(config.on) ? config.on : [config.on]).map((o) => {
        if (isFunction_1(o))
          return o;
        const opt = mixinOptionalProps(o, {}, DateInfo.patternProps);
        return opt.assigned ? opt.target : null;
      }).filter((o) => o);
      if (or.length)
        this.on = __spreadProps(__spreadValues({}, this.on), { or });
    }
    this.isComplex = !!this.on;
  }
  get opts() {
    return {
      order: this.order,
      locale: this.locale
    };
  }
  toDateInfo(date) {
    return date.isDateInfo ? date : new DateInfo(date, this.opts);
  }
  startOfWeek(date) {
    const day = date.getDay() + 1;
    const daysToAdd = day >= this.firstDayOfWeek ? this.firstDayOfWeek - day : -(7 - (this.firstDayOfWeek - day));
    return addDays(date, daysToAdd);
  }
  diffInDays(d1, d2) {
    return Math.round((d2 - d1) / millisecondsPerDay);
  }
  diffInWeeks(d1, d2) {
    return this.diffInDays(this.startOfWeek(d1), this.startOfWeek(d2));
  }
  diffInYears(d1, d2) {
    return d2.getUTCFullYear() - d1.getUTCFullYear();
  }
  diffInMonths(d1, d2) {
    return this.diffInYears(d1, d2) * 12 + (d2.getMonth() - d1.getMonth());
  }
  static get patterns() {
    return {
      dailyInterval: {
        test: (day, interval, di) => di.diffInDays(di.start || new Date(), day.date) % interval === 0
      },
      weeklyInterval: {
        test: (day, interval, di) => di.diffInWeeks(di.start || new Date(), day.date) % interval === 0
      },
      monthlyInterval: {
        test: (day, interval, di) => di.diffInMonths(di.start || new Date(), day.date) % interval === 0
      },
      yearlyInterval: {
        test: () => (day, interval, di) => di.diffInYears(di.start || new Date(), day.date) % interval === 0
      },
      days: {
        validate: (days) => isArrayLikeObject_1(days) ? days : [parseInt(days, 10)],
        test: (day, days) => days.includes(day.day) || days.includes(-day.dayFromEnd)
      },
      weekdays: {
        validate: (weekdays2) => isArrayLikeObject_1(weekdays2) ? weekdays2 : [parseInt(weekdays2, 10)],
        test: (day, weekdays2) => weekdays2.includes(day.weekday)
      },
      ordinalWeekdays: {
        validate: (ordinalWeekdays) => Object.keys(ordinalWeekdays).reduce((obj, ck) => {
          const weekdays2 = ordinalWeekdays[ck];
          if (!weekdays2)
            return obj;
          obj[ck] = isArrayLikeObject_1(weekdays2) ? weekdays2 : [parseInt(weekdays2, 10)];
          return obj;
        }, {}),
        test: (day, ordinalWeekdays) => Object.keys(ordinalWeekdays).map((k) => parseInt(k, 10)).find((k) => ordinalWeekdays[k].includes(day.weekday) && (k === day.weekdayOrdinal || k === -day.weekdayOrdinalFromEnd))
      },
      weekends: {
        validate: (config) => config,
        test: (day) => day.weekday === 1 || day.weekday === 7
      },
      workweek: {
        validate: (config) => config,
        test: (day) => day.weekday >= 2 && day.weekday <= 6
      },
      weeks: {
        validate: (weeks) => isArrayLikeObject_1(weeks) ? weeks : [parseInt(weeks, 10)],
        test: (day, weeks) => weeks.includes(day.week) || weeks.includes(-day.weekFromEnd)
      },
      months: {
        validate: (months) => isArrayLikeObject_1(months) ? months : [parseInt(months, 10)],
        test: (day, months) => months.includes(day.month)
      },
      years: {
        validate: (years) => isArrayLikeObject_1(years) ? years : [parseInt(years, 10)],
        test: (day, years) => years.includes(day.year)
      }
    };
  }
  static get patternProps() {
    return Object.keys(DateInfo.patterns).map((k) => ({
      name: k,
      validate: DateInfo.patterns[k].validate
    }));
  }
  static testConfig(config, day, dateInfo) {
    if (isFunction_1(config))
      return config(day);
    if (isObject(config)) {
      return Object.keys(config).every((k) => DateInfo.patterns[k].test(day, config[k], dateInfo));
    }
    return null;
  }
  iterateDatesInRange({ start, end }, fn) {
    if (!start || !end || !isFunction_1(fn))
      return null;
    start = this.locale.normalizeDate(start, __spreadProps(__spreadValues({}, this.opts), {
      time: "00:00:00"
    }));
    const state2 = {
      i: 0,
      date: start,
      day: this.locale.getDateParts(start),
      finished: false
    };
    let result = null;
    for (; !state2.finished && state2.date <= end; state2.i++) {
      result = fn(state2);
      state2.date = addDays(state2.date, 1);
      state2.day = this.locale.getDateParts(state2.date);
    }
    return result;
  }
  shallowIntersectingRange(other) {
    return this.rangeShallowIntersectingRange(this, this.toDateInfo(other));
  }
  rangeShallowIntersectingRange(date1, date2) {
    if (!this.dateShallowIntersectsDate(date1, date2)) {
      return null;
    }
    const thisRange = date1.toRange();
    const otherRange = date2.toRange();
    let start = null;
    let end = null;
    if (thisRange.start) {
      if (!otherRange.start) {
        start = thisRange.start;
      } else {
        start = thisRange.start > otherRange.start ? thisRange.start : otherRange.start;
      }
    } else if (otherRange.start) {
      start = otherRange.start;
    }
    if (thisRange.end) {
      if (!otherRange.end) {
        end = thisRange.end;
      } else {
        end = thisRange.end < otherRange.end ? thisRange.end : otherRange.end;
      }
    } else if (otherRange.end) {
      end = otherRange.end;
    }
    return { start, end };
  }
  intersectsDate(other) {
    const date = this.toDateInfo(other);
    if (!this.shallowIntersectsDate(date))
      return null;
    if (!this.on)
      return this;
    const range = this.rangeShallowIntersectingRange(this, date);
    let result = false;
    this.iterateDatesInRange(range, (state2) => {
      if (this.matchesDay(state2.day)) {
        result = result || date.matchesDay(state2.day);
        state2.finished = result;
      }
    });
    return result;
  }
  shallowIntersectsDate(other) {
    return this.dateShallowIntersectsDate(this, this.toDateInfo(other));
  }
  dateShallowIntersectsDate(date1, date2) {
    if (date1.isDate) {
      return date2.isDate ? date1.startTime === date2.startTime : this.dateShallowIncludesDate(date2, date1);
    }
    if (date2.isDate) {
      return this.dateShallowIncludesDate(date1, date2);
    }
    if (date1.start && date2.end && date1.start > date2.end) {
      return false;
    }
    if (date1.end && date2.start && date1.end < date2.start) {
      return false;
    }
    return true;
  }
  includesDate(other) {
    const date = this.toDateInfo(other);
    if (!this.shallowIncludesDate(date)) {
      return false;
    }
    if (!this.on) {
      return true;
    }
    const range = this.rangeShallowIntersectingRange(this, date);
    let result = true;
    this.iterateDatesInRange(range, (state2) => {
      if (this.matchesDay(state2.day)) {
        result = result && date.matchesDay(state2.day);
        state2.finished = !result;
      }
    });
    return result;
  }
  shallowIncludesDate(other) {
    return this.dateShallowIncludesDate(this, other.isDate ? other : new DateInfo(other, this.opts));
  }
  dateShallowIncludesDate(date1, date2) {
    if (date1.isDate) {
      if (date2.isDate) {
        return date1.startTime === date2.startTime;
      }
      if (!date2.startTime || !date2.endTime) {
        return false;
      }
      return date1.startTime === date2.startTime && date1.startTime === date2.endTime;
    }
    if (date2.isDate) {
      if (date1.start && date2.start < date1.start) {
        return false;
      }
      if (date1.end && date2.start > date1.end) {
        return false;
      }
      return true;
    }
    if (date1.start && (!date2.start || date2.start < date1.start)) {
      return false;
    }
    if (date1.end && (!date2.end || date2.end > date1.end)) {
      return false;
    }
    return true;
  }
  intersectsDay(day) {
    if (!this.shallowIntersectsDate(day.range))
      return null;
    return this.matchesDay(day) ? this : null;
  }
  matchesDay(day) {
    if (!this.on)
      return true;
    if (this.on.and && !DateInfo.testConfig(this.on.and, day, this)) {
      return false;
    }
    if (this.on.or && !this.on.or.some((or) => DateInfo.testConfig(or, day, this))) {
      return false;
    }
    return true;
  }
  toRange() {
    return new DateInfo({
      start: this.start,
      end: this.end
    }, this.opts);
  }
  compare(other) {
    if (this.order !== other.order)
      return this.order - other.order;
    if (this.isDate !== other.isDate)
      return this.isDate ? 1 : -1;
    if (this.isDate)
      return 0;
    const diff = this.start - other.start;
    return diff !== 0 ? diff : this.end - other.end;
  }
}
const locales = {
  ar: { dow: 7, L: "D/\u200FM/\u200FYYYY" },
  bg: { dow: 2, L: "D.MM.YYYY" },
  ca: { dow: 2, L: "DD/MM/YYYY" },
  "zh-CN": { dow: 2, L: "YYYY/MM/DD" },
  "zh-TW": { dow: 1, L: "YYYY/MM/DD" },
  hr: { dow: 2, L: "DD.MM.YYYY" },
  cs: { dow: 2, L: "DD.MM.YYYY" },
  da: { dow: 2, L: "DD.MM.YYYY" },
  nl: { dow: 2, L: "DD-MM-YYYY" },
  "en-US": { dow: 1, L: "MM/DD/YYYY" },
  "en-AU": { dow: 2, L: "DD/MM/YYYY" },
  "en-CA": { dow: 1, L: "YYYY-MM-DD" },
  "en-GB": { dow: 2, L: "DD/MM/YYYY" },
  "en-IE": { dow: 2, L: "DD-MM-YYYY" },
  "en-NZ": { dow: 2, L: "DD/MM/YYYY" },
  "en-ZA": { dow: 1, L: "YYYY/MM/DD" },
  eo: { dow: 2, L: "YYYY-MM-DD" },
  et: { dow: 2, L: "DD.MM.YYYY" },
  fi: { dow: 2, L: "DD.MM.YYYY" },
  fr: { dow: 2, L: "DD/MM/YYYY" },
  "fr-CA": { dow: 1, L: "YYYY-MM-DD" },
  "fr-CH": { dow: 2, L: "DD.MM.YYYY" },
  de: { dow: 2, L: "DD.MM.YYYY" },
  he: { dow: 1, L: "DD.MM.YYYY" },
  id: { dow: 2, L: "DD/MM/YYYY" },
  it: { dow: 2, L: "DD/MM/YYYY" },
  ja: { dow: 1, L: "YYYY\u5E74M\u6708D\u65E5" },
  ko: { dow: 1, L: "YYYY.MM.DD" },
  lv: { dow: 2, L: "DD.MM.YYYY" },
  lt: { dow: 2, L: "DD.MM.YYYY" },
  mk: { dow: 2, L: "D.MM.YYYY" },
  nb: { dow: 2, L: "D. MMMM YYYY" },
  nn: { dow: 2, L: "D. MMMM YYYY" },
  pl: { dow: 2, L: "DD.MM.YYYY" },
  pt: { dow: 2, L: "DD/MM/YYYY" },
  ro: { dow: 2, L: "DD.MM.YYYY" },
  ru: { dow: 2, L: "DD.MM.YYYY" },
  sk: { dow: 2, L: "DD.MM.YYYY" },
  "es-ES": { dow: 2, L: "DD/MM/YYYY" },
  "es-MX": { dow: 2, L: "DD/MM/YYYY" },
  sv: { dow: 2, L: "YYYY-MM-DD" },
  th: { dow: 1, L: "DD/MM/YYYY" },
  tr: { dow: 2, L: "DD.MM.YYYY" },
  uk: { dow: 2, L: "DD.MM.YYYY" },
  vi: { dow: 2, L: "DD/MM/YYYY" }
};
locales.en = locales["en-US"];
locales.es = locales["es-ES"];
locales.no = locales.nb;
locales.zh = locales["zh-CN"];
toPairs_1(locales).forEach(([id, { dow, L }]) => {
  locales[id] = {
    id,
    firstDayOfWeek: dow,
    masks: { L }
  };
});
const PATCH = {
  DATE_TIME: 1,
  DATE: 2,
  TIME: 3
};
const PATCH_KEYS = {
  1: ["year", "month", "day", "hours", "minutes", "seconds", "milliseconds"],
  2: ["year", "month", "day"],
  3: ["hours", "minutes", "seconds", "milliseconds"]
};
const token = /d{1,2}|W{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|Z{1,4}|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g;
const twoDigits = /\d\d?/;
const threeDigits = /\d{3}/;
const fourDigits = /\d{4}/;
const word = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF/]+(\s*?[\u0600-\u06FF]+){1,2}/i;
const literal = /\[([^]*?)\]/gm;
const noop = () => {
};
const monthUpdate = (arrName) => (d, v, l) => {
  const index2 = l[arrName].indexOf(v.charAt(0).toUpperCase() + v.substring(1).toLowerCase());
  if (~index2) {
    d.month = index2;
  }
};
const maskMacros = ["L", "iso"];
const daysInWeek = 7;
const daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const hourOptions = [
  { value: 0, label: "00" },
  { value: 1, label: "01" },
  { value: 2, label: "02" },
  { value: 3, label: "03" },
  { value: 4, label: "04" },
  { value: 5, label: "05" },
  { value: 6, label: "06" },
  { value: 7, label: "07" },
  { value: 8, label: "08" },
  { value: 9, label: "09" },
  { value: 10, label: "10" },
  { value: 11, label: "11" },
  { value: 12, label: "12" },
  { value: 13, label: "13" },
  { value: 14, label: "14" },
  { value: 15, label: "15" },
  { value: 16, label: "16" },
  { value: 17, label: "17" },
  { value: 18, label: "18" },
  { value: 19, label: "19" },
  { value: 20, label: "20" },
  { value: 21, label: "21" },
  { value: 22, label: "22" },
  { value: 23, label: "23" }
];
const formatFlags = {
  D(d) {
    return d.day;
  },
  DD(d) {
    return pad(d.day);
  },
  Do(d, l) {
    return l.DoFn(d.day);
  },
  d(d) {
    return d.weekday - 1;
  },
  dd(d) {
    return pad(d.weekday - 1);
  },
  W(d, l) {
    return l.dayNamesNarrow[d.weekday - 1];
  },
  WW(d, l) {
    return l.dayNamesShorter[d.weekday - 1];
  },
  WWW(d, l) {
    return l.dayNamesShort[d.weekday - 1];
  },
  WWWW(d, l) {
    return l.dayNames[d.weekday - 1];
  },
  M(d) {
    return d.month;
  },
  MM(d) {
    return pad(d.month);
  },
  MMM(d, l) {
    return l.monthNamesShort[d.month - 1];
  },
  MMMM(d, l) {
    return l.monthNames[d.month - 1];
  },
  YY(d) {
    return String(d.year).substring(2);
  },
  YYYY(d) {
    return pad(d.year, 4);
  },
  h(d) {
    return d.hours % 12 || 12;
  },
  hh(d) {
    return pad(d.hours % 12 || 12);
  },
  H(d) {
    return d.hours;
  },
  HH(d) {
    return pad(d.hours);
  },
  m(d) {
    return d.minutes;
  },
  mm(d) {
    return pad(d.minutes);
  },
  s(d) {
    return d.seconds;
  },
  ss(d) {
    return pad(d.seconds);
  },
  S(d) {
    return Math.round(d.milliseconds / 100);
  },
  SS(d) {
    return pad(Math.round(d.milliseconds / 10), 2);
  },
  SSS(d) {
    return pad(d.milliseconds, 3);
  },
  a(d, l) {
    return d.hours < 12 ? l.amPm[0] : l.amPm[1];
  },
  A(d, l) {
    return d.hours < 12 ? l.amPm[0].toUpperCase() : l.amPm[1].toUpperCase();
  },
  Z() {
    return "Z";
  },
  ZZ(d) {
    const o = d.timezoneOffset;
    return `${o > 0 ? "-" : "+"}${pad(Math.floor(Math.abs(o) / 60), 2)}`;
  },
  ZZZ(d) {
    const o = d.timezoneOffset;
    return `${o > 0 ? "-" : "+"}${pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4)}`;
  },
  ZZZZ(d) {
    const o = d.timezoneOffset;
    return `${o > 0 ? "-" : "+"}${pad(Math.floor(Math.abs(o) / 60), 2)}:${pad(Math.abs(o) % 60, 2)}`;
  }
};
const parseFlags = {
  D: [
    twoDigits,
    (d, v) => {
      d.day = v;
    }
  ],
  Do: [
    new RegExp(twoDigits.source + word.source),
    (d, v) => {
      d.day = parseInt(v, 10);
    }
  ],
  d: [twoDigits, noop],
  W: [word, noop],
  M: [
    twoDigits,
    (d, v) => {
      d.month = v - 1;
    }
  ],
  MMM: [word, monthUpdate("monthNamesShort")],
  MMMM: [word, monthUpdate("monthNames")],
  YY: [
    twoDigits,
    (d, v) => {
      const da = new Date();
      const cent = +da.getFullYear().toString().substring(0, 2);
      d.year = `${v > 68 ? cent - 1 : cent}${v}`;
    }
  ],
  YYYY: [
    fourDigits,
    (d, v) => {
      d.year = v;
    }
  ],
  S: [
    /\d/,
    (d, v) => {
      d.millisecond = v * 100;
    }
  ],
  SS: [
    /\d{2}/,
    (d, v) => {
      d.millisecond = v * 10;
    }
  ],
  SSS: [
    threeDigits,
    (d, v) => {
      d.millisecond = v;
    }
  ],
  h: [
    twoDigits,
    (d, v) => {
      d.hour = v;
    }
  ],
  m: [
    twoDigits,
    (d, v) => {
      d.minute = v;
    }
  ],
  s: [
    twoDigits,
    (d, v) => {
      d.second = v;
    }
  ],
  a: [
    word,
    (d, v, l) => {
      const val = v.toLowerCase();
      if (val === l.amPm[0]) {
        d.isPm = false;
      } else if (val === l.amPm[1]) {
        d.isPm = true;
      }
    }
  ],
  Z: [
    /[^\s]*?[+-]\d\d:?\d\d|[^\s]*?Z?/,
    (d, v) => {
      if (v === "Z")
        v = "+00:00";
      const parts = `${v}`.match(/([+-]|\d\d)/gi);
      if (parts) {
        const minutes = +(parts[1] * 60) + parseInt(parts[2], 10);
        d.timezoneOffset = parts[0] === "+" ? minutes : -minutes;
      }
    }
  ]
};
parseFlags.DD = parseFlags.D;
parseFlags.dd = parseFlags.d;
parseFlags.WWWW = parseFlags.WWW = parseFlags.WW = parseFlags.W;
parseFlags.MM = parseFlags.M;
parseFlags.mm = parseFlags.m;
parseFlags.hh = parseFlags.H = parseFlags.HH = parseFlags.h;
parseFlags.ss = parseFlags.s;
parseFlags.A = parseFlags.a;
parseFlags.ZZZZ = parseFlags.ZZZ = parseFlags.ZZ = parseFlags.Z;
function resolveConfig(config, locales2) {
  const detLocale = new Intl.DateTimeFormat().resolvedOptions().locale;
  let id;
  if (isString_1(config)) {
    id = config;
  } else if (has(config, "id")) {
    id = config.id;
  }
  id = (id || detLocale).toLowerCase();
  const localeKeys = Object.keys(locales2);
  const validKey = (k) => localeKeys.find((lk) => lk.toLowerCase() === k);
  id = validKey(id) || validKey(id.substring(0, 2)) || detLocale;
  const defLocale = __spreadProps(__spreadValues(__spreadValues({}, locales2["en-IE"]), locales2[id]), { id });
  config = isObject(config) ? defaultsDeep_1(config, defLocale) : defLocale;
  return config;
}
class Locale {
  constructor(config, { locales: locales$1 = locales, timezone } = {}) {
    const { id, firstDayOfWeek, masks: masks2 } = resolveConfig(config, locales$1);
    this.id = id;
    this.daysInWeek = daysInWeek;
    this.firstDayOfWeek = clamp_1(firstDayOfWeek, 1, daysInWeek);
    this.masks = masks2;
    this.timezone = timezone || void 0;
    this.dayNames = this.getDayNames("long");
    this.dayNamesShort = this.getDayNames("short");
    this.dayNamesShorter = this.dayNamesShort.map((s) => s.substring(0, 2));
    this.dayNamesNarrow = this.getDayNames("narrow");
    this.monthNames = this.getMonthNames("long");
    this.monthNamesShort = this.getMonthNames("short");
    this.amPm = ["am", "pm"];
    this.monthData = {};
    this.getMonthComps = this.getMonthComps.bind(this);
    this.parse = this.parse.bind(this);
    this.format = this.format.bind(this);
    this.toPage = this.toPage.bind(this);
  }
  format(date, mask) {
    date = this.normalizeDate(date);
    if (!date)
      return "";
    mask = this.normalizeMasks(mask)[0];
    const literals = [];
    mask = mask.replace(literal, ($0, $1) => {
      literals.push($1);
      return "??";
    });
    const timezone = /Z$/.test(mask) ? "utc" : this.timezone;
    const dateParts = this.getDateParts(date, timezone);
    mask = mask.replace(token, ($0) => $0 in formatFlags ? formatFlags[$0](dateParts, this) : $0.slice(1, $0.length - 1));
    return mask.replace(/\?\?/g, () => literals.shift());
  }
  parse(dateString, mask) {
    const masks2 = this.normalizeMasks(mask);
    return masks2.map((m) => {
      if (typeof m !== "string") {
        throw new Error("Invalid mask in fecha.parse");
      }
      let str = dateString;
      if (str.length > 1e3) {
        return false;
      }
      let isValid = true;
      const dateInfo = {};
      m.replace(token, ($0) => {
        if (parseFlags[$0]) {
          const info = parseFlags[$0];
          const index2 = str.search(info[0]);
          if (!~index2) {
            isValid = false;
          } else {
            str.replace(info[0], (result) => {
              info[1](dateInfo, result, this);
              str = str.substring(index2 + result.length);
              return result;
            });
          }
        }
        return parseFlags[$0] ? "" : $0.slice(1, $0.length - 1);
      });
      if (!isValid) {
        return false;
      }
      const today = new Date();
      if (dateInfo.isPm === true && dateInfo.hour != null && +dateInfo.hour !== 12) {
        dateInfo.hour = +dateInfo.hour + 12;
      } else if (dateInfo.isPm === false && +dateInfo.hour === 12) {
        dateInfo.hour = 0;
      }
      let date;
      if (dateInfo.timezoneOffset != null) {
        dateInfo.minute = +(dateInfo.minute || 0) - +dateInfo.timezoneOffset;
        date = new Date(Date.UTC(dateInfo.year || today.getFullYear(), dateInfo.month || 0, dateInfo.day || 1, dateInfo.hour || 0, dateInfo.minute || 0, dateInfo.second || 0, dateInfo.millisecond || 0));
      } else {
        date = this.getDateFromParts({
          year: dateInfo.year || today.getFullYear(),
          month: (dateInfo.month || 0) + 1,
          day: dateInfo.day || 1,
          hours: dateInfo.hour || 0,
          minutes: dateInfo.minute || 0,
          seconds: dateInfo.second || 0,
          milliseconds: dateInfo.millisecond || 0
        });
      }
      return date;
    }).find((d) => d) || new Date(dateString);
  }
  normalizeMasks(masks2) {
    return (arrayHasItems(masks2) && masks2 || [
      isString_1(masks2) && masks2 || "YYYY-MM-DD"
    ]).map((m) => maskMacros.reduce((prev, curr) => prev.replace(curr, this.masks[curr] || ""), m));
  }
  normalizeDate(d, config = {}) {
    let result = null;
    let { type, fillDate } = config;
    const { mask, patch, time } = config;
    const auto = type === "auto" || !type;
    if (isNumber_1(d)) {
      type = "number";
      result = new Date(+d);
    } else if (isString_1(d)) {
      type = "string";
      result = d ? this.parse(d, mask || "iso") : null;
    } else if (isObject(d)) {
      type = "object";
      result = this.getDateFromParts(d);
    } else {
      type = "date";
      result = isDate(d) ? new Date(d.getTime()) : null;
    }
    if (result && patch) {
      fillDate = fillDate == null ? new Date() : this.normalizeDate(fillDate);
      const parts = __spreadValues(__spreadValues({}, this.getDateParts(fillDate)), pick_1(this.getDateParts(result), PATCH_KEYS[patch]));
      result = this.getDateFromParts(parts);
    }
    if (auto)
      config.type = type;
    if (result && !isNaN(result.getTime())) {
      if (time) {
        result = this.adjustTimeForDate(result, {
          timeAdjust: time
        });
      }
      return result;
    }
    return null;
  }
  denormalizeDate(date, { type, mask } = {}) {
    switch (type) {
      case "number":
        return date ? date.getTime() : NaN;
      case "string":
        return date ? this.format(date, mask || "iso") : "";
      default:
        return date ? new Date(date) : null;
    }
  }
  hourIsValid(hour, validHours, dateParts) {
    if (!validHours)
      return true;
    if (isArrayLikeObject_1(validHours))
      return validHours.includes(hour);
    if (isObject(validHours)) {
      const min = validHours.min || 0;
      const max = validHours.max || 24;
      return min <= hour && max >= hour;
    }
    return validHours(hour, dateParts);
  }
  getHourOptions(validHours, dateParts) {
    return hourOptions.filter((opt) => this.hourIsValid(opt.value, validHours, dateParts));
  }
  getMinuteOptions(minuteIncrement) {
    const options = [];
    minuteIncrement = minuteIncrement > 0 ? minuteIncrement : 1;
    for (let i = 0; i <= 59; i += minuteIncrement) {
      options.push({
        value: i,
        label: pad(i, 2)
      });
    }
    return options;
  }
  nearestOptionValue(value, options) {
    if (value == null)
      return value;
    const result = options.reduce((prev, opt) => {
      if (opt.disabled)
        return prev;
      if (isNaN(prev))
        return opt.value;
      const diffPrev = Math.abs(prev - value);
      const diffCurr = Math.abs(opt.value - value);
      return diffCurr < diffPrev ? opt.value : prev;
    }, NaN);
    return isNaN(result) ? value : result;
  }
  adjustTimeForDate(date, { timeAdjust, validHours, minuteIncrement }) {
    if (!timeAdjust && !validHours && !minuteIncrement)
      return date;
    const dateParts = this.getDateParts(date);
    if (timeAdjust) {
      if (timeAdjust === "now") {
        const timeParts = this.getDateParts(new Date());
        dateParts.hours = timeParts.hours;
        dateParts.minutes = timeParts.minutes;
        dateParts.seconds = timeParts.seconds;
        dateParts.milliseconds = timeParts.milliseconds;
      } else {
        const d = new Date(`2000-01-01T${timeAdjust}Z`);
        dateParts.hours = d.getUTCHours();
        dateParts.minutes = d.getUTCMinutes();
        dateParts.seconds = d.getUTCSeconds();
        dateParts.milliseconds = d.getUTCMilliseconds();
      }
    }
    if (validHours) {
      const options = this.getHourOptions(validHours, dateParts);
      dateParts.hours = this.nearestOptionValue(dateParts.hours, options);
    }
    if (minuteIncrement) {
      const options = this.getMinuteOptions(minuteIncrement);
      dateParts.minutes = this.nearestOptionValue(dateParts.minutes, options);
    }
    date = this.getDateFromParts(dateParts);
    return date;
  }
  normalizeDates(dates, opts) {
    opts = opts || {};
    opts.locale = this;
    return (isArrayLikeObject_1(dates) ? dates : [dates]).map((d) => d && (d instanceof DateInfo ? d : new DateInfo(d, opts))).filter((d) => d);
  }
  getDateParts(date, timezone = this.timezone) {
    if (!date)
      return null;
    let tzDate = date;
    if (timezone) {
      const normDate = new Date(date.toLocaleString("en-US", { timeZone: timezone }));
      normDate.setMilliseconds(date.getMilliseconds());
      const diff = normDate.getTime() - date.getTime();
      tzDate = new Date(date.getTime() + diff);
    }
    const milliseconds = tzDate.getMilliseconds();
    const seconds = tzDate.getSeconds();
    const minutes = tzDate.getMinutes();
    const hours = tzDate.getHours();
    const month = tzDate.getMonth() + 1;
    const year = tzDate.getFullYear();
    const comps = this.getMonthComps(month, year);
    const day = tzDate.getDate();
    const dayFromEnd = comps.days - day + 1;
    const weekday = tzDate.getDay() + 1;
    const weekdayOrdinal = Math.floor((day - 1) / 7 + 1);
    const weekdayOrdinalFromEnd = Math.floor((comps.days - day) / 7 + 1);
    const week = Math.ceil((day + Math.abs(comps.firstWeekday - comps.firstDayOfWeek)) / 7);
    const weekFromEnd = comps.weeks - week + 1;
    const parts = {
      milliseconds,
      seconds,
      minutes,
      hours,
      day,
      dayFromEnd,
      weekday,
      weekdayOrdinal,
      weekdayOrdinalFromEnd,
      week,
      weekFromEnd,
      month,
      year,
      date,
      isValid: true
    };
    parts.timezoneOffset = this.getTimezoneOffset(parts);
    return parts;
  }
  getDateFromParts(parts) {
    if (!parts)
      return null;
    const d = new Date();
    const {
      year = d.getFullYear(),
      month = d.getMonth() + 1,
      day = d.getDate(),
      hours: hrs = 0,
      minutes: min = 0,
      seconds: sec = 0,
      milliseconds: ms = 0
    } = parts;
    if (this.timezone) {
      const dateString = `${pad(year, 4)}-${pad(month, 2)}-${pad(day, 2)}T${pad(hrs, 2)}:${pad(min, 2)}:${pad(sec, 2)}.${pad(ms, 3)}`;
      return toDate(dateString, { timeZone: this.timezone });
    }
    return new Date(year, month - 1, day, hrs, min, sec, ms);
  }
  getTimezoneOffset(parts) {
    const {
      year: y,
      month: m,
      day: d,
      hours: hrs = 0,
      minutes: min = 0,
      seconds: sec = 0,
      milliseconds: ms = 0
    } = parts;
    let date;
    const utcDate = new Date(Date.UTC(y, m - 1, d, hrs, min, sec, ms));
    if (this.timezone) {
      const dateString = `${pad(y, 4)}-${pad(m, 2)}-${pad(d, 2)}T${pad(hrs, 2)}:${pad(min, 2)}:${pad(sec, 2)}.${pad(ms, 3)}`;
      date = toDate(dateString, { timeZone: this.timezone });
    } else {
      date = new Date(y, m - 1, d, hrs, min, sec, ms);
    }
    return (date - utcDate) / 6e4;
  }
  toPage(arg, fromPage) {
    if (isNumber_1(arg)) {
      return addPages(fromPage, arg);
    }
    if (isString_1(arg)) {
      return this.getDateParts(this.normalizeDate(arg));
    }
    if (isDate(arg)) {
      return this.getDateParts(arg);
    }
    if (isObject(arg)) {
      return arg;
    }
    return null;
  }
  getMonthDates(year = 2e3) {
    const dates = [];
    for (let i = 0; i < 12; i++) {
      dates.push(new Date(year, i, 15));
    }
    return dates;
  }
  getMonthNames(length) {
    const dtf = new Intl.DateTimeFormat(this.id, {
      month: length,
      timezome: "UTC"
    });
    return this.getMonthDates().map((d) => dtf.format(d));
  }
  getWeekdayDates(firstDayOfWeek = this.firstDayOfWeek) {
    const dates = [];
    const year = 2020;
    const month = 1;
    const day = 5 + firstDayOfWeek - 1;
    for (let i = 0; i < daysInWeek; i++) {
      dates.push(this.getDateFromParts({
        year,
        month,
        day: day + i,
        hours: 12
      }));
    }
    return dates;
  }
  getDayNames(length) {
    const dtf = new Intl.DateTimeFormat(this.id, {
      weekday: length,
      timeZone: this.timezone
    });
    return this.getWeekdayDates(1).map((d) => dtf.format(d));
  }
  getMonthComps(month, year) {
    const key = `${month}-${year}`;
    let comps = this.monthData[key];
    if (!comps) {
      const inLeapYear = year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
      const firstDayOfMonth = new Date(year, month - 1, 1);
      const firstWeekday = firstDayOfMonth.getDay() + 1;
      const days = month === 2 && inLeapYear ? 29 : daysInMonths[month - 1];
      const weekStartsOn = this.firstDayOfWeek - 1;
      const weeks = getWeeksInMonth(firstDayOfMonth, {
        weekStartsOn
      });
      const weeknumbers = [];
      const isoWeeknumbers = [];
      for (let i = 0; i < weeks; i++) {
        const date = addDays(firstDayOfMonth, i * 7);
        weeknumbers.push(getWeek(date, { weekStartsOn }));
        isoWeeknumbers.push(getISOWeek(date));
      }
      comps = {
        firstDayOfWeek: this.firstDayOfWeek,
        inLeapYear,
        firstWeekday,
        days,
        weeks,
        month,
        year,
        weeknumbers,
        isoWeeknumbers
      };
      this.monthData[key] = comps;
    }
    return comps;
  }
  getThisMonthComps() {
    const { month, year } = this.getDateParts(new Date());
    return this.getMonthComps(month, year);
  }
  getPrevMonthComps(month, year) {
    if (month === 1)
      return this.getMonthComps(12, year - 1);
    return this.getMonthComps(month - 1, year);
  }
  getNextMonthComps(month, year) {
    if (month === 12)
      return this.getMonthComps(1, year + 1);
    return this.getMonthComps(month + 1, year);
  }
  getDayId(date) {
    return this.format(date, "YYYY-MM-DD");
  }
  getCalendarDays({ weeks, monthComps, prevMonthComps, nextMonthComps }) {
    const days = [];
    const { firstDayOfWeek, firstWeekday, isoWeeknumbers, weeknumbers } = monthComps;
    const prevMonthDaysToShow = firstWeekday + (firstWeekday < firstDayOfWeek ? daysInWeek : 0) - firstDayOfWeek;
    let prevMonth = true;
    let thisMonth = false;
    let nextMonth = false;
    const formatter = new Intl.DateTimeFormat(this.id, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    });
    let day = prevMonthComps.days - prevMonthDaysToShow + 1;
    let dayFromEnd = prevMonthComps.days - day + 1;
    let weekdayOrdinal = Math.floor((day - 1) / daysInWeek + 1);
    let weekdayOrdinalFromEnd = 1;
    let week = prevMonthComps.weeks;
    let weekFromEnd = 1;
    let month = prevMonthComps.month;
    let year = prevMonthComps.year;
    const today = new Date();
    const todayDay = today.getDate();
    const todayMonth = today.getMonth() + 1;
    const todayYear = today.getFullYear();
    const dft = (y, m, d) => (hours, minutes, seconds, milliseconds) => this.normalizeDate({
      year: y,
      month: m,
      day: d,
      hours,
      minutes,
      seconds,
      milliseconds
    });
    for (let w = 1; w <= weeks; w++) {
      for (let i = 1, weekday = firstDayOfWeek; i <= daysInWeek; i++, weekday += weekday === daysInWeek ? 1 - daysInWeek : 1) {
        if (prevMonth && weekday === firstWeekday) {
          day = 1;
          dayFromEnd = monthComps.days;
          weekdayOrdinal = Math.floor((day - 1) / daysInWeek + 1);
          weekdayOrdinalFromEnd = Math.floor((monthComps.days - day) / daysInWeek + 1);
          week = 1;
          weekFromEnd = monthComps.weeks;
          month = monthComps.month;
          year = monthComps.year;
          prevMonth = false;
          thisMonth = true;
        }
        const dateFromTime = dft(year, month, day);
        const range = {
          start: dateFromTime(0, 0, 0),
          end: dateFromTime(23, 59, 59, 999)
        };
        const date = range.start;
        const id = `${pad(year, 4)}-${pad(month, 2)}-${pad(day, 2)}`;
        const weekdayPosition = i;
        const weekdayPositionFromEnd = daysInWeek - i;
        const weeknumber = weeknumbers[w - 1];
        const isoWeeknumber = isoWeeknumbers[w - 1];
        const isToday = day === todayDay && month === todayMonth && year === todayYear;
        const isFirstDay = thisMonth && day === 1;
        const isLastDay = thisMonth && day === monthComps.days;
        const onTop = w === 1;
        const onBottom = w === weeks;
        const onLeft = i === 1;
        const onRight = i === daysInWeek;
        days.push({
          id,
          label: day.toString(),
          ariaLabel: formatter.format(new Date(year, month - 1, day)),
          day,
          dayFromEnd,
          weekday,
          weekdayPosition,
          weekdayPositionFromEnd,
          weekdayOrdinal,
          weekdayOrdinalFromEnd,
          week,
          weekFromEnd,
          weeknumber,
          isoWeeknumber,
          month,
          year,
          dateFromTime,
          date,
          range,
          isToday,
          isFirstDay,
          isLastDay,
          inMonth: thisMonth,
          inPrevMonth: prevMonth,
          inNextMonth: nextMonth,
          onTop,
          onBottom,
          onLeft,
          onRight,
          classes: [
            `id-${id}`,
            `day-${day}`,
            `day-from-end-${dayFromEnd}`,
            `weekday-${weekday}`,
            `weekday-position-${weekdayPosition}`,
            `weekday-ordinal-${weekdayOrdinal}`,
            `weekday-ordinal-from-end-${weekdayOrdinalFromEnd}`,
            `week-${week}`,
            `week-from-end-${weekFromEnd}`,
            {
              "is-today": isToday,
              "is-first-day": isFirstDay,
              "is-last-day": isLastDay,
              "in-month": thisMonth,
              "in-prev-month": prevMonth,
              "in-next-month": nextMonth,
              "on-top": onTop,
              "on-bottom": onBottom,
              "on-left": onLeft,
              "on-right": onRight
            }
          ]
        });
        if (thisMonth && isLastDay) {
          thisMonth = false;
          nextMonth = true;
          day = 1;
          dayFromEnd = nextMonthComps.days;
          weekdayOrdinal = 1;
          weekdayOrdinalFromEnd = Math.floor((nextMonthComps.days - day) / daysInWeek + 1);
          week = 1;
          weekFromEnd = nextMonthComps.weeks;
          month = nextMonthComps.month;
          year = nextMonthComps.year;
        } else {
          day++;
          dayFromEnd--;
          weekdayOrdinal = Math.floor((day - 1) / daysInWeek + 1);
          weekdayOrdinalFromEnd = Math.floor((monthComps.days - day) / daysInWeek + 1);
        }
      }
      week++;
      weekFromEnd--;
    }
    return days;
  }
}
class Attribute {
  constructor({
    key,
    hashcode,
    highlight,
    content,
    dot,
    bar,
    popover,
    dates,
    excludeDates,
    excludeMode,
    customData,
    order,
    pinPage
  }, theme, locale) {
    this.key = isUndefined_1(key) ? createGuid() : key;
    this.hashcode = hashcode;
    this.customData = customData;
    this.order = order || 0;
    this.dateOpts = { order, locale };
    this.pinPage = pinPage;
    if (highlight) {
      this.highlight = theme.normalizeHighlight(highlight);
    }
    if (content) {
      this.content = theme.normalizeContent(content);
    }
    if (dot) {
      this.dot = theme.normalizeDot(dot);
    }
    if (bar) {
      this.bar = theme.normalizeBar(bar);
    }
    if (popover) {
      this.popover = popover;
    }
    this.dates = locale.normalizeDates(dates, this.dateOpts);
    this.hasDates = !!arrayHasItems(this.dates);
    this.excludeDates = locale.normalizeDates(excludeDates, this.dateOpts);
    this.hasExcludeDates = !!arrayHasItems(this.excludeDates);
    this.excludeMode = excludeMode || "intersects";
    if (this.hasExcludeDates && !this.hasDates) {
      this.dates.push(new DateInfo({}, this.dateOpts));
      this.hasDates = true;
    }
    this.isComplex = some(this.dates, (d) => d.isComplex);
  }
  intersectsDate(date) {
    date = date instanceof DateInfo ? date : new DateInfo(date, this.dateOpts);
    return !this.excludesDate(date) && (this.dates.find((d) => d.intersectsDate(date)) || false);
  }
  includesDate(date) {
    date = date instanceof DateInfo ? date : new DateInfo(date, this.dateOpts);
    return !this.excludesDate(date) && (this.dates.find((d) => d.includesDate(date)) || false);
  }
  excludesDate(date) {
    date = date instanceof DateInfo ? date : new DateInfo(date, this.dateOpts);
    return this.hasExcludeDates && this.excludeDates.find((ed) => this.excludeMode === "intersects" && ed.intersectsDate(date) || this.excludeMode === "includes" && ed.includesDate(date));
  }
  intersectsDay(day) {
    return !this.excludesDay(day) && (this.dates.find((d) => d.intersectsDay(day)) || false);
  }
  excludesDay(day) {
    return this.hasExcludeDates && this.excludeDates.find((ed) => ed.intersectsDay(day));
  }
}
const maxSwipeTime = 300;
const minHorizontalSwipeDistance = 60;
const maxVerticalSwipeDistance = 80;
var touch = {
  maxSwipeTime,
  minHorizontalSwipeDistance,
  maxVerticalSwipeDistance
};
const title = "MMMM YYYY";
const weekdays = "W";
const navMonths = "MMM";
const input = [
  "L",
  "YYYY-MM-DD",
  "YYYY/MM/DD"
];
const inputDateTime = [
  "L h:mm A",
  "YYYY-MM-DD h:mm A",
  "YYYY/MM/DD h:mm A"
];
const inputDateTime24hr = [
  "L HH:mm",
  "YYYY-MM-DD HH:mm",
  "YYYY/MM/DD HH:mm"
];
const inputTime = [
  "h:mm A"
];
const inputTime24hr = [
  "HH:mm"
];
const dayPopover = "WWW, MMM D, YYYY";
const data = [
  "L",
  "YYYY-MM-DD",
  "YYYY/MM/DD"
];
const model = "iso";
const iso = "YYYY-MM-DDTHH:mm:ss.SSSZ";
var masks = {
  title,
  weekdays,
  navMonths,
  input,
  inputDateTime,
  inputDateTime24hr,
  inputTime,
  inputTime24hr,
  dayPopover,
  data,
  model,
  iso
};
const sm = "640px";
const md = "768px";
const lg = "1024px";
const xl = "1280px";
var defaultScreens = {
  sm,
  md,
  lg,
  xl
};
const defaultConfig = {
  componentPrefix: "v",
  color: "blue",
  isDark: false,
  navVisibility: "click",
  titlePosition: "center",
  transition: "slide-h",
  touch,
  masks,
  screens: defaultScreens,
  locales,
  datePicker: {
    updateOnInput: true,
    inputDebounce: 1e3,
    popover: {
      visibility: "hover-focus",
      placement: "bottom-start",
      keepVisibleOnInput: false,
      isInteractive: true
    }
  }
};
const state = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)(defaultConfig);
const computedLocales = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
  return mapValues_1(state.locales, (v) => {
    v.masks = defaultsDeep_1(v.masks, state.masks);
    return v;
  });
});
const getDefault = (path) => {
  if (window && has(window.__vcalendar__, path)) {
    return get_1(window.__vcalendar__, path);
  }
  return get_1(state, path);
};
const setupDefaults = (app, userDefaults) => {
  app.config.globalProperties.$VCalendar = state;
  return Object.assign(state, defaultsDeep_1(userDefaults, state));
};
const rootMixin$1 = {
  props: {
    color: {
      type: String,
      default: () => getDefault("color")
    },
    isDark: {
      type: Boolean,
      default: () => getDefault("isDark")
    },
    firstDayOfWeek: Number,
    masks: Object,
    locale: [String, Object],
    timezone: String,
    minDate: null,
    maxDate: null,
    minDateExact: null,
    maxDateExact: null,
    disabledDates: null,
    availableDates: null,
    theme: null
  },
  computed: {
    $theme() {
      if (this.theme instanceof Theme)
        return this.theme;
      return new Theme({
        color: this.color,
        isDark: this.isDark
      });
    },
    $locale() {
      if (this.locale instanceof Locale)
        return this.locale;
      const config = isObject(this.locale) ? this.locale : {
        id: this.locale,
        firstDayOfWeek: this.firstDayOfWeek,
        masks: this.masks
      };
      return new Locale(config, {
        locales: computedLocales.value,
        timezone: this.timezone
      });
    },
    disabledDates_() {
      const dates = this.normalizeDates(this.disabledDates);
      const { minDate, minDateExact, maxDate, maxDateExact } = this;
      if (minDateExact || minDate) {
        const end = minDateExact ? this.normalizeDate(minDateExact) : this.normalizeDate(minDate, { time: "00:00:00" });
        dates.push({
          start: null,
          end: new Date(end.getTime() - 1e3)
        });
      }
      if (maxDateExact || maxDate) {
        const start = maxDateExact ? this.normalizeDate(maxDateExact) : this.normalizeDate(maxDate, { time: "23:59:59" });
        dates.push({
          start: new Date(start.getTime() + 1e3),
          end: null
        });
      }
      return dates;
    },
    availableDates_() {
      return this.normalizeDates(this.availableDates);
    },
    disabledAttribute() {
      return new Attribute({
        key: "disabled",
        dates: this.disabledDates_,
        excludeDates: this.availableDates_,
        excludeMode: "includes",
        order: 100
      }, this.$theme, this.$locale);
    }
  },
  methods: {
    formatDate(date, mask) {
      return this.$locale ? this.$locale.format(date, mask) : "";
    },
    parseDate(text, mask) {
      if (!this.$locale)
        return null;
      const value = this.$locale.parse(text, mask);
      return isDate(value) ? value : null;
    },
    normalizeDate(date, config) {
      return this.$locale ? this.$locale.normalizeDate(date, config) : date;
    },
    normalizeDates(dates) {
      return this.$locale.normalizeDates(dates, {
        isFullDay: true
      });
    },
    pageForDate(date) {
      return this.$locale.getDateParts(this.normalizeDate(date));
    },
    pageForThisMonth() {
      return this.pageForDate(new Date());
    }
  }
};
const slotMixin$1 = {
  methods: {
    safeSlot(name, args, def = null) {
      return isFunction_1(this.$slots[name]) ? this.$slots[name](args) : def;
    }
  }
};
const childMixin = childMixin$1;
const rootMixin = rootMixin$1;
const slotMixin = slotMixin$1;
const _sfc_main$8 = {
  name: "PopoverRow",
  mixins: [childMixin],
  props: {
    attribute: Object
  },
  computed: {
    indicator() {
      const { highlight, dot, bar, popover } = this.attribute;
      if (popover && popover.hideIndicator)
        return null;
      if (highlight) {
        const { color, isDark } = highlight.start;
        return {
          style: __spreadProps(__spreadValues({}, this.theme.bgAccentHigh({
            color,
            isDark: !isDark
          })), {
            width: "10px",
            height: "5px",
            borderRadius: "3px"
          })
        };
      }
      if (dot) {
        const { color, isDark } = dot.start;
        return {
          style: __spreadProps(__spreadValues({}, this.theme.bgAccentHigh({
            color,
            isDark: !isDark
          })), {
            width: "5px",
            height: "5px",
            borderRadius: "50%"
          })
        };
      }
      if (bar) {
        const { color, isDark } = bar.start;
        return {
          style: __spreadProps(__spreadValues({}, this.theme.bgAccentHigh({
            color,
            isDark: !isDark
          })), {
            width: "10px",
            height: "3px"
          })
        };
      }
      return null;
    }
  }
};
const _hoisted_1$4 = { class: "vc-day-popover-row" };
const _hoisted_2$4 = {
  key: 0,
  class: "vc-day-popover-row-indicator"
};
const _hoisted_3$3 = { class: "vc-day-popover-row-content" };
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1$4, [
    $options.indicator ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2$4, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($options.indicator.style),
        class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($options.indicator.class)
      }, null, 6)
    ])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", true),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3$3, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", {}, () => [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.attribute.popover ? $props.attribute.popover.label : "No content provided"), 1)
      ])
    ])
  ]);
}
var PopoverRow = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$4]]);
const _defSize = "26px";
const _defViewBox = "0 0 32 32";
const icons = {
  "left-arrow": {
    viewBox: "0 -1 16 34",
    path: "M11.196 10c0 0.143-0.071 0.304-0.179 0.411l-7.018 7.018 7.018 7.018c0.107 0.107 0.179 0.268 0.179 0.411s-0.071 0.304-0.179 0.411l-0.893 0.893c-0.107 0.107-0.268 0.179-0.411 0.179s-0.304-0.071-0.411-0.179l-8.321-8.321c-0.107-0.107-0.179-0.268-0.179-0.411s0.071-0.304 0.179-0.411l8.321-8.321c0.107-0.107 0.268-0.179 0.411-0.179s0.304 0.071 0.411 0.179l0.893 0.893c0.107 0.107 0.179 0.25 0.179 0.411z"
  },
  "right-arrow": {
    viewBox: "-5 -1 16 34",
    path: "M10.625 17.429c0 0.143-0.071 0.304-0.179 0.411l-8.321 8.321c-0.107 0.107-0.268 0.179-0.411 0.179s-0.304-0.071-0.411-0.179l-0.893-0.893c-0.107-0.107-0.179-0.25-0.179-0.411 0-0.143 0.071-0.304 0.179-0.411l7.018-7.018-7.018-7.018c-0.107-0.107-0.179-0.268-0.179-0.411s0.071-0.304 0.179-0.411l0.893-0.893c0.107-0.107 0.268-0.179 0.411-0.179s0.304 0.071 0.411 0.179l8.321 8.321c0.107 0.107 0.179 0.268 0.179 0.411z"
  }
};
const _sfc_main$7 = {
  props: ["name"],
  data() {
    return {
      width: _defSize,
      height: _defSize,
      viewBox: _defViewBox,
      path: "",
      isBaseline: false
    };
  },
  mounted() {
    this.updateIcon();
  },
  watch: {
    name() {
      this.updateIcon();
    }
  },
  methods: {
    updateIcon() {
      const icon = icons[this.name];
      if (icon) {
        this.width = icon.width || _defSize;
        this.height = icon.height || _defSize;
        this.viewBox = icon.viewBox;
        this.path = icon.path;
      }
    }
  }
};
const _hoisted_1$3 = ["width", "height", "viewBox"];
const _hoisted_2$3 = ["d"];
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", {
    class: "vc-svg-icon",
    width: $data.width,
    height: $data.height,
    viewBox: $data.viewBox
  }, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", { d: $data.path }, null, 8, _hoisted_2$3)
  ], 8, _hoisted_1$3);
}
var SvgIcon = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$3]]);
const _yearGroupCount = 12;
const _sfc_main$6 = {
  name: "CalendarNav",
  emits: ["input"],
  components: {
    SvgIcon
  },
  mixins: [childMixin],
  props: {
    value: { type: Object, default: () => ({ month: 0, year: 0 }) },
    validator: { type: Function, default: () => () => true }
  },
  data() {
    return {
      monthMode: true,
      yearIndex: 0,
      yearGroupIndex: 0,
      onSpaceOrEnter
    };
  },
  computed: {
    month() {
      return this.value ? this.value.month || 0 : 0;
    },
    year() {
      return this.value ? this.value.year || 0 : 0;
    },
    title() {
      return this.monthMode ? this.yearIndex : `${this.firstYear} - ${this.lastYear}`;
    },
    monthItems() {
      return this.getMonthItems(this.yearIndex);
    },
    yearItems() {
      return this.getYearItems(this.yearGroupIndex);
    },
    prevItemsEnabled() {
      return this.monthMode ? this.prevMonthItemsEnabled : this.prevYearItemsEnabled;
    },
    nextItemsEnabled() {
      return this.monthMode ? this.nextMonthItemsEnabled : this.nextYearItemsEnabled;
    },
    prevMonthItemsEnabled() {
      return this.getMonthItems(this.yearIndex - 1).some((i) => !i.isDisabled);
    },
    nextMonthItemsEnabled() {
      return this.getMonthItems(this.yearIndex + 1).some((i) => !i.isDisabled);
    },
    prevYearItemsEnabled() {
      return this.getYearItems(this.yearGroupIndex - 1).some((i) => !i.isDisabled);
    },
    nextYearItemsEnabled() {
      return this.getYearItems(this.yearGroupIndex + 1).some((i) => !i.isDisabled);
    },
    activeItems() {
      return this.monthMode ? this.monthItems : this.yearItems;
    },
    firstYear() {
      return head_1(this.yearItems.map((i) => i.year));
    },
    lastYear() {
      return last_1(this.yearItems.map((i) => i.year));
    }
  },
  watch: {
    year() {
      this.yearIndex = this.year;
    },
    yearIndex(val) {
      this.yearGroupIndex = this.getYearGroupIndex(val);
    },
    value() {
      this.focusFirstItem();
    }
  },
  created() {
    this.yearIndex = this.year;
  },
  mounted() {
    this.focusFirstItem();
  },
  methods: {
    focusFirstItem() {
      this.$nextTick(() => {
        const focusableEl = this.$refs.navContainer.querySelector(".vc-nav-item:not(.is-disabled)");
        if (focusableEl) {
          focusableEl.focus();
        }
      });
    },
    getItemClasses({ isActive, isCurrent, isDisabled }) {
      const classes = ["vc-nav-item"];
      if (isActive) {
        classes.push("is-active");
      } else if (isCurrent) {
        classes.push("is-current");
      }
      if (isDisabled) {
        classes.push("is-disabled");
      }
      return classes;
    },
    getYearGroupIndex(year) {
      return Math.floor(year / _yearGroupCount);
    },
    getMonthItems(year) {
      const { month: thisMonth, year: thisYear } = this.pageForDate(new Date());
      return this.locale.getMonthDates().map((d, i) => {
        const month = i + 1;
        return {
          month,
          year,
          id: `${year}.${pad(month, 2)}`,
          label: this.locale.format(d, this.masks.navMonths),
          ariaLabel: this.locale.format(d, "MMMM YYYY"),
          isActive: month === this.month && year === this.year,
          isCurrent: month === thisMonth && year === thisYear,
          isDisabled: !this.validator({ month, year }),
          click: () => this.monthClick(month, year)
        };
      });
    },
    getYearItems(yearGroupIndex) {
      const { _, year: thisYear } = this.pageForDate(new Date());
      const startYear = yearGroupIndex * _yearGroupCount;
      const endYear = startYear + _yearGroupCount;
      const items = [];
      for (let year = startYear; year < endYear; year += 1) {
        let enabled = false;
        for (let month = 1; month < 12; month++) {
          enabled = this.validator({ month, year });
          if (enabled)
            break;
        }
        items.push({
          year,
          id: year,
          label: year,
          ariaLabel: year,
          isActive: year === this.year,
          isCurrent: year === thisYear,
          isDisabled: !enabled,
          click: () => this.yearClick(year)
        });
      }
      return items;
    },
    monthClick(month, year) {
      if (this.validator({ month, year })) {
        this.$emit("input", { month, year });
      }
    },
    yearClick(year) {
      this.yearIndex = year;
      this.monthMode = true;
      this.focusFirstItem();
    },
    toggleMode() {
      this.monthMode = !this.monthMode;
    },
    movePrev() {
      if (!this.prevItemsEnabled)
        return;
      if (this.monthMode) {
        this.movePrevYear();
      }
      this.movePrevYearGroup();
    },
    moveNext() {
      if (!this.nextItemsEnabled)
        return;
      if (this.monthMode) {
        this.moveNextYear();
      }
      this.moveNextYearGroup();
    },
    movePrevYear() {
      this.yearIndex--;
    },
    moveNextYear() {
      this.yearIndex++;
    },
    movePrevYearGroup() {
      this.yearGroupIndex--;
    },
    moveNextYearGroup() {
      this.yearGroupIndex++;
    }
  }
};
const _hoisted_1$2 = {
  class: "vc-nav-container",
  ref: "navContainer"
};
const _hoisted_2$2 = { class: "vc-nav-header" };
const _hoisted_3$2 = ["tabindex"];
const _hoisted_4$2 = ["tabindex"];
const _hoisted_5$1 = { class: "vc-nav-items" };
const _hoisted_6$1 = ["data-id", "aria-label", "tabindex", "onClick", "onKeydown"];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_svg_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("svg-icon");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1$2, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2$2, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        role: "button",
        class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["vc-nav-arrow is-left", { "is-disabled": !$options.prevItemsEnabled }]),
        tabindex: $options.prevItemsEnabled ? 0 : void 0,
        onClick: _cache[0] || (_cache[0] = (...args) => $options.movePrev && $options.movePrev(...args)),
        onKeydown: _cache[1] || (_cache[1] = (e) => $data.onSpaceOrEnter(e, $options.movePrev))
      }, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "nav-left-button", {}, () => [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_svg_icon, {
            name: "left-arrow",
            width: "20px",
            height: "24px"
          })
        ])
      ], 42, _hoisted_3$2),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        role: "button",
        class: "vc-nav-title vc-grid-focus",
        style: { whiteSpace: "nowrap" },
        tabindex: "0",
        onClick: _cache[2] || (_cache[2] = (...args) => $options.toggleMode && $options.toggleMode(...args)),
        onKeydown: _cache[3] || (_cache[3] = (e) => $data.onSpaceOrEnter(e, $options.toggleMode))
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.title), 33),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        role: "button",
        class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["vc-nav-arrow is-right", { "is-disabled": !$options.nextItemsEnabled }]),
        tabindex: $options.nextItemsEnabled ? 0 : void 0,
        onClick: _cache[4] || (_cache[4] = (...args) => $options.moveNext && $options.moveNext(...args)),
        onKeydown: _cache[5] || (_cache[5] = (e) => $data.onSpaceOrEnter(e, $options.moveNext))
      }, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "nav-right-button", {}, () => [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_svg_icon, {
            name: "right-arrow",
            width: "20px",
            height: "24px"
          })
        ])
      ], 42, _hoisted_4$2)
    ]),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5$1, [
      ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.activeItems, (item) => {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
          key: item.label,
          role: "button",
          "data-id": item.id,
          "aria-label": item.ariaLabel,
          class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($options.getItemClasses(item)),
          tabindex: item.isDisabled ? void 0 : 0,
          onClick: item.click,
          onKeydown: (e) => $data.onSpaceOrEnter(e, item.click)
        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.label), 43, _hoisted_6$1);
      }), 128))
    ])
  ], 512);
}
var CalendarNav = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$2]]);
function showPopover(opts) {
  if (document) {
    document.dispatchEvent(new CustomEvent("show-popover", {
      detail: opts
    }));
  }
}
function hidePopover(opts) {
  if (document) {
    document.dispatchEvent(new CustomEvent("hide-popover", {
      detail: opts
    }));
  }
}
function togglePopover(opts) {
  if (document) {
    document.dispatchEvent(new CustomEvent("toggle-popover", {
      detail: opts
    }));
  }
}
function updatePopover(opts) {
  if (document) {
    document.dispatchEvent(new CustomEvent("update-popover", {
      detail: opts
    }));
  }
}
function getPopoverTriggerEvents(opts) {
  const { visibility } = opts;
  const click = visibility === "click";
  const hover = visibility === "hover";
  const hoverFocus = visibility === "hover-focus";
  const focus = visibility === "focus";
  opts.autoHide = !click;
  let hovered = false;
  let focused = false;
  const { isRenderFn } = opts;
  const events = {
    click: isRenderFn ? "onClick" : "click",
    mousemove: isRenderFn ? "onMousemove" : "mousemove",
    mouseleave: isRenderFn ? "onMouseleave" : "mouseleave",
    focusin: isRenderFn ? "onFocusin" : "focusin",
    focusout: isRenderFn ? "onFocusout" : "focusout"
  };
  return {
    [events.click](e) {
      if (click) {
        opts.ref = e.target;
        togglePopover(opts);
        e.stopPropagation();
      }
    },
    [events.mousemove](e) {
      opts.ref = e.currentTarget;
      if (!hovered) {
        hovered = true;
        if (hover || hoverFocus) {
          showPopover(opts);
        }
      }
    },
    [events.mouseleave](e) {
      opts.ref = e.target;
      if (hovered) {
        hovered = false;
        if (hover || hoverFocus && !focused) {
          hidePopover(opts);
        }
      }
    },
    [events.focusin](e) {
      opts.ref = e.currentTarget;
      if (!focused) {
        focused = true;
        if (focus || hoverFocus) {
          showPopover(opts);
        }
      }
    },
    [events.focusout](e) {
      opts.ref = e.currentTarget;
      if (focused && !elementContains(opts.ref, e.relatedTarget)) {
        focused = false;
        if (focus || hoverFocus && !hovered) {
          hidePopover(opts);
        }
      }
    }
  };
}
const _sfc_main$5 = {
  name: "CalendarDay",
  emits: [
    "dayclick",
    "daymouseenter",
    "daymouseleave",
    "dayfocusin",
    "dayfocusout",
    "daykeydown"
  ],
  mixins: [childMixin, slotMixin],
  inheritAttrs: false,
  render() {
    const backgroundsLayer = () => this.hasBackgrounds && (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: "vc-highlights vc-day-layer"
    }, this.backgrounds.map(({ key, wrapperClass, class: bgClass, style }) => (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      key,
      class: wrapperClass
    }, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
        class: bgClass,
        style
      })
    ])));
    const contentLayer = () => this.safeSlot("day-content", {
      day: this.day,
      attributes: this.day.attributes,
      attributesMap: this.day.attributesMap,
      dayProps: this.dayContentProps,
      dayEvents: this.dayContentEvents
    }) || (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("span", __spreadProps(__spreadValues(__spreadProps(__spreadValues({}, this.dayContentProps), {
      class: this.dayContentClass,
      style: this.dayContentStyle
    }), this.dayContentEvents), {
      ref: "content"
    }), [this.day.label]);
    const dotsLayer = () => this.hasDots && (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: "vc-day-layer vc-day-box-center-bottom"
    }, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
        class: "vc-dots"
      }, this.dots.map(({ key, class: bgClass, style }) => (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("span", {
        key,
        class: bgClass,
        style
      })))
    ]);
    const barsLayer = () => this.hasBars && (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: "vc-day-layer vc-day-box-center-bottom"
    }, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
        class: "vc-bars"
      }, this.bars.map(({ key, class: bgClass, style }) => (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("span", {
        key,
        class: bgClass,
        style
      })))
    ]);
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: [
        "vc-day",
        ...this.day.classes,
        { "vc-day-box-center-center": !this.$slots["day-content"] },
        { "is-not-in-month": !this.inMonth }
      ]
    }, [backgroundsLayer(), contentLayer(), dotsLayer(), barsLayer()]);
  },
  inject: ["sharedState"],
  props: {
    day: { type: Object, required: true }
  },
  data() {
    return {
      glyphs: {},
      dayContentEvents: {}
    };
  },
  computed: {
    label() {
      return this.day.label;
    },
    startTime() {
      return this.day.range.start.getTime();
    },
    endTime() {
      return this.day.range.end.getTime();
    },
    inMonth() {
      return this.day.inMonth;
    },
    isDisabled() {
      return this.day.isDisabled;
    },
    backgrounds() {
      return this.glyphs.backgrounds;
    },
    hasBackgrounds() {
      return !!arrayHasItems(this.backgrounds);
    },
    content() {
      return this.glyphs.content;
    },
    dots() {
      return this.glyphs.dots;
    },
    hasDots() {
      return !!arrayHasItems(this.dots);
    },
    bars() {
      return this.glyphs.bars;
    },
    hasBars() {
      return !!arrayHasItems(this.bars);
    },
    popovers() {
      return this.glyphs.popovers;
    },
    hasPopovers() {
      return !!arrayHasItems(this.popovers);
    },
    dayContentClass() {
      return [
        "vc-day-content vc-focusable",
        { "is-disabled": this.isDisabled },
        get_1(last_1(this.content), "class") || ""
      ];
    },
    dayContentStyle() {
      return get_1(last_1(this.content), "style");
    },
    dayContentProps() {
      let tabindex;
      if (this.day.isFocusable) {
        tabindex = "0";
      } else if (this.day.inMonth) {
        tabindex = "-1";
      }
      return {
        tabindex,
        "aria-label": this.day.ariaLabel,
        "aria-disabled": this.day.isDisabled ? "true" : "false",
        role: "button"
      };
    },
    dayEvent() {
      return __spreadProps(__spreadValues({}, this.day), {
        el: this.$refs.content,
        popovers: this.popovers
      });
    }
  },
  watch: {
    theme() {
      this.refresh();
    },
    popovers() {
      this.refreshPopovers();
    },
    "day.shouldRefresh"() {
      this.refresh();
    }
  },
  mounted() {
    this.refreshPopovers();
    this.refresh();
  },
  methods: {
    getDayEvent(origEvent) {
      return __spreadProps(__spreadValues({}, this.dayEvent), {
        event: origEvent
      });
    },
    click(e) {
      this.$emit("dayclick", this.getDayEvent(e));
    },
    mouseenter(e) {
      this.$emit("daymouseenter", this.getDayEvent(e));
    },
    mouseleave(e) {
      this.$emit("daymouseleave", this.getDayEvent(e));
    },
    focusin(e) {
      this.$emit("dayfocusin", this.getDayEvent(e));
    },
    focusout(e) {
      this.$emit("dayfocusout", this.getDayEvent(e));
    },
    keydown(e) {
      this.$emit("daykeydown", this.getDayEvent(e));
    },
    refresh() {
      if (!this.day.shouldRefresh)
        return;
      this.day.shouldRefresh = false;
      const glyphs = {
        backgrounds: [],
        dots: [],
        bars: [],
        popovers: [],
        content: []
      };
      this.day.attributes = Object.values(this.day.attributesMap || {}).sort((a, b) => a.order - b.order);
      this.day.attributes.forEach((attr) => {
        const { targetDate } = attr;
        const { isDate: isDate2, isComplex, startTime, endTime } = targetDate;
        const onStart = this.startTime <= startTime;
        const onEnd = this.endTime >= endTime;
        const onStartAndEnd = onStart && onEnd;
        const onStartOrEnd = onStart || onEnd;
        const dateInfo = {
          isDate: isDate2,
          isComplex,
          onStart,
          onEnd,
          onStartAndEnd,
          onStartOrEnd
        };
        this.processHighlight(attr, dateInfo, glyphs);
        this.processNonHighlight(attr, "content", dateInfo, glyphs.content);
        this.processNonHighlight(attr, "dot", dateInfo, glyphs.dots);
        this.processNonHighlight(attr, "bar", dateInfo, glyphs.bars);
        this.processPopover(attr, glyphs);
      });
      this.glyphs = glyphs;
    },
    processHighlight({ key, highlight }, { isDate: isDate2, isComplex, onStart, onEnd, onStartAndEnd }, { backgrounds, content }) {
      if (!highlight)
        return;
      const { base, start, end } = highlight;
      if (isDate2 || isComplex) {
        backgrounds.push({
          key,
          wrapperClass: "vc-day-layer vc-day-box-center-center",
          class: ["vc-highlight", start.class],
          style: start.style
        });
        content.push({
          key: `${key}-content`,
          class: start.contentClass,
          style: start.contentStyle
        });
      } else if (onStartAndEnd) {
        backgrounds.push({
          key,
          wrapperClass: "vc-day-layer vc-day-box-center-center",
          class: ["vc-highlight", start.class],
          style: start.style
        });
        content.push({
          key: `${key}-content`,
          class: start.contentClass,
          style: start.contentStyle
        });
      } else if (onStart) {
        backgrounds.push({
          key: `${key}-base`,
          wrapperClass: "vc-day-layer vc-day-box-right-center",
          class: ["vc-highlight vc-highlight-base-start", base.class],
          style: base.style
        });
        backgrounds.push({
          key,
          wrapperClass: "vc-day-layer vc-day-box-center-center",
          class: ["vc-highlight", start.class],
          style: start.style
        });
        content.push({
          key: `${key}-content`,
          class: start.contentClass,
          style: start.contentStyle
        });
      } else if (onEnd) {
        backgrounds.push({
          key: `${key}-base`,
          wrapperClass: "vc-day-layer vc-day-box-left-center",
          class: ["vc-highlight vc-highlight-base-end", base.class],
          style: base.style
        });
        backgrounds.push({
          key,
          wrapperClass: "vc-day-layer vc-day-box-center-center",
          class: ["vc-highlight", end.class],
          style: end.style
        });
        content.push({
          key: `${key}-content`,
          class: end.contentClass,
          style: end.contentStyle
        });
      } else {
        backgrounds.push({
          key: `${key}-middle`,
          wrapperClass: "vc-day-layer vc-day-box-center-center",
          class: ["vc-highlight vc-highlight-base-middle", base.class],
          style: base.style
        });
        content.push({
          key: `${key}-content`,
          class: base.contentClass,
          style: base.contentStyle
        });
      }
    },
    processNonHighlight(attr, itemKey, { isDate: isDate2, onStart, onEnd }, list) {
      if (!attr[itemKey])
        return;
      const { key } = attr;
      const className = `vc-${itemKey}`;
      const { base, start, end } = attr[itemKey];
      if (isDate2 || onStart) {
        list.push({
          key,
          class: [className, start.class],
          style: start.style
        });
      } else if (onEnd) {
        list.push({
          key,
          class: [className, end.class],
          style: end.style
        });
      } else {
        list.push({
          key,
          class: [className, base.class],
          style: base.style
        });
      }
    },
    processPopover(attribute, { popovers }) {
      const { key, customData, popover } = attribute;
      if (!popover)
        return;
      const resolvedPopover = defaults_1({
        key,
        customData,
        attribute
      }, __spreadValues({}, popover), {
        visibility: popover.label ? "hover" : "click",
        placement: "bottom",
        isInteractive: !popover.label
      });
      popovers.splice(0, 0, resolvedPopover);
    },
    refreshPopovers() {
      let popoverEvents = {};
      if (arrayHasItems(this.popovers)) {
        popoverEvents = getPopoverTriggerEvents(defaults_1({ id: this.dayPopoverId, data: this.day, isRenderFn: true }, ...this.popovers));
      }
      this.dayContentEvents = mergeEvents({
        onClick: this.click,
        onMouseenter: this.mouseenter,
        onMouseleave: this.mouseleave,
        onFocusin: this.focusin,
        onFocusout: this.focusout,
        onKeydown: this.keydown
      }, popoverEvents);
      updatePopover({
        id: this.dayPopoverId,
        data: this.day
      });
    }
  }
};
const _sfc_main$4 = {
  name: "CalendarPane",
  emits: ["update:page", "weeknumberclick"],
  mixins: [childMixin, slotMixin],
  inheritAttrs: false,
  render() {
    const header = this.safeSlot("header", this.page) || (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `vc-header align-${this.titlePosition}` }, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", __spreadValues({
        class: "vc-title"
      }, this.navPopoverEvents), [this.safeSlot("header-title", this.page, this.page.title)])
    ]);
    const weekdayCells = this.weekdayLabels.map((wl, i) => (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      key: i + 1,
      class: "vc-weekday"
    }, [wl]));
    const showWeeknumbersLeft = this.showWeeknumbers_.startsWith("left");
    const showWeeknumbersRight = this.showWeeknumbers_.startsWith("right");
    if (showWeeknumbersLeft) {
      weekdayCells.unshift((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
        class: "vc-weekday"
      }));
    } else if (showWeeknumbersRight) {
      weekdayCells.push((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
        class: "vc-weekday"
      }));
    }
    const getWeeknumberCell = (weeknumber) => (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: ["vc-weeknumber"]
    }, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("span", {
        class: ["vc-weeknumber-content", `is-${this.showWeeknumbers_}`],
        onClick: (event) => {
          this.$emit("weeknumberclick", {
            weeknumber,
            days: this.page.days.filter((d) => d[this.weeknumberKey] === weeknumber),
            event
          });
        }
      }, [weeknumber])
    ]);
    const dayCells = [];
    const { daysInWeek: daysInWeek2 } = this.locale;
    this.page.days.forEach((day, i) => {
      const mod = i % daysInWeek2;
      if (showWeeknumbersLeft && mod === 0 || showWeeknumbersRight && mod === daysInWeek2) {
        dayCells.push(getWeeknumberCell(day[this.weeknumberKey]));
      }
      dayCells.push((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_sfc_main$5, __spreadProps(__spreadValues({}, this.$attrs), {
        day
      }), this.$slots));
      if (showWeeknumbersRight && mod === daysInWeek2 - 1) {
        dayCells.push(getWeeknumberCell(day[this.weeknumberKey]));
      }
    });
    const weeks = (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: {
        "vc-weeks": true,
        "vc-show-weeknumbers": this.showWeeknumbers_,
        "is-left": showWeeknumbersLeft,
        "is-right": showWeeknumbersRight
      }
    }, [weekdayCells, dayCells]);
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: [
        "vc-pane",
        `row-from-end-${this.rowFromEnd}`,
        `column-from-end-${this.columnFromEnd}`
      ],
      ref: "pane"
    }, [header, weeks]);
  },
  props: {
    page: Object,
    position: Number,
    row: Number,
    rowFromEnd: Number,
    column: Number,
    columnFromEnd: Number,
    titlePosition: String,
    navVisibility: {
      type: String,
      default: () => getDefault("navVisibility")
    },
    showWeeknumbers: [Boolean, String],
    showIsoWeeknumbers: [Boolean, String]
  },
  computed: {
    weeknumberKey() {
      return this.showWeeknumbers ? "weeknumber" : "isoWeeknumber";
    },
    showWeeknumbers_() {
      const showWeeknumbers = this.showWeeknumbers || this.showIsoWeeknumbers;
      if (showWeeknumbers == null)
        return "";
      if (isBoolean_1(showWeeknumbers)) {
        return showWeeknumbers ? "left" : "";
      }
      if (showWeeknumbers.startsWith("right")) {
        return this.columnFromEnd > 1 ? "right" : showWeeknumbers;
      }
      return this.column > 1 ? "left" : showWeeknumbers;
    },
    navPlacement() {
      switch (this.titlePosition) {
        case "left":
          return "bottom-start";
        case "right":
          return "bottom-end";
        default:
          return "bottom";
      }
    },
    navPopoverEvents() {
      const { sharedState, navVisibility, navPlacement, page, position } = this;
      return getPopoverTriggerEvents({
        id: sharedState.navPopoverId,
        visibility: navVisibility,
        placement: navPlacement,
        modifiers: [
          { name: "flip", options: { fallbackPlacements: ["bottom"] } }
        ],
        data: { page, position },
        isInteractive: true,
        isRenderFn: true
      });
    },
    weekdayLabels() {
      return this.locale.getWeekdayDates().map((d) => this.format(d, this.masks.weekdays));
    }
  }
};
class AttributeStore {
  constructor(theme, locale, attrs) {
    this.theme = theme;
    this.locale = locale;
    this.map = {};
    this.refresh(attrs, true);
  }
  destroy() {
    this.theme = null;
    this.locale = null;
    this.map = {};
    this.list = [];
    this.pinAttr = null;
  }
  refresh(attrs, reset) {
    const map2 = {};
    const list = [];
    let pinAttr = null;
    const adds = [];
    const deletes = reset ? new Set() : new Set(Object.keys(this.map));
    if (arrayHasItems(attrs)) {
      attrs.forEach((attr, i) => {
        if (!attr || !attr.dates)
          return;
        const key = attr.key ? attr.key.toString() : i.toString();
        const order = attr.order || 0;
        const hashcode = hash(JSON.stringify(attr));
        let exAttr = this.map[key];
        if (!reset && exAttr && exAttr.hashcode === hashcode) {
          deletes.delete(key);
        } else {
          exAttr = new Attribute(__spreadValues({
            key,
            order,
            hashcode
          }, attr), this.theme, this.locale);
          adds.push(exAttr);
        }
        if (exAttr && exAttr.pinPage) {
          pinAttr = exAttr;
        }
        map2[key] = exAttr;
        list.push(exAttr);
      });
    }
    this.map = map2;
    this.list = list;
    this.pinAttr = pinAttr;
    return { adds, deletes: Array.from(deletes) };
  }
}
const addHorizontalSwipeHandler = (element, handler, { maxSwipeTime: maxSwipeTime2, minHorizontalSwipeDistance: minHorizontalSwipeDistance2, maxVerticalSwipeDistance: maxVerticalSwipeDistance2 }) => {
  if (!element || !element.addEventListener || !isFunction_1(handler)) {
    return null;
  }
  let startX = 0;
  let startY = 0;
  let startTime = null;
  let isSwiping = false;
  function touchStart(e) {
    const t = e.changedTouches[0];
    startX = t.screenX;
    startY = t.screenY;
    startTime = new Date().getTime();
    isSwiping = true;
  }
  function touchEnd(e) {
    if (!isSwiping)
      return;
    isSwiping = false;
    const t = e.changedTouches[0];
    const deltaX = t.screenX - startX;
    const deltaY = t.screenY - startY;
    const deltaTime = new Date().getTime() - startTime;
    if (deltaTime < maxSwipeTime2) {
      if (Math.abs(deltaX) >= minHorizontalSwipeDistance2 && Math.abs(deltaY) <= maxVerticalSwipeDistance2) {
        const arg = { toLeft: false, toRight: false };
        if (deltaX < 0) {
          arg.toLeft = true;
        } else {
          arg.toRight = true;
        }
        handler(arg);
      }
    }
  }
  on(element, "touchstart", touchStart, { passive: true });
  on(element, "touchend", touchEnd, { passive: true });
  return () => {
    off(element, "touchstart", touchStart);
    off(element, "touchend", touchEnd);
  };
};
const _sfc_main$3 = {
  name: "Calendar",
  emits: [
    "dayfocusin",
    "dayfocusout",
    "transition-start",
    "transition-end",
    "update:from-page",
    "update:to-page"
  ],
  render() {
    const panes = this.pages.map((page, i) => {
      const position = i + 1;
      const row = Math.ceil((i + 1) / this.columns);
      const rowFromEnd = this.rows - row + 1;
      const column = position % this.columns || this.columns;
      const columnFromEnd = this.columns - column + 1;
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_sfc_main$4, __spreadProps(__spreadValues({}, this.$attrs), {
        key: page.key,
        attributes: this.store,
        page,
        position,
        row,
        rowFromEnd,
        column,
        columnFromEnd,
        titlePosition: this.titlePosition,
        canMove: this.canMove,
        "onUpdate:page": (e) => this.move(e, { position: i + 1 }),
        onDayfocusin: (e) => {
          this.lastFocusedDay = e;
          this.$emit("dayfocusin", e);
        },
        onDayfocusout: (e) => {
          this.lastFocusedDay = null;
          this.$emit("dayfocusout", e);
        }
      }), this.$slots);
    });
    const getArrowButton = (isPrev) => {
      const click = () => this.move(isPrev ? -this.step_ : this.step_);
      const keydown = (e) => onSpaceOrEnter(e, click);
      const isDisabled = isPrev ? !this.canMovePrev : !this.canMoveNext;
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
        class: [
          "vc-arrow",
          `is-${isPrev ? "left" : "right"}`,
          { "is-disabled": isDisabled }
        ],
        role: "button",
        onClick: click,
        onKeydown: keydown
      }, [
        (isPrev ? this.safeSlot("header-left-button", { click }) : this.safeSlot("header-right-button", { click })) || (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(SvgIcon, {
          name: isPrev ? "left-arrow" : "right-arrow"
        })
      ]);
    };
    const getNavPopover = () => (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_sfc_main$9, {
      id: this.sharedState.navPopoverId,
      contentClass: "vc-nav-popover-container",
      ref: "navPopover"
    }, {
      default: ({ data: data2 }) => {
        const { position, page } = data2;
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(CalendarNav, {
          value: page,
          position,
          validator: (e) => this.canMove(e, { position }),
          onInput: (e) => this.move(e)
        }, __spreadValues({}, this.$slots));
      }
    });
    const getDayPopover = () => (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_sfc_main$9, {
      id: this.sharedState.dayPopoverId,
      contentClass: "vc-day-popover-container"
    }, {
      default: ({ data: day, updateLayout, hide }) => {
        const attributes = Object.values(day.attributes).filter((a) => a.popover);
        const masks2 = this.$locale.masks;
        const format = this.formatDate;
        const dayTitle = format(day.date, masks2.dayPopover);
        return this.safeSlot("day-popover", {
          day,
          attributes,
          masks: masks2,
          format,
          dayTitle,
          updateLayout,
          hide
        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", [
          masks2.dayPopover && (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
            class: ["vc-day-popover-header"]
          }, [dayTitle]),
          attributes.map((attribute) => (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(PopoverRow, {
            key: attribute.key,
            attribute
          }))
        ]));
      }
    });
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      "data-helptext": "Press the arrow keys to navigate by day, Home and End to navigate to week ends, PageUp and PageDown to navigate by month, Alt+PageUp and Alt+PageDown to navigate by year",
      class: [
        "vc-container",
        `vc-${this.$theme.color}`,
        {
          "vc-is-expanded": this.isExpanded,
          "vc-is-dark": this.$theme.isDark
        }
      ],
      onKeydown: this.handleKeydown,
      onMouseup: (e) => e.preventDefault(),
      ref: "container"
    }, [
      getNavPopover(),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
        class: [
          "vc-pane-container",
          { "in-transition": this.inTransition }
        ]
      }, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(CustomTransition, {
          name: this.transitionName,
          "on-before-enter": () => {
            this.inTransition = true;
          },
          "on-after-enter": () => {
            this.inTransition = false;
          }
        }, {
          default: () => (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", __spreadProps(__spreadValues({}, this.$attrs), {
            class: "vc-pane-layout",
            style: {
              gridTemplateColumns: `repeat(${this.columns}, 1fr)`
            },
            key: this.firstPage ? this.firstPage.key : ""
          }), panes)
        }),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
          class: [`vc-arrows-container title-${this.titlePosition}`]
        }, [getArrowButton(true), getArrowButton(false)]),
        this.$slots.footer && this.$slots.footer()
      ]),
      getDayPopover()
    ]);
  },
  mixins: [rootMixin, slotMixin],
  provide() {
    return {
      sharedState: this.sharedState
    };
  },
  props: {
    rows: {
      type: Number,
      default: 1
    },
    columns: {
      type: Number,
      default: 1
    },
    step: Number,
    titlePosition: {
      type: String,
      default: () => getDefault("titlePosition")
    },
    isExpanded: Boolean,
    fromDate: Date,
    toDate: Date,
    fromPage: Object,
    toPage: Object,
    minPage: Object,
    maxPage: Object,
    transition: String,
    attributes: [Object, Array],
    trimWeeks: Boolean,
    disablePageSwipe: Boolean
  },
  data() {
    return {
      pages: [],
      store: null,
      lastFocusedDay: null,
      focusableDay: new Date().getDate(),
      transitionName: "",
      inTransition: false,
      sharedState: {
        navPopoverId: createGuid(),
        dayPopoverId: createGuid(),
        theme: {},
        masks: {},
        locale: {}
      }
    };
  },
  computed: {
    firstPage() {
      return head_1(this.pages);
    },
    lastPage() {
      return last_1(this.pages);
    },
    minPage_() {
      return this.minPage || this.pageForDate(this.minDate);
    },
    maxPage_() {
      return this.maxPage || this.pageForDate(this.maxDate);
    },
    count() {
      return this.rows * this.columns;
    },
    step_() {
      return this.step || this.count;
    },
    canMovePrev() {
      return this.canMove(-this.step_);
    },
    canMoveNext() {
      return this.canMove(this.step_);
    }
  },
  watch: {
    $locale() {
      this.refreshLocale();
      this.refreshPages({ page: this.firstPage, ignoreCache: true });
      this.initStore();
    },
    $theme() {
      this.refreshTheme();
      this.initStore();
    },
    fromDate() {
      this.refreshPages();
    },
    fromPage(val) {
      const firstPage = this.pages && this.pages[0];
      if (pageIsEqualToPage(val, firstPage))
        return;
      this.refreshPages();
    },
    toPage(val) {
      const lastPage = this.pages && this.pages[this.pages.length - 1];
      if (pageIsEqualToPage(val, lastPage))
        return;
      this.refreshPages();
    },
    count() {
      this.refreshPages();
    },
    attributes: {
      handler(val) {
        const { adds, deletes } = this.store.refresh(val);
        this.refreshAttrs(this.pages, adds, deletes);
      },
      deep: true
    },
    pages(val) {
      this.refreshAttrs(val, this.store.list, null, true);
    },
    disabledAttribute() {
      this.refreshDisabledDays();
    },
    lastFocusedDay(val) {
      if (val) {
        this.focusableDay = val.day;
        this.refreshFocusableDays();
      }
    },
    inTransition(val) {
      if (val) {
        this.$emit("transition-start");
      } else {
        this.$emit("transition-end");
        if (this.transitionPromise) {
          this.transitionPromise.resolve(true);
          this.transitionPromise = null;
        }
      }
    }
  },
  created() {
    this.refreshLocale();
    this.refreshTheme();
    this.initStore();
    this.refreshPages();
  },
  mounted() {
    if (!this.disablePageSwipe) {
      this.removeHandlers = addHorizontalSwipeHandler(this.$refs.container, ({ toLeft, toRight }) => {
        if (toLeft) {
          this.moveNext();
        } else if (toRight) {
          this.movePrev();
        }
      }, getDefault("touch"));
    }
  },
  beforeUnmount() {
    this.pages = [];
    this.store.destroy();
    this.store = null;
    this.sharedState = null;
    if (this.removeHandlers)
      this.removeHandlers();
  },
  methods: {
    refreshLocale() {
      this.sharedState.locale = this.$locale;
      this.sharedState.masks = this.$locale.masks;
    },
    refreshTheme() {
      this.sharedState.theme = this.$theme;
    },
    canMove(arg, opts = {}) {
      const page = this.firstPage && this.$locale.toPage(arg, this.firstPage);
      if (!page)
        return false;
      let { position } = opts;
      if (isNumber_1(arg))
        position = 1;
      if (!position) {
        if (pageIsBeforePage(page, this.firstPage)) {
          position = -1;
        } else if (pageIsAfterPage(page, this.lastPage)) {
          position = 1;
        } else {
          return true;
        }
      }
      Object.assign(opts, this.getTargetPageRange(page, {
        position,
        force: true
      }));
      return pageRangeToArray(opts.fromPage, opts.toPage).some((p) => pageIsBetweenPages(p, this.minPage_, this.maxPage_));
    },
    movePrev(opts) {
      return this.move(-this.step_, opts);
    },
    moveNext(opts) {
      return this.move(this.step_, opts);
    },
    move(arg, opts = {}) {
      const canMove = this.canMove(arg, opts);
      if (!opts.force && !canMove) {
        return Promise.reject(new Error(`Move target is disabled: ${JSON.stringify(opts)}`));
      }
      this.$refs.navPopover.hide({ hideDelay: 0 });
      if (opts.fromPage && !pageIsEqualToPage(opts.fromPage, this.firstPage)) {
        return this.refreshPages(__spreadProps(__spreadValues({}, opts), {
          page: opts.fromPage,
          position: 1,
          force: true
        }));
      }
      return Promise.resolve(true);
    },
    focusDate(date, opts = {}) {
      return this.move(date, opts).then(() => {
        const focusableEl = this.$el.querySelector(`.id-${this.$locale.getDayId(date)}.in-month .vc-focusable`);
        if (focusableEl) {
          focusableEl.focus();
          return Promise.resolve(true);
        }
        return Promise.resolve(false);
      });
    },
    showPageRange(range, opts) {
      let fromPage;
      let toPage;
      if (isDate(range)) {
        fromPage = this.pageForDate(range);
      } else if (isObject(range)) {
        const { month, year } = range;
        const { from, to } = range;
        if (isNumber_1(month) && isNumber_1(year)) {
          fromPage = range;
        } else if (from || to) {
          fromPage = isDate(from) ? this.pageForDate(from) : from;
          toPage = isDate(to) ? this.pageForDate(to) : to;
        }
      } else {
        return Promise.reject(new Error("Invalid page range provided."));
      }
      const lastPage = this.lastPage;
      let page = fromPage;
      if (pageIsAfterPage(toPage, lastPage)) {
        page = addPages(toPage, -(this.pages.length - 1));
      }
      if (pageIsBeforePage(page, fromPage)) {
        page = fromPage;
      }
      return this.refreshPages(__spreadProps(__spreadValues({}, opts), { page }));
    },
    getTargetPageRange(page, { position, force } = {}) {
      let fromPage = null;
      let toPage = null;
      if (pageIsValid(page)) {
        let pagesToAdd = 0;
        position = +position;
        if (!isNaN(position)) {
          pagesToAdd = position > 0 ? 1 - position : -(this.count + position);
        }
        fromPage = addPages(page, pagesToAdd);
      } else {
        fromPage = this.getDefaultInitialPage();
      }
      toPage = addPages(fromPage, this.count - 1);
      if (!force) {
        if (pageIsBeforePage(fromPage, this.minPage_)) {
          fromPage = this.minPage_;
        } else if (pageIsAfterPage(toPage, this.maxPage_)) {
          fromPage = addPages(this.maxPage_, 1 - this.count);
        }
        toPage = addPages(fromPage, this.count - 1);
      }
      return { fromPage, toPage };
    },
    getDefaultInitialPage() {
      let page = this.fromPage || this.pageForDate(this.fromDate);
      if (!pageIsValid(page)) {
        const toPage = this.toPage || this.pageForDate(this.toPage);
        if (pageIsValid(toPage)) {
          page = addPages(toPage, 1 - this.count);
        }
      }
      if (!pageIsValid(page)) {
        page = this.getPageForAttributes();
      }
      if (!pageIsValid(page)) {
        page = this.pageForThisMonth();
      }
      return page;
    },
    refreshPages({ page, position = 1, force, transition, ignoreCache } = {}) {
      return new Promise((resolve, reject) => {
        const { fromPage, toPage } = this.getTargetPageRange(page, {
          position,
          force
        });
        const pages = [];
        for (let i = 0; i < this.count; i++) {
          pages.push(this.buildPage(addPages(fromPage, i), ignoreCache));
        }
        this.refreshDisabledDays(pages);
        this.refreshFocusableDays(pages);
        this.transitionName = this.getPageTransition(this.pages[0], pages[0], transition);
        this.pages = pages;
        this.$emit("update:from-page", fromPage);
        this.$emit("update:to-page", toPage);
        if (this.transitionName && this.transitionName !== "none") {
          this.transitionPromise = {
            resolve,
            reject
          };
        } else {
          resolve(true);
        }
      });
    },
    refreshDisabledDays(pages) {
      this.getPageDays(pages).forEach((d) => {
        d.isDisabled = !!this.disabledAttribute && this.disabledAttribute.intersectsDay(d);
      });
    },
    refreshFocusableDays(pages) {
      this.getPageDays(pages).forEach((d) => {
        d.isFocusable = d.inMonth && d.day === this.focusableDay;
      });
    },
    getPageDays(pages = this.pages) {
      return pages.reduce((prev, curr) => prev.concat(curr.days), []);
    },
    getPageTransition(oldPage, newPage, transition = this.transition) {
      if (transition === "none")
        return transition;
      if (transition === "fade" || !transition && this.count > 1 || !pageIsValid(oldPage) || !pageIsValid(newPage)) {
        return "fade";
      }
      const movePrev = pageIsBeforePage(newPage, oldPage);
      if (transition === "slide-v") {
        return movePrev ? "slide-down" : "slide-up";
      }
      return movePrev ? "slide-right" : "slide-left";
    },
    getPageForAttributes() {
      let page = null;
      const attr = this.store.pinAttr;
      if (attr && attr.hasDates) {
        let [date] = attr.dates;
        date = date.start || date.date;
        page = this.pageForDate(date);
      }
      return page;
    },
    buildPage({ month, year }, ignoreCache) {
      const key = `${year.toString()}-${month.toString()}`;
      let page = this.pages.find((p) => p.key === key);
      if (!page || ignoreCache) {
        const date = new Date(year, month - 1, 15);
        const monthComps = this.$locale.getMonthComps(month, year);
        const prevMonthComps = this.$locale.getPrevMonthComps(month, year);
        const nextMonthComps = this.$locale.getNextMonthComps(month, year);
        page = {
          key,
          month,
          year,
          weeks: this.trimWeeks ? monthComps.weeks : 6,
          title: this.$locale.format(date, this.$locale.masks.title),
          shortMonthLabel: this.$locale.format(date, "MMM"),
          monthLabel: this.$locale.format(date, "MMMM"),
          shortYearLabel: year.toString().substring(2),
          yearLabel: year.toString(),
          monthComps,
          prevMonthComps,
          nextMonthComps,
          canMove: (pg) => this.canMove(pg),
          move: (pg) => this.move(pg),
          moveThisMonth: () => this.moveThisMonth(),
          movePrevMonth: () => this.move(prevMonthComps),
          moveNextMonth: () => this.move(nextMonthComps),
          refresh: true
        };
        page.days = this.$locale.getCalendarDays(page);
      }
      return page;
    },
    initStore() {
      this.store = new AttributeStore(this.$theme, this.$locale, this.attributes);
      this.refreshAttrs(this.pages, this.store.list, [], true);
    },
    refreshAttrs(pages = [], adds = [], deletes = [], reset) {
      if (!arrayHasItems(pages))
        return;
      pages.forEach((p) => {
        p.days.forEach((d) => {
          let shouldRefresh = false;
          let map2 = {};
          if (reset) {
            shouldRefresh = true;
          } else if (hasAny(d.attributesMap, deletes)) {
            map2 = omit_1(d.attributesMap, deletes);
            shouldRefresh = true;
          } else {
            map2 = d.attributesMap || {};
          }
          adds.forEach((attr) => {
            const targetDate = attr.intersectsDay(d);
            if (targetDate) {
              const newAttr = __spreadProps(__spreadValues({}, attr), {
                targetDate
              });
              map2[attr.key] = newAttr;
              shouldRefresh = true;
            }
          });
          if (shouldRefresh) {
            d.attributesMap = map2;
            d.shouldRefresh = true;
          }
        });
      });
    },
    handleKeydown(e) {
      const day = this.lastFocusedDay;
      if (day != null) {
        day.event = e;
        this.handleDayKeydown(day);
      }
    },
    handleDayKeydown(day) {
      const { dateFromTime, event } = day;
      const date = dateFromTime(12);
      let newDate = null;
      switch (event.key) {
        case "ArrowLeft": {
          newDate = addDays(date, -1);
          break;
        }
        case "ArrowRight": {
          newDate = addDays(date, 1);
          break;
        }
        case "ArrowUp": {
          newDate = addDays(date, -7);
          break;
        }
        case "ArrowDown": {
          newDate = addDays(date, 7);
          break;
        }
        case "Home": {
          newDate = addDays(date, -day.weekdayPosition + 1);
          break;
        }
        case "End": {
          newDate = addDays(date, day.weekdayPositionFromEnd);
          break;
        }
        case "PageUp": {
          if (event.altKey) {
            newDate = addYears(date, -1);
          } else {
            newDate = addMonths(date, -1);
          }
          break;
        }
        case "PageDown": {
          if (event.altKey) {
            newDate = addYears(date, 1);
          } else {
            newDate = addMonths(date, 1);
          }
          break;
        }
      }
      if (newDate) {
        event.preventDefault();
        this.focusDate(newDate).catch();
      }
    }
  }
};
const _sfc_main$2 = {
  inheritAttrs: false,
  emits: ["update:modelValue"],
  props: {
    options: Array,
    modelValue: null
  }
};
const _hoisted_1$1 = { class: "vc-select" };
const _hoisted_2$1 = ["value"];
const _hoisted_3$1 = ["value", "disabled"];
const _hoisted_4$1 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", { class: "vc-select-arrow" }, [
  /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20"
  }, [
    /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", { d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" })
  ])
], -1);
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1$1, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)(_ctx.$attrs, {
      value: $props.modelValue,
      onChange: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("update:modelValue", $event.target.value))
    }), [
      ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.options, (option) => {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
          key: option.value,
          value: option.value,
          disabled: option.disabled
        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(option.label), 9, _hoisted_3$1);
      }), 128))
    ], 16, _hoisted_2$1),
    _hoisted_4$1
  ]);
}
var TimeSelect = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1]]);
const _amOptions = [
  { value: 0, label: "12" },
  { value: 1, label: "1" },
  { value: 2, label: "2" },
  { value: 3, label: "3" },
  { value: 4, label: "4" },
  { value: 5, label: "5" },
  { value: 6, label: "6" },
  { value: 7, label: "7" },
  { value: 8, label: "8" },
  { value: 9, label: "9" },
  { value: 10, label: "10" },
  { value: 11, label: "11" }
];
const _pmOptions = [
  { value: 12, label: "12" },
  { value: 13, label: "1" },
  { value: 14, label: "2" },
  { value: 15, label: "3" },
  { value: 16, label: "4" },
  { value: 17, label: "5" },
  { value: 18, label: "6" },
  { value: 19, label: "7" },
  { value: 20, label: "8" },
  { value: 21, label: "9" },
  { value: 22, label: "10" },
  { value: 23, label: "11" }
];
const _sfc_main$1 = {
  name: "TimePicker",
  components: { TimeSelect },
  emits: ["update:modelValue"],
  props: {
    modelValue: { type: Object, required: true },
    locale: { type: Object, required: true },
    theme: { type: Object, required: true },
    is24hr: { type: Boolean, default: true },
    showBorder: Boolean,
    hourOptions: Array,
    minuteOptions: Array
  },
  computed: {
    date() {
      let date = this.locale.normalizeDate(this.modelValue);
      if (this.modelValue.hours === 24) {
        date = new Date(date.getTime() - 1);
      }
      return date;
    },
    hours: {
      get() {
        return this.modelValue.hours;
      },
      set(value) {
        this.updateValue(value, this.minutes);
      }
    },
    minutes: {
      get() {
        return this.modelValue.minutes;
      },
      set(value) {
        this.updateValue(this.hours, value);
      }
    },
    isAM: {
      get() {
        return this.modelValue.hours < 12;
      },
      set(value) {
        let hours = this.hours;
        if (value && hours >= 12) {
          hours -= 12;
        } else if (!value && hours < 12) {
          hours += 12;
        }
        this.updateValue(hours, this.minutes);
      }
    },
    amHourOptions() {
      return _amOptions.filter((opt) => this.hourOptions.some((ho) => ho.value === opt.value));
    },
    pmHourOptions() {
      return _pmOptions.filter((opt) => this.hourOptions.some((ho) => ho.value === opt.value));
    },
    hourOptions_() {
      if (this.is24hr)
        return this.hourOptions;
      if (this.isAM)
        return this.amHourOptions;
      return this.pmHourOptions;
    },
    amDisabled() {
      return !arrayHasItems(this.amHourOptions);
    },
    pmDisabled() {
      return !arrayHasItems(this.pmHourOptions);
    }
  },
  methods: {
    updateValue(hours, minutes = this.minutes) {
      if (hours !== this.hours || minutes !== this.minutes) {
        this.$emit("update:modelValue", __spreadProps(__spreadValues({}, this.modelValue), {
          hours,
          minutes,
          seconds: 0,
          milliseconds: 0
        }));
      }
    }
  }
};
const _hoisted_1 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [
  /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
    fill: "none",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    viewBox: "0 0 24 24",
    class: "vc-time-icon",
    stroke: "currentColor"
  }, [
    /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" })
  ])
], -1);
const _hoisted_2 = { class: "vc-time-content" };
const _hoisted_3 = {
  key: 0,
  class: "vc-time-date"
};
const _hoisted_4 = { class: "vc-time-weekday" };
const _hoisted_5 = { class: "vc-time-month" };
const _hoisted_6 = { class: "vc-time-day" };
const _hoisted_7 = { class: "vc-time-year" };
const _hoisted_8 = { class: "vc-time-select" };
const _hoisted_9 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", { style: { "margin": "0 4px" } }, ":", -1);
const _hoisted_10 = {
  key: 0,
  class: "vc-am-pm"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_time_select = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("time-select");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["vc-time-picker", [{ "vc-invalid": !$props.modelValue.isValid, "vc-bordered": $props.showBorder }]])
  }, [
    _hoisted_1,
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
      $options.date ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.locale.format($options.date, "WWW")), 1),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.locale.format($options.date, "MMM")), 1),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.locale.format($options.date, "D")), 1),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.locale.format($options.date, "YYYY")), 1)
      ])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", true),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_time_select, {
          modelValue: $options.hours,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $options.hours = $event),
          modelModifiers: { number: true },
          options: $options.hourOptions_
        }, null, 8, ["modelValue", "options"]),
        _hoisted_9,
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_time_select, {
          modelValue: $options.minutes,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $options.minutes = $event),
          modelModifiers: { number: true },
          options: $props.minuteOptions
        }, null, 8, ["modelValue", "options"]),
        !$props.is24hr ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_10, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
            class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({ active: $options.isAM, "vc-disabled": $options.amDisabled }),
            onClick: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(($event) => $options.isAM = true, ["prevent"])),
            type: "button"
          }, " AM ", 2),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
            class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({ active: !$options.isAM, "vc-disabled": $options.pmDisabled }),
            onClick: _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(($event) => $options.isAM = false, ["prevent"])),
            type: "button"
          }, " PM ", 2)
        ])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", true)
      ])
    ])
  ], 2);
}
var TimePicker = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render]]);
const _baseConfig = {
  type: "auto",
  mask: "iso",
  timeAdjust: ""
};
const _config = [_baseConfig, _baseConfig];
const MODE = {
  DATE: "date",
  DATE_TIME: "datetime",
  TIME: "time"
};
const RANGE_PRIORITY = {
  NONE: 0,
  START: 1,
  END: 2,
  BOTH: 3
};
const _sfc_main = {
  name: "DatePicker",
  emits: [
    "update:modelValue",
    "drag",
    "dayclick",
    "daykeydown",
    "popover-will-show",
    "popover-did-show",
    "popover-will-hide",
    "popover-did-hide"
  ],
  render() {
    const footer = (wrap, wrapperEl) => {
      if (!this.$slots.footer)
        return wrap;
      const children = [wrap, this.$slots.footer()];
      return wrapperEl ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(wrapperEl, children) : children;
    };
    const timePicker = () => {
      if (!this.dateParts)
        return null;
      const parts = this.isRange ? this.dateParts : [this.dateParts[0]];
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", {}, __spreadProps(__spreadValues({}, this.$slots), {
        default: () => parts.map((dp, idx) => {
          const hourOptions2 = this.$locale.getHourOptions(this.modelConfig_[idx].validHours, dp);
          const minuteOptions = this.$locale.getMinuteOptions(this.modelConfig_[idx].minuteIncrement, dp);
          return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(TimePicker, {
            modelValue: dp,
            locale: this.$locale,
            theme: this.$theme,
            is24hr: this.is24hr,
            showBorder: !this.isTime,
            isDisabled: this.isDateTime && !dp.isValid || this.isDragging,
            hourOptions: hourOptions2,
            minuteOptions,
            "onUpdate:modelValue": (p) => this.onTimeInput(p, idx === 0)
          });
        })
      }));
    };
    const calendar = () => (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_sfc_main$3, __spreadProps(__spreadValues({}, this.$attrs), {
      attributes: this.attributes_,
      theme: this.$theme,
      locale: this.$locale,
      minDate: this.minDateExact || this.minDate,
      maxDate: this.maxDateExact || this.maxDate,
      disabledDates: this.disabledDates,
      availableDates: this.availableDates,
      onDayclick: this.onDayClick,
      onDaykeydown: this.onDayKeydown,
      onDaymouseenter: this.onDayMouseEnter,
      ref: "calendar"
    }), __spreadProps(__spreadValues({}, this.$slots), {
      footer: () => this.isDateTime ? footer(timePicker()) : footer()
    }));
    const content = () => {
      if (this.isTime) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
          class: [
            "vc-container",
            `vc-${this.$theme.color}`,
            { "vc-is-dark": this.$theme.isDark }
          ]
        }, footer(timePicker(), "div"));
      }
      return calendar();
    };
    return this.$slots.default ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", [
      this.$slots.default(this.slotArgs),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_sfc_main$9, {
        id: this.datePickerPopoverId,
        placement: "bottom-start",
        contentClass: `vc-container${this.isDark ? " vc-is-dark" : ""}`,
        "on-before-show": (e) => this.$emit("popover-will-show", e),
        "on-after-show": (e) => this.$emit("popover-did-show", e),
        "on-before-hide": (e) => this.$emit("popover-will-hide", e),
        "on-after-hide": (e) => this.$emit("popover-did-hide", e),
        ref: "popover"
      }, {
        default: content
      })
    ]) : content();
  },
  mixins: [rootMixin],
  props: {
    mode: { type: String, default: MODE.DATE },
    modelValue: { type: null, required: true },
    modelConfig: { type: Object, default: () => ({}) },
    is24hr: Boolean,
    minuteIncrement: Number,
    isRequired: Boolean,
    isRange: Boolean,
    updateOnInput: {
      type: Boolean,
      default: () => getDefault("datePicker.updateOnInput")
    },
    inputDebounce: {
      type: Number,
      default: () => getDefault("datePicker.inputDebounce")
    },
    popover: { type: Object, default: () => ({}) },
    dragAttribute: Object,
    selectAttribute: Object,
    attributes: Array,
    validHours: [Object, Array, Function]
  },
  data() {
    return {
      value_: null,
      dateParts: null,
      activeDate: "",
      dragValue: null,
      inputValues: ["", ""],
      updateTimeout: null,
      watchValue: true,
      datePickerPopoverId: createGuid()
    };
  },
  computed: {
    isDate() {
      return this.mode.toLowerCase() === MODE.DATE;
    },
    isDateTime() {
      return this.mode.toLowerCase() === MODE.DATE_TIME;
    },
    isTime() {
      return this.mode.toLowerCase() === MODE.TIME;
    },
    isDragging() {
      return !!this.dragValue;
    },
    modelConfig_() {
      return this.normalizeConfig(this.modelConfig, _config);
    },
    inputMask() {
      const masks2 = this.$locale.masks;
      if (this.isTime) {
        return this.is24hr ? masks2.inputTime24hr : masks2.inputTime;
      }
      if (this.isDateTime) {
        return this.is24hr ? masks2.inputDateTime24hr : masks2.inputDateTime;
      }
      return this.$locale.masks.input;
    },
    inputMaskHasTime() {
      return /[Hh]/g.test(this.inputMask);
    },
    inputMaskHasDate() {
      return /[dD]{1,2}|Do|W{1,4}|M{1,4}|YY(?:YY)?/g.test(this.inputMask);
    },
    inputMaskPatch() {
      if (this.inputMaskHasTime && this.inputMaskHasDate) {
        return PATCH.DATE_TIME;
      }
      if (this.inputMaskHasDate)
        return PATCH.DATE;
      if (this.inputMaskHasTime)
        return PATCH.TIME;
      return void 0;
    },
    slotArgs() {
      const {
        isRange,
        isDragging,
        updateValue,
        showPopover: showPopover2,
        hidePopover: hidePopover2,
        togglePopover: togglePopover2
      } = this;
      const inputValue = isRange ? {
        start: this.inputValues[0],
        end: this.inputValues[1]
      } : this.inputValues[0];
      const events = [true, false].map((isStart) => __spreadValues({
        input: this.onInputInput(isStart),
        change: this.onInputChange(isStart),
        keyup: this.onInputKeyup
      }, getPopoverTriggerEvents(__spreadProps(__spreadValues({}, this.popover_), {
        id: this.datePickerPopoverId,
        callback: (e) => {
          if (e.action === "show" && e.completed) {
            this.onInputShow(isStart);
          }
        }
      }))));
      const inputEvents = isRange ? {
        start: events[0],
        end: events[1]
      } : events[0];
      return {
        inputValue,
        inputEvents,
        isDragging,
        updateValue,
        showPopover: showPopover2,
        hidePopover: hidePopover2,
        togglePopover: togglePopover2,
        getPopoverTriggerEvents
      };
    },
    popover_() {
      return defaultsDeep_1(this.popover, getDefault("datePicker.popover"));
    },
    selectAttribute_() {
      if (!this.hasValue(this.value_))
        return null;
      const attribute = __spreadProps(__spreadValues({
        key: "select-drag"
      }, this.selectAttribute), {
        dates: this.value_,
        pinPage: true
      });
      const { dot, bar, highlight, content } = attribute;
      if (!dot && !bar && !highlight && !content) {
        attribute.highlight = true;
      }
      return attribute;
    },
    dragAttribute_() {
      if (!this.isRange || !this.hasValue(this.dragValue)) {
        return null;
      }
      const attribute = __spreadProps(__spreadValues({
        key: "select-drag"
      }, this.dragAttribute), {
        dates: this.dragValue
      });
      const { dot, bar, highlight, content } = attribute;
      if (!dot && !bar && !highlight && !content) {
        attribute.highlight = {
          startEnd: {
            fillMode: "outline"
          }
        };
      }
      return attribute;
    },
    attributes_() {
      const attrs = isArrayLikeObject_1(this.attributes) ? [...this.attributes] : [];
      if (this.dragAttribute_) {
        attrs.push(this.dragAttribute_);
      } else if (this.selectAttribute_) {
        attrs.push(this.selectAttribute_);
      }
      return attrs;
    }
  },
  watch: {
    inputMask() {
      this.formatInput();
    },
    modelValue(val) {
      if (!this.watchValue)
        return;
      this.forceUpdateValue(val, {
        config: this.modelConfig_,
        formatInput: true,
        hidePopover: false
      });
    },
    value_() {
      this.refreshDateParts();
    },
    dragValue() {
      this.refreshDateParts();
    },
    timezone() {
      this.refreshDateParts();
      this.forceUpdateValue(this.value_, { formatInput: true });
    }
  },
  created() {
    this.value_ = this.normalizeValue(this.modelValue, this.modelConfig_, PATCH.DATE_TIME, RANGE_PRIORITY.BOTH);
    this.forceUpdateValue(this.modelValue, {
      config: this.modelConfig_,
      formatInput: true,
      hidePopover: false
    });
    this.refreshDateParts();
  },
  mounted() {
    on(document, "keydown", this.onDocumentKeyDown);
    on(document, "click", this.onDocumentClick);
  },
  beforeUnmount() {
    off(document, "keydown", this.onDocumentKeyDown);
    off(document, "click", this.onDocumentClick);
  },
  methods: {
    getDateParts(date) {
      return this.$locale.getDateParts(date);
    },
    getDateFromParts(parts) {
      return this.$locale.getDateFromParts(parts);
    },
    refreshDateParts() {
      const value = this.dragValue || this.value_;
      const dateParts = [];
      if (this.isRange) {
        if (value && value.start) {
          dateParts.push(this.getDateParts(value.start));
        } else {
          dateParts.push({});
        }
        if (value && value.end) {
          dateParts.push(this.getDateParts(value.end));
        } else {
          dateParts.push({});
        }
      } else if (value) {
        dateParts.push(this.getDateParts(value));
      } else {
        dateParts.push({});
      }
      this.$nextTick(() => this.dateParts = dateParts);
    },
    onDocumentKeyDown(e) {
      if (this.dragValue && e.key === "Escape") {
        this.dragValue = null;
      }
    },
    onDocumentClick(e) {
      if (document.body.contains(e.target) && !elementContains(this.$el, e.target)) {
        this.dragValue = null;
        this.formatInput();
      }
    },
    onDayClick(day) {
      this.handleDayClick(day);
      this.$emit("dayclick", day);
    },
    onDayKeydown(day) {
      switch (day.event.key) {
        case " ":
        case "Enter": {
          this.handleDayClick(day);
          day.event.preventDefault();
          break;
        }
        case "Escape": {
          this.hidePopover();
        }
      }
      this.$emit("daykeydown", day);
    },
    handleDayClick(day) {
      const { keepVisibleOnInput, visibility } = this.popover_;
      const opts = {
        patch: PATCH.DATE,
        adjustTime: true,
        formatInput: true,
        hidePopover: this.isDate && !keepVisibleOnInput && visibility !== "visible"
      };
      if (this.isRange) {
        if (!this.isDragging) {
          this.dragTrackingValue = __spreadValues({}, day.range);
        } else {
          this.dragTrackingValue.end = day.date;
        }
        opts.isDragging = !this.isDragging;
        opts.rangePriority = opts.isDragging ? RANGE_PRIORITY.NONE : RANGE_PRIORITY.BOTH;
        opts.hidePopover = opts.hidePopover && !opts.isDragging;
        this.updateValue(this.dragTrackingValue, opts);
      } else {
        opts.clearIfEqual = !this.isRequired;
        this.updateValue(day.date, opts);
      }
    },
    onDayMouseEnter(day) {
      if (!this.isDragging)
        return;
      this.dragTrackingValue.end = day.date;
      this.updateValue(this.dragTrackingValue, {
        patch: PATCH.DATE,
        adjustTime: true,
        formatInput: true,
        hidePriority: false,
        rangePriority: RANGE_PRIORITY.NONE
      });
    },
    onTimeInput(parts, isStart) {
      let value = null;
      if (this.isRange) {
        const start = isStart ? parts : this.dateParts[0];
        const end = isStart ? this.dateParts[1] : parts;
        value = { start, end };
      } else {
        value = parts;
      }
      this.updateValue(value, {
        patch: PATCH.TIME,
        rangePriority: isStart ? RANGE_PRIORITY.START : RANGE_PRIORITY.END
      }).then(() => this.adjustPageRange(isStart));
    },
    onInputInput(isStart) {
      return (e) => {
        if (!this.updateOnInput)
          return;
        this.onInputUpdate(e.target.value, isStart, {
          formatInput: false,
          hidePopover: false,
          debounce: this.inputDebounce
        });
      };
    },
    onInputChange(isStart) {
      return (e) => {
        this.onInputUpdate(e.target.value, isStart, {
          formatInput: true,
          hidePopover: false
        });
      };
    },
    onInputUpdate(inputValue, isStart, opts) {
      this.inputValues.splice(isStart ? 0 : 1, 1, inputValue);
      const value = this.isRange ? {
        start: this.inputValues[0],
        end: this.inputValues[1] || this.inputValues[0]
      } : inputValue;
      const config = {
        type: "string",
        mask: this.inputMask
      };
      this.updateValue(value, __spreadProps(__spreadValues({}, opts), {
        config,
        patch: this.inputMaskPatch,
        rangePriority: isStart ? RANGE_PRIORITY.START : RANGE_PRIORITY.END
      })).then(() => this.adjustPageRange(isStart));
    },
    onInputShow(isStart) {
      this.adjustPageRange(isStart);
    },
    onInputKeyup(e) {
      if (e.key !== "Escape")
        return;
      this.updateValue(this.value_, {
        formatInput: true,
        hidePopover: true
      });
    },
    updateValue(value, opts = {}) {
      clearTimeout(this.updateTimeout);
      return new Promise((resolve) => {
        const _a = opts, { debounce } = _a, args = __objRest(_a, ["debounce"]);
        if (debounce > 0) {
          this.updateTimeout = setTimeout(() => {
            this.forceUpdateValue(value, args);
            resolve(this.value_);
          }, debounce);
        } else {
          this.forceUpdateValue(value, args);
          resolve(this.value_);
        }
      });
    },
    normalizeConfig(config, baseConfig = this.modelConfig_) {
      config = isArrayLikeObject_1(config) ? config : [config.start || config, config.end || config];
      return baseConfig.map((b, i) => __spreadValues(__spreadValues({
        validHours: this.validHours,
        minuteIncrement: this.minuteIncrement
      }, b), config[i]));
    },
    forceUpdateValue(value, {
      config = this.modelConfig_,
      patch = PATCH.DATE_TIME,
      clearIfEqual = false,
      formatInput = true,
      hidePopover: hidePopover2 = false,
      isDragging = this.isDragging,
      rangePriority = RANGE_PRIORITY.BOTH
    } = {}) {
      config = this.normalizeConfig(config);
      let normalizedValue = this.normalizeValue(value, config, patch, rangePriority);
      if (!normalizedValue && this.isRequired) {
        normalizedValue = this.value_;
      }
      normalizedValue = this.adjustTimeForValue(normalizedValue, config);
      const isDisabled = this.valueIsDisabled(normalizedValue);
      if (isDisabled) {
        if (isDragging)
          return;
        normalizedValue = this.value_;
        hidePopover2 = false;
      }
      const valueKey = isDragging ? "dragValue" : "value_";
      let valueChanged = !this.valuesAreEqual(this[valueKey], normalizedValue);
      if (!isDisabled && !valueChanged && clearIfEqual) {
        normalizedValue = null;
        valueChanged = true;
      }
      if (valueChanged) {
        this[valueKey] = normalizedValue;
        if (!isDragging)
          this.dragValue = null;
        const denormalizedValue = this.denormalizeValue(normalizedValue);
        const event = this.isDragging ? "drag" : "update:modelValue";
        this.watchValue = false;
        this.$emit(event, denormalizedValue);
        this.$nextTick(() => this.watchValue = true);
      }
      if (hidePopover2)
        this.hidePopover();
      if (formatInput)
        this.formatInput();
    },
    hasValue(value) {
      if (this.isRange) {
        return isObject(value) && !!value.start && !!value.end;
      }
      return !!value;
    },
    normalizeValue(value, config, patch, rangePriority) {
      if (!this.hasValue(value))
        return null;
      if (this.isRange) {
        const result = {};
        const start = value.start > value.end ? value.end : value.start;
        result.start = this.normalizeDate(start, __spreadProps(__spreadValues({}, config[0]), {
          fillDate: this.value_ && this.value_.start || config[0].fillDate,
          patch
        }));
        const end = value.start > value.end ? value.start : value.end;
        result.end = this.normalizeDate(end, __spreadProps(__spreadValues({}, config[1]), {
          fillDate: this.value_ && this.value_.end || config[1].fillDate,
          patch
        }));
        return this.sortRange(result, rangePriority);
      }
      return this.normalizeDate(value, __spreadProps(__spreadValues({}, config[0]), {
        fillDate: this.value_ || config[0].fillDate,
        patch
      }));
    },
    adjustTimeForValue(value, config) {
      if (!this.hasValue(value))
        return null;
      if (this.isRange) {
        return {
          start: this.$locale.adjustTimeForDate(value.start, config[0]),
          end: this.$locale.adjustTimeForDate(value.end, config[1])
        };
      }
      return this.$locale.adjustTimeForDate(value, config[0]);
    },
    sortRange(range, priority = RANGE_PRIORITY.NONE) {
      const { start, end } = range;
      if (start > end) {
        switch (priority) {
          case RANGE_PRIORITY.START:
            return { start, end: start };
          case RANGE_PRIORITY.END:
            return { start: end, end };
          case RANGE_PRIORITY.BOTH:
            return { start: end, end: start };
        }
      }
      return { start, end };
    },
    denormalizeValue(value, config = this.modelConfig_) {
      if (this.isRange) {
        if (!this.hasValue(value))
          return null;
        return {
          start: this.$locale.denormalizeDate(value.start, config[0]),
          end: this.$locale.denormalizeDate(value.end, config[1])
        };
      }
      return this.$locale.denormalizeDate(value, config[0]);
    },
    valuesAreEqual(a, b) {
      if (this.isRange) {
        const aHasValue = this.hasValue(a);
        const bHasValue = this.hasValue(b);
        if (!aHasValue && !bHasValue)
          return true;
        if (aHasValue !== bHasValue)
          return false;
        return datesAreEqual(a.start, b.start) && datesAreEqual(a.end, b.end);
      }
      return datesAreEqual(a, b);
    },
    valueIsDisabled(value) {
      return this.hasValue(value) && this.disabledAttribute && this.disabledAttribute.intersectsDate(value);
    },
    formatInput() {
      this.$nextTick(() => {
        const config = this.normalizeConfig({
          type: "string",
          mask: this.inputMask
        });
        const value = this.denormalizeValue(this.dragValue || this.value_, config);
        if (this.isRange) {
          this.inputValues = [value && value.start, value && value.end];
        } else {
          this.inputValues = [value, ""];
        }
      });
    },
    showPopover(opts = {}) {
      showPopover(__spreadProps(__spreadValues(__spreadValues({
        ref: this.$el
      }, this.popover_), opts), {
        isInteractive: true,
        id: this.datePickerPopoverId
      }));
    },
    hidePopover(opts = {}) {
      hidePopover(__spreadProps(__spreadValues(__spreadValues({
        hideDelay: 10
      }, this.showPopover_), opts), {
        id: this.datePickerPopoverId
      }));
    },
    togglePopover(opts) {
      togglePopover(__spreadProps(__spreadValues(__spreadValues({
        ref: this.$el
      }, this.popover_), opts), {
        isInteractive: true,
        id: this.datePickerPopoverId
      }));
    },
    adjustPageRange(isStart) {
      this.$nextTick(() => {
        const calendar = this.$refs.calendar;
        const page = this.getPageForValue(isStart);
        const position = isStart ? 1 : -1;
        if (page && calendar && !pageIsBetweenPages(page, calendar.firstPage, calendar.lastPage)) {
          calendar.move(page, {
            position,
            transition: "fade"
          });
        }
      });
    },
    getPageForValue(isStart) {
      if (this.hasValue(this.value_)) {
        return this.pageForDate(this.isRange ? this.value_[isStart ? "start" : "end"] : this.value_);
      }
      return null;
    },
    move(args, opts) {
      if (this.$refs.calendar) {
        return this.$refs.calendar.move(args, opts);
      }
      return Promise.reject(new Error("Navigation disabled while calendar is not yet displayed"));
    },
    focusDate(date, opts) {
      if (this.$refs.calendar) {
        return this.$refs.calendar.focusDate(date, opts);
      }
      return Promise.reject(new Error("Navigation disabled while calendar is not yet displayed"));
    }
  }
};
var components = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  Calendar: _sfc_main$3,
  DatePicker: _sfc_main,
  Popover: _sfc_main$9,
  PopoverRow
});
function buildMediaQuery(screens) {
  if (isString_1(screens)) {
    screens = { min: screens };
  }
  if (!isArrayLikeObject_1(screens)) {
    screens = [screens];
  }
  return screens.map((screen) => {
    if (has(screen, "raw")) {
      return screen.raw;
    }
    return map_1(screen, (value, feature) => {
      feature = get_1({
        min: "min-width",
        max: "max-width"
      }, feature, feature);
      return `(${feature}: ${value})`;
    }).join(" and ");
  }).join(", ");
}
var screensPlugin = {
  install: (app, screens) => {
    screens = defaultsDeep_1(screens, window && window.__screens__, defaultScreens);
    let shouldRefreshQueries = true;
    const state2 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      matches: [],
      queries: []
    });
    const refreshMatches = () => {
      state2.matches = toPairs_1(state2.queries).filter((p) => p[1].matches).map((p) => p[0]);
    };
    const refreshQueries = () => {
      if (!shouldRefreshQueries || !window || !window.matchMedia)
        return;
      state2.queries = mapValues_1(screens, (v) => {
        const query = window.matchMedia(buildMediaQuery(v));
        if (isFunction_1(query.addEventListener)) {
          query.addEventListener("change", refreshMatches);
        } else {
          query.addListener(refreshMatches);
        }
        return query;
      });
      shouldRefreshQueries = false;
      refreshMatches();
    };
    app.mixin({
      mounted() {
        refreshQueries();
      },
      computed: {
        $screens() {
          return (config, def) => state2.matches.reduce((prev, curr) => has(config, curr) ? config[curr] : prev, isUndefined_1(def) ? config.default : def);
        }
      }
    });
  }
};
var setup = (app, defaults2) => {
  const { screens } = setupDefaults(app, defaults2);
  app.use(screensPlugin, screens);
};
var main = "";
const install = (app, defaults2 = {}) => {
  app.use(setup, defaults2);
  const prefix = app.config.globalProperties.$VCalendar.componentPrefix;
  for (const componentKey in components) {
    const component = components[componentKey];
    app.component(`${prefix}${component.name}`, component);
  }
};
var index = { install };



/***/ }),

/***/ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/contains.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/contains.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contains)
/* harmony export */ });
function contains(parent, child) {
  // $FlowFixMe: hasOwnProperty doesn't seem to work in tests
  var isShadow = Boolean(child.getRootNode && child.getRootNode().host); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (isShadow) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}

/***/ }),

/***/ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getBorders.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getBorders.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getBorders)
/* harmony export */ });
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getComputedStyle.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");



function toNumber(cssValue) {
  return parseFloat(cssValue) || 0;
}

function getBorders(element) {
  var computedStyle = (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(element) ? (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element) : {};
  return {
    top: toNumber(computedStyle.borderTopWidth),
    right: toNumber(computedStyle.borderRightWidth),
    bottom: toNumber(computedStyle.borderBottomWidth),
    left: toNumber(computedStyle.borderLeftWidth)
  };
}

/***/ }),

/***/ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getBoundingClientRect)
/* harmony export */ });
function getBoundingClientRect(element) {
  var rect = element.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height,
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    left: rect.left,
    x: rect.left,
    y: rect.top
  };
}

/***/ }),

/***/ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getClippingRect)
/* harmony export */ });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _getViewportRect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getViewportRect.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js");
/* harmony import */ var _getDocumentRect_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getDocumentRect.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js");
/* harmony import */ var _listScrollParents_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./listScrollParents.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js");
/* harmony import */ var _getOffsetParent_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./getOffsetParent.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./getComputedStyle.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getBoundingClientRect.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _getDecorations_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./getDecorations.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getDecorations.js");
/* harmony import */ var _contains_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contains.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/contains.js");
/* harmony import */ var _utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/rectToClientRect.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/rectToClientRect.js");













function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === _enums_js__WEBPACK_IMPORTED_MODULE_0__.viewport ? (0,_utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_getViewportRect_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element)) : (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_3__.isHTMLElement)(clippingParent) ? (0,_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_4__["default"])(clippingParent) : (0,_utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_getDocumentRect_js__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_6__["default"])(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = (0,_listScrollParents_js__WEBPACK_IMPORTED_MODULE_7__["default"])(element);
  var canEscapeClipping = ['absolute', 'fixed'].indexOf((0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_8__["default"])(element).position) >= 0;
  var clipperElement = canEscapeClipping && (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_3__.isHTMLElement)(element) ? (0,_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_9__["default"])(element) : element;

  if (!(0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_3__.isElement)(clipperElement)) {
    return [];
  } // $FlowFixMe: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_3__.isElement)(clippingParent) && (0,_contains_js__WEBPACK_IMPORTED_MODULE_10__["default"])(clippingParent, clipperElement);
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    var decorations = (0,_getDecorations_js__WEBPACK_IMPORTED_MODULE_11__["default"])((0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_3__.isHTMLElement)(clippingParent) ? clippingParent : (0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_6__["default"])(element));
    accRect.top = Math.max(rect.top + decorations.top, accRect.top);
    accRect.right = Math.min(rect.right - decorations.right, accRect.right);
    accRect.bottom = Math.min(rect.bottom - decorations.bottom, accRect.bottom);
    accRect.left = Math.max(rect.left + decorations.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

/***/ }),

/***/ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getCompositeRect)
/* harmony export */ });
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getBoundingClientRect.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _getNodeScroll_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getNodeScroll.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getWindowScrollBarX.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _isScrollParent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isScrollParent.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js");






 // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.

function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var documentElement = (0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(offsetParent);
  var rect = (0,_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_1__["default"])(elementOrVirtualElement);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (!isFixed) {
    if ((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_2__["default"])(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    (0,_isScrollParent_js__WEBPACK_IMPORTED_MODULE_3__["default"])(documentElement)) {
      scroll = (0,_getNodeScroll_js__WEBPACK_IMPORTED_MODULE_4__["default"])(offsetParent);
    }

    if ((0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_5__.isHTMLElement)(offsetParent)) {
      offsets = (0,_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_1__["default"])(offsetParent);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = (0,_getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_6__["default"])(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

/***/ }),

/***/ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getComputedStyle)
/* harmony export */ });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getWindow.js");

function getComputedStyle(element) {
  return (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element).getComputedStyle(element);
}

/***/ }),

/***/ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getDecorations.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getDecorations.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getDecorations)
/* harmony export */ });
/* harmony import */ var _getBorders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getBorders.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getBorders.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getWindowScrollBarX.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js");



 // Borders + scrollbars

function getDecorations(element) {
  var win = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
  var borders = (0,_getBorders_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element);
  var isHTML = (0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element) === 'html';
  var winScrollBarX = (0,_getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_3__["default"])(element);
  var x = element.clientWidth + borders.right;
  var y = element.clientHeight + borders.bottom; // HACK:
  // document.documentElement.clientHeight on iOS reports the height of the
  // viewport including the bottom bar, even if the bottom bar isn't visible.
  // If the difference between window innerHeight and html clientHeight is more
  // than 50, we assume it's a mobile bottom bar and ignore scrollbars.
  // * A 50px thick scrollbar is likely non-existent (macOS is 15px and Windows
  //   is about 17px)
  // * The mobile bar is 114px tall

  if (isHTML && win.innerHeight - element.clientHeight > 50) {
    y = win.innerHeight - borders.bottom;
  }

  return {
    top: isHTML ? 0 : element.clientTop,
    right: // RTL scrollbar (scrolling containers only)
    element.clientLeft > borders.left ? borders.right : // LTR scrollbar
    isHTML ? win.innerWidth - x - winScrollBarX : element.offsetWidth - x,
    bottom: isHTML ? win.innerHeight - y : element.offsetHeight - y,
    left: isHTML ? winScrollBarX : element.clientLeft
  };
}

/***/ }),

/***/ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getDocumentElement)
/* harmony export */ });
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");

function getDocumentElement(element) {
  // $FlowFixMe: assume body is always available
  return ((0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isElement)(element) ? element.ownerDocument : element.document).documentElement;
}

/***/ }),

/***/ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getDocumentRect)
/* harmony export */ });
/* harmony import */ var _getCompositeRect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getCompositeRect.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js");
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWindowScroll.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js");




function getDocumentRect(element) {
  var win = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
  var winScroll = (0,_getWindowScroll_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element);
  var documentRect = (0,_getCompositeRect_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_3__["default"])(element), win);
  documentRect.height = Math.max(documentRect.height, win.innerHeight);
  documentRect.width = Math.max(documentRect.width, win.innerWidth);
  documentRect.x = -winScroll.scrollLeft;
  documentRect.y = -winScroll.scrollTop;
  return documentRect;
}

/***/ }),

/***/ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getHTMLElementScroll)
/* harmony export */ });
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

/***/ }),

/***/ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getLayoutRect)
/* harmony export */ });
// Returns the layout rect of an element relative to its offsetParent. Layout
// means it doesn't take into account transforms.
function getLayoutRect(element) {
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: element.offsetWidth,
    height: element.offsetHeight
  };
}

/***/ }),

/***/ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getNodeName.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getNodeName.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getNodeName)
/* harmony export */ });
function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}

/***/ }),

/***/ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getNodeScroll)
/* harmony export */ });
/* harmony import */ var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindowScroll.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js");
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _getHTMLElementScroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getHTMLElementScroll.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js");




function getNodeScroll(node) {
  if (node === (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node) || !(0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__.isHTMLElement)(node)) {
    return (0,_getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__["default"])(node);
  } else {
    return (0,_getHTMLElementScroll_js__WEBPACK_IMPORTED_MODULE_3__["default"])(node);
  }
}

/***/ }),

/***/ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getOffsetParent)
/* harmony export */ });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getComputedStyle.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _isTableElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isTableElement.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/isTableElement.js");






function getTrueOffsetParent(element) {
  if (!(0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(element) || // https://github.com/popperjs/popper-core/issues/837
  (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
}

function getOffsetParent(element) {
  var window = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element);
  var offsetParent = getTrueOffsetParent(element); // Find the nearest non-table offsetParent

  while (offsetParent && (0,_isTableElement_js__WEBPACK_IMPORTED_MODULE_3__["default"])(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && (0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_4__["default"])(offsetParent) === 'body' && (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(offsetParent).position === 'static') {
    return window;
  }

  return offsetParent || window;
}

/***/ }),

/***/ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getParentNode.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getParentNode.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getParentNode)
/* harmony export */ });
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");


function getParentNode(element) {
  if ((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element) === 'html') {
    return element;
  }

  return (// $FlowFixMe: this is a quicker (but less type safe) way to save quite some bytes from the bundle
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || // DOM Element detected
    // $FlowFixMe: need a better way to handle this...
    element.host || // ShadowRoot detected
    // $FlowFixMe: HTMLElement is a Node
    (0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element) // fallback

  );
}

/***/ }),

/***/ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getScrollParent)
/* harmony export */ });
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getParentNode.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");
/* harmony import */ var _isScrollParent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isScrollParent.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");




function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node)) >= 0) {
    // $FlowFixMe: assume body is always available
    return node.ownerDocument.body;
  }

  if ((0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__.isHTMLElement)(node) && (0,_isScrollParent_js__WEBPACK_IMPORTED_MODULE_2__["default"])(node)) {
    return node;
  }

  return getScrollParent((0,_getParentNode_js__WEBPACK_IMPORTED_MODULE_3__["default"])(node));
}

/***/ }),

/***/ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getViewportRect)
/* harmony export */ });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getWindow.js");

function getViewportRect(element) {
  var win = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
  var visualViewport = win.visualViewport;
  var width = win.innerWidth;
  var height = win.innerHeight; // We don't know which browsers have buggy or odd implementations of this, so
  // for now we're only applying it to iOS to fix the keyboard issue.
  // Investigation required

  if (visualViewport && /iPhone|iPod|iPad/.test(navigator.platform)) {
    width = visualViewport.width;
    height = visualViewport.height;
  }

  return {
    width: width,
    height: height,
    x: 0,
    y: 0
  };
}

/***/ }),

/***/ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getWindow.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getWindow.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getWindow)
/* harmony export */ });
/*:: import type { Window } from '../types'; */

/*:: declare function getWindow(node: Node | Window): Window; */
function getWindow(node) {
  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView : window;
  }

  return node;
}

/***/ }),

/***/ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getWindowScroll)
/* harmony export */ });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getWindow.js");

function getWindowScroll(node) {
  var win = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}

/***/ }),

/***/ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getWindowScrollBarX)
/* harmony export */ });
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBoundingClientRect.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindowScroll.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js");



function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return (0,_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element)).left + (0,_getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element).scrollLeft;
}

/***/ }),

/***/ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/instanceOf.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/instanceOf.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isElement": () => (/* binding */ isElement),
/* harmony export */   "isHTMLElement": () => (/* binding */ isHTMLElement)
/* harmony export */ });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getWindow.js");

/*:: declare function isElement(node: mixed): boolean %checks(node instanceof
  Element); */

function isElement(node) {
  var OwnElement = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
/*:: declare function isHTMLElement(node: mixed): boolean %checks(node instanceof
  HTMLElement); */


function isHTMLElement(node) {
  var OwnElement = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}



/***/ }),

/***/ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isScrollParent)
/* harmony export */ });
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getComputedStyle.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

/***/ }),

/***/ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/isTableElement.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/isTableElement.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isTableElement)
/* harmony export */ });
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element)) >= 0;
}

/***/ }),

/***/ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ listScrollParents)
/* harmony export */ });
/* harmony import */ var _getScrollParent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getScrollParent.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js");
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getParentNode.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _isScrollParent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isScrollParent.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js");





function listScrollParents(element, list) {
  if (list === void 0) {
    list = [];
  }

  var scrollParent = (0,_getScrollParent_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
  var isBody = (0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__["default"])(scrollParent) === 'body';
  var win = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_2__["default"])(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], (0,_isScrollParent_js__WEBPACK_IMPORTED_MODULE_3__["default"])(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents((0,_getParentNode_js__WEBPACK_IMPORTED_MODULE_4__["default"])(target)));
}

/***/ }),

/***/ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/enums.js":
/*!**************************************************************************!*\
  !*** ./node_modules/v-calendar/node_modules/@popperjs/core/lib/enums.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "afterMain": () => (/* binding */ afterMain),
/* harmony export */   "afterRead": () => (/* binding */ afterRead),
/* harmony export */   "afterWrite": () => (/* binding */ afterWrite),
/* harmony export */   "auto": () => (/* binding */ auto),
/* harmony export */   "basePlacements": () => (/* binding */ basePlacements),
/* harmony export */   "beforeMain": () => (/* binding */ beforeMain),
/* harmony export */   "beforeRead": () => (/* binding */ beforeRead),
/* harmony export */   "beforeWrite": () => (/* binding */ beforeWrite),
/* harmony export */   "bottom": () => (/* binding */ bottom),
/* harmony export */   "clippingParents": () => (/* binding */ clippingParents),
/* harmony export */   "end": () => (/* binding */ end),
/* harmony export */   "left": () => (/* binding */ left),
/* harmony export */   "main": () => (/* binding */ main),
/* harmony export */   "modifierPhases": () => (/* binding */ modifierPhases),
/* harmony export */   "placements": () => (/* binding */ placements),
/* harmony export */   "popper": () => (/* binding */ popper),
/* harmony export */   "read": () => (/* binding */ read),
/* harmony export */   "reference": () => (/* binding */ reference),
/* harmony export */   "right": () => (/* binding */ right),
/* harmony export */   "start": () => (/* binding */ start),
/* harmony export */   "top": () => (/* binding */ top),
/* harmony export */   "variationPlacements": () => (/* binding */ variationPlacements),
/* harmony export */   "viewport": () => (/* binding */ viewport),
/* harmony export */   "write": () => (/* binding */ write)
/* harmony export */ });
var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

/***/ }),

/***/ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/v-calendar/node_modules/@popperjs/core/lib/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "afterMain": () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.afterMain),
/* harmony export */   "afterRead": () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.afterRead),
/* harmony export */   "afterWrite": () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.afterWrite),
/* harmony export */   "auto": () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.auto),
/* harmony export */   "basePlacements": () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.basePlacements),
/* harmony export */   "beforeMain": () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.beforeMain),
/* harmony export */   "beforeRead": () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.beforeRead),
/* harmony export */   "beforeWrite": () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.beforeWrite),
/* harmony export */   "bottom": () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.bottom),
/* harmony export */   "clippingParents": () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.clippingParents),
/* harmony export */   "createPopper": () => (/* binding */ createPopper),
/* harmony export */   "end": () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.end),
/* harmony export */   "left": () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.left),
/* harmony export */   "main": () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.main),
/* harmony export */   "modifierPhases": () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.modifierPhases),
/* harmony export */   "placements": () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.placements),
/* harmony export */   "popper": () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper),
/* harmony export */   "popperGenerator": () => (/* binding */ popperGenerator),
/* harmony export */   "read": () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.read),
/* harmony export */   "reference": () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.reference),
/* harmony export */   "right": () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.right),
/* harmony export */   "start": () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.start),
/* harmony export */   "top": () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.top),
/* harmony export */   "variationPlacements": () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.variationPlacements),
/* harmony export */   "viewport": () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.viewport),
/* harmony export */   "write": () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.write)
/* harmony export */ });
/* harmony import */ var _dom_utils_getCompositeRect_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dom-utils/getCompositeRect.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js");
/* harmony import */ var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dom-utils/getLayoutRect.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js");
/* harmony import */ var _dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-utils/listScrollParents.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dom-utils/getOffsetParent.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dom-utils/getComputedStyle.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _utils_orderModifiers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/orderModifiers.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/orderModifiers.js");
/* harmony import */ var _utils_debounce_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/debounce.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/debounce.js");
/* harmony import */ var _utils_validateModifiers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/validateModifiers.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/validateModifiers.js");
/* harmony import */ var _utils_uniqueBy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/uniqueBy.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/uniqueBy.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/getBasePlacement.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _utils_mergeByName_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/mergeByName.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/mergeByName.js");
/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-utils/instanceOf.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/enums.js");














var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, {}, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(options) {
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, {}, state.options, {}, options);
        state.scrollParents = {
          reference: (0,_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__.isElement)(reference) ? (0,_dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_2__["default"])(reference) : reference.contextElement ? (0,_dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_2__["default"])(reference.contextElement) : [],
          popper: (0,_dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_2__["default"])(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = (0,_utils_orderModifiers_js__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_utils_mergeByName_js__WEBPACK_IMPORTED_MODULE_4__["default"])([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned
        // if one of the modifiers is invalid for any reason

        if (true) {
          var modifiers = (0,_utils_uniqueBy_js__WEBPACK_IMPORTED_MODULE_5__["default"])([].concat(orderedModifiers, state.options.modifiers), function (_ref) {
            var name = _ref.name;
            return name;
          });
          (0,_utils_validateModifiers_js__WEBPACK_IMPORTED_MODULE_6__["default"])(modifiers);

          if ((0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_7__["default"])(state.options.placement) === _enums_js__WEBPACK_IMPORTED_MODULE_0__.auto) {
            var flipModifier = state.orderedModifiers.find(function (_ref2) {
              var name = _ref2.name;
              return name === 'flip';
            });

            if (!flipModifier) {
              console.error(['Popper: "auto" placements require the "flip" modifier be', 'present and enabled to work.'].join(' '));
            }
          }

          var _getComputedStyle = (0,_dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_8__["default"])(popper),
              marginTop = _getComputedStyle.marginTop,
              marginRight = _getComputedStyle.marginRight,
              marginBottom = _getComputedStyle.marginBottom,
              marginLeft = _getComputedStyle.marginLeft; // We no longer take into account `margins` on the popper, and it can
          // cause bugs with positioning, so we'll warn the consumer


          if ([marginTop, marginRight, marginBottom, marginLeft].some(function (margin) {
            return parseFloat(margin);
          })) {
            console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', 'between the popper and its reference element or boundary.', 'To replicate margin, use the `offset` modifier, as well as', 'the `padding` option in the `preventOverflow` and `flip`', 'modifiers.'].join(' '));
          }
        }

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          if (true) {
            console.error(INVALID_ELEMENT_ERROR);
          }

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: (0,_dom_utils_getCompositeRect_js__WEBPACK_IMPORTED_MODULE_9__["default"])(reference, (0,_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_10__["default"])(popper), state.options.strategy === 'fixed'),
          popper: (0,_dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_11__["default"])(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (true) {
            __debug_loops__ += 1;

            if (__debug_loops__ > 100) {
              console.error(INFINITE_LOOP_ERROR);
              break;
            }
          }

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: (0,_utils_debounce_js__WEBPACK_IMPORTED_MODULE_12__["default"])(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {
      if (true) {
        console.error(INVALID_ELEMENT_ERROR);
      }

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}
var createPopper = /*#__PURE__*/popperGenerator();

/***/ }),

/***/ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/modifiers/applyStyles.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/v-calendar/node_modules/@popperjs/core/lib/modifiers/applyStyles.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dom_utils_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-utils/getNodeName.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom-utils/instanceOf.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");

 // This modifier takes the styles prepared by the `computeStyles` modifier
// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!(0,_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(element) || !(0,_dom_utils_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!(0,_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(element) || !(0,_dom_utils_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element)) {
        return;
      } // Flow doesn't support to extend this property, but it's the most
      // effective way to apply styles to an HTMLElement
      // $FlowFixMe


      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect,
  requires: ['computeStyles']
});

/***/ }),

/***/ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/modifiers/arrow.js":
/*!************************************************************************************!*\
  !*** ./node_modules/v-calendar/node_modules/@popperjs/core/lib/modifiers/arrow.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom-utils/getLayoutRect.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js");
/* harmony import */ var _dom_utils_contains_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dom-utils/contains.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/contains.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dom-utils/getOffsetParent.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getMainAxisFromPlacement.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js");
/* harmony import */ var _utils_within_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/within.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/within.js");
/* harmony import */ var _utils_mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/mergePaddingObject.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/mergePaddingObject.js");
/* harmony import */ var _utils_expandToHashMap_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/expandToHashMap.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/expandToHashMap.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom-utils/instanceOf.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");









 // eslint-disable-next-line import/no-unused-modules

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = (0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(state.placement);
  var axis = (0,_utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(basePlacement);
  var isVertical = [_enums_js__WEBPACK_IMPORTED_MODULE_2__.left, _enums_js__WEBPACK_IMPORTED_MODULE_2__.right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = state.modifiersData[name + "#persistent"].padding;
  var arrowRect = (0,_dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_3__["default"])(arrowElement);
  var minProp = axis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_2__.top : _enums_js__WEBPACK_IMPORTED_MODULE_2__.left;
  var maxProp = axis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_2__.bottom : _enums_js__WEBPACK_IMPORTED_MODULE_2__.right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = (0,_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_4__["default"])(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = (0,_utils_within_js__WEBPACK_IMPORTED_MODULE_5__["default"])(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function effect(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element,
      _options$padding = options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (true) {
    if (!(0,_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_6__.isHTMLElement)(arrowElement)) {
      console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', 'To use an SVG arrow, wrap it in an HTMLElement that will be used as', 'the arrow.'].join(' '));
    }
  }

  if (!(0,_dom_utils_contains_js__WEBPACK_IMPORTED_MODULE_7__["default"])(state.elements.popper, arrowElement)) {
    if (true) {
      console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', 'element.'].join(' '));
    }

    return;
  }

  state.elements.arrow = arrowElement;
  state.modifiersData[name + "#persistent"] = {
    padding: (0,_utils_mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_8__["default"])(typeof padding !== 'number' ? padding : (0,_utils_expandToHashMap_js__WEBPACK_IMPORTED_MODULE_9__["default"])(padding, _enums_js__WEBPACK_IMPORTED_MODULE_2__.basePlacements))
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
});

/***/ }),

/***/ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/modifiers/computeStyles.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/v-calendar/node_modules/@popperjs/core/lib/modifiers/computeStyles.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "mapToStyles": () => (/* binding */ mapToStyles)
/* harmony export */ });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-utils/getOffsetParent.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom-utils/getWindow.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom-utils/getDocumentElement.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dom-utils/getComputedStyle.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/getBasePlacement.js");





 // eslint-disable-next-line import/no-unused-modules

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsets(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: Math.round(x * dpr) / dpr || 0,
    y: Math.round(y * dpr) / dpr || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive;

  var _roundOffsets = roundOffsets(offsets),
      x = _roundOffsets.x,
      y = _roundOffsets.y;

  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = _enums_js__WEBPACK_IMPORTED_MODULE_0__.left;
  var sideY = _enums_js__WEBPACK_IMPORTED_MODULE_0__.top;
  var win = window;

  if (adaptive) {
    var offsetParent = (0,_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_1__["default"])(popper);

    if (offsetParent === (0,_dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_2__["default"])(popper)) {
      offsetParent = (0,_dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_3__["default"])(popper);
    } // $FlowFixMe: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it

    /*:: offsetParent = (offsetParent: Element); */


    if (placement === _enums_js__WEBPACK_IMPORTED_MODULE_0__.top) {
      sideY = _enums_js__WEBPACK_IMPORTED_MODULE_0__.bottom;
      y -= offsetParent.clientHeight - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === _enums_js__WEBPACK_IMPORTED_MODULE_0__.left) {
      sideX = _enums_js__WEBPACK_IMPORTED_MODULE_0__.right;
      x -= offsetParent.clientWidth - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) < 2 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref3) {
  var state = _ref3.state,
      options = _ref3.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive;

  if (true) {
    var transitionProperty = (0,_dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_4__["default"])(state.elements.popper).transitionProperty || '';

    if (adaptive && ['transform', 'top', 'right', 'bottom', 'left'].some(function (property) {
      return transitionProperty.indexOf(property) >= 0;
    })) {
      console.warn(['Popper: Detected CSS transitions on at least one of the following', 'CSS properties: "transform", "top", "right", "bottom", "left".', '\n\n', 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', 'for smooth transitions, or remove these properties from the CSS', 'transition declaration on the popper element if only transitioning', 'opacity or background-color for example.', '\n\n', 'We recommend using the popper element as a wrapper around an inner', 'element that can have any CSS property transitioned for animations.'].join(' '));
    }
  }

  var commonStyles = {
    placement: (0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_5__["default"])(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, {}, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, {}, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
});

/***/ }),

/***/ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/modifiers/eventListeners.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/v-calendar/node_modules/@popperjs/core/lib/modifiers/eventListeners.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom-utils/getWindow.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
 // eslint-disable-next-line import/no-unused-modules

var passive = {
  passive: true
};

function effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = (0,_dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect,
  data: {}
});

/***/ }),

/***/ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/modifiers/flip.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/v-calendar/node_modules/@popperjs/core/lib/modifiers/flip.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getOppositePlacement.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/getOppositePlacement.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _utils_getOppositeVariationPlacement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getOppositeVariationPlacement.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/detectOverflow.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _utils_computeAutoPlacement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/computeAutoPlacement.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _utils_getVariation_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/getVariation.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/getVariation.js");






 // eslint-disable-next-line import/no-unused-modules

function getExpandedFallbackPlacements(placement) {
  if ((0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement) === _enums_js__WEBPACK_IMPORTED_MODULE_1__.auto) {
    return [];
  }

  var oppositePlacement = (0,_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(placement);
  return [(0,_utils_getOppositeVariationPlacement_js__WEBPACK_IMPORTED_MODULE_3__["default"])(placement), oppositePlacement, (0,_utils_getOppositeVariationPlacement_js__WEBPACK_IMPORTED_MODULE_3__["default"])(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = (0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [(0,_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat((0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement) === _enums_js__WEBPACK_IMPORTED_MODULE_1__.auto ? (0,_utils_computeAutoPlacement_js__WEBPACK_IMPORTED_MODULE_4__["default"])(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = (0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement);

    var isStartVariation = (0,_utils_getVariation_js__WEBPACK_IMPORTED_MODULE_5__["default"])(placement) === _enums_js__WEBPACK_IMPORTED_MODULE_1__.start;
    var isVertical = [_enums_js__WEBPACK_IMPORTED_MODULE_1__.top, _enums_js__WEBPACK_IMPORTED_MODULE_1__.bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = (0,_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_6__["default"])(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? _enums_js__WEBPACK_IMPORTED_MODULE_1__.right : _enums_js__WEBPACK_IMPORTED_MODULE_1__.left : isStartVariation ? _enums_js__WEBPACK_IMPORTED_MODULE_1__.bottom : _enums_js__WEBPACK_IMPORTED_MODULE_1__.top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = (0,_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(mainVariationSide);
    }

    var altVariationSide = (0,_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
});

/***/ }),

/***/ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/modifiers/hide.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/v-calendar/node_modules/@popperjs/core/lib/modifiers/hide.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/detectOverflow.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/detectOverflow.js");



function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [_enums_js__WEBPACK_IMPORTED_MODULE_0__.top, _enums_js__WEBPACK_IMPORTED_MODULE_0__.right, _enums_js__WEBPACK_IMPORTED_MODULE_0__.bottom, _enums_js__WEBPACK_IMPORTED_MODULE_0__.left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = (0,_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__["default"])(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = (0,_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__["default"])(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
});

/***/ }),

/***/ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/modifiers/offset.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/v-calendar/node_modules/@popperjs/core/lib/modifiers/offset.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "distanceAndSkiddingToXY": () => (/* binding */ distanceAndSkiddingToXY)
/* harmony export */ });
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/enums.js");


function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = (0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement);
  var invertDistance = [_enums_js__WEBPACK_IMPORTED_MODULE_1__.left, _enums_js__WEBPACK_IMPORTED_MODULE_1__.top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [_enums_js__WEBPACK_IMPORTED_MODULE_1__.left, _enums_js__WEBPACK_IMPORTED_MODULE_1__.right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = _enums_js__WEBPACK_IMPORTED_MODULE_1__.placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
});

/***/ }),

/***/ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/modifiers/popperOffsets.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/v-calendar/node_modules/@popperjs/core/lib/modifiers/popperOffsets.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_computeOffsets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/computeOffsets.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/computeOffsets.js");


function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = (0,_utils_computeOffsets_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
});

/***/ }),

/***/ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/modifiers/preventOverflow.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/v-calendar/node_modules/@popperjs/core/lib/modifiers/preventOverflow.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../enums.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getMainAxisFromPlacement.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js");
/* harmony import */ var _utils_getAltAxis_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/getAltAxis.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/getAltAxis.js");
/* harmony import */ var _utils_within_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/within.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/within.js");
/* harmony import */ var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom-utils/getLayoutRect.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../dom-utils/getOffsetParent.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/detectOverflow.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _utils_getVariation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getVariation.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/getVariation.js");
/* harmony import */ var _utils_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/getFreshSideObject.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/getFreshSideObject.js");











function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = (0,_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = (0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(state.placement);
  var variation = (0,_utils_getVariation_js__WEBPACK_IMPORTED_MODULE_2__["default"])(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = (0,_utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_3__["default"])(basePlacement);
  var altAxis = (0,_utils_getAltAxis_js__WEBPACK_IMPORTED_MODULE_4__["default"])(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis) {
    var mainSide = mainAxis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_5__.top : _enums_js__WEBPACK_IMPORTED_MODULE_5__.left;
    var altSide = mainAxis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_5__.bottom : _enums_js__WEBPACK_IMPORTED_MODULE_5__.right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min = popperOffsets[mainAxis] + overflow[mainSide];
    var max = popperOffsets[mainAxis] - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === _enums_js__WEBPACK_IMPORTED_MODULE_5__.start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === _enums_js__WEBPACK_IMPORTED_MODULE_5__.start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? (0,_dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_6__["default"])(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : (0,_utils_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_7__["default"])();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = (0,_utils_within_js__WEBPACK_IMPORTED_MODULE_8__["default"])(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
    var arrowOffsetParent = state.elements.arrow && (0,_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_9__["default"])(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
    var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;
    var preventedOffset = (0,_utils_within_js__WEBPACK_IMPORTED_MODULE_8__["default"])(tether ? Math.min(min, tetherMin) : min, offset, tether ? Math.max(max, tetherMax) : max);
    popperOffsets[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset;
  }

  if (checkAltAxis) {
    var _mainSide = mainAxis === 'x' ? _enums_js__WEBPACK_IMPORTED_MODULE_5__.top : _enums_js__WEBPACK_IMPORTED_MODULE_5__.left;

    var _altSide = mainAxis === 'x' ? _enums_js__WEBPACK_IMPORTED_MODULE_5__.bottom : _enums_js__WEBPACK_IMPORTED_MODULE_5__.right;

    var _offset = popperOffsets[altAxis];

    var _min = _offset + overflow[_mainSide];

    var _max = _offset - overflow[_altSide];

    var _preventedOffset = (0,_utils_within_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_min, _offset, _max);

    popperOffsets[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
});

/***/ }),

/***/ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/popper.js":
/*!***************************************************************************!*\
  !*** ./node_modules/v-calendar/node_modules/@popperjs/core/lib/popper.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPopper": () => (/* binding */ createPopper),
/* harmony export */   "defaultModifiers": () => (/* binding */ defaultModifiers),
/* harmony export */   "detectOverflow": () => (/* reexport safe */ _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   "popperGenerator": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_9__.popperGenerator)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/index.js");
/* harmony import */ var _modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modifiers/eventListeners.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/modifiers/eventListeners.js");
/* harmony import */ var _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifiers/popperOffsets.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/modifiers/popperOffsets.js");
/* harmony import */ var _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modifiers/computeStyles.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/modifiers/computeStyles.js");
/* harmony import */ var _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modifiers/applyStyles.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/modifiers/applyStyles.js");
/* harmony import */ var _modifiers_offset_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modifiers/offset.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/modifiers/offset.js");
/* harmony import */ var _modifiers_flip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modifiers/flip.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/modifiers/flip.js");
/* harmony import */ var _modifiers_preventOverflow_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modifiers/preventOverflow.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/modifiers/preventOverflow.js");
/* harmony import */ var _modifiers_arrow_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modifiers/arrow.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/modifiers/arrow.js");
/* harmony import */ var _modifiers_hide_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modifiers/hide.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/modifiers/hide.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/detectOverflow.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/detectOverflow.js");











var defaultModifiers = [_modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_0__["default"], _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_1__["default"], _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_2__["default"], _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_3__["default"], _modifiers_offset_js__WEBPACK_IMPORTED_MODULE_4__["default"], _modifiers_flip_js__WEBPACK_IMPORTED_MODULE_5__["default"], _modifiers_preventOverflow_js__WEBPACK_IMPORTED_MODULE_6__["default"], _modifiers_arrow_js__WEBPACK_IMPORTED_MODULE_7__["default"], _modifiers_hide_js__WEBPACK_IMPORTED_MODULE_8__["default"]];
var createPopper = /*#__PURE__*/(0,_index_js__WEBPACK_IMPORTED_MODULE_9__.popperGenerator)({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules



/***/ }),

/***/ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ computeAutoPlacement)
/* harmony export */ });
/* harmony import */ var _getVariation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getVariation.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/getVariation.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _detectOverflow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detectOverflow.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _getBasePlacement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getBasePlacement.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/getBasePlacement.js");





/*:: type OverflowsMap = { [ComputedPlacement]: number }; */

/*;; type OverflowsMap = { [key in ComputedPlacement]: number }; */
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.placements : _options$allowedAutoP;
  var variation = (0,_getVariation_js__WEBPACK_IMPORTED_MODULE_1__["default"])(placement);
  var placements = (variation ? flipVariations ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.variationPlacements : _enums_js__WEBPACK_IMPORTED_MODULE_0__.variationPlacements.filter(function (placement) {
    return (0,_getVariation_js__WEBPACK_IMPORTED_MODULE_1__["default"])(placement) === variation;
  }) : _enums_js__WEBPACK_IMPORTED_MODULE_0__.basePlacements).filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  }); // $FlowFixMe: Flow seems to have problems with two array unions...

  var overflows = placements.reduce(function (acc, placement) {
    acc[placement] = (0,_detectOverflow_js__WEBPACK_IMPORTED_MODULE_2__["default"])(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[(0,_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_3__["default"])(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}

/***/ }),

/***/ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/computeOffsets.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/computeOffsets.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ computeOffsets)
/* harmony export */ });
/* harmony import */ var _getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBasePlacement.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _getVariation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getVariation.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/getVariation.js");
/* harmony import */ var _getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getMainAxisFromPlacement.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/enums.js");




function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? (0,_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement) : null;
  var variation = placement ? (0,_getVariation_js__WEBPACK_IMPORTED_MODULE_1__["default"])(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case _enums_js__WEBPACK_IMPORTED_MODULE_2__.top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case _enums_js__WEBPACK_IMPORTED_MODULE_2__.bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case _enums_js__WEBPACK_IMPORTED_MODULE_2__.right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case _enums_js__WEBPACK_IMPORTED_MODULE_2__.left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? (0,_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_3__["default"])(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case _enums_js__WEBPACK_IMPORTED_MODULE_2__.start:
        offsets[mainAxis] = Math.floor(offsets[mainAxis]) - Math.floor(reference[len] / 2 - element[len] / 2);
        break;

      case _enums_js__WEBPACK_IMPORTED_MODULE_2__.end:
        offsets[mainAxis] = Math.floor(offsets[mainAxis]) + Math.ceil(reference[len] / 2 - element[len] / 2);
        break;

      default:
    }
  }

  return offsets;
}

/***/ }),

/***/ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/debounce.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/debounce.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ debounce)
/* harmony export */ });
function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}

/***/ }),

/***/ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/detectOverflow.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/detectOverflow.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ detectOverflow)
/* harmony export */ });
/* harmony import */ var _dom_utils_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom-utils/getBoundingClientRect.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _dom_utils_getClippingRect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom-utils/getClippingRect.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js");
/* harmony import */ var _dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dom-utils/getDocumentElement.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _computeOffsets_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./computeOffsets.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/computeOffsets.js");
/* harmony import */ var _rectToClientRect_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rectToClientRect.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/rectToClientRect.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dom-utils/instanceOf.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mergePaddingObject.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/mergePaddingObject.js");
/* harmony import */ var _expandToHashMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./expandToHashMap.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/expandToHashMap.js");








 // eslint-disable-next-line import/no-unused-modules

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = (0,_mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_1__["default"])(typeof padding !== 'number' ? padding : (0,_expandToHashMap_js__WEBPACK_IMPORTED_MODULE_2__["default"])(padding, _enums_js__WEBPACK_IMPORTED_MODULE_0__.basePlacements));
  var altContext = elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.reference : _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper;
  var referenceElement = state.elements.reference;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = (0,_dom_utils_getClippingRect_js__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_4__.isElement)(element) ? element : element.contextElement || (0,_dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_5__["default"])(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = (0,_dom_utils_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_6__["default"])(referenceElement);
  var popperOffsets = (0,_computeOffsets_js__WEBPACK_IMPORTED_MODULE_7__["default"])({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = (0,_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_8__["default"])(Object.assign({}, popperRect, {}, popperOffsets));
  var elementClientRect = elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [_enums_js__WEBPACK_IMPORTED_MODULE_0__.right, _enums_js__WEBPACK_IMPORTED_MODULE_0__.bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [_enums_js__WEBPACK_IMPORTED_MODULE_0__.top, _enums_js__WEBPACK_IMPORTED_MODULE_0__.bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}

/***/ }),

/***/ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/expandToHashMap.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/expandToHashMap.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ expandToHashMap)
/* harmony export */ });
function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

/***/ }),

/***/ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/format.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/format.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ format)
/* harmony export */ });
function format(str) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return [].concat(args).reduce(function (p, c) {
    return p.replace(/%s/, c);
  }, str);
}

/***/ }),

/***/ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/getAltAxis.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/getAltAxis.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getAltAxis)
/* harmony export */ });
function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

/***/ }),

/***/ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/getBasePlacement.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/getBasePlacement.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getBasePlacement)
/* harmony export */ });

function getBasePlacement(placement) {
  return placement.split('-')[0];
}

/***/ }),

/***/ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/getFreshSideObject.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/getFreshSideObject.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getFreshSideObject)
/* harmony export */ });
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

/***/ }),

/***/ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getMainAxisFromPlacement)
/* harmony export */ });
function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}

/***/ }),

/***/ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/getOppositePlacement.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/getOppositePlacement.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getOppositePlacement)
/* harmony export */ });
var hash = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/***/ }),

/***/ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getOppositeVariationPlacement)
/* harmony export */ });
var hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash[matched];
  });
}

/***/ }),

/***/ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/getVariation.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/getVariation.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getVariation)
/* harmony export */ });
function getVariation(placement) {
  return placement.split('-')[1];
}

/***/ }),

/***/ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/mergeByName.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/mergeByName.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mergeByName)
/* harmony export */ });
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, {}, current, {
      options: Object.assign({}, existing.options, {}, current.options),
      data: Object.assign({}, existing.data, {}, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}

/***/ }),

/***/ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/mergePaddingObject.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/mergePaddingObject.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mergePaddingObject)
/* harmony export */ });
/* harmony import */ var _getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getFreshSideObject.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/getFreshSideObject.js");

function mergePaddingObject(paddingObject) {
  return Object.assign({}, (0,_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(), {}, paddingObject);
}

/***/ }),

/***/ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/orderModifiers.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/orderModifiers.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ orderModifiers)
/* harmony export */ });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/enums.js");
 // source: https://stackoverflow.com/questions/49875255

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return _enums_js__WEBPACK_IMPORTED_MODULE_0__.modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

/***/ }),

/***/ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/rectToClientRect.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/rectToClientRect.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rectToClientRect)
/* harmony export */ });
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

/***/ }),

/***/ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/uniqueBy.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/uniqueBy.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ uniqueBy)
/* harmony export */ });
function uniqueBy(arr, fn) {
  var identifiers = new Set();
  return arr.filter(function (item) {
    var identifier = fn(item);

    if (!identifiers.has(identifier)) {
      identifiers.add(identifier);
      return true;
    }
  });
}

/***/ }),

/***/ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/validateModifiers.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/validateModifiers.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ validateModifiers)
/* harmony export */ });
/* harmony import */ var _format_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./format.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/format.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/enums.js");


var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = ['name', 'enabled', 'phase', 'fn', 'effect', 'requires', 'options'];
function validateModifiers(modifiers) {
  modifiers.forEach(function (modifier) {
    Object.keys(modifier).forEach(function (key) {
      switch (key) {
        case 'name':
          if (typeof modifier.name !== 'string') {
            console.error((0,_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', "\"" + String(modifier.name) + "\""));
          }

          break;

        case 'enabled':
          if (typeof modifier.enabled !== 'boolean') {
            console.error((0,_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', "\"" + String(modifier.enabled) + "\""));
          }

        case 'phase':
          if (_enums_js__WEBPACK_IMPORTED_MODULE_1__.modifierPhases.indexOf(modifier.phase) < 0) {
            console.error((0,_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + _enums_js__WEBPACK_IMPORTED_MODULE_1__.modifierPhases.join(', '), "\"" + String(modifier.phase) + "\""));
          }

          break;

        case 'fn':
          if (typeof modifier.fn !== 'function') {
            console.error((0,_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'effect':
          if (typeof modifier.effect !== 'function') {
            console.error((0,_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'requires':
          if (!Array.isArray(modifier.requires)) {
            console.error((0,_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', "\"" + String(modifier.requires) + "\""));
          }

          break;

        case 'requiresIfExists':
          if (!Array.isArray(modifier.requiresIfExists)) {
            console.error((0,_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', "\"" + String(modifier.requiresIfExists) + "\""));
          }

          break;

        case 'options':
        case 'data':
          break;

        default:
          console.error("PopperJS: an invalid property has been provided to the \"" + modifier.name + "\" modifier, valid properties are " + VALID_PROPERTIES.map(function (s) {
            return "\"" + s + "\"";
          }).join(', ') + "; but \"" + key + "\" was provided.");
      }

      modifier.requires && modifier.requires.forEach(function (requirement) {
        if (modifiers.find(function (mod) {
          return mod.name === requirement;
        }) == null) {
          console.error((0,_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
        }
      });
    });
  });
}

/***/ }),

/***/ "./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/within.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/v-calendar/node_modules/@popperjs/core/lib/utils/within.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ within)
/* harmony export */ });
function within(min, value, max) {
  return Math.max(min, Math.min(value, max));
}

/***/ }),

/***/ "./resources/js/components/BottomBorder.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/BottomBorder.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./resources/js/pages/Profile.vue":
/*!****************************************!*\
  !*** ./resources/js/pages/Profile.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Profile_vue_vue_type_template_id_074da5b0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Profile.vue?vue&type=template&id=074da5b0 */ "./resources/js/pages/Profile.vue?vue&type=template&id=074da5b0");
/* harmony import */ var _Profile_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Profile.vue?vue&type=script&setup=true&lang=js */ "./resources/js/pages/Profile.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Profile_vue_vue_type_style_index_0_id_074da5b0_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Profile.vue?vue&type=style&index=0&id=074da5b0&lang=css */ "./resources/js/pages/Profile.vue?vue&type=style&index=0&id=074da5b0&lang=css");
/* harmony import */ var _Profile_vue_vue_type_style_index_1_id_074da5b0_lang_postcss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Profile.vue?vue&type=style&index=1&id=074da5b0&lang=postcss */ "./resources/js/pages/Profile.vue?vue&type=style&index=1&id=074da5b0&lang=postcss");
/* harmony import */ var _home_drith_Repository_rental_mobil_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;



const __exports__ = /*#__PURE__*/(0,_home_drith_Repository_rental_mobil_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_Profile_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Profile_vue_vue_type_template_id_074da5b0__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/pages/Profile.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/pages/Profile.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/Profile.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Profile_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Profile_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Profile.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Profile.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/components/BottomBorder.vue?vue&type=template&id=74ba22bc":
/*!********************************************************************************!*\
  !*** ./resources/js/components/BottomBorder.vue?vue&type=template&id=74ba22bc ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BottomBorder_vue_vue_type_template_id_74ba22bc__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BottomBorder_vue_vue_type_template_id_74ba22bc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BottomBorder.vue?vue&type=template&id=74ba22bc */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/BottomBorder.vue?vue&type=template&id=74ba22bc");


/***/ }),

/***/ "./resources/js/pages/Profile.vue?vue&type=template&id=074da5b0":
/*!**********************************************************************!*\
  !*** ./resources/js/pages/Profile.vue?vue&type=template&id=074da5b0 ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Profile_vue_vue_type_template_id_074da5b0__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Profile_vue_vue_type_template_id_074da5b0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Profile.vue?vue&type=template&id=074da5b0 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Profile.vue?vue&type=template&id=074da5b0");


/***/ }),

/***/ "./resources/js/pages/Profile.vue?vue&type=style&index=0&id=074da5b0&lang=css":
/*!************************************************************************************!*\
  !*** ./resources/js/pages/Profile.vue?vue&type=style&index=0&id=074da5b0&lang=css ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Profile_vue_vue_type_style_index_0_id_074da5b0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Profile.vue?vue&type=style&index=0&id=074da5b0&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Profile.vue?vue&type=style&index=0&id=074da5b0&lang=css");


/***/ }),

/***/ "./resources/js/pages/Profile.vue?vue&type=style&index=1&id=074da5b0&lang=postcss":
/*!****************************************************************************************!*\
  !*** ./resources/js/pages/Profile.vue?vue&type=style&index=1&id=074da5b0&lang=postcss ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_23_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Profile_vue_vue_type_style_index_1_id_074da5b0_lang_postcss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-23.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Profile.vue?vue&type=style&index=1&id=074da5b0&lang=postcss */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-23.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Profile.vue?vue&type=style&index=1&id=074da5b0&lang=postcss");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_23_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Profile_vue_vue_type_style_index_1_id_074da5b0_lang_postcss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_23_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Profile_vue_vue_type_style_index_1_id_074da5b0_lang_postcss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_23_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Profile_vue_vue_type_style_index_1_id_074da5b0_lang_postcss__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_23_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Profile_vue_vue_type_style_index_1_id_074da5b0_lang_postcss__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-select/dist/vue-select.js":
/*!****************************************************!*\
  !*** ./node_modules/vue-select/dist/vue-select.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js")):0}("undefined"!=typeof self?self:this,(function(e){return(()=>{var t={646:e=>{e.exports=function(e){if(Array.isArray(e)){for(var t=0,o=new Array(e.length);t<e.length;t++)o[t]=e[t];return o}}},713:e=>{e.exports=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}},860:e=>{e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},206:e=>{e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},319:(e,t,o)=>{var n=o(646),i=o(860),r=o(206);e.exports=function(e){return n(e)||i(e)||r()}},8:e=>{function t(o){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=t=function(e){return typeof e}:e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(o)}e.exports=t},744:(e,t)=>{"use strict";t.Z=(e,t)=>{for(const[o,n]of t)e[o]=n;return e}},748:t=>{"use strict";t.exports=e}},o={};function n(e){var i=o[e];if(void 0!==i)return i.exports;var r=o[e]={exports:{}};return t[e](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{"use strict";n.r(i),n.d(i,{VueSelect:()=>R,default:()=>K,mixins:()=>I});var e=n(748),t=["dir"],o=["id","aria-expanded","aria-owns"],r={ref:"selectedOptions",class:"vs__selected-options"},s=["disabled","title","aria-label","onClick"],l={ref:"actions",class:"vs__actions"},a=["disabled"],c={class:"vs__spinner"},u=["id"],p=["id","aria-selected","onMouseover","onClick"],d={key:0,class:"vs__no-options"},h=(0,e.createTextVNode)(" Sorry, no matching options. "),f=["id"];var m=n(319),y=n.n(m),g=n(8),b=n.n(g),v=n(713),O=n.n(v);const w={props:{autoscroll:{type:Boolean,default:!0}},watch:{typeAheadPointer:function(){this.autoscroll&&this.maybeAdjustScroll()},open:function(e){var t=this;this.autoscroll&&e&&this.$nextTick((function(){return t.maybeAdjustScroll()}))}},methods:{maybeAdjustScroll:function(){var e,t=(null===(e=this.$refs.dropdownMenu)||void 0===e?void 0:e.children[this.typeAheadPointer])||!1;if(t){var o=this.getDropdownViewport(),n=t.getBoundingClientRect(),i=n.top,r=n.bottom,s=n.height;if(i<o.top)return this.$refs.dropdownMenu.scrollTop=t.offsetTop;if(r>o.bottom)return this.$refs.dropdownMenu.scrollTop=t.offsetTop-(o.height-s)}},getDropdownViewport:function(){return this.$refs.dropdownMenu?this.$refs.dropdownMenu.getBoundingClientRect():{height:0,top:0,bottom:0}}}},S={data:function(){return{typeAheadPointer:-1}},watch:{filteredOptions:function(){for(var e=0;e<this.filteredOptions.length;e++)if(this.selectable(this.filteredOptions[e])){this.typeAheadPointer=e;break}},open:function(e){e&&this.typeAheadToLastSelected()},selectedValue:function(){this.open&&this.typeAheadToLastSelected()}},methods:{typeAheadUp:function(){for(var e=this.typeAheadPointer-1;e>=0;e--)if(this.selectable(this.filteredOptions[e])){this.typeAheadPointer=e;break}},typeAheadDown:function(){for(var e=this.typeAheadPointer+1;e<this.filteredOptions.length;e++)if(this.selectable(this.filteredOptions[e])){this.typeAheadPointer=e;break}},typeAheadSelect:function(){var e=this.filteredOptions[this.typeAheadPointer];e&&this.selectable(e)&&this.select(e)},typeAheadToLastSelected:function(){this.typeAheadPointer=0!==this.selectedValue.length?this.filteredOptions.indexOf(this.selectedValue[this.selectedValue.length-1]):-1}}},V={props:{loading:{type:Boolean,default:!1}},data:function(){return{mutableLoading:!1}},watch:{search:function(){this.$emit("search",this.search,this.toggleLoading)},loading:function(e){this.mutableLoading=e}},methods:{toggleLoading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return this.mutableLoading=null==e?!this.mutableLoading:e}}};var B={xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10"},P=[(0,e.createElementVNode)("path",{d:"M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"},null,-1)];var _=n(744);const k={},x=(0,_.Z)(k,[["render",function(t,o){return(0,e.openBlock)(),(0,e.createElementBlock)("svg",B,P)}]]);var C={xmlns:"http://www.w3.org/2000/svg",width:"14",height:"10"},D=[(0,e.createElementVNode)("path",{d:"M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"},null,-1)];const A={},L={Deselect:x,OpenIndicator:(0,_.Z)(A,[["render",function(t,o){return(0,e.openBlock)(),(0,e.createElementBlock)("svg",C,D)}]])},E={mounted:function(e,t){var o=t.instance;if(o.appendToBody){var n=o.$refs.toggle.getBoundingClientRect(),i=n.height,r=n.top,s=n.left,l=n.width,a=window.scrollX||window.pageXOffset,c=window.scrollY||window.pageYOffset;e.unbindPosition=o.calculatePosition(e,o,{width:l+"px",left:a+s+"px",top:c+r+i+"px"}),document.body.appendChild(e)}},unmounted:function(e,t){t.instance.appendToBody&&(e.unbindPosition&&"function"==typeof e.unbindPosition&&e.unbindPosition(),e.parentNode&&e.parentNode.removeChild(e))}};const $=function(e){var t={};return Object.keys(e).sort().forEach((function(o){t[o]=e[o]})),JSON.stringify(t)};var T=0;const j=function(){return++T};function F(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function M(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?F(Object(o),!0).forEach((function(t){O()(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):F(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}const N={components:M({},L),directives:{appendToBody:E},mixins:[w,S,V],emits:["open","close","update:modelValue","search","search:compositionstart","search:compositionend","search:keydown","search:blur","search:focus","search:input","option:created","option:selecting","option:selected","option:deselecting","option:deselected"],props:{modelValue:{},components:{type:Object,default:function(){return{}}},options:{type:Array,default:function(){return[]}},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!0},deselectFromDropdown:{type:Boolean,default:!1},searchable:{type:Boolean,default:!0},multiple:{type:Boolean,default:!1},placeholder:{type:String,default:""},transition:{type:String,default:"vs__fade"},clearSearchOnSelect:{type:Boolean,default:!0},closeOnSelect:{type:Boolean,default:!0},label:{type:String,default:"label"},autocomplete:{type:String,default:"off"},reduce:{type:Function,default:function(e){return e}},selectable:{type:Function,default:function(e){return!0}},getOptionLabel:{type:Function,default:function(e){return"object"===b()(e)?e.hasOwnProperty(this.label)?e[this.label]:console.warn('[vue-select warn]: Label key "option.'.concat(this.label,'" does not')+" exist in options object ".concat(JSON.stringify(e),".\n")+"https://vue-select.org/api/props.html#getoptionlabel"):e}},getOptionKey:{type:Function,default:function(e){if("object"!==b()(e))return e;try{return e.hasOwnProperty("id")?e.id:$(e)}catch(t){return console.warn("[vue-select warn]: Could not stringify this option to generate unique key. Please provide'getOptionKey' prop to return a unique key for each option.\nhttps://vue-select.org/api/props.html#getoptionkey",e,t)}}},onTab:{type:Function,default:function(){this.selectOnTab&&!this.isComposing&&this.typeAheadSelect()}},taggable:{type:Boolean,default:!1},tabindex:{type:Number,default:null},pushTags:{type:Boolean,default:!1},filterable:{type:Boolean,default:!0},filterBy:{type:Function,default:function(e,t,o){return(t||"").toLocaleLowerCase().indexOf(o.toLocaleLowerCase())>-1}},filter:{type:Function,default:function(e,t){var o=this;return e.filter((function(e){var n=o.getOptionLabel(e);return"number"==typeof n&&(n=n.toString()),o.filterBy(e,n,t)}))}},createOption:{type:Function,default:function(e){return"object"===b()(this.optionList[0])?O()({},this.label,e):e}},resetOnOptionsChange:{default:!1,validator:function(e){return["function","boolean"].includes(b()(e))}},clearSearchOnBlur:{type:Function,default:function(e){var t=e.clearSearchOnSelect,o=e.multiple;return t&&!o}},noDrop:{type:Boolean,default:!1},inputId:{type:String},dir:{type:String,default:"auto"},selectOnTab:{type:Boolean,default:!1},selectOnKeyCodes:{type:Array,default:function(){return[13]}},searchInputQuerySelector:{type:String,default:"[type=search]"},mapKeydown:{type:Function,default:function(e,t){return e}},appendToBody:{type:Boolean,default:!1},calculatePosition:{type:Function,default:function(e,t,o){var n=o.width,i=o.top,r=o.left;e.style.top=i,e.style.left=r,e.style.width=n}},dropdownShouldOpen:{type:Function,default:function(e){var t=e.noDrop,o=e.open,n=e.mutableLoading;return!t&&(o&&!n)}},uid:{type:[String,Number],default:function(){return j()}}},data:function(){return{search:"",open:!1,isComposing:!1,pushedTags:[],_value:[],deselectButtons:[]}},computed:{isReducingValues:function(){return this.$props.reduce!==this.$options.props.reduce.default},isTrackingValues:function(){return void 0===this.modelValue||this.isReducingValues},selectedValue:function(){var e=this.modelValue;return this.isTrackingValues&&(e=this.$data._value),null!=e?[].concat(e):[]},optionList:function(){return this.options.concat(this.pushTags?this.pushedTags:[])},searchEl:function(){return this.$slots.search?this.$refs.selectedOptions.querySelector(this.searchInputQuerySelector):this.$refs.search},scope:function(){var e=this,t={search:this.search,loading:this.loading,searching:this.searching,filteredOptions:this.filteredOptions};return{search:{attributes:M({disabled:this.disabled,placeholder:this.searchPlaceholder,tabindex:this.tabindex,readonly:!this.searchable,id:this.inputId,"aria-autocomplete":"list","aria-labelledby":"vs".concat(this.uid,"__combobox"),"aria-controls":"vs".concat(this.uid,"__listbox"),ref:"search",type:"search",autocomplete:this.autocomplete,value:this.search},this.dropdownOpen&&this.filteredOptions[this.typeAheadPointer]?{"aria-activedescendant":"vs".concat(this.uid,"__option-").concat(this.typeAheadPointer)}:{}),events:{compositionstart:function(){return e.isComposing=!0},compositionend:function(){return e.isComposing=!1},keydown:this.onSearchKeyDown,blur:this.onSearchBlur,focus:this.onSearchFocus,input:function(t){return e.search=t.target.value}}},spinner:{loading:this.mutableLoading},noOptions:{search:this.search,loading:this.mutableLoading,searching:this.searching},openIndicator:{attributes:{ref:"openIndicator",role:"presentation",class:"vs__open-indicator"}},listHeader:t,listFooter:t,header:M({},t,{deselect:this.deselect}),footer:M({},t,{deselect:this.deselect})}},childComponents:function(){return M({},L,{},this.components)},stateClasses:function(){return{"vs--open":this.dropdownOpen,"vs--single":!this.multiple,"vs--multiple":this.multiple,"vs--searching":this.searching&&!this.noDrop,"vs--searchable":this.searchable&&!this.noDrop,"vs--unsearchable":!this.searchable,"vs--loading":this.mutableLoading,"vs--disabled":this.disabled}},searching:function(){return!!this.search},dropdownOpen:function(){return this.dropdownShouldOpen(this)},searchPlaceholder:function(){return this.isValueEmpty&&this.placeholder?this.placeholder:void 0},filteredOptions:function(){var e=[].concat(this.optionList);if(!this.filterable&&!this.taggable)return e;var t=this.search.length?this.filter(e,this.search,this):e;if(this.taggable&&this.search.length){var o=this.createOption(this.search);this.optionExists(o)||t.unshift(o)}return t},isValueEmpty:function(){return 0===this.selectedValue.length},showClearButton:function(){return!this.multiple&&this.clearable&&!this.open&&!this.isValueEmpty}},watch:{options:function(e,t){var o=this;!this.taggable&&("function"==typeof o.resetOnOptionsChange?o.resetOnOptionsChange(e,t,o.selectedValue):o.resetOnOptionsChange)&&this.clearSelection(),this.modelValue&&this.isTrackingValues&&this.setInternalValueFromOptions(this.modelValue)},modelValue:{immediate:!0,handler:function(e){this.isTrackingValues&&this.setInternalValueFromOptions(e)}},multiple:function(){this.clearSelection()},open:function(e){this.$emit(e?"open":"close")}},created:function(){this.mutableLoading=this.loading},methods:{setInternalValueFromOptions:function(e){var t=this;Array.isArray(e)?this.$data._value=e.map((function(e){return t.findOptionFromReducedValue(e)})):this.$data._value=this.findOptionFromReducedValue(e)},select:function(e){this.$emit("option:selecting",e),this.isOptionSelected(e)?this.deselectFromDropdown&&(this.clearable||this.multiple&&this.selectedValue.length>1)&&this.deselect(e):(this.taggable&&!this.optionExists(e)&&(this.$emit("option:created",e),this.pushTag(e)),this.multiple&&(e=this.selectedValue.concat(e)),this.updateValue(e),this.$emit("option:selected",e)),this.onAfterSelect(e)},deselect:function(e){var t=this;this.$emit("option:deselecting",e),this.updateValue(this.selectedValue.filter((function(o){return!t.optionComparator(o,e)}))),this.$emit("option:deselected",e)},clearSelection:function(){this.updateValue(this.multiple?[]:null)},onAfterSelect:function(e){this.closeOnSelect&&(this.open=!this.open,this.searchEl.blur()),this.clearSearchOnSelect&&(this.search="")},updateValue:function(e){var t=this;void 0===this.modelValue&&(this.$data._value=e),null!==e&&(e=Array.isArray(e)?e.map((function(e){return t.reduce(e)})):this.reduce(e)),this.$emit("update:modelValue",e)},toggleDropdown:function(e){var t=e.target!==this.searchEl;t&&e.preventDefault();var o=[].concat(y()(this.deselectButtons||[]),y()([this.$refs.clearButton]||0));void 0===this.searchEl||o.filter(Boolean).some((function(t){return t.contains(e.target)||t===e.target}))?e.preventDefault():this.open&&t?this.searchEl.blur():this.disabled||(this.open=!0,this.searchEl.focus())},isOptionSelected:function(e){var t=this;return this.selectedValue.some((function(o){return t.optionComparator(o,e)}))},isOptionDeselectable:function(e){return this.isOptionSelected(e)&&this.deselectFromDropdown},optionComparator:function(e,t){return this.getOptionKey(e)===this.getOptionKey(t)},findOptionFromReducedValue:function(e){var t=this,o=[].concat(y()(this.options),y()(this.pushedTags)).filter((function(o){return JSON.stringify(t.reduce(o))===JSON.stringify(e)}));return 1===o.length?o[0]:o.find((function(e){return t.optionComparator(e,t.$data._value)}))||e},closeSearchOptions:function(){this.open=!1,this.$emit("search:blur")},maybeDeleteValue:function(){if(!this.searchEl.value.length&&this.selectedValue&&this.selectedValue.length&&this.clearable){var e=null;this.multiple&&(e=y()(this.selectedValue.slice(0,this.selectedValue.length-1))),this.updateValue(e)}},optionExists:function(e){var t=this;return this.optionList.some((function(o){return t.optionComparator(o,e)}))},normalizeOptionForSlot:function(e){return"object"===b()(e)?e:O()({},this.label,e)},pushTag:function(e){this.pushedTags.push(e)},onEscape:function(){this.search.length?this.search="":this.searchEl.blur()},onSearchBlur:function(){if(!this.mousedown||this.searching){var e=this.clearSearchOnSelect,t=this.multiple;return this.clearSearchOnBlur({clearSearchOnSelect:e,multiple:t})&&(this.search=""),void this.closeSearchOptions()}this.mousedown=!1,0!==this.search.length||0!==this.options.length||this.closeSearchOptions()},onSearchFocus:function(){this.open=!0,this.$emit("search:focus")},onMousedown:function(){this.mousedown=!0},onMouseUp:function(){this.mousedown=!1},onSearchKeyDown:function(e){var t=this,o=function(e){return e.preventDefault(),!t.isComposing&&t.typeAheadSelect()},n={8:function(e){return t.maybeDeleteValue()},9:function(e){return t.onTab()},27:function(e){return t.onEscape()},38:function(e){return e.preventDefault(),t.typeAheadUp()},40:function(e){return e.preventDefault(),t.typeAheadDown()}};this.selectOnKeyCodes.forEach((function(e){return n[e]=o}));var i=this.mapKeydown(n,this);if("function"==typeof i[e.keyCode])return i[e.keyCode](e)}}},z=(0,_.Z)(N,[["render",function(n,i,m,y,g,b){var v=(0,e.resolveDirective)("append-to-body");return(0,e.openBlock)(),(0,e.createElementBlock)("div",{dir:m.dir,class:(0,e.normalizeClass)(["v-select",b.stateClasses])},[(0,e.renderSlot)(n.$slots,"header",(0,e.normalizeProps)((0,e.guardReactiveProps)(b.scope.header))),(0,e.createElementVNode)("div",{id:"vs".concat(m.uid,"__combobox"),ref:"toggle",class:"vs__dropdown-toggle",role:"combobox","aria-expanded":b.dropdownOpen.toString(),"aria-owns":"vs".concat(m.uid,"__listbox"),"aria-label":"Search for option",onMousedown:i[1]||(i[1]=function(e){return b.toggleDropdown(e)})},[(0,e.createElementVNode)("div",r,[((0,e.openBlock)(!0),(0,e.createElementBlock)(e.Fragment,null,(0,e.renderList)(b.selectedValue,(function(t,o){return(0,e.renderSlot)(n.$slots,"selected-option-container",{option:b.normalizeOptionForSlot(t),deselect:b.deselect,multiple:m.multiple,disabled:m.disabled},(function(){return[((0,e.openBlock)(),(0,e.createElementBlock)("span",{key:m.getOptionKey(t),class:"vs__selected"},[(0,e.renderSlot)(n.$slots,"selected-option",(0,e.normalizeProps)((0,e.guardReactiveProps)(b.normalizeOptionForSlot(t))),(function(){return[(0,e.createTextVNode)((0,e.toDisplayString)(m.getOptionLabel(t)),1)]})),m.multiple?((0,e.openBlock)(),(0,e.createElementBlock)("button",{key:0,ref:function(e){return g.deselectButtons[o]=e},disabled:m.disabled,type:"button",class:"vs__deselect",title:"Deselect ".concat(m.getOptionLabel(t)),"aria-label":"Deselect ".concat(m.getOptionLabel(t)),onClick:function(e){return b.deselect(t)}},[((0,e.openBlock)(),(0,e.createBlock)((0,e.resolveDynamicComponent)(b.childComponents.Deselect)))],8,s)):(0,e.createCommentVNode)("",!0)]))]}))})),256)),(0,e.renderSlot)(n.$slots,"search",(0,e.normalizeProps)((0,e.guardReactiveProps)(b.scope.search)),(function(){return[(0,e.createElementVNode)("input",(0,e.mergeProps)({class:"vs__search"},b.scope.search.attributes,(0,e.toHandlers)(b.scope.search.events)),null,16)]}))],512),(0,e.createElementVNode)("div",l,[(0,e.withDirectives)((0,e.createElementVNode)("button",{ref:"clearButton",disabled:m.disabled,type:"button",class:"vs__clear",title:"Clear Selected","aria-label":"Clear Selected",onClick:i[0]||(i[0]=function(){return b.clearSelection&&b.clearSelection.apply(b,arguments)})},[((0,e.openBlock)(),(0,e.createBlock)((0,e.resolveDynamicComponent)(b.childComponents.Deselect)))],8,a),[[e.vShow,b.showClearButton]]),(0,e.renderSlot)(n.$slots,"open-indicator",(0,e.normalizeProps)((0,e.guardReactiveProps)(b.scope.openIndicator)),(function(){return[m.noDrop?(0,e.createCommentVNode)("",!0):((0,e.openBlock)(),(0,e.createBlock)((0,e.resolveDynamicComponent)(b.childComponents.OpenIndicator),(0,e.normalizeProps)((0,e.mergeProps)({key:0},b.scope.openIndicator.attributes)),null,16))]})),(0,e.renderSlot)(n.$slots,"spinner",(0,e.normalizeProps)((0,e.guardReactiveProps)(b.scope.spinner)),(function(){return[(0,e.withDirectives)((0,e.createElementVNode)("div",c,"Loading...",512),[[e.vShow,n.mutableLoading]])]}))],512)],40,o),(0,e.createVNode)(e.Transition,{name:m.transition},{default:(0,e.withCtx)((function(){return[b.dropdownOpen?(0,e.withDirectives)(((0,e.openBlock)(),(0,e.createElementBlock)("ul",{id:"vs".concat(m.uid,"__listbox"),ref:"dropdownMenu",key:"vs".concat(m.uid,"__listbox"),class:"vs__dropdown-menu",role:"listbox",tabindex:"-1",onMousedown:i[2]||(i[2]=(0,e.withModifiers)((function(){return b.onMousedown&&b.onMousedown.apply(b,arguments)}),["prevent"])),onMouseup:i[3]||(i[3]=function(){return b.onMouseUp&&b.onMouseUp.apply(b,arguments)})},[(0,e.renderSlot)(n.$slots,"list-header",(0,e.normalizeProps)((0,e.guardReactiveProps)(b.scope.listHeader))),((0,e.openBlock)(!0),(0,e.createElementBlock)(e.Fragment,null,(0,e.renderList)(b.filteredOptions,(function(t,o){return(0,e.openBlock)(),(0,e.createElementBlock)("li",{id:"vs".concat(m.uid,"__option-").concat(o),key:m.getOptionKey(t),role:"option",class:(0,e.normalizeClass)(["vs__dropdown-option",{"vs__dropdown-option--deselect":b.isOptionDeselectable(t)&&o===n.typeAheadPointer,"vs__dropdown-option--selected":b.isOptionSelected(t),"vs__dropdown-option--highlight":o===n.typeAheadPointer,"vs__dropdown-option--disabled":!m.selectable(t)}]),"aria-selected":o===n.typeAheadPointer||null,onMouseover:function(e){return m.selectable(t)?n.typeAheadPointer=o:null},onClick:(0,e.withModifiers)((function(e){return m.selectable(t)?b.select(t):null}),["prevent","stop"])},[(0,e.renderSlot)(n.$slots,"option",(0,e.normalizeProps)((0,e.guardReactiveProps)(b.normalizeOptionForSlot(t))),(function(){return[(0,e.createTextVNode)((0,e.toDisplayString)(m.getOptionLabel(t)),1)]}))],42,p)})),128)),0===b.filteredOptions.length?((0,e.openBlock)(),(0,e.createElementBlock)("li",d,[(0,e.renderSlot)(n.$slots,"no-options",(0,e.normalizeProps)((0,e.guardReactiveProps)(b.scope.noOptions)),(function(){return[h]}))])):(0,e.createCommentVNode)("",!0),(0,e.renderSlot)(n.$slots,"list-footer",(0,e.normalizeProps)((0,e.guardReactiveProps)(b.scope.listFooter)))],40,u)),[[v]]):((0,e.openBlock)(),(0,e.createElementBlock)("ul",{key:1,id:"vs".concat(m.uid,"__listbox"),role:"listbox",style:{display:"none",visibility:"hidden"}},null,8,f))]})),_:3},8,["name"]),(0,e.renderSlot)(n.$slots,"footer",(0,e.normalizeProps)((0,e.guardReactiveProps)(b.scope.footer)))],10,t)}]]),R=z,I={ajax:V,pointer:S,pointerScroll:w},K=z})(),i})()}));
//# sourceMappingURL=vue-select.js.map

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-23.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Profile.vue?vue&type=style&index=1&id=074da5b0&lang=postcss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-23.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Profile.vue?vue&type=style&index=1&id=074da5b0&lang=postcss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-23.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Profile.vue?vue&type=style&index=1&id=074da5b0&lang=postcss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-23.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Profile.vue?vue&type=style&index=1&id=074da5b0&lang=postcss");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("4c6a2e5c", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);