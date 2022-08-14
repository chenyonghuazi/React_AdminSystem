import {SET_LOGIN, OUT_LOGIN, userStatus} from '../constant'

export default function login(state=userStatus,action){
    switch(action.type){
        case SET_LOGIN:
            return {
                user:action.user
            }
        case OUT_LOGIN:
            return {
                user:{
                    token:"",
                    nick:""
                }
            }
        default:
            return state
    }
}