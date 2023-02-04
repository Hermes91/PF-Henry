import "./App.css";
import { Route, Routes } from "react-router-dom";
// import GrillCard from "./components/grillCard/grillCard";
import Home from "./components/Home/home";
//import ProductDetails from "./components/productDetails/ProductDetails";
import AboutUs from "./components/AboutUs/Abouts";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AboutUs />}></Route>
      </Routes>
    </div>
  );
}

export default App;
