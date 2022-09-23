import React from 'react';
import {NavLink} from "react-router-dom";
import "../css/Navbar.css";


const Navbar = () => {
  return (
    <div>
        <div className="navbar">
            <NavLink to="/" >
                <img className="mainlogo" alt="mainlogo" src="https://gumlet.assettype.com/afaqs%2F2021-01%2F15f5f827-8e29-4520-af8d-a0f353b8da17%2Fimages.png?auto=format%2Ccompress&w=1200"/>
            </NavLink>
            <div className="menlink" >
                <NavLink to="/men" style={{fontSize:"1.2rem",color:"#292d3f"}}
                >MEN</NavLink>
            </div>
            <div className="womenlink">
                <NavLink to="women" style={{fontSize:"1.2rem",color:"#292d3f"}}
                >WOMEN</NavLink>
            </div>
            <div className="kidslink">
                <NavLink to="/kids" style={{fontSize:"1.2rem",color:"#292d3f"}}
                >KIDS</NavLink>
            </div>
            <div className="homelivinglink">
                <NavLink to="/home&living" style={{fontSize:"1.2rem",color:"#292d3f"}}
                >HOME & LIVING</NavLink>
            </div>
            <div className="beautylink">
                <NavLink to="beauty" style={{fontSize:"1.2rem",color:"#292d3f"}}
                >BEAUTY</NavLink>
            </div>
            <div className="studiolink">
                <NavLink to="studio" style={{fontSize:"1.2rem",color:"#292d3f"}}
                >STUDIO</NavLink>
            </div>
            
            
            <div className="searchbar">
                <i id="sicon" class="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder="Search for products, brands and more"/>
            </div>
            <div className="nav">
                
                    <NavLink to="/profile" style={{color:"#292d3f"}}>
                        <div>
                            <br/>
                            <i class="fa-regular fa-user fa-lg"></i>
                            <p>Profile</p>
                            
                        </div>                   
                    </NavLink>
                
                
                    <NavLink to="/wishlist" style={{color:"#292d3f"}}>
                        <div>
                            <br/>
                            <i class="fa-regular fa-heart fa-lg" ></i>
                            <p>Wishlist</p>
                        </div>                   
                    </NavLink>
                
                
                    <NavLink to="/bag" style={{color:"#292d3f"}}>
                        <div>
                            <br/>
                            <i class="fa-solid fa-bag-shopping fa-lg"></i>
                            <p>Bag</p>
                        </div>               
                    </NavLink>
                
            </div>
            
        </div>





    </div>
  )
}

export default Navbar

