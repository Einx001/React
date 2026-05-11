import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import ListadoComponent from "./components/ListadoComponent";
import DetalleComponent from "./components/DetalleComponent";

import "./App.css";

function App() {

  return (
    <BrowserRouter>

      <Routes>

        {/* LISTADO */}
        <Route
          path="/"
          element={<ListadoComponent />}
        />

        {/* DETALLE */}
        <Route
          path="/detalle/:id"
          element={<DetalleComponent />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;