import React from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage, firestore } from "./Firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

const ImageUploadButton = ({ setImages }) => {
  const handleFileChange = (e) => {
    const filesArray = Array.from(e.target.files);
    setImages((files) => [...files, ...filesArray]);
    filesArray.forEach((file) => {
      try {
        const storageRef = ref(storage, `uploads/${file.name}`);
        uploadBytes(storageRef, file);
        setDoc(doc(firestore, "img_data", `${file.name}`), {
          filename: file.name,
          timeUploaded: serverTimestamp(),
          url: getDownloadURL(storageRef),
        });
        db.collection("users")
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              console.log(`${doc.id} => ${doc.data()}`);
            });
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
