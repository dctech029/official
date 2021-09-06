import React from 'react';
import Videos from './videos';
import "./index.css"
const Gallery = ()=> {
    return (
        <div>
            <div className="row justify-content-center">
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-secondary">Images</button>
                    <button type="button" class="btn btn-secondary" autoFocus="true">Videos</button>
                </div>
            </div>
            <hr></hr>
            <Videos/>
        </div>
    )
}

export default Gallery;