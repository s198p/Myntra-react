import './App.css';
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


function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/men" element={<Men/>} />
        <Route path="/women" element={<Women/>} />
        <Route path="/kids" element={<Kids/>} />
        <Route path="/beauty" element={<Beauty/>}/>
        <Route path="/men" element={<Homeliving/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
