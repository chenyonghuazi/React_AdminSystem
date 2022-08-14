import {CHANGE_CITY,SET_LOGIN,OUT_LOGIN} from './constant'

export function change_city(cityName){
    return {
        type:CHANGE_CITY,
        value:cityName
    }
}

export function setLogin(user){
    return{
        type:SET_LOGIN,
        user
    }
}

export function outLogin(){
    return{
        type:OUT_LOGIN,
        
    }
}