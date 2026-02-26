import App from "./App";
import Home from "./components/Home/Home";
import Shop from "./components/shop/Shop";
import Cart from "./components/cart/CartPage";
import { ClothesSection } from "./components/shop/Clothes";
import { TopsSection } from "./components/shop/Clothes";
import { BottomsSection } from "./components/shop/Clothes";
import { ShoesSection } from "./components/shop/Shoes";
import { AccessoriesSection } from "./components/shop/Accessories";

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
  {
    path: "clothes",
    element: <ClothesSection />,
  },
  {
    path: "tops",
    element: <TopsSection />,
  },
  {
    path: "bottoms",
    element: <BottomsSection />,
  },
  {
    path: "shoes",
    element: <ShoesSection />,
  },
  {
    path: "accessories",
    element: <AccessoriesSection />,
  },
];

export default routes;
