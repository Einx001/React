import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Usuarios from "./pages/Usuarios";
import UsuarioDetalle from "./pages/UsuarioDetalle";

function App() {
  return (
    <BrowserRouter>

      {/* NAV SIMPLE */}
      <nav>
        <Link to="/">Inicio</Link> |{" "}
        <Link to="/usuarios">Usuarios</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Inicio</h1>} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/usuarios/:id" element={<UsuarioDetalle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;