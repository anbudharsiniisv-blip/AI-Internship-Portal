import "./App.css";
import { Routes, Route } from "react-router-dom";
import Applications from "./pages/Applications";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Internships from "./pages/Internships";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/internships" element={<Internships />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/applications" element={<Applications />} />
      </Routes>
    </>
  );
}

export default App;