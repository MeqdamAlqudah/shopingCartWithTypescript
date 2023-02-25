import { getData } from './data';
import { getLikes } from './likesGetter';
import domFunctios from './addDataToDom';
import { sliceObj } from '.';
import { productObject } from './types/data';
import { pages } from './types/pageType';

export const allProducts = ()=>{
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
        let end = 4;
        let finalData:productObject;
        getData((data)=>{
        getLikes(data,(items)=>{
            finalData = items;
            const dataInLocalStorage = JSON.parse(sessionStorage.getItem("allProducts"))|| false;
            if(!dataInLocalStorage){
                for(let item in finalData){
                        finalData[item]["myProduct"] = false;
                    
                }
            }else {
            for(let item in finalData){
                if(!dataInLocalStorage[finalData[item].id]){
                    finalData[item]["myProduct"] = false;
                }
                if(dataInLocalStorage[finalData[item].id].myProduct){
                    finalData[item]["myProduct"] = true; 
                }
            }
        }
            sessionStorage.setItem("allProducts",JSON.stringify(finalData));
            domFunctios.addToDom(sliceObj(finalData,start,end),pages.all);
        })
        });
        
        nextPage.addEventListener('click',()=>{
            start = end;
            end+=4;
            backPage.classList.remove('hideBackButton')
            if(start < Object.keys(finalData).length){
                productList.innerHTML = '';
                domFunctios.addToDom(sliceObj(finalData,start,end),pages.all);
            }else {
                start-=4;
                end-=4;
                nextPage.classList.add('hideNextButton')

            }
           
        });
        backPage.addEventListener('click',()=>{
            start -=4;
            end-=4;
            nextPage.classList.remove('hideNextButton')
            if(start >= 0){
                productList.innerHTML = ''
                domFunctios.addToDom(sliceObj(finalData,start,end),pages.all);
            }else {
                start+=4;
                end+=4;
                backPage.classList.add('hideBackButton');
            }

        });
 
};

