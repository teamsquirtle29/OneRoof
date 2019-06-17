import React, { Component } from 'react';


class MakePayment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      aptId: [],
      month: 0
    };
    this.changeMonth = this.changeMonth.bind(this);
    this.sendPayment = this.sendPayment.bind(this);
  }

  changeMonth(event) {
    this.setState({ month: event.target.value })
  }

  sendPayment(event){
    fetch('/payments/send', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ apt_id: this.props.aptId, month: this.state.month })
    })
    .then(res => {
      this.props.updatePaymentDisplay();
    })
  } 

  render() {
    
    return (
      <div>
        <select onChange={(e) => this.changeMonth(e)}>
          <option>Month</option>
          <option value={0}>January</option>
          <option value={1}>February</option>
          <option value={2}>March</option>
          <option value={3}>April</option>
          <option value={4}>May</option>
          <option value={5}>June</option>
          <option value={6}>July</option>
          <option value={7}>August</option>
          <option value={8}>September</option>
          <option value={9}>October</option>
          <option value={10}>November</option>
          <option value={11}>December</option>
        </select>
        Amount:
        <input type="text"/>
        <button type="submit" onClick={this.sendPayment}>Submit</button>
      </div>
    )
  }
}

export default MakePayment;