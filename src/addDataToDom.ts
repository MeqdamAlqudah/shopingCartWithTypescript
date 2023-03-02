import { generateLikes } from './likesGenerator';
import { product } from './types/data';
import { pages } from './types/pageType';

const myDocument: any = document;

const addToDom = (data:{
    [index:string]:product
    }, pageType:number) => {
  let productList:HTMLUListElement;
  if (pageType === pages.All) {
    productList = myDocument.querySelector('.allProductList');
  } else if (pageType === pages.MyProduct) {
    productList = myDocument.querySelector('.myProductList');
  } else if (pageType === pages.PopularProduct) {
    productList = myDocument.querySelector('.popularProductsList');
  }
  productList.innerHTML = '';
  const productDataKeys:string[] = Object.keys(data);
  for (let item = 0; item < productDataKeys.length; item += 1) {
    const li = myDocument.createElement('li');
    const img = myDocument.createElement('img');
    const hx = myDocument.createElement('h3');
    const p:HTMLParagraphElement = myDocument.createElement('p');
    const div = myDocument.createElement('div');
    const secondP:HTMLParagraphElement = myDocument.createElement('p');
    const hr = myDocument.createElement('hr');
    const likesP = myDocument.createElement('p');
    const secondDiv = myDocument.createElement('div');
    const likesButton = myDocument.createElement('button');
    const priceP = myDocument.createElement('p');
    const priceLikeDiv = myDocument.createElement('div');
    const addToMyProductButton = myDocument.createElement('button');
    // manage elements text content
    secondP.textContent = `rate: ${data[productDataKeys[item]].rating.rate}`;
    p.textContent = `${data[productDataKeys[item]].rating.count} reviews`;
    secondP.textContent = `rate: ${data[productDataKeys[item]].rating.rate}`;
    p.textContent = `${data[productDataKeys[item]].rating.count} reviews`;
    img.src = data[productDataKeys[item]].image;
    priceLikeDiv.classList.add('priceLike');
    hx.textContent = `${data[productDataKeys[item]].title}`;
    secondDiv.classList.add('cardDataContainer');
    img.alt = `${data[productDataKeys[item]].title}`;
    if (data[productDataKeys[item]].myProduct) {
      addToMyProductButton.style.backgroundImage = 'url(../src/images/done.png)';
    } else {
      addToMyProductButton.style.backgroundImage = 'url(../src/images/addwhite.png)';
    }
    addToMyProductButton.classList.add('addToMyProducts');
    div.classList.add('ratingDataContainer');
    hx.classList.add('cardTitle');
    priceP.classList.add('priceP');
    likesP.textContent = `${data[productDataKeys[item]].likes}`;
    likesButton.addEventListener('click', () => {
      const span = Number(likesP.lastChild.textContent);
      generateLikes({
        item_id: data[productDataKeys[item]].id,
      });
      likesButton.style.backgroundImage = 'url(../src/images/likeDark.png)';
      setTimeout(() => {
        likesButton.style.backgroundImage = 'url(../src/images/like.png)';
      }, 500);
      likesP.innerHTML = `<span>${span + 1}</span>`;
    });

    likesButton.classList.add('likesButton');
    likesP.classList.add('likesAmount');
    priceP.textContent = `${data[productDataKeys[item]].price}$`;
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
    addToMyProductButton.addEventListener('click', () => {
      const allProducts = JSON.parse(localStorage.getItem('allProducts'));
      allProducts[data[productDataKeys[item]].id].myProduct = !allProducts[data[productDataKeys[item]].id].myProduct;
      if (allProducts[data[productDataKeys[item]].id].myProduct) {
        addToMyProductButton.style.backgroundImage = 'url(../src/images/done.png)';
      } else {
        if (pageType === pages.MyProduct) {
          productList.removeChild(li);
        }
        addToMyProductButton.style.backgroundImage = 'url(../src/images/addwhite.png)';
      }
      localStorage.setItem('allProducts', JSON.stringify(allProducts));
    });
  }
};

export default {
  addToDom,
};
