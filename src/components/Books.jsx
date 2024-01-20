import React, { useState } from 'react'
//constants
import { books as bookData } from '../constants/mockData'
//components
import BookCard from './BookCard'
import SearchBox from './SearchBox';
//icons
import Favorite from './Favorite';
//styles
import styles from './Books.module.css'


function Books() {
  const [favorites, setFavorites] = useState([])
  const [serch, setSearch] = useState([])
  const [books, setBooks] = useState(bookData)



    const favoritesHandleList = (book,status) => {
      if(status){
        const newFavoritesList = favorites.filter(item => item.id !== book.id)
        setFavorites(newFavoritesList)
      }
      else{
        setFavorites(favorites => [...favorites,book])
      }
    }

    const searchHandler = () => {
     if(serch){
      const newBooks = bookData.filter(book => book.title.toLowerCase().includes(serch))
      setBooks(newBooks)
     }
     else{
      setBooks(bookData)
     }
    }

  return (
    <>
       <SearchBox serch={serch} setSearch={setSearch} searchHandler={searchHandler}/>
      <div className={styles.container}>
       <div className={styles.card}>
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
    
    </>
  )
}

export default Books