import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import { CheckoutItemContainer } from './CheckoutItem.styled.js';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  return (
    <CheckoutItemContainer>
      <div className='image-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => removeItemFromCart(cartItem)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItemToCart(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price} </span>
      <div
        className='remove-button'
        onClick={() => clearItemFromCart(cartItem)}
      >
        &#10005;
      </div>
    </CheckoutItemContainer>
  );
};
export default CheckoutItem;
