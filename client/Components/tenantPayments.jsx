import React, { Component } from 'react';
import { NativeRouter } from "react-router-native";
import { BrowserRouter } from "react-router-dom";


class tenantPayments extends Component {
  constructor(props) {
    super(props)
    this.state = {
      paymentHistory: []
    }
  }

  componentDidMount() {
    fetch('/payment/history', {
    method: 'GET',
    body: { apt_id: this.props.aptId }
    })
    .then(res => {
      return res.json();
    })
    .then(data =>{
        console.log(data);
        return this.setState(state => {
            this.state.paymentHistory = data;
            return this.state;
        })
    })
    .then(() =>{
      console.log(this.state.paymentHistory);
      return;
      })
  }
  

  render() {
    const paymentDisplay = <paymentDisplay paymentHistory = {this.state.paymentHistory}/>
    const makePayment = <makePayment aptId = {this.props.aptId}/>
    return (
      <div>
        {paymentDisplay}
        {makePayment}
      </div>
    )
  }
}

export default tenantPayments;