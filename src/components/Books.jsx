import React, { useState } from 'react'
//constants
import { books } from '../constants/mockData'
//components
import BookCard from './BookCard'
//icons
import { IoSearchSharp } from "react-icons/io5";
import Favorite from './Favorite';
//styles
import styles from './Books.module.css'

function Books() {
  const [favorites, setFavorites] = useState([])
/*     const [serch,setSearch] = useState("")

    const searchHandler = () => {
      const newTitle = data.title.toUpperCase()
      books.filter(book => newTitle.includes(serch.toUpperCase()))
    }
    const changeHandler = (event) => {
      setSearch(event.target.value)
    } */
    const favoritesHandleList = (book,status) => {
      if(status){
        const newFavoritesList = favorites.filter(item => item.id !== book.id)
        setFavorites(newFavoritesList)
      }
      else{
        setFavorites(favorites => [...favorites,book])
      }
    }
  return (
    <div className={styles.container}>
       <div className={styles.card}>
     {/*    <div>
          <input type='text' placeholder='search title' value={serch} onChange={changeHandler}/>
          <button onClick={searchHandler}><IoSearchSharp /></button>
        </div> */}
         <div>
            {books.map((book) => (<BookCard key={book.id} data={book} favoritesHandleList={favoritesHandleList}/>))} 
          </div>
      </div>
      <div >
        {!!favorites.length && <div className={styles.favorites}>
                        <h4>Favorites</h4>
                        {favorites.map(item => <Favorite data={item} key={item.id}/>)}
                      </div>}
      </div>
    </div>
  )
}

export default Books