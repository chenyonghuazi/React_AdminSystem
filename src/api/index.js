import request from './request'

export const getHot1 = (params)=>{
    return request.get('/hot1',{params})
}

export const getHot2 = (params)=>{
    return request.get('/hot2',{params})
}

export const getAllCities = ()=>{
    return request.get('/cities')
}

export const getSearchResult = (params)=>{
    
    return request.get('/searchresult',params)
}

export const getDetail = (params)=>{
    
    return request.get('/details',{params})
}

export const tryToLogin = (params)=>{
    return request.post('/login',params)
}