import { useEffect, useState } from "react";
import axios from "axios";

function DetalleCoctel() {

  const [cocteles, setCocteles] = useState([]);
  const [detalle, setDetalle] = useState(null);

  // OBTENER LISTA
  const obtenerCocteles = async () => {

    try {

      const respuesta = await axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail"
      );

      setCocteles(respuesta.data.drinks);

    } catch (error) {
      console.log(error);
    }
  };

  // OBTENER DETALLE
  const obtenerDetalle = async (id) => {

    try {

      const respuesta = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      );

      setDetalle(respuesta.data.drinks[0]);

    } catch (error) {
      console.log(error);
    }
  };

  // CARGA INICIAL
  useEffect(() => {
    obtenerCocteles();
  }, []);

  return (
    <div className="contenedor">

      <h1>Lista de Cócteles</h1>

      {/* LISTA */}
      <div className="grid">

        {cocteles.map((drink) => (

          <div
            key={drink.idDrink}
            className="card"
            onClick={() =>
              obtenerDetalle(drink.idDrink)
            }
          >

            <img
              src={drink.strDrinkThumb}
              alt={drink.strDrink}
            />

            <h3>{drink.strDrink}</h3>

          </div>

        ))}

      </div>

      {/* DETALLE */}
      {detalle && (

        <div className="detalle">

          <h2>{detalle.strDrink}</h2>

          <img
            src={detalle.strDrinkThumb}
            alt={detalle.strDrink}
          />

          <p>
            <strong>Categoría:</strong>
            {" "}
            {detalle.strCategory}
          </p>

          <p>
            <strong>Tipo:</strong>
            {" "}
            {detalle.strAlcoholic}
          </p>

          <p>
            <strong>Instrucciones:</strong>
            {" "}
            {detalle.strInstructions}
          </p>

        </div>

      )}

    </div>
  );
}

export default DetalleCoctel;