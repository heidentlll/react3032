import React, { useState } from 'react';

function Item() {
  const [questions, setQuestions] = useState([]);
  const [questionText, setQuestionText] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [userAnswers, setUserAnswers] = useState([]);

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addQuestion({ text: questionText, options, correctAnswer });
    setQuestionText('');
    setOptions(['', '', '', '']);
    setCorrectAnswer('');
  };

  const handleAnswerSubmit = (index, selectedOption) => {
    setUserAnswers([...userAnswers, { questionIndex: index, selectedOption }]);
  };

  const addQuestion = (newQuestion) => {
    setQuestions([...questions, newQuestion]);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Добавление новой загадки </h1>
        <div>
          <label>
            Загадка:
            <input
              type="text"
              value={questionText}
              onChange={(e) => setQuestionText(e.target.value)}
            />
          </label>
        </div>
        {[0, 1, 2, 3].map((i) => (
          <div key={i}>
            <label>
              Ответ {i + 1}:
              <input
                type="text"
                value={options[i]}
                onChange={(e) => handleOptionChange(i, e.target.value)}
              />
            </label>
          </div>
        ))}
        <div>
          <label>
            Правильный ответ:
            <input
              type="text"
              value={correctAnswer}
              onChange={(e) => setCorrectAnswer(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Добавить загадку</button>
      </form>
      <div>
        <h2>Список загадок</h2>
        {questions.length === 0 ? (
          <p>Загадок нет.</p>
        ) : (
          <ul>
            {questions.map((question, index) => (
              <li key={index}>
                <h3>{question.text}</h3>
                <ul>
                  {question.options.map((option, idx) => (
                    <li
                      key={idx}
                      style={{
                        color:
                          userAnswers.find(
                            (answer) =>
                              answer.questionIndex === index &&
                              answer.selectedOption === option
                          ) &&
                          option === question.correctAnswer
                            ? 'green'
                            : userAnswers.find(
                                (answer) =>
                                  answer.questionIndex === index &&
                                  answer.selectedOption === option
                              )
                            ? 'red'
                            : 'black'
                      }}
                    >
                      {option}
                      {!userAnswers.find(
                        (answer) =>
                          answer.questionIndex === index &&
                          answer.selectedOption === option
                      ) && (
                        <button
                          onClick={() => handleAnswerSubmit(index, option)}
                        >
                          Answer
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
                {userAnswers.find((answer) => answer.questionIndex === index) && (
                  <p>
                    <strong>Правильный ответ: </strong>
                    {question.correctAnswer}
                  </p>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Item;
