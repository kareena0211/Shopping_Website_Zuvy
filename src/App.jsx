import React, { useState } from "react";
import Products from "./components/shopping/Products";
import Header from "./components/shopping/Header";
import CartContextProvider from "./components/context/cartContext";
import Cart from "./components/shopping/Cart";

const App = () => {
  const [isCart, setIsCart] = useState(false);
  return (
    <div>
      <CartContextProvider>
        <Header isCart={isCart} setIsCart={setIsCart} />
        {isCart ? <Cart /> : <Products />}
      </CartContextProvider>
    </div>
  );
};

export default App;
