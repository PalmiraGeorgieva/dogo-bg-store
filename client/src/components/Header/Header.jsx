import { NavLink } from "react-router-dom";
import LogoImage from "../../assets/Dogo.png";
import "./Header.css";

function Header() {
    return (
        <header className="header">
            <div className="header-top">
                <div className="header-left">
                    <button className="menu-btn">☰</button>
                </div>

                <NavLink to="/" className="logo">
                    <img src={LogoImage} alt="DOGO"/>
                </NavLink>

                <div className="header-actions">
                  <button className="action-btn">Search</button>
                  <NavLink to="/login">Account</NavLink>
                </div>
            </div>
            <nav className="main-navigation">
                <NavLink to="/women">Women</NavLink>
                <NavLink to="/men">Men</NavLink>
                <NavLink to="/kids">Kids</NavLink>
                <NavLink to="/deals">Deals</NavLink>
                <NavLink to="/collections">Collections</NavLink>
            </nav>
        </header>
    );
}

export default Header;