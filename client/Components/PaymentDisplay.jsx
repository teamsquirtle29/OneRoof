import React, { Component } from 'react';


class PaymentDisplay extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    const paymentHistory = []
    this.props.paymentHistory.forEach((element, index) => paymentHistory.push(<li key={index}>Month:{JSON.stringify(element.month)} Amount: $200 Sent: {JSON.stringify(element.sent)} Received: {JSON.stringify(element.received)}</li>))
    return (
      <div>
        <ul>
          {paymentHistory}
        </ul>
      </div>
    )
  }
}

export default PaymentDisplay;