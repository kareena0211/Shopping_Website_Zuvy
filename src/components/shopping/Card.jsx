import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Card = ({ data }) => {
  const { productName, description, image, price } = data;
  // const notify = () => toast("Item already added");
  const {
    shopping: { cart },
    dispatch,
  } = useContext(CartContext);

  const addToCart = () => {
    if (cart.includes(data)) {
      return toast.error("Item already added");
    }
    dispatch({
      type: "add",
      product: data,
    });
  };

  return (
    <div className="shadow-lg p-4 border border-purple-300">
      <ToastContainer/>
      <section>
        <img src={image} alt="" />
      </section>
      <section className="p-1">
        <div className=" text-[#2e1065] font-bold text-xl mb-2">
          {productName}
        </div>
        <p className="text-gray-700 text-base">{description}</p>
        <p className="text-gray-900 text-base mt-2">Rs. {price}</p>
      </section>
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
