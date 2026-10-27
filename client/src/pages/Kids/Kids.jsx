import CategoryPage from "../../components/CategoryPage/CategoryPage";
import { useEffect, useState } from "react";
import { getCollectionByHandle } from "../../services/shopify";
import "./Kids.css";
import { useTranslation } from "react-i18next";

function Kids() {
    const { t } = useTranslation();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function loadProducts() {
            try {
                const collection = await getCollectionByHandle("kids");

                const formattedProducts = collection.products.nodes.map((product) => ({
                    id: product.handle,
                    shopifyId: product.id,
                    name: product.title,
                    category: product.productType,
                    price: Number(product.priceRange.minVariantPrice.amount),
                    currency: product.priceRange.minVariantPrice.currencyCode,
                    image: product.images?.nodes?.[0]?.url || "",
                    hoverImage: product.images?.nodes?.[1]?.url || "",
                    variants: product.variants?.nodes || [],
                }));

                setProducts(formattedProducts);
            } catch (error) {
                console.error("Error loading Kids collection:", error);
            }
        }

        loadProducts();
    }, []);

  return (
    <CategoryPage
        title={t("categories.kids")}
        description={t("categories.kidsDescription")}
        products={products}
        categories={["All", "Shoes"]}
    />
);
}

export default Kids;
