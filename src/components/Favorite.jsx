import React from 'react'
//styles 
import styles from './Favorite.module.css'

function Favorite({data}) {
  return (
    <div className={styles.option}>
        <img src={data.image} alt={data.title}/>
        <p>{data.title}</p>
    </div>
  )
}

export default Favorite