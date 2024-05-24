import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AboutPage from "../Pages/AboutPage/AboutPage";
import HomePage from "../Pages/HomePage/HomePage";
import CartPage from "../Pages/CartPage/CartPage";
import ContactPage from "../Pages/ContactPage/ContactPage";
import ServicePage from "../Pages/ServicePage/ServisePage";
import OrderPage from "../Pages/OrderPage/OrderPage";
import CarDetail from "../Pages/CarDetail/CarDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/:id", element: <CarDetail /> },
      { path: "about", element: <AboutPage /> },
      { path: "cart", element: <CartPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "order", element: <OrderPage /> },
      { path: "service", element: <ServicePage /> },
    ],
  },
]);
