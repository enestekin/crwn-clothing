import { ProductCardContainer } from './ProductCard.styled.js';
import Button, { BUTTON_TYPE_CLASSES } from '../button/Button.jsx';
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCard = () => addItemToCart(product);

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCard}
      >
        Add to card
      </Button>
    </ProductCardContainer>
  );
};
export default ProductCard;
