import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import goalReducer from '../features/goals/goalSlice'
import huntReducer from '../features/hunts/huntSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    goals: goalReducer,
    hunts: huntReducer
  },
})
