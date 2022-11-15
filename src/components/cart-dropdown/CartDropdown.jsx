import Button from '../button/Button.jsx';
import CartItem from '../cart-item/CartItem';
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import { useNavigate } from 'react-router-dom';
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from './CartDropdown.styled.js';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>Go To Checkout</Button>
    </CartDropdownContainer>
  );
};
export default CartDropdown;
