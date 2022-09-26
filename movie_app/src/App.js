import "./App.css"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from "./components/Home/Home"
import Movie from "./components/Movie/Movie"
import Liked from "./components/Liked/Liked"
import Blocked from "./components/Blocked/Blocked"

function App () {
  return (
    <Router>
      <div className='App'>
        <h1>Movie List</h1>

        <div className="navigation">
          <ul>
            <li><Link to="/">Home Page</Link></li>
            <li><Link to="/movie">Movie List</Link></li>
            <li><Link to="/liked">Movie List of Liked</Link></li>
            <li><Link to="/blocked">Movie List of Blocked</Link></li>
          </ul>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/movie" element={<Movie />}></Route>
            <Route path="/liked" element={<Liked />}></Route>
            <Route path="/blocked" element={<Blocked />}></Route>
          </Routes>
        </div>
      </div>
    </Router>

   
  );
}

export default App
