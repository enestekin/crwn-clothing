import { useState } from 'react';
import { useDispatch } from 'react-redux';

import FormInput from '../form-input/FormInput.jsx';
import Button from '../button/Button.jsx';

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase';

import { SignUpContainer } from './SignUpForm.styled.js';
import { signUpStart } from '../../store/user/user.action.js';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const dispatch = useDispatch();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('passwords do not match');
      return;
    }

    try {
      dispatch(signUpStart(email, password, displayName));

      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('cannot crate user, email already in use');
      } else {
        console.log(error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Display Name'
          type='text'
          value={displayName}
          name='displayName'
          onChange={handleChange}
          required
        />
        <FormInput
          label='Email'
          type='email'
          value={email}
          name='email'
          onChange={handleChange}
          required
        />
        <FormInput
          label='Password'
          type='password'
          value={password}
          name='password'
          onChange={handleChange}
          required
        />
        <FormInput
          label='Confirm Password'
          type='password'
          value={confirmPassword}
          name='confirmPassword'
          onChange={handleChange}
          required
        />
        <Button type='submit'>Sign Up</Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
