import Button from '../button/Button';
import CartItem from '../cart-item/CartItem';
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import { useNavigate } from 'react-router-dom';
import './CartDropdown.scss';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={goToCheckoutHandler}>Go To Checkout</Button>
    </div>
  );
};
export default CartDropdown;
