import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import progressBarSlice from './modules/progressBar'

export function makeStore() {
    return configureStore({
        reducer: {
            progressBar: progressBarSlice,
        },
    })
}

const store = makeStore()

export default store