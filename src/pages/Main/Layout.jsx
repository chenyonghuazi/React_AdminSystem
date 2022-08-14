import React from 'react'
// import { Routes, Route } from 'react-router-dom'
import {Outlet,useLocation} from 'react-router-dom'

//component
import BottomNav from '../../components/BottomNav'

//pages
import Home from './Home'
// import LifeService from './LifeService'
// import Shop from './Shop'
// import User from './User'

export default function Layout(props) {
  const {pathname} = useLocation()
  // console.log(location)
  return (
    <>
      {/* 渲染Home主页面还是别的页面 */}
      {pathname === "/" ?<Home/> : <Outlet/>}
      
      <BottomNav />
    </>
  )
}
