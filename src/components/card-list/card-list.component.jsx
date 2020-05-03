import React from "react";

import {Card} from "../card/card.component";

import "./card-list.styles.css";

export const CardList = (props) => {
    return (
        <div className='card-list'>
            {
                props.bases.map(
                    (base) => (
                        <Card key={base.id} item={base}/>
                    ))
            }
        </div>
    );
};
