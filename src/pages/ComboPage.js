import React from 'react';
import ComboCard from '../components/combo_card';
import "./Pizza_combo_drink_page.css"
const combos = [
  { image: 'https://optim.tildacdn.com/tild3635-3738-4035-b837-363933393237/-/resize/520x/-/format/webp/__5.png', title: 'Нескучный вечер', description: 'Пицца Пепперони 35см + Брусничный морс 0.5 л ', price: 630 },
  { image: 'https://optim.tildacdn.com/tild3635-3738-4035-b837-363933393237/-/resize/520x/-/format/webp/__5.png', title: 'Парочка', description: 'Пицца Маргарита 30см+ Ветчина и грибы 35см + Coca-Cola 0.3л 2 шт. ', price: 1200 },
  { image: 'https://optim.tildacdn.com/tild3635-3738-4035-b837-363933393237/-/resize/520x/-/format/webp/__5.png', title: 'Для друзей', description: 'Пицца Пепперони 30см + Пицца Цезарь 30см + Пицца Сырная 30см', price: 1490 },
];

function ComboPage({ addToCart }) {
  return (
    <div>
      <h1 className="header_view">Комбо</h1>
      <div className="cards-container">
        {combos.map((combo, index) => (
          <ComboCard
            key={index}
            image={combo.image}
            title={combo.title}
            description={combo.description}
            price={combo.price}
            addToCart={() => addToCart({ title: combo.title, price: combo.price })}
          />
        ))}
      </div>
    </div>
  );
}

export default ComboPage;
