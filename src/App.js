import { useEffect } from 'react';
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from '../src/utils/firebase';
import { getCategoriesAndDocuments } from '../src/utils/firebase';
import { setCurrentUser } from './store/user/user.action';
import { setCategoriesArray } from './store/categories/category.action';
import { useDispatch } from 'react-redux';
import Home from './routes/Home.jsx';
import Category from './routes/Category.jsx';
import Navigation from './routes/Navigation.jsx';
import SignIn from './routes/Authentication.jsx';
import Checkout from './routes/Checkout.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CategoriesPreview from './routes/CategoriesPreview.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigation />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'shop',
        children: [
          { index: true, element: <CategoriesPreview /> },
          { path: ':category', element: <Category /> },
        ],
      },
      { path: 'auth', element: <SignIn /> },
      { path: 'checkout', element: <Checkout /> },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments();
      dispatch(setCategoriesArray(categoriesArray));
    };
    getCategoriesMap();
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
