import React from 'react'
import './style.less'
import { LeftOutline,SearchOutline } from 'antd-mobile-icons'
import SearchInput from '../../../components/SearchInput'

export default function SearchHeader() {
    function handleBack(){
        window.history.back()
    }
  return (
    <div id='search-header'>
        <span className="back-icon float-left" onClick={handleBack}>
            <LeftOutline/>
        </span>
        <div className="input-container">
            <SearchOutline color='#333'/>
            <SearchInput/>
        </div>
    </div>
  )
}
