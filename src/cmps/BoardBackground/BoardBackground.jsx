import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { saveToStorage, changeBoardBackground, } from '../../store/actions/boardActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'


import nature from '../../assets/images/bgs/purple_nature.jpg'
import mountains from '../../assets/images/bgs/mountains.jpg'
import water from '../../assets/images/bgs/water.jpg'
import lake from '../../assets/images/bgs/lake.jpg'
import boraBora from '../../assets/images/bgs/boraBora.jpg'
import sky from '../../assets/images/bgs/sky.jpg'





export function BoardBackground({ state, currBoard, toggleBgBoard }) {
    const dispatch = useDispatch()
    const close = <FontAwesomeIcon icon={faTimes} />

    const changeBackgroundImg = ({ target }) => {
        const name = target.name
        switch (name) {
            case "nature":
                dispatch(changeBoardBackground(currBoard, 'purple_nature'))
                break;
            case "mountains":
                dispatch(changeBoardBackground(currBoard, 'mountains'))
                break;
            case "water":
                dispatch(changeBoardBackground(currBoard, 'water', ''))
                break;
            case "lake":
                dispatch(changeBoardBackground(currBoard, 'lake', ''))
                break;
            case "boraBora":
                dispatch(changeBoardBackground(currBoard, 'boraBora', ''))
                break;
            case "sky":
                dispatch(changeBoardBackground(currBoard, 'sky', ''))
                break;
            default:
                break;
        }
    }




    useEffect(() => { dispatch(saveToStorage(state)) }, [state, dispatch])


    return (
        <div className="board-background ">
            <div className="close-btn flex">
                <button onClick={toggleBgBoard}>{close}</button>
            </div>
            <div className="main-content flex align-center wrap">
                <img onClick={(e) => changeBackgroundImg(e)} src={nature} alt="nature" name="nature" />
                <img onClick={(e) => changeBackgroundImg(e)} src={mountains} alt="mountains" name="mountains" />
                <img onClick={(e) => changeBackgroundImg(e)} src={water} alt="water" name="water" />
                <img onClick={(e) => changeBackgroundImg(e)} src={lake} alt="lake" name="lake" />
                <img onClick={(e) => changeBackgroundImg(e)} src={boraBora} alt="boraBora" name="boraBora" />
                <img onClick={(e) => changeBackgroundImg(e)} src={sky} alt="sky" name="sky" />
            </div>
        </div>
    )
}

