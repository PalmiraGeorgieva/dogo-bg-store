import { NavLink } from "react-router-dom";
import LogoImage from "../../assets/Dogo.png";
import { FiShoppingBag } from "react-icons/fi";
import "./Header.css";
import { useCart } from "../../contexts/useCart";

function Header() {
    const { cartCount } = useCart();
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
                    <NavLink to="/cart" className="cart-icon" aria-label="Shopping cart">
                       <FiShoppingBag />
                       {cartCount > 0 && (
                          <span className="cart-count">{cartCount}</span>
                       )}
                    </NavLink>
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