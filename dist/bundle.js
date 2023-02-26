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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDcEVGLElBQVksS0FJWDtBQUpELFdBQVksS0FBSztJQUNiLCtCQUFHO0lBQ0gsMkNBQVM7SUFDVCxxREFBYztBQUNsQixDQUFDLEVBSlcsS0FBSyxLQUFMLEtBQUssUUFJaEI7Ozs7Ozs7VUNKRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2V4cGVyMy8uL3NyYy9hZGREYXRhVG9Eb20udHMiLCJ3ZWJwYWNrOi8vZXhwZXIzLy4vc3JjL2FsbFByb2R1Y3RzQ29udHJvbGwudHMiLCJ3ZWJwYWNrOi8vZXhwZXIzLy4vc3JjL2RhdGEudHMiLCJ3ZWJwYWNrOi8vZXhwZXIzLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2V4cGVyMy8uL3NyYy9saWtlc0dlbmVyYXRvci50cyIsIndlYnBhY2s6Ly9leHBlcjMvLi9zcmMvbGlrZXNHZXR0ZXIudHMiLCJ3ZWJwYWNrOi8vZXhwZXIzLy4vc3JjL21lbnVDb250cm9sLnRzIiwid2VicGFjazovL2V4cGVyMy8uL3NyYy9teVByb2R1Y3RzQ29udHJvbGwudHMiLCJ3ZWJwYWNrOi8vZXhwZXIzLy4vc3JjL3BvcHVsYXJQcm9kdWN0LnRzIiwid2VicGFjazovL2V4cGVyMy8uL3NyYy90eXBlcy9wYWdlVHlwZS50cyIsIndlYnBhY2s6Ly9leHBlcjMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhwZXIzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leHBlcjMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leHBlcjMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leHBlcjMvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9leHBlcjMvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2V4cGVyMy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2VuZXJhdGVMaWtlcyB9IGZyb20gXCIuL2xpa2VzR2VuZXJhdG9yXCI7XG5pbXBvcnQgeyBwcm9kdWN0IH0gZnJvbSBcIi4vdHlwZXMvZGF0YVwiO1xuaW1wb3J0IHsgcGFnZXMgfSBmcm9tIFwiLi90eXBlcy9wYWdlVHlwZVwiO1xuXG5jb25zdCBhZGRUb0RvbSA9IChkYXRhOntcbiAgICBbaW5kZXg6c3RyaW5nXTpwcm9kdWN0XG59LHBhZ2VUeXBlOm51bWJlcik9PntcbiAgICBsZXQgcHJvZHVjdExpc3Q6SFRNTFVMaXN0RWxlbWVudDtcbiAgICBpZihwYWdlVHlwZSA9PT0gcGFnZXMuYWxsKXtcbiAgICAgICAgcHJvZHVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFsbFByb2R1Y3RMaXN0XCIpO1xuICAgIH1lbHNlIGlmKHBhZ2VUeXBlID09PSBwYWdlcy5teVByb2R1Y3Qpe1xuICAgICAgICBwcm9kdWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubXlQcm9kdWN0TGlzdFwiKTtcbiAgICB9ZWxzZSBpZihwYWdlVHlwZSA9PT0gcGFnZXMucG9wdWxhclByb2R1Y3QpIHtcbiAgICAgICAgcHJvZHVjdExpc3Q9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdWxhclByb2R1Y3RzTGlzdFwiKTtcbiAgICB9XG4gICAgcHJvZHVjdExpc3QuaW5uZXJIVE1MID0gJyc7XG4gICAgZm9yKGNvbnN0IHByb2R1Y3QgIGluIGRhdGEpe1xuICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgY29uc3QgaHggID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgICAgICBjb25zdCBwOkhUTUxQYXJhZ3JhcGhFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBzZWNvbmRQOkhUTUxQYXJhZ3JhcGhFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGNvbnN0IGhyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhyXCIpO1xuICAgICAgICBjb25zdCBsaWtlc1AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IHNlY29uZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBsaWtlc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjb25zdCBwcmljZVAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IHByaWNlTGlrZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBhZGRUb015UHJvZHVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAvLyBtYW5hZ2UgZWxlbWVudHMgdGV4dCBjb250ZW50XG4gICAgICAgIHNlY29uZFAudGV4dENvbnRlbnQgPSBgcmF0ZTogJHtkYXRhW3Byb2R1Y3RdLnJhdGluZy5yYXRlfWA7XG4gICAgICAgIHAudGV4dENvbnRlbnQgPSBgJHtkYXRhW3Byb2R1Y3RdLnJhdGluZy5jb3VudH0gcmV2aWV3c2A7XG4gICAgICAgIHNlY29uZFAudGV4dENvbnRlbnQgPSBgcmF0ZTogJHtkYXRhW3Byb2R1Y3RdLnJhdGluZy5yYXRlfWA7XG4gICAgICAgIHAudGV4dENvbnRlbnQgPSBgJHtkYXRhW3Byb2R1Y3RdLnJhdGluZy5jb3VudH0gcmV2aWV3c2A7XG4gICAgICAgIGltZy5zcmMgPSBkYXRhW3Byb2R1Y3RdLmltYWdlO1xuICAgICAgICBwcmljZUxpa2VEaXYuY2xhc3NMaXN0LmFkZChcInByaWNlTGlrZVwiKTtcbiAgICAgICAgaHgudGV4dENvbnRlbnQgPSBgJHtkYXRhW3Byb2R1Y3RdLnRpdGxlfWA7XG4gICAgICAgIHNlY29uZERpdi5jbGFzc0xpc3QuYWRkKFwiY2FyZERhdGFDb250YWluZXJcIik7XG4gICAgICAgIGlmKGRhdGFbcHJvZHVjdF0ubXlQcm9kdWN0KXtcbiAgICAgICAgYWRkVG9NeVByb2R1Y3RCdXR0b24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybCguLi9zcmMvaW1hZ2VzL2RvbmUucG5nKSc7ICAgXG4gICAgICAgIH1lbHNle1xuICAgICAgICBhZGRUb015UHJvZHVjdEJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKC4uL3NyYy9pbWFnZXMvYWRkd2hpdGUucG5nKSc7XG4gICAgICAgIH1cbiAgICAgICAgYWRkVG9NeVByb2R1Y3RCdXR0b24uY2xhc3NMaXN0LmFkZChcImFkZFRvTXlQcm9kdWN0c1wiKTtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJyYXRpbmdEYXRhQ29udGFpbmVyXCIpO1xuICAgICAgICBoeC5jbGFzc0xpc3QuYWRkKFwiY2FyZFRpdGxlXCIpO1xuICAgICAgICBwcmljZVAuY2xhc3NMaXN0LmFkZChcInByaWNlUFwiKTtcbiAgICAgICAgbGlrZXNQLnRleHRDb250ZW50ID0gYCR7ZGF0YVtwcm9kdWN0XS5saWtlc31gXG4gICAgICAgIGxpa2VzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57XG4gICAgICAgICAgICBjb25zdCBzcGFuID0gTnVtYmVyKGxpa2VzUC5sYXN0Q2hpbGQudGV4dENvbnRlbnQpO1xuICAgICAgICAgICAgZ2VuZXJhdGVMaWtlcyh7XG4gICAgICAgICAgICAgICAgaXRlbV9pZDpkYXRhW3Byb2R1Y3RdLmlkXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgbGlrZXNCdXR0b24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybCguLi9zcmMvaW1hZ2VzL2xpa2VEYXJrLnBuZyknOyAgXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgbGlrZXNCdXR0b24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybCguLi9zcmMvaW1hZ2VzL2xpa2UucG5nKSc7ICBcbiAgICAgICAgICAgIH0sNTAwKVxuICAgICAgICAgICAgbGlrZXNQLmlubmVySFRNTCA9IGA8c3Bhbj4ke3NwYW4rMX08L3NwYW4+YFxuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgbGlrZXNCdXR0b24uY2xhc3NMaXN0LmFkZCgnbGlrZXNCdXR0b24nKTtcbiAgICAgICAgbGlrZXNQLmNsYXNzTGlzdC5hZGQoXCJsaWtlc0Ftb3VudFwiKVxuICAgICAgICBwcmljZVAudGV4dENvbnRlbnQgPSBgJHtkYXRhW3Byb2R1Y3RdLnByaWNlfSRgXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChwKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHNlY29uZFApO1xuICAgICAgICBsaS5hcHBlbmRDaGlsZChpbWcpO1xuICAgICAgICBsaS5hcHBlbmRDaGlsZChzZWNvbmREaXYpXG4gICAgICAgIHNlY29uZERpdi5hcHBlbmRDaGlsZChoeCk7XG4gICAgICAgIHNlY29uZERpdi5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICBzZWNvbmREaXYuYXBwZW5kQ2hpbGQoaHIpO1xuICAgICAgICBwcmljZUxpa2VEaXYuYXBwZW5kQ2hpbGQocHJpY2VQKTtcbiAgICAgICAgcHJpY2VMaWtlRGl2LmFwcGVuZENoaWxkKGFkZFRvTXlQcm9kdWN0QnV0dG9uKTtcbiAgICAgICAgcHJpY2VMaWtlRGl2LmFwcGVuZENoaWxkKGxpa2VzQnV0dG9uKTtcbiAgICAgICAgc2Vjb25kRGl2LmFwcGVuZENoaWxkKHByaWNlTGlrZURpdik7XG4gICAgICAgIHNlY29uZERpdi5hcHBlbmRDaGlsZChsaWtlc1ApXG4gICAgICAgIHByb2R1Y3RMaXN0LmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgYWRkVG9NeVByb2R1Y3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgICAgICBjb25zdCBhbGxQcm9kdWN0cyA9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnYWxsUHJvZHVjdHMnKSk7XG4gICAgICAgICAgICBhbGxQcm9kdWN0c1tkYXRhW3Byb2R1Y3RdLmlkXS5teVByb2R1Y3QgPSAhYWxsUHJvZHVjdHNbZGF0YVtwcm9kdWN0XS5pZF0ubXlQcm9kdWN0O1xuICAgICAgICAgICAgaWYoIGFsbFByb2R1Y3RzW2RhdGFbcHJvZHVjdF0uaWRdLm15UHJvZHVjdCl7XG4gICAgICAgICAgICAgICAgYWRkVG9NeVByb2R1Y3RCdXR0b24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybCguLi9zcmMvaW1hZ2VzL2RvbmUucG5nKSc7ICAgXG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIGlmKHBhZ2VUeXBlID09PSBwYWdlcy5teVByb2R1Y3Qpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdExpc3QucmVtb3ZlQ2hpbGQobGkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYWRkVG9NeVByb2R1Y3RCdXR0b24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybCguLi9zcmMvaW1hZ2VzL2FkZHdoaXRlLnBuZyknO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2FsbFByb2R1Y3RzJyxKU09OLnN0cmluZ2lmeShhbGxQcm9kdWN0cykpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgfVxuICAgIH07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBhZGRUb0RvbVxufSIsImltcG9ydCB7IGdldERhdGEgfSBmcm9tICcuL2RhdGEnO1xuaW1wb3J0IHsgZ2V0TGlrZXMgfSBmcm9tICcuL2xpa2VzR2V0dGVyJztcbmltcG9ydCBkb21GdW5jdGlvcyBmcm9tICcuL2FkZERhdGFUb0RvbSc7XG5pbXBvcnQgeyBzbGljZU9iaiB9IGZyb20gJy4nO1xuaW1wb3J0IHsgcHJvZHVjdE9iamVjdCB9IGZyb20gJy4vdHlwZXMvZGF0YSc7XG5pbXBvcnQgeyBwYWdlcyB9IGZyb20gJy4vdHlwZXMvcGFnZVR5cGUnO1xuXG5leHBvcnQgY29uc3QgYWxsUHJvZHVjdHMgPSAoKT0+e1xuICAgICAgICBjb25zdCBpbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hJbnB1dENvbnRhaW5lcicpO1xuICAgICAgICBpbnB1dENvbnRhaW5lci5pbm5lckhUTUwgPSBgPGlucHV0IHR5cGU9XCJzZWFyY2hcIiBwbGFjZWhvbGRlcj1cInNlYXJjaC4uLlwiIGlkPVwic2VhcmNoQmFyXCI+YDtcbiAgICAgICAgY29uc3QgcGFnaW5hdGlvbkNvbnRyb2xsZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnaW5hdGlvbkNvbnRyb2xsZXInKTtcbiAgICAgICAgcGFnaW5hdGlvbkNvbnRyb2xsZXIuaW5uZXJIVE1MID0gYDxidXR0b24gY2xhc3M9XCJnb0JhY2sgaGlkZVwiPkdvIEJhY2sgPGhyPjwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwibmV4dEJ1dHRvblwiPk5leHQgcGFnZSA8aHI+PC9idXR0b24+YDtcbiAgICAgICAgY29uc3QgbmV4dFBhZ2U6SFRNTEJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV4dEJ1dHRvbicpO1xuICAgICAgICBjb25zdCBiYWNrUGFnZTpIVE1MQnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nb0JhY2snKTtcbiAgICAgICAgY29uc3QgcHJvZHVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsUHJvZHVjdExpc3QnKTtcbiAgICAgICAgbmV4dFBhZ2Uuc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgICAgICBiYWNrUGFnZS5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgICAgXG4gICAgICAgIC8vIGhhbmRsZSBhcGlzXG4gICAgICAgIGxldCBzdGFydCA9IDA7XG4gICAgICAgIGxldCBlbmQgPSA2O1xuICAgICAgICBsZXQgZmluYWxEYXRhOnByb2R1Y3RPYmplY3Q7XG4gICAgICAgIGdldERhdGEoKGRhdGEpPT57XG4gICAgICAgIGdldExpa2VzKGRhdGEsKGl0ZW1zKT0+e1xuICAgICAgICAgICAgZmluYWxEYXRhID0gaXRlbXNcblxuICAgICAgICAgICAgY29uc3QgZGF0YUluTG9jYWxTdG9yYWdlID0gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiYWxsUHJvZHVjdHNcIikpfHwgZmFsc2U7XG4gICAgICAgICAgICBpZighZGF0YUluTG9jYWxTdG9yYWdlKXtcbiAgICAgICAgICAgICAgICBmb3IoY29uc3QgaXRlbSBpbiBmaW5hbERhdGEpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxEYXRhW2l0ZW1dW1wibXlQcm9kdWN0XCJdID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgZm9yKGNvbnN0IGl0ZW0gaW4gZmluYWxEYXRhKXtcbiAgICAgICAgICAgICAgICBpZighZGF0YUluTG9jYWxTdG9yYWdlW2ZpbmFsRGF0YVtpdGVtXS5pZF0pe1xuICAgICAgICAgICAgICAgICAgICBmaW5hbERhdGFbaXRlbV1bXCJteVByb2R1Y3RcIl0gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoZGF0YUluTG9jYWxTdG9yYWdlW2ZpbmFsRGF0YVtpdGVtXS5pZF0ubXlQcm9kdWN0KXtcbiAgICAgICAgICAgICAgICAgICAgZmluYWxEYXRhW2l0ZW1dW1wibXlQcm9kdWN0XCJdID0gdHJ1ZTsgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwiYWxsUHJvZHVjdHNcIixKU09OLnN0cmluZ2lmeShmaW5hbERhdGEpKTtcbiAgICAgICAgICAgIGRvbUZ1bmN0aW9zLmFkZFRvRG9tKHNsaWNlT2JqKGZpbmFsRGF0YSxzdGFydCxlbmQpLHBhZ2VzLmFsbCk7XG4gICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgICAgICAgLy8vIGhhbmRsZSBzZWFyY2ggYmFyIFxuICAgICAgICAgY29uc3Qgc2VhcmNoQmFyOkhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaEJhclwiKWFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgICBjb25zdCBzZWFyY2hIYW5kbGVyID0gKGV2ZW50OkV2ZW50KT0+e1xuICAgICAgICAgICAgY29uc3QgaW5wdXQ9IGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0OnByb2R1Y3RPYmplY3QgPSB7fTtcbiAgICAgICAgICAgIGZvcihjb25zdCBpdGVtIGluIGZpbmFsRGF0YSl7XG4gICAgICAgICAgICAgICAgaWYoZmluYWxEYXRhW2l0ZW1dLnRpdGxlLmluY2x1ZGVzKGlucHV0LnZhbHVlKSl7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFtpdGVtXSA9IGZpbmFsRGF0YVtpdGVtXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkb21GdW5jdGlvcy5hZGRUb0RvbShzbGljZU9iaihyZXN1bHQsc3RhcnQsZW5kKSxwYWdlcy5hbGwpO1xuICAgICAgICAgICAgc2VhcmNoQmFyLnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgfTtcbiAgICAgICAgICAgXG4gICAgICAgICBzZWFyY2hCYXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLHNlYXJjaEhhbmRsZXIpO1xuICAgICAgICAgc2VhcmNoQmFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsc2VhcmNoSGFuZGxlcik7XG4gICAgICAgICBuZXh0UGFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgICAgIHN0YXJ0ID0gZW5kO1xuICAgICAgICAgICAgZW5kKz02O1xuICAgICAgICAgICAgYmFja1BhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZUJhY2tCdXR0b24nKVxuICAgICAgICAgICAgaWYoc3RhcnQgPCBPYmplY3Qua2V5cyhmaW5hbERhdGEpLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgcHJvZHVjdExpc3QuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICAgICAgZG9tRnVuY3Rpb3MuYWRkVG9Eb20oc2xpY2VPYmooZmluYWxEYXRhLHN0YXJ0LGVuZCkscGFnZXMuYWxsKTtcbiAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICBzdGFydC09NjtcbiAgICAgICAgICAgICAgICBlbmQtPTY7XG4gICAgICAgICAgICAgICAgbmV4dFBhZ2UuY2xhc3NMaXN0LmFkZCgnaGlkZU5leHRCdXR0b24nKVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZigoc3RhcnQrNCkgPj0gT2JqZWN0LmtleXMoZmluYWxEYXRhKS5sZW5ndGgpe1xuICAgICAgICAgICAgICAgIG5leHRQYWdlLmNsYXNzTGlzdC5hZGQoJ2hpZGVOZXh0QnV0dG9uJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgIFxuICAgICAgICB9KTtcbiAgICAgICAgYmFja1BhZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgICAgICBzdGFydCAtPTQ7XG4gICAgICAgICAgICBlbmQtPTQ7XG4gICAgICAgICAgICBuZXh0UGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlTmV4dEJ1dHRvbicpXG4gICAgICAgICAgICBpZihzdGFydCA+PSAwKXtcbiAgICAgICAgICAgICAgICBwcm9kdWN0TGlzdC5pbm5lckhUTUwgPSAnJ1xuICAgICAgICAgICAgICAgIGRvbUZ1bmN0aW9zLmFkZFRvRG9tKHNsaWNlT2JqKGZpbmFsRGF0YSxzdGFydCxlbmQpLHBhZ2VzLmFsbCk7XG4gICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RhcnQrPTQ7XG4gICAgICAgICAgICAgICAgZW5kKz00O1xuICAgICAgICAgICAgICAgIGJhY2tQYWdlLmNsYXNzTGlzdC5hZGQoJ2hpZGVCYWNrQnV0dG9uJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZigoc3RhcnQtNCkgPCAwKXsgIFxuICAgICAgICAgICAgICAgIGJhY2tQYWdlLmNsYXNzTGlzdC5hZGQoJ2hpZGVCYWNrQnV0dG9uJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgIFxufTtcblxuIiwiaW1wb3J0IHsgcHJvZHVjdCB9IGZyb20gXCIuL3R5cGVzL2RhdGFcIlxuXG5leHBvcnQgY29uc3QgZ2V0RGF0YSA9IChjYWxsOihkYXRhOnByb2R1Y3RbXSk9PnZvaWQpPT57XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0TG9hZGluZ1wiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKVxuICAgIGZldGNoKFwiaHR0cHM6Ly9mYWtlc3RvcmVhcGkuY29tL3Byb2R1Y3RzXCIpLnRoZW4oKHJlcyk9PlxuICAgICAgICByZXMuanNvbigpXG4gICAgKS50aGVuKChqc29uKT0+e1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3RMb2FkaW5nXCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgICAgIGNhbGwoanNvbilcbiAgICB9KVxufSIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGFsbFByb2R1Y3RzIH0gZnJvbSAnLi9hbGxQcm9kdWN0c0NvbnRyb2xsJztcbmltcG9ydCB7IG5hdk1lbnUgfSBmcm9tICcuL21lbnVDb250cm9sJztcbmltcG9ydCB7IG15UHJvZHVjdHNDb250cm9sbCB9IGZyb20gJy4vbXlQcm9kdWN0c0NvbnRyb2xsJztcbmltcG9ydCB7IHBvcHVsYXJQcm9kdWN0IH0gZnJvbSAnLi9wb3B1bGFyUHJvZHVjdCc7XG5pbXBvcnQgeyBwcm9kdWN0T2JqZWN0IH0gZnJvbSAnLi90eXBlcy9kYXRhJztcblxuICBmdW5jdGlvbiBjb21wb25lbnQoKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIC8vIGRlZmluZSBzZWN0aW9ucyBpbiB2YXJpYWJsZXMgXG4gICAgY29uc3QgYWxsUHJvZHVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5BbGwnKTtcbiAgICBjb25zdCBpbnB1dFNlYXJjaCA9ICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoSW5wdXRDb250YWluZXInKTtcbiAgICBjb25zdCBuYXZTZWN0aW9uOkhUTUxUYWJsZVNlY3Rpb25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdlNlY3Rpb24nKVxuICAgIGNvbnN0IG15UHJvZHVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuTXlwcm9kdWN0cycpO1xuICAgIGNvbnN0IGxvZ29MaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ29MaW5rJyk7XG4gICAgY29uc3QgcG91bGFyUHJvZHVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuUG9wdWxhcicpO1xuICAgIC8vc2VsZWN0IG1pbmkgbmF2IGJ1dHRvbnMgXG4gICAgY29uc3QgYWxsUHJvZHVjdEJ1dHRvbjpIVE1MQW5jaG9yRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwnKTtcbiAgICBjb25zdCBteVByb2R1Y3RzQnV0dG9uOkhUTUxBbmNob3JFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm15cHJvZHVjdHMnKTtcbiAgICBjb25zdCBwb3B1bGFyUHJvZHVjdHNCdXR0b246SFRNTEFuY2hvckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdWxhcicpO1xuICAgXG4gICAgbmF2TWVudSgpO1xuICAgIC8vIGhhbmRsZSBwYXRoc1xuICAgIGlmKHdpbmRvdy5sb2NhdGlvbi5oYXNoID09PSBcIlwiIHx8IHdpbmRvdy5sb2NhdGlvbi5oYXNoID09PSBcIiNBbGxcIil7XG4gICAgICBhbGxQcm9kdWN0cygpO1xuICAgICAgbXlQcm9kdWN0cy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICBhbGxQcm9kdWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxuICAgICAgcG91bGFyUHJvZHVjdHMuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgbXlQcm9kdWN0c0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIGlucHV0U2VhcmNoLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgIG5hdlNlY3Rpb24uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgICBhbGxQcm9kdWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgcG9wdWxhclByb2R1Y3RzQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH1lbHNlIGlmKHdpbmRvdy5sb2NhdGlvbi5oYXNoID09PSBcIiNNeXByb2R1Y3RzXCIpIHtcbiAgICAgIGlucHV0U2VhcmNoLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgIG15UHJvZHVjdHNDb250cm9sbCgpO1xuICAgICAgbXlQcm9kdWN0cy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICBhbGxQcm9kdWN0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgIHBvdWxhclByb2R1Y3RzLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgIG15UHJvZHVjdHNCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICBuYXZTZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcbiAgICAgIGFsbFByb2R1Y3RCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICBwb3B1bGFyUHJvZHVjdHNCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfWVsc2UgaWYod2luZG93LmxvY2F0aW9uLmhhc2ggPT09IFwiI1BvcHVsYXJcIil7XG4gICAgICBpbnB1dFNlYXJjaC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICBwb3B1bGFyUHJvZHVjdCgpO1xuICAgICAgbXlQcm9kdWN0cy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICBuYXZTZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcbiAgICAgIGFsbFByb2R1Y3QuY2xhc3NMaXN0LmFkZCgnaGlkZScpXG4gICAgICBwb3VsYXJQcm9kdWN0cy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICBteVByb2R1Y3RzQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgYWxsUHJvZHVjdEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIHBvcHVsYXJQcm9kdWN0c0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9XG4gICAgY29uc3QgYWxsUHJvZHVjdEZ1bmN0aW9uID0gKCk9PntcbiAgICAgIGFsbFByb2R1Y3RzKCk7XG4gICAgICBpbnB1dFNlYXJjaC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICBteVByb2R1Y3RzLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgIG5hdlNlY3Rpb24uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgICBhbGxQcm9kdWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxuICAgICAgcG91bGFyUHJvZHVjdHMuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgbXlQcm9kdWN0c0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIGFsbFByb2R1Y3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICBwb3B1bGFyUHJvZHVjdHNCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfVxuICAgIC8vIG5hdmlnYXRpb25zIGV2ZW50cyBcbiAgICBhbGxQcm9kdWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxhbGxQcm9kdWN0RnVuY3Rpb24pXG4gICAgbXlQcm9kdWN0c0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgIG15UHJvZHVjdHNDb250cm9sbCgpO1xuICAgICAgbXlQcm9kdWN0cy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICBuYXZTZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcbiAgICAgIGFsbFByb2R1Y3QuY2xhc3NMaXN0LmFkZCgnaGlkZScpXG4gICAgICBwb3VsYXJQcm9kdWN0cy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICBteVByb2R1Y3RzQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgYWxsUHJvZHVjdEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIGlucHV0U2VhcmNoLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgIHBvcHVsYXJQcm9kdWN0c0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcblxuICAgIH0pXG4gICAgbG9nb0xpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGFsbFByb2R1Y3RGdW5jdGlvbilcbiAgICBwb3B1bGFyUHJvZHVjdHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICBwb3B1bGFyUHJvZHVjdCgpO1xuICAgICAgbXlQcm9kdWN0cy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICBuYXZTZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcbiAgICAgIGFsbFByb2R1Y3QuY2xhc3NMaXN0LmFkZCgnaGlkZScpXG4gICAgICBwb3VsYXJQcm9kdWN0cy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICBpbnB1dFNlYXJjaC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICBteVByb2R1Y3RzQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgYWxsUHJvZHVjdEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIHBvcHVsYXJQcm9kdWN0c0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9KVxuICAgIHJldHVybiBlbGVtZW50O1xuICAgIFxuICB9XG5cbiAgZXhwb3J0IGNvbnN0IHNsaWNlT2JqID0gKG9iajpwcm9kdWN0T2JqZWN0LHN0YXJ0Om51bWJlcixlbmQ6bnVtYmVyKTpwcm9kdWN0T2JqZWN0PT57XG4gICAgY29uc3QgcmVzdWx0OnByb2R1Y3RPYmplY3QgPSB7fTtcbiAgICBsZXQgZmlyc3RDb3VudGVyOm51bWJlciA9IHN0YXJ0O1xuICAgIGNvbnN0IG9iaktleXMgPSAgT2JqZWN0LmtleXMob2JqKTtcbiAgICBmb3IobGV0IGl0ZW0gPXN0YXJ0O2l0ZW0gPCBlbmQ7aXRlbSsrKXtcbiAgICAgIGlmKGZpcnN0Q291bnRlciA+PSBlbmQpe1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cbiAgICAgIGlmKG9iaktleXNbaXRlbV0pe1xuICAgICAgcmVzdWx0W29iaktleXNbaXRlbV1dID0gb2JqW29iaktleXNbaXRlbV1dO31cbiAgICAgIGZpcnN0Q291bnRlcisrO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb21wb25lbnQoKSk7XG4iLCJjb25zdCBsaWtlc1VybCA9IFwiaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvelNmcWxjcjZacVJDZGRrMTBXSFYvbGlrZXNcIjtcbmV4cG9ydCBjb25zdCBnZW5lcmF0ZUxpa2VzID0gKGRhdGE6e1xuICAgIGl0ZW1faWQ6bnVtYmVyXG59KT0+e1xuICAgIGZldGNoKGxpa2VzVXJsLHtcbiAgICAgICAgbWV0aG9kOlwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgICAgYm9keTpKU09OLnN0cmluZ2lmeShkYXRhKVxuICAgIH0pLnRoZW4oKHJlcyk9PntcbiAgICAgICAgaWYoIXJlcy5vayl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgIH1cbiAgICB9KTtcbn07IiwiaW1wb3J0IHsgcHJvZHVjdCB9IGZyb20gXCIuL3R5cGVzL2RhdGFcIjtcblxuY29uc3QgbGlrZXNVcmwgPSBcImh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL3pTZnFsY3I2WnFSQ2RkazEwV0hWL2xpa2VzL1wiO1xuY29uc3QgZ2V0TGlrZXNEYXRhID0gIGFzeW5jICgpID0+e1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGxpa2VzVXJsKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuICAgIHJldHVybiBkYXRhXG59XG5leHBvcnQgY29uc3QgZ2V0TGlrZXMgPSAgKHByb2R1Y3REYXRhOnByb2R1Y3RbXSxjYWxsZm46KHJlc3VsdDp7XG4gICAgW2luZGV4OnN0cmluZ106cHJvZHVjdFxufSk9PnZvaWQpPT57XG4gICAgY29uc3QgZmluYWxEYXRhPSBnZXRMaWtlc0RhdGEoKTtcbiAgICBcbiAgICBmaW5hbERhdGEudGhlbigoaXRlbXM6e2l0ZW1faWQ6bnVtYmVyLGxpa2VzOm51bWJlcn1bXSApPT57XG5cbiAgICAgICAgY29uc3QgcmVzdWx0OntcbiAgICAgICAgICAgIFtpbmRleDpzdHJpbmddOnByb2R1Y3RcbiAgICAgICAgfSA9IHt9XG4gICAgICAgIGZvcihsZXQgaSA9IDA7aTxwcm9kdWN0RGF0YS5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgIHJlc3VsdFtgJHtwcm9kdWN0RGF0YVtpXS5pZH1gXSA9IHsuLi5wcm9kdWN0RGF0YVtpXSxsaWtlczowfTtcbiAgICAgICAgfVxuICAgICAgICBmb3IobGV0IGkgPTA7aTxpdGVtcy5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgICAgICByZXN1bHRbaXRlbXNbaV0uaXRlbV9pZF0ubGlrZXMgPSBpdGVtc1tpXS5saWtlcztcbiAgICAgICAgfVxuICAgICAgICBjYWxsZm4ocmVzdWx0KTtcbiAgICB9KVxufSIsImNvbnN0IGhpZGVTaG93TmF2RWxlbWVudHMgPSAobm9kZUxzdDpOb2RlTGlzdE9mPEhUTUxBbmNob3JFbGVtZW50PixzaG93OmJvb2xlYW4pPT57XG4gICAgZm9yKGxldCBpbmRleCA9IDA7aW5kZXg8bm9kZUxzdC5sZW5ndGggO2luZGV4Kyspe1xuICAgICAgICBpZihzaG93KXtcbiAgICAgICAgICAgIG5vZGVMc3RbaW5kZXhdLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIG5vZGVMc3RbaW5kZXhdLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgIH1cbn1cbmNvbnN0IGNvbnRyb2xVc2VySW5mb1BhZ2UgPSAoKT0+e1xuIC8vIGNvbnRyb2wgdXNlciBwcm9maWxlIG1lbnUgXG4gY29uc3Qgbm9ybWFsTmF2TWVudTpOb2RlTGlzdE9mPEhUTUxBbmNob3JFbGVtZW50PiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubm9ybWFsTmF2XCIpO1xuIGNvbnN0IHVzZXJJbmZvTGlzdDpIVE1MVUxpc3RFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51c2VySW5mb0xpc3RcIik7XG4gY29uc3QgcHJvZmlsZU1lbnVTZWNvbmRCdXR0b246SFRNTEJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlY29uZFVzZXJJbmZvQ29udHJvbFwiKTtcblxuIHVzZXJJbmZvTGlzdC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuIGhpZGVTaG93TmF2RWxlbWVudHMobm9ybWFsTmF2TWVudSxmYWxzZSk7XG5cbiBwcm9maWxlTWVudVNlY29uZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xuICAgICAgICAgaGlkZVNob3dOYXZFbGVtZW50cyhub3JtYWxOYXZNZW51LHRydWUpO1xuICAgICAgICAgdXNlckluZm9MaXN0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuIH0pO1xuIFxufVxuXG5leHBvcnQgY29uc3QgbmF2TWVudSA9ICgpPT57XG4gICAgLy8gY29udHJvbCBhbGwgbW9iaWxlIG1lbnVcbiAgICBsZXQgZmxhZyA9IHRydWU7XG4gICAgY29uc3QgbWVudUJ1dHRvbjpIVE1MQnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hvd05hdkJ1dHRvblwiKTtcbiAgICBjb25zdCBtZW51Ok5vZGVMaXN0T2Y8SFRNTEFuY2hvckVsZW1lbnQ+ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZMaW5rXCIpO1xuICAgIGNvbnN0IHVzZXJJbmZvTGlzdDpIVE1MVUxpc3RFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51c2VySW5mb0xpc3RcIik7XG4gICAgdXNlckluZm9MaXN0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCgpPT57XG4gICAgICAgIGlmKHNjcmVlbi53aWR0aCA+IDc2OCl7XG4gICAgICAgICAgICBoaWRlU2hvd05hdkVsZW1lbnRzKG1lbnUsdHJ1ZSk7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIGhpZGVTaG93TmF2RWxlbWVudHMobWVudSwhZmxhZyk7XG4gICAgICAgIH1cbiAgICB9KVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCgpPT57XG4gICAgICAgIGlmKHNjcmVlbi53aWR0aCA+IDc2OCl7XG4gICAgICAgICAgICBoaWRlU2hvd05hdkVsZW1lbnRzKG1lbnUsdHJ1ZSk7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIGhpZGVTaG93TmF2RWxlbWVudHMobWVudSwhZmxhZyk7XG4gICAgICAgIH1cbiAgICB9KVxuICAgIGhpZGVTaG93TmF2RWxlbWVudHMobWVudSwhZmxhZylcbiAgICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57XG4gICAgICAgIGlmKGZsYWcpe1xuICAgICAgICAgICAgbWVudUJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCguLi9zcmMvaW1hZ2VzL3VwbG9hZC5wbmcpXCI7XG4gICAgICBcbiAgICAgICAgICAgIGhpZGVTaG93TmF2RWxlbWVudHMobWVudSxmbGFnKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgaGlkZVNob3dOYXZFbGVtZW50cyhtZW51LGZsYWcpO1xuICAgICAgICAgICAgdXNlckluZm9MaXN0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIG1lbnVCdXR0b24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoLi4vc3JjL2ltYWdlcy9hcnJvdy1kb3duLXNpZ24tdG8tbmF2aWdhdGUucG5nKVwiXG4gICAgICAgIH1cbiAgICAgICAgZmxhZyA9ICFmbGFnXG4gICAgfSk7XG4gICAgY29uc3QgcHJvZmlsZUZ1bmN0aW9uID0gKCk9PntcbiAgICAgICAgY29udHJvbFVzZXJJbmZvUGFnZSgpO1xuICAgIH07XG4gICAgLy8gY29udHJvbCB1c2VyIGluZm8gbWVudSBcbiAgICBpZih3aW5kb3cuc2NyZWVuLndpZHRoIDwgNzY4KXtcbiAgICBjb25zdCBwcm9maWxlTWVudUJ1dHRvbjpIVE1MQnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXNlcmluZm9Db250cm9sXCIpO1xuICAgIHByb2ZpbGVNZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHByb2ZpbGVGdW5jdGlvbik7XG4gICAgfWVsc2V7XG4gICAgICAgIGNvbnN0IHByb2ZpbGVNZW51QnV0dG9uOkhUTUxCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51c2VyaW5mb0NvbnRyb2xcIik7XG4gICAgICAgICBwcm9maWxlTWVudUJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIixwcm9maWxlRnVuY3Rpb24pO1xuICAgIH1cbn1cbiAgIFxuXG5cbiIsImltcG9ydCBkb21GdW5jdGlvcyBmcm9tICcuL2FkZERhdGFUb0RvbSc7XG5pbXBvcnQgeyBzbGljZU9iaiB9IGZyb20gJy4nO1xuaW1wb3J0IHsgcHJvZHVjdE9iamVjdCB9IGZyb20gJy4vdHlwZXMvZGF0YSc7XG5pbXBvcnQgeyBwYWdlcyB9IGZyb20gJy4vdHlwZXMvcGFnZVR5cGUnO1xuXG5leHBvcnQgY29uc3QgbXlQcm9kdWN0c0NvbnRyb2xsID0gKCk9PntcbiAgY29uc3QgcGFnaW5hdGlvbkNvbnRyb2xsZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnaW5hdGlvbkNvbnRyb2xsZXInKTtcbiAgICAgICAgcGFnaW5hdGlvbkNvbnRyb2xsZXIuaW5uZXJIVE1MID0gYDxidXR0b24gY2xhc3M9XCJnb0JhY2sgaGlkZVwiPkdvIEJhY2sgPGhyPjwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwibmV4dEJ1dHRvblwiPk5leHQgcGFnZSA8aHI+PC9idXR0b24+YDtcbiAgICBjb25zdCBhbGxQcm9kdWN0cyA9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImFsbFByb2R1Y3RzXCIpKSB8fCB7fTtcbiAgICBjb25zdCBuZXh0UGFnZTpIVE1MQnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXh0QnV0dG9uJyk7XG4gICAgY29uc3QgYmFja1BhZ2U6SFRNTEJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ29CYWNrJyk7XG4gICAgY29uc3QgcHJvZHVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsUHJvZHVjdExpc3QnKTtcbiAgICBjb25zdCBpc0VtcHR5ID0gT2JqZWN0LmtleXMoYWxsUHJvZHVjdHMpLmxlbmd0aCA+IDAgP3RydWU6ZmFsc2UgO1xuICAgIC8vIGhhbmRsZSBhcGlzXG4gICAgbGV0IHN0YXJ0Om51bWJlciA9IGlzRW1wdHkgJiYgMDtcbiAgICBsZXQgZW5kID0gNjtcbiAgICBjb25zdCBmaW5hbERhdGE6cHJvZHVjdE9iamVjdCA9IGZpbHRlck9iaihhbGxQcm9kdWN0cyk7XG4gICAgY29uc3QgcmVzdWx0T2JqID0gc2xpY2VPYmooZmluYWxEYXRhLHN0YXJ0LGVuZCk7XG4gICAgaWYoaXNFbXB0eSl7XG4gICAgZG9tRnVuY3Rpb3MuYWRkVG9Eb20ocmVzdWx0T2JqLHBhZ2VzLm15UHJvZHVjdCk7XG4gICAgbmV4dFBhZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICBzdGFydCArPTY7XG4gICAgICBlbmQrPTY7XG4gICAgICBiYWNrUGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlQmFja0J1dHRvbicpXG4gICAgICBpZihzdGFydCA8IE9iamVjdC5rZXlzKGZpbmFsRGF0YSkubGVuZ3RoKXtcbiAgICAgICAgICBwcm9kdWN0TGlzdC5pbm5lckhUTUwgPSAnJ1xuICAgICAgICAgIGRvbUZ1bmN0aW9zLmFkZFRvRG9tKHNsaWNlT2JqKGZpbmFsRGF0YSxzdGFydCxlbmQpLHBhZ2VzLm15UHJvZHVjdCk7XG4gICAgICB9ZWxzZSB7XG4gICAgICAgICAgc3RhcnQtPTY7XG4gICAgICAgICAgZW5kLT02O1xuICAgICAgICAgIG5leHRQYWdlLmNsYXNzTGlzdC5hZGQoJ2hpZGVOZXh0QnV0dG9uJyk7XG4gICAgICB9XG4gICAgICBpZigoc3RhcnQrNikgPiBPYmplY3Qua2V5cyhmaW5hbERhdGEpLmxlbmd0aCl7XG4gICAgICAgICAgbmV4dFBhZ2UuY2xhc3NMaXN0LmFkZCgnaGlkZU5leHRCdXR0b24nKTtcbiAgICAgIH1cblxuICAgICB9KTtcbiAgICAgaWYoKHN0YXJ0KzYpID4gT2JqZWN0LmtleXMoZmluYWxEYXRhKS5sZW5ndGgpe1xuICAgICAgICBuZXh0UGFnZS5jbGFzc0xpc3QuYWRkKCdoaWRlTmV4dEJ1dHRvbicpO1xuICAgICB9XG4gICAgIGJhY2tQYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICBzdGFydCAtPTY7XG4gICAgICAgIGVuZC09NjtcbiAgICAgICAgbmV4dFBhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZU5leHRCdXR0b24nKVxuICAgICAgICBpZihzdGFydCA+PSAwKXtcbiAgICAgICAgICAgIHByb2R1Y3RMaXN0LmlubmVySFRNTCA9ICcnXG4gICAgICAgICAgICBkb21GdW5jdGlvcy5hZGRUb0RvbShzbGljZU9iaihmaW5hbERhdGEsc3RhcnQsZW5kKSxwYWdlcy5teVByb2R1Y3QpO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICBzdGFydCs9NjtcbiAgICAgICAgICAgIGVuZCs9NjtcbiAgICAgICAgICAgIGJhY2tQYWdlLmNsYXNzTGlzdC5hZGQoJ2hpZGVCYWNrQnV0dG9uJyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmKChzdGFydC02KSA8IDApeyAgXG4gICAgICAgICAgICBiYWNrUGFnZS5jbGFzc0xpc3QuYWRkKCdoaWRlQmFja0J1dHRvbicpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgaWYoKHN0YXJ0LTYpIDwgMCl7ICBcbiAgICAgICAgYmFja1BhZ2UuY2xhc3NMaXN0LmFkZCgnaGlkZUJhY2tCdXR0b24nKTtcbiAgICB9XG4gICAgfVxuICAgIFxufTtcblxuXG5jb25zdCBmaWx0ZXJPYmogPSAoZGF0YTpwcm9kdWN0T2JqZWN0KTpwcm9kdWN0T2JqZWN0PT57XG4gICAgY29uc3QgcHJvZHVjdHMgPSBPYmplY3Qua2V5cyhkYXRhKTtcbiAgICBjb25zdCBlbmQgPSBwcm9kdWN0cy5sZW5ndGg7XG4gICAgY29uc3QgcmVzdWx0OnByb2R1Y3RPYmplY3QgPSB7fTtcbiAgICBmb3IobGV0IGl0ZW0gPTA7aXRlbSA8IGVuZDtpdGVtKyspe1xuICAgICAgaWYoZGF0YVtwcm9kdWN0c1tpdGVtXV0ubXlQcm9kdWN0KXtcbiAgICAgICAgcmVzdWx0W3Byb2R1Y3RzW2l0ZW1dXSA9IGRhdGFbcHJvZHVjdHNbaXRlbV1dO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTsiLCJpbXBvcnQgeyBnZXREYXRhIH0gZnJvbSAnLi9kYXRhJztcbmltcG9ydCB7IGdldExpa2VzIH0gZnJvbSAnLi9saWtlc0dldHRlcic7XG5pbXBvcnQgZG9tRnVuY3Rpb3MgZnJvbSAnLi9hZGREYXRhVG9Eb20nO1xuaW1wb3J0IHsgc2xpY2VPYmogfSBmcm9tICcuJztcbmltcG9ydCB7IHByb2R1Y3RPYmplY3QgfSBmcm9tICcuL3R5cGVzL2RhdGEnO1xuaW1wb3J0IHsgcGFnZXMgfSBmcm9tICcuL3R5cGVzL3BhZ2VUeXBlJztcblxuZXhwb3J0IGNvbnN0IHBvcHVsYXJQcm9kdWN0ID0gKCk9PntcbiAgICBjb25zdCBwYWdpbmF0aW9uQ29udHJvbGxlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdpbmF0aW9uQ29udHJvbGxlcicpO1xuICAgICAgICBwYWdpbmF0aW9uQ29udHJvbGxlci5pbm5lckhUTUwgPSBgPGJ1dHRvbiBjbGFzcz1cImdvQmFjayBoaWRlXCI+R28gQmFjayA8aHI+PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJuZXh0QnV0dG9uXCI+TmV4dCBwYWdlIDxocj48L2J1dHRvbj5gO1xuICAgIGNvbnN0IG5leHRQYWdlOkhUTUxCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5leHRCdXR0b24nKTtcbiAgICBjb25zdCBiYWNrUGFnZTpIVE1MQnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nb0JhY2snKTtcbiAgICBjb25zdCBwcm9kdWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGxQcm9kdWN0TGlzdCcpO1xuICAgIG5leHRQYWdlLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICBiYWNrUGFnZS5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgLy8gaGFuZGxlIGFwaXNcbiAgICBsZXQgc3RhcnQgPSAwO1xuICAgIGxldCBlbmQgPSA2O1xuICAgIGNvbnN0IGZpbmFsRGF0YTpwcm9kdWN0T2JqZWN0ID0ge307XG5cbiAgICBnZXREYXRhKChkYXRhKT0+e1xuICAgIGdldExpa2VzKGRhdGEsKGl0ZW1zKT0+e1xuICAgIGZvcihjb25zdCBpdGVtIGluIGl0ZW1zKXtcbiAgICAgICAgaWYoaXRlbXNbaXRlbV0ucmF0aW5nLnJhdGUgPiA0KXtcbiAgICAgICAgICAgIGZpbmFsRGF0YVtpdGVtXSA9IGl0ZW1zW2l0ZW1dO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgICAgICBkb21GdW5jdGlvcy5hZGRUb0RvbShzbGljZU9iaihmaW5hbERhdGEsc3RhcnQsZW5kKSxwYWdlcy5wb3B1bGFyUHJvZHVjdCk7XG4gICAgfSlcbiAgICB9KTtcbiAgICBuZXh0UGFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgc3RhcnQgPSBlbmQ7XG4gICAgICAgIGVuZCs9NjtcbiAgICAgICAgYmFja1BhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZUJhY2tCdXR0b24nKVxuICAgICAgICBpZihzdGFydCA8IE9iamVjdC5rZXlzKGZpbmFsRGF0YSkubGVuZ3RoKXtcbiAgICAgICAgICAgIHByb2R1Y3RMaXN0LmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgZG9tRnVuY3Rpb3MuYWRkVG9Eb20oc2xpY2VPYmooZmluYWxEYXRhLHN0YXJ0LGVuZCkscGFnZXMucG9wdWxhclByb2R1Y3QpO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICBzdGFydC09NjtcbiAgICAgICAgICAgIGVuZC09NjtcbiAgICAgICAgICAgIG5leHRQYWdlLmNsYXNzTGlzdC5hZGQoJ2hpZGVOZXh0QnV0dG9uJyk7XG5cbiAgICAgICAgfVxuICAgICAgICBpZigoc3RhcnQrNikgPiBPYmplY3Qua2V5cyhmaW5hbERhdGEpLmxlbmd0aCl7XG4gICAgICAgICAgICBuZXh0UGFnZS5jbGFzc0xpc3QuYWRkKCdoaWRlTmV4dEJ1dHRvbicpO1xuICAgICAgICB9XG4gICAgICAgXG4gICAgfSk7XG4gICAgYmFja1BhZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgIHN0YXJ0IC09NjtcbiAgICAgICAgZW5kLT02O1xuICAgICAgICBuZXh0UGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlTmV4dEJ1dHRvbicpO1xuICAgICAgICBpZihzdGFydCA+PSAwKXtcbiAgICAgICAgICAgIHByb2R1Y3RMaXN0LmlubmVySFRNTCA9ICcnXG4gICAgICAgICAgICBkb21GdW5jdGlvcy5hZGRUb0RvbShzbGljZU9iaihmaW5hbERhdGEsc3RhcnQsZW5kKSxwYWdlcy5wb3B1bGFyUHJvZHVjdCk7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHN0YXJ0Kz02O1xuICAgICAgICAgICAgZW5kKz02O1xuICAgICAgICAgICAgYmFja1BhZ2UuY2xhc3NMaXN0LmFkZCgnaGlkZUJhY2tCdXR0b24nKTtcbiAgICAgICAgfVxuICAgICAgICBpZigoc3RhcnQtNikgPCAwKXsgIFxuICAgICAgICAgICAgYmFja1BhZ2UuY2xhc3NMaXN0LmFkZCgnaGlkZUJhY2tCdXR0b24nKTtcbiAgICAgICAgfVxuXG4gICAgfSk7XG4gXG59O1xuXG4iLCJleHBvcnQgZW51bSBwYWdlcyB7XG4gICAgYWxsLFxuICAgIG15UHJvZHVjdCxcbiAgICBwb3B1bGFyUHJvZHVjdFxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=