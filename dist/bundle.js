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
        img.alt = "".concat(data[product].title);
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
    if ((start - 4) < 0) {
        backPage.classList.add('hideBackButton');
    }
    /// handle search bar 
    var searchBar = document.getElementById("searchBar");
    var searchHandler = function (event) {
        var input = event.target;
        var result = {};
        for (var item in finalData) {
            if (finalData[item].title.includes(input.value)) {
                result[item] = finalData[item];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQzVDO1FBQ0QsSUFBRyxDQUFDLEtBQUssR0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUM7WUFDYixRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQzVDO0lBRUwsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ25FRixJQUFZLEtBSVg7QUFKRCxXQUFZLEtBQUs7SUFDYiwrQkFBRztJQUNILDJDQUFTO0lBQ1QscURBQWM7QUFDbEIsQ0FBQyxFQUpXLEtBQUssS0FBTCxLQUFLLFFBSWhCOzs7Ozs7O1VDSkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHBlcjMvLi9zcmMvYWRkRGF0YVRvRG9tLnRzIiwid2VicGFjazovL2V4cGVyMy8uL3NyYy9hbGxQcm9kdWN0c0NvbnRyb2xsLnRzIiwid2VicGFjazovL2V4cGVyMy8uL3NyYy9kYXRhLnRzIiwid2VicGFjazovL2V4cGVyMy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9leHBlcjMvLi9zcmMvbGlrZXNHZW5lcmF0b3IudHMiLCJ3ZWJwYWNrOi8vZXhwZXIzLy4vc3JjL2xpa2VzR2V0dGVyLnRzIiwid2VicGFjazovL2V4cGVyMy8uL3NyYy9tZW51Q29udHJvbC50cyIsIndlYnBhY2s6Ly9leHBlcjMvLi9zcmMvbXlQcm9kdWN0c0NvbnRyb2xsLnRzIiwid2VicGFjazovL2V4cGVyMy8uL3NyYy9wb3B1bGFyUHJvZHVjdC50cyIsIndlYnBhY2s6Ly9leHBlcjMvLi9zcmMvdHlwZXMvcGFnZVR5cGUudHMiLCJ3ZWJwYWNrOi8vZXhwZXIzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4cGVyMy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhwZXIzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhwZXIzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhwZXIzL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vZXhwZXIzL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9leHBlcjMvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdlbmVyYXRlTGlrZXMgfSBmcm9tIFwiLi9saWtlc0dlbmVyYXRvclwiO1xyXG5pbXBvcnQgeyBwcm9kdWN0IH0gZnJvbSBcIi4vdHlwZXMvZGF0YVwiO1xyXG5pbXBvcnQgeyBwYWdlcyB9IGZyb20gXCIuL3R5cGVzL3BhZ2VUeXBlXCI7XHJcblxyXG5jb25zdCBhZGRUb0RvbSA9IChkYXRhOntcclxuICAgIFtpbmRleDpzdHJpbmddOnByb2R1Y3RcclxufSxwYWdlVHlwZTpudW1iZXIpPT57XHJcbiAgICBsZXQgcHJvZHVjdExpc3Q6SFRNTFVMaXN0RWxlbWVudDtcclxuICAgIGlmKHBhZ2VUeXBlID09PSBwYWdlcy5hbGwpe1xyXG4gICAgICAgIHByb2R1Y3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hbGxQcm9kdWN0TGlzdFwiKTtcclxuICAgIH1lbHNlIGlmKHBhZ2VUeXBlID09PSBwYWdlcy5teVByb2R1Y3Qpe1xyXG4gICAgICAgIHByb2R1Y3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5teVByb2R1Y3RMaXN0XCIpO1xyXG4gICAgfWVsc2UgaWYocGFnZVR5cGUgPT09IHBhZ2VzLnBvcHVsYXJQcm9kdWN0KSB7XHJcbiAgICAgICAgcHJvZHVjdExpc3Q9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdWxhclByb2R1Y3RzTGlzdFwiKTtcclxuICAgIH1cclxuICAgIHByb2R1Y3RMaXN0LmlubmVySFRNTCA9ICcnO1xyXG4gICAgZm9yKGNvbnN0IHByb2R1Y3QgIGluIGRhdGEpe1xyXG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgY29uc3QgaHggID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gICAgICAgIGNvbnN0IHA6SFRNTFBhcmFncmFwaEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBzZWNvbmRQOkhUTUxQYXJhZ3JhcGhFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgY29uc3QgaHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHJcIik7XHJcbiAgICAgICAgY29uc3QgbGlrZXNQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGNvbnN0IHNlY29uZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IGxpa2VzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgY29uc3QgcHJpY2VQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGNvbnN0IHByaWNlTGlrZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IGFkZFRvTXlQcm9kdWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgLy8gbWFuYWdlIGVsZW1lbnRzIHRleHQgY29udGVudFxyXG4gICAgICAgIHNlY29uZFAudGV4dENvbnRlbnQgPSBgcmF0ZTogJHtkYXRhW3Byb2R1Y3RdLnJhdGluZy5yYXRlfWA7XHJcbiAgICAgICAgcC50ZXh0Q29udGVudCA9IGAke2RhdGFbcHJvZHVjdF0ucmF0aW5nLmNvdW50fSByZXZpZXdzYDtcclxuICAgICAgICBzZWNvbmRQLnRleHRDb250ZW50ID0gYHJhdGU6ICR7ZGF0YVtwcm9kdWN0XS5yYXRpbmcucmF0ZX1gO1xyXG4gICAgICAgIHAudGV4dENvbnRlbnQgPSBgJHtkYXRhW3Byb2R1Y3RdLnJhdGluZy5jb3VudH0gcmV2aWV3c2A7XHJcbiAgICAgICAgaW1nLnNyYyA9IGRhdGFbcHJvZHVjdF0uaW1hZ2U7XHJcbiAgICAgICAgcHJpY2VMaWtlRGl2LmNsYXNzTGlzdC5hZGQoXCJwcmljZUxpa2VcIik7XHJcbiAgICAgICAgaHgudGV4dENvbnRlbnQgPSBgJHtkYXRhW3Byb2R1Y3RdLnRpdGxlfWA7XHJcbiAgICAgICAgc2Vjb25kRGl2LmNsYXNzTGlzdC5hZGQoXCJjYXJkRGF0YUNvbnRhaW5lclwiKTtcclxuICAgICAgICBpbWcuYWx0ID0gYCR7ZGF0YVtwcm9kdWN0XS50aXRsZX1gO1xyXG4gICAgICAgIGlmKGRhdGFbcHJvZHVjdF0ubXlQcm9kdWN0KXtcclxuICAgICAgICBhZGRUb015UHJvZHVjdEJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKC4uL3NyYy9pbWFnZXMvZG9uZS5wbmcpJzsgICBcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICBhZGRUb015UHJvZHVjdEJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKC4uL3NyYy9pbWFnZXMvYWRkd2hpdGUucG5nKSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFkZFRvTXlQcm9kdWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhZGRUb015UHJvZHVjdHNcIik7XHJcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJyYXRpbmdEYXRhQ29udGFpbmVyXCIpO1xyXG4gICAgICAgIGh4LmNsYXNzTGlzdC5hZGQoXCJjYXJkVGl0bGVcIik7XHJcbiAgICAgICAgcHJpY2VQLmNsYXNzTGlzdC5hZGQoXCJwcmljZVBcIik7XHJcbiAgICAgICAgbGlrZXNQLnRleHRDb250ZW50ID0gYCR7ZGF0YVtwcm9kdWN0XS5saWtlc31gXHJcbiAgICAgICAgbGlrZXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PntcclxuICAgICAgICAgICAgY29uc3Qgc3BhbiA9IE51bWJlcihsaWtlc1AubGFzdENoaWxkLnRleHRDb250ZW50KTtcclxuICAgICAgICAgICAgZ2VuZXJhdGVMaWtlcyh7XHJcbiAgICAgICAgICAgICAgICBpdGVtX2lkOmRhdGFbcHJvZHVjdF0uaWRcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgbGlrZXNCdXR0b24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybCguLi9zcmMvaW1hZ2VzL2xpa2VEYXJrLnBuZyknOyAgXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgICAgICAgIGxpa2VzQnV0dG9uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoLi4vc3JjL2ltYWdlcy9saWtlLnBuZyknOyAgXHJcbiAgICAgICAgICAgIH0sNTAwKVxyXG4gICAgICAgICAgICBsaWtlc1AuaW5uZXJIVE1MID0gYDxzcGFuPiR7c3BhbisxfTwvc3Bhbj5gXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICBsaWtlc0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdsaWtlc0J1dHRvbicpO1xyXG4gICAgICAgIGxpa2VzUC5jbGFzc0xpc3QuYWRkKFwibGlrZXNBbW91bnRcIilcclxuICAgICAgICBwcmljZVAudGV4dENvbnRlbnQgPSBgJHtkYXRhW3Byb2R1Y3RdLnByaWNlfSRgXHJcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHApO1xyXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChzZWNvbmRQKTtcclxuICAgICAgICBsaS5hcHBlbmRDaGlsZChpbWcpO1xyXG4gICAgICAgIGxpLmFwcGVuZENoaWxkKHNlY29uZERpdilcclxuICAgICAgICBzZWNvbmREaXYuYXBwZW5kQ2hpbGQoaHgpO1xyXG4gICAgICAgIHNlY29uZERpdi5hcHBlbmRDaGlsZChkaXYpO1xyXG4gICAgICAgIHNlY29uZERpdi5hcHBlbmRDaGlsZChocik7XHJcbiAgICAgICAgcHJpY2VMaWtlRGl2LmFwcGVuZENoaWxkKHByaWNlUCk7XHJcbiAgICAgICAgcHJpY2VMaWtlRGl2LmFwcGVuZENoaWxkKGFkZFRvTXlQcm9kdWN0QnV0dG9uKTtcclxuICAgICAgICBwcmljZUxpa2VEaXYuYXBwZW5kQ2hpbGQobGlrZXNCdXR0b24pO1xyXG4gICAgICAgIHNlY29uZERpdi5hcHBlbmRDaGlsZChwcmljZUxpa2VEaXYpO1xyXG4gICAgICAgIHNlY29uZERpdi5hcHBlbmRDaGlsZChsaWtlc1ApXHJcbiAgICAgICAgcHJvZHVjdExpc3QuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgICAgIGFkZFRvTXlQcm9kdWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xyXG4gICAgICAgICAgICBjb25zdCBhbGxQcm9kdWN0cyA9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnYWxsUHJvZHVjdHMnKSk7XHJcbiAgICAgICAgICAgIGFsbFByb2R1Y3RzW2RhdGFbcHJvZHVjdF0uaWRdLm15UHJvZHVjdCA9ICFhbGxQcm9kdWN0c1tkYXRhW3Byb2R1Y3RdLmlkXS5teVByb2R1Y3Q7XHJcbiAgICAgICAgICAgIGlmKCBhbGxQcm9kdWN0c1tkYXRhW3Byb2R1Y3RdLmlkXS5teVByb2R1Y3Qpe1xyXG4gICAgICAgICAgICAgICAgYWRkVG9NeVByb2R1Y3RCdXR0b24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybCguLi9zcmMvaW1hZ2VzL2RvbmUucG5nKSc7ICAgXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBpZihwYWdlVHlwZSA9PT0gcGFnZXMubXlQcm9kdWN0KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdExpc3QucmVtb3ZlQ2hpbGQobGkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGFkZFRvTXlQcm9kdWN0QnV0dG9uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoLi4vc3JjL2ltYWdlcy9hZGR3aGl0ZS5wbmcpJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnYWxsUHJvZHVjdHMnLEpTT04uc3RyaW5naWZ5KGFsbFByb2R1Y3RzKSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgYWRkVG9Eb21cclxufSIsImltcG9ydCB7IGdldERhdGEgfSBmcm9tICcuL2RhdGEnO1xyXG5pbXBvcnQgeyBnZXRMaWtlcyB9IGZyb20gJy4vbGlrZXNHZXR0ZXInO1xyXG5pbXBvcnQgZG9tRnVuY3Rpb3MgZnJvbSAnLi9hZGREYXRhVG9Eb20nO1xyXG5pbXBvcnQgeyBzbGljZU9iaiB9IGZyb20gJy4nO1xyXG5pbXBvcnQgeyBwcm9kdWN0T2JqZWN0IH0gZnJvbSAnLi90eXBlcy9kYXRhJztcclxuaW1wb3J0IHsgcGFnZXMgfSBmcm9tICcuL3R5cGVzL3BhZ2VUeXBlJztcclxuXHJcbmV4cG9ydCBjb25zdCBhbGxQcm9kdWN0cyA9ICgpPT57XHJcbiAgICAgICAgY29uc3QgaW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoSW5wdXRDb250YWluZXInKTtcclxuICAgICAgICBpbnB1dENvbnRhaW5lci5pbm5lckhUTUwgPSBgPGlucHV0IHR5cGU9XCJzZWFyY2hcIiBwbGFjZWhvbGRlcj1cInNlYXJjaC4uLlwiIGlkPVwic2VhcmNoQmFyXCI+YDtcclxuICAgICAgICBjb25zdCBwYWdpbmF0aW9uQ29udHJvbGxlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdpbmF0aW9uQ29udHJvbGxlcicpO1xyXG4gICAgICAgIHBhZ2luYXRpb25Db250cm9sbGVyLmlubmVySFRNTCA9IGA8YnV0dG9uIGNsYXNzPVwiZ29CYWNrIGhpZGVcIj5HbyBCYWNrIDxocj48L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwibmV4dEJ1dHRvblwiPk5leHQgcGFnZSA8aHI+PC9idXR0b24+YDtcclxuICAgICAgICBjb25zdCBuZXh0UGFnZTpIVE1MQnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXh0QnV0dG9uJyk7XHJcbiAgICAgICAgY29uc3QgYmFja1BhZ2U6SFRNTEJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ29CYWNrJyk7XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsUHJvZHVjdExpc3QnKTtcclxuICAgICAgICBuZXh0UGFnZS5zdHlsZS5kaXNwbGF5ID0gJyc7XHJcbiAgICAgICAgYmFja1BhZ2Uuc3R5bGUuZGlzcGxheSA9ICcnO1xyXG4gICAgICAgXHJcbiAgICAgICAgLy8gaGFuZGxlIGFwaXNcclxuICAgICAgICBsZXQgc3RhcnQgPSAwO1xyXG4gICAgICAgIGxldCBlbmQgPSA2O1xyXG4gICAgICAgIGxldCBmaW5hbERhdGE6cHJvZHVjdE9iamVjdDtcclxuICAgICAgICBnZXREYXRhKChkYXRhKT0+e1xyXG4gICAgICAgIGdldExpa2VzKGRhdGEsKGl0ZW1zKT0+e1xyXG4gICAgICAgICAgICBmaW5hbERhdGEgPSBpdGVtc1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZGF0YUluTG9jYWxTdG9yYWdlID0gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiYWxsUHJvZHVjdHNcIikpfHwgZmFsc2U7XHJcbiAgICAgICAgICAgIGlmKCFkYXRhSW5Mb2NhbFN0b3JhZ2Upe1xyXG4gICAgICAgICAgICAgICAgZm9yKGNvbnN0IGl0ZW0gaW4gZmluYWxEYXRhKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxEYXRhW2l0ZW1dW1wibXlQcm9kdWN0XCJdID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgZm9yKGNvbnN0IGl0ZW0gaW4gZmluYWxEYXRhKXtcclxuICAgICAgICAgICAgICAgIGlmKCFkYXRhSW5Mb2NhbFN0b3JhZ2VbZmluYWxEYXRhW2l0ZW1dLmlkXSl7XHJcbiAgICAgICAgICAgICAgICAgICAgZmluYWxEYXRhW2l0ZW1dW1wibXlQcm9kdWN0XCJdID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihkYXRhSW5Mb2NhbFN0b3JhZ2VbZmluYWxEYXRhW2l0ZW1dLmlkXS5teVByb2R1Y3Qpe1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbmFsRGF0YVtpdGVtXVtcIm15UHJvZHVjdFwiXSA9IHRydWU7IFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwiYWxsUHJvZHVjdHNcIixKU09OLnN0cmluZ2lmeShmaW5hbERhdGEpKTtcclxuICAgICAgICAgICAgZG9tRnVuY3Rpb3MuYWRkVG9Eb20oc2xpY2VPYmooZmluYWxEYXRhLHN0YXJ0LGVuZCkscGFnZXMuYWxsKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmKChzdGFydC00KSA8IDApeyAgXHJcbiAgICAgICAgICAgIGJhY2tQYWdlLmNsYXNzTGlzdC5hZGQoJ2hpZGVCYWNrQnV0dG9uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAvLy8gaGFuZGxlIHNlYXJjaCBiYXIgXHJcbiAgICAgICAgIGNvbnN0IHNlYXJjaEJhcjpIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hCYXJcIilhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgICBjb25zdCBzZWFyY2hIYW5kbGVyID0gKGV2ZW50OkV2ZW50KT0+e1xyXG4gICAgICAgICAgICBjb25zdCBpbnB1dD0gZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdDpwcm9kdWN0T2JqZWN0ID0ge307XHJcbiAgICAgICAgICAgIGZvcihjb25zdCBpdGVtIGluIGZpbmFsRGF0YSl7XHJcbiAgICAgICAgICAgICAgICBpZihmaW5hbERhdGFbaXRlbV0udGl0bGUuaW5jbHVkZXMoaW5wdXQudmFsdWUpKXtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRbaXRlbV0gPSBmaW5hbERhdGFbaXRlbV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZG9tRnVuY3Rpb3MuYWRkVG9Eb20oc2xpY2VPYmoocmVzdWx0LHN0YXJ0LGVuZCkscGFnZXMuYWxsKTtcclxuICAgICAgICAgICAgc2VhcmNoQmFyLnZhbHVlID0gXCJcIjtcclxuICAgICAgICAgICB9O1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICBzZWFyY2hCYXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLHNlYXJjaEhhbmRsZXIpO1xyXG4gICAgICAgICBzZWFyY2hCYXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJyxzZWFyY2hIYW5kbGVyKTtcclxuICAgICAgICAgbmV4dFBhZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XHJcbiAgICAgICAgICAgIHN0YXJ0ID0gZW5kO1xyXG4gICAgICAgICAgICBlbmQrPTY7XHJcbiAgICAgICAgICAgIGJhY2tQYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGVCYWNrQnV0dG9uJylcclxuICAgICAgICAgICAgaWYoc3RhcnQgPCBPYmplY3Qua2V5cyhmaW5hbERhdGEpLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0TGlzdC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgICAgIGRvbUZ1bmN0aW9zLmFkZFRvRG9tKHNsaWNlT2JqKGZpbmFsRGF0YSxzdGFydCxlbmQpLHBhZ2VzLmFsbCk7XHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIHN0YXJ0LT02O1xyXG4gICAgICAgICAgICAgICAgZW5kLT02O1xyXG4gICAgICAgICAgICAgICAgbmV4dFBhZ2UuY2xhc3NMaXN0LmFkZCgnaGlkZU5leHRCdXR0b24nKVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZigoc3RhcnQrNCkgPj0gT2JqZWN0LmtleXMoZmluYWxEYXRhKS5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgbmV4dFBhZ2UuY2xhc3NMaXN0LmFkZCgnaGlkZU5leHRCdXR0b24nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJhY2tQYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xyXG4gICAgICAgICAgICBzdGFydCAtPTQ7XHJcbiAgICAgICAgICAgIGVuZC09NDtcclxuICAgICAgICAgICAgbmV4dFBhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZU5leHRCdXR0b24nKVxyXG4gICAgICAgICAgICBpZihzdGFydCA+PSAwKXtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RMaXN0LmlubmVySFRNTCA9ICcnXHJcbiAgICAgICAgICAgICAgICBkb21GdW5jdGlvcy5hZGRUb0RvbShzbGljZU9iaihmaW5hbERhdGEsc3RhcnQsZW5kKSxwYWdlcy5hbGwpO1xyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzdGFydCs9NDtcclxuICAgICAgICAgICAgICAgIGVuZCs9NDtcclxuICAgICAgICAgICAgICAgIGJhY2tQYWdlLmNsYXNzTGlzdC5hZGQoJ2hpZGVCYWNrQnV0dG9uJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoKHN0YXJ0LTQpIDwgMCl7ICBcclxuICAgICAgICAgICAgICAgIGJhY2tQYWdlLmNsYXNzTGlzdC5hZGQoJ2hpZGVCYWNrQnV0dG9uJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgIFxyXG59O1xyXG5cclxuIiwiaW1wb3J0IHsgcHJvZHVjdCB9IGZyb20gXCIuL3R5cGVzL2RhdGFcIlxyXG5cclxuZXhwb3J0IGNvbnN0IGdldERhdGEgPSAoY2FsbDooZGF0YTpwcm9kdWN0W10pPT52b2lkKT0+e1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0TG9hZGluZ1wiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKVxyXG4gICAgZmV0Y2goXCJodHRwczovL2Zha2VzdG9yZWFwaS5jb20vcHJvZHVjdHNcIikudGhlbigocmVzKT0+XHJcbiAgICAgICAgcmVzLmpzb24oKVxyXG4gICAgKS50aGVuKChqc29uKT0+e1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdExvYWRpbmdcIikuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcclxuICAgICAgICBjYWxsKGpzb24pXHJcbiAgICB9KVxyXG59IiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBhbGxQcm9kdWN0cyB9IGZyb20gJy4vYWxsUHJvZHVjdHNDb250cm9sbCc7XHJcbmltcG9ydCB7IG5hdk1lbnUgfSBmcm9tICcuL21lbnVDb250cm9sJztcclxuaW1wb3J0IHsgbXlQcm9kdWN0c0NvbnRyb2xsIH0gZnJvbSAnLi9teVByb2R1Y3RzQ29udHJvbGwnO1xyXG5pbXBvcnQgeyBwb3B1bGFyUHJvZHVjdCB9IGZyb20gJy4vcG9wdWxhclByb2R1Y3QnO1xyXG5pbXBvcnQgeyBwcm9kdWN0T2JqZWN0IH0gZnJvbSAnLi90eXBlcy9kYXRhJztcclxuXHJcbiAgZnVuY3Rpb24gY29tcG9uZW50KCkge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgLy8gZGVmaW5lIHNlY3Rpb25zIGluIHZhcmlhYmxlcyBcclxuICAgIGNvbnN0IGFsbFByb2R1Y3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuQWxsJyk7XHJcbiAgICBjb25zdCBpbnB1dFNlYXJjaCA9ICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoSW5wdXRDb250YWluZXInKTtcclxuICAgIGNvbnN0IG5hdlNlY3Rpb246SFRNTFRhYmxlU2VjdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2U2VjdGlvbicpXHJcbiAgICBjb25zdCBteVByb2R1Y3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLk15cHJvZHVjdHMnKTtcclxuICAgIGNvbnN0IGxvZ29MaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ29MaW5rJyk7XHJcbiAgICBjb25zdCBwb3VsYXJQcm9kdWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5Qb3B1bGFyJyk7XHJcbiAgICAvL3NlbGVjdCBtaW5pIG5hdiBidXR0b25zIFxyXG4gICAgY29uc3QgYWxsUHJvZHVjdEJ1dHRvbjpIVE1MQW5jaG9yRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwnKTtcclxuICAgIGNvbnN0IG15UHJvZHVjdHNCdXR0b246SFRNTEFuY2hvckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXlwcm9kdWN0cycpO1xyXG4gICAgY29uc3QgcG9wdWxhclByb2R1Y3RzQnV0dG9uOkhUTUxBbmNob3JFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVsYXInKTtcclxuICAgXHJcbiAgICBuYXZNZW51KCk7XHJcbiAgICAvLyBoYW5kbGUgcGF0aHNcclxuICAgIGlmKHdpbmRvdy5sb2NhdGlvbi5oYXNoID09PSBcIlwiIHx8IHdpbmRvdy5sb2NhdGlvbi5oYXNoID09PSBcIiNBbGxcIil7XHJcbiAgICAgIGFsbFByb2R1Y3RzKCk7XHJcbiAgICAgIG15UHJvZHVjdHMuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICBhbGxQcm9kdWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxyXG4gICAgICBwb3VsYXJQcm9kdWN0cy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgIG15UHJvZHVjdHNCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgIGlucHV0U2VhcmNoLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuICAgICAgbmF2U2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgIGFsbFByb2R1Y3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgIHBvcHVsYXJQcm9kdWN0c0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgIH1lbHNlIGlmKHdpbmRvdy5sb2NhdGlvbi5oYXNoID09PSBcIiNNeXByb2R1Y3RzXCIpIHtcclxuICAgICAgaW5wdXRTZWFyY2guY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICBteVByb2R1Y3RzQ29udHJvbGwoKTtcclxuICAgICAgbXlQcm9kdWN0cy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbiAgICAgIGFsbFByb2R1Y3QuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICBwb3VsYXJQcm9kdWN0cy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgIG15UHJvZHVjdHNCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgIG5hdlNlY3Rpb24uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxyXG4gICAgICBhbGxQcm9kdWN0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICBwb3B1bGFyUHJvZHVjdHNCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICB9ZWxzZSBpZih3aW5kb3cubG9jYXRpb24uaGFzaCA9PT0gXCIjUG9wdWxhclwiKXtcclxuICAgICAgaW5wdXRTZWFyY2guY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICBwb3B1bGFyUHJvZHVjdCgpO1xyXG4gICAgICBteVByb2R1Y3RzLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgbmF2U2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXHJcbiAgICAgIGFsbFByb2R1Y3QuY2xhc3NMaXN0LmFkZCgnaGlkZScpXHJcbiAgICAgIHBvdWxhclByb2R1Y3RzLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuICAgICAgbXlQcm9kdWN0c0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgYWxsUHJvZHVjdEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgcG9wdWxhclByb2R1Y3RzQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgYWxsUHJvZHVjdEZ1bmN0aW9uID0gKCk9PntcclxuICAgICAgYWxsUHJvZHVjdHMoKTtcclxuICAgICAgaW5wdXRTZWFyY2guY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG4gICAgICBteVByb2R1Y3RzLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgbmF2U2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcclxuICAgICAgYWxsUHJvZHVjdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcclxuICAgICAgcG91bGFyUHJvZHVjdHMuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICBteVByb2R1Y3RzQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICBhbGxQcm9kdWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICBwb3B1bGFyUHJvZHVjdHNCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICB9XHJcbiAgICAvLyBuYXZpZ2F0aW9ucyBldmVudHMgXHJcbiAgICBhbGxQcm9kdWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxhbGxQcm9kdWN0RnVuY3Rpb24pXHJcbiAgICBteVByb2R1Y3RzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xyXG4gICAgICBteVByb2R1Y3RzQ29udHJvbGwoKTtcclxuICAgICAgbXlQcm9kdWN0cy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbiAgICAgIG5hdlNlY3Rpb24uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxyXG4gICAgICBhbGxQcm9kdWN0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxyXG4gICAgICBwb3VsYXJQcm9kdWN0cy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgIG15UHJvZHVjdHNCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgIGFsbFByb2R1Y3RCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgIGlucHV0U2VhcmNoLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgcG9wdWxhclByb2R1Y3RzQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cclxuICAgIH0pXHJcbiAgICBsb2dvTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsYWxsUHJvZHVjdEZ1bmN0aW9uKVxyXG4gICAgcG9wdWxhclByb2R1Y3RzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xyXG4gICAgICBwb3B1bGFyUHJvZHVjdCgpO1xyXG4gICAgICBteVByb2R1Y3RzLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgbmF2U2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXHJcbiAgICAgIGFsbFByb2R1Y3QuY2xhc3NMaXN0LmFkZCgnaGlkZScpXHJcbiAgICAgIHBvdWxhclByb2R1Y3RzLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuICAgICAgaW5wdXRTZWFyY2guY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICBteVByb2R1Y3RzQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICBhbGxQcm9kdWN0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICBwb3B1bGFyUHJvZHVjdHNCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIGV4cG9ydCBjb25zdCBzbGljZU9iaiA9IChvYmo6cHJvZHVjdE9iamVjdCxzdGFydDpudW1iZXIsZW5kOm51bWJlcik6cHJvZHVjdE9iamVjdD0+e1xyXG4gICAgY29uc3QgcmVzdWx0OnByb2R1Y3RPYmplY3QgPSB7fTtcclxuICAgIGxldCBmaXJzdENvdW50ZXI6bnVtYmVyID0gc3RhcnQ7XHJcbiAgICBjb25zdCBvYmpLZXlzID0gIE9iamVjdC5rZXlzKG9iaik7XHJcbiAgICBmb3IobGV0IGl0ZW0gPXN0YXJ0O2l0ZW0gPCBlbmQ7aXRlbSsrKXtcclxuICAgICAgaWYoZmlyc3RDb3VudGVyID49IGVuZCl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgfVxyXG4gICAgICBpZihvYmpLZXlzW2l0ZW1dKXtcclxuICAgICAgcmVzdWx0W29iaktleXNbaXRlbV1dID0gb2JqW29iaktleXNbaXRlbV1dO31cclxuICAgICAgZmlyc3RDb3VudGVyKys7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb21wb25lbnQoKSk7XHJcbiIsImNvbnN0IGxpa2VzVXJsID0gXCJodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy96U2ZxbGNyNlpxUkNkZGsxMFdIVi9saWtlc1wiO1xyXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVMaWtlcyA9IChkYXRhOntcclxuICAgIGl0ZW1faWQ6bnVtYmVyXHJcbn0pPT57XHJcbiAgICBmZXRjaChsaWtlc1VybCx7XHJcbiAgICAgICAgbWV0aG9kOlwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgIGJvZHk6SlNPTi5zdHJpbmdpZnkoZGF0YSlcclxuICAgIH0pLnRoZW4oKHJlcyk9PntcclxuICAgICAgICBpZighcmVzLm9rKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59OyIsImltcG9ydCB7IHByb2R1Y3QgfSBmcm9tIFwiLi90eXBlcy9kYXRhXCI7XHJcblxyXG5jb25zdCBsaWtlc1VybCA9IFwiaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvelNmcWxjcjZacVJDZGRrMTBXSFYvbGlrZXMvXCI7XHJcbmNvbnN0IGdldExpa2VzRGF0YSA9ICBhc3luYyAoKSA9PntcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGxpa2VzVXJsKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICByZXR1cm4gZGF0YVxyXG59XHJcbmV4cG9ydCBjb25zdCBnZXRMaWtlcyA9ICAocHJvZHVjdERhdGE6cHJvZHVjdFtdICxjYWxsZm46KHJlc3VsdDp7XHJcbiAgICBbaW5kZXg6c3RyaW5nXTpwcm9kdWN0XHJcbiAgICB9KT0+dm9pZCk9PntcclxuICAgIGNvbnN0IGZpbmFsRGF0YT0gZ2V0TGlrZXNEYXRhKCk7XHJcbiAgICBcclxuICAgIGZpbmFsRGF0YS50aGVuKChpdGVtczp7aXRlbV9pZDpudW1iZXIsbGlrZXM6bnVtYmVyfVtdICk9PntcclxuXHJcbiAgICAgICAgY29uc3QgcmVzdWx0OntcclxuICAgICAgICAgICAgW2luZGV4OnN0cmluZ106cHJvZHVjdFxyXG4gICAgICAgIH0gPSB7fVxyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7aTxwcm9kdWN0RGF0YS5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgcmVzdWx0W2Ake3Byb2R1Y3REYXRhW2ldLmlkfWBdID0gey4uLnByb2R1Y3REYXRhW2ldLGxpa2VzOjB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IobGV0IGkgPTA7aTxpdGVtcy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgICAgIHJlc3VsdFtpdGVtc1tpXS5pdGVtX2lkXS5saWtlcyA9IGl0ZW1zW2ldLmxpa2VzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYWxsZm4ocmVzdWx0KTtcclxuICAgIH0pXHJcbn0iLCJjb25zdCBoaWRlU2hvd05hdkVsZW1lbnRzID0gKG5vZGVMc3Q6Tm9kZUxpc3RPZjxIVE1MQW5jaG9yRWxlbWVudD4sc2hvdzpib29sZWFuKT0+e1xyXG4gICAgZm9yKGxldCBpbmRleCA9IDA7aW5kZXg8bm9kZUxzdC5sZW5ndGggO2luZGV4Kyspe1xyXG4gICAgICAgIGlmKHNob3cpe1xyXG4gICAgICAgICAgICBub2RlTHN0W2luZGV4XS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgbm9kZUxzdFtpbmRleF0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5jb25zdCBjb250cm9sVXNlckluZm9QYWdlID0gKCk9PntcclxuIC8vIGNvbnRyb2wgdXNlciBwcm9maWxlIG1lbnUgXHJcbiBjb25zdCBub3JtYWxOYXZNZW51Ok5vZGVMaXN0T2Y8SFRNTEFuY2hvckVsZW1lbnQ+ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ub3JtYWxOYXZcIik7XHJcbiBjb25zdCB1c2VySW5mb0xpc3Q6SFRNTFVMaXN0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXNlckluZm9MaXN0XCIpO1xyXG4gY29uc3QgcHJvZmlsZU1lbnVTZWNvbmRCdXR0b246SFRNTEJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlY29uZFVzZXJJbmZvQ29udHJvbFwiKTtcclxuXHJcbiB1c2VySW5mb0xpc3Quc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuIGhpZGVTaG93TmF2RWxlbWVudHMobm9ybWFsTmF2TWVudSxmYWxzZSk7XHJcblxyXG4gcHJvZmlsZU1lbnVTZWNvbmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PntcclxuICAgICAgICAgaGlkZVNob3dOYXZFbGVtZW50cyhub3JtYWxOYXZNZW51LHRydWUpO1xyXG4gICAgICAgICB1c2VySW5mb0xpc3Quc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXHJcbiB9KTtcclxuIFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbmF2TWVudSA9ICgpPT57XHJcbiAgICAvLyBjb250cm9sIGFsbCBtb2JpbGUgbWVudVxyXG4gICAgbGV0IGZsYWcgPSB0cnVlO1xyXG4gICAgY29uc3QgbWVudUJ1dHRvbjpIVE1MQnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hvd05hdkJ1dHRvblwiKTtcclxuICAgIGNvbnN0IG1lbnU6Tm9kZUxpc3RPZjxIVE1MQW5jaG9yRWxlbWVudD4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdkxpbmtcIik7XHJcbiAgICBjb25zdCB1c2VySW5mb0xpc3Q6SFRNTFVMaXN0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXNlckluZm9MaXN0XCIpO1xyXG4gICAgdXNlckluZm9MaXN0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsKCk9PntcclxuICAgICAgICBpZihzY3JlZW4ud2lkdGggPiA3Njgpe1xyXG4gICAgICAgICAgICBoaWRlU2hvd05hdkVsZW1lbnRzKG1lbnUsdHJ1ZSk7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICBoaWRlU2hvd05hdkVsZW1lbnRzKG1lbnUsIWZsYWcpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwoKT0+e1xyXG4gICAgICAgIGlmKHNjcmVlbi53aWR0aCA+IDc2OCl7XHJcbiAgICAgICAgICAgIGhpZGVTaG93TmF2RWxlbWVudHMobWVudSx0cnVlKTtcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIGhpZGVTaG93TmF2RWxlbWVudHMobWVudSwhZmxhZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIGhpZGVTaG93TmF2RWxlbWVudHMobWVudSwhZmxhZylcclxuICAgIG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PntcclxuICAgICAgICBpZihmbGFnKXtcclxuICAgICAgICAgICAgbWVudUJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCguLi9zcmMvaW1hZ2VzL3VwbG9hZC5wbmcpXCI7XHJcbiAgICAgIFxyXG4gICAgICAgICAgICBoaWRlU2hvd05hdkVsZW1lbnRzKG1lbnUsZmxhZyk7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICBoaWRlU2hvd05hdkVsZW1lbnRzKG1lbnUsZmxhZyk7XHJcbiAgICAgICAgICAgIHVzZXJJbmZvTGlzdC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIG1lbnVCdXR0b24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoLi4vc3JjL2ltYWdlcy9hcnJvdy1kb3duLXNpZ24tdG8tbmF2aWdhdGUucG5nKVwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZsYWcgPSAhZmxhZ1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBwcm9maWxlRnVuY3Rpb24gPSAoKT0+e1xyXG4gICAgICAgIGNvbnRyb2xVc2VySW5mb1BhZ2UoKTtcclxuICAgIH07XHJcbiAgICAvLyBjb250cm9sIHVzZXIgaW5mbyBtZW51IFxyXG4gICAgaWYod2luZG93LnNjcmVlbi53aWR0aCA8IDc2OCl7XHJcbiAgICBjb25zdCBwcm9maWxlTWVudUJ1dHRvbjpIVE1MQnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXNlcmluZm9Db250cm9sXCIpO1xyXG4gICAgcHJvZmlsZU1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIscHJvZmlsZUZ1bmN0aW9uKTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgIGNvbnN0IHByb2ZpbGVNZW51QnV0dG9uOkhUTUxCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51c2VyaW5mb0NvbnRyb2xcIik7XHJcbiAgICAgICAgIHByb2ZpbGVNZW51QnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHByb2ZpbGVGdW5jdGlvbik7XHJcbiAgICB9XHJcbn1cclxuICAgXHJcblxyXG5cclxuIiwiaW1wb3J0IGRvbUZ1bmN0aW9zIGZyb20gJy4vYWRkRGF0YVRvRG9tJztcclxuaW1wb3J0IHsgc2xpY2VPYmogfSBmcm9tICcuJztcclxuaW1wb3J0IHsgcHJvZHVjdE9iamVjdCB9IGZyb20gJy4vdHlwZXMvZGF0YSc7XHJcbmltcG9ydCB7IHBhZ2VzIH0gZnJvbSAnLi90eXBlcy9wYWdlVHlwZSc7XHJcblxyXG5leHBvcnQgY29uc3QgbXlQcm9kdWN0c0NvbnRyb2xsID0gKCk9PntcclxuICBjb25zdCBwYWdpbmF0aW9uQ29udHJvbGxlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdpbmF0aW9uQ29udHJvbGxlcicpO1xyXG4gICAgICAgIHBhZ2luYXRpb25Db250cm9sbGVyLmlubmVySFRNTCA9IGA8YnV0dG9uIGNsYXNzPVwiZ29CYWNrIGhpZGVcIj5HbyBCYWNrIDxocj48L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwibmV4dEJ1dHRvblwiPk5leHQgcGFnZSA8aHI+PC9idXR0b24+YDtcclxuICAgIGNvbnN0IGFsbFByb2R1Y3RzID0gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiYWxsUHJvZHVjdHNcIikpIHx8IHt9O1xyXG4gICAgY29uc3QgbmV4dFBhZ2U6SFRNTEJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV4dEJ1dHRvbicpO1xyXG4gICAgY29uc3QgYmFja1BhZ2U6SFRNTEJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ29CYWNrJyk7XHJcbiAgICBjb25zdCBwcm9kdWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGxQcm9kdWN0TGlzdCcpO1xyXG4gICAgY29uc3QgaXNFbXB0eSA9IE9iamVjdC5rZXlzKGFsbFByb2R1Y3RzKS5sZW5ndGggPiAwID90cnVlOmZhbHNlIDtcclxuICAgIC8vIGhhbmRsZSBhcGlzXHJcbiAgICBsZXQgc3RhcnQ6bnVtYmVyID0gaXNFbXB0eSAmJiAwO1xyXG4gICAgbGV0IGVuZCA9IDY7XHJcbiAgICBjb25zdCBmaW5hbERhdGE6cHJvZHVjdE9iamVjdCA9IGZpbHRlck9iaihhbGxQcm9kdWN0cyk7XHJcbiAgICBjb25zdCByZXN1bHRPYmogPSBzbGljZU9iaihmaW5hbERhdGEsc3RhcnQsZW5kKTtcclxuICAgIGlmKGlzRW1wdHkpe1xyXG4gICAgZG9tRnVuY3Rpb3MuYWRkVG9Eb20ocmVzdWx0T2JqLHBhZ2VzLm15UHJvZHVjdCk7XHJcbiAgICBuZXh0UGFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcclxuICAgICAgc3RhcnQgKz02O1xyXG4gICAgICBlbmQrPTY7XHJcbiAgICAgIGJhY2tQYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGVCYWNrQnV0dG9uJylcclxuICAgICAgaWYoc3RhcnQgPCBPYmplY3Qua2V5cyhmaW5hbERhdGEpLmxlbmd0aCl7XHJcbiAgICAgICAgICBwcm9kdWN0TGlzdC5pbm5lckhUTUwgPSAnJ1xyXG4gICAgICAgICAgZG9tRnVuY3Rpb3MuYWRkVG9Eb20oc2xpY2VPYmooZmluYWxEYXRhLHN0YXJ0LGVuZCkscGFnZXMubXlQcm9kdWN0KTtcclxuICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgc3RhcnQtPTY7XHJcbiAgICAgICAgICBlbmQtPTY7XHJcbiAgICAgICAgICBuZXh0UGFnZS5jbGFzc0xpc3QuYWRkKCdoaWRlTmV4dEJ1dHRvbicpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKChzdGFydCs2KSA+IE9iamVjdC5rZXlzKGZpbmFsRGF0YSkubGVuZ3RoKXtcclxuICAgICAgICAgIG5leHRQYWdlLmNsYXNzTGlzdC5hZGQoJ2hpZGVOZXh0QnV0dG9uJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgfSk7XHJcbiAgICAgaWYoKHN0YXJ0KzYpID4gT2JqZWN0LmtleXMoZmluYWxEYXRhKS5sZW5ndGgpe1xyXG4gICAgICAgIG5leHRQYWdlLmNsYXNzTGlzdC5hZGQoJ2hpZGVOZXh0QnV0dG9uJyk7XHJcbiAgICAgfVxyXG4gICAgIGJhY2tQYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xyXG4gICAgICAgIHN0YXJ0IC09NjtcclxuICAgICAgICBlbmQtPTY7XHJcbiAgICAgICAgbmV4dFBhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZU5leHRCdXR0b24nKVxyXG4gICAgICAgIGlmKHN0YXJ0ID49IDApe1xyXG4gICAgICAgICAgICBwcm9kdWN0TGlzdC5pbm5lckhUTUwgPSAnJ1xyXG4gICAgICAgICAgICBkb21GdW5jdGlvcy5hZGRUb0RvbShzbGljZU9iaihmaW5hbERhdGEsc3RhcnQsZW5kKSxwYWdlcy5teVByb2R1Y3QpO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgc3RhcnQrPTY7XHJcbiAgICAgICAgICAgIGVuZCs9NjtcclxuICAgICAgICAgICAgYmFja1BhZ2UuY2xhc3NMaXN0LmFkZCgnaGlkZUJhY2tCdXR0b24nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoKHN0YXJ0LTYpIDwgMCl7ICBcclxuICAgICAgICAgICAgYmFja1BhZ2UuY2xhc3NMaXN0LmFkZCgnaGlkZUJhY2tCdXR0b24nKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGlmKChzdGFydC02KSA8IDApeyAgXHJcbiAgICAgICAgYmFja1BhZ2UuY2xhc3NMaXN0LmFkZCgnaGlkZUJhY2tCdXR0b24nKTtcclxuICAgIH1cclxuICAgIH1cclxuICAgIFxyXG59O1xyXG5cclxuXHJcbmNvbnN0IGZpbHRlck9iaiA9IChkYXRhOnByb2R1Y3RPYmplY3QpOnByb2R1Y3RPYmplY3Q9PntcclxuICAgIGNvbnN0IHByb2R1Y3RzID0gT2JqZWN0LmtleXMoZGF0YSk7XHJcbiAgICBjb25zdCBlbmQgPSBwcm9kdWN0cy5sZW5ndGg7XHJcbiAgICBjb25zdCByZXN1bHQ6cHJvZHVjdE9iamVjdCA9IHt9O1xyXG4gICAgZm9yKGxldCBpdGVtID0wO2l0ZW0gPCBlbmQ7aXRlbSsrKXtcclxuICAgICAgaWYoZGF0YVtwcm9kdWN0c1tpdGVtXV0ubXlQcm9kdWN0KXtcclxuICAgICAgICByZXN1bHRbcHJvZHVjdHNbaXRlbV1dID0gZGF0YVtwcm9kdWN0c1tpdGVtXV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07IiwiaW1wb3J0IHsgZ2V0RGF0YSB9IGZyb20gJy4vZGF0YSc7XHJcbmltcG9ydCB7IGdldExpa2VzIH0gZnJvbSAnLi9saWtlc0dldHRlcic7XHJcbmltcG9ydCBkb21GdW5jdGlvcyBmcm9tICcuL2FkZERhdGFUb0RvbSc7XHJcbmltcG9ydCB7IHNsaWNlT2JqIH0gZnJvbSAnLic7XHJcbmltcG9ydCB7IHByb2R1Y3RPYmplY3QgfSBmcm9tICcuL3R5cGVzL2RhdGEnO1xyXG5pbXBvcnQgeyBwYWdlcyB9IGZyb20gJy4vdHlwZXMvcGFnZVR5cGUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHBvcHVsYXJQcm9kdWN0ID0gKCk9PntcclxuICAgIGNvbnN0IHBhZ2luYXRpb25Db250cm9sbGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2luYXRpb25Db250cm9sbGVyJyk7XHJcbiAgICAgICAgcGFnaW5hdGlvbkNvbnRyb2xsZXIuaW5uZXJIVE1MID0gYDxidXR0b24gY2xhc3M9XCJnb0JhY2sgaGlkZVwiPkdvIEJhY2sgPGhyPjwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJuZXh0QnV0dG9uXCI+TmV4dCBwYWdlIDxocj48L2J1dHRvbj5gO1xyXG4gICAgY29uc3QgbmV4dFBhZ2U6SFRNTEJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV4dEJ1dHRvbicpO1xyXG4gICAgY29uc3QgYmFja1BhZ2U6SFRNTEJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ29CYWNrJyk7XHJcbiAgICBjb25zdCBwcm9kdWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGxQcm9kdWN0TGlzdCcpO1xyXG4gICAgbmV4dFBhZ2Uuc3R5bGUuZGlzcGxheSA9ICcnO1xyXG4gICAgYmFja1BhZ2Uuc3R5bGUuZGlzcGxheSA9ICcnO1xyXG4gICAgLy8gaGFuZGxlIGFwaXNcclxuICAgIGxldCBzdGFydCA9IDA7XHJcbiAgICBsZXQgZW5kID0gNjtcclxuICAgIGNvbnN0IGZpbmFsRGF0YTpwcm9kdWN0T2JqZWN0ID0ge307XHJcblxyXG4gICAgZ2V0RGF0YSgoZGF0YSk9PntcclxuICAgIGdldExpa2VzKGRhdGEsKGl0ZW1zKT0+e1xyXG4gICAgZm9yKGNvbnN0IGl0ZW0gaW4gaXRlbXMpe1xyXG4gICAgICAgIGlmKGl0ZW1zW2l0ZW1dLnJhdGluZy5yYXRlID4gNCl7XHJcbiAgICAgICAgICAgIGZpbmFsRGF0YVtpdGVtXSA9IGl0ZW1zW2l0ZW1dO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgICAgIGRvbUZ1bmN0aW9zLmFkZFRvRG9tKHNsaWNlT2JqKGZpbmFsRGF0YSxzdGFydCxlbmQpLHBhZ2VzLnBvcHVsYXJQcm9kdWN0KTtcclxuICAgIH0pXHJcbiAgICB9KTtcclxuICAgIG5leHRQYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xyXG4gICAgICAgIHN0YXJ0ID0gZW5kO1xyXG4gICAgICAgIGVuZCs9NjtcclxuICAgICAgICBiYWNrUGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlQmFja0J1dHRvbicpXHJcbiAgICAgICAgaWYoc3RhcnQgPCBPYmplY3Qua2V5cyhmaW5hbERhdGEpLmxlbmd0aCl7XHJcbiAgICAgICAgICAgIHByb2R1Y3RMaXN0LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICBkb21GdW5jdGlvcy5hZGRUb0RvbShzbGljZU9iaihmaW5hbERhdGEsc3RhcnQsZW5kKSxwYWdlcy5wb3B1bGFyUHJvZHVjdCk7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICBzdGFydC09NjtcclxuICAgICAgICAgICAgZW5kLT02O1xyXG4gICAgICAgICAgICBuZXh0UGFnZS5jbGFzc0xpc3QuYWRkKCdoaWRlTmV4dEJ1dHRvbicpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoKHN0YXJ0KzYpID4gT2JqZWN0LmtleXMoZmluYWxEYXRhKS5sZW5ndGgpe1xyXG4gICAgICAgICAgICBuZXh0UGFnZS5jbGFzc0xpc3QuYWRkKCdoaWRlTmV4dEJ1dHRvbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgfSk7XHJcbiAgICBiYWNrUGFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcclxuICAgICAgICBzdGFydCAtPTY7XHJcbiAgICAgICAgZW5kLT02O1xyXG4gICAgICAgIG5leHRQYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGVOZXh0QnV0dG9uJyk7XHJcbiAgICAgICAgaWYoc3RhcnQgPj0gMCl7XHJcbiAgICAgICAgICAgIHByb2R1Y3RMaXN0LmlubmVySFRNTCA9ICcnXHJcbiAgICAgICAgICAgIGRvbUZ1bmN0aW9zLmFkZFRvRG9tKHNsaWNlT2JqKGZpbmFsRGF0YSxzdGFydCxlbmQpLHBhZ2VzLnBvcHVsYXJQcm9kdWN0KTtcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIHN0YXJ0Kz02O1xyXG4gICAgICAgICAgICBlbmQrPTY7XHJcbiAgICAgICAgICAgIGJhY2tQYWdlLmNsYXNzTGlzdC5hZGQoJ2hpZGVCYWNrQnV0dG9uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKChzdGFydC02KSA8IDApeyAgXHJcbiAgICAgICAgICAgIGJhY2tQYWdlLmNsYXNzTGlzdC5hZGQoJ2hpZGVCYWNrQnV0dG9uJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG59O1xyXG5cclxuIiwiZXhwb3J0IGVudW0gcGFnZXMge1xyXG4gICAgYWxsLFxyXG4gICAgbXlQcm9kdWN0LFxyXG4gICAgcG9wdWxhclByb2R1Y3RcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=