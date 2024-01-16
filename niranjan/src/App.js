
import './App.css';
import Navbar from './components/Navbar';
import Forms from './components/Forms';
// import alert from './components/alert';
import About from './components/About'; // Import the 'About' component
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path='/' element={<Forms />} />
      </Routes>
    </BrowserRouter>
    </>

  );
}

export default App;

// import React from 'react'

// export default function App() {
//   return (
//    <>
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' component={<Navbar />} />
//       </Routes>
//     </BrowserRouter>
//    </>
//   )
// }
