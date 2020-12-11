import service from '../../service/boardService'


export function dragInsideList(start, source, destination, draggableId, currBoard) {
    return async dispatch => {
        try {
            const updatedList = await service.updateList(start, source, destination, draggableId)
            const data = {
                updatedList: updatedList,
                currBoard: currBoard
            }
            console.log('currBoard', currBoard)
            dispatch(_dragInsideList(data));

        }
        catch (err) {
            throw err
        }
    }
}
export function dragOutsideList(start, source, destination, draggableId, currBoard, finish) {
    return async dispatch => {
        try {
            const res = await service.dragOutsideList(start, source, destination, draggableId, finish)
            const data = {
                newStartList: res.newStartList,
                newFinishList: res.newFinishList,
                currBoard: currBoard
            }
            dispatch(_dragOutsideList(data));

        }
        catch (err) {
            console.log('there was an error')
            throw err
        }
    }
}
export function dragList(source, destination, draggableId, currBoard) {
    return async dispatch => {
        try {
            const newListOrder = await service.dragList(source, destination, draggableId, currBoard)
            const data = {
                newListOrder: newListOrder,
                currBoard: currBoard
            }
            dispatch(_dragList(data));
        }
        catch (err) {
            console.log('there was an error')
            throw err
        }
    }
}

export function createBoard(boardName = "New Board") {
    return async dispatch => {
        try {
            const newBoard = await service.createBoard(boardName)
            const data = {
                newBoard: newBoard,
            }
            dispatch(_createBoard(data))
        }
        catch (err) {
            console.log('there was an error')
            throw err
        }
    }
}
export function deleteBoard(boardToDelete) {
    return async dispatch => {
        try {

            dispatch(_deleteBoard(boardToDelete))
        }
        catch (err) {
            console.log('there was an error')
            throw err
        }
    }
}

export function changeBoardName(currBoard, boardName) {
    return async dispatch => {
        try {
            const data = {
                currBoard: currBoard,
                boardName: boardName
            }
            dispatch(_changeBoardName(data))
        }
        catch (err) {
            console.log('there was an error')
            throw err
        }
    }
}


export function createList(currBoard, listName) {
    return async dispatch => {
        try {
            const newList = await service.createList(listName)
            const data = {
                newList: newList,
                currBoard: currBoard
            }
            dispatch(_createList(data))

        }
        catch (err) {
            console.log('there was an error')
            throw err
        }
    }
}

export function favoriteBoard(currBoard) {
    return async dispatch => {
        try {
            dispatch(_favoriteBoard(currBoard))
        }
        catch (err) {
            console.log('there was an error')
            throw err
        }
    }
}

export function removeSavedBoard(currBoard) {
    return async dispatch => {
        try {
            dispatch(_removeSavedBoard(currBoard))
        }
        catch (err) {
            console.log('there was an error')
            throw err
        }
    }
}


export function changeBoardBackground(currBoard, bgName) {
    return async dispatch => {
        try {
            const data = {
                bgName: bgName,
                currBoard: currBoard
            }
            dispatch(_changeBoardBg(data))

        }
        catch (err) {
            console.log('there was an error')
            throw err
        }
    }
}

export function toggleBgSide() {
    return async dispatch => {
        try {
            dispatch(_toggleBgSide());

        }
        catch (err) {
            throw err
        }
    }
}



export function setActiveBoard(boardId) {
    return async dispatch => {
        try {
            dispatch(_setActiveBoard(boardId))

        }
        catch (err) {
            console.log('there was an error')
            throw err
        }
    }
}
export function saveToStorage(store) {
    return async dispatch => {
        try {
            await service.saveToStorage(store)

        }
        catch (err) {
            console.log('there was an error')
            throw err
        }
    }
}












function _setActiveBoard(activeBoard) {
    return {
        type: 'SET_ACTIVE_BOARD',
        activeBoard
    }
}


function _dragInsideList(data) {
    return {
        type: 'UPDATE_LIST',
        data
    }
}
function _dragOutsideList(data) {
    return {
        type: 'UPDATE_LISTS',
        data
    }
}
function _dragList(data) {
    return {
        type: 'UPDATE_LISTS_ORDER',
        data
    }
}
function _createList(data) {

    return {
        type: 'CREATE_LIST',
        data
    }
}
function _changeBoardBg(data) {
    return {
        type: 'CHANGE_BOARD_BG',
        data
    }
}

function _toggleBgSide() {
    return {
        type: 'TOGGLE_BG_SIDE',
    }
}
function _favoriteBoard(savedBoard) {
    return {
        type: 'TOGGLE_FAV_BOARD',
        savedBoard
    }
}
function _removeSavedBoard(boardToRemove) {
    return {
        type: 'REMOVE_SAVED_BOARD',
        boardToRemove
    }
}
function _createBoard(data) {
    return {
        type: 'CREATE_BOARD',
        data
    }
}
function _changeBoardName(data) {
    return {
        type: 'CHANGE_BOARD_NAME',
        data
    }
}
function _deleteBoard(data) {
    return {
        type: 'DELETE_BOARD',
        data
    }
}