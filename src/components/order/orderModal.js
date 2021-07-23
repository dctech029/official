import React from 'react';
import {Modal,Button} from 'react-bootstrap'
const OrderModal = (props)=>{
    const {isShow,closeModal} = props; 
    return (
        <Modal
        show={isShow} onHide={closeModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Order this item?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Name</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="ex. Juan Dela Cruz"/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword2">Complete Address</label>
                    <input type="text" class="form-control" id="exampleInputPassword2" placeholder="ex. 125 Di Mahanap St."/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword3">Contact No.</label>
                    <input type="text" class="form-control" id="exampleInputPassword3" placeholder="ex. 0999....."/>
                </div>
                <br></br>
                <small>By placing order, DCTech will receive an email for your order details.</small>
                <br></br>
                <small>Note: The DCTech's owner is so handsome and smart. Unfortunately only LOVE is his weakness.</small>
            </form>
        </Modal.Body>
        <Modal.Footer>
            <button type="submit" class="btn btn-primary">Place Order</button>
        </Modal.Footer>
        </Modal>
    )
}
export default OrderModal;