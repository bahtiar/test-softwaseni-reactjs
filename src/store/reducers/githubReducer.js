import {GET_GITHUB} from '../types'

const initialState = {
    github:[],
    loading:true
}

export default function(state = initialState, action){

    switch(action.type){

        case GET_GITHUB:
        return {
            ...state,
            github:action.payload,
            loading:false

        }
        default: return state
    }

}