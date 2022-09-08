import React, {useState} from 'react'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Home from './components/Home'
import CategorySelection from './components/CategorySelection'
import NewEntry from './components/NewEntry'
import NotFound from './components/NotFound'

const App = () => {
  const defaultCategories = ["Food", "Coding",  "other"]
  // pass as initial state value
  const[categories, setCategories] = useState(defaultCategories) 
  const [entries, setEntries] = useState([])

  function addEntryToJournal(newEntry){
    const updateEntries = [...entries, newEntry]
    setEntries(updateEntries)
  }
  return (
    <div >
        <Router>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="category">Category Selection</Link></li>
            <li><Link to="entry/new/:id">NewEntry</Link></li>
          </ul>

          <Routes>  
            {/* Use 'exact' keyword to solve problem where Home page also display for other urls. */}
            <Route exact path="/" render={(props) =><Home {...props} entries={entries}/>}/>
            {/* Inherite all props passed by the parent and also pass next prop */}
            <Route path="/category" render={(props) => <CategorySelection {...props} categories={categories}/> }/>
            <Route path="/entry/new/:id" render={(props) => <NewEntry {...props} categories={categories} addEntryToJournal={addEntryToJournal}/> }/>
            {/* Since can't match URL just have component */}
            <Route component={NotFound}/>
          </Routes>  
        </Router>  
    </div>
  )
}

export default App
