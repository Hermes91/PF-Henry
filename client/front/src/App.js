import "./App.css";
import { Route, Routes } from "react-router-dom";
import GrillCard from "./components/grillCard/grillCard";
import Home from "./components/Home/home";
import ProductDetails from "./components/productDetails/ProductDetails";
import AboutUs from "./components/AboutUs/AboutUs";
import Shop from "./components/Shop/Shop";
import UserBar from "./components/User/userSidebar";
import Dashboard from "./components/dashboard/Dashboard";
import WishlistComponent from "./components/Wishlist/wishlistComponent";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

function App() {
  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "ASf_ehya4e5o-44-Fe7bkZbl3X1Er6aF3Uj5tgz31XOGe6CM6GeqAUGpuJd4dDQNJsT05SwKZRPToRFj",
      }}
    >
      <div>
        <Routes>
          <Route path="/about-us" element={<AboutUs />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="/user" element={<UserBar />} />
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/wishlist" element={<WishlistComponent />} />
          {/* path /user para testear componentes */}
        </Routes>
      </div>
    </PayPalScriptProvider>
  );
}

export default App;
