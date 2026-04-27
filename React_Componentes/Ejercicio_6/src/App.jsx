import './App.css';
import TopNav from './components/TopNav';
import SubNav from './components/SubNav';
import SideNav from './components/SideNav';
import Content from './components/Content';

function App() {
  return (
    <div className="app">
      <TopNav />
      <SubNav />

      <div className="main-layout">
        <SideNav />
        <Content />
      </div>
    </div>
  );
}

export default App;