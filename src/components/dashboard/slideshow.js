import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
const Slideshow = ()=> {
    return (
        <Carousel infiniteLoop dynamicHeight autoPlay>
            <div className="h-100">
                <img className="carouselImage" loading="lazy" alt="" src={process.env.NODE_ENV == 'development' ? "/img/first_image.jpeg" : "img/first_image.jpeg"} />
                <div className="textWrapper">
                    <h1 className="font-weight-bold valign">DCTech</h1>
                    <p className="font-weight-bold valign">Place that you've dreamed of</p>
                </div>
            </div>
            <div className="h-100">
                <img className="carouselImage" loading="lazy" alt="" src={process.env.NODE_ENV == 'development' ? "/img/second_image.webp" : "img/second_image.webp"}/>
                <div className="textWrapper">
                <h1 className="font-weight-bold valign">Branded Items</h1>
                <p className="font-weight-bold valign">Choose from different brands! </p>
                </div>
            </div>
            <div className="h-100">
                <img className="carouselImage" loading="lazy" alt="" src={process.env.NODE_ENV == 'development' ? "/img/third_image.jpg" : "img/third_image.jpg"} />
                <div className="textWrapper">
                <h1 className="font-weight-bold valign">Cheap but Quality</h1>
                <p className="font-weight-bold valign">Does not compromise quality over price</p>
                </div>
            </div>
        </Carousel>
        // <div id="carouselExampleIndicators" class="carousel slide " data-ride="carousel">
        //     <ol class="carousel-indicators">
        //         <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        //         <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        //         <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        //     </ol>
        //     <div class="carousel-inner  shadow-lg mb-5 bg-white rounded">
        //         <div class="carousel-item active">
        //             <img class="d-block" src='https://firebasestorage.googleapis.com/v0/b/dctech-official.appspot.com/o/first_image.jpeg?alt=media&token=12d65364-c9eb-4f17-9c24-7bd43336fd33' alt="First slide"/>
        //             <div class=" myCaption d-md-block textWrapper">
        //                 <h2 className="font-weight-bold">DCTech</h2>
        //                 <p className="font-weight-bold">Place that you've dreamed of</p>
        //             </div>
        //         </div>
        //         <div class="carousel-item">
        //             <img class="d-block" src="https://firebasestorage.googleapis.com/v0/b/dctech-official.appspot.com/o/second_image.webp?alt=media&token=6cf7743d-d689-47fc-87eb-72374f93925b" alt="Second slide"/>
        //             <div class="carousel-caption d-md-block textWrapper" >
        //                 <h2 className="font-weight-bold">Branded Items</h2>
        //                 <p className="font-weight-bold">Choose from different brands! </p>
        //             </div>
        //         </div>
        //         <div class="carousel-item">
        //             <img class="d-block" src="https://firebasestorage.googleapis.com/v0/b/dctech-official.appspot.com/o/third_image.jpg?alt=media&token=cb40193c-c487-45cd-94a4-8b45fcbe1925" alt="Third slide"/>
        //             <div class="carousel-caption d-md-block textWrapper">
        //                 <h2 className="font-weight-bold">Cheap but Quality</h2>
        //                 <p className="font-weight-bold">Does not compromise quality over price</p>
        //             </div>
        //         </div>
        //     </div>
        //     <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        //         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        //         <span class="sr-only">Previous</span>
        //     </a>
        //     <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        //         <span class="carousel-control-next-icon" aria-hidden="true"></span>
        //         <span class="sr-only">Next</span>
        //     </a>
        // </div>
    )
}
export default Slideshow;