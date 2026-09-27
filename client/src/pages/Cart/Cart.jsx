import { useEffect, useState } from "react";
import { getCart, updateCartLine, removeCartLine } from "../../services/shopify";
import { useCart } from "../../contexts/useCart";
import "./Cart.css";

function Cart() {
    const [cart, setCart] = useState(null);
    const [loading, setLoading] = useState(null);
    const { setCart: setGlobalCart } = useCart();

    useEffect(() => {
        async function loadCart() {
            const cartId = localStorage.getItem("shopifyCartId");

            if (!cartId) {
                setLoading(false);
                return;
            }

            try {
                const cartData = await getCart(cartId);
                setCart(cartData);
            } catch (error) {
                console.error("Error loading cart:", error);
            } finally {
                setLoading(false);
            }
        }
        loadCart()
    }, []);

    const handleQuantityChange = async (lineId, newQuantity) => {
        if (newQuantity < 1) {
            return;
        }

        try {
            const cartId = localStorage.getItem("shopifyCartId")

            const updatedCart = await updateCartLine(
                cartId,
                lineId,
                newQuantity
            );

            setCart(updatedCart);
            setGlobalCart(updatedCart)
        } catch (error) {
            console.error("Error updating quantity:", error);
        }
    };

    const handleRemoveCartItem = async (lineId) => {
        try {
            const cartId = localStorage.getItem("shopifyCartId");
            const updatedCart = await removeCartLine(
                cartId,
                lineId
            );

            setCart(updatedCart);
            setGlobalCart(updatedCart);
        } catch (error) {
            console.error("Error removing product:", error);
        }
    }
    
    if (loading) {
        return (
            <section className="cart-page">
                <p>Loading cart...</p>
            </section>
        );
    }

    if (!cart || cart.totalQuantity === 0) {
        return (
            <section className="cart-page">
                <h1>Shopping Cart</h1>
                <p>Your cart is empty.</p>
            </section>
        );
    }

    return (
        <section className="cart-page">
            <h1>Shopping Cart</h1>

            <div className="cart-content">
                <div className="cart-items">
                    {cart.lines.nodes.map((line) => (
                        <article className="cart-item" key={line.id}>
                            {line.merchandise.product.featuredImage && (
                                <img
                                    src={line.merchandise.product.featuredImage.url}
                                    alt={
                                        line.merchandise.product.featuredImage.altText ||
                                        line.merchandise.product.title
                                    }
                                />
                            )}

                            <div className="cart-item-info">
                                <h2>{line.merchandise.product.title}</h2>
                                <p>
                                    Size: {line.merchandise.title}
                                </p>
                                <div className="quantity-controls">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleQuantityChange(
                                                line.id,
                                                line.quantity - 1
                                            )
                                        }
                                        disabled={line.quantity <= 1}
                                    >
                                        -
                                    </button>

                                    <span>{line.quantity}</span>

                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleQuantityChange(
                                                line.id,
                                                line.quantity + 1
                                            )
                                        }
                                    >
                                        +
                                    </button>
                                </div>

                                <button
                                    type="button"
                                    className="remove-item-btn"
                                    onClick={() => handleRemoveCartItem(line.id)}
                                >
                                    Remove
                                </button>
                                <p className="cart-item-price">
                                    {line.merchandise.price.amount} {" "}
                                    {line.merchandise.price.currencyCode}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
                <div className="cart-summary">
                    <h2>Order Summary</h2>

                    <div className="cart-total">
                        <span>Total</span>
                        <strong>
                            {cart.cost.totalAmount.amount} {" "}
                            {cart.cost.totalAmount.currencyCode}
                        </strong>
                    </div>

                    <a href={cart.checkoutUrl}
                        className="checkout-btn"
                    >
                        Checkout
                    </a>
                </div>
            </div>
        </section>
    );

}

export default Cart;
