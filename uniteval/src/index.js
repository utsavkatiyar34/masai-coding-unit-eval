import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './components/Home';
import Movie from './components/Movie';
import Bookings from './components/Bookings';
import Login from './components/Login';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/movie-details" element={<Movie/>}></Route>
        <Route exact path="/bookings" element={<Bookings/>}></Route>
        <Route exact path="/login" element={<Login/>}></Route>
      </Routes>
      <Footer/>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
