import CategoryPage from "../../components/CategoryPage/CategoryPage";
import { useEffect, useState } from "react";
import { getCollectionByHandle } from "../../services/shopify";
import "./Kids.css";

function Kids() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function loadProducts() {
            try {
                const collection = await getCollectionByHandle("kids");

                const formattedProducts = collection.products.nodes.map((product) => ({
                    id: product.handle,
                    shopifyId: product.id,
                    name: product.title,
                    category: "Kids",
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
            title="Kids"
            description="Discover DOGO kids' collection"
            products={products}
        />
    );
}

export default Kids;
