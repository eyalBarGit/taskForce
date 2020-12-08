import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCardDetails, toggleCardWatch, setDueDate } from '../../store/actions/cardActions'
import { useHistory, useParams } from 'react-router-dom'
import { BlackScreen } from '../CardDetails/BlackScreen/BlackScreen'
import { CardCover } from './CardCover/CardCover'
import { RightSideMenu } from './RightSideMenu/RightSideMenu'
import { CardCheckList } from './CardCheckList/CardCheckList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTicketAlt, faClipboardList, faEye } from '@fortawesome/free-solid-svg-icons'
import { Description } from './Description/Description';
import { CardLabel } from './CardLabel/CardLabel';

export function CardDetails() {
    const state = useSelector(state => state.mainStore)
    const [isCoverOn, setCoverOn] = useState(false)
    const [istCoverVisibile, setCoverVisibility] = useState(false)
    const { activeBoard } = state
    const [isDescVisible, setDescVisibility] = useState(false)
    const dispatch = useDispatch()
    const history = useHistory()
    const currBoard = state.boards[activeBoard]
    const { cardid, listid } = useParams();
    const currCard = currBoard.cards[cardid]
    const currCheckList = Object.values(currCard?.checklist)

    const ticket = <FontAwesomeIcon icon={faTicketAlt} />
    const clipBoard = <FontAwesomeIcon icon={faClipboardList} />
    const eye = <FontAwesomeIcon icon={faEye} />


    const onToggleCardDetails = () => {
        dispatch(toggleCardDetails(false))
        history.push(`/boards/${activeBoard}`)
    }


    const onToggleCover = () => {
        setCoverOn(!isCoverOn)
    }

    const toggleCardVisibility = () => {
        setCoverVisibility(!istCoverVisibile)
    }

    const onToggleCardDesc = () => {
        setDescVisibility(!isDescVisible)
    }


    const onToggleCardWatch = () => {
        const isWatched = currCard.isWatched
        dispatch(toggleCardWatch(currBoard, currCard, !isWatched))
    }

    const onRemoveDate = () => {
        dispatch(setDueDate(currBoard, currCard, ''))
    }


    useEffect(() => {
        return () => {
        }
    }, [state, currCard.isWatched])



    return (
        <div className="card-details" >
            <span onClick={onToggleCardDetails} >
                <BlackScreen />
            </span>
            <div className="card-details-board ">
                {currCard.cardCover &&
                    <CardCover currCard={currCard} onToggleCover={onToggleCover} />
                }
                <div className="main flex space-between">
                    <div className="left-side">
                        <div className="title-section ">
                            <div style={{ height: 'fit-content' }} className="align-center flex">
                                <div className="icon">
                                    {ticket}
                                </div>
                                <div className="title ">
                                    <h3>{currCard.title} </h3>
                                </div>
                                {currCard.isWatched &&
                                    <div className="watched-section">
                                        {eye}
                                    </div>
                                }
                            </div>
                            {currCard.dueDate &&
                                <div className="due-date-section margin-bottom flex space-between">
                                    <p>{currCard.dueDate}</p>
                                    <p className="remove-date" onClick={onRemoveDate}>Remove Date</p>
                                </div>
                            }
                        </div>
                        <section className="labels">
                            {currCard.labels.length > 0 &&
                                <div>
                                    <p>Labels</p>
                                    <div className="flex">
                                        {currCard.labels.map(label => {
                                            return <CardLabel key={label} label={label} />
                                        })}
                                    </div>
                                </div>
                            }

                        </section>
                        <section className="description-section">
                            <Description clipBoard={clipBoard} isDescVisible={isDescVisible} currBoard={currBoard} currCard={currCard}
                                onToggleCardDesc={onToggleCardDesc} />
                        </section>
                        <section className="checkList-section">
                            {currCheckList.length > 0 &&
                                currCheckList.map(checklist => <div key={checklist.id} >
                                    <CardCheckList currCheckList={checklist} currBoard={currBoard} currCard={currCard} />
                                </div>)
                            }
                        </section>
                    </div>
                    <div className="right-side">
                        <div className="close-btn margin-bottom flex">
                            <button onClick={onToggleCardDetails}>X</button>
                        </div>
                        <RightSideMenu
                            cardid={cardid}
                            listid={listid}
                            currBoard={currBoard}
                            currCard={currCard}
                            toggleCardVisibility={toggleCardVisibility}
                            istCoverVisibile={istCoverVisibile}
                            onToggleCardDetails={onToggleCardDetails}
                            onToggleCardWatch={onToggleCardWatch}
                            onToggleCover={onToggleCover}
                            isCoverOn={isCoverOn}
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}

