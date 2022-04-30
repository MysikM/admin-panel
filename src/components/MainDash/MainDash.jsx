import React from 'react';
import './MainDash.css';
import Cards from "../Cards/Cards";

const MainDash = () => {
    return (
        <div className="main-dash">
           <h1 className='main-dash__title'>Dashboard</h1>
            <Cards />
        </div>
    );
};

export default MainDash;