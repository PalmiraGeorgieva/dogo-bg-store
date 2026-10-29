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
    const [activeImage, setActiveImage] = useState(0);
    const { setCart } = useCart();

    useEffect(() => {
        async function loadProduct() {
            setActiveImage(0);
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

    if (loading) {
        return <p>Loading product...</p>;
    }

    if (!product) {
        return <p>Product not found.</p>;
    }

    const collections = product.collections?.nodes || [];

    const mainCategory = collections.find((collection) =>
       ["women", "men", "kids"].includes(collection.handle.toLowerCase())
    );

    const categoryPath = mainCategory ? `/${mainCategory.handle.toLowerCase()}` : "/collections";

    const categoryName = mainCategory ? mainCategory.title : "Колекции";

    return (
        <section className="product-details">
            <div className="breadcrumb">
                <Link to="/">Home</Link>
                <span> / </span>
                <Link to={categoryPath}>{categoryName}</Link>
                <span> / </span>
                <span>{product.title}</span>
            </div>

            <div className="product-details-layout">
            <div className="product-gallery">
              <div className="product-thumbnails">
                {product.images?.nodes?.map((image, index) => (
                    <button
                       key={image.url}
                       type="button"
                       className={`thumbnail-btn ${
                          activeImage === index ? "active" : ""
                       }`}
                       onClick={() => setActiveImage(index)}
                       aria-label={`Покажи снимка ${index + 1}`}
                    >
                        <img src={image.url} alt={image.altText || product.name} />
                    </button>
                ))}
              </div>
              <div className="product-image-viewer">
                {product.images?.nodes?.[activeImage] && (
                    <img src={product.images.nodes[activeImage].url}
                        alt={
                            product.images.nodes[activeImage].altText ||
                            product.name
                        }
                        className="product-main-image"
                    />
                )}
              </div>
            </div>

            <div className="product-details-info">

                <h1>{product.title || product.name}</h1>

                <p className="product-details-price">
                    {product.variants.nodes[0].price.amount}{" "}
                    {product.variants.nodes[0].price.currencyCode}
                </p>

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
                    type="button"
                    disabled={!selectedSize}
                    onClick={handleOrder}
                >
                    ЗАЯВИ ПРОДУКТА →
                </button>
                <div className="product-accordions">
                    <details className="product-accordion">
                        <summary>
                            Описание и характеристики
                            </summary>
                            <div
                                className="accordion-content"
                                dangerouslySetInnerHTML={{
                                    __html: product.descriptionHtml || "",
                                }}
                            />
                    </details>
                    <details className="product-accordion">
                        <summary>Информация за доставка</summary>
                        <div className="accordion-content">
                            {product.shipping ? (
                                <p>
                                    Очакван срок за доставка: {" "}
                                    {product.shipping}
                                </p>
                            ) : (
                                <p>
                                    За повече информация относно доставката
                                    вижте нашата страница за доставка.
                                </p>
                            )}
                        </div>
                    </details>
                </div>

            </div>
            </div>
        </section>
    );
}
export default ProductDetails;