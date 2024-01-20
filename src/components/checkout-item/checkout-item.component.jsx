import { useContext } from "react";
import "./checkout-item.styles.scss";
import { CartContext } from "../../context/cart.context";
const CheckoutItem = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  const { removeItemFromCart, addItemToCart, decrementItemFromCart } =
    useContext(CartContext);

  const handleRemoveItem = () => removeItemFromCart(cartItem);
  const handleIncrement = () => addItemToCart(cartItem);
  const handleDecrement = () => decrementItemFromCart(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} />
      </div>

      <span className="name">{name} </span>
      <span className="quantity">
        <div className="arrow" onClick={handleDecrement}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={handleIncrement}>
          &#10095;{" "}
        </div>
      </span>
      <span className="price">{price} </span>
      <div className="remove-button" onClick={handleRemoveItem}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
