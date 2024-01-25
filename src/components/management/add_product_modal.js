import { useState } from "react";
import firebase from '../../dbconfig/firebaseConnection';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { trackPromise } from 'react-promise-tracker';
const AddProductModal = ({close}) => {
    const [colorCount, setColorCount] = useState(1);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [productDetails, setProductDetails] = useState({
        is_available: true,
        product_brand: '',
        product_colors: [],
        product_cpu: '',
        product_description: '',
        product_hdd: '',
        product_images: [],
        product_name: '',
        product_price: '',
        product_ram: '',
        quantity: ''
    });
    const ColorPicker = () => {
        var htmlContent = [];
        for (var a = 0; a < colorCount; a++) {
            htmlContent.push(<input type="color" class="form-control col" />)
        }
        return htmlContent;
    }
    const onFileSelect = (e) => {
        const files = e.target.files;
        setSelectedFiles(files);
    }
    const onFormSubmit = async (e) => {
        e.preventDefault();
        const storage = firebase.storage();
        var fileUrls = [];
        var colors = [];
        let aa = document.getElementById('colorPickerContainer');
        
        for (var a = 0; a < selectedFiles.length; a++) {
            const selectedFile = selectedFiles[a];
            const snapshot =  await storage.ref(`${selectedFile.name}`).put(selectedFile);
            const downloadUrl = await snapshot.ref.getDownloadURL();
            fileUrls.push(downloadUrl);
            console.log("File available at", downloadUrl);
            
            // await trackPromise(storage.ref(`${selectedFile.name}`).put(selectedFile).then((snapshot) => {
            //     snapshot.ref.getDownloadURL().then(function (downloadURL) {
            //         fileUrls.push(downloadURL);
            //         console.log("File available at", downloadURL);
            //     });
            // }))
        }
        let children = aa.children;
        for (var i = 0; i < children.length; i++) {
            colors.push(children[i].value);
        }

        setProductDetails({
            ...productDetails,
            product_images: fileUrls,
            product_colors: colors
        })
        await saveToDatabase(fileUrls, colors);
    }
    const onChangeEvent = (e) => {
        const isEditor = !e.target ? true : false;
        if(isEditor){
            setProductDetails({
                ...productDetails,
                product_description: e
            })
        }
        else{
            setProductDetails({
                ...productDetails,
                [e.target.name]: e.target.value
            })
        }

    }
    const saveToDatabase = async (urls, colorss) => {
        const db = firebase.firestore();
        const newObject = {
            ...productDetails,
            product_colors: colorss,
            product_images: urls
        }
        console.log(newObject);
        await db.collection("items").add(newObject);
        alert('Product successfully added.');
        close();
        // window.location.reload();
    }
    return (
        <div className="container">
        <form onSubmit={async (e) => await trackPromise(onFormSubmit(e))} className='row'>
            <div className='col-6'>
                <div class="form-group">
                    <label for="product_name">Product name</label>
                    <input id="product_name" onChange={onChangeEvent} name='product_name' type="text" class="form-control" placeholder="Product name" />
                </div>
                <div class="form-group">
                    <label>Brand</label>
                    <input name='product_brand' onChange={onChangeEvent} type="text" class="form-control" placeholder="Brand" />
                </div>
                <div class="form-group">
                    <label>Product CPU</label>
                    <input name='product_cpu' onChange={onChangeEvent} type="text" class="form-control" placeholder="Product CPU" />
                </div>
                <div class="form-group">
                    <label>Product HDD</label>
                    <input name='product_hdd' onChange={onChangeEvent} type="text" class="form-control" placeholder="Product HDD" />
                </div>
                <div class="form-group">
                    <label>Description</label>
                    {/* <textarea name='product_description' class="form-control" rows="3" placeholder='Enter Description here'></textarea> */}
                    {/* <Editor editorState={editorState} onChange={setEditorState} />; */}
                    <ReactQuill style={{
                        height: "150px"
                    }} theme="snow" value={productDetails.product_description} onChange={onChangeEvent} />
                </div>
            </div>
            <div className='col-6'>
                <div class="form-group">
                    <label>Price</label>
                    <input name='product_price' onChange={onChangeEvent} type="text" class="form-control" placeholder="Enter Product Price" />
                </div>
                <div class="form-group">
                    <label>Product Ram</label>
                    <input name='product_ram' onChange={onChangeEvent} type="text" class="form-control" placeholder="Enter Product Ram" />
                </div>
                <div className='form-group'>
                    <label>Is Available</label>
                    <div class="form-group">
                        <select class="form-control" onChange={onChangeEvent}>
                            <option value={1}>Available</option>
                            <option value={0}>Out of Stock</option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label>Color/s</label>
                    <input style={{ height: '20px', width: '40px' }} defaultValue={1} min={1} className='ml-1' type="number" onChange={(e) => setColorCount(e.target.value)} />
                    <div id="colorPickerContainer" className='container row'>
                        <ColorPicker />
                    </div>
                </div>
                <div class="form-group">
                    <label>Product Images</label>
                    <input onChange={onFileSelect} type="file" class="form-control-file" accept="image/png, image/gif, image/jpeg" multiple />
                </div>
            </div>
            <div className="col-12 d-flex justify-content-end">
                <button type='button' className='btn btn-secondary mr-1 mt-5' onClick={() => close()}>Cancel</button>
                <button type='submit' className='btn btn-primary mt-5'>Save</button>
            </div>
        </form>
        </div>
    )
}
export default AddProductModal;