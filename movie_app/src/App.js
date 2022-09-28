import "./App.css";
import React, { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
import NavBar from "./components/NavBar";
import { Header } from "./components/Header";
import Pagination from "./components/Pagination";
import MovieIntro from "./components/MovieIntro";
import { Route, Routes } from "react-router-dom";
import LikedList from "./components/LikedList";
// import Modal from "./components/Modal";

function App() {
  const [page, setPage] = useState(1);
  const [movieID, setMovieID] = useState();
  const [movieDetail, setMovieDetail] = useState([]);
  const [genresList, setGenresList] = useState([]);
  const [likedList, setLikedList] = useState([]);
  const [blockedList, setBlockedList] = useState([]);
  const [showIntro, setShowIntro] = useState(false);
  const [data, setData] = useState([]);
  const [likedDetail, setLikedDetail] = useState([]);
  const handleGetPage = (props) => {
    setPage(props);
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
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=ba0b9a7674177e1522e562b4d529814e&language=en-US&page=${page}`
    )
      .then((res) => {
        if (!res.ok) throw new Error("Something Went Wrong!!!");
        return res.json();
      })
      .then((data) => {
        const movies = Object.values(data)[1];
        setData(movies);
      });
  }, [page]);

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

  // const test = () => {
  //   const temp = [];
  //   console.log(likedList);
  //   likedList.forEach(async (id) => {
  //     const res = await fetch(
  //       `https://api.themoviedb.org/3/movie/${id}?api_key=ba0b9a7674177e1522e562b4d529814e&language=en-US`
  //     );
  //     console.log(res.json());
  //     temp.push(res.json());
  //   });
  //   return temp;
  // };

  // const handleFecthLikedMovie = async () => {
  //   const temp = test();
  //   console.log(temp);
  //   Promise.all(temp).then((value) => {
  //     setLikedDetail(value);
  //   });
  // };

  // useEffect(async () => {
  //   console.log("12431542642");
  //   handleFecthLikedMovie();
  // }, [likedList, handleFecthLikedMovie]);

  useEffect(() => {
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
          const tem = [...likedDetail, data];
          setLikedDetail(tem);
        });
    });
  }, [likedList]);

  const onShowHandler = () => {
    setShowIntro(true);
  };

  const closeIntroHandler = () => {
    setShowIntro(false);
  };

  const likedListHandler = (props) => {
    let newList = [...likedList];
    newList.push(props);
    let uniq = (a) => [...new Set(newList)];
    setLikedList(uniq);
  };

  const blockedListHandler = (props) => {
    let newList = [...blockedList];
    newList.push(props);
    let uniq = (a) => [...new Set(newList)];
    setBlockedList(uniq);

    // Remove from liked list
    let newLikedList = [];
    for (let element of likedList) {
      if (element !== props) {
        newLikedList.push(element);
      }
    }
    setLikedList(newLikedList);
  };

  const unlikedListHandler = (props) => {
    let newList = [];
    for (let element of likedDetail) {
      if (element.id !== props) {
        newList.push(element);
      }
    }
    setLikedDetail(newList);
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
              <MovieList
                page={page}
                getMovieID={handleGetMovieID}
                movieID={movieID}
                movieData={data}
                onShow={onShowHandler}
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
                detail={movieDetail}
                likedList={likedList}
                likedDetail={likedDetail}
                getMovieID={handleGetMovieID}
                handleBlockedList={blockedListHandler}
                handleUnlikedList={unlikedListHandler}
              />
            </div>
          }
        />
        <Route
          path='/blocked'
          element={
            <div className='App'>
              <Header title='Blocked List' />
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
