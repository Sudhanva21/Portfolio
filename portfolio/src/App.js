import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Exp from "./Exp";
// import Fun from "./Fun";
import Skills from "./Skills";
import Contact from "./Contact";
import Certifications from "./CertificationsPage"
import Projects from "./Projects";

function App() {
  return (
    <div class="gradient">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Exp />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/projects" element={<Projects />} />
          {/* <Route path="/fun" element={<Fun />} /> */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
