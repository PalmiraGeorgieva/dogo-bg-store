import ProductGrid from "../../components/ProductGrid/ProductGrid";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCollectionByHandle } from "../../services/shopify";
import "./Women.css";

const categories = [
    "All",
    "Sneakers",
    "Boots",
    "Bags",
    "Wallets",
]

function Women() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [shopifyProducts, setShopifyProducts] = useState([]);

    useEffect(() => {
        async function loadProducts() {
            try {
                const collection = await getCollectionByHandle("women");

                const formattedProducts = collection.products.nodes.map((product) => ({
                    id: product.handle,
                    shopifyId: product.id,
                    name: product.title,
                    category: "Sneakers",
                    price: Number(product.priceRange.minVariantPrice.amount),
                    currency: product.priceRange.minVariantPrice.currencyCode,
                    image: product.images?.nodes?.[0]?.url || "",
                    hoverImage: product.images?.nodes?.[1]?.url || "",
                    variants: product.variants?.nodes || [],
                }));

                setShopifyProducts(formattedProducts);

            } catch (error) {
                console.error("Error loading Shopify products:", error);
            }
        }

        loadProducts();
    }, []);

    const allProducts = shopifyProducts;
    const filteredProducts =
        selectedCategory === "All"
            ? allProducts
            : allProducts.filter(
                (product) => product.category === selectedCategory
            );

    return (
        <section className="category-page">
            <div className="category-header">
                <div className="breadcrumb">
                    <Link to="/">Home</Link>
                    <span> / </span>
                    <span>Women</span>
                </div>
                <h1>Women</h1>
                <p>Discover DOGO women's collection</p>
            </div>

            <div className="category-filters">
                {categories.map((category) => (
                    <button
                        key={category}
                        type="button"
                        className={
                            selectedCategory === category
                                ? "active"
                                : ""
                        }
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}

            </div>
            {filteredProducts.length > 0 ? (
                <ProductGrid products={filteredProducts} />
            ) : (
                <p className="no-products">No products found in this category.</p>
            )}
        </section>
    );
}

export default Women;
