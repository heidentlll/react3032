import React, { useState } from 'react';
const Item = () => {
    const riddles = [
        {
            id: 1,
            description: "Что можно увидеть один раз в минуту, два раза в моменте и ни разу в тысяче лет?",
            option1: "Часы",
            option2: "Буква 'М'",
            option3: "Секунда",
            option4: "Песочные часы",
            correct: 2
        },
        {
            id: 2,
            description: "Что идёт вверх, но никогда не опускается вниз?",
            option1: "Воздух",
            option2: "Температура",
            option3: "Возраст",
            option4: "Вода",
            correct: 3,
        },
        {
            id: 3,
            description: "Что всегда перед вами, но вы не можете этого увидеть?",
            option1: "Будущее",
            option2: "Зеркало",
            option3: "Солнце",
            option4: "Тень",
            correct: 1,
        },
        {
            id: 4,
            description: "Что может путешествовать по всему миру, оставаясь в одном и том же углу?",
            option1: "Письмо",
            option2: "Марка",
            option3: "Часы",
            option4: "Книга",
            correct: 2,
        },
        {
            id: 5,
            description: "Что можно разбить, не касаясь его?",
            option1: "Стекло",
            option2: "Облако",
            option3: "Яйцо",
            option4: "Тишину",
            correct: 4,
        }
    ];
    const [userAnswers, setUserAnswers] = useState({});
    const handleAnswerSelection = (riddleId, answer) => {
        setUserAnswers((prevAnswers) => ({
            ...prevAnswers,
            [riddleId]: answer,
        }));
    };
    return (
        <div>
            {riddles.map((riddle) => {
                const userAnswer = userAnswers[riddle.id];
                const isCorrect = userAnswer === riddle.correct;
                const feedback = isCorrect ? 'Правильный ответ!' : 'Вы ответили неправильно.';
                return (
                    <div key={riddle.id} className="riddle-box">
                        <h3 className="riddle-description">{riddle.description} </h3>
                        <ol className="answer-options" style={{ listStyleType: 'none', padding: 0 }}>
                            <li>
                                <button className="answer-button"
                                    onClick={() => handleAnswerSelection(riddle.id, 1)}>
                                    {riddle.option1}
                                </button>
                            </li>
                            <li>
                                <button className="answer-button"
                                    onClick={() => handleAnswerSelection(riddle.id, 2)}>
                                    {riddle.option2}
                                </button>
                            </li>
                            <li>
                                <button className="answer-button"
                                    onClick={() => handleAnswerSelection(riddle.id, 3)}>
                                    {riddle.option3}
                                </button>
                            </li>
                            <li>
                                <button className="answer-button"
                                    onClick={() => handleAnswerSelection(riddle.id, 4)}>
                                    {riddle.option4}
                                </button>
                            </li>
                        </ol>
                        {userAnswer && <p className="feedback">{feedback}</p>}
                    </div>
                );
            })}
        </div>
    );
}

export default Item;