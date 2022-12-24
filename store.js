import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './featurs/basketSlice'
import restaurantSlice  from './featurs/restaurantSlice'

export const store = configureStore({
  reducer: {
    basket : basketReducer,
    restaurant : restaurantSlice,
  },
})