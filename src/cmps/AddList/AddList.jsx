import React, { useEffect, useRef } from 'react';
import { useForm } from "react-hook-form";
import { createList } from '../../store/actions/boardActions'

import { useDispatch } from 'react-redux';
import { ActionForm } from '../ActionForm/ActionForm';

export function AddList({ currBoard, onToggleAddList }) {
    const dispatch = useDispatch()
    const { reset } = useForm();
    const listName = useRef(null);


    const onCreateList = (data) => {
        if (!data.listName) return
        dispatch(createList(currBoard.id, data.listName))
        reset()
        onToggleAddList()

    }

    useEffect(() => {
        listName.current.focus();
        return () => {

        }
    }, [])


    return (
        <div className="add-list ">
            <ActionForm
                name={"listName"}
                currRef={listName}
                toggleAdd={onToggleAddList}
                placeholder={'Enter list title'}
                onSubmitFunc={onCreateList} />

        </div>
    )
}

