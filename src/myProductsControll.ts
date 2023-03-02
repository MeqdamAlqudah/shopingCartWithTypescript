import domFunctios from './addDataToDom';
import { sliceObj } from '.';
import { productObject } from './types/data';
import { pages } from './types/pageType';

export const myProductsControll = () => {
  const paginationController = document.querySelector('.paginationController');
  paginationController.innerHTML = `<button class="goBack hide">Go Back <hr></button>
        <button class="nextButton">Next page <hr></button>`;
  const allProducts = JSON.parse(localStorage.getItem('allProducts')) || {};
  const nextPage:HTMLButtonElement = document.querySelector('.nextButton');
  const backPage:HTMLButtonElement = document.querySelector('.goBack');
  const productList = document.querySelector('.allProductList');
  const isEmpty = Object.keys(allProducts).length > 0;
  // handle apis
  let start:number = isEmpty && 0;
  let end = 6;
  const finalData:productObject = filterObj(allProducts);
  const resultObj = sliceObj(finalData, start, end);
  if (isEmpty) {
    domFunctios.addToDom(resultObj, pages.MyProduct);
    nextPage.addEventListener('click', () => {
      start += 6;
      end += 6;
      backPage.classList.remove('hideBackButton');
      if (start < Object.keys(finalData).length) {
        productList.innerHTML = '';
        domFunctios.addToDom(sliceObj(finalData, start, end), pages.MyProduct);
      } else {
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
    backPage.addEventListener('click', () => {
      start -= 6;
      end -= 6;
      nextPage.classList.remove('hideNextButton');
      if (start >= 0) {
        productList.innerHTML = '';
        domFunctios.addToDom(sliceObj(finalData, start, end), pages.MyProduct);
      } else {
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

const filterObj = (data:productObject):productObject => {
  const products = Object.keys(data);
  const end = products.length;
  const result:productObject = {};
  for (let item = 0; item < end; item++) {
    if (data[products[item]].myProduct) {
      result[products[item]] = data[products[item]];
    }
  }
  return result;
};
