import * as _ from 'lodash';
import { allProducts } from './allProductsControll';
import { navMenu } from './menuControl';
import { myProductsControll } from './myProductsControll';
import { popularProduct } from './popularProduct';
import { productObject } from './types/data';

function component() {
  const element = document.createElement('div');
  // define sections in variables
  const allProduct = document.querySelector('.All');
  const inputSearch = document.getElementById('searchInputContainer');
  const navSection:HTMLTableSectionElement = document.querySelector('.navSection');
  const myProducts = document.querySelector('.Myproducts');
  const logoLink = document.querySelector('.logoLink');
  const poularProducts = document.querySelector('.Popular');
  // select mini nav buttons
  const allProductButton:HTMLAnchorElement = document.querySelector('.all');
  const myProductsButton:HTMLAnchorElement = document.querySelector('.myproducts');
  const popularProductsButton:HTMLAnchorElement = document.querySelector('.popular');

  navMenu();
  // handle paths
  if (window.location.hash === '' || window.location.hash === '#All') {
    allProducts();
    myProducts.classList.add('hide');
    allProduct.classList.remove('hide');
    poularProducts.classList.add('hide');
    myProductsButton.classList.remove('active');
    inputSearch.classList.remove('hide');
    navSection.style.display = 'flex';
    allProductButton.classList.add('active');
    popularProductsButton.classList.remove('active');
  } else if (window.location.hash === '#Myproducts') {
    inputSearch.classList.add('hide');
    myProductsControll();
    myProducts.classList.remove('hide');
    allProduct.classList.add('hide');
    poularProducts.classList.add('hide');
    myProductsButton.classList.add('active');
    navSection.style.display = 'block';
    allProductButton.classList.remove('active');
    popularProductsButton.classList.remove('active');
  } else if (window.location.hash === '#Popular') {
    inputSearch.classList.add('hide');
    popularProduct();
    myProducts.classList.add('hide');
    navSection.style.display = 'block';
    allProduct.classList.add('hide');
    poularProducts.classList.remove('hide');
    myProductsButton.classList.remove('active');
    allProductButton.classList.remove('active');
    popularProductsButton.classList.add('active');
  }
  const allProductFunction = () => {
    allProducts();
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
  myProductsButton.addEventListener('click', () => {
    myProductsControll();
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
  popularProductsButton.addEventListener('click', () => {
    popularProduct();
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

export const sliceObj = (obj:productObject, start:number, end:number):productObject => {
  const result:productObject = {};
  let firstCounter:number = start;
  const objKeys = Object.keys(obj);
  for (let item = start; item < end; item++) {
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
