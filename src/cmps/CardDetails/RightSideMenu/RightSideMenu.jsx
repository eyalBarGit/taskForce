import React, { useEffect, useState } from 'react';
import { CopyCard } from '../CopyCard/CopyCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faTag, faTasks, faColumns, faClock, faPaperclip, faArrowRight, faCopy, faEye, faTrashAlt, faShareAlt, } from '@fortawesome/free-solid-svg-icons'
import { MoveCard } from '../MoveCard/MoveCard';
import { DeleteVerify } from '../DeleteVerify/DeleteVerify'
import { CardCoverMenu } from '../CardCoverMenu/CardCoverMenu'
import { createCheckList, setDueDate, deleteCard, setLabel, removeLabel } from '../../../store/actions/cardActions'
import { useDispatch } from 'react-redux';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import { AddCheckList } from './AddCheckList/AddCheckList';
import { LabelsMenu } from '../LabelsMenu/LabelsMenu';


export function RightSideMenu({ onToggleCardDetails, onToggleCover, isCoverOn,
    listid,
    currBoard,
    currCard,
    toggleCardVisibility,
    onToggleCardWatch
})
 {
    const currList = currBoard.lists[listid]
    const cardId = currCard.id
    const [isCopyClicked, setCopyClick] = useState(false)
    const [isMoveClicked, setMoveClick] = useState(false)
    const [isDeleteClicked, setDeleteClick] = useState(false)
    const [isAddCheckList, setAddChecklist] = useState(false)
    const [isLabelMenuVis, setLabelMenuVis] = useState(false)
    const dispatch = useDispatch()
    const [date, setDates] = useState(new Date())
    const [isCalShown, toggleShowCal] = useState(false)

    const avatar = <FontAwesomeIcon icon={faUser} />
    const label = <FontAwesomeIcon icon={faTag} />
    const checklist = <FontAwesomeIcon icon={faTasks} />
    const clock = <FontAwesomeIcon icon={faClock} />
    const paperClip = <FontAwesomeIcon icon={faPaperclip} />
    const arrow = <FontAwesomeIcon icon={faArrowRight} />
    const copy = <FontAwesomeIcon icon={faCopy} />
    const eye = <FontAwesomeIcon icon={faEye} />
    const trash = <FontAwesomeIcon icon={faTrashAlt} />
    const share = <FontAwesomeIcon icon={faShareAlt} />
    const cover = <FontAwesomeIcon icon={faColumns} />


    const onToggleLabelMenu = () => {
        setLabelMenuVis(!isLabelMenuVis)
    }

    const onSetLabel = (colorCode) => {
        const index = currCard.labels.findIndex((label) => { return label === colorCode })
        if (index >= 0) {
            dispatch(removeLabel(currBoard, currCard, index))
            return
        }
        dispatch(setLabel(currBoard, currCard, colorCode))
    }

    const onToggleDeleteCard = () => {
        setDeleteClick(!isDeleteClicked)
    }

    const onDeleteCard = () => {
        dispatch(deleteCard(currBoard, currList, cardId))
        onToggleCardDetails()
    }

    const onToggleCopyCard = () => {
        setCopyClick(!isCopyClicked)
    }
    const onToggleMoveCard = () => {
        setMoveClick(!isMoveClicked)
    }

    const onToggleCheckList = () => {
        setAddChecklist(!isAddCheckList)
    }

    const onAddCheckList = ({ checklistName }) => {
        if (!checklistName) return
        dispatch(createCheckList(currBoard, currCard, checklistName))
        onToggleCheckList()
    }
    const onGetDates = date => {
        const newDate = date.toString().substring(0, 15)
        setDates(date)
        dispatch(setDueDate(currBoard, currCard, newDate))
        toggleShowCal(false)
    }

    const onToggleShowCal = () => {
        toggleShowCal(!isCalShown)
    }

    useEffect(() => {
        return () => {

        }
    }, [currBoard])



    return (

        <div className="right-side-menu flex column">
            <p>SUGGESTED</p>
            <button className="btn-right-side">
                <span>
                    {avatar}
                </span>
                Join</button>
            <p>ADD TO CARD</p>
            <button className="btn-right-side">
                <span>
                    {avatar}
                </span>
                    Members
            </button>
            <button onClick={onToggleLabelMenu} className="btn-right-side">
                <span>{label}</span>
                Labels
                </button>
            { isLabelMenuVis && <LabelsMenu onSetLabel={onSetLabel} onToggleColor={onToggleLabelMenu} currBoard={currBoard} currCard={currCard} />}
            <button onClick={onToggleCheckList} className="btn-right-side">
                <span>{checklist}</span>
                Checklist
                </button>
            {isAddCheckList &&
                <AddCheckList
                    onToggleCheckList={onToggleCheckList}
                    onAddCheckList={onAddCheckList} />
            }
            <button onClick={onToggleShowCal} className="btn-right-side">
                <span>{clock}</span>
                Due Date
                </button>
            {isCalShown && <div className="cal">
                <Calendar className="calendar"
                    onChange={onGetDates}
                    value={date}
                />
            </div>
            }
            <button className="btn-right-side">
                <span>
                    {paperClip}
                </span>
                Attachment
                </button>
            <button className="btn-right-side" onClick={onToggleCover}>
                <span>
                    {cover}
                </span>
                Cover
                </button>
            {isCoverOn &&
                <CardCoverMenu
                    currCard={currCard}
                    toggleCardVisibility={toggleCardVisibility}
                    currBoard={currBoard}
                    onToggleColor={onToggleCover}
                />
            }

            <p>ACTIONS</p>

            <div className="right-side-btn flex column">
                <div className="btn-part flex">
                    <button className="btn-right-side" onClick={onToggleMoveCard}>
                        <span>
                            {arrow}
                        </span>
                    Move
                    </button>
                </div>
                {isMoveClicked && <MoveCard cardId={cardId}
                    listid={listid}
                    currBoard={currBoard}
                    currCard={currCard}
                    currList={currList}
                    onToggleMoveCard={onToggleMoveCard}
                    onToggleCardDetails={onToggleCardDetails}
                />
                }
            </div>
            <div className="right-side-btn flex column">
                <div className="btn-part flex">
                    <button className="btn-right-side" onClick={onToggleCopyCard}>
                        <span>
                            {copy}
                        </span>
                    Copy
                    </button>
                </div>
                {isCopyClicked && <CopyCard cardId={cardId}
                    listid={listid}
                    currBoard={currBoard}
                    currCard={currCard}
                    onToggleCopyCard={onToggleCopyCard}
                />
                }
            </div>
            <button onClick={onToggleCardWatch} className="btn-right-side flex space-between align-center">
                <div className="flex">
                    <span>
                        {eye}
                    </span>
                    Watch
                </div>
                {currCard.isWatched &&
                    <span className="watched flex align-center justify-center">V</span>
                }
            </button>
            <div className="right-side-btn flex column">
                <div className="btn-part flex">

                    <button className="btn-right-side" onClick={onToggleDeleteCard}>
                        <span>
                            {trash}
                        </span>
                        Delete
                    </button>
                </div>
                {isDeleteClicked &&
                    <DeleteVerify onDelete={onDeleteCard}
                        onToggle={onToggleDeleteCard}
                        itemToDelete={'card'}
                    />
                }

            </div>


            <button className="btn-right-side">
                <span>
                    {share}
                </span>
                Share
                </button>
        </div>
    )
}

