import { generateLikes } from "./likesGenerator";
import { product } from "./types/data";

const addToDom = (data:{
    [index:string]:product
})=>{
    let productList:HTMLUListElement  = document.querySelector(".allProductList");
    for(const product  in data){
        const li = document.createElement("li");
        const img = document.createElement("img");
        img.src = data[product].image;
        const hx  = document.createElement("h3");
        hx.textContent = `${data[product].title}`;
        const p:HTMLParagraphElement = document.createElement("p");
        const div = document.createElement('div');
        const secondP:HTMLParagraphElement = document.createElement("p");
        secondP.textContent = `rate: ${data[product].rating.rate}`;
        p.textContent = `${data[product].rating.count} reviews`;
        const hr = document.createElement("hr");
        const likesP = document.createElement('p');
        likesP.innerHTML = `likes: <span>${data[product].likes}</span>`
        const likesButton = document.createElement('button');
        likesButton.addEventListener("click",()=>{
            const span = Number(likesP.lastChild.textContent);
            generateLikes({
                item_id:data[product].id
            })
            likesP.innerHTML = `likes: <span>${span+1}</span>`
        })
        const priceP = document.createElement('p');
        priceP.textContent = `Coast ${data[product].price}`
        likesButton.textContent = "Like"
        div.appendChild(p);
        div.appendChild(secondP);
        li.appendChild(img);
        li.appendChild(hx);
        li.appendChild(div);
        li.appendChild(hr)
        li.appendChild(likesP)
        li.appendChild(likesButton)
        productList.appendChild(li);


    }
};

export default {
    addToDom
}