import React,{useEffect,useState} from 'react';
const Laptops = (props) => {
    const [laptopList,setLaptopList] = useState([]);
    useEffect(()=> {
        function getJsonData() {
            fetch('https://dctech029.github.io/official/storage/items.json')
            .then((response) => response.json())
            .then((responseJson) => {
                setLaptopList(responseJson)
            })
            .catch((_error) => {
                setLaptopList([])
            });
         }
         getJsonData()
    })
    const {openModal} = props
    const ss = laptopList;
    const loadLaptops = ()=> {
        return ss.map(item => (
                <div className="card mb-3 p-lg-4 p-md-2 p-1" disabled={!item.isavailable}  onClick={()=> {
                    openModal()
                }}>
                     <div className="embed-responsive embed-responsive-16by9">
                        <img className="embed-responsive-item card-img-top" src={item.image} alt="Card image cap"/>
                     </div>
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text textLimit">{item.specs}</p>
                    </div>
                    <div className="card-footer">
                        <a href="#" className="btn btn-primary">Buy now for {item.price}</a>
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