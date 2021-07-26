import React from 'react';
import Laptops from './laptops';
import './index.css';
const Items = (props) => {
    const {openModal} = props;
    return (<Laptops openModal={openModal}/>)
}
export default Items;