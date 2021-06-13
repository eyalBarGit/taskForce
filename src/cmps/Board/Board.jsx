import React, { useState, useEffect, useCallback, useRef } from 'react';
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { List } from '../List/List'
import {
    dragInsideList,
    saveToStorage,
    dragOutsideList,
    dragList,
    setActiveBoard,
    toggleBgSide
} from '../../store/actions/boardActions'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { BoardBackground } from '../../cmps/BoardBackground/BoardBackground'
import { CardDetails } from '../CardDetails/CardDetails'
import { BlackScreen } from '../CardDetails/BlackScreen/BlackScreen'
import { AddList } from '../AddList/AddList'


export function Board() {
    const state = useSelector(state => state.mainStore)
    const { isCardDetailShown, isBgSideOpen } = state
    const [isAddListVisible, setAddList] = useState(false)
    const [currBoard, setCurrBoard] = useState()

    const { boardid } = useParams();
    const dispatch = useDispatch()
    const boardRef = useRef(null)

    const loadCurrBoard = useCallback(() => {
        const currBoard = state.boards[boardid]
        setCurrBoard(currBoard)
        dispatch(setActiveBoard(currBoard))
    },
        [state.boards, boardid, dispatch,]
    )



    const onDragEnd = (result) => {
        const { destination, source, draggableId, type } = result;

        if (!destination) { return }
        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) return

        const start = currBoard.lists[source.droppableId]
        const finish = currBoard.lists[destination.droppableId]

        if (start === finish && !type === 'list') {
            dispatch(dragInsideList(start, source, destination, draggableId, currBoard))
            return
        }
        if (type === 'list') {
            dispatch(dragList(source, destination, draggableId, currBoard))
            return
        }
        dispatch(dragOutsideList(start, source, destination, draggableId, currBoard, finish))

    }



    const toggleBgBoard = () => {
        dispatch(toggleBgSide())
    }

    const onToggleAddList = () => {
        setAddList(!isAddListVisible)
    }


    useEffect(() => {
        loadCurrBoard()
        return () => {
            dispatch(setActiveBoard(''))
        }

    }, [loadCurrBoard, dispatch])

    useEffect(() => { dispatch(saveToStorage(state)) }, [state, dispatch, currBoard])


    if (!currBoard) return '...LOADING...'
    return (
        <DragDropContext
            onDragEnd={onDragEnd}
        >
            <Droppable
                droppableId="all-lists"
                direction="horizontal"
                type="list"
                className="droppable-board"
            >
                {(provided) => {
                    return (
                        <div ref={boardRef} className="board margin-center align-center">
                            <img className="board-background" src={require(`../../assets/images/bgs/${currBoard.backgroundImg}.jpg`)} alt="" />
                            <MainDndArea
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                <div className="main-content flex ">
                                    {currBoard.listOrder.map((listId, idx) => {
                                        return <div key={listId} className="list-section">
                                            <List index={idx} cards={currBoard.cards} currBoard={currBoard} lists={currBoard.lists} listId={listId}></List>
                                        </div>
                                    })}
                                    {!isAddListVisible &&
                                        <button onClick={onToggleAddList} className="add-list-btn">Add list</button>
                                    }
                                    {isAddListVisible &&
                                        <AddList currBoard={currBoard} onToggleAddList={onToggleAddList} />
                                    }
                                </div>
                                {isBgSideOpen &&
                                    <span onClick={toggleBgBoard} >
                                        <BlackScreen />
                                    </span>
                                }
                                <div className="between">
                                    <div className={`board-bg ${isBgSideOpen ? 'visible' : ''} `}>
                                        <BoardBackground toggleBgBoard={toggleBgBoard} currBoard={currBoard} state={state} />
                                    </div>
                                </div>
                                {provided.placeholder}

                            </MainDndArea>
                            {isCardDetailShown &&
                                <CardDetails currBoard={currBoard} />
                            }

                        </div>
                    )
                }}
            </Droppable>
        </DragDropContext >
    )
}



const MainDndArea = styled.div`
    width: 100 %;
    `;