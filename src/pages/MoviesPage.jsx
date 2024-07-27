import React, { useState } from "react";
import { searchMovies } from "../services/movieService";
import MovieList from "../components/MovieList";

const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = () => {
    searchMovies(query).then((data) => setMovies(data.results));
  };

  return (
    <div className="container">
      <h1>Search Movies</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
