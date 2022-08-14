import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDetail } from '../../api'
import PubHeader from '../../components/PubHeader'
import Swiper from '../../components/Swiper'
import BottomBuyButton from '../../components/BottomBuyButton'
import './style.less'
export default function Details() {

  const params = useParams()
  const [data, setData] = useState({})
  const { id } = params

  useEffect(() => {
    getDetail({ params: id }).then(res => {
      if (res.code === 200) {
        setData(res.data)
      }
    })
  }, [])

  const { imgs, title, price, houseType, info } = data
  return (
    <>
      <PubHeader title='详情页' />
      {
        imgs ?
          <>
            <Swiper imgs={imgs} />
            <div className="detail-info">
              <h3>{title}</h3>
              <div className="box">
                <ul>
                  <li>
                    <span>{price}</span>
                    <p>租金</p>
                  </li>
                  <li>
                    <span>{info.type}</span>
                    <p>房屋类型</p>
                  </li>
                  <li>
                    <span>{houseType}</span>
                    <p>面积</p>
                  </li>
                </ul>
              </div>
              <div className="info">
                <div className="info-list">
                  <p>类型:{info.type}</p>
                  <p>朝向:{info.orientation}</p>
                </div>
                <div className="info-list">
                  <p>楼层:{info.level}</p>
                  <p>装修:{info.style}</p>
                </div>
                <div className="info-list">
                  <p>年代:{info.years}</p>
                </div>
              </div>
            </div>
            <BottomBuyButton/>
          </>

          : <span>Loading</span>
      }

    </>


  )
}
