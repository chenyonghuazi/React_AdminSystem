import React from 'react'

import SearchList from './SearchList'
import SearchHeader from './SearchHeader'
import LoadMore from '../../components/LoadMore'

export default function Search() {
  
  
  

  function callbackFromLoadMore(data){
    
    console.log([...data])
    
  }
  
  return (
    <div>
      <SearchHeader/>
      
      <SearchList />
        
      <LoadMore callback={callbackFromLoadMore}/>
    </div>
  )
}
