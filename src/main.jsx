import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import AOS from "aos";
import "aos/dist/aos.css";
import { Toaster } from "react-hot-toast";


AOS.init({
  duration: 1000,
  once:false,
});
ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <BrowserRouter>
    <CartProvider>
      <App />
      <Toaster position="top-right" />
    </CartProvider>
  </BrowserRouter>
);