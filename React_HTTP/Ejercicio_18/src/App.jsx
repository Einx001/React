import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Personajes from "./components/Personajes";
import DetallePersonaje from "./components/DetallePersonaje";
import Episodios from "./components/Episodios";
import DetalleEpisodio from "./components/DetalleEpisodio";

import "./App.css";

function App() {

  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        {/* PERSONAJES */}
        <Route
          path="/personajes"
          element={<Personajes />}
        />

        <Route
          path="/personajes/:id"
          element={<DetallePersonaje />}
        />

        {/* EPISODIOS */}
        <Route
          path="/episodios"
          element={<Episodios />}
        />

        <Route
          path="/episodios/:id"
          element={<DetalleEpisodio />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;