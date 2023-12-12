import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    notes: localStorage.getItem("notes") ? JSON.parse(localStorage.getItem("notes")) : []

}

const notes = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        addNote: (state, action) => {
            state.notes = [...state.notes, action.payload,]
            localStorage.setItem("notes", JSON.stringify(state.notes))
        },
        deleteNote: (state, action) => {
            state.notes = state.notes.filter(note => note.id !== action.payload)
            localStorage.setItem("notes", JSON.stringify(state.notes))
        },
        searchNote: (state, action) => {
            state.notes = JSON.parse(localStorage.getItem("notes"))
            const searched = action.payload.toLowerCase();
            state.notes = state.notes.filter((note) =>
                note.title.toLowerCase().includes(searched)
            )
        }
    }
})
export const { addNote, deleteNote, searchNote } = notes.actions
export default notes.reducer