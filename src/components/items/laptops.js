import React from 'react';
import laptopList from '../../storage/items.json'
const Laptops = () => {
    const ss = laptopList;
    const loadLaptops = ()=> {
        return ss.map(item => (
            <div class="card" style={{width: "18rem"}}>
                <img class="card-img-top" src={item.image} alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title">{item.title}</h5>
                    <p class="card-text">{item.specs}</p>
                    <a href="#" class="btn btn-primary">Buy now for {item.price}</a>
                </div>
            </div>
        ))
    }
    return (
        <div>
            Hello
            {
                loadLaptops()
            }
        </div>
    )
}

export default Laptops;