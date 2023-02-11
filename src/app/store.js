import { configureStore, combineReducers } from '@reduxjs/toolkit'
import barcodeReducer from '../features/barcode'
import userdataReducer from '../features/userdata'


import { persistReducer,persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const persistConfig={
  key:'persist-store',
  storage
}

const reducer=combineReducers({
    barcode:barcodeReducer,
    userdata:userdataReducer
})

const persistedReducer=persistReducer(persistConfig,reducer)

const store= configureStore({
reducer: persistedReducer
})


export default store

// export default configureStore({
//   reducer: {
//     barcode:barcodeReducer,
//     token:tokenReducer,
//     userdata:userdataReducer
//   }
// })