import Thumbnail from "./Thumbnail";

export default function ThumbnailList({ images, selectedImage, onSelect }) {
  return (
    <div>
      {images.map((img, index) => (
        <Thumbnail
          key={index}
          img={img}
          isSelected={img === selectedImage}
          onClick={() => onSelect(img)}
        />
      ))}
    </div>
  );
}