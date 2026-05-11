import { useState } from "react";
import axios from "axios";

function BuscarPersonajes() {

  const [texto, setTexto] = useState("");
  const [personajes, setPersonajes] = useState([]);
  const [error, setError] = useState("");

  // BUSCAR PERSONAJES
  const buscarPersonajes = async () => {

    if (texto.trim() === "") return;

    try {

      const respuesta = await axios.get(
        `https://rickandmortyapi.com/api/character/?name=${texto}`
      );

      setPersonajes(respuesta.data.results);

      setError("");

    } catch (error) {

      setPersonajes([]);

      setError("No se encontraron personajes");
    }
  };

  return (
    <div className="contenedor">

      <h1>Buscar Personajes</h1>

      {/* INPUT */}
      <input
        type="text"
        placeholder="Buscar personaje..."
        value={texto}
        onChange={(e) =>
          setTexto(e.target.value)
        }
      />

      {/* BOTÓN */}
      <button onClick={buscarPersonajes}>
        Buscar
      </button>

      {/* ERROR */}
      {error && <p>{error}</p>}

      {/* RESULTADOS */}
      <div className="grid">

        {personajes.map((personaje) => (

          <div
            key={personaje.id}
            className="card"
          >

            <img
              src={personaje.image}
              alt={personaje.name}
            />

            <h3>{personaje.name}</h3>

          </div>

        ))}

      </div>

    </div>
  );
}

export default BuscarPersonajes;