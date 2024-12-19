import React from 'react';
import './pizza_card.css';

function PizzaCard({ image, title, description, size, weight, price, addToCart }) {
  return (
    <div className="pizza-card">
      <img src={image} alt={title} className="pizza-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Размер:</strong> {size}</p>
      <p><strong>Вес:</strong> {weight} г</p>
      <p className="price">{price} р.</p>
      <button className="button" onClick={addToCart}>В корзину</button>
    </div>
  );
}

export default PizzaCard;
