import CategoryPage from "../../components/CategoryPage/CategoryPage";
import { useEffect, useState } from "react";
import { getCollectionByHandle } from "../../services/shopify";
import "./Men.css";

function Men() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function loadProducts() {
            try {
                const collection = await getCollectionByHandle("men");

                const formattedProducts = collection.products.nodes.map((product) => ({
                    id: product.handle,
                    shopifyId: product.id,
                    name: product.title,
                    category: "Men",
                    price: Number(product.priceRange.minVariantPrice.amount),
                    currency: product.priceRange.minVariantPrice.currencyCode,
                    image: product.images?.nodes?.[0]?.url || "",
                    hoverImage: product.images?.nodes?.[1]?.url || "",
                    variants: product.variants?.nodes || [],
                }));

                setProducts(formattedProducts);
            } catch (error) {
                console.error("Error loading Men collection:", error);
            }
        }

        loadProducts();
    }, []);

    return (
        <CategoryPage
            title="Men"
            description="Discover DOGO men's collection"
            products={products}
        />
    );
}

export default Men;
