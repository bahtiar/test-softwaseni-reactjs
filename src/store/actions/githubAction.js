import {GET_GITHUB, GITHUB_ERROR} from '../types'
import axios from 'axios'

export const getGithub = () => async dispatch => {
    
    try{
        const res = await axios.get(`https://api.github.com/users/bahtiar/repos`)
        dispatch( {
            type: GET_GITHUB,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: GITHUB_ERROR,
            payload: console.log(e),
        })
    }

}