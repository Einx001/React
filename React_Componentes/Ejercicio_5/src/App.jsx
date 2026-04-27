import './App.css';
import Navbar from './components/Navbar';
import PostCard from './components/PostCard';

function App() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <PostCard />
      </div>
    </div>
  );
}

export default App;