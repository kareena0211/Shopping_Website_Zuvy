import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";

const Card = ({ data }) => {
  const { productName, description, image, price } = data;

  const { dispatch } = useContext(CartContext);

  const addToCart = () => {
    dispatch({
      type: "add",
      product: data,
    });
  };

  return (
    <div className="rounded shadow-lg p-4 bg-[#f5d0fe]">
      <div>
        <img src={image} alt="" />
      </div>
      <div className="p-1">
        <div className=" text-[#2e1065] font-bold text-xl mb-2">
          {productName}
        </div>
        <p className="text-gray-700 text-base">{description}</p>
        <p className="text-gray-900 text-base mt-2">Rs. {price}</p>
      </div>
      <button
        onClick={addToCart}
        className="bg-[#2e1065] text-[#fef3c7] p-2 rounded-lg"
      >
        Add to cart
      </button>
    </div>
  );
};

export default Card;
