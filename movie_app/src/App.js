import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'
import PageNumber from "./components/Pagination/PageNumber";
 
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

     <Routes>
        <Route path="/home" element={<PageNumber/>}></Route>
        {/* <Route path="/movie" element={</>}></Route>
        <Route path="/liked" element={</>}></Route>
        <Route path="/blocked" element={</>}></Route> */}

     </Routes>

    </Router>

   
  );
}

export default App;
