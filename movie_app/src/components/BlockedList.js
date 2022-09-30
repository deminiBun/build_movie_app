import "./BlockedList.css";
import React, { useState, useEffect } from "react";
import SingleBlockedMovie from "./SingleBlockedMovie";

const BlockedList = (props) => {
  const blockedList = props.blockedList;
  console.log(blockedList);
  const [movieDetailList, setMovieDetailList] = useState([]);
  //   const [movieArr, setMovieArr] = useState([]);
  let newList = [];

  useEffect(() => {
    blockedList.forEach((id) => {
      fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=ba0b9a7674177e1522e562b4d529814e&language=en-US
          `
      )
        .then((res) => {
          if (!res.ok) throw new Error("Something Went Wrong!!!");
          return res.json();
        })
        .then((data) => {
          newList.push(data);
          setMovieDetailList(newList);
        });
    });
  }, [blockedList]);

  console.log(movieDetailList);
  //   let uniq = [...new Set(movieDetailList)];
  let movieArr = [];
  movieDetailList.forEach((element, index) => {
    let movie = movieDetailList[index];
    movie = {
      id: movie.id,
      title: movie.title,
      overview: movie.overview,
      date: movie.release_date,
      image: movie.poster_path,
      background: movie.backdrop_path,
      type: movie.genre_ids,
    };
    movieArr.push(
      <SingleBlockedMovie
        data={movie}
        key={movie.id}
        handleUnlikedList={props.handleUnlikedList}
        handleBlockedList={props.handleBlockedList}
      />
    );
  });
  return (
    <main>
      <div className='gallery-container'>{movieArr}</div>
    </main>
  );
};

export default BlockedList;
