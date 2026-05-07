import './App.css';
import Navbar from './components/Navbar';
import AddPostButton from './components/AddPostButton';
import PostsCard from './components/PostsCard';

function App() {
  return (
    <div className="app">
      <Navbar />

      <div className="main">
        <AddPostButton />
        <PostsCard />
      </div>
    </div>
  );
}

export default App;