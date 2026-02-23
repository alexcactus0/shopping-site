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
        if (stored) {
          const parsed = JSON.parse(stored);
          const filtered = parsed.filter((img) => imageIds.includes(img.id));
          setImages(filtered);
          return;
        }
        // Fetch from API if not found
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

        const results = await Promise.all(requests);
        console.log(results);

        setImages(results);
        localStorage.setItem("pexelsImages", JSON.stringify(results));
      } catch (error) {
        console.log(error);
      }
    };
    fetchImages();
  }, [imageIds]);
  return images;
};

export { PEXELS_API_KEY, useFetchImages };
