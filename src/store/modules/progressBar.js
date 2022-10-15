import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import progressBarApi from '../../api/progressBar'

//state
const initialState = {
    list: [],
    width: 10,
    height: 20,
    loading: false,
    total: 0
}

//actions
export const loadList = createAsyncThunk(
    'progressBar/fetchList',
    async() => {
        const response = await progressBarApi.getList()
        return response
    }
)

//store
export const progressBarSlice = createSlice({
    name: 'progressBar',
    initialState,
    reducers: {
        setList: (state, action) => {
            state.list = action.payload
        },
        setWidth: (state, action) => {
            state.width = action.payload
        },
        setHeight: (state, action) => {
            state.height = action.payload
        }
    },
    extraReducers(builder){
        builder
            .addCase(loadList.fulfilled, (state, action) => {
                const items = [...action.payload]

                let total = items.reduce((accumulator, item) => accumulator += item.value, 0)

                state.total = total

                state.list = items.map((item) => {
                    item.percent = ((item.value / total) * 100).toFixed(2)
                    return item
                })
            })
    }
})

//actions
export const {setList, setHeight, setWidth} = progressBarSlice.actions

//selectors
export const selectList = (state) => state.progressBar.list
export const selectWidth = (state) => state.progressBar.width
export const selectHeight = (state) => state.progressBar.height
export const selectTotal = (state) => state.progressBar.total

export default progressBarSlice.reducer