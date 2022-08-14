import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import HistoryBox from '../HistoryBox'
//import { LeftOutline } from 'antd-mobile-icons' 

export default function SearchInput() {

    const navigate = useNavigate()
    const searchInput = useRef(null)
    const [inputValue, setInputValue] = useState("")
    const [showHistoryBox,setShow] = useState(false)

    function handleKeyUp(event) {
        if (inputValue.length > 0) {
            if (event.keyCode === 13) {
                addHistory(inputValue)
                navigate('/search/' + inputValue)
            }
        }

    }

    function addHistory(record){
        const history = window.localStorage.getItem('searchHistory')
        if(history){
            if(history?.indexOf(record) === -1){
                window.localStorage.setItem('searchHistory', record + ',' + history)
            }
        }else{
            window.localStorage.setItem('searchHistory',record)
        }
        
    }

    function manualBlur(){
        searchInput.current.blur()
    }

    

    function updateInputValue(event) {
        setInputValue(event.target.value)
    }
    return (
        <>
        <input type="text"
        ref={searchInput}
            className='search-input'
            onKeyUp={(e) => handleKeyUp(e)}
            value={inputValue}
            onChange={updateInputValue} 
            onFocus={()=>setShow(true)}
            onBlur={()=>setShow(false)}
        />
        <HistoryBox show={showHistoryBox} blur={manualBlur}/>
        </>
        
    )
}
