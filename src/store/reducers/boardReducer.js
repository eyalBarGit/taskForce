import UTILS from '../../service/utils'
import boards from '../../data/boards'
var initialState = UTILS.loadFromStorage('mainStore')
console.log('initial:', initialState)
if (!initialState || initialState.boards['board-1'].cards['card-1'].id !== 'newCardId')

    initialState = {
        boards: boards,
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
                    [action.savedBoard.id]: {
                        ...state.boards[action.savedBoard.id],
                        isFav: !state.boards[action.savedBoard.id].isFav
                    }
                },
                favBoards: [...state.favBoards, action.savedBoard.id]
            };

        case 'REMOVE_SAVED_BOARD':
            const index = state.favBoards.findIndex((boardId) => boardId === action.boardToRemove.id)
            state.favBoards.splice(index, 1)
            const newFavBoards = state.favBoards
            return {
                ...state,
                boards: {
                    ...state.boards,
                    [action.boardToRemove.id]: {
                        ...state.boards[action.boardToRemove.id],
                        isFav: !state.boards[action.boardToRemove.id].isFav
                    }
                },
                favBoards: newFavBoards
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