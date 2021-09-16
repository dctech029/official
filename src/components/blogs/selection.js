import React from 'react';
import { useHistory } from 'react-router';
import ImageLoader from 'react-loading-image';
import ImageLoading from '../utils/imageLoading';
const Selection = ()=> {
    const history = useHistory();
    const styleImage = {
        width: "100%",
        height: "100%"
    }
    return (
        <div>
            <div className="card-deck">
                <div className="card" onClick={()=> history.push('/blogs/tips')}>
                    <div className="embed-responsive embed-responsive-16by9">
                        <ImageLoader style={styleImage} loading={()=><ImageLoading/>} className=" embed-responsive-item card-img-top" src="https://firebasestorage.googleapis.com/v0/b/dctech-official.appspot.com/o/pexels-ann-h-2789779.jpg?alt=media&token=2bbaadfd-688a-43f4-b532-56ae40c528b5" alt="Card image cap"/>
                    </div>
                    <div className="card-body">
                    <h5 className="card-title">Tips on buying Japan Laptop</h5>
                    <p className="card-text">This article will teach you tips and ideas on Japan Laptops before buying</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Article</small>
                    </div>
                </div>
                <div className="card" onClick={()=> history.push('/blogs/whydctech')}>
                    <div className="embed-responsive embed-responsive-16by9">
                        <ImageLoader style={styleImage} loading={()=><ImageLoading/>} className="embed-responsive-item card-img-top" src="https://firebasestorage.googleapis.com/v0/b/dctech-official.appspot.com/o/pexels-photo-3769747.jpeg?alt=media&token=8dd338a3-47ee-46df-893a-9d4e80ed41b4" alt="Card image cap"/>
                    </div>
                    <div className="card-body">
                    <h5 className="card-title">Why choose DCTech?</h5>
                    <p className="card-text">There are lots of reason why choose DCTech. Find out why</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Article</small>
                    </div>
                </div>
                {/* <div className="card">
                    <img className="card-img-top" src="..." alt="Card image cap"/>
                    <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Selection;