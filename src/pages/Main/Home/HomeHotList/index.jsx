
import React, { useEffect, useState } from 'react'
import { getHot1, getHot2 } from '../../../../api'
import {useSelector} from 'react-redux' //引入redux

//引入组件
import HomeHotView from '../HomeHotView'

export default function HomeHotList() {

    const {cityName} = useSelector(state => state.city)

    const [hot1List, setHot1List] = useState([])
    const [hot2List, setHot2List] = useState([])

    useEffect(() => {
        console.log(cityName)
        getHot1({params:cityName}).then((res) =>
            setHot1List(res.data)
        )
    }, [cityName])

    useEffect(() => {
        getHot2({params:cityName}).then((res) =>
            setHot2List(res.data)
        )
    }, [cityName])

    return (
        <>
            {
                hot1List.length > 0 ? <HomeHotView data={hot1List} title={"热门商品"} city={cityName}/> : <div>Loading</div>
            }

            {
                hot2List.length > 0 ? <HomeHotView data={hot2List} title={"热品推荐"} city={cityName}/> : <div>Loading</div>
            }
        </>

    )
}
