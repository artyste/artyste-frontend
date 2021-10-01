import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { assetListReducer, assetDetailsReducer } from './reducers/assetReducers';
import { galleryListReducer } from './reducers/galleryReducers';

export const reducer = combineReducers({ 
    assetList: assetListReducer,
    assetDetails: assetDetailsReducer,

    galleryList: galleryListReducer,
    //galleryDetails: galleryDetailsReducer,
})

const initialState = {}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store
