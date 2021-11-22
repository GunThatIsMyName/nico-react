import styled from "styled-components";

const Container = styled.div<ColorProps>`
    width:100px;
    height:100px;
    border-radius:50%;
    background-color:${color=>color.color};
`;
interface ColorProps{
    color:string;
}


const Circle=({color}:ColorProps)=>{
    return <Container color={color} />
}


export default Circle;

interface Saying{
    first:string;
    last:string;
}

const sayHello = ({first,last}:Saying)=>{
    return `Hello ${first} you are so ${last}`
}

const minji = sayHello({first:"minji",last:"cute"});
const gani = sayHello({first:"gani",last:"sexy"});
console.table({minji,gani})
