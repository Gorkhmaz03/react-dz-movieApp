import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "../services/movieService";

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCredits(movieId).then((data) => setCast(data.cast));
  }, [movieId]);

  return (
    <div className="container">
      <h1>Cast</h1>
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
