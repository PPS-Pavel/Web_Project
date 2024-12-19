import React from "react";
import "./review.css";

const Reviews = ({ reviews }) => {
  return (
    <section className="reviews">
      <h2>Отзывы</h2>
      <div className="reviews-container">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <h3>{review.name}</h3>
            <p>{review.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
