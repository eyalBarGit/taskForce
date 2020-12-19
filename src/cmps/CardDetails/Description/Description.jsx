import React from 'react';
import { AddDescription } from '.././Description/AddDescription/AddDescription'

export function Description({ isDescVisible, clipBoard, currBoard, currCard, onToggleCardDesc }) {


    return (
        <div className="description flex">
            <div className="icon">
                {clipBoard}
            </div>
            <div className="description-title">
                <h3>Description</h3>
                {!isDescVisible &&
                    <div onClick={onToggleCardDesc} className="card-description-box">
                        <p>{currCard.desc}</p>
                    </div>
                }
                {isDescVisible &&
                    <AddDescription onToggleCardDesc={onToggleCardDesc}
                        currBoard={currBoard} currCard={currCard} />
                }
            </div>
        </div>
    )
}

