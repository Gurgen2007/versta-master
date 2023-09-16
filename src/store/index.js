import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  show: false,
}

export const indexSlice = createSlice({
  name: 'index',
  initialState,
  reducers: {
    setShow: (state, action) => {
      state.show = action.payload.show
    },
  },
})

// Action creators are generated for each case reducer function
export const { setShow} = indexSlice.actions

export default indexSlice.reducer
