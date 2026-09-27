import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductByHandle, createCart, addToCart, getCart } from "../../services/shopify";
import "./ProductDetails.css";
import { useCart } from "../../contexts/useCart";

function ProductDetails() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [loading, setLoading] = useState(true);
    const { setCart } = useCart();

    useEffect(() => {
        async function loadProduct() {
            try {
                const shopifyProduct = await getProductByHandle(productId);
                console.log("SHOPIFY PRODUCT DETAILS:", shopifyProduct);
                setProduct(shopifyProduct);
            } catch (error) {
                console.error("Error loading product:", error);
            } finally {
                setLoading(false);
            }
        }

        loadProduct();
    }, [productId]);

    if (loading) {
        return <p>Loading product...</p>;
    }

    if (!product) {
        return <p>Product not found.</p>;
    }

    const handleOrder = async () => {
        if (!selectedSize) {
            return;
        }

        try {
            const existingCartId = localStorage.getItem("shopifyCartId");

            let cart;

            if (existingCartId) {
                cart = await addToCart(existingCartId, selectedSize);
            } else {
                cart = await createCart(selectedSize);
                localStorage.setItem("shopifyCartId", cart.id);
            }

            console.log("SHOPIFY CART:", cart);
            
            const cartDetails = await getCart(cart.id);
            setCart(cartDetails);
            console.log("CART DETAILS:", cartDetails);
        } catch (error) {
            console.error("Error updating cart:", error);
        }
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
                {product.images?.nodes?.map((image) => (
                    <img
                        key={image.url}
                        src={image.url}
                        alt={image.altText || product.title}
                        className="product-main-image"
                    />
                ))}
            </div>

            <div className="product-details-info">
                <p className="product-code">
                    Product code: {product.id}
                </p>
                <h1>{product.name}</h1>
                <p className="product-title">{product.title}</p>
                <p className="product-details-price">
                    {product.variants.nodes[0].price.amount}{" "}
                    {product.variants.nodes[0].price.currencyCode}
                </p>
                <div className="product-meta">
                    <p><strong>Пол:</strong> {product.gender}</p>
                    <p><strong>Цвят:</strong> {product.color}</p>
                </div>
                <div className="product-sizes">
                    <h3>Изберете размер</h3>
                    <div className="size-options">
                        {product.variants.nodes.map((variant) => (
                            <button
                                key={variant.id}
                                type="button"
                                className={selectedSize === variant.id ? "selected" : ""}
                                onClick={() => setSelectedSize(variant.id)}
                                disabled={!variant.availableForSale}
                            >
                                {variant.title}
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