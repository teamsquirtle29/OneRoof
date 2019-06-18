import React, { Component } from 'react'
import ManPayDisplay from './ManPayDisplay.jsx'
import CreatePayments from './createPayments.jsx'
import ReceivePayments from './ReceivePayments.jsx'

class ManPayments extends Component {
  constructor(props) {
    super(props)
    this.state = {
      paymentsOverdue: [],
      currentPayments: [],
      apt_id: '',
      month: '',
    }
    this.updatePayments = this.updatePayments.bind(this);
    this.createPay = this.createPay.bind(this);
    this.receivePay = this.receivePay.bind(this);
    this.updateApt = this.updateApt.bind(this);
    this.updateMonth = this.updateMonth.bind(this);

  }

  componentDidMount() {
    this.updatePayments();
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
          console.log('overdue: ', data);
          return this.setState({paymentsOverdue: data})
      })
      .then(() =>{
        console.log(this.state.paymentsOverdue);
        return;
        })
  
        fetch('/payments/current', {
          method: 'GET'
        })
        .then(res =>{
           return res.json()
          })
        .then(data => {
          console.log('current: ', data)
          return this.setState({currentPayments: data})
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
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          apt_id: this.state.apt_id,
          month: this.state.month
        })
    })
    .then(res => {
      console.log(res);
      this.updatePayments();
    })
  }

  updateApt(apt) {
    return this.setState({apt_id: apt})
  }

  updateMonth(month) {
    return this.setState({month: this.props.monthKey[month]})
  }


  render() {
    const manPayDisplay = <ManPayDisplay paymentsOverdue={this.state.paymentsOverdue} monthTranslate={this.props.monthTranslate} currentPayments={this.state.currentPayments} monthKey={this.props.monthKey}/>
    const createPayments = <CreatePayments createPay={this.createPay} />
    const receivePayments = <ReceivePayments aptList={this.props.aptList} monthTranslate={this.props.monthTranslate} receivePay={this.receivePay} updateApt={this.updateApt} monthKey={this.props.monthKey} updateMonth={this.updateMonth} />

    return (
      <div>
        <div id='manPayDiv'>
          {manPayDisplay}
        </div>
          <div id='createPayDiv'>
            {createPayments}
          </div>
          <div id='receivePayDiv'>
            {receivePayments} 
          </div>
      </div>
    )
  }
}

export default ManPayments;