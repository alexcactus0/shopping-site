import { useFetchImages } from "../../API/pexelsAPI";
import { Card } from "../Home/Spotlight";
import Nav from "../Nav";
import Footer from "../Home/Footer";

const shoesIds = [
  15298950, 18155788, 2529148, 4932841, 1464624, 6540992, 16947115, 28375816,
];

const Shoes = () => {
  const shoeImage = useFetchImages(shoesIds);
  const getImageById = (id) => shoeImage.find((img) => img.id === id)?.data;

  return (
    <div className="shoes flex flex-col w-full items-center pt-10 border-top border-[1px]">
      <div className="shoesTitle w-[95em] pl-[6em] pb-10">
        <p>SHOES</p>
        <p>8 products</p>
      </div>
      <div className="shoesImages grid grid-cols-[1fr_1fr_1fr_1fr] place-content-center gap-10 pb-10">
        <Card
          title={"Shoes"}
          name={"card-shoes"}
          src={getImageById(15298950)?.src?.original}
          size={"200px"}
          text={"Nike classic Dunks"}
          price={"€ 103,00"}
        />
        <Card
          title={"Shoes"}
          name={"card-shoes"}
          src={getImageById(18155788)?.src?.original}
          size={"220px"}
          text={"Designer Sneakers"}
          price={"€ 980,00"}
        />
        <Card
          title={"Shoes"}
          name={"card-shoes"}
          src={getImageById(2529148)?.src?.original}
          size={"235px"}
          text={"Nike Sneakers"}
          price={"€ 73,00"}
        />
        <Card
          title={"Shoes"}
          name={"card-shoes"}
          src={getImageById(16947115)?.src?.original}
          size={"240px"}
          text={"Nike shoes"}
          price={"€ 85,00"}
        />
        <Card
          title={"Shoes"}
          name={"card-shoes"}
          src={getImageById(1464624)?.src?.original}
          size={"200px"}
          text={"Nike running shoes"}
          price={"€ 65,00"}
        />
        <Card
          title={"Shoes"}
          name={"card-shoes"}
          src={getImageById(6540992)?.src?.original}
          size={"240px"}
          text={"Nike high top sneakers"}
          price={"€ 322,00"}
        />
        <Card
          title={"Shoes"}
          name={"card-shoes"}
          src={getImageById(28375816)?.src?.original}
          size={"240px"}
          text={"Sports shoes"}
          price={"€ 58,00"}
        />
        <Card
          title={"Shoes"}
          name={"card-shoes"}
          src={getImageById(4932841)?.src?.original}
          size={"200px"}
          text={"New Balance Sneakers"}
          price={"€ 136,00"}
        />
      </div>
    </div>
  );
};

export const ShoesSection = () => {
  return (
    <>
      <Nav />
      <Shoes />
      <Footer />
    </>
  );
};

export default Shoes;
