import React from 'react';
const Header = (props)=> {
    const {openAboutModal} = props;
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="img/dc_logo.webp" alt="" width="30" height="30" className="d-inline-block align-text-top me-1"/>
                    DC Tech
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Pricing</a>
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