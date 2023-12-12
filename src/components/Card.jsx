import React from 'react';
import { useDispatch } from 'react-redux'
import { deleteNote } from '../redux/slice/noteSlice';
import "./Card.css"
const Card = ({ item }) => {
  const dispatch = useDispatch()
  return (

    <div className="card" style={{ width: '18rem', borderColor: item.color }}>
      <div className="card-body">
        <p className="card-text text" style={{ backgroundColor: item.color }}>{item.title} </p>
        <p className="card-text" >{item.content}</p>
        <svg onClick={() => dispatch(deleteNote(item.id))} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="svg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
          <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
        </svg>
      </div>
    </div>

  );
};

export default Card;