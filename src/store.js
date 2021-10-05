import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { assetListReducer, assetDetailsReducer } from './reducers/assetReducers';
import { galleryListReducer, galleryDetailsReducer } from './reducers/galleryReducers';
import { userLoginReducer, userRegisterReducer } from './reducers/userReducers';

const reducer = combineReducers({
    assetList: assetListReducer,
    assetDetails: assetDetailsReducer,
    galleryList: galleryListReducer,
    galleryDetails: galleryDetailsReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store