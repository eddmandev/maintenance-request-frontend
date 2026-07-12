import { FaUserCircle } from "react-icons/fa";
import "./navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar">
            <h2 className="logo">
                Re<span>New</span>
            </h2>

            <ul className="nav-links">
                <li>Home</li>
                <li>Services</li>
                <li>Tickets</li>
                <li>Contact</li>
            </ul>

            <FaUserCircle className="profile-icon"/>
        </nav>
    );
}