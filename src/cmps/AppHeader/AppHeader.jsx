import React, { useEffect, useState } from 'react';
import { toggleBgSide } from '../../store/actions/headerActions'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { favoriteBoard, removeSavedBoard } from '../../store/actions/boardActions'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faBorderAll } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { AppHeaderMenu } from './AppHeaderMenu/AppHeaderMenu';
import { BoardsMenu } from './BoardsMenu/BoardsMenu'


export function AppHeader() {

    const state = useSelector(state => state.mainStore)
    const { activeBoard } = state
    const currBoard = state.boards[activeBoard]
    const [navBarTheme, setTheme] = useState()
    const bottomNav = currBoard?.bottomNav
    const [isBgBoardOpen, setIsBgBoardOpen] = useState(false)
    const [isHeaderMenuVisible, setHeaderMenu] = useState(false)
    const [showSavedTitle, setSaved] = useState(false)
    const [isBoardsMenuVis, setBoardsMenuVis] = useState(false)
    const dispatch = useDispatch()


    const home = <FontAwesomeIcon icon={faHome} />
    const boards = <FontAwesomeIcon icon={faBorderAll} />
    const plusSign = <FontAwesomeIcon icon={faPlus} />
    const info = <FontAwesomeIcon icon={faInfoCircle} />
    const notifications = <FontAwesomeIcon icon={faBell} />
    const star = <FontAwesomeIcon icon={faStar} />


    const toggleBgBoard = () => {
        setIsBgBoardOpen(!isBgBoardOpen)
        dispatch(toggleBgSide())
    }

    const onSaveBoard = () => {
        if (currBoard.isFav) {
            dispatch(removeSavedBoard(currBoard))
            return
        }
        dispatch(favoriteBoard(currBoard))
        setSaved(true)
        setTimeout(() => {
            onHideSave()

        }, 500);
    }

    const onHideSave = () => {
        setSaved(false)
    }


    const onToggleAppHeaderMenu = () => {
        setHeaderMenu(!isHeaderMenuVisible)
    }

    const onToggleBoardsMenu = () => {
        setBoardsMenuVis(!isBoardsMenuVis)
    }

    useEffect(() => {
        activeBoard ? setTheme('') : setTheme('dark')
    }, [activeBoard])

    return (
        <nav className={`app-header flex column ${navBarTheme}`}>
            <div className={`top-part flex ${navBarTheme}`}>
                <div className="nav-tools flex space-between align-center">
                    <div className="left-side flex align-center">
                        {currBoard &&
                            <Link to="/"><button className="home" onClick={() => setBoardsMenuVis(false)}>{home}</button></Link>
                        }
                        {currBoard &&
                            <button onClick={onToggleBoardsMenu}>{boards} <span className="desktop-boards">Boards</span> </button>
                        }
                        {isBoardsMenuVis &&
                            <div>
                                <BoardsMenu closeBoard={() => setBoardsMenuVis(false)} currBoard={currBoard} />

                            </div>
                        }
                    </div>
                    <div className="logo">
                        <h1>TaskForce</h1>
                    </div>
                    <div className="right-side flex align-center">
                        {currBoard &&
                            <button className="app-header-menu-btn" onClick={onToggleAppHeaderMenu}>{plusSign}</button>
                        }
                    </div>
                </div>


            </div>
            {activeBoard && currBoard &&
                <div className={`bottom-nav flex align-center ${bottomNav}`}>
                    <h1> {currBoard.name}</h1>
                    <button className="btn" onClick={toggleBgBoard}>Change Background</button>
                    <button onClick={onSaveBoard} className={`btn btn-fav-board ${currBoard?.isFav ? 'saved' : ''}`}>{star}</button>
                    <p>Total Lists: {currBoard.listOrder.length}</p>
                    {showSavedTitle &&
                        <p className="save-notification">saved!</p>
                    }
                    {isHeaderMenuVisible &&
                        <AppHeaderMenu
                            onRemoveSavedBoard={removeSavedBoard}
                            currBoard={currBoard}
                            activeBoard={activeBoard}
                            onToggleAppHeaderMenu={onToggleAppHeaderMenu} />
                    }
                </div>
            }
        </nav >
    )
}



