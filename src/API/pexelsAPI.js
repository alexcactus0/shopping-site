// src/API/pexelsAPI.js
import { useState, useEffect } from "react";

const PEXELS_API_KEY =
  "3dIJ99cIskCDWToxxpyGiJ6fyTh1rd83fSDdcvyOWwDFJGp6f2gMY7bo";

const useFetchImages = (imageIds = []) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (!imageIds.length) return;

    const fetchImages = async () => {
      try {
        // Get stored images from localStorage
        const stored = localStorage.getItem("pexelsImages");
        const parsed = stored ? JSON.parse(stored) : [];

        const existingIds = parsed.map((img) => img.id);
        const missingIds = imageIds.filter((id) => !existingIds.includes(id));

        let newImages = [];

        if (missingIds.length > 0) {
          const requests = missingIds.map(async (id) => {
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

        // Combine existing and new images
        const updatedImages = [...parsed, ...newImages];

        localStorage.setItem("pexelsImages", JSON.stringify(updatedImages));

        const filtered = updatedImages.filter((img) =>
          imageIds.includes(img.id),
        );

        setImages((prev) => {
          const prevIds = prev.map((i) => i.id);
          const filteredIds = filtered.map((i) => i.id);
          if (JSON.stringify(prevIds) === JSON.stringify(filteredIds))
            return prev;
          return filtered;
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchImages();
  }, [imageIds]);

  return images;
};

export { PEXELS_API_KEY, useFetchImages };
