import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface MediaState {
    library: any[]
}

const initialState: MediaState = {
    library: [],
}

export const mediaSlice = createSlice({
  name: 'library',
  initialState,
  reducers: {
    addMedia: (state, action: PayloadAction<any[]>) => {
        state.library.push(...action.payload);
    },
    },
})

// Action creators are generated for each case reducer function
export const { addMedia } = mediaSlice.actions

export default mediaSlice.reducer