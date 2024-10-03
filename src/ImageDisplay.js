import { React, useState, useEffect } from "react";
import { storage } from "./Firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";

function ImageDisplay({ images }) {
  const [imageUrls, setImageUrls] = useState([]);
  useEffect(() => {
    const fetchImages = async () => {
      const imagesRef = ref(storage, "uploads/");
      try {
        const response = await listAll(imagesRef);
        const urls = await Promise.all(
          response.items.map(async (item) => {
            const url = await getDownloadURL(item);
            return url;
          })
        );
        setImageUrls(urls);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };
    fetchImages();
  }, []);

  return (
    <div>
      {images.length !== 0 &&
        imageUrls.map((url, index) => (
          <img alt="no image found" width={"250px"} src={url} />
        ))}
    </div>
  );
}

export default ImageDisplay;
