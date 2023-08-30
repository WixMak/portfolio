import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


import Navbar from "./componects/Navbar";
import About from "./pages/About";
import Exp from "./pages/experience";
import MoreInfo from "./pages/MoreInfo";
import Skills from "./pages/Skills";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
            <Route path="/about" element={<About />}/>
            <Route path="/exp" element={<Exp />}/>
            <Route path="/info" element={<MoreInfo />}/>
            <Route path="/skills" element={<Skills />}/>
            <Route path="/" element={<About />}/>
        </Routes>



      </Router>
    </div>
  );
}

export default App;
