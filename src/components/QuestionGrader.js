import React from 'react';
import cx from 'classnames';

const QuestionGrader = ({ answer, isCorrectAnswer, correctAnswer }) => {
    return (
        <div className="text-center my-4">
            <div className="flex justify-center align-baseline">
                {isCorrectAnswer ? (
                    <svg viewBox="0 0 30 30" className="inline w-10">
                        <path d="M11 20v-2.08a6 6 0 01-4.24-3A4.02 4.02 0 012 11V6c0-1.1.9-2 2-2h2c0-1.1.9-2 2-2h8a2 2 0 012 2h2a2 2 0 012 2v5a4 4 0 01-4.76 3.93A6 6 0 0113 17.92V20h4a1 1 0 010 2H7a1 1 0 010-2h4zm6.92-7H18a2 2 0 002-2V6h-2v6c0 .34-.03.67-.08 1zM6.08 13A6.04 6.04 0 016 12V6H4v5a2 2 0 002.08 2zM8 4v8a4 4 0 108 0V4H8z" />
                    </svg>
                ) : (
                        <svg viewBox="0 0 20 20" className="inline w-6 mx-4">
                            <path d="M10 1.6a8.4 8.4 0 100 16.8 8.4 8.4 0 000-16.8zm4.789 11.461L13.06 14.79 10 11.729l-3.061 3.06L5.21 13.06 8.272 10 5.211 6.939 6.94 5.211 10 8.271l3.061-3.061 1.729 1.729L11.728 10l3.061 3.061z" />
                        </svg>
                    )}

                <span className="text-xl">
                    {isCorrectAnswer ? "You got it right!" : "Oops! That's not correct"}
                </span>
            </div>
            <div className={cx("rounded-lg border-2 px-6 py-4 my-4 text-base flex", {
                "bg-red-300 border-red-400": !isCorrectAnswer,
                "bg-green-300 border-green-400": isCorrectAnswer
            })}>
                {isCorrectAnswer ? (
                    <svg viewBox="0 0 20 20" className="inline w-4 mr-2">
                        <path d="M8.294 16.998c-.435 0-.847-.203-1.111-.553L3.61 11.724a1.392 1.392 0 01.27-1.951 1.392 1.392 0 011.953.27l2.351 3.104 5.911-9.492a1.396 1.396 0 011.921-.445c.653.406.854 1.266.446 1.92L9.478 16.34a1.39 1.39 0 01-1.12.656c-.022.002-.042.002-.064.002z" />
                    </svg>
                ) : (
                        <svg viewBox="0 0 20 20" className="inline w-4 mr-2">
                            <path d="M14.348 14.849a1.2 1.2 0 01-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 11-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 111.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 111.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 010 1.698z" />
                        </svg>
                    )}

                <span>{decodeURIComponent(answer)}</span>
            </div>

            {!isCorrectAnswer && (
                <div className="bg-green-300 rounded-lg border-2 border-green-400 px-6 py-4 my-4 text-base flex">
                    <svg viewBox="0 0 20 20" className="inline w-4 mr-2">
                        <path d="M8.294 16.998c-.435 0-.847-.203-1.111-.553L3.61 11.724a1.392 1.392 0 01.27-1.951 1.392 1.392 0 011.953.27l2.351 3.104 5.911-9.492a1.396 1.396 0 011.921-.445c.653.406.854 1.266.446 1.92L9.478 16.34a1.39 1.39 0 01-1.12.656c-.022.002-.042.002-.064.002z" />
                    </svg>

                    <span>{decodeURIComponent(correctAnswer)}</span>
                </div>
            )}
        </div>
    )
}

export default QuestionGrader;
