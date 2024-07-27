import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { getMovieReviews } from "../services/movieService";

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    getMovieReviews(movieId).then((data) => setReviews(data.results));
  }, [movieId]);

  const handleGoBack = () => {
    navigate(location.state?.from || "/movies");
  };

  return (
    <div>
      <button onClick={handleGoBack}>Go back</button>
      <h2>Reviews</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>{review.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
