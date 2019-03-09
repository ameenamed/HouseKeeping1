import React, { Component } from 'react'

export class Allocate extends Component {

    




  render() {
    return (
      <div>
        <form style={{display:'flex'}} >
            <p>Asset Id:
            <input type="text" name="asset" placeholder="Enter Asset Id" style={{flex:'10', padding:'5px'}} />
            </p>
            
            <p>Task Id:
            <input type="text" name="task" placeholder="Enter Tasks Id" style={{flex:'10', padding:'5px'}} />
            </p>
            
            <p> Worker Id:
            <input type="text" name="worker" placeholder="Enter Worker Id" style={{flex:'10', padding:'5px 10px'}} />
            </p>
        
          <p> Current Time:
          <input type="text" name="curr" placeholder="Enter Current Time" style={{flex:'10', padding:'5px'}} />
          </p>

          <p>Work to be completed within
          <input type="text" name="time" placeholder="Enter Work to be completed within" style={{flex:'10', padding:'5px'}} />
          </p>

          <p>
          <input type="submit" value="Submit" style={{flex:'1'}}/>
          </p>

      </form>
      </div>
    )
  }
}

export default Allocate
