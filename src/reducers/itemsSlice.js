import { createSlice } from '@reduxjs/toolkit'

const initialState = [{
    product_name: '',
    product_brand: '',
    product_colors: [],
    product_cpu: '',
    product_description: '',
    product_hdd: '',
    product_images: [],
    product_price: 0,
    product_ram: 0,
    is_available: false
}]

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    retrieveItems: (_state,action) => {
        return action.payload
    },
    /**
     * Add actions here
     */
  },
})

// Action creators are generated for each case reducer function
export const { retrieveItems } = itemsSlice.actions

export default itemsSlice.reducer