import { product } from "./types/data"

export const getData = (call:(data:product[])=>void)=>{
    document.querySelector(".listLoading").classList.remove("hide")
    fetch("https://fakestoreapi.com/products").then((res)=>
        res.json()
    ).then((json)=>{
        document.querySelector(".listLoading").classList.add("hide")
        call(json)
    })
}