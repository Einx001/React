import { useEffect, useState } from "react";
import axios from "axios";

function CategoriasCocteles() {

  const [categorias, setCategorias] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
  const [cocteles, setCocteles] = useState([]);

  // OBTENER CATEGORÍAS
  const obtenerCategorias = async () => {

    try {

      const respuesta = await axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
      );

      setCategorias(respuesta.data.drinks);

    } catch (error) {
      console.log(error);
    }
  };

  // OBTENER CÓCTELES POR CATEGORÍA
  const obtenerCocteles = async (categoria) => {

    try {

      const respuesta = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categoria}`
      );

      setCocteles(respuesta.data.drinks);

    } catch (error) {
      console.log(error);
    }
  };

  // CARGA INICIAL
  useEffect(() => {
    obtenerCategorias();
  }, []);

  // CAMBIO DE SELECT
  const handleChange = (e) => {

    const categoria = e.target.value;

    setCategoriaSeleccionada(categoria);

    obtenerCocteles(categoria);
  };

  return (
    <div className="contenedor">

      <h1>Cócteles por Categoría</h1>

      {/* SELECT */}
      <select
        value={categoriaSeleccionada}
        onChange={handleChange}
      >
        <option value="">
          Seleccione categoría
        </option>

        {categorias.map((cat, index) => (
          <option
            key={index}
            value={cat.strCategory}
          >
            {cat.strCategory}
          </option>
        ))}
      </select>

      {/* RESULTADOS */}
      <div className="grid">

        {cocteles.map((drink) => (

          <div
            key={drink.idDrink}
            className="card"
          >

            <img
              src={drink.strDrinkThumb}
              alt={drink.strDrink}
            />

            <h3>{drink.strDrink}</h3>

          </div>

        ))}

      </div>

    </div>
  );
}

export default CategoriasCocteles;