import React from "react";

import "./card.styles.css";

export const Card = (props) => {
    return (
        <div className='card-container'>
            <img alt="layout base" src={props.item.imageUrl}/>
            <h2>{props.item.title}</h2>
            <p>
                {
                    props.item.attacks.map(
                        (attack) => (
                            <div key={attack.id}> {attack.name}</div>
                        ))
                }
            </p>
        </div>
    );
};
