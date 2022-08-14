import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { change_city } from '../../redux/action' //引入redux
import { useSelector, useDispatch } from 'react-redux' //引入redux

import { List } from 'antd-mobile' //antd-mobile组件库
import PublicHeader from '../../components/PubHeader' //自定义组件
import './style.less'

import { getAllCities } from '../../api'

export default function City() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [cityArr] = useState(['蒙德', '璃月', '稻妻', '丹枫', '须弥'])
  const [allCities, setAllCities] = useState([])

  const city = useSelector(state => state.city.cityName)

  //生命周期
  useEffect(() => {
    //获取所有城市数据
    getAllCities().then(res => {
      console.log(res)
      setAllCities(res.data)
    }).catch(err=>{
      console.log(err)
    })
  }, [])

  //处理城市选项卡点击事件
  function changeCity(cityName) {
    dispatch(change_city(cityName))
    navigate('/')
  }

  return (
    <>
      <PublicHeader />

      {/* 标题 */}
      <div className='current-city'>
        <h2>当前城市：{city}</h2>
      </div>

      {/* 城市选项卡 */}
      <div className="city-list-container">
        <h3>热门城市</h3>
        <ul className="clear-fix">
          {cityArr.map((city, index) => {
            return (
              <li key={index} onClick={() => changeCity(city)}>
                <span>{city}</span>
              </li>
            )
          })}
        </ul>
      </div>

      {/* 列表 */}
      <List header='所有城市'>
        {
          allCities.map((cityobj,index) => {
            return (
              <List.Item key={index} onClick={()=> changeCity(cityobj)}>{cityobj}</List.Item>
            )
          })
        }


      </List>
    </>

  )
}
