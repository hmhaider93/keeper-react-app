import React from 'react';
import Header from './Header'
import Footer from './Footer'
import Note from './Note'
import notes from '../notes'
import CreateArea from './CreateArea'

console.log(notes.length);

function App(){

    const [allNotes, setAllNotes] = React.useState(notes)


    function onAddClicked(noteEntry){

        setAllNotes(preVal=>{
            // noteEntry.key = (preVal.length+1)
            return[...preVal,noteEntry]
        })

        // notes.push({
        //     key:(notes.length+1),
        //     ...noteEntry
        // })
    }

    function handleDeletePressed(noteKey){
        setAllNotes(preVal=>{
            return preVal.filter((note,index)=>{
                return index !== noteKey
            })
        })
    }


    return (<div>
        <Header />
        <CreateArea onAddClicked={onAddClicked}/>
        {allNotes.map((currentNote,index) => <Note key={index} id={index} title={currentNote.title} content={currentNote.content} handleDeletePressed={handleDeletePressed}/>)}
        <Footer />
    </div>);
};

export default App;