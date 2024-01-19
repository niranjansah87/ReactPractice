
import './App.css';
import {BrowserRouter ,Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import About from './components/About'; // Import the 'About' component
import Home from "./components/home"// Import the 'Home' component with correct casing
// import NoteState from './components/NoteState'; // Import the 'NoteState' component
import NoteState from './context/notes/NoteState';
import Login from './components/Login'; // Import the 'Login' component
import Signup from './components/Signup';
import Alert from './components/Alert'; // Import the 'Alert' component
function App() {

  return (
         <>
         <NoteState>
          <BrowserRouter>
            <Navbar />
            <Alert message="This is amazing React course" />
            <Routes>
              <Route exact path="/about" element={<About />} />
              <Route index element={<Home />} />
              <Route exact path="/login" element={<Login />} /> 
              <Route exact path="/signup" element={<Signup />} /> 
            </Routes>
          </BrowserRouter>
         </NoteState>
         </>

  );
}

export default App;
