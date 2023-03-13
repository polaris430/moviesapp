import React from "react";
import "../styles/movie.css";

const Movie = ({ item }) => {
  return (
    <div>
      <div className="moviecard">
        <img src={item.Poster}></img>
        <h2 className="title">{item.Title}</h2>
      </div>
    </div>
  );
};

export default Movie;
