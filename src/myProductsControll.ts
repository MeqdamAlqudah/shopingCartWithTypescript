import domFunctios from './addDataToDom';
import { sliceObj } from '.';
import { productObject } from './types/data';
import { pages } from './types/pageType';

export const myProductsControll = ()=>{
    const allProducts = JSON.parse(localStorage.getItem("allProducts")) || {};
    const nextPage = document.querySelector('.nextButton');
    const backPage = document.querySelector('.goBack');
    const productList = document.querySelector('.allProductList');
    const isEmpty = Object.keys(allProducts).length > 0 ?true:false ;
    // handle apis
    let start:number = isEmpty && 0;
    let end = Object.keys(allProducts).length;
    let finalData:productObject = filterObj(allProducts);
    const resultObj = sliceObj(finalData,start,end);
    if(isEmpty){
    domFunctios.addToDom(resultObj,pages.myProduct);

    nextPage.addEventListener('click',()=>{
        start = end;
        end+=4;
        backPage.classList.remove('hideBackButton')
        if(start < Object.keys(finalData).length){
            productList.innerHTML = ''
            domFunctios.addToDom(sliceObj(finalData,start,end),pages.myProduct);
        }else {
            start-=4;
            end-=4;
            nextPage.classList.add('hideNextButton');

        }
       
    });
    backPage.addEventListener('click',()=>{
        start -=4;
        end-=4;
        nextPage.classList.remove('hideNextButton')
        if(start >= 0){
            productList.innerHTML = ''
            domFunctios.addToDom(sliceObj(finalData,start,end),pages.myProduct);
        }else {
            start+=4;
            end+=4;
            backPage.classList.add('hideBackButton');
        }

    });
    }
        
};


const filterObj = (data:productObject):productObject=>{
    const products = Object.keys(data);
    const end = products.length;
    const result:productObject = {};
    for(let item =0;item < end;item++){
      if(data[products[item]].myProduct){
        result[products[item]] = data[products[item]];
      }
    }
    return result;
};