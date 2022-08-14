import React from 'react'
import HeaderNav from '../../../components/HeaderNav'

//引入组件
import Swiper from '../../../components/Swiper'
import HomeHotList from './HomeHotList'

export default function Home() {
  return (
    <div>
      <HeaderNav/>
      <Swiper/>
      <HomeHotList/>
    </div>
  )
}
