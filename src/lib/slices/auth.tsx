import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type AuthState = {
    token : string | null;
    expires : number | null;
};

const initialState : AuthState = {
    token : null,
    expires : null,
}

const authSlice = createSlice({
    name : "auth",
    initialState, 
    reducers : {
        clearToken: (state : AuthState) => {
            state.token = null;
            state.expires = null;
          },
          setToken: (state : AuthState, action : PayloadAction<{token : string; expires : number}>) => {
            state.token = action.payload.token;
            state.expires = action.payload.expires;
          }
    }
});

export default authSlice.reducer;

export const {
    clearToken,
    setToken
} = authSlice.actions;