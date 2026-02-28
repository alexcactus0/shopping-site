import { useFetchImages } from "../../API/pexelsAPI";
import { Card } from "../Home/Spotlight";
import Nav from "../Nav";
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

const Tops = () => {
  const images = useFetchImages(topsIds);

  const getImageById = (id) => images.find((img) => img.id === id)?.data;

  return (
    <div className="tops flex flex-col items-center pb-10">
      <div className="topsTitle w-[95em] pl-[6em] pb-10 pt-10">
        <p>TOPS</p>
        <p>10 products</p>
      </div>
      <div className="gap-10 grid grid-cols-5 grid-rows-2 place-content-center pl-5">
        <Card
          title={"Tops"}
          name={"card-tops"}
          src={getImageById(8148577)?.src?.original}
          size={"200px"}
          text={"Orange Cropped T-Shirt (Women)"}
          price={"€ 14.99"}
        />
        <Card
          title={"Tops"}
          name={"card-tops"}
          src={getImageById(22441317)?.src?.original}
          size={"200px"}
          text={"Dark Blue T-Shirt (Men)"}
          price={"€ 19.99"}
        />
        <Card
          title={"Tops"}
          name={"card-tops"}
          src={getImageById(20669538)?.src?.original}
          size={"200px"}
          text={"White T-Shirt (Men)"}
          price={"€ 24.99"}
        />
        <Card
          title={"Tops"}
          name={"card-tops"}
          src={getImageById(8217415)?.src?.original}
          size={"200px"}
          text={"White Hoodie (Men)"}
          price={"€ 39,99"}
        />
        <Card
          title={"Tops"}
          name={"card-tops"}
          src={getImageById(22441291)?.src?.original}
          size={"200px"}
          text={"Beige Casual Shirt (Women)"}
          price={"€ 34.99"}
        />
        <Card
          title={"Tops"}
          name={"card-tops"}
          src={getImageById(6311642)?.src?.original}
          size={"200px"}
          text={"Gray Hoodie (Women)"}
          price={"€ 39.99"}
        />
        <Card
          title={"Tops"}
          name={"card-tops"}
          src={getImageById(9286317)?.src?.original}
          size={"200px"}
          text={"Red Jacket (Women)"}
          price={"€ 54.99"}
        />
        <Card
          title={"Tops"}
          name={"card-tops"}
          src={getImageById(6311670)?.src?.original}
          size={"200px"}
          text={"Casual Hoodie (Men)"}
          price={"€ 44.99"}
        />
        <Card
          title={"Tops"}
          name={"card-tops"}
          src={getImageById(6311449)?.src?.original}
          size={"200px"}
          text={"White Hooded Sportswear (Men)"}
          price={"€ 39.99"}
        />
        <Card
          title={"Tops"}
          name={"card-tops"}
          src={getImageById(6311628)?.src?.original}
          size={"200px"}
          text={"Black Hoodie (Men)"}
          price={"€ 39.99"}
        />
      </div>
    </div>
  );
};

export const TShirts = () => {
  const images = useFetchImages(topsIds);

  const getImageById = (id) => images.find((img) => img.id === id)?.data;

  return (
    <>
      <Nav />
      <div className="tops flex flex-col items-center pb-10">
        <div className="topsTitle w-[95em] pl-[6em] pb-10 pt-10">
          <p>T-SHIRTS</p>
          <p>3 products</p>
        </div>
        <div className="gap-10 grid grid-cols-5 pb-20 place-content-center pl-5">
          <Card
            title={"Tops"}
            name={"card-tops"}
            src={getImageById(8148577)?.src?.original}
            size={"200px"}
            text={"Orange Cropped T-Shirt (Women)"}
            price={"€ 14.99"}
          />
          <Card
            title={"Tops"}
            name={"card-tops"}
            src={getImageById(22441317)?.src?.original}
            size={"200px"}
            text={"Dark Blue T-Shirt (Men)"}
            price={"€ 19.99"}
          />
          <Card
            title={"Tops"}
            name={"card-tops"}
            src={getImageById(20669538)?.src?.original}
            size={"200px"}
            text={"White T-Shirt (Men)"}
            price={"€ 24.99"}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export const Graphic = () => {
  const images = useFetchImages(topsIds);

  const getImageById = (id) => images.find((img) => img.id === id)?.data;

  return (
    <>
      <Nav />
      <div className="tops flex flex-col items-center pb-10">
        <div className="topsTitle w-[95em] pl-[6em] pb-10 pt-10">
          <p>GRAPHIC TEES</p>
          <p>4 products</p>
        </div>
        <div className="gap-10 grid grid-cols-5 pb-20 place-content-center pl-5">
          <Card
            title={"Tops"}
            name={"card-tops"}
            src={getImageById(8148577)?.src?.original}
            size={"200px"}
            text={"Orange Cropped T-Shirt (Women)"}
            price={"€ 14.99"}
          />
          <Card
            title={"Tops"}
            name={"card-tops"}
            src={getImageById(22441317)?.src?.original}
            size={"200px"}
            text={"Dark Blue T-Shirt (Men)"}
            price={"€ 19.99"}
          />
          <Card
            title={"Tops"}
            name={"card-tops"}
            src={getImageById(20669538)?.src?.original}
            size={"200px"}
            text={"White T-Shirt (Men)"}
            price={"€ 24.99"}
          />
          <Card
            title={"Tops"}
            name={"card-tops"}
            src={getImageById(22441291)?.src?.original}
            size={"200px"}
            text={"Beige Casual Shirt (Women)"}
            price={"€ 34.99"}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export const Hoodies = () => {
  const images = useFetchImages(topsIds);

  const getImageById = (id) => images.find((img) => img.id === id)?.data;

  return (
    <>
      <Nav />
      <div className="tops flex flex-col items-center pb-10">
        <div className="topsTitle w-[95em] pl-[6em] pb-10 pt-10">
          <p>HOODIES</p>
          <p>4 products</p>
        </div>
        <div className="gap-10 grid grid-cols-5 pb-20 place-content-center pl-5">
          <Card
            title={"Tops"}
            name={"card-tops"}
            src={getImageById(6311642)?.src?.original}
            size={"200px"}
            text={"Gray Hoodie (Women)"}
            price={"€ 39.99"}
          />
          <Card
            title={"Tops"}
            name={"card-tops"}
            src={getImageById(6311670)?.src?.original}
            size={"200px"}
            text={"Casual Hoodie (Men)"}
            price={"€ 44.99"}
          />
          <Card
            title={"Tops"}
            name={"card-tops"}
            src={getImageById(6311449)?.src?.original}
            size={"200px"}
            text={"White Hooded Sportswear (Men)"}
            price={"€ 39.99"}
          />
          <Card
            title={"Tops"}
            name={"card-tops"}
            src={getImageById(6311628)?.src?.original}
            size={"200px"}
            text={"Black Hoodie (Men)"}
            price={"€ 39.99"}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export const Jackets = () => {
  const images = useFetchImages(topsIds);

  const getImageById = (id) => images.find((img) => img.id === id)?.data;

  return (
    <>
      <Nav />
      <div className="tops flex flex-col items-center pb-10">
        <div className="topsTitle w-[95em] pl-[6em] pb-10 pt-10">
          <p>JACKETS</p>
          <p>1 product</p>
        </div>
        <div className="gap-10 grid grid-cols-5 place-content-center pl-5 pb-14 pt-4">
          <Card
            title={"Tops"}
            name={"card-tops"}
            src={getImageById(9286317)?.src?.original}
            size={"200px"}
            text={"Red Jacket (Women)"}
            price={"€ 54.99"}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

const bottomsIds = [
  19456438, 6727414, 13125260, 11716437, 9775494, 33055598, 33055635, 19995459,
  19995460, 17135748,
];

const Bottoms = () => {
  const images = useFetchImages(bottomsIds);

  const getImageById = (id) => images.find((img) => img.id === id)?.data;

  return (
    <div className="bottoms flex flex-col border-top border-[1px] items-center pb-10">
      <div className="bottomsTitle w-[95em] pl-[6em] pb-10 pt-10">
        <p>BOTTOMS</p>
        <p>10 products</p>
      </div>
      <div className="gap-10 grid grid-cols-5 grid-rows-2 place-content-center pl-5">
        <Card
          title={"Bottoms"}
          name={"card-bottoms"}
          src={getImageById(19456438)?.src?.original}
          size={"200px"}
          text={"Beige Casual Pants (Women)"}
          price={"€ 34.99"}
        />
        <Card
          title={"Bottoms"}
          name={"card-bottoms"}
          src={getImageById(6727414)?.src?.original}
          size={"200px"}
          text={"Brown Pants (Men)"}
          price={"€ 34.99"}
        />
        <Card
          title={"Bottoms"}
          name={"card-bottoms"}
          src={getImageById(13125260)?.src?.original}
          size={"200px"}
          text={"Green Pants (Women)"}
          price={"€ 36.99"}
        />
        <Card
          title={"Bottoms"}
          name={"card-bottoms"}
          src={getImageById(11716437)?.src?.original}
          size={"200px"}
          text={"Green Denim Jeans (Men)"}
          price={"€ 39.99"}
        />
        <Card
          title={"Bottoms"}
          name={"card-bottoms"}
          src={getImageById(9775494)?.src?.original}
          size={"200px"}
          text={"Denim Jeans (Men)"}
          price={"€ 42.99"}
        />
        <Card
          title={"Bottoms"}
          name={"card-bottoms"}
          src={getImageById(33055598)?.src?.original}
          size={"200px"}
          text={"Casual Black Sweatpants (Men)"}
          price={"€ 39.99"}
        />
        <Card
          title={"Bottoms"}
          name={"card-bottoms"}
          src={getImageById(33055635)?.src?.original}
          size={"200px"}
          text={"Green Sweatpants (Men)"}
          price={"€ 34.99"}
        />
        <Card
          title={"Bottoms"}
          name={"card-bottoms"}
          src={getImageById(19995459)?.src?.original}
          size={"200px"}
          text={"Light Wash Denim Pants (Women)"}
          price={"€ 42.99"}
        />
        <Card
          title={"Bottoms"}
          name={"card-bottoms"}
          src={getImageById(19995460)?.src?.original}
          size={"200px"}
          text={"Green Palm-Print Pants (Women)"}
          price={"€ 44.99"}
        />
        <Card
          title={"Bottoms"}
          name={"card-bottoms"}
          src={getImageById(17135748)?.src?.original}
          size={"200px"}
          text={"Beige Wide‑Leg Pants (Women)"}
          price={"€ 42.99"}
        />
      </div>
    </div>
  );
};

export const Jeans = () => {
  const images = useFetchImages(bottomsIds);

  const getImageById = (id) => images.find((img) => img.id === id)?.data;

  return (
    <>
      <Nav />
      <div className="bottoms flex flex-col items-center pb-10">
        <div className="bottomsTitle w-[95em] pl-[6em] pb-10 pt-10">
          <p>JEANS</p>
          <p>2 products</p>
        </div>
        <div className="gap-10 grid grid-cols-5 place-content-center pl-5 pb-14 pt-4">
          <Card
            title={"Bottoms"}
            name={"card-bottoms"}
            src={getImageById(11716437)?.src?.original}
            size={"200px"}
            text={"Green Denim Jeans (Men)"}
            price={"€ 39.99"}
          />
          <Card
            title={"Bottoms"}
            name={"card-bottoms"}
            src={getImageById(9775494)?.src?.original}
            size={"200px"}
            text={"Denim Jeans (Men)"}
            price={"€ 42.99"}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export const CargoPants = () => {
  const images = useFetchImages(bottomsIds);

  const getImageById = (id) => images.find((img) => img.id === id)?.data;

  return (
    <>
      <Nav />
      <div className="bottoms flex flex-col items-center pb-10">
        <div className="bottomsTitle w-[95em] pl-[6em] pb-10 pt-10">
          <p>CARGO PANTS</p>
          <p>2 products</p>
        </div>
        <div className="gap-10 grid grid-cols-5 place-content-center pl-5 pb-14 pt-4">
          <Card
            title={"Bottoms"}
            name={"card-bottoms"}
            src={getImageById(11716437)?.src?.original}
            size={"200px"}
            text={"Green Denim Jeans (Men)"}
            price={"€ 39.99"}
          />
          <Card
            title={"Bottoms"}
            name={"card-bottoms"}
            src={getImageById(13125260)?.src?.original}
            size={"200px"}
            text={"Green Pants (Women)"}
            price={"€ 36.99"}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export const SwpndJoggers = () => {
  const images = useFetchImages(bottomsIds);

  const getImageById = (id) => images.find((img) => img.id === id)?.data;

  return (
    <>
      <Nav />
      <div className="bottoms flex flex-col items-center pb-10">
        <div className="bottomsTitle w-[95em] pl-[6em] pb-10 pt-10">
          <p>CARGO PANTS</p>
          <p>1 product</p>
        </div>
        <div className="gap-10 grid grid-cols-5 place-content-center pl-5 pb-14 pt-4">
          <Card
            title={"Bottoms"}
            name={"card-bottoms"}
            src={getImageById(33055598)?.src?.original}
            size={"200px"}
            text={"Casual Black Sweatpants (Men)"}
            price={"€ 39.99"}
          />
          <Card
            title={"Bottoms"}
            name={"card-bottoms"}
            src={getImageById(33055635)?.src?.original}
            size={"200px"}
            text={"Green Sweatpants (Men)"}
            price={"€ 34.99"}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export const Pants = () => {
  const images = useFetchImages(bottomsIds);

  const getImageById = (id) => images.find((img) => img.id === id)?.data;

  return (
    <>
      <Nav />
      <div className="bottoms flex flex-col items-center pb-10">
        <div className="bottomsTitle w-[95em] pl-[6em] pb-10 pt-10">
          <p>PANTS</p>
          <p>6 products</p>
        </div>
        <div className="gap-10 grid grid-cols-5 place-content-center pl-5 pb-14 pt-4">
          <Card
            title={"Bottoms"}
            name={"card-bottoms"}
            src={getImageById(19456438)?.src?.original}
            size={"200px"}
            text={"Beige Casual Pants (Women)"}
            price={"€ 34.99"}
          />
          <Card
            title={"Bottoms"}
            name={"card-bottoms"}
            src={getImageById(6727414)?.src?.original}
            size={"200px"}
            text={"Brown Pants (Men)"}
            price={"€ 34.99"}
          />
          <Card
            title={"Bottoms"}
            name={"card-bottoms"}
            src={getImageById(13125260)?.src?.original}
            size={"200px"}
            text={"Green Pants (Women)"}
            price={"€ 36.99"}
          />
          <Card
            title={"Bottoms"}
            name={"card-bottoms"}
            src={getImageById(19995459)?.src?.original}
            size={"200px"}
            text={"Light Wash Denim Pants (Women)"}
            price={"€ 42.99"}
          />
          <Card
            title={"Bottoms"}
            name={"card-bottoms"}
            src={getImageById(19995460)?.src?.original}
            size={"200px"}
            text={"Green Palm-Print Pants (Women)"}
            price={"€ 44.99"}
          />
          <Card
            title={"Bottoms"}
            name={"card-bottoms"}
            src={getImageById(17135748)?.src?.original}
            size={"200px"}
            text={"Beige Wide‑Leg Pants (Women)"}
            price={"€ 42.99"}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export const ClothesSection = () => {
  return (
    <>
      <Nav />
      <Tops />
      <Bottoms />
      <Footer />
    </>
  );
};

export const TopsSection = () => {
  return (
    <>
      <Nav />
      <Tops />
      <Footer />
    </>
  );
};

export const BottomsSection = () => {
  return (
    <>
      <Nav />
      <Bottoms />
      <Footer />
    </>
  );
};

export default Clothes;
