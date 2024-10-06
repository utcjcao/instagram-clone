import { React, useState, useEffect } from "react";
import { storage, firestore } from "./Firebase";
import { collection, getDocs } from "firebase/firestore";

function ImageDisplay({ images }) {
  const [imageData, setImageData] = useState([]);
  useEffect(() => {
    const querySnapshot = getDocs(collection(db, "users"));
    const loadedImageData = querySnapshot.map((doc) => {
      id: doc.id, 
        ...doc.data()
    });
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
