import { React, useState, useEffect } from "react";
import { storage, firestore } from "./Firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";

function ImageDisplay({ images }) {
  const [imageData, setImageData] = useState([]);
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(firestore, "users"),
      async (snapshot) => {
        const loadedImageData = await Promise.all(
          snapshot.docs.map(async (doc) => {
            const data = doc.data();
            const imageRef = ref(storage, `uploads/${data.fileName}`);

            try {
              const url = await getDownloadURL(imageRef);
              return { id: doc.id, ...data, url };
            } catch (error) {
              return { id: doc.id, ...data, url: null };
            }
          })
        );
        setImageData(loadedImageData);
      }
    );
    return () => unsubscribe();
  }, []);

  return (
    <div>
      {imageData.length !== 0 ? (
        imageData.map((doc) => (
          <img
            alt="no image found"
            width={"250px"}
            src={doc.url}
            key={doc.id}
          />
        ))
      ) : (
        <></>
      )}
    </div>
  );
}

export default ImageDisplay;
