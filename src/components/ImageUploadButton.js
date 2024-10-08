import React from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage, firestore } from "../Firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

const ImageUploadButton = () => {
  const handleFileChange = (e) => {
    const filesArray = Array.from(e.target.files);
    filesArray.forEach(async (file) => {
      try {
        const storageRef = ref(storage, `uploads/${file.name}`);
        await uploadBytes(storageRef, file);
        const url = await getDownloadURL(storageRef);
        setDoc(doc(firestore, "img_data", `${file.name}`), {
          filename: file.name,
          timeUploaded: serverTimestamp(),
          url: url,
        });
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
