import { createSlice } from '@reduxjs/toolkit'

export const userdataSlice = createSlice({
    name: 'userdata',
    initialState: {
        fullname:"",
        email:"",
        phonenumber:"",
        accountbalance:0,
        accswitch:"user",
        token:null,
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
        },
        setAccSwitch:(state,action)=>{
            state.accswitch=action.payload
        },
        setToken:(state,action)=>{
            state.token=action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { setFullName,setEmail,setPhonenumber,setAccountBalance,setAccSwitch,setToken} = userdataSlice.actions

export default userdataSlice.reducer