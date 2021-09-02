
import './App.css';
import Items from './components/items';
import Header from './components/header';
import Order from './components/order';
import About from './components/misc/about';
import Gallery from './components/gallery';
import {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Link
} from "react-router-dom";
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
    <Router>
    <div>
      <Header openAboutModal={openAboutModal}/>
      <div className="container pt-3">
        <Switch>
          <Link to="/gallery" component={Gallery} />
          <Link to="/" component={ <Items openModal={openModal}/>} />
        </Switch>
        <Order isShow={isShowOrderModal} closeModal={closeModal}/>
        <About isShow={isShowAboutModal} closeModal={closeAboutModal}/>
      </div>
    </div>
    </Router>
  );
}

export default App;
