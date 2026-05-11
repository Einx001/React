import { useEffect, useState } from "react";
import axios from "axios";

function Personajes() {

  const [personajes, setPersonajes] = useState([]);

  // OBTENER PERSONAJES
  const obtenerPersonajes = async () => {

    try {

      const respuesta = await axios.get(
        "https://rickandmortyapi.com/api/character"
      );

      setPersonajes(respuesta.data.results);

    } catch (error) {
      console.log(error);
    }
  };

  // CARGA INICIAL
  useEffect(() => {
    obtenerPersonajes();
  }, []);

  return (
    <div className="contenedor">

      <h1>Personajes Rick and Morty</h1>

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

export default Personajes;