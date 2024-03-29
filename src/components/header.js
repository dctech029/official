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
        // <nav id='myheader' className="navbar navbar-expand-custom navbar-mainbg">
        //     <a className="navbar-brand navbar-logo" href="#">
        //         <img className="d-inline-block align-top mr-1" src={process.env.NODE_ENV == 'development' ? "/img/dc_logo.webp" : "img/dc_logo.webp"} alt="" width="30" height="30"/>DCTech </a>
        //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //     <i className="fas fa-bars text-white"></i>
        //     </button>
        //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //         <ul className="navbar-nav ml-auto">
        //             <div className="hori-selector"><div className="left"></div><div className="right"></div></div>
        //             <li className="nav-item active font-weight-bold">
        //                 <a className="nav-link" href="javascript:void(0);" onClick={()=> history.push("/dashboard")}><i className="fa fa-tachometer-alt"></i>Dashboard</a>
        //             </li>
        //             <li className="nav-item font-weight-bold">
        //                 <a className="nav-link" href="javascript:void(0);" onClick={()=> history.push("/products")}><i className="fa fa-address-book"></i>Products</a>
        //             </li>
        //             <li className="nav-item font-weight-bold">
        //                 <a className="nav-link" href="javascript:void(0);" onClick={()=> history.push("/gallery")}><i className="fa fa-clone"></i>Gallery</a>
        //             </li>
        //             <li className="nav-item font-weight-bold">
        //                 <a className="nav-link" href="javascript:void(0);" onClick={()=> history.push("/blogs")}><i className="fa fa-calendar-alt"></i>Blog</a>
        //             </li>
        //             <li className="nav-item font-weight-bold">
        //                 <a className="nav-link" href="javascript:void(0);" onClick={()=> history.push("/contactus")}><i className="fa fa-calendar-alt"></i>Contact Us</a>
        //             </li>
        //             <li className="nav-item font-weight-bold">
        //                 <a className="nav-link" href="javascript:void(0);" onClick={()=> history.push('/about')}><i className="fa fa-chart-bar"></i>About</a>
        //             </li>
        //         </ul>
        //     </div>
        // </nav>


<nav class="navbar navbar-expand-lg navbar-scroll shadow-0" style={{backgroundColor:"#5161ce",color: "white"}}>
  <div class="container">
  <a className="navbar-brand navbar-logo align-items-center d-flex justify-content-center" href="#">
        <img className="d-inline-block align-top mr-3 text-center" style={{
          borderRadius: "50%"
        }} src={process.env.NODE_ENV == 'development' ? "/img/dc_logo.webp" : "img/dc_logo.webp"} alt="" width="50" height="50"/><span style={{fontSize:30}}>DCTech</span> </a>
    {/* <a class="navbar-brand" href="#">DC Technologies</a> */}
    <button class="navbar-toggler ps-0" type="button" data-toggle="collapse" data-target="#navbarExample01"
      aria-controls="navbarExample01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="d-flex justify-content-start align-items-center">
        <i class="fas fa-bars"></i>
      </span>
    </button>
    <div class="justify-content-end collapse navbar-collapse" id="navbarExample01">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item active">
            <a className="nav-link pr-3 pl-3 border-right" href="javascript:void(0);" onClick={()=> history.push("/dashboard")}><i className="fa fa-tachometer-alt"></i>Dashboard</a>
        </li>
        <li class="nav-item">
        <a className="nav-link pr-3 pl-3 border-right" href="javascript:void(0);" onClick={()=> history.push("/products")}><i className="fa fa-address-book"></i>Products</a>
        </li>
        <li class="nav-item">
        <a className="nav-link pr-3 pl-3 border-right" href="javascript:void(0);" onClick={()=> history.push("/gallery")}><i className="fa fa-clone"></i>Gallery</a>
        </li>
        <li class="nav-item">
        <a className="nav-link pr-3 pl-3 border-right" href="javascript:void(0);" onClick={()=> history.push("/blogs")}><i className="fa fa-calendar-alt"></i>Blog</a>
        </li>
        <li class="nav-item">
            <a className="nav-link pl-3 pr-3 border-right" href="javascript:void(0);" onClick={()=> history.push("/contactus")}><i className="fa fa-calendar-alt"></i>Contact Us</a>
        </li>
        <li class="nav-item">
        <a className="nav-link pl-3" href="javascript:void(0);" onClick={()=> history.push('/about')}><i className="fa fa-chart-bar"></i>About</a>
        </li>
      </ul>

      {/* <ul class="navbar-nav flex-row">
        <li class="nav-item">
          <a class="nav-link pe-3" href="#!">
            <i class="fab fa-youtube"></i>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link px-3" href="#!">
            <i class="fab fa-facebook-f"></i>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link ps-3" href="#!">
            <i class="fab fa-instagram"></i>
          </a>
        </li>
      </ul> */}
    </div>
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