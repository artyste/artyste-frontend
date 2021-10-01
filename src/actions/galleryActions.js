import axios from 'axios';
import { 
    GALLERY_LIST_REQUEST,
    GALLERY_LIST_SUCCESS,
    GALLERY_LIST_FAIL,

    GALLERY_DETAILS_REQUEST,
    GALLERY_DETAILS_SUCCESS,
    GALLERY_DETAILS_FAIL,
 } from '../constants/galleryConstants'; 

 export const listGalleries = () => async (dispatch) => {
    try{
        dispatch({ type: GALLERY_LIST_REQUEST })

        const { data } = await axios.get('https://api.artyste.info/v1/galleries-list/')

        dispatch({ 
            type: GALLERY_LIST_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({ 
            type: GALLERY_LIST_FAIL,
            payload: error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        })
    }

}

/* export const listGalleryDetails = (id) => async (dispatch) => {
    try{
        dispatch({ type: GALLERY_DETAILS_REQUEST })

        // const { data } = await axios.get('https://api.artyste.info/v1/assets-list/')
        const { data } = await axios.get(`https://api.artyste.info/v1/asset/${id}`)

        dispatch({ 
            type: GALLERY_DETAILS_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({ 
            type: GALLERY_DETAILS_FAIL,
            payload: error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        })
    }

} */
