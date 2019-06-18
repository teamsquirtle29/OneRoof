import React from 'react';

const ManPayDisplay = (props) => {
    let currentDisplay = [];
    let overdueDisplay = [];
    const paymentsOverdue = props.paymentsOverdue;
    const currentPayments = props.currentPayments;
    paymentsOverdue.forEach(element => {
        overdueDisplay.push(<li>Month: {JSON.stringify(element.month)} Apt#: {JSON.stringify(element.apt_id)}</li>);
    })
    currentPayments.forEach(element => {
      currentDisplay.push(<li>Apt#: {JSON.stringify(element.apt_id)} Paid: {JSON.stringify(element.paid)} Received: {JSON.stringify(element.received)}</li>);
  })

  
    return (
      <div>
        <span>
          <ul>
            Current Month Payments
            {currentDisplay}
          </ul>
          <ul>
            Overdue Payments
            {overdueDisplay}
          </ul>
        </span>
      </div>
    );
}

export default ManPayDisplay;