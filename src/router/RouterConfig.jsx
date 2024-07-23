import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

import RootLayout from "../pages/RootLayout.jsx";
import Home from "../pages/Home.jsx";
import Products from "../pages/Products.jsx";
import ProductDetails from "../pages/ProductDetails.jsx";
import Cart from "../pages/Cart.jsx";
// import Contact from "../pages/Contact.jsx"; use lazy load
import ErrorPage from "../pages/ErrorPage.jsx";

const Contact = lazy(() => import('../pages/Contact.jsx'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/Products", element: <Products /> },
      { path: "/Product/:id", element: <ProductDetails /> },
      {
        path: "/Contacts",
        element: (
          <Suspense fallback={<p>Loading contacts...</p>}>
            <Contact />
          </Suspense>
        ),
      },
      { path: "/Cart", element: <Cart /> },
    ],
  },
]);

export function RouterConfig() {
  return <RouterProvider router={router} />;
}
