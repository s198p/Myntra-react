import React from 'react';
import "../css/Men.css";

const Men = () => {
  return (
    <div className="mencontainer">
        <div className="filter1">
            <div>
                <h4>FILTERS</h4>
            </div>
            <div>
                <select>
                    <option value>Age</option>
                    <option value="14y+">14Y+</option>
                    <option value="9m-12m">9M-12M</option>
                    <option value="10y-12y">10Y-12Y</option>
                    <option value="18m-24m">18M-24M</option>
                </select>
                <select>
                    <option value>Bundles</option>
                    <option value="bundles">Bundles</option>
                    <option value="singlestyles">Single Styles</option>
                </select>
                <select>
                    <option value>Country Of Origin</option>
                    <option value="allcountries">All Countries</option>
                </select>
                <select >
                    <option value>Size</option>
                    <option value="small">S</option>
                    <option value="medium">M</option>
                    <option value="large">L</option>
                    <option value="xl">XL</option>
                    <option value="xxl">XXL</option>
                </select>
            </div>
            <div>
            <select onchange="sorting()" id="sortby">
                    
                    <option value>Recommended</option>
                    <option value="whatsnew">What's New</option>
                    <option value="popularity">Popularity</option>
                    <option value="hightolow">Price: Hight to low</option>
                    <option value="lowtohigh">Price: Low to high</option>
                    <option value="rating">Customer Rating</option>
                    
                </select>
            </div>
        </div>
        <div className="filter2">
            <div className="filter2-1">
                <h6>CATEGORIES</h6>
                <div className="filters">
                <input type="checkbox" name="Kurta"/><label for="Kurta">Kurta set</label>
                
                </div>
            </div>
            <div className="products"></div>
        </div>
    </div>
  )
}

export default Men