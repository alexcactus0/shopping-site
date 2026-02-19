import App from "./App";
import Home from "./components/Home/Home";
import Shop from "./components/shop/Shop";
import Cart from "./components/cart/CartPage";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "home",
    element: <Home />,
  },
  {
    path: "shop",
    element: <Shop />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
];

export default routes;
