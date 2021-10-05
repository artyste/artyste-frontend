import axios from 'axios';
import { 
    ASSET_LIST_REQUEST,
    ASSET_LIST_SUCCESS,
    ASSET_LIST_FAIL,

    ASSET_DETAILS_REQUEST,
    ASSET_DETAILS_SUCCESS,
    ASSET_DETAILS_FAIL,
 } from '../constants/assetConstants'; 

export const listAssets = () => async (dispatch) => {
    try{
        dispatch({ type: ASSET_LIST_REQUEST })

        const { data } = await axios.get('https://api.artyste.info/v1/assets-list/')

        dispatch({ 
            type: ASSET_LIST_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({ 
            type: ASSET_LIST_FAIL,
            payload: error.response && error.response.data.detail
              ? error.response.data.detail
              : error.message,
        })
    }

}

export const listAssetDetails = (id) => async (dispatch) => {
    try{
        dispatch({ type: ASSET_DETAILS_REQUEST })

        const { data } = await axios.get(`https://api.artyste.info/v1/asset/${id}`)

        dispatch({ 
            type: ASSET_DETAILS_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({ 
            type: ASSET_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
              ? error.response.data.detail
              : error.message,
        })
    }

}
