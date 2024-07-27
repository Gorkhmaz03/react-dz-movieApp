import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getMovieDetails } from "../services/movieService";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDetails(movieId).then((data) => setMovie(data));
  }, [movieId]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="container">
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <Link to={`/movies/${movieId}/cast`}>Cast</Link>
      <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
    </div>
  );
};

export default MovieDetails;
