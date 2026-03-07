import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
// FIX: Corrected the import path to match the actual filename 'goalSlice.js'
import goalReducer from '../features/goals/goalSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    goals: goalReducer,
  },
})
