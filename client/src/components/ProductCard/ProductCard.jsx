import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ product }) {
    return (
        <article className="product-card">
            <Link to={`/products/${product.id}`}>
              <div className="product-image">
                <img src={product.image}  alt={product.name} className="primary-image" />
                {product.hoverImage && (
                    <img 
                      src={product.hoverImage} 
                      alt={product.name}
                      className="hover-image"
                    />
                )}
              </div>
            </Link>

            <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-category">{product.category}</p>
            </div>
        </article>
    )
}

export default ProductCard;