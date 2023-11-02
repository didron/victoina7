import React, { useState } from 'react';
import correctSoundAnswer1 from './correctSoundAnswer.mp3'
import incorrectSoundAnswer1 from './incorrectSoundAnswer.mp3'
import './Question.css';

const QuestionHard = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showNextQuestion, setShowNextQuestion] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [showCorrectAnswers, setShowCorrectAnswers] = useState(false);




  const questions = [
    {
      question: 'Вопрос 1: Найди предмет синего цвета',
      options: ['синий диван', 'жёлтая уточка', 'красная клубника', 'зелёный крокодил'],
      correctAnswer: 0,
    },
    {
      question: 'Вопрос 2: Найди лишнюю фигуру',
      options: ['синий квадрат', 'красный круг', 'синий треугольник', 'синий ромб'],
      correctAnswer: 1,
    },
    {
      question: 'Вопрос 3: Какая самая большая цифра?',
      options: ['2', '5', '8', '6'],
      correctAnswer: 2,
    },
    {
      question: 'Вопрос 4: Ночью на небе я или круглая или в форме полумесяца',
      options: ['солнце', 'звезда', 'облако', 'луна'],
      correctAnswer: 3,
    },
    {
      question: 'Вопрос 5: Найди несъедоьный предмет',
      options: ['молоток', 'яблоко', 'банан', '1950'],
      correctAnswer: 0,
    },

  ];
  

  
  const handleAnswer = (selectedOption) => {
    setSelectedOption(selectedOption);
    const correctSoundAnswer = new Audio(correctSoundAnswer1);
    const incorrectSoundAnswer = new Audio(incorrectSoundAnswer1);
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
      setTotalScore(totalScore + 1);
      correctSoundAnswer.play();
    } else {
      incorrectSoundAnswer.play();
    }
  
    setShowNextQuestion(true);
  
    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length+1) {
        setCurrentQuestion(nextQuestion);
        setSelectedOption(null);
        setShowNextQuestion(false);
        if (nextQuestion === questions.length) {
          setShowCorrectAnswers(true);
        }
        
      } else {
        // Викторина завершена, показываем результаты
        setShowCorrectAnswers(true);
      }
    }, 400);
  };
  

const index = 0; 
//img src={require(`./img/blueCha${optionIndex + index}.png`)} 
return (
  <div className='main-page'>
    <div className="header1">
    {currentQuestion !== 5 && (
          <>
      <span>{questions[currentQuestion].question}</span>
      <div className="options">
        {questions[currentQuestion].options.slice(index * 4, (index * 4) + 4).map((option, optionIndex) => (
          <img
            key={optionIndex}
            src={require(`./img/blueCha${(currentQuestion * 4) + optionIndex}.png`)} 
            alt={`Вариант ответа ${optionIndex + 1}`}
            onClick={() => handleAnswer(optionIndex)}
            className={`option ${selectedOption === optionIndex ? (optionIndex === questions[currentQuestion].correctAnswer ? 'correct-fade-in' : 'incorrect-fade-in') : ''}`}
            style={{ cursor: 'pointer' }}
            disabled={showNextQuestion}
          />
        ))}
      </div>
      </>
        )}
           {currentQuestion === 5 && (
          <>
            <div className="score">
              Общее количество правильных ответов: {totalScore}
            </div>
            <div className="correct-answers1">
              <div className="correct-answers-label1">Правильные ответы:</div>
              {questions.map((question, questionIndex) => (
                <div key={questionIndex}>
                  Вопрос {questionIndex + 1}: {question.options[question.correctAnswer]}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default QuestionHard;






