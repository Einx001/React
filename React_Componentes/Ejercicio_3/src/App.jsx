import Gallery from "./components/Gallery";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Modular House Exhibit</h1>
      <p>
        Click a thumbnail at the left in order to move it to the viewing frame at the right.
      </p>

      <Gallery />
    </div>
  );
}

export default App;