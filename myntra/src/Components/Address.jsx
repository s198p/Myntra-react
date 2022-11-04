import React from 'react';
import {NavLink,useParams} from "react-router-dom";
import "../css/Address.css"

const Address = ({}) => {
    const totalPrice = useParams();
    // console.log(totalPrice);
  return (
    <div className="body">
            <div className="cart">
        <div className="mainDiv">
            <div style={{border:"none"}}>
                <h3 >Select Delivery Address </h3>
                <div style={{width:"auto"}}>
                    <h5 >ADD NEW ADDRESS</h5>
                </div>
            </div>
            <div style={{border:"none"}}>
            <h5 >DEFAULT ADDRESS</h5>
            </div>
            
            <div style={{height:"12rem"}}>
                <div className="name">                    
                    <h4>Sumit Patil</h4>                   
                    <div className="home">Home</div>
                </div>
                <div>
                    <p>Ganapati Nagar, Varangaon <br/>Varangaon,MAHARASHTRA -425305</p>
                    <p>Mobile No: <b>8855860418</b></p>
                    <p>Pay on Delivery</p>
                </div>
                
                <div className="option">
                    <div>
                        Remove
                    </div> 
                    <div>
                        EDIT
                    </div>
                </div>
            </div>
            <div className="add">
                +Add New Address  
            </div>
        </div>
        <div className="checkDiv">
        
            <div className="itemDiv">
                <h5>DELIVERY ESTIMATES</h5>
                Deliver in 1 - 2 days
                <br/>
                <br/>
                <b>Seller :</b> Sp pvt.ltd.
            </div>
            
            {/* <div className="total">
                <div>
                    <h5>PRICE DETAILS</h5>
                    <p>Total MRP</p>
                    <p>Discount on MRP</p>
                    <p>Convenience Fee <b>Know More</b></p>
                </div>
                <div>
                    <p>₹999</p>
                    <p style={{color:"#3cc3a0"}}>-209</p>
                    <div className="free">
                        <p>₹99</p>
                        <p>FREE</p>
                    </div>
                </div>
            </div> */}
            <div className="totalamount">
                <div>
                    Total Amount
                </div>
                <div>
                    ₹{totalPrice.finalPrice}
                </div>
            </div>
            <NavLink to="/payment" > 
            <div className="place">           
                CONTINUE
            </div>
            </NavLink>
        </div>
    </div>
    </div>
  )
}

export default Address