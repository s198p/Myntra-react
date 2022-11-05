import React, { useState, useEffect } from "react";
import {NavLink} from "react-router-dom";
import "../css/Cart.css";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

 

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    const finalPrice=ans;
    console.log("finalPrice",finalPrice)
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });
  return (
    
<div className="cart">
        <div className="mainDiv">
          <div>
            <h5>Check delivery time & services</h5>
              <div>
                  <h5>ENTER PIN CODE</h5>
              </div>
          </div>
          <div>
              <h4>Available Offers</h4>
              <p>10% Instant Discount with ICICI Bank Credit cards on a min spend of Rs 3,000. TCA</p>
              <p>Show More <i className="fa-solid fa-angle-down"></i></p>

            </div>
            
              <div className="ti">
                <h4>Total Items: {cart.length}</h4>
              </div>
              {/* <div>
                  <h5>REMOVE </h5>
                  <div className="line"></div>
                  <h5>MOVE TO WISHLIST</h5>
              </div> */}
            
 {/* .........................................................................................................................                        */}
            <div className="itemsBox">
            {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.image_url} alt="" />
            
          </div>
          <div>
            <h5>{item.name}</h5>
            <h6>{item.tags}</h6>
            <div style={{display:"flex",gap:"2rem"}}>
            <p>Price: {item.price}</p>
          </div>
            <div>
              <button onClick={() => handleChange(item, 1)}>+</button>
              <button>{item.amount}</button>
              <button onClick={() => handleChange(item, -1)}>-</button>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
          
          </div>
          
          
        </div>
      ))}
            </div>
  {/* ......................................................................................................................... */}         
        </div>
        <div className="checkDiv">
            <h5>OFFERS & COUPONS</h5>
            <div className="offerinfo">
                <div>
                    <img style={{width:"20%"}}
                    src="https://constant.myntassets.com/checkout/assets/img/additional-offer.webp"/>
                    <h4>1 Offer On Your Bag </h4>
                </div>
                <i className="fa-solid fa-chevron-right"></i>
            </div>
            <div className="apply">
                <div>
                    <input className="promo" placeholder="Enter promocode here" type="text"/>
                </div>
                <div className="check">Apply</div>
                
            </div>
            <h5>GIFTING & PERSONALISATION</h5>
            <div className="gift">
            
                <img  src="https://constant.myntassets.com/checkout/assets/img/gift-big.webp" alt=""/>
                <div>
                    
                    <h6>Buying for a loved one?</h6>
                    <p style={{fontSize:"0.8rem",marginTop:"-20px"}}>Gift warp and personalised message on card, only for ₹ 25</p>
                    <h5 style={{color:" #ff3e6c",marginTop:"-8px"}}>ADD GIFT WRAP</h5>
                </div>
            </div>
            <div className="total">
                <div>
                    <h5>PRICE DETAILS</h5>
                    <p>Total MRP</p>
                    <p>Discount on MRP</p>
                    <p>Coupon Discount</p>
                    <p>Convenience Fee <b>Know More</b></p>
                </div>
                <div>
                    <p className="total3">₹0</p>
                    <p style={{color:"#3cc3a0"}} className="discount">0</p>
                    <p>Apply Coupon</p>
                    <div className="free">
                        <p>₹99</p>
                        <p>FREE</p>
                    </div>
                </div>
            </div>
            <div className="totalamount">
                <div>
                    Total Amount 
                </div>
                <div className="total2">
                    ₹{price}
                </div>
            </div>
            <div className="nocf">
                <div>
                    <img style={{width:"40px"}} src="https://constant.myntassets.com/checkout/assets/img/ship-free.webp" alt=""/>
                </div>
                <div className="nofee">
                    <p>Yay! <b>No Convenience Fee</b> <span>₹99</span> on this order</p>
                    <p></p>
                </div> 
            </div>
            {
              cart.length>=1 && <NavLink to={`/address/${price}`} >
              <div className="place">
                PLACE ORDER
              </div>
            </NavLink>
            }
        </div>
    </div>
  );
};

export default Cart;
