import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useLocation, useParams } from "react-router";
import styled from "styled-components";
import CoinDetail from "../components/coindetail";
import Loader from "../components/loader";
import { IcoinThicker, IInfoData } from "../interface/coinFace";
import { getCoinInfo } from "../utils/api";

const Coin = () => {
  const { coinId } = useParams();
  const { state } = useLocation();
  
  const {
    isLoading: infoLoading,isError: infoError,data: infoData,
  } = useQuery<IInfoData>(["info", coinId], () => getCoinInfo(coinId));

  const {
    isLoading: thickerLoading,isError: thickerError,data: thickerData,
  } = useQuery<IcoinThicker>(["thicker", coinId], () => getCoinInfo(coinId));

  let Loading = infoLoading || thickerLoading;
  let Error = infoError || thickerError;

  return (
    <Container>
      <header>
        <h1>Coin :{state ? state : coinId}</h1>
      </header>
      {Loading ? (
        <Loader />
      ) : (
        infoData &&
        thickerData && (
          <CoinDetail coinInfo={infoData} coinPrice={thickerData} />
        )
      )}
      {Error && <h1>Error ....</h1>}
    </Container>
  );
};

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
