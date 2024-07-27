import React, { useState, useEffect } from "react";
import {
  useParams,
  Link,
  useNavigate,
  useLocation,
  Outlet,
} from "react-router-dom";
import { getMovieDetails } from "../services/movieService";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    getMovieDetails(movieId).then((data) => setMovie(data));
  }, [movieId]);

  const handleGoBack = () => {
    navigate(location.state?.from || "/movies");
  };

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="container">
      <button onClick={handleGoBack}>Go back</button>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <nav>
        <Link to={`cast`} state={{ from: location.state?.from }}>
          Cast
        </Link>
        <Link to={`reviews`} state={{ from: location.state?.from }}>
          Reviews
        </Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
