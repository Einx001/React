import { useState } from "react";

function InputToggle() {
  const [activo, setActivo] = useState(false);

  const alternarEstilo = () => {
    setActivo(!activo);
  };

  return (
    <div>
      <h2>Cuadro de texto</h2>

      <input
        type="text"
        className={activo ? "estilo1" : "estilo2"}
        placeholder="Escribe algo..."
      />

      <br /><br />

      <button onClick={alternarEstilo}>
        Cambiar estilo
      </button>
    </div>
  );
}

export default InputToggle;