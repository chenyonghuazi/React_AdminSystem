import React from 'react'
import './style.less'
import { NavLink } from 'react-router-dom'
import {ContentOutline} from 'antd-mobile-icons'

export default function BottomNav() {
    return (
        <div className='nav-footer'>
            <ul>
                <li>
                    <NavLink to='/'>
                        <ContentOutline />
                        首页
                    </NavLink>

                </li>
                <li>
                    <NavLink to='/life'>
                        <ContentOutline />
                        生活
                    </NavLink>

                </li>
                <li>
                    <NavLink to='/shop'>
                        <ContentOutline />
                        商品
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/user'>
                        <ContentOutline />
                        个人
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}
