import React from 'react';
import { useHistory } from 'react-router';
const Header = ()=> {
    const history = useHistory();
    return (
        // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        //         <a className="navbar-brand" href="#">
        //             <img className="d-inline-block align-top mr-1" src={process.env.NODE_ENV == 'development' ? "/img/dc_logo.webp" : "img/dc_logo.webp"} alt="" width="30" height="30"/>

        //         </a>
        //         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse" id="navbarNavDropdown">
        //             <ul className="navbar-nav">
        //                 <li className="nav-item active">
        //                     <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link" href="/gallery">Gallery</a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link" href="/contactus">Contact Us</a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link" onClick={openAboutModal}>About</a>
        //                 </li>
        //             </ul>
        //         </div>
        // </nav>
        <nav class="navbar navbar-expand-custom navbar-mainbg">
            <a class="navbar-brand navbar-logo" href="#"><img className="d-inline-block align-top mr-1" src={process.env.NODE_ENV == 'development' ? "/img/dc_logo.webp" : "img/dc_logo.webp"} alt="" width="30" height="30"/> DCTech </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fas fa-bars text-white"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <div class="hori-selector"><div class="left"></div><div class="right"></div></div>
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0);" onClick={()=> history.push("/dashboard")}><i class="fa fa-tachometer-alt"></i>Dashboard</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="javascript:void(0);" onClick={()=> history.push("/products")}><i class="fa fa-address-book"></i>Products</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0);" onClick={()=> history.push("/gallery")}><i class="fa fa-clone"></i>Gallery</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0);"><i class="fa fa-calendar-alt"></i>Contact Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0);" onClick={()=> history.push('/about')}><i class="fa fa-chart-bar"></i>About</a>
                    </li>
                </ul>
            </div>
        </nav>
        // <nav className="navbar navbar-dark bg-dark" style={{backgroundColor: "#e3f2fd"}}>
        //     <a className="navbar-brand" href="#">
        //         <img src="/img/dc_logo.webp" width="40" height="40" className="d-inline-block align-top" alt=""/>
        //        DC Tech
        //     </a>
        // </nav>
    )
}

export default Header;