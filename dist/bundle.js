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


var myDocument = document;
var addToDom = function (data, pageType) {
    var productList;
    if (pageType === _types_pageType__WEBPACK_IMPORTED_MODULE_1__.pages.All) {
        productList = myDocument.querySelector('.allProductList');
    }
    else if (pageType === _types_pageType__WEBPACK_IMPORTED_MODULE_1__.pages.MyProduct) {
        productList = myDocument.querySelector('.myProductList');
    }
    else if (pageType === _types_pageType__WEBPACK_IMPORTED_MODULE_1__.pages.PopularProduct) {
        productList = myDocument.querySelector('.popularProductsList');
    }
    productList.innerHTML = '';
    var productDataKeys = Object.keys(data);
    var _loop_1 = function (item) {
        var li = myDocument.createElement('li');
        var img = myDocument.createElement('img');
        var hx = myDocument.createElement('h3');
        var p = myDocument.createElement('p');
        var div = myDocument.createElement('div');
        var secondP = myDocument.createElement('p');
        var hr = myDocument.createElement('hr');
        var likesP = myDocument.createElement('p');
        var secondDiv = myDocument.createElement('div');
        var likesButton = myDocument.createElement('button');
        var priceP = myDocument.createElement('p');
        var priceLikeDiv = myDocument.createElement('div');
        var addToMyProductButton = myDocument.createElement('button');
        // manage elements text content
        secondP.textContent = "rate: ".concat(data[productDataKeys[item]].rating.rate);
        p.textContent = "".concat(data[productDataKeys[item]].rating.count, " reviews");
        secondP.textContent = "rate: ".concat(data[productDataKeys[item]].rating.rate);
        p.textContent = "".concat(data[productDataKeys[item]].rating.count, " reviews");
        img.src = data[productDataKeys[item]].image;
        priceLikeDiv.classList.add('priceLike');
        hx.textContent = "".concat(data[productDataKeys[item]].title);
        secondDiv.classList.add('cardDataContainer');
        img.alt = "".concat(data[productDataKeys[item]].title);
        if (data[productDataKeys[item]].myProduct) {
            addToMyProductButton.style.backgroundImage = 'url(../src/images/done.png)';
        }
        else {
            addToMyProductButton.style.backgroundImage = 'url(../src/images/addwhite.png)';
        }
        addToMyProductButton.classList.add('addToMyProducts');
        div.classList.add('ratingDataContainer');
        hx.classList.add('cardTitle');
        priceP.classList.add('priceP');
        likesP.textContent = "".concat(data[productDataKeys[item]].likes);
        likesButton.addEventListener('click', function () {
            var span = Number(likesP.lastChild.textContent);
            (0,_likesGenerator__WEBPACK_IMPORTED_MODULE_0__.generateLikes)({
                item_id: data[productDataKeys[item]].id,
            });
            likesButton.style.backgroundImage = 'url(../src/images/likeDark.png)';
            setTimeout(function () {
                likesButton.style.backgroundImage = 'url(../src/images/like.png)';
            }, 500);
            likesP.innerHTML = "<span>".concat(span + 1, "</span>");
        });
        likesButton.classList.add('likesButton');
        likesP.classList.add('likesAmount');
        priceP.textContent = "".concat(data[productDataKeys[item]].price, "$");
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
            var allProducts = JSON.parse(localStorage.getItem('allProducts'));
            allProducts[data[productDataKeys[item]].id].myProduct = !allProducts[data[productDataKeys[item]].id].myProduct;
            if (allProducts[data[productDataKeys[item]].id].myProduct) {
                addToMyProductButton.style.backgroundImage = 'url(../src/images/done.png)';
            }
            else {
                if (pageType === _types_pageType__WEBPACK_IMPORTED_MODULE_1__.pages.MyProduct) {
                    productList.removeChild(li);
                }
                addToMyProductButton.style.backgroundImage = 'url(../src/images/addwhite.png)';
            }
            localStorage.setItem('allProducts', JSON.stringify(allProducts));
        });
    };
    for (var item = 0; item < productDataKeys.length; item += 1) {
        _loop_1(item);
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    addToDom: addToDom,
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
    var inputContainer = document.getElementById('searchInputContainer');
    inputContainer.innerHTML = '<input type="search" placeholder="search..." id="searchBar">';
    var paginationController = document.querySelector('.paginationController');
    paginationController.innerHTML = "<button class=\"goBack hide\">Go Back <hr></button>\n        <button class=\"nextButton\">Next page <hr></button>";
    var nextPage = document.querySelector('.nextButton');
    var backPage = document.querySelector('.goBack');
    var productList = document.querySelector('.allProductList');
    nextPage.style.display = '';
    backPage.style.display = '';
    // handle apis
    var start = 0;
    var end = 6;
    var finalData;
    (0,_data__WEBPACK_IMPORTED_MODULE_0__.getData)(function (data) {
        (0,_likesGetter__WEBPACK_IMPORTED_MODULE_1__.getLikes)(data, function (items) {
            finalData = items;
            var dataInLocalStorage = JSON.parse(localStorage.getItem('allProducts')) || false;
            var finalDataKeys = Object.keys(finalData);
            if (!dataInLocalStorage) {
                for (var item = 0; item < finalDataKeys.length; item += 1) {
                    finalData[finalDataKeys[item]].myProduct = false;
                }
            }
            else {
                for (var item = 0; item < finalDataKeys.length; item += 1) {
                    if (!dataInLocalStorage[finalData[finalDataKeys[item]].id]) {
                        finalData[finalDataKeys[item]].myProduct = false;
                    }
                    if (dataInLocalStorage[finalData[finalDataKeys[item]].id].myProduct) {
                        finalData[finalDataKeys[item]].myProduct = true;
                    }
                }
            }
            localStorage.setItem('allProducts', JSON.stringify(finalData));
            _addDataToDom__WEBPACK_IMPORTED_MODULE_2__["default"].addToDom((0,___WEBPACK_IMPORTED_MODULE_3__.sliceObj)(finalData, start, end), _types_pageType__WEBPACK_IMPORTED_MODULE_4__.pages.All);
        });
    });
    if ((start - 6) < 0) {
        backPage.classList.add('hideBackButton');
    }
    /// handle search bar
    var searchBar = document.getElementById('searchBar');
    var searchHandler = function (event) {
        var input = event.target;
        var result = {};
        var finalDataKeys = Object.keys(finalData);
        for (var item = 0; item < finalDataKeys.length; item += 1) {
            if (finalData[finalDataKeys[item]].title.includes(input.value)) {
                result[finalDataKeys[item]] = finalData[finalDataKeys[item]];
            }
        }
        _addDataToDom__WEBPACK_IMPORTED_MODULE_2__["default"].addToDom((0,___WEBPACK_IMPORTED_MODULE_3__.sliceObj)(result, start, end), _types_pageType__WEBPACK_IMPORTED_MODULE_4__.pages.All);
        searchBar.value = '';
    };
    searchBar.removeEventListener('click', searchHandler);
    searchBar.addEventListener('change', searchHandler);
    nextPage.addEventListener('click', function () {
        start = end;
        end += 6;
        backPage.classList.remove('hideBackButton');
        if (start < Object.keys(finalData).length) {
            productList.innerHTML = '';
            _addDataToDom__WEBPACK_IMPORTED_MODULE_2__["default"].addToDom((0,___WEBPACK_IMPORTED_MODULE_3__.sliceObj)(finalData, start, end), _types_pageType__WEBPACK_IMPORTED_MODULE_4__.pages.All);
        }
        else {
            start -= 6;
            end -= 6;
            nextPage.classList.add('hideNextButton');
        }
        if ((start + 6) >= Object.keys(finalData).length) {
            nextPage.classList.add('hideNextButton');
        }
    });
    backPage.addEventListener('click', function () {
        start -= 6;
        end -= 6;
        nextPage.classList.remove('hideNextButton');
        if (start >= 0) {
            productList.innerHTML = '';
            _addDataToDom__WEBPACK_IMPORTED_MODULE_2__["default"].addToDom((0,___WEBPACK_IMPORTED_MODULE_3__.sliceObj)(finalData, start, end), _types_pageType__WEBPACK_IMPORTED_MODULE_4__.pages.All);
        }
        else {
            start += 6;
            end += 6;
            backPage.classList.add('hideBackButton');
        }
        if ((start - 6) < 0) {
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
    document.querySelector('.listLoading').classList.remove('hide');
    fetch('https://fakestoreapi.com/products').then(function (res) { return res.json(); }).then(function (json) {
        document.querySelector('.listLoading').classList.add('hide');
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
    var inputSearch = document.getElementById('searchInputContainer');
    var navSection = document.querySelector('.navSection');
    var myProducts = document.querySelector('.Myproducts');
    var logoLink = document.querySelector('.logoLink');
    var poularProducts = document.querySelector('.Popular');
    // select mini nav buttons
    var allProductButton = document.querySelector('.all');
    var myProductsButton = document.querySelector('.myproducts');
    var popularProductsButton = document.querySelector('.popular');
    (0,_menuControl__WEBPACK_IMPORTED_MODULE_1__.navMenu)();
    // handle paths
    if (window.location.hash === '' || window.location.hash === '#All') {
        (0,_allProductsControll__WEBPACK_IMPORTED_MODULE_0__.allProducts)();
        myProducts.classList.add('hide');
        allProduct.classList.remove('hide');
        poularProducts.classList.add('hide');
        myProductsButton.classList.remove('active');
        inputSearch.classList.remove('hide');
        navSection.style.display = 'flex';
        allProductButton.classList.add('active');
        popularProductsButton.classList.remove('active');
    }
    else if (window.location.hash === '#Myproducts') {
        inputSearch.classList.add('hide');
        (0,_myProductsControll__WEBPACK_IMPORTED_MODULE_2__.myProductsControll)();
        myProducts.classList.remove('hide');
        allProduct.classList.add('hide');
        poularProducts.classList.add('hide');
        myProductsButton.classList.add('active');
        navSection.style.display = 'block';
        allProductButton.classList.remove('active');
        popularProductsButton.classList.remove('active');
    }
    else if (window.location.hash === '#Popular') {
        inputSearch.classList.add('hide');
        (0,_popularProduct__WEBPACK_IMPORTED_MODULE_3__.popularProduct)();
        myProducts.classList.add('hide');
        navSection.style.display = 'block';
        allProduct.classList.add('hide');
        poularProducts.classList.remove('hide');
        myProductsButton.classList.remove('active');
        allProductButton.classList.remove('active');
        popularProductsButton.classList.add('active');
    }
    var allProductFunction = function () {
        (0,_allProductsControll__WEBPACK_IMPORTED_MODULE_0__.allProducts)();
        inputSearch.classList.remove('hide');
        myProducts.classList.add('hide');
        navSection.style.display = 'flex';
        allProduct.classList.remove('hide');
        poularProducts.classList.add('hide');
        myProductsButton.classList.remove('active');
        allProductButton.classList.add('active');
        popularProductsButton.classList.remove('active');
    };
    // navigations events
    allProductButton.addEventListener('click', allProductFunction);
    myProductsButton.addEventListener('click', function () {
        (0,_myProductsControll__WEBPACK_IMPORTED_MODULE_2__.myProductsControll)();
        myProducts.classList.remove('hide');
        navSection.style.display = 'block';
        allProduct.classList.add('hide');
        poularProducts.classList.add('hide');
        myProductsButton.classList.add('active');
        allProductButton.classList.remove('active');
        inputSearch.classList.add('hide');
        popularProductsButton.classList.remove('active');
    });
    logoLink.addEventListener('click', allProductFunction);
    popularProductsButton.addEventListener('click', function () {
        (0,_popularProduct__WEBPACK_IMPORTED_MODULE_3__.popularProduct)();
        myProducts.classList.add('hide');
        navSection.style.display = 'block';
        allProduct.classList.add('hide');
        poularProducts.classList.remove('hide');
        inputSearch.classList.add('hide');
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
var likesUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/zSfqlcr6ZqRCddk10WHV/likes';
var generateLikes = function (data) {
    fetch(likesUrl, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(data),
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
var likesUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/zSfqlcr6ZqRCddk10WHV/likes/';
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
            nodeLst[index].style.display = 'block';
        }
        else {
            nodeLst[index].style.display = 'none';
        }
    }
};
var controlUserInfoPage = function () {
    // control user profile menu
    var normalNavMenu = document.querySelectorAll('.normalNav');
    var userInfoList = document.querySelector('.userInfoList');
    var profileMenuSecondButton = document.querySelector('.secondUserInfoControl');
    userInfoList.style.display = 'block';
    hideShowNavElements(normalNavMenu, false);
    profileMenuSecondButton.addEventListener('click', function () {
        hideShowNavElements(normalNavMenu, true);
        userInfoList.style.display = 'none';
    });
};
var navMenu = function () {
    // control all mobile menu
    var flag = true;
    var menuButton = document.querySelector('.showNavButton');
    var menu = document.querySelectorAll('.navLink');
    var userInfoList = document.querySelector('.userInfoList');
    userInfoList.style.display = 'none';
    window.addEventListener('resize', function () {
        if (screen.width > 768) {
            hideShowNavElements(menu, true);
        }
        else {
            hideShowNavElements(menu, !flag);
        }
    });
    window.addEventListener('load', function () {
        if (screen.width > 768) {
            hideShowNavElements(menu, true);
        }
        else {
            hideShowNavElements(menu, !flag);
        }
    });
    hideShowNavElements(menu, !flag);
    menuButton.addEventListener('click', function () {
        if (flag) {
            menuButton.style.backgroundImage = 'url(../src/images/upload.png)';
            hideShowNavElements(menu, flag);
        }
        else {
            hideShowNavElements(menu, flag);
            userInfoList.style.display = 'none';
            menuButton.style.backgroundImage = 'url(../src/images/arrow-down-sign-to-navigate.png)';
        }
        flag = !flag;
    });
    var profileFunction = function () {
        controlUserInfoPage();
    };
    // control user info menu
    if (window.screen.width < 768) {
        var profileMenuButton = document.querySelector('.userinfoControl');
        profileMenuButton.addEventListener('click', profileFunction);
    }
    else {
        var profileMenuButton = document.querySelector('.userinfoControl');
        profileMenuButton.removeEventListener('click', profileFunction);
    }
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
    var allProducts = JSON.parse(localStorage.getItem('allProducts')) || {};
    var nextPage = document.querySelector('.nextButton');
    var backPage = document.querySelector('.goBack');
    var productList = document.querySelector('.allProductList');
    var isEmpty = Object.keys(allProducts).length > 0;
    // handle apis
    var start = isEmpty && 0;
    var end = 6;
    var finalData = filterObj(allProducts);
    var resultObj = (0,___WEBPACK_IMPORTED_MODULE_1__.sliceObj)(finalData, start, end);
    if (isEmpty) {
        _addDataToDom__WEBPACK_IMPORTED_MODULE_0__["default"].addToDom(resultObj, _types_pageType__WEBPACK_IMPORTED_MODULE_2__.pages.MyProduct);
        nextPage.addEventListener('click', function () {
            start += 6;
            end += 6;
            backPage.classList.remove('hideBackButton');
            if (start < Object.keys(finalData).length) {
                productList.innerHTML = '';
                _addDataToDom__WEBPACK_IMPORTED_MODULE_0__["default"].addToDom((0,___WEBPACK_IMPORTED_MODULE_1__.sliceObj)(finalData, start, end), _types_pageType__WEBPACK_IMPORTED_MODULE_2__.pages.MyProduct);
            }
            else {
                start -= 6;
                end -= 6;
                nextPage.classList.add('hideNextButton');
            }
            if ((start + 6) > Object.keys(finalData).length) {
                nextPage.classList.add('hideNextButton');
            }
        });
        if ((start + 6) > Object.keys(finalData).length) {
            nextPage.classList.add('hideNextButton');
        }
        backPage.addEventListener('click', function () {
            start -= 6;
            end -= 6;
            nextPage.classList.remove('hideNextButton');
            if (start >= 0) {
                productList.innerHTML = '';
                _addDataToDom__WEBPACK_IMPORTED_MODULE_0__["default"].addToDom((0,___WEBPACK_IMPORTED_MODULE_1__.sliceObj)(finalData, start, end), _types_pageType__WEBPACK_IMPORTED_MODULE_2__.pages.MyProduct);
            }
            else {
                start += 6;
                end += 6;
                backPage.classList.add('hideBackButton');
            }
            if ((start - 6) < 0) {
                backPage.classList.add('hideBackButton');
            }
        });
        if ((start - 6) < 0) {
            backPage.classList.add('hideBackButton');
        }
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
    var end = 6;
    var finalData = {};
    (0,_data__WEBPACK_IMPORTED_MODULE_0__.getData)(function (data) {
        (0,_likesGetter__WEBPACK_IMPORTED_MODULE_1__.getLikes)(data, function (items) {
            var itemsKeys = Object.keys(items);
            for (var item = 0; item < itemsKeys.length; item += 1) {
                if (items[itemsKeys[item]].rating.rate > 4) {
                    finalData[itemsKeys[item]] = items[itemsKeys[item]];
                }
            }
            _addDataToDom__WEBPACK_IMPORTED_MODULE_2__["default"].addToDom((0,___WEBPACK_IMPORTED_MODULE_3__.sliceObj)(finalData, start, end), _types_pageType__WEBPACK_IMPORTED_MODULE_4__.pages.PopularProduct);
        });
    });
    nextPage.addEventListener('click', function () {
        start = end;
        end += 6;
        backPage.classList.remove('hideBackButton');
        if (start < Object.keys(finalData).length) {
            productList.innerHTML = '';
            _addDataToDom__WEBPACK_IMPORTED_MODULE_2__["default"].addToDom((0,___WEBPACK_IMPORTED_MODULE_3__.sliceObj)(finalData, start, end), _types_pageType__WEBPACK_IMPORTED_MODULE_4__.pages.PopularProduct);
        }
        else {
            start -= 6;
            end -= 6;
            nextPage.classList.add('hideNextButton');
        }
        if ((start + 6) > Object.keys(finalData).length) {
            nextPage.classList.add('hideNextButton');
        }
    });
    backPage.addEventListener('click', function () {
        start -= 6;
        end -= 6;
        nextPage.classList.remove('hideNextButton');
        if (start >= 0) {
            productList.innerHTML = '';
            _addDataToDom__WEBPACK_IMPORTED_MODULE_2__["default"].addToDom((0,___WEBPACK_IMPORTED_MODULE_3__.sliceObj)(finalData, start, end), _types_pageType__WEBPACK_IMPORTED_MODULE_4__.pages.PopularProduct);
        }
        else {
            start += 6;
            end += 6;
            backPage.classList.add('hideBackButton');
        }
        if ((start - 6) < 0) {
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
    pages[pages["All"] = 0] = "All";
    pages[pages["MyProduct"] = 1] = "MyProduct";
    pages[pages["PopularProduct"] = 2] = "PopularProduct";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUM1QyxJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUU7WUFDZCxXQUFXLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztZQUMzQiw4REFBb0IsQ0FBQywyQ0FBUSxDQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLEVBQUUsaUVBQW9CLENBQUMsQ0FBQztTQUM3RTthQUFNO1lBQ0wsS0FBSyxJQUFJLENBQUMsQ0FBQztZQUNYLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFDVCxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQzFDO1FBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDbkIsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztTQUMxQztJQUNILENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNqRUYsSUFBWSxLQUlYO0FBSkQsV0FBWSxLQUFLO0lBQ2IsK0JBQUc7SUFDSCwyQ0FBUztJQUNULHFEQUFjO0FBQ2xCLENBQUMsRUFKVyxLQUFLLEtBQUwsS0FBSyxRQUloQjs7Ozs7OztVQ0pEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhwZXIzLy4vc3JjL2FkZERhdGFUb0RvbS50cyIsIndlYnBhY2s6Ly9leHBlcjMvLi9zcmMvYWxsUHJvZHVjdHNDb250cm9sbC50cyIsIndlYnBhY2s6Ly9leHBlcjMvLi9zcmMvZGF0YS50cyIsIndlYnBhY2s6Ly9leHBlcjMvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZXhwZXIzLy4vc3JjL2xpa2VzR2VuZXJhdG9yLnRzIiwid2VicGFjazovL2V4cGVyMy8uL3NyYy9saWtlc0dldHRlci50cyIsIndlYnBhY2s6Ly9leHBlcjMvLi9zcmMvbWVudUNvbnRyb2wudHMiLCJ3ZWJwYWNrOi8vZXhwZXIzLy4vc3JjL215UHJvZHVjdHNDb250cm9sbC50cyIsIndlYnBhY2s6Ly9leHBlcjMvLi9zcmMvcG9wdWxhclByb2R1Y3QudHMiLCJ3ZWJwYWNrOi8vZXhwZXIzLy4vc3JjL3R5cGVzL3BhZ2VUeXBlLnRzIiwid2VicGFjazovL2V4cGVyMy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leHBlcjMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4cGVyMy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4cGVyMy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4cGVyMy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2V4cGVyMy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vZXhwZXIzL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZW5lcmF0ZUxpa2VzIH0gZnJvbSAnLi9saWtlc0dlbmVyYXRvcic7XG5pbXBvcnQgeyBwcm9kdWN0IH0gZnJvbSAnLi90eXBlcy9kYXRhJztcbmltcG9ydCB7IHBhZ2VzIH0gZnJvbSAnLi90eXBlcy9wYWdlVHlwZSc7XG5cbmNvbnN0IG15RG9jdW1lbnQ6IGFueSA9IGRvY3VtZW50O1xuXG5jb25zdCBhZGRUb0RvbSA9IChkYXRhOntcbiAgICBbaW5kZXg6c3RyaW5nXTpwcm9kdWN0XG4gICAgfSwgcGFnZVR5cGU6bnVtYmVyKSA9PiB7XG4gIGxldCBwcm9kdWN0TGlzdDpIVE1MVUxpc3RFbGVtZW50O1xuICBpZiAocGFnZVR5cGUgPT09IHBhZ2VzLkFsbCkge1xuICAgIHByb2R1Y3RMaXN0ID0gbXlEb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsUHJvZHVjdExpc3QnKTtcbiAgfSBlbHNlIGlmIChwYWdlVHlwZSA9PT0gcGFnZXMuTXlQcm9kdWN0KSB7XG4gICAgcHJvZHVjdExpc3QgPSBteURvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5teVByb2R1Y3RMaXN0Jyk7XG4gIH0gZWxzZSBpZiAocGFnZVR5cGUgPT09IHBhZ2VzLlBvcHVsYXJQcm9kdWN0KSB7XG4gICAgcHJvZHVjdExpc3QgPSBteURvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1bGFyUHJvZHVjdHNMaXN0Jyk7XG4gIH1cbiAgcHJvZHVjdExpc3QuaW5uZXJIVE1MID0gJyc7XG4gIGNvbnN0IHByb2R1Y3REYXRhS2V5czpzdHJpbmdbXSA9IE9iamVjdC5rZXlzKGRhdGEpO1xuICBmb3IgKGxldCBpdGVtID0gMDsgaXRlbSA8IHByb2R1Y3REYXRhS2V5cy5sZW5ndGg7IGl0ZW0gKz0gMSkge1xuICAgIGNvbnN0IGxpID0gbXlEb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGltZyA9IG15RG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY29uc3QgaHggPSBteURvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgY29uc3QgcDpIVE1MUGFyYWdyYXBoRWxlbWVudCA9IG15RG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGRpdiA9IG15RG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qgc2Vjb25kUDpIVE1MUGFyYWdyYXBoRWxlbWVudCA9IG15RG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGhyID0gbXlEb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpO1xuICAgIGNvbnN0IGxpa2VzUCA9IG15RG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHNlY29uZERpdiA9IG15RG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbGlrZXNCdXR0b24gPSBteURvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IHByaWNlUCA9IG15RG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHByaWNlTGlrZURpdiA9IG15RG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYWRkVG9NeVByb2R1Y3RCdXR0b24gPSBteURvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIC8vIG1hbmFnZSBlbGVtZW50cyB0ZXh0IGNvbnRlbnRcbiAgICBzZWNvbmRQLnRleHRDb250ZW50ID0gYHJhdGU6ICR7ZGF0YVtwcm9kdWN0RGF0YUtleXNbaXRlbV1dLnJhdGluZy5yYXRlfWA7XG4gICAgcC50ZXh0Q29udGVudCA9IGAke2RhdGFbcHJvZHVjdERhdGFLZXlzW2l0ZW1dXS5yYXRpbmcuY291bnR9IHJldmlld3NgO1xuICAgIHNlY29uZFAudGV4dENvbnRlbnQgPSBgcmF0ZTogJHtkYXRhW3Byb2R1Y3REYXRhS2V5c1tpdGVtXV0ucmF0aW5nLnJhdGV9YDtcbiAgICBwLnRleHRDb250ZW50ID0gYCR7ZGF0YVtwcm9kdWN0RGF0YUtleXNbaXRlbV1dLnJhdGluZy5jb3VudH0gcmV2aWV3c2A7XG4gICAgaW1nLnNyYyA9IGRhdGFbcHJvZHVjdERhdGFLZXlzW2l0ZW1dXS5pbWFnZTtcbiAgICBwcmljZUxpa2VEaXYuY2xhc3NMaXN0LmFkZCgncHJpY2VMaWtlJyk7XG4gICAgaHgudGV4dENvbnRlbnQgPSBgJHtkYXRhW3Byb2R1Y3REYXRhS2V5c1tpdGVtXV0udGl0bGV9YDtcbiAgICBzZWNvbmREaXYuY2xhc3NMaXN0LmFkZCgnY2FyZERhdGFDb250YWluZXInKTtcbiAgICBpbWcuYWx0ID0gYCR7ZGF0YVtwcm9kdWN0RGF0YUtleXNbaXRlbV1dLnRpdGxlfWA7XG4gICAgaWYgKGRhdGFbcHJvZHVjdERhdGFLZXlzW2l0ZW1dXS5teVByb2R1Y3QpIHtcbiAgICAgIGFkZFRvTXlQcm9kdWN0QnV0dG9uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoLi4vc3JjL2ltYWdlcy9kb25lLnBuZyknO1xuICAgIH0gZWxzZSB7XG4gICAgICBhZGRUb015UHJvZHVjdEJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKC4uL3NyYy9pbWFnZXMvYWRkd2hpdGUucG5nKSc7XG4gICAgfVxuICAgIGFkZFRvTXlQcm9kdWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZFRvTXlQcm9kdWN0cycpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdyYXRpbmdEYXRhQ29udGFpbmVyJyk7XG4gICAgaHguY2xhc3NMaXN0LmFkZCgnY2FyZFRpdGxlJyk7XG4gICAgcHJpY2VQLmNsYXNzTGlzdC5hZGQoJ3ByaWNlUCcpO1xuICAgIGxpa2VzUC50ZXh0Q29udGVudCA9IGAke2RhdGFbcHJvZHVjdERhdGFLZXlzW2l0ZW1dXS5saWtlc31gO1xuICAgIGxpa2VzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3Qgc3BhbiA9IE51bWJlcihsaWtlc1AubGFzdENoaWxkLnRleHRDb250ZW50KTtcbiAgICAgIGdlbmVyYXRlTGlrZXMoe1xuICAgICAgICBpdGVtX2lkOiBkYXRhW3Byb2R1Y3REYXRhS2V5c1tpdGVtXV0uaWQsXG4gICAgICB9KTtcbiAgICAgIGxpa2VzQnV0dG9uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoLi4vc3JjL2ltYWdlcy9saWtlRGFyay5wbmcpJztcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBsaWtlc0J1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKC4uL3NyYy9pbWFnZXMvbGlrZS5wbmcpJztcbiAgICAgIH0sIDUwMCk7XG4gICAgICBsaWtlc1AuaW5uZXJIVE1MID0gYDxzcGFuPiR7c3BhbiArIDF9PC9zcGFuPmA7XG4gICAgfSk7XG5cbiAgICBsaWtlc0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdsaWtlc0J1dHRvbicpO1xuICAgIGxpa2VzUC5jbGFzc0xpc3QuYWRkKCdsaWtlc0Ftb3VudCcpO1xuICAgIHByaWNlUC50ZXh0Q29udGVudCA9IGAke2RhdGFbcHJvZHVjdERhdGFLZXlzW2l0ZW1dXS5wcmljZX0kYDtcbiAgICBkaXYuYXBwZW5kQ2hpbGQocCk7XG4gICAgZGl2LmFwcGVuZENoaWxkKHNlY29uZFApO1xuICAgIGxpLmFwcGVuZENoaWxkKGltZyk7XG4gICAgbGkuYXBwZW5kQ2hpbGQoc2Vjb25kRGl2KTtcbiAgICBzZWNvbmREaXYuYXBwZW5kQ2hpbGQoaHgpO1xuICAgIHNlY29uZERpdi5hcHBlbmRDaGlsZChkaXYpO1xuICAgIHNlY29uZERpdi5hcHBlbmRDaGlsZChocik7XG4gICAgcHJpY2VMaWtlRGl2LmFwcGVuZENoaWxkKHByaWNlUCk7XG4gICAgcHJpY2VMaWtlRGl2LmFwcGVuZENoaWxkKGFkZFRvTXlQcm9kdWN0QnV0dG9uKTtcbiAgICBwcmljZUxpa2VEaXYuYXBwZW5kQ2hpbGQobGlrZXNCdXR0b24pO1xuICAgIHNlY29uZERpdi5hcHBlbmRDaGlsZChwcmljZUxpa2VEaXYpO1xuICAgIHNlY29uZERpdi5hcHBlbmRDaGlsZChsaWtlc1ApO1xuICAgIHByb2R1Y3RMaXN0LmFwcGVuZENoaWxkKGxpKTtcbiAgICBhZGRUb015UHJvZHVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IGFsbFByb2R1Y3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWxsUHJvZHVjdHMnKSk7XG4gICAgICBhbGxQcm9kdWN0c1tkYXRhW3Byb2R1Y3REYXRhS2V5c1tpdGVtXV0uaWRdLm15UHJvZHVjdCA9ICFhbGxQcm9kdWN0c1tkYXRhW3Byb2R1Y3REYXRhS2V5c1tpdGVtXV0uaWRdLm15UHJvZHVjdDtcbiAgICAgIGlmIChhbGxQcm9kdWN0c1tkYXRhW3Byb2R1Y3REYXRhS2V5c1tpdGVtXV0uaWRdLm15UHJvZHVjdCkge1xuICAgICAgICBhZGRUb015UHJvZHVjdEJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKC4uL3NyYy9pbWFnZXMvZG9uZS5wbmcpJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChwYWdlVHlwZSA9PT0gcGFnZXMuTXlQcm9kdWN0KSB7XG4gICAgICAgICAgcHJvZHVjdExpc3QucmVtb3ZlQ2hpbGQobGkpO1xuICAgICAgICB9XG4gICAgICAgIGFkZFRvTXlQcm9kdWN0QnV0dG9uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoLi4vc3JjL2ltYWdlcy9hZGR3aGl0ZS5wbmcpJztcbiAgICAgIH1cbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhbGxQcm9kdWN0cycsIEpTT04uc3RyaW5naWZ5KGFsbFByb2R1Y3RzKSk7XG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYWRkVG9Eb20sXG59O1xuIiwiaW1wb3J0IHsgZ2V0RGF0YSB9IGZyb20gJy4vZGF0YSc7XG5pbXBvcnQgeyBnZXRMaWtlcyB9IGZyb20gJy4vbGlrZXNHZXR0ZXInO1xuaW1wb3J0IGRvbUZ1bmN0aW9zIGZyb20gJy4vYWRkRGF0YVRvRG9tJztcbmltcG9ydCB7IHNsaWNlT2JqIH0gZnJvbSAnLic7XG5pbXBvcnQgeyBwcm9kdWN0T2JqZWN0IH0gZnJvbSAnLi90eXBlcy9kYXRhJztcbmltcG9ydCB7IHBhZ2VzIH0gZnJvbSAnLi90eXBlcy9wYWdlVHlwZSc7XG5cbmV4cG9ydCBjb25zdCBhbGxQcm9kdWN0cyA9ICgpID0+IHtcbiAgY29uc3QgaW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoSW5wdXRDb250YWluZXInKTtcbiAgaW5wdXRDb250YWluZXIuaW5uZXJIVE1MID0gJzxpbnB1dCB0eXBlPVwic2VhcmNoXCIgcGxhY2Vob2xkZXI9XCJzZWFyY2guLi5cIiBpZD1cInNlYXJjaEJhclwiPic7XG4gIGNvbnN0IHBhZ2luYXRpb25Db250cm9sbGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2luYXRpb25Db250cm9sbGVyJyk7XG4gIHBhZ2luYXRpb25Db250cm9sbGVyLmlubmVySFRNTCA9IGA8YnV0dG9uIGNsYXNzPVwiZ29CYWNrIGhpZGVcIj5HbyBCYWNrIDxocj48L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm5leHRCdXR0b25cIj5OZXh0IHBhZ2UgPGhyPjwvYnV0dG9uPmA7XG4gIGNvbnN0IG5leHRQYWdlOkhUTUxCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5leHRCdXR0b24nKTtcbiAgY29uc3QgYmFja1BhZ2U6SFRNTEJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ29CYWNrJyk7XG4gIGNvbnN0IHByb2R1Y3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbFByb2R1Y3RMaXN0Jyk7XG4gIG5leHRQYWdlLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgYmFja1BhZ2Uuc3R5bGUuZGlzcGxheSA9ICcnO1xuXG4gIC8vIGhhbmRsZSBhcGlzXG4gIGxldCBzdGFydCA9IDA7XG4gIGxldCBlbmQgPSA2O1xuICBsZXQgZmluYWxEYXRhOnByb2R1Y3RPYmplY3Q7XG4gIGdldERhdGEoKGRhdGEpID0+IHtcbiAgICBnZXRMaWtlcyhkYXRhLCAoaXRlbXMpID0+IHtcbiAgICAgIGZpbmFsRGF0YSA9IGl0ZW1zO1xuXG4gICAgICBjb25zdCBkYXRhSW5Mb2NhbFN0b3JhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbGxQcm9kdWN0cycpKSB8fCBmYWxzZTtcbiAgICAgIGNvbnN0IGZpbmFsRGF0YUtleXMgPSBPYmplY3Qua2V5cyhmaW5hbERhdGEpO1xuICAgICAgaWYgKCFkYXRhSW5Mb2NhbFN0b3JhZ2UpIHtcbiAgICAgICAgZm9yIChsZXQgaXRlbSA9IDA7IGl0ZW0gPCBmaW5hbERhdGFLZXlzLmxlbmd0aDsgaXRlbSArPSAxKSB7XG4gICAgICAgICAgZmluYWxEYXRhW2ZpbmFsRGF0YUtleXNbaXRlbV1dLm15UHJvZHVjdCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBpdGVtID0gMDsgaXRlbSA8IGZpbmFsRGF0YUtleXMubGVuZ3RoOyBpdGVtICs9IDEpIHtcbiAgICAgICAgICBpZiAoIWRhdGFJbkxvY2FsU3RvcmFnZVtmaW5hbERhdGFbZmluYWxEYXRhS2V5c1tpdGVtXV0uaWRdKSB7XG4gICAgICAgICAgICBmaW5hbERhdGFbZmluYWxEYXRhS2V5c1tpdGVtXV0ubXlQcm9kdWN0ID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChkYXRhSW5Mb2NhbFN0b3JhZ2VbZmluYWxEYXRhW2ZpbmFsRGF0YUtleXNbaXRlbV1dLmlkXS5teVByb2R1Y3QpIHtcbiAgICAgICAgICAgIGZpbmFsRGF0YVtmaW5hbERhdGFLZXlzW2l0ZW1dXS5teVByb2R1Y3QgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FsbFByb2R1Y3RzJywgSlNPTi5zdHJpbmdpZnkoZmluYWxEYXRhKSk7XG4gICAgICBkb21GdW5jdGlvcy5hZGRUb0RvbShzbGljZU9iaihmaW5hbERhdGEsIHN0YXJ0LCBlbmQpLCBwYWdlcy5BbGwpO1xuICAgIH0pO1xuICB9KTtcbiAgaWYgKChzdGFydCAtIDYpIDwgMCkge1xuICAgIGJhY2tQYWdlLmNsYXNzTGlzdC5hZGQoJ2hpZGVCYWNrQnV0dG9uJyk7XG4gIH1cbiAgLy8vIGhhbmRsZSBzZWFyY2ggYmFyXG4gIGNvbnN0IHNlYXJjaEJhcjpIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaEJhcicpYXMgSFRNTElucHV0RWxlbWVudDtcbiAgY29uc3Qgc2VhcmNoSGFuZGxlciA9IChldmVudDpFdmVudCkgPT4ge1xuICAgIGNvbnN0IGlucHV0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgY29uc3QgcmVzdWx0OnByb2R1Y3RPYmplY3QgPSB7fTtcbiAgICBjb25zdCBmaW5hbERhdGFLZXlzID0gT2JqZWN0LmtleXMoZmluYWxEYXRhKTtcbiAgICBmb3IgKGxldCBpdGVtID0gMDsgaXRlbSA8IGZpbmFsRGF0YUtleXMubGVuZ3RoOyBpdGVtICs9IDEpIHtcbiAgICAgIGlmIChmaW5hbERhdGFbZmluYWxEYXRhS2V5c1tpdGVtXV0udGl0bGUuaW5jbHVkZXMoaW5wdXQudmFsdWUpKSB7XG4gICAgICAgIHJlc3VsdFtmaW5hbERhdGFLZXlzW2l0ZW1dXSA9IGZpbmFsRGF0YVtmaW5hbERhdGFLZXlzW2l0ZW1dXTtcbiAgICAgIH1cbiAgICB9XG4gICAgZG9tRnVuY3Rpb3MuYWRkVG9Eb20oc2xpY2VPYmoocmVzdWx0LCBzdGFydCwgZW5kKSwgcGFnZXMuQWxsKTtcbiAgICBzZWFyY2hCYXIudmFsdWUgPSAnJztcbiAgfTtcblxuICBzZWFyY2hCYXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWFyY2hIYW5kbGVyKTtcbiAgc2VhcmNoQmFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHNlYXJjaEhhbmRsZXIpO1xuICBuZXh0UGFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzdGFydCA9IGVuZDtcbiAgICBlbmQgKz0gNjtcbiAgICBiYWNrUGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlQmFja0J1dHRvbicpO1xuICAgIGlmIChzdGFydCA8IE9iamVjdC5rZXlzKGZpbmFsRGF0YSkubGVuZ3RoKSB7XG4gICAgICBwcm9kdWN0TGlzdC5pbm5lckhUTUwgPSAnJztcbiAgICAgIGRvbUZ1bmN0aW9zLmFkZFRvRG9tKHNsaWNlT2JqKGZpbmFsRGF0YSwgc3RhcnQsIGVuZCksIHBhZ2VzLkFsbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXJ0IC09IDY7XG4gICAgICBlbmQgLT0gNjtcbiAgICAgIG5leHRQYWdlLmNsYXNzTGlzdC5hZGQoJ2hpZGVOZXh0QnV0dG9uJyk7XG4gICAgfVxuICAgIGlmICgoc3RhcnQgKyA2KSA+PSBPYmplY3Qua2V5cyhmaW5hbERhdGEpLmxlbmd0aCkge1xuICAgICAgbmV4dFBhZ2UuY2xhc3NMaXN0LmFkZCgnaGlkZU5leHRCdXR0b24nKTtcbiAgICB9XG4gIH0pO1xuICBiYWNrUGFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzdGFydCAtPSA2O1xuICAgIGVuZCAtPSA2O1xuICAgIG5leHRQYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGVOZXh0QnV0dG9uJyk7XG4gICAgaWYgKHN0YXJ0ID49IDApIHtcbiAgICAgIHByb2R1Y3RMaXN0LmlubmVySFRNTCA9ICcnO1xuICAgICAgZG9tRnVuY3Rpb3MuYWRkVG9Eb20oc2xpY2VPYmooZmluYWxEYXRhLCBzdGFydCwgZW5kKSwgcGFnZXMuQWxsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhcnQgKz0gNjtcbiAgICAgIGVuZCArPSA2O1xuICAgICAgYmFja1BhZ2UuY2xhc3NMaXN0LmFkZCgnaGlkZUJhY2tCdXR0b24nKTtcbiAgICB9XG4gICAgaWYgKChzdGFydCAtIDYpIDwgMCkge1xuICAgICAgYmFja1BhZ2UuY2xhc3NMaXN0LmFkZCgnaGlkZUJhY2tCdXR0b24nKTtcbiAgICB9XG4gIH0pO1xufTtcbiIsImltcG9ydCB7IHByb2R1Y3QgfSBmcm9tICcuL3R5cGVzL2RhdGEnO1xuXG5leHBvcnQgY29uc3QgZ2V0RGF0YSA9IChjYWxsOihkYXRhOnByb2R1Y3RbXSk9PnZvaWQpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3RMb2FkaW5nJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICBmZXRjaCgnaHR0cHM6Ly9mYWtlc3RvcmVhcGkuY29tL3Byb2R1Y3RzJykudGhlbigocmVzKSA9PiByZXMuanNvbigpKS50aGVuKChqc29uKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3RMb2FkaW5nJykuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIGNhbGwoanNvbik7XG4gIH0pO1xufTtcbiIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGFsbFByb2R1Y3RzIH0gZnJvbSAnLi9hbGxQcm9kdWN0c0NvbnRyb2xsJztcbmltcG9ydCB7IG5hdk1lbnUgfSBmcm9tICcuL21lbnVDb250cm9sJztcbmltcG9ydCB7IG15UHJvZHVjdHNDb250cm9sbCB9IGZyb20gJy4vbXlQcm9kdWN0c0NvbnRyb2xsJztcbmltcG9ydCB7IHBvcHVsYXJQcm9kdWN0IH0gZnJvbSAnLi9wb3B1bGFyUHJvZHVjdCc7XG5pbXBvcnQgeyBwcm9kdWN0T2JqZWN0IH0gZnJvbSAnLi90eXBlcy9kYXRhJztcblxuZnVuY3Rpb24gY29tcG9uZW50KCkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIC8vIGRlZmluZSBzZWN0aW9ucyBpbiB2YXJpYWJsZXNcbiAgY29uc3QgYWxsUHJvZHVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5BbGwnKTtcbiAgY29uc3QgaW5wdXRTZWFyY2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoSW5wdXRDb250YWluZXInKTtcbiAgY29uc3QgbmF2U2VjdGlvbjpIVE1MVGFibGVTZWN0aW9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZTZWN0aW9uJyk7XG4gIGNvbnN0IG15UHJvZHVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuTXlwcm9kdWN0cycpO1xuICBjb25zdCBsb2dvTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dvTGluaycpO1xuICBjb25zdCBwb3VsYXJQcm9kdWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5Qb3B1bGFyJyk7XG4gIC8vIHNlbGVjdCBtaW5pIG5hdiBidXR0b25zXG4gIGNvbnN0IGFsbFByb2R1Y3RCdXR0b246SFRNTEFuY2hvckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsJyk7XG4gIGNvbnN0IG15UHJvZHVjdHNCdXR0b246SFRNTEFuY2hvckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXlwcm9kdWN0cycpO1xuICBjb25zdCBwb3B1bGFyUHJvZHVjdHNCdXR0b246SFRNTEFuY2hvckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdWxhcicpO1xuXG4gIG5hdk1lbnUoKTtcbiAgLy8gaGFuZGxlIHBhdGhzXG4gIGlmICh3aW5kb3cubG9jYXRpb24uaGFzaCA9PT0gJycgfHwgd2luZG93LmxvY2F0aW9uLmhhc2ggPT09ICcjQWxsJykge1xuICAgIGFsbFByb2R1Y3RzKCk7XG4gICAgbXlQcm9kdWN0cy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgYWxsUHJvZHVjdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgcG91bGFyUHJvZHVjdHMuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIG15UHJvZHVjdHNCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgaW5wdXRTZWFyY2guY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgIG5hdlNlY3Rpb24uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICBhbGxQcm9kdWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIHBvcHVsYXJQcm9kdWN0c0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgfSBlbHNlIGlmICh3aW5kb3cubG9jYXRpb24uaGFzaCA9PT0gJyNNeXByb2R1Y3RzJykge1xuICAgIGlucHV0U2VhcmNoLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICBteVByb2R1Y3RzQ29udHJvbGwoKTtcbiAgICBteVByb2R1Y3RzLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICBhbGxQcm9kdWN0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICBwb3VsYXJQcm9kdWN0cy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgbXlQcm9kdWN0c0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICBuYXZTZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIGFsbFByb2R1Y3RCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgcG9wdWxhclByb2R1Y3RzQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICB9IGVsc2UgaWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoID09PSAnI1BvcHVsYXInKSB7XG4gICAgaW5wdXRTZWFyY2guY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIHBvcHVsYXJQcm9kdWN0KCk7XG4gICAgbXlQcm9kdWN0cy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgbmF2U2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBhbGxQcm9kdWN0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICBwb3VsYXJQcm9kdWN0cy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgbXlQcm9kdWN0c0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICBhbGxQcm9kdWN0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIHBvcHVsYXJQcm9kdWN0c0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgfVxuICBjb25zdCBhbGxQcm9kdWN0RnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgYWxsUHJvZHVjdHMoKTtcbiAgICBpbnB1dFNlYXJjaC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgbXlQcm9kdWN0cy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgbmF2U2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIGFsbFByb2R1Y3QuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgIHBvdWxhclByb2R1Y3RzLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICBteVByb2R1Y3RzQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIGFsbFByb2R1Y3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgcG9wdWxhclByb2R1Y3RzQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICB9O1xuICAvLyBuYXZpZ2F0aW9ucyBldmVudHNcbiAgYWxsUHJvZHVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFsbFByb2R1Y3RGdW5jdGlvbik7XG4gIG15UHJvZHVjdHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbXlQcm9kdWN0c0NvbnRyb2xsKCk7XG4gICAgbXlQcm9kdWN0cy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgbmF2U2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBhbGxQcm9kdWN0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICBwb3VsYXJQcm9kdWN0cy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgbXlQcm9kdWN0c0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICBhbGxQcm9kdWN0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIGlucHV0U2VhcmNoLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICBwb3B1bGFyUHJvZHVjdHNCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIH0pO1xuICBsb2dvTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFsbFByb2R1Y3RGdW5jdGlvbik7XG4gIHBvcHVsYXJQcm9kdWN0c0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBwb3B1bGFyUHJvZHVjdCgpO1xuICAgIG15UHJvZHVjdHMuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIG5hdlNlY3Rpb24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgYWxsUHJvZHVjdC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgcG91bGFyUHJvZHVjdHMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgIGlucHV0U2VhcmNoLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICBteVByb2R1Y3RzQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIGFsbFByb2R1Y3RCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgcG9wdWxhclByb2R1Y3RzQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICB9KTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmV4cG9ydCBjb25zdCBzbGljZU9iaiA9IChvYmo6cHJvZHVjdE9iamVjdCwgc3RhcnQ6bnVtYmVyLCBlbmQ6bnVtYmVyKTpwcm9kdWN0T2JqZWN0ID0+IHtcbiAgY29uc3QgcmVzdWx0OnByb2R1Y3RPYmplY3QgPSB7fTtcbiAgbGV0IGZpcnN0Q291bnRlcjpudW1iZXIgPSBzdGFydDtcbiAgY29uc3Qgb2JqS2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gIGZvciAobGV0IGl0ZW0gPSBzdGFydDsgaXRlbSA8IGVuZDsgaXRlbSsrKSB7XG4gICAgaWYgKGZpcnN0Q291bnRlciA+PSBlbmQpIHtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIGlmIChvYmpLZXlzW2l0ZW1dKSB7XG4gICAgICByZXN1bHRbb2JqS2V5c1tpdGVtXV0gPSBvYmpbb2JqS2V5c1tpdGVtXV07XG4gICAgfVxuICAgIGZpcnN0Q291bnRlcisrO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKTtcbiIsImNvbnN0IGxpa2VzVXJsID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL3pTZnFsY3I2WnFSQ2RkazEwV0hWL2xpa2VzJztcbmV4cG9ydCBjb25zdCBnZW5lcmF0ZUxpa2VzID0gKGRhdGE6e1xuICAgIGl0ZW1faWQ6bnVtYmVyXG59KSA9PiB7XG4gIGZldGNoKGxpa2VzVXJsLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczogeyAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgIH1cbiAgfSk7XG59O1xuIiwiaW1wb3J0IHsgcHJvZHVjdCB9IGZyb20gJy4vdHlwZXMvZGF0YSc7XG5cbmNvbnN0IGxpa2VzVXJsID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL3pTZnFsY3I2WnFSQ2RkazEwV0hWL2xpa2VzLyc7XG5jb25zdCBnZXRMaWtlc0RhdGEgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGxpa2VzVXJsKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIHJldHVybiBkYXRhO1xufTtcbmV4cG9ydCBjb25zdCBnZXRMaWtlcyA9IChwcm9kdWN0RGF0YTpwcm9kdWN0W10sIGNhbGxmbjoocmVzdWx0OntcbiAgICBbaW5kZXg6c3RyaW5nXTpwcm9kdWN0XG4gICAgfSk9PnZvaWQpID0+IHtcbiAgY29uc3QgZmluYWxEYXRhID0gZ2V0TGlrZXNEYXRhKCk7XG5cbiAgZmluYWxEYXRhLnRoZW4oKGl0ZW1zOntpdGVtX2lkOm51bWJlciwgbGlrZXM6bnVtYmVyfVtdKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0OntcbiAgICAgICAgICAgIFtpbmRleDpzdHJpbmddOnByb2R1Y3RcbiAgICAgICAgfSA9IHt9O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvZHVjdERhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJlc3VsdFtgJHtwcm9kdWN0RGF0YVtpXS5pZH1gXSA9IHsgLi4ucHJvZHVjdERhdGFbaV0sIGxpa2VzOiAwIH07XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJlc3VsdFtpdGVtc1tpXS5pdGVtX2lkXS5saWtlcyA9IGl0ZW1zW2ldLmxpa2VzO1xuICAgIH1cbiAgICBjYWxsZm4ocmVzdWx0KTtcbiAgfSk7XG59O1xuIiwiY29uc3QgaGlkZVNob3dOYXZFbGVtZW50cyA9IChub2RlTHN0Ok5vZGVMaXN0T2Y8SFRNTEFuY2hvckVsZW1lbnQ+LCBzaG93OmJvb2xlYW4pID0+IHtcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG5vZGVMc3QubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgaWYgKHNob3cpIHtcbiAgICAgIG5vZGVMc3RbaW5kZXhdLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH0gZWxzZSB7XG4gICAgICBub2RlTHN0W2luZGV4XS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgfVxufTtcbmNvbnN0IGNvbnRyb2xVc2VySW5mb1BhZ2UgPSAoKSA9PiB7XG4gIC8vIGNvbnRyb2wgdXNlciBwcm9maWxlIG1lbnVcbiAgY29uc3Qgbm9ybWFsTmF2TWVudTpOb2RlTGlzdE9mPEhUTUxBbmNob3JFbGVtZW50PiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ub3JtYWxOYXYnKTtcbiAgY29uc3QgdXNlckluZm9MaXN0OkhUTUxVTGlzdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlckluZm9MaXN0Jyk7XG4gIGNvbnN0IHByb2ZpbGVNZW51U2Vjb25kQnV0dG9uOkhUTUxCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY29uZFVzZXJJbmZvQ29udHJvbCcpO1xuXG4gIHVzZXJJbmZvTGlzdC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgaGlkZVNob3dOYXZFbGVtZW50cyhub3JtYWxOYXZNZW51LCBmYWxzZSk7XG5cbiAgcHJvZmlsZU1lbnVTZWNvbmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaGlkZVNob3dOYXZFbGVtZW50cyhub3JtYWxOYXZNZW51LCB0cnVlKTtcbiAgICB1c2VySW5mb0xpc3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgbmF2TWVudSA9ICgpID0+IHtcbiAgLy8gY29udHJvbCBhbGwgbW9iaWxlIG1lbnVcbiAgbGV0IGZsYWcgPSB0cnVlO1xuICBjb25zdCBtZW51QnV0dG9uOkhUTUxCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNob3dOYXZCdXR0b24nKTtcbiAgY29uc3QgbWVudTpOb2RlTGlzdE9mPEhUTUxBbmNob3JFbGVtZW50PiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZMaW5rJyk7XG4gIGNvbnN0IHVzZXJJbmZvTGlzdDpIVE1MVUxpc3RFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXJJbmZvTGlzdCcpO1xuICB1c2VySW5mb0xpc3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICBpZiAoc2NyZWVuLndpZHRoID4gNzY4KSB7XG4gICAgICBoaWRlU2hvd05hdkVsZW1lbnRzKG1lbnUsIHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoaWRlU2hvd05hdkVsZW1lbnRzKG1lbnUsICFmbGFnKTtcbiAgICB9XG4gIH0pO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICBpZiAoc2NyZWVuLndpZHRoID4gNzY4KSB7XG4gICAgICBoaWRlU2hvd05hdkVsZW1lbnRzKG1lbnUsIHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoaWRlU2hvd05hdkVsZW1lbnRzKG1lbnUsICFmbGFnKTtcbiAgICB9XG4gIH0pO1xuICBoaWRlU2hvd05hdkVsZW1lbnRzKG1lbnUsICFmbGFnKTtcbiAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAoZmxhZykge1xuICAgICAgbWVudUJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKC4uL3NyYy9pbWFnZXMvdXBsb2FkLnBuZyknO1xuXG4gICAgICBoaWRlU2hvd05hdkVsZW1lbnRzKG1lbnUsIGZsYWcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoaWRlU2hvd05hdkVsZW1lbnRzKG1lbnUsIGZsYWcpO1xuICAgICAgdXNlckluZm9MaXN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBtZW51QnV0dG9uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoLi4vc3JjL2ltYWdlcy9hcnJvdy1kb3duLXNpZ24tdG8tbmF2aWdhdGUucG5nKSc7XG4gICAgfVxuICAgIGZsYWcgPSAhZmxhZztcbiAgfSk7XG4gIGNvbnN0IHByb2ZpbGVGdW5jdGlvbiA9ICgpID0+IHtcbiAgICBjb250cm9sVXNlckluZm9QYWdlKCk7XG4gIH07XG4gICAgLy8gY29udHJvbCB1c2VyIGluZm8gbWVudVxuICBpZiAod2luZG93LnNjcmVlbi53aWR0aCA8IDc2OCkge1xuICAgIGNvbnN0IHByb2ZpbGVNZW51QnV0dG9uOkhUTUxCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXJpbmZvQ29udHJvbCcpO1xuICAgIHByb2ZpbGVNZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHJvZmlsZUZ1bmN0aW9uKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBwcm9maWxlTWVudUJ1dHRvbjpIVE1MQnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VyaW5mb0NvbnRyb2wnKTtcbiAgICBwcm9maWxlTWVudUJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHByb2ZpbGVGdW5jdGlvbik7XG4gIH1cbn07XG4iLCJpbXBvcnQgZG9tRnVuY3Rpb3MgZnJvbSAnLi9hZGREYXRhVG9Eb20nO1xuaW1wb3J0IHsgc2xpY2VPYmogfSBmcm9tICcuJztcbmltcG9ydCB7IHByb2R1Y3RPYmplY3QgfSBmcm9tICcuL3R5cGVzL2RhdGEnO1xuaW1wb3J0IHsgcGFnZXMgfSBmcm9tICcuL3R5cGVzL3BhZ2VUeXBlJztcblxuZXhwb3J0IGNvbnN0IG15UHJvZHVjdHNDb250cm9sbCA9ICgpID0+IHtcbiAgY29uc3QgcGFnaW5hdGlvbkNvbnRyb2xsZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnaW5hdGlvbkNvbnRyb2xsZXInKTtcbiAgcGFnaW5hdGlvbkNvbnRyb2xsZXIuaW5uZXJIVE1MID0gYDxidXR0b24gY2xhc3M9XCJnb0JhY2sgaGlkZVwiPkdvIEJhY2sgPGhyPjwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwibmV4dEJ1dHRvblwiPk5leHQgcGFnZSA8aHI+PC9idXR0b24+YDtcbiAgY29uc3QgYWxsUHJvZHVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbGxQcm9kdWN0cycpKSB8fCB7fTtcbiAgY29uc3QgbmV4dFBhZ2U6SFRNTEJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV4dEJ1dHRvbicpO1xuICBjb25zdCBiYWNrUGFnZTpIVE1MQnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nb0JhY2snKTtcbiAgY29uc3QgcHJvZHVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsUHJvZHVjdExpc3QnKTtcbiAgY29uc3QgaXNFbXB0eSA9IE9iamVjdC5rZXlzKGFsbFByb2R1Y3RzKS5sZW5ndGggPiAwO1xuICAvLyBoYW5kbGUgYXBpc1xuICBsZXQgc3RhcnQ6bnVtYmVyID0gaXNFbXB0eSAmJiAwO1xuICBsZXQgZW5kID0gNjtcbiAgY29uc3QgZmluYWxEYXRhOnByb2R1Y3RPYmplY3QgPSBmaWx0ZXJPYmooYWxsUHJvZHVjdHMpO1xuICBjb25zdCByZXN1bHRPYmogPSBzbGljZU9iaihmaW5hbERhdGEsIHN0YXJ0LCBlbmQpO1xuICBpZiAoaXNFbXB0eSkge1xuICAgIGRvbUZ1bmN0aW9zLmFkZFRvRG9tKHJlc3VsdE9iaiwgcGFnZXMuTXlQcm9kdWN0KTtcbiAgICBuZXh0UGFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHN0YXJ0ICs9IDY7XG4gICAgICBlbmQgKz0gNjtcbiAgICAgIGJhY2tQYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGVCYWNrQnV0dG9uJyk7XG4gICAgICBpZiAoc3RhcnQgPCBPYmplY3Qua2V5cyhmaW5hbERhdGEpLmxlbmd0aCkge1xuICAgICAgICBwcm9kdWN0TGlzdC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgZG9tRnVuY3Rpb3MuYWRkVG9Eb20oc2xpY2VPYmooZmluYWxEYXRhLCBzdGFydCwgZW5kKSwgcGFnZXMuTXlQcm9kdWN0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXJ0IC09IDY7XG4gICAgICAgIGVuZCAtPSA2O1xuICAgICAgICBuZXh0UGFnZS5jbGFzc0xpc3QuYWRkKCdoaWRlTmV4dEJ1dHRvbicpO1xuICAgICAgfVxuICAgICAgaWYgKChzdGFydCArIDYpID4gT2JqZWN0LmtleXMoZmluYWxEYXRhKS5sZW5ndGgpIHtcbiAgICAgICAgbmV4dFBhZ2UuY2xhc3NMaXN0LmFkZCgnaGlkZU5leHRCdXR0b24nKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoKHN0YXJ0ICsgNikgPiBPYmplY3Qua2V5cyhmaW5hbERhdGEpLmxlbmd0aCkge1xuICAgICAgbmV4dFBhZ2UuY2xhc3NMaXN0LmFkZCgnaGlkZU5leHRCdXR0b24nKTtcbiAgICB9XG4gICAgYmFja1BhZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBzdGFydCAtPSA2O1xuICAgICAgZW5kIC09IDY7XG4gICAgICBuZXh0UGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlTmV4dEJ1dHRvbicpO1xuICAgICAgaWYgKHN0YXJ0ID49IDApIHtcbiAgICAgICAgcHJvZHVjdExpc3QuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGRvbUZ1bmN0aW9zLmFkZFRvRG9tKHNsaWNlT2JqKGZpbmFsRGF0YSwgc3RhcnQsIGVuZCksIHBhZ2VzLk15UHJvZHVjdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGFydCArPSA2O1xuICAgICAgICBlbmQgKz0gNjtcbiAgICAgICAgYmFja1BhZ2UuY2xhc3NMaXN0LmFkZCgnaGlkZUJhY2tCdXR0b24nKTtcbiAgICAgIH1cblxuICAgICAgaWYgKChzdGFydCAtIDYpIDwgMCkge1xuICAgICAgICBiYWNrUGFnZS5jbGFzc0xpc3QuYWRkKCdoaWRlQmFja0J1dHRvbicpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmICgoc3RhcnQgLSA2KSA8IDApIHtcbiAgICAgIGJhY2tQYWdlLmNsYXNzTGlzdC5hZGQoJ2hpZGVCYWNrQnV0dG9uJyk7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBmaWx0ZXJPYmogPSAoZGF0YTpwcm9kdWN0T2JqZWN0KTpwcm9kdWN0T2JqZWN0ID0+IHtcbiAgY29uc3QgcHJvZHVjdHMgPSBPYmplY3Qua2V5cyhkYXRhKTtcbiAgY29uc3QgZW5kID0gcHJvZHVjdHMubGVuZ3RoO1xuICBjb25zdCByZXN1bHQ6cHJvZHVjdE9iamVjdCA9IHt9O1xuICBmb3IgKGxldCBpdGVtID0gMDsgaXRlbSA8IGVuZDsgaXRlbSsrKSB7XG4gICAgaWYgKGRhdGFbcHJvZHVjdHNbaXRlbV1dLm15UHJvZHVjdCkge1xuICAgICAgcmVzdWx0W3Byb2R1Y3RzW2l0ZW1dXSA9IGRhdGFbcHJvZHVjdHNbaXRlbV1dO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsImltcG9ydCB7IGdldERhdGEgfSBmcm9tICcuL2RhdGEnO1xuaW1wb3J0IHsgZ2V0TGlrZXMgfSBmcm9tICcuL2xpa2VzR2V0dGVyJztcbmltcG9ydCBkb21GdW5jdGlvcyBmcm9tICcuL2FkZERhdGFUb0RvbSc7XG5pbXBvcnQgeyBzbGljZU9iaiB9IGZyb20gJy4nO1xuaW1wb3J0IHsgcHJvZHVjdE9iamVjdCB9IGZyb20gJy4vdHlwZXMvZGF0YSc7XG5pbXBvcnQgeyBwYWdlcyB9IGZyb20gJy4vdHlwZXMvcGFnZVR5cGUnO1xuXG5leHBvcnQgY29uc3QgcG9wdWxhclByb2R1Y3QgPSAoKSA9PiB7XG4gIGNvbnN0IHBhZ2luYXRpb25Db250cm9sbGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2luYXRpb25Db250cm9sbGVyJyk7XG4gIHBhZ2luYXRpb25Db250cm9sbGVyLmlubmVySFRNTCA9IGA8YnV0dG9uIGNsYXNzPVwiZ29CYWNrIGhpZGVcIj5HbyBCYWNrIDxocj48L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm5leHRCdXR0b25cIj5OZXh0IHBhZ2UgPGhyPjwvYnV0dG9uPmA7XG4gIGNvbnN0IG5leHRQYWdlOkhUTUxCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5leHRCdXR0b24nKTtcbiAgY29uc3QgYmFja1BhZ2U6SFRNTEJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ29CYWNrJyk7XG4gIGNvbnN0IHByb2R1Y3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbFByb2R1Y3RMaXN0Jyk7XG4gIG5leHRQYWdlLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgYmFja1BhZ2Uuc3R5bGUuZGlzcGxheSA9ICcnO1xuICAvLyBoYW5kbGUgYXBpc1xuICBsZXQgc3RhcnQgPSAwO1xuICBsZXQgZW5kID0gNjtcbiAgY29uc3QgZmluYWxEYXRhOnByb2R1Y3RPYmplY3QgPSB7fTtcblxuICBnZXREYXRhKChkYXRhKSA9PiB7XG4gICAgZ2V0TGlrZXMoZGF0YSwgKGl0ZW1zKSA9PiB7XG4gICAgICBjb25zdCBpdGVtc0tleXMgPSBPYmplY3Qua2V5cyhpdGVtcyk7XG4gICAgICBmb3IgKGxldCBpdGVtID0gMDsgaXRlbSA8IGl0ZW1zS2V5cy5sZW5ndGg7IGl0ZW0gKz0gMSkge1xuICAgICAgICBpZiAoaXRlbXNbaXRlbXNLZXlzW2l0ZW1dXS5yYXRpbmcucmF0ZSA+IDQpIHtcbiAgICAgICAgICBmaW5hbERhdGFbaXRlbXNLZXlzW2l0ZW1dXSA9IGl0ZW1zW2l0ZW1zS2V5c1tpdGVtXV07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZG9tRnVuY3Rpb3MuYWRkVG9Eb20oc2xpY2VPYmooZmluYWxEYXRhLCBzdGFydCwgZW5kKSwgcGFnZXMuUG9wdWxhclByb2R1Y3QpO1xuICAgIH0pO1xuICB9KTtcbiAgbmV4dFBhZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc3RhcnQgPSBlbmQ7XG4gICAgZW5kICs9IDY7XG4gICAgYmFja1BhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZUJhY2tCdXR0b24nKTtcbiAgICBpZiAoc3RhcnQgPCBPYmplY3Qua2V5cyhmaW5hbERhdGEpLmxlbmd0aCkge1xuICAgICAgcHJvZHVjdExpc3QuaW5uZXJIVE1MID0gJyc7XG4gICAgICBkb21GdW5jdGlvcy5hZGRUb0RvbShzbGljZU9iaihmaW5hbERhdGEsIHN0YXJ0LCBlbmQpLCBwYWdlcy5Qb3B1bGFyUHJvZHVjdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXJ0IC09IDY7XG4gICAgICBlbmQgLT0gNjtcbiAgICAgIG5leHRQYWdlLmNsYXNzTGlzdC5hZGQoJ2hpZGVOZXh0QnV0dG9uJyk7XG4gICAgfVxuICAgIGlmICgoc3RhcnQgKyA2KSA+IE9iamVjdC5rZXlzKGZpbmFsRGF0YSkubGVuZ3RoKSB7XG4gICAgICBuZXh0UGFnZS5jbGFzc0xpc3QuYWRkKCdoaWRlTmV4dEJ1dHRvbicpO1xuICAgIH1cbiAgfSk7XG4gIGJhY2tQYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHN0YXJ0IC09IDY7XG4gICAgZW5kIC09IDY7XG4gICAgbmV4dFBhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZU5leHRCdXR0b24nKTtcbiAgICBpZiAoc3RhcnQgPj0gMCkge1xuICAgICAgcHJvZHVjdExpc3QuaW5uZXJIVE1MID0gJyc7XG4gICAgICBkb21GdW5jdGlvcy5hZGRUb0RvbShzbGljZU9iaihmaW5hbERhdGEsIHN0YXJ0LCBlbmQpLCBwYWdlcy5Qb3B1bGFyUHJvZHVjdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXJ0ICs9IDY7XG4gICAgICBlbmQgKz0gNjtcbiAgICAgIGJhY2tQYWdlLmNsYXNzTGlzdC5hZGQoJ2hpZGVCYWNrQnV0dG9uJyk7XG4gICAgfVxuICAgIGlmICgoc3RhcnQgLSA2KSA8IDApIHtcbiAgICAgIGJhY2tQYWdlLmNsYXNzTGlzdC5hZGQoJ2hpZGVCYWNrQnV0dG9uJyk7XG4gICAgfVxuICB9KTtcbn07XG4iLCJleHBvcnQgZW51bSBwYWdlcyB7XG4gICAgQWxsLFxuICAgIE15UHJvZHVjdCxcbiAgICBQb3B1bGFyUHJvZHVjdFxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==