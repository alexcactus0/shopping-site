import { useFetchImages } from "../../API/pexelsAPI";
import { Card } from "../Home/Spotlight";
import { clothesProducts, bottomProducts } from "./products/clothesProducts.js";
import Footer from "../Home/Footer";

const Clothes = () => {
  return (
    <>
      <Tops />
      <Bottoms />
    </>
  );
};

const topsIds = [
  8148577, 22441317, 20669538, 8217415, 22441291, 6311642, 9286317, 6311670,
  6311449, 6311628,
];

export const ClothesCategory = ({ title, selectedIds, dec = true }) => {
  const images = useFetchImages(topsIds);
  const getImageById = (id) => images.find((img) => img.id === id)?.data;

  const selectedProducts = selectedIds
    ? clothesProducts.filter((product) => selectedIds.includes(product.id))
    : clothesProducts;

  return (
    <>
      <div className="flex flex-col items-center pb-10">
        <div className="accTitle w-[95em] pl-[6em] pb-10 pt-10">
          <p>{title}</p>
          <p>{selectedProducts.length} products</p>
        </div>

        <div className="gap-10 grid grid-cols-5 place-content-center pl-5 pb-14 pt-4">
          {selectedProducts.map((product) => (
            <Card
              key={product.id}
              product={product}
              title={product.category}
              name={product.category}
              src={getImageById(product.imageId)?.src?.original}
              size="200px"
              text={product.name}
              price={product.price}
            />
          ))}
        </div>
      </div>
      {dec && <Footer />}
    </>
  );
};

const Tops = () => {
  return <ClothesCategory title="TOPS" />;
};

export const TShirts = () => {
  return (
    <ClothesCategory
      title="T-SHIRTS"
      selectedIds={[
        "orange-cropped-t-shirt",
        "dark-blue-t-shirt",
        "white-t-shirt",
      ]}
    />
  );
};

export const Graphic = () => {
  return (
    <ClothesCategory
      title="GRAPHIC TEES"
      selectedIds={[
        "orange-cropped-t-shirt",
        "dark-blue-t-shirt",
        "white-t-shirt",
        "beige-casual-shirt",
      ]}
    />
  );
};

export const Hoodies = () => {
  return (
    <ClothesCategory
      title="HOODIES"
      selectedIds={[
        "gray-hoodie",
        "casual-hoodie",
        "white-hooded-sportswear",
        "black-hoodie",
      ]}
    />
  );
};

export const Jackets = () => {
  return <ClothesCategory title="JACKETS" selectedIds={["red-jacket"]} />;
};

const bottomsIds = [
  19456438, 6727414, 13125260, 11716437, 9775494, 33055598, 33055635, 19995459,
  19995460, 17135748,
];

export const BottomsCategory = ({ title, selectedIds, dec = true }) => {
  const images = useFetchImages(bottomsIds);
  const getImageById = (id) => images.find((img) => img.id === id)?.data;

  const selectedProducts = selectedIds
    ? bottomProducts.filter((product) => selectedIds.includes(product.id))
    : bottomProducts;

  return (
    <>
      <div className="flex flex-col items-center pb-10">
        <div className="accTitle w-[95em] pl-[6em] pb-10 pt-10">
          <p>{title}</p>
          <p>{selectedProducts.length} products</p>
        </div>

        <div className="gap-10 grid grid-cols-5 place-content-center pl-5 pb-14 pt-4">
          {selectedProducts.map((product) => (
            <Card
              key={product.id}
              product={product}
              title={product.category}
              name={product.category}
              src={getImageById(product.imageId)?.src?.original}
              size="200px"
              text={product.name}
              price={product.price}
            />
          ))}
        </div>
      </div>
      {dec && <Footer />}
    </>
  );
};

const Bottoms = () => {
  return <BottomsCategory title="BOTTOMS" />;
};

export const Jeans = () => {
  return (
    <BottomsCategory
      title="JEANS"
      selectedIds={["green-denim-jeans", "denim-jeans"]}
    />
  );
};

export const CargoPants = () => {
  return (
    <BottomsCategory
      title="CARGO PANTS"
      selectedIds={["green-denim-jeans", "green-pants"]}
    />
  );
};

export const SwpndJoggers = () => {
  return (
    <BottomsCategory
      title="SWEATPANTS & JOGGERS"
      selectedIds={["casual-black-sweatpants", "green-sweatpants"]}
    />
  );
};

export const Pants = () => {
  return (
    <BottomsCategory
      title="PANTS"
      selectedIds={[
        "beige-casual-pants",
        "brown-pants",
        "green-pants",
        "light-wash-denim-pants",
        "green-palm-print-pants",
        "beige-wide-leg-pants",
      ]}
    />
  );
};

export const ClothesSection = () => {
  return (
    <>
      <ClothesCategory title="TOPS" dec={false} />
      <BottomsCategory title="BOTTOMS" dec={false} />
      <Footer />
    </>
  );
};

export const TopsSection = () => {
  return (
    <>
      <Tops />
    </>
  );
};

export const BottomsSection = () => {
  return (
    <>
      <Bottoms />
    </>
  );
};

export default Clothes;
