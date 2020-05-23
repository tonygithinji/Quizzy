import React, { useState, useEffect } from 'react';
import { useTrail, animated } from 'react-spring';
import axios from '../utils/axios';
import CategorySelector from '../components/CategorySelector';
import Loader from '../components/Loader';

const Home = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const trail = useTrail(categories.length, {
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: 1,
        y: 0,
        from: { opacity: 0, y: 500 }
    });

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

            {loading && <Loader />}
            {!loading && categories.length > 0 && (
                <div className="grid grid-cols-4 gap-4 my-12">
                    {trail.map(({ y, ...rest }, index) => (
                        <animated.div key={categories[index].id} style={{ ...rest, transform: y.interpolate(y => `translate(0,${y}px)`) }}>
                            <CategorySelector category={categories[index].name} categoryId={categories[index].id} />
                        </animated.div>
                    ))}
                </div>
            )}
        </>
    )
};

export default Home;
