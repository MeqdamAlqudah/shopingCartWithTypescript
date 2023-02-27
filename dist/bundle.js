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
    var productDataKeys = Object.keys(data);
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
        secondP.textContent = "rate: ".concat(data[productDataKeys[product]].rating.rate);
        p.textContent = "".concat(data[productDataKeys[product]].rating.count, " reviews");
        secondP.textContent = "rate: ".concat(data[productDataKeys[product]].rating.rate);
        p.textContent = "".concat(data[productDataKeys[product]].rating.count, " reviews");
        img.src = data[productDataKeys[product]].image;
        priceLikeDiv.classList.add("priceLike");
        hx.textContent = "".concat(data[productDataKeys[product]].title);
        secondDiv.classList.add("cardDataContainer");
        img.alt = "".concat(data[productDataKeys[product]].title);
        if (data[productDataKeys[product]].myProduct) {
            addToMyProductButton.style.backgroundImage = 'url(../src/images/done.png)';
        }
        else {
            addToMyProductButton.style.backgroundImage = 'url(../src/images/addwhite.png)';
        }
        addToMyProductButton.classList.add("addToMyProducts");
        div.classList.add("ratingDataContainer");
        hx.classList.add("cardTitle");
        priceP.classList.add("priceP");
        likesP.textContent = "".concat(data[productDataKeys[product]].likes);
        likesButton.addEventListener("click", function () {
            var span = Number(likesP.lastChild.textContent);
            (0,_likesGenerator__WEBPACK_IMPORTED_MODULE_0__.generateLikes)({
                item_id: data[productDataKeys[product]].id
            });
            likesButton.style.backgroundImage = 'url(../src/images/likeDark.png)';
            setTimeout(function () {
                likesButton.style.backgroundImage = 'url(../src/images/like.png)';
            }, 500);
            likesP.innerHTML = "<span>".concat(span + 1, "</span>");
        });
        likesButton.classList.add('likesButton');
        likesP.classList.add("likesAmount");
        priceP.textContent = "".concat(data[productDataKeys[product]].price, "$");
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
            allProducts[data[productDataKeys[product]].id].myProduct = !allProducts[data[productDataKeys[product]].id].myProduct;
            if (allProducts[data[productDataKeys[product]].id].myProduct) {
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
    for (var product = 0; product < productDataKeys.length; product += 1) {
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
    var inputContainer = document.getElementById('searchInputContainer');
    inputContainer.innerHTML = "<input type=\"search\" placeholder=\"search...\" id=\"searchBar\">";
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
            var dataInLocalStorage = JSON.parse(sessionStorage.getItem("allProducts")) || false;
            var finalDataKeys = Object.keys(finalData);
            if (!dataInLocalStorage) {
                for (var item = 0; item < finalDataKeys.length; item += 1) {
                    finalData[finalDataKeys[item]]["myProduct"] = false;
                }
            }
            else {
                for (var item = 0; item < finalDataKeys.length; item += 1) {
                    if (!dataInLocalStorage[finalData[finalDataKeys[item]].id]) {
                        finalData[finalDataKeys[item]]["myProduct"] = false;
                    }
                    if (dataInLocalStorage[finalData[finalDataKeys[item]].id].myProduct) {
                        finalData[finalDataKeys[item]]["myProduct"] = true;
                    }
                }
            }
            sessionStorage.setItem("allProducts", JSON.stringify(finalData));
            _addDataToDom__WEBPACK_IMPORTED_MODULE_2__["default"].addToDom((0,___WEBPACK_IMPORTED_MODULE_3__.sliceObj)(finalData, start, end), _types_pageType__WEBPACK_IMPORTED_MODULE_4__.pages.all);
        });
    });
    if ((start - 4) < 0) {
        backPage.classList.add('hideBackButton');
    }
    /// handle search bar 
    var searchBar = document.getElementById("searchBar");
    var searchHandler = function (event) {
        var input = event.target;
        var result = {};
        var finalDataKeys = Object.keys(finalData);
        for (var item = 0; item < finalDataKeys.length; item += 1) {
            if (finalData[finalDataKeys[item]].title.includes(input.value)) {
                result[finalDataKeys[item]] = finalData[finalDataKeys[item]];
            }
        }
        _addDataToDom__WEBPACK_IMPORTED_MODULE_2__["default"].addToDom((0,___WEBPACK_IMPORTED_MODULE_3__.sliceObj)(result, start, end), _types_pageType__WEBPACK_IMPORTED_MODULE_4__.pages.all);
        searchBar.value = "";
    };
    searchBar.removeEventListener('click', searchHandler);
    searchBar.addEventListener('change', searchHandler);
    nextPage.addEventListener('click', function () {
        start = end;
        end += 6;
        backPage.classList.remove('hideBackButton');
        if (start < Object.keys(finalData).length) {
            productList.innerHTML = '';
            _addDataToDom__WEBPACK_IMPORTED_MODULE_2__["default"].addToDom((0,___WEBPACK_IMPORTED_MODULE_3__.sliceObj)(finalData, start, end), _types_pageType__WEBPACK_IMPORTED_MODULE_4__.pages.all);
        }
        else {
            start -= 6;
            end -= 6;
            nextPage.classList.add('hideNextButton');
        }
        if ((start + 4) >= Object.keys(finalData).length) {
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
        if ((start - 4) < 0) {
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
    document.querySelector(".listLoading").classList.remove("hide");
    fetch("https://fakestoreapi.com/products").then(function (res) {
        return res.json();
    }).then(function (json) {
        document.querySelector(".listLoading").classList.add("hide");
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
    //select mini nav buttons 
    var allProductButton = document.querySelector('.all');
    var myProductsButton = document.querySelector('.myproducts');
    var popularProductsButton = document.querySelector('.popular');
    (0,_menuControl__WEBPACK_IMPORTED_MODULE_1__.navMenu)();
    // handle paths
    if (window.location.hash === "" || window.location.hash === "#All") {
        (0,_allProductsControll__WEBPACK_IMPORTED_MODULE_0__.allProducts)();
        myProducts.classList.add('hide');
        allProduct.classList.remove('hide');
        poularProducts.classList.add('hide');
        myProductsButton.classList.remove('active');
        inputSearch.classList.remove('hide');
        navSection.style.display = "flex";
        allProductButton.classList.add('active');
        popularProductsButton.classList.remove('active');
    }
    else if (window.location.hash === "#Myproducts") {
        inputSearch.classList.add('hide');
        (0,_myProductsControll__WEBPACK_IMPORTED_MODULE_2__.myProductsControll)();
        myProducts.classList.remove('hide');
        allProduct.classList.add('hide');
        poularProducts.classList.add('hide');
        myProductsButton.classList.add('active');
        navSection.style.display = "block";
        allProductButton.classList.remove('active');
        popularProductsButton.classList.remove('active');
    }
    else if (window.location.hash === "#Popular") {
        inputSearch.classList.add('hide');
        (0,_popularProduct__WEBPACK_IMPORTED_MODULE_3__.popularProduct)();
        myProducts.classList.add('hide');
        navSection.style.display = "block";
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
        navSection.style.display = "flex";
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
        navSection.style.display = "block";
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
        navSection.style.display = "block";
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
    var profileFunction = function () {
        controlUserInfoPage();
    };
    // control user info menu 
    if (window.screen.width < 768) {
        var profileMenuButton = document.querySelector(".userinfoControl");
        profileMenuButton.addEventListener("click", profileFunction);
    }
    else {
        var profileMenuButton = document.querySelector(".userinfoControl");
        profileMenuButton.removeEventListener("click", profileFunction);
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
    var allProducts = JSON.parse(sessionStorage.getItem("allProducts")) || {};
    var nextPage = document.querySelector('.nextButton');
    var backPage = document.querySelector('.goBack');
    var productList = document.querySelector('.allProductList');
    var isEmpty = Object.keys(allProducts).length > 0 ? true : false;
    // handle apis
    var start = isEmpty && 0;
    var end = 6;
    var finalData = filterObj(allProducts);
    var resultObj = (0,___WEBPACK_IMPORTED_MODULE_1__.sliceObj)(finalData, start, end);
    if (isEmpty) {
        _addDataToDom__WEBPACK_IMPORTED_MODULE_0__["default"].addToDom(resultObj, _types_pageType__WEBPACK_IMPORTED_MODULE_2__.pages.myProduct);
        nextPage.addEventListener('click', function () {
            start += 6;
            end += 6;
            backPage.classList.remove('hideBackButton');
            if (start < Object.keys(finalData).length) {
                productList.innerHTML = '';
                _addDataToDom__WEBPACK_IMPORTED_MODULE_0__["default"].addToDom((0,___WEBPACK_IMPORTED_MODULE_1__.sliceObj)(finalData, start, end), _types_pageType__WEBPACK_IMPORTED_MODULE_2__.pages.myProduct);
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
                _addDataToDom__WEBPACK_IMPORTED_MODULE_0__["default"].addToDom((0,___WEBPACK_IMPORTED_MODULE_1__.sliceObj)(finalData, start, end), _types_pageType__WEBPACK_IMPORTED_MODULE_2__.pages.myProduct);
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
            _addDataToDom__WEBPACK_IMPORTED_MODULE_2__["default"].addToDom((0,___WEBPACK_IMPORTED_MODULE_3__.sliceObj)(finalData, start, end), _types_pageType__WEBPACK_IMPORTED_MODULE_4__.pages.popularProduct);
        });
    });
    nextPage.addEventListener('click', function () {
        start = end;
        end += 6;
        backPage.classList.remove('hideBackButton');
        if (start < Object.keys(finalData).length) {
            productList.innerHTML = '';
            _addDataToDom__WEBPACK_IMPORTED_MODULE_2__["default"].addToDom((0,___WEBPACK_IMPORTED_MODULE_3__.sliceObj)(finalData, start, end), _types_pageType__WEBPACK_IMPORTED_MODULE_4__.pages.popularProduct);
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
            _addDataToDom__WEBPACK_IMPORTED_MODULE_2__["default"].addToDom((0,___WEBPACK_IMPORTED_MODULE_3__.sliceObj)(finalData, start, end), _types_pageType__WEBPACK_IMPORTED_MODULE_4__.pages.popularProduct);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1FBQ0QsSUFBRyxDQUFDLEtBQUssR0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUM7WUFDYixRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQzVDO0lBRUwsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3BFRixJQUFZLEtBSVg7QUFKRCxXQUFZLEtBQUs7SUFDYiwrQkFBRztJQUNILDJDQUFTO0lBQ1QscURBQWM7QUFDbEIsQ0FBQyxFQUpXLEtBQUssS0FBTCxLQUFLLFFBSWhCOzs7Ozs7O1VDSkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHBlcjMvLi9zcmMvYWRkRGF0YVRvRG9tLnRzIiwid2VicGFjazovL2V4cGVyMy8uL3NyYy9hbGxQcm9kdWN0c0NvbnRyb2xsLnRzIiwid2VicGFjazovL2V4cGVyMy8uL3NyYy9kYXRhLnRzIiwid2VicGFjazovL2V4cGVyMy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9leHBlcjMvLi9zcmMvbGlrZXNHZW5lcmF0b3IudHMiLCJ3ZWJwYWNrOi8vZXhwZXIzLy4vc3JjL2xpa2VzR2V0dGVyLnRzIiwid2VicGFjazovL2V4cGVyMy8uL3NyYy9tZW51Q29udHJvbC50cyIsIndlYnBhY2s6Ly9leHBlcjMvLi9zcmMvbXlQcm9kdWN0c0NvbnRyb2xsLnRzIiwid2VicGFjazovL2V4cGVyMy8uL3NyYy9wb3B1bGFyUHJvZHVjdC50cyIsIndlYnBhY2s6Ly9leHBlcjMvLi9zcmMvdHlwZXMvcGFnZVR5cGUudHMiLCJ3ZWJwYWNrOi8vZXhwZXIzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4cGVyMy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhwZXIzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhwZXIzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhwZXIzL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vZXhwZXIzL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9leHBlcjMvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdlbmVyYXRlTGlrZXMgfSBmcm9tIFwiLi9saWtlc0dlbmVyYXRvclwiO1xyXG5pbXBvcnQgeyBwcm9kdWN0IH0gZnJvbSBcIi4vdHlwZXMvZGF0YVwiO1xyXG5pbXBvcnQgeyBwYWdlcyB9IGZyb20gXCIuL3R5cGVzL3BhZ2VUeXBlXCI7XHJcblxyXG5jb25zdCBhZGRUb0RvbSA9IChkYXRhOntcclxuICAgIFtpbmRleDpzdHJpbmddOnByb2R1Y3RcclxufSxwYWdlVHlwZTpudW1iZXIpPT57XHJcbiAgICBsZXQgcHJvZHVjdExpc3Q6SFRNTFVMaXN0RWxlbWVudDtcclxuICAgIGlmKHBhZ2VUeXBlID09PSBwYWdlcy5hbGwpe1xyXG4gICAgICAgIHByb2R1Y3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hbGxQcm9kdWN0TGlzdFwiKTtcclxuICAgIH1lbHNlIGlmKHBhZ2VUeXBlID09PSBwYWdlcy5teVByb2R1Y3Qpe1xyXG4gICAgICAgIHByb2R1Y3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5teVByb2R1Y3RMaXN0XCIpO1xyXG4gICAgfWVsc2UgaWYocGFnZVR5cGUgPT09IHBhZ2VzLnBvcHVsYXJQcm9kdWN0KSB7XHJcbiAgICAgICAgcHJvZHVjdExpc3Q9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdWxhclByb2R1Y3RzTGlzdFwiKTtcclxuICAgIH1cclxuICAgIHByb2R1Y3RMaXN0LmlubmVySFRNTCA9ICcnO1xyXG4gICAgY29uc3QgcHJvZHVjdERhdGFLZXlzOnN0cmluZ1tdID0gT2JqZWN0LmtleXMoZGF0YSk7XHJcbiAgICBmb3IobGV0IHByb2R1Y3QgPSAwIDtwcm9kdWN0IDxwcm9kdWN0RGF0YUtleXMubGVuZ3RoO3Byb2R1Y3QrPTEpe1xyXG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgY29uc3QgaHggID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gICAgICAgIGNvbnN0IHA6SFRNTFBhcmFncmFwaEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBzZWNvbmRQOkhUTUxQYXJhZ3JhcGhFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgY29uc3QgaHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHJcIik7XHJcbiAgICAgICAgY29uc3QgbGlrZXNQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGNvbnN0IHNlY29uZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IGxpa2VzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgY29uc3QgcHJpY2VQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGNvbnN0IHByaWNlTGlrZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IGFkZFRvTXlQcm9kdWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgLy8gbWFuYWdlIGVsZW1lbnRzIHRleHQgY29udGVudFxyXG4gICAgICAgIHNlY29uZFAudGV4dENvbnRlbnQgPSBgcmF0ZTogJHtkYXRhW3Byb2R1Y3REYXRhS2V5c1twcm9kdWN0XV0ucmF0aW5nLnJhdGV9YDtcclxuICAgICAgICBwLnRleHRDb250ZW50ID0gYCR7ZGF0YVtwcm9kdWN0RGF0YUtleXNbcHJvZHVjdF1dLnJhdGluZy5jb3VudH0gcmV2aWV3c2A7XHJcbiAgICAgICAgc2Vjb25kUC50ZXh0Q29udGVudCA9IGByYXRlOiAke2RhdGFbcHJvZHVjdERhdGFLZXlzW3Byb2R1Y3RdXS5yYXRpbmcucmF0ZX1gO1xyXG4gICAgICAgIHAudGV4dENvbnRlbnQgPSBgJHtkYXRhW3Byb2R1Y3REYXRhS2V5c1twcm9kdWN0XV0ucmF0aW5nLmNvdW50fSByZXZpZXdzYDtcclxuICAgICAgICBpbWcuc3JjID0gZGF0YVtwcm9kdWN0RGF0YUtleXNbcHJvZHVjdF1dLmltYWdlO1xyXG4gICAgICAgIHByaWNlTGlrZURpdi5jbGFzc0xpc3QuYWRkKFwicHJpY2VMaWtlXCIpO1xyXG4gICAgICAgIGh4LnRleHRDb250ZW50ID0gYCR7ZGF0YVtwcm9kdWN0RGF0YUtleXNbcHJvZHVjdF1dLnRpdGxlfWA7XHJcbiAgICAgICAgc2Vjb25kRGl2LmNsYXNzTGlzdC5hZGQoXCJjYXJkRGF0YUNvbnRhaW5lclwiKTtcclxuICAgICAgICBpbWcuYWx0ID0gYCR7ZGF0YVtwcm9kdWN0RGF0YUtleXNbcHJvZHVjdF1dLnRpdGxlfWA7XHJcbiAgICAgICAgaWYoZGF0YVtwcm9kdWN0RGF0YUtleXNbcHJvZHVjdF1dLm15UHJvZHVjdCl7XHJcbiAgICAgICAgYWRkVG9NeVByb2R1Y3RCdXR0b24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybCguLi9zcmMvaW1hZ2VzL2RvbmUucG5nKSc7ICAgXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgYWRkVG9NeVByb2R1Y3RCdXR0b24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybCguLi9zcmMvaW1hZ2VzL2FkZHdoaXRlLnBuZyknO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhZGRUb015UHJvZHVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWRkVG9NeVByb2R1Y3RzXCIpO1xyXG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwicmF0aW5nRGF0YUNvbnRhaW5lclwiKTtcclxuICAgICAgICBoeC5jbGFzc0xpc3QuYWRkKFwiY2FyZFRpdGxlXCIpO1xyXG4gICAgICAgIHByaWNlUC5jbGFzc0xpc3QuYWRkKFwicHJpY2VQXCIpO1xyXG4gICAgICAgIGxpa2VzUC50ZXh0Q29udGVudCA9IGAke2RhdGFbcHJvZHVjdERhdGFLZXlzW3Byb2R1Y3RdXS5saWtlc31gXHJcbiAgICAgICAgbGlrZXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PntcclxuICAgICAgICAgICAgY29uc3Qgc3BhbiA9IE51bWJlcihsaWtlc1AubGFzdENoaWxkLnRleHRDb250ZW50KTtcclxuICAgICAgICAgICAgZ2VuZXJhdGVMaWtlcyh7XHJcbiAgICAgICAgICAgICAgICBpdGVtX2lkOmRhdGFbcHJvZHVjdERhdGFLZXlzW3Byb2R1Y3RdXS5pZFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBsaWtlc0J1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKC4uL3NyYy9pbWFnZXMvbGlrZURhcmsucG5nKSc7ICBcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgbGlrZXNCdXR0b24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybCguLi9zcmMvaW1hZ2VzL2xpa2UucG5nKSc7ICBcclxuICAgICAgICAgICAgfSw1MDApXHJcbiAgICAgICAgICAgIGxpa2VzUC5pbm5lckhUTUwgPSBgPHNwYW4+JHtzcGFuKzF9PC9zcGFuPmBcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIGxpa2VzQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2xpa2VzQnV0dG9uJyk7XHJcbiAgICAgICAgbGlrZXNQLmNsYXNzTGlzdC5hZGQoXCJsaWtlc0Ftb3VudFwiKVxyXG4gICAgICAgIHByaWNlUC50ZXh0Q29udGVudCA9IGAke2RhdGFbcHJvZHVjdERhdGFLZXlzW3Byb2R1Y3RdXS5wcmljZX0kYFxyXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChwKTtcclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoc2Vjb25kUCk7XHJcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQoaW1nKTtcclxuICAgICAgICBsaS5hcHBlbmRDaGlsZChzZWNvbmREaXYpXHJcbiAgICAgICAgc2Vjb25kRGl2LmFwcGVuZENoaWxkKGh4KTtcclxuICAgICAgICBzZWNvbmREaXYuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgICAgICBzZWNvbmREaXYuYXBwZW5kQ2hpbGQoaHIpO1xyXG4gICAgICAgIHByaWNlTGlrZURpdi5hcHBlbmRDaGlsZChwcmljZVApO1xyXG4gICAgICAgIHByaWNlTGlrZURpdi5hcHBlbmRDaGlsZChhZGRUb015UHJvZHVjdEJ1dHRvbik7XHJcbiAgICAgICAgcHJpY2VMaWtlRGl2LmFwcGVuZENoaWxkKGxpa2VzQnV0dG9uKTtcclxuICAgICAgICBzZWNvbmREaXYuYXBwZW5kQ2hpbGQocHJpY2VMaWtlRGl2KTtcclxuICAgICAgICBzZWNvbmREaXYuYXBwZW5kQ2hpbGQobGlrZXNQKVxyXG4gICAgICAgIHByb2R1Y3RMaXN0LmFwcGVuZENoaWxkKGxpKTtcclxuICAgICAgICBhZGRUb015UHJvZHVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcclxuICAgICAgICAgICAgY29uc3QgYWxsUHJvZHVjdHMgPSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2FsbFByb2R1Y3RzJykpO1xyXG4gICAgICAgICAgICBhbGxQcm9kdWN0c1tkYXRhW3Byb2R1Y3REYXRhS2V5c1twcm9kdWN0XV0uaWRdLm15UHJvZHVjdCA9ICFhbGxQcm9kdWN0c1tkYXRhW3Byb2R1Y3REYXRhS2V5c1twcm9kdWN0XV0uaWRdLm15UHJvZHVjdDtcclxuICAgICAgICAgICAgaWYoIGFsbFByb2R1Y3RzW2RhdGFbcHJvZHVjdERhdGFLZXlzW3Byb2R1Y3RdXS5pZF0ubXlQcm9kdWN0KXtcclxuICAgICAgICAgICAgICAgIGFkZFRvTXlQcm9kdWN0QnV0dG9uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoLi4vc3JjL2ltYWdlcy9kb25lLnBuZyknOyAgIFxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocGFnZVR5cGUgPT09IHBhZ2VzLm15UHJvZHVjdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RMaXN0LnJlbW92ZUNoaWxkKGxpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhZGRUb015UHJvZHVjdEJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKC4uL3NyYy9pbWFnZXMvYWRkd2hpdGUucG5nKSc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2FsbFByb2R1Y3RzJyxKU09OLnN0cmluZ2lmeShhbGxQcm9kdWN0cykpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGFkZFRvRG9tXHJcbn0iLCJpbXBvcnQgeyBnZXREYXRhIH0gZnJvbSAnLi9kYXRhJztcclxuaW1wb3J0IHsgZ2V0TGlrZXMgfSBmcm9tICcuL2xpa2VzR2V0dGVyJztcclxuaW1wb3J0IGRvbUZ1bmN0aW9zIGZyb20gJy4vYWRkRGF0YVRvRG9tJztcclxuaW1wb3J0IHsgc2xpY2VPYmogfSBmcm9tICcuJztcclxuaW1wb3J0IHsgcHJvZHVjdE9iamVjdCB9IGZyb20gJy4vdHlwZXMvZGF0YSc7XHJcbmltcG9ydCB7IHBhZ2VzIH0gZnJvbSAnLi90eXBlcy9wYWdlVHlwZSc7XHJcblxyXG5leHBvcnQgY29uc3QgYWxsUHJvZHVjdHMgPSAoKT0+e1xyXG4gICAgICAgIGNvbnN0IGlucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaElucHV0Q29udGFpbmVyJyk7XHJcbiAgICAgICAgaW5wdXRDb250YWluZXIuaW5uZXJIVE1MID0gYDxpbnB1dCB0eXBlPVwic2VhcmNoXCIgcGxhY2Vob2xkZXI9XCJzZWFyY2guLi5cIiBpZD1cInNlYXJjaEJhclwiPmA7XHJcbiAgICAgICAgY29uc3QgcGFnaW5hdGlvbkNvbnRyb2xsZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnaW5hdGlvbkNvbnRyb2xsZXInKTtcclxuICAgICAgICBwYWdpbmF0aW9uQ29udHJvbGxlci5pbm5lckhUTUwgPSBgPGJ1dHRvbiBjbGFzcz1cImdvQmFjayBoaWRlXCI+R28gQmFjayA8aHI+PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm5leHRCdXR0b25cIj5OZXh0IHBhZ2UgPGhyPjwvYnV0dG9uPmA7XHJcbiAgICAgICAgY29uc3QgbmV4dFBhZ2U6SFRNTEJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV4dEJ1dHRvbicpO1xyXG4gICAgICAgIGNvbnN0IGJhY2tQYWdlOkhUTUxCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdvQmFjaycpO1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbFByb2R1Y3RMaXN0Jyk7XHJcbiAgICAgICAgbmV4dFBhZ2Uuc3R5bGUuZGlzcGxheSA9ICcnO1xyXG4gICAgICAgIGJhY2tQYWdlLnN0eWxlLmRpc3BsYXkgPSAnJztcclxuICAgICAgIFxyXG4gICAgICAgIC8vIGhhbmRsZSBhcGlzXHJcbiAgICAgICAgbGV0IHN0YXJ0ID0gMDtcclxuICAgICAgICBsZXQgZW5kID0gNjtcclxuICAgICAgICBsZXQgZmluYWxEYXRhOnByb2R1Y3RPYmplY3Q7XHJcbiAgICAgICAgZ2V0RGF0YSgoZGF0YSk9PntcclxuICAgICAgICBnZXRMaWtlcyhkYXRhLChpdGVtcyk9PntcclxuICAgICAgICAgICAgZmluYWxEYXRhID0gaXRlbXNcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGFJbkxvY2FsU3RvcmFnZSA9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImFsbFByb2R1Y3RzXCIpKXx8IGZhbHNlO1xyXG4gICAgICAgICAgICBjb25zdCBmaW5hbERhdGFLZXlzID0gT2JqZWN0LmtleXMoZmluYWxEYXRhKTtcclxuICAgICAgICAgICAgaWYoIWRhdGFJbkxvY2FsU3RvcmFnZSl7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGl0ZW0gPSAwO2l0ZW0gPGZpbmFsRGF0YUtleXMubGVuZ3RoOyBpdGVtKz0xKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxEYXRhW2ZpbmFsRGF0YUtleXNbaXRlbV1dW1wibXlQcm9kdWN0XCJdID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgZm9yKGxldCBpdGVtID0gMDtpdGVtIDxmaW5hbERhdGFLZXlzLmxlbmd0aDsgaXRlbSs9MSl7XHJcbiAgICAgICAgICAgICAgICBpZighZGF0YUluTG9jYWxTdG9yYWdlWyBmaW5hbERhdGFbZmluYWxEYXRhS2V5c1tpdGVtXV0uaWRdKXtcclxuICAgICAgICAgICAgICAgICAgICBmaW5hbERhdGFbZmluYWxEYXRhS2V5c1tpdGVtXV1bXCJteVByb2R1Y3RcIl0gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKGRhdGFJbkxvY2FsU3RvcmFnZVtmaW5hbERhdGFbZmluYWxEYXRhS2V5c1tpdGVtXV0uaWRdLm15UHJvZHVjdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgZmluYWxEYXRhW2ZpbmFsRGF0YUtleXNbaXRlbV1dW1wibXlQcm9kdWN0XCJdID0gdHJ1ZTsgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJhbGxQcm9kdWN0c1wiLEpTT04uc3RyaW5naWZ5KGZpbmFsRGF0YSkpO1xyXG4gICAgICAgICAgICBkb21GdW5jdGlvcy5hZGRUb0RvbShzbGljZU9iaihmaW5hbERhdGEsc3RhcnQsZW5kKSxwYWdlcy5hbGwpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYoKHN0YXJ0LTQpIDwgMCl7ICBcclxuICAgICAgICAgICAgYmFja1BhZ2UuY2xhc3NMaXN0LmFkZCgnaGlkZUJhY2tCdXR0b24nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgIC8vLyBoYW5kbGUgc2VhcmNoIGJhciBcclxuICAgICAgICAgY29uc3Qgc2VhcmNoQmFyOkhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaEJhclwiKWFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgIGNvbnN0IHNlYXJjaEhhbmRsZXIgPSAoZXZlbnQ6RXZlbnQpPT57XHJcbiAgICAgICAgICAgIGNvbnN0IGlucHV0PSBldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0OnByb2R1Y3RPYmplY3QgPSB7fTtcclxuICAgICAgICAgICAgY29uc3QgZmluYWxEYXRhS2V5cyA9IE9iamVjdC5rZXlzKGZpbmFsRGF0YSk7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaXRlbSA9IDA7aXRlbSA8ZmluYWxEYXRhS2V5cy5sZW5ndGg7IGl0ZW0rPTEpe1xyXG4gICAgICAgICAgICAgICAgaWYoICBmaW5hbERhdGFbZmluYWxEYXRhS2V5c1tpdGVtXV0udGl0bGUuaW5jbHVkZXMoaW5wdXQudmFsdWUpKXtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRbZmluYWxEYXRhS2V5c1tpdGVtXV0gPSAgZmluYWxEYXRhW2ZpbmFsRGF0YUtleXNbaXRlbV1dO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRvbUZ1bmN0aW9zLmFkZFRvRG9tKHNsaWNlT2JqKHJlc3VsdCxzdGFydCxlbmQpLHBhZ2VzLmFsbCk7XHJcbiAgICAgICAgICAgIHNlYXJjaEJhci52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgICAgfTtcclxuICAgICAgICAgICBcclxuICAgICAgICAgc2VhcmNoQmFyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxzZWFyY2hIYW5kbGVyKTtcclxuICAgICAgICAgc2VhcmNoQmFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsc2VhcmNoSGFuZGxlcik7XHJcbiAgICAgICAgIG5leHRQYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xyXG4gICAgICAgICAgICBzdGFydCA9IGVuZDtcclxuICAgICAgICAgICAgZW5kKz02O1xyXG4gICAgICAgICAgICBiYWNrUGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlQmFja0J1dHRvbicpXHJcbiAgICAgICAgICAgIGlmKHN0YXJ0IDwgT2JqZWN0LmtleXMoZmluYWxEYXRhKS5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdExpc3QuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICAgICAgICBkb21GdW5jdGlvcy5hZGRUb0RvbShzbGljZU9iaihmaW5hbERhdGEsc3RhcnQsZW5kKSxwYWdlcy5hbGwpO1xyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzdGFydC09NjtcclxuICAgICAgICAgICAgICAgIGVuZC09NjtcclxuICAgICAgICAgICAgICAgIG5leHRQYWdlLmNsYXNzTGlzdC5hZGQoJ2hpZGVOZXh0QnV0dG9uJylcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoKHN0YXJ0KzQpID49IE9iamVjdC5rZXlzKGZpbmFsRGF0YSkubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIG5leHRQYWdlLmNsYXNzTGlzdC5hZGQoJ2hpZGVOZXh0QnV0dG9uJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuICAgICAgICBiYWNrUGFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcclxuICAgICAgICAgICAgc3RhcnQgLT00O1xyXG4gICAgICAgICAgICBlbmQtPTQ7XHJcbiAgICAgICAgICAgIG5leHRQYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGVOZXh0QnV0dG9uJylcclxuICAgICAgICAgICAgaWYoc3RhcnQgPj0gMCl7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0TGlzdC5pbm5lckhUTUwgPSAnJ1xyXG4gICAgICAgICAgICAgICAgZG9tRnVuY3Rpb3MuYWRkVG9Eb20oc2xpY2VPYmooZmluYWxEYXRhLHN0YXJ0LGVuZCkscGFnZXMuYWxsKTtcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc3RhcnQrPTQ7XHJcbiAgICAgICAgICAgICAgICBlbmQrPTQ7XHJcbiAgICAgICAgICAgICAgICBiYWNrUGFnZS5jbGFzc0xpc3QuYWRkKCdoaWRlQmFja0J1dHRvbicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKChzdGFydC00KSA8IDApeyAgXHJcbiAgICAgICAgICAgICAgICBiYWNrUGFnZS5jbGFzc0xpc3QuYWRkKCdoaWRlQmFja0J1dHRvbicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICBcclxufTtcclxuXHJcbiIsImltcG9ydCB7IHByb2R1Y3QgfSBmcm9tIFwiLi90eXBlcy9kYXRhXCJcclxuXHJcbmV4cG9ydCBjb25zdCBnZXREYXRhID0gKGNhbGw6KGRhdGE6cHJvZHVjdFtdKT0+dm9pZCk9PntcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdExvYWRpbmdcIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIilcclxuICAgIGZldGNoKFwiaHR0cHM6Ly9mYWtlc3RvcmVhcGkuY29tL3Byb2R1Y3RzXCIpLnRoZW4oKHJlcyk9PlxyXG4gICAgICAgIHJlcy5qc29uKClcclxuICAgICkudGhlbigoanNvbik9PntcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3RMb2FkaW5nXCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXHJcbiAgICAgICAgY2FsbChqc29uKVxyXG4gICAgfSlcclxufSIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgYWxsUHJvZHVjdHMgfSBmcm9tICcuL2FsbFByb2R1Y3RzQ29udHJvbGwnO1xyXG5pbXBvcnQgeyBuYXZNZW51IH0gZnJvbSAnLi9tZW51Q29udHJvbCc7XHJcbmltcG9ydCB7IG15UHJvZHVjdHNDb250cm9sbCB9IGZyb20gJy4vbXlQcm9kdWN0c0NvbnRyb2xsJztcclxuaW1wb3J0IHsgcG9wdWxhclByb2R1Y3QgfSBmcm9tICcuL3BvcHVsYXJQcm9kdWN0JztcclxuaW1wb3J0IHsgcHJvZHVjdE9iamVjdCB9IGZyb20gJy4vdHlwZXMvZGF0YSc7XHJcblxyXG4gIGZ1bmN0aW9uIGNvbXBvbmVudCgpIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIC8vIGRlZmluZSBzZWN0aW9ucyBpbiB2YXJpYWJsZXMgXHJcbiAgICBjb25zdCBhbGxQcm9kdWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLkFsbCcpO1xyXG4gICAgY29uc3QgaW5wdXRTZWFyY2ggPSAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaElucHV0Q29udGFpbmVyJyk7XHJcbiAgICBjb25zdCBuYXZTZWN0aW9uOkhUTUxUYWJsZVNlY3Rpb25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdlNlY3Rpb24nKVxyXG4gICAgY29uc3QgbXlQcm9kdWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5NeXByb2R1Y3RzJyk7XHJcbiAgICBjb25zdCBsb2dvTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dvTGluaycpO1xyXG4gICAgY29uc3QgcG91bGFyUHJvZHVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuUG9wdWxhcicpO1xyXG4gICAgLy9zZWxlY3QgbWluaSBuYXYgYnV0dG9ucyBcclxuICAgIGNvbnN0IGFsbFByb2R1Y3RCdXR0b246SFRNTEFuY2hvckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsJyk7XHJcbiAgICBjb25zdCBteVByb2R1Y3RzQnV0dG9uOkhUTUxBbmNob3JFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm15cHJvZHVjdHMnKTtcclxuICAgIGNvbnN0IHBvcHVsYXJQcm9kdWN0c0J1dHRvbjpIVE1MQW5jaG9yRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1bGFyJyk7XHJcbiAgIFxyXG4gICAgbmF2TWVudSgpO1xyXG4gICAgLy8gaGFuZGxlIHBhdGhzXHJcbiAgICBpZih3aW5kb3cubG9jYXRpb24uaGFzaCA9PT0gXCJcIiB8fCB3aW5kb3cubG9jYXRpb24uaGFzaCA9PT0gXCIjQWxsXCIpe1xyXG4gICAgICBhbGxQcm9kdWN0cygpO1xyXG4gICAgICBteVByb2R1Y3RzLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgYWxsUHJvZHVjdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcclxuICAgICAgcG91bGFyUHJvZHVjdHMuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICBteVByb2R1Y3RzQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICBpbnB1dFNlYXJjaC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbiAgICAgIG5hdlNlY3Rpb24uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICBhbGxQcm9kdWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICBwb3B1bGFyUHJvZHVjdHNCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICB9ZWxzZSBpZih3aW5kb3cubG9jYXRpb24uaGFzaCA9PT0gXCIjTXlwcm9kdWN0c1wiKSB7XHJcbiAgICAgIGlucHV0U2VhcmNoLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgbXlQcm9kdWN0c0NvbnRyb2xsKCk7XHJcbiAgICAgIG15UHJvZHVjdHMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG4gICAgICBhbGxQcm9kdWN0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgcG91bGFyUHJvZHVjdHMuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICBteVByb2R1Y3RzQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICBuYXZTZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcclxuICAgICAgYWxsUHJvZHVjdEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgcG9wdWxhclByb2R1Y3RzQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgfWVsc2UgaWYod2luZG93LmxvY2F0aW9uLmhhc2ggPT09IFwiI1BvcHVsYXJcIil7XHJcbiAgICAgIGlucHV0U2VhcmNoLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgcG9wdWxhclByb2R1Y3QoKTtcclxuICAgICAgbXlQcm9kdWN0cy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgIG5hdlNlY3Rpb24uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxyXG4gICAgICBhbGxQcm9kdWN0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxyXG4gICAgICBwb3VsYXJQcm9kdWN0cy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbiAgICAgIG15UHJvZHVjdHNCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgIGFsbFByb2R1Y3RCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgIHBvcHVsYXJQcm9kdWN0c0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGFsbFByb2R1Y3RGdW5jdGlvbiA9ICgpPT57XHJcbiAgICAgIGFsbFByb2R1Y3RzKCk7XHJcbiAgICAgIGlucHV0U2VhcmNoLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuICAgICAgbXlQcm9kdWN0cy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgIG5hdlNlY3Rpb24uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXHJcbiAgICAgIGFsbFByb2R1Y3QuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXHJcbiAgICAgIHBvdWxhclByb2R1Y3RzLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgbXlQcm9kdWN0c0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgYWxsUHJvZHVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgcG9wdWxhclByb2R1Y3RzQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gICAgLy8gbmF2aWdhdGlvbnMgZXZlbnRzIFxyXG4gICAgYWxsUHJvZHVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsYWxsUHJvZHVjdEZ1bmN0aW9uKVxyXG4gICAgbXlQcm9kdWN0c0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcclxuICAgICAgbXlQcm9kdWN0c0NvbnRyb2xsKCk7XHJcbiAgICAgIG15UHJvZHVjdHMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG4gICAgICBuYXZTZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcclxuICAgICAgYWxsUHJvZHVjdC5jbGFzc0xpc3QuYWRkKCdoaWRlJylcclxuICAgICAgcG91bGFyUHJvZHVjdHMuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICBteVByb2R1Y3RzQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICBhbGxQcm9kdWN0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICBpbnB1dFNlYXJjaC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgIHBvcHVsYXJQcm9kdWN0c0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHJcbiAgICB9KVxyXG4gICAgbG9nb0xpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGFsbFByb2R1Y3RGdW5jdGlvbilcclxuICAgIHBvcHVsYXJQcm9kdWN0c0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcclxuICAgICAgcG9wdWxhclByb2R1Y3QoKTtcclxuICAgICAgbXlQcm9kdWN0cy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgIG5hdlNlY3Rpb24uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxyXG4gICAgICBhbGxQcm9kdWN0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxyXG4gICAgICBwb3VsYXJQcm9kdWN0cy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbiAgICAgIGlucHV0U2VhcmNoLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgbXlQcm9kdWN0c0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgYWxsUHJvZHVjdEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgcG9wdWxhclByb2R1Y3RzQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgfSlcclxuICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICBleHBvcnQgY29uc3Qgc2xpY2VPYmogPSAob2JqOnByb2R1Y3RPYmplY3Qsc3RhcnQ6bnVtYmVyLGVuZDpudW1iZXIpOnByb2R1Y3RPYmplY3Q9PntcclxuICAgIGNvbnN0IHJlc3VsdDpwcm9kdWN0T2JqZWN0ID0ge307XHJcbiAgICBsZXQgZmlyc3RDb3VudGVyOm51bWJlciA9IHN0YXJ0O1xyXG4gICAgY29uc3Qgb2JqS2V5cyA9ICBPYmplY3Qua2V5cyhvYmopO1xyXG4gICAgZm9yKGxldCBpdGVtID1zdGFydDtpdGVtIDwgZW5kO2l0ZW0rKyl7XHJcbiAgICAgIGlmKGZpcnN0Q291bnRlciA+PSBlbmQpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgIH1cclxuICAgICAgaWYob2JqS2V5c1tpdGVtXSl7XHJcbiAgICAgIHJlc3VsdFtvYmpLZXlzW2l0ZW1dXSA9IG9ialtvYmpLZXlzW2l0ZW1dXTt9XHJcbiAgICAgIGZpcnN0Q291bnRlcisrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KCkpO1xyXG4iLCJjb25zdCBsaWtlc1VybCA9IFwiaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvelNmcWxjcjZacVJDZGRrMTBXSFYvbGlrZXNcIjtcclxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlTGlrZXMgPSAoZGF0YTp7XHJcbiAgICBpdGVtX2lkOm51bWJlclxyXG59KT0+e1xyXG4gICAgZmV0Y2gobGlrZXNVcmwse1xyXG4gICAgICAgIG1ldGhvZDpcIlBPU1RcIixcclxuICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICBib2R5OkpTT04uc3RyaW5naWZ5KGRhdGEpXHJcbiAgICB9KS50aGVuKChyZXMpPT57XHJcbiAgICAgICAgaWYoIXJlcy5vayl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufTsiLCJpbXBvcnQgeyBwcm9kdWN0IH0gZnJvbSBcIi4vdHlwZXMvZGF0YVwiO1xyXG5cclxuY29uc3QgbGlrZXNVcmwgPSBcImh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL3pTZnFsY3I2WnFSQ2RkazEwV0hWL2xpa2VzL1wiO1xyXG5jb25zdCBnZXRMaWtlc0RhdGEgPSAgYXN5bmMgKCkgPT57XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChsaWtlc1VybCk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgcmV0dXJuIGRhdGFcclxufVxyXG5leHBvcnQgY29uc3QgZ2V0TGlrZXMgPSAgKHByb2R1Y3REYXRhOnByb2R1Y3RbXSAsY2FsbGZuOihyZXN1bHQ6e1xyXG4gICAgW2luZGV4OnN0cmluZ106cHJvZHVjdFxyXG4gICAgfSk9PnZvaWQpPT57XHJcbiAgICBjb25zdCBmaW5hbERhdGE9IGdldExpa2VzRGF0YSgpO1xyXG4gICAgXHJcbiAgICBmaW5hbERhdGEudGhlbigoaXRlbXM6e2l0ZW1faWQ6bnVtYmVyLGxpa2VzOm51bWJlcn1bXSApPT57XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3VsdDp7XHJcbiAgICAgICAgICAgIFtpbmRleDpzdHJpbmddOnByb2R1Y3RcclxuICAgICAgICB9ID0ge31cclxuICAgICAgICBmb3IobGV0IGkgPSAwO2k8cHJvZHVjdERhdGEubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIHJlc3VsdFtgJHtwcm9kdWN0RGF0YVtpXS5pZH1gXSA9IHsuLi5wcm9kdWN0RGF0YVtpXSxsaWtlczowfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGxldCBpID0wO2k8aXRlbXMubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRbaXRlbXNbaV0uaXRlbV9pZF0ubGlrZXMgPSBpdGVtc1tpXS5saWtlcztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FsbGZuKHJlc3VsdCk7XHJcbiAgICB9KVxyXG59IiwiY29uc3QgaGlkZVNob3dOYXZFbGVtZW50cyA9IChub2RlTHN0Ok5vZGVMaXN0T2Y8SFRNTEFuY2hvckVsZW1lbnQ+LHNob3c6Ym9vbGVhbik9PntcclxuICAgIGZvcihsZXQgaW5kZXggPSAwO2luZGV4PG5vZGVMc3QubGVuZ3RoIDtpbmRleCsrKXtcclxuICAgICAgICBpZihzaG93KXtcclxuICAgICAgICAgICAgbm9kZUxzdFtpbmRleF0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIG5vZGVMc3RbaW5kZXhdLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuY29uc3QgY29udHJvbFVzZXJJbmZvUGFnZSA9ICgpPT57XHJcbiAvLyBjb250cm9sIHVzZXIgcHJvZmlsZSBtZW51IFxyXG4gY29uc3Qgbm9ybWFsTmF2TWVudTpOb2RlTGlzdE9mPEhUTUxBbmNob3JFbGVtZW50PiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubm9ybWFsTmF2XCIpO1xyXG4gY29uc3QgdXNlckluZm9MaXN0OkhUTUxVTGlzdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVzZXJJbmZvTGlzdFwiKTtcclxuIGNvbnN0IHByb2ZpbGVNZW51U2Vjb25kQnV0dG9uOkhUTUxCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWNvbmRVc2VySW5mb0NvbnRyb2xcIik7XHJcblxyXG4gdXNlckluZm9MaXN0LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiBoaWRlU2hvd05hdkVsZW1lbnRzKG5vcm1hbE5hdk1lbnUsZmFsc2UpO1xyXG5cclxuIHByb2ZpbGVNZW51U2Vjb25kQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57XHJcbiAgICAgICAgIGhpZGVTaG93TmF2RWxlbWVudHMobm9ybWFsTmF2TWVudSx0cnVlKTtcclxuICAgICAgICAgdXNlckluZm9MaXN0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxyXG4gfSk7XHJcbiBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG5hdk1lbnUgPSAoKT0+e1xyXG4gICAgLy8gY29udHJvbCBhbGwgbW9iaWxlIG1lbnVcclxuICAgIGxldCBmbGFnID0gdHJ1ZTtcclxuICAgIGNvbnN0IG1lbnVCdXR0b246SFRNTEJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNob3dOYXZCdXR0b25cIik7XHJcbiAgICBjb25zdCBtZW51Ok5vZGVMaXN0T2Y8SFRNTEFuY2hvckVsZW1lbnQ+ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZMaW5rXCIpO1xyXG4gICAgY29uc3QgdXNlckluZm9MaXN0OkhUTUxVTGlzdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVzZXJJbmZvTGlzdFwiKTtcclxuICAgIHVzZXJJbmZvTGlzdC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCgpPT57XHJcbiAgICAgICAgaWYoc2NyZWVuLndpZHRoID4gNzY4KXtcclxuICAgICAgICAgICAgaGlkZVNob3dOYXZFbGVtZW50cyhtZW51LHRydWUpO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgaGlkZVNob3dOYXZFbGVtZW50cyhtZW51LCFmbGFnKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsKCk9PntcclxuICAgICAgICBpZihzY3JlZW4ud2lkdGggPiA3Njgpe1xyXG4gICAgICAgICAgICBoaWRlU2hvd05hdkVsZW1lbnRzKG1lbnUsdHJ1ZSk7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICBoaWRlU2hvd05hdkVsZW1lbnRzKG1lbnUsIWZsYWcpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBoaWRlU2hvd05hdkVsZW1lbnRzKG1lbnUsIWZsYWcpXHJcbiAgICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57XHJcbiAgICAgICAgaWYoZmxhZyl7XHJcbiAgICAgICAgICAgIG1lbnVCdXR0b24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoLi4vc3JjL2ltYWdlcy91cGxvYWQucG5nKVwiO1xyXG4gICAgICBcclxuICAgICAgICAgICAgaGlkZVNob3dOYXZFbGVtZW50cyhtZW51LGZsYWcpO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgaGlkZVNob3dOYXZFbGVtZW50cyhtZW51LGZsYWcpO1xyXG4gICAgICAgICAgICB1c2VySW5mb0xpc3Quc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICBtZW51QnV0dG9uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKC4uL3NyYy9pbWFnZXMvYXJyb3ctZG93bi1zaWduLXRvLW5hdmlnYXRlLnBuZylcIlxyXG4gICAgICAgIH1cclxuICAgICAgICBmbGFnID0gIWZsYWdcclxuICAgIH0pO1xyXG4gICAgY29uc3QgcHJvZmlsZUZ1bmN0aW9uID0gKCk9PntcclxuICAgICAgICBjb250cm9sVXNlckluZm9QYWdlKCk7XHJcbiAgICB9O1xyXG4gICAgLy8gY29udHJvbCB1c2VyIGluZm8gbWVudSBcclxuICAgIGlmKHdpbmRvdy5zY3JlZW4ud2lkdGggPCA3Njgpe1xyXG4gICAgY29uc3QgcHJvZmlsZU1lbnVCdXR0b246SFRNTEJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVzZXJpbmZvQ29udHJvbFwiKTtcclxuICAgIHByb2ZpbGVNZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHByb2ZpbGVGdW5jdGlvbik7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBjb25zdCBwcm9maWxlTWVudUJ1dHRvbjpIVE1MQnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXNlcmluZm9Db250cm9sXCIpO1xyXG4gICAgICAgICBwcm9maWxlTWVudUJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIixwcm9maWxlRnVuY3Rpb24pO1xyXG4gICAgfVxyXG59XHJcbiAgIFxyXG5cclxuXHJcbiIsImltcG9ydCBkb21GdW5jdGlvcyBmcm9tICcuL2FkZERhdGFUb0RvbSc7XHJcbmltcG9ydCB7IHNsaWNlT2JqIH0gZnJvbSAnLic7XHJcbmltcG9ydCB7IHByb2R1Y3RPYmplY3QgfSBmcm9tICcuL3R5cGVzL2RhdGEnO1xyXG5pbXBvcnQgeyBwYWdlcyB9IGZyb20gJy4vdHlwZXMvcGFnZVR5cGUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IG15UHJvZHVjdHNDb250cm9sbCA9ICgpPT57XHJcbiAgY29uc3QgcGFnaW5hdGlvbkNvbnRyb2xsZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnaW5hdGlvbkNvbnRyb2xsZXInKTtcclxuICAgICAgICBwYWdpbmF0aW9uQ29udHJvbGxlci5pbm5lckhUTUwgPSBgPGJ1dHRvbiBjbGFzcz1cImdvQmFjayBoaWRlXCI+R28gQmFjayA8aHI+PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm5leHRCdXR0b25cIj5OZXh0IHBhZ2UgPGhyPjwvYnV0dG9uPmA7XHJcbiAgICBjb25zdCBhbGxQcm9kdWN0cyA9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImFsbFByb2R1Y3RzXCIpKSB8fCB7fTtcclxuICAgIGNvbnN0IG5leHRQYWdlOkhUTUxCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5leHRCdXR0b24nKTtcclxuICAgIGNvbnN0IGJhY2tQYWdlOkhUTUxCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdvQmFjaycpO1xyXG4gICAgY29uc3QgcHJvZHVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsUHJvZHVjdExpc3QnKTtcclxuICAgIGNvbnN0IGlzRW1wdHkgPSBPYmplY3Qua2V5cyhhbGxQcm9kdWN0cykubGVuZ3RoID4gMCA/dHJ1ZTpmYWxzZSA7XHJcbiAgICAvLyBoYW5kbGUgYXBpc1xyXG4gICAgbGV0IHN0YXJ0Om51bWJlciA9IGlzRW1wdHkgJiYgMDtcclxuICAgIGxldCBlbmQgPSA2O1xyXG4gICAgY29uc3QgZmluYWxEYXRhOnByb2R1Y3RPYmplY3QgPSBmaWx0ZXJPYmooYWxsUHJvZHVjdHMpO1xyXG4gICAgY29uc3QgcmVzdWx0T2JqID0gc2xpY2VPYmooZmluYWxEYXRhLHN0YXJ0LGVuZCk7XHJcbiAgICBpZihpc0VtcHR5KXtcclxuICAgIGRvbUZ1bmN0aW9zLmFkZFRvRG9tKHJlc3VsdE9iaixwYWdlcy5teVByb2R1Y3QpO1xyXG4gICAgbmV4dFBhZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XHJcbiAgICAgIHN0YXJ0ICs9NjtcclxuICAgICAgZW5kKz02O1xyXG4gICAgICBiYWNrUGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlQmFja0J1dHRvbicpXHJcbiAgICAgIGlmKHN0YXJ0IDwgT2JqZWN0LmtleXMoZmluYWxEYXRhKS5sZW5ndGgpe1xyXG4gICAgICAgICAgcHJvZHVjdExpc3QuaW5uZXJIVE1MID0gJydcclxuICAgICAgICAgIGRvbUZ1bmN0aW9zLmFkZFRvRG9tKHNsaWNlT2JqKGZpbmFsRGF0YSxzdGFydCxlbmQpLHBhZ2VzLm15UHJvZHVjdCk7XHJcbiAgICAgIH1lbHNlIHtcclxuICAgICAgICAgIHN0YXJ0LT02O1xyXG4gICAgICAgICAgZW5kLT02O1xyXG4gICAgICAgICAgbmV4dFBhZ2UuY2xhc3NMaXN0LmFkZCgnaGlkZU5leHRCdXR0b24nKTtcclxuICAgICAgfVxyXG4gICAgICBpZigoc3RhcnQrNikgPiBPYmplY3Qua2V5cyhmaW5hbERhdGEpLmxlbmd0aCl7XHJcbiAgICAgICAgICBuZXh0UGFnZS5jbGFzc0xpc3QuYWRkKCdoaWRlTmV4dEJ1dHRvbicpO1xyXG4gICAgICB9XHJcblxyXG4gICAgIH0pO1xyXG4gICAgIGlmKChzdGFydCs2KSA+IE9iamVjdC5rZXlzKGZpbmFsRGF0YSkubGVuZ3RoKXtcclxuICAgICAgICBuZXh0UGFnZS5jbGFzc0xpc3QuYWRkKCdoaWRlTmV4dEJ1dHRvbicpO1xyXG4gICAgIH1cclxuICAgICBiYWNrUGFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcclxuICAgICAgICBzdGFydCAtPTY7XHJcbiAgICAgICAgZW5kLT02O1xyXG4gICAgICAgIG5leHRQYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGVOZXh0QnV0dG9uJylcclxuICAgICAgICBpZihzdGFydCA+PSAwKXtcclxuICAgICAgICAgICAgcHJvZHVjdExpc3QuaW5uZXJIVE1MID0gJydcclxuICAgICAgICAgICAgZG9tRnVuY3Rpb3MuYWRkVG9Eb20oc2xpY2VPYmooZmluYWxEYXRhLHN0YXJ0LGVuZCkscGFnZXMubXlQcm9kdWN0KTtcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIHN0YXJ0Kz02O1xyXG4gICAgICAgICAgICBlbmQrPTY7XHJcbiAgICAgICAgICAgIGJhY2tQYWdlLmNsYXNzTGlzdC5hZGQoJ2hpZGVCYWNrQnV0dG9uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKChzdGFydC02KSA8IDApeyAgXHJcbiAgICAgICAgICAgIGJhY2tQYWdlLmNsYXNzTGlzdC5hZGQoJ2hpZGVCYWNrQnV0dG9uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBpZigoc3RhcnQtNikgPCAwKXsgIFxyXG4gICAgICAgIGJhY2tQYWdlLmNsYXNzTGlzdC5hZGQoJ2hpZGVCYWNrQnV0dG9uJyk7XHJcbiAgICB9XHJcbiAgICB9XHJcbiAgICBcclxufTtcclxuXHJcblxyXG5jb25zdCBmaWx0ZXJPYmogPSAoZGF0YTpwcm9kdWN0T2JqZWN0KTpwcm9kdWN0T2JqZWN0PT57XHJcbiAgICBjb25zdCBwcm9kdWN0cyA9IE9iamVjdC5rZXlzKGRhdGEpO1xyXG4gICAgY29uc3QgZW5kID0gcHJvZHVjdHMubGVuZ3RoO1xyXG4gICAgY29uc3QgcmVzdWx0OnByb2R1Y3RPYmplY3QgPSB7fTtcclxuICAgIGZvcihsZXQgaXRlbSA9MDtpdGVtIDwgZW5kO2l0ZW0rKyl7XHJcbiAgICAgIGlmKGRhdGFbcHJvZHVjdHNbaXRlbV1dLm15UHJvZHVjdCl7XHJcbiAgICAgICAgcmVzdWx0W3Byb2R1Y3RzW2l0ZW1dXSA9IGRhdGFbcHJvZHVjdHNbaXRlbV1dO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59OyIsImltcG9ydCB7IGdldERhdGEgfSBmcm9tICcuL2RhdGEnO1xyXG5pbXBvcnQgeyBnZXRMaWtlcyB9IGZyb20gJy4vbGlrZXNHZXR0ZXInO1xyXG5pbXBvcnQgZG9tRnVuY3Rpb3MgZnJvbSAnLi9hZGREYXRhVG9Eb20nO1xyXG5pbXBvcnQgeyBzbGljZU9iaiB9IGZyb20gJy4nO1xyXG5pbXBvcnQgeyBwcm9kdWN0T2JqZWN0IH0gZnJvbSAnLi90eXBlcy9kYXRhJztcclxuaW1wb3J0IHsgcGFnZXMgfSBmcm9tICcuL3R5cGVzL3BhZ2VUeXBlJztcclxuXHJcbmV4cG9ydCBjb25zdCBwb3B1bGFyUHJvZHVjdCA9ICgpPT57XHJcbiAgICBjb25zdCBwYWdpbmF0aW9uQ29udHJvbGxlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdpbmF0aW9uQ29udHJvbGxlcicpO1xyXG4gICAgICAgIHBhZ2luYXRpb25Db250cm9sbGVyLmlubmVySFRNTCA9IGA8YnV0dG9uIGNsYXNzPVwiZ29CYWNrIGhpZGVcIj5HbyBCYWNrIDxocj48L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwibmV4dEJ1dHRvblwiPk5leHQgcGFnZSA8aHI+PC9idXR0b24+YDtcclxuICAgIGNvbnN0IG5leHRQYWdlOkhUTUxCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5leHRCdXR0b24nKTtcclxuICAgIGNvbnN0IGJhY2tQYWdlOkhUTUxCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdvQmFjaycpO1xyXG4gICAgY29uc3QgcHJvZHVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsUHJvZHVjdExpc3QnKTtcclxuICAgIG5leHRQYWdlLnN0eWxlLmRpc3BsYXkgPSAnJztcclxuICAgIGJhY2tQYWdlLnN0eWxlLmRpc3BsYXkgPSAnJztcclxuICAgIC8vIGhhbmRsZSBhcGlzXHJcbiAgICBsZXQgc3RhcnQgPSAwO1xyXG4gICAgbGV0IGVuZCA9IDY7XHJcbiAgICBjb25zdCBmaW5hbERhdGE6cHJvZHVjdE9iamVjdCA9IHt9O1xyXG5cclxuICAgIGdldERhdGEoKGRhdGEpPT57XHJcbiAgICBnZXRMaWtlcyhkYXRhLChpdGVtcyk9PntcclxuICAgICAgICBjb25zdCBpdGVtc0tleXMgPSBPYmplY3Qua2V5cyhpdGVtcyk7XHJcbiAgICBmb3IobGV0IGl0ZW0gPTA7aXRlbSA8IGl0ZW1zS2V5cy5sZW5ndGggOyBpdGVtKz0xKXtcclxuICAgICAgICBpZihpdGVtc1tpdGVtc0tleXNbaXRlbV1dLnJhdGluZy5yYXRlID4gNCl7XHJcbiAgICAgICAgICAgIGZpbmFsRGF0YVtpdGVtc0tleXNbaXRlbV1dID0gaXRlbXNbaXRlbXNLZXlzW2l0ZW1dXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgICAgICBkb21GdW5jdGlvcy5hZGRUb0RvbShzbGljZU9iaihmaW5hbERhdGEsc3RhcnQsZW5kKSxwYWdlcy5wb3B1bGFyUHJvZHVjdCk7XHJcbiAgICB9KVxyXG4gICAgfSk7XHJcbiAgICBuZXh0UGFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcclxuICAgICAgICBzdGFydCA9IGVuZDtcclxuICAgICAgICBlbmQrPTY7XHJcbiAgICAgICAgYmFja1BhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZUJhY2tCdXR0b24nKVxyXG4gICAgICAgIGlmKHN0YXJ0IDwgT2JqZWN0LmtleXMoZmluYWxEYXRhKS5sZW5ndGgpe1xyXG4gICAgICAgICAgICBwcm9kdWN0TGlzdC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgZG9tRnVuY3Rpb3MuYWRkVG9Eb20oc2xpY2VPYmooZmluYWxEYXRhLHN0YXJ0LGVuZCkscGFnZXMucG9wdWxhclByb2R1Y3QpO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgc3RhcnQtPTY7XHJcbiAgICAgICAgICAgIGVuZC09NjtcclxuICAgICAgICAgICAgbmV4dFBhZ2UuY2xhc3NMaXN0LmFkZCgnaGlkZU5leHRCdXR0b24nKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKChzdGFydCs2KSA+IE9iamVjdC5rZXlzKGZpbmFsRGF0YSkubGVuZ3RoKXtcclxuICAgICAgICAgICAgbmV4dFBhZ2UuY2xhc3NMaXN0LmFkZCgnaGlkZU5leHRCdXR0b24nKTtcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgIH0pO1xyXG4gICAgYmFja1BhZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XHJcbiAgICAgICAgc3RhcnQgLT02O1xyXG4gICAgICAgIGVuZC09NjtcclxuICAgICAgICBuZXh0UGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlTmV4dEJ1dHRvbicpO1xyXG4gICAgICAgIGlmKHN0YXJ0ID49IDApe1xyXG4gICAgICAgICAgICBwcm9kdWN0TGlzdC5pbm5lckhUTUwgPSAnJ1xyXG4gICAgICAgICAgICBkb21GdW5jdGlvcy5hZGRUb0RvbShzbGljZU9iaihmaW5hbERhdGEsc3RhcnQsZW5kKSxwYWdlcy5wb3B1bGFyUHJvZHVjdCk7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICBzdGFydCs9NjtcclxuICAgICAgICAgICAgZW5kKz02O1xyXG4gICAgICAgICAgICBiYWNrUGFnZS5jbGFzc0xpc3QuYWRkKCdoaWRlQmFja0J1dHRvbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZigoc3RhcnQtNikgPCAwKXsgIFxyXG4gICAgICAgICAgICBiYWNrUGFnZS5jbGFzc0xpc3QuYWRkKCdoaWRlQmFja0J1dHRvbicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTtcclxufTtcclxuXHJcbiIsImV4cG9ydCBlbnVtIHBhZ2VzIHtcclxuICAgIGFsbCxcclxuICAgIG15UHJvZHVjdCxcclxuICAgIHBvcHVsYXJQcm9kdWN0XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9