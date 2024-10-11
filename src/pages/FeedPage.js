import React, { useState, useEffect } from "react";
import ImageDisplay from "../components/ImageDisplay";
import ImageUploadButton from "../components/ImageUploadButton";

const FeedPage = () => {
  return (
    <>
      <ImageDisplay></ImageDisplay>
      <ImageUploadButton></ImageUploadButton>
    </>
  );
};

export default FeedPage;
