import { createSlice } from '@reduxjs/toolkit'

export const userdataSlice = createSlice({
    name: 'userdata',
    initialState: {
        fullname:null,
        email:null,
        phonenumber:null,
        accountbalance:0
    },
    reducers: {
        setFullName: (state, action) => {
            state.fullname=action.payload
        },
        setEmail: (state, action) => {
            state.email=action.payload
        },        
        setPhonenumber: (state, action) => {
            state.phonenumber=action.payload
        },
        setAccountBalance:(state,action)=>{
            state.accountbalance=action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { setFullName,setEmail,setPhonenumber,setAccountBalance} = userdataSlice.actions

export default userdataSlice.reducer