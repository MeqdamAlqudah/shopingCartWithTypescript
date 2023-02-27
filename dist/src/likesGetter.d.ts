import { product } from './types/data';
export declare const getLikes: (productData: product[], callfn: (result: {
    [index: string]: product;
}) => void) => void;
