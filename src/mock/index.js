import Mock from 'mockjs'
import {getHot1,getHot2,getCities,getSearchResult,getDetail,login} from './mockData'

Mock.mock(/\/api\/hot1/,getHot1)

Mock.mock(/\/api\/hot2/,getHot2)

Mock.mock(/\/api\/cities/,getCities)

Mock.mock(/\/api\/searchresult/,getSearchResult)

Mock.mock(/\/api\/details/,getDetail)

Mock.mock(/\/api\/login/,login)