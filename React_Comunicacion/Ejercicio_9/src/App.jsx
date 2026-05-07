import Semaforo from "./components/Semaforo";
import "./App.css";

function App() {
  return (
    <div>
      <Semaforo estado="rojo" />
      <Semaforo estado="amarillo" />
      <Semaforo estado="verde" />
    </div>
  );
}

export default App;