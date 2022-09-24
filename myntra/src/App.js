import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Components/Home"
import Navbar from './Components/Navbar';
import Footer from "./Components/Footer"
import Men from './Components/Men';


function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/men" element={<Men/>} />
      </Routes>
      <Footer/>
      {/* <Home/> */}
      
    </div>
  );
}

export default App;
