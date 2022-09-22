import React from 'react';
import {NavLink} from "react-router-dom";
import "../css/Navbar.css";


const Navbar = () => {
  return (
    <div>
        <div className="navbar">
            <NavLink to="/">
                <img className="mainlogo" alt="mainlogo" src="https://gumlet.assettype.com/afaqs%2F2021-01%2F15f5f827-8e29-4520-af8d-a0f353b8da17%2Fimages.png?auto=format%2Ccompress&w=1200"/>
            </NavLink>

            <NavLink to="/men">MEN</NavLink>
            <NavLink to="women">WOMEN</NavLink>
            <NavLink to="/kids">KIDS</NavLink>
            <NavLink to="/home&living">HOME & LIVING</NavLink>
            <NavLink to="beauty">BEAUTY</NavLink>
            <NavLink to="studio">STUDIO</NavLink>
            <div className="searchbar">
                <i id="sicon" class="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder="Search for products, brands and more"/>
            </div>
            <div className="nav">
                <div className="profile">
                    <NavLink to="/profile">
                        <div>
                            <i class="fa-regular fa-user"></i>
                            <p>Profile</p>
                        </div>                   
                    </NavLink>
                </div>
                <div className="wishlist">
                    <NavLink to="/wishlist">
                        <div>
                            <i class="fa-regular fa-heart"></i>
                            <p>Wishlist</p>
                        </div>                   
                    </NavLink>
                </div>
                <div className="bag">
                    <NavLink to="/bag">
                        <div>
                            <i class="fa-solid fa-bag-shopping"></i>
                            <p>Bag</p>
                        </div>               
                    </NavLink>
                </div>
            </div>
            
        </div>





    </div>
  )
}

export default Navbar

