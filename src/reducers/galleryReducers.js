import { 
    GALLERY_LIST_REQUEST,
    GALLERY_LIST_SUCCESS,
    GALLERY_LIST_FAIL,

    GALLERY_DETAILS_REQUEST,
    GALLERY_DETAILS_SUCCESS,
    GALLERY_DETAILS_FAIL,
 } from '../constants/galleryConstants'; 

export const galleryListReducer = (state = { galleries: [] }, action) => {
    switch(action.type) {
        case GALLERY_LIST_REQUEST:
            return { loading: true, galleries:[] }

        case GALLERY_LIST_SUCCESS:
            return { loading: false, galleries: action.payload }

        case GALLERY_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const galleryDetailsReducer = (state = { gallery: {} }, action) => {
    switch(action.type){
        case GALLERY_DETAILS_REQUEST:
            return { loading: true, ...state }

        case GALLERY_DETAILS_SUCCESS:
            return { loading: false, gallery: action.payload }

        case GALLERY_DETAILS_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}
