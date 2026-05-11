import { useState } from "react";
import axios from "axios";

function TipoCoctel() {

  const [tipo, setTipo] = useState("");
  const [cocteles, setCocteles] = useState([]);

  // OBTENER CÓCTELES
  const obtenerCocteles = async (valor) => {

    try {

      const respuesta = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${valor}`
      );

      setCocteles(respuesta.data.drinks || []);

    } catch (error) {
      console.log(error);
    }
  };

  // CAMBIO DE SELECT
  const handleChange = (e) => {

    const valor = e.target.value;

    setTipo(valor);

    obtenerCocteles(valor);
  };

  return (
    <div className="contenedor">

      <h1>Filtrar Cócteles</h1>

      {/* SELECT */}
      <select
        value={tipo}
        onChange={handleChange}
      >
        <option value="">
          Seleccione tipo
        </option>

        <option value="Alcoholic">
          Alcoholic
        </option>

        <option value="Non_Alcoholic">
          Non_Alcoholic
        </option>

        <option value="Optional_alcohol">
          Optional_alcohol
        </option>

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

export default TipoCoctel;
