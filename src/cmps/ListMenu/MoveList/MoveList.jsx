import React, { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { moveList, deleteList } from '../../../store/actions/listActions'
import { useParams } from 'react-router-dom'


export function MoveList({ onToggleMoveList, currBoard, currList }) {
    const state = useSelector(state => state.mainStore)
    const boards = Object.values(state.boards)
    const [moveToBoard, setMoveTo] = useState('')
    const dispatch = useDispatch()
    const { boardid } = useParams();



    const onMoveList = ({ target }) => {
        const moveToBoardId = target.value
        setMoveTo(moveToBoardId)
    }

    const MoveList = () => {
        if (boardid === moveToBoard || !moveToBoard) return
        dispatch(moveList(currBoard, currList, moveToBoard))
        dispatch(deleteList(currBoard, currList))
    }



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

