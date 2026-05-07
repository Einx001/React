import { useState } from "react";

function Mayusculas() {

  const [texto, setTexto] = useState("");

  const handleChange = (e) => {
    setTexto(e.target.value.toUpperCase());
  };

  return (
    <div>
      <h1>Input en mayúsculas</h1>

      <input
        type="text"
        value={texto}
        onChange={handleChange}
        placeholder="Escribe algo..."
      />
    </div>
  );
}

export default Mayusculas;