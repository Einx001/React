import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function DetalleComponent() {

  const { id } = useParams();

  const [detalle, setDetalle] = useState(null);

  // OBTENER DETALLE
  const obtenerDetalle = async () => {

    try {

      const respuesta = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      );

      setDetalle(respuesta.data.drinks[0]);

    } catch (error) {
      console.log(error);
    }
  };

  // CARGA AL ENTRAR
  useEffect(() => {
    obtenerDetalle();
  }, []);

  if (!detalle) {
    return <h2>Cargando...</h2>;
  }

  return (
    <div className="detalle">

      <h1>{detalle.strDrink}</h1>

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

      <Link to="/">
        Volver
      </Link>

    </div>
  );
}

export default DetalleComponent;