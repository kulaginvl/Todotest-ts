import { combineReducers } from 'redux'
import { todoReduser } from './todoReduser'

export const rootReducer = combineReducers ({
    todo: todoReduser,
})

export type RootState = ReturnType<typeof rootReducer>