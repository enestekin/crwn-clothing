import { Outlet } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../assets/crown.svg';
import CartIcon from '../components/cart-icon/CartIcon.jsx';
import CartDropdown from '../components/cart-dropdown/CartDropdown.jsx';
import { UserContext } from '../context/userContext';
import { useContext } from 'react';
import { signOutUser } from '../utils/firebase';
import { CartContext } from '../context/cartContext';
import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from './Navigation.styled.js';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <NavigationContainer className='navigation'>
        <LogoContainer to='/'>
          <CrwnLogo className='logo' />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>SHOP</NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth'>SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
