import { useFetchImages } from "../../API/pexelsAPI";
import { useNavigate } from "react-router";
import { spotlightProducts } from "../shop/products/spotlightProducts";

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
      <div className="cards w-[80em] h-[30em] grid grid-cols-5 grid-rows-2 place-content-center mt-16 mb-12">
        {spotlightProducts.map((product) => (
          <Card
            key={product.id}
            product={product}
            src={getImageById(product.imageId)?.src?.original}
            size="150px"
            dec={false}
          />
        ))}
      </div>
    </>
  );
};

export function Card({ product, src, size, dec = true, int = false }) {
  const navigate = useNavigate();

  return (
    <div
      className={`${product.category} cursor-pointer group pb-12`}
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <div className="imageWrapper grid place-content-center overflow-hidden rounded-xl">
        <img src={src} alt={product.name} width={size} className="rounded-xl" />
      </div>

      <div className="cardDes px-1 space-y-1">
        {dec && (
          <p className="text-gray-400 text-sm uppercase tracking-wider">
            {product.category}
          </p>
        )}

        {!int && (
          <h2 className="text-medium font-semibold text-gray-900 leading-tight">
            {product.name}
          </h2>
        )}

        {dec && (
          <p className="text-medium font-bold text-gray-900">
            {product.price || "€ 0.00"}
          </p>
        )}
      </div>
    </div>
  );
}

export default Spotlight;
