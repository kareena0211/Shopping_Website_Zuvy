import Card from "./Card";
import { faker } from "@faker-js/faker";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
const Products = () => {
  const {
    shopping: { product },
  } = useContext(CartContext);

  const cards = product.map((product) => {
    return <Card key={product.id} data={product} />;
    fh;
  });

  return (
    <div className="grid grid-cols-4 p-5  gap-6 bg-yellow-100 mt-10">
      {cards}
    </div>
  );
};

export default Products;
