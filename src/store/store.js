import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth";
import { donorSlice } from "./donors";


export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        donor: donorSlice.reducer,
    }
});