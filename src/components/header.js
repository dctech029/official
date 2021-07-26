import React from 'react';
const Header = (props)=> {
    const {openAboutModal} = props;
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={process.env.NODE_ENV == 'development' ? "/img/dc_logo.webp" : "img/dc_logo.webp"} alt="" width="30" height="30" className="d-inline-block align-text-top me-1"/>
                    DC Tech
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Features</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Pricing</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={openAboutModal}>About</a>
                        </li>
                    </ul>
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