import ReactQuill from 'react-quill';
import firebase from '../../dbconfig/firebaseConnection';
import { useState , useEffect } from 'react';
import 'react-quill/dist/quill.snow.css'
const EditProductModal = ({product,close}) => {
    const [productState, setProductState] = useState();
    const onChange = (e) => {
        const isQuill = e.target === undefined ? true : false;
        if(isQuill){
            setProductState({
                ...product,
                product_description : e
            })
        }else{
            setProductState({
                ...product,
                [e.target.name] : e.target.value
            })
        }
    }
    const updateDatabase = async () => {
        const db = firebase.firestore();
        const item = await db.collection("items").doc(productState.id);
        await item.update(productState);
        alert('Product successfully updated.');
        close();
        // window.location.reload();
    }
    const onSubmitForm = async(e) => {
        e.preventDefault();
        await updateDatabase();
    }
    useEffect(() => {
        console.log(productState);
        setProductState(productState)
    },product)
    return (
        <div >
            <form className="container" onSubmit={onSubmitForm}>
                <div className="row">
                    <div className="form-group text-left col-6">
                        <label>Name</label>
                        <input name='product_name' onChange={onChange} type="text" value={product.product_name} className="form-control"/>
                    </div>
                    <div className="form-group text-left col-6">
                        <label>Price</label>
                        <input name='product_price' onChange={onChange} type="text" value={product.product_price} className="form-control"/>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group text-left col-6">
                        <label>Memory</label>
                        <input name='product_ram' onChange={onChange} type="text" value={product.product_ram} className="form-control"/>
                    </div>
                    <div className="form-group text-left col-6">
                        <label>Quantity</label>
                        <input name='quantity' onChange={onChange} type="text" value={product.quantity} className="form-control"/>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group text-left col-6">
                        <label>Brand</label>
                        <input name='product_brand' onChange={onChange} type="text" value={product.product_brand} className="form-control" aria-describedby="emailHelp" placeholder="Enter Brand" />
                        {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                    </div>
                    <div className="form-group text-left col-6">
                        <label>CPU</label>
                        <input name='product_cpu' onChange={onChange} type="text" value={product.product_cpu} className="form-control"/>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group text-left col-6">
                        <label>Hdd</label>
                        <input name='product_hdd' onChange={onChange} type="text" value={product.product_hdd} className="form-control"/>
                    </div>
                    {
                        product.product_colors.map(color => (
                            <div className="form-group text-left col-6">
                                <label>Colors</label>
                                <input name='product_colors' type="color" value={color} className="form-control"/>
                            </div>
                        ))
                    }
                </div>
                <div className='row'>
                    <div className='form-group'>
                        <label>Is Available</label>
                        <div class="form-group">
                            <select name='is_available' class="form-control" value={product.is_available} onChange={onChange}>
                                <option value={1}>Available</option>
                                <option value={0}>Out of Stock</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group text-left col-12">
                        <label>Description</label>
                        <ReactQuill style={{
                            
                            height: "150px"
                        }} theme="snow" defaultValue={product.product_description} onChange={onChange}/>
                        {/* <textarea rows={5} value={product.product_description} className="form-control" placeholder="Password"/> */}
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12 d-flex justify-content-end">
                        <button type='button' className="btn btn-secondary mr-1">Cancel</button>
                        <button type='submit' className="btn btn-primary">Submit</button>
                    </div>

                </div>

                {/* <button type="submit" className="btn btn-primary">Submit</button> */}
            </form>
        </div>
    )
}
export default EditProductModal;