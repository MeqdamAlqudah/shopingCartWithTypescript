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
/* harmony import */ var _types_pageType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types/pageType */ "./src/types/pageType.ts");


var addToDom = function (data, pageType) {
    var productList;
    if (pageType === _types_pageType__WEBPACK_IMPORTED_MODULE_1__.pages.all) {
        productList = document.querySelector(".allProductList");
    }
    else if (pageType === _types_pageType__WEBPACK_IMPORTED_MODULE_1__.pages.myProduct) {
        productList = document.querySelector(".myProductList");
    }
    else if (pageType === _types_pageType__WEBPACK_IMPORTED_MODULE_1__.pages.popularProduct) {
        productList = document.querySelector(".popularProductsList");
    }
    productList.innerHTML = '';
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
        var addToMyProductButton = document.createElement('button');
        // manage elements text content
        secondP.textContent = "rate: ".concat(data[product].rating.rate);
        p.textContent = "".concat(data[product].rating.count, " reviews");
        secondP.textContent = "rate: ".concat(data[product].rating.rate);
        p.textContent = "".concat(data[product].rating.count, " reviews");
        img.src = data[product].image;
        priceLikeDiv.classList.add("priceLike");
        hx.textContent = "".concat(data[product].title);
        secondDiv.classList.add("cardDataContainer");
        if (data[product].myProduct) {
            addToMyProductButton.style.backgroundImage = 'url(../src/images/done.png)';
        }
        else {
            addToMyProductButton.style.backgroundImage = 'url(../src/images/addwhite.png)';
        }
        addToMyProductButton.classList.add("addToMyProducts");
        div.classList.add("ratingDataContainer");
        hx.classList.add("cardTitle");
        priceP.classList.add("priceP");
        likesP.textContent = "".concat(data[product].likes);
        likesButton.addEventListener("click", function () {
            var span = Number(likesP.lastChild.textContent);
            (0,_likesGenerator__WEBPACK_IMPORTED_MODULE_0__.generateLikes)({
                item_id: data[product].id
            });
            likesButton.style.backgroundImage = 'url(../src/images/likeDark.png)';
            setTimeout(function () {
                likesButton.style.backgroundImage = 'url(../src/images/like.png)';
            }, 500);
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
        priceLikeDiv.appendChild(addToMyProductButton);
        priceLikeDiv.appendChild(likesButton);
        secondDiv.appendChild(priceLikeDiv);
        secondDiv.appendChild(likesP);
        productList.appendChild(li);
        addToMyProductButton.addEventListener('click', function () {
            var allProducts = JSON.parse(sessionStorage.getItem('allProducts'));
            allProducts[data[product].id].myProduct = !allProducts[data[product].id].myProduct;
            if (allProducts[data[product].id].myProduct) {
                addToMyProductButton.style.backgroundImage = 'url(../src/images/done.png)';
            }
            else {
                if (pageType === _types_pageType__WEBPACK_IMPORTED_MODULE_1__.pages.myProduct) {
                    productList.removeChild(li);
                }
                addToMyProductButton.style.backgroundImage = 'url(../src/images/addwhite.png)';
            }
            sessionStorage.setItem('allProducts', JSON.stringify(allProducts));
        });
    };
    for (var product in data) {
        _loop_1(product);
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    addToDom: addToDom
});


/***/ }),

/***/ "./src/allProductsControll.ts":
/*!************************************!*\
  !*** ./src/allProductsControll.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allProducts": () => (/* binding */ allProducts)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/data.ts");
/* harmony import */ var _likesGetter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./likesGetter */ "./src/likesGetter.ts");
/* harmony import */ var _addDataToDom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addDataToDom */ "./src/addDataToDom.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ "./src/index.ts");
/* harmony import */ var _types_pageType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types/pageType */ "./src/types/pageType.ts");





var allProducts = function () {
    var paginationController = document.querySelector('.paginationController');
    paginationController.innerHTML = "<button class=\"goBack hide\">Go Back <hr></button>\n        <button class=\"nextButton\">Next page <hr></button>";
    var nextPage = document.querySelector('.nextButton');
    var backPage = document.querySelector('.goBack');
    var productList = document.querySelector('.allProductList');
    nextPage.style.display = '';
    backPage.style.display = '';
    // handle apis
    var start = 0;
    var end = 4;
    var finalData;
    (0,_data__WEBPACK_IMPORTED_MODULE_0__.getData)(function (data) {
        (0,_likesGetter__WEBPACK_IMPORTED_MODULE_1__.getLikes)(data, function (items) {
            finalData = items;
            var dataInLocalStorage = JSON.parse(sessionStorage.getItem("allProducts")) || false;
            if (!dataInLocalStorage) {
                for (var item in finalData) {
                    finalData[item]["myProduct"] = false;
                }
            }
            else {
                for (var item in finalData) {
                    if (!dataInLocalStorage[finalData[item].id]) {
                        finalData[item]["myProduct"] = false;
                    }
                    if (dataInLocalStorage[finalData[item].id].myProduct) {
                        finalData[item]["myProduct"] = true;
                    }
                }
            }
            sessionStorage.setItem("allProducts", JSON.stringify(finalData));
            _addDataToDom__WEBPACK_IMPORTED_MODULE_2__["default"].addToDom((0,___WEBPACK_IMPORTED_MODULE_3__.sliceObj)(finalData, start, end), _types_pageType__WEBPACK_IMPORTED_MODULE_4__.pages.all);
        });
    });
    nextPage.addEventListener('click', function () {
        start = end;
        end += 4;
        backPage.classList.remove('hideBackButton');
        if (start < Object.keys(finalData).length) {
            productList.innerHTML = '';
            _addDataToDom__WEBPACK_IMPORTED_MODULE_2__["default"].addToDom((0,___WEBPACK_IMPORTED_MODULE_3__.sliceObj)(finalData, start, end), _types_pageType__WEBPACK_IMPORTED_MODULE_4__.pages.all);
        }
        else {
            start -= 4;
            end -= 4;
            nextPage.classList.add('hideNextButton');
        }
    });
    backPage.addEventListener('click', function () {
        start -= 4;
        end -= 4;
        nextPage.classList.remove('hideNextButton');
        if (start >= 0) {
            productList.innerHTML = '';
            _addDataToDom__WEBPACK_IMPORTED_MODULE_2__["default"].addToDom((0,___WEBPACK_IMPORTED_MODULE_3__.sliceObj)(finalData, start, end), _types_pageType__WEBPACK_IMPORTED_MODULE_4__.pages.all);
        }
        else {
            start += 4;
            end += 4;
            backPage.classList.add('hideBackButton');
        }
    });
};


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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sliceObj": () => (/* binding */ sliceObj)
/* harmony export */ });
/* harmony import */ var _allProductsControll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./allProductsControll */ "./src/allProductsControll.ts");
/* harmony import */ var _menuControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuControl */ "./src/menuControl.ts");
/* harmony import */ var _myProductsControll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./myProductsControll */ "./src/myProductsControll.ts");
/* harmony import */ var _popularProduct__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popularProduct */ "./src/popularProduct.ts");




function component() {
    var element = document.createElement('div');
    // define sections in variables 
    var allProduct = document.querySelector('.All');
    var myProducts = document.querySelector('.Myproducts');
    var poularProducts = document.querySelector('.Popular');
    var nextPage = document.querySelector('.nextButton');
    var backPage = document.querySelector('.goBack');
    //select mini nav buttons 
    var allProductButton = document.querySelector('.all');
    var myProductsButton = document.querySelector('.myproducts');
    var popularProductsButton = document.querySelector('.popular');
    (0,_menuControl__WEBPACK_IMPORTED_MODULE_1__.navMenu)();
    // handle paths
    if (window.location.hash === "" || window.location.hash === "#All") {
        nextPage.replaceWith(nextPage.cloneNode(true));
        backPage.replaceWith(backPage.cloneNode(true));
        (0,_allProductsControll__WEBPACK_IMPORTED_MODULE_0__.allProducts)();
        myProducts.classList.add('hide');
        allProduct.classList.remove('hide');
        poularProducts.classList.add('hide');
        myProductsButton.classList.remove('active');
        allProductButton.classList.add('active');
        popularProductsButton.classList.remove('active');
    }
    else if (window.location.hash === "#Myproducts") {
        nextPage.replaceWith(nextPage.cloneNode(true));
        backPage.replaceWith(backPage.cloneNode(true));
        (0,_myProductsControll__WEBPACK_IMPORTED_MODULE_2__.myProductsControll)();
        myProducts.classList.remove('hide');
        allProduct.classList.add('hide');
        poularProducts.classList.add('hide');
        myProductsButton.classList.add('active');
        allProductButton.classList.remove('active');
        popularProductsButton.classList.remove('active');
    }
    else if (window.location.hash === "#Popular") {
        nextPage.replaceWith(nextPage.cloneNode(true));
        backPage.replaceWith(backPage.cloneNode(true));
        (0,_popularProduct__WEBPACK_IMPORTED_MODULE_3__.popularProduct)();
        myProducts.classList.add('hide');
        allProduct.classList.add('hide');
        poularProducts.classList.remove('hide');
        myProductsButton.classList.remove('active');
        allProductButton.classList.remove('active');
        popularProductsButton.classList.add('active');
    }
    // navigations events 
    allProductButton.addEventListener('click', function () {
        nextPage.replaceWith(nextPage.cloneNode(true));
        backPage.replaceWith(backPage.cloneNode(true));
        (0,_allProductsControll__WEBPACK_IMPORTED_MODULE_0__.allProducts)();
        myProducts.classList.add('hide');
        allProduct.classList.remove('hide');
        poularProducts.classList.add('hide');
        myProductsButton.classList.remove('active');
        allProductButton.classList.add('active');
        popularProductsButton.classList.remove('active');
    });
    myProductsButton.addEventListener('click', function () {
        nextPage.replaceWith(nextPage.cloneNode(true));
        backPage.replaceWith(backPage.cloneNode(true));
        (0,_myProductsControll__WEBPACK_IMPORTED_MODULE_2__.myProductsControll)();
        myProducts.classList.remove('hide');
        allProduct.classList.add('hide');
        poularProducts.classList.add('hide');
        myProductsButton.classList.add('active');
        allProductButton.classList.remove('active');
        popularProductsButton.classList.remove('active');
    });
    popularProductsButton.addEventListener('click', function () {
        nextPage.replaceWith(nextPage.cloneNode(true));
        backPage.replaceWith(backPage.cloneNode(true));
        (0,_popularProduct__WEBPACK_IMPORTED_MODULE_3__.popularProduct)();
        myProducts.classList.add('hide');
        allProduct.classList.add('hide');
        poularProducts.classList.remove('hide');
        myProductsButton.classList.remove('active');
        allProductButton.classList.remove('active');
        popularProductsButton.classList.add('active');
    });
    return element;
}
var sliceObj = function (obj, start, end) {
    var result = {};
    var firstCounter = start;
    var objKeys = Object.keys(obj);
    for (var item = start; item < end; item++) {
        if (firstCounter >= end) {
            return result;
        }
        if (objKeys[item]) {
            result[objKeys[item]] = obj[objKeys[item]];
        }
        firstCounter++;
    }
    return result;
};
document.body.appendChild(component());


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


/***/ }),

/***/ "./src/myProductsControll.ts":
/*!***********************************!*\
  !*** ./src/myProductsControll.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "myProductsControll": () => (/* binding */ myProductsControll)
/* harmony export */ });
/* harmony import */ var _addDataToDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addDataToDom */ "./src/addDataToDom.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./src/index.ts");
/* harmony import */ var _types_pageType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types/pageType */ "./src/types/pageType.ts");



var myProductsControll = function () {
    var paginationController = document.querySelector('.paginationController');
    paginationController.innerHTML = "<button class=\"goBack hide\">Go Back <hr></button>\n        <button class=\"nextButton\">Next page <hr></button>";
    var allProducts = JSON.parse(sessionStorage.getItem("allProducts")) || {};
    var nextPage = document.querySelector('.nextButton');
    var backPage = document.querySelector('.goBack');
    var productList = document.querySelector('.allProductList');
    var isEmpty = Object.keys(allProducts).length > 0 ? true : false;
    // handle apis
    var start = isEmpty && 0;
    var end = Object.keys(allProducts).length;
    var finalData = filterObj(allProducts);
    var resultObj = (0,___WEBPACK_IMPORTED_MODULE_1__.sliceObj)(finalData, start, end);
    if (isEmpty) {
        _addDataToDom__WEBPACK_IMPORTED_MODULE_0__["default"].addToDom(resultObj, _types_pageType__WEBPACK_IMPORTED_MODULE_2__.pages.myProduct);
        nextPage.addEventListener('click', function () {
            start += 4;
            end += 4;
            backPage.classList.remove('hideNextButton');
            if (start < Object.keys(finalData).length) {
                productList.innerHTML = '';
                _addDataToDom__WEBPACK_IMPORTED_MODULE_0__["default"].addToDom((0,___WEBPACK_IMPORTED_MODULE_1__.sliceObj)(finalData, start, end), _types_pageType__WEBPACK_IMPORTED_MODULE_2__.pages.myProduct);
            }
            else {
                start -= 4;
                end -= 4;
                nextPage.classList.add('hideBackButton');
            }
        });
        backPage.addEventListener('click', function () {
            start -= 4;
            end -= 4;
            nextPage.classList.remove('hideNextButton');
            if (start >= 0) {
                productList.innerHTML = '';
                _addDataToDom__WEBPACK_IMPORTED_MODULE_0__["default"].addToDom((0,___WEBPACK_IMPORTED_MODULE_1__.sliceObj)(finalData, start, end), _types_pageType__WEBPACK_IMPORTED_MODULE_2__.pages.myProduct);
            }
            else {
                start += 4;
                end += 4;
                backPage.classList.add('hideBackButton');
            }
        });
    }
};
var filterObj = function (data) {
    var products = Object.keys(data);
    var end = products.length;
    var result = {};
    for (var item = 0; item < end; item++) {
        if (data[products[item]].myProduct) {
            result[products[item]] = data[products[item]];
        }
    }
    return result;
};


/***/ }),

/***/ "./src/popularProduct.ts":
/*!*******************************!*\
  !*** ./src/popularProduct.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "popularProduct": () => (/* binding */ popularProduct)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/data.ts");
/* harmony import */ var _likesGetter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./likesGetter */ "./src/likesGetter.ts");
/* harmony import */ var _addDataToDom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addDataToDom */ "./src/addDataToDom.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ "./src/index.ts");
/* harmony import */ var _types_pageType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types/pageType */ "./src/types/pageType.ts");





var popularProduct = function () {
    var paginationController = document.querySelector('.paginationController');
    paginationController.innerHTML = "<button class=\"goBack hide\">Go Back <hr></button>\n        <button class=\"nextButton\">Next page <hr></button>";
    var nextPage = document.querySelector('.nextButton');
    var backPage = document.querySelector('.goBack');
    var productList = document.querySelector('.allProductList');
    nextPage.style.display = '';
    backPage.style.display = '';
    // handle apis
    var start = 0;
    var end = 4;
    var finalData = {};
    (0,_data__WEBPACK_IMPORTED_MODULE_0__.getData)(function (data) {
        (0,_likesGetter__WEBPACK_IMPORTED_MODULE_1__.getLikes)(data, function (items) {
            for (var item in items) {
                if (items[item].rating.rate > 4) {
                    finalData[item] = items[item];
                }
            }
            _addDataToDom__WEBPACK_IMPORTED_MODULE_2__["default"].addToDom((0,___WEBPACK_IMPORTED_MODULE_3__.sliceObj)(finalData, start, end), _types_pageType__WEBPACK_IMPORTED_MODULE_4__.pages.popularProduct);
        });
    });
    nextPage.addEventListener('click', function () {
        start = end;
        end += 4;
        backPage.classList.remove('hideBackButton');
        if (start < Object.keys(finalData).length) {
            productList.innerHTML = '';
            _addDataToDom__WEBPACK_IMPORTED_MODULE_2__["default"].addToDom((0,___WEBPACK_IMPORTED_MODULE_3__.sliceObj)(finalData, start, end), _types_pageType__WEBPACK_IMPORTED_MODULE_4__.pages.popularProduct);
        }
        else {
            start -= 4;
            end -= 4;
            nextPage.classList.add('hideNextButton');
        }
    });
    backPage.addEventListener('click', function () {
        start -= 4;
        end -= 4;
        nextPage.classList.remove('hideNextButton');
        if (start >= 0) {
            productList.innerHTML = '';
            _addDataToDom__WEBPACK_IMPORTED_MODULE_2__["default"].addToDom((0,___WEBPACK_IMPORTED_MODULE_3__.sliceObj)(finalData, start, end), _types_pageType__WEBPACK_IMPORTED_MODULE_4__.pages.popularProduct);
        }
        else {
            start += 4;
            end += 4;
            backPage.classList.add('hideBackButton');
        }
    });
};


/***/ }),

/***/ "./src/types/pageType.ts":
/*!*******************************!*\
  !*** ./src/types/pageType.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pages": () => (/* binding */ pages)
/* harmony export */ });
var pages;
(function (pages) {
    pages[pages["all"] = 0] = "all";
    pages[pages["myProduct"] = 1] = "myProduct";
    pages[pages["popularProduct"] = 2] = "popularProduct";
})(pages || (pages = {}));


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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFJaEI7Ozs7Ozs7VUNKRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2V4cGVyMy8uL3NyYy9hZGREYXRhVG9Eb20udHMiLCJ3ZWJwYWNrOi8vZXhwZXIzLy4vc3JjL2FsbFByb2R1Y3RzQ29udHJvbGwudHMiLCJ3ZWJwYWNrOi8vZXhwZXIzLy4vc3JjL2RhdGEudHMiLCJ3ZWJwYWNrOi8vZXhwZXIzLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2V4cGVyMy8uL3NyYy9saWtlc0dlbmVyYXRvci50cyIsIndlYnBhY2s6Ly9leHBlcjMvLi9zcmMvbGlrZXNHZXR0ZXIudHMiLCJ3ZWJwYWNrOi8vZXhwZXIzLy4vc3JjL21lbnVDb250cm9sLnRzIiwid2VicGFjazovL2V4cGVyMy8uL3NyYy9teVByb2R1Y3RzQ29udHJvbGwudHMiLCJ3ZWJwYWNrOi8vZXhwZXIzLy4vc3JjL3BvcHVsYXJQcm9kdWN0LnRzIiwid2VicGFjazovL2V4cGVyMy8uL3NyYy90eXBlcy9wYWdlVHlwZS50cyIsIndlYnBhY2s6Ly9leHBlcjMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhwZXIzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leHBlcjMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leHBlcjMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leHBlcjMvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9leHBlcjMvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2V4cGVyMy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2VuZXJhdGVMaWtlcyB9IGZyb20gXCIuL2xpa2VzR2VuZXJhdG9yXCI7XG5pbXBvcnQgeyBwcm9kdWN0IH0gZnJvbSBcIi4vdHlwZXMvZGF0YVwiO1xuaW1wb3J0IHsgcGFnZXMgfSBmcm9tIFwiLi90eXBlcy9wYWdlVHlwZVwiO1xuXG5jb25zdCBhZGRUb0RvbSA9IChkYXRhOntcbiAgICBbaW5kZXg6c3RyaW5nXTpwcm9kdWN0XG59LHBhZ2VUeXBlOm51bWJlcik9PntcbiAgICBsZXQgcHJvZHVjdExpc3Q6SFRNTFVMaXN0RWxlbWVudDtcbiAgICBpZihwYWdlVHlwZSA9PT0gcGFnZXMuYWxsKXtcbiAgICAgICAgcHJvZHVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFsbFByb2R1Y3RMaXN0XCIpO1xuICAgIH1lbHNlIGlmKHBhZ2VUeXBlID09PSBwYWdlcy5teVByb2R1Y3Qpe1xuICAgICAgICBwcm9kdWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubXlQcm9kdWN0TGlzdFwiKTtcbiAgICB9ZWxzZSBpZihwYWdlVHlwZSA9PT0gcGFnZXMucG9wdWxhclByb2R1Y3QpIHtcbiAgICAgICAgcHJvZHVjdExpc3Q9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdWxhclByb2R1Y3RzTGlzdFwiKTtcbiAgICB9XG4gICAgcHJvZHVjdExpc3QuaW5uZXJIVE1MID0gJyc7XG4gICAgZm9yKGNvbnN0IHByb2R1Y3QgIGluIGRhdGEpe1xuICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgY29uc3QgaHggID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgICAgICBjb25zdCBwOkhUTUxQYXJhZ3JhcGhFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBzZWNvbmRQOkhUTUxQYXJhZ3JhcGhFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGNvbnN0IGhyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhyXCIpO1xuICAgICAgICBjb25zdCBsaWtlc1AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IHNlY29uZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBsaWtlc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjb25zdCBwcmljZVAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IHByaWNlTGlrZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBhZGRUb015UHJvZHVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAvLyBtYW5hZ2UgZWxlbWVudHMgdGV4dCBjb250ZW50XG4gICAgICAgIHNlY29uZFAudGV4dENvbnRlbnQgPSBgcmF0ZTogJHtkYXRhW3Byb2R1Y3RdLnJhdGluZy5yYXRlfWA7XG4gICAgICAgIHAudGV4dENvbnRlbnQgPSBgJHtkYXRhW3Byb2R1Y3RdLnJhdGluZy5jb3VudH0gcmV2aWV3c2A7XG4gICAgICAgIHNlY29uZFAudGV4dENvbnRlbnQgPSBgcmF0ZTogJHtkYXRhW3Byb2R1Y3RdLnJhdGluZy5yYXRlfWA7XG4gICAgICAgIHAudGV4dENvbnRlbnQgPSBgJHtkYXRhW3Byb2R1Y3RdLnJhdGluZy5jb3VudH0gcmV2aWV3c2A7XG4gICAgICAgIGltZy5zcmMgPSBkYXRhW3Byb2R1Y3RdLmltYWdlO1xuICAgICAgICBwcmljZUxpa2VEaXYuY2xhc3NMaXN0LmFkZChcInByaWNlTGlrZVwiKTtcbiAgICAgICAgaHgudGV4dENvbnRlbnQgPSBgJHtkYXRhW3Byb2R1Y3RdLnRpdGxlfWA7XG4gICAgICAgIHNlY29uZERpdi5jbGFzc0xpc3QuYWRkKFwiY2FyZERhdGFDb250YWluZXJcIik7XG4gICAgICAgIGlmKGRhdGFbcHJvZHVjdF0ubXlQcm9kdWN0KXtcbiAgICAgICAgYWRkVG9NeVByb2R1Y3RCdXR0b24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybCguLi9zcmMvaW1hZ2VzL2RvbmUucG5nKSc7ICAgXG4gICAgICAgIH1lbHNle1xuICAgICAgICBhZGRUb015UHJvZHVjdEJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKC4uL3NyYy9pbWFnZXMvYWRkd2hpdGUucG5nKSc7XG4gICAgICAgIH1cbiAgICAgICAgYWRkVG9NeVByb2R1Y3RCdXR0b24uY2xhc3NMaXN0LmFkZChcImFkZFRvTXlQcm9kdWN0c1wiKTtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJyYXRpbmdEYXRhQ29udGFpbmVyXCIpO1xuICAgICAgICBoeC5jbGFzc0xpc3QuYWRkKFwiY2FyZFRpdGxlXCIpO1xuICAgICAgICBwcmljZVAuY2xhc3NMaXN0LmFkZChcInByaWNlUFwiKTtcbiAgICAgICAgbGlrZXNQLnRleHRDb250ZW50ID0gYCR7ZGF0YVtwcm9kdWN0XS5saWtlc31gXG4gICAgICAgIGxpa2VzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57XG4gICAgICAgICAgICBjb25zdCBzcGFuID0gTnVtYmVyKGxpa2VzUC5sYXN0Q2hpbGQudGV4dENvbnRlbnQpO1xuICAgICAgICAgICAgZ2VuZXJhdGVMaWtlcyh7XG4gICAgICAgICAgICAgICAgaXRlbV9pZDpkYXRhW3Byb2R1Y3RdLmlkXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgbGlrZXNCdXR0b24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybCguLi9zcmMvaW1hZ2VzL2xpa2VEYXJrLnBuZyknOyAgXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgbGlrZXNCdXR0b24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybCguLi9zcmMvaW1hZ2VzL2xpa2UucG5nKSc7ICBcbiAgICAgICAgICAgIH0sNTAwKVxuICAgICAgICAgICAgbGlrZXNQLmlubmVySFRNTCA9IGA8c3Bhbj4ke3NwYW4rMX08L3NwYW4+YFxuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgbGlrZXNCdXR0b24uY2xhc3NMaXN0LmFkZCgnbGlrZXNCdXR0b24nKTtcbiAgICAgICAgbGlrZXNQLmNsYXNzTGlzdC5hZGQoXCJsaWtlc0Ftb3VudFwiKVxuICAgICAgICBwcmljZVAudGV4dENvbnRlbnQgPSBgJHtkYXRhW3Byb2R1Y3RdLnByaWNlfSRgXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChwKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHNlY29uZFApO1xuICAgICAgICBsaS5hcHBlbmRDaGlsZChpbWcpO1xuICAgICAgICBsaS5hcHBlbmRDaGlsZChzZWNvbmREaXYpXG4gICAgICAgIHNlY29uZERpdi5hcHBlbmRDaGlsZChoeCk7XG4gICAgICAgIHNlY29uZERpdi5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICBzZWNvbmREaXYuYXBwZW5kQ2hpbGQoaHIpO1xuICAgICAgICBwcmljZUxpa2VEaXYuYXBwZW5kQ2hpbGQocHJpY2VQKTtcbiAgICAgICAgcHJpY2VMaWtlRGl2LmFwcGVuZENoaWxkKGFkZFRvTXlQcm9kdWN0QnV0dG9uKTtcbiAgICAgICAgcHJpY2VMaWtlRGl2LmFwcGVuZENoaWxkKGxpa2VzQnV0dG9uKTtcbiAgICAgICAgc2Vjb25kRGl2LmFwcGVuZENoaWxkKHByaWNlTGlrZURpdik7XG4gICAgICAgIHNlY29uZERpdi5hcHBlbmRDaGlsZChsaWtlc1ApXG4gICAgICAgIHByb2R1Y3RMaXN0LmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgYWRkVG9NeVByb2R1Y3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgICAgICBjb25zdCBhbGxQcm9kdWN0cyA9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnYWxsUHJvZHVjdHMnKSk7XG4gICAgICAgICAgICBhbGxQcm9kdWN0c1tkYXRhW3Byb2R1Y3RdLmlkXS5teVByb2R1Y3QgPSAhYWxsUHJvZHVjdHNbZGF0YVtwcm9kdWN0XS5pZF0ubXlQcm9kdWN0O1xuICAgICAgICAgICAgaWYoIGFsbFByb2R1Y3RzW2RhdGFbcHJvZHVjdF0uaWRdLm15UHJvZHVjdCl7XG4gICAgICAgICAgICAgICAgYWRkVG9NeVByb2R1Y3RCdXR0b24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybCguLi9zcmMvaW1hZ2VzL2RvbmUucG5nKSc7ICAgXG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIGlmKHBhZ2VUeXBlID09PSBwYWdlcy5teVByb2R1Y3Qpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdExpc3QucmVtb3ZlQ2hpbGQobGkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYWRkVG9NeVByb2R1Y3RCdXR0b24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybCguLi9zcmMvaW1hZ2VzL2FkZHdoaXRlLnBuZyknO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2FsbFByb2R1Y3RzJyxKU09OLnN0cmluZ2lmeShhbGxQcm9kdWN0cykpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBhZGRUb0RvbVxufSIsImltcG9ydCB7IGdldERhdGEgfSBmcm9tICcuL2RhdGEnO1xuaW1wb3J0IHsgZ2V0TGlrZXMgfSBmcm9tICcuL2xpa2VzR2V0dGVyJztcbmltcG9ydCBkb21GdW5jdGlvcyBmcm9tICcuL2FkZERhdGFUb0RvbSc7XG5pbXBvcnQgeyBzbGljZU9iaiB9IGZyb20gJy4nO1xuaW1wb3J0IHsgcHJvZHVjdE9iamVjdCB9IGZyb20gJy4vdHlwZXMvZGF0YSc7XG5pbXBvcnQgeyBwYWdlcyB9IGZyb20gJy4vdHlwZXMvcGFnZVR5cGUnO1xuXG5leHBvcnQgY29uc3QgYWxsUHJvZHVjdHMgPSAoKT0+e1xuICAgICAgICBjb25zdCBwYWdpbmF0aW9uQ29udHJvbGxlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdpbmF0aW9uQ29udHJvbGxlcicpO1xuICAgICAgICBwYWdpbmF0aW9uQ29udHJvbGxlci5pbm5lckhUTUwgPSBgPGJ1dHRvbiBjbGFzcz1cImdvQmFjayBoaWRlXCI+R28gQmFjayA8aHI+PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJuZXh0QnV0dG9uXCI+TmV4dCBwYWdlIDxocj48L2J1dHRvbj5gO1xuICAgICAgICBjb25zdCBuZXh0UGFnZTpIVE1MQnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXh0QnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IGJhY2tQYWdlOkhUTUxCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdvQmFjaycpO1xuICAgICAgICBjb25zdCBwcm9kdWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGxQcm9kdWN0TGlzdCcpO1xuICAgICAgICBuZXh0UGFnZS5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgICAgIGJhY2tQYWdlLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICAgICAgLy8gaGFuZGxlIGFwaXNcbiAgICAgICAgbGV0IHN0YXJ0ID0gMDtcbiAgICAgICAgbGV0IGVuZCA9IDQ7XG4gICAgICAgIGxldCBmaW5hbERhdGE6cHJvZHVjdE9iamVjdDtcbiAgICAgICAgZ2V0RGF0YSgoZGF0YSk9PntcbiAgICAgICAgZ2V0TGlrZXMoZGF0YSwoaXRlbXMpPT57XG4gICAgICAgICAgICBmaW5hbERhdGEgPSBpdGVtcztcbiAgICAgICAgICAgIGNvbnN0IGRhdGFJbkxvY2FsU3RvcmFnZSA9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImFsbFByb2R1Y3RzXCIpKXx8IGZhbHNlO1xuICAgICAgICAgICAgaWYoIWRhdGFJbkxvY2FsU3RvcmFnZSl7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBpdGVtIGluIGZpbmFsRGF0YSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5hbERhdGFbaXRlbV1bXCJteVByb2R1Y3RcIl0gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgZm9yKGxldCBpdGVtIGluIGZpbmFsRGF0YSl7XG4gICAgICAgICAgICAgICAgaWYoIWRhdGFJbkxvY2FsU3RvcmFnZVtmaW5hbERhdGFbaXRlbV0uaWRdKXtcbiAgICAgICAgICAgICAgICAgICAgZmluYWxEYXRhW2l0ZW1dW1wibXlQcm9kdWN0XCJdID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKGRhdGFJbkxvY2FsU3RvcmFnZVtmaW5hbERhdGFbaXRlbV0uaWRdLm15UHJvZHVjdCl7XG4gICAgICAgICAgICAgICAgICAgIGZpbmFsRGF0YVtpdGVtXVtcIm15UHJvZHVjdFwiXSA9IHRydWU7IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImFsbFByb2R1Y3RzXCIsSlNPTi5zdHJpbmdpZnkoZmluYWxEYXRhKSk7XG4gICAgICAgICAgICBkb21GdW5jdGlvcy5hZGRUb0RvbShzbGljZU9iaihmaW5hbERhdGEsc3RhcnQsZW5kKSxwYWdlcy5hbGwpO1xuICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIG5leHRQYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICAgICAgc3RhcnQgPSBlbmQ7XG4gICAgICAgICAgICBlbmQrPTQ7XG4gICAgICAgICAgICBiYWNrUGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlQmFja0J1dHRvbicpXG4gICAgICAgICAgICBpZihzdGFydCA8IE9iamVjdC5rZXlzKGZpbmFsRGF0YSkubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICBwcm9kdWN0TGlzdC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgICAgICBkb21GdW5jdGlvcy5hZGRUb0RvbShzbGljZU9iaihmaW5hbERhdGEsc3RhcnQsZW5kKSxwYWdlcy5hbGwpO1xuICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgIHN0YXJ0LT00O1xuICAgICAgICAgICAgICAgIGVuZC09NDtcbiAgICAgICAgICAgICAgICBuZXh0UGFnZS5jbGFzc0xpc3QuYWRkKCdoaWRlTmV4dEJ1dHRvbicpXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgXG4gICAgICAgIH0pO1xuICAgICAgICBiYWNrUGFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgICAgIHN0YXJ0IC09NDtcbiAgICAgICAgICAgIGVuZC09NDtcbiAgICAgICAgICAgIG5leHRQYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGVOZXh0QnV0dG9uJylcbiAgICAgICAgICAgIGlmKHN0YXJ0ID49IDApe1xuICAgICAgICAgICAgICAgIHByb2R1Y3RMaXN0LmlubmVySFRNTCA9ICcnXG4gICAgICAgICAgICAgICAgZG9tRnVuY3Rpb3MuYWRkVG9Eb20oc2xpY2VPYmooZmluYWxEYXRhLHN0YXJ0LGVuZCkscGFnZXMuYWxsKTtcbiAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICBzdGFydCs9NDtcbiAgICAgICAgICAgICAgICBlbmQrPTQ7XG4gICAgICAgICAgICAgICAgYmFja1BhZ2UuY2xhc3NMaXN0LmFkZCgnaGlkZUJhY2tCdXR0b24nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcbiBcbn07XG5cbiIsImltcG9ydCB7IHByb2R1Y3QgfSBmcm9tIFwiLi90eXBlcy9kYXRhXCJcblxuZXhwb3J0IGNvbnN0IGdldERhdGEgPSAoY2FsbDooZGF0YTpwcm9kdWN0W10pPT52b2lkKT0+e1xuICAgIGZldGNoKFwiaHR0cHM6Ly9mYWtlc3RvcmVhcGkuY29tL3Byb2R1Y3RzXCIpLnRoZW4oKHJlcyk9PlxuICAgICAgICByZXMuanNvbigpXG4gICAgKS50aGVuKChqc29uKT0+e1xuICAgICAgICBjYWxsKGpzb24pXG4gICAgfSlcbn0iLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBhbGxQcm9kdWN0cyB9IGZyb20gJy4vYWxsUHJvZHVjdHNDb250cm9sbCc7XG5pbXBvcnQgeyBuYXZNZW51IH0gZnJvbSAnLi9tZW51Q29udHJvbCc7XG5pbXBvcnQgeyBteVByb2R1Y3RzQ29udHJvbGwgfSBmcm9tICcuL215UHJvZHVjdHNDb250cm9sbCc7XG5pbXBvcnQgeyBwb3B1bGFyUHJvZHVjdCB9IGZyb20gJy4vcG9wdWxhclByb2R1Y3QnO1xuaW1wb3J0IHsgcHJvZHVjdE9iamVjdCB9IGZyb20gJy4vdHlwZXMvZGF0YSc7XG5cbiAgZnVuY3Rpb24gY29tcG9uZW50KCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAvLyBkZWZpbmUgc2VjdGlvbnMgaW4gdmFyaWFibGVzIFxuICAgIGNvbnN0IGFsbFByb2R1Y3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuQWxsJyk7XG4gICAgY29uc3QgbXlQcm9kdWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5NeXByb2R1Y3RzJyk7XG4gICAgY29uc3QgcG91bGFyUHJvZHVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuUG9wdWxhcicpO1xuICAgIGNvbnN0IG5leHRQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5leHRCdXR0b24nKTtcbiAgICBjb25zdCBiYWNrUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nb0JhY2snKTtcbiAgICAvL3NlbGVjdCBtaW5pIG5hdiBidXR0b25zIFxuICAgIGNvbnN0IGFsbFByb2R1Y3RCdXR0b246SFRNTEFuY2hvckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsJyk7XG4gICAgY29uc3QgbXlQcm9kdWN0c0J1dHRvbjpIVE1MQW5jaG9yRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5teXByb2R1Y3RzJyk7XG4gICAgY29uc3QgcG9wdWxhclByb2R1Y3RzQnV0dG9uOkhUTUxBbmNob3JFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVsYXInKTtcbiAgIFxuICAgIG5hdk1lbnUoKTtcbiAgICAvLyBoYW5kbGUgcGF0aHNcbiAgICBpZih3aW5kb3cubG9jYXRpb24uaGFzaCA9PT0gXCJcIiB8fCB3aW5kb3cubG9jYXRpb24uaGFzaCA9PT0gXCIjQWxsXCIpe1xuICAgICAgbmV4dFBhZ2UucmVwbGFjZVdpdGgobmV4dFBhZ2UuY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgIGJhY2tQYWdlLnJlcGxhY2VXaXRoKGJhY2tQYWdlLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICBhbGxQcm9kdWN0cygpO1xuICAgICAgbXlQcm9kdWN0cy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICBhbGxQcm9kdWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxuICAgICAgcG91bGFyUHJvZHVjdHMuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgbXlQcm9kdWN0c0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIGFsbFByb2R1Y3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICBwb3B1bGFyUHJvZHVjdHNCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfWVsc2UgaWYod2luZG93LmxvY2F0aW9uLmhhc2ggPT09IFwiI015cHJvZHVjdHNcIikge1xuICAgICAgbmV4dFBhZ2UucmVwbGFjZVdpdGgobmV4dFBhZ2UuY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgIGJhY2tQYWdlLnJlcGxhY2VXaXRoKGJhY2tQYWdlLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICBteVByb2R1Y3RzQ29udHJvbGwoKTtcbiAgICAgIG15UHJvZHVjdHMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgYWxsUHJvZHVjdC5jbGFzc0xpc3QuYWRkKCdoaWRlJylcbiAgICAgIHBvdWxhclByb2R1Y3RzLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgIG15UHJvZHVjdHNCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICBhbGxQcm9kdWN0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgcG9wdWxhclByb2R1Y3RzQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH1lbHNlIGlmKHdpbmRvdy5sb2NhdGlvbi5oYXNoID09PSBcIiNQb3B1bGFyXCIpe1xuICAgICAgbmV4dFBhZ2UucmVwbGFjZVdpdGgobmV4dFBhZ2UuY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgIGJhY2tQYWdlLnJlcGxhY2VXaXRoKGJhY2tQYWdlLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICBwb3B1bGFyUHJvZHVjdCgpO1xuICAgICAgbXlQcm9kdWN0cy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICBhbGxQcm9kdWN0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxuICAgICAgcG91bGFyUHJvZHVjdHMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgbXlQcm9kdWN0c0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIGFsbFByb2R1Y3RCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICBwb3B1bGFyUHJvZHVjdHNCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfVxuICAgXG4gICAgLy8gbmF2aWdhdGlvbnMgZXZlbnRzIFxuICAgIGFsbFByb2R1Y3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICBuZXh0UGFnZS5yZXBsYWNlV2l0aChuZXh0UGFnZS5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgYmFja1BhZ2UucmVwbGFjZVdpdGgoYmFja1BhZ2UuY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgIGFsbFByb2R1Y3RzKCk7XG4gICAgICBteVByb2R1Y3RzLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgIGFsbFByb2R1Y3QuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXG4gICAgICBwb3VsYXJQcm9kdWN0cy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICBteVByb2R1Y3RzQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgYWxsUHJvZHVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgIHBvcHVsYXJQcm9kdWN0c0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9KVxuICAgIG15UHJvZHVjdHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICBuZXh0UGFnZS5yZXBsYWNlV2l0aChuZXh0UGFnZS5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgYmFja1BhZ2UucmVwbGFjZVdpdGgoYmFja1BhZ2UuY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgIG15UHJvZHVjdHNDb250cm9sbCgpO1xuICAgICAgbXlQcm9kdWN0cy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICBhbGxQcm9kdWN0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxuICAgICAgcG91bGFyUHJvZHVjdHMuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgbXlQcm9kdWN0c0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgIGFsbFByb2R1Y3RCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICBwb3B1bGFyUHJvZHVjdHNCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG5cbiAgICB9KVxuICAgIHBvcHVsYXJQcm9kdWN0c0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgIG5leHRQYWdlLnJlcGxhY2VXaXRoKG5leHRQYWdlLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICBiYWNrUGFnZS5yZXBsYWNlV2l0aChiYWNrUGFnZS5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgcG9wdWxhclByb2R1Y3QoKTtcbiAgICAgIG15UHJvZHVjdHMuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgYWxsUHJvZHVjdC5jbGFzc0xpc3QuYWRkKCdoaWRlJylcbiAgICAgIHBvdWxhclByb2R1Y3RzLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgIG15UHJvZHVjdHNCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICBhbGxQcm9kdWN0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgcG9wdWxhclByb2R1Y3RzQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH0pXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgXG4gIH1cblxuICBleHBvcnQgY29uc3Qgc2xpY2VPYmogPSAob2JqOnByb2R1Y3RPYmplY3Qsc3RhcnQ6bnVtYmVyLGVuZDpudW1iZXIpOnByb2R1Y3RPYmplY3Q9PntcbiAgICBjb25zdCByZXN1bHQ6cHJvZHVjdE9iamVjdCA9IHt9O1xuICAgIGxldCBmaXJzdENvdW50ZXI6bnVtYmVyID0gc3RhcnQ7XG4gICAgY29uc3Qgb2JqS2V5cyA9ICBPYmplY3Qua2V5cyhvYmopO1xuICAgIGZvcihsZXQgaXRlbSA9c3RhcnQ7aXRlbSA8IGVuZDtpdGVtKyspe1xuICAgICAgaWYoZmlyc3RDb3VudGVyID49IGVuZCl7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuICAgICAgaWYob2JqS2V5c1tpdGVtXSl7XG4gICAgICByZXN1bHRbb2JqS2V5c1tpdGVtXV0gPSBvYmpbb2JqS2V5c1tpdGVtXV07fVxuICAgICAgZmlyc3RDb3VudGVyKys7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKTtcbiIsImNvbnN0IGxpa2VzVXJsID0gXCJodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy96U2ZxbGNyNlpxUkNkZGsxMFdIVi9saWtlc1wiO1xuZXhwb3J0IGNvbnN0IGdlbmVyYXRlTGlrZXMgPSAoZGF0YTp7XG4gICAgaXRlbV9pZDpudW1iZXJcbn0pPT57XG4gICAgZmV0Y2gobGlrZXNVcmwse1xuICAgICAgICBtZXRob2Q6XCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICBib2R5OkpTT04uc3RyaW5naWZ5KGRhdGEpXG4gICAgfSkudGhlbigocmVzKT0+e1xuICAgICAgICBpZighcmVzLm9rKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgfVxuICAgIH0pO1xufTsiLCJpbXBvcnQgeyBwcm9kdWN0IH0gZnJvbSBcIi4vdHlwZXMvZGF0YVwiO1xuXG5jb25zdCBsaWtlc1VybCA9IFwiaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvelNmcWxjcjZacVJDZGRrMTBXSFYvbGlrZXMvXCI7XG5jb25zdCBnZXRMaWtlc0RhdGEgPSAgYXN5bmMgKCkgPT57XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2gobGlrZXNVcmwpO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG4gICAgcmV0dXJuIGRhdGFcbn1cbmV4cG9ydCBjb25zdCBnZXRMaWtlcyA9ICAocHJvZHVjdERhdGE6cHJvZHVjdFtdLGNhbGxmbjoocmVzdWx0OntcbiAgICBbaW5kZXg6c3RyaW5nXTpwcm9kdWN0XG59KT0+dm9pZCk9PntcbiAgICBjb25zdCBmaW5hbERhdGE9IGdldExpa2VzRGF0YSgpO1xuICAgIFxuICAgIGZpbmFsRGF0YS50aGVuKChpdGVtczp7aXRlbV9pZDpudW1iZXIsbGlrZXM6bnVtYmVyfVtdICk9PntcblxuICAgICAgICBjb25zdCByZXN1bHQ6e1xuICAgICAgICAgICAgW2luZGV4OnN0cmluZ106cHJvZHVjdFxuICAgICAgICB9ID0ge31cbiAgICAgICAgZm9yKGxldCBpID0gMDtpPHByb2R1Y3REYXRhLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgcmVzdWx0W2Ake3Byb2R1Y3REYXRhW2ldLmlkfWBdID0gey4uLnByb2R1Y3REYXRhW2ldLGxpa2VzOjB9O1xuICAgICAgICB9XG4gICAgICAgIGZvcihsZXQgaSA9MDtpPGl0ZW1zLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgICAgIHJlc3VsdFtpdGVtc1tpXS5pdGVtX2lkXS5saWtlcyA9IGl0ZW1zW2ldLmxpa2VzO1xuICAgICAgICB9XG4gICAgICAgIGNhbGxmbihyZXN1bHQpO1xuICAgIH0pXG59IiwiY29uc3QgaGlkZVNob3dOYXZFbGVtZW50cyA9IChub2RlTHN0Ok5vZGVMaXN0T2Y8SFRNTEFuY2hvckVsZW1lbnQ+LHNob3c6Ym9vbGVhbik9PntcbiAgICBmb3IobGV0IGluZGV4ID0gMDtpbmRleDxub2RlTHN0Lmxlbmd0aCA7aW5kZXgrKyl7XG4gICAgICAgIGlmKHNob3cpe1xuICAgICAgICAgICAgbm9kZUxzdFtpbmRleF0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgbm9kZUxzdFtpbmRleF0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG4gICAgfVxufVxuY29uc3QgY29udHJvbFVzZXJJbmZvUGFnZSA9ICgpPT57XG4gLy8gY29udHJvbCB1c2VyIHByb2ZpbGUgbWVudSBcbiBjb25zdCBub3JtYWxOYXZNZW51Ok5vZGVMaXN0T2Y8SFRNTEFuY2hvckVsZW1lbnQ+ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ub3JtYWxOYXZcIik7XG4gY29uc3QgdXNlckluZm9MaXN0OkhUTUxVTGlzdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVzZXJJbmZvTGlzdFwiKTtcbiBjb25zdCBwcm9maWxlTWVudVNlY29uZEJ1dHRvbjpIVE1MQnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2Vjb25kVXNlckluZm9Db250cm9sXCIpO1xuXG4gdXNlckluZm9MaXN0LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gaGlkZVNob3dOYXZFbGVtZW50cyhub3JtYWxOYXZNZW51LGZhbHNlKTtcblxuIHByb2ZpbGVNZW51U2Vjb25kQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57XG4gICAgICAgICBoaWRlU2hvd05hdkVsZW1lbnRzKG5vcm1hbE5hdk1lbnUsdHJ1ZSk7XG4gICAgICAgICB1c2VySW5mb0xpc3Quc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gfSk7XG4gXG59XG5cbmV4cG9ydCBjb25zdCBuYXZNZW51ID0gKCk9PntcbiAgICAvLyBjb250cm9sIGFsbCBtb2JpbGUgbWVudVxuICAgIGxldCBmbGFnOmJvb2xlYW4gPSB0cnVlO1xuICAgIGNvbnN0IG1lbnVCdXR0b246SFRNTEJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNob3dOYXZCdXR0b25cIik7XG4gICAgY29uc3QgbWVudTpOb2RlTGlzdE9mPEhUTUxBbmNob3JFbGVtZW50PiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2TGlua1wiKTtcbiAgICBjb25zdCB1c2VySW5mb0xpc3Q6SFRNTFVMaXN0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXNlckluZm9MaXN0XCIpO1xuICAgIHVzZXJJbmZvTGlzdC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwoKT0+e1xuICAgICAgICBpZihzY3JlZW4ud2lkdGggPiA3Njgpe1xuICAgICAgICAgICAgaGlkZVNob3dOYXZFbGVtZW50cyhtZW51LHRydWUpO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICBoaWRlU2hvd05hdkVsZW1lbnRzKG1lbnUsIWZsYWcpO1xuICAgICAgICB9XG4gICAgfSlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwoKT0+e1xuICAgICAgICBpZihzY3JlZW4ud2lkdGggPiA3Njgpe1xuICAgICAgICAgICAgaGlkZVNob3dOYXZFbGVtZW50cyhtZW51LHRydWUpO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICBoaWRlU2hvd05hdkVsZW1lbnRzKG1lbnUsIWZsYWcpO1xuICAgICAgICB9XG4gICAgfSlcbiAgICBoaWRlU2hvd05hdkVsZW1lbnRzKG1lbnUsIWZsYWcpXG4gICAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xuICAgICAgICBpZihmbGFnKXtcbiAgICAgICAgICAgIG1lbnVCdXR0b24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoLi4vc3JjL2ltYWdlcy91cGxvYWQucG5nKVwiO1xuICAgICAgXG4gICAgICAgICAgICBoaWRlU2hvd05hdkVsZW1lbnRzKG1lbnUsZmxhZyk7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIGhpZGVTaG93TmF2RWxlbWVudHMobWVudSxmbGFnKTtcbiAgICAgICAgICAgIHVzZXJJbmZvTGlzdC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBtZW51QnV0dG9uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKC4uL3NyYy9pbWFnZXMvYXJyb3ctZG93bi1zaWduLXRvLW5hdmlnYXRlLnBuZylcIlxuICAgICAgICB9XG4gICAgICAgIGZsYWcgPSAhZmxhZ1xuICAgIH0pO1xuXG4gICAgLy8gY29udHJvbCB1c2VyIGluZm8gbWVudSBcbiAgICBcbiAgICBjb25zdCBwcm9maWxlTWVudUJ1dHRvbjpIVE1MQnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXNlcmluZm9Db250cm9sXCIpO1xuICAgIHByb2ZpbGVNZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57XG4gICAgICAgICAgICBjb250cm9sVXNlckluZm9QYWdlKCk7XG4gICAgfSk7XG4gICBcbn1cblxuXG4iLCJpbXBvcnQgZG9tRnVuY3Rpb3MgZnJvbSAnLi9hZGREYXRhVG9Eb20nO1xuaW1wb3J0IHsgc2xpY2VPYmogfSBmcm9tICcuJztcbmltcG9ydCB7IHByb2R1Y3RPYmplY3QgfSBmcm9tICcuL3R5cGVzL2RhdGEnO1xuaW1wb3J0IHsgcGFnZXMgfSBmcm9tICcuL3R5cGVzL3BhZ2VUeXBlJztcblxuZXhwb3J0IGNvbnN0IG15UHJvZHVjdHNDb250cm9sbCA9ICgpPT57XG4gIGNvbnN0IHBhZ2luYXRpb25Db250cm9sbGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2luYXRpb25Db250cm9sbGVyJyk7XG4gICAgICAgIHBhZ2luYXRpb25Db250cm9sbGVyLmlubmVySFRNTCA9IGA8YnV0dG9uIGNsYXNzPVwiZ29CYWNrIGhpZGVcIj5HbyBCYWNrIDxocj48L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm5leHRCdXR0b25cIj5OZXh0IHBhZ2UgPGhyPjwvYnV0dG9uPmA7XG4gICAgY29uc3QgYWxsUHJvZHVjdHMgPSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJhbGxQcm9kdWN0c1wiKSkgfHwge307XG4gICAgY29uc3QgbmV4dFBhZ2U6SFRNTEJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV4dEJ1dHRvbicpO1xuICAgIGNvbnN0IGJhY2tQYWdlOkhUTUxCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdvQmFjaycpO1xuICAgIGNvbnN0IHByb2R1Y3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbFByb2R1Y3RMaXN0Jyk7XG4gICAgY29uc3QgaXNFbXB0eSA9IE9iamVjdC5rZXlzKGFsbFByb2R1Y3RzKS5sZW5ndGggPiAwID90cnVlOmZhbHNlIDtcbiAgICAvLyBoYW5kbGUgYXBpc1xuICAgIGxldCBzdGFydDpudW1iZXIgPSBpc0VtcHR5ICYmIDA7XG4gICAgbGV0IGVuZCA9IE9iamVjdC5rZXlzKGFsbFByb2R1Y3RzKS5sZW5ndGg7XG4gICAgbGV0IGZpbmFsRGF0YTpwcm9kdWN0T2JqZWN0ID0gZmlsdGVyT2JqKGFsbFByb2R1Y3RzKTtcbiAgICBjb25zdCByZXN1bHRPYmogPSBzbGljZU9iaihmaW5hbERhdGEsc3RhcnQsZW5kKTtcbiAgICBpZihpc0VtcHR5KXtcbiAgICBkb21GdW5jdGlvcy5hZGRUb0RvbShyZXN1bHRPYmoscGFnZXMubXlQcm9kdWN0KTtcbiAgICBuZXh0UGFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgIHN0YXJ0ICs9NDtcbiAgICAgIGVuZCs9NDtcbiAgICAgIGJhY2tQYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGVOZXh0QnV0dG9uJylcbiAgICAgIGlmKHN0YXJ0IDwgT2JqZWN0LmtleXMoZmluYWxEYXRhKS5sZW5ndGgpe1xuICAgICAgICAgIHByb2R1Y3RMaXN0LmlubmVySFRNTCA9ICcnXG4gICAgICAgICAgZG9tRnVuY3Rpb3MuYWRkVG9Eb20oc2xpY2VPYmooZmluYWxEYXRhLHN0YXJ0LGVuZCkscGFnZXMubXlQcm9kdWN0KTtcbiAgICAgIH1lbHNlIHtcbiAgICAgICAgICBzdGFydC09NDtcbiAgICAgICAgICBlbmQtPTQ7XG4gICAgICAgICAgbmV4dFBhZ2UuY2xhc3NMaXN0LmFkZCgnaGlkZUJhY2tCdXR0b24nKTtcbiAgICAgIH1cblxuICAgICB9KTtcbiAgICBiYWNrUGFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgc3RhcnQgLT00O1xuICAgICAgICBlbmQtPTQ7XG4gICAgICAgIG5leHRQYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGVOZXh0QnV0dG9uJylcbiAgICAgICAgaWYoc3RhcnQgPj0gMCl7XG4gICAgICAgICAgICBwcm9kdWN0TGlzdC5pbm5lckhUTUwgPSAnJ1xuICAgICAgICAgICAgZG9tRnVuY3Rpb3MuYWRkVG9Eb20oc2xpY2VPYmooZmluYWxEYXRhLHN0YXJ0LGVuZCkscGFnZXMubXlQcm9kdWN0KTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgc3RhcnQrPTQ7XG4gICAgICAgICAgICBlbmQrPTQ7XG4gICAgICAgICAgICBiYWNrUGFnZS5jbGFzc0xpc3QuYWRkKCdoaWRlQmFja0J1dHRvbicpO1xuICAgICAgICB9XG5cbiAgICB9KTtcbiAgICB9XG4gICAgICAgIFxufTtcblxuXG5jb25zdCBmaWx0ZXJPYmogPSAoZGF0YTpwcm9kdWN0T2JqZWN0KTpwcm9kdWN0T2JqZWN0PT57XG4gICAgY29uc3QgcHJvZHVjdHMgPSBPYmplY3Qua2V5cyhkYXRhKTtcbiAgICBjb25zdCBlbmQgPSBwcm9kdWN0cy5sZW5ndGg7XG4gICAgY29uc3QgcmVzdWx0OnByb2R1Y3RPYmplY3QgPSB7fTtcbiAgICBmb3IobGV0IGl0ZW0gPTA7aXRlbSA8IGVuZDtpdGVtKyspe1xuICAgICAgaWYoZGF0YVtwcm9kdWN0c1tpdGVtXV0ubXlQcm9kdWN0KXtcbiAgICAgICAgcmVzdWx0W3Byb2R1Y3RzW2l0ZW1dXSA9IGRhdGFbcHJvZHVjdHNbaXRlbV1dO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTsiLCJpbXBvcnQgeyBnZXREYXRhIH0gZnJvbSAnLi9kYXRhJztcbmltcG9ydCB7IGdldExpa2VzIH0gZnJvbSAnLi9saWtlc0dldHRlcic7XG5pbXBvcnQgZG9tRnVuY3Rpb3MgZnJvbSAnLi9hZGREYXRhVG9Eb20nO1xuaW1wb3J0IHsgc2xpY2VPYmogfSBmcm9tICcuJztcbmltcG9ydCB7IHByb2R1Y3RPYmplY3QgfSBmcm9tICcuL3R5cGVzL2RhdGEnO1xuaW1wb3J0IHsgcGFnZXMgfSBmcm9tICcuL3R5cGVzL3BhZ2VUeXBlJztcblxuZXhwb3J0IGNvbnN0IHBvcHVsYXJQcm9kdWN0ID0gKCk9PntcbiAgICBjb25zdCBwYWdpbmF0aW9uQ29udHJvbGxlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdpbmF0aW9uQ29udHJvbGxlcicpO1xuICAgICAgICBwYWdpbmF0aW9uQ29udHJvbGxlci5pbm5lckhUTUwgPSBgPGJ1dHRvbiBjbGFzcz1cImdvQmFjayBoaWRlXCI+R28gQmFjayA8aHI+PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJuZXh0QnV0dG9uXCI+TmV4dCBwYWdlIDxocj48L2J1dHRvbj5gO1xuICAgIGNvbnN0IG5leHRQYWdlOkhUTUxCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5leHRCdXR0b24nKTtcbiAgICBjb25zdCBiYWNrUGFnZTpIVE1MQnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nb0JhY2snKTtcbiAgICBjb25zdCBwcm9kdWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGxQcm9kdWN0TGlzdCcpO1xuICAgIG5leHRQYWdlLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICBiYWNrUGFnZS5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgLy8gaGFuZGxlIGFwaXNcbiAgICBsZXQgc3RhcnQgPSAwO1xuICAgIGxldCBlbmQgPSA0O1xuICAgIGxldCBmaW5hbERhdGE6cHJvZHVjdE9iamVjdCA9IHt9O1xuXG4gICAgZ2V0RGF0YSgoZGF0YSk9PntcbiAgICBnZXRMaWtlcyhkYXRhLChpdGVtcyk9PntcbiAgICBmb3IobGV0IGl0ZW0gaW4gaXRlbXMpe1xuICAgICAgICBpZihpdGVtc1tpdGVtXS5yYXRpbmcucmF0ZSA+IDQpe1xuICAgICAgICAgICAgZmluYWxEYXRhW2l0ZW1dID0gaXRlbXNbaXRlbV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgICAgIGRvbUZ1bmN0aW9zLmFkZFRvRG9tKHNsaWNlT2JqKGZpbmFsRGF0YSxzdGFydCxlbmQpLHBhZ2VzLnBvcHVsYXJQcm9kdWN0KTtcbiAgICB9KVxuICAgIH0pO1xuICAgIG5leHRQYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICBzdGFydCA9IGVuZDtcbiAgICAgICAgZW5kKz00O1xuICAgICAgICBiYWNrUGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlQmFja0J1dHRvbicpXG4gICAgICAgIGlmKHN0YXJ0IDwgT2JqZWN0LmtleXMoZmluYWxEYXRhKS5sZW5ndGgpe1xuICAgICAgICAgICAgcHJvZHVjdExpc3QuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICBkb21GdW5jdGlvcy5hZGRUb0RvbShzbGljZU9iaihmaW5hbERhdGEsc3RhcnQsZW5kKSxwYWdlcy5wb3B1bGFyUHJvZHVjdCk7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHN0YXJ0LT00O1xuICAgICAgICAgICAgZW5kLT00O1xuICAgICAgICAgICAgbmV4dFBhZ2UuY2xhc3NMaXN0LmFkZCgnaGlkZU5leHRCdXR0b24nKTtcblxuICAgICAgICB9XG4gICAgICAgXG4gICAgfSk7XG4gICAgYmFja1BhZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgIHN0YXJ0IC09NDtcbiAgICAgICAgZW5kLT00O1xuICAgICAgICBuZXh0UGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlTmV4dEJ1dHRvbicpXG4gICAgICAgIGlmKHN0YXJ0ID49IDApe1xuICAgICAgICAgICAgcHJvZHVjdExpc3QuaW5uZXJIVE1MID0gJydcbiAgICAgICAgICAgIGRvbUZ1bmN0aW9zLmFkZFRvRG9tKHNsaWNlT2JqKGZpbmFsRGF0YSxzdGFydCxlbmQpLHBhZ2VzLnBvcHVsYXJQcm9kdWN0KTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgc3RhcnQrPTQ7XG4gICAgICAgICAgICBlbmQrPTQ7XG4gICAgICAgICAgICBiYWNrUGFnZS5jbGFzc0xpc3QuYWRkKCdoaWRlQmFja0J1dHRvbicpO1xuICAgICAgICB9XG5cbiAgICB9KTtcbiBcbn07XG5cbiIsImV4cG9ydCBlbnVtIHBhZ2VzIHtcbiAgICBhbGwsXG4gICAgbXlQcm9kdWN0LFxuICAgIHBvcHVsYXJQcm9kdWN0XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==