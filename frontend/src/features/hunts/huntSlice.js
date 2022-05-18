import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import huntService from './huntService'

const initialState = {
    hunts: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

// Create new hunt
export const createHunt = createAsyncThunk(
    'hunts/create',
    async (huntData, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await huntService.createHunt(huntData, token)
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

// Get user hunts
export const getHunts = createAsyncThunk(
    'hunts/getAll',
    async (_, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await huntService.getHunts(token)
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

// Delete user hunt
export const deleteHunt = createAsyncThunk(
    'hunts/delete',
    async (id, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await huntService.deleteHunt(id, token)
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const huntSlice = createSlice({
    name: 'hunt',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(createHunt.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createHunt.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.hunts.push(action.payload)
            })
            .addCase(createHunt.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getHunts.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getHunts.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.hunts = action.payload
            })
            .addCase(getHunts.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(deleteHunt.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteHunt.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.hunts = state.hunts.filter(
                    (hunt) => hunt._id !== action.payload.id
                )
            })
            .addCase(deleteHunt.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    },
})

export const { reset } = huntSlice.actions
export default huntSlice.reducer
