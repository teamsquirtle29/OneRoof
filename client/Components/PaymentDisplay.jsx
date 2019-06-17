import React, { Component } from 'react';


class PaymentDisplay extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    const paymentHistory = []
    this.props.paymentHistory.forEach(element => paymentHistory.push(<li>Month:{JSON.stringify(element.month)} Amount: $200 Paid: {JSON.stringify(element.paid)} Received: {JSON.stringify(element.received)}</li>))
    return (
      <div>
        <ul>
          {PaymentHistory}
        </ul>
      </div>
    )
  }
}

export default PaymentDisplay;