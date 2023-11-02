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
  const [answeredTenthQuestion, setAnsweredTenthQuestion] = useState(false);




  const questions = [
    {
      question: 'Вопрос 1: Какая столица России?',
      options: ['Москва', 'Санкт-Петербург', 'Казань', 'Новосибирск'],
      correctAnswer: 0,
    },
    {
      question: 'Вопрос 2: Какой год основания Санкт-Петербурга?',
      options: ['1703', '1803', '1903', '2003'],
      correctAnswer: 0,
    },
    {
      question: 'Вопрос 3: Какое животное самое быстрое?',
      options: ['Гепард', 'Лев', 'Медведь', 'Заяц'],
      correctAnswer: 0,
    },
    {
      question: 'Вопрос 4: Какой город является столицей Франции?',
      options: ['Париж', 'Лондон', 'Мадрид', 'Рим'],
      correctAnswer: 0,
    },
    {
      question: 'Вопрос 5: В каком году началась Вторая мировая война?',
      options: ['1939', '1941', '1945', '1950'],
      correctAnswer: 0,
    },
    {
      question: 'Вопрос 6: Какая самая высокая гора в мире?',
      options: ['Эверест', 'Килиманджаро', 'Аконкагуа', 'Маккензи'],
      correctAnswer: 0,
    },
    {
      question: 'Вопрос 7: Сколько будет 10-4*2?',
      options: ['14', '10', '2', '9'],
      correctAnswer: 2,
    },
    {
      question: 'Вопрос 8: Сколько будет 120/6+5?',
      options: ['35', '25', '120', '6'],
      correctAnswer: 1,
    },
    {
      question: 'Вопрос 9: Назови водный транспорт?',
      options: ['автомобиль', 'самокат', 'лодка', 'велосипед'],
      correctAnswer: 2,
    },
    {
      question: 'Вопрос 10: Выбери воздушный транспорт?',
      options: ['лодка', 'трактор', 'трамвай', 'самолёт'],
      correctAnswer: 3,
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
  
  
  return (
    <div className='main-page'>
      <div className="header1">
        {currentQuestion !== 10 && (
          <>
            <span>{questions[currentQuestion].question}</span>
            <div className="options">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className={`option ${selectedOption === index ? (index === questions[currentQuestion].correctAnswer ? 'correct-fade-in' : 'incorrect-fade-in') : ''}`}
                  disabled={showNextQuestion}
                >
                  {option}
                </button>
              ))}
            </div>
          </>
        )}
        {currentQuestion === 10 && (
          <>
          <div className="score">
            Общее количество правильных ответов: {totalScore}
          </div>
          <div className="correct-answers2">
            <div className = "correct-answers-label2">Правильные ответы:</div>
            {questions.map((question, index) => (
              <div key={index}>
                Вопрос {index + 1}: {question.options[question.correctAnswer]}
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
