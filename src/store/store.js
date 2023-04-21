import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth";
import { marcasSlides } from "./marcas/marcasSlides";
// import { donorSlice } from "./donors";


export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        // donor: donorSlice.reducer,
        marca: marcasSlides.reducer,
    }
});