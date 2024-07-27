import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { getMovieCredits } from "../services/movieService";

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    getMovieCredits(movieId).then((data) => setCast(data.cast));
  }, [movieId]);

  const handleGoBack = () => {
    navigate(location.state?.from || "/movies");
  };

  return (
    <div>
      <button onClick={handleGoBack}>Go back</button>
      <h2>Cast</h2>
      <ul>
        {cast.map((member) => (
          <li key={member.cast_id}>
            {member.name} as {member.character}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
