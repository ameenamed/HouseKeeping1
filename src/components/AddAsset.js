import React, { Component } from 'react'
import InputAsset from './InputAsset';
import DisplayList from './DisplayList';


export class AddAsset extends Component {
    state = {
       todos:[{
         id:1,
         title:"Hello"}
       ]
    }

    addToDo =(id,title)=>{
        const newTodo={
          id:id
        }
        const newlodo={
          title:title
        }
        this.setState({todos:[this.state.id,newTodo]});
        this.setState({todos:[this.state.title,newlodo]});
      }

  render() {
    return (
      <div>
        <InputAsset addToDo={this.addToDo}/>
        <DisplayList todos={this.state.todos} />
      </div>
    )
  }
}

export default AddAsset
