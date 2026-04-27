import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import WeatherImage from './components/WeatherImage';

function App() {
  return (
    <div className="container">
      <Header />
      <Navbar />
      <WeatherImage />
    </div>
  );
}

export default App;