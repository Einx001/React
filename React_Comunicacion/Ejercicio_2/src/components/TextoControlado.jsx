import { useState } from "react";

function TextoControlado() {
  const [texto, setTexto] = useState("");

  const limite = 10;

  const handleChange = (e) => {
    setTexto(e.target.value);
  };

  return (
    <div>
      <h2>Escribe algo:</h2>

      <input
        type="text"
        value={texto}
        onChange={handleChange}
        className={texto.length > limite ? "error" : ""}
      />

      <p>Caracteres: {texto.length}</p>
    </div>
  );
}

export default TextoControlado;