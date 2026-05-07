import { useState } from "react";

function Tema() {
  const [oscuro, setOscuro] = useState(false);

  const cambiarTema = () => {
    setOscuro(!oscuro);
  };

  return (
    <div className={oscuro ? "dark" : "light"}>
      <h1>
        Tema {oscuro ? "Oscuro" : "Claro"}
      </h1>

      <button onClick={cambiarTema}>
        Cambiar tema
      </button>
    </div>
  );
}

export default Tema;