import React from "react";
import { ref, uploadBytes } from "firebase/storage";
import { storage } from "./Firebase";

const ImageUploadButton = ({ setImages }) => {
  const handleFileChange = (e) => {
    const filesArray = Array.from(e.target.files);
    setImages((files) => [...files, ...filesArray]);
    filesArray.forEach((file) => {
      const storageRef = ref(storage, `uploads/${file.name}`);
      uploadBytes(storageRef, file);
    });
  };
  return (
    <input onChange={handleFileChange} type="file" accept="image/*" multiple />
  );
};

export default ImageUploadButton;
