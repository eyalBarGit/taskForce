import React, { useRef } from 'react';
import { useForm } from "react-hook-form";
import { createCard } from '../../store/actions/listActions'

import { useDispatch } from 'react-redux';
import { ActionForm } from '../ActionForm/ActionForm';

export function AddCard({ currBoard, currList, toggleAddCard }) {
    const dispatch = useDispatch()
    const { reset } = useForm();
    const cardTitle = useRef(null);


    const onCreateCard = data => {
        if (!data.cardTitle) return
        dispatch(createCard(currBoard, currList, data.cardTitle))
        reset()
        toggleAddCard()
    }


    return (
        <div className="add-card ">
            <ActionForm
                name={"cardTitle"}
                currRef={cardTitle}
                toggleAdd={toggleAddCard}
                placeholder={'Enter card title'}
                onSubmitFunc={onCreateCard} />

        </div>
    )
}

