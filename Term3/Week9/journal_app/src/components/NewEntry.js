import React,{useState,useEffect} from "react"
import EntryForm from "./EntryForm"

const NewEntry = ({match, categories, addEntryToJournal}) => {

    const selectedCatgeory = match.params ? match.params.id : -1
    const category = categories[selectedCatgeory]
    const [errorMsg,setErrorMsg] = useState(null)

    useEffect(() => {
        category ? setErrorMsg(null) : setErrorMsg("Category not found please try another link")
    }, [category, categories])

    return(
        <div>
            <h1> New Entry for {category} </h1>
            {errorMsg && <p>{errorMsg}</p>}
            {category && <EntryForm category={category} addEntryToJournal={addEntryToJournal} />}
        </div>
    )
}

export default NewEntry