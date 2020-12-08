import taskService from '../../service/taskService'
import columnService from '../../service/columnService'

export function addTask(title, columnId) {
  try {
    return async dispatch => {
      const newTask = await taskService.createTask(title)
      newTask.column = columnId
      dispatch({ type: 'ADD_TASK', newTask });
      return newTask
    }
  }
  catch (err) {
    throw err
  }
}
export function removeTask(currColumnTaskIds,currTask,tasks,columnId) {
  try {
    return async dispatch => {
      const task = await taskService.removeTask(currColumnTaskIds,currTask,tasks,columnId)
      dispatch({ type: 'REMOVE_TASK', task });
      return task
    }
  }
  catch (err) {
    throw err
  }
}
export function updateTask(task) {
  try {
    return async dispatch => {
      dispatch({ type: 'UPDATE_TASK', task });

    }
  }
  catch (err) {
    throw err
  }
}
export function addComment(commentContect, currTask) {
  try {
    return async dispatch => {
      const currComment = await taskService.createComment(commentContect)
      dispatch({ type: 'ADD_COMMENT', currTask, currComment });
      return currComment

    }
  }
  catch (err) {
    throw err
  }
}
export function addDescription(task, description) {
  try {
    return async dispatch => {
      dispatch({ type: 'ADD_DESCRIPTION', task, description });

    }
  }
  catch (err) {
    throw err
  }
}

export function setBackgroundColor(color) {
  try {
    return async dispatch => {
      dispatch({ type: 'SET_BACKGROUND', color });

    }
  }
  catch (err) {
    console.log('there was an error')
    throw err
  }
}
export function addFakeData() {
  try {
    return async dispatch => {
      const fakeData = await taskService.createFakeData(5, 5)
      dispatch({ type: 'ADD_FAKE_DATA', fakeData });
      dispatch({ type: 'GET_STATE' })
      return fakeData
    }
  }
  catch (err) {
    console.log('there was an error')
    throw err
  }
}

export function toggleDeleteMsg(isMessageShown) {
  try {
    return async dispatch => {
      dispatch({ type: 'HIDE_DELETE_MSG', isMessageShown })
    }
  }
  catch (err) {
    console.log('there was an error:', err)
    throw err
  }
}

export function saveToStorage(state) {
  try {
    return async dispatch => {
      taskService.saveToStorage(state)
    }
  }
  catch (err) {
    console.log('there was an error')
    throw err
  }
}


export function hexToRgb(hexColor) {
  try {
    return async dispatch => {
      const rgb = columnService.hexToRgb(hexColor)
      const fullColor = {
        randomShades: columnService.getRandomColor(rgb),
        color: `rgb(${rgb.r},${rgb.g},${rgb.b})`
      }
      return fullColor
    }
  }
  catch (err) {
    console.log('there was an error')
    throw err
  }
}



export function updateColumn(column) {
  try {
    return async dispatch => {
      dispatch({ type: 'UPDATE_COLUMN', column });
    }
  }
  catch (err) {
    console.log('there was an error')
    throw err
  }
}
export function addColumn(column) {
  try {
    return async dispatch => {
      dispatch({ type: 'ADD_COLUMN', column });
    }
  }
  catch (err) {
    console.log('there was an error')
    throw err
  }
}
export function removeImg(currTask) {
  try {
    return async dispatch => {
      dispatch({ type: 'REMOVE_IMG', currTask });
    }
  }
  catch (err) {
    console.log('there was an error')
    throw err
  }
}


export function removeColumn(newColumns, columnToRemove) {
  try {
    return async dispatch => {
      const column = columnService.removeColumn(newColumns, columnToRemove)
      dispatch({ type: 'REMOVE_COLUMN', column });

    }
  }
  catch (err) {
    console.log('there was an error')
    throw err
  }
}
export function changeColumnOrder(oldColumnOrder,source,destination,draggableId) {
  try {
    return async dispatch => {
      const newColumnOrder = await columnService.reorderColumns(oldColumnOrder, source, destination, draggableId)
      dispatch({ type: 'CHANGE_COLUMN_ORDER', newColumnOrder });
      return newColumnOrder
    }
  }
  catch (err) {
    console.log('there was an error')
    throw err
  }
}



export function getState() {
  try {
    return async dispatch => {
      dispatch({ type: 'GET_STATE' })
    }
  }
  catch (err) {
    console.log('there was an error')
    throw err
  }
}



// export function logOut() {
//   return dispatch => {
//     userService.logout()
//       .then(user => {
//         dispatch({ type: 'LOG_OUT', user });
//       })
//   }
// }

// export function signUp(userDetails) {
//   return dispatch => {
//     userService.signup(userDetails)
//       .then(user => {
//         dispatch({ type: 'SIGN_UP', user });
//       })
//   }
// }



