import ProductGrid from "../ProductGrid/ProductGrid";
import { Link } from "react-router-dom";
import "./CategoryPage.css";
import { useTranslation } from "react-i18next";

function CategoryPage({ title, description, products = []}) {
    const { t } = useTranslation();

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
            {products.length > 0 ? (
                <ProductGrid products={products} />
            ) : (
                 <p className="no-products">{t("categories.noProducts")}</p>
            )}

        </section>
    );
}

export default CategoryPage;
