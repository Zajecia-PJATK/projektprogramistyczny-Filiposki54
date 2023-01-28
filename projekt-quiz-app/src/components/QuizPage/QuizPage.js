import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import quizzes from '../../data/quizzes.json';
import SingleChoice from '../SingleChoice/SingleChoice';
import MultipleChoice from '../MultipleChoice/MultipleChoice';
import TrueFalse from '../TrueFalse/TrueFalse';
import ShortAnswer from '../ShortAnswer/ShortAnswer';
import NamePrompt from '../NamePrompt/NamePrompt';

const QuizPage = () => {
  const { title } = useParams();
  const quiz = quizzes.find((q) => q.title === title);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [points, setPoints] = useState(0);
  const [name, setName] = useState('');

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
    setSelectedAnswers([]);
  };

  const handleAnswerSelection = (answer) => {
    setSelectedAnswers(selectedAnswers.concat(answer));
  };
  const [selectedOption, setSelectedOption] = useState('');
  const handleOptionSelection = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      {quiz && quiz.questions.length > 0 && (
        <>
          {quiz.questions[currentQuestion].type === 'singleChoice' && (
            <SingleChoice
              question={quiz.questions[currentQuestion].question}
              answers={quiz.questions[currentQuestion].answers}
              selectedAnswer={selectedAnswers[0]}
              handleAnswerSelection={handleAnswerSelection}
            />
          )}
          {quiz.questions[currentQuestion].type === 'multipleChoice' && (
            <MultipleChoice
              question={quiz.questions[currentQuestion].question}
              answers={quiz.questions[currentQuestion].answers}
              selectedAnswers={selectedAnswers}
              handleAnswerSelection={handleAnswerSelection}
            />
          )}
          {quiz.questions[currentQuestion].type === 'truefalse' && (
            <TrueFalse
              question={quiz.questions[currentQuestion].question}
              answer={quiz.questions[currentQuestion].answer}
              selectedAnswer={selectedAnswers[0]}
              handleAnswerSelection={handleAnswerSelection}
            />
          )}
          {quiz.questions[currentQuestion].type === 'shortAnswer' && (
            <ShortAnswer
              question={quiz.questions[currentQuestion].question}
              selectedAnswer={selectedAnswers[0]}
              handleAnswerSelection={handleAnswerSelection}
            />
          )}
          <button onClick={handleNextQuestion}>Next</button>
        </>
      )}
    </>
  );
};

export default QuizPage;
