import { useEffect, useState } from "react";
import "./ScrollToTopButton.css";

function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    if(!isVisible) return null;

    return (
        <button type="button"
              className="scroll-to-top"
              onClick={scrollToTop}
              aria-label="Върни се в началото"
              title="Върни се в началото"
        >
            ↑
        </button>
    );
}

export default ScrollToTopButton;
