import React,{useEffect, useState, useRef} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import './style.less'


export default function HistoryBox(props) {
    const historyBox = useRef(null);
    const navigate = useNavigate()
    const history = window.localStorage.getItem('searchHistory') ? window.localStorage.getItem('searchHistory')?.split(',') : []
    // eslint-disable-next-line
    const [searchHistory, setSearchHistory] = useState( history)

    useEffect(()=>{
        if(props.show){
            historyBox.current.style.display = 'block'
        }else{
            historyBox.current.style.display = 'none'
        }
    },[props.show])

    

    return (
        <div className='historyBox' ref={historyBox}>
            <ul>
            {
                searchHistory.map((obj,index)=>{
                    return (
                        <li key={index} onMouseUp={()=> {
                            props.blur()
                            navigate('/search/' + obj)
                        }}
                            onMouseDown={(e)=>e.preventDefault()}
                        >
                            {/* <Link to={`/search/${obj}`}>{obj}</Link> */}
                            {obj}
                        </li>
                    )
                })
            }
            </ul>
        </div>
    )
}
