import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../assets/crown.svg';
import CartIcon from '../components/cart-icon/CartIcon';
import CartDropdown from '../components/cart-dropdown/CartDropdown';
import { UserContext } from '../context/userContext';
import { useContext } from 'react';
import { signOutUser } from '../utils/firebase';
import './Navigation.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          {currentUser ? (
            <span className='nav-link' onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        <CartDropdown />
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
