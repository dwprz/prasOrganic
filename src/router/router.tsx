import { createBrowserRouter } from "react-router-dom";
import Home from "../app/pages/Home/Home";
import Products from "../app/pages/Products/Products";
import Cart from "../app/pages/Cart/Cart";
import Register from "../app/pages/auth/Register";
import Verification from "../app/fragments/auth/Register/Verification/Verification";
import Login from "../app/pages/auth/Login";
import About from "../app/pages/About/About";
import Contact from "../app/pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/users/register",
    element: <Register />,
  },
  {
    path: "/users/register/verification",
    element: <Verification />
  },
  {
    path: "/users/login",
    element: <Login />
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

export default router;
