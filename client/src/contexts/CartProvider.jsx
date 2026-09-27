import { useEffect, useState } from "react";
import { getCart } from "../services/shopify";
import CartContext from "./cartContext";


function CartProvider({ children }) {
    const [cart, setCart] = useState(null);

     useEffect(() => {
        async function loadCart() {
            const cartId = localStorage.getItem("shopifyCartId");

            if (!cartId) {
                return;
            }

            try {
                const cartData = await getCart(cartId);
                setCart(cartData);
            } catch (error) {
                console.error("Error loading cart:", error);
            } 
        }
        loadCart();
    }, []);

    return (
        <CartContext.Provider
          value={{
             cart,
             setCart,
             cartCount: cart?.totalQuantity || 0,
          }}
        >
            {children}
        </CartContext.Provider>
    );

}
export default CartProvider;