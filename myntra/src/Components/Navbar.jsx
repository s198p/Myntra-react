import React from 'react';
import {NavLink} from "react-router-dom";
import "../css/Navbar.css";


const Navbar = ({setShow, size}) => {
  return (
    <div>
        <div className="navbar">
            <NavLink to="/" >
                <img className="mainlogo" alt="mainlogo" src="https://gumlet.assettype.com/afaqs%2F2021-01%2F15f5f827-8e29-4520-af8d-a0f353b8da17%2Fimages.png?auto=format%2Ccompress&w=1200"/>
            </NavLink>
            <div className="menlink" >
                <NavLink to="/men" style={{fontSize:"1rem",color:"#292d3f"}}
                onClick={() => setShow(true)}
                >MEN</NavLink>
            </div>
            <div className="womenlink">
                <NavLink to="women" style={{fontSize:"1rem",color:"#292d3f"}}
                onClick={() => setShow(true)}
                >WOMEN</NavLink>
            </div>
            <div className="kidslink">
                <NavLink to="/kids" style={{fontSize:"1rem",color:"#292d3f"}}
                onClick={() => setShow(true)}
                >KIDS</NavLink>
            </div>
            <div className="homelivinglink">
                <NavLink to="/home&living" style={{fontSize:"1rem",color:"#292d3f"}}
                onClick={() => setShow(true)}
                >HOME & LIVING</NavLink>
            </div>
            <div className="beautylink">
                <NavLink to="beauty" style={{fontSize:"1rem",color:"#292d3f"}}
                onClick={() => setShow(true)}
                >BEAUTY</NavLink>
            </div>
            <div className="studiolink">
                <NavLink to="studio" style={{fontSize:"1rem",color:"#292d3f"}}
                onClick={() => setShow(true)}
                >STUDIO</NavLink>
            </div>
            
            
            <div className="searchbar">
                <i id="sicon" class="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder="Search for products, brands and more"/>
            </div>
            <div className="nav">
                
                    <NavLink to="/signup" style={{color:"#292d3f"}}>
                        <div>
                            <br/>
                            <i class="fa-regular fa-user fa-md"></i>
                            <p>Profile</p>
                            
                        </div>                   
                    </NavLink>
                
                
                    <NavLink to="/wishlist" style={{color:"#292d3f"}}>
                        <div>
                            <br/>
                            <i class="fa-regular fa-heart fa-md" ></i>
                            <p>Wishlist</p>
                        </div>                   
                    </NavLink>
                
                
                    <NavLink to="/cart" style={{color:"#292d3f"}}
                    onClick={() => setShow(false)}>
                        <div >
                            <br/>                           
                                <i class="fa-solid fa-bag-shopping fa-md"></i>
                                <p>Bag</p>                                                       
                        </div>                                      
                    </NavLink>
                    <div style={{backgroundColor:"red",borderRadius:"50%",height:"1.5rem",width:"1.5rem",marginLeft:"-1.5rem"}}>
                            <b style={{color:"white"}}>{size}</b>
                    </div>
                
            </div>
            
        </div>





    </div>
  )
}

export default Navbar

