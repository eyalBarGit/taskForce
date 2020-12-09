import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BoardList } from '../../cmps/BoardList/BoardList'
import { useParams } from 'react-router-dom'
import { setActiveBoard, saveToStorage } from '../../store/actions/boardActions'
import { createBoard } from '../../store/actions/boardActions';
import { ActionForm } from '../../cmps/ActionForm/ActionForm';

export function HomePage(props) {
    const state = useSelector(state => state.mainStore)
    const { id } = useParams();
    const currBoard = state.boards[id]
    const dispatch = useDispatch()
    const [isAddBoardVis, setAddBoardVis] = useState(false)


    const onCreateBoard = (data) => {
        dispatch(createBoard(data.boardTitle))
        onToggleAddBoard()
    }
    const onToggleAddBoard = () => {
        setAddBoardVis(!isAddBoardVis)
    }


    useEffect(() => { dispatch(saveToStorage(state)) }, [state, dispatch, currBoard])


    useEffect(() => {
        dispatch(setActiveBoard(''))

        return () => {
            // componnent willUnmount
        }
    }, [dispatch])



    return (
        <div className="home-page margin-center">
            <div className="center-container margin-center">
                <div className="flex align-center space-between">
                    <h1>CHOOSE YOUR BOARD</h1>
                    
                    <div className="add-board-section flex">
                        {!isAddBoardVis &&
                            <button onClick={onToggleAddBoard} className="create-board">Create Board</button>
                        }
                        {isAddBoardVis &&
                            <ActionForm name="boardTitle" placeholder={'Add Board Title'} toggleAdd={onToggleAddBoard} onSubmitFunc={onCreateBoard} />
                        }
                    </div>
                </div>

                <div className="borad-list-container flex justify-center">
                    <div className="side-bar">
                    </div>
                    <section className="board-list-section">
                        <BoardList />
                    </section>
                </div>
            </div>
        </div>
    )
}

