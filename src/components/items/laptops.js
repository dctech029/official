import React,{useEffect} from 'react';
import firebase from '../../dbconfig/firebaseConnection';
import { useSelector,useDispatch } from 'react-redux';
import { retrieveItems } from '../../reducers/itemsSlice';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const Laptops = (props) => {
    const laptopList = useSelector((state) => state.items);
    const dispatch = useDispatch();
    const db = firebase.firestore().collection("/items");
    useEffect(()=> {
        const laptops = [];
        db.get().then(snapshot => {
            snapshot.docs.forEach(item => {
                laptops.push(item.data());
            })
            dispatch(retrieveItems(laptops))
        }).catch( 
            err => console.log(err))
    },[])
    const {openModal} = props
    const LoadLaptops = ()=> {
        return laptopList.map((item,index) => (
                <div key={index} className="card shadow-lg p-3 mb-5 bg-white rounded"  onClick={()=> {
                    openModal()
                }}>
                     <div className="embed-responsive embed-responsive-16by9">
                        <img 
                            className="border embed-responsive-item card-img-top"
                            src={item.product_images[0]}
                            alt="Card image cap"/>
                     </div>
                    <div className="card-body">
                        <h5 className="card-title">{item.product_name}</h5>
                        <p className="card-text textLimit">{item.product_description}</p>
                    </div>
                    <div className="card-footer">
                        <a href="#" className="btn btn-primary">Buy now for {item.product_price}</a>
                    </div>
                </div>
        ))
    }
    return (
            <div className="card-deck">
                <LoadLaptops/>
            </div>
    )
}

export default Laptops;