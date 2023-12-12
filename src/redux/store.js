import { configureStore } from "@reduxjs/toolkit";
import NoteReducer from "./slice/noteSlice"
const store = configureStore({
    reducer: {
        notes: NoteReducer
    }
})

export default store