import './app.css'
import React from 'react';
import Logo from '../components/template/logo'
import Nav from '../components/template/nav'
import Home from '../components/home/home'
import Footer from '../components/template/footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import {BrowserRouter} from 'react-router-dom';
import Routes from './Routes';
export default props => 
    <BrowserRouter>
        <div className="app">
            <Logo/>
            <Nav/> 
            <Routes/> 
            <Footer/>
        </div>
    </BrowserRouter>
   