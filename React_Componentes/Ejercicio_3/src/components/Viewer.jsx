export default function Viewer({ image }) {
  return (
    <div>
      <img
        src={image}
        alt="selected"
        style={{ width: "500px" }}
      />
    </div>
  );
}