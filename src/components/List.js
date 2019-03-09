import React, { Component } from 'react'
import PropTypes from 'prop-types';
export class List extends Component {
    
    getStyle = () =>{
        return{
            background:'#f4f4f4',
            padding:'10px',
            borderBottom:'1px #ccc dotted'}
    }

    
    
  render() {

    return (
      
        
      <div style={this.getStyle()} >
      <p>
      {this.props.todo1.id} {' : '}{this.props.todo1.title}{'   '}
      <button>Delete</button>
      </p>
      </div>
    )
  }
}

List.propTypes={
  todo: PropTypes.object.isRequired
}
export default List
