"use client";
import React from 'react'
import SearchM from './SearchM'
import { useState } from 'react';

const SearchBar = () => {
    const [mskill,setmskill] = useState('');
    const handleSearch = () => {}
    return (
    <form className='searchbar' onSubmit =
    {handleSearch}>
        <div className='searchbar__item'>
            <SearchM
              mskill = {mskill}  
              setmskill = {setmskill}
            />
        </div>


    </form>
  )
}

export default SearchBar