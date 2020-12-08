import React, { useEffect, useRef } from 'react';
import { useForm } from "react-hook-form";
import { createCard } from '../../store/actions/listActions'

import { useDispatch } from 'react-redux';

export function AddCard(props) {
    const { currBoard, currList, toggleAddCard } = props
    const dispatch = useDispatch()
    const { register, handleSubmit, reset } = useForm();
    const cardTitle = useRef(null);

    const onCreateCard = data => {
        if (!data.cardTitle) return
        dispatch(createCard(currBoard, currList, data.cardTitle))
        reset()
        toggleAddCard()
    }



    useEffect(() => {
        cardTitle.current.focus();

        return () => {

        }
    }, [])



    return (
        <div className="add-card ">
            <form onSubmit={handleSubmit(onCreateCard)}>
                <div className="flex column">
                    <input name="cardTitle" type="text"
                        ref={(e) => {
                            register(e)
                            cardTitle.current = e
                        }} placeholder={'Enter card title'}
                        autoComplete="off"
                    />
                    <div className="btns-section flex space-between">

                        <button className="add-btn" >Add Card</button>
                        <button onClick={toggleAddCard} >X</button>
                    </div>

                </div>
            </form>
        </div>
    )
}

