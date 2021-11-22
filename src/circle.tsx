import { useState } from "react";
import styled from "styled-components";


interface iContainer{
    color:string;
    border:string;
}

const Container = styled.div<iContainer>`
    width:100px;
    height:100px;
    border-radius:50%;
    background-color:${props=>props.color};
    border:1px solid ${props=>props.border};
`;

interface ColorProps{
    color:string;
    border?:string;
    text?:string;
}


const Circle=({color,border,text="THIS IS TEXT"}:ColorProps)=>{
    const [counter,setCounter]=useState(1)
    setCounter(2)
    return <Container color={color} border={border ?? color} >
        {text}
    </Container>
}


export default Circle;

// interface Saying{
//     first:string;
//     last:string;
// }

// const sayHello = ({first,last}:Saying)=>{
//     return `Hello ${first} you are so ${last}`
// }

// const minji = sayHello({first:"minji",last:"cute"});
// const gani = sayHello({first:"gani",last:"sexy"});
// console.table({minji,gani})
