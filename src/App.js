import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Create from "./pages/Create";
import Nfts from "./pages/Nfts";
import Home from "./pages/Home";
import Contracts from "./pages/Contracts";

function App() {
  return (
    <div className="bg-[#14171c] h-screen">
      <Header />
      <div>
        <Routes>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/contracts" element={<Contracts />}></Route>
          <Route path="/nfts" element={<Nfts />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
