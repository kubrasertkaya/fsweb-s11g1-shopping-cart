import { createContext, useState } from "react";
import { data } from "../data";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(data);
  const addItem = (item, setCart, cart) => {
    // verilen itemi sepete ekleyin
    setCart([...cart, item]);
  };

  const contextState = {
    addItem,
    products,
    setProducts,
  };
  return (
    <ProductContext.Provider value={contextState}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
