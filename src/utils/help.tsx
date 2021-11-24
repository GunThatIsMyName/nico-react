export const coinIcon ="https://cryptoicon-api.vercel.app/api/icon/";

export const coinUrl =`https://api.coinpaprika.com/v1/coins`;

export const coinThickerUrl =`https://api.coinpaprika.com/v1/tickers/`;

export const coinPriceUrl =`https://api.coinpaprika.com/v1/coins/`;

export const numberWithCommas=(x:number)=>{
    return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
