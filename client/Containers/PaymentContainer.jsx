import React, {Component} from 'react';
import TenantPayment from '../Components/TenantPayment';
import ManPayments from '../Components/ManPayments';


class PaymentContainer extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const ManPayments = <ManPayments aptList={this.props.aptList}/>
    const TenantPayments = <TenantPayments userId={this.props.userId}/>
    return (
      <div>
        {this.props.role === 'Manager' ? ManPayments : TenantPayments}
      </div>
    );
  }
}

export default PaymentContainer;