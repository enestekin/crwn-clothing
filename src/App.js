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
  return <RouterProvider router={router} />;
}

export default App;
