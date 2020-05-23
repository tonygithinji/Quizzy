import React, { useState, useEffect } from 'react';
import { useTrail, animated } from 'react-spring';
import cx from 'classnames';
import { shuffleAnswers } from '../utils/helpers';

const Question = ({ question, trackSelectedAnswer, submittedAnswer }) => {
    // console.log("question", question);
    const [answers, setAnswers] = useState([]);
    const trail = useTrail(answers.length, {
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: 1,
        translate: 0,
        from: { opacity: 0, translate: 60 }
    });

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
                {trail.map(({ translate, ...rest }, index) => (
                    <animated.div key={index} style={{ ...rest, transform: translate.interpolate(x => `translate(0,${x}px)`) }}>
                        <li className={cx("bg-white rounded-lg border-2 border-gray-300 px-6 py-4 my-4 text-base cursor-pointer hover:border-gray-600", {
                            "bg-gray-300 border-gray-600": answers[index] === submittedAnswer
                        })} onClick={() => handleSelectAnswer(answers[index])}>
                            {decodeURIComponent(answers[index])}
                        </li>
                    </animated.div>
                ))}
            </ul>
        </>
    )
}

export default Question;
