import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { copyCard } from '../../../store/actions/cardActions'


export function CopyCard({ currBoard, currCard, onToggleCopyCard }) {

    const [listOptions, setListOptions] = useState()

    const dispatch = useDispatch()

    const onCopyCard = ({ target }) => {
        const listName = target.value
        const copyToList = Object.values(currBoard.lists).filter((list) => list.title === listName)
        dispatch(copyCard(currBoard, copyToList[0].id, currCard))
        onToggleCopyCard()
    }



    useEffect(() => {
        setListOptions(Object.values(currBoard.lists))
    }, [currBoard])



    return (
        <div className="copy-card">
            {listOptions &&
                <select name="" onChange={(e) => onCopyCard(e)}>
                    <option value="">To...</option>
                    {listOptions.map((list, idx) => <option key={idx}>{list.title}</option>)}
                </select>
            }
        </div>
    )
}

