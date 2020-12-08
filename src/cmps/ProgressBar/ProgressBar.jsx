import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

export function ProgressBar({ bgcolor, completed }) {
    //   const state = useSelector(state => state.state)
    //   const dispatch = useDispatch()



    const fillerStyles = {
        width: `${completed}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAlign: 'right'
    }

    const labelStyles = {
        fontWeight: 'bold'
    }



    useEffect(() => {
        return () => {
            // componnent willUnmount
        }
    }, [])



    return (
        <div className="progress-bar flex align-center">
            <span style={labelStyles}>{` ${completed}%  `}</span>
            <div></div>
            <div className="wrapper" style={fillerStyles}>
            </div>
        </div>
    )
}

