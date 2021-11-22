import React, { useState } from "react";
import styled from "styled-components";

const Wrapper=styled.section`
  width:100%;
  height:100%;
  background-color:${props=>props.theme.backColor};
  color:${props=>props.theme.textColor};
`;
const Body=styled.body`
`;

function App() {
  return (<Body>
    <Wrapper>
      <h1>hello</h1>
    </Wrapper>
  </Body>
  );
}

export default App;
