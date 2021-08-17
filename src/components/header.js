import React from 'react';
const Header = (props)=> {
    const {openAboutModal} = props;
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">
                    <img className="d-inline-block align-top mr-1" src={process.env.NODE_ENV == 'development' ? "/img/dc_logo.webp" : "img/dc_logo.webp"} alt="" width="30" height="30"/>

                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
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