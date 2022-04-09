import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { ToolkitApi } from './ToolkitApi';
import counterReducer from './counterSlice'

export const store = configureStore({
  reducer: {
    [ToolkitApi.reducerPath]: ToolkitApi.reducer,
    counterme: counterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ToolkitApi.middleware),
})
setupListeners(store.dispatch)