import React, { useState, useEffect, useCallback } from 'react';
import { CardList } from '../CardList/CardList'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import { AddCard } from '../AddCard/AddCard'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import { ListMenu } from '../ListMenu/ListMenu';
import { ChangeListTitle } from '../ChangeListTitle/ChangeListTitle'
import { MoveList } from '../ListMenu/MoveList/MoveList'


export function List({ listId, lists, cards, currBoard, index, }) {
    const [currList, setCurrList] = useState('')
    const [isAddCardShown, setAddCard] = useState(false)
    const [isListMenuShown, setListMenu] = useState(false)
    const [isEditTitle, setIsEditTitle] = useState(false)
    const [isMoveListVisible, setMoveList] = useState(false)

    const plus = <FontAwesomeIcon icon={faPlus} />
    const listMenu = <FontAwesomeIcon icon={faEllipsisH} />


    const getCurrList = useCallback(
        () => {
            const getCurrList = lists[listId]
            setCurrList(getCurrList)
        },
        [lists, listId,],
    )

    const onToggleAddCard = () => {
        setAddCard(!isAddCardShown)
    }
    const onToggleListMenu = () => {
        setListMenu(!isListMenuShown)
    }
    const toggleEditTitle = () => {
        setIsEditTitle(!isEditTitle)
    }

    const onToggleMoveList = () => {
        setMoveList(!isMoveListVisible)
    }

    useEffect(() => {
        getCurrList()
        console.log('listRendered')
        return () => {

        }
    }, [getCurrList])



    if (!currList) return 'loading...'
    return (
        <Draggable
            draggableId={currList.id}
            index={index}
        >
            {(provided) => (
                <MainDragContainer
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                >
                    <div className="list flex column align-center" >
                        {isMoveListVisible &&
                            <MoveList currBoard={currBoard} currList={currList} onToggleMoveList={onToggleMoveList} />
                        }
                        <div className="title-container align-center flex">
                            <span className="drag-handle flex space-between "
                                {...provided.dragHandleProps}
                            >
                                {!isEditTitle && <div>

                                    <p className="list-title">{currList.title}</p>

                                    <p className="cards-count">Total Cards: {currList.cardIds.length}</p>
                                </div>
                                }
                                {isEditTitle && <span className="edit-title">
                                    <ChangeListTitle
                                        toggleEditTitle={toggleEditTitle}
                                        currBoard={currBoard}
                                        currList={currList}
                                    />
                                </span>
                                }
                                <div className="menu-btn">
                                    <span className="list-menu-section align-center flex"
                                        onClick={onToggleListMenu}>
                                        {listMenu}
                                    </span>
                                </div>
                            </span>
                        </div>
                        {isListMenuShown &&
                            <ListMenu


                                toggleListMenu={onToggleListMenu}
                                currBoard={currBoard}
                                currList={currList}
                                toggleAddCard={onToggleAddCard}
                                toggleEditTitle={toggleEditTitle}
                                onToggleMoveList={onToggleMoveList}
                            />
                        }
                        <div className="main-container margin-center">
                            <Droppable droppableId={listId} type="card">
                                {(provided, snapshot) => {
                                    return (
                                        <div>
                                            <MainDropContainer
                                                ref={provided.innerRef}
                                                {...provided.droppableProps}
                                            >
                                                <CardList
                                                    cardIds={currList.cardIds}
                                                    cards={cards}
                                                    provided={provided}
                                                    currListID={currList.id}
                                                />
                                            </MainDropContainer>
                                        </div>
                                    )
                                }}
                            </Droppable>
                        </div>
                        <section className="add-card-section flex align-center">
                            {!isAddCardShown && <div onClick={onToggleAddCard}
                                className="add-card-text flex align-center">
                                <div className="plus-sign">{plus}</div>
                                {currList.cardIds.length === 0 ? <p>Add a card</p> : <p>Add anoter card</p>}
                            </div>
                            }
                            {isAddCardShown && <div className="add-card-section">
                                <AddCard toggleAddCard={onToggleAddCard}
                                    currList={currList}
                                    currBoard={currBoard} />
                            </div>
                            }
                            <div className="div">

                            </div>

                        </section>


                    </div>
                    {/* <div><p>add list</p></div> */}
                </MainDragContainer>
            )
            }
        </Draggable >
    )
}
const MainDropContainer = styled.div`

width:100%;
min-height:10px;

`;
const MainDragContainer = styled.div`

`;

