import { product } from './types/data';

const likesUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/zSfqlcr6ZqRCddk10WHV/likes/';
const getLikesData = async () => {
  const res = await fetch(likesUrl);
  const data = await res.json();
  return data;
};
export const getLikes = (productData:product[], callfn:(result:{
    [index:string]:product
    })=>void) => {
  const finalData = getLikesData();

  finalData.then((items:{item_id:number, likes:number}[]) => {
    const result:{
            [index:string]:product
        } = {};
    for (let i = 0; i < productData.length; i++) {
      result[`${productData[i].id}`] = { ...productData[i], likes: 0 };
    }
    for (let i = 0; i < items.length; i++) {
      result[items[i].item_id].likes = items[i].likes;
    }
    callfn(result);
  });
};
