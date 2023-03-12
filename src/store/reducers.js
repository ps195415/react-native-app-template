import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: 'authToken',
    initialState: {
        token : null,
        id: null
    }
    ,
    reducers: {
        SignIn: (state, action) => {
            state.token += action.payload,
            state.id += action.payload
        },
        SignOut: (state) => {
            state.token == null
        }
    }
});

export const { SignIn, SignOut } = loginSlice.actions;
export default loginSlice.reducer;
