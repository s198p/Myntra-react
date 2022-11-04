import './App.css';
import React, { useState, useEffect } from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Components/Home"
import Navbar from './Components/Navbar';
import Footer from "./Components/Footer"
import Men from './Components/Men';
import Women from "./Components/Women";
import Kids from "./Components/Kids";
import Homeliving from "./Components/Homeliving";
import Beauty from "./Components/Beauty";
import Cart from "./Components/Cart";
import Address from "./Components/Address";
import Payment from "./Components/Payment";


function App() {

  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) 
    {
      arr[ind].amount = 1
    };
    setCart([...arr]);
    console.log("amount",item.amount);
  };

  // useEffect(() => {
  //   console.log("cart change");
  // }, [cart]);

  return (
    <div className="App">
      <Navbar setShow={setShow} size={cart.length}/>
      
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/men" element={<Men handleClick={handleClick}/>} />
        <Route path="/women" element={<Women handleClick={handleClick}/>} />
        <Route path="/kids" element={<Kids handleClick={handleClick}/>} />
        <Route path="/beauty" element={<Beauty handleClick={handleClick}/>}/>
        <Route path="/men" element={<Homeliving handleClick={handleClick}/>} />
        <Route path="/address/:finalPrice" element={<Address/>} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} handleChange={handleChange}/>} />
        <Route path="/payment" element={<Payment/>}/>
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
