import React from "react";
import Reviews from "../components/review";
import "./Review_page.css";

const reviewsData = [
  { name: "Анастасия", text: "И снова порадовали быстрой доставкой вкусной еды! Пицца за баллы - отличный бонус!" },
  { name: "Малик", text: "Привезли очень быстро заказ, упаковано добротно. Ну и сама пицца объедение)" },
  { name: "Матвей", text: "Всё было очень вкусно, быстро и не заставили долго ждать. Обязательно закажем ещё!)" },
  { name: "Юлия", text: "Быстрая доставка, вкусная пицца, приятное обслуживание. Все понравилось!" },
  { name: "Алексей", text: "Вкусная пицца, горячая. Доставили за 30 минут с момента звонка. Вы лучшие в моём рейтинге!" },
  { name: "Валентина", text: "Очень быстрая доставка, безумно вкусно! Будем заказывать снова и снова." },
];

function ReviewsPage() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newReview = {
      name: formData.get("name"),
      email: formData.get("email"),
      text: formData.get("review"),
    };

    alert(`Спасибо за отзыв ${newReview.name}!\nEmail: ${newReview.email}\nОтзыв: ${newReview.text}`);


    e.target.reset();
  };

  return (
    <div>
      <section className="review-form-section">
        <h2>Оставьте отзыв</h2>
        <form onSubmit={handleFormSubmit} className="review-form">
          <div>
            <label htmlFor="name">Имя:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Иван"
              required
              pattern="[А-Яа-яЁё\s]+"
              title="Имя должно содержать только русские буквы"
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@mail.com"
              required
            />
          </div>
          <div>
            <label htmlFor="review">Отзыв:</label>
            <textarea
              id="review"
              name="review"
              placeholder="Ваш отзыв"
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-review-button">Отправить</button>
        </form>
      </section>
      <Reviews reviews={reviewsData} />
    </div>
  );
}

export default ReviewsPage;
