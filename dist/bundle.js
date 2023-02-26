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
    /// handle search bar 
    var searchBar = document.querySelector(".searchBar");
    var searchHandler = function (event) {
        var input = event.target;
        var result = {};
        for (var item in finalData) {
            if (finalData[item].title.includes(input.value)) {
                result[item] = finalData[item];
            }
        }
        _addDataToDom__WEBPACK_IMPORTED_MODULE_2__["default"].addToDom((0,___WEBPACK_IMPORTED_MODULE_3__.sliceObj)(result, start, end), _types_pageType__WEBPACK_IMPORTED_MODULE_4__.pages.all);
        searchBar.removeEventListener('click', searchHandler);
        searchBar.value = "";
        searchBar.addEventListener('click', searchHandler);
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
    var inputSearch = document.querySelector('.searchBar');
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
    var h4 = document.createElement('h4');
    var myProducts = document.querySelector('.Myproducts');
    if (Object.keys(finalData).length === 0 && !(document.querySelector('.Myproducts h4'))) {
        h4.textContent = "No Products selected yet";
        myProducts.appendChild(h4);
    }
    else if (document.querySelector('.Myproducts h4')) {
        // myProducts.removeChild(h)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBQztZQUNWLFdBQVcsQ0FBQyxTQUFTLEdBQUcsRUFBRTtZQUMxQiw4REFBb0IsQ0FBQywyQ0FBUSxDQUFDLFNBQVMsRUFBQyxLQUFLLEVBQUMsR0FBRyxDQUFDLEVBQUMsaUVBQW9CLENBQUMsQ0FBQztTQUM1RTthQUFLO1lBQ0YsS0FBSyxJQUFFLENBQUMsQ0FBQztZQUNULEdBQUcsSUFBRSxDQUFDLENBQUM7WUFDUCxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQzVDO1FBQ0QsSUFBRyxDQUFDLEtBQUssR0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUM7WUFDYixRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQzVDO0lBRUwsQ0FBQyxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3BFRixJQUFZLEtBSVg7QUFKRCxXQUFZLEtBQUs7SUFDYiwrQkFBRztJQUNILDJDQUFTO0lBQ1QscURBQWM7QUFDbEIsQ0FBQyxFQUpXLEtBQUssS0FBTCxLQUFLLFFBSWhCOzs7Ozs7O1VDSkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHBlcjMvLi9zcmMvYWRkRGF0YVRvRG9tLnRzIiwid2VicGFjazovL2V4cGVyMy8uL3NyYy9hbGxQcm9kdWN0c0NvbnRyb2xsLnRzIiwid2VicGFjazovL2V4cGVyMy8uL3NyYy9kYXRhLnRzIiwid2VicGFjazovL2V4cGVyMy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9leHBlcjMvLi9zcmMvbGlrZXNHZW5lcmF0b3IudHMiLCJ3ZWJwYWNrOi8vZXhwZXIzLy4vc3JjL2xpa2VzR2V0dGVyLnRzIiwid2VicGFjazovL2V4cGVyMy8uL3NyYy9tZW51Q29udHJvbC50cyIsIndlYnBhY2s6Ly9leHBlcjMvLi9zcmMvbXlQcm9kdWN0c0NvbnRyb2xsLnRzIiwid2VicGFjazovL2V4cGVyMy8uL3NyYy9wb3B1bGFyUHJvZHVjdC50cyIsIndlYnBhY2s6Ly9leHBlcjMvLi9zcmMvdHlwZXMvcGFnZVR5cGUudHMiLCJ3ZWJwYWNrOi8vZXhwZXIzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4cGVyMy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhwZXIzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhwZXIzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhwZXIzL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vZXhwZXIzL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9leHBlcjMvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdlbmVyYXRlTGlrZXMgfSBmcm9tIFwiLi9saWtlc0dlbmVyYXRvclwiO1xyXG5pbXBvcnQgeyBwcm9kdWN0IH0gZnJvbSBcIi4vdHlwZXMvZGF0YVwiO1xyXG5pbXBvcnQgeyBwYWdlcyB9IGZyb20gXCIuL3R5cGVzL3BhZ2VUeXBlXCI7XHJcblxyXG5jb25zdCBhZGRUb0RvbSA9IChkYXRhOntcclxuICAgIFtpbmRleDpzdHJpbmddOnByb2R1Y3RcclxufSxwYWdlVHlwZTpudW1iZXIpPT57XHJcbiAgICBsZXQgcHJvZHVjdExpc3Q6SFRNTFVMaXN0RWxlbWVudDtcclxuICAgIGlmKHBhZ2VUeXBlID09PSBwYWdlcy5hbGwpe1xyXG4gICAgICAgIHByb2R1Y3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hbGxQcm9kdWN0TGlzdFwiKTtcclxuICAgIH1lbHNlIGlmKHBhZ2VUeXBlID09PSBwYWdlcy5teVByb2R1Y3Qpe1xyXG4gICAgICAgIHByb2R1Y3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5teVByb2R1Y3RMaXN0XCIpO1xyXG4gICAgfWVsc2UgaWYocGFnZVR5cGUgPT09IHBhZ2VzLnBvcHVsYXJQcm9kdWN0KSB7XHJcbiAgICAgICAgcHJvZHVjdExpc3Q9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdWxhclByb2R1Y3RzTGlzdFwiKTtcclxuICAgIH1cclxuICAgIHByb2R1Y3RMaXN0LmlubmVySFRNTCA9ICcnO1xyXG4gICAgZm9yKGNvbnN0IHByb2R1Y3QgIGluIGRhdGEpe1xyXG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgY29uc3QgaHggID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gICAgICAgIGNvbnN0IHA6SFRNTFBhcmFncmFwaEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBzZWNvbmRQOkhUTUxQYXJhZ3JhcGhFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgY29uc3QgaHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHJcIik7XHJcbiAgICAgICAgY29uc3QgbGlrZXNQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGNvbnN0IHNlY29uZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IGxpa2VzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgY29uc3QgcHJpY2VQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGNvbnN0IHByaWNlTGlrZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IGFkZFRvTXlQcm9kdWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgLy8gbWFuYWdlIGVsZW1lbnRzIHRleHQgY29udGVudFxyXG4gICAgICAgIHNlY29uZFAudGV4dENvbnRlbnQgPSBgcmF0ZTogJHtkYXRhW3Byb2R1Y3RdLnJhdGluZy5yYXRlfWA7XHJcbiAgICAgICAgcC50ZXh0Q29udGVudCA9IGAke2RhdGFbcHJvZHVjdF0ucmF0aW5nLmNvdW50fSByZXZpZXdzYDtcclxuICAgICAgICBzZWNvbmRQLnRleHRDb250ZW50ID0gYHJhdGU6ICR7ZGF0YVtwcm9kdWN0XS5yYXRpbmcucmF0ZX1gO1xyXG4gICAgICAgIHAudGV4dENvbnRlbnQgPSBgJHtkYXRhW3Byb2R1Y3RdLnJhdGluZy5jb3VudH0gcmV2aWV3c2A7XHJcbiAgICAgICAgaW1nLnNyYyA9IGRhdGFbcHJvZHVjdF0uaW1hZ2U7XHJcbiAgICAgICAgcHJpY2VMaWtlRGl2LmNsYXNzTGlzdC5hZGQoXCJwcmljZUxpa2VcIik7XHJcbiAgICAgICAgaHgudGV4dENvbnRlbnQgPSBgJHtkYXRhW3Byb2R1Y3RdLnRpdGxlfWA7XHJcbiAgICAgICAgc2Vjb25kRGl2LmNsYXNzTGlzdC5hZGQoXCJjYXJkRGF0YUNvbnRhaW5lclwiKTtcclxuICAgICAgICBpZihkYXRhW3Byb2R1Y3RdLm15UHJvZHVjdCl7XHJcbiAgICAgICAgYWRkVG9NeVByb2R1Y3RCdXR0b24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybCguLi9zcmMvaW1hZ2VzL2RvbmUucG5nKSc7ICAgXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgYWRkVG9NeVByb2R1Y3RCdXR0b24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybCguLi9zcmMvaW1hZ2VzL2FkZHdoaXRlLnBuZyknO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhZGRUb015UHJvZHVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWRkVG9NeVByb2R1Y3RzXCIpO1xyXG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwicmF0aW5nRGF0YUNvbnRhaW5lclwiKTtcclxuICAgICAgICBoeC5jbGFzc0xpc3QuYWRkKFwiY2FyZFRpdGxlXCIpO1xyXG4gICAgICAgIHByaWNlUC5jbGFzc0xpc3QuYWRkKFwicHJpY2VQXCIpO1xyXG4gICAgICAgIGxpa2VzUC50ZXh0Q29udGVudCA9IGAke2RhdGFbcHJvZHVjdF0ubGlrZXN9YFxyXG4gICAgICAgIGxpa2VzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57XHJcbiAgICAgICAgICAgIGNvbnN0IHNwYW4gPSBOdW1iZXIobGlrZXNQLmxhc3RDaGlsZC50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgICAgIGdlbmVyYXRlTGlrZXMoe1xyXG4gICAgICAgICAgICAgICAgaXRlbV9pZDpkYXRhW3Byb2R1Y3RdLmlkXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGxpa2VzQnV0dG9uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoLi4vc3JjL2ltYWdlcy9saWtlRGFyay5wbmcpJzsgIFxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICAgICAgICBsaWtlc0J1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKC4uL3NyYy9pbWFnZXMvbGlrZS5wbmcpJzsgIFxyXG4gICAgICAgICAgICB9LDUwMClcclxuICAgICAgICAgICAgbGlrZXNQLmlubmVySFRNTCA9IGA8c3Bhbj4ke3NwYW4rMX08L3NwYW4+YFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgbGlrZXNCdXR0b24uY2xhc3NMaXN0LmFkZCgnbGlrZXNCdXR0b24nKTtcclxuICAgICAgICBsaWtlc1AuY2xhc3NMaXN0LmFkZChcImxpa2VzQW1vdW50XCIpXHJcbiAgICAgICAgcHJpY2VQLnRleHRDb250ZW50ID0gYCR7ZGF0YVtwcm9kdWN0XS5wcmljZX0kYFxyXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChwKTtcclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoc2Vjb25kUCk7XHJcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQoaW1nKTtcclxuICAgICAgICBsaS5hcHBlbmRDaGlsZChzZWNvbmREaXYpXHJcbiAgICAgICAgc2Vjb25kRGl2LmFwcGVuZENoaWxkKGh4KTtcclxuICAgICAgICBzZWNvbmREaXYuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgICAgICBzZWNvbmREaXYuYXBwZW5kQ2hpbGQoaHIpO1xyXG4gICAgICAgIHByaWNlTGlrZURpdi5hcHBlbmRDaGlsZChwcmljZVApO1xyXG4gICAgICAgIHByaWNlTGlrZURpdi5hcHBlbmRDaGlsZChhZGRUb015UHJvZHVjdEJ1dHRvbik7XHJcbiAgICAgICAgcHJpY2VMaWtlRGl2LmFwcGVuZENoaWxkKGxpa2VzQnV0dG9uKTtcclxuICAgICAgICBzZWNvbmREaXYuYXBwZW5kQ2hpbGQocHJpY2VMaWtlRGl2KTtcclxuICAgICAgICBzZWNvbmREaXYuYXBwZW5kQ2hpbGQobGlrZXNQKVxyXG4gICAgICAgIHByb2R1Y3RMaXN0LmFwcGVuZENoaWxkKGxpKTtcclxuICAgICAgICBhZGRUb015UHJvZHVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcclxuICAgICAgICAgICAgY29uc3QgYWxsUHJvZHVjdHMgPSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2FsbFByb2R1Y3RzJykpO1xyXG4gICAgICAgICAgICBhbGxQcm9kdWN0c1tkYXRhW3Byb2R1Y3RdLmlkXS5teVByb2R1Y3QgPSAhYWxsUHJvZHVjdHNbZGF0YVtwcm9kdWN0XS5pZF0ubXlQcm9kdWN0O1xyXG4gICAgICAgICAgICBpZiggYWxsUHJvZHVjdHNbZGF0YVtwcm9kdWN0XS5pZF0ubXlQcm9kdWN0KXtcclxuICAgICAgICAgICAgICAgIGFkZFRvTXlQcm9kdWN0QnV0dG9uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoLi4vc3JjL2ltYWdlcy9kb25lLnBuZyknOyAgIFxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocGFnZVR5cGUgPT09IHBhZ2VzLm15UHJvZHVjdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RMaXN0LnJlbW92ZUNoaWxkKGxpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhZGRUb015UHJvZHVjdEJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKC4uL3NyYy9pbWFnZXMvYWRkd2hpdGUucG5nKSc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2FsbFByb2R1Y3RzJyxKU09OLnN0cmluZ2lmeShhbGxQcm9kdWN0cykpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGFkZFRvRG9tXHJcbn0iLCJpbXBvcnQgeyBnZXREYXRhIH0gZnJvbSAnLi9kYXRhJztcclxuaW1wb3J0IHsgZ2V0TGlrZXMgfSBmcm9tICcuL2xpa2VzR2V0dGVyJztcclxuaW1wb3J0IGRvbUZ1bmN0aW9zIGZyb20gJy4vYWRkRGF0YVRvRG9tJztcclxuaW1wb3J0IHsgc2xpY2VPYmogfSBmcm9tICcuJztcclxuaW1wb3J0IHsgcHJvZHVjdE9iamVjdCB9IGZyb20gJy4vdHlwZXMvZGF0YSc7XHJcbmltcG9ydCB7IHBhZ2VzIH0gZnJvbSAnLi90eXBlcy9wYWdlVHlwZSc7XHJcblxyXG5leHBvcnQgY29uc3QgYWxsUHJvZHVjdHMgPSAoKT0+e1xyXG4gICAgICAgIGNvbnN0IHBhZ2luYXRpb25Db250cm9sbGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2luYXRpb25Db250cm9sbGVyJyk7XHJcbiAgICAgICAgcGFnaW5hdGlvbkNvbnRyb2xsZXIuaW5uZXJIVE1MID0gYDxidXR0b24gY2xhc3M9XCJnb0JhY2sgaGlkZVwiPkdvIEJhY2sgPGhyPjwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJuZXh0QnV0dG9uXCI+TmV4dCBwYWdlIDxocj48L2J1dHRvbj5gO1xyXG4gICAgICAgIGNvbnN0IG5leHRQYWdlOkhUTUxCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5leHRCdXR0b24nKTtcclxuICAgICAgICBjb25zdCBiYWNrUGFnZTpIVE1MQnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nb0JhY2snKTtcclxuICAgICAgICBjb25zdCBwcm9kdWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGxQcm9kdWN0TGlzdCcpO1xyXG4gICAgICAgIG5leHRQYWdlLnN0eWxlLmRpc3BsYXkgPSAnJztcclxuICAgICAgICBiYWNrUGFnZS5zdHlsZS5kaXNwbGF5ID0gJyc7XHJcbiAgICAgICBcclxuICAgICAgICAvLyBoYW5kbGUgYXBpc1xyXG4gICAgICAgIGxldCBzdGFydCA9IDA7XHJcbiAgICAgICAgbGV0IGVuZCA9IDY7XHJcbiAgICAgICAgbGV0IGZpbmFsRGF0YTpwcm9kdWN0T2JqZWN0O1xyXG4gICAgICAgIGdldERhdGEoKGRhdGEpPT57XHJcbiAgICAgICAgZ2V0TGlrZXMoZGF0YSwoaXRlbXMpPT57XHJcbiAgICAgICAgICAgIGZpbmFsRGF0YSA9IGl0ZW1zXHJcblxyXG4gICAgICAgICAgICBjb25zdCBkYXRhSW5Mb2NhbFN0b3JhZ2UgPSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJhbGxQcm9kdWN0c1wiKSl8fCBmYWxzZTtcclxuICAgICAgICAgICAgaWYoIWRhdGFJbkxvY2FsU3RvcmFnZSl7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGl0ZW0gaW4gZmluYWxEYXRhKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxEYXRhW2l0ZW1dW1wibXlQcm9kdWN0XCJdID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgZm9yKGxldCBpdGVtIGluIGZpbmFsRGF0YSl7XHJcbiAgICAgICAgICAgICAgICBpZighZGF0YUluTG9jYWxTdG9yYWdlW2ZpbmFsRGF0YVtpdGVtXS5pZF0pe1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbmFsRGF0YVtpdGVtXVtcIm15UHJvZHVjdFwiXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoZGF0YUluTG9jYWxTdG9yYWdlW2ZpbmFsRGF0YVtpdGVtXS5pZF0ubXlQcm9kdWN0KXtcclxuICAgICAgICAgICAgICAgICAgICBmaW5hbERhdGFbaXRlbV1bXCJteVByb2R1Y3RcIl0gPSB0cnVlOyBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImFsbFByb2R1Y3RzXCIsSlNPTi5zdHJpbmdpZnkoZmluYWxEYXRhKSk7XHJcbiAgICAgICAgICAgIGRvbUZ1bmN0aW9zLmFkZFRvRG9tKHNsaWNlT2JqKGZpbmFsRGF0YSxzdGFydCxlbmQpLHBhZ2VzLmFsbCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuICAgICAgICAgLy8vIGhhbmRsZSBzZWFyY2ggYmFyIFxyXG4gICAgICAgICBjb25zdCBzZWFyY2hCYXI6SFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoQmFyXCIpO1xyXG4gICAgICAgICBjb25zdCBzZWFyY2hIYW5kbGVyID0gKGV2ZW50OkV2ZW50KT0+e1xyXG4gICAgICAgICAgICBjb25zdCBpbnB1dD0gZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdDpwcm9kdWN0T2JqZWN0ID0ge307XHJcbiAgICAgICAgICAgIGZvcihsZXQgaXRlbSBpbiBmaW5hbERhdGEpe1xyXG4gICAgICAgICAgICAgICAgaWYoZmluYWxEYXRhW2l0ZW1dLnRpdGxlLmluY2x1ZGVzKGlucHV0LnZhbHVlKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0W2l0ZW1dID0gZmluYWxEYXRhW2l0ZW1dO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRvbUZ1bmN0aW9zLmFkZFRvRG9tKHNsaWNlT2JqKHJlc3VsdCxzdGFydCxlbmQpLHBhZ2VzLmFsbCk7XHJcbiAgICAgICAgICAgIHNlYXJjaEJhci5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsc2VhcmNoSGFuZGxlcik7XHJcbiAgICAgICAgICAgIHNlYXJjaEJhci52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgICAgIHNlYXJjaEJhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsc2VhcmNoSGFuZGxlcilcclxuICAgICAgICAgICB9O1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICBzZWFyY2hCYXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLHNlYXJjaEhhbmRsZXIpO1xyXG4gICAgICAgICBzZWFyY2hCYXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJyxzZWFyY2hIYW5kbGVyKSAgIFxyXG4gICAgICAgICBuZXh0UGFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcclxuICAgICAgICAgICAgc3RhcnQgPSBlbmQ7XHJcbiAgICAgICAgICAgIGVuZCs9NjtcclxuICAgICAgICAgICAgYmFja1BhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZUJhY2tCdXR0b24nKVxyXG4gICAgICAgICAgICBpZihzdGFydCA8IE9iamVjdC5rZXlzKGZpbmFsRGF0YSkubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RMaXN0LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgZG9tRnVuY3Rpb3MuYWRkVG9Eb20oc2xpY2VPYmooZmluYWxEYXRhLHN0YXJ0LGVuZCkscGFnZXMuYWxsKTtcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc3RhcnQtPTY7XHJcbiAgICAgICAgICAgICAgICBlbmQtPTY7XHJcbiAgICAgICAgICAgICAgICBuZXh0UGFnZS5jbGFzc0xpc3QuYWRkKCdoaWRlTmV4dEJ1dHRvbicpXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKChzdGFydCs0KSA+PSBPYmplY3Qua2V5cyhmaW5hbERhdGEpLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICBuZXh0UGFnZS5jbGFzc0xpc3QuYWRkKCdoaWRlTmV4dEJ1dHRvbicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYmFja1BhZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XHJcbiAgICAgICAgICAgIHN0YXJ0IC09NDtcclxuICAgICAgICAgICAgZW5kLT00O1xyXG4gICAgICAgICAgICBuZXh0UGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlTmV4dEJ1dHRvbicpXHJcbiAgICAgICAgICAgIGlmKHN0YXJ0ID49IDApe1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdExpc3QuaW5uZXJIVE1MID0gJydcclxuICAgICAgICAgICAgICAgIGRvbUZ1bmN0aW9zLmFkZFRvRG9tKHNsaWNlT2JqKGZpbmFsRGF0YSxzdGFydCxlbmQpLHBhZ2VzLmFsbCk7XHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIHN0YXJ0Kz00O1xyXG4gICAgICAgICAgICAgICAgZW5kKz00O1xyXG4gICAgICAgICAgICAgICAgYmFja1BhZ2UuY2xhc3NMaXN0LmFkZCgnaGlkZUJhY2tCdXR0b24nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZigoc3RhcnQtNCkgPCAwKXsgIFxyXG4gICAgICAgICAgICAgICAgYmFja1BhZ2UuY2xhc3NMaXN0LmFkZCgnaGlkZUJhY2tCdXR0b24nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgXHJcbn07XHJcblxyXG4iLCJpbXBvcnQgeyBwcm9kdWN0IH0gZnJvbSBcIi4vdHlwZXMvZGF0YVwiXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RGF0YSA9IChjYWxsOihkYXRhOnByb2R1Y3RbXSk9PnZvaWQpPT57XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3RMb2FkaW5nXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpXHJcbiAgICBmZXRjaChcImh0dHBzOi8vZmFrZXN0b3JlYXBpLmNvbS9wcm9kdWN0c1wiKS50aGVuKChyZXMpPT5cclxuICAgICAgICByZXMuanNvbigpXHJcbiAgICApLnRoZW4oKGpzb24pPT57XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0TG9hZGluZ1wiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxyXG4gICAgICAgIGNhbGwoanNvbilcclxuICAgIH0pXHJcbn0iLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IGFsbFByb2R1Y3RzIH0gZnJvbSAnLi9hbGxQcm9kdWN0c0NvbnRyb2xsJztcclxuaW1wb3J0IHsgbmF2TWVudSB9IGZyb20gJy4vbWVudUNvbnRyb2wnO1xyXG5pbXBvcnQgeyBteVByb2R1Y3RzQ29udHJvbGwgfSBmcm9tICcuL215UHJvZHVjdHNDb250cm9sbCc7XHJcbmltcG9ydCB7IHBvcHVsYXJQcm9kdWN0IH0gZnJvbSAnLi9wb3B1bGFyUHJvZHVjdCc7XHJcbmltcG9ydCB7IHByb2R1Y3RPYmplY3QgfSBmcm9tICcuL3R5cGVzL2RhdGEnO1xyXG5cclxuICBmdW5jdGlvbiBjb21wb25lbnQoKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAvLyBkZWZpbmUgc2VjdGlvbnMgaW4gdmFyaWFibGVzIFxyXG4gICAgY29uc3QgYWxsUHJvZHVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5BbGwnKTtcclxuICAgIGNvbnN0IGlucHV0U2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaEJhcicpO1xyXG4gICAgY29uc3QgbmF2U2VjdGlvbjpIVE1MVGFibGVTZWN0aW9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZTZWN0aW9uJylcclxuICAgIGNvbnN0IG15UHJvZHVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuTXlwcm9kdWN0cycpO1xyXG4gICAgY29uc3QgbG9nb0xpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9nb0xpbmsnKTtcclxuICAgIGNvbnN0IHBvdWxhclByb2R1Y3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLlBvcHVsYXInKTtcclxuICAgIC8vc2VsZWN0IG1pbmkgbmF2IGJ1dHRvbnMgXHJcbiAgICBjb25zdCBhbGxQcm9kdWN0QnV0dG9uOkhUTUxBbmNob3JFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbCcpO1xyXG4gICAgY29uc3QgbXlQcm9kdWN0c0J1dHRvbjpIVE1MQW5jaG9yRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5teXByb2R1Y3RzJyk7XHJcbiAgICBjb25zdCBwb3B1bGFyUHJvZHVjdHNCdXR0b246SFRNTEFuY2hvckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdWxhcicpO1xyXG4gICBcclxuICAgIG5hdk1lbnUoKTtcclxuICAgIC8vIGhhbmRsZSBwYXRoc1xyXG4gICAgaWYod2luZG93LmxvY2F0aW9uLmhhc2ggPT09IFwiXCIgfHwgd2luZG93LmxvY2F0aW9uLmhhc2ggPT09IFwiI0FsbFwiKXtcclxuICAgICAgYWxsUHJvZHVjdHMoKTtcclxuICAgICAgbXlQcm9kdWN0cy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgIGFsbFByb2R1Y3QuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXHJcbiAgICAgIHBvdWxhclByb2R1Y3RzLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgbXlQcm9kdWN0c0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgaW5wdXRTZWFyY2guY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG4gICAgICBuYXZTZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxyXG4gICAgICBhbGxQcm9kdWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICBwb3B1bGFyUHJvZHVjdHNCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICB9ZWxzZSBpZih3aW5kb3cubG9jYXRpb24uaGFzaCA9PT0gXCIjTXlwcm9kdWN0c1wiKSB7XHJcbiAgICAgIGlucHV0U2VhcmNoLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgbXlQcm9kdWN0c0NvbnRyb2xsKCk7XHJcbiAgICAgIG15UHJvZHVjdHMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG4gICAgICBhbGxQcm9kdWN0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgcG91bGFyUHJvZHVjdHMuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICBteVByb2R1Y3RzQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICBuYXZTZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcclxuICAgICAgYWxsUHJvZHVjdEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgcG9wdWxhclByb2R1Y3RzQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgfWVsc2UgaWYod2luZG93LmxvY2F0aW9uLmhhc2ggPT09IFwiI1BvcHVsYXJcIil7XHJcbiAgICAgIGlucHV0U2VhcmNoLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgcG9wdWxhclByb2R1Y3QoKTtcclxuICAgICAgbXlQcm9kdWN0cy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgIG5hdlNlY3Rpb24uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxyXG4gICAgICBhbGxQcm9kdWN0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxyXG4gICAgICBwb3VsYXJQcm9kdWN0cy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbiAgICAgIG15UHJvZHVjdHNCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgIGFsbFByb2R1Y3RCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgIHBvcHVsYXJQcm9kdWN0c0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGFsbFByb2R1Y3RGdW5jdGlvbiA9ICgpPT57XHJcbiAgICAgIGFsbFByb2R1Y3RzKCk7XHJcbiAgICAgIGlucHV0U2VhcmNoLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuICAgICAgbXlQcm9kdWN0cy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgIG5hdlNlY3Rpb24uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXHJcbiAgICAgIGFsbFByb2R1Y3QuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXHJcbiAgICAgIHBvdWxhclByb2R1Y3RzLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgbXlQcm9kdWN0c0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgYWxsUHJvZHVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgcG9wdWxhclByb2R1Y3RzQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gICAgLy8gbmF2aWdhdGlvbnMgZXZlbnRzIFxyXG4gICAgYWxsUHJvZHVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsYWxsUHJvZHVjdEZ1bmN0aW9uKVxyXG4gICAgbXlQcm9kdWN0c0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcclxuICAgICAgbXlQcm9kdWN0c0NvbnRyb2xsKCk7XHJcbiAgICAgIG15UHJvZHVjdHMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG4gICAgICBuYXZTZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcclxuICAgICAgYWxsUHJvZHVjdC5jbGFzc0xpc3QuYWRkKCdoaWRlJylcclxuICAgICAgcG91bGFyUHJvZHVjdHMuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICBteVByb2R1Y3RzQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICBhbGxQcm9kdWN0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICBpbnB1dFNlYXJjaC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgIHBvcHVsYXJQcm9kdWN0c0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHJcbiAgICB9KVxyXG4gICAgbG9nb0xpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGFsbFByb2R1Y3RGdW5jdGlvbilcclxuICAgIHBvcHVsYXJQcm9kdWN0c0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcclxuICAgICAgcG9wdWxhclByb2R1Y3QoKTtcclxuICAgICAgbXlQcm9kdWN0cy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgIG5hdlNlY3Rpb24uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxyXG4gICAgICBhbGxQcm9kdWN0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxyXG4gICAgICBwb3VsYXJQcm9kdWN0cy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbiAgICAgIGlucHV0U2VhcmNoLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgbXlQcm9kdWN0c0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgYWxsUHJvZHVjdEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgcG9wdWxhclByb2R1Y3RzQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgfSlcclxuICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICBleHBvcnQgY29uc3Qgc2xpY2VPYmogPSAob2JqOnByb2R1Y3RPYmplY3Qsc3RhcnQ6bnVtYmVyLGVuZDpudW1iZXIpOnByb2R1Y3RPYmplY3Q9PntcclxuICAgIGNvbnN0IHJlc3VsdDpwcm9kdWN0T2JqZWN0ID0ge307XHJcbiAgICBsZXQgZmlyc3RDb3VudGVyOm51bWJlciA9IHN0YXJ0O1xyXG4gICAgY29uc3Qgb2JqS2V5cyA9ICBPYmplY3Qua2V5cyhvYmopO1xyXG4gICAgZm9yKGxldCBpdGVtID1zdGFydDtpdGVtIDwgZW5kO2l0ZW0rKyl7XHJcbiAgICAgIGlmKGZpcnN0Q291bnRlciA+PSBlbmQpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgIH1cclxuICAgICAgaWYob2JqS2V5c1tpdGVtXSl7XHJcbiAgICAgIHJlc3VsdFtvYmpLZXlzW2l0ZW1dXSA9IG9ialtvYmpLZXlzW2l0ZW1dXTt9XHJcbiAgICAgIGZpcnN0Q291bnRlcisrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KCkpO1xyXG4iLCJjb25zdCBsaWtlc1VybCA9IFwiaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvelNmcWxjcjZacVJDZGRrMTBXSFYvbGlrZXNcIjtcclxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlTGlrZXMgPSAoZGF0YTp7XHJcbiAgICBpdGVtX2lkOm51bWJlclxyXG59KT0+e1xyXG4gICAgZmV0Y2gobGlrZXNVcmwse1xyXG4gICAgICAgIG1ldGhvZDpcIlBPU1RcIixcclxuICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICBib2R5OkpTT04uc3RyaW5naWZ5KGRhdGEpXHJcbiAgICB9KS50aGVuKChyZXMpPT57XHJcbiAgICAgICAgaWYoIXJlcy5vayl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufTsiLCJpbXBvcnQgeyBwcm9kdWN0IH0gZnJvbSBcIi4vdHlwZXMvZGF0YVwiO1xyXG5cclxuY29uc3QgbGlrZXNVcmwgPSBcImh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL3pTZnFsY3I2WnFSQ2RkazEwV0hWL2xpa2VzL1wiO1xyXG5jb25zdCBnZXRMaWtlc0RhdGEgPSAgYXN5bmMgKCkgPT57XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChsaWtlc1VybCk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgcmV0dXJuIGRhdGFcclxufVxyXG5leHBvcnQgY29uc3QgZ2V0TGlrZXMgPSAgKHByb2R1Y3REYXRhOnByb2R1Y3RbXSxjYWxsZm46KHJlc3VsdDp7XHJcbiAgICBbaW5kZXg6c3RyaW5nXTpwcm9kdWN0XHJcbn0pPT52b2lkKT0+e1xyXG4gICAgY29uc3QgZmluYWxEYXRhPSBnZXRMaWtlc0RhdGEoKTtcclxuICAgIFxyXG4gICAgZmluYWxEYXRhLnRoZW4oKGl0ZW1zOntpdGVtX2lkOm51bWJlcixsaWtlczpudW1iZXJ9W10gKT0+e1xyXG5cclxuICAgICAgICBjb25zdCByZXN1bHQ6e1xyXG4gICAgICAgICAgICBbaW5kZXg6c3RyaW5nXTpwcm9kdWN0XHJcbiAgICAgICAgfSA9IHt9XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDtpPHByb2R1Y3REYXRhLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICByZXN1bHRbYCR7cHJvZHVjdERhdGFbaV0uaWR9YF0gPSB7Li4ucHJvZHVjdERhdGFbaV0sbGlrZXM6MH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihsZXQgaSA9MDtpPGl0ZW1zLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0W2l0ZW1zW2ldLml0ZW1faWRdLmxpa2VzID0gaXRlbXNbaV0ubGlrZXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhbGxmbihyZXN1bHQpO1xyXG4gICAgfSlcclxufSIsImNvbnN0IGhpZGVTaG93TmF2RWxlbWVudHMgPSAobm9kZUxzdDpOb2RlTGlzdE9mPEhUTUxBbmNob3JFbGVtZW50PixzaG93OmJvb2xlYW4pPT57XHJcbiAgICBmb3IobGV0IGluZGV4ID0gMDtpbmRleDxub2RlTHN0Lmxlbmd0aCA7aW5kZXgrKyl7XHJcbiAgICAgICAgaWYoc2hvdyl7XHJcbiAgICAgICAgICAgIG5vZGVMc3RbaW5kZXhdLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICBub2RlTHN0W2luZGV4XS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmNvbnN0IGNvbnRyb2xVc2VySW5mb1BhZ2UgPSAoKT0+e1xyXG4gLy8gY29udHJvbCB1c2VyIHByb2ZpbGUgbWVudSBcclxuIGNvbnN0IG5vcm1hbE5hdk1lbnU6Tm9kZUxpc3RPZjxIVE1MQW5jaG9yRWxlbWVudD4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5vcm1hbE5hdlwiKTtcclxuIGNvbnN0IHVzZXJJbmZvTGlzdDpIVE1MVUxpc3RFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51c2VySW5mb0xpc3RcIik7XHJcbiBjb25zdCBwcm9maWxlTWVudVNlY29uZEJ1dHRvbjpIVE1MQnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2Vjb25kVXNlckluZm9Db250cm9sXCIpO1xyXG5cclxuIHVzZXJJbmZvTGlzdC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gaGlkZVNob3dOYXZFbGVtZW50cyhub3JtYWxOYXZNZW51LGZhbHNlKTtcclxuXHJcbiBwcm9maWxlTWVudVNlY29uZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xyXG4gICAgICAgICBoaWRlU2hvd05hdkVsZW1lbnRzKG5vcm1hbE5hdk1lbnUsdHJ1ZSk7XHJcbiAgICAgICAgIHVzZXJJbmZvTGlzdC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcclxuIH0pO1xyXG4gXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBuYXZNZW51ID0gKCk9PntcclxuICAgIC8vIGNvbnRyb2wgYWxsIG1vYmlsZSBtZW51XHJcbiAgICBsZXQgZmxhZzpib29sZWFuID0gdHJ1ZTtcclxuICAgIGNvbnN0IG1lbnVCdXR0b246SFRNTEJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNob3dOYXZCdXR0b25cIik7XHJcbiAgICBjb25zdCBtZW51Ok5vZGVMaXN0T2Y8SFRNTEFuY2hvckVsZW1lbnQ+ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZMaW5rXCIpO1xyXG4gICAgY29uc3QgdXNlckluZm9MaXN0OkhUTUxVTGlzdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVzZXJJbmZvTGlzdFwiKTtcclxuICAgIHVzZXJJbmZvTGlzdC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCgpPT57XHJcbiAgICAgICAgaWYoc2NyZWVuLndpZHRoID4gNzY4KXtcclxuICAgICAgICAgICAgaGlkZVNob3dOYXZFbGVtZW50cyhtZW51LHRydWUpO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgaGlkZVNob3dOYXZFbGVtZW50cyhtZW51LCFmbGFnKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsKCk9PntcclxuICAgICAgICBpZihzY3JlZW4ud2lkdGggPiA3Njgpe1xyXG4gICAgICAgICAgICBoaWRlU2hvd05hdkVsZW1lbnRzKG1lbnUsdHJ1ZSk7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICBoaWRlU2hvd05hdkVsZW1lbnRzKG1lbnUsIWZsYWcpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBoaWRlU2hvd05hdkVsZW1lbnRzKG1lbnUsIWZsYWcpXHJcbiAgICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57XHJcbiAgICAgICAgaWYoZmxhZyl7XHJcbiAgICAgICAgICAgIG1lbnVCdXR0b24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoLi4vc3JjL2ltYWdlcy91cGxvYWQucG5nKVwiO1xyXG4gICAgICBcclxuICAgICAgICAgICAgaGlkZVNob3dOYXZFbGVtZW50cyhtZW51LGZsYWcpO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgaGlkZVNob3dOYXZFbGVtZW50cyhtZW51LGZsYWcpO1xyXG4gICAgICAgICAgICB1c2VySW5mb0xpc3Quc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICBtZW51QnV0dG9uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKC4uL3NyYy9pbWFnZXMvYXJyb3ctZG93bi1zaWduLXRvLW5hdmlnYXRlLnBuZylcIlxyXG4gICAgICAgIH1cclxuICAgICAgICBmbGFnID0gIWZsYWdcclxuICAgIH0pO1xyXG4gICAgY29uc3QgcHJvZmlsZUZ1bmN0aW9uID0gKCk9PntcclxuICAgICAgICBjb250cm9sVXNlckluZm9QYWdlKCk7XHJcbiAgICB9O1xyXG4gICAgLy8gY29udHJvbCB1c2VyIGluZm8gbWVudSBcclxuICAgIGlmKHdpbmRvdy5zY3JlZW4ud2lkdGggPCA3Njgpe1xyXG4gICAgY29uc3QgcHJvZmlsZU1lbnVCdXR0b246SFRNTEJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVzZXJpbmZvQ29udHJvbFwiKTtcclxuICAgIHByb2ZpbGVNZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHByb2ZpbGVGdW5jdGlvbik7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBjb25zdCBwcm9maWxlTWVudUJ1dHRvbjpIVE1MQnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXNlcmluZm9Db250cm9sXCIpO1xyXG4gICAgICAgICBwcm9maWxlTWVudUJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIixwcm9maWxlRnVuY3Rpb24pO1xyXG4gICAgfVxyXG59XHJcbiAgIFxyXG5cclxuXHJcbiIsImltcG9ydCBkb21GdW5jdGlvcyBmcm9tICcuL2FkZERhdGFUb0RvbSc7XHJcbmltcG9ydCB7IHNsaWNlT2JqIH0gZnJvbSAnLic7XHJcbmltcG9ydCB7IHByb2R1Y3RPYmplY3QgfSBmcm9tICcuL3R5cGVzL2RhdGEnO1xyXG5pbXBvcnQgeyBwYWdlcyB9IGZyb20gJy4vdHlwZXMvcGFnZVR5cGUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IG15UHJvZHVjdHNDb250cm9sbCA9ICgpPT57XHJcbiAgY29uc3QgcGFnaW5hdGlvbkNvbnRyb2xsZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnaW5hdGlvbkNvbnRyb2xsZXInKTtcclxuICAgICAgICBwYWdpbmF0aW9uQ29udHJvbGxlci5pbm5lckhUTUwgPSBgPGJ1dHRvbiBjbGFzcz1cImdvQmFjayBoaWRlXCI+R28gQmFjayA8aHI+PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm5leHRCdXR0b25cIj5OZXh0IHBhZ2UgPGhyPjwvYnV0dG9uPmA7XHJcbiAgICBjb25zdCBhbGxQcm9kdWN0cyA9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImFsbFByb2R1Y3RzXCIpKSB8fCB7fTtcclxuICAgIGNvbnN0IG5leHRQYWdlOkhUTUxCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5leHRCdXR0b24nKTtcclxuICAgIGNvbnN0IGJhY2tQYWdlOkhUTUxCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdvQmFjaycpO1xyXG4gICAgY29uc3QgcHJvZHVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsUHJvZHVjdExpc3QnKTtcclxuICAgIGNvbnN0IGlzRW1wdHkgPSBPYmplY3Qua2V5cyhhbGxQcm9kdWN0cykubGVuZ3RoID4gMCA/dHJ1ZTpmYWxzZSA7XHJcbiAgICAvLyBoYW5kbGUgYXBpc1xyXG4gICAgbGV0IHN0YXJ0Om51bWJlciA9IGlzRW1wdHkgJiYgMDtcclxuICAgIGxldCBlbmQgPSA2O1xyXG4gICAgbGV0IGZpbmFsRGF0YTpwcm9kdWN0T2JqZWN0ID0gZmlsdGVyT2JqKGFsbFByb2R1Y3RzKTtcclxuICAgIGNvbnN0IHJlc3VsdE9iaiA9IHNsaWNlT2JqKGZpbmFsRGF0YSxzdGFydCxlbmQpO1xyXG4gICAgaWYoaXNFbXB0eSl7XHJcbiAgICBkb21GdW5jdGlvcy5hZGRUb0RvbShyZXN1bHRPYmoscGFnZXMubXlQcm9kdWN0KTtcclxuICAgIG5leHRQYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xyXG4gICAgICBzdGFydCArPTY7XHJcbiAgICAgIGVuZCs9NjtcclxuICAgICAgYmFja1BhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZUJhY2tCdXR0b24nKVxyXG4gICAgICBpZihzdGFydCA8IE9iamVjdC5rZXlzKGZpbmFsRGF0YSkubGVuZ3RoKXtcclxuICAgICAgICAgIHByb2R1Y3RMaXN0LmlubmVySFRNTCA9ICcnXHJcbiAgICAgICAgICBkb21GdW5jdGlvcy5hZGRUb0RvbShzbGljZU9iaihmaW5hbERhdGEsc3RhcnQsZW5kKSxwYWdlcy5teVByb2R1Y3QpO1xyXG4gICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICBzdGFydC09NjtcclxuICAgICAgICAgIGVuZC09NjtcclxuICAgICAgICAgIG5leHRQYWdlLmNsYXNzTGlzdC5hZGQoJ2hpZGVOZXh0QnV0dG9uJyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYoKHN0YXJ0KzYpID4gT2JqZWN0LmtleXMoZmluYWxEYXRhKS5sZW5ndGgpe1xyXG4gICAgICAgICAgbmV4dFBhZ2UuY2xhc3NMaXN0LmFkZCgnaGlkZU5leHRCdXR0b24nKTtcclxuICAgICAgfVxyXG5cclxuICAgICB9KTtcclxuICAgICBpZigoc3RhcnQrNikgPiBPYmplY3Qua2V5cyhmaW5hbERhdGEpLmxlbmd0aCl7XHJcbiAgICAgICAgbmV4dFBhZ2UuY2xhc3NMaXN0LmFkZCgnaGlkZU5leHRCdXR0b24nKTtcclxuICAgICB9XHJcbiAgICAgYmFja1BhZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XHJcbiAgICAgICAgc3RhcnQgLT02O1xyXG4gICAgICAgIGVuZC09NjtcclxuICAgICAgICBuZXh0UGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlTmV4dEJ1dHRvbicpXHJcbiAgICAgICAgaWYoc3RhcnQgPj0gMCl7XHJcbiAgICAgICAgICAgIHByb2R1Y3RMaXN0LmlubmVySFRNTCA9ICcnXHJcbiAgICAgICAgICAgIGRvbUZ1bmN0aW9zLmFkZFRvRG9tKHNsaWNlT2JqKGZpbmFsRGF0YSxzdGFydCxlbmQpLHBhZ2VzLm15UHJvZHVjdCk7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICBzdGFydCs9NjtcclxuICAgICAgICAgICAgZW5kKz02O1xyXG4gICAgICAgICAgICBiYWNrUGFnZS5jbGFzc0xpc3QuYWRkKCdoaWRlQmFja0J1dHRvbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZigoc3RhcnQtNikgPCAwKXsgIFxyXG4gICAgICAgICAgICBiYWNrUGFnZS5jbGFzc0xpc3QuYWRkKCdoaWRlQmFja0J1dHRvbicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgaWYoKHN0YXJ0LTYpIDwgMCl7ICBcclxuICAgICAgICBiYWNrUGFnZS5jbGFzc0xpc3QuYWRkKCdoaWRlQmFja0J1dHRvbicpO1xyXG4gICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBoNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XHJcbiAgICBjb25zdCBteVByb2R1Y3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLk15cHJvZHVjdHMnKTtcclxuICAgIGlmKE9iamVjdC5rZXlzKGZpbmFsRGF0YSkubGVuZ3RoID09PSAwICYmICEoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLk15cHJvZHVjdHMgaDQnKSkpe1xyXG4gICAgICAgIGg0LnRleHRDb250ZW50ID1cIk5vIFByb2R1Y3RzIHNlbGVjdGVkIHlldFwiXHJcbiAgICAgICAgbXlQcm9kdWN0cy5hcHBlbmRDaGlsZChoNClcclxuICAgIH1lbHNlIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5NeXByb2R1Y3RzIGg0JykpIHtcclxuICAgICAgICAvLyBteVByb2R1Y3RzLnJlbW92ZUNoaWxkKGgpXHJcbiAgICB9ICAgXHJcbn07XHJcblxyXG5cclxuY29uc3QgZmlsdGVyT2JqID0gKGRhdGE6cHJvZHVjdE9iamVjdCk6cHJvZHVjdE9iamVjdD0+e1xyXG4gICAgY29uc3QgcHJvZHVjdHMgPSBPYmplY3Qua2V5cyhkYXRhKTtcclxuICAgIGNvbnN0IGVuZCA9IHByb2R1Y3RzLmxlbmd0aDtcclxuICAgIGNvbnN0IHJlc3VsdDpwcm9kdWN0T2JqZWN0ID0ge307XHJcbiAgICBmb3IobGV0IGl0ZW0gPTA7aXRlbSA8IGVuZDtpdGVtKyspe1xyXG4gICAgICBpZihkYXRhW3Byb2R1Y3RzW2l0ZW1dXS5teVByb2R1Y3Qpe1xyXG4gICAgICAgIHJlc3VsdFtwcm9kdWN0c1tpdGVtXV0gPSBkYXRhW3Byb2R1Y3RzW2l0ZW1dXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTsiLCJpbXBvcnQgeyBnZXREYXRhIH0gZnJvbSAnLi9kYXRhJztcclxuaW1wb3J0IHsgZ2V0TGlrZXMgfSBmcm9tICcuL2xpa2VzR2V0dGVyJztcclxuaW1wb3J0IGRvbUZ1bmN0aW9zIGZyb20gJy4vYWRkRGF0YVRvRG9tJztcclxuaW1wb3J0IHsgc2xpY2VPYmogfSBmcm9tICcuJztcclxuaW1wb3J0IHsgcHJvZHVjdE9iamVjdCB9IGZyb20gJy4vdHlwZXMvZGF0YSc7XHJcbmltcG9ydCB7IHBhZ2VzIH0gZnJvbSAnLi90eXBlcy9wYWdlVHlwZSc7XHJcblxyXG5leHBvcnQgY29uc3QgcG9wdWxhclByb2R1Y3QgPSAoKT0+e1xyXG4gICAgY29uc3QgcGFnaW5hdGlvbkNvbnRyb2xsZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnaW5hdGlvbkNvbnRyb2xsZXInKTtcclxuICAgICAgICBwYWdpbmF0aW9uQ29udHJvbGxlci5pbm5lckhUTUwgPSBgPGJ1dHRvbiBjbGFzcz1cImdvQmFjayBoaWRlXCI+R28gQmFjayA8aHI+PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm5leHRCdXR0b25cIj5OZXh0IHBhZ2UgPGhyPjwvYnV0dG9uPmA7XHJcbiAgICBjb25zdCBuZXh0UGFnZTpIVE1MQnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXh0QnV0dG9uJyk7XHJcbiAgICBjb25zdCBiYWNrUGFnZTpIVE1MQnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nb0JhY2snKTtcclxuICAgIGNvbnN0IHByb2R1Y3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbFByb2R1Y3RMaXN0Jyk7XHJcbiAgICBuZXh0UGFnZS5zdHlsZS5kaXNwbGF5ID0gJyc7XHJcbiAgICBiYWNrUGFnZS5zdHlsZS5kaXNwbGF5ID0gJyc7XHJcbiAgICAvLyBoYW5kbGUgYXBpc1xyXG4gICAgbGV0IHN0YXJ0ID0gMDtcclxuICAgIGxldCBlbmQgPSA2O1xyXG4gICAgbGV0IGZpbmFsRGF0YTpwcm9kdWN0T2JqZWN0ID0ge307XHJcblxyXG4gICAgZ2V0RGF0YSgoZGF0YSk9PntcclxuICAgIGdldExpa2VzKGRhdGEsKGl0ZW1zKT0+e1xyXG4gICAgZm9yKGxldCBpdGVtIGluIGl0ZW1zKXtcclxuICAgICAgICBpZihpdGVtc1tpdGVtXS5yYXRpbmcucmF0ZSA+IDQpe1xyXG4gICAgICAgICAgICBmaW5hbERhdGFbaXRlbV0gPSBpdGVtc1tpdGVtXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgICAgICBkb21GdW5jdGlvcy5hZGRUb0RvbShzbGljZU9iaihmaW5hbERhdGEsc3RhcnQsZW5kKSxwYWdlcy5wb3B1bGFyUHJvZHVjdCk7XHJcbiAgICB9KVxyXG4gICAgfSk7XHJcbiAgICBuZXh0UGFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcclxuICAgICAgICBzdGFydCA9IGVuZDtcclxuICAgICAgICBlbmQrPTY7XHJcbiAgICAgICAgYmFja1BhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZUJhY2tCdXR0b24nKVxyXG4gICAgICAgIGlmKHN0YXJ0IDwgT2JqZWN0LmtleXMoZmluYWxEYXRhKS5sZW5ndGgpe1xyXG4gICAgICAgICAgICBwcm9kdWN0TGlzdC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgZG9tRnVuY3Rpb3MuYWRkVG9Eb20oc2xpY2VPYmooZmluYWxEYXRhLHN0YXJ0LGVuZCkscGFnZXMucG9wdWxhclByb2R1Y3QpO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgc3RhcnQtPTY7XHJcbiAgICAgICAgICAgIGVuZC09NjtcclxuICAgICAgICAgICAgbmV4dFBhZ2UuY2xhc3NMaXN0LmFkZCgnaGlkZU5leHRCdXR0b24nKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKChzdGFydCs2KSA+IE9iamVjdC5rZXlzKGZpbmFsRGF0YSkubGVuZ3RoKXtcclxuICAgICAgICAgICAgbmV4dFBhZ2UuY2xhc3NMaXN0LmFkZCgnaGlkZU5leHRCdXR0b24nKTtcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgIH0pO1xyXG4gICAgYmFja1BhZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XHJcbiAgICAgICAgc3RhcnQgLT02O1xyXG4gICAgICAgIGVuZC09NjtcclxuICAgICAgICBuZXh0UGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlTmV4dEJ1dHRvbicpO1xyXG4gICAgICAgIGlmKHN0YXJ0ID49IDApe1xyXG4gICAgICAgICAgICBwcm9kdWN0TGlzdC5pbm5lckhUTUwgPSAnJ1xyXG4gICAgICAgICAgICBkb21GdW5jdGlvcy5hZGRUb0RvbShzbGljZU9iaihmaW5hbERhdGEsc3RhcnQsZW5kKSxwYWdlcy5wb3B1bGFyUHJvZHVjdCk7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICBzdGFydCs9NjtcclxuICAgICAgICAgICAgZW5kKz02O1xyXG4gICAgICAgICAgICBiYWNrUGFnZS5jbGFzc0xpc3QuYWRkKCdoaWRlQmFja0J1dHRvbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZigoc3RhcnQtNikgPCAwKXsgIFxyXG4gICAgICAgICAgICBiYWNrUGFnZS5jbGFzc0xpc3QuYWRkKCdoaWRlQmFja0J1dHRvbicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuIFxyXG59O1xyXG5cclxuIiwiZXhwb3J0IGVudW0gcGFnZXMge1xyXG4gICAgYWxsLFxyXG4gICAgbXlQcm9kdWN0LFxyXG4gICAgcG9wdWxhclByb2R1Y3RcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=