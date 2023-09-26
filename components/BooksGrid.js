import React from 'react'
import Book from './Book'

const BooksGrid = ({books}) => {
  return (
    <div className='row'>
        {books.map((book,idx)=>{return <Book book={book} key={idx}/>})}
    </div>
  )
}

export default BooksGrid