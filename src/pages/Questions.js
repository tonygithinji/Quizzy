import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../app/Context';
import axios from '../utils/axios';
import Question from '../components/Question';

const Questions = () => {
    const { category } = useContext(AppContext);
    const [questions, setQuestions] = useState([]);
    const [activeQuestion, setActiveQuestion] = useState(null);
    const [loading, setLoading] = useState(false);
    const [points, setPoints] = useState(0);
    const [submittedAnswer, setSubmittedAnswer] = useState("");

    const history = useHistory();

    useEffect(() => {
        if (questions.length <= 4) {
            if (questions.length === 0) setLoading(true);
            axios.get(`api.php?amount=10&category=${category.id}&encode=url3986`).then(response => {
                const { data } = response;

                if (questions.length === 0) {
                    const activeQuestion = data.results.splice(0, 1);
                    setQuestions(prevState => [...prevState, ...data.results]);
                    setActiveQuestion(activeQuestion[0]);
                } else {
                    setQuestions(prevState => [...prevState, ...data.results]);
                }
                setLoading(false);
            });
        }
    }, [questions.length]);

    const handleSelectedAnswer = answer => {
        setSubmittedAnswer(answer);
    };

    const gradeQuestion = () => {
        if (decodeURIComponent(submittedAnswer) === decodeURIComponent(activeQuestion.correct_answer)) {
            setPoints(prevPoints => prevPoints + 10);
        }
    };

    const handleNextQuestion = () => {
        gradeQuestion();
        const activeQuestion = questions.splice(0, 1);
        console.log("questions", questions.length);
        setQuestions(questions);
        setActiveQuestion(activeQuestion[0]);
        setSubmittedAnswer("");
    };

    const handleEndGame = () => {
        history.push("/");
    };

    return (
        <>
            <div className="text-center mt-8">
                <h1 className="text-5xl">Quizzy</h1>
            </div>
            <div className="text-3xl mt-12 mb-4 flex">
                <div>{category.name}</div>
                <div className="flex-1"></div>
                <div>Points: <b>{points}</b></div>
            </div>
            <div className="mb-4 bg-white rounded-lg border-2 border-gray-300 px-6 py-8">
                {loading && <div>Loading...</div>}
                {!loading && activeQuestion && (
                    <div>
                        <Question question={activeQuestion} trackSelectedAnswer={handleSelectedAnswer} submittedAnswer={submittedAnswer} />
                        <div className="mt-8 flex">
                            <button className="border-2 border-gray-400 px-4 py-2 rounded-lg text-gray-800 focus:outline-none  hover:border-gray-600" onClick={handleEndGame}>I've had enough</button>
                            <div className="flex-1"></div>
                            {submittedAnswer && (
                                <button className="border-2 border-gray-400 px-4 py-2 rounded-lg text-gray-800 flex focus:outline-none hover:border-gray-600" onClick={handleNextQuestion}>
                                    <span>Next Question</span>
                                    <svg style={{ marginTop: 1 }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" width="22" height="22"><path className="heroicon-ui" d="M9.3 8.7a1 1 0 0 1 1.4-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.4-1.4l3.29-3.3-3.3-3.3z" /></svg>
                                </button>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Questions;
