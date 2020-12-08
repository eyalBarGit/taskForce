import React, { useEffect, useRef } from 'react';
import { useForm } from "react-hook-form";
export function ActionForm({ placeholder, name, onSubmitFunc, toggleAdd }) {
    const currRef = useRef(null);
    const { register, handleSubmit } = useForm();

    useEffect(() => {
        currRef.current.focus();
        return () => {

        }
    }, [])



    return (
        <div className="action-form">
            <form onSubmit={handleSubmit(onSubmitFunc)}>
                <div className="flex column">
                    <input name={name} type="text"
                        style={{ resize: "none" }}
                        ref={(e) => {
                            register(e)
                            currRef.current = e
                        }} placeholder={placeholder}
                        autoComplete="off"
                    />
                    <div className="btns-section flex space-between">
                        <button className="add-btn" >Add</button>
                        <button onClick={toggleAdd} >X</button>
                    </div>

                </div>
            </form>
        </div>
    )
}

