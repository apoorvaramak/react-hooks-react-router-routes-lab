import React from "react";
import { movies } from "../data";

function Movies() {
  const movieList = movies.map((element) => {
    return (<div key = {element.title}>
      <h2>Title: {element.title}</h2>
      Time: {element.time}
      <br/> 
      Genres: <ul id = "ul">
      {element.genres.map((genre) => {
        return <li key = {genre}>{genre}</li>
      })}
      </ul>
    </div>)
  })
  return <div>
    <h1>Movies Page</h1>
    {movieList}
  </div>;
}

export default Movies;
