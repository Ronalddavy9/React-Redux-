import { createStore, combineReducers } from 'redux'

import numerosReducer from './reducers/Reducer'

const reducers = combineReducers ({
    numeros: numerosReducer,
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig