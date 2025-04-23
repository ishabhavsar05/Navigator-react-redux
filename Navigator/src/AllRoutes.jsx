// src/AllRoutes.js
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

import ProductDetail from "./components/ProductDetail";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Products from "./components/Product";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      
      <Route path="/login" element={<Login />} />
      <Route path="/privateRoute" element={<PrivateRoute />} />
    </Routes>
  );
};
