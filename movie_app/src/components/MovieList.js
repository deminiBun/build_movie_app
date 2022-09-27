import React, { useState, useEffect } from "react";
import SingleMovie from "./SingleMovie";
import "./MovieList.css";

const MovieList = (props) => {
  const [data, setData] = useState([]);
  const page = props.page;

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

  const movieArr = [];
  data.forEach((element, index) => {
    let movie = data[index];
    movie = {
      id: movie.id,
      title: movie.title,
      overview: movie.overview,
      date: movie.release_date,
      image: movie.poster_path,
      background: movie.backdrop_path,
      type: movie.genre_ids,
      totalPages: data.total_pages,
    };
    movieArr.push(<SingleMovie data={movie} key={movie.id} />);
  });

  return (
    <main>
      <div className='gallery-container'>{movieArr}</div>
    </main>
  );
};

export default MovieList;
