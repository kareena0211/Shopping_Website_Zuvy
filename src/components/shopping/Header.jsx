import { useContext, useState } from "react";
import { CartContext } from "../context/cartContext";

const Header = ({ isCart, setIsCart }) => {
  const {
    shopping: { cart },
  } = useContext(CartContext);

  const [backButton, setBackButton] = useState(false);

  function handelCartButton() {
    setBackButton(true);
    setIsCart(true);
  }

  function backToHome() {
    setIsCart(false);
    setBackButton(false);
  }
  return (
    <>
      <header className="bg-[#3b0764]">
        <nav className=" text-yellow-100 flex justify-between p-3 text-lg font-sans mx-4">
          <h1>Product Website</h1>
          <div>
            {backButton ? (
              <button onClick={backToHome} className="mr-10">
                Back to Home
              </button>
            ) : (
              ""
            )}

            <button onClick={handelCartButton}>Cart({cart.length})</button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
