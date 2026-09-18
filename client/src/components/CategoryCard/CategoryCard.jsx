import { Link } from "react-router-dom";
import "./CategoryCard.css";

function CategoryCard( { category }) {
    return (
        <Link
           to={category.path}
           className="category-card"
        >
            <img src={category.image} alt={category.className} />
            <div className="category-overlay">
                <h3>{category.name}</h3>
                <span>Discover</span>
            </div>
        </Link>
    )
}

export default CategoryCard;