
import './App.css';
import {BrowserRouter ,Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import About from './components/About'; // Import the 'About' component
import Home from "./components/home"// Import the 'Home' component with correct casing
// import NoteState from './components/NoteState'; // Import the 'NoteState' component
import NoteState from './context/notes/NoteState';
function App() {

  return (
     <>
     <NoteState>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
  </NoteState>


       
      </>
  
  );
}

export default App;
