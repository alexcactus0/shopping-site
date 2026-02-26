import { useState, useEffect } from "react";

const PEXELS_API_KEY =
  "3dIJ99cIskCDWToxxpyGiJ6fyTh1rd83fSDdcvyOWwDFJGp6f2gMY7bo";

const useFetchImages = (imageIds = []) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (!imageIds.length) return;

    const fetchImages = async () => {
      try {
        // Check if images are in localStorage
        const stored = localStorage.getItem("pexelsImages");
        const parsed = stored ? JSON.parse(stored) : [];

        const existingIds = parsed.map((img) => img.id);
        const missingIds = imageIds.filter((id) => !existingIds.includes(id));

        let newImages = [];

        if (missingIds.length > 0) {
          const requests = imageIds.map(async (id) => {
            const response = await fetch(
              `https://api.pexels.com/v1/photos/${id}`,
              {
                headers: { Authorization: PEXELS_API_KEY },
              },
            );
            const data = await response.json();
            return { id: data.id, data };
          });

          newImages = await Promise.all(requests);
        }

        const updatedImages = [...parsed, ...newImages];

        localStorage.setItem("pexelsImages", JSON.stringify(updatedImages));

        const filtered = updatedImages.filter((img) =>
          imageIds.includes(img.id),
        );

        setImages(filtered);
      } catch (error) {
        console.log(error);
      }
    };
    fetchImages();
  }, [imageIds]);
  return images;
};

export { PEXELS_API_KEY, useFetchImages };
