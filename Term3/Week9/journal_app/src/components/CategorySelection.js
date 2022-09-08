import React from "react";
import {Link} from "react-router-dom"


const CategorySelection = (categories) => {
    return(
        <div>
        <h1> Category Selection </h1>
        {categories.map((item,index) => {
            // Link to new path for each of the items that's been mapped through
            return <li key={item}><Link to={`/entry/new/${index}`}>{item}</Link></li>
        })}
    </div>
    )
}
 
export default CategorySelection