import {BrowserRouter,Routes,Route} from "react-router-dom";
import Info from "./components/info";
import Market from "./components/market";
import Coin from "./pages/coin";
import Coins from "./pages/coins";
import GlobalStyle from "./style/reset";
import { ReactQueryDevtools } from "react-query/devtools";

function App() {
  return <BrowserRouter>
  <GlobalStyle />
  <Routes>
    <Route path="/" element={<Coins/>} />
    <Route path="/:coinId" element={<Coin/>}>
      <Route path="info" element={<Info />} />
      <Route path="market" element={<Market />} />
    </Route>
  </Routes>
  <ReactQueryDevtools initialIsOpen={true} />
  </BrowserRouter>
}

export default App;
