import React from "react";
import { directors } from "../data";


function Directors() {
  const directorList = directors.map(director => {
    return (<div key = {director.name}>
      <h2>Name: {director.name}</h2>
      Movies: <ul>
        {director.movies.map(movie => {
        return <li key = {movie}>{movie}</li>
      })}
      </ul>
    </div>)
  })
  return <div>
  <h1>Directors Page</h1>
  {directorList}
  </div>;
}

export default Directors;
