import React,{ Fragment } from 'react';
import {Switch ,Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Details from './components/Details';
import Default from './components/Default';
import ProductList from './components/ProductList';
import Modal from './components/Modal';
import Cart from './components/Cart';


function App(){
  return (
<Fragment>
  <Navbar/>
  <Switch>
<Route path='/' component={ProductList} exact/>
<Route path='/details' component={Details} />
<Route path='/cart' component={Cart} />
<Route component={Default} />
</Switch>
<Modal />
</Fragment>
  );
}

export default App;
