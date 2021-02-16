import { createStore, combineReducers } from 'redux'
import countReducer from './count'

const rootReducter = combineReducers({
    countReducer,
})

const store = createStore(
    rootReducter
)

export type storeTypes = ReturnType<typeof rootReducter>

export default store