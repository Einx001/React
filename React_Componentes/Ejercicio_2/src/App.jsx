import Header from "./components/Header";
import Menu from "./components/Menu";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />

      <div className="layout">
        <Menu />
        <Content />
        <Sidebar />
      </div>

      <Footer />
    </div>
  );
}

export default App;