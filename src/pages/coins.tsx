import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Loader from "../components/loader";
import { IcoinFace } from "../interface/coinFace";
import { coinUrl } from "../utils/help";

const Coins=()=>{
    const [coins,setCoins]=useState<IcoinFace[]>([]);
    const [loading,setLoading]=useState(false);

    const getCoin=async()=>{
        setLoading(true)
        try{
            const response = await fetch(coinUrl);
            const data=await response.json();
            setCoins(data.slice(0,100));
            setLoading(false);
        }catch{
            console.log("Error || can't get your data");
            setLoading(false);
        }
    }
    useEffect(()=>{
        getCoin();
    },[])
    return (
        <Container>
          <Header>
            <Title>코인</Title>
          </Header>
          {loading?<Loader />:<CoinsList>
            {coins.map((coin) => (
              <Coin key={coin.id}>
                <Link to={`/${coin.id}`}>{coin.name} &rarr;</Link>
              </Coin>
            ))}
          </CoinsList>}
        </Container>
      );
}

const Container = styled.div`
  padding: 0px 20px;
  max-width:480px;
  margin:auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
  background-color: white;
  line-height:2rem;
  color: ${(props) => props.theme.backColor};
  border-radius: 15px;
  margin-bottom: 10px;
  a {
    padding:20px;
    transition: all 0.2s ease-in;
    display: block;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
      font-size:1.2rem;
    }
  }
`;
const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;


export default Coins;