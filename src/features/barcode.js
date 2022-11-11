import { createSlice} from '@reduxjs/toolkit'

export const barcodeSlice = createSlice({
  name: 'barcode',
  initialState: {
    barcode1: null,
    barcode2: null,
  },
  reducers: {
    setBarcode1: (state, action) => {
      state.barcode1 =action.payload
    },
    setBarcode2: (state, action) => {
      state.barcode2 =action.payload
    },
  }
})

// Action creators are generated for each case reducer function
export const { setBarcode1,setBarcode2 } = barcodeSlice.actions

export default barcodeSlice.reducer