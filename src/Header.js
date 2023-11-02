import React from 'react';
import './Header.css'; // Подключаем файл стилей
import logoImage from './logotype.png'; // Импортируем изображение логотипа

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logoImage} alt="Логотип" />
      </div>
      <div className="title">
        <span>Викторина для дошкольников и школьников младших классов</span>
      </div>
      <div className="results">Таблица результатов</div>
      <div className="login">Вход / Регистрация</div>
    </div>
  );
}

export default Header;
