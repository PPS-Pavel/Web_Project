import React from 'react';
import DrinkCard from '../components/drink_card';
import "./Pizza_combo_drink_page.css"
const drinks = [
  { image: 'https://optim.tildacdn.com/tild3430-3063-4462-a337-356231353634/-/resize/520x/-/format/webp/swy14rdtu10ctfbm27w5.png', title: 'Coca-Cola', description: '0.3 л', price: 99 },
  { image: 'https://optim.tildacdn.com/tild6134-6530-4731-a162-356166303639/-/resize/520x/-/format/webp/5fd4dcc4135b4ce1b2db.jpeg', title: 'BonAqua', description: 'Без газа, 0.5 л', price: 69 },
  { image: 'https://optim.tildacdn.com/tild6664-3262-4765-b261-313965646333/-/resize/520x/-/format/webp/luk9m0rp3lpit7hxu5or.jpg', title: 'Брусничный морс', description: '0.5 л', price: 105 },
  { image: 'https://optim.tildacdn.com/tild3865-3630-4738-a134-373136343036/-/resize/520x/-/format/webp/62335636899e456eafaa.jpeg', title: 'FuzeTea', description: 'Черный с лимоном и лемонграссом, 0.5 л', price: 90 },
];

function DrinkPage({ addToCart }) {
  return (
    <div>
      <h1 className="header_view">Напитки</h1>
      <div className="cards-container">
        {drinks.map((drink, index) => (
          <DrinkCard
            key={index}
            image={drink.image}
            title={drink.title}
            description={drink.description}
            price={drink.price}
            addToCart={() => addToCart({ title: drink.title, price: drink.price })}
          />
        ))}
      </div>
    </div>
  );
}
export default DrinkPage