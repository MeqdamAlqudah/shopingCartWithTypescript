import { product } from "./types/data"

export const getData = (call:(data:product[])=>void)=>{
    fetch("https://fakestoreapi.com/products").then((res)=>
        res.json()
    ).then((json)=>{
        call(json)
    })
}