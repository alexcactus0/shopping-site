import { useFetchImages } from "../../API/pexelsAPI";

const spotlightIds = [
  25561929, 8532616, 4066292, 8609111, 8957613, 10195371, 1478442, 6311719,
  842959, 13288274,
];

const Spotlight = () => {
  const images = useFetchImages(spotlightIds);

  const getImageById = (id) => images.find((img) => img.id === id)?.data;

  return (
    <>
      <h1>SPOTLIGHT</h1>
      <p>Pointed focus. Rooted grit. {">"} Pure Cactix energy. Every bit.</p>
      <div className="cards w-[80em] h-[30em] grid grid-cols-[1fr_1fr_1fr_1fr_1fr] grid-rows-[1fr_1fr] place-content-center">
        <Card
          name={"card"}
          src={getImageById(25561929)?.src?.small}
          text={"NBA Finals Cap"}
          size={"120px"}
        />
        <Card
          name={"card"}
          src={getImageById(8532616)?.src?.small}
          text={"Black T-Shirt (Men)"}
          size={"120px"}
        />
        <Card
          name={"card"}
          src={getImageById(4066292)?.src?.small}
          text={"Black T-Shirt (Women)"}
          size={"120px"}
        />
        <Card
          name={"card"}
          src={getImageById(8609111)?.src?.small}
          text={"Caramel pants"}
          size={"120px"}
        />
        <Card
          name={"card"}
          src={getImageById(8957613)?.src?.small}
          text={"Nike leather shoe"}
          size={"120px"}
        />
        <Card
          name={"card"}
          src={getImageById(10195371)?.src?.small}
          text={"Black & Yellow Air Jordans"}
          size={"120px"}
        />
        <Card
          name={"card"}
          src={getImageById(1478442)?.src?.small}
          text={"Black & White Nikes"}
          size={"120px"}
        />
        <Card
          name={"card"}
          src={getImageById(6311719)?.src?.small}
          text={"Grey Hoodie (Men)"}
          size={"120px"}
        />
        <Card
          name={"card"}
          src={getImageById(842959)?.src?.small}
          text={"Black organizer Bag"}
          size={"120px"}
        />
        <Card
          name={"card"}
          src={getImageById(13288274)?.src?.small}
          text={"Blue & White Air forces 1"}
          size={"120px"}
        />
      </div>
    </>
  );
};

export function Card({ src, title, text, size, price, name }) {
  return (
    <div className={name}>
      <div className="imageWrapper grid place-content-center">
        <div className="fetchedImage w-[fit-content] overflow-hidden">
          <img src={src} alt="Cap Image" width={size} className="rounded-xl" />
        </div>
      </div>
      <div className="cardDes">
        <p>{title}</p> <p>{text}</p> <p>{price}</p>
      </div>
    </div>
  );
}

export default Spotlight;
