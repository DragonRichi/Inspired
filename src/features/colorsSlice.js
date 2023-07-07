import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { COLORS_URL } from "../const";

export const fetchColors = createAsyncThunk(
    "colors/fetchColors",
    async () => {
        const response = await fetch(COLORS_URL)
        const data = await response.json()
        return data;
    }
)


const colorsSlice = createSlice({
    name: "colors",
    initialState: {
        status: "idle",
        colorsList: [],
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(fetchColors.pending, (state) => {
            state.status = "loading";
        })
        builder.addCase(fetchColors.fulfilled, (state, action) => {
            state.status = "succeess";
            state.colorsList = action.payload;
        })
        builder.addCase(fetchColors.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        })

    }

})

export default colorsSlice.reducer;