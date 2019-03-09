import React, { Component } from 'react'
import PropTypes from 'prop-types';
export class InputAsset extends Component {
    state={
        id:'',
        title:''
    }

    onSubmit = (e)=>{
        e.preventDefault();
        this.props.addToDo(this.state.id,this.state.title);
        this.setState({id:''},{title:''});
        
    }
    onChange = (e)=>this.setState({title:e.target.value});

    onChange1 = (e)=>this.setState({id:e.target.value});
  render() {
    return (
      <div>
        <form style={{display:'flex'}}  onSubmit={this.onSubmit}>
          <input type="text" name="id" placeholder="Id" style={{flex:'10', padding:'5px'}} onChange={this.onChange1} value={this.state.id}/>
          <br/>
          <input type="text" name="title" placeholder="Asset Description" style={{flex:'10', padding:'5px'}} onChange={this.onChange} value={this.state.title} />
          <br/>
          <input type="submit" value="Submit" style={{flex:'1'}}/>
      </form>
        
      </div>
    )
  }
}
InputAsset.propTypes={
  addToDo: PropTypes.func.isRequired
}

export default InputAsset
