import React from "react";
const Answer = ({ text, isCorrect, selected, onClick }) => {
    const answerClass = selected
      ? isCorrect
        ? 'correct-answer selected-answer'
        : 'wrong-answer selected-answer'
      : '';
  
    return (
      <div className={`answer ${answerClass}`} onClick={onClick}>
        {text}
      </div>
    );
  };
export default Answer;  