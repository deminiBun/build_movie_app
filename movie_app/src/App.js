import "./App.css";
import React, { useState } from "react";
import MovieList from "./components/MovieList";
import NavBar from "./components/NavBar";
import Pagination from "./components/Pagination";

function App() {
  const [page, setPage] = useState(1);
  const handleGetPage = (props) => {
    setPage(props);
  };

  return (
    <div className='App'>
      <NavBar />
      <Pagination getPage={handleGetPage} currPage={page} />
      <MovieList page={page} />
    </div>
  );
}

export default App;
