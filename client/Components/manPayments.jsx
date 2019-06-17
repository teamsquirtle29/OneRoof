import React, { Component } from 'react';
import { NativeRouter } from "react-router-native";
import { BrowserRouter } from "react-router-dom";
import manPayDisplay from "./manPayDisplay.jsx";
import createPayments from "./createPayments.jsx";

class ManPayments extends Component {
  constructor(props) {
    super(props)
    this.state = {
      paymentsOverdue: [],
      currentPayments: []
    }
  }

  componentDidMount() {
    fetch('/payment/overdue', {
    method: 'GET'
    })
    .then(res => {
      return res.json();
    })
    .then(data =>{
        console.log(data);
        return this.setState(state => {
            this.state.paymentsOverdue = data;
            return this.state;
        })
    })
    .then(() =>{
      console.log(this.state.paymentsOverdue);
      return;
      })

      fetch('/payment/now', {
        method: 'GET'
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        return this.setState(state => {
          this.state.currentPayments = data;
          return this.state;
        })
      })
      
  }


  render() {
    const manPayDisplay = <manPayDisplay paymentsOverdue={this.state.paymentsOverdue} currentPayments={this.state.currentPayments}/>
    const createPayments = <createPayments aptList={this.props.aptList}/>
    return (
      <div>
        {manPayDisplay}
        {createPayments}
      </div>
    )
  }
}

export default ManPayments;