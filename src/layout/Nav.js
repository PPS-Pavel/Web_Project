import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
function Nav() {

  return (
    <header>
      <div className="container_logo">
        <img src="https://static.tildacdn.com/tild6538-3039-4337-a336-366336373935/_Pizza.png" alt="Logo" />
      </div>
      <nav className="menu">
        <ul>
          <li><Link to="/">Пиццы</Link></li>
          <li><Link to="/drinks">Напитки</Link></li>
          <li><Link to="/combos">Комбо</Link></li>
          <li><Link to="/about">О нас</Link></li>
          <li><Link to="/reviews">Отзывы</Link></li>
          <li><Link to="/contacts">Контакты</Link></li>
        </ul>
        <div className="cart-button">
          <Link to="/cart" className="cart-link">🛒 Корзина</Link>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
