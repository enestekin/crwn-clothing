import SignUpForm from '../components/sign-up/SignUpForm';
import SignInForm from '../components/sign-in/SignInForm';
import { AuthenticationContainer } from './Authentication.styled.js';

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};
export default Authentication;
