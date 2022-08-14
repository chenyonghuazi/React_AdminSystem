import React from 'react'
import { Swiper, Toast } from 'antd-mobile'
import './style.less'
import bannerImg1 from '../../assets/images/baner1.png'
import bannerImg2 from '../../assets/images/baner2.jpg'
import bannerImg3 from '../../assets/images/baner3.jpg'

export default function SwiperObj(props) {

    const bannerIamges = props.imgs ? props.imgs: [bannerImg1, bannerImg2, bannerImg3]

    const items = bannerIamges.map((bannerObj,index) => {
            return (
                <Swiper.Item key={index}>
                    <div
                        className='swiperItem'
                        onClick={() => {
                            Toast.show(`你点击了卡片`)
                        }}
                    >
                        <img src={bannerObj} alt="" />
                    </div>
                </Swiper.Item>
            )
        })





    return (

        <Swiper autoplay loop className='swiperContainer'>{items}</Swiper>

    )
}
