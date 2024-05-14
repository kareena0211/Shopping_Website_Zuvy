import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";
import CartCard from "./CartCard";
const Cart = () => {
  const {
    shopping: { cart },
  } = useContext(CartContext);

  const cartCard = cart.map((item) => {
    return <CartCard key={item.id} item={item} />;
  });
  return (
    <>
      <section className="grid grid-cols-4 p-5  gap-6 bg-yellow-100">
        {cartCard}
      </section>
    </>
  );
};

export default Cart;
