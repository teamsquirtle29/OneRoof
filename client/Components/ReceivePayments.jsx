import React from 'react';
import AptNum from './ApartmentDropDown.jsx'
import Months from './MonthsDropDown.jsx'


const ReceivePayments = (props) => {

  const aptDrop = [];
  const aptNumList = props.aptList;
  aptNumList.forEach(num => aptDrop.push(<AptNum aptNum={num} />));

  const monthDrop = [];
  const monthsList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  monthsList.forEach(el => monthDrop.push(<Months month={el} monthKey={props.monthKey} />));

  return (
    <div key="receivedDiv" id="received">
      <div>
      Mark Received:
      <form key="receivedForm" id="receivedForm" onSubmit={e => {
      e.preventDefault();
      props.receivePay();
        }}> 
        {'Apt# '}
        <select value={props.apt} onChange={e => props.updateApt(e.target.value)}>
          <option>Select</option>
          {aptDrop}
        </select>
        {'Month '}
        <span>
        <select value={props.month} onChange={e => props.updateMonth(e.target.value)} >
          <option>Month</option>
          {monthDrop}
          </select>
        <button key="receiveButton" className="receiveButton" type="submit">Submit</button>
        </span>
      </form>
    </div>
  </div>
  );
}

export default ReceivePayments;