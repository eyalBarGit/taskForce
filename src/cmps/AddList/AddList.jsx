import React, { useEffect, useRef } from 'react';
import { useForm } from "react-hook-form";
import { createList } from '../../store/actions/boardActions'

import { useDispatch } from 'react-redux';

export function AddList({ currBoard, onToggleAddList, windowWidth }) {
    const dispatch = useDispatch()
    const { register, handleSubmit, reset } = useForm();
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
            <form onSubmit={handleSubmit(onCreateList)}>
                <div className="flex column">
                    <input rows='1' name="listName" type="text"
                        ref={(e) => {
                            register(e)
                            listName.current = e
                        }} placeholder={'Enter list title'}
                        autoComplete="off"
                    />
                    <div className="btns-section flex space-between">

                        <button className="add-btn" >Add List</button>
                        <button onClick={onToggleAddList} >X</button>
                    </div>

                </div>
            </form>
        </div>
    )
}

