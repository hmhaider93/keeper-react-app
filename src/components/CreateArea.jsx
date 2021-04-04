import React from 'react';


function CreateArea(props){

    const [noteEntry, setNoteEntry] = React.useState({
        title:"",
        content:""
    })

    function handleOnChange(event){
        const name = event.target.name;
        const value = event.target.value;
        setNoteEntry(preVal =>{
            return {
                ...preVal,
                [name]: value
            }
        })
    }

    function isNoteEntryEmpty(){
        console.log(noteEntry);
        return (noteEntry.title === "" && noteEntry.content==="") ?  true :  false
    }

    function resetNote(){
        setNoteEntry({
            title:"",
            content:""
        })
    }


    return(
        <form>
            <input name='title' placeholder="Title" onChange={handleOnChange} value={noteEntry.title}></input>
            <textarea name='content' placeholder="Write Your Content Here" rows='3' onChange={handleOnChange} value={noteEntry.content}></textarea>
            <button name='add' onClick={(event)=>{
                event.preventDefault();
                if(!isNoteEntryEmpty()){
                    props.onAddClicked(noteEntry);
                }
                resetNote();
            }}
            
            >Add</button>
        </form>
    )
}


export default CreateArea;