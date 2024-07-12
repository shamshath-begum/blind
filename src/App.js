import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Scrolling from "./components/Scrolling";
import View from "./components/View";
import logo from "./assets/logo.png";
export const url="https://blind-be.onrender.com"
// export const url = "http://localhost:8000";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <header className="App-header">
        {/* <div className="logo-container"> */}
          <img src={logo} className="logo" alt="logo" />
          <div className="enterprise">BLIEND ENTERPRISES PVT. LTD</div>
        {/* </div> */}
        
      </header>
      <Scrolling/>
      <Hero />
      <Routes>
      <Route path="/view" element={<View />} />
      </Routes>
      </BrowserRouter>
    </div>
  );

  
}

export default App;
