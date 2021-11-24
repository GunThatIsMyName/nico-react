import { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import styled from "styled-components";
import { chartProps, chartTypeProps } from "../interface/coinFace";
import { getAllCoins, getFourteenPrice } from "../utils/api";
import LineChart from "./lineChart";


const Info = () => {
    const [isLineChart,setLineChart]=useState(true);
  const { coinId } = useParams();
  const { isLoading, isError, data } = useQuery<chartTypeProps>(["2weeks", coinId], () =>
    getFourteenPrice(coinId)
  );
  return (
    <Wrapper>
      <button onClick={()=>setLineChart(true)}>Line</button>
      <button onClick={()=>setLineChart(false)}>Candle</button>
      {data&& <LineChart data={data} /> }
    </Wrapper>
  );
};
const Wrapper = styled.section``;
export default Info;
