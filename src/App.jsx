import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./Home";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route
        path="/success"
        element={<OrderSuccess />}
      />
    </Routes>
    
  );
}

export default App;