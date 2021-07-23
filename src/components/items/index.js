import React from 'react';
import Laptops from './laptops';
const Items = (props) => {
    const {openModal} = props;
    return (<Laptops openModal={openModal}/>)
}
export default Items;