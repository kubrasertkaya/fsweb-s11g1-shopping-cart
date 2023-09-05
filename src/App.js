import React, { useState } from "react";
import { Route } from "react-router-dom";
import { data } from "./data";

import {ProductContext} from "./contexts/ProductContext";

// Bileşenler
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [products, setProducts] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    // verilen itemi sepete ekleyin
  };

  return (
    <ProductContext.Provider value={{products}}> 
    <div className="App">
      <Navigation cart={cart} />

      {/* Routelar */}
      <main className="content">
        <Route exact path="/">
          <Products /*products={products} addItem={addItem} *//>
        </Route>

        <Route path="/cart">
          <ShoppingCart cart={cart} />
        </Route>
      </main>
    </div>
  </ProductContext.Provider>
  );
    
}

export default App;
