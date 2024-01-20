import "./cart-icon.styles.scss";

import ShoppingIcon from "../../assets/shopping-icon";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const CartIcon = () => {
  const { isCartOpen, setCartIsOpen, cartCount } = useContext(CartContext);
  const toggleCartOpen = () => {
    setCartIsOpen(!isCartOpen);
  };
  return (
    <div className="cart-icon-container" onClick={toggleCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount} </span>{" "}
    </div>
  );
};

export default CartIcon;
