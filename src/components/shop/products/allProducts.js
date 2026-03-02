import { clothesProducts } from "./clothesProducts.js";
import { bottomProducts } from "./clothesProducts.js";
import { shoesProducts } from "./shoesProducts.js";
import { accProducts } from "./accProducts.js";
import { spotlightProducts } from "./spotlightProducts.js";

export const allProducts = [
  ...clothesProducts,
  ...bottomProducts,
  ...shoesProducts,
  ...accProducts,
  ...spotlightProducts,
];
