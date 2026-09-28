import { useState } from "react";
import { searchProducts } from "../../services/shopify";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Search.css";

function Search() {
    const [searchTerm, setSearchTerm] = useState("");
    const [products, setProducts] = useState([]);
    const [hasSearched, setHasSearched] = useState(false);
    const { t } = useTranslation();

    const handleSearch = async (e) => {
        e.preventDefault();

        if (!searchTerm.trim()) {
            return;
        }
        setProducts([]);
        setHasSearched(false);      

        try {
            const results = await searchProducts(searchTerm);
            setProducts(results);
            setHasSearched(true)

        } catch (error) {
            console.error("Search error:", error);
            
        }
    };

    return (
        <div className="search">
            <form onSubmit={handleSearch}>
                <input
                  type="text"
                  placeholder={t("search.placeholder")}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit">
                   {t("search.button")}
                </button>
            </form>
            {products.length > 0 && (
                <div className="search-results">
                    {products.map((product) => (
                      <Link
                          key={product.id}
                          to={`/products/${product.handle}`}
                          className="search-result"
                      >
                        {product.images.nodes[0] && (
                            <img src={product.images.nodes[0].url} 
                            alt={product.images.nodes[0].altText || product.title} />
                        )}
                        <div className="search-result-info">
                            <span>{product.title}</span>
                            <span>
                                {product.priceRange.minVariantPrice.amount}{" "}
                                {product.priceRange.minVariantPrice.currencyCode}
                            </span>
                               
                        </div>
                      </Link>
                    ))}
                </div>
            )}
            {hasSearched && products.length === 0 && (
                <p className="no-results">
                    {t("search.noResults")}
                </p>
            )}
        </div>
    );
}

export default Search;
