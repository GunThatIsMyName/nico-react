import {BrowserRouter,Routes,Route} from "react-router-dom";
import Coin from "./pages/coin";
import Coins from "./pages/coins";
import GlobalStyle from "./style/reset";

function App() {
  return <BrowserRouter>
  <GlobalStyle />
  <Routes>
    <Route path="/" element={<Coins/>} />
    <Route path="/:coinId" element={<Coin/>} />
  </Routes>
  </BrowserRouter>
}

export default App;
