
import './App.css';
import Items from './components/items';
import Header from './components/header';
import Order from './components/order';
import About from './components/misc/about';
import Gallery from './components/gallery';
import Dashboard from './components/dashboard';
import {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from "react-router-dom";
function App() {
  const [isShowOrderModal,setShowOrderModal] = useState(false);
  const closeModal = ()=> {
    setShowOrderModal(false);
  }
  const openModal = ()=> {
    setShowOrderModal(true);
  }
  return (
    <Router>
    <div>
      <Header/>
      <div className="container pt-3">
        <Switch>
          <Redirect exact from="/" to="dashboard"/>
          <Route path="/gallery" exact>
            <Gallery />
          </Route>
          <Route path="/dashboard">
              <Dashboard/>
          </Route>
          <Route path="/products" exact>
              <Items openModal={openModal}/>
          </Route>
          <Route path="/about" exact>
              <About/>
          </Route>
        </Switch>
        <Order isShow={isShowOrderModal} closeModal={closeModal}/>
      </div>
    </div>
    </Router>
  );
}

export default App;
