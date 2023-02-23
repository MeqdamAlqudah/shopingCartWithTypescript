import { getData } from './data';
import { getLikes } from './likesGetter';
import domFunctios from './addDataToDom';
import { sliceObj } from '.';
import { productObject } from './types/data';
import { pages } from './types/pageType';

export const popularProduct = ()=>{
    const nextPage = document.querySelector('.nextButton');
    const backPage = document.querySelector('.goBack');
    const productList = document.querySelector('.allProductList');
    // handle apis
    let start = 0;
    let end = 4;
    let finalData:productObject = {};

    getData((data)=>{
    getLikes(data,(items)=>{
    for(let item in items){
        if(items[item].rating.rate > 4){
            finalData[item] = items[item];
        }
    }
    
        domFunctios.addToDom(sliceObj(finalData,start,end),pages.popularProduct);
    })
    });
    nextPage.addEventListener('click',()=>{
        start = end;
        end+=4;
        backPage.classList.remove('hideBackButton')
        if(start < Object.keys(finalData).length){
            productList.innerHTML = '';
            domFunctios.addToDom(sliceObj(finalData,start,end),pages.popularProduct);
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
            domFunctios.addToDom(sliceObj(finalData,start,end),pages.popularProduct);
        }else {
            start+=4;
            end+=4;
            backPage.classList.add('hideBackButton');
        }

    });
 
};

