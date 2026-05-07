function Semaforo({ estado }) {

  const colores = {
    rojo: "red",
    amarillo: "yellow",
    verde: "green"
  };

  return (
    <div
      className="semaforo"
      style={{
        backgroundColor: colores[estado]
      }}
    >
      {estado}
    </div>
  );
}

export default Semaforo;