import React from 'react';
import './index.css';
import Swal from 'sweetalert2';
const ContactUs = ()=> {
    const submitForm = (e)=> {
        e.preventDefault();
        Swal.fire('Thank you!','We have received your message. Thank you for your feedback/concers',"info");
    }
    return (
<div className="row" id="contatti">
<div className="container mt-5" >

    <div className="row" style={{height:"550px"}}>
      <div className="col-md-6 maps" >
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.0781818290798!2d120.98382261484085!3d14.651503289770057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b680723257f7%3A0x359ef390d834722a!2s10th%20Ave%2C%20Caloocan%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1631176621862!5m2!1sen!2sph" frameborder="0" style={{border:"0"}} allowfullscreen></iframe>
      </div>
      <div className="col-md-6">
        <h2 className="text-uppercase mt-3 font-weight-bold text-white">CONTACT US</h2>
        <form onSubmit={submitForm}>
          <div className="row">
            <div className="col-lg-6">
              <div className="form-group">
                <input type="text" className="form-control mt-2" placeholder="Name" required/>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <input type="text" className="form-control mt-2" placeholder="Subject" required/>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <input type="email" className="form-control mt-2" placeholder="Email" required/>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <input type="number" className="form-control mt-2" placeholder="Telephone" required/>
              </div>
            </div>
            <div className="col-12">
              <div className="form-group">
                <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Insert text" rows="3" required></textarea>
              </div>
            </div>
            <div className="col-12">
            </div>
            <div className="col-12">
              <button className="btn btn-light" type="submit">Submit</button>
            </div>
          </div>
        </form>
        <div className="text-white">
        <h2 className="text-uppercase mt-4 font-weight-bold">Where we are </h2>

        <i className="fas fa-phone mt-3"></i> <a href="tel:+">(+63) 9750484804</a><br/>
        <i className="fas fa-globe mt-3"></i> Caloocan City - South, Metro Manila<br/>
        <div className="my-4">
        <a href="https://facebook.com/dctech029"><i className="fab fa-facebook fa-3x pr-4"></i></a>
        </div>
        </div>
      </div>

    </div>
</div>
</div>
    )
}

export default ContactUs;