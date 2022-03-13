webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_meetups_MeetupList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/meetups/MeetupList.js */ "./components/meetups/MeetupList.js");



var _jsxFileName = "G:\\100 HTML CSS\\ReactJS\\NextJS\\06-onwards-to-a-bigger-project-starting-project\\pages\\index.js",
    _this = undefined;


var dummyData = [{
  id: 0,
  title: 'The Great Wall of China at Jinshanling',
  imageLink: 'https://cdn.britannica.com/89/179589-138-3EE27C94/Overview-Great-Wall-of-China.jpg?w=800&h=450&c=crop',
  address: 'Jinshanling',
  description: 'The Great Wall of China (traditional Chinese: 萬里長城; simplified Chinese: 万里长城; pinyin: Wànlǐ Chángchéng) is a series of fortifications that were built across the historical northern borders of ancient Chinese states and Imperial China as protection against various nomadic groups from the Eurasian Steppe. Several walls were built from as early as the 7th century BC, with selective stretches later joined together by Qin Shi Huang (220–206 BC), the first emperor of China. Little of the Qin wall remains. Later on, many successive dynasties built and maintained multiple stretches of border walls. The best-known sections of the wall were built by the Ming dynasty (1368–1644).'
}, {
  id: 1,
  title: 'Mt. Fuji of winter that seen from Oshino Hakkai.',
  imageLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/080103_hakkai_fuji.jpg/1280px-080103_hakkai_fuji.jpg',
  address: 'Fuji, Shizuoka',
  description: "Mount Fuji (\u5BCC\u58EB\u5C71, Fujisan, located on the island of Honsh\u016B, is the highest mountain in Japan, standing 3,776.24 m (12,389.2 ft). It is the second-highest volcano located on an island in Asia (after Mount Kerinci on the island of Sumatra), and seventh-highest peak of an island on Earth.Mount Fuji is an active stratovolcano that last erupted from 1707 to 1708. The mountain is located about 100 km (62 mi) southwest of Tokyo and is visible from there on clear days. Mount Fuji's exceptionally symmetrical cone, which is covered in snow for about five months of the year, is commonly used as a cultural icon of Japan and it is frequently depicted in art and photography, as well as visited by sightseers and climbers."
}, {
  id: 2,
  title: 'A collage of Venice: at the top left is the Piazza San Marco, followed by a view of the city, then the Grand Canal and interior of La Fenice, as well as the island of San Giorgio Maggiore.',
  imageLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Collage_Venezia.jpg/1280px-Collage_Venezia.jpg',
  address: 'Veneto',
  description: "Venice has been known as \"La Dominante\", \"La Serenissima\", \"Queen of the Adriatic\", \"City of Water\", \"City of Masks\", \"City of Bridges\", \"The Floating City\", and \"City of Canals\". The lagoon and a part of the city are listed as a UNESCO World Heritage Site. Parts of Venice are renowned for the beauty of their settings, their architecture, and artwork.Venice is known for several important artistic movements\u2014especially during the Renaissance period\u2014and has played an important role in the history of instrumental and operatic music, and is the birthplace of Baroque composers Tomaso Albinoni and Antonio Vivaldi."
}];

var HomePage = function HomePage() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
      meetups: dummyData
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 3
    }, _this)
  }, void 0, false);
};

_c = HomePage;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiZHVtbXlEYXRhIiwiaWQiLCJ0aXRsZSIsImltYWdlTGluayIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsIkhvbWVQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBTUEsU0FBUyxHQUFHLENBQ2pCO0FBQ0NDLElBQUUsRUFBQyxDQURKO0FBRUNDLE9BQUssRUFBQyx3Q0FGUDtBQUdDQyxXQUFTLEVBQUMsdUdBSFg7QUFJQ0MsU0FBTyxFQUFDLGFBSlQ7QUFLQ0MsYUFBVyxFQUFDO0FBTGIsQ0FEaUIsRUFRakI7QUFDQ0osSUFBRSxFQUFDLENBREo7QUFFQ0MsT0FBSyxFQUFDLGtEQUZQO0FBR0NDLFdBQVMsRUFBQyxnSEFIWDtBQUlDQyxTQUFPLEVBQUMsZ0JBSlQ7QUFLQ0MsYUFBVztBQUxaLENBUmlCLEVBZ0JqQjtBQUNDSixJQUFFLEVBQUMsQ0FESjtBQUVDQyxPQUFLLEVBQUMsOExBRlA7QUFHQ0MsV0FBUyxFQUFDLDBHQUhYO0FBSUNDLFNBQU8sRUFBQyxRQUpUO0FBS0NDLGFBQVc7QUFMWixDQWhCaUIsQ0FBbEI7O0FBd0JBLElBQU1DLFFBQVEsR0FBSSxTQUFaQSxRQUFZLEdBQUk7QUFDckIsc0JBQVE7QUFBQSwyQkFDUCxxRUFBQyx5RUFBRDtBQUFZLGFBQU8sRUFBRU47QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURPLG1CQUFSO0FBR0EsQ0FKRDs7S0FBTU0sUTtBQU1TQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wZmMwMWFmOWZkZmQ3NzRjNWM0My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICBNZWV0dXBMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBMaXN0LmpzJztcclxuXHJcbmNvbnN0IGR1bW15RGF0YSA9IFtcclxuXHR7XHJcblx0XHRpZDowLFxyXG5cdFx0dGl0bGU6J1RoZSBHcmVhdCBXYWxsIG9mIENoaW5hIGF0IEppbnNoYW5saW5nJyxcclxuXHRcdGltYWdlTGluazonaHR0cHM6Ly9jZG4uYnJpdGFubmljYS5jb20vODkvMTc5NTg5LTEzOC0zRUUyN0M5NC9PdmVydmlldy1HcmVhdC1XYWxsLW9mLUNoaW5hLmpwZz93PTgwMCZoPTQ1MCZjPWNyb3AnLFxyXG5cdFx0YWRkcmVzczonSmluc2hhbmxpbmcnLFxyXG5cdFx0ZGVzY3JpcHRpb246J1RoZSBHcmVhdCBXYWxsIG9mIENoaW5hICh0cmFkaXRpb25hbCBDaGluZXNlOiDokKzph4zplbfln447IHNpbXBsaWZpZWQgQ2hpbmVzZTog5LiH6YeM6ZW/5Z+OOyBwaW55aW46IFfDoG5sx5AgQ2jDoW5nY2jDqW5nKSBpcyBhIHNlcmllcyBvZiBmb3J0aWZpY2F0aW9ucyB0aGF0IHdlcmUgYnVpbHQgYWNyb3NzIHRoZSBoaXN0b3JpY2FsIG5vcnRoZXJuIGJvcmRlcnMgb2YgYW5jaWVudCBDaGluZXNlIHN0YXRlcyBhbmQgSW1wZXJpYWwgQ2hpbmEgYXMgcHJvdGVjdGlvbiBhZ2FpbnN0IHZhcmlvdXMgbm9tYWRpYyBncm91cHMgZnJvbSB0aGUgRXVyYXNpYW4gU3RlcHBlLiBTZXZlcmFsIHdhbGxzIHdlcmUgYnVpbHQgZnJvbSBhcyBlYXJseSBhcyB0aGUgN3RoIGNlbnR1cnkgQkMsIHdpdGggc2VsZWN0aXZlIHN0cmV0Y2hlcyBsYXRlciBqb2luZWQgdG9nZXRoZXIgYnkgUWluIFNoaSBIdWFuZyAoMjIw4oCTMjA2IEJDKSwgdGhlIGZpcnN0IGVtcGVyb3Igb2YgQ2hpbmEuIExpdHRsZSBvZiB0aGUgUWluIHdhbGwgcmVtYWlucy4gTGF0ZXIgb24sIG1hbnkgc3VjY2Vzc2l2ZSBkeW5hc3RpZXMgYnVpbHQgYW5kIG1haW50YWluZWQgbXVsdGlwbGUgc3RyZXRjaGVzIG9mIGJvcmRlciB3YWxscy4gVGhlIGJlc3Qta25vd24gc2VjdGlvbnMgb2YgdGhlIHdhbGwgd2VyZSBidWlsdCBieSB0aGUgTWluZyBkeW5hc3R5ICgxMzY44oCTMTY0NCkuJyxcclxuXHR9LFxyXG5cdHtcclxuXHRcdGlkOjEsXHJcblx0XHR0aXRsZTonTXQuIEZ1amkgb2Ygd2ludGVyIHRoYXQgc2VlbiBmcm9tIE9zaGlubyBIYWtrYWkuJyxcclxuXHRcdGltYWdlTGluazonaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi8xLzFiLzA4MDEwM19oYWtrYWlfZnVqaS5qcGcvMTI4MHB4LTA4MDEwM19oYWtrYWlfZnVqaS5qcGcnLFxyXG5cdFx0YWRkcmVzczonRnVqaSwgU2hpenVva2EnLFxyXG5cdFx0ZGVzY3JpcHRpb246YE1vdW50IEZ1amkgKOWvjOWjq+WxsSwgRnVqaXNhbiwgbG9jYXRlZCBvbiB0aGUgaXNsYW5kIG9mIEhvbnNoxassIGlzIHRoZSBoaWdoZXN0IG1vdW50YWluIGluIEphcGFuLCBzdGFuZGluZyAzLDc3Ni4yNCBtICgxMiwzODkuMiBmdCkuIEl0IGlzIHRoZSBzZWNvbmQtaGlnaGVzdCB2b2xjYW5vIGxvY2F0ZWQgb24gYW4gaXNsYW5kIGluIEFzaWEgKGFmdGVyIE1vdW50IEtlcmluY2kgb24gdGhlIGlzbGFuZCBvZiBTdW1hdHJhKSwgYW5kIHNldmVudGgtaGlnaGVzdCBwZWFrIG9mIGFuIGlzbGFuZCBvbiBFYXJ0aC5Nb3VudCBGdWppIGlzIGFuIGFjdGl2ZSBzdHJhdG92b2xjYW5vIHRoYXQgbGFzdCBlcnVwdGVkIGZyb20gMTcwNyB0byAxNzA4LiBUaGUgbW91bnRhaW4gaXMgbG9jYXRlZCBhYm91dCAxMDAga20gKDYyIG1pKSBzb3V0aHdlc3Qgb2YgVG9reW8gYW5kIGlzIHZpc2libGUgZnJvbSB0aGVyZSBvbiBjbGVhciBkYXlzLiBNb3VudCBGdWppJ3MgZXhjZXB0aW9uYWxseSBzeW1tZXRyaWNhbCBjb25lLCB3aGljaCBpcyBjb3ZlcmVkIGluIHNub3cgZm9yIGFib3V0IGZpdmUgbW9udGhzIG9mIHRoZSB5ZWFyLCBpcyBjb21tb25seSB1c2VkIGFzIGEgY3VsdHVyYWwgaWNvbiBvZiBKYXBhbiBhbmQgaXQgaXMgZnJlcXVlbnRseSBkZXBpY3RlZCBpbiBhcnQgYW5kIHBob3RvZ3JhcGh5LCBhcyB3ZWxsIGFzIHZpc2l0ZWQgYnkgc2lnaHRzZWVycyBhbmQgY2xpbWJlcnMuYCxcclxuXHR9LFxyXG5cclxuXHR7XHJcblx0XHRpZDoyLFxyXG5cdFx0dGl0bGU6J0EgY29sbGFnZSBvZiBWZW5pY2U6IGF0IHRoZSB0b3AgbGVmdCBpcyB0aGUgUGlhenphIFNhbiBNYXJjbywgZm9sbG93ZWQgYnkgYSB2aWV3IG9mIHRoZSBjaXR5LCB0aGVuIHRoZSBHcmFuZCBDYW5hbCBhbmQgaW50ZXJpb3Igb2YgTGEgRmVuaWNlLCBhcyB3ZWxsIGFzIHRoZSBpc2xhbmQgb2YgU2FuIEdpb3JnaW8gTWFnZ2lvcmUuJyxcclxuXHRcdGltYWdlTGluazonaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi8xLzFlL0NvbGxhZ2VfVmVuZXppYS5qcGcvMTI4MHB4LUNvbGxhZ2VfVmVuZXppYS5qcGcnLFxyXG5cdFx0YWRkcmVzczonVmVuZXRvJyxcclxuXHRcdGRlc2NyaXB0aW9uOmBWZW5pY2UgaGFzIGJlZW4ga25vd24gYXMgXCJMYSBEb21pbmFudGVcIiwgXCJMYSBTZXJlbmlzc2ltYVwiLCBcIlF1ZWVuIG9mIHRoZSBBZHJpYXRpY1wiLCBcIkNpdHkgb2YgV2F0ZXJcIiwgXCJDaXR5IG9mIE1hc2tzXCIsIFwiQ2l0eSBvZiBCcmlkZ2VzXCIsIFwiVGhlIEZsb2F0aW5nIENpdHlcIiwgYW5kIFwiQ2l0eSBvZiBDYW5hbHNcIi4gVGhlIGxhZ29vbiBhbmQgYSBwYXJ0IG9mIHRoZSBjaXR5IGFyZSBsaXN0ZWQgYXMgYSBVTkVTQ08gV29ybGQgSGVyaXRhZ2UgU2l0ZS4gUGFydHMgb2YgVmVuaWNlIGFyZSByZW5vd25lZCBmb3IgdGhlIGJlYXV0eSBvZiB0aGVpciBzZXR0aW5ncywgdGhlaXIgYXJjaGl0ZWN0dXJlLCBhbmQgYXJ0d29yay5WZW5pY2UgaXMga25vd24gZm9yIHNldmVyYWwgaW1wb3J0YW50IGFydGlzdGljIG1vdmVtZW50c+KAlGVzcGVjaWFsbHkgZHVyaW5nIHRoZSBSZW5haXNzYW5jZSBwZXJpb2TigJRhbmQgaGFzIHBsYXllZCBhbiBpbXBvcnRhbnQgcm9sZSBpbiB0aGUgaGlzdG9yeSBvZiBpbnN0cnVtZW50YWwgYW5kIG9wZXJhdGljIG11c2ljLCBhbmQgaXMgdGhlIGJpcnRocGxhY2Ugb2YgQmFyb3F1ZSBjb21wb3NlcnMgVG9tYXNvIEFsYmlub25pIGFuZCBBbnRvbmlvIFZpdmFsZGkuYCxcclxuXHR9LFxyXG5dXHJcbmNvbnN0IEhvbWVQYWdlID0gKCgpPT57XHJcblx0cmV0dXJuICg8PlxyXG5cdFx0PE1lZXR1cExpc3QgbWVldHVwcz17ZHVtbXlEYXRhfT48L01lZXR1cExpc3Q+XHJcblx0PC8+KVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=