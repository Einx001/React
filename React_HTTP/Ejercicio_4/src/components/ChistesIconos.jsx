import { useState } from "react";
import axios from "axios";

function ChistesIconos() {

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

      <h1>Buscar Chistes con Íconos</h1>

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

        {resultados.map((joke) => (

          <div
            key={joke.id}
            className="card"
          >

            {/* ICONO */}
            <img
              src={joke.icon_url}
              alt="icono"
            />

            {/* CHISTE */}
            <p>{joke.value}</p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default ChistesIconos;