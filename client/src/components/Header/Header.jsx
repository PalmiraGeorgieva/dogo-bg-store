import { NavLink } from "react-router-dom";
import LogoImage from "../../assets/Dogo.png";
import { useState, useRef, useEffect } from "react";
import { FiShoppingBag } from "react-icons/fi";
import "./Header.css";
import { useTranslation } from "react-i18next";
import { FiSearch, FiUser } from "react-icons/fi";
import { useCart } from "../../contexts/useCart";
import Search from "../Search/Search";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const searchRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if(
                searchRef.current &&
                !searchRef.current.contains(event.target)
            ) {
                setIsSearchOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const closeMenu = () => {
        setMenuOpen(false)
    }

    const {t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
        localStorage.setItem("language", language)
    };



    const { cartCount } = useCart();
    return (
        <header className="header">
            <div className="header-top">
                <div className="header-left">
                    <button className="menu-btn"
                      onClick={() => setMenuOpen(!menuOpen)}
                         aria-label="Toggle menu"
                    >☰</button>
                </div>

                <NavLink to="/" className="logo" onClick={closeMenu}>
                    <img src={LogoImage} alt="DOGO"/>
                </NavLink>


                <div className="header-actions">
                    <NavLink to="/cart" className="cart-icon" aria-label="Shopping cart">
                       <FiShoppingBag />
                       {cartCount > 0 && (
                          <span className="cart-count">{cartCount}</span>
                       )}
                    </NavLink>
                  <div className="search-wrapper" ref={searchRef}>
                  <button type="button" className="header-icon" 
                          aria-label={t("navigation.search")} 
                          title={t("navigation.search")}
                          onClick={() => setIsSearchOpen(!isSearchOpen)}
                          >
                            <FiSearch />
                  </button>
                  {isSearchOpen && <Search />}
                  </div>
                  <NavLink to="/login"
                        className="header-icon"
                        aria-label={t("navigation.account")}
                        title={t("navigation.account")}
                    >
                        <FiUser />
                    </NavLink>

                  <div className="language-switcher">
                     <button
                        type="button"
                        onClick={() => changeLanguage("bg")}
                        className={i18n.language === "bg" ? "active" : ""}
                     >BG</button>
                     <span>/</span>
                     <button
                         type="button"
                        onClick={() => changeLanguage("en")}
                        className={i18n.language === "en" ? "active" : ""}
                     >EN</button>
                  </div>
                </div>
            </div>
            <nav className={`main-navigation ${menuOpen ? "open" : ""}`}>
                <NavLink to="/women" onClick={closeMenu}>{t("navigation.women")}</NavLink>
                <NavLink to="/men" onClick={closeMenu}>{t("navigation.men")}</NavLink>
                <NavLink to="/kids" onClick={closeMenu}>{t("navigation.kids")}</NavLink>
                <NavLink to="/deals" onClick={closeMenu}>{t("navigation.deals")}</NavLink>
                <NavLink to="/collections" onClick={closeMenu}>{t("navigation.collections")}</NavLink>
            </nav>
        </header>
    );
}

export default Header;