
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Scrolling from './components/Scrolling';
import View from './components/View';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const url ="http://localhost:8000"

function App() {
  return (
    <div >
      <BrowserRouter>
      <Header/>
      
      <Scrolling/>
      <Hero/>
      <Routes>
      <Route path="/view" element={<View />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
