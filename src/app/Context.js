import React from 'react';

const defaultContext = {
    category: {
        id: 0,
        name: "Any category"
    },
    setCurrentCategory: () => { }
}


export const AppContext = React.createContext(defaultContext);
