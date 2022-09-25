import "./App.css";
import { BrowserRouter as Router , Route, Link} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className='App'>
        <h1>Movie List</h1>
        <div className="navigation">
          <ul>
            <li><Link to="/home">Home Page</Link></li>
            <li><Link to="/movie">Movie List</Link></li>
            <li><Link to="/liked">Movie List of Liked</Link></li>
            <li><Link to="/blocked">Movie List of Blocked</Link></li>
          </ul>
        </div>
      </div>
    </Router>
  );
}

export default App;
