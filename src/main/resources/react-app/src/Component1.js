import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Component1 extends Component {
  render(){

    return (
      <div>
      <h1>component is one</h1>
      <Link to='/component2' className="open-search">component2</Link>
      </div>
    )
  }
}

export default Component1;
