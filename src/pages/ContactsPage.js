import React from 'react';
import YandexMap from '../components/YandexMap';
import "./Contacts_page.css"
function ContactsPage() {
  return (
    <div>
      <h1 className="header_view">Контакты</h1>
      <div className="contacts-section">
        <div className="contacts-info">
          <p>+7 (3424) 12-98-72</p>
          <p>Улица Малышева, 51, Екатеринбург, Свердловская обл., 620075</p>
          <p>00:00-24:00 - круглосуточная доставка пиццы</p>
        </div>
        <div className="contacts-map">
          <YandexMap />
        </div>
      </div>
    </div>
  );
}

export default ContactsPage;
