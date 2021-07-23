import React from 'react';
import OrderModal from './orderModal';
const Order = (props)=>{
    const {isShow,closeModal} = props; 
    return (
        <OrderModal isShow={isShow} closeModal={closeModal}/>
    )
}
export default Order;