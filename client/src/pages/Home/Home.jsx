import { Link } from "react-router-dom";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
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
        image: "/categories/womenCategory.png",
        path: "/women",
    },
    {
        id: 2,
        name: "Men",
        image: "/categories/menCategory.png",
        path: "/men",
    },
    {
        id: 3,
        name: "Kids",
        image: "/categories/kidsCategory.png",
        path: "/kids",
    },
];

function Home() {
    return (
        <div className="home">
           <section className="hero">
            <div className="hero-content">
                <h1>Step Into Art</h1>
                <p>Discover the latest DOGO collection</p>

                <div className="hero-actions">
                    <Link to="/women">Shop Women</Link>
                    <Link to="/men">Shop Men</Link>
                </div>
            </div>
           </section>
           <section className="new-arrivals">
            <div className="section-heading">
                <h2>New Arrivals</h2>
                <p>Discover our latest designs</p>
            </div>
            <ProductGrid products={products} />

           </section>
           <section className="featured-categories">
            <div className="section-heading">
                <h2>Shop by Category</h2>
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