import React from 'react';
import './rightside.css';

const RightSide = () => {
    return (
        <div className='rightside'>
            <div>
                <h3>Updates</h3>
                <Updates />
            </div>
            <div>
                <h3>Customer Review</h3>
            </div>
        </div>
    );
};

export default RightSide;