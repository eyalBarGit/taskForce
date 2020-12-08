import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


export function BoardList(props) {
    const mainStore = useSelector(state => state.mainStore)
    const { boards, favBoards } = mainStore
    const [boardList, setBoardList] = useState('')



    const getAllBoards = useCallback(
        () => {
            const allBoards = []
            for (const board in boards) {
                const currBoard = boards[board];
                allBoards.push(currBoard)
            }
            return allBoards
        },
        [boards],
    )


    const init = useCallback(
        () => {
            setBoardList(getAllBoards())
        },
        [getAllBoards],
    )


    useEffect(() => {
        init()
    }, [init])



    if (!boardList) return 'LOADING...'
    return (
        <div className="board-list ">
            <h2>All Boards</h2>
            <div className="board-list-container justify-center flex wrap">
                {boardList.map(board => {
                    return <div className="container margin-center flex" key={board.id}>
                        <div className="boards flex">
                            <Link to={`boards/${board.id}`}><img
                                alt="board"
                                src={require(`../../assets/images/bgs/${board.backgroundImg}.jpg`)}></img>
                                <p>{board.name}</p>
                            </Link>
                        </div>
                    </div>
                })}
            </div>
            <div className="fav-boards ">
                <h2>Favorite Boards</h2>
                <div className="fav-boards-container flex wrap">
                    {Object.values(favBoards).map(board => {
                        return <div className="container margin-center " key={board.id}>
                            <div className="boards flex ">
                                <Link to={`boards/${board.id}`}>
                                    <img
                                        alt="boards"
                                        src={require(`../../assets/images/bgs/${board.backgroundImg}.jpg`)}></img>
                                    <p>{board.name}</p>
                                </Link>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

