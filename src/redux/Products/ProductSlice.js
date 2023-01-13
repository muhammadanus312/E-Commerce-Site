import { createSlice } from '@reduxjs/toolkit'
const initialState={
    Products:[]
    
}
const ProductSlice=createSlice({
    name: 'Products',
    initialState,
    reducers:{
        AddProducts:(state,{payload})=>{
            state.Products=payload
        },
        
    }
})

export const {AddProducts}=ProductSlice.actions

export default ProductSlice.reducer;