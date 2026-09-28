import {Link} from "react-router-dom";
import logoImage from "../../assets/dogo-1.png";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import "./Footer.css";
import { useTranslation } from "react-i18next";
import { FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6";

function Footer() {

    const { t } = useTranslation();

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section footer-brand">
                   <Link to="/">
                       <img src={logoImage} alt="DOGO" className="footer-logo" />
                   </Link>
                </div>

                <div className="footer-section">
                   <h4>{t("footer.shop")}</h4>
                   <Link to="/women">{t("footer.women")}</Link>
                   <Link to="/men">{t("footer.men")}</Link>
                   <Link to="/kids">{t("footer.kids")}</Link>
                   <Link to="/deals">{t("footer.deals")}</Link>
                </div>

                <div className="footer-section">
                    <h4>{t("footer.information")}</h4>
                     <Link to="/about">{t("footer.aboutUs")}</Link>
                     <Link to="/delivery">{t("footer.delivery")}</Link>
                     <Link to="/return">{t("footer.returns")}</Link>
                     <Link to="/size-guide">{t("footer.sizeGuide")}</Link>
                     <Link to="/faq">{t("footer.faq")}</Link>
                </div>
                <div className="footer-section footer-contact">
                    <h4>{t("footer.contact")}</h4>
                    <div className="contact-list"> 
                    <div className="contact-item">
                     <FaPhone />
                    <a href="tel:+359878 281 672">0878 281 672</a>
                    </div>
                     <div className="contact-item">
                        <FaEnvelope />
                    <a href="mailto:">Email: ...</a>
                    </div>
                    <div className="contact-item">
                        <FaLocationDot />
                    <span>{t("footer.address")}</span>
                    </div>
                    </div>
                </div>
                <div className="footer-section">
                    <h4>{t("footer.followUs")}</h4>
                    <div className="social-links">
                        <a href="https://www.facebook.com/dogo.burgas" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           aria-label="Facebook">
                            <FaFacebookF />
                        </a>
                        <a href="https://www.instagram.com/dogo.burgas/"
                           target="_blank"
                           rel="noopener noreferrer"
                           aria-label="Instagram">
                            <FaInstagram />
                        </a>
                        <a href="https://www.tiktok.com/@dogo.burgas" target="_blank" 
                           rel="noopener"
                           aria-label="TikTok"
                        >
                            <FaTiktok />
                        </a>

                    </div>
                </div>
                </div>
            <div className="footer-bottom">
                 <p>&copy; {new Date().getFullYear()} DOGO. {t("footer.copyright")}</p>
            </div>
        </footer>
    );
}

export default Footer;
