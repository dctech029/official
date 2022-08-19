import React,{useState} from 'react';
import firebase from '../../dbconfig/firebaseConnection';
import { trackPromise} from 'react-promise-tracker';
const ProductManagement = ()=> {
    const storage = firebase.storage();
    const [colorCount, setColorCount] = useState(1);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const ColorPicker = () => {
        var htmlContent = [];
        for(var a= 0; a < colorCount; a++){
            htmlContent.push(<input type="color" class="form-control col"/>)
        }  
        return htmlContent;
    }
    const onFileSelect = (e) => {
        const files = e.target.files;
        setSelectedFiles(files);
    }
    const onFormSubmit = (e) => {
        e.preventDefault();
        saveToDatabase()
    }
    const saveToDatabase = () => {
        for(var a = 0; a < selectedFiles.length; a++){
            const selectedFile = selectedFiles[a];
            trackPromise(storage.ref(`${selectedFile.name}`).put(selectedFile).then((snapshot) => {
                snapshot.ref.getDownloadURL().then(function(downloadURL) {
                    console.log("File available at", downloadURL);
                });
            }))
        }
    }
    return (
        <div className='container  mt-5'>
            <form onSubmit={onFormSubmit} className='row'>
                <div className='col-6'>
                    <div class="form-group">
                        <label for="product_name">Product name</label>
                        <input id="product_name" name='product_name' type="text" class="form-control" placeholder="Product name"/>
                    </div>
                    <div class="form-group">
                        <label>Brand</label>
                        <input name='product_brand' type="text" class="form-control" placeholder="Brand"/>
                    </div>
                    <div class="form-group">
                        <label>Product CPU</label>
                        <input name='product_cpu' type="text" class="form-control" placeholder="Product CPU"/>
                    </div>
                    <div class="form-group">
                        <label>Product HDD</label>
                        <input name='product_hdd' type="text" class="form-control" placeholder="Product HDD"/>
                    </div>
                    <div class="form-group">
                        <label>Description</label>
                        <textarea class="form-control" rows="3" placeholder='Enter Description here'></textarea>
                    </div>
                </div>
                <div className='col-6'>
                    <div class="form-group">
                        <label>Price</label>
                        <input name='product_price' type="text" class="form-control" placeholder="Enter Product Price"/>
                    </div>
                    <div class="form-group">
                        <label>Product Ram</label>
                        <input name='product_ram' type="text" class="form-control" placeholder="Enter Product Ram"/>
                    </div>
                    <div className='form-group'>
                        <label>Is Available</label>
                        <div class="form-group">
                            <select class="form-control">
                                <option value={1}>Available</option>
                                <option value={0}>Out of Stock</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Color/s</label>
                        <input style={{height:'20px', width:'40px'}} defaultValue={1} min={1} className='ml-1' type="number"  onChange={(e)=> setColorCount(e.target.value)}/>
                        <div className='container row'>
                            <ColorPicker/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Product Images</label>
                        <input onChange={onFileSelect} type="file" class="form-control-file" accept="image/png, image/gif, image/jpeg" multiple/>
                    </div>
                </div>
                <button type='submit' className='btn btn-primary' onClick={() => console.log(selectedFiles)}>Save Product</button>
            </form>
        </div>
    )
}

export default ProductManagement;