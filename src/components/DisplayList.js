import React, { Component } from 'react'
import List from './List';
import uuid from 'uuid';
import PropTypes from 'prop-types';

export class DisplayList extends Component {
  render() {console.log(this.props.todos)
    return this.props.todos.map((todo)=>(
        <List key={uuid.v4()} todo1={todo}/>
    ));
      }
  }

  DisplayList.propTypes={
    todos: PropTypes.array.isRequired
  }


export default DisplayList
