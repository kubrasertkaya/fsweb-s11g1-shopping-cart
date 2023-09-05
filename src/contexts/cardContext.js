import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const initialChart = JSON.parse(localStorage.getItem("cart"));
    if (initialChart) {
      return initialChart;
    } else {
      return [];
    }
  });

  const removeItem = (item) => {
    // verilen itemi sepete ekleyin
    setCart(cart.filter((list) => item !== list.id));
  };

  const contextState = {
    cart,
    setCart,
    removeItem,
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={contextState}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
