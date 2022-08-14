import React from 'react'
import './style.less'
import { DownOutline, SearchOutline, ScanCodeOutline } from 'antd-mobile-icons'
import { Space } from 'antd-mobile'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux' //引入redux
import SearchInput from '../SearchInput'

export default function HeaderNav() {

    const {cityName} = useSelector(state => state.city)

    return (
        <div id='home-header'>
            <div className='home-header-left float-left'>
                <Link to="/city">
                    <span>{cityName}</span>
                    <DownOutline />
                </Link>

                {/* <i className="iconfont icon-arrow-right"></i> */}
            </div>
            <div className='home-header-right float-right'>
                <Space wrap align='center'>
                    <ScanCodeOutline fontSize={24} />
                </Space>
            </div>
            <div className='home-header-middle'>
                <div className='search-container'>
                    <SearchOutline color='#333' />
                    <SearchInput/>
                </div>
            </div>
        </div>
    )
}
