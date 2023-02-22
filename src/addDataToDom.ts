import { generateLikes } from "./likesGenerator";
import { product } from "./types/data";

const addToDom = (data:{
    [index:string]:product
})=>{
    let productList:HTMLUListElement  = document.querySelector(".allProductList");
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
        // manage elements text content

        secondP.textContent = `rate: ${data[product].rating.rate}`;
        p.textContent = `${data[product].rating.count} reviews`;
        secondP.textContent = `rate: ${data[product].rating.rate}`;
        p.textContent = `${data[product].rating.count} reviews`;
        img.src = data[product].image;
        priceLikeDiv.classList.add("priceLike");
        hx.textContent = `${data[product].title}`;
        secondDiv.classList.add("cardDataContainer")
        div.classList.add("ratingDataContainer")
        hx.classList.add("cardTitle")
        priceP.classList.add("priceP");
        likesP.textContent = `${data[product].likes}`
        likesButton.addEventListener("click",()=>{
            const span = Number(likesP.lastChild.textContent);
            generateLikes({
                item_id:data[product].id
            })
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
        priceLikeDiv.appendChild(likesButton);
        secondDiv.appendChild(priceLikeDiv);
        secondDiv.appendChild(likesP)
        productList.appendChild(li);
    }
};

export default {
    addToDom
}