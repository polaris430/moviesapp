import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Movie from "./components/Movie";

const App = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState({});
  const [moviename, setMovieName] = useState(null);

  const options1 = {
    method: "GET",
    url: "https://movie-database-alternative.p.rapidapi.com/",
    params: { s: moviename, r: "json", page: "1", type: "movie" },
    headers: {
      "X-RapidAPI-Key": { API_KEY },
      "X-RapidAPI-Host": "movie-database-alternative.p.rapidapi.com",
    },
  };

  useEffect(() => {
    if (moviename) {
      axios
        .request(options1)
        .then(function (response) {
          console.log(response.data);
          setData(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  }, [moviename]);

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setMovieName(value);
    setValue("");
  };

  return (
    <div className="app">
      <h1>Betflix</h1>
      <div className="form">
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            value={value}
            onChange={handleInputChange}
            placeholder="search"
          />
          <button type="submit" className="srchbtn">
            Submit
          </button>
        </form>
      </div>
      <div className="movielist">
        {data.Search?.map((item) => (
          <Movie key={item.imdbID} item={item} />
        ))}
      </div>
      <footer className="footer">
        <p>Copyright &copy; polaris430</p>
      </footer>
    </div>
  );
};

export default App;
