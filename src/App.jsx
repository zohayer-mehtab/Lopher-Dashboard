import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { Dashboard } from "./pages/Dashboard";
import { Campaigns } from "./pages/Campaigns";
import { Customers } from "./pages/Customers";
import { AddProduct } from "./pages/AddProduct";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Protected } from "./pages/Protected";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthContext } from "./Context/AuthContext";

function App() {
  const router = createBrowserRouter([
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
  return (
    <>
      <AuthContext>
        <RouterProvider router={router}></RouterProvider>
      </AuthContext>

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/addproduct" element={<AddProduct />} />
      </Routes> */}
    </>
  );
}

export default App;
