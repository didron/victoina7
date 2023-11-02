import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useHistory, Link } from "react-router-dom";
import Question from './Question';
import Answer from './Answer';
import './Header.css';
import './MainPage.css';
import logoImage from './logotype.png';
import QuestionHard from './QuestionHard';

const App = () => {
  const [showContent, setShowContent] = useState(true);

  const handleEasyClick = () => {
    setShowContent(false);
    // Выполнить переход на страницу "Question"
  };

  const handleHardClick = () => {
    setShowContent(false);
    // Обработка нажатия на кнопку "Сложный уровень"
  };

  const handleLogoClick = () => {
    setShowContent(true);
    // Выполнить переход на главную страницу
  };

  return (
    <Router>
      <div>
        <div className="header">
          <div className="logo">
            <Link to="/" onClick={handleLogoClick}>
              <img src={logoImage} alt="Логотип" />
            </Link>
          </div>
          <div className="title">
            <span>Викторина для дошкольников и школьников младших классов</span>
          </div>
          <div className="results">Таблица результатов</div>
          <div className="login">Вход / Регистрация</div>
        </div>
        {showContent && (
          <div className="main-page">
            <div className='side1'></div>
            <div className="blok">
              <h1 className="welcome-text">Добро пожаловать в викторину!</h1>
              <h1 className="choose-text">Сколько тебе лет?</h1>
              <div className="button-container">
                <Link to="/question">
                  <button className="button-ez" onClick={handleEasyClick}>4-7</button>
                </Link>
                <Link to="/questionHard">
                <button className="button-hard" onClick={handleHardClick}>8-12</button>
                </Link>
              </div>
            </div>
            <div className='side3'></div>
          </div>
        )}
      </div>

      <Routes>
        <Route path='app' element={<App />} />
        <Route path='/question' element={<Question />} />
        <Route path='/questionHard' element={<QuestionHard />} />
      </Routes>
    </Router>
  );
}

export default App;
