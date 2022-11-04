import React from 'react';
import {Link} from "react-router-dom";
import orderplaced from "./orderplaced.png";
import "../css/Final.css"

const Final = () => {
  return (
    
    <div>
        <img src={orderplaced}/>
        <div className="finalDiv">
            <Link to="/" style={{color:"white"}}>GO TO HOME</Link>
        </div>
    </div>
  )
}

export default Final;