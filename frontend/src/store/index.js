import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import matchReducer from './slices/matchSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    matches: matchReducer
  }
})

export default store
