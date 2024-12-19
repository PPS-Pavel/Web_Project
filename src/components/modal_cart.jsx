import React, { useState } from "react";
import "./modal_cart.css";

function Modal({ isOpen, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Введите имя.";
    } else if (!/^[А-Яа-яЁё\s]+$/.test(formData.name)) {
      newErrors.name = "Имя должно содержать только русские буквы.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Введите номер телефона.";
    } else if (!/^[78]\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Телефон должен начинаться с 7 или 8 и содержать 10 цифр.";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Введите адрес.";
    } else if (!/^.{5,}$/.test(formData.address)) {
      newErrors.address = "Адрес должен быть длиной не менее 5 символов.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Введите email.";
    } else if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(formData.email)
    ) {
      newErrors.email = "Введите корректный email.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (validate()) {
      onSubmit(formData);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">Заполните данные для заказа</div>
        <div className="modal-body">
          <label>Имя</label>
          <input
            type="text"
            name="name"
            placeholder="Иван"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}

          <label>Номер телефона</label>
          <input
            type="text"
            name="phone"
            placeholder="79001234567"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <p className="error">{errors.phone}</p>}

          <label>Адрес</label>
          <input
            type="text"
            name="address"
            placeholder="ул. Ленина, д. 1"
            value={formData.address}
            onChange={handleChange}
          />
          {errors.address && <p className="error">{errors.address}</p>}

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="example@mail.com"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="modal-footer">
          <button className="cancel-btn" onClick={onClose}>
            Отмена
          </button>
          <button className="submit-btn" onClick={handleSubmit}>
            Заказать
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
