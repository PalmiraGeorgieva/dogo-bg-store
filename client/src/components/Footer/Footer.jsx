import {Link} from "react-router-dom";
import logoImage from "../../assets/dogo-1.png";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section footer-brand">
                   <Link to="/">
                       <img src={logoImage} alt="DOGO" className="footer-logo" />
                   </Link>
                </div>

                <div className="footer-section">
                   <h4>Shop</h4>
                   <Link to="/women">Women</Link>
                   <Link to="/men">Men</Link>
                   <Link to="/kids">Kids</Link>
                   <Link to="/deals">Deals</Link>
                </div>

                <div className="footer-section">
                    <h4>Information</h4>
                     <Link to="/about">About Us</Link>
                     <Link to="/contact">Contact</Link>
                     <Link to="/delivery">Delivery</Link>
                     <Link to="/return">Return</Link>
                </div>
                <div className="footer-section">
                    <h4>Contact</h4>
                    <p>Phone: 0878 281 672</p>
                    <p>Email: ...</p>
                    <p>Address: DOGO Burgas boulevard "Aleko Bogoridy" 20</p>
                </div>
                </div>
            <div className="footer-bottom">
                 <p>&copy; 2026 DOGO. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;