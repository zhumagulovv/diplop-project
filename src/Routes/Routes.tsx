import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AboutPage from "../pages/AboutPage/AboutPage";
import HomePage from "../pages/HomePage/HomePage";
import CartPage from "../pages/CartPage/CartPage";
import ContactPage from "../pages/ContactPage/ContactPage";
import ServicePage from "../pages/ServicePage/ServisePage";
import OrderPage from "../pages/OrderPage/OrderPage";
import CarDetail from "../pages/CarDetail/CarDetail";

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
