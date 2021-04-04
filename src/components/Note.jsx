import React from 'react';


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
            Delete
            </button>
        </div>
    )
}


export default Note;