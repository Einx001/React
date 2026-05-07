import { useState } from "react";
import Child from "./Child";

function Parent() {

  // MENSAJE PARA EL HIJO
  const [mensajePadre, setMensajePadre] = useState("");

  // INPUT DEL PADRE
  const [inputPadre, setInputPadre] = useState("");

  // MENSAJE RECIBIDO DEL HIJO
  const [mensajeHijo, setMensajeHijo] = useState("");

  // ENVIAR AL HIJO
  const enviarAlHijo = () => {
    setMensajePadre(inputPadre);
  };

  // RECIBIR DEL HIJO
  const recibirDelHijo = (mensaje) => {
    setMensajeHijo(mensaje);
  };

  return (
    <div className="container">

      <h1>Parent Component</h1>

      <input
        type="text"
        placeholder="Enter a message"
        value={inputPadre}
        onChange={(e) =>
          setInputPadre(e.target.value)
        }
      />

      <br /><br />

      <button onClick={enviarAlHijo}>
        Send Message To Child
      </button>

      <p>
        Message from Child::
        <strong> {mensajeHijo}</strong>
      </p>

      <hr />

      <Child
        mensajePadre={mensajePadre}
        enviarAlPadre={recibirDelHijo}
      />

    </div>
  );
}

export default Parent;