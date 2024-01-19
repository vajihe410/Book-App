import React, { useState } from 'react'
//icons 
import { FaHeart } from "react-icons/fa";
//styles
import styles from './BookCard.module.css'

function BookCard({data}) {
  const [like , setLike] = useState(false)

  const likeHandler = () => {
    setLike(like => !like)
  }

  return (
    <div className={styles.bookCard}>
        <img src={`../assets/${data.image}`} alt={data.title}/>
        <div className={styles.info}>
            <h3>{data.title}</h3>
            <h4>{data.author}</h4>
            <div className={styles.details}>
                <span>{data.language}</span>
                <span>{data.pages}page</span>
            </div>
        </div>
        <button onClick={likeHandler}><FaHeart className={like ? styles.like : styles.dislike}/></button>
    </div> 
  )
}

export default BookCard