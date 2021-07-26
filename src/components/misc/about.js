import React from 'react';
import {Modal} from 'react-bootstrap'
const About = (props)=> {
    const {isShow,closeModal} = props;
    return (
        <Modal show={isShow} onHide={() => closeModal()}>
            <Modal.Header>
                About
            </Modal.Header>
            <Modal.Body>
                <img src="img/dc_logo.webp" height="80px" width="80px"/>
                <h1>DC Tech</h1>
                <p>DC Tech is an online selling company that offers quality laptop and desktops. The brands that are being offered are NEC, Lenovo and Toshiba.</p>
                <br>
                </br>
                <h3>Programmer</h3>
                <label>Dela Cruz, Kent Vincent</label>
            </Modal.Body>
            <Modal.Footer>
                <button className="btn" onClick={closeModal}>Close</button>
            </Modal.Footer>
        </Modal>
    )
}

export default About;