import ProductGrid from "../../components/ProductGrid/ProductGrid";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Women.css";

const womenProducts = [
    {
        id: "wb026-fre006",
        name: "Freya",
        category: "Sneakers",
        price: 84.99,
        image: "/products/wb026-fre006/freya.jpg",
        hoverImage: "/products/wb026-fre006/freya-2.jpg",
    },
    {
        id: "wb026-mono001",
        name: "Mono",
        category: "Bags",
        price: 64.99,
        image: "/products/wb026-mono001/monoBag.jpg",
        hoverImage: "/products/wb026-mono001/mono.jpg",
    },
    {
        id: "dga025-cla006",
        name: "Clarisse",
        category: "Wallets",
        price: 34.99,
        image: "/products/dga025-cla006/claWallet.jpg",
        hoverImage: "/products/dga025-cla006/clarisse.jpg"

    },
    {
        id: "dgs022-ftb031",
        name: "Future Boots",
        category: "Boots",
        price: null,
        image: "/products/dgs022-ftb031/womenBoots.jpg",
        hoverImage: "/products/dgs022-ftb031/womenBoots-2.jpg",
    },

];

const categories = [
    "All",
    "Sneakers",
    "Boots",
    "Bags",
    "Wallets",
]

function Women() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredProducts = 
       selectedCategory === "All"
          ? womenProducts
          : womenProducts.filter(
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
