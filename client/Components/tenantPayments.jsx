import React, { Component } from 'react';


class TenantPayments extends Component {
  constructor(props) {
    super(props)
    this.state = {
      paymentHistory: []
    }
    this.updatePaymentDisplay = this.updatePaymentDisplay.bind(this);
  }

  componentDidMount() {
    this.updatePaymentDisplay();
  }

  
  updatePaymentDisplay(){
    fetch('/payment/history', {
    method: 'GET',
    body: { apt_id: this.props.aptId }
    })
    .then(res => {
      return res.json();
    })
    .then(data =>{
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
    const PaymentDisplay = <PaymentDisplay paymentHistory = {this.state.paymentHistory}/>
    const MakePayment = <MakePayment aptId = {this.props.aptId}/>
    return (
      <div>
        {PaymentDisplay}
        {MakePayment}
      </div>
    )
  }
}

export default TenantPayments;