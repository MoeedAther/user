import { configureStore } from '@reduxjs/toolkit'
import barcodeReducer from '../features/barcode'
import tokenReducer from '../features/token'
import userdataReducer from '../features/userdata'

export default configureStore({
  reducer: {
    barcode:barcodeReducer,
    token:tokenReducer,
    userdata:userdataReducer
  }
})