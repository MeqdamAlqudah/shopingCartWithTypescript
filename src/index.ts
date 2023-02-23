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
    const myProducts = document.querySelector('.Myproducts');
    const poularProducts = document.querySelector('.Popular');
    const nextPage = document.querySelector('.nextButton');
    const backPage = document.querySelector('.goBack');
    //select mini nav buttons 
    const allProductButton:HTMLAnchorElement = document.querySelector('.all');
    const myProductsButton:HTMLAnchorElement = document.querySelector('.myproducts');
    const popularProductsButton:HTMLAnchorElement = document.querySelector('.popular');
   
    navMenu();
    // handle paths
    if(window.location.hash === "" || window.location.hash === "#All"){
      nextPage.replaceWith(nextPage.cloneNode(true));
      backPage.replaceWith(backPage.cloneNode(true));
      allProducts();
      myProducts.classList.add('hide');
      allProduct.classList.remove('hide')
      poularProducts.classList.add('hide');
      myProductsButton.classList.remove('active');
      allProductButton.classList.add('active');
      popularProductsButton.classList.remove('active');
    }else if(window.location.hash === "#Myproducts") {
      nextPage.replaceWith(nextPage.cloneNode(true));
      backPage.replaceWith(backPage.cloneNode(true));
      myProductsControll();
      myProducts.classList.remove('hide');
      allProduct.classList.add('hide')
      poularProducts.classList.add('hide');
      myProductsButton.classList.add('active');
      allProductButton.classList.remove('active');
      popularProductsButton.classList.remove('active');
    }else if(window.location.hash === "#Popular"){
      nextPage.replaceWith(nextPage.cloneNode(true));
      backPage.replaceWith(backPage.cloneNode(true));
      popularProduct();
      myProducts.classList.add('hide');
      allProduct.classList.add('hide')
      poularProducts.classList.remove('hide');
      myProductsButton.classList.remove('active');
      allProductButton.classList.remove('active');
      popularProductsButton.classList.add('active');
    }
   
    // navigations events 
    allProductButton.addEventListener('click',()=>{
      nextPage.replaceWith(nextPage.cloneNode(true));
      backPage.replaceWith(backPage.cloneNode(true));
      allProducts();
      myProducts.classList.add('hide');
      allProduct.classList.remove('hide')
      poularProducts.classList.add('hide');
      myProductsButton.classList.remove('active');
      allProductButton.classList.add('active');
      popularProductsButton.classList.remove('active');
    })
    myProductsButton.addEventListener('click',()=>{
      nextPage.replaceWith(nextPage.cloneNode(true));
      backPage.replaceWith(backPage.cloneNode(true));
      myProductsControll();
      myProducts.classList.remove('hide');
      allProduct.classList.add('hide')
      poularProducts.classList.add('hide');
      myProductsButton.classList.add('active');
      allProductButton.classList.remove('active');
      popularProductsButton.classList.remove('active');

    })
    popularProductsButton.addEventListener('click',()=>{
      nextPage.replaceWith(nextPage.cloneNode(true));
      backPage.replaceWith(backPage.cloneNode(true));
      popularProduct();
      myProducts.classList.add('hide');
      allProduct.classList.add('hide')
      poularProducts.classList.remove('hide');
      myProductsButton.classList.remove('active');
      allProductButton.classList.remove('active');
      popularProductsButton.classList.add('active');
    })
    return element;
    
  }

  export const sliceObj = (obj:productObject,start:number,end:number):productObject=>{
    const result:productObject = {};
    let firstCounter:number = start;
    const objKeys =  Object.keys(obj);
    for(let item =start;item < end;item++){
      if(firstCounter >= end){
        
        return result;
      }
      if(objKeys[item]){
      result[objKeys[item]] = obj[objKeys[item]];}
      firstCounter++;
    }
    return result;
  }

  document.body.appendChild(component());
