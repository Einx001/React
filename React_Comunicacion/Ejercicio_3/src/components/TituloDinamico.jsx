import { useState } from "react";

function TituloDinamico() {
  const [grande, setGrande] = useState(false);

  const cambiarTamano = () => {
    setGrande(!grande);
  };

  return (
    <div>
      <h1 style={{ fontSize: grande ? "50px" : "25px" }}>
        Título dinámico
      </h1>

      <button onClick={cambiarTamano}>
        Cambiar tamaño
      </button>
    </div>
  );
}

export default TituloDinamico;