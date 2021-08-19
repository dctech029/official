import React,{useEffect,useState} from 'react';
import firebase from '../../dbconfig/firebaseConnection';
const Laptops = (props) => {
    const [laptopList,setLaptopList] = useState([]);
    const db = firebase.firestore().collection("/items");
    useEffect(()=> {
        const laptops = [];
        db.get().then(snapshot => {
            snapshot.docs.forEach(item => {
                laptops.push(item.data());
            })
            console.log(laptops);
            setLaptopList(laptops)
        }).catch( 
            err => console.log(err))
    },[])
    const {openModal} = props
    const loadLaptops = ()=> {
        return laptopList.map((item,index) => (
                <div key={index} className="card mb-3 p-lg-4 p-md-2 p-1" disabled={!item.is_available} onClick={()=> {
                    openModal()
                }}>
                     <div className="embed-responsive embed-responsive-16by9">
                        <img className="embed-responsive-item card-img-top" src={item.product_images[0]} alt="Card image cap"/>
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
            {
                loadLaptops()
            }
            </div>
    )
}

export default Laptops;