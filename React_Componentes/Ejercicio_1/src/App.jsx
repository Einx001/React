import Header from "./components/Header";
import SidebarLeft from "./components/SidebarLeft";
import MainContent from "./components/MainContent";
import SidebarRight from "./components/SidebarRight";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />

      <div className="content">
        <SidebarLeft />
        <MainContent />
        <SidebarRight />
      </div>

      <Footer />
    </div>
  );
}

export default App;