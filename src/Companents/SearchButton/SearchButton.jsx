import React, { useRef } from 'react'
import './SearchButton.css'

//ikonlar
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const SearchButton = () => {
    const inputBoxRef = useRef()

    const SearchButon = (e) => {
        if (e.target.classList.contains('search__icon')) {
            inputBoxRef.current.classList.add('search__ac')
        } else {
            inputBoxRef.current.classList.remove('search__ac')
        }
    }
    return (
        <>
            <div className='input-container' ref={inputBoxRef}>
                <input type="text"/>
                <button className='search__icon' onClick={SearchButon}>
                    <AiOutlineSearch className='search-icon-general'  />
                </button>
                <button className='close__icon' onClick={SearchButon}>
                    <AiOutlineClose />
                </button>
            </div>
        </>
    )
}

export default SearchButton