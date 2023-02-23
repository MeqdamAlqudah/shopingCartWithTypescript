export interface product {category:string,
    description:string,
    id:number,
    image:string,
    price:number,
    rating: {rate:number, count: number},
    title:string,
    likes:number,
    myProduct?:boolean,
}

export interface likeItem {
            likes:number,
            item_id:string

}

export interface productObject {
    [index:string]:product
}