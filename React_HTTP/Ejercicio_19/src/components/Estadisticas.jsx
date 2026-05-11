import { useEffect, useState } from "react";
import axios from "axios";

function Estadisticas() {

  const [personajes, setPersonajes] = useState(0);
  const [episodios, setEpisodios] = useState(0);
  const [ubicaciones, setUbicaciones] = useState(0);

  // OBTENER DATOS
  const obtenerDatos = async () => {

    try {

      // PETICIONES PARALELAS
      const [
        resPersonajes,
        resEpisodios,
        resUbicaciones
      ] = await Promise.all([

        axios.get(
          "https://rickandmortyapi.com/api/character"
        ),

        axios.get(
          "https://rickandmortyapi.com/api/episode"
        ),

        axios.get(
          "https://rickandmortyapi.com/api/location"
        )

      ]);

      // GUARDAR COUNTS
      setPersonajes(
        resPersonajes.data.info.count
      );

      setEpisodios(
        resEpisodios.data.info.count
      );

      setUbicaciones(
        resUbicaciones.data.info.count
      );

    } catch (error) {
      console.log(error);
    }
  };

  // CARGA INICIAL
  useEffect(() => {
    obtenerDatos();
  }, []);

  return (
    <div className="contenedor">

      <h1>Estadísticas Rick and Morty</h1>

      <div className="grid">

        {/* PERSONAJES */}
        <div className="card">

          <h2>Personajes</h2>

          <p>{personajes}</p>

        </div>

        {/* EPISODIOS */}
        <div className="card">

          <h2>Episodios</h2>

          <p>{episodios}</p>

        </div>

        {/* UBICACIONES */}
        <div className="card">

          <h2>Ubicaciones</h2>

          <p>{ubicaciones}</p>

        </div>

      </div>

    </div>
  );
}

export default Estadisticas;