import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
const EditProductModal = ({product}) => {
    return (
        <div >
            <form className="container">
                <div className="row">
                    <div className="form-group text-left col-6">
                        <label>Name</label>
                        <input type="text" value={product.product_name} className="form-control"/>
                    </div>
                    <div className="form-group text-left col-6">
                        <label>Price</label>
                        <input type="text" value={product.product_price} className="form-control"/>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group text-left col-6">
                        <label>Memory</label>
                        <input type="text" value={product.product_ram} className="form-control"/>
                    </div>
                    <div className="form-group text-left col-6">
                        <label>Quantity</label>
                        <input type="text" value={product.quantity} className="form-control"/>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group text-left col-6">
                        <label>Brand</label>
                        <input type="text" value={product.product_brand} className="form-control" aria-describedby="emailHelp" placeholder="Enter Brand" />
                        {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                    </div>
                    <div className="form-group text-left col-6">
                        <label>CPU</label>
                        <input type="text" value={product.product_cpu} className="form-control"/>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group text-left col-6">
                        <label>Hdd</label>
                        <input type="text" value={product.product_hdd} className="form-control"/>
                    </div>
                    <div className="form-group text-left col-6">
                        <label>Colors</label>
                        <input type="color" value={product.product_colors} className="form-control"/>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group text-left col-12">
                        <label>Description</label>
                        <ReactQuill style={{
                            height: "150px"
                        }} theme="snow" value={product.product_description}/>
                        {/* <textarea rows={5} value={product.product_description} className="form-control" placeholder="Password"/> */}
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-secondary mr-1">Cancel</button>
                        <button className="btn btn-primary">Submit</button>
                    </div>

                </div>

                {/* <button type="submit" className="btn btn-primary">Submit</button> */}
            </form>
        </div>
    )
}
export default EditProductModal;