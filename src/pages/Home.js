import React, { useState, useEffect } from 'react';
import axios from '../utils/axios';
import CategorySelector from '../components/CategorySelector';

const Home = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get('api_category.php').then(response => {
            const { data } = response;
            setCategories(data.trivia_categories);
            setLoading(false);
        });
    }, []);

    return (
        <>
            <div className="text-center mt-8">
                <h1 className="text-5xl">Quizzy</h1>
                <h2 className="text-2xl mt-12">So you think you are the king of trivia, huh?</h2>
                <h3 className="text-xl m-4">Pick a category and let's find out!</h3>
            </div>

            {loading && <div className="text-center mt-8">Loading...</div>}
            {!loading && categories.length > 0 && (
                <div className="grid grid-cols-4 gap-4 my-12">
                    {categories.map(category => <CategorySelector key={category.id} category={category.name} categoryId={category.id} />)}
                </div>
            )}
        </>
    )
};

export default Home;
