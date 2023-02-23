import { generateLikes } from "./likesGenerator";
import { product } from "./types/data";
import { pages } from "./types/pageType";

const addToDom = (data:{
    [index:string]:product
},pageType:number)=>{
    let productList:HTMLUListElement;
    if(pageType === pages.all){
        productList = document.querySelector(".allProductList");
    }else if(pageType === pages.myProduct){
        productList = document.querySelector(".myProductList");
    }else if(pageType === pages.popularProduct) {
        productList= document.querySelector(".popularProductsList");
    }
    productList.innerHTML = '';
    for(const product  in data){
        const li = document.createElement("li");
        const img = document.createElement("img");
        const hx  = document.createElement("h3");
        const p:HTMLParagraphElement = document.createElement("p");
        const div = document.createElement('div');
        const secondP:HTMLParagraphElement = document.createElement("p");
        const hr = document.createElement("hr");
        const likesP = document.createElement('p');
        const secondDiv = document.createElement('div');
        const likesButton = document.createElement('button');
        const priceP = document.createElement('p');
        const priceLikeDiv = document.createElement('div');
        const addToMyProductButton = document.createElement('button');
        // manage elements text content
        secondP.textContent = `rate: ${data[product].rating.rate}`;
        p.textContent = `${data[product].rating.count} reviews`;
        secondP.textContent = `rate: ${data[product].rating.rate}`;
        p.textContent = `${data[product].rating.count} reviews`;
        img.src = data[product].image;
        priceLikeDiv.classList.add("priceLike");
        hx.textContent = `${data[product].title}`;
        secondDiv.classList.add("cardDataContainer");
        if(data[product].myProduct){
        addToMyProductButton.style.backgroundImage = 'url(../src/images/done.png)';   
        }else{
        addToMyProductButton.style.backgroundImage = 'url(../src/images/addwhite.png)';
        }
        addToMyProductButton.classList.add("addToMyProducts");
        div.classList.add("ratingDataContainer");
        hx.classList.add("cardTitle");
        priceP.classList.add("priceP");
        likesP.textContent = `${data[product].likes}`
        likesButton.addEventListener("click",()=>{
            const span = Number(likesP.lastChild.textContent);
            generateLikes({
                item_id:data[product].id
            })
            likesButton.style.backgroundImage = 'url(../src/images/likeDark.png)';  
            setTimeout(()=>{
                likesButton.style.backgroundImage = 'url(../src/images/like.png)';  
            },500)
            likesP.innerHTML = `<span>${span+1}</span>`
        })
        
        likesButton.classList.add('likesButton');
        likesP.classList.add("likesAmount")
        priceP.textContent = `${data[product].price}$`
        div.appendChild(p);
        div.appendChild(secondP);
        li.appendChild(img);
        li.appendChild(secondDiv)
        secondDiv.appendChild(hx);
        secondDiv.appendChild(div);
        secondDiv.appendChild(hr);
        priceLikeDiv.appendChild(priceP);
        priceLikeDiv.appendChild(addToMyProductButton);
        priceLikeDiv.appendChild(likesButton);
        secondDiv.appendChild(priceLikeDiv);
        secondDiv.appendChild(likesP)
        productList.appendChild(li);
        addToMyProductButton.addEventListener('click',()=>{
            const allProducts = JSON.parse(localStorage.getItem('allProducts'));
            allProducts[data[product].id].myProduct = !allProducts[data[product].id].myProduct;
            if( allProducts[data[product].id].myProduct){
                addToMyProductButton.style.backgroundImage = 'url(../src/images/done.png)';   
                }else{
                    if(pageType === pages.myProduct){
                        productList.removeChild(li);
                    }
                addToMyProductButton.style.backgroundImage = 'url(../src/images/addwhite.png)';
                }
            localStorage.setItem('allProducts',JSON.stringify(allProducts));
                });
    }
};

export default {
    addToDom
}