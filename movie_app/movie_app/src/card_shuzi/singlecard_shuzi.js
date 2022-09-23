import React, { useState, useContext, useEffect } from "react";
//use https
export const API_ENDPOINT = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_KEY}`;
//use it later when we searching for a single Ovie

console.log(API_ENDPOINT);
