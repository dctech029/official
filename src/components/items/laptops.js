import React from 'react';
import laptopList from '../../storage/items.json'
const Laptops = (props) => {
    const {openModal} = props
    const ss = laptopList;
    const loadLaptops = ()=> {
        return ss.map(item => (
                <div className="card mb-3 p-4" disabled={!item.isavailable}  onClick={()=> {
                    openModal()
                }}>
                     <div className="embed-responsive embed-responsive-16by9">
                        <img className="embed-responsive-item card-img-top" src={item.image} alt="Card image cap"/>
                     </div>
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text textLimit">{item.specs}</p>
                    </div>
                    <div className="card-footer">
                        <a href="#" className="btn btn-primary">Buy now for {item.price}</a>
                    </div>
                </div>
        ))
    }
    return (
            <div className="card-deck">
            {
                loadLaptops()
            }
            </div>
    )
}

export default Laptops;