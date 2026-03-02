import Nav from "../Nav";
import { ShoesCategory } from "./Shoes";
import { ClothesCategory, BottomsCategory } from "./Clothes";
import { AccessoryCategory } from "./Accessories";
import Footer from "../Home/Footer";

const Shop = () => {
  return (
    <>
      <ClothesCategory title="TOPS" dec={false} />
      <BottomsCategory title="BOTTOMS" dec={false} />
      <ShoesCategory title="SHOES" dec={false} />
      <AccessoryCategory title="ACCESSORIES" dec={false} />
      <Footer />
    </>
  );
};

export default Shop;
