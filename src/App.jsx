import React from "react";
import Products from "./components/shopping/Products";
import Header from "./components/shopping/Header";
import CartContextProvider from "./components/context/cartContext";

const App = () => {
  return (
    <>
      <CartContextProvider>
        <Header /> 
        <Products />
      </CartContextProvider>
    </>
  );
};

export default App;
