import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import styled from "styled-components";
import CoinDetail from "../components/coindetail";
import Loader from "../components/loader";
import { IcoinThicker, IInfoData } from "../interface/coinFace";
import { coinPriceUrl, coinThickerUrl } from "../utils/help";

const Coin=()=>{
    const [loading,setLoading]=useState(true);
    const {coinId} = useParams();
    const {state} = useLocation();

    const [coinInfo,setInfo]=useState<IInfoData>();
    const [coinPrice,setPrice]=useState<IcoinThicker>();

    const getCoinInfo=async()=>{
        const response =await fetch(`${coinPriceUrl}${coinId}`);
        const data=await response.json();
        setInfo(data);
    }
    const getCoinPrice=async()=>{
        const response =await fetch(`${coinThickerUrl}${coinId}`);
        const data=await response.json();
        setPrice(data);
    }
    useEffect(()=>{
        getCoinInfo();
        getCoinPrice();
        setLoading(false)
        // eslint-disable-next-line
    },[coinId])

    return (
        <Container>
          <header>
            <h1>Coin :{state?state:coinId}</h1>
          </header>
          {loading ? (
            <Loader />
          ) : 
              coinInfo && coinPrice && <CoinDetail coinInfo={coinInfo} coinPrice={coinPrice} />
          }
        </Container>
      );
}

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: auto;
  header {
    height: 15vh;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      font-size: 48px;
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const CoinsList = styled.ul``;



export default Coin;