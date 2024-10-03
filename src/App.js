import React, { useState, useEffect } from "react";
import ImageDisplay from "./ImageDisplay";
import ImageUploadButton from "./ImageUploadButton";

const App = () => {
  const [images, setImages] = useState([]);
  return (
    <>
      <ImageDisplay images={images}></ImageDisplay>
      <ImageUploadButton setImages={setImages}></ImageUploadButton>
    </>
  );
};

export default App;
