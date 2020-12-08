import React, { useEffect } from 'react';


export function CardCover({currCard}) {
    useEffect(() => {
        return () => {

        }
    }, [])



    return (
        <div style={{backgroundColor:`${currCard.cardCover}`}} className="card-cover">
            <div className="main-content-card-cover">
            </div>
        </div>
    )
}

