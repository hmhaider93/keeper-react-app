import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import StarRating from './StarRating'


function Note(props){
    return (
        <div className='note'>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button
                onClick={(event)=>{
                    props.handleDeletePressed(props.id)
                    event.preventDefault();
                }}
            >
            <DeleteIcon/>
            </button>
            <StarRating outOf='7' />
        </div>
    )
}


export default Note;