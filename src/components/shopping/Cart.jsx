import React from "react";

const Cart = () => {
  return (
    <div>
      <div>
        <img src="" alt="" />

        <h1>Name</h1>
        <p>Price</p>
        <select name="quantity" id="quantity">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <button>Delete</button>
    </div>
  );
};

export default Cart;
