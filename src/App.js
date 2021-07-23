
import './App.css';
import Items from './components/items';
import Header from './components/header';
import Order from './components/order';
import {useState} from 'react';
function App() {
  const [isShowModal,setShowModal] = useState(false);
  const closeModal = ()=> {
    setShowModal(false);
  }
  const openModal = ()=> {
    setShowModal(true);
  }
  return (
    <div>
      <Header/>
      <div className="container pt-3">
        <Items openModal={openModal}/>
        <Order isShow={isShowModal} closeModal={closeModal}/>
      </div>
    </div>
  );
}

export default App;
