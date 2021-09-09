import React from 'react';

const Footer = ()=> {
    return(
<footer class="bg-light text-center text-white">
      <div class="container p-4 pb-0">
        <section class="mb-4">
          <a
             class="btn btn-primary btn-floating m-1 text-center"
             style={{backgroundColor:"#3b5998"}}
             href="https://facebook.com/dctech029"
             role="button"
             ><i class=" fab fa-facebook-f"></i
            ></a>
        </section>
      </div>
      <div class="text-center p-3" style={{backgroundColor:"rgba(0, 0, 0, 0.2)"}}>
        © 2021 Copyright:
        <a class="text-white" href="https://mdbootstrap.com/">DCTech</a>
      </div>
    </footer>
    )
}
export default Footer;