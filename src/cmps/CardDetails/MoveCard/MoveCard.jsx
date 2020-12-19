import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { moveCard } from '../../../store/actions/cardActions'

export function MoveCard({ currBoard, currCard, currList, onToggleMoveCard, onToggleCardDetails }) {
    const [listOptions, setListOptions] = useState()
    const dispatch = useDispatch()



    const onMoveCard = ({ target }) => {
        const listName = target.value
        const moveToList = Object.values(currBoard.lists).filter((list) => list.title === listName)
        const moveTocardIds = currBoard.lists[moveToList[0]?.id]?.cardIds
        if (!moveTocardIds) return
        if (moveTocardIds.includes(currCard.id)) return
        if (moveToList[0].id === currList.id ) return
        dispatch(moveCard(currBoard, moveToList[0].id, currCard, currList))
        onToggleMoveCard()
        onToggleCardDetails()
    }




    useEffect(() => {
        setListOptions(Object.values(currBoard.lists))
        return () => {
        }
    }, [currBoard.lists])



    return (
        <div className="copy-card">
            {listOptions &&
                <select name="" onChange={(e) => onMoveCard(e)}>
                    <option value="">To...</option>
                    {listOptions.map((list, idx) => <option key={idx}>{list.title}</option>)}
                </select>
            }
        </div>
    )
}

