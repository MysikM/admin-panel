import React from 'react';
import './updates.css';
import {updatesData} from "../../data/Data";

const Updates = () => {
    return (
        <div className='updates'>
            {updatesData.map((update, i) => (
                <div key={i} className='update'>
                    <img src={update.img} alt={update.name} />
                    <div className="noti">
                        <div style={{marginBottom: '0.5rem'}}>
                            <span>{update.name}</span>
                            <span> {update.noti}</span>
                        </div>
                        <span>{update.time}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Updates;