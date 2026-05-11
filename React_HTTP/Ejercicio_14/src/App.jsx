import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import ListaPersonajes from "./components/ListaPersonajes";
import DetallePersonaje from "./components/DetallePersonaje";

import "./App.css";

function App() {

  return (
    <BrowserRouter>

      <Routes>

        {/* LISTADO */}
        <Route
          path="/"
          element={<ListaPersonajes />}
        />

        {/* DETALLE */}
        <Route
          path="/personaje/:id"
          element={<DetallePersonaje />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;