import React from 'react';
import { useDispatch } from 'react-redux'
import { searchNote } from '../redux/slice/noteSlice';
import "./SearchForm.css"

const SearchForm = (e) => {
  const dispatch=useDispatch()
  return (
    <div className='search'>
      <input
        type="text"
        className="searchInp"
        id="usr"
        placeholder="Write to search"
        onChange={(e)=>{
          dispatch(searchNote(e.target.value))
        }}
      />
    </div>
  );
};

export default SearchForm;