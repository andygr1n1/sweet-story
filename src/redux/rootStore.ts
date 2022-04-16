import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './reducers/rootReducer.reducer'

export const root$ = configureStore({ reducer: rootReducer })

export type TAppDispatch = typeof root$.dispatch
export type TRootState = ReturnType<typeof root$.getState>
// export type AppThunk<ReturnType = void> = ThunkAction<
//     ReturnType,
//     RootState,
//     unknown,
//     Action<string>
// >