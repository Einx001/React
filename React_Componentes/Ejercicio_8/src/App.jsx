import './App.css';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        <Topbar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;