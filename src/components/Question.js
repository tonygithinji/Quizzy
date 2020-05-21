import React from 'react';

const Question = ({ question }) => {
    return (
        <>
            <h2 className="text-2xl">{question.question}</h2>
            <ul className="my-4 text-base">
                <li className="bg-white rounded-lg border-2 border-gray-300 px-6 py-4 my-4 text-base">Answer One</li>
                <li className="bg-white rounded-lg border-2 border-gray-300 px-6 py-4 my-4 text-base">Answer Two</li>
                <li className="bg-white rounded-lg border-2 border-gray-300 px-6 py-4 my-4 text-base">Answer Three</li>
                <li className="bg-white rounded-lg border-2 border-gray-300 px-6 py-4 my-4 text-base">Answer Four</li>
            </ul>
        </>
    )
}

export default Question;
