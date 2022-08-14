import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getSearchResult } from '../../../api'
//import {Link} from 'react-router-dom'
import './style.less'
import PubSub from 'pubsub-js'

export default function SearchList() {
    const { inputvalue } = useParams()
    
    const [searchResult, setResult] = useState([])
    

    useEffect(() => {
        //根据搜索内容进行
        http()
     
    }, [inputvalue])

    useEffect(()=>{
        //订阅
        const token = PubSub.subscribe('load more', (_, data) => {
            console.log(data)
            setResult(data)
        }) 

        

        return ()=>{ //清除订阅
            PubSub.unsubscribe(token)
            
        }
    })

    function http() {
        console.log('new searching!')
        getSearchResult({ params: { page: 1 } }).then(res => {
            if (res.code === 200) {
                setResult(res.data)
            }
        })
    }

    return (
        searchResult.map((obj,index) => {
            
                const { id,img, title, houseType, price, rentType } = obj
                return (
                    <Link to={`/details/${id}`} key={index}>
                        <div className="list-item" >
                            <img src={img} alt="" />
                            <div className="mask">
                                <div className="left">
                                    <p>{title}</p>
                                    <p>{houseType}</p>
                                </div>
                                <div className="right">
                                    <div className="btn">
                                        {rentType}
                                    </div>
                                    <p dangerouslySetInnerHTML={{ __html: price }}></p>
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            
        })


    )
}


