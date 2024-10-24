import { React, useContext } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage, firestore } from "../Firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { AuthContext } from "../components/AuthProvider";
import { v4 as uuidv4 } from "uuid";

const ImageUploadButton = () => {
  const { userEmail } = useContext(AuthContext);
  const handleFileChange = (e) => {
    const filesArray = Array.from(e.target.files);
    filesArray.forEach(async (file) => {
      try {
        const imageId = uuidv4();
        const storageRef = ref(storage, `uploads/${userEmail}/${imageId}`);
        await uploadBytes(storageRef, file);
        const url = await getDownloadURL(storageRef);
        setDoc(doc(firestore, "img_data", `${imageId}`), {
          filename: file.name,
          timeUploaded: serverTimestamp(),
          url: url,
          user_id: userEmail,
          img_id: imageId,
          likes: [],
          comments: [],
        });
      } catch (e) {
        console.error("Error adding img: ", e);
      }
    });
  };
  return (
    <input onChange={handleFileChange} type="file" accept="image/*" multiple />
  );
};

export default ImageUploadButton;
