import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/home";
import ProductDetails from "./components/productDetails/ProductDetails";
import AboutUs from "./components/AboutUs/AboutUs";
import Shop from "./components/Shop/Shop";
import Dashboard from "./components/dashboard/Dashboard";
import UserComponent from "./components/User/UserComponent";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/user" element={<UserComponent />} />
        <Route path="/admin" element={<Dashboard />} />

      </Routes>
    </div>
  );
}

export default App;
