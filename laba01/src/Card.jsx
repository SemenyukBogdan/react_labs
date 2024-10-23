import React, { useState } from 'react';
import './Card.css';

function Card() {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className="card-container" onClick={handleFlip}>
            <div className="card front-side-card" style={{transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'}}>
                {/* front of card*/}
                front side
            </div>
            <div className="card back-side-card" style={{transform: isFlipped ? 'rotateY(360deg)' : 'rotateY(180deg)'}}>
                {/* back of card */}
                back side
            </div>
        </div>
    );
}

export default Card;
