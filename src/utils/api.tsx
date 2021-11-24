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

export const getFourteenPrice=async(id?:string)=>{
    const currentTime = Math.floor(Date.now()/1000);
    const startTime= currentTime - 60*60*24*7*2;
    const url = `${coinUrl}/${id}/ohlcv/historical?start=${startTime}&end=${currentTime}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}