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
            <div id="carouselExampleIndicators" class="carousel slide h-50" data-ride="carousel">
                <ol class="carousel-indicators">
                    {
                        item.product_images.map((_image,index) => {
                            const isActive = index === 0;
                            return (
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class={isActive && "active"}></li>
                            )
                        })
                    }
                </ol>
                <div class="carousel-inner">
                   
                    {
                        item.product_images.map((image,index) => {
                            const isActive = index === 0;
                            const style = isActive ? "carousel-item active" : "carousel-item";
                            return (<div className={style}>
                            <img class="d-block w-100" src={image} alt="First slide"/>
                            </div>)
                        })
                    }
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
            <span> Available Colors: 
                <div class="btn-group" role="group" aria-label="Basic example">
                {
                    item.product_colors.map((item,index) => 
                        <button key={index} type="button" class="btn m-1" style={{backgroundColor:item.value}} title={item.title}>-</button>
                    )
                }
                </div>
            </span>
            <p>{item.product_brand}</p>
            <p>{item.product_description}</p>
            <p>{item.product_cpu}</p>
            <p>{item.product_ram}</p>
            <p>{item.hdd}</p>
            
            </Modal.Body>
            <Modal.Footer>
                <button className="btn">Place Order</button>
            </Modal.Footer>
        </Modal>
    )
}

export default ItemDetails;