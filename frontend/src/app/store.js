import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import huntReducer from '../features/hunts/huntSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    hunts: huntReducer
  },
})
