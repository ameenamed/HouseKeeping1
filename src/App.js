import React, { Component } from 'react';
import Header from './components/Header';
import AddAsset from './components/AddAsset'
import { BrowserRouter, Route} from 'react-router-dom'
import Body from './components/Body';
import './App.css';
import {AddAsset as A} from './components/AddAsset';
import AddTasks from './components/AddTasks';
import AddWorker from './components/AddWorker';
import Allocate from './components/Allocate';

class App extends Component {
  render() {
    return (
      
      <div className="App">
        <BrowserRouter>
        <React.Fragment>

        <Route exact path="/" render={props =>(
        <React.Fragment>
          <Header/>
          <Body/>
        </React.Fragment>)}/>

        <Route exact path="/asset" component={AddAsset} render={props =>(
        <React.Fragment>
            <A/>
        </React.Fragment>)}/>

        <Route exact path="/task" component={AddTasks} render={props =>(
          <React.Fragment>
            <AddTasks/>
          </React.Fragment>
        )}/>

        <Route exact path="/worker" component={AddWorker} render={props =>(
          <React.Fragment>
            <AddWorker/>
          </React.Fragment>
        )}/>

        <Route exact path="/allocate" component={Allocate} render={props =>(
          <React.Fragment>
            <Allocate/>
          </React.Fragment>
        )}/>



        



        </React.Fragment>

        </BrowserRouter>
      </div>
      
    );
  }
}

export default App;
