import { useContext } from "react";
import { CartContext } from "../context/cartContext";

const Header = () => {
  const {
    shopping: { cart },
  } = useContext(CartContext);
  return (
    <>
      <header className="bg-[#3b0764]">
        <nav className=" text-yellow-100 flex justify-between p-3 text-lg font-sans mx-4">
          <h1>Product Website</h1>
          <button>Cart({cart.length})</button>
        </nav>
      </header>
    </>
  );
};

export default Header;
