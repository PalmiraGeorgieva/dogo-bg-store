import ProductGrid from "../ProductGrid/ProductGrid";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./CategoryPage.css";
import { useTranslation } from "react-i18next";

function CategoryPage({
    title,
    description,
    products = [],
    categories = ["All", "Shoes", "Bags", "Accessories"]
}) {
    const { t } = useTranslation();
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredProducts =
        selectedCategory === "All"
            ? products
            : products.filter(
                (product) => product.category === selectedCategory
            );

    return (
        <section className="category-page">
            <div className="category-header">
                <div className="breadcrumb">
                    <Link to="/">{t("categories.home")}</Link>
                    <span> / </span>
                    <span>{title}</span>
                </div>

                <h1>{title}</h1>
                <p>{description}</p>
            </div>

            <div className="category-filters">
                {categories.map((category) => (
                    <button
                        key={category}
                        type="button"
                        className={
                            selectedCategory === category ? "active" : ""
                        }
                        onClick={() => setSelectedCategory(category)}
                    >
                        {t(`categories.${category.toLowerCase()}`)}
                    </button>
                ))}
            </div>

            {filteredProducts.length > 0 ? (
                <ProductGrid products={filteredProducts} />
            ) : (
                <p className="no-products">
                    {t("categories.noProducts")}
                </p>
            )}
        </section>
    );
}

export default CategoryPage;