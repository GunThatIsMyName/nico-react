import { coinPriceUrl, coinThickerUrl, coinUrl } from "./help"


export const getAllCoins=async()=>{
    const response = await fetch (coinUrl);
    const data = await response.json();
    return data.slice(0,100);
}

export const getCoinInfo=async(id?:string)=>{
    const response = await fetch (`${coinPriceUrl}${id}`);
    const data = await response.json();
    return data;
}

export const getCoinThicker=async(id?:string)=>{
    const response = await fetch (`${coinThickerUrl}${id}`);
    const data = await response.json();
    return data;
}