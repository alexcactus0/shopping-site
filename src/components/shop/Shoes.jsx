import { useFetchImages } from "../../API/pexelsAPI";
import { Card } from "../Home/Spotlight";
import { shoesProducts } from "./products/shoesProducts.js";
import Footer from "../Home/Footer";

const shoesIds = [
  15298950, 18155788, 2529148, 16947115, 28375816, 1464624, 6540992, 4932841,
];

export const ShoesCategory = ({ title, selectedIds, dec = true }) => {
  const images = useFetchImages(shoesIds);
  const getImageById = (id) => images.find((img) => img.id === id)?.data;

  const selectedProducts = selectedIds
    ? shoesProducts.filter((product) => selectedIds.includes(product.id))
    : shoesProducts;

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

const Shoes = () => {
  return <ShoesCategory title="SHOES" />;
};

export const CasualNdEvday = () => {
  return (
    <ShoesCategory
      title="CASUAL & EVERYDAY"
      selectedIds={[
        "nike-classic-dunks",
        "nike-shoes",
        "nike-high-top-sneakers",
        "new-balance-sneakers",
      ]}
    />
  );
};

export const Sneakers = () => {
  return (
    <ShoesCategory
      title="SNEAKERS"
      selectedIds={[
        "designer-sneakers",
        "nike-sneakers",
        "nike-high-top-sneakers",
        "new-balance-sneakers",
      ]}
    />
  );
};

export const Designer = () => {
  return (
    <ShoesCategory title="DESIGNER SHOES" selectedIds={["designer-sneakers"]} />
  );
};

export const ShoesSection = () => {
  return (
    <>
      <ShoesCategory title="SHOES" dec={false} />
      <Footer />
    </>
  );
};

export default Shoes;
