import App from "./App";
import Home from "./components/Home/Home";
import Shop from "./components/shop/Shop";
import Cart from "./components/cart/CartPage";
import {
  TopsSection,
  TShirts,
  Graphic,
  Hoodies,
  Jackets,
  Jeans,
  CargoPants,
  SwpndJoggers,
  Pants,
} from "./components/shop/Clothes";
import { ClothesSection, BottomsSection } from "./components/shop/Clothes";
import {
  ShoesSection,
  CasualNdEvday,
  Sneakers,
  Designer,
} from "./components/shop/Shoes";
import { AccessoriesSection } from "./components/shop/Accessories";
import { Outlet } from "react-router";

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
    element: (
      <div className="tops-wrapper">
        <Outlet />
      </div>
    ),
    children: [
      { index: true, element: <TopsSection /> },
      { path: "t-shirts", element: <TShirts /> },
      { path: "graphic-tees", element: <Graphic /> },
      { path: "hoodies", element: <Hoodies /> },
      { path: "jackets", element: <Jackets /> },
    ],
  },
  {
    path: "bottoms",
    element: (
      <div className="bottoms-wrapper">
        <Outlet />
      </div>
    ),
    children: [
      { index: true, element: <BottomsSection /> },
      { path: "jeans", element: <Jeans /> },
      { path: "cargo-pants", element: <CargoPants /> },
      { path: "sweatpants-&-joggers", element: <SwpndJoggers /> },
      { path: "pants", element: <Pants /> },
    ],
  },
  {
    path: "shoes",
    element: (
      <div className="shoes-wrapper">
        <Outlet />
      </div>
    ),
    children: [
      { index: true, element: <ShoesSection /> },
      { path: "casual-&-everyday", element: <CasualNdEvday /> },
      { path: "sneakers", element: <Sneakers /> },
      { path: "designer-shoes", element: <Designer /> },
    ],
  },
  {
    path: "accessories",
    element: <AccessoriesSection />,
  },
];

export default routes;
