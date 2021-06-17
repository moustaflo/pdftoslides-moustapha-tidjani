(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./app.config.js":
/*!***********************!*\
  !*** ./app.config.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  name: 'wefunder-homework-moustapha-tidjani',
  port: 3000,
}


/***/ }),

/***/ "./src/views/Index/pitchdeckpage.jsx":
/*!*******************************************!*\
  !*** ./src/views/Index/pitchdeckpage.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Parts_slides_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Parts/slides.jsx */ "./src/views/Parts/slides.jsx");
/* harmony import */ var _app_config_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app.config.js */ "./app.config.js");
/* harmony import */ var _app_config_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_app_config_js__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.headers.common['api-key'] = _app_config_js__WEBPACK_IMPORTED_MODULE_3___default.a.apiKey;

var Welcome = /*#__PURE__*/function (_Component) {
  _inherits(Welcome, _Component);

  var _super = _createSuper(Welcome);

  function Welcome(props) {
    var _this;

    _classCallCheck(this, Welcome);

    _this = _super.call(this, props);

    _this.fileTypeCheck = function () {
      var fileToCheck = _this.state.uploadedFile; // Accepted file types

      var fileTypes = ['application/pdf'];
      if (fileTypes.every(function (type) {
        return fileToCheck.type !== type;
      })) return false;
      return true;
    };

    _this.fetchPitchdeck = function () {
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/pitchdeck').then(function (response) {
        _this.setState({
          slides: response.data.slides
        });
      })["catch"](function (error) {
        console.log(error);
      });
    };

    _this.onUploadPitch = function () {
      _this.setState({
        uploadedFile: event.target.files[0]
      });
    };

    _this.onClickHandler = function () {
      if (_this.fileTypeCheck()) {
        var fileData = new FormData();
        fileData.append('file', _this.state.uploadedFile);

        _this.setState({
          uploadResponse: 'Uploading...',
          uploadResponseColor: 'black'
        });

        axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/upload', fileData).then(function (response) {
          _this.setState({
            uploadResponse: response.data.uploadResponse,
            uploadResponseColor: 'green',
            images: response.data.images
          });
        })["catch"](function (error) {
          _this.setState({
            uploadResponse: 'An error occured while uploading your file',
            uploadResponseColor: 'red'
          });

          console.log(error);
        });
      } else {
        _this.setState({
          uploadResponse: 'the file extension for ' + _this.state.uploadedFile['name'] + ' is not accepted at this time :(',
          uploadResponseColor: 'red'
        });
      }
    };

    _this.onCompanyNameChange = function () {
      _this.setState({
        companyName: event.target.value
      });
    };

    _this.onCompanyMottoChange = function () {
      _this.setState({
        companyMotto: event.target.value
      });
    };

    _this.onExpandHandler = function () {
      _this.setState({
        advancedCustomization: !_this.state.advancedCustomization
      });
    };

    _this.onHeaderBackgroundChange = function () {
      var currentState = _objectSpread({}, _this.state.companyInfoStyle);

      currentState.padding = '5%';
      currentState.textAlign = 'center';
      currentState.background = event.target.value ? event.target.value : 'black';

      _this.setState({
        companyInfoStyle: currentState
      });
    };

    _this.onHeaderColorChange = function () {
      var currentState = _objectSpread({}, _this.state.companyInfoStyle);

      currentState.padding = '5%';
      currentState.textAlign = 'center';
      currentState.color = event.target.value ? event.target.value : 'white';

      _this.setState({
        companyInfoStyle: currentState
      });
    };

    _this.onBodyBackgroundChange = function () {
      var currentState = _objectSpread({}, _this.state.bodyBackgroundStyle);

      currentState.padding = '5%';
      currentState.textAlign = 'center';
      currentState.background = event.target.value ? event.target.value : 'beige';

      _this.setState({
        bodyBackgroundStyle: currentState
      });
    };

    _this.onImageBorderColorChange = function () {
      var currentState = _objectSpread({}, _this.state.slideStyle);

      currentState.marginBottom = '20px';
      currentState.borderRadius = '5%';
      currentState.borderStyle = 'solid';
      currentState.borderColor = 'brown';
      currentState.width = '80%';
      currentState.height = 'auto';
      currentState.borderColor = event.target.value ? event.target.value : 'brown';

      _this.setState({
        slideStyle: currentState
      });
    };

    _this.onImageBorderWidthChange = function () {
      var currentState = _objectSpread({}, _this.state.slideStyle);

      currentState.marginBottom = '20px';
      currentState.borderRadius = '5%';
      currentState.borderStyle = 'solid';
      currentState.width = '80%';
      currentState.height = 'auto';
      currentState.borderWidth = event.target.value ? event.target.value + 'px' : '10px';

      _this.setState({
        slideStyle: currentState
      });
    };

    _this.state = {
      companyName: '',
      companyMotto: '',
      advancedCustomization: false,
      uploadedFile: '',
      uploadResponse: '',
      uploadResponseColor: '',
      images: [],
      companyInfoStyle: {
        padding: '5%',
        background: 'black',
        color: 'white',
        textAlign: 'center'
      },
      bodyBackgroundStyle: {
        textAlign: 'center',
        padding: '5%',
        background: 'beige'
      },
      slideStyle: {
        marginBottom: '20px',
        borderRadius: '5%',
        borderStyle: 'solid',
        borderWidth: '10px',
        borderColor: 'brown',
        width: '80%',
        height: 'auto'
      }
    };
    return _this;
  }

  _createClass(Welcome, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          background: 'turquoise',
          color: 'black',
          padding: '1%',
          marginBottom: '10px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        style: {
          textAlign: 'center'
        }
      }, " Pitchdeck Customizer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        style: {
          textAlign: 'center',
          background: 'white',
          color: this.state.uploadResponseColor
        }
      }, this.state.uploadResponse), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Company Name:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        onChange: this.onCompanyNameChange
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Company Mission Statement or Motto:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
        onChange: this.onCompanyMottoChange
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "file",
        name: "pdf",
        onChange: this.onUploadPitch
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        disabled: this.state.uploadResponse === 'Uploading...' || this.state.uploadedFile === '' || this.state.companyName === '' || this.state.companyMotto === '' ? true : false,
        className: "btn btn-success btn-block",
        onClick: this.onClickHandler
      }, "Upload")), this.state.uploadResponse === 'Success!' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, this.state.advancedCustomization === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Hide Advanced Customization ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.onExpandHandler
      }, '^')) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Show Advanced Customization ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.onExpandHandler
      }, '>'))) : null, this.state.advancedCustomization === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Header Background Color (", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://www.google.com/search?q=css+color+picker",
        target: "_blank"
      }, "color pick helper"), "):"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        onChange: this.onHeaderBackgroundChange
      })) : null, this.state.advancedCustomization === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Header Text Color:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        onChange: this.onHeaderColorChange
      })) : null, this.state.advancedCustomization === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Body Background Color:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        onChange: this.onBodyBackgroundChange
      })) : null, this.state.advancedCustomization === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Image Border Color:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        onChange: this.onImageBorderColorChange
      })) : null, this.state.advancedCustomization === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Image Border Width:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        onChange: this.onImageBorderWidthChange
      })) : null), this.state.uploadResponse === 'Success!' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_slides_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        images: this.state.images,
        companyName: this.state.companyName,
        companyMotto: this.state.companyMotto,
        pitchdeckBackground: this.state.bodyBackgroundStyle,
        companyInfoStyle: this.state.companyInfoStyle,
        slideStyle: this.state.slideStyle
      }) : null);
    }
  }]);

  return Welcome;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Welcome);

/***/ }),

/***/ "./src/views/Parts/slides.jsx":
/*!************************************!*\
  !*** ./src/views/Parts/slides.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Slides = /*#__PURE__*/function (_Component) {
  _inherits(Slides, _Component);

  var _super = _createSuper(Slides);

  function Slides(props) {
    _classCallCheck(this, Slides);

    return _super.call(this, props);
  }

  _createClass(Slides, [{
    key: "render",
    value: function render() {
      var _this = this;

      var slides = this.props.images.map(function (slide) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          key: slide,
          src: slide,
          alt: _this.props.companyName,
          style: _this.props.slideStyle
        });
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: this.props.companyInfoStyle
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, this.props.companyName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, this.props.companyMotto)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: this.props.pitchdeckBackground
      }, slides));
    }
  }]);

  return Slides;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Slides);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAuY29uZmlnLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9JbmRleC9waXRjaGRlY2twYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvUGFydHMvc2xpZGVzLmpzeCJdLCJuYW1lcyI6WyJheGlvcyIsImRlZmF1bHRzIiwiaGVhZGVycyIsImNvbW1vbiIsImFwcENvbmZpZyIsImFwaUtleSIsIldlbGNvbWUiLCJwcm9wcyIsImZpbGVUeXBlQ2hlY2siLCJmaWxlVG9DaGVjayIsInN0YXRlIiwidXBsb2FkZWRGaWxlIiwiZmlsZVR5cGVzIiwiZXZlcnkiLCJ0eXBlIiwiZmV0Y2hQaXRjaGRlY2siLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJzZXRTdGF0ZSIsInNsaWRlcyIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJvblVwbG9hZFBpdGNoIiwiZXZlbnQiLCJ0YXJnZXQiLCJmaWxlcyIsIm9uQ2xpY2tIYW5kbGVyIiwiZmlsZURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInVwbG9hZFJlc3BvbnNlIiwidXBsb2FkUmVzcG9uc2VDb2xvciIsInBvc3QiLCJpbWFnZXMiLCJvbkNvbXBhbnlOYW1lQ2hhbmdlIiwiY29tcGFueU5hbWUiLCJ2YWx1ZSIsIm9uQ29tcGFueU1vdHRvQ2hhbmdlIiwiY29tcGFueU1vdHRvIiwib25FeHBhbmRIYW5kbGVyIiwiYWR2YW5jZWRDdXN0b21pemF0aW9uIiwib25IZWFkZXJCYWNrZ3JvdW5kQ2hhbmdlIiwiY3VycmVudFN0YXRlIiwiY29tcGFueUluZm9TdHlsZSIsInBhZGRpbmciLCJ0ZXh0QWxpZ24iLCJiYWNrZ3JvdW5kIiwib25IZWFkZXJDb2xvckNoYW5nZSIsImNvbG9yIiwib25Cb2R5QmFja2dyb3VuZENoYW5nZSIsImJvZHlCYWNrZ3JvdW5kU3R5bGUiLCJvbkltYWdlQm9yZGVyQ29sb3JDaGFuZ2UiLCJzbGlkZVN0eWxlIiwibWFyZ2luQm90dG9tIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyU3R5bGUiLCJib3JkZXJDb2xvciIsIndpZHRoIiwiaGVpZ2h0Iiwib25JbWFnZUJvcmRlcldpZHRoQ2hhbmdlIiwiYm9yZGVyV2lkdGgiLCJDb21wb25lbnQiLCJTbGlkZXMiLCJtYXAiLCJzbGlkZSIsInBpdGNoZGVja0JhY2tncm91bmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBRUE7QUFFQUEsNENBQUssQ0FBQ0MsUUFBTixDQUFlQyxPQUFmLENBQXVCQyxNQUF2QixDQUE4QixTQUE5QixJQUEyQ0MscURBQVMsQ0FBQ0MsTUFBckQ7O0lBRU1DLE87Ozs7O0FBQ0osbUJBQWFDLEtBQWIsRUFBb0I7QUFBQTs7QUFBQTs7QUFDbEIsOEJBQU1BLEtBQU47O0FBRGtCLFVBa0NwQkMsYUFsQ29CLEdBa0NKLFlBQUs7QUFDbkIsVUFBSUMsV0FBVyxHQUFHLE1BQUtDLEtBQUwsQ0FBV0MsWUFBN0IsQ0FEbUIsQ0FFbkI7O0FBQ0EsVUFBTUMsU0FBUyxHQUFHLENBQUMsaUJBQUQsQ0FBbEI7QUFFQSxVQUFJQSxTQUFTLENBQUNDLEtBQVYsQ0FBZ0IsVUFBQUMsSUFBSTtBQUFBLGVBQUlMLFdBQVcsQ0FBQ0ssSUFBWixLQUFxQkEsSUFBekI7QUFBQSxPQUFwQixDQUFKLEVBQXdELE9BQU8sS0FBUDtBQUV4RCxhQUFPLElBQVA7QUFFRCxLQTNDbUI7O0FBQUEsVUE2Q3BCQyxjQTdDb0IsR0E2Q0gsWUFBTTtBQUNyQmYsa0RBQUssQ0FBQ2dCLEdBQU4sQ0FBVSxnQkFBVixFQUE0QkMsSUFBNUIsQ0FBaUMsVUFBQ0MsUUFBRCxFQUFjO0FBQzdDLGNBQUtDLFFBQUwsQ0FBYztBQUNaQyxnQkFBTSxFQUFFRixRQUFRLENBQUNHLElBQVQsQ0FBY0Q7QUFEVixTQUFkO0FBR0QsT0FKRCxXQUlTLFVBQUNFLEtBQUQsRUFBVztBQUNs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RyxFQUFFLEtBQUksQ0FBQzVELEtBQUwsQ0FBVytCLFdBQTdDO0FBQTBELGVBQUssRUFBRSxLQUFJLENBQUMvQixLQUFMLENBQVdnRDtBQUE1RSxVQUFKO0FBQUEsT0FBNUIsQ0FBYjtBQUNBLDBCQUNJLHFGQUNJO0FBQUssYUFBSyxFQUFFLEtBQUtoRCxLQUFMLENBQVd1QztBQUF2QixzQkFDSSx1RUFBSyxLQUFLdkMsS0FBTCxDQUFXK0IsV0FBaEIsQ0FESixlQUVJLHNFQUFJLEtBQUsvQixLQUFMLENBQVdrQyxZQUFmLENBRkosQ0FESixlQUtJO0FBQUssYUFBSyxFQUFFLEtBQUtsQyxLQUFMLENBQVc2RDtBQUF2QixTQUNDaEQsTUFERCxDQUxKLENBREo7QUFXRDs7OztFQWxCa0I0QywrQzs7QUFxQk5DLHFFQUFmLEUiLCJmaWxlIjoiMC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgbmFtZTogJ3dlZnVuZGVyLWhvbWV3b3JrLW1vdXN0YXBoYS10aWRqYW5pJyxcbiAgcG9ydDogMzAwMCxcbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBTbGlkZXMgZnJvbSAnLi4vUGFydHMvc2xpZGVzLmpzeCdcblxuaW1wb3J0IGFwcENvbmZpZyBmcm9tICcuLi8uLi8uLi9hcHAuY29uZmlnLmpzJ1xuXG5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnYXBpLWtleSddID0gYXBwQ29uZmlnLmFwaUtleVxuXG5jbGFzcyBXZWxjb21lIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNvbXBhbnlOYW1lOiAnJyxcbiAgICAgIGNvbXBhbnlNb3R0bzogJycsXG4gICAgICBhZHZhbmNlZEN1c3RvbWl6YXRpb246IGZhbHNlLFxuICAgICAgdXBsb2FkZWRGaWxlOiAnJyxcbiAgICAgIHVwbG9hZFJlc3BvbnNlOiAnJyxcbiAgICAgIHVwbG9hZFJlc3BvbnNlQ29sb3I6ICcnLFxuICAgICAgaW1hZ2VzOiBbXSxcbiAgICAgIGNvbXBhbnlJbmZvU3R5bGU6IHtcbiAgICAgICAgcGFkZGluZzogJzUlJyxcbiAgICAgICAgYmFja2dyb3VuZDogJ2JsYWNrJyxcbiAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcidcbiAgICAgIH0sXG4gICAgICBib2R5QmFja2dyb3VuZFN0eWxlOiB7XG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgIHBhZGRpbmc6ICc1JScsXG4gICAgICAgIGJhY2tncm91bmQ6ICdiZWlnZScsXG4gICAgICB9LFxuICAgICAgc2xpZGVTdHlsZToge1xuICAgICAgICBtYXJnaW5Cb3R0b206ICcyMHB4JyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnNSUnLFxuICAgICAgICBib3JkZXJTdHlsZTogJ3NvbGlkJyxcbiAgICAgICAgYm9yZGVyV2lkdGg6ICcxMHB4JyxcbiAgICAgICAgYm9yZGVyQ29sb3I6ICdicm93bicsXG4gICAgICAgIHdpZHRoOiAnODAlJyxcbiAgICAgICAgaGVpZ2h0OiAnYXV0bydcbiAgICAgIH1cblxuICAgIH1cbiAgfVxuXG4gIGZpbGVUeXBlQ2hlY2sgPSAoKT0+IHtcbiAgICBsZXQgZmlsZVRvQ2hlY2sgPSB0aGlzLnN0YXRlLnVwbG9hZGVkRmlsZSBcbiAgICAvLyBBY2NlcHRlZCBmaWxlIHR5cGVzXG4gICAgY29uc3QgZmlsZVR5cGVzID0gWydhcHBsaWNhdGlvbi9wZGYnXVxuXG4gICAgaWYgKGZpbGVUeXBlcy5ldmVyeSh0eXBlID0+IGZpbGVUb0NoZWNrLnR5cGUgIT09IHR5cGUpKSByZXR1cm4gZmFsc2VcblxuICAgIHJldHVybiB0cnVlXG4gIFxuICB9XG5cbiAgZmV0Y2hQaXRjaGRlY2sgPSAoKSA9PiB7XG4gICAgYXhpb3MuZ2V0KCcvYXBpL3BpdGNoZGVjaycpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2xpZGVzOiByZXNwb25zZS5kYXRhLnNsaWRlc1xuICAgICAgfSlcbiAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIH0pXG4gIH1cblxuICBvblVwbG9hZFBpdGNoID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdXBsb2FkZWRGaWxlOiBldmVudC50YXJnZXQuZmlsZXNbMF1cbiAgICB9KVxuICB9XG5cbiAgb25DbGlja0hhbmRsZXIgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuZmlsZVR5cGVDaGVjaygpKSB7XG4gICAgICBjb25zdCBmaWxlRGF0YSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgICBmaWxlRGF0YS5hcHBlbmQoJ2ZpbGUnLCB0aGlzLnN0YXRlLnVwbG9hZGVkRmlsZSlcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdXBsb2FkUmVzcG9uc2U6ICdVcGxvYWRpbmcuLi4nLFxuICAgICAgdXBsb2FkUmVzcG9uc2VDb2xvcjogJ2JsYWNrJ1xuICAgICAgfSlcbiAgICAgIGF4aW9zLnBvc3QoJy9hcGkvdXBsb2FkJywgZmlsZURhdGEpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHVwbG9hZFJlc3BvbnNlOiByZXNwb25zZS5kYXRhLnVwbG9hZFJlc3BvbnNlLFxuICAgICAgICAgIHVwbG9hZFJlc3BvbnNlQ29sb3I6ICdncmVlbicsXG4gICAgICAgICAgaW1hZ2VzOiByZXNwb25zZS5kYXRhLmltYWdlc1xuICAgICAgICB9KVxuICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHVwbG9hZFJlc3BvbnNlOiAnQW4gZXJyb3Igb2NjdXJlZCB3aGlsZSB1cGxvYWRpbmcgeW91ciBmaWxlJyxcbiAgICAgICAgICB1cGxvYWRSZXNwb25zZUNvbG9yOiAncmVkJ1xuICAgICAgICB9KVxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB1cGxvYWRSZXNwb25zZTogJ3RoZSBmaWxlIGV4dGVuc2lvbiBmb3IgJyArIHRoaXMuc3RhdGUudXBsb2FkZWRGaWxlWyduYW1lJ10gKyAnIGlzIG5vdCBhY2NlcHRlZCBhdCB0aGlzIHRpbWUgOignLFxuICAgICAgICB1cGxvYWRSZXNwb25zZUNvbG9yOiAncmVkJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBvbkNvbXBhbnlOYW1lQ2hhbmdlID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY29tcGFueU5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgIH0pXG4gIH1cbiAgb25Db21wYW55TW90dG9DaGFuZ2UgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjb21wYW55TW90dG86IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgIH0pXG4gIH1cblxuICBvbkV4cGFuZEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhZHZhbmNlZEN1c3RvbWl6YXRpb246ICF0aGlzLnN0YXRlLmFkdmFuY2VkQ3VzdG9taXphdGlvblxuICAgIH0pXG4gIH1cblxuICBvbkhlYWRlckJhY2tncm91bmRDaGFuZ2UgPSAoKSA9PiB7XG4gICAgbGV0IGN1cnJlbnRTdGF0ZSA9IHsuLi50aGlzLnN0YXRlLmNvbXBhbnlJbmZvU3R5bGV9XG4gICAgY3VycmVudFN0YXRlLnBhZGRpbmcgPSAnNSUnXG4gICAgY3VycmVudFN0YXRlLnRleHRBbGlnbiA9ICdjZW50ZXInXG4gICAgY3VycmVudFN0YXRlLmJhY2tncm91bmQgPSBldmVudC50YXJnZXQudmFsdWU/IGV2ZW50LnRhcmdldC52YWx1ZTogJ2JsYWNrJ1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY29tcGFueUluZm9TdHlsZTogY3VycmVudFN0YXRlXG4gICAgfSlcbiAgfVxuXG4gIG9uSGVhZGVyQ29sb3JDaGFuZ2UgPSAoKSA9PiB7XG4gICAgbGV0IGN1cnJlbnRTdGF0ZSA9IHsuLi50aGlzLnN0YXRlLmNvbXBhbnlJbmZvU3R5bGV9XG4gICAgY3VycmVudFN0YXRlLnBhZGRpbmcgPSAnNSUnXG4gICAgY3VycmVudFN0YXRlLnRleHRBbGlnbiA9ICdjZW50ZXInXG4gICAgY3VycmVudFN0YXRlLmNvbG9yID0gZXZlbnQudGFyZ2V0LnZhbHVlPyBldmVudC50YXJnZXQudmFsdWU6ICd3aGl0ZSdcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNvbXBhbnlJbmZvU3R5bGU6IGN1cnJlbnRTdGF0ZVxuICAgIH0pXG4gIH1cblxuICBvbkJvZHlCYWNrZ3JvdW5kQ2hhbmdlID0gKCkgPT4ge1xuICAgIGxldCBjdXJyZW50U3RhdGUgPSB7Li4udGhpcy5zdGF0ZS5ib2R5QmFja2dyb3VuZFN0eWxlfVxuICAgIGN1cnJlbnRTdGF0ZS5wYWRkaW5nID0gJzUlJ1xuICAgIGN1cnJlbnRTdGF0ZS50ZXh0QWxpZ24gPSAnY2VudGVyJ1xuICAgIGN1cnJlbnRTdGF0ZS5iYWNrZ3JvdW5kID0gZXZlbnQudGFyZ2V0LnZhbHVlPyBldmVudC50YXJnZXQudmFsdWU6ICdiZWlnZSdcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGJvZHlCYWNrZ3JvdW5kU3R5bGU6IGN1cnJlbnRTdGF0ZVxuICAgIH0pXG4gIH1cblxuICBvbkltYWdlQm9yZGVyQ29sb3JDaGFuZ2UgPSAoKSA9PiB7XG4gICAgbGV0IGN1cnJlbnRTdGF0ZSA9IHsuLi50aGlzLnN0YXRlLnNsaWRlU3R5bGV9XG4gICAgY3VycmVudFN0YXRlLm1hcmdpbkJvdHRvbSA9ICcyMHB4J1xuICAgIGN1cnJlbnRTdGF0ZS5ib3JkZXJSYWRpdXMgPSAnNSUnXG4gICAgY3VycmVudFN0YXRlLmJvcmRlclN0eWxlID0gJ3NvbGlkJ1xuICAgIGN1cnJlbnRTdGF0ZS5ib3JkZXJDb2xvciA9ICdicm93bidcbiAgICBjdXJyZW50U3RhdGUud2lkdGggPSAnODAlJ1xuICAgIGN1cnJlbnRTdGF0ZS5oZWlnaHQgPSAnYXV0bydcbiAgICBjdXJyZW50U3RhdGUuYm9yZGVyQ29sb3IgPSBldmVudC50YXJnZXQudmFsdWU/IGV2ZW50LnRhcmdldC52YWx1ZTogJ2Jyb3duJ1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2xpZGVTdHlsZTogY3VycmVudFN0YXRlXG4gICAgfSlcbiAgfVxuXG4gIG9uSW1hZ2VCb3JkZXJXaWR0aENoYW5nZSA9ICgpID0+IHtcbiAgICBsZXQgY3VycmVudFN0YXRlID0gey4uLnRoaXMuc3RhdGUuc2xpZGVTdHlsZX1cbiAgICBjdXJyZW50U3RhdGUubWFyZ2luQm90dG9tID0gJzIwcHgnXG4gICAgY3VycmVudFN0YXRlLmJvcmRlclJhZGl1cyA9ICc1JSdcbiAgICBjdXJyZW50U3RhdGUuYm9yZGVyU3R5bGUgPSAnc29saWQnXG4gICAgY3VycmVudFN0YXRlLndpZHRoID0gJzgwJSdcbiAgICBjdXJyZW50U3RhdGUuaGVpZ2h0ID0gJ2F1dG8nXG4gICAgY3VycmVudFN0YXRlLmJvcmRlcldpZHRoID0gZXZlbnQudGFyZ2V0LnZhbHVlPyBldmVudC50YXJnZXQudmFsdWUgKyAncHgnOiAnMTBweCdcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNsaWRlU3R5bGU6IGN1cnJlbnRTdGF0ZVxuICAgIH0pXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZDogJ3R1cnF1b2lzZScsIGNvbG9yOiAnYmxhY2snLCBwYWRkaW5nOiAnMSUnLCBtYXJnaW5Cb3R0b206ICcxMHB4J319PlxuICAgICAgICA8aDEgc3R5bGU9e3t0ZXh0QWxpZ246ICdjZW50ZXInfX0+IFBpdGNoZGVjayBDdXN0b21pemVyPC9oMT5cbiAgICAgICAgPGgyIHN0eWxlPXt7dGV4dEFsaWduOiAnY2VudGVyJywgYmFja2dyb3VuZDogJ3doaXRlJywgY29sb3I6IHRoaXMuc3RhdGUudXBsb2FkUmVzcG9uc2VDb2xvcn19Pnt0aGlzLnN0YXRlLnVwbG9hZFJlc3BvbnNlfTwvaDI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdj5Db21wYW55IE5hbWU6PC9kaXY+XG4gICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIG9uQ2hhbmdlPXt0aGlzLm9uQ29tcGFueU5hbWVDaGFuZ2V9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdj5Db21wYW55IE1pc3Npb24gU3RhdGVtZW50IG9yIE1vdHRvOjwvZGl2PlxuICAgICAgICAgIDx0ZXh0YXJlYSBvbkNoYW5nZT17dGhpcy5vbkNvbXBhbnlNb3R0b0NoYW5nZX0+PC90ZXh0YXJlYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPSdmaWxlJyBuYW1lPSdwZGYnIG9uQ2hhbmdlPXt0aGlzLm9uVXBsb2FkUGl0Y2h9Lz5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgZGlzYWJsZWQ9e3RoaXMuc3RhdGUudXBsb2FkUmVzcG9uc2UgPT09ICdVcGxvYWRpbmcuLi4nIHx8IHRoaXMuc3RhdGUudXBsb2FkZWRGaWxlID09PSAnJyB8fCB0aGlzLnN0YXRlLmNvbXBhbnlOYW1lID09PSAnJyB8fCB0aGlzLnN0YXRlLmNvbXBhbnlNb3R0byA9PT0gJycgPyB0cnVlOiBmYWxzZX0gY2xhc3NOYW1lPSdidG4gYnRuLXN1Y2Nlc3MgYnRuLWJsb2NrJyBvbkNsaWNrPXt0aGlzLm9uQ2xpY2tIYW5kbGVyfT5VcGxvYWQ8L2J1dHRvbj5cbiAgICAgICAgPC9wPlxuICAgICAgICB7dGhpcy5zdGF0ZS51cGxvYWRSZXNwb25zZSA9PT0gJ1N1Y2Nlc3MhJz9cbiAgICAgICAgPGRpdj5cbiAgICAgICAge3RoaXMuc3RhdGUuYWR2YW5jZWRDdXN0b21pemF0aW9uID09PSB0cnVlP1xuICAgICAgICA8cD5IaWRlIEFkdmFuY2VkIEN1c3RvbWl6YXRpb24gPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uRXhwYW5kSGFuZGxlcn0+eydeJ308L2J1dHRvbj48L3A+XG4gICAgICAgIDogPHA+U2hvdyBBZHZhbmNlZCBDdXN0b21pemF0aW9uIDxidXR0b24gb25DbGljaz17dGhpcy5vbkV4cGFuZEhhbmRsZXJ9PnsnPid9PC9idXR0b24+PC9wPn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDogbnVsbCB9XG4gICAgICAgIHt0aGlzLnN0YXRlLmFkdmFuY2VkQ3VzdG9taXphdGlvbiA9PT0gdHJ1ZT9cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2PkhlYWRlciBCYWNrZ3JvdW5kIENvbG9yICg8YSBocmVmPSdodHRwczovL3d3dy5nb29nbGUuY29tL3NlYXJjaD9xPWNzcytjb2xvcitwaWNrZXInIHRhcmdldD0nX2JsYW5rJz5jb2xvciBwaWNrIGhlbHBlcjwvYT4pOjwvZGl2PlxuICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBvbkNoYW5nZT17dGhpcy5vbkhlYWRlckJhY2tncm91bmRDaGFuZ2V9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDogbnVsbCB9XG4gICAgICAgIHt0aGlzLnN0YXRlLmFkdmFuY2VkQ3VzdG9taXphdGlvbiA9PT0gdHJ1ZT9cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2PkhlYWRlciBUZXh0IENvbG9yOjwvZGl2PlxuICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBvbkNoYW5nZT17dGhpcy5vbkhlYWRlckNvbG9yQ2hhbmdlfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA6IG51bGwgfVxuICAgICAgICB7dGhpcy5zdGF0ZS5hZHZhbmNlZEN1c3RvbWl6YXRpb24gPT09IHRydWU/XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdj5Cb2R5IEJhY2tncm91bmQgQ29sb3I6PC9kaXY+XG4gICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIG9uQ2hhbmdlPXt0aGlzLm9uQm9keUJhY2tncm91bmRDaGFuZ2V9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDogbnVsbCB9XG4gICAgICAgIHt0aGlzLnN0YXRlLmFkdmFuY2VkQ3VzdG9taXphdGlvbiA9PT0gdHJ1ZT9cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2PkltYWdlIEJvcmRlciBDb2xvcjo8L2Rpdj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgb25DaGFuZ2U9e3RoaXMub25JbWFnZUJvcmRlckNvbG9yQ2hhbmdlfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA6IG51bGwgfVxuICAgICAgICB7dGhpcy5zdGF0ZS5hZHZhbmNlZEN1c3RvbWl6YXRpb24gPT09IHRydWU/XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdj5JbWFnZSBCb3JkZXIgV2lkdGg6PC9kaXY+XG4gICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIG9uQ2hhbmdlPXt0aGlzLm9uSW1hZ2VCb3JkZXJXaWR0aENoYW5nZX0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgOiBudWxsIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHt0aGlzLnN0YXRlLnVwbG9hZFJlc3BvbnNlID09PSAnU3VjY2VzcyEnP1xuICAgICAgICA8U2xpZGVzIGltYWdlcz17dGhpcy5zdGF0ZS5pbWFnZXN9IGNvbXBhbnlOYW1lPXt0aGlzLnN0YXRlLmNvbXBhbnlOYW1lfSBjb21wYW55TW90dG89e3RoaXMuc3RhdGUuY29tcGFueU1vdHRvfSBwaXRjaGRlY2tCYWNrZ3JvdW5kPXt0aGlzLnN0YXRlLmJvZHlCYWNrZ3JvdW5kU3R5bGV9IGNvbXBhbnlJbmZvU3R5bGU9e3RoaXMuc3RhdGUuY29tcGFueUluZm9TdHlsZX0gc2xpZGVTdHlsZT17dGhpcy5zdGF0ZS5zbGlkZVN0eWxlfT48L1NsaWRlcz5cbiAgICAgICAgOiBudWxsIH1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXZWxjb21lXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbmNsYXNzIFNsaWRlcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBsZXQgc2xpZGVzID0gdGhpcy5wcm9wcy5pbWFnZXMubWFwKCBzbGlkZSA9PiA8aW1nIGtleT17c2xpZGV9IHNyYz17c2xpZGV9IGFsdD17dGhpcy5wcm9wcy5jb21wYW55TmFtZX0gc3R5bGU9e3RoaXMucHJvcHMuc2xpZGVTdHlsZX0gLz4gKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt0aGlzLnByb3BzLmNvbXBhbnlJbmZvU3R5bGV9PlxuICAgICAgICAgICAgICAgIDxoMT57dGhpcy5wcm9wcy5jb21wYW55TmFtZX08L2gxPlxuICAgICAgICAgICAgICAgIDxwPnt0aGlzLnByb3BzLmNvbXBhbnlNb3R0b308L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3RoaXMucHJvcHMucGl0Y2hkZWNrQmFja2dyb3VuZH0+XG4gICAgICAgICAgICB7c2xpZGVzfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTbGlkZXNcbiJdLCJzb3VyY2VSb290IjoiIn0=