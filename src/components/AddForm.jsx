import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNote } from '../redux/slice/noteSlice'; 
import "./AddForm.css"

const AddForm = () => {
    const [note, setNote] = useState({ title: "", content: "", id: "", color: "" })
    const [colors, setColors] = useState(["pink", "purple", "blue", "yellow", "green"])
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        note.id = new Date().getTime()
        dispatch(addNote(note))
        setNote({ title: "", content: "", id: "", color: "" })
    }

    return (
        <div className='container'>

            <div className='addForm'>
                <h1>Data Redux <span style={{ color: "rgb(126, 87, 194)" }}>Note</span>Pad</h1>
                <input name='title' value={note.title} onChange={handleChange} type="text" class="addInp" id="usr" placeholder='Note Title'></input>
                <textarea name='content' value={note.content} onChange={handleChange} className="textarea" id="textAreaExample2" rows="8" placeholder='Write note...'></textarea>
            </div>


            <div className='colorDiv'>
                <div className="colors">
                    {
                        colors && colors.map((item, index) => (
                            <label htmlFor={item} key={index} className='colorlabel' style={{ backgroundColor: item }}>
                                <input type="radio" name='color' value={item} onChange={handleChange} id={item} style={{ display: "none" }} />
                            </label>
                        ))
                    }
                </div>
                <div>
                    <button className='saveBtn' onClick={handleSubmit}>Save ✓</button>
                </div>
            </div>


        </div>
    )
}

export default AddForm