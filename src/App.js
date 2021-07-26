
import './App.css';
import Items from './components/items';
import Header from './components/header';
import Order from './components/order';
import About from './components/misc/about';
import {useState} from 'react';
function App() {
  const [isShowOrderModal,setShowOrderModal] = useState(false);
  const [isShowAboutModal,setShowAboutModal] = useState(false);
  const closeModal = ()=> {
    setShowOrderModal(false);
  }
  const openModal = ()=> {
    setShowOrderModal(true);
  }
  const openAboutModal = ()=> {
    setShowAboutModal(true);
  }
  const closeAboutModal = () => {
    console.log("Hallow");
    setShowAboutModal(false);
  }
  return (
    <div>
      <Header openAboutModal={openAboutModal}/>
      <div className="container pt-3">
        <Items openModal={openModal}/>
        <Order isShow={isShowOrderModal} closeModal={closeModal}/>
        <About isShow={isShowAboutModal} closeModal={closeAboutModal}/>
      </div>
    </div>
  );
}

export default App;
