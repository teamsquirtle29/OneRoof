import React, { Component } from 'react'
import ManPayDisplay from './ManPayDisplay.jsx'
import CreatePayments from './CreatePayments.jsx'
import ReceivePayments from './ReceivePayments.jsx'

class ManPayments extends Component {
  constructor(props) {
    super(props)
    this.state = {
      paymentsOverdue: [],
      currentPayments: [],
      apt_id: '',
      month: ''
    }
    this.updatePayments = this.updatePayments.bind(this);
    this.createPay = this.createPay.bind(this);
    this.receivePay = this.receivePay.bind(this);
    this.updateApt = this.updateApt.bind(this);
    this.updateMonth = this.updateMonth.bind(this);

  }

  componentDidMount() {
    this.updatePayments;
    return;
  }

  updatePayments() {
    fetch('/payments/overdue', {
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
  
        fetch('/payments/now', {
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

   createPay() {
    fetch('/payments', {
        method: 'POST'
    })
    .then(res => {
      this.updatePayments();
    })
  }

  receivePay() {
    fetch('/payments', {
        method: 'PUT',
        body: {
          "apt_id": this.state.apt_id,
          "month": this.state.month
        }
    })
    .then(res => {
      this.updatePayments();
    })
  }

  updateApt(apt) {
    return this.setState(state => {
      this.state.apt_id = apt;
      return this.state;
    })
  }

  updateMonth(month) {
    return this.setState(state => {
      this.state.month = month;
      return this.state;
    })
  }


  render() {
    const manPayDisplay = <ManPayDisplay paymentsOverdue={this.state.paymentsOverdue} currentPayments={this.state.currentPayments}/>
    const createPayments = <CreatePayments createPay={this.createPay} />
    const receivePayments = <ReceivePayments aptList={this.props.aptList} receivePay={this.receivePay} updateApt={this.updateApt} updateMonth={this.updateMonth} />

    return (
      <div>
        <div>
          {manPayDisplay}
        </div>
        <div>
          <span>
          {createPayments}
          </span>
          <span>
          {receivePayments}
          </span>
        </div>
      </div>
    )
  }
}

export default ManPayments;