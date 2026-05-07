function CajaColor({ color }) {
  return (
    <div
      className="caja"
      style={{ backgroundColor: color }}
    >
      <h2>Color: {color}</h2>
    </div>
  );
}

export default CajaColor;