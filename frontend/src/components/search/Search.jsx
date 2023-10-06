import React, { useState } from 'react'
import "./search.css"

const Search = () => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (event) => {
    console.log(event.target.value)
    setSearch(event.target.value)
  }

  
  return (
    <div className='services-container'>
        <div className='services-searcher'>
            <input placeholder="Buscá algo..." autoFocus type='text' value={search} onChange={(event) => onChangeSearch(event)}/>
            <button type='button'>Buscar</button>
        </div>
  </div>
  )
}

export default Search