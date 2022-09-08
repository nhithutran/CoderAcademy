import React, {useState} from "react";

const EntryForm = ({addEntryToJournal, category, history}) => {
    const [entry,setEntry] = useState("")
    function onTextChange(event){
        setEntry(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        if(entry && entry.length > 0 ){
            addEntryToJournal({category,entry})
            return history.push("/")
        }
    }    

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <textarea onChange={onTextChange}></textarea>
                </div>
                    <input type="submit"  value="Make an entry"/>
            </form>
        </div>    
    )
}
    
export default EntryForm