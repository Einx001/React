import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ListaPersonajes() {

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

      <h1>Rick and Morty</h1>

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

            {/* LINK */}
            <Link to={`/personaje/${personaje.id}`}>
              Ver Detalle
            </Link>

          </div>

        ))}

      </div>

    </div>
  );
}

export default ListaPersonajes;