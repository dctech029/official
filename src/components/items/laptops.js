import React,{useEffect} from 'react';
import firebase from '../../dbconfig/firebaseConnection';
import { useSelector,useDispatch } from 'react-redux';
import { retrieveItems } from '../../reducers/itemsSlice';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const Laptops = (props) => {
    const laptopList = useSelector((state) => state.items);
    const testing = useSelector(state => state)
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
                <div key={index} className="card mb-3 p-lg-4 p-md-2 p-1"  onClick={()=> {
                    openModal()
                }}>
                     <div className="embed-responsive embed-responsive-16by9">
                        <div className="embed-responsive-item card-img-top">
                        <LazyLoadImage 
                            width="100%"
                            height="100%"
                            src={item.product_images[0]} 
                            effect="blur"
                            alt="Card image cap"/>
                        </div>
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