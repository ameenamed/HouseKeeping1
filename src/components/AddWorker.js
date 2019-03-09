import React, { Component } from 'react'

export class AddWorker extends Component {
  render() {
    return (
      <div>
          <form style={{display:'flex'}} >
          <input type="text" name="id" placeholder="Id" style={{flex:'10', padding:'5px'}} />
          <br/>
          <input type="text" name="title" placeholder="Worker Description" style={{flex:'10', padding:'5px'}} />
          <br/>
          <input type="submit" value="Submit" style={{flex:'1'}}/>
        </form>
        </div>
    )
  }
}

export default AddWorker
