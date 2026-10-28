
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import About from "./pages/About";



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
