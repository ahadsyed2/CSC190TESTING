import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SellCar from './pages/SellCar';
import AboutCarmony from './pages/AboutCarmony';
import AboutDealers from './pages/AboutDealers';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Posting from './pages/Posting'; 
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';

//testing
import Login2 from './pages/Login2'
import Signup2 from './pages/Signup2'



function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/SellCar'  Component={SellCar} />
          <Route path='/AboutCarmony' Component={AboutCarmony} />
          <Route path='/AboutDealers' Component={AboutDealers} />
          <Route path='/Contact' Component={Contact} />
          <Route path='/login' Component={Login} />
          <Route path='/signup' Component={Signup} />
          <Route path='/Posting' Component={Posting} />
          <Route path='/ForgotPassword' Component={ForgotPassword} />
          <Route path='/ResetPassword' Component={ResetPassword} />

         


        </Routes>
      </Router>
    
  );
}

export default App;