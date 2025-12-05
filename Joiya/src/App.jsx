import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Place_Order from "./pages/Place_Order";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import SearchBar from "./Components/SearchBar";
import { ToastContainer, toast } from "react-toastify";
import Orders from "./pages/Orders";
import PaymentSuccess from "./Components/PaymentSuccess";
import PaymentFailed from "./Components/PaymentFailed";



const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] ">
       <ToastContainer />
      <Navbar/>
      <SearchBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/orders" element={<Orders/>} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/placeOrder" element={<Place_Order />} />
        <Route path="/payment-success" element={<PaymentSuccess/>} />
  <Route path="/payment-failed" element={<PaymentFailed/>} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
