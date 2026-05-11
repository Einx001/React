import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Episodios() {

  const [episodios, setEpisodios] = useState([]);

  const obtenerEpisodios = async () => {

    const respuesta = await axios.get(
      "https://rickandmortyapi.com/api/episode"
    );

    setEpisodios(respuesta.data.results);
  };

  useEffect(() => {
    obtenerEpisodios();
  }, []);

  return (
    <div className="contenedor">

      <h1>Episodios 📺</h1>

      <div className="grid">

        {episodios.map((ep) => (

          <div
            key={ep.id}
            className="card"
          >

            <h3>{ep.name}</h3>

            <p>{ep.episode}</p>

            <Link to={`/episodios/${ep.id}`}>
              Ver Detalle
            </Link>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Episodios;