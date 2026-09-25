import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./CategoryCard.css";

function CategoryCard( { category }) {
    const { t } = useTranslation();
    return (
        <Link
           to={category.path}
           className="category-card"
        >
            <img src={category.image} alt={t(category.nameKey)} />
            <div className="category-overlay">
                <h3>{t(category.nameKey)}</h3>
                <span>{t("home.discover")}</span>
            </div>
        </Link>
    )
}

export default CategoryCard;