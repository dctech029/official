import React, { useState, useEffect } from 'react';
import firebase from '../../dbconfig/firebaseConnection';
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
import EditProductModal from './edit_product_modal';
import AddProductModal from './add_product_modal';
const ProductManagement = () => {
    const [products, setProducts] = useState([]);

    const getAllProducts = async () => {
        const db = firebase.firestore();
        const arr = [];
        const productsArr = await db.collection("items").get();
        productsArr.docs.forEach(element => {
            arr.push({
                ...element.data(),
                id: element.id
            });
        });
        setProducts(arr);
    }
    const showEditProductModal = (product) => {
        const MySwal = withReactContent(Swal)
        MySwal.fire({
            title: "Edit Product",
            html: <EditProductModal product={product} 
                        close={async() => {
                            MySwal.close();
                            await getAllProducts();
                        }}/>,
            showCancelButton: false,
            showConfirmButton: false,
            showDenyButton: false,
            width: "1000px"
        })
    }
    const showAddProductModal = () => {
        const MySwal = withReactContent(Swal)
        MySwal.fire({
            title: "Add Product",
            html: <AddProductModal close={async() => {
                MySwal.close();
                await getAllProducts();
            }}/>,
            showCancelButton: false,
            showConfirmButton: false,
            showDenyButton: false,
            width: "1000px"
        })
    }
    useEffect(() => {
        async function loadData() {
            await getAllProducts();
        }
        loadData();
    }, [])
    return (
        <div className='container  mt-5'>
            <div className='row mb-3'>
                <button className='btn btn-primary' onClick={() => {
                    showAddProductModal();
                }}>Add Product</button>
            </div>
            <table class="table mb-3">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Brand</th>
                        <th scope="col">Processor</th>
                        <th scope="col">Storage</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((item,index) => (
                            <tr>
                                <th scope="row">{item.id}</th>
                                <td>{item.product_brand}</td>
                                <td>{item.product_cpu}</td>
                                <td>{item.product_hdd}</td>
                                <td>
                                    <button className='btn btn-primary' onClick={() => {
                                        showEditProductModal(item)
                                    }}>Edit</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            
        </div>
    )
}

export default ProductManagement;