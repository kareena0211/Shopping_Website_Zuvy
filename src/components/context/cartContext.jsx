import { createContext, useContext, useReducer, useState } from "react";
import { faker } from "@faker-js/faker";
import { CardReducer } from "../reducer/CardReducer";
export const CartContext = createContext();

function CartContextProvider({ children }) {
  const product = [];
  for (let i = 0; i < 10; i++) {
    product.push({
      id: faker.database.mongodbObjectId(),
      productName: faker.commerce.productName(),
      price: faker.commerce.price(),
      description: faker.commerce.productDescription(),
      image: faker.image.url(),
    });
  }

  const [shopping, dispatch] = useReducer(CardReducer, {
    product,
    cart: [],
  });
  return (
    <>
      <CartContext.Provider value={{ shopping, dispatch }}>
        {children}
      </CartContext.Provider>
    </>
  );
}

export default CartContextProvider;
