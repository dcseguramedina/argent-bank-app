import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    user: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginUser(state, action) {
            state.isLoggedIn = true;
            state.user = action.payload; // Payload contains user data
        },
        logoutUser(state) {
            state.isLoggedIn = false;
            state.user = null;
        },
        updateUser(state, action) {
            if (state.isLoggedIn) {
                state.user = { ...state.user, ...action.payload }; // Update user info
            }
        },
    },
});

export const { loginUser, logoutUser, updateUser } = authSlice.actions;

export default authSlice.reducer;
