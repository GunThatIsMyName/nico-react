import styled from 'styled-components';

const Box = styled.section`
  background-color:${props=>props.theme.backgroundColor};
  color:${props=>props.theme.textColor};
`;



function App() {
  return (
    <Box className="App">
      <h1>hello</h1>
    </Box>
  );
}

export default App;
