import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createList } from '../../../store/actions/headerActions'
import { createBoard, changeBoardName, deleteBoard } from '../../../store/actions/boardActions';
import { ActionForm } from '../../ActionForm/ActionForm';
import { useHistory } from 'react-router';
import { DeleteVerify } from '../../CardDetails/DeleteVerify/DeleteVerify';

export function AppHeaderMenu({ onRemoveSavedBoard, activeBoard, onToggleAppHeaderMenu, currBoard }) {
    const dispatch = useDispatch()
    const history = useHistory()
    const [isAddBoardVis, setAddBoardVis] = useState(false)
    const [isChangeNameVis, setChangeName] = useState(false)
    const [isAddListVisible, setAddListVisibility] = useState(false)
    const [isDeleteVerify, setDeleteVerify] = useState(false)

    const onToggleAddList = () => {
        setAddListVisibility(!isAddListVisible)
    }

    const onAddList = ({ listName }) => {
        dispatch(createList(activeBoard, listName))
        onToggleAppHeaderMenu()
    }


    const onCreateBoard = (data) => {
        dispatch(createBoard(data.boardTitle))
        onToggleAppHeaderMenu()
    }


    const onToggleAddBoard = () => {
        setAddBoardVis(!isAddBoardVis)
    }

    const onToggleBoardName = () => {
        setChangeName(!isChangeNameVis)
    }

    const onChangeBoardName = (data) => {
        dispatch(changeBoardName(currBoard, data.boardName))
        onToggleAppHeaderMenu()
    }


    const onDeleteBoard = () => {
        if (currBoard.isFav) {
            dispatch( onRemoveSavedBoard(currBoard))
        }
        onToggleAppHeaderMenu()
        dispatch(deleteBoard(currBoard))
        history.push('/')
    }


    const onToggleDleteBoard = () => {
        setDeleteVerify(!isDeleteVerify)
    }


    useEffect(() => {
        return () => {
            // componnent willUnmount
        }
    }, [])



    return (
        <div className="app-header-menu">
            <div className="container">
                <div className="title flex justify-center">
                    <h3>Board Actions</h3>
                </div>
                <hr />
                <div className="menu-actions">
                    {!isChangeNameVis &&
                        <p onClick={onToggleBoardName}>Change Board Name...</p>
                    }

                    {isChangeNameVis &&
                        <ActionForm name="boardName" placeholder={'Add Board Title'}
                            toggleAdd={onToggleBoardName} onSubmitFunc={onChangeBoardName} />
                    }
                    {!isAddBoardVis &&
                        <p onClick={onToggleAddBoard}>Create Board...</p>
                    }
                    {isAddBoardVis &&
                        <ActionForm name="boardTitle" placeholder={'Add Board Title'}
                            toggleAdd={onToggleAddBoard} onSubmitFunc={onCreateBoard} />
                    }
                    {!isDeleteVerify &&
                        <p onClick={onToggleDleteBoard}>Delete Board...</p>
                    }

                    {isDeleteVerify &&
                        <DeleteVerify itemToDelete={'board'} onToggle={onToggleDleteBoard} onDelete={onDeleteBoard} />
                    }
                    {!isAddListVisible &&
                        <p onClick={onToggleAddList}>Add List...</p>
                    }
                    {isAddListVisible &&
                        <ActionForm name="listName" placeholder={'Add list Title'}
                            toggleAdd={onToggleAddList} onSubmitFunc={onAddList} />
                    }
                </div>
            </div>
        </div>
    )
}

