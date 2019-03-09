import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export class Body extends Component {
  render() {
    return (
      <div>
        <Link to="/asset"><h1>Add Asset</h1></Link>
        <br/>
        <Link to="/task"><h1>Add Tasks</h1> </Link>
        <br/>
        <Link to="/worker"><h1>Add Worker</h1></Link>
        <br/>
        <Link to="/allocate"><h1>Allocate Tasks</h1></Link>
        <br/>
        <Link to="/"><h1>Get Tasks for Workers</h1></Link>

      </div>
    )
  }
}

export default Body
