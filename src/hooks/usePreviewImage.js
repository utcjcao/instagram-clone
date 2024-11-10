import { useState } from "react";
import useShowToast from "./useShowToast";

const usePreviewImage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const showToast = useShowToast();
  const maxSize = 2 * 1024 * 1024;

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      if (file.size > maxSize) {
        showToast("Error", "file too big", "error");
        setSelectedFile(null);
        return;
      }
      const reader = newFileReader();
      reader.onloadend = () => {
        setSelectedFile(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      showToast("Error", "no image selected", "error");
      setSelectedFile(null);
      return;
    }
  };
  return { selectedFile, handleImageChange, setSelectedFile };
};
export default usePreviewImage;
