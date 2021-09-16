
import './App.css';
import Items from './components/items';
import Header from './components/header';
import Order from './components/order';
import About from './components/misc/about';
import Gallery from './components/gallery';
import Dashboard from './components/dashboard';
import ContactUs from './components/contactus';
import Blogs from './components/blogs';
import {useState} from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat';
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
        <Switch>
          <Redirect exact from="/" to="dashboard"/>
          <Route path="/gallery" exact>
            <div className="container pt-3">
              <Gallery />
            </div>
          </Route>
          <Route path="/dashboard">
            <div className="container p-0 pt-lg-3 pt-md-3">
              <Dashboard />
            </div>
          </Route>
          <Route path="/products" exact>
          <div className="container pt-3">
              <Items openModal={openModal}/>
          </div>
          </Route>
          <Route path="/contactus" exact>
            <div className="container pt-3">
              <ContactUs/>
            </div>
          </Route>
          <Route path="/about" exact>
            <div className="container pt-3">
              <About/>
            </div>
          </Route>
          <Route path="/blogs">
            <div className="container pt-3">
              <Blogs/>
            </div>
          </Route>
        </Switch>
        <MessengerCustomerChat
          pageId="1240010709403709"
          appId="279201470490004"
        />,
        <Order isShow={isShowOrderModal} closeModal={closeModal}/>
    </div>
    </Router>
  );
}

export default App;
