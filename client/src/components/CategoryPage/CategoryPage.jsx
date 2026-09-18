import ProductGrid from "../ProductGrid/ProductGrid";
import { Link } from "react-router-dom";
import "./CategoryPage.css";

function CategoryPage({ title, description, products = []}) {
    return (
        <section className="category-page">
            <div className="category-header">
                <div className="breadcrumb">
               <Link to="/">Home</Link>
               <span> / </span>
               <span>{title}</span>
               </div>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
            {products.length > 0 ? (
                <ProductGrid products={products} />
            ) : (
                 <p className="no-products">No products available yet.</p>
            )}

        </section>
    );
}

export default CategoryPage;
