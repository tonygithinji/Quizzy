import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../app/Context';
import axios from '../utils/axios';
import Question from '../components/Question';

const Questions = () => {
    const { category } = useContext(AppContext);
    const [questions, setQuestions] = useState([]);
    const [activeQuestion, setActiveQuestion] = useState([]);

    useEffect(() => {
        axios.get(`api.php?amount=10&category=${category.id}`).then(response => {
            const { data } = response;
            console.log(data);
            setQuestions(data.results);
            setActiveQuestion(data.results[0]);
        });
    }, []);

    const handleNextQuestion = () => {

    };

    return (
        <>
            <div className="text-center mt-8">
                <h1 className="text-5xl">Quizzy</h1>
            </div>
            <div className="text-3xl mt-12 mb-4">{category.name}</div>
            <div className="mb-4 bg-white rounded-lg border-2 border-gray-300 px-6 py-8">
                <Question question={activeQuestion} />
                <div className="mt-8 flex">
                    <button className="border border-gray-400 px-4 py-2 rounded-lg text-gray-800 focus:outline-none">I've had enough</button>
                    <div className="flex-1"></div>
                    <button className="border border-gray-400 px-4 py-2 rounded-lg text-gray-800 focus:outline-none">Next</button>
                </div>
            </div>
        </>
    )
}

export default Questions;
