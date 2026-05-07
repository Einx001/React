import { useState } from "react";

function ListaEstilo() {
  const [activo, setActivo] = useState(false);

  const aplicarEstilo = () => {
    setActivo(!activo);
  };

  const elementos = ["Elemento 1", "Elemento 2", "Elemento 3"];

  return (
    <div>
      <h2>Lista</h2>

      <button onClick={aplicarEstilo}>
        Aplicar estilo
      </button>

      <ul>
        {elementos.map((el, index) => (
          <li
            key={index}
            className={activo ? "estilo-activo" : ""}
          >
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaEstilo;