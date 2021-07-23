import React from 'react';
import laptopList from '../../storage/items.json'
const Laptops = (props) => {
    const {openModal} = props
    const ss = laptopList;
    const loadLaptops = ()=> {
        return ss.map(item => (
            <div className="col-lg-4 col-md-6 col-sm-12 col-12 ps-3 pe-3" onClick={()=> {
                openModal()
            }}>
                <div class="card shadow-lg p-3 mb-5 bg-body rounded">
                    <img class="card-img-top" src={item.image} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">{item.title}</h5>
                        <p class="card-text">{item.specs}</p>
                        <a href="#" class="btn btn-primary">Buy now for {item.price}</a>
                    </div>
                </div>
            </div>
        ))
    }
    return (
        <div className="row">
            <div className="card-group">
            {
                loadLaptops()
            }
            </div>
        </div>
    )
}

export default Laptops;