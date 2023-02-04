import "./App.css";
import { Route, Routes } from "react-router-dom";
import Shop from "./components/Shop/Shop";
import Home from "./components/Home/home";
//import ProductDetails from "./components/productDetails/ProductDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
      </Routes>
    </div>
  );
}

export default App;
