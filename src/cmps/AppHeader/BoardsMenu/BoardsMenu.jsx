
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { icon } from '../../../assets/images/vicon-80x80.png'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function BoardsMenu({ currBoard }) {
    const state = useSelector(state => state.mainStore)
    const boards = Object.keys(state.boards)
    const boardid = currBoard.id
    const check = <FontAwesomeIcon icon={faCheck} />


    if (!boardid) return '...loading'
    return (
        <div className="boards-menu">
            <div className="flex column align-center space-between">
                {boards.map(board => {
                    const currBoard = state.boards[board];
                    return <Link key={board} to={`/boards/${board}`} >
                        <div className="board-name flex">
                            <p key={board}>{currBoard.name}</p>
                            {boardid === currBoard.id ? <span className="check">{check}</span> : ''}
                        </div>
                    </Link>
                }


                )}
            </div>
        </div >
    )



}