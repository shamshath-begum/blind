import "./App.css";
import Hero from "./components/Hero";
import Scrolling from "./components/Scrolling";
import logo from "./assets/logo.png";
// export const url="https://blind-be.onrender.com"
export const url = "http://localhost:8000";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-container">
          <img src={logo} className="logo" alt="logo" />
        </div>
        <div className="brand">
        <div className="brand-name">bliend</div>
        <div className="enterprise">Bliend Enterprises Private Limited.</div>
        </div>
      </header>
      <Scrolling/>
      <Hero />
      
    </div>
  );

  
}

export default App;
