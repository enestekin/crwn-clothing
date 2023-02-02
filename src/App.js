import { useEffect } from "react";
import { checkUserSession } from "./store/user/user.action";
import { useDispatch } from "react-redux";
import { fetchCategoriesStart } from "./store/categories/category.action";
import Home from "./routes/Home.jsx";
import Category from "./routes/Category.tsx";
import Navigation from "./routes/Navigation.tsx";
import SignIn from "./routes/Authentication.jsx";
import Checkout from "./routes/Checkout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CategoriesPreview from "./routes/CategoriesPreview.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "shop",
        children: [
          { index: true, element: <CategoriesPreview /> },
          { path: ":category", element: <Category /> },
        ],
      },
      { path: "auth", element: <SignIn /> },
      { path: "checkout", element: <Checkout /> },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  useEffect(() => {
    console.log(fetchCategoriesStart(), dispatch(fetchCategoriesStart()));
    dispatch(fetchCategoriesStart());
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
