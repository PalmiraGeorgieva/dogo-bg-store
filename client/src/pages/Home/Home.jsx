import { Link } from "react-router-dom";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import { useTranslation } from "react-i18next";
import bannerDogo from "../../assets/banerDogo.png";
import "./Home.css";

const products = [
    {
        id: "dgs026-fio007",
        name: "Fiora",
        category: "Ankle Sneakers",
        image: "/products/dgs026-fio007/womenSnikers.jpg",
    },
    {
        id: "wb026-tag039",
        name: "Tag Bag Large",
        category: "Tote Bags",
        image: "/products/wb026-tag039/womenBag.jpg",

    },
    {
        id: "dgs022-ftb031",
        name: "Future Boots",
        category: "Long Boots",
        image: "/products/dgs022-ftb031/womenBoots.jpg",
    },
    {
        id: "dga025-mir002",
        name: "Mira",
        category: "Wallets",
        image: "/products/dga025-mir002/womenWallet.jpg",
    },
];

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