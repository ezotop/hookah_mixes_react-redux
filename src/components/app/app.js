import React from 'react';
import Header from '../header';
import TasteList from '../taste-list';
import TasteSecondList from '../taste-second-list';

import './app.scss';

const App = () => {
    return (
        <div className="app">
            <Header/>
            <div className="app__container">
                <TasteList/>
                <TasteSecondList/>
            </div>
        </div>
    )
};

export default App;