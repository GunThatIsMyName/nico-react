import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IcoinProps } from "../interface/coinFace";
import { numberWithCommas } from "../utils/help";

const CoinDetail=({coinInfo,coinPrice}:IcoinProps)=>{
    const {rank,symbol,open_source,description}=coinInfo;
    const {max_supply,total_supply}=coinPrice;
    return (
        <Wrapper>
            <div className="column">
                <div className="rank">
                    <span>rank : </span>
                    <span>{rank}</span>
                </div>
                <div className="symbol">
                    <span>symbol : </span>
                    <span>$ {symbol}</span>
                </div>
                <div className="open_source">
                    <span>open_source : </span>
                    <span>{open_source?"YES":"No"}</span>
                </div>
            </div>
            <p>{description}</p>
            <div className="column">
                <div className="supply">
                    <span>max supply :</span>
                    <span>{numberWithCommas(max_supply)}</span>
                </div>
                <div className="supply">
                    <span>total supply :</span>
                    <span>{numberWithCommas(total_supply)}</span>
                </div>
            </div>
            <Link to="info">info</Link>
            <br />
            <Link to="market">market</Link>
            <Outlet />
        </Wrapper>
    )
}

const Wrapper =styled.section`
    .column{
        background-color:#111;
        border-radius:10px;
        padding:1rem 2rem;
        display:flex;
        justify-content:space-between;
        div{
            display:flex;
            flex-direction:column;
            align-items:center;
            line-height:2rem;
            font-size:1.3rem;
        }
    }
    p{
        margin:2rem;
        font-size:1.2rem;
    }
`;

export default CoinDetail;