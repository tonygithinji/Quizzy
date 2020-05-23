import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { shuffleAnswers } from '../utils/helpers';

const Question = ({ question, trackSelectedAnswer, submittedAnswer }) => {
    // console.log("question", question);
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        const answers = shuffleAnswers([...question.incorrect_answers, question.correct_answer]);
        setAnswers(answers);
    }, [question]);

    const handleSelectAnswer = (answer) => {
        trackSelectedAnswer(answer);
    };

    return (
        <>
            <h2 className="text-2xl">{decodeURIComponent(question.question)}</h2>
            <ul className="my-4 text-base">
                {
                    answers.map((answer, index) => (
                        <li key={index} className={cx("bg-white rounded-lg border-2 border-gray-300 px-6 py-4 my-4 text-base cursor-pointer hover:border-gray-600", {
                            "bg-gray-300 border-gray-600": answer === submittedAnswer
                        })} onClick={() => handleSelectAnswer(answer)}>
                            {decodeURIComponent(answer)}
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default Question;
