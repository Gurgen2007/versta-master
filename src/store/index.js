import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  show: false,
  data:[]
}

export const indexSlice = createSlice({
  name: 'index',
  initialState,
  reducers: {
    setShow: (state, action) => {
      state.show = action.payload.show
    },
    setData: (state, action) => {
      state.data = [
        ...state.data,
        action.payload.data
      ]
    }
  }
})

// Action creators are generated for each case reducer function
export const { setShow, setData} = indexSlice.actions

export default indexSlice.reducer