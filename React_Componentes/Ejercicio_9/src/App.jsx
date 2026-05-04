import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import PostList from './components/PostList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Navbar />

      <div className="layout">
        <LeftSidebar />
        <PostList />
        <RightSidebar />
      </div>

      <Footer />
    </div>
  );
}

export default App;