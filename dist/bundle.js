/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/addDataToDom.ts":
/*!*****************************!*\
  !*** ./src/addDataToDom.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _likesGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./likesGenerator */ "./src/likesGenerator.ts");

var addToDom = function (data) {
    var productList = document.querySelector(".allProductList");
    var _loop_1 = function (product) {
        var li = document.createElement("li");
        var img = document.createElement("img");
        img.src = data[product].image;
        var hx = document.createElement("h3");
        hx.textContent = "".concat(data[product].title);
        var p = document.createElement("p");
        var div = document.createElement('div');
        var secondP = document.createElement("p");
        secondP.textContent = "rate: ".concat(data[product].rating.rate);
        p.textContent = "".concat(data[product].rating.count, " reviews");
        var hr = document.createElement("hr");
        var likesP = document.createElement('p');
        likesP.innerHTML = "likes: <span>".concat(data[product].likes, "</span>");
        var likesButton = document.createElement('button');
        likesButton.addEventListener("click", function () {
            var span = Number(likesP.lastChild.textContent);
            (0,_likesGenerator__WEBPACK_IMPORTED_MODULE_0__.generateLikes)({
                item_id: data[product].id
            });
            likesP.innerHTML = "likes: <span>".concat(span + 1, "</span>");
        });
        var priceP = document.createElement('p');
        priceP.textContent = "Coast ".concat(data[product].price);
        likesButton.textContent = "Like";
        div.appendChild(p);
        div.appendChild(secondP);
        li.appendChild(img);
        li.appendChild(hx);
        li.appendChild(div);
        li.appendChild(hr);
        li.appendChild(likesP);
        li.appendChild(likesButton);
        productList.appendChild(li);
    };
    for (var product in data) {
        _loop_1(product);
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    addToDom: addToDom
});


/***/ }),

/***/ "./src/data.ts":
/*!*********************!*\
  !*** ./src/data.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getData": () => (/* binding */ getData)
/* harmony export */ });
var getData = function (call) {
    fetch("https://fakestoreapi.com/products").then(function (res) {
        return res.json();
    }).then(function (json) {
        call(json);
    });
};


/***/ }),

/***/ "./src/likesGenerator.ts":
/*!*******************************!*\
  !*** ./src/likesGenerator.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateLikes": () => (/* binding */ generateLikes)
/* harmony export */ });
var likesUrl = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/zSfqlcr6ZqRCddk10WHV/likes";
var generateLikes = function (data) {
    fetch(likesUrl, {
        method: "POST",
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(data)
    }).then(function (res) {
        if (!res.ok) {
            console.log(res);
        }
    });
};


/***/ }),

/***/ "./src/likesGetter.ts":
/*!****************************!*\
  !*** ./src/likesGetter.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLikes": () => (/* binding */ getLikes)
/* harmony export */ });
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var likesUrl = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/zSfqlcr6ZqRCddk10WHV/likes/";
var getLikesData = function () { return __awaiter(void 0, void 0, void 0, function () {
    var res, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch(likesUrl)];
            case 1:
                res = _a.sent();
                return [4 /*yield*/, res.json()];
            case 2:
                data = _a.sent();
                return [2 /*return*/, data];
        }
    });
}); };
var getLikes = function (productData, callfn) {
    var finalData = getLikesData();
    finalData.then(function (items) {
        var result = {};
        for (var i = 0; i < productData.length; i++) {
            result["".concat(productData[i].id)] = __assign(__assign({}, productData[i]), { likes: 0 });
        }
        for (var i = 0; i < items.length; i++) {
            result[items[i].item_id].likes = items[i].likes;
        }
        callfn(result);
    });
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/data.ts");
/* harmony import */ var _likesGetter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./likesGetter */ "./src/likesGetter.ts");
/* harmony import */ var _addDataToDom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addDataToDom */ "./src/addDataToDom.ts");



function component() {
    var element = document.createElement('div');
    (0,_data__WEBPACK_IMPORTED_MODULE_0__.getData)(function (data) {
        (0,_likesGetter__WEBPACK_IMPORTED_MODULE_1__.getLikes)(data, function (items) {
            _addDataToDom__WEBPACK_IMPORTED_MODULE_2__["default"].addToDom(items);
        });
    });
    return element;
}
document.body.appendChild(component());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUMsOENBQU8sQ0FBQyxVQUFDLElBQUk7UUFDWCxzREFBUSxDQUFDLElBQUksRUFBQyxVQUFDLEtBQUs7WUFDbEIsOERBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUIsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDLENBQUM7SUFDSCxPQUFPLE9BQU8sQ0FBQztBQUVqQixDQUFDO0FBRUQsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4cGVyMy8uL3NyYy9hZGREYXRhVG9Eb20udHMiLCJ3ZWJwYWNrOi8vZXhwZXIzLy4vc3JjL2RhdGEudHMiLCJ3ZWJwYWNrOi8vZXhwZXIzLy4vc3JjL2xpa2VzR2VuZXJhdG9yLnRzIiwid2VicGFjazovL2V4cGVyMy8uL3NyYy9saWtlc0dldHRlci50cyIsIndlYnBhY2s6Ly9leHBlcjMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhwZXIzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leHBlcjMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leHBlcjMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leHBlcjMvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2VuZXJhdGVMaWtlcyB9IGZyb20gXCIuL2xpa2VzR2VuZXJhdG9yXCI7XHJcbmltcG9ydCB7IHByb2R1Y3QgfSBmcm9tIFwiLi90eXBlcy9kYXRhXCI7XHJcblxyXG5jb25zdCBhZGRUb0RvbSA9IChkYXRhOntcclxuICAgIFtpbmRleDpzdHJpbmddOnByb2R1Y3RcclxufSk9PntcclxuICAgIGxldCBwcm9kdWN0TGlzdDpIVE1MVUxpc3RFbGVtZW50ICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWxsUHJvZHVjdExpc3RcIik7XHJcbiAgICBmb3IoY29uc3QgcHJvZHVjdCAgaW4gZGF0YSl7XHJcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICBpbWcuc3JjID0gZGF0YVtwcm9kdWN0XS5pbWFnZTtcclxuICAgICAgICBjb25zdCBoeCAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgICAgICAgaHgudGV4dENvbnRlbnQgPSBgJHtkYXRhW3Byb2R1Y3RdLnRpdGxlfWA7XHJcbiAgICAgICAgY29uc3QgcDpIVE1MUGFyYWdyYXBoRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IHNlY29uZFA6SFRNTFBhcmFncmFwaEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICBzZWNvbmRQLnRleHRDb250ZW50ID0gYHJhdGU6ICR7ZGF0YVtwcm9kdWN0XS5yYXRpbmcucmF0ZX1gO1xyXG4gICAgICAgIHAudGV4dENvbnRlbnQgPSBgJHtkYXRhW3Byb2R1Y3RdLnJhdGluZy5jb3VudH0gcmV2aWV3c2A7XHJcbiAgICAgICAgY29uc3QgaHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHJcIik7XHJcbiAgICAgICAgY29uc3QgbGlrZXNQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGxpa2VzUC5pbm5lckhUTUwgPSBgbGlrZXM6IDxzcGFuPiR7ZGF0YVtwcm9kdWN0XS5saWtlc308L3NwYW4+YFxyXG4gICAgICAgIGNvbnN0IGxpa2VzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgbGlrZXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PntcclxuICAgICAgICAgICAgY29uc3Qgc3BhbiA9IE51bWJlcihsaWtlc1AubGFzdENoaWxkLnRleHRDb250ZW50KTtcclxuICAgICAgICAgICAgZ2VuZXJhdGVMaWtlcyh7XHJcbiAgICAgICAgICAgICAgICBpdGVtX2lkOmRhdGFbcHJvZHVjdF0uaWRcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgbGlrZXNQLmlubmVySFRNTCA9IGBsaWtlczogPHNwYW4+JHtzcGFuKzF9PC9zcGFuPmBcclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnN0IHByaWNlUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBwcmljZVAudGV4dENvbnRlbnQgPSBgQ29hc3QgJHtkYXRhW3Byb2R1Y3RdLnByaWNlfWBcclxuICAgICAgICBsaWtlc0J1dHRvbi50ZXh0Q29udGVudCA9IFwiTGlrZVwiXHJcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHApO1xyXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChzZWNvbmRQKTtcclxuICAgICAgICBsaS5hcHBlbmRDaGlsZChpbWcpO1xyXG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGh4KTtcclxuICAgICAgICBsaS5hcHBlbmRDaGlsZChkaXYpO1xyXG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGhyKVxyXG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGxpa2VzUClcclxuICAgICAgICBsaS5hcHBlbmRDaGlsZChsaWtlc0J1dHRvbilcclxuICAgICAgICBwcm9kdWN0TGlzdC5hcHBlbmRDaGlsZChsaSk7XHJcblxyXG5cclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGFkZFRvRG9tXHJcbn0iLCJpbXBvcnQgeyBwcm9kdWN0IH0gZnJvbSBcIi4vdHlwZXMvZGF0YVwiXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RGF0YSA9IChjYWxsOihkYXRhOnByb2R1Y3RbXSk9PnZvaWQpPT57XHJcbiAgICBmZXRjaChcImh0dHBzOi8vZmFrZXN0b3JlYXBpLmNvbS9wcm9kdWN0c1wiKS50aGVuKChyZXMpPT5cclxuICAgICAgICByZXMuanNvbigpXHJcbiAgICApLnRoZW4oKGpzb24pPT57XHJcbiAgICAgICAgY2FsbChqc29uKVxyXG4gICAgfSlcclxufSIsImNvbnN0IGxpa2VzVXJsID0gXCJodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy96U2ZxbGNyNlpxUkNkZGsxMFdIVi9saWtlc1wiO1xyXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVMaWtlcyA9IChkYXRhOntcclxuICAgIGl0ZW1faWQ6bnVtYmVyXHJcbn0pPT57XHJcbiAgICBmZXRjaChsaWtlc1VybCx7XHJcbiAgICAgICAgbWV0aG9kOlwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgIGJvZHk6SlNPTi5zdHJpbmdpZnkoZGF0YSlcclxuICAgIH0pLnRoZW4oKHJlcyk9PntcclxuICAgICAgICBpZighcmVzLm9rKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59OyIsImltcG9ydCB7IHByb2R1Y3QgfSBmcm9tIFwiLi90eXBlcy9kYXRhXCI7XHJcblxyXG5jb25zdCBsaWtlc1VybCA9IFwiaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvelNmcWxjcjZacVJDZGRrMTBXSFYvbGlrZXMvXCI7XHJcbmNvbnN0IGdldExpa2VzRGF0YSA9ICBhc3luYyAoKSA9PntcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGxpa2VzVXJsKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICByZXR1cm4gZGF0YVxyXG59XHJcbmV4cG9ydCBjb25zdCBnZXRMaWtlcyA9ICAocHJvZHVjdERhdGE6cHJvZHVjdFtdLGNhbGxmbjoocmVzdWx0OntcclxuICAgIFtpbmRleDpzdHJpbmddOnByb2R1Y3RcclxufSk9PnZvaWQpPT57XHJcbiAgICBjb25zdCBmaW5hbERhdGE9IGdldExpa2VzRGF0YSgpO1xyXG4gICAgXHJcbiAgICBmaW5hbERhdGEudGhlbigoaXRlbXM6e2l0ZW1faWQ6bnVtYmVyLGxpa2VzOm51bWJlcn1bXSApPT57XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3VsdDp7XHJcbiAgICAgICAgICAgIFtpbmRleDpzdHJpbmddOnByb2R1Y3RcclxuICAgICAgICB9ID0ge31cclxuICAgICAgICBmb3IobGV0IGkgPSAwO2k8cHJvZHVjdERhdGEubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIHJlc3VsdFtgJHtwcm9kdWN0RGF0YVtpXS5pZH1gXSA9IHsuLi5wcm9kdWN0RGF0YVtpXSxsaWtlczowfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGxldCBpID0wO2k8aXRlbXMubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRbaXRlbXNbaV0uaXRlbV9pZF0ubGlrZXMgPSBpdGVtc1tpXS5saWtlcztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FsbGZuKHJlc3VsdCk7XHJcbiAgICB9KVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IGdldERhdGEgfSBmcm9tICcuL2RhdGEnO1xyXG5pbXBvcnQgeyBnZXRMaWtlcyB9IGZyb20gJy4vbGlrZXNHZXR0ZXInO1xyXG5pbXBvcnQgZG9tRnVuY3Rpb3MgZnJvbSAnLi9hZGREYXRhVG9Eb20nO1xyXG4gIGZ1bmN0aW9uIGNvbXBvbmVudCgpIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGdldERhdGEoKGRhdGEpPT57XHJcbiAgICAgIGdldExpa2VzKGRhdGEsKGl0ZW1zKT0+e1xyXG4gICAgICAgIGRvbUZ1bmN0aW9zLmFkZFRvRG9tKGl0ZW1zKTtcclxuICAgICAgfSlcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KCkpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=