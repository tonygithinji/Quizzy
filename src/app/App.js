import React, { useState, useCallback } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppContext } from '../app/Context';
import Routes from './Routes';

function App() {
  const [category, setCategory] = useState({ id: 0, name: "Any Category" });

  const setCurrentCategory = useCallback(({ id, name }) => {
    setCategory({
      id,
      name
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <AppContext.Provider value={{ category, setCurrentCategory }}>
          <Routes />
        </AppContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
