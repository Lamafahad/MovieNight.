import React, { Component } from 'react';
import OneTop from './OneTop.js';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

class Top extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
      items: []
    };
   
    this.addItem = this.addItem.bind(this);
  }

  
  addItem(e) {
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };
   
      this.setState((prevState) => {
        return { 
          items: prevState.items.concat(newItem) 
        };
      });
     
      this._inputElement.value = "";
    }
     
    console.log(this.state.items);
       
    e.preventDefault();
  }

  render() {
      return (
        <div className="TopPage">
          <div className="header">
      <h3>ADD YOUE TOP MOVIES LIST</h3>
      <div className="form1">
            <form onSubmit={this.addItem}>
              <input ref={(a) => this._inputElement = a} 
                      placeholder="Movie Name" />
              <Button variant="danger" size="lg" type="submit">Add</Button>
            </form>
    </div>
          </div>
          <OneTop entries={this.state.items}/>
        </div>
      );
    }}

  export default Top;