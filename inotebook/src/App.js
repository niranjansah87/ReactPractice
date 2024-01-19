
import './App.css';
import {BrowserRouter ,Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import About from './components/About'; // Import the 'About' component
import Home from "./components/home"// Import the 'Home' component with correct casing

function App() {

  return (
   <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>




     
    </>
  
  );
}

export default App;
