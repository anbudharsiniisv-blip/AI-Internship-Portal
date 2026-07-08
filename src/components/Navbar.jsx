import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">AI Internship Portal</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/internships">Internships</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/applications">My Applications</Link>
      </div>
    </nav>
  );
}

export default Navbar;