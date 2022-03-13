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
  image: 'https://cdn.britannica.com/89/179589-138-3EE27C94/Overview-Great-Wall-of-China.jpg?w=800&h=450&c=crop',
  address: 'Jinshanling',
  description: 'The Great Wall of China (traditional Chinese: 萬里長城; simplified Chinese: 万里长城; pinyin: Wànlǐ Chángchéng) is a series of fortifications that were built across the historical northern borders of ancient Chinese states and Imperial China as protection against various nomadic groups from the Eurasian Steppe. Several walls were built from as early as the 7th century BC, with selective stretches later joined together by Qin Shi Huang (220–206 BC), the first emperor of China. Little of the Qin wall remains. Later on, many successive dynasties built and maintained multiple stretches of border walls. The best-known sections of the wall were built by the Ming dynasty (1368–1644).'
}, {
  id: 1,
  title: 'Mt. Fuji of winter that seen from Oshino Hakkai.',
  image: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/080103_hakkai_fuji.jpg',
  address: 'Fuji, Shizuoka',
  description: "Mount Fuji (\u5BCC\u58EB\u5C71, Fujisan, located on the island of Honsh\u016B, is the highest mountain in Japan, standing 3,776.24 m (12,389.2 ft). It is the second-highest volcano located on an island in Asia (after Mount Kerinci on the island of Sumatra), and seventh-highest peak of an island on Earth.Mount Fuji is an active stratovolcano that last erupted from 1707 to 1708. The mountain is located about 100 km (62 mi) southwest of Tokyo and is visible from there on clear days. Mount Fuji's exceptionally symmetrical cone, which is covered in snow for about five months of the year, is commonly used as a cultural icon of Japan and it is frequently depicted in art and photography, as well as visited by sightseers and climbers."
}, {
  id: 2,
  title: 'A collage of Venice: at the top left is the Piazza San Marco, followed by a view of the city, then the Grand Canal and interior of La Fenice, as well as the island of San Giorgio Maggiore.',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Collage_Venezia.jpg/1280px-Collage_Venezia.jpg',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiZHVtbXlEYXRhIiwiaWQiLCJ0aXRsZSIsImltYWdlIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiSG9tZVBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNQSxTQUFTLEdBQUcsQ0FDakI7QUFDQ0MsSUFBRSxFQUFDLENBREo7QUFFQ0MsT0FBSyxFQUFDLHdDQUZQO0FBR0NDLE9BQUssRUFBQyx1R0FIUDtBQUlDQyxTQUFPLEVBQUMsYUFKVDtBQUtDQyxhQUFXLEVBQUM7QUFMYixDQURpQixFQVFqQjtBQUNDSixJQUFFLEVBQUMsQ0FESjtBQUVDQyxPQUFLLEVBQUMsa0RBRlA7QUFHQ0MsT0FBSyxFQUFDLDRFQUhQO0FBSUNDLFNBQU8sRUFBQyxnQkFKVDtBQUtDQyxhQUFXO0FBTFosQ0FSaUIsRUFnQmpCO0FBQ0NKLElBQUUsRUFBQyxDQURKO0FBRUNDLE9BQUssRUFBQyw4TEFGUDtBQUdDQyxPQUFLLEVBQUMsMEdBSFA7QUFJQ0MsU0FBTyxFQUFDLFFBSlQ7QUFLQ0MsYUFBVztBQUxaLENBaEJpQixDQUFsQjs7QUF3QkEsSUFBTUMsUUFBUSxHQUFJLFNBQVpBLFFBQVksR0FBSTtBQUNyQixzQkFBUTtBQUFBLDJCQUNQLHFFQUFDLHlFQUFEO0FBQVksYUFBTyxFQUFFTjtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRE8sbUJBQVI7QUFHQSxDQUpEOztLQUFNTSxRO0FBTVNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjgyYTVkNzE0ZTExOWI4YTEwNDY4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgIE1lZXR1cExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cExpc3QuanMnO1xyXG5cclxuY29uc3QgZHVtbXlEYXRhID0gW1xyXG5cdHtcclxuXHRcdGlkOjAsXHJcblx0XHR0aXRsZTonVGhlIEdyZWF0IFdhbGwgb2YgQ2hpbmEgYXQgSmluc2hhbmxpbmcnLFxyXG5cdFx0aW1hZ2U6J2h0dHBzOi8vY2RuLmJyaXRhbm5pY2EuY29tLzg5LzE3OTU4OS0xMzgtM0VFMjdDOTQvT3ZlcnZpZXctR3JlYXQtV2FsbC1vZi1DaGluYS5qcGc/dz04MDAmaD00NTAmYz1jcm9wJyxcclxuXHRcdGFkZHJlc3M6J0ppbnNoYW5saW5nJyxcclxuXHRcdGRlc2NyaXB0aW9uOidUaGUgR3JlYXQgV2FsbCBvZiBDaGluYSAodHJhZGl0aW9uYWwgQ2hpbmVzZTog6JCs6YeM6ZW35Z+OOyBzaW1wbGlmaWVkIENoaW5lc2U6IOS4h+mHjOmVv+WfjjsgcGlueWluOiBXw6BubMeQIENow6FuZ2Now6luZykgaXMgYSBzZXJpZXMgb2YgZm9ydGlmaWNhdGlvbnMgdGhhdCB3ZXJlIGJ1aWx0IGFjcm9zcyB0aGUgaGlzdG9yaWNhbCBub3J0aGVybiBib3JkZXJzIG9mIGFuY2llbnQgQ2hpbmVzZSBzdGF0ZXMgYW5kIEltcGVyaWFsIENoaW5hIGFzIHByb3RlY3Rpb24gYWdhaW5zdCB2YXJpb3VzIG5vbWFkaWMgZ3JvdXBzIGZyb20gdGhlIEV1cmFzaWFuIFN0ZXBwZS4gU2V2ZXJhbCB3YWxscyB3ZXJlIGJ1aWx0IGZyb20gYXMgZWFybHkgYXMgdGhlIDd0aCBjZW50dXJ5IEJDLCB3aXRoIHNlbGVjdGl2ZSBzdHJldGNoZXMgbGF0ZXIgam9pbmVkIHRvZ2V0aGVyIGJ5IFFpbiBTaGkgSHVhbmcgKDIyMOKAkzIwNiBCQyksIHRoZSBmaXJzdCBlbXBlcm9yIG9mIENoaW5hLiBMaXR0bGUgb2YgdGhlIFFpbiB3YWxsIHJlbWFpbnMuIExhdGVyIG9uLCBtYW55IHN1Y2Nlc3NpdmUgZHluYXN0aWVzIGJ1aWx0IGFuZCBtYWludGFpbmVkIG11bHRpcGxlIHN0cmV0Y2hlcyBvZiBib3JkZXIgd2FsbHMuIFRoZSBiZXN0LWtub3duIHNlY3Rpb25zIG9mIHRoZSB3YWxsIHdlcmUgYnVpbHQgYnkgdGhlIE1pbmcgZHluYXN0eSAoMTM2OOKAkzE2NDQpLicsXHJcblx0fSxcclxuXHR7XHJcblx0XHRpZDoxLFxyXG5cdFx0dGl0bGU6J010LiBGdWppIG9mIHdpbnRlciB0aGF0IHNlZW4gZnJvbSBPc2hpbm8gSGFra2FpLicsXHJcblx0XHRpbWFnZTonaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy8xLzFiLzA4MDEwM19oYWtrYWlfZnVqaS5qcGcnLFxyXG5cdFx0YWRkcmVzczonRnVqaSwgU2hpenVva2EnLFxyXG5cdFx0ZGVzY3JpcHRpb246YE1vdW50IEZ1amkgKOWvjOWjq+WxsSwgRnVqaXNhbiwgbG9jYXRlZCBvbiB0aGUgaXNsYW5kIG9mIEhvbnNoxassIGlzIHRoZSBoaWdoZXN0IG1vdW50YWluIGluIEphcGFuLCBzdGFuZGluZyAzLDc3Ni4yNCBtICgxMiwzODkuMiBmdCkuIEl0IGlzIHRoZSBzZWNvbmQtaGlnaGVzdCB2b2xjYW5vIGxvY2F0ZWQgb24gYW4gaXNsYW5kIGluIEFzaWEgKGFmdGVyIE1vdW50IEtlcmluY2kgb24gdGhlIGlzbGFuZCBvZiBTdW1hdHJhKSwgYW5kIHNldmVudGgtaGlnaGVzdCBwZWFrIG9mIGFuIGlzbGFuZCBvbiBFYXJ0aC5Nb3VudCBGdWppIGlzIGFuIGFjdGl2ZSBzdHJhdG92b2xjYW5vIHRoYXQgbGFzdCBlcnVwdGVkIGZyb20gMTcwNyB0byAxNzA4LiBUaGUgbW91bnRhaW4gaXMgbG9jYXRlZCBhYm91dCAxMDAga20gKDYyIG1pKSBzb3V0aHdlc3Qgb2YgVG9reW8gYW5kIGlzIHZpc2libGUgZnJvbSB0aGVyZSBvbiBjbGVhciBkYXlzLiBNb3VudCBGdWppJ3MgZXhjZXB0aW9uYWxseSBzeW1tZXRyaWNhbCBjb25lLCB3aGljaCBpcyBjb3ZlcmVkIGluIHNub3cgZm9yIGFib3V0IGZpdmUgbW9udGhzIG9mIHRoZSB5ZWFyLCBpcyBjb21tb25seSB1c2VkIGFzIGEgY3VsdHVyYWwgaWNvbiBvZiBKYXBhbiBhbmQgaXQgaXMgZnJlcXVlbnRseSBkZXBpY3RlZCBpbiBhcnQgYW5kIHBob3RvZ3JhcGh5LCBhcyB3ZWxsIGFzIHZpc2l0ZWQgYnkgc2lnaHRzZWVycyBhbmQgY2xpbWJlcnMuYCxcclxuXHR9LFxyXG5cclxuXHR7XHJcblx0XHRpZDoyLFxyXG5cdFx0dGl0bGU6J0EgY29sbGFnZSBvZiBWZW5pY2U6IGF0IHRoZSB0b3AgbGVmdCBpcyB0aGUgUGlhenphIFNhbiBNYXJjbywgZm9sbG93ZWQgYnkgYSB2aWV3IG9mIHRoZSBjaXR5LCB0aGVuIHRoZSBHcmFuZCBDYW5hbCBhbmQgaW50ZXJpb3Igb2YgTGEgRmVuaWNlLCBhcyB3ZWxsIGFzIHRoZSBpc2xhbmQgb2YgU2FuIEdpb3JnaW8gTWFnZ2lvcmUuJyxcclxuXHRcdGltYWdlOidodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iLzEvMWUvQ29sbGFnZV9WZW5lemlhLmpwZy8xMjgwcHgtQ29sbGFnZV9WZW5lemlhLmpwZycsXHJcblx0XHRhZGRyZXNzOidWZW5ldG8nLFxyXG5cdFx0ZGVzY3JpcHRpb246YFZlbmljZSBoYXMgYmVlbiBrbm93biBhcyBcIkxhIERvbWluYW50ZVwiLCBcIkxhIFNlcmVuaXNzaW1hXCIsIFwiUXVlZW4gb2YgdGhlIEFkcmlhdGljXCIsIFwiQ2l0eSBvZiBXYXRlclwiLCBcIkNpdHkgb2YgTWFza3NcIiwgXCJDaXR5IG9mIEJyaWRnZXNcIiwgXCJUaGUgRmxvYXRpbmcgQ2l0eVwiLCBhbmQgXCJDaXR5IG9mIENhbmFsc1wiLiBUaGUgbGFnb29uIGFuZCBhIHBhcnQgb2YgdGhlIGNpdHkgYXJlIGxpc3RlZCBhcyBhIFVORVNDTyBXb3JsZCBIZXJpdGFnZSBTaXRlLiBQYXJ0cyBvZiBWZW5pY2UgYXJlIHJlbm93bmVkIGZvciB0aGUgYmVhdXR5IG9mIHRoZWlyIHNldHRpbmdzLCB0aGVpciBhcmNoaXRlY3R1cmUsIGFuZCBhcnR3b3JrLlZlbmljZSBpcyBrbm93biBmb3Igc2V2ZXJhbCBpbXBvcnRhbnQgYXJ0aXN0aWMgbW92ZW1lbnRz4oCUZXNwZWNpYWxseSBkdXJpbmcgdGhlIFJlbmFpc3NhbmNlIHBlcmlvZOKAlGFuZCBoYXMgcGxheWVkIGFuIGltcG9ydGFudCByb2xlIGluIHRoZSBoaXN0b3J5IG9mIGluc3RydW1lbnRhbCBhbmQgb3BlcmF0aWMgbXVzaWMsIGFuZCBpcyB0aGUgYmlydGhwbGFjZSBvZiBCYXJvcXVlIGNvbXBvc2VycyBUb21hc28gQWxiaW5vbmkgYW5kIEFudG9uaW8gVml2YWxkaS5gLFxyXG5cdH0sXHJcbl1cclxuY29uc3QgSG9tZVBhZ2UgPSAoKCk9PntcclxuXHRyZXR1cm4gKDw+XHJcblx0XHQ8TWVldHVwTGlzdCBtZWV0dXBzPXtkdW1teURhdGF9PjwvTWVldHVwTGlzdD5cclxuXHQ8Lz4pXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7Il0sInNvdXJjZVJvb3QiOiIifQ==