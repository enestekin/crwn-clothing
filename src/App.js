import Home from './routes/Home.jsx';
import Shop from './routes/Shop';
import Navigation from './routes/Navigation.jsx';
import SignIn from './routes/Authentication.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigation />,
    children: [
      { index: true, element: <Home /> },
      { path: 'shop', element: <Shop /> },
      { path: 'auth', element: <SignIn /> },
    ],
  },
  {
    path: 'shop',
    element: <Shop />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
