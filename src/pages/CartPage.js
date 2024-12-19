import React, { useState } from "react";
import "./Cart_page.css";
import Modal from "../components/modal_cart";

function CartPage({ cart, removeFromCart, updateQuantity, clearCart }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);

  const handleOrderSubmit = (formData) => {
    setOrderDetails({
      ...formData,
      cart: cart,
    });
    clearCart();
  };

  return (
    <div className="cart-container">
      <h1 className="cart-header">Корзина</h1>
      {cart.length === 0 ? (
        <p className="cart_clear">Ваша корзина пуста</p>
      ) : (
        <div>
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="cart-item">
                <div>
                  <h3>{item.title}</h3>
                  <p>Цена: {item.price} р.</p>
                </div>
                <div className="cart-buttons">
                  <div className="quantity-controls">
                    <button
                      onClick={() =>
                        updateQuantity(item.title, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(item.title, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="remove-button"
                    onClick={() => removeFromCart(item.title)}
                  >
                    Удалить
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <h2 className="cart-total">
            Общая стоимость:{" "}
            {cart.reduce((total, item) => total + item.price * item.quantity, 0)}{" "}
            р.
          </h2>
          <button
            className="clear-cart"
            onClick={() => setIsModalOpen(true)}
          >
            Сделать заказ
          </button>
          <button className="clear-cart" onClick={clearCart}>
            Очистить корзину
          </button>
        </div>
      )}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleOrderSubmit}
      />
      {orderDetails && (
        <div className="order-summary">
          <h2>Ваш заказ:</h2>
          <p>Имя: {orderDetails.name}</p>
          <p>Телефон: {orderDetails.phone}</p>
          <p>Адрес: {orderDetails.address}</p>
          <p>Email: {orderDetails.email}</p>
          <h3>Заказанные товары:</h3>
          <ul>
            {orderDetails.cart.map((item, index) => (
              <li key={index}>
                {item.title} x {item.quantity} - {item.price * item.quantity} р.
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default CartPage;
