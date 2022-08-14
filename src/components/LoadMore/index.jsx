import PubSub from "pubsub-js"

import React, { useEffect, useRef } from 'react'
import { getSearchResult } from '../../api/index'

export default function LoadMore(props) {
  const loadMoreRef = useRef(null)
  let page = 2;
  let timeOut;
  let loading = false;
  let hasMore = true;
  const viewHeight = document.documentElement.clientHeight

  function scrollEvent() {
    
      // eslint-disable-next-line
      const topOfLoadMore = loadMoreRef.current.getBoundingClientRect().top
      //加载完所有数据 没有更多数据了
      if (!hasMore) {
        // eslint-disable-next-line
        loadMoreRef.current.innerHTML = 'No more Data';
        return;
      }
      //还有数据 如不在加载则进行判断
      if (!loading) {
        if (topOfLoadMore < viewHeight) { //如果scroll到下面看到了loading 在画面 则进行加载
          // eslint-disable-next-line
          loading = true
          //console.log(`加载page:${page}中。。。`)

          timeOut = setTimeout(() => {
            //网络请求
            getSearchResult({ params: { page } }).then(res => {
              if (res.code === 200) {
                PubSub.publish('load more', res.data)
                const total = res.total
                // eslint-disable-next-line
                page = page + 1
                loading = false
                // eslint-disable-next-line
                if (total === res.data.length) hasMore = false;
              }
            })
          }, 1000)
        }
      }
    
  }

  useEffect(() => {
    window.addEventListener('scroll',scrollEvent)

    return ()=>{
      window.removeEventListener('scroll',scrollEvent)
      clearTimeout(timeOut)
    }
  }, [])



  return (
    <div ref={loadMoreRef}>Loading</div>
  )
}
