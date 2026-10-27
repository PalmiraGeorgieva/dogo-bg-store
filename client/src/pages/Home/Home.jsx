import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import { getCollectionByHandle } from "../../services/shopify";
import { useTranslation } from "react-i18next";
import bannerDogo from "../../assets/banerDogo.png";
import "./Home.css";


const categories = [
    {
        id: 1,
        name: "Women",
        nameKey: "home.women",
        image: "/categories/womenCategory.png",
        path: "/women",
    },
    {
        id: 2,
        name: "Men",
        nameKey: "home.men",
        image: "/categories/menCategory.png",
        path: "/men",
    },
    {
        id: 3,
        name: "Kids",
        nameKey: "home.kids",
        image: "/categories/kidsCategory.png",
        path: "/kids",
    },
];

function Home() {
    const { t } = useTranslation();

    const [products, setProducts] = useState([]);

useEffect(() => {
    async function loadRandomProducts() {
        try {
            const collection = await getCollectionByHandle("women");

            if (!collection) return;

            const allProducts = collection.products.nodes;

            // Разбъркваме продуктите и избираме 4
            const randomProducts = [...allProducts]
                .sort(() => Math.random() - 0.5)
                .slice(0, 4);

            const formattedProducts = randomProducts.map((product) => ({
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
            console.error("Error loading random products:", error);
        }
    }

    loadRandomProducts();
}, []);

    return (
        <div className="home">
           <section className="hero">
            <div className="hero-banner"  style={{ backgroundImage: `url(${bannerDogo})`}} />
            <div className="hero-content">
                <h1>{t("home.heroTitle")}</h1>
                <p>{t("home.heroDescription")}</p>

                <div className="hero-actions">
                    <Link to="/women">{t("home.shopWomen")}</Link>
                    <Link to="/men">{t("home.shopMen")}</Link>
                </div>
            </div>
           </section>
           <section className="new-arrivals">
            <div className="section-heading">
                <h2>{t("home.newArrivals")}</h2>
                <p>{t("home.newArrivalsDescription")}</p>
            </div>
            <ProductGrid products={products} />

           </section>
           <section className="featured-categories">
            <div className="section-heading">
                <h2>{t("home.shopByCategory")}</h2>
            </div>
            <div className="category-grid">
                {categories.map((category) => (
                    <CategoryCard
                      key={category.id}
                      category={category}
                     />
                ))}
            </div>
           </section>
        </div>
    )
}

export default Home;