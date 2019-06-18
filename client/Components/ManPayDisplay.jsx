import React from 'react';

const ManPayDisplay = (props) => {
    let currentDisplay = [];
    let overdueDisplay = [];
    const paymentsOverdue = props.paymentsOverdue;
    const currentPayments = props.currentPayments;
    paymentsOverdue.forEach(element => {
        console.log(props.monthTranslate(element.month));
        overdueDisplay.push(<li>{'Month: '} {props.monthTranslate(element.month)} {' Apt#: '} {JSON.stringify(element.apt_id)}</li>);
    })
    currentPayments.forEach(element => {
      currentDisplay.push(<li>{'Apt#: '} {JSON.stringify(element.apt_id)} {' Month: '} {props.monthTranslate(element.month)} {' Paid: '} {JSON.stringify(element.sent)} {' Received: '} {JSON.stringify(element.received)}</li>);
  })

  
    return (
      <div>
        <div>
          Current Month Payments
          <ul>
            {currentDisplay}
          </ul>
        </div>
        <div>
          Overdue Payments
          <ul>
            {overdueDisplay}
          </ul>
        </div>
      </div>
    );
}

export default ManPayDisplay;