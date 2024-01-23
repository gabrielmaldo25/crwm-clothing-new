import ShoppingIcon from "../../assets/shopping-icon";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { CartIconContainer, ItemCount, ShopIcon } from "./cart-icon.styles";

const CartIcon = () => {
  const { isCartOpen, setCartIsOpen, cartCount } = useContext(CartContext);
  const toggleCartOpen = () => {
    setCartIsOpen(!isCartOpen);
  };
  return (
    <CartIconContainer onClick={toggleCartOpen}>
      <ShopIcon />
      <ItemCount>{cartCount} </ItemCount>{" "}
    </CartIconContainer>
  );
};

export default CartIcon;
