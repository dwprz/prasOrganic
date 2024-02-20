import { createBrowserRouter } from "react-router-dom";
import Home from "../app/pages/Home/Home";
import Products from "../app/pages/products/Products";
import ProductDetails from "../app/pages/products/ProductDetails/ProductDetails";
import Cart from "../app/pages/Cart/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/products/:id",
    element: <ProductDetails />,
  },
  {
    path: "/cart",
    element: <Cart />
  },
]);

export default router;
