import React from 'react'
import './style.less'
import { LeftOutline } from 'antd-mobile-icons'
import { useNavigate } from 'react-router-dom'

export default function PubHeader(props) {

    const navigate = useNavigate()

    function handleBack() {
        navigate(-1)
    }
    
    return (
        <div id='common-header'>
            <span className='back-icon' onClick={handleBack}>
                <LeftOutline />
            </span>
            <h1>{props.title? props.title : '城市选择'}</h1>
        </div>
    )
}
