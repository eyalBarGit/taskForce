var initialState = {
    lists: {
        'list-1': {
            id: 'list-1',
            title: 'todo',
            cardIds: ['card-1', 'card-2', 'card-3', 'card-4',]
        },
        'list-2': {
            id: 'list-2',
            title: 'in progress',
            cardIds: ['card-5', 'card-6', 'card-7', 'card-8',]
        },
        'list-3': {
            id: 'list-3',
            title: 'done',
            cardIds: ['card-9', 'card-10', 'card-11', 'card-12',]
        },
    }
}


export default function (state = initialState, action) {
    switch (action.type) {
        case 'CREATE_CARD':
            return {
                ...state,
                boards: {
                    ...state.boards,
                    [action.data.currBoard.id]: {
                        ...state.boards[action.data.currBoard.id],
                        cards: {
                            ...state.boards[action.data.currBoard.id].cards,
                            [action.data.newCard.id]: action.data.newCard,
                        },
                        lists: {
                            ...state.boards[action.data.currBoard.id].lists,
                            [action.data.currList.id]: {
                                ...state.boards[action.data.currBoard.id].lists[action.data.currList.id],
                                cardIds: [
                                    ...state.boards[action.data.currBoard.id].lists[action.data.currList.id].cardIds, action.data.newCard.id
                                ]
                            }
                        }

                    }
                }
            };
        default:
            return state;
    }