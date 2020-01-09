import axios from 'axios'
import {apiBaseUrl} from '../Utils/Constants'
import { FETCHING_COIN_DATA, FETCHING_COIN_DATA_SUCCESS, FETCHING_COIN_DATA_FAIL } from './../Utils/ActionTypes'

const fetchCoinData = ()=>{

  return dispatch => {
    dispatch({
      type: FETCHING_COIN_DATA
    })
    return axios.get(`${apiBaseUrl}/v1/ticker/?limit=10`).then(res => {
      return dispatch({
        type: FETCHING_COIN_DATA_SUCCESS,
        payload: res.data
      })
    }).catch(err=>{
      return dispatch({
        type: FETCHING_COIN_DATA_FAIL,
        payload: err,
      })
    })
  }

  
}

export default fetchCoinData