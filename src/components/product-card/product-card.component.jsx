import { useContext } from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import "./product-card.styles.scss";
import { CartContext } from "../../context/cart.context";
const ProductCard = ({ product }) => {
  const { id, name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  const handleAddItemToCart = () => {
    addItemToCart(product);
  };
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name} </span>
        <span className="price">{price} </span>
      </div>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={handleAddItemToCart}
      >
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
