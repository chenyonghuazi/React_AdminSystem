import React from 'react'
import './style.less'

export default function BottomBuyButton() {
  return (
    <div className='buy-store-container clear-fix'>
        <div className="item-container float-left">
            <button className="selected">已收藏</button>
        </div>
        <div className="item-container float-right">
            <button className="selected">购买</button>
        </div>
    </div>
  )
}
