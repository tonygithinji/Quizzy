import { useState, useEffect, useCallback } from "react";
import axios from "../utils/axios";

const useFetchQuestions = ({ categoryId }) => {
    const [questions, setQuestions] = useState([]);
    const [activeQuestion, setActiveQuestion] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (questions.length <= 4) {
            if (questions.length === 0) setLoading(true);
            axios.get(`api.php?amount=10&category=${categoryId}&encode=url3986`).then(response => {
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
    }, [questions.length, categoryId]);

    const updateQuestions = useCallback(questions => {
        setQuestions(questions);
    }, []);

    const updateActiveQuestion = useCallback(question => {
        setActiveQuestion(question);
    }, []);

    return [loading, questions, activeQuestion, updateQuestions, updateActiveQuestion];
};

export default useFetchQuestions;
