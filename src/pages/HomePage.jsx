import React, { useState, useEffect } from "react";
import { getTrendingMovies } from "../services/movieService";
import MovieList from "../components/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then((data) => setMovies(data.results));
  }, []);

  return (
    <div className="container">
      <h1>Trending Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
