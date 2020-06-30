(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/css-loader/dist/cjs.js?modules!./src/pages/battle.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js?modules!./src/pages/battle.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\r\n\r\n._2UyGdNIujMrTBD07OAgZ4a{\r\n    display: flex;\r\n    width:50%;\r\n    margin: auto;\r\n}\r\n\r\nh3{\r\n    display: block;\r\n    font-size: 1.17em;\r\n    margin-block-start: 1em;\r\n    margin-block-end: 1em;\r\n    margin-inline-start: 0px;\r\n    margin-inline-end: 0px;\r\n    font-weight: bold;\r\n}\r\n\r\n._2UyGdNIujMrTBD07OAgZ4a i{\r\n    background-color: #eee;\r\n    font-size: 120px !important;\r\n    padding: 32px;\r\n}\r\n\r\n.eOzdsdlqnHl403sHxm-Uv{\r\n    font-size: 20px;\r\n    text-align: center;\r\n    margin: 8px 16px;\r\n}\r\n\r\n._3qCeIjXYx6J3inDtMQJ4WS{\r\n    display: flex;\r\n    justify-content: center;\r\n    width: 95%;\r\n    margin: auto;\r\n}\r\n\r\n._1D3NXE3xw4fFTcUDMkrHBx{\r\n    width: 50%;\r\n    margin-left: 20px;\r\n}\r\n\r\n._1pWpiV0P79-IZIH_-qam6q{\r\n    width: 50%;\r\n    margin-left: 20px;\r\n}\r\n\r\n._1D3NXE3xw4fFTcUDMkrHBx input{\r\n    flex: 2;\r\n    font-size: 16px;\r\n    color: black;\r\n}\r\n\r\n._1pWpiV0P79-IZIH_-qam6q input{\r\n    flex: 2;\r\n    font-size: 16px;\r\n    color: black;\r\n}\r\n\r\n._1D3NXE3xw4fFTcUDMkrHBx button{\r\n    flex: 1;\r\n    font-size: 16px;\r\n    margin-left: 16px;\r\n    padding: 10px;\r\n    border-radius: 3px;\r\n}\r\n\r\n._1pWpiV0P79-IZIH_-qam6q button{\r\n    flex: 1;\r\n    font-size: 16px;\r\n    margin-left: 16px;\r\n    padding: 10px;\r\n    border-radius: 3px;\r\n}\r\n\r\n.XwvOjWDQJIRqmU3rlekf8{\r\n    position:relative;\r\n    display: inline-block;\r\n    width: 2em;\r\n    height: 2em;\r\n    line-height: 2em;\r\n    vertical-align: middle;\r\n}\r\n\r\n.p3tyugdEwvOYJTasyeCRg{\r\n    color:#f5222d;\r\n}\r\n\r\n.PghdsK06BtkvFacfCmZFD{\r\n    line-height: inherit;\r\n}\r\n._2PF2k7IIocWZf11uLCObyd{\r\n    font-size: 2rem;\r\n}\r\n\r\n.PghdsK06BtkvFacfCmZFD ._2PF2k7IIocWZf11uLCObyd{\r\n    position: absolute;\r\n    left: 0;\r\n    width:10%;\r\n    text-align: center;\r\n}\r\n\r\n._1_Lot45z9GJjH8bDZJ45CM{\r\n    margin: 16px 0;\r\n    text-align: center;\r\n}\r\n\r\n._1_Lot45z9GJjH8bDZJ45CM button{\r\n    padding: 16px 32px;\r\n    border-radius: 4px;\r\n    line-height: 1.15;\r\n    font-size: 100%;\r\n}\r\n", ""]);
// Exports
exports.locals = {
	"content": "_2UyGdNIujMrTBD07OAgZ4a",
	"tag": "eOzdsdlqnHl403sHxm-Uv",
	"form": "_3qCeIjXYx6J3inDtMQJ4WS",
	"player1": "_1D3NXE3xw4fFTcUDMkrHBx",
	"player2": "_1pWpiV0P79-IZIH_-qam6q",
	"fa-stack": "XwvOjWDQJIRqmU3rlekf8",
	"text-danger": "p3tyugdEwvOYJTasyeCRg",
	"fa-stack-1x": "PghdsK06BtkvFacfCmZFD",
	"fa-stack-2x": "_2PF2k7IIocWZf11uLCObyd",
	"submit": "_1_Lot45z9GJjH8bDZJ45CM"
};
module.exports = exports;


/***/ }),

/***/ "./src/pages/Battle.js":
/*!*****************************!*\
  !*** ./src/pages/Battle.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _node_modules_font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../node_modules/font-awesome/css/font-awesome.min.css */ "./node_modules/font-awesome/css/font-awesome.min.css");
/* harmony import */ var _node_modules_font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_node_modules_font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _battle_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./battle.css */ "./src/pages/battle.css");
/* harmony import */ var _battle_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_battle_css__WEBPACK_IMPORTED_MODULE_9__);








(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};





var Battle = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(Battle, _React$Component);

  var _super = _createSuper(Battle);

  function Battle() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Battle);

    _this = _super.call(this);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "onBattle", function (parm1, parm2) {
      console.log(parm1);
      console.log(parm2);

      _this.props.history.push("/result?player1=".concat(parm1, "&player2=").concat(parm2));
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "handlePostleft", function () {
      _this.setState({
        showplayer1: true
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "handlePostright", function () {
      _this.setState({
        showplayer2: true
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "leftcancel", function () {
      _this.setState({
        showplayer1: false
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "rightcancel", function () {
      _this.setState({
        showplayer2: false
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "onkeyupleft", function (e) {
      if (e.keyCode === 13) {
        _this.handlePostleft();
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "onkeyupright", function (e) {
      if (e.keyCode === 13) {
        _this.handlePostright();
      }
    });

    _this.state = {
      player1: "",
      player2: "",
      showplayer1: false,
      showplayer2: false,
      disabledplayer1: true,
      disabledplayer2: true
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Battle, [{
    key: "handleChangeleft",
    value: function handleChangeleft(e) {
      if (e.target.value === "") {
        this.setState({
          disabledplayer1: true
        });
      } else {
        this.setState({
          player1: e.target.value,
          disabledplayer1: false
        });
      }
    }
  }, {
    key: "handleChangeright",
    value: function handleChangeright(e) {
      if (e.target.value === "") {
        this.setState({
          disabledplayer2: true
        });
      } else {
        this.setState({
          player2: e.target.value,
          disabledplayer2: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var showplayer1 = this.state.showplayer1;
      var showplayer2 = this.state.showplayer2;
      var player1 = this.state.player1;
      var player2 = this.state.player2;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("main", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        style: {
          textAlign: "center"
        }
      }, "Instructions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: _battle_css__WEBPACK_IMPORTED_MODULE_9___default.a.content
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: _battle_css__WEBPACK_IMPORTED_MODULE_9___default.a.tag,
        style: {
          flex: 4
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, "Enter two Github:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "fa fa-users",
        style: {
          color: "rgb(255, 191, 116)"
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: _battle_css__WEBPACK_IMPORTED_MODULE_9___default.a.tag,
        style: {
          flex: 2
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, "Battle:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "fa fa-fighter-jet",
        style: {
          color: "gray"
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: _battle_css__WEBPACK_IMPORTED_MODULE_9___default.a.tag,
        style: {
          flex: 4
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, "See the winner:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "fa fa-trophy fa-3x",
        style: {
          color: "yellow"
        }
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        style: {
          textAlign: "center"
        }
      }, "Players"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: _battle_css__WEBPACK_IMPORTED_MODULE_9___default.a.form
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: _battle_css__WEBPACK_IMPORTED_MODULE_9___default.a.player1
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", null, "Player One"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: showplayer1 ? {
          display: "none"
        } : {
          display: "flex"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        className: _battle_css__WEBPACK_IMPORTED_MODULE_9___default.a.player1input,
        type: "text",
        name: "player1",
        placeholder: "github username",
        onChange: this.handleChangeleft.bind(this),
        onKeyUp: this.onkeyupleft,
        defaultValue: this.state.player1
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        type: "button",
        onClick: this.handlePostleft,
        disabled: this.state.disabledplayer1
      }, "Submit")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: showplayer1 ? {
          display: "block"
        } : {
          display: "none"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          display: "flex",
          padding: 16,
          borderRadius: 4,
          backgroundColor: "#dfdfdf"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          display: "flex",
          flex: 1,
          alignItems: "center"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        alt: "player1",
        src: "https://github.com/".concat(player1, ".png?size=200"),
        width: "128"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        style: {
          fontSize: 32,
          color: "#1890ff"
        }
      }, player1)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          display: "flex",
          alignItems: "center"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        role: "button",
        tabIndex: 0,
        "aria-label": "cancel",
        className: "fa-stack",
        onClick: this.leftcancel,
        onKeyUp: this.leftcancel
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "fa fa-circle fa-stack-2x text-danger"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "fa fa-close fa-stack-1x fa-inverse"
      })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: _battle_css__WEBPACK_IMPORTED_MODULE_9___default.a.player2
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", null, "Player Two"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: showplayer2 ? {
          display: "none"
        } : {
          display: "flex"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        className: _battle_css__WEBPACK_IMPORTED_MODULE_9___default.a.player2input,
        type: "text",
        name: "player2",
        placeholder: "github username",
        onChange: this.handleChangeright.bind(this),
        onKeyUp: this.onkeyupright,
        defaultValue: this.state.player2
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        type: "button",
        onClick: this.handlePostright,
        disabled: this.state.disabledplayer2
      }, "Submit")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: showplayer2 ? {
          display: "block"
        } : {
          display: "none"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          display: "flex",
          padding: 16,
          borderRadius: 4,
          backgroundColor: "#dfdfdf"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          display: "flex",
          flex: 1,
          alignItems: "center"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        alt: "player2",
        src: "https://github.com/".concat(player2, ".png?size=200"),
        width: "128"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        style: {
          fontSize: 32,
          color: "#1890ff"
        }
      }, player2)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          display: "flex",
          alignItems: "center"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        role: "button",
        tabIndex: 0,
        "aria-label": "cancel",
        className: "fa-stack",
        onClick: this.rightcancel,
        onKeyUp: this.rightcancel
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "fa fa-circle fa-stack-2x text-danger"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "fa fa-close fa-stack-1x fa-inverse"
      }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: _battle_css__WEBPACK_IMPORTED_MODULE_9___default.a.submit,
        style: showplayer1 && showplayer2 ? {
          display: "block"
        } : {
          display: "none"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "button",
        onClick: function onClick() {
          return _this2.onBattle(player1, player2);
        },
        value: "battle"
      }))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Battle;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

var _default = Battle;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Battle, "Battle", "C:\\Users\\user\\Documents\\workspace\\github-hot-cli\\src\\pages\\Battle.js");
  reactHotLoader.register(_default, "default", "C:\\Users\\user\\Documents\\workspace\\github-hot-cli\\src\\pages\\Battle.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/pages/battle.css":
/*!******************************!*\
  !*** ./src/pages/battle.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js?modules!./battle.css */ "./node_modules/css-loader/dist/cjs.js?modules!./src/pages/battle.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js?modules!./battle.css */ "./node_modules/css-loader/dist/cjs.js?modules!./src/pages/battle.css",
      function () {
        content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js?modules!./battle.css */ "./node_modules/css-loader/dist/cjs.js?modules!./src/pages/battle.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ })

}]);
//# sourceMappingURL=6.bundle.js.map