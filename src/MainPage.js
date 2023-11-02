import React from 'react';
import './MainPage.css';
import Question from './Question';
const MainPage = () => {
  return (
    <div className="main-page">
      <div className='side1'></div>
        <div className="blok">
          
      <h1 className="welcome-text">Добро пожаловать в викторину!</h1>
      <h1 className="choose-text">Сколько тебе лет?</h1>
      <div className="button-container">
        <button className="button-ez" onClick={handleEasyClick}>4-7</button>
        <button className="button-hard"onClick={handleHardClick}>8-12</button>
      </div>
        </div>
        <div className='side3'></div>
    </div>
  );
}

export default MainPage;

function handleEasyClick() {
  <div> <Question/></div>

}

function handleHardClick() {
  // Обработка нажатия на кнопку "Сложный уровень"
  // Здесь вы можете выполнить необходимые действия
}
