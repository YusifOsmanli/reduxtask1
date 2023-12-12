import React from 'react'
import Card from './Card'
import { useSelector } from 'react-redux'

const Cards = () => {
    const { notes } = useSelector((state) => state.notes)
    console.log(notes)
    return (
        <div className='cards'>
            {
                notes && notes.map((item, index) => (
                    <Card key={index} item={item} />
                ))
            }
        </div>
    )
}

export default Cards