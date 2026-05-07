import { useState } from "react";

function Ubicacion() {

  const datos = {
    Colombia: {
      Antioquia: ["Medellín", "Envigado"],
      Cundinamarca: ["Bogotá", "Soacha"]
    },

    México: {
      Jalisco: ["Guadalajara", "Zapopan"],
      CDMX: ["Ciudad de México"]
    }
  };

  const [pais, setPais] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [ciudad, setCiudad] = useState("");

  // departamentos según país
  const departamentos = pais
    ? Object.keys(datos[pais])
    : [];

  // ciudades según departamento
  const ciudades =
    pais && departamento
      ? datos[pais][departamento]
      : [];

  return (
    <div>
      <h1>Ubicación</h1>

      {/* SELECT PAÍS */}
      <select
        value={pais}
        onChange={(e) => {
          setPais(e.target.value);
          setDepartamento("");
          setCiudad("");
        }}
      >
        <option value="">Seleccione país</option>

        {Object.keys(datos).map((p) => (
          <option key={p} value={p}>
            {p}
          </option>
        ))}
      </select>

      <br /><br />

      {/* SELECT DEPARTAMENTO */}
      <select
        value={departamento}
        onChange={(e) => {
          setDepartamento(e.target.value);
          setCiudad("");
        }}
      >
        <option value="">Seleccione departamento</option>

        {departamentos.map((dep) => (
          <option key={dep} value={dep}>
            {dep}
          </option>
        ))}
      </select>

      <br /><br />

      {/* SELECT CIUDAD */}
      <select
        value={ciudad}
        onChange={(e) => setCiudad(e.target.value)}
      >
        <option value="">Seleccione ciudad</option>

        {ciudades.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      <br /><br />

      <h3>
        {pais} {departamento} {ciudad}
      </h3>
    </div>
  );
}

export default Ubicacion;