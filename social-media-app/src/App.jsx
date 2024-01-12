import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './components/Header'
import "bootstrap/dist/css/bootstrap.css"
import Footor from "./components/Footor";
import Sidebar from './components/Sidebar';
import CreatePost from './components/CreatePost';

function App() {
  

  return (
    <>
    <div className="app-container">
    <Sidebar/>
    <div className="content">
      <Header/>
      <CreatePost/>
      <Footor/>
      </div>
      </div>
    </>
  )
}

export default App
