import React, { useEffect, useRef } from 'react';
import { useForm } from "react-hook-form";

export function AddItem({ onAddCheckItem, onToggleItemVisibility }) {
    const { register, handleSubmit } = useForm();
    const itemName = useRef(null);

    useEffect(() => {
        itemName.current.focus()
        return () => {

        }
    }, [])



    return (
        <div className="add-item">
            <form onSubmit={handleSubmit(onAddCheckItem)}>
                <input ref={(e) => {
                    register(e)
                    itemName.current = e
                }}
                    autoComplete="off" name="listItem" type="text" />
                <div className="flex space-between">
                    <button className="btn-add">Add</button>
                    <button onClick={onToggleItemVisibility}>Cancel</button>
                </div>
            </form>

        </div>
    )
}

