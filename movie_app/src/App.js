import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import MovieList from "./components/MovieList";
import NavBar from "./components/NavBar";
import { Header } from "./components/Header";
import Pagination from "./components/Pagination";
import MovieIntro from "./components/MovieIntro";
import { Route, Routes } from "react-router-dom";
import LikedList from "./components/LikedList";
import BlockedList from "./components/BlockedList";
import Filter from "./components/Filter";

function App() {
  const [page, setPage] = useState(1);
  const [movieID, setMovieID] = useState();
  const [movieDetail, setMovieDetail] = useState([]);
  const [genresList, setGenresList] = useState([]);
  const [likedList, setLikedList] = useState([]);
  const [likedDetail, setLikedDetail] = useState([]);
  const [blockedList, setBlockedList] = useState([]);
  const [blockedDetail, setBlockedDetail] = useState([]);
  const [showIntro, setShowIntro] = useState(false);
  const [data, setData] = useState([]);
  const [api, setAPI] = useState(
    "https://api.themoviedb.org/3/movie/popular?api_key=ba0b9a7674177e1522e562b4d529814e&language=en-US&page="
  );
  const liked = useRef([]);
  const blocked = useRef([]);

  const handleGetPage = (props) => {
    setPage(props);
  };

  const handleSetAPI = (new_api) => {
    setAPI(new_api);
    setPage(1);
  };

  const handleGetMovieID = (props) => {
    setMovieID(props);
  };

  //fetch genres list
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=ba0b9a7674177e1522e562b4d529814e&language=en-US"
    )
      .then((res) => {
        if (!res.ok) throw new Error("Something Went Wrong!!!");
        return res.json();
      })
      .then((data) => {
        setGenresList(data.genres);
      });
  }, []);

  //fetch entire popular movie list data
  useEffect(() => {
    fetch(api + `${page}`)
      .then((res) => {
        if (!res.ok) throw new Error("Something Went Wrong!!!");
        return res.json();
      })
      .then((data) => {
        const movies = data.results;
        setData(movies);
      });
  }, [page, api, blockedList]);

  // Fetch singel movie detail according to ID
  useEffect(() => {
    if (movieID) {
      fetch(
        `https://api.themoviedb.org/3/movie/${movieID}?api_key=ba0b9a7674177e1522e562b4d529814e&language=en-US
      `
      )
        .then((res) => {
          if (!res.ok) throw new Error("Something Went Wrong!!!");
          return res.json();
        })
        .then((data) => {
          setMovieDetail(data);
        });
    }
  }, [movieID]);

  useEffect(() => {
    liked.current = [];
    if (likedList.length === 0) {
      setLikedDetail([]);
    }
    likedList.forEach((element) => {
      fetch(
        `https://api.themoviedb.org/3/movie/${element}?api_key=ba0b9a7674177e1522e562b4d529814e&language=en-US
    `
      )
        .then((res) => {
          if (!res.ok) throw new Error("Something Went Wrong!!!");
          return res.json();
        })
        .then((data) => {
          liked.current.push(data);
          liked.current = liked.current.filter(
            (value, index, self) =>
              index === self.findIndex((t) => t.id === value.id)
          );
          setLikedDetail(liked.current);
        });
    });
  }, [likedList]);

  useEffect(() => {
    blocked.current = [];
    if (blockedList.length === 0) {
      setBlockedDetail([]);
    }
    blockedList.forEach((element) => {
      fetch(
        `https://api.themoviedb.org/3/movie/${element}?api_key=ba0b9a7674177e1522e562b4d529814e&language=en-US
    `
      )
        .then((res) => {
          if (!res.ok) throw new Error("Something Went Wrong!!!");
          return res.json();
        })
        .then((data) => {
          blocked.current.push(data);
          blocked.current = blocked.current.filter(
            (value, index, self) =>
              index === self.findIndex((t) => t.id === value.id)
          );
          setBlockedDetail(blocked.current);
        });
    });
  }, [blockedList]);

  const onShowHandler = () => {
    setShowIntro(true);
  };

  const closeIntroHandler = () => {
    setShowIntro(false);
  };

  const likedListHandler = (props) => {
    let newList = [...likedList];
    newList.push(props);
    newList = newList.filter(function (item, pos) {
      return newList.indexOf(item) === pos;
    });
    setLikedList(newList);
  };

  const removeFromLikedList = (props) => {
    let newList = [...likedList];
    for (let index in newList) {
      if (newList[index] === props) {
        newList.splice(index, 1);
      }
    }
    setLikedList(newList);
  };

  // console.log(likedList);

  const blockedListHandler = (props) => {
    let newList = [...blockedList];
    newList.push(props);
    newList = newList.filter(function (item, pos) {
      return newList.indexOf(item) === pos;
    });
    setBlockedList(newList);
  };

  const removeFromBlockedList = (props) => {
    let newList = [...blockedList];
    for (let index in newList) {
      if (newList[index] === props) {
        newList.splice(index, 1);
      }
    }
    setBlockedList(newList);
  };

  // console.log(blockedList);

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path='/'
          element={
            <div className='App'>
              <Header title='The Most Popular Movies' />
              <Pagination getPage={handleGetPage} currPage={page} />
              <Filter setAPI={handleSetAPI} />
              <MovieList
                page={page}
                getMovieID={handleGetMovieID}
                movieID={movieID}
                movieData={data}
                onShow={onShowHandler}
                blockedList={blockedList}
                handleLikedList={likedListHandler}
                handleBlockedList={blockedListHandler}
              />
              <MovieIntro
                data={movieDetail}
                genresList={genresList}
                movieID={movieID}
                showIntro={showIntro}
                closeIntro={closeIntroHandler}
              />
            </div>
          }
        />
        <Route
          path='/liked'
          element={
            <div className='App'>
              <Header title='My Liked List' />
              <LikedList
                likedDetail={likedDetail}
                getMovieID={handleGetMovieID}
                removeFromLikedList={removeFromLikedList}
              />
            </div>
          }
        />
        <Route
          path='/blocked'
          element={
            <div className='App'>
              <Header title='Blocked List' />
              <BlockedList
                blockedDetail={blockedDetail}
                getMovieID={handleGetMovieID}
                removeFromBlockedList={removeFromBlockedList}
              />
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
