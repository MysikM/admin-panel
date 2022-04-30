import React from 'react';
import './cards.css';
import Card from "../Card/Card";
import {cardsData} from "../../data/Data";

const Cards = () => {
    return (
        <div className="cards">
            {
                cardsData.map((card, i) => (
                    <div key={i} className='cards__container'>
                        <Card
                        title={card.title}
                        color={card.color}
                        barValue={card.barValue}
                        value={card.value}
                        png={card.png}
                        series={card.series}

                        />
                    </div>
                ))
            }
        </div>
    );
};

export default Cards;