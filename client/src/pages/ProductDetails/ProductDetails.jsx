import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./ProductDetails.css";

const product = {
    id: "wb026-fre006",
    name: "Freya",
    title: "Дамски бели маратонки на платформа от веган кожа - Warner Bros Looney Tunes Tweety & Sylvester Puddy Tat",
    price: 84.99,
    gender: "Дамски",
    color: "Бял",
    sizes: [36, 37, 38, 39, 40, 41],
    shipping: "1-2 работни дни",
    image: "/products/wb026-fre006/freya.jpg",
};

function ProductDetails() {
    const [selectedSize, setSelectedSize] = useState(null);
    const navigate = useNavigate();


    const handleOrder = () => {
        if (!selectedSize) {
            return;
        }

        navigate("/order", {
            state: {
                product: product,
                selectedSize: selectedSize,
            },
        });
    };

    return (
        <section className="product-details">
             <div className="breadcrumb">
                    <Link to="/">Home</Link>
                    <span> / </span>
                    <Link to="/women">Women</Link>
                    <span> / </span>
                    <span>{product.name}</span>
                </div>    
            <div className="product-gallery"> 
                <img src={product.image} alt={product.name} className="product-main-image" />
            </div>

            <div className="product-details-info">
                <p className="product-code">
                    Product code: {product.id}
                </p>
                <h1>{product.name}</h1>
                <p className="product-title">{product.title}</p>
                <p className="product-details-price">
                    {product.price.toFixed(2)} USD
                </p>
                <div className="product-meta">
                    <p><strong>Пол:</strong> {product.gender}</p>
                    <p><strong>Цвят:</strong> {product.color}</p>
                </div>
                <div className="product-sizes">
                    <h3>Изберете размер</h3>
                    <div className="size-options">
                        {product.sizes.map((size) => (
                            <button 
                              key={size}
                              type="button"
                              className={selectedSize === size ? "selected" : ""}
                              onClick={() => setSelectedSize(size)}

                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>
                <button 
                  className="order-btn" 
                  disabled={!selectedSize}
                  onClick={handleOrder}
                >
                    ЗАЯВИ ПРОДУКТА →
                </button>
                <p className="shipping-info">
                    Очакван срок за доставка: {product.shipping}
                </p>
            </div>
        </section>
    )
}

export default ProductDetails;