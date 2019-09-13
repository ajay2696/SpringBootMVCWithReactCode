import React from 'react';
import logo from './logo.svg';
import { hot } from "react-hot-loader";
import './App.css';
import Component1 from './Component1';
import Component2 from './Component2';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
           <Route exact path='/' render={()=>(<Component1 />)} />
           <Route path='/component2' render={()=>(<Component2 />)}/>
    </div>
  );
}

export default hot(module)(App);
