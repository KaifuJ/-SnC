global.webpackJsonp([4],{

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(5);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    navigationBarTitleText: '添加新的待办'
  }
});

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);

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

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    var date = new Date();
    var date_7 = new Date();
    date_7.setDate(date.getMonth() + 7);

    var riqi = this.dateToStr(date).d;
    var shijian = this.dateToStr(date).t;
    var after_riqi = this.dateToStr(date_7).d;

    return {
      now_date: riqi,
      after_date: after_riqi,

      newTodo: {
        text: '',
        alertOrNot: false,
        date: riqi,
        time: shijian,
        finished: false,
        priority: 1,
        oldPriority: 0
      }
    };
  },


  methods: {
    dateToStr: function dateToStr(datep) {
      var riqi = datep.getFullYear().toString() + '-';
      var shijian = '';

      if (datep.getMonth() + 1 < 10) {
        riqi = riqi + '0' + (datep.getMonth() + 1) + '-';
      } else {
        riqi = riqi + (datep.getMonth() + 1) + '-';
      }
      if (datep.getDate() < 10) {
        riqi = riqi + '0' + datep.getDate();
      } else {
        riqi = riqi + datep.getDate();
      }

      if (datep.getHours() < 10) {
        shijian = shijian + '0' + datep.getHours() + ':';
      } else {
        shijian = shijian + datep.getHours() + ':';
      }
      if (datep.getMinutes() < 10) {
        shijian = shijian + '0' + datep.getMinutes();
      } else {
        shijian = shijian + datep.getMinutes();
      }

      return {
        d: riqi,
        t: shijian
      };
    },

    sliderChange: function sliderChange(e) {
      this.newTodo.priority = e.mp.detail.value;
      console.log(this.newTodo.priority);
    },

    switchChange: function switchChange() {
      this.newTodo.alertOrNot = !this.newTodo.alertOrNot;
    },

    textChange: function textChange(e) {
      this.newTodo.text = e.mp.detail.value;
      console.log(this.newTodo.text);
    },

    dateChange: function dateChange(e) {
      this.newTodo.date = e.mp.detail.value;
      console.log(this.newTodo.date);
    },

    timeChange: function timeChange(e) {
      this.newTodo.time = e.mp.detail.value;
      console.log(this.newTodo.time);
    },

    formSubmit: function formSubmit() {
      var todos = wx.getStorageSync('todo') || [];
      if (this.newTodo.text === '') {
        wx.switchTab({
          url: '../todo/main'
        });
        console.log(todos);
        return;
      }

      todos.unshift(JSON.parse(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(this.newTodo)));
      wx.setStorageSync('todo', todos);
      console.log(todos);
      wx.switchTab({
        url: '../todo/main'
      }); //back to todo page
      console.log("submit finished");
    }
  },

  onShow: function onShow() {
    console.log('onShow hook is called');
    var date = new Date();
    var date_7 = new Date();
    date_7.setDate(date.getMonth() + 7);

    var riqi = this.dateToStr(date).d;
    var shijian = this.dateToStr(date).t;
    var after_riqi = this.dateToStr(date_7).d;

    var temp = {
      text: '',
      alertOrNot: false,
      date: riqi,
      time: shijian,
      finished: false,
      priority: 1
    };
    this.newTodo = temp;
  }

});

/***/ }),

/***/ 26:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('form', {
    attrs: {
      "eventid": '5'
    },
    on: {
      "submit": _vm.formSubmit,
      "reset": _vm.formReset
    }
  }, [_c('view', {
    staticClass: "section"
  }, [_c('view', {
    staticClass: "section__title"
  }, [_vm._v("待办事项")]), _vm._v(" "), _c('input', {
    attrs: {
      "name": "input",
      "placeholder": "请输入待办内容",
      "eventid": '0'
    },
    on: {
      "input": _vm.textChange
    }
  })]), _vm._v(" "), _c('view', {
    staticClass: "section section_gap"
  }, [_c('text', {
    staticClass: "section__title"
  }, [_vm._v("优先级")]), _vm._v(" "), _c('view', {
    staticClass: "body-view"
  }, [_c('slider', {
    attrs: {
      "value": _vm.newTodo.priority,
      "min": "1",
      "max": "5",
      "step": "1",
      "show-value": "true",
      "eventid": '1'
    },
    on: {
      "change": _vm.sliderChange
    }
  })])]), _vm._v(" "), _c('view', {
    staticClass: "section"
  }, [_c('view', {
    staticClass: "section__title"
  }, [_vm._v("设置提醒")]), _vm._v(" "), _c('switch', {
    attrs: {
      "checked": _vm.newTodo.alertOrNot,
      "eventid": '2'
    },
    on: {
      "change": _vm.switchChange
    }
  })]), _vm._v(" "), (_vm.newTodo.alertOrNot) ? _c('view', {
    staticClass: "section"
  }, [_c('view', {
    staticClass: "section__title"
  }, [_vm._v("日期")]), _vm._v(" "), _c('picker', {
    attrs: {
      "mode": "date",
      "value": _vm.newTodo.date,
      "start": _vm.now_date,
      "end": _vm.after_date,
      "eventid": '3'
    },
    on: {
      "change": _vm.dateChange
    }
  }, [_c('view', {
    staticClass: "picker"
  }, [_vm._v("\n        当前选择：" + _vm._s(_vm.newTodo.date) + "\n      ")])])], 1) : _vm._e(), _vm._v(" "), (_vm.newTodo.alertOrNot) ? _c('view', {
    staticClass: "section"
  }, [_c('view', {
    staticClass: "section__title"
  }, [_vm._v("时间")]), _vm._v(" "), _c('picker', {
    attrs: {
      "mode": "time",
      "value": _vm.newTodo.time,
      "start": "00:00",
      "end": "23:59",
      "eventid": '4'
    },
    on: {
      "change": _vm.timeChange
    }
  }, [_c('view', {
    staticClass: "picker"
  }, [_vm._v("\n        当前选择：" + _vm._s(_vm.newTodo.time) + "\n      ")])])], 1) : _vm._e(), _vm._v(" "), _c('view', {
    staticClass: "btn-area"
  }, [_c('button', {
    attrs: {
      "formType": "submit"
    }
  }, [_vm._v("Submit")])], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1a673f4f", esExports)
  }
}

/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1a673f4f_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(31);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(26)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1a673f4f"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1a673f4f_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\addTodo\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1a673f4f", Component.options)
  } else {
    hotAPI.reload("data-v-1a673f4f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ })

},[10]);
//# sourceMappingURL=main.js.map