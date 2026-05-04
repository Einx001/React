import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Empresa from "./pages/Empresa";
import Sedes from "./pages/Sedes";

function App() {
  return (
    <BrowserRouter>

      {/* NAV */}
      <nav>
        <Link to="/">Inicio</Link> |{" "}
        <Link to="/empresas/1">Empresa 1</Link> |{" "}
        <Link to="/empresas/2">Empresa 2</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Inicio</h1>} />

        {/* RUTA PADRE */}
        <Route path="/empresas/:id" element={<Empresa />}>
          
          {/* SUBRUTA */}
          <Route path="sedes" element={<Sedes />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;