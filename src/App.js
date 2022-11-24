import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Welcome />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/services" element={<Services />}></Route>
            <Route exact path="/projects" element={<Projects />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
