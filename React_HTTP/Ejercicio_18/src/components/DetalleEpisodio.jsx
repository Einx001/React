import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function DetalleEpisodio() {

  const { id } = useParams();

  const [episodio, setEpisodio] = useState(null);
  const [personajes, setPersonajes] = useState([]);

  // OBTENER EPISODIO
  const obtenerEpisodio = async () => {

    const respuesta = await axios.get(
      `https://rickandmortyapi.com/api/episode/${id}`
    );

    setEpisodio(respuesta.data);

    obtenerPersonajes(
      respuesta.data.characters
    );
  };

  // OBTENER PERSONAJES
  const obtenerPersonajes = async (urls) => {

    const peticiones =
      urls.map((url) => axios.get(url));

    const respuestas =
      await Promise.all(peticiones);

    const datos =
      respuestas.map((res) => res.data);

    setPersonajes(datos);
  };

  useEffect(() => {
    obtenerEpisodio();
  }, []);

  if (!episodio) return <h2>Cargando...</h2>;

  return (
    <div className="contenedor">

      <h1>{episodio.name}</h1>

      <p>{episodio.episode}</p>

      <h2>Personajes</h2>

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

export default DetalleEpisodio;