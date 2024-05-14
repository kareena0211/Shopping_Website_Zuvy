import React from "react";

const CartCard = ({ item }) => {
  const { image, price, productName } = item;
  return (
    <>
      <div className="shadow-lg p-4 border border-purple-300">
        <img src={image} alt="" />

        <h1 className=" text-[#2e1065] font-bold text-xl mb-2">
          {productName}
        </h1>
        <p className="text-gray-900 text-base mt-2">Rs.{price}</p>
        <select
          name="quantity"
          id="quantity"
          className="text-gray-900 text-base mt-2 p-1"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <div>
          <button className="bg-[#2e1065] text-[#fef3c7] p-2 rounded-lg">
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default CartCard;
