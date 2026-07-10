import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        🚀 Internship Portal
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/internships">Internships</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/applications">Applications</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;