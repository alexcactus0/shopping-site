import { PEXELS_API_KEY } from "../../API/pexelsAPI";
import { useEffect, useState } from "react";

const Spotlight = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const ids = [
        25561929, 8532616, 4066292, 8609111, 8957613, 10195371, 1478442,
        6311719, 842959, 13288274,
      ];
      try {
        const requests = ids.map(async (id) => {
          const response = await fetch(
            `https://api.pexels.com/v1/photos/${id}`,
            {
              headers: { Authorization: PEXELS_API_KEY },
            },
          );
          const data = await response.json();
          return { id: data.id, data };
        });

        const results = await Promise.all(requests);
        console.log(results);
        setImages(results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchImages();
  }, []);

  const getImageById = (id) => images.find((img) => img.id === id)?.data;

  return (
    <>
      <h1>SPOTLIGHT</h1>
      <p>Pointed focus. Rooted grit. {">"} Pure Cactix energy. Every bit.</p>
      <div className="cards w-[80em] h-[30em] grid grid-cols-[1fr_1fr_1fr_1fr_1fr] grid-rows-[1fr_1fr] place-content-center">
        <Card src={getImageById(25561929)?.src?.small} />
        <Card src={getImageById(8532616)?.src?.small} />
        <Card src={getImageById(4066292)?.src?.small} />
        <Card src={getImageById(8609111)?.src?.small} />
        <Card src={getImageById(8957613)?.src?.small} />
        <Card src={getImageById(10195371)?.src?.small} />
        <Card src={getImageById(1478442)?.src?.small} />
        <Card src={getImageById(6311719)?.src?.small} />
        <Card src={getImageById(842959)?.src?.small} />
        <Card src={getImageById(13288274)?.src?.small} />
      </div>
    </>
  );
};

function Card({ src }) {
  return (
    <div className="card flex flex-col justify-center items-center gap-5">
      <div className="imageWrapper grid place-content-center">
        <div className="fetchedImage w-[fit-content] rounded-xl overflow-hidden">
          <img src={src} alt="Cap Image" width="120px" />
        </div>
      </div>
      <div className="cardDes">NBA Finals cap</div>
    </div>
  );
}

export default Spotlight;
