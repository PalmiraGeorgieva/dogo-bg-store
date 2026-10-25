import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Collections.css";


function Collections() {
    const { t } = useTranslation();

    return (
        <section className="collections-page">
            <div className="collections-header">
                <div className="bredcrumb">
                   <Link to="/">{t("categories.home")}</Link>
                   <span> / </span>
                   <span>{t("collections.title")}</span>
                </div>
                <h1>{t("collections.title")}</h1>
                <p>{t("collections.description")}</p>
            </div>

            <p className="no-collections">
                {t("collections.comingSoon")}
            </p>
        </section>
    )
}

export default Collections;