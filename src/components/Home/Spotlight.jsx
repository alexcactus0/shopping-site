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
          src={getImageById(25561929)?.src?.small}
          text={"NBA Finals Cap"}
        />
        <Card
          src={getImageById(8532616)?.src?.small}
          text={"Black T-Shirt (Men)"}
        />
        <Card
          src={getImageById(4066292)?.src?.small}
          text={"Black T-Shirt (Women)"}
        />
        <Card src={getImageById(8609111)?.src?.small} text={"Caramel pants"} />
        <Card
          src={getImageById(8957613)?.src?.small}
          text={"Nike leather shoe"}
        />
        <Card
          src={getImageById(10195371)?.src?.small}
          text={"Black & Yellow Air Jordans"}
        />
        <Card
          src={getImageById(1478442)?.src?.small}
          text={"Black & White Nikes"}
        />
        <Card
          src={getImageById(6311719)?.src?.small}
          text={"Grey Hoodie (Men)"}
        />
        <Card
          src={getImageById(842959)?.src?.small}
          text={"Black organizer Bag"}
        />
        <Card
          src={getImageById(13288274)?.src?.small}
          text={"Blue & White Air forces 1"}
        />
      </div>
    </>
  );
};

function Card({ src, text }) {
  return (
    <div className="card flex flex-col justify-center items-center gap-5">
      <div className="imageWrapper grid place-content-center">
        <div className="fetchedImage w-[fit-content] rounded-xl overflow-hidden">
          <img src={src} alt="Cap Image" width="120px" />
        </div>
      </div>
      <div className="cardDes">{text}</div>
    </div>
  );
}

export default Spotlight;
