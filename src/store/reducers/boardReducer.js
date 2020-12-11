import UTILS from '../../service/utils'

var initialState = UTILS.loadFromStorage('mainStore')

if (!initialState)


    initialState = {
        boards: {
            'board-1': {
                id: 'board-1',
                name: 'Demo-Board',
                isFav: false,
                cards: {
                    'card-1': {
                        id: 'card-1',
                        title: 'card-title-1',
                        desc: 'card-desc-1',
                        checklist: {
                            'check-1': {
                                id: 'check-1',
                                name: 'checklist-1',
                                list: {
                                    'firstOne': {
                                        id: 'firstOne', text: 'firstOne', isChecked: false
                                    },
                                    'secondOne': {
                                        id: 'secondOne', text: 'secondOne', isChecked: true
                                    }
                                }
                            },
                            'check-2': {
                                id: 'check-2',
                                name: 'checklist-2',
                                list: {
                                    'firstOne': { id: 'firstOne', text: 'firstOne' }, 'secondOne': { id: 'secondOne', text: 'secondOne' }
                                }
                            }
                        },
                        cardCover: '',
                        labels: []
                    },
                    'card-2': {
                        id: 'card-2',
                        title: 'card-title-2',
                        desc: 'card-desc-2',
                        checklist: {},
                        cardCover: '',
                        labels: []
                    },
                    'card-3': {
                        id: 'card-3',
                        title: 'card-title-3',
                        desc: 'card-desc-3',
                        checklist: {},
                        cardCover: '',
                        labels: []
                    },
                    'card-4': {
                        id: 'card-4',
                        title: 'card-title-4',
                        desc: 'card-desc-4',
                        checklist: {},
                        cardCover: '',
                        labels: []
                    },
                    'card-5': {
                        id: 'card-5',
                        title: 'card-title-5',
                        desc: 'card-desc-5',
                        checklist: {},
                        cardCover: '',
                        labels: []
                    },
                    'card-6': {
                        id: 'card-6',
                        title: 'card-title-6',
                        desc: 'card-desc-6',
                        checklist: {},
                        cardCover: '',
                        labels: []
                    },
                    'card-7': {
                        id: 'card-7',
                        title: 'card-title-7',
                        desc: 'card-desc-7',
                        checklist: {},
                        cardCover: '',
                        labels: []
                    },
                    'card-8': {
                        id: 'card-8',
                        title: 'card-title-8',
                        desc: 'card-desc-8',
                        checklist: {},
                        cardCover: '',
                        labels: []
                    },
                    'card-9': {
                        id: 'card-9',
                        title: 'card-title-9',
                        desc: 'card-desc-9',
                        checklist: {},
                        cardCover: '',
                        labels: []
                    },
                    'card-10': {
                        id: 'card-10',
                        title: 'card-title-10',
                        desc: 'card-desc-10',
                        checklist: {},
                        cardCover: '',
                        labels: []
                    },
                    'card-11': {
                        id: 'card-11',
                        title: 'card-title-11',
                        desc: 'card-desc-11',
                        checklist: {},
                        cardCover: '',
                        labels: []
                    },
                    'card-12': {
                        id: 'card-12',
                        title: 'card-title-12',
                        desc: 'card-desc-12',
                        checklist: {},
                        cardCover: '',
                        labels: []
                    },
                },
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
                },
                listOrder: ['list-1', 'list-2', 'list-3'],
                backgroundImg: 'lake',
                createdAt: new Date().toLocaleDateString()
            },
            'board-2': {
                id: 'board-2',
                name: 'Eyal\'s Board',
                isFav: false,
                cards: {
                    'card-16': {
                        id: 'card-16',
                        title: 'new card-title-1',
                        desc: 'new card-desc-1',
                        checklist: {},
                        cardCover: '',
                        labels: []
                    },
                    'card-26': {
                        id: 'card-26',
                        title: 'new card-title-2',
                        desc: 'new card-desc-2',
                        checklist: {},
                        cardCover: '',
                        labels: []
                    },
                    'card-36': {
                        id: 'card-36',
                        title: 'new card-title-3',
                        desc: 'new card-desc-3',
                        checklist: {},
                        cardCover: '',
                        labels: []
                    },
                    'card-46': {
                        id: 'card-46',
                        title: 'new card-title-4',
                        desc: 'new card-desc-4',
                        checklist: {},
                        cardCover: '',
                        labels: []
                    },
                    'card-57': {
                        id: 'card-57',
                        title: 'new card-title-5',
                        desc: 'new card-desc-5',
                        checklist: {},
                        cardCover: '',
                        labels: []
                    },
                    'card-67': {
                        id: 'card-67',
                        title: 'new card-title-6',
                        desc: 'new card-desc-6',
                        checklist: {},
                        cardCover: '',
                        labels: []
                    },
                    'card-77': {
                        id: 'card-77',
                        title: 'new card-title-7',
                        desc: 'new card-desc-7',
                        checklist: {},
                        cardCover: '',
                        labels: []
                    },
                    'card-87': {
                        id: 'card-87',
                        title: 'new card-title-8',
                        desc: 'new card-desc-8',
                        checklist: {},
                        cardCover: '',
                        labels: []
                    },
                },
                lists: {
                    'list-13': {
                        id: 'list-13',
                        title: 'todo2',
                        cardIds: ['card-16', 'card-26', 'card-36', 'card-46',]
                    },
                    'list-23': {
                        id: 'list-23',
                        title: 'in progress2',
                        cardIds: ['card-57', 'card-67', 'card-77', 'card-87',]
                    },
                },
                listOrder: ['list-13', 'list-23'],
                backgroundImg: 'lake',
                createdAt: new Date().toLocaleDateString()

            },
        },
        favBoards: [],
        activeBoard: '',
        isCardDetailShown: false,
        isBgSideOpen: false
    };

export default function (state = initialState, action) {
    switch (action.type) {
        case 'SET_STATE':
            return {
                state: action.state
            };
        case 'UPDATE_LIST':
            return {
                ...state,
                boards: {
                    ...state.boards,
                    [action.data.currBoard.id]: {
                        ...action.data.currBoard,
                        lists: {
                            ...state.boards[action.data.currBoard.id].lists,
                            [action.data.updatedList.id]: action.data.updatedList
                        }
                    }
                }
            };
        case 'UPDATE_LISTS':
            return {
                ...state,
                boards: {
                    ...state.boards,
                    [action.data.currBoard.id]: {
                        ...action.data.currBoard,
                        lists: {
                            ...state.boards[action.data.currBoard.id].lists,
                            [action.data.newStartList.id]: action.data.newStartList,
                            [action.data.newFinishList.id]: action.data.newFinishList,

                        }
                    }
                }
            };
        case 'UPDATE_LISTS_ORDER':
            return {
                ...state,
                boards: {
                    ...state.boards,
                    [action.data.currBoard.id]: {
                        ...action.data.currBoard,
                        listOrder: [...action.data.newListOrder]
                    }
                }
            };
        case 'CREATE_BOARD':
            return {
                ...state,
                boards: {
                    ...state.boards,
                    [action.data.newBoard.id]: {
                        ...action.data.newBoard,
                    },
                },
            };
        case 'DELETE_BOARD':
            const newBoards = state.boards
            delete newBoards[action.data.id]
            return {
                ...state,
                boards: {
                    ...newBoards,
                },
            };
        case 'CHANGE_BOARD_NAME':
            return {
                ...state,
                boards: {
                    ...state.boards,
                    [action.data.currBoard.id]: {
                        ...action.data.currBoard,
                        name: action.data.boardName
                    },
                },
            };
        case 'CREATE_LIST':
            return {
                ...state,
                boards: {
                    ...state.boards,
                    [action.data.currBoard]: {
                        ...state.boards[action.data.currBoard],
                        lists: {
                            ...state.boards[action.data.currBoard].lists,
                            [action.data.newList.id]: action.data.newList,
                        },
                        listOrder: [...state.boards[action.data.currBoard].listOrder, action.data.newList.id]
                    },
                },
            };
        case 'DELETE_LIST':
            return {
                ...state,
                boards: {
                    ...state.boards,
                    [action.data.currBoard.id]: {
                        ...state.boards[action.data.currBoard.id],
                        lists: {
                            ...action.data.newLists
                        },
                        listOrder: action.data.newListOrder
                    },
                },
            };
        case 'MOVE_LIST':
            return {
                ...state,
                boards: {
                    ...state.boards,
                    [action.data.moveToBoardId]: {
                        ...state.boards[action.data.moveToBoardId],
                        cards: {
                            ...state.boards[action.data.moveToBoardId].cards,
                            ...action.data.currListCards
                        },
                        lists: {
                            ...state.boards[action.data.moveToBoardId].lists,
                            [action.data.listToMove.id]: {
                                ...action.data.listToMove
                            }
                        },
                        listOrder: [...state.boards[action.data.moveToBoardId].listOrder, action.data.listToMove.id]
                    },

                },
            };
        case 'COPY_LIST':
            return {
                ...state,
                boards: {
                    ...state.boards,
                    [action.data.currBoard.id]: {
                        ...state.boards[action.data.currBoard.id],
                        cards: {
                            ...state.boards[action.data.currBoard.id].cards,
                            ...action.data.copiedCards
                        },
                        lists: {
                            ...state.boards[action.data.currBoard.id].lists,
                            [action.data.copiedList.id]: {
                                ...action.data.copiedList
                            }
                        },
                        listOrder: action.data.newListOrder
                    },

                },
            };
        case 'CHANGE_LIST_NANE':
            return {
                ...state,
                boards: {
                    ...state.boards,
                    [action.data.currBoard.id]: {
                        ...state.boards[action.data.currBoard.id],
                        lists: {
                            ...state.boards[action.data.currBoard.id].lists,
                            [action.data.currList.id]: {
                                ...action.data.currList
                            }
                        },

                    },
                },
            };
        case 'CHANGE_BOARD_BG':
            return {
                ...state,
                boards: {
                    ...state.boards,
                    [action.data.currBoard.id]: {
                        ...state.boards[action.data.currBoard.id],
                        backgroundImg: action.data.bgName,
                    }
                }
            };

        case 'SET_ACTIVE_BOARD':
            return {
                ...state,
                activeBoard: action.activeBoard.id
            };
        case 'CREATE_CARD':
            console.log('created')
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
        case 'COPY_CARD':
            return {
                ...state,
                boards: {
                    ...state.boards,
                    [action.data.currBoard.id]: {
                        ...state.boards[action.data.currBoard.id],
                        cards: {
                            ...state.boards[action.data.currBoard.id].cards,
                            [action.data.copiedCard.id]: action.data.copiedCard
                        },
                        lists: {
                            ...state.boards[action.data.currBoard.id].lists,
                            [action.data.copyToListID]: {
                                ...state.boards[action.data.currBoard.id].lists[action.data.copyToListID],
                                cardIds: [...state.boards[action.data.currBoard.id].lists[action.data.copyToListID].cardIds, action.data.copiedCard.id]
                            }
                        },
                    }
                }
            };
        case 'SET_CARD_TITLE':
            return {
                ...state,
                boards: {
                    ...state.boards,
                    [action.data.currBoard.id]: {
                        ...state.boards[action.data.currBoard.id],
                        cards: {
                            ...state.boards[action.data.currBoard.id].cards,
                            [action.data.currCard.id]: { ...action.data.currCard, title: action.data.cardTitle },
                        },

                    }
                }
            };
        case 'MOVE_CARD':
            return {
                ...state,
                boards: {
                    ...state.boards,
                    [action.data.currBoard.id]: {
                        ...state.boards[action.data.currBoard.id],
                        lists: {
                            ...state.boards[action.data.currBoard.id].lists,
                            [action.data.currList.id]: {
                                ...state.boards[action.data.currBoard.id].lists[action.data.currList.id],
                                cardIds: state.boards[action.data.currBoard.id].lists[action.data.currList.id].cardIds.filter(cardId => cardId !== action.data.currCard.id)
                            },
                            [action.data.moveToListID]: {
                                ...state.boards[action.data.currBoard.id].lists[action.data.moveToListID],
                                cardIds: [...state.boards[action.data.currBoard.id].lists[action.data.moveToListID].cardIds, action.data.currCard.id]
                            }
                        },
                    }
                }
            };
        case 'DELETE_CARD':
            return {
                ...state,
                boards: {
                    ...state.boards,
                    [action.data.currBoard.id]: {
                        ...action.data.currBoard,
                        lists: {
                            ...action.data.currBoard.lists,
                            [action.data.currList.id]: action.data.currList
                        },
                    }
                }
            };



        case 'SET_DESC':
            return {
                ...state,
                boards: {
                    ...state.boards,
                    [action.data.currBoard.id]: {
                        ...action.data.currBoard,
                        cards: {
                            ...state.boards[action.data.currBoard.id].cards,
                            [action.data.currCard.id]:
                            {
                                ...state.boards[action.data.currBoard.id].cards[action.data.currCard.id],
                                desc: action.data.desc
                            }
                        },
                    }
                }
            };

        case 'SET_LABEL':
            return {
                ...state,
                boards: {
                    ...state.boards,
                    [action.data.currBoard.id]: {
                        ...state.boards[action.data.currBoard.id],
                        cards: {
                            ...state.boards[action.data.currBoard.id].cards,
                            [action.data.currCard.id]:
                            {
                                ...state.boards[action.data.currBoard.id].cards[action.data.currCard.id],
                                labels: [...state.boards[action.data.currBoard.id].cards[action.data.currCard.id].labels, action.data.labelColor]
                            }
                        },
                    }
                }
            };
        case 'UPDATE_LABELS':
            return {
                ...state,
                boards: {
                    ...state.boards,
                    [action.data.currBoard.id]: {
                        ...action.data.currBoard,
                        cards: {
                            ...state.boards[action.data.currBoard.id].cards,
                            [action.data.currCard.id]:
                            {
                                ...state.boards[action.data.currBoard.id].cards[action.data.currCard.id],
                                labels: action.data.newLabelList
                            }
                        },
                    }
                }
            };

        case 'TOGGLE_CARD_WATCH':
            return {
                ...state,
                boards: {
                    ...state.boards,
                    [action.data.currBoard.id]: {
                        ...action.data.currBoard,
                        cards: {
                            ...state.boards[action.data.currBoard.id].cards,
                            [action.data.currCard.id]:
                            {
                                ...state.boards[action.data.currBoard.id].cards[action.data.currCard.id],
                                isWatched: action.data.isWatched
                            }
                        },
                    }
                }
            };
        case 'TOGGLE_CHECK_ITEM':
            const isItemChecked = state.boards[action.data.currBoard.id].cards[action.data.currCard.id].checklist[action.data.currCheckList.id].list[action.data.currItem.id].isChecked
            return {
                ...state,
                boards: {
                    ...state.boards,
                    [action.data.currBoard.id]: {
                        ...action.data.currBoard,
                        cards: {
                            ...state.boards[action.data.currBoard.id].cards,
                            [action.data.currCard.id]:
                            {
                                ...state.boards[action.data.currBoard.id].cards[action.data.currCard.id],
                                checklist: {
                                    ...state.boards[action.data.currBoard.id].cards[action.data.currCard.id].checklist,
                                    [action.data.currCheckList.id]: {
                                        ...state.boards[action.data.currBoard.id].cards[action.data.currCard.id].checklist[action.data.currCheckList.id],
                                        list: {
                                            ...state.boards[action.data.currBoard.id].cards[action.data.currCard.id].checklist[action.data.currCheckList.id].list,
                                            [action.data.currItem.id]: {
                                                ...state.boards[action.data.currBoard.id].cards[action.data.currCard.id].checklist[action.data.currCheckList.id].list[action.data.currItem.id],
                                                isChecked: !isItemChecked
                                            }
                                        },
                                    }
                                }
                            },
                        }
                    }
                },
            }


        case 'SET_DUE_DATE':
            return {
                ...state,
                boards: {
                    ...state.boards,
                    [action.data.currBoard.id]: {
                        ...action.data.currBoard,
                        cards: {
                            ...state.boards[action.data.currBoard.id].cards,
                            [action.data.currCard.id]:
                            {
                                ...state.boards[action.data.currBoard.id].cards[action.data.currCard.id],
                                dueDate: action.data.dueDate
                            }
                        },
                    }
                }
            };


        case 'CREATE_CHECKLIST':
            return {
                ...state,
                boards: {
                    ...state.boards,
                    [action.data.currBoard.id]: {
                        ...action.data.currBoard,
                        cards: {
                            ...state.boards[action.data.currBoard.id].cards,
                            [action.data.currCard.id]:
                            {
                                ...state.boards[action.data.currBoard.id].cards[action.data.currCard.id],
                                checklist: { ...state.boards[action.data.currBoard.id].cards[action.data.currCard.id].checklist, [action.data.currChecklist.id]: action.data.currChecklist }
                            }
                        },
                    }
                }
            };
        case 'ADD_CHECKLIST_ITEM':
            return {
                ...state,
                boards: {
                    ...state.boards,
                    [action.data.currBoard.id]: {
                        ...action.data.currBoard,
                        cards: {
                            ...state.boards[action.data.currBoard.id].cards,
                            [action.data.currCard.id]:
                            {
                                ...state.boards[action.data.currBoard.id].cards[action.data.currCard.id],
                                checklist: {
                                    ...state.boards[action.data.currBoard.id].cards[action.data.currCard.id].checklist,
                                    [action.data.currCheckList.id]: {
                                        ...state.boards[action.data.currBoard.id].cards[action.data.currCard.id].checklist[action.data.currCheckList.id],
                                        list: { ...state.boards[action.data.currBoard.id].cards[action.data.currCard.id].checklist[action.data.currCheckList.id].list, [action.data.newItem.id]: action.data.newItem }
                                    }
                                }
                            }
                        },
                    }
                }
            };
        case 'REMOVE_CHECKLIST_ITEM':
            const newChecklistToSave = state.boards[action.data.currBoard.id].cards[action.data.currCard.id].checklist
            [action.data.currCheckList.id]
            delete newChecklistToSave.list[action.data.itemToRemove.id]

            return {
                ...state,
                boards: {
                    ...state.boards,
                    [action.data.currBoard.id]: {
                        ...action.data.currBoard,
                        cards: {
                            ...state.boards[action.data.currBoard.id].cards,
                            [action.data.currCard.id]:
                            {
                                ...state.boards[action.data.currBoard.id].cards[action.data.currCard.id],
                                checklist: {
                                    ...state.boards[action.data.currBoard.id].cards[action.data.currCard.id].checklist,
                                    [action.data.currCheckList.id]: newChecklistToSave
                                }
                            }
                        },
                    }
                }
            };

        case 'REMOVE_CHECKLIST':
            const newChecklist = state.boards[action.data.currBoard.id].cards[action.data.currCard.id].checklist
            delete newChecklist[action.data.checkListToRemove.id]
            return {
                ...state,
                boards: {
                    ...state.boards,
                    [action.data.currBoard.id]: {
                        ...action.data.currBoard,
                        cards: {
                            ...state.boards[action.data.currBoard.id].cards,
                            [action.data.currCard.id]:
                            {
                                ...state.boards[action.data.currBoard.id].cards[action.data.currCard.id],
                                checklist: newChecklist
                            }
                        },
                    }
                }
            };


        case 'CARD_COVER':
            return {
                ...state,
                boards: {
                    ...state.boards,
                    [action.data.currBoard.id]: {
                        ...action.data.currBoard,
                        cards: {
                            ...state.boards[action.data.currBoard.id].cards,
                            [action.data.currCard.id]:
                                { ...state.boards[action.data.currBoard.id].cards[action.data.currCard.id], cardCover: action.data.color }
                        },
                    }
                }
            };



        case 'UPDATE_CURR_LIST':
            return {
                ...state,
                currListId: action.data
            };
        case 'TOGGLE_CARD_DETAILS':
            return {
                ...state,
                isCardDetailShown: action.data
            };
        case 'TOGGLE_BG_SIDE':
            return {
                ...state,
                isBgSideOpen: !state.isBgSideOpen
            };
        case 'TOGGLE_FAV_BOARD':
            return {
                ...state,
                boards: {
                    ...state.boards,
                    [action.data.id]: {
                        ...state.boards[action.data.id],
                        isFav: !state.boards[action.data.id].isFav
                    }
                },
                favBoards: [...state.favBoards, action.data.id]
            };

        case 'REMOVE_SAVED_BOARD':
            delete state.favBoards[action.boardToRemove.id]
            return {
                ...state,
                boards: {
                    ...state.boards,
                    [action.boardToRemove.id]: {
                        ...state.boards[action.boardToRemove.id],
                        isFav: !state.boards[action.boardToRemove.id].isFav
                    }
                },
                favBoards: { ...state.favBoards }
            }


        case 'GET_STATE':
            console.log('state:', state)
            return {
                ...state,

            };
        default:
            return state;
    }
}