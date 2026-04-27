import { useState } from "react";
import ThumbnailList from "./ThumbnailList";
import Viewer from "./Viewer";

const images = [
  "/images/arbol.jpg",
  "/images/colibri.jpg",
  "/images/torre.jpg"
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <ThumbnailList
        images={images}
        selectedImage={selectedImage}
        onSelect={setSelectedImage}
      />
      <Viewer image={selectedImage} />
    </div>
  );
}