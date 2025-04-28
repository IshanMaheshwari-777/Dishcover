import React from 'react'
import search from '../../assets/searchlogo.png'
const Searchbar = () => {
  return (
    <div className='searchbar'>
      <input type="text"  placeholder='   Search for Recipes, ingredients or blog posts' className='inputsearch'/>
        <button className='searchbtn'>Search</button>
    </div>
  )
}

export default Searchbar
