import { getData } from './data';
import { getLikes } from './likesGetter';
import domFunctios from './addDataToDom';
import { sliceObj } from '.';
import { productObject } from './types/data';
import { pages } from './types/pageType';

export const allProducts = ()=>{
        const inputContainer = document.getElementById('searchInputContainer');
        inputContainer.innerHTML = `<input type="search" placeholder="search..." id="searchBar">`;
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
        let finalData:productObject;
        getData((data)=>{
        getLikes(data,(items)=>{
            finalData = items

            const dataInLocalStorage = JSON.parse(sessionStorage.getItem("allProducts"))|| false;
            if(!dataInLocalStorage){
                for(const item in finalData){
                        finalData[item]["myProduct"] = false;
                }
            }else {
            for(const item in finalData){
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
        if((start-4) < 0){  
            backPage.classList.add('hideBackButton');
        }
         /// handle search bar 
         const searchBar:HTMLInputElement = document.getElementById("searchBar")as HTMLInputElement;
         const searchHandler = (event:Event)=>{
            const input= event.target as HTMLInputElement;
            const result:productObject = {};
            for(const item in finalData){
                if(finalData[item].title.includes(input.value)){
                    result[item] = finalData[item];
                }
            }
            domFunctios.addToDom(sliceObj(result,start,end),pages.all);
            searchBar.value = "";
           };
           
         searchBar.removeEventListener('click',searchHandler);
         searchBar.addEventListener('change',searchHandler);
         nextPage.addEventListener('click',()=>{
            start = end;
            end+=6;
            backPage.classList.remove('hideBackButton')
            if(start < Object.keys(finalData).length){
                productList.innerHTML = '';
                domFunctios.addToDom(sliceObj(finalData,start,end),pages.all);
            }else {
                start-=6;
                end-=6;
                nextPage.classList.add('hideNextButton')

            }
            if((start+4) >= Object.keys(finalData).length){
                nextPage.classList.add('hideNextButton');
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
            if((start-4) < 0){  
                backPage.classList.add('hideBackButton');
            }
        });
       
};

