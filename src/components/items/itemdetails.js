import React from 'react';
import { Modal } from 'react-bootstrap';
const ItemDetails = (props) => {
    const {isShow,closeModal,item} = props;
    return (
        <Modal show={isShow} onHide={closeModal} size="lg">
            <Modal.Header>
                {item.product_name }
            </Modal.Header>
            <Modal.Body>
            <div id="carouselExampleIndicators" className="carousel slide h-50" data-ride="carousel">
                <ol className="carousel-indicators">
                    {
                        item.product_images.map((_image,index) => {
                            const isActive = index === 0;
                            return (
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className={isActive && "active"}></li>
                            )
                        })
                    }
                </ol>
                <div className="carousel-inner">
                   
                    {
                        item.product_images.map((image,index) => {
                            const isActive = index === 0;
                            const style = isActive ? "carousel-item active" : "carousel-item";
                            return (<div className={style}>
                            <img className="d-block w-100" src={image} alt="First slide"/>
                            </div>)
                        })
                    }
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            <span> Available Colors: 
                <div className="btn-group" role="group" aria-label="Basic example">
                {
                    item.product_colors.map((item,index) => 
                        <button key={index} type="button" className="btn m-1" style={{backgroundColor:item.value}} title={item.title}>-</button>
                    )
                }
                </div>
            </span>
            <hr/>
            <p>Brand : {item.product_brand}</p>
            <hr/>
            Description: 
            <p className="description">{item.product_description}</p>
            <hr/>
            <p>Proccessor: {item.product_cpu}</p>
            <hr/>
            <p>Memory (RAM): {item.product_ram}</p>
            <hr/>
            <p>Storage:{item.hdd}</p>
            <hr/>
            <p>Price: {item.product_price}</p>
            </Modal.Body>
            <Modal.Footer>
                <button className="btn">Place Order</button>
            </Modal.Footer>
        </Modal>
    )
}

export default ItemDetails;