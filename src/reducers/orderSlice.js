import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    email:'',
    item_id:'',
    name:'',
    address:'',
    contact_no:''
}
export const itemsSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
      setOrderDetail: (state,action) => {
          return {
              ...state,
              [action.payload.name] : action.payload.value
          }
      },
      /**
       * Add actions here
       */
    },
})