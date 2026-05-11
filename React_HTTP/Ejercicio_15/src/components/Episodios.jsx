import { useEffect, useState } from "react";
import axios from "axios";

function Episodios() {

  const [episodios, setEpisodios] = useState([]);
  const [personajes, setPersonajes] = useState([]);

  // OBTENER EPISODIOS
  const obtenerEpisodios = async () => {

    try {

      const respuesta = await axios.get(
        "https://rickandmortyapi.com/api/episode"
      );

      setEpisodios(respuesta.data.results);

    } catch (error) {
      console.log(error);
    }
  };

  // OBTENER PERSONAJES DEL EPISODIO
  const obtenerPersonajes = async (urls) => {

    try {

      // PETICIONES PARALELAS
      const peticiones = urls.map((url) =>
        axios.get(url)
      );

      const respuestas =
        await Promise.all(peticiones);

      // EXTRAER DATA
      const datos =
        respuestas.map((res) => res.data);

      setPersonajes(datos);

    } catch (error) {
      console.log(error);
    }
  };

  // CARGA INICIAL
  useEffect(() => {
    obtenerEpisodios();
  }, []);

  return (
    <div className="contenedor">

      <h1>Episodios Rick and Morty</h1>

      {/* LISTA DE EPISODIOS */}
      <div className="episodios">

        {episodios.map((ep) => (

          <div
            key={ep.id}
            className="episodio"
          >

            <h3>{ep.name}</h3>

            <p>{ep.episode}</p>

            <button
              onClick={() =>
                obtenerPersonajes(ep.characters)
              }
            >
              Ver Personajes
            </button>

          </div>

        ))}

      </div>

      {/* PERSONAJES */}
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

export default Episodios;