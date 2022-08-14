import React from 'react'
import './style.less'
import { NavLink } from 'react-router-dom'

export default function BottomNav() {
    return (
        <div className='nav-footer'>
            <ul>
                <li>
                    <NavLink to='/'>
                        <i className='iconfont icon-paihangbang'></i>
                        首页
                    </NavLink>

                </li>
                <li>
                    <NavLink to='/life'>
                        <i className='iconfont icon-paihangbang'></i>
                        生活
                    </NavLink>

                </li>
                <li>
                    <NavLink to='/shop'>
                        <i className='iconfont icon-paihangbang'></i>
                        商品
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/user'>
                        <i className='iconfont icon-paihangbang'></i>
                        个人
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}
