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

          <a
             class="btn btn-primary btn-floating m-1 text-center"
             style={{backgroundColor:"#55acee"}}
             href="#!"
             role="button"
             ><i class="fab fa-twitter"></i
            ></a>
          <a
             class="btn btn-primary btn-floating m-1 text-center"
             style={{backgroundColor:"#dd4b39"}}
             href="#!"
             role="button"
             ><i class="fab fa-google"></i
            ></a>
          <a
             class="btn btn-primary btn-floating m-1 text-center"
             style={{backgroundColor:"#ac2bac"}}
             href="#!"
             role="button"
             ><i class="fab fa-instagram"></i
            ></a>
          <a
             class="btn btn-primary btn-floating m-1 text-center"
             style={{backgroundColor:"#0082ca"}}
             href="#!"
             role="button"
             ><i class="fab fa-linkedin-in"></i
            ></a>
          <a
             class="btn btn-primary btn-floating m-1"
             style={{backgroundColor:"#333333"}}
             href="#!"
             role="button"
             ><i class="fab fa-github"></i
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