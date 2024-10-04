import React from "react";
import { ref, uploadBytes } from "firebase/storage";
import { storage, firestore } from "./Firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const ImageUploadButton = ({ setImages }) => {
  const handleFileChange = (e) => {
    const filesArray = Array.from(e.target.files);
    setImages((files) => [...files, ...filesArray]);
    filesArray.forEach((file) => {
      try {
        const storageRef = ref(storage, `uploads/${file.name}`);
        uploadBytes(storageRef, file);
        firestore.collection("img").add({
          filename: file.name,
          url: getDownloadURL(storageRef),
          createdAt: serverTimestamp(),
        });

        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    });
  };
  return (
    <input onChange={handleFileChange} type="file" accept="image/*" multiple />
  );
};

export default ImageUploadButton;
