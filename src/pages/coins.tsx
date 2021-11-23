import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Loader from "../components/loader";
import { IcoinFace } from "../interface/coinFace";
import { getAllCoins } from "../utils/api";
import { coinIcon } from "../utils/help";

const Coins = () => {
  const {isError,isLoading,data} = useQuery<IcoinFace[]>('allCoins', getAllCoins);
  
  return (
    <Container>
      <header>
        <h1>코인</h1>
      </header>
      {isLoading ? (
        <Loader />
      ) : (
        <CoinsList>
          {data?.map((coin) => (
            <Coin key={coin.id}>
              <Link to={`/${coin.id}`} state={coin.name}>
                <img
                  src={`${coinIcon}${coin.symbol.toLocaleLowerCase()}`}
                  alt={coin.name}
                />
                {coin.name} &rarr;
              </Link>
            </Coin>
          ))}
        </CoinsList>
      )}
      {isError&&<h1>ERROR .....</h1>}
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

const Coin = styled.li`
  background-color: white;
  line-height: 2rem;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.backColor};
  border-radius: 15px;
  margin-bottom: 10px;
  a {
    display: flex;
    align-items: center;
    padding: 20px;
    transition: all 0.2s ease-in;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
      font-size: 1.2rem;
    }
  }
  img {
    width: 2rem;
    height: 2rem;
    margin-right: 20px;
  }
`;

export default Coins;
