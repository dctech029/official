import React,{useEffect,useState} from 'react';
import firebase from '../../dbconfig/firebaseConnection';
import { useSelector,useDispatch } from 'react-redux';
import { retrieveItems } from '../../reducers/itemsSlice';
import { trackPromise} from 'react-promise-tracker';
import ItemDetails from './itemdetails';
import parse from 'html-react-parser';
import 'react-lazy-load-image-component/src/effects/blur.css';
const Laptops = (props) => {
    const laptopList = useSelector((state) => state.items);
    const [isShowItemDetails,setIsShowItemDetails] = useState(false);
    const [selectedItem,setSelectedItem] = useState();
    const dispatch = useDispatch();
    const db = firebase.firestore().collection("/items");
    useEffect(()=> {
            async function loadData(){
                const laptops = [];
                const snapshot = await db.get();
                snapshot.docs.forEach(item => {
                    laptops.push(item.data());
                })
                dispatch(retrieveItems(laptops))
            }
            trackPromise(
                loadData()
            )
    },[])
    const {openModal} = props
    const LoadLaptops = ()=> {
        return laptopList.map((item,index) => (
                <div key={index} className="card shadow-lg p-3 mb-5 bg-white rounded">
                     <div className="embed-responsive embed-responsive-16by9">
                        <img 
                            className="border embed-responsive-item card-img-top"
                            src={item.product_images[0]}
                            alt="Card image cap"/>
                     </div>
                    <div className="card-body">
                        <h5 className="card-title">{item.product_name}</h5>
                        <p className="card-text textLimit">{parse(item.product_description)}</p>
                        <a href="javascript:void(0)" onClick={
                            ()=> {
                                setSelectedItem(item)
                                setIsShowItemDetails(true)
                            }
                        } className="stretched-link">More details..</a>
                    </div>
                    <div className="card-footer">
                        <button  onClick={()=> {
                            openModal()
                        }} className="btn btn-primary">Buy now for ₱ {item.product_price}</button>
                    </div>
                </div>
        ))
    }
    return (
            <div className="card-deck">
                <LoadLaptops/>
                {
                    selectedItem === undefined ? null :
                    <ItemDetails item={selectedItem} isShow={isShowItemDetails} closeModal={()=> setIsShowItemDetails(false)}/>
                }
            </div>
    )
}

export default Laptops;