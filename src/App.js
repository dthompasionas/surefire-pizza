import './App.css';
import React, {useState} from 'react';
import Navbar from './components/Navbar/index';
import Sidebar from './components/sidebar';
import Footer from './components/Footer/Footer';
import home from './components/pages/home';
import menu from './components/pages/menu/menu';
import location from './components/pages/location/location';
import about from './components/pages/about/about';
import contact from './components/pages/contact/contact';
import cart from './components/pages/cart/cart';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }
  return (
    <div className="App">
      <Router>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <Switch>
          <Route path='/' exact component={home}/>
          <Route path='/menu' component={menu}/>
          <Route path='/location' component={location}/>
          <Route path='/about' component={about}/>
          <Route path='/contact' component={contact}/>
          <Route path='/cart' component={cart}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
