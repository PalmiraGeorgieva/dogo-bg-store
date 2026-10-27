import CategoryPage from "../../components/CategoryPage/CategoryPage";
import { useEffect, useState } from "react";
import { getCollectionByHandle } from "../../services/shopify";
import "./Men.css";
import { useTranslation } from "react-i18next";

function Men() {
    const { t } = useTranslation();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function loadProducts() {
            try {
                const collection = await getCollectionByHandle("men");

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

                    if (orderA !== orderB) {
                        return orderA - orderB;
                    }

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

                setProducts(sortedProducts);
            } catch (error) {
                console.error("Error loading Men collection:", error);
            }
        }

        loadProducts();
    }, []);

    return (
        <CategoryPage
            title={t("categories.men")}
            description={t("categories.menDescription")}
            products={products}
        />
    );
}

export default Men;
