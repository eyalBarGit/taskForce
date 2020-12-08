import { combineReducers } from 'redux';
import boardReducer from './boardReducer'


const rootReducer = combineReducers({
  mainStore: boardReducer,
})

export default rootReducer;