import React, { useEffect } from "react";
import "./YandexMap.css"; 

const YandexMap = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src =
      "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A8175c60a707d60cdae3879cc718149f6ff248b1c69b091415e4ef8d832025d1d&amp;width=672&amp;height=542&amp;lang=ru_RU&amp;scroll=true";

    const container = document.getElementById("map-container");
    if (container) {
      container.appendChild(script);
    }

    return () => {
      if (container) {
        container.innerHTML = "";
      }
    };
  }, []);

  return <div id="map-container" />;
};

export default YandexMap;
