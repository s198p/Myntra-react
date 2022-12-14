import React,{ useState} from 'react';
import "../css/Men.css";
import Mendata from "../Data/Mendata";
import Cards from "./Card";
// import Products from './Products';

const Men = ({ handleClick}) => {

    const [mdata,setMdata] = useState(Mendata);

    const filterColor = (colorItem) =>{
        const result = Mendata.filter((currentData)=>{
            return currentData.color===colorItem;
        })
        setMdata(result)
        }

    const filterBrand = (brand) =>{
            const result = Mendata.filter((currentData)=>{
                return currentData.name===brand;
            })
            setMdata(result)
            }
    

  return (
    <div className="mencontainer">
        <div className="filter1">
        
            <div style={{display:"flex"}}>               
            
            <h4>FILTERS</h4>
            <p style={{marginLeft:"-3.6rem"}}><b>Menswear: {mdata.length} Items</b></p>
            </div>
            <div>
                <select className="selectfil">
                    <option value>Age</option>
                    <option value="14y+">14Y+</option>
                    <option value="9m-12m">9M-12M</option>
                    <option value="10y-12y">10Y-12Y</option>
                    <option value="18m-24m">18M-24M</option>
                </select>
                <select className="selectfil">
                    <option value>Bundles</option>
                    <option value="bundles">Bundles</option>
                    <option value="singlestyles">Single Styles</option>
                </select>
                <select className="selectfil">
                    <option value>Country Of Origin</option>
                    <option value="allcountries">All Countries</option>
                </select>
                <select className="selectfil">
                    <option value>Size</option>
                    <option value="small">S</option>
                    <option value="medium">M</option>
                    <option value="large">L</option>
                    <option value="xl">XL</option>
                    <option value="xxl">XXL</option>
                </select>
            </div>
            <div>
            <select onchange="sorting()" id="sortby" >
                    
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
                <h5>CATEGORIES</h5>
                <div className="filters">
                <input type="checkbox" name="Kurta" /><label for="Kurta">Kurta set</label>
                </div>
                <div className="filters">
                <input type="checkbox" name="dress"/><label for="dress">Dresses</label>
                </div>
                <div className="filters">
                <input type="checkbox" name="jeans"/><label for="jeans">Jeans</label>
                </div>
                <div className="filters">
                <input type="checkbox" name="watches"/><label for="watches">Watches</label>
                </div>
                <div className="filters">
                <input type="checkbox" name="footware"/><label for="footware">Footware</label>
                </div>
                <div className="filters">
                <input type="checkbox" name="sarees"/><label for="sarees">Sarees</label>
                </div>
                <div className="filters">
                <input type="checkbox" name="electronics"/><label for="electronics">Electronics</label>
                </div>
                <div className="filters">
                <input type="checkbox" name="makeup"/><label for="makeup">Makeup</label>
                </div>


        
                <h5>BRANDS</h5>
                <div className="filters">
                <input type="checkbox" name="HRX" onClick={()=>filterBrand("HRX")}/><label for="HRX">HRX</label>
                </div>
                <div className="filters">
                <input type="checkbox" name="Puma" onClick={()=>filterBrand("Puma")}/><label for="Puma">Puma</label>
                </div>
                <div className="filters">
                <input type="checkbox" name="Nike" onClick={()=>filterBrand("Nike")}/><label for="Nike">Nike</label>
                </div>
                <div className="filters">
                <input type="checkbox" name="Roadster" onClick={()=>filterBrand("Roadster")}/><label for="Roadster">Roadster</label>
                </div>
                <div className="filters">
                <input type="checkbox" name="Highlander" onClick={()=>filterBrand("Highlander")}/><label for="Highlander">Highlander</label>
                </div>
                {/* <div className="filters">
                <input type="checkbox" name="Fastrack"/><label for="Fastrack">Fastrack</label>
                </div>
                <div className="filters">
                <input type="checkbox" name="Philips"/><label for="Philips">Philips</label>
                </div>
                <div className="filters">
                <input type="checkbox" name="Daniel Klein"/><label for="Daniel Klein">Daniel Klein</label>
                </div>
                <div className="filters">
                <input type="checkbox" name="Apple"/><label for="Apple">Apple</label>
                </div> */}





                <h5>COLOR</h5>
                <div className="filters">
                <input type="checkbox" name="Black" onClick={()=>filterColor("black")}/><label for="Black">Black</label>
                </div>
                <div className="filters">
                <input type="checkbox" name="Yellow" onClick={()=>filterColor("yellow")}/><label for="Yellow">Yellow</label>
                </div>
                <div className="filters">
                <input type="checkbox" name="White" onClick={()=>filterColor("white")}/><label for="White">White</label>
                </div>
                <div className="filters">
                <input type="checkbox" name="Red" onClick={()=>filterColor("red")}/><label for="Red">Red</label>
                </div>
                <div className="filters">
                <input type="checkbox" name="Beige" onClick={()=>filterColor("beige")}/><label for="Beige">Beige</label>
                </div>
                <div className="filters">
                <input type="checkbox" name="Green" onClick={()=>filterColor("green")}/><label for="Green">Green</label>
                </div>
                <div className="filters">
                <input type="checkbox" name="Orange" onClick={()=>filterColor("orange")}/><label for="Orange">Orange</label>
                </div>
                <div className="filters">
                <input type="checkbox" name="Maroon" onClick={()=>filterColor("maroon")}/><label for="Maroon">Maroon</label>
                </div>
                <div className="filters">
                <input type="checkbox" name="Raven" onClick={()=>filterColor("raven")}/><label for="Raven">Raven</label>
                </div>
                <div className="filters">
                <input type="checkbox" name="Multi" onClick={()=>filterColor("multi")}/><label for="Multi">Multi</label>
                </div>





                <h5>PRICE</h5>
                <div className="filters">
                <input type="checkbox" name="Rs. 74 to Rs. 1199"/><label for="Rs. 74 to Rs. 1199">???74-???1199</label>
                </div>
                <div className="filters">
                <input type="checkbox" name="Rs. 1199 to Rs. 2098"/><label for="Rs. 1199 to Rs. 2098">???1199-???2098</label>
                </div>
                <div className="filters">
                <input type="checkbox" name="Rs. 2098 to Rs. 3119"/><label for="Rs. 2098 to Rs. 3119">???2098-???3119</label>
                </div>
                <div className="filters">
                <input type="checkbox" name="Rs. 3119 and above"/><label for="Rs. 3119 and above">???3119 & above</label>
                </div>
                


                



                <h5>DISCOUNT RANGE</h5>
                <div className="filters">
                <input type="checkbox" name="10% and above"/><label for="10% and above">10% and above</label>
                </div>
                <div className="filters">
                <input type="checkbox" name="30% and above"/><label for="30% and above">30% and above</label>
                </div>
                <div className="filters">
                <input type="checkbox" name="50% and above"/><label for="50% and above">50% and above</label>
                </div>
                <div className="filters">
                <input type="checkbox" name="60% and above"/><label for="60% and above">60% and above</label>
                </div>
                <div className="filters">
                <input type="checkbox" name="70% and above"/><label for="70% and above">70% and above</label>
                </div>


            </div>
            <div className="product">
            {mdata.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
      {/* <Products/> */}
            </div>
        </div>
    </div>
  )
}

export default Men;