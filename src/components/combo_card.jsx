import React from 'react';
import './combo_card.css';

function ComboCard({ image, title, description, price, addToCart }) {
  return (
    <div className="combo-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p className="price">{price} р.</p>
      <button className="button" onClick={addToCart}>В корзину</button>
    </div>
  );
}

export default ComboCard;
