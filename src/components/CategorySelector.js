import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../app/Context';
import { getCategoryIcon } from '../utils/helpers';

const CategorySelector = ({ categoryId, category }) => {
    const history = useHistory();
    const { setCurrentCategory } = useContext(AppContext);

    const handleCategorySelected = () => {
        setCurrentCategory({ id: categoryId, name: category });
        history.push("/start");
    };

    return (
        <div className="bg-white rounded-lg h-40 cursor-pointer relative border-2 border-gray-300 hover:border-gray-600" onClick={handleCategorySelected}>
            <div className="absolute top-0 right-0 py-6 px-6">
                <img src={getCategoryIcon(categoryId)} alt={category} className="w-10" />
            </div>
            <div className="absolute bottom-0 left-0 py-4 px-6">
                <h3>{category}</h3>
            </div>
        </div>
    )
};

export default CategorySelector;
