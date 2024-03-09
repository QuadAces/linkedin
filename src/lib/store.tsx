import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { clientAPI } from "./slices/clientAPI";
import { setupListeners } from "@reduxjs/toolkit/query";
import auth from "./slices/auth";

const store = configureStore({
    reducer : {
        [clientAPI.reducerPath] : clientAPI.reducer,
        auth
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(clientAPI.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export default store;