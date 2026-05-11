import { useEffect, useState } from "react";
import axios from "axios";

function Categorias() {

  const [categorias, setCategorias] = useState([]);
  const [chiste, setChiste] = useState("");

  // OBTENER CATEGORÍAS
  const obtenerCategorias = async () => {
    try {

      const respuesta = await axios.get(
        "https://api.chucknorris.io/jokes/categories"
      );

      setCategorias(respuesta.data);

    } catch (error) {
      console.log(error);
    }
  };

  // OBTENER CHISTE POR CATEGORÍA
  const obtenerChiste = async (categoria) => {
    try {

      const respuesta = await axios.get(
        `https://api.chucknorris.io/jokes/random?category=${categoria}`
      );

      setChiste(respuesta.data.value);

    } catch (error) {
      console.log(error);
    }
  };

  // CARGAR CATEGORÍAS AL INICIO
  useEffect(() => {
    obtenerCategorias();
  }, []);

  return (
    <div className="contenedor">

      <h1>Categorías de Chuck Norris</h1>

      {/* LISTA DE CATEGORÍAS */}
      <div className="categorias">

        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => obtenerChiste(cat)}
          >
            {cat}
          </button>
        ))}

      </div>

      {/* CHISTE */}
      <div className="chiste">
        <p>{chiste}</p>
      </div>

    </div>
  );
}

export default Categorias;