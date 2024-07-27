import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../services/movieService";

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId).then((data) => setReviews(data.results));
  }, [movieId]);

  return (
    <div className="container">
      <h1>Reviews</h1>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>{review.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
