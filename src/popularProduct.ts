import { getData } from './data';
import { getLikes } from './likesGetter';
import domFunctios from './addDataToDom';
import { sliceObj } from '.';
import { productObject } from './types/data';
import { pages } from './types/pageType';

export const popularProduct = ()=>{
    const paginationController = document.querySelector('.paginationController');
        paginationController.innerHTML = `<button class="goBack hide">Go Back <hr></button>
        <button class="nextButton">Next page <hr></button>`;
    const nextPage:HTMLButtonElement = document.querySelector('.nextButton');
    const backPage:HTMLButtonElement = document.querySelector('.goBack');
    const productList = document.querySelector('.allProductList');
    nextPage.style.display = '';
    backPage.style.display = '';
    // handle apis
    let start = 0;
    let end = 6;
    const finalData:productObject = {};

    getData((data)=>{
    getLikes(data,(items)=>{
    for(const item in items){
        if(items[item].rating.rate > 4){
            finalData[item] = items[item];
        }
    }
    
        domFunctios.addToDom(sliceObj(finalData,start,end),pages.popularProduct);
    })
    });
    nextPage.addEventListener('click',()=>{
        start = end;
        end+=6;
        backPage.classList.remove('hideBackButton')
        if(start < Object.keys(finalData).length){
            productList.innerHTML = '';
            domFunctios.addToDom(sliceObj(finalData,start,end),pages.popularProduct);
        }else {
            start-=6;
            end-=6;
            nextPage.classList.add('hideNextButton');

        }
        if((start+6) > Object.keys(finalData).length){
            nextPage.classList.add('hideNextButton');
        }
       
    });
    backPage.addEventListener('click',()=>{
        start -=6;
        end-=6;
        nextPage.classList.remove('hideNextButton');
        if(start >= 0){
            productList.innerHTML = ''
            domFunctios.addToDom(sliceObj(finalData,start,end),pages.popularProduct);
        }else {
            start+=6;
            end+=6;
            backPage.classList.add('hideBackButton');
        }
        if((start-6) < 0){  
            backPage.classList.add('hideBackButton');
        }

    });
};

