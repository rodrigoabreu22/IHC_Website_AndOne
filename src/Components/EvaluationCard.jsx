import React from 'react';
import './EvaluationCard.css';

const EvaluationCard = ({ name, rating, comment }) => {
    return (
        <div className="evaluation-card">
            <h3>{name}</h3>
            <div className="rating">
                {Array.from({ length: 5 }, (_, index) => (
                    <span key={index} className={index < rating ? "star filled" : "star"}>&#9733;</span>
                ))}
            </div>
            <p>{comment}</p>
        </div>
    );
};

export default EvaluationCard;