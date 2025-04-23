// src/App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Product from "./components/Product";
import ProductDetail from "./components/ProductDetail";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./AuthContext";
import { AllRoutes } from "./AllRoutes";
import { Navbar } from "./Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
  <Navbar />
  <AllRoutes />
  <Footer />
    </div>
    
    
    
  );
}

export default App;
