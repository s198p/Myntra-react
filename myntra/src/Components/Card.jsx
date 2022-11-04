import React from "react";
import "../css/Men.css";
// import {AuthContext} from "../context/AuthContext";

const Cards = ({ item, handleClick }) => {
const { name, strikedoffprice, price, image_url,tags } = item;
// const {isAuthorized} = useContext(AuthContext);


return (
    
        <div className="card">
            <div className="productImg">
                <img src={image_url} alt="" />
            </div>
            <div className="productInfo">
                <b className="productName">{name}</b>
                <p className="productTags">{tags}</p>
                <div style={{display:"flex",gap:"1rem"}}>
                    <p className="productPrice">Price: ₹{price}</p>
                    <p className="productStrikePrice">₹{strikedoffprice}</p>
                </div>
                
                <button onClick={() => handleClick(item)} className="cartBtn"
                >Add to Cart</button>
            </div>
        </div>
    

);
};

export default Cards;

