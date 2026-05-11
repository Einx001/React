import { useState } from "react";
import axios from "axios";

function BuscadorChistes() {

  const [texto, setTexto] = useState("");
  const [resultados, setResultados] = useState([]);

  // BUSCAR CHISTES
  const buscarChistes = async () => {

    if (texto.trim() === "") return;

    try {

      const respuesta = await axios.get(
        `https://api.chucknorris.io/jokes/search?query=${texto}`
      );

      setResultados(respuesta.data.result);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="contenedor">

      <h1>Buscar Chistes</h1>

      {/* INPUT */}
      <input
        type="text"
        placeholder="Buscar..."
        value={texto}
        onChange={(e) =>
          setTexto(e.target.value)
        }
      />

      {/* BOTÓN */}
      <button onClick={buscarChistes}>
        Buscar
      </button>

      {/* RESULTADOS */}
      <div className="resultados">

        {resultados.length > 0 ? (

          resultados.map((chiste) => (
            <div
              key={chiste.id}
              className="card"
            >
              <p>{chiste.value}</p>
            </div>
          ))

        ) : (

          <p>No hay resultados</p>

        )}

      </div>

    </div>
  );
}

export default BuscadorChistes;