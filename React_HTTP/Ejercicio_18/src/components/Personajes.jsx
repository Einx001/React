import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Personajes() {

  const [personajes, setPersonajes] = useState([]);

  const obtenerPersonajes = async () => {

    const respuesta = await axios.get(
      "https://rickandmortyapi.com/api/character"
    );

    setPersonajes(respuesta.data.results);
  };

  useEffect(() => {
    obtenerPersonajes();
  }, []);

  return (
    <div className="contenedor">

      <h1>Personajes</h1>

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

            <Link to={`/personajes/${personaje.id}`}>
              Ver Detalle
            </Link>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Personajes;