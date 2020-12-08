import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { moveList, deleteList } from '../../../store/actions/listActions'


export function MoveList({ onToggleMoveList, currBoard, currList }) {
    const state = useSelector(state => state.mainStore)
    const boards = Object.values(state.boards)
    const { activeBoard } = state
    const dispatch = useDispatch()

    const [moveTo, setMoveTo] = useState('')


    const onMoveList = ({ target }) => {
        const moveToBoardId = target.value
        setMoveTo(moveToBoardId)
    }

    const MoveList = () => {

        if (activeBoard === moveTo || !moveTo) return

        dispatch(moveList(currBoard, currList, moveTo))
        dispatch(deleteList(currBoard, currList))
    }

    useEffect(() => {
        return () => {
            // componnent willUnmount
        }
    }, [])



    return (
        <div className="move-list">
            <div className="main-board-move-list">
                <select onChange={onMoveList} id="">
                    <option value="">To...</option>
                    {boards && boards.map((board) =>
                        <option value={board.id} name={board.id} key={board.id}>{board.name}</option>
                    )
                    }
                </select>
                <div className="flex space-between">

                    <button onClick={MoveList}>Move</button>
                    <button onClick={onToggleMoveList}>X</button>
                </div>
            </div>
        </div>
    )
}

