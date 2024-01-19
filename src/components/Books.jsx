import React, { useState } from 'react'
//constants
import { books } from '../constants/mockData'
//components
import BookCard from './BookCard'
//icons
import { IoSearchSharp } from "react-icons/io5";

function Books() {
/*     const [serch,setSearch] = useState("")

    const searchHandler = () => {
      const newTitle = data.title.toUpperCase()
      books.filter(book => newTitle.includes(serch.toUpperCase()))
    }
    const changeHandler = (event) => {
      setSearch(event.target.value)
    } */

  return (
    <>
       <div>
     {/*    <div>
          <input type='text' placeholder='search title' value={serch} onChange={changeHandler}/>
          <button onClick={searchHandler}><IoSearchSharp /></button>
        </div> */}
         <div>
            {books.map((book) => (<BookCard key={book.id} data={book}/>))} 
          </div>
      </div>
      <div>

      </div>
    </>
  )
}

export default Books