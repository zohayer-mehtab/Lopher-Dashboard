import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import Dashboard from "./Dashboard";
import Campaigns from "./Campaigns";
import Customers from "./Customers";
import AddProduct from "./AddProduct";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Protected from "./Protected";

const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
        <Home />
      </Protected>
    ),
  },
  {
    path: "/home",
    element: (
      <Protected>
        <Home />
      </Protected>
    ),
  },
  {
    path: "/products",
    element: (
      <Protected>
        <Products />
      </Protected>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <Protected>
        <Dashboard />
      </Protected>
    ),
  },
  {
    path: "/campaigns",
    element: (
      <Protected>
        <Campaigns />
      </Protected>
    ),
  },
  {
    path: "/customers",
    element: (
      <Protected>
        <Customers />
      </Protected>
    ),
  },
  {
    path: "/addproduct",
    element: (
      <Protected>
        <AddProduct />
      </Protected>
    ),
  },
  {
    path: "/signin",
    element: <SignIn></SignIn>,
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
]);

export default Router;
