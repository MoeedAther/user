import { configureStore } from '@reduxjs/toolkit'
import barcodeReducer from '../features/barcode'
import tokenReducer from '../features/token'

export default configureStore({
  reducer: {
    barcode:barcodeReducer,
    token:tokenReducer
  }
})