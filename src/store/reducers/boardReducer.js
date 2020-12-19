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
                        title: 'Go to the groceries store',
                        desc: 'Click here to change the description',
                        isWatched: true,
                        dueDate: "Sun Dec 27 2020",
                        checklist: {
                            'check-1': {
                                id: 'check-1',
                                name: 'checklist-1',
                                list: {
                                    'firstOne': {
                                        id: 'firstOne', text: 'toDo-chelcklist', isChecked: false
                                    },
                                    'secondOne': {
                                        id: 'secondOne', text: 'Do-Not-Forget', isChecked: true
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
                        cardCover: "#4ae06d",
                        labels: ["#e04a4a",]
                    },
                    'card-2': {
                        id: 'card-2',
                        title: 'Watch the kids',
                        desc: 'Click here to change the description',
                        isWatched: true,
                        dueDate: "Sun Dec 27 2020",
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
                        cardCover: "#3874ed",
                        labels: ["#e04a4a", "#f9af4d", "#3874ed", "#ffff51"]
                    },
                    'card-3': {
                        id: 'card-3',
                        title: 'Get new keyboard',
                        desc: 'Buy on Micorosoft keyboard!',
                        isWatched: true,
                        dueDate: "Sun Dec 27 2020",
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
                        cardCover: "#ab4ae0",
                        labels: ["#4ae06d",]
                    },
                    'card-4': {
                        id: 'card-4',
                        title: 'Get new shirt',
                        desc: 'Click here to change the description',
                        isWatched: true,
                        dueDate: "Sun Dec 27 2020",
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
                        cardCover: "#f9af4d",
                        labels: ["#ab4ae0",]
                    },
                    'card-5': {
                        id: 'card-5',
                        title: 'Finish house chors',
                        desc: 'Click here to change the description',
                        isWatched: true,
                        dueDate: "Sun Dec 27 2020",
                        checklist: {
                            'check-1': {
                                id: 'check-1',
                                name: 'checklist-1',
                                list: {
                                    'firstOne': {
                                        id: 'firstOne', text: 'Clean the windows', isChecked: false
                                    },
                                    'secondOne': {
                                        id: 'secondOne', text: 'Vaccum clean', isChecked: true
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
                        cardCover: "#ffff51",
                        labels: ["#3874ed",]
                    },
                    'card-6': {
                        id: 'card-6',
                        title: 'Finish adding demo data',
                        desc: 'Add demo data to all cards',
                        isWatched: true,
                        dueDate: "Sun Dec 27 2020",
                        checklist: {
                            'check-1': {
                                id: 'check-1',
                                name: 'checklist-1',
                                list: {
                                    'firstOne': {
                                        id: 'firstOne', text: 'this is demo checklist item', isChecked: false
                                    },
                                    'secondOne': {
                                        id: 'secondOne', text: 'this is another demo checklist item', isChecked: true
                                    }
                                }
                            },
                            'check-2': {
                                id: 'check-2',
                                name: 'checklist-2',
                                list: {
                                    'firstOne': { id: 'firstOne', text: 'firstOne' },
                                    'secondOne': { id: 'secondOne', text: 'secondOne' }
                                }
                            }
                        },
                        cardCover: "#f9af4d",
                        labels: ["#e04a4a",]
                    },
                    'card-7': {
                        id: 'card-7',
                        title: 'Demo card',
                        desc: 'Click to change description',
                        isWatched: true,
                        dueDate: "Sun Dec 27 2020",
                        checklist: {
                            'check-1': {
                                id: 'check-1',
                                name: 'checklist-1',
                                list: {
                                 
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
                        cardCover: "#4ae06d",
                        labels: ["#4ae06d",]
                    },
                    'card-8': {
                        id: 'card-8',
                        title: 'Get the kids from school',
                        desc: 'Click here to change card description',
                        isWatched: true,
                        dueDate: "Sun Dec 27 2020",
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
                        cardCover: "#f9af4d",
                        labels: ["#ab4ae0",]
                    },
                    'card-9': {
                        id: 'card-9',
                        title: 'Learn JWT',
                        desc: 'Click here to change card description',
                        isWatched: true,
                        dueDate: "Sun Dec 27 2020",
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
                        cardCover: "#4ae06d",
                        labels: ["#ffff51"]
                    },
                    'card-10': {
                        id: 'card-10',
                        title: 'New demo card',
                        desc: 'Click here to change card description',
                        isWatched: true,
                        dueDate: "Sun Dec 27 2020",
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
                        cardCover: "#3874ed",
                        labels: ["#ffff51"]
                    },
                    'card-11': {
                        id: 'card-11',
                        title: 'Get food for the cats',
                        desc: 'Click here to change card description',
                        isWatched: true,
                        dueDate: "Sun Dec 27 2020",
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
                        cardCover: "#e04a4a",
                        labels: ["#3874ed",]
                    },
                    'card-12': {
                        id: 'card-12',
                        title: 'Get food for the dogs',
                        desc: 'Click here to change card description',
                        isWatched: true,
                        dueDate: "Sun Dec 27 2020",
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
                        cardCover: "#ab4ae0",
                        labels: ["#e04a4a", "#4ae06d", "#ab4ae0", "#f9af4d", "#3874ed", "#ffff51"]
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
                        title: 'card-title-1',
                        desc: 'card-desc-1',
                        isWatched: true,
                        dueDate: "Sun Dec 27 2020",
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
                        cardCover: "#ab4ae0",
                        labels: ["#e04a4a", "#4ae06d", "#ab4ae0", "#f9af4d", "#3874ed", "#ffff51"]
                    },
                    'card-26': {
                        id: 'card-26',
                        title: 'card-title-1',
                        desc: 'card-desc-1',
                        isWatched: true,
                        dueDate: "Sun Dec 27 2020",
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
                        cardCover: "#ab4ae0",
                        labels: ["#e04a4a", "#4ae06d", "#ab4ae0", "#f9af4d", "#3874ed", "#ffff51"]
                    },
                    'card-36': {
                        id: 'card-36',
                        title: 'card-title-1',
                        desc: 'card-desc-1',
                        isWatched: true,
                        dueDate: "Sun Dec 27 2020",
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
                        cardCover: "#ab4ae0",
                        labels: ["#e04a4a", "#4ae06d", "#ab4ae0", "#f9af4d", "#3874ed", "#ffff51"]
                    },
                    'card-46': {
                        id: 'card-46',
                        title: 'card-title-1',
                        desc: 'card-desc-1',
                        isWatched: true,
                        dueDate: "Sun Dec 27 2020",
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
                        cardCover: "#ab4ae0",
                        labels: ["#e04a4a", "#4ae06d", "#ab4ae0", "#f9af4d", "#3874ed", "#ffff51"]
                    },
                    'card-57': {
                        id: 'card-57',
                        title: 'card-title-1',
                        desc: 'card-desc-1',
                        isWatched: true,
                        dueDate: "Sun Dec 27 2020",
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
                        cardCover: "#ab4ae0",
                        labels: ["#e04a4a", "#4ae06d", "#ab4ae0", "#f9af4d", "#3874ed", "#ffff51"]
                    },
                    'card-67': {
                        id: 'card-67',
                        title: 'card-title-1',
                        desc: 'card-desc-1',
                        isWatched: true,
                        dueDate: "Sun Dec 27 2020",
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
                        cardCover: "#ab4ae0",
                        labels: ["#e04a4a", "#4ae06d", "#ab4ae0", "#f9af4d", "#3874ed", "#ffff51"]
                    },
                    'card-77': {
                        id: 'card-77',
                        title: 'card-title-1',
                        desc: 'card-desc-1',
                        isWatched: true,
                        dueDate: "Sun Dec 27 2020",
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
                        cardCover: "#ab4ae0",
                        labels: ["#e04a4a", "#4ae06d", "#ab4ae0", "#f9af4d", "#3874ed", "#ffff51"]
                    },
                    'card-87': {
                        id: 'card-87',
                        title: 'card-title-1',
                        desc: 'card-desc-1',
                        isWatched: true,
                        dueDate: "Sun Dec 27 2020",
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
                        cardCover: "#ab4ae0",
                        labels: ["#e04a4a", "#4ae06d", "#ab4ae0", "#f9af4d", "#3874ed", "#ffff51"]
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