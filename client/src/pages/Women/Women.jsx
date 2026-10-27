import ProductGrid from "../../components/ProductGrid/ProductGrid";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCollectionByHandle } from "../../services/shopify";
import "./Women.css";
import { useTranslation } from "react-i18next";

const categories = [
    "All",
    "Shoes",
    "Bags",
    "Accessories",
];

function Women() {
    const { t } = useTranslation();

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
                    category: product.productType,
                    subcategory: product.category?.name || "Uncategorized",
                    price: Number(product.priceRange.minVariantPrice.amount),
                    currency: product.priceRange.minVariantPrice.currencyCode,
                    image: product.images?.nodes?.[0]?.url || "",
                    hoverImage: product.images?.nodes?.[1]?.url || "",
                    variants: product.variants?.nodes || [],
                }));

                const categoryOrder = {
                    Shoes: 1,
                    Bags: 2,
                    Accessories: 3,
                };

                const subcategoryOrder = {
                    Sneakers: 1,
                    Sandals: 2,
                    Boots: 3,

                    Handbags: 4,
                    "Tote bags": 5,
                    "Shopper bags": 6,
                    Backpacks: 7,
                    "Duffel bags": 8,

                    Wallets: 9,
                    "Passport holders": 10,
                };

                const sortedProducts = [...formattedProducts].sort((a, b) => {
                    const orderA = categoryOrder[a.category] ?? 99;
                    const orderB = categoryOrder[b.category] ?? 99;

                    // Първо сортираме по основна категория
                    if (orderA !== orderB) {
                        return orderA - orderB;
                    }

                    // След това сортираме по подкатегория
                    const subA = a.subcategory?.trim().toLowerCase();
                    const subB = b.subcategory?.trim().toLowerCase();

                    const subOrderA = Object.entries(subcategoryOrder).find(
                        ([name]) => name.toLowerCase() === subA
                    )?.[1] ?? 99;

                    const subOrderB = Object.entries(subcategoryOrder).find(
                        ([name]) => name.toLowerCase() === subB
                    )?.[1] ?? 99;

                    return subOrderA - subOrderB || a.name.localeCompare(b.name);
                });

                setShopifyProducts(sortedProducts);

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
                    <Link to="/">{t("categories.home")}</Link>
                    <span> / </span>
                    <span>{t("categories.women")}</span>
                </div>
                <h1>{t("categories.women")}</h1>
                <p>{t("categories.womenDescription")}</p>
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
                        {t(`categories.${category.toLowerCase()}`)}
                    </button>
                ))}

            </div>
            {filteredProducts.length > 0 ? (
                <ProductGrid products={filteredProducts} />
            ) : (
                <p className="no-products">{t("categories.noProducts")}</p>
            )}
        </section>
    );
}

export default Women;
