export default function Thumbnail({ img, isSelected, onClick }) {
  return (
    <img
      src={img}
      alt="thumbnail"
      onClick={onClick}
      style={{
        width: "100px",
        cursor: "pointer",
        marginBottom: "10px",
        border: isSelected ? "2px solid blue" : "none"
      }}
    />
  );
}