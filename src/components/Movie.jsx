import React from "react";
import { useState } from "react";
import axios from "axios";
import "../styles/movie.css";

const Movie = ({ item }) => {
  const [showratings, setShowRatings] = useState(false);
  const [ratings, setRatings] = useState("");
  const apikey = import.meta.env.VITE_API_KEY;
  const fetchdetails = () => {
    const imdbid = item.imdbID;
    //make api call to fetch imdb ratings, imdbid is saved into item.imdbid
    const options = {
      method: "GET",
      url: "https://movie-database-alternative.p.rapidapi.com/",
      params: { r: "json", i: imdbid },
      headers: {
        "X-RapidAPI-Key": apikey,
        "X-RapidAPI-Host": "movie-database-alternative.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        setRatings(response.data.imdbRating);
        setShowRatings(!showratings);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  return (
    <div className="moviebox">
      <div className="moviecard">
        <img src={item.Poster}></img>
        <h2 className="title">{item.Title}</h2>
        <button className="ratingbtn" onClick={fetchdetails}>
          More Info
        </button>
        <p className={showratings ? "show" : "noshow"}>
          IMDB Ratings: {ratings}
        </p>
      </div>
    </div>
  );
};

export default Movie;
