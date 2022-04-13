import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './reducers/rootReducer.reducer'

export const root$ = configureStore({ reducer: rootReducer })
