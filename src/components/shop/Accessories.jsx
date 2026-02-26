import { useFetchImages } from "../../API/pexelsAPI";
import { Card } from "../Home/Spotlight";
import Nav from "../Nav";
import Footer from "../Home/Footer";

const accIds = [
  18999333, 3731256, 17492091, 5472300, 13876038, 11031128, 14173534,
];

const Accessories = () => {
  const images = useFetchImages(accIds);

  const getImageById = (id) => images.find((img) => img.id === id)?.data;

  return (
    <div className="accessories flex flex-col items-center border-top border-[1px] pb-10">
      <div className="accTitle w-[95em] pl-[6em] pb-10 pt-10">
        <p>Accessories</p>
        <p>7 products</p>
      </div>
      <div className="gap-10 grid grid-cols-5 grid-rows-2 place-content-center pl-5">
        <Card
          title={"Accessories"}
          name={"card-acc"}
          src={getImageById(18999333)?.src?.original}
          size={"200px"}
          text={"Black Backpack"}
          price={"€ 39.99"}
        />
        <Card
          title={"Accessories"}
          name={"card-acc"}
          src={getImageById(3731256)?.src?.original}
          size={"200px"}
          text={"Dark Gray Backpack"}
          price={"€ 33.99"}
        />
        <Card
          title={"Accessories"}
          name={"card-acc"}
          src={getImageById(17492091)?.src?.original}
          size={"200px"}
          text={"Black Tactical Backpack"}
          price={"€ 49.99"}
        />
        <Card
          title={"Accessories"}
          name={"card-acc"}
          src={getImageById(5472300)?.src?.original}
          size={"200px"}
          text={"Stylish Sunglasses"}
          price={"€ 9,99"}
        />
        <Card
          title={"Accessories"}
          name={"card-acc"}
          src={getImageById(13876038)?.src?.original}
          size={"200px"}
          text={"Black Cap"}
          price={"€ 19.99"}
        />
        <Card
          title={"Accessories"}
          name={"card-acc"}
          src={getImageById(11031128)?.src?.original}
          size={"200px"}
          text={"Purple Handbag"}
          price={"€ 44.99"}
        />
        <Card
          title={"Accessories"}
          name={"card-acc"}
          src={getImageById(14173534)?.src?.original}
          size={"235px"}
          text={"Black Handbag"}
          price={"€ 49.99"}
        />
      </div>
    </div>
  );
};

export const AccessoriesSection = () => {
  return (
    <>
      <Nav />
      <Accessories />
      <Footer />
    </>
  );
};

export default Accessories;
