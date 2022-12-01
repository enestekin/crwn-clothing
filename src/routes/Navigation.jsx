import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../assets/crown.svg';
import CartIcon from '../components/cart-icon/CartIcon.jsx';
import CartDropdown from '../components/cart-dropdown/CartDropdown.jsx';
import { signOutUser } from '../utils/firebase';
import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from './Navigation.styled.js';
import { selectCurrentUser } from '../store/user/user.selector';
import { selectIsCartOpen } from '../store/cart/cart.selector';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

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
