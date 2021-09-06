import React from 'react'

const Slideshow = ()=> {
    return (
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" style={{height:"80vh"}} src='https://firebasestorage.googleapis.com/v0/b/dctech-official.appspot.com/o/first_image.jpeg?alt=media&token=12d65364-c9eb-4f17-9c24-7bd43336fd33' alt="First slide"/>
                    <div class="carousel-caption d-none d-md-block textWrapper">
                        <h5 className="font-weight-bold">DCTech</h5>
                        <p className="font-weight-bold">Place that you've dreamed of</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" style={{height:"80vh"}} src="https://firebasestorage.googleapis.com/v0/b/dctech-official.appspot.com/o/second_image.webp?alt=media&token=6cf7743d-d689-47fc-87eb-72374f93925b" alt="Second slide"/>
                    <div class="carousel-caption d-none d-md-block textWrapper" >
                        <h5 className="font-weight-bold">Branded Items</h5>
                        <p className="font-weight-bold">Choose from different brands! </p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" style={{height:"80vh"}} src="https://firebasestorage.googleapis.com/v0/b/dctech-official.appspot.com/o/third_image.jpg?alt=media&token=cb40193c-c487-45cd-94a4-8b45fcbe1925" alt="Third slide"/>
                    <div class="carousel-caption d-none d-md-block textWrapper">
                        <h5 className="font-weight-bold">Cheap but Quality</h5>
                        <p className="font-weight-bold">Does not compromise quality over price</p>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    )
}
export default Slideshow;