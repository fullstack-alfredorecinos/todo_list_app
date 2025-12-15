import authService from "../services/auth.service";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { LoginRequest } from "../interfaces/auth.interface.ts";

const initialState = {
    user: null,
    loading: false,
    error: null,
}

export const loginUser = createAsyncThunk(
    "auth/login",
    async (credentials: LoginRequest, { rejectWithValue }: any) => {
        try {
            const response = await authService.login(credentials);
            return response.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    })

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        // loading: false,
        // error: null,
    },
    reducers: {
        // login: (state, action) => {
        //     state.user = action.payload;
        // },
        // logout: (state) => {
        //     state.user = null;
        // },
    },

})

export default loginUser;


