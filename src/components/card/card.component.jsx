import React from "react";

import "./card.styles.css";

export const Card = (props) => {
    return (
        <div className='card-container'>
            <img alt="layout base" src={props.item.imageUrl}/>
            <h2>{props.item.title}</h2>
            {
                props.item.attacks.map(
                    (attack) => (
            <div>
                <p key={attack.id}> {attack.name}</p>
                <a href={attack.details.videoUrl}
                   target="_blank"
                   rel="noopener noreferrer">Play {attack.details.start}-{attack.details.end}</a>
            </div>
                    ))
            }

        </div>
    );
};
