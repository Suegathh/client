import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import './Navbar.css'


function Navbar() {
    const { isAuthenticated } = useContext(UserContext);

    return (
        <nav className="navbar">
            <Link to='/' className="navbar-link">Home</Link>
            {!isAuthenticated && <Link to='/register' className="navbar-link">Register</Link>}
            {!isAuthenticated && <Link to='/login' className="navbar-link">Login</Link>}
            {isAuthenticated && <Link to='/dashboard' className="navbar-link">Dashboard</Link>}
            {isAuthenticated && <Link to='/contactForm' className="navbar-link">Contact Form</Link>}
        </nav>
    );
}

export default Navbar;
