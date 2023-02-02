import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from "../../store/cart/cart.action";

import { CheckoutItemContainer } from "./CheckoutItem.styled";

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CheckoutItemContainer>
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div
          className="arrow"
          onClick={() => dispatch(removeItemFromCart(cartItems, cartItem))}
        >
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div
          className="arrow"
          onClick={() => dispatch(addItemToCart(cartItems, cartItem))}
        >
          &#10095;
        </div>
      </span>
      <span className="price">{price} </span>
      <div
        className="remove-button"
        onClick={() => dispatch(clearItemFromCart(cartItems, cartItem))}
      >
        &#10005;
      </div>
    </CheckoutItemContainer>
  );
};
export default CheckoutItem;
