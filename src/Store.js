import { configureStore } from '@reduxjs/toolkit'
import { Top } from './redux/Reducer'
import { Tourlist } from './redux/Reducer'
import { setting } from './redux/Reducer'
import { Review } from './redux/Reducer'
import { Menu } from './redux/Reducer'
import { email } from './redux/Reducer'
import { filterTour } from './redux/Reducer'

export const store = configureStore({
  reducer: {
    Tours: Top,
    listTour: Tourlist,
    bannerSetting: setting,
    review: Review,
    nav: Menu,
    clientEmail: email,
    filter: filterTour,
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  },
})
export default store
