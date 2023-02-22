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
        var hx = document.createElement("h3");
        var p = document.createElement("p");
        var div = document.createElement('div');
        var secondP = document.createElement("p");
        var hr = document.createElement("hr");
        var likesP = document.createElement('p');
        var secondDiv = document.createElement('div');
        var likesButton = document.createElement('button');
        var priceP = document.createElement('p');
        var priceLikeDiv = document.createElement('div');
        // manage elements text content
        secondP.textContent = "rate: ".concat(data[product].rating.rate);
        p.textContent = "".concat(data[product].rating.count, " reviews");
        secondP.textContent = "rate: ".concat(data[product].rating.rate);
        p.textContent = "".concat(data[product].rating.count, " reviews");
        img.src = data[product].image;
        priceLikeDiv.classList.add("priceLike");
        hx.textContent = "".concat(data[product].title);
        secondDiv.classList.add("cardDataContainer");
        div.classList.add("ratingDataContainer");
        hx.classList.add("cardTitle");
        priceP.classList.add("priceP");
        likesP.textContent = "".concat(data[product].likes);
        likesButton.addEventListener("click", function () {
            var span = Number(likesP.lastChild.textContent);
            (0,_likesGenerator__WEBPACK_IMPORTED_MODULE_0__.generateLikes)({
                item_id: data[product].id
            });
            likesP.innerHTML = "<span>".concat(span + 1, "</span>");
        });
        likesButton.classList.add('likesButton');
        likesP.classList.add("likesAmount");
        priceP.textContent = "".concat(data[product].price, "$");
        div.appendChild(p);
        div.appendChild(secondP);
        li.appendChild(img);
        li.appendChild(secondDiv);
        secondDiv.appendChild(hx);
        secondDiv.appendChild(div);
        secondDiv.appendChild(hr);
        priceLikeDiv.appendChild(priceP);
        priceLikeDiv.appendChild(likesButton);
        secondDiv.appendChild(priceLikeDiv);
        secondDiv.appendChild(likesP);
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


/***/ }),

/***/ "./src/menuControl.ts":
/*!****************************!*\
  !*** ./src/menuControl.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "navMenu": () => (/* binding */ navMenu)
/* harmony export */ });
var hideShowNavElements = function (nodeLst, show) {
    for (var index = 0; index < nodeLst.length; index++) {
        if (show) {
            nodeLst[index].style.display = "block";
        }
        else {
            nodeLst[index].style.display = "none";
        }
    }
};
var controlUserInfoPage = function () {
    // control user profile menu 
    var normalNavMenu = document.querySelectorAll(".normalNav");
    var userInfoList = document.querySelector(".userInfoList");
    var profileMenuSecondButton = document.querySelector(".secondUserInfoControl");
    userInfoList.style.display = "block";
    hideShowNavElements(normalNavMenu, false);
    profileMenuSecondButton.addEventListener("click", function () {
        hideShowNavElements(normalNavMenu, true);
        userInfoList.style.display = "none";
    });
};
var navMenu = function () {
    // control all mobile menu
    var flag = true;
    var menuButton = document.querySelector(".showNavButton");
    var menu = document.querySelectorAll(".navLink");
    var userInfoList = document.querySelector(".userInfoList");
    userInfoList.style.display = "none";
    window.addEventListener("resize", function () {
        if (screen.width > 768) {
            hideShowNavElements(menu, true);
        }
        else {
            hideShowNavElements(menu, !flag);
        }
    });
    window.addEventListener("load", function () {
        if (screen.width > 768) {
            hideShowNavElements(menu, true);
        }
        else {
            hideShowNavElements(menu, !flag);
        }
    });
    hideShowNavElements(menu, !flag);
    menuButton.addEventListener("click", function () {
        if (flag) {
            menuButton.style.backgroundImage = "url(../src/images/upload.png)";
            hideShowNavElements(menu, flag);
        }
        else {
            hideShowNavElements(menu, flag);
            userInfoList.style.display = "none";
            menuButton.style.backgroundImage = "url(../src/images/arrow-down-sign-to-navigate.png)";
        }
        flag = !flag;
    });
    // control user info menu 
    var profileMenuButton = document.querySelector(".userinfoControl");
    profileMenuButton.addEventListener("click", function () {
        controlUserInfoPage();
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
/* harmony import */ var _menuControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menuControl */ "./src/menuControl.ts");




function component() {
    var element = document.createElement('div');
    var nextPage = document.querySelector('.nextButton');
    var backPage = document.querySelector('.goBack');
    var productList = document.querySelector('.allProductList');
    var start = 0;
    var end = 4;
    (0,_data__WEBPACK_IMPORTED_MODULE_0__.getData)(function (data) {
        (0,_likesGetter__WEBPACK_IMPORTED_MODULE_1__.getLikes)(data, function (items) {
            _addDataToDom__WEBPACK_IMPORTED_MODULE_2__["default"].addToDom(sliceObj(items, start, end));
        });
    });
    nextPage.addEventListener('click', function () {
        start = end;
        end += 4;
        (0,_data__WEBPACK_IMPORTED_MODULE_0__.getData)(function (data) {
            (0,_likesGetter__WEBPACK_IMPORTED_MODULE_1__.getLikes)(data, function (items) {
                backPage.classList.remove('hide');
                if (start < Object.keys(items).length) {
                    productList.innerHTML = '';
                    _addDataToDom__WEBPACK_IMPORTED_MODULE_2__["default"].addToDom(sliceObj(items, start, end));
                }
                else {
                    start -= 4;
                    end -= 4;
                    nextPage.classList.add('hide');
                }
            });
        });
    });
    backPage.addEventListener('click', function () {
        start -= 4;
        end -= 4;
        (0,_data__WEBPACK_IMPORTED_MODULE_0__.getData)(function (data) {
            (0,_likesGetter__WEBPACK_IMPORTED_MODULE_1__.getLikes)(data, function (items) {
                if (start >= 0) {
                    productList.innerHTML = '';
                    _addDataToDom__WEBPACK_IMPORTED_MODULE_2__["default"].addToDom(sliceObj(items, start, end));
                }
                else {
                    start += 4;
                    end += 4;
                    backPage.classList.add('hide');
                }
            });
        });
    });
    (0,_menuControl__WEBPACK_IMPORTED_MODULE_3__.navMenu)();
    return element;
}
var sliceObj = function (obj, start, end) {
    var result = {};
    var firstCounter = start;
    var objKeys = Object.keys(obj);
    for (var item = start; item <= end; item++) {
        if (firstCounter >= end) {
            return result;
        }
        result[objKeys[item]] = obj[objKeys[item]];
        firstCounter++;
    }
    return result;
};
document.body.appendChild(component());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFFckIsT0FBTyxNQUFNLENBQUM7U0FDZjtRQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDM0MsWUFBWSxFQUFFLENBQUM7S0FDaEI7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBRUQsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4cGVyMy8uL3NyYy9hZGREYXRhVG9Eb20udHMiLCJ3ZWJwYWNrOi8vZXhwZXIzLy4vc3JjL2RhdGEudHMiLCJ3ZWJwYWNrOi8vZXhwZXIzLy4vc3JjL2xpa2VzR2VuZXJhdG9yLnRzIiwid2VicGFjazovL2V4cGVyMy8uL3NyYy9saWtlc0dldHRlci50cyIsIndlYnBhY2s6Ly9leHBlcjMvLi9zcmMvbWVudUNvbnRyb2wudHMiLCJ3ZWJwYWNrOi8vZXhwZXIzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4cGVyMy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhwZXIzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhwZXIzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhwZXIzLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdlbmVyYXRlTGlrZXMgfSBmcm9tIFwiLi9saWtlc0dlbmVyYXRvclwiO1xyXG5pbXBvcnQgeyBwcm9kdWN0IH0gZnJvbSBcIi4vdHlwZXMvZGF0YVwiO1xyXG5cclxuY29uc3QgYWRkVG9Eb20gPSAoZGF0YTp7XHJcbiAgICBbaW5kZXg6c3RyaW5nXTpwcm9kdWN0XHJcbn0pPT57XHJcbiAgICBsZXQgcHJvZHVjdExpc3Q6SFRNTFVMaXN0RWxlbWVudCAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFsbFByb2R1Y3RMaXN0XCIpO1xyXG4gICAgZm9yKGNvbnN0IHByb2R1Y3QgIGluIGRhdGEpe1xyXG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgY29uc3QgaHggID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gICAgICAgIGNvbnN0IHA6SFRNTFBhcmFncmFwaEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBzZWNvbmRQOkhUTUxQYXJhZ3JhcGhFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgY29uc3QgaHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHJcIik7XHJcbiAgICAgICAgY29uc3QgbGlrZXNQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGNvbnN0IHNlY29uZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IGxpa2VzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgY29uc3QgcHJpY2VQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGNvbnN0IHByaWNlTGlrZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIC8vIG1hbmFnZSBlbGVtZW50cyB0ZXh0IGNvbnRlbnRcclxuXHJcbiAgICAgICAgc2Vjb25kUC50ZXh0Q29udGVudCA9IGByYXRlOiAke2RhdGFbcHJvZHVjdF0ucmF0aW5nLnJhdGV9YDtcclxuICAgICAgICBwLnRleHRDb250ZW50ID0gYCR7ZGF0YVtwcm9kdWN0XS5yYXRpbmcuY291bnR9IHJldmlld3NgO1xyXG4gICAgICAgIHNlY29uZFAudGV4dENvbnRlbnQgPSBgcmF0ZTogJHtkYXRhW3Byb2R1Y3RdLnJhdGluZy5yYXRlfWA7XHJcbiAgICAgICAgcC50ZXh0Q29udGVudCA9IGAke2RhdGFbcHJvZHVjdF0ucmF0aW5nLmNvdW50fSByZXZpZXdzYDtcclxuICAgICAgICBpbWcuc3JjID0gZGF0YVtwcm9kdWN0XS5pbWFnZTtcclxuICAgICAgICBwcmljZUxpa2VEaXYuY2xhc3NMaXN0LmFkZChcInByaWNlTGlrZVwiKTtcclxuICAgICAgICBoeC50ZXh0Q29udGVudCA9IGAke2RhdGFbcHJvZHVjdF0udGl0bGV9YDtcclxuICAgICAgICBzZWNvbmREaXYuY2xhc3NMaXN0LmFkZChcImNhcmREYXRhQ29udGFpbmVyXCIpXHJcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJyYXRpbmdEYXRhQ29udGFpbmVyXCIpXHJcbiAgICAgICAgaHguY2xhc3NMaXN0LmFkZChcImNhcmRUaXRsZVwiKVxyXG4gICAgICAgIHByaWNlUC5jbGFzc0xpc3QuYWRkKFwicHJpY2VQXCIpO1xyXG4gICAgICAgIGxpa2VzUC50ZXh0Q29udGVudCA9IGAke2RhdGFbcHJvZHVjdF0ubGlrZXN9YFxyXG4gICAgICAgIGxpa2VzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57XHJcbiAgICAgICAgICAgIGNvbnN0IHNwYW4gPSBOdW1iZXIobGlrZXNQLmxhc3RDaGlsZC50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgICAgIGdlbmVyYXRlTGlrZXMoe1xyXG4gICAgICAgICAgICAgICAgaXRlbV9pZDpkYXRhW3Byb2R1Y3RdLmlkXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGxpa2VzUC5pbm5lckhUTUwgPSBgPHNwYW4+JHtzcGFuKzF9PC9zcGFuPmBcclxuICAgICAgICB9KVxyXG4gICAgICAgIGxpa2VzQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2xpa2VzQnV0dG9uJyk7XHJcbiAgICAgICAgbGlrZXNQLmNsYXNzTGlzdC5hZGQoXCJsaWtlc0Ftb3VudFwiKVxyXG4gICAgICAgIHByaWNlUC50ZXh0Q29udGVudCA9IGAke2RhdGFbcHJvZHVjdF0ucHJpY2V9JGBcclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQocCk7XHJcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHNlY29uZFApO1xyXG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGltZyk7XHJcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQoc2Vjb25kRGl2KVxyXG4gICAgICAgIHNlY29uZERpdi5hcHBlbmRDaGlsZChoeCk7XHJcbiAgICAgICAgc2Vjb25kRGl2LmFwcGVuZENoaWxkKGRpdik7XHJcbiAgICAgICAgc2Vjb25kRGl2LmFwcGVuZENoaWxkKGhyKTtcclxuICAgICAgICBwcmljZUxpa2VEaXYuYXBwZW5kQ2hpbGQocHJpY2VQKTtcclxuICAgICAgICBwcmljZUxpa2VEaXYuYXBwZW5kQ2hpbGQobGlrZXNCdXR0b24pO1xyXG4gICAgICAgIHNlY29uZERpdi5hcHBlbmRDaGlsZChwcmljZUxpa2VEaXYpO1xyXG4gICAgICAgIHNlY29uZERpdi5hcHBlbmRDaGlsZChsaWtlc1ApXHJcbiAgICAgICAgcHJvZHVjdExpc3QuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgYWRkVG9Eb21cclxufSIsImltcG9ydCB7IHByb2R1Y3QgfSBmcm9tIFwiLi90eXBlcy9kYXRhXCJcclxuXHJcbmV4cG9ydCBjb25zdCBnZXREYXRhID0gKGNhbGw6KGRhdGE6cHJvZHVjdFtdKT0+dm9pZCk9PntcclxuICAgIGZldGNoKFwiaHR0cHM6Ly9mYWtlc3RvcmVhcGkuY29tL3Byb2R1Y3RzXCIpLnRoZW4oKHJlcyk9PlxyXG4gICAgICAgIHJlcy5qc29uKClcclxuICAgICkudGhlbigoanNvbik9PntcclxuICAgICAgICBjYWxsKGpzb24pXHJcbiAgICB9KVxyXG59IiwiY29uc3QgbGlrZXNVcmwgPSBcImh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL3pTZnFsY3I2WnFSQ2RkazEwV0hWL2xpa2VzXCI7XHJcbmV4cG9ydCBjb25zdCBnZW5lcmF0ZUxpa2VzID0gKGRhdGE6e1xyXG4gICAgaXRlbV9pZDpudW1iZXJcclxufSk9PntcclxuICAgIGZldGNoKGxpa2VzVXJsLHtcclxuICAgICAgICBtZXRob2Q6XCJQT1NUXCIsXHJcbiAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgYm9keTpKU09OLnN0cmluZ2lmeShkYXRhKVxyXG4gICAgfSkudGhlbigocmVzKT0+e1xyXG4gICAgICAgIGlmKCFyZXMub2spe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn07IiwiaW1wb3J0IHsgcHJvZHVjdCB9IGZyb20gXCIuL3R5cGVzL2RhdGFcIjtcclxuXHJcbmNvbnN0IGxpa2VzVXJsID0gXCJodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy96U2ZxbGNyNlpxUkNkZGsxMFdIVi9saWtlcy9cIjtcclxuY29uc3QgZ2V0TGlrZXNEYXRhID0gIGFzeW5jICgpID0+e1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2gobGlrZXNVcmwpO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcclxuICAgIHJldHVybiBkYXRhXHJcbn1cclxuZXhwb3J0IGNvbnN0IGdldExpa2VzID0gIChwcm9kdWN0RGF0YTpwcm9kdWN0W10sY2FsbGZuOihyZXN1bHQ6e1xyXG4gICAgW2luZGV4OnN0cmluZ106cHJvZHVjdFxyXG59KT0+dm9pZCk9PntcclxuICAgIGNvbnN0IGZpbmFsRGF0YT0gZ2V0TGlrZXNEYXRhKCk7XHJcbiAgICBcclxuICAgIGZpbmFsRGF0YS50aGVuKChpdGVtczp7aXRlbV9pZDpudW1iZXIsbGlrZXM6bnVtYmVyfVtdICk9PntcclxuXHJcbiAgICAgICAgY29uc3QgcmVzdWx0OntcclxuICAgICAgICAgICAgW2luZGV4OnN0cmluZ106cHJvZHVjdFxyXG4gICAgICAgIH0gPSB7fVxyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7aTxwcm9kdWN0RGF0YS5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgcmVzdWx0W2Ake3Byb2R1Y3REYXRhW2ldLmlkfWBdID0gey4uLnByb2R1Y3REYXRhW2ldLGxpa2VzOjB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IobGV0IGkgPTA7aTxpdGVtcy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgICAgIHJlc3VsdFtpdGVtc1tpXS5pdGVtX2lkXS5saWtlcyA9IGl0ZW1zW2ldLmxpa2VzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYWxsZm4ocmVzdWx0KTtcclxuICAgIH0pXHJcbn0iLCJjb25zdCBoaWRlU2hvd05hdkVsZW1lbnRzID0gKG5vZGVMc3Q6Tm9kZUxpc3RPZjxIVE1MQW5jaG9yRWxlbWVudD4sc2hvdzpib29sZWFuKT0+e1xyXG4gICAgZm9yKGxldCBpbmRleCA9IDA7aW5kZXg8bm9kZUxzdC5sZW5ndGggO2luZGV4Kyspe1xyXG4gICAgICAgIGlmKHNob3cpe1xyXG4gICAgICAgICAgICBub2RlTHN0W2luZGV4XS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgbm9kZUxzdFtpbmRleF0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5jb25zdCBjb250cm9sVXNlckluZm9QYWdlID0gKCk9PntcclxuIC8vIGNvbnRyb2wgdXNlciBwcm9maWxlIG1lbnUgXHJcbiBjb25zdCBub3JtYWxOYXZNZW51Ok5vZGVMaXN0T2Y8SFRNTEFuY2hvckVsZW1lbnQ+ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ub3JtYWxOYXZcIik7XHJcbiBjb25zdCB1c2VySW5mb0xpc3Q6SFRNTFVMaXN0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXNlckluZm9MaXN0XCIpO1xyXG4gY29uc3QgcHJvZmlsZU1lbnVTZWNvbmRCdXR0b246SFRNTEJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlY29uZFVzZXJJbmZvQ29udHJvbFwiKTtcclxuXHJcbiB1c2VySW5mb0xpc3Quc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuIGhpZGVTaG93TmF2RWxlbWVudHMobm9ybWFsTmF2TWVudSxmYWxzZSk7XHJcblxyXG4gcHJvZmlsZU1lbnVTZWNvbmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PntcclxuICAgICAgICAgaGlkZVNob3dOYXZFbGVtZW50cyhub3JtYWxOYXZNZW51LHRydWUpO1xyXG4gICAgICAgICB1c2VySW5mb0xpc3Quc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXHJcbiB9KTtcclxuIFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbmF2TWVudSA9ICgpPT57XHJcbiAgICAvLyBjb250cm9sIGFsbCBtb2JpbGUgbWVudVxyXG4gICAgbGV0IGZsYWc6Ym9vbGVhbiA9IHRydWU7XHJcbiAgICBjb25zdCBtZW51QnV0dG9uOkhUTUxCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaG93TmF2QnV0dG9uXCIpO1xyXG4gICAgY29uc3QgbWVudTpOb2RlTGlzdE9mPEhUTUxBbmNob3JFbGVtZW50PiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2TGlua1wiKTtcclxuICAgIGNvbnN0IHVzZXJJbmZvTGlzdDpIVE1MVUxpc3RFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51c2VySW5mb0xpc3RcIik7XHJcbiAgICB1c2VySW5mb0xpc3Quc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwoKT0+e1xyXG4gICAgICAgIGlmKHNjcmVlbi53aWR0aCA+IDc2OCl7XHJcbiAgICAgICAgICAgIGhpZGVTaG93TmF2RWxlbWVudHMobWVudSx0cnVlKTtcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIGhpZGVTaG93TmF2RWxlbWVudHMobWVudSwhZmxhZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCgpPT57XHJcbiAgICAgICAgaWYoc2NyZWVuLndpZHRoID4gNzY4KXtcclxuICAgICAgICAgICAgaGlkZVNob3dOYXZFbGVtZW50cyhtZW51LHRydWUpO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgaGlkZVNob3dOYXZFbGVtZW50cyhtZW51LCFmbGFnKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgaGlkZVNob3dOYXZFbGVtZW50cyhtZW51LCFmbGFnKVxyXG4gICAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xyXG4gICAgICAgIGlmKGZsYWcpe1xyXG4gICAgICAgICAgICBtZW51QnV0dG9uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKC4uL3NyYy9pbWFnZXMvdXBsb2FkLnBuZylcIjtcclxuICAgICAgXHJcbiAgICAgICAgICAgIGhpZGVTaG93TmF2RWxlbWVudHMobWVudSxmbGFnKTtcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIGhpZGVTaG93TmF2RWxlbWVudHMobWVudSxmbGFnKTtcclxuICAgICAgICAgICAgdXNlckluZm9MaXN0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgbWVudUJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCguLi9zcmMvaW1hZ2VzL2Fycm93LWRvd24tc2lnbi10by1uYXZpZ2F0ZS5wbmcpXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgZmxhZyA9ICFmbGFnXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBjb250cm9sIHVzZXIgaW5mbyBtZW51IFxyXG4gICAgXHJcbiAgICBjb25zdCBwcm9maWxlTWVudUJ1dHRvbjpIVE1MQnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXNlcmluZm9Db250cm9sXCIpO1xyXG4gICAgcHJvZmlsZU1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PntcclxuICAgICAgICAgICAgY29udHJvbFVzZXJJbmZvUGFnZSgpO1xyXG4gICAgfSk7XHJcbiAgIFxyXG59XHJcblxyXG5cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IGdldERhdGEgfSBmcm9tICcuL2RhdGEnO1xyXG5pbXBvcnQgeyBnZXRMaWtlcyB9IGZyb20gJy4vbGlrZXNHZXR0ZXInO1xyXG5pbXBvcnQgZG9tRnVuY3Rpb3MgZnJvbSAnLi9hZGREYXRhVG9Eb20nO1xyXG5pbXBvcnQgeyBuYXZNZW51IH0gZnJvbSAnLi9tZW51Q29udHJvbCc7XHJcbmltcG9ydCB7IHByb2R1Y3RPYmplY3QgfSBmcm9tICcuL3R5cGVzL2RhdGEnO1xyXG5cclxuICBmdW5jdGlvbiBjb21wb25lbnQoKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBuZXh0UGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXh0QnV0dG9uJyk7XHJcbiAgICBjb25zdCBiYWNrUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nb0JhY2snKTtcclxuICAgIGNvbnN0IHByb2R1Y3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbFByb2R1Y3RMaXN0Jyk7XHJcbiAgICBsZXQgc3RhcnQgPSAwO1xyXG4gICAgbGV0IGVuZCA9IDQ7XHJcbiAgICBnZXREYXRhKChkYXRhKT0+e1xyXG4gICAgICBnZXRMaWtlcyhkYXRhLChpdGVtcyk9PntcclxuICAgICAgICBkb21GdW5jdGlvcy5hZGRUb0RvbShzbGljZU9iaihpdGVtcyxzdGFydCxlbmQpKTtcclxuICAgICAgfSlcclxuICAgIH0pO1xyXG4gICAgbmV4dFBhZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XHJcbiAgICAgIHN0YXJ0ID0gZW5kO1xyXG4gICAgICBlbmQrPTQ7XHJcbiAgICAgIGdldERhdGEoKGRhdGEpPT57XHJcbiAgICAgICAgZ2V0TGlrZXMoZGF0YSwoaXRlbXMpPT57XHJcbiAgICAgICAgICBiYWNrUGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcclxuICAgICAgICAgIGlmKHN0YXJ0IDwgT2JqZWN0LmtleXMoaXRlbXMpLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgcHJvZHVjdExpc3QuaW5uZXJIVE1MID0gJydcclxuICAgICAgICAgICAgICBkb21GdW5jdGlvcy5hZGRUb0RvbShzbGljZU9iaihpdGVtcyxzdGFydCxlbmQpKTtcclxuICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgc3RhcnQtPTQ7XHJcbiAgICAgICAgICAgIGVuZC09NDtcclxuICAgICAgICAgICAgbmV4dFBhZ2UuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgYmFja1BhZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XHJcbiAgICAgIHN0YXJ0IC09NDtcclxuICAgICAgZW5kLT00O1xyXG4gICAgICBnZXREYXRhKChkYXRhKT0+e1xyXG4gICAgICAgIGdldExpa2VzKGRhdGEsKGl0ZW1zKT0+e1xyXG4gICAgICAgICAgaWYoc3RhcnQgPj0gMCl7XHJcbiAgICAgICAgICAgICAgcHJvZHVjdExpc3QuaW5uZXJIVE1MID0gJydcclxuICAgICAgICAgICAgICBkb21GdW5jdGlvcy5hZGRUb0RvbShzbGljZU9iaihpdGVtcyxzdGFydCxlbmQpKTtcclxuICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgc3RhcnQrPTQ7XHJcbiAgICAgICAgICAgIGVuZCs9NDtcclxuICAgICAgICAgICAgYmFja1BhZ2UuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIG5hdk1lbnUoKTtcclxuICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICBjb25zdCBzbGljZU9iaiA9IChvYmo6cHJvZHVjdE9iamVjdCxzdGFydDpudW1iZXIsZW5kOm51bWJlcik6cHJvZHVjdE9iamVjdD0+e1xyXG4gICAgY29uc3QgcmVzdWx0OnByb2R1Y3RPYmplY3QgPSB7fTtcclxuICAgIGxldCBmaXJzdENvdW50ZXI6bnVtYmVyID0gc3RhcnQ7XHJcbiAgICBjb25zdCBvYmpLZXlzID0gIE9iamVjdC5rZXlzKG9iaik7XHJcbiAgICBmb3IobGV0IGl0ZW0gPXN0YXJ0O2l0ZW0gPD0gZW5kO2l0ZW0rKyl7XHJcbiAgICAgIGlmKGZpcnN0Q291bnRlciA+PSBlbmQpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgIH1cclxuICAgICAgcmVzdWx0W29iaktleXNbaXRlbV1dID0gb2JqW29iaktleXNbaXRlbV1dO1xyXG4gICAgICBmaXJzdENvdW50ZXIrKztcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9