import React from 'react';
import {Modal} from 'react-bootstrap';
import firebase from '../../dbconfig/firebaseConnection';
const OrderModal = (props)=>{
    const {isShow,closeModal} = props; 
    const onSubmitForm = async(e)=> {
        e.preventDefault();
        const db = firebase.firestore();
        db.settings({
            timestampsInSnapshots: true
        });
        const userRef = db.collection("orders").add({
            email: "kent@gmail.com",
            name: "Kent Vincent Dela Cruz",
            address: 'Caloocan City',
            contact_no: '09750484804'
        });  
        alert(JSON.stringify(userRef));
    }
    return (
        <Modal
            show={isShow} onHide={closeModal}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            
            <form onSubmit={onSubmitForm}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Order this item?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Name</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="ex. Juan Dela Cruz"/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword2">Complete Address</label>
                    <input type="text" className="form-control" id="exampleInputPassword2" placeholder="ex. 125 Di Mahanap St."/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword3">Contact No.</label>
                    <input type="text" className="form-control" id="exampleInputPassword3" placeholder="ex. 0999....."/>
                </div>
                <br></br>
                <small>By placing order, DCTech will receive an email for your order details.</small>
                <br></br>
                <small>Note: The DCTech's owner is so handsome and smart. Unfortunately only LOVE is his weakness.</small>

            </Modal.Body>
            <Modal.Footer>
                <button type="submit" className="btn btn-primary">Place Order</button>
            </Modal.Footer>
            </form>
        </Modal>
    )
}
export default OrderModal;