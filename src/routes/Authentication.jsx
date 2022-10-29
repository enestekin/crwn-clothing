import SignUpForm from '../components/sign-up/SignUpForm';
import SignInForm from '../components/sign-in/SignIn';
import './Authentication.scss';

const Authentication = () => {
  return (
    <div className='authentication-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};
export default Authentication;
