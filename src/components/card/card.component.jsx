import React from "react";

import "./card.styles.css";

export const Card = (props) => {
    function getLinkWithTime(attack) {
        let attackTime = attack.details.start.split(':');
        let time = (+attackTime[0]) * 60 + (+attackTime[1]);
        return `${attack.details.videoUrl}&t=` + time;
    }

    return (
        <div className='card-container'>
            <img alt="layout base" src={props.item.imageUrl}/>
            <h2>{props.item.title}</h2>
            {
                props.item.attacks.map(
                    (attack) => (
            <div>
                <p key={attack.id}> {attack.name}</p>
                <a href={getLinkWithTime(attack)}
                   target="_blank"
                   rel="noopener noreferrer">Play {attack.details.start}-{attack.details.end}</a>
            </div>
                    ))
            }

        </div>
    );
};
