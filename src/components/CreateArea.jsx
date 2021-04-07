import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';



function CreateArea(props){

    const [isActive,setActive] = React.useState(false);
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
        setActive(false);
    }

    function handleOnTextAreaClicked(){
        setActive(true);
    }


    return(
        <form className="create-note">
            {isActive && <input name='title' placeholder="Title" onChange={handleOnChange} value={noteEntry.title}></input>}
            <textarea name='content' placeholder="Write Your Content Here" 
            rows={isActive? '3' : '1'} 
            onChange={handleOnChange} value={noteEntry.content} onClick={handleOnTextAreaClicked}></textarea>
            <Zoom in={isActive}>
                <Fab name='add' onClick={(event)=>{
                    event.preventDefault();
                    if(!isNoteEntryEmpty()){
                        props.onAddClicked(noteEntry);
                    }
                    resetNote();
                }}
                
                >
                    <AddIcon/>
                </Fab>
            </Zoom>
            
        </form>
    )
}


export default CreateArea;