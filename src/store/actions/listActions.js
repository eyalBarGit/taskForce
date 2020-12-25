import listService from '../../service/listService'

export function createCard(currBoard, currList, cardTitle) {
    return async dispatch => {
        try {
            const newCard = await listService.createCard(cardTitle)
            const data = {
                newCard: newCard,
                currBoard: currBoard,
                currList: currList
            }
            dispatch(_createCard(data));
        }
        catch (err) {
            throw err
        }
    }
}
export function deleteList(currBoard, currList) {
    return async dispatch => {
        try {
            const updatedData = await listService.deleteList(currBoard, currList)
            const data = {
                currBoard: currBoard,
                currList: currList,
                newLists: updatedData.newLists,
                newListOrder: updatedData.newListOrder,
                newBoardCards: updatedData.newBoardCards
            }
            dispatch(_deleteList(data));
        }
        catch (err) {
            throw err
        }
    }
}


export function moveList(currBoard, listToMove, moveToBoardId) {

    return async dispatch => {
        try {
            const currListCards = listService.getListCards(currBoard.cards, listToMove)
            const data = {
                currBoard: currBoard,
                listToMove: listToMove,
                moveToBoardId: moveToBoardId,
                currListCards: currListCards
            }
            dispatch(_moveList(data));
        }
        catch (err) {
            throw err
        }
    }
}

export function copyList(currBoard, listToCopy) {

    return async dispatch => {
        try {
            const newListCopy = await listService.copyList(currBoard, listToCopy)
            const data = {
                currBoard: currBoard,
                copiedList: newListCopy.copiedList,
                newListOrder: newListCopy.newListOrder,
                copiedCards: newListCopy.copiedCards
            }
            dispatch(_copyList(data));
        }
        catch (err) {
            throw err
        }
    }
}


export function changeListName(currBoard, currList, listTitle) {

    return async dispatch => {
        try {
            currList.title = listTitle
            const newListTitle = currList
            const data = {
                currBoard: currBoard,
                currList: newListTitle,
            }
            dispatch(_changeListName(data));
        }
        catch (err) {
            throw err
        }
    }
}









function _deleteList(data) {
    return {
        type: 'DELETE_LIST',
        data
    }
}

function _createCard(data) {
    return {
        type: 'CREATE_CARD',
        data
    }
}
function _copyList(data) {
    return {
        type: 'COPY_LIST',
        data
    }
}
function _moveList(data) {
    return {
        type: 'MOVE_LIST',
        data
    }
}
function _changeListName(data) {
    return {
        type: 'CHANGE_LIST_NANE',
        data
    }
}
