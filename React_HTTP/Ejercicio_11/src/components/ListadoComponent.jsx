import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ListadoComponent() {

  const [cocteles, setCocteles] = useState([]);

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

  // CARGA INICIAL
  useEffect(() => {
    obtenerCocteles();
  }, []);

  return (
    <div className="contenedor">

      <h1>Listado de Cócteles</h1>

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

            {/* LINK */}
            <Link to={`/detalle/${drink.idDrink}`}>
              Ver Detalle
            </Link>

          </div>

        ))}

      </div>

    </div>
  );
}

export default ListadoComponent;