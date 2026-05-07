function TablaProductos() {

  const productos = [
    {
      id: 1,
      nombre: "Laptop",
      categoria: "Tecnología",
      precio: 3500,
      disponible: true
    },
    {
      id: 2,
      nombre: "Mouse",
      categoria: "Accesorios",
      precio: 80,
      disponible: false
    },
    {
      id: 3,
      nombre: "Teclado",
      categoria: "Accesorios",
      precio: 150,
      disponible: true
    }
  ];

  return (
    <div>
      <h1>Listado de Productos</h1>

      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Precio</th>
            <th>Estado</th>
          </tr>
        </thead>

        <tbody>
          {productos.map((prod) => (
            <tr
              key={prod.id}
              className={prod.disponible ? "disponible" : "nodisponible"}
            >
              <td>{prod.nombre}</td>

              <td>{prod.categoria}</td>

              <td>
                {prod.precio.toLocaleString("es-CO", {
                  style: "currency",
                  currency: "COP"
                })}
              </td>

              <td>
                {prod.disponible
                  ? "Disponible"
                  : "No disponible"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaProductos;