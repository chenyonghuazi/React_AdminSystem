import {initialState, CHANGE_CITY} from '../constant'

export default function reducer(state=initialState, action) {

    switch(action.type){
        case CHANGE_CITY:
            console.log('reducer: change_city',action.value)
            return {...state, cityName:action.value};
        default:
            return state;
    }
}