import * as _ from 'lodash';
import { getData } from './data';
import { getLikes } from './likesGetter';
import domFunctios from './addDataToDom';
import { navMenu } from './menuControl';
import { productObject } from './types/data';

  function component() {
    const element = document.createElement('div');
    const nextPage = document.querySelector('.nextButton');
    const backPage = document.querySelector('.goBack');
    const productList = document.querySelector('.allProductList');
    let start = 0;
    let end = 4;
    getData((data)=>{
      getLikes(data,(items)=>{
        domFunctios.addToDom(sliceObj(items,start,end));
      })
    });
    nextPage.addEventListener('click',()=>{
      start = end;
      end+=4;
      getData((data)=>{
        getLikes(data,(items)=>{
          backPage.classList.remove('hide')
          if(start < Object.keys(items).length){
              productList.innerHTML = ''
              domFunctios.addToDom(sliceObj(items,start,end));
          }else {
            start-=4;
            end-=4;
            nextPage.classList.add('hide');

          }
        })
      });
    });
    backPage.addEventListener('click',()=>{
      start -=4;
      end-=4;
      getData((data)=>{
        getLikes(data,(items)=>{
          if(start >= 0){
              productList.innerHTML = ''
              domFunctios.addToDom(sliceObj(items,start,end));
          }else {
            start+=4;
            end+=4;
            backPage.classList.add('hide');
          }
        })
      });
    });
    
    navMenu();
    return element;
    
  }

  const sliceObj = (obj:productObject,start:number,end:number):productObject=>{
    const result:productObject = {};
    let firstCounter:number = start;
    const objKeys =  Object.keys(obj);
    for(let item =start;item <= end;item++){
      if(firstCounter >= end){
        
        return result;
      }
      result[objKeys[item]] = obj[objKeys[item]];
      firstCounter++;
    }
    return result;
  }

  document.body.appendChild(component());
