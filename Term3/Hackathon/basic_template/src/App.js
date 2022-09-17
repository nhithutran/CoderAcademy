import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home"
import Page2 from "./components/Page2"
import Page3 from "./components/Page3"
import NoMatch from "./components/NoMatch"

const App = () => {
  return (
    <div>
        <Router>
          <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/page2'>Page 2</Link></li>
              <li><Link to='/page3'>Page 3</Link></li>
            </ul>
          </nav>
        <Routes>  
          <Route exact path='/' element={<Home />} />
          <Route path='/page2' element={<Page2 />} />
          <Route path='/page3' element={<Page3/>} />
          <Route path="*" element={<NoMatch />} />
        </Routes>    
      </Router>
    </div>
  )
}

export default App
