import React, { Component } from 'react';
import Dropdown from './dropdown';

import './App.css';

const ddOptions = {
  "1":{
    "label":"One",
    "disabled":false
  },
  "2":{
    "label":"Two",
    "disabled":false
  }
}
const ddOptionsDisabledOption = {
  "1":{
    "label":"One",
    "disabled":false
  },
  "2":{
    "label":"Two",
    "disabled":true
  }
}
class App extends Component {
  
  constructor(props){
    super(props)
    this._onDDSelect = this._onDDSelect.bind(this);
  }
  
  _onDDSelect(args){
    console.log(args);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"> Simple React Dropdown</h1>
        </header>
        <div className="App-intro">
        <div className="dd-section">
        <p>Normal case dropdown</p>
          <Dropdown
          options={ddOptions} 
              onSelectHandler={this._onDDSelect}
              disabled={false}
              resetOnSelect={false}
              placeholder={"Select Count"}
          />  
          </div>
          <div className="dd-section">
          <p>Dropdown with disabled option</p>
          <Dropdown
          options={ddOptionsDisabledOption} 
              onSelectHandler={this._onDDSelect}
              disabled={false}
              resetOnSelect={false}
              placeholder={"Select Count"}
          />  
          </div>
          <div className="dd-section">
          <p>Disabled Dropdown</p>
           <Dropdown
          options={ddOptions} 
              onSelectHandler={this._onDDSelect}
              disabled={true}
              resetOnSelect={false}
              placeholder={"Select Count"}
          />  
          </div>
          <div className="dd-section">
          <p>Dropdown with resetOnSelect true</p>
           <Dropdown
          options={ddOptions} 
              onSelectHandler={this._onDDSelect}
              disabled={false}
              resetOnSelect={true}
              placeholder={"Select Count"}
          />  
          </div>
        </div>
      </div>
    );
  }
}

export default App;
